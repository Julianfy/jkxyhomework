$("document").ready(function() {

        // 获取天气预报
        var time;
        $(".list-l span").hover(function() {
            time = setTimeout(function() { $(".weater").show(); }, 1000)

        }, function() {
            clearTimeout(time);
            $(".weater").hide();
        })

        // 获取下拉菜单

        $(".more").hover(function() {
            $(".more-list").show();

        }, function() {
            $(".more-list").hide();

        })

        // 获取搜索框下拉
        var slsroll = 100;
        $(window).scroll(function() {
            if ($(window).scrollTop() > slsroll) {
                $(".search-baidu").slideDown();
            } else if ($(window).scrollTop() < slsroll) {
                $(".search-baidu").slideUp();
            }
        })

        //点击导航变化内容
        var footer_nav_a = $(".footer_nav a");
        footer_nav_a.each(function(index) {
            var thisNode = $(this);
            thisNode.click(function() {
                //移除原有导航栏的class
                $('.footer_nav a.footer_nav_sl').removeClass("footer_nav_sl");
                //移除原有内容区域的class
                $("#main div.selected").removeClass("selected");
                //添加点击的class
                thisNode.addClass("footer_nav_sl");
                //添加点击内容的class
                $("#main div").eq(index).addClass("selected");

            });
            

        });

        //换肤内容
        $("#change").click(function() {
            $(" #change_main").slideDown();
        });
        //点击换肤
        $("#animation").click(function() {
            $(".hot-img").hide();
            $(".goddess-img").hide();
            $(".start-img").show();
            $(".simple-img").hide();
        });
        $("#hot").click(function() {
            $(".hot-img").show();
            $(".goddess-img").hide();
            $(".start-img").hide();
            $(".simple-img").hide();
        });
        $("#game").click(function() {

            $(".hot-img").hide();
            $(".goddess-img").show();
            $(".start-img").hide();
            $(".simple-img").hide();
        });
        $("#goddess").click(function() {
            $(".hot-img").show();
            $(".goddess-img").hide();
            $(".start-img").hide();
            $(".simple-img").hide();
        });
        $("#start").click(function() {
            $(".hot-img").hide();
            $(".goddess-img").hide();
            $(".start-img").show();
            $(".simple-img").hide();
        });
        $("#scenery").click(function() {
            $(".hot-img").hide();
            $(".goddess-img").show();
            $(".start-img").hide();
            $(".simple-img").hide();
        });
        $("#simple").click(function() {
            $(".hot-img").hide();
            $(".goddess-img").hide();
            $(".start-img").show();
            $(".simple-img").hide();
        });
        $("#air").click(function() {
            $(".hot-img").show();
            $(".goddess-img").hide();
            $(".start-img").hide();
            $(".simple-img").hide();
        });


        $(".img-200").click(function img200() {
            $("body").css({ 'background-image': 'url("image/200.jpg")' });
            localStorage.theme = "img200";
        })

        $(".img-847").click(function img847() {
            $("body").css({ 'background': 'url("image/847.jpg")' });
            localStorage.theme = "img847";
        })
        $(".img-479").click(function img479() {
                $("body").css({ 'background': 'url("image/479.jpg")' });
                localStorage.theme = "img479";
            })
            // 判断localstorage
        if (localStorage.theme == "img200") {
            $("body").css({ 'background-image': 'url("image/200.jpg")' });
        }
        if (localStorage.theme == "img479") {
            $("body").css({ 'background-image': 'url("image/479.jpg")' });
        }
        if (localStorage.theme == "img847") {
            $("body").css({ 'background-image': 'url("image/847.jpg")' });
        }

        //透明度改变


        //关闭按钮
        $("#close").click(function() {
            $("body").css("background-image", 'none')
        });
        //收起按钮
        $("#hided").click(function() {
            $(" #change_main").slideUp();
        })

    })
    //  返回顶部按钮！
$(function() {
    $(function() {
        $(window).scroll(function() {
            /* 判断滚动条 距离页面顶部的距离 100可以自定义*/
            if ($(window).scrollTop() > 100) {
                $("#back").fadeIn(100);
            } else {
                $("#back").fadeOut(100);
            }
        });
    });
    $(function() {
        $("#back").on("click", function() {
            $('body,html').animate({
                scrollTop: 0
            }, 500);
            return false;
        });
    });
});
