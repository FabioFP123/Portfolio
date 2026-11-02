const carousel = document.getElementById('carousel');
  const slides = carousel.querySelectorAll('.img-container');

  let currentSlide = 0;
  const intervalTime = 7000;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.opacity = i === index ? '1' : '0';
      slide.style.transition = 'opacity 1s ease-in-out';
      slide.style.position = 'absolute';
      slide.style.left = '0';
      slide.style.top = '0';
      slide.style.width = '100%';
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  showSlide(currentSlide);
  setInterval(nextSlide, intervalTime);