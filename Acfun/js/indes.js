$(function(){
	//button按下时显示效果
	$(".searchButton").mousedown(function(){
		 $(this).css({"background-position":"0 -123px"});		
	});
	$(".searchButton").mouseup(function(){
		 $(this).css({"background-position":"0 -88px"});		
	});
	//显示回到顶栏
	$(window).scroll(function(){
		var m=$(window).height();
		var n=$(this).scrollTop();
		if(m<n){
			$("#toTopContainer").fadeIn(700);
		}else{
			$("#toTopContainer").fadeOut(700);
		}
	});
	$(".toTop").click(function(){
		$('body,html').animate({scrollTop:0},1000);
		return false;
	});

	//弹出浏览信息，投稿，个人信息等
	$("#guide_history").hover(function(){
		$(this).css({"height":"70px"});
		$(".history").mouseover(function(){
			$("#guide_historyArea").show();
		});
		$(".history").mouseout(function(){
			$("#guide_historyArea").hide();
		});
	},function(){
		$(this).css({"height":""});
		
	});
	$("#guide_post").hover(function(){
		$(this).css({"height":"70px"});
		$(".post").mouseover(function(){
			$("#guide_postArea").show();
		});
		$(".post").mouseout(function(){
			$("#guide_postArea").hide();
		});
	},function(){
		$(this).css({"height":""});
		
	});
	$("#guide_avatarArea").hover(function(){
		$(this).css({"height":"70px"});
		$(".avatar").mouseover(function(){
			$("#guide_userAva").show();
		});
		$(".avatar").mouseout(function(){
			$("#guide_userAva").hide();
		});
	},function(){
		$(this).css({"height":""});
		
	});
	
	//导航栏
	// $(".navA").hover(function(){
	// 	var curShowNav=$(this).find(".channel").attr("class").split("channel ")[1];
	// 	$("#sub-guideMengban").stop(true,true).slideDown();
	// 	$(this).find(".channel").stop(true,true).show();	
	// 	if(curShowNav=="anime" || curShowNav=="artical" || curShowNav=="sumspecial"){
	// 		$(this).find(".largeNav").css({"color":"#1FA4C7"});		
	// 	}else if(curShowNav=="music"){
	// 		$(this).find(".largeNav").css({"color":"#58BBB8"});	
	// 	}else if(curShowNav=="game" || curShowNav=="more" ){
	// 		$(this).find(".largeNav").css({"color":"#95BE3E"});	
	// 	}else if(curShowNav=="joy" || curShowNav=="science" ){
	// 		$(this).find(".largeNav").css({"color":"#FF9101"});
	// 	}else if(curShowNav=="physical"){
	// 		$(this).find(".largeNav").css({"color":"#E84C3D"});	
	// 	}else if(curShowNav=="film"){
	// 		$(this).find(".largeNav").css({"color":"#E04270"});	
	// 	}
	// },function(){
	// 	$(this).find(".channel").stop(true,false).hide();
	// 	$("#sub-guideMengban").stop(true,false).slideUp(300);
	// 	$(this).find(".largeNav").css({"color":""});	
	// });

	$("#navLeft .navA").each(function(){
	    var that = $(this);
	        that.hoverDelay({
	        hoverDuring: 400,
            outDuring: 400,
            hoverEvent: function(){
               	var curShowNav=that.find(".channel").attr("class").split("channel ")[1];
				//$("#sub-guideMengban").stop(true,false).slideDown(200);
				that.find(".channel").stop(true,false).show(500);	
				if(curShowNav=="anime" || curShowNav=="artical" || curShowNav=="sumspecial"){
					that.find(".largeNav").css({"color":"#1FA4C7"});		
				}else if(curShowNav=="music"){
					that.find(".largeNav").css({"color":"#58BBB8"});	
				}else if(curShowNav=="game" || curShowNav=="more" ){
					that.find(".largeNav").css({"color":"#95BE3E"});	
				}else if(curShowNav=="joy" || curShowNav=="science" ){
					that.find(".largeNav").css({"color":"#FF9101"});
				}else if(curShowNav=="physical"){
					that.find(".largeNav").css({"color":"#E84C3D"});	
				}else if(curShowNav=="film"){
					that.find(".largeNav").css({"color":"#E04270"});	
				}       
            },
            outEvent: function(){
               that.find(".channel").stop(true,false).hide(100);
				//$("#sub-guideMengban").stop(true,false).slideUp(500);
				that.find(".largeNav").css({"color":""});
            }
        });
	});
	$("#navLeft").each(function(){
  		  var that = $(this);
	        that.hoverDelay({
	        outDuring: 300,
            outDuring: 300,
            hoverEvent: function(){
				$("#sub-guideMengban").stop(true,false).slideDown(200);     
            },
            outEvent: function(){
				$("#sub-guideMengban").stop(true,false).slideUp(500);
            }
        });
	});

		//更换专题图片
	timeHandle=setInterval("lightboxShow()",2000);
	$(".lightboxLeftTag").hover(function(){
		clearInterval(timeHandle);
		clearTimeout(timeHandle2);
		$(".lightboxGuide").stop(true,false);
		picNum=$(this).attr("class").split("unit-")[1];
		timeHandle2=setTimeout("lightboxShow()",500);
		$(".lightboxGuide").mouseout(function(){
			clearInterval(timeHandle);
			clearTimeout(timeHandle2);
			timeHandle=setInterval("lightboxShow()",2000);
		});
	},function(){
		
	});
	//鼠标靠上专题图片，右上角显示更多图标
	$(".lightboxPic").each(function(){
  		  var that = $(this);
	        that.hoverDelay({
            outDuring: 600,
            hoverEvent: function(){
				that.parent().find(".moreZhuanti").animate({"width":"32px","height":"32px","opacity":"1"},500);     
            },
            outEvent: function(){
				that.parent().find(".moreZhuanti").animate({"width":"0","height":"0","opacity":"0"},500); 
            }
        });
	});

	//tab切换
	$(".tab").click(function(){
		$(this).parent().find(".tab").attr("class","tab");
		$(this).attr("class","tab active")
		var pppparent=$(this).parent().parent().parent().parent();
		var pageNum=$(this).attr("tabid");
		pppparent.find(".page").hide();
		pppparent.find(".page"+pageNum).show();
	});
	//显示视频全部标题和时间
	$(".videoBox").each(function(){
	    var that = $(this);
	    that.hoverDelay({
            outDuring: 500,
            hoverEvent: function(){
                that.find(".time").animate({"opacity":"1"},100);
			    that.find(".info_hover").stop(true,false).slideUp(50);
				that.find(".videoTitle").animate({"height":"45px"},400);
            },
            outEvent: function(){
                that.find(".time").animate({"opacity":"0"},100);
				that.find(".info_hover").stop(true,true).delay(400).slideDown(300);
				that.find(".videoTitle").animate({"height":"16px"},300);
            }
        });
	});
	// $(".videoBox").hover(function(){
	// 	$(this).find(".time").animate({"opacity":"1"},500);
	// 	$(this).find(".info_hover").stop(true,true).slideUp(50);
	// 	$(this).find(".videoTitle").animate({"height":"45px"},400);
	// },function(){
	// 	$(this).find(".time").animate({"opacity":"0"},100);
	// 	$(this).find(".info_hover").stop(true,true).delay(400).slideDown(300);
	// 	$(this).find(".videoTitle").animate({"height":"16px"},300);
	// });


	///每周新番
	showTodayAnime();
	$(".weekStyle").click(function(){
		var aarray=$(this).parent().parent().find(".quanbuxinfan").children("a");
		var curDate=$(this).attr("date-value");
		var selectedDate=$(".curXF").attr("date-value");
		var curpp=$(".curXF").parent().parent();
		if(curDate!=selectedDate){
			//将现在显示的条目缩小
			curpp.find(".xfUpdateTool").hide();
			curpp.animate({"height":"28px"},500);
			curpp.find(".xfUpdateRight").animate({"height":"28px"},500);
			//将点击的条目扩大
			$(this).parent().parent().find(".xfUpdateRight").animate({"height":"196px"},500);
			$(this).parent().parent().animate({"height":"196px"},500);
			$(".curXF").removeClass("curXF");
			$(this).addClass("curXF");
			if(aarray.length>8){
				$(this).parent().parent().find(".xfUpdateTool").show();
			}
		}
		
	});
	//右侧类翻页按钮
	$(".btn-scroll").click(function(){
		var curDire=$(this).attr("curDirection");
		if(curDire=="down"){
			var aarray=$(this).parent().parent().find(".quanbuxinfan").children("a");
			var length=(aarray.length-8)*24;
			$(this).parent().parent().find(".quanbuxinfan").animate({"top":"-"+length+"px"},500);
			$(this).find(".scrollbtnicon").css({"background-position":"-288px -120px"});
			$(this).animate({"bottom":"170px"},{easing: 'easeOutBounce', duration: 600 });
			$(this).attr("curDirection","up");
		}else if(curDire=="up"){
			$(this).parent().parent().find(".quanbuxinfan").animate({"top":"0px"},500);
			$(this).find(".scrollbtnicon").css({"background-position":"-313px -119px"});
			$(this).animate({"bottom":"4px"},{easing: 'easeOutBounce', duration: 600 });
			$(this).attr("curDirection","down");
		}
		
	});

	//文章前的小方块
	$("#block_artical .page .unit").each(function(){
	    var that = $(this);
	    that.hoverDelay({
            outDuring: 200,
            hoverEvent: function(){
               	var curHoverNum=that.attr("class").split("unit-")[1];
               	if(curHoverNum!=0){
               		$("#block_artical").find(".eff").animate({"top":curHoverNum*29+55+"px"},{easing: 'easeOutBounce', duration: 600 });
            	}
            },
            outEvent: function(){
               
            }
        });
	});

	//在追剧中显示视频蒙版
	$(".zhuijuPicArea").hover(function(){
		$(this).find(".icon").animate({"opacity":"1"},100);
	},function(){
		$(this).find(".icon").animate({"opacity":"0"},100);
	});
	//footer随机表情
	randomBiaoqing();
	$(".avatar-ac-footer").click(function(){
		var numCount=$(this).find(".rightTop").html();
		numCount++;
		clickNum++;
		$(this).find(".rightTop").html(numCount);
		if(numCount>0){
			$(this).find(".rightTop").show();
			if(clickNum>=50){
				randomBiaoqing();
				clickNum=0;
			}
		}else{
			$(this).find(".rightTop").hide();
		}
	});

});

