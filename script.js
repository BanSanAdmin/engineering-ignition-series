const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#site-navigation");

if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    const isExpanded = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isExpanded));
    menuButton.setAttribute("aria-label", isExpanded ? "Open navigation" : "Close navigation");
    navigation.classList.toggle("is-open", !isExpanded);
  });

  navigation.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Open navigation");
      navigation.classList.remove("is-open");
    }
  });
}

const copyrightYear = document.querySelector("#copyright-year");
if (copyrightYear) {
  copyrightYear.textContent = String(new Date().getFullYear());
}

const bookLightbox = document.querySelector("#book-lightbox");
const lightboxImage = bookLightbox?.querySelector(".book-lightbox-image");
const lightboxClose = bookLightbox?.querySelector(".book-lightbox-close");
const bookCoverButtons = document.querySelectorAll(".book-cover-zoom");
let lightboxTrigger = null;

if (bookLightbox && lightboxImage && lightboxClose) {
  const closeBookLightbox = () => {
    if (bookLightbox.hidden) return;
    bookLightbox.hidden = true;
    document.body.classList.remove("book-lightbox-open");
    lightboxImage.removeAttribute("src");
    lightboxTrigger?.focus();
    lightboxTrigger = null;
  };

  bookCoverButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const image = button.querySelector("img");
      if (!image) return;
      lightboxTrigger = button;
      lightboxImage.src = image.currentSrc || image.src;
      lightboxImage.alt = image.alt;
      bookLightbox.hidden = false;
      document.body.classList.add("book-lightbox-open");
      lightboxClose.focus();
    });
  });

  lightboxClose.addEventListener("click", closeBookLightbox);
  bookLightbox.addEventListener("click", (event) => {
    if (event.target === bookLightbox) closeBookLightbox();
  });

  document.addEventListener("keydown", (event) => {
    if (bookLightbox.hidden) return;
    if (event.key === "Escape") {
      event.preventDefault();
      closeBookLightbox();
    } else if (event.key === "Tab") {
      event.preventDefault();
      lightboxClose.focus();
    }
  });
}
