var paramNumber = 1;
function narrowPage(){
    //设置最小限制
    if(paramNumber >0.2){
        paramNumber -=0.1;
    }
    //缩小body
    document.getElementsByTagName('body')[0].style.zoom=paramNumber;
}
//放大页面
function enlargePage(){
    //设置最大限制
    if(paramNumber <5){
        paramNumber +=0.1;
    }
    //放大body
    document.getElementsByTagName('body')[0].style.zoom=paramNumber;
}
// function browserTC() {
//     btf.snackbarShow("");
//     Snackbar.show({
//         text: '浏览器版本较低，网站样式可能错乱',
//         actionText: '关闭',
//         duration: '6000',
//         pos: 'bottom-right'
//     });
// }
// function browserVersion() {
//     var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
//     var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1; //判断是否IE<11浏览器
//     var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1;
//     var isEdge = userAgent.indexOf("Edge") > -1 && !isIE; //Edge浏览器
//     var isFirefox = userAgent.indexOf("Firefox") > -1; //Firefox浏览器
//     var isOpera = userAgent.indexOf("Opera")>-1 || userAgent.indexOf("OPR")>-1 ; //Opera浏览器
//     var isChrome = userAgent.indexOf("Chrome")>-1 && userAgent.indexOf("Safari")>-1 && userAgent.indexOf("Edge")==-1 && userAgent.indexOf("OPR")==-1; //Chrome浏览器
//     var isSafari = userAgent.indexOf("Safari")>-1 && userAgent.indexOf("Chrome")==-1 && userAgent.indexOf("Edge")==-1 && userAgent.indexOf("OPR")==-1; //Safari浏览器
//     // if(isIE||isIE11) {
//     //     alert('怎么还在使用IE!!!');
//     //     var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
//     //     reIE.test(userAgent);
//     //     var fIEVersion = parseFloat(RegExp["$1"]);
//     //     if(fIEVersion == 7) {
//     //         return 'IE7';
//     //     } else if(fIEVersion == 8) {
//     //         return 'IE8';
//     //     } else if(fIEVersion == 9) {
//     //         return 'IE9';
//     //     } else if(fIEVersion == 10) {
//     //         return 'IE10';
//     //     } else {
//     //         return 'IE6';//IE版本<7
//     //     }
//     // } else 
//     if(isEdge) {
//         if(userAgent.split('Edge/')[1].split('.')[0]<90){
//             browserTC()
//         }
//         // return 'Edge'+userAgent.split('Edge/')[1].split('.')[0];
//     } else if(isFirefox) {
//         if(userAgent.split('Firefox/')[1].split('.')[0]<90){
//             browserTC()
//         }
//         // return 'Firefox'+userAgent.split('Firefox/')[1].split('.')[0];
//     } else if(isOpera) {
//         if(userAgent.split('OPR/')[1].split('.')[0]<80){
//             browserTC()
//         }
//         // return 'Opera'+userAgent.split('OPR/')[1].split('.')[0];
//     } else if(isChrome) {
//         if(userAgent.split('Chrome/')[1].split('.')[0]<90){
//             browserTC()
//         }
//         // return 'Chrome'+userAgent.split('Chrome/')[1].split('.')[0];
//     } else if(isSafari) {
//         // return 'Safari';+userAgent.split('Safari/')[1].split('.')[0];
//     }
// }
// function setCookies(obj, limitTime) {
// 	let data = new Date(new Date().getTime() + limitTime * 24 * 60 * 60 * 1000).toGMTString()
// 	for (let i in obj) {
// 		document.cookie = i + '=' + obj[i] + ';expires=' + data
// 	}
// }
// function getCookie(name) {
// 	var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
// 	if (arr = document.cookie.match(reg))
// 		return unescape(arr[2]);
// 	else
// 		return null;
// }
// if(getCookie('browsertc')!=1){
//     setCookies({
//         browsertc: 1,
//     }, 1);
//     browserVersion();
// }

function postAddToc () {
    let postContent = document.querySelector('#post>#article-container.post-content')
    let cardToc = document.getElementById('card-toc')
    if (postContent && cardToc) {
      let tocNumber = cardToc.getElementsByClassName('toc-number')
      let tocLink = cardToc.getElementsByClassName('toc-link')
      for (let i = 0; i < tocLink.length; i++) {
        document.getElementById(decodeURIComponent(tocLink[i].attributes.href.value).slice(1)).dataset.toc = tocNumber[i].innerText
      }
    }
  }
  postAddToc();
  document.removeEventListener('pjax:complete', postAddToc);
  document.addEventListener('pjax:complete', postAddToc);
// 固定卡片点击动作
function FixedCardWidget(type,name,index){
    // 根据id或class选择元素
    if (type === "id"){
      var tempcard = document.getElementById(name);
    }
    else{
      var tempcard = document.getElementsByClassName(name)[index];
    }
    // 若元素存在
    if (tempcard) {
        // 首先判断是否存在fixed-card-widget类
        if (tempcard.className.indexOf('fixed-card-widget') > -1){
          // 存在则移除
          RemoveFixedCardWidget();
        }
        else{
          // 不存在则先初始化防止卡片叠加
          RemoveFixedCardWidget();
          //新建退出蒙版
          CreateQuitBox();
          // 再添加固定卡片样式
          tempcard.classList.add('fixed-card-widget');
        }
    }
  }
  //创建一个蒙版，作为退出键使用
  function CreateQuitBox(){
    var quitBox = `<div id="quit-box" onclick="RemoveFixedCardWidget()"></div>`
    var asideContent = document.getElementById('aside-content');
    asideContent.insertAdjacentHTML("beforebegin",quitBox)
  }
  // 移除卡片方法
  function RemoveFixedCardWidget(){
    var activedItems = document.querySelectorAll('.fixed-card-widget');
    if (activedItems) {
      for (i = 0; i < activedItems.length; i++) {
        activedItems[i].classList.remove('fixed-card-widget');
      }
    }
    //移除退出蒙版
    var quitBox = document.getElementById('quit-box');
    if (quitBox) quitBox.remove();
  }
  // 常规先初始化，确保切换页面后不会有固定卡片留存
  RemoveFixedCardWidget()

  function refreshCache() {
    if ('serviceWorker' in window.navigator && navigator.serviceWorker.controller) {
        if (confirm('是否确定刷新全站缓存')) navigator.serviceWorker.controller.postMessage("refresh")
    } else if (GLOBAL_CONFIG.Snackbar) {
        btf.snackbarShow('ServiceWorker未激活,请刷新浏览器')
    } else {
        alert('ServiceWorker未激活,请刷新浏览器')
    }
  }
  
  navigator.serviceWorker.addEventListener('message', event => {
    if (event.data === 'success') {
      window.location.reload(true)
    }
  })
  // 页面百分比
  function percent() {
      let a = document.documentElement.scrollTop, // 卷去高度
          b = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight) - document.documentElement.clientHeight, // 整个网页高度 减去 可视高度
          result = Math.round(a / b * 100), // 计算百分比
          btn = document.querySelector("#go-up"); // 获取按钮
  
      if (result < 95) { // 如果阅读进度小于95% 就显示百分比
          btn.childNodes[0].style.display = 'none'
          btn.childNodes[1].style.display = 'block'
          btn.childNodes[1].innerHTML = result + '<span>%</span>';
      } else { // 如果大于95%就显示回到顶部图标
          btn.childNodes[1].style.display = 'none'
          btn.childNodes[0].style.display = 'block'
      }
  }
  window.removeEventListener('scroll', window.percentScroll);
  window.percentScroll = btf.throttle(percent, 50);
window.addEventListener('scroll', window.percentScroll);
  
/* if(window.name == ""){
  window.name = "chuckle-tc";  // 在首次进入页面时我们可以给window.name设置一个固定值 
  Snackbar.show({
    text: '由于SW的修改，老访客请点击刷新',
    actionText: '刷新',
    duration: '3000',
    pos: 'bottom-center',
    onActionClick: function() {
      navigator.serviceWorker.controller.postMessage("refresh")
    }
  });
} */
let kk = {};

kk.showRightMenu = function(isTrue, x = 0, y = 0) {
    let rightMenu = document.getElementById('rightMenu');
    rightMenu.style.top = x + 'px';
    rightMenu.style.left = y + 'px';

    if (isTrue) {
        rightMenu.style.display = 'block';
    } else {
        rightMenu.style.display = 'none';
    }
};

kk.switchDarkMode = function() {
    const nowMode = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    if (nowMode === 'light') {
        activateDarkMode();
        saveToLocal.set('theme', 'dark', 2)
        if (typeof GLOBAL_CONFIG.Snackbar !== 'undefined') {
            btf.snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night);
        }
    } else {
        activateLightMode();
        saveToLocal.set('theme', 'light', 2)
        if (typeof GLOBAL_CONFIG.Snackbar !== 'undefined') {
            btf.snackbarShow(GLOBAL_CONFIG.Snackbar.night_to_day);
        }
    }
    // handle some cases
    if (typeof utterancesTheme === 'function') {
        utterancesTheme();
    }
    if (typeof FB === 'object') {
        window.loadFBComment();
    }
    if (window.DISQUS && document.getElementById('disqus_thread').children.length) {
        setTimeout(() => window.disqusReset(), 200);
    }
};

// kk.switchReadMode = function(){
//     const $body = document.body
//     $body.classList.add('read-mode')
//     const newEle = document.createElement('button')
//     newEle.type = 'button'
//     newEle.className = 'fas fa-sign-out-alt exit-readmode'
//     $body.appendChild(newEle)

//     function clickFn () {
//         $body.classList.remove('read-mode')
//         newEle.remove()
//         newEle.removeEventListener('click', clickFn)
//     }

