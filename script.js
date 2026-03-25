// Complete script.js file with full e-commerce functionality

// Product database with 12 sports balls
const products = [
    { id: 1, name: 'Football', price: 19.99, image: 'football.png' },
    { id: 2, name: 'Basketball', price: 24.99, image: 'basketball.png' },
    { id: 3, name: 'Tennis Ball', price: 9.99, image: 'tennisball.png' },
    { id: 4, name: 'Baseball', price: 14.99, image: 'baseball.png' },
    { id: 5, name: 'Volleyball', price: 22.99, image: 'volleyball.png' },
    { id: 6, name: 'Cricket Ball', price: 18.99, image: 'cricketball.png' },
    { id: 7, name: 'Golf Ball', price: 12.99, image: 'golfball.png' },
    { id: 8, name: 'Rugby Ball', price: 29.99, image: 'rugbyball.png' },
    { id: 9, name: 'Table Tennis Ball', price: 5.99, image: 'tabletennisball.png' },
    { id: 10, name: 'Hockey Puck', price: 7.99, image: 'hockeypuck.png' },
    { id: 11, name: 'Badminton Shuttlecock', price: 4.99, image: 'shuttlecock.png' },
    { id: 12, name: 'Futsal Ball', price: 23.99, image: 'futsalball.png' }
];

// Shopping cart management
let cart = [];

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const cartItem = cart.find(item => item.id === productId);
    if (cartItem) {
        cartItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
}

function updateQuantity(productId, quantity) {
    const cartItem = cart.find(item => item.id === productId);
    if (cartItem) {
        cartItem.quantity = quantity;
        if (cartItem.quantity <= 0) {
            removeFromCart(productId);
        }
    }
}

// Intersection Observer for scroll animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
});

document.querySelectorAll('.animated').forEach(section => observer.observe(section));

// Form handlers for checkout/contact/auth
function handleFormSubmission(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    console.log('Form data submitted:', Object.fromEntries(data.entries()));
}

document.querySelector('#checkoutForm').addEventListener('submit', handleFormSubmission);

document.querySelector('#contactForm').addEventListener('submit', handleFormSubmission);

// Local storage persistence
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function loadCart() {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        cart = JSON.parse(storedCart);
    }
}

loadCart();

// IBAN payment processing (dummy implementation)
function processPayment(iban) {
    console.log(`Processing payment with IBAN: ${iban}`);
    // Add real payment processing logic here
}

// Notification system
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerText = message;
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 3000);
}

// Navbar scroll effects
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('scrolled', window.scrollY > 50);
});
