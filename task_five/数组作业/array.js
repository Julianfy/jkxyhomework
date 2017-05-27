
function findNum(){
    var data=["b","a","b","d","a","a","k","m","m","m","m","p","j","a","a"];//原数组数;
    var result={};//用来存放数据结果
    var max_key="";//存放出现最多次的字母
    var max_count=0;//存放该字母出现的次数
    //json
    //"a":[1,4,5,10]
    //"b":[2]
    for (var i= 0;i<=data.length;i++){
        // 将循环的字母负值给val
        var val=data[i];
        // 判断存储结果的数组在不在，不存在新建一个数组，并将循环的第一个值放入数组中
        if(!result[val]){
            result[val]=[]
        }result[val].push(i);
        // 判断当前值是否存在数组中，如果有出现次数加一，将该值负值给Max_count
        if(result[val].length>max_count){
            max_key=data[i];
            max_count=result[val].length;
        }
    }
        console.log(result);
        console.log("出现次数最多的字母"+max_key);
        console.log("出现次数有"+max_count);
        console.log("出现的位置是"+result[max_key]);
    //console.log(result);

}
findNum();
