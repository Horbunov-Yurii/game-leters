import {
  alert,
  defaultModules,
  success,
  error,
  info,
} from "../node_modules/@pnotify/core/dist/PNotify.js";
import * as PNotifyMobile from "../node_modules/@pnotify/mobile/dist/PNotifyMobile.js";
 import "@pnotify/core/dist/PNotify.css";
 import "@pnotify/mobile/dist/PNotifyMobile.css";
import "@pnotify/core/dist/BrightTheme.css";


defaultModules.set(PNotifyMobile, {});

// alert({
//   text: "Notice me, senpai!",
// });

// Напиши гру "Натисни правильну клавішу", використовуючи події keydown та keypress.
// Створити елементи для відображення повідомлення про стан гри та поточної клавіші, яку потрібно натиснути.
// Створити масив keys, що містить десять можливих клавіш, які можуть бути натиснуті.
// Створити змінну currentKeyIndex, що зберігає індекс поточної клавіші, яку потрібно натиснути.
// Встановити текст елементу з id="key" на поточну клавішу, яку потрібно натиснути.
// Створити обробник події keydown, що перевіряє, чи була натиснута правильна клавіша. Якщо була натиснута правильна клавіша, то збільшити currentKeyIndex на 1, встановити нову поточну клавішу та оновити текст елементу з id="key". Вивести повідомлення про помилку використовуючи бібліотеку pnotifyю  
// Якщо була натиснута неправильна клавіша, то повідомити користувача про помилку, використовуючи бібліотеку pnotify
// Створити обробник події keypress, що запобігає дії за замовчуванням для уникнення несподіваного поведінки сторінки під час гри.
// Додати кнопку "Нова гра", що оновлює гру з новим поточним ключем та повідомленням, використовуючи бібліотеку pnotify

const letterRef = document.querySelector(".window-letters");

const arrayLetters = ["q", "w","e","r","t","y","u","i","o","p"]
let currentKeyIndex = 0;

letterRef.textContent = arrayLetters[currentKeyIndex];



window.addEventListener("keydown", (evt) => {
     if (evt.key === "Escape") {
       letterRef.textContent = "By";
       info({
         title: "Sticky Info",
         text: "Гру закінчено.",
         hide: false,
       });
       return;
     }
  
    if (evt.key === arrayLetters[currentKeyIndex]) {
   
        currentKeyIndex = Math.floor(Math.random()* (arrayLetters.length - 1)+1)
          
      letterRef.textContent = arrayLetters[currentKeyIndex];

      success({
        title: "УРААААА.....!",
        text: "натиснули правильну літеру.",
        delay: 500,
      });
    }else{
        error({
          title: "Oh No!",
          text: "Something terrible happened.",
          delay: 500,
        });
    }
});