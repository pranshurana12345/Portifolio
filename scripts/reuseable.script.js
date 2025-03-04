let getRandomNumber = (start, end) => {
  let randomNumber = Math.random() * (end - start) + start;
  return Math.round(randomNumber)
}


function fadeTypingAnimation(element, text, speed = 150) {
  element.innerHTML = ''; // Clear previous content
  let i = 0;

  function type() {
    if (i < text.length) {
      let span = document.createElement('span');

      // Preserve spaces correctly
      span.innerHTML = text[i] === ' ' ? '&nbsp;' : text[i];

      span.classList.add('fade-letter');
      element.appendChild(span);

      // Add fade effect
      setTimeout(() => {
        span.style.opacity = 1;
      }, 50);

      i++;
      setTimeout(type, speed);
    } else {
      element.style.borderRight = "none"; // Remove cursor effect
    }
  }

  type();
}
