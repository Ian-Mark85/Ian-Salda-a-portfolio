
let counterNum = document.getElementById("counterNum");
let incBtn = document.getElementById("incBtn");
let resetBtn = document.getElementById("resetBtn");
let decBtn = document.getElementById("decBtn");
let saveBtn = document.getElementById("saveBtn");
let count = 0;

incBtn.onclick = function(){
    count++;
    counterNum.innerText = count;
}
resetBtn.onclick = function(){
    count = 0;
    counterNum.innerText = count;
}
decBtn.onclick = function(){
    count--;
    counterNum.innerText = count;
}
saveBtn.onclick = function(){
    let counter = ` ${count} - `
    counterPrev.innerText += counter;
    count = 0;
    counterNum.innerText = count;
}


