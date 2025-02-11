//opacity on header

document.addEventListener("scroll", function() {
    let header = document.querySelector("header");
    if (window.scrollY > 50) {  
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});



document.addEventListener("scroll", function() {
    console.log("Scrolling Y:", window.scrollY);
});

//For cards testimonals
document.addEventListener("DOMContentLoaded", function () {
    const testimonials = document.querySelectorAll(".testimonial-item");
    const prevBtn = document.querySelector(".testimonial-prev");
    const nextBtn = document.querySelector(".testimonial-next");
    let currentIndex = 0;
    let interval = setInterval(nextTestimonial, 5000); // Auto-slide every 5 seconds

    function showTestimonial(index) {
      testimonials.forEach((testimonial, i) => {
        testimonial.style.display = i === index ? "block" : "none";
      });
    }

    function nextTestimonial() {
      currentIndex = (currentIndex + 1) % testimonials.length;
      showTestimonial(currentIndex);
    }

    function prevTestimonial() {
      currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
      showTestimonial(currentIndex);
    }

    nextBtn.addEventListener("click", function () {
      nextTestimonial();
      resetInterval();
    });

    prevBtn.addEventListener("click", function () {
      prevTestimonial();
      resetInterval();
    });

    function resetInterval() {
      clearInterval(interval);
      interval = setInterval(nextTestimonial, 5000); // Restart auto-slide
    }

    showTestimonial(currentIndex);
  });   