//  节点中的原始方法     insertBefore     appendChild 
//      removeChild     cloneNode     replaceChild
//使用removeChild  只能在页面上移除子元素不能清空内存中的数据， 需要null 清空内存
//  p.insertAfter(insert)  p为被插入的元素   insert为要插入的元素
//1.在元素的的后边插入一个子元素 
	HTMLElement.prototype.insertAfter=function (insert){
		let parent=this.parentNode;
		let position1 = this.nextElementSibling;
		//next  隐式类型转换为true
		if(position1){
		      parent.insertBefore(insert,position1);
		}else{
			 parent.appendChild(insert);
			
		}
	}
//2.在元素的前边插入一个元素
//原始方法为   insertBefore   可以直接使用
	
	//往父元素中最前边添加一个元素          p.appstarrtChild(insert)   p为父元素，insert为要插入的元素
	HTMLElement.prototype.appstartChild = function(insert){
		let fC=this.firstElementChild;
		if(fC){
			this.insertBefore(insert,fC);
		}else{
			this.appendChild(insert);
		}
	}	

 //在元素的最后边插入一个元素    直接使用 appendChild   parent.appendChild('要插入的元素');

//  parent.insertBefore(要插入的元素，插入的位置)
  //3.将某个元素插入到另一个元素的前边
  HTMLElement.prototype.insertBeforeTo=function(element){
  	  let parent=element.parentNode;
  	  parent.insertBefore(this,element);
  }
  //4.将某个元素插入到另一个元素的后边
  HTMLElement.prototype.insertAfterTo=function(element){
  	    element.insertAfter(this);
  }
  //5.将某元素插入到父元素的最后边
  HTMLElement.prototype.appendChildTo=function(element){
  	element.appendChild(this);
  	
  }
  //6.将某子元素插入到父元素的最前边
  HTMLElement.prototype.appstartChildTo=function(element){
  	  element.appstartChild(this);
  }
  //7.empty清空自己内部所有的子元素  
   HTMLElement.prototype.empty=function(){
   	//首先获取该元素下的所有子元素   然后将所有的子元素清空
   	 let empty = this.childNodes;
    //因为遍历的时候需要删除，所以正着遍历的时候下标会改变  反着遍历
     for(let i=empty.length-1;i>=0;i--){
     	this.removeChild(empty[i]);
     }
   }
//  HTMLElement.prototype.empty=function(){
//	this.innerHTML='';
//}
//  HTMLElement.prototype.empty=function(){
//	this.innerText='';
//}  

  //8.remove自己移出自已  不需要找自己的父元素
    HTMLElement.prototype.remove=function(){
    	//removeChild   使用的时候  父元素.removeChild(子元素)
    	let parent =this.parentNode;
        parent.removeChild(this);
    }  
  //9.next,nextAll,nextUntil   下一个兄弟节点
   HTMLElement.prototype.next=function(){
   	//找下一个兄弟元素节点  判断是否存在  若存在返回元素，如果没有返回false
   	   let next=this.nextElementSibling;
   	   if(next){
// 	       console.log(next);
   	   	   return next;
   	   }else{
   	   	  return false;
   	   }
   }
   //10.nextAll  下边所有的的兄弟元素节点
      HTMLElement.prototype.nextAll=function(){
   	  let nextN=this.next();
// 	  console.log(nextN)
     //获取元素下边所有的兄弟元素节点   先找该元素下的第一个元素节点，然后在找下一个的下一个
     //如果有返回数组，没有返回false
     let newarr=[];
     if(nextN){
     	 newarr.push(nextN);     	 
     }else{
     	return false;
     }
     //通过while一直找下一个兄弟元素，直到没有元素
     while(nextN){
     	nextN=nextN.next();
     	newarr.push(nextN);
     }
     newarr.pop();
     return newarr;
     
   }
  //11.  nextUntillength  找某一个元素下兄弟元素节点下的某一个范围
   HTMLElement.prototype.nextUntillength=function(length){
   	   //第一种找某一个元素下兄弟元素节点下的某一个范围
   	   let nextN=this.next();
   	   //将该范围内的元素放在一个数组中
   	   let newarr=[];
   	   if(nextN){
   	   	   newarr.push(nextN);
   	   }else{
   	   	  return false;
   	   }
   	   //如果有的话就一直找直到找到规定的长度
      for(let i=0;i<length-1;i++){
      	 nextN=nextN.next();
      	 if(nextN){      	 	
      	 newarr.push(nextN);
      	 }else{
      	 	return '子元素越界';
      	 }
      }
      return newarr;
   }   
  //12.previous 找元素的上一个兄弟元素
  HTMLElement.prototype.previous=function(){
  	  let previous=this.previousElementSibling;
  	  if(previous){
  	     return previous;
  	  }else{
  	     return false;  	  	
  	  }
  }  
  //13.previousAll   找元素的上边的所有兄弟元素
HTMLElement.prototype.previousAll=function(){
	//执行输出的数组是反过来的
	let previous=this.previousElementSibling;
	let newarr=[];
	if(previous){
		newarr.push(previous);
	}else{
		return false;
	}
	while(previous){
		previous=previous.previousElementSibling;
		newarr.push(previous);
	}
	newarr.pop();
	return newarr;
}  
//13.previousUntillength  找某一个元素上兄弟元素节点下的某一个范围
HTMLElement.prototype.previousUnitl=function(length=2){
	let previous= this.previousElementSibling;
	let newarr=[];
	if(previous){
		newarr.push(previous);
	}else{
		return false;
	}
	for(let i=0;i<length;i++){
		if(previous){
			previous=previous.previousElementSibling;
			newarr.push(previous);
		}else{
			return  '子元素越界'
		}
	}
	newarr.pop();
	return newarr;
}
  //14.closet(div) 离他最近的的div  
HTMLElement.prototype.closet=function(tagname){	
  	 //自定义属性，返回下标
  	  let index=1;
  	  //找到父元素
  	  let parent=this.parentNode;
  	  //获取父元素的子元素节点
  	  let  childrens=parent.children;
  	  //找到父元素中总共有多少个元素节点
  	  let count=parent.childElementCount;
//	  console.log(next);
//   console.log(childrens[2].nodeName)
//console.log(tagname.localeCompare(childrens[4].nodeName.toLowerCase()));
      for(let i=0;i<count;i++){  
		  if((tagname.localeCompare(childrens[i].nodeName.toLowerCase()))==0){
		  	     index=i;
		  	     return index;
		  }else{
		  	continue;
		  }
      }
}   
  //15.parent()找父元素
  HTMLElement.prototype.parent=function(){
  	let parent=this.parentNode;
  	return parent;
  }  
  //16.parents() 找父辈元素
  HTMLElement.prototype.parents=function(){
  	 //定义数组存放它的父元素
	 let newarr=[];
  	//调用parent函数
  	 let parent1=this.parent();
	 while(parent1){
	 	//如果调用parent函数null再找父元素会报错所以使用parentNode
  	 	parent1=parent1.parentNode; 	 
	 	newarr.push(parent1);  	 	
	 }
	 return newarr;
}  
//17.parentUntil()找某个范围的父元素  
  HTMLElement.prototype.parentUntil=function(length){
  	  let parent=this.parentNode;
  	  let newarr=[];
  	  for(let i=0;i<length;i++){
  	  	parent=parent.parentNode;
  	  	newarr.push(parent)
  	  }
  	  return newarr;
  }