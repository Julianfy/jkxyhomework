/**
 * Created by Administrator on 2016/7/7.
 */

//创建demo（）方法
function demo(){
    var sVal=document.getElementById("grade").value;
    // 先判断是否输入，空白报出请输入
        if (!sVal){
            alert("请输入")}else {
                // 如果输入判断是否为数字
            if(isNaN(sVal) == false){
            if (sVal>100){
                alert("请输入合理范围内的数字")}
            else if(sVal<=100&&sVal>90){
                alert('一等生');
            } else if(sVal<=90&&sVal>80){
                alert('二等生');
            }else if(sVal<=80&&sVal>70){
                alert('三等生');
            }else if(sVal<=70&&sVal>60){
                alert('四等生');
            }else if(sVal<=60&&sVal>50){
                alert('五等生');
            }else if(sVal<=50&&sVal>40){
                alert('六等生');
            }else if(sVal<=40&&sVal>30){
                alert('七等生');
            }else if(sVal<=30&&sVal>=0){
                alert('劝退');
            }
        } else{
            // 非数字类型报出请输入数字
            alert("请输入数字")}
        }
        }



