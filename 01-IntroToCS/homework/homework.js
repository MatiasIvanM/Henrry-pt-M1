'use strict'

function BinarioADecimal(num) { ///
  // tu codigo aca .split("").reverse();

// return (num).toString(2);
//return (num).toString(2);
var decimal = 0;
for(var i =0; i< num.length; i++){
  decimal += num[i] * 2 ** (num.length -1 -i);
  
}
 return decimal;
}



function DecimalABinario(num) {
  // tu codigo aca usar While
  var binario ="";
  while(num>0){
   binario =num % 2+ binario;
   num =Math.floor(num / 2);
  }
  return binario;

   
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}