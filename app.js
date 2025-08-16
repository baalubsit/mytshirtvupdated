// Enhanced Application Data with 3D and Body Shape Features
const appData = {
  bodyTypes: [
    {
      id: "rectangle",
      name: "Rectangle",
      description: "Straight torso with shoulders, waist, and hips about the same width",
      characteristics: ["Similar measurements throughout", "Athletic or lean build", "Minimal waist definition"],
      recommendedFits: ["slim", "athletic", "oversized"],
      avoidFits: ["regular"],
      tips: "Add dimension with structured fits or create contrast with oversized styles"
    },
    {
      id: "inverted-triangle",
      name: "Inverted Triangle",
      description: "Broad shoulders and chest with narrow waist and hips",
      characteristics: ["Wide shoulders", "Narrow waist", "Athletic build", "Well-developed chest"],
      recommendedFits: ["athletic", "slim", "regular"],
      avoidFits: ["oversized"],
      tips: "Highlight your athletic build with fitted styles that follow your natural lines"
    },
    {
      id: "triangle",
      name: "Triangle",
      description: "Narrow shoulders with wider waist and hips",
      characteristics: ["Narrow shoulders", "Wider midsection", "Fuller lower body"],
      recommendedFits: ["regular", "relaxed", "oversized"],
      avoidFits: ["slim", "athletic"],
      tips: "Balance proportions by adding visual weight to shoulders and choosing comfortable fits"
    },
    {
      id: "oval",
      name: "Oval",
      description: "Rounded midsection with narrower shoulders and hips",
      characteristics: ["Fuller midsection", "Softer silhouette", "Rounded torso"],
      recommendedFits: ["regular", "relaxed"],
      avoidFits: ["slim", "athletic"],
      tips: "Choose structured fits that create clean lines and elongate your frame"
    },
    {
      id: "trapezoid",
      name: "Trapezoid",
      description: "Balanced proportions with broad shoulders and defined waist",
      characteristics: ["Well-proportioned", "Defined waist", "Balanced silhouette", "Ideal shape"],
      recommendedFits: ["all"],
      avoidFits: [],
      tips: "You can wear any fit! Focus on quality tailoring for the best results"
    }
  ],
  fitTypes: [
    {
      id: "slim",
      name: "Slim Fit",
      description: "Tailored close to the body with a modern silhouette",
      measurements: {
        chest: "Close fitting",
        waist: "Tapered",
        length: "Standard",
        sleeves: "Fitted"
      },
      bestFor: ["rectangle", "inverted-triangle", "trapezoid"],
      priceModifier: 2,
      features: ["Modern cut", "Tapered waist", "Fitted sleeves", "Sophisticated look"]
    },
    {
      id: "regular",
      name: "Regular Fit",
      description: "Classic straight cut offering comfortable all-day wear",
      measurements: {
        chest: "Comfortable",
        waist: "Straight",
        length: "Standard",
        sleeves: "Regular"
      },
      bestFor: ["triangle", "oval", "trapezoid", "inverted-triangle"],
      priceModifier: 0,
      features: ["Classic cut", "Versatile style", "All-day comfort", "Timeless appeal"]
    },
    {
      id: "athletic",
      name: "Athletic Fit",
      description: "Designed for muscular builds with room through chest and arms",
      measurements: {
        chest: "Accommodating",
        waist: "Tapered",
        length: "Standard",
        sleeves: "Athletic cut"
      },
      bestFor: ["inverted-triangle", "rectangle", "trapezoid"],
      priceModifier: 3,
      features: ["Muscle-friendly", "Tapered waist", "Performance focused", "Athletic aesthetic"]
    },
    {
      id: "relaxed",
      name: "Relaxed Fit",
      description: "Roomier cut for maximum comfort and casual styling",
      measurements: {
        chest: "Roomy",
        waist: "Loose",
        length: "Standard",
        sleeves: "Comfortable"
      },
      bestFor: ["triangle", "oval", "trapezoid"],
      priceModifier: 1,
      features: ["Maximum comfort", "Casual style", "Breathable fit", "Laid-back appeal"]
    },
    {
      id: "oversized",
      name: "Oversized Fit",
      description: "Deliberately loose and baggy for a contemporary streetwear look",
      measurements: {
        chest: "Very loose",
        waist: "Baggy",
        length: "Extended",
        sleeves: "Oversized"
      },
      bestFor: ["rectangle", "triangle", "trapezoid"],
      priceModifier: 4,
      features: ["Streetwear style", "Trendy silhouette", "Statement piece", "Modern appeal"]
    },
    {
      id: "longline",
      name: "Longline Fit",
      description: "Extended length with contemporary styling and modern proportions",
      measurements: {
        chest: "Regular",
        waist: "Straight",
        length: "Extended",
        sleeves: "Regular"
      },
      bestFor: ["rectangle", "trapezoid", "inverted-triangle"],
      priceModifier: 5,
      features: ["Extended length", "Modern styling", "Layering friendly", "Contemporary cut"]
    }
  ],
  fabricTypes: [
    {
      id: "cotton",
      name: "100% Cotton",
      description: "Classic comfort with natural breathability",
      texture: "smooth",
      priceModifier: 0,
      features: ["Breathable", "Soft", "Classic", "Easy care"]
    },
    {
      id: "blend",
      name: "Cotton Blend",
      description: "Perfect balance of comfort and durability",
      texture: "smooth",
      priceModifier: 2,
      features: ["Durable", "Shape retention", "Comfortable", "Versatile"]
    },
    {
      id: "premium",
      name: "Premium Cotton",
      description: "Luxury feel with superior softness and quality",
      texture: "luxury",
      priceModifier: 8,
      features: ["Ultra soft", "Premium quality", "Long lasting", "Luxury feel"]
    },
    {
      id: "vintage",
      name: "Vintage Wash",
      description: "Pre-worn feel with vintage character and softness",
      texture: "vintage",
      priceModifier: 6,
      features: ["Vintage look", "Soft feel", "Pre-shrunk", "Character"]
    }
  ],
  products: [
    {
      id: 1,
      name: "Classic Cotton Tee",
      basePrice: 15,
      colors: ["white", "black", "red", "blue", "green", "gray", "navy", "yellow"],
      image: "classic-tee.jpg"
    },
    {
      id: 2,
      name: "Premium Blend Tee",
      basePrice: 22,
      colors: ["white", "black", "gray", "blue", "red", "green", "navy"],
      image: "premium-tee.jpg"
    },
    {
      id: 3,
      name: "Vintage Style Tee",
      basePrice: 25,
      colors: ["black", "gray", "white", "green", "navy", "brown"],
      image: "vintage-tee.jpg"
    }
  ],
  designPlacements: [
    {
      id: "front-center",
      name: "Front Center",
      description: "Classic front placement",
      priceModifier: 0
    },
    {
      id: "front-left-chest",
      name: "Left Chest",
      description: "Small logo placement",
      priceModifier: 0
    },
    {
      id: "back-center",
      name: "Back Center",
      description: "Large back design",
      priceModifier: 2
    },
    {
      id: "sleeves",
      name: "Sleeves",
      description: "Both sleeves",
      priceModifier: 4
    },
    {
      id: "all-over",
      name: "All Over Print",
      description: "Full garment coverage",
      priceModifier: 15
    }
  ],
  viewingAngles: [
    {"id": "front", "name": "Front View", "rotation": 0},
    {"id": "right", "name": "Right Side", "rotation": 90},
    {"id": "back", "name": "Back View", "rotation": 180},
    {"id": "left", "name": "Left Side", "rotation": 270}
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
    textColors: ["black", "white", "red", "blue", "green", "yellow", "purple", "orange"],
    fonts: ["Arial", "Georgia", "Impact", "Comic Sans MS", "Times New Roman", "Helvetica", "Futura"],
    textPricing: 5,
    imagePricing: 8
  }
};

