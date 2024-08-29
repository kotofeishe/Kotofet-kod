function minSum(arr) {
    arr.sort((a,b) => a-b);
    const n = arr.length / 2;
    let maxArray = [];
    let minArray = [];
    let result = [];
    for (let i = 0; i < n; i++) {
        minArray = [...minArray, arr[i]];
        maxArray = [...maxArray, arr[arr.length - 1 - i]];
        result = [...result, minArray[i]*maxArray[i]];
    }
    result = result.reduce((acc,value) => value + acc, 0)
    return (result);
  }

  console.log (minSum([9,2,8,7,5,4,0,6]));