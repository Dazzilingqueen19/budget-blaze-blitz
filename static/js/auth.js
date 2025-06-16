// ✅ Function to Show Specific Form
function showForm(formId) {
    document.querySelectorAll('.auth-form').forEach(form => form.style.display = 'none');
    document.getElementById(formId).style.display = 'block';
}

// ✅ Function to Register Vendor (Uploads Image)
function registerVendor(event) {
    event.preventDefault();  // Prevents page reload

    let formData = new FormData(); 

    formData.append("name", document.getElementById("vendor_name").value);
    formData.append("email", document.getElementById("vendor_email").value);
    formData.append("password", document.getElementById("vendor_password").value);
    formData.append("experience", document.getElementById("vendor_experience").value);
    formData.append("achievements", document.getElementById("vendor_achievements").value);
    formData.append("location", document.getElementById("vendor_location").value);

    let fileInput = document.getElementById("vendor_pictures");
    if (fileInput.files.length > 0) {
        formData.append("event_pictures", fileInput.files[0]);
    }

    fetch("http://127.0.0.1:5000/register_vendor", {  // Flask API Endpoint
        method: "POST",
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
        if (data.message === "Vendor Registered Successfully") {
            showForm("vendor-login");  
        }
    })
    .catch(error => console.error("Error:", error));
}

// ✅ Function to Register Customer
function registerCustomer(event) {
    event.preventDefault();  // Prevents page reload

    let customerData = {
        name: document.getElementById("customer_name").value,
        email: document.getElementById("customer_email").value,
        password: document.getElementById("customer_password").value
    };

    fetch("http://127.0.0.1:5000/register_customer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(customerData)
    })
    .then(response => response.json())
    .then(data => alert(data.message))
    .catch(error => console.error("Error:", error));
}

// ✅ Function to Load Decoration Vendors
function loadDecorations() {
    fetch("http://127.0.0.1:5000/get_decorations")
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById("decorations-container");
            container.innerHTML = "";
            data.forEach(vendor => {
                const vendorCard = document.createElement("div");
                vendorCard.classList.add("vendor-card");
                vendorCard.innerHTML = `
                    <img src="http://127.0.0.1:5000/uploads/${vendor.event_pictures}" alt="${vendor.name}" class="vendor-image">
                    <h3>${vendor.name}</h3>
                    <p><strong>Experience:</strong> ${vendor.experience} years</p>
                    <p><strong>Achievements:</strong> ${vendor.achievements}</p>
                    <p><strong>Location:</strong> ${vendor.location}</p>
                    <button onclick="alert('You booked ${vendor.name}')">Book Now</button>
                `;
                container.appendChild(vendorCard);
            });
        })
        .catch(error => console.error("Error loading decorations:", error));
}

// ✅ Attach Event Listeners to Forms
document.getElementById("customer-register-form").addEventListener("submit", registerCustomer);
document.getElementById("vendor-register-form").addEventListener("submit", registerVendor);

// ✅ Show Customer Register Form by Default
showForm('customer-register');
