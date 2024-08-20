function getComputerChoice(){
    const choices =['rock','paper','scissors'];
    const randomindex= math.floor(math.random()*choices.lenght);
    return choices[randomindex];
}
function getUserChoice(userChoice){
    const ComputerChoice=getComputerChoice();
    console.log(ComputerChoice)
    if(userChoice=== "rock")
        if(ComputerChoice=== "scissors"){
            alert("you win the game")
        }else{
            if(ComputerChoice===userChoice) {
                alert("draw")
             } else {
                alert("you lose the game")
             }
        }
    
}
