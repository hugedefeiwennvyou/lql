window.addEventListener('load',function(){
	let jiadianNav=document.getElementsByClassName('jiadianNav')[0];
    let  jiadianNavRight=document.getElementsByClassName('jiadianNav-right')[0];
    let jiadianlis=jiadianNavRight.querySelectorAll('.jiadianNav-right>li');
    let jbRight=jiadianNavRight.getElementsByClassName('jb-right');
//	console.log(jbRight);
    for(let i=0;i<jiadianlis.length;i++){
    	jiadianlis[i].onmouseenter=function(){
    		for(let j=0;j<jbRight.length;j++){   			
	    		jbRight[j].style.display='none';
	    		jiadianlis[j].classList.remove('jiadianHot');
    		}
    		jbRight[i].style.display='block';
	    	jiadianlis[i].classList.add('jiadianHot');    		
    	}
    	jiadianlis[i].onmouseleave=function(){
    		return;
    	}
    }
	//对智能模块进行设置
	let smartNavRight=document.getElementsByClassName('smartNav-right');
//	console.log(smartNavRight);
    for(let s=0;s<smartNavRight.length;s++){
    	
    let smartNavlis=smartNavRight[s].querySelectorAll('.smartNav-right>li')
    let smartRight=smartNavRight[s].getElementsByClassName('jb-right');
    	
     for(let i=0;i<smartNavlis.length;i++){
     	smartNavlis[i].onmouseenter=function(){
     		for(let j=0;j<smartRight.length;j++){
     			smartRight[j].style.display='none';
	    		smartNavlis[j].classList.remove('jiadianHot');     			
     		}
     		smartRight[i].style.display='block';
     		smartNavlis[i].classList.add('jiadianHot');
     	}
      }
    }	
	
	
	
},false)
