const identification = document.querySelector('#id');
const content = document.querySelector('#content span');
const button = document.querySelector('#requisition-button');

var data = {};

async function loadAdvice () {
  try {
    const response = await fetch(
      'https://api.adviceslip.com/advice'
    );

    data = await response.json();

    console.log(data);
  } catch (err) {
    console.log(err);
  }

  identification.innerHTML = data.slip.id;
  content.innerHTML = data.slip.advice;
}

window.onload = () => {
  loadAdvice();
}

button.addEventListener('click', () => {
  loadAdvice();

  console.log('click')
})