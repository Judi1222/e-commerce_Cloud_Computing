import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <Link to={`/product/${product.id}`} className="block">
        <img 
          src={product.image || '/placeholder-product.jpg'} 
          alt={product.name}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="font-semibold text-lg mb-1 line-clamp-1">{product.name}</h3>
          <p className="text-gray-600 mb-3">${product.price?.toFixed(2)}</p>
        </div>
      </Link>
      <div className="px-4 pb-4">
        <button 
          onClick={() => addToCart(product)}
          className="btn-primary w-full"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}