new MiniSandbox({
    el: '#list-example',
    files: {
        '1.html': {
            title: '例1',
            defaultValue: `<dl>
    <dt>第一条</dt>
    <dd>你若是觉得你有实力和我玩，良辰不介意奉陪到底</dd>
    <dd>我会让你明白，我从不说空话</dd>
    <dd>我是本地的，我有一百种方式让你呆不下去；而你，无可奈何</dd>
        
    <dt>第二条</dt>
    <dd>良辰最喜欢对那些自认能力出众的人出手</dd>
    <dd>你可以继续我行我素，不过，你的日子不会很舒心</dd>
    <dd>你只要记住，我叫叶良辰</dd>
    <dd>不介意陪你玩玩</dd>
    <dd>良辰必有重谢</dd>
</dl>
            `,
        },
        '2.html': {
            title: '例2',
            defaultValue: `<dl>
    <dt>北京</dt>
    <dd>国家首都，政治文化中心</dd>
    <dt>上海</dt>
    <dd>魔都，有外滩、东方明珠塔、黄浦江</dd>
    <dt>广州</dt>
    <dd>中国南大门，有珠江</dd>
</dl>
        `},
        '3.html': {
            title: '例2',
            defaultValue: `<dl>
    <dt>北京</dt>
    <dd>国家首都，政治文化中心</dd>
</dl>
<dl>
    <dt>上海</dt>
    <dd>魔都，有外滩、东方明珠塔、黄浦江</dd>
</dl>
<dl>
    <dt>广州</dt>
    <dd>中国南大门，有珠江</dd>
</dl>
        `}
    },
    defaultConfig: {
        height: '400px',
        autoRun: true,
        autoRunInterval: 1000,
        editorRange: '55%',
        draggable: true,
        direction: 'row',
      }
})

new MiniSandbox({
    el: '#table1-example',
    files: {
        '3.html': {
            title: '横向',
            defaultValue: `<table border="1">
    <tr>
        <td>张三</td>
        <td>18</td>
        <td>男</td>
        <td>广东</td>
    </tr>
    <tr>
        <td>小明</td>
        <td>19</td>
        <td colspan="2" align="right">广东</td>
    </tr>
</table>
`,
        },
        '4.html': {
            title: '纵向',
            defaultValue: `<table border="1">
    <tr>
        <td>张三</td>
        <td>18</td>
        <td>男</td>
        <td rowspan="2">广东</td>
    </tr>
    <tr>
        <td>小明</td>
        <td>19</td>
        <td>男</td>
    </tr>
</table>
        `},
    },
    defaultConfig: {
        height: '320px',
        autoRun: true,
        autoRunInterval: 1000,
        editorRange: '55%',
        draggable: true,
        direction: 'row',
      }
})


new MiniSandbox({
    el: '#table2-example',
    files: {
        '5.html': {
            title: 'HTML',
            defaultValue: `<table border="1">
    <tbody>
        <tr>
            <td>二</td>
            <td>22</td>
            <td>男</td>
            <td>广州</td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <td>四</td>
            <td>21</td>
            <td>男</td>
            <td>东莞</td>
        </tr>
    </tfoot>
    <tr>
        <td>三</td>
        <td>21</td>
        <td>男</td>
        <td>广州</td>
    </tr>
    <thead>
        <tr>
            <td>一</td>
            <td>23</td>
            <td>女</td>
            <td>深圳</td>
        </tr>
    </thead>
</table>
`,
        },
    },
    defaultConfig: {
        height: '400px',
        autoRun: true,
        autoRunInterval: 1000,
        editorRange: '55%',
        draggable: true,
        direction: 'row',
      }
})


new MiniSandbox({
    el: '#iframe-example',
    files: {
        '5.html': {
            title: 'HTML',
            defaultValue: `<a href="" target="myframe">默认显示空白页面</a><br>
<a href="../about" target="myframe">关于页面</a><br>
<iframe src="" width="100%" height="225" name="myframe"></iframe>`,
},
    },
    defaultConfig: {
        height: '400px',
        autoRun: true,
        autoRunInterval: 1000,
        editorRange: '20%',
        draggable: true,
        direction: 'column-reverse',
      }
})

new MiniSandbox({
    el: '#input1-example',
    files: {
        '5.html': {
            title: 'HTML',
            defaultValue: `<form action="" method="post" onreset="return myReset()">
    <label>用户名:</label>
    <input class="inputCss" type="text" name="userName" value="chuckle" readonly><br>
    <label>密码:</label>
    <input class="inputCss" type="password" name="password" placeholder="请输入密码"><br>
    <label>性别:</label>
    <input type="radio" name="sex" value="男" >男
    <input type="radio" name="sex" value="女" checked>女<br>
    <label>爱好:</label>
    <input type="checkbox" name="hobby" value="唱" checked>唱
    <input type="checkbox" name="hobby" value="跳" >跳
    <input type="checkbox" name="hobby" value="rap" checked>rap
    <input type="checkbox" name="hobby" value="篮球" >篮球<br>
    <label>生日:</label>
    <input type="datetime-local" class="inputCss"><br>
    <label>头像:</label>
    <input type="file" class="inputCss"><br>
    <input type="submit" value="登录">
    <input type="reset" value="重置">
</form>
`,
},
    },
    defaultConfig: {
        height: '400px',
        autoRun: true,
        autoRunInterval: 1000,
        editorRange: '55%',
        draggable: true,
        direction: 'column-reverse',
      }
})


