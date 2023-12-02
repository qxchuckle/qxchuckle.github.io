new MiniSandbox({
    el: '#my-sandbox',
    files: {
        'index.html': {
            title: 'HTML',
            defaultValue: `<button>点击</button>`,
            cssLibs: ['index.css'],
            jsLibs: ['index.js'],
        },
        'index.css': {
            title: 'CSS',
            defaultValue: `button {
    width: 100%;
    color: red;
}
        `},
        'index.js': {
            title: 'JS',
            defaultValue: `const btn = document.querySelector('button')
btn.addEventListener('click', () => {  
    alert('这是一个按钮')
})
        `}
    },
    defaultConfig: {
        height: '200px',
        autoRun: true,
        autoRunInterval: 1000,
        editorRange: '55%',
        draggable: true,
        direction: 'row',
      }
})

new MiniSandbox({
    el: '#myAuthorBox-sandbox',
    files: {
        'index.html': {
            title: 'HTML',
            defaultValue: `<div class="author-main">
    <div class="author-box">
        <span></span>
        <div class="author-img">
            <img src="https://cdn.qcqx.cn/img/head.webp">
        </div>
    </div>
    <div class="image-dot"></div>
</div>      
        `,
            cssLibs: ['index1.css','index2.css'],
            jsLibs: ['index.js'],
        },
        'index1.css': {
            title: '容器和图片CSS',
            defaultValue: `.author-main{
    height: 100%;
    background: gray;
    position: relative;
    display: flex;
}
.author-box{
    position: relative;
    width: 189px;
    height: 189px;
    background: rgba(253,253,253);
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
}
.author-img{
    margin: auto;
    border-radius: 50%;
    overflow: hidden;
    width: 180px;
    height: 180px;
    z-index: 10;
}
.author-img img{
    max-width: 100%;
}
.author-main .image-dot{
    width: 20px;
    height: 20px;
    background: #6bdf8f;
    position: relative;
    border-radius: 50%;
    border: 6px solid rgba(253,253,253);
    top: 150px;
    right: 45px;
    z-index: 20;
}
        `},
        'index2.css': {
            title: '动态边框CSS',
            defaultValue: `.author-box::before{
    content: '';
    position: absolute;
    width: 500px;
    height: 500px;
    background-image: conic-gradient(transparent,transparent,transparent,#8758FF);
    animation: animate 4s linear infinite;
    animation-delay: -2s;
}
.author-box::after{
    content: '';
    position: absolute;
    width: 500px;
    height: 500px;
    background-image: conic-gradient(transparent,transparent,transparent,#5CB8E4);
    animation: animate 4s linear infinite;
}
@keyframes animate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
.author-box span{
    position: absolute;
    inset: 5px;
    border-radius: 50%;
    background: rgba(253,253,253);
    z-index: 1;
}
        `},
        'index.js': {
            title: 'JS',
            defaultValue: `//用不着js
        `}
    },
    defaultConfig: {
        height: '550px',
        autoRun: true,
        autoRunInterval: 1000,
        editorRange: '55%',
        draggable: true,
        direction: 'column-reverse',
      }
})


new MiniSandbox({
    el: '#exhibition-sandbox',
    files: {
      'index.html': {
        title: 'HTML',
        defaultValue: `<input type="text" value="0"><br>
<input type="submit" value="加一">
<input type="submit" value="清除">  
      `}
    },
    resource: {
      cssLibs: [],
      jsLibs: [],
      css: `
      input {
        color: blue;
      }
      `,
      js: `
        var text = document.getElementsByTagName('input')[0];
          var add = document.getElementsByTagName('input')[1];
          var clear = document.getElementsByTagName('input')[2];
          add.onclick = function numberadd(){
              text.value++;  
          }
          clear.onclick = function clearnumber(){
              text.value = 0; 
          }
      `,
    },
    defaultConfig: {
        height: '130px',
        autoRun: true,
        autoRunInterval: 1000,
        editorRange: '55%',
        draggable: true,
        direction: 'row',
      }
  })