/*
  STRETCH GOAL
  STRETCH GOAL
  STRETCH GOAL

  If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="https://tk-assets.lambdaschool.com/ba687af4-3a1e-43d7-87b2-f30453264c9d_mountains.jpeg" />
    <img src="https://tk-assets.lambdaschool.com/8aa075b0-67cf-47ce-9a7f-8cc9d754675d_computer.jpeg" />
    <img src="https://tk-assets.lambdaschool.com/5b7441c6-6e4b-4feb-a4ec-8dd2eb76238a_trees.jpeg" />
    <img src="https://tk-assets.lambdaschool.com/0b770382-d0eb-4465-8bf2-692a79fcda71_turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

const imgArray = [
  'https://tk-assets.lambdaschool.com/ba687af4-3a1e-43d7-87b2-f30453264c9d_mountains.jpeg',
  'https://tk-assets.lambdaschool.com/8aa075b0-67cf-47ce-9a7f-8cc9d754675d_computer.jpeg',
  'https://tk-assets.lambdaschool.com/5b7441c6-6e4b-4feb-a4ec-8dd2eb76238a_trees.jpeg',
  'https://tk-assets.lambdaschool.com/0b770382-d0eb-4465-8bf2-692a79fcda71_turntable.jpeg"',
];

// Creating carousel Parent:

const carouselCont = document.querySelector('.carousel-container');

// Creating carousel component:

function Carousel(array) {
  // Creating variables:
 const carousel = document.createElement('div'),
  carouselLeft = document.createElement('div'),
  carouselRight = document.createElement('div');

  // Adding classes:
  carousel.classList.add('carousel');
  carouselLeft.classList.add('left-button');
  carouselRight.classList.add('right-button');

  // Appending Children:
  carousel.appendChild(carouselLeft);
  carousel.appendChild(carouselRight);

  // Creating rotating image component:
  let i = 0;
  const newImg = document.createElement('img');
  newImg.src = array[i];
  newImg.style.display = 'block';
  carousel.append(newImg);

  carouselLeft.onclick = function() {
    if(i > 0)
    {   i -= 1; newImg.src = array[i];
    } else {
      i = array.length - 1;
      newImg.src = array[i];
    }
  };

  carouselRight.onclick = function() {
    if(i < array.length - 1) {
      i += 1;
      newImg.src = array[i];
    } else {
      i = 0;
      newImg.src = array[i];
    }
  };
  // Adding content:
  carouselLeft.textContent = ' < ';
  carouselRight.textContent = ' > ';

  // Returning Carousel:
  console.log(carousel);
  return carousel;
}
carouselCont.append(Carousel(imgArray));
