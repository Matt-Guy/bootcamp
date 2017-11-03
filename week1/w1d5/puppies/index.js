var request = require("request")

var math = require ("./math")

var receivePage = function(error, response, body) {

  if (error) {
    console.log("Stuff Exploded!")
    return
  }
  console.log("The page is " + body.length + " bytes long")
}

request.get('https://en.wikipedia.org/wiki/Puppy', receivePage)

console.log("Javascript is asynchronous, so this will show up first!")

console.log("4 squared is", math.square(4));