//     newEle.addEventListener('click', clickFn)
// }
//复制选中文字
kk.copySelect = function(){
    document.execCommand('Copy',false,null);
    //调用弹窗提示复制成功
    btf.snackbarShow("你的剪切板已被窝占领惹~");
}

//回到顶部
kk.scrollToTop = function(){
    btf.scrollToDest(0, 500);
}

if(! (navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))){
    // $('body').before('<div id="fps" style="z-index:10000;opacity: 0.9;color: var(--font-color);font-size:12px;position:fixed;font-weight:bold;"></div>');
    // var showFPS = (function(){
    //     var requestAnimationFrame =
    //         window.requestAnimationFrame ||
    //         window.webkitRequestAnimationFrame ||
    //         window.mozRequestAnimationFrame ||
    //         window.oRequestAnimationFrame ||
    //         window.msRequestAnimationFrame ||
    //         function(callback) {
    //             window.setTimeout(callback, 1000/60);
    //         };
    //     var e,pe,pid,fps,last,offset,step,appendFps;
    //     fps = 0;
    //     last = Date.now();
    //     step = function(){
    //         offset = Date.now() - last;
    //         fps += 1;
    //         if( offset >= 1000 ){
    //         last += offset;
    //         appendFps(fps);
    //         fps = 0;
    //         }
    //         requestAnimationFrame( step );
    //     };
    //     appendFps = function(fps){
    //         $('#fps').html(fps+'FPS');
    //     };
    //     step();
    // })();
    // 菜单的show/hide
    window.oncontextmenu = function(event) {
        if (event.ctrlKey) return true; // ctrl+右键 使用原生右键
        let rightMenu = document.getElementById('rightMenu');
        if (rightMenu.style.display === 'block') {
            kk.showRightMenu(false);
            return false;
        }
        let rightMenuGroupElements = document.querySelectorAll('.rightMenu-group.hide');
        rightMenuGroupElements.forEach(function(element) {
            element.style.display = 'none';
        });
        
        if (document.getSelection().toString()) {
            document.getElementById('menu-text').style.display = 'block';
        }
        
        if (document.activeElement.tagName === "INPUT" || document.activeElement.tagName === "TEXTAREA") {
            document.getElementById('menu-read').style.display = 'block';
        }
        
        let pageX = event.clientX + 10; // 加10是为了防止显示时鼠标遮在菜单上
        let pageY = event.clientY;
    
        // 菜单默认显示在鼠标右下方，当鼠标靠右或靠下时，将菜单显示在鼠标左方\上方
        if (pageX + 144 > window.innerWidth) {
            pageX -= 144;
        }
        if (pageY + 237 > window.innerHeight) {
            pageY -= 237;
        }
        kk.showRightMenu(true, pageY, pageX);
        
        return false;
    };
}
function hideRightMenu(){kk.showRightMenu(false);}
window.removeEventListener('click',hideRightMenu);
window.addEventListener('click',hideRightMenu);

document.getElementById('menu-backward').addEventListener('click', function() {
    window.history.back();
});
document.getElementById('menu-forward').addEventListener('click', function() {
    window.history.forward();
});
document.getElementById('menu-refresh').addEventListener('click', function() {
    window.location.reload();
});
document.getElementById('menu-darkmode').addEventListener('click', kk.switchDarkMode);
document.getElementById('menu-top').addEventListener('click', kk.scrollToTop);
// $('#menu-themeChange').on('click',function(){kk.switchTheme();});

// window.addEventListener('load',function(){kk.switchTheme(true);});	//页面加载时，通过缓存加载主题
/* if(! (navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))){
function dark() {window.requestAnimationFrame=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame;var n,e,i,h,t=.05,s=document.getElementById("universe"),o=!0,a="180,184,240",r="226,225,142",d="226,225,224",c=[];function f(){n=window.innerWidth,e=window.innerHeight,i=.216*n,s.setAttribute("width",n),s.setAttribute("height",e)}function u(){h.clearRect(0,0,n,e);for(var t=c.length,i=0;i<t;i++){var s=c[i];s.move(),s.fadeIn(),s.fadeOut(),s.draw()}}function y(){this.reset=function(){this.giant=m(3),this.comet=!this.giant&&!o&&m(10),this.x=l(0,n-10),this.y=l(0,e),this.r=l(1.1,2.6),this.dx=l(t,6*t)+(this.comet+1-1)*t*l(50,120)+2*t,this.dy=-l(t,6*t)-(this.comet+1-1)*t*l(50,120),this.fadingOut=null,this.fadingIn=!0,this.opacity=0,this.opacityTresh=l(.2,1-.4*(this.comet+1-1)),this.do=l(5e-4,.002)+.001*(this.comet+1-1)},this.fadeIn=function(){this.fadingIn&&(this.fadingIn=!(this.opacity>this.opacityTresh),this.opacity+=this.do)},this.fadeOut=function(){this.fadingOut&&(this.fadingOut=!(this.opacity<0),this.opacity-=this.do/2,(this.x>n||this.y<0)&&(this.fadingOut=!1,this.reset()))},this.draw=function(){if(h.beginPath(),this.giant)h.fillStyle="rgba("+a+","+this.opacity+")",h.arc(this.x,this.y,2,0,2*Math.PI,!1);else if(this.comet){h.fillStyle="rgba("+d+","+this.opacity+")",h.arc(this.x,this.y,1.5,0,2*Math.PI,!1);for(var t=0;t<30;t++)h.fillStyle="rgba("+d+","+(this.opacity-this.opacity/20*t)+")",h.rect(this.x-this.dx/4*t,this.y-this.dy/4*t-2,2,2),h.fill()}else h.fillStyle="rgba("+r+","+this.opacity+")",h.rect(this.x,this.y,this.r,this.r);h.closePath(),h.fill()},this.move=function(){this.x+=this.dx,this.y+=this.dy,!1===this.fadingOut&&this.reset(),(this.x>n-n/4||this.y<0)&&(this.fadingOut=!0)},setTimeout(function(){o=!1},50)}function m(t){return Math.floor(1e3*Math.random())+1<10*t}function l(t,i){return Math.random()*(i-t)+t}f(),window.addEventListener("resize",f,!1),function(){h=s.getContext("2d");for(var t=0;t<i;t++)c[t]=new y,c[t].reset();u()}(),function t(){u(),window.requestAnimationFrame(t)}()};
dark()
} */
  function linkCom(e){var t=document.querySelector(".veditor");if(e=="bf"){t.value="```yml\n";t.value+=`- name: 
  link: 
  avatar: 
  descr: 
  siteshot: `;t.value+="\n```";t.setSelectionRange(15,15)}else{t.value=`站点名称：
站点地址：
头像链接：
站点描述：
站点截图[可选]：`;t.setSelectionRange(5,5)}t.focus()}
/*!
 * clipboard.js v2.0.10
 * https://clipboardjs.com/
 */
