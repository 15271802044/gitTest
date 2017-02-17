/*弹窗*/
$('#landing').click(function(){
     $('.background-body').css('display','block');
     $('#signin').css('display','block');
     $('#in').css('display','none');
     $('#up').css('display','block');
     $('.active-title').addClass('on').siblings().removeClass('on');
});
$('#registered').click(function(){
     $('.background-body').css('display','block');
     $('#signin').css('display','block');
     $('#up').css('display','none');
     $('#in').css('display','block');
     $('.xa-showsignup').addClass('on').siblings().removeClass('on');
});
$('.background-body').click(function(){
     $('.background-body').css('display','none');
     $('#signin').css('display','none');
});
$('.close').click(function(){
    $('.background-body').css('display','none');
    $('#signin').css('display','none');
    $("input[name='email']").val('').empty();//单纯清空
    $("input[name='password']").val('').empty();//单纯清空
    $('#email-p').html('').empty();
    $('#ps-p').html('').empty();
});
$('.xa-showsignup').click(function(){
    $('#up').css('display','none');
    $('#in').css('display','block');
    $(this).addClass('on').siblings().removeClass('on');
});
$('.active-title').click(function(){
    $('#in').css('display','none');
    $('#up').css('display','block');
    $(this).addClass('on').siblings().removeClass('on');
});
/*获取焦点失去焦点*/
$('.k').focus(function(){
   $(this).css('border-color','#98a1a6');
});
$('.k').blur(function(){
    $(this).css('border-color','#d0d6d9');
});
/*获取焦点失去焦点end*/
/*判断值是否为空*/
$('#email').bind('input propertychange',function(){
    var es = $('#email').val();
    if(es !== ''){
    $(this).css('color','#333');
    }else {
    $(this).css('color','#98a1a6');
    }
});
$('#ps').bind('input propertychange',function(){
    var es = $('#ps').val();
    if(es !== ''){
    $(this).css('color','#333');
    }else {
    $(this).css('color','#98a1a6');
    }
});
$('#phone').bind('input propertychange',function(){
    var es = $('#phone').val();
    if(es !== ''){
    $(this).css('color','#333');
    }else {
    $(this).css('color','#98a1a6');
    }
});
$('#vf').bind('input propertychange',function(){
    var es = $('#vf').val();
    if(es !== ''){
    $(this).css('color','#333');
    }else {
    $(this).css('color','#98a1a6');
    }
});
/*判断值是否为空end*/

/*弹窗end*/

/*登陆验证*/
$('#login').click(function(){
     if($('#email').val() == ''){
         $('#email-p').html('请输入正确的邮箱或手机号');
         return;
     };
     if($('#ps').val() == ''){
         $('#ps-p').html('请输入6-16位密码，区分大小写，不能使用空格！');
         return;
     };
     if($('#email').val() == '15271802044'){
         if($('#ps').val() == '123'){
             window.location.href='http://www.baidu.com';
         }else{
             $('#email-p').html('');
             $('#ps-p').html('密码错误');
         };
     }else{
         $('#email-p').html('用户名错误');
     };
});

/*登陆验证end*/

/*获取验证码*/
/*点击改变按钮状态，已经简略掉ajax发送短信验证的代码*/
$('#vfbtn').click(function(){
    var btn = $(this);
    var count = 60;
        if($('#phone').val() != ''){
            var resend = setInterval(function(){
                count--;
                     if (count > 0 && $('#phone').val() != ''){
                         $('#phone-p').html('');
                         btn.css('background','#e5e5e5');
                         btn.html(count+"秒后可重新获取");
                         $.cookie("captcha", count, {path: '/', expires: (1/86400)*count});
                     }else {
                         clearInterval(resend);
                         btn.html("获取验证码").removeAttr('disabled style');
                     }
            }, 1000);
            btn.attr('disabled',true).css('cursor','not-allowed');
        }else{
             $('#phone-p').html('请输入正确的邮箱或手机号');
        };
});
/*获取验证码end*/
