var words = ["ground", "control", "to", "major", "tom"];





var map = function(array, cb) {
  var result = []

  for (i = 0; i < array.length; i++){

    result.push(cb(array[i]))

  }

  return result
}

var leng = map(words, function(word) {


  return word.length;
});
console.log(leng)



var UC = map(words, function(word) {


  return word.toUpperCase();
});
console.log(UC)



var backwrd = map(words, function(word) {


  return word.split('').reverse().join('');
});
console.log(backwrd)