(function webpackUniversalModuleDefinition(root, factory) {
  if(typeof exports === 'object' && typeof module === 'object')
      module.exports = factory();
  else if(typeof define === 'function' && define.amd)
      define([], factory);
  else if(typeof exports === 'object')
      exports["ClipboardJS"] = factory();
  else
      root["ClipboardJS"] = factory();
})(this, function() {
  return /******/ (function() { // webpackBootstrap
      /******/ 	var __webpack_modules__ = ({

          /***/ 686:
          /***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

              "use strict";

// EXPORTS
              __webpack_require__.d(__webpack_exports__, {
                  "default": function() { return /* binding */ clipboard; }
              });

// EXTERNAL MODULE: ./node_modules/tiny-emitter/index.js
              var tiny_emitter = __webpack_require__(279);
              var tiny_emitter_default = /*#__PURE__*/__webpack_require__.n(tiny_emitter);
// EXTERNAL MODULE: ./node_modules/good-listener/src/listen.js
              var listen = __webpack_require__(370);
              var listen_default = /*#__PURE__*/__webpack_require__.n(listen);
// EXTERNAL MODULE: ./node_modules/select/src/select.js
              var src_select = __webpack_require__(817);
              var select_default = /*#__PURE__*/__webpack_require__.n(src_select);
              ;// CONCATENATED MODULE: ./src/common/command.js
              /**
               * Executes a given operation type.
               * @param {String} type
               * @return {Boolean}
               */
              function command(type) {
                  try {
                      return document.execCommand(type);
                  } catch (err) {
                      return false;
                  }
              }
              ;// CONCATENATED MODULE: ./src/actions/cut.js


              /**
               * Cut action wrapper.
               * @param {String|HTMLElement} target
               * @return {String}
               */

              var ClipboardActionCut = function ClipboardActionCut(target) {
                  var selectedText = select_default()(target);
                  command('cut');
                  return selectedText;
              };

              /* harmony default export */ var actions_cut = (ClipboardActionCut);
              ;// CONCATENATED MODULE: ./src/common/create-fake-element.js
              /**
               * Creates a fake textarea element with a value.
               * @param {String} value
               * @return {HTMLElement}
               */
              function createFakeElement(value) {
                  var isRTL = document.documentElement.getAttribute('dir') === 'rtl';
                  var fakeElement = document.createElement('textarea'); // Prevent zooming on iOS

                  fakeElement.style.fontSize = '12pt'; // Reset box model

                  fakeElement.style.border = '0';
                  fakeElement.style.padding = '0';
                  fakeElement.style.margin = '0'; // Move element out of screen horizontally

                  fakeElement.style.position = 'absolute';
                  fakeElement.style[isRTL ? 'right' : 'left'] = '-9999px'; // Move element to the same position vertically

                  var yPosition = window.pageYOffset || document.documentElement.scrollTop;
                  fakeElement.style.top = "".concat(yPosition, "px");
                  fakeElement.setAttribute('readonly', '');
                  fakeElement.value = value;
                  return fakeElement;
              }
              ;// CONCATENATED MODULE: ./src/actions/copy.js



              /**
               * Copy action wrapper.
               * @param {String|HTMLElement} target
               * @param {Object} options
               * @return {String}
               */

              var ClipboardActionCopy = function ClipboardActionCopy(target) {
                  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
                      container: document.body
                  };
                  var selectedText = '';

                  if (typeof target === 'string') {
                      var fakeElement = createFakeElement(target);
                      options.container.appendChild(fakeElement);
                      selectedText = select_default()(fakeElement);
                      command('copy');
                      fakeElement.remove();
                  } else {
                      selectedText = select_default()(target);
                      command('copy');
                  }

                  return selectedText;
              };

              /* harmony default export */ var actions_copy = (ClipboardActionCopy);
              ;// CONCATENATED MODULE: ./src/actions/default.js
              function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }



              /**
               * Inner function which performs selection from either `text` or `target`
               * properties and then executes copy or cut operations.
               * @param {Object} options
               */

              var ClipboardActionDefault = function ClipboardActionDefault() {
                  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                  // Defines base properties passed from constructor.
                  var _options$action = options.action,
                      action = _options$action === void 0 ? 'copy' : _options$action,
                      container = options.container,
                      target = options.target,
                      text = options.text; // Sets the `action` to be performed which can be either 'copy' or 'cut'.

                  if (action !== 'copy' && action !== 'cut') {
                      throw new Error('Invalid "action" value, use either "copy" or "cut"');
                  } // Sets the `target` property using an element that will be have its content copied.


                  if (target !== undefined) {
                      if (target && _typeof(target) === 'object' && target.nodeType === 1) {
                          if (action === 'copy' && target.hasAttribute('disabled')) {
                              throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                          }

                          if (action === 'cut' && (target.hasAttribute('readonly') || target.hasAttribute('disabled'))) {
                              throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
                          }
                      } else {
                          throw new Error('Invalid "target" value, use a valid Element');
                      }
                  } // Define selection strategy based on `text` property.


                  if (text) {
                      return actions_copy(text, {
                          container: container
                      });
                  } // Defines which selection strategy based on `target` property.


                  if (target) {
                      return action === 'cut' ? actions_cut(target) : actions_copy(target, {
                          container: container
                      });
                  }
              };

              /* harmony default export */ var actions_default = (ClipboardActionDefault);
              ;// CONCATENATED MODULE: ./src/clipboard.js
              function clipboard_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { clipboard_typeof = function _typeof(obj) { return typeof obj; }; } else { clipboard_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return clipboard_typeof(obj); }

              function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

              function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

              function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

              function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

              function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

              function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

              function _possibleConstructorReturn(self, call) { if (call && (clipboard_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

              function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

              function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

              function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }






              /**
               * Helper function to retrieve attribute value.
               * @param {String} suffix
               * @param {Element} element
               */

              function getAttributeValue(suffix, element) {
                  var attribute = "data-clipboard-".concat(suffix);

                  if (!element.hasAttribute(attribute)) {
                      return;
                  }

                  return element.getAttribute(attribute);
              }
              /**
               * Base class which takes one or more elements, adds event listeners to them,
               * and instantiates a new `ClipboardAction` on each click.
               */


              var Clipboard = /*#__PURE__*/function (_Emitter) {
                  _inherits(Clipboard, _Emitter);

                  var _super = _createSuper(Clipboard);

                  /**
                   * @param {String|HTMLElement|HTMLCollection|NodeList} trigger
                   * @param {Object} options
                   */
                  function Clipboard(trigger, options) {
                      var _this;

                      _classCallCheck(this, Clipboard);

                      _this = _super.call(this);

                      _this.resolveOptions(options);

                      _this.listenClick(trigger);

                      return _this;
                  }
                  /**
                   * Defines if attributes would be resolved using internal setter functions
                   * or custom functions that were passed in the constructor.
                   * @param {Object} options
                   */


                  _createClass(Clipboard, [{
                      key: "resolveOptions",
                      value: function resolveOptions() {
                          var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                          this.action = typeof options.action === 'function' ? options.action : this.defaultAction;
                          this.target = typeof options.target === 'function' ? options.target : this.defaultTarget;
                          this.text = typeof options.text === 'function' ? options.text : this.defaultText;
                          this.container = clipboard_typeof(options.container) === 'object' ? options.container : document.body;
                      }
                      /**
                       * Adds a click event listener to the passed trigger.
                       * @param {String|HTMLElement|HTMLCollection|NodeList} trigger
                       */

                  }, {
                      key: "listenClick",
                      value: function listenClick(trigger) {
                          var _this2 = this;

                          this.listener = listen_default()(trigger, 'click', function (e) {
                              return _this2.onClick(e);
                          });
                      }
                      /**
                       * Defines a new `ClipboardAction` on each click event.
                       * @param {Event} e
                       */

                  }, {
                      key: "onClick",
                      value: function onClick(e) {
                          var trigger = e.delegateTarget || e.currentTarget;
                          var action = this.action(trigger) || 'copy';
                          var text = actions_default({
                              action: action,
                              container: this.container,
                              target: this.target(trigger),
                              text: this.text(trigger)
                          }); // Fires an event based on the copy operation result.

                          this.emit(text ? 'success' : 'error', {
                              action: action,
                              text: text,
                              trigger: trigger,
                              clearSelection: function clearSelection() {
                                  if (trigger) {
                                      trigger.focus();
                                  }

                                  document.activeElement.blur();
                                  window.getSelection().removeAllRanges();
                              }
                          });
                      }
                      /**
                       * Default `action` lookup function.
                       * @param {Element} trigger
                       */

                  }, {
                      key: "defaultAction",
                      value: function defaultAction(trigger) {
                          return getAttributeValue('action', trigger);
                      }
                      /**
                       * Default `target` lookup function.
                       * @param {Element} trigger
                       */

                  }, {
                      key: "defaultTarget",
                      value: function defaultTarget(trigger) {
                          var selector = getAttributeValue('target', trigger);

                          if (selector) {
                              return document.querySelector(selector);
                          }
                      }
                      /**
                       * Allow fire programmatically a copy action
                       * @param {String|HTMLElement} target
                       * @param {Object} options
                       * @returns Text copied.
                       */

                  }, {
                      key: "defaultText",

                      /**
                       * Default `text` lookup function.
                       * @param {Element} trigger
                       */
                      value: function defaultText(trigger) {
                          return getAttributeValue('text', trigger);
                      }
                      /**
                       * Destroy lifecycle.
                       */

                  }, {
                      key: "destroy",
                      value: function destroy() {
                          this.listener.destroy();
                      }
                  }], [{
                      key: "copy",
                      value: function copy(target) {
                          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
                              container: document.body
                          };
                          return actions_copy(target, options);
                      }
                      /**
                       * Allow fire programmatically a cut action
                       * @param {String|HTMLElement} target
                       * @returns Text cutted.
                       */

                  }, {
                      key: "cut",
                      value: function cut(target) {
                          return actions_cut(target);
                      }
                      /**
                       * Returns the support of the given action, or all actions if no action is
                       * given.
                       * @param {String} [action]
                       */

                  }, {
                      key: "isSupported",
                      value: function isSupported() {
                          var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ['copy', 'cut'];
                          var actions = typeof action === 'string' ? [action] : action;
                          var support = !!document.queryCommandSupported;
                          actions.forEach(function (action) {
                              support = support && !!document.queryCommandSupported(action);
                          });
                          return support;
                      }
                  }]);

                  return Clipboard;
              }((tiny_emitter_default()));

              /* harmony default export */ var clipboard = (Clipboard);

              /***/ }),

          /***/ 828:
          /***/ (function(module) {

              var DOCUMENT_NODE_TYPE = 9;

              /**
               * A polyfill for Element.matches()
               */
              if (typeof Element !== 'undefined' && !Element.prototype.matches) {
                  var proto = Element.prototype;

                  proto.matches = proto.matchesSelector ||
                      proto.mozMatchesSelector ||
                      proto.msMatchesSelector ||
                      proto.oMatchesSelector ||
                      proto.webkitMatchesSelector;
              }

              /**
               * Finds the closest parent that matches a selector.
               *
               * @param {Element} element
               * @param {String} selector
               * @return {Function}
               */
              function closest (element, selector) {
                  while (element && element.nodeType !== DOCUMENT_NODE_TYPE) {
                      if (typeof element.matches === 'function' &&
                          element.matches(selector)) {
                          return element;
                      }
                      element = element.parentNode;
                  }
              }

              module.exports = closest;


              /***/ }),

          /***/ 438:
          /***/ (function(module, __unused_webpack_exports, __webpack_require__) {

              var closest = __webpack_require__(828);

              /**
               * Delegates event to a selector.
               *
               * @param {Element} element
               * @param {String} selector
               * @param {String} type
               * @param {Function} callback
               * @param {Boolean} useCapture
               * @return {Object}
               */
              function _delegate(element, selector, type, callback, useCapture) {
                  var listenerFn = listener.apply(this, arguments);

                  element.addEventListener(type, listenerFn, useCapture);

                  return {
                      destroy: function() {
                          element.removeEventListener(type, listenerFn, useCapture);
                      }
                  }
              }

              /**
               * Delegates event to a selector.
               *
               * @param {Element|String|Array} [elements]
               * @param {String} selector
               * @param {String} type
               * @param {Function} callback
               * @param {Boolean} useCapture
               * @return {Object}
               */
              function delegate(elements, selector, type, callback, useCapture) {
                  // Handle the regular Element usage
                  if (typeof elements.addEventListener === 'function') {
                      return _delegate.apply(null, arguments);
                  }

                  // Handle Element-less usage, it defaults to global delegation
                  if (typeof type === 'function') {
                      // Use `document` as the first parameter, then apply arguments
                      // This is a short way to .unshift `arguments` without running into deoptimizations
                      return _delegate.bind(null, document).apply(null, arguments);
                  }

                  // Handle Selector-based usage
                  if (typeof elements === 'string') {
                      elements = document.querySelectorAll(elements);
                  }

                  // Handle Array-like based usage
                  return Array.prototype.map.call(elements, function (element) {
                      return _delegate(element, selector, type, callback, useCapture);
                  });
              }

              /**
               * Finds closest match and invokes callback.
               *
               * @param {Element} element
               * @param {String} selector
               * @param {String} type
               * @param {Function} callback
               * @return {Function}
               */
              function listener(element, selector, type, callback) {
                  return function(e) {
                      e.delegateTarget = closest(e.target, selector);

                      if (e.delegateTarget) {
                          callback.call(element, e);
                      }
                  }
              }

              module.exports = delegate;


              /***/ }),

          /***/ 879:
          /***/ (function(__unused_webpack_module, exports) {

              /**
               * Check if argument is a HTML element.
               *
               * @param {Object} value
               * @return {Boolean}
               */
              exports.node = function(value) {
                  return value !== undefined
                      && value instanceof HTMLElement
                      && value.nodeType === 1;
              };

              /**
               * Check if argument is a list of HTML elements.
               *
               * @param {Object} value
               * @return {Boolean}
               */
              exports.nodeList = function(value) {
                  var type = Object.prototype.toString.call(value);

                  return value !== undefined
                      && (type === '[object NodeList]' || type === '[object HTMLCollection]')
                      && ('length' in value)
                      && (value.length === 0 || exports.node(value[0]));
              };

              /**
               * Check if argument is a string.
               *
               * @param {Object} value
               * @return {Boolean}
               */
              exports.string = function(value) {
                  return typeof value === 'string'
                      || value instanceof String;
              };

              /**
               * Check if argument is a function.
               *
               * @param {Object} value
               * @return {Boolean}
               */
              exports.fn = function(value) {
                  var type = Object.prototype.toString.call(value);

                  return type === '[object Function]';
              };


              /***/ }),

          /***/ 370:
          /***/ (function(module, __unused_webpack_exports, __webpack_require__) {

              var is = __webpack_require__(879);
              var delegate = __webpack_require__(438);

              /**
               * Validates all params and calls the right
               * listener function based on its target type.
               *
               * @param {String|HTMLElement|HTMLCollection|NodeList} target
               * @param {String} type
               * @param {Function} callback
               * @return {Object}
               */
              function listen(target, type, callback) {
                  if (!target && !type && !callback) {
                      throw new Error('Missing required arguments');
                  }

                  if (!is.string(type)) {
                      throw new TypeError('Second argument must be a String');
                  }

                  if (!is.fn(callback)) {
                      throw new TypeError('Third argument must be a Function');
                  }

                  if (is.node(target)) {
                      return listenNode(target, type, callback);
                  }
                  else if (is.nodeList(target)) {
                      return listenNodeList(target, type, callback);
                  }
                  else if (is.string(target)) {
                      return listenSelector(target, type, callback);
                  }
                  else {
                      throw new TypeError('First argument must be a String, HTMLElement, HTMLCollection, or NodeList');
                  }
              }

              /**
               * Adds an event listener to a HTML element
               * and returns a remove listener function.
               *
               * @param {HTMLElement} node
               * @param {String} type
               * @param {Function} callback
               * @return {Object}
               */
              function listenNode(node, type, callback) {
                  node.addEventListener(type, callback);

                  return {
                      destroy: function() {
                          node.removeEventListener(type, callback);
                      }
                  }
              }

              /**
               * Add an event listener to a list of HTML elements
               * and returns a remove listener function.
               *
               * @param {NodeList|HTMLCollection} nodeList
               * @param {String} type
               * @param {Function} callback
               * @return {Object}
               */
              function listenNodeList(nodeList, type, callback) {
                  Array.prototype.forEach.call(nodeList, function(node) {
                      node.addEventListener(type, callback);
                  });

                  return {
                      destroy: function() {
                          Array.prototype.forEach.call(nodeList, function(node) {
                              node.removeEventListener(type, callback);
                          });
                      }
                  }
              }

              /**
               * Add an event listener to a selector
               * and returns a remove listener function.
               *
               * @param {String} selector
               * @param {String} type
               * @param {Function} callback
               * @return {Object}
               */
              function listenSelector(selector, type, callback) {
                  return delegate(document.body, selector, type, callback);
              }

              module.exports = listen;


              /***/ }),

          /***/ 817:
          /***/ (function(module) {

              function select(element) {
                  var selectedText;

                  if (element.nodeName === 'SELECT') {
                      element.focus();

                      selectedText = element.value;
                  }
                  else if (element.nodeName === 'INPUT' || element.nodeName === 'TEXTAREA') {
                      var isReadOnly = element.hasAttribute('readonly');

                      if (!isReadOnly) {
                          element.setAttribute('readonly', '');
                      }

                      element.select();
                      element.setSelectionRange(0, element.value.length);

                      if (!isReadOnly) {
                          element.removeAttribute('readonly');
                      }

                      selectedText = element.value;
                  }
                  else {
                      if (element.hasAttribute('contenteditable')) {
                          element.focus();
                      }

                      var selection = window.getSelection();
                      var range = document.createRange();

                      range.selectNodeContents(element);
                      selection.removeAllRanges();
                      selection.addRange(range);

                      selectedText = selection.toString();
                  }

                  return selectedText;
              }

              module.exports = select;


              /***/ }),

          /***/ 279:
          /***/ (function(module) {

              function E () {
                  // Keep this empty so it's easier to inherit from
                  // (via https://github.com/lipsmack from https://github.com/scottcorgan/tiny-emitter/issues/3)
              }

              E.prototype = {
                  on: function (name, callback, ctx) {
                      var e = this.e || (this.e = {});

                      (e[name] || (e[name] = [])).push({
                          fn: callback,
                          ctx: ctx
                      });

                      return this;
                  },

                  once: function (name, callback, ctx) {
                      var self = this;
                      function listener () {
                          self.off(name, listener);
                          callback.apply(ctx, arguments);
                      };

                      listener._ = callback
                      return this.on(name, listener, ctx);
                  },

                  emit: function (name) {
                      var data = [].slice.call(arguments, 1);
                      var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
                      var i = 0;
                      var len = evtArr.length;

                      for (i; i < len; i++) {
                          evtArr[i].fn.apply(evtArr[i].ctx, data);
                      }

                      return this;
                  },

                  off: function (name, callback) {
                      var e = this.e || (this.e = {});
                      var evts = e[name];
                      var liveEvents = [];

                      if (evts && callback) {
                          for (var i = 0, len = evts.length; i < len; i++) {
                              if (evts[i].fn !== callback && evts[i].fn._ !== callback)
                                  liveEvents.push(evts[i]);
                          }
                      }

                      // Remove event from queue to prevent memory leak
                      // Suggested by https://github.com/lazd
                      // Ref: https://github.com/scottcorgan/tiny-emitter/commit/c6ebfaa9bc973b33d110a84a307742b7cf94c953#commitcomment-5024910

                      (liveEvents.length)
                          ? e[name] = liveEvents
                          : delete e[name];

                      return this;
                  }
              };

              module.exports = E;
              module.exports.TinyEmitter = E;


              /***/ })

          /******/ 	});
      /************************************************************************/
      /******/ 	// The module cache
      /******/ 	var __webpack_module_cache__ = {};
      /******/
      /******/ 	// The require function
      /******/ 	function __webpack_require__(moduleId) {
          /******/ 		// Check if module is in cache
          /******/ 		if(__webpack_module_cache__[moduleId]) {
              /******/ 			return __webpack_module_cache__[moduleId].exports;
              /******/ 		}
          /******/ 		// Create a new module (and put it into the cache)
          /******/ 		var module = __webpack_module_cache__[moduleId] = {
              /******/ 			// no module.id needed
              /******/ 			// no module.loaded needed
              /******/ 			exports: {}
              /******/ 		};
          /******/
          /******/ 		// Execute the module function
          /******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
          /******/
          /******/ 		// Return the exports of the module
          /******/ 		return module.exports;
          /******/ 	}
      /******/
      /************************************************************************/
      /******/ 	/* webpack/runtime/compat get default export */
      /******/ 	!function() {
          /******/ 		// getDefaultExport function for compatibility with non-harmony modules
          /******/ 		__webpack_require__.n = function(module) {
              /******/ 			var getter = module && module.__esModule ?
                  /******/ 				function() { return module['default']; } :
                  /******/ 				function() { return module; };
              /******/ 			__webpack_require__.d(getter, { a: getter });
              /******/ 			return getter;
              /******/ 		};
          /******/ 	}();
      /******/
      /******/ 	/* webpack/runtime/define property getters */
      /******/ 	!function() {
          /******/ 		// define getter functions for harmony exports
          /******/ 		__webpack_require__.d = function(exports, definition) {
              /******/ 			for(var key in definition) {
                  /******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
                      /******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
                      /******/ 				}
                  /******/ 			}
              /******/ 		};
          /******/ 	}();
      /******/
      /******/ 	/* webpack/runtime/hasOwnProperty shorthand */
      /******/ 	!function() {
          /******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
          /******/ 	}();
      /******/
      /************************************************************************/
      /******/ 	// module exports must be returned from runtime so entry inlining is disabled
      /******/ 	// startup
      /******/ 	// Load entry module and return exports
      /******/ 	return __webpack_require__(686);
      /******/ })()
      .default;
});

