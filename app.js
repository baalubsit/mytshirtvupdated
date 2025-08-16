// Application Data
const appData = {
  products: [
    {
      id: 1,
      name: "Classic Cotton Tee",
      basePrice: 15,
      colors: ["white", "black", "red", "blue", "green"],
      image: "classic-tee.jpg"
    },
    {
      id: 2,
      name: "Premium Blend Tee",
      basePrice: 22,
      colors: ["white", "black", "gray", "blue", "red"],
      image: "premium-tee.jpg"
    },
    {
      id: 3,
      name: "Vintage Style Tee",
      basePrice: 25,
      colors: ["black", "gray", "white", "green"],
      image: "vintage-tee.jpg"
    }
  ],
  sizes: [
    {"name": "XS", "priceModifier": 0},
    {"name": "S", "priceModifier": 0},
    {"name": "M", "priceModifier": 0},
    {"name": "L", "priceModifier": 0},
    {"name": "XL", "priceModifier": 2},
    {"name": "XXL", "priceModifier": 4},
    {"name": "XXXL", "priceModifier": 6}
  ],
  sizeChart: [
    {"size": "XS", "chest": "32-34", "length": "25", "sleeve": "7", "weight": "130-141 lbs"},
    {"size": "S", "chest": "36-38", "length": "26", "sleeve": "8", "weight": "143-158 lbs"},
    {"size": "M", "chest": "38-40", "length": "27", "sleeve": "8.5", "weight": "160-174 lbs"},
    {"size": "L", "chest": "42-44", "length": "28", "sleeve": "9", "weight": "176-192 lbs"},
    {"size": "XL", "chest": "44-46", "length": "29", "sleeve": "9.5", "weight": "194-207 lbs"},
    {"size": "XXL", "chest": "46-48", "length": "30", "sleeve": "10", "weight": "209-242 lbs"},
    {"size": "XXXL", "chest": "48-50", "length": "31", "sleeve": "10.5", "weight": "244-267 lbs"}
  ],
  customizationOptions: {
    textColors: ["black", "white", "red", "blue", "green", "yellow"],
    fonts: ["Arial", "Georgia", "Impact", "Comic Sans MS", "Times New Roman"],
    textPricing: 5,
    imagePricing: 8
  },
  featuredDesigns: [
    {
      name: "Minimalist Logo",
      price: 25,
      description: "Clean, simple design perfect for business or casual wear"
    },
    {
      name: "Vintage Graphic",
      price: 28,
      description: "Retro-inspired design with distressed effects"
    },
    {
      name: "Typography Art",
      price: 24,
      description: "Creative text-based design with multiple font styles"
    }
  ]
};

// Application State
let currentState = {
  currentPage: 'home',
  selectedProduct: appData.products[0],
  selectedColor: 'white',
  selectedSize: 'M',
  customText: '',
  selectedFont: 'Arial',
  selectedTextColor: 'black',
  hasCustomImage: false,
  cart: [],
  currentView: 'front'
};

// Global functions for HTML onclick handlers
window.showPage = function(pageId) {
  console.log('Navigating to page:', pageId);
  
  // Hide all pages
  const pages = document.querySelectorAll('.page');
  pages.forEach(page => {
    page.classList.remove('active');
  });
  
  // Remove active from all nav links
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.classList.remove('active');
  });
  
  // Show selected page
  const targetPage = document.getElementById(pageId + '-page');
  if (targetPage) {
    targetPage.classList.add('active');
    console.log('Page shown:', pageId);
  } else {
    console.error('Page not found:', pageId + '-page');
  }
  
  // Add active to current nav link
  const activeLink = document.querySelector(`[data-page="${pageId}"]`);
  if (activeLink) {
    activeLink.classList.add('active');
  }
  
  currentState.currentPage = pageId;
  
  // Initialize page-specific functionality
  if (pageId === 'design') {
    setTimeout(() => {
      initializeDesignTool();
    }, 100);
  }
};

