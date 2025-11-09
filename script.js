// Sample product data
const products = [
      {
        id: 1,
        name: "Wireless Headphones",
        price: 99.99,
        category: "electronics",
        rating: 4.5,
        image: "https://i5.walmartimages.com/seo/Symphonized-Blast-Wireless-Bluetooth-Headphones-Mic-Ear-Headphones-Samsung-More-22-Playtime-Hours-Travel-Work-Deep-Bass-Headphones-Noise-Isolation-Re_78ff8e5b-5570-4eb2-8ca0-422e4a64d51e.a392ad46e96f707de61a5547318e70d1.jpeg?odnHeight=573&odnWidth=573&odnBg=FFFFFF"
    },
       {
        id: 2,
        name: "Cotton T-Shirt",
        price: 24.99,
        category: "clothing",
        rating: 4.2,
        image: "https://cdnp.sanmar.com/medias/424Wx635H-null?context=bWFzdGVyfGltYWdlc3w4Nzk4OXxpbWFnZS9qcGVnfGFEZGlMMmczTmk4eE5qWTNNamMzTnpVd01qYzFNQzgwTWpSWGVEWXpOVWhmYm5Wc2JBfDYzZDMxMjNlZDk0YjM3N2M3MDUxOGYxZjUyZjQ2ZTFkZTk2MzhhMzY4MWNjNzg4OTdlODZmODJlMGVmZDVlOTA"
    },
       {
        id: 3,
        name: "JavaScript Book",
        price: 39.99,
        category: "books",
        rating: 4.8,
        image: "https://tse2.mm.bing.net/th/id/OIP.mbZcKhol2WIRYCtsx33aLgHaGB?pid=Api&P=0&h=220"
    },
       {
        id: 4,
        name: "Smart Watch",
        price: 199.99,
        category: "electronics",
        rating: 4.3,
        image: "https://m.media-amazon.com/images/I/41APgGFuriL._SY300_SX300_QL70_FMwebp_.jpg"
    },
        {
        id: 5,
        name: "Coffee Maker",
        price: 79.99,
        category: "home",
        rating: 4.1,
        image: "https://m.media-amazon.com/images/I/81eXmViYcqL._AC_SY300_SX300_QL70_ML2_.jpg"
    },
  {
        id: 6,
        name: "Jeans",
        price: 49.99,
        category: "clothing",
        rating: 4.0,
        image: "https://inside-shops.com/915961-medium_default/jeans-mom-slim-cintura-alta.jpg"
    },
    {
        id: 7,
        name: "Python Programming",
        price: 45.99,
        category: "books",
        rating: 4.7,
        image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1655001861i/61269877.jpg"
    },
     {
        id: 8,
        name: "Desk Lamp",
        price: 29.99,
        category: "home",
        rating: 4.4,
        image: "https://www.lightingstyles.co.uk/pics/12/grey-highly-adjustable-desk-table-lamp.jpg"
    },
       {
        id: 9,
        name: "Bluetooth Speaker",
        price: 59.99,
        category: "electronics",
        rating: 4.6,
        image: "https://i5.walmartimages.com/seo/Proscan-Elite-Light-up-360-Degree-Sound-Waterproof-IPX4-Bluetooth-Speaker-Dual-External-Passive-Radiators-Black-PESP1708_0a0a66f5-c66e-4b98-b43d-678929603a70.21453f3a6a7686969521d2190aa6d4f7.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF"
    },
        {
        id: 10,
        name: "Winter Jacket",
        price: 89.99,
        category: "clothing",
        rating: 4.3,
        image: "https://images-na.ssl-images-amazon.com/images/I/71xOOqWS8SL._AC_UX679_.jpg"
    },
      {
        id: 11,
        name: "Garden Tools Set",
        price: 34.99,
        category: "home",
        rating: 4.2,
        image: "https://m.media-amazon.com/images/I/71CTjecL1EL._AC_SY300_SX300_QL70_FMwebp_.jpg"
    },
      {
        id: 12,
        name: "Web Development Guide",
        price: 55.99,
        category: "books",
        rating: 4.9,
        image: "https://s3-eu-west-1.amazonaws.com/cover2.galileo-press.de/print/9781493224371_267_2d.png"
    }
];

