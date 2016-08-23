$(function(){
	//导航栏的JS
	$(".NavA").hover(function(){
		$(this).find(".menuContent").stop(true,false).fadeIn();
	},function(){
		$(this).find(".menuContent").stop(true,false).fadeOut();
	});
	$(".menuA2List").hover(function(){
		$(this).find(".menuContentA").stop(true,false).fadeIn();
	},function(){
		$(this).find(".menuContentA").stop(true,false).fadeOut();
	});
	//导航栏结束

	//显示回到顶栏
	$(window).scroll(function(){
		var m=$(window).height();
		var n=$(this).scrollTop();
		if(m<n){
			$("#toTopContain").show();
		}else{
			$("#toTopContain").hide();
		}
	});

	//焦点图的JS
	//点击小圆点切换图片
	$(".spot").click(function(){
		var n=$(this).html();
		var post=$(this).parent().parent();
		var postName=post.attr("class");
		clearInterval(timeHandle);
		//将一个置为可见
		post.find(".commonContent"+n).css({
			"z-index":"2",
			"opacity":"1"
		});
		post.find(".spot"+n).css({
			"background-color":" rgba(0,0,0,0.9)",
			"cursor":"default"
		});
		picNum1=n;
		post.attr("currentPic",n);

		//将另一个置为不可见
		n=n-1;
		if(n<=0){
			n=2;
		}
		post.find(".commonContent"+n).css({
			"z-index":"1",
			"opacity":"0"
		});
		post.find(".spot"+n).css({
			"background-color":" rgba(0,0,0,0.6)",
			"cursor":"pointer"
		});
		timeHandle=setInterval("autoChangePic()",5000);
		
	});
	$(".sspot").click(function(){
		clearInterval(timeHandle);
		var n=$(this).html();
		//三屏轮转
		$(".cnContent").css({
			"z-index":"1",
			"opacity":"0"
		});
		$(".sspot").css({
			"background-color":" rgba(0,0,0,0.6)",
			"cursor":"pointer"
		});
		$(".cnContent"+n).css({
			"z-index":"2",
			"opacity":"1"
		});
		$(".sspot"+n).css({
			"background-color":" rgba(0,0,0,0.9)",
			"cursor":"default"
		});
		picNum2=n;
		$(this).parent().parent().attr("currentPic",picNum2);
		timeHandle=setInterval("autoChangePic()",5000);
	});
	//鼠标晃入幻灯片，显示左右按键
	$(".picShowArea").hover(function(){
			$(this).find(".pre-back").css("opacity","1");
		},function(){
			$(this).find(".pre-back").css("opacity","");
	});
	//点击左右箭头切换图片
	$(".pre-back").click(function(){
		var parent1=$(this).parent();
		var n=parent1.attr("currentPic");
		var parentName=parent1.attr("class");
		var currentButton=$(this).attr("class");
		clearInterval(timeHandle);
		if(parentName!="cnPicShow picShowArea")
		{
			//置为可见
			if(currentButton=="pre-back back-pic"){
				n=n-1;
				if(n<=0){
					n=2;
				}
			}
			if(currentButton=="pre-back pre-pic"){
				n++;
				if(n>=3){
					n=1;
				}
			}
			parent1.find(".commonContent"+n).css({
				"z-index":"2",
				"opacity":"1"
			});
			parent1.find(".spot"+n).css({
				"background-color":" rgba(0,0,0,0.9)",
				"cursor":"default"
			});
			//重新设置picNum1
			picNum1=n;
			parent1.attr("currentPic",picNum1);

			//将另一个置为不可见
			n=n-1;
			if(n<=0){
				n=2;
			}
			parent1.find(".commonContent"+n).css({
				"z-index":"1",
				"opacity":"0"
			});
			parent1.find(".spot"+n).css({
				"background-color":" rgba(0,0,0,0.6)",
				"cursor":"pointer"
			});
			//重新开始自动播放
			timeHandle=setInterval("autoChangePic()",5000);
		}else{
			if(currentButton=="pre-back back-pic"){
				n=n-1;
				if(n<=0){
					n=3;
				}
			}
			if(currentButton=="pre-back pre-pic"){
				n++;
				if(n>=4){
					n=1;
				}
			}
			//重新开始自动播放
		
			picNum2=n;
			parent1.attr("currentPic",picNum2);
			$(".cnContent").css({
				"z-index":"1",
				"opacity":"0"
			});
			$(".sspot").css({
				"background-color":" rgba(0,0,0,0.6)",
				"cursor":"pointer"
			});
			$(".cnContent"+n).css({
				"z-index":"2",
				"opacity":"1"
			});
			$(".sspot"+n).css({
				"background-color":" rgba(0,0,0,0.9)",
				"cursor":"default"
			});
			timeHandle=setInterval("autoChangePic()",5000);
		}
	});
	timeHandle=setInterval("autoChangePic()",5000);
});
var timeHandle;
var picNum1=2;
var picNum2=2;

function autoChangePic(n,m){
	//三屏轮转
	$(".cnContent").css({
		"z-index":"1",
		"opacity":"0"
	});
	$(".sspot").css({
		"background-color":" rgba(0,0,0,0.6)",
		"cursor":"pointer"
	});
	$(".cnContent"+picNum2).css({
		"z-index":"2",
		"opacity":"1"
	});
	$(".sspot"+picNum2).css({
		"background-color":" rgba(0,0,0,0.9)",
		"cursor":"default"
	});
	picNum2=picNum2+1;
	if(picNum2>=4){
		picNum2=1;
	}
	//置为可见
	$(".commonContent"+picNum1).css({
		"z-index":"2",
		"opacity":"1"
	});
	$(".spot"+picNum1).css({
		"background-color":" rgba(0,0,0,0.9)",
		"cursor":"default"
	});
	$(".picShowArea").attr("currentPic",picNum1);

	//将另一个置为不可见
	picNum1=picNum1-1;
	if(picNum1<=0){
		picNum1=2;
	}
	$(".commonContent"+picNum1).css({
		"z-index":"1",
		"opacity":"0"
	});
	$(".spot"+picNum1).css({
		"background-color":" rgba(0,0,0,0.6)",
		"cursor":"pointer"
	});
}