// 🌙 Theme Toggle (light/dark)
const themeToggle = document.getElementById('theme-toggle');
if (themeToggle) {
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  themeToggle.textContent = savedTheme === 'dark' ? '☀️' : '🌙';

  themeToggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    themeToggle.textContent = next === 'dark' ? '☀️' : '🌙';
  });
}

// 🛍️ Product Data
const products = window.products || []; // if defined in index.html

// 🧩 DOM Elements
const productsContainer = document.getElementById('products-container');
const productCount = document.getElementById('product-count');
const sortSelect = document.getElementById('sort-by');
const ratingFilter = document.getElementById('rating-filter');
const searchInput = document.getElementById('search-input');
const resetButton = document.getElementById('reset-filters');

// 🚀 Display Products
function displayProducts(list) {
  if (!productsContainer) return;
  productsContainer.innerHTML = list.map(p => `
    <div class="product-card">
      <img src="${p.image}" alt="${p.name}" class="product-image">
      <span class="product-category">${p.category}</span>
      <h3>${p.name}</h3>
      <div class="product-price">$${p.price}</div>
      <div class="product-rating">⭐ ${p.rating}</div>
    </div>
  `).join('');
  productCount.textContent = `${list.length} products`;
}

// 🧠 Filter Logic
function filterProducts() {
  const selectedCategories = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(c => c.value);
  const priceRange = document.querySelector('input[name="price"]:checked')?.value || 'all';
  const minRating = parseFloat(ratingFilter?.value || 0);
  const term = searchInput?.value.toLowerCase() || '';

  let filtered = products.filter(p => {
    const matchCategory = selectedCategories.includes(p.category);
    const matchRating = p.rating >= minRating;
    const matchName = p.name.toLowerCase().includes(term);

    let matchPrice = true;
    if (priceRange !== 'all') {
      const [min, max] = priceRange.split('-').map(Number);
      matchPrice = p.price >= min && p.price <= max;
    }

    return matchCategory && matchRating && matchPrice && matchName;
  });

  const sortBy = sortSelect?.value;
  if (sortBy === 'price-low') filtered.sort((a, b) => a.price - b.price);
  if (sortBy === 'price-high') filtered.sort((a, b) => b.price - a.price);
  if (sortBy === 'rating') filtered.sort((a, b) => b.rating - a.rating);
  if (sortBy === 'name') filtered.sort((a, b) => a.name.localeCompare(b.name));

  displayProducts(filtered);
}

// 🔄 Reset Filters
function resetFilters() {
  document.querySelectorAll('input[type="checkbox"]').forEach(c => (c.checked = true));
  document.querySelector('input[name="price"][value="all"]').checked = true;
  if (ratingFilter) ratingFilter.value = '0';
  if (searchInput) searchInput.value = '';
  if (sortSelect) sortSelect.value = 'name';
  filterProducts();
}

// 🎯 Event Listeners
document.addEventListener('DOMContentLoaded', () => {
  if (products.length) {
    displayProducts(products);
  }

  document.querySelectorAll('input, select').forEach(el =>
    el.addEventListener('change', filterProducts)
  );

  if (searchInput) searchInput.addEventListener('input', filterProducts);
  if (resetButton) resetButton.addEventListener('click', resetFilters);
});


