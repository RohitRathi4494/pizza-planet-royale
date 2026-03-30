import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, Link } from 'react-router-dom';
import { ShoppingCart, CheckCircle } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import CartPage from './pages/CartPage';
import BottomNav from './components/BottomNav';
import SizeModal from './components/SizeModal';
import { menuData } from './data/menuData';

function App() {
  const [activeCategory, setActiveCategory] = useState(menuData[0].id);
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('cart');
    return saved ? JSON.parse(saved) : [];
  });
  const [selectedItemForSize, setSelectedItemForSize] = useState(null);
  const [toast, setToast] = useState(null);
  
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);

  const showToast = (message) => {
    setToast(message);
    setTimeout(() => setToast(null), 2500);
  };

  const addToCart = (item, price, size = null) => {
    setCart(prevCart => {
      const existing = prevCart.find(i => i.name === item.name && i.size === size);
      if (existing) {
        return prevCart.map(i => 
          (i.name === item.name && i.size === size) ? { ...i, qty: i.qty + 1 } : i
        );
      }
      return [...prevCart, { name: item.name, price, size, qty: 1 }];
    });
    showToast(`Added ${item.name} to cart! 🍕`);
  };

  const updateQty = (index, delta) => {
    setCart(prevCart => {
      const newCart = [...prevCart];
      newCart[index].qty += delta;
      if (newCart[index].qty <= 0) {
        newCart.splice(index, 1);
      }
      return newCart;
    });
  };

  const handleAddToCartClick = (item) => {
    if (item.prices) {
      setSelectedItemForSize(item);
    } else {
      addToCart(item, item.price);
    }
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem('cart');
  };

  return (
    <div className="App">
      <Navbar cartCount={cartCount} onCartClick={() => navigate('/cart')} />
      
      {/* Toast Notification */}
      {toast && (
        <div className="app-toast">
          <CheckCircle size={18} />
          <span>{toast}</span>
        </div>
      )}

      {/* Floating Cart FAB */}
      <Link to="/cart" className={`floating-cart-fab ${cartCount > 0 ? 'visible' : ''}`}>
        <ShoppingCart size={24} />
        <span className="fab-count">{cartCount}</span>
      </Link>

      <Routes>
        <Route path="/" element={
          <Home 
            menuData={menuData}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            handleAddToCartClick={handleAddToCartClick}
          />
        } />
        <Route path="/cart" element={
          <CartPage 
            cart={cart}
            updateQty={updateQty}
            clearCart={clearCart}
          />
        } />
      </Routes>

      <div className="desktop-only">
        <Footer />
      </div>

      <BottomNav cartCount={cartCount} />

      <SizeModal 
        item={selectedItemForSize} 
        isOpen={!!selectedItemForSize} 
        onClose={() => setSelectedItemForSize(null)} 
        onSelectSize={addToCart}
      />
      
      <style>{`
        .app-toast {
          position: fixed;
          top: 20px;
          left: 50%;
          transform: translateX(-50%);
          background: #22c55e;
          color: white;
          padding: 12px 24px;
          border-radius: 50px;
          display: flex;
          align-items: center;
          gap: 10px;
          z-index: 5000;
          box-shadow: 0 10px 30px rgba(0,0,0,0.3);
          font-weight: 700;
          font-size: 0.9rem;
          animation: slideDownIn 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .floating-cart-fab {
          display: none;
          position: fixed;
          bottom: 110px;
          right: 20px;
          width: 60px;
          height: 60px;
          background: #ff5a1f;
          border-radius: 50%;
          align-items: center;
          justify-content: center;
          color: white;
          z-index: 2500;
          box-shadow: 0 10px 30px rgba(255, 90, 31, 0.4);
          text-decoration: none;
          transform: scale(0);
          transition: 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        
        .floating-cart-fab.visible {
          display: flex;
          transform: scale(1);
        }

        .fab-count {
          position: absolute;
          top: -5px;
          right: -5px;
          background: white;
          color: #ff5a1f;
          font-size: 0.7rem;
          font-weight: 900;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid #ff5a1f;
        }

        @keyframes slideDownIn {
          from { transform: translate(-50%, -100px); opacity: 0; }
          to { transform: translate(-50%, 0); opacity: 1; }
        }

        .desktop-only { display: block; }
        @media (max-width: 768px) {
          .desktop-only { display: none; }
        }
      `}</style>
    </div>
  );
}

export default App;
