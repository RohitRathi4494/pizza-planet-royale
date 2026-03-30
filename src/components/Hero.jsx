import React from 'react';

const Hero = () => {
  return (
    <section className="hero" style={{
      height: '100vh',
      background: `linear-gradient(rgba(20, 4, 4, 0.7), rgba(20, 4, 4, 0.7)), url('/assets/hero_new.png')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: '0 10%',
      borderBottom: '2px solid var(--accent-color)'
    }}>
      <h1 style={{
        fontSize: 'clamp(2rem, 8vw, 4.5rem)',
        marginBottom: '1rem',
        textTransform: 'uppercase',
        letterSpacing: 'clamp(3px, 1vw, 8px)',
        lineHeight: 1.1,
        animation: 'fadeInDown 1s ease'
      }}>
        Pizza Planet <span style={{ color: 'var(--accent-color)' }}>Royale</span>
      </h1>
      <p style={{
        fontSize: 'clamp(0.9rem, 2vw, 1.3rem)',
        color: 'var(--text-secondary)',
        maxWidth: '600px',
        marginBottom: '2rem',
        animation: 'fadeInUp 1s ease 0.3s',
        animationFillMode: 'both'
      }}>
        Wander the Universe of Flavor. Premium pizzas, burgers, and sides crafted with celestial ingredients.
      </p>
      <a href="#menu" className="btn btn-primary">Explore Menu</a>

      <style>{`
        .btn {
          padding: 0.9rem 2rem;
          border-radius: 4px;
          text-decoration: none;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 2px;
          transition: var(--transition);
          cursor: pointer;
          border: 1px solid var(--accent-color);
        }
        .btn-primary {
          background: var(--primary-color);
          color: var(--text-primary);
        }
        .btn-primary:hover {
          background: var(--accent-color);
          color: var(--bg-dark);
          transform: translateY(-3px);
        }
      `}</style>
    </section>
  );
};

export default Hero;
