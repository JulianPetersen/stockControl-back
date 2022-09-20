import Product from "../models/Products";

export const createProduct = async (req, res) => {
  const { name, category, price, stock, userId} = req.body;
  const newProduct = new Product({ name, category, price,stock, userId});
  if (req.file) {
    const { filename } = req.file;
    newProduct.setImgUrl(filename);
  }
  const ProductSaved = await newProduct.save();
  
  res.status(201).json(ProductSaved);
  
};

export const getProducts = async (req, res) => {
  const products = await Product.find({userId:req.params.userId});
  res.json(products);
};

export const getByName = async (req,res) => {
  const products = await Product.find({userId:req.params.userId, name :{ $regex: '.*' + req.params.name + '.*' }})
  res.json(products)
}


export const getProductById = async (req, res) => {
  const product = await Product.findById(req.params.productId);
  res.status(200).json(product);
};

export const updateProductById = async (req, res) => {
  console.log(req.body)
  const updatedProduct = await Product.findByIdAndUpdate(
    req.params.productId,
    req.body,
    {
      new: true,
    }
  );
  res.status(200).json(updatedProduct);
};

export const deleteProductById = async (req, res) => {
  const deletedProduct = await Product.findByIdAndDelete(req.params.productId);
  res.status(204).json();
};
