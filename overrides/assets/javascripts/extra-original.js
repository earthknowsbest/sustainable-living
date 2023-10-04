/*! thivien 2023-09-20 */

var AVIMGlobalConfig = {
    method: 0,
    onOff: 1,
    ckSpell: 1,
    oldAccent: 0,
    useCookie: 0,
    exclude: ["email"],
    showControl: 0,
    controlCSS: "avim.css"
}
  , AVIMAutoConfig = {
    telex: !0,
    vni: !0,
    viqr: !1,
    viqrStar: !1
};
function AVIM() {
    this.radioID = "avim_auto,avim_telex,avim_vni,avim_viqr,avim_viqr2,avim_off,avim_ckspell,avim_daucu".split(","),
    this.attached = [],
    this.changed = !1,
    this.agt = navigator.userAgent.toLowerCase(),
    this.alphabet = "QWERTYUIOPASDFGHJKLZXCVBNM ",
    this.support = !0,
    this.ver = 0,
    this.specialChange = !1,
    this.is_ie = -1 != this.agt.indexOf("msie") && -1 == this.agt.indexOf("opera"),
    this.is_opera = !1,
    this.isKHTML = !1,
    this.kl = 0,
    this.skey = [97, 226, 259, 101, 234, 105, 111, 244, 417, 117, 432, 121, 65, 194, 258, 69, 202, 73, 79, 212, 416, 85, 431, 89],
    this.fID = document.getElementsByTagName("iframe"),
    this.range = null,
    this.whit = !1,
    this.db1 = [273, 272],
    this.ds1 = ["d", "D"],
    this.os1 = "o,O,ơ,Ơ,ó,Ó,ò,Ò,ọ,Ọ,ỏ,Ỏ,õ,Õ,ớ,Ớ,ờ,Ờ,ợ,Ợ,ở,Ở,ỡ,Ỡ".split(","),
    this.ob1 = "ô,Ô,ô,Ô,ố,Ố,ồ,Ồ,ộ,Ộ,ổ,Ổ,ỗ,Ỗ,ố,Ố,ồ,Ồ,ộ,Ộ,ổ,Ổ,ỗ,Ỗ".split(","),
    this.mocs1 = "o,O,ô,Ô,u,U,ó,Ó,ò,Ò,ọ,Ọ,ỏ,Ỏ,õ,Õ,ú,Ú,ù,Ù,ụ,Ụ,ủ,Ủ,ũ,Ũ,ố,Ố,ồ,Ồ,ộ,Ộ,ổ,Ổ,ỗ,Ỗ".split(","),
    this.mocb1 = "ơ,Ơ,ơ,Ơ,ư,Ư,ớ,Ớ,ờ,Ờ,ợ,Ợ,ở,Ở,ỡ,Ỡ,ứ,Ứ,ừ,Ừ,ự,Ự,ử,Ử,ữ,Ữ,ớ,Ớ,ờ,Ờ,ợ,Ợ,ở,Ở,ỡ,Ỡ".split(","),
    this.trangs1 = "a,A,â,Â,á,Á,à,À,ạ,Ạ,ả,Ả,ã,Ã,ấ,Ấ,ầ,Ầ,ậ,Ậ,ẩ,Ẩ,ẫ,Ẫ".split(","),
    this.trangb1 = "ă,Ă,ă,Ă,ắ,Ắ,ằ,Ằ,ặ,Ặ,ẳ,Ẳ,ẵ,Ẵ,ắ,Ắ,ằ,Ằ,ặ,Ặ,ẳ,Ẳ,ẵ,Ẵ".split(","),
    this.as1 = "a,A,ă,Ă,á,Á,à,À,ạ,Ạ,ả,Ả,ã,Ã,ắ,Ắ,ằ,Ằ,ặ,Ặ,ẳ,Ẳ,ẵ,Ẵ,ế,Ế,ề,Ề,ệ,Ệ,ể,Ể,ễ,Ễ".split(","),
    this.ab1 = "â,Â,â,Â,ấ,Ấ,ầ,Ầ,ậ,Ậ,ẩ,Ẩ,ẫ,Ẫ,ấ,Ấ,ầ,Ầ,ậ,Ậ,ẩ,Ẩ,ẫ,Ẫ,é,É,è,È,ẹ,Ẹ,ẻ,Ẻ,ẽ,Ẽ".split(","),
    this.es1 = "e,E,é,É,è,È,ẹ,Ẹ,ẻ,Ẻ,ẽ,Ẽ".split(","),
    this.eb1 = "ê,Ê,ế,Ế,ề,Ề,ệ,Ệ,ể,Ể,ễ,Ễ".split(","),
    this.english = "ĐÂĂƠƯÊÔ",
    this.lowen = "đâăơưêô",
    this.arA = "á,à,ả,ã,ạ,a,Á,À,Ả,Ã,Ạ,A".split(","),
    this.mocrA = "ó,ò,ỏ,õ,ọ,o,ú,ù,ủ,ũ,ụ,u,Ó,Ò,Ỏ,Õ,Ọ,O,Ú,Ù,Ủ,Ũ,Ụ,U".split(","),
    this.erA = "é,è,ẻ,ẽ,ẹ,e,É,È,Ẻ,Ẽ,Ẹ,E".split(","),
    this.orA = "ó,ò,ỏ,õ,ọ,o,Ó,Ò,Ỏ,Õ,Ọ,O".split(","),
    this.aA = "ấ,ầ,ẩ,ẫ,ậ,â,Ấ,Ầ,Ẩ,Ẫ,Ậ,Â".split(","),
    this.oA = "ố,ồ,ổ,ỗ,ộ,ô,Ố,Ồ,Ổ,Ỗ,Ộ,Ô".split(","),
    this.mocA = "ớ,ờ,ở,ỡ,ợ,ơ,ứ,ừ,ử,ữ,ự,ư,Ớ,Ờ,Ở,Ỡ,Ợ,Ơ,Ứ,Ừ,Ử,Ữ,Ự,Ư".split(","),
    this.trangA = "ắ,ằ,ẳ,ẵ,ặ,ă,Ắ,Ằ,Ẳ,Ẵ,Ặ,Ă".split(","),
    this.eA = "ế,ề,ể,ễ,ệ,ê,Ế,Ề,Ể,Ễ,Ệ,Ê".split(","),
    this.oA = "ố,ồ,ổ,ỗ,ộ,ô,Ố,Ồ,Ổ,Ỗ,Ộ,Ô".split(","),
    this.skey2 = "a,a,a,e,e,i,o,o,o,u,u,y,A,A,A,E,E,I,O,O,O,U,U,Y".split(","),
    this.fcc = function(t) {
        return String.fromCharCode(t)
    }
    ,
    this.getEL = function(t) {
        return document.getElementById(t)
    }
    ,
    this.getSF = function() {
        var t, e = [];
        for (t = 0; t < this.skey.length; t++)
            e[e.length] = this.fcc(this.skey[t]);
        return e
    }
    ,
    AVIMGlobalConfig.showControl && (this.css = document.createElement("link"),
    this.css.rel = "stylesheet",
    this.css.type = "text/css",
    this.css.href = AVIMGlobalConfig.controlCSS,
    document.getElementsByTagName("head")[0].appendChild(this.css),
    document.write('<span id="AVIMControl">'),
    document.write('<p class="AVIMControl"><input id="avim_auto" type="radio" name="AVIMMethod" onclick="AVIMObj.setMethod(0);" />Tự động'),
    document.write('<input id="avim_telex" type="radio" name="AVIMMethod" onclick="AVIMObj.setMethod(1);" />TELEX'),
    document.write('<input id="avim_vni" type="radio" name="AVIMMethod" onclick="AVIMObj.setMethod(2);" />VNI'),
    document.write('<input id="avim_viqr" type="radio" name="AVIMMethod" onclick="AVIMObj.setMethod(3);" />VIQR'),
    document.write('<input id="avim_viqr2" type="radio" name="AVIMMethod" onclick="AVIMObj.setMethod(4);" />VIQR*'),
    document.write('<input id="avim_off" type="radio" name="AVIMMethod" onclick="AVIMObj.setMethod(-1);" />Tắt<br />'),
    document.write('<a class="AVIMControl" style="float: right; position: relative; top: 3px;" onclick="document.getElementById(\'AVIMControl\').style.display=\'none\';">[Ẩn AVIM - F12]</a>'),
    document.write('<input type="checkbox" id="avim_ckspell" onclick="AVIMObj.setSpell(this);" />Chính tả'),
    document.write('<input type="checkbox" id="avim_daucu" onclick="AVIMObj.setDauCu(this);" />Kiểu cũ</p>'),
    document.write("</span>")),
    this.is_ie || (0 <= this.agt.indexOf("opera") ? (this.operaV = this.agt.split(" "),
    this.operaVersion = parseInt(this.operaV[this.operaV.length - 1]),
    8 <= this.operaVersion ? this.is_opera = !0 : (this.operaV = this.operaV[0].split("/"),
    this.operaVersion = parseInt(this.operaV[1]),
    8 <= this.operaVersion && (this.is_opera = !0))) : 0 <= this.agt.indexOf("khtml") ? this.isKHTML = !0 : (this.ver = this.agt.substr(this.agt.indexOf("rv:") + 3),
    this.ver = parseFloat(this.ver.substr(0, this.ver.indexOf(" "))),
    this.agt.indexOf("mozilla") < 0 && (this.ver = 0))),
    this.nospell = function(t, e) {
        return !1
    }
    ,
    this.ckspell = function(t, e) {
        t = this.unV(t);
        var i, n, s, a, o, r = "UOU,IEU".split(","), l = !0, h = "UU,UOU,UOI,IEU,AO,IA,AI,AY,AU,AO".split(","), d = !0, c = "UE,UYE,IU,EU,UY".split(","), f = "AY,AU".split(","), u = -1, p = this.up(t), g = p, m = !1, v = "OE,OO,AO,EO,IA,AI".split(","), b = "AA,AE,EE,OU,YY,YI,IY,EY,EA,EI,II,IO,YO,YA,OOO".split(","), A = this.up(e), y = this.unV2(p), I = "B,C,D,G,H,K,L,M,N,P,Q,R,S,T,V,X".split(","), k = "CH,GI,KH,NGH,GH,NG,NH,PH,QU,TH,TR".split(","), C = "CH,NG,NH".split(","), w = "C,P,T,CH".split(","), O = "C,M,N,P,T".split(","), _ = "O,U,IE,Ô,Ơ,Ư,IÊ,Ă,Â,UYE,UYÊ,UO,ƯƠ,ƯO,UƠ,UA,ƯA,OĂ,OE,OÊ".split(","), x = "UU,UOU".split(",");
        if (0 <= this.FRX.indexOf(A))
            for (s = 0; s < w.length; s++)
                if (p.substr(p.length - w[s].length, w[s].length) == w[s])
                    return !0;
        for (s = 0; s < p.length; s++) {
            if (0 <= "FJZW1234567890".indexOf(p.substr(s, 1)))
                return !0;
            for (a = 0; a < b.length; a++)
                if (y.substr(s, b[a].length) == b[a]) {
                    for (i = 0; i < r.length; i++)
                        0 <= y.indexOf(r[i]) && (l = !1);
                    if (l && ("IO".indexOf(b[a]) < 0 || s <= 0 || "G" != y.substr(s - 1, 1)))
                        return !0
                }
        }
        for (a = 0; a < k.length; a++)
            if (0 == g.indexOf(k[a])) {
                g = g.substr(k[a].length),
                m = !0,
                u = a;
                break
            }
        if (!m)
            for (a = 0; a < I.length; a++)
                if (0 == g.indexOf(I[a])) {
                    g = g.substr(1);
                    break
                }
        for (m = !1,
        o = g,
        a = 0; a < C.length; a++)
            if (g.substr(g.length - C[a].length) == C[a]) {
                if (g = g.substr(0, g.length - C[a].length),
                2 == a) {
                    for (i = 0; i < _.length; i++)
                        if (g == _[i])
                            return !0;
                    if (A == this.trang && ("OA" == g || "A" == g))
                        return !0
                }
                m = !0;
                break
            }
        if (!m)
            for (a = 0; a < O.length; a++)
                if (g.substr(g.length - 1) == O[a]) {
                    g = g.substr(0, g.length - 1);
                    break
                }
        if (g) {
            for (s = 0; s < k.length; s++)
                for (a = 0; a < g.length; a++)
                    if (g.substr(a, k[s].length) == k[s])
                        return !0;
            for (s = 0; s < I.length; s++)
                if (0 <= g.indexOf(I[s]))
                    return !0
        }
        if (n = g.substr(0, 1),
        3 == u && ("A" == n || "O" == n || "U" == n || "Y" == n))
            return !0;
        if (5 == u && ("E" == n || "I" == n || "Y" == n))
            return !0;
        if ("IAO" == (y = this.unV2(g)))
            return !0;
        if (g != o)
            for (i = 0; i < h.length; i++)
                if (y == h[i])
                    return !0;
        if (g != p && "YEU" == y)
            return !0;
        if (A != this.moc)
            for (i = 0; i < x.length; i++)
                if (g == x[i])
                    return !0;
        if (0 < y.indexOf("UYE") && "E" == A && (d = !1),
        0 <= this.them.indexOf(A) && d) {
            for (s = 0; s < v.length; s++)
                if (0 <= y.indexOf(v[s]))
                    return !0;
            if (A != this.trang && "OA" == y)
                return !0;
            if (A == this.trang && "W" != this.trang && "UA" == y)
                return !0;
            if (A == this.moc)
                for (s = 0; s < c.length; s++)
                    if (y == c[s])
                        return !0;
            if (A == this.moc || A == this.trang)
                for (s = 0; s < f.length; s++)
                    if (y == f[s])
                        return !0
        }
        if (this.tw5 = g,
        272 == y.charCodeAt(0) || 273 == y.charCodeAt(0)) {
            if (4 < y.length)
                return !0
        } else if (3 < y.length)
            return !0;
        return !1
    }
    ,
    this.noCookie = function() {}
    ,
    this.doSetCookie = function() {
        var t = new Date(0xa3a589e6500).toGMTString();
        document.cookie = "AVIM_on_off=" + AVIMGlobalConfig.onOff + ";expires=" + t,
        document.cookie = "AVIM_method=" + AVIMGlobalConfig.method + ";expires=" + t,
        document.cookie = "AVIM_ckspell=" + AVIMGlobalConfig.ckSpell + ";expires=" + t,
        document.cookie = "AVIM_daucu=" + AVIMGlobalConfig.oldAccent + ";expires=" + t
    }
    ,
    this.doGetCookie = function() {
        var t, e, i = document.cookie, n = /AVIM_method/.test(i), s = i.split(";");
        if (!n || i.indexOf("AVIM_ckspell") < 0)
            this.setCookie();
        else
            for (e = 0; e < s.length; e++)
                (t = s[e].split("="))[0] = t[0].replace(/^\s+/g, ""),
                t[1] = parseInt(t[1]),
                "AVIM_on_off" == t[0] ? AVIMGlobalConfig.onOff = t[1] : "AVIM_method" == t[0] ? AVIMGlobalConfig.method = t[1] : "AVIM_ckspell" == t[0] ? 0 == t[1] ? (AVIMGlobalConfig.ckSpell = 0,
                this.spellerr = this.nospell) : (AVIMGlobalConfig.ckSpell = 1,
                this.spellerr = this.ckspell) : "AVIM_daucu" == t[0] && (AVIMGlobalConfig.oldAccent = parseInt(t[1]))
    }
    ,
    1 == AVIMGlobalConfig.useCookie ? (this.setCookie = this.doSetCookie,
    this.getCookie = this.doGetCookie) : (this.setCookie = this.noCookie,
    this.getCookie = this.noCookie),
    this.setMethod = function(t) {
        -1 == t ? (AVIMGlobalConfig.onOff = 0,
        this.getEL(this.radioID[5]) && (this.getEL(this.radioID[5]).checked = !0)) : (AVIMGlobalConfig.onOff = 1,
        AVIMGlobalConfig.method = t,
        this.getEL(this.radioID[t]) && (this.getEL(this.radioID[t]).checked = !0)),
        this.setSpell(AVIMGlobalConfig.ckSpell),
        this.setDauCu(AVIMGlobalConfig.oldAccent),
        this.setCookie()
    }
    ,
    this.setDauCu = function(t) {
        "number" == typeof t ? (AVIMGlobalConfig.oldAccent = t,
        this.getEL(this.radioID[7]) && (this.getEL(this.radioID[7]).checked = t)) : AVIMGlobalConfig.oldAccent = t.checked ? 1 : 0,
        this.setCookie()
    }
    ,
    this.setSpell = function(t) {
        "number" == typeof t ? (this.spellerr = 1 == t ? this.ckspell : this.nospell,
        this.getEL(this.radioID[6]) && (this.getEL(this.radioID[6]).checked = t)) : t.checked ? (this.spellerr = this.ckspell,
        AVIMGlobalConfig.ckSpell = 1) : (this.spellerr = this.nospell,
        AVIMGlobalConfig.ckSpell = 0),
        this.setCookie()
    }
    ,
    this.is_ie || 1.3 <= this.ver || this.is_opera || this.isKHTML ? (this.getCookie(),
    0 == AVIMGlobalConfig.onOff ? this.setMethod(-1) : this.setMethod(AVIMGlobalConfig.method),
    this.setSpell(AVIMGlobalConfig.ckSpell),
    this.setDauCu(AVIMGlobalConfig.oldAccent)) : this.support = !1,
    this.mozGetText = function(t) {
        var e, i, n = "", s = 1;
        if ((e = t.data ? t.data : t.value).length <= 0)
            return !1;
        if (t.data)
            i = t.pos;
        else {
            if (!t.setSelectionRange)
                return !1;
            i = t.selectionStart
        }
        if (t.selectionStart != t.selectionEnd)
            return ["", i];
        for (; !(i - s < 0); ) {
            if (this.notWord(e.substr(i - s, 1))) {
                "\\" == e.substr(i - s, 1) && (n = e.substr(i - s, 1) + n);
                break
            }
            n = e.substr(i - s, 1) + n,
            s++
        }
        return [n, i]
    }
    ,
    this.ieGetText = function(t) {
        var e = t.document.selection.createRange()
          , i = "";
        if (e.text)
            e.text = "";
        else
            for (; e.moveStart("character", -1),
            i.length != e.text.length; )
                if (i = e.text,
                this.notWord(i.charAt(0))) {
                    13 == i.charCodeAt(0) ? i = i.substr(2) : "\\" != i.charAt(0) && (i = i.substr(1));
                    break
                }
        return !!i.length && (e.collapse(!1),
        e.moveStart("character", -i.length),
        t.cW = e.duplicate(),
        t)
    }
    ,
    this.start = function(t, e) {
        var i, n = "", s = AVIMGlobalConfig.method, a = AVIMGlobalConfig.ckSpell, o = !1, r = !1, l = !1;
        this.oc = t;
        var h, d, c = "D,A,E,O,W,W".split(","), f = "9,6,6,6,7,8".split(","), u = "D,^,^,^,+,(".split(","), p = "D,^,^,^,*,(".split(",");
        if (0 == s) {
            var g = []
              , m = [AVIMAutoConfig.telex, AVIMAutoConfig.vni, AVIMAutoConfig.viqr, AVIMAutoConfig.viqrStar]
              , v = [c, f, u, p]
              , b = [i, o, r, l]
              , A = ["DAWEO", "6789", "D^+(", "D^*("];
            for (h = 0; h < m.length; h++)
                m[h] ? g[g.length] = v[h] : A[h] = "";
            for (h = 0; h < g.length; h++)
                b[h] = g[h];
            if (i = b[0],
            o = b[1],
            r = b[2],
            l = b[3],
            this.D2 = A.join(),
            !i)
                return
        } else
            1 == s ? (i = c,
            this.D2 = "DAWEO") : 2 == s ? (i = f,
            this.D2 = "6789") : 3 == s ? (i = u,
            this.D2 = "D^+(") : 4 == s && (i = p,
            this.D2 = "D^*(");
        if (this.is_ie) {
            if (t = this.ieGetText(t)) {
                var y = t.cW.text;
                n = this.main(y, e, 0, i, !1),
                !o || n != y && void 0 !== n || (n = this.main(y, e, 0, o, !1)),
                !r || n != y && void 0 !== n || (n = this.main(y, e, 0, r, !1)),
                !l || n != y && void 0 !== n || (n = this.main(y, e, 0, l, !1)),
                n && (t.cW.text = n)
            }
        } else {
            if (e = this.fcc(e.which),
            !(n = this.mozGetText(t)) || t.sel)
                return;
            d = 0 <= this.D2.indexOf(this.up(e)),
            this.main(n[0], e, n[1], i, d),
            a || (n = this.mozGetText(t)),
            n && o && !this.changed && this.main(n[0], e, n[1], o, d),
            a || (n = this.mozGetText(t)),
            n && r && !this.changed && this.main(n[0], e, n[1], r, d),
            a || (n = this.mozGetText(t)),
            n && l && !this.changed && this.main(n[0], e, n[1], l, d)
        }
        if (0 <= this.D2.indexOf(this.up(e)))
            if (this.is_ie)
                "object" == typeof t && (t = this.ieGetText(t)) && (n = t.cW.text,
                this.changed || (n += e,
                this.changed = !0),
                t.cW.text = n,
                (n = this.normC(n, e, 0)) && ((t = this.ieGetText(t)).cW.text = n));
            else {
                if (!(n = this.mozGetText(t)))
                    return;
                this.normC(n[0], e, n[1])
            }
    }
    ,
    this.findC = function(t, e, i) {
        var n = AVIMGlobalConfig.method;
        if ((3 == n || 4 == n) && "\\" == t.substr(t.length - 1, 1))
            return [1, e.charCodeAt(0)];
        var s, a, o, r, l, h = "", d = "", c = "", f = "", u = [], p = 0, g = !1, m = this.up(t), v = this.up(this.aA.join() + this.eA.join() + this.mocA.join() + this.trangA.join() + this.oA.join() + this.english);
        for (o = 0; o < i.length; o++)
            this.nan(i[o]) ? h += i[o] : h += this.fcc(i[o]);
        var b = this.up(e)
          , A = this.repSign(e)
          , y = this.up(this.unV2(this.unV(t)))
          , I = "ƯA,ƯU".split(",");
        if (0 <= this.DAWEO.indexOf(b)) {
            if (b == this.moc)
                if (0 <= y.indexOf("UU") && this.tw5 != I[1]) {
                    if (y.indexOf("UU") != t.length - 2)
                        return !1;
                    s = 2
                } else if (0 <= y.indexOf("UOU")) {
                    if (y.indexOf("UOU") != t.length - 3)
                        return !1;
                    s = 2
                }
            if (!s)
                for (o = 1; o <= t.length; o++) {
                    for (d = t.substr(t.length - o, 1),
                    c = this.up(t.substr(t.length - o - 1, 1)),
                    l = this.up(d),
                    r = 0; r < I.length; r++)
                        this.tw5 == I[r] && this.tw5 == this.unV(c + l) && (g = !0);
                    if (g)
                        g = !1;
                    else if (0 <= h.indexOf(l)) {
                        if (b == this.moc && "U" == this.unV(l) && "A" == this.up(this.unV(t.substr(t.length - o + 1, 1))) || b == this.trang && "A" == this.unV(l) && "U" == this.unV(c)) {
                            if (a = "U" == this.unV(l) ? 1 : 2,
                            "Q" != this.up(t.substr(t.length - o - a, 1)))
                                s = o + a - 1;
                            else if (b == this.trang)
                                s = o;
                            else if (this.moc != this.trang)
                                return !1
                        } else
                            s = o;
                        if (!this.whit || m.indexOf("Ư") < 0 || m.indexOf("W") < 0)
                            break
                    } else if (0 <= v.indexOf(l) && (b == this.D ? "đ" == d ? s = [o, "d"] : "Đ" == d && (s = [o, "D"]) : s = this.DAWEOF(d, b, o),
                    s))
                        break
                }
        }
        if (b != this.Z && this.DAWEO.indexOf(b) < 0) {
            var k = this.retKC(b);
            for (o = 0; o < k.length; o++)
                f += this.fcc(k[o])
        }
        for (o = 1; o <= t.length; o++)
            if (this.DAWEO.indexOf(b) < 0)
                if (d = this.up(t.substr(t.length - o, 1)),
                c = this.up(t.substr(t.length - o - 1, 1)),
                0 <= h.indexOf(d))
                    "U" == d ? "Q" != c && (p++,
                    u[u.length] = o) : "I" == d ? ("G" != c || p <= 0) && (p++,
                    u[u.length] = o) : (p++,
                    u[u.length] = o);
                else if (b != this.Z) {
                    for (r = 0; r < A.length; r++)
                        if (A[r] == t.charCodeAt(t.length - o))
                            return !this.spellerr(t, e) && [o, k[r % 24]];
                    for (r = 0; r < k.length; r++)
                        if (k[r] == t.charCodeAt(t.length - o))
                            return [o, this.fcc(this.skey[r])]
                }
        if (b != this.Z && "object" != typeof s && this.spellerr(t, e))
            return !1;
        if (this.DAWEO.indexOf(b) < 0)
            for (o = 1; o <= t.length; o++) {
                if (b != this.Z && 0 <= "ÂĂÊÔƠƯêâăơôư".indexOf(t.substr(t.length - o, 1)))
                    return o;
                if (0 <= f.indexOf(t.substr(t.length - o, 1)))
                    for (r = 0; r < k.length; r++)
                        if (t.substr(t.length - o, 1).charCodeAt(0) == k[r])
                            return [o, this.fcc(this.skey[r])]
            }
        if (s)
            return s;
        if (1 == p || b == this.Z)
            return u[0];
        if (2 != p)
            return 3 == p && u[1];
        var C = 2;
        " " == t.substr(t.length - 1) && (C = 3);
        var w = this.up(t.substr(t.length - C, 2));
        if (0 == AVIMGlobalConfig.oldAccent && ("UY" == w || "OA" == w || "OE" == w))
            return u[0];
        var O, _ = 0, x = "BCD" + this.fcc(272) + "GHKLMNPQRSTVX", S = "CH,GI,KH,NGH,GH,NG,NH,PH,QU,TH,TR".split(",");
        for (r = 1; r <= t.length; r++) {
            for (O = !1,
            o = 0; o < S.length; o++)
                0 <= this.up(t.substr(t.length - r - S[o].length + 1, S[o].length)).indexOf(S[o]) && (_++,
                O = !0,
                "NGH" != S[o] ? r++ : r += 2);
            if (!O) {
                if (!(0 <= x.indexOf(this.up(t.substr(t.length - r, 1)))))
                    break;
                _++
            }
        }
        return 1 == _ || 2 == _ ? u[0] : u[1]
    }
    ,
    this.ie_replaceChar = function(t, e, i) {
        var n = ""
          , s = 0;
        return isNaN(i) && (s = this.up(i)),
        this.whit && "U" == this.up(t.substr(t.length - e - 1, 1)) && 1 != e && "Q" != this.up(t.substr(t.length - e - 2, 1)) && (this.whit = !1,
        "Ơ" != this.up(this.unV(this.fcc(i))) && "O" != s || (n = "u" == t.substr(t.length - e - 1, 1) ? this.fcc(432) : this.fcc(431)),
        "O" == s && (i = "o" == i ? 417 : 416)),
        isNaN(i) ? t.substr(0, t.length - e) + i + t.substr(t.length - e + 1) : (this.changed = !0,
        n += this.fcc(i),
        t.substr(0, t.length - e - n.length + 1) + n + t.substr(t.length - e + 1))
    }
    ,
    this.replaceChar = function(t, e, i) {
        var n = !1;
        if (this.nan(i)) {
            s = i;
            "O" == this.up(i) && this.whit && (n = !0)
        } else {
            var s = this.fcc(i)
              , a = this.up(this.unV(this.fcc(i)));
            this.changed = !0
        }
        if (t.data) {
            if ("U" == this.up(t.data.substr(e - 1, 1)) && e < t.pos - 1) {
                if ("Ơ" == a || n)
                    if ("u" == t.data.substr(e - 1, 1))
                        l = this.fcc(432);
                    else
                        l = this.fcc(431);
                n && (this.changed = !0,
                s = "o" == i ? "ơ" : "Ơ")
            }
            t.deleteData(e, 1),
            t.insertData(e, s),
            l && (t.deleteData(e - 1, 1),
            t.insertData(e - 1, l))
        } else {
            var o = t.selectionStart
              , r = t.scrollTop;
            if ("U" == this.up(t.value.substr(e - 1, 1)) && e < o - 1 && "Q" != this.up(t.value.substr(e - 2, 1))) {
                if ("Ơ" == a || n)
                    if ("u" == t.value.substr(e - 1, 1))
                        var l = this.fcc(432);
                    else
                        var l = this.fcc(431);
                n && (this.changed = !0,
                s = "o" == i ? "ơ" : "Ơ")
            }
            t.value = t.value.substr(0, e) + s + t.value.substr(e + 1),
            l && (t.value = t.value.substr(0, e - 1) + l + t.value.substr(e)),
            t.setSelectionRange(o, o),
            t.scrollTop = r
        }
        this.whit && (this.whit = !1)
    }
    ,
    this.tr = function(t, e, i, n, s) {
        var a, o, r = this.findC(e, t, n);
        if (r) {
            if (r[1])
                return this.is_ie ? this.ie_replaceChar(e, r[0], r[1]) : this.replaceChar(this.oc, s - r[0], r[1]);
            var l, h = e.substr(e.length - r, 1);
            for (a = n,
            o = 0; o < a.length; o++)
                if ((this.nan(a[o]) || "e" == a[o] ? h : h.charCodeAt(0)) == a[o])
                    return l = this.nan(i[o]) ? i[o].charCodeAt(0) : i[o],
                    this.is_ie ? this.ie_replaceChar(e, r, l) : this.replaceChar(this.oc, s - r, l)
        }
        return !1
    }
    ,
    this.main = function(t, e, i, n, s) {
        var a, o, r = this.up(e), l = [this.db1, this.ab1, this.eb1, this.ob1, this.mocb1, this.trangb1], h = !1, d = "d,D,a,A,a,A,o,O,u,U,e,E,o,O".split(","), c = [this.ds1, this.as1, this.es1, this.os1, this.mocs1, this.trangs1], f = [], u = [], p = AVIMGlobalConfig.method;
        if (2 == p || 0 == p && "9" == n[0] ? (this.DAWEO = "6789",
        this.SFJRX = "12534",
        this.S = "1",
        this.F = "2",
        this.J = "5",
        this.R = "3",
        this.X = "4",
        this.Z = "0",
        this.D = "9",
        this.FRX = "234",
        this.AEO = "6",
        this.moc = "7",
        this.trang = "8",
        this.them = "678",
        this.A = "^",
        this.E = "^",
        this.O = "^") : 3 == p || 0 == p && "+" == n[4] ? (this.DAWEO = "^+(D",
        this.SFJRX = "'`.?~",
        this.S = "'",
        this.F = "`",
        this.J = ".",
        this.R = "?",
        this.X = "~",
        this.Z = "-",
        this.D = "D",
        this.FRX = "`?~",
        this.AEO = "^",
        this.moc = "+",
        this.trang = "(",
        this.them = "^+(",
        this.A = "^",
        this.E = "^",
        this.O = "^") : 4 == p || 0 == p && "*" == n[4] ? (this.DAWEO = "^*(D",
        this.SFJRX = "'`.?~",
        this.S = "'",
        this.F = "`",
        this.J = ".",
        this.R = "?",
        this.X = "~",
        this.Z = "-",
        this.D = "D",
        this.FRX = "`?~",
        this.AEO = "^",
        this.moc = "*",
        this.trang = "(",
        this.them = "^*(",
        this.A = "^",
        this.E = "^",
        this.O = "^") : (1 == p || 0 == p && "D" == n[0]) && (this.SFJRX = "SFJRX",
        this.DAWEO = "DAWEO",
        this.D = "D",
        this.S = "S",
        this.F = "F",
        this.J = "J",
        this.R = "R",
        this.X = "X",
        this.Z = "Z",
        this.FRX = "FRX",
        this.them = "AOEW",
        this.trang = "W",
        this.moc = "W",
        this.A = "A",
        this.E = "E",
        this.O = "O"),
        0 <= this.SFJRX.indexOf(r)) {
            var g = this.sr(t, e, i);
            if (h = !0,
            g)
                return g
        } else if (r == this.Z) {
            for (u = this.repSign(null),
            a = 0; a < this.english.length; a++)
                u[u.length] = this.lowen.charCodeAt(a),
                u[u.length] = this.english.charCodeAt(a);
            for (a = 0; a < 5; a++)
                for (o = 0; o < this.skey.length; o++)
                    f[f.length] = this.skey[o];
            for (a = 0; a < d.length; a++)
                f[f.length] = d[a];
            h = !0
        } else
            for (a = 0; a < n.length; a++)
                n[a] == r && (h = !0,
                f = f.concat(l[a]),
                u = u.concat(c[a]));
        return r == this.moc && (this.whit = !0),
        h ? this.DAWEOZ(e, t, f, u, i, r) : s ? void 0 : this.normC(t, e, i)
    }
    ,
    this.DAWEOZ = function(t, e, i, n, s, a) {
        if (0 <= this.DAWEO.indexOf(a) || 0 <= this.Z.indexOf(a))
            return this.tr(t, e, i, n, s)
    }
    ,
    this.normC = function(t, e, i) {
        var n, s, a, o, r = this.up(e), l = this.repSign(null), h = 32 == e.charCodeAt(0);
        if (this.is_ie || !h)
            for (a = 1; a <= t.length; a++)
                for (o = 0; o < l.length; o++)
                    if (l[o] == t.charCodeAt(t.length - a)) {
                        if (n = o <= 23 ? this.S : o <= 47 ? this.F : o <= 71 ? this.J : o <= 95 ? this.R : this.X,
                        s = this.skey[o % 24],
                        this.alphabet.indexOf(r) < 0 && this.D2.indexOf(r) < 0)
                            return t;
                        if (t = this.unV(t),
                        h || this.changed || (t += e),
                        this.is_ie) {
                            var d = this.sr(t, n, 0);
                            if (h && d && (d += this.fcc(32)),
                            d)
                                return d
                        } else {
                            var c = this.oc.selectionStart
                              , f = c;
                            if (!this.changed) {
                                var u = this.oc.scrollTop;
                                f += e.length,
                                this.oc.data ? (this.oc.insertData(this.oc.pos, e),
                                this.oc.pos++,
                                this.range.setEnd(this.oc, this.oc.pos),
                                this.specialChange = !0) : (this.oc.value = this.oc.value.substr(0, c) + e + this.oc.value.substr(this.oc.selectionEnd),
                                this.changed = !0,
                                this.oc.scrollTop = u)
                            }
                            if (this.oc.data || this.oc.setSelectionRange(f, f),
                            !this.ckspell(t, n))
                                if (this.replaceChar(this.oc, i - a, s),
                                this.oc.data) {
                                    var p = this.mozGetText(this.oc);
                                    g = [this.D];
                                    this.main(p[0], n, p[1], g, !1)
                                } else {
                                    var g = [this.D];
                                    this.main(t, n, f, g, !1)
                                }
                        }
                    }
    }
    ,
    this.DAWEOF = function(t, e, i) {
        var n, s, a = [i], o = [this.A, this.moc, this.trang, this.E, this.O], r = [this.aA, this.mocA, this.trangA, this.eA, this.oA], l = [this.arA, this.mocrA, this.arA, this.erA, this.orA];
        for (s = 0; s < o.length; s++)
            if (e == o[s])
                for (n = 0; n < r[s].length; n++)
                    t == r[s][n] && (a[1] = l[s][n]);
        return !!a[1] && a
    }
    ,
    this.retKC = function(t) {
        return t == this.S ? [225, 7845, 7855, 233, 7871, 237, 243, 7889, 7899, 250, 7913, 253, 193, 7844, 7854, 201, 7870, 205, 211, 7888, 7898, 218, 7912, 221] : t == this.F ? [224, 7847, 7857, 232, 7873, 236, 242, 7891, 7901, 249, 7915, 7923, 192, 7846, 7856, 200, 7872, 204, 210, 7890, 7900, 217, 7914, 7922] : t == this.J ? [7841, 7853, 7863, 7865, 7879, 7883, 7885, 7897, 7907, 7909, 7921, 7925, 7840, 7852, 7862, 7864, 7878, 7882, 7884, 7896, 7906, 7908, 7920, 7924] : t == this.R ? [7843, 7849, 7859, 7867, 7875, 7881, 7887, 7893, 7903, 7911, 7917, 7927, 7842, 7848, 7858, 7866, 7874, 7880, 7886, 7892, 7902, 7910, 7916, 7926] : t == this.X ? [227, 7851, 7861, 7869, 7877, 297, 245, 7895, 7905, 361, 7919, 7929, 195, 7850, 7860, 7868, 7876, 296, 213, 7894, 7904, 360, 7918, 7928] : void 0
    }
    ,
    this.unV = function(t) {
        var e, i, n = this.repSign(null);
        for (i = 1; i <= t.length; i++)
            for (e = 0; e < n.length; e++)
                n[e] == t.charCodeAt(t.length - i) && (t = t.substr(0, t.length - i) + this.fcc(this.skey[e % 24]) + t.substr(t.length - i + 1));
        return t
    }
    ,
    this.unV2 = function(t) {
        var e, i;
        for (e = 1; e <= t.length; e++)
            for (i = 0; i < this.skey.length; i++)
                this.skey[i] == t.charCodeAt(t.length - e) && (t = t.substr(0, t.length - e) + this.skey2[i] + t.substr(t.length - e + 1));
        return t
    }
    ,
    this.repSign = function(t) {
        var e, i, n = [], s = [];
        for (e = 0; e < 5; e++)
            if (null == t || this.SFJRX.substr(e, 1) != this.up(t))
                for (n = this.retKC(this.SFJRX.substr(e, 1)),
                i = 0; i < n.length; i++)
                    s[s.length] = n[i];
        return s
    }
    ,
    this.sr = function(t, e, i) {
        var n = this.getSF()
          , s = this.findC(t, e, n);
        if (s)
            if (s[1]) {
                if (this.is_ie)
                    return this.ie_replaceChar(t, s[0], s[1]);
                this.replaceChar(this.oc, i - s[0], s[1])
            } else {
                var a = this.retUni(t, e, s);
                if (this.is_ie)
                    return this.ie_replaceChar(t, s, a);
                this.replaceChar(this.oc, i - s, a)
            }
        return !1
    }
    ,
    this.retUni = function(t, e, i) {
        var n, s, a, o = this.retKC(this.up(e)), r = t.charCodeAt(t.length - i), l = this.fcc(r);
        for (a = 0; a < this.skey.length; a++)
            if (this.skey[a] == r)
                return n = a < 12 ? (s = a) + 12 : (s = a - 12,
                a),
                l != this.up(l) ? o[s] : o[n]
    }
    ,
    this.ifInit = function(t) {
        var e = t.getSelection();
        this.range = e ? e.getRangeAt(0) : document.createRange()
    }
    ,
    this.ifMoz = function(t) {
        var e = t.which
          , i = this.AVIM
          , n = t.target.parentNode.wi;
        if (void 0 === n && (n = t.target.parentNode.parentNode.wi),
        !(t.ctrlKey || t.altKey && 92 != e && 126 != e)) {
            i.ifInit(n);
            var s, a = i.range.endContainer;
            i.sk = i.fcc(e),
            i.saveStr = "",
            !i.checkCode(e) && i.range.startOffset && void 0 !== a.data && (a.sel = !1,
            a.data && (i.saveStr = a.data.substr(i.range.endOffset),
            i.range.startOffset != i.range.endOffset && (a.sel = !0),
            a.deleteData(i.range.startOffset, a.data.length)),
            i.range.setEnd(a, i.range.endOffset),
            i.range.setStart(a, 0),
            a.data && (a.value = a.data,
            a.pos = a.data.length,
            a.which = e,
            i.start(a, t),
            a.insertData(a.data.length, i.saveStr),
            s = a.data.length - i.saveStr.length + i.kl,
            i.range.setEnd(a, s),
            i.range.setStart(a, s),
            i.kl = 0,
            i.specialChange && (i.specialChange = !1,
            i.changed = !1,
            a.deleteData(a.pos - 1, 1)),
            i.changed && (i.changed = !1,
            t.preventDefault())))
        }
    }
    ,
    this.FKeyPress = function() {
        var t = this.findF();
        this.sk = this.fcc(t.event.keyCode),
        this.checkCode(t.event.keyCode) || t.event.ctrlKey && 92 != t.event.keyCode && 126 != t.event.keyCode || this.start(t, this.sk)
    }
    ,
    this.checkCode = function(t) {
        if (0 == AVIMGlobalConfig.onOff || t < 45 && 42 != t && 32 != t && 39 != t && 40 != t && 43 != t || 145 == t || 255 == t)
            return !0
    }
    ,
    this.notWord = function(t) {
        return 0 <= (" \r\n#,\\;.:-_()<>+-*/=?!\"$%{}[]'~|^@&\t" + this.fcc(160)).indexOf(t)
    }
    ,
    this.nan = function(t) {
        return !(!isNaN(t) && "e" != t)
    }
    ,
    this.up = function(t) {
        if (t = t.toUpperCase(),
        this.isKHTML) {
            var e, i;
            for (e = 0; e < t.length; e++)
                0 <= (i = "êôơâăưếốớấắứềồờầằừễỗỡẫẵữệộợậặự".indexOf(t.substr(e, 1))) && (t = t.substr(0, e) + "ÊÔƠÂĂƯẾỐỚẤẮỨỀỒỜẦẰỪỄỖỠẪẴỮỆỘỢẶỰ".substr(i, 1) + t.substr(e + 1))
        }
        return t
    }
    ,
    this.findIgnore = function(t) {
        var e, i = AVIMGlobalConfig.exclude;
        for (e = 0; e < i.length; e++)
            if (t.id == i[e] && 0 < i[e].length)
                return !0
    }
    ,
    this.findF = function() {
        var t;
        for (t = 0; t < this.fID.length; t++) {
            if (this.findIgnore(this.fID[t]))
                return;
            if (this.frame = this.fID[t],
            void 0 !== this.frame)
                try {
                    if (this.frame.contentWindow.document && this.frame.contentWindow.event)
                        return this.frame.contentWindow
                } catch (t) {
                    if (this.frame.document && this.frame.event)
                        return this.frame
                }
        }
    }
    ,
    this.keyPressHandler = function(t) {
        if (this.support) {
            if (this.is_ie) {
                e = window.event.srcElement,
                i = window.event.keyCode;
                if (window.event.ctrlKey && 92 != i && 126 != i)
                    return
            } else {
                var e = t.target
                  , i = t.which;
                if (t.ctrlKey)
                    return;
                if (t.altKey && 92 != i && 126 != i)
                    return
            }
            if (!("textarea" != e.type && "text" != e.type || this.checkCode(i) || (this.sk = this.fcc(i),
            this.findIgnore(e))))
                return this.is_ie ? this.start(e, this.sk) : this.start(e, t),
                !this.changed || (this.changed = !1)
        }
    }
    ,
    this.attachEvt = function(t, e, i, n) {
        this.is_ie ? t.attachEvent("on" + e, i) : t.addEventListener(e, i, n)
    }
    ,
    this.keyDownHandler = function(t) {
        if ("iframe" == t) {
            this.frame = this.findF();
            var e = this.frame.event.keyCode
        } else
            e = this.is_ie ? window.event.keyCode : t.which;
        if (123 == e) {
            var i = document.getElementById("AVIMControl");
            i && (i.style.display = "none" == i.style.display ? "block" : "none")
        }
    }
}
function AVIMInit(t) {
    var e = !1;
    if (t.support && !t.isKHTML) {
        if (t.is_opera && t.operaVersion < 9)
            return;
        for (t.g = 0; t.g < t.fID.length; t.g++)
            if (!t.findIgnore(t.fID[t.g]))
                if (t.is_ie) {
                    var i;
                    try {
                        t.frame = t.fID[t.g],
                        void 0 !== t.frame && (t.frame.contentWindow.document ? i = t.frame.contentWindow.document : t.frame.document && (i = t.frame.document))
                    } catch (t) {}
                    if (i && ("ON" == t.up(i.designMode) || i.body && i.body.contentEditable)) {
                        for (var n = 0; n < t.attached.length; n++)
                            if (i == t.attached[n]) {
                                e = !0;
                                break
                            }
                        e || (t.attached[t.attached.length] = i,
                        t.attachEvt(i, "keydown", function() {
                            t.keyDownHandler("iframe")
                        }, !1),
                        t.attachEvt(i, "keypress", function() {
                            if (t.FKeyPress(),
                            t.changed)
                                return t.changed = !1
                        }, !1))
                    }
                } else {
                    var s;
                    try {
                        t.wi = t.fID[t.g].contentWindow,
                        (s = t.wi.document).wi = t.wi,
                        s && "ON" == t.up(s.designMode) && ((s.AVIM = t).attachEvt(s, "keypress", t.ifMoz, !1),
                        t.attachEvt(s, "keydown", t.keyDownHandler, !1))
                    } catch (t) {}
                }
    }
}
function AVIMAJAXFix() {
    for (var t = 50; t < 5e3; )
        setTimeout("AVIMInit(AVIMObj)", t),
        t += 50
}
function AddSelectOption(t, e, i) {
    var n = $("<option>", {
        value: i
    });
    return t.append(n.text(e)),
    n
}
function replaceContent(t, e, i, n) {
    var s = s instanceof jQuery ? t : $(t);
    i && s.is(":animated") && s.finish();
    var a = s.height();
    s.html(e);
    var o = s.height();
    i && a != o && (s.height(a),
    s.animate({
        height: o
    }, "fast", function() {
        s.height("auto"),
        null != n && n()
    }))
}
function RelURL2Abs(t) {
    return window.location.protocol + "//" + window.location.hostname + t
}
function ScrollTo(t) {
    $("html,body").animate({
        scrollTop: t
    }, "1000")
}
function OnAnchorScroll(t, e) {
    e.preventDefault();
    var i = $(t).attr("href");
    ScrollTo($(i).offset().top),
    history.pushState && history.pushState(null, null, i)
}
function InitialAnchorScroll() {
    var t = $(":target");
    1 == t.length && scrollTo(0, t.offset().top - $("#HeadBar").outerHeight())
}
function kajax(t, e, i) {
    return void 0 === t.type && void 0 === t.method && (t.type = "post"),
    t.dataType = "json",
    t.success = function(t) {
        "OK" == t.msg ? e(t.data) : (null != i && i(t.msg),
        notify("Lỗi: " + t.msg, {
            always: !0,
            autoDismiss: !0
        }))
    }
    ,
    t.error = function() {
        null != i && i(null),
        notify("Lỗi", {
            always: !0,
            autoDismiss: !0
        })
    }
    ,
    $.ajax(t)
}
function setCookie(t, e, i) {
    var n = new Date;
    n.setDate(n.getDate() + i);
    var s = escape(e);
    null != i && (s += "; expires=" + n.toUTCString()),
    s += "; path=/",
    document.cookie = t + "=" + s
}
function getCookie(t) {
    var e = document.cookie
      , i = e.indexOf(" " + t + "=");
    if (-1 == i && (i = e.indexOf(t + "=")),
    -1 == i)
        e = null;
    else {
        i = e.indexOf("=", i) + 1;
        var n = e.indexOf(";", i);
        -1 == n && (n = e.length),
        e = unescape(e.substring(i, n))
    }
    return e
}
function notify(t, e) {
    if (("string" != typeof (e = e || {}).cookie || 0 != getCookie(e.cookie)) && ("boolean" == typeof e.always && e.always || !(0 < $(".notification").length))) {
        $(".notification:visible").fadeOut("fast");
        var i = 0
          , n = "";
        "string" == typeof e.action && (n += '<button class="noti-action">' + e.action + "</button>",
        i++),
        "string" == typeof e.close && (n += '<button class="noti-close">' + e.close + "</button>",
        i++),
        "string" == typeof e.dismiss && (n += '<button class="noti-dismiss">' + e.dismiss + "</button>",
        i++);
        for (var s = '<div class="notification"><div class="noti-container"><div class="noti-actions">' + n + '</div><p class="noti-message">' + t, a = 0; a < i; a++)
            s += '<div class="noti-dummy-btn"></div>';
        s += "</p></div></div>";
        var o = $(s);
        o.appendTo("body");
        var r = function(t) {
            o.fadeOut("fast", function() {
                o.remove(),
                $(".notification").last().fadeIn("fast")
            }),
            "string" == typeof e.cookie && ("close" == t ? setCookie(e.cookie, 0, 1) : "dismiss" == t && setCookie(e.cookie, 0, 3650)),
            "function" == typeof e.callback && e.callback(t)
        };
        return o.find("button.noti-action").click(function() {
            r("action")
        }),
        o.find("button.noti-close").click(function() {
            r("close")
        }),
        o.find("button.noti-dismiss").click(function() {
            r("dismiss")
        }),
        1 == e.autoDismiss && setTimeout(function() {
            r("dismiss")
        }, 5e3),
        o
    }
}
function OpenModifyMemberTitlePopup(t) {
    window.open(_UrlBase + "popup_modifymembertitle.php?ID=" + t, "ModifyMemberTitle", "width=640,height=400,menubar=no,toolbar=no,status=yes,scrollbars=yes")
}
function OpenBrowseAvatarGalleryPopup(t) {
    window.open(_UrlBase + "popup_browseavatargallery.php?ID=" + t, "BrowseAvatarGallery", "width=640,height=500,menubar=no,toolbar=no,status=yes,scrollbars=yes")
}
function OpenUploadAvatarPopup(t) {
    window.open(_UrlBase + "popup_uploadavatar.php?ID=" + t, "UploadAvatar", "width=640,height=500,menubar=no,toolbar=no,status=yes,scrollbars=yes")
}
function ShowHideOnClick(t, e) {
    t = $(t),
    (e = $(e)).is(":visible") ? (t.find(".sh-btn").removeClass("fa-minus-circle").addClass("fa-plus-circle"),
    e.slideUp("fast")) : (t.find(".sh-btn").removeClass("fa-plus-circle").addClass("fa-minus-circle"),
    e.slideDown("fast"))
}
AVIMObj = new AVIM,
AVIMAJAXFix(),
AVIMObj.attachEvt(document, "mousedown", AVIMAJAXFix, !1),
AVIMObj.attachEvt(document, "keydown", AVIMObj.keyDownHandler, !0),
AVIMObj.attachEvt(document, "keypress", function(t) {
    0 == AVIMObj.keyPressHandler(t) && (AVIMObj.is_ie ? window.event.returnValue = !1 : t.preventDefault())
}, !0),
function(h) {
    function t(t) {
        if ("string" == typeof t.data && (t.data = {
            keys: t.data
        }),
        t.data && t.data.keys && "string" == typeof t.data.keys) {
            var r = t.handler
              , l = t.data.keys.toLowerCase().split(" ");
            t.handler = function(i) {
                if (this === i.target || !(h.hotkeys.options.filterInputAcceptingElements && h.hotkeys.textInputTypes.test(i.target.nodeName) || h.hotkeys.options.filterContentEditable && h(i.target).attr("contenteditable") || h.hotkeys.options.filterTextInputs && -1 < h.inArray(i.target.type, h.hotkeys.textAcceptingInputTypes))) {
                    var n = "keypress" !== i.type && h.hotkeys.specialKeys[i.which]
                      , t = String.fromCharCode(i.which).toLowerCase()
                      , s = ""
                      , e = {};
                    h.each(["alt", "ctrl", "shift"], function(t, e) {
                        i[e + "Key"] && n !== e && (s += e + "+")
                    }),
                    i.metaKey && !i.ctrlKey && "meta" !== n && (s += "meta+"),
                    i.metaKey && "meta" !== n && -1 < s.indexOf("alt+ctrl+shift+") && (s = s.replace("alt+ctrl+shift+", "hyper+")),
                    n ? e[s + n] = !0 : (e[s + t] = !0,
                    e[s + h.hotkeys.shiftNums[t]] = !0,
                    "shift+" === s && (e[h.hotkeys.shiftNums[t]] = !0));
                    for (var a = 0, o = l.length; a < o; a++)
                        if (e[l[a]])
                            return r.apply(this, arguments)
                }
            }
        }
    }
    h.hotkeys = {
        version: "0.8",
        specialKeys: {
            8: "backspace",
            9: "tab",
            10: "return",
            13: "return",
            16: "shift",
            17: "ctrl",
            18: "alt",
            19: "pause",
            20: "capslock",
            27: "esc",
            32: "space",
            33: "pageup",
            34: "pagedown",
            35: "end",
            36: "home",
            37: "left",
            38: "up",
            39: "right",
            40: "down",
            45: "insert",
            46: "del",
            59: ";",
            61: "=",
            96: "0",
            97: "1",
            98: "2",
            99: "3",
            100: "4",
            101: "5",
            102: "6",
            103: "7",
            104: "8",
            105: "9",
            106: "*",
            107: "+",
            109: "-",
            110: ".",
            111: "/",
            112: "f1",
            113: "f2",
            114: "f3",
            115: "f4",
            116: "f5",
            117: "f6",
            118: "f7",
            119: "f8",
            120: "f9",
            121: "f10",
            122: "f11",
            123: "f12",
            144: "numlock",
            145: "scroll",
            173: "-",
            186: ";",
            187: "=",
            188: ",",
            189: "-",
            190: ".",
            191: "/",
            192: "`",
            219: "[",
            220: "\\",
            221: "]",
            222: "'"
        },
        shiftNums: {
            "`": "~",
            1: "!",
            2: "@",
            3: "#",
            4: "$",
            5: "%",
            6: "^",
            7: "&",
            8: "*",
            9: "(",
            0: ")",
            "-": "_",
            "=": "+",
            ";": ": ",
            "'": '"',
            ",": "<",
            ".": ">",
            "/": "?",
            "\\": "|"
        },
        textAcceptingInputTypes: ["text", "password", "number", "email", "url", "range", "date", "month", "week", "time", "datetime", "datetime-local", "search", "color", "tel"],
        textInputTypes: /textarea|input|select/i,
        options: {
            filterInputAcceptingElements: !0,
            filterTextInputs: !0,
            filterContentEditable: !0
        }
    },
    h.each(["keydown", "keyup", "keypress"], function() {
        h.event.special[this] = {
            add: t
        }
    })
}(jQuery || this.jQuery || window.jQuery);
var POPUP_POS_MOUSE = 0
  , POPUP_POS_BELOW_LEFT = 1
  , POPUP_POS_BELOW_RIGHT = 2
  , PopupList = new Array
  , PopupIndex = -1;
