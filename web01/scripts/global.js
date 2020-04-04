function addClass(a,b){if(!a.className){a.className=b}else{a.className+=" "+b}}function addLoadEvent(a){var b=window.onload;if(typeof window.onload!="function"){window.onload=a}else{window.onload=function(){b();a()}}}function insertAfter(b,c){var a=c.parentNode;if(a.lastChild==c){a.appendChild(b)}else{a.insertBefore(b,c.nextSibling)}}function highLightPage(){if(!document.getElementById){return false}if(!document.getElementsByTagName){return false}var f=document.getElementsByTagName("header");if(f.length==0){return false}var e=f[0].getElementsByTagName("nav");if(e.length==0){return false}var b=e[0].getElementsByTagName("a");var a;for(var d=0;d<b.length;d++){a=b[d].getAttribute("href");if(window.location.href.indexOf(a)!=-1){b[d].className="here";var c=b[d].lastChild.nodeValue.toLowerCase();document.body.setAttribute("id",c)}}}addLoadEvent(highLightPage);function showSection(c){var b=document.getElementsByTagName("section");for(var a=0;a<b.length;a++){if(b[a].getAttribute("id")==c){b[a].style.display="block"}else{b[a].style.display="none"}}}function prepareInternalNav(){if(!document.getElementsByTagName){return false}if(!document.getElementById){return false}var c=document.getElementsByTagName("article");if(c.length==0){return false}var e=c[0].getElementsByTagName("nav");if(e.length==0){return false}var f=e[0];var a=f.getElementsByTagName("a");for(var b=0;b<a.length;b++){var d=a[b].getAttribute("href").split("#")[1];if(!document.getElementById(d)){continue}document.getElementById(d).style.display="none";a[b].destination=d;a[b].onclick=function(){showSection(this.destination);return false}}}addLoadEvent(prepareInternalNav);function showPic(e){if(!document.getElementById("placeholder")){return true}var b=e.getAttribute("href");var d=document.getElementById("placeholder");d.setAttribute("src",b);if(!document.getElementById("description")){return false}var c="";if(e.getAttribute("title")){c=e.getAttribute("title")}else{c=""}var a=document.getElementById("description");if(a.firstChild.nodeType==3){a.firstChild.nodeValue=c}return false}function preparePlacehoder(){if(!document.createElement){return false}if(!document.createTextNode){return false}if(!document.getElementById){return false}if(!document.getElementById("imagegallery")){return false}var c=document.createElement("img");c.setAttribute("id","placeholder");c.setAttribute("src","../images/placeholder.png");c.setAttribute("alt","my image gallery");var b=document.createElement("p");b.setAttribute("id","description");var d=document.createTextNode("choose an image");b.appendChild(d);var a=document.getElementById("imagegallery");insertAfter(b,a);insertAfter(c,b)}function prepareGallery(){if(!document.getElementsByTagName){return false}if(!document.getElementById){return false}if(!document.getElementById("imagegallery")){return false}var a=document.getElementById("imagegallery");var b=a.getElementsByTagName("a");for(var c=0;c<b.length;c++){b[c].onclick=function(){showPic(this);return false}}}addLoadEvent(preparePlacehoder);addLoadEvent(prepareGallery);function stripeTable(){if(!document.getElementsByTagName){return false}var c=document.getElementsByTagName("table");var e,d;for(var b=1;b<c.length;b++){e=false;d=c[b].getElementsByTagName("tr");for(var a=0;a<d.length;a++){if(e==true){addClass(d[a],"odd");e=false}else{e=true}}}}addLoadEvent(stripeTable);function highLightRows(){if(!document.getElementsByTagName){return false}var b=document.getElementsByTagName("tr");for(var a=0;a<b.length;a++){b[a].oldClassName=b[a].className;b[a].onmouseover=function(){addClass(this,"highlight")};b[a].onmouseout=function(){this.className=this.oldClassName}}}addLoadEvent(highLightRows);function displayAbbreviations(){if(!document.getElementsByTagName){return false}if(!document.createTextNode){return false}if(!document.createElement){return false}var o=document.getElementsByTagName("abbr");if(o.length<1){return false}var c=[];for(var e=0;e<o.length;e++){if(o[e].childNodes.length<1){continue}var a=o[e].getAttribute("title");var m=o[e].lastChild.nodeValue;c[m]=a}var n=document.createElement("dl");for(m in c){var a=c[m];var g=document.createElement("dt");var b=document.createTextNode(m);g.appendChild(b);var l=document.createElement("dd");var h=document.createTextNode(a);l.appendChild(h);n.appendChild(g);n.appendChild(l)}if(n.childNodes.length<1){return false}var f=document.createElement("h2");var k=document.createTextNode("Abbreviations");f.appendChild(k);var d=document.getElementsByTagName("article");if(d.length==0){return false}var j=d[0];j.appendChild(f);j.appendChild(n)}addLoadEvent(displayAbbreviations);function focusLabels(){if(!document.getElementsByTagName){return false}var b=document.getElementsByTagName("label");for(var a=0;a<b.length;a++){if(!b[a].getAttribute("for")){continue}b[a].onclick=function(){var c=this.getAttribute("for");if(!document.getElementById(c)){return false}document.getElementById(c).focus()}}}addLoadEvent(focusLabels);function resetFields(b){if(Modernizr.input.placeholder){return
}for(var c=0;c<b.elements.length;c++){var d=b.elements[c];if(d.type=="submit"){continue}var a=d.placeholder||d.getAttribute("placeholder");if(!a){continue}d.onfocus=function(){var e=this.placeholder||d.getAttribute("placeholder");if(this.value==e){this.className="";this.value=""}};d.onblur=function(){if(this.value==""){this.className="placeholder";this.value=this.placeholder||d.getAttribute("placeholder")}};d.onblur()}}function isFilled(a){if(a.value.replace(" ","").length==0){return false}var b=a.placeholder||a.getAttribute("placeholder");return(a.value!=b)}function isEmail(a){return(a.value.indexOf("@")!=-1&&a.value.indexOf(".")!=-1)}function validateForm(a){for(var c=0;c<a.elements.length;c++){var b=a.elements[c];if(b.required=="required"){if(!isFilled(b)){alert("Please fill in the "+b.name+"field");return false}}if(b.type=="email"){if(!isEmail(b)){alert("Please input valid email");return false}}}return true}function prepareForms(){for(var a=0;a<document.forms.length;a++){var b=document.forms[a];resetFields(b);b.onsubmit=function(){if(!validateForm(this)){return false}var c=document.getElementsByTagName("article")[0];if(submitWithAjax(this,c)){return false}return true}}}addLoadEvent(prepareForms);function getHttpObject(){if(typeof XMLHttpRequest==="undefined"){XMLHttpRequest=function(){try{return new ActiveXObject("Msxml2.XMLHTTP")}catch(a){}try{return new ActiveXObject("Msxml2.XMLHTTP.3.0")}catch(a){}try{return new ActiveXObject("Msxml2.XMLHTTP.6.0")}catch(a){}}}return new XMLHttpRequest()}function displayAjaxLoading(b){while(b.hasChildNodes()){b.removeChild(b.lastChild)}var a=document.createElement("img");a.setAttribute("src","../images/ajax-loader.gif");a.setAttribute("alt","Loading...");b.appendChild(a)}function submitWithAjax(a,f){var d=getHttpObject();if(!d){return false}displayAjaxLoading(f);var g=[];var c;for(var b=0;b<a.elements.length;b++){c=a.elements[b];g[b]=c.name+"="+encodeURIComponent(c.value)}var e=g.join("&");d.open("POST",a.getAttribute("action"),true);d.setRequestHeader("Content-Type","application/x-www-form-urlencoded");d.onreadystatechange=function(){if(d.readyState==4){if(d.status==200||d.status==0){var h=d.responseText.match(/<article>([\s\S]+)<\/article>/);if(h.length>0){f.innerHTML=h[1]}else{f.innerHTML="<p>Oops,there was an error,Sorry</p>"}}else{f.innerHTML="<p>"+d.responseText+"</p>"}}};d.send(e);return true};