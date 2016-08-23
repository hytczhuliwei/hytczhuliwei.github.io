$(function(){
	//弹出我的主页，好友，应用，装扮窗口
	$("#tb-index,#tb-friend,#tb-app,#tb-dress").each(function(){
	    var that = $(this);
	    that.hoverDelay({
	    	hoverDuring:500,
            outDuring: 200,
            hoverEvent: function(){
              that.find(".navdropdown").stop().slideDown(250);
              that.find(".a-link").addClass("current");
            },
            outEvent: function(){
            	that.find(".a-link").removeClass("current");
                that.find(".navdropdown").stop().slideUp(150);
            }
        });
	});
	//弹出设置，黄钻窗口
	$("#tb_setting_li").each(function(){
	    var that = $(this);
	    that.hoverDelay({
	    	hoverDuring:200,
            outDuring: 100,
            hoverEvent: function(){
              that.find(".user-drop-down").stop().slideDown(250);
              that.css("background-color","#fff");
              that.find(".drop-down-arrow").css("background-position","-715px -75px");
            },
            outEvent: function(){
            	that.css("background-color","");
            	that.find(".drop-down-arrow").css("background-position","");
            	that.find(".user-drop-down").stop().slideUp(150);
            }
        });
	});
	$("#tb_vip_li").each(function(){
	    var that = $(this);
	    that.hoverDelay({
	    	hoverDuring:100,
            outDuring: 0,
            hoverEvent: function(){
            	that.find(".vip-drop-down").stop().slideDown(250);
            	that.css("background-color","#fff");
            },
            outEvent: function(){
            	that.css("background-color","");
                that.find(".vip-drop-down").stop().slideUp(150);
            }
        });
	});


	//显示发表说说框子的底部选项
	$(".textinput").click(function(){
		$(".qz-poster-ft").show();
		return false;
	});
	//发表说说
	$("#QM_Mood_Poster_Inner .op").click(function(){
		var content=$("#QM_Mood_Poster_Inner").find(".textinput").val();
		if(content!="" && content!=null){
			var nowTime=new Date();
			var hour=nowTime.getHours()<10?"0"+nowTime.getHours():nowTime.getHours();
			var minute=nowTime.getMinutes()<10?"0"+nowTime.getMinutes():nowTime.getMinutes();
			$(this).find("a").attr("href","#feed_friend");
			var html="";
			html+='<li class="f-single f-s-s">';
			html+=' <div class="f-aside">';
			html+='<div class="f-user-pto">';
			html+='<a class="gerenlogo">';
			html+=' <img src="images/100.jpg" width="50px" height="50px">';
			html+='</a>';
			html+='</div>';
			html+='<div class="f-user-info">';
			html+='<div class="f-nick">';
			html+='<a class="f-name">阿井</a>';
			html+='</div>';
			html+='<div class="info-detail">';
			html+='<span class=" ui-mr8 state">'+hour+':'+minute+'</span>';
			html+='</div>';
			html+='</div>';
			html+='</div>';
			html+='<div class="f-wrap">';
			html+='<div class="f-item">';
			html+='<div class="f-info">'+content;
			html+='</div>';
			html+=' <div class="qz_summary">';
			html+=' <div class="f-op-wrap">';
			html+=' <p class="f-detail">';
			html+=' <a class=" qz_btn_reply1 itemN">';
			html+='<i class="ui-icon icon-comment"></i>';
			html+='评论</a>';
			html+=' <span class="item-line">|</span>'; 
			html+='<a class=" qz_btn_reply2 itemN">';  
			html+='<i class="ui-icon icon-forward"></i>';  
			html+=' 转发';  
			html+='</a>';  
			html+='<span class="item-line">|</span>';  
			html+=' <a class=" qz_btn_reply3 itemN">';  
			html+='<i class="ui-icon icon-praise"></i>';  
			html+=' 赞';  
			html+=' </a>';  
			html+=' <span class="item-line">|</span>';  
			html+='<a class=" qz_btn_reply4 itemN">';  
			html+=' <i class="ui-icon icon-collect"></i>';  
			html+='</a>';   
			html+='<span class="item-line">|</span>';  
			html+='<a class="itemN item-sp">';                                                        
			html+=' <i class="ui-icon icon-more"></i>';  
			html+='</a>';  
			html+='</p>';  
			html+='<div class="mod-comments">';  
			html+=' <div class="mod-commnets-poster poster1" >';  
			html+='<div class="comments-poster-bd">';  
			html+='<div class="comments-box">';  
			html+='<div class="textinputN" placeholder="我也说一句">';      
			html+='<a class="c_tx3">我也说一句</a> ';     
			html+='</div>';     
			html+='<div class="mod-insert-img bor2">';     
			html+=' <a class="btn-insert-img bg">';                       
			html+='<i class="icon-camera-16"></i>';     
			html+='</a>';     
			html+=' <div class="btn-insert-imgXL">';     
			html+=' <div class="imgXLL">';     
			html+=' <i class="imgXLLcamera"></i>';     
			html+='  <span class="imgXLLwordA">本地</span>';      
			html+='</div>';  
			html+='<div class="imgXLR">';  
			html+='<i class="imgXLLphoto"></i>';                   
			html+=' <span class="imgXLLwordB">相册</span>';  
			html+=' </div>';  
			html+='</div>';  
			html+=' </div>';    
			html+=' <div class="mod-quick-comment bor2">';   
			html+='<a class="btn-quick-comment bg">';                      
			html+='<i class="icon-flash"></i>';   
			html+='</a>';   
			html+='</div>';   
			html+='</div>';   
			html+='</div>';                              
			html+=' </div>';   
			html+='<div class="comment-box-wrap wrap1">';   
			html+=' <div class="qz-poster-active">';   
			html+=' <div class="qz-poster-inner">';   
			html+='<div class="qz-poster-hf">';   
			html+='<div class="qz-poster-editor-cont">';   
			html+='<div class="qz-input bor2">';   
			html+='<div idprefix="$6">';   
			html+='  <textarea class="textinput replytext"></textarea>';   
			html+='</div>';       
			html+='</div>';   
			html+='<div class="qz-poster-attach-sider">';                         
			html+='<div class="item item-pict">';   
			html+='<a href="#" class="pic">';   
			html+='<i class="icon icon-pic"></i>';   
			html+='</a>';   
			html+='</div>';   
			html+='</div> ';   
			html+='</div>';   
			html+='</div>';   
			html+='<div class="qz-poster-fb">';     
			html+=' <div class="qz-poster-attach">';    
			html+='<div class="qzaddons">';                        
			html+='<a href="javascript:void(0);" class="emot c_tx3">';    
			html+='<i class="icon-emot"></i>';    
			html+=' <i class="icon-red-dot"></i>';    
			html+=' </a>';    
			html+='<a href="javascript:void(0);" class="at c_tx3">';    
			html+='<i class="icon-at"></i>';    
			html+=' </a>';    
			html+=' </div>';  
			html+='</div>';    
			html+='<div class="qz-poster-synctalk">';    
			html+='<div class="sync-nutstalk">';
			html+='<span class="ui-checkbox ">';    
			html+='<div  class="checkboxStyle"></div>';    
			html+='<i>私密评论</i>';
			html+='</span>';    
			html+='</div>';    
			html+='</div> ';
			html+='<div class="op">';    
			html+='<a href="javascript:void(0)" class="btn-post">';    
			html+='<i class="icon-loading"></i>';   
			html+=' <span class="txtfb">发表</span>';    
			html+='</a>';  
			html+='  </div>';    
			html+=' </div>';  
			html+='</div>';    
			html+='</div>';  
			html+='</div>';    
			html+='</div> '; 
			html+=' </div>'; 
			html+=' </div>';                                                                   
			html+='</div>'; 
			html+='</li>'; 
			$("#feed_friend_list").prepend(html);
			$("#QM_Mood_Poster_Inner").find(".textinput").val("");
		}else{
			return false;
		}
	});

	$(document).on("click",".qz_btn_reply1",function(){
		$(this).parent().parent().find(".mod-commnets-poster").hide();
		$(this).parent().parent().find(".comment-box-wrap").show();
		return false;
	});

	//选中复选框
	$(document).on("click",".checkboxStyle",function(){
		var checkboxvalue=$(this).attr("value");
		if(checkboxvalue=="notchecked"){
			$(this).css({"background-position":"-440px -150px"});
			$(this).attr("value","checked");
		}else{
			$(this).css("background-position","");
			$(this).attr("value","notchecked");
		}
	});
	//回复说说
	$(document).on("click",".comment-box-wrap .qz-poster-fb .op",function(){
		var replyContent=$(this).parent().parent().find(".textinput").val();
		if(replyContent!=""){
			var html="";
			var ppppp=$(this).parent().parent().parent().parent().parent();
			var nowTime=new Date();
			var hour=nowTime.getHours()<10?"0"+nowTime.getHours():nowTime.getHours();
			var minute=nowTime.getMinutes()<10?"0"+nowTime.getMinutes():nowTime.getMinutes();
			if(ppppp.find(".Maincomments-list").attr("class")==null){
				html+='<div class="comments-list Maincomments-list">';
                html+='  <ul class="comments-listul">';
                html+='<li class="comments-item">';
				html+='<div class="comments-item-bd comments-item-bbd">';
				html+='<div class="ui-avatar"><a href="#"><img src="images/100.jpg"></a></div>';
				html+='<div class="comments-content">';
				html+='&nbsp;';
				html+=' <a href="#" class="c_tx">阿井 </a>';
				html+='&nbsp;:&nbsp;'+replyContent;
				html+=' <div class="comments-op">';
				html+='<span class="ui-mr10 state">'+hour+':'+minute+'</span>';
				html+=' <a class="act-reply"></a>';
				html+='</div>';
				html+='</div>';
				html+='</div>';
				html+='</li>';
				html+='</ul>';
				html+='</div>';
				ppppp.prepend(html);
			}else{
     		    html+='<li class="comments-item">';
				html+='<div class="comments-item-bd comments-item-bbd">';
				html+='<div class="ui-avatar"><a href="#"><img src="images/100.jpg"></a></div>';
				html+='<div class="comments-content">';
				html+='&nbsp;';
				html+=' <a href="#" class="c_tx">阿井 </a>';
				html+='&nbsp;:&nbsp;'+replyContent;
				html+=' <div class="comments-op">';
				html+='<span class="ui-mr10 state">'+hour+':'+minute+'</span>';
				html+=' <a class="act-reply"></a>';
				html+='</div>';
				html+='</div>';
				html+='</div>';
				html+='</li>';
				ppppp.find(".Maincomments-list .comments-listul").append(html);
			}	
		}
		$(this).parent().parent().find(".textinput").val("")
	});

	//回复的回复框
	$(document).on("click",".act-reply",function(){
		$(".comment-box-wrap").hide();
      	$(".mod-commnets-poster").hide();
      	var replyTo=$(this).parent().parent().find(".c_tx").html();
		if($(this).parent().parent().parent().parent().find(".comment-box-swrap").attr("class")==null){
			var html="";                                         
			html+='<div class="comment-box-swrap">';
			html+='<div class="qz-poster-active">';
			html+='<div class="qz-poster-inner">';
			html+='<div class="qz-poster-hf">';
			html+='<div class="qz-poster-editor-cont">';
			html+='<div class="qz-input bor2">';
			html+='<div idprefix="$6">';
			html+='<textarea class="textinput replytext"><img src="" alt="回复 '+replyTo+':"></textarea>';
			html+=' </div>';
			html+='</div>';
			html+='</div>';
			html+='</div>';
			html+='<div class="qz-poster-fb">';
			html+='<div class="qz-poster-attach">';
			html+='<div class="qzaddons">';
			html+='<a href="javascript:void(0);" class="emot c_tx3">';
			html+=' <i class="icon-emot"></i>';
			html+='<i class="icon-red-dot"></i>';
			html+='</a>';
			html+='  <a href="javascript:void(0);" class="at c_tx3">';
			html+=' <i class="icon-at"></i>';
			html+='</a>';
			html+='</div>';
			html+=' </div>';
			html+='<div class="op">';
			html+=' <a href="javascript:void(0)" class="btn-post">';
			html+=' <i class="icon-loading"></i>';
			html+='  <span class="txtfb">发表</span>';
			html+='</a>';
			html+=' </div>';
			html+='</div>';
			html+='</div>';
			html+=' </div>';
			html+='</div>';
			$(this).parent().parent().parent().parent().find(".comments-item-bbd").append(html);
			$(this).parent().parent().parent().parent().find(".textinput").val('');
			$(this).parent().parent().parent().parent().find(".comment-box-swrap").show();
		}else{
			$(this).parent().parent().parent().parent().find(".comment-box-swrap").show();
		}
		return false;
	});
	//回复的回复框
	$(document).on("click",".act-replyS",function(){
		$(".comment-box-wrap").hide();
      	$(".mod-commnets-poster").hide();
		if($(this).parent().parent().parent().parent().parent().parent().parent().parent().find(".comment-box-swrap").attr("class")==null){
			var html="";                                         
			html+='<div class="comment-box-swrap">';
			html+='<div class="qz-poster-active">';
			html+='<div class="qz-poster-inner">';
			html+='<div class="qz-poster-hf">';
			html+='<div class="qz-poster-editor-cont">';
			html+='<div class="qz-input bor2">';
			html+='<div idprefix="$6">';
			html+='<textarea class="textinput replytext"></textarea>';
			html+=' </div>';
			html+='</div>';
			html+='</div>';
			html+='</div>';
			html+='<div class="qz-poster-fb">';
			html+='<div class="qz-poster-attach">';
			html+='<div class="qzaddons">';
			html+='<a href="javascript:void(0);" class="emot c_tx3">';
			html+=' <i class="icon-emot"></i>';
			html+='<i class="icon-red-dot"></i>';
			html+='</a>';
			html+='  <a href="javascript:void(0);" class="at c_tx3">';
			html+=' <i class="icon-at"></i>';
			html+='</a>';
			html+='</div>';
			html+=' </div>';
			html+='<div class="op">';
			html+=' <a href="javascript:void(0)" class="btn-post">';
			html+=' <i class="icon-loading"></i>';
			html+='  <span class="txtfb">发表</span>';
			html+='</a>';
			html+=' </div>';
			html+='</div>';
			html+='</div>';
			html+=' </div>';
			html+='</div>';
			$(this).parent().parent().parent().parent().parent().parent().parent().parent().find(".comments-item-bbd").append(html);
			$(this).parent().parent().parent().parent().parent().parent().parent().parent().find(".comment-box-swrap").show();
		}else{
			$(this).parent().parent().parent().parent().parent().parent().parent().parent().find(".comment-box-swrap").show();
		}
		return false;
	});
	$(document).on("click",".comment-box-swrap",function(){
		$(".mod-commnets-poster").hide();
		$(this).show();
		return false;
	});

	//回复的回复
	$(document).on("click",".comment-box-swrap .qz-poster-fb .op",function(){
		var replyContent=$(this).parent().parent().find(".replytext").val();
		if(replyContent!=""){
			var html="";
			var ppppp=$(this).parent().parent().parent().parent().parent();
			var nowTime=new Date();
			var hour=nowTime.getHours()<10?"0"+nowTime.getHours():nowTime.getHours();
			var minute=nowTime.getMinutes()<10?"0"+nowTime.getMinutes():nowTime.getMinutes();
			if(ppppp.find(".comments-list").attr("class")==null){
				html+='<div class="comments-list mod-comments-sub">';
                html+='  <ul>';
                html+='<li class="comments-item">';
				html+='<div class="comments-item-bd">';
				html+='<div class="ui-avatar"><a href="#"><img src="images/100.jpg"></a></div>';
				html+='<div class="comments-content">';
				html+='&nbsp;';
				html+=' <a href="#" class="c_tx">阿井 </a>';
				html+='&nbsp;:&nbsp;'+replyContent;
				html+=' <div class="comments-op">';
				html+='<span class="ui-mr10 state">'+hour+':'+minute+'</span>';
				html+=' <a class="act-reply act-replyS"></a>';
				html+='</div>';
				html+='</div>';
				html+='</div>';
				html+='</li>';
				html+='</ul>';
				html+='</div>';
				ppppp.append(html);
				$(".mod-commnets-poster").show();
				ppppp.find(".comment-box-swrap").remove();
			}else{
     		    html+='<li class="comments-item">';
				html+='<div class="comments-item-bd">';
				html+='<div class="ui-avatar"><a href="#"><img src="images/100.jpg"></a></div>';
				html+='<div class="comments-content">';
				html+='&nbsp;';
				html+=' <a href="#" class="c_tx">阿井 </a>';
				html+='&nbsp;:&nbsp;'+replyContent;
				html+=' <div class="comments-op">';
				html+='<span class="ui-mr10 state">'+hour+':'+minute+'</span>';
				html+=' <a class="act-reply act-replyS"></a>';
				html+='</div>';
				html+='</div>';
				html+='</div>';
				html+='</li>';
				ppppp.find(".comments-list ul").append(html);
				$(".mod-commnets-poster").show();
				ppppp.find(".comment-box-swrap").remove();
			}
		}
	});




	$(".item-on").hover(function(){
		$(".tab-bubble").show();
	},function(){
          $(".tab-bubble").hide();
	});

	$(".feed_friend_refresh").hover(function(){
           $(".icon-refresh").css("background-position","-965px -1px");
	},function(){
           $(".icon-refresh").css("background-position","")
	});
	$(".feed_friend_set").hover(function(){
           $(".icon-set").css("background-position","-965px -26px");
	},function(){
           $(".icon-set").css("background-position","")
	});

	$(".f-detail .itemN").hover(function(){
		$(this).css("border","1px solid #d9d9d9");
	},function(){
        $(this).css("border","")
	});
	$(".item-sp").hover(function(){
		$(".item-sp").css("border","1px solid #d9d9d9");
	},function(){
        $(".item-sp").css("border","")
	});
	$(".btn-insert-img").hover(function(){
		       $(this).find(".icon-camera-16").css("background-position","-640px -25px") ;
               $(".btn-insert-imgXL").show();
	},function(){
		       $(this).find(".icon-camera-16").css("background-position","") ;
               $(".btn-insert-imgXL").hide();
	});
	$(".QM_care_me").click(function(){
	       $(".QM_care_me").css({"font-weight":"bold","color":"black"});
	       $(".QM_care_who").css({"font-weight":"normal","color":"#5d7895"});
           $("#QM_friendship_care_me").show();
           $("#QM_friendship_care_who").hide();
	});
	$(".QM_care_who").click(function(){
		   $(".QM_care_me").css({"font-weight":"normal","color":"#5d7895"});
	       $(".QM_care_who").css({"font-weight":"bold","color":"black"});
           $("#QM_friendship_care_me").hide();
           $("#QM_friendship_care_who").show();
	});
	$(".deletevisitor").hover(function(){
          $(".deleteoption").show();
	},function(){
          $(".deleteoption").hide();
	});
	$(".user-item").hover(function(){
          $(this).find(".deletevisitor").show();
	},function(){
          $(this).find(".deletevisitor").hide();
	});

	$(".title").click(function(){
		$(".title").css({"font-weight":"bold","color":"black"});
		$(".visitYou").css({"font-weight":"normal","color":"#5d7895"});
		$(".refuseYou").css({"font-weight":"normal","color":"#5d7895"});
        $(".visitMeContainer").show();
        $(".visitYouContainer").hide();
        $(".refuseYouContainer").hide();
	});
	$(".visitYou").click(function(){
		$(".title").css({"font-weight":"normal","color":"#5d7895"});
		$(".visitYou").css({"font-weight":"bold","color":"black"});
		$(".refuseYou").css({"font-weight":"normal","color":"#5d7895"});
        $(".visitMeContainer").hide();
        $(".visitYouContainer").show();
        $(".refuseYouContainer").hide();
	});
	$(".refuseYou").click(function(){
		$(".title").css({"font-weight":"normal","color":"#5d7895"});
		$(".visitYou").css({"font-weight":"normal","color":"#5d7895"});
		$(".refuseYou").css({"font-weight":"bold","color":"black"});
        $(".visitMeContainer").hide();
        $(".visitYouContainer").hide();
        $(".refuseYouContainer").show();
	});
	$(window).scroll(function(){
		var scrolls = $(this).scrollTop();
		// alert(scrolls);
		if( scrolls>1800)
		{
			$("#sidebar-ic-fixed").css("position", "fixed");
		}
		else 
		{

			$("#sidebar-ic-fixed").css("position", "");
		}
	});
	$("#tab_switch").mouseover(function(){
		     $("#tab_switch").hide();
             $("#tab_hide_list").show();
	
	});
	$("#tab_switch2").mouseover(function(){
		     $("#tab_switch2").hide();
             $("#tab_hide_list2").show();
	
	});
	$(".playdata").hover(function(){
           $(".number").hide();
		   $(".gb_bt1").show();
	},function(){
		   $(".number").show();
		   $(".gb_bt1").hide();
	});
	$(".playdata2").hover(function(){
           $(".number2").hide();
		   $(".gb_bt2").show();
	},function(){
		   $(".number2").show();
		   $(".gb_bt2").hide();
	});

	$(".tb_recent_app_list li").hover(function(){
             $(this).find(".del-btn").show();
	},function(){
             $(this).find(".del-btn").hide();
	});
	$(".topic-link").mouseover(function(){
		var num=$(this).attr("class").split("link link")[1];
		$(".dress-list").hide();
		$(".js-dress-list"+num).show();
	});
	$(".music-container").hover(function(){
             $(this).find(".music-play").css("background-color","#e4e4e4");
             $(this).find(".ico-music-play").css("background-position","-790px -150px");
             $(this).find(".music-dynamic").css("background-color","#e4e4e4");       
             $(this).find(".ico-music-dynamic").css("background-position","-790px -175px");
	},function(){
             $(this).find(".music-play").css("background-color","");
             $(this).find(".ico-music-play").css("background-position","");
             $(this).find(".music-dynamic").css("background-color","");
             $(this).find(".ico-music-dynamic").css("background-position","");
	});

	$(".qz-poster-bd").click(function(){
		$(".qz-poster-ft").show();
		return false;
	});
	$(".emot").hover(function(){
          $(".icon-emot").css("background-position","-465px -75px");
	},function(){
          $(".icon-emot").css("background-position","");
	});
	$(".at").hover(function(){
          $(".icon-at").css("background-position","-465px -125px");
	},function(){
          $(".icon-at").css("background-position","");
	});
	$(".topic").hover(function(){
          $(".icon-topic").css("background-position","-465px -175px");
	},function(){
          $(".icon-topic").css("background-position","");
	});
	$(".allside1").hover(function(){
		$(".allsidepic1").css("background-position","-615px -25px");
		$(".allside1").css("background-color","#f0f0f0");
	},function(){
        $(".allsidepic1").css("background-position","");
		$(".allside1").css("background-color","");
	});
	$(".allside2").hover(function(){
		$(".allsidepic2").css("background-position","-615px -75px");
		$(".allside2").css("background-color","#f0f0f0");
	},function(){
        $(".allsidepic2").css("background-position","");
		$(".allside2").css("background-color","");
	});
	$(".allside3").hover(function(){
		$(".allsidepic3").css("background-position","-615px -125px");
		$(".allside3").css("background-color","#f0f0f0");
	},function(){
        $(".allsidepic3").css("background-position","");
		$(".allside3").css("background-color","");
	});
    $(".allside4").hover(function(){
		$(".allsidepic4").css("background-position","-615px -175px");
		$(".allside4").css("background-color","#f0f0f0");
	},function(){
        $(".allsidepic4").css("background-position","");
		$(".allside4").css("background-color","");
	});
	$(".audience").hover(function(){
        $(".allpeople").show();
	},function(){
        $(".allpeople").hide();
	});
        
/*最右边第一个向左向右转换的幻灯片*/
        BgIndex=1;
   $(".p_prev").click(function(){
		BgIndex--;
		if(BgIndex==0)
		{
			BgIndex=3;
		}
		$(".QM_allsee_Body").hide();
		$(".Body"+BgIndex).show();
		
	});
	$(".p_next").click(function(){
		BgIndex++;
		if(BgIndex==4)
		{
			BgIndex=1;
		}
		$(".QM_allsee_Body").hide();
		$(".Body"+BgIndex).show();
		
	});
	/*最右边第二个向左向右转换的幻灯片*/
        PrIndex=1;
   $(".p_prev").click(function(){
		PrIndex--;
		if(PrIndex==0)
		{
			PrIndex=3;
		}
		$(".QM_present_Body").hide();
		$(".present"+PrIndex).show();
		
	});
	$(".p_next").click(function(){
		PrIndex++;
		if(PrIndex==4)
		{
			PrIndex=1;
		}
		$(".QM_present_Body").hide();
		$(".present"+PrIndex).show();
		
	});
    /*最右边第三个向左向右转换的幻灯片*/
        FkIndex=1;
   $(".prev3").click(function(){
		FkIndex--;
		if(FkIndex==0)
		{
			FkIndex=2;
		}
		$(".QM_fangke_Body").hide();
		$(".fangke"+FkIndex).show();
		
	});
	$(".next3").click(function(){
		FkIndex++;
		if(FkIndex==3)
		{
			FkIndex=1;
		}
		$(".QM_fangke_Body").hide();
		$(".fangke"+FkIndex).show();
		
	});
      
      /*当鼠标点到回复框架的时候转换另外一种形式的对话框*/
      $(document).on("click",".mod-commnets-poster,.comment-box-wrap",function(){
      	 $(this).parent().parent().find(".comment-box-wrap").show();
      	 $(this).parent().parent().find(".mod-commnets-poster").hide();
      	 $(this).parent().parent().find(".textinput").focus();
      	 return false
      });
     $(document).click(function(){
     	$(".comment-box-wrap").hide();
     	$(".qz-poster-ft").hide();
     	$(".comment-box-swrap").remove();
      	$(".mod-commnets-poster").show();
      	
	});
 });










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