$(document).ready(function() {
    //判断localStorage
    window.onload=function(){
        switch(localStorage.name){
            case 'noSkin':
                changSkin.event['noSkin']();
                break;
            case 'skin1':
                changSkin.event['skin1']();
                break;
            case 'skin2':
                changSkin.event['skin2']();
                break;
            case 'skin3':
                changSkin.event['skin3']();
                break;
            default:
                break;
        }
    }
    //单列模式
    //换肤
    var changSkin={
        //初始化
        init:function(){
            this.render();
            this.bind();
        },
        //页面元素
        render:function(){
            this.skin=$('.skin');
            this.changeSkinBtn=$('.change-skin');
            this.upSkin=$('.up-skin');
            this.noSkin=$('.no-skin');
            this.skin1=$('.skin-box img').eq(0);
            this.skin2=$('.skin-box img').eq(1);
            this.skin3=$('.skin-box img').eq(2);
        },
        //绑定事件
        bind:function(){
            this.skin.click(this.event['upSkin']);
            this.changeSkinBtn.click(this.event['skinContainer']);
            this.upSkin.click(this.event['upSkin']);
            this.noSkin.click(this.event['noSkin']);
            this.skin1.click(this.event['skin1']);
            this.skin2.click(this.event['skin2']);
            this.skin3.click(this.event['skin3']);
        },
        //事件
        event:{
            skinContainer:function(){
                $('.change-skin-container').slideDown(100);
            },
            upSkin:function(){
                $('.change-skin-container').slideUp(100);
            },
            noSkin:function(){
                $('.skin').removeAttr('style');
                $('.logo').attr('src','./img/bdlogo.png');
                $('header').removeClass('change-header');
                localStorage.name = 'noSkin';
            },
            skin1:function(){
                $('.skin').css('background-image','url("./img/skin-bg1.jpg")');
                $('.logo').attr('src','./img/logo_white.png');
                $('header').addClass('change-header');
                localStorage.name = 'skin1';
            },
            skin2:function(){
                $('.skin').css('background-image','url("./img/skin-bg2.jpg")');
                $('.logo').attr('src','./img/logo_white.png');
                $('header').addClass('change-header');
                localStorage.name = 'skin2';
            },
            skin3:function(){
                $('.skin').css('background-image','url("./img/skin-bg3.jpg")');
                $('.logo').attr('src','./img/logo_white.png');
                $('header').addClass('change-header');
                localStorage.name = 'skin3';
            },
        }
    };
    //<header>右侧
    var header = {
        //初始化
        init: function() {
            this.render();
            this.bind();
        },
        //页面元素
        render: function() {
            this.set = $('.set');
            this.more = $('.outer');
        },
        //绑定
        bind: function() {
            this.set.hover(this.event['set']);
            this.more.hover(this.event['more']);
        },
        //事件
        event: {
            set: function() {
                $(".set-inner").toggle();
            },
            more: function() {
                $(".right ").toggle();
            }
        }
    };
    //搜索框
    var searchContainer = {
        //变量
        focus: '',
        //初始化
        init: function() {
            this.render();
            this.bind();
        },
        //元素
        render: function() {
            this.searchInput = $('.searchInput');
        },
        //绑定
        bind: function() {
            this.searchInput.focus(this.event['searchInputFocus']);
            this.searchInput.blur(this.event['searchInputBlur']);
        },
        //事件
        event: {
            searchInputFocus: function(event) {
                $(this).css('borderColor', '#4791ff');
                this.focus = true;
            },
            searchInputBlur: function() {
                $(this).css('borderColor', '#b8b8b8');
                $(this).hover(function() {
                        if (this.focus == false) {
                            $(this).css('borderColor', '#999999');
                        }
                    },
                    function() {
                        if (this.focus == false) {
                            $(this).css('borderColor', '#b8b8b8');
                        }
                    }
                );
                this.focus = false;
            }
        }
    };
    //回到顶部
    var goTop = {
        //初始化
        init: function() {
            var me = this;
            me.render();
            me.bind();
        },
        //页面元素
        render: function() {
            var me = this;
            me.goTop = $('#goTop');
        },
        //绑定
        bind: function() {
            var me = this;
            me.goTop.click(this.event['goTop']);
        },
        //事件
        event: {
            goTop: function() {
                $('html,body').animate({
                    scrollTop: 0
                }, 500);
            }
        }
    };
    //推荐内容
    var recommend = {
        //初始化
        init: function() {
            this.render();
            this.bind();
        },
        //页面元素
        render: function() {
            this.myFocus = $('.myFocus');
            this.focus = $('.focus');
            this.tab = $('.tab li');
        },
        //绑定
        bind: function() {
            this.myFocus.click(this.event['myFocus']);
            this.focus.hover(this.event['focusHover']);
            this.focus.click(this.event['focusClick']);
            this.tab.hover(this.event['tabHover']);
            this.tab.click(this.event['tabClick']);
        },
        //事件
        event: {
            myFocus: function() {
                $('.myFocusInner').slideToggle('fast');
                $('.myFocus').toggleClass('myFocusClick');
            },

            focusHover: function() {
                $('.focus').toggleClass('tabOver');
            },
            focusClick: function() {
                $('.focus').addClass('tabClick');
                $('.focus>span').removeClass();
                $('.focus>span').addClass('focusIconClick');
                $('.tab li').removeClass('tabClick');
                $('.middleInner').removeClass('middleInnerShow');
                $('.middleInner').eq(0).addClass('middleInnerShow');
                $('.fixedTop').removeClass('fixedTop');
                $('.logo-top').hide();
                $('.logoTop').removeClass('logoTop');
                $('.main form').css('marginTop', '0');
                $('.middleTop').removeClass('middleTop');
            },
            tabHover: function() {
                $(this).toggleClass('tabOver');
            },
            tabClick: function() {
                var index = $(this).index();
                $('.tab li').removeClass('tabClick');
                $('.focus').removeClass('tabClick');
                $('.focus>span').removeClass();
                $('.focus>span').addClass('focusIcon');
                $(this).addClass('tabClick');
                $('.middleInner').removeClass('middleInnerShow');
                $('.middleInner').eq(index + 1).addClass('middleInnerShow');
            }
        } //事件
    };
    //滚动屏幕触发的事件
    var scrollWindow = {
        //变量
        t:'',
        //初始化
        init: function() {
            this.render();
            this.bind();
        },
        //页面元素
        render:function(){
            this.window=$(window);
        },
        //绑定
        bind:function(){
            this.window.scroll(this.event['scroll']);
        },
        //事件
        event:{
            scroll: function() {
                var height = $(window).scrollTop();
                //tab在顶端
                if (height >= 275) {
                    if (height < this.t) { //向上,导航出现
                        $('.tabInner').addClass('tabTopInner');
                        $('.tabTop').show();
                        $('.tabInner').show();
                        $('.tabTopInner').offset({
                            left: (document.body.clientWidth - 890) * 0.5
                        });
                    } else if (height > this.t) { //向下，导航消失
                        $('.tabTop').hide();
                        $('.tabTopInner').hide();
                    } else {
                        $('.tabTopInner').offset({
                            left: (document.body.clientWidth - 890) * 0.5
                        });
                    }
                    this.t = height;
                } else if (height < 231) {
                    $('.tabTop').hide();
                    $('.tabInner').removeClass('tabTopInner');
                }
                //返回顶部
                if (height != 0) {
                    $('#goTop').css('display', 'block');
                    //搜索框到达顶部
                    if (height >= 173) {
                        $('.searchTop').addClass('fixedTop');
                        $('.search').addClass('logoTop');
                        $('.main form').css('marginTop', '-38px');
                        $('.logo-top').show();
                        $('#middle').addClass('middleTop');
                        $('footer').addClass('middleTop');
                        $('.logoTop').offset({
                            left: (document.body.clientWidth - 890) * 0.5
                        });
                    } else {
                        $('.searchTop').removeClass('fixedTop');
                        $('.search').removeClass('logoTop');
                        $('.main form').css('marginTop', '0')
                        $('.logo-top').hide();
                        $('#middle').removeClass('middleTop');
                        $('footer').removeClass('middleTop')
                    }
                } else {
                    $('#goTop').css('display', 'none');
                }
                waterfall.init();
            }
        }
    };
    //瀑布流
    var waterfall = {
        //初始化
        init: function() {
            var index=$(".middleInnerShow").index();
            if (index == 4) {
                waterfall.event();
            }
        },
        //图片内容
        dataImg: {
            0: [{
                'src': '1.jpg',
                'title': '十月围城',
                'type': 'film'
            }, {
                'src': '2.jpg',
                'title': '芈月传',
                'type': 'teleplay'
            }, {
                'src': '7.jpg',
                'title': '大力神',
                'type': 'film'
            }, {
                'src': '8.jpg',
                'title': '越狱第一季',
                'type': 'teleplay'
            }],
            1: [{
                'src': '19.jpg',
                'title': '奔跑吧兄弟 第三季',
                'type': 'variety'
            }, {
                'src': '27.jpg',
                'title': '琅琊榜',
                'type': 'teleplay'
            }, {
                'src': '28.jpg',
                'title': '爱探险的朵拉第七季',
                'type': 'animation'
            }, {
                'src': '29.jpg',
                'title': '花千骨',
                'type': 'teleplay'
            }],
            2: [{
                'src': '30.jpg',
                'title': '圣斗士星矢之冥王神话',
                'type': 'animation'
            }, {
                'src': '31.jpg',
                'title': '小宇宙',
                'type': 'film'
            }, {
                'src': '32.jpg',
                'title': '精武风云:陈真',
                'type': 'film'
            }, {
                'src': '33.jpg',
                'title': '大秧歌',
                'type': 'teleplay'
            }],
            3: [{
                'src': '34.jpg',
                'title': '英国佬',
                'type': 'film'
            }, {
                'src': '35.jpg',
                'title': '夏洛特烦恼',
                'type': 'film'
            }, {
                'src': '36.jpg',
                'title': '奔跑吧兄弟电影版',
                'type': 'film'
            }, {
                'src': '37.jpg',
                'title': '昆虫总动员',
                'type': 'film'
            }]
        },
        //事件
        event: function() {
            if (document.body.clientHeight <= innerHeight + $(window).scrollTop()) {
                //把新的div添加到最后
                var videoOuter = $('<div>').addClass('videoOuter').appendTo('.videoInner');
                //随机添加图片           
                var i = Math.floor(Math.random() * 4);
                //添加图片
                $.each(this.dataImg[i], function(index, value) {
                    var videoBox = $('<div>').addClass('videoBox').appendTo('.videoOuter:last');
                    var videoBoxA = $('<a href="" title="">').appendTo(videoBox);
                    var videoText = $('<div>').addClass('videoText').appendTo(videoBox);
                    var videoBar = $('<a href="">').addClass('videoBar').appendTo(videoBox);
                    videoBar.addClass($(value).attr('type'));
                    $('<img>').attr({
                        'src': 'img/video/' + $(value).attr('src'),
                        'title': $(value).attr('title')
                    }).appendTo(videoBoxA);
                    $('<a href>').text($(value).attr('title')).appendTo(videoText);
                });
            }
        }
    };
    //执行初始化
    function init() {
        //换肤
        changSkin.init();
        //<header>右侧
        header.init();
        //搜索框
        searchContainer.init();
        //返回顶部
        goTop.init();
        //推荐内容
        recommend.init();
        //滚动屏幕
        scrollWindow.init();
    }
    init();
});
