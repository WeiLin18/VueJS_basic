1. var | let | const

    for(var i = 0; i < 5 ; i++){
        console.log(i);
    }
    console.log(i);
    結果：
    0
    1
    2
    3
    4
    5
    ---------------------------
    for(let j = 0; j < 5 ; j++){
        console.log(j);
    }
    console.log(j);
    結果：
    0
    1
    2
    3
    4
    Uncaught ReferenceError: j is not defined
    ---------------------------
    # hosting(提升)
    
    test();             //先執行該函數
    function test(){    //補宣告
        ...function..
    }
    -----
    temp += 1;
    var temp = 10;
    -----
    let 和 const 不能先執行再補宣告
    ---------------------------
    # const 不能被reassigned
    const x = 100;
    x = 50;     //X
    -----
    const obj = {
        a: 5,
        b: 10,
        c: 15,
    };
    obj.a = 500;  //√

    ==========================
2. object shorthand 物件縮寫
    (1).屬性縮寫
        function givePoint(x, y){
            return {
                x: x,
                y: y,
            };
        }
        呼叫: const point = givePoint(100, 200);
              console.log(point);
        結果: {x: 100, y: 200}

        ↓↓↓↓↓↓↓↓↓↓
        function givePoint(x, y){
            return {
                x, 
                y,
            };
        }
        呼叫: const point = givePoint(100, 200);
              console.log(point);
        結果: {x: 100, y: 200}
        ---------------------------

        function createObject(key, value){
            const obj = {};  //const obj = new Object();
            obj[key] = value;  //物件的陣列表示法

            return obj;
        }

        呼叫: const person = createObject('name','Peter');
              console.log(person);
        結果: {name: "Peter"}
        -----
        呼叫: const dog = createObject('legs',4);
              console.log(dog);
        結果: {legs: 4}

        ↓↓↓↓↓↓↓↓↓↓
        # 屬性可以計算

        function createObject(key, value){
            const obj = {
                [key + 1]: value,
            }; 

            return obj;
        }
        呼叫: const person = createObject('name','Peter');
              console.log(person);
        結果: {name1: "Peter"}
        -----
        呼叫: const dog = createObject('legs',4);
              console.log(dog);
        結果: {legs1: 4}

    (2).函數縮寫
        const options = {
            name: 'Peter',
            age: 40,
            created: function(){...},
            mounted: function(){...},
        };

        ↓↓↓↓↓↓↓↓↓↓
        const options = {
            name: 'Peter',
            age: 40,
            created(){...},
            mounted(){...},
        };
    ==========================

3. destructuring assignment 解構賦值
    (1). 陣列解構
        let numArray = [2,4,6];
        let firstNum = numArray[0];
        let secondNum = numArray[1];
        console.log(firstNum);  -----> 2
        console.log(secondNum);  -----> 4

        ↓↓↓↓↓↓↓↓↓↓↓
        let numArray = [2,4,6];
        let [firstNum,secondNum] = numArray;

        ↓↓↓↓↓↓↓↓↓↓↓
        let numArray = [2,4,6];
        let [first,second,third,fourth] = numArray;
        console.log(first);    -----> 2
        console.log(second);   -----> 4
        console.log(third);    -----> 6
        console.log(fourth);   -----> undefined

        console.log(first+second+third+fourth);   -----> NaN

        陣列解構的同時
        # 可以給初值
            let numArray = [2,4,6];
            let [first,second,third,fourth=100] = numArray;

            console.log(first+second+third+fourth);  -----> 112
        
        # 可以忽略部分元素
            let numArray = [2,4,6];
            let [,x] = numArray;  //只想取第二個值

            console.log(x);  -----> 4

        # 可以swap(兩個值互換)
            let x = 5;
            let y = 10;
            let temp;

            temp = x;
            x = y;
            y = temp;

            ↓↓↓↓↓↓↓↓↓↓↓
            let x = 5;
            let y = 10;
            [x, y] = [y, x];

            console.log(x); -----> 10
            console.log(y); -----> 5

        # 可以處理剩下的部分
            let numArray = [2,4,6,8,10];
            let [arr,...others] = numArray;

            console.log(arr);    -----> 2
            console.log(others); -----> 4,6,8,10

    (2). 物件解構
        # 可以給預設值
        let point = {
            x: 100,
            y: 200,
        };
        let x = point.x;    //100
        let y = point.y;    //200

        ↓↓↓↓↓↓↓↓↓↓↓
        let point = {
            x: 100,
            y: 200,
        };
        let {x, y, z=10} = point;

    (3). 方法(函數)參數的解構
        let point = {
            x: 100,
            y: 200,
        };
        
        function distance(thePoint){
            return Math.sqrt(thePoint.x * thePoint.x + thePoint.y * thePoint.y);
        }

        let ans = distance(point);
        console.log(ans);   //223.60679774997897

        ↓↓↓↓↓↓↓↓↓↓↓
        let point = {
            x: 100,
            y: 200,
        };
        
        function distance(thePoint){
            const {x, y} = thePoint;
            return Math.sqrt(x * x + y * y);
        }

        let ans = distance(point);
        console.log(ans);   //223.60679774997897

        ↓↓↓↓↓↓↓↓↓↓↓
        let point = {
            x: 100,
            y: 200,
        };
        function distance({x = 0, y = 0}){  //直接在函數的參數內做解構，並給初值
            return Math.sqrt(x * x + y * y);
        }
        let ans = distance(point);
        console.log(ans);   //223.60679774997897

    ==========================

