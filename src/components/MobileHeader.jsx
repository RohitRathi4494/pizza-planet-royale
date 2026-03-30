import React from 'react';
import { MapPin, Search, ChevronDown, Bell } from 'lucide-react';

const MobileHeader = () => {
  return (
    <div className="mobile-header">
      <div className="header-top">
        <div className="location-chip">
          <div className="pin-icon"><MapPin size={16} fill="var(--primary-color)" stroke="var(--primary-color)" /></div>
          <div className="loc-info">
            <span className="loc-label">Your location</span>
            <span className="loc-addr">19578 Sun Cir <ChevronDown size={14} /></span>
          </div>
        </div>
        <div className="header-actions">
          <div className="action-btn"><Bell size={20} /></div>
          <div className="user-profile">
            <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=100&auto=format&fit=crop" alt="User" />
          </div>
        </div>
      </div>
      
      <div className="header-search">
        <div className="search-pill">
          <Search size={18} className="search-icon" />
          <input type="text" placeholder="Type to search" />
          <div className="filter-dropdown">
            <span className="filter-text">Now</span>
            <ChevronDown size={14} />
          </div>
        </div>
      </div>

      <style>{`
        .mobile-header {
          display: none;
          padding: 1.2rem 5% 0.8rem;
          background: var(--bg-dark);
          flex-direction: column;
          gap: 1.2rem;
          margin-top: 4rem; /* Below fixed Navbar if visible, usually just the app header */
        }
        .header-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .location-chip {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .pin-icon {
          width: 32px;
          height: 32px;
          background: rgba(255, 90, 31, 0.1);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .loc-info {
          display: flex;
          flex-direction: column;
        }
        .loc-label {
          font-size: 0.65rem;
          color: var(--text-secondary);
          text-transform: capitalize;
        }
        .loc-addr {
          font-size: 0.85rem;
          font-weight: 800;
          color: white;
          display: flex;
          align-items: center;
          gap: 3px;
        }
        .header-actions {
          display: flex;
          align-items: center;
          gap: 15px;
        }
        .action-btn {
          color: var(--text-secondary);
        }
        .user-profile img {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 2px solid var(--glass-border);
          object-fit: cover;
        }
        .header-search {
          width: 100%;
        }
        .search-pill {
          display: flex;
          align-items: center;
          background: #ffffff;
          padding: 0.7rem 1.2rem;
          border-radius: 50px;
          gap: 10px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        }
        .search-icon { color: #888; }
        .search-pill input {
          flex: 1;
          background: transparent;
          border: none;
          color: #333;
          font-size: 0.85rem;
          font-weight: 500;
        }
        .search-pill input:focus { outline: none; }
        .search-pill input::placeholder { color: #999; }
        
        .filter-dropdown {
          display: flex;
          align-items: center;
          gap: 4px;
          color: #ff5a1f;
          border-left: 1px solid #eee;
          padding-left: 10px;
        }
        .filter-text { font-size: 0.8rem; font-weight: 700; }

        @media (max-width: 768px) {
          .mobile-header { display: flex; }
        }
      `}</style>
    </div>
  );
};

export default MobileHeader;
