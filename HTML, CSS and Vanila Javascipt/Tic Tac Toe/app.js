console.log("Tic Tac Toe");

let bgMusic = new Audio("./GameFiles/music.mp3");
let turnMusic = new Audio("./GameFiles/ting.mp3");
let gameOver = new Audio("./GameFiles/gameover.mp3");


let turn = 'X';
let gameEnd = false;

bgMusic.play();

// Function to change turn
const changeTurn = () => {
    return (turn === 'X' ? '0' : 'X');
}

// Function to check for a Win
const checkWin = () => {
    let wins = [[0, 1, 2, 0, 5, 0], [3, 4, 5, 0, 15, 0], [6, 7, 8, 0, 25, 0], [0, 3, 6, -10, 15, 90], [1, 4, 7, 0, 15, 90], [2, 5, 8, 10, 15, 90], [0, 4, 8, 0, 15, 45], [2, 4, 6, 0, 15, 135]];

    let boxtexts = document.getElementsByClassName('box-text');

    wins.forEach((e) => {

        if ((boxtexts[e[0]].innerHTML !== '') && (boxtexts[e[0]].innerHTML === boxtexts[e[1]].innerHTML) && (boxtexts[e[1]].innerHTML === boxtexts[e[2]].innerHTML)) {
            if (!gameEnd) {
                document.querySelector('.info').innerHTML = boxtexts[e[0]].innerHTML + " won";
                gameEnd = true;
                document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
                document.querySelector('.line').style.width = "30vw";
                document.querySelector('.line').style.transform = `translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`;
                gameOver.play()
            }
        }
    });
}

// Game Logic

let boxes = document.getElementsByClassName('box');

Array.from(boxes).forEach(element => {
    let boxText = element.querySelector('.box-text');

    element.addEventListener('click', () => {
        if (boxText.innerHTML === '') {
            boxText.innerHTML = turn;
            turn = changeTurn();
            turnMusic.play();
            checkWin();
            if (!gameEnd) {
                document.getElementsByClassName('info')[0].innerHTML = "Turn for " + turn;
            }
        }
    })
});

// onclick listener to reset

reset.addEventListener('click', () => {
    let boxtexts = document.querySelectorAll('.box-text');

    Array.from(boxtexts).forEach((box) => {
        box.innerHTML = '';
        turn = 'X';
        gameEnd = false;
        document.getElementsByClassName('info')[0].innerHTML = "Turn for " + turn;
        document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = 0;
        document.querySelector(".line").style.width = "0vw";
    })
});