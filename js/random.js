const startTime = new Date();
let counter = 0;
let scr = 0;
let lives = 5;
let ans = 0;

function check() {

    if (ans == parseInt(document.querySelector('#num').value)) {
        //alert(`The answer is correct`);
        scr++;
        document.querySelector('#score').innerHTML = scr;
        if (scr > 9) {
            
            const endTime = new Date();
            // Calculate the time difference in milliseconds
            const timeDifference = endTime - startTime;

            // Convert the time difference to seconds (optional)
            const timeInSeconds = timeDifference / 1000;
            alert(`You win in in ${timeDifference} milliseconds (${timeInSeconds} seconds).`);
            scr = 0;
            document.querySelector('#score').innerHTML = scr;
        } 
    } else {
        //alert(`The answer is wrong`);
        lives--;
        document.querySelector('#lives').innerHTML = lives;
        game();
    }
    random();
    
}

function checkIfTwoDigits() {
    const inputElement = document.querySelector('#num');
    const userInput = inputElement.value;

    // Check if the input has two digits
    if (userInput.length === 2 && /^\d+$/.test(userInput)) {
        check(); // Trigger the check function
        inputElement.value = ''; // Clear the input for the next guess
    }
}

function game() {
    if (lives < 1) {
        alert(`Game over`);
        lives = 5;
        document.querySelector('#lives').innerHTML = lives;
    } 
    
}

function random() {
    color();
    const min = 1;
    const max = 11;
    const randomInteger1 = Math.floor(Math.random() * (max - min)) + min;
    const randomInteger2 = Math.floor(Math.random() * (max - min)) + min;
    console.log(`${randomInteger1} + ${randomInteger2} = `);
    ans = randomInteger1 + randomInteger2;
    document.querySelector('h1').innerHTML = `${randomInteger1} + ${randomInteger2} = `;
    
}

function color() {
    console.log("start function");
    // Generate a random color
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

    // Apply the new background color
    document.body.style.backgroundColor = randomColor;
}

document.addEventListener('DOMContentLoaded',function() {
    document.querySelector('#changeBackground').onclick = color;
    document.querySelector('#rand').onclick = random;
    document.querySelector('#check').onclick = check;
    random();
})

