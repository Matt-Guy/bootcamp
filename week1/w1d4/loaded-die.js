//var rollDie = function () {
 // return Math.floor(1 + Math.random() * 6);
//}

//console.log(rollDie());

function makeLoadedDie(arr, val) {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  var counter = 0;

//for (i = 0; i < list.length; i++)


  return function() {
     var result = list[counter];
     counter++;

     return result;


    /* your code here */
  }
}

var rollLoadedDie = makeLoadedDie();

console.log(rollLoadedDie());   //1
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());
console.log(rollLoadedDie());   //1
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());
console.log(rollLoadedDie());   //1
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());
console.log(rollLoadedDie());

   //1
