let boxes=document.querySelectorAll(".boxes");
let resetbtn=document.querySelector("#reset");
let A=document.querySelector("#A");
let turnO=true;//playeO


let result=document.querySelector("#result");
let patterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];
let disable= ()=>{
    boxes.forEach((box)=>{
        box.disabled=true;
       
    });
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
    if(turnO){
        box.innerText="O";
        result.innerText="Turn:X";
        turnO=false;
    }
    else{
        box.innerText="X";
        turnO=true;
        result.innerText="Turn:O";

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
    console.log(pattern);
    
    if(pos1Value!="" && pos2Value!=""  && pos3Value!="" ){
    if(pos1Value===pos2Value && pos2Value===pos3Value){
        console.log(`Winner is ${pos1Value}`);
        boxes[pattern[0]].style.backgroundColor="red";
        boxes[pattern[1]].style.backgroundColor="red";
        boxes[pattern[2]].style.backgroundColor="red";
        result.innerText=`Winner is ${pos1Value}`;
        disable();
        
    }
    
    }
}

}

resetbtn.addEventListener("click",()=>{
    boxes.forEach((box)=>{
        box.innerText=" ";
        box.style.backgroundColor="#96BBBB";

        box.disabled=false;
       
    });
     console.log("reset");
     result.innerText="Start Playing";

}
)