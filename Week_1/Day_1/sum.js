var myArgs = process.argv.slice(2);
console.log('myArgs: ', myArgs);


///this is a way to get input directly from the terminal, so you can sum numbers
/// the .slice eliminate the two unwanted lines of the list that would appear without it
///the numbers would be takes as strings and concatenated
/// to transform a string to a number use parseInt (index do valor a ser somado na lista,base numerica)

var number1 = parseInt(myArgs[0], 10);
var number2 = parseInt(myArgs[1], 10);

console.log('Number1: ', number1);
console.log('Number2: ', number2);

/// esses valores em amarelo sao so para dizer o que sera o resultado
var sum = number1 + number2;
console.log('Result: ', sum);