// src/pages/Cart.jsx
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

export default function Cart() {
  const { 
    cart, 
    removeFromCart, 
    totalItems, 
    totalPrice 
  } = useCart();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">
        Your Cart ({totalItems} items)
      </h1>

      {cart.length === 0 ? (
        <div className="text-center py-8">
          <p>Your cart is empty</p>
          <Link to="/products" className="text-blue-500 mt-2 inline-block">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          {cart.map(item => (
            <div key={item.id} className="flex items-center border-b pb-4">
              <img 
                src={item.image} 
                alt={item.name}
                className="w-20 h-20 object-cover mr-4"
              />
              <div className="flex-1">
                <h3 className="font-medium">{item.name}</h3>
                <p>${item.price} × {item.quantity}</p>
              </div>
              <button 
                onClick={() => removeFromCart(item.id)}
                className="text-red-500"
              >
                Remove
              </button>
            </div>
          ))}

          <div className="border-t pt-4">
            <div className="flex justify-between font-bold text-lg">
              <span>Total:</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <button className="w-full bg-blue-500 text-white py-2 mt-4 rounded">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}