$(document).ready(function()
{
    document.getElementById("playButton").addEventListener("click", play);
    document.getElementById("resetButton").addEventListener("click", reset);

    var dice1 = 0
    var dice2 = 0
    var dice3 = 0
    var colorArray = [  "Gray",
                        "Green", "Purple", "Yellow",
                        "Blue", "Red", "Orange"];

    var hexColorArray = [   "#808080",
                            "#00BF63", "#8C52FF", "#DFB300",
                            "#004AAD", "#FF3131", "#FF914D"];
    
    
    function play(){
        dice1 = Math.floor(Math.random() * 6) + 1;
        dice2 = Math.floor(Math.random() * 6) + 1;
        dice3 = Math.floor(Math.random() * 6) + 1;
        document.getElementById("dice1").style.backgroundColor = hexColorArray[dice1];
        document.getElementById("dice2").style.backgroundColor = hexColorArray[dice2];
        document.getElementById("dice3").style.backgroundColor = hexColorArray[dice3];

        document.getElementById("dice1").innerHTML = colorArray[dice1];
        document.getElementById("dice2").innerHTML = colorArray[dice2];
        document.getElementById("dice3").innerHTML = colorArray[dice3];


        checkWin()
    }

    function reset(){
        dice1 = 0
        dice2 = 0
        dice3 = 0
        document.getElementById("dice1").style.backgroundColor = hexColorArray[0];
        document.getElementById("dice2").style.backgroundColor = hexColorArray[0];
        document.getElementById("dice3").style.backgroundColor = hexColorArray[0];

        document.getElementById("dice1").innerHTML = "";
        document.getElementById("dice2").innerHTML = "";
        document.getElementById("dice3").innerHTML = "";

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