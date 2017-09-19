/*
* @Author: lenovo
* @Date:   2017-09-18 17:14:34
* @Last Modified by:   lenovo
* @Last Modified time: 2017-09-19 23:48:58
*/

    //第一种：lis>items
// window.onload=function(){
// 	let aside=document.getElementsByClassName('aside')[0];
// 	let lis=aside.getElementsByTagName('li');
// 	let items=document.getElementsByClassName('items');
// 	for (let i=0;i<lis.length;i++){  //声明用let
// 		lis[i].onmouseover=function(){
//             items[i].style.display='block';
// 	    }
// 	    lis[i].onmouseout=function(){
//             items[i].style.display='none';
// 	    }
// 	}
// }

    //第二种：className再加个block
// window.onload=function(){
// 	let aside=document.getElementsByClassName('aside')[0];
// 	let lis=aside.getElementsByTagName('li');
// 	let items=document.getElementsByClassName('items');
// 	for (let i=0;i<lis.length;i++){
// 		lis[i].onmouseover=function(){
// 			items[i].className='items block';
// 		}
// 		lis[i].onmouseout=function(){
// 			items[i].className='items';
// 		}
// 	}
// }

    //第三种：lis里的items,用this
window.onload=function(){
	let aside=document.getElementsByClassName('aside')[0];
	let lis=aside.getElementsByTagName('li');
	let bannertu=document.getElementsByClassName('bannertu')[0];
	let ttt=bannertu.getElementsByClassName('ttt')[0];
	let img=ttt.getElementsByTagName('li');
	let yuan=document.getElementsByClassName('yuan')[0];
	let lis2=yuan.getElementsByTagName('li');
	let left=bannertu.getElementsByClassName('pre');
	let right=bannertu.getElementsByClassName('next');

	
	for (let i=0;i<lis.length;i++){
		lis[i].onmouseover=function(){
			let items=this.getElementsByClassName('items')[0];
            items.className='items block';
		}
		lis[i].onmouseout=function(){
			let items=this.getElementsByClassName('items')[0];
			items.className='items';
		}
	}
	

	// for (let i=0;i<lis2.length;i++){   //第一种：显示之前都消失，点击当前图片显示
	// 	lis2[i].onmouseover=function(){
	// 		for(let i=0;i<lis2.length;i++){
	// 			lis2[i].style.background='rgba(0, 0, 0, 0.5)';
	// 		    lis2[i].style.border='none';
	// 		    img[i].style.opacity='0';   //显示之前都消失
	// 		}
	// 		lis2[i].style.border='2px solid #a2a2a2';
	// 		lis2[i].style.background='rgba(255, 255, 255, 0.5)';
	// 		img[i].style.opacity='1';  //当前图片显示
	// 	}
	// }
	// let now=0;
	// for (let i=0;i<lis2.length;i++){   //第二种：当前消失，点击显示
 //        lis2[i].onmouseover=function(){
 //        // lis2[now].style.background='rgba(0, 0, 0, 0.5)';
		    // lis2[now].style.border='none';
 //        	img[now].style.opacity='0';
 //        	img[i].style.opacity='1';
 //        	now=i;
 //        	lis2[i].style.border='2px solid #a2a2a2';
		  // lis2[i].style.background='rgba(255, 255, 255, 0.5)';
 //        }
	// }
	// let now=0;
	// for (var i=0;i<lis2.length;i++){   //第三种：当前消失，点击显示  若用var，需加属性
 //        lis2[i].index=i;
 //        lis2[i].onmouseover=function(){
 //            lis2[now].style.background='rgba(0, 0, 0, 0.5)';
	// 	    lis2[now].style.border='none';
 //        	img[now].style.opacity='0';
 //        	img[this.index].style.opacity='1';
 //        	now=this.index;
 //        	 lis2[i].style.border='2px solid #a2a2a2';
	// 	  lis2[i].style.background='rgba(255, 255, 255, 0.5)';
 //        }
	// }
	let now=0;
	for (var i=0;i<lis2.length;i++){   //第四种：闭包函数+函数自调用
		lis2[i].onmouseover=(function(i){
			return function(){
				lis2[now].style.background='rgba(0, 0, 0, 0.5)';
				lis2[now].style.border='none';
				img[now].style.opacity='0';
        	    img[i].style.opacity='1';
        	    now=i;
        	    lis2[i].style.border='2px solid #a2a2a2';
				lis2[i].style.background='rgba(255, 255, 255, 0.5)';
			}
		})(i);
	}



	let num=0;
	let t=setInterval(move,3000);
	function move(){
		num++;
		if (num==img.length){
			num=0;
		}
		for (let i=0;i<img.length;i++){
			lis2[i].style.background='rgba(0, 0, 0, 0.5)';
			lis2[i].style.border='none';
			img[i].style.opacity='0';
		}
		img[num].style.opacity='1';
		lis2[num].style.border='2px solid #a2a2a2';
		lis2[num].style.background='rgba(255, 255, 255, 0.5)';
	}

    function movel(){
		num--;
		if (num<0){
			num=img.length-1;
		}
		for (let i=0;i<img.length;i++){
			lis2[i].style.background='rgba(0, 0, 0, 0.5)';
			lis2[i].style.border='none';
			img[i].style.opacity='0';
		}
		img[num].style.opacity='1';
		lis2[num].style.border='2px solid #a2a2a2';
		lis2[num].style.background='rgba(255, 255, 255, 0.5)';
	}

    
    bannertu.onmouseover=function(){
    	clearInterval(t);
    }
    bannertu.onmouseout=function(){
    	t=setInterval(move,3000);
    }
    left[0].onclick=function(){
    	movel();
    }
    right[0].onclick=function(){
    	move();
    }
}