function PopupWindowIn(t) {
    var e = $(t.target).data("popup-idx");
    if (null != e) {
        if (-1 != PopupIndex) {
            if (PopupIndex == e)
                return;
            PopupList[PopupIndex].btn.fadeOut(150)
        }
        var i = PopupList[PopupIndex = e].btn
          , n = PopupList[e].wnd;
        i.css("background-color", "#ffff77"),
        n.fadeIn(150);
        var s = n.data("popup-func");
        if (s) {
            var a = n.data("popup-data");
            null == a.callCount && (a.callCount = 0),
            window[s](i, n, a),
            a.callCount++,
            n.data("popup-data", a)
        }
        var o, r, l, h = $(document).scrollLeft(), d = h + $(window).width(), c = $(document).scrollTop();
        $(window).height();
        PopupList[PopupIndex].wndPos == POPUP_POS_MOUSE ? (o = t.clientX + h,
        r = t.clientY + c) : PopupList[PopupIndex].wndPos == POPUP_POS_BELOW_LEFT ? (o = i.offset().left,
        r = i.offset().top + i.outerHeight() - 1) : PopupList[PopupIndex].wndPos == POPUP_POS_BELOW_RIGHT && (o = i.offset().left + i.outerWidth() - n.outerWidth(),
        r = i.offset().top + i.outerHeight() - 1),
        l = o + n.outerWidth(),
        r + n.outerHeight(),
        d < l && (o -= l - d),
        o < h && (o = h),
        r < c && (r = c),
        n.css({
            left: o,
            top: r
        })
    }
}
function PopupWindowOut(t) {
    if (-1 != PopupIndex) {
        var e = PopupList[PopupIndex].btn
          , i = PopupList[PopupIndex].wnd
          , n = t.relatedTarget;
        e.is(n) || i.is(n) || $.contains(e[0], n) || $.contains(i[0], n) || (i.fadeOut(150),
        e.css("background-color", ""),
        PopupIndex = -1)
    }
}
function PopupInit(t, e, i) {
    t = $(t),
    e = $(e);
    if (0 != t.length && 0 != e.length) {
        var n = PopupList.push({
            btn: t,
            wnd: e,
            wndPos: i
        }) - 1;
        t.data("popup-idx", n),
        e.data("popup-idx", n),
        t.mouseover(PopupWindowIn),
        t.mouseout(PopupWindowOut),
        e.mouseout(PopupWindowOut)
    }
}
function PopupWindowOnPopup(t, e, i) {
    var n = e.find(".popup-title")
      , s = e.find(".popup-content");
    if (0 != n.length && 0 != s.length) {
        if (i.resetTitle) {
            var a = t[0].innerText;
            0 < a.indexOf("\n") && (a = a.split("\n")[0].replace(/[.,;:\s]+$/g, "") + "…"),
            n.text(a)
        }
        if (!(0 < i.callCount)) {
            var o = t.data("related-poems");
            null != o && 0 < o.length && s.append('<div class="popup-related-poems"><p>Bài khác có cùng chú thích:</p><ul>' + o.map(function(t) {
                return '<li><a href="' + t.url + '">' + t.title + "</a> (" + t.author + ")</li>"
            }).join("") + "</ul></div>")
        }
    }
}
function QSearch_Show(t) {
    var e = $("#QSChooser");
    t != e.is(":visible") && ($("#QuickSearch").toggleClass("shown"),
    t ? e.slideDown(150) : e.slideUp(150))
}
function QS_QuickResult(t, e, i) {
    var n = $("#QSInput").val();
    /(\u0323|\u0303|\u0300|\u0301|\u0309)/.test(n) ? replaceContent("#QSResult", "Đề nghị không dùng Unicode tổ hợp", !1) : (replaceContent("#QSResult", '<i class="fa fa-fw fa-spinner fa-spin"></i> Ðang tìm...', !1),
    $.get(_UrlBase + "qsearch.xml.php", {
        Core: t,
        Field: e,
        Value: n,
        Page: i
    }).done(function(t) {
        $("#QSChooser ul").css("display", "none"),
        replaceContent("#QSResult", t, !0)
    }).fail(function() {
        replaceContent("#QSResult", "Lỗi: không tải được dữ liệu", !0)
    }))
}
function QS_SearchResult(t, e) {
    window.location = "ftopic" == t ? _UrlBase + "forum_search.php?OnlyTopic=1&" + e + "=" + encodeURIComponent($("#QSInput").val()) : _UrlBase + "search" + t + ".php?" + e + "=" + encodeURIComponent($("#QSInput").val())
}
function QS_UseGoogle() {
    window.location = _UrlBase + "google_search.php?q=" + encodeURIComponent($("#QSInput").val())
}
function QS_OnClose() {
    $("#QSInput").val("").trigger("input")
}
function ShowLikeInfo(t) {
    var e = $(t)
      , i = e.next();
    i.is(":visible") || (i.fadeIn(),
    e.contents().unwrap())
}
function SendRating(t, e, i, n) {
    var s = $(t);
    holder = s.parent(),
    holder.hasClass("disabled") || (holder.addClass("disabled"),
    kajax({
        url: _UrlBase + "post-rating.json.php",
        data: {
            Type: e,
            Target: i,
            Score: n
        }
    }, function(t) {
        holder.find(".star-icon").tooltip("destroy"),
        holder.parent().html(t),
        holder.find(".star-icon").tooltip()
    }, function(t) {
        holder.removeClass("disabled")
    }))
}
function BoundWithHVDic(t, e, i) {
    return null == i && (i = "hv"),
    '<a class="AutoHVDic" target="_blank" href="https://hvdic.thivien.net/w' + i + "/" + t + '">' + (null != e ? e : t) + "</a>"
}
function CJKRegexClass() {
    return "[⺀-⻳]|[⼀-⿕]|[一-鿿]|[㐀-䶿]|[豈-﫿]|[\ud840-\ud868][\udc00-\udfff]|\ud869[\udc00-\udedf]|[\ud86a-\ud86c][\udc00-\udfff]|\ud869[\udf00-\udfff]|\ud86d[\udc00-\udf3f]|\ud86d[\udf40-\udfff]|\ud86e[\udc00-\udc1f]|[\ud86f-\ud872][\udc00-\udfff]|\ud86e[\udc20-\udfff]|\ud873[\udc00-\udeaf]|\ud873[\udeb0-\udfff]|[\ud874-\ud879][\udc00-\udfff]|\ud87a[\udc00-\udfef]|\ud87e[\udc00-\ude1d]"
}
function Chinese2Links() {
    var a = new RegExp(CJKRegexClass(),"g");
    $(".HanChinese").each(function(t, e) {
        var s = $(e).data("han-lang") || "hv";
        $(e).contents().filter(function() {
            return 3 == this.nodeType
        }).each(function(t, e) {
            var i, n = !1;
            i = e.nodeValue.replace(a, function(t) {
                return n = !0,
                BoundWithHVDic(t, t, s)
            }),
            n && $(e).replaceWith(i)
        })
    })
}
function Chinese2Simplified(h) {
    if (Chinese2Simplified.ready) {
        for (var t = !Chinese2Simplified.transcripted, d = Chinese2Simplified.elements, e = 0; e < d.length; e++)
            d[e].html(t ? Chinese2Simplified.newContents[e] : Chinese2Simplified.oldContents[e]),
            t && d[e].find(".multi-trans").tooltip();
        Chinese2Simplified.transcripted = t
    } else {
        var c = $('<i class="fa fa-spinner fa-spin"></i>');
        $(h).hide(),
        c.insertAfter(h);
        d = [];
        var f = []
          , n = []
          , u = [];
        $(".HanChinese.transcriptable").each(function(t, e) {
            var i = $(e);
            d.push(i),
            f.push(i.data("han-lang") || "hv"),
            n.push(e.innerText),
            u.push(i.html())
        }),
        kajax({
            url: _UrlBase + "transcript.json.php",
            data: {
                mode: "t2s",
                inputs: n
            }
        }, function(t) {
            c.remove(),
            $(h).show();
            for (var e = [], i = 0; i < t.results.length; i++) {
                for (var n, s = "", a = t.results[i], o = 0; o < a.length; o++)
                    if (1 == (n = a[o]).t)
                        s += n.o;
                    else if (2 == n.t)
                        "\r" == n.i || "\n" == n.i ? (s += "<br/>",
                        o < a.length - 1 && "\r" == n.i && "\n" == a[o + 1].i && o++) : s += n.i;
                    else if (3 == n.t)
                        if (0 == n.o.length)
                            s += BoundWithHVDic(n.i, n.i, f[i]);
                        else if (1 == n.o.length)
                            s += BoundWithHVDic(n.o[0], n.o[0], f[i]);
                        else {
                            for (var r = "Giản thể khác: " + n.o[1], l = 2; l < n.o.length; l++)
                                r += " | " + n.o[l];
                            s += BoundWithHVDic(n.o[0], '<span data-toggle="tooltip" data-placement="bottom" title="' + r + '" class="multi-trans">' + n.o[0] + "</span>", f[i])
                        }
                e.push(s),
                d[i].html(s),
                d[i].find(".multi-trans").tooltip()
            }
            Chinese2Simplified.elements = d,
            Chinese2Simplified.oldContents = u,
            Chinese2Simplified.newContents = e,
            Chinese2Simplified.transcripted = !0,
            Chinese2Simplified.ready = !0
        }, function(t) {
            c.remove(),
            $(h).show()
        })
    }
}
function SwitchPoemView(t, e) {
    var i = $(t).closest(".poem-content");
    e ? (i.find(".poem-view-separated").hide(),
    i.find(".poem-view-alternative").fadeIn("fast")) : (i.find(".poem-view-alternative").hide(),
    i.find(".poem-view-separated").fadeIn("fast"))
}
function Navbar_and_Scroll() {
    var t = $(window).scrollTop()
      , e = $("#HeadBar")
      , i = e.hasClass("reduced");
    0 == t ? i && (e.removeClass("reduced"),
    $(".reduced-hidden").show(),
    $(".reduced-shown").hide(),
    $("#HB-First").slideDown("fast")) : i || (e.addClass("reduced"),
    $(".reduced-hidden").hide(),
    $(".reduced-shown").show(),
    $("#HB-First").slideUp("fast"));
    var n = $("#ScrollToTop")
      , s = n.hasClass("shown");
    100 < t ? s || n.addClass("shown") : s && n.removeClass("shown")
}
Chinese2Simplified.ready = !1;
var FBLoginResponse = null;
function Facebook_Init() {
    if (_FacebookIntegration) {
        var t = !1;
        window.fbAsyncInit = function() {
            t || (t = !0,
            FB.init({
                appId: _FacebookAppID,
                xfbml: !0,
                version: "v14.0"
            }),
            UpdateFBShareCount(),
            FB.getLoginStatus(function(t) {
                "connected" != t.status && "not_authorized" != t.status || (FBLoginResponse = t)
            }))
        }
        ,
        "undefined" == typeof FB ? $.getScript("https://connect.facebook.net/en_US/sdk.js") : window.fbAsyncInit()
    }
}
function UpdateFBShareCount() {
    $(".FBSharer").each(function(t, e) {
        var i;
        i = (e = $(e)).data("fbsharer-url") ? RelURL2Abs(e.data("fbsharer-url")) : window.location,
        FB.api("/?id=" + i, {
            fields: "engagement"
        }, function(t) {
            t && !t.error && t.engagement && e.append(" <span class='badge'>" + t.engagement.reaction_count + "</span>")
        })
    })
}
function ShareOnFacebook(t) {
    null == t && (t = window.location.href),
    _FacebookIntegration ? FB.ui({
        method: "feed",
        link: t,
        picture: window.location.host + "/image/logo_on_top.jpg",
        name: document.title,
        caption: "Thi Viện",
        description: $("meta[name=description]").attr("content").replace(/\n/g, "<center></center>")
    }, function(t) {
        console.log(t)
    }) : window.open("https://www.facebook.com/sharer/sharer.php?s=100&p[title]=" + document.title + "&p[images][0]=" + window.location.host + "/image/logo_on_top.jpg&p[url]=" + t)
}
function ShareOnFacebook_Content(t, e, i) {
    _FacebookIntegration ? kajax({
        url: _UrlBase + "facebook_share.json.php",
        async: !1,
        data: {
            Type: t,
            UID: e
        }
    }, function(t) {
        FB.ui({
            method: "feed",
            link: t.link,
            picture: t.picture,
            name: t.name,
            caption: t.caption,
            description: t.description.replace(/\n/g, "<center></center>")
        }, function() {})
    }) : ShareOnFacebook($(i).data("fbsharer-url"))
}
function SwitchViewMode(t) {
    setCookie("THIVIEN_VIEWMODE", t, 365),
    window.location.reload()
}
function SetVNTypingMode(t) {
    var e = $("#VNMode span");
    switch (t) {
    case 0:
        AVIMObj.setMethod(-1),
        e.text("Tắt");
        break;
    case 1:
        AVIMObj.setMethod(1),
        e.text("TELEX");
        break;
    case 2:
        AVIMObj.setMethod(2),
        e.text("VNI");
        break;
    case 3:
        AVIMObj.setMethod(0),
        e.text("Loạn")
    }
}
function ToggleVNTypingMode() {
    4 == ++_VNTypingMode && (_VNTypingMode = 0),
    SetVNTypingMode(_VNTypingMode)
}
var adsBlockNoti = null;
head.ready(function() {
    InitialAnchorScroll(),
    $(window).scroll(Navbar_and_Scroll),
    $(".list-item-header").click(function() {
        var t = $(this)
          , e = t.next(".list-item-detail")
          , i = t.parent().siblings(".list-item").andSelf().find(".list-item-detail");
        "none" == e.css("display") ? i.slideDown(150) : i.slideUp(150)
    }),
    $(".list-item-header a").click(function(t) {
        t.stopPropagation()
    }),
    $(".collapse-btn").click(function() {
        var t = $(this)
          , e = t.parent().next();
        t.hasClass("fa-minus-circle") ? (t.removeClass("fa-minus-circle").addClass("fa-plus-circle"),
        e.slideUp()) : (t.removeClass("fa-plus-circle").addClass("fa-minus-circle"),
        e.slideDown())
    }),
    $("form").submit(function() {
        $(this).find("input,select").each(function() {
            "" == this.value && $(this).attr("name", "")
        })
    }),
    Chinese2Links(),
    $('[data-toggle="tooltip"]').tooltip(),
    Facebook_Init(),
    $(document).bind("keydown", "alt+1", function() {
        document.location = _UrlBase
    }).bind("keydown", "alt+2", function() {
        document.location = _UrlBase + (_UrlRewrite ? "forum" : "forum.php")
    }).bind("keydown", "alt+3", function() {
        $("#QSInput").focus()
    }).bind("keydown", "alt+4", function() {
        null != _UserUID && (document.location = _UrlBase + (_UrlRewrite ? "-/member-" : "viewmember.php?UID=") + _UserUID)
    }).bind("keydown", "alt+5", function() {
        null != _UserUID && (document.location = _UrlBase + "privmsg_mailbox.php?MailBox=Inbox")
    }),
    dauCu = 0,
    null == _VNTypingMode && (_VNTypingMode = 1),
    SetVNTypingMode(_VNTypingMode),
    $("#LoginDlg").on("shown.bs.modal", function() {
        $("#LoginDlg #Login").focus()
    }),
    $("#QSInput").bind("input", function() {
        replaceContent("#QSResult", "", !0),
        $("#QSOptions").css("display", "block"),
        QSearch_Show("" != $(this).val())
    }).bind("keydown", "esc", function() {
        "" != this.value ? QS_OnClose() : $(this).blur()
    }),
    window.location.pathname != _UrlBase + "topics.php" && setTimeout(function() {
        notify("Bạn bị lạc trong Thi Viện vì có nội dung quá đồ sộ?", {
            action: "Chỉ dẫn làm quen",
            close: "Xem sau",
            dismiss: "Không hiện lại",
            cookie: "newcomerguidance",
            callback: function(t) {
                "action" == t && (window.location = _UrlBase + "topics.php")
            }
        })
    }, 7e3),
    $(".deleted").hover(function() {
        var t = $(this);
        t.data("old-html", t.html()).html(t.data("content"))
    }, function() {
        var t = $(this);
        t.html(t.data("old-html"))
    })
});
var attachmentKeyInc = 1
  , attachmentInfo = [];
