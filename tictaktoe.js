let boxes = document.querySelectorAll(".box");
let resetbutton = document.querySelector(".resetbutton");
let newbutton = document.querySelector(".newbutton");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turno = true;

const winpattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetgame = () =>{
     turno = true;
     enableboxes();
     msgcontainer.classList.add("hide");
}

boxes.forEach((box) =>{
    box.addEventListener("click",()=>{
        if(turno){
            box.innerText = "o";
            turno =false; 
        }else{
            box.innerText = "x";
            turno = true;
        }
        box.disabled = true;

        checkwinner();
    })
})

const disableboxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableboxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

showwinner = (winner) =>{
    msg.innerText = `Congratulations the winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableboxes();
}

const checkwinner = () =>{
  for(let pattern of winpattern){
    // console.log(pattern[0],pattern[1],pattern[2]);
    // console.log(boxes[pattern[0]],boxes[pattern[1]],boxes[pattern[2]]);
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;

    if(pos1 != "" && pos2 !="" && pos3 != ""){
        if(pos1 === pos2 && pos2 === pos3){
        //    console.log("Winner",pos1);
           showwinner(pos1);
        }

    }
  }
};

newbutton.addEventListener("click", resetgame);
resetbutton.addEventListener("click",resetgame);