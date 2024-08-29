function getDecimal(n){
    if (typeof(n)=== 'number'&& n !== 0 && n !== Infinity && n !== NaN ){
    n = Math.abs(n).toString().split('.');
    return(`0.${n[1]}`);
    }
    
  }

n = 100.2;
console.log(typeof(NaN));
console.log(getDecimal(n));

