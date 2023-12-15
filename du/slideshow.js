//定义一个函数，参数interval表示间隔指定的时间（以毫秒计算）后进行切换
function SlideShow(interval){
	var slideContainer=document.getElementById("slideContainer"),
	        imgs=document.getElementById("slideImgs").getElementsByTagName("li"),
	        slideBar=document.getElementById("slideBar"),
	    btns=slideBar.getElementsByTagName("li"),
	        imgNum=imgs.length,
	    interval=interval ||3000,
	    currentI=lastI=0,
	        currentBtn,
	        autoSlideHandle;

    function startAutoSlide(){
	    autoSlideHandle=setInterval(function(){
		    currentI=currentI+1>=imgNum?currentI+1-imgNum:currentI+1;
		    slide()
		},interval);
	}
	function stopAutoSlide(){
		clearInterval(autoSlideHandle);
	}
	function slide(){
		imgs[lastI].style.display="none";
		btns[lastI].className="";
		imgs[currentI].style.display="block";
		btns[currentI].className="on";
		     lastI=currentI;
	}
	imgs[currentI].style.display="block";
	slideContainer.onmouseover=stopAutoSlide;
	slideContainer.onmouseout=startAutoSlide;
	slideBar.onmouseover=function(e){
		currentBtn=e?e.target:window.event.strElement;
		if(currentBtn.nodeName==="LI"){
		currentI=parseInt(currentBtn.innerHTML,10)-1;
			slide();
		}
	}
	startAutoSlide();
}
