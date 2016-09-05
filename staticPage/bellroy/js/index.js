$(function(){
	//comparison对比栏目与冒险栏目图片轮转
	$(".comparisonSliderPagination_item a,.slide_pagination_Item a").click(function(){
			changePic($(this));//调用改变图片的函数	
	});
	//冒险栏目，点击相册封面，进入图片展示
	$(".adventureRowItem").click(function(){
		if($(this).attr("isselected")=="0"){
			//移除全部封面
			$(".adventureRow").find(".poster").remove();
			//将未显示的相册文字竖排显示
			if(!$.support.leadingWhitespace) {
				$(".adventureRow").find(".caption").remove();
			}else{
				$(".adventureRow").find(".caption").addClass("vertical");
				$(".adventureRow").find(".caption").show();
				$(this).find(".caption").hide();
			}
			
			//将相册图片显示
			$(".adventureRow").find(".adventureSlider").show();
			//图片运动期间，先将所有导航隐藏
			$(".adventureRow").find(".slide_pagination").hide();
			$(".adventureRow").find(".slide_navigation").hide();
			//判断当前页选中
			$(".adventureRowItem").attr("isselected","0");
			$(this).attr("isselected","1");
			//移动图片
			$(".adventureRowItem[isselected='0']").animate({"width":"3%"},800);
			$(this).animate({"width":"94%"},800,function(){
				//将当前页的导航显示出来
				$(this).find(".slide_navigation").show();
				$(this).find(".slide_pagination").show();
			});
		}
	});
	//冒险栏目通过左右箭头换图片
	$(".slide_navigation").click(function(){
		var curIndex=$(this).parent().find(".active").attr("img_index");//获取当前的图片索引号
		if($(this).html()=="Previous"){
			var clickIndex=curIndex-1;
			if(clickIndex<=0){
				clickIndex=6;
			}
		}else if($(this).html()=="Next"){
			var clickIndex=curIndex;
			clickIndex++;
			if(clickIndex>6){
				clickIndex=1;
			}
		}
		if(clickCounter==1){//如果之前的动作已经结束
			clickCounter=0;//当前动作开始，将其置为0		
			$(this).parent().find(".active").removeClass("active");//移除当前按钮的亮色
			$(this).parent().find(".slide_pagination_Item a[img_index='"+clickIndex+"']").addClass("active");//为点击的按钮添加亮色
			
			if($(this).html()=="Previous"){//当点击的图片在当前显示图片的左侧
				$(this).parent().find(".SliderControl img[img_index='"+clickIndex+"']").css({"left":"-100%","z-index":"10"});//将要显示的图片放到左侧
				$(this).parent().find(".SliderControl img[img_index='"+clickIndex+"']").show(0);//显示该图片
				$(this).parent().find(".SliderControl img[img_index='"+clickIndex+"']").animate({"left":"0"},1000);//向右移动两张图片
				$(this).parent().find(".SliderControl img[img_index='"+curIndex+"']").animate({"left":"100%"},1000,function(){
					$(this).parent().find(".SliderControl img[img_index='"+curIndex+"']").hide(0);//移动完成后将之前显示的图片隐藏，并改变其left,z-index值
					$(this).parent().find(".SliderControl img[img_index='"+curIndex+"']").css({"left":"0","z-index":"0"});
					clickCounter=1;//当前动作结束，将其置为1
				});
			}else if($(this).html()=="Next"){//当点击的图片在当前显示图片的右侧
				$(this).parent().find(".SliderControl img[img_index='"+clickIndex+"']").css({"left":"100%","z-index":"10"});
				$(this).parent().find(".SliderControl img[img_index='"+clickIndex+"']").show(0);
				$(this).parent().find(".SliderControl img[img_index='"+clickIndex+"']").animate({"left":"0"},1000);
				$(this).parent().find(".SliderControl img[img_index='"+curIndex+"']").animate({"left":"-100%"},1000,function(){
					$(this).parent().find(".SliderControl img[img_index='"+curIndex+"']").hide(0);
					$(this).parent().find(".SliderControl img[img_index='"+curIndex+"']").css({"left":"0","z-index":"0"});
					clickCounter=1;
				});
			}
		}
	});
});

var clickCounter=1;

//改变图片
function changePic(that){
	if(clickCounter==1){//如果之前的动作已经结束
		clickCounter=0;//当前动作开始，将其置为0		
		var clickIndex=that.attr("img_index");//获取点击的图片索引号
		var curIndex=that.parent().parent().find(".active").attr("img_index");//获取当前的图片索引号
		that.parent().parent().find(".active").removeClass("active");//移除当前按钮的亮色
		that.addClass("active");//为点击的按钮添加亮色

		if(clickIndex<curIndex){//当点击的图片在当前显示图片的左侧
			that.parent().parent().parent().find(".SliderControl img[img_index='"+clickIndex+"']").css({"left":"-100%","z-index":"10"});//将要显示的图片放到左侧
			that.parent().parent().parent().find(".SliderControl img[img_index='"+clickIndex+"']").show(0);//显示该图片
			that.parent().parent().parent().find(".SliderControl img[img_index='"+clickIndex+"']").animate({"left":"0"},1000);//向右移动两张图片
			that.parent().parent().parent().find(".SliderControl img[img_index='"+curIndex+"']").animate({"left":"100%"},1000,function(){
				that.parent().parent().parent().find(".SliderControl img[img_index='"+curIndex+"']").hide(0);//移动完成后将之前显示的图片隐藏，并改变其left,z-index值
				that.parent().parent().parent().find(".SliderControl img[img_index='"+curIndex+"']").css({"left":"0","z-index":"0"});
				clickCounter=1;//当前动作结束，将其置为1
			});
		}else if(clickIndex>curIndex){//当点击的图片在当前显示图片的右侧
			that.parent().parent().parent().find(".SliderControl img[img_index='"+clickIndex+"']").css({"left":"100%","z-index":"10"});
			that.parent().parent().parent().find(".SliderControl img[img_index='"+clickIndex+"']").show(0);
			that.parent().parent().parent().find(".SliderControl img[img_index='"+clickIndex+"']").animate({"left":"0"},1000);
			that.parent().parent().parent().find(".SliderControl img[img_index='"+curIndex+"']").animate({"left":"-100%"},1000,function(){
				that.parent().parent().parent().find(".SliderControl img[img_index='"+curIndex+"']").hide(0);
				that.parent().parent().parent().find(".SliderControl img[img_index='"+curIndex+"']").css({"left":"0","z-index":"0"});
				clickCounter=1;
			});
		}
	}
}






















