// new MiniSandbox({
//     el: '#search-sandbox',
//     files: {
//         'index.html': {
//             title: 'HTML',
//             defaultValue: ``,
//             cssLibs: ['index.css'],
//             jsLibs: ['index.js'],
//         },
//         'index.css': {
//             title: 'CSS',
//             defaultValue: `
//         `},
//         'index.js': {
//             title: 'JS',
//             defaultValue: `
//         `}
//     },
//     defaultConfig: {
//         height: '400px',
//         autoRun: true,
//         autoRunInterval: 1000,
//         editorRange: '65%',
//         draggable: true,
//         direction: 'column-reverse',
//       }
// })

new MiniSandbox({
    el: '#time-count-sandbox',
    files: {
        'index.html': {
            title: 'HTML',
            defaultValue: `<div class="time-box">
    <div class="time-now">今天是1970年1月1日</div>
    <div class="time-title">倒计时</div>
    <div class="clock">
        <div class="hour">00</div>
        <div class="colon">:</div>
        <div class="minutes">00</div>
        <div class="colon">:</div>
        <div class="second">00</div>
    </div>
    <div class="target">目标时间00:00:00</div>
</div>`,
            cssLibs: ['index.css'],
            jsLibs: ['index.js'],
        },
        'index.css': {
            title: 'CSS',
            defaultValue: `* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

.time-box {
    padding: 20px 15px;
    background: rgb(30, 171, 210);
    width: fit-content;
    border-radius: 6px;
    overflow: hidden;
    margin: 10px;
    font-size: 18px;
}

.time-now {
    width: 100%;
    text-align: center;
}

.time-title {
    font-size: 26px;
    text-align: center;
    width: 100%;
    margin: 6px 0;
}

.clock {
    display: flex;
    width: 100%;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    margin: 10px 0;
}
.hour,.minutes,.second{
    font-size: 20px;
    margin: 2px;
    padding: 2px 3px;
    border-radius: 4px;
    background: rgba(36, 36, 36, 0.65);
    color: #fff;
}
.colon{
    font-size: 20px;
    font-weight: bolder;
    padding: 2px;
}
.target{
    width: 100%;
    text-align: center;
    margin: 6px 0 0;
}
        `},
        'index.js': {
            title: 'JS',
            defaultValue: `const hour = document.querySelector('.hour');
const minutes = document.querySelector('.minutes');
const second = document.querySelector('.second');
const time_now = document.querySelector('.time-now');
const target = document.querySelector('.target');
const now = new Date();
const time = '23:00:00';
const targetTime = \`\${now.getFullYear()}-\${now.getMonth() + 1}-\${now.getDate()} \${time}\`;
const last = new Date(targetTime);
let count = (last.getTime() - now.getTime()) / 1000;
function countDown() {
    let h = parseInt(count / 60 / 60 % 24);
    h = h < 10 ? '0' + h : h;
    let m = parseInt(count / 60 % 60);
    m = m < 10 ? '0' + m : m;
    let s = parseInt(count % 60);
    s = s < 10 ? '0' + s : s;
    hour.innerHTML = h;
    minutes.innerHTML = m;
    second.innerHTML = s;
    count--;
    if (count <= 0) {
        count = 0;
    }
}
time_now.innerHTML = \`今天是\${now.getFullYear()}年\${now.getMonth() + 1}月\${now.getDate()}日\`;
target.innerHTML = \`目标时间\${time}\`;
if (count <= 0) {count = 0;}
countDown();
setInterval(countDown, 1000);
        `}
    },
    defaultConfig: {
        height: '500px',
        autoRun: true,
        autoRunInterval: 1000,
        editorRange: '55%',
        draggable: true,
        direction: 'column-reverse',
      }
})

