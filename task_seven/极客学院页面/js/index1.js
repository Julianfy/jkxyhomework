$(document).ready(function() {

    //点击搜索按钮展开input
    $(".selected_search").click(function() {
        $("#searchbox").show(800);
        return false;
        //阻止事件冒泡
    });
    //点击关闭按钮后关闭
    $("#close-btn").click(function() {
        $("#searchbox").hide(800);
        return false;
        //阻止事件冒泡
    });
    //划过右侧手机标签和用户标签显示
    $(".selected_app").mouseover(function() {
        $(".selected_app_img").slideDown(500);
    }).mouseout(function() {
        //离开标签隐藏
        $(".selected_app_img").hide();
        return false;
        //阻止事件冒泡
    });
    //在新的出现框上停留显示，离开隐藏
    $(".selected_app_img").mouseover(function() {
        $(this).show();
    }).mouseout(function() {
        $(this).hide();
        return false;
        //阻止事件冒泡
    });
    //划过用户图标显示
    $(".selected_user").mouseover(function() {
        $(".selected .submenu").slideDown(500);
    }).mouseout(function() {
        //离开标签隐藏
        $(".selected .submenu").hide();
        return false;
        //阻止事件冒泡
    });
    //在新的出现框上停留显示，离开隐藏
    $(".selected .submenu").mouseover(function() {
        $(this).show();
    }).mouseout(function() {
        $(this).hide();
        return false;
        //阻止事件冒泡
    });

    //右侧布局结构变化按钮
    $(".close-icon1").click(function() {
        $('.bottom').css("height", "100px");
        $(".page_content_inner").css("height", "auto")
        $(".container-inner ul").removeClass().addClass('sec');
    })

    $(".back-icon").click(function() {
        $('.bottom').css("height", "80px");

        $(".container-inner ul").removeClass().addClass('container-inner-ul');
    })


    $('.container-inner').on("mouseenter", '.container-inner-ul li', function() {
        show1($(this));
        $(this).find($(".hide")).stop().slideDown(200);
    })
    $('.container-inner').on("mouseleave", '.container-inner-ul li', function() {
        hide1($(this));
        $(this).find($(".hide")).stop().slideUp(200);

    })
    $('.container-inner').on("mouseenter", '.sec li', function() {
        show2($(this));
    })
    $('.container-inner').on("mouseleave", '.sec li', function() {
            hide2($(this));
        })
        // 
    function show1(selector) {
        selector.find('.cover').stop().animate({ opacity: "1" });

    }

    function show2(selector) {
        selector.find('.cover').stop().animate({ opacity: "1" });
    }

    function hide1(selector) {
        selector.find('.cover').stop().animate({ opacity: "0" });

    }

    function hide2(selector) {
        selector.find('.cover').stop().animate({ opacity: "0" });
    }
    // 回到顶部事件
    $(window).scroll(function() {
        /* 判断滚动条 距离页面顶部的距离 100可以自定义*/
        if ($(window).scrollTop() > 100) {
            $("#gototop").fadeIn(100);
        } else {
            $("#gototop").fadeOut(100);
        }
    });
    $("#gototop").on("click", function() {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });

});
