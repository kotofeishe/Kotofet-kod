function vowelOne(s){
    const arrayVowels = ['a', 'e', 'i', 'o', 'u'];
    const arrayInput = s.split('');
    let result = '';
    arrayInput.forEach(value => {
        if (arrayVowels.indexOf(value.toLowerCase()) < 0 ) {
            result = result + '0';
        }
        else {result = result + '1'; }
    })
    return result;
  }

  console.log (vowelOne( "abceios"));
