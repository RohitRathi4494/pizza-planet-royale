import React, { useEffect, useRef } from 'react';
import Hero from '../components/Hero';
import CategoryTabs from '../components/CategoryTabs';
import MenuSlider from '../components/MenuSlider';
import MobileHeader from '../components/MobileHeader';

const Home = ({ 
  menuData, 
  activeCategory, 
  setActiveCategory, 
  handleAddToCartClick 
}) => {
  const isAutoScrolling = useRef(false);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-25% 0px -40% 0px', // Center-weighted viewport detection
      threshold: [0, 0.5]
    };

    const handleIntersect = (entries) => {
      if (isAutoScrolling.current) return;

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveCategory(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    menuData.forEach((cat) => {
      const el = document.getElementById(cat.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [menuData, setActiveCategory]);

  return (
    <div className="home-scroll-container">
      <div className="desktop-only">
        <Hero />
      </div>
      <div className="mobile-only">
        <MobileHeader />
      </div>

      <div className="sticky-tabs-wrapper">
        <CategoryTabs 
          categories={menuData} 
          activeCategory={activeCategory} 
          onTabChange={(id) => {
            const el = document.getElementById(id);
            if (el) {
              isAutoScrolling.current = true;
              
              // Calculate precision offset
              const navbarHeight = window.innerWidth < 768 ? 62 : 72;
              const tabsHeight = 65; // Height of the sticky tabs bar
              const totalOffset = navbarHeight + tabsHeight - 10; // 10px overlap buffer
              
              const targetY = el.getBoundingClientRect().top + window.pageYOffset - totalOffset;

              window.scrollTo({
                top: targetY,
                behavior: 'smooth'
              });
              
              setActiveCategory(id);

              // Re-enable observer after animation
              setTimeout(() => {
                isAutoScrolling.current = false;
              }, 1000);
            }
          }} 
        />
      </div>

      <div className="menu-sections">
        <div className="section-header desktop-only" style={{ marginTop: '4rem', textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2.5rem', textTransform: 'uppercase', letterSpacing: '2px' }}>Galaxy Menu</h2>
          <div className="underline" style={{ width: '80px', height: '4px', background: 'var(--accent-color)', margin: '1rem auto' }}></div>
        </div>

        {menuData.map((cat) => (
          <section key={cat.id} id={cat.id} className="menu-category-section">
            <div className="category-header">
              <h3>{cat.name}</h3>
              <div className="category-underline"></div>
            </div>
            
            <MenuSlider 
              items={cat.items} 
              categoryImage={cat.image}
              onAddToCart={handleAddToCartClick}
            />
          </section>
        ))}
      </div>

      <style>{`
        .home-scroll-container { background: var(--bg-dark); }
        .menu-sections { padding-bottom: 8rem; }
        
        .category-header {
          padding: 0 5%;
          margin-bottom: 2rem;
          text-align: left;
        }
        .category-header h3 {
          font-size: 1.8rem;
          color: var(--accent-color);
          text-transform: uppercase;
          letter-spacing: 2px;
        }
        .category-underline {
          width: 50px;
          height: 3px;
          background: var(--accent-color);
          margin-top: 8px;
        }

        .desktop-only { display: block; }
        .mobile-only { display: none; }

        @media (max-width: 768px) {
          .desktop-only { display: none; }
          .mobile-only { display: block; }
          .category-header h3 { font-size: 1.4rem; }
        }
      `}</style>
    </div>
  );
};

export default Home;
