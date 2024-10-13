const CACHE_NAME="Chuckle",VERSION_CACHE_NAME="ChuckleTime",MAX_ACCESS_CACHE_TIME=345600;function time(){return(new Date).getTime()}const dbHelper={read:e=>new Promise((t=>{caches.match(e).then((function(e){e||t(null),e.text().then((e=>t(e)))})).catch((()=>{t(null)}))})),write:(e,t)=>new Promise(((n,c)=>{caches.open("ChuckleTime").then((function(c){c.put(e,new Response(t)),n()})).catch((()=>{c()}))})),delete:e=>{caches.match(e).then((t=>{t&&caches.open("ChuckleTime").then((t=>t.delete(e)))}))}},dbTime={read:e=>dbHelper.read(new Request(`https://LOCALCACHE/${encodeURIComponent(e)}`)),write:(e,t)=>dbHelper.write(new Request(`https://LOCALCACHE/${encodeURIComponent(e)}`),t),delete:e=>dbHelper.delete(new Request(`https://LOCALCACHE/${encodeURIComponent(e)}`))},dbAccess={update:e=>dbHelper.write(new Request(`https://ACCESS-CACHE/${encodeURIComponent(e)}`),time()),check:async e=>{const t=new Request(`https://ACCESS-CACHE/${encodeURIComponent(e)}`),n=await dbHelper.read(t);return!!n&&(dbHelper.delete(t),time()-n<345600)}};self.addEventListener("install",(()=>self.skipWaiting()));const cacheList={qxcdn:{url:/(^(https:\/\/cdn\.chuckle\.top).*@\d.*)/g,time:259200,clean:!0},qccdn:{url:/(^(https:\/\/cdn\.qcqx\.cn).*@\d.*)/g,time:259200,clean:!0},tianli:{url:/(^(https:\/\/cdn1\.tianli0\.top).*@\d.*)/g,time:259200,clean:!0},pai:{url:/(^(https:\/\/jsdelivr\.pai233\.top).*@\d.*)/g,time:259200,clean:!0},n:{url:/(^(https:\/\/img\.cdn\.nesxc\.com).*@\d.*)/g,time:259200,clean:!0},jsdcdn:{url:/(^(https:\/\/cdn\.jsdelivr\.net).*@\d.*)/g,time:259200,clean:!0},bootcdn:{url:/(^(https:\/\/cdn\.bootcdn\.net).*@\d.*)/g,time:259200,clean:!0},alfonts:{url:/(^(https:\/\/at\.alicdn\.com).*@\d.*)/g,time:259200,clean:!0},fastly:{url:/(^(https:\/\/fastly\.jsdelivr\.net).*@\d.*)/g,time:259200,clean:!0},lf3:{url:/(^(https:\/\/lf3-cdn-tos\.bytecdntp\.com).*@\d.*)/g,time:259200,clean:!0},lf26:{url:/(^(https:\/\/lf26-cdn-tos\.bytecdntp\.com).*@\d.*)/g,time:259200,clean:!0},zhimg:{url:/(^(https:\/\/unpkg\.zhimg\.com).*@\d.*)/g,time:259200,clean:!0},unpkg:{url:/(^(https:\/\/unpkg\.com).*@\d.*)/g,time:259200,clean:!0},elemecdn:{url:/(^(https:\/\/npm\.elemecdn\.com).*@\d.*)/g,time:259200,clean:!0},update:{url:/.*((\/article.*\/)|search\.xml)$/g,time:259200,clean:!0},chuckle:{url:/(^(https:\/\/(www\.chuckle\.top|chuckle\.top|www\.qcqx\.cn|qcqx\.cn)).*(\/)$)/g,time:259200,clean:!0},resources:{url:/(^(https:\/\/(www\.chuckle\.top|chuckle\.top|www\.qcqx\.cn|qcqx\.cn))).*\.(css|html|webp|png|jpg|gif|ico|js|woff2|woff|ttf|json|svg)$/g,time:259200,clean:!0}},replaceList={};function findCache(e){for(let t in cacheList){const n=cacheList[t];if(e.match(n.url))return n}return null}function replaceRequest(e){let t=e.url,n=!1;for(let e in replaceList){const c=replaceList[e];for(let e of c.source)t.match(e)&&(t=t.replace(e,c.dist),n=!0)}return n?new Request(t):null}function blockRequest(e){return!1}async function fetchEvent(e,t,n){const c=time();dbAccess.update(e.url);const s=n.time;let l=!1;if(t){const n=await dbTime.read(e.url);if(n&&c-n<s)return t;l=!0}const r=()=>fetch(e).then((t=>{if(dbTime.write(e.url,c),t.ok||0===t.status){const n=t.clone();caches.open("Chuckle").then((t=>t.put(e,n)))}return t}));return l?Promise.race([new Promise((e=>setTimeout((()=>e(t)),400))),r()]).catch((t=>console.error("不可达的链接："+e.url+"\n错误信息："+t))):r()}self.addEventListener("fetch",(async e=>{const t=replaceRequest(e.request),n=null===t?e.request:t,c=findCache(n.url);blockRequest(n)?e.respondWith(new Response(null,{status:204})):null!==c?e.respondWith(caches.match(n).then((async e=>fetchEvent(n,e,cacheList)))):null!==t&&e.respondWith(fetch(n))})),self.addEventListener("message",(function(e){"refresh"===e.data&&caches.open("Chuckle").then((function(t){t.keys().then((function(n){for(let e of n){const n=findCache(e.url);null!=n&&!n.clean&&dbAccess.check(e.url)||(t.delete(e),dbTime.delete(e))}e.source.postMessage("success")}))}))}));let cachelist=[];self.addEventListener("install",(async function(e){self.skipWaiting(),e.waitUntil(caches.open("Chuckle").then((function(e){return console.log("Opened cache"),e.addAll(cachelist)})))})),self.addEventListener("fetch",(async e=>{try{e.respondWith(handle(e.request))}catch(t){e.respondWith(handleerr(e.request,t))}}));const handleerr=async(e,t)=>new Response(`<h1>CDN分流器遇到了致命错误</h1>\n      <b>${t}</b>`,{headers:{"content-type":"text/html; charset=utf-8"}});let cdn={gh:{jsdelivr:{url:"https://jsdelivr.pai233.top/gh"},tianli:{url:"https://cdn1.tianli0.top/gh"},fastly:{url:"https://fastly.jsdelivr.net/gh"}},combine:{jsdelivr:{url:"https://jsdelivr.pai233.top/combine"},tianli:{url:"https://cdn1.tianli0.top/combine"},jsdelivr_fastly:{url:"https://fastly.jsdelivr.net/combine"}},npm:{eleme:{url:"https://npm.elemecdn.com"},pai:{url:"https://jsdelivr.pai233.top/npm"},zhimg:{url:"https://unpkg.zhimg.com"},unpkg:{url:"https://unpkg.com"},tianli:{url:"https://cdn1.tianli0.top/npm"},fastly:{url:"https://fastly.jsdelivr.net/npm"}}};const handle=async function(e){const t=e.url,n=t.split("/")[2];let c=[];for(let s in cdn)for(let l in cdn[s])if(n==cdn[s][l].url.split("https://")[1].split("/")[0]&&t.match(cdn[s][l].url)){c=[];for(let e in cdn[s])c.push(t.replace(cdn[s][l].url,cdn[s][e].url));return t.indexOf("@latest/")>-1?lfetch(c,t):caches.match(e).then((function(n){return n||lfetch(c,t).then((function(t){return caches.open("Chuckle").then((function(n){return n.put(e,t.clone()),t}))}))}))}return fetch(e)},lfetch=async(e,t)=>{let n=new AbortController;const c=async e=>new Response(await e.arrayBuffer(),{status:e.status,headers:e.headers});return Promise.any||(Promise.any=function(e){return new Promise(((t,n)=>{let c=(e=Array.isArray(e)?e:[]).length,s=[];if(0===c)return n(new AggregateError("All promises were rejected"));e.forEach((e=>{e.then((e=>{t(e)}),(e=>{c--,s.push(e),0===c&&n(new AggregateError(s))}))}))}))}),Promise.any(e.map((e=>new Promise(((t,s)=>{fetch(e,{signal:n.signal}).then(c).then((e=>{200==e.status?(n.abort(),t(e)):s(e)}))})))))};