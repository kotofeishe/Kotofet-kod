function nbDig(n, d) {
    let sqare = [];
    let i = n;
    let k = 0;
    while (i >= 0) {
      sqare = sqare.concat([i**2]);
      i = i-1;
    }
     sqare.forEach(value => {
        let arraySeparation = value.toString().split('');
        
        arraySeparation.forEach((val) => {if(+val === d) {
            k = k + 1;
            
        }})
     })
     
     return (k);
  }

  console.log(nbDig(10, 0))