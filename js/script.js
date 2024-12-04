      var name = '';
      var wins = 0;
      var losses = 0;
      var ties = 0;
      let ggWins = 0;
      let ggLosses = 0;
      function guessingGame(){
        if(name===''||name===null)name = prompt('Please enter your name. ');
        console.log(name);
        loopGuessingGame();
        ggWins = 0;
        ggLosses = 0;
      }
      
      function loopGuessingGame(){
        let input = prompt('Even or Odd? ');
        if(input!='even'&&input!='odd'){
           input = invalidInputCheck(input, 'even', 'odd');
        }
        console.log(input);
        alert(`3.. 2.. 1.. `);
          let num1 = Math.floor(Math.random() * 4)+1;
          console.log(num1);
          let num2 = Math.floor(Math.random() * 4) +1;
          console.log(num2);
          let sum = num1 + num2;
          let output = '';
          if(sum/2===Math.floor(sum/2)){
            output = 'even';
          }else{
            output = 'odd';
          }
          if(input===output){
             alert(`${name}, you chose ${input}, the sum was ${sum}, which is an ${output} number, you win!`);
            ggWins++;
                wins++;
          }else{
             alert(`${name}, you chose ${input}, the sum was ${sum}, which is an ${output} number, you lose!`);
            ggLosses++;
                losses++;
          }
        alert(`That's ${ggWins} wins and ${ggLosses} losses!`);
        playAgainGG();
        displaySessionStats();
      }
      function playAgainGG(){
         let p = prompt(`${name}, would you like to play again, Yes or No?`);
         if(p===null||p.toLowerCase()==='no'){
         }else if(p===''){
           playAgainGG();
         }else if(p.toLowerCase()==='yes'){
           loopGuessingGame();
         }else{
           alert("Invalid Entry");
         }
      }
      function invalidInputCheck(g, a, b){
        let check = prompt(`Invalid input, expected: `+a+`/`+b+`.`);
        if(check!=a&&check!=b){
          return invalidInputCheck(g,a,b);
        }else{
          return check;
        }
      }

      
      function consultOracle(){
          prompt(`The magic 8 ball is being shook... Ask a question you want answered: `);
          alert(`The magic 8 ball has been shook. `+selectAnswer());
          askAnotherQ();
          displaySessionStats();
      }
      function askAnotherQ(){
         let p = prompt(`Would you like to ask another question y/n?`);
         if(p===null||p.toLowerCase()==='n'){
         }else if(p===''){
           askAnotherQ();
         }else if(p.toLowerCase()==='y'){
           consultOracle();
         }else{
           alert("Invalid Entry");
         }
      }
      function selectAnswer(){
            let r = Math.floor(Math.random()*8)+1;
            switch(r){
              case 1:
                        ties++;
                return 'Ask again later';
                break;
              case 2:
                        wins++;
                return 'Most likely';
                break;
              case 3:
                        losses++;
                return 'My sources say no';
                break;
              case 4:
                        ties++;
                return 'Better not tell you now';
                break;
              case 5:
                        wins++;
                return 'Outlook good';
                break;
              case 6:
                        losses++;
                return 'Outlook not so good';
                break;
              case 7:
                        ties++;
                return 'Concentrate and ask again';
                break;
              case 8:
                        wins++;
                return 'Signs point to yes';
                break;
              default:
                        ties++;
                return 'Ask again later';
            }
      }

      var choices = ['Bear', 'Ninja', 'Hunter'];
      function bnh(){
        if(name===''||name===null)name = prompt('Welcome to Bear Hunter Ninja! Please enter your name to get started: ');
        alert(`Hi ${name} Let's Play!!`);
        loopBNH();
      }
      function loopBNH(){
        let uType = checkType();
        if(uType!='cancel'){
          let sType = choices[Math.floor(Math.random()*choices.length)];
          let uPrintedType = `${name}, you chose ${uType}!`;
          let sPrintedType = `The computer chose ${sType}!`;
          let result = selectResult(uType, sType);
          console.log(uPrintedType);
          console.log(sPrintedType);
          console.log(result);
          alert(uPrintedType + "\n" + sPrintedType + "\n" + result);
          playAgain();
        }
        displaySessionStats();
      }
      function checkType(){
         let uType = prompt('Who are you: Bear, Ninja, or Hunter? ');
         if(uType===null){
             return 'cancel';
         }
         switch(uType.toLowerCase()){
           case 'bear':
             return uType;
             break;
           case 'ninja':
             return uType;
             break;
           case 'hunter':
             return uType;
             break;
           case null:
             return 'cancel';
             break;
           default:
             alert("Invalid Entry");
             return 'cancel';
         }
      }
      function playAgain(){
         let p = prompt(`${name}, would you like to play again, Yes or No?`);
         if(p===null||p.toLowerCase()==='no'){
         }else if(p===''){
           playAgain();
         }else if(p.toLowerCase()==='yes'){
           loopBNH();
         }else{
           alert("Invalid Entry");
         }
      }
      
      function selectResult(uType, sType){
        let match = uType.toLowerCase()+':'+sType.toLowerCase();
        let result = '';
            switch(match){
              case 'bear:ninja':
                result= 'win';
                break;
              case 'bear:hunter':
                result= 'loss';
                break;
              case 'bear:bear':
                result= 'tie';
                break;
              case 'ninja:ninja':
                result= 'tie';
                break;
              case 'ninja:hunter':
                result= 'win';
                break;
              case 'ninja:bear':
                result= 'loss';
                break;
              case 'hunter:ninja':
                result= 'loss';
                break;
              case 'hunter:hunter':
                result= 'tie';
                break;
              case 'hunter:bear':
                result= 'win';
                break;
              default:
                result= 'tie';
           }
           switch(result){
             case 'win':
                  wins++;
                return 'You Win!!';
                break;
              case 'loss':
                  losses++;
                return 'You Lose.';
                break;
              case 'tie':
                  ties++;
                return 'You Tie.';
                break;
              default:
                return 'You Tie.';
            }
      }
      function displaySessionStats(){
            let totalGamesPlayed = wins+losses+ties;
            let percentWins = ((wins/(wins+losses+ties))*100).toFixed();
            let resultTable = `<table class="resultsTable" align="center">
            <tr>
                  <th>Total Games Played</th>
                  <th>Total Wins</th>
                  <th>Winrate</th>
            </tr>
            <tr align="center">
                  <td>${totalGamesPlayed}</td>
                  <td>${wins}</td>
                  <td>${percentWins}%</td>`;
            document.getElementById("d2").innerHTML = resultTable;
            
            /*document.getElementById("d2-1").innerHTML = "Total games played: ";
            document.getElementById("d2-2").innerHTML = "Total wins: ";   
            document.getElementById("d2-3").innerHTML = "Winrate: ";   
            document.getElementById("d2-4").innerHTML = totalGamesPlayed;
            document.getElementById("d2-5").innerHTML = wins;
            document.getElementById("d2-6").innerHTML = percentWins + "%";*/
      }
