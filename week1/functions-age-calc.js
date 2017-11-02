var ageCalculator = function(name, yearOfBirth, currentYear)
{
  var age = currentYear - yearOfBirth;
  var output = name + ' is ' + age + ' years old.';

return output;
};
console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));