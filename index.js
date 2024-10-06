let scoreH = document.getElementById("scoreH")
let scoreG = document.getElementById("scoreG")

let btn1 = document.getElementById("btn1")

let countH = 0
let countG = 0
let id = ""

function addH(nb){
        countH += nb
        scoreH.textContent = countH
}
function addG(nb){
        countG += nb
        scoreG.textContent = countG
}

function resetH(){
    countH = 0
    scoreH.textContent = countH
}
function resetG(){
    countG = 0
    scoreG.textContent = countG
}