document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Remove 'active' from all sections
          sections.forEach((section) => {
            section.classList.remove("active");
          });
          // Add 'active' to the current section
          entry.target.classList.add("active");
        }
      });
    },
    { threshold: 0.5 } // Adjust threshold (0.5 = 50% visibility)
  );

  sections.forEach((section) => observer.observe(section));
});