// Enhanced Application State
let currentState = {
  currentPage: 'home',
  selectedProduct: appData.products[0],
  selectedBodyShape: 'rectangle',
  selectedFit: 'regular',
  selectedFabric: 'cotton',
  selectedColor: 'white',
  selectedSize: 'M',
  customText: '',
  selectedFont: 'Arial',
  selectedTextColor: 'black',
  selectedDesignPlacement: 'front-center',
  hasCustomImage: false,
  cart: [],
  currentView: 'front',
  currentRotation: 0,
  isAutoRotating: false,
  zoomLevel: 1,
  activeTab: 'body-shape'
};

// Navigation Functions
function showPage(pageId) {
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
      initialize3DDesignTool();
    }, 100);
  } else if (pageId === 'cart') {
    updateCartPage();
  }
}

function selectProductAndDesign(productId) {
  console.log('Selecting product:', productId);
  const product = appData.products.find(p => p.id === productId);
  if (product) {
    currentState.selectedProduct = product;
    currentState.selectedColor = product.colors[0];
  }
  showPage('design');
}

// Cart Functions
function openCart() {
  const cartSidebar = document.getElementById('cart-sidebar');
  const cartOverlay = document.getElementById('cart-overlay');
  if (cartSidebar) cartSidebar.classList.add('open');
  if (cartOverlay) cartOverlay.classList.add('active');
}

