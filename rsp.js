const rsp=["Rock", "Scissors", "Paper"];

function computerPlay(indx){
    return rsp[indx];
}

function titleCase(string){
    return string[0].toUpperCase() + string.slice(1).toLowerCase();
}


function playRound(playerSelection, computerSelection){
    if (playerSelection==computerSelection){
        return "Draw";
    }

    else if (playerSelection=="Rock" && computerSelection=="Scissors"){
        return "Player Win";
    }

    else if (playerSelection=="Rock" && computerSelection=="Paper"){
        return "Computer Win";
    }

    else if (playerSelection=="Scissors" && computerSelection=="Paper"){
        return "Player Win";
    }

    else if (playerSelection=="Scissors" && computerSelection=="Rock"){
        return "Computer Win";
    }
    else if (playerSelection=="Paper" && computerSelection=="Scissors"){
        return "Computer Win";
    }

    else if (playerSelection=="Paper" && computerSelection=="Rock"){
        return "Player Win";
    }


}


//    console.log("Player: "+rsp_user_input);
//    console.log("Computer: "+computerPlay());


//    console.log(playRound(rsp_user_input,computerSelection));

// 5 game and count win/lost score , use loop if possible

let arr=[];
function game(){
    let pwincount=0;
    let cwincount=0;
    let wincount_res=[];
    for (let i=0; i<5; i++){
        let playerSelection=window.prompt("RSP? Your choice", "Rock");
        let rand_idx=Math.floor(Math.random() * 3) ;
        let computerSelection = computerPlay(rand_idx);
        
        let rsp_user_input=titleCase(playerSelection);
        let result=playRound(rsp_user_input,computerSelection);     

        console.log(result);

        if (result=="Player Win"){
            pwincount=pwincount+1;
        }
        else if (result=="Computer Win"){
            cwincount=cwincount+1;
        }

        wincount_res=[pwincount,cwincount];
    }
    return wincount_res;
}

const count=game();

function judgement(count){

    if (count[0]>count[1]){
        console.log("Final Result: Player Win");
        return;
    }

    else if (count[0]==count[1]){
        console.log("Final Result: Draw");
        count=game();
        judgement(count);
        return;
    }


    else {
        console.log("Final Result: Computer Win");
        return;
    }

}


judgement(count);



