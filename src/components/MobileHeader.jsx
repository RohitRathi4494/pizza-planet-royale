import React from 'react';

const MobileHeader = () => {
  return (
    <div className="mobile-header">
      <div className="header-brand">
        <h1 className="app-brand-title">Pizza Planet</h1>
        <div className="header-subtitle">Premium Galactic Pizzas</div>
      </div>

      <style>{`
        .mobile-header {
          display: none;
          padding: 1.5rem 5% 1rem;
          background: var(--bg-dark);
          flex-direction: column;
          align-items: center;
          text-align: center;
          margin-top: 0; /* Positioned directly at the top */
        }
        
        .header-brand {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .app-brand-title {
          font-size: 1.8rem;
          font-weight: 900;
          letter-spacing: 1px;
          text-transform: uppercase;
          background: linear-gradient(135deg, #ffcc00, #ff5a1f);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          margin: 0;
        }

        .header-subtitle {
          font-size: 0.7rem;
          color: var(--text-secondary);
          text-transform: uppercase;
          letter-spacing: 3px;
          font-weight: 600;
          opacity: 0.8;
        }

        @media (max-width: 768px) {
          .mobile-header { display: flex; }
        }
      `}</style>
    </div>
  );
};

export default MobileHeader;
