var e=function(){return e=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},e.apply(this,arguments)};function n(e,t,n,r){return new(n||(n=Promise))((function(o,a){function i(e){try{u(r.next(e))}catch(e){a(e)}}function c(e){try{u(r.throw(e))}catch(e){a(e)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,c)}u((r=r.apply(e,t||[])).next())}))}function t(e,t){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(c){return function(u){return function(c){if(n)throw new TypeError("Generator is already executing.");for(;a&&(a=0,c[0]&&(i=0)),i;)try{if(n=1,r&&(o=2&c[0]?r.return:c[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,c[1])).done)return o;switch(r=0,o&&(c=[2&c[0],o.value]),c[0]){case 0:case 1:o=c;break;case 4:return i.label++,{value:c[1],done:!1};case 5:i.label++,r=c[1],c=[0];continue;case 7:c=i.ops.pop(),i.trys.pop();continue;default:if(!((o=(o=i.trys).length>0&&o[o.length-1])||6!==c[0]&&2!==c[0])){i=0;continue}if(3===c[0]&&(!o||c[1]>o[0]&&c[1]<o[3])){i.label=c[1];break}if(6===c[0]&&i.label<o[1]){i.label=o[1],o=c;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(c);break}o[2]&&i.ops.pop(),i.trys.pop();continue}c=t.call(e,i)}catch(e){c=[6,e],r=0}finally{n=o=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,u])}}}function r(e,t,n){if(n||2===arguments.length)for(var r,o=0,a=t.length;o<a;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))}function o(e,t){return new Promise((function(n){return setTimeout(n,e,t)}))}function a(){return o(0)}function i(e){return!!e&&"function"==typeof e.then}function c(e,t){try{var n=e();i(n)?n.then((function(e){return t(!0,e)}),(function(e){return t(!1,e)})):t(!0,n)}catch(e){t(!1,e)}}function u(e,r,a){return void 0===a&&(a=16),n(this,void 0,void 0,(function(){var n,i,c,u;return t(this,(function(t){switch(t.label){case 0:n=Array(e.length),i=Date.now(),c=0,t.label=1;case 1:return c<e.length?(n[c]=r(e[c],c),(u=Date.now())>=i+a?(i=u,[4,o(0)]):[3,3]):[3,4];case 2:t.sent(),t.label=3;case 3:return++c,[3,1];case 4:return[2,n]}}))}))}function l(e){e.then(void 0,(function(){}))}function s(e,t){e=[e[0]>>>16,65535&e[0],e[1]>>>16,65535&e[1]],t=[t[0]>>>16,65535&t[0],t[1]>>>16,65535&t[1]];var n=[0,0,0,0];return n[3]+=e[3]+t[3],n[2]+=n[3]>>>16,n[3]&=65535,n[2]+=e[2]+t[2],n[1]+=n[2]>>>16,n[2]&=65535,n[1]+=e[1]+t[1],n[0]+=n[1]>>>16,n[1]&=65535,n[0]+=e[0]+t[0],n[0]&=65535,[n[0]<<16|n[1],n[2]<<16|n[3]]}function d(e,t){e=[e[0]>>>16,65535&e[0],e[1]>>>16,65535&e[1]],t=[t[0]>>>16,65535&t[0],t[1]>>>16,65535&t[1]];var n=[0,0,0,0];return n[3]+=e[3]*t[3],n[2]+=n[3]>>>16,n[3]&=65535,n[2]+=e[2]*t[3],n[1]+=n[2]>>>16,n[2]&=65535,n[2]+=e[3]*t[2],n[1]+=n[2]>>>16,n[2]&=65535,n[1]+=e[1]*t[3],n[0]+=n[1]>>>16,n[1]&=65535,n[1]+=e[2]*t[2],n[0]+=n[1]>>>16,n[1]&=65535,n[1]+=e[3]*t[1],n[0]+=n[1]>>>16,n[1]&=65535,n[0]+=e[0]*t[3]+e[1]*t[2]+e[2]*t[1]+e[3]*t[0],n[0]&=65535,[n[0]<<16|n[1],n[2]<<16|n[3]]}function f(e,t){return 32==(t%=64)?[e[1],e[0]]:t<32?[e[0]<<t|e[1]>>>32-t,e[1]<<t|e[0]>>>32-t]:(t-=32,[e[1]<<t|e[0]>>>32-t,e[0]<<t|e[1]>>>32-t])}function m(e,t){return 0==(t%=64)?e:t<32?[e[0]<<t|e[1]>>>32-t,e[1]<<t]:[e[1]<<t-32,0]}function v(e,t){return[e[0]^t[0],e[1]^t[1]]}function h(e){return e=v(e,[0,e[0]>>>1]),e=v(e=d(e,[4283543511,3981806797]),[0,e[0]>>>1]),v(e=d(e,[3301882366,444984403]),[0,e[0]>>>1])}function p(e,t){t=t||0;var n,r=(e=e||"").length%16,o=e.length-r,a=[0,t],i=[0,t],c=[0,0],u=[0,0],l=[2277735313,289559509],p=[1291169091,658871167];for(n=0;n<o;n+=16)c=[255&e.charCodeAt(n+4)|(255&e.charCodeAt(n+5))<<8|(255&e.charCodeAt(n+6))<<16|(255&e.charCodeAt(n+7))<<24,255&e.charCodeAt(n)|(255&e.charCodeAt(n+1))<<8|(255&e.charCodeAt(n+2))<<16|(255&e.charCodeAt(n+3))<<24],u=[255&e.charCodeAt(n+12)|(255&e.charCodeAt(n+13))<<8|(255&e.charCodeAt(n+14))<<16|(255&e.charCodeAt(n+15))<<24,255&e.charCodeAt(n+8)|(255&e.charCodeAt(n+9))<<8|(255&e.charCodeAt(n+10))<<16|(255&e.charCodeAt(n+11))<<24],c=f(c=d(c,l),31),a=s(a=f(a=v(a,c=d(c,p)),27),i),a=s(d(a,[0,5]),[0,1390208809]),u=f(u=d(u,p),33),i=s(i=f(i=v(i,u=d(u,l)),31),a),i=s(d(i,[0,5]),[0,944331445]);switch(c=[0,0],u=[0,0],r){case 15:u=v(u,m([0,e.charCodeAt(n+14)],48));case 14:u=v(u,m([0,e.charCodeAt(n+13)],40));case 13:u=v(u,m([0,e.charCodeAt(n+12)],32));case 12:u=v(u,m([0,e.charCodeAt(n+11)],24));case 11:u=v(u,m([0,e.charCodeAt(n+10)],16));case 10:u=v(u,m([0,e.charCodeAt(n+9)],8));case 9:u=d(u=v(u,[0,e.charCodeAt(n+8)]),p),i=v(i,u=d(u=f(u,33),l));case 8:c=v(c,m([0,e.charCodeAt(n+7)],56));case 7:c=v(c,m([0,e.charCodeAt(n+6)],48));case 6:c=v(c,m([0,e.charCodeAt(n+5)],40));case 5:c=v(c,m([0,e.charCodeAt(n+4)],32));case 4:c=v(c,m([0,e.charCodeAt(n+3)],24));case 3:c=v(c,m([0,e.charCodeAt(n+2)],16));case 2:c=v(c,m([0,e.charCodeAt(n+1)],8));case 1:c=d(c=v(c,[0,e.charCodeAt(n)]),l),a=v(a,c=d(c=f(c,31),p))}return a=s(a=v(a,[0,e.length]),i=v(i,[0,e.length])),i=s(i,a),a=s(a=h(a),i=h(i)),i=s(i,a),("00000000"+(a[0]>>>0).toString(16)).slice(-8)+("00000000"+(a[1]>>>0).toString(16)).slice(-8)+("00000000"+(i[0]>>>0).toString(16)).slice(-8)+("00000000"+(i[1]>>>0).toString(16)).slice(-8)}function b(e){return parseInt(e)}function y(e){return parseFloat(e)}function g(e,t){return"number"==typeof e&&isNaN(e)?t:e}function w(e){return e.reduce((function(e,t){return e+(t?1:0)}),0)}function L(e,t){if(void 0===t&&(t=1),Math.abs(t)>=1)return Math.round(e/t)*t;var n=1/t;return Math.round(e*n)/n}function k(e){return"function"!=typeof e}function V(e,r,o){var a=Object.keys(e).filter((function(e){return!function(e,t){for(var n=0,r=e.length;n<r;++n)if(e[n]===t)return!0;return!1}(o,e)})),i=u(a,(function(t){return function(e,t){var n=new Promise((function(n){var r=Date.now();c(e.bind(null,t),(function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var o=Date.now()-r;if(!e[0])return n((function(){return{error:e[1],duration:o}}));var a=e[1];if(k(a))return n((function(){return{value:a,duration:o}}));n((function(){return new Promise((function(e){var t=Date.now();c(a,(function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var a=o+Date.now()-t;if(!n[0])return e({error:n[1],duration:a});e({value:n[1],duration:a})}))}))}))}))}));return l(n),function(){return n.then((function(e){return e()}))}}(e[t],r)}));return l(i),function(){return n(this,void 0,void 0,(function(){var e,n,r,o;return t(this,(function(t){switch(t.label){case 0:return[4,i];case 1:return[4,u(t.sent(),(function(e){var t=e();return l(t),t}))];case 2:return e=t.sent(),[4,Promise.all(e)];case 3:for(n=t.sent(),r={},o=0;o<a.length;++o)r[a[o]]=n[o];return[2,r]}}))}))}}function S(e,t){var n=function(e){return k(e)?t(e):function(){var n=e();return i(n)?n.then(t):t(n)}};return function(t){var r=e(t);return i(r)?r.then(n):n(r)}}function W(){var e=window,t=navigator;return w(["MSCSSMatrix"in e,"msSetImmediate"in e,"msIndexedDB"in e,"msMaxTouchPoints"in t,"msPointerEnabled"in t])>=4}function Z(){var e=window,t=navigator;return w(["msWriteProfilerMark"in e,"MSStream"in e,"msLaunchUri"in t,"msSaveBlob"in t])>=3&&!W()}function x(){var e=window,t=navigator;return w(["webkitPersistentStorage"in t,"webkitTemporaryStorage"in t,0===t.vendor.indexOf("Google"),"webkitResolveLocalFileSystemURL"in e,"BatteryManager"in e,"webkitMediaStream"in e,"webkitSpeechGrammar"in e])>=5}function C(){var e=window,t=navigator;return w(["ApplePayError"in e,"CSSPrimitiveValue"in e,"Counter"in e,0===t.vendor.indexOf("Apple"),"getStorageUpdates"in t,"WebKitMediaKeys"in e])>=4}function M(){var e=window;return w(["safari"in e,!("ongestureend"in e),!("TouchEvent"in e),!("orientation"in e),"HTMLElement"in e&&!("autocapitalize"in HTMLElement.prototype),"Document"in e&&"pointerLockElement"in Document.prototype])>=4}function A(){var e,t,n=window;return w(["buildID"in navigator,"MozAppearance"in(null!==(t=null===(e=document.documentElement)||void 0===e?void 0:e.style)&&void 0!==t?t:{}),"onmozfullscreenchange"in n,"mozInnerScreenX"in n,"CSSMozDocumentRule"in n,"CanvasCaptureMediaStream"in n])>=4}function R(){var e=document;return e.fullscreenElement||e.msFullscreenElement||e.mozFullScreenElement||e.webkitFullscreenElement||null}function G(){var e=x(),t=A();if(!e&&!t)return!1;var n=window;return w(["onorientationchange"in n,"orientation"in n,e&&!("SharedWorker"in n),t&&/android/i.test(navigator.appVersion)])>=2}function F(e){var t=new Error(e);return t.name=e,t}function I(e,r,a){var i,c,u;return void 0===a&&(a=50),n(this,void 0,void 0,(function(){var n,s;return t(this,(function(t){switch(t.label){case 0:n=document,t.label=1;case 1:return n.body?[3,3]:[4,o(a)];case 2:return t.sent(),[3,1];case 3:s=n.createElement("iframe"),t.label=4;case 4:return t.trys.push([4,,10,11]),[4,new Promise((function(e,t){var o=!1,a=function(){o=!0,e()};s.onload=a,s.onerror=function(e){o=!0,t(e)};var i=s.style;i.setProperty("display","block","important"),i.position="absolute",i.top="0",i.left="0",i.visibility="hidden",r&&"srcdoc"in s?s.srcdoc=r:s.src="about:blank",n.body.appendChild(s);var c=function(){var e,t;o||("complete"===(null===(t=null===(e=s.contentWindow)||void 0===e?void 0:e.document)||void 0===t?void 0:t.readyState)?a():setTimeout(c,10))};c()}))];case 5:t.sent(),t.label=6;case 6:return(null===(c=null===(i=s.contentWindow)||void 0===i?void 0:i.document)||void 0===c?void 0:c.body)?[3,8]:[4,o(a)];case 7:return t.sent(),[3,6];case 8:return[4,e(s,s.contentWindow)];case 9:return[2,t.sent()];case 10:return null===(u=s.parentNode)||void 0===u||u.removeChild(s),[7];case 11:return[2]}}))}))}function Y(e){for(var t=function(e){for(var t,n,r="Unexpected syntax '".concat(e,"'"),o=/^\s*([a-z-]*)(.*)$/i.exec(e),a=o[1]||void 0,i={},c=/([.:#][\w-]+|\[.+?\])/gi,u=function(e,t){i[e]=i[e]||[],i[e].push(t)};;){var s=c.exec(o[2]);if(!s)break;var l=s[0];switch(l[0]){case".":u("class",l.slice(1));break;case"#":u("id",l.slice(1));break;case"[":var d=/^\[([\w-]+)([~|^$*]?=("(.*?)"|([\w-]+)))?(\s+[is])?\]$/.exec(l);if(!d)throw new Error(r);u(d[1],null!==(n=null!==(t=d[4])&&void 0!==t?t:d[5])&&void 0!==n?n:"");break;default:throw new Error(r)}}return[a,i]}(e),n=t[0],r=t[1],o=document.createElement(null!=n?n:"div"),a=0,i=Object.keys(r);a<i.length;a++){var c=i[a],u=r[c].join(" ");"style"===c?X(o.style,u):o.setAttribute(c,u)}return o}function X(e,t){for(var n=0,r=t.split(";");n<r.length;n++){var o=r[n],a=/^\s*([\w-]+)\s*:\s*(.+?)(\s*!([\w-]+))?\s*$/.exec(o);if(a){var i=a[1],c=a[2],u=a[4];e.setProperty(i,c,u||"")}}}var H,N,j=["monospace","sans-serif","serif"],P=["sans-serif-thin","ARNO PRO","Agency FB","Arabic Typesetting","Arial Unicode MS","AvantGarde Bk BT","BankGothic Md BT","Batang","Bitstream Vera Sans Mono","Calibri","Century","Century Gothic","Clarendon","EUROSTILE","Franklin Gothic","Futura Bk BT","Futura Md BT","GOTHAM","Gill Sans","HELV","Haettenschweiler","Helvetica Neue","Humanst521 BT","Leelawadee","Letter Gothic","Levenim MT","Lucida Bright","Lucida Sans","Menlo","MS Mincho","MS Outlook","MS Reference Specialty","MS UI Gothic","MT Extra","MYRIAD PRO","Marlett","Meiryo UI","Microsoft Uighur","Minion Pro","Monotype Corsiva","PMingLiU","Pristina","SCRIPTINA","Segoe UI Light","Serifa","SimHei","Small Fonts","Staccato222 BT","TRAJAN PRO","Univers CE 55 Medium","Vrinda","ZWAdobeF"];function E(e){return e.toDataURL()}function J(){var e=this;return function(){if(void 0===N){var e=function(){var t=D();T(t)?N=setTimeout(e,2500):(H=t,N=void 0)};e()}}(),function(){return n(e,void 0,void 0,(function(){var e;return t(this,(function(t){switch(t.label){case 0:return T(e=D())?H?[2,r([],H,!0)]:R()?[4,(n=document,(n.exitFullscreen||n.msExitFullscreen||n.mozCancelFullScreen||n.webkitExitFullscreen).call(n))]:[3,2]:[3,2];case 1:t.sent(),e=D(),t.label=2;case 2:return T(e)||(H=e),[2,e]}var n}))}))}}function D(){var e=screen;return[g(y(e.availTop),null),g(y(e.width)-y(e.availWidth)-g(y(e.availLeft),0),null),g(y(e.height)-y(e.availHeight)-g(y(e.availTop),0),null),g(y(e.availLeft),null)]}function T(e){for(var t=0;t<4;++t)if(e[t])return!1;return!0}function _(e){var r;return n(this,void 0,void 0,(function(){var n,i,c,u,s,l,d;return t(this,(function(t){switch(t.label){case 0:for(n=document,i=n.createElement("div"),c=new Array(e.length),u={},z(i),d=0;d<e.length;++d)"DIALOG"===(s=Y(e[d])).tagName&&s.show(),z(l=n.createElement("div")),l.appendChild(s),i.appendChild(l),c[d]=s;t.label=1;case 1:return n.body?[3,3]:[4,o(50)];case 2:return t.sent(),[3,1];case 3:return n.body.appendChild(i),[4,a()];case 4:t.sent();try{for(d=0;d<e.length;++d)c[d].offsetParent||(u[e[d]]=!0)}finally{null===(r=i.parentNode)||void 0===r||r.removeChild(i)}return[2,u]}}))}))}function z(e){e.style.setProperty("visibility","hidden","important"),e.style.setProperty("display","block","important")}function B(e){return matchMedia("(inverted-colors: ".concat(e,")")).matches}function O(e){return matchMedia("(forced-colors: ".concat(e,")")).matches}function U(e){return matchMedia("(prefers-contrast: ".concat(e,")")).matches}function Q(e){return matchMedia("(prefers-reduced-motion: ".concat(e,")")).matches}function K(e){return matchMedia("(dynamic-range: ".concat(e,")")).matches}var q=Math,$=function(){return 0},ee={default:[],apple:[{font:"-apple-system-body"}],serif:[{fontFamily:"serif"}],sans:[{fontFamily:"sans-serif"}],mono:[{fontFamily:"monospace"}],min:[{fontSize:"1px"}],system:[{fontFamily:"system-ui"}]};function ne(e){if(e instanceof Error){if("InvalidAccessError"===e.name){if(/\bfrom\b.*\binsecure\b/i.test(e.message))return-2;if(/\bdifferent\b.*\borigin\b.*top.level\b.*\bframe\b/i.test(e.message))return-3}if("SecurityError"===e.name&&/\bthird.party iframes?.*\bnot.allowed\b/i.test(e.message))return-3}throw e}var te=new Set([10752,2849,2884,2885,2886,2928,2929,2930,2931,2932,2960,2961,2962,2963,2964,2965,2966,2967,2968,2978,3024,3042,3088,3089,3106,3107,32773,32777,32777,32823,32824,32936,32937,32938,32939,32968,32969,32970,32971,3317,33170,3333,3379,3386,33901,33902,34016,34024,34076,3408,3410,3411,3412,3413,3414,3415,34467,34816,34817,34818,34819,34877,34921,34930,35660,35661,35724,35738,35739,36003,36004,36005,36347,36348,36349,37440,37441,37443,7936,7937,7938]),re=new Set([34047,35723,36063,34852,34853,34854,34229,36392,36795,38449]),oe=["FRAGMENT_SHADER","VERTEX_SHADER"],ae=["LOW_FLOAT","MEDIUM_FLOAT","HIGH_FLOAT","LOW_INT","MEDIUM_INT","HIGH_INT"];function ie(e){if(e.webgl)return e.webgl.context;var t,n=document.createElement("canvas");n.addEventListener("webglCreateContextError",(function(){return t=void 0}));for(var r=0,o=["webgl","experimental-webgl"];r<o.length;r++){var a=o[r];try{t=n.getContext(a)}catch(e){}if(t)break}return e.webgl={context:t},t}function ce(e,t,n){var r=e.getShaderPrecisionFormat(e[t],e[n]);return r?[r.rangeMin,r.rangeMax,r.precision]:[]}function ue(e){return Object.keys(e.__proto__).filter(le)}function le(e){return"string"==typeof e&&!e.match(/[^A-Z0-9_x]/)}function se(){return A()}function de(e){return"function"==typeof e.getParameter}var fe={fonts:function(){var e=this;return I((function(r,o){var i=o.document;return n(e,void 0,void 0,(function(){var e,n,r,o,c,u,s,l,d,m,f;return t(this,(function(t){switch(t.label){case 0:return(e=i.body).style.fontSize="48px",(n=i.createElement("div")).style.setProperty("visibility","hidden","important"),r={},o={},c=function(e){var t=i.createElement("span"),r=t.style;return r.position="absolute",r.top="0",r.left="0",r.fontFamily=e,t.textContent="mmMwWLliI0O&1",n.appendChild(t),t},u=function(e,t){return c("'".concat(e,"',").concat(t))},s=function(){for(var e={},t=function(t){e[t]=j.map((function(e){return u(t,e)}))},n=0,r=P;n<r.length;n++)t(r[n]);return e},l=function(e){return j.some((function(t,n){return e[n].offsetWidth!==r[t]||e[n].offsetHeight!==o[t]}))},d=j.map(c),m=s(),e.appendChild(n),[4,a()];case 1:for(t.sent(),f=0;f<j.length;f++)r[j[f]]=d[f].offsetWidth,o[j[f]]=d[f].offsetHeight;return[2,P.filter((function(e){return l(m[e])}))]}}))}))}))},domBlockers:function(e){var r=(void 0===e?{}:e).debug;return n(this,void 0,void 0,(function(){var e,n,o,a,i;return t(this,(function(t){switch(t.label){case 0:return C()||G()?(c=atob,e={abpIndo:["#Iklan-Melayang","#Kolom-Iklan-728","#SidebarIklan-wrapper",'[title="ALIENBOLA" i]',c("I0JveC1CYW5uZXItYWRz")],abpvn:[".quangcao","#mobileCatfish",c("LmNsb3NlLWFkcw=="),'[id^="bn_bottom_fixed_"]',"#pmadv"],adBlockFinland:[".mainostila",c("LnNwb25zb3JpdA=="),".ylamainos",c("YVtocmVmKj0iL2NsaWNrdGhyZ2guYXNwPyJd"),c("YVtocmVmXj0iaHR0cHM6Ly9hcHAucmVhZHBlYWsuY29tL2FkcyJd")],adBlockPersian:["#navbar_notice_50",".kadr",'TABLE[width="140px"]',"#divAgahi",c("YVtocmVmXj0iaHR0cDovL2cxLnYuZndtcm0ubmV0L2FkLyJd")],adBlockWarningRemoval:["#adblock-honeypot",".adblocker-root",".wp_adblock_detect",c("LmhlYWRlci1ibG9ja2VkLWFk"),c("I2FkX2Jsb2NrZXI=")],adGuardAnnoyances:[".hs-sosyal","#cookieconsentdiv",'div[class^="app_gdpr"]',".as-oil",'[data-cypress="soft-push-notification-modal"]'],adGuardBase:[".BetterJsPopOverlay",c("I2FkXzMwMFgyNTA="),c("I2Jhbm5lcmZsb2F0MjI="),c("I2NhbXBhaWduLWJhbm5lcg=="),c("I0FkLUNvbnRlbnQ=")],adGuardChinese:[c("LlppX2FkX2FfSA=="),c("YVtocmVmKj0iLmh0aGJldDM0LmNvbSJd"),"#widget-quan",c("YVtocmVmKj0iLzg0OTkyMDIwLnh5eiJd"),c("YVtocmVmKj0iLjE5NTZobC5jb20vIl0=")],adGuardFrench:["#pavePub",c("LmFkLWRlc2t0b3AtcmVjdGFuZ2xl"),".mobile_adhesion",".widgetadv",c("LmFkc19iYW4=")],adGuardGerman:['aside[data-portal-id="leaderboard"]'],adGuardJapanese:["#kauli_yad_1",c("YVtocmVmXj0iaHR0cDovL2FkMi50cmFmZmljZ2F0ZS5uZXQvIl0="),c("Ll9wb3BJbl9pbmZpbml0ZV9hZA=="),c("LmFkZ29vZ2xl"),c("Ll9faXNib29zdFJldHVybkFk")],adGuardMobile:[c("YW1wLWF1dG8tYWRz"),c("LmFtcF9hZA=="),'amp-embed[type="24smi"]',"#mgid_iframe1",c("I2FkX2ludmlld19hcmVh")],adGuardRussian:[c("YVtocmVmXj0iaHR0cHM6Ly9hZC5sZXRtZWFkcy5jb20vIl0="),c("LnJlY2xhbWE="),'div[id^="smi2adblock"]',c("ZGl2W2lkXj0iQWRGb3hfYmFubmVyXyJd"),"#psyduckpockeball"],adGuardSocial:[c("YVtocmVmXj0iLy93d3cuc3R1bWJsZXVwb24uY29tL3N1Ym1pdD91cmw9Il0="),c("YVtocmVmXj0iLy90ZWxlZ3JhbS5tZS9zaGFyZS91cmw/Il0="),".etsy-tweet","#inlineShare",".popup-social"],adGuardSpanishPortuguese:["#barraPublicidade","#Publicidade","#publiEspecial","#queTooltip",".cnt-publi"],adGuardTrackingProtection:["#qoo-counter",c("YVtocmVmXj0iaHR0cDovL2NsaWNrLmhvdGxvZy5ydS8iXQ=="),c("YVtocmVmXj0iaHR0cDovL2hpdGNvdW50ZXIucnUvdG9wL3N0YXQucGhwIl0="),c("YVtocmVmXj0iaHR0cDovL3RvcC5tYWlsLnJ1L2p1bXAiXQ=="),"#top100counter"],adGuardTurkish:["#backkapat",c("I3Jla2xhbWk="),c("YVtocmVmXj0iaHR0cDovL2Fkc2Vydi5vbnRlay5jb20udHIvIl0="),c("YVtocmVmXj0iaHR0cDovL2l6bGVuemkuY29tL2NhbXBhaWduLyJd"),c("YVtocmVmXj0iaHR0cDovL3d3dy5pbnN0YWxsYWRzLm5ldC8iXQ==")],bulgarian:[c("dGQjZnJlZW5ldF90YWJsZV9hZHM="),"#ea_intext_div",".lapni-pop-over","#xenium_hot_offers"],easyList:[".yb-floorad",c("LndpZGdldF9wb19hZHNfd2lkZ2V0"),c("LnRyYWZmaWNqdW5reS1hZA=="),".textad_headline",c("LnNwb25zb3JlZC10ZXh0LWxpbmtz")],easyListChina:[c("LmFwcGd1aWRlLXdyYXBbb25jbGljayo9ImJjZWJvcy5jb20iXQ=="),c("LmZyb250cGFnZUFkdk0="),"#taotaole","#aafoot.top_box",".cfa_popup"],easyListCookie:[".ezmob-footer",".cc-CookieWarning","[data-cookie-number]",c("LmF3LWNvb2tpZS1iYW5uZXI="),".sygnal24-gdpr-modal-wrap"],easyListCzechSlovak:["#onlajny-stickers",c("I3Jla2xhbW5pLWJveA=="),c("LnJla2xhbWEtbWVnYWJvYXJk"),".sklik",c("W2lkXj0ic2tsaWtSZWtsYW1hIl0=")],easyListDutch:[c("I2FkdmVydGVudGll"),c("I3ZpcEFkbWFya3RCYW5uZXJCbG9jaw=="),".adstekst",c("YVtocmVmXj0iaHR0cHM6Ly94bHR1YmUubmwvY2xpY2svIl0="),"#semilo-lrectangle"],easyListGermany:["#SSpotIMPopSlider",c("LnNwb25zb3JsaW5rZ3J1ZW4="),c("I3dlcmJ1bmdza3k="),c("I3Jla2xhbWUtcmVjaHRzLW1pdHRl"),c("YVtocmVmXj0iaHR0cHM6Ly9iZDc0Mi5jb20vIl0=")],easyListItaly:[c("LmJveF9hZHZfYW5udW5jaQ=="),".sb-box-pubbliredazionale",c("YVtocmVmXj0iaHR0cDovL2FmZmlsaWF6aW9uaWFkcy5zbmFpLml0LyJd"),c("YVtocmVmXj0iaHR0cHM6Ly9hZHNlcnZlci5odG1sLml0LyJd"),c("YVtocmVmXj0iaHR0cHM6Ly9hZmZpbGlhemlvbmlhZHMuc25haS5pdC8iXQ==")],easyListLithuania:[c("LnJla2xhbW9zX3RhcnBhcw=="),c("LnJla2xhbW9zX251b3JvZG9z"),c("aW1nW2FsdD0iUmVrbGFtaW5pcyBza3lkZWxpcyJd"),c("aW1nW2FsdD0iRGVkaWt1b3RpLmx0IHNlcnZlcmlhaSJd"),c("aW1nW2FsdD0iSG9zdGluZ2FzIFNlcnZlcmlhaS5sdCJd")],estonian:[c("QVtocmVmKj0iaHR0cDovL3BheTRyZXN1bHRzMjQuZXUiXQ==")],fanboyAnnoyances:["#ac-lre-player",".navigate-to-top","#subscribe_popup",".newsletter_holder","#back-top"],fanboyAntiFacebook:[".util-bar-module-firefly-visible"],fanboyEnhancedTrackers:[".open.pushModal","#issuem-leaky-paywall-articles-zero-remaining-nag","#sovrn_container",'div[class$="-hide"][zoompage-fontsize][style="display: block;"]',".BlockNag__Card"],fanboySocial:["#FollowUs","#meteored_share","#social_follow",".article-sharer",".community__social-desc"],frellwitSwedish:[c("YVtocmVmKj0iY2FzaW5vcHJvLnNlIl1bdGFyZ2V0PSJfYmxhbmsiXQ=="),c("YVtocmVmKj0iZG9rdG9yLXNlLm9uZWxpbmsubWUiXQ=="),"article.category-samarbete",c("ZGl2LmhvbGlkQWRz"),"ul.adsmodern"],greekAdBlock:[c("QVtocmVmKj0iYWRtYW4ub3RlbmV0LmdyL2NsaWNrPyJd"),c("QVtocmVmKj0iaHR0cDovL2F4aWFiYW5uZXJzLmV4b2R1cy5nci8iXQ=="),c("QVtocmVmKj0iaHR0cDovL2ludGVyYWN0aXZlLmZvcnRobmV0LmdyL2NsaWNrPyJd"),"DIV.agores300","TABLE.advright"],hungarian:["#cemp_doboz",".optimonk-iframe-container",c("LmFkX19tYWlu"),c("W2NsYXNzKj0iR29vZ2xlQWRzIl0="),"#hirdetesek_box"],iDontCareAboutCookies:['.alert-info[data-block-track*="CookieNotice"]',".ModuleTemplateCookieIndicator",".o--cookies--container","#cookies-policy-sticky","#stickyCookieBar"],icelandicAbp:[c("QVtocmVmXj0iL2ZyYW1ld29yay9yZXNvdXJjZXMvZm9ybXMvYWRzLmFzcHgiXQ==")],latvian:[c("YVtocmVmPSJodHRwOi8vd3d3LnNhbGlkemluaS5sdi8iXVtzdHlsZT0iZGlzcGxheTogYmxvY2s7IHdpZHRoOiAxMjBweDsgaGVpZ2h0OiA0MHB4OyBvdmVyZmxvdzogaGlkZGVuOyBwb3NpdGlvbjogcmVsYXRpdmU7Il0="),c("YVtocmVmPSJodHRwOi8vd3d3LnNhbGlkemluaS5sdi8iXVtzdHlsZT0iZGlzcGxheTogYmxvY2s7IHdpZHRoOiA4OHB4OyBoZWlnaHQ6IDMxcHg7IG92ZXJmbG93OiBoaWRkZW47IHBvc2l0aW9uOiByZWxhdGl2ZTsiXQ==")],listKr:[c("YVtocmVmKj0iLy9hZC5wbGFuYnBsdXMuY28ua3IvIl0="),c("I2xpdmVyZUFkV3JhcHBlcg=="),c("YVtocmVmKj0iLy9hZHYuaW1hZHJlcC5jby5rci8iXQ=="),c("aW5zLmZhc3R2aWV3LWFk"),".revenue_unit_item.dable"],listeAr:[c("LmdlbWluaUxCMUFk"),".right-and-left-sponsers",c("YVtocmVmKj0iLmFmbGFtLmluZm8iXQ=="),c("YVtocmVmKj0iYm9vcmFxLm9yZyJd"),c("YVtocmVmKj0iZHViaXp6bGUuY29tL2FyLz91dG1fc291cmNlPSJd")],listeFr:[c("YVtocmVmXj0iaHR0cDovL3Byb21vLnZhZG9yLmNvbS8iXQ=="),c("I2FkY29udGFpbmVyX3JlY2hlcmNoZQ=="),c("YVtocmVmKj0id2Vib3JhbWEuZnIvZmNnaS1iaW4vIl0="),".site-pub-interstitiel",'div[id^="crt-"][data-criteo-id]'],officialPolish:["#ceneo-placeholder-ceneo-12",c("W2hyZWZePSJodHRwczovL2FmZi5zZW5kaHViLnBsLyJd"),c("YVtocmVmXj0iaHR0cDovL2Fkdm1hbmFnZXIudGVjaGZ1bi5wbC9yZWRpcmVjdC8iXQ=="),c("YVtocmVmXj0iaHR0cDovL3d3dy50cml6ZXIucGwvP3V0bV9zb3VyY2UiXQ=="),c("ZGl2I3NrYXBpZWNfYWQ=")],ro:[c("YVtocmVmXj0iLy9hZmZ0cmsuYWx0ZXgucm8vQ291bnRlci9DbGljayJd"),c("YVtocmVmXj0iaHR0cHM6Ly9ibGFja2ZyaWRheXNhbGVzLnJvL3Ryay9zaG9wLyJd"),c("YVtocmVmXj0iaHR0cHM6Ly9ldmVudC4ycGVyZm9ybWFudC5jb20vZXZlbnRzL2NsaWNrIl0="),c("YVtocmVmXj0iaHR0cHM6Ly9sLnByb2ZpdHNoYXJlLnJvLyJd"),'a[href^="/url/"]'],ruAd:[c("YVtocmVmKj0iLy9mZWJyYXJlLnJ1LyJd"),c("YVtocmVmKj0iLy91dGltZy5ydS8iXQ=="),c("YVtocmVmKj0iOi8vY2hpa2lkaWtpLnJ1Il0="),"#pgeldiz",".yandex-rtb-block"],thaiAds:["a[href*=macau-uta-popup]",c("I2Fkcy1nb29nbGUtbWlkZGxlX3JlY3RhbmdsZS1ncm91cA=="),c("LmFkczMwMHM="),".bumq",".img-kosana"],webAnnoyancesUltralist:["#mod-social-share-2","#social-tools",c("LmN0cGwtZnVsbGJhbm5lcg=="),".zergnet-recommend",".yt.btn-link.btn-md.btn"]},n=Object.keys(e),[4,_((i=[]).concat.apply(i,n.map((function(t){return e[t]}))))]):[2,void 0];case 1:return o=t.sent(),r&&function(e,t){for(var n="DOM blockers debug:\n```",r=0,o=Object.keys(e);r<o.length;r++){var a=o[r];n+="\n".concat(a,":");for(var i=0,c=e[a];i<c.length;i++){var u=c[i];n+="\n  ".concat(t[u]?"🚫":"➡️"," ").concat(u)}}console.log("".concat(n,"\n```"))}(e,o),(a=n.filter((function(t){var n=e[t];return w(n.map((function(e){return o[e]})))>.6*n.length}))).sort(),[2,a]}var c}))}))},fontPreferences:function(){return function(e,t){return void 0===t&&(t=4e3),I((function(e,n){var o=n.document,a=o.body,i=a.style;i.width="".concat(t,"px"),i.webkitTextSizeAdjust=i.textSizeAdjust="none",x()?a.style.zoom="".concat(1/n.devicePixelRatio):C()&&(a.style.zoom="reset");var c=o.createElement("div");return c.textContent=r([],Array(t/20<<0),!0).map((function(){return"word"})).join(" "),a.appendChild(c),function(e,t){for(var n={},r={},o=0,a=Object.keys(ee);o<a.length;o++){var i=a[o],c=ee[i],u=c[0],s=void 0===u?{}:u,l=c[1],d=void 0===l?"mmMwWLliI0fiflO&1":l,m=e.createElement("span");m.textContent=d,m.style.whiteSpace="nowrap";for(var f=0,v=Object.keys(s);f<v.length;f++){var h=v[f],p=s[h];void 0!==p&&(m.style[h]=p)}n[i]=m,t.appendChild(e.createElement("br")),t.appendChild(m)}for(var b=0,y=Object.keys(ee);b<y.length;b++)r[i=y[b]]=n[i].getBoundingClientRect().width;return r}(o,a)}),'<!doctype html><html><head><meta name="viewport" content="width=device-width, initial-scale=1">')}()},audio:function(){var e=window,t=e.OfflineAudioContext||e.webkitOfflineAudioContext;if(!t)return-2;if(C()&&!M()&&!function(){var e=window;return w(["DOMRectList"in e,"RTCPeerConnectionIceEvent"in e,"SVGGeometryElement"in e,"ontransitioncancel"in e])>=3}())return-1;var n=new t(1,5e3,44100),r=n.createOscillator();r.type="triangle",r.frequency.value=1e4;var o=n.createDynamicsCompressor();o.threshold.value=-50,o.knee.value=40,o.ratio.value=12,o.attack.value=0,o.release.value=.25,r.connect(o),o.connect(n.destination),r.start(0);var a=function(e){var t=function(){};return[new Promise((function(n,r){var o=!1,a=0,c=0;e.oncomplete=function(e){return n(e.renderedBuffer)};var u=function(){setTimeout((function(){return r(F("timeout"))}),Math.min(500,c+5e3-Date.now()))},s=function(){try{var t=e.startRendering();switch(i(t)&&l(t),e.state){case"running":c=Date.now(),o&&u();break;case"suspended":document.hidden||a++,o&&a>=3?r(F("suspended")):setTimeout(s,500)}}catch(e){r(e)}};s(),t=function(){o||(o=!0,c>0&&u())}})),t]}(n),c=a[0],u=a[1],s=c.then((function(e){return function(e){for(var t=0,n=0;n<e.length;++n)t+=Math.abs(e[n]);return t}(e.getChannelData(0).subarray(4500))}),(function(e){if("timeout"===e.name||"suspended"===e.name)return-3;throw e}));return l(s),function(){return u(),s}},screenFrame:function(){var e=this,r=J();return function(){return n(e,void 0,void 0,(function(){var e,n;return t(this,(function(t){switch(t.label){case 0:return[4,r()];case 1:return e=t.sent(),[2,[(n=function(e){return null===e?null:L(e,10)})(e[0]),n(e[1]),n(e[2]),n(e[3])]]}}))}))}},canvas:function(){return n(this,void 0,void 0,(function(){var e,n,r,o,i,c,u,s;return t(this,(function(t){switch(t.label){case 0:return e=!1,o=function(){var e=document.createElement("canvas");return e.width=1,e.height=1,[e,e.getContext("2d")]}(),i=o[0],c=o[1],function(e,t){return!(!t||!e.toDataURL)}(i,c)?[3,1]:(n=r="unsupported",[3,5]);case 1:return e=function(e){return e.rect(0,0,10,10),e.rect(2,2,6,6),!e.isPointInPath(5,5,"evenodd")}(c),function(e,t){e.width=240,e.height=60,t.textBaseline="alphabetic",t.fillStyle="#f60",t.fillRect(100,1,62,20),t.fillStyle="#069",t.font='11pt "Times New Roman"';var n="Cwm fjordbank gly ".concat(String.fromCharCode(55357,56835));t.fillText(n,2,15),t.fillStyle="rgba(102, 204, 0, 0.2)",t.font="18pt Arial",t.fillText(n,4,45)}(i,c),[4,a()];case 2:return t.sent(),u=E(i),s=E(i),u===s?[3,3]:(n=r="unstable",[3,5]);case 3:return r=u,function(e,t){e.width=122,e.height=110,t.globalCompositeOperation="multiply";for(var n=0,r=[["#f2f",40,40],["#2ff",80,40],["#ff2",60,80]];n<r.length;n++){var o=r[n],a=o[0],i=o[1],c=o[2];t.fillStyle=a,t.beginPath(),t.arc(i,c,40,0,2*Math.PI,!0),t.closePath(),t.fill()}t.fillStyle="#f9c",t.arc(60,60,60,0,2*Math.PI,!0),t.arc(60,60,20,0,2*Math.PI,!0),t.fill("evenodd")}(i,c),[4,a()];case 4:t.sent(),n=E(i),t.label=5;case 5:return[2,{winding:e,geometry:n,text:r}]}}))}))},osCpu:function(){return navigator.oscpu},languages:function(){var e,t=navigator,n=[],r=t.language||t.userLanguage||t.browserLanguage||t.systemLanguage;if(void 0!==r&&n.push([r]),Array.isArray(t.languages))x()&&w([!("MediaSettingsRange"in(e=window)),"RTCEncodedAudioFrame"in e,""+e.Intl=="[object Intl]",""+e.Reflect=="[object Reflect]"])>=3||n.push(t.languages);else if("string"==typeof t.languages){var o=t.languages;o&&n.push(o.split(","))}return n},colorDepth:function(){return window.screen.colorDepth},deviceMemory:function(){return g(y(navigator.deviceMemory),void 0)},screenResolution:function(){var e=screen,t=function(e){return g(b(e),null)},n=[t(e.width),t(e.height)];return n.sort().reverse(),n},hardwareConcurrency:function(){return g(b(navigator.hardwareConcurrency),void 0)},timezone:function(){var e,t=null===(e=window.Intl)||void 0===e?void 0:e.DateTimeFormat;if(t){var n=(new t).resolvedOptions().timeZone;if(n)return n}var r,o=(r=(new Date).getFullYear(),-Math.max(y(new Date(r,0,1).getTimezoneOffset()),y(new Date(r,6,1).getTimezoneOffset())));return"UTC".concat(o>=0?"+":"").concat(Math.abs(o))},sessionStorage:function(){try{return!!window.sessionStorage}catch(e){return!0}},localStorage:function(){try{return!!window.localStorage}catch(e){return!0}},indexedDB:function(){if(!W()&&!Z())try{return!!window.indexedDB}catch(e){return!0}},openDatabase:function(){return!!window.openDatabase},cpuClass:function(){return navigator.cpuClass},platform:function(){var e=navigator.platform;return"MacIntel"===e&&C()&&!M()?function(){if("iPad"===navigator.platform)return!0;var e=screen,t=e.width/e.height;return w(["MediaSource"in window,!!Element.prototype.webkitRequestFullscreen,t>.65&&t<1.53])>=2}()?"iPad":"iPhone":e},plugins:function(){var e=navigator.plugins;if(e){for(var t=[],n=0;n<e.length;++n){var r=e[n];if(r){for(var o=[],a=0;a<r.length;++a){var i=r[a];o.push({type:i.type,suffixes:i.suffixes})}t.push({name:r.name,description:r.description,mimeTypes:o})}}return t}},touchSupport:function(){var e,t=navigator,n=0;void 0!==t.maxTouchPoints?n=b(t.maxTouchPoints):void 0!==t.msMaxTouchPoints&&(n=t.msMaxTouchPoints);try{document.createEvent("TouchEvent"),e=!0}catch(t){e=!1}return{maxTouchPoints:n,touchEvent:e,touchStart:"ontouchstart"in window}},vendor:function(){return navigator.vendor||""},vendorFlavors:function(){for(var e=[],t=0,n=["chrome","safari","__crWeb","__gCrWeb","yandex","__yb","__ybro","__firefox__","__edgeTrackingPreventionStatistics","webkit","oprt","samsungAr","ucweb","UCShellJava","puffinDevice"];t<n.length;t++){var r=n[t],o=window[r];o&&"object"==typeof o&&e.push(r)}return e.sort()},cookiesEnabled:function(){var e=document;try{e.cookie="cookietest=1; SameSite=Strict;";var t=-1!==e.cookie.indexOf("cookietest=");return e.cookie="cookietest=1; SameSite=Strict; expires=Thu, 01-Jan-1970 00:00:01 GMT",t}catch(e){return!1}},colorGamut:function(){for(var e=0,t=["rec2020","p3","srgb"];e<t.length;e++){var n=t[e];if(matchMedia("(color-gamut: ".concat(n,")")).matches)return n}},invertedColors:function(){return!!B("inverted")||!B("none")&&void 0},forcedColors:function(){return!!O("active")||!O("none")&&void 0},monochrome:function(){if(matchMedia("(min-monochrome: 0)").matches){for(var e=0;e<=100;++e)if(matchMedia("(max-monochrome: ".concat(e,")")).matches)return e;throw new Error("Too high value")}},contrast:function(){return U("no-preference")?0:U("high")||U("more")?1:U("low")||U("less")?-1:U("forced")?10:void 0},reducedMotion:function(){return!!Q("reduce")||!Q("no-preference")&&void 0},hdr:function(){return!!K("high")||!K("standard")&&void 0},math:function(){var e,t=q.acos||$,n=q.acosh||$,r=q.asin||$,o=q.asinh||$,a=q.atanh||$,i=q.atan||$,c=q.sin||$,u=q.sinh||$,s=q.cos||$,l=q.cosh||$,d=q.tan||$,m=q.tanh||$,f=q.exp||$,v=q.expm1||$,h=q.log1p||$;return{acos:t(.12312423423423424),acosh:n(1e308),acoshPf:(e=1e154,q.log(e+q.sqrt(e*e-1))),asin:r(.12312423423423424),asinh:o(1),asinhPf:q.log(1+q.sqrt(2)),atanh:a(.5),atanhPf:q.log(3)/2,atan:i(.5),sin:c(-1e300),sinh:u(1),sinhPf:q.exp(1)-1/q.exp(1)/2,cos:s(10.000000000123),cosh:l(1),coshPf:(q.exp(1)+1/q.exp(1))/2,tan:d(-1e300),tanh:m(1),tanhPf:(q.exp(2)-1)/(q.exp(2)+1),exp:f(1),expm1:v(1),expm1Pf:q.exp(1)-1,log1p:h(10),log1pPf:q.log(11),powPI:q.pow(q.PI,-100)}},pdfViewerEnabled:function(){return navigator.pdfViewerEnabled},architecture:function(){var e=new Float32Array(1),t=new Uint8Array(e.buffer);return e[0]=1/0,e[0]=e[0]-e[0],t[3]},applePay:function(){var e=window.ApplePaySession;if("function"!=typeof(null==e?void 0:e.canMakePayments))return-1;try{return e.canMakePayments()?1:0}catch(e){return ne(e)}},privateClickMeasurement:function(){var e,t=document.createElement("a"),n=null!==(e=t.attributionSourceId)&&void 0!==e?e:t.attributionsourceid;return void 0===n?void 0:String(n)},webGlBasics:function(e){var t,n,r,o,a,i,c=ie(e.cache);if(!c)return-1;if(!de(c))return-2;var u=se()?null:c.getExtension("WEBGL_debug_renderer_info");return{version:(null===(t=c.getParameter(c.VERSION))||void 0===t?void 0:t.toString())||"",vendor:(null===(n=c.getParameter(c.VENDOR))||void 0===n?void 0:n.toString())||"",vendorUnmasked:u?null===(r=c.getParameter(u.UNMASKED_VENDOR_WEBGL))||void 0===r?void 0:r.toString():"",renderer:(null===(o=c.getParameter(c.RENDERER))||void 0===o?void 0:o.toString())||"",rendererUnmasked:u?null===(a=c.getParameter(u.UNMASKED_RENDERER_WEBGL))||void 0===a?void 0:a.toString():"",shadingLanguageVersion:(null===(i=c.getParameter(c.SHADING_LANGUAGE_VERSION))||void 0===i?void 0:i.toString())||""}},webGlExtensions:function(e){var t=ie(e.cache);if(!t)return-1;if(!de(t))return-2;var n=t.getSupportedExtensions(),r=t.getContextAttributes(),o=[],a=[],i=[],c=[];if(r)for(var u=0,s=Object.keys(r);u<s.length;u++){var l=s[u];o.push("".concat(l,"=").concat(r[l]))}for(var d=0,m=ue(t);d<m.length;d++){var f=t[w=m[d]];a.push("".concat(w,"=").concat(f).concat(te.has(f)?"=".concat(t.getParameter(f)):""))}if(n)for(var v=0,h=n;v<h.length;v++){var p=h[v];if("WEBGL_debug_renderer_info"!==p||!se()){var b=t.getExtension(p);if(b)for(var y=0,g=ue(b);y<g.length;y++){var w;f=b[w=g[y]],i.push("".concat(w,"=").concat(f).concat(re.has(f)?"=".concat(t.getParameter(f)):""))}}}for(var L=0,k=oe;L<k.length;L++)for(var V=k[L],S=0,W=ae;S<W.length;S++){var Z=W[S],C=ce(t,V,Z);c.push("".concat(V,".").concat(Z,"=").concat(C.join(",")))}return i.sort(),a.sort(),{contextAttributes:o,parameters:a,shaderPrecisions:c,extensions:n,extensionParameters:i}}};function me(e){var t=function(e){if(G())return.4;if(C())return M()?.5:.3;var t="value"in e.platform?e.platform.value:"";return/^Win/.test(t)?.6:/^Mac/.test(t)?.5:.7}(e),n=function(e){return L(.99+.01*e,1e-4)}(t);return{score:t,comment:"$ if upgrade to Pro: https://fpjs.dev/pro".replace(/\$/g,"".concat(n))}}function ve(t){return JSON.stringify(t,(function(t,n){return n instanceof Error?e({name:(r=n).name,message:r.message,stack:null===(o=r.stack)||void 0===o?void 0:o.split("\n")},r):n;var r,o}),2)}function he(e){return p(function(e){for(var t="",n=0,r=Object.keys(e).sort();n<r.length;n++){var o=r[n],a=e[o],i="error"in a?"error":JSON.stringify(a.value);t+="".concat(t?"|":"").concat(o.replace(/([:|\\])/g,"\\$1"),":").concat(i)}return t}(e))}function pe(e){return void 0===e&&(e=50),function(e,t){void 0===t&&(t=1/0);var n=window.requestIdleCallback;return n?new Promise((function(e){return n.call(window,(function(){return e()}),{timeout:t})})):o(Math.min(e,t))}(e,2*e)}function be(e,r){var o=Date.now();return{get:function(a){return n(this,void 0,void 0,(function(){var n,i,c;return t(this,(function(t){switch(t.label){case 0:return n=Date.now(),[4,e()];case 1:return i=t.sent(),c=function(e){var t;return{get visitorId(){return void 0===t&&(t=he(this.components)),t},set visitorId(e){t=e},confidence:me(e),components:e,version:"4.0.0"}}(i),(r||(null==a?void 0:a.debug))&&console.log("Copy the text below to get the debug data:\n\n```\nversion: ".concat(c.version,"\nuserAgent: ").concat(navigator.userAgent,"\ntimeBetweenLoadAndGet: ").concat(n-o,"\nvisitorId: ").concat(c.visitorId,"\ncomponents: ").concat(ve(i),"\n```")),[2,c]}}))}))}}}function ye(e){var r=void 0===e?{}:e,o=r.delayFallback,a=r.debug;return r.monitoring,n(this,void 0,void 0,(function(){return t(this,(function(e){switch(e.label){case 0:return[4,pe(o)];case 1:return e.sent(),[2,be(V(fe,{cache:{},debug:a},[]),a)]}}))}))}var ge={load:ye,hashComponents:he,componentsToDebugString:ve},we=p;export{ve as componentsToDebugString,ge as default,R as getFullscreenElement,J as getScreenFrame,ie as getWebGLContext,ne as handleApplePayError,he as hashComponents,G as isAndroid,x as isChromium,M as isDesktopSafari,Z as isEdgeHTML,A as isGecko,W as isTrident,C as isWebKit,ye as load,V as loadSources,we as murmurX64Hash128,pe as prepareForSources,fe as sources,S as transformSource,I as withIframe};