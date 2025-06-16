document.addEventListener("DOMContentLoaded", function () {
    fetch("/get_decorations/")  // Django API Endpoint
        .then(response => response.json())
        .then(data => {
            const vendorContainer = document.getElementById("vendor-container");

            if (data.length === 0) {
                vendorContainer.innerHTML = "<p>No decoration vendors available.</p>";
            } else {
                data.forEach(vendor => {
                    const vendorCard = document.createElement("div");
                    vendorCard.classList.add("vendor-card");
                    vendorCard.innerHTML = `
                        <img src="${vendor.event_pictures}" alt="${vendor.name}" class="vendor-image">
                        <h3>${vendor.name}</h3>
                        <p><strong>Experience:</strong> ${vendor.experience} years</p>
                        <p><strong>Achievements:</strong> ${vendor.achievements}</p>
                        <p><strong>Location:</strong> ${vendor.location}</p>
                        <p><strong>Email:</strong> <a href="mailto:${vendor.email}">${vendor.email}</a></p>
                        <button onclick="bookVendor('${vendor.name}')">Book Now</button>
                    `;
                    vendorContainer.appendChild(vendorCard);
                });
            }
        })
        .catch(error => console.error("Error loading vendors:", error));
});

// ✅ Function to Handle Vendor Booking
function bookVendor(vendorName) {
    fetch("/book_vendor/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-CSRFToken": getCSRFToken()  // Include CSRF token for security
        },
        body: JSON.stringify({ vendor_name: vendorName })
    })
    .then(response => response.json())
    .then(data => alert(data.message))
    .catch(error => console.error("Booking failed:", error));
}

// ✅ Function to Get CSRF Token (Required for Django POST requests)
function getCSRFToken() {
    return document.cookie.split('; ').find(row => row.startsWith('csrftoken='))?.split('=')[1];
}
