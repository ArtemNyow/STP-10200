const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add("active");
      }, index * 200); // кожна наступна секція через 200мс
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

reveals.forEach(el => observer.observe(el));
