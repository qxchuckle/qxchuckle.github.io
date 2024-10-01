class Player{constructor(){return this.getInstance(...arguments)}getInstance(){let i=new PlayerCreator(...arguments);return Player.instance=i,i}}class Musics{constructor(){this.songs=[{id:1,title:"越权访问-崩坏：星穹铁道 - Hanser",singer:"越权访问-崩坏：星穹铁道 - Hanser",songUrl:"https://github-page.qcqx.cn/music/songs/1.mp3",imageUrl:"https://github-page.qcqx.cn/music/images/songs/1.webp"},{id:2,title:"妄想Reality（翻自 洛天依） - 炎祾",singer:"妄想Reality（翻自 洛天依） - 炎祾",songUrl:"https://github-page.qcqx.cn/music/songs/2.mp3",imageUrl:"https://github-page.qcqx.cn/music/images/songs/2.webp"},{id:3,title:"人间失宠 - 昔诺",singer:"人间失宠 - 昔诺",songUrl:"https://github-page.qcqx.cn/music/songs/3.mp3",imageUrl:"https://github-page.qcqx.cn/music/images/songs/3.webp"},{id:4,title:"崩坏世界的歌姬 (Movie Ver.) - 小林未郁",singer:"崩坏世界的歌姬 (Movie Ver.) - 小林未郁",songUrl:"https://github-page.qcqx.cn/music/songs/4.mp3",imageUrl:"https://github-page.qcqx.cn/music/images/songs/4.webp"},{id:5,title:"玛德琳娜电塔 - 花玲",singer:"玛德琳娜电塔 - 花玲",songUrl:"https://github-page.qcqx.cn/music/songs/5.mp3",imageUrl:"https://github-page.qcqx.cn/music/images/songs/5.webp"}]}getSongByNum(i){return this.songs[i]}}class PlayerCreator{constructor(){this.audio=document.querySelector(".music-player__audio"),this.audio.volume=.2,this.util=new Util,this.musics=new Musics,this.song_index=0,this.loop_mode=1,this.song_list=$(".music__list_content"),this.render_doms={title:$(".music__info--title"),singer:$(".music__info--singer"),image:$(".music-player__image img"),blur:$(".music-player__blur")},this.ban_dom={control__btn:$(".control__volume--icon")},this.render_time={now:$(".nowTime"),total:$(".totalTime")},this.disc={image:$(".music-player__image"),pointer:$(".music-player__pointer")},this.init()}init(){this.renderSongList(),this.renderSongStyle(),this.bindEventListener()}renderSongList(){let i="";this.musics.songs.forEach(((s,t)=>{i+=`<li class="music__list__item">${s.title}</li>`})),this.song_list.html(i)}renderSongStyle(){let{title:i,singer:s,songUrl:t,imageUrl:e}=this.musics.getSongByNum(this.song_index);this.audio.src=t,this.render_doms.title.html(i),this.render_doms.singer.html(s),this.render_doms.image.prop("src",e),this.render_doms.blur.css("background-image",'url("'+e+'")'),this.song_list.find(".music__list__item").eq(this.song_index).addClass("play").siblings().removeClass("play")}bindEventListener(){this.$play=new Btns(".player-control__btn--play",{click:this.handlePlayAndPause.bind(this)}),this.$prev=new Btns(".player-control__btn--prev",{click:this.changeSong.bind(this,"prev")}),this.$next=new Btns(".player-control__btn--next",{click:this.changeSong.bind(this,"next")}),this.$mode=new Btns(".player-control__btn--mode",{click:this.changePlayMode.bind(this)}),this.$ban=new Btns(".control__volume--icon",{click:this.banNotes.bind(this)}),this.song_list.on("click","li",(i=>{let s=$(i.target).index();this.changeSong(s)})),new Progress(".control__volume--progress",{min:0,max:1,value:this.audio.volume,handler:i=>{this.audio.volume=i}}),this.audio.oncanplay=()=>{if(this.progress)return this.progress.max=this.audio.duration,this.render_time.total.html(this.util.formatTime(this.audio.duration)),!1;this.progress=new Progress(".player__song--progress",{min:0,max:this.audio.duration,value:0,handler:i=>{this.audio.currentTime=i}}),this.render_time.total.html(this.util.formatTime(this.audio.duration))},this.audio.ontimeupdate=()=>{this.progress.setValue(this.audio.currentTime),this.render_time.now.html(this.util.formatTime(this.audio.currentTime))},this.audio.onended=()=>{this.changeSong("next"),this.audio.play()}}handlePlayAndPause(){let i=this.$play.$el.find("i");this.audio.paused?(this.audio.play(),i.removeClass("icon-play").addClass("icon-pause"),this.disc.image.addClass("play"),this.disc.pointer.addClass("play")):(this.audio.pause(),i.addClass("icon-play").removeClass("icon-pause"),this.disc.image.removeClass("play"),this.disc.pointer.removeClass("play"))}changePlayMode(){this.loop_mode++,this.loop_mode>2&&(this.loop_mode=0),this.renderPlayMode()}renderPlayMode(){this.$mode.$el.find("i").prop("class","iconfont icon-"+["loop","random","single"][this.loop_mode])}changeSongIndex(i){if("number"==typeof i)this.song_index=i;else if(0===this.loop_mode)this.song_index+="next"===i?1:-1,this.song_index>this.musics.songs.length-1&&(this.song_index=0),this.song_index<0&&(this.song_index=this.musics.songs.length-1);else if(1===this.loop_mode){let i=this.musics.songs.length,s=Math.floor(Math.random()*i);for(let t=0;t<1e4;t++){if(this.song_index!=s){this.song_index=s;break}s=Math.floor(Math.random()*i)}}else 2===this.loop_mode&&(this.song_index=this.song_index)}songTime(){let i=parseInt(this.audio.duration/60)<10?"0"+parseInt(this.audio.duration/60):parseInt(this.audio.duration/60),s=parseInt(this.audio.duration%60)<10?"0"+parseInt(this.audio.duration%60):parseInt(this.audio.duration%60);$(".totalTime").text(i+":"+s)}changeSong(i){this.changeSongIndex(i);let s=this.audio.paused;this.renderSongStyle(),s||this.audio.play()}banNotes(){let i=this.$ban.$el.find("i");1==this.audio.muted?(this.audio.muted=!1,i.removeClass("icon-muted").addClass("icon-volume")):(this.audio.muted=!0,i.removeClass("icon-volume").addClass("icon-muted"))}}class Progress{constructor(i,s){$.extend(this,s),this.$el=$(i),this.width=this.$el.width(),this.init()}init(){this.renderBackAndPointer(),this.bindEvents(),this.drag(),this.value,this.changeDOMStyle(this.width*this.value)}renderBackAndPointer(){this.$back=$('<div class="back">'),this.$pointer=$('<div class="pointer">'),this.$el.append(this.$back),this.$el.append(this.$pointer)}setValue(i){let s=this.width*i/(this.max-this.min);this.changeDOMStyle(s)}drag(){let i=this.$pointer,s=this.$el,t=!1;i.mousedown((e=>{t=!0;let n=e.offsetX;$(document).mousemove((e=>{if(!0===t){let t=e.clientX-s.offset().left-n,o=Math.max(0,Math.min(t,s.outerWidth(!1)-i.outerWidth(!1))),a=o/s.outerWidth(!1)*(this.max-this.min);this.changeDOMStyle(o),this.handler(a)}}))})),$(document).mouseup((()=>{t=!1}))}bindEvents(){this.$el.click((i=>{let s=i.offsetX,t=s/this.width*(this.max-this.min);this.changeDOMStyle(s),this.handler(t)}))}changeDOMStyle(i){this.$back.width(i+7==7?0:i+7),this.$pointer.css("left",i+"px")}}class Btns{constructor(i,s){this.$el=$(i),this.bindEvents(s)}bindEvents(i){for(const s in i)i.hasOwnProperty(s)&&this.$el.on(s,i[s])}}new Player,document.addEventListener("pjax:complete",(i=>{new Player}));