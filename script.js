let index = 0;

const images = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

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
  images.forEach((imageDiv) => {
    imageDiv.classList.remove('active');
  });

  dots.forEach((dot) => {
    dot.classList.remove('active-dot');
  });

  images[index % images.length].classList.add('active');
  dots[index % images.length].classList.add('active-dot');
}

setInterval(() => {
  slide('next');
}, 5000);
