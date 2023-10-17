if(!localStorage.getItem('counter')) {
    localStorage.setItem('counter',0);
} 

let scr = 0;
let lives = 5;
let ans = 0;
function count() {
    let counter = localStorage.getItem('counter');
    counter++; 
    document.querySelector('h1').innerHTML = counter;
    localStorage.setItem('counter',counter);
    /*if (counter % 10 === 0) {
        alert(`The value of counter is: ${counter}`);
    }*/
}

function count_down() {
    counter--; 
    document.querySelector('h1').innerHTML = counter;
    if (counter % 10 === 0) {
        alert(`The value of counter is: ${counter}`);
    }
}

function mul_2() {
    counter = counter * 2 ; 
    document.querySelector('h1').innerHTML = counter;
    check();
    
}

function div_2() {
    counter = counter / 2 ; 
    document.querySelector('h1').innerHTML = counter;
    check();
    
}

function check() {

    if (counter == parseInt(document.querySelector('#num').value)) {
        alert(`The answer is correct`);
        scr++;
        document.querySelector('#score').innerHTML = scr;
    } else {
        alert(`The answer is wrong`);
        lives--;
        document.querySelector('#lives').innerHTML = lives;
        game();
    }
    document.querySelector('h1').innerHTML = counter;
    
}

function game() {

    if (lives < 1) {
        alert(`Game over`);
    } 
    
}

function random() {

const min = 1;
const max = 11;
const randomInteger1 = Math.floor(Math.random() * (max - min)) + min;
const randomInteger2 = Math.floor(Math.random() * (max - min)) + min;
console.log(`${randomInteger1} + ${randomInteger2} = `);
ans = randomInteger1 + randomInteger2;
document.querySelector('h1').innerHTML = `${randomInteger1} + ${randomInteger2} = `;
    
}

document.addEventListener('DOMContentLoaded',function() {
    document.querySelector('h1').innerHTML = localStorage.getItem('counter');
    document.querySelector('button').onclick = count;
    document.querySelector('#down').onclick = count_down;
    document.querySelector('#times2').onclick = mul_2;
    document.querySelector('#div2').onclick = div_2;
    document.querySelector('#check').onclick = check;
})

