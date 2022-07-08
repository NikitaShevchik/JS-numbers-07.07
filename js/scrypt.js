"use strict"
const gameBoard = document.querySelector('.guess__board')
/*---------Данные для игры----------*/
let colsRows = [2, 2]; // колонки и ряды
let maxNumber = colsRows[0] * colsRows[1]; //нужно для будущего. Максимальное число (колонки * ряды)
let randomNumbers = []; // пустой массив для записи сгенерированных чисел (количество чисел - maxNumber)
let clicks; // клики
let win; // победа
/*---------Генерация игрового поля----------*/
function boardGenerator(arr, arrRandoms) {
    arrRandoms = [];
    gameBoard.innerHTML = '';
    function boardRowsColsGenerator(arr) {
        for (let i = 0; i < arr[0]; i++) {
            gameBoard.innerHTML += `<div class="board__row"></div>`
        }
        const boardRows = document.querySelectorAll('.board__row');
        for (let row of boardRows) {
            for (let i = 0; i < arr[1]; i++) {
                row.innerHTML += `<div class="board__item"></div>`
            }
        }
    }
    function randomArrayGen(arrEmpty) {
        arrEmpty.push(randomNumber());
        while (arrEmpty.length != maxNumber) {
            for (let i = 0; i < maxNumber; i++) {
                var nu = randomNumber();
                if (!arrEmpty.includes(nu)) {
                    arrEmpty.push(nu);
                }
            }
        }
        function randomNumber() {
            var ran = (Math.random() * maxNumber).toFixed(0);
            while (ran == 0) {
                ran = (Math.random() * maxNumber).toFixed(0);
            }
            return ran;
        }
    }
    function numberInItems(randomArr) {
        const allItems = gameBoard.querySelectorAll('.board__item');
        for (let i = 0; i < allItems.length; i++) {
            allItems[i].innerHTML = randomArr[i];
        }
    }
    boardRowsColsGenerator(arr)
    setTimeout(() => randomArrayGen(arrRandoms), 20);
    setTimeout(() => numberInItems(arrRandoms), 30)
    setTimeout(() => eventsForItems(), 40)
}
function eventsForItems() {
    const allItems = gameBoard.querySelectorAll('.board__item');
    clicks = 1;
    win = false;
    for (let item of allItems) {
        item.addEventListener('click', function (e) {
            if (item.innerHTML == clicks) {
                item.classList.add('_selected');
                clicks++;
                window.navigator.vibrate(200);
            } else {
                e.preventDefault()
            }
            function checkWin() {
                for (let i = 0; i < maxNumber; i++) {
                    if (allItems[i].classList.contains('_selected')) {
                        win = true;
                    } else {
                        win = false;
                        break;
                    }
                }
                if (win) {
                    return win;
                } else {
                    return win;
                }
            }
            if (checkWin()) {
                arrInk();
                setTimeout(() => boardGenerator(colsRows, randomNumbers), 50)
            }
        })
    }
}
/*---------Увеличитель массива рядов и колонок----------*/
function arrInk() {
    colsRows = [colsRows[0] + 1, colsRows[1] + 1];
    maxNumber = colsRows[0] * colsRows[1];
}
/*---------Запуск игры----------*/
boardGenerator(colsRows, randomNumbers)
/*---------Предотвращение перезагрузки и Ф5----------*/
// window.addEventListener('keydown', function (e) {
//     if (e.keyCode === 116) {
//         console.log('reload')
//         let rel = confirm('При перезагрузке страницы, вы потеряете ВЕСЬ прогресс. Вы уверены?');
//         if (!rel) {
//             e.preventDefault();
//         }
//     }
// })
// window.onbeforeunload = function () {
//     return false;
// }

