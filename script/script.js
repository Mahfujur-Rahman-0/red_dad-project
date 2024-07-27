document
  .querySelectorAll("#slideDownButtonO, #slideDownButtonT")
  .forEach((button) => {
    button.addEventListener("click", function () {
      document.getElementById("box").style.top = "50px"; // Slide down to 50px from the top
      document.getElementById("slideUpButton").style.display = "block";
    });
  });

document.getElementById("slideUpButton").addEventListener("click", function () {
  (document.getElementById("box").style.top = "-200%"),
    (document.getElementById("slideUpButton").style.display = "none"); // Slide up back to -100%
});

let currentSlide = 0;

function showSlide(index) {
  const slides = document.querySelector(".slides");
  const totalSlides = document.querySelectorAll(".slide").length;

  if (index >= totalSlides) {
    currentSlide = totalSlides - 1; // Stay at the last slide
  } else if (index < 0) {
    currentSlide = 0; // Stay at the first slide
  } else {
    currentSlide = index;
  }

  const offset = -currentSlide * 100;
  slides.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

// Initialize the slider
showSlide(currentSlide);

document.getElementById("playVideo").addEventListener("click", function () {
  (document.getElementById("playVideo").style.display = "none"),
    (document.getElementById("videoPlayer").style.display = "block"); // Slide up back to -100%
});

document.querySelectorAll("#PageTwoBTNo, #PageTwoBTNt").forEach((button) => {
  button.addEventListener("click", function () {
    document.getElementById("pageOne").style.display = "none";
    document.getElementById("PageTwo").style.display = "block";
  });
});
document.getElementById("closeBTN").addEventListener("click", function () {
  (document.getElementById("PageTwo").style.display = "none"),
    (document.getElementById("pageOne").style.display = "block"); // Slide up back to -100%
});
