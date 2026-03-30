import React, { useEffect, useRef } from 'react';
import * as Icons from 'lucide-react';

const CategoryTabs = ({ categories, activeCategory, onTabChange }) => {
  const scrollRef = useRef(null);
  const activeRef = useRef(null);

  useEffect(() => {
    // Only scroll the TAB BAR horizontally — never touch the page scroll
    if (activeRef.current && scrollRef.current) {
      const container = scrollRef.current;
      const tab = activeRef.current;
      const containerCenter = container.offsetWidth / 2;
      const tabCenter = tab.offsetLeft + tab.offsetWidth / 2;
      container.scrollTo({
        left: tabCenter - containerCenter,
        behavior: 'smooth'
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
              className={`app-cat-card ${isActive ? 'active' : ''}`}
              onClick={() => onTabChange(cat.id)}
            >
              <div className="card-inner">
                <IconComponent size={24} strokeWidth={isActive ? 2.5 : 2} />
              </div>
              <span className="cat-label">{cat.name}</span>
            </button>
          );
        })}
        <button className="app-cat-card">
          <div className="card-inner">
             <Icons.MoreHorizontal size={24} />
          </div>
          <span className="cat-label">See All</span>
        </button>
      </div>

      <style>{`
        .categories-tabs-container {
          padding: 1rem 0;
          background: var(--bg-dark);
          width: 100%;
          overflow: hidden;
        }
        .categories-tabs {
          display: flex;
          gap: 1rem;
          overflow-x: auto;
          padding: 0 5%;
          scrollbar-width: none;
          scroll-behavior: smooth;
        }
        .categories-tabs::-webkit-scrollbar { display: none; }

        .app-cat-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          background: transparent;
          border: none;
          cursor: pointer;
          flex-shrink: 0;
          transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .card-inner {
          width: 65px;
          height: 65px;
          background: #1a1a1a;
          border-radius: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #999;
          transition: 0.3s;
        }

        .cat-label {
          font-size: 0.75rem;
          font-weight: 600;
          color: #666;
          transition: 0.3s;
        }

        .app-cat-card.active .card-inner {
          background: #ffffff;
          color: #000000;
          box-shadow: 0 10px 20px rgba(0,0,0,0.3);
          transform: translateY(-2px);
        }

        .app-cat-card.active .cat-label {
          color: #ffffff;
          font-weight: 700;
        }

        @media (min-width: 1024px) {
          .categories-tabs { justify-content: center; gap: 2.5rem; }
        }
      `}</style>
    </div>
  );
};

export default CategoryTabs;
