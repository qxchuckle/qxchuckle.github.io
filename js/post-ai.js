function allAI(){let e=!0,t=document.querySelector(".ai-explanation"),n=document.querySelector(".ai-explanation-none").innerHTML,i=document.querySelector(".post-ai"),o=document.querySelectorAll(".ai-btn-item"),r="",a="",c=600,l=0,s=0,u=[],d=0,m=!1,f=new AbortController,h=f.signal;const p=n=>{if(e)if(p.start||(p.start=n),d=n-p.start,d>=20){if(p.start=n,l<a-1){let e=r.charAt(l+1),n=/[,.，。!?！？]/.test(e)?150:20;t.firstElementChild&&t.removeChild(t.firstElementChild),t.innerHTML+=e;let i=document.createElement("div");i.className="ai-cursor",t.appendChild(i),l++,150===n&&(document.querySelector(".ai-explanation .ai-cursor").style.opacity="0"),l===a-1&&(y.disconnect(),t.removeChild(t.firstElementChild)),u[0]=setTimeout((()=>{requestAnimationFrame(p)}),n)}}else requestAnimationFrame(p)},y=new IntersectionObserver((n=>{let i=n[0].isIntersecting;e=i,e&&(c=0===l?200:20,u[1]=setTimeout((()=>{s&&(l=0,s=0),0===l&&(t.innerHTML=r.charAt(0)),requestAnimationFrame(p)}),c))}),{threshold:0});function w(n=!0){l=0,s=1,u.length&&u.forEach((e=>{e&&clearTimeout(e)})),e=!1,d=0,t.innerHTML=n?"生成中. . .":"请等待. . .",r="",a="",y.disconnect()}function b(e,t=!0){w(t),r=e,a=r.length,y.observe(i)}function q(){b("我是文章辅助AI: QX-AI，点击下方的按钮，让我生成本文简介、推荐相关文章等。")}function T(){w(),u[2]=setTimeout((()=>{t.innerHTML=function(){let e="推荐文章：<br />",t=document.querySelectorAll(".card-recommend-post .aside-list .aside-list-item .thumbnail");t||(e="很抱歉，无法找到类似的文章，你也可以看看本站最新发布的文章：<br />",t=document.querySelectorAll(".card-recent-post .aside-list .aside-list-item .thumbnail"));return e+='<div class="ai-recommend">',t.forEach(((t,n)=>{e+=`<div class="ai-recommend-item"><span>推荐${n+1}：</span><a href="javascript:;" onclick="pjax.loadUrl('${t.href}')" title="${t.title}" data-pjax-state="">${t.title}</a></div>`})),e+="</div>",e}()}),300)}async function S(){if(!function(){const e=window.location.hostname;return["www.qcqx.cn","www.chuckle.top","127.0.0.1"].includes(e)}())return void btf.snackbarShow("未经授权的域名");if(function(e=3e3){let t=Date.now()-localStorage.getItem("aiTime");return t<e&&(btf.snackbarShow(3-parseInt(t/1e3)+"后才能再次点击真AI简介"),!0)}())return;localStorage.setItem("aiTime",Date.now()),w();const e=g(document.querySelector("#article-container"));console.log(e);const t=await async function(e){m=!1,f=new AbortController,h=f.signal;const t=await fetch("https://summary.tianli0.top/",{signal:h,method:"POST",headers:{"Content-Type":"application/json",Referer:"https://www.qcqx.cn/"},body:JSON.stringify({content:e,key:"tN2jLmG7fX9zHk5dVbQr"})}),n=(await t.json()).summary;return m=!0,n}(e);console.log(t),b(t)}function g(e){const t=["highlight","Copyright-Notice","post-ai","post-series","mini-sandbox"];let n="";for(let i of e.childNodes)if(i.nodeType===Node.TEXT_NODE)n+=i.textContent.trim();else if(i.nodeType===Node.ELEMENT_NODE){let e=!1;for(let n of i.classList)if(t.includes(n)){e=!0;break}if(!e){let e=g(i);n&&e?/[：:,.，。?？/；;!！（）、)(]$/.test(n)||/^[：:,.，。?？/；;!！（）、@#￥$%&)(]/.test(e)?n+=e:n+="。"+e:n+=e}}return n.replace(/\s+/g,"")}t=document.querySelector(".ai-explanation"),n=document.querySelector(".ai-explanation-none").innerHTML,i=document.querySelector(".post-ai"),o=document.querySelectorAll(".ai-btn-item"),o.forEach(((e,t)=>{e.addEventListener("click",(()=>{switch(t){case 0:q();break;case 1:b(n);break;case 2:T();break;case 3:S()}}))})),q()}allAI();