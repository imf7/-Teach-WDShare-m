var currentPageIsAjaxNew = true;// 记录当前是否为Ajax加载的新页面【非缓存】，尽在生命周期pageInit之前有效


// Ajax 请求结束，无论是成功还是失败
$(window).on("pageLoadComplete", function(e, pageId, $page) {
    currentPageIsAjaxNew = true;
});



// 相关提示事件注册
var alertClickFlag = false;// alertClickEvent会在每页的pageInit时初始化一次，所以需要用标示来记录是否已经初始化
function alertClickEvent() {
    if ( alertClickFlag ) { return false };

    var $menu = $('#panel-right-menu');
    $menu.on('click', '.menu-job', function() {
      $.alert('敬请期待！');
    });

    $(document).on('click', 'a', function () {
        var that = this;
        var _href = $(this).attr("_href");
        
        if ( _href && ((_href.indexOf("http://") > -1) || (_href.indexOf("https://") > -1)) ) {
            $.confirm('您正在访问Demo之外的链接，<br />确定跳出吗?', function () {
                window.location = $(that).attr("_href");
            });

            return false;
        }
      
    });

    // 文章终极页点赞
    $(document).on('click', '.end-page-zan, .end-page-bottom-zan', function () {
        $.alert('恭喜您，点赞成功！');
    });


    // 文章终极页点击分享
    $(document).on('click', '.header-top-share', function () {
      var buttons1 = [
        {
          text: '请选择',
          label: true
        },
        {
          text: '微信、QQ分享',
          bold: true,
          // color: 'danger',
          onClick: function() {
            $.alert("请通过右上角的微信分享按钮进行分享！");
          }
        },
        {
          text: '微博分享',
          onClick: function() {
            $.alert("微博分享成功！");
          }
        },
        {
          text: '复制链接地址',
          onClick: function() {
            $.alert("地址复制成功！");
          }
        }
      ];
      var buttons2 = [
        {
          text: '取消',
          bg: 'danger'
        }
      ];
      var groups = [buttons1, buttons2];
      $.actions(groups);
    });


    alertClickFlag = true;
};
// 设置外部链接的属性，用于提示外链
function resetLinkAttr() {
    $("a").each(function() {
        var _href = $(this).attr("href");
        if ( _href && ((_href.indexOf("http://") > -1) || (_href.indexOf("https://") > -1)) ) {
            $(this).attr("_href", _href);
            $(this).attr("href", "javascript:;").addClass("external");
        }
    });
};



// 新页面中的组件初始化完毕
$(document).on("pageInit", function(e, pageId, page) {
    // 设置外部链接的属性，用于提示外链
    resetLinkAttr();

    // 相关点击提示
    alertClickEvent();


    // 滚动区域在滚动时记录下滚动位置到DOM节点
    $(".native-scroll").on("scroll", function() {
        $(this).attr("data-scrollTop", $(this).scrollTop());
    });
    // 修正页面已滚动过的位置【仅新加载的页面在这里修正滚动位置】
    if ( currentPageIsAjaxNew ) {
        resetScrollTop();
    }


    // 点击顶部title时返回顶部
    $(document).on("click", ".title", function() {
        $(".native-scroll").each(function() {
            $(this).scrollTop(0);
        });
    });

    document.title = $("h1.title").html();

    currentPageIsAjaxNew = false;
});
// testAjax();



// 新页面的DOM插入当前页面之后，动画执行之前
$(document).on("pageAnimationStart", function(e, pageId, $page) {
    // 切换路由前关闭侧栏
    $.closePanel();

    // 修正页面已滚动过的位置【缓存页面在这个周期进行滚动位置修正】
    if ( !currentPageIsAjaxNew ) {
        setTimeout(function() {
            resetScrollTop();
        }, 100);
    }

});


// 修正页面已滚动过的位置
function resetScrollTop() {
    $(".native-scroll").each(function() {
        var _top;
        if ( !$(this).attr("data-scrollTop") ) {
            $(this).attr("data-scrollTop", 0);
        }
        _top = $(this).attr("data-scrollTop");
        $(this).scrollTop(_top);
    });
};



$.init();


