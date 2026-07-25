/* ==========================================================
   AURA Fitness & Wellness Club — site script
   Handles: scroll-reveal animations, mobile menu, waitlist form
   ========================================================== */

document.addEventListener("DOMContentLoaded", () => {
  initRevealAnimations();
  initMobileMenu();
  initWaitlistForm();
});

/* ---------- Scroll-reveal animations ---------- */
function initRevealAnimations() {
  const revealEls = document.querySelectorAll(".reveal");
  if (!revealEls.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealEls.forEach((el) => observer.observe(el));
}

/* ---------- Mobile nav menu ---------- */
function initMobileMenu() {
  const burger = document.querySelector(".burger");
  const mobileNav = document.querySelector(".mobile-nav");
  if (!burger || !mobileNav) return;

  const closeMenu = () => {
    mobileNav.classList.remove("open");
    burger.textContent = "☰";
    burger.setAttribute("aria-expanded", "false");
  };

  burger.addEventListener("click", () => {
    const isOpen = mobileNav.classList.toggle("open");
    burger.textContent = isOpen ? "✕" : "☰";
    burger.setAttribute("aria-expanded", String(isOpen));
  });

  // Close the menu whenever a link inside it is tapped
  mobileNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });
}

/* ---------- Waitlist form ---------- */
function initWaitlistForm() {
  const form = document.querySelector(".waitlist-form");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    // TODO: wire this up to your email/CRM provider of choice
    // (Mailchimp, Beehiiv, Google Sheets via a small API, etc.)
    const button = form.querySelector("button");
    if (button) button.textContent = "You're in ✓";
    form.querySelector("input").disabled = true;
  });
}
