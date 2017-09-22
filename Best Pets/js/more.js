window.addEventListener('load',function(){
		//对head中内容进行设置
	let welcomeCP=document.querySelector('.welcomeCP');
	let wcpp2=welcomeCP.querySelector('p:nth-child(2)');
	var str =wcpp2.innerText;
    var i = 0;
    var j=wcpp2.innerHTML;
	function typing(){
	    if (i <= str.length) {
	     wcpp2.innerText= str.slice(0, i++) + '_';
	    }
	    else{
	     wcpp2.innerHTML = j;//结束打字,移除 _ 光标
	    }
   }
   setInterval(typing, 200); //递归调用	

	
})
