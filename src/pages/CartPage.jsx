import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, ArrowLeft, Trash2, Send, CheckCircle } from 'lucide-react';

const CartPage = ({ cart, updateQty, clearCart }) => {
  const [customer, setCustomer] = useState({ name: '', phone: '', address: '' });
  const [orderPlaced, setOrderPlaced] = useState(false);

  const total = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

  const handlePlaceOrder = () => {
    if (!customer.name || !customer.phone || !customer.address) {
      alert('Please fill in your name, phone number, and address.');
      return;
    }
    if (cart.length === 0) return;

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
    setOrderPlaced(true);
    // We don't clear cart immediately so user can see what they ordered, but we can clear after some delay or if user clicks 'Done'
  };

  if (orderPlaced) {
    return (
      <div className="cart-page success-view">
        <CheckCircle size={80} color="var(--accent-color)" />
        <h2>Order Placed Successfully!</h2>
        <p>Your royal feast is being prepared. We have sent your order details to the owner via WhatsApp.</p>
        <Link to="/" className="btn btn-primary" onClick={clearCart}>Back to Menu</Link>
        <style>{`
          .success-view { display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 80vh; text-align: center; padding: 2rem; }
          .success-view h2 { color: var(--accent-color); font-size: 2.5rem; margin: 1.5rem 0; text-transform: uppercase; }
          .success-view p { color: var(--text-secondary); margin-bottom: 2rem; max-width: 500px; }
        `}</style>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="cart-container">
        <div className="cart-header-main">
          <Link to="/" className="back-link"><ArrowLeft size={20} /> Back to Menu</Link>
          <h1>Your Royal Cart</h1>
        </div>

        {cart.length === 0 ? (
          <div className="empty-cart">
            <ShoppingBag size={60} opacity={0.3} />
            <p>Your cart is empty. Start your journey by adding some treats!</p>
            <Link to="/" className="btn btn-primary">Browse Menu</Link>
          </div>
        ) : (
          <div className="cart-content-grid">
            <div className="cart-items-section">
              <div className="summary-table">
                <div className="table-header">
                  <span>Product</span>
                  <span>Quantity</span>
                  <span>Price</span>
                </div>
                {cart.map((item, idx) => (
                  <div key={`${item.name}-${item.size}`} className="table-row">
                    <div className="product-info">
                      <h4>{item.name}</h4>
                      {item.size && <span className="size-badge">{item.size === 'S' ? 'Small' : item.size === 'M' ? 'Medium' : 'Large'}</span>}
                    </div>
                    <div className="qty-controls">
                      <button onClick={() => updateQty(idx, -1)}>-</button>
                      <span>{item.qty}</span>
                      <button onClick={() => updateQty(idx, 1)}>+</button>
                    </div>
                    <div className="price-info">
                      ₹{item.price * item.qty}
                    </div>
                  </div>
                ))}
              </div>
              <div className="cart-total-footer">
                <span>Grand Total</span>
                <span className="total-gold">₹{total}</span>
              </div>
            </div>

            <div className="checkout-sidebar">
              <div className="checkout-card">
                <h3>Delivery Details</h3>
                <div className="form-group">
                  <label>Full Name</label>
                  <input 
                    type="text" placeholder="e.g. Tony Stark" 
                    value={customer.name} onChange={(e) => setCustomer({...customer, name: e.target.value})}
                  />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input 
                    type="text" placeholder="e.g. +91 98765 43210" 
                    value={customer.phone} onChange={(e) => setCustomer({...customer, phone: e.target.value})}
                  />
                </div>
                <div className="form-group">
                  <label>Full Address</label>
                  <textarea 
                    placeholder="e.g. Avengers Tower, NY"
                    value={customer.address} onChange={(e) => setCustomer({...customer, address: e.target.value})}
                  />
                </div>
                <button className="place-order-btn" onClick={handlePlaceOrder}>
                  Place Order <Send size={18} />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <style>{`
        .cart-page { padding: 8rem 5% 4rem; min-height: 100vh; background: var(--bg-dark); }
        .cart-container { max-width: 1200px; margin: 0 auto; }
        .cart-header-main { margin-bottom: 3rem; display: flex; align-items: baseline; gap: 2rem; }
        .cart-header-main h1 { font-size: 2.5rem; text-transform: uppercase; letter-spacing: 2px; color: white; }
        .back-link { display: flex; align-items: center; gap: 8px; color: var(--accent-color); text-decoration: none; font-weight: 500; font-size: 0.9rem; transition: 0.3s; }
        .back-link:hover { padding-right: 10px; }
        
        .empty-cart { text-align: center; padding: 4rem 0; display: flex; flex-direction: column; align-items: center; gap: 1.5rem; }
        .empty-cart p { color: var(--text-secondary); max-width: 300px; }

        .cart-content-grid { display: grid; grid-template-columns: 1fr 380px; gap: 3rem; }
        .summary-table { background: rgba(255,255,255,0.03); border: 1px solid var(--glass-border); border-radius: 12px; overflow: hidden; }
        .table-header { display: grid; grid-template-columns: 2fr 1fr 1fr; padding: 1.2rem 2rem; background: rgba(255,255,255,0.05); color: var(--accent-color); font-weight: 800; text-transform: uppercase; font-size: 0.8rem; letter-spacing: 1px; }
        .table-row { display: grid; grid-template-columns: 2fr 1fr 1fr; padding: 1.5rem 2rem; border-bottom: 1px solid rgba(255,255,255,0.05); align-items: center; }
        .product-info h4 { font-size: 1.1rem; color: white; margin-bottom: 0.3rem; }
        .size-badge { background: var(--primary-color); font-size: 0.7rem; padding: 2px 8px; border-radius: 4px; color: white; }
        
        .qty-controls { display: flex; align-items: center; gap: 15px; }
        .qty-controls button { background: rgba(255,255,255,0.1); border: none; color: white; width: 30px; height: 30px; border-radius: 4px; cursor: pointer; transition: 0.3s; }
        .qty-controls button:hover { background: var(--primary-color); }
        .price-info { font-weight: 700; color: var(--text-primary); font-size: 1.1rem; }

        .cart-total-footer { display: flex; justify-content: space-between; padding: 2rem; font-size: 1.5rem; font-weight: 800; color: var(--accent-color); text-transform: uppercase; }
        
        .checkout-sidebar { position: sticky; top: 100px; }
        .checkout-card { background: rgba(128, 10, 10, 0.1); border: 1px solid var(--accent-color); border-radius: 12px; padding: 2rem; }
        .checkout-card h3 { color: var(--accent-color); font-size: 1.2rem; margin-bottom: 1.5rem; text-transform: uppercase; letter-spacing: 1px; }
        .form-group { margin-bottom: 1.2rem; }
        .form-group label { display: block; font-size: 0.75rem; text-transform: uppercase; margin-bottom: 0.5rem; color: var(--text-secondary); font-weight: 700; }
        .form-group input, .form-group textarea { width: 100%; padding: 0.9rem; background: rgba(0,0,0,0.3); border: 1px solid var(--glass-border); color: white; border-radius: 4px; font-size: 0.9rem; }
        .form-group textarea { height: 80px; resize: none; }
        .place-order-btn { width: 100%; height: 55px; background: var(--primary-color); border: 1px solid var(--accent-color); color: white; font-weight: 800; text-transform: uppercase; border-radius: 4px; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 10px; letter-spacing: 2px; margin-top: 1rem; transition: 0.3s; }
        .place-order-btn:hover { background: var(--accent-color); color: var(--bg-dark); }

        @media (max-width: 1024px) {
          .cart-content-grid { grid-template-columns: 1fr; }
          .checkout-sidebar { position: static; }
        }
        @media (max-width: 600px) {
          .cart-header-main h1 { font-size: 1.8rem; }
          .table-header { display: none; }
          .table-row { grid-template-columns: 1fr; gap: 1rem; padding: 1.5rem 1rem; }
          .qty-controls { justify-content: flex-start; }
          .price-info { text-align: left; border-top: 1px solid rgba(255,255,255,0.05); padding-top: 1rem; }
        }
      `}</style>
    </div>
  );
};

export default CartPage;
