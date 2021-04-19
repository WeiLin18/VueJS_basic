1. 建立Object物件
    let obj = {};
    let obj = new Object();

    (1).
    let obj = {};
    obj.name = 'Peter';
    obj.age = 40;
    obj.gender = 'male';

    (2).
    let obj = {
        name: 'Peter',
        age: 40,
        gender: 'male',
        smile: function(){},  //ES5
        smile(){},  //ES6
    };

2. 如何存取?
    console.log(obj.name);

3. [example]

    let man = {
        name: 'Peter',
        age: 40,
        gender: 'male',
        favoriteColor: ['black','white','gray'],
        car: {
            make: 'BMW',
            mode: 'X5',
            year: 2019,
        },
        retired: false,
        smile(){
            alert('hi')
        },
    };

    man.name ----> Peter
    man.smile() ----> hi
    man.favoriteColor[1] ----> white
        物件存取的陣列標記法: man['favoriteColor'][1] ----> white
    man.car.make ----> BMW
        物件存取的陣列標記法: man['car']['make'] ----> BMW

    語法: for(let key in Object|Array){...}
    for(let key in man){
        //use man[key]
        //use key
    }

4. 刪除
    delete man.retired