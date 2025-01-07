// Drop down button 
const dropdownButton = document.getElementById('dropdownButton');
        const dropdownMenu = document.getElementById('dropdownMenu');

        dropdownButton.addEventListener('click', () => {
            dropdownMenu.classList.toggle('hidden');
        });

        // Close dropdown if clicked outside
        window.addEventListener('click', (event) => {
            if (!dropdownButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
                dropdownMenu.classList.add('hidden');
            }
        });
// Select all add buttons
const addButtons = document.querySelectorAll('.addButton');

addButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const image = button.querySelector('img'); 
        const infoAdd = button.closest('.info').querySelector('.info-add'); 
        // Close all other content and reset their images
        document.querySelectorAll('.info-add').forEach((content) => {
            if (content !== infoAdd) {
                content.classList.add('hidden'); // Hide other hidden content
            }
        });

        document.querySelectorAll('.addButton img').forEach((img) => {
            if (img !== image) {
                img.src = './imgs/add.png'; // Reset other images to add.png
            }
        });

        // Toggle the current content and image
        if (infoAdd.classList.contains('hidden')) {
            infoAdd.classList.remove('hidden'); // Show current content
            image.src = './imgs/close.png'; // Change to close.png
        } else {
            infoAdd.classList.add('hidden'); // Hide current content
            image.src = './imgs/add.png'; // Change back to add.png
        }
    });
});

