// Sample product data with categories
const products = [
    {
        id: 1,
        name: "Smartphone",
        price: 299.99,
        image: "https://via.placeholder.com/150",
        category: "electronics"
    },
    {
        id: 2,
        name: "T-Shirt",
        price: 19.99,
        image: "https://via.placeholder.com/150",
        category: "clothing"
    },
    {
        id: 3,
        name: "Laptop",
        price: 899.99,
        image: "https://via.placeholder.com/150",
        category: "electronics"
    },
    {
        id: 4,
        name: "Sneakers",
        price: 49.99,
        image: "https://via.placeholder.com/150",
        category: "clothing"
    },
    {
        id: 5,
        name: "Watch",
        price: 99.99,
        image: "https://via.placeholder.com/150",
        category: "accessories"
    },
    {
        id: 6,
        name: "Headphones",
        price: 89.99,
        image: "https://via.placeholder.com/150",
        category: "electronics"
    }
];

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

// Call the function to display all products on page load
displayProducts(products);

// Function to display featured products (first 3 products as an example)
function displayFeaturedProducts() {
    const container = document.getElementById('featured-container');
    const featuredProducts = products.slice(0, 3); // Just an example, take first 3 products
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

// Call the function to display featured products
displayFeaturedProducts();
