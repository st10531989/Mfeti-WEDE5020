
/* =====================================
   MFETI ELECTRICAL SOLUTIONS
   PART 3 - JAVASCRIPT FUNCTIONALITY
===================================== */

document.addEventListener("DOMContentLoaded", function () {

    // 1. Dynamic copyright year
    const year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }

    // 2. Service search functionality
    const searchInput = document.getElementById("serviceSearch");
    const serviceCards = document.querySelectorAll(".service-card");

    if (searchInput) {
        searchInput.addEventListener("input", function () {

            const searchValue = searchInput.value.toLowerCase();

            serviceCards.forEach(function (card) {
                const serviceName = card.textContent.toLowerCase();

                card.style.display =
                    serviceName.includes(searchValue) ? "" : "none";
            });

        });
    }

    // 3. Interactive FAQ accordion
    const accordionButtons =
        document.querySelectorAll(".accordion-button");

    accordionButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const panel = button.nextElementSibling;
            const isOpen =
                button.getAttribute("aria-expanded") === "true";

            button.setAttribute("aria-expanded", !isOpen);

            if (panel) {
                panel.hidden = isOpen;
            }

        });

    });

    // 4. Gallery lightbox
    const galleryImages =
        document.querySelectorAll(".gallery-image");

    galleryImages.forEach(function (image) {

        image.addEventListener("click", function () {

            const overlay = document.createElement("div");
            overlay.className = "lightbox";

            const largeImage = document.createElement("img");
            largeImage.src = image.src;
            largeImage.alt = image.alt;

            const closeButton = document.createElement("button");
            closeButton.textContent = "Close";
            closeButton.type = "button";
            closeButton.setAttribute("aria-label", "Close enlarged image");

            overlay.appendChild(closeButton);
            overlay.appendChild(largeImage);
            document.body.appendChild(overlay);

            closeButton.addEventListener("click", function () {
                overlay.remove();
            });

            overlay.addEventListener("click", function (event) {
                if (event.target === overlay) {
                    overlay.remove();
                }
            });

            document.addEventListener("keydown", function closeOnEscape(event) {
                if (event.key === "Escape") {
                    overlay.remove();
                    document.removeEventListener(
                        "keydown", closeOnEscape
                    );
                }
            });

        });

    });

    // 5. Form validation
    const forms = document.querySelectorAll(".validate-form");

    forms.forEach(function (form) {

        form.addEventListener("submit", function (event) {

            if (!form.checkValidity()) {
                event.preventDefault();
                form.reportValidity();
                return;
            }

            const message = form.querySelector(".form-message");

            if (message) {
                message.textContent =
                    "Your form is valid. Submitting your information...";
            }

        });

    });

    console.log(
        "Mfeti Electrical Solutions website loaded successfully!"
    );

});