// ---------- 自定义内容 ---------- //

/* 获取本页链接地址（不包含参数） */
function getNowURL() {
  return location.protocol + '//' + location.host + location.pathname
}

const clipboard = new ClipboardJS('button#share-link', {
  text: function () {
      return document.title + '：' + getNowURL()
  },
});
clipboard.on('success', function () {
  btf.snackbarShow("成功复制本页的分享链接，快去粘贴吧~")
});
clipboard.on('error', function () {
  btf.snackbarShow("复制失败")
});

kk.copyURL = function(){
  btf.snackbarShow("成功复制本页的分享链接，快去粘贴吧~")
  const clipboard = new ClipboardJS('#share-chuckle', {
    text: function () {
        return document.title + '：' + getNowURL()
    },
  });
}
document.getElementById('share-chuckle').addEventListener('click', kk.copyURL);
kk.postURL = function(){
  btf.snackbarShow("成功复制本页的分享链接，快去粘贴吧~")
  const clipboard = new ClipboardJS('#share-post', {
    text: function () {
        return document.title + '：' + getNowURL()
    },
  });
}
kk.pasteText = function() {
    btf.snackbarShow("粘贴请使用Ctrl+V，原生右键:Ctrl+右键");
}
//移除FixedComment类，保持原生样式，确保不与最新评论跳转冲突
function RemoveFixedComment() {
  var activedItems = document.querySelectorAll('.fixedcomment');
  if (activedItems) {
    for (i = 0; i < activedItems.length; i++) {
      activedItems[i].classList.remove('fixedcomment');
    }
  }
}
//给post-comment添加fixedcomment类
function AddFixedComment(){
  var commentBoard = document.getElementById('post-comment');
  var quitBoard = document.getElementById('quit-board');
  commentBoard.classList.add('fixedcomment');
  quitBoard.classList.add('fixedcomment');
}
//创建一个蒙版，作为退出键使用
function CreateQuitBoard(){
  var quitBoard = `<div id="quit-board" onclick="RemoveFixedComment()"></div>`
  var commentBoard = document.getElementById('post-comment');
  commentBoard.insertAdjacentHTML("beforebegin",quitBoard)
}

