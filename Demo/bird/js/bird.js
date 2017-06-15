$(function() {
    var bird = $("#bird");
    var pos = bird.offset(); //获取bird的位置
    console.log(pos);
    var birdSize = { width: bird.width(), height: bird.height() };
    console.log(birdSize);
    var speed = 10;
    var record=39;
    $(document).keydown(function(e) {
        var key = e.keyCode;//获取键盘事件
        if(key!=record){
        		bird.removeClass().addClass("bird_"+key);
        }
        record=key;
        switch (key) {
            case 37: //左
                pos.left -= speed;
                if (pos.left <= -birdSize.width) {
                    pos.left = $(window).width();
                }
                break;
            case 38: //上
                pos.top -= speed;
                if (pos.top <= -birdSize.height) {
                    pos.top = $(window).height();
                }
                break;
            case 39: //右
                pos.left += speed;
                if (pos.left >= $(window).width()) {
                    pos.left = -birdSize.width;
                }
                break;
            case 40: //下
                pos.top += speed;
                if (pos.top >=$(window).height() ) {
                    pos.top = -birdSize.height;
                }
                break;
        }
        bird.offset(pos);
    });







})
