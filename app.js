let boxes = document.body.querySelectorAll(".box");
let reset = document.querySelector(".reset")
let msgCont = document.querySelector(".msg-cont");
let turnX = true; 
let newBtn = document.querySelector("#new_btn");
let newButton = document.querySelector(".new");

let turnMsg = document.querySelector("h2");

turnMsg.classList.remove("hide");

const newGame=()=>{
    turnX = true;
    enableBtns();
    msgCont.classList.add("hide");
    newButton.classList.add("hide");
    turnMsg.classList.remove("hide");
    turn.innerText="X's turn";
}

let turn = document.querySelector("h2");



const winPermutations = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnX){
            box.innerText='X';
            turnX=false;
            turn.innerText = "O's turn";
        }
        else{
            box.innerText='O';
            turnX=true;
            turn.innerText = "X's turn";
        }
        box.disabled = true;
        winCheck();
    })
    })

    const disableBtns = ()=>{
        for(box of boxes)
            {
                box.disabled=true;
            }
    }

    const enableBtns=()=>{
        for(box of boxes)
            {
                box.disabled=false;
                box.innerText="";
            }
    }


    let winCheck = ()=>{
        for(let pattern of winPermutations)
            {

                let val1= boxes[pattern[0]].innerText;
                let val2= boxes[pattern[1]].innerText;
                let val3= boxes[pattern[2]].innerText;
                if(val1!="" && val2!="" && val3!="")
                    {
                        if(val1===val2 && val2===val3)
                        {
                            msgCont.innerText=`Congrats, Winner is ${val1}`;
                            msgCont.classList.remove("hide");
                            newButton.classList.remove("hide");
                            turnMsg.classList.add("hide");
                            disableBtns();
                        }
                    }
            }
    }

newBtn.addEventListener("click",newGame);
reset.addEventListener("click",newGame);