(() => {
  const sideNav = document.querySelector(".side-nav");
  const toggle = document.querySelector(".nav-toggle");
  const navLinks = [...document.querySelectorAll(".nav-links a[data-section]")];
  const sections = [...document.querySelectorAll("[data-observe]")];

  if (toggle && sideNav) {
    toggle.addEventListener("click", () => {
      const open = sideNav.classList.toggle("nav-open");
      toggle.setAttribute("aria-expanded", String(open));
    });
  }

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      sideNav?.classList.remove("nav-open");
      toggle?.setAttribute("aria-expanded", "false");
    });
  });

  if (!("IntersectionObserver" in window)) return;

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (!visible) return;

      navLinks.forEach((link) => {
        const active = link.dataset.section === visible.target.id;
        link.classList.toggle("is-active", active);
        if (active) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      });
    },
    { rootMargin: "-22% 0px -58% 0px", threshold: [0.05, 0.2, 0.45] },
  );

  sections.forEach((section) => observer.observe(section));
})();