function FixedCommentBtn(){
  //第一步，判断当前是否存在FixedComment类，存在则移除，不存在则添加
  // 获取评论区对象
  var commentBoard = document.getElementById('post-comment');
  // 若评论区存在
  if (commentBoard) {
      // 判断是否存在fixedcomment类
      if (commentBoard.className.indexOf('fixedcomment') > -1){
        // 存在则移除
        RemoveFixedComment();
      }
      else{
        // 不存在则添加
        CreateQuitBoard();
        AddFixedComment();
      }
  }
}
//切换页面先初始化一遍，确保开始时是原生状态。所以要加pjax重载。
RemoveFixedComment();

(function(){'use strict';var e,aa=document.createElement("style");aa.innerHTML="@keyframes wb-fade-in{0%{opacity:0}to{opacity:.85}}.winbox{position:fixed;left:0;top:0;background:#0050ff;box-shadow:0 14px 28px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.22);transition:width .3s,height .3s,left .3s,top .3s;transition-timing-function:cubic-bezier(.3,1,.3,1);contain:layout size;text-align:left;touch-action:none}.wb-body,.wb-header{position:absolute;left:0}.wb-header{top:0;width:100%;height:35px;line-height:35px;color:#fff;overflow:hidden;z-index:1}.wb-body{top:35px;right:0;bottom:0;overflow:auto;-webkit-overflow-scrolling:touch;overflow-scrolling:touch;will-change:contents;background:#fff;margin-top:0!important;contain:strict;z-index:0}.wb-control *,.wb-icon{background-repeat:no-repeat}.wb-drag{height:100%;padding-left:10px;cursor:move}.wb-title{font-family:Arial,sans-serif;font-size:14px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.wb-icon{display:none;width:20px;height:100%;margin:-1px 8px 0-3px;float:left;background-size:100%;background-position:center}.wb-e,.wb-w{width:10px;top:0}.wb-n,.wb-s{left:0;height:10px;position:absolute}.wb-n{top:-5px;right:0;cursor:n-resize;z-index:2}.wb-e{position:absolute;right:-5px;bottom:0;cursor:w-resize;z-index:2}.wb-s{bottom:-5px;right:0;cursor:n-resize;z-index:2}.wb-nw,.wb-sw,.wb-w{left:-5px}.wb-w{position:absolute;bottom:0;cursor:w-resize;z-index:2}.wb-ne,.wb-nw,.wb-sw{width:15px;height:15px;z-index:2;position:absolute}.wb-nw{top:-5px;cursor:nw-resize}.wb-ne,.wb-sw{cursor:ne-resize}.wb-ne{top:-5px;right:-5px}.wb-se,.wb-sw{bottom:-5px}.wb-se{position:absolute;right:-5px;width:15px;height:15px;cursor:nw-resize;z-index:2}.wb-control{float:right;height:100%;max-width:100%;text-align:center}.wb-control *{display:inline-block;width:30px;height:100%;max-width:100%;background-position:center;cursor:pointer}.no-close .wb-close,.no-full .wb-full,.no-header .wb-header,.no-max .wb-max,.no-min .wb-min,.no-resize .wb-body~div,.wb-body .wb-hide,.wb-show,.winbox.hide,.winbox.min .wb-body>*,.winbox.min .wb-full,.winbox.min .wb-min,.winbox.modal .wb-full,.winbox.modal .wb-max,.winbox.modal .wb-min{display:none}.winbox.max .wb-drag,.winbox.min .wb-drag{cursor:default}.wb-min{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAyIj48cGF0aCBmaWxsPSIjZmZmIiBkPSJNOCAwaDdhMSAxIDAgMCAxIDAgMkgxYTEgMSAwIDAgMSAwLTJoN3oiLz48L3N2Zz4=);background-size:14px auto;background-position:center calc(50% + 6px)}.wb-max{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNmZmYiIHZpZXdCb3g9IjAgMCA5NiA5NiI+PHBhdGggZD0iTTIwIDcxLjMxMUMxNS4zNCA2OS42NyAxMiA2NS4yMyAxMiA2MFYyMGMwLTYuNjMgNS4zNy0xMiAxMi0xMmg0MGM1LjIzIDAgOS42NyAzLjM0IDExLjMxMSA4SDI0Yy0yLjIxIDAtNCAxLjc5LTQgNHY1MS4zMTF6Ii8+PHBhdGggZD0iTTkyIDc2VjM2YzAtNi42My01LjM3LTEyLTEyLTEySDQwYy02LjYzIDAtMTIgNS4zNy0xMiAxMnY0MGMwIDYuNjMgNS4zNyAxMiAxMiAxMmg0MGM2LjYzIDAgMTItNS4zNyAxMi0xMnptLTUyIDRjLTIuMjEgMC00LTEuNzktNC00VjM2YzAtMi4yMSAxLjc5LTQgNC00aDQwYzIuMjEgMCA0IDEuNzkgNCA0djQwYzAgMi4yMS0xLjc5IDQtNCA0SDQweiIvPjwvc3ZnPg==);background-size:17px auto}.wb-close{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xIC0xIDE4IDE4Ij48cGF0aCBmaWxsPSIjZmZmIiBkPSJtMS42MTMuMjEuMDk0LjA4M0w4IDYuNTg1IDE0LjI5My4yOTNsLjA5NC0uMDgzYTEgMSAwIDAgMSAxLjQwMyAxLjQwM2wtLjA4My4wOTRMOS40MTUgOGw2LjI5MiA2LjI5M2ExIDEgMCAwIDEtMS4zMiAxLjQ5N2wtLjA5NC0uMDgzTDggOS40MTVsLTYuMjkzIDYuMjkyLS4wOTQuMDgzQTEgMSAwIDAgMSAuMjEgMTQuMzg3bC4wODMtLjA5NEw2LjU4NSA4IC4yOTMgMS43MDdBMSAxIDAgMCAxIDEuNjEzLjIxeiIvPjwvc3ZnPg==);background-size:15px auto;background-position:5px center}.wb-full{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjIuNSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNOCAzSDVhMiAyIDAgMCAwLTIgMnYzbTE4IDBWNWEyIDIgMCAwIDAtMi0yaC0zbTAgMThoM2EyIDIgMCAwIDAgMi0ydi0zTTMgMTZ2M2EyIDIgMCAwIDAgMiAyaDMiLz48L3N2Zz4=);background-size:16px auto}.winbox.max .wb-body~div,.winbox.min .wb-body~div,.winbox.modal .wb-body~div,.winbox.modal .wb-drag,body.wb-lock iframe{pointer-events:none}.winbox.max{box-shadow:none}.winbox.max .wb-body{margin:0!important}.winbox iframe{position:absolute;width:100%;height:100%;border:0}body.wb-lock .winbox{will-change:left,top,width,height;transition:none}.winbox.modal:before{content:'';position:absolute;top:0;left:0;right:0;bottom:0;background:inherit;border-radius:inherit}.winbox.modal:after{content:'';position:absolute;top:-50vh;left:-50vw;right:-50vw;bottom:-50vh;background:#0d1117;animation:wb-fade-in .2s ease-out forwards;z-index:-1}.no-animation{transition:none}.no-shadow{box-shadow:none}.no-header .wb-body{top:0}.no-move:not(.min) .wb-title{pointer-events:none}.wb-body .wb-show{display:revert}";
var h=document.getElementsByTagName("head")[0];h.firstChild?h.insertBefore(aa,h.firstChild):h.appendChild(aa);var ba=document.createElement("div");ba.innerHTML="<div class=wb-header><div class=wb-control><span class=wb-min></span><span class=wb-max></span><span class=wb-full></span><span class=wb-close></span></div><div class=wb-drag><div class=wb-icon></div><div class=wb-title></div></div></div><div class=wb-body></div><div class=wb-n></div><div class=wb-s></div><div class=wb-w></div><div class=wb-e></div><div class=wb-nw></div><div class=wb-ne></div><div class=wb-se></div><div class=wb-sw></div>";function k(a,b,c,f){a&&a.addEventListener(b,c,f||!1)}function l(a,b){var c=window,f=m;c&&c.removeEventListener(a,b,f||!1)}function t(a,b){a.stopPropagation();b&&a.preventDefault()}function u(a,b,c){c=""+c;a["_s_"+b]!==c&&(a.style.setProperty(b,c),a["_s_"+b]=c)};/*
 self.max &&*/
var x=[],A=[],ca={capture:!0,passive:!1},m={capture:!0,passive:!0},B,da=0,E=10,F,J,ha,K,P,ia;
function U(a,b){if(!(this instanceof U))return new U(a);B||ja();if(a){if(b){var c=a;a=b}if("string"===typeof a)c=a;else{var f=a.id;var d=a.index;var n=a.root;var p=a.template;c=c||a.title;var v=a.icon;var L=a.mount;var Q=a.html;var g=a.url;var q=a.width;var r=a.height;var w=a.minwidth;var C=a.minheight;var y=a.maxwidth;var z=a.maxheight;var ea=a.autosize;var D=a.overflow;var G=a.min;var H=a.max;var I=a.hidden;var fa=a.modal;var X=a.x||(fa?"center":0);var Y=a.y||(fa?"center":0);var M=a.top;var N=a.left;
var R=a.bottom;var S=a.right;var la=a.background;var O=a.border;var T=a.header;var Z=a["class"];var ma=a.oncreate;var ra=a.onclose;var sa=a.onfocus;var ta=a.onblur;var ua=a.onmove;var va=a.onresize;var wa=a.onfullscreen;var xa=a.onmaximize;var ya=a.onminimize;var za=a.onrestore;var Aa=a.onhide;var Ba=a.onshow;var Ca=a.onload}}this.g=(p||ba).cloneNode(!0);this.g.id=this.id=f||"winbox-"+ ++da;this.g.className="winbox"+(Z?" "+("string"===typeof Z?Z:Z.join(" ")):"")+(fa?" modal":"");this.g.winbox=this;
this.window=this.g;this.body=this.g.getElementsByClassName("wb-body")[0];this.h=T||35;A.push(this);la&&this.setBackground(la);O?u(this.body,"margin",O+(isNaN(O)?"":"px")):O=0;T&&(b=this.g.getElementsByClassName("wb-header")[0],u(b,"height",T+"px"),u(b,"line-height",T+"px"),u(this.body,"top",T+"px"));c&&this.setTitle(c);v&&this.setIcon(v);L?this.mount(L):Q?this.body.innerHTML=Q:g&&this.setUrl(g,Ca);M=M?V(M,P):0;R=R?V(R,P):0;N=N?V(N,K):0;S=S?V(S,K):0;c=K-N-S;v=P-M-R;y=y?V(y,c):c;z=z?V(z,v):v;w=w?V(w,
y):150;C=C?V(C,z):this.h;ea?((n||B).appendChild(this.body),q=Math.max(Math.min(this.body.clientWidth+2*O+1,y),w),r=Math.max(Math.min(this.body.clientHeight+this.h+O+1,z),C),this.g.appendChild(this.body)):(q=q?V(q,y):Math.max(y/2,w)|0,r=r?V(r,z):Math.max(z/2,C)|0);X=X?V(X,c,q):N;Y=Y?V(Y,v,r):M;this.x=X;this.y=Y;this.width=q;this.height=r;this.s=w;this.o=C;this.m=y;this.l=z;this.top=M;this.right=S;this.bottom=R;this.left=N;this.index=d;this.j=D;this.focused=this.hidden=this.full=this.max=this.min=!1;
this.onclose=ra;this.onfocus=sa;this.onblur=ta;this.onmove=ua;this.onresize=va;this.onfullscreen=wa;this.onmaximize=xa;this.onminimize=ya;this.onrestore=za;this.onhide=Aa;this.onshow=Ba;I?this.hide():this.focus();if(d||0===d)this.index=d,u(this.g,"z-index",d),d>E&&(E=d);H?this.maximize():G?this.minimize():this.resize().move();ka(this);(n||B).appendChild(this.g);ma&&ma.call(this,a)}U["new"]=function(a){return new U(a)};U.stack=function(){return A};
function V(a,b,c){"string"===typeof a&&("center"===a?a=(b-c)/2+.5|0:"right"===a||"bottom"===a?a=b-c:(c=parseFloat(a),a="%"===(""+c!==a&&a.substring((""+c).length))?b/100*c+.5|0:c));return a}
function ja(){B=document.body;B[J="requestFullscreen"]||B[J="msRequestFullscreen"]||B[J="webkitRequestFullscreen"]||B[J="mozRequestFullscreen"]||(J="");ha=J&&J.replace("request","exit").replace("mozRequest","mozCancel").replace("Request","Exit");k(window,"resize",function(){na();oa()});k(B,"mousedown",function(){ia=!1},!0);k(B,"mousedown",function(){if(!ia){var a=A.length;if(a)for(--a;0<=a;a--){var b=A[a];if(b.focused){b.blur();break}}}});na()}
function ka(a){W(a,"drag");W(a,"n");W(a,"s");W(a,"w");W(a,"e");W(a,"nw");W(a,"ne");W(a,"se");W(a,"sw");k(a.g.getElementsByClassName("wb-min")[0],"click",function(b){t(b);a.min?a.restore().focus():a.minimize()});k(a.g.getElementsByClassName("wb-max")[0],"click",function(b){t(b);a.max?a.restore().focus():a.maximize().focus()});J?k(a.g.getElementsByClassName("wb-full")[0],"click",function(b){t(b);a.fullscreen().focus()}):a.addClass("no-full");k(a.g.getElementsByClassName("wb-close")[0],"click",function(b){t(b);
a.close()||(a=null)});k(a.g,"mousedown",function(){ia=!0},!0);k(a.body,"mousedown",function(){a.focus()},!0)}function pa(a){x.splice(x.indexOf(a),1);oa();a.removeClass("min");a.min=!1;a.g.title=""}function oa(){for(var a=x.length,b={},c={},f=0,d;f<a;f++)d=x[f],d=d.left+":"+d.top,c[d]?c[d]++:(b[d]=0,c[d]=1);f=0;for(var n,p;f<a;f++)d=x[f],n=d.left+":"+d.top,p=Math.min((K-d.left-d.right)/c[n],250),d.resize(p+1|0,d.h,!0).move(d.left+b[n]*p|0,P-d.bottom-d.h,!0),b[n]++}
function W(a,b){function c(g){t(g,!0);a.focus();if("drag"===b){if(a.min){a.restore();return}if(!a.g.classList.contains("no-max")){var q=Date.now(),r=q-Q;Q=q;if(300>r){a.max?a.restore():a.maximize();return}}}a.min||(B.classList.add("wb-lock"),(p=g.touches)&&(p=p[0])?(g=p,k(window,"touchmove",f,m),k(window,"touchend",d,m)):(k(window,"mousemove",f,m),k(window,"mouseup",d,m)),v=g.pageX,L=g.pageY)}function f(g){t(g);p&&(g=g.touches[0]);var q=g.pageX;g=g.pageY;var r=q-v,w=g-L,C=a.width,y=a.height,z=a.x,
ea=a.y,D;if("drag"===b){if(a.g.classList.contains("no-move"))return;a.x+=r;a.y+=w;var G=D=1}else{if("e"===b||"se"===b||"ne"===b){a.width+=r;var H=1}else if("w"===b||"sw"===b||"nw"===b)a.x+=r,a.width-=r,G=H=1;if("s"===b||"se"===b||"sw"===b){a.height+=w;var I=1}else if("n"===b||"ne"===b||"nw"===b)a.y+=w,a.height-=w,D=I=1}H&&(a.width=Math.max(Math.min(a.width,a.m,K-a.x-a.right),a.s),H=a.width!==C);I&&(a.height=Math.max(Math.min(a.height,a.l,P-a.y-a.bottom),a.o),I=a.height!==y);(H||I)&&a.resize();G&&
(a.max&&(a.x=(q<K/3?a.left:q>K/3*2?K-a.width-a.right:K/2-a.width/2)+r),a.x=Math.max(Math.min(a.x,a.j?K-30:K-a.width-a.right),a.j?30-a.width:a.left),G=a.x!==z);D&&(a.max&&(a.y=a.top+w),a.y=Math.max(Math.min(a.y,a.j?P-a.h:P-a.height-a.bottom),a.top),D=a.y!==ea);if(G||D)a.max&&a.restore(),a.move();if(H||G)v=q;if(I||D)L=g}function d(g){t(g);B.classList.remove("wb-lock");p?(l("touchmove",f),l("touchend",d)):(l("mousemove",f),l("mouseup",d))}var n=a.g.getElementsByClassName("wb-"+b)[0];if(n){var p,v,L,
Q=0;k(n,"mousedown",c,ca);k(n,"touchstart",c,ca)}}function na(){var a=document.documentElement;K=a.clientWidth;P=a.clientHeight}e=U.prototype;e.mount=function(a){this.unmount();a.i||(a.i=a.parentNode);this.body.textContent="";this.body.appendChild(a);return this};e.unmount=function(a){var b=this.body.firstChild;if(b){var c=a||b.i;c&&c.appendChild(b);b.i=a}return this};
e.setTitle=function(a){var b=this.g.getElementsByClassName("wb-title")[0];a=this.title=a;var c=b.firstChild;c?c.nodeValue=a:b.textContent=a;return this};e.setIcon=function(a){var b=this.g.getElementsByClassName("wb-icon")[0];u(b,"background-image","url("+a+")");u(b,"display","inline-block");return this};e.setBackground=function(a){u(this.g,"background",a);return this};
e.setUrl=function(a,b){var c=this.body.firstChild;c&&"iframe"===c.tagName.toLowerCase()?c.src=a:(this.body.innerHTML='<iframe src="'+a+'"></iframe>',b&&(this.body.firstChild.onload=b));return this};e.focus=function(a){if(!1===a)return this.blur();if(!this.focused){a=A.length;if(1<a)for(var b=1;b<=a;b++){var c=A[a-b];if(c.focused){c.blur();A.push(A.splice(A.indexOf(this),1)[0]);break}}u(this.g,"z-index",++E);this.index=E;this.addClass("focus");this.focused=!0;this.onfocus&&this.onfocus()}return this};
e.blur=function(a){if(!1===a)return this.focus();this.focused&&(this.removeClass("focus"),this.focused=!1,this.onblur&&this.onblur());return this};e.hide=function(a){if(!1===a)return this.show();if(!this.hidden)return this.onhide&&this.onhide(),this.hidden=!0,this.addClass("hide")};e.show=function(a){if(!1===a)return this.hide();if(this.hidden)return this.onshow&&this.onshow(),this.hidden=!1,this.removeClass("hide")};
e.minimize=function(a){if(!1===a)return this.restore();F&&qa();this.max&&(this.removeClass("max"),this.max=!1);this.min||(x.push(this),oa(),this.g.title=this.title,this.addClass("min"),this.min=!0,this.focused&&(this.blur(),Da()),this.onminimize&&this.onminimize());return this};function Da(){var a=A.length;if(a)for(--a;0<=a;a--){var b=A[a];if(!b.min){b.focus();break}}}
e.restore=function(){F&&qa();this.min&&(pa(this),this.resize().move(),this.onrestore&&this.onrestore());this.max&&(this.max=!1,this.removeClass("max").resize().move(),this.onrestore&&this.onrestore());return this};e.maximize=function(a){if(!1===a)return this.restore();F&&qa();this.min&&pa(this);this.max||(this.addClass("max").resize(K-this.left-this.right,P-this.top-this.bottom,!0).move(this.left,this.top,!0),this.max=!0,this.onmaximize&&this.onmaximize());return this};
e.fullscreen=function(a){this.min&&(pa(this),this.resize().move());if(!F||!qa())this.body[J](),F=this,this.full=!0,this.onfullscreen&&this.onfullscreen();else if(!1===a)return this.restore();return this};function qa(){F.full=!1;if(document.fullscreen||document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement)return document[ha](),!0}
e.close=function(a){if(this.onclose&&this.onclose(a))return!0;this.min&&pa(this);A.splice(A.indexOf(this),1);this.unmount();this.g.remove();this.g.textContent="";this.g=this.body=this.g.winbox=null;this.focused&&Da()};e.move=function(a,b,c){a||0===a?c||(this.x=a?a=V(a,K-this.left-this.right,this.width):0,this.y=b?b=V(b,P-this.top-this.bottom,this.height):0):(a=this.x,b=this.y);u(this.g,"left",a+"px");u(this.g,"top",b+"px");this.onmove&&this.onmove(a,b);return this};
e.resize=function(a,b,c){a||0===a?c||(this.width=a?a=V(a,this.m):0,this.height=b?b=V(b,this.l):0,a=Math.max(a,this.s),b=Math.max(b,this.o)):(a=this.width,b=this.height);u(this.g,"width",a+"px");u(this.g,"height",b+"px");this.onresize&&this.onresize(a,b);return this};
e.addControl=function(a){var b=a["class"],c=a.image,f=a.click;a=a.index;var d=document.createElement("span"),n=this.g.getElementsByClassName("wb-control")[0],p=this;b&&(d.className=b);c&&u(d,"background-image","url("+c+")");f&&(d.onclick=function(v){f.call(this,v,p)});n.insertBefore(d,n.childNodes[a||0]);return this};e.removeControl=function(a){(a=this.g.getElementsByClassName(a)[0])&&a.remove();return this};e.addClass=function(a){this.g.classList.add(a);return this};
e.removeClass=function(a){this.g.classList.remove(a);return this};e.toggleClass=function(a){return this.g.classList.contains(a)?this.removeClass(a):this.addClass(a)};window.WinBox=U;}).call(this);

