      var name = '';
      var wins = 0;
      var losses = 0;
      let ggWins = 0;
      let ggLosses = 0;
      function guessingGame(){
        name = prompt('Please enter your name. ');
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
                return 'Ask again later';
                break;
              case 2:
                return 'Most likely';
                break;
              case 3:
                return 'My sources say no';
                break;
              case 4:
                return 'Better not tell you now';
                break;
              case 5:
                return 'Outlook good';
                break;
              case 6:
                return 'Outlook not so good';
                break;
              case 7:
                return 'Concentrate and ask again';
                break;
              case 8:
                return 'Signs point to yes';
                break;
              default:
                return 'Ask again later';
            }
      }

      var choices = ['Bear', 'Ninja', 'Hunter'];
      function bnh(){
        name = prompt('Welcome to Bear Hunter Ninja! Please enter your name to get started: ');
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
         let name = prompt(`${name}, would you like to play again, Yes or No?`);
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
                return 'You Win!!';
                break;
              case 'loss':
                return 'You Lose.';
                break;
              case 'tie':
                return 'You Tie.';
                break;
              default:
                return 'You Tie.';
            }
      }
