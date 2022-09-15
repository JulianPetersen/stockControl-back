import ProductoVendido from "../models/productoVendido";


export const createProductVendido = async (req, res) => {
  const { producto, cantVentas, fecha} = req.body;
  const newProductVendido = new ProductoVendido({ producto, cantVentas,fecha});
  const newProductVendidoSaved = await newProductVendido.save();
  res.status(201).json(newProductVendidoSaved);
};

export const getProductVendido = async (req, res) => {
  const productVendido = await ProductoVendido.find({userId:req.params.userId})
  .populate('producto')
  res.json(productVendido);
};

export const getProductVendidoByYear = async (req, res) => {
  const productVendido = await ProductoVendido.find({year:req.params.year,userId:req.params.userId})
  .populate('producto')
  res.json(productVendido);
};

export const updateProductoVendido = async (req, res) => {
  const updateProductoVendido = await ProductoVendido.findByIdAndUpdate(
    req.params.productVendido,
    req.body,
    {
      new: true,
    }
  );
  res.status(200).json(updateProductoVendido);
};
