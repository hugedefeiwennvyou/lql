$(function(){
	//顶部
	let tb=$('.srul>li');
	let mtb=$('.mytaobao');
	let store=$('.store');
	let phone=$('.phone');
	let support=$('.support');
	let webnav=$('.webnav');
	tb.eq(0).hover(function(){
		mtb.css({display:'block'})
	},function(){
		mtb.css({display:'none'})
	})
	tb.eq(3).hover(function(){
		store.css({display:'block'})
	},function(){
		store.css({display:'none'})
	})
	tb.eq(5).hover(function(){
		phone.css({display:'block'})
	},function(){
		phone.css({display:'none'})
	})
	tb.eq(8).hover(function(){
		support.css({display:'block'})
	},function(){
		support.css({display:'none'})
	})
	tb.eq(9).hover(function(){
		webnav.css({display:'block'})
	},function(){
		webnav.css({display:'none'})
	})	
	//侧导航
	let asideulli=$('.asideul>li');
	let asideliNN=$('.asideliNN');
	asideulli.each(function(index,obj){
		$(this).hover(function(){
			asideliNN.eq(index).css({display:'block'})
		},function(){
			asideliNN.eq(index).css({display:'none'})
		})
	})
	//轮播图
	let  bannerli=$('.banner>li');
	let b=setInterval(moveB,2000);
	let lunboli=$('#lunbo>li');
	lunboli.eq(0).addClass('lunboHot');
	let num=0;
	function moveB(){
		num++;
		if(num==bannerli.length){
			num=0;
		}
		bannerli.css({display:'none'})
		bannerli.eq(num).css({display:'block'});
		lunboli.removeClass('lunboHot');
		lunboli.eq(num).addClass('lunboHot');
	}
	//鼠标移入的时候停止循环
	let banner=$('.banner');
	banner.hover(function(){
		clearInterval(b);
	},function(){
		b=setInterval(moveB,2000);
	})
	//轮播底下点击事件
	lunboli.click(function(){
		let indexli=$(this).index('#lunbo>li');
		num=indexli-1;
		console.log(num)
		moveB()
	})
	
	//顶部固定定位的设置
	let news=document.querySelector('.new');
	let newsTop=news.offsetTop;
    console.log(newsTop)
	let beauty=document.querySelector('.beauty');
	let beautyTop=beauty.offsetTop;
	let fixed1=$('.fixed1');
	let fixed1li=$('.fixed1>ul>li')
	let ih=innerHeight;
	let fixSearch=$('.fixSearch');
	let  flag=true;
	let  newarr=[1764,2264,2870,3360,3980,4457,4800,5300,7000];
	let colorArr=['#FF0036','#EA5F8D','#0AA6E8','#64C333',
	'#F15453','#19C8A9','#F7A945','#FF0036','#ACACAC'];
	$(window).scroll(function(){
		//使用开关来控制固定定位的出现
		let  st=document.body.scrollTop;
		if(newsTop<ih+st){
			if(flag){
				flag=false;
				fixSearch.css({top:0});
			}
		}else{
			if(!flag){
				fixSearch.css({top:'-50px'});
				flag=true;
			}
		}
		
		
		//左边的导航
		if(beautyTop<ih+st){
			fixed1.css({display:'block'})
		}else{
			fixed1.css({display:'none'})
		}
		for(let i=0;i<newarr.length;i++){
			var j=i;
			if(newarr[i]<ih+st){
				fixed1li.css({background:'#626262'})
				fixed1li.eq(0).css({background:'#FF0036'})
				fixed1li.eq(8).css({background:'#ACACAC'})
				fixed1li.eq(i).css({background:colorArr[i]})
			}
			fixed1li.click(function(){
				let a=$(this).index();
    	      document.body.animate({scrollTop:newarr[a]},1000)
			})
		}
		
    })
})
