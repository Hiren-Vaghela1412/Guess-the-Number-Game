let randomNumber = parseInt(Math.random() * 100 + 1)
const submit = document.querySelector("#submit")
const userInput = document.querySelector("#guessfield")
const guessslot = document.querySelector(".guesses")
const remaining = document.querySelector(".lastresult")
const lowOrHi = document.querySelector(".lowOrHi")
const startover = document.querySelector(".resultparas")

const p = document.createElement('p')


let prevGuess = []
let numGuess = 1
let playGame = true

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value)
        console.log(guess);
        validateGuess(guess);
    })
}

function validateGuess(guess) {
    
    if (isNaN(guess)) {
        alert("Please Enter the Valid Number ");
    }
    else if (guess < 1) {
        alert("Please Enter the Number More than 1 ");
    }
    else if (guess > 100) {
        alert("Please Enter the Number less than 100 ");
    }
    else {
        prevGuess.push(guess)
        console.log(prevGuess);
        console.log(randomNumber);
        if (numGuess === 11) {
            displayGuess(guess)
            displayMessage(`Game Over. Random Number Was : ${randomNumber}`)
            endGame();
        }
        else {
            displayGuess(guess);
            checkguess(guess);
        }
    }
}

function checkguess(guess) {
    if (guess === randomNumber) {
        displayMessage(`You Guessed is Right`)
        endGame()
    }
    else if (guess < randomNumber) {
        displayMessage(`Number is Tooo Low`)
    }
    else if (guess > randomNumber) {
        displayMessage(`Number is Tooo High`)
    }

}
function displayGuess(guess) {
    userInput.value = '';
    guessslot.innerHTML += `${guess} ,`
    numGuess++;
    remaining.innerHTML = `${10 - numGuess}`

}
function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function newgame() {
    const newbtn = document.querySelector('#newgame')
    newbtn.addEventListener('click', function (e) {
        randomNumber = parseInt(Math.random() * 100 + 1)
        console.log(randomNumber);
        prevGuess = []
        numGuess = 1
        guessslot.innerHTML = ''
        remaining.innerHTML = `${11 - numGuess}`
        userInput.removeAttribute('disabled')

        startover.removeChild(p)
        playGame = true;
    })
}
function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id = "newgame"> Start New Game </h2>`;
    p.style.backgroundColor="violet"
    p.style.color="black"

    
    startover.appendChild(p)
    playGame = false
    newgame()

}

