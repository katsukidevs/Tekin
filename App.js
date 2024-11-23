// Array to store items added to the cart
let cart = [];

// Function to display the profile section
function showProfile() {
    document.getElementById('profile').classList.remove('hidden');
    hideSectionsExcept(['profile']);
}

// Function to display different sections
function showSection(sectionId) {
    const sections = ['browse', 'post', 'cart', 'help', 'profile'];
    sections.forEach(section => {
        document.getElementById(section).classList.add('hidden');
    });
    document.getElementById(sectionId).classList.remove('hidden');
}

// Function to hide all sections except the ones passed
function hideSectionsExcept(visibleSections) {
    const sections = ['browse', 'post', 'cart', 'help', 'profile'];
    sections.forEach(section => {
        if (!visibleSections.includes(section)) {
            document.getElementById(section).classList.add('hidden');
        }
    });
}

// Mock items for the browse section
const items = [
    {
        name: "Vintage Denim Jacket",
        category: "Clothing",
        description: "A classic vintage denim jacket, great condition.",
        image: "https://via.placeholder.com/150",
        price: "Free"
    },
    {
        name: "Smartphone - iPhone 12",
        category: "Electronics",
        description: "A lightly used iPhone 12 with minor scratches.",
        image: "https://via.placeholder.com/150",
        price: "Free"
    },
    {
        name: "Wooden Coffee Table",
        category: "Furniture",
        description: "A sturdy, wooden coffee table in excellent shape.",
        image: "https://via.placeholder.com/150",
        price: "Free"
    },
    {
        name: "The Great Gatsby - Hardcover",
        category: "Books",
        description: "A well-preserved hardcover edition of 'The Great Gatsby'.",
        image: "https://via.placeholder.com/150",
        price: "Free"
    }
];

// Function to populate the items on the browse page
function populateItems() {
    const container = document.getElementById('itemsContainer');
    items.forEach((item, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('item');

        itemDiv.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p><strong>Category:</strong> ${item.category}</p>
            <p><strong>Description:</strong> ${item.description}</p>
            <p><strong>Price:</strong> ${item.price}</p>
            <button class="details-button">View Details</button>
            <button class="add-to-cart-button" onclick="addToCart(${index})">Add to Cart</button>
        `;

        container.appendChild(itemDiv);
    });
}

// Function to handle adding items to the cart
function addToCart(itemIndex) {
    const item = items[itemIndex];
    cart.push(item);
    showToast(`${item.name} has been added to your cart!`);
    updateCartDisplay();
}

// Function to show a toast message
function showToast(message) {
    const toast = document.createElement('div');
    toast.classList.add('toast');
    toast.textContent = message;

    document.body.appendChild(toast);

    // Remove the toast after 3 seconds
    setTimeout(() => {
        toast.remove();
    }, 3000);
}

// Function to update the cart display
function updateCartDisplay() {
    const cartContainer = document.getElementById('cartItems');
    cartContainer.innerHTML = ''; // Clear the cart container

    if (cart.length === 0) {
        cartContainer.innerHTML = '<p>Your cart is empty.</p>';
    } else {
        cart.forEach(item => {
            const cartItemDiv = document.createElement('div');
            cartItemDiv.classList.add('item');
            cartItemDiv.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <h3>${item.name}</h3>
                <p><strong>Category:</strong> ${item.category}</p>
                <p><strong>Price:</strong> ${item.price}</p>
            `;
            cartContainer.appendChild(cartItemDiv);
        });
    }
}

// Function to handle clearing the cart
function clearCart() {
    cart = [];
    showToast("Your cart has been cleared.");
    updateCartDisplay();
}

// Function to handle the logout action (dummy for now)
function logout() {
    showToast("Logged out!");
}

// Function to handle the report submission (dummy for now)
function submitReport() {
    showToast("Your report has been submitted.");
}

// Call the function to populate the items on page load
populateItems();
