import express from 'express';
import {
  getProducts,
  getProduct,
  createProduct,
  deleteProduct,
} from './dashboard/products_api.js';

import {
  createSupplier,
  deleteSupplier,
  getSupplier,
  getSuppliers,
} from './dashboard/suppliers_api.js';
const router = express.Router();

router.route('/products').get(getProducts).post(createProduct);
router.route('/products/:id').get(getProduct).delete(deleteProduct);

router.route('/suppliers').get(getSuppliers).post(createSupplier);
router.route('/suppliers/:id').get(getSupplier).delete(deleteSupplier);

export default router;
