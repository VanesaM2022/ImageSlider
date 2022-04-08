const prev = document.querySelector('.prev'); 
const next = document.querySelector('.next');
const images = document.querySelector('.carousel').children;
const totalImages = images.length;
let index = 0;


prev.addEventListener('click', () => {
  nextImage('prev');
})

next.addEventListener('click', () => {
  nextImage('next');
})

function nextImage(direction) {
  if(direction == 'next') {
    index++; //index=index+1
    if(index == totalImages) {
      index = 0;
    }
  } else {
    if(index == 0) {
      index = totalImages - 1;
    } else {
      index--; //index=index-1
    }
  }

  // Putting the image at the index position in spotlight/visible.
  for(let i = 0; i < images.length; i++) {
    images[i].classList.remove('main');
  }
  
  images[index].classList.add('main');
}