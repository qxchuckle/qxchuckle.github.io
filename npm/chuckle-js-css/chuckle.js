let kk={showRightMenu:function(e,t=0,o=0){let n=$("#rightMenu");n.css("top",t+"px").css("left",o+"px"),e?n.show():n.hide()},switchDarkMode:function(){"light"===("dark"===document.documentElement.getAttribute("data-theme")?"dark":"light")?(activateDarkMode(),saveToLocal.set("theme","dark",2),void 0!==GLOBAL_CONFIG.Snackbar&&btf.snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night)):(activateLightMode(),saveToLocal.set("theme","light",2),void 0!==GLOBAL_CONFIG.Snackbar&&btf.snackbarShow(GLOBAL_CONFIG.Snackbar.night_to_day)),"function"==typeof utterancesTheme&&utterancesTheme(),"object"==typeof FB&&window.loadFBComment(),window.DISQUS&&document.getElementById("disqus_thread").children.length&&setTimeout((()=>window.disqusReset()),200)},switchReadMode:function(){const e=document.body;e.classList.add("read-mode");const t=document.createElement("button");t.type="button",t.className="fas fa-sign-out-alt exit-readmode",e.appendChild(t),t.addEventListener("click",(function o(){e.classList.remove("read-mode"),t.remove(),t.removeEventListener("click",o)}))},switchTheme:function(e=!1){let t=[""],o=parseInt(localStorage.getItem("visitor-theme"));o?(o+=e?0:1,o%=t.length):o=e?0:1,localStorage.setItem("visitor-theme",o);let n="";t[o]&&(n+=window.location.origin+"/css/dorakika/"+t[o]),$(document.head).find('[tag="theme"]')[0].href=n},copySelect:function(){document.execCommand("Copy",!1,null),GLOBAL_CONFIG.Snackbar?btf.snackbarShow(GLOBAL_CONFIG.copy.success):console.log("复制成功")},scrollToTop:function(){btf.scrollToDest(0,500)}};if(!navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)){let e=$("#rightMenu").width(),t=$("#rightMenu").height();window.oncontextmenu=function(o){$(".rightMenu-group.hide").hide(),document.getSelection().toString()&&$("#menu-text").show();let n=o.clientX+10,i=o.clientY;return n+e>window.innerWidth&&(n-=e),i+t>window.innerHeight&&(i-=t),kk.showRightMenu(!0,i,n),!1}}window.addEventListener("click",(function(){kk.showRightMenu(!1)})),$("#menu-backward").on("click",(function(){window.history.back()})),$("#menu-forward").on("click",(function(){window.history.forward()})),$("#menu-refresh").on("click",(function(){window.location.reload()})),$("#menu-darkmode").on("click",kk.switchDarkMode),$("#menu-top").on("click",kk.scrollToTop),$("#menu-readmode").on("click",kk.switchReadMode),$("#menu-home").on("click",(function(){window.location.href=window.location.origin})),$("#menu-themeChange").on("click",(function(){kk.switchTheme()})),window.addEventListener("load",(function(){kk.switchTheme(!0)}));