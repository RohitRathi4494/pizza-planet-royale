const menuData = [
  {
    id: 'signature',
    name: 'Signature Range Pizza',
    image: 'assets/pizzas.png',
    items: [
      { name: 'Corn Pizza', desc: 'Sweet Corn and extra mozzarella cheese.', prices: { S: 90, M: 160, L: 256 } },
      { name: 'Simple Veg', desc: 'Fresh Onion, Tomato and premium mozzarella.', prices: { S: 95, M: 170, L: 280 } },
      { name: 'Spicy Veggie', desc: 'Onion, Tomato, Capsicum with Green Chilly for a bold kick.', prices: { S: 100, M: 180, L: 290 } },
      { name: 'Corn Paneer', desc: 'A perfect blend of golden Corn and fresh Paneer chunks.', prices: { S: 105, M: 185, L: 300 } },
      { name: 'Spicy Delight', desc: 'Capsicum, Red Paprika, and Paneer for a spicy adventure.', prices: { S: 110, M: 200, L: 310 } },
      { name: 'Spicy Tango Pizza', desc: 'Tantalizing tango of Corn, Jalapeno, and Red Paprika.', prices: { S: 120, M: 210, L: 320 } },
      { name: 'Farm House Pizza', desc: 'Loaded with Tomato, Capsicum, Corn, Mushroom and Cheese.', prices: { S: 125, M: 210, L: 340 } }
    ]
  },
  {
    id: 'supreme',
    name: 'Supreme Range Pizza',
    image: 'assets/pizzas.png',
    items: [
      { name: 'Country Delight', desc: 'Classic mix of Tomato, Capsicum, Mushroom, and Onion.', prices: { S: 130, M: 220, L: 350 } },
      { name: 'Paneer Delight', desc: 'Loaded with Paneer cubes, Tomato, Capsicum, and Onion.', prices: { S: 130, M: 220, L: 360 } },
      { name: 'Chef Special Pizza', desc: 'The ultimate combo: Paneer, Sweet Corn, Onion, Capsicum, Tomato, and Black Olive.', prices: { S: 150, M: 230, L: 400 } },
      { name: 'Tandoori Spicy Paneer', desc: 'Smoky Tandoori Paneer with Onion, Capsicum, Tomato, and Red Paprika.', prices: { S: 160, M: 280, L: 470 } },
      { name: 'Veggie Delight Supreme', desc: 'Maximum Veggie Power: Sweet Corn, Onion, Capsicum, Tomato, and Black Olives.', prices: { S: 170, M: 290, L: 490 } },
      { name: 'Spicy Delight Supreme', desc: 'Mushroom, Onion, Capsicum, Tomato, Red Paprika, and Green Chilly.', prices: { S: 180, M: 310, L: 520 } },
      { name: 'Peppy Paneer', desc: 'Paneer, Onion, Capsicum, Corn, Black Olive, and Green Chilly.', prices: { S: 190, M: 330, L: 540 } }
    ]
  },
  {
    id: 'thin-crust',
    name: 'Thin Crust Pizza',
    image: 'assets/pizzas.png',
    items: [
      { name: 'Makhani Golden Delight', desc: 'Makhani Gravy base with Onion, Tomato, and sweet Corn.', price: 170 },
      { name: 'Makhani Country Delight', desc: 'Makhani base with Onion, Tomato, and fresh Mushroom.', price: 180 },
      { name: 'Indian Delight', desc: 'Green Capsicum, Tomato, and Corn with traditional spices.', price: 190 },
      { name: 'Makhani Spicy Delight', desc: 'Paneer, Red Paprika, Jalapeno, and Green Chilly on Makhani base.', price: 200 }
    ]
  },
  {
    id: 'burgers',
    name: 'Burgers',
    image: 'assets/burgers_sandwiches.png',
    items: [
      { name: 'Aloo Tikki Burger', desc: 'White Mayo, Onion, Tomato, and crispy Potato Patty.', price: 40 },
      { name: 'Aloo Tikki Cheese Burger', desc: 'White Mayo, Veggies, Potato Patty, and a slice of Cheese.', price: 55 },
      { name: 'Joy Burger', desc: 'Our signature joy sauce with Onion, Tomato, and Potato Patty.', price: 50 },
      { name: 'Joy Cheese Burger', desc: 'Joy Burger elevated with an extra slice of Cheese.', price: 65 },
      { name: 'Veg Delight Burger', desc: 'Harissa Mayo, Onion, Tomato, and Herb Chilly Potato Patty.', price: 70 },
      { name: 'Deluxe Cheese Burger', desc: 'Premium cheese burger with fresh toppings.', price: 80 },
      { name: 'Deluxe Cheesy Spicy Burger', desc: 'Red Mayo, Onion, Tomato, and Spicy Pan-Potato Patty.', price: 90 },
      { name: 'Double Tikki Burger', desc: 'Two patties for double the flavor impact.', price: 100 },
      { name: 'Cheese Patty Burger', desc: 'A burger featuring a unique cheese-filled patty.', price: 110 },
      { name: 'Paneer Burger', desc: 'Fresh Paneer patty with signature sauces.', price: 120 },
      { name: 'Spicy Paneer Burger', desc: 'Paneer burger with a kick of spice.', price: 130 },
      { name: 'Cheese Patty Spicy Burger', desc: 'Spiced cheese patty burger for the brave.', price: 140 }
    ]
  },
  {
    id: 'sandwiches',
    name: 'Grilled Sandwiches',
    image: 'assets/burgers_sandwiches.png',
    items: [
      { name: 'Veggie Sandwich', desc: 'Classic grilled sandwich with fresh garden vegetables.', price: 70 },
      { name: 'Veggie Cheese Sandwich', desc: 'Veggie sandwich with double cheese slice for creaminess.', price: 90 },
      { name: 'Corn Sandwich', desc: 'Sweet Corn grilled sandwich.', price: 80 },
      { name: 'Corn Cheese Sandwich', desc: 'Corn sandwich with double cheese melting inside.', price: 100 },
      { name: 'Paneer Sandwich', desc: 'Grilled sandwich with spiced Paneer chunks.', price: 95 },
      { name: 'Paneer Cheese Sandwich', desc: 'Paneer sandwich with double cheese slice.', price: 115 },
      { name: 'Loaded Veggie Sandwich', desc: 'Packed with extra veggies for a full meal.', price: 110 },
      { name: 'Loaded Veggie Cheese Sandwich', desc: 'Loaded veggies with double the cheese.', price: 130 },
      { name: 'Loaded Paneer Sandwich', desc: 'Extra Paneer and veggies in a grilled sandwich.', price: 110 }
    ]
  },
  {
    id: 'sides',
    name: 'Sides & Snacks',
    image: 'assets/sides_combos.png',
    items: [
      { name: 'Plain Garlic Bread', desc: '4 pcs of warm, buttery garlic bread.', price: 100 },
      { name: 'Chilly Cheese Garlic Bread', desc: '4 pcs with spicy Chilly and melted Cheese.', price: 130 },
      { name: 'Veggie Garlic Bread', desc: '4 pcs topped with fresh Onion, Capsicum, and Corn.', price: 140 },
      { name: 'Exotica Garlic Bread', desc: '4 pcs with Onion, Tomato, Black Olive, and Jalapeno.', price: 140 },
      { name: 'Plain French Fries', desc: 'Classic golden crispy fries.', price: 90 },
      { name: 'Masala French Fries', desc: 'Fries seasoned with a spicy Indian masala.', price: 100 },
      { name: 'Peri Peri French Fries', desc: 'Spicy Peri Peri seasoned fries.', price: 120 },
      { name: 'Potato Pops', desc: 'Crunchy bite-sized potato snacks.', price: 140 },
      { name: 'Cheese French Fries', desc: 'Fries drizzled with hot melted cheese.', price: 140 },
      { name: 'Veg Nuggets', desc: 'Golden-fried vegetable nuggets.', price: 140 },
      { name: 'Potato Wedges', desc: 'Thick and seasoned potato wedges.', price: 140 }
    ]
  },
  {
    id: 'extras',
    name: 'Extra Toppings & Dips',
    image: 'assets/sides_combos.png',
    items: [
      { name: 'Extra Veg Toppings', desc: 'Onion | Tomato | Capsicum | Mushroom | Corn', prices: { S: 10, M: 15, L: 20 } },
      { name: 'Premium Veg Toppings', desc: 'Red Paprika | Black Olive | Jalapeno | Paneer', prices: { S: 15, M: 20, L: 25 } },
      { name: 'Extra Mozzarella Cheese', desc: 'Fresh Mozzarella cheese top-up.', prices: { S: 30, M: 50, L: 60 } },
      { name: 'Extra Cheese Best', desc: 'The ultimate cheese upgrade.', prices: { M: 60, L: 80 } },
      { name: 'Dips (Mayo/Jalapeno)', desc: 'Choose from White Mayo, Jalapeno, Peri Peri, or Mint.', price: 20 }
    ]
  },
  {
    id: 'combos',
    name: 'Combos & Special Offers',
    image: 'assets/sides_combos.png',
    items: [
      { name: 'Simple Veg Combo', desc: 'Small Simple Veg Pizza + 250ml Coke', price: 99 },
      { name: 'Joy Burger Combo', desc: 'Joy Burger + Fries + 250ml Coke', price: 99 },
      { name: 'Signature Range Combo', desc: '2 Medium Signature Range Pizzas + 750ml Coke', price: 399 },
      { name: 'Supreme Range Combo', desc: '2 Medium Supreme Range Pizzas + 1ltr Coke', price: 599 },
      { name: 'Any 2 Large Combo', desc: 'Any 2 Large Pizzas + 1ltr Coke', price: 799 },
      { name: 'Single Topping Combo', desc: '4 Single Topping Pizzas (Onion, Corn, Capsicum, Tomato)', price: 359 }
    ]
  }
];

