import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import MenuCard from './MenuCard';

const MenuSlider = ({ items, categoryImage, onAddToCart }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      if (width < 640) setItemsPerPage(1);
      else if (width < 1024) setItemsPerPage(2);
      else setItemsPerPage(4);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setCurrentIndex(0);
  }, [items]);

  const maxIndex = Math.max(0, items.length - itemsPerPage);

  const next = () => setCurrentIndex(prev => Math.min(prev + 1, maxIndex));
  const prev = () => setCurrentIndex(prev => Math.max(prev - 1, 0));

  if (isMobile) {
    return (
      <div className="mobile-menu-grid">
        {items.map((item, idx) => (
          <div key={`${item.name}-${idx}`} className="mobile-grid-item">
            <MenuCard 
              item={item} 
              categoryImage={categoryImage}
              onAddToCart={onAddToCart}
            />
          </div>
        ))}
        <style>{`
          .mobile-menu-grid {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
            padding: 0 5% 4rem;
          }
          .mobile-grid-item {
            width: 100%;
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="menu-slider-container">
      <div className="slider-track-wrap">
        <motion.div 
          className="slider-track"
          initial={false}
          animate={{ x: `-${currentIndex * (100 / itemsPerPage)}%` }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {items.map((item, idx) => (
            <div 
              key={`${item.name}-${idx}`} 
              className="slider-item"
              style={{ flex: `0 0 ${100 / itemsPerPage}%` }}
            >
              <MenuCard 
                item={item} 
                categoryImage={categoryImage}
                onAddToCart={onAddToCart}
              />
            </div>
          ))}
        </motion.div>
      </div>

      {items.length > itemsPerPage && (
        <>
          <button 
            className={`nav-btn prev ${currentIndex === 0 ? 'disabled' : ''}`} 
            onClick={prev}
            disabled={currentIndex === 0}
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            className={`nav-btn next ${currentIndex === maxIndex ? 'disabled' : ''}`} 
            onClick={next}
            disabled={currentIndex === maxIndex}
          >
            <ChevronRight size={24} />
          </button>
        </>
      )}

      <style>{`
        .menu-slider-container {
          position: relative;
          width: 100%;
          max-width: 1400px;
          margin: 3rem auto 0;
          padding: 0 40px;
        }
        .slider-track-wrap {
          overflow: hidden;
          padding: 20px 0;
        }
        .slider-track {
          display: flex;
        }
        .slider-item {
          padding: 0 10px;
        }
        .nav-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: var(--primary-color);
          border: 1px solid var(--accent-color);
          color: white;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          z-index: 10;
          transition: 0.3s;
          box-shadow: 0 10px 20px rgba(0,0,0,0.5);
        }
        .nav-btn:hover:not(:disabled) {
          background: var(--accent-color);
          color: var(--bg-dark);
          transform: translateY(-50%) scale(1.1);
        }
        .nav-btn.disabled {
          opacity: 0.2;
          cursor: not-allowed;
        }
        .nav-btn.prev { left: -10px; }
        .nav-btn.next { right: -10px; }
      `}</style>
    </div>
  );
};

export default MenuSlider;
