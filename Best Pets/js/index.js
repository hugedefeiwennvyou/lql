window.onload=function(){	
	//对导航中page的小三角进行设置
	let nav=document.querySelector('.nav');
	let navNav=document.querySelector('.navNav');
	let sjx=document.querySelector('#sjx');
	let sjxli=document.querySelector('.nav>li:nth-child(3)');
	let sjxlis=document.querySelector('.navNav>li:nth-child(3)');
	let sjxlis4=document.querySelector('.navNav>li:nth-child(4)');
	let page=sjxli.querySelector('.page');
	let page1=navNav.querySelector('.page');
	let pflag=true;
	let pflag1=true;
	sjxli.onmouseenter=function(){
		sjx.style.transform='rotateZ(180deg)';
		sjx.style.transition='0.5s';		
	}
	sjxli.onmouseleave=function(){
		sjx.style.transform='rotateZ(0deg)';
		sjx.style.transition='0.5s';		
	}	
	sjxli.onclick=function(e){
		e.stopPropagation();
		if(pflag){
		   page.style.height=78+'px';
		   pflag=false;
		}else{
		   page.style.height=0;		
		   pflag=true;
		}			

	}
	document.body.onclick=function(e){
		   page.style.height=0;	
		   pflag=true;	
		   page1.style.height=0;	
		   pflag1=true;	
	}
    sjxlis.style.paddingBottom=26+'px';	
	sjxlis.onclick=function(e){
		e.stopPropagation();
		if(pflag1){
		   sjxlis.style.paddingBottom=18+'px';
		   sjxlis4.style.height='auto';
		   sjxlis4.style.paddingBottom=26+'px';
		   page1.style.height=58+'px';
		   pflag1=false;
		}else{
		   sjxlis.style.paddingBottom=0+'px';			
		   page1.style.height=0;		
		   pflag1=true;
		}			

	}
    
    //小屏幕小的动画效果
    //头部nav的动画效果
    let minnav=document.querySelector('.minnav');
    let nav1=document.querySelector('.nav1');
    let flag1=true;
    navNav.style.height=0+'px';    
    nav1.onclick=function(){
    	if(flag1){
    		navNav.style.height='auto';
    		flag1=false;
    	}else{
    		navNav.style.height=0;
    		flag1=true;
    	}
    }	
    //加载固定定位开始
    let header=document.querySelector('header');
    let iH=innerHeight;
    let fixed=document.querySelector('.fixed');
    window.onscroll=function(){
    	let sh=document.body.scrollTop;
    	if(sh+iH>iH){
    		fixed.style.display='block';
    	}else{
    		fixed.style.display='none';
    	}
    }
    //固定定位结束	
	
	
	
	//对About中的aboutLeft设置动画
	let  aboutLeft=document.querySelector('.aboutLeft');
	let  aLlis=document.querySelectorAll('.aboutLeft>li');
	let  aLlisW=aLlis[0].offsetWidth;
	let  aboutD=document.querySelector('.aboutD');
	let  aboutDlis=document.querySelectorAll('.aboutD>li');
	let  now=next=0;
	let flag=true;
    //让每图片没轮播一次底下滑动一次
    let abtransform=document.querySelector('.abtransform');
    let abtW=abtransform.offsetWidth;
    let abtransformA=document.querySelector('.abtransformA');
      abtransformA.style.width=abtW+'px';
//  abtransformA.addEventListener('webkitTransitionEnd',function(){
	  let a = setInterval(moveA,3000);
		function moveA(){
			//下边的滑动条
			next++;
			if(next==aLlis.length){
				next=0;
			}
			//就位
			aLlis[next].style.left=aLlisW+'px';
			animate(aLlis[now],{left:-aLlisW});
			animate(aLlis[next],{left:0},function(){
				//防止快速点击的时候出现多张图片一起出现
				flag=true;
			});
			aboutDlis[now].classList.remove('aboutDHot');
			aboutDlis[next].classList.add('aboutDHot');
			now=next;	
	 }
		
	//获取左右按钮
	let aboutBback=document.querySelector('.aboutBback');
	let aboutBgo=document.querySelector('.aboutBgo');
	aboutBback.onclick=function(){
		if(flag){
			flag=false;
			moveABack();
		}
	};
	aboutBgo.onclick=function(){
		if(flag){
			flag=false;
			moveA();
		}
	};
	function moveABack(){
		next--;
		if(next==-1){
			next=aLlis.length-1;
		}
		aLlis[next].style.left=-aLlisW+'px';
		animate(aLlis[now],{left:aLlisW});
		animate(aLlis[next],{left:0},function(){
			flag=true;
		});
		now=next;
	}
    //移动到页面上要清掉循环
    aboutLeft.onmouseenter=function(){
    	clearInterval(a);
    }
    aboutLeft.onmouseleave=function(){
    	a = setInterval(moveA,3000);
    }
    //底下小列表的设置
    for(let i=0;i<aboutDlis.length;i++){
    	aboutDlis[i].onclick=function(){
    		if(now==i){
    			return;
    		}
    		if(now<i){
    			
	    		aLlis[i].style.left=aLlisW+'px';
	    		animate(aLlis[now],{left:-aLlisW});
	    		animate(aLlis[i],{left:0});
    		}
    		if(now>i){
    			
	    		aLlis[i].style.left=-aLlisW+'px';
	    		animate(aLlis[now],{left:aLlisW});
	    		animate(aLlis[i],{left:0});
    		}    		
		aboutDlis[now].classList.remove('aboutDHot');
		aboutDlis[i].classList.add('aboutDHot');
    		now=next=i;
    		
    	  }		
		}
//            abtransformA.style.transition='none';		
//            abtransformA.style.width=0+'px';	
//		    setTimeout(function(){
//		      abtransformA.style.width=abtW+'px';
//            abtransformA.style.transition='5s';
//  	      clearInterval(a);              
//		    },1)
//  })

		   
    //固定搜索定位开始
  let searchForm=document.querySelector('.searchForm');
  let flag2=true;
  window.onscroll=function(){
  	  let bs=document.body.scrollTop;
	  if(bs>1000){
  	     if(flag2){
	  	  	searchForm.style.height='60px';
	  	  	flag2=false;
	  	  }	  	
  	  }else{
	  	  if(!flag2){
		  	  	searchForm.style.height=0;
		  	  	flag2=true;
	  	  }  	  	
  	  }


    //固定搜索定位结束    	
  }


}