var clickNum=0;
var picNum=1;
var timeHandle;
var timeHandle2;

function randomBiaoqing(){
	var n=Math.floor(Math.random()*54);
	if(n<10){
		n="0"+n;
	}
	$("#changeBiaoqing").attr("src","images/biaoqing/"+n+".png");
}

function showTodayAnime(){
	var todayweek=new Date().getDay();
	$(".xfUpdate"+todayweek).find(".weekStyle").addClass("curXF");
	$(".xfUpdate"+todayweek).css({"height":"196px"});
	$(".xfUpdate"+todayweek).find(".xfUpdateRight").css({"height":"196px"});
	var aarray=$(".xfUpdate"+todayweek).find(".quanbuxinfan").children("a");
	if(aarray.length>8){
		$(".xfUpdate"+todayweek).find(".xfUpdateTool").show();
	}
}


function lightboxShow(){
	var imgSrc=$(".lightboxLeft").find(".unit-"+picNum).attr("data-src");
	$(".lightboxPicStyle").attr("src",imgSrc);
	var h1content=$(".unit-"+picNum).find("h1").html();
	var h3content=$(".unit-"+picNum).find("h3").html();
	
	$(".lightboxGuide").find("h1").html(h1content);
	$(".lightboxGuide").find("h3").html(h3content);
	$(".lightboxGuide").animate({"top":picNum*64+1},{easing: 'easeOutBounce', duration: 600 });
	picNum++;
	if(picNum>4){
		picNum=0;
	}
}


(function($){
    $.fn.hoverDelay = function(options){
        var defaults = {
            hoverDuring: 200,
            outDuring: 200,
            hoverEvent: function(){
                $.noop();
            },
            outEvent: function(){
                $.noop();    
            }
        };
        var sets = $.extend(defaults,options || {});
        var hoverTimer, outTimer;
        return $(this).each(function(){
            $(this).hover(function(){
                clearTimeout(outTimer);
                hoverTimer = setTimeout(sets.hoverEvent, sets.hoverDuring);
            },function(){
                clearTimeout(hoverTimer);
                outTimer = setTimeout(sets.outEvent, sets.outDuring);
            });    
        });
    }      
})(jQuery);