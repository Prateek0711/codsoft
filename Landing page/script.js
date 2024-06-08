let currentSlide = 0;
const slides = document.querySelectorAll('.mySlides');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

// Initialize the slideshow
showSlide(currentSlide);

// Automatically go to the next slide every 3 seconds
setInterval(nextSlide, 2000);

// Function to show and hide sections
function showSection(sectionId) {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        if (section.id === sectionId) {
            section.classList.remove('hidden');
        } else {
            section.classList.add('hidden');
        }
    });
}

// Function to show the modal with item details
function showRate(itemName, itemRate) {
    document.getElementById('itemName').textContent = itemName;
    document.getElementById('itemRate').textContent = itemRate;
    document.getElementById('modal').style.display = 'block';
}

// Function to close the modal
function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

// Function to add an item to the cart
function addToCart(itemName) {
    alert(itemName + " has been added to your cart!");
}

// Function to search the menu
function searchMenu() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        const itemName = item.querySelector('h3').textContent.toLowerCase();
        if (itemName.includes(input)) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });
}