function closeCart() {
  const cartSidebar = document.getElementById('cart-sidebar');
  const cartOverlay = document.getElementById('cart-overlay');
  if (cartSidebar) cartSidebar.classList.remove('open');
  if (cartOverlay) cartOverlay.classList.remove('active');
}

function removeFromCart(itemId) {
  currentState.cart = currentState.cart.filter(item => item.id !== itemId);
  updateCartDisplay();
  updateCartPage();
}

function updateQuantity(itemId, newQuantity) {
  if (newQuantity <= 0) {
    removeFromCart(itemId);
    return;
  }
  
  const item = currentState.cart.find(item => item.id === itemId);
  if (item) {
    item.quantity = newQuantity;
    updateCartDisplay();
    updateCartPage();
  }
}

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
        <div class="product-price">Starting at $${product.basePrice}</div>
        <div class="product-colors">
          ${product.colors.map(color => 
            `<div class="color-dot color-${color}"></div>`
          ).join('')}
        </div>
        <button class="btn btn--primary" onclick="selectProductAndDesign(${product.id})">
          Customize in 3D
        </button>
      </div>
    `;
    productsGrid.appendChild(productCard);
  });
}

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

// Enhanced 3D Design Tool Functions
function initialize3DDesignTool() {
  console.log('Initializing 3D design tool');
  
  // Initialize tabs
  initializeTabs();
  
  // Load all customization options
  loadBodyShapes();
  loadFitOptions();
  loadProductOptions();
  loadFabricOptions();
  loadDesignOptions();
  
  // Initialize 3D controls
  initialize3DControls();
  
  // Update everything
  update3DModel();
  updateBodyShapeAvatar();
  updatePricing();
  
  console.log('3D Design tool initialized');
}

function initializeTabs() {
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabPanels = document.querySelectorAll('.tab-panel');
  
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const tabId = btn.dataset.tab;
      
      // Update active tab button
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      // Update active tab panel
      tabPanels.forEach(panel => {
        panel.classList.remove('active');
        if (panel.dataset.tab === tabId) {
          panel.classList.add('active');
        }
      });
      
      currentState.activeTab = tabId;
    });
  });
}

function loadBodyShapes() {
  const bodyShapesGrid = document.querySelector('.body-shapes-grid');
  if (!bodyShapesGrid) return;
  
  bodyShapesGrid.innerHTML = '';
  
  appData.bodyTypes.forEach(bodyType => {
    const option = document.createElement('div');
    option.className = 'body-shape-option';
    option.dataset.shape = bodyType.id;
    
    if (bodyType.id === currentState.selectedBodyShape) {
      option.classList.add('selected');
    }
    
    option.innerHTML = `
      <div class="body-shape-icon ${bodyType.id}"></div>
      <div class="body-shape-info">
        <h4>${bodyType.name}</h4>
        <p>${bodyType.description}</p>
      </div>
    `;
    
    option.addEventListener('click', () => selectBodyShape(bodyType.id));
    bodyShapesGrid.appendChild(option);
  });
  
  // Update tips for current selection
  updateBodyShapeTips();
}

function selectBodyShape(shapeId) {
  currentState.selectedBodyShape = shapeId;
  
  // Update visual selection
  const options = document.querySelectorAll('.body-shape-option');
  options.forEach(option => {
    option.classList.toggle('selected', option.dataset.shape === shapeId);
  });
  
  // Update tips and recommendations
  updateBodyShapeTips();
  loadFitOptions(); // Reload fit options with recommendations
  updateBodyShapeAvatar();
  update3DModel();
}

function updateBodyShapeTips() {
  const shapeTipText = document.getElementById('shape-tip-text');
  if (!shapeTipText) return;
  
  const bodyType = appData.bodyTypes.find(bt => bt.id === currentState.selectedBodyShape);
  if (bodyType) {
    shapeTipText.textContent = bodyType.tips;
  }
}

function loadFitOptions() {
  const fitOptions = document.getElementById('fit-options');
  const recommendedFits = document.getElementById('recommended-fits');
  
  if (!fitOptions) return;
  
  const currentBodyType = appData.bodyTypes.find(bt => bt.id === currentState.selectedBodyShape);
  
  // Load recommended fits
  if (recommendedFits && currentBodyType) {
    recommendedFits.innerHTML = '';
    
    const recommendedFitTypes = appData.fitTypes.filter(fit => 
      currentBodyType.recommendedFits.includes(fit.id) || 
      currentBodyType.recommendedFits.includes('all')
    );
    
    recommendedFitTypes.forEach(fit => {
      const badge = document.createElement('span');
      badge.className = 'recommended-fit-badge';
      badge.textContent = fit.name;
      recommendedFits.appendChild(badge);
    });
  }
  
  // Load all fit options
  fitOptions.innerHTML = '';
  
  appData.fitTypes.forEach(fit => {
    const isRecommended = currentBodyType && 
      (currentBodyType.recommendedFits.includes(fit.id) || 
       currentBodyType.recommendedFits.includes('all'));
    
    const option = document.createElement('div');
    option.className = `fit-option ${isRecommended ? 'recommended' : ''}`;
    option.dataset.fit = fit.id;
    
    if (fit.id === currentState.selectedFit) {
      option.classList.add('selected');
    }
    
    option.innerHTML = `
      <div class="fit-header">
        <span class="fit-name">${fit.name}</span>
        <span class="fit-price-modifier">+$${fit.priceModifier}</span>
        ${isRecommended ? '<span class="recommended-badge">Recommended</span>' : ''}
      </div>
      <div class="fit-description">${fit.description}</div>
      <div class="fit-features">
        ${fit.features.map(feature => `<span class="fit-feature">${feature}</span>`).join('')}
      </div>
    `;
    
    option.addEventListener('click', () => selectFit(fit.id));
    fitOptions.appendChild(option);
  });
}

function selectFit(fitId) {
  currentState.selectedFit = fitId;
  
  // Update visual selection
  const options = document.querySelectorAll('.fit-option');
  options.forEach(option => {
    option.classList.remove('selected');
    if (option.dataset.fit === fitId) {
      option.classList.add('selected');
    }
  });
  
  update3DModel();
  updatePricing();
}

function loadProductOptions() {
  // Load product select
  const productSelect = document.getElementById('product-select');
  if (productSelect) {
    productSelect.innerHTML = '';
    appData.products.forEach(product => {
      const option = document.createElement('option');
      option.value = product.id;
      option.textContent = `${product.name} - $${product.basePrice}`;
      if (product.id === currentState.selectedProduct.id) {
        option.selected = true;
      }
      productSelect.appendChild(option);
    });
    
    productSelect.addEventListener('change', (e) => {
      const product = appData.products.find(p => p.id == e.target.value);
      if (product) {
        currentState.selectedProduct = product;
        currentState.selectedColor = product.colors[0];
        loadProductColors();
        update3DModel();
        updatePricing();
      }
    });
  }
  
  // Load colors
  loadProductColors();
  
  // Load sizes
  const sizeSelect = document.getElementById('size-select');
  if (sizeSelect) {
    sizeSelect.innerHTML = '';
    appData.sizes.forEach(size => {
      const option = document.createElement('option');
      option.value = size.name;
      option.textContent = `${size.name}${size.priceModifier > 0 ? ` - +$${size.priceModifier}` : ''}`;
      if (size.name === currentState.selectedSize) {
        option.selected = true;
      }
      sizeSelect.appendChild(option);
    });
    
    sizeSelect.addEventListener('change', (e) => {
      currentState.selectedSize = e.target.value;
      updatePricing();
    });
  }
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
    colorOption.addEventListener('click', () => selectColor(color));
    colorOptions.appendChild(colorOption);
  });
}

function selectColor(color) {
  currentState.selectedColor = color;
  const colorOptions = document.querySelectorAll('#color-options .color-option');
  colorOptions.forEach(el => el.classList.remove('selected'));
  const selectedOption = document.querySelector(`#color-options .color-option.color-${color}`);
  if (selectedOption) {
    selectedOption.classList.add('selected');
  }
  update3DModel();
}

