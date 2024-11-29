import { z } from 'zod';

export const orderSchema = z.object({
  total: z.number().positive(),
  items: z.array(z.object({
    productId: z.number().int().positive(),
    quantity: z.number().int().positive(),
    price: z.number().positive()
  }))
});