new MiniSandbox({
    el: '#nav-bl-tab-sandbox',
    files: {
        'index.html': {
            title: 'HTML',
            defaultValue: `<div id="nav">导航栏</div>
<div class="tab-box">
    <div class="tab-nav">
        <a href="javascript:;" class="active">栏1</a>
        <a href="javascript:;">栏2</a>
        <a href="javascript:;">栏3</a>
        <a href="javascript:;">栏4</a>
        <a href="javascript:;">栏114514</a>
        <div class="tab-bar"></div>
    </div>

    <div class="item-box">
        <div class="item active">项目一</div>
        <div class="item">项目二</div>
        <div class="item">项目三</div>
        <div class="item">项目四</div>
        <div class="item">项目114514</div>
    </div>
</div>
<div class="ele-nav">
    <div class="ele-item">去第一个</div>
    <div class="ele-item">去第二个</div>
    <div class="ele-item">去第三个</div>
    <div class="ele-item">去第四个</div>
    <div class="back-top">回到顶部</div>
</div>
<div class="box">第一个盒子,滚动到此(往上55像素)显示导航栏和电梯导航</div>
<div class="box">第二个盒子</div>
<div class="box">第三个盒子</div>
<div class="box">第四个盒子</div>`,
            cssLibs: ['index.css'],
            jsLibs: ['index.js'],
        },
        'index.css': {
            title: 'CSS',
            defaultValue: `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body {
    padding-bottom: 500px;
}

.tab-box {
    width: 500px;
    height: auto;
    border-radius: 6px;
    overflow: hidden;
    margin: 10px;
}

.tab-nav {
    display: flex;
    list-style: none;
    border-bottom: 1px solid #333;
    background: rgb(233, 233, 233);
    height: 40px;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    position: relative;
}

.tab-nav a {
    margin: 5px;
    padding: 0 10px;
    text-decoration: none;
    color: #000;
    height: 40px;
    line-height: 40px;
}

.tab-nav a.active {
    color: rgb(23, 180, 215);
}

.tab-bar {
    position: absolute;
    width: 40px;
    height: 3px;
    background: rgb(23, 180, 215);
    bottom: -1px;
    transition: all 0.3s;
}

.item-box {
    background: rgb(220, 220, 220);
}

.item {
    text-align: center;
    padding: 10px;
    display: none;
}

.item.active {
    display: block;
    height: 100px;
}

/* 导航栏 */
#nav {
    width: 100%;
    height: 50px;
    text-align: center;
    line-height: 50px;
    background: rgba(120, 182, 191, 0.5);
    font-size: 20px;
    position: fixed;
    top: -50px;
    transition: all 0.3s;
    z-index: 9999;
}

.box {
    margin-top: 10px;
    width: 200px;
    height: 200px;
    background: rgb(144, 193, 230);
    margin-bottom: 200px;
    border-radius: 6px;
}

/* 电梯导航 */
.ele-nav {
    position: fixed;
    bottom: 8%;
    background: rgb(233, 233, 233);
    right: 10%;
    border: 1px solid #333;
    border-bottom: 0;
    border-radius: 6px;
    overflow: hidden;
    transition: all 0.3s;
    opacity: 0;
    z-index: -99;
}
.ele-item.active{
    color: rgb(23, 180, 215);
    background: rgb(252, 200, 200);
}
.ele-item,
.back-top {
    padding: 10px;
    border-bottom: 1px solid #333;
    user-select: none;
    transition: all 0.3s;
}
.ele-item:hover,
.back-top:hover{
    color: rgb(23, 180, 215);
}
        `},
        'index.js': {
            title: 'JS',
            defaultValue: `//网页导航栏,还有电梯导航的显示和隐藏
const nav = document.querySelector('#nav');
const box = document.querySelectorAll('.box');
const ele_nav = document.querySelector('.ele-nav');
window.addEventListener('scroll', () => {
    let n = window.scrollY;
    let m = box[0].offsetTop;
    let tf = n >= m-55;//减去55像素，不让电梯导航点击去第一个后消失
    nav.style.top = tf ? '0px' : '-50px';
    ele_nav.style.opacity = tf ? '1' : '0';
    ele_nav.style.zIndex = tf ? '99' : '-99';
});
//bilibili导航
const bar = document.querySelector('.tab-bar');
const tabNav = document.querySelector('.tab-nav');
const tab_a = document.querySelectorAll('.tab-nav a');
const item = document.querySelectorAll('.item-box .item');
//给每个a依次添加data-id
tab_a.forEach((item, index) => {
    item.dataset.id = index;
});
//将a的点击事件委托给tab-nav
tabNav.addEventListener('click', (e) => {
    let tag = e.target.tagName;
    if (tag === 'A') {
        //tab导航切换
        document.querySelector('.tab-nav a.active').classList.remove('active');
        document.querySelector('.item.active').classList.remove('active');
        e.target.classList.add('active');
        item[e.target.dataset.id].classList.add('active');
        //bar移动和动态改变宽度
        bar.style.width = \`\${e.target.offsetWidth}px\`;
        bar.style.left = \`\${e.target.offsetLeft}px\`;
    }
});
tab_a[0].click();//先初始化一次bar的位置
//电梯导航
//给每个电梯导航依次添加data-name
document.querySelectorAll('.ele-item').forEach((item, index) => {
    item.dataset.name = \`b\${index+1}\`;
});
//给每个box依次添加电梯导航对应的自定义属性的class
box.forEach((item, index) => {
    item.classList.add(\`b\${index+1}\`);
});
//移除ele的active
function reactive(){
    let ele_active = document.querySelector('.ele-item.active');
    if(ele_active){
        //如果有，先清除
        ele_active.classList.remove('active');
    }
}
//去指定盒子,事件委托
ele_nav.addEventListener('click', (e) => {
    let cname = e.target.className;
    if (cname === 'ele-item'||cname === 'ele-item active') {
        reactive();
        //给点击的item添加active
        e.target.classList.add('active');
        //去对应的盒子
        //通过自定义属性获取对应的盒子class名
        let box = document.querySelector(\`.\${e.target.dataset.name}\`);
        // 其实监听滚动后，没必要再手动去给active，但想点击后导航立刻变色的话，可以取消下面的注释
        // //先立刻移除页面滚动监听
        // window.removeEventListener('scroll', scroll_light_ele);
        // //一秒后重新监听
        // setTimeout(() => {
        //     //防止重复注册，先移除页面滚动监听
        //     window.removeEventListener('scroll', scroll_light_ele);
        //     window.addEventListener('scroll', scroll_light_ele);
        // }, 800);
        //更新当前页面在哪个盒子的范围位置
        box_num = e.target.dataset.name.replace(/[^\d]/g, " ");
        //滚动到指定位置
        window.scrollTo({
            top: box.offsetTop - 50,
            left: 0,
            behavior: 'smooth'
        });
    }
    //点击返回顶部
    if (cname === 'back-top') {
        reactive();
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
        box_num = -1;
    }
});
//获取盒子的高度数组减去55px
const box_top_arr = Array.from(box).map((item)=>{
    return item.offsetTop-55;
})
var box_num = -1;//记录当前在哪个盒子范围内
//页面滚动到对应box让电梯导航对应导航高亮
function scroll_light_ele(){
    let n = window.scrollY;
    let num = box_top_arr.reduce((prev, item, index)=>{
        return n >= item ? index : prev;
    },-1);
    if(num === box_num){
        //说明还在这个盒子范围内，直接返回
        return;
    }else{
        //更新位置
        box_num = num;
    }
    if(num > -1){
        reactive();
        document.querySelector(\`[data-name="b\${num+1}"]\`).classList.add('active');
    }else{
        box_num = -1;
    }
}
window.addEventListener('scroll', scroll_light_ele);
        `}
    },
    defaultConfig: {
        height: '600px',
        autoRun: true,
        autoRunInterval: 1000,
        editorRange: '45%',
        draggable: true,
        direction: 'column-reverse',
      }
})

