function countLetters(stringPassed) {

var noSpaces = stringPassed.toLowerCase().split(" ").join("");
var tally = {};


for (i = 0; i <= noSpaces.length - 1; i++) {

    var key = noSpaces[i];


    if (tally[key] === undefined){
       tally[key] = [i];

     }
    else if(tally[key] !== undefined) {
            tally[key].push(i);
      }


    }





 return tally;
}



console.log(countLetters("lighthouse in the house"))