let cart = [];

document.addEventListener('DOMContentLoaded', () => {
  const menuGrid = document.getElementById('menu-grid');
  const tabsContainer = document.getElementById('tabs-container');
  const cartIcon = document.getElementById('cart-icon');
  const cartDrawer = document.getElementById('cart-drawer');
  const closeCart = document.getElementById('close-cart');
  const cartOverlay = document.getElementById('cart-overlay');
  const cartItemsList = document.getElementById('cart-items-list');
  const cartCounter = document.getElementById('cart-counter');
  const cartTotalAmount = document.getElementById('cart-total-amount');
  const sendOrderBtn = document.getElementById('send-order-btn');

  // Modal Elements
  const sizeModal = document.getElementById('size-modal');
  const modalItemName = document.getElementById('modal-item-name');
  const sizeOptions = document.getElementById('size-options');
  const closeModal = document.getElementById('close-modal');

  // Generate Tabs
  menuData.forEach((cat, index) => {
    const btn = document.createElement('button');
    btn.className = `tab-btn ${index === 0 ? 'active' : ''}`;
    btn.innerText = cat.name;
    btn.onclick = () => {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderMenu(cat.id);
    };
    tabsContainer.appendChild(btn);
  });

  function renderMenu(categoryId) {
    menuGrid.innerHTML = '';
    const category = menuData.find(c => c.id === categoryId);
    
    category.items.forEach(item => {
      const card = document.createElement('div');
      card.className = 'menu-card';
      
      let priceDisplay = '';
      if (item.prices) {
        priceDisplay = `<div class="price-tag">From ₹${item.prices.S || item.prices.M}</div>`;
      } else {
        priceDisplay = `<div class="price-tag">₹${item.price}</div>`;
      }

      card.innerHTML = `
        <div class="card-img-container">
          <img src="${category.image}" alt="${item.name}">
        </div>
        <div class="card-content">
          <h3>${item.name}</h3>
          <p class="desc">${item.desc}</p>
          <div class="price-container">
            ${priceDisplay}
            <button class="add-to-cart-btn" onclick="handleAddToCart('${item.name}')">Add to Cart +</button>
          </div>
        </div>
      `;
      menuGrid.appendChild(card);
    });
  }

  // Handle Add to Cart Click
  window.handleAddToCart = (name) => {
    let item = null;
    menuData.forEach(cat => {
      const found = cat.items.find(i => i.name === name);
      if (found) item = found;
    });

    if (item.prices) {
      openSizeModal(item);
    } else {
      addToCart(item.name, item.price);
    }
  };

  function openSizeModal(item) {
    modalItemName.innerText = item.name;
    sizeOptions.innerHTML = '';
    
    Object.entries(item.prices).forEach(([size, price]) => {
      const btn = document.createElement('button');
      btn.className = 'size-option-btn';
      btn.innerHTML = `
        <span class="size-label">${size === 'S' ? 'Small' : size === 'M' ? 'Medium' : 'Large'}</span>
        <span class="size-price">₹${price}</span>
      `;
      btn.onclick = () => {
        addToCart(item.name, price, size);
        closeSizeModal();
      };
      sizeOptions.appendChild(btn);
    });

    sizeModal.classList.add('open');
    cartOverlay.classList.add('show');
  }

  function closeSizeModal() {
    sizeModal.classList.remove('open');
    if (!cartDrawer.classList.contains('open')) {
      cartOverlay.classList.remove('show');
    }
  }

  closeModal.onclick = closeSizeModal;

  // Cart Functions
  window.addToCart = (name, price, size = null) => {
    const existingItem = cart.find(i => i.name === name && i.size === size);
    if (existingItem) {
      existingItem.qty++;
    } else {
      cart.push({ name, price, size, qty: 1 });
    }
    updateCartUI();
  };

  function updateCartUI() {
    cartItemsList.innerHTML = '';
    let total = 0;
    let count = 0;

    cart.forEach((item, index) => {
      const itemTotal = item.price * item.qty;
      total += itemTotal;
      count += item.qty;

      const div = document.createElement('div');
      div.className = 'cart-item';
      div.innerHTML = `
        <div class="cart-item-info">
          <h4>${item.name} ${item.size ? `(${item.size})` : ''}</h4>
          <p>₹${item.price} x ${item.qty}</p>
        </div>
        <div class="cart-item-qty">
          <button class="qty-btn" onclick="updateQty(${index}, -1)">-</button>
          <span>${item.qty}</span>
          <button class="qty-btn" onclick="updateQty(${index}, 1)">+</button>
        </div>
      `;
      cartItemsList.appendChild(div);
    });

    cartCounter.innerText = count;
    cartTotalAmount.innerText = `₹${total}`;
  }

  window.updateQty = (index, delta) => {
    cart[index].qty += delta;
    if (cart[index].qty <= 0) {
      cart.splice(index, 1);
    }
    updateCartUI();
  };

  function toggleCart(show) {
    if (show) {
      cartDrawer.classList.add('open');
      cartOverlay.classList.add('show');
    } else {
      cartDrawer.classList.remove('open');
      cartOverlay.classList.remove('show');
    }
  }

  cartIcon.onclick = () => toggleCart(true);
  closeCart.onclick = () => toggleCart(false);
  cartOverlay.onclick = () => toggleCart(false);

  // WhatsApp Integration
  sendOrderBtn.onclick = () => {
    const name = document.getElementById('customer-name').value;
    const phone = document.getElementById('customer-phone').value;
    const address = document.getElementById('customer-address').value;

    if (!name || !phone || !address) {
      alert('Please fill in your name, phone number, and address.');
      return;
    }

    if (cart.length === 0) {
      alert('Your cart is empty!');
      return;
    }

    let message = `🚀 *New Order from Pizza Planet*%0A%0A`;
    message += `👤 *Customer Details:*%0A`;
    message += `Name: ${name}%0A`;
    message += `Phone: ${phone}%0A`;
    message += `Address: ${address}%0A%0A`;
    message += `🍕 *Order Items:*%0A`;

    let total = 0;
    cart.forEach(item => {
      const itemTotal = item.price * item.qty;
      total += itemTotal;
      message += `- ${item.name} ${item.size ? `(${item.size})` : ''} x ${item.qty}: ₹${itemTotal}%0A`;
    });

    message += `%0A💰 *Grand Total: ₹${total}*%0A%0A`;
    message += `Please confirm the order! 🛸`;

    const whatsappNumber = "919876543210"; // Placeholder Business Number
    const url = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(url, '_blank');
  };

  // Initial render
  renderMenu(menuData[0].id);
});
