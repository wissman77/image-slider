const imageSlider = (() => {
  // variable to change the images and dots
  let index = 0;

  // all slides and dots elements
  const images = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');

  // selector of next and previous btns
  const prev = document.querySelector('.prev');
  const next = document.querySelector('.next');

  // event listeners for the click on btns
  prev.addEventListener('click', () => slide('prev'));
  next.addEventListener('click', () => slide('next'));

  const slides = document.querySelector('.slides');

  slides.addEventListener('mouseover', () => {
    next.classList.add('visible');
    prev.classList.add('visible');
  });

  slides.addEventListener('mouseout', () => {
    next.classList.remove('visible');
    prev.classList.remove('visible');
  });

  function slide(direction) {
    if (direction === 'next') {
      index++;
    } else {
      index--;
    }

    // remove active images and dots
    images.forEach((imageDiv) => {
      imageDiv.classList.remove('active');
    });

    dots.forEach((dot) => {
      dot.classList.remove('active-dot');
    });

    // add active class to images and dots
    images[index % images.length].classList.add('active');
    dots[index % images.length].classList.add('active-dot');
  }

  setInterval(() => {
    slide('next');
  }, 5000);
})();