new MiniSandbox({
    el: '#input-check-sandbox',
    files: {
        'index.html': {
            title: 'HTML',
            defaultValue: `<table>
<tr>
    <th>
        <input type="checkbox" id="check-all">
        <span>全选</span>
    </th>
    <th>书名</th>
    <th>作者</th>
    <th>价格</th>
</tr>
<tr>
    <td>
        <input type="checkbox" class="check-one">
    </td>
    <td>毛泽东选集</td>
    <td>毛泽东</td>
    <td>56</td>
</tr>
<tr>
    <td>
        <input type="checkbox" class="check-one">
    </td>
    <td>资本论</td>
    <td>马克思</td>
    <td>129</td>
</tr>
<tr>
    <td>
        <input type="checkbox" class="check-one">
    </td>
    <td>三体</td>
    <td>刘慈欣</td>
    <td>46</td>
</tr>
</table>`,
            cssLibs: ['index.css'],
            jsLibs: ['index.js'],
        },
        'index.css': {
            title: 'CSS',
            defaultValue: `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

table {
    border-collapse: collapse;
    border-spacing: 0;
    border: 1px solid #c0c0c0;
    width: 500px;
    text-align: center;
}

th {
    background-color: rgb(40, 170, 220);
    font: bold 16px;
    color: #fff;
    height: 22px;
}
td {
    border: 1px solid #d0d0d0;
    color: #363636;
    padding: 6px 10px;
    background: #f9f9f9;
}
tr td:not(:first-child){
    min-width: 50px;
}
tr th:first-child{
    width: 70px;
}
        `},
        'index.js': {
            title: 'JS',
            defaultValue: `const checkAll = document.querySelector('#check-all');
const checks = document.querySelectorAll('.check-one');
checkAll.addEventListener('click',()=>{
    checks.forEach((item)=>{
        item.checked = checkAll.checked;
    });
});
checks.forEach((item)=>{
    item.addEventListener('click',()=>{
        checkAll.checked = document.querySelectorAll('.check-one:checked').length === checks.length;
    })
})
        `}
    },
    defaultConfig: {
        height: '450px',
        autoRun: true,
        autoRunInterval: 1000,
        editorRange: '65%',
        draggable: true,
        direction: 'column-reverse',
      }
})


