import { ProductsModel } from '../../models/dashboard/product.js';

const getProducts = async () => {
  try {
    const products = await ProductsModel.find();
    return products;
  } catch (err) {
    console.error('Error retrieving products:', err);
    throw err;
  }
};

const getProduct = async (id) => {
  try {
    const product = await ProductsModel.findById(id);
    if (!product) throw 'Error finding product';

    return product;
  } catch (error) {
    console.log(`${error} on object ${id}`);
  }
};

const createProduct = async (product) => {
  try {
    const newProduct = new ProductsModel({
      name: product.name,
      sizes: product.sizes,
      price: product.price,
      quantity: product.quantity,
      description: product.description,
      supplier: product.supplier,
      image: product.image,
      brand: product.brand,
      category: product.category,
      gender: product.gender,
    });

    const savedProduct = await newProduct.save();
    return savedProduct;
  } catch (err) {
    console.error('Error saving product:', err);
  }
};

const deleteProduct = async (id) => {
  try {
    const res = await ProductsModel.findByIdAndDelete(id);
    if (!res) throw 'Failed deleting object';

    return res;
  } catch (error) {
    console.log(error);
  }
};

const editProduct = async (id, options) => {
  try {
    const res = await ProductsModel.findByIdAndUpdate(id, options);
    if (!res) throw 'Failed deleting object';

    return res;
  } catch (error) {
    console.log(error);
  }
};

export default {
  getProducts,
  getProduct,
  createProduct,
  deleteProduct,
  editProduct,
};
