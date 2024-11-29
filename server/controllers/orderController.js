import asyncHandler from 'express-async-handler';
import db from '../config/database.js';
import { orderSchema } from '../validators/orderValidator.js';

// Create order
export const createOrder = asyncHandler(async (req, res) => {
  const validatedData = orderSchema.parse(req.body);
  
  db.transaction(() => {
    const orderResult = db.prepare(`
      INSERT INTO orders (user_id, total, status)
      VALUES (?, ?, ?)
    `).run(req.user.id, validatedData.total, 'pending');
    
    const orderId = orderResult.lastInsertRowid;
    
    validatedData.items.forEach((item) => {
      db.prepare(`
        INSERT INTO order_items (order_id, product_id, quantity, price)
        VALUES (?, ?, ?, ?)
      `).run(orderId, item.productId, item.quantity, item.price);
    });
    
    return db.prepare(`
      SELECT * FROM orders WHERE id = ?
    `).get(orderId);
  })();
  
  res.status(201).json({ message: 'Order created successfully' });
});

// Get user orders
export const getUserOrders = asyncHandler(async (req, res) => {
  const orders = db.prepare(`
    SELECT o.*, oi.product_id, oi.quantity, oi.price
    FROM orders o
    LEFT JOIN order_items oi ON o.id = oi.order_id
    WHERE o.user_id = ?
  `).all(req.user.id);
  
  res.json(orders);
});