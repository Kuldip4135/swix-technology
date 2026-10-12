const navToggle = document.querySelector("[data-nav-toggle]");
const navigation = document.querySelector("[data-navigation]");
const header = document.querySelector("[data-site-header]");

if (navToggle && navigation) {
  const closeNavigation = () => {
    navToggle.setAttribute("aria-expanded", "false");
    navigation.removeAttribute("data-open");
    document.body.classList.remove("nav-open");
  };

  navToggle.addEventListener("click", () => {
    const isOpen = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!isOpen));
    navigation.toggleAttribute("data-open", !isOpen);
    document.body.classList.toggle("nav-open", !isOpen);
  });

  navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeNavigation);
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeNavigation();
      navToggle.focus();
    }
  });
}

if (header) {
  const updateHeader = () => header.toggleAttribute("data-scrolled", window.scrollY > 20);
  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });
}

const revealItems = document.querySelectorAll(".reveal");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if ("IntersectionObserver" in window && !reduceMotion) {
  revealItems.forEach((item) => item.classList.add("reveal-ready"));
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -8%", threshold: 0.08 }
  );
  revealItems.forEach((item) => observer.observe(item));
}

document.querySelectorAll("[data-current-year]").forEach((item) => {
  item.textContent = new Date().getFullYear();
});

const contactForm = document.querySelector("[data-contact-form]");

if (contactForm) {
  const status = contactForm.querySelector("[data-form-status]");
  const requiredFields = [...contactForm.querySelectorAll("[required]")];

  const errorFor = (field) => contactForm.querySelector(`[data-error-for="${field.id}"]`);

  const clearFieldError = (field) => {
    field.removeAttribute("aria-invalid");
    const error = errorFor(field);
    if (error) error.textContent = "";
  };

  const validateField = (field) => {
    clearFieldError(field);
    let message = "";

    if (field.type === "checkbox" && !field.checked) {
      message = "Please confirm that you understand this is a local prototype.";
    } else if (!field.value.trim()) {
      message = "Please complete this field.";
    } else if (field.type === "email" && !field.validity.valid) {
      message = "Enter a valid email address.";
    }

    if (message) {
      field.setAttribute("aria-invalid", "true");
      const error = errorFor(field);
      if (error) error.textContent = message;
      return false;
    }

    return true;
  };

  requiredFields.forEach((field) => {
    const eventName = field.type === "checkbox" || field.tagName === "SELECT" ? "change" : "input";
    field.addEventListener(eventName, () => clearFieldError(field));
  });

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (status) status.hidden = true;

    const validity = requiredFields.map(validateField);
    const firstInvalid = requiredFields[validity.indexOf(false)];

    if (firstInvalid) {
      firstInvalid.focus();
      return;
    }

    if (status) {
      status.textContent = "Your enquiry looks complete. This local prototype does not send or store your information.";
      status.hidden = false;
      status.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "nearest" });
    }
  });
}
