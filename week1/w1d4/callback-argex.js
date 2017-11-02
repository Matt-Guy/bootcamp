// The second argument/parameter is expected to be a function
var findWaldo = function(arr, found) {


arr.forEach(function(elephant, index){
  actionWhenFound(elephant, index);
});
}

var actionWhenFound = function(name, i)
{
  console.log("Found " + name + " at Index: " + i);

}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);

/*
var findWaldo = function(arr, found) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "Waldo") {
      found(i, arr[i]);   // execute callback
    }
  }
}
*/