const images = document.querySelectorAll('.header-slider ul img');
const prevBtn = document.querySelector('.control-previous');
const nextBtn = document.querySelector('.control-next');

let n = 0; /* when n is 0 desiplay only first image 1,2 other images*/

// for the buttons when we click on them the other images should show

function changeSlide(){
    for (let i = 0; i < images.length; i++) {
        images[i].style.display = 'none';  
    }
    images[n].style.display = 'block'
}
changeSlide();

prevBtn.addEventListener('click', (e) => {
    if (n > 0) {
        n--;
    } else {
        n = images.length - 1;   /* for when n is 0& less */
    }
    changeSlide();
})
nextBtn.addEventListener('click', (e) => {
    if (n < images.length - 1) {   /* fir when n is less than index of the last image itll increase till it gets to the last image */
        n++;
    } else {
        n = 0;  /* and when it gets to its last image it goes back to 0 and continues the loop */
    }
    changeSlide();
})

// scrool container
const scrollContainer = document.querySelectorAll('.products');
  for(const item of scrollContainer){
     item.addEventListener('wheel', (evt)=>{
        evt.preventDefault();
        item.scrollLeft += evt.deltaY;
     })
  }