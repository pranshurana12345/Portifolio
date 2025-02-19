let root = document.documentElement;
let messagePopupAnimationDuration = getComputedStyle(root).getPropertyValue('--message-popup-animation-duration');


let message = document.getElementById("message")

setTimeout(() => {
  message.style.animation = "none"
},
  messagePopupAnimationDuration)