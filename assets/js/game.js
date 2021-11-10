//wrap game in startGame() function
//when game is over, call an endGame() funciton
//  this function will need to alret the players total stats and ask if they want to pla again. if so, call startGame()

//After the player skips or defets an enemy, ask the player if they want to shop
//  if no, continue as normal
//  if yes, call the shop() function. in this function, ask if they want to refill, upgrade or leave.
//    if refill, subtract money points and increase health
//    if upgrade, subtract money and add attack
//    if leave, alert goodbye and exit the function
//    if any other invalid function, call shop() again




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

      if (promptFight === "skip" || promptFight === "SKIP") {
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
  
        if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye!");
          playerMoney = playerMoney - 10;
          console.log("playerMoney", playerMoney)
          break;
        }
      }

      enemyHealth = enemyHealth - playerAttack;

      console.log(
        playerName + " attacked " + enemyNames + ". " + enemyNames + " now has " + enemyHealth + " health remaining."
      );

      if (enemyHealth <= 0) {
        window.alert(enemyNames + " has died!");
        playerMoney = playerMoney + 20;
        break;
      } 
      else {
        window.alert(enemyNames + " still has " + enemyHealth + " health left.");
      }
      
      playerHealth = playerHealth - enemyAttack;
      console.log(
            enemyNames + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
      );
      
      if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
        break;
      } 
      else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
      }
    }
  };

//function to start a new game
var startGame = function() {
  playerHealth = 100;
  playerAttack = 100;
  playerMoney = 10;

  for (var i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {
      window.alert("Welcome to Robot Gladiators! Round " + (i + 1));

      var pickedEnemyName = enemyNames[i];

      enemyHealth = 50;

      fight(pickedEnemyName);
      // if we're not at the last enemy in the array
      if (playerHealth > 0 && i < enemyNames.length - 1) {
        var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
        if (storeConfirm) {
          shop();
        }
      }
    } 
    else {
      window.alert("You have lost your robot in battle! Game Over!");
      break;
    }
  }
  endGame();
}

// function to end the entire game
var endGame = function() {
  // if player is still alive, player wins!
  if (playerHealth > 0) {
    window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
  } 
  else {
    window.alert("You've lost your robot in battle.");
  }
  // ask player if they'd like to play again
  var playAgainConfirm = window.confirm("Would you like to play again?");

  if (playAgainConfirm) {
  startGame();
  } 
  else {
  window.alert("Thank you for playing Robot Gladiators! Come back soon!");
  }
  break;
}

var shop = function() {
  console.log("entered the shop");
};


startGame();
fight();
shop();
endGame();