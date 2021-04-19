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

3. 屬性: length

4. 方法: 
    - indexOf()
    - join()        //陣列組成字串

    - 新增刪除在後端: push(item) | pop()
    - 新增刪除在前端: unshift(item) | shift()                            
    - 任意處做新增刪除: splice()            
      splice(index)                //刪除
      splice(index, 刪除的筆數)     //刪除
      splice(index, 刪除的筆數, 100, 200, 300) 　//可以刪除也可以新增

    - 刪除陣列內的元素: delete arr[2]
    
    - sort()
    - reverse()
    - slice(index from, index to)

    - filter()
    - map()
    - reduce()