window.onload=function(){
	//对购物车进行设置
	let shopcar=document.getElementsByClassName('shopcar')[0];
	let shopcarNav=document.getElementsByClassName('shopcarNav')[0];
	shopcar.onmouseenter=function(){
		shopcarNav.style.display="block";
	}
	shopcar.onmouseleave=function(){
		shopcarNav.style.display='none';
	}
	//对搜索框进行设置
	let searchForm=document.getElementsByClassName('search-form')[0];
	let searchB=document.getElementsByClassName('searchB')[0];
	let searchBox=document.getElementsByClassName('search-box')[0];
	let naviRight=document.getElementsByClassName('navi-right')[0];
//	console.log(searchForm)
//  使用获得焦点和失去焦点来对searchB进行设置
    searchForm.onfocus=function(){
    	searchB.style.display='block';
    	naviRight.style.borderColor='#FF6700';
    	searchForm.style.borderRightColor='#FF6700';
    }
    searchForm.onblur=function(){
    	searchB.style.display='none';
    }
	//对小列表和点击小列表图片显示的设置
	//第一种  先获取然后执行
//	let asideTop=document.getElementsByClassName('asideTop')[0];
//	let aTlis=asideTop.querySelectorAll('.asideTop>li');
//	let asideLiNav=document.getElementsByClassName('asideLiNav');	
//	for(let i=0;i<aTlis.length;i++){
//		aTlis[i].onmouseenter=function(){
//			asideLiNav[i].style.display='block';
//		}
//		aTlis[i].onmouseleave=function(){
//			asideLiNav[i].style.display='none';
//		}
//	}
   //第二种   在执行效果的时候获取  要出现的div
	let asideTop=document.getElementsByClassName('asideTop')[0];
	let aTlis=asideTop.querySelectorAll('.asideTop>li');
   for(let i=0;i<aTlis.length;i++){   	
   	  aTlis[i].onmouseenter=function(){
   	  	let asideLiNav=this.getElementsByClassName('asideLiNav');
// 	  	console.log(asideLiNav);
   	  	   asideLiNav[0].style.display='block';
   	  }
   	 aTlis[i].onmouseleave=function(){
    	let asideLiNav=this.getElementsByClassName('asideLiNav');  	  	
   	  	asideLiNav[0].style.display='none';
   	  }
   }

   //第三种   使用classList   add   remove     
//	let asideTop=document.getElementsByClassName('asideTop')[0];
//	let aTlis=asideTop.querySelectorAll('.asideTop>li');
//	console.log(aTlis);
//	for(let i=0;i<aTlis.length;i++){
//		aTlis[i].onmouseenter=function(){
//			let asideLiNav=this.getElementsByClassName('asideLiNav');
//			console.log(asideLiNav);
//			asideLiNav[0].classList.add('block');
//			asideLiNav[0].classList.remove('none');
//		}
//		aTlis[i].onmouseleave=function(){
//			let asideLiNav =this.getElementsByClassName('asideLiNav');
//			asideLiNav[0].classList.add('none');
//			asideLiNav[0].classList.remove('block');
//		}
//	}

     //第四种     使用classList   add   remove   先声明后执行
//	let asideTop=document.getElementsByClassName('asideTop')[0];
//	let aTlis=asideTop.querySelectorAll('.asideTop>li');
//	let asideLiNav=document.getElementsByClassName('asideLiNav');	
//	for(let i=0;i<aTlis.length;i++){
//		aTlis[i].onmouseenter=function(){
//		 asideLiNav[i].classList.remove('none');
//		 asideLiNav[i].classList.add('block');
//		}
//		aTlis[i].onmouseleave=function(){
//		 asideLiNav[i].classList.remove('block');
//		 asideLiNav[i].classList.add('none');
//		}		
//	}
    //第五种    使用classList toggle 转换
//	let asideTop=document.getElementsByClassName('asideTop')[0];
//	let aTlis=asideTop.querySelectorAll('.asideTop>li');  
//	for(let i=0;i<aTlis.length;i++){
//		aTlis[i].onmouseenter=function(){
//		   let asideLiNav=this.getElementsByClassName('asideLiNav');
//		   asideLiNav[0].classList.toggle('block');
//		}
//		aTlis[i].onmouseleave=function(){
//			let asideLiNav=this.getElementsByClassName('asideLiNav');
//			asideLiNav[0].classList.toggle('block');
//		}
//	}
   //第六种        使用自定义属性  item
//	let asideTop=document.getElementsByClassName('asideTop')[0];
//	let aTlis=asideTop.querySelectorAll('.asideTop>li');  
//	for(let i=0;i<aTlis.length;i++){
//     aTlis.index=i;
////     console.log(aTlis.index);       
////     aTlis[i].index=i;
////     console.log(aTlis[i].index);
//     aTlis[aTlis.index].onmouseenter=function(){
//         let asideLiNav=this.getElementsByClassName('asideLiNav');
//         asideLiNav[0].classList.toggle('block');
//     }
//     aTlis[aTlis.index].onmouseleave=function(){
//         let asideLiNav=this.getElementsByClassName('asideLiNav');
//         asideLiNav[0].classList.toggle('block');
//     }       
//     console.log(aTlis.index);
//	}

    //对banner中的小列表进行设置
    //第一种方法   对所有元素都进行操作   使用这种方法要在第一个bannerlis中加display：block;  
//  let  lunbo=document.getElementsByClassName('lunbo')[0];
//  let  lunbolis=lunbo.getElementsByTagName('li');
////  console.log(lunbolis);
//  //获取banner的图片
//  let bannerRight=document.getElementsByClassName('banner-right')[0];
//  let bannerlis=bannerRight.querySelectorAll('.banner-right>li');
//  //将所有元素先干掉  然后点击的时候让点击页出现
//  for(let i=0;i<lunbolis.length;i++){		    		
//      lunbolis[i].onclick=function(){   
//	    	for(let j=0;j<lunbolis.length;j++){
//	         	bannerlis[j].style.display='none';
//	         	//对小列表进行设置    使用这种方法的时候需要在lunbolis上加上hot的类
//  	      lunbolis[j].classList.remove('lunboHot');	         	
//	    	}   		
//  	    bannerlis[i].style.display='block';
//	         	//对小列表进行设置   	    
//  	    lunbolis[i].classList.add('lunboHot');
//  	}
//  	
//  }
    //第二种方法    只对当前的几个页面元素进行设置
    let  lunbo=document.getElementsByClassName('lunbo')[0];
    let  lunbolis=lunbo.getElementsByTagName('li');
    let bannerRight=document.getElementsByClassName('banner-right')[0];
    let bannerlis=bannerRight.querySelectorAll('.banner-right>li');
    let num=0;
    for(let i=0;i<lunbolis.length;i++){		    		
	    bannerlis[num].style.display='block';
      //对小列表的颜色进行设置		    
        lunbolis[num].classList.add('lunboHot');
        lunbolis[i].onclick=function(){  
	      bannerlis[num].style.display='none';         	
	      bannerlis[i].style.display='block';  		
	    lunbolis[num].classList.remove('lunboHot');
        lunbolis[i].classList.add('lunboHot');
	        num=i;	      
    	}
}
    
   //对banner中的图片进行自动轮播
   let t=setInterval(moveB,2000);
   function moveB(){
   	 num++;
     if(num==bannerlis.length){
     	num=0;
     }
//该循环是为了控制轮播以后其他的隐藏  num显示
     for(let i=0;i<bannerlis.length;i++){
     	bannerlis[i].style.display='none';
	   lunbolis[i].classList.remove('lunboHot');      	
     }
	   lunbolis[num].classList.add('lunboHot');     
	   bannerlis[num].style.display='block';     
   }
//当鼠标移入banner的时候图片停止
   bannerRight.onmouseenter=function(){
   	  clearInterval(t);
   }
   bannerRight.onmouseleave=function(){
     t=setInterval(moveB,2000);
   }   
   
  //对左右按钮进行设置
  let  handleLeft=document.getElementsByClassName('handle-left')[0];
  let  handleRight=document.getElementsByClassName('handle-right')[0];
  //move 是函数名，不能是move()
  handleLeft.onclick = moveB;
  handleRight.onclick = moveBr;
   function moveBr(){
   	 num--;
     if(num==-1){
     	num=bannerlis.length-1;
     }
//该循环是为了控制轮播以后其他的隐藏  num显示
     for(let i=0;i<bannerlis.length;i++){
     	bannerlis[i].style.display='none';
	   lunbolis[i].classList.remove('lunboHot');      	
     }
	   lunbolis[num].classList.add('lunboHot');     
	   bannerlis[num].style.display='block';     
   }
  //对nav上边下滑进行设置
  let navul=document.getElementsByClassName('navul')[0];
  let navli1=navul.querySelectorAll('.navul>li');
//console.log(num);  0
//  navliN[0].style.width=document.documentElement.clientWidth+'px';
//  console.log(`${innerWidth}`);
   for(let i=0; i<navli1.length-2;i++){
   	  navli1[i].onmouseenter=function(){
        let navliN=this.getElementsByClassName('navliN');   	  	
   	  	navliN[0].style.display='block';
   	  }
   	  navli1[i].onmouseleave=function(){
        let navliN=this.getElementsByClassName('navliN');   	  	
   	  	navliN[0].style.display='none';
   	  }   	  
   }
   //对小米明星单品的左右滑动进行设置
   let starBottom1=document.getElementsByClassName('starBottom1');  
   //对明星单品中的按钮进行设置
   let stRightLeft=document.getElementsByClassName('stRight-left')[0];
   let stRightRight=document.getElementsByClassName('stRight-right')[0];   
// console.log(getComputedStyle(starBottom1[0],null).marginLeft);  0
// console.log(getComputedStyle(starBottom1[1],null).marginLeft);  0
   let s=setInterval(smove,3000);
   let flag =true;	
   function smove(){   
     if(flag){
     	starBottom1[0].style.marginLeft = '-1226px';
     	flag = !flag;
     }else{
     	starBottom1[0].style.marginLeft = '0px';
     	flag = !flag;
     }    
     
     //对明星单品使用开关让它左右动   遇到边界停止
     
   //对明星单品中的按钮进行设置     
     var result=flag;
//   console.log(result);     
     if(!result){      
       stRightLeft.onclick=function smovel(){ 
	     	starBottom1[0].style.marginLeft = '-1226px'; 
       }     
	     	stRightLeft.id='djend';
	     	stRightRight.id='djstart';
	     	stRightLeft.style.cursor='default';
	     	stRightRight.style.cursor='pointer';
//          console.log(stRightRight.style.cursor);
//          if(stRightRight.style.cursor=='pointer'){
//		       stRightLeft.onmouseenter=function smovel(){ 
//			     	stRightLeft.id='sRLhover';
//		       }  
//		       stRightLeft.onmouseleave=function smovel(){ 
//			     	stRightLeft.id='djstart';	
//		       }             	
//          }else{
//          	
//          }
     }   
     if(result){
//     stRightRight.onmouseenter=function smovel(){ 
//	     	stRightRight.id='sRLhover';
//     }  
//     stRightRight.onmouseleave=function smovel(){ 
//	     	stRightRight.id='djstart';	
//     }      
//     stRightRight.onmouseenter=function (){ 
//	     	clearInterval(s);
//     }
//     stRightRight.onmouseleave=function(){ 
//	     	s=setInterval(smove,3000);
//     }       
       stRightRight.onclick=function smovel(){ 
	     	starBottom1[0].style.marginLeft = '0px'; 	
	     	flag=!flag;
       }
	     	stRightRight.id='djend';
	     	stRightLeft.id='djstart';
	     	stRightRight.style.cursor='default';	 
	     	stRightLeft.style.cursor='pointer';	 
//          if(stRightLeft.style.cursor=='pointer'){
//		       stRightRight.onmouseenter=function smovel(){ 
//			     	stRightRight.id='sRLhover';
//		       }  
//		       stRightRight.onmouseleave=function smovel(){ 
//			     	stRightRight.id='djstart';	
//		       }             	
//          }else{
//          	
//          }	     	
     }
   
  }
 	//为你推荐的实现
	let rdBottom=document.querySelector('.rdBottom');
//	console.log(rdBottom);
	//设置总共的ul轮播个数
	//indexR 为当前显示的的第几屏
	let  indexR=0;
	//找rdBottom的子元素节点的数量
	let  count =rdBottom.childElementCount;
//	console.log(count);
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
//console.log(rtRight1);

//实现自动轮播    
//let r=setInterval(moveR,2000);
//let flagR=true;
//function moveR(){
//	if(flagR){
//	   if(indexR==count-1){
//	   	  flagR=false;
//	   	  return;
//	   }
// 	   indexR++;
// 	   rdBottom.style.marginLeft=`${-rwidth*indexR}px`;  		
//	}else{
//		if(indexR==0){
//			flagR=true;
//			return;
//		}
//  	indexR--;
// 	    rdBottom.style.marginLeft=`${-rwidth*indexR}px`;   		
//	}
//}
  
  
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
    	console.log(2);	
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
 
 
 
}