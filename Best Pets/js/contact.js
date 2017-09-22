window.addEventListener('load',function(){
	let contact=document.querySelector('.contact');
	let input1=contact.querySelector('input:first-child');
	let input2=contact.querySelector('input:nth-child(2)');
	let input3=contact.querySelector('input:nth-child(3)');
	let textareaN=contact.querySelector('textarea');
	let buttonN=contact.querySelector('.submit');
	let ul1=contact.querySelector('.subinfor');
	let ul1li=contact.querySelector('.subinfor>li:first-child');
	function fn(){
		let input1N=input1.value;
		let input2N=input2.value;
		let input3N=input3.value;
		let textareaNav=textareaN.value;
		let lis=document.createElement('li');
		lis.innerHTML += `
		<div class="headpicture">
			<img src="../img/20170903175213.jpg" alt="" />
	    </div>
	    <div class="look">
	    	<h2>${input1N} ${input3N}</h2>
	    	<h3>${input2N}</h3>
	    	<h4>${textareaNav}</h4>
	    </div>		
		`;
        ul1.appendChild(lis);
		input1.value='';
	    input2.value='';
		input3.value='';
		textareaN.value='';
	}
	
	textareaN.onkeydown=buttonN.onclick=function(e){
		if(e.type=='click'){
			fn.call(buttonN);
		}
		if(e.type=='keydown'){
			if(e.shiftKey && e.keyCode==13){
			  fn.call(textareaN);		
			}
		}
	}
	
})
