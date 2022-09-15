import categoryProduct from "../models/ProductCategoty";

export const createCategory = async (req, res) => {
  const { name, userId } = req.body;
  const newCategory = new categoryProduct({ name, userId });
  const CategorySaved = await newCategory.save();
  res.status(201).json(CategorySaved);
};

export const getCategories = async (req, res) => {
  const categories = await categoryProduct.find({userId:req.params.userId});
  res.json(categories);
};
