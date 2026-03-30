import React from 'react';
import { Home, Search, ShoppingBag, User } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const BottomNav = ({ cartCount }) => {
  const location = useLocation();

  return (
    <nav className="bottom-nav">
      <Link to="/" className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>
        <Home size={24} />
        <span className="nav-label">Home</span>
      </Link>
      <div className="nav-item">
        <Search size={24} />
      </div>
      <Link to="/cart" className="nav-item central-action">
        <div className="central-btn">
          <ShoppingBag size={28} />
          {cartCount > 0 && <span className="central-badge">{cartCount}</span>}
        </div>
      </Link>
      <div className="nav-item">
        <div className="nav-icon-wrapper">
          <div className="nav-badge-dot"></div>
          <User size={24} />
        </div>
      </div>
      <div className="nav-item profile-nav">
        <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=100&auto=format&fit=crop" alt="Profile" />
      </div>

      <style>{`
        .bottom-nav {
          display: none;
          position: fixed;
          bottom: 25px;
          left: 5%;
          width: 90%;
          height: 70px;
          background: rgba(13, 4, 4, 0.95);
          backdrop-filter: blur(20px);
          border-radius: 40px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          justify-content: space-around;
          align-items: center;
          z-index: 2000;
          padding: 0 10px;
          box-shadow: 0 15px 40px rgba(0,0,0,0.6);
        }
        .nav-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          color: #666;
          text-decoration: none;
          transition: 0.3s;
          cursor: pointer;
          position: relative;
        }
        .nav-label { font-size: 0.65rem; font-weight: 700; margin-top: 4px; display: none; }
        .nav-item.active { color: #ff5a1f; }
        .nav-item.active .nav-label { display: block; }

        .central-action {
          transform: translateY(-20px);
        }
        .central-btn {
          width: 65px;
          height: 65px;
          background: #ffcc00; /* Sun Yellow from reference */
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #000;
          box-shadow: 0 10px 25px rgba(255, 204, 0, 0.4);
          border: 5px solid #0d0404;
          position: relative;
        }
        .central-badge {
          position: absolute;
          top: 0;
          right: 0;
          background: #ff5a1f;
          color: white;
          font-size: 0.65rem;
          font-weight: 800;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid #ffcc00;
        }

        .nav-icon-wrapper { position: relative; }
        .nav-badge-dot {
          position: absolute;
          top: 0;
          right: 0;
          width: 8px;
          height: 8px;
          background: #ff5a1f;
          border-radius: 50%;
          border: 2px solid #0d0404;
        }

        .profile-nav img {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          border: 1px solid #444;
        }

        @media (max-width: 768px) {
          .bottom-nav { display: flex; }
        }
      `}</style>
    </nav>
  );
};

export default BottomNav;
