// Glow Effect
function glowEffect(element) {
    element.style.boxShadow = "0px 0px 15px rgba(255, 255, 255, 0.8)";
}

function removeGlow(element) {
    element.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.3)";
}

// AI Chatbot
function askAI() {
    let query = document.getElementById("aiQuery").value.toLowerCase();
    let response = document.getElementById("aiResponse");

    if (!query) {
        response.innerHTML = "⚠️ Please enter a question!";
        return;
    }

    let answers = {
        "decorations": "We offer floral, rustic, and modern decoration themes! 🎉",
        "food": "Choose from multi-cuisine catering options. 🍽️",
        "venue": "Find indoor, outdoor, and luxury venues. 🏛️"
    };

    response.innerHTML = answers[query] || "Sorry, I couldn't find an answer. 🤖";
}

// Toggle Checklist
function toggleChecklist() {
    let panel = document.getElementById("checklistPanel");
    panel.classList.toggle("active");
}

// Close Checklist
function closeChecklist() {
    document.getElementById("checklistPanel").classList.remove("active");
}
