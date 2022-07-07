"use strict"
const gameBoard = document.querySelector('.guess__board')

let table = [2, 2];
let maxNumber = table[0] * table[1];
let rands = [];

function arrInk(arr) {
    arr = [arr[0] + 1, arr[1] + 1]
    maxNumber = arr[0] * arr[1];
}

var ran = (Math.random() * maxNumber).toFixed(0);
while (ran == 0) {
    ran = (Math.random() * maxNumber).toFixed(0);
}

function randomArrayGen(arrEmpty) {
    arrEmpty.push(tes());
    while (arrEmpty.length != maxNumber) {
        for (let i = 0; i < maxNumber; i++) {
            var nu = tes();
            if (!arrEmpty.includes(nu)) {
                arrEmpty.push(nu);
            }
        }
    }
    console.log(arrEmpty)
}
function tes() {
    var ran = (Math.random() * maxNumber).toFixed(0);
    while (ran == 0) {
        ran = (Math.random() * maxNumber).toFixed(0);
    }
    return ran;
}
randomArrayGen(rands)


function boardGenerator(arr) {
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
    boardRowsColsGenerator(arr)
    function numberInItems() {

    }
}

boardGenerator(table)