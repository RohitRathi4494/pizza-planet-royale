import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';

const Navbar = ({ cartCount, onCartClick }) => {
  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      padding: '1.2rem 5%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      zIndex: 1000,
      background: 'rgba(20, 4, 4, 0.85)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--glass-border)'
    }}>
      <Link to="/" className="logo">Pizza Planet</Link>
      <ul className="nav-links" style={{ display: 'flex', gap: '2rem', listStyle: 'none' }}>
        <li><Link to="/">Home</Link></li>
        <li><a href="#menu">Menu</a></li>
        <li><a href="#about">About</a></li>
      </ul>
      
      <Link 
        to="/cart"
        style={{
          position: 'relative',
          cursor: 'pointer',
          color: 'var(--accent-color)',
          display: 'flex',
          alignItems: 'center',
          textDecoration: 'none'
        }}
      >
        <ShoppingCart size={24} />
        {cartCount > 0 && (
          <span style={{
            position: 'absolute',
            top: '-8px',
            right: '-10px',
            background: 'var(--text-primary)',
            color: 'var(--primary-color)',
            fontSize: '0.7rem',
            fontWeight: 'bold',
            width: '18px',
            height: '18px',
            borderRadius: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            {cartCount}
          </span>
        )}
      </Link>

      <style>{`
        .logo {
          font-size: clamp(1.1rem, 4vw, 1.5rem);
          font-weight: 800;
          letter-spacing: 2px;
          background: linear-gradient(45deg, var(--primary-color), var(--accent-color));
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          text-transform: uppercase;
          text-decoration: none;
        }
        .nav-links a {
          text-decoration: none;
          color: var(--text-primary);
          font-size: 0.85rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 1px;
          transition: var(--transition);
        }
        .nav-links a:hover { color: var(--accent-color); }
        @media (max-width: 768px) { .nav-links { display: none !important; } }
      `}</style>
    </nav>
  );
};

export default Navbar;