// 存数据
// name：命名 data：数据
function saveData(name, data) {
    localStorage.setItem(name, JSON.stringify({ 'time': Date.now(), 'data': data }))
}

// 取数据
// name：命名 time：过期时长,单位分钟,如传入30,即加载数据时如果超出30分钟返回0,否则返回数据
function loadData(name, time) {
    let data = JSON.parse(localStorage.getItem(name));
    // 过期或有错误返回 0
    if (data != null && 0 < Date.now() - data.time < time * 60 * 1000) return data.data;
    // 没过期返回数据
    else return 0;
}

// 上面两个函数如果你有其他需要存取数据的功能，也可以直接使用

// 读取背景
try {
    let data = loadData('blogbg', 1440)
    if (data) changeBg(data, 1)
    else localStorage.removeItem('blogbg');
} catch (error) { localStorage.removeItem('blogbg'); }

// 切换背景函数
// 此处的flag是为了每次读取时都重新存储一次,导致过期时间不稳定
// 如果flag为0则存储,即设置背景. 为1则不存储,即每次加载自动读取背景.
function changeBg(s, flag) {
    let bg = document.getElementById('web_bg')
    let bg2 = document.getElementById('svg_bg')
    bg2.style.backgroundImage = 'none'
    if (s.charAt(0) == '#') {
        bg.style.backgroundColor = s
        bg.style.backgroundImage = 'none'
    } else{
        bg.style.backgroundImage = s
    }
    if (!flag) { 
        saveData('blogbg', s) 
        btf.snackbarShow("切换背景成功")
    }
}