function loadFabricOptions() {
  const fabricOptions = document.getElementById('fabric-options');
  if (!fabricOptions) return;
  
  fabricOptions.innerHTML = '';
  
  appData.fabricTypes.forEach(fabric => {
    const option = document.createElement('div');
    option.className = 'fabric-option';
    option.dataset.fabric = fabric.id;
    
    if (fabric.id === currentState.selectedFabric) {
      option.classList.add('selected');
    }
    
    option.innerHTML = `
      <div class="fabric-info">
        <h4>${fabric.name}</h4>
        <p>${fabric.description}</p>
        <div class="fabric-features">
          ${fabric.features.map(feature => `<span class="fabric-feature">${feature}</span>`).join('')}
        </div>
      </div>
      <div class="fabric-price">+$${fabric.priceModifier}</div>
    `;
    
    option.addEventListener('click', () => selectFabric(fabric.id));
    fabricOptions.appendChild(option);
  });
}

function selectFabric(fabricId) {
  currentState.selectedFabric = fabricId;
  
  // Update visual selection
  const options = document.querySelectorAll('.fabric-option');
  options.forEach(option => {
    option.classList.remove('selected');
    if (option.dataset.fabric === fabricId) {
      option.classList.add('selected');
    }
  });
  
  update3DModel();
  updatePricing();
}

