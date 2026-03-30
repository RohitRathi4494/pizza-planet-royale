import React from 'react';
import { MapPin, Search, ChevronDown } from 'lucide-react';

const MobileHeader = () => {
  return (
    <div className="mobile-header">
      <div className="location-bar">
        <div className="loc-icon"><MapPin size={18} /></div>
        <div className="loc-text">
          <span className="loc-label">Your location</span>
          <span className="loc-val">Pizza Planet HQ, Mars <ChevronDown size={14} /></span>
        </div>
        <div className="user-avatar">
          <img src="https://ui-avatars.com/api/?name=Guest+User&background=800a0a&color=fff" alt="User" />
        </div>
      </div>
      
      <div className="search-container">
        <div className="search-box">
          <Search size={18} color="#999" />
          <input type="text" placeholder="Type to search your favorite pizza..." />
        </div>
      </div>

      <style>{`
        .mobile-header {
          display: none;
          padding: 1rem 5%;
          background: var(--bg-dark);
          flex-direction: column;
          gap: 1.2rem;
          margin-top: 4.5rem; /* Space for fixed navbar if needed, or hide main navbar on mobile */
        }
        .location-bar {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .loc-icon {
          width: 40px;
          height: 40px;
          background: rgba(197, 160, 89, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-color);
        }
        .loc-text {
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        .loc-label {
          font-size: 0.7rem;
          color: var(--text-secondary);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .loc-val {
          font-size: 0.9rem;
          font-weight: 700;
          color: white;
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .user-avatar img {
          width: 40px;
          height: 40px;
          border-radius: 12px;
          border: 1px solid var(--accent-color);
        }
        .search-container {
          width: 100%;
        }
        .search-box {
          display: flex;
          align-items: center;
          gap: 12px;
          background: rgba(255,255,255,0.05);
          border: 1px solid var(--glass-border);
          padding: 0.8rem 1.2rem;
          border-radius: 12px;
        }
        .search-box input {
          background: transparent;
          border: none;
          color: white;
          width: 100%;
          font-size: 0.9rem;
        }
        .search-box input:focus { outline: none; }

        @media (max-width: 768px) {
          .mobile-header { display: flex; }
        }
      `}</style>
    </div>
  );
};

export default MobileHeader;