// 以下为2.0新增内容

// 创建窗口
var winbox = '';
function resizeWinbox(){
    if(document.querySelector('.winbox').classList.contains('focus')){
        winResize();
    }
}
window.removeEventListener('resize', window.winBoxResize);
window.winBoxResize = btf.throttle(resizeWinbox, 50);
function createWinbox() {
    winbox = WinBox({
        id: 'changeBgBox',
        index: 2000,
        title: "切换背景",
        x: "center",
        y: "center",
        minwidth: '300px',
        height: "60%",
        background: 'var(--leonus-blue)'
    });
    winResize();
    
    window.addEventListener('resize', window.winBoxResize);

    // 每一类我放了一个演示，直接往下复制粘贴 a标签 就可以，需要注意的是 函数里面的链接 冒号前面需要添加反斜杠\进行转义
    winbox.body.innerHTML = `
    <div id="article-container" style="padding:10px;">
    
    <p><button onclick="localStorage.removeItem('blogbg');location.reload();" style="background:#5FCDFFC8;display:block;width:100%;padding: 15px 0;border-radius:6px;color:white;"><i class="fa-solid fa-arrows-rotate"></i> 点我恢复默认背景</button></p>
    <h2 id="图片（电脑）"><a href="#图片（电脑）" class="headerlink" title="图片（电脑）"></a>图片（电脑）</h2>
    <div class="bgbox">
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://cdn.qcqx.cn/img/img1.webp)" class="imgbox" onclick="changeBg('url(https://cdn.qcqx.cn/img/img1.webp)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://cdn.qcqx.cn/img/img2.webp)" class="imgbox" onclick="changeBg('url(https://cdn.qcqx.cn/img/img2.webp)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://cdn.qcqx.cn/img/img3.webp)" class="imgbox" onclick="changeBg('url(https://cdn.qcqx.cn/img/img3.webp)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://cdn.qcqx.cn/img/img4.webp)" class="imgbox" onclick="changeBg('url(https://cdn.qcqx.cn/img/img4.webp)')"></a>
    </div>
     
    <h2 id="渐变色"><a href="#渐变色" class="headerlink" title="渐变色"></a>渐变色</h2>
    <div class="bgbox">
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(55deg, #0095c2 21%, #64E1C8 100%)" onclick="changeBg('linear-gradient(55deg, #0095c2 21%, #64E1C8 100%)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(90deg, #ffd7e4 0%, #c8f1ff 100%)" onclick="changeBg('linear-gradient(90deg, #ffd7e4 0%, #c8f1ff 100%)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(45deg, #e5737b, #c6999e, #96b9c2, #00d6e8)" onclick="changeBg('linear-gradient(45deg, #e5737b, #c6999e, #96b9c2, #00d6e8)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(25deg, #31354b, #38536c, #3b738e, #3995b2)" onclick="changeBg('linear-gradient(25deg, #31354b, #38536c, #3b738e, #3995b2)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(26deg, #0e6183, #387ea6, #599dcb, #7abdf1)" onclick="changeBg('linear-gradient(26deg, #0e6183, #387ea6, #599dcb, #7abdf1)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(25deg, #0583bf, #159bc5, #16b4cb, #0aced0)" onclick="changeBg('linear-gradient(25deg, #0583bf, #159bc5, #16b4cb, #0aced0)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(25deg, #3e47d1, #8b5fb8, #ba7b9d, #df9980)" onclick="changeBg('linear-gradient(25deg, #3e47d1, #8b5fb8, #ba7b9d, #df9980)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(25deg, #0e5c71, #15828f, #19a9ae, #1ad3ce)" onclick="changeBg('linear-gradient(25deg, #0e5c71, #15828f, #19a9ae, #1ad3ce)')"></a>
    </div>
    
    <h2 id="纯色"><a href="#纯色" class="headerlink" title="纯色"></a>纯色</h2>
    <div class="bgbox">
    <a href="javascript:;" title = "白" rel="noopener external nofollow" class="box" style="background: #f7f9fe" onclick="changeBg('#f7f9fe')"></a> 
    <a href="javascript:;" title = "黑" rel="noopener external nofollow" class="box" style="background: #30303c" onclick="changeBg('#30303c')"></a> 
    <a href="javascript:;" title = "锌灰" rel="noopener external nofollow" class="box" style="background: #7a7374" onclick="changeBg('#7a7374')"></a> 
    <a href="javascript:;" title = "晶红" rel="noopener external nofollow" class="box" style="background: #eea6b7" onclick="changeBg('#eea6b7')"></a> 
    <a href="javascript:;" title = "银灰" rel="noopener external nofollow" class="box" style="background: #918072" onclick="changeBg('#918072')"></a> 
    <a href="javascript:;" title = "荷花白" rel="noopener external nofollow" class="box" style="background: #fbecde" onclick="changeBg('#fbecde')"></a> 
    <a href="javascript:;" title = "冰山蓝" rel="noopener external nofollow" class="box" style="background: #a4aca7" onclick="changeBg('#a4aca7')"></a> 
    <a href="javascript:;" title = "玉簪绿" rel="noopener external nofollow" class="box" style="background: #a4cab6" onclick="changeBg('#a4cab6')"></a> 
    <a href="javascript:;" title = "松霜绿" rel="noopener external nofollow" class="box" style="background: #83a78d" onclick="changeBg('#83a78d')"></a> 
    <a href="javascript:;" title = "淡绿灰" rel="noopener external nofollow" class="box" style="background: #70887d" onclick="changeBg('#70887d')"></a> 
    <a href="javascript:;" title = "石绿" rel="noopener external nofollow" class="box" style="background: #57c3c2" onclick="changeBg('#57c3c2')"></a> 
    <a href="javascript:;" title = "甸子蓝" rel="noopener external nofollow" class="box" style="background: #10aec2" onclick="changeBg('#10aec2')"></a> 
    <a href="javascript:;" title = "清水蓝" rel="noopener external nofollow" class="box" style="background: #93d5dc" onclick="changeBg('#93d5dc')"></a> 
    <a href="javascript:;" title = "蜻蜓蓝" rel="noopener external nofollow" class="box" style="background: #3b818c" onclick="changeBg('#3b818c')"></a> 
    <a href="javascript:;" title = "碧青" rel="noopener external nofollow" class="box" style="background: #5cb3cc" onclick="changeBg('#5cb3cc')"></a> 
    <a href="javascript:;" title = "星蓝" rel="noopener external nofollow" class="box" style="background: #93b5cf" onclick="changeBg('#93b5cf')"></a> 
    </div>
`;
}

