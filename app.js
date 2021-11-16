const op1=document.querySelector("#op1");
const op2=document.querySelector("#op2");
const output=document.querySelector("#output");
const plus=document.querySelector("#plus");
const minus=document.querySelector("#minus");
const mul=document.querySelector("#mul");
const divide=document.querySelector("#divide");


plus.addEventListener("click", onClckPlus);
function onClckPlus()
{
    var op=Number(op1.value)+Number(op2.value);
    optMsg(op);
}

 minus.addEventListener("click", onClckMinus);
function onClckMinus()
{   
    var op=Number(op1.value)-Number(op2.value);
    optMsg(op);
}

mul.addEventListener("click", onClckMul);
function onClckMul()
{
    var op=Number(op1.value)*Number(op2.value);
    optMsg(op);
}

divide.addEventListener("click", onClckDivide);
function onClckDivide()
{
    var op=Number(op1.value)/Number(op2.value);
    optMsg(op);
}

function optMsg(op){
    output.innerText=op;
}