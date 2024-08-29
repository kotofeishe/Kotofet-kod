function sentence(arrayOfObjects) {
    let result = '';
    arrayOfObjects.sort((a, b) => +Object.keys(a) - +Object.keys(b));
    arrayOfObjects.forEach((value, index) => {
        if(arrayOfObjects.length - 1 !== index) {
        result = result + Object.values(value) + ' ';
        }
        else {
        result = result + Object.values(value);
        }
    })
    return (result);
}

List = [
    {'4': 'dog' }, {'2': 'took'}, {'3': 'his'},
    {'-2': 'Vatsan'}, {'5': 'for'}, {'6': 'a'}, {'12': 'spin'}
   ];

console.log (sentence(List));
