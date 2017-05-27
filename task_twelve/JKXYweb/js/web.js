
// 用单例来实现
var webPage = {
    // 执行函数
    init: function() {
        this.eleBind();
        this.navScroll();
        this.navTab();
        this.navTabT();
        this.student();
        this.part15();
        this.ScrollDiv();
    },
    // 创建滚动数据
    data: {
        divTop: {
            part1: $("#part1").offset().top,
            part2: $("#part4").offset().top - 100,
            part3: $("#part5").offset().top - 100,
            part4: $("#part7").offset().top - 100,
            part5: $("#part8").offset().top - 100,
            part6: $("#part10").offset().top - 100,
            part7: $("#part12").offset().top - 100,
            part8: $("#part14").offset().top - 100,
            part9: $("#part15").offset().top - 100
        },
        clientHeight: $(window).height()
    },
    // 表单提交和导航栏点击跳转
    eleBind: function() {
        $('#btnSub15').on('click', this.subMsg15);
        $('#btnSubNav').on('click', this.subMsgNav);
        $('#playA').on('click', this.videoA);
        $("#teacher ul li ").on('click', this.teacher);
        $('.part1_li').on("click", { "id": "part1" }, this.gotop);
        $('.part4_li').on("click", { "id": "part4" }, this.gotop);
        $('.part5_li').on("click", { "id": "part5" }, this.gotop);
        $('.part7_li').on("click", { "id": "part7" }, this.gotop);
        $('.part8_li').on("click", { "id": "part8" }, this.gotop);
        $('.part10_li').on("click", { "id": "part10" }, this.gotop);
        $('.part12_li').on("click", { "id": "part12" }, this.gotop);
        $('.part14_li').on("click", { "id": "part14" }, this.gotop);
    },
    // 顶部和底部导航栏出现
    navScroll: function() {
        //监听滚动条
        $(window).scroll(function() {
            var scr = $(this).scrollTop();
            //顶部导航
            if (scr > 20) {
                $(".top-banner").stop().fadeIn();
            } else {
                $(".top-banner").stop().fadeOut();
            }
            for (var i = 1; i <= 7; i++) {
                webPage.loadingDiv4("#q" + i);
            }
            //底部报名入口
            var clientHeight = webPage.data.clientHeight;
            var scrOk = webPage.data.divTop.part2 + 170 - clientHeight;
            if (scr > scrOk) {
                $(".bottomNav").css({ "position": "fixed" });
                $("#part4").css({ "padding-top": "90px" });
            } else if (scr < scrOk) {
                $(".bottomNav").css({ "position": "static" });
                $("#part4").css({ "padding-top": "0px" })
            }
            //导航条换色
            switch (true) {
                case (webPage.data.divTop.part1 <= scr && scr <= webPage.data.divTop.part2):
                    //alert("asd")
                    $(".top-banner_ul").children("li.mok").removeClass("mok");
                    $("#part1_li").addClass("mok");
                    break;
                case (webPage.data.divTop.part2 <= scr && scr <= webPage.data.divTop.part3):
                    $(".top-banner_ul").children("li.mok").removeClass("mok");
                    $("#part4_li").addClass("mok");
                    break;
                case (webPage.data.divTop.part3 <= scr && scr <= webPage.data.divTop.part4):
                    $(".top-banner_ul").children("li.mok").removeClass("mok");
                    $("#part5_li").addClass("mok");
                    break;
                case (webPage.data.divTop.part4 <= scr && scr <= webPage.data.divTop.part5):
                    $(".top-banner_ul").children("li.mok").removeClass("mok");
                    $("#part7_li").addClass("mok");
                    break;
                case (webPage.data.divTop.part5 <= scr && scr <= webPage.data.divTop.part6):
                    $(".top-banner_ul").children("li.mok").removeClass("mok");
                    $("#part8_li").addClass("mok");
                    break;
                case (webPage.data.divTop.part6 <= scr && scr <= webPage.data.divTop.part7):
                    $(".top-banner_ul").children("li.mok").removeClass("mok");
                    $("#part10_li").addClass("mok");
                    break;
                case (webPage.data.divTop.part7 <= scr && scr <= webPage.data.divTop.part8):
                    $(".top-banner_ul").children("li.mok").removeClass("mok");
                    $("#part12_li").addClass("mok");
                    break;
                case (webPage.data.divTop.part8 <= scr && scr <= webPage.data.divTop.part9):
                    $(".top-banner_ul").children("li.mok").removeClass("mok");
                    $("#part14_li").addClass("mok");
                    break;
            }
        })
    },
    // 监听滚动条
    ScrollDiv: function() {
        $(window).scroll(function() {
            var scr = $(this).scrollTop();
            var scrB = webPage.data.divTop.part4 + 100 - webPage.data.clientHeight * 0.1;
            if (scrB < scr) {
                webPage.AnimationDiv7();
            }
        })
    },
    // part4的侧边滚动颜色变化
    loadingDiv4: function(e) {
        var win_h = webPage.data.clientHeight * 0.5;
        var Top = $(e).offset().top;
        var scrTop = $(window).scrollTop();
        if (scrTop > Top - win_h) {
            $(e).addClass("qb");
        } else {
            $(e).removeClass("qb");
        }
    },
    // part7的动画实现
    AnimationDiv7: function() {
        $("#part_7_con").addClass("conOn");
        var x = 1;
        setTimeout(function() {
            for (var i = 0; i <= 6; i++) {
                (function(i) {
                    setTimeout(function() {
                        webPage.part7Addclass(i)
                    }, i * 500);
                })(i);
            }
        }, 2000)
    },
    // part7加入class
    part7Addclass: function(i) {
        var imgId = "#part_7_img_" + i;
        var spanId = "#part_7_span_" + i;
        $(imgId).addClass("imgOn");
        $(spanId).addClass("spanOn");
    },
    // 动画滑动到当前id
    gotop: function(e) {
        var id = e.data.id;
        //console.log(e.data.id)
        $("html,body").animate({ scrollTop: $("#" + id).offset().top + 10 }, 500);
    },
    // 学员轮播图
    student: function() {
        var swiper = new Swiper('.swiper-container_stu', {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            spaceBetween: 30,
            centeredSlides: true,
            autoplay: 2000,
            loop: true,
            autoplayDisableOnInteraction: false
        });
    },
    // 微信图片的二维码出现
    navTab: function() {
        $("#wxico").hover(function() {
            $(".wxe").stop().fadeIn()
        }, function() {
            $(".wxe").stop().fadeOut()
        })
    },
    // 微信图片的二维码出现
    navTabT: function() {
        $("#topWxico").hover(function() {
            $(".wxte").stop().fadeIn()
        }, function() {
            $(".wxte").stop().fadeOut()
        })
    },
    // 老师信息的点击效果
    teacher: function() {
        var index = $("#teacher ul li ").index(this);
        $("#teacher_box > div").eq(index).fadeIn().siblings().hide();
        var left = index * 300 + "px";
        $(".tgd").css({ "left": left })
    },
    // 视屏播放
    videoA: function() {
        var videoA = document.getElementById('videoA'),
            playA = $('#playA');
        playA.css('display', 'none');
        videoA.style.display = 'block';
        videoA.play();
    },
    // 表单的点击效果
    part15: function() {
        var star = $(".star");
        star.bind("click", function(e) {
            var t = $(".noneDiv ");
            var inputBox = $(e.target).parent();
            inputBox.find(t).slideDown();
            e.stopPropagation();
        });
        //  获取到li标签的val;
        $(".xlul").click(function(e) {
            var t = $(".noneDiv ");
            var inputBox = $(e.target).parent();
            inputBox.find(t).slideDown();
            if (e.target.id == 'xl') {
                var t = $("#input_box_zk .noneDiv");
                t.slideUp(100)
            }
            e.stopPropagation();
        })

        $(document).click(function(e) {
            var t = $(".noneDiv ");
            $(document).find(t).slideUp();
        })
        var obj_lis = $("#input_box_xl li");
        var valu;
        for (i = 0; i < obj_lis.length; i++) {
            obj_lis[i].onclick = function() {
                valu = this.innerHTML
                $("#xl").val(valu)
                $(".noneDiv").slideUp();
            }
        }
        var zk_obj_lis = $("#input_box_zk li");
        var zk_valu;
        for (i = 0; i < zk_obj_lis.length; i++) {
            zk_obj_lis[i].onclick = function() {
                zk_valu = this.innerHTML
                $("#zk").val(zk_valu)
                $(".noneDiv").slideUp();
            }
        }
    },
    // 表单的数据提交
    subMsg: function(username, tel, xl, zk) {
        var _this = $(this);
        var tel = tel;
        var username = name;
        var xl = xl;
        var zk = zk;
        var data = {
            'uname': $.trim(username),
            'tel': $.trim(tel),
            'class_id': $("#class_id").val(),
            'class_name': $("#class_name").val(),
            'slug': $("#web").val(),
            'source_url': location.href,
            'degree':$.trim(xl),
            'now_state':$.trim(zk)
        }
        if ($.trim(tel) == '') {
            alert('请输入您的手机号');
        } else if (webPage.isMobile($.trim(tel)) == false) {
            alert('请输入正确的手机号');
        } else {
            var url = "http://j.jikexueyuan.com/newtrain/collectinfo";
            $.ajax({
                type: "post",
                url: url,
                data: data,
                dataType: "json",
                success: function(res) {
                    if (res.status == 1) { //成功
                        alert(res.msg);
                        _this.css('cursor', 'default');
                        _this.off('click', this.subMsg);
                    } else if (res.status == 0) { // 失败
                        alert(res.msg);
                        _this.css('cursor', 'pointer');
                    } else if (res.status == 2) { // 失败
                        alert(res.msg);
                        _this.css('cursor', 'default');
                        _this.off('click', this.subMsg);
                    }
                },
                error: function() {
                    alert('网络出现错误，请刷新重试！');
                    console.log(data)
                }
            });
        }
    },
    subMsgNav: function() {
        var tel = $("#navTel").val();
        var username = $("#navName").val();
        webPage.subMsg(username, tel);
    },
    subMsg15: function() {
        var tel = $("#_15Tel").val();
        var username = $("#_15Name").val();
        var xl = $("#xl").val();
        var zk = $("#zk").val();
        webPage.subMsg(username, tel, xl, zk);
    },
    // 验证手机号码
    isMobile: function(tel) {
        return /^((\(\d{2,3}\))|(\d{3}\-))?(1[34578]\d{9})$/.test(tel);
    }
};
// 函数自执行
$(function() {
    // 执行init函数
    webPage.init();
});
