
const boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector(".new-game");
let msgContiner = document.querySelector(".msg-continer");
let msg = document.querySelector(".msg")


let trueO = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],


];

const resetGame = () => {
    trueO = true;
    enableboxes();
    msgContiner.classList.add("hide");
}




boxes.forEach((box) => {
    box.addEventListener(("click"), () => {


        if (trueO) {
            box.innerText = "o";
            trueO = false;
        } else {
            box.innerText = "x"
            trueO = true;
        }
        box.disabled = true;
        checkWinner();
    })
})

const disabledBox = () => {
    for (box of boxes) {
        box.disabled = true;
    }
}
const enableboxes = () => {
    for (box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (Winner) => {
    msg.innerText = `congratulations, Winner is ${Winner}`
    msgContiner.classList.remove("hide");
    disabled();
}

const checkWinner = () => {

    for (pattern of winPatterns) {
        let post1val = boxes[pattern[0]].innerText;
        let post2val = boxes[pattern[1]].innerText;
        let post3val = boxes[pattern[2]].innerText;


        if (post1val != "" && post2val != "" && post3val != "") {
            if (post1val === post2val && post2val === post3val) {
    

                showWinner(post1val);
            }
        }

    }

};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click" , resetGame)