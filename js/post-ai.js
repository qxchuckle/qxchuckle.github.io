function allAI(){let e=!0,t=document.querySelector(".ai-explanation"),n=document.querySelector(".ai-explanation-none").innerHTML,o=document.querySelector(".post-ai"),r=document.querySelectorAll(".ai-btn-item"),i="",a="",c=600,s=0,l=0,u=[],m=0,d=!1,h=new AbortController,f=h.signal;const p="填入chatGPT的apiKey",y="https://www.qcqx.cn/",g="tN2jLmG7fX9zHk5dVbQr",T=n=>{if(e)if(T.start||(T.start=n),m=n-T.start,m>=20){if(T.start=n,s<a-1){let e=i.charAt(s+1),n=/[,.，。!?！？]/.test(e)?150:20;t.firstElementChild&&t.removeChild(t.firstElementChild),t.innerHTML+=e;let o=document.createElement("div");o.className="ai-cursor",t.appendChild(o),s++,150===n&&(document.querySelector(".ai-explanation .ai-cursor").style.opacity="0"),s===a-1&&(b.disconnect(),t.removeChild(t.firstElementChild)),u[0]=setTimeout((()=>{requestAnimationFrame(T)}),n)}}else requestAnimationFrame(T)},b=new IntersectionObserver((n=>{let o=n[0].isIntersecting;e=o,e&&(c=0===s?200:20,u[1]=setTimeout((()=>{l&&(s=0,l=0),0===s&&(t.innerHTML=i.charAt(0)),requestAnimationFrame(T)}),c))}),{threshold:0});function A(n=!0){s=0,l=1,u.length&&u.forEach((e=>{e&&clearTimeout(e)})),e=!1,m=0,t.innerHTML=n?"生成中. . .":"请等待. . .",d||h.abort(),i="",a="",b.disconnect()}function w(e,t=!0){A(t),i=e,a=i.length,b.observe(o)}function S(){w("我是文章辅助AI: QX-AI，点击下方的按钮，让我生成本文简介、推荐相关文章等。")}function q(){w(n)}function E(){A(),u[2]=setTimeout((()=>{t.innerHTML=function(){let e="推荐文章：<br />",t=document.querySelectorAll(".card-recommend-post .aside-list .aside-list-item .thumbnail");t&&0!==t.length||(e="很抱歉，无法找到类似的文章，你也可以看看本站最近更新的文章：<br />",t=document.querySelectorAll(".card-recent-post .aside-list .aside-list-item .thumbnail"));return e+='<div class="ai-recommend">',t.forEach(((t,n)=>{e+=`<div class="ai-recommend-item"><span>推荐${n+1}：</span><a href="javascript:;" onclick="pjax.loadUrl('${t.href}')" title="${t.title}" data-pjax-state="">${t.title}</a></div>`})),e+="</div>",e}()}),300)}async function I(){if(function(e=3e3){let t=Date.now()-localStorage.getItem("aiTime");return t<e&&(btf.snackbarShow(3-parseInt(t/1e3)+"后才能再次点击生成AI简介"),!0)}())return;localStorage.setItem("aiTime",Date.now()),A();const e=function(e,t=!0){let n;n=t?`文章的各级标题：${C(e)}。文章内容的截取：${o=v(e),r=o.substring(0,500),i=o.substring(o.length-200),a=(o.length-300)/2,c=o.substring(a,a+300),r+c+i}`:`${v(e)}`;var o,r,i,a,c;return n}(document.querySelector("#article-container"));console.log(e);const t=await async function(e,t=!0){d=!1,h=new AbortController,f=h.signal;let n="";if(t){try{if(n=await fetch("https://summary.tianli0.top/",{signal:f,method:"POST",headers:{"Content-Type":"application/json",Referer:y},body:JSON.stringify({content:e,key:g,url:window.location.href})}),429===n.status&&w("请求过于频繁，请稍后再请求AI。"),!n.ok)throw new Error("Response not ok")}catch(e){console.error("Error occurred:",e),w("QX-AI请求tianliGPT出错了，请稍后再试。")}const t=(await n.json()).summary;return d=!0,t}{const t=`你是一个摘要生成工具，你需要解释我发送给你的内容，不要换行，不要超过200字，只需要介绍文章的内容，不需要提出建议和缺少的东西。请用中文回答，文章内容为：${e}`,o="https://api.openai.com/v1/chat/completions";try{if(n=await fetch(o,{signal:f,method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${p}`},body:JSON.stringify({model:"gpt-3.5-turbo",messages:[{role:"user",content:t}]})}),429===n.status&&w("请求过于频繁，请稍后再请求AI。"),!n.ok)throw new Error("Response not ok")}catch(e){console.error("Error occurred:",e),w("QX-AI请求chatGPT出错了，请稍后再试。")}const r=(await n.json()).choices[0].message.content;return d=!0,r}}(e,true);console.log(t),w(t)}function v(e){const t=["highlight","Copyright-Notice","post-ai","post-series","mini-sandbox"];let n="";for(let o of e.childNodes)if(o.nodeType===Node.TEXT_NODE)n+=o.textContent.trim();else if(o.nodeType===Node.ELEMENT_NODE){let e=!1;for(let n of o.classList)if(t.includes(n)){e=!0;break}if(!e){n+=v(o)}}return n.replace(/\s+/g,"")}function C(e){const t=e.querySelectorAll("h1, h2, h3, h4"),n=[];for(let e=0;e<t.length;e++){const o=t[e],r=o.textContent.trim();n.push(r);const i=C(o);n.push(...i)}return n.join(";")}!function(){t=document.querySelector(".ai-explanation"),n=document.querySelector(".ai-explanation-none").innerHTML,o=document.querySelector(".post-ai"),r=document.querySelectorAll(".ai-btn-item");const e=[S,q,E,I];r.forEach(((t,n)=>{t.addEventListener("click",(()=>{e[n]()}))})),S()}()}allAI();