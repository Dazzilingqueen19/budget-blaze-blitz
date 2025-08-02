document.addEventListener("DOMContentLoaded", function () {
    // ✅ Event Redirection Logic
    const eventPages = {
        "birthday": "/birthday/",
        "engagement": "/engagement/",
        "farewell": "/farewell/",
        "friends_reunion": "/friends/"
    };

    document.querySelectorAll(".event-box").forEach(box => {
        box.addEventListener("click", function () {
            let eventID = this.id;
            if (eventPages[eventID]) {
                window.location.href = eventPages[eventID];
            }
        });
    });

    // ✅ Fade-in Animation on Page Load
    const heroText = document.querySelector(".glowing-text");
    if (heroText) {
        heroText.style.opacity = "0";
        heroText.style.transform = "scale(0.9)";
        heroText.style.transition = "opacity 1s ease-in-out, transform 1s ease-in-out";

        setTimeout(() => {
            heroText.style.opacity = "1";
            heroText.style.transform = "scale(1)";
        }, 500);
    }

    // ✅ Search Function (Fetching Data from Django API)
    document.getElementById("search-btn")?.addEventListener("click", function () {
        let city = document.getElementById("city")?.value;
        let vendor = document.getElementById("vendor")?.value;
        let occasion = document.getElementById("occasion")?.value;

        if (city && vendor && occasion) {
            fetch(`/search_events/?city=${city}&vendor=${vendor}&occasion=${occasion}`)
                .then(response => response.json())
                .then(data => alert(data.message))
                .catch(error => console.error("Search failed:", error));
        } else {
            alert("Please select all fields.");
        }
    });

    // ✅ Scrolling Wrapper Logic
    const scrollWrapper = document.querySelector(".scrolling-wrapper");
    if (scrollWrapper) {
        let imagesCount = scrollWrapper.children.length;
        let index = 0;
        let interval;

        function scrollImages() {
            index = (index + 1) % imagesCount;
            scrollWrapper.style.transform = `translateX(-${index * 100}%)`;
        }

        function startAutoScroll() {
            interval = setInterval(scrollImages, 3000);
        }

        startAutoScroll();

        scrollWrapper.addEventListener("mouseenter", () => clearInterval(interval));
        scrollWrapper.addEventListener("mouseleave", startAutoScroll);
    }

    // ✅ Login Page Redirection
    document.querySelector("a[href='auth.html']")?.addEventListener("click", function (event) {
        event.preventDefault();
        window.location.href = "auth.html";
    });

    // ✅ Image Modal Script
    function openModal(img) {
        let modal = document.getElementById("imageModal");
        let modalImg = document.getElementById("modalImg");

        if (modal && modalImg) {
            modal.style.display = "block";
            modalImg.src = img.src;
        }
    }

    function closeModal() {
        let modal = document.getElementById("imageModal");
        if (modal) {
            modal.style.display = "none";
        }
    }

    // ✅ Close Modal when Clicking Outside Image
    window.onclick = function (event) {
        let modal = document.getElementById("imageModal");
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };

    // ✅ Assign openModal function to images
    document.querySelectorAll(".scrolling-wrapper img").forEach(img => {
        img.addEventListener("click", function () {
            openModal(this);
        });
    });

    // ✅ Assign closeModal function to close button
    document.querySelector(".close")?.addEventListener("click", closeModal);
});

  function openProfileSidebar() {
    document.getElementById("profileSidebar").classList.add("show");
  }

  function closeProfileSidebar() {
    document.getElementById("profileSidebar").classList.remove("show");
  }


  function openProfileSidebar() {
    document.getElementById("profileSidebar").classList.add("show");
  }

  function closeProfileSidebar() {
    document.getElementById("profileSidebar").classList.remove("show");
  }

  // Bootstrap tooltip enable
  document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(el => new bootstrap.Tooltip(el));

//home
function searchEvents() {
    var occasion = document.getElementById('occasion').value;

    if (occasion === 'birthday') {
        window.location.href = '/backend/Birthday_Party/';
    } else if (occasion === 'wedding') {
        window.location.href = '/backend/engagement/';
    } else if (occasion === 'farewell') {
        window.location.href = '/backend/farewell/';
    } else if (occasion === 'friends_reunion') {
        window.location.href = '/backend/friends/';
    } else {
        alert('Please select a valid occasion.');
    }
}