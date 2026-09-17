/* =========================
   MOBILE MENU
========================= */

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", function () {

    navMenu.classList.toggle("active");

});


/* =========================
   CLOSE MOBILE MENU
========================= */

const navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("active");

    });

});


/* =========================
   MODEL MODAL
========================= */

const modelButtons =
    document.querySelectorAll(".model-btn");

const modal =
    document.getElementById("modelModal");

const modalTitle =
    document.getElementById("modalTitle");

const closeModal =
    document.getElementById("closeModal");


modelButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const modelName =
            button.getAttribute("data-model");

        modalTitle.textContent = modelName;

        modal.classList.add("active");

    });

});


closeModal.addEventListener("click", function () {

    modal.classList.remove("active");

});


/* Close modal when clicking outside */

modal.addEventListener("click", function (event) {

    if (event.target === modal) {

        modal.classList.remove("active");

    }

});


/* =========================
   CAR CONFIGURATOR
========================= */

const colorOptions =
    document.querySelectorAll(".color-option");

const configCar =
    document.getElementById("configCar");


colorOptions.forEach(function (button) {

    button.addEventListener("click", function () {

        const selectedColor =
            button.getAttribute("data-color");


        if (selectedColor === "midnight") {

            configCar.style.background =
                "#050505";

            configCar.style.color =
                "white";

        }


        if (selectedColor === "silver") {

            configCar.style.background =
                "#999";

            configCar.style.color =
                "black";

        }


        if (selectedColor === "crimson") {

            configCar.style.background =
                "#8b0000";

            configCar.style.color =
                "white";

        }


        if (selectedColor === "electric") {

            configCar.style.background =
                "#444";

            configCar.style.color =
                "white";

        }

    });

});


/* =========================
   CONTACT BUTTON
========================= */

const contactBtn =
    document.getElementById("contactBtn");

contactBtn.addEventListener("click", function () {

    alert(
        "Thank you for your interest in VOLTERRA. Our team will contact you soon."
    );

});


/* =========================
   SCROLL REVEAL
========================= */

const sections =
    document.querySelectorAll(".section");


const observer =
    new IntersectionObserver(

        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";
                    entry.target.style.transform =
                        "translateY(0)";

                }

            });

        },

        {
            threshold: 0.1
        }

    );


sections.forEach(function (section) {

    section.style.opacity = "0";

    section.style.transform =
        "translateY(40px)";

    section.style.transition =
        "opacity 0.8s ease, transform 0.8s ease";

    observer.observe(section);

});