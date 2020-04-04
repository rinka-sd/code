/*传入一个事件函数f，
**如果window.load为空，则使window.load=f,
**否则，追加到window.load
**最后更新时间：2020/04/02
*/
function addLoadEvent(f){
	var oldLoad = window.onload;
	if(typeof window.onload != 'function'){
		window.onload = f;
	}else{
		window.onload = function (){
			oldLoad();
			f();
		}
	}	
}