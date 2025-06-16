// Glow Effect
function glowEffect(element) {
    element.style.boxShadow = "0px 0px 15px rgba(255, 255, 255, 0.8)";
}

function removeGlow(element) {
    element.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.3)";
}

// Create Pink Hearts Animation
function createHeart() {
    const container = document.querySelector('.hearts-container');
    let heart = document.createElement('div');
    heart.classList.add('heart');

    heart.style.left = `${Math.random() * 90 + 5}%`;
    heart.style.animationDuration = `${4 + Math.random() * 3}s`;

    container.appendChild(heart);

    heart.addEventListener('animationend', () => {
        heart.remove();
    });
}

setInterval(createHeart, 1500);
// Toggle Sidebar Checklist
function toggleChecklist() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("show");
}

// Glow Effect on Hover
function glowEffect(element) {
    element.style.boxShadow = "0px 0px 15px rgba(255, 255, 255, 0.8)";
}

function removeGlow(element) {
    element.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.3)";
}