function activeSlideAttInfIndex(t) {
    var e = t.find("#main-panel .carousel li.active");
    return 0 != e.length && e.data("slide-to")
}
function activeSlideAttInf(t) {
    var e = activeSlideAttInfIndex(t);
    return !1 !== e && attachmentInfo[t.data("attachment-inf")][e]
}
function manageAttachments(d, c) {
    var f = "inf" + attachmentKeyInc;
    attachmentKeyInc++;
    var u = $('<div class="modal fade" tabindex="-1" data-attachment-inf="' + f + '">\t\t\t<div class="modal-dialog">\t\t\t  <div class="modal-content">\t\t\t\t<div class="modal-header">\t\t\t\t  <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>\t\t\t\t  <h4 class="modal-title">Tài liệu đính kèm</h4>\t\t\t\t</div>\t\t\t\t<div class="modal-body">\t\t\t\t\t<div id="main-panel"><p><i class="fa fa-spinner fa-spin"></i> Đang tải dữ liệu...</p></div>\t\t\t\t</div>\t\t\t\t<div class="modal-footer">\t\t\t\t\t<a class="btn btn-default" href="javascript:void(0)" data-dismiss="modal">Đóng</a>\t\t\t\t</div>\t\t\t  </div>\t\t\t</div>\t\t</div>');
    return d.allow_edit && (manageAttachments_add_edit(d, u, "upload"),
    manageAttachments_add_edit(d, u, "add-url"),
    manageAttachments_add_edit(d, u, "edit"),
    manageAttachments_delete(d, u)),
    u.on("shown.bs.modal", function() {
        var t = {
            cat: d.category,
            name: d.name
        };
        null != d.mime_major && (t.mime = d.mime_major),
        $.getJSON(_UrlBase + "attachment-enum.json.php", t).fail(function() {
            u.find("#main-panel").html("Lỗi, không tải được dữ liệu"),
            u.find("#upload-btn,#add-url-btn,#delete-btn").attr("disabled", !0)
        }).done(function(t) {
            if (0 == t.length)
                return u.find("#main-panel").html("Chưa có tài liệu đính kèm nào"),
                void u.find("#delete-btn").attr("disabled", !0);
            attachmentInfo[f] = t,
            void 0 === c ? c = 0 : c < 0 && (c = t.length + c);
            for (var e = Math.max(100, window.innerHeight - 250), i = "att-carousel-dlg-" + d.category + "-" + d.name + "-" + attachmentKeyInc, n = "", s = "", a = 0; a < t.length; a++) {
                var o = t[a]
                  , r = a == c;
                n += '<li data-target="#' + i + '" data-slide-to="' + a + '"' + (r ? ' class="active"' : "") + "></li>",
                s += '<div class="item' + (r ? " active" : "") + '" style="height:100%"><div id="item' + a + '" class="attachment-content" data-lazy-load="' + (r ? 0 : 1) + '" style="width:100%; height:100%">' + (r ? o.embed : '<p style="text-align:center; padding-top:20px"><i class="fa fa-spinner fa-spin"></i> Đang tải...</p>') + '</div><div class="carousel-caption">' + o.desc + ' (<a href="' + o.poster_url + '">' + o.poster_name + "</a> gửi ngày " + o.post_date + ")\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t</div>"
            }
            var l = '<div id="' + i + '" class="carousel slide carousel-fade attachment-carousel" data-ride="carousel" data-interval="false">\t\t\t\t\t\t\t\t<ol class="carousel-indicators">' + n + '</ol>\t\t\t\t\t\t\t\t<div class="carousel-inner" style="height:' + e + 'px">' + s + "</div>\t\t\t\t\t\t\t</div>";
            u.find("#main-panel").html(l),
            setupPlyr();
            var h = $("#" + i);
            h.on("slid.bs.carousel", function() {
                var t = activeSlideAttInfIndex(u)
                  , e = h.find("#item" + t);
                0 != e.data("lazy-load") && (e.data("lazy-load", 0),
                e.html(activeSlideAttInf(u).embed),
                setupPlyr())
            })
        })
    }).on("hidden.bs.modal", function() {
        delete attachmentInfo[u.data("attachment-inf")],
        u.remove()
    }).modal({
        backdrop: "static",
        keyboard: !0,
        show: !0
    }),
    !1
}
function manageAttachments_message(t, e, i) {
    t.find("#message").attr("class", "alert " + e).css("display", "block").html(i)
}
function manageAttachments_add_edit(r, l, t) {
    var h, e;
    if ("upload" == t)
        h = !1,
        e = '<a id="upload-btn" class="btn btn-default" href="javascript:void(0)"><i class="fa fa-upload"></i> Tải file</a>';
    else if ("add-url" == t)
        h = !1,
        e = '<a id="add-url-btn" class="btn btn-default" href="javascript:void(0)"><i class="fa fa-link"></i> Thêm URL</a>';
    else {
        if ("edit" != t)
            return;
        h = !0,
        e = '<a id="edit-btn" class="btn btn-default" href="javascript:void(0)"><i class="fa fa-edit"></i> Sửa</a>'
    }
    $(e).appendTo(l.find(".modal-footer")).click(function() {
        var s, a;
        if ("upload" == t)
            s = !1;
        else if ("add-url" == t)
            s = !0;
        else if ("edit" == t) {
            if (!1 === (a = activeSlideAttInf(l)))
                return;
            s = a.external
        }
        l.find("#delete-btn, #upload-btn, #add-url-btn, #edit-btn").attr("disabled", !0),
        l.find("#main-panel").slideUp();
        var o = $('<div id="add-edit-panel" style="display:none">\t\t\t\t<div class="form-group">' + (s ? '<label for="desc">URL (YouTube, Zing, Nhaccuatui):</label> <input id="url" type="text" class="form-control input-sm">' : '<label for="file">File' + (h ? " (bỏ qua nếu không đổi)" : "") + ':</label> <input id="file" type="file" class="form-control input-sm">') + '<label for="desc">Chú thích:</label> <input id="desc" type="text" class="form-control input-sm">\t\t\t\t</div>\t\t\t\t<p id="message" style="display:none"></p>\t\t\t\t<p style="text-align:center">\t\t\t\t\t<a id="ok-btn" class="btn btn-primary" href="javascript:void(0)">Gửi</a>\t\t\t\t\t<a id="cancel-btn" class="btn btn-default" href="javascript:void(0)">Huỷ</a>\t\t\t\t</p>\t\t\t</div>');
        h && (s && o.find("#url").val(a.url),
        o.find("#desc").val(a.desc)),
        o.appendTo(l.find(".modal-body")).slideDown(),
        o.find("#ok-btn").click(function() {
            var t = new FormData;
            if (t.append("cat", r.category),
            null != r.subfolder && t.append("folder", r.subfolder),
            null != r.mime_major && t.append("mime", r.mime_major),
            t.append("name", r.name),
            h && (t.append("edit", 1),
            t.append("edit_id", a.id)),
            s) {
                var e = $.trim(o.find("#url").val());
                if (0 == e.length)
                    return void manageAttachments_message(o, "alert-danger", "Bạn chưa nhập URL");
                t.append("url", e)
            } else {
                var i = o.find("#file").prop("files");
                if (0 == i.length) {
                    if (!h)
                        return void manageAttachments_message(o, "alert-danger", "Bạn chưa chọn file để upload")
                } else
                    t.append("file", i[0])
            }
            var n = $.trim(o.find("#desc").val());
            0 != n.length ? (t.append("desc", n),
            manageAttachments_message(o, "alert-info", '<i class="fa fa-spinner fa-spin"></i> Đang gửi: <span id="progress">0</span>%...'),
            $.ajax({
                url: _UrlBase + "attachment-upload.php",
                data: t,
                processData: !1,
                contentType: !1,
                method: "POST",
                xhr: function() {
                    var t = new window.XMLHttpRequest;
                    return t.upload.addEventListener("progress", function(t) {
                        t.lengthComputable && o.find("#progress").text(Math.round(100 * t.loaded / t.total))
                    }, !1),
                    t
                },
                error: function(t, e, i) {
                    manageAttachments_message(o, "alert-danger", "Lỗi")
                },
                success: function(t) {
                    if ("OK" == t) {
                        var e = h ? activeSlideAttInfIndex(l) : -1;
                        l.modal("hide"),
                        manageAttachments(r, e)
                    } else
                        manageAttachments_message(o, "alert-danger", "Lỗi: " + t)
                }
            })) : manageAttachments_message(o, "alert-danger", "Bạn chưa nhập thông tin chú thích")
        }),
        o.find("#cancel-btn").click(function() {
            l.find("#add-edit-panel").slideUp("fast", function() {
                $(this).remove()
            }),
            l.find("#main-panel").slideDown(),
            l.find("#delete-btn, #upload-btn, #add-url-btn, #edit-btn").attr("disabled", !1)
        })
    })
}
function manageAttachments_delete(n, s) {
    $('<a id="delete-btn" class="btn btn-danger" href="javascript:void(0)"><i class="fa fa-remove"></i> Xoá</a>').appendTo(s.find(".modal-footer")).click(function() {
        s.find("#delete-btn, #upload-btn, #add-url-btn, #edit-btn").attr("disabled", !0),
        s.find("#main-panel").slideUp();
        var i = $('<div id="delete-panel" style="display:none">\t\t\t\t<p>Bạn muốn xoá tài liệu đính kèm này?</p>\t\t\t\t<div class="form-group">\t\t\t\t\t<label for="reason">Lý do:</label> <input id="reason" type="text" class="form-control input-sm">\t\t\t\t</div>\t\t\t\t<p id="message" style="display:none"></p>\t\t\t\t<p style="text-align:center">\t\t\t\t\t<a id="ok-btn" class="btn btn-danger" href="javascript:void(0)">Có</a>\t\t\t\t\t<a id="cancel-btn" class="btn btn-default" href="javascript:void(0)">Không</a>\t\t\t\t</p>\t\t\t</div>');
        i.appendTo(s.find(".modal-body")).slideDown(),
        i.find("#ok-btn").click(function() {
            var t = activeSlideAttInf(s);
            if (!1 !== t) {
                var e = $.trim(i.find("#reason").val());
                e ? (manageAttachments_message(i, "alert-info", '<i class="fa fa-spinner fa-spin"></i> Đang xoá...'),
                $.ajax({
                    url: _UrlBase + "attachment-delete.php",
                    data: {
                        id: t.id,
                        reason: e
                    },
                    method: "GET",
                    error: function() {
                        manageAttachments_message(i, "alert-danger", "Lỗi")
                    },
                    success: function(t) {
                        "OK" == t ? (s.modal("hide"),
                        manageAttachments(n)) : manageAttachments_message(i, "alert-danger", "Lỗi: " + t)
                    }
                })) : manageAttachments_message(i, "alert-danger", "Chưa nhập lý do xoá")
            } else
                manageAttachments_message(i, "alert-danger", "Chưa chọn file cần xoá")
        }),
        i.find("#cancel-btn").click(function() {
            s.find("#delete-panel").slideUp("fast", function() {
                $(this).remove()
            }),
            s.find("#main-panel").slideDown(),
            s.find("#delete-btn, #upload-btn, #add-url-btn, #edit-btn").attr("disabled", !1)
        })
    })
}
function staticAttachmentCarousel(t, e, n, s) {
    head.ready(function() {
        var i = $("#" + n);
        i.find(".carousel-caption i.fa-external-link-square").css("cursor", "pointer").click(function() {
            manageAttachments({
                category: t,
                subfolder: null,
                mime_major: null,
                name: e,
                allow_edit: !1
            }, i.find("li.active").data("slide-to"))
        }),
        i.on("slid.bs.carousel", function() {
            var t = i.find("li.active").data("slide-to")
              , e = i.find("#item" + t);
            0 != e.data("lazy-load") && (e.data("lazy-load", 0),
            e.html(s[t].embed),
            setupPlyr())
        })
    })
}
function setupPlyr() {
    var t = {
        controls: ["play", "restart", "current-time", "duration", "mute", "volume"]
    };
    null == setupPlyr.plyr ? ($.get(_UrlBase + "lib/plyr/sprite.svg", function(t) {
        $("body").prepend('<div style="display:none">' + t + "</div>")
    }, "html"),
    head.load([_UrlBase + "lib/plyr/plyr.css", _UrlBase + "lib/plyr/plyr.js"], function() {
        setupPlyr.plyr = !0,
        plyr.setup(t)
    })) : plyr.setup(t)
}
