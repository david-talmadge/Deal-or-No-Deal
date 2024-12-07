      var yourBriefcase = 0;
      const sideBarValues = [0.01, 1, 5, 10, 25, 50, 75, 100, 200, 300, 400, 500, 750, 1000, 5000, 10000, 25000, 50000, 75000, 100000, 200000, 300000, 400000, 500000, 750000, 1000000];
      var briefcaseValues = [0.01, 1, 5, 10, 25, 50, 75, 100, 200, 300, 400, 500, 750, 1000, 5000, 10000, 25000, 50000, 75000, 100000, 200000, 300000, 400000, 500000, 750000, 1000000];
      var winnings = 0;
      var gameOver = false;
      function dealOrNoDeal(){
            alert(`Welcome to Deal Or No Deal`);
            alert(`Pick YOUR briefcase`);
            scrambleArray(briefcaseValues);
      }
      function scrambleArray(array) {
          for (let i=array.length-1; i>0; i--) {
              let j=Math.floor(Math.random()*(i+1));
              [array[i], array[j]] = [array[j], array[i]];
          }
      }
      function pickBriefcase(id){
            let index = parseInt(id.substring(1))-1;
            let button = document.getElementById(id);
            if(yourBriefcase===0){
                  yourBriefcase = briefcaseValues[index];
                  briefcaseValues[index] = 0;
            }else{ 
                  winnings += briefcaseValues[index];
                  button.innerHTML = briefcaseValues[index];
                  for(let i=0;i<sideBarValues.length;i++){
                        if(briefcaseValues[index]===briefcaseValues[i]){
                              let sideBar = document.getElementById('s'+(i+1));
                              sideBar.innerHTML = ' ';
                        }
                  }
                  briefcaseValues[index] = 0;
                  brokerDeal();
            }
            button.disabled = true;
      }
      function brokerDeal(){
            alert(`The dealer has an offer for you`);
            let cases = 0;
            let potentialValue = 0;
            for(let value of briefcaseValues){
                  if(value!=null&&value!=0){
                        potentialValue += value;  
                        cases++;
                  }
            }
            let offerValue = Math.floor(potentialValue*0.75319/cases);
            let p = prompt(`The dealer has given you an offer of $${offerValue}, do you accept the deal yes/no?`).toLowerCase();
            while(true){
                  if(p==='no'){
                        alert(`No Deal!`);
                        break;
                  }
                  if (p==='yes'){
                        alert(`Deal!`);
                        alert(`You have won $${offerValue}`);
                        gameOver=true;
                        break;
                  }
            }
      }
      function displaySessionStats(){
      }