new MiniSandbox({
    el: '#tab2-sandbox',
    files: {
        'index.html': {
            title: 'HTML',
            defaultValue: `<div class="tab-box">
    <div class="tab-nav">
        <ul>
            <li><a href="javascript:;" data-id="0" class="active">栏1</a></li>
            <li><a href="javascript:;" data-id="1">栏2</a></li>
            <li><a href="javascript:;" data-id="2">栏3</a></li>
            <li><a href="javascript:;" data-id="3">栏4</a></li>
            <li><a href="javascript:;" data-id="4">栏5</a></li>
        </ul>
    </div>
    <div class="tab-content">
        <div class="tab-item active">项目一</div>
        <div class="tab-item">项目二</div>
        <div class="tab-item">项目三</div>
        <div class="tab-item">项目四</div>
        <div class="tab-item">项目五</div>
    </div>
</div>`,
            cssLibs: ['index.css'],
            jsLibs: ['index.js'],
        },
        'index.css': {
            title: 'CSS',
            defaultValue: `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.tab-box {
    width: 500px;
    border-radius: 6px;
    overflow: hidden;
    margin: 10px;
}

.tab-nav {
    width: 100%;
    height: 40px;
    display: flex;
    background: rgb(233, 233, 233);
    justify-content: center;
    border-bottom: 1px solid #333;
}

.tab-nav ul {
    list-style: none;
    display: flex;
    align-items: flex-end;
}

.tab-nav ul li {
    margin: 0 5px;
    font-size: 18px;
    border-bottom: 1px solid transparent;
    margin-bottom: -1px;
}

.tab-nav ul li a.active {
    background: rgb(220, 220, 220);
    border-bottom: 1px solid rgb(220, 220, 220);
}

.tab-nav ul li a {
    text-decoration: none;
    color: #333;
    height: 33px;
    display: block;
    padding: 2px 15px;
    border-radius: 6px 6px 0 0;
    transition: all 0.3s;
}

.tab-content {
    width: 100%;
    height: 100px;
    background: rgb(220, 220, 220);
}

.tab-item {
    display: none;
}

.tab-item.active {
    display: block;
    text-align: center;
    padding: 10px;
    font-size: 20px;
}
        `},
        'index.js': {
            title: 'JS',
            defaultValue: `const tabNav = document.querySelector('.tab-nav ul');
const tabItem = document.querySelectorAll('.tab-item');
//利用事件委托减少注册
tabNav.addEventListener('click', (e) => {
    let tag = e.target.tagName;
    if (tag === 'A') {
        document.querySelector('.tab-nav .active').classList.remove('active');
        document.querySelector('.tab-content .active').classList.remove('active');
        e.target.classList.add('active');
        tabItem[e.target.dataset.id].classList.add('active')
    }
});
        `}
    },
    defaultConfig: {
        height: '600px',
        autoRun: true,
        autoRunInterval: 1000,
        editorRange: '70%',
        draggable: true,
        direction: 'column-reverse',
      }
})

