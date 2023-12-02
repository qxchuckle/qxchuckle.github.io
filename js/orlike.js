const version = "V0.1.33"; function setCookie(cname, cvalue, exdays) { var d = new Date(); d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000)); var expires = "expires=" + d.toGMTString(); document.cookie = cname + "=" + cvalue + "; " + expires; }
function getCookie(cname) {
    var name = cname + "="; var ca = document.cookie.split(';'); for (var i = 0; i < ca.length; i++) { var c = ca[i].trim(); if (c.indexOf(name) == 0) { return c.substring(name.length, c.length); } }
    return "";
}
function createLink(url) { let link = $(document.createElement('link')); link.attr('href', url); link.attr('rel', 'stylesheet'); link.attr('type', 'text/css'); $('link').last().after(link); }
function OrLike({ serverUrl = "", el = "", days = 30, style = "", ifont = "", icon = { like: "fa fa-thumbs-up", dislike: "fa fa-thumbs-down" }, } = {}) { this.serverUrl = serverUrl; this.el = el; this.style = style; this.ifont = ifont; this.days = days; this.icon = icon; this.ckid = ""; this.prepare(); this.init(); }
OrLike.prototype.prepare = function () {
    $(this.el).addClass("orlike-loading"); if (this.style != "") { createLink(this.style); }
    if (this.ifont != "") { createLink(this.ifont); }
}
OrLike.prototype.init = function () {
    server_url = this.serverUrl; obj = this; $.ajax({
        type: 'GET', url: server_url + '/tmp', dataType: 'jsonp', jsonp: "callback", jsonpCallback: "success", xhrFields: { withCredentials: true }, async: true, crossDomain: true, success: function (data) {
            let template = $(data.template); let icon_like = template.siblings("a.likeit.orlike").children("i"); let icon_dislike = template.siblings("a.dislikeit.orlike").children("i"); icon_like.attr('class', obj.icon.like); icon_dislike.attr('class', obj.icon.dislike); if (obj.icon.like == false)
                icon_like.remove(); if (obj.icon.dislike == false)
                icon_dislike.remove(); $(obj.el).removeClass("orlike-loading"); $(obj.el).html(template); obj.ckusr(obj); $('a.likeit.orlike').click({ obj: obj }, obj.like); $('a.dislikeit.orlike').click({ obj: obj }, obj.dislike);
        },
    });
}
OrLike.prototype.ckusr = function (obj) {
    server_url = this.serverUrl; $.ajax({
        type: 'GET', url: server_url + '/ckusr', dataType: 'jsonp', jsonp: "callback", jsonpCallback: "success", xhrFields: { withCredentials: true }, async: false, crossDomain: true, success: function (data) {
            if (data.stat == 'ok' && data.uid != "") {
                obj.ckid = data.ckid; if (!getCookie(data.ckid)) { setCookie(data.ckid, data.uid, obj.days); }
                obj.query();
            }
            else { console.error('connect orlike failed!!!'); }
        },
    });
}
OrLike.prototype.query = function () {
    server_url = this.serverUrl; $.ajax({
        type: 'GET', url: server_url + '/qry?link=' + window.location.pathname, dataType: 'jsonp', jsonp: "callback", jsonpCallback: "success", xhrFields: { withCredentials: true }, crossDomain: true, success: function (data) {
            if (data.stat == 'ok') { 
                $('a.likeit.orlike i span').text(data['like']);
                $('span.post-meta-orlike a span').text(data['like']);
                $('a.dislikeit.orlike i span').text(data['dislike']);
            }
            else { console.error('query orlike failed!!!'); }
        },
    });
}
OrLike.prototype.orl = function (obj, method) { server_url = obj.serverUrl; req_url = server_url + '/orl?method=' + method + '&link=' + window.location.pathname + '&' + obj.ckid + '=' + getCookie(obj.ckid); $.ajax({ type: 'GET', url: req_url, dataType: 'jsonp', jsonp: "callback", jsonpCallback: "success", xhrFields: { withCredentials: true }, crossDomain: true, success: function (data) { obj.query(); }, }); }
OrLike.prototype.like = function (event) { obj = event.data.obj; obj.orl(obj, 'like'); }
OrLike.prototype.dislike = function (event) { obj = event.data.obj; obj.orl(obj, 'dislike'); }