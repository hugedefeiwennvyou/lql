window.addEventListener('load',function(){
	let videoList=document.getElementsByClassName('videoList');
	let iconfont1=document.getElementsByClassName('iconfont1');
	let video=document.getElementsByTagName('video');
	for(let i=0;i<iconfont1.length;i++){
		iconfont1[i].onclick=function(){
			video[i].play();
		}
		iconfont1[i].ondbclick=function(){
	   		video[i].pause();
		}		
	}
//	console.log(video);
})
