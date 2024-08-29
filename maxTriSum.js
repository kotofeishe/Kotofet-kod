function maxTriSum(numbers){
    let newArray = numbers.filter((item, index) => numbers.indexOf(item) === index).sort((a, b) => a-b);
    return (newArray[newArray.length -1] + newArray[newArray.length -2] + newArray[newArray.length -3] )
    
   
  }

  const array = [11, 1, 2, 3, 5, 8, 8, 8, -10, 11];
  console.log (maxTriSum(array));