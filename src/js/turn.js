var oLi = $('.box .wrap');
var index = 0;
var timer = null;
var flag = true;
function init(){
	oLi.css({'left':'1000px', 'top':'0', 'width':'0', 'height':'0', 'z-index':1});
	oLi.eq(index % 6).css({'left':'0','top':'50%', 'width':'400px', 'height':'200px','opacity':'0.4','z-index':1 });  
	oLi.eq((index + 1) % 6).css({'top':'0','top':'0px', 'margin-top':'0px', 'height':"300px",'width':'600px','left':'200px','opacity':'1','z-index':'100'});
	oLi.eq((index + 2) % 6).css({'left':'600px', 'top':'50%', 'width':'400px', 'height':'200px', 'opacity':'0.4', 'z-index':1});	
}
init();
//margin-top 的作用？
function leftMove (){
	if(flag){
		flag = false;
		oLi.css({'z-index':1});
		oLi.eq(index % 6).animate({'left':'-400px', 'top':'50%', 'margin-top':'0px', 'width':'0px', 'height':'0px', 'opacity':'0',});
		oLi.eq((index + 1) % 6).animate({'left':'0px', 'top':'50%', 'margin-top':'-100px', 'width':'400px', 'height':'200px', 'opacity':'0.4',});
		oLi.eq((index + 2) % 6).animate({'left':'200px', 'top':'0', 'margin-top':'0px', 'width':'600px', 'height':'300px', 'opacity':'1','z-index':'100'});
		oLi.eq((index + 3) % 6 ).css({'left':'1000px'});
		oLi.eq((index + 3) % 6).animate({'left':'600px', 'top':'50%', 'margin-top':'-100px', 'width':'400px', 'height':'200px', 'opacity':'0.4'});
		index ++;
		flag = true;	
	}
}	
function rightMove(){
	if(flag){
		flag = false;
		oLi.eq((index - 1) % 6).css({'left':'-200px'});
		oLi.eq((index - 1) % 6).animate({'left':'0px', 'top':'50%', 'margin-top':'-100px', 'width':'400px', 'height':'200px', 'opacity':'0.4', 'z-index':1});
		oLi.eq((index) % 6).animate({'left':'200px', 'top':'0', 'margin-top':'0', 'width':'600px', 'height':'300px', 'opacity':'1', 'z-index':100});
		oLi.eq((index + 1) % 6).animate({'left':'600px', 'top':'50%', 'margin-top':'-100px', 'width':'400px', 'height':'200px', 'opacity':'0.4', 'z-index':1});
		oLi.eq((index + 2) % 6).animate({'left':'1000px', 'top':'50%', 'margin-top':'0px', 'width':'0px', 'height':'0px', 'opacity':'0', 'z-index':1});
		index --;
		flag = true;
	}
}	
$('.btnL').on('click',function (){
	leftMove(index);
});
$('.btnR').on('click',function (){
	rightMove(index);
});
timer = setInterval(leftMove, 1000);
$('.btn').on('mousemove',function () {
	clearInterval(timer);
});
$('.btn').on('mouseout',function () {
	timer = setInterval(leftMove,1000);
});



