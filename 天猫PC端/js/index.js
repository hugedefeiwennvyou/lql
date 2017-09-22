window.onload=function(){
	//对banner的轮播图进行设置
	let banner=document.getElementsByClassName('banner')[0];
	let bannerlis=banner.querySelectorAll('.banner>li');
	let b=setInterval(move,5000);
	let bnum=0;
	function move(){
		bnum++;
		if(bnum==bannerlis.length){
			bnum=0;
		}
		for(let i=0;i<bannerlis.length;i++){
          bannerlis[i].style.display='none';	
          lunbolis[i].classList.remove('lunboHot');
		}
        bannerlis[bnum].style.display='block';
        lunbolis[bnum].classList.add('lunboHot');        
	}
//	当鼠标移入banner，banner停止
	banner.onmouseenter=function(){
		clearInterval(b);
	}
	banner.onmouseleave=function(){
		 b=setInterval(move,3000);
	}		
	
	//对banner中的小列表进行设置
	let lunbo=document.getElementById('lunbo');
	let lunbolis=lunbo.querySelectorAll('#lunbo>li');
//	console.log(lunbolis);
	let lnum=0;
	let lresult=0;
	for(let i=0;i<lunbolis.length;i++){
	  lunbolis[i].onmouseenter=function(){	  	
	    lunbolis[lresult].classList.remove('lunboHot');
	    lunbolis[lnum].classList.remove('lunboHot');
	    bannerlis[lnum].style.display='none';
		lunbolis[i].classList.add('lunboHot');
		bannerlis[i].style.display='block';		
		lnum=i;
	  }
	  lunbolis[i].onmouseleave=function(){
	  	lresult=i;
	  }
	}
//第二种轮播方式
	//使用animate实现左右轮播
//	let banner=document.getElementsByClassName('banner')[0];
//	let bannerlis=banner.querySelectorAll('.banner>li');	
//	let t=setInterval(move, 2000);
//	let now=next=0;
//	let widths=banner.offsetWidth;
//	function move(){
//		next++;
//		if(next==bannerlis.length){
//			next=0;
//		}
//		//定义当前的显示的位置和next要放置的位置
//		bannerlis[next].style.left=widths+'px';
////		console.log(-banner.offsetWidth+'px');
//		animate(bannerlis[now],{left:-widths});
//		animate(bannerlis[next],{left:0});
//		now=next;
//		
//	}




	//对头部site-nav进行设置
	
	//1.对我的淘宝进行设置
	let  srul=document.getElementsByClassName('srul')[0];
	let  srullis=srul.querySelectorAll('.srul>li');
	let  mytaobao=document.getElementsByClassName('mytaobao')[0];
//	console.log(srullis);
    srullis[0].onmouseenter=function(){
    	mytaobao.style.display='block';
    }
    srullis[0].onmouseleave=function(){
    	mytaobao.style.display='none';
    }
    
    
    //2.对收藏进行设置
	let  store=document.getElementsByClassName('store')[0];
    srullis[3].onmouseenter=function(){
    	store.style.display='block';
    }
    srullis[3].onmouseleave=function(){
    	store.style.display='none';
    }	
    
    //3.对手机版进行设置
	let  phone=document.getElementsByClassName('phone')[0];
    srullis[5].onmouseenter=function(){
    	phone.style.display='block';
    }
    srullis[5].onmouseleave=function(){
    	phone.style.display='none';
    }   
    //4.对商家支持进行设置
	let  support=document.getElementsByClassName('support')[0];
    srullis[8].onmouseenter=function(){
    	support.style.display='block';
    }
    srullis[8].onmouseleave=function(){
    	support.style.display='none';
    }     
    
    
    //5.对网站导航进行设置
	let  webnav=document.getElementsByClassName('webnav')[0];
    srullis[9].onmouseenter=function(){
    	webnav.style.display='block';
    }
    srullis[9].onmouseleave=function(){
    	webnav.style.display='none';
    }     
    
    
//对aside进行设置
let asideul=document.getElementsByClassName('asideul')[0];
let asidelis=asideul.querySelectorAll('.asideul>li');
let asideliNN=document.getElementsByClassName('asideliNN');
//console.log(asideliNN)
for(let i=0;i<asidelis.length;i++){ 	
       asidelis[i].onmouseenter=function(){
       	  asideliNN[i].style.display='block';
       }
       asidelis[i].onmouseleave=function(){
       	  asideliNN[i].style.display='none';
       }       
}
}
