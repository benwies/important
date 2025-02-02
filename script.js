
const openButton = document.getElementById('open-button');
const blurScreen = document.getElementById('blur-screen');
const contentContainer = document.getElementById('content-container');
const audio = new Audio('music/laufey.mp3'); 
audio.volume = 0.2;


openButton.addEventListener('click', function() {

  blurScreen.style.display = 'none';
  contentContainer.style.opacity = 1;
  audio.play(); 
});


const noButton = document.getElementById('no-button');
const yesButton = document.getElementById('yes-button');

const noButtonTexts = ['Sure?', 'Really?', 'Please', 'What if I ask real nicely?', 'Pretty please', 'no :('];
let textIndex = 0;  

noButton.addEventListener('click', function() {
  if (textIndex < noButtonTexts.length) {
    noButton.textContent = noButtonTexts[textIndex];
    textIndex++;
  }

  if (noButton.textContent === 'no :(') {
    noButton.removeEventListener('click', arguments.callee);  
    enableJumping();  
    startJumping();  
    startGrowingYesButton();  
  }


  const currentYesWidth = parseInt(window.getComputedStyle(yesButton).width);
  const currentYesHeight = parseInt(window.getComputedStyle(yesButton).height);
  
  yesButton.style.width = (currentYesWidth + 30) + 'px';
  yesButton.style.height = (currentYesHeight + 15) + 'px';
});


function enableJumping() {
  noButton.addEventListener('mouseenter', function() {
    startJumping();  
  });
}


function startJumping() {
  noButton.classList.add('jump');  

  const randomX = Math.floor(Math.random() * (window.innerWidth - noButton.offsetWidth));  
  const randomY = Math.floor(Math.random() * (window.innerHeight - noButton.offsetHeight));  

  noButton.style.position = 'absolute';
  noButton.style.left = randomX + 'px';
  noButton.style.top = randomY + 'px';
}

function startGrowingYesButton() {

  setInterval(function() {
    const currentYesWidth = parseInt(window.getComputedStyle(yesButton).width);
    const currentYesHeight = parseInt(window.getComputedStyle(yesButton).height);


    yesButton.style.width = (currentYesWidth + 40) + 'px';
    yesButton.style.height = (currentYesHeight + 20) + 'px';

    const currentFontSize = parseInt(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = (currentFontSize + 2) + 'px';
  }, 50);  
}

yesButton.addEventListener('click', function() {

  window.location.href = 'yes.html';
});
