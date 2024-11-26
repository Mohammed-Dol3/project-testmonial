const testimonials = [
  {
    quote:
      "ClientJoy transformed our customer feedback process. It's incredibly intuitive!",
    author: "Sarah Thompson",
    position: "CEO, TechInnovate",
  },
  {
    quote:
      "The most seamless review collection tool I've ever used. Highly recommend!",
    author: "Michael Rodriguez",
    position: "Founder, StartupPro",
  },
  {
    quote:
      "ClientJoy has been a game-changer for our customer engagement strategy.",
    author: "Emily Chen",
    position: "Marketing Director, GlobalBrands",
  },
];

let currentIndex = 0;
const quoteEl = document.getElementById("testimonial-quote");
const authorEl = document.getElementById("testimonial-author");
const positionEl = document.getElementById("testimonial-position");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const paginationDotsContainer = document.getElementById("pagination-dots");

function renderTestimonial(index) {
  const testimonial = testimonials[index];
  quoteEl.textContent = `"${testimonial.quote}"`;
  authorEl.textContent = testimonial.author;
  positionEl.textContent = testimonial.position;
  updatePaginationDots(index);
}

function createPaginationDots() {
  paginationDotsContainer.innerHTML = "";
  testimonials.forEach((_, index) => {
    const dot = document.createElement("span");
    dot.classList.add("pagination-dot");
    if (index === currentIndex) dot.classList.add("active");
    dot.addEventListener("click", () => {
      currentIndex = index;
      renderTestimonial(currentIndex);
    });
    paginationDotsContainer.appendChild(dot);
  });
}

function updatePaginationDots(index) {
  const dots = paginationDotsContainer.children;
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.toggle("active", i === index);
  }
}

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
  renderTestimonial(currentIndex);
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % testimonials.length;
  renderTestimonial(currentIndex);
});

function autoSlide() {
  currentIndex = (currentIndex + 1) % testimonials.length;
  renderTestimonial(currentIndex);
}

createPaginationDots();
renderTestimonial(currentIndex);
setInterval(autoSlide, 5000);
