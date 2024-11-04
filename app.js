// Initialize products array
let products = [];

// Function to load products from JSON
async function loadProducts() {
    const response = await fetch('products.json');
    products = await response.json();
    displayProducts(products);
    displayFeaturedProducts();
}

// Function to display products
function displayProducts(filteredProducts) {
    const container = document.getElementById('product-container');
    container.innerHTML = ''; // Clear existing products

    filteredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Price: $${product.price.toFixed(2)}</p>
            <button>Add to Cart</button>
        `;
        container.appendChild(productCard);
    });
}

// Function to filter products
function filterProducts() {
    const filterValue = document.getElementById('category-filter').value;
    const filteredProducts = filterValue === 'all'
        ? products
        : products.filter(product => product.category === filterValue);
    displayProducts(filteredProducts);
}

// Function to display featured products (first 3 products as an example)
function displayFeaturedProducts() {
    const container = document.getElementById('featured-container');
    const featuredProducts = products.slice(0, 3); // Just an example, take first 3 products
    container.innerHTML = ''; // Clear existing featured products
    featuredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Price: $${product.price.toFixed(2)}</p>
            <button>Add to Cart</button>
        `;
        container.appendChild(productCard);
    });
}

// Call loadProducts on page load
window.onload = loadProducts;
