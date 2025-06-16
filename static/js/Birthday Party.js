document.addEventListener("DOMContentLoaded", function () {
    loadChecklist();
    fetchVendors(); // ✅ Load vendors from a local array
});

// ✅ Glow Effect for Buttons or Elements
function glowEffect(element) {
    element.style.boxShadow = "0px 0px 15px 5px #FFD700";
}

function removeGlow(element) {
    element.style.boxShadow = "none";
}

// ✅ AI-Based Suggestion Feature
function askAI() {
    let query = document.getElementById("aiQuery").value.toLowerCase();
    let response = "Sorry, I don't understand that request.";

    if (query.includes("theme")) {
        response = "Based on your query, the best color theme would be Gold & Blue for a premium look.";
    } else if (query.includes("food")) {
        response = "A great birthday menu includes cakes, snacks, and beverages tailored to your budget.";
    } else if (query.includes("venue")) {
        response = "Outdoor venues with fairy lights create a magical experience for birthday celebrations.";
    }

    document.getElementById("aiResponse").innerText = response;
}

// ✅ Toggle Checklist Panel
function toggleChecklist() {
    let panel = document.getElementById("checklistPanel");
    if (panel.classList.contains("show")) {
        panel.classList.remove("show");
    } else {
        panel.classList.add("show");
    }
}

function closeChecklist() {
    document.getElementById("checklistPanel").classList.remove("show");
}

// ✅ Load Checklist from Local Storage
function loadChecklist() {
    let checklist = JSON.parse(localStorage.getItem("checklist")) || [];
    let checklistContainer = document.getElementById("selectedItems");
    checklistContainer.innerHTML = "";
    
    checklist.forEach(item => {
        let li = document.createElement("li");
        li.textContent = item;
        checklistContainer.appendChild(li);
    });
}

// ✅ Add Item to Checklist
function addToChecklist(item) {
    let checklist = JSON.parse(localStorage.getItem("checklist")) || [];
    
    if (!checklist.includes(item)) { // Prevent duplicates
        checklist.push(item);
        localStorage.setItem("checklist", JSON.stringify(checklist));
        loadChecklist();
    }
}

// ✅ Fetch Vendors (Using Local Data Instead of Django API)
function fetchVendors() {
    let vendors = [
        {
            name: "John's Decorations",
            experience: 5,
            location: "New York",
            achievements: "Award-winning party decorator",
            event_pictures: "vendor1.jpg"
        },
        {
            name: "Delicious Bites Catering",
            experience: 8,
            location: "Los Angeles",
            achievements: "Best birthday catering 2023",
            event_pictures: "vendor2.jpg"
        }
    ];

    let vendorList = document.getElementById("vendorList");
    if (!vendorList) return; // Prevent errors if element is missing

    vendorList.innerHTML = ""; // Clear previous vendors
    vendors.forEach(vendor => {
        vendorList.innerHTML += `
            <div class="vendor-card">
                <h3>${vendor.name}</h3>
                <p>Experience: ${vendor.experience} years</p>
                <p>Location: ${vendor.location}</p>
                <p>Achievements: ${vendor.achievements}</p>
                <img src="${vendor.event_pictures}" alt="Vendor Image">
            </div>`;
    });
}
