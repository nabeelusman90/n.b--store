import { z } from 'zod';

export const productSchema = z.object({
  name: z.string().min(2),
  description: z.string(),
  price: z.number().positive(),
  image: z.string().url(),
  category: z.string(),
  stock: z.number().int().nonnegative()
});