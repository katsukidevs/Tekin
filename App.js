// Initialize dummy data
let items = [];
let myListings = [];

// Function to show/hide sections
function showSection(section) {
    document.querySelectorAll('.container').forEach(container => {
        container.classList.add('hidden');
    });
    document.getElementById(section).classList.remove('hidden');
}

// Function to render items in "Browse Items"
function renderItems() {
    const container = document.getElementById('itemsContainer');
    container.innerHTML = '';
    items.forEach((item, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'item';
        itemDiv.innerHTML = `
            <h4>${item.name}</h4>
            <p><strong>Category:</strong> ${item.category}</p>
            <p>${item.description}</p>
            <img src="${item.image}" alt="${item.name}" style="max-width: 100%;"><br>
            <button onclick="requestItem(${index})">Request</button>
        `;
        container.appendChild(itemDiv);
    });
}

// Function to add a new item
document.getElementById('postForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('itemName').value;
    const category = document.getElementById('itemCategory').value;
    const description = document.getElementById('itemDescription').value;
    const image = document.getElementById('itemImage').value;

    const newItem = { name, category, description, image };
    items.push(newItem);
    myListings.push(newItem);

    alert('Item posted successfully!');
    renderItems();
    showSection('myListings');
});

// Function to render user's listings
function renderMyListings() {
    const container = document.getElementById('myItemsContainer');
    container.innerHTML = '';
    myListings.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'item';
        itemDiv.innerHTML = `
            <h4>${item.name}</h4>
            <p><strong>Category:</strong> ${item.category}</p>
            <p>${item.description}</p>
            <img src="${item.image}" alt="${item.name}" style="max-width: 100%;"><br>
        `;
        container.appendChild(itemDiv);
    });
}

// Request Item Function
function requestItem(index) {
    alert(`You've requested: ${items[index].name}. The giver will be notified!`);
}

// Submit Report
function submitReport() {
    const issue = document.getElementById('reportIssue').value;
    if (!issue.trim()) {
        alert('Please describe the issue.');
        return;
    }
    alert('Thank you for your report. We will review it shortly.');
}

// Initial Render
renderItems();
renderMyListings();
