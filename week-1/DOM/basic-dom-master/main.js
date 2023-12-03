const moveRight = function() {
    const ball = document.getElementById("ball");
    let left = parseFloat(ball.style.left) || 0;
    left += 5;
    ball.style.left = left + "px";
};

const moveLeft = function() {
    const ball = document.getElementById("ball");
    let left = parseFloat(ball.style.left) || 0;
    left -= 5;
    ball.style.left = left + "px";
};

const moveUP = function() {
    const ball = document.getElementById("ball");
    let top = parseFloat(ball.style.top) || 0;
    top -= 5;
    ball.style.top = top + "px";
};


const moveDown = function() {
    const ball = document.getElementById("ball");
    let top = parseFloat(ball.style.top) || 0;
    top += 5;
    ball.style.top = top + "px";
};





// const header = document.createElement("h1")
// header.innerHTML = "The Best Game Ever"
// header.style.color = "#c0392b"
// header.style.fontFamily = "Helvetica"
// document.body.appendChild(header)





//const box = document.getElementById("box")



/*
Exercises 
Visual Overload


const box = document.getElementById("box")

const change = function(){
    box.style.backgroundColor = getRandomColor();
    box.innerHTML = "The Color Changed !"

}

function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

*/ 
