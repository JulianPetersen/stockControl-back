import ProductoVendido from "../models/productoVendido";


export const createProductVendido = async (req, res) => {
  const { producto, cantVentas, fecha} = req.body;
  const newProductVendido = new ProductoVendido({ producto, cantVentas,fecha});
  const newProductVendidoSaved = await newProductVendido.save();
  res.status(201).json(newProductVendidoSaved);
};

export const getProductVendido = async (req, res) => {
  const productVendido = await ProductoVendido.find()
  .populate('producto')
  res.json(productVendido);
};

