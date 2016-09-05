$(function(){



	//选中邮件
	$(".nui-chk").click(function(){
		if($(this).find(".nui-ico-checkbox-checked").html()==null){
			if($(this).attr("class")=="nui-chk js-component-checkbox-dc"){
				$("#dvContainer").find(".nui-ico-checkbox").addClass("nui-ico-checkbox-checked");
			}
			$(this).find(".nui-ico-checkbox").addClass("nui-ico-checkbox-checked");
			if($(".frame-main-cont-body .nui-ico-checkbox").length==$(".frame-main-cont-body .nui-ico-checkbox-checked").length){
				$(".nui-chk.js-component-checkbox-dc").find(".nui-ico-checkbox").removeClass("nui-ico-checkbox-checked");
				$(".nui-chk.js-component-checkbox-dc").find(".nui-ico-checkbox").addClass("nui-ico-checkbox-checked");
			}
		}else{
			if($(this).attr("class")=="nui-chk js-component-checkbox-dc"){
				$("#dvContainer").find(".nui-ico-checkbox").removeClass("nui-ico-checkbox-checked");
			}
			$(this).find(".nui-ico-checkbox").removeClass("nui-ico-checkbox-checked");
			$(".nui-chk.js-component-checkbox-dc").find(".nui-ico-checkbox").removeClass("nui-ico-checkbox-checked");
		}
	});
	//删除邮件
	$(".nui-btn-delete").click(function(){
		$(".frame-main-cont-body").find(".nui-ico-checkbox-checked").parent().parent().parent().parent().parent().parent().remove();
		$(".nui-title-tips.nui-txt-tips strong").html($(".frame-main-cont-body .nui-ico-unread").length);
		$("#_mail_tree_37_277count").html("("+$(".frame-main-cont-body .nui-ico-unread").length+")");
	});
	$(".cC0.nui-ico.nui-ico-smartTrash").click(function(){
		$(this).parent().parent().parent().parent().remove();
		$(".nui-title-tips.nui-txt-tips strong").html($(".frame-main-cont-body .nui-ico-unread").length);
		$("#_mail_tree_37_277count").html("("+$(".frame-main-cont-body .nui-ico-unread").length+")");
	});
	//设置红旗邮件
	$(".dU0 .nui-ico-flag").click(function(){
		if($(this).attr("class")=="nui-ico nui-ico-flag nui-ico-flag-0"){
			$(this).removeClass("nui-ico-flag-0");
			$(this).addClass("nui-ico-flag-1");
			$(this).parent().parent().parent().parent().removeClass("nui-txt-flag0");
			$(this).parent().parent().parent().parent().addClass("nui-txt-flag1");
		}else{
			$(this).removeClass("nui-ico-flag-1");
			$(this).addClass("nui-ico-flag-0");
			$(this).parent().parent().parent().parent().removeClass("nui-txt-flag1");
			$(this).parent().parent().parent().parent().addClass("nui-txt-flag0");
		}
	});
	//设置已读，未读
	$(".dT0.nui-ico.nui-ico-unread").click(function(){
		$(this).parent().parent().parent().removeClass("kw0");
		$(this).removeClass("nui-ico-unread");
		$(this).addClass("nui-ico-read");
		$(".nui-title-tips.nui-txt-tips strong").html($(".frame-main-cont-body .nui-ico-unread").length);
		$("#_mail_tree_37_277count").html("("+$(".frame-main-cont-body .nui-ico-unread").length+")");
	});
	$(".text_allRead,.allSetread").click(function(){
		$(".frame-main-cont-body-first").find(".nui-ico-unread").addClass("nui-ico-read");
		$(".frame-main-cont-body-first").find(".nui-ico-unread").removeClass("nui-ico-unread");
		$(".frame-main-cont-body-first").find(".kw0").removeClass("kw0");
		$(".nui-title-tips.nui-txt-tips strong").html(0);
		$("#_mail_tree_37_277count").html("(0)");
	});

	// 标记为下拉框中的事件
	// 弹出下拉框
	$(".nui-dropdownBtn").click(function(){
		$(this).next().stop().slideDown();
		$(this).next().css("visibility","visible");
		return false;
	});
	$(document).click(function(){
		$(".nui-tagmenu").slideUp();
		$(".nui-tagmenu").css("visibility","hidden");
	});
	//设置已读
	$(".setRead").click(function(){
		$(".frame-main-cont-body").find(".nui-ico-checkbox-checked").parent().parent().parent().find(".dU0 .nui-ico-flag").addClass("nui-ico-read");
		$(".frame-main-cont-body").find(".nui-ico-checkbox-checked").parent().parent().parent().find(".dT0.nui-ico.nui-ico-unread").removeClass("nui-ico-unread");
		$(".frame-main-cont-body").find(".nui-ico-checkbox-checked").parent().parent().parent().parent().parent().removeClass("kw0");
		$(".frame-main-cont-body").find(".nui-ico-checkbox-checked").removeClass("nui-ico-checkbox-checked");
		$(".nui-chk.js-component-checkbox-dc").find(".nui-ico-checkbox").removeClass("nui-ico-checkbox-checked");
		$(".frame-main-cont-body").find(".nui-ico-checkbox-checked").removeClass("nui-ico-checkbox-checked");
		$(".nui-chk.js-component-checkbox-dc").find(".nui-ico-checkbox").removeClass("nui-ico-checkbox-checked");
		$(".nui-title-tips.nui-txt-tips strong").html($(".frame-main-cont-body .nui-ico-unread").length);
		$("#_mail_tree_37_277count").html("("+$(".frame-main-cont-body .nui-ico-unread").length+")");
	});
	//设置未读
	$(".setUnread").click(function(){
		$(".frame-main-cont-body").find(".nui-ico-checkbox-checked").parent().parent().parent().find(".dT0.nui-ico.nui-ico-read").addClass("nui-ico-unread");
		$(".frame-main-cont-body").find(".nui-ico-checkbox-checked").parent().parent().parent().find(".dT0.nui-ico.nui-ico-read").removeClass("nui-ico-read");
		$(".frame-main-cont-body").find(".nui-ico-checkbox-checked").parent().parent().parent().parent().parent().addClass("kw0");
		$(".frame-main-cont-body").find(".nui-ico-checkbox-checked").removeClass("nui-ico-checkbox-checked");
		$(".nui-chk.js-component-checkbox-dc").find(".nui-ico-checkbox").removeClass("nui-ico-checkbox-checked");
		$(".nui-title-tips.nui-txt-tips strong").html($(".frame-main-cont-body .nui-ico-unread").length);
		$("#_mail_tree_37_277count").html("("+$(".frame-main-cont-body .nui-ico-unread").length+")");
	});
	// 设置红旗邮件
	$(".setRedflag").click(function(){
		$(".frame-main-cont-body").find(".nui-ico-checkbox-checked").parent().parent().parent().find(".dU0 .nui-ico-flag").removeClass("nui-ico-flag-0");
		$(".frame-main-cont-body").find(".nui-ico-checkbox-checked").parent().parent().parent().find(".dU0 .nui-ico-flag").removeClass("nui-ico-flag-1");
		$(".frame-main-cont-body").find(".nui-ico-checkbox-checked").parent().parent().parent().find(".dU0 .nui-ico-flag").addClass("nui-ico-flag-1");
		$(".frame-main-cont-body").find(".nui-ico-checkbox-checked").parent().parent().parent().parent().parent().removeClass("nui-txt-flag0");
		$(".frame-main-cont-body").find(".nui-ico-checkbox-checked").parent().parent().parent().parent().parent().removeClass("nui-txt-flag1");
		$(".frame-main-cont-body").find(".nui-ico-checkbox-checked").parent().parent().parent().parent().parent().addClass("nui-txt-flag1");
		$(".frame-main-cont-body").find(".nui-ico-checkbox-checked").removeClass("nui-ico-checkbox-checked");
		$(".nui-chk.js-component-checkbox-dc").find(".nui-ico-checkbox").removeClass("nui-ico-checkbox-checked");
		$(".nui-title-tips.nui-txt-tips strong").html($(".frame-main-cont-body .nui-ico-unread").length);
		$("#_mail_tree_37_277count").html("("+$(".frame-main-cont-body .nui-ico-unread").length+")");
	});

});