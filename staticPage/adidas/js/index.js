$(function(){
	//开始获取当前屏幕尺寸
	$(window).ready(function(){
		var w=window.screen.availWidth;
		var h= window.screen.availHeight;
		$("#null").parent().css("height",(h-84-60)+"px");
		$("#null.carousel-wrapper").css({
			"height":((w/1600)*1067)+"px",
			"top":"-"+((w/1600)*180)+"px"
		});
	});
	//搜索框获得焦点与失去焦点事件
	$("#searchInput,.textinput").focus(function(){
		$(this).css({
			'background':'url("css/images/searchInputbg.png") repeat-x'
		});
	});
	$("#searchInput,.textinput").blur(function(){
		$(this).css({
			'background':''
		});
	});

	//目录下拉框
	$(".categorymenu .topcat_list .topcat_list_item").hover(function(){
		$(this).css("background-color","#fff");
		$(this).find(".topcat_link").css({"color":"#000"});
	},function(){
		$(this).css("background-color","");
		$(this).find(".topcat_link").css({"color":""});
	});

	$(".categorymenu .topcat_list .a3.catalog-subnavigation").hover(function(){
		$(this).find(".topcat_spacer").css({
			"background":'url("css/images/megasprite.png") no-repeat right -34px'
		});
		$(this).find(".subcategorymenu").stop().slideDown(100);
	},function(){
		$(this).find(".topcat_spacer").css({
			"background":''
		});
		$(this).find(".subcategorymenu").stop().slideUp(100);
	});

	//时间圆点运动相关
	timehandle=setInterval("autochangeCircle()",20) ;
	//暂停和开始
	$(".pause.controls").click(function(){
		if($(this).attr("class")=="pause controls"){
			clearInterval(timehandle);
			$(this).addClass("active");
		}else{
			$(this).removeClass("active");
			timehandle=setInterval("autochangeCircle()",20) ;
		}
	});
	//点击圆点跳转到相应的页面
	$(".orbit-bullets li").click(function(){
		clearInterval(timehandle);
		bulletsNumpre=bulletsNum;
		bulletsNum=$(this).html();
		//circleDeg=0;
		//timehandle=setInterval("autochangeCircle()",20) ;//点击圆点后改变位置，重置时间，重新开始运动
		clickchangeCircle();
		$(".pause.controls").addClass("active");//点击圆点后改变位置，暂停状态

	});

	$(".block").hover(function(){
		$(this).find(".rollover").stop().animate({"opacity":"1","top":"-20px"},500);
		$(this).find(".link_wrapper").stop().show();
	},function(){
		$(this).find(".link_wrapper").stop().hide();
		$(this).find(".rollover").stop().animate({"opacity":"","top":""},500);
	});
});


var circleDeg=0;
var bulletsNum=0;
var timehandle;
//圆点运动相关
//自动变换
function autochangeCircle(){
	$(".rotator").css({"transform":"rotate("+circleDeg+"deg)"});
	circleDeg++;
	if(circleDeg<180){
		$(".rotator").removeClass("move");
		$(".mask").removeClass("move");
	}
	if(circleDeg>180){
		$(".rotator").addClass("move");
		$(".mask").addClass("move");
	}
	if(circleDeg>360){
		circleDeg=0;
		$(".rotator").removeClass("move");
		$(".mask").removeClass("move");
		bulletsNumpre=bulletsNum;
		bulletsNum++;
		if(bulletsNum>2){
			bulletsNum=0;
		}
		$(".timer.controls").css("left",(31+bulletsNum*17)+"px");//改变圆点位置
		$("#slides_link_wrapper .slide_link_wrapper").css({"display":"none"});//改变右下的文字
		$("#slides_link_wrapper .slide_link_wrapper").eq(bulletsNum).css({"display":"block"});
		$("#null .slide").eq(bulletsNum).css({"left":"1349px"});//改变图片显示
		$("#null .slide").eq(bulletsNumpre).animate({"left":"-1349px"},200);
		$("#null .slide").eq(bulletsNum).animate({"left":"0px"},200);
		
	}
}
//点击变换
var bulletsNumpre;
function clickchangeCircle(){
	$(".timer.controls").css("left",(31+bulletsNum*17)+"px");
	$(".rotator").css({"transform":"rotate("+circleDeg+"deg)"});
	if(bulletsNumpre<bulletsNum){
		$("#null .slide").eq(bulletsNum).css({"left":"1349px"});
		$("#null .slide").eq(bulletsNumpre).animate({"left":"-1349px"},200);
		$("#null .slide").eq(bulletsNum).animate({"left":"0px"},200);
	}else if(bulletsNumpre>bulletsNum){
		$("#null .slide").eq(bulletsNum).css({"left":"-1349px"});
		$("#null .slide").eq(bulletsNumpre).animate({"left":"1349px"},200);
		$("#null .slide").eq(bulletsNum).animate({"left":"0px"},200);
	}
	$("#slides_link_wrapper .slide_link_wrapper").css({"display":"none"});
	$("#slides_link_wrapper .slide_link_wrapper").eq(bulletsNum).css({"display":"block"});
	
}