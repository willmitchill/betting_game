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
        return (bet * 100);
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


    $("#total").text("You have " + total + " at your disposal");
  });
});



// var money = moneyMade(guess, randomNum, bet)
// console.log(addWinnings(money))
