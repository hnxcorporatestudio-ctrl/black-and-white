/* =========================================
   BLACK & WHITE
   JAVASCRIPT COMPLET
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =========================================
       MENU MOBILE
    ========================================= */

    const hamburgerBtn = document.getElementById("hamburger-btn");
    const mobileMenu = document.getElementById("mobile-menu");

    if (hamburgerBtn && mobileMenu) {

        hamburgerBtn.addEventListener("click", () => {
            mobileMenu.classList.toggle("active");
            hamburgerBtn.classList.toggle("active");
        });

        document.querySelectorAll("#mobile-menu a").forEach(link => {

            link.addEventListener("click", () => {
                mobileMenu.classList.remove("active");
                hamburgerBtn.classList.remove("active");
            });

        });

    }

    /* =========================================
       FILTRAGE MENU
    ========================================= */

    const filterButtons = document.querySelectorAll(".menu-filters button");
    const menuCards = document.querySelectorAll(".menu-card");

    if (filterButtons.length > 0) {

        filterButtons.forEach(button => {

            button.addEventListener("click", () => {

                filterButtons.forEach(btn =>
                    btn.classList.remove("active")
                );

                button.classList.add("active");

                const filter = button.dataset.filter;

                menuCards.forEach(card => {

                    if (
                        filter === "all" ||
                        card.classList.contains(filter)
                    ) {

                        card.style.display = "block";

                    } else {

                        card.style.display = "none";

                    }

                });

            });

        });

    }

    /* =========================================
       LIGHTBOX GALERIE
    ========================================= */

    const galleryImages = document.querySelectorAll(
        ".gallery-grid img, .bar-gallery img"
    );

    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightbox-image");
    const closeLightbox = document.getElementById("close-lightbox");

    if (
        galleryImages.length &&
        lightbox &&
        lightboxImage
    ) {

        galleryImages.forEach(image => {

            image.addEventListener("click", () => {

                lightbox.style.display = "flex";
                lightboxImage.src = image.src;

            });

        });

        closeLightbox.addEventListener("click", () => {
            lightbox.style.display = "none";
        });

        lightbox.addEventListener("click", e => {

            if (e.target === lightbox) {
                lightbox.style.display = "none";
            }

        });

    }

    /* =========================================
       SCROLL FLUIDE
    ========================================= */

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            const target = document.querySelector(
                this.getAttribute("href")
            );

            if (!target) return;

            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });

    /* =========================================
       HEADER AU SCROLL
    ========================================= */

    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {

        if (!header) return;

        if (window.scrollY > 80) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    });

    /* =========================================
       ANIMATION APPARITION
    ========================================= */

    const animatedElements = document.querySelectorAll(
        `
        section,
        .menu-card,
        .testimonial,
        article,
        .gallery-grid img,
        .bar-gallery img
        `
    );

    const observer = new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        },

        {
            threshold: 0.15
        }

    );

    animatedElements.forEach(element => {

        element.classList.add("hidden");
        observer.observe(element);

    });

    /* =========================================
       BOUTON WHATSAPP
    ========================================= */

    const whatsappButton =
        document.getElementById("whatsapp-button");

    if (whatsappButton) {

        whatsappButton.href =
            "https://wa.me/22505926080";

        whatsappButton.target = "_blank";

    }

    /* =========================================
       ANNÉE AUTOMATIQUE FOOTER
    ========================================= */

    const footerParagraphs =
        document.querySelectorAll("footer p");

    footerParagraphs.forEach(p => {

        if (p.textContent.includes("©")) {

            p.innerHTML =
                `© ${new Date().getFullYear()} Tous droits réservés`;

        }

    });

});

document.addEventListener("DOMContentLoaded", () => {

    const promo = document.querySelector(".promo-studio");

    if (!promo) return;

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });

    }, { threshold: 0.2 });

    observer.observe(promo);

});