// 适应窗口大小
function winResize() {
    var offsetWid = document.documentElement.clientWidth;
    if (offsetWid <= 768) {
        winbox.resize(offsetWid * 0.95 + "px", "70%").move("center", "center");
    } else {
        winbox.resize(offsetWid * 0.6 + "px", "70%").move("center", "center");
    }
}

// 切换状态，窗口已创建则控制窗口显示和隐藏，没窗口则创建窗口
function toggleWinbox() {
    if (document.querySelector('#changeBgBox')) winbox.toggleClass('hide');
    else createWinbox();
}
// function CDchuckle() {
// var avatarImg = $(".is-center .avatar-img img");
// var avatarImgBox = $(".is-center .avatar-img");
// var avatarImgChange = 0;
// var caidan = 0;
// var timeout; 
// avatarImgBox.mousedown(function() { 
//     timeout = setTimeout(function() { 
//         btf.snackbarShow("彩蛋启动成功");
//         caidan = 1;
//     },2000);
// }); 
// avatarImgBox.mouseup(function() { 
//     clearTimeout(timeout); 
// }); 
// avatarImgBox.mouseout(function() { 
//     clearTimeout(timeout); 
// }); 
// avatarImgBox.click(function () {
//     if(caidan == 1){
//     avatarImgChange++;
//     if(avatarImgChange<5&&avatarImgChange>1){
//         btf.snackbarShow("别戳啦！再戳会坏掉的");
//         return;
//     }
//     switch (avatarImgChange) {
//         case (5):
//             if(avatarImgChange==5){
//                 btf.snackbarShow("戳坏掉惹~");
//             }
//             avatarImg.attr("src", "https://cdn.qcqx.cn/img/sesehead1.webp");
//             break;
//         case (9):
//             avatarImg.attr("src", "https://cdn.qcqx.cn/img/sesehead2.webp");
//             break;
//         case (13):
//             avatarImg.attr("src", "https://cdn.qcqx.cn/img/sesehead3.webp");
//             break;
//         case (17):
//             avatarImg.attr("src", "https://cdn.qcqx.cn/img/sesehead4.webp");
//             break;
//         case (21):
//             btf.snackbarShow("复原！");
//             avatarImg.attr("src", "https://cdn.qcqx.cn/img/head.webp");
//             avatarImgChange = 0;
//             caidan = 1;
//             break;
//     }
// }
// });
// }

// let newYearTimer = null;
// var newYear = () => {
//     clearTimeout(newYearTimer);
//     if (!document.querySelector('#newYear')) return;
//     let newYear = new Date('2023-01-22 00:00:00').getTime() / 1000,
//         week = { 0: '周日', 1: '周一', 2: '周二', 3: '周三', 4: '周四', 5: '周五', 6: '周六' }

//     time();

//     function nol(h) { return h > 9 ? h : '0' + h; };

//     function time() {
//         let now = new Date();

//         document.querySelector('#newYear .today').innerHTML = now.getFullYear() + '-' + (now.getMonth() + 1) + '-' + now.getDate() + ' ' + week[now.getDay()]

//         let second = newYear - Math.round(now.getTime() / 1000);

//         if (second < 0) {
//             document.querySelector('#newYear .title').innerHTML = 'Happy New Year!';
//             document.querySelector('#newYear .newYear-time').innerHTML = '<span class="happyNewYear">新年快乐</p>';
//         } else {
//             document.querySelector('#newYear .title').innerHTML = '距离2023年春节：'

//             if (second > 86400) {
//                 document.querySelector('#newYear .newYear-time').innerHTML = `<span class="day">${Math.ceil(second / 86400)}<span class="unit">天</span></span>`
//             } else {
//                 let h = nol(parseInt(second / 3600));
//                 second %= 3600;
//                 let m = nol(parseInt(second / 60));
//                 second %= 60;
//                 let s = nol(second);
//                 document.querySelector('#newYear .newYear-time').innerHTML = `<span class="time">${h}:${m}:${s}</span></span>`;
//                 newYearTimer = setTimeout(time, 1000);
//             }
//         }
//     }

//     jQuery(document).ready(function($) {
//         $('#newYear').wpSuperSnow({
//             totalFlakes: '100',
//             zIndex: '999999',
//             maxSize: '30',
//             maxDuration: '20',
//             useFlakeTrans: false
//         });
//     });
// }
// if(! (navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))){
//     CDchuckle();
//     // newYear();
//     document.addEventListener('pjax:complete', (e) => {
//         CDchuckle();
//     })
// }
// document.addEventListener('pjax:complete', (e) => {
//     if(document.getElementById("categories-chart")){
//         categoriesChart1()
//     }
//     if(document.getElementById("tags-chart")){
//         tagsChart1()
//     }
//     if(document.getElementById("posts-chart")){
//         postsChart1();
//     }
// })
function catalogActive () {
    let $list = document.getElementById('catalog-list')
    if ($list) {
      // 鼠标滚轮滚动
      $list.addEventListener('mousewheel', function (e) {
        // 计算鼠标滚轮滚动的距离
        $list.scrollLeft -= e.wheelDelta / 2
        // 阻止浏览器默认方法
        e.preventDefault()
      }, false)
  
      // 高亮当前页面对应的分类或标签
      let $catalog = document.getElementById(decodeURIComponent(window.location.pathname))
      if($catalog){
        $catalog.classList.add('selected')
        // 滚动当前页面对应的分类或标签到中部
        $list.scrollLeft = ($catalog.offsetLeft - $list.offsetLeft) - ($list.offsetWidth - $catalog.offsetWidth) / 2
      }
    }
  }
  catalogActive ();
const aplayer = document.querySelector('.aplayer.no-destroy');
function removelrc() {
    const contactInfoElement = document.querySelector('.contact-info');
    if (!contactInfoElement || window.getComputedStyle(contactInfoElement).getPropertyValue('display') === 'none' || !document.querySelector(".aplayer-icon-lrc")) {
      return;
    } else {
      observer.disconnect();
        document.querySelector(".aplayer-icon-lrc").click();
        observer = null;
      return;
    }
  }
  
  let observer = new MutationObserver(function (mutationsList) {
    for (let mutation of mutationsList) {
      if (mutation.type === 'childList') {
        removelrc();
      }
    }
  });
  
  observer.observe(aplayer, { childList: true });
  