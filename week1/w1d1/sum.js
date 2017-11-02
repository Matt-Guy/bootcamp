var args = process.argv.slice(2);
sum = 0;
for (var x = 0; x < args.length; x++ )
{
  sum+=Number(args[x]);
}
console.log(sum);