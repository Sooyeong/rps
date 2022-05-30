const rsp=["Rock", "Scissors", "Paper"];
function computerPlay(indx){
    return rsp[indx];
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

// Add event listener for each buttons ;
let pwincount=0;
let cwincount=0;
let winCount=[0,0];

const buttons=document.querySelectorAll('button');
buttons.forEach(button=>button.addEventListener('click',game));

function game(e){

    let playerSelection=this.outerText;
    let rand_idx=Math.floor(Math.random() * 3) ;
    let computerSelection = computerPlay(rand_idx);
    let result=playRound(playerSelection,computerSelection);     
 
    
    // Clear message from previous game
    var paragraphs = document.getElementsByClassName('message2')
    const fix_length=paragraphs.length;
    for (var i = 0; i <fix_length; i++) {
        console.log(i, paragraphs.length)
        paragraphs[0].remove()
     }



    
    if (result=="Player Win"){

         pwincount=pwincount+1;
         winCount=[pwincount,cwincount];

         const divButton=document.getElementById("buttons");

         const message=document.createElement("p");
         message.classList.add('message');
         message.textContent=`Player Win - \n Player: ${winCount[0]}, Computer: ${winCount[1]} `;


        divButton.appendChild(message);


    }
    else if (result=="Computer Win"){

        cwincount=cwincount+1;
        winCount=[pwincount,cwincount];
        const divButton=document.getElementById("buttons");
        const message=document.createElement("p");
        message.classList.add('message');
        message.textContent=`Computer Win - \n Player: ${winCount[0]}, Computer: ${winCount[1]} `;
        divButton.appendChild(message);
    }

    else {
        const divButton=document.getElementById("buttons");

        const message=document.createElement("p");
        message.classList.add('message');
        message.textContent=`Draw - \n Player: ${winCount[0]}, Computer: ${winCount[1]} `;

        divButton.appendChild(message);

    }
    console.log(winCount);

    // Action item - 1.  Clear log 
    //               2. Remove HTML Tag 
    //               3. Initialize Win count and repeat the game ;
    
    if (
        (winCount[0]>=5&&winCount[1]<5)||(winCount[1]>=5&&winCount[0]<5)
        ){

            if (winCount[0]>=5&&winCount[1]<5){
                const divButton=document.getElementById("buttons");

                var paragraphs = document.getElementsByTagName('p')

                const fix_length=paragraphs.length;
    
                for (var i = 0; i <fix_length; i++) {
                    console.log(i, paragraphs.length)
                    paragraphs[0].remove()
                 }

                const message2=document.createElement("p");
                message2.classList.add('message2');
                message2.textContent=`Final Result : Player Win ! \n Player: ${winCount[0]}, Computer: ${winCount[1]}  `;
                divButton.appendChild(message2);
                

            }
    
            else if (winCount[1]>=5&&winCount[0]<5){
                const divButton=document.getElementById("buttons");    

              // const paragraph = document.getElementsByClassName("message");
                //  divButton[0].removeAttribute('message');
              //  paragraph.remove();

              var paragraphs = document.getElementsByTagName('p')

              const fix_length=paragraphs.length;
  
              for (var i = 0; i <fix_length; i++) {
                  console.log(i, paragraphs.length)
                  paragraphs[0].remove()
               }

                const message2=document.createElement("p");
                message2.classList.add('message2');
                message2.textContent=`Final Result : Computer Win ! \n Player: ${winCount[0]}, Computer: ${winCount[1]}  `;
                divButton.appendChild(message2);
    
            }

            //Initialize winCount again//
            winCount=[0,0];    
            pwincount=0;
            cwincount=0;
            
        }

    return;
}

/*


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


*/