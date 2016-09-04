$(function(){
	$(".pcolor").click(function(){
		var imgurl=$(this).attr("data-color");
		$(".product_fmodule").find(".img-wrapper img").attr("src",imgurl);
		$(this).parent().find(".selected").removeClass("selected");
		$(this).addClass("selected");
	});
});