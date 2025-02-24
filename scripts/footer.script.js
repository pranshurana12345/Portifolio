const duration = getComputedStyle(document.documentElement).getPropertyValue('--fall-duration');

function createFallingStars() {
  let footer = document.querySelector('footer');
  let i = document.createElement('i');
  i.style.height = `${Math.random() * 5 + 2}rem`;
  i.style.width = `0.2rem`;
  i.style.left = `${Math.random() * 150}vw`;
  i.style.background = `linear-gradient(transparent, snow)`;
  i.style.animationDuration = `${Math.random() * parseFloat(duration) + 2}s`;
  i.style.animationDelay = `${Math.random() *  10 }s`;
  footer.appendChild(i);
  /*
  i.addEventListener('animationend', () => {
    i.remove();
  });
  */
}


for(let p=1;p<100;p++){
    setTimeout(()=>{
        createFallingStars()
    },100)
}