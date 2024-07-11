import express from "express";
import {
  index,
  productsIndex,
  suppliersIndex,
  usersIndex,
  ordersIndex,
  createProduct,
} from "../controllers/dashboard_controller.js";
const router = express.Router();

router.route("/").get(index);

router.route("/products").get(productsIndex).post(createProduct);
router.route("/suppliers").get(suppliersIndex);
router.route("/users").get(usersIndex);
router.route("/orders").get(ordersIndex);

export default router;