new MiniSandbox({
    el: '#tab-sandbox',
    files: {
        'index.html': {
            title: 'HTML',
            defaultValue: `<div class="tab-box">
    <div class="tab-nav">
        <ul>
            <li class="active"><a href="javascript:;">栏1</a></li>
            <li><a href="javascript:;">栏2</a></li>
            <li><a href="javascript:;">栏3</a></li>
            <li><a href="javascript:;">栏4</a></li>
            <li><a href="javascript:;">栏5</a></li>
        </ul>
    </div>
    <div class="tab-content">
        <div class="tab-item active">项目一</div>
        <div class="tab-item">项目二</div>
        <div class="tab-item">项目三</div>
        <div class="tab-item">项目四</div>
        <div class="tab-item">项目五</div>
    </div>
</div>`,
            cssLibs: ['index.css'],
            jsLibs: ['index.js'],
        },
        'index.css': {
            title: 'CSS',
            defaultValue: `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.tab-box {
    width: 500px;
    border-radius: 6px;
    overflow: hidden;
    margin: 10px;
}

.tab-nav {
    width: 100%;
    height: 40px;
    display: flex;
    background: rgb(233, 233, 233);
    justify-content: center;
    border-bottom: 1px solid #333;
}

.tab-nav ul {
    list-style: none;
    display: flex;
    align-items: flex-end;
}

.tab-nav ul li {
    margin: 0 5px;
    padding: 2px 15px 0;
    font-size: 18px;
    border-radius: 6px 6px 0 0;
    transition: all 0.3s;
    border-bottom: 1px solid transparent;
    margin-bottom: -1px;
}
.tab-nav ul li.active {
    background: rgb(220, 220, 220);
    border-bottom: 1px solid rgb(220, 220, 220);
}
.tab-nav ul li a {
    text-decoration: none;
    color: #333;
    height: 30px;
    display: block;
}

.tab-content {
    width: 100%;
    height: 100px;
    background: rgb(220, 220, 220);
}
.tab-item{
    display: none;
}
.tab-item.active{
    display: block;
    text-align: center;
    padding: 10px;
    font-size: 20px;
}
        `},
        'index.js': {
            title: 'JS',
            defaultValue: `const tabNav = document.querySelectorAll('.tab-nav ul li');
const tabItem = document.querySelectorAll('.tab-item');
tabNav.forEach((item,index)=>{
    item.addEventListener('mouseenter',()=>{
        document.querySelector('.tab-nav .active').classList.remove('active');
        document.querySelector('.tab-content .active').classList.remove('active');
        item.classList.add('active');
        tabItem[index].classList.add('active');
    });
});
        `}
    },
    defaultConfig: {
        height: '600px',
        autoRun: true,
        autoRunInterval: 1000,
        editorRange: '70%',
        draggable: true,
        direction: 'column-reverse',
      }
})

