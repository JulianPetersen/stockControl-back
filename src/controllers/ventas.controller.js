import Venta from "../models/ventas";


export const createVenta = async (req, res) => {
  const { producto, monto, metodoPago, fecha, month, year } = req.body;
  const newVenta = new Venta({ producto, monto, metodoPago, fecha, month, year});
  const ventaSaved = await newVenta.save();
  res.status(201).json(ventaSaved);
};

export const getVentas = async (req, res) => {
  const ventas = await Venta.find()
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
  const deletedVenta = await Venta.findByIdAndDelete(req.params.ventaId);
  res.status(204).json();
};

export const getByDate = async (req,res) => {
  console.log(req.params.fecha)
  const ventasByDate = await Venta.find({fecha:req.params.fecha})
  .populate('producto')
  res.status(200).json(ventasByDate)
}

export const getByMonth = async (req,res) => {
  console.log(req.params.month)
  const ventasByMonth = await Venta.find({month:req.params.month})
  .populate('producto')
  res.status(200).json(ventasByMonth)
}

export const getByYear = async (req,res) => {
  const ventasByYear = await Venta.find({year:req.params.year})
  .populate('producto')
  res.status(200).json(ventasByYear)
}


