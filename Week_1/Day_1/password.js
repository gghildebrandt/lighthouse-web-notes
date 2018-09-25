/*that takes a single string as a command line argument
usar o mesmo esquema para somar numeros direito na command line do terminal
*/

var myArgs = process.argv.slice(2);
console.log('myArgs: ', myArgs);

var password = myArgs[0];
console.log(  )

console.log("Password: ", obfuscate(password))
/* aqui estou chamando a funcao para que ela possa rodar as condicoes abaixo*/

/*Every "a" in the string should be replaced with a "4".
Every "e" in the string should be replaced with a "3".
Every "o" (oh) in the string should be replaced with a "0" (zero).
Every "l" (el) in the string should be replaced with a "1" (one).
*/

function obfuscate (password){
  var obfusPassword = "";
  for (i = 0; i < password.length; i++){
    if (password[i] === "a") {
      obfusPassword = obfusPassword + "4";
    }
    else if (password[i] === "e") {
      obfusPassword =  obfusPassword + "3";
    }
    else if (password[i] === "o") {
      obfusPassword = obfusPassword + "0";
    }
    else if (password[i] === "l") {
      obfusPassword = obfusPassword + "1";
    } else {
      obfusPassword = obfusPassword + password[i]
    }
    console.log(obfusPassword)
  }
  return (obfusPassword);
}
//variavel vazia que vai retornar o resultado da funcao
//loop por cada index da string
//estou criando uma string nova, nao ha uma subsituicao,cada letra eh adicionada em cada loop
//else if pq como esta analisando uma letra de cada vez pode ser excludente

