JSON: JavaScript Object Notation

[Array] -- 參考 Array.js
1. 建立陣列物件
    let arr = [];
    let arr = new Array();

    let arr = [2,4,6,'ABC',true,new Date()];
    let arr = new Array(2,4,6,'ABC',true,new Date());

2. 如何存取?
    arr[0] -----> 2
    arr[3] -----> ABC

    for(let i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
    
    
[Object] -- 參考 Object.js
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


[JSON]: Array 和 Object 組合
1. Array 放進 Object 中
    let temp = {屬性: []};
    let friends = {
        TED102: [
            {name: 'Alex',  age: 25},
            {name: 'Billy', age: 26},
            {name: 'Carl',  age: 23},
            {name: 'Dale',  age: 27},
            {name: 'Eddie', age: 22},
        ],
    };

    friends -----> 物件
    friends.TED102 -----> 陣列
    friends.TED102[1] -----> 物件
    friends.TED102[1].name -----> Billy

    JSON格式
    {
        "TED102":[
           {
              "name":"Alex",
              "age":25
           },
           {
              "name":"Billy",
              "age":26
           },
           {
              "name":"Carl",
              "age":23
           },
           {
              "name":"Dale",
              "age":27
           },
           {
              "name":"Eddie",
              "age":22
           }
        ]
     }

2. Object 放進 Array 中
     let temp = [{},{},{},{},...];
     let classmate = [
        {name: 'Alex',  age: 25},
        {name: 'Billy', age: 26},
        {name: 'Carl',  age: 23},
        {name: 'Dale',  age: 27},
        {name: 'Eddie', age: 22}
     ];

     classmate -----> 陣列
     classmate[2] -----> 物件
     classmate[2].age -----> 23

     JSON格式
     [
        {
           "name":"Alex",
           "age":25
        },
        {
           "name":"Billy",
           "age":26
        },
        {
           "name":"Carl",
           "age":23
        },
        {
           "name":"Dale",
           "age":27
        },
        {
           "name":"Eddie",
           "age":22
        }
     ]

[將JavaScript物件轉成JSON]   
     JSON.stringify();

     ex.
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

    執行: console.log(JSON.stringify(man));
    結果: {"name":"Peter","age":40,"gender":"male","favoriteColor":["black","white","gray"],"car":{"make":"BMW","mode":"X5","year":2019},"retired":false}


[將JSON轉成JavaScript的陣列或物件]: 請放在引號中
    JSON.parse(); 

    let json = `{"name":"Peter","age":40,"gender":"male","favoriteColor":["black","white","gray"],"car":{"make":"BMW","mode":"X5","year":2019},"retired":false}`

    執行: console.log(JSON.parse(json))
    結果: {name: "Peter", age: 40, gender: "male", favoriteColor: Array(3), car: {…}, …}