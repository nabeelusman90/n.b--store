import { useCartStore } from '../store/useCartStore';
import { Button } from './ui/Button';
import { Minus, Plus, Trash2 } from 'lucide-react';

export const Cart = () => {
  const { items, removeItem, updateQuantity, total } = useCartStore();

  if (items.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">Your cart is empty</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {items.map((item) => (
        <div
          key={item.id}
          className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm"
        >
          <img
            src={item.image}
            alt={item.name}
            className="w-20 h-20 object-cover rounded"
          />
          <div className="flex-1">
            <h3 className="font-semibold">{item.name}</h3>
            <p className="text-gray-600">${item.price}</p>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="secondary"
              onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
            >
              <Minus size={16} />
            </Button>
            <span className="w-8 text-center">{item.quantity}</span>
            <Button
              variant="secondary"
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
            >
              <Plus size={16} />
            </Button>
          </div>
          <Button
            variant="outline"
            onClick={() => removeItem(item.id)}
            className="text-red-500"
          >
            <Trash2 size={18} />
          </Button>
        </div>
      ))}
      <div className="border-t pt-4">
        <div className="flex justify-between items-center">
          <span className="font-semibold">Total:</span>
          <span className="text-xl font-bold">${total.toFixed(2)}</span>
        </div>
        <Button className="w-full mt-4">Proceed to Checkout</Button>
      </div>
    </div>
  );
};