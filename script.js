const texty = document.querySelector('#replace');

const numButton = document.querySelector('#randomButton');

function randomNum() {
  return Math.floor( Math.random() * 101 );
  // console.log(randomNum());
}

numButton.addEventListener('click', function(e) {
  texty.textContent = randomNum();
});


// text.textContent = 'test';