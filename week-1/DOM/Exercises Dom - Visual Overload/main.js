/*
Exercises 
Visual Overload
*/ 

const container = document.getElementById("container");

const ChangeColor = function() {
    this.style.backgroundColor = getRandomColor();
    this.innerHTML = " Color Change ";
};


const getRandomColor = function() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

for (let i = 0; i < 50; i++) {
    const box = document.createElement("div");
    box.setAttribute("class", "box");
    box.addEventListener("mouseenter", ChangeColor);
    container.appendChild(box);
}
