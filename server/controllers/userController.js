import asyncHandler from 'express-async-handler';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import db from '../config/database.js';
import { userSchema } from '../validators/userValidator.js';

// Register user
export const registerUser = asyncHandler(async (req, res) => {
  const validatedData = userSchema.parse(req.body);
  
  const userExists = db.prepare('SELECT * FROM users WHERE email = ?').get(validatedData.email);
  if (userExists) {
    res.status(400);
    throw new Error('User already exists');
  }
  
  const hashedPassword = await bcrypt.hash(validatedData.password, 10);
  
  const result = db.prepare(`
    INSERT INTO users (name, email, password)
    VALUES (?, ?, ?)
  `).run(validatedData.name, validatedData.email, hashedPassword);
  
  const user = db.prepare('SELECT id, name, email FROM users WHERE id = ?').get(result.lastInsertRowid);
  
  res.status(201).json({
    ...user,
    token: generateToken(user.id)
  });
});

// Login user
export const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  
  const user = db.prepare('SELECT * FROM users WHERE email = ?').get(email);
  
  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user.id)
    });
  } else {
    res.status(401);
    throw new Error('Invalid email or password');
  }
});

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET || 'your-secret-key', {
    expiresIn: '30d'
  });
};