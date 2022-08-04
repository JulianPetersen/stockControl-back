import categoryProduct from "../models/ProductCategoty";

export const createCategory = async (req, res) => {
  const { name } = req.body;
  const newCategory = new categoryProduct({ name });
  const CategorySaved = await newCategory.save();
  res.status(201).json(CategorySaved);
};

export const getCategories = async (req, res) => {
  const categories = await categoryProduct.find();
  res.json(categories);
};
