window.addEventListener('load',function(){
	let fixSearch=document.getElementsByClassName('fixSearch')[0];
	//要实现在某一个高度的时候上边固定栏下来
	//首先要得到  屏幕下滑的位置    和     需要的距离是否一致    
	//flag   当上去的时候为true  当下滑到某个高度的时候 为false   防止卡顿
	let flag=true;
	//要知道屏幕的高度，使用滚动事件   scrollTop	
	//实现左边定位fixed1的实现
	let  fixed1=document.querySelector('.fixed1');	
	let fixed1lis=document.querySelectorAll('.fixed1 li');
//	console.log(fixed1lis);
	let  newarr=[1764,2264,2870,3360,3980,4457,4800,5300,7000];
	let colorArr=['#FF0036','#EA5F8D','#0AA6E8','#64C333',
	'#F15453','#19C8A9','#F7A945','#FF0036','#ACACAC'];
//   对fixed1对应的导航颜色改变设置    导航改变      屏幕的高度+滚动的高度=对应模块距离文档的距离时显示
    let  sw=window.innerHeight;
	window.onscroll=function(){
      let cw=document.body.scrollTop;
      let heights=sw+cw;
      let a=0;
//    console.log(cw)
      //左边固定栏点击事件
      let b=0;
      for(let j=0;j<newarr.length;j++){
      	fixed1lis[j].onmouseenter=function(){
       		fixed1lis[b].style.background='#626262';  
      	 	fixed1lis[j].style.background=colorArr[j];      		
      	}
      	fixed1lis[j].onmouseleave=function(){
      	 	 b=j;     		
      	}   
       	 fixed1lis[0].style.background='#FF0036';       	
      	 fixed1lis[j].onclick=function(){
      	 	//使用动画让点击事件执行
      	 	animate(document.body,{scrollTop:newarr[j-1],},500)
      	 }
      }
      
      
      for(let i=0;i<newarr.length;i++){
      	if(heights>=newarr[i]){
        	fixed1lis[a].style.background='#626262';       		
      		fixed1lis[i].style.background=colorArr[i];
//    		console.log(1);
      	}else{
       		fixed1lis[i].style.background='#626262';     		
      	}
             a=i;
       		fixed1lis[0].style.background='#FF0036';       		
      	
      }
      




      if(cw>700){
      	if(flag){
      		 flag=false;
      		//当屏幕滑动到700的时候让fixed1 显示
      		fixed1.style.display='block';
	      	fixSearch.style.display='block';
      	}
      }else{
      	if(!flag){
	      	fixSearch.style.display="none";
	      	fixed1.style.display='none';
	      	flag=true;
      		
      	}
      }
	}
})
