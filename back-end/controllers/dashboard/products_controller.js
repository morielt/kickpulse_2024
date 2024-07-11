import ProductService from '../../services/dashboard/product_service.js';

export async function productsIndex(req, res) {
  const allProducts = await ProductService.getProducts();
  res.render('../views/dashboard/products', {
    products: allProducts,
  });
}
