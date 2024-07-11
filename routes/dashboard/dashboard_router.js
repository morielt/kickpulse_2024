import express from 'express';
import {
  usersIndex,
  ordersIndex,
} from '../../controllers/dashboard_controller.js';

import { productsIndex } from '../../controllers/dashboard/products_controller.js';
import { suppliersIndex } from '../../controllers/dashboard/suppliers_controller.js';

const router = express.Router();

// redirect admin to products temporarily until admin login
router.route('/').get((req, res) => res.redirect('/dashboard/products'));

router.route('/products').get(productsIndex);

router.route('/suppliers').get(suppliersIndex);

router.route('/users').get(usersIndex);
router.route('/orders').get(ordersIndex);

export default router;
