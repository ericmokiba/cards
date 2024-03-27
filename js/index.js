let countEl = document.getElementById("count-el")

let count = 0

function increment(){
    count += 1
    countEl.textContent = count
}
Saveinfo = document.getElementById("demo")
function save(){

let countStr = count + " - "
Saveinfo.textContent += countStr
countEl.textContent = 0
count = 0
     
}

let myPoints = 3


function add3Points(){
    myPoints +=3
}

function remove1Point(){
    myPoints -=1
}
add3Points()
add3Points()
add3Points()
remove1Point()
remove1Point()

