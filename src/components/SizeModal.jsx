import React from 'react';
import { X } from 'lucide-react';

const SizeModal = ({ item, isOpen, onClose, onSelectSize }) => {
  if (!isOpen || !item) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="size-modal open" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3>Choose Size: {item.name}</h3>
          <button className="close-btn" onClick={onClose}><X size={20} /></button>
        </div>
        <div className="size-options">
          {Object.entries(item.prices).map(([size, price]) => (
            <button
              key={size}
              className="size-option-btn"
              onClick={() => {
                onSelectSize(item, price, size);
                onClose();
              }}
            >
              <span className="size-label">{size === 'S' ? 'Small' : size === 'M' ? 'Medium' : 'Large'}</span>
              <span className="size-price">₹{price}</span>
            </button>
          ))}
        </div>
      </div>

      <style>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.7);
          z-index: 1005;
          display: flex;
          justify-content: center;
          align-items: center;
          backdrop-filter: blur(5px);
        }
        .size-modal {
          width: 90%;
          max-width: 350px;
          background: rgba(20, 4, 4, 0.98);
          border: 1px solid var(--glass-border);
          border-radius: 12px;
          padding: 1.5rem;
          transform: translateY(20px);
          animation: slideUp 0.3s forwards;
        }
        @keyframes slideUp { to { transform: translateY(0); } }
        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
          border-bottom: 1px solid var(--glass-border);
          padding-bottom: 0.8rem;
        }
        .modal-header h3 { font-size: 1.1rem; color: var(--accent-color); }
        .size-options { display: flex; flex-direction: column; gap: 0.8rem; }
        .size-option-btn {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 1.2rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--glass-border);
          color: white;
          border-radius: 8px;
          cursor: pointer;
          transition: var(--transition);
        }
        .size-option-btn:hover {
          background: var(--primary-color);
          border-color: var(--accent-color);
        }
        .size-label { font-weight: 700; font-size: 1rem; }
        .size-price { font-weight: 800; color: var(--accent-color); }
        .close-btn { background: none; border: none; color: white; cursor: pointer; }
      `}</style>
    </div>
  );
};

export default SizeModal;
