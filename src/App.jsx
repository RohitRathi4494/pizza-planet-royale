import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
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
    // Persist cart on refresh
    const saved = localStorage.getItem('cart');
    return saved ? JSON.parse(saved) : [];
  });
  const [selectedItemForSize, setSelectedItemForSize] = useState(null);
  
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const activeCategoryData = menuData.find(cat => cat.id === activeCategory);
  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);

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
        .desktop-only { display: block; }
        @media (max-width: 768px) {
          .desktop-only { display: none; }
        }
      `}</style>
    </div>
  );
}

export default App;
