function strCount(obj){
  let count = 0;
  for (let key in obj) {
    let k = 0;
     if ((typeof obj[key]) === 'string') {
       count = count + 1;
     }
    else if (obj[key] !== null && typeof obj[key] === 'object') {
      count = count + strCount(obj[key]);
     }
    
   }
  return count;
}

  console.log (strCount({
    first:  "1",
    second: "2",
    third:  false,
    fourth: ["anytime",'2',3,4],
    fifth:  null,
    sixth:  undefined,
    seventh:{
      first:  "1",
    second: "2",
    }
  }));
  