window.selectProductAndDesign = function(productId) {
  console.log('Selecting product:', productId);
  const product = appData.products.find(p => p.id === productId);
  if (product) {
    currentState.selectedProduct = product;
    currentState.selectedColor = product.colors[0];
  }
  showPage('design');
};

window.goToDesign = function() {
  showPage('design');
};

window.openCart = function() {
  const cartSidebar = document.getElementById('cart-sidebar');
  const cartOverlay = document.getElementById('cart-overlay');
  if (cartSidebar) cartSidebar.classList.add('open');
  if (cartOverlay) cartOverlay.classList.add('active');
};

window.closeCart = function() {
  const cartSidebar = document.getElementById('cart-sidebar');
  const cartOverlay = document.getElementById('cart-overlay');
  if (cartSidebar) cartSidebar.classList.remove('open');
  if (cartOverlay) cartOverlay.classList.remove('active');
};

window.removeFromCart = function(itemId) {
  currentState.cart = currentState.cart.filter(item => item.id !== itemId);
  updateCartDisplay();
};

window.updateQuantity = function(itemId, newQuantity) {
  if (newQuantity <= 0) {
    removeFromCart(itemId);
    return;
  }
  
  const item = currentState.cart.find(item => item.id === itemId);
  if (item) {
    item.quantity = newQuantity;
    updateCartDisplay();
  }
};

// Product Loading Functions
function loadProducts() {
  const productsGrid = document.getElementById('products-grid');
  if (!productsGrid) return;
  
  productsGrid.innerHTML = '';
  
  appData.products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.className = 'product-card';
    productCard.innerHTML = `
      <div class="product-image">T-Shirt Preview</div>
      <div class="product-info">
        <h3>${product.name}</h3>
        <div class="product-price">$${product.basePrice}</div>
        <div class="product-colors">
          ${product.colors.map(color => 
            `<div class="color-dot color-${color}"></div>`
          ).join('')}
        </div>
        <button class="btn btn--primary" onclick="selectProductAndDesign(${product.id})">
          Customize
        </button>
      </div>
    `;
    productsGrid.appendChild(productCard);
  });
}

function loadFeaturedDesigns() {
  const designsGrid = document.getElementById('designs-grid');
  if (!designsGrid) return;
  
  designsGrid.innerHTML = '';
  
  appData.featuredDesigns.forEach(design => {
    const designCard = document.createElement('div');
    designCard.className = 'design-card';
    designCard.innerHTML = `
      <div class="design-image">Design Preview</div>
      <div class="design-info">
        <h3>${design.name}</h3>
        <p>${design.description}</p>
        <div class="design-price">$${design.price}</div>
        <button class="btn btn--primary" onclick="goToDesign()">
          Use This Design
        </button>
      </div>
    `;
    designsGrid.appendChild(designCard);
  });
}

// Design Tool Functions
function initializeDesignTool() {
  console.log('Initializing design tool');
  loadProductColors();
  loadTextColors();
  updateDesignTool();
  bindDesignToolEvents();
}

function loadProductColors() {
  const colorOptions = document.getElementById('color-options');
  if (!colorOptions) return;
  
  colorOptions.innerHTML = '';
  
  currentState.selectedProduct.colors.forEach(color => {
    const colorOption = document.createElement('div');
    colorOption.className = `color-option color-${color}`;
    if (color === currentState.selectedColor) {
      colorOption.classList.add('selected');
    }
    colorOption.onclick = () => selectColor(color);
    colorOptions.appendChild(colorOption);
  });
}

function loadTextColors() {
  const textColorOptions = document.getElementById('text-color-options');
  if (!textColorOptions) return;
  
  textColorOptions.innerHTML = '';
  
  appData.customizationOptions.textColors.forEach(color => {
    const colorOption = document.createElement('div');
    colorOption.className = `text-color-option color-${color}`;
    if (color === currentState.selectedTextColor) {
      colorOption.classList.add('selected');
    }
    colorOption.onclick = () => selectTextColor(color);
    textColorOptions.appendChild(colorOption);
  });
}

