window.addEventListener("load",(()=>{let e=!1;const t=()=>{const t=document.body.style;t.width="100%",t.overflow="hidden",btf.animateIn(document.getElementById("search-mask"),"to_show 0.5s"),btf.animateIn(document.querySelector("#local-search .search-dialog"),"titleScale 0.5s"),setTimeout((()=>{document.querySelector("#local-search-input input").focus()}),100),e||(!async function(e){let t=[];const n=e.split(".")[1],c=await fetch("https://github-page.qcqx.cn/search.json");if("json"===n)t=await c.json();else if("xml"===n){const e=await c.text(),n=await(new window.DOMParser).parseFromString(e,"text/xml"),a=await n;t=[...a.querySelectorAll("entry")].map((function(e){return{title:e.querySelector("title").textContent,content:e.querySelector("content")&&e.querySelector("content").textContent,url:e.querySelector("url").textContent}}))}if(c.ok){const e=document.getElementById("loading-database");e.nextElementSibling.style.display="block",e.remove()}const a=document.querySelector("#local-search-input input"),o=document.getElementById("local-search-results"),s=document.getElementById("loading-status");a.addEventListener("input",(function(){const e=this.value.trim().toLowerCase().split(/[\s]+/);""!==e[0]&&(s.innerHTML='<i class="fas fa-spinner fa-pulse"></i>'),o.innerHTML="";let n='<div class="search-result-list">';if(e.length<=0)return;let c=0;t.forEach((function(t){let a=!0,o=t.title?t.title.trim().toLowerCase():"";const s=t.content?t.content.trim().replace(/<[^>]+>/g,"").toLowerCase():"",l=t.url.startsWith("/")?t.url:GLOBAL_CONFIG.root+t.url;let r=-1,i=-1,d=-1;if(""!==o||""!==s?e.forEach((function(e,t){r=o.indexOf(e),i=s.indexOf(e),r<0&&i<0?a=!1:(i<0&&(i=0),0===t&&(d=i))})):a=!1,a){if(d>=0){let t=d-30,a=d+100;t<0&&(t=0),0===t&&(a=100),a>s.length&&(a=s.length);let r=s.substring(t,a);e.forEach((function(e){const t=new RegExp(e,"gi");r=r.replace(t,'<span class="search-keyword">'+e+"</span>"),o=o.replace(t,'<span class="search-keyword">'+e+"</span>")})),n+='<div class="local-search__hit-item"><a href="'+l+'" class="search-result-title">'+o+"</a>",c+=1,""!==s&&(n+='<p class="search-result">'+r+"...</p>")}n+="</div>"}})),0===c&&(n+='<div id="local-search__hits-empty">'+GLOBAL_CONFIG.localSearch.languages.hits_empty.replace(/\$\{query}/,this.value.trim())+"</div>"),n+="</div>",o.innerHTML=n,""!==e[0]&&(s.innerHTML=""),window.pjax&&window.pjax.refresh(o)}))}(GLOBAL_CONFIG.localSearch.path),e=!0),document.addEventListener("keydown",(function e(t){"Escape"===t.code&&(n(),document.removeEventListener("keydown",e))}))},n=()=>{const e=document.body.style;e.width="",e.overflow="",btf.animateOut(document.querySelector("#local-search .search-dialog"),"search_close .5s"),btf.animateOut(document.getElementById("search-mask"),"to_hide 0.5s")},c=()=>{document.querySelector("#search-button > .search").addEventListener("click",t),document.getElementById("search-mask").addEventListener("click",n),document.querySelector("#local-search .search-close-button").addEventListener("click",n)};c(),window.addEventListener("pjax:complete",(function(){"block"===getComputedStyle(document.querySelector("#local-search .search-dialog")).display&&n(),c()}))}));