new MiniSandbox({
    el: '#input-count-sandbox',
    files: {
        'index.html': {
            title: 'HTML',
            defaultValue: `<div class="comment-box">
    <div class="comment-avatar"></div>
    <textarea id="comment-tx" placeholder="发一条友善的评论，回车发布评论" maxlength="200"></textarea>
    <button>发布</button>
</div>
<div class="comment-count">
    <span>0/200字</span>
</div>
<div class="content-list">
    <div class="content-item">
        <div class="content-avatar"></div>
        <div class="content-warp">
            <div class="content-name">chuckle</div>
            <div class="content-comment">评论一</div>
        </div>
    </div>
    <div class="content-item">
        <div class="content-avatar"></div>
        <div class="content-warp">
            <div class="content-name">chuckle</div>
            <div class="content-comment">22222222222222222222222222222222222222222222222222222222222222222222222222
            </div>
        </div>
    </div>
</div>`,
            cssLibs: ['index.css'],
            jsLibs: ['index.js'],
        },
        'index.css': {
            title: 'CSS',
            defaultValue: `* {
    box-sizing: border-box;
}

.comment-box {
    display: flex;
    width: 500px;
    position: relative;
    transition: all 0.3s;
}

.comment-avatar {
    border-radius: 50%;
    width: 50px;
    height: 50px;
    background: url('https://cdn.qcqx.cn/img/head.webp') no-repeat center / cover;
    margin-right: 15px;
}

#comment-tx {
    outline: none;
    border-color: transparent;
    resize: none;
    background: #f5f5f5;
    border-radius: 4px;
    flex: 1;
    padding: 10px;
    transition: all 0.3s;
    font-size: 12px;
    height: 60px;
}

#comment-tx:focus {
    border-color: #e4e4e4;
    background: #fff;
    height: 85px;
}

.comment-box button {
    background: #00aeec;
    color: #fff;
    border: none;
    border-radius: 4px;
    margin-left: 10px;
    width: 70px;
    cursor: pointer;
    transition: all 0.3s;
}

.comment-count {
    width: 500px;
    height: auto;
    display: flex;
    justify-content: flex-end;
}

.comment-count span {
    margin-right: 80px;
    color: #999;
    margin-top: 5px;
    transition: all 0.3s;
    opacity: 0;
}

.content-list {
    display: flex;
    width: 500px;
    position: relative;
    transition: all 0.3s;
    flex-direction: column;
    flex-wrap: nowrap;
}

.content-item {
    display: flex;
    border-bottom: 1px solid #e4e4e4;
    padding-bottom: 10px;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    margin-bottom: 15px;
}

.content-avatar {
    border-radius: 50%;
    width: 50px;
    height: 50px;
    background: url('https://cdn.qcqx.cn/img/head.webp') no-repeat center / cover;
    margin-right: 15px;
}

.content-warp {
    width: calc(100% - 65px);
    padding-right: 8px;
}

.content-name {
    font-size: 16px;
    margin-bottom: 6px;
}

.content-comment {
    font-size: 18px;
    white-space: normal;
    word-break: break-all;
    word-wrap: break-word;
    text-overflow: ellipsis;
}
        `},
        'index.js': {
            title: 'JS',
            defaultValue: `// 评论输入框
const count = document.querySelector('.comment-count span');
const tx = document.querySelector('#comment-tx');
tx.addEventListener('focus', () => {
    count.style.opacity = 1;
});
tx.addEventListener('blur', () => {
    count.style.opacity = 0;
});
tx.addEventListener('input', () => {
    count.innerHTML = \`\${tx.value.length}/200字\`;
});
// 评论展示
const contentList = document.querySelector('.content-list');
function applyComment() {
    let comment = tx.value;
    let html = \`<div class="content-item">
        <div class="content-avatar"></div>
        <div class="content-warp">
            <div class="content-name">chuckle</div>
            <div class="content-comment">\${comment}</div>
        </div>
    </div>\`;
    contentList.insertAdjacentHTML('afterbegin', html);
}
tx.addEventListener('keyup', (e) => {
    if (e.key == 'Enter') {
        if (tx.value.trim()) {
            applyComment();
        }
        tx.value = '';
        count.innerHTML = \`\${tx.value.length}/200字\`;
    }
})
const button = document.querySelector('.comment-box button');
button.addEventListener('click', () => {
    if (tx.value.trim()) {
        applyComment();
    }
    tx.value = '';
    count.innerHTML = \`\${tx.value.length}/200字\`;
})
        `}
    },
    defaultConfig: {
        height: '600px',
        autoRun: true,
        autoRunInterval: 1000,
        editorRange: '55%',
        draggable: true,
        direction: 'column-reverse',
      }
})

