/* =========================================================
   JAVASCRIPT — interaksi kecil pada halaman portofolio
   ========================================================= */

// Menampilkan tahun secara otomatis pada bagian footer.
const yearElement = document.getElementById("year");
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// Menandai menu navigasi yang sedang dipilih saat tautan diklik.
const navigationLinks = document.querySelectorAll(".nav-link");

navigationLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navigationLinks.forEach((item) => item.classList.remove("active"));
    link.classList.add("active");
  });
});

// Memperbarui menu aktif ketika pengunjung menggulir halaman.
const pageSections = document.querySelectorAll("main section[id]");
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const currentId = entry.target.id;
      navigationLinks.forEach((link) => {
        const isCurrent = link.getAttribute("href") === `#${currentId}`;
        link.classList.toggle("active", isCurrent);
      });
    }
  });
}, { rootMargin: "-35% 0px -55% 0px" });

pageSections.forEach((section) => sectionObserver.observe(section));
