
// Game States
// "WIN" - Player robot has defeated all enemy-robots
//    * Fight all enemy-robots
//    * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less



var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyNames);
console.log(enemyNames[0]);
console.log(enemyNames[1]);
console.log(enemyNames[2]);
console.log(enemyNames.length);

var fight = function(enemyNames) { 
    while  (playerHealth > 0 && enemyHealth > 0)  {
      var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
      //console.log(promptFight);

      if (promptFight === "skip" || promptFight === "SKIP") {
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
  
        if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye!");
          playerMoney = playerMoney - 10;
          console.log("playerMoney", playerMoney)
          break;
        }
      }

      //if (promptFight === "fight" || promptFight === "FIGHT") {
          enemyHealth = enemyHealth - playerAttack;
          console.log(
            playerName + " attacked " + enemyNames + ". " + enemyNames + " now has " + enemyHealth + " health remaining."
          );

          if (enemyHealth <= 0) {
            window.alert(enemyNames + " has died!");
            playerMoney = playerMoney + 20;
            break;
          } else {
            window.alert(enemyNames + " still has " + enemyHealth + " health left.");
          }
      
          playerHealth = playerHealth - enemyAttack;
          console.log(
            enemyNames + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
          );
      
          if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
            break;
          } else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
          }
    }
    };




    for (var i = 0; i < enemyNames.length; i++) {
      var pickedEnemyName = enemyNames[i];
      enemyHealth = 50;
      fight(pickedEnemyName);
    }