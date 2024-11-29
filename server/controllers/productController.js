import asyncHandler from 'express-async-handler';
import db from '../config/database.js';
import { productSchema } from '../validators/productValidator.js';

// Get all products
export const getProducts = asyncHandler(async (req, res) => {
  const products = db.prepare('SELECT * FROM products').all();
  res.json(products);
});

// Get single product
export const getProductById = asyncHandler(async (req, res) => {
  const product = db.prepare('SELECT * FROM products WHERE id = ?').get(req.params.id);
  
  if (!product) {
    res.status(404);
    throw new Error('Product not found');
  }
  
  res.json(product);
});

// Create product
export const createProduct = asyncHandler(async (req, res) => {
  const validatedData = productSchema.parse(req.body);
  
  const result = db.prepare(`
    INSERT INTO products (name, description, price, image, category, stock)
    VALUES (?, ?, ?, ?, ?, ?)
  `).run(
    validatedData.name,
    validatedData.description,
    validatedData.price,
    validatedData.image,
    validatedData.category,
    validatedData.stock
  );
  
  const product = db.prepare('SELECT * FROM products WHERE id = ?').get(result.lastInsertRowid);
  res.status(201).json(product);
});