function selectColor(color) {
  currentState.selectedColor = color;
  const colorOptions = document.querySelectorAll('.color-option');
  colorOptions.forEach(el => el.classList.remove('selected'));
  const selectedOption = document.querySelector(`.color-option.color-${color}`);
  if (selectedOption) {
    selectedOption.classList.add('selected');
  }
  updateTshirtPreview();
}

function selectTextColor(color) {
  currentState.selectedTextColor = color;
  const textColorOptions = document.querySelectorAll('.text-color-option');
  textColorOptions.forEach(el => el.classList.remove('selected'));
  const selectedOption = document.querySelector(`.text-color-option.color-${color}`);
  if (selectedOption) {
    selectedOption.classList.add('selected');
  }
  updateTshirtPreview();
}

function updateDesignTool() {
  // Update product select
  const productSelect = document.getElementById('product-select');
  if (productSelect) {
    productSelect.value = currentState.selectedProduct.id;
  }
  
  // Update colors
  loadProductColors();
  
  // Update preview
  updateTshirtPreview();
  
  // Update pricing
  updatePricing();
}

function updateTshirtPreview() {
  const tshirtBase = document.querySelector('.tshirt-base');
  const previewText = document.getElementById('preview-text');
  const previewImage = document.getElementById('preview-image');
  
  if (!tshirtBase) return;
  
  // Update t-shirt color
  const colorMap = {
    white: '#ffffff',
    black: '#000000',
    red: '#dc2626',
    blue: '#2563eb',
    green: '#16a34a',
    yellow: '#eab308',
    gray: '#6b7280'
  };
  
  tshirtBase.style.backgroundColor = colorMap[currentState.selectedColor] || '#ffffff';
  tshirtBase.style.border = currentState.selectedColor === 'white' ? '2px solid #e5e7eb' : '2px solid #374151';
  
  // Update text
  if (previewText) {
    if (currentState.customText) {
      previewText.textContent = currentState.customText;
      previewText.style.fontFamily = currentState.selectedFont;
      previewText.style.color = colorMap[currentState.selectedTextColor] || '#000000';
      previewText.style.display = 'block';
    } else {
      previewText.style.display = 'none';
    }
  }
  
  // Update image visibility
  if (previewImage) {
    if (currentState.hasCustomImage) {
      previewImage.style.display = 'block';
    } else {
      previewImage.style.display = 'none';
    }
  }
}

function updatePricing() {
  const basePrice = currentState.selectedProduct.basePrice;
  const sizeData = appData.sizes.find(s => s.name === currentState.selectedSize);
  const sizeModifier = sizeData ? sizeData.priceModifier : 0;
  const textPrice = currentState.customText ? appData.customizationOptions.textPricing : 0;
  const imagePrice = currentState.hasCustomImage ? appData.customizationOptions.imagePricing : 0;
  
  const total = basePrice + sizeModifier + textPrice + imagePrice;
  
  const basePriceEl = document.getElementById('base-price');
  const sizePriceEl = document.getElementById('size-price');
  const textPriceEl = document.getElementById('text-price');
  const imagePriceEl = document.getElementById('image-price');
  const totalPriceEl = document.getElementById('total-price');
  
  if (basePriceEl) basePriceEl.textContent = `$${basePrice.toFixed(2)}`;
  if (sizePriceEl) sizePriceEl.textContent = `$${sizeModifier.toFixed(2)}`;
  if (textPriceEl) textPriceEl.textContent = `$${textPrice.toFixed(2)}`;
  if (imagePriceEl) imagePriceEl.textContent = `$${imagePrice.toFixed(2)}`;
  if (totalPriceEl) totalPriceEl.textContent = `$${total.toFixed(2)}`;
}

