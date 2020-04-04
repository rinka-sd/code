/* 
    向一些CSS不方便修改管理样式的地方进行添加样式
    比起CSS3，dom操作更通用
    功能：
        给某个节点添加样式classA，之后可以通过在CSS中追加/修改classA的样式内容进行修改
    @param element:要添加样式的元素节点
    @param value: 样式名(字符串类型)
*/
function addClass(element,value){
    if(!element.className){
        element.className = value;
    }else{
        element.className += " "+value;
    }
}