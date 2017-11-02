var loc = {

'99': '99 Spadina',
  '111': '111 High St',
  '199': '199 Spadina',
  juan: 'very secret location',
  question: 'If you did loc 205 would it still work?',
  falsey: false,
  number: 3.14159265,
  empty: '',
  array: [ 'this is cray', 'second element' ],
  'more arrays': [] }

loc['latest'] = 'The latest news'
loc.oneMore = 'Yet another one'


console.log(loc.juan)

for (key in loc) {
    if (key == 'juan') {
        console.log('   IMPORTANT  !!!!! ')
     }
    if (key == 'array') {
        loc[key].push('MORE')
     }
}
console.log(loc)
