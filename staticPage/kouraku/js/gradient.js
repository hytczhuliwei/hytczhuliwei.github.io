(function($){
	var picNum=0;
	var picArray={};
	$.fn.gradient=function(options){
		var defaults={
			 animateTime: 3000,
			 picWidth: $(window).width(),
			 picHeight: $(window).height(),
			 picArray: new Array("images/bg-top1.jpg","images/bg-top2.jpg","images/bg-top3.jpg","images/bg-top4.jpg")
		};
		var opts = $.extend({},defaults,options);    
	    this.each(function() {    
       	    $this = $(this); 
       	    $this.find("img").eq(0).animate({"opacity":"1"},opts.animateTime,function(){
				$this.find("img").eq(0).remove();
			    //$this.gradientTime({delayTime: opts.animateTime+2000});
			    picNum++;
				if(picNum>opts.picArray.length-1){
					picNum=0;
				}	
				setTimeout(function(){$this.gradient(opts)},opts.animateTime+2000);
			});
			var html='<img src="'+opts.picArray[picNum]+'" class="bgStyle" width="'+opts.picWidth+'px" height="'+opts.picHeight+'px">';
			$this.append(html);
			$this.find("img").eq(1).animate({"opacity":"1"},opts.animateTime-1000); 
       	});
	}
})(jQuery);   