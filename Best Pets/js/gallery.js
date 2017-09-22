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
    	
    //固定定位结束	
    	
    	
    }
}