function bindDesignToolEvents() {
  // Product selection
  const productSelect = document.getElementById('product-select');
  if (productSelect && !productSelect.hasEventListener) {
    productSelect.hasEventListener = true;
    productSelect.addEventListener('change', (e) => {
      const product = appData.products.find(p => p.id == e.target.value);
      if (product) {
        currentState.selectedProduct = product;
        currentState.selectedColor = product.colors[0];
        updateDesignTool();
      }
    });
  }
  
  // Size selection
  const sizeSelect = document.getElementById('size-select');
  if (sizeSelect && !sizeSelect.hasEventListener) {
    sizeSelect.hasEventListener = true;
    sizeSelect.addEventListener('change', (e) => {
      currentState.selectedSize = e.target.value;
      updatePricing();
    });
  }
  
  // Text input
  const customTextInput = document.getElementById('custom-text');
  if (customTextInput && !customTextInput.hasEventListener) {
    customTextInput.hasEventListener = true;
    customTextInput.addEventListener('input', (e) => {
      currentState.customText = e.target.value;
      updateTshirtPreview();
      updatePricing();
    });
  }
  
  // Font selection
  const fontSelect = document.getElementById('font-select');
  if (fontSelect && !fontSelect.hasEventListener) {
    fontSelect.hasEventListener = true;
    fontSelect.addEventListener('change', (e) => {
      currentState.selectedFont = e.target.value;
      updateTshirtPreview();
    });
  }
  
  // Image upload (simulated)
  const imageUpload = document.getElementById('image-upload');
  if (imageUpload && !imageUpload.hasEventListener) {
    imageUpload.hasEventListener = true;
    imageUpload.addEventListener('change', (e) => {
      if (e.target.files.length > 0) {
        currentState.hasCustomImage = true;
        const previewImage = document.getElementById('preview-image');
        if (previewImage) {
          previewImage.innerHTML = '<div style="background: #e5e7eb; padding: 20px; border-radius: 8px; text-align: center; color: #6b7280;">Custom Image</div>';
        }
      } else {
        currentState.hasCustomImage = false;
      }
      updateTshirtPreview();
      updatePricing();
    });
  }
  
  // View toggle
  const viewButtons = document.querySelectorAll('[data-view]');
  viewButtons.forEach(btn => {
    if (!btn.hasEventListener) {
      btn.hasEventListener = true;
      btn.addEventListener('click', (e) => {
        viewButtons.forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        currentState.currentView = e.target.dataset.view;
      });
    }
  });
  
  // Add to cart
  const addToCartBtn = document.getElementById('add-to-cart-btn');
  if (addToCartBtn && !addToCartBtn.hasEventListener) {
    addToCartBtn.hasEventListener = true;
    addToCartBtn.addEventListener('click', addToCart);
  }
}

// Shopping Cart Functions
function addToCart() {
  const basePrice = currentState.selectedProduct.basePrice;
  const sizeData = appData.sizes.find(s => s.name === currentState.selectedSize);
  const sizeModifier = sizeData ? sizeData.priceModifier : 0;
  const textPrice = currentState.customText ? appData.customizationOptions.textPricing : 0;
  const imagePrice = currentState.hasCustomImage ? appData.customizationOptions.imagePricing : 0;
  const totalPrice = basePrice + sizeModifier + textPrice + imagePrice;
  
  const cartItem = {
    id: Date.now(),
    product: currentState.selectedProduct,
    color: currentState.selectedColor,
    size: currentState.selectedSize,
    customText: currentState.customText,
    font: currentState.selectedFont,
    textColor: currentState.selectedTextColor,
    hasImage: currentState.hasCustomImage,
    price: totalPrice,
    quantity: 1
  };
  
  currentState.cart.push(cartItem);
  updateCartDisplay();
  openCart();
}

