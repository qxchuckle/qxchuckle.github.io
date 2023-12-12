new MiniSandbox({el:"#time-count-sandbox",files:{"index.html":{title:"HTML",defaultValue:'<div class="time-box">\n    <div class="time-now">今天是1970年1月1日</div>\n    <div class="time-title">倒计时</div>\n    <div class="clock">\n        <div class="hour">00</div>\n        <div class="colon">:</div>\n        <div class="minutes">00</div>\n        <div class="colon">:</div>\n        <div class="second">00</div>\n    </div>\n    <div class="target">目标时间00:00:00</div>\n</div>',cssLibs:["index.css"],jsLibs:["index.js"]},"index.css":{title:"CSS",defaultValue:"* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\n\n.time-box {\n    padding: 20px 15px;\n    background: rgb(30, 171, 210);\n    width: fit-content;\n    border-radius: 6px;\n    overflow: hidden;\n    margin: 10px;\n    font-size: 18px;\n}\n\n.time-now {\n    width: 100%;\n    text-align: center;\n}\n\n.time-title {\n    font-size: 26px;\n    text-align: center;\n    width: 100%;\n    margin: 6px 0;\n}\n\n.clock {\n    display: flex;\n    width: 100%;\n    justify-content: center;\n    flex-direction: row;\n    flex-wrap: wrap;\n    align-content: center;\n    margin: 10px 0;\n}\n.hour,.minutes,.second{\n    font-size: 20px;\n    margin: 2px;\n    padding: 2px 3px;\n    border-radius: 4px;\n    background: rgba(36, 36, 36, 0.65);\n    color: #fff;\n}\n.colon{\n    font-size: 20px;\n    font-weight: bolder;\n    padding: 2px;\n}\n.target{\n    width: 100%;\n    text-align: center;\n    margin: 6px 0 0;\n}\n        "},"index.js":{title:"JS",defaultValue:"const hour = document.querySelector('.hour');\nconst minutes = document.querySelector('.minutes');\nconst second = document.querySelector('.second');\nconst time_now = document.querySelector('.time-now');\nconst target = document.querySelector('.target');\nconst now = new Date();\nconst time = '23:00:00';\nconst targetTime = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()} ${time}`;\nconst last = new Date(targetTime);\nlet count = (last.getTime() - now.getTime()) / 1000;\nfunction countDown() {\n    let h = parseInt(count / 60 / 60 % 24);\n    h = h < 10 ? '0' + h : h;\n    let m = parseInt(count / 60 % 60);\n    m = m < 10 ? '0' + m : m;\n    let s = parseInt(count % 60);\n    s = s < 10 ? '0' + s : s;\n    hour.innerHTML = h;\n    minutes.innerHTML = m;\n    second.innerHTML = s;\n    count--;\n    if (count <= 0) {\n        count = 0;\n    }\n}\ntime_now.innerHTML = `今天是${now.getFullYear()}年${now.getMonth() + 1}月${now.getDate()}日`;\ntarget.innerHTML = `目标时间${time}`;\nif (count <= 0) {count = 0;}\ncountDown();\nsetInterval(countDown, 1000);\n        "}},defaultConfig:{height:"500px",autoRun:!0,autoRunInterval:1e3,editorRange:"55%",draggable:!0,direction:"column-reverse"}}),new MiniSandbox({el:"#nav-bl-tab-sandbox",files:{"index.html":{title:"HTML",defaultValue:'<div id="nav">导航栏</div>\n<div class="tab-box">\n    <div class="tab-nav">\n        <a href="javascript:;" class="active">栏1</a>\n        <a href="javascript:;">栏2</a>\n        <a href="javascript:;">栏3</a>\n        <a href="javascript:;">栏4</a>\n        <a href="javascript:;">栏114514</a>\n        <div class="tab-bar"></div>\n    </div>\n\n    <div class="item-box">\n        <div class="item active">项目一</div>\n        <div class="item">项目二</div>\n        <div class="item">项目三</div>\n        <div class="item">项目四</div>\n        <div class="item">项目114514</div>\n    </div>\n</div>\n<div class="ele-nav">\n    <div class="ele-item">去第一个</div>\n    <div class="ele-item">去第二个</div>\n    <div class="ele-item">去第三个</div>\n    <div class="ele-item">去第四个</div>\n    <div class="back-top">回到顶部</div>\n</div>\n<div class="box">第一个盒子,滚动到此(往上55像素)显示导航栏和电梯导航</div>\n<div class="box">第二个盒子</div>\n<div class="box">第三个盒子</div>\n<div class="box">第四个盒子</div>',cssLibs:["index.css"],jsLibs:["index.js"]},"index.css":{title:"CSS",defaultValue:"* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\nbody {\n    padding-bottom: 500px;\n}\n\n.tab-box {\n    width: 500px;\n    height: auto;\n    border-radius: 6px;\n    overflow: hidden;\n    margin: 10px;\n}\n\n.tab-nav {\n    display: flex;\n    list-style: none;\n    border-bottom: 1px solid #333;\n    background: rgb(233, 233, 233);\n    height: 40px;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n}\n\n.tab-nav a {\n    margin: 5px;\n    padding: 0 10px;\n    text-decoration: none;\n    color: #000;\n    height: 40px;\n    line-height: 40px;\n}\n\n.tab-nav a.active {\n    color: rgb(23, 180, 215);\n}\n\n.tab-bar {\n    position: absolute;\n    width: 40px;\n    height: 3px;\n    background: rgb(23, 180, 215);\n    bottom: -1px;\n    transition: all 0.3s;\n}\n\n.item-box {\n    background: rgb(220, 220, 220);\n}\n\n.item {\n    text-align: center;\n    padding: 10px;\n    display: none;\n}\n\n.item.active {\n    display: block;\n    height: 100px;\n}\n\n/* 导航栏 */\n#nav {\n    width: 100%;\n    height: 50px;\n    text-align: center;\n    line-height: 50px;\n    background: rgba(120, 182, 191, 0.5);\n    font-size: 20px;\n    position: fixed;\n    top: -50px;\n    transition: all 0.3s;\n    z-index: 9999;\n}\n\n.box {\n    margin-top: 10px;\n    width: 200px;\n    height: 200px;\n    background: rgb(144, 193, 230);\n    margin-bottom: 200px;\n    border-radius: 6px;\n}\n\n/* 电梯导航 */\n.ele-nav {\n    position: fixed;\n    bottom: 8%;\n    background: rgb(233, 233, 233);\n    right: 10%;\n    border: 1px solid #333;\n    border-bottom: 0;\n    border-radius: 6px;\n    overflow: hidden;\n    transition: all 0.3s;\n    opacity: 0;\n    z-index: -99;\n}\n.ele-item.active{\n    color: rgb(23, 180, 215);\n    background: rgb(252, 200, 200);\n}\n.ele-item,\n.back-top {\n    padding: 10px;\n    border-bottom: 1px solid #333;\n    user-select: none;\n    transition: all 0.3s;\n}\n.ele-item:hover,\n.back-top:hover{\n    color: rgb(23, 180, 215);\n}\n        "},"index.js":{title:"JS",defaultValue:"//网页导航栏,还有电梯导航的显示和隐藏\nconst nav = document.querySelector('#nav');\nconst box = document.querySelectorAll('.box');\nconst ele_nav = document.querySelector('.ele-nav');\nwindow.addEventListener('scroll', () => {\n    let n = window.scrollY;\n    let m = box[0].offsetTop;\n    let tf = n >= m-55;//减去55像素，不让电梯导航点击去第一个后消失\n    nav.style.top = tf ? '0px' : '-50px';\n    ele_nav.style.opacity = tf ? '1' : '0';\n    ele_nav.style.zIndex = tf ? '99' : '-99';\n});\n//bilibili导航\nconst bar = document.querySelector('.tab-bar');\nconst tabNav = document.querySelector('.tab-nav');\nconst tab_a = document.querySelectorAll('.tab-nav a');\nconst item = document.querySelectorAll('.item-box .item');\n//给每个a依次添加data-id\ntab_a.forEach((item, index) => {\n    item.dataset.id = index;\n});\n//将a的点击事件委托给tab-nav\ntabNav.addEventListener('click', (e) => {\n    let tag = e.target.tagName;\n    if (tag === 'A') {\n        //tab导航切换\n        document.querySelector('.tab-nav a.active').classList.remove('active');\n        document.querySelector('.item.active').classList.remove('active');\n        e.target.classList.add('active');\n        item[e.target.dataset.id].classList.add('active');\n        //bar移动和动态改变宽度\n        bar.style.width = `${e.target.offsetWidth}px`;\n        bar.style.left = `${e.target.offsetLeft}px`;\n    }\n});\ntab_a[0].click();//先初始化一次bar的位置\n//电梯导航\n//给每个电梯导航依次添加data-name\ndocument.querySelectorAll('.ele-item').forEach((item, index) => {\n    item.dataset.name = `b${index+1}`;\n});\n//给每个box依次添加电梯导航对应的自定义属性的class\nbox.forEach((item, index) => {\n    item.classList.add(`b${index+1}`);\n});\n//移除ele的active\nfunction reactive(){\n    let ele_active = document.querySelector('.ele-item.active');\n    if(ele_active){\n        //如果有，先清除\n        ele_active.classList.remove('active');\n    }\n}\n//去指定盒子,事件委托\nele_nav.addEventListener('click', (e) => {\n    let cname = e.target.className;\n    if (cname === 'ele-item'||cname === 'ele-item active') {\n        reactive();\n        //给点击的item添加active\n        e.target.classList.add('active');\n        //去对应的盒子\n        //通过自定义属性获取对应的盒子class名\n        let box = document.querySelector(`.${e.target.dataset.name}`);\n        // 其实监听滚动后，没必要再手动去给active，但想点击后导航立刻变色的话，可以取消下面的注释\n        // //先立刻移除页面滚动监听\n        // window.removeEventListener('scroll', scroll_light_ele);\n        // //一秒后重新监听\n        // setTimeout(() => {\n        //     //防止重复注册，先移除页面滚动监听\n        //     window.removeEventListener('scroll', scroll_light_ele);\n        //     window.addEventListener('scroll', scroll_light_ele);\n        // }, 800);\n        //更新当前页面在哪个盒子的范围位置\n        box_num = e.target.dataset.name.replace(/[^d]/g, \" \");\n        //滚动到指定位置\n        window.scrollTo({\n            top: box.offsetTop - 50,\n            left: 0,\n            behavior: 'smooth'\n        });\n    }\n    //点击返回顶部\n    if (cname === 'back-top') {\n        reactive();\n        window.scrollTo({\n            top: 0,\n            left: 0,\n            behavior: 'smooth'\n        });\n        box_num = -1;\n    }\n});\n//获取盒子的高度数组减去55px\nconst box_top_arr = Array.from(box).map((item)=>{\n    return item.offsetTop-55;\n})\nvar box_num = -1;//记录当前在哪个盒子范围内\n//页面滚动到对应box让电梯导航对应导航高亮\nfunction scroll_light_ele(){\n    let n = window.scrollY;\n    let num = box_top_arr.reduce((prev, item, index)=>{\n        return n >= item ? index : prev;\n    },-1);\n    if(num === box_num){\n        //说明还在这个盒子范围内，直接返回\n        return;\n    }else{\n        //更新位置\n        box_num = num;\n    }\n    if(num > -1){\n        reactive();\n        document.querySelector(`[data-name=\"b${num+1}\"]`).classList.add('active');\n    }else{\n        box_num = -1;\n    }\n}\nwindow.addEventListener('scroll', scroll_light_ele);\n        "}},defaultConfig:{height:"600px",autoRun:!0,autoRunInterval:1e3,editorRange:"45%",draggable:!0,direction:"column-reverse"}}),new MiniSandbox({el:"#input-check-sandbox",files:{"index.html":{title:"HTML",defaultValue:'<table>\n<tr>\n    <th>\n        <input type="checkbox" id="check-all">\n        <span>全选</span>\n    </th>\n    <th>书名</th>\n    <th>作者</th>\n    <th>价格</th>\n</tr>\n<tr>\n    <td>\n        <input type="checkbox" class="check-one">\n    </td>\n    <td>毛泽东选集</td>\n    <td>毛泽东</td>\n    <td>56</td>\n</tr>\n<tr>\n    <td>\n        <input type="checkbox" class="check-one">\n    </td>\n    <td>资本论</td>\n    <td>马克思</td>\n    <td>129</td>\n</tr>\n<tr>\n    <td>\n        <input type="checkbox" class="check-one">\n    </td>\n    <td>三体</td>\n    <td>刘慈欣</td>\n    <td>46</td>\n</tr>\n</table>',cssLibs:["index.css"],jsLibs:["index.js"]},"index.css":{title:"CSS",defaultValue:"* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\ntable {\n    border-collapse: collapse;\n    border-spacing: 0;\n    border: 1px solid #c0c0c0;\n    width: 500px;\n    text-align: center;\n}\n\nth {\n    background-color: rgb(40, 170, 220);\n    font: bold 16px;\n    color: #fff;\n    height: 22px;\n}\ntd {\n    border: 1px solid #d0d0d0;\n    color: #363636;\n    padding: 6px 10px;\n    background: #f9f9f9;\n}\ntr td:not(:first-child){\n    min-width: 50px;\n}\ntr th:first-child{\n    width: 70px;\n}\n        "},"index.js":{title:"JS",defaultValue:"const checkAll = document.querySelector('#check-all');\nconst checks = document.querySelectorAll('.check-one');\ncheckAll.addEventListener('click',()=>{\n    checks.forEach((item)=>{\n        item.checked = checkAll.checked;\n    });\n});\nchecks.forEach((item)=>{\n    item.addEventListener('click',()=>{\n        checkAll.checked = document.querySelectorAll('.check-one:checked').length === checks.length;\n    })\n})\n        "}},defaultConfig:{height:"450px",autoRun:!0,autoRunInterval:1e3,editorRange:"65%",draggable:!0,direction:"column-reverse"}}),new MiniSandbox({el:"#tab2-sandbox",files:{"index.html":{title:"HTML",defaultValue:'<div class="tab-box">\n    <div class="tab-nav">\n        <ul>\n            <li><a href="javascript:;" data-id="0" class="active">栏1</a></li>\n            <li><a href="javascript:;" data-id="1">栏2</a></li>\n            <li><a href="javascript:;" data-id="2">栏3</a></li>\n            <li><a href="javascript:;" data-id="3">栏4</a></li>\n            <li><a href="javascript:;" data-id="4">栏5</a></li>\n        </ul>\n    </div>\n    <div class="tab-content">\n        <div class="tab-item active">项目一</div>\n        <div class="tab-item">项目二</div>\n        <div class="tab-item">项目三</div>\n        <div class="tab-item">项目四</div>\n        <div class="tab-item">项目五</div>\n    </div>\n</div>',cssLibs:["index.css"],jsLibs:["index.js"]},"index.css":{title:"CSS",defaultValue:"* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n.tab-box {\n    width: 500px;\n    border-radius: 6px;\n    overflow: hidden;\n    margin: 10px;\n}\n\n.tab-nav {\n    width: 100%;\n    height: 40px;\n    display: flex;\n    background: rgb(233, 233, 233);\n    justify-content: center;\n    border-bottom: 1px solid #333;\n}\n\n.tab-nav ul {\n    list-style: none;\n    display: flex;\n    align-items: flex-end;\n}\n\n.tab-nav ul li {\n    margin: 0 5px;\n    font-size: 18px;\n    border-bottom: 1px solid transparent;\n    margin-bottom: -1px;\n}\n\n.tab-nav ul li a.active {\n    background: rgb(220, 220, 220);\n    border-bottom: 1px solid rgb(220, 220, 220);\n}\n\n.tab-nav ul li a {\n    text-decoration: none;\n    color: #333;\n    height: 33px;\n    display: block;\n    padding: 2px 15px;\n    border-radius: 6px 6px 0 0;\n    transition: all 0.3s;\n}\n\n.tab-content {\n    width: 100%;\n    height: 100px;\n    background: rgb(220, 220, 220);\n}\n\n.tab-item {\n    display: none;\n}\n\n.tab-item.active {\n    display: block;\n    text-align: center;\n    padding: 10px;\n    font-size: 20px;\n}\n        "},"index.js":{title:"JS",defaultValue:"const tabNav = document.querySelector('.tab-nav ul');\nconst tabItem = document.querySelectorAll('.tab-item');\n//利用事件委托减少注册\ntabNav.addEventListener('click', (e) => {\n    let tag = e.target.tagName;\n    if (tag === 'A') {\n        document.querySelector('.tab-nav .active').classList.remove('active');\n        document.querySelector('.tab-content .active').classList.remove('active');\n        e.target.classList.add('active');\n        tabItem[e.target.dataset.id].classList.add('active')\n    }\n});\n        "}},defaultConfig:{height:"600px",autoRun:!0,autoRunInterval:1e3,editorRange:"70%",draggable:!0,direction:"column-reverse"}}),new MiniSandbox({el:"#tab-sandbox",files:{"index.html":{title:"HTML",defaultValue:'<div class="tab-box">\n    <div class="tab-nav">\n        <ul>\n            <li class="active"><a href="javascript:;">栏1</a></li>\n            <li><a href="javascript:;">栏2</a></li>\n            <li><a href="javascript:;">栏3</a></li>\n            <li><a href="javascript:;">栏4</a></li>\n            <li><a href="javascript:;">栏5</a></li>\n        </ul>\n    </div>\n    <div class="tab-content">\n        <div class="tab-item active">项目一</div>\n        <div class="tab-item">项目二</div>\n        <div class="tab-item">项目三</div>\n        <div class="tab-item">项目四</div>\n        <div class="tab-item">项目五</div>\n    </div>\n</div>',cssLibs:["index.css"],jsLibs:["index.js"]},"index.css":{title:"CSS",defaultValue:"* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n.tab-box {\n    width: 500px;\n    border-radius: 6px;\n    overflow: hidden;\n    margin: 10px;\n}\n\n.tab-nav {\n    width: 100%;\n    height: 40px;\n    display: flex;\n    background: rgb(233, 233, 233);\n    justify-content: center;\n    border-bottom: 1px solid #333;\n}\n\n.tab-nav ul {\n    list-style: none;\n    display: flex;\n    align-items: flex-end;\n}\n\n.tab-nav ul li {\n    margin: 0 5px;\n    padding: 2px 15px 0;\n    font-size: 18px;\n    border-radius: 6px 6px 0 0;\n    transition: all 0.3s;\n    border-bottom: 1px solid transparent;\n    margin-bottom: -1px;\n}\n.tab-nav ul li.active {\n    background: rgb(220, 220, 220);\n    border-bottom: 1px solid rgb(220, 220, 220);\n}\n.tab-nav ul li a {\n    text-decoration: none;\n    color: #333;\n    height: 30px;\n    display: block;\n}\n\n.tab-content {\n    width: 100%;\n    height: 100px;\n    background: rgb(220, 220, 220);\n}\n.tab-item{\n    display: none;\n}\n.tab-item.active{\n    display: block;\n    text-align: center;\n    padding: 10px;\n    font-size: 20px;\n}\n        "},"index.js":{title:"JS",defaultValue:"const tabNav = document.querySelectorAll('.tab-nav ul li');\nconst tabItem = document.querySelectorAll('.tab-item');\ntabNav.forEach((item,index)=>{\n    item.addEventListener('mouseenter',()=>{\n        document.querySelector('.tab-nav .active').classList.remove('active');\n        document.querySelector('.tab-content .active').classList.remove('active');\n        item.classList.add('active');\n        tabItem[index].classList.add('active');\n    });\n});\n        "}},defaultConfig:{height:"600px",autoRun:!0,autoRunInterval:1e3,editorRange:"70%",draggable:!0,direction:"column-reverse"}}),new MiniSandbox({el:"#input-count-sandbox",files:{"index.html":{title:"HTML",defaultValue:'<div class="comment-box">\n    <div class="comment-avatar"></div>\n    <textarea id="comment-tx" placeholder="发一条友善的评论，回车发布评论" maxlength="200"></textarea>\n    <button>发布</button>\n</div>\n<div class="comment-count">\n    <span>0/200字</span>\n</div>\n<div class="content-list">\n    <div class="content-item">\n        <div class="content-avatar"></div>\n        <div class="content-warp">\n            <div class="content-name">chuckle</div>\n            <div class="content-comment">评论一</div>\n        </div>\n    </div>\n    <div class="content-item">\n        <div class="content-avatar"></div>\n        <div class="content-warp">\n            <div class="content-name">chuckle</div>\n            <div class="content-comment">22222222222222222222222222222222222222222222222222222222222222222222222222\n            </div>\n        </div>\n    </div>\n</div>',cssLibs:["index.css"],jsLibs:["index.js"]},"index.css":{title:"CSS",defaultValue:"* {\n    box-sizing: border-box;\n}\n\n.comment-box {\n    display: flex;\n    width: 500px;\n    position: relative;\n    transition: all 0.3s;\n}\n\n.comment-avatar {\n    border-radius: 50%;\n    width: 50px;\n    height: 50px;\n    background: url('https://cdn.qcqx.cn/img/head.webp') no-repeat center / cover;\n    margin-right: 15px;\n}\n\n#comment-tx {\n    outline: none;\n    border-color: transparent;\n    resize: none;\n    background: #f5f5f5;\n    border-radius: 4px;\n    flex: 1;\n    padding: 10px;\n    transition: all 0.3s;\n    font-size: 12px;\n    height: 60px;\n}\n\n#comment-tx:focus {\n    border-color: #e4e4e4;\n    background: #fff;\n    height: 85px;\n}\n\n.comment-box button {\n    background: #00aeec;\n    color: #fff;\n    border: none;\n    border-radius: 4px;\n    margin-left: 10px;\n    width: 70px;\n    cursor: pointer;\n    transition: all 0.3s;\n}\n\n.comment-count {\n    width: 500px;\n    height: auto;\n    display: flex;\n    justify-content: flex-end;\n}\n\n.comment-count span {\n    margin-right: 80px;\n    color: #999;\n    margin-top: 5px;\n    transition: all 0.3s;\n    opacity: 0;\n}\n\n.content-list {\n    display: flex;\n    width: 500px;\n    position: relative;\n    transition: all 0.3s;\n    flex-direction: column;\n    flex-wrap: nowrap;\n}\n\n.content-item {\n    display: flex;\n    border-bottom: 1px solid #e4e4e4;\n    padding-bottom: 10px;\n    flex-direction: row;\n    flex-wrap: wrap;\n    align-items: flex-start;\n    margin-bottom: 15px;\n}\n\n.content-avatar {\n    border-radius: 50%;\n    width: 50px;\n    height: 50px;\n    background: url('https://cdn.qcqx.cn/img/head.webp') no-repeat center / cover;\n    margin-right: 15px;\n}\n\n.content-warp {\n    width: calc(100% - 65px);\n    padding-right: 8px;\n}\n\n.content-name {\n    font-size: 16px;\n    margin-bottom: 6px;\n}\n\n.content-comment {\n    font-size: 18px;\n    white-space: normal;\n    word-break: break-all;\n    word-wrap: break-word;\n    text-overflow: ellipsis;\n}\n        "},"index.js":{title:"JS",defaultValue:"// 评论输入框\nconst count = document.querySelector('.comment-count span');\nconst tx = document.querySelector('#comment-tx');\ntx.addEventListener('focus', () => {\n    count.style.opacity = 1;\n});\ntx.addEventListener('blur', () => {\n    count.style.opacity = 0;\n});\ntx.addEventListener('input', () => {\n    count.innerHTML = `${tx.value.length}/200字`;\n});\n// 评论展示\nconst contentList = document.querySelector('.content-list');\nfunction applyComment() {\n    let comment = tx.value;\n    let html = `<div class=\"content-item\">\n        <div class=\"content-avatar\"></div>\n        <div class=\"content-warp\">\n            <div class=\"content-name\">chuckle</div>\n            <div class=\"content-comment\">${comment}</div>\n        </div>\n    </div>`;\n    contentList.insertAdjacentHTML('afterbegin', html);\n}\ntx.addEventListener('keyup', (e) => {\n    if (e.key == 'Enter') {\n        if (tx.value.trim()) {\n            applyComment();\n        }\n        tx.value = '';\n        count.innerHTML = `${tx.value.length}/200字`;\n    }\n})\nconst button = document.querySelector('.comment-box button');\nbutton.addEventListener('click', () => {\n    if (tx.value.trim()) {\n        applyComment();\n    }\n    tx.value = '';\n    count.innerHTML = `${tx.value.length}/200字`;\n})\n        "}},defaultConfig:{height:"600px",autoRun:!0,autoRunInterval:1e3,editorRange:"55%",draggable:!0,direction:"column-reverse"}}),new MiniSandbox({el:"#search-sandbox",files:{"index.html":{title:"HTML",defaultValue:'<div class="search-box">\n    <input type="search" placeholder="输入搜索内容">\n    <ul class="result-list">\n        <li><a href="#">搜索词1</a></li>\n        <li><a href="#">搜索词2</a></li>\n        <li><a href="#">搜索词3</a></li>\n        <li><a href="#">搜索词4</a></li>\n        <li><a href="#">搜索词5</a></li>\n        <li><a href="#">搜索词6</a></li>\n    </ul>\n</div>',cssLibs:["index.css"],jsLibs:["index.js"]},"index.css":{title:"CSS",defaultValue:"* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\nul{\n    list-style: none;\n}\n.search-box{\n    position: relative;\n    width: 200px;\n    margin: 20px;\n    border-radius: 6px;\n}\n.search-box input{\n    width: 100%;\n    height: 40px;\n    font-size: 16px;\n    line-height: 100%;\n    border: 1px solid #65a8e2;\n    outline: none;\n    padding: 0 6px;\n    border-radius: 6px;\n    transition: all 0.3s;\n}\n.result-list{\n    width: 100%;\n    position: absolute;\n    top: 40px;\n    border: 1px solid #65a8e2;\n    height: auto;\n    border-top: 0;\n    background: rgba(200, 236, 243, 0.7);\n    border-radius: 0 0 6px 6px;\n    display: none;\n}\n.result-list li{\n    height: auto;\n}\n.result-list a{\n    transition: all 0.3s;\n    text-decoration: none;\n    color: #363636;\n    padding: 5px 10px;\n    display: block;\n    font-size: 14px;\n}\n.result-list a:hover{\n    background-color: rgba(210, 210, 210, 0.9);\n}\n        "},"index.js":{title:"JS",defaultValue:"const input = document.querySelector('input');\nconst list = document.querySelector('.result-list');\ninput.addEventListener('focus',()=>{\n    list.style.display = \"block\";\n    input.style.borderRadius = '6px 6px 0 0'\n});\ninput.addEventListener('blur',()=>{\n    list.style.display = \"none\";\n    input.style.borderRadius = '6px';\n});\n        "}},defaultConfig:{height:"400px",autoRun:!0,autoRunInterval:1e3,editorRange:"65%",draggable:!0,direction:"column-reverse"}}),new MiniSandbox({el:"#rotBox-sandbox",files:{"index.html":{title:"HTML",defaultValue:'<div class="rot-box">\n    <div class="rot-img">\n        <img src="https://cdn.qcqx.cn/images/41-1.webp">\n    </div>\n    <div class="rot-footer">\n        <div class="rot-title">标题零</div>\n        <ul class="rot-select">\n            <li class="active"></li>\n        </ul>\n        <div class="rot-toggle">\n            <button class="rot-prev">&lt;</button>\n            <button class="rot-next">&gt;</button>\n        </div>\n    </div>\n</div>',cssLibs:["index.css"],jsLibs:["index.js"]},"index.css":{title:"CSS",defaultValue:".rot-box {\n    max-width: 460px;\n    height: 320px;\n    overflow: hidden;\n    border-radius: 12px;\n    box-shadow: 0 3px 8px 6px rgba(7, 17, 27, 0.05);\n    margin: 10px;\n}\n\n.rot-img {\n    width: 100%;\n    height: 80%;\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: center;\n    position: relative;\n}\n\n.rot-img img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n}\n\n.rot-footer {\n    height: 20%;\n    background-color: rgb(100, 67, 68);\n    padding: 12px 12px 0 12px;\n    position: relative;\n}\n\n.rot-toggle {\n    position: absolute;\n    right: 10px;\n    top: 15px;\n    display: flex;\n}\n\n.rot-toggle button {\n    margin-right: 12px;\n    width: 28px;\n    height: 28px;\n    appearance: none;\n    border: none;\n    background: rgba(255, 255, 255, 0.1);\n    color: #fff;\n    border-radius: 4px;\n    cursor: pointer;\n    transition: all 0.3s;\n}\n\n.rot-toggle button:hover {\n    background: rgba(255, 255, 255, 0.2);\n}\n\n.rot-title {\n    margin: 0;\n    color: #fff;\n    font-size: 18px;\n    margin-bottom: 10px;\n    margin-left: 10px;\n}\n\nul.rot-select {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n    display: flex;\n    align-items: center;\n    margin-left: 10px;\n    height: 12px;\n}\n\nul.rot-select li {\n    width: 8px;\n    height: 8px;\n    margin: 4px;\n    border-radius: 50%;\n    background: #fff;\n    opacity: 0.4;\n    cursor: pointer;\n    transition: all 0.3s;\n}\n\nul.rot-select li.active {\n    width: 12px;\n    height: 12px;\n    opacity: 1;\n}\n@media screen and (max-width:500px) {\n    .rot-box {\n        height: 320px;\n    }\n}\n        "},"index.js":{title:"JS",defaultValue:"const rotDate = [\n    {\n        url: 'https://cdn.qcqx.cn/images/43-1.webp',\n        title: '标题一'\n    },\n    {\n        url: 'https://cdn.qcqx.cn/images/42-1.webp',\n        title: '标题二'\n    },\n    {\n        url: 'https://cdn.qcqx.cn/images/41-1.webp',\n        title: '标题三'\n    },\n    {\n        url: 'https://cdn.qcqx.cn/images/38-1.webp',\n        title: '标题四'\n    },\n    {\n        url: 'https://cdn.qcqx.cn/images/39-1.webp',\n        title: '标题五'\n    },\n];\n//生成[0,arr长度)的随机整数\nfunction getRandom(arr) {\n    return parseInt(Math.random() * arr.length);\n}\nconst rotSelect = document.querySelector('.rot-select');\n// 数组中有多少对象加几个li\nrotSelect.innerHTML = '';// 先清空ul的内容\nfor (let i = 0; i < rotDate.length; i++) {\n    rotSelect.innerHTML += '<li></li>';\n}\n//让第一个li变成小白点\ndocument.querySelector('.rot-select li:first-child').classList.toggle('active');\n// 一开始随机选一张\n// 获取要操作的元素\nconst img = document.querySelector('.rot-img img');\nconst title = document.querySelector('.rot-title');\nconst rot_li = document.querySelectorAll('.rot-select li');\n// 数据数组长度\nconst dateLength = rotDate.length;\n// 轮播展示序号，默认第一个\nvar num = 0;\n// 轮播的对象,默认第一个\nvar rot = rotDate[num];\n// 修改轮播容器的内容\nfunction applyDate() {\n    //换标题和图片\n    rot = rotDate[num];\n    img.src = rot.url;\n    title.innerHTML = rot.title;\n    //移除之前的小白点，给当前li添加小白点\n    if (document.querySelector('.rot-select .active')) {\n        document.querySelector('.rot-select .active').classList.remove('active');\n    }\n    rot_li[num].classList.toggle('active');\n}\n// 随机展示一个\nfunction ranDate(){\n    var random = getRandom(rotDate);\n    rot = rotDate[random];\n    num = random;\n    applyDate();\n}\n// 上一张\nfunction prevDate() {\n    num > 0 ? --num : num = dateLength - 1;\n    applyDate();\n}\n// 下一张\nfunction nextDate() {\n    //控制下一张是哪个\n    num = ++num % dateLength;\n    applyDate();\n}\n//获取两个按钮\nconst rotPrev = document.querySelector('.rot-prev');\nconst rotNext = document.querySelector('.rot-next');\n//注册事件\nrotPrev.addEventListener('click', () => {\n    prevDate();\n})\nrotNext.addEventListener('click', () => {\n    nextDate();\n})\n// 点击小圆点切换展示\nrot_li.forEach((item, index, arr) => {\n    item.addEventListener('click', () => {\n        //让轮播展示序号变为当前点击的li的序号\n        num = index;\n        applyDate();\n    });\n});\n// 鼠标悬停停止轮播\nconst rotBox = document.querySelector('.rot-box');\nrotBox.addEventListener('mouseenter',()=>{\n    clearInterval(itv);\n});\n// 鼠标移出恢复轮播\nrotBox.addEventListener('mouseleave',()=>{\n    //未确保不重复定时，先清除一次\n    clearInterval(itv);\n    itv = setInterval(nextDate, 2000);\n});\n// 一开始随机展示一个，注释掉则默认展示第一个\n//ranDate();\n// 定时器轮播\nvar itv = setInterval(nextDate, 2000);\n            \n        "}},defaultConfig:{height:"700px",autoRun:!0,autoRunInterval:1e3,editorRange:"46%",draggable:!0,direction:"column-reverse"}});