new MiniSandbox({
    el: '#search-sandbox',
    files: {
        'index.html': {
            title: 'HTML',
            defaultValue: `<div class="search-box">
    <input type="search" placeholder="输入搜索内容">
    <ul class="result-list">
        <li><a href="#">搜索词1</a></li>
        <li><a href="#">搜索词2</a></li>
        <li><a href="#">搜索词3</a></li>
        <li><a href="#">搜索词4</a></li>
        <li><a href="#">搜索词5</a></li>
        <li><a href="#">搜索词6</a></li>
    </ul>
</div>`,
            cssLibs: ['index.css'],
            jsLibs: ['index.js'],
        },
        'index.css': {
            title: 'CSS',
            defaultValue: `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
ul{
    list-style: none;
}
.search-box{
    position: relative;
    width: 200px;
    margin: 20px;
    border-radius: 6px;
}
.search-box input{
    width: 100%;
    height: 40px;
    font-size: 16px;
    line-height: 100%;
    border: 1px solid #65a8e2;
    outline: none;
    padding: 0 6px;
    border-radius: 6px;
    transition: all 0.3s;
}
.result-list{
    width: 100%;
    position: absolute;
    top: 40px;
    border: 1px solid #65a8e2;
    height: auto;
    border-top: 0;
    background: rgba(200, 236, 243, 0.7);
    border-radius: 0 0 6px 6px;
    display: none;
}
.result-list li{
    height: auto;
}
.result-list a{
    transition: all 0.3s;
    text-decoration: none;
    color: #363636;
    padding: 5px 10px;
    display: block;
    font-size: 14px;
}
.result-list a:hover{
    background-color: rgba(210, 210, 210, 0.9);
}
        `},
        'index.js': {
            title: 'JS',
            defaultValue: `const input = document.querySelector('input');
const list = document.querySelector('.result-list');
input.addEventListener('focus',()=>{
    list.style.display = "block";
    input.style.borderRadius = '6px 6px 0 0'
});
input.addEventListener('blur',()=>{
    list.style.display = "none";
    input.style.borderRadius = '6px';
});
        `}
    },
    defaultConfig: {
        height: '400px',
        autoRun: true,
        autoRunInterval: 1000,
        editorRange: '65%',
        draggable: true,
        direction: 'column-reverse',
      }
})

