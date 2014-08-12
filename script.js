var alerted = true;
var supremeAlert = true;
var basicAlert = true;

function checkBroke(total) {
  if ((total < 0) && (basicAlert === true)) {
    alert("You have officially taken a loan from the bank of Yolo. If you continue with the game and fail to repay Beiber will find you.");
    basicAlert = false;
  }
}


function checkTotal(total) {
  if ((total < -100) && (alerted === true)) {
    alert("I know where you live.");
    alerted = false;
  }
}

function checkTotalAgain(total) {
  if ((total < -300) && (supremeAlert === true)) {
    alert("Beiber is coming to break your legs.");
    alerted = false;
  }
}


$(document).ready(function() {

  var total = 100;

  $("button").on('click', function(){

    var bet = Number($("#bet").val());
    var guess = Number($("#guess").val());
    var randomNum = (Math.round(Math.random(10)*10));

    console.log("Initial total is " + total)
    console.log("Your bet is " + bet)
    console.log("Your guess is " + guess)
    console.log("Your random number is " + randomNum)

    var reduceTotal = function() {
      total = (total - bet);
    }

    reduceTotal()

    var moneyMade = function() {
      if (randomNum === guess){
        return (bet * 2);
      } else if (Math.abs((randomNum - guess === 1))) {
        return (bet);
      } else {
        return 0;
      }
    }

    var addWinnings = function(winnings) {
      total = (total + winnings);
    }

    moneyMade();
    var winnings = moneyMade();
    addWinnings(winnings);
    checkTotal(total);
    checkTotalAgain(total);
    checkBroke(total);

    var leg_breaker = function(total) {
      total
    }

    $("#total").text("You have $" + total + " at your disposal");
  });
});



// var money = moneyMade(guess, randomNum, bet)
// console.log(addWinnings(money))
