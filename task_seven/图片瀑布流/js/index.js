//原生js实现瀑布流方法
//window.onload= function () {
////封装一个函数
//    waterFall('main','box');
//    var dataInt={"data":[{"src":'15.jpg'},{"src":'16.jpg'},{"src":'17.jpg'},{"src":'18.jpg'},
//        {"src":'19.jpg'},{"src":'20.jpg'},{"src":'21.jpg'},{"src":'22.jpg'},{"src":'23.jpg'},
//        {"src":'24.jpg'},{"src":'25.jpg'},{"src":'26.jpg'},{"src":'27.jpg'}]};
////拖动滚动加载图片
//    window.onscroll= function () {
//    //    运用布尔值进行判断true，false
//        if(checkScrollSlide){
//        //将数据块渲染到当前页面的尾部
//            var oParent=document.getElementById('main');
//        //    先遍历一遍后台给的数据块
//            for(var i=0;i<dataInt.data.length;i++){
//            //    创建一个box div/pic div /img
//                var oBox=document.createElement('div');
//                     oBox.className='box';
//                oParent.appendChild(oBox);
//                var oPic=document.createElement('div');
//                oPic.className='pic';
//                oBox.appendChild(oPic);
//                var oImg=document.createElement('img');
//                oImg.alt="#";
//                oImg.src='./images/'+dataInt.data[i].src;
//                oPic.appendChild(oImg);
//            }
//            waterFall('main','box');
//        }
//    }
//
//};
////建立一个调用函数
//function waterFall(parent,box){
////获取到父元素
//    var oParent=document.getElementById(parent);
//// 获取到parent下的所以box
////    通过一个封装函数来获取,并由oBoxs来接收
//   var oBoxs=getByClass(oParent,box);
////    计算整个页面的列数（页面宽度/box的宽度）
//    var oBoxW=oBoxs[0].offsetWidth;
//    var cols=Math.floor(document.documentElement.clientWidth/oBoxW) ;
//    //设置main的宽度,并让其居中
//    oParent.style.cssText='width:'+oBoxW*cols+'px;margin:0 auto';
////    获取到第一行的图片的高度并存入数组中
//    var hArr=[];
////    先循环一遍box
//    for(var i=0;i<oBoxs.length;i++){
//        //判断前六个图片高度，然后放入hArr数组中
//        if(i<cols){
//            hArr.push(oBoxs[i].offsetHeight);
//        }else{
//        //求出最小值
//            var minH=Math.min.apply(null,hArr);
//        //封装一个函数来获取到最小值的索引值
//           var index=getMinhIndex(hArr,minH);
//        //给最小高度的图片加一个绝对定位
//            oBoxs[i].style.position='absolute';
//            //获取到最小图片的高度i
//            oBoxs[i].style.top=minH+'px';
//            //获取最小图片的距离左边的距离
//            oBoxs[i].style.left=oBoxW*index+'px';
//        //    改变原来最小值的高度
//            hArr[index]+=oBoxs[i].offsetHeight;
//
//        }
//    }
//}
//
////根据class来获取元素
//function getByClass(parent,clsName){
////    声明一个空变量存储获取到的box数组
//    var boxArr=[];//或者var boxArr=new Array（）；都可以
//    //获取到parent下所以的子元素,*代表所有的意思
//    var oElement=parent.getElementsByTagName('*');
//    //遍历所有子元素
//    for(var i=0;i<oElement.length;i++){
//    //    判断如果className为box的子元素放入boxArr【】中
//        if(oElement[i].className==clsName){
//           boxArr.push( oElement[i]);
//        }
//    }
////    反回box
//    return boxArr;
//}
//
////求出最小图片索引值的函数
//function  getMinhIndex(arr,val){
//    for(var j in arr){
//        if(arr[j]==val){
//            return j;
//        }
//    }
//}
//
////检测是否具备了加载数据块的条件
//function checkScrollSlide(){
//  //  获取到父元素的id
//  var oParent=document.getElementById("main");
//  //  利用之前封装好的函数获取所以className为box的子元素
//  var oBoxs=getByClass(oParent,"box")  ;
//  //  求出最后一个图片的出现一半时的高度
//  var lastBoxH=oBoxs[oBoxs.length-1].offsetTop+Math.floor(oBoxs[oBoxs.length-1].offsetHeight/2);
//  //求出滚动条滚动的距离
//  var scrollTop=document.body.scrollTop || document.documentElement.scrollTop;
//    //求出窗口的高度
//    var height=document.body.clientHeight || document.documentElement.clientHeight;
//    //到达指定高度后 返回true，触发waterfall()函数
//    return (lastBoxH<scrollTop+height)?true:false;
//}


