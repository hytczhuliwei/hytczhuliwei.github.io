$(function(){

	$("#sosoTar").hover(function(){
		$(this).css("border","2px solid #3599d9");
	},function(){
		$(this).css("border","");
	});

	$(".sosoTarLeftDownLI").hover(function(){
		$(this).css("background-color","#d2e1f1");
	},function(){
		$(this).css("background-color","");
	});

	$("#sosoTarLeft").hover(function(){
		$("#sosoTarLeftDown").slideDown();
	},function(){
		$("#sosoTarLeftDown").slideUp();
	});

	$("#tanchuTips").hover(function(){
		var panduan=$(this).parent().find("#lm2RightContent1").css("display");
		if(panduan=="none"){
			$(this).css("background-position","-86px -80px");
		}
	},function(){
		var panduan=$(this).parent().find("#lm2RightContent1").css("display");
		if(panduan=="none"){
			$(this).css("background-position","");
		}
	});

	$("#tanchuTips").click(function(){
		var panduan=$(this).parent().find("#lm2RightContent1").css("display");
		if(panduan=="none"){
			$("#tanchuTips").css({
				"left":"-284px",
				"background-position":"-86px -162px"
			});
			$("#lm2RightContent1").show();
		}else {
			$("#tanchuTips").css({
				"left":"-15px",
				"background-position":"-86px 0px"
			});
			$("#lm2RightContent1").hide();
		}
	});
	$("#lm2Right1").hover(function(){
	},function(){
		$("#lm2RightContent1").hide();
		$("#tanchuTips").css({
			"background-position":"-86px 0px",
			"left":"-15px"
		});
	});
	$(".notCurrentTitle").hover(function(){
		$(this).parent().find(".currentTitle").attr("class","notCurrentTitle");
		$(this).attr("class","currentTitle");

		var other1=$(this).parent().parent().parent().find(".notShowContent");
		var self1=$(this).parent().parent().parent().find(".showContent");
		other1.css("display","block");
		self1.css("display","none");

		var other2=$(this).parent().parent().find(".notShowContent");
		var self2=$(this).parent().parent().find(".showContent");
		other2.css("display","block");
		self2.css("display","none");

		var other3=$(this).parent().parent().find("#lm7LContent1");
		var self3=$(this).parent().parent().find("#lm7LContent2");
		other3.css("display","none");
		self3.css("display","block");

		},function(){
		
	});
	$(".currentTitle").hover(function(){
		$(this).parent().find(".currentTitle").attr("class","notCurrentTitle");
		$(this).attr("class","currentTitle");

		var other1=$(this).parent().parent().parent().find(".notShowContent");
		var self1=$(this).parent().parent().parent().find(".showContent");
		other1.css("display","none");
		self1.css("display","block");

		var other2=$(this).parent().parent().find(".notShowContent");
		var self2=$(this).parent().parent().find(".showContent");
		other2.css("display","none");
		self2.css("display","block");

		var other3=$(this).parent().parent().find("#lm7LContent1");
		var self3=$(this).parent().parent().find("#lm7LContent2");
		other3.css("display","block");
		self3.css("display","none");

		},function(){		
	});
	$(".lm2R3CLTitlespecial").next().show();
	$(".lm2R3CLTitle").mouseover(function(){
		$(this).parent().parent().find(".lm2R3CLTitle").attr("class","lm2R3CLTitle");
		$(".lm2R3CDesInner").hide();

		$(this).attr("class","lm2R3CLTitle lm2R3CLTitlespecial")
		$(".lm2R3CLTitlespecial").next().show();
	});
	$(".zhishu1").show();
	$(".lm2LL2ContentTitle").mouseover(function(){
		var num=$(this).attr("zhengquanid");
		$(".lm2LL2ContentTitle").css({
			"color":"#458fce",
			"background-color":"#fff"
		});
		$(this).css({
			"color":"#fff",
			"background-color":"#458fce"
		});
		$(".lm2LL2Content2").hide();
		$(".zhishu"+num).show();
	});

	timeHandle=setInterval("layoutPicShow()",5000);

	$("#layoutPicContentL1").click(function(){
		$("#layoutPicContentMiddle").stop(true,false);
		layoutPicShowLeftfast();
	});
	$("#layoutPicContentL2").click(function(){
		$("#layoutPicContentMiddle").stop(true,false);
		layoutPicShowRightfast();
	});
	
	$(".layoutPicContentMiddleLI").hover(function(){
		clearInterval(timeHandle);
		$("#layoutPicContentMiddle").stop(true,false);
		},function(){
		timeHandle=setInterval("layoutPicShow()",5000);		
	});

	//淘宝广告
	timeHandle2=setInterval("taobaoPicShow()",5000);
	$(".lm9RContentLI").hover(function(){
		clearInterval(timeHandle2);
		curTaoId=$(this).attr("curPicId");
		taobaoPicShow();
	},function(){
		timeHandle2=setInterval("taobaoPicShow()",5000);
	});
	
});
var timeHandle2;
var curTaoId=0;
var allTaobaoPic=new Array('url("images/lm9Right/T1YCKuFateXXXXPav4-200-250.jpg")','url("images/lm9Right/T14L9uFd4cXXXXPav4-200-250.jpg")','url("images/lm9Right/T11bSwFm8bXXXXPav4-200-250.jpg")',
		'url("images/lm9Right/T14L9uFd4cXXXXPav4-200-250.jpg")','url("images/lm9Right/T1YCKuFateXXXXPav4-200-250.jpg")','url("images/lm9Right/T1PSywFbtaXXXXPav4-200-250.jpg")','url("images/lm9Right/T1YCKuFateXXXXPav4-200-250.jpg")',
		'url("images/lm9Right/T13PVyFaVbXXXXPav4-200-250.jpg")','url("images/lm9Right/T11bSwFm8bXXXXPav4-200-250.jpg")','url("images/lm9Right/T1pQKuFf0eXXXXPav4-200-250.jpg")','url("images/lm9Right/T1pQKuFf0eXXXXPav4-200-250.jpg")',
		'url("images/lm9Right/T11OGuFoxdXXXXPav4-200-250.jpg")','url("images/lm9Right/T1hCStFXxfXXXXPav4-200-250.jpg")','url("images/lm9Right/T1DHytFk0fXXXXPav4-200-250.jpg")','url("images/lm9Right/T1TrawFglbXXXXPav4-200-250.jpg")','url("images/lm9Right/T14L9uFd4cXXXXPav4-200-250.jpg")');
		


