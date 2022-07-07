"use strict"
const gameBoard = document.querySelector('.guess__board')

let table = [3, 3]
function arrInk(arr) {
    arr = [arr[0] + 1, arr[1] + 1]
}

function boardGenerator(arr) {
    gameBoard.innerHTML = '';
    function boardRowsGenerator(arr) {
        for (let i = 0; i < arr[0]; i++) {
            gameBoard.innerHTML += `<div class="board__row"></div>`
        }
    }
    function boardColsGenerator(arr) {
        const boardRows = document.querySelectorAll('.board__row');
        for (let row of boardRows) {
            for (let i = 0; i < arr[1]; i++) {
                row.innerHTML += `<div class="board__item"></div>`
            }
        }
    }
    boardRowsGenerator(arr)
    boardColsGenerator(arr)
}

boardGenerator(table)