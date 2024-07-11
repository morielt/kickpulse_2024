import ProductService from "../services/product_service.js";

// admin dashboard
export function index(req, res) {
  res.redirect("/dashboard/products");
}

export async function productsIndex(req, res) {
  const allProducts = await ProductService.getProducts();
  res.render("../views/dashboard/dashboard_products", {
    products: allProducts,
  });
}
export async function createProduct(req, res) {
  const { name, sizes, price, quantity, description, supplier, image, brand } =
    req.body;

  await ProductService.createProduct(
    name,
    price,
    quantity,
    description,
    supplier,
    image,
    brand,
    sizes
  );
  res.redirect("/dashboard");
}

export function suppliersIndex(req, res) {
  res.render("../views/dashboard/dashboard_suppliers");
}

export function usersIndex(req, res) {
  res.render("../views/dashboard/dashboard_users");
}
export function ordersIndex(req, res) {
  res.render("../views/dashboard/dashboard_orders");
}
