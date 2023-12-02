new MiniSandbox({
    el: '#get-example',
    files: {
        'index.js': {
            title: 'JS',
            defaultValue: `const btn = document.querySelector('button')
const p = document.querySelector('p')
btn.addEventListener('click', () => {  
    fetch('https://api.uixsj.cn/hitokoto/get?type=hitokoto&code=json', {
        method: "GET",
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            return Promise.reject('QAQ出错啦');
        }
    })
    .then(data => {
        p.innerHTML = data.content;
    });
})
        `},
        'index.html': {
            title: 'HTML',
            defaultValue: `<button>点击获取一言</button>
<p>一言测试</p>
            `,
            cssLibs: ['index.css'],
            jsLibs: ['index.js'],
        },
        'index.css': {
            title: 'CSS',
            defaultValue: `button {
    width: 100%;
    color: red;
}
        `}
    },
    defaultConfig: {
        height: '400px',
        autoRun: true,
        autoRunInterval: 1000,
        editorRange: '60%',
        draggable: true,
        direction: 'row',
      }
})