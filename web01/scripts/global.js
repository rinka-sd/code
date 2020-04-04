function addClass(element,value){
    if(!element.className){
        element.className = value;
    }else{
        element.className += " "+value;
    }
}

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

function insertAfter(newNode,targetNode){
	var parentnode = targetNode.parentNode;
	if(parentnode.lastChild == targetNode){
		parentnode.appendChild(newNode);
	}else{
		parentnode.insertBefore(newNode,targetNode.nextSibling);
	}
}

function highLightPage(){
    if(!document.getElementById)return false;
    if(!document.getElementsByTagName)return false;
    var headers =  document.getElementsByTagName('header');
    if(headers.length == 0)return false;
    var navs = headers[0].getElementsByTagName('nav');
    if(navs.length == 0)return false;
    var links = navs[0].getElementsByTagName('a');
    var linkUrl;
    for(let i=0;i<links.length;i++){
        linkUrl = links[i].getAttribute('href');
        if(window.location.href.indexOf(linkUrl)!=-1){
            links[i].className = "here";
            let linkText = links[i].lastChild.nodeValue.toLowerCase();
            document.body.setAttribute("id",linkText);
        }
    }
}
addLoadEvent(highLightPage);

function showSection(id){
    let sections = document.getElementsByTagName('section');
    for(let i=0;i<sections.length;i++){
        if(sections[i].getAttribute('id')==id){
            sections[i].style.display = 'block';
        }else{
            sections[i].style.display = 'none';
        }
    }
}



function prepareInternalNav(){
    if(!document.getElementsByTagName)return false;
    if(!document.getElementById)return false;
    var articles = document.getElementsByTagName('article');
    if(articles.length==0)return false;
    var navs = articles[0].getElementsByTagName('nav');
    if(navs.length==0)return false;
    var nav = navs[0];
    var links = nav.getElementsByTagName('a');
    for(let i=0;i<links.length;i++){
        var sectionId = links[i].getAttribute('href').split("#")[1];
        if(!document.getElementById(sectionId))continue;
        document.getElementById(sectionId).style.display = 'none';
        links[i].destination = sectionId;
        links[i].onclick = function(){
            showSection(this.destination);
            return false;
        }
    }
}
addLoadEvent(prepareInternalNav);

function showPic(whichPic){
    if(!document.getElementById('placeholder'))return true;
    let source = whichPic.getAttribute('href');
    let placeholder = document.getElementById('placeholder');
    placeholder.setAttribute('src',source);
    if(!document.getElementById('description'))return false;
    let text = "";
    if(whichPic.getAttribute('title')){
        text = whichPic.getAttribute('title');
    }else{
        text = "";
    }
    let description = document.getElementById('description');
    if(description.firstChild.nodeType==3){
        description.firstChild.nodeValue = text;
    }
    return false;
}

function preparePlacehoder(){
    if(!document.createElement)return false;
    if(!document.createTextNode)return false;
    if(!document.getElementById)return false;
    if(!document.getElementById('imagegallery'))return false;
    var placehoder = document.createElement('img');
    placehoder.setAttribute('id','placeholder');
    placehoder.setAttribute('src','../images/placeholder.png');
    placehoder.setAttribute('alt','my image gallery');
    let description = document.createElement('p');
    description.setAttribute('id','description');
    let des_text = document.createTextNode('choose an image');
    description.appendChild(des_text);
    let gallery = document.getElementById('imagegallery');
    insertAfter(description,gallery);
    insertAfter(placehoder,description);
}

function prepareGallery(){
    if(!document.getElementsByTagName)return false;
    if(!document.getElementById)return false;
    if(!document.getElementById('imagegallery'))return false;
    let gallery = document.getElementById('imagegallery'); 
    let links = gallery.getElementsByTagName('a');
    for(let i=0;i<links.length;i++){
        links[i].onclick = function(){
            showPic(this);
            return false;
        }
    }
}
addLoadEvent(preparePlacehoder);
addLoadEvent(prepareGallery);

function stripeTable(){
    if(!document.getElementsByTagName)return false;
    let tables = document.getElementsByTagName('table');
    let odd,rows;
    for(let i=1;i<tables.length;i++){
        odd = false;
        rows = tables[i].getElementsByTagName('tr');
        for(let j=0;j<rows.length;j++){
            if(odd==true){
                addClass(rows[j],"odd")
                odd = false;
            }else{
                odd = true;
            }
        }
    }
}
addLoadEvent(stripeTable);

function highLightRows(){
    if(!document.getElementsByTagName)return false;
    let rows = document.getElementsByTagName('tr');
    for(let i=0;i<rows.length;i++){
        rows[i].oldClassName = rows[i].className;
        rows[i].onmouseover = function(){
            addClass(this,'highlight');
        }
        rows[i].onmouseout = function(){
            this.className = this.oldClassName;
        }
    }
}
addLoadEvent(highLightRows);

function displayAbbreviations(){
    // 兼容性检查
    if(!document.getElementsByTagName)return false;
    if(!document.createTextNode)return false;
    if(!document.createElement)return false;
    // 获取缩略词
    var abbr = document.getElementsByTagName('abbr');
    if(abbr.length<1)return false;
    var defs = [];
    // 遍历缩略词，保存对应的
    for(let i=0;i<abbr.length;i++){
        //兼容早期IE不支持<abbr>,它计数时会显示0
        if(abbr[i].childNodes.length<1)continue;
        let definition = abbr[i].getAttribute('title');
        let key = abbr[i].lastChild.nodeValue;
        defs[key] = definition;
    }
    // 建立缩略词列表节点
    var distl = document.createElement('dl');
    for(key in defs){
        let definition = defs[key];
        let dtitle = document.createElement('dt');
        let dtitle_text = document.createTextNode(key);
        dtitle.appendChild(dtitle_text);
        let ddesc = document.createElement('dd');
        let ddesc_text = document.createTextNode(definition);
        ddesc.appendChild(ddesc_text);
        distl.appendChild(dtitle);
        distl.appendChild(ddesc);
    }
    //兼容IE，不支持时，defs为空，所以不会建立列表节点dt/dd，提前判断并退出
    if(distl.childNodes.length<1)return false;
    // 新建缩略词标题 将标题与列表追加到article节点上
    var header = document.createElement('h2');
    var header_text = document.createTextNode("Abbreviations");
    header.appendChild(header_text);

    let articles = document.getElementsByTagName('article');
    if(articles.length == 0)return false;
    let article = articles[0];
    article.appendChild(header);
    article.appendChild(distl);
}
addLoadEvent(displayAbbreviations);

function focusLabels(){
    if(!document.getElementsByTagName)return false;
    let labels = document.getElementsByTagName('label');
    for(let i=0;i<labels.length;i++){
        if(!labels[i].getAttribute('for'))continue;
        labels[i].onclick = function(){
            let id = this.getAttribute('for');
            if(!document.getElementById(id))return false;
            document.getElementById(id).focus(); 
        }
    }
}
addLoadEvent(focusLabels);