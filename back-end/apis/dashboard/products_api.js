import ProductService from '../../services/dashboard/product_service.js';
// restapi
export async function getProducts(req, res) {
  const products = await ProductService.getProducts();
  res.json(products);
}
export async function createProduct(req, res) {
  const product = { ...req.body };

  const newProduct = await ProductService.createProduct(product);

  res.json(newProduct);
}

export async function getProduct(req, res) {
  const { id } = req.params;
  const product = await ProductService.getProduct(id);
  res.json(product);
}

export async function deleteProduct(req, res) {
  const { id } = req.params;
  try {
    const deletedProduct = await ProductService.deleteProduct(id);
    if (!deletedProduct) throw 'error';
    res.json(deletedProduct);
  } catch (err) {
    console.log(err);
  }
}
