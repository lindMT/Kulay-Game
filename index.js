$(document).ready(function()
{
    document.getElementById("playButton").addEventListener("click", play);
    document.getElementById("resetButton").addEventListener("click", reset);

    var dice1 = 0
    var dice2 = 0
    var dice3 = 0
    
    function play(){
        dice1 = Math.floor(Math.random() * 6) + 1;
        dice2 = Math.floor(Math.random() * 6) + 1;
        dice3 = Math.floor(Math.random() * 6) + 1;
        document.getElementById("dice1").src = "images/"+ dice1 +".png";
        document.getElementById("dice2").src = "images/"+ dice2 +".png";
        document.getElementById("dice3").src = "images/"+ dice3 +".png";
        checkWin()
    }

    function reset(){
        dice1 = 0
        dice2 = 0
        dice3 = 0
        document.getElementById("dice1").src = "images/0.png";
        document.getElementById("dice2").src = "images/0.png";
        document.getElementById("dice3").src = "images/0.png";
        document.getElementById("win1").innerHTML = "Winnings: 0x"
        document.getElementById("win2").innerHTML = "Winnings: 0x"
        document.getElementById("win3").innerHTML = "Winnings: 0x"
    }

    function checkWin(){

        for (i=1; i<=3; i++){
            document.getElementById("win" + i).innerHTML = "Winnings: 2x"
        }

        if (dice1 == dice2){
            document.getElementById("win1").innerHTML = "Winnings: 3x"
            document.getElementById("win2").innerHTML = "Winnings: 3x"
        } else if (dice2 == dice3){
            document.getElementById("win2").innerHTML = "Winnings: 3x"
            document.getElementById("win3").innerHTML = "Winnings: 3x"
        } else if (dice1 == dice3){
            document.getElementById("win1").innerHTML = "Winnings: 3x"
            document.getElementById("win3").innerHTML = "Winnings: 3x"
        }
        
        if(dice1 == dice2 && dice2 == dice3){
            document.getElementById("win1").innerHTML = "Winnings: 4x"
            document.getElementById("win2").innerHTML = "Winnings: 4x"
            document.getElementById("win3").innerHTML = "Winnings: 4x"
        }

    }

});