/*
* @Author: lenovo
* @Date:   2017-09-19 13:35:01
* @Last Modified by:   lenovo
* @Last Modified time: 2017-09-19 20:05:04
*/
/*兼容
  1.true
  2.false
  */
function getClass(classname,ranger){   //getClass是类
	if (false){  //判断兼容性    无IE,写(false)
		return document.getElementsByClassName(classname);
	}else{
		var newarr=[];
		var all=document.getElementsByTagName('*');
		for (var i=0;i<all.length;i++){
			if (checkClass(all[i].className,classname)){  //check用于判断className中是否包含classname
				newarr.push(all[i]);
			}
		}
		return newarr;
	}
}
function checkClass(className,classname){
	var arr=className.split(' ');  //将className分解
	for (var i=0;i<arr.length;i++){
		if (arr[i]==classname){  //判断arr中是否有classname
			return true;
		}
		return false;
	}
	
}