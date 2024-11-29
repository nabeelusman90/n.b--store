import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { productRoutes } from './routes/productRoutes.js';
import { userRoutes } from './routes/userRoutes.js';
import { orderRoutes } from './routes/orderRoutes.js';
import { errorHandler } from './middleware/errorMiddleware.js';
import { initializeDatabase } from './config/database.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Initialize database
initializeDatabase();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);

// Error handling
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});