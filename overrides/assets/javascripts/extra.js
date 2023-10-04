function BoundWithHVDic(t, e, i) {
    return null == i && (i = "hv"),
    '<a class="autoHVDic" target="_blank" href="https://hvdic.thivien.net/w' + i + "/" + t + '">' + (null != e ? e : t) + "</a>"
}

function CJKRegexClass() {
    return "[⺀-⻳]|[⼀-⿕]|[一-鿿]|[㐀-䶿]|[豈-﫿]|[\ud840-\ud868][\udc00-\udfff]|\ud869[\udc00-\udedf]|[\ud86a-\ud86c][\udc00-\udfff]|\ud869[\udf00-\udfff]|\ud86d[\udc00-\udf3f]|\ud86d[\udf40-\udfff]|\ud86e[\udc00-\udc1f]|[\ud86f-\ud872][\udc00-\udfff]|\ud86e[\udc20-\udfff]|\ud873[\udc00-\udeaf]|\ud873[\udeb0-\udfff]|[\ud874-\ud879][\udc00-\udfff]|\ud87a[\udc00-\udfef]|\ud87e[\udc00-\ude1d]"
}

function Chinese2Links() {
    var a = new RegExp(CJKRegexClass(),"g");
    $(".hanco").each(function(t, e) {
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

function replaceTitleAttributes(){
    var elements = document.querySelectorAll('abbr[title]'),
        i;
    for(i = 0; i < elements.length; i += 1){
        elements[i].setAttribute('data-title', elements[i].title);
        elements[i].removeAttribute('title');
    }
}
window.onload = replaceTitleAttributes;

head.ready(function() {
    Chinese2Links(),
    $(".han-row-content-II").css("font-style", "italic"),
    $(".deleted").hover(function() {
        var t = $(this);
        t.data("old-html", t.html()).html(t.data("content"))
    }, function() {
        var t = $(this);
        t.html(t.data("old-html"))
    })
});
