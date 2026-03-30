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
        <div className="promo-banner-container">
          <div className="promo-card">
            <div className="promo-content">
              <span className="promo-tag">Use code FIRST40 at checkout.</span>
              <h2 className="promo-title">Get 40% off <br/>Your First Order!</h2>
              <button className="promo-btn">Order Now</button>
            </div>
            <div className="promo-img">
              <img src="https://images.unsplash.com/photo-1561758033-d89a9ad46330?q=80&w=300&auto=format&fit=crop" alt="Promo" />
            </div>
          </div>
        </div>
      </div>

      <div className="sticky-tabs-wrapper">
        <CategoryTabs 
          categories={menuData} 
          activeCategory={activeCategory} 
          onTabChange={(id) => {
            const el = document.getElementById(id);
            if (el) {
              isAutoScrolling.current = true;
              
              // Calculate precision offset (App-style: stick to Top 0px)
              const totalOffset = window.innerWidth < 768 ? 65 : 130;
              
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
        
        .sticky-tabs-wrapper {
          position: sticky;
          top: 72px; /* Desktop Navbar offset */
          z-index: 1500;
          background: var(--bg-dark);
          border-bottom: 1px solid var(--glass-border);
        }

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

        /* Promo Banner Styles */
        .promo-banner-container { padding: 1.2rem 5%; }
        .promo-card {
          background: linear-gradient(135deg, #ff5a1f, #ff3d00);
          border-radius: 28px;
          padding: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: relative;
          overflow: hidden;
          box-shadow: 0 15px 35px rgba(255, 90, 31, 0.4);
        }
        .promo-content { flex: 1; z-index: 2; }
        .promo-tag { font-size: 0.65rem; font-weight: 700; color: rgba(255,255,255,0.8); }
        .promo-title { font-size: 1.4rem; color: white; margin: 8px 0 15px; line-height: 1.2; font-weight: 800; }
        .promo-btn {
          background: #000;
          color: white;
          border: none;
          padding: 8px 20px;
          border-radius: 50px;
          font-size: 0.75rem;
          font-weight: 800;
        }
        .promo-img { width: 40%; transform: rotate(15deg) scale(1.2); }
        .promo-img img { width: 100%; border-radius: 12px; }

        .desktop-only { display: block; }
        .mobile-only { display: none; }

        @media (max-width: 768px) {
          .desktop-only { display: none; }
          .mobile-only { display: block; }
          .category-header h3 { font-size: 1.5rem; color: white; }
          .sticky-tabs-wrapper { top: 0; } /* Sticking to the very top in app mode */
          .menu-category-section { padding-top: 2rem; }
        }
      `}</style>
    </div>
  );
};

export default Home;
