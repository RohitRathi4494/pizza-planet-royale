import React from 'react';
import { Plus } from 'lucide-react';

const MenuCard = ({ item, categoryImage, onAddToCart }) => {
  const priceDisplay = item.prices 
    ? `₹${item.prices.S || item.prices.M}` 
    : `₹${item.price}`;

  return (
    <div className="menu-card">
      <div className="card-img-container">
        <img src={categoryImage} alt={item.name} />
        <div className="mobile-price-tag">{priceDisplay}</div>
      </div>
      <div className="card-content">
        <div className="info-header">
          <h3>{item.name}</h3>
        </div>
        <p className="desc">{item.desc}</p>
        <div className="card-actions">
          <div className="desktop-price">{priceDisplay}</div>
          <button className="add-to-cart-btn" onClick={() => onAddToCart(item)}>
            <span>Add to Cart</span>
            <Plus size={16} />
          </button>
        </div>
      </div>

      <style>{`
        .menu-card {
          background: var(--bg-card);
          border: 1px solid var(--glass-border);
          border-radius: 24px;
          overflow: hidden;
          transition: var(--transition);
          backdrop-filter: blur(10px);
          position: relative;
          display: flex;
          flex-direction: column;
        }
        .card-img-container {
          height: 180px;
          overflow: hidden;
          position: relative;
        }
        .card-img-container img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: var(--transition);
        }
        .mobile-price-tag {
          display: none;
          position: absolute;
          top: 15px;
          left: 15px;
          background: rgba(128, 10, 10, 0.9);
          backdrop-filter: blur(5px);
          color: var(--accent-color);
          padding: 6px 12px;
          border-radius: 100px;
          font-weight: 800;
          font-size: 0.9rem;
          border: 1px solid var(--accent-color);
        }

        .card-content { padding: 1.5rem; flex: 1; display: flex; flex-direction: column; }
        .card-content h3 { font-size: 1.25rem; color: white; margin-bottom: 0.5rem; }
        .card-content .desc { font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 1.5rem; flex: 1; }
        
        .card-actions {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .desktop-price { font-size: 1.2rem; font-weight: 800; color: var(--accent-color); }
        
        .add-to-cart-btn {
          background: var(--primary-color);
          border: 1px solid var(--accent-color);
          color: white;
          padding: 0.8rem 1.4rem;
          border-radius: 100px;
          cursor: pointer;
          font-size: 0.8rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: 0.3s;
          text-transform: uppercase;
        }
        .add-to-cart-btn:hover { background: var(--accent-color); color: var(--bg-dark); }

        @media (max-width: 768px) {
          .menu-card { border: none; background: rgba(255,255,255,0.03); }
          .card-img-container { height: 220px; border-radius: 20px; margin: 10px; }
          .mobile-price-tag { display: block; }
          .desktop-price { display: none; }
          .add-to-cart-btn { width: 100%; justify-content: center; padding: 1rem; }
          .info-header { display: flex; justify-content: space-between; align-items: baseline; }
          .card-content { padding: 0.5rem 1rem 1rem; }
        }
      `}</style>
    </div>
  );
};

export default MenuCard;
