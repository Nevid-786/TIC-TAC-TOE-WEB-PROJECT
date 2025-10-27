let boxes=document.querySelectorAll(".boxes");
let resetbtn=document.querySelector("#reset");
let turnO=true;//playeO
let patterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
    if(turnO){
        box.innerText="O";
        turnO=false;
    }
    else{
        box.innerText="X";
        turnO=true;

    }
    box.disabled=true;
    checkWinner();
});

});
const checkWinner=()=>{
    for(let pattern of patterns){
    let pos1Value=boxes[pattern[0]].innerText;
    let pos2Value=boxes[pattern[1]].innerText;
    let pos3Value=boxes[pattern[2]].innerText;
    if(pos1Value!="" && pos2Value!=""  && pos3Value!="" ){
    if(pos1Value===pos2Value && pos2Value===pos3Value){
        console.log(`Winner is ${pos1Value}`);
        
    }
    
    }
}

}






















resetbtn.addEventListener("click",()=>{
    boxes.forEach((box)=>{
        box.innerText=" ";
        box.disabled=false;
       
    });
     console.log("reset");

}
)