function loadDesignOptions() {
  // Load design placement
  const designPlacement = document.getElementById('design-placement');
  if (designPlacement) {
    designPlacement.innerHTML = '';
    appData.designPlacements.forEach(placement => {
      const option = document.createElement('option');
      option.value = placement.id;
      option.textContent = `${placement.name}${placement.priceModifier > 0 ? ` - +$${placement.priceModifier}` : ''}`;
      designPlacement.appendChild(option);
    });
    
    designPlacement.addEventListener('change', (e) => {
      currentState.selectedDesignPlacement = e.target.value;
      update3DModel();
      updatePricing();
    });
  }
  
  // Load text colors
  loadTextColors();
  
  // Text input
  const customTextInput = document.getElementById('custom-text');
  if (customTextInput) {
    customTextInput.addEventListener('input', (e) => {
      currentState.customText = e.target.value;
      update3DModel();
      updatePricing();
    });
  }
  
  // Font selection
  const fontSelect = document.getElementById('font-select');
  if (fontSelect) {
    fontSelect.addEventListener('change', (e) => {
      currentState.selectedFont = e.target.value;
      update3DModel();
    });
  }
  
  // Image upload
  const imageUpload = document.getElementById('image-upload');
  if (imageUpload) {
    imageUpload.addEventListener('change', (e) => {
      if (e.target.files.length > 0) {
        currentState.hasCustomImage = true;
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = function(e) {
          currentState.hasCustomImage = true;
          update3DModel();
          updatePricing();
        };
        reader.readAsDataURL(file);
      } else {
        currentState.hasCustomImage = false;
        update3DModel();
        updatePricing();
      }
    });
  }
}

function loadTextColors() {
  const textColorOptions = document.getElementById('text-color-options');
  if (!textColorOptions) return;
  
  textColorOptions.innerHTML = '';
  
  appData.customizationOptions.textColors.forEach(color => {
    const colorOption = document.createElement('div');
    colorOption.className = `color-option color-${color}`;
    if (color === currentState.selectedTextColor) {
      colorOption.classList.add('selected');
    }
    colorOption.addEventListener('click', () => selectTextColor(color));
    textColorOptions.appendChild(colorOption);
  });
}

function selectTextColor(color) {
  currentState.selectedTextColor = color;
  const textColorOptions = document.querySelectorAll('#text-color-options .color-option');
  textColorOptions.forEach(el => el.classList.remove('selected'));
  const selectedOption = document.querySelector(`#text-color-options .color-option.color-${color}`);
  if (selectedOption) {
    selectedOption.classList.add('selected');
  }
  update3DModel();
}

// 3D Model Functions
function initialize3DControls() {
  // Angle buttons
  const angleBtns = document.querySelectorAll('.angle-btn');
  angleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const angle = parseInt(btn.dataset.angle);
      set3DRotation(angle);
      
      angleBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });
  
  // Auto rotate button
  const autoRotateBtn = document.getElementById('auto-rotate-btn');
  if (autoRotateBtn) {
    autoRotateBtn.addEventListener('click', toggleAutoRotate);
  }
  
  // Zoom buttons
  const zoomInBtn = document.getElementById('zoom-in-btn');
  const zoomOutBtn = document.getElementById('zoom-out-btn');
  
  if (zoomInBtn) {
    zoomInBtn.addEventListener('click', () => {
      currentState.zoomLevel = Math.min(currentState.zoomLevel + 0.2, 2);
      update3DModel();
    });
  }
  
  if (zoomOutBtn) {
    zoomOutBtn.addEventListener('click', () => {
      currentState.zoomLevel = Math.max(currentState.zoomLevel - 0.2, 0.5);
      update3DModel();
    });
  }
  
  // Add to cart button
  const addToCartBtn = document.getElementById('add-to-cart-btn');
  if (addToCartBtn) {
    addToCartBtn.addEventListener('click', addToCart);
  }
}