// DOM Elements
const productsContainer = document.getElementById('products-container');
const productCount = document.getElementById('product-count');
const searchInput = document.getElementById('search-input');
const sortSelect = document.getElementById('sort-by');
const ratingFilter = document.getElementById('rating-filter');
const resetButton = document.getElementById('reset-filters');

// Initialize
function init() {
    displayProducts(products);
    setupEventListeners();
}

// Display products
function displayProducts(productsToDisplay) {
    productsContainer.innerHTML = '';
    
    productsToDisplay.forEach(product => {
        const productCard = createProductCard(product);
        productsContainer.appendChild(productCard);
    });
    
    productCount.textContent = `${productsToDisplay.length} products`;
}

// Create product card HTML
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    
    // Generate star rating HTML
    const stars = generateStarRating(product.rating);
    
    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="product-image">
        <span class="product-category">${product.category}</span>
        <h3>${product.name}</h3>
        <div class="product-price">$${product.price}</div>
        <div class="product-rating">${stars} (${product.rating})</div>
    `;
    
    return card;
}

// Generate star rating HTML
function generateStarRating(rating) {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    
    let stars = '';
    
    // Full stars
    for (let i = 0; i < fullStars; i++) {
        stars += '★';
    }
    
    // Half star
    if (halfStar) {
        stars += '½';
    }
    
    // Empty stars
    for (let i = 0; i < emptyStars; i++) {
        stars += '☆';
    }
    
    return stars;
}

// Filter products based on current filters
function filterProducts() {
    const selectedCategories = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
        .map(checkbox => checkbox.value);
    
    const priceRange = document.querySelector('input[name="price"]:checked').value;
    const minRating = parseFloat(ratingFilter.value);
    const searchTerm = searchInput.value.toLowerCase();
    
    const filteredProducts = products.filter(product => {
        // Category filter
        if (!selectedCategories.includes(product.category)) {
            return false;
        }
        
        // Price filter
        if (priceRange !== 'all') {
            const [min, max] = priceRange.split('-').map(Number);
            if (product.price < min || product.price > max) {
                return false;
            }
        }
        
        // Rating filter
        if (product.rating < minRating) {
            return false;
        }
        
        // Search filter
        if (searchTerm && !product.name.toLowerCase().includes(searchTerm)) {
            return false;
        }
        
        return true;
    });
    
    // Sort products
    const sortedProducts = sortProducts(filteredProducts, sortSelect.value);
    
    displayProducts(sortedProducts);
}

// Sort products
function sortProducts(products, sortBy) {
    const sorted = [...products];
    
    switch (sortBy) {
        case 'price-low':
            sorted.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            sorted.sort((a, b) => b.price - a.price);
            break;
        case 'rating':
            sorted.sort((a, b) => b.rating - a.rating);
            break;
        case 'name':
        default:
            sorted.sort((a, b) => a.name.localeCompare(b.name));
            break;
    }
    
    return sorted;
}

// Reset all filters
function resetFilters() {
    // Reset checkboxes
    document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
        checkbox.checked = true;
    });
    
    // Reset radio buttons
    document.querySelector('input[name="price"][value="all"]').checked = true;
    
    // Reset select and search
    ratingFilter.value = '0';
    searchInput.value = '';
    sortSelect.value = 'name';
    
    filterProducts();
}

// Setup event listeners
function setupEventListeners() {
    // Filter events
    document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('change', filterProducts);
    });
    
    document.querySelectorAll('input[name="price"]').forEach(radio => {
        radio.addEventListener('change', filterProducts);
    });
    
    ratingFilter.addEventListener('change', filterProducts);
    searchInput.addEventListener('input', filterProducts);
    sortSelect.addEventListener('change', filterProducts);
    resetButton.addEventListener('click', resetFilters);
}

// Initialize the application
document.addEventListener('DOMContentLoaded', init);