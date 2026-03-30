import React, { useEffect, useRef } from 'react';
import * as Icons from 'lucide-react';

const CategoryTabs = ({ categories, activeCategory, onTabChange }) => {
  const scrollRef = useRef(null);
  const activeRef = useRef(null);

  useEffect(() => {
    if (activeRef.current && scrollRef.current) {
      activeRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      });
    }
  }, [activeCategory]);

  return (
    <div className="categories-tabs-container">
      <div className="categories-tabs" ref={scrollRef}>
        {categories.map((cat) => {
          const IconComponent = Icons[cat.icon] || Icons.HelpCircle;
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              ref={isActive ? activeRef : null}
              className={`tab-btn ${isActive ? 'active' : ''}`}
              onClick={() => onTabChange(cat.id)}
            >
              <div className="icon-wrapper">
                <IconComponent size={20} />
              </div>
              <span className="cat-name">{cat.name}</span>
            </button>
          );
        })}
      </div>

      <style>{`
        .categories-tabs-container {
          padding: 1rem 0;
          background: var(--bg-dark);
          width: 100%;
        }
        .categories-tabs {
          display: flex;
          justify-content: flex-start;
          gap: 1.5rem;
          overflow-x: auto;
          padding: 0 5%;
          scrollbar-width: none;
          scroll-behavior: smooth;
        }
        .categories-tabs::-webkit-scrollbar { display: none; }

        .tab-btn {
          display: flex;
          flex-direction: column;
          align-items: center;
          background: transparent;
          border: none;
          color: var(--text-secondary);
          cursor: pointer;
          transition: 0.3s;
          flex-shrink: 0;
          gap: 8px;
          min-width: 80px;
        }
        .icon-wrapper {
          width: 55px;
          height: 55px;
          background: rgba(255,255,255,0.03);
          border: 1px solid var(--glass-border);
          border-radius: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: 0.3s;
          color: var(--text-secondary);
        }
        .cat-name {
          font-size: 0.7rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          text-align: center;
          line-height: 1.2;
          width: 80px;
          display: block;
        }

        .tab-btn.active .icon-wrapper {
          background: var(--primary-color);
          border-color: var(--accent-color);
          color: var(--accent-color);
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(128, 10, 10, 0.4);
        }
        .tab-btn.active .cat-name {
          color: var(--accent-color);
        }

        @media (min-width: 1024px) {
          .categories-tabs { justify-content: center; gap: 3rem; }
        }
      `}</style>
    </div>
  );
};

export default CategoryTabs;
