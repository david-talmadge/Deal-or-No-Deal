      var wins = 0;
      var losses = 0;
      var yourBriefcase = 0;
      var briefcases = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
      var briefcaseValues = [0.01, 1, 5, 10, 25, 50, 75, 100, 200, 300, 400, 500, 750, 1000, 5000, 10000, 25000, 50000, 75000, 100000, 200000, 300000, 400000, 500000, 750000, 1000000];
      function dealOrNoDeal(){
        alert(`Welcome to Deal Or No Deal`);
        alert(`Pick YOUR briefcase`);
        ggWins = 0;
        ggLosses = 0;
      }
      function randomizeCases(){
            
      }
      function briefcasePick(){
            if(yourBriefcase===0){
                  yourBriefcase
            } 
      }
      function afterStartingBriefcase(){
            
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
                  <td>${percentWins}%</td>
            </tr>
            </table>`;
            document.getElementById("d2").innerHTML = resultTable;
            
      }
