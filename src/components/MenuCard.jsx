import React, { useState } from 'react';
import { Plus, Heart } from 'lucide-react';

const MenuCard = ({ item, categoryImage, onAddToCart }) => {
  const [isLiked, setIsLiked] = useState(false);
  
  const priceDisplay = item.prices 
    ? `₹${item.prices.S || item.prices.M}` 
    : `₹${item.price}`;

  return (
    <div className="app-menu-card">
      <div className="card-media">
        <img src={categoryImage} alt={item.name} />
        <div className="card-badge price-badge">{priceDisplay}</div>
        <button 
          className={`card-badge heart-btn ${isLiked ? 'liked' : ''}`}
          onClick={(e) => {
            e.stopPropagation();
            setIsLiked(!isLiked);
          }}
        >
          <Heart size={16} fill={isLiked ? "#ff5a1f" : "none"} color={isLiked ? "#ff5a1f" : "white"} />
        </button>
      </div>
      
      <div className="card-info">
        <div className="info-top">
          <h3 className="item-name">{item.name}</h3>
          <span className="item-rating">⭐ 4.8</span>
        </div>
        <p className="item-desc">{item.desc}</p>
        
        <button className="app-add-btn" onClick={() => onAddToCart(item)}>
          Add to Cart
          <Plus size={18} />
        </button>
      </div>

      <style>{`
        .app-menu-card {
          background: #1a1a1a;
          border-radius: 28px;
          margin-bottom: 2rem;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0,0,0,0.3);
          border: 1px solid rgba(255,255,255,0.05);
          transition: 0.3s;
        }
        
        .card-media {
          height: 180px;
          position: relative;
          padding: 8px;
        }
        
        .card-media img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 22px;
        }
        
        .card-badge {
          position: absolute;
          background: rgba(0,0,0,0.6);
          backdrop-filter: blur(10px);
          border-radius: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(255,255,255,0.1);
        }
        
        .price-badge {
          top: 15px;
          left: 15px;
          padding: 5px 12px;
          color: white;
          font-weight: 700;
          font-size: 0.85rem;
        }
        
        .heart-btn {
          top: 15px;
          right: 15px;
          width: 32px;
          height: 32px;
          color: white;
          cursor: pointer;
          transition: 0.3s;
        }
        .heart-btn.liked { background: white; border: none; }
        
        .card-info {
          padding: 1rem 1.2rem 1.2rem;
        }
        
        .info-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.5rem;
        }
        
        .item-name {
          font-size: 1.1rem;
          font-weight: 800;
          color: white;
        }
        
        .item-rating {
          font-size: 0.75rem;
          font-weight: 600;
          color: #ffcc00;
        }
        
        .item-desc {
          font-size: 0.85rem;
          color: #999;
          margin-bottom: 1.2rem;
          line-height: 1.4;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .app-add-btn {
          width: 100%;
          background: #ff5a1f; /* Action Orange */
          color: white;
          border: none;
          padding: 0.9rem;
          border-radius: 18px;
          font-weight: 800;
          font-size: 0.9rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          cursor: pointer;
          transition: 0.3s;
          box-shadow: 0 5px 15px rgba(255, 90, 31, 0.3);
        }
        
        .app-add-btn:active {
          transform: scale(0.98);
          background: #ff3d00;
        }

        @media (max-width: 768px) {
          .card-media { height: 200px; }
        }
      `}</style>
    </div>
  );
};

export default MenuCard;