function updateCartDisplay() {
  const cartItems = document.getElementById('cart-items');
  const cartEmpty = document.getElementById('cart-empty');
  const cartCount = document.getElementById('cart-count');
  const cartSubtotal = document.getElementById('cart-subtotal');
  const cartTotal = document.getElementById('cart-total');
  const checkoutBtn = document.getElementById('checkout-btn');
  
  if (!cartItems || !cartEmpty || !cartCount) return;
  
  if (currentState.cart.length === 0) {
    cartItems.style.display = 'none';
    cartEmpty.style.display = 'block';
    if (checkoutBtn) checkoutBtn.disabled = true;
    cartCount.textContent = '0';
    if (cartSubtotal) cartSubtotal.textContent = '$0.00';
    if (cartTotal) cartTotal.textContent = '$0.00';
    return;
  }
  
  cartItems.style.display = 'block';
  cartEmpty.style.display = 'none';
  if (checkoutBtn) checkoutBtn.disabled = false;
  
  cartItems.innerHTML = '';
  let subtotal = 0;
  let totalItems = 0;
  
  currentState.cart.forEach(item => {
    totalItems += item.quantity;
    subtotal += item.price * item.quantity;
    
    const cartItemEl = document.createElement('div');
    cartItemEl.className = 'cart-item';
    cartItemEl.innerHTML = `
      <div class="cart-item-header">
        <h4 class="cart-item-title">${item.product.name}</h4>
        <button class="cart-item-remove" onclick="removeFromCart(${item.id})">&times;</button>
      </div>
      <div class="cart-item-details">
        Color: ${item.color} | Size: ${item.size}
        ${item.customText ? `<br>Text: "${item.customText}"` : ''}
        ${item.hasImage ? '<br>Custom Image' : ''}
      </div>
      <div class="cart-item-footer">
        <div class="cart-item-quantity">
          <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantity - 1})">-</button>
          <span class="quantity-display">${item.quantity}</span>
          <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
        </div>
        <div class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}</div>
      </div>
    `;
    cartItems.appendChild(cartItemEl);
  });
  
  cartCount.textContent = totalItems;
  if (cartSubtotal) cartSubtotal.textContent = `$${subtotal.toFixed(2)}`;
  if (cartTotal) cartTotal.textContent = `$${subtotal.toFixed(2)}`;
}

// Measurement Guide Functions
function loadSizeChart() {
  const sizeChartBody = document.getElementById('size-chart-body');
  if (!sizeChartBody) return;
  
  sizeChartBody.innerHTML = '';
  
  appData.sizeChart.forEach(size => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td><strong>${size.size}</strong></td>
      <td>${size.chest}"</td>
      <td>${size.length}"</td>
      <td>${size.sleeve}"</td>
      <td>${size.weight}</td>
    `;
    sizeChartBody.appendChild(row);
  });
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM loaded, initializing app');
  
  // Navigation - using more specific selectors
  const navLinks = document.querySelectorAll('a[data-page], button[data-page]');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const page = link.getAttribute('data-page');
      if (page) {
        showPage(page);
      }
    });
  });
  
  // Cart controls
  const cartTrigger = document.querySelector('.cart-trigger');
  if (cartTrigger) {
    cartTrigger.addEventListener('click', (e) => {
      e.preventDefault();
      openCart();
    });
  }
  
  const cartClose = document.getElementById('cart-close');
  if (cartClose) {
    cartClose.addEventListener('click', closeCart);
  }
  
  const cartOverlay = document.getElementById('cart-overlay');
  if (cartOverlay) {
    cartOverlay.addEventListener('click', closeCart);
  }
  
  // Checkout button
  const checkoutBtn = document.getElementById('checkout-btn');
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      alert('Checkout functionality would be implemented here. Thank you for your order!');
    });
  }
  
  // Initialize app
  loadProducts();
  loadFeaturedDesigns();
  loadSizeChart();
  updateCartDisplay();
  
  // Set initial page to home
  showPage('home');
  
  console.log('App initialization complete');
});