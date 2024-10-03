let boxes = document.querySelectorAll('.box')
let resetBtn = document.querySelector('#reset-btn')
let msgCont = document.querySelector('.msg-cont')
let newGameBtn = document.querySelector('#new-btn')
let msg = document.querySelector('#msg')

let turn0 = true
let count = 0
let win = 0
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]

const resetGame = () =>{
    turn0 = true
    count = 0
    win = 0
    enableBoxes()
    msgCont.classList.add("hide")
}

boxes.forEach((box)=>{
    box.addEventListener("click",() =>{

        if(turn0 === true){
            //player1
            box.innerText = "X"
            turn0 = false
        }
        else{
            //player1
            box.innerText = "O"
            turn0 = true
        }
        box.disabled = true
        count +=1
        checkWinner()
    })
})

const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false
        box.innerText = ""
    }
}

const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true
    }
}

const showWinner = (winner) =>{
    if (winner === "X")
        winner = "Player 1 (X)"
    else
        winner = "Player 2 (O)"
    msg.style.color = "rgb(2, 255, 65)"
    msg.innerText = `Congratulations , Winner is ${winner} `
    msgCont.classList.remove("hide")
    disableBoxes()
}

const checkWinner = () => {
    for(let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText
        let pos2Val = boxes[pattern[1]].innerText
        let pos3Val = boxes[pattern[2]].innerText
    
        if(pos1Val!="" && pos2Val!="" && pos3Val!=""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                showWinner(pos1Val)
                win = 1
            }
        }
    }
    //  Draw
    if(count===9 && win===0){
        msg.innerText = " Game is Draw..!, Play again"
        msg.style.color = "rgb(242, 254, 2)"
        msgCont.classList.remove("hide")
    }
}

newGameBtn.addEventListener("click",resetGame)
resetBtn.addEventListener("click",resetGame)