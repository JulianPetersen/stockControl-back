import Venta from "../models/ventas";
import ProductoVendido from "../models/productoVendido";
import Product from "../models/Products";

export const createVenta = async (req, res) => {
  const { producto, monto, metodoPago, fecha, month, year, userId } = req.body;
  const newVenta = new Venta({ producto, monto, metodoPago, fecha, month, year, userId});
  const ventaSaved = await newVenta.save();

  const buscarProductoVendido = await ProductoVendido.find({producto:producto})

  if(buscarProductoVendido.length == 0){
    const newProductoVendido = new ProductoVendido({producto,cantVentas:1,fecha,month,year,userId})
    const newProductoVendidoSaved = await newProductoVendido.save();
    
  }
  if(buscarProductoVendido.length != 0){

    const cantidad = buscarProductoVendido[0].cantVentas
    const updateNewProduct = await ProductoVendido.updateOne({producto: {$eq:producto}}, {$set: {cantVentas:cantidad+1}})
  }

  const buscandoPorducto = await Product.find({_id:producto})
  const stockProduct = buscandoPorducto[0].stock;

  const updateStockProduct = await Product.updateOne({_id:producto}, {$set:{stock:stockProduct - 1 }})

   res.status(201).json(ventaSaved);
};

export const getVentas = async (req, res) => {
  const ventas = await Venta.find({userId:req.params.userId})
  .populate('producto')
  res.json(ventas);
};

export const getVentaById = async (req, res) => {
  const venta = await Venta.findById(req.params.ventaId);
  res.status(200).json(venta);
};

export const updateVenta = async (req, res) => {
  const updateVenta = await Venta.findByIdAndUpdate(
    req.params.ventaId,
    req.body,
    {
      new: true,
    }
  );
  res.status(200).json(updateVenta);
};

export const deleteVenta = async (req, res) => {
  const buscarVenta = await Venta.find({_id:req.params.ventaId})
  const productoEliminado = buscarVenta[0].producto;

  const buscarProductoVendido = await ProductoVendido.find({producto:productoEliminado})

  const cantidadVenta = buscarProductoVendido[0].cantVentas

  const updateNewProduct = await ProductoVendido.updateOne({producto: {$eq:productoEliminado}}, {$set: {cantVentas:cantidadVenta-1}})

  const deletedVenta = await Venta.findByIdAndDelete(req.params.ventaId);
  res.status(204).json();
};

export const getByDate = async (req,res) => {
  
  const ventasByDate = await Venta.find({fecha:req.params.fecha, userId:req.params.userId})
  .populate('producto')
  res.status(200).json(ventasByDate)
}

export const getByMonth = async (req,res) => {
 
  const ventasByMonth = await Venta.find({month:req.params.month, userId:req.params.userId})
  .populate('producto')
  res.status(200).json(ventasByMonth)
}

export const getByYear = async (req,res) => {
  const ventasByYear = await Venta.find({year:req.params.year, userId:req.params.userId})
  .populate('producto')
  res.status(200).json(ventasByYear)
}


