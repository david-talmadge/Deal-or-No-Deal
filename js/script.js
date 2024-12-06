      var yourBriefcase = 0;
      //var briefcases = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26];
      var briefcaseValues = [0.01, 1, 5, 10, 25, 50, 75, 100, 200, 300, 400, 500, 750, 1000, 5000, 10000, 25000, 50000, 75000, 100000, 200000, 300000, 400000, 500000, 750000, 1000000];
      var winnings = 0;
      function dealOrNoDeal(){
            alert(`Welcome to Deal Or No Deal`);
            scrambleArray(briefcaseValues);
            alert(`Pick YOUR briefcase`);
      }
      function scrambleArray(array) {
          for (let i=array.length-1; i>0; i--) {
              let j=Math.floor(Math.random()*(i+1));
              [array[i], array[j]] = [array[j], array[i]];
          }
      }
      function pickBriefcase(id){
            let index = id.substring(1).parseInt()-1;
            let button = document.getElementById(id);
            if(yourBriefcase===0){
                  yourBriefcase = briefcaseValues[index];
                  briefcaseValues[index] = null;
            }else{ 
                  winnings += briefcaseValues[index];
                  button.innerHTML = briefcaseValues[index];
                  let sideBarValue = document.getElementById('s'+id.substring(1));
                  sideBarValue.innerHTML = '';
                  briefcaseValues[index] = 0;
                  /*for(let value : briefcaseValues){
                        if(value!=null){
                              
                        }
                  }*/
            }
            button.disabled = true;
      }
      function brokerDeal(){
            let cases = 0;
            let potentialValue = 0;
            for(let value : briefcaseValues){
                  if(value!=null&&value!=0){
                        potentialValue += value;  
                        cases++;
                  }
            }
            let offerValue = Math.floor(Math.sqrt(potentialValue)*1.99/cases);
            let p = prompt(`The dealer has given you an offer of $${offerValue}, do you accept the deal yes/no?`).toLowerCase();
            while(true){
                  if(p==='no'){
                        alert(`No Deal!`);
                        break;
                  }
                  if (p==='yes'){
                        alert(`Deal!`);
                        alert(`You have won $${offerValue}`);
                        break;
                  }
            }
      }
      function displaySessionStats(){
      }
