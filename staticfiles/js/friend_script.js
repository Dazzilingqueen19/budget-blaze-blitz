// Toggle sidebar checklist
document.getElementById("checklistToggle").addEventListener("click", function () {
    document.getElementById("sidebar").classList.toggle("show");
});

// Generate floating balloons randomly
function createBalloon() {
    const balloon = document.createElement("div");
    balloon.classList.add("balloon");
    document.body.appendChild(balloon);

    // Random position
    balloon.style.left = Math.random() * 100 + "vw";
    balloon.style.backgroundColor = ["red", "blue", "green", "yellow", "purple"][Math.floor(Math.random() * 5)];

    // Remove balloon after animation
    setTimeout(() => {
        balloon.remove();
    }, 6000);
}

// Create new balloons every second
setInterval(createBalloon, 1000);
