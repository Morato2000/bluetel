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


// Coverage slider
let slideIndex = 0;
let slides = document.querySelectorAll(".slides");
let dots = document.querySelectorAll(".dot");

// Function to display the correct slide
function showSlides() {
    // Hide all slides
    slides.forEach(slide => {
        slide.style.opacity = "0";
        slide.style.position = "absolute"; // Keep them stacked on top of each other
    });

    // Remove active class from all dots
    dots.forEach(dot => dot.classList.remove("active"));

    // Move to the next slide
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }

    // Show the current slide
    slides[slideIndex - 1].style.opacity = "1";
    slides[slideIndex - 1].style.position = "relative"; // Only active slide is in normal flow
    dots[slideIndex - 1].classList.add("active");

    // Repeat the function every 7 seconds
    setTimeout(showSlides, 5000);
}

// Function for manual slide navigation
function currentSlide(n) {
    slideIndex = n - 1; // Adjust index
    showSlides();
}

// Initialize slideshow
showSlides();

