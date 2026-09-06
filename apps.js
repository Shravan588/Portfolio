// 1. Find the button and the body tag in the HTML
const toggleBtn = document.getElementById('theme-toggle');
const body = document.body;

// 2. Listen for a user clicking the button
toggleBtn.addEventListener('click', function() {
    
    // 3. Toggle (add/remove) the 'dark-mode' class on the body
    body.classList.toggle('dark-mode');
    
    // 4. Update the button text depending on the current mode
    if (body.classList.contains('dark-mode')) {
        toggleBtn.textContent = '☀️ Light Mode';
    } else {
        toggleBtn.textContent = '🌙 Dark Mode';
    }
});