function add(num1, num2) {
    let arr1 = num1.toString().split('');
    let arr2 = num2.toString().split('');
    let i = 1;
    let newElem = ('')
    if (arr1.length < arr2.length) {
        while (arr1.length >= i) {
           newElem = (+arr1[arr1.length-i] + +arr2[arr2.length-i]) + newElem; 
           i++;
        }
        let j = arr2.length - arr1.length;
        while (j !== 0) {
            newElem = arr2[j-1] + newElem;
            j = j - 1;
        }
    }
    else {while (arr2.length >= i) {
        newElem = (+arr1[arr1.length-i] + +arr2[arr2.length-i]) + newElem;
        
        i++;
     }
     let j = arr1.length - arr2.length;
    
     while (j !== 0) {
         newElem = arr1[j-1] + newElem;
         j = j - 1;
     }
    }
    return +newElem;
}
    

    console.log (add(2, 11));