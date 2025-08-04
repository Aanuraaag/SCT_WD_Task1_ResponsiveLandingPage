// Filter Skills by Category
const filterButtons = document.querySelectorAll(".filter-btn");
const skillCards = document.querySelectorAll(".skill-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    const filter = button.getAttribute("data-filter");

    skillCards.forEach((card) => {
      const category = card.getAttribute("data-category");
      card.style.display = (filter === "all" || filter === category) ? "block" : "none";
    });
  });
});

// Initialize AOS animation
AOS.init();