function set3DRotation(angle) {
  currentState.currentRotation = angle;
  currentState.isAutoRotating = false;
  update3DModel();
  
  // Update auto rotate button
  const autoRotateBtn = document.getElementById('auto-rotate-btn');
  const model = document.getElementById('tshirt-3d-model');
  if (autoRotateBtn) autoRotateBtn.classList.remove('active');
  if (model) model.classList.remove('rotating');
}

function toggleAutoRotate() {
  currentState.isAutoRotating = !currentState.isAutoRotating;
  const autoRotateBtn = document.getElementById('auto-rotate-btn');
  const model = document.getElementById('tshirt-3d-model');
  
  if (currentState.isAutoRotating) {
    if (autoRotateBtn) autoRotateBtn.classList.add('active');
    if (model) model.classList.add('rotating');
  } else {
    if (autoRotateBtn) autoRotateBtn.classList.remove('active');
    if (model) model.classList.remove('rotating');
  }
}

function update3DModel() {
  const model = document.getElementById('tshirt-3d-model');
  if (!model) return;
  
  // Update rotation
  if (!currentState.isAutoRotating) {
    model.style.transform = `rotateY(${currentState.currentRotation}deg) scale(${currentState.zoomLevel})`;
  } else {
    model.style.transform = `scale(${currentState.zoomLevel})`;
  }
  
  // Update t-shirt color
  const faces = document.querySelectorAll('.face');
  const colorMap = {
    white: '#ffffff',
    black: '#000000',
    red: '#dc2626',
    blue: '#2563eb',
    green: '#16a34a',
    yellow: '#eab308',
    gray: '#6b7280',
    navy: '#1e3a8a',
    brown: '#92400e',
    purple: '#7c3aed',
    orange: '#ea580c'
  };
  
  faces.forEach(face => {
    face.style.backgroundColor = colorMap[currentState.selectedColor] || '#ffffff';
    if (currentState.selectedColor === 'white') {
      face.style.border = '2px solid #e5e7eb';
    } else {
      face.style.border = '2px solid #374151';
    }
  });
  
  // Update fabric texture
  const fabricTextures = document.querySelectorAll('.fabric-texture');
  const fabricType = appData.fabricTypes.find(f => f.id === currentState.selectedFabric);
  fabricTextures.forEach(texture => {
    texture.className = `fabric-texture ${fabricType ? fabricType.texture : 'cotton'}`;
  });
  
  // Update text and images
  updateDesignElements();
}

function updateDesignElements() {
  const textFront = document.getElementById('text-front');
  const textBack = document.getElementById('text-back');
  const imageFront = document.getElementById('image-front');
  const imageBack = document.getElementById('image-back');
  
  const colorMap = {
    black: '#000000',
    white: '#ffffff',
    red: '#dc2626',
    blue: '#2563eb',
    green: '#16a34a',
    yellow: '#eab308',
    purple: '#7c3aed',
    orange: '#ea580c'
  };
  
  // Clear all elements first
  [textFront, textBack].forEach(el => {
    if (el) {
      el.textContent = '';
      el.style.display = 'none';
    }
  });
  
  [imageFront, imageBack].forEach(el => {
    if (el) {
      el.innerHTML = '';
      el.style.display = 'none';
    }
  });
  
  // Update text based on placement
  const placement = currentState.selectedDesignPlacement;
  
  if (currentState.customText) {
    const textColor = colorMap[currentState.selectedTextColor] || '#000000';
    const textStyle = {
      fontFamily: currentState.selectedFont,
      color: textColor,
      display: 'block'
    };
    
    if (placement === 'front-center' || placement === 'front-left-chest') {
      if (textFront) {
        textFront.textContent = currentState.customText;
        Object.assign(textFront.style, textStyle);
        if (placement === 'front-left-chest') {
          textFront.style.fontSize = '14px';
          textFront.style.position = 'absolute';
          textFront.style.top = '20%';
          textFront.style.left = '20%';
          textFront.style.transform = 'none';
        }
      }
    } else if (placement === 'back-center') {
      if (textBack) {
        textBack.textContent = currentState.customText;
        Object.assign(textBack.style, textStyle);
      }
    }
  }
  
  // Update images
  if (currentState.hasCustomImage) {
    const imageHtml = '<div style="background: #e5e7eb; padding: 20px; border-radius: 8px; text-align: center; color: #6b7280; font-size: 12px;">Custom Image</div>';
    
    if (placement === 'front-center' || placement === 'front-left-chest') {
      if (imageFront) {
        imageFront.innerHTML = imageHtml;
        imageFront.style.display = 'block';
      }
    } else if (placement === 'back-center') {
      if (imageBack) {
        imageBack.innerHTML = imageHtml;
        imageBack.style.display = 'block';
      }
    }
  }
}

