$(document).ready(function() {
    refreshNews("精选");


    $('nav a').click(function(e) {

        e.preventDefault();
        var type = $(this).text();
        refreshNews(type);
    });



});


function refreshNews(type) {
    var $lists = $('article ul');
    //清除原有的
    $lists.empty();
    $.ajax({
        url: "../baidunews/server/getnews.php",
        type: 'get',
        datatype: 'json',
        data: { newstype: type },
        success: function(data) {
            data.forEach(function(item, index, array) {
                //重新建立结构
                var $list = $('<li></li>').addClass('news-list').prependTo($lists);
                var $newsimg = $('<div></div>').addClass('newsimg').appendTo($list);
                var $img = $('<img>').attr('src', item.newsimg).appendTo($newsimg);
                var $newscontent = $('<div></div>').addClass('newscontent').appendTo($list);
                var $h1 = $('<h1></h1>').html(item.newstitle).appendTo($newscontent);
                var $p = $('<p></p>').appendTo($newscontent);
                var $newstime = $('<span></span>').addClass('newstime').html(item.newstime).appendTo($p);
                var $newscrc = $('<span></span>').addClass('newssrc').html(item.newssrc).appendTo($p);



            })
        }
    })
}
