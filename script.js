const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");
window.dataLayer = window.dataLayer || [];

function trackEvent(eventName, payload = {}) {
  window.dataLayer.push({
    event: eventName,
    timestamp: new Date().toISOString(),
    ...payload,
  });
}

function animateCounters() {
  const counters = document.querySelectorAll(".counter[data-target]");
  if (!counters.length) return;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  counters.forEach((counter) => {
    const target = Number(counter.getAttribute("data-target")) || 0;
    const suffix = counter.getAttribute("data-suffix") || "";
    if (reduceMotion) {
      counter.textContent = `${target}${suffix}`;
      return;
    }

    const durationMs = 1400;
    const start = performance.now();

    function step(now) {
      const progress = Math.min((now - start) / durationMs, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = Math.round(target * eased);
      counter.textContent = `${value}${suffix}`;
      if (progress < 1) requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
  });
}

function initReviewSlider() {
  const slider = document.querySelector(".reviews-slider");
  if (!slider) return;

  const slides = Array.from(slider.querySelectorAll(".review-slide"));
  const dots = Array.from(document.querySelectorAll(".review-dot"));
  const prevButton = slider.querySelector(".review-nav.prev");
  const nextButton = slider.querySelector(".review-nav.next");
  if (!slides.length) return;

  let activeIndex = slides.findIndex((slide) => slide.classList.contains("is-active"));
  if (activeIndex < 0) activeIndex = 0;
  let timerId;

  function render(index) {
    slides.forEach((slide, slideIndex) => {
      slide.classList.toggle("is-active", slideIndex === index);
    });
    dots.forEach((dot, dotIndex) => {
      dot.classList.toggle("is-active", dotIndex === index);
    });
    activeIndex = index;
  }

  function startAutoplay() {
    stopAutoplay();
    timerId = window.setInterval(() => {
      const nextIndex = (activeIndex + 1) % slides.length;
      render(nextIndex);
    }, 3000);
  }

  function stopAutoplay() {
    if (timerId) {
      window.clearInterval(timerId);
      timerId = undefined;
    }
  }

  function goTo(index) {
    render(index);
    startAutoplay();
  }

  prevButton?.addEventListener("click", () => {
    const nextIndex = (activeIndex - 1 + slides.length) % slides.length;
    goTo(nextIndex);
  });

  nextButton?.addEventListener("click", () => {
    const nextIndex = (activeIndex + 1) % slides.length;
    goTo(nextIndex);
  });

  dots.forEach((dot, dotIndex) => {
    dot.addEventListener("click", () => goTo(dotIndex));
  });

  slider.addEventListener("mouseenter", stopAutoplay);
  slider.addEventListener("mouseleave", startAutoplay);
  slider.addEventListener("focusin", stopAutoplay);
  slider.addEventListener("focusout", startAutoplay);

  startAutoplay();
}

if (menuBtn && nav) {
  menuBtn.addEventListener("click", () => {
    nav.classList.toggle("open");
    const expanded = nav.classList.contains("open");
    menuBtn.setAttribute("aria-expanded", expanded ? "true" : "false");
    trackEvent("menu_toggle", { expanded });
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuBtn.setAttribute("aria-expanded", "false");
    });
  });
}

document.querySelectorAll("form").forEach((form) => {
  form.addEventListener("submit", () => {
    trackEvent("form_submit", {
      form: form.getAttribute("aria-label") || "unknown-form",
    });
  });
});

document.querySelectorAll("[data-track]").forEach((element) => {
  element.addEventListener("click", () => {
    trackEvent("cta_click", {
      target: element.getAttribute("data-track") || "unknown",
    });
  });
});

animateCounters();
initReviewSlider();
