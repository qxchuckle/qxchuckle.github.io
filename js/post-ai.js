{let e=!0;const t=document.querySelector(".ai-explanation"),i=document.querySelector(".ai-explanation-none").innerHTML,n=document.querySelector(".post-ai");let a="",r="",c=600,o=0,s=0,l=[],m=0;const d=i=>{if(e)if(d.start||(d.start=i),m=i-d.start,m>=20){if(d.start=i,o<r-1){let e=a.charAt(o+1),i=/[,.，。!?！？]/.test(e)?150:20;t.firstElementChild&&t.removeChild(t.firstElementChild),t.innerHTML+=e;let n=document.createElement("div");n.className="ai-cursor",t.appendChild(n),o++,150===i&&(document.querySelector(".ai-explanation .ai-cursor").style.opacity="0"),o===r-1&&(u.disconnect(),t.removeChild(t.firstElementChild)),l[0]=setTimeout((()=>{requestAnimationFrame(d)}),i)}}else requestAnimationFrame(d)},u=new IntersectionObserver((i=>{let n=i[0].isIntersecting;e=n,e&&(c=0===o?200:20,l[1]=setTimeout((()=>{s&&(o=0,s=0),0===o&&(t.innerHTML=a.charAt(0)),requestAnimationFrame(d)}),c))}),{threshold:0});function clearSTO(){l.length&&l.forEach((e=>{e&&clearTimeout(e)}))}function startAI(e,i=!0){o=0,s=1,clearSTO(),m=0,t.innerHTML=i?"生成中. . .":"请等待. . .",a=e,r=a.length,u.disconnect(),u.observe(n)}function aiIntroduce(){startAI("我是文章辅助AI: QX-AI，点击下方的按钮，让我生成本文简介、推荐相关文章等。")}function aiAbstract(){startAI(i)}function aiRecommend(){o=0,s=1,clearSTO(),m=0,t.innerHTML="生成中. . .",a="",r="",u.disconnect(),l[2]=setTimeout((()=>{t.innerHTML=recommendList()}),600)}function aiGoHome(){startAI("正在前往博客主页...",!1),l[2]=setTimeout((()=>{pjax.loadUrl("/")}),1e3)}function recommendList(){let e="推荐文章：<br />",t=document.querySelectorAll(".card-recommend-post .aside-list .aside-list-item .thumbnail");return t||(e="很抱歉，无法找到类似的文章，你也可以看看本站最新发布的文章：<br />",t=document.querySelectorAll(".card-recent-post .aside-list .aside-list-item .thumbnail")),e+='<div class="ai-recommend">',t.forEach(((t,i)=>{e+=`<div class="ai-recommend-item"><span>推荐${i+1}：</span><a href="javascript:;" onclick="pjax.loadUrl('${t.href}')" title="${t.title}" data-pjax-state="">${t.title}</a></div>`})),e+="</div>",e}document.querySelectorAll(".ai-btn-item").forEach(((e,t)=>{e.addEventListener("click",(()=>{switch(t){case 0:aiIntroduce();break;case 1:aiAbstract();break;case 2:aiRecommend();break;case 3:aiGoHome()}}))})),aiIntroduce()}