//jquery实现瀑布流方法
$(window).on('load', function() {
    waterfall();
    var dataInt = {
        "data": [{ "src": '15.jpg' }, { "src": '16.jpg' }, { "src": '17.jpg' }, { "src": '18.jpg' },
            { "src": '19.jpg' }, { "src": '20.jpg' }, { "src": '21.jpg' }, { "src": '22.jpg' }, { "src": '23.jpg' },
            { "src": '24.jpg' }, { "src": '25.jpg' }, { "src": '26.jpg' }, { "src": '27.jpg' }
        ]
    };
    $(window).on('scroll', function() {
        if (checkscrollside()) {
            $.each(dataInt.data, function(key, value) { //key为数组的索引，value为每个对应的对象
                //    创建一个盒子
                var oBox = $('<div>').addClass('box').appendTo($('#main'));
                var oPic = $('<div>').addClass('pic').appendTo($(oBox));
                $('<img>').attr('src', 'images/' + $(value).attr('src')).appendTo($(oPic));
                console.log($(value).attr('src'))
            })
        }
        waterfall();
    });

    $(window).on("resize", function() {
        waterfall();
    })

});

//函数waterfall的构建函数
function waterfall() {
    var $boxs = $('#main>div');
    //    获取到一个box的宽度       outerWidth()方法用于获得包括内边界(padding)和边框(border)的该元素宽度
    var w = $boxs.eq(0).outerWidth();
    //    获取一行几列
    var cols = Math.floor($(window).width() / w);
    //    获取main的宽度并居中
    $('#main').width(w * cols).css('margin', '0 auto');
    //用于存储 每列中的所有块框相加的高度。
    var hArr = [];
    // 遍历boxs,传入两个参宿，第一个代表每个遍历的box的索引，第二个指灭个遍历的box本身
    $boxs.each(function(index, value) {
        // 初始化布局
        value.style.cssText = '';
        // 获取所有的boxs的高度
        var h = $boxs.eq(index).outerHeight();
        //判断并获取第一排的高
        if (index < cols) {
            hArr.push(h); //hArr[index]=h;
        } else {
            //获取最小值
            var minH = Math.min.apply(null, hArr);
            // 获取最小值的索引值，第一个参数为判断对象，第二个参数为在哪个数组中进行判断
            var minHIndex = $.inArray(minH, hArr);
            //value为dom元素，需要变成jquery对象
            $(value).css({
                'position': 'absolute',
                'top': minH + 'px',
                'left': minHIndex * w + 'px'
            });
            //数组 最小高元素的高 + 添加上的aPin[i]块框高
            hArr[minHIndex] += h;
        }
    });
    console.log(hArr);
}
//函数 checkscrollside()构建
function checkscrollside() {
    //   获取到所有box的最后一个元素
    var $lastBox = $('#main .box').last();
    //    获取最后box一半到顶部的距离    offset()方法获取匹配元素在当前窗口的相对偏移量。这里的窗口指的是当前页面的窗口，不包括浏览器的菜单栏等
    var lastBoxDis = $lastBox.offset().top + Math.floor($lastBox.outerHeight() / 2);
    //获取滚动的距离
    var scrollTop = $(window).scrollTop();
    //加上窗口距离
    var documentH = $(window).height();
    return (lastBoxDis < scrollTop + documentH) ? true : false;
}
