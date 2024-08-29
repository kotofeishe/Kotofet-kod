function nicknameGenerator(name){
 const arrayVowels = ['a', 'e', 'i', 'o', 'u'];
 if (name.length > 3) {
 let resultArray = name.slice(0,3);
 if (arrayVowels.indexOf(name[2]) >= 0) {
  resultArray = resultArray + name[3];
  return resultArray;
}
else {return (resultArray); }
 }
return ('Error: Name too short');

}



console.log (nicknameGenerator("Gree")) //=> "Kim"
nicknameGenerator("Samantha") //=> "Sam"
nicknameGenerator("Jeannie") //=> "Jean"
nicknameGenerator("Douglas") //=> "Doug"
nicknameGenerator("Gregory") //=> "Greg"