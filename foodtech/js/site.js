var menuApperTime = 200;
var menuOpened = false;
var oldScrollPosition = 0;
var scrollTime = null;

$(function(){
	
	
	$(".block_can_appear").each(function(k,e){
		of = $(e).offset();
		
		wh = $(window).scrollTop() + $(window).height()*0.7;
		
		if(wh >= of.top && !$(e).hasClass("shown")){
			$(e).addClass("shown");
		}
	});
	
	oldScrollPosition  = $(window).scrollTop();
	
	$(window).scroll(function(){
	
		
		$(".block_can_appear").each(function(k,e){
			of = $(e).offset();
			
			wh = $(window).scrollTop() + $(window).height()*0.85;
			
			if(wh >= of.top && !$(e).hasClass("shown")){
				$(e).addClass("shown");
			}
		});
		
