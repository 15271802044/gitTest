/*//向左移动效果
$(function(){
  var num = 0;//首先设置变量为0
  var timer = null;//控制器属性 用于关闭控制器

  $('ol li').click(function(){ //下方切换点点击事件
    var index = $(this).index(); //定义index等于 ol li 的元素位置

    num = index; //变量num等于index 即index也为变量 随num的变化而变化 反之亦相同
    $(this).addClass('act').siblings().removeClass('act'); //点击后 当前点击的ol li 增加class名act 其兄弟级删除class名act

    $('ul').stop().animate({'left':400*-num},500); //点击时让ul停止动画的效果 同时添加一个animate（动画） 向左移动值为400*-num 过渡时间500ms
  });

  $('.r').click(function(){ //为向右箭头绑定click事件
    num++; //设置变量+1
    if( num == 6 ){ //如果变量等于6 （因为有6张图片 click事件触发一次变量则+1 变量初始为0 则算下来为 0 1 2 3 4 5 分别为6张图的元素位置 第7次运算时则为6 满足条件）
      num = 0; //那么变量就归0
    }
    $('ol li').eq(num).addClass('act').siblings().removeClass('act'); //设置下方切换随着右箭头点击切换class名
    $('ul').stop().animate({'left':400*-num},500); //点击时让ul停止动画的效果 同时添加一个animate（动画） 向左移动值为400*-num 过渡时间500ms
  });

  $('.l').click(function(){ //为向左箭头绑定click事件
    num--; //设置变量-1
    if( num == -1 ){ //如果变量等于-1 （因为有6张图片 click事件触发一次变量则-1 变量初始为0 而0 1 2 3 4 5 分别为6张图的元素位置 那么值为为-1时跳到第6张 ）
      num = 5; //变量为5
    }
    $('ol li').eq(num).addClass('act').siblings().removeClass('act'); //设置下方切换随着左箭头点击切换class名
    $('ul').stop().animate({'left':400*-num},500); //点击时让ul停止动画的效果 同时添加一个animate（动画） 向左移动值为400*-num 过渡时间500ms
  });

  function autoPlay(){  //设置一个控制器 用于自动播放图片
    num++; //设置变量+1
    if( num == 6 ){ //如果变量等于6 （因为有6张图片 click事件触发一次变量则+1 变量初始为0 则算下来为 0 1 2 3 4 5 分别为6张图的元素位置 第7次运算时则为6 满足条件）
      num = 0; //变量等于0
    }
    $('ol li').eq(num).addClass('act').siblings().removeClass('act'); //设置下方切换随着控制器自动切换class名
    $('ul').stop().animate({'left':400*-num},500); //ul停止动画效果 同时添加一个animate（动画） 向左移动值为400*-num 过渡时间500ms

    console.log( num );//向web控制台输出变量值 方便调试用.
  }

  timer = setInterval(autoPlay,2000); //设置控制器 setInterval（可按照指定的周期（以毫秒计）来调用函数或计算表达式 它会不停地调用函数）2000ms调用一次 （代入即两秒切换一次ul的位置）

  $('.box').mouseover(function(){ //为整个banner轮播添加一个移入事件
    clearInterval(timer); //clearInterval 用于停用 setInterval 的控制器事件 移入时停用setInterval 的控制器事件
  }).mouseout(function(){ //同时为整个banner轮播添加一个移出事件
    timer = setInterval(autoPlay,2000); //移出时又调用控制器的 setInterval 属性
  });
});*/

//淡入淡出效果
$(function(){
  var num = 0;//首先设置变量为0
  var timer = null;//控制器属性 用于关闭控制器

  $('ol li').click(function(){ //下方切换点点击事件
    var index = $(this).index(); //定义index等于 ol li 的元素位置
    num = index; //变量num等于index 即index也为变量 随num的变化而变化 反之亦相同
    $(this).addClass('act').siblings().removeClass('act'); //点击后 当前点击的ol li 增加class名act 其兄弟级删除class名act
    $('ul li').eq(num).stop().animate({'opacity':'1'},500).siblings().stop().animate({'opacity':'0'},500)
  });

  $('.r').click(function(){ //为向右箭头绑定click事件
    num++; //设置变量+1
    if( num == 6 ){ //如果变量等于6 （因为有6张图片 click事件触发一次变量则+1 变量初始为0 则算下来为 0 1 2 3 4 5 分别为6张图的元素位置 第7次运算时则为6 满足条件）
      num = 0; //那么变量就归0
    }
    $('ol li').eq(num).addClass('act').siblings().removeClass('act'); //设置下方切换随着右箭头点击切换class名
    $('ul li').eq(num).stop().animate({'opacity':'1'},500).siblings().stop().animate({'opacity':'0'},500)
  });

  $('.l').click(function(){ //为向左箭头绑定click事件
    num--; //设置变量-1
    if( num == -1 ){ //如果变量等于-1 （因为有6张图片 click事件触发一次变量则-1 变量初始为0 而0 1 2 3 4 5 分别为6张图的元素位置 那么值为为-1时跳到第6张 ）
      num = 5; //变量为5
    }
    $('ol li').eq(num).addClass('act').siblings().removeClass('act'); //设置下方切换随着左箭头点击切换class名
    $('ul li').eq(num).stop().animate({'opacity':'1'},500).siblings().stop().animate({'opacity':'0'},500)
  });

  function autoPlay(){  //设置一个控制器 用于自动播放图片
    num++; //设置变量+1
    if( num == 6 ){ //如果变量等于6 （因为有6张图片 click事件触发一次变量则+1 变量初始为0 则算下来为 0 1 2 3 4 5 分别为6张图的元素位置 第7次运算时则为6 满足条件）
      num = 0; //变量等于0
    }
    $('ol li').eq(num).addClass('act').siblings().removeClass('act'); //设置下方切换随着控制器自动切换class名
    $('ul li').eq(num).stop().animate({'opacity':'1'},500).siblings().stop().animate({'opacity':'0'},500)

    console.log( num );//向web控制台输出变量值 方便调试用.
  }

  timer = setInterval(autoPlay,3000); //设置控制器 setInterval（可按照指定的周期（以毫秒计）来调用函数或计算表达式 它会不停地调用函数）2000ms调用一次 （代入即两秒切换一次ul的位置）

  $('.box').mouseover(function(){ //为整个banner轮播添加一个移入事件
    clearInterval(timer); //clearInterval 用于停用 setInterval 的控制器事件 移入时停用setInterval 的控制器事件
  }).mouseout(function(){ //同时为整个banner轮播添加一个移出事件
    timer = setInterval(autoPlay,3000); //移出时又调用控制器的 setInterval 属性
  });
});
