// JavaScript Document
(function(){
	/*bgFun();
	window.onresize = function(){
	 	bgFun();
	}	*/
	//全屏控制
	$('#fullpage').fullpage({
		anchors: ['page1', 'page2', 'page3', 'page4','page5','page6','page7'],
		menu: '#menu',
		css3: true,
		scrollingSpeed:500,
		afterLoad: function(anchorLink, index){
			if(index == 2){
				showFun($(".bg2"));
			}
			if(index == 3){
				showFun($(".bg3"));
			}
			if(index == 4){
				showFun($(".bg4"));
			}
			if(index == 5){
				showFun($(".bg5"));
			}
			if(index == 6){
				showFun($(".bg6"));
			}
		},
		onLeave: function(index, direction){
			if(index == 2){
				hideFun($(".bg2"));
			}
			if(index == 3){
				hideFun($(".bg3"));
			}
			if(index == 4){
				hideFun($(".bg4"));
			}
			if(index == 5){
				hideFun($(".bg5"));
			}
			if(index == 6){
				hideFun($(".bg6"));
			}
			if(direction==7){
				$("#mc-mouse").hide();
			}else{
				$("#mc-mouse").show();
			}
		}
		
	});
	var t=new Date().getTime();
	//横向切换
	//var arr=[]|| new Array();
	var arr = new Array();
	arr = [
		'.adver',
		'.media',
		'.project',
		'.join',
		'.about'
	];
	for(var i in arr){
		flipFun(arr[i],t);
	}
//	flipFun(".adver",t);
//	flipFun(".media",t);
//	flipFun(".project",t);
//	flipFun(".join",t);
//	flipFun(".about",t);	

	
	//阻止右键菜单
	$(document).bind("contextmenu", function(e){
		e.preventDefault();
	})
	
	
})()

$(document).ready(function(e) {
	adFun();
	sidehideFun();

});

//网页自适应
function bgFun(){
	var h=document.documentElement.clientHeight+'px';
    document.getElementById('bg1').style.height = h;
}

//两边消失
function sidehideFun(){
	
	if($(window).width()<840){
		$(".mc-left,.mc-right,.yinsi").hide();
	}else{
		$(".mc-left,.mc-right,.yinsi").show();
	}
	window.onresize = function(){
		var height =$(window).width();
		console.log(height);
		if( height<840){
			$(".mc-left,.mc-right,.yinsi").fadeOut();
		}else{
			$(".mc-left,.mc-right,.yinsi").fadeIn();
		}
	}
}
//首页广告
function adFun(){
	$(".initia").hover(function(){
		$(this).find(".c_img2").stop(false, true);
//		$(this).parent("li").prevAll("li").find(".initia").children(".c_img2").stop(false, true);
//		$(this).parent("li").nextAll("li").find(".initia").children(".c_img2").stop(false, true);
        $(this).find(".c_img2").animate({"left":"0"+'px'},500);
    },function(){
		$(this).find(".c_img2").stop(false, true);
		$(this).parent("li").prevAll("li").find(".initia").children(".c_img2").stop(false, true);
		$(this).parent("li").nextAll("li").find(".initia").children(".c_img2").stop(false, true);
        $(this).find(".c_img2").animate({"left":"110"+'px'},500);
    })
}
//出现函数
function showFun(section){
	section.find(".alogo").delay(100).animate({"marginTop":"-5px","opacity":"1"},400);
	section.find(".atitle").delay(100).animate({"marginBottom":"0","opacity":"1"},400);
	section.find(".atext").delay(100).slideToggle(400);
}
//消失函数
function hideFun(section){
	section.find(".alogo").animate({"marginTop":"-250px","opacity":"0"},500);
	section.find(".atitle").animate({"marginBottom":"110px;","opacity":"0"},500);
	section.find(".atext").slideToggle(500);
}
//横向翻转
function flipFun(seClass,t){
	var pro = $(seClass);
	pro.parent(".wai").next(".conbtn").children("a").click(function(){
		var t1=new Date().getTime();
		if(t1-t>=500){
			t=t1;
			$(this).nextAll("a").removeClass("add");
			$(this).prevAll("a").removeClass("add");
			if($(this).hasClass("add")){
				return null;
			}else{
				var m = $(this).index();
				//console.log(m);
				var n =$(this).parents(".section").find(seClass);
				//console.log(n);
				n.hide(500);
				n.eq(m).show(500);
				$(this).addClass("add");
			}
		}
	})
}


