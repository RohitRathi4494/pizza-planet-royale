import React, { useState } from 'react';
import { X, Send, ShoppingBag } from 'lucide-react';

const CartDrawer = ({ isOpen, onClose, cart, updateQty }) => {
  const [customer, setCustomer] = useState({ name: '', phone: '', address: '' });

  const total = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

  const handleCheckout = () => {
    if (!customer.name || !customer.phone || !customer.address) {
      alert('Please fill in your name, phone number, and address.');
      return;
    }
    if (cart.length === 0) {
      alert('Your cart is empty!');
      return;
    }

    let message = `🚀 *New Order from Pizza Planet Royale*%0A%0A`;
    message += `👤 *Customer Details:*%0A`;
    message += `Name: ${customer.name}%0A`;
    message += `Phone: ${customer.phone}%0A`;
    message += `Address: ${customer.address}%0A%0A`;
    message += `🍕 *Order Items:*%0A`;

    cart.forEach(item => {
      const itemTotal = item.price * item.qty;
      message += `- ${item.name} ${item.size ? `(${item.size})` : ''} x ${item.qty}: ₹${itemTotal}%0A`;
    });

    message += `%0A💰 *Grand Total: ₹${total}*%0A%0A`;
    message += `Please confirm the order! 🛸`;

    const whatsappNumber = "919213035750";
    const url = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(url, '_blank');
  };

  return (
    <div className={`cart-drawer ${isOpen ? 'open' : ''}`}>
      <div className="cart-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <ShoppingBag size={20} color="var(--accent-color)" />
          <h2>Your Order</h2>
        </div>
        <button className="close-btn" onClick={onClose}><X size={24} /></button>
      </div>

      <div className="cart-items-list">
        {cart.length === 0 ? (
          <div style={{ textAlign: 'center', marginTop: '50px', color: 'var(--text-secondary)' }}>
            Your cart is currently empty.
          </div>
        ) : (
          cart.map((item, idx) => (
            <div key={`${item.name}-${item.size}`} className="cart-item">
              <div className="cart-item-info">
                <h4>{item.name} {item.size ? `(${item.size})` : ''}</h4>
                <p>₹{item.price} x {item.qty}</p>
              </div>
              <div className="cart-item-qty">
                <button className="qty-btn" onClick={() => updateQty(idx, -1)}>-</button>
                <span>{item.qty}</span>
                <button className="qty-btn" onClick={() => updateQty(idx, 1)}>+</button>
              </div>
            </div>
          ))
        )}
      </div>

      {cart.length > 0 && (
        <div className="checkout-section">
          <div className="checkout-form">
            <div className="form-group">
              <input 
                type="text" placeholder="Your Name" 
                value={customer.name} onChange={(e) => setCustomer({...customer, name: e.target.value})} 
              />
            </div>
            <div className="form-group">
              <input 
                type="text" placeholder="Phone Number" 
                value={customer.phone} onChange={(e) => setCustomer({...customer, phone: e.target.value})} 
              />
            </div>
            <div className="form-group">
              <textarea 
                placeholder="Delivery Address" 
                value={customer.address} onChange={(e) => setCustomer({...customer, address: e.target.value})} 
              />
            </div>
          </div>
          
          <div className="cart-total">
            <span>Total Amount</span>
            <span>₹{total}</span>
          </div>

          <button className="order-btn" onClick={handleCheckout}>
            Place Order <Send size={18} />
          </button>
        </div>
      )}

      <style>{`
        .cart-drawer {
          position: fixed;
          top: 0;
          right: -100%;
          width: 400px;
          height: 100vh;
          background: rgba(20, 4, 4, 0.98);
          backdrop-filter: blur(25px);
          z-index: 1010;
          box-shadow: -15px 0 50px rgba(0, 0, 0, 0.9);
          transition: 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
          padding: 2rem;
          display: flex;
          flex-direction: column;
        }
        .cart-drawer.open { right: 0; }
        @media (max-width: 768px) { .cart-drawer { width: 100%; right: -100%; } }
        .cart-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem; border-bottom: 1px solid var(--glass-border); padding-bottom: 1rem; }
        .cart-header h2 { font-size: 1.4rem; text-transform: uppercase; color: var(--accent-color); font-weight: 800; letter-spacing: 1px; }
        .close-btn { background: none; border: none; color: white; cursor: pointer; transition: 0.3s; }
        .close-btn:hover { color: var(--accent-color); transform: scale(1.1); }
        .cart-items-list { flex: 1; overflow-y: auto; margin-bottom: 1.5rem; scrollbar-width: none; }
        .cart-item { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; padding-bottom: 1.5rem; border-bottom: 1px solid rgba(255, 255, 255, 0.05); }
        .cart-item-info h4 { font-size: 1rem; margin-bottom: 0.2rem; color: var(--text-primary); }
        .cart-item-info p { font-size: 0.85rem; color: var(--text-secondary); }
        .cart-item-qty { display: flex; align-items: center; gap: 0.8rem; background: rgba(255,255,255,0.05); padding: 5px 10px; border-radius: 8px; border: 1px solid var(--glass-border); }
        .qty-btn { background: none; border: none; color: white; width: 20px; height: 20px; cursor: pointer; font-size: 1.2rem; display: flex; align-items: center; justify-content: center; transition: 0.2s; }
        .qty-btn:hover { color: var(--accent-color); }
        .checkout-form { border-top: 1px solid var(--accent-color); padding-top: 1.5rem; margin-bottom: 1.5rem; }
        .form-group { margin-bottom: 0.8rem; }
        .form-group input, .form-group textarea { width: 100%; padding: 0.9rem; background: rgba(255,255,255,0.05); border: 1px solid var(--glass-border); color: white; border-radius: 4px; font-size: 0.9rem; transition: 0.3s; }
        .form-group input:focus, .form-group textarea:focus { border-color: var(--accent-color); outline: none; background: rgba(255,255,255,0.1); }
        .form-group textarea { height: 70px; resize: none; }
        .cart-total { display: flex; justify-content: space-between; font-size: 1.3rem; font-weight: 800; margin-bottom: 1.5rem; color: var(--accent-color); text-transform: uppercase; }
        .order-btn { width: 100%; height: 55px; background: var(--primary-color); border: 1px solid var(--accent-color); color: white; font-weight: 800; text-transform: uppercase; border-radius: 4px; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 10px; letter-spacing: 2px; transition: 0.4s; }
        .order-btn:hover { background: var(--accent-color); color: var(--bg-dark); }
      `}</style>
    </div>
  );
};

export default CartDrawer;
