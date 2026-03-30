import React from 'react';
import { Home, Search, ShoppingCart, User } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const BottomNav = ({ cartCount }) => {
  const location = useLocation();

  return (
    <nav className="bottom-nav">
      <Link to="/" className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>
        <Home size={22} />
        <span>Home</span>
      </Link>
      <div className="nav-item">
        <Search size={22} />
        <span>Search</span>
      </div>
      <Link to="/cart" className={`nav-item ${location.pathname === '/cart' ? 'active' : ''}`}>
        <div className="cart-icon-wrapper">
          <ShoppingCart size={22} />
          {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
        </div>
        <span>Cart</span>
      </Link>
      <div className="nav-item">
        <User size={22} />
        <span>Profile</span>
      </div>

      <style>{`
        .bottom-nav {
          display: none;
          position: fixed;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 65px;
          background: rgba(20, 4, 4, 0.95);
          backdrop-filter: blur(15px);
          border-top: 1px solid var(--glass-border);
          justify-content: space-around;
          align-items: center;
          z-index: 2000;
          padding-bottom: env(safe-area-inset-bottom);
        }
        .nav-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          color: var(--text-secondary);
          text-decoration: none;
          gap: 4px;
          transition: 0.3s;
          cursor: pointer;
          min-width: 60px;
        }
        .nav-item span {
          font-size: 0.65rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .nav-item.active {
          color: var(--accent-color);
        }
        .cart-icon-wrapper {
          position: relative;
        }
        .cart-badge {
          position: absolute;
          top: -6px;
          right: -8px;
          background: var(--primary-color);
          color: white;
          font-size: 0.6rem;
          font-weight: 800;
          min-width: 16px;
          height: 16px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(255,255,255,0.2);
        }

        @media (max-width: 768px) {
          .bottom-nav { display: flex; }
        }
      `}</style>
    </nav>
  );
};

export default BottomNav;