new MiniSandbox({
    el: '#select1-example',
    files: {
        '5.html': {
            title: 'HTML',
            defaultValue: `<form>
    <select>
        <option>小学</option>
        <option>初中</option>
        <option>高中</option>
        <option>大学</option>
        <option selected="">研究生</option>
    </select>
    <select size="3">
        <option>小学</option>
        <option>初中</option>
        <option>高中</option>
        <option>大学</option>
        <option>研究生</option>
    </select>
    <select multiple="">
        <option>小学</option>
        <option>初中</option>
        <option selected="">高中</option>
        <option selected="">大学</option>
        <option>研究生</option>
    </select>
</form>
`,
},
    },
    defaultConfig: {
        height: '300px',
        autoRun: true,
        autoRunInterval: 1000,
        editorRange: '55%',
        draggable: true,
        direction: 'row',
      }
})


new MiniSandbox({
    el: '#textarea1-example',
    files: {
        '5.html': {
            title: 'HTML',
            defaultValue: `<form>
    <textarea rows="4" cols="20">112233445566</textarea>
    <textarea rows="4" cols="10">   99999   </textarea>
    <textarea readonly rows="4" cols="15">   99999   </textarea>
</form>`,
},
    },
    defaultConfig: {
        height: '250px',
        autoRun: true,
        autoRunInterval: 1000,
        editorRange: '55%',
        draggable: true,
        direction: 'column-reverse',
      }
})


new MiniSandbox({
    el: '#fieldset1-example',
    files: {
        '5.html': {
            title: 'HTML',
            defaultValue: `<form id="form1">
    <fieldset>
        <legend>账号信息</legend>
        姓名：<input value="张三" ><br>
        密码：<input type="password" value="pwd" size="30"><br>
    </fieldset>
</form>
<fieldset form="form1">
    <legend>其他信息</legend>
    性别：<input type="radio" name="gender" value="male" checked="">男
        <input type="radio" name="gender" value="female" >女<br>
    爱好：<input type="checkbox" name="love" value="eat">吃饭
        <input type="checkbox" name="love" value="sleep">睡觉
        <input type="checkbox" name="love" value="bat">打豆豆
</fieldset>
`,
},
    },
    defaultConfig: {
        height: '480px',
        autoRun: true,
        autoRunInterval: 1000,
        editorRange: '55%',
        draggable: true,
        direction: 'column-reverse',
      }
})


new MiniSandbox({
    el: '#label1-example',
    files: {
        '5.html': {
            title: 'HTML',
            defaultValue: `<input type="radio" name="sex" id="nan" /> <label for="nan">男</label>
<input type="radio" name="sex" id="nv"  /> <label for="nv">女</label>
<input type="checkbox" id="none" /><label for="none">隐藏性别</label>`,
},
    },
    defaultConfig: {
        height: '180px',
        autoRun: true,
        autoRunInterval: 1000,
        editorRange: '60%',
        draggable: true,
        direction: 'column-reverse',
      }
})

new MiniSandbox({
    el: '#h5-input-example',
    files: {
        '5.html': {
            title: 'HTML',
            defaultValue: `<form action="">
    <fieldset>
        <legend>表单类型</legend>
        email: <input type="email" name="email" required>
        color: <input type="color" name="color">
        url: <input type="url" name='url'>
        number: <input type="number" step="3" name="number">
        range: <input type="range" name="range" value="100">
        search: <input type="search" name="search">
        tel: <input type="tel" name="tel">
        time: <input type="time" name="time">
        date: <input type="date" name="date">
        datetime: <input type="datetime">
        week: <input type="week" name="week">
        month: <input type="month" name="month">
        datetime-local: <input type="datetime-local" name="datetime-local">
        <input type="submit">
    </fieldset>
</form>
`,
},
    },
    defaultConfig: {
        height: '500px',
        autoRun: true,
        autoRunInterval: 1000,
        editorRange: '63%',
        draggable: true,
        direction: 'column-reverse',
      }
})


new MiniSandbox({
    el: '#datalist-example',
    files: {
        '5.html': {
            title: 'HTML',
            defaultValue: `<input type="text" list="myData">
<datalist id="myData">
    <option>本科</option>
    <option>研究生</option>
    <option>不明</option>
</datalist>`,
},
    },
    defaultConfig: {
        height: '220px',
        autoRun: true,
        autoRunInterval: 1000,
        editorRange: '70%',
        draggable: true,
        direction: 'column-reverse',
      }
})

new MiniSandbox({
    el: '#new-form-example',
    files: {
        '5.html': {
            title: 'HTML',
            defaultValue: `<form action="" autocomplete="on">
    <fieldset>
        <legend>表单属性</legend>
        用户名：<input type="text" placeholder="例如：chuckle" name="userName" required/>
        电话：<input type="tel" pattern="1\\d{10}"/>
        <input type="file" multiple>
        <input type="file" name="file" multiple/>
        <input type="submit"/>
    </fieldset>
</form>`,
},
    },
    defaultConfig: {
        height: '380px',
        autoRun: true,
        autoRunInterval: 1000,
        editorRange: '65%',
        draggable: true,
        direction: 'column-reverse',
      }
})



new MiniSandbox({
    el: '#audio-example',
    files: {
        '5.html': {
            title: 'HTML',
            defaultValue: `<audio src="../music/songs/3.mp3" controls loop></audio>`,
},
    },
    defaultConfig: {
        height: '180px',
        autoRun: true,
        autoRunInterval: 1000,
        editorRange: '40%',
        draggable: true,
        direction: 'column-reverse',
      }
})




























