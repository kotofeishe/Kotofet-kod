function killer(suspectInfo, dead) {
    
    for (let key in suspectInfo) {
        let n = 0;
        suspectInfo[key].forEach(value => {
            if (dead.includes(value) === true) {
                n = n + 1;
            }
        })
        if(n === dead.length) {
            return (key);
        }  
    }
  }

arg1 = {'James': ['Jacob', 'Bill', 'Lucas'],
    'Johnny': ['David', 'Kyle', 'Lucas'],
    'Peter': ['Lucy', 'Kyle']};
arg2 = ['Lucas', 'Bill'];

console.log (killer (arg1, arg2));