function updateBodyShapeAvatar() {
  const avatarDisplay = document.getElementById('avatar-display');
  if (!avatarDisplay) return;
  
  avatarDisplay.className = `avatar-body ${currentState.selectedBodyShape}`;
}

function updatePricing() {
  const basePrice = currentState.selectedProduct.basePrice;
  
  const fitData = appData.fitTypes.find(f => f.id === currentState.selectedFit);
  const fitModifier = fitData ? fitData.priceModifier : 0;
  
  const fabricData = appData.fabricTypes.find(f => f.id === currentState.selectedFabric);
  const fabricModifier = fabricData ? fabricData.priceModifier : 0;
  
  const sizeData = appData.sizes.find(s => s.name === currentState.selectedSize);
  const sizeModifier = sizeData ? sizeData.priceModifier : 0;
  
  const placementData = appData.designPlacements.find(p => p.id === currentState.selectedDesignPlacement);
  const placementModifier = placementData ? placementData.priceModifier : 0;
  
  const textPrice = currentState.customText ? appData.customizationOptions.textPricing : 0;
  const imagePrice = currentState.hasCustomImage ? appData.customizationOptions.imagePricing : 0;
  const designPrice = textPrice + imagePrice + placementModifier;
  
  const total = basePrice + fitModifier + fabricModifier + sizeModifier + designPrice;
  
  // Update price display
  const priceElements = {
    'base-price': `$${basePrice.toFixed(2)}`,
    'fit-price': `$${fitModifier.toFixed(2)}`,
    'fabric-price': `$${fabricModifier.toFixed(2)}`,
    'size-price': `$${sizeModifier.toFixed(2)}`,
    'design-price': `$${designPrice.toFixed(2)}`,
    'total-price': `$${total.toFixed(2)}`,
    'cart-price': `$${total.toFixed(2)}`
  };
  
  Object.entries(priceElements).forEach(([id, value]) => {
    const el = document.getElementById(id);
    if (el) el.textContent = value;
  });
}

// Shopping Cart Functions
function addToCart() {
  const basePrice = currentState.selectedProduct.basePrice;
  const fitData = appData.fitTypes.find(f => f.id === currentState.selectedFit);
  const fabricData = appData.fabricTypes.find(f => f.id === currentState.selectedFabric);
  const sizeData = appData.sizes.find(s => s.name === currentState.selectedSize);
  const placementData = appData.designPlacements.find(p => p.id === currentState.selectedDesignPlacement);
  
  const fitModifier = fitData ? fitData.priceModifier : 0;
  const fabricModifier = fabricData ? fabricData.priceModifier : 0;
  const sizeModifier = sizeData ? sizeData.priceModifier : 0;
  const placementModifier = placementData ? placementData.priceModifier : 0;
  const textPrice = currentState.customText ? appData.customizationOptions.textPricing : 0;
  const imagePrice = currentState.hasCustomImage ? appData.customizationOptions.imagePricing : 0;
  
  const totalPrice = basePrice + fitModifier + fabricModifier + sizeModifier + textPrice + imagePrice + placementModifier;
  
  const cartItem = {
    id: Date.now(),
    product: currentState.selectedProduct,
    bodyShape: currentState.selectedBodyShape,
    fit: fitData ? fitData.name : 'Regular Fit',
    fabric: fabricData ? fabricData.name : '100% Cotton',
    color: currentState.selectedColor,
    size: currentState.selectedSize,
    customText: currentState.customText,
    font: currentState.selectedFont,
    textColor: currentState.selectedTextColor,
    hasImage: currentState.hasCustomImage,
    placement: placementData ? placementData.name : 'Front Center',
    price: totalPrice,
    quantity: 1
  };
  
  currentState.cart.push(cartItem);
  updateCartDisplay();
  updateCartPage();
  openCart();
}

