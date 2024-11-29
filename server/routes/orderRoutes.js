import express from 'express';
import { createOrder, getUserOrders } from '../controllers/orderController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/')
  .post(protect, createOrder)
  .get(protect, getUserOrders);

export { router as orderRoutes };