var paramNumber=1;function narrowPage(){paramNumber>.2&&(paramNumber-=.1),document.getElementsByTagName("body")[0].style.zoom=paramNumber}function enlargePage(){paramNumber<5&&(paramNumber+=.1),document.getElementsByTagName("body")[0].style.zoom=paramNumber}function browserTC(){btf.snackbarShow(""),Snackbar.show({text:"浏览器版本较低，网站样式可能错乱",actionText:"关闭",duration:"6000",pos:"bottom-right"})}function browserVersion(){var e=navigator.userAgent,t=e.indexOf("compatible")>-1&&e.indexOf("MSIE")>-1,n=(e.indexOf("Trident")>-1&&e.indexOf("rv:11.0"),e.indexOf("Edge")>-1&&!t),o=e.indexOf("Firefox")>-1,i=e.indexOf("Opera")>-1||e.indexOf("OPR")>-1,r=e.indexOf("Chrome")>-1&&e.indexOf("Safari")>-1&&-1==e.indexOf("Edge")&&-1==e.indexOf("OPR");e.indexOf("Safari")>-1&&-1==e.indexOf("Chrome")&&-1==e.indexOf("Edge")&&e.indexOf("OPR");n?e.split("Edge/")[1].split(".")[0]<90&&browserTC():o?e.split("Firefox/")[1].split(".")[0]<90&&browserTC():i?e.split("OPR/")[1].split(".")[0]<80&&browserTC():r&&e.split("Chrome/")[1].split(".")[0]<90&&browserTC()}function setCookies(e,t){let n=new Date((new Date).getTime()+24*t*60*60*1e3).toGMTString();for(let t in e)document.cookie=t+"="+e[t]+";expires="+n}function getCookie(e){var t,n=new RegExp("(^| )"+e+"=([^;]*)(;|$)");return(t=document.cookie.match(n))?unescape(t[2]):null}function postAddToc(){let e=document.querySelector("#post>#article-container.post-content"),t=document.getElementById("card-toc");if(e&&t){let e=t.getElementsByClassName("toc-number"),n=t.getElementsByClassName("toc-link");for(let t=0;t<n.length;t++)document.getElementById(decodeURIComponent(n[t].attributes.href.value).slice(1)).dataset.toc=e[t].innerText}}function FixedCardWidget(e,t,n){if("id"===e)var o=document.getElementById(t);else o=document.getElementsByClassName(t)[n];o&&(o.className.indexOf("fixed-card-widget")>-1?RemoveFixedCardWidget():(RemoveFixedCardWidget(),CreateQuitBox(),o.classList.add("fixed-card-widget")))}function CreateQuitBox(){document.getElementById("aside-content").insertAdjacentHTML("beforebegin",'<div id="quit-box" onclick="RemoveFixedCardWidget()"></div>')}function RemoveFixedCardWidget(){var e=document.querySelectorAll(".fixed-card-widget");if(e)for(i=0;i<e.length;i++)e[i].classList.remove("fixed-card-widget");var t=document.getElementById("quit-box");t&&t.remove()}function refreshCache(){"serviceWorker"in window.navigator&&navigator.serviceWorker.controller?confirm("是否确定刷新全站缓存")&&navigator.serviceWorker.controller.postMessage("refresh"):GLOBAL_CONFIG.Snackbar?btf.snackbarShow("ServiceWorker未激活,请刷新浏览器"):alert("ServiceWorker未激活,请刷新浏览器")}function percent(){let e=document.documentElement.scrollTop,t=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)-document.documentElement.clientHeight,n=Math.round(e/t*100),o=document.querySelector("#go-up");n<95?(o.childNodes[0].style.display="none",o.childNodes[1].style.display="block",o.childNodes[1].innerHTML=n+"<span>%</span>"):(o.childNodes[1].style.display="none",o.childNodes[0].style.display="block")}1!=getCookie("browsertc")&&(setCookies({browsertc:1},1),browserVersion()),postAddToc(),document.removeEventListener("pjax:complete",postAddToc),document.addEventListener("pjax:complete",postAddToc),RemoveFixedCardWidget(),navigator.serviceWorker.addEventListener("message",(e=>{"success"===e.data&&window.location.reload(!0)})),window.removeEventListener("scroll",window.percentScroll),window.percentScroll=btf.throttle(percent,50),window.addEventListener("scroll",window.percentScroll);let kk={showRightMenu:function(e,t=0,n=0){let o=$("#rightMenu");o.css("top",t+"px").css("left",n+"px"),e?o.show():o.hide()},switchDarkMode:function(){"light"===("dark"===document.documentElement.getAttribute("data-theme")?"dark":"light")?(activateDarkMode(),saveToLocal.set("theme","dark",2),void 0!==GLOBAL_CONFIG.Snackbar&&btf.snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night)):(activateLightMode(),saveToLocal.set("theme","light",2),void 0!==GLOBAL_CONFIG.Snackbar&&btf.snackbarShow(GLOBAL_CONFIG.Snackbar.night_to_day)),"function"==typeof utterancesTheme&&utterancesTheme(),"object"==typeof FB&&window.loadFBComment(),window.DISQUS&&document.getElementById("disqus_thread").children.length&&setTimeout((()=>window.disqusReset()),200)},copySelect:function(){document.execCommand("Copy",!1,null),btf.snackbarShow("你的剪切板已被窝占领惹~")},scrollToTop:function(){btf.scrollToDest(0,500)}};if(!navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)){let e=$("#rightMenu").width(),t=$("#rightMenu").height();window.oncontextmenu=function(n){if(n.ctrlKey)return!0;$(".rightMenu-group.hide").hide(),document.getSelection().toString()&&$("#menu-text").show(),"INPUT"!=document.activeElement.tagName&&"TEXTAREA"!=document.activeElement.tagName||$("#menu-read").show();let o=n.clientX+10,i=n.clientY;return o+e>window.innerWidth&&(o-=e),i+t>window.innerHeight&&(i-=t),kk.showRightMenu(!0,i,o),!1}}function hideRightMenu(){kk.showRightMenu(!1)}function linkCom(e){var t=document.querySelector(".veditor");"bf"==e?(t.value="```yml\n",t.value+="- name: \n  link: \n  avatar: \n  descr: \n  siteshot: ",t.value+="\n```",t.setSelectionRange(15,15)):(t.value="站点名称：\n站点地址：\n头像链接：\n站点描述：\n站点截图[可选]：",t.setSelectionRange(5,5)),t.focus()}
/*!
 * clipboard.js v2.0.10
 * https://clipboardjs.com/
 */function getNowURL(){return location.protocol+"//"+location.host+location.pathname}window.removeEventListener("click",hideRightMenu),window.addEventListener("click",hideRightMenu),$("#menu-backward").on("click",(function(){window.history.back()})),$("#menu-forward").on("click",(function(){window.history.forward()})),$("#menu-refresh").on("click",(function(){window.location.reload()})),$("#menu-darkmode").on("click",kk.switchDarkMode),$("#menu-top").on("click",kk.scrollToTop),$("#menu-home").on("click",(function(){window.location.href=window.location.origin})),function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.ClipboardJS=t():e.ClipboardJS=t()}(this,(function(){return function(){var e={686:function(e,t,n){"use strict";n.d(t,{default:function(){return M}});var o=n(279),i=n.n(o),r=n(370),a=n.n(r),s=n(817),c=n.n(s);function l(e){try{return document.execCommand(e)}catch(e){return!1}}var d=function(e){var t=c()(e);return l("cut"),t};function u(e){var t="rtl"===document.documentElement.getAttribute("dir"),n=document.createElement("textarea");n.style.fontSize="12pt",n.style.border="0",n.style.padding="0",n.style.margin="0",n.style.position="absolute",n.style[t?"right":"left"]="-9999px";var o=window.pageYOffset||document.documentElement.scrollTop;return n.style.top="".concat(o,"px"),n.setAttribute("readonly",""),n.value=e,n}var h=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{container:document.body},n="";if("string"==typeof e){var o=u(e);t.container.appendChild(o),n=c()(o),l("copy"),o.remove()}else n=c()(e),l("copy");return n};function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}var m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.action,n=void 0===t?"copy":t,o=e.container,i=e.target,r=e.text;if("copy"!==n&&"cut"!==n)throw new Error('Invalid "action" value, use either "copy" or "cut"');if(void 0!==i){if(!i||"object"!==f(i)||1!==i.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===n&&i.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===n&&(i.hasAttribute("readonly")||i.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes')}return r?h(r,{container:o}):i?"cut"===n?d(i):h(i,{container:o}):void 0};function g(e){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g(e)}function b(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function p(e,t){return p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},p(e,t)}function w(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=y(e);if(t){var i=y(this).constructor;n=Reflect.construct(o,arguments,i)}else n=o.apply(this,arguments);return x(this,n)}}function x(e,t){return!t||"object"!==g(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function y(e){return y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},y(e)}function v(e,t){var n="data-clipboard-".concat(e);if(t.hasAttribute(n))return t.getAttribute(n)}var k=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(r,e);var t,n,o,i=w(r);function r(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),(n=i.call(this)).resolveOptions(t),n.listenClick(e),n}return t=r,n=[{key:"resolveOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof e.action?e.action:this.defaultAction,this.target="function"==typeof e.target?e.target:this.defaultTarget,this.text="function"==typeof e.text?e.text:this.defaultText,this.container="object"===g(e.container)?e.container:document.body}},{key:"listenClick",value:function(e){var t=this;this.listener=a()(e,"click",(function(e){return t.onClick(e)}))}},{key:"onClick",value:function(e){var t=e.delegateTarget||e.currentTarget,n=this.action(t)||"copy",o=m({action:n,container:this.container,target:this.target(t),text:this.text(t)});this.emit(o?"success":"error",{action:n,text:o,trigger:t,clearSelection:function(){t&&t.focus(),document.activeElement.blur(),window.getSelection().removeAllRanges()}})}},{key:"defaultAction",value:function(e){return v("action",e)}},{key:"defaultTarget",value:function(e){var t=v("target",e);if(t)return document.querySelector(t)}},{key:"defaultText",value:function(e){return v("text",e)}},{key:"destroy",value:function(){this.listener.destroy()}}],o=[{key:"copy",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{container:document.body};return h(e,t)}},{key:"cut",value:function(e){return d(e)}},{key:"isSupported",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],t="string"==typeof e?[e]:e,n=!!document.queryCommandSupported;return t.forEach((function(e){n=n&&!!document.queryCommandSupported(e)})),n}}],n&&b(t.prototype,n),o&&b(t,o),r}(i()),M=k},828:function(e){if("undefined"!=typeof Element&&!Element.prototype.matches){var t=Element.prototype;t.matches=t.matchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector||t.webkitMatchesSelector}e.exports=function(e,t){for(;e&&9!==e.nodeType;){if("function"==typeof e.matches&&e.matches(t))return e;e=e.parentNode}}},438:function(e,t,n){var o=n(828);function i(e,t,n,o,i){var a=r.apply(this,arguments);return e.addEventListener(n,a,i),{destroy:function(){e.removeEventListener(n,a,i)}}}function r(e,t,n,i){return function(n){n.delegateTarget=o(n.target,t),n.delegateTarget&&i.call(e,n)}}e.exports=function(e,t,n,o,r){return"function"==typeof e.addEventListener?i.apply(null,arguments):"function"==typeof n?i.bind(null,document).apply(null,arguments):("string"==typeof e&&(e=document.querySelectorAll(e)),Array.prototype.map.call(e,(function(e){return i(e,t,n,o,r)})))}},879:function(e,t){t.node=function(e){return void 0!==e&&e instanceof HTMLElement&&1===e.nodeType},t.nodeList=function(e){var n=Object.prototype.toString.call(e);return void 0!==e&&("[object NodeList]"===n||"[object HTMLCollection]"===n)&&"length"in e&&(0===e.length||t.node(e[0]))},t.string=function(e){return"string"==typeof e||e instanceof String},t.fn=function(e){return"[object Function]"===Object.prototype.toString.call(e)}},370:function(e,t,n){var o=n(879),i=n(438);e.exports=function(e,t,n){if(!e&&!t&&!n)throw new Error("Missing required arguments");if(!o.string(t))throw new TypeError("Second argument must be a String");if(!o.fn(n))throw new TypeError("Third argument must be a Function");if(o.node(e))return function(e,t,n){return e.addEventListener(t,n),{destroy:function(){e.removeEventListener(t,n)}}}(e,t,n);if(o.nodeList(e))return function(e,t,n){return Array.prototype.forEach.call(e,(function(e){e.addEventListener(t,n)})),{destroy:function(){Array.prototype.forEach.call(e,(function(e){e.removeEventListener(t,n)}))}}}(e,t,n);if(o.string(e))return function(e,t,n){return i(document.body,e,t,n)}(e,t,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}},817:function(e){e.exports=function(e){var t;if("SELECT"===e.nodeName)e.focus(),t=e.value;else if("INPUT"===e.nodeName||"TEXTAREA"===e.nodeName){var n=e.hasAttribute("readonly");n||e.setAttribute("readonly",""),e.select(),e.setSelectionRange(0,e.value.length),n||e.removeAttribute("readonly"),t=e.value}else{e.hasAttribute("contenteditable")&&e.focus();var o=window.getSelection(),i=document.createRange();i.selectNodeContents(e),o.removeAllRanges(),o.addRange(i),t=o.toString()}return t}},279:function(e){function t(){}t.prototype={on:function(e,t,n){var o=this.e||(this.e={});return(o[e]||(o[e]=[])).push({fn:t,ctx:n}),this},once:function(e,t,n){var o=this;function i(){o.off(e,i),t.apply(n,arguments)}return i._=t,this.on(e,i,n)},emit:function(e){for(var t=[].slice.call(arguments,1),n=((this.e||(this.e={}))[e]||[]).slice(),o=0,i=n.length;o<i;o++)n[o].fn.apply(n[o].ctx,t);return this},off:function(e,t){var n=this.e||(this.e={}),o=n[e],i=[];if(o&&t)for(var r=0,a=o.length;r<a;r++)o[r].fn!==t&&o[r].fn._!==t&&i.push(o[r]);return i.length?n[e]=i:delete n[e],this}},e.exports=t,e.exports.TinyEmitter=t}},t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={exports:{}};return e[o](i,i.exports,n),i.exports}return n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n(686)}().default}));const clipboard=new ClipboardJS("button#share-link",{text:function(){return document.title+"："+getNowURL()}});function RemoveFixedComment(){var e=document.querySelectorAll(".fixedcomment");if(e)for(i=0;i<e.length;i++)e[i].classList.remove("fixedcomment")}function AddFixedComment(){var e=document.getElementById("post-comment"),t=document.getElementById("quit-board");e.classList.add("fixedcomment"),t.classList.add("fixedcomment")}function CreateQuitBoard(){document.getElementById("post-comment").insertAdjacentHTML("beforebegin",'<div id="quit-board" onclick="RemoveFixedComment()"></div>')}function FixedCommentBtn(){var e=document.getElementById("post-comment");e&&(e.className.indexOf("fixedcomment")>-1?RemoveFixedComment():(CreateQuitBoard(),AddFixedComment()))}function saveData(e,t){localStorage.setItem(e,JSON.stringify({time:Date.now(),data:t}))}function loadData(e,t){let n=JSON.parse(localStorage.getItem(e));return null!=n&&0<Date.now()-n.time<60*t*1e3?n.data:0}clipboard.on("success",(function(){btf.snackbarShow("成功复制本页的分享链接，快去粘贴吧~")})),clipboard.on("error",(function(){btf.snackbarShow("复制失败")})),kk.copyURL=function(){btf.snackbarShow("成功复制本页的分享链接，快去粘贴吧~");new ClipboardJS("#share-chuckle",{text:function(){return document.title+"："+getNowURL()}})},$("#share-chuckle").on("click",kk.copyURL),kk.postURL=function(){btf.snackbarShow("成功复制本页的分享链接，快去粘贴吧~");new ClipboardJS("#share-post",{text:function(){return document.title+"："+getNowURL()}})},kk.pasteText=function(){btf.snackbarShow("粘贴请使用Ctrl+V，原生右键:Ctrl+右键")},RemoveFixedComment(),function(){"use strict";var e,t=document.createElement("style");t.innerHTML="@keyframes wb-fade-in{0%{opacity:0}to{opacity:.85}}.winbox{position:fixed;left:0;top:0;background:#0050ff;box-shadow:0 14px 28px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.22);transition:width .3s,height .3s,left .3s,top .3s;transition-timing-function:cubic-bezier(.3,1,.3,1);will-change:transform,width,height;contain:layout size;text-align:left;touch-action:none}.wb-body,.wb-header{position:absolute;left:0}.wb-header{top:0;width:100%;height:35px;line-height:35px;color:#fff;overflow:hidden;z-index:1}.wb-body{top:35px;right:0;bottom:0;overflow:auto;-webkit-overflow-scrolling:touch;overflow-scrolling:touch;will-change:contents;background:#fff;margin-top:0!important;contain:strict;z-index:0}.wb-title,.winbox.min .wb-body{overflow:hidden}.wb-icon *,.wb-image{background-position:center}body>.wb-body{position:relative;display:inline-block;visibility:hidden;contain:none}.wb-drag{height:100%;padding-left:10px;cursor:move}.wb-title{font-family:Arial,sans-serif;font-size:14px;white-space:nowrap;text-overflow:ellipsis}.wb-image{display:none;width:20px;height:100%;margin:-1px 8px 0-3px;float:left;background-repeat:no-repeat;background-size:100%}.wb-e,.wb-w{width:10px;top:0}.wb-n,.wb-s{left:0;height:10px;position:absolute}.wb-n{top:-5px;right:0;cursor:n-resize;z-index:2}.wb-e,.wb-ne,.wb-se{right:-5px}.wb-e{position:absolute;bottom:0;cursor:w-resize;z-index:2}.wb-s{bottom:-5px;right:0;cursor:n-resize;z-index:2}.wb-w{position:absolute;left:-5px;bottom:0;cursor:w-resize;z-index:2}.wb-ne,.wb-nw,.wb-sw{width:15px;height:15px;z-index:2;position:absolute}.wb-nw{top:-5px;left:-5px;cursor:nw-resize}.wb-ne,.wb-sw{cursor:ne-resize}.wb-ne{top:-5px}.wb-sw{bottom:-5px;left:-5px}.wb-se{position:absolute;bottom:-5px;width:15px;height:15px;cursor:nw-resize;z-index:2}.wb-icon,.wb-icon *{height:100%;max-width:100%}.wb-icon{float:right;text-align:center}.wb-icon *{display:inline-block;width:30px;background-repeat:no-repeat;cursor:pointer}.no-close .wb-close,.no-full .wb-full,.no-header .wb-header,.no-max .wb-max,.no-min .wb-min,.no-resize .wb-body~div,.wb-body .wb-hide,.wb-show,.winbox.hide,.winbox.min .wb-body>*,.winbox.min .wb-full,.winbox.min .wb-min,.winbox.modal .wb-full,.winbox.modal .wb-max,.winbox.modal .wb-min{display:none}.winbox.max .wb-drag,.winbox.min .wb-drag{cursor:default}.wb-min{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAyIj48cGF0aCBmaWxsPSIjZmZmIiBkPSJNOCAwaDdhMSAxIDAgMCAxIDAgMkgxYTEgMSAwIDAgMSAwLTJoN3oiLz48L3N2Zz4=);background-size:14px auto;background-position:center calc(50% + 6px)}.wb-max{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNmZmYiIHZpZXdCb3g9IjAgMCA5NiA5NiI+PHBhdGggZD0iTTIwIDcxLjMxMUMxNS4zNCA2OS42NyAxMiA2NS4yMyAxMiA2MFYyMGMwLTYuNjMgNS4zNy0xMiAxMi0xMmg0MGM1LjIzIDAgOS42NyAzLjM0IDExLjMxMSA4SDI0Yy0yLjIxIDAtNCAxLjc5LTQgNHY1MS4zMTF6Ii8+PHBhdGggZD0iTTkyIDc2VjM2YzAtNi42My01LjM3LTEyLTEyLTEySDQwYy02LjYzIDAtMTIgNS4zNy0xMiAxMnY0MGMwIDYuNjMgNS4zNyAxMiAxMiAxMmg0MGM2LjYzIDAgMTItNS4zNyAxMi0xMnptLTUyIDRjLTIuMjEgMC00LTEuNzktNC00VjM2YzAtMi4yMSAxLjc5LTQgNC00aDQwYzIuMjEgMCA0IDEuNzkgNCA0djQwYzAgMi4yMS0xLjc5IDQtNCA0SDQweiIvPjwvc3ZnPg==);background-size:17px auto}.wb-close{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xIC0xIDE4IDE4Ij48cGF0aCBmaWxsPSIjZmZmIiBkPSJtMS42MTMuMjEuMDk0LjA4M0w4IDYuNTg1IDE0LjI5My4yOTNsLjA5NC0uMDgzYTEgMSAwIDAgMSAxLjQwMyAxLjQwM2wtLjA4My4wOTRMOS40MTUgOGw2LjI5MiA2LjI5M2ExIDEgMCAwIDEtMS4zMiAxLjQ5N2wtLjA5NC0uMDgzTDggOS40MTVsLTYuMjkzIDYuMjkyLS4wOTQuMDgzQTEgMSAwIDAgMSAuMjEgMTQuMzg3bC4wODMtLjA5NEw2LjU4NSA4IC4yOTMgMS43MDdBMSAxIDAgMCAxIDEuNjEzLjIxeiIvPjwvc3ZnPg==);background-size:15px auto;background-position:5px center}.wb-full{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjIuNSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNOCAzSDVhMiAyIDAgMCAwLTIgMnYzbTE4IDBWNWEyIDIgMCAwIDAtMi0yaC0zbTAgMThoM2EyIDIgMCAwIDAgMi0ydi0zTTMgMTZ2M2EyIDIgMCAwIDAgMiAyaDMiLz48L3N2Zz4=);background-size:16px auto}.winbox.max .wb-body~div,.winbox.min .wb-body~div,.winbox.modal .wb-body~div,.winbox.modal .wb-drag,body.wb-lock iframe{pointer-events:none}.winbox.hide{visibility:hidden}.winbox.max .wb-body{margin:0!important}.winbox iframe{position:absolute;width:100%;height:100%;border:0}.no-animation,body.wb-lock .winbox{transition:none}.winbox.modal:before{content:'';position:absolute;top:0;left:0;right:0;bottom:0;background:inherit;border-radius:inherit}.winbox.modal:after{content:'';position:absolute;top:-100vh;left:-100vw;right:-100vw;bottom:-100vh;background:#0d1117;animation:wb-fade-in .2s ease-out forwards;z-index:-1}.no-shadow,.winbox.max{box-shadow:none}.no-header .wb-body{top:0}.no-move:not(.min) .wb-title{pointer-events:none}.wb-body .wb-show{display:revert}";var n=document.getElementsByTagName("head")[0];n.firstChild?n.insertBefore(t,n.firstChild):n.appendChild(t);var o=document.createElement("div");function i(e,t,n){e&&e.addEventListener(t,n,!1)}function r(e,t){var n=window;n&&n.removeEventListener(e,t,!1)}function a(e){e.stopPropagation(),e.cancelable&&e.preventDefault()}function s(e,t,n){n=""+n,e["_s_"+t]!==n&&(e.style.setProperty(t,n),e["_s_"+t]=n)}o.innerHTML="<div class=wb-header><div class=wb-icon><span class=wb-min></span><span class=wb-max></span><span class=wb-full></span><span class=wb-close></span></div><div class=wb-drag><div class=wb-image></div><div class=wb-title></div></div></div><div class=wb-body></div><div class=wb-n></div><div class=wb-s></div><div class=wb-w></div><div class=wb-e></div><div class=wb-nw></div><div class=wb-ne></div><div class=wb-se></div><div class=wb-sw></div>";var c,l,d,u,h,f,m,g=[],b=0,p=10;function w(e,t){if(!(this instanceof w))return new w(e);var n,r,l,d;if(c||((c=document.body)[u="requestFullscreen"]||c[u="msRequestFullscreen"]||c[u="webkitRequestFullscreen"]||c[u="mozRequestFullscreen"]||(u=""),h=u&&u.replace("request","exit").replace("mozRequest","mozCancel").replace("Request","Exit"),i(window,"resize",(function(){M(),v()})),M()),e){if(t){var g=e;e=t}if("string"==typeof e)g=e;else{(d=e.oncreate)&&d.call(this,e);var y=e.id,C=e.index,E=e.root,S=e.template;g=g||e.title;var I=e.icon,A=e.mount,L=e.html,z=e.url,N=e.width,j=e.height,T=e.minwidth,B=e.minheight,D=e.maxwidth,O=e.maxheight,R=e.autosize,F=e.min,H=e.max,P=e.hidden;(l=e.modal)&&(n=r="center"),n=e.x||n,r=e.y||r;var W=e.top,_=e.left,G=e.bottom,Z=e.right,Y=e.background,q=e.border,U=e.header,Q=e.class,J=e.onclose,$=e.onfocus,V=e.onblur,X=e.onmove,K=e.onresize,ee=e.onfullscreen,te=e.onmaximize,ne=e.onminimize,oe=e.onrestore,ie=e.onhide,re=e.onshow,ae=e.onload}}this.g=(S||o).cloneNode(!0),this.g.id=this.id=y||"winbox-"+ ++b,this.g.className="winbox"+(Q?" "+("string"==typeof Q?Q:Q.join(" ")):"")+(l?" modal":""),this.g.winbox=this,this.window=this.g,this.body=this.g.getElementsByClassName("wb-body")[0],this.h=U||35,Y&&this.setBackground(Y),q?s(this.body,"margin",q+(isNaN(q)?"":"px")):q=0,U&&(s(e=this.g.getElementsByClassName("wb-header")[0],"height",U+"px"),s(e,"line-height",U+"px"),s(this.body,"top",U+"px")),g&&this.setTitle(g),I&&this.setIcon(I),A?this.mount(A):L?this.body.innerHTML=L:z&&this.setUrl(z,ae),W=W?x(W,m):0,G=G?x(G,m):0,_=_?x(_,f):0,Z=Z?x(Z,f):0,g=f-_-Z,I=m-W-G,D=D?x(D,g):g,O=O?x(O,I):I,T=T?x(T,D):150,B=B?x(B,O):this.h,R?((E||c).appendChild(this.body),N=Math.max(Math.min(this.body.clientWidth+2*q+1,D),T),j=Math.max(Math.min(this.body.clientHeight+this.h+q+1,O),B),this.g.appendChild(this.body)):(N=N?x(N,D):0|Math.max(D/2,T),j=j?x(j,O):0|Math.max(O/2,B)),n=n?x(n,g,N):_,r=r?x(r,I,j):W,this.x=n,this.y=r,this.width=N,this.height=j,this.o=T,this.m=B,this.l=D,this.j=O,this.top=W,this.right=Z,this.bottom=G,this.left=_,this.index=C,this.focused=this.hidden=this.full=this.max=this.min=!1,this.onclose=J,this.onfocus=$,this.onblur=V,this.onmove=X,this.onresize=K,this.onfullscreen=ee,this.onmaximize=te,this.onminimize=ne,this.onrestore=oe,this.onhide=ie,this.onshow=re,H?this.maximize():F?this.minimize():this.resize().move(),P?this.hide():(this.focus(),(C||0===C)&&(this.index=C,s(this.g,"z-index",C),C>p&&(p=C))),function(e){k(e,"drag"),k(e,"n"),k(e,"s"),k(e,"w"),k(e,"e"),k(e,"nw"),k(e,"ne"),k(e,"se"),k(e,"sw"),i(e.g.getElementsByClassName("wb-min")[0],"click",(function(t){a(t),e.min?e.focus().restore():e.blur().minimize()})),i(e.g.getElementsByClassName("wb-max")[0],"click",(function(){e.max?e.restore():e.maximize()})),u?i(e.g.getElementsByClassName("wb-full")[0],"click",(function(){e.fullscreen()})):e.addClass("no-full"),i(e.g.getElementsByClassName("wb-close")[0],"click",(function(t){a(t),e.close()||(e=null)})),i(e.g,"click",(function(){e.focus()}))}(this),(E||c).appendChild(this.g)}function x(e,t,n){return"string"==typeof e&&("center"===e?e=(t-n)/2|0:"right"===e||"bottom"===e?e=t-n:e="%"===(""+(n=parseFloat(e))!==e&&e.substring((""+n).length))?t/100*n|0:n),e}function y(e){g.splice(g.indexOf(e),1),v(),e.removeClass("min"),e.min=!1,e.g.title=""}function v(){for(var e,t=g.length,n={},o={},i=0;i<t;i++)o[e=((e=g[i]).left||e.right)+":"+(e.top||e.bottom)]?o[e]++:(n[e]=0,o[e]=1);i=0;for(var r,a;i<t;i++)r=((e=g[i]).left||e.right)+":"+(e.top||e.bottom),a=Math.min((f-e.left-e.right)/o[r],250),e.resize(a+1|0,e.h,!0).move(e.left+n[r]*a|0,m-e.bottom-e.h,!0),n[r]++}function k(e,t){function n(n){if(a(n),e.focus(),"drag"===t){if(e.min)return void e.restore();var r=Date.now(),l=r-g;if(g=r,300>l)return void(e.max?e.restore():e.maximize())}e.max||e.min||(c.classList.add("wb-lock"),(d=n.touches)&&(d=d[0])?(n=d,i(window,"touchmove",o),i(window,"touchend",s)):(i(window,"mousemove",o),i(window,"mouseup",s)),u=n.pageX,h=n.pageY)}function o(n){a(n),d&&(n=n.touches[0]);var o=n.pageX;n=n.pageY;var i,r=o-u,s=n-h,c=e.width,l=e.height,g=e.x,b=e.y;if("drag"===t){e.x+=r,e.y+=s;var p=i=1}else{if("e"===t||"se"===t||"ne"===t){e.width+=r;var w=1}else"w"!==t&&"sw"!==t&&"nw"!==t||(e.x+=r,e.width-=r,p=w=1);if("s"===t||"se"===t||"sw"===t){e.height+=s;var x=1}else"n"!==t&&"ne"!==t&&"nw"!==t||(e.y+=s,e.height-=s,i=x=1)}w&&(e.width=Math.max(Math.min(e.width,e.l,f-e.x-e.right),e.o),w=e.width!==c),x&&(e.height=Math.max(Math.min(e.height,e.j,m-e.y-e.bottom),e.m),x=e.height!==l),(w||x)&&e.resize(),p&&(e.x=Math.max(Math.min(e.x,f-e.width-e.right),e.left),p=e.x!==g),i&&(e.y=Math.max(Math.min(e.y,m-e.height-e.bottom),e.top),i=e.y!==b),(p||i)&&e.move(),(w||p)&&(u=o),(x||i)&&(h=n)}function s(e){a(e),c.classList.remove("wb-lock"),d?(r("touchmove",o),r("touchend",s)):(r("mousemove",o),r("mouseup",s))}var l=e.g.getElementsByClassName("wb-"+t)[0];if(l){var d,u,h,g=0;i(l,"mousedown",n),i(l,"touchstart",n)}}function M(){var e=document.documentElement;f=e.clientWidth,m=e.clientHeight}function C(){if(l.full=!1,document.fullscreen||document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement)return document[h](),!0}w.new=function(e){return new w(e)},(e=w.prototype).mount=function(e){return this.unmount(),e.i||(e.i=e.parentNode),this.body.textContent="",this.body.appendChild(e),this},e.unmount=function(e){var t=this.body.firstChild;if(t){var n=e||t.i;n&&n.appendChild(t),t.i=e}return this},e.setTitle=function(e){var t=this.g.getElementsByClassName("wb-title")[0];e=this.title=e;var n=t.firstChild;return n?n.nodeValue=e:t.textContent=e,this},e.setIcon=function(e){var t=this.g.getElementsByClassName("wb-image")[0];return s(t,"background-image","url("+e+")"),s(t,"display","inline-block"),this},e.setBackground=function(e){return s(this.g,"background",e),this},e.setUrl=function(e,t){return this.body.innerHTML='<iframe src="'+e+'"></iframe>',t&&(this.body.firstChild.onload=t),this},e.focus=function(e){return!1===e?this.blur():(d!==this&&this.g&&(d&&d.blur(),s(this.g,"z-index",++p),this.index=p,this.addClass("focus"),d=this,this.focused=!0,this.onfocus&&this.onfocus()),this)},e.blur=function(e){return!1===e?this.focus():(d===this&&(this.removeClass("focus"),this.focused=!1,this.onblur&&this.onblur(),d=null),this)},e.hide=function(e){return!1===e?this.show():this.hidden?void 0:(this.onhide&&this.onhide(),this.hidden=!0,this.addClass("hide"))},e.show=function(e){return!1===e?this.hide():this.hidden?(this.onshow&&this.onshow(),this.hidden=!1,this.removeClass("hide")):void 0},e.minimize=function(e){return!1===e?this.restore():(l&&C(),this.max&&(this.removeClass("max"),this.max=!1),this.min||(g.push(this),v(),this.g.title=this.title,this.addClass("min"),this.min=!0,this.onminimize&&this.onminimize()),this)},e.restore=function(){return l&&C(),this.min&&(y(this),this.resize().move(),this.onrestore&&this.onrestore()),this.max&&(this.max=!1,this.removeClass("max").resize().move(),this.onrestore&&this.onrestore()),this},e.maximize=function(e){return!1===e?this.restore():(l&&C(),this.min&&y(this),this.max||(this.addClass("max").resize(f-this.left-this.right,m-this.top-this.bottom,!0).move(this.left,this.top,!0),this.max=!0,this.onmaximize&&this.onmaximize()),this)},e.fullscreen=function(e){if(this.min&&(y(this),this.resize().move()),l&&C()){if(!1===e)return this.restore()}else this.body[u](),l=this,this.full=!0,this.onfullscreen&&this.onfullscreen();return this},e.close=function(e){if(this.onclose&&this.onclose(e))return!0;this.min&&y(this),this.unmount(),this.g.remove(),this.g.textContent="",this.g=this.body=this.g.winbox=null,d===this&&(d=null)},e.move=function(e,t,n){return e||0===e?n||(this.x=e?e=x(e,f-this.left-this.right,this.width):0,this.y=t?t=x(t,m-this.top-this.bottom,this.height):0):(e=this.x,t=this.y),s(this.g,"left",e+"px"),s(this.g,"top",t+"px"),this.onmove&&this.onmove(e,t),this},e.resize=function(e,t,n){return e||0===e?n||(this.width=e?e=x(e,this.l):0,this.height=t?t=x(t,this.j):0,e=Math.max(e,this.o),t=Math.max(t,this.m)):(e=this.width,t=this.height),s(this.g,"width",e+"px"),s(this.g,"height",t+"px"),this.onresize&&this.onresize(e,t),this},e.addControl=function(e){var t=e.class,n=e.image,o=e.click;e=e.index;var i=document.createElement("span"),r=this.g.getElementsByClassName("wb-icon")[0],a=this;return t&&(i.className=t),n&&s(i,"background-image","url("+n+")"),o&&(i.onclick=function(e){o.call(this,e,a)}),r.insertBefore(i,r.childNodes[e||0]),this},e.removeControl=function(e){return(e=this.g.getElementsByClassName(e)[0])&&e.remove(),this},e.addClass=function(e){return this.g.classList.add(e),this},e.removeClass=function(e){return this.g.classList.remove(e),this},e.toggleClass=function(e){return this.g.classList.contains(e)?this.removeClass(e):this.addClass(e)},window.WinBox=w}.call(this);try{let e=loadData("blogbg",1440);e?changeBg(e,1):localStorage.removeItem("blogbg")}catch(e){localStorage.removeItem("blogbg")}function changeBg(e,t){let n=document.getElementById("web_bg");document.getElementById("svg_bg").style.backgroundImage="none","#"==e.charAt(0)?(n.style.backgroundColor=e,n.style.backgroundImage="none"):n.style.backgroundImage=e,t||(saveData("blogbg",e),btf.snackbarShow("切换背景成功"))}var winbox="";function resizeWinbox(){document.querySelector(".winbox").classList.contains("focus")&&winResize()}function createWinbox(){winbox=WinBox({id:"changeBgBox",index:2e3,title:"切换背景",x:"center",y:"center",minwidth:"300px",height:"60%",background:"var(--leonus-blue)"}),winResize(),window.addEventListener("resize",window.winBoxResize),winbox.body.innerHTML='\n    <div id="article-container" style="padding:10px;">\n    \n    <p><button onclick="localStorage.removeItem(\'blogbg\');location.reload();" style="background:#5FCDFFC8;display:block;width:100%;padding: 15px 0;border-radius:6px;color:white;"><i class="fa-solid fa-arrows-rotate"></i> 点我恢复默认背景</button></p>\n    <h2 id="图片（电脑）"><a href="#图片（电脑）" class="headerlink" title="图片（电脑）"></a>图片（电脑）</h2>\n    <div class="bgbox">\n    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://cdn.chuckle.top/img/img1.webp)" class="imgbox" onclick="changeBg(\'url(https://cdn.chuckle.top/img/img1.webp)\')"></a>\n    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://cdn.chuckle.top/img/img2.webp)" class="imgbox" onclick="changeBg(\'url(https://cdn.chuckle.top/img/img2.webp)\')"></a>\n    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://cdn.chuckle.top/img/img3.webp)" class="imgbox" onclick="changeBg(\'url(https://cdn.chuckle.top/img/img3.webp)\')"></a>\n    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://cdn.chuckle.top/img/img4.webp)" class="imgbox" onclick="changeBg(\'url(https://cdn.chuckle.top/img/img4.webp)\')"></a>\n    </div>\n     \n    <h2 id="渐变色"><a href="#渐变色" class="headerlink" title="渐变色"></a>渐变色</h2>\n    <div class="bgbox">\n    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(55deg, #0095c2 21%, #64E1C8 100%)" onclick="changeBg(\'linear-gradient(55deg, #0095c2 21%, #64E1C8 100%)\')"></a>\n    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(90deg, #ffd7e4 0%, #c8f1ff 100%)" onclick="changeBg(\'linear-gradient(90deg, #ffd7e4 0%, #c8f1ff 100%)\')"></a>\n    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(45deg, #e5737b, #c6999e, #96b9c2, #00d6e8)" onclick="changeBg(\'linear-gradient(45deg, #e5737b, #c6999e, #96b9c2, #00d6e8)\')"></a>\n    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(25deg, #31354b, #38536c, #3b738e, #3995b2)" onclick="changeBg(\'linear-gradient(25deg, #31354b, #38536c, #3b738e, #3995b2)\')"></a>\n    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(26deg, #0e6183, #387ea6, #599dcb, #7abdf1)" onclick="changeBg(\'linear-gradient(26deg, #0e6183, #387ea6, #599dcb, #7abdf1)\')"></a>\n    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(25deg, #0583bf, #159bc5, #16b4cb, #0aced0)" onclick="changeBg(\'linear-gradient(25deg, #0583bf, #159bc5, #16b4cb, #0aced0)\')"></a>\n    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(25deg, #3e47d1, #8b5fb8, #ba7b9d, #df9980)" onclick="changeBg(\'linear-gradient(25deg, #3e47d1, #8b5fb8, #ba7b9d, #df9980)\')"></a>\n    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(25deg, #0e5c71, #15828f, #19a9ae, #1ad3ce)" onclick="changeBg(\'linear-gradient(25deg, #0e5c71, #15828f, #19a9ae, #1ad3ce)\')"></a>\n    </div>\n    \n    <h2 id="纯色"><a href="#纯色" class="headerlink" title="纯色"></a>纯色</h2>\n    <div class="bgbox">\n    <a href="javascript:;" title = "白" rel="noopener external nofollow" class="box" style="background: #f7f9fe" onclick="changeBg(\'#f7f9fe\')"></a> \n    <a href="javascript:;" title = "黑" rel="noopener external nofollow" class="box" style="background: #30303c" onclick="changeBg(\'#30303c\')"></a> \n    <a href="javascript:;" title = "锌灰" rel="noopener external nofollow" class="box" style="background: #7a7374" onclick="changeBg(\'#7a7374\')"></a> \n    <a href="javascript:;" title = "晶红" rel="noopener external nofollow" class="box" style="background: #eea6b7" onclick="changeBg(\'#eea6b7\')"></a> \n    <a href="javascript:;" title = "银灰" rel="noopener external nofollow" class="box" style="background: #918072" onclick="changeBg(\'#918072\')"></a> \n    <a href="javascript:;" title = "荷花白" rel="noopener external nofollow" class="box" style="background: #fbecde" onclick="changeBg(\'#fbecde\')"></a> \n    <a href="javascript:;" title = "冰山蓝" rel="noopener external nofollow" class="box" style="background: #a4aca7" onclick="changeBg(\'#a4aca7\')"></a> \n    <a href="javascript:;" title = "玉簪绿" rel="noopener external nofollow" class="box" style="background: #a4cab6" onclick="changeBg(\'#a4cab6\')"></a> \n    <a href="javascript:;" title = "松霜绿" rel="noopener external nofollow" class="box" style="background: #83a78d" onclick="changeBg(\'#83a78d\')"></a> \n    <a href="javascript:;" title = "淡绿灰" rel="noopener external nofollow" class="box" style="background: #70887d" onclick="changeBg(\'#70887d\')"></a> \n    <a href="javascript:;" title = "石绿" rel="noopener external nofollow" class="box" style="background: #57c3c2" onclick="changeBg(\'#57c3c2\')"></a> \n    <a href="javascript:;" title = "甸子蓝" rel="noopener external nofollow" class="box" style="background: #10aec2" onclick="changeBg(\'#10aec2\')"></a> \n    <a href="javascript:;" title = "清水蓝" rel="noopener external nofollow" class="box" style="background: #93d5dc" onclick="changeBg(\'#93d5dc\')"></a> \n    <a href="javascript:;" title = "蜻蜓蓝" rel="noopener external nofollow" class="box" style="background: #3b818c" onclick="changeBg(\'#3b818c\')"></a> \n    <a href="javascript:;" title = "碧青" rel="noopener external nofollow" class="box" style="background: #5cb3cc" onclick="changeBg(\'#5cb3cc\')"></a> \n    <a href="javascript:;" title = "星蓝" rel="noopener external nofollow" class="box" style="background: #93b5cf" onclick="changeBg(\'#93b5cf\')"></a> \n    </div>\n'}function winResize(){var e=document.documentElement.clientWidth;e<=768?winbox.resize(.95*e+"px","70%").move("center","center"):winbox.resize(.6*e+"px","70%").move("center","center")}function toggleWinbox(){document.querySelector("#changeBgBox")?winbox.toggleClass("hide"):createWinbox()}function catalogActive(){let e=document.getElementById("catalog-list");if(e){e.addEventListener("mousewheel",(function(t){e.scrollLeft-=t.wheelDelta/2,t.preventDefault()}),!1);let t=document.getElementById(decodeURIComponent(window.location.pathname));t.classList.add("selected"),e.scrollLeft=t.offsetLeft-e.offsetLeft-(e.offsetWidth-t.offsetWidth)/2}}window.removeEventListener("resize",window.winBoxResize),window.winBoxResize=btf.throttle(resizeWinbox,50),catalogActive();