new MiniSandbox({
    el: '#rotBox-sandbox',
    files: {
        'index.html': {
            title: 'HTML',
            defaultValue: `<div class="rot-box">
    <div class="rot-img">
        <img src="https://cdn.qcqx.cn/images/41-1.webp">
    </div>
    <div class="rot-footer">
        <div class="rot-title">标题零</div>
        <ul class="rot-select">
            <li class="active"></li>
        </ul>
        <div class="rot-toggle">
            <button class="rot-prev">&lt;</button>
            <button class="rot-next">&gt;</button>
        </div>
    </div>
</div>`,
            cssLibs: ['index.css'],
            jsLibs: ['index.js'],
        },
        'index.css': {
            title: 'CSS',
            defaultValue: `.rot-box {
    max-width: 460px;
    height: 320px;
    overflow: hidden;
    border-radius: 12px;
    box-shadow: 0 3px 8px 6px rgba(7, 17, 27, 0.05);
    margin: 10px;
}

.rot-img {
    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    position: relative;
}

.rot-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.rot-footer {
    height: 20%;
    background-color: rgb(100, 67, 68);
    padding: 12px 12px 0 12px;
    position: relative;
}

.rot-toggle {
    position: absolute;
    right: 10px;
    top: 15px;
    display: flex;
}

.rot-toggle button {
    margin-right: 12px;
    width: 28px;
    height: 28px;
    appearance: none;
    border: none;
    background: rgba(255, 255, 255, 0.1);
    color: #fff;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.3s;
}

.rot-toggle button:hover {
    background: rgba(255, 255, 255, 0.2);
}

.rot-title {
    margin: 0;
    color: #fff;
    font-size: 18px;
    margin-bottom: 10px;
    margin-left: 10px;
}

ul.rot-select {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    align-items: center;
    margin-left: 10px;
    height: 12px;
}

ul.rot-select li {
    width: 8px;
    height: 8px;
    margin: 4px;
    border-radius: 50%;
    background: #fff;
    opacity: 0.4;
    cursor: pointer;
    transition: all 0.3s;
}

ul.rot-select li.active {
    width: 12px;
    height: 12px;
    opacity: 1;
}
@media screen and (max-width:500px) {
    .rot-box {
        height: 320px;
    }
}
        `},
        'index.js': {
            title: 'JS',
            defaultValue: `const rotDate = [
    {
        url: 'https://cdn.qcqx.cn/images/43-1.webp',
        title: '标题一'
    },
    {
        url: 'https://cdn.qcqx.cn/images/42-1.webp',
        title: '标题二'
    },
    {
        url: 'https://cdn.qcqx.cn/images/41-1.webp',
        title: '标题三'
    },
    {
        url: 'https://cdn.qcqx.cn/images/38-1.webp',
        title: '标题四'
    },
    {
        url: 'https://cdn.qcqx.cn/images/39-1.webp',
        title: '标题五'
    },
];
//生成[0,arr长度)的随机整数
function getRandom(arr) {
    return parseInt(Math.random() * arr.length);
}
const rotSelect = document.querySelector('.rot-select');
// 数组中有多少对象加几个li
rotSelect.innerHTML = '';// 先清空ul的内容
for (let i = 0; i < rotDate.length; i++) {
    rotSelect.innerHTML += '<li></li>';
}
//让第一个li变成小白点
document.querySelector('.rot-select li:first-child').classList.toggle('active');
// 一开始随机选一张
// 获取要操作的元素
const img = document.querySelector('.rot-img img');
const title = document.querySelector('.rot-title');
const rot_li = document.querySelectorAll('.rot-select li');
// 数据数组长度
const dateLength = rotDate.length;
// 轮播展示序号，默认第一个
var num = 0;
// 轮播的对象,默认第一个
var rot = rotDate[num];
// 修改轮播容器的内容
function applyDate() {
    //换标题和图片
    rot = rotDate[num];
    img.src = rot.url;
    title.innerHTML = rot.title;
    //移除之前的小白点，给当前li添加小白点
    if (document.querySelector('.rot-select .active')) {
        document.querySelector('.rot-select .active').classList.remove('active');
    }
    rot_li[num].classList.toggle('active');
}
// 随机展示一个
function ranDate(){
    var random = getRandom(rotDate);
    rot = rotDate[random];
    num = random;
    applyDate();
}
// 上一张
function prevDate() {
    num > 0 ? --num : num = dateLength - 1;
    applyDate();
}
// 下一张
function nextDate() {
    //控制下一张是哪个
    num = ++num % dateLength;
    applyDate();
}
//获取两个按钮
const rotPrev = document.querySelector('.rot-prev');
const rotNext = document.querySelector('.rot-next');
//注册事件
rotPrev.addEventListener('click', () => {
    prevDate();
})
rotNext.addEventListener('click', () => {
    nextDate();
})
// 点击小圆点切换展示
rot_li.forEach((item, index, arr) => {
    item.addEventListener('click', () => {
        //让轮播展示序号变为当前点击的li的序号
        num = index;
        applyDate();
    });
});
// 鼠标悬停停止轮播
const rotBox = document.querySelector('.rot-box');
rotBox.addEventListener('mouseenter',()=>{
    clearInterval(itv);
});
// 鼠标移出恢复轮播
rotBox.addEventListener('mouseleave',()=>{
    //未确保不重复定时，先清除一次
    clearInterval(itv);
    itv = setInterval(nextDate, 2000);
});
// 一开始随机展示一个，注释掉则默认展示第一个
//ranDate();
// 定时器轮播
var itv = setInterval(nextDate, 2000);
            
        `}
    },
    defaultConfig: {
        height: '700px',
        autoRun: true,
        autoRunInterval: 1000,
        editorRange: '46%',
        draggable: true,
        direction: 'column-reverse',
      }
})