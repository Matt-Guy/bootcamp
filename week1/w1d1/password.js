string = process.argv[2];



function obfuscate(string)
{

var array1 = '';

for (i = 0; i < string.length; i++ )
  {
      if (string[i] == 'a')
      {
          array1 += '4';
      }

      else if (string[i] == 'e')
      {
          array1 += '3';
      }

      else if (string[i] == 'o')
      {
          array1 += '0';
      }

      else if (string[i] == 'l')
      {
          array1 += '1';
      }
      else
      {
        array1 += string[i];
      };



};

return array1;
  };
 console.log(obfuscate(string));





