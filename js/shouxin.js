var $oLis = $("#top-link li");
var $conWindows = $(".con-windows");
//点击导航栏选项
$oLis.on("click", function (e) {
    var target = e.target || e.srcElement;
    var tarTag = target.className.toUpperCase();

    if (tarTag === "WINDOWS") {
        $(".con-windows").stop().show().siblings().stop().hide();
    }
    if (tarTag === "MAC") {
        $(".con-mac").stop().show().siblings().stop().hide();
    }
    if (tarTag === "IOS") {
        $(".con-ios").stop().show().siblings().stop().hide();
    }
    if (tarTag === "ANDROID") {
        $(".con-android").stop().show().siblings().stop().hide();
    }

});

//记录其实页
var nowPage = 0;
//入场动画数组
var inAnimateArr = [function () {
}, function () {
}, function () {
}, function () {
}];
//出场动画数组
var outAnimateArr = [function () {
}, function () {
}, function () {
}, function () {
}];
//设置进出场动画
//开始进场动画
inAnimateArr[0] = function () {
    $(".line").velocity({
        "margin-top": "210px"
    });

    $(".lamp").velocity({
        "opacity": "1",
        "translateX": "100px"
    }, 1500);

    $(".computer").velocity({
        "opacity": "1",
        "teanslateZ": "200px"
    }, 500);

    $(".download").velocity({
        "opacity": "1",
        "background-positionX": "0",
        "background-positionY": "-544px",
        "teanslateZ": "200px",
        "top": "318px"
    }, 1000);

    $(".cup").velocity({
        "opacity": "1",
        "translateY": "100px"
    }, 1500);

    $(".penCase").velocity({
        "opacity": "1",
        "translateY": "100px"
    }, 1500);

};

//1出场动画
outAnimateArr[0] = function () {
    $(".computer").velocity({
        "translateZ": "-200px",
        "opacity": "0"
    }, 1000);

    $(".download").velocity({
        "background-positionX": "0",
        "background-positionY": "-592px",
        "top": "340px"
    }, 1000);
    $(".line").velocity({
        "margin-top": "-190px"

    });

    $(".lamp").velocity({
        "translateX": "-100px",
        "opacity": "0"
    }, 1500);
    $(".cup").velocity({
        "translateY": "-100px",
        "opacity": "0"
    }, 1500);
    $(".penCase").velocity({
        "translateY": "-100px",
        "opacity": "0"
    }, 1500);

};

//2进场动画
inAnimateArr[1] = function () {
    $(".leaf-big").css("opacity",1).velocity({
        "rotateY" : "180deg",
        "rotateX":"360deg",
        "translateZ":"1001px"
    },0).velocity("reverse", 1000);


    $(".text").css("opacity",1).velocity({
        "translateZ": "1001px"
    }, 0).velocity("reverse", 1000);


    $(".leaf-small").velocity({
        "opacity": "1",
        "rotateZ": "-0deg",
        "translateY": "100",
        "translateX": "550px"
    }, 2000).velocity({
        "opacity": "1",
        "rotateZ": "30deg",
        "translateY": "150px",
        "translateX": "300px"
    }, 2000).velocity({
        "opacity": "0",
        "rotateZ": "30deg",
        "translateY": "-150px",
        "translateX": "-300px"
    }, 2000);
};

//2出场动画
outAnimateArr[1] = function () {
    $(".leaf-big").velocity({
        "rotateZ": "360deg"
    },100,function () {
        $(this).velocity({"rotateZ" : "0px" ,"opacity":"0"},0);
    });

    $(".leaf-small").stop().velocity({
        "opacity": "0"
    },0);
    $(".text").velocity({
        "rotateZ": "360deg"
    },100,function () {
        $(this).velocity({"rotateZ" : "0px" ,"opacity":"0"},0);
    });

};
//3进场动画
inAnimateArr[2] = function () {
    $(".circle").css("opacity",1).velocity({
        "rotateZ":"360deg"
    },{duration: 2000, loop:true});

    $(".triangle").css("opacity",1).velocity({
        "rotateZ":"360deg"
    },{duration: 2000, loop:true});

    $(".rectangle").css("opacity",1).velocity({
        "rotateZ":"360deg"
    },{duration: 2000, loop:true});



    $(".text-two").css("opacity",1).velocity({
        "translateZ": "1001px"
    }, 0).velocity("reverse", 1000);
};
//3出场动画
outAnimateArr[2] = function () {
    $(".circle").css("opacity","0");

    $(".triangle").css("opacity","0");

    $(".rectangle").css("opacity","0");



    $(".text-two").velocity({
        "rotateZ": "360deg"
    },100,function () {
        $(this).velocity({"rotateZ" : "0px" ,"opacity":"0"},0);
    });
};

inAnimateArr[0]();

//鼠标滚轮事件
$(document).mousewheel(function (e, delta) {
    e.preventDefault();
    var oldPage = nowPage;
    nowPage -= delta;
    if (nowPage > 2) {
        nowPage = 0;
    } else if (nowPage < 0) {
        nowPage = 2;
    }
    if (oldPage != nowPage) {
        outAnimateArr[oldPage]();
        inAnimateArr[nowPage]();

        $(".index li").eq(nowPage).addClass("bg").siblings().removeClass("bg");
    }


});
