let r=Math.floor(Math.random()*100)+1;
window.onload=function()
{
    document.getElementById("Check").addEventListener("click",playGame);
    document.getElementById("Restart").addEventListener("click",initGame);
}
function playGame()
{
    let num=document.getElementById("Number").value;
    console.log(num);
    Checknum(num);
}
function ShowYouWon()
{
    const text="HURRAY,You won.You guessed the number correctly";
    let dialog=getDialog('won',text);
    document.getElementById("result").innerHTML=dialog;
}
function Shownumabove()
{
    const text="Your Guess is too high";
    let dialog=getDialog('warning',text);
    document.getElementById("result").innerHTML=dialog;
}
function Shownumbelow()
{
    const text="Your Guess is too low";
    let dialog=getDialog('warning',text);
    document.getElementById("result").innerHTML=dialog;
}


function getDialog(dialogtype,text)
{
    let dialog;
    switch(dialogtype)
    {
        case "warning":
            dialog ="<div id='red' class='alert alert-warning' role='alert'>";
                dialog+=text;
                dialog+="</div>";
                return dialog;
        case "won":
            dialog = "<div id='green' class='alert alert-success' role='alert'>";
                dialog+=text;
                dialog+="</div>";
                return dialog;
    }
}

function Checknum(num)
{
    if(num==r)
    {
        console.log("HURRAY,You won.You guessed the number correctly");
        ShowYouWon();
    }
    else if(num>r)
    {
        console.log("Number is too high");   
        Shownumabove();             
    }
    else if(num<r)
    {
        console.log("Number is too low");
        Shownumbelow();                
    }
}
