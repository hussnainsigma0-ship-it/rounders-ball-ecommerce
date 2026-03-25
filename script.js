// script.js

// Product Catalog
const products = [
    { id: 1, name: 'Product 1', price: 29.99 },
    { id: 2, name: 'Product 2', price: 39.99 },
    { id: 3, name: 'Product 3', price: 49.99 }
];

// Shopping Cart
let cart = [];

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        console.log(`${product.name} added to cart.`);
    }
}

function viewCart() {
    console.log('Shopping Cart:', cart);
}

// Scroll Animations
window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(element => {
        if (scrolled > element.offsetTop - window.innerHeight + 100) {
            element.classList.add('visible');
        }
    });
});

// Form Handling
document.getElementById('contactForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    console.log('Form Submitted:', Object.fromEntries(formData));
});

// IBAN Payment Handling
function validateIBAN(iban) {
    // Simple IBAN validation logic here
    return iban.length >= 15 && iban.length <= 34; // Example length check
}

function processPayment(iban) {
    if (validateIBAN(iban)) {
        console.log('Processing payment with IBAN:', iban);
    } else {
        console.log('Invalid IBAN!');
    }
}