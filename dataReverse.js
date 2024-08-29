function dataReverse(data) {
    const n = data.length / 8;
    let array = [];
    let k = data.length;
    for (let i = 1; i <= n; i++) {
        array = array.concat(data.slice(k-8, k));
        k = k - 8;
    }
 
    return array;
    
  }

const data1 = [1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0];
console.log (dataReverse (data1));