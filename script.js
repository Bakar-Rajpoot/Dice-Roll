let dice1 = document.getElementById('dice1');
let dice2 = document.getElementById('dice2');
let play = document.getElementById('play');
let inp1 = document.getElementById('player-1');
let inp2 = document.getElementById('player-2');
let img1 = document.getElementById("img-1");
let img2 = document.getElementById("img-2");
let nam = document.getElementById('name');
let menu = document.getElementById('menu');
let btn = document.querySelector('button');
let win = document.getElementById('win');
let span1 = win.querySelector('span');
let span2 = win.querySelector('#span2');
var p1 = 0;
var p2 = 0;


let handleStart = () => {
    if (!nam.value) {
        alert('Enter your name first')
    }
    else if (nam.value.length > 9) {
        alert('Too Lengthy Name\nat most 9 characters')
    }
    
    else {
        startMenu()
        img1.style.display = 'none';
        img2.style.display = 'none';

        dice1.style.display = 'block'
        dice2.style.display = 'block';

        btn.textContent = 'Roll';

        btn.removeEventListener('click', handleStart);
        btn.addEventListener('click', handleRoll);
    }
}

let startMenu = () => {
    menu.style.display = 'none';
    inp1.textContent = nam.value
    // play.style.transform = "scale(1)"
    play.style.visibility = "visible"
}

let handleRoll = () => {
    // clearTimeout(handleStart)
    dice1.classList.add('rolling');
    dice2.classList.add('rolling');

    var score1 = Math.floor(Math.random() * 5) + 1;
    var score2 = Math.floor(Math.random() * 6) + 1;
    console.log(score1 + "score1");
    console.log(score2 + "score2");

    setTimeout(() => {
        dice1.classList.remove('rolling');
        dice2.classList.remove('rolling');

        dice1.style.display = 'none';
        dice2.style.display = 'none';

        img1.style.display = 'block';
        img2.style.display = 'block';

        img1.setAttribute('src', `./dice/${score1}.png`);
        img2.setAttribute('src', `./dice/${score2}.png`);

        if (score1 > score2) {
            p1++;
        }
        if (score2 > score1) {
            p2++;
        }
        console.log(win);
        span1.textContent = `${p1}`
        span2.textContent = `${p2}`
    }, 1000);

}