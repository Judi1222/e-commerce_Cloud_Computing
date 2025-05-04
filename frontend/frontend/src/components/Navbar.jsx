import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCart } from '.../context/cartContext';
export default function Navbar() {
  const { totalItems } = useCart();
  const { currentUser, logout } = useAuth();

  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="text-xl font-bold text-blue-600">ShopEasy</Link>
          
          {/* Navigation */}
          <nav className="flex items-center space-x-6">
            <Link to="/products" className="text-gray-700 hover:text-blue-600 transition-colors">
              Products
            </Link>
            
            {/* Cart */}
            <Link to="/cart" className="relative p-2 text-gray-700 hover:text-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
            
            {/* Auth */}
            {currentUser ? (
              <button onClick={logout} className="btn-outline">
                Logout
              </button>
            ) : (
              <Link to="/login" className="btn-outline">
                Login
              </Link>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}