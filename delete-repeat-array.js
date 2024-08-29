function mergeArrays(arr1, arr2) {
    const newArray = arr1.concat(...arr2);
     newArray.sort(function sort(a, b) { return(a-b)});
      let rezult = newArray.filter((value,index, arr)=> arr.indexOf(value)===index);
      /*console.log (rezult); */  
     
     return (rezult);
   }

   arr1= [1,1,1,2,3,4];
   arr2=[5,6,7,8,8,8,8,8,8,8];
   console.log(mergeArrays(arr1, arr2));