$(function(){
	$(".testHoverP2").hover(function(){
		var n=$(this).attr("class").split("testHoverP1 ")[1];
		$(".testhover").mouseover(function(){
			$(".testHoverPDown").show();
		});
	},function(){

	});
});

