/*
功能：将一个节点插入到另一个节点之后
使用到的DOM方法与属性：
	方法：
		appendChild
		insertBefore(newNode,targetNode)
	属性：
		parentNode
		lastChild
		nextSibling
最后更新时间：2020/04/02
*/
function insertAfter(newNode,targetNode){
	var parentnode = targetNode.parentNode;
	if(parentnode.lastChild == targetNode){
		parentnode.appendChild(newNode);
	}else{
		parentnode.insertBefore(newNode,targetNode.nextSibling);
	}
}