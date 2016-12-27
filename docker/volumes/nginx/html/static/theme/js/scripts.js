!function (t) {
    function e(n) {
        if (i[n])
            return i[n].exports;
        var s = i[n] = {
            exports: {},
            id: n,
            loaded: !1
        };
        return t[n].call(s.exports, s, s.exports, e), s.loaded = !0, s.exports
    }
    var i = {};
    return e.m = t, e.c = i, e.p = "", e(0)
}([function (t, e, i) {
        (function (t) {
            "use strict";

            function e(t, e, i) {
                return e in t ? Object.defineProperty(t, e, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = i, t
            }
            i(3), i(16), i(17), i(18), i(19), i(20);
            !function (t) {
                function i() {
                    var e = t(".gl-side-menu-wrap");
                    e.length && n()
                }

                function n() {
                    l.addEventListener("click", s), c && c.addEventListener("click", s)
                }

                function s() {
                    p ? classie.remove(a, "gl-show-menu") : classie.add(a, "gl-show-menu"), p = !p
                }

                function r() {
                    var e = g - 5;
                    t("ul.gl-gallery li").eq(4).find("a").addClass("gl-more-img-text").prepend("<span>+" + e + "</span>")
                }
                var o;
                t(window).load(function () {
                    t("#gl-circle-loader-wrapper").fadeOut(500)
                });
                new Swiper(".gl-jobs-testimonial", {
                    slidesPerView: 1,
                    autoplay: 6e3,
                    loop: !0
                }), new Swiper(".gl-agent-testimonial", (o = {
                    slidesPerView: 4,
                    paginationClickable: !0,
                    spaceBetween: 15,
                    pagination: ".gl-agent-pagination"
                }, e(o, "paginationClickable", !0), e(o, "loop", !0), e(o, "breakpoints", {
                    1024: {
                        slidesPerView: 4
                    },
                    800: {
                        slidesPerView: 3
                    },
                    640: {
                        slidesPerView: 2
                    },
                    400: {
                        slidesPerView: 1
                    }
                }), o));
                t("#gl-slogan").typed({
                    stringsElement: t("#typed-strings"),
                    startDelay: 500,
                    typeSpeed: 100,
                    backDelay: 1500,
                    loop: !0,
                    contentType: "html",
                    loopCount: !1
                }), document.createElement("picture"), t("#gl-quality-rating, #gl-service-rating,#gl-response-rating").raty({
                    cancel: !1,
                    half: !0,
                    starType: "i"
                });
                var a = document.body,
                        l = (document.querySelector("body"), document.getElementById("gl-side-menu-btn")),
                        c = document.getElementById("gl-side-menu-close-button"),
                        p = !1;
                i();
                var d = t(".gl-header").height();
                t(".gl-side-menu-wrap").height(t(window).height() - d), t(window).resize(function () {
                    t(".gl-side-menu-wrap").height(t(window).height() - d)
                }), t(window).trigger("resize");
                var h, u = t(".gl-header");
                u.after('<section class="gl-fake-div"></section>');
                var f = u.next(),
                        m = u.outerHeight();
                f.css({
                    height: m
                }), t(window).on("resize", function (t) {
                    clearTimeout(h), h = setTimeout(function () {
                        var t = u.outerHeight();
                        f.css({
                            height: t
                        })
                    }, 250)
                });
                var g = t("ul.gl-gallery li").length;
                g > 5 && r();
                var v = t("a.gl-sorting-btn"),
                        y = t(".gl-featured-items");
                v.on("click", function (e) {
                    e.preventDefault(), v.hasClass("gl-grid-view") ? (t(this).removeClass("gl-grid-view").addClass("gl-list-view"), t(this).find("i").removeClass("fa-list-ul").addClass("fa-th-large"), y.addClass("gl-listtype-display")) : (t(this).removeClass("gl-list-view").addClass("gl-grid-view"), t(this).find("i").removeClass("fa-th-large").addClass("fa-list-ul"), y.removeClass("gl-listtype-display"))
                }), t(".gl-floorplan-item .collapse, .gl-accordion-item .collapse").on("shown.bs.collapse", function () {
                    t(this).parent().find(".ion-ios-plus-empty").removeClass("ion-ios-plus-empty").addClass("ion-ios-minus-empty")
                }).on("hidden.bs.collapse", function () {
                    t(this).parent().find(".ion-ios-minus-empty").removeClass("ion-ios-minus-empty").addClass("ion-ios-plus-empty")
                }), t(this).width() < 992 && t(".gl-search-expand-btn").on("click", function (e) {
                    e.preventDefault();
                    var i = t(this),
                            n = t(".gl-search-filter-bar");
                    n.slideToggle(500, function () {
                        i.text(function () {
                            return n.is(":visible") ? "Search Collapse" : "Search Expand"
                        })
                    })
                }), t(".gl-more-filter-btn").on("click", function (e) {
                    e.preventDefault();
                    var i = (t(this), t(".gl-advanced-search-wrapper"));
                    i.slideToggle(500)
                }), t(".gl-advanced-search-btn").on("click", function (e) {
                    e.preventDefault();
                    var i = t(".gl-advanced-search-wrapper"),
                            n = t(".gl-directory-searchbar");
                    n.hasClass("collapsed") ? (i.slideDown(), n.removeClass("collapsed").addClass("expanded")) : (i.slideUp(), n.removeClass("expanded").addClass("collapsed"))
                }), t("header.gl-header").children().hasClass(".gl-header-topbar") ? t(".navbar-collapse").css({
                    maxHeight: t(window).height() - (t(".navbar-header").height() + t(".gl-header-topbar").height()) + "px"
                }) : t(".navbar-collapse").css({
                    maxHeight: t(window).height() - t(".navbar-header").height() + "px"
                }), t(window).resize(function () {
                    var e = t(".gl-search-template .gl-header"),
                            i = e.outerHeight(),
                            n = t(".gl-split-map").parent(),
                            s = t(".gl-search-map-section"),
                            r = t(".gl-search-filter-wrapper"),
                            o = r.outerHeight(),
                            a = i + o;
                    n.prev().hasClass("gl-search-filter-wrapper") || s.prev().hasClass("gl-header") ? (t(".gl-split-map").height(t(window).height() - a).css({
                        marginTop: "-1px"
                    }), e.css({
                        position: "fixed",
                        marginTop: "-1px"
                    }), n.prev(".gl-search-filter-wrapper").css({
                        position: "fixed",
                        marginTop: "-2px",
                        "z-index": 9
                    }), n.css({
                        paddingTop: 0
                    }), s.css({
                        paddingTop: 0
                    })) : (t(".gl-split-map").height(t(window).height() - i), e.css({
                        position: "fixed"
                    })), e.next().css({
                        paddingTop: 0
                    })
                }), t(window).trigger("resize"), t("a.gl-tag-btn").append('<span class="gl-close">x</span>'), t("a.gl-tag-btn").on("click", ".gl-close", function (e) {
                    e.preventDefault(), t(this).parent().remove()
                })
            }(t)
        }).call(e, i(1))
    }, function (t, e, i) {
        var n, s;
        (function (t) {
            "use strict";
            var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
            };
            !function (e, n) {
                "object" === i(t) && "object" === i(t.exports) ? t.exports = e.document ? n(e, !0) : function (t) {
                    if (!t.document)
                        throw new Error("jQuery requires a window with a document");
                    return n(t)
                } : n(e)
            }("undefined" != typeof window ? window : void 0, function (r, o) {
                function a(t) {
                    var e = !!t && "length" in t && t.length,
                            i = pt.type(t);
                    return "function" !== i && !pt.isWindow(t) && ("array" === i || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
                }

                function l(t, e, i) {
                    if (pt.isFunction(e))
                        return pt.grep(t, function (t, n) {
                            return !!e.call(t, n, t) !== i
                        });
                    if (e.nodeType)
                        return pt.grep(t, function (t) {
                            return t === e !== i
                        });
                    if ("string" == typeof e) {
                        if (wt.test(e))
                            return pt.filter(e, t, i);
                        e = pt.filter(e, t)
                    }
                    return pt.grep(t, function (t) {
                        return st.call(e, t) > -1 !== i
                    })
                }

                function c(t, e) {
                    for (;
                            (t = t[e]) && 1 !== t.nodeType; )
                        ;
                    return t
                }

                function p(t) {
                    var e = {};
                    return pt.each(t.match(kt) || [], function (t, i) {
                        e[i] = !0
                    }), e
                }

                function d() {
                    tt.removeEventListener("DOMContentLoaded", d), r.removeEventListener("load", d), pt.ready()
                }

                function h() {
                    this.expando = pt.expando + h.uid++
                }

                function u(t, e, i) {
                    var n;
                    if (void 0 === i && 1 === t.nodeType)
                        if (n = "data-" + e.replace(It, "-$&").toLowerCase(), i = t.getAttribute(n), "string" == typeof i) {
                            try {
                                i = "true" === i || "false" !== i && ("null" === i ? null : +i + "" === i ? +i : Mt.test(i) ? pt.parseJSON(i) : i)
                            } catch (s) {
                            }
                            Pt.set(t, e, i)
                        } else
                            i = void 0;
                    return i
                }

                function f(t, e, i, n) {
                    var s, r = 1,
                            o = 20,
                            a = n ? function () {
                                return n.cur()
                            } : function () {
                        return pt.css(t, e, "")
                    },
                            l = a(),
                            c = i && i[3] || (pt.cssNumber[e] ? "" : "px"),
                            p = (pt.cssNumber[e] || "px" !== c && +l) && Lt.exec(pt.css(t, e));
                    if (p && p[3] !== c) {
                        c = c || p[3], i = i || [], p = +l || 1;
                        do
                            r = r || ".5", p /= r, pt.style(t, e, p + c);
                        while (r !== (r = a() / l) && 1 !== r && --o)
                    }
                    return i && (p = +p || +l || 0, s = i[1] ? p + (i[1] + 1) * i[2] : +i[2], n && (n.unit = c, n.start = p, n.end = s)), s
                }

                function m(t, e) {
                    var i = "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e || "*") : "undefined" != typeof t.querySelectorAll ? t.querySelectorAll(e || "*") : [];
                    return void 0 === e || e && pt.nodeName(t, e) ? pt.merge([t], i) : i
                }

                function g(t, e) {
                    for (var i = 0, n = t.length; i < n; i++)
                        Dt.set(t[i], "globalEval", !e || Dt.get(e[i], "globalEval"))
                }

                function v(t, e, i, n, s) {
                    for (var r, o, a, l, c, p, d = e.createDocumentFragment(), h = [], u = 0, f = t.length; u < f; u++)
                        if (r = t[u], r || 0 === r)
                            if ("object" === pt.type(r))
                                pt.merge(h, r.nodeType ? [r] : r);
                            else if (jt.test(r)) {
                                for (o = o || d.appendChild(e.createElement("div")), a = (Ft.exec(r) || ["", ""])[1].toLowerCase(), l = Bt[a] || Bt._default, o.innerHTML = l[1] + pt.htmlPrefilter(r) + l[2], p = l[0]; p--; )
                                    o = o.lastChild;
                                pt.merge(h, o.childNodes), o = d.firstChild, o.textContent = ""
                            } else
                                h.push(e.createTextNode(r));
                    for (d.textContent = "", u = 0; r = h[u++]; )
                        if (n && pt.inArray(r, n) > -1)
                            s && s.push(r);
                        else if (c = pt.contains(r.ownerDocument, r), o = m(d.appendChild(r), "script"), c && g(o), i)
                            for (p = 0; r = o[p++]; )
                                Rt.test(r.type || "") && i.push(r);
                    return d
                }

                function y() {
                    return !0
                }

                function b() {
                    return !1
                }

                function w() {
                    try {
                        return tt.activeElement
                    } catch (t) {
                    }
                }

                function x(t, e, n, s, r, o) {
                    var a, l;
                    if ("object" === ("undefined" == typeof e ? "undefined" : i(e))) {
                        "string" != typeof n && (s = s || n, n = void 0);
                        for (l in e)
                            x(t, l, n, s, e[l], o);
                        return t
                    }
                    if (null == s && null == r ? (r = n, s = n = void 0) : null == r && ("string" == typeof n ? (r = s, s = void 0) : (r = s, s = n, n = void 0)), r === !1)
                        r = b;
                    else if (!r)
                        return t;
                    return 1 === o && (a = r, r = function (t) {
                        return pt().off(t), a.apply(this, arguments)
                    }, r.guid = a.guid || (a.guid = pt.guid++)), t.each(function () {
                        pt.event.add(this, e, r, s, n)
                    })
                }

                function _(t, e) {
                    return pt.nodeName(t, "table") && pt.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
                }

                function T(t) {
                    return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
                }

                function S(t) {
                    var e = Yt.exec(t.type);
                    return e ? t.type = e[1] : t.removeAttribute("type"), t
                }

                function C(t, e) {
                    var i, n, s, r, o, a, l, c;
                    if (1 === e.nodeType) {
                        if (Dt.hasData(t) && (r = Dt.access(t), o = Dt.set(e, r), c = r.events)) {
                            delete o.handle, o.events = {};
                            for (s in c)
                                for (i = 0, n = c[s].length; i < n; i++)
                                    pt.event.add(e, s, c[s][i])
                        }
                        Pt.hasData(t) && (a = Pt.access(t), l = pt.extend({}, a), Pt.set(e, l))
                    }
                }

                function k(t, e) {
                    var i = e.nodeName.toLowerCase();
                    "input" === i && Ht.test(t.type) ? e.checked = t.checked : "input" !== i && "textarea" !== i || (e.defaultValue = t.defaultValue)
                }

                function E(t, e, i, n) {
                    e = it.apply([], e);
                    var s, r, o, a, l, c, p = 0,
                            d = t.length,
                            h = d - 1,
                            u = e[0],
                            f = pt.isFunction(u);
                    if (f || d > 1 && "string" == typeof u && !lt.checkClone && Xt.test(u))
                        return t.each(function (s) {
                            var r = t.eq(s);
                            f && (e[0] = u.call(this, s, r.html())), E(r, e, i, n)
                        });
                    if (d && (s = v(e, t[0].ownerDocument, !1, t, n), r = s.firstChild, 1 === s.childNodes.length && (s = r), r || n)) {
                        for (o = pt.map(m(s, "script"), T), a = o.length; p < d; p++)
                            l = s, p !== h && (l = pt.clone(l, !0, !0), a && pt.merge(o, m(l, "script"))), i.call(t[p], l, p);
                        if (a)
                            for (c = o[o.length - 1].ownerDocument, pt.map(o, S), p = 0; p < a; p++)
                                l = o[p], Rt.test(l.type || "") && !Dt.access(l, "globalEval") && pt.contains(c, l) && (l.src ? pt._evalUrl && pt._evalUrl(l.src) : pt.globalEval(l.textContent.replace(Kt, "")))
                    }
                    return t
                }

                function A(t, e, i) {
                    for (var n, s = e ? pt.filter(e, t) : t, r = 0; null != (n = s[r]); r++)
                        i || 1 !== n.nodeType || pt.cleanData(m(n)), n.parentNode && (i && pt.contains(n.ownerDocument, n) && g(m(n, "script")), n.parentNode.removeChild(n));
                    return t
                }

                function $(t, e) {
                    var i = pt(e.createElement(t)).appendTo(e.body),
                            n = pt.css(i[0], "display");
                    return i.detach(), n
                }

                function D(t) {
                    var e = tt,
                            i = Jt[t];
                    return i || (i = $(t, e), "none" !== i && i || (Qt = (Qt || pt("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = Qt[0].contentDocument, e.write(), e.close(), i = $(t, e), Qt.detach()), Jt[t] = i), i
                }

                function P(t, e, i) {
                    var n, s, r, o, a = t.style;
                    return i = i || ee(t), o = i ? i.getPropertyValue(e) || i[e] : void 0, "" !== o && void 0 !== o || pt.contains(t.ownerDocument, t) || (o = pt.style(t, e)), i && !lt.pixelMarginRight() && te.test(o) && Zt.test(e) && (n = a.width, s = a.minWidth, r = a.maxWidth, a.minWidth = a.maxWidth = a.width = o, o = i.width, a.width = n, a.minWidth = s, a.maxWidth = r), void 0 !== o ? o + "" : o
                }

                function M(t, e) {
                    return {
                        get: function () {
                            return t() ? void delete this.get : (this.get = e).apply(this, arguments)
                        }
                    }
                }

                function I(t) {
                    if (t in le)
                        return t;
                    for (var e = t[0].toUpperCase() + t.slice(1), i = ae.length; i--; )
                        if (t = ae[i] + e, t in le)
                            return t
                }

                function N(t, e, i) {
                    var n = Lt.exec(e);
                    return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || "px") : e
                }

                function L(t, e, i, n, s) {
                    for (var r = i === (n ? "border" : "content") ? 4 : "width" === e ? 1 : 0, o = 0; r < 4; r += 2)
                        "margin" === i && (o += pt.css(t, i + zt[r], !0, s)), n ? ("content" === i && (o -= pt.css(t, "padding" + zt[r], !0, s)), "margin" !== i && (o -= pt.css(t, "border" + zt[r] + "Width", !0, s))) : (o += pt.css(t, "padding" + zt[r], !0, s), "padding" !== i && (o += pt.css(t, "border" + zt[r] + "Width", !0, s)));
                    return o
                }

                function z(t, e, i) {
                    var n = !0,
                            s = "width" === e ? t.offsetWidth : t.offsetHeight,
                            r = ee(t),
                            o = "border-box" === pt.css(t, "boxSizing", !1, r);
                    if (s <= 0 || null == s) {
                        if (s = P(t, e, r), (s < 0 || null == s) && (s = t.style[e]), te.test(s))
                            return s;
                        n = o && (lt.boxSizingReliable() || s === t.style[e]), s = parseFloat(s) || 0
                    }
                    return s + L(t, e, i || (o ? "border" : "content"), n, r) + "px"
                }

                function O(t, e) {
                    for (var i, n, s, r = [], o = 0, a = t.length; o < a; o++)
                        n = t[o], n.style && (r[o] = Dt.get(n, "olddisplay"), i = n.style.display, e ? (r[o] || "none" !== i || (n.style.display = ""), "" === n.style.display && Ot(n) && (r[o] = Dt.access(n, "olddisplay", D(n.nodeName)))) : (s = Ot(n), "none" === i && s || Dt.set(n, "olddisplay", s ? i : pt.css(n, "display"))));
                    for (o = 0; o < a; o++)
                        n = t[o], n.style && (e && "none" !== n.style.display && "" !== n.style.display || (n.style.display = e ? r[o] || "" : "none"));
                    return t
                }

                function H(t, e, i, n, s) {
                    return new H.prototype.init(t, e, i, n, s)
                }

                function F() {
                    return r.setTimeout(function () {
                        ce = void 0
                    }), ce = pt.now()
                }

                function R(t, e) {
                    var i, n = 0,
                            s = {
                                height: t
                            };
                    for (e = e ? 1 : 0; n < 4; n += 2 - e)
                        i = zt[n], s["margin" + i] = s["padding" + i] = t;
                    return e && (s.opacity = s.width = t), s
                }

                function B(t, e, i) {
                    for (var n, s = (W.tweeners[e] || []).concat(W.tweeners["*"]), r = 0, o = s.length; r < o; r++)
                        if (n = s[r].call(i, e, t))
                            return n
                }

                function j(t, e, i) {
                    var n, s, r, o, a, l, c, p, d = this,
                            h = {},
                            u = t.style,
                            f = t.nodeType && Ot(t),
                            m = Dt.get(t, "fxshow");
                    i.queue || (a = pt._queueHooks(t, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function () {
                        a.unqueued || l()
                    }), a.unqueued++, d.always(function () {
                        d.always(function () {
                            a.unqueued--, pt.queue(t, "fx").length || a.empty.fire()
                        })
                    })), 1 === t.nodeType && ("height" in e || "width" in e) && (i.overflow = [u.overflow, u.overflowX, u.overflowY], c = pt.css(t, "display"), p = "none" === c ? Dt.get(t, "olddisplay") || D(t.nodeName) : c, "inline" === p && "none" === pt.css(t, "float") && (u.display = "inline-block")), i.overflow && (u.overflow = "hidden", d.always(function () {
                        u.overflow = i.overflow[0], u.overflowX = i.overflow[1], u.overflowY = i.overflow[2]
                    }));
                    for (n in e)
                        if (s = e[n], de.exec(s)) {
                            if (delete e[n], r = r || "toggle" === s, s === (f ? "hide" : "show")) {
                                if ("show" !== s || !m || void 0 === m[n])
                                    continue;
                                f = !0
                            }
                            h[n] = m && m[n] || pt.style(t, n)
                        } else
                            c = void 0;
                    if (pt.isEmptyObject(h))
                        "inline" === ("none" === c ? D(t.nodeName) : c) && (u.display = c);
                    else {
                        m ? "hidden" in m && (f = m.hidden) : m = Dt.access(t, "fxshow", {}), r && (m.hidden = !f), f ? pt(t).show() : d.done(function () {
                            pt(t).hide()
                        }), d.done(function () {
                            var e;
                            Dt.remove(t, "fxshow");
                            for (e in h)
                                pt.style(t, e, h[e])
                        });
                        for (n in h)
                            o = B(f ? m[n] : 0, n, d), n in m || (m[n] = o.start, f && (o.end = o.start, o.start = "width" === n || "height" === n ? 1 : 0))
                    }
                }

                function q(t, e) {
                    var i, n, s, r, o;
                    for (i in t)
                        if (n = pt.camelCase(i), s = e[n], r = t[i], pt.isArray(r) && (s = r[1], r = t[i] = r[0]), i !== n && (t[n] = r, delete t[i]), o = pt.cssHooks[n], o && "expand" in o) {
                            r = o.expand(r), delete t[n];
                            for (i in r)
                                i in t || (t[i] = r[i], e[i] = s)
                        } else
                            e[n] = s
                }

                function W(t, e, i) {
                    var n, s, r = 0,
                            o = W.prefilters.length,
                            a = pt.Deferred().always(function () {
                        delete l.elem
                    }),
                            l = function () {
                                if (s)
                                    return !1;
                                for (var e = ce || F(), i = Math.max(0, c.startTime + c.duration - e), n = i / c.duration || 0, r = 1 - n, o = 0, l = c.tweens.length; o < l; o++)
                                    c.tweens[o].run(r);
                                return a.notifyWith(t, [c, r, i]), r < 1 && l ? i : (a.resolveWith(t, [c]), !1)
                            },
                            c = a.promise({
                                elem: t,
                                props: pt.extend({}, e),
                                opts: pt.extend(!0, {
                                    specialEasing: {},
                                    easing: pt.easing._default
                                }, i),
                                originalProperties: e,
                                originalOptions: i,
                                startTime: ce || F(),
                                duration: i.duration,
                                tweens: [],
                                createTween: function (e, i) {
                                    var n = pt.Tween(t, c.opts, e, i, c.opts.specialEasing[e] || c.opts.easing);
                                    return c.tweens.push(n), n
                                },
                                stop: function (e) {
                                    var i = 0,
                                            n = e ? c.tweens.length : 0;
                                    if (s)
                                        return this;
                                    for (s = !0; i < n; i++)
                                        c.tweens[i].run(1);
                                    return e ? (a.notifyWith(t, [c, 1, 0]), a.resolveWith(t, [c, e])) : a.rejectWith(t, [c, e]), this
                                }
                            }),
                            p = c.props;
                    for (q(p, c.opts.specialEasing); r < o; r++)
                        if (n = W.prefilters[r].call(c, t, p, c.opts))
                            return pt.isFunction(n.stop) && (pt._queueHooks(c.elem, c.opts.queue).stop = pt.proxy(n.stop, n)), n;
                    return pt.map(p, B, c), pt.isFunction(c.opts.start) && c.opts.start.call(t, c), pt.fx.timer(pt.extend(l, {
                        elem: t,
                        anim: c,
                        queue: c.opts.queue
                    })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
                }

                function G(t) {
                    return t.getAttribute && t.getAttribute("class") || ""
                }

                function V(t) {
                    return function (e, i) {
                        "string" != typeof e && (i = e, e = "*");
                        var n, s = 0,
                                r = e.toLowerCase().match(kt) || [];
                        if (pt.isFunction(i))
                            for (; n = r[s++]; )
                                "+" === n[0] ? (n = n.slice(1) || "*", (t[n] = t[n] || []).unshift(i)) : (t[n] = t[n] || []).push(i)
                    }
                }

                function U(t, e, i, n) {
                    function s(a) {
                        var l;
                        return r[a] = !0, pt.each(t[a] || [], function (t, a) {
                            var c = a(e, i, n);
                            return "string" != typeof c || o || r[c] ? o ? !(l = c) : void 0 : (e.dataTypes.unshift(c), s(c), !1)
                        }), l
                    }
                    var r = {},
                            o = t === Pe;
                    return s(e.dataTypes[0]) || !r["*"] && s("*")
                }

                function X(t, e) {
                    var i, n, s = pt.ajaxSettings.flatOptions || {};
                    for (i in e)
                        void 0 !== e[i] && ((s[i] ? t : n || (n = {}))[i] = e[i]);
                    return n && pt.extend(!0, t, n), t
                }

                function Y(t, e, i) {
                    for (var n, s, r, o, a = t.contents, l = t.dataTypes;
                            "*" === l[0]; )
                        l.shift(), void 0 === n && (n = t.mimeType || e.getResponseHeader("Content-Type"));
                    if (n)
                        for (s in a)
                            if (a[s] && a[s].test(n)) {
                                l.unshift(s);
                                break
                            }
                    if (l[0] in i)
                        r = l[0];
                    else {
                        for (s in i) {
                            if (!l[0] || t.converters[s + " " + l[0]]) {
                                r = s;
                                break
                            }
                            o || (o = s)
                        }
                        r = r || o
                    }
                    if (r)
                        return r !== l[0] && l.unshift(r), i[r]
                }

                function K(t, e, i, n) {
                    var s, r, o, a, l, c = {},
                            p = t.dataTypes.slice();
                    if (p[1])
                        for (o in t.converters)
                            c[o.toLowerCase()] = t.converters[o];
                    for (r = p.shift(); r; )
                        if (t.responseFields[r] && (i[t.responseFields[r]] = e), !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = r, r = p.shift())
                            if ("*" === r)
                                r = l;
                            else if ("*" !== l && l !== r) {
                                if (o = c[l + " " + r] || c["* " + r], !o)
                                    for (s in c)
                                        if (a = s.split(" "), a[1] === r && (o = c[l + " " + a[0]] || c["* " + a[0]])) {
                                            o === !0 ? o = c[s] : c[s] !== !0 && (r = a[0], p.unshift(a[1]));
                                            break
                                        }
                                if (o !== !0)
                                    if (o && t["throws"])
                                        e = o(e);
                                    else
                                        try {
                                            e = o(e)
                                        } catch (d) {
                                            return {
                                                state: "parsererror",
                                                error: o ? d : "No conversion from " + l + " to " + r
                                            }
                                        }
                            }
                    return {
                        state: "success",
                        data: e
                    }
                }

                function Q(t, e, n, s) {
                    var r;
                    if (pt.isArray(e))
                        pt.each(e, function (e, r) {
                            n || Le.test(t) ? s(t, r) : Q(t + "[" + ("object" === ("undefined" == typeof r ? "undefined" : i(r)) && null != r ? e : "") + "]", r, n, s)
                        });
                    else if (n || "object" !== pt.type(e))
                        s(t, e);
                    else
                        for (r in e)
                            Q(t + "[" + r + "]", e[r], n, s)
                }

                function J(t) {
                    return pt.isWindow(t) ? t : 9 === t.nodeType && t.defaultView
                }
                var Z = [],
                        tt = r.document,
                        et = Z.slice,
                        it = Z.concat,
                        nt = Z.push,
                        st = Z.indexOf,
                        rt = {},
                        ot = rt.toString,
                        at = rt.hasOwnProperty,
                        lt = {},
                        ct = "2.2.4",
                        pt = function Ve(t, e) {
                            return new Ve.fn.init(t, e)
                        },
                        dt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
                        ht = /^-ms-/,
                        ut = /-([\da-z])/gi,
                        ft = function (t, e) {
                            return e.toUpperCase()
                        };
                pt.fn = pt.prototype = {
                    jquery: ct,
                    constructor: pt,
                    selector: "",
                    length: 0,
                    toArray: function () {
                        return et.call(this)
                    },
                    get: function (t) {
                        return null != t ? t < 0 ? this[t + this.length] : this[t] : et.call(this)
                    },
                    pushStack: function (t) {
                        var e = pt.merge(this.constructor(), t);
                        return e.prevObject = this, e.context = this.context, e
                    },
                    each: function (t) {
                        return pt.each(this, t)
                    },
                    map: function (t) {
                        return this.pushStack(pt.map(this, function (e, i) {
                            return t.call(e, i, e)
                        }))
                    },
                    slice: function () {
                        return this.pushStack(et.apply(this, arguments))
                    },
                    first: function () {
                        return this.eq(0)
                    },
                    last: function () {
                        return this.eq(-1)
                    },
                    eq: function (t) {
                        var e = this.length,
                                i = +t + (t < 0 ? e : 0);
                        return this.pushStack(i >= 0 && i < e ? [this[i]] : [])
                    },
                    end: function () {
                        return this.prevObject || this.constructor()
                    },
                    push: nt,
                    sort: Z.sort,
                    splice: Z.splice
                }, pt.extend = pt.fn.extend = function () {
                    var t, e, n, s, r, o, a = arguments[0] || {},
                            l = 1,
                            c = arguments.length,
                            p = !1;
                    for ("boolean" == typeof a && (p = a, a = arguments[l] || {}, l++), "object" === ("undefined" == typeof a ? "undefined" : i(a)) || pt.isFunction(a) || (a = {}), l === c && (a = this, l--); l < c; l++)
                        if (null != (t = arguments[l]))
                            for (e in t)
                                n = a[e], s = t[e], a !== s && (p && s && (pt.isPlainObject(s) || (r = pt.isArray(s))) ? (r ? (r = !1, o = n && pt.isArray(n) ? n : []) : o = n && pt.isPlainObject(n) ? n : {}, a[e] = pt.extend(p, o, s)) : void 0 !== s && (a[e] = s));
                    return a
                }, pt.extend({
                    expando: "jQuery" + (ct + Math.random()).replace(/\D/g, ""),
                    isReady: !0,
                    error: function (t) {
                        throw new Error(t)
                    },
                    noop: function () {},
                    isFunction: function (t) {
                        return "function" === pt.type(t)
                    },
                    isArray: Array.isArray,
                    isWindow: function (t) {
                        return null != t && t === t.window
                    },
                    isNumeric: function (t) {
                        var e = t && t.toString();
                        return !pt.isArray(t) && e - parseFloat(e) + 1 >= 0
                    },
                    isPlainObject: function (t) {
                        var e;
                        if ("object" !== pt.type(t) || t.nodeType || pt.isWindow(t))
                            return !1;
                        if (t.constructor && !at.call(t, "constructor") && !at.call(t.constructor.prototype || {}, "isPrototypeOf"))
                            return !1;
                        for (e in t)
                            ;
                        return void 0 === e || at.call(t, e)
                    },
                    isEmptyObject: function (t) {
                        var e;
                        for (e in t)
                            return !1;
                        return !0
                    },
                    type: function (t) {
                        return null == t ? t + "" : "object" === ("undefined" == typeof t ? "undefined" : i(t)) || "function" == typeof t ? rt[ot.call(t)] || "object" : "undefined" == typeof t ? "undefined" : i(t)
                    },
                    globalEval: function (t) {
                        var e, i = eval;
                        t = pt.trim(t), t && (1 === t.indexOf("use strict") ? (e = tt.createElement("script"), e.text = t, tt.head.appendChild(e).parentNode.removeChild(e)) : i(t))
                    },
                    camelCase: function (t) {
                        return t.replace(ht, "ms-").replace(ut, ft)
                    },
                    nodeName: function (t, e) {
                        return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
                    },
                    each: function (t, e) {
                        var i, n = 0;
                        if (a(t))
                            for (i = t.length; n < i && e.call(t[n], n, t[n]) !== !1; n++)
                                ;
                        else
                            for (n in t)
                                if (e.call(t[n], n, t[n]) === !1)
                                    break;
                        return t
                    },
                    trim: function (t) {
                        return null == t ? "" : (t + "").replace(dt, "")
                    },
                    makeArray: function (t, e) {
                        var i = e || [];
                        return null != t && (a(Object(t)) ? pt.merge(i, "string" == typeof t ? [t] : t) : nt.call(i, t)), i
                    },
                    inArray: function (t, e, i) {
                        return null == e ? -1 : st.call(e, t, i)
                    },
                    merge: function (t, e) {
                        for (var i = +e.length, n = 0, s = t.length; n < i; n++)
                            t[s++] = e[n];
                        return t.length = s, t
                    },
                    grep: function (t, e, i) {
                        for (var n, s = [], r = 0, o = t.length, a = !i; r < o; r++)
                            n = !e(t[r], r), n !== a && s.push(t[r]);
                        return s
                    },
                    map: function (t, e, i) {
                        var n, s, r = 0,
                                o = [];
                        if (a(t))
                            for (n = t.length; r < n; r++)
                                s = e(t[r], r, i), null != s && o.push(s);
                        else
                            for (r in t)
                                s = e(t[r], r, i), null != s && o.push(s);
                        return it.apply([], o)
                    },
                    guid: 1,
                    proxy: function Ue(t, e) {
                        var i, n, Ue;
                        if ("string" == typeof e && (i = t[e], e = t, t = i), pt.isFunction(t))
                            return n = et.call(arguments, 2), Ue = function () {
                                return t.apply(e || this, n.concat(et.call(arguments)))
                            }, Ue.guid = t.guid = t.guid || pt.guid++, Ue
                    },
                    now: Date.now,
                    support: lt
                }), "function" == typeof Symbol && (pt.fn[Symbol.iterator] = Z[Symbol.iterator]), pt.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (t, e) {
                    rt["[object " + e + "]"] = e.toLowerCase()
                });
                var mt = function (t) {
                    function e(t, e, i, n) {
                        var s, r, o, a, l, c, d, u, f = e && e.ownerDocument,
                                m = e ? e.nodeType : 9;
                        if (i = i || [], "string" != typeof t || !t || 1 !== m && 9 !== m && 11 !== m)
                            return i;
                        if (!n && ((e ? e.ownerDocument || e : R) !== M && P(e), e = e || M, N)) {
                            if (11 !== m && (c = vt.exec(t)))
                                if (s = c[1]) {
                                    if (9 === m) {
                                        if (!(o = e.getElementById(s)))
                                            return i;
                                        if (o.id === s)
                                            return i.push(o), i
                                    } else if (f && (o = f.getElementById(s)) && H(e, o) && o.id === s)
                                        return i.push(o), i
                                } else {
                                    if (c[2])
                                        return J.apply(i, e.getElementsByTagName(t)), i;
                                    if ((s = c[3]) && x.getElementsByClassName && e.getElementsByClassName)
                                        return J.apply(i, e.getElementsByClassName(s)), i
                                }
                            if (x.qsa && !G[t + " "] && (!L || !L.test(t))) {
                                if (1 !== m)
                                    f = e, u = t;
                                else if ("object" !== e.nodeName.toLowerCase()) {
                                    for ((a = e.getAttribute("id")) ? a = a.replace(bt, "\\$&") : e.setAttribute("id", a = F), d = C(t), r = d.length, l = ht.test(a) ? "#" + a : "[id='" + a + "']"; r--; )
                                        d[r] = l + " " + h(d[r]);
                                    u = d.join(","), f = yt.test(t) && p(e.parentNode) || e
                                }
                                if (u)
                                    try {
                                        return J.apply(i, f.querySelectorAll(u)), i
                                    } catch (g) {
                                    } finally {
                                        a === F && e.removeAttribute("id")
                                    }
                            }
                        }
                        return E(t.replace(at, "$1"), e, i, n)
                    }

                    function i() {
                        function t(i, n) {
                            return e.push(i + " ") > _.cacheLength && delete t[e.shift()], t[i + " "] = n
                        }
                        var e = [];
                        return t
                    }

                    function n(t) {
                        return t[F] = !0, t
                    }

                    function s(t) {
                        var e = M.createElement("div");
                        try {
                            return !!t(e)
                        } catch (i) {
                            return !1
                        } finally {
                            e.parentNode && e.parentNode.removeChild(e), e = null
                        }
                    }

                    function r(t, e) {
                        for (var i = t.split("|"), n = i.length; n--; )
                            _.attrHandle[i[n]] = e
                    }

                    function o(t, e) {
                        var i = e && t,
                                n = i && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || U) - (~t.sourceIndex || U);
                        if (n)
                            return n;
                        if (i)
                            for (; i = i.nextSibling; )
                                if (i === e)
                                    return -1;
                        return t ? 1 : -1
                    }

                    function a(t) {
                        return function (e) {
                            var i = e.nodeName.toLowerCase();
                            return "input" === i && e.type === t
                        }
                    }

                    function l(t) {
                        return function (e) {
                            var i = e.nodeName.toLowerCase();
                            return ("input" === i || "button" === i) && e.type === t
                        }
                    }

                    function c(t) {
                        return n(function (e) {
                            return e = +e, n(function (i, n) {
                                for (var s, r = t([], i.length, e), o = r.length; o--; )
                                    i[s = r[o]] && (i[s] = !(n[s] = i[s]))
                            })
                        })
                    }

                    function p(t) {
                        return t && "undefined" != typeof t.getElementsByTagName && t
                    }

                    function d() {}

                    function h(t) {
                        for (var e = 0, i = t.length, n = ""; e < i; e++)
                            n += t[e].value;
                        return n
                    }

                    function u(t, e, i) {
                        var n = e.dir,
                                s = i && "parentNode" === n,
                                r = j++;
                        return e.first ? function (e, i, r) {
                            for (; e = e[n]; )
                                if (1 === e.nodeType || s)
                                    return t(e, i, r)
                        } : function (e, i, o) {
                            var a, l, c, p = [B, r];
                            if (o) {
                                for (; e = e[n]; )
                                    if ((1 === e.nodeType || s) && t(e, i, o))
                                        return !0
                            } else
                                for (; e = e[n]; )
                                    if (1 === e.nodeType || s) {
                                        if (c = e[F] || (e[F] = {}), l = c[e.uniqueID] || (c[e.uniqueID] = {}), (a = l[n]) && a[0] === B && a[1] === r)
                                            return p[2] = a[2];
                                        if (l[n] = p, p[2] = t(e, i, o))
                                            return !0
                                    }
                        }
                    }

                    function f(t) {
                        return t.length > 1 ? function (e, i, n) {
                            for (var s = t.length; s--; )
                                if (!t[s](e, i, n))
                                    return !1;
                            return !0
                        } : t[0]
                    }

                    function m(t, i, n) {
                        for (var s = 0, r = i.length; s < r; s++)
                            e(t, i[s], n);
                        return n
                    }

                    function g(t, e, i, n, s) {
                        for (var r, o = [], a = 0, l = t.length, c = null != e; a < l; a++)
                            (r = t[a]) && (i && !i(r, n, s) || (o.push(r), c && e.push(a)));
                        return o
                    }

                    function v(t, e, i, s, r, o) {
                        return s && !s[F] && (s = v(s)), r && !r[F] && (r = v(r, o)), n(function (n, o, a, l) {
                            var c, p, d, h = [],
                                    u = [],
                                    f = o.length,
                                    v = n || m(e || "*", a.nodeType ? [a] : a, []),
                                    y = !t || !n && e ? v : g(v, h, t, a, l),
                                    b = i ? r || (n ? t : f || s) ? [] : o : y;
                            if (i && i(y, b, a, l), s)
                                for (c = g(b, u), s(c, [], a, l), p = c.length; p--; )
                                    (d = c[p]) && (b[u[p]] = !(y[u[p]] = d));
                            if (n) {
                                if (r || t) {
                                    if (r) {
                                        for (c = [], p = b.length; p--; )
                                            (d = b[p]) && c.push(y[p] = d);
                                        r(null, b = [], c, l)
                                    }
                                    for (p = b.length; p--; )
                                        (d = b[p]) && (c = r ? tt(n, d) : h[p]) > -1 && (n[c] = !(o[c] = d))
                                }
                            } else
                                b = g(b === o ? b.splice(f, b.length) : b), r ? r(null, o, b, l) : J.apply(o, b)
                        })
                    }

                    function y(t) {
                        for (var e, i, n, s = t.length, r = _.relative[t[0].type], o = r || _.relative[" "], a = r ? 1 : 0, l = u(function (t) {
                            return t === e
                        }, o, !0), c = u(function (t) {
                            return tt(e, t) > -1
                        }, o, !0), p = [function (t, i, n) {
                                var s = !r && (n || i !== A) || ((e = i).nodeType ? l(t, i, n) : c(t, i, n));
                                return e = null, s
                            }]; a < s; a++)
                            if (i = _.relative[t[a].type])
                                p = [u(f(p), i)];
                            else {
                                if (i = _.filter[t[a].type].apply(null, t[a].matches), i[F]) {
                                    for (n = ++a; n < s && !_.relative[t[n].type]; n++)
                                        ;
                                    return v(a > 1 && f(p), a > 1 && h(t.slice(0, a - 1).concat({
                                        value: " " === t[a - 2].type ? "*" : ""
                                    })).replace(at, "$1"), i, a < n && y(t.slice(a, n)), n < s && y(t = t.slice(n)), n < s && h(t))
                                }
                                p.push(i)
                            }
                        return f(p)
                    }

                    function b(t, i) {
                        var s = i.length > 0,
                                r = t.length > 0,
                                o = function (n, o, a, l, c) {
                                    var p, d, h, u = 0,
                                            f = "0",
                                            m = n && [],
                                            v = [],
                                            y = A,
                                            b = n || r && _.find.TAG("*", c),
                                            w = B += null == y ? 1 : Math.random() || .1,
                                            x = b.length;
                                    for (c && (A = o === M || o || c); f !== x && null != (p = b[f]); f++) {
                                        if (r && p) {
                                            for (d = 0, o || p.ownerDocument === M || (P(p), a = !N); h = t[d++]; )
                                                if (h(p, o || M, a)) {
                                                    l.push(p);
                                                    break
                                                }
                                            c && (B = w)
                                        }
                                        s && ((p = !h && p) && u--, n && m.push(p))
                                    }
                                    if (u += f, s && f !== u) {
                                        for (d = 0; h = i[d++]; )
                                            h(m, v, o, a);
                                        if (n) {
                                            if (u > 0)
                                                for (; f--; )
                                                    m[f] || v[f] || (v[f] = K.call(l));
                                            v = g(v)
                                        }
                                        J.apply(l, v), c && !n && v.length > 0 && u + i.length > 1 && e.uniqueSort(l)
                                    }
                                    return c && (B = w, A = y), m
                                };
                        return s ? n(o) : o
                    }
                    var w, x, _, T, S, C, k, E, A, $, D, P, M, I, N, L, z, O, H, F = "sizzle" + 1 * new Date,
                            R = t.document,
                            B = 0,
                            j = 0,
                            q = i(),
                            W = i(),
                            G = i(),
                            V = function (t, e) {
                                return t === e && (D = !0), 0
                            },
                            U = 1 << 31,
                            X = {}.hasOwnProperty,
                            Y = [],
                            K = Y.pop,
                            Q = Y.push,
                            J = Y.push,
                            Z = Y.slice,
                            tt = function (t, e) {
                                for (var i = 0, n = t.length; i < n; i++)
                                    if (t[i] === e)
                                        return i;
                                return -1
                            },
                            et = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                            it = "[\\x20\\t\\r\\n\\f]",
                            nt = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                            st = "\\[" + it + "*(" + nt + ")(?:" + it + "*([*^$|!~]?=)" + it + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + nt + "))|)" + it + "*\\]",
                            rt = ":(" + nt + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + st + ")*)|.*)\\)|)",
                            ot = new RegExp(it + "+", "g"),
                            at = new RegExp("^" + it + "+|((?:^|[^\\\\])(?:\\\\.)*)" + it + "+$", "g"),
                            lt = new RegExp("^" + it + "*," + it + "*"),
                            ct = new RegExp("^" + it + "*([>+~]|" + it + ")" + it + "*"),
                            pt = new RegExp("=" + it + "*([^\\]'\"]*?)" + it + "*\\]", "g"),
                            dt = new RegExp(rt),
                            ht = new RegExp("^" + nt + "$"),
                            ut = {
                                ID: new RegExp("^#(" + nt + ")"),
                                CLASS: new RegExp("^\\.(" + nt + ")"),
                                TAG: new RegExp("^(" + nt + "|[*])"),
                                ATTR: new RegExp("^" + st),
                                PSEUDO: new RegExp("^" + rt),
                                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + it + "*(even|odd|(([+-]|)(\\d*)n|)" + it + "*(?:([+-]|)" + it + "*(\\d+)|))" + it + "*\\)|)", "i"),
                                bool: new RegExp("^(?:" + et + ")$", "i"),
                                needsContext: new RegExp("^" + it + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + it + "*((?:-\\d)?\\d*)" + it + "*\\)|)(?=[^-]|$)", "i")
                            },
                            ft = /^(?:input|select|textarea|button)$/i,
                            mt = /^h\d$/i,
                            gt = /^[^{]+\{\s*\[native \w/,
                            vt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                            yt = /[+~]/,
                            bt = /'|\\/g,
                            wt = new RegExp("\\\\([\\da-f]{1,6}" + it + "?|(" + it + ")|.)", "ig"),
                            xt = function (t, e, i) {
                                var n = "0x" + e - 65536;
                                return n !== n || i ? e : n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
                            },
                            _t = function () {
                                P()
                            };
                    try {
                        J.apply(Y = Z.call(R.childNodes), R.childNodes), Y[R.childNodes.length].nodeType
                    } catch (Tt) {
                        J = {
                            apply: Y.length ? function (t, e) {
                                Q.apply(t, Z.call(e))
                            } : function (t, e) {
                                for (var i = t.length, n = 0; t[i++] = e[n++]; )
                                    ;
                                t.length = i - 1
                            }
                        }
                    }
                    x = e.support = {}, S = e.isXML = function (t) {
                        var e = t && (t.ownerDocument || t).documentElement;
                        return !!e && "HTML" !== e.nodeName
                    }, P = e.setDocument = function (t) {
                        var e, i, n = t ? t.ownerDocument || t : R;
                        return n !== M && 9 === n.nodeType && n.documentElement ? (M = n, I = M.documentElement, N = !S(M), (i = M.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", _t, !1) : i.attachEvent && i.attachEvent("onunload", _t)), x.attributes = s(function (t) {
                            return t.className = "i", !t.getAttribute("className")
                        }), x.getElementsByTagName = s(function (t) {
                            return t.appendChild(M.createComment("")), !t.getElementsByTagName("*").length
                        }), x.getElementsByClassName = gt.test(M.getElementsByClassName), x.getById = s(function (t) {
                            return I.appendChild(t).id = F, !M.getElementsByName || !M.getElementsByName(F).length
                        }), x.getById ? (_.find.ID = function (t, e) {
                            if ("undefined" != typeof e.getElementById && N) {
                                var i = e.getElementById(t);
                                return i ? [i] : []
                            }
                        }, _.filter.ID = function (t) {
                            var e = t.replace(wt, xt);
                            return function (t) {
                                return t.getAttribute("id") === e
                            }
                        }) : (delete _.find.ID, _.filter.ID = function (t) {
                            var e = t.replace(wt, xt);
                            return function (t) {
                                var i = "undefined" != typeof t.getAttributeNode && t.getAttributeNode("id");
                                return i && i.value === e
                            }
                        }), _.find.TAG = x.getElementsByTagName ? function (t, e) {
                            return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t) : x.qsa ? e.querySelectorAll(t) : void 0
                        } : function (t, e) {
                            var i, n = [],
                                    s = 0,
                                    r = e.getElementsByTagName(t);
                            if ("*" === t) {
                                for (; i = r[s++]; )
                                    1 === i.nodeType && n.push(i);
                                return n
                            }
                            return r
                        }, _.find.CLASS = x.getElementsByClassName && function (t, e) {
                            if ("undefined" != typeof e.getElementsByClassName && N)
                                return e.getElementsByClassName(t)
                        }, z = [], L = [], (x.qsa = gt.test(M.querySelectorAll)) && (s(function (t) {
                            I.appendChild(t).innerHTML = "<a id='" + F + "'></a><select id='" + F + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && L.push("[*^$]=" + it + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || L.push("\\[" + it + "*(?:value|" + et + ")"), t.querySelectorAll("[id~=" + F + "-]").length || L.push("~="), t.querySelectorAll(":checked").length || L.push(":checked"), t.querySelectorAll("a#" + F + "+*").length || L.push(".#.+[+~]")
                        }), s(function (t) {
                            var e = M.createElement("input");
                            e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && L.push("name" + it + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || L.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), L.push(",.*:")
                        })), (x.matchesSelector = gt.test(O = I.matches || I.webkitMatchesSelector || I.mozMatchesSelector || I.oMatchesSelector || I.msMatchesSelector)) && s(function (t) {
                            x.disconnectedMatch = O.call(t, "div"), O.call(t, "[s!='']:x"), z.push("!=", rt)
                        }), L = L.length && new RegExp(L.join("|")), z = z.length && new RegExp(z.join("|")), e = gt.test(I.compareDocumentPosition), H = e || gt.test(I.contains) ? function (t, e) {
                            var i = 9 === t.nodeType ? t.documentElement : t,
                                    n = e && e.parentNode;
                            return t === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)))
                        } : function (t, e) {
                            if (e)
                                for (; e = e.parentNode; )
                                    if (e === t)
                                        return !0;
                            return !1
                        }, V = e ? function (t, e) {
                            if (t === e)
                                return D = !0, 0;
                            var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
                            return i ? i : (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & i || !x.sortDetached && e.compareDocumentPosition(t) === i ? t === M || t.ownerDocument === R && H(R, t) ? -1 : e === M || e.ownerDocument === R && H(R, e) ? 1 : $ ? tt($, t) - tt($, e) : 0 : 4 & i ? -1 : 1)
                        } : function (t, e) {
                            if (t === e)
                                return D = !0, 0;
                            var i, n = 0,
                                    s = t.parentNode,
                                    r = e.parentNode,
                                    a = [t],
                                    l = [e];
                            if (!s || !r)
                                return t === M ? -1 : e === M ? 1 : s ? -1 : r ? 1 : $ ? tt($, t) - tt($, e) : 0;
                            if (s === r)
                                return o(t, e);
                            for (i = t; i = i.parentNode; )
                                a.unshift(i);
                            for (i = e; i = i.parentNode; )
                                l.unshift(i);
                            for (; a[n] === l[n]; )
                                n++;
                            return n ? o(a[n], l[n]) : a[n] === R ? -1 : l[n] === R ? 1 : 0
                        }, M) : M
                    }, e.matches = function (t, i) {
                        return e(t, null, null, i)
                    }, e.matchesSelector = function (t, i) {
                        if ((t.ownerDocument || t) !== M && P(t), i = i.replace(pt, "='$1']"), x.matchesSelector && N && !G[i + " "] && (!z || !z.test(i)) && (!L || !L.test(i)))
                            try {
                                var n = O.call(t, i);
                                if (n || x.disconnectedMatch || t.document && 11 !== t.document.nodeType)
                                    return n
                            } catch (s) {
                            }
                        return e(i, M, null, [t]).length > 0
                    }, e.contains = function (t, e) {
                        return (t.ownerDocument || t) !== M && P(t), H(t, e)
                    }, e.attr = function (t, e) {
                        (t.ownerDocument || t) !== M && P(t);
                        var i = _.attrHandle[e.toLowerCase()],
                                n = i && X.call(_.attrHandle, e.toLowerCase()) ? i(t, e, !N) : void 0;
                        return void 0 !== n ? n : x.attributes || !N ? t.getAttribute(e) : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
                    }, e.error = function (t) {
                        throw new Error("Syntax error, unrecognized expression: " + t);
                    }, e.uniqueSort = function (t) {
                        var e, i = [],
                                n = 0,
                                s = 0;
                        if (D = !x.detectDuplicates, $ = !x.sortStable && t.slice(0), t.sort(V), D) {
                            for (; e = t[s++]; )
                                e === t[s] && (n = i.push(s));
                            for (; n--; )
                                t.splice(i[n], 1)
                        }
                        return $ = null, t
                    }, T = e.getText = function (t) {
                        var e, i = "",
                                n = 0,
                                s = t.nodeType;
                        if (s) {
                            if (1 === s || 9 === s || 11 === s) {
                                if ("string" == typeof t.textContent)
                                    return t.textContent;
                                for (t = t.firstChild; t; t = t.nextSibling)
                                    i += T(t)
                            } else if (3 === s || 4 === s)
                                return t.nodeValue
                        } else
                            for (; e = t[n++]; )
                                i += T(e);
                        return i
                    }, _ = e.selectors = {
                        cacheLength: 50,
                        createPseudo: n,
                        match: ut,
                        attrHandle: {},
                        find: {},
                        relative: {
                            ">": {
                                dir: "parentNode",
                                first: !0
                            },
                            " ": {
                                dir: "parentNode"
                            },
                            "+": {
                                dir: "previousSibling",
                                first: !0
                            },
                            "~": {
                                dir: "previousSibling"
                            }
                        },
                        preFilter: {
                            ATTR: function (t) {
                                return t[1] = t[1].replace(wt, xt), t[3] = (t[3] || t[4] || t[5] || "").replace(wt, xt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                            },
                            CHILD: function (t) {
                                return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                            },
                            PSEUDO: function (t) {
                                var e, i = !t[6] && t[2];
                                return ut.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : i && dt.test(i) && (e = C(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e), t[2] = i.slice(0, e)), t.slice(0, 3))
                            }
                        },
                        filter: {
                            TAG: function (t) {
                                var e = t.replace(wt, xt).toLowerCase();
                                return "*" === t ? function () {
                                    return !0
                                } : function (t) {
                                    return t.nodeName && t.nodeName.toLowerCase() === e
                                }
                            },
                            CLASS: function (t) {
                                var e = q[t + " "];
                                return e || (e = new RegExp("(^|" + it + ")" + t + "(" + it + "|$)")) && q(t, function (t) {
                                    return e.test("string" == typeof t.className && t.className || "undefined" != typeof t.getAttribute && t.getAttribute("class") || "")
                                })
                            },
                            ATTR: function (t, i, n) {
                                return function (s) {
                                    var r = e.attr(s, t);
                                    return null == r ? "!=" === i : !i || (r += "", "=" === i ? r === n : "!=" === i ? r !== n : "^=" === i ? n && 0 === r.indexOf(n) : "*=" === i ? n && r.indexOf(n) > -1 : "$=" === i ? n && r.slice(-n.length) === n : "~=" === i ? (" " + r.replace(ot, " ") + " ").indexOf(n) > -1 : "|=" === i && (r === n || r.slice(0, n.length + 1) === n + "-"))
                                }
                            },
                            CHILD: function (t, e, i, n, s) {
                                var r = "nth" !== t.slice(0, 3),
                                        o = "last" !== t.slice(-4),
                                        a = "of-type" === e;
                                return 1 === n && 0 === s ? function (t) {
                                    return !!t.parentNode
                                } : function (e, i, l) {
                                    var c, p, d, h, u, f, m = r !== o ? "nextSibling" : "previousSibling",
                                            g = e.parentNode,
                                            v = a && e.nodeName.toLowerCase(),
                                            y = !l && !a,
                                            b = !1;
                                    if (g) {
                                        if (r) {
                                            for (; m; ) {
                                                for (h = e; h = h[m]; )
                                                    if (a ? h.nodeName.toLowerCase() === v : 1 === h.nodeType)
                                                        return !1;
                                                f = m = "only" === t && !f && "nextSibling"
                                            }
                                            return !0
                                        }
                                        if (f = [o ? g.firstChild : g.lastChild], o && y) {
                                            for (h = g, d = h[F] || (h[F] = {}), p = d[h.uniqueID] || (d[h.uniqueID] = {}), c = p[t] || [], u = c[0] === B && c[1], b = u && c[2], h = u && g.childNodes[u]; h = ++u && h && h[m] || (b = u = 0) || f.pop(); )
                                                if (1 === h.nodeType && ++b && h === e) {
                                                    p[t] = [B, u, b];
                                                    break
                                                }
                                        } else if (y && (h = e, d = h[F] || (h[F] = {}), p = d[h.uniqueID] || (d[h.uniqueID] = {}), c = p[t] || [], u = c[0] === B && c[1], b = u), b === !1)
                                            for (;
                                                    (h = ++u && h && h[m] || (b = u = 0) || f.pop()) && ((a ? h.nodeName.toLowerCase() !== v : 1 !== h.nodeType) || !++b || (y && (d = h[F] || (h[F] = {}), p = d[h.uniqueID] || (d[h.uniqueID] = {}), p[t] = [B, b]), h !== e)); )
                                                ;
                                        return b -= s, b === n || b % n === 0 && b / n >= 0
                                    }
                                }
                            },
                            PSEUDO: function (t, i) {
                                var s, r = _.pseudos[t] || _.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                                return r[F] ? r(i) : r.length > 1 ? (s = [t, t, "", i], _.setFilters.hasOwnProperty(t.toLowerCase()) ? n(function (t, e) {
                                    for (var n, s = r(t, i), o = s.length; o--; )
                                        n = tt(t, s[o]), t[n] = !(e[n] = s[o])
                                }) : function (t) {
                                    return r(t, 0, s)
                                }) : r
                            }
                        },
                        pseudos: {
                            not: n(function (t) {
                                var e = [],
                                        i = [],
                                        s = k(t.replace(at, "$1"));
                                return s[F] ? n(function (t, e, i, n) {
                                    for (var r, o = s(t, null, n, []), a = t.length; a--; )
                                        (r = o[a]) && (t[a] = !(e[a] = r))
                                }) : function (t, n, r) {
                                    return e[0] = t, s(e, null, r, i), e[0] = null, !i.pop()
                                }
                            }),
                            has: n(function (t) {
                                return function (i) {
                                    return e(t, i).length > 0
                                }
                            }),
                            contains: n(function (t) {
                                return t = t.replace(wt, xt),
                                        function (e) {
                                            return (e.textContent || e.innerText || T(e)).indexOf(t) > -1
                                        }
                            }),
                            lang: n(function (t) {
                                return ht.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(wt, xt).toLowerCase(),
                                        function (e) {
                                            var i;
                                            do
                                                if (i = N ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                                                    return i = i.toLowerCase(), i === t || 0 === i.indexOf(t + "-");
                                            while ((e = e.parentNode) && 1 === e.nodeType);
                                            return !1
                                        }
                            }),
                            target: function (e) {
                                var i = t.location && t.location.hash;
                                return i && i.slice(1) === e.id
                            },
                            root: function (t) {
                                return t === I
                            },
                            focus: function (t) {
                                return t === M.activeElement && (!M.hasFocus || M.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                            },
                            enabled: function (t) {
                                return t.disabled === !1
                            },
                            disabled: function (t) {
                                return t.disabled === !0
                            },
                            checked: function (t) {
                                var e = t.nodeName.toLowerCase();
                                return "input" === e && !!t.checked || "option" === e && !!t.selected
                            },
                            selected: function (t) {
                                return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
                            },
                            empty: function (t) {
                                for (t = t.firstChild; t; t = t.nextSibling)
                                    if (t.nodeType < 6)
                                        return !1;
                                return !0
                            },
                            parent: function (t) {
                                return !_.pseudos.empty(t)
                            },
                            header: function (t) {
                                return mt.test(t.nodeName)
                            },
                            input: function (t) {
                                return ft.test(t.nodeName)
                            },
                            button: function (t) {
                                var e = t.nodeName.toLowerCase();
                                return "input" === e && "button" === t.type || "button" === e
                            },
                            text: function (t) {
                                var e;
                                return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                            },
                            first: c(function () {
                                return [0]
                            }),
                            last: c(function (t, e) {
                                return [e - 1]
                            }),
                            eq: c(function (t, e, i) {
                                return [i < 0 ? i + e : i]
                            }),
                            even: c(function (t, e) {
                                for (var i = 0; i < e; i += 2)
                                    t.push(i);
                                return t
                            }),
                            odd: c(function (t, e) {
                                for (var i = 1; i < e; i += 2)
                                    t.push(i);
                                return t
                            }),
                            lt: c(function (t, e, i) {
                                for (var n = i < 0 ? i + e : i; --n >= 0; )
                                    t.push(n);
                                return t
                            }),
                            gt: c(function (t, e, i) {
                                for (var n = i < 0 ? i + e : i; ++n < e; )
                                    t.push(n);
                                return t
                            })
                        }
                    }, _.pseudos.nth = _.pseudos.eq;
                    for (w in {
                    radio: !0,
                            checkbox: !0,
                            file: !0,
                            password: !0,
                            image: !0
                    })
                        _.pseudos[w] = a(w);
                    for (w in {
                    submit: !0,
                            reset: !0
                    })
                        _.pseudos[w] = l(w);
                    return d.prototype = _.filters = _.pseudos, _.setFilters = new d, C = e.tokenize = function (t, i) {
                        var n, s, r, o, a, l, c, p = W[t + " "];
                        if (p)
                            return i ? 0 : p.slice(0);
                        for (a = t, l = [], c = _.preFilter; a; ) {
                            n && !(s = lt.exec(a)) || (s && (a = a.slice(s[0].length) || a), l.push(r = [])), n = !1, (s = ct.exec(a)) && (n = s.shift(), r.push({
                                value: n,
                                type: s[0].replace(at, " ")
                            }), a = a.slice(n.length));
                            for (o in _.filter)
                                !(s = ut[o].exec(a)) || c[o] && !(s = c[o](s)) || (n = s.shift(), r.push({
                                    value: n,
                                    type: o,
                                    matches: s
                                }), a = a.slice(n.length));
                            if (!n)
                                break
                        }
                        return i ? a.length : a ? e.error(t) : W(t, l).slice(0)
                    }, k = e.compile = function (t, e) {
                        var i, n = [],
                                s = [],
                                r = G[t + " "];
                        if (!r) {
                            for (e || (e = C(t)), i = e.length; i--; )
                                r = y(e[i]), r[F] ? n.push(r) : s.push(r);
                            r = G(t, b(s, n)), r.selector = t
                        }
                        return r
                    }, E = e.select = function (t, e, i, n) {
                        var s, r, o, a, l, c = "function" == typeof t && t,
                                d = !n && C(t = c.selector || t);
                        if (i = i || [], 1 === d.length) {
                            if (r = d[0] = d[0].slice(0), r.length > 2 && "ID" === (o = r[0]).type && x.getById && 9 === e.nodeType && N && _.relative[r[1].type]) {
                                if (e = (_.find.ID(o.matches[0].replace(wt, xt), e) || [])[0], !e)
                                    return i;
                                c && (e = e.parentNode), t = t.slice(r.shift().value.length)
                            }
                            for (s = ut.needsContext.test(t) ? 0 : r.length; s-- && (o = r[s], !_.relative[a = o.type]); )
                                if ((l = _.find[a]) && (n = l(o.matches[0].replace(wt, xt), yt.test(r[0].type) && p(e.parentNode) || e))) {
                                    if (r.splice(s, 1), t = n.length && h(r), !t)
                                        return J.apply(i, n), i;
                                    break
                                }
                        }
                        return (c || k(t, d))(n, e, !N, i, !e || yt.test(t) && p(e.parentNode) || e), i
                    }, x.sortStable = F.split("").sort(V).join("") === F, x.detectDuplicates = !!D, P(), x.sortDetached = s(function (t) {
                        return 1 & t.compareDocumentPosition(M.createElement("div"))
                    }), s(function (t) {
                        return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
                    }) || r("type|href|height|width", function (t, e, i) {
                        if (!i)
                            return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
                    }), x.attributes && s(function (t) {
                        return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
                    }) || r("value", function (t, e, i) {
                        if (!i && "input" === t.nodeName.toLowerCase())
                            return t.defaultValue
                    }), s(function (t) {
                        return null == t.getAttribute("disabled")
                    }) || r(et, function (t, e, i) {
                        var n;
                        if (!i)
                            return t[e] === !0 ? e.toLowerCase() : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
                    }), e
                }(r);
                pt.find = mt, pt.expr = mt.selectors, pt.expr[":"] = pt.expr.pseudos, pt.uniqueSort = pt.unique = mt.uniqueSort, pt.text = mt.getText, pt.isXMLDoc = mt.isXML, pt.contains = mt.contains;
                var gt = function (t, e, i) {
                    for (var n = [], s = void 0 !== i;
                            (t = t[e]) && 9 !== t.nodeType; )
                        if (1 === t.nodeType) {
                            if (s && pt(t).is(i))
                                break;
                            n.push(t)
                        }
                    return n
                },
                        vt = function (t, e) {
                            for (var i = []; t; t = t.nextSibling)
                                1 === t.nodeType && t !== e && i.push(t);
                            return i
                        },
                        yt = pt.expr.match.needsContext,
                        bt = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
                        wt = /^.[^:#\[\.,]*$/;
                pt.filter = function (t, e, i) {
                    var n = e[0];
                    return i && (t = ":not(" + t + ")"), 1 === e.length && 1 === n.nodeType ? pt.find.matchesSelector(n, t) ? [n] : [] : pt.find.matches(t, pt.grep(e, function (t) {
                        return 1 === t.nodeType
                    }))
                }, pt.fn.extend({
                    find: function (t) {
                        var e, i = this.length,
                                n = [],
                                s = this;
                        if ("string" != typeof t)
                            return this.pushStack(pt(t).filter(function () {
                                for (e = 0; e < i; e++)
                                    if (pt.contains(s[e], this))
                                        return !0
                            }));
                        for (e = 0; e < i; e++)
                            pt.find(t, s[e], n);
                        return n = this.pushStack(i > 1 ? pt.unique(n) : n), n.selector = this.selector ? this.selector + " " + t : t, n
                    },
                    filter: function (t) {
                        return this.pushStack(l(this, t || [], !1))
                    },
                    not: function (t) {
                        return this.pushStack(l(this, t || [], !0))
                    },
                    is: function (t) {
                        return !!l(this, "string" == typeof t && yt.test(t) ? pt(t) : t || [], !1).length
                    }
                });
                var xt, _t = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
                        Tt = pt.fn.init = function (t, e, i) {
                            var n, s;
                            if (!t)
                                return this;
                            if (i = i || xt, "string" == typeof t) {
                                if (n = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : _t.exec(t), !n || !n[1] && e)
                                    return !e || e.jquery ? (e || i).find(t) : this.constructor(e).find(t);
                                if (n[1]) {
                                    if (e = e instanceof pt ? e[0] : e, pt.merge(this, pt.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : tt, !0)), bt.test(n[1]) && pt.isPlainObject(e))
                                        for (n in e)
                                            pt.isFunction(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
                                    return this
                                }
                                return s = tt.getElementById(n[2]), s && s.parentNode && (this.length = 1, this[0] = s), this.context = tt, this.selector = t, this
                            }
                            return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : pt.isFunction(t) ? void 0 !== i.ready ? i.ready(t) : t(pt) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), pt.makeArray(t, this))
                        };
                Tt.prototype = pt.fn, xt = pt(tt);
                var St = /^(?:parents|prev(?:Until|All))/,
                        Ct = {
                            children: !0,
                            contents: !0,
                            next: !0,
                            prev: !0
                        };
                pt.fn.extend({
                    has: function (t) {
                        var e = pt(t, this),
                                i = e.length;
                        return this.filter(function () {
                            for (var t = 0; t < i; t++)
                                if (pt.contains(this, e[t]))
                                    return !0
                        })
                    },
                    closest: function (t, e) {
                        for (var i, n = 0, s = this.length, r = [], o = yt.test(t) || "string" != typeof t ? pt(t, e || this.context) : 0; n < s; n++)
                            for (i = this[n]; i && i !== e; i = i.parentNode)
                                if (i.nodeType < 11 && (o ? o.index(i) > -1 : 1 === i.nodeType && pt.find.matchesSelector(i, t))) {
                                    r.push(i);
                                    break
                                }
                        return this.pushStack(r.length > 1 ? pt.uniqueSort(r) : r)
                    },
                    index: function (t) {
                        return t ? "string" == typeof t ? st.call(pt(t), this[0]) : st.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                    },
                    add: function (t, e) {
                        return this.pushStack(pt.uniqueSort(pt.merge(this.get(), pt(t, e))))
                    },
                    addBack: function (t) {
                        return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
                    }
                }), pt.each({
                    parent: function Xe(t) {
                        var Xe = t.parentNode;
                        return Xe && 11 !== Xe.nodeType ? Xe : null
                    },
                    parents: function (t) {
                        return gt(t, "parentNode")
                    },
                    parentsUntil: function (t, e, i) {
                        return gt(t, "parentNode", i)
                    },
                    next: function (t) {
                        return c(t, "nextSibling")
                    },
                    prev: function (t) {
                        return c(t, "previousSibling")
                    },
                    nextAll: function (t) {
                        return gt(t, "nextSibling")
                    },
                    prevAll: function (t) {
                        return gt(t, "previousSibling")
                    },
                    nextUntil: function (t, e, i) {
                        return gt(t, "nextSibling", i)
                    },
                    prevUntil: function (t, e, i) {
                        return gt(t, "previousSibling", i)
                    },
                    siblings: function (t) {
                        return vt((t.parentNode || {}).firstChild, t)
                    },
                    children: function (t) {
                        return vt(t.firstChild)
                    },
                    contents: function (t) {
                        return t.contentDocument || pt.merge([], t.childNodes)
                    }
                }, function (t, e) {
                    pt.fn[t] = function (i, n) {
                        var s = pt.map(this, e, i);
                        return "Until" !== t.slice(-5) && (n = i), n && "string" == typeof n && (s = pt.filter(n, s)), this.length > 1 && (Ct[t] || pt.uniqueSort(s), St.test(t) && s.reverse()), this.pushStack(s)
                    }
                });
                var kt = /\S+/g;
                pt.Callbacks = function (t) {
                    t = "string" == typeof t ? p(t) : pt.extend({}, t);
                    var e, i, n, s, r = [],
                            o = [],
                            a = -1,
                            l = function () {
                                for (s = t.once, n = e = !0; o.length; a = - 1)
                                    for (i = o.shift(); ++a < r.length; )
                                        r[a].apply(i[0], i[1]) === !1 && t.stopOnFalse && (a = r.length, i = !1);
                                t.memory || (i = !1), e = !1, s && (r = i ? [] : "")
                            },
                            c = {
                                add: function () {
                                    return r && (i && !e && (a = r.length - 1, o.push(i)), function n(e) {
                                        pt.each(e, function (e, i) {
                                            pt.isFunction(i) ? t.unique && c.has(i) || r.push(i) : i && i.length && "string" !== pt.type(i) && n(i)
                                        })
                                    }(arguments), i && !e && l()), this
                                },
                                remove: function () {
                                    return pt.each(arguments, function (t, e) {
                                        for (var i;
                                                (i = pt.inArray(e, r, i)) > - 1; )
                                            r.splice(i, 1), i <= a && a--
                                    }), this
                                },
                                has: function (t) {
                                    return t ? pt.inArray(t, r) > -1 : r.length > 0
                                },
                                empty: function () {
                                    return r && (r = []), this
                                },
                                disable: function () {
                                    return s = o = [], r = i = "", this
                                },
                                disabled: function () {
                                    return !r
                                },
                                lock: function () {
                                    return s = o = [], i || (r = i = ""), this
                                },
                                locked: function () {
                                    return !!s
                                },
                                fireWith: function (t, i) {
                                    return s || (i = i || [], i = [t, i.slice ? i.slice() : i], o.push(i), e || l()), this
                                },
                                fire: function () {
                                    return c.fireWith(this, arguments), this
                                },
                                fired: function () {
                                    return !!n
                                }
                            };
                    return c
                }, pt.extend({
                    Deferred: function (t) {
                        var e = [
                            ["resolve", "done", pt.Callbacks("once memory"), "resolved"],
                            ["reject", "fail", pt.Callbacks("once memory"), "rejected"],
                            ["notify", "progress", pt.Callbacks("memory")]
                        ],
                                i = "pending",
                                n = {
                                    state: function () {
                                        return i
                                    },
                                    always: function () {
                                        return s.done(arguments).fail(arguments), this
                                    },
                                    then: function () {
                                        var t = arguments;
                                        return pt.Deferred(function (i) {
                                            pt.each(e, function (e, r) {
                                                var o = pt.isFunction(t[e]) && t[e];
                                                s[r[1]](function () {
                                                    var t = o && o.apply(this, arguments);
                                                    t && pt.isFunction(t.promise) ? t.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[r[0] + "With"](this === n ? i.promise() : this, o ? [t] : arguments)
                                                })
                                            }), t = null
                                        }).promise()
                                    },
                                    promise: function (t) {
                                        return null != t ? pt.extend(t, n) : n
                                    }
                                },
                                s = {};
                        return n.pipe = n.then, pt.each(e, function (t, r) {
                            var o = r[2],
                                    a = r[3];
                            n[r[1]] = o.add, a && o.add(function () {
                                i = a
                            }, e[1 ^ t][2].disable, e[2][2].lock), s[r[0]] = function () {
                                return s[r[0] + "With"](this === s ? n : this, arguments), this
                            }, s[r[0] + "With"] = o.fireWith
                        }), n.promise(s), t && t.call(s, s), s
                    },
                    when: function (t) {
                        var e, i, n, s = 0,
                                r = et.call(arguments),
                                o = r.length,
                                a = 1 !== o || t && pt.isFunction(t.promise) ? o : 0,
                                l = 1 === a ? t : pt.Deferred(),
                                c = function (t, i, n) {
                                    return function (s) {
                                        i[t] = this, n[t] = arguments.length > 1 ? et.call(arguments) : s, n === e ? l.notifyWith(i, n) : --a || l.resolveWith(i, n)
                                    }
                                };
                        if (o > 1)
                            for (e = new Array(o), i = new Array(o), n = new Array(o); s < o; s++)
                                r[s] && pt.isFunction(r[s].promise) ? r[s].promise().progress(c(s, i, e)).done(c(s, n, r)).fail(l.reject) : --a;
                        return a || l.resolveWith(n, r), l.promise()
                    }
                });
                var Et;
                pt.fn.ready = function (t) {
                    return pt.ready.promise().done(t), this
                }, pt.extend({
                    isReady: !1,
                    readyWait: 1,
                    holdReady: function (t) {
                        t ? pt.readyWait++ : pt.ready(!0)
                    },
                    ready: function (t) {
                        (t === !0 ? --pt.readyWait : pt.isReady) || (pt.isReady = !0, t !== !0 && --pt.readyWait > 0 || (Et.resolveWith(tt, [pt]), pt.fn.triggerHandler && (pt(tt).triggerHandler("ready"), pt(tt).off("ready"))))
                    }
                }), pt.ready.promise = function (t) {
                    return Et || (Et = pt.Deferred(), "complete" === tt.readyState || "loading" !== tt.readyState && !tt.documentElement.doScroll ? r.setTimeout(pt.ready) : (tt.addEventListener("DOMContentLoaded", d), r.addEventListener("load", d))), Et.promise(t)
                }, pt.ready.promise();
                var At = function Ye(t, e, i, n, s, r, o) {
                    var a = 0,
                            l = t.length,
                            c = null == i;
                    if ("object" === pt.type(i)) {
                        s = !0;
                        for (a in i)
                            Ye(t, e, a, i[a], !0, r, o)
                    } else if (void 0 !== n && (s = !0, pt.isFunction(n) || (o = !0), c && (o ? (e.call(t, n), e = null) : (c = e, e = function (t, e, i) {
                        return c.call(pt(t), i)
                    })), e))
                        for (; a < l; a++)
                            e(t[a], i, o ? n : n.call(t[a], a, e(t[a], i)));
                    return s ? t : c ? e.call(t) : l ? e(t[0], i) : r
                },
                        $t = function (t) {
                            return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
                        };
                h.uid = 1, h.prototype = {
                    register: function (t, e) {
                        var i = e || {};
                        return t.nodeType ? t[this.expando] = i : Object.defineProperty(t, this.expando, {
                            value: i,
                            writable: !0,
                            configurable: !0
                        }), t[this.expando]
                    },
                    cache: function (t) {
                        if (!$t(t))
                            return {};
                        var e = t[this.expando];
                        return e || (e = {}, $t(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                            value: e,
                            configurable: !0
                        }))), e
                    },
                    set: function (t, e, i) {
                        var n, s = this.cache(t);
                        if ("string" == typeof e)
                            s[e] = i;
                        else
                            for (n in e)
                                s[n] = e[n];
                        return s
                    },
                    get: function (t, e) {
                        return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][e]
                    },
                    access: function (t, e, i) {
                        var n;
                        return void 0 === e || e && "string" == typeof e && void 0 === i ? (n = this.get(t, e), void 0 !== n ? n : this.get(t, pt.camelCase(e))) : (this.set(t, e, i), void 0 !== i ? i : e)
                    },
                    remove: function (t, e) {
                        var i, n, s, r = t[this.expando];
                        if (void 0 !== r) {
                            if (void 0 === e)
                                this.register(t);
                            else {
                                pt.isArray(e) ? n = e.concat(e.map(pt.camelCase)) : (s = pt.camelCase(e), e in r ? n = [e, s] : (n = s, n = n in r ? [n] : n.match(kt) || [])), i = n.length;
                                for (; i--; )
                                    delete r[n[i]]
                            }
                            (void 0 === e || pt.isEmptyObject(r)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
                        }
                    },
                    hasData: function (t) {
                        var e = t[this.expando];
                        return void 0 !== e && !pt.isEmptyObject(e)
                    }
                };
                var Dt = new h,
                        Pt = new h,
                        Mt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                        It = /[A-Z]/g;
                pt.extend({
                    hasData: function (t) {
                        return Pt.hasData(t) || Dt.hasData(t)
                    },
                    data: function (t, e, i) {
                        return Pt.access(t, e, i)
                    },
                    removeData: function (t, e) {
                        Pt.remove(t, e)
                    },
                    _data: function (t, e, i) {
                        return Dt.access(t, e, i)
                    },
                    _removeData: function (t, e) {
                        Dt.remove(t, e)
                    }
                }), pt.fn.extend({
                    data: function Ke(t, e) {
                        var n, s, Ke, r = this[0],
                                o = r && r.attributes;
                        if (void 0 === t) {
                            if (this.length && (Ke = Pt.get(r), 1 === r.nodeType && !Dt.get(r, "hasDataAttrs"))) {
                                for (n = o.length; n--; )
                                    o[n] && (s = o[n].name, 0 === s.indexOf("data-") && (s = pt.camelCase(s.slice(5)), u(r, s, Ke[s])));
                                Dt.set(r, "hasDataAttrs", !0)
                            }
                            return Ke
                        }
                        return "object" === ("undefined" == typeof t ? "undefined" : i(t)) ? this.each(function () {
                            Pt.set(this, t)
                        }) : At(this, function (e) {
                            var i, n;
                            if (r && void 0 === e) {
                                if (i = Pt.get(r, t) || Pt.get(r, t.replace(It, "-$&").toLowerCase()), void 0 !== i)
                                    return i;
                                if (n = pt.camelCase(t), i = Pt.get(r, n), void 0 !== i)
                                    return i;
                                if (i = u(r, n, void 0), void 0 !== i)
                                    return i
                            } else
                                n = pt.camelCase(t), this.each(function () {
                                    var i = Pt.get(this, n);
                                    Pt.set(this, n, e), t.indexOf("-") > -1 && void 0 !== i && Pt.set(this, t, e)
                                })
                        }, null, e, arguments.length > 1, null, !0)
                    },
                    removeData: function (t) {
                        return this.each(function () {
                            Pt.remove(this, t)
                        })
                    }
                }), pt.extend({
                    queue: function Qe(t, e, i) {
                        var Qe;
                        if (t)
                            return e = (e || "fx") + "queue", Qe = Dt.get(t, e), i && (!Qe || pt.isArray(i) ? Qe = Dt.access(t, e, pt.makeArray(i)) : Qe.push(i)), Qe || []
                    },
                    dequeue: function (t, e) {
                        e = e || "fx";
                        var i = pt.queue(t, e),
                                n = i.length,
                                s = i.shift(),
                                r = pt._queueHooks(t, e),
                                o = function () {
                                    pt.dequeue(t, e)
                                };
                        "inprogress" === s && (s = i.shift(), n--), s && ("fx" === e && i.unshift("inprogress"), delete r.stop, s.call(t, o, r)), !n && r && r.empty.fire()
                    },
                    _queueHooks: function (t, e) {
                        var i = e + "queueHooks";
                        return Dt.get(t, i) || Dt.access(t, i, {
                            empty: pt.Callbacks("once memory").add(function () {
                                Dt.remove(t, [e + "queue", i])
                            })
                        })
                    }
                }), pt.fn.extend({
                    queue: function (t, e) {
                        var i = 2;
                        return "string" != typeof t && (e = t, t = "fx", i--), arguments.length < i ? pt.queue(this[0], t) : void 0 === e ? this : this.each(function () {
                            var i = pt.queue(this, t, e);
                            pt._queueHooks(this, t), "fx" === t && "inprogress" !== i[0] && pt.dequeue(this, t)
                        })
                    },
                    dequeue: function (t) {
                        return this.each(function () {
                            pt.dequeue(this, t)
                        })
                    },
                    clearQueue: function (t) {
                        return this.queue(t || "fx", [])
                    },
                    promise: function (t, e) {
                        var i, n = 1,
                                s = pt.Deferred(),
                                r = this,
                                o = this.length,
                                a = function () {
                                    --n || s.resolveWith(r, [r])
                                };
                        for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; o--; )
                            i = Dt.get(r[o], t + "queueHooks"), i && i.empty && (n++, i.empty.add(a));
                        return a(), s.promise(e)
                    }
                });
                var Nt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                        Lt = new RegExp("^(?:([+-])=|)(" + Nt + ")([a-z%]*)$", "i"),
                        zt = ["Top", "Right", "Bottom", "Left"],
                        Ot = function (t, e) {
                            return t = e || t, "none" === pt.css(t, "display") || !pt.contains(t.ownerDocument, t)
                        },
                        Ht = /^(?:checkbox|radio)$/i,
                        Ft = /<([\w:-]+)/,
                        Rt = /^$|\/(?:java|ecma)script/i,
                        Bt = {
                            option: [1, "<select multiple='multiple'>", "</select>"],
                            thead: [1, "<table>", "</table>"],
                            col: [2, "<table><colgroup>", "</colgroup></table>"],
                            tr: [2, "<table><tbody>", "</tbody></table>"],
                            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                            _default: [0, "", ""]
                        };
                Bt.optgroup = Bt.option, Bt.tbody = Bt.tfoot = Bt.colgroup = Bt.caption = Bt.thead, Bt.th = Bt.td;
                var jt = /<|&#?\w+;/;
                !function () {
                    var t = tt.createDocumentFragment(),
                            e = t.appendChild(tt.createElement("div")),
                            i = tt.createElement("input");
                    i.setAttribute("type", "radio"), i.setAttribute("checked", "checked"), i.setAttribute("name", "t"), e.appendChild(i), lt.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", lt.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
                }();
                var qt = /^key/,
                        Wt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
                        Gt = /^([^.]*)(?:\.(.+)|)/;
                pt.event = {
                    global: {},
                    add: function (t, e, i, n, s) {
                        var r, o, a, l, c, p, d, h, u, f, m, g = Dt.get(t);
                        if (g)
                            for (i.handler && (r = i, i = r.handler, s = r.selector), i.guid || (i.guid = pt.guid++), (l = g.events) || (l = g.events = {}), (o = g.handle) || (o = g.handle = function(e) {
                            return "undefined" != typeof pt && pt.event.triggered !== e.type ? pt.event.dispatch.apply(t, arguments) : void 0
                            }), e = (e || "").match(kt) || [""], c = e.length; c--; )
                                a = Gt.exec(e[c]) || [], u = m = a[1], f = (a[2] || "").split(".").sort(), u && (d = pt.event.special[u] || {}, u = (s ? d.delegateType : d.bindType) || u, d = pt.event.special[u] || {}, p = pt.extend({
                                    type: u,
                                    origType: m,
                                    data: n,
                                    handler: i,
                                    guid: i.guid,
                                    selector: s,
                                    needsContext: s && pt.expr.match.needsContext.test(s),
                                    namespace: f.join(".")
                                }, r), (h = l[u]) || (h = l[u] = [], h.delegateCount = 0, d.setup && d.setup.call(t, n, f, o) !== !1 || t.addEventListener && t.addEventListener(u, o)), d.add && (d.add.call(t, p), p.handler.guid || (p.handler.guid = i.guid)), s ? h.splice(h.delegateCount++, 0, p) : h.push(p), pt.event.global[u] = !0)
                    },
                    remove: function (t, e, i, n, s) {
                        var r, o, a, l, c, p, d, h, u, f, m, g = Dt.hasData(t) && Dt.get(t);
                        if (g && (l = g.events)) {
                            for (e = (e || "").match(kt) || [""], c = e.length; c--; )
                                if (a = Gt.exec(e[c]) || [], u = m = a[1], f = (a[2] || "").split(".").sort(), u) {
                                    for (d = pt.event.special[u] || {}, u = (n ? d.delegateType : d.bindType) || u, h = l[u] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), o = r = h.length; r--; )
                                        p = h[r], !s && m !== p.origType || i && i.guid !== p.guid || a && !a.test(p.namespace) || n && n !== p.selector && ("**" !== n || !p.selector) || (h.splice(r, 1), p.selector && h.delegateCount--, d.remove && d.remove.call(t, p));
                                    o && !h.length && (d.teardown && d.teardown.call(t, f, g.handle) !== !1 || pt.removeEvent(t, u, g.handle), delete l[u])
                                } else
                                    for (u in l)
                                        pt.event.remove(t, u + e[c], i, n, !0);
                            pt.isEmptyObject(l) && Dt.remove(t, "handle events")
                        }
                    },
                    dispatch: function (t) {
                        t = pt.event.fix(t);
                        var e, i, n, s, r, o = [],
                                a = et.call(arguments),
                                l = (Dt.get(this, "events") || {})[t.type] || [],
                                c = pt.event.special[t.type] || {};
                        if (a[0] = t, t.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, t) !== !1) {
                            for (o = pt.event.handlers.call(this, t, l), e = 0;
                                    (s = o[e++]) && !t.isPropagationStopped(); )
                                for (t.currentTarget = s.elem, i = 0;
                                        (r = s.handlers[i++]) && !t.isImmediatePropagationStopped(); )
                                    t.rnamespace && !t.rnamespace.test(r.namespace) || (t.handleObj = r, t.data = r.data, n = ((pt.event.special[r.origType] || {}).handle || r.handler).apply(s.elem, a), void 0 !== n && (t.result = n) === !1 && (t.preventDefault(), t.stopPropagation()));
                            return c.postDispatch && c.postDispatch.call(this, t), t.result
                        }
                    },
                    handlers: function (t, e) {
                        var i, n, s, r, o = [],
                                a = e.delegateCount,
                                l = t.target;
                        if (a && l.nodeType && ("click" !== t.type || isNaN(t.button) || t.button < 1))
                            for (; l !== this; l = l.parentNode || this)
                                if (1 === l.nodeType && (l.disabled !== !0 || "click" !== t.type)) {
                                    for (n = [], i = 0; i < a; i++)
                                        r = e[i], s = r.selector + " ", void 0 === n[s] && (n[s] = r.needsContext ? pt(s, this).index(l) > -1 : pt.find(s, this, null, [l]).length), n[s] && n.push(r);
                                    n.length && o.push({
                                        elem: l,
                                        handlers: n
                                    })
                                }
                        return a < e.length && o.push({
                            elem: this,
                            handlers: e.slice(a)
                        }), o
                    },
                    props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
                    fixHooks: {},
                    keyHooks: {
                        props: "char charCode key keyCode".split(" "),
                        filter: function (t, e) {
                            return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
                        }
                    },
                    mouseHooks: {
                        props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                        filter: function (t, e) {
                            var i, n, s, r = e.button;
                            return null == t.pageX && null != e.clientX && (i = t.target.ownerDocument || tt, n = i.documentElement, s = i.body, t.pageX = e.clientX + (n && n.scrollLeft || s && s.scrollLeft || 0) - (n && n.clientLeft || s && s.clientLeft || 0), t.pageY = e.clientY + (n && n.scrollTop || s && s.scrollTop || 0) - (n && n.clientTop || s && s.clientTop || 0)), t.which || void 0 === r || (t.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0), t
                        }
                    },
                    fix: function (t) {
                        if (t[pt.expando])
                            return t;
                        var e, i, n, s = t.type,
                                r = t,
                                o = this.fixHooks[s];
                        for (o || (this.fixHooks[s] = o = Wt.test(s) ? this.mouseHooks : qt.test(s) ? this.keyHooks : {}), n = o.props ? this.props.concat(o.props) : this.props, t = new pt.Event(r), e = n.length; e--; )
                            i = n[e], t[i] = r[i];
                        return t.target || (t.target = tt), 3 === t.target.nodeType && (t.target = t.target.parentNode), o.filter ? o.filter(t, r) : t
                    },
                    special: {
                        load: {
                            noBubble: !0
                        },
                        focus: {
                            trigger: function () {
                                if (this !== w() && this.focus)
                                    return this.focus(), !1
                            },
                            delegateType: "focusin"
                        },
                        blur: {
                            trigger: function () {
                                if (this === w() && this.blur)
                                    return this.blur(), !1
                            },
                            delegateType: "focusout"
                        },
                        click: {
                            trigger: function () {
                                if ("checkbox" === this.type && this.click && pt.nodeName(this, "input"))
                                    return this.click(), !1
                            },
                            _default: function (t) {
                                return pt.nodeName(t.target, "a")
                            }
                        },
                        beforeunload: {
                            postDispatch: function (t) {
                                void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                            }
                        }
                    }
                }, pt.removeEvent = function (t, e, i) {
                    t.removeEventListener && t.removeEventListener(e, i)
                }, pt.Event = function (t, e) {
                    return this instanceof pt.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? y : b) : this.type = t, e && pt.extend(this, e), this.timeStamp = t && t.timeStamp || pt.now(), void(this[pt.expando] = !0)) : new pt.Event(t, e)
                }, pt.Event.prototype = {
                    constructor: pt.Event,
                    isDefaultPrevented: b,
                    isPropagationStopped: b,
                    isImmediatePropagationStopped: b,
                    isSimulated: !1,
                    preventDefault: function () {
                        var t = this.originalEvent;
                        this.isDefaultPrevented = y, t && !this.isSimulated && t.preventDefault()
                    },
                    stopPropagation: function () {
                        var t = this.originalEvent;
                        this.isPropagationStopped = y, t && !this.isSimulated && t.stopPropagation()
                    },
                    stopImmediatePropagation: function () {
                        var t = this.originalEvent;
                        this.isImmediatePropagationStopped = y, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation()
                    }
                }, pt.each({
                    mouseenter: "mouseover",
                    mouseleave: "mouseout",
                    pointerenter: "pointerover",
                    pointerleave: "pointerout"
                }, function (t, e) {
                    pt.event.special[t] = {
                        delegateType: e,
                        bindType: e,
                        handle: function (t) {
                            var i, n = this,
                                    s = t.relatedTarget,
                                    r = t.handleObj;
                            return s && (s === n || pt.contains(n, s)) || (t.type = r.origType, i = r.handler.apply(this, arguments), t.type = e), i
                        }
                    }
                }), pt.fn.extend({
                    on: function (t, e, i, n) {
                        return x(this, t, e, i, n)
                    },
                    one: function (t, e, i, n) {
                        return x(this, t, e, i, n, 1)
                    },
                    off: function (t, e, n) {
                        var s, r;
                        if (t && t.preventDefault && t.handleObj)
                            return s = t.handleObj, pt(t.delegateTarget).off(s.namespace ? s.origType + "." + s.namespace : s.origType, s.selector, s.handler), this;
                        if ("object" === ("undefined" == typeof t ? "undefined" : i(t))) {
                            for (r in t)
                                this.off(r, e, t[r]);
                            return this
                        }
                        return e !== !1 && "function" != typeof e || (n = e, e = void 0), n === !1 && (n = b), this.each(function () {
                            pt.event.remove(this, t, n, e)
                        })
                    }
                });
                var Vt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
                        Ut = /<script|<style|<link/i,
                        Xt = /checked\s*(?:[^=]|=\s*.checked.)/i,
                        Yt = /^true\/(.*)/,
                        Kt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
                pt.extend({
                    htmlPrefilter: function (t) {
                        return t.replace(Vt, "<$1></$2>")
                    },
                    clone: function Je(t, e, i) {
                        var n, s, r, o, Je = t.cloneNode(!0),
                                a = pt.contains(t.ownerDocument, t);
                        if (!(lt.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || pt.isXMLDoc(t)))
                            for (o = m(Je), r = m(t), n = 0, s = r.length; n < s; n++)
                                k(r[n], o[n]);
                        if (e)
                            if (i)
                                for (r = r || m(t), o = o || m(Je), n = 0, s = r.length; n < s; n++)
                                    C(r[n], o[n]);
                            else
                                C(t, Je);
                        return o = m(Je, "script"), o.length > 0 && g(o, !a && m(t, "script")), Je
                    },
                    cleanData: function (t) {
                        for (var e, i, n, s = pt.event.special, r = 0; void 0 !== (i = t[r]); r++)
                            if ($t(i)) {
                                if (e = i[Dt.expando]) {
                                    if (e.events)
                                        for (n in e.events)
                                            s[n] ? pt.event.remove(i, n) : pt.removeEvent(i, n, e.handle);
                                    i[Dt.expando] = void 0
                                }
                                i[Pt.expando] && (i[Pt.expando] = void 0)
                            }
                    }
                }), pt.fn.extend({
                    domManip: E,
                    detach: function (t) {
                        return A(this, t, !0)
                    },
                    remove: function (t) {
                        return A(this, t)
                    },
                    text: function (t) {
                        return At(this, function (t) {
                            return void 0 === t ? pt.text(this) : this.empty().each(function () {
                                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                            })
                        }, null, t, arguments.length)
                    },
                    append: function () {
                        return E(this, arguments, function (t) {
                            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                                var e = _(this, t);
                                e.appendChild(t)
                            }
                        })
                    },
                    prepend: function () {
                        return E(this, arguments, function (t) {
                            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                                var e = _(this, t);
                                e.insertBefore(t, e.firstChild)
                            }
                        })
                    },
                    before: function () {
                        return E(this, arguments, function (t) {
                            this.parentNode && this.parentNode.insertBefore(t, this)
                        })
                    },
                    after: function () {
                        return E(this, arguments, function (t) {
                            this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
                        })
                    },
                    empty: function () {
                        for (var t, e = 0; null != (t = this[e]); e++)
                            1 === t.nodeType && (pt.cleanData(m(t, !1)), t.textContent = "");
                        return this
                    },
                    clone: function (t, e) {
                        return t = null != t && t, e = null == e ? t : e, this.map(function () {
                            return pt.clone(this, t, e)
                        })
                    },
                    html: function (t) {
                        return At(this, function (t) {
                            var e = this[0] || {},
                                    i = 0,
                                    n = this.length;
                            if (void 0 === t && 1 === e.nodeType)
                                return e.innerHTML;
                            if ("string" == typeof t && !Ut.test(t) && !Bt[(Ft.exec(t) || ["", ""])[1].toLowerCase()]) {
                                t = pt.htmlPrefilter(t);
                                try {
                                    for (; i < n; i++)
                                        e = this[i] || {}, 1 === e.nodeType && (pt.cleanData(m(e, !1)), e.innerHTML = t);
                                    e = 0
                                } catch (s) {
                                }
                            }
                            e && this.empty().append(t)
                        }, null, t, arguments.length)
                    },
                    replaceWith: function () {
                        var t = [];
                        return E(this, arguments, function (e) {
                            var i = this.parentNode;
                            pt.inArray(this, t) < 0 && (pt.cleanData(m(this)), i && i.replaceChild(e, this))
                        }, t)
                    }
                }), pt.each({
                    appendTo: "append",
                    prependTo: "prepend",
                    insertBefore: "before",
                    insertAfter: "after",
                    replaceAll: "replaceWith"
                }, function (t, e) {
                    pt.fn[t] = function (t) {
                        for (var i, n = [], s = pt(t), r = s.length - 1, o = 0; o <= r; o++)
                            i = o === r ? this : this.clone(!0), pt(s[o])[e](i), nt.apply(n, i.get());
                        return this.pushStack(n)
                    }
                });
                var Qt, Jt = {
                    HTML: "block",
                    BODY: "block"
                },
                        Zt = /^margin/,
                        te = new RegExp("^(" + Nt + ")(?!px)[a-z%]+$", "i"),
                        ee = function (t) {
                            var e = t.ownerDocument.defaultView;
                            return e && e.opener || (e = r), e.getComputedStyle(t)
                        },
                        ie = function (t, e, i, n) {
                            var s, r, o = {};
                            for (r in e)
                                o[r] = t.style[r], t.style[r] = e[r];
                            s = i.apply(t, n || []);
                            for (r in e)
                                t.style[r] = o[r];
                            return s
                        },
                        ne = tt.documentElement;
                !function () {
                    function t() {
                        a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", a.innerHTML = "", ne.appendChild(o);
                        var t = r.getComputedStyle(a);
                        e = "1%" !== t.top, s = "2px" === t.marginLeft, i = "4px" === t.width, a.style.marginRight = "50%", n = "4px" === t.marginRight, ne.removeChild(o)
                    }
                    var e, i, n, s, o = tt.createElement("div"),
                            a = tt.createElement("div");
                    a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", lt.clearCloneStyle = "content-box" === a.style.backgroundClip, o.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", o.appendChild(a), pt.extend(lt, {
                        pixelPosition: function () {
                            return t(), e
                        },
                        boxSizingReliable: function () {
                            return null == i && t(), i
                        },
                        pixelMarginRight: function () {
                            return null == i && t(), n
                        },
                        reliableMarginLeft: function () {
                            return null == i && t(), s
                        },
                        reliableMarginRight: function () {
                            var t, e = a.appendChild(tt.createElement("div"));
                            return e.style.cssText = a.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", e.style.marginRight = e.style.width = "0", a.style.width = "1px", ne.appendChild(o), t = !parseFloat(r.getComputedStyle(e).marginRight), ne.removeChild(o), a.removeChild(e), t
                        }
                    }))
                }();
                var se = /^(none|table(?!-c[ea]).+)/,
                        re = {
                            position: "absolute",
                            visibility: "hidden",
                            display: "block"
                        },
                        oe = {
                            letterSpacing: "0",
                            fontWeight: "400"
                        },
                        ae = ["Webkit", "O", "Moz", "ms"],
                        le = tt.createElement("div").style;
                pt.extend({
                    cssHooks: {
                        opacity: {
                            get: function (t, e) {
                                if (e) {
                                    var i = P(t, "opacity");
                                    return "" === i ? "1" : i
                                }
                            }
                        }
                    },
                    cssNumber: {
                        animationIterationCount: !0,
                        columnCount: !0,
                        fillOpacity: !0,
                        flexGrow: !0,
                        flexShrink: !0,
                        fontWeight: !0,
                        lineHeight: !0,
                        opacity: !0,
                        order: !0,
                        orphans: !0,
                        widows: !0,
                        zIndex: !0,
                        zoom: !0
                    },
                    cssProps: {
                        "float": "cssFloat"
                    },
                    style: function Ze(t, e, n, s) {
                        if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                            var r, o, a, l = pt.camelCase(e),
                                    Ze = t.style;
                            return e = pt.cssProps[l] || (pt.cssProps[l] = I(l) || l), a = pt.cssHooks[e] || pt.cssHooks[l], void 0 === n ? a && "get" in a && void 0 !== (r = a.get(t, !1, s)) ? r : Ze[e] : (o = "undefined" == typeof n ? "undefined" : i(n), "string" === o && (r = Lt.exec(n)) && r[1] && (n = f(t, e, r), o = "number"), null != n && n === n && ("number" === o && (n += r && r[3] || (pt.cssNumber[l] ? "" : "px")), lt.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (Ze[e] = "inherit"), a && "set" in a && void 0 === (n = a.set(t, n, s)) || (Ze[e] = n)), void 0)
                        }
                    },
                    css: function (t, e, i, n) {
                        var s, r, o, a = pt.camelCase(e);
                        return e = pt.cssProps[a] || (pt.cssProps[a] = I(a) || a), o = pt.cssHooks[e] || pt.cssHooks[a], o && "get" in o && (s = o.get(t, !0, i)), void 0 === s && (s = P(t, e, n)), "normal" === s && e in oe && (s = oe[e]), "" === i || i ? (r = parseFloat(s), i === !0 || isFinite(r) ? r || 0 : s) : s
                    }
                }), pt.each(["height", "width"], function (t, e) {
                    pt.cssHooks[e] = {
                        get: function (t, i, n) {
                            if (i)
                                return se.test(pt.css(t, "display")) && 0 === t.offsetWidth ? ie(t, re, function () {
                                    return z(t, e, n)
                                }) : z(t, e, n)
                        },
                        set: function (t, i, n) {
                            var s, r = n && ee(t),
                                    o = n && L(t, e, n, "border-box" === pt.css(t, "boxSizing", !1, r), r);
                            return o && (s = Lt.exec(i)) && "px" !== (s[3] || "px") && (t.style[e] = i, i = pt.css(t, e)), N(t, i, o)
                        }
                    }
                }), pt.cssHooks.marginLeft = M(lt.reliableMarginLeft, function (t, e) {
                    if (e)
                        return (parseFloat(P(t, "marginLeft")) || t.getBoundingClientRect().left - ie(t, {
                            marginLeft: 0
                        }, function () {
                            return t.getBoundingClientRect().left
                        })) + "px"
                }), pt.cssHooks.marginRight = M(lt.reliableMarginRight, function (t, e) {
                    if (e)
                        return ie(t, {
                            display: "inline-block"
                        }, P, [t, "marginRight"])
                }), pt.each({
                    margin: "",
                    padding: "",
                    border: "Width"
                }, function (t, e) {
                    pt.cssHooks[t + e] = {
                        expand: function (i) {
                            for (var n = 0, s = {}, r = "string" == typeof i ? i.split(" ") : [i]; n < 4; n++)
                                s[t + zt[n] + e] = r[n] || r[n - 2] || r[0];
                            return s
                        }
                    }, Zt.test(t) || (pt.cssHooks[t + e].set = N)
                }), pt.fn.extend({
                    css: function (t, e) {
                        return At(this, function (t, e, i) {
                            var n, s, r = {},
                                    o = 0;
                            if (pt.isArray(e)) {
                                for (n = ee(t), s = e.length; o < s; o++)
                                    r[e[o]] = pt.css(t, e[o], !1, n);
                                return r
                            }
                            return void 0 !== i ? pt.style(t, e, i) : pt.css(t, e)
                        }, t, e, arguments.length > 1)
                    },
                    show: function () {
                        return O(this, !0)
                    },
                    hide: function () {
                        return O(this)
                    },
                    toggle: function (t) {
                        return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function () {
                            Ot(this) ? pt(this).show() : pt(this).hide()
                        })
                    }
                }), pt.Tween = H, H.prototype = {
                    constructor: H,
                    init: function (t, e, i, n, s, r) {
                        this.elem = t, this.prop = i, this.easing = s || pt.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = n, this.unit = r || (pt.cssNumber[i] ? "" : "px")
                    },
                    cur: function () {
                        var t = H.propHooks[this.prop];
                        return t && t.get ? t.get(this) : H.propHooks._default.get(this)
                    },
                    run: function (t) {
                        var e, i = H.propHooks[this.prop];
                        return this.options.duration ? this.pos = e = pt.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : H.propHooks._default.set(this), this
                    }
                }, H.prototype.init.prototype = H.prototype, H.propHooks = {
                    _default: {
                        get: function (t) {
                            var e;
                            return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = pt.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0)
                        },
                        set: function (t) {
                            pt.fx.step[t.prop] ? pt.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[pt.cssProps[t.prop]] && !pt.cssHooks[t.prop] ? t.elem[t.prop] = t.now : pt.style(t.elem, t.prop, t.now + t.unit)
                        }
                    }
                }, H.propHooks.scrollTop = H.propHooks.scrollLeft = {
                    set: function (t) {
                        t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
                    }
                }, pt.easing = {
                    linear: function (t) {
                        return t
                    },
                    swing: function (t) {
                        return .5 - Math.cos(t * Math.PI) / 2
                    },
                    _default: "swing"
                }, pt.fx = H.prototype.init, pt.fx.step = {};
                var ce, pe, de = /^(?:toggle|show|hide)$/,
                        he = /queueHooks$/;
                pt.Animation = pt.extend(W, {
                    tweeners: {
                        "*": [function (t, e) {
                                var i = this.createTween(t, e);
                                return f(i.elem, t, Lt.exec(e), i), i
                            }]
                    },
                    tweener: function (t, e) {
                        pt.isFunction(t) ? (e = t, t = ["*"]) : t = t.match(kt);
                        for (var i, n = 0, s = t.length; n < s; n++)
                            i = t[n], W.tweeners[i] = W.tweeners[i] || [], W.tweeners[i].unshift(e)
                    },
                    prefilters: [j],
                    prefilter: function (t, e) {
                        e ? W.prefilters.unshift(t) : W.prefilters.push(t)
                    }
                }), pt.speed = function (t, e, n) {
                    var s = t && "object" === ("undefined" == typeof t ? "undefined" : i(t)) ? pt.extend({}, t) : {
                        complete: n || !n && e || pt.isFunction(t) && t,
                        duration: t,
                        easing: n && e || e && !pt.isFunction(e) && e
                    };
                    return s.duration = pt.fx.off ? 0 : "number" == typeof s.duration ? s.duration : s.duration in pt.fx.speeds ? pt.fx.speeds[s.duration] : pt.fx.speeds._default, null != s.queue && s.queue !== !0 || (s.queue = "fx"), s.old = s.complete, s.complete = function () {
                        pt.isFunction(s.old) && s.old.call(this), s.queue && pt.dequeue(this, s.queue)
                    }, s
                }, pt.fn.extend({
                    fadeTo: function (t, e, i, n) {
                        return this.filter(Ot).css("opacity", 0).show().end().animate({
                            opacity: e
                        }, t, i, n)
                    },
                    animate: function (t, e, i, n) {
                        var s = pt.isEmptyObject(t),
                                r = pt.speed(e, i, n),
                                o = function () {
                                    var e = W(this, pt.extend({}, t), r);
                                    (s || Dt.get(this, "finish")) && e.stop(!0)
                                };
                        return o.finish = o, s || r.queue === !1 ? this.each(o) : this.queue(r.queue, o)
                    },
                    stop: function (t, e, i) {
                        var n = function (t) {
                            var e = t.stop;
                            delete t.stop, e(i)
                        };
                        return "string" != typeof t && (i = e, e = t, t = void 0), e && t !== !1 && this.queue(t || "fx", []), this.each(function () {
                            var e = !0,
                                    s = null != t && t + "queueHooks",
                                    r = pt.timers,
                                    o = Dt.get(this);
                            if (s)
                                o[s] && o[s].stop && n(o[s]);
                            else
                                for (s in o)
                                    o[s] && o[s].stop && he.test(s) && n(o[s]);
                            for (s = r.length; s--; )
                                r[s].elem !== this || null != t && r[s].queue !== t || (r[s].anim.stop(i), e = !1, r.splice(s, 1));
                            !e && i || pt.dequeue(this, t)
                        })
                    },
                    finish: function (t) {
                        return t !== !1 && (t = t || "fx"), this.each(function () {
                            var e, i = Dt.get(this),
                                    n = i[t + "queue"],
                                    s = i[t + "queueHooks"],
                                    r = pt.timers,
                                    o = n ? n.length : 0;
                            for (i.finish = !0, pt.queue(this, t, []), s && s.stop && s.stop.call(this, !0), e = r.length; e--; )
                                r[e].elem === this && r[e].queue === t && (r[e].anim.stop(!0), r.splice(e, 1));
                            for (e = 0; e < o; e++)
                                n[e] && n[e].finish && n[e].finish.call(this);
                            delete i.finish
                        })
                    }
                }), pt.each(["toggle", "show", "hide"], function (t, e) {
                    var i = pt.fn[e];
                    pt.fn[e] = function (t, n, s) {
                        return null == t || "boolean" == typeof t ? i.apply(this, arguments) : this.animate(R(e, !0), t, n, s)
                    }
                }), pt.each({
                    slideDown: R("show"),
                    slideUp: R("hide"),
                    slideToggle: R("toggle"),
                    fadeIn: {
                        opacity: "show"
                    },
                    fadeOut: {
                        opacity: "hide"
                    },
                    fadeToggle: {
                        opacity: "toggle"
                    }
                }, function (t, e) {
                    pt.fn[t] = function (t, i, n) {
                        return this.animate(e, t, i, n)
                    }
                }), pt.timers = [], pt.fx.tick = function () {
                    var t, e = 0,
                            i = pt.timers;
                    for (ce = pt.now(); e < i.length; e++)
                        t = i[e], t() || i[e] !== t || i.splice(e--, 1);
                    i.length || pt.fx.stop(), ce = void 0
                }, pt.fx.timer = function (t) {
                    pt.timers.push(t), t() ? pt.fx.start() : pt.timers.pop()
                }, pt.fx.interval = 13, pt.fx.start = function () {
                    pe || (pe = r.setInterval(pt.fx.tick, pt.fx.interval))
                }, pt.fx.stop = function () {
                    r.clearInterval(pe), pe = null
                }, pt.fx.speeds = {
                    slow: 600,
                    fast: 200,
                    _default: 400
                }, pt.fn.delay = function (t, e) {
                    return t = pt.fx ? pt.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function (e, i) {
                        var n = r.setTimeout(e, t);
                        i.stop = function () {
                            r.clearTimeout(n)
                        }
                    })
                },
                        function () {
                            var t = tt.createElement("input"),
                                    e = tt.createElement("select"),
                                    i = e.appendChild(tt.createElement("option"));
                            t.type = "checkbox", lt.checkOn = "" !== t.value, lt.optSelected = i.selected, e.disabled = !0, lt.optDisabled = !i.disabled, t = tt.createElement("input"), t.value = "t", t.type = "radio", lt.radioValue = "t" === t.value
                        }();
                var ue, fe = pt.expr.attrHandle;
                pt.fn.extend({
                    attr: function (t, e) {
                        return At(this, pt.attr, t, e, arguments.length > 1)
                    },
                    removeAttr: function (t) {
                        return this.each(function () {
                            pt.removeAttr(this, t)
                        })
                    }
                }), pt.extend({
                    attr: function (t, e, i) {
                        var n, s, r = t.nodeType;
                        if (3 !== r && 8 !== r && 2 !== r)
                            return "undefined" == typeof t.getAttribute ? pt.prop(t, e, i) : (1 === r && pt.isXMLDoc(t) || (e = e.toLowerCase(), s = pt.attrHooks[e] || (pt.expr.match.bool.test(e) ? ue : void 0)), void 0 !== i ? null === i ? void pt.removeAttr(t, e) : s && "set" in s && void 0 !== (n = s.set(t, i, e)) ? n : (t.setAttribute(e, i + ""), i) : s && "get" in s && null !== (n = s.get(t, e)) ? n : (n = pt.find.attr(t, e), null == n ? void 0 : n))
                    },
                    attrHooks: {
                        type: {
                            set: function (t, e) {
                                if (!lt.radioValue && "radio" === e && pt.nodeName(t, "input")) {
                                    var i = t.value;
                                    return t.setAttribute("type", e), i && (t.value = i), e
                                }
                            }
                        }
                    },
                    removeAttr: function (t, e) {
                        var i, n, s = 0,
                                r = e && e.match(kt);
                        if (r && 1 === t.nodeType)
                            for (; i = r[s++]; )
                                n = pt.propFix[i] || i, pt.expr.match.bool.test(i) && (t[n] = !1), t.removeAttribute(i)
                    }
                }), ue = {
                    set: function (t, e, i) {
                        return e === !1 ? pt.removeAttr(t, i) : t.setAttribute(i, i), i
                    }
                }, pt.each(pt.expr.match.bool.source.match(/\w+/g), function (t, e) {
                    var i = fe[e] || pt.find.attr;
                    fe[e] = function (t, e, n) {
                        var s, r;
                        return n || (r = fe[e], fe[e] = s, s = null != i(t, e, n) ? e.toLowerCase() : null, fe[e] = r), s
                    }
                });
                var me = /^(?:input|select|textarea|button)$/i,
                        ge = /^(?:a|area)$/i;
                pt.fn.extend({
                    prop: function (t, e) {
                        return At(this, pt.prop, t, e, arguments.length > 1)
                    },
                    removeProp: function (t) {
                        return this.each(function () {
                            delete this[pt.propFix[t] || t]
                        })
                    }
                }), pt.extend({
                    prop: function (t, e, i) {
                        var n, s, r = t.nodeType;
                        if (3 !== r && 8 !== r && 2 !== r)
                            return 1 === r && pt.isXMLDoc(t) || (e = pt.propFix[e] || e, s = pt.propHooks[e]), void 0 !== i ? s && "set" in s && void 0 !== (n = s.set(t, i, e)) ? n : t[e] = i : s && "get" in s && null !== (n = s.get(t, e)) ? n : t[e]
                    },
                    propHooks: {
                        tabIndex: {
                            get: function (t) {
                                var e = pt.find.attr(t, "tabindex");
                                return e ? parseInt(e, 10) : me.test(t.nodeName) || ge.test(t.nodeName) && t.href ? 0 : -1
                            }
                        }
                    },
                    propFix: {
                        "for": "htmlFor",
                        "class": "className"
                    }
                }), lt.optSelected || (pt.propHooks.selected = {
                    get: function (t) {
                        var e = t.parentNode;
                        return e && e.parentNode && e.parentNode.selectedIndex, null
                    },
                    set: function (t) {
                        var e = t.parentNode;
                        e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
                    }
                }), pt.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
                    pt.propFix[this.toLowerCase()] = this
                });
                var ve = /[\t\r\n\f]/g;
                pt.fn.extend({
                    addClass: function (t) {
                        var e, i, n, s, r, o, a, l = 0;
                        if (pt.isFunction(t))
                            return this.each(function (e) {
                                pt(this).addClass(t.call(this, e, G(this)))
                            });
                        if ("string" == typeof t && t)
                            for (e = t.match(kt) || []; i = this[l++]; )
                                if (s = G(i), n = 1 === i.nodeType && (" " + s + " ").replace(ve, " ")) {
                                    for (o = 0; r = e[o++]; )
                                        n.indexOf(" " + r + " ") < 0 && (n += r + " ");
                                    a = pt.trim(n), s !== a && i.setAttribute("class", a)
                                }
                        return this
                    },
                    removeClass: function (t) {
                        var e, i, n, s, r, o, a, l = 0;
                        if (pt.isFunction(t))
                            return this.each(function (e) {
                                pt(this).removeClass(t.call(this, e, G(this)))
                            });
                        if (!arguments.length)
                            return this.attr("class", "");
                        if ("string" == typeof t && t)
                            for (e = t.match(kt) || []; i = this[l++]; )
                                if (s = G(i), n = 1 === i.nodeType && (" " + s + " ").replace(ve, " ")) {
                                    for (o = 0; r = e[o++]; )
                                        for (; n.indexOf(" " + r + " ") > - 1; )
                                            n = n.replace(" " + r + " ", " ");
                                    a = pt.trim(n), s !== a && i.setAttribute("class", a)
                                }
                        return this
                    },
                    toggleClass: function (t, e) {
                        var n = "undefined" == typeof t ? "undefined" : i(t);
                        return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : pt.isFunction(t) ? this.each(function (i) {
                            pt(this).toggleClass(t.call(this, i, G(this), e), e)
                        }) : this.each(function () {
                            var e, i, s, r;
                            if ("string" === n)
                                for (i = 0, s = pt(this), r = t.match(kt) || []; e = r[i++]; )
                                    s.hasClass(e) ? s.removeClass(e) : s.addClass(e);
                            else
                                void 0 !== t && "boolean" !== n || (e = G(this), e && Dt.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || t === !1 ? "" : Dt.get(this, "__className__") || ""))
                        })
                    },
                    hasClass: function (t) {
                        var e, i, n = 0;
                        for (e = " " + t + " "; i = this[n++]; )
                            if (1 === i.nodeType && (" " + G(i) + " ").replace(ve, " ").indexOf(e) > -1)
                                return !0;
                        return !1
                    }
                });
                var ye = /\r/g,
                        be = /[\x20\t\r\n\f]+/g;
                pt.fn.extend({
                    val: function (t) {
                        var e, i, n, s = this[0];
                        {
                            if (arguments.length)
                                return n = pt.isFunction(t), this.each(function (i) {
                                    var s;
                                    1 === this.nodeType && (s = n ? t.call(this, i, pt(this).val()) : t, null == s ? s = "" : "number" == typeof s ? s += "" : pt.isArray(s) && (s = pt.map(s, function (t) {
                                        return null == t ? "" : t + ""
                                    })), e = pt.valHooks[this.type] || pt.valHooks[this.nodeName.toLowerCase()], e && "set" in e && void 0 !== e.set(this, s, "value") || (this.value = s))
                                });
                            if (s)
                                return e = pt.valHooks[s.type] || pt.valHooks[s.nodeName.toLowerCase()], e && "get" in e && void 0 !== (i = e.get(s, "value")) ? i : (i = s.value, "string" == typeof i ? i.replace(ye, "") : null == i ? "" : i)
                        }
                    }
                }), pt.extend({
                    valHooks: {
                        option: {
                            get: function (t) {
                                var e = pt.find.attr(t, "value");
                                return null != e ? e : pt.trim(pt.text(t)).replace(be, " ")
                            }
                        },
                        select: {
                            get: function (t) {
                                for (var e, i, n = t.options, s = t.selectedIndex, r = "select-one" === t.type || s < 0, o = r ? null : [], a = r ? s + 1 : n.length, l = s < 0 ? a : r ? s : 0; l < a; l++)
                                    if (i = n[l], (i.selected || l === s) && (lt.optDisabled ? !i.disabled : null === i.getAttribute("disabled")) && (!i.parentNode.disabled || !pt.nodeName(i.parentNode, "optgroup"))) {
                                        if (e = pt(i).val(), r)
                                            return e;
                                        o.push(e)
                                    }
                                return o
                            },
                            set: function (t, e) {
                                for (var i, n, s = t.options, r = pt.makeArray(e), o = s.length; o--; )
                                    n = s[o], (n.selected = pt.inArray(pt.valHooks.option.get(n), r) > -1) && (i = !0);
                                return i || (t.selectedIndex = -1), r
                            }
                        }
                    }
                }), pt.each(["radio", "checkbox"], function () {
                    pt.valHooks[this] = {
                        set: function (t, e) {
                            if (pt.isArray(e))
                                return t.checked = pt.inArray(pt(t).val(), e) > -1
                        }
                    }, lt.checkOn || (pt.valHooks[this].get = function (t) {
                        return null === t.getAttribute("value") ? "on" : t.value
                    })
                });
                var we = /^(?:focusinfocus|focusoutblur)$/;
                pt.extend(pt.event, {
                    trigger: function (t, e, n, s) {
                        var o, a, l, c, p, d, h, u = [n || tt],
                                f = at.call(t, "type") ? t.type : t,
                                m = at.call(t, "namespace") ? t.namespace.split(".") : [];
                        if (a = l = n = n || tt, 3 !== n.nodeType && 8 !== n.nodeType && !we.test(f + pt.event.triggered) && (f.indexOf(".") > -1 && (m = f.split("."), f = m.shift(), m.sort()), p = f.indexOf(":") < 0 && "on" + f, t = t[pt.expando] ? t : new pt.Event(f, "object" === ("undefined" == typeof t ? "undefined" : i(t)) && t), t.isTrigger = s ? 2 : 3, t.namespace = m.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = n), e = null == e ? [t] : pt.makeArray(e, [t]), h = pt.event.special[f] || {}, s || !h.trigger || h.trigger.apply(n, e) !== !1)) {
                            if (!s && !h.noBubble && !pt.isWindow(n)) {
                                for (c = h.delegateType || f, we.test(c + f) || (a = a.parentNode); a; a = a.parentNode)
                                    u.push(a), l = a;
                                l === (n.ownerDocument || tt) && u.push(l.defaultView || l.parentWindow || r)
                            }
                            for (o = 0;
                                    (a = u[o++]) && !t.isPropagationStopped(); )
                                t.type = o > 1 ? c : h.bindType || f, d = (Dt.get(a, "events") || {})[t.type] && Dt.get(a, "handle"), d && d.apply(a, e), d = p && a[p], d && d.apply && $t(a) && (t.result = d.apply(a, e), t.result === !1 && t.preventDefault());
                            return t.type = f, s || t.isDefaultPrevented() || h._default && h._default.apply(u.pop(), e) !== !1 || !$t(n) || p && pt.isFunction(n[f]) && !pt.isWindow(n) && (l = n[p], l && (n[p] = null), pt.event.triggered = f, n[f](), pt.event.triggered = void 0, l && (n[p] = l)), t.result
                        }
                    },
                    simulate: function (t, e, i) {
                        var n = pt.extend(new pt.Event, i, {
                            type: t,
                            isSimulated: !0
                        });
                        pt.event.trigger(n, null, e)
                    }
                }), pt.fn.extend({
                    trigger: function (t, e) {
                        return this.each(function () {
                            pt.event.trigger(t, e, this)
                        })
                    },
                    triggerHandler: function (t, e) {
                        var i = this[0];
                        if (i)
                            return pt.event.trigger(t, e, i, !0)
                    }
                }), pt.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (t, e) {
                    pt.fn[e] = function (t, i) {
                        return arguments.length > 0 ? this.on(e, null, t, i) : this.trigger(e)
                    }
                }), pt.fn.extend({
                    hover: function (t, e) {
                        return this.mouseenter(t).mouseleave(e || t)
                    }
                }), lt.focusin = "onfocusin" in r, lt.focusin || pt.each({
                    focus: "focusin",
                    blur: "focusout"
                }, function (t, e) {
                    var i = function (t) {
                        pt.event.simulate(e, t.target, pt.event.fix(t))
                    };
                    pt.event.special[e] = {
                        setup: function () {
                            var n = this.ownerDocument || this,
                                    s = Dt.access(n, e);
                            s || n.addEventListener(t, i, !0), Dt.access(n, e, (s || 0) + 1)
                        },
                        teardown: function () {
                            var n = this.ownerDocument || this,
                                    s = Dt.access(n, e) - 1;
                            s ? Dt.access(n, e, s) : (n.removeEventListener(t, i, !0), Dt.remove(n, e))
                        }
                    }
                });
                var xe = r.location,
                        _e = pt.now(),
                        Te = /\?/;
                pt.parseJSON = function (t) {
                    return JSON.parse(t + "")
                }, pt.parseXML = function (t) {
                    var e;
                    if (!t || "string" != typeof t)
                        return null;
                    try {
                        e = (new r.DOMParser).parseFromString(t, "text/xml")
                    } catch (i) {
                        e = void 0
                    }
                    return e && !e.getElementsByTagName("parsererror").length || pt.error("Invalid XML: " + t), e
                };
                var Se = /#.*$/,
                        Ce = /([?&])_=[^&]*/,
                        ke = /^(.*?):[ \t]*([^\r\n]*)$/gm,
                        Ee = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
                        Ae = /^(?:GET|HEAD)$/,
                        $e = /^\/\//,
                        De = {},
                        Pe = {},
                        Me = "*/".concat("*"),
                        Ie = tt.createElement("a");
                Ie.href = xe.href, pt.extend({
                    active: 0,
                    lastModified: {},
                    etag: {},
                    ajaxSettings: {
                        url: xe.href,
                        type: "GET",
                        isLocal: Ee.test(xe.protocol),
                        global: !0,
                        processData: !0,
                        async: !0,
                        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                        accepts: {
                            "*": Me,
                            text: "text/plain",
                            html: "text/html",
                            xml: "application/xml, text/xml",
                            json: "application/json, text/javascript"
                        },
                        contents: {
                            xml: /\bxml\b/,
                            html: /\bhtml/,
                            json: /\bjson\b/
                        },
                        responseFields: {
                            xml: "responseXML",
                            text: "responseText",
                            json: "responseJSON"
                        },
                        converters: {
                            "* text": String,
                            "text html": !0,
                            "text json": pt.parseJSON,
                            "text xml": pt.parseXML
                        },
                        flatOptions: {
                            url: !0,
                            context: !0
                        }
                    },
                    ajaxSetup: function (t, e) {
                        return e ? X(X(t, pt.ajaxSettings), e) : X(pt.ajaxSettings, t)
                    },
                    ajaxPrefilter: V(De),
                    ajaxTransport: V(Pe),
                    ajax: function (t, e) {
                        function n(t, e, i, n) {
                            var l, p, h, b, w, _ = e;
                            2 !== x && (x = 2, c && r.clearTimeout(c), s = void 0, a = n || "", T.readyState = t > 0 ? 4 : 0, l = t >= 200 && t < 300 || 304 === t, i && (b = Y(u, T, i)), b = K(u, b, T, l), l ? (u.ifModified && (w = T.getResponseHeader("Last-Modified"), w && (pt.lastModified[o] = w), w = T.getResponseHeader("etag"), w && (pt.etag[o] = w)), 204 === t || "HEAD" === u.type ? _ = "nocontent" : 304 === t ? _ = "notmodified" : (_ = b.state, p = b.data, h = b.error, l = !h)) : (h = _, !t && _ || (_ = "error", t < 0 && (t = 0))), T.status = t, T.statusText = (e || _) + "", l ? g.resolveWith(f, [p, _, T]) : g.rejectWith(f, [T, _, h]), T.statusCode(y), y = void 0, d && m.trigger(l ? "ajaxSuccess" : "ajaxError", [T, u, l ? p : h]), v.fireWith(f, [T, _]), d && (m.trigger("ajaxComplete", [T, u]), --pt.active || pt.event.trigger("ajaxStop")))
                        }
                        "object" === ("undefined" == typeof t ? "undefined" : i(t)) && (e = t, t = void 0), e = e || {};
                        var s, o, a, l, c, p, d, h, u = pt.ajaxSetup({}, e),
                                f = u.context || u,
                                m = u.context && (f.nodeType || f.jquery) ? pt(f) : pt.event,
                                g = pt.Deferred(),
                                v = pt.Callbacks("once memory"),
                                y = u.statusCode || {},
                                b = {},
                                w = {},
                                x = 0,
                                _ = "canceled",
                                T = {
                                    readyState: 0,
                                    getResponseHeader: function (t) {
                                        var e;
                                        if (2 === x) {
                                            if (!l)
                                                for (l = {}; e = ke.exec(a); )
                                                    l[e[1].toLowerCase()] = e[2];
                                            e = l[t.toLowerCase()]
                                        }
                                        return null == e ? null : e
                                    },
                                    getAllResponseHeaders: function () {
                                        return 2 === x ? a : null
                                    },
                                    setRequestHeader: function (t, e) {
                                        var i = t.toLowerCase();
                                        return x || (t = w[i] = w[i] || t, b[t] = e), this
                                    },
                                    overrideMimeType: function (t) {
                                        return x || (u.mimeType = t), this
                                    },
                                    statusCode: function (t) {
                                        var e;
                                        if (t)
                                            if (x < 2)
                                                for (e in t)
                                                    y[e] = [y[e], t[e]];
                                            else
                                                T.always(t[T.status]);
                                        return this
                                    },
                                    abort: function (t) {
                                        var e = t || _;
                                        return s && s.abort(e), n(0, e), this
                                    }
                                };
                        if (g.promise(T).complete = v.add, T.success = T.done, T.error = T.fail, u.url = ((t || u.url || xe.href) + "").replace(Se, "").replace($e, xe.protocol + "//"), u.type = e.method || e.type || u.method || u.type, u.dataTypes = pt.trim(u.dataType || "*").toLowerCase().match(kt) || [""], null == u.crossDomain) {
                            p = tt.createElement("a");
                            try {
                                p.href = u.url, p.href = p.href, u.crossDomain = Ie.protocol + "//" + Ie.host != p.protocol + "//" + p.host
                            } catch (S) {
                                u.crossDomain = !0
                            }
                        }
                        if (u.data && u.processData && "string" != typeof u.data && (u.data = pt.param(u.data, u.traditional)), U(De, u, e, T), 2 === x)
                            return T;
                        d = pt.event && u.global, d && 0 === pt.active++ && pt.event.trigger("ajaxStart"), u.type = u.type.toUpperCase(), u.hasContent = !Ae.test(u.type), o = u.url, u.hasContent || (u.data && (o = u.url += (Te.test(o) ? "&" : "?") + u.data, delete u.data), u.cache === !1 && (u.url = Ce.test(o) ? o.replace(Ce, "$1_=" + _e++) : o + (Te.test(o) ? "&" : "?") + "_=" + _e++)), u.ifModified && (pt.lastModified[o] && T.setRequestHeader("If-Modified-Since", pt.lastModified[o]), pt.etag[o] && T.setRequestHeader("If-None-Match", pt.etag[o])), (u.data && u.hasContent && u.contentType !== !1 || e.contentType) && T.setRequestHeader("Content-Type", u.contentType), T.setRequestHeader("Accept", u.dataTypes[0] && u.accepts[u.dataTypes[0]] ? u.accepts[u.dataTypes[0]] + ("*" !== u.dataTypes[0] ? ", " + Me + "; q=0.01" : "") : u.accepts["*"]);
                        for (h in u.headers)
                            T.setRequestHeader(h, u.headers[h]);
                        if (u.beforeSend && (u.beforeSend.call(f, T, u) === !1 || 2 === x))
                            return T.abort();
                        _ = "abort";
                        for (h in {
                        success: 1,
                                error: 1,
                                complete: 1
                        })
                            T[h](u[h]);
                        if (s = U(Pe, u, e, T)) {
                            if (T.readyState = 1, d && m.trigger("ajaxSend", [T, u]), 2 === x)
                                return T;
                            u.async && u.timeout > 0 && (c = r.setTimeout(function () {
                                T.abort("timeout")
                            }, u.timeout));
                            try {
                                x = 1, s.send(b, n)
                            } catch (S) {
                                if (!(x < 2))
                                    throw S;
                                n(-1, S)
                            }
                        } else
                            n(-1, "No Transport");
                        return T
                    },
                    getJSON: function (t, e, i) {
                        return pt.get(t, e, i, "json")
                    },
                    getScript: function (t, e) {
                        return pt.get(t, void 0, e, "script")
                    }
                }), pt.each(["get", "post"], function (t, e) {
                    pt[e] = function (t, i, n, s) {
                        return pt.isFunction(i) && (s = s || n, n = i, i = void 0), pt.ajax(pt.extend({
                            url: t,
                            type: e,
                            dataType: s,
                            data: i,
                            success: n
                        }, pt.isPlainObject(t) && t))
                    }
                }), pt._evalUrl = function (t) {
                    return pt.ajax({
                        url: t,
                        type: "GET",
                        dataType: "script",
                        async: !1,
                        global: !1,
                        "throws": !0
                    })
                }, pt.fn.extend({
                    wrapAll: function (t) {
                        var e;
                        return pt.isFunction(t) ? this.each(function (e) {
                            pt(this).wrapAll(t.call(this, e))
                        }) : (this[0] && (e = pt(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
                            for (var t = this; t.firstElementChild; )
                                t = t.firstElementChild;
                            return t
                        }).append(this)), this)
                    },
                    wrapInner: function (t) {
                        return pt.isFunction(t) ? this.each(function (e) {
                            pt(this).wrapInner(t.call(this, e))
                        }) : this.each(function () {
                            var e = pt(this),
                                    i = e.contents();
                            i.length ? i.wrapAll(t) : e.append(t)
                        })
                    },
                    wrap: function (t) {
                        var e = pt.isFunction(t);
                        return this.each(function (i) {
                            pt(this).wrapAll(e ? t.call(this, i) : t)
                        })
                    },
                    unwrap: function () {
                        return this.parent().each(function () {
                            pt.nodeName(this, "body") || pt(this).replaceWith(this.childNodes)
                        }).end()
                    }
                }), pt.expr.filters.hidden = function (t) {
                    return !pt.expr.filters.visible(t)
                }, pt.expr.filters.visible = function (t) {
                    return t.offsetWidth > 0 || t.offsetHeight > 0 || t.getClientRects().length > 0
                };
                var Ne = /%20/g,
                        Le = /\[\]$/,
                        ze = /\r?\n/g,
                        Oe = /^(?:submit|button|image|reset|file)$/i,
                        He = /^(?:input|select|textarea|keygen)/i;
                pt.param = function (t, e) {
                    var i, n = [],
                            s = function (t, e) {
                                e = pt.isFunction(e) ? e() : null == e ? "" : e, n[n.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
                            };
                    if (void 0 === e && (e = pt.ajaxSettings && pt.ajaxSettings.traditional), pt.isArray(t) || t.jquery && !pt.isPlainObject(t))
                        pt.each(t, function () {
                            s(this.name, this.value)
                        });
                    else
                        for (i in t)
                            Q(i, t[i], e, s);
                    return n.join("&").replace(Ne, "+")
                }, pt.fn.extend({
                    serialize: function () {
                        return pt.param(this.serializeArray())
                    },
                    serializeArray: function () {
                        return this.map(function () {
                            var t = pt.prop(this, "elements");
                            return t ? pt.makeArray(t) : this
                        }).filter(function () {
                            var t = this.type;
                            return this.name && !pt(this).is(":disabled") && He.test(this.nodeName) && !Oe.test(t) && (this.checked || !Ht.test(t))
                        }).map(function (t, e) {
                            var i = pt(this).val();
                            return null == i ? null : pt.isArray(i) ? pt.map(i, function (t) {
                                return {
                                    name: e.name,
                                    value: t.replace(ze, "\r\n")
                                }
                            }) : {
                                name: e.name,
                                value: i.replace(ze, "\r\n")
                            }
                        }).get()
                    }
                }), pt.ajaxSettings.xhr = function () {
                    try {
                        return new r.XMLHttpRequest
                    } catch (t) {
                    }
                };
                var Fe = {
                    0: 200,
                    1223: 204
                },
                        Re = pt.ajaxSettings.xhr();
                lt.cors = !!Re && "withCredentials" in Re, lt.ajax = Re = !!Re, pt.ajaxTransport(function (t) {
                    var e, i;
                    if (lt.cors || Re && !t.crossDomain)
                        return {
                            send: function (n, s) {
                                var o, a = t.xhr();
                                if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                                    for (o in t.xhrFields)
                                        a[o] = t.xhrFields[o];
                                t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                                for (o in n)
                                    a.setRequestHeader(o, n[o]);
                                e = function (t) {
                                    return function () {
                                        e && (e = i = a.onload = a.onerror = a.onabort = a.onreadystatechange = null, "abort" === t ? a.abort() : "error" === t ? "number" != typeof a.status ? s(0, "error") : s(a.status, a.statusText) : s(Fe[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                                            binary: a.response
                                        } : {
                                            text: a.responseText
                                        }, a.getAllResponseHeaders()))
                                    }
                                }, a.onload = e(), i = a.onerror = e("error"), void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function () {
                                    4 === a.readyState && r.setTimeout(function () {
                                        e && i()
                                    })
                                }, e = e("abort");
                                try {
                                    a.send(t.hasContent && t.data || null)
                                } catch (l) {
                                    if (e)
                                        throw l
                                }
                            },
                            abort: function () {
                                e && e()
                            }
                        }
                }), pt.ajaxSetup({
                    accepts: {
                        script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                    },
                    contents: {
                        script: /\b(?:java|ecma)script\b/
                    },
                    converters: {
                        "text script": function (t) {
                            return pt.globalEval(t), t
                        }
                    }
                }), pt.ajaxPrefilter("script", function (t) {
                    void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
                }), pt.ajaxTransport("script", function (t) {
                    if (t.crossDomain) {
                        var e, i;
                        return {
                            send: function (n, s) {
                                e = pt("<script>").prop({
                                    charset: t.scriptCharset,
                                    src: t.url
                                }).on("load error", i = function (t) {
                                    e.remove(), i = null, t && s("error" === t.type ? 404 : 200, t.type)
                                }), tt.head.appendChild(e[0])
                            },
                            abort: function () {
                                i && i()
                            }
                        }
                    }
                });
                var Be = [],
                        je = /(=)\?(?=&|$)|\?\?/;
                pt.ajaxSetup({
                    jsonp: "callback",
                    jsonpCallback: function () {
                        var t = Be.pop() || pt.expando + "_" + _e++;
                        return this[t] = !0, t
                    }
                }), pt.ajaxPrefilter("json jsonp", function (t, e, i) {
                    var n, s, o, a = t.jsonp !== !1 && (je.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && je.test(t.data) && "data");
                    if (a || "jsonp" === t.dataTypes[0])
                        return n = t.jsonpCallback = pt.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(je, "$1" + n) : t.jsonp !== !1 && (t.url += (Te.test(t.url) ? "&" : "?") + t.jsonp + "=" + n), t.converters["script json"] = function () {
                            return o || pt.error(n + " was not called"), o[0]
                        }, t.dataTypes[0] = "json", s = r[n], r[n] = function () {
                            o = arguments
                        }, i.always(function () {
                            void 0 === s ? pt(r).removeProp(n) : r[n] = s, t[n] && (t.jsonpCallback = e.jsonpCallback, Be.push(n)), o && pt.isFunction(s) && s(o[0]), o = s = void 0
                        }), "script"
                }), pt.parseHTML = function (t, e, i) {
                    if (!t || "string" != typeof t)
                        return null;
                    "boolean" == typeof e && (i = e, e = !1), e = e || tt;
                    var n = bt.exec(t),
                            s = !i && [];
                    return n ? [e.createElement(n[1])] : (n = v([t], e, s), s && s.length && pt(s).remove(), pt.merge([], n.childNodes))
                };
                var qe = pt.fn.load;
                pt.fn.load = function (t, e, n) {
                    if ("string" != typeof t && qe)
                        return qe.apply(this, arguments);
                    var s, r, o, a = this,
                            l = t.indexOf(" ");
                    return l > -1 && (s = pt.trim(t.slice(l)), t = t.slice(0, l)), pt.isFunction(e) ? (n = e, e = void 0) : e && "object" === ("undefined" == typeof e ? "undefined" : i(e)) && (r = "POST"), a.length > 0 && pt.ajax({
                        url: t,
                        type: r || "GET",
                        dataType: "html",
                        data: e
                    }).done(function (t) {
                        o = arguments, a.html(s ? pt("<div>").append(pt.parseHTML(t)).find(s) : t)
                    }).always(n && function (t, e) {
                        a.each(function () {
                            n.apply(this, o || [t.responseText, e, t])
                        })
                    }), this
                }, pt.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) {
                    pt.fn[e] = function (t) {
                        return this.on(e, t)
                    }
                }), pt.expr.filters.animated = function (t) {
                    return pt.grep(pt.timers, function (e) {
                        return t === e.elem
                    }).length
                }, pt.offset = {
                    setOffset: function (t, e, i) {
                        var n, s, r, o, a, l, c, p = pt.css(t, "position"),
                                d = pt(t),
                                h = {};
                        "static" === p && (t.style.position = "relative"), a = d.offset(), r = pt.css(t, "top"), l = pt.css(t, "left"), c = ("absolute" === p || "fixed" === p) && (r + l).indexOf("auto") > -1, c ? (n = d.position(), o = n.top, s = n.left) : (o = parseFloat(r) || 0, s = parseFloat(l) || 0), pt.isFunction(e) && (e = e.call(t, i, pt.extend({}, a))), null != e.top && (h.top = e.top - a.top + o), null != e.left && (h.left = e.left - a.left + s), "using" in e ? e.using.call(t, h) : d.css(h)
                    }
                }, pt.fn.extend({
                    offset: function (t) {
                        if (arguments.length)
                            return void 0 === t ? this : this.each(function (e) {
                                pt.offset.setOffset(this, t, e)
                            });
                        var e, i, n = this[0],
                                s = {
                                    top: 0,
                                    left: 0
                                },
                                r = n && n.ownerDocument;
                        if (r)
                            return e = r.documentElement, pt.contains(e, n) ? (s = n.getBoundingClientRect(), i = J(r), {
                                top: s.top + i.pageYOffset - e.clientTop,
                                left: s.left + i.pageXOffset - e.clientLeft
                            }) : s
                    },
                    position: function () {
                        if (this[0]) {
                            var t, e, i = this[0],
                                    n = {
                                        top: 0,
                                        left: 0
                                    };
                            return "fixed" === pt.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), pt.nodeName(t[0], "html") || (n = t.offset()), n.top += pt.css(t[0], "borderTopWidth", !0), n.left += pt.css(t[0], "borderLeftWidth", !0)), {
                                top: e.top - n.top - pt.css(i, "marginTop", !0),
                                left: e.left - n.left - pt.css(i, "marginLeft", !0)
                            }
                        }
                    },
                    offsetParent: function () {
                        return this.map(function () {
                            for (var t = this.offsetParent; t && "static" === pt.css(t, "position"); )
                                t = t.offsetParent;
                            return t || ne
                        })
                    }
                }), pt.each({
                    scrollLeft: "pageXOffset",
                    scrollTop: "pageYOffset"
                }, function (t, e) {
                    var i = "pageYOffset" === e;
                    pt.fn[t] = function (n) {
                        return At(this, function (t, n, s) {
                            var r = J(t);
                            return void 0 === s ? r ? r[e] : t[n] : void(r ? r.scrollTo(i ? r.pageXOffset : s, i ? s : r.pageYOffset) : t[n] = s)
                        }, t, n, arguments.length)
                    }
                }), pt.each(["top", "left"], function (t, e) {
                    pt.cssHooks[e] = M(lt.pixelPosition, function (t, i) {
                        if (i)
                            return i = P(t, e), te.test(i) ? pt(t).position()[e] + "px" : i
                    })
                }), pt.each({
                    Height: "height",
                    Width: "width"
                }, function (t, e) {
                    pt.each({
                        padding: "inner" + t,
                        content: e,
                        "": "outer" + t
                    }, function (i, n) {
                        pt.fn[n] = function (n, s) {
                            var r = arguments.length && (i || "boolean" != typeof n),
                                    o = i || (n === !0 || s === !0 ? "margin" : "border");
                            return At(this, function (e, i, n) {
                                var s;
                                return pt.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (s = e.documentElement, Math.max(e.body["scroll" + t], s["scroll" + t], e.body["offset" + t], s["offset" + t], s["client" + t])) : void 0 === n ? pt.css(e, i, o) : pt.style(e, i, n, o)
                            }, e, r ? n : void 0, r, null)
                        }
                    })
                }), pt.fn.extend({
                    bind: function (t, e, i) {
                        return this.on(t, null, e, i)
                    },
                    unbind: function (t, e) {
                        return this.off(t, null, e)
                    },
                    delegate: function (t, e, i, n) {
                        return this.on(e, t, i, n)
                    },
                    undelegate: function (t, e, i) {
                        return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i)
                    },
                    size: function () {
                        return this.length
                    }
                }), pt.fn.andSelf = pt.fn.addBack, n = [], s = function () {
                    return pt
                }.apply(e, n), !(void 0 !== s && (t.exports = s));
                var We = r.jQuery,
                        Ge = r.$;
                return pt.noConflict = function (t) {
                    return r.$ === pt && (r.$ = Ge), t && r.jQuery === pt && (r.jQuery = We), pt
                }, o || (r.jQuery = r.$ = pt), pt
            })
        }).call(e, i(2)(t))
    }, function (t, e) {
        "use strict";
        t.exports = function (t) {
            return t.webpackPolyfill || (t.deprecate = function () {}, t.paths = [], t.children = [], t.webpackPolyfill = 1), t
        }
    }, function (t, e, i) {
        "use strict";
        i(4), i(5), i(6), i(7), i(8), i(9), i(10), i(11), i(12), i(13), i(14), i(15)
    }, function (t, e, i) {
        (function (t) {
            "use strict";
            +function (t) {
                function e() {
                    var t = document.createElement("bootstrap"),
                            e = {
                                WebkitTransition: "webkitTransitionEnd",
                                MozTransition: "transitionend",
                                OTransition: "oTransitionEnd otransitionend",
                                transition: "transitionend"
                            };
                    for (var i in e)
                        if (void 0 !== t.style[i])
                            return {
                                end: e[i]
                            };
                    return !1
                }
                t.fn.emulateTransitionEnd = function (e) {
                    var i = !1,
                            n = this;
                    t(this).one("bsTransitionEnd", function () {
                        i = !0
                    });
                    var s = function () {
                        i || t(n).trigger(t.support.transition.end)
                    };
                    return setTimeout(s, e), this
                }, t(function () {
                    t.support.transition = e(), t.support.transition && (t.event.special.bsTransitionEnd = {
                        bindType: t.support.transition.end,
                        delegateType: t.support.transition.end,
                        handle: function (e) {
                            if (t(e.target).is(this))
                                return e.handleObj.handler.apply(this, arguments)
                        }
                    })
                })
            }(t)
        }).call(e, i(1))
    }, function (t, e, i) {
        (function (t) {
            "use strict";
            +function (t) {
                function e(e) {
                    return this.each(function () {
                        var i = t(this),
                                s = i.data("bs.alert");
                        s || i.data("bs.alert", s = new n(this)), "string" == typeof e && s[e].call(i)
                    })
                }
                var i = '[data-dismiss="alert"]',
                        n = function (e) {
                            t(e).on("click", i, this.close)
                        };
                n.VERSION = "3.3.6", n.TRANSITION_DURATION = 150, n.prototype.close = function (e) {
                    function i() {
                        o.detach().trigger("closed.bs.alert").remove()
                    }
                    var s = t(this),
                            r = s.attr("data-target");
                    r || (r = s.attr("href"), r = r && r.replace(/.*(?=#[^\s]*$)/, ""));
                    var o = t(r);
                    e && e.preventDefault(), o.length || (o = s.closest(".alert")), o.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (o.removeClass("in"), t.support.transition && o.hasClass("fade") ? o.one("bsTransitionEnd", i).emulateTransitionEnd(n.TRANSITION_DURATION) : i())
                };
                var s = t.fn.alert;
                t.fn.alert = e, t.fn.alert.Constructor = n, t.fn.alert.noConflict = function () {
                    return t.fn.alert = s, this
                }, t(document).on("click.bs.alert.data-api", i, n.prototype.close)
            }(t)
        }).call(e, i(1))
    }, function (t, e, i) {
        (function (t) {
            "use strict";
            var e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
            };
            +function (t) {
                function i(i) {
                    return this.each(function () {
                        var s = t(this),
                                r = s.data("bs.button"),
                                o = "object" == ("undefined" == typeof i ? "undefined" : e(i)) && i;
                        r || s.data("bs.button", r = new n(this, o)), "toggle" == i ? r.toggle() : i && r.setState(i)
                    })
                }
                var n = function r(e, i) {
                    this.$element = t(e), this.options = t.extend({}, r.DEFAULTS, i), this.isLoading = !1
                };
                n.VERSION = "3.3.6", n.DEFAULTS = {
                    loadingText: "loading..."
                }, n.prototype.setState = function (e) {
                    var i = "disabled",
                            n = this.$element,
                            s = n.is("input") ? "val" : "html",
                            r = n.data();
                    e += "Text", null == r.resetText && n.data("resetText", n[s]()), setTimeout(t.proxy(function () {
                        n[s](null == r[e] ? this.options[e] : r[e]), "loadingText" == e ? (this.isLoading = !0, n.addClass(i).attr(i, i)) : this.isLoading && (this.isLoading = !1, n.removeClass(i).removeAttr(i))
                    }, this), 0)
                }, n.prototype.toggle = function () {
                    var t = !0,
                            e = this.$element.closest('[data-toggle="buttons"]');
                    if (e.length) {
                        var i = this.$element.find("input");
                        "radio" == i.prop("type") ? (i.prop("checked") && (t = !1), e.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == i.prop("type") && (i.prop("checked") !== this.$element.hasClass("active") && (t = !1), this.$element.toggleClass("active")), i.prop("checked", this.$element.hasClass("active")), t && i.trigger("change")
                    } else
                        this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
                };
                var s = t.fn.button;
                t.fn.button = i, t.fn.button.Constructor = n, t.fn.button.noConflict = function () {
                    return t.fn.button = s, this
                }, t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (e) {
                    var n = t(e.target);
                    n.hasClass("btn") || (n = n.closest(".btn")), i.call(n, "toggle"), t(e.target).is('input[type="radio"]') || t(e.target).is('input[type="checkbox"]') || e.preventDefault()
                }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (e) {
                    t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type))
                })
            }(t)
        }).call(e, i(1))
    }, function (t, e, i) {
        (function (t) {
            "use strict";
            var e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
            };
            +function (t) {
                function i(i) {
                    return this.each(function () {
                        var s = t(this),
                                r = s.data("bs.carousel"),
                                o = t.extend({}, n.DEFAULTS, s.data(), "object" == ("undefined" == typeof i ? "undefined" : e(i)) && i),
                                a = "string" == typeof i ? i : o.slide;
                        r || s.data("bs.carousel", r = new n(this, o)), "number" == typeof i ? r.to(i) : a ? r[a]() : o.interval && r.pause().cycle()
                    })
                }
                var n = function (e, i) {
                    this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = i, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this))
                };
                n.VERSION = "3.3.6", n.TRANSITION_DURATION = 600, n.DEFAULTS = {
                    interval: 5e3,
                    pause: "hover",
                    wrap: !0,
                    keyboard: !0
                }, n.prototype.keydown = function (t) {
                    if (!/input|textarea/i.test(t.target.tagName)) {
                        switch (t.which) {
                            case 37:
                                this.prev();
                                break;
                            case 39:
                                this.next();
                                break;
                            default:
                                return
                        }
                        t.preventDefault()
                    }
                }, n.prototype.cycle = function (e) {
                    return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
                }, n.prototype.getItemIndex = function (t) {
                    return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
                }, n.prototype.getItemForDirection = function (t, e) {
                    var i = this.getItemIndex(e),
                            n = "prev" == t && 0 === i || "next" == t && i == this.$items.length - 1;
                    if (n && !this.options.wrap)
                        return e;
                    var s = "prev" == t ? -1 : 1,
                            r = (i + s) % this.$items.length;
                    return this.$items.eq(r)
                }, n.prototype.to = function (t) {
                    var e = this,
                            i = this.getItemIndex(this.$active = this.$element.find(".item.active"));
                    if (!(t > this.$items.length - 1 || t < 0))
                        return this.sliding ? this.$element.one("slid.bs.carousel", function () {
                            e.to(t)
                        }) : i == t ? this.pause().cycle() : this.slide(t > i ? "next" : "prev", this.$items.eq(t))
                }, n.prototype.pause = function (e) {
                    return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
                }, n.prototype.next = function () {
                    if (!this.sliding)
                        return this.slide("next")
                }, n.prototype.prev = function () {
                    if (!this.sliding)
                        return this.slide("prev")
                }, n.prototype.slide = function (e, i) {
                    var s = this.$element.find(".item.active"),
                            r = i || this.getItemForDirection(e, s),
                            o = this.interval,
                            a = "next" == e ? "left" : "right",
                            l = this;
                    if (r.hasClass("active"))
                        return this.sliding = !1;
                    var c = r[0],
                            p = t.Event("slide.bs.carousel", {
                                relatedTarget: c,
                                direction: a
                            });
                    if (this.$element.trigger(p), !p.isDefaultPrevented()) {
                        if (this.sliding = !0, o && this.pause(), this.$indicators.length) {
                            this.$indicators.find(".active").removeClass("active");
                            var d = t(this.$indicators.children()[this.getItemIndex(r)]);
                            d && d.addClass("active")
                        }
                        var h = t.Event("slid.bs.carousel", {
                            relatedTarget: c,
                            direction: a
                        });
                        return t.support.transition && this.$element.hasClass("slide") ? (r.addClass(e), r[0].offsetWidth, s.addClass(a), r.addClass(a), s.one("bsTransitionEnd", function () {
                            r.removeClass([e, a].join(" ")).addClass("active"), s.removeClass(["active", a].join(" ")), l.sliding = !1, setTimeout(function () {
                                l.$element.trigger(h)
                            }, 0)
                        }).emulateTransitionEnd(n.TRANSITION_DURATION)) : (s.removeClass("active"), r.addClass("active"), this.sliding = !1, this.$element.trigger(h)), o && this.cycle(), this
                    }
                };
                var s = t.fn.carousel;
                t.fn.carousel = i, t.fn.carousel.Constructor = n, t.fn.carousel.noConflict = function () {
                    return t.fn.carousel = s, this
                };
                var r = function (e) {
                    var n, s = t(this),
                            r = t(s.attr("data-target") || (n = s.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, ""));
                    if (r.hasClass("carousel")) {
                        var o = t.extend({}, r.data(), s.data()),
                                a = s.attr("data-slide-to");
                        a && (o.interval = !1), i.call(r, o), a && r.data("bs.carousel").to(a), e.preventDefault()
                    }
                };
                t(document).on("click.bs.carousel.data-api", "[data-slide]", r).on("click.bs.carousel.data-api", "[data-slide-to]", r), t(window).on("load", function () {
                    t('[data-ride="carousel"]').each(function () {
                        var e = t(this);
                        i.call(e, e.data())
                    })
                })
            }(t)
        }).call(e, i(1))
    }, function (t, e, i) {
        (function (t) {
            "use strict";
            var e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
            };
            +function (t) {
                function i(e) {
                    var i, n = e.attr("data-target") || (i = e.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "");
                    return t(n)
                }

                function n(i) {
                    return this.each(function () {
                        var n = t(this),
                                r = n.data("bs.collapse"),
                                o = t.extend({}, s.DEFAULTS, n.data(), "object" == ("undefined" == typeof i ? "undefined" : e(i)) && i);
                        !r && o.toggle && /show|hide/.test(i) && (o.toggle = !1), r || n.data("bs.collapse", r = new s(this, o)), "string" == typeof i && r[i]()
                    })
                }
                var s = function o(e, i) {
                    this.$element = t(e), this.options = t.extend({}, o.DEFAULTS, i), this.$trigger = t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
                };
                s.VERSION = "3.3.6", s.TRANSITION_DURATION = 350, s.DEFAULTS = {
                    toggle: !0
                }, s.prototype.dimension = function () {
                    var t = this.$element.hasClass("width");
                    return t ? "width" : "height"
                }, s.prototype.show = function () {
                    if (!this.transitioning && !this.$element.hasClass("in")) {
                        var e, i = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
                        if (!(i && i.length && (e = i.data("bs.collapse"), e && e.transitioning))) {
                            var r = t.Event("show.bs.collapse");
                            if (this.$element.trigger(r), !r.isDefaultPrevented()) {
                                i && i.length && (n.call(i, "hide"), e || i.data("bs.collapse", null));
                                var o = this.dimension();
                                this.$element.removeClass("collapse").addClass("collapsing")[o](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                                var a = function () {
                                    this.$element.removeClass("collapsing").addClass("collapse in")[o](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                                };
                                if (!t.support.transition)
                                    return a.call(this);
                                var l = t.camelCase(["scroll", o].join("-"));
                                this.$element.one("bsTransitionEnd", t.proxy(a, this)).emulateTransitionEnd(s.TRANSITION_DURATION)[o](this.$element[0][l])
                            }
                        }
                    }
                }, s.prototype.hide = function () {
                    if (!this.transitioning && this.$element.hasClass("in")) {
                        var e = t.Event("hide.bs.collapse");
                        if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                            var i = this.dimension();
                            this.$element[i](this.$element[i]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                            var n = function () {
                                this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                            };
                            return t.support.transition ? void this.$element[i](0).one("bsTransitionEnd", t.proxy(n, this)).emulateTransitionEnd(s.TRANSITION_DURATION) : n.call(this)
                        }
                    }
                }, s.prototype.toggle = function () {
                    this[this.$element.hasClass("in") ? "hide" : "show"]()
                }, s.prototype.getParent = function () {
                    return t(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function (e, n) {
                        var s = t(n);
                        this.addAriaAndCollapsedClass(i(s), s)
                    }, this)).end()
                }, s.prototype.addAriaAndCollapsedClass = function (t, e) {
                    var i = t.hasClass("in");
                    t.attr("aria-expanded", i), e.toggleClass("collapsed", !i).attr("aria-expanded", i)
                };
                var r = t.fn.collapse;
                t.fn.collapse = n, t.fn.collapse.Constructor = s, t.fn.collapse.noConflict = function () {
                    return t.fn.collapse = r, this
                }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (e) {
                    var s = t(this);
                    s.attr("data-target") || e.preventDefault();
                    var r = i(s),
                            o = r.data("bs.collapse"),
                            a = o ? "toggle" : s.data();
                    n.call(r, a)
                })
            }(t)
        }).call(e, i(1))
    }, function (t, e, i) {
        (function (t) {
            "use strict";
            +function (t) {
                function e(e) {
                    var i = e.attr("data-target");
                    i || (i = e.attr("href"), i = i && /#[A-Za-z]/.test(i) && i.replace(/.*(?=#[^\s]*$)/, ""));
                    var n = i && t(i);
                    return n && n.length ? n : e.parent()
                }

                function i(i) {
                    i && 3 === i.which || (t(s).remove(), t(r).each(function () {
                        var n = t(this),
                                s = e(n),
                                r = {
                                    relatedTarget: this
                                };
                        s.hasClass("open") && (i && "click" == i.type && /input|textarea/i.test(i.target.tagName) && t.contains(s[0], i.target) || (s.trigger(i = t.Event("hide.bs.dropdown", r)), i.isDefaultPrevented() || (n.attr("aria-expanded", "false"), s.removeClass("open").trigger(t.Event("hidden.bs.dropdown", r)))))
                    }))
                }

                function n(e) {
                    return this.each(function () {
                        var i = t(this),
                                n = i.data("bs.dropdown");
                        n || i.data("bs.dropdown", n = new o(this)), "string" == typeof e && n[e].call(i)
                    })
                }
                var s = ".dropdown-backdrop",
                        r = '[data-toggle="dropdown"]',
                        o = function (e) {
                            t(e).on("click.bs.dropdown", this.toggle)
                        };
                o.VERSION = "3.3.6", o.prototype.toggle = function (n) {
                    var s = t(this);
                    if (!s.is(".disabled, :disabled")) {
                        var r = e(s),
                                o = r.hasClass("open");
                        if (i(), !o) {
                            "ontouchstart" in document.documentElement && !r.closest(".navbar-nav").length && t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click", i);
                            var a = {
                                relatedTarget: this
                            };
                            if (r.trigger(n = t.Event("show.bs.dropdown", a)), n.isDefaultPrevented())
                                return;
                            s.trigger("focus").attr("aria-expanded", "true"), r.toggleClass("open").trigger(t.Event("shown.bs.dropdown", a))
                        }
                        return !1
                    }
                }, o.prototype.keydown = function (i) {
                    if (/(38|40|27|32)/.test(i.which) && !/input|textarea/i.test(i.target.tagName)) {
                        var n = t(this);
                        if (i.preventDefault(), i.stopPropagation(), !n.is(".disabled, :disabled")) {
                            var s = e(n),
                                    o = s.hasClass("open");
                            if (!o && 27 != i.which || o && 27 == i.which)
                                return 27 == i.which && s.find(r).trigger("focus"), n.trigger("click");
                            var a = " li:not(.disabled):visible a",
                                    l = s.find(".dropdown-menu" + a);
                            if (l.length) {
                                var c = l.index(i.target);
                                38 == i.which && c > 0 && c--, 40 == i.which && c < l.length - 1 && c++, ~c || (c = 0), l.eq(c).trigger("focus")
                            }
                        }
                    }
                };
                var a = t.fn.dropdown;
                t.fn.dropdown = n, t.fn.dropdown.Constructor = o, t.fn.dropdown.noConflict = function () {
                    return t.fn.dropdown = a, this
                }, t(document).on("click.bs.dropdown.data-api", i).on("click.bs.dropdown.data-api", ".dropdown form", function (t) {
                    t.stopPropagation()
                }).on("click.bs.dropdown.data-api", r, o.prototype.toggle).on("keydown.bs.dropdown.data-api", r, o.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", o.prototype.keydown)
            }(t)
        }).call(e, i(1))
    }, function (t, e, i) {
        (function (t) {
            "use strict";
            var e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
            };
            +function (t) {
                function i(i, s) {
                    return this.each(function () {
                        var r = t(this),
                                o = r.data("bs.modal"),
                                a = t.extend({}, n.DEFAULTS, r.data(), "object" == ("undefined" == typeof i ? "undefined" : e(i)) && i);
                        o || r.data("bs.modal", o = new n(this, a)), "string" == typeof i ? o[i](s) : a.show && o.show(s)
                    })
                }
                var n = function (e, i) {
                    this.options = i, this.$body = t(document.body), this.$element = t(e), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function () {
                        this.$element.trigger("loaded.bs.modal")
                    }, this))
                };
                n.VERSION = "3.3.6", n.TRANSITION_DURATION = 300, n.BACKDROP_TRANSITION_DURATION = 150, n.DEFAULTS = {
                    backdrop: !0,
                    keyboard: !0,
                    show: !0
                }, n.prototype.toggle = function (t) {
                    return this.isShown ? this.hide() : this.show(t)
                }, n.prototype.show = function (e) {
                    var i = this,
                            s = t.Event("show.bs.modal", {
                                relatedTarget: e
                            });
                    this.$element.trigger(s), this.isShown || s.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function () {
                        i.$element.one("mouseup.dismiss.bs.modal", function (e) {
                            t(e.target).is(i.$element) && (i.ignoreBackdropClick = !0)
                        })
                    }), this.backdrop(function () {
                        var s = t.support.transition && i.$element.hasClass("fade");
                        i.$element.parent().length || i.$element.appendTo(i.$body), i.$element.show().scrollTop(0), i.adjustDialog(), s && i.$element[0].offsetWidth, i.$element.addClass("in"), i.enforceFocus();
                        var r = t.Event("shown.bs.modal", {
                            relatedTarget: e
                        });
                        s ? i.$dialog.one("bsTransitionEnd", function () {
                            i.$element.trigger("focus").trigger(r)
                        }).emulateTransitionEnd(n.TRANSITION_DURATION) : i.$element.trigger("focus").trigger(r)
                    }))
                }, n.prototype.hide = function (e) {
                    e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(n.TRANSITION_DURATION) : this.hideModal())
                }, n.prototype.enforceFocus = function () {
                    t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function (t) {
                        this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
                    }, this))
                }, n.prototype.escape = function () {
                    this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function (t) {
                        27 == t.which && this.hide()
                    }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
                }, n.prototype.resize = function () {
                    this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal")
                }, n.prototype.hideModal = function () {
                    var t = this;
                    this.$element.hide(), this.backdrop(function () {
                        t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal")
                    })
                }, n.prototype.removeBackdrop = function () {
                    this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
                }, n.prototype.backdrop = function (e) {
                    var i = this,
                            s = this.$element.hasClass("fade") ? "fade" : "";
                    if (this.isShown && this.options.backdrop) {
                        var r = t.support.transition && s;
                        if (this.$backdrop = t(document.createElement("div")).addClass("modal-backdrop " + s).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function (t) {
                            return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
                        }, this)), r && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e)
                            return;
                        r ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : e()
                    } else if (!this.isShown && this.$backdrop) {
                        this.$backdrop.removeClass("in");
                        var o = function () {
                            i.removeBackdrop(), e && e()
                        };
                        t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", o).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : o()
                    } else
                        e && e()
                }, n.prototype.handleUpdate = function () {
                    this.adjustDialog()
                }, n.prototype.adjustDialog = function () {
                    var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
                    this.$element.css({
                        paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
                        paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
                    })
                }, n.prototype.resetAdjustments = function () {
                    this.$element.css({
                        paddingLeft: "",
                        paddingRight: ""
                    })
                }, n.prototype.checkScrollbar = function () {
                    var t = window.innerWidth;
                    if (!t) {
                        var e = document.documentElement.getBoundingClientRect();
                        t = e.right - Math.abs(e.left)
                    }
                    this.bodyIsOverflowing = document.body.clientWidth < t, this.scrollbarWidth = this.measureScrollbar()
                }, n.prototype.setScrollbar = function () {
                    var t = parseInt(this.$body.css("padding-right") || 0, 10);
                    this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth)
                }, n.prototype.resetScrollbar = function () {
                    this.$body.css("padding-right", this.originalBodyPad)
                }, n.prototype.measureScrollbar = function () {
                    var t = document.createElement("div");
                    t.className = "modal-scrollbar-measure", this.$body.append(t);
                    var e = t.offsetWidth - t.clientWidth;
                    return this.$body[0].removeChild(t), e
                };
                var s = t.fn.modal;
                t.fn.modal = i, t.fn.modal.Constructor = n, t.fn.modal.noConflict = function () {
                    return t.fn.modal = s, this
                }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (e) {
                    var n = t(this),
                            s = n.attr("href"),
                            r = t(n.attr("data-target") || s && s.replace(/.*(?=#[^\s]+$)/, "")),
                            o = r.data("bs.modal") ? "toggle" : t.extend({
                        remote: !/#/.test(s) && s
                    }, r.data(), n.data());
                    n.is("a") && e.preventDefault(), r.one("show.bs.modal", function (t) {
                        t.isDefaultPrevented() || r.one("hidden.bs.modal", function () {
                            n.is(":visible") && n.trigger("focus")
                        })
                    }), i.call(r, o, this)
                })
            }(t)
        }).call(e, i(1))
    }, function (t, e, i) {
        (function (t) {
            "use strict";
            var e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
            };
            +function (t) {
                function i(i) {
                    return this.each(function () {
                        var s = t(this),
                                r = s.data("bs.tooltip"),
                                o = "object" == ("undefined" == typeof i ? "undefined" : e(i)) && i;
                        !r && /destroy|hide/.test(i) || (r || s.data("bs.tooltip", r = new n(this, o)), "string" == typeof i && r[i]())
                    })
                }
                var n = function (t, e) {
                    this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", t, e)
                };
                n.VERSION = "3.3.6", n.TRANSITION_DURATION = 150, n.DEFAULTS = {
                    animation: !0,
                    placement: "top",
                    selector: !1,
                    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
                    trigger: "hover focus",
                    title: "",
                    delay: 0,
                    html: !1,
                    container: !1,
                    viewport: {
                        selector: "body",
                        padding: 0
                    }
                }, n.prototype.init = function (e, i, n) {
                    if (this.enabled = !0, this.type = e, this.$element = t(i), this.options = this.getOptions(n), this.$viewport = this.options.viewport && t(t.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                        click: !1,
                        hover: !1,
                        focus: !1
                    }, this.$element[0] instanceof document.constructor && !this.options.selector)
                        throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
                    for (var s = this.options.trigger.split(" "), r = s.length; r--; ) {
                        var o = s[r];
                        if ("click" == o)
                            this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
                        else if ("manual" != o) {
                            var a = "hover" == o ? "mouseenter" : "focusin",
                                    l = "hover" == o ? "mouseleave" : "focusout";
                            this.$element.on(a + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
                        }
                    }
                    this.options.selector ? this._options = t.extend({}, this.options, {
                        trigger: "manual",
                        selector: ""
                    }) : this.fixTitle()
                }, n.prototype.getDefaults = function () {
                    return n.DEFAULTS
                }, n.prototype.getOptions = function (e) {
                    return e = t.extend({}, this.getDefaults(), this.$element.data(), e), e.delay && "number" == typeof e.delay && (e.delay = {
                        show: e.delay,
                        hide: e.delay
                    }), e
                }, n.prototype.getDelegateOptions = function () {
                    var e = {},
                            i = this.getDefaults();
                    return this._options && t.each(this._options, function (t, n) {
                        i[t] != n && (e[t] = n)
                    }), e
                }, n.prototype.enter = function (e) {
                    var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
                    return i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), e instanceof t.Event && (i.inState["focusin" == e.type ? "focus" : "hover"] = !0), i.tip().hasClass("in") || "in" == i.hoverState ? void(i.hoverState = "in") : (clearTimeout(i.timeout), i.hoverState = "in", i.options.delay && i.options.delay.show ? void(i.timeout = setTimeout(function () {
                        "in" == i.hoverState && i.show()
                    }, i.options.delay.show)) : i.show())
                }, n.prototype.isInStateTrue = function () {
                    for (var t in this.inState)
                        if (this.inState[t])
                            return !0;
                    return !1
                }, n.prototype.leave = function (e) {
                    var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
                    if (i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), e instanceof t.Event && (i.inState["focusout" == e.type ? "focus" : "hover"] = !1), !i.isInStateTrue())
                        return clearTimeout(i.timeout), i.hoverState = "out", i.options.delay && i.options.delay.hide ? void(i.timeout = setTimeout(function () {
                            "out" == i.hoverState && i.hide()
                        }, i.options.delay.hide)) : i.hide()
                }, n.prototype.show = function () {
                    var e = t.Event("show.bs." + this.type);
                    if (this.hasContent() && this.enabled) {
                        this.$element.trigger(e);
                        var i = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
                        if (e.isDefaultPrevented() || !i)
                            return;
                        var s = this,
                                r = this.tip(),
                                o = this.getUID(this.type);
                        this.setContent(), r.attr("id", o), this.$element.attr("aria-describedby", o), this.options.animation && r.addClass("fade");
                        var a = "function" == typeof this.options.placement ? this.options.placement.call(this, r[0], this.$element[0]) : this.options.placement,
                                l = /\s?auto?\s?/i,
                                c = l.test(a);
                        c && (a = a.replace(l, "") || "top"), r.detach().css({
                            top: 0,
                            left: 0,
                            display: "block"
                        }).addClass(a).data("bs." + this.type, this), this.options.container ? r.appendTo(this.options.container) : r.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
                        var p = this.getPosition(),
                                d = r[0].offsetWidth,
                                h = r[0].offsetHeight;
                        if (c) {
                            var u = a,
                                    f = this.getPosition(this.$viewport);
                            a = "bottom" == a && p.bottom + h > f.bottom ? "top" : "top" == a && p.top - h < f.top ? "bottom" : "right" == a && p.right + d > f.width ? "left" : "left" == a && p.left - d < f.left ? "right" : a, r.removeClass(u).addClass(a)
                        }
                        var m = this.getCalculatedOffset(a, p, d, h);
                        this.applyPlacement(m, a);
                        var g = function () {
                            var t = s.hoverState;
                            s.$element.trigger("shown.bs." + s.type), s.hoverState = null, "out" == t && s.leave(s)
                        };
                        t.support.transition && this.$tip.hasClass("fade") ? r.one("bsTransitionEnd", g).emulateTransitionEnd(n.TRANSITION_DURATION) : g()
                    }
                }, n.prototype.applyPlacement = function (e, i) {
                    var n = this.tip(),
                            s = n[0].offsetWidth,
                            r = n[0].offsetHeight,
                            o = parseInt(n.css("margin-top"), 10),
                            a = parseInt(n.css("margin-left"), 10);
                    isNaN(o) && (o = 0), isNaN(a) && (a = 0), e.top += o, e.left += a, t.offset.setOffset(n[0], t.extend({
                        using: function (t) {
                            n.css({
                                top: Math.round(t.top),
                                left: Math.round(t.left)
                            })
                        }
                    }, e), 0), n.addClass("in");
                    var l = n[0].offsetWidth,
                            c = n[0].offsetHeight;
                    "top" == i && c != r && (e.top = e.top + r - c);
                    var p = this.getViewportAdjustedDelta(i, e, l, c);
                    p.left ? e.left += p.left : e.top += p.top;
                    var d = /top|bottom/.test(i),
                            h = d ? 2 * p.left - s + l : 2 * p.top - r + c,
                            u = d ? "offsetWidth" : "offsetHeight";
                    n.offset(e), this.replaceArrow(h, n[0][u], d)
                }, n.prototype.replaceArrow = function (t, e, i) {
                    this.arrow().css(i ? "left" : "top", 50 * (1 - t / e) + "%").css(i ? "top" : "left", "")
                }, n.prototype.setContent = function () {
                    var t = this.tip(),
                            e = this.getTitle();
                    t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
                }, n.prototype.hide = function (e) {
                    function i() {
                        "in" != s.hoverState && r.detach(), s.$element.removeAttr("aria-describedby").trigger("hidden.bs." + s.type), e && e()
                    }
                    var s = this,
                            r = t(this.$tip),
                            o = t.Event("hide.bs." + this.type);
                    if (this.$element.trigger(o), !o.isDefaultPrevented())
                        return r.removeClass("in"), t.support.transition && r.hasClass("fade") ? r.one("bsTransitionEnd", i).emulateTransitionEnd(n.TRANSITION_DURATION) : i(), this.hoverState = null, this
                }, n.prototype.fixTitle = function () {
                    var t = this.$element;
                    (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
                }, n.prototype.hasContent = function () {
                    return this.getTitle()
                }, n.prototype.getPosition = function (e) {
                    e = e || this.$element;
                    var i = e[0],
                            n = "BODY" == i.tagName,
                            s = i.getBoundingClientRect();
                    null == s.width && (s = t.extend({}, s, {
                        width: s.right - s.left,
                        height: s.bottom - s.top
                    }));
                    var r = n ? {
                        top: 0,
                        left: 0
                    } : e.offset(),
                            o = {
                                scroll: n ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()
                            },
                            a = n ? {
                                width: t(window).width(),
                                height: t(window).height()
                            } : null;
                    return t.extend({}, s, o, a, r)
                }, n.prototype.getCalculatedOffset = function (t, e, i, n) {
                    return "bottom" == t ? {
                        top: e.top + e.height,
                        left: e.left + e.width / 2 - i / 2
                    } : "top" == t ? {
                        top: e.top - n,
                        left: e.left + e.width / 2 - i / 2
                    } : "left" == t ? {
                        top: e.top + e.height / 2 - n / 2,
                        left: e.left - i
                    } : {
                        top: e.top + e.height / 2 - n / 2,
                        left: e.left + e.width
                    }
                }, n.prototype.getViewportAdjustedDelta = function (t, e, i, n) {
                    var s = {
                        top: 0,
                        left: 0
                    };
                    if (!this.$viewport)
                        return s;
                    var r = this.options.viewport && this.options.viewport.padding || 0,
                            o = this.getPosition(this.$viewport);
                    if (/right|left/.test(t)) {
                        var a = e.top - r - o.scroll,
                                l = e.top + r - o.scroll + n;
                        a < o.top ? s.top = o.top - a : l > o.top + o.height && (s.top = o.top + o.height - l)
                    } else {
                        var c = e.left - r,
                                p = e.left + r + i;
                        c < o.left ? s.left = o.left - c : p > o.right && (s.left = o.left + o.width - p)
                    }
                    return s
                }, n.prototype.getTitle = function () {
                    var t, e = this.$element,
                            i = this.options;
                    return t = e.attr("data-original-title") || ("function" == typeof i.title ? i.title.call(e[0]) : i.title)
                }, n.prototype.getUID = function (t) {
                    do
                        t += ~~(1e6 * Math.random());
                    while (document.getElementById(t));
                    return t
                }, n.prototype.tip = function () {
                    if (!this.$tip && (this.$tip = t(this.options.template), 1 != this.$tip.length))
                        throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
                    return this.$tip
                }, n.prototype.arrow = function () {
                    return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
                }, n.prototype.enable = function () {
                    this.enabled = !0
                }, n.prototype.disable = function () {
                    this.enabled = !1
                }, n.prototype.toggleEnabled = function () {
                    this.enabled = !this.enabled
                }, n.prototype.toggle = function (e) {
                    var i = this;
                    e && (i = t(e.currentTarget).data("bs." + this.type), i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i))), e ? (i.inState.click = !i.inState.click, i.isInStateTrue() ? i.enter(i) : i.leave(i)) : i.tip().hasClass("in") ? i.leave(i) : i.enter(i)
                }, n.prototype.destroy = function () {
                    var t = this;
                    clearTimeout(this.timeout), this.hide(function () {
                        t.$element.off("." + t.type).removeData("bs." + t.type), t.$tip && t.$tip.detach(), t.$tip = null, t.$arrow = null, t.$viewport = null
                    })
                };
                var s = t.fn.tooltip;
                t.fn.tooltip = i, t.fn.tooltip.Constructor = n, t.fn.tooltip.noConflict = function () {
                    return t.fn.tooltip = s, this
                }
            }(t)
        }).call(e, i(1))
    }, function (t, e, i) {
        (function (t) {
            "use strict";
            var e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
            };
            +function (t) {
                function i(i) {
                    return this.each(function () {
                        var s = t(this),
                                r = s.data("bs.popover"),
                                o = "object" == ("undefined" == typeof i ? "undefined" : e(i)) && i;
                        !r && /destroy|hide/.test(i) || (r || s.data("bs.popover", r = new n(this, o)), "string" == typeof i && r[i]())
                    })
                }
                var n = function (t, e) {
                    this.init("popover", t, e)
                };
                if (!t.fn.tooltip)
                    throw new Error("Popover requires tooltip.js");
                n.VERSION = "3.3.6", n.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
                    placement: "right",
                    trigger: "click",
                    content: "",
                    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
                }), n.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), n.prototype.constructor = n, n.prototype.getDefaults = function () {
                    return n.DEFAULTS
                }, n.prototype.setContent = function () {
                    var t = this.tip(),
                            e = this.getTitle(),
                            i = this.getContent();
                    t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof i ? "html" : "append" : "text"](i), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
                }, n.prototype.hasContent = function () {
                    return this.getTitle() || this.getContent()
                }, n.prototype.getContent = function () {
                    var t = this.$element,
                            e = this.options;
                    return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
                }, n.prototype.arrow = function () {
                    return this.$arrow = this.$arrow || this.tip().find(".arrow")
                };
                var s = t.fn.popover;
                t.fn.popover = i, t.fn.popover.Constructor = n, t.fn.popover.noConflict = function () {
                    return t.fn.popover = s, this
                }
            }(t)
        }).call(e, i(1))
    }, function (t, e, i) {
        (function (t) {
            "use strict";
            var e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
            };
            +function (t) {
                function i(e, n) {
                    this.$body = t(document.body), this.$scrollElement = t(t(e).is(document.body) ? window : e), this.options = t.extend({}, i.DEFAULTS, n), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", t.proxy(this.process, this)), this.refresh(), this.process()
                }

                function n(n) {
                    return this.each(function () {
                        var s = t(this),
                                r = s.data("bs.scrollspy"),
                                o = "object" == ("undefined" == typeof n ? "undefined" : e(n)) && n;
                        r || s.data("bs.scrollspy", r = new i(this, o)), "string" == typeof n && r[n]()
                    })
                }
                i.VERSION = "3.3.6", i.DEFAULTS = {
                    offset: 10
                }, i.prototype.getScrollHeight = function () {
                    return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
                }, i.prototype.refresh = function () {
                    var e = this,
                            i = "offset",
                            n = 0;
                    this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), t.isWindow(this.$scrollElement[0]) || (i = "position", n = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function () {
                        var e = t(this),
                                s = e.data("target") || e.attr("href"),
                                r = /^#./.test(s) && t(s);
                        return r && r.length && r.is(":visible") && [
                            [r[i]().top + n, s]
                        ] || null
                    }).sort(function (t, e) {
                        return t[0] - e[0]
                    }).each(function () {
                        e.offsets.push(this[0]), e.targets.push(this[1])
                    })
                }, i.prototype.process = function () {
                    var t, e = this.$scrollElement.scrollTop() + this.options.offset,
                            i = this.getScrollHeight(),
                            n = this.options.offset + i - this.$scrollElement.height(),
                            s = this.offsets,
                            r = this.targets,
                            o = this.activeTarget;
                    if (this.scrollHeight != i && this.refresh(), e >= n)
                        return o != (t = r[r.length - 1]) && this.activate(t);
                    if (o && e < s[0])
                        return this.activeTarget = null, this.clear();
                    for (t = s.length; t--; )
                        o != r[t] && e >= s[t] && (void 0 === s[t + 1] || e < s[t + 1]) && this.activate(r[t])
                }, i.prototype.activate = function (e) {
                    this.activeTarget = e, this.clear();
                    var i = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
                            n = t(i).parents("li").addClass("active");
                    n.parent(".dropdown-menu").length && (n = n.closest("li.dropdown").addClass("active")), n.trigger("activate.bs.scrollspy")
                }, i.prototype.clear = function () {
                    t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
                };
                var s = t.fn.scrollspy;
                t.fn.scrollspy = n, t.fn.scrollspy.Constructor = i, t.fn.scrollspy.noConflict = function () {
                    return t.fn.scrollspy = s, this
                }, t(window).on("load.bs.scrollspy.data-api", function () {
                    t('[data-spy="scroll"]').each(function () {
                        var e = t(this);
                        n.call(e, e.data())
                    })
                })
            }(t)
        }).call(e, i(1))
    }, function (t, e, i) {
        (function (t) {
            "use strict";
            +function (t) {
                function e(e) {
                    return this.each(function () {
                        var n = t(this),
                                s = n.data("bs.tab");
                        s || n.data("bs.tab", s = new i(this)), "string" == typeof e && s[e]()
                    })
                }
                var i = function (e) {
                    this.element = t(e)
                };
                i.VERSION = "3.3.6", i.TRANSITION_DURATION = 150, i.prototype.show = function () {
                    var e = this.element,
                            i = e.closest("ul:not(.dropdown-menu)"),
                            n = e.data("target");
                    if (n || (n = e.attr("href"), n = n && n.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
                        var s = i.find(".active:last a"),
                                r = t.Event("hide.bs.tab", {
                                    relatedTarget: e[0]
                                }),
                                o = t.Event("show.bs.tab", {
                                    relatedTarget: s[0]
                                });
                        if (s.trigger(r), e.trigger(o), !o.isDefaultPrevented() && !r.isDefaultPrevented()) {
                            var a = t(n);
                            this.activate(e.closest("li"), i), this.activate(a, a.parent(), function () {
                                s.trigger({
                                    type: "hidden.bs.tab",
                                    relatedTarget: e[0]
                                }), e.trigger({
                                    type: "shown.bs.tab",
                                    relatedTarget: s[0]
                                })
                            })
                        }
                    }
                }, i.prototype.activate = function (e, n, s) {
                    function r() {
                        o.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), a ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu").length && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), s && s()
                    }
                    var o = n.find("> .active"),
                            a = s && t.support.transition && (o.length && o.hasClass("fade") || !!n.find("> .fade").length);
                    o.length && a ? o.one("bsTransitionEnd", r).emulateTransitionEnd(i.TRANSITION_DURATION) : r(), o.removeClass("in")
                };
                var n = t.fn.tab;
                t.fn.tab = e, t.fn.tab.Constructor = i, t.fn.tab.noConflict = function () {
                    return t.fn.tab = n, this
                };
                var s = function (i) {
                    i.preventDefault(), e.call(t(this), "show")
                };
                t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', s).on("click.bs.tab.data-api", '[data-toggle="pill"]', s)
            }(t)
        }).call(e, i(1))
    }, function (t, e, i) {
        (function (t) {
            "use strict";
            var e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
            };
            +function (t) {
                function i(i) {
                    return this.each(function () {
                        var s = t(this),
                                r = s.data("bs.affix"),
                                o = "object" == ("undefined" == typeof i ? "undefined" : e(i)) && i;
                        r || s.data("bs.affix", r = new n(this, o)),
                                "string" == typeof i && r[i]()
                    })
                }
                var n = function r(e, i) {
                    this.options = t.extend({}, r.DEFAULTS, i), this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(e), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
                };
                n.VERSION = "3.3.6", n.RESET = "affix affix-top affix-bottom", n.DEFAULTS = {
                    offset: 0,
                    target: window
                }, n.prototype.getState = function (t, e, i, n) {
                    var s = this.$target.scrollTop(),
                            r = this.$element.offset(),
                            o = this.$target.height();
                    if (null != i && "top" == this.affixed)
                        return s < i && "top";
                    if ("bottom" == this.affixed)
                        return null != i ? !(s + this.unpin <= r.top) && "bottom" : !(s + o <= t - n) && "bottom";
                    var a = null == this.affixed,
                            l = a ? s : r.top,
                            c = a ? o : e;
                    return null != i && s <= i ? "top" : null != n && l + c >= t - n && "bottom"
                }, n.prototype.getPinnedOffset = function () {
                    if (this.pinnedOffset)
                        return this.pinnedOffset;
                    this.$element.removeClass(n.RESET).addClass("affix");
                    var t = this.$target.scrollTop(),
                            e = this.$element.offset();
                    return this.pinnedOffset = e.top - t
                }, n.prototype.checkPositionWithEventLoop = function () {
                    setTimeout(t.proxy(this.checkPosition, this), 1)
                }, n.prototype.checkPosition = function () {
                    if (this.$element.is(":visible")) {
                        var i = this.$element.height(),
                                s = this.options.offset,
                                r = s.top,
                                o = s.bottom,
                                a = Math.max(t(document).height(), t(document.body).height());
                        "object" != ("undefined" == typeof s ? "undefined" : e(s)) && (o = r = s), "function" == typeof r && (r = s.top(this.$element)), "function" == typeof o && (o = s.bottom(this.$element));
                        var l = this.getState(a, i, r, o);
                        if (this.affixed != l) {
                            null != this.unpin && this.$element.css("top", "");
                            var c = "affix" + (l ? "-" + l : ""),
                                    p = t.Event(c + ".bs.affix");
                            if (this.$element.trigger(p), p.isDefaultPrevented())
                                return;
                            this.affixed = l, this.unpin = "bottom" == l ? this.getPinnedOffset() : null, this.$element.removeClass(n.RESET).addClass(c).trigger(c.replace("affix", "affixed") + ".bs.affix")
                        }
                        "bottom" == l && this.$element.offset({
                            top: a - i - o
                        })
                    }
                };
                var s = t.fn.affix;
                t.fn.affix = i, t.fn.affix.Constructor = n, t.fn.affix.noConflict = function () {
                    return t.fn.affix = s, this
                }, t(window).on("load", function () {
                    t('[data-spy="affix"]').each(function () {
                        var e = t(this),
                                n = e.data();
                        n.offset = n.offset || {}, null != n.offsetBottom && (n.offset.bottom = n.offsetBottom), null != n.offsetTop && (n.offset.top = n.offsetTop), i.call(e, n)
                    })
                })
            }(t)
        }).call(e, i(1))
    }, function (t, e, i) {
        (function (e, i) {
            "use strict";
            var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
            };
            !function () {
                function t(t) {
                    t.fn.swiper = function (e) {
                        var i;
                        return t(this).each(function () {
                            var t = new r(this, e);
                            i || (i = t)
                        }), i
                    }
                }
                var s, r = function p(t, r) {
                    function a(t) {
                        return Math.floor(t)
                    }

                    function l() {
                        T.autoplayTimeoutId = setTimeout(function () {
                            T.params.loop ? (T.fixLoop(), T._slideNext(), T.emit("onAutoplay", T)) : T.isEnd ? r.autoplayStopOnLast ? T.stopAutoplay() : (T._slideTo(0), T.emit("onAutoplay", T)) : (T._slideNext(), T.emit("onAutoplay", T))
                        }, T.params.autoplay)
                    }

                    function c(t, e) {
                        var i = s(t.target);
                        if (!i.is(e))
                            if ("string" == typeof e)
                                i = i.parents(e);
                            else if (e.nodeType) {
                                var n;
                                return i.parents().each(function (t, i) {
                                    i === e && (n = e)
                                }), n ? e : void 0
                            }
                        if (0 !== i.length)
                            return i[0]
                    }

                    function d(t, e) {
                        e = e || {};
                        var i = window.MutationObserver || window.WebkitMutationObserver,
                                n = new i(function (t) {
                                    t.forEach(function (t) {
                                        T.onResize(!0), T.emit("onObserverUpdate", T, t)
                                    })
                                });
                        n.observe(t, {
                            attributes: "undefined" == typeof e.attributes || e.attributes,
                            childList: "undefined" == typeof e.childList || e.childList,
                            characterData: "undefined" == typeof e.characterData || e.characterData
                        }), T.observers.push(n)
                    }

                    function h(t) {
                        t.originalEvent && (t = t.originalEvent);
                        var e = t.keyCode || t.charCode;
                        if (!T.params.allowSwipeToNext && (T.isHorizontal() && 39 === e || !T.isHorizontal() && 40 === e))
                            return !1;
                        if (!T.params.allowSwipeToPrev && (T.isHorizontal() && 37 === e || !T.isHorizontal() && 38 === e))
                            return !1;
                        if (!(t.shiftKey || t.altKey || t.ctrlKey || t.metaKey || document.activeElement && document.activeElement.nodeName && ("input" === document.activeElement.nodeName.toLowerCase() || "textarea" === document.activeElement.nodeName.toLowerCase()))) {
                            if (37 === e || 39 === e || 38 === e || 40 === e) {
                                var i = !1;
                                if (T.container.parents(".swiper-slide").length > 0 && 0 === T.container.parents(".swiper-slide-active").length)
                                    return;
                                var n = {
                                    left: window.pageXOffset,
                                    top: window.pageYOffset
                                },
                                        s = window.innerWidth,
                                        r = window.innerHeight,
                                        o = T.container.offset();
                                T.rtl && (o.left = o.left - T.container[0].scrollLeft);
                                for (var a = [
                                    [o.left, o.top],
                                    [o.left + T.width, o.top],
                                    [o.left, o.top + T.height],
                                    [o.left + T.width, o.top + T.height]
                                ], l = 0; l < a.length; l++) {
                                    var c = a[l];
                                    c[0] >= n.left && c[0] <= n.left + s && c[1] >= n.top && c[1] <= n.top + r && (i = !0)
                                }
                                if (!i)
                                    return
                            }
                            T.isHorizontal() ? (37 !== e && 39 !== e || (t.preventDefault ? t.preventDefault() : t.returnValue = !1), (39 === e && !T.rtl || 37 === e && T.rtl) && T.slideNext(), (37 === e && !T.rtl || 39 === e && T.rtl) && T.slidePrev()) : (38 !== e && 40 !== e || (t.preventDefault ? t.preventDefault() : t.returnValue = !1), 40 === e && T.slideNext(), 38 === e && T.slidePrev())
                        }
                    }

                    function u(t) {
                        t.originalEvent && (t = t.originalEvent);
                        var e = T.mousewheel.event,
                                i = 0,
                                n = T.rtl ? -1 : 1;
                        if ("mousewheel" === e)
                            if (T.params.mousewheelForceToAxis)
                                if (T.isHorizontal()) {
                                    if (!(Math.abs(t.wheelDeltaX) > Math.abs(t.wheelDeltaY)))
                                        return;
                                    i = t.wheelDeltaX * n
                                } else {
                                    if (!(Math.abs(t.wheelDeltaY) > Math.abs(t.wheelDeltaX)))
                                        return;
                                    i = t.wheelDeltaY
                                }
                            else
                                i = Math.abs(t.wheelDeltaX) > Math.abs(t.wheelDeltaY) ? -t.wheelDeltaX * n : -t.wheelDeltaY;
                        else if ("DOMMouseScroll" === e)
                            i = -t.detail;
                        else if ("wheel" === e)
                            if (T.params.mousewheelForceToAxis)
                                if (T.isHorizontal()) {
                                    if (!(Math.abs(t.deltaX) > Math.abs(t.deltaY)))
                                        return;
                                    i = -t.deltaX * n
                                } else {
                                    if (!(Math.abs(t.deltaY) > Math.abs(t.deltaX)))
                                        return;
                                    i = -t.deltaY
                                }
                            else
                                i = Math.abs(t.deltaX) > Math.abs(t.deltaY) ? -t.deltaX * n : -t.deltaY;
                        if (0 !== i) {
                            if (T.params.mousewheelInvert && (i = -i), T.params.freeMode) {
                                var s = T.getWrapperTranslate() + i * T.params.mousewheelSensitivity,
                                        r = T.isBeginning,
                                        o = T.isEnd;
                                if (s >= T.minTranslate() && (s = T.minTranslate()), s <= T.maxTranslate() && (s = T.maxTranslate()), T.setWrapperTransition(0), T.setWrapperTranslate(s), T.updateProgress(), T.updateActiveIndex(), (!r && T.isBeginning || !o && T.isEnd) && T.updateClasses(), T.params.freeModeSticky ? (clearTimeout(T.mousewheel.timeout), T.mousewheel.timeout = setTimeout(function () {
                                    T.slideReset()
                                }, 300)) : T.params.lazyLoading && T.lazy && T.lazy.load(), 0 === s || s === T.maxTranslate())
                                    return
                            } else {
                                if ((new window.Date).getTime() - T.mousewheel.lastScrollTime > 60)
                                    if (i < 0)
                                        if (T.isEnd && !T.params.loop || T.animating) {
                                            if (T.params.mousewheelReleaseOnEdges)
                                                return !0
                                        } else
                                            T.slideNext();
                                    else if (T.isBeginning && !T.params.loop || T.animating) {
                                        if (T.params.mousewheelReleaseOnEdges)
                                            return !0
                                    } else
                                        T.slidePrev();
                                T.mousewheel.lastScrollTime = (new window.Date).getTime()
                            }
                            return T.params.autoplay && T.stopAutoplay(), t.preventDefault ? t.preventDefault() : t.returnValue = !1, !1
                        }
                    }

                    function f(t, e) {
                        t = s(t);
                        var i, n, r, o = T.rtl ? -1 : 1;
                        i = t.attr("data-swiper-parallax") || "0", n = t.attr("data-swiper-parallax-x"), r = t.attr("data-swiper-parallax-y"), n || r ? (n = n || "0", r = r || "0") : T.isHorizontal() ? (n = i, r = "0") : (r = i, n = "0"), n = n.indexOf("%") >= 0 ? parseInt(n, 10) * e * o + "%" : n * e * o + "px", r = r.indexOf("%") >= 0 ? parseInt(r, 10) * e + "%" : r * e + "px", t.transform("translate3d(" + n + ", " + r + ",0px)")
                    }

                    function m(t) {
                        return 0 !== t.indexOf("on") && (t = t[0] !== t[0].toUpperCase() ? "on" + t[0].toUpperCase() + t.substring(1) : "on" + t), t
                    }
                    if (!(this instanceof p))
                        return new p(t, r);
                    var g = {
                        direction: "horizontal",
                        touchEventsTarget: "container",
                        initialSlide: 0,
                        speed: 300,
                        autoplay: !1,
                        autoplayDisableOnInteraction: !0,
                        autoplayStopOnLast: !1,
                        iOSEdgeSwipeDetection: !1,
                        iOSEdgeSwipeThreshold: 20,
                        freeMode: !1,
                        freeModeMomentum: !0,
                        freeModeMomentumRatio: 1,
                        freeModeMomentumBounce: !0,
                        freeModeMomentumBounceRatio: 1,
                        freeModeSticky: !1,
                        freeModeMinimumVelocity: .02,
                        autoHeight: !1,
                        setWrapperSize: !1,
                        virtualTranslate: !1,
                        effect: "slide",
                        coverflow: {
                            rotate: 50,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: !0
                        },
                        flip: {
                            slideShadows: !0,
                            limitRotation: !0
                        },
                        cube: {
                            slideShadows: !0,
                            shadow: !0,
                            shadowOffset: 20,
                            shadowScale: .94
                        },
                        fade: {
                            crossFade: !1
                        },
                        parallax: !1,
                        scrollbar: null,
                        scrollbarHide: !0,
                        scrollbarDraggable: !1,
                        scrollbarSnapOnRelease: !1,
                        keyboardControl: !1,
                        mousewheelControl: !1,
                        mousewheelReleaseOnEdges: !1,
                        mousewheelInvert: !1,
                        mousewheelForceToAxis: !1,
                        mousewheelSensitivity: 1,
                        hashnav: !1,
                        breakpoints: void 0,
                        spaceBetween: 0,
                        slidesPerView: 1,
                        slidesPerColumn: 1,
                        slidesPerColumnFill: "column",
                        slidesPerGroup: 1,
                        centeredSlides: !1,
                        slidesOffsetBefore: 0,
                        slidesOffsetAfter: 0,
                        roundLengths: !1,
                        touchRatio: 1,
                        touchAngle: 45,
                        simulateTouch: !0,
                        shortSwipes: !0,
                        longSwipes: !0,
                        longSwipesRatio: .5,
                        longSwipesMs: 300,
                        followFinger: !0,
                        onlyExternal: !1,
                        threshold: 0,
                        touchMoveStopPropagation: !0,
                        uniqueNavElements: !0,
                        pagination: null,
                        paginationElement: "span",
                        paginationClickable: !1,
                        paginationHide: !1,
                        paginationBulletRender: null,
                        paginationProgressRender: null,
                        paginationFractionRender: null,
                        paginationCustomRender: null,
                        paginationType: "bullets",
                        resistance: !0,
                        resistanceRatio: .85,
                        nextButton: null,
                        prevButton: null,
                        watchSlidesProgress: !1,
                        watchSlidesVisibility: !1,
                        grabCursor: !1,
                        preventClicks: !0,
                        preventClicksPropagation: !0,
                        slideToClickedSlide: !1,
                        lazyLoading: !1,
                        lazyLoadingInPrevNext: !1,
                        lazyLoadingInPrevNextAmount: 1,
                        lazyLoadingOnTransitionStart: !1,
                        preloadImages: !0,
                        updateOnImagesReady: !0,
                        loop: !1,
                        loopAdditionalSlides: 0,
                        loopedSlides: null,
                        control: void 0,
                        controlInverse: !1,
                        controlBy: "slide",
                        allowSwipeToPrev: !0,
                        allowSwipeToNext: !0,
                        swipeHandler: null,
                        noSwiping: !0,
                        noSwipingClass: "swiper-no-swiping",
                        slideClass: "swiper-slide",
                        slideActiveClass: "swiper-slide-active",
                        slideVisibleClass: "swiper-slide-visible",
                        slideDuplicateClass: "swiper-slide-duplicate",
                        slideNextClass: "swiper-slide-next",
                        slidePrevClass: "swiper-slide-prev",
                        wrapperClass: "swiper-wrapper",
                        bulletClass: "swiper-pagination-bullet",
                        bulletActiveClass: "swiper-pagination-bullet-active",
                        buttonDisabledClass: "swiper-button-disabled",
                        paginationCurrentClass: "swiper-pagination-current",
                        paginationTotalClass: "swiper-pagination-total",
                        paginationHiddenClass: "swiper-pagination-hidden",
                        paginationProgressbarClass: "swiper-pagination-progressbar",
                        observer: !1,
                        observeParents: !1,
                        a11y: !1,
                        prevSlideMessage: "Previous slide",
                        nextSlideMessage: "Next slide",
                        firstSlideMessage: "This is the first slide",
                        lastSlideMessage: "This is the last slide",
                        paginationBulletMessage: "Go to slide {{index}}",
                        runCallbacksOnInit: !0
                    },
                            v = r && r.virtualTranslate;
                    r = r || {};
                    var y = {};
                    for (var b in r)
                        if ("object" !== n(r[b]) || null === r[b] || (r[b].nodeType || r[b] === window || r[b] === document || "undefined" != typeof o && r[b] instanceof o || "undefined" != typeof e && r[b] instanceof e))
                            y[b] = r[b];
                        else {
                            y[b] = {};
                            for (var w in r[b])
                                y[b][w] = r[b][w]
                        }
                    for (var x in g)
                        if ("undefined" == typeof r[x])
                            r[x] = g[x];
                        else if ("object" === n(r[x]))
                            for (var _ in g[x])
                                "undefined" == typeof r[x][_] && (r[x][_] = g[x][_]);
                    var T = this;
                    if (T.params = r, T.originalParams = y, T.classNames = [], "undefined" != typeof s && "undefined" != typeof o && (s = o), ("undefined" != typeof s || (s = "undefined" == typeof o ? window.Dom7 || window.Zepto || i : o)) && (T.$ = s, T.currentBreakpoint = void 0, T.getActiveBreakpoint = function () {
                        if (!T.params.breakpoints)
                            return !1;
                        var t, e = !1,
                                i = [];
                        for (t in T.params.breakpoints)
                            T.params.breakpoints.hasOwnProperty(t) && i.push(t);
                        i.sort(function (t, e) {
                            return parseInt(t, 10) > parseInt(e, 10)
                        });
                        for (var n = 0; n < i.length; n++)
                            t = i[n], t >= window.innerWidth && !e && (e = t);
                        return e || "max"
                    }, T.setBreakpoint = function () {
                        var t = T.getActiveBreakpoint();
                        if (t && T.currentBreakpoint !== t) {
                            var e = t in T.params.breakpoints ? T.params.breakpoints[t] : T.originalParams,
                                    i = T.params.loop && e.slidesPerView !== T.params.slidesPerView;
                            for (var n in e)
                                T.params[n] = e[n];
                            T.currentBreakpoint = t, i && T.destroyLoop && T.reLoop(!0)
                        }
                    }, T.params.breakpoints && T.setBreakpoint(), T.container = s(t), 0 !== T.container.length)) {
                        if (T.container.length > 1) {
                            var S = [];
                            return T.container.each(function () {
                                S.push(new p(this, r))
                            }), S
                        }
                        T.container[0].swiper = T, T.container.data("swiper", T), T.classNames.push("swiper-container-" + T.params.direction), T.params.freeMode && T.classNames.push("swiper-container-free-mode"), T.support.flexbox || (T.classNames.push("swiper-container-no-flexbox"), T.params.slidesPerColumn = 1), T.params.autoHeight && T.classNames.push("swiper-container-autoheight"), (T.params.parallax || T.params.watchSlidesVisibility) && (T.params.watchSlidesProgress = !0), ["cube", "coverflow", "flip"].indexOf(T.params.effect) >= 0 && (T.support.transforms3d ? (T.params.watchSlidesProgress = !0, T.classNames.push("swiper-container-3d")) : T.params.effect = "slide"), "slide" !== T.params.effect && T.classNames.push("swiper-container-" + T.params.effect), "cube" === T.params.effect && (T.params.resistanceRatio = 0, T.params.slidesPerView = 1, T.params.slidesPerColumn = 1, T.params.slidesPerGroup = 1, T.params.centeredSlides = !1, T.params.spaceBetween = 0, T.params.virtualTranslate = !0, T.params.setWrapperSize = !1), "fade" !== T.params.effect && "flip" !== T.params.effect || (T.params.slidesPerView = 1, T.params.slidesPerColumn = 1, T.params.slidesPerGroup = 1, T.params.watchSlidesProgress = !0, T.params.spaceBetween = 0, T.params.setWrapperSize = !1, "undefined" == typeof v && (T.params.virtualTranslate = !0)), T.params.grabCursor && T.support.touch && (T.params.grabCursor = !1), T.wrapper = T.container.children("." + T.params.wrapperClass), T.params.pagination && (T.paginationContainer = s(T.params.pagination), T.params.uniqueNavElements && "string" == typeof T.params.pagination && T.paginationContainer.length > 1 && 1 === T.container.find(T.params.pagination).length && (T.paginationContainer = T.container.find(T.params.pagination)), "bullets" === T.params.paginationType && T.params.paginationClickable ? T.paginationContainer.addClass("swiper-pagination-clickable") : T.params.paginationClickable = !1, T.paginationContainer.addClass("swiper-pagination-" + T.params.paginationType)), (T.params.nextButton || T.params.prevButton) && (T.params.nextButton && (T.nextButton = s(T.params.nextButton), T.params.uniqueNavElements && "string" == typeof T.params.nextButton && T.nextButton.length > 1 && 1 === T.container.find(T.params.nextButton).length && (T.nextButton = T.container.find(T.params.nextButton))), T.params.prevButton && (T.prevButton = s(T.params.prevButton), T.params.uniqueNavElements && "string" == typeof T.params.prevButton && T.prevButton.length > 1 && 1 === T.container.find(T.params.prevButton).length && (T.prevButton = T.container.find(T.params.prevButton)))), T.isHorizontal = function () {
                            return "horizontal" === T.params.direction
                        }, T.rtl = T.isHorizontal() && ("rtl" === T.container[0].dir.toLowerCase() || "rtl" === T.container.css("direction")), T.rtl && T.classNames.push("swiper-container-rtl"), T.rtl && (T.wrongRTL = "-webkit-box" === T.wrapper.css("display")), T.params.slidesPerColumn > 1 && T.classNames.push("swiper-container-multirow"), T.device.android && T.classNames.push("swiper-container-android"), T.container.addClass(T.classNames.join(" ")), T.translate = 0, T.progress = 0, T.velocity = 0, T.lockSwipeToNext = function () {
                            T.params.allowSwipeToNext = !1
                        }, T.lockSwipeToPrev = function () {
                            T.params.allowSwipeToPrev = !1
                        }, T.lockSwipes = function () {
                            T.params.allowSwipeToNext = T.params.allowSwipeToPrev = !1
                        }, T.unlockSwipeToNext = function () {
                            T.params.allowSwipeToNext = !0
                        }, T.unlockSwipeToPrev = function () {
                            T.params.allowSwipeToPrev = !0
                        }, T.unlockSwipes = function () {
                            T.params.allowSwipeToNext = T.params.allowSwipeToPrev = !0
                        }, T.params.grabCursor && (T.container[0].style.cursor = "move", T.container[0].style.cursor = "-webkit-grab", T.container[0].style.cursor = "-moz-grab", T.container[0].style.cursor = "grab"), T.imagesToLoad = [], T.imagesLoaded = 0, T.loadImage = function (t, e, i, n, s) {
                            function r() {
                                s && s()
                            }
                            var o;
                            t.complete && n ? r() : e ? (o = new window.Image, o.onload = r, o.onerror = r, i && (o.srcset = i), e && (o.src = e)) : r()
                        }, T.preloadImages = function () {
                            function t() {
                                "undefined" != typeof T && null !== T && (void 0 !== T.imagesLoaded && T.imagesLoaded++, T.imagesLoaded === T.imagesToLoad.length && (T.params.updateOnImagesReady && T.update(), T.emit("onImagesReady", T)))
                            }
                            T.imagesToLoad = T.container.find("img");
                            for (var e = 0; e < T.imagesToLoad.length; e++)
                                T.loadImage(T.imagesToLoad[e], T.imagesToLoad[e].currentSrc || T.imagesToLoad[e].getAttribute("src"), T.imagesToLoad[e].srcset || T.imagesToLoad[e].getAttribute("srcset"), !0, t)
                        }, T.autoplayTimeoutId = void 0, T.autoplaying = !1, T.autoplayPaused = !1, T.startAutoplay = function () {
                            return "undefined" == typeof T.autoplayTimeoutId && (!!T.params.autoplay && (!T.autoplaying && (T.autoplaying = !0, T.emit("onAutoplayStart", T), void l())))
                        }, T.stopAutoplay = function (t) {
                            T.autoplayTimeoutId && (T.autoplayTimeoutId && clearTimeout(T.autoplayTimeoutId), T.autoplaying = !1, T.autoplayTimeoutId = void 0, T.emit("onAutoplayStop", T))
                        }, T.pauseAutoplay = function (t) {
                            T.autoplayPaused || (T.autoplayTimeoutId && clearTimeout(T.autoplayTimeoutId), T.autoplayPaused = !0, 0 === t ? (T.autoplayPaused = !1, l()) : T.wrapper.transitionEnd(function () {
                                T && (T.autoplayPaused = !1, T.autoplaying ? l() : T.stopAutoplay())
                            }))
                        }, T.minTranslate = function () {
                            return -T.snapGrid[0]
                        }, T.maxTranslate = function () {
                            return -T.snapGrid[T.snapGrid.length - 1]
                        }, T.updateAutoHeight = function () {
                            var t = T.slides.eq(T.activeIndex)[0];
                            if ("undefined" != typeof t) {
                                var e = t.offsetHeight;
                                e && T.wrapper.css("height", e + "px")
                            }
                        }, T.updateContainerSize = function () {
                            var t, e;
                            t = "undefined" != typeof T.params.width ? T.params.width : T.container[0].clientWidth, e = "undefined" != typeof T.params.height ? T.params.height : T.container[0].clientHeight, 0 === t && T.isHorizontal() || 0 === e && !T.isHorizontal() || (t = t - parseInt(T.container.css("padding-left"), 10) - parseInt(T.container.css("padding-right"), 10), e = e - parseInt(T.container.css("padding-top"), 10) - parseInt(T.container.css("padding-bottom"), 10), T.width = t, T.height = e, T.size = T.isHorizontal() ? T.width : T.height)
                        }, T.updateSlidesSize = function () {
                            T.slides = T.wrapper.children("." + T.params.slideClass), T.snapGrid = [], T.slidesGrid = [], T.slidesSizesGrid = [];
                            var t, e = T.params.spaceBetween,
                                    i = -T.params.slidesOffsetBefore,
                                    n = 0,
                                    s = 0;
                            if ("undefined" != typeof T.size) {
                                "string" == typeof e && e.indexOf("%") >= 0 && (e = parseFloat(e.replace("%", "")) / 100 * T.size), T.virtualSize = -e, T.rtl ? T.slides.css({
                                    marginLeft: "",
                                    marginTop: ""
                                }) : T.slides.css({
                                    marginRight: "",
                                    marginBottom: ""
                                });
                                var r;
                                T.params.slidesPerColumn > 1 && (r = Math.floor(T.slides.length / T.params.slidesPerColumn) === T.slides.length / T.params.slidesPerColumn ? T.slides.length : Math.ceil(T.slides.length / T.params.slidesPerColumn) * T.params.slidesPerColumn, "auto" !== T.params.slidesPerView && "row" === T.params.slidesPerColumnFill && (r = Math.max(r, T.params.slidesPerView * T.params.slidesPerColumn)));
                                var o, l = T.params.slidesPerColumn,
                                        c = r / l,
                                        p = c - (T.params.slidesPerColumn * c - T.slides.length);
                                for (t = 0; t < T.slides.length; t++) {
                                    o = 0;
                                    var d = T.slides.eq(t);
                                    if (T.params.slidesPerColumn > 1) {
                                        var h, u, f;
                                        "column" === T.params.slidesPerColumnFill ? (u = Math.floor(t / l), f = t - u * l, (u > p || u === p && f === l - 1) && ++f >= l && (f = 0, u++), h = u + f * r / l, d.css({
                                            "-webkit-box-ordinal-group": h,
                                            "-moz-box-ordinal-group": h,
                                            "-ms-flex-order": h,
                                            "-webkit-order": h,
                                            order: h
                                        })) : (f = Math.floor(t / c), u = t - f * c), d.css({
                                            "margin-top": 0 !== f && T.params.spaceBetween && T.params.spaceBetween + "px"
                                        }).attr("data-swiper-column", u).attr("data-swiper-row", f)
                                    }
                                    "none" !== d.css("display") && ("auto" === T.params.slidesPerView ? (o = T.isHorizontal() ? d.outerWidth(!0) : d.outerHeight(!0), T.params.roundLengths && (o = a(o))) : (o = (T.size - (T.params.slidesPerView - 1) * e) / T.params.slidesPerView, T.params.roundLengths && (o = a(o)), T.isHorizontal() ? T.slides[t].style.width = o + "px" : T.slides[t].style.height = o + "px"), T.slides[t].swiperSlideSize = o, T.slidesSizesGrid.push(o), T.params.centeredSlides ? (i = i + o / 2 + n / 2 + e, 0 === t && (i = i - T.size / 2 - e), Math.abs(i) < .001 && (i = 0), s % T.params.slidesPerGroup === 0 && T.snapGrid.push(i), T.slidesGrid.push(i)) : (s % T.params.slidesPerGroup === 0 && T.snapGrid.push(i), T.slidesGrid.push(i), i = i + o + e), T.virtualSize += o + e, n = o, s++)
                                }
                                T.virtualSize = Math.max(T.virtualSize, T.size) + T.params.slidesOffsetAfter;
                                var m;
                                if (T.rtl && T.wrongRTL && ("slide" === T.params.effect || "coverflow" === T.params.effect) && T.wrapper.css({
                                    width: T.virtualSize + T.params.spaceBetween + "px"
                                }), T.support.flexbox && !T.params.setWrapperSize || (T.isHorizontal() ? T.wrapper.css({
                                    width: T.virtualSize + T.params.spaceBetween + "px"
                                }) : T.wrapper.css({
                                    height: T.virtualSize + T.params.spaceBetween + "px"
                                })), T.params.slidesPerColumn > 1 && (T.virtualSize = (o + T.params.spaceBetween) * r, T.virtualSize = Math.ceil(T.virtualSize / T.params.slidesPerColumn) - T.params.spaceBetween, T.wrapper.css({
                                    width: T.virtualSize + T.params.spaceBetween + "px"
                                }), T.params.centeredSlides)) {
                                    for (m = [], t = 0; t < T.snapGrid.length; t++)
                                        T.snapGrid[t] < T.virtualSize + T.snapGrid[0] && m.push(T.snapGrid[t]);
                                    T.snapGrid = m
                                }
                                if (!T.params.centeredSlides) {
                                    for (m = [], t = 0; t < T.snapGrid.length; t++)
                                        T.snapGrid[t] <= T.virtualSize - T.size && m.push(T.snapGrid[t]);
                                    T.snapGrid = m, Math.floor(T.virtualSize - T.size) - Math.floor(T.snapGrid[T.snapGrid.length - 1]) > 1 && T.snapGrid.push(T.virtualSize - T.size)
                                }
                                0 === T.snapGrid.length && (T.snapGrid = [0]), 0 !== T.params.spaceBetween && (T.isHorizontal() ? T.rtl ? T.slides.css({
                                    marginLeft: e + "px"
                                }) : T.slides.css({
                                    marginRight: e + "px"
                                }) : T.slides.css({
                                    marginBottom: e + "px"
                                })), T.params.watchSlidesProgress && T.updateSlidesOffset()
                            }
                        }, T.updateSlidesOffset = function () {
                            for (var t = 0; t < T.slides.length; t++)
                                T.slides[t].swiperSlideOffset = T.isHorizontal() ? T.slides[t].offsetLeft : T.slides[t].offsetTop
                        }, T.updateSlidesProgress = function (t) {
                            if ("undefined" == typeof t && (t = T.translate || 0), 0 !== T.slides.length) {
                                "undefined" == typeof T.slides[0].swiperSlideOffset && T.updateSlidesOffset();
                                var e = -t;
                                T.rtl && (e = t), T.slides.removeClass(T.params.slideVisibleClass);
                                for (var i = 0; i < T.slides.length; i++) {
                                    var n = T.slides[i],
                                            s = (e - n.swiperSlideOffset) / (n.swiperSlideSize + T.params.spaceBetween);
                                    if (T.params.watchSlidesVisibility) {
                                        var r = -(e - n.swiperSlideOffset),
                                                o = r + T.slidesSizesGrid[i],
                                                a = r >= 0 && r < T.size || o > 0 && o <= T.size || r <= 0 && o >= T.size;
                                        a && T.slides.eq(i).addClass(T.params.slideVisibleClass)
                                    }
                                    n.progress = T.rtl ? -s : s
                                }
                            }
                        }, T.updateProgress = function (t) {
                            "undefined" == typeof t && (t = T.translate || 0);
                            var e = T.maxTranslate() - T.minTranslate(),
                                    i = T.isBeginning,
                                    n = T.isEnd;
                            0 === e ? (T.progress = 0, T.isBeginning = T.isEnd = !0) : (T.progress = (t - T.minTranslate()) / e, T.isBeginning = T.progress <= 0, T.isEnd = T.progress >= 1), T.isBeginning && !i && T.emit("onReachBeginning", T), T.isEnd && !n && T.emit("onReachEnd", T), T.params.watchSlidesProgress && T.updateSlidesProgress(t), T.emit("onProgress", T, T.progress)
                        }, T.updateActiveIndex = function () {
                            var t, e, i, n = T.rtl ? T.translate : -T.translate;
                            for (e = 0; e < T.slidesGrid.length; e++)
                                "undefined" != typeof T.slidesGrid[e + 1] ? n >= T.slidesGrid[e] && n < T.slidesGrid[e + 1] - (T.slidesGrid[e + 1] - T.slidesGrid[e]) / 2 ? t = e : n >= T.slidesGrid[e] && n < T.slidesGrid[e + 1] && (t = e + 1) : n >= T.slidesGrid[e] && (t = e);
                            (t < 0 || "undefined" == typeof t) && (t = 0), i = Math.floor(t / T.params.slidesPerGroup), i >= T.snapGrid.length && (i = T.snapGrid.length - 1), t !== T.activeIndex && (T.snapIndex = i, T.previousIndex = T.activeIndex, T.activeIndex = t, T.updateClasses())
                        }, T.updateClasses = function () {
                            T.slides.removeClass(T.params.slideActiveClass + " " + T.params.slideNextClass + " " + T.params.slidePrevClass);
                            var t = T.slides.eq(T.activeIndex);
                            t.addClass(T.params.slideActiveClass);
                            var e = t.next("." + T.params.slideClass).addClass(T.params.slideNextClass);
                            T.params.loop && 0 === e.length && T.slides.eq(0).addClass(T.params.slideNextClass);
                            var i = t.prev("." + T.params.slideClass).addClass(T.params.slidePrevClass);
                            if (T.params.loop && 0 === i.length && T.slides.eq(-1).addClass(T.params.slidePrevClass), T.paginationContainer && T.paginationContainer.length > 0) {
                                var n, r = T.params.loop ? Math.ceil((T.slides.length - 2 * T.loopedSlides) / T.params.slidesPerGroup) : T.snapGrid.length;
                                if (T.params.loop ? (n = Math.ceil((T.activeIndex - T.loopedSlides) / T.params.slidesPerGroup), n > T.slides.length - 1 - 2 * T.loopedSlides && (n -= T.slides.length - 2 * T.loopedSlides), n > r - 1 && (n -= r), n < 0 && "bullets" !== T.params.paginationType && (n = r + n)) : n = "undefined" != typeof T.snapIndex ? T.snapIndex : T.activeIndex || 0, "bullets" === T.params.paginationType && T.bullets && T.bullets.length > 0 && (T.bullets.removeClass(T.params.bulletActiveClass), T.paginationContainer.length > 1 ? T.bullets.each(function () {
                                    s(this).index() === n && s(this).addClass(T.params.bulletActiveClass)
                                }) : T.bullets.eq(n).addClass(T.params.bulletActiveClass)), "fraction" === T.params.paginationType && (T.paginationContainer.find("." + T.params.paginationCurrentClass).text(n + 1), T.paginationContainer.find("." + T.params.paginationTotalClass).text(r)), "progress" === T.params.paginationType) {
                                    var o = (n + 1) / r,
                                            a = o,
                                            l = 1;
                                    T.isHorizontal() || (l = o, a = 1), T.paginationContainer.find("." + T.params.paginationProgressbarClass).transform("translate3d(0,0,0) scaleX(" + a + ") scaleY(" + l + ")").transition(T.params.speed)
                                }
                                "custom" === T.params.paginationType && T.params.paginationCustomRender && (T.paginationContainer.html(T.params.paginationCustomRender(T, n + 1, r)), T.emit("onPaginationRendered", T, T.paginationContainer[0]))
                            }
                            T.params.loop || (T.params.prevButton && T.prevButton && T.prevButton.length > 0 && (T.isBeginning ? (T.prevButton.addClass(T.params.buttonDisabledClass), T.params.a11y && T.a11y && T.a11y.disable(T.prevButton)) : (T.prevButton.removeClass(T.params.buttonDisabledClass), T.params.a11y && T.a11y && T.a11y.enable(T.prevButton))), T.params.nextButton && T.nextButton && T.nextButton.length > 0 && (T.isEnd ? (T.nextButton.addClass(T.params.buttonDisabledClass), T.params.a11y && T.a11y && T.a11y.disable(T.nextButton)) : (T.nextButton.removeClass(T.params.buttonDisabledClass), T.params.a11y && T.a11y && T.a11y.enable(T.nextButton))))
                        }, T.updatePagination = function () {
                            if (T.params.pagination && T.paginationContainer && T.paginationContainer.length > 0) {
                                var t = "";
                                if ("bullets" === T.params.paginationType) {
                                    for (var e = T.params.loop ? Math.ceil((T.slides.length - 2 * T.loopedSlides) / T.params.slidesPerGroup) : T.snapGrid.length, i = 0; i < e; i++)
                                        t += T.params.paginationBulletRender ? T.params.paginationBulletRender(i, T.params.bulletClass) : "<" + T.params.paginationElement + ' class="' + T.params.bulletClass + '"></' + T.params.paginationElement + ">";
                                    T.paginationContainer.html(t), T.bullets = T.paginationContainer.find("." + T.params.bulletClass), T.params.paginationClickable && T.params.a11y && T.a11y && T.a11y.initPagination()
                                }
                                "fraction" === T.params.paginationType && (t = T.params.paginationFractionRender ? T.params.paginationFractionRender(T, T.params.paginationCurrentClass, T.params.paginationTotalClass) : '<span class="' + T.params.paginationCurrentClass + '"></span> / <span class="' + T.params.paginationTotalClass + '"></span>', T.paginationContainer.html(t)), "progress" === T.params.paginationType && (t = T.params.paginationProgressRender ? T.params.paginationProgressRender(T, T.params.paginationProgressbarClass) : '<span class="' + T.params.paginationProgressbarClass + '"></span>', T.paginationContainer.html(t)), "custom" !== T.params.paginationType && T.emit("onPaginationRendered", T, T.paginationContainer[0])
                            }
                        }, T.update = function (t) {
                            function e() {
                                n = Math.min(Math.max(T.translate, T.maxTranslate()), T.minTranslate()), T.setWrapperTranslate(n), T.updateActiveIndex(), T.updateClasses()
                            }
                            if (T.updateContainerSize(), T.updateSlidesSize(), T.updateProgress(), T.updatePagination(), T.updateClasses(), T.params.scrollbar && T.scrollbar && T.scrollbar.set(), t) {
                                var i, n;
                                T.controller && T.controller.spline && (T.controller.spline = void 0), T.params.freeMode ? (e(), T.params.autoHeight && T.updateAutoHeight()) : (i = ("auto" === T.params.slidesPerView || T.params.slidesPerView > 1) && T.isEnd && !T.params.centeredSlides ? T.slideTo(T.slides.length - 1, 0, !1, !0) : T.slideTo(T.activeIndex, 0, !1, !0), i || e())
                            } else
                                T.params.autoHeight && T.updateAutoHeight()
                        }, T.onResize = function (t) {
                            T.params.breakpoints && T.setBreakpoint();
                            var e = T.params.allowSwipeToPrev,
                                    i = T.params.allowSwipeToNext;
                            T.params.allowSwipeToPrev = T.params.allowSwipeToNext = !0, T.updateContainerSize(), T.updateSlidesSize(), ("auto" === T.params.slidesPerView || T.params.freeMode || t) && T.updatePagination(), T.params.scrollbar && T.scrollbar && T.scrollbar.set(), T.controller && T.controller.spline && (T.controller.spline = void 0);
                            var n = !1;
                            if (T.params.freeMode) {
                                var s = Math.min(Math.max(T.translate, T.maxTranslate()), T.minTranslate());
                                T.setWrapperTranslate(s), T.updateActiveIndex(), T.updateClasses(), T.params.autoHeight && T.updateAutoHeight()
                            } else
                                T.updateClasses(), n = ("auto" === T.params.slidesPerView || T.params.slidesPerView > 1) && T.isEnd && !T.params.centeredSlides ? T.slideTo(T.slides.length - 1, 0, !1, !0) : T.slideTo(T.activeIndex, 0, !1, !0);
                            T.params.lazyLoading && !n && T.lazy && T.lazy.load(), T.params.allowSwipeToPrev = e, T.params.allowSwipeToNext = i
                        };
                        var C = ["mousedown", "mousemove", "mouseup"];
                        window.navigator.pointerEnabled ? C = ["pointerdown", "pointermove", "pointerup"] : window.navigator.msPointerEnabled && (C = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]), T.touchEvents = {
                            start: T.support.touch || !T.params.simulateTouch ? "touchstart" : C[0],
                            move: T.support.touch || !T.params.simulateTouch ? "touchmove" : C[1],
                            end: T.support.touch || !T.params.simulateTouch ? "touchend" : C[2]
                        }, (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) && ("container" === T.params.touchEventsTarget ? T.container : T.wrapper).addClass("swiper-wp8-" + T.params.direction), T.initEvents = function (t) {
                            var e = t ? "off" : "on",
                                    i = t ? "removeEventListener" : "addEventListener",
                                    n = "container" === T.params.touchEventsTarget ? T.container[0] : T.wrapper[0],
                                    s = T.support.touch ? n : document,
                                    o = !!T.params.nested;
                            T.browser.ie ? (n[i](T.touchEvents.start, T.onTouchStart, !1), s[i](T.touchEvents.move, T.onTouchMove, o), s[i](T.touchEvents.end, T.onTouchEnd, !1)) : (T.support.touch && (n[i](T.touchEvents.start, T.onTouchStart, !1), n[i](T.touchEvents.move, T.onTouchMove, o), n[i](T.touchEvents.end, T.onTouchEnd, !1)), !r.simulateTouch || T.device.ios || T.device.android || (n[i]("mousedown", T.onTouchStart, !1), document[i]("mousemove", T.onTouchMove, o), document[i]("mouseup", T.onTouchEnd, !1))), window[i]("resize", T.onResize), T.params.nextButton && T.nextButton && T.nextButton.length > 0 && (T.nextButton[e]("click", T.onClickNext), T.params.a11y && T.a11y && T.nextButton[e]("keydown", T.a11y.onEnterKey)), T.params.prevButton && T.prevButton && T.prevButton.length > 0 && (T.prevButton[e]("click", T.onClickPrev), T.params.a11y && T.a11y && T.prevButton[e]("keydown", T.a11y.onEnterKey)), T.params.pagination && T.params.paginationClickable && (T.paginationContainer[e]("click", "." + T.params.bulletClass, T.onClickIndex), T.params.a11y && T.a11y && T.paginationContainer[e]("keydown", "." + T.params.bulletClass, T.a11y.onEnterKey)), (T.params.preventClicks || T.params.preventClicksPropagation) && n[i]("click", T.preventClicks, !0)
                        }, T.attachEvents = function () {
                            T.initEvents()
                        }, T.detachEvents = function () {
                            T.initEvents(!0)
                        }, T.allowClick = !0, T.preventClicks = function (t) {
                            T.allowClick || (T.params.preventClicks && t.preventDefault(), T.params.preventClicksPropagation && T.animating && (t.stopPropagation(), t.stopImmediatePropagation()))
                        }, T.onClickNext = function (t) {
                            t.preventDefault(), T.isEnd && !T.params.loop || T.slideNext()
                        }, T.onClickPrev = function (t) {
                            t.preventDefault(), T.isBeginning && !T.params.loop || T.slidePrev()
                        }, T.onClickIndex = function (t) {
                            t.preventDefault();
                            var e = s(this).index() * T.params.slidesPerGroup;
                            T.params.loop && (e += T.loopedSlides), T.slideTo(e)
                        }, T.updateClickedSlide = function (t) {
                            var e = c(t, "." + T.params.slideClass),
                                    i = !1;
                            if (e)
                                for (var n = 0; n < T.slides.length; n++)
                                    T.slides[n] === e && (i = !0);
                            if (!e || !i)
                                return T.clickedSlide = void 0, void(T.clickedIndex = void 0);
                            if (T.clickedSlide = e, T.clickedIndex = s(e).index(), T.params.slideToClickedSlide && void 0 !== T.clickedIndex && T.clickedIndex !== T.activeIndex) {
                                var r, o = T.clickedIndex;
                                if (T.params.loop) {
                                    if (T.animating)
                                        return;
                                    r = s(T.clickedSlide).attr("data-swiper-slide-index"), T.params.centeredSlides ? o < T.loopedSlides - T.params.slidesPerView / 2 || o > T.slides.length - T.loopedSlides + T.params.slidesPerView / 2 ? (T.fixLoop(), o = T.wrapper.children("." + T.params.slideClass + '[data-swiper-slide-index="' + r + '"]:not(.swiper-slide-duplicate)').eq(0).index(), setTimeout(function () {
                                        T.slideTo(o)
                                    }, 0)) : T.slideTo(o) : o > T.slides.length - T.params.slidesPerView ? (T.fixLoop(), o = T.wrapper.children("." + T.params.slideClass + '[data-swiper-slide-index="' + r + '"]:not(.swiper-slide-duplicate)').eq(0).index(), setTimeout(function () {
                                        T.slideTo(o)
                                    }, 0)) : T.slideTo(o)
                                } else
                                    T.slideTo(o)
                            }
                        };
                        var k, E, A, $, D, P, M, I, N, L, z = "input, select, textarea, button",
                                O = Date.now(),
                                H = [];
                        T.animating = !1, T.touches = {
                            startX: 0,
                            startY: 0,
                            currentX: 0,
                            currentY: 0,
                            diff: 0
                        };
                        var F, R;
                        if (T.onTouchStart = function (t) {
                            if (t.originalEvent && (t = t.originalEvent), F = "touchstart" === t.type, F || !("which" in t) || 3 !== t.which) {
                                if (T.params.noSwiping && c(t, "." + T.params.noSwipingClass))
                                    return void(T.allowClick = !0);
                                if (!T.params.swipeHandler || c(t, T.params.swipeHandler)) {
                                    var e = T.touches.currentX = "touchstart" === t.type ? t.targetTouches[0].pageX : t.pageX,
                                            i = T.touches.currentY = "touchstart" === t.type ? t.targetTouches[0].pageY : t.pageY;
                                    if (!(T.device.ios && T.params.iOSEdgeSwipeDetection && e <= T.params.iOSEdgeSwipeThreshold)) {
                                        if (k = !0, E = !1, A = !0, D = void 0, R = void 0, T.touches.startX = e, T.touches.startY = i, $ = Date.now(), T.allowClick = !0, T.updateContainerSize(), T.swipeDirection = void 0, T.params.threshold > 0 && (I = !1), "touchstart" !== t.type) {
                                            var n = !0;
                                            s(t.target).is(z) && (n = !1), document.activeElement && s(document.activeElement).is(z) && document.activeElement.blur(),
                                                    n && t.preventDefault()
                                        }
                                        T.emit("onTouchStart", T, t)
                                    }
                                }
                            }
                        }, T.onTouchMove = function (t) {
                            if (t.originalEvent && (t = t.originalEvent), !F || "mousemove" !== t.type) {
                                if (t.preventedByNestedSwiper)
                                    return T.touches.startX = "touchmove" === t.type ? t.targetTouches[0].pageX : t.pageX, void(T.touches.startY = "touchmove" === t.type ? t.targetTouches[0].pageY : t.pageY);
                                if (T.params.onlyExternal)
                                    return T.allowClick = !1, void(k && (T.touches.startX = T.touches.currentX = "touchmove" === t.type ? t.targetTouches[0].pageX : t.pageX, T.touches.startY = T.touches.currentY = "touchmove" === t.type ? t.targetTouches[0].pageY : t.pageY, $ = Date.now()));
                                if (F && document.activeElement && t.target === document.activeElement && s(t.target).is(z))
                                    return E = !0, void(T.allowClick = !1);
                                if (A && T.emit("onTouchMove", T, t), !(t.targetTouches && t.targetTouches.length > 1)) {
                                    if (T.touches.currentX = "touchmove" === t.type ? t.targetTouches[0].pageX : t.pageX, T.touches.currentY = "touchmove" === t.type ? t.targetTouches[0].pageY : t.pageY, "undefined" == typeof D) {
                                        var e = 180 * Math.atan2(Math.abs(T.touches.currentY - T.touches.startY), Math.abs(T.touches.currentX - T.touches.startX)) / Math.PI;
                                        D = T.isHorizontal() ? e > T.params.touchAngle : 90 - e > T.params.touchAngle
                                    }
                                    if (D && T.emit("onTouchMoveOpposite", T, t), "undefined" == typeof R && T.browser.ieTouch && (T.touches.currentX === T.touches.startX && T.touches.currentY === T.touches.startY || (R = !0)), k) {
                                        if (D)
                                            return void(k = !1);
                                        if (R || !T.browser.ieTouch) {
                                            T.allowClick = !1, T.emit("onSliderMove", T, t), t.preventDefault(), T.params.touchMoveStopPropagation && !T.params.nested && t.stopPropagation(), E || (r.loop && T.fixLoop(), M = T.getWrapperTranslate(), T.setWrapperTransition(0), T.animating && T.wrapper.trigger("webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd"), T.params.autoplay && T.autoplaying && (T.params.autoplayDisableOnInteraction ? T.stopAutoplay() : T.pauseAutoplay()), L = !1, T.params.grabCursor && (T.container[0].style.cursor = "move", T.container[0].style.cursor = "-webkit-grabbing", T.container[0].style.cursor = "-moz-grabbin", T.container[0].style.cursor = "grabbing")), E = !0;
                                            var i = T.touches.diff = T.isHorizontal() ? T.touches.currentX - T.touches.startX : T.touches.currentY - T.touches.startY;
                                            i *= T.params.touchRatio, T.rtl && (i = -i), T.swipeDirection = i > 0 ? "prev" : "next", P = i + M;
                                            var n = !0;
                                            if (i > 0 && P > T.minTranslate() ? (n = !1, T.params.resistance && (P = T.minTranslate() - 1 + Math.pow(-T.minTranslate() + M + i, T.params.resistanceRatio))) : i < 0 && P < T.maxTranslate() && (n = !1, T.params.resistance && (P = T.maxTranslate() + 1 - Math.pow(T.maxTranslate() - M - i, T.params.resistanceRatio))), n && (t.preventedByNestedSwiper = !0), !T.params.allowSwipeToNext && "next" === T.swipeDirection && P < M && (P = M), !T.params.allowSwipeToPrev && "prev" === T.swipeDirection && P > M && (P = M), T.params.followFinger) {
                                                if (T.params.threshold > 0) {
                                                    if (!(Math.abs(i) > T.params.threshold || I))
                                                        return void(P = M);
                                                    if (!I)
                                                        return I = !0, T.touches.startX = T.touches.currentX, T.touches.startY = T.touches.currentY, P = M, void(T.touches.diff = T.isHorizontal() ? T.touches.currentX - T.touches.startX : T.touches.currentY - T.touches.startY)
                                                }
                                                (T.params.freeMode || T.params.watchSlidesProgress) && T.updateActiveIndex(), T.params.freeMode && (0 === H.length && H.push({
                                                    position: T.touches[T.isHorizontal() ? "startX" : "startY"],
                                                    time: $
                                                }), H.push({
                                                    position: T.touches[T.isHorizontal() ? "currentX" : "currentY"],
                                                    time: (new window.Date).getTime()
                                                })), T.updateProgress(P), T.setWrapperTranslate(P)
                                            }
                                        }
                                    }
                                }
                            }
                        }, T.onTouchEnd = function (t) {
                            if (t.originalEvent && (t = t.originalEvent), A && T.emit("onTouchEnd", T, t), A = !1, k) {
                                T.params.grabCursor && E && k && (T.container[0].style.cursor = "move", T.container[0].style.cursor = "-webkit-grab", T.container[0].style.cursor = "-moz-grab", T.container[0].style.cursor = "grab");
                                var e = Date.now(),
                                        i = e - $;
                                if (T.allowClick && (T.updateClickedSlide(t), T.emit("onTap", T, t), i < 300 && e - O > 300 && (N && clearTimeout(N), N = setTimeout(function () {
                                    T && (T.params.paginationHide && T.paginationContainer.length > 0 && !s(t.target).hasClass(T.params.bulletClass) && T.paginationContainer.toggleClass(T.params.paginationHiddenClass), T.emit("onClick", T, t))
                                }, 300)), i < 300 && e - O < 300 && (N && clearTimeout(N), T.emit("onDoubleTap", T, t))), O = Date.now(), setTimeout(function () {
                                    T && (T.allowClick = !0)
                                }, 0), !k || !E || !T.swipeDirection || 0 === T.touches.diff || P === M)
                                    return void(k = E = !1);
                                k = E = !1;
                                var n;
                                if (n = T.params.followFinger ? T.rtl ? T.translate : -T.translate : -P, T.params.freeMode) {
                                    if (n < -T.minTranslate())
                                        return void T.slideTo(T.activeIndex);
                                    if (n > -T.maxTranslate())
                                        return void(T.slides.length < T.snapGrid.length ? T.slideTo(T.snapGrid.length - 1) : T.slideTo(T.slides.length - 1));
                                    if (T.params.freeModeMomentum) {
                                        if (H.length > 1) {
                                            var r = H.pop(),
                                                    o = H.pop(),
                                                    a = r.position - o.position,
                                                    l = r.time - o.time;
                                            T.velocity = a / l, T.velocity = T.velocity / 2, Math.abs(T.velocity) < T.params.freeModeMinimumVelocity && (T.velocity = 0), (l > 150 || (new window.Date).getTime() - r.time > 300) && (T.velocity = 0)
                                        } else
                                            T.velocity = 0;
                                        H.length = 0;
                                        var c = 1e3 * T.params.freeModeMomentumRatio,
                                                p = T.velocity * c,
                                                d = T.translate + p;
                                        T.rtl && (d = -d);
                                        var h, u = !1,
                                                f = 20 * Math.abs(T.velocity) * T.params.freeModeMomentumBounceRatio;
                                        if (d < T.maxTranslate())
                                            T.params.freeModeMomentumBounce ? (d + T.maxTranslate() < -f && (d = T.maxTranslate() - f), h = T.maxTranslate(), u = !0, L = !0) : d = T.maxTranslate();
                                        else if (d > T.minTranslate())
                                            T.params.freeModeMomentumBounce ? (d - T.minTranslate() > f && (d = T.minTranslate() + f), h = T.minTranslate(), u = !0, L = !0) : d = T.minTranslate();
                                        else if (T.params.freeModeSticky) {
                                            var m, g = 0;
                                            for (g = 0; g < T.snapGrid.length; g += 1)
                                                if (T.snapGrid[g] > -d) {
                                                    m = g;
                                                    break
                                                }
                                            d = Math.abs(T.snapGrid[m] - d) < Math.abs(T.snapGrid[m - 1] - d) || "next" === T.swipeDirection ? T.snapGrid[m] : T.snapGrid[m - 1], T.rtl || (d = -d)
                                        }
                                        if (0 !== T.velocity)
                                            c = T.rtl ? Math.abs((-d - T.translate) / T.velocity) : Math.abs((d - T.translate) / T.velocity);
                                        else if (T.params.freeModeSticky)
                                            return void T.slideReset();
                                        T.params.freeModeMomentumBounce && u ? (T.updateProgress(h), T.setWrapperTransition(c), T.setWrapperTranslate(d), T.onTransitionStart(), T.animating = !0, T.wrapper.transitionEnd(function () {
                                            T && L && (T.emit("onMomentumBounce", T), T.setWrapperTransition(T.params.speed), T.setWrapperTranslate(h), T.wrapper.transitionEnd(function () {
                                                T && T.onTransitionEnd()
                                            }))
                                        })) : T.velocity ? (T.updateProgress(d), T.setWrapperTransition(c), T.setWrapperTranslate(d), T.onTransitionStart(), T.animating || (T.animating = !0, T.wrapper.transitionEnd(function () {
                                            T && T.onTransitionEnd()
                                        }))) : T.updateProgress(d), T.updateActiveIndex()
                                    }
                                    return void((!T.params.freeModeMomentum || i >= T.params.longSwipesMs) && (T.updateProgress(), T.updateActiveIndex()))
                                }
                                var v, y = 0,
                                        b = T.slidesSizesGrid[0];
                                for (v = 0; v < T.slidesGrid.length; v += T.params.slidesPerGroup)
                                    "undefined" != typeof T.slidesGrid[v + T.params.slidesPerGroup] ? n >= T.slidesGrid[v] && n < T.slidesGrid[v + T.params.slidesPerGroup] && (y = v, b = T.slidesGrid[v + T.params.slidesPerGroup] - T.slidesGrid[v]) : n >= T.slidesGrid[v] && (y = v, b = T.slidesGrid[T.slidesGrid.length - 1] - T.slidesGrid[T.slidesGrid.length - 2]);
                                var w = (n - T.slidesGrid[y]) / b;
                                if (i > T.params.longSwipesMs) {
                                    if (!T.params.longSwipes)
                                        return void T.slideTo(T.activeIndex);
                                    "next" === T.swipeDirection && (w >= T.params.longSwipesRatio ? T.slideTo(y + T.params.slidesPerGroup) : T.slideTo(y)), "prev" === T.swipeDirection && (w > 1 - T.params.longSwipesRatio ? T.slideTo(y + T.params.slidesPerGroup) : T.slideTo(y))
                                } else {
                                    if (!T.params.shortSwipes)
                                        return void T.slideTo(T.activeIndex);
                                    "next" === T.swipeDirection && T.slideTo(y + T.params.slidesPerGroup), "prev" === T.swipeDirection && T.slideTo(y)
                                }
                            }
                        }, T._slideTo = function (t, e) {
                            return T.slideTo(t, e, !0, !0)
                        }, T.slideTo = function (t, e, i, n) {
                            "undefined" == typeof i && (i = !0), "undefined" == typeof t && (t = 0), t < 0 && (t = 0), T.snapIndex = Math.floor(t / T.params.slidesPerGroup), T.snapIndex >= T.snapGrid.length && (T.snapIndex = T.snapGrid.length - 1);
                            var s = -T.snapGrid[T.snapIndex];
                            T.params.autoplay && T.autoplaying && (n || !T.params.autoplayDisableOnInteraction ? T.pauseAutoplay(e) : T.stopAutoplay()), T.updateProgress(s);
                            for (var r = 0; r < T.slidesGrid.length; r++)
                                -Math.floor(100 * s) >= Math.floor(100 * T.slidesGrid[r]) && (t = r);
                            return !(!T.params.allowSwipeToNext && s < T.translate && s < T.minTranslate()) && (!(!T.params.allowSwipeToPrev && s > T.translate && s > T.maxTranslate() && (T.activeIndex || 0) !== t) && ("undefined" == typeof e && (e = T.params.speed), T.previousIndex = T.activeIndex || 0, T.activeIndex = t, T.rtl && -s === T.translate || !T.rtl && s === T.translate ? (T.params.autoHeight && T.updateAutoHeight(), T.updateClasses(), "slide" !== T.params.effect && T.setWrapperTranslate(s), !1) : (T.updateClasses(), T.onTransitionStart(i), 0 === e ? (T.setWrapperTranslate(s), T.setWrapperTransition(0), T.onTransitionEnd(i)) : (T.setWrapperTranslate(s), T.setWrapperTransition(e), T.animating || (T.animating = !0, T.wrapper.transitionEnd(function () {
                                T && T.onTransitionEnd(i)
                            }))), !0)))
                        }, T.onTransitionStart = function (t) {
                            "undefined" == typeof t && (t = !0), T.params.autoHeight && T.updateAutoHeight(), T.lazy && T.lazy.onTransitionStart(), t && (T.emit("onTransitionStart", T), T.activeIndex !== T.previousIndex && (T.emit("onSlideChangeStart", T), T.activeIndex > T.previousIndex ? T.emit("onSlideNextStart", T) : T.emit("onSlidePrevStart", T)))
                        }, T.onTransitionEnd = function (t) {
                            T.animating = !1, T.setWrapperTransition(0), "undefined" == typeof t && (t = !0), T.lazy && T.lazy.onTransitionEnd(), t && (T.emit("onTransitionEnd", T), T.activeIndex !== T.previousIndex && (T.emit("onSlideChangeEnd", T), T.activeIndex > T.previousIndex ? T.emit("onSlideNextEnd", T) : T.emit("onSlidePrevEnd", T))), T.params.hashnav && T.hashnav && T.hashnav.setHash()
                        }, T.slideNext = function (t, e, i) {
                            if (T.params.loop) {
                                if (T.animating)
                                    return !1;
                                T.fixLoop();
                                T.container[0].clientLeft;
                                return T.slideTo(T.activeIndex + T.params.slidesPerGroup, e, t, i)
                            }
                            return T.slideTo(T.activeIndex + T.params.slidesPerGroup, e, t, i)
                        }, T._slideNext = function (t) {
                            return T.slideNext(!0, t, !0)
                        }, T.slidePrev = function (t, e, i) {
                            if (T.params.loop) {
                                if (T.animating)
                                    return !1;
                                T.fixLoop();
                                T.container[0].clientLeft;
                                return T.slideTo(T.activeIndex - 1, e, t, i)
                            }
                            return T.slideTo(T.activeIndex - 1, e, t, i)
                        }, T._slidePrev = function (t) {
                            return T.slidePrev(!0, t, !0)
                        }, T.slideReset = function (t, e, i) {
                            return T.slideTo(T.activeIndex, e, t)
                        }, T.setWrapperTransition = function (t, e) {
                            T.wrapper.transition(t), "slide" !== T.params.effect && T.effects[T.params.effect] && T.effects[T.params.effect].setTransition(t), T.params.parallax && T.parallax && T.parallax.setTransition(t), T.params.scrollbar && T.scrollbar && T.scrollbar.setTransition(t), T.params.control && T.controller && T.controller.setTransition(t, e), T.emit("onSetTransition", T, t)
                        }, T.setWrapperTranslate = function (t, e, i) {
                            var n = 0,
                                    s = 0,
                                    r = 0;
                            T.isHorizontal() ? n = T.rtl ? -t : t : s = t, T.params.roundLengths && (n = a(n), s = a(s)), T.params.virtualTranslate || (T.support.transforms3d ? T.wrapper.transform("translate3d(" + n + "px, " + s + "px, " + r + "px)") : T.wrapper.transform("translate(" + n + "px, " + s + "px)")), T.translate = T.isHorizontal() ? n : s;
                            var o, l = T.maxTranslate() - T.minTranslate();
                            o = 0 === l ? 0 : (t - T.minTranslate()) / l, o !== T.progress && T.updateProgress(t), e && T.updateActiveIndex(), "slide" !== T.params.effect && T.effects[T.params.effect] && T.effects[T.params.effect].setTranslate(T.translate), T.params.parallax && T.parallax && T.parallax.setTranslate(T.translate), T.params.scrollbar && T.scrollbar && T.scrollbar.setTranslate(T.translate), T.params.control && T.controller && T.controller.setTranslate(T.translate, i), T.emit("onSetTranslate", T, T.translate)
                        }, T.getTranslate = function (t, e) {
                            var i, n, s, r;
                            return "undefined" == typeof e && (e = "x"), T.params.virtualTranslate ? T.rtl ? -T.translate : T.translate : (s = window.getComputedStyle(t, null), window.WebKitCSSMatrix ? (n = s.transform || s.webkitTransform, n.split(",").length > 6 && (n = n.split(", ").map(function (t) {
                                return t.replace(",", ".")
                            }).join(", ")), r = new window.WebKitCSSMatrix("none" === n ? "" : n)) : (r = s.MozTransform || s.OTransform || s.MsTransform || s.msTransform || s.transform || s.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), i = r.toString().split(",")), "x" === e && (n = window.WebKitCSSMatrix ? r.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])), "y" === e && (n = window.WebKitCSSMatrix ? r.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])), T.rtl && n && (n = -n), n || 0)
                        }, T.getWrapperTranslate = function (t) {
                            return "undefined" == typeof t && (t = T.isHorizontal() ? "x" : "y"), T.getTranslate(T.wrapper[0], t)
                        }, T.observers = [], T.initObservers = function () {
                            if (T.params.observeParents)
                                for (var t = T.container.parents(), e = 0; e < t.length; e++)
                                    d(t[e]);
                            d(T.container[0], {
                                childList: !1
                            }), d(T.wrapper[0], {
                                attributes: !1
                            })
                        }, T.disconnectObservers = function () {
                            for (var t = 0; t < T.observers.length; t++)
                                T.observers[t].disconnect();
                            T.observers = []
                        }, T.createLoop = function () {
                            T.wrapper.children("." + T.params.slideClass + "." + T.params.slideDuplicateClass).remove();
                            var t = T.wrapper.children("." + T.params.slideClass);
                            "auto" !== T.params.slidesPerView || T.params.loopedSlides || (T.params.loopedSlides = t.length), T.loopedSlides = parseInt(T.params.loopedSlides || T.params.slidesPerView, 10), T.loopedSlides = T.loopedSlides + T.params.loopAdditionalSlides, T.loopedSlides > t.length && (T.loopedSlides = t.length);
                            var e, i = [],
                                    n = [];
                            for (t.each(function(e, r) {
                            var o = s(this);
                                    e < T.loopedSlides && n.push(r), e < t.length && e >= t.length - T.loopedSlides && i.push(r), o.attr("data-swiper-slide-index", e)
                            }), e = 0; e < n.length; e++)
                                T.wrapper.append(s(n[e].cloneNode(!0)).addClass(T.params.slideDuplicateClass));
                            for (e = i.length - 1; e >= 0; e--)
                                T.wrapper.prepend(s(i[e].cloneNode(!0)).addClass(T.params.slideDuplicateClass))
                        }, T.destroyLoop = function () {
                            T.wrapper.children("." + T.params.slideClass + "." + T.params.slideDuplicateClass).remove(), T.slides.removeAttr("data-swiper-slide-index")
                        }, T.reLoop = function (t) {
                            var e = T.activeIndex - T.loopedSlides;
                            T.destroyLoop(), T.createLoop(), T.updateSlidesSize(), t && T.slideTo(e + T.loopedSlides, 0, !1)
                        }, T.fixLoop = function () {
                            var t;
                            T.activeIndex < T.loopedSlides ? (t = T.slides.length - 3 * T.loopedSlides + T.activeIndex, t += T.loopedSlides, T.slideTo(t, 0, !1, !0)) : ("auto" === T.params.slidesPerView && T.activeIndex >= 2 * T.loopedSlides || T.activeIndex > T.slides.length - 2 * T.params.slidesPerView) && (t = -T.slides.length + T.activeIndex + T.loopedSlides, t += T.loopedSlides, T.slideTo(t, 0, !1, !0))
                        }, T.appendSlide = function (t) {
                            if (T.params.loop && T.destroyLoop(), "object" === ("undefined" == typeof t ? "undefined" : n(t)) && t.length)
                                for (var e = 0; e < t.length; e++)
                                    t[e] && T.wrapper.append(t[e]);
                            else
                                T.wrapper.append(t);
                            T.params.loop && T.createLoop(), T.params.observer && T.support.observer || T.update(!0)
                        }, T.prependSlide = function (t) {
                            T.params.loop && T.destroyLoop();
                            var e = T.activeIndex + 1;
                            if ("object" === ("undefined" == typeof t ? "undefined" : n(t)) && t.length) {
                                for (var i = 0; i < t.length; i++)
                                    t[i] && T.wrapper.prepend(t[i]);
                                e = T.activeIndex + t.length
                            } else
                                T.wrapper.prepend(t);
                            T.params.loop && T.createLoop(), T.params.observer && T.support.observer || T.update(!0), T.slideTo(e, 0, !1)
                        }, T.removeSlide = function (t) {
                            T.params.loop && (T.destroyLoop(), T.slides = T.wrapper.children("." + T.params.slideClass));
                            var e, i = T.activeIndex;
                            if ("object" === ("undefined" == typeof t ? "undefined" : n(t)) && t.length) {
                                for (var s = 0; s < t.length; s++)
                                    e = t[s], T.slides[e] && T.slides.eq(e).remove(), e < i && i--;
                                i = Math.max(i, 0)
                            } else
                                e = t, T.slides[e] && T.slides.eq(e).remove(), e < i && i--, i = Math.max(i, 0);
                            T.params.loop && T.createLoop(), T.params.observer && T.support.observer || T.update(!0), T.params.loop ? T.slideTo(i + T.loopedSlides, 0, !1) : T.slideTo(i, 0, !1)
                        }, T.removeAllSlides = function () {
                            for (var t = [], e = 0; e < T.slides.length; e++)
                                t.push(e);
                            T.removeSlide(t)
                        }, T.effects = {
                            fade: {
                                setTranslate: function () {
                                    for (var t = 0; t < T.slides.length; t++) {
                                        var e = T.slides.eq(t),
                                                i = e[0].swiperSlideOffset,
                                                n = -i;
                                        T.params.virtualTranslate || (n -= T.translate);
                                        var s = 0;
                                        T.isHorizontal() || (s = n, n = 0);
                                        var r = T.params.fade.crossFade ? Math.max(1 - Math.abs(e[0].progress), 0) : 1 + Math.min(Math.max(e[0].progress, -1), 0);
                                        e.css({
                                            opacity: r
                                        }).transform("translate3d(" + n + "px, " + s + "px, 0px)")
                                    }
                                },
                                setTransition: function (t) {
                                    if (T.slides.transition(t), T.params.virtualTranslate && 0 !== t) {
                                        var e = !1;
                                        T.slides.transitionEnd(function () {
                                            if (!e && T) {
                                                e = !0, T.animating = !1;
                                                for (var t = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], i = 0; i < t.length; i++)
                                                    T.wrapper.trigger(t[i])
                                            }
                                        })
                                    }
                                }
                            },
                            flip: {
                                setTranslate: function () {
                                    for (var t = 0; t < T.slides.length; t++) {
                                        var e = T.slides.eq(t),
                                                i = e[0].progress;
                                        T.params.flip.limitRotation && (i = Math.max(Math.min(e[0].progress, 1), -1));
                                        var n = e[0].swiperSlideOffset,
                                                r = -180 * i,
                                                o = r,
                                                a = 0,
                                                l = -n,
                                                c = 0;
                                        if (T.isHorizontal() ? T.rtl && (o = -o) : (c = l, l = 0, a = -o, o = 0), e[0].style.zIndex = -Math.abs(Math.round(i)) + T.slides.length, T.params.flip.slideShadows) {
                                            var p = T.isHorizontal() ? e.find(".swiper-slide-shadow-left") : e.find(".swiper-slide-shadow-top"),
                                                    d = T.isHorizontal() ? e.find(".swiper-slide-shadow-right") : e.find(".swiper-slide-shadow-bottom");
                                            0 === p.length && (p = s('<div class="swiper-slide-shadow-' + (T.isHorizontal() ? "left" : "top") + '"></div>'), e.append(p)), 0 === d.length && (d = s('<div class="swiper-slide-shadow-' + (T.isHorizontal() ? "right" : "bottom") + '"></div>'), e.append(d)), p.length && (p[0].style.opacity = Math.max(-i, 0)), d.length && (d[0].style.opacity = Math.max(i, 0))
                                        }
                                        e.transform("translate3d(" + l + "px, " + c + "px, 0px) rotateX(" + a + "deg) rotateY(" + o + "deg)")
                                    }
                                },
                                setTransition: function (t) {
                                    if (T.slides.transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t), T.params.virtualTranslate && 0 !== t) {
                                        var e = !1;
                                        T.slides.eq(T.activeIndex).transitionEnd(function () {
                                            if (!e && T && s(this).hasClass(T.params.slideActiveClass)) {
                                                e = !0, T.animating = !1;
                                                for (var t = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], i = 0; i < t.length; i++)
                                                    T.wrapper.trigger(t[i])
                                            }
                                        })
                                    }
                                }
                            },
                            cube: {
                                setTranslate: function () {
                                    var t, e = 0;
                                    T.params.cube.shadow && (T.isHorizontal() ? (t = T.wrapper.find(".swiper-cube-shadow"), 0 === t.length && (t = s('<div class="swiper-cube-shadow"></div>'), T.wrapper.append(t)), t.css({
                                        height: T.width + "px"
                                    })) : (t = T.container.find(".swiper-cube-shadow"), 0 === t.length && (t = s('<div class="swiper-cube-shadow"></div>'), T.container.append(t))));
                                    for (var i = 0; i < T.slides.length; i++) {
                                        var n = T.slides.eq(i),
                                                r = 90 * i,
                                                o = Math.floor(r / 360);
                                        T.rtl && (r = -r, o = Math.floor(-r / 360));
                                        var a = Math.max(Math.min(n[0].progress, 1), -1),
                                                l = 0,
                                                c = 0,
                                                p = 0;
                                        i % 4 === 0 ? (l = 4 * -o * T.size, p = 0) : (i - 1) % 4 === 0 ? (l = 0, p = 4 * -o * T.size) : (i - 2) % 4 === 0 ? (l = T.size + 4 * o * T.size, p = T.size) : (i - 3) % 4 === 0 && (l = -T.size, p = 3 * T.size + 4 * T.size * o), T.rtl && (l = -l), T.isHorizontal() || (c = l, l = 0);
                                        var d = "rotateX(" + (T.isHorizontal() ? 0 : -r) + "deg) rotateY(" + (T.isHorizontal() ? r : 0) + "deg) translate3d(" + l + "px, " + c + "px, " + p + "px)";
                                        if (a <= 1 && a > -1 && (e = 90 * i + 90 * a, T.rtl && (e = 90 * -i - 90 * a)), n.transform(d), T.params.cube.slideShadows) {
                                            var h = T.isHorizontal() ? n.find(".swiper-slide-shadow-left") : n.find(".swiper-slide-shadow-top"),
                                                    u = T.isHorizontal() ? n.find(".swiper-slide-shadow-right") : n.find(".swiper-slide-shadow-bottom");
                                            0 === h.length && (h = s('<div class="swiper-slide-shadow-' + (T.isHorizontal() ? "left" : "top") + '"></div>'), n.append(h)), 0 === u.length && (u = s('<div class="swiper-slide-shadow-' + (T.isHorizontal() ? "right" : "bottom") + '"></div>'), n.append(u)), h.length && (h[0].style.opacity = Math.max(-a, 0)), u.length && (u[0].style.opacity = Math.max(a, 0))
                                        }
                                    }
                                    if (T.wrapper.css({
                                        "-webkit-transform-origin": "50% 50% -" + T.size / 2 + "px",
                                        "-moz-transform-origin": "50% 50% -" + T.size / 2 + "px",
                                        "-ms-transform-origin": "50% 50% -" + T.size / 2 + "px",
                                        "transform-origin": "50% 50% -" + T.size / 2 + "px"
                                    }), T.params.cube.shadow)
                                        if (T.isHorizontal())
                                            t.transform("translate3d(0px, " + (T.width / 2 + T.params.cube.shadowOffset) + "px, " + -T.width / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + T.params.cube.shadowScale + ")");
                                        else {
                                            var f = Math.abs(e) - 90 * Math.floor(Math.abs(e) / 90),
                                                    m = 1.5 - (Math.sin(2 * f * Math.PI / 360) / 2 + Math.cos(2 * f * Math.PI / 360) / 2),
                                                    g = T.params.cube.shadowScale,
                                                    v = T.params.cube.shadowScale / m,
                                                    y = T.params.cube.shadowOffset;
                                            t.transform("scale3d(" + g + ", 1, " + v + ") translate3d(0px, " + (T.height / 2 + y) + "px, " + -T.height / 2 / v + "px) rotateX(-90deg)")
                                        }
                                    var b = T.isSafari || T.isUiWebView ? -T.size / 2 : 0;
                                    T.wrapper.transform("translate3d(0px,0," + b + "px) rotateX(" + (T.isHorizontal() ? 0 : e) + "deg) rotateY(" + (T.isHorizontal() ? -e : 0) + "deg)")
                                },
                                setTransition: function (t) {
                                    T.slides.transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t), T.params.cube.shadow && !T.isHorizontal() && T.container.find(".swiper-cube-shadow").transition(t)
                                }
                            },
                            coverflow: {
                                setTranslate: function () {
                                    for (var t = T.translate, e = T.isHorizontal() ? -t + T.width / 2 : -t + T.height / 2, i = T.isHorizontal() ? T.params.coverflow.rotate : -T.params.coverflow.rotate, n = T.params.coverflow.depth, r = 0, o = T.slides.length; r < o; r++) {
                                        var a = T.slides.eq(r),
                                                l = T.slidesSizesGrid[r],
                                                c = a[0].swiperSlideOffset,
                                                p = (e - c - l / 2) / l * T.params.coverflow.modifier,
                                                d = T.isHorizontal() ? i * p : 0,
                                                h = T.isHorizontal() ? 0 : i * p,
                                                u = -n * Math.abs(p),
                                                f = T.isHorizontal() ? 0 : T.params.coverflow.stretch * p,
                                                m = T.isHorizontal() ? T.params.coverflow.stretch * p : 0;
                                        Math.abs(m) < .001 && (m = 0), Math.abs(f) < .001 && (f = 0), Math.abs(u) < .001 && (u = 0), Math.abs(d) < .001 && (d = 0), Math.abs(h) < .001 && (h = 0);
                                        var g = "translate3d(" + m + "px," + f + "px," + u + "px)  rotateX(" + h + "deg) rotateY(" + d + "deg)";
                                        if (a.transform(g), a[0].style.zIndex = -Math.abs(Math.round(p)) + 1, T.params.coverflow.slideShadows) {
                                            var v = T.isHorizontal() ? a.find(".swiper-slide-shadow-left") : a.find(".swiper-slide-shadow-top"),
                                                    y = T.isHorizontal() ? a.find(".swiper-slide-shadow-right") : a.find(".swiper-slide-shadow-bottom");
                                            0 === v.length && (v = s('<div class="swiper-slide-shadow-' + (T.isHorizontal() ? "left" : "top") + '"></div>'), a.append(v)), 0 === y.length && (y = s('<div class="swiper-slide-shadow-' + (T.isHorizontal() ? "right" : "bottom") + '"></div>'), a.append(y)), v.length && (v[0].style.opacity = p > 0 ? p : 0), y.length && (y[0].style.opacity = -p > 0 ? -p : 0)
                                        }
                                    }
                                    if (T.browser.ie) {
                                        var b = T.wrapper[0].style;
                                        b.perspectiveOrigin = e + "px 50%"
                                    }
                                },
                                setTransition: function (t) {
                                    T.slides.transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t)
                                }
                            }
                        }, T.lazy = {
                            initialImageLoaded: !1,
                            loadImageInSlide: function (t, e) {
                                if ("undefined" != typeof t && ("undefined" == typeof e && (e = !0), 0 !== T.slides.length)) {
                                    var i = T.slides.eq(t),
                                            n = i.find(".swiper-lazy:not(.swiper-lazy-loaded):not(.swiper-lazy-loading)");
                                    !i.hasClass("swiper-lazy") || i.hasClass("swiper-lazy-loaded") || i.hasClass("swiper-lazy-loading") || (n = n.add(i[0])), 0 !== n.length && n.each(function () {
                                        var t = s(this);
                                        t.addClass("swiper-lazy-loading");
                                        var n = t.attr("data-background"),
                                                r = t.attr("data-src"),
                                                o = t.attr("data-srcset");
                                        T.loadImage(t[0], r || n, o, !1, function () {
                                            if (n ? (t.css("background-image", 'url("' + n + '")'), t.removeAttr("data-background")) : (o && (t.attr("srcset", o), t.removeAttr("data-srcset")), r && (t.attr("src", r), t.removeAttr("data-src"))), t.addClass("swiper-lazy-loaded").removeClass("swiper-lazy-loading"), i.find(".swiper-lazy-preloader, .preloader").remove(), T.params.loop && e) {
                                                var s = i.attr("data-swiper-slide-index");
                                                if (i.hasClass(T.params.slideDuplicateClass)) {
                                                    var a = T.wrapper.children('[data-swiper-slide-index="' + s + '"]:not(.' + T.params.slideDuplicateClass + ")");
                                                    T.lazy.loadImageInSlide(a.index(), !1)
                                                } else {
                                                    var l = T.wrapper.children("." + T.params.slideDuplicateClass + '[data-swiper-slide-index="' + s + '"]');
                                                    T.lazy.loadImageInSlide(l.index(), !1)
                                                }
                                            }
                                            T.emit("onLazyImageReady", T, i[0], t[0])
                                        }), T.emit("onLazyImageLoad", T, i[0], t[0])
                                    })
                                }
                            },
                            load: function () {
                                var t;
                                if (T.params.watchSlidesVisibility)
                                    T.wrapper.children("." + T.params.slideVisibleClass).each(function () {
                                        T.lazy.loadImageInSlide(s(this).index())
                                    });
                                else if (T.params.slidesPerView > 1)
                                    for (t = T.activeIndex; t < T.activeIndex + T.params.slidesPerView; t++)
                                        T.slides[t] && T.lazy.loadImageInSlide(t);
                                else
                                    T.lazy.loadImageInSlide(T.activeIndex);
                                if (T.params.lazyLoadingInPrevNext)
                                    if (T.params.slidesPerView > 1 || T.params.lazyLoadingInPrevNextAmount && T.params.lazyLoadingInPrevNextAmount > 1) {
                                        var e = T.params.lazyLoadingInPrevNextAmount,
                                                i = T.params.slidesPerView,
                                                n = Math.min(T.activeIndex + i + Math.max(e, i), T.slides.length),
                                                r = Math.max(T.activeIndex - Math.max(i, e), 0);
                                        for (t = T.activeIndex + T.params.slidesPerView; t < n; t++)
                                            T.slides[t] && T.lazy.loadImageInSlide(t);
                                        for (t = r; t < T.activeIndex; t++)
                                            T.slides[t] && T.lazy.loadImageInSlide(t)
                                    } else {
                                        var o = T.wrapper.children("." + T.params.slideNextClass);
                                        o.length > 0 && T.lazy.loadImageInSlide(o.index());
                                        var a = T.wrapper.children("." + T.params.slidePrevClass);
                                        a.length > 0 && T.lazy.loadImageInSlide(a.index())
                                    }
                            },
                            onTransitionStart: function () {
                                T.params.lazyLoading && (T.params.lazyLoadingOnTransitionStart || !T.params.lazyLoadingOnTransitionStart && !T.lazy.initialImageLoaded) && T.lazy.load()
                            },
                            onTransitionEnd: function () {
                                T.params.lazyLoading && !T.params.lazyLoadingOnTransitionStart && T.lazy.load()
                            }
                        }, T.scrollbar = {
                            isTouched: !1,
                            setDragPosition: function (t) {
                                var e = T.scrollbar,
                                        i = T.isHorizontal() ? "touchstart" === t.type || "touchmove" === t.type ? t.targetTouches[0].pageX : t.pageX || t.clientX : "touchstart" === t.type || "touchmove" === t.type ? t.targetTouches[0].pageY : t.pageY || t.clientY,
                                        n = i - e.track.offset()[T.isHorizontal() ? "left" : "top"] - e.dragSize / 2,
                                        s = -T.minTranslate() * e.moveDivider,
                                        r = -T.maxTranslate() * e.moveDivider;
                                n < s ? n = s : n > r && (n = r), n = -n / e.moveDivider, T.updateProgress(n), T.setWrapperTranslate(n, !0)
                            },
                            dragStart: function (t) {
                                var e = T.scrollbar;
                                e.isTouched = !0, t.preventDefault(), t.stopPropagation(), e.setDragPosition(t), clearTimeout(e.dragTimeout), e.track.transition(0), T.params.scrollbarHide && e.track.css("opacity", 1), T.wrapper.transition(100), e.drag.transition(100), T.emit("onScrollbarDragStart", T)
                            },
                            dragMove: function (t) {
                                var e = T.scrollbar;
                                e.isTouched && (t.preventDefault ? t.preventDefault() : t.returnValue = !1, e.setDragPosition(t), T.wrapper.transition(0), e.track.transition(0), e.drag.transition(0), T.emit("onScrollbarDragMove", T))
                            },
                            dragEnd: function (t) {
                                var e = T.scrollbar;
                                e.isTouched && (e.isTouched = !1, T.params.scrollbarHide && (clearTimeout(e.dragTimeout), e.dragTimeout = setTimeout(function () {
                                    e.track.css("opacity", 0), e.track.transition(400)
                                }, 1e3)), T.emit("onScrollbarDragEnd", T), T.params.scrollbarSnapOnRelease && T.slideReset())
                            },
                            enableDraggable: function () {
                                var t = T.scrollbar,
                                        e = T.support.touch ? t.track : document;
                                s(t.track).on(T.touchEvents.start, t.dragStart), s(e).on(T.touchEvents.move, t.dragMove), s(e).on(T.touchEvents.end, t.dragEnd)
                            },
                            disableDraggable: function () {
                                var t = T.scrollbar,
                                        e = T.support.touch ? t.track : document;
                                s(t.track).off(T.touchEvents.start, t.dragStart), s(e).off(T.touchEvents.move, t.dragMove), s(e).off(T.touchEvents.end, t.dragEnd)
                            },
                            set: function () {
                                if (T.params.scrollbar) {
                                    var t = T.scrollbar;
                                    t.track = s(T.params.scrollbar), T.params.uniqueNavElements && "string" == typeof T.params.scrollbar && t.track.length > 1 && 1 === T.container.find(T.params.scrollbar).length && (t.track = T.container.find(T.params.scrollbar)), t.drag = t.track.find(".swiper-scrollbar-drag"), 0 === t.drag.length && (t.drag = s('<div class="swiper-scrollbar-drag"></div>'), t.track.append(t.drag)), t.drag[0].style.width = "", t.drag[0].style.height = "", t.trackSize = T.isHorizontal() ? t.track[0].offsetWidth : t.track[0].offsetHeight, t.divider = T.size / T.virtualSize, t.moveDivider = t.divider * (t.trackSize / T.size), t.dragSize = t.trackSize * t.divider, T.isHorizontal() ? t.drag[0].style.width = t.dragSize + "px" : t.drag[0].style.height = t.dragSize + "px", t.divider >= 1 ? t.track[0].style.display = "none" : t.track[0].style.display = "", T.params.scrollbarHide && (t.track[0].style.opacity = 0)
                                }
                            },
                            setTranslate: function () {
                                if (T.params.scrollbar) {
                                    var t, e = T.scrollbar,
                                            i = (T.translate || 0, e.dragSize);
                                    t = (e.trackSize - e.dragSize) * T.progress, T.rtl && T.isHorizontal() ? (t = -t, t > 0 ? (i = e.dragSize - t, t = 0) : -t + e.dragSize > e.trackSize && (i = e.trackSize + t)) : t < 0 ? (i = e.dragSize + t, t = 0) : t + e.dragSize > e.trackSize && (i = e.trackSize - t), T.isHorizontal() ? (T.support.transforms3d ? e.drag.transform("translate3d(" + t + "px, 0, 0)") : e.drag.transform("translateX(" + t + "px)"), e.drag[0].style.width = i + "px") : (T.support.transforms3d ? e.drag.transform("translate3d(0px, " + t + "px, 0)") : e.drag.transform("translateY(" + t + "px)"), e.drag[0].style.height = i + "px"), T.params.scrollbarHide && (clearTimeout(e.timeout), e.track[0].style.opacity = 1, e.timeout = setTimeout(function () {
                                        e.track[0].style.opacity = 0, e.track.transition(400)
                                    }, 1e3))
                                }
                            },
                            setTransition: function (t) {
                                T.params.scrollbar && T.scrollbar.drag.transition(t)
                            }
                        }, T.controller = {
                            LinearSpline: function (t, e) {
                                this.x = t, this.y = e, this.lastIndex = t.length - 1;
                                var i, n;
                                this.x.length;
                                this.interpolate = function (t) {
                                    return t ? (n = s(this.x, t), i = n - 1, (t - this.x[i]) * (this.y[n] - this.y[i]) / (this.x[n] - this.x[i]) + this.y[i]) : 0
                                };
                                var s = function () {
                                    var t, e, i;
                                    return function (n, s) {
                                        for (e = - 1, t = n.length; t - e > 1; )
                                            n[i = t + e >> 1] <= s ? e = i : t = i;
                                        return t
                                    }
                                }()
                            },
                            getInterpolateFunction: function (t) {
                                T.controller.spline || (T.controller.spline = T.params.loop ? new T.controller.LinearSpline(T.slidesGrid, t.slidesGrid) : new T.controller.LinearSpline(T.snapGrid, t.snapGrid))
                            },
                            setTranslate: function (t, e) {
                                function i(e) {
                                    t = e.rtl && "horizontal" === e.params.direction ? -T.translate : T.translate, "slide" === T.params.controlBy && (T.controller.getInterpolateFunction(e), s = -T.controller.spline.interpolate(-t)), s && "container" !== T.params.controlBy || (n = (e.maxTranslate() - e.minTranslate()) / (T.maxTranslate() - T.minTranslate()), s = (t - T.minTranslate()) * n + e.minTranslate()), T.params.controlInverse && (s = e.maxTranslate() - s), e.updateProgress(s), e.setWrapperTranslate(s, !1, T), e.updateActiveIndex()
                                }
                                var n, s, r = T.params.control;
                                if (T.isArray(r))
                                    for (var o = 0; o < r.length; o++)
                                        r[o] !== e && r[o] instanceof p && i(r[o]);
                                else
                                    r instanceof p && e !== r && i(r)
                            },
                            setTransition: function (t, e) {
                                function i(e) {
                                    e.setWrapperTransition(t, T), 0 !== t && (e.onTransitionStart(), e.wrapper.transitionEnd(function () {
                                        s && (e.params.loop && "slide" === T.params.controlBy && e.fixLoop(), e.onTransitionEnd())
                                    }))
                                }
                                var n, s = T.params.control;
                                if (T.isArray(s))
                                    for (n = 0; n < s.length; n++)
                                        s[n] !== e && s[n] instanceof p && i(s[n]);
                                else
                                    s instanceof p && e !== s && i(s)
                            }
                        }, T.hashnav = {
                            init: function () {
                                if (T.params.hashnav) {
                                    T.hashnav.initialized = !0;
                                    var t = document.location.hash.replace("#", "");
                                    if (t)
                                        for (var e = 0, i = 0, n = T.slides.length; i < n; i++) {
                                            var s = T.slides.eq(i),
                                                    r = s.attr("data-hash");
                                            if (r === t && !s.hasClass(T.params.slideDuplicateClass)) {
                                                var o = s.index();
                                                T.slideTo(o, e, T.params.runCallbacksOnInit, !0)
                                            }
                                        }
                                }
                            },
                            setHash: function () {
                                T.hashnav.initialized && T.params.hashnav && (document.location.hash = T.slides.eq(T.activeIndex).attr("data-hash") || "")
                            }
                        }, T.disableKeyboardControl = function () {
                            T.params.keyboardControl = !1, s(document).off("keydown", h)
                        }, T.enableKeyboardControl = function () {
                            T.params.keyboardControl = !0, s(document).on("keydown", h)
                        }, T.mousewheel = {
                            event: !1,
                            lastScrollTime: (new window.Date).getTime()
                        }, T.params.mousewheelControl) {
                            try {
                                new window.WheelEvent("wheel"), T.mousewheel.event = "wheel"
                            } catch (B) {
                                (window.WheelEvent || T.container[0] && "wheel" in T.container[0]) && (T.mousewheel.event = "wheel")
                            }
                            !T.mousewheel.event && window.WheelEvent, T.mousewheel.event || void 0 === document.onmousewheel || (T.mousewheel.event = "mousewheel"), T.mousewheel.event || (T.mousewheel.event = "DOMMouseScroll")
                        }
                        T.disableMousewheelControl = function () {
                            return !!T.mousewheel.event && (T.container.off(T.mousewheel.event, u), !0)
                        }, T.enableMousewheelControl = function () {
                            return !!T.mousewheel.event && (T.container.on(T.mousewheel.event, u), !0)
                        }, T.parallax = {
                            setTranslate: function () {
                                T.container.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function () {
                                    f(this, T.progress)
                                }), T.slides.each(function () {
                                    var t = s(this);
                                    t.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function () {
                                        var e = Math.min(Math.max(t[0].progress, -1), 1);
                                        f(this, e)
                                    })
                                })
                            },
                            setTransition: function (t) {
                                "undefined" == typeof t && (t = T.params.speed), T.container.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function () {
                                    var e = s(this),
                                            i = parseInt(e.attr("data-swiper-parallax-duration"), 10) || t;
                                    0 === t && (i = 0), e.transition(i)
                                })
                            }
                        }, T._plugins = [];
                        for (var j in T.plugins) {
                            var q = T.plugins[j](T, T.params[j]);
                            q && T._plugins.push(q)
                        }
                        return T.callPlugins = function (t) {
                            for (var e = 0; e < T._plugins.length; e++)
                                t in T._plugins[e] && T._plugins[e][t](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
                        }, T.emitterEventListeners = {}, T.emit = function (t) {
                            T.params[t] && T.params[t](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                            var e;
                            if (T.emitterEventListeners[t])
                                for (e = 0; e < T.emitterEventListeners[t].length; e++)
                                    T.emitterEventListeners[t][e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                            T.callPlugins && T.callPlugins(t, arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
                        }, T.on = function (t, e) {
                            return t = m(t), T.emitterEventListeners[t] || (T.emitterEventListeners[t] = []), T.emitterEventListeners[t].push(e), T
                        }, T.off = function (t, e) {
                            var i;
                            if (t = m(t), "undefined" == typeof e)
                                return T.emitterEventListeners[t] = [], T;
                            if (T.emitterEventListeners[t] && 0 !== T.emitterEventListeners[t].length) {
                                for (i = 0; i < T.emitterEventListeners[t].length; i++)
                                    T.emitterEventListeners[t][i] === e && T.emitterEventListeners[t].splice(i, 1);
                                return T
                            }
                        }, T.once = function (t, e) {
                            t = m(t);
                            var i = function n() {
                                e(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]), T.off(t, n)
                            };
                            return T.on(t, i), T
                        }, T.a11y = {
                            makeFocusable: function (t) {
                                return t.attr("tabIndex", "0"), t
                            },
                            addRole: function (t, e) {
                                return t.attr("role", e), t
                            },
                            addLabel: function (t, e) {
                                return t.attr("aria-label", e), t
                            },
                            disable: function (t) {
                                return t.attr("aria-disabled", !0), t
                            },
                            enable: function (t) {
                                return t.attr("aria-disabled", !1), t
                            },
                            onEnterKey: function (t) {
                                13 === t.keyCode && (s(t.target).is(T.params.nextButton) ? (T.onClickNext(t), T.isEnd ? T.a11y.notify(T.params.lastSlideMessage) : T.a11y.notify(T.params.nextSlideMessage)) : s(t.target).is(T.params.prevButton) && (T.onClickPrev(t), T.isBeginning ? T.a11y.notify(T.params.firstSlideMessage) : T.a11y.notify(T.params.prevSlideMessage)), s(t.target).is("." + T.params.bulletClass) && s(t.target)[0].click())
                            },
                            liveRegion: s('<span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>'),
                            notify: function (t) {
                                var e = T.a11y.liveRegion;
                                0 !== e.length && (e.html(""), e.html(t))
                            },
                            init: function () {
                                T.params.nextButton && T.nextButton && T.nextButton.length > 0 && (T.a11y.makeFocusable(T.nextButton), T.a11y.addRole(T.nextButton, "button"), T.a11y.addLabel(T.nextButton, T.params.nextSlideMessage)), T.params.prevButton && T.prevButton && T.prevButton.length > 0 && (T.a11y.makeFocusable(T.prevButton), T.a11y.addRole(T.prevButton, "button"), T.a11y.addLabel(T.prevButton, T.params.prevSlideMessage)), s(T.container).append(T.a11y.liveRegion)
                            },
                            initPagination: function () {
                                T.params.pagination && T.params.paginationClickable && T.bullets && T.bullets.length && T.bullets.each(function () {
                                    var t = s(this);
                                    T.a11y.makeFocusable(t), T.a11y.addRole(t, "button"), T.a11y.addLabel(t, T.params.paginationBulletMessage.replace(/{{index}}/, t.index() + 1))
                                })
                            },
                            destroy: function () {
                                T.a11y.liveRegion && T.a11y.liveRegion.length > 0 && T.a11y.liveRegion.remove()
                            }
                        }, T.init = function () {
                            T.params.loop && T.createLoop(), T.updateContainerSize(), T.updateSlidesSize(), T.updatePagination(), T.params.scrollbar && T.scrollbar && (T.scrollbar.set(), T.params.scrollbarDraggable && T.scrollbar.enableDraggable()), "slide" !== T.params.effect && T.effects[T.params.effect] && (T.params.loop || T.updateProgress(), T.effects[T.params.effect].setTranslate()), T.params.loop ? T.slideTo(T.params.initialSlide + T.loopedSlides, 0, T.params.runCallbacksOnInit) : (T.slideTo(T.params.initialSlide, 0, T.params.runCallbacksOnInit), 0 === T.params.initialSlide && (T.parallax && T.params.parallax && T.parallax.setTranslate(), T.lazy && T.params.lazyLoading && (T.lazy.load(), T.lazy.initialImageLoaded = !0))), T.attachEvents(), T.params.observer && T.support.observer && T.initObservers(), T.params.preloadImages && !T.params.lazyLoading && T.preloadImages(), T.params.autoplay && T.startAutoplay(), T.params.keyboardControl && T.enableKeyboardControl && T.enableKeyboardControl(), T.params.mousewheelControl && T.enableMousewheelControl && T.enableMousewheelControl(), T.params.hashnav && T.hashnav && T.hashnav.init(), T.params.a11y && T.a11y && T.a11y.init(), T.emit("onInit", T)
                        }, T.cleanupStyles = function () {
                            T.container.removeClass(T.classNames.join(" ")).removeAttr("style"), T.wrapper.removeAttr("style"), T.slides && T.slides.length && T.slides.removeClass([T.params.slideVisibleClass, T.params.slideActiveClass, T.params.slideNextClass, T.params.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-column").removeAttr("data-swiper-row"), T.paginationContainer && T.paginationContainer.length && T.paginationContainer.removeClass(T.params.paginationHiddenClass), T.bullets && T.bullets.length && T.bullets.removeClass(T.params.bulletActiveClass), T.params.prevButton && s(T.params.prevButton).removeClass(T.params.buttonDisabledClass), T.params.nextButton && s(T.params.nextButton).removeClass(T.params.buttonDisabledClass), T.params.scrollbar && T.scrollbar && (T.scrollbar.track && T.scrollbar.track.length && T.scrollbar.track.removeAttr("style"), T.scrollbar.drag && T.scrollbar.drag.length && T.scrollbar.drag.removeAttr("style"))
                        }, T.destroy = function (t, e) {
                            T.detachEvents(), T.stopAutoplay(), T.params.scrollbar && T.scrollbar && T.params.scrollbarDraggable && T.scrollbar.disableDraggable(), T.params.loop && T.destroyLoop(), e && T.cleanupStyles(), T.disconnectObservers(), T.params.keyboardControl && T.disableKeyboardControl && T.disableKeyboardControl(), T.params.mousewheelControl && T.disableMousewheelControl && T.disableMousewheelControl(), T.params.a11y && T.a11y && T.a11y.destroy(), T.emit("onDestroy"), t !== !1 && (T = null)
                        }, T.init(), T
                    }
                };
                r.prototype = {
                    isSafari: function () {
                        var t = navigator.userAgent.toLowerCase();
                        return t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0
                    }(),
                    isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent),
                    isArray: function (t) {
                        return "[object Array]" === Object.prototype.toString.apply(t)
                    },
                    browser: {
                        ie: window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
                        ieTouch: window.navigator.msPointerEnabled && window.navigator.msMaxTouchPoints > 1 || window.navigator.pointerEnabled && window.navigator.maxTouchPoints > 1
                    },
                    device: function () {
                        var t = navigator.userAgent,
                                e = t.match(/(Android);?[\s\/]+([\d.]+)?/),
                                i = t.match(/(iPad).*OS\s([\d_]+)/),
                                n = t.match(/(iPod)(.*OS\s([\d_]+))?/),
                                s = !i && t.match(/(iPhone\sOS)\s([\d_]+)/);
                        return {
                            ios: i || s || n,
                            android: e
                        }
                    }(),
                    support: {
                        touch: window.Modernizr && Modernizr.touch === !0 || function () {
                            return !!("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch)
                        }(),
                        transforms3d: window.Modernizr && Modernizr.csstransforms3d === !0 || function () {
                            var t = document.createElement("div").style;
                            return "webkitPerspective" in t || "MozPerspective" in t || "OPerspective" in t || "MsPerspective" in t || "perspective" in t
                        }(),
                        flexbox: function () {
                            for (var t = document.createElement("div").style, e = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), i = 0; i < e.length; i++)
                                if (e[i] in t)
                                    return !0
                        }(),
                        observer: function () {
                            return "MutationObserver" in window || "WebkitMutationObserver" in window
                        }()
                    },
                    plugins: {}
                };
                for (var o = (function () {
                    var t = function (t) {
                        var e = this,
                                i = 0;
                        for (i = 0; i < t.length; i++)
                            e[i] = t[i];
                        return e.length = t.length, this
                    },
                            e = function (e, i) {
                                var n = [],
                                        s = 0;
                                if (e && !i && e instanceof t)
                                    return e;
                                if (e)
                                    if ("string" == typeof e) {
                                        var r, o, a = e.trim();
                                        if (a.indexOf("<") >= 0 && a.indexOf(">") >= 0) {
                                            var l = "div";
                                            for (0 === a.indexOf("<li") && (l = "ul"), 0 === a.indexOf("<tr") && (l = "tbody"), 0 !== a.indexOf("<td") && 0 !== a.indexOf("<th") || (l = "tr"), 0 === a.indexOf("<tbody") && (l = "table"), 0 === a.indexOf("<option") && (l = "select"), o = document.createElement(l), o.innerHTML = e, s = 0; s < o.childNodes.length; s++)
                                                n.push(o.childNodes[s])
                                        } else
                                            for (r = i || "#" !== e[0] || e.match(/[ .<>:~]/) ? (i || document).querySelectorAll(e) : [document.getElementById(e.split("#")[1])], s = 0; s < r.length; s++)
                                                r[s] && n.push(r[s])
                                    } else if (e.nodeType || e === window || e === document)
                                        n.push(e);
                                    else if (e.length > 0 && e[0].nodeType)
                                        for (s = 0; s < e.length; s++)
                                            n.push(e[s]);
                                return new t(n)
                            };
                    return t.prototype = {
                        addClass: function (t) {
                            if ("undefined" == typeof t)
                                return this;
                            for (var e = t.split(" "), i = 0; i < e.length; i++)
                                for (var n = 0; n < this.length; n++)
                                    this[n].classList.add(e[i]);
                            return this
                        },
                        removeClass: function (t) {
                            for (var e = t.split(" "), i = 0; i < e.length; i++)
                                for (var n = 0; n < this.length; n++)
                                    this[n].classList.remove(e[i]);
                            return this
                        },
                        hasClass: function (t) {
                            return !!this[0] && this[0].classList.contains(t)
                        },
                        toggleClass: function (t) {
                            for (var e = t.split(" "), i = 0; i < e.length; i++)
                                for (var n = 0; n < this.length; n++)
                                    this[n].classList.toggle(e[i]);
                            return this
                        },
                        attr: function (t, e) {
                            if (1 === arguments.length && "string" == typeof t)
                                return this[0] ? this[0].getAttribute(t) : void 0;
                            for (var i = 0; i < this.length; i++)
                                if (2 === arguments.length)
                                    this[i].setAttribute(t, e);
                                else
                                    for (var n in t)
                                        this[i][n] = t[n], this[i].setAttribute(n, t[n]);
                            return this
                        },
                        removeAttr: function (t) {
                            for (var e = 0; e < this.length; e++)
                                this[e].removeAttribute(t);
                            return this
                        },
                        data: function (t, e) {
                            if ("undefined" != typeof e) {
                                for (var i = 0; i < this.length; i++) {
                                    var n = this[i];
                                    n.dom7ElementDataStorage || (n.dom7ElementDataStorage = {}), n.dom7ElementDataStorage[t] = e
                                }
                                return this
                            }
                            if (this[0]) {
                                var s = this[0].getAttribute("data-" + t);
                                return s ? s : this[0].dom7ElementDataStorage && t in this[0].dom7ElementDataStorage ? this[0].dom7ElementDataStorage[t] : void 0
                            }
                        },
                        transform: function (t) {
                            for (var e = 0; e < this.length; e++) {
                                var i = this[e].style;
                                i.webkitTransform = i.MsTransform = i.msTransform = i.MozTransform = i.OTransform = i.transform = t
                            }
                            return this
                        },
                        transition: function (t) {
                            "string" != typeof t && (t += "ms");
                            for (var e = 0; e < this.length; e++) {
                                var i = this[e].style;
                                i.webkitTransitionDuration = i.MsTransitionDuration = i.msTransitionDuration = i.MozTransitionDuration = i.OTransitionDuration = i.transitionDuration = t
                            }
                            return this
                        },
                        on: function (t, i, n, s) {
                            function r(t) {
                                var s = t.target;
                                if (e(s).is(i))
                                    n.call(s, t);
                                else
                                    for (var r = e(s).parents(), o = 0; o < r.length; o++)
                                        e(r[o]).is(i) && n.call(r[o], t)
                            }
                            var o, a, l = t.split(" ");
                            for (o = 0; o < this.length; o++)
                                if ("function" == typeof i || i === !1)
                                    for ("function" == typeof i && (n = arguments[1], s = arguments[2] || !1), a = 0; a < l.length; a++)
                                        this[o].addEventListener(l[a], n, s);
                                else
                                    for (a = 0; a < l.length; a++)
                                        this[o].dom7LiveListeners || (this[o].dom7LiveListeners = []), this[o].dom7LiveListeners.push({
                                            listener: n,
                                            liveListener: r
                                        }), this[o].addEventListener(l[a], r, s);
                            return this
                        },
                        off: function (t, e, i, n) {
                            for (var s = t.split(" "), r = 0; r < s.length; r++)
                                for (var o = 0; o < this.length; o++)
                                    if ("function" == typeof e || e === !1)
                                        "function" == typeof e && (i = arguments[1], n = arguments[2] || !1), this[o].removeEventListener(s[r], i, n);
                                    else if (this[o].dom7LiveListeners)
                                        for (var a = 0; a < this[o].dom7LiveListeners.length; a++)
                                            this[o].dom7LiveListeners[a].listener === i && this[o].removeEventListener(s[r], this[o].dom7LiveListeners[a].liveListener, n);
                            return this
                        },
                        once: function (t, e, i, n) {
                            function s(o) {
                                i(o), r.off(t, e, s, n)
                            }
                            var r = this;
                            "function" == typeof e && (e = !1, i = arguments[1], n = arguments[2]), r.on(t, e, s, n)
                        },
                        trigger: function (t, e) {
                            for (var i = 0; i < this.length; i++) {
                                var n;
                                try {
                                    n = new window.CustomEvent(t, {
                                        detail: e,
                                        bubbles: !0,
                                        cancelable: !0
                                    })
                                } catch (s) {
                                    n = document.createEvent("Event"), n.initEvent(t, !0, !0), n.detail = e
                                }
                                this[i].dispatchEvent(n)
                            }
                            return this
                        },
                        transitionEnd: function (t) {
                            function e(r) {
                                if (r.target === this)
                                    for (t.call(this, r), i = 0; i < n.length; i++)
                                        s.off(n[i], e)
                            }
                            var i, n = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"],
                                    s = this;
                            if (t)
                                for (i = 0; i < n.length; i++)
                                    s.on(n[i], e);
                            return this
                        },
                        width: function () {
                            return this[0] === window ? window.innerWidth : this.length > 0 ? parseFloat(this.css("width")) : null
                        },
                        outerWidth: function (t) {
                            return this.length > 0 ? t ? this[0].offsetWidth + parseFloat(this.css("margin-right")) + parseFloat(this.css("margin-left")) : this[0].offsetWidth : null
                        },
                        height: function () {
                            return this[0] === window ? window.innerHeight : this.length > 0 ? parseFloat(this.css("height")) : null
                        },
                        outerHeight: function (t) {
                            return this.length > 0 ? t ? this[0].offsetHeight + parseFloat(this.css("margin-top")) + parseFloat(this.css("margin-bottom")) : this[0].offsetHeight : null
                        },
                        offset: function () {
                            if (this.length > 0) {
                                var t = this[0],
                                        e = t.getBoundingClientRect(),
                                        i = document.body,
                                        n = t.clientTop || i.clientTop || 0,
                                        s = t.clientLeft || i.clientLeft || 0,
                                        r = window.pageYOffset || t.scrollTop,
                                        o = window.pageXOffset || t.scrollLeft;
                                return {
                                    top: e.top + r - n,
                                    left: e.left + o - s
                                }
                            }
                            return null
                        },
                        css: function (t, e) {
                            var i;
                            if (1 === arguments.length) {
                                if ("string" != typeof t) {
                                    for (i = 0; i < this.length; i++)
                                        for (var n in t)
                                            this[i].style[n] = t[n];
                                    return this
                                }
                                if (this[0])
                                    return window.getComputedStyle(this[0], null).getPropertyValue(t)
                            }
                            if (2 === arguments.length && "string" == typeof t) {
                                for (i = 0; i < this.length; i++)
                                    this[i].style[t] = e;
                                return this
                            }
                            return this
                        },
                        each: function (t) {
                            for (var e = 0; e < this.length; e++)
                                t.call(this[e], e, this[e]);
                            return this
                        },
                        html: function (t) {
                            if ("undefined" == typeof t)
                                return this[0] ? this[0].innerHTML : void 0;
                            for (var e = 0; e < this.length; e++)
                                this[e].innerHTML = t;
                            return this
                        },
                        text: function (t) {
                            if ("undefined" == typeof t)
                                return this[0] ? this[0].textContent.trim() : null;
                            for (var e = 0; e < this.length; e++)
                                this[e].textContent = t;
                            return this
                        },
                        is: function (i) {
                            if (!this[0])
                                return !1;
                            var n, s;
                            if ("string" == typeof i) {
                                var r = this[0];
                                if (r === document)
                                    return i === document;
                                if (r === window)
                                    return i === window;
                                if (r.matches)
                                    return r.matches(i);
                                if (r.webkitMatchesSelector)
                                    return r.webkitMatchesSelector(i);
                                if (r.mozMatchesSelector)
                                    return r.mozMatchesSelector(i);
                                if (r.msMatchesSelector)
                                    return r.msMatchesSelector(i);
                                for (n = e(i), s = 0; s < n.length; s++)
                                    if (n[s] === this[0])
                                        return !0;
                                return !1
                            }
                            if (i === document)
                                return this[0] === document;
                            if (i === window)
                                return this[0] === window;
                            if (i.nodeType || i instanceof t) {
                                for (n = i.nodeType ? [i] : i, s = 0; s < n.length; s++)
                                    if (n[s] === this[0])
                                        return !0;
                                return !1
                            }
                            return !1
                        },
                        index: function () {
                            if (this[0]) {
                                for (var t = this[0], e = 0; null !== (t = t.previousSibling); )
                                    1 === t.nodeType && e++;
                                return e
                            }
                        },
                        eq: function (e) {
                            if ("undefined" == typeof e)
                                return this;
                            var i, n = this.length;
                            return e > n - 1 ? new t([]) : e < 0 ? (i = n + e, new t(i < 0 ? [] : [this[i]])) : new t([this[e]])
                        },
                        append: function (e) {
                            var i, n;
                            for (i = 0; i < this.length; i++)
                                if ("string" == typeof e) {
                                    var s = document.createElement("div");
                                    for (s.innerHTML = e; s.firstChild; )
                                        this[i].appendChild(s.firstChild)
                                } else if (e instanceof t)
                                    for (n = 0; n < e.length; n++)
                                        this[i].appendChild(e[n]);
                                else
                                    this[i].appendChild(e);
                            return this
                        },
                        prepend: function (e) {
                            var i, n;
                            for (i = 0; i < this.length; i++)
                                if ("string" == typeof e) {
                                    var s = document.createElement("div");
                                    for (s.innerHTML = e, n = s.childNodes.length - 1; n >= 0; n--)
                                        this[i].insertBefore(s.childNodes[n], this[i].childNodes[0])
                                } else if (e instanceof t)
                                    for (n = 0; n < e.length; n++)
                                        this[i].insertBefore(e[n], this[i].childNodes[0]);
                                else
                                    this[i].insertBefore(e, this[i].childNodes[0]);
                            return this
                        },
                        insertBefore: function (t) {
                            for (var i = e(t), n = 0; n < this.length; n++)
                                if (1 === i.length)
                                    i[0].parentNode.insertBefore(this[n], i[0]);
                                else if (i.length > 1)
                                    for (var s = 0; s < i.length; s++)
                                        i[s].parentNode.insertBefore(this[n].cloneNode(!0), i[s])
                        },
                        insertAfter: function (t) {
                            for (var i = e(t), n = 0; n < this.length; n++)
                                if (1 === i.length)
                                    i[0].parentNode.insertBefore(this[n], i[0].nextSibling);
                                else if (i.length > 1)
                                    for (var s = 0; s < i.length; s++)
                                        i[s].parentNode.insertBefore(this[n].cloneNode(!0), i[s].nextSibling)
                        },
                        next: function (i) {
                            return new t(this.length > 0 ? i ? this[0].nextElementSibling && e(this[0].nextElementSibling).is(i) ? [this[0].nextElementSibling] : [] : this[0].nextElementSibling ? [this[0].nextElementSibling] : [] : [])
                        },
                        nextAll: function (i) {
                            var n = [],
                                    s = this[0];
                            if (!s)
                                return new t([]);
                            for (; s.nextElementSibling; ) {
                                var r = s.nextElementSibling;
                                i ? e(r).is(i) && n.push(r) : n.push(r), s = r
                            }
                            return new t(n)
                        },
                        prev: function (i) {
                            return new t(this.length > 0 ? i ? this[0].previousElementSibling && e(this[0].previousElementSibling).is(i) ? [this[0].previousElementSibling] : [] : this[0].previousElementSibling ? [this[0].previousElementSibling] : [] : [])
                        },
                        prevAll: function (i) {
                            var n = [],
                                    s = this[0];
                            if (!s)
                                return new t([]);
                            for (; s.previousElementSibling; ) {
                                var r = s.previousElementSibling;
                                i ? e(r).is(i) && n.push(r) : n.push(r), s = r
                            }
                            return new t(n)
                        },
                        parent: function (t) {
                            for (var i = [], n = 0; n < this.length; n++)
                                t ? e(this[n].parentNode).is(t) && i.push(this[n].parentNode) : i.push(this[n].parentNode);
                            return e(e.unique(i))
                        },
                        parents: function i(t) {
                            for (var i = [], n = 0; n < this.length; n++)
                                for (var s = this[n].parentNode; s; )
                                    t ? e(s).is(t) && i.push(s) : i.push(s), s = s.parentNode;
                            return e(e.unique(i))
                        },
                        find: function (e) {
                            for (var i = [], n = 0; n < this.length; n++)
                                for (var s = this[n].querySelectorAll(e), r = 0; r < s.length; r++)
                                    i.push(s[r]);
                            return new t(i)
                        },
                        children: function n(i) {
                            for (var n = [], s = 0; s < this.length; s++)
                                for (var r = this[s].childNodes, o = 0; o < r.length; o++)
                                    i ? 1 === r[o].nodeType && e(r[o]).is(i) && n.push(r[o]) : 1 === r[o].nodeType && n.push(r[o]);
                            return new t(e.unique(n))
                        },
                        remove: function () {
                            for (var t = 0; t < this.length; t++)
                                this[t].parentNode && this[t].parentNode.removeChild(this[t]);
                            return this
                        },
                        add: function () {
                            var t, i, n = this;
                            for (t = 0; t < arguments.length; t++) {
                                var s = e(arguments[t]);
                                for (i = 0; i < s.length; i++)
                                    n[n.length] = s[i], n.length++
                            }
                            return n
                        }
                    }, e.fn = t.prototype, e.unique = function (t) {
                        for (var e = [], i = 0; i < t.length; i++)
                            e.indexOf(t[i]) === -1 && e.push(t[i]);
                        return e
                    }, e
                }()), a = ["jQuery", "Zepto", "Dom7"], l = 0; l < a.length; l++)
                    window[a[l]] && t(window[a[l]]);
                var c;
                c = "undefined" == typeof o ? window.Dom7 || window.Zepto || i : o, c && ("transitionEnd" in c.fn || (c.fn.transitionEnd = function (t) {
                    function e(r) {
                        if (r.target === this)
                            for (t.call(this, r), i = 0; i < n.length; i++)
                                s.off(n[i], e)
                    }
                    var i, n = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"],
                            s = this;
                    if (t)
                        for (i = 0; i < n.length; i++)
                            s.on(n[i], e);
                    return this
                }), "transform" in c.fn || (c.fn.transform = function (t) {
                    for (var e = 0; e < this.length; e++) {
                        var i = this[e].style;
                        i.webkitTransform = i.MsTransform = i.msTransform = i.MozTransform = i.OTransform = i.transform = t
                    }
                    return this
                }), "transition" in c.fn || (c.fn.transition = function (t) {
                    "string" != typeof t && (t += "ms");
                    for (var e = 0; e < this.length; e++) {
                        var i = this[e].style;
                        i.webkitTransitionDuration = i.MsTransitionDuration = i.msTransitionDuration = i.MozTransitionDuration = i.OTransitionDuration = i.transitionDuration = t
                    }
                    return this
                })), window.Swiper = r
            }(), t.exports = window.Swiper
        }).call(e, i(1), i(1))
    }, function (t, e, i) {
        var n;
        (function (t) {
            "use strict";
            var s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
            };
            !function (t) {
                var e = navigator.userAgent;
                t.HTMLPictureElement && /ecko/.test(e) && e.match(/rv\:(\d+)/) && RegExp.$1 < 45 && addEventListener("resize", function () {
                    var e, i = document.createElement("source"),
                            n = function (t) {
                                var e, n, s = t.parentNode;
                                "PICTURE" === s.nodeName.toUpperCase() ? (e = i.cloneNode(), s.insertBefore(e, s.firstElementChild), setTimeout(function () {
                                    s.removeChild(e)
                                })) : (!t._pfLastSize || t.offsetWidth > t._pfLastSize) && (t._pfLastSize = t.offsetWidth, n = t.sizes, t.sizes += ",100vw", setTimeout(function () {
                                    t.sizes = n
                                }))
                            },
                            s = function () {
                                var t, e = document.querySelectorAll("picture > img, img[srcset][sizes]");
                                for (t = 0; t < e.length; t++)
                                    n(e[t])
                            },
                            r = function () {
                                clearTimeout(e), e = setTimeout(s, 99)
                            },
                            o = t.matchMedia && matchMedia("(orientation: landscape)"),
                            a = function () {
                                r(), o && o.addListener && o.addListener(r)
                            };
                    return i.srcset = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", /^[c|i]|d$/.test(document.readyState || "") ? a() : document.addEventListener("DOMContentLoaded", a), r
                }())
            }(window),
                    function (r, o, a) {
                        function l(t) {
                            return " " === t || "\t" === t || "\n" === t || "\f" === t || "\r" === t
                        }

                        function c(t, e) {
                            var i = new r.Image;
                            return i.onerror = function () {
                                P[t] = !1, ot()
                            }, i.onload = function () {
                                P[t] = 1 === i.width, ot()
                            }, i.src = e, "pending"
                        }

                        function p() {
                            q = !1, V = r.devicePixelRatio, W = {}, G = {}, T.DPR = V || 1, U.width = Math.max(r.innerWidth || 0, D.clientWidth), U.height = Math.max(r.innerHeight || 0, D.clientHeight), U.vw = U.width / 100, U.vh = U.height / 100, _ = [U.height, U.width, V].join("-"), U.em = T.getEmValue(), U.rem = U.em
                        }

                        function d(t, e, i, n) {
                            var s, r, o, a;
                            return "saveData" === M.algorithm ? t > 2.7 ? a = i + 1 : (r = e - i, s = Math.pow(t - .6, 1.5), o = r * s, n && (o += .1 * s), a = t + o) : a = i > 1 ? Math.sqrt(t * e) : t, a > i
                        }

                        function h(t) {
                            var e, i = T.getSet(t),
                                    n = !1;
                            "pending" !== i && (n = _, i && (e = T.setRes(i), T.applySetCandidate(e, t))), t[T.ns].evaled = n
                        }

                        function u(t, e) {
                            return t.res - e.res
                        }

                        function f(t, e, i) {
                            var n;
                            return !i && e && (i = t[T.ns].sets, i = i && i[i.length - 1]), n = m(e, i), n && (e = T.makeUrl(e), t[T.ns].curSrc = e, t[T.ns].curCan = n, n.res || rt(n, n.set.sizes)), n
                        }

                        function m(t, e) {
                            var i, n, s;
                            if (t && e)
                                for (s = T.parseSet(e), t = T.makeUrl(t), i = 0; i < s.length; i++)
                                    if (t === T.makeUrl(s[i].url)) {
                                        n = s[i];
                                        break
                                    }
                            return n
                        }

                        function g(t, e) {
                            var i, n, s, r, o = t.getElementsByTagName("source");
                            for (i = 0, n = o.length; i < n; i++)
                                s = o[i], s[T.ns] = !0, r = s.getAttribute("srcset"), r && e.push({
                                    srcset: r,
                                    media: s.getAttribute("media"),
                                    type: s.getAttribute("type"),
                                    sizes: s.getAttribute("sizes")
                                })
                        }

                        function v(t, e) {
                            function i(e) {
                                var i, n = e.exec(t.substring(h));
                                if (n)
                                    return i = n[0], h += i.length, i
                            }

                            function n() {
                                var t, i, n, s, a, l, c, p, d, h = !1,
                                        f = {};
                                for (s = 0; s < o.length; s++)
                                    a = o[s], l = a[a.length - 1], c = a.substring(0, a.length - 1), p = parseInt(c, 10), d = parseFloat(c), tt.test(c) && "w" === l ? ((t || i) && (h = !0), 0 === p ? h = !0 : t = p) : et.test(c) && "x" === l ? ((t || i || n) && (h = !0), d < 0 ? h = !0 : i = d) : tt.test(c) && "h" === l ? ((n || i) && (h = !0), 0 === p ? h = !0 : n = p) : h = !0;
                                h || (f.url = r, t && (f.w = t), i && (f.d = i), n && (f.h = n), n || i || t || (f.d = 1), 1 === f.d && (e.has1x = !0), f.set = e, u.push(f))
                            }

                            function s() {
                                for (i(K), a = "", c = "in descriptor"; ; ) {
                                    if (p = t.charAt(h), "in descriptor" === c)
                                        if (l(p))
                                            a && (o.push(a), a = "", c = "after descriptor");
                                        else {
                                            if ("," === p)
                                                return h += 1, a && o.push(a), void n();
                                            if ("(" === p)
                                                a += p, c = "in parens";
                                            else {
                                                if ("" === p)
                                                    return a && o.push(a), void n();
                                                a += p
                                            }
                                        }
                                    else if ("in parens" === c)
                                        if (")" === p)
                                            a += p, c = "in descriptor";
                                        else {
                                            if ("" === p)
                                                return o.push(a), void n();
                                            a += p
                                        }
                                    else if ("after descriptor" === c)
                                        if (l(p))
                                            ;
                                        else {
                                            if ("" === p)
                                                return void n();
                                            c = "in descriptor", h -= 1
                                        }
                                    h += 1
                                }
                            }
                            for (var r, o, a, c, p, d = t.length, h = 0, u = []; ; ) {
                                if (i(Q), h >= d)
                                    return u;
                                r = i(J), o = [], "," === r.slice(-1) ? (r = r.replace(Z, ""), n()) : s()
                            }
                        }

                        function y(t) {
                            function e(t) {
                                function e() {
                                    s && (r.push(s), s = "")
                                }

                                function i() {
                                    r[0] && (o.push(r), r = [])
                                }
                                for (var n, s = "", r = [], o = [], a = 0, c = 0, p = !1; ; ) {
                                    if (n = t.charAt(c), "" === n)
                                        return e(), i(), o;
                                    if (p) {
                                        if ("*" === n && "/" === t[c + 1]) {
                                            p = !1, c += 2, e();
                                            continue
                                        }
                                        c += 1
                                    } else {
                                        if (l(n)) {
                                            if (t.charAt(c - 1) && l(t.charAt(c - 1)) || !s) {
                                                c += 1;
                                                continue
                                            }
                                            if (0 === a) {
                                                e(), c += 1;
                                                continue
                                            }
                                            n = " "
                                        } else if ("(" === n)
                                            a += 1;
                                        else if (")" === n)
                                            a -= 1;
                                        else {
                                            if ("," === n) {
                                                e(), i(), c += 1;
                                                continue
                                            }
                                            if ("/" === n && "*" === t.charAt(c + 1)) {
                                                p = !0, c += 2;
                                                continue
                                            }
                                        }
                                        s += n, c += 1
                                    }
                                }
                            }

                            function i(t) {
                                return !!(p.test(t) && parseFloat(t) >= 0) || (!!d.test(t) || ("0" === t || "-0" === t || "+0" === t))
                            }
                            var n, s, r, o, a, c, p = /^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i,
                                    d = /^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;
                            for (s = e(t), r = s.length, n = 0; n < r; n++)
                                if (o = s[n], a = o[o.length - 1], i(a)) {
                                    if (c = a, o.pop(), 0 === o.length)
                                        return c;
                                    if (o = o.join(" "), T.matchesMedia(o))
                                        return c
                                }
                            return "100vw"
                        }
                        o.createElement("picture");
                        var b, w, x, _, T = {},
                                S = !1,
                                C = function () {},
                                k = o.createElement("img"),
                                E = k.getAttribute,
                                A = k.setAttribute,
                                $ = k.removeAttribute,
                                D = o.documentElement,
                                P = {},
                                M = {
                                    algorithm: ""
                                },
                                I = "data-pfsrc",
                                N = I + "set",
                                L = navigator.userAgent,
                                z = /rident/.test(L) || /ecko/.test(L) && L.match(/rv\:(\d+)/) && RegExp.$1 > 35,
                                O = "currentSrc",
                                H = /\s+\+?\d+(e\d+)?w/,
                                F = /(\([^)]+\))?\s*(.+)/,
                                R = r.picturefillCFG,
                                B = "position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)",
                                j = "font-size:100%!important;",
                                q = !0,
                                W = {},
                                G = {},
                                V = r.devicePixelRatio,
                                U = {
                                    px: 1,
                                    "in": 96
                                },
                                X = o.createElement("a"),
                                Y = !1,
                                K = /^[ \t\n\r\u000c]+/,
                                Q = /^[, \t\n\r\u000c]+/,
                                J = /^[^ \t\n\r\u000c]+/,
                                Z = /[,]+$/,
                                tt = /^\d+$/,
                                et = /^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/,
                                it = function (t, e, i, n) {
                                    t.addEventListener ? t.addEventListener(e, i, n || !1) : t.attachEvent && t.attachEvent("on" + e, i)
                                },
                                nt = function (t) {
                                    var e = {};
                                    return function (i) {
                                        return i in e || (e[i] = t(i)), e[i]
                                    }
                                },
                                st = function () {
                                    var t = /^([\d\.]+)(em|vw|px)$/,
                                            e = function () {
                                                for (var t = arguments, e = 0, i = t[0]; ++e in t; )
                                                    i = i.replace(t[e], t[++e]);
                                                return i
                                            },
                                            i = nt(function (t) {
                                                return "return " + e((t || "").toLowerCase(), /\band\b/g, "&&", /,/g, "||", /min-([a-z-\s]+):/g, "e.$1>=", /max-([a-z-\s]+):/g, "e.$1<=", /calc([^)]+)/g, "($1)", /(\d+[\.]*[\d]*)([a-z]+)/g, "($1 * e.$2)", /^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi, "") + ";"
                                            });
                                    return function (e, n) {
                                        var s;
                                        if (!(e in W))
                                            if (W[e] = !1, n && (s = e.match(t)))
                                                W[e] = s[1] * U[s[2]];
                                            else
                                                try {
                                                    W[e] = new Function("e", i(e))(U)
                                                } catch (r) {
                                                }
                                        return W[e]
                                    }
                                }(),
                                rt = function (t, e) {
                                    return t.w ? (t.cWidth = T.calcListLength(e || "100vw"), t.res = t.w / t.cWidth) : t.res = t.d, t
                                },
                                ot = function (t) {
                                    if (S) {
                                        var e, i, n, s = t || {};
                                        if (s.elements && 1 === s.elements.nodeType && ("IMG" === s.elements.nodeName.toUpperCase() ? s.elements = [s.elements] : (s.context = s.elements, s.elements = null)), e = s.elements || T.qsa(s.context || o, s.reevaluate || s.reselect ? T.sel : T.selShort), n = e.length) {
                                            for (T.setupRun(s), Y = !0, i = 0; i < n; i++)
                                                T.fillImg(e[i], s);
                                            T.teardownRun(s)
                                        }
                                    }
                                };
                        b = r.console && console.warn ? function (t) {
                            console.warn(t)
                        } : C, O in k || (O = "src"), P["image/jpeg"] = !0, P["image/gif"] = !0, P["image/png"] = !0, P["image/svg+xml"] = o.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1"), T.ns = ("pf" + (new Date).getTime()).substr(0, 9), T.supSrcset = "srcset" in k, T.supSizes = "sizes" in k, T.supPicture = !!r.HTMLPictureElement, T.supSrcset && T.supPicture && !T.supSizes && !function (t) {
                            k.srcset = "data:,a", t.src = "data:,a", T.supSrcset = k.complete === t.complete, T.supPicture = T.supSrcset && T.supPicture
                        }(o.createElement("img")), T.supSrcset && !T.supSizes ? !function () {
                            var t = "data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw==",
                                    e = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",
                                    i = o.createElement("img"),
                                    n = function () {
                                        var t = i.width;
                                        2 === t && (T.supSizes = !0), x = T.supSrcset && !T.supSizes, S = !0, setTimeout(ot)
                                    };
                            i.onload = n, i.onerror = n, i.setAttribute("sizes", "9px"), i.srcset = e + " 1w," + t + " 9w", i.src = e
                        }() : S = !0, T.selShort = "picture>img,img[srcset]", T.sel = T.selShort, T.cfg = M, T.DPR = V || 1, T.u = U, T.types = P, T.setSize = C, T.makeUrl = nt(function (t) {
                            return X.href = t, X.href
                        }), T.qsa = function (t, e) {
                            return "querySelector" in t ? t.querySelectorAll(e) : []
                        }, T.matchesMedia = function () {
                            return r.matchMedia && (matchMedia("(min-width: 0.1em)") || {}).matches ? T.matchesMedia = function (t) {
                                return !t || matchMedia(t).matches
                            } : T.matchesMedia = T.mMQ, T.matchesMedia.apply(this, arguments)
                        }, T.mMQ = function (t) {
                            return !t || st(t)
                        }, T.calcLength = function (t) {
                            var e = st(t, !0) || !1;
                            return e < 0 && (e = !1), e
                        }, T.supportsType = function (t) {
                            return !t || P[t]
                        }, T.parseSize = nt(function (t) {
                            var e = (t || "").match(F);
                            return {
                                media: e && e[1],
                                length: e && e[2]
                            }
                        }), T.parseSet = function (t) {
                            return t.cands || (t.cands = v(t.srcset, t)), t.cands
                        }, T.getEmValue = function () {
                            var t;
                            if (!w && (t = o.body)) {
                                var e = o.createElement("div"),
                                        i = D.style.cssText,
                                        n = t.style.cssText;
                                e.style.cssText = B, D.style.cssText = j, t.style.cssText = j, t.appendChild(e), w = e.offsetWidth, t.removeChild(e), w = parseFloat(w, 10), D.style.cssText = i, t.style.cssText = n
                            }
                            return w || 16
                        }, T.calcListLength = function (t) {
                            if (!(t in G) || M.uT) {
                                var e = T.calcLength(y(t));
                                G[t] = e ? e : U.width
                            }
                            return G[t]
                        }, T.setRes = function (t) {
                            var e;
                            if (t) {
                                e = T.parseSet(t);
                                for (var i = 0, n = e.length; i < n; i++)
                                    rt(e[i], t.sizes)
                            }
                            return e
                        }, T.setRes.res = rt, T.applySetCandidate = function (t, e) {
                            if (t.length) {
                                var i, n, s, r, o, a, l, c, p, h = e[T.ns],
                                        m = T.DPR;
                                if (a = h.curSrc || e[O], l = h.curCan || f(e, a, t[0].set), l && l.set === t[0].set && (p = z && !e.complete && l.res - .1 > m, p || (l.cached = !0, l.res >= m && (o = l))), !o)
                                    for (t.sort(u), r = t.length, o = t[r - 1], n = 0; n < r; n++)
                                        if (i = t[n], i.res >= m) {
                                            s = n - 1, o = t[s] && (p || a !== T.makeUrl(i.url)) && d(t[s].res, i.res, m, t[s].cached) ? t[s] : i;
                                            break
                                        }
                                o && (c = T.makeUrl(o.url), h.curSrc = c, h.curCan = o, c !== a && T.setSrc(e, o), T.setSize(e))
                            }
                        }, T.setSrc = function (t, e) {
                            var i;
                            t.src = e.url, "image/svg+xml" === e.set.type && (i = t.style.width, t.style.width = t.offsetWidth + 1 + "px", t.offsetWidth + 1 && (t.style.width = i))
                        }, T.getSet = function (t) {
                            var e, i, n, s = !1,
                                    r = t[T.ns].sets;
                            for (e = 0; e < r.length && !s; e++)
                                if (i = r[e], i.srcset && T.matchesMedia(i.media) && (n = T.supportsType(i.type))) {
                                    "pending" === n && (i = n), s = i;
                                    break
                                }
                            return s
                        }, T.parseSets = function (t, e, i) {
                            var n, s, r, o, l = e && "PICTURE" === e.nodeName.toUpperCase(),
                                    c = t[T.ns];
                            (c.src === a || i.src) && (c.src = E.call(t, "src"), c.src ? A.call(t, I, c.src) : $.call(t, I)), (c.srcset === a || i.srcset || !T.supSrcset || t.srcset) && (n = E.call(t, "srcset"), c.srcset = n, o = !0), c.sets = [], l && (c.pic = !0, g(e, c.sets)), c.srcset ? (s = {
                                srcset: c.srcset,
                                sizes: E.call(t, "sizes")
                            }, c.sets.push(s), r = (x || c.src) && H.test(c.srcset || ""), r || !c.src || m(c.src, s) || s.has1x || (s.srcset += ", " + c.src, s.cands.push({
                                url: c.src,
                                d: 1,
                                set: s
                            }))) : c.src && c.sets.push({
                                srcset: c.src,
                                sizes: null
                            }), c.curCan = null, c.curSrc = a, c.supported = !(l || s && !T.supSrcset || r && !T.supSizes), o && T.supSrcset && !c.supported && (n ? (A.call(t, N, n), t.srcset = "") : $.call(t, N)), c.supported && !c.srcset && (!c.src && t.src || t.src !== T.makeUrl(c.src)) && (null === c.src ? t.removeAttribute("src") : t.src = c.src), c.parsed = !0
                        }, T.fillImg = function (t, e) {
                            var i, n = e.reselect || e.reevaluate;
                            t[T.ns] || (t[T.ns] = {}), i = t[T.ns], (n || i.evaled !== _) && (i.parsed && !e.reevaluate || T.parseSets(t, t.parentNode, e), i.supported ? i.evaled = _ : h(t))
                        }, T.setupRun = function () {
                            Y && !q && V === r.devicePixelRatio || p()
                        }, T.supPicture ? (ot = C, T.fillImg = C) : !function () {
                            var t, e = r.attachEvent ? /d$|^c/ : /d$|^c|^i/,
                                    i = function c() {
                                        var i = o.readyState || "";
                                        n = setTimeout(c, "loading" === i ? 200 : 999), o.body && (T.fillImgs(), t = t || e.test(i), t && clearTimeout(n))
                                    },
                                    n = setTimeout(i, o.body ? 9 : 99),
                                    s = function (t, e) {
                                        var i, n, s = function r() {
                                            var s = new Date - n;
                                            s < e ? i = setTimeout(r, e - s) : (i = null, t())
                                        };
                                        return function () {
                                            n = new Date, i || (i = setTimeout(s, e))
                                        }
                                    },
                                    a = D.clientHeight,
                                    l = function () {
                                        q = Math.max(r.innerWidth || 0, D.clientWidth) !== U.width || D.clientHeight !== a, a = D.clientHeight, q && T.fillImgs()
                                    };
                            it(r, "resize", s(l, 99)), it(o, "readystatechange", i)
                        }(), T.picturefill = ot, T.fillImgs = ot, T.teardownRun = C, ot._ = T, r.picturefillCFG = {
                            pf: T,
                            push: function (t) {
                                var e = t.shift();
                                "function" == typeof T[e] ? T[e].apply(T, t) : (M[e] = t[0], Y && T.fillImgs({
                                    reselect: !0
                                }))
                            }
                        };
                        for (; R && R.length; )
                            r.picturefillCFG.push(R.shift());
                        r.picturefill = ot, "object" === s(t) && "object" === s(t.exports) ? t.exports = ot : (n = function () {
                            return ot
                        }.call(e, i, e, t), !(n !== a && (t.exports = n))), T.supPicture || (P["image/webp"] = c("image/webp", "data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA=="))
                    }(window, document)
        }).call(e, i(2)(t))
    }, function (t, e, i) {
        (function (t) {
            "use strict";
            var e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
            };
            !function (t) {
                var i = function (e, i) {
                    this.el = t(e), this.options = t.extend({}, t.fn.typed.defaults, i), this.isInput = this.el.is("input"), this.attr = this.options.attr, this.showCursor = !this.isInput && this.options.showCursor, this.elContent = this.attr ? this.el.attr(this.attr) : this.el.text(), this.contentType = this.options.contentType, this.typeSpeed = this.options.typeSpeed, this.startDelay = this.options.startDelay, this.backSpeed = this.options.backSpeed, this.backDelay = this.options.backDelay, this.stringsElement = this.options.stringsElement, this.strings = this.options.strings, this.strPos = 0, this.arrayPos = 0, this.stopNum = 0, this.loop = this.options.loop, this.loopCount = this.options.loopCount, this.curLoop = 0, this.stop = !1, this.cursorChar = this.options.cursorChar, this.shuffle = this.options.shuffle, this.sequence = [], this.build()
                };
                i.prototype = {
                    constructor: i,
                    init: function () {
                        var t = this;
                        t.timeout = setTimeout(function () {
                            for (var e = 0; e < t.strings.length; ++e)
                                t.sequence[e] = e;
                            t.shuffle && (t.sequence = t.shuffleArray(t.sequence)), t.typewrite(t.strings[t.sequence[t.arrayPos]], t.strPos)
                        }, t.startDelay)
                    },
                    build: function () {
                        var e = this;
                        if (this.showCursor === !0 && (this.cursor = t('<span class="typed-cursor">' + this.cursorChar + "</span>"), this.el.after(this.cursor)), this.stringsElement) {
                            e.strings = [], this.stringsElement.hide();
                            var i = this.stringsElement.find("p");
                            t.each(i, function (i, n) {
                                e.strings.push(t(n).html())
                            })
                        }
                        this.init()
                    },
                    typewrite: function (t, e) {
                        if (this.stop !== !0) {
                            var i = Math.round(70 * Math.random()) + this.typeSpeed,
                                    n = this;
                            n.timeout = setTimeout(function () {
                                var i = 0,
                                        s = t.substr(e);
                                if ("^" === s.charAt(0)) {
                                    var r = 1;
                                    /^\^\d+/.test(s) && (s = /\d+/.exec(s)[0], r += s.length, i = parseInt(s)), t = t.substring(0, e) + t.substring(e + r)
                                }
                                if ("html" === n.contentType) {
                                    var o = t.substr(e).charAt(0);
                                    if ("<" === o || "&" === o) {
                                        var a = "",
                                                l = "";
                                        for (l = "<" === o ? ">" : ";"; t.substr(e).charAt(0) !== l; )
                                            a += t.substr(e).charAt(0), e++;
                                        e++, a += l
                                    }
                                }
                                n.timeout = setTimeout(function () {
                                    if (e === t.length) {
                                        if (n.options.onStringTyped(n.arrayPos), n.arrayPos === n.strings.length - 1 && (n.options.callback(), n.curLoop++, n.loop === !1 || n.curLoop === n.loopCount))
                                            return;
                                        n.timeout = setTimeout(function () {
                                            n.backspace(t, e)
                                        }, n.backDelay)
                                    } else {
                                        0 === e && n.options.preStringTyped(n.arrayPos);
                                        var i = t.substr(0, e + 1);
                                        n.attr ? n.el.attr(n.attr, i) : n.isInput ? n.el.val(i) : "html" === n.contentType ? n.el.html(i) : n.el.text(i), e++, n.typewrite(t, e)
                                    }
                                }, i)
                            }, i)
                        }
                    },
                    backspace: function (t, e) {
                        if (this.stop !== !0) {
                            var i = Math.round(70 * Math.random()) + this.backSpeed,
                                    n = this;
                            n.timeout = setTimeout(function () {
                                if ("html" === n.contentType && ">" === t.substr(e).charAt(0)) {
                                    for (var i = "";
                                            "<" !== t.substr(e).charAt(0); )
                                        i -= t.substr(e).charAt(0), e--;
                                    e--, i += "<"
                                }
                                var s = t.substr(0, e);
                                n.attr ? n.el.attr(n.attr, s) : n.isInput ? n.el.val(s) : "html" === n.contentType ? n.el.html(s) : n.el.text(s), e > n.stopNum ? (e--, n.backspace(t, e)) : e <= n.stopNum && (n.arrayPos++, n.arrayPos === n.strings.length ? (n.arrayPos = 0, n.shuffle && (n.sequence = n.shuffleArray(n.sequence)), n.init()) : n.typewrite(n.strings[n.sequence[n.arrayPos]], e))
                            }, i)
                        }
                    },
                    shuffleArray: function (t) {
                        var e, i, n = t.length;
                        if (n)
                            for (; --n; )
                                i = Math.floor(Math.random() * (n + 1)), e = t[i], t[i] = t[n], t[n] = e;
                        return t
                    },
                    reset: function () {
                        var t = this;
                        clearInterval(t.timeout);
                        var e = this.el.attr("id");
                        this.el.after('<span id="' + e + '"/>'), this.el.remove(), "undefined" != typeof this.cursor && this.cursor.remove(), t.options.resetCallback()
                    }
                }, t.fn.typed = function (n) {
                    return this.each(function () {
                        var s = t(this),
                                r = s.data("typed"),
                                o = "object" == ("undefined" == typeof n ? "undefined" : e(n)) && n;
                        r || s.data("typed", r = new i(this, o)), "string" == typeof n && r[n]()
                    })
                }, t.fn.typed.defaults = {
                    strings: ["These are the default values...", "You know what you should do?", "Use your own!", "Have a great day!"],
                    stringsElement: null,
                    typeSpeed: 0,
                    startDelay: 0,
                    backSpeed: 0,
                    shuffle: !1,
                    backDelay: 500,
                    loop: !1,
                    loopCount: !1,
                    showCursor: !0,
                    cursorChar: "|",
                    attr: null,
                    contentType: "html",
                    callback: function () {},
                    preStringTyped: function () {},
                    onStringTyped: function () {},
                    resetCallback: function () {}
                }
            }(t)
        }).call(e, i(1))
    }, function (t, e, i) {
        (function (t) {
            "use strict";
            var e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
            };
            !function (t) {
                var i = {
                    init: function (e) {
                        return this.each(function () {
                            this.self = t(this), i.destroy.call(this.self), this.opt = t.extend(!0, {}, t.fn.raty.defaults, e), i._adjustCallback.call(this), i._adjustNumber.call(this), i._adjustHints.call(this), this.opt.score = i._adjustedScore.call(this, this.opt.score), "img" !== this.opt.starType && i._adjustStarType.call(this), i._adjustPath.call(this), i._createStars.call(this), this.opt.cancel && i._createCancel.call(this), this.opt.precision && i._adjustPrecision.call(this), i._createScore.call(this), i._apply.call(this, this.opt.score), i._setTitle.call(this, this.opt.score), i._target.call(this, this.opt.score), this.opt.readOnly ? i._lock.call(this) : (this.style.cursor = "pointer", i._binds.call(this))
                        })
                    },
                    _adjustCallback: function () {
                        for (var t = ["number", "readOnly", "score", "scoreName", "target", "path"], e = 0; e < t.length; e++)
                            "function" == typeof this.opt[t[e]] && (this.opt[t[e]] = this.opt[t[e]].call(this))
                    },
                    _adjustedScore: function (t) {
                        return t ? i._between(t, 0, this.opt.number) : t
                    },
                    _adjustHints: function () {
                        if (this.opt.hints || (this.opt.hints = []), this.opt.halfShow || this.opt.half)
                            for (var t = this.opt.precision ? 10 : 2, e = 0; e < this.opt.number; e++) {
                                var i = this.opt.hints[e];
                                "[object Array]" !== Object.prototype.toString.call(i) && (i = [i]), this.opt.hints[e] = [];
                                for (var n = 0; n < t; n++) {
                                    var s = i[n],
                                            r = i[i.length - 1];
                                    void 0 === r && (r = null), this.opt.hints[e][n] = void 0 === s ? r : s
                                }
                            }
                    },
                    _adjustNumber: function () {
                        this.opt.number = i._between(this.opt.number, 1, this.opt.numberMax)
                    },
                    _adjustPath: function () {
                        this.opt.path = this.opt.path || "", this.opt.path && "/" !== this.opt.path.charAt(this.opt.path.length - 1) && (this.opt.path += "/")
                    },
                    _adjustPrecision: function () {
                        this.opt.half = !0
                    },
                    _adjustStarType: function () {
                        var t = ["cancelOff", "cancelOn", "starHalf", "starOff", "starOn"];
                        this.opt.path = "";
                        for (var e = 0; e < t.length; e++)
                            this.opt[t[e]] = this.opt[t[e]].replace(".", "-")
                    },
                    _apply: function (t) {
                        i._fill.call(this, t), t && (t > 0 && this.score.val(t), i._roundStars.call(this, t))
                    },
                    _between: function (t, e, i) {
                        return Math.min(Math.max(parseFloat(t), e), i)
                    },
                    _binds: function () {
                        this.cancel && (i._bindOverCancel.call(this), i._bindClickCancel.call(this), i._bindOutCancel.call(this)), i._bindOver.call(this), i._bindClick.call(this), i._bindOut.call(this)
                    },
                    _bindClick: function () {
                        var e = this;
                        e.stars.on("click.raty", function (n) {
                            var s = !0,
                                    r = e.opt.half || e.opt.precision ? e.self.data("score") : this.alt || t(this).data("alt");
                            e.opt.click && (s = e.opt.click.call(e, +r, n)), (s || void 0 === s) && (e.opt.half && !e.opt.precision && (r = i._roundHalfScore.call(e, r)), i._apply.call(e, r))
                        })
                    },
                    _bindClickCancel: function () {
                        var t = this;
                        t.cancel.on("click.raty", function (e) {
                            t.score.removeAttr("value"), t.opt.click && t.opt.click.call(t, null, e)
                        })
                    },
                    _bindOut: function () {
                        var t = this;
                        t.self.on("mouseleave.raty", function (e) {
                            var n = +t.score.val() || void 0;
                            i._apply.call(t, n), i._target.call(t, n, e), i._resetTitle.call(t), t.opt.mouseout && t.opt.mouseout.call(t, n, e)
                        })
                    },
                    _bindOutCancel: function () {
                        var t = this;
                        t.cancel.on("mouseleave.raty", function (e) {
                            var n = t.opt.cancelOff;
                            if ("img" !== t.opt.starType && (n = t.opt.cancelClass + " " + n), i._setIcon.call(t, this, n), t.opt.mouseout) {
                                var s = +t.score.val() || void 0;
                                t.opt.mouseout.call(t, s, e)
                            }
                        })
                    },
                    _bindOver: function () {
                        var t = this,
                                e = t.opt.half ? "mousemove.raty" : "mouseover.raty";
                        t.stars.on(e, function (e) {
                            var n = i._getScoreByPosition.call(t, e, this);
                            i._fill.call(t, n), t.opt.half && (i._roundStars.call(t, n, e), i._setTitle.call(t, n, e), t.self.data("score", n)), i._target.call(t, n, e), t.opt.mouseover && t.opt.mouseover.call(t, n, e)
                        })
                    },
                    _bindOverCancel: function () {
                        var t = this;
                        t.cancel.on("mouseover.raty", function (e) {
                            var n = t.opt.path + t.opt.starOff,
                                    s = t.opt.cancelOn;
                            "img" === t.opt.starType ? t.stars.attr("src", n) : (s = t.opt.cancelClass + " " + s, t.stars.attr("class", n)), i._setIcon.call(t, this, s), i._target.call(t, null, e), t.opt.mouseover && t.opt.mouseover.call(t, null)
                        })
                    },
                    _buildScoreField: function () {
                        return t("<input />", {
                            name: this.opt.scoreName,
                            type: "hidden"
                        }).appendTo(this)
                    },
                    _createCancel: function () {
                        var e = this.opt.path + this.opt.cancelOff,
                                i = t("<" + this.opt.starType + " />", {
                                    title: this.opt.cancelHint,
                                    "class": this.opt.cancelClass
                                });
                        "img" === this.opt.starType ? i.attr({
                            src: e,
                            alt: "x"
                        }) : i.attr("data-alt", "x").addClass(e), "left" === this.opt.cancelPlace ? this.self.prepend("&#160;").prepend(i) : this.self.append("&#160;").append(i), this.cancel = i
                    },
                    _createScore: function () {
                        var e = t(this.opt.targetScore);
                        this.score = e.length ? e : i._buildScoreField.call(this)
                    },
                    _createStars: function () {
                        for (var e = 1; e <= this.opt.number; e++) {
                            var n = i._nameForIndex.call(this, e),
                                    s = {
                                        alt: e,
                                        src: this.opt.path + this.opt[n]
                                    };
                            "img" !== this.opt.starType && (s = {
                                "data-alt": e,
                                "class": s.src
                            }), s.title = i._getHint.call(this, e), t("<" + this.opt.starType + " />", s).appendTo(this), this.opt.space && this.self.append(e < this.opt.number ? "&#160;" : "")
                        }
                        this.stars = this.self.children(this.opt.starType)
                    },
                    _error: function (e) {
                        t(this).text(e), t.error(e)
                    },
                    _fill: function (t) {
                        for (var e = 0, n = 1; n <= this.stars.length; n++) {
                            var s, r = this.stars[n - 1],
                                    o = i._turnOn.call(this, n, t);
                            if (this.opt.iconRange && this.opt.iconRange.length > e) {
                                var a = this.opt.iconRange[e];
                                s = i._getRangeIcon.call(this, a, o), n <= a.range && i._setIcon.call(this, r, s), n === a.range && e++
                            } else
                                s = this.opt[o ? "starOn" : "starOff"], i._setIcon.call(this, r, s)
                        }
                    },
                    _getFirstDecimal: function (t) {
                        var e = t.toString().split(".")[1],
                                i = 0;
                        return e && (i = parseInt(e.charAt(0), 10), "9999" === e.slice(1, 5) && i++), i
                    },
                    _getRangeIcon: function (t, e) {
                        return e ? t.on || this.opt.starOn : t.off || this.opt.starOff
                    },
                    _getScoreByPosition: function (e, n) {
                        var s = parseInt(n.alt || n.getAttribute("data-alt"), 10);
                        if (this.opt.half) {
                            var r = i._getWidth.call(this),
                                    o = parseFloat((e.pageX - t(n).offset().left) / r);
                            s = s - 1 + o
                        }
                        return s
                    },
                    _getHint: function (t, e) {
                        if (0 !== t && !t)
                            return this.opt.noRatedMsg;
                        var n = i._getFirstDecimal.call(this, t),
                                s = Math.ceil(t),
                                r = this.opt.hints[(s || 1) - 1],
                                o = r,
                                a = !e || this.move;
                        return this.opt.precision ? (a && (n = 0 === n ? 9 : n - 1), o = r[n]) : (this.opt.halfShow || this.opt.half) && (n = a && 0 === n ? 1 : n > 5 ? 1 : 0, o = r[n]), "" === o ? "" : o || t
                    },
                    _getWidth: function () {
                        var t = this.stars[0].width || parseFloat(this.stars.eq(0).css("font-size"));
                        return t || i._error.call(this, "Could not get the icon width!"), t
                    },
                    _lock: function () {
                        var t = i._getHint.call(this, this.score.val());
                        this.style.cursor = "", this.title = t, this.score.prop("readonly", !0), this.stars.prop("title", t), this.cancel && this.cancel.hide(), this.self.data("readonly", !0)
                    },
                    _nameForIndex: function (t) {
                        return this.opt.score && this.opt.score >= t ? "starOn" : "starOff"
                    },
                    _resetTitle: function (t) {
                        for (var e = 0; e < this.opt.number; e++)
                            this.stars[e].title = i._getHint.call(this, e + 1)
                    },
                    _roundHalfScore: function (t) {
                        var e = parseInt(t, 10),
                                n = i._getFirstDecimal.call(this, t);
                        return 0 !== n && (n = n > 5 ? 1 : .5), e + n
                    },
                    _roundStars: function (t, e) {
                        var n, s = (t % 1).toFixed(2);
                        if (e || this.move ? n = s > .5 ? "starOn" : "starHalf" : s > this.opt.round.down && (n = "starOn", this.opt.halfShow && s < this.opt.round.up ? n = "starHalf" : s < this.opt.round.full && (n = "starOff")), n) {
                            var r = this.opt[n],
                                    o = this.stars[Math.ceil(t) - 1];
                            i._setIcon.call(this, o, r)
                        }
                    },
                    _setIcon: function (t, e) {
                        t["img" === this.opt.starType ? "src" : "className"] = this.opt.path + e
                    },
                    _setTarget: function (t, e) {
                        e && (e = this.opt.targetFormat.toString().replace("{score}", e)), t.is(":input") ? t.val(e) : t.html(e)
                    },
                    _setTitle: function (t, e) {
                        if (t) {
                            var n = parseInt(Math.ceil(t), 10),
                                    s = this.stars[n - 1];
                            s.title = i._getHint.call(this, t, e)
                        }
                    },
                    _target: function (e, n) {
                        if (this.opt.target) {
                            var s = t(this.opt.target);
                            s.length || i._error.call(this, "Target selector invalid or missing!");
                            var r = n && "mouseover" === n.type;
                            if (void 0 === e)
                                e = this.opt.targetText;
                            else if (null === e)
                                e = r ? this.opt.cancelHint : this.opt.targetText;
                            else {
                                "hint" === this.opt.targetType ? e = i._getHint.call(this, e, n) : this.opt.precision && (e = parseFloat(e).toFixed(1));
                                var o = n && "mousemove" === n.type;
                                r || o || this.opt.targetKeep || (e = this.opt.targetText)
                            }
                            i._setTarget.call(this, s, e)
                        }
                    },
                    _turnOn: function (t, e) {
                        return this.opt.single ? t === e : t <= e
                    },
                    _unlock: function () {
                        this.style.cursor = "pointer", this.removeAttribute("title"), this.score.removeAttr("readonly"), this.self.data("readonly", !1);
                        for (var t = 0; t < this.opt.number; t++)
                            this.stars[t].title = i._getHint.call(this, t + 1);
                        this.cancel && this.cancel.css("display", "")
                    },
                    cancel: function (e) {
                        return this.each(function () {
                            var n = t(this);
                            n.data("readonly") !== !0 && (i[e ? "click" : "score"].call(n, null), this.score.removeAttr("value"))
                        })
                    },
                    click: function (e) {
                        return this.each(function () {
                            t(this).data("readonly") !== !0 && (e = i._adjustedScore.call(this, e), i._apply.call(this, e), this.opt.click && this.opt.click.call(this, e, t.Event("click")), i._target.call(this, e))
                        })
                    },
                    destroy: function () {
                        return this.each(function () {
                            var e = t(this),
                                    i = e.data("raw");
                            i ? e.off(".raty").empty().css({
                                cursor: i.style.cursor
                            }).removeData("readonly") : e.data("raw", e.clone()[0])
                        })
                    },
                    getScore: function () {
                        var t, e = [];
                        return this.each(function () {
                            t = this.score.val(), e.push(t ? +t : void 0)
                        }), e.length > 1 ? e : e[0]
                    },
                    move: function (e) {
                        return this.each(function () {
                            var n = parseInt(e, 10),
                                    s = i._getFirstDecimal.call(this, e);
                            n >= this.opt.number && (n = this.opt.number - 1, s = 10);
                            var r = i._getWidth.call(this),
                                    o = r / 10,
                                    a = t(this.stars[n]),
                                    l = a.offset().left + o * s,
                                    c = t.Event("mousemove", {
                                        pageX: l
                                    });
                            this.move = !0, a.trigger(c), this.move = !1
                        })
                    },
                    readOnly: function (e) {
                        return this.each(function () {
                            var n = t(this);
                            n.data("readonly") !== e && (e ? (n.off(".raty").children("img").off(".raty"), i._lock.call(this)) : (i._binds.call(this), i._unlock.call(this)), n.data("readonly", e))
                        })
                    },
                    reload: function () {
                        return i.set.call(this, {})
                    },
                    score: function () {
                        var e = t(this);
                        return arguments.length ? i.setScore.apply(e, arguments) : i.getScore.call(e)
                    },
                    set: function (e) {
                        return this.each(function () {
                            t(this).raty(t.extend({}, this.opt, e))
                        })
                    },
                    setScore: function (e) {
                        return this.each(function () {
                            t(this).data("readonly") !== !0 && (e = i._adjustedScore.call(this, e), i._apply.call(this, e), i._target.call(this, e))
                        })
                    }
                };
                t.fn.raty = function (n) {
                    return i[n] ? i[n].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" !== ("undefined" == typeof n ? "undefined" : e(n)) && n ? void t.error("Method " + n + " does not exist!") : i.init.apply(this, arguments)
                }, t.fn.raty.defaults = {
                    cancel: !1,
                    cancelClass: "raty-cancel",
                    cancelHint: "Cancel this rating!",
                    cancelOff: "cancel-off.png",
                    cancelOn: "cancel-on.png",
                    cancelPlace: "left",
                    click: void 0,
                    half: !1,
                    halfShow: !0,
                    hints: ["bad", "poor", "regular", "good", "gorgeous"],
                    iconRange: void 0,
                    mouseout: void 0,
                    mouseover: void 0,
                    noRatedMsg: "Not rated yet!",
                    number: 5,
                    numberMax: 20,
                    path: void 0,
                    precision: !1,
                    readOnly: !1,
                    round: {
                        down: .25,
                        full: .6,
                        up: .76
                    },
                    score: void 0,
                    scoreName: "score",
                    single: !1,
                    space: !0,
                    starHalf: "star-half.png",
                    starOff: "star-off.png",
                    starOn: "star-on.png",
                    starType: "img",
                    target: void 0,
                    targetFormat: "{score}",
                    targetKeep: !1,
                    targetScore: void 0,
                    targetText: "",
                    targetType: "hint"
                }
            }(t)
        }).call(e, i(1))
    }, function (t, e, i) {
        var n, s;
        !function (r) {
            n = [i(1)], s = function (t) {
                r(t, document, window, navigator)
            }.apply(e, n), !(void 0 !== s && (t.exports = s))
        }(function (t, e, i, n, s) {
            "use strict";
            var r = 0,
                    o = function () {
                        var e, i = n.userAgent,
                                s = /msie\s\d+/i;
                        return i.search(s) > 0 && (e = s.exec(i).toString(), e = e.split(" ")[1], e < 9) && (t("html").addClass("lt-ie9"), !0)
                    }();
            Function.prototype.bind || (Function.prototype.bind = function (t) {
                var e = this,
                        i = [].slice;
                if ("function" != typeof e)
                    throw new TypeError;
                var n = i.call(arguments, 1),
                        s = function r() {
                            if (this instanceof r) {
                                var s = function () {};
                                s.prototype = e.prototype;
                                var o = new s,
                                        a = e.apply(o, n.concat(i.call(arguments)));
                                return Object(a) === a ? a : o
                            }
                            return e.apply(t, n.concat(i.call(arguments)))
                        };
                return s
            }), Array.prototype.indexOf || (Array.prototype.indexOf = function (t, e) {
                var i;
                if (null == this)
                    throw new TypeError('"this" is null or not defined');
                var n = Object(this),
                        s = n.length >>> 0;
                if (0 === s)
                    return -1;
                var r = +e || 0;
                if (Math.abs(r) === 1 / 0 && (r = 0), r >= s)
                    return -1;
                for (i = Math.max(r >= 0 ? r : s - Math.abs(r), 0); i < s; ) {
                    if (i in n && n[i] === t)
                        return i;
                    i++
                }
                return -1
            });
            var a = '<span class="irs"><span class="irs-line" tabindex="-1"><span class="irs-line-left"></span><span class="irs-line-mid"></span><span class="irs-line-right"></span></span><span class="irs-min">0</span><span class="irs-max">1</span><span class="irs-from">0</span><span class="irs-to">0</span><span class="irs-single">0</span></span><span class="irs-grid"></span><span class="irs-bar"></span>',
                    l = '<span class="irs-bar-edge"></span><span class="irs-shadow shadow-single"></span><span class="irs-slider single"></span>',
                    c = '<span class="irs-shadow shadow-from"></span><span class="irs-shadow shadow-to"></span><span class="irs-slider from"></span><span class="irs-slider to"></span>',
                    p = '<span class="irs-disable-mask"></span>',
                    d = function (n, s, r) {
                        this.VERSION = "2.1.4", this.input = n, this.plugin_count = r, this.current_plugin = 0, this.calc_count = 0, this.update_tm = 0, this.old_from = 0, this.old_to = 0, this.old_min_interval = null, this.raf_id = null, this.dragging = !1, this.force_redraw = !1, this.no_diapason = !1, this.is_key = !1, this.is_update = !1, this.is_start = !0, this.is_finish = !1, this.is_active = !1, this.is_resize = !1, this.is_click = !1, this.$cache = {
                            win: t(i),
                            body: t(e.body),
                            input: t(n),
                            cont: null,
                            rs: null,
                            min: null,
                            max: null,
                            from: null,
                            to: null,
                            single: null,
                            bar: null,
                            line: null,
                            s_single: null,
                            s_from: null,
                            s_to: null,
                            shad_single: null,
                            shad_from: null,
                            shad_to: null,
                            edge: null,
                            grid: null,
                            grid_labels: []
                        }, this.coords = {
                            x_gap: 0,
                            x_pointer: 0,
                            w_rs: 0,
                            w_rs_old: 0,
                            w_handle: 0,
                            p_gap: 0,
                            p_gap_left: 0,
                            p_gap_right: 0,
                            p_step: 0,
                            p_pointer: 0,
                            p_handle: 0,
                            p_single_fake: 0,
                            p_single_real: 0,
                            p_from_fake: 0,
                            p_from_real: 0,
                            p_to_fake: 0,
                            p_to_real: 0,
                            p_bar_x: 0,
                            p_bar_w: 0,
                            grid_gap: 0,
                            big_num: 0,
                            big: [],
                            big_w: [],
                            big_p: [],
                            big_x: []
                        }, this.labels = {
                            w_min: 0,
                            w_max: 0,
                            w_from: 0,
                            w_to: 0,
                            w_single: 0,
                            p_min: 0,
                            p_max: 0,
                            p_from_fake: 0,
                            p_from_left: 0,
                            p_to_fake: 0,
                            p_to_left: 0,
                            p_single_fake: 0,
                            p_single_left: 0
                        };
                        var o, a, l, c = this.$cache.input,
                                p = c.prop("value");
                        o = {
                            type: "single",
                            min: 10,
                            max: 100,
                            from: null,
                            to: null,
                            step: 1,
                            min_interval: 0,
                            max_interval: 0,
                            drag_interval: !1,
                            values: [],
                            p_values: [],
                            from_fixed: !1,
                            from_min: null,
                            from_max: null,
                            from_shadow: !1,
                            to_fixed: !1,
                            to_min: null,
                            to_max: null,
                            to_shadow: !1,
                            prettify_enabled: !0,
                            prettify_separator: " ",
                            prettify: null,
                            force_edges: !1,
                            keyboard: !1,
                            keyboard_step: 5,
                            grid: !1,
                            grid_margin: !0,
                            grid_num: 4,
                            grid_snap: !1,
                            hide_min_max: !1,
                            hide_from_to: !1,
                            prefix: "",
                            postfix: "",
                            max_postfix: "",
                            decorate_both: !0,
                            values_separator: " â€” ",
                            input_values_separator: ";",
                            disable: !1,
                            onStart: null,
                            onChange: null,
                            onFinish: null,
                            onUpdate: null
                        }, a = {
                            type: c.data("type"),
                            min: c.data("min"),
                            max: c.data("max"),
                            from: c.data("from"),
                            to: c.data("to"),
                            step: c.data("step"),
                            min_interval: c.data("minInterval"),
                            max_interval: c.data("maxInterval"),
                            drag_interval: c.data("dragInterval"),
                            values: c.data("values"),
                            from_fixed: c.data("fromFixed"),
                            from_min: c.data("fromMin"),
                            from_max: c.data("fromMax"),
                            from_shadow: c.data("fromShadow"),
                            to_fixed: c.data("toFixed"),
                            to_min: c.data("toMin"),
                            to_max: c.data("toMax"),
                            to_shadow: c.data("toShadow"),
                            prettify_enabled: c.data("prettifyEnabled"),
                            prettify_separator: c.data("prettifySeparator"),
                            force_edges: c.data("forceEdges"),
                            keyboard: c.data("keyboard"),
                            keyboard_step: c.data("keyboardStep"),
                            grid: c.data("grid"),
                            grid_margin: c.data("gridMargin"),
                            grid_num: c.data("gridNum"),
                            grid_snap: c.data("gridSnap"),
                            hide_min_max: c.data("hideMinMax"),
                            hide_from_to: c.data("hideFromTo"),
                            prefix: c.data("prefix"),
                            postfix: c.data("postfix"),
                            max_postfix: c.data("maxPostfix"),
                            decorate_both: c.data("decorateBoth"),
                            values_separator: c.data("valuesSeparator"),
                            input_values_separator: c.data("inputValuesSeparator"),
                            disable: c.data("disable")
                        }, a.values = a.values && a.values.split(",");
                        for (l in a)
                            a.hasOwnProperty(l) && (a[l] || 0 === a[l] || delete a[l]);
                        p && (p = p.split(a.input_values_separator || s.input_values_separator || ";"), p[0] && p[0] == +p[0] && (p[0] = +p[0]), p[1] && p[1] == +p[1] && (p[1] = +p[1]), s && s.values && s.values.length ? (o.from = p[0] && s.values.indexOf(p[0]), o.to = p[1] && s.values.indexOf(p[1])) : (o.from = p[0] && +p[0], o.to = p[1] && +p[1])), t.extend(o, s), t.extend(o, a), this.options = o, this.validate(), this.result = {
                            input: this.$cache.input,
                            slider: null,
                            min: this.options.min,
                            max: this.options.max,
                            from: this.options.from,
                            from_percent: 0,
                            from_value: null,
                            to: this.options.to,
                            to_percent: 0,
                            to_value: null
                        }, this.init()
                    };
            d.prototype = {
                init: function (t) {
                    this.no_diapason = !1, this.coords.p_step = this.convertToPercent(this.options.step, !0), this.target = "base", this.toggleInput(), this.append(), this.setMinMax(), t ? (this.force_redraw = !0, this.calc(!0), this.callOnUpdate()) : (this.force_redraw = !0, this.calc(!0), this.callOnStart()), this.updateScene()
                },
                append: function () {
                    var t = '<span class="irs js-irs-' + this.plugin_count + '"></span>';
                    this.$cache.input.before(t), this.$cache.input.prop("readonly", !0), this.$cache.cont = this.$cache.input.prev(), this.result.slider = this.$cache.cont, this.$cache.cont.html(a), this.$cache.rs = this.$cache.cont.find(".irs"), this.$cache.min = this.$cache.cont.find(".irs-min"), this.$cache.max = this.$cache.cont.find(".irs-max"), this.$cache.from = this.$cache.cont.find(".irs-from"), this.$cache.to = this.$cache.cont.find(".irs-to"), this.$cache.single = this.$cache.cont.find(".irs-single"), this.$cache.bar = this.$cache.cont.find(".irs-bar"), this.$cache.line = this.$cache.cont.find(".irs-line"), this.$cache.grid = this.$cache.cont.find(".irs-grid"), "single" === this.options.type ? (this.$cache.cont.append(l), this.$cache.edge = this.$cache.cont.find(".irs-bar-edge"), this.$cache.s_single = this.$cache.cont.find(".single"), this.$cache.from[0].style.visibility = "hidden", this.$cache.to[0].style.visibility = "hidden", this.$cache.shad_single = this.$cache.cont.find(".shadow-single")) : (this.$cache.cont.append(c), this.$cache.s_from = this.$cache.cont.find(".from"), this.$cache.s_to = this.$cache.cont.find(".to"), this.$cache.shad_from = this.$cache.cont.find(".shadow-from"), this.$cache.shad_to = this.$cache.cont.find(".shadow-to"), this.setTopHandler()), this.options.hide_from_to && (this.$cache.from[0].style.display = "none", this.$cache.to[0].style.display = "none", this.$cache.single[0].style.display = "none"), this.appendGrid(), this.options.disable ? (this.appendDisableMask(), this.$cache.input[0].disabled = !0) : (this.$cache.cont.removeClass("irs-disabled"), this.$cache.input[0].disabled = !1, this.bindEvents()), this.options.drag_interval && (this.$cache.bar[0].style.cursor = "ew-resize")
                },
                setTopHandler: function () {
                    var t = this.options.min,
                            e = this.options.max,
                            i = this.options.from,
                            n = this.options.to;
                    i > t && n === e ? this.$cache.s_from.addClass("type_last") : n < e && this.$cache.s_to.addClass("type_last")
                },
                changeLevel: function (t) {
                    switch (t) {
                        case "single":
                            this.coords.p_gap = this.toFixed(this.coords.p_pointer - this.coords.p_single_fake);
                            break;
                        case "from":
                            this.coords.p_gap = this.toFixed(this.coords.p_pointer - this.coords.p_from_fake), this.$cache.s_from.addClass("state_hover"), this.$cache.s_from.addClass("type_last"), this.$cache.s_to.removeClass("type_last");
                            break;
                        case "to":
                            this.coords.p_gap = this.toFixed(this.coords.p_pointer - this.coords.p_to_fake), this.$cache.s_to.addClass("state_hover"), this.$cache.s_to.addClass("type_last"), this.$cache.s_from.removeClass("type_last");
                            break;
                        case "both":
                            this.coords.p_gap_left = this.toFixed(this.coords.p_pointer - this.coords.p_from_fake), this.coords.p_gap_right = this.toFixed(this.coords.p_to_fake - this.coords.p_pointer), this.$cache.s_to.removeClass("type_last"), this.$cache.s_from.removeClass("type_last")
                    }
                },
                appendDisableMask: function () {
                    this.$cache.cont.append(p), this.$cache.cont.addClass("irs-disabled")
                },
                remove: function () {
                    this.$cache.cont.remove(), this.$cache.cont = null, this.$cache.line.off("keydown.irs_" + this.plugin_count), this.$cache.body.off("touchmove.irs_" + this.plugin_count), this.$cache.body.off("mousemove.irs_" + this.plugin_count), this.$cache.win.off("touchend.irs_" + this.plugin_count), this.$cache.win.off("mouseup.irs_" + this.plugin_count), o && (this.$cache.body.off("mouseup.irs_" + this.plugin_count), this.$cache.body.off("mouseleave.irs_" + this.plugin_count)), this.$cache.grid_labels = [], this.coords.big = [], this.coords.big_w = [], this.coords.big_p = [], this.coords.big_x = [], cancelAnimationFrame(this.raf_id)
                },
                bindEvents: function () {
                    this.no_diapason || (this.$cache.body.on("touchmove.irs_" + this.plugin_count, this.pointerMove.bind(this)), this.$cache.body.on("mousemove.irs_" + this.plugin_count, this.pointerMove.bind(this)), this.$cache.win.on("touchend.irs_" + this.plugin_count, this.pointerUp.bind(this)), this.$cache.win.on("mouseup.irs_" + this.plugin_count, this.pointerUp.bind(this)), this.$cache.line.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.line.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.options.drag_interval && "double" === this.options.type ? (this.$cache.bar.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "both")), this.$cache.bar.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "both"))) : (this.$cache.bar.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.bar.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"))), "single" === this.options.type ? (this.$cache.single.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "single")), this.$cache.s_single.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "single")), this.$cache.shad_single.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.single.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "single")), this.$cache.s_single.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "single")), this.$cache.edge.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.shad_single.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"))) : (this.$cache.single.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, null)), this.$cache.single.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, null)), this.$cache.from.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "from")), this.$cache.s_from.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "from")), this.$cache.to.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "to")), this.$cache.s_to.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "to")), this.$cache.shad_from.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.shad_to.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.from.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "from")), this.$cache.s_from.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "from")), this.$cache.to.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "to")), this.$cache.s_to.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "to")), this.$cache.shad_from.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.shad_to.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"))), this.options.keyboard && this.$cache.line.on("keydown.irs_" + this.plugin_count, this.key.bind(this, "keyboard")), o && (this.$cache.body.on("mouseup.irs_" + this.plugin_count, this.pointerUp.bind(this)), this.$cache.body.on("mouseleave.irs_" + this.plugin_count, this.pointerUp.bind(this))))
                },
                pointerMove: function (t) {
                    if (this.dragging) {
                        var e = t.pageX || t.originalEvent.touches && t.originalEvent.touches[0].pageX;
                        this.coords.x_pointer = e - this.coords.x_gap, this.calc()
                    }
                },
                pointerUp: function (e) {
                    this.current_plugin === this.plugin_count && this.is_active && (this.is_active = !1, this.$cache.cont.find(".state_hover").removeClass("state_hover"), this.force_redraw = !0, o && t("*").prop("unselectable", !1), this.updateScene(), this.restoreOriginalMinInterval(), (t.contains(this.$cache.cont[0], e.target) || this.dragging) && (this.is_finish = !0, this.callOnFinish()), this.dragging = !1)
                },
                pointerDown: function (e, i) {
                    i.preventDefault();
                    var n = i.pageX || i.originalEvent.touches && i.originalEvent.touches[0].pageX;
                    2 !== i.button && ("both" === e && this.setTempMinInterval(), e || (e = this.target), this.current_plugin = this.plugin_count, this.target = e, this.is_active = !0, this.dragging = !0, this.coords.x_gap = this.$cache.rs.offset().left, this.coords.x_pointer = n - this.coords.x_gap, this.calcPointerPercent(), this.changeLevel(e), o && t("*").prop("unselectable", !0), this.$cache.line.trigger("focus"), this.updateScene())
                },
                pointerClick: function (t, e) {
                    e.preventDefault();
                    var i = e.pageX || e.originalEvent.touches && e.originalEvent.touches[0].pageX;
                    2 !== e.button && (this.current_plugin = this.plugin_count, this.target = t, this.is_click = !0, this.coords.x_gap = this.$cache.rs.offset().left, this.coords.x_pointer = +(i - this.coords.x_gap).toFixed(), this.force_redraw = !0, this.calc(), this.$cache.line.trigger("focus"))
                },
                key: function (t, e) {
                    if (!(this.current_plugin !== this.plugin_count || e.altKey || e.ctrlKey || e.shiftKey || e.metaKey)) {
                        switch (e.which) {
                            case 83:
                            case 65:
                            case 40:
                            case 37:
                                e.preventDefault(), this.moveByKey(!1);
                                break;
                            case 87:
                            case 68:
                            case 38:
                            case 39:
                                e.preventDefault(), this.moveByKey(!0)
                        }
                        return !0
                    }
                },
                moveByKey: function (t) {
                    var e = this.coords.p_pointer;
                    t ? e += this.options.keyboard_step : e -= this.options.keyboard_step, this.coords.x_pointer = this.toFixed(this.coords.w_rs / 100 * e), this.is_key = !0, this.calc()
                },
                setMinMax: function () {
                    if (this.options) {
                        if (this.options.hide_min_max)
                            return this.$cache.min[0].style.display = "none", void(this.$cache.max[0].style.display = "none");
                        this.options.values.length ? (this.$cache.min.html(this.decorate(this.options.p_values[this.options.min])), this.$cache.max.html(this.decorate(this.options.p_values[this.options.max]))) : (this.$cache.min.html(this.decorate(this._prettify(this.options.min), this.options.min)), this.$cache.max.html(this.decorate(this._prettify(this.options.max), this.options.max))), this.labels.w_min = this.$cache.min.outerWidth(!1), this.labels.w_max = this.$cache.max.outerWidth(!1)
                    }
                },
                setTempMinInterval: function () {
                    var t = this.result.to - this.result.from;
                    null === this.old_min_interval && (this.old_min_interval = this.options.min_interval), this.options.min_interval = t
                },
                restoreOriginalMinInterval: function () {
                    null !== this.old_min_interval && (this.options.min_interval = this.old_min_interval, this.old_min_interval = null)
                },
                calc: function (t) {
                    if (this.options && (this.calc_count++, (10 === this.calc_count || t) && (this.calc_count = 0, this.coords.w_rs = this.$cache.rs.outerWidth(!1), this.calcHandlePercent()), this.coords.w_rs)) {
                        this.calcPointerPercent();
                        var e = this.getHandleX();
                        switch ("click" === this.target && (this.coords.p_gap = this.coords.p_handle / 2, e = this.getHandleX(), this.options.drag_interval ? this.target = "both_one" : this.target = this.chooseHandle(e)), this.target) {
                            case "base":
                                var i = (this.options.max - this.options.min) / 100,
                                        n = (this.result.from - this.options.min) / i,
                                        s = (this.result.to - this.options.min) / i;
                                this.coords.p_single_real = this.toFixed(n), this.coords.p_from_real = this.toFixed(n), this.coords.p_to_real = this.toFixed(s), this.coords.p_single_real = this.checkDiapason(this.coords.p_single_real, this.options.from_min, this.options.from_max), this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max), this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max), this.coords.p_single_fake = this.convertToFakePercent(this.coords.p_single_real), this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real), this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real), this.target = null;
                                break;
                            case "single":
                                if (this.options.from_fixed)
                                    break;
                                this.coords.p_single_real = this.convertToRealPercent(e), this.coords.p_single_real = this.calcWithStep(this.coords.p_single_real), this.coords.p_single_real = this.checkDiapason(this.coords.p_single_real, this.options.from_min, this.options.from_max), this.coords.p_single_fake = this.convertToFakePercent(this.coords.p_single_real);
                                break;
                            case "from":
                                if (this.options.from_fixed)
                                    break;
                                this.coords.p_from_real = this.convertToRealPercent(e), this.coords.p_from_real = this.calcWithStep(this.coords.p_from_real), this.coords.p_from_real > this.coords.p_to_real && (this.coords.p_from_real = this.coords.p_to_real), this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max), this.coords.p_from_real = this.checkMinInterval(this.coords.p_from_real, this.coords.p_to_real, "from"), this.coords.p_from_real = this.checkMaxInterval(this.coords.p_from_real, this.coords.p_to_real, "from"), this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real);
                                break;
                            case "to":
                                if (this.options.to_fixed)
                                    break;
                                this.coords.p_to_real = this.convertToRealPercent(e), this.coords.p_to_real = this.calcWithStep(this.coords.p_to_real), this.coords.p_to_real < this.coords.p_from_real && (this.coords.p_to_real = this.coords.p_from_real), this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max), this.coords.p_to_real = this.checkMinInterval(this.coords.p_to_real, this.coords.p_from_real, "to"), this.coords.p_to_real = this.checkMaxInterval(this.coords.p_to_real, this.coords.p_from_real, "to"), this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real);
                                break;
                            case "both":
                                if (this.options.from_fixed || this.options.to_fixed)
                                    break;
                                e = this.toFixed(e + .1 * this.coords.p_handle), this.coords.p_from_real = this.convertToRealPercent(e) - this.coords.p_gap_left, this.coords.p_from_real = this.calcWithStep(this.coords.p_from_real), this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max), this.coords.p_from_real = this.checkMinInterval(this.coords.p_from_real, this.coords.p_to_real, "from"), this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real), this.coords.p_to_real = this.convertToRealPercent(e) + this.coords.p_gap_right, this.coords.p_to_real = this.calcWithStep(this.coords.p_to_real), this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max), this.coords.p_to_real = this.checkMinInterval(this.coords.p_to_real, this.coords.p_from_real, "to"), this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real);
                                break;
                            case "both_one":
                                if (this.options.from_fixed || this.options.to_fixed)
                                    break;
                                var r = this.convertToRealPercent(e),
                                        o = this.result.from_percent,
                                        a = this.result.to_percent,
                                        l = a - o,
                                        c = l / 2,
                                        p = r - c,
                                        d = r + c;
                                p < 0 && (p = 0, d = p + l), d > 100 && (d = 100, p = d - l), this.coords.p_from_real = this.calcWithStep(p), this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max), this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real), this.coords.p_to_real = this.calcWithStep(d), this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max), this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real)
                        }
                        "single" === this.options.type ? (this.coords.p_bar_x = this.coords.p_handle / 2, this.coords.p_bar_w = this.coords.p_single_fake, this.result.from_percent = this.coords.p_single_real, this.result.from = this.convertToValue(this.coords.p_single_real), this.options.values.length && (this.result.from_value = this.options.values[this.result.from])) : (this.coords.p_bar_x = this.toFixed(this.coords.p_from_fake + this.coords.p_handle / 2), this.coords.p_bar_w = this.toFixed(this.coords.p_to_fake - this.coords.p_from_fake), this.result.from_percent = this.coords.p_from_real, this.result.from = this.convertToValue(this.coords.p_from_real), this.result.to_percent = this.coords.p_to_real, this.result.to = this.convertToValue(this.coords.p_to_real), this.options.values.length && (this.result.from_value = this.options.values[this.result.from], this.result.to_value = this.options.values[this.result.to])), this.calcMinMax(), this.calcLabels()
                    }
                },
                calcPointerPercent: function () {
                    return this.coords.w_rs ? (this.coords.x_pointer < 0 || isNaN(this.coords.x_pointer) ? this.coords.x_pointer = 0 : this.coords.x_pointer > this.coords.w_rs && (this.coords.x_pointer = this.coords.w_rs), void(this.coords.p_pointer = this.toFixed(this.coords.x_pointer / this.coords.w_rs * 100))) : void(this.coords.p_pointer = 0)
                },
                convertToRealPercent: function (t) {
                    var e = 100 - this.coords.p_handle;
                    return t / e * 100
                },
                convertToFakePercent: function (t) {
                    var e = 100 - this.coords.p_handle;
                    return t / 100 * e
                },
                getHandleX: function () {
                    var t = 100 - this.coords.p_handle,
                            e = this.toFixed(this.coords.p_pointer - this.coords.p_gap);
                    return e < 0 ? e = 0 : e > t && (e = t),
                            e
                },
                calcHandlePercent: function () {
                    "single" === this.options.type ? this.coords.w_handle = this.$cache.s_single.outerWidth(!1) : this.coords.w_handle = this.$cache.s_from.outerWidth(!1), this.coords.p_handle = this.toFixed(this.coords.w_handle / this.coords.w_rs * 100)
                },
                chooseHandle: function (t) {
                    if ("single" === this.options.type)
                        return "single";
                    var e = this.coords.p_from_real + (this.coords.p_to_real - this.coords.p_from_real) / 2;
                    return t >= e ? this.options.to_fixed ? "from" : "to" : this.options.from_fixed ? "to" : "from"
                },
                calcMinMax: function () {
                    this.coords.w_rs && (this.labels.p_min = this.labels.w_min / this.coords.w_rs * 100, this.labels.p_max = this.labels.w_max / this.coords.w_rs * 100)
                },
                calcLabels: function () {
                    this.coords.w_rs && !this.options.hide_from_to && ("single" === this.options.type ? (this.labels.w_single = this.$cache.single.outerWidth(!1), this.labels.p_single_fake = this.labels.w_single / this.coords.w_rs * 100, this.labels.p_single_left = this.coords.p_single_fake + this.coords.p_handle / 2 - this.labels.p_single_fake / 2, this.labels.p_single_left = this.checkEdges(this.labels.p_single_left, this.labels.p_single_fake)) : (this.labels.w_from = this.$cache.from.outerWidth(!1), this.labels.p_from_fake = this.labels.w_from / this.coords.w_rs * 100, this.labels.p_from_left = this.coords.p_from_fake + this.coords.p_handle / 2 - this.labels.p_from_fake / 2, this.labels.p_from_left = this.toFixed(this.labels.p_from_left), this.labels.p_from_left = this.checkEdges(this.labels.p_from_left, this.labels.p_from_fake), this.labels.w_to = this.$cache.to.outerWidth(!1), this.labels.p_to_fake = this.labels.w_to / this.coords.w_rs * 100, this.labels.p_to_left = this.coords.p_to_fake + this.coords.p_handle / 2 - this.labels.p_to_fake / 2, this.labels.p_to_left = this.toFixed(this.labels.p_to_left), this.labels.p_to_left = this.checkEdges(this.labels.p_to_left, this.labels.p_to_fake), this.labels.w_single = this.$cache.single.outerWidth(!1), this.labels.p_single_fake = this.labels.w_single / this.coords.w_rs * 100, this.labels.p_single_left = (this.labels.p_from_left + this.labels.p_to_left + this.labels.p_to_fake) / 2 - this.labels.p_single_fake / 2, this.labels.p_single_left = this.toFixed(this.labels.p_single_left), this.labels.p_single_left = this.checkEdges(this.labels.p_single_left, this.labels.p_single_fake)))
                },
                updateScene: function () {
                    this.raf_id && (cancelAnimationFrame(this.raf_id), this.raf_id = null), clearTimeout(this.update_tm), this.update_tm = null, this.options && (this.drawHandles(), this.is_active ? this.raf_id = requestAnimationFrame(this.updateScene.bind(this)) : this.update_tm = setTimeout(this.updateScene.bind(this), 300))
                },
                drawHandles: function () {
                    this.coords.w_rs = this.$cache.rs.outerWidth(!1), this.coords.w_rs && (this.coords.w_rs !== this.coords.w_rs_old && (this.target = "base", this.is_resize = !0), (this.coords.w_rs !== this.coords.w_rs_old || this.force_redraw) && (this.setMinMax(), this.calc(!0), this.drawLabels(), this.options.grid && (this.calcGridMargin(), this.calcGridLabels()), this.force_redraw = !0, this.coords.w_rs_old = this.coords.w_rs, this.drawShadow()), this.coords.w_rs && (this.dragging || this.force_redraw || this.is_key) && ((this.old_from !== this.result.from || this.old_to !== this.result.to || this.force_redraw || this.is_key) && (this.drawLabels(), this.$cache.bar[0].style.left = this.coords.p_bar_x + "%", this.$cache.bar[0].style.width = this.coords.p_bar_w + "%", "single" === this.options.type ? (this.$cache.s_single[0].style.left = this.coords.p_single_fake + "%", this.$cache.single[0].style.left = this.labels.p_single_left + "%", this.options.values.length ? this.$cache.input.prop("value", this.result.from_value) : this.$cache.input.prop("value", this.result.from), this.$cache.input.data("from", this.result.from)) : (this.$cache.s_from[0].style.left = this.coords.p_from_fake + "%", this.$cache.s_to[0].style.left = this.coords.p_to_fake + "%", (this.old_from !== this.result.from || this.force_redraw) && (this.$cache.from[0].style.left = this.labels.p_from_left + "%"), (this.old_to !== this.result.to || this.force_redraw) && (this.$cache.to[0].style.left = this.labels.p_to_left + "%"), this.$cache.single[0].style.left = this.labels.p_single_left + "%", this.options.values.length ? this.$cache.input.prop("value", this.result.from_value + this.options.input_values_separator + this.result.to_value) : this.$cache.input.prop("value", this.result.from + this.options.input_values_separator + this.result.to), this.$cache.input.data("from", this.result.from), this.$cache.input.data("to", this.result.to)), this.old_from === this.result.from && this.old_to === this.result.to || this.is_start || this.$cache.input.trigger("change"), this.old_from = this.result.from, this.old_to = this.result.to, this.is_resize || this.is_update || this.is_start || this.is_finish || this.callOnChange(), (this.is_key || this.is_click) && (this.is_key = !1, this.is_click = !1, this.callOnFinish()), this.is_update = !1, this.is_resize = !1, this.is_finish = !1), this.is_start = !1, this.is_key = !1, this.is_click = !1, this.force_redraw = !1))
                },
                drawLabels: function () {
                    if (this.options) {
                        var t, e, i, n = this.options.values.length,
                                s = this.options.p_values;
                        if (!this.options.hide_from_to)
                            if ("single" === this.options.type)
                                n ? (t = this.decorate(s[this.result.from]), this.$cache.single.html(t)) : (t = this.decorate(this._prettify(this.result.from), this.result.from), this.$cache.single.html(t)), this.calcLabels(), this.labels.p_single_left < this.labels.p_min + 1 ? this.$cache.min[0].style.visibility = "hidden" : this.$cache.min[0].style.visibility = "visible", this.labels.p_single_left + this.labels.p_single_fake > 100 - this.labels.p_max - 1 ? this.$cache.max[0].style.visibility = "hidden" : this.$cache.max[0].style.visibility = "visible";
                            else {
                                n ? (this.options.decorate_both ? (t = this.decorate(s[this.result.from]), t += this.options.values_separator, t += this.decorate(s[this.result.to])) : t = this.decorate(s[this.result.from] + this.options.values_separator + s[this.result.to]), e = this.decorate(s[this.result.from]), i = this.decorate(s[this.result.to]), this.$cache.single.html(t), this.$cache.from.html(e), this.$cache.to.html(i)) : (this.options.decorate_both ? (t = this.decorate(this._prettify(this.result.from), this.result.from), t += this.options.values_separator, t += this.decorate(this._prettify(this.result.to), this.result.to)) : t = this.decorate(this._prettify(this.result.from) + this.options.values_separator + this._prettify(this.result.to), this.result.to), e = this.decorate(this._prettify(this.result.from), this.result.from), i = this.decorate(this._prettify(this.result.to), this.result.to), this.$cache.single.html(t), this.$cache.from.html(e), this.$cache.to.html(i)), this.calcLabels();
                                var r = Math.min(this.labels.p_single_left, this.labels.p_from_left),
                                        o = this.labels.p_single_left + this.labels.p_single_fake,
                                        a = this.labels.p_to_left + this.labels.p_to_fake,
                                        l = Math.max(o, a);
                                this.labels.p_from_left + this.labels.p_from_fake >= this.labels.p_to_left ? (this.$cache.from[0].style.visibility = "hidden", this.$cache.to[0].style.visibility = "hidden", this.$cache.single[0].style.visibility = "visible", this.result.from === this.result.to ? ("from" === this.target ? this.$cache.from[0].style.visibility = "visible" : "to" === this.target ? this.$cache.to[0].style.visibility = "visible" : this.target || (this.$cache.from[0].style.visibility = "visible"), this.$cache.single[0].style.visibility = "hidden", l = a) : (this.$cache.from[0].style.visibility = "hidden", this.$cache.to[0].style.visibility = "hidden", this.$cache.single[0].style.visibility = "visible", l = Math.max(o, a))) : (this.$cache.from[0].style.visibility = "visible", this.$cache.to[0].style.visibility = "visible", this.$cache.single[0].style.visibility = "hidden"), r < this.labels.p_min + 1 ? this.$cache.min[0].style.visibility = "hidden" : this.$cache.min[0].style.visibility = "visible", l > 100 - this.labels.p_max - 1 ? this.$cache.max[0].style.visibility = "hidden" : this.$cache.max[0].style.visibility = "visible"
                            }
                    }
                },
                drawShadow: function () {
                    var t, e, i, n, s = this.options,
                            r = this.$cache,
                            o = "number" == typeof s.from_min && !isNaN(s.from_min),
                            a = "number" == typeof s.from_max && !isNaN(s.from_max),
                            l = "number" == typeof s.to_min && !isNaN(s.to_min),
                            c = "number" == typeof s.to_max && !isNaN(s.to_max);
                    "single" === s.type ? s.from_shadow && (o || a) ? (t = this.convertToPercent(o ? s.from_min : s.min), e = this.convertToPercent(a ? s.from_max : s.max) - t, t = this.toFixed(t - this.coords.p_handle / 100 * t), e = this.toFixed(e - this.coords.p_handle / 100 * e), t += this.coords.p_handle / 2, r.shad_single[0].style.display = "block", r.shad_single[0].style.left = t + "%", r.shad_single[0].style.width = e + "%") : r.shad_single[0].style.display = "none" : (s.from_shadow && (o || a) ? (t = this.convertToPercent(o ? s.from_min : s.min), e = this.convertToPercent(a ? s.from_max : s.max) - t, t = this.toFixed(t - this.coords.p_handle / 100 * t), e = this.toFixed(e - this.coords.p_handle / 100 * e), t += this.coords.p_handle / 2, r.shad_from[0].style.display = "block", r.shad_from[0].style.left = t + "%", r.shad_from[0].style.width = e + "%") : r.shad_from[0].style.display = "none", s.to_shadow && (l || c) ? (i = this.convertToPercent(l ? s.to_min : s.min), n = this.convertToPercent(c ? s.to_max : s.max) - i, i = this.toFixed(i - this.coords.p_handle / 100 * i), n = this.toFixed(n - this.coords.p_handle / 100 * n), i += this.coords.p_handle / 2, r.shad_to[0].style.display = "block", r.shad_to[0].style.left = i + "%", r.shad_to[0].style.width = n + "%") : r.shad_to[0].style.display = "none")
                },
                callOnStart: function () {
                    this.options.onStart && "function" == typeof this.options.onStart && this.options.onStart(this.result)
                },
                callOnChange: function () {
                    this.options.onChange && "function" == typeof this.options.onChange && this.options.onChange(this.result)
                },
                callOnFinish: function () {
                    this.options.onFinish && "function" == typeof this.options.onFinish && this.options.onFinish(this.result)
                },
                callOnUpdate: function () {
                    this.options.onUpdate && "function" == typeof this.options.onUpdate && this.options.onUpdate(this.result)
                },
                toggleInput: function () {
                    this.$cache.input.toggleClass("irs-hidden-input")
                },
                convertToPercent: function (t, e) {
                    var i, n, s = this.options.max - this.options.min,
                            r = s / 100;
                    return s ? (i = e ? t : t - this.options.min, n = i / r, this.toFixed(n)) : (this.no_diapason = !0, 0)
                },
                convertToValue: function (t) {
                    var e, i, n = this.options.min,
                            s = this.options.max,
                            r = n.toString().split(".")[1],
                            o = s.toString().split(".")[1],
                            a = 0,
                            l = 0;
                    if (0 === t)
                        return this.options.min;
                    if (100 === t)
                        return this.options.max;
                    r && (e = r.length, a = e), o && (i = o.length, a = i), e && i && (a = e >= i ? e : i), n < 0 && (l = Math.abs(n), n = +(n + l).toFixed(a), s = +(s + l).toFixed(a));
                    var c, p = (s - n) / 100 * t + n,
                            d = this.options.step.toString().split(".")[1];
                    return d ? p = +p.toFixed(d.length) : (p /= this.options.step, p *= this.options.step, p = +p.toFixed(0)), l && (p -= l), c = d ? +p.toFixed(d.length) : this.toFixed(p), c < this.options.min ? c = this.options.min : c > this.options.max && (c = this.options.max), c
                },
                calcWithStep: function (t) {
                    var e = Math.round(t / this.coords.p_step) * this.coords.p_step;
                    return e > 100 && (e = 100), 100 === t && (e = 100), this.toFixed(e)
                },
                checkMinInterval: function (t, e, i) {
                    var n, s, r = this.options;
                    return r.min_interval ? (n = this.convertToValue(t), s = this.convertToValue(e), "from" === i ? s - n < r.min_interval && (n = s - r.min_interval) : n - s < r.min_interval && (n = s + r.min_interval), this.convertToPercent(n)) : t
                },
                checkMaxInterval: function (t, e, i) {
                    var n, s, r = this.options;
                    return r.max_interval ? (n = this.convertToValue(t), s = this.convertToValue(e), "from" === i ? s - n > r.max_interval && (n = s - r.max_interval) : n - s > r.max_interval && (n = s + r.max_interval), this.convertToPercent(n)) : t
                },
                checkDiapason: function (t, e, i) {
                    var n = this.convertToValue(t),
                            s = this.options;
                    return "number" != typeof e && (e = s.min), "number" != typeof i && (i = s.max), n < e && (n = e), n > i && (n = i), this.convertToPercent(n)
                },
                toFixed: function (t) {
                    return t = t.toFixed(9), +t
                },
                _prettify: function (t) {
                    return this.options.prettify_enabled ? this.options.prettify && "function" == typeof this.options.prettify ? this.options.prettify(t) : this.prettify(t) : t
                },
                prettify: function (t) {
                    var e = t.toString();
                    return e.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + this.options.prettify_separator)
                },
                checkEdges: function (t, e) {
                    return this.options.force_edges ? (t < 0 ? t = 0 : t > 100 - e && (t = 100 - e), this.toFixed(t)) : this.toFixed(t)
                },
                validate: function () {
                    var t, e, i = this.options,
                            n = this.result,
                            s = i.values,
                            r = s.length;
                    if ("string" == typeof i.min && (i.min = +i.min), "string" == typeof i.max && (i.max = +i.max), "string" == typeof i.from && (i.from = +i.from), "string" == typeof i.to && (i.to = +i.to), "string" == typeof i.step && (i.step = +i.step), "string" == typeof i.from_min && (i.from_min = +i.from_min), "string" == typeof i.from_max && (i.from_max = +i.from_max), "string" == typeof i.to_min && (i.to_min = +i.to_min), "string" == typeof i.to_max && (i.to_max = +i.to_max), "string" == typeof i.keyboard_step && (i.keyboard_step = +i.keyboard_step), "string" == typeof i.grid_num && (i.grid_num = +i.grid_num), i.max < i.min && (i.max = i.min), r)
                        for (i.p_values = [], i.min = 0, i.max = r - 1, i.step = 1, i.grid_num = i.max, i.grid_snap = !0, e = 0; e < r; e++)
                            t = +s[e], isNaN(t) ? t = s[e] : (s[e] = t, t = this._prettify(t)), i.p_values.push(t);
                    ("number" != typeof i.from || isNaN(i.from)) && (i.from = i.min), ("number" != typeof i.to || isNaN(i.from)) && (i.to = i.max), "single" === i.type ? (i.from < i.min && (i.from = i.min), i.from > i.max && (i.from = i.max)) : ((i.from < i.min || i.from > i.max) && (i.from = i.min), (i.to > i.max || i.to < i.min) && (i.to = i.max), i.from > i.to && (i.from = i.to)), ("number" != typeof i.step || isNaN(i.step) || !i.step || i.step < 0) && (i.step = 1), ("number" != typeof i.keyboard_step || isNaN(i.keyboard_step) || !i.keyboard_step || i.keyboard_step < 0) && (i.keyboard_step = 5), "number" == typeof i.from_min && i.from < i.from_min && (i.from = i.from_min), "number" == typeof i.from_max && i.from > i.from_max && (i.from = i.from_max), "number" == typeof i.to_min && i.to < i.to_min && (i.to = i.to_min), "number" == typeof i.to_max && i.from > i.to_max && (i.to = i.to_max), n && (n.min !== i.min && (n.min = i.min), n.max !== i.max && (n.max = i.max), (n.from < n.min || n.from > n.max) && (n.from = i.from), (n.to < n.min || n.to > n.max) && (n.to = i.to)), ("number" != typeof i.min_interval || isNaN(i.min_interval) || !i.min_interval || i.min_interval < 0) && (i.min_interval = 0), ("number" != typeof i.max_interval || isNaN(i.max_interval) || !i.max_interval || i.max_interval < 0) && (i.max_interval = 0), i.min_interval && i.min_interval > i.max - i.min && (i.min_interval = i.max - i.min), i.max_interval && i.max_interval > i.max - i.min && (i.max_interval = i.max - i.min)
                },
                decorate: function (t, e) {
                    var i = "",
                            n = this.options;
                    return n.prefix && (i += n.prefix), i += t, n.max_postfix && (n.values.length && t === n.p_values[n.max] ? (i += n.max_postfix, n.postfix && (i += " ")) : e === n.max && (i += n.max_postfix, n.postfix && (i += " "))), n.postfix && (i += n.postfix), i
                },
                updateFrom: function () {
                    this.result.from = this.options.from, this.result.from_percent = this.convertToPercent(this.result.from), this.options.values && (this.result.from_value = this.options.values[this.result.from])
                },
                updateTo: function () {
                    this.result.to = this.options.to, this.result.to_percent = this.convertToPercent(this.result.to), this.options.values && (this.result.to_value = this.options.values[this.result.to])
                },
                updateResult: function () {
                    this.result.min = this.options.min, this.result.max = this.options.max, this.updateFrom(), this.updateTo()
                },
                appendGrid: function () {
                    if (this.options.grid) {
                        var t, e, i, n, s, r = this.options,
                                o = r.max - r.min,
                                a = r.grid_num,
                                l = 0,
                                c = 0,
                                p = 4,
                                d = 0,
                                h = "";
                        for (this.calcGridMargin(), r.grid_snap ? (a = o / r.step, l = this.toFixed(r.step / (o / 100))) : l = this.toFixed(100 / a), a > 4 && (p = 3), a > 7 && (p = 2), a > 14 && (p = 1), a > 28 && (p = 0), t = 0; t < a + 1; t++) {
                            for (i = p, c = this.toFixed(l * t), c > 100 && (c = 100, i -= 2, i < 0 && (i = 0)), this.coords.big[t] = c, n = (c - l * (t - 1)) / (i + 1), e = 1; e <= i && 0 !== c; e++)
                                d = this.toFixed(c - n * e), h += '<span class="irs-grid-pol small" style="left: ' + d + '%"></span>';
                            h += '<span class="irs-grid-pol" style="left: ' + c + '%"></span>', s = this.convertToValue(c), s = r.values.length ? r.p_values[s] : this._prettify(s), h += '<span class="irs-grid-text js-grid-text-' + t + '" style="left: ' + c + '%">' + s + "</span>"
                        }
                        this.coords.big_num = Math.ceil(a + 1), this.$cache.cont.addClass("irs-with-grid"), this.$cache.grid.html(h), this.cacheGridLabels()
                    }
                },
                cacheGridLabels: function () {
                    var t, e, i = this.coords.big_num;
                    for (e = 0; e < i; e++)
                        t = this.$cache.grid.find(".js-grid-text-" + e), this.$cache.grid_labels.push(t);
                    this.calcGridLabels()
                },
                calcGridLabels: function () {
                    var t, e, i = [],
                            n = [],
                            s = this.coords.big_num;
                    for (t = 0; t < s; t++)
                        this.coords.big_w[t] = this.$cache.grid_labels[t].outerWidth(!1), this.coords.big_p[t] = this.toFixed(this.coords.big_w[t] / this.coords.w_rs * 100), this.coords.big_x[t] = this.toFixed(this.coords.big_p[t] / 2), i[t] = this.toFixed(this.coords.big[t] - this.coords.big_x[t]), n[t] = this.toFixed(i[t] + this.coords.big_p[t]);
                    for (this.options.force_edges && (i[0] < - this.coords.grid_gap && (i[0] = - this.coords.grid_gap, n[0] = this.toFixed(i[0] + this.coords.big_p[0]), this.coords.big_x[0] = this.coords.grid_gap), n[s - 1] > 100 + this.coords.grid_gap && (n[s - 1] = 100 + this.coords.grid_gap, i[s - 1] = this.toFixed(n[s - 1] - this.coords.big_p[s - 1]), this.coords.big_x[s - 1] = this.toFixed(this.coords.big_p[s - 1] - this.coords.grid_gap))), this.calcGridCollision(2, i, n), this.calcGridCollision(4, i, n), t = 0; t < s; t++)
                        e = this.$cache.grid_labels[t][0], e.style.marginLeft = -this.coords.big_x[t] + "%"
                },
                calcGridCollision: function (t, e, i) {
                    var n, s, r, o = this.coords.big_num;
                    for (n = 0; n < o && (s = n + t / 2, !(s >= o)); n += t)
                        r = this.$cache.grid_labels[s][0], i[n] <= e[s] ? r.style.visibility = "visible" : r.style.visibility = "hidden"
                },
                calcGridMargin: function () {
                    this.options.grid_margin && (this.coords.w_rs = this.$cache.rs.outerWidth(!1), this.coords.w_rs && ("single" === this.options.type ? this.coords.w_handle = this.$cache.s_single.outerWidth(!1) : this.coords.w_handle = this.$cache.s_from.outerWidth(!1), this.coords.p_handle = this.toFixed(this.coords.w_handle / this.coords.w_rs * 100), this.coords.grid_gap = this.toFixed(this.coords.p_handle / 2 - .1), this.$cache.grid[0].style.width = this.toFixed(100 - this.coords.p_handle) + "%", this.$cache.grid[0].style.left = this.coords.grid_gap + "%"))
                },
                update: function (e) {
                    this.input && (this.is_update = !0, this.options.from = this.result.from, this.options.to = this.result.to, this.options = t.extend(this.options, e), this.validate(), this.updateResult(e), this.toggleInput(), this.remove(), this.init(!0))
                },
                reset: function () {
                    this.input && (this.updateResult(), this.update())
                },
                destroy: function () {
                    this.input && (this.toggleInput(), this.$cache.input.prop("readonly", !1), t.data(this.input, "ionRangeSlider", null), this.remove(), this.input = null, this.options = null)
                }
            }, t.fn.ionRangeSlider = function (e) {
                return this.each(function () {
                    t.data(this, "ionRangeSlider") || t.data(this, "ionRangeSlider", new d(this, e, (r++)))
                })
            },
                    function () {
                        for (var t = 0, e = ["ms", "moz", "webkit", "o"], n = 0; n < e.length && !i.requestAnimationFrame; ++n)
                            i.requestAnimationFrame = i[e[n] + "RequestAnimationFrame"], i.cancelAnimationFrame = i[e[n] + "CancelAnimationFrame"] || i[e[n] + "CancelRequestAnimationFrame"];
                        i.requestAnimationFrame || (i.requestAnimationFrame = function (e, n) {
                            var s = (new Date).getTime(),
                                    r = Math.max(0, 16 - (s - t)),
                                    o = i.setTimeout(function () {
                                        e(s + r)
                                    }, r);
                            return t = s + r, o
                        }), i.cancelAnimationFrame || (i.cancelAnimationFrame = function (t) {
                            clearTimeout(t)
                        })
                    }()
        })
    }]);