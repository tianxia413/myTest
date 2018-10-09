    var address = "http://192.168.20.5:8080/smscenter";
    function getAddress(){
        return address;
    }
    $('.nav a').click(function () {
        $(this).parent().parent().parent().css("top","-10px");
    });

    $(document).scroll(function() {   //页面加载时，获取滚动条初始高度
        var distance = $(document).scrollTop();  //获取滚动条初始高度的值 ：0
        if(distance<25){
            $(".nav").css("top","45px")
        }else{
            $(".nav").css("top","-10px")
        }
    });
layui.use(['form','laydate','table','layer','jquery'], function(){
    var form = layui.form;
    form.render();
    //监听提交
    form.on('submit(formDemo)', function(data){
        layer.msg(JSON.stringify(data.field));
        return false;
    });
    var $ = layui.jquery, layer = layui.layer;
    var num;
    $('.jian').click(function(){
        var n=$(this).next().val();
        n=parseInt(n)-1;
        if(n==0){
            return;
        }
        $(this).next().val(n);
        var tr=$(this).parent().parent().parent();
        var num=tr.find('.num').val();
        var price=tr.find('.price span').text();
        var total=(price*num).toFixed(2);
        tr.find('td:last-child span').text(total);
    });

    $('.add').click(function () {
        var num=$(this).prev().val();
        num=parseInt(num)+1;
        if(num==0){
            return;
        }
        $(this).prev().val(num);
        var tr=$(this).parent().parent().parent();
        var num=tr.find('.num').val();
        var price=tr.find('.price span').text();
        var total=(price*num).toFixed(2);
        tr.find('td:last-child span').text(total);

    });
    var laydate = layui.laydate;
    var nowTime = new Date().valueOf();
    var max = null;
    var start = laydate.render({
        elem: '#start_time',
        type: 'date',
        btns: ['clear', 'confirm'],
        done: function (value, date) {
            endMax = end.config.max;
            end.config.min = date;
            end.config.min.month = date.month - 1;
        }
    });
    var end = laydate.render({
        elem: '#end_time',
        type: 'date',
        done: function (value, date) {
            if ($.trim(value) == '') {
                var curDate = new Date();
                date = {'date': curDate.getDate(), 'month': curDate.getMonth() + 1, 'year': curDate.getFullYear()};
            }
            start.config.max = date;
            start.config.max.month = date.month - 1;
        }
    });

    //    确定按钮被点击
    $('.sure').click(function () {
        $(this).parent().siblings('.trip').children('.msg').remove();
        layui.use('layer', function () {
            var layer = layui.layer;
            layer.closeAll();
        });
    });
    //删除按钮被点击
    $('.close').click(function () {
        $(this).parent().siblings('.trip').children('.msg').remove();
        layui.use('layer', function () {
            var layer = layui.layer;
            layer.closeAll();
        });
    });
        var str="<tr>" +
            "<td class='no'></td>" +
            "<td>" +
            "<input type='text'' class='h30 w100'>" +
            "</td>" +
            "<td>" +
            "<select class='w120 h25'>" +
            "<option value='1'' selected='selected'>男</option>" +
            "<option value='2' >女</option>" +
            "</select>" +
            "</td>" +
            "<td>" +
            "<select class='w120 h25'>" +
            "<option value='1' selected='selected'>身份证</option>" +
            "<option value='2' >护照</option>" +
            "<option value='3' >赴台证</option>" +
            "<option value='4' >其他</option>" +
            "</select>" +
            "</td>" +
            "<td>" +
            "<input type='text' class='h30 w160'>" +
            "</td>" +
            "<td>" +
            "<input type='text' class='h30 w100'>" +
            "</td>" +
            "<td>" +
            "<input type='text' class='h30 w100' value='健康'>" +
            "</td>" +
            "<td>" +
            "<span class='del'>删除</span>" +
            "</td>" +
            "</tr>";
        var str1="<tr>"+
            "<td class='no'></td>"+
            "<td>"+
            "<input type='text' class='h30 w120 start_time aaa"+count+"' placeholder='yy-mm-dd'>"+
            "</td>"+
            "<td>"+
            "<input type='text'' class='h30 w120'>"+
            "</td>"+
            "<td>"+
            "<input type='text'' class='h30 w170'>"+
            "</td>"+
            "<td>"+
            "<input type='text'' class='h30 w170'>"+
            "</td>"+
            "<td>"+
            "<input type='text'' class='h30 w120' name='money' id='adultNum'>"+
            "</td>"+
            "<td>"+
            "<input type='text'' class='h30 w12'  name='money' id='adultMoney'>"+
            "</td>"+
            "<td>"+
            "<input type='text'' class='h30 w120'>"+
            "</td>"+
            "<td>"+
            "<span class='del'>删除</span>"+
            "</td>"+
            "</tr>";
        var str3="<tr>"+
            "<td class='no'></td>"+
            "<td>"+
            "<input type='text'' class='h30 w170'>"+
            "</td>"+
            "<td>"+
            "<input type='text' class='h30 w50' >"+
            "</td>"+
            "<td>"+
            "<input type='text'' class='h30 w50'>"+
            "</td>"+
            "<td>"+
            "<input type='text'' class='h30 w50'>"+
            "</td>"+
            "<td>"+
            "<input type='text'' class='h30 w90'>"+
            "</td>"+
            "<td>"+
            "<input type='text'' class='h30 w110'>"+
            "</td>"+
            "<td>"+
            "<input type='text'' class='h30 w110'>"+
            "</td>"+
            "<td>"+
            "<input type='text'' class='h30 w110'>"+
            "</td>"+
            "<td>"+
            "<input type='text' class='h30 w140 start_time' placeholder='yy-mm-dd'>"+
            "</td>"+
            "<td>"+
            "<input type='text' class='h30 w140 start_time' placeholder='yy-mm-dd'>"+
            "</td>"+
            "<td>"+
            "<span class='del'>删除</span>"+
            "</td>"+
            "</tr>";
            var str4="<tr>"+
                "<td class='no'></td>"+
                "<td>"+
                "<input type='text' class='h30 w140 start_time' placeholder='yy-mm-dd'>"+
                "</td>"+
                "<td>"+
                "<input type='text'' class='h30 w140'>"+
                "</td>"+
                "<td>"+
                "<input type='text'' class='h30 w140'>"+
                "</td>"+
                "<td>"+
                "<input type='text'' class='h30 w140'>"+
                "</td>"+
                "<td>"+
                "<select class='w170 h25'>"+
                "<option value='1' selected='selected'>单程</option>"+
                "<option value='2' >往返</option>"+
                "</select>"+
                "</td>"+
                "<td>"+
                "<span class='del'>删除</span>"+
                "</td>"+
                "</tr>";
            var str5="<tr>"+
                "<td class='no'></td>"+
                "<td>"+
                "<input type='text' class='h30 w170'>"+
                "</td>"+
                "<td>"+
                "<input type='text' class='h30 w170'>"+
                "</td>"+
                "<td>"+
                "<input type='text' class='h30 w170'>"+
                "</td>"+
                "<td>"+
                "<input type='text' class='h30 w170'>"+
                "</td>"+
                "<td>"+
                "<span class='del'>删除</span>"+
                "</td>"+
                "</tr>";
            var str6="<tr>"+
                "<td class='no'></td>"+
                "<td>"+
                "<input type='text' class='h30 w170'>"+
                "</td>"+
                "<td>"+
                "<input type='text' class='h30 w140'>"+
                "</td>"+
                "<td>"+
                "<input type='text' class='h30 w140'>"+
                "</td>"+
                "<td>"+
                "<input type='text' class='h30 w140'>"+
                "</td>"+
                "<td>"+
                "<select class='w170 h25'>"+
                "<option value='1' selected='selected'>普通舱</option>"+
                "<option value='2' >公务舱</option>"+
                "<option value='3' >头等舱</option>"+
                "</select>"+
                "</td>"+
                "<td>"+
                "<input type='text' class='h30 w170'>"+
                "</td>"+
                "<td>"+
                "<input type='text' class='h30 w140'>"+
                "</td>"+
                "<td>"+
                "<span class='del'>删除</span>"+
                "</td>"+
                "</tr>";
        var str7="<tr>"+
            "<td class='no'></td>"+
            "<td>"+
            "<input type='text' class='h30 w170'>"+
            "</td>"+
            "<td>"+
            "<input type='text' class='h30 w50'>"+
            "</td>"+
            "<td>"+
            "<input type='text' class='h30 w50'>"+
            "</td>"+
            "<td>"+
            "<input type='text' class='h30 w50'>"+
            "</td>"+
            "<td>"+
            "<input type='text' class='h30 w140 start_time' placeholder='yy-mm-dd'>"+
            "</td>"+
            "<td>"+
            "<input type='text' class='h30 w140 start_time' placeholder='yy-mm-dd'>"+
            "</td>"+
            "<td>"+
            "<input type='text' class='h30 w120'>"+
            "</td>"+
            "<td>"+
            "<input type='text' class='h30 w120'>"+
            "</td>"+
            "<td>"+
            "<span class='del'>删除</span>"+
            "</td>"+
            "</tr>";
    var count=0;
    var infNum=0;
    var hotelNum=0;
    var shuttNum=0;
    var agentNum=0;
    var portfolioNum=1;
    var hotelReservNum=1;
    var counts=0;
    $(".botton").click(function () {
        var  id=$(this).siblings("table").attr("id");
        if(id=="shopping"){
            count++;
            add(id,str1,count);
            total(id);
            $("#"+id).find("input[name='money']").blur(function() {
                var price_1= $.trim($("#adultNum").val());
                var price_2 = $.trim($("#adultMoney").val());
                if(price_1 != ""&&price_1 >=0 && price_2 != ""){
                    var peice_total=parseInt(price_1)+parseInt(price_2);
                }
            });
            t

        }else if(id=="hotel"){
            hotelNum++;
            add(id,str3,hotelNum);
        }else if(id=="shuttleService"){
            shuttNum++;
            add(id,str4,shuttNum);
        }else if(id=="agentVisa"){
            agentNum++;
            newadd(id,str1,agentNum);
        }else if(id=="portfolioService"){
            portfolioNum++;
            newadd(id,str6,portfolioNum)
        }else if(id=="hotelReservation"){
            hotelReservNum++;
            add(id,str7,hotelReservNum);
        }else if(id=="Willing"){
            count++;
            add(id,str1,count);
        }else {
            infNum++;
            newadd(id,str,infNum)
        }
        function add(id,str,Num){
            if($("#"+id).find("tbody tr:first").html()==undefined){
                $("#"+id).find("tbody").append(str).find(".start_time").addClass("aaa"+Num).parent().siblings(".no").text(Num);
                date(Num);
            }else{
                $("#"+id).find("tbody tr:first").clone().appendTo($("#"+id).find("tbody")).find(".start_time").addClass("aaa"+Num).parent().siblings(".no").text(Num);
                date(Num);
                del(id);
            }
        }
        function newadd(id,str,Num){
            if ($("#" + id).find("tbody tr:first").html() == undefined) {
                $("#" + id).find("tbody").append(str).find(".no").text(Num);
            } else  {
                $("#" + id).find("tbody tr:first").clone().appendTo($("#" + id).find("tbody")).find("td:first-child").text(Num);
                del(id);
            }
        }
        function del(id) {
                $("#" + id).find('.del').click(function () {
                    $(this).parent().parent().remove();
                    total(id);
                });
            }
        });
        function date(id) {
            var laydate = layui.laydate;
            var nowTime = new Date().valueOf();
            var max = null;
            laydate.render({
                elem: '.aaa'+id,
                istime: true,
                istoday: true,
                type: 'datetime',
                event: 'focus',
                btns: ['clear', 'now', 'confirm'],
                done: function (value, date) {
                    endMax = end.config.max;
                    end.config.min = date;
                    end.config.min.month = date.month - 1;
                }
            });
        }
        var len=null;
        function total(id) {
            len = $("#" + id).find("tbody tr").length;
            $("#" + id).siblings(".bb").find(".total").val(len);
        }
});

