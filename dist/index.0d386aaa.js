/*!
 * jCarouselLite - v1.1 - 2014-09-28
 * http://www.gmarwaha.com/jquery/jcarousellite/
 * Copyright (c) 2014 Ganeshji Marwaha
 * Licensed MIT (https://github.com/ganeshmax/jcarousellite/blob/master/LICENSE)
*/ !function(a) {
    a.jCarouselLite = {
        version: "1.1"
    }, a.fn.jCarouselLite = function(b) {
        return b = a.extend({}, a.fn.jCarouselLite.options, b || {}), this.each(function() {
            function c(a) {
                return n || (clearTimeout(A), z = a, b.beforeStart && b.beforeStart.call(this, i()), b.circular ? j(a) : k(a), m({
                    start: function() {
                        n = !0;
                    },
                    done: function() {
                        b.afterEnd && b.afterEnd.call(this, i()), b.auto && h(), n = !1;
                    }
                }), b.circular || l()), !1;
            }
            function d() {
                if (n = !1, o = b.vertical ? "top" : "left", p = b.vertical ? "height" : "width", q = B.find(">ul"), r = q.find(">li"), x = r.size(), w = x < b.visible ? x : b.visible, b.circular) {
                    var c = r.slice(x - w).clone(), d = r.slice(0, w).clone();
                    q.prepend(c).append(d), b.start += w;
                }
                s = a("li", q), y = s.size(), z = b.start;
            }
            function e() {
                B.css("visibility", "visible"), s.css({
                    overflow: "hidden",
                    "float": b.vertical ? "none" : "left"
                }), q.css({
                    margin: "0",
                    padding: "0",
                    position: "relative",
                    "list-style": "none",
                    "z-index": "1"
                }), B.css({
                    overflow: "hidden",
                    position: "relative",
                    "z-index": "2",
                    left: "0px"
                }), !b.circular && b.btnPrev && 0 == b.start && a(b.btnPrev).addClass("disabled");
            }
            function f() {
                t = b.vertical ? s.outerHeight(!0) : s.outerWidth(!0), u = t * y, v = t * w, s.css({
                    width: s.width(),
                    height: s.height()
                }), q.css(p, u + "px").css(o, -(z * t)), B.css(p, v + "px");
            }
            function g() {
                b.btnPrev && a(b.btnPrev).click(function() {
                    return c(z - b.scroll);
                }), b.btnNext && a(b.btnNext).click(function() {
                    return c(z + b.scroll);
                }), b.btnGo && a.each(b.btnGo, function(d, e) {
                    a(e).click(function() {
                        return c(b.circular ? w + d : d);
                    });
                }), b.mouseWheel && B.mousewheel && B.mousewheel(function(a, d) {
                    return c(d > 0 ? z - b.scroll : z + b.scroll);
                }), b.auto && h();
            }
            function h() {
                A = setTimeout(function() {
                    c(z + b.scroll);
                }, b.auto);
            }
            function i() {
                return s.slice(z).slice(0, w);
            }
            function j(a) {
                var c;
                a <= b.start - w - 1 ? (c = a + x + b.scroll, q.css(o, -(c * t) + "px"), z = c - b.scroll) : a >= y - w + 1 && (c = a - x - b.scroll, q.css(o, -(c * t) + "px"), z = c + b.scroll);
            }
            function k(a) {
                0 > a ? z = 0 : a > y - w && (z = y - w);
            }
            function l() {
                a(b.btnPrev + "," + b.btnNext).removeClass("disabled"), a(z - b.scroll < 0 && b.btnPrev || z + b.scroll > y - w && b.btnNext || []).addClass("disabled");
            }
            function m(c) {
                n = !0, q.animate("left" == o ? {
                    left: -(z * t)
                } : {
                    top: -(z * t)
                }, a.extend({
                    duration: b.speed,
                    easing: b.easing
                }, c));
            }
            var n, o, p, q, r, s, t, u, v, w, x, y, z, A, B = a(this);
            d(), e(), f(), g();
        });
    }, a.fn.jCarouselLite.options = {
        btnPrev: null,
        btnNext: null,
        btnGo: null,
        mouseWheel: !1,
        auto: null,
        speed: 200,
        easing: null,
        vertical: !1,
        circular: !0,
        visible: 3,
        start: 0,
        scroll: 1,
        beforeStart: null,
        afterEnd: null
    };
}(jQuery);

//# sourceMappingURL=index.0d386aaa.js.map