var timeHandle;


function taobaoPicShow(){
		$("#lm9RContentMiddlePic").css({
			"background-image":allTaobaoPic[curTaoId]
		});
		$(".lm9RContentLI").css("background-color","#fff");
		$(".lm9RCLiId"+curTaoId).css("background-color","#C51617");
		curTaoId++;
		if(curTaoId>=16){
			curTaoId=0;
		}
}

function layoutPicShow(){
  		html0=$("#layoutPicContentMiddle").find("li").eq(0).html();
	    html1=$("#layoutPicContentMiddle").find("li").eq(1).html();
		html2=$("#layoutPicContentMiddle").find("li").eq(2).html();
		html3=$("#layoutPicContentMiddle").find("li").eq(3).html();
		html4=$("#layoutPicContentMiddle").find("li").eq(4).html();
		html5=$("#layoutPicContentMiddle").find("li").eq(5).html();
		$("#layoutPicContentMiddle").animate({
			"left":"-180px"
		},5000,function(){    		
			$("#layoutPicContentMiddle").find("li").eq(0).html(html1);
			$("#layoutPicContentMiddle").find("li").eq(1).html(html2);
			$("#layoutPicContentMiddle").find("li").eq(2).html(html3);
			$("#layoutPicContentMiddle").find("li").eq(3).html(html4);
			$("#layoutPicContentMiddle").find("li").eq(4).html(html5);
			$("#layoutPicContentMiddle").find("li").eq(5).html(html0);	
		}).animate({
			"left":"10px"
			},0);
}

function layoutPicShowLeftfast(){
  		html0=$("#layoutPicContentMiddle").find("li").eq(0).html();
	    html1=$("#layoutPicContentMiddle").find("li").eq(1).html();
		html2=$("#layoutPicContentMiddle").find("li").eq(2).html();
		html3=$("#layoutPicContentMiddle").find("li").eq(3).html();
		html4=$("#layoutPicContentMiddle").find("li").eq(4).html();
		html5=$("#layoutPicContentMiddle").find("li").eq(5).html();
		$("#layoutPicContentMiddle").animate({
			"left":"-180px"
		},0,function(){		
			$("#layoutPicContentMiddle").find("li").eq(0).html(html1);
			$("#layoutPicContentMiddle").find("li").eq(1).html(html2);
			$("#layoutPicContentMiddle").find("li").eq(2).html(html3);
			$("#layoutPicContentMiddle").find("li").eq(3).html(html4);
			$("#layoutPicContentMiddle").find("li").eq(4).html(html5);
			$("#layoutPicContentMiddle").find("li").eq(5).html(html0);
		}).animate({
			"left":"10px"
			},0);
}
function layoutPicShowRightfast(){
  		html0=$("#layoutPicContentMiddle").find("li").eq(0).html();
	    html1=$("#layoutPicContentMiddle").find("li").eq(1).html();
		html2=$("#layoutPicContentMiddle").find("li").eq(2).html();
		html3=$("#layoutPicContentMiddle").find("li").eq(3).html();
		html4=$("#layoutPicContentMiddle").find("li").eq(4).html();
		html5=$("#layoutPicContentMiddle").find("li").eq(5).html();
		$("#layoutPicContentMiddle").animate({
			"left":"10px"
		},0,function(){   
			$("#layoutPicContentMiddle").find("li").eq(0).html(html5);
			$("#layoutPicContentMiddle").find("li").eq(1).html(html0);
			$("#layoutPicContentMiddle").find("li").eq(2).html(html1);
			$("#layoutPicContentMiddle").find("li").eq(3).html(html2);
			$("#layoutPicContentMiddle").find("li").eq(4).html(html3);
			$("#layoutPicContentMiddle").find("li").eq(5).html(html4);		
		}).animate({
			"left":"-180px"
			},0);
}