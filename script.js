'use strict';



const btnCheck = document.querySelector('.check');
const message = document.querySelector('.message');
const globalScore = document.querySelector('.score');
const titleNumber = document.querySelector('.number');
// Тело
const body = document.querySelector('body');
// Рекорд
const globalHighscore = document.querySelector('.highscore');
// Кнопка заново
let btnAgain = document.querySelector('.again');
// Случайное число
let randomNumber = Math.floor(Math.random() * 25) + 1;
// Инпут для отгадываемого числа
let inputNumber = document.querySelector('.guess');
// Переменная для очков
let score = 20;
// Переменная для рекорда
let highscore = 0;

// Рендер текста и ширины окна
function renderUI(text, width) {
  titleNumber.textContent = text;
  titleNumber.style.width = width;
}

//
function showActions(text) {
  score--;
  globalScore.textContent = score;
  message.textContent = text;
}

btnCheck.addEventListener('click', function () {
  const inputValue = +inputNumber.value;
  if (inputValue > 25 || inputValue <= 0) {
    message.textContent = ' 👺Введите число от 1 до 25';
  }
  if (+inputValue > randomNumber && +inputValue < 26) {
    showActions(' 🐀 Меньше!');

    if (score === 0) renderUI('Game Over', '100rem');
  }
  if (+inputValue < randomNumber && +inputValue > 0) {
    showActions(' 🦈 Больше!');

    if (score === 0) renderUI('Game Over', '100rem');
  }
  if (inputValue === randomNumber) {
    message.textContent = ' 😎 Угадано!';
    body.style.background = '#60b347';
    renderUI(` 🤑 Победа! Число: ${randomNumber}`, '140rem');
    btnCheck.style.display = 'none';
    globalScore.textContent = score;
    score > highscore
      ? (globalHighscore.textContent = score)
      : (globalHighscore.textContent = highscore);
  }
});

btnAgain.addEventListener('click', function () {
  btnCheck.style.display = 'block';
  body.style.background =
    'linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(9,121,112,1) 35%, rgb(99, 187, 207) 100%)';
  randomNumber = Math.floor(Math.random() * 25) + 1;
  globalScore.textContent = 20;
  inputNumber.value = '';
  renderUI('?', '15rem');
});
