function combine(...objects) {
    let result = {};
    objects.forEach((value) => {
        for (let key in value) {
            if (key in result) {
                result[key] = result[key] + value[key];
            }
            else { result[key] = value[key]};   
        }
    })
    return result;
  }

  obj1 = {a:5, b:2, c:3};
  obj2 = {a:4, b:1, c:23, d:44};

  console.log(combine(obj1, obj2));
