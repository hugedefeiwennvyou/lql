$(function(){
	//对购物车进行设置
	$('.shopcar').hover(function(){
		$('.shopcarNav').css({display:'block'})
	},function(){
		$('.shopcarNav').css({display:'none'})
	})
	//对顶部nav进行设置
	$('.navul>li').hover(function(){
		$('.navliN').eq($(this).index()).css({display:'block'})
	},function(){
		$('.navliN').eq($(this).index()).css({display:'none'})
	})
	//对搜索框进行设置
	$('.search-form').focus(function(){
		$('.search-box').css({borderColor:'#FF6700'})
		$('.navi-right').css({borderColor:'#FF6700'})
		$('.search-form').css({borderColor:'#FF6700'})
		$('.searchB').css({display:'block'})
	})
	$('.search-form').blur(function(){
		$('.search-box').css({borderColor:'#E0E0E0'})
		$('.navi-right').css({borderColor:'#E0E0E0'})
		$('.search-form').css({borderColor:'#E0E0E0'})		
	    $('.searchB').css({display:'none'})
	})
	//方法一    对侧导航 aside进行设置     
//	$('.asideTop>li').mouseenter(function(){
//		$($('.asideLiNav').get($(this).index())).css({display:'block'})
////   console.log($('.asideLiNav').get($(this).index()))
////     console.log( $('.asideLiNav').get($(this).index()))
//	})
//	$('.asideTop>li').mouseleave(function(){
//		$($('.asideLiNav').get($(this).index())).css({display:'none'})
//	})
	//方法二   对侧导航 aside进行设置     
   $('.asideTop>li>a').hover(function(){
   	   $('.asideLiNav').css({display:'none'});
   	   $(this).next('.asideLiNav').css({display:'block'});
   },function(){})
   $('.asideTop').hover(function(){},function(){
   	   $('.asideLiNav').css({display:'none'});
   })
	//对轮播图进行设置    
//  let t=requestAnimationFrame(move);
    let t=setInterval(function(){
    	move('l')
    },2000);
   let  num=0;
    $('.lunbo>li:first-child').addClass('lunboHot')
    function move(dir){
     let brlis=$('.banner-right>li')
    	if(dir=='l'){
	    	num++;
    	 	
//  	console.log(brlis.length)
	    	if(num==brlis.length){
	    		num=0;
	    	}
    	}else if(dir=='r'){
    		num--;
    		if(num<0){
    			num=brlis.length-1;
    		}
    	}
//  	console.log(num);
    	brlis.css({opacity:0,}).eq(num).css({opacity:1});
        $('.lunbo>li').removeClass('lunboHot');    	
        $('.lunbo>li').eq(num).addClass('lunboHot');    	
    }
    //鼠标移入的时候让到动画停止
    $('.banner-right').hover(function(){
    	clearInterval(t);
    },function(){
    	t=setInterval(function(){
    	move('l')
      },2000);
    })
    //对左右按钮进行设置
    $('.handle-left').click(function(){
    	move('l')
    })
    $('.handle-right').click(function(){
    	move('r')
    })
    //实现轮播点与图片的交互
    $('.lunbo>li').click(function(){
    	let indexli=$(this).index('.lunbo>li');
    	num=indexli;
    	move()
    })
    //解决浏览器缩小的时候动画还在动  window.blur[小屏幕]   window.focus[大屏幕]
    $(window).blur(function(){
    	clearInterval(t)
    })
    $(window).focus(function(){
    	t=setInterval(function(){
    	move('l')
      },2000);
    })    
    //家电动画的实现
    let jd=$('.jiadianNav-right>li')
    let jd1=$('.jiadianNav-right .jb-right');
    jd.mouseenter(function(){
    	jd.removeClass('jiadianHot')
    	jd1.css({display:'none'})
    	$(this).addClass('jiadianHot')
    	jd1.eq($(this).index()).css({display:'block'})
    })
    jd.mouseleave(function(){
//  	a=$(this).index();
    })  
    //智能动画等的实现
    let sm=$('.smartNav-right>li');
    let sm1=$('.smart .jb-right');
    let sm2=$('.smartNav');
    sm2.each(function(index,obj){
        let  b=$(this).find(sm);
        let  c=$(this).find(sm1)
        b.mouseenter(function(){
        	b.removeClass('jiadianHot')
        	$(this).addClass('jiadianHot');
        	c.css({display:'none'})
        	c.eq($(this).index()).css({display:'block'})
        	
        })
    })
  //为你推荐的动画实现
	let rdBottom=document.querySelector('.rdBottom');
	//设置总共的ul轮播个数
	//indexR 为当前显示的的第几屏
	let  indexR=0;
	//找rdBottom的子元素节点的数量
	let  count =rdBottom.childElementCount;
	//  通过JS设置	 rdBottom的宽度
	//总共为i个ul   先获取一个ul的宽度
//   rdBottom的宽度就为ul*i    通过第一个ul 来获取ul的宽度
    let  rdBottom1=document.querySelectorAll('.rdBottom1')[0];
//  console.log(rdBottom1);
//获取ul的宽度  offsetWidth  +margin-right     margin-right使用getComputedStyle来获取
// console.log(window.getComputedStyle(rdBottom1,null).width);   1240px;
  let widths=rdBottom1.offsetWidth;
//console.log(widths+(parseInt(window.getComputedStyle(rdBottom1,null).marginRight)));
  let rwidth=widths+(parseInt(window.getComputedStyle(rdBottom1,null).marginRight));
  //设置总宽度 
  rdBottom.style.width=`${rwidth*count}px`;
  //当左右按钮点击的时候让它的ul进行平移
  let  rtRight1=document.querySelector('.rt-right1');
  let  rtRight2=document.querySelector('.rt-right2');
  
   rtRight1.onclick=function(){
   	//点击左边按钮   往右滑动
   	console.log(1);
   	if(indexR==1){
   		this.id='djend'; 	
   	}	
   	if(indexR==0){
   		return;
   	}
   		rtRight2.id='djstart'; 	 		
    	indexR--;
   	    rdBottom.style.marginLeft=`${-rwidth*indexR}px`; 	
   }
   rtRight2.onclick=function(){
   	//点击右边边按钮   往左滑动
   	//设置indexR的最大值，如果超过就不能滑动
	 if(indexR==count-2){
   		this.id='djend'; 	 	
	 }
   	 if(indexR==count-1){
	 	
   	 	return ;
   	 }
   	 rtRight1.id='djstart';  	 	 
   	 indexR++;
   	 rdBottom.style.marginLeft=`${-rwidth*indexR}px`;
   } 
  
 
    //对内容进行设置
   let contentBot=document.getElementsByClassName('contentBot')[0];
   let cBlis=contentBot.querySelectorAll('.contentBot>li')[0];
   let content1=cBlis.getElementsByClassName('content1');
// console.log(content1);
   let cwidths=parseInt(window.getComputedStyle(content1[0],null).width);
   let lunbo1=document.querySelectorAll('.lunbo1')[0];
   let lunbo1lis=lunbo1.querySelectorAll('.lunbo1>li');
// console.log(lunbo1lis);
// console.log(cwidths);
//  Btn(1);
   let now=next=0; 
// let c=  setInterval(moveC,7000);

 
// function  Btn(element){ 
   	let handle1=cBlis.querySelector('.handle1');
   	let handle2=cBlis.querySelector('.handle2');
   	handle1.onclick=function moveCR(){
// 	    moveCR();
	   
	   	  if(next==0){  	  	
	   	  	return ;
	   	  }
	   	  next--;
	   	  lunbo1lis[now].id='';
	   	  lunbo1lis[next].id='lunbo1Hot';     	  
	   	  content1[next].style.left=-cwidths+'px';
	   	  animate(content1[now],{left:cwidths+60});
	   	  animate(content1[next],{left:28});
	   	  now=next;
	   	  
	   } 
    handle2.onclick= function moveC(){
// 	    moveC();
	  
	   	  if(next==content1.length-1){ 
	   	  	return;
	   	  }  
	   	  next++;
		  lunbo1lis[now].id='';
		  lunbo1lis[next].id='lunbo1Hot';      	  	  
	   	  content1[next].style.left=cwidths+'px';
	   	  animate(content1[now],{left:-cwidths});
	   	  animate(content1[next],{left:28});
	   	  now=next;
	   	  
	} 	
   //对小列表进行设置
   for(let i=0;i<lunbo1lis.length;i++){
   	
	   lunbo1lis[i].onclick=function(){
	   	   //如果点击本身的时候就不点击
	   	   if(now==i){
	   	   	
	   	   	return ;
	   	   }  
	   	   if(now<i){
	   	   	
		   	  lunbo1lis[now].id='';
		   	  lunbo1lis[i].id='lunbo1Hot'; 	   	   
		   	  content1[i].style.left=cwidths+'px';
		   	  animate(content1[now],{left:-cwidths});
		   	  animate(content1[i],{left:28});
		   	  now=next=i;	   	  
	   	   }
	   	   if(now>i){
		   	  lunbo1lis[now].id='';
		   	  lunbo1lis[i].id='lunbo1Hot';     	  
		   	  content1[i].style.left=-cwidths+'px';
		   	  animate(content1[now],{left:cwidths+60});
		   	  animate(content1[i],{left:28});
		   	  now=next=i;	   	   	
	   	   }
	   }
   }

  //   第二个
   let cBlis1=contentBot.querySelectorAll('.contentBot>li')[1];
   let content2=cBlis1.getElementsByClassName('content1');
   let lunbo2=document.querySelectorAll('.lunbo1')[1];
   let lunbo2lis=lunbo2.querySelectorAll('.lunbo1>li');
   let now1=next1=0
   
   	let handle3=cBlis1.querySelector('.handle1');
   	let handle4=cBlis1.querySelector('.handle2');
// console.log(handle4);
   	handle3.onclick=function moveCR(){
// 	    moveCR();
	   
	   	  if(next1==0){
	   	  	return ;
	   	  }
	   	  next1--;
	   	  lunbo2lis[now1].id='';
	   	  lunbo2lis[next1].id='lunbo1Hot';     	  
	   	  content2[next1].style.left=-cwidths+'px';
	   	  animate(content2[now1],{left:cwidths+60});
	   	  animate(content2[next1],{left:28});
	   	  now1=next1;
	   	  
	   } 
    handle4.onclick= function moveC(){
// 	    moveC();
	  
	   	  if(next1==content2.length-1){   	  	
	   	  	return;
	   	  }  
	   	  next1++;
		  lunbo2lis[now1].id='';
		  lunbo2lis[next1].id='lunbo1Hot';      	  	  
	   	  content2[next1].style.left=cwidths+'px';
	   	  animate(content2[now1],{left:-cwidths});
	   	  animate(content2[next1],{left:28});
	   	  now1=next1;
	   	  
	} 	
   //对小列表进行设置
   for(let i=0;i<lunbo2lis.length;i++){
   	
	   lunbo2lis[i].onclick=function(){
	   	   //如果点击本身的时候就不点击
	   	   if(now1==i){
	   	   	return ;
	   	   }  
	   	   if(now1<i){
	   	   	
		   	  lunbo2lis[now1].id='';
		   	  lunbo2lis[i].id='lunbo1Hot'; 	   	   
		   	  content2[i].style.left=cwidths+'px';
		   	  animate(content2[now1],{left:-cwidths});
		   	  animate(content2[i],{left:28});
		   	  now1=next1=i;	   	  
	   	   }
	   	   if(now1>i){
		   	  lunbo2lis[now1].id='';
		   	  lunbo2lis[i].id='lunbo1Hot';     	  
		   	  content2[i].style.left=-cwidths+'px';
		   	  animate(content2[now1],{left:cwidths+60});
		   	  animate(content2[i],{left:28});
		   	  now1=next1=i;	   	   	
	   	   }
	   }
   }
//   
     
   //   第三个
   let cBlis2=contentBot.querySelectorAll('.contentBot>li')[2];
   let content3=cBlis2.getElementsByClassName('content1');
   let lunbo3=document.querySelectorAll('.lunbo1')[2];
   let lunbo3lis=lunbo3.querySelectorAll('.lunbo1>li');
   let now2=next2=0
   
   	let handle5=cBlis2.querySelector('.handle1');
   	let handle6=cBlis2.querySelector('.handle2');
// console.log(handle4);
   	handle5.onclick=function moveCR(){
// 	    moveCR();
	   
	   	  if(next2==0){
	   	  	return ;
	   	  }
	   	  next2--;
	   	  lunbo3lis[now2].id='';
	   	  lunbo3lis[next2].id='lunbo1Hot';     	  
	   	  content3[next2].style.left=-cwidths+'px';
	   	  animate(content3[now2],{left:cwidths+60});
	   	  animate(content3[next2],{left:28});
	   	  now2=next2;
	   	  
	   } 
    handle6.onclick= function moveC(){
// 	    moveC();
	  
	   	  if(next2==content3.length-1){   	  	
	   	  	return;
	   	  }  
	   	  next2++;
		  lunbo3lis[now2].id='';
		  lunbo3lis[next2].id='lunbo1Hot';      	  	  
	   	  content3[next2].style.left=cwidths+'px';
	   	  animate(content3[now2],{left:-cwidths});
	   	  animate(content3[next2],{left:28});
	   	  now2=next2;
	   	  
	} 	
   //对小列表进行设置
   for(let i=0;i<lunbo3lis.length;i++){
   	
	   lunbo3lis[i].onclick=function(){
	   	   //如果点击本身的时候就不点击
	   	   if(now2==i){
	   	   	return ;
	   	   }  
	   	   if(now2<i){
	   	   	
		   	  lunbo3lis[now2].id='';
		   	  lunbo3lis[i].id='lunbo1Hot'; 	   	   
		   	  content3[i].style.left=cwidths+'px';
		   	  animate(content3[now2],{left:-cwidths});
		   	  animate(content3[i],{left:28});
		   	  now2=next2=i;	   	  
	   	   }
	   	   if(now2>i){
		   	  lunbo3lis[now2].id='';
		   	  lunbo3lis[i].id='lunbo1Hot';     	  
		   	  content3[i].style.left=-cwidths+'px';
		   	  animate(content3[now2],{left:cwidths+60});
		   	  animate(content3[i],{left:28});
		   	  now2=next2=i;	   	   	
	   	   }
	   }
   }    
    //   第四个
   let cBlis3=contentBot.querySelectorAll('.contentBot>li')[3];
   let content4=cBlis3.getElementsByClassName('content1');
   let lunbo4=document.querySelectorAll('.lunbo1')[3];
   let lunbo4lis=lunbo4.querySelectorAll('.lunbo1>li');
   let now3=next3=0
   
   	let handle7=cBlis3.querySelector('.handle1');
   	let handle8=cBlis3.querySelector('.handle2');
// console.log(handle4);
   	handle7.onclick=function moveCR(){
// 	    moveCR();
	   
	   	  if(next3==0){
	   	  	return ;
	   	  }
	   	  next3--;
	   	  lunbo4lis[now3].id='';
	   	  lunbo4lis[next3].id='lunbo1Hot';     	  
	   	  content4[next3].style.left=-cwidths+'px';
	   	  animate(content4[now3],{left:cwidths+60});
	   	  animate(content4[next3],{left:28});
	   	  now3=next3;
	   	  
	   } 
    handle8.onclick= function moveC(){
// 	    moveC();
	  
	   	  if(next3==content4.length-1){   	  	
	   	  	return;
	   	  }  
	   	  next3++;
		  lunbo4lis[now3].id='';
		  lunbo4lis[next3].id='lunbo1Hot';      	  	  
	   	  content4[next3].style.left=cwidths+'px';
	   	  animate(content4[now3],{left:-cwidths});
	   	  animate(content4[next3],{left:28});
	   	  now3=next3;
	   	  
	} 	
   //对小列表进行设置
   for(let i=0;i<lunbo4lis.length;i++){
   	
	   lunbo4lis[i].onclick=function(){
	   	   //如果点击本身的时候就不点击
	   	   if(now3==i){
	   	   	return ;
	   	   }  
	   	   if(now3<i){
	   	   	
		   	  lunbo4lis[now3].id='';
		   	  lunbo4lis[i].id='lunbo1Hot'; 	   	   
		   	  content4[i].style.left=cwidths+'px';
		   	  animate(content4[now3],{left:-cwidths});
		   	  animate(content4[i],{left:28});
		   	  now3=next3=i;	   	  
	   	   }
	   	   if(now3>i){
		   	  lunbo4lis[now3].id='';
		   	  lunbo4lis[i].id='lunbo1Hot';     	  
		   	  content4[i].style.left=-cwidths+'px';
		   	  animate(content4[now3],{left:cwidths+60});
		   	  animate(content4[i],{left:28});
		   	  now3=next2=i;	   	   	
	   	   }
	   }
   } 
  
})
