import { ProductsModel } from "../models/dashboard/product.js";

const getProducts = async () => {
  try {
    const products = await ProductsModel.find();
    return products;
  } catch (err) {
    console.error("Error retrieving products:", err);
    throw err;
  }
};

const createProduct = async (
  name,
  price,
  quantity,
  description,
  supplier,
  image,
  brand,
  sizes
) => {
  try {
    const newProduct = new ProductsModel({
      name,
      sizes,
      price,
      quantity,
      description,
      supplier,
      image,
      brand,
    });

    const savedProduct = await newProduct.save();
    console.log("Product saved:", savedProduct);
  } catch (err) {
    console.error("Error saving product:", err);
  }
};

export default { getProducts, createProduct };
