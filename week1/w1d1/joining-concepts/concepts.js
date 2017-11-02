/*
 * Write a loop that joins the contents of conceptList together
 * into one String, concepts, with each list item separated from
 * the previous by a comma.
 *
 * Note: you may not use the built-in Array join function.
 */

var conceptList = ["gists", "types", "operators", "iteration", "problem solving"];
var concepts = joinList(conceptList);

function joinList(array)
{
var z = '';
for ( var j = 0; j < array.length; j++ )
{
  if (j == array.length - 1)
{
  z += array[j]
}
else
{
 z += array[j] + ', '
}
}
return z;
}


console.log("Today I learned about " + joinList(conceptList ) + ".");



