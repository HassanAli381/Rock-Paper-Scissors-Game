/// Al-Hassan Ali Badawy
if(window.outerWidth < 768) {
    window.alert("Sorry Don't Support Mobile Screen , You might face some Problems");
}

///Make Computer Choise
var coChoise = ['R', 'P', 'S'];

var myImageChoise = document.createElement("img");
var myCh, isclicked = 0;



/// Rock Image
function imageRock() {
    myImageChoise.src = "images/rock.png" ;
    var myChoisePlace = document.getElementById('my-ch');
    myChoisePlace.appendChild(myImageChoise);
    var txt = document.getElementById('my-ch-txt');
    txt.innerHTML = "You Choosed Rock"; 
    myCh = 'R';
    var rand = coChoise[(Math.random() * coChoise.length) | 0];
    //console.log(rand);
    if(rand == 'R') {
        r();
    }
    else if(rand == 'P') {
        p();
    }
    else {
        s();
    }
}
/// Paper Image
function imagePaper() {
    myImageChoise.src = "images/paper.png"; 
    var myChoisePlace = document.getElementById('my-ch');
    myChoisePlace.appendChild(myImageChoise);
    var txt = document.getElementById('my-ch-txt');
    txt.innerHTML = "You Choosed Paper"; 
    myCh = 'P';
    var rand = coChoise[(Math.random() * coChoise.length) | 0];
    //console.log(rand);
    if(rand == 'R') {
        r();
    }
    else if(rand == 'P') {
        p();
    }
    else {
        s();
    }
}
/// Scissors Image
function imageScissors() {
    myImageChoise.src = "images/scissors.png"; 
    var myChoisePlace = document.getElementById('my-ch');
    myChoisePlace.appendChild(myImageChoise);
    var txt = document.getElementById('my-ch-txt');
    txt.innerHTML = "You Choosed Scissors"; 
    myCh = 'S';
    var rand = coChoise[(Math.random() * coChoise.length) | 0];
    //console.log(rand);
    if(rand == 'R') {
        r();
    }
    else if(rand == 'P') {
        p();
    }
    else {
        s();
    }
}

var com_img = new Image();
let myScore = 0, compScore = 0;
function r() {
    com_img.src = "images/rock.png";
    var co_div = document.getElementById('img_choise');
    co_div.appendChild(com_img);

    var txt = document.getElementById('c-ch-txt');
    txt.innerHTML = "Rock"; 
    if(myCh == 'R') {
        ++myScore, ++compScore;
        Draw();
    }
    else if(myCh == 'S'){
        ++compScore;
        Lose();
    }
    else {
        ++myScore;
        win();
    }
    document.querySelector("#my-score").innerHTML = myScore;
    document.querySelector("#comp-score").innerHTML = compScore;
    /// Round Result Alert
    roundScore();
}

function p() {
    com_img.src = "images/paper.png";
    var co_div = document.getElementById('img_choise');
    co_div.appendChild(com_img);
    
    var txt = document.getElementById('c-ch-txt');
    txt.innerHTML = "Paper"; 
    if(myCh == 'P') {
        ++myScore, ++compScore;
        Draw();
    }
    else if(myCh == 'R'){
        ++compScore;
        Lose();
    }
    else {
        ++myScore;
        win();
    }
    document.querySelector("#my-score").innerHTML = myScore;
    document.querySelector("#comp-score").innerHTML = compScore;
    /// Round Result Alert
    roundScore();
}
function s() {
    com_img.src = "images/scissors.png";
    var co_div = document.getElementById('img_choise');
    co_div.appendChild(com_img);

    var txt = document.getElementById('c-ch-txt');
    txt.innerHTML = "Scissors"; 
    if(myCh == 'S') {
        ++myScore, ++compScore;
        Draw();
    }
    else if(myCh == 'P'){
        ++compScore;
        Lose();
    }
    else {
        ++myScore;
        win();
    }
    document.querySelector("#my-score").innerHTML = myScore;
    document.querySelector("#comp-score").innerHTML = compScore;
    /// Round Result Alert
    roundScore();
}
let roundnum = 1;
function roundScore() {
    if(myScore == 5) {
        window.alert("You Won on Round " + roundnum++);
        myScore = 0, compScore = 0;
    }
    else if(compScore == 5) {
        window.alert("Computer Won on Round " + roundnum++);
        myScore = 0, compScore = 0;
    }
}


var res_div = document.querySelector('.res');
function win() {
    res_div.style.display = "block";
    res_div.style.color = "#03c03c";
    res_div.innerHTML = "You Win";
}
function Lose() {
    res_div.style.display = "block";
    res_div.style.color = "#ff0000";
    res_div.innerHTML = "You Lose";
}

function Draw() {
    res_div.style.display = "block";
    res_div.style.color = "#fff";
    res_div.innerHTML = "Draw!";
}