function updateCartDisplay() {
  const cartItems = document.getElementById('cart-items');
  const cartEmpty = document.getElementById('cart-empty');
  const cartCount = document.getElementById('cart-count');
  const cartSubtotal = document.getElementById('cart-subtotal');
  const cartTotal = document.getElementById('cart-total');
  const viewCartBtn = document.getElementById('view-cart-btn');
  
  if (!cartItems || !cartEmpty || !cartCount) return;
  
  if (currentState.cart.length === 0) {
    cartItems.style.display = 'none';
    cartEmpty.style.display = 'block';
    if (viewCartBtn) viewCartBtn.disabled = true;
    cartCount.textContent = '0';
    if (cartSubtotal) cartSubtotal.textContent = '$0.00';
    if (cartTotal) cartTotal.textContent = '$0.00';
    return;
  }
  
  cartItems.style.display = 'block';
  cartEmpty.style.display = 'none';
  if (viewCartBtn) viewCartBtn.disabled = false;
  
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
        ${item.fit} | ${item.fabric}<br>
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

function updateCartPage() {
  const cartPageItems = document.getElementById('cart-page-items');
  const cartPageEmpty = document.getElementById('cart-page-empty');
  const proceedCheckout = document.getElementById('proceed-checkout');
  
  if (!cartPageItems || !cartPageEmpty) return;
  
  if (currentState.cart.length === 0) {
    cartPageItems.style.display = 'none';
    cartPageEmpty.style.display = 'block';
    if (proceedCheckout) proceedCheckout.disabled = true;
    updateCartPageTotals(0, 0, 0, 0);
    return;
  }
  
  cartPageItems.style.display = 'block';
  cartPageEmpty.style.display = 'none';
  if (proceedCheckout) proceedCheckout.disabled = false;
  
  cartPageItems.innerHTML = '';
  let subtotal = 0;
  
  currentState.cart.forEach(item => {
    subtotal += item.price * item.quantity;
    
    const bodyTypeName = appData.bodyTypes.find(bt => bt.id === item.bodyShape)?.name || 'Standard';
    
    const cartItemEl = document.createElement('div');
    cartItemEl.className = 'cart-page-item';
    cartItemEl.innerHTML = `
      <div class="cart-item-image">3D Preview</div>
      <div class="cart-item-info">
        <h3>${item.product.name}</h3>
        <div class="cart-item-details">
          <strong>Body Shape:</strong> ${bodyTypeName}<br>
          <strong>Fit:</strong> ${item.fit} | <strong>Fabric:</strong> ${item.fabric}<br>
          <strong>Color:</strong> ${item.color} | <strong>Size:</strong> ${item.size}
          ${item.customText ? `<br><strong>Text:</strong> "${item.customText}"` : ''}
          ${item.hasImage ? '<br><strong>Custom Image</strong>' : ''}
          <br><strong>Placement:</strong> ${item.placement}
        </div>
        <div class="cart-item-price">$${item.price.toFixed(2)} each</div>
      </div>
      <div class="cart-item-controls">
        <div class="cart-item-quantity">
          <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantity - 1})">-</button>
          <span class="quantity-display">${item.quantity}</span>
          <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
        </div>
        <button class="btn btn--outline btn--sm" onclick="removeFromCart(${item.id})">Remove</button>
      </div>
      <div class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}</div>
    `;
    cartPageItems.appendChild(cartItemEl);
  });
  
  // Calculate totals
  const shipping = 0; // TBD until checkout
  const tax = subtotal * 0.085;
  const total = subtotal + shipping + tax;
  
  updateCartPageTotals(subtotal, shipping, tax, total);
}

function updateCartPageTotals(subtotal, shipping, tax, total) {
  const elements = {
    'cart-page-subtotal': `$${subtotal.toFixed(2)}`,
    'cart-page-shipping': shipping > 0 ? `$${shipping.toFixed(2)}` : 'TBD',
    'cart-page-tax': `$${tax.toFixed(2)}`,
    'cart-page-total': `$${total.toFixed(2)}`
  };
  
  Object.entries(elements).forEach(([id, value]) => {
    const el = document.getElementById(id);
    if (el) el.textContent = value;
  });
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM loaded, initializing enhanced 3D app');
  
  // Navigation - handle both click and programmatic calls
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
  
  // View cart button
  const viewCartBtn = document.getElementById('view-cart-btn');
  if (viewCartBtn) {
    viewCartBtn.addEventListener('click', () => {
      closeCart();
      showPage('cart');
    });
  }
  
  // Proceed to checkout button
  const proceedCheckout = document.getElementById('proceed-checkout');
  if (proceedCheckout) {
    proceedCheckout.addEventListener('click', () => {
      alert('Checkout functionality would be implemented here!');
    });
  }
  
  // Initialize app
  loadProducts();
  loadSizeChart();
  updateCartDisplay();
  
  // Set initial page to home
  showPage('home');
  
  console.log('Enhanced 3D App initialization complete');
});