4. String template 字串模板(使用backtick反引號)
    (1). 字串串接
        let name = 'Peter';
        console.log('Hello ' + name + '!');   //ES5
        console.log(`Hello ${name}!`);   //ES6

    (2). 插入表達式(expression)
        function greeting(name,days){
            console.log(`Hello ${name}! It has been ${days * 24} hours.`);
        }
        呼叫: greeting('Peter',3);
        結果: Hello Peter! It has been 72 hours.

        ↓↓↓↓↓↓↓↓↓↓↓
        function greeting(name,days){
            console.log(`Hello ${name}! ${(days>3)? 'It has been a long time since I saw you last.':''}`);
        }
        呼叫: greeting('Peter',3);
        結果: Hello Peter!
        ----------
        呼叫: greeting('Peter',5);
        結果: Hello Peter! It has been a long time since I saw you last.

    (3). 多行字串
        let longString = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis ad nesciunt ' +
                        'nam quaerat iste. Earum quis voluptatem consequuntur eos ad. Natus culpa totam' +
                        ' molestias blanditiis officiis earum quae quasi. Cum repellendus rerum, doloremque' +
                        ' assumenda eligendi similique veniam magnam unde deleniti adipisci porro numquam ' +
                        'cupiditate deserunt necessitatibus provident in itaque animi.';
                        
        
        let longString = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque aspernatur, quasi 
        praesentium alias unde facere minus ab officiis sequi corporis eaque tempore vitae? Recusandae voluptates, 
        nobis hic illo repellat autem delectus eius fugit deleniti tempore molestias itaque similique repudiandae? 
        Eligendi, reiciendis vel possimus perspiciatis facere nam provident corporis officiis dolorum!`;
    
    ==========================
5. arrow function　箭頭函數
    //目的: 提供更簡短的宣告和定義函數的方式
    (1). 宣告方式:
        // ES5
        let ans = function multi(x){
            return x * 2;
        };

        // ES6
        let ans = (x) => {
            return x * 2;
        };

        ↓↓↓↓↓↓↓↓↓↓↓
        let ans = (x) => x * 2;

        ↓↓↓↓↓↓↓↓↓↓↓
        let ans = x => x * 2;

        簡化的語法:
        - 如果傳遞不只一個參數或沒有傳參數, ()不能省略
        - 如果傳遞的參數只有一個, 可以省略()
        - 內容只有一個敘述(傳回值), 可以不用寫{}

        theArray.map(function(first,second){
            return first + second;
        });

        ↓↓↓↓↓↓↓↓↓↓↓
        theArray.map((first,second) => {        
            return first + second;
        });

        ↓↓↓↓↓↓↓↓↓↓↓
        theArray.map((first,second) => first + second);

        theButton.addEventListener('click',function(){console.log(100);});

        ↓↓↓↓↓↓↓↓↓↓↓
        theButton.addEventListener('click', () => console.log(100));

    (2). 自動綁定
        只要寫成箭頭函數，內部的this和外部的this相同

        let ans = () => console.log(this);
        console.log(this);

    (3). this
        let ans = function(){
            console.log(this);
        };
        console.log(this);  //this代表甚麼物件, 視情境(context)決定

        (i).
        var name = 'Peter';
        var ans = function(){
            console.log(this.name);
        }; 
        
        執行: ans()
        結果: Peter
        ----------
        (ii).
        var name = 'Peter';
        var ans = function(){
            console.log(this.name);
        };
        var people = {
            name: 'Stella',
            age: 30,
        }; 
        people.ans = ans();
        
        執行: ans()
        結果: Peter

        執行: people.ans()
        結果: Stella
        ----------
        (iii).
        .html
            <button id="theButton" name="Tina">Click me!</button>

        .js
            let theButton = document.getElementById('theButton');
            theButton.addEventListener('click',ans);   //Tina

    ==========================
6.spread operator




