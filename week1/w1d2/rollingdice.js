
function rollingDice(numberOfDice) {
  var arrayOfDice = []
for (i = 0; i < numberOfDice; i++)
{
  var diceRoll = ranNumRoll()

  arrayOfDice.push(diceRoll);
}

  return arrayOfDice;
}




function ranNumRoll(rolledResult)
{
  ranNum = Math.floor(Math.random()* 6) + 1;
  return ranNum;
}

var arrayNum = process.argv.slice(2)

console.log('Rolled: ' + arrayNum + ' dice ' + rollingDice(arrayNum))











