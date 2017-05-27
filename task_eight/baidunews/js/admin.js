$(document).ready(function() {
    var $newsTable = $('#newsTable tbody');


    refreshNews();
    // 添加新闻

    $('#btnsubmit').click(function(e) {


        e.preventDefault();
        // 输入判断
        if ($('#newstitle').val() === '' || $('#newsimg').val() === '' ||
            $('#newssrc').val() === '' || $('#newstime').val() === '') {
            if ($('#newstitle').val() === '') {
                $('#newstitle').parent().addClass('has-error');
            } else {
                $('#newstitle').parent().removeClass('has-error');
            }

            if ($('#newsimg').val() === '') {
                $('#newsimg').parent().addClass('has-error');
            } else {
                $('#newsimg').parent().removeClass('has-error');
            }

            if ($('#newssrc').val() === '') {
                $('#newssrc').parent().addClass('has-error');
            } else {
                $('#newssrc').parent().removeClass('has-error');
            }

            if ($('#newstime').val() === '') {
                $('#newstime').parent().addClass('has-error');
            } else {
                $('#newstime').parent().removeClass('has-error');
            }
        } else {
            var $jsonNews = {
                newstitle: $('#newstitle').val(),
                newstime: $('#newstime').val(),
                newsimg: $('#newsimg').val(),
                newssrc: $('#newssrc').val(),
                newstype: $('#newstype').val()
            };
            // 提交添加
            $.ajax({
                url: '../baidunews/server/insert.php',
                type: 'post', //发送出去
                data: $jsonNews,
                datatype: 'json',
                success: function(data) {
                    // 提交后后重新刷新
                        $('#newstitle').val(''),
                        $('#newstime').val(''),
                        $('#newsimg').val(''),
                        $('#newssrc').val(''),
                        $('#newstype').val('')
                    refreshNews();

                }

            })
        }


    });

    // 删除新闻的功能

    var deleteId = null;
    $newsTable.on('click', '.btn-danger', function(e) {
        e.preventDefault();
        $('#deleteModal').modal('show');
        // 查找到当前父级的所有集合再eq出对应的id
        deleteId = $(this).parent().prevAll().eq(4).html();
        console.log(deleteId);
    });
    $('#deleteModal #confirmDelete').click(function(e) {

        if (deleteId) {
            $.ajax({
                url: '../baidunews/server/delete.php',
                type: 'post',
                data: { newsid: deleteId },
                success: function(data) {
                    console.log('删除成功');
                    $("#deleteModal").modal('hide');
                    refreshNews();
                }

            })
        }

    });


    //修改新闻的功能

    var updateId = null;
    $newsTable.on('click', '.btn-primary', function(e) {
        $('#updateModal').modal('show');
        // 查找到当前父级的所有集合再eq出对应的id
        updateId = $(this).parent().prevAll().eq(4).html();
        console.log(updateId);
        $.ajax({
            url: '../baidunews/server/curnews.php',
            type: 'get',
            datatype: 'json',
            data: { newsid: updateId },
            success: function(data) {

                // 拆解数组并赋值
                $('#unewstitle').val(data[0].newstitle);
                $('#unewstype').val(data[0].newstype);
                $('#unewssrc').val(data[0].newssrc);
                $('#unewsimg').val(data[0].newsimg);
                // time返回来是一个数组类型的字符串，用空格分开后去左半边的部分即可
                var utime = data[0].newstime.split(' ')[0];
                $('#unewstime').val(utime);


            }
        });
    });


    $('#updateModal #confirmUpdate').click(function(e) {

        // 点击返回一个ajax的数据
        $.ajax({
            url: '../baidunews/server/update.php',
            type: 'post',
            data: {
                newstitle: $('#unewstitle').val(),
                newstime: $('#unewstime').val(),
                newsimg: $('#unewsimg').val(),
                newssrc: $('#unewssrc').val(),
                newstype: $('#unewstype').val(),
                id: updateId
            },
            success: function(data) {
                $('#updateModal').modal('hide');
                refreshNews();

            }
        })

    });


    function refreshNews() {
        //empty tbody
        $newsTable.empty();

        $.ajax({
                url: '../baidunews/server/getnews.php',
                type: 'get',
                datatype: 'json',
                // data:{newstype:type},
                success: function(data) {

                    data.forEach(function(item, index, array) {
                        var $tdid = $('<td>').html(item.id);
                        var $tdtype = $('<td>').html(item.newstype);
                        var $tdtitle = $('<td>').html(item.newstitle);
                        var $tdimg = $('<td>').html(item.newsimg);
                        var $tdsrc = $('<td>').html(item.newssrc);
                        var $tdtime = $('<td>').html(item.newstime);
                        var $tdctrl = $('<td>');
                        var $btnupdate = $('<buttom>').addClass('btn-primary btn-xs').html('修改');
                        var $btndelete = $('<buttom>').addClass('btn-danger btn-xs').html('删除');
                        $tdctrl.append($btnupdate, $btndelete);
                        var $tRow = $('<tr>');
                        $tRow.append($tdid, $tdtype, $tdtitle, $tdsrc, $tdtime, $tdctrl);
                        $newsTable.append($tRow)
                    })
                }
            }

        )
    }

});
