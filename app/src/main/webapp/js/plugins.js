! function() {
    for (var a, b = function() {}, c = ["assert", "clear", "count", "debug", "dir", "dirxml", "error", "exception", "group", "groupCollapsed", "groupEnd", "info", "log", "markTimeline", "profile", "profileEnd", "table", "time", "timeEnd", "timeline", "timelineEnd", "timeStamp", "trace", "warn"], d = c.length, e = window.console = window.console || {}; d--;) a = c[d], e[a] || (e[a] = b)
}(),
function(a) {
    a.easing.jswing = a.easing.swing, a.extend(a.easing, {
        def: "easeOutQuad",
        swing: function(b, c, d, e, f) {
            return a.easing[a.easing.def](b, c, d, e, f)
        },
        easeInQuad: function(a, b, c, d, e) {
            return d * (b /= e) * b + c
        },
        easeOutQuad: function(a, b, c, d, e) {
            return -d * (b /= e) * (b - 2) + c
        },
        easeInOutQuad: function(a, b, c, d, e) {
            return 1 > (b /= e / 2) ? d / 2 * b * b + c : -d / 2 * (--b * (b - 2) - 1) + c
        },
        easeInCubic: function(a, b, c, d, e) {
            return d * (b /= e) * b * b + c
        },
        easeOutCubic: function(a, b, c, d, e) {
            return d * ((b = b / e - 1) * b * b + 1) + c
        },
        easeInOutCubic: function(a, b, c, d, e) {
            return 1 > (b /= e / 2) ? d / 2 * b * b * b + c : d / 2 * ((b -= 2) * b * b + 2) + c
        },
        easeInQuart: function(a, b, c, d, e) {
            return d * (b /= e) * b * b * b + c
        },
        easeOutQuart: function(a, b, c, d, e) {
            return -d * ((b = b / e - 1) * b * b * b - 1) + c
        },
        easeInOutQuart: function(a, b, c, d, e) {
            return 1 > (b /= e / 2) ? d / 2 * b * b * b * b + c : -d / 2 * ((b -= 2) * b * b * b - 2) + c
        },
        easeInQuint: function(a, b, c, d, e) {
            return d * (b /= e) * b * b * b * b + c
        },
        easeOutQuint: function(a, b, c, d, e) {
            return d * ((b = b / e - 1) * b * b * b * b + 1) + c
        },
        easeInOutQuint: function(a, b, c, d, e) {
            return 1 > (b /= e / 2) ? d / 2 * b * b * b * b * b + c : d / 2 * ((b -= 2) * b * b * b * b + 2) + c
        },
        easeInSine: function(a, b, c, d, e) {
            return -d * Math.cos(b / e * (Math.PI / 2)) + d + c
        },
        easeOutSine: function(a, b, c, d, e) {
            return d * Math.sin(b / e * (Math.PI / 2)) + c
        },
        easeInOutSine: function(a, b, c, d, e) {
            return -d / 2 * (Math.cos(Math.PI * b / e) - 1) + c
        },
        easeInExpo: function(a, b, c, d, e) {
            return 0 == b ? c : d * Math.pow(2, 10 * (b / e - 1)) + c
        },
        easeOutExpo: function(a, b, c, d, e) {
            return b == e ? c + d : d * (-Math.pow(2, -10 * b / e) + 1) + c
        },
        easeInOutExpo: function(a, b, c, d, e) {
            return 0 == b ? c : b == e ? c + d : 1 > (b /= e / 2) ? d / 2 * Math.pow(2, 10 * (b - 1)) + c : d / 2 * (-Math.pow(2, -10 * --b) + 2) + c
        },
        easeInCirc: function(a, b, c, d, e) {
            return -d * (Math.sqrt(1 - (b /= e) * b) - 1) + c
        },
        easeOutCirc: function(a, b, c, d, e) {
            return d * Math.sqrt(1 - (b = b / e - 1) * b) + c
        },
        easeInOutCirc: function(a, b, c, d, e) {
            return 1 > (b /= e / 2) ? -d / 2 * (Math.sqrt(1 - b * b) - 1) + c : d / 2 * (Math.sqrt(1 - (b -= 2) * b) + 1) + c
        },
        easeInElastic: function(a, b, c, d, e) {
            a = 1.70158;
            var f = 0,
                g = d;
            return 0 == b ? c : 1 == (b /= e) ? c + d : (f || (f = .3 * e), g < Math.abs(d) ? (g = d, a = f / 4) : a = f / (2 * Math.PI) * Math.asin(d / g), -(g * Math.pow(2, 10 * --b) * Math.sin(2 * (b * e - a) * Math.PI / f)) + c)
        },
        easeOutElastic: function(a, b, c, d, e) {
            a = 1.70158;
            var f = 0,
                g = d;
            return 0 == b ? c : 1 == (b /= e) ? c + d : (f || (f = .3 * e), g < Math.abs(d) ? (g = d, a = f / 4) : a = f / (2 * Math.PI) * Math.asin(d / g), g * Math.pow(2, -10 * b) * Math.sin(2 * (b * e - a) * Math.PI / f) + d + c)
        },
        easeInOutElastic: function(a, b, c, d, e) {
            a = 1.70158;
            var f = 0,
                g = d;
            return 0 == b ? c : 2 == (b /= e / 2) ? c + d : (f || (f = .3 * e * 1.5), g < Math.abs(d) ? (g = d, a = f / 4) : a = f / (2 * Math.PI) * Math.asin(d / g), 1 > b ? -.5 * g * Math.pow(2, 10 * --b) * Math.sin(2 * (b * e - a) * Math.PI / f) + c : g * Math.pow(2, -10 * --b) * Math.sin(2 * (b * e - a) * Math.PI / f) * .5 + d + c)
        },
        easeInBack: function(a, b, c, d, e, f) {
            return void 0 == f && (f = 1.70158), d * (b /= e) * b * ((f + 1) * b - f) + c
        },
        easeOutBack: function(a, b, c, d, e, f) {
            return void 0 == f && (f = 1.70158), d * ((b = b / e - 1) * b * ((f + 1) * b + f) + 1) + c
        },
        easeInOutBack: function(a, b, c, d, e, f) {
            return void 0 == f && (f = 1.70158), 1 > (b /= e / 2) ? d / 2 * b * b * (((f *= 1.525) + 1) * b - f) + c : d / 2 * ((b -= 2) * b * (((f *= 1.525) + 1) * b + f) + 2) + c
        },
        easeInBounce: function(b, c, d, e, f) {
            return e - a.easing.easeOutBounce(b, f - c, 0, e, f) + d
        },
        easeOutBounce: function(a, b, c, d, e) {
            return (b /= e) < 1 / 2.75 ? 7.5625 * d * b * b + c : b < 2 / 2.75 ? d * (7.5625 * (b -= 1.5 / 2.75) * b + .75) + c : b < 2.5 / 2.75 ? d * (7.5625 * (b -= 2.25 / 2.75) * b + .9375) + c : d * (7.5625 * (b -= 2.625 / 2.75) * b + .984375) + c
        },
        easeInOutBounce: function(b, c, d, e, f) {
            return c < f / 2 ? .5 * a.easing.easeInBounce(b, 2 * c, 0, e, f) + d : .5 * a.easing.easeOutBounce(b, 2 * c - f, 0, e, f) + .5 * e + d
        }
    })
}(jQuery), ! function(a, b) {
    "function" == typeof define && define.amd ? define(["jquery"], function(c) {
        return b(a, c)
    }) : "object" == typeof exports ? b(a, require("jquery")) : b(a, a.jQuery || a.Zepto)
}(this, function(a, b) {
    "use strict";

    function c(a) {
        if (w && "none" === a.css("animation-name") && "none" === a.css("-webkit-animation-name") && "none" === a.css("-moz-animation-name") && "none" === a.css("-o-animation-name") && "none" === a.css("-ms-animation-name")) return 0;
        var b, c, d, e, f = a.css("animation-duration") || a.css("-webkit-animation-duration") || a.css("-moz-animation-duration") || a.css("-o-animation-duration") || a.css("-ms-animation-duration") || "0s",
            g = a.css("animation-delay") || a.css("-webkit-animation-delay") || a.css("-moz-animation-delay") || a.css("-o-animation-delay") || a.css("-ms-animation-delay") || "0s",
            h = a.css("animation-iteration-count") || a.css("-webkit-animation-iteration-count") || a.css("-moz-animation-iteration-count") || a.css("-o-animation-iteration-count") || a.css("-ms-animation-iteration-count") || "1";
        for (f = f.split(", "), g = g.split(", "), h = h.split(", "), e = 0, c = f.length, b = Number.NEGATIVE_INFINITY; c > e; e++) d = parseFloat(f[e]) * parseInt(h[e], 10) + parseFloat(g[e]), d > b && (b = d);
        return b
    }

    function d() {
        if (b(document.body).height() <= b(window).height()) return 0;
        var a, c, d = document.createElement("div"),
            e = document.createElement("div");
        return d.style.visibility = "hidden", d.style.width = "100px", document.body.appendChild(d), a = d.offsetWidth, d.style.overflow = "scroll", e.style.width = "100%", d.appendChild(e), c = e.offsetWidth, d.parentNode.removeChild(d), a - c
    }

    function e() {
        if (!x) {
            var a, c, e = b("html"),
                f = k("is-locked");
            e.hasClass(f) || (c = b(document.body), a = parseInt(c.css("padding-right"), 10) + d(), c.css("padding-right", a + "px"), e.addClass(f))
        }
    }

    function f() {
        if (!x) {
            var a, c, e = b("html"),
                f = k("is-locked");
            e.hasClass(f) && (c = b(document.body), a = parseInt(c.css("padding-right"), 10) - d(), c.css("padding-right", a + "px"), e.removeClass(f))
        }
    }

    function g(a, b, c, d) {
        var e = k("is", b),
            f = [k("is", u.CLOSING), k("is", u.OPENING), k("is", u.CLOSED), k("is", u.OPENED)].join(" ");
        a.$bg.removeClass(f).addClass(e), a.$overlay.removeClass(f).addClass(e), a.$wrapper.removeClass(f).addClass(e), a.$modal.removeClass(f).addClass(e), a.state = b, !c && a.$modal.trigger({
            type: b,
            reason: d
        }, [{
            reason: d
        }])
    }

    function h(a, d, e) {
        var f = 0,
            g = function(a) {
                a.target === this && f++
            },
            h = function(a) {
                a.target === this && 0 === --f && (b.each(["$bg", "$overlay", "$wrapper", "$modal"], function(a, b) {
                    e[b].off(r + " " + s)
                }), d())
            };
        b.each(["$bg", "$overlay", "$wrapper", "$modal"], function(a, b) {
            e[b].on(r, g).on(s, h)
        }), a(), 0 === c(e.$bg) && 0 === c(e.$overlay) && 0 === c(e.$wrapper) && 0 === c(e.$modal) && (b.each(["$bg", "$overlay", "$wrapper", "$modal"], function(a, b) {
            e[b].off(r + " " + s)
        }), d())
    }

    function i(a) {
        a.state !== u.CLOSED && (b.each(["$bg", "$overlay", "$wrapper", "$modal"], function(b, c) {
            a[c].off(r + " " + s)
        }), a.$bg.removeClass(a.settings.modifier), a.$overlay.removeClass(a.settings.modifier).hide(), a.$wrapper.hide(), f(), g(a, u.CLOSED, !0))
    }

    function j(a) {
        var b, c, d, e, f = {};
        for (a = a.replace(/\s*:\s*/g, ":").replace(/\s*,\s*/g, ","), b = a.split(","), e = 0, c = b.length; c > e; e++) b[e] = b[e].split(":"), d = b[e][1], ("string" == typeof d || d instanceof String) && (d = "true" === d || "false" !== d && d), ("string" == typeof d || d instanceof String) && (d = isNaN(d) ? d : +d), f[b[e][0]] = d;
        return f
    }

    function k() {
        for (var a = q, b = 0; b < arguments.length; ++b) a += "-" + arguments[b];
        return a
    }

    function l() {
        var a, c, d = location.hash.replace("#", "");
        if (d) {
            try {
                c = b("[data-" + p + '-id="' + d + '"]')
            } catch (a) {}
            c && c.length && (a = b[p].lookup[c.data(p)], a && a.settings.hashTracking && a.open())
        } else n && n.state === u.OPENED && n.settings.hashTracking && n.close()
    }

    function m(a, c) {
        var d = b(document.body),
            e = this;
        e.settings = b.extend({}, t, c), e.index = b[p].lookup.push(e) - 1, e.state = u.CLOSED, e.$overlay = b("." + k("overlay")), e.$overlay.length || (e.$overlay = b("<div>").addClass(k("overlay") + " " + k("is", u.CLOSED)).hide(), d.append(e.$overlay)), e.$bg = b("." + k("bg")).addClass(k("is", u.CLOSED)), e.$modal = a.addClass(q + " " + k("is-initialized") + " " + e.settings.modifier + " " + k("is", u.CLOSED)).attr("tabindex", "-1"), e.$wrapper = b("<div>").addClass(k("wrapper") + " " + e.settings.modifier + " " + k("is", u.CLOSED)).hide().append(e.$modal), d.append(e.$wrapper), e.$wrapper.on("click." + q, "[data-" + p + '-action="close"]', function(a) {
            a.preventDefault(), e.close()
        }), e.$wrapper.on("click." + q, "[data-" + p + '-action="cancel"]', function(a) {
            a.preventDefault(), e.$modal.trigger(v.CANCELLATION), e.settings.closeOnCancel && e.close(v.CANCELLATION)
        }), e.$wrapper.on("click." + q, "[data-" + p + '-action="confirm"]', function(a) {
            a.preventDefault(), e.$modal.trigger(v.CONFIRMATION), e.settings.closeOnConfirm && e.close(v.CONFIRMATION)
        }), e.$wrapper.on("click." + q, function(a) {
            var c = b(a.target);
            c.hasClass(k("wrapper")) && e.settings.closeOnOutsideClick && e.close()
        })
    }
    var n, o, p = "remodal",
        q = a.REMODAL_GLOBALS && a.REMODAL_GLOBALS.NAMESPACE || p,
        r = b.map(["animationstart", "webkitAnimationStart", "MSAnimationStart", "oAnimationStart"], function(a) {
            return a + "." + q
        }).join(" "),
        s = b.map(["animationend", "webkitAnimationEnd", "MSAnimationEnd", "oAnimationEnd"], function(a) {
            return a + "." + q
        }).join(" "),
        t = b.extend({
            hashTracking: !0,
            closeOnConfirm: !0,
            closeOnCancel: !0,
            closeOnEscape: !0,
            closeOnOutsideClick: !0,
            modifier: ""
        }, a.REMODAL_GLOBALS && a.REMODAL_GLOBALS.DEFAULTS),
        u = {
            CLOSING: "closing",
            CLOSED: "closed",
            OPENING: "opening",
            OPENED: "opened"
        },
        v = {
            CONFIRMATION: "confirmation",
            CANCELLATION: "cancellation"
        },
        w = function() {
            var a = document.createElement("div").style;
            return void 0 !== a.animationName || void 0 !== a.WebkitAnimationName || void 0 !== a.MozAnimationName || void 0 !== a.msAnimationName || void 0 !== a.OAnimationName
        }(),
        x = /iPad|iPhone|iPod/.test(navigator.platform);
    m.prototype.open = function() {
        var a, c = this;
        c.state !== u.OPENING && c.state !== u.CLOSING && (a = c.$modal.attr("data-" + p + "-id"), a && c.settings.hashTracking && (o = b(window).scrollTop(), location.hash = a), n && n !== c && i(n), n = c, e(), c.$bg.addClass(c.settings.modifier), c.$overlay.addClass(c.settings.modifier).show(), c.$wrapper.show().scrollTop(0), c.$modal.focus(), h(function() {
            g(c, u.OPENING)
        }, function() {
            g(c, u.OPENED)
        }, c))
    }, m.prototype.close = function(a) {
        var c = this;
        c.state !== u.OPENING && c.state !== u.CLOSING && (c.settings.hashTracking && c.$modal.attr("data-" + p + "-id") === location.hash.substr(1) && (location.hash = "", b(window).scrollTop(o)), h(function() {
            g(c, u.CLOSING, !1, a)
        }, function() {
            c.$bg.removeClass(c.settings.modifier), c.$overlay.removeClass(c.settings.modifier).hide(), c.$wrapper.hide(), f(), g(c, u.CLOSED, !1, a)
        }, c))
    }, m.prototype.getState = function() {
        return this.state
    }, m.prototype.destroy = function() {
        var a, c = b[p].lookup;
        i(this), this.$wrapper.remove(), delete c[this.index], a = b.grep(c, function(a) {
            return !!a
        }).length, 0 === a && (this.$overlay.remove(), this.$bg.removeClass(k("is", u.CLOSING) + " " + k("is", u.OPENING) + " " + k("is", u.CLOSED) + " " + k("is", u.OPENED)))
    }, b[p] = {
        lookup: []
    }, b.fn[p] = function(a) {
        var c, d;
        return this.each(function(e, f) {
            d = b(f), null == d.data(p) ? (c = new m(d, a), d.data(p, c.index), c.settings.hashTracking && d.attr("data-" + p + "-id") === location.hash.substr(1) && c.open()) : c = b[p].lookup[d.data(p)]
        }), c
    }, b(document).ready(function() {
        b(document).on("click", "[data-" + p + "-target]", function(a) {
            a.preventDefault();
            var c = a.currentTarget,
                d = c.getAttribute("data-" + p + "-target"),
                e = b("[data-" + p + '-id="' + d + '"]');
            b[p].lookup[e.data(p)].open()
        }), b(document).find("." + q).each(function(a, c) {
            var d = b(c),
                e = d.data(p + "-options");
            e ? ("string" == typeof e || e instanceof String) && (e = j(e)) : e = {}, d[p](e)
        }), b(document).on("keydown." + q, function(a) {
            n && n.settings.closeOnEscape && n.state === u.OPENED && 27 === a.keyCode && n.close()
        }), b(window).on("hashchange." + q, l)
    })
}),
function(a) {
    function b() {}

    function c(a) {
        function c(b) {
            b.prototype.option || (b.prototype.option = function(b) {
                a.isPlainObject(b) && (this.options = a.extend(!0, this.options, b))
            })
        }

        function e(b, c) {
            a.fn[b] = function(e) {
                if ("string" == typeof e) {
                    for (var g = d.call(arguments, 1), h = 0, i = this.length; i > h; h++) {
                        var j = this[h],
                            k = a.data(j, b);
                        if (k)
                            if (a.isFunction(k[e]) && "_" !== e.charAt(0)) {
                                var l = k[e].apply(k, g);
                                if (void 0 !== l) return l
                            } else f("no such method '" + e + "' for " + b + " instance");
                        else f("cannot call methods on " + b + " prior to initialization; attempted to call '" + e + "'")
                    }
                    return this
                }
                return this.each(function() {
                    var d = a.data(this, b);
                    d ? (d.option(e), d._init()) : (d = new c(this, e), a.data(this, b, d))
                })
            }
        }
        if (a) {
            var f = "undefined" == typeof console ? b : function(a) {
                console.error(a)
            };
            return a.bridget = function(a, b) {
                c(b), e(a, b)
            }, a.bridget
        }
    }
    var d = Array.prototype.slice;
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery.bridget", ["jquery"], c) : c("object" == typeof exports ? require("jquery") : a.jQuery)
}(window),
function(a) {
    function b(b) {
        var c = a.event;
        return c.target = c.target || c.srcElement || b, c
    }
    var c = document.documentElement,
        d = function() {};
    c.addEventListener ? d = function(a, b, c) {
        a.addEventListener(b, c, !1)
    } : c.attachEvent && (d = function(a, c, d) {
        a[c + d] = d.handleEvent ? function() {
            var c = b(a);
            d.handleEvent.call(d, c)
        } : function() {
            var c = b(a);
            d.call(a, c)
        }, a.attachEvent("on" + c, a[c + d])
    });
    var e = function() {};
    c.removeEventListener ? e = function(a, b, c) {
        a.removeEventListener(b, c, !1)
    } : c.detachEvent && (e = function(a, b, c) {
        a.detachEvent("on" + b, a[b + c]);
        try {
            delete a[b + c]
        } catch (d) {
            a[b + c] = void 0
        }
    });
    var f = {
        bind: d,
        unbind: e
    };
    "function" == typeof define && define.amd ? define("eventie/eventie", f) : "object" == typeof exports ? module.exports = f : a.eventie = f
}(window),
function() {
    function a() {}

    function b(a, b) {
        for (var c = a.length; c--;)
            if (a[c].listener === b) return c;
        return -1
    }

    function c(a) {
        return function() {
            return this[a].apply(this, arguments)
        }
    }
    var d = a.prototype,
        e = this,
        f = e.EventEmitter;
    d.getListeners = function(a) {
        var b, c, d = this._getEvents();
        if (a instanceof RegExp) {
            b = {};
            for (c in d) d.hasOwnProperty(c) && a.test(c) && (b[c] = d[c])
        } else b = d[a] || (d[a] = []);
        return b
    }, d.flattenListeners = function(a) {
        var b, c = [];
        for (b = 0; a.length > b; b += 1) c.push(a[b].listener);
        return c
    }, d.getListenersAsObject = function(a) {
        var b, c = this.getListeners(a);
        return c instanceof Array && (b = {}, b[a] = c), b || c
    }, d.addListener = function(a, c) {
        var d, e = this.getListenersAsObject(a),
            f = "object" == typeof c;
        for (d in e) e.hasOwnProperty(d) && -1 === b(e[d], c) && e[d].push(f ? c : {
            listener: c,
            once: !1
        });
        return this
    }, d.on = c("addListener"), d.addOnceListener = function(a, b) {
        return this.addListener(a, {
            listener: b,
            once: !0
        })
    }, d.once = c("addOnceListener"), d.defineEvent = function(a) {
        return this.getListeners(a), this
    }, d.defineEvents = function(a) {
        for (var b = 0; a.length > b; b += 1) this.defineEvent(a[b]);
        return this
    }, d.removeListener = function(a, c) {
        var d, e, f = this.getListenersAsObject(a);
        for (e in f) f.hasOwnProperty(e) && (d = b(f[e], c), -1 !== d && f[e].splice(d, 1));
        return this
    }, d.off = c("removeListener"), d.addListeners = function(a, b) {
        return this.manipulateListeners(!1, a, b)
    }, d.removeListeners = function(a, b) {
        return this.manipulateListeners(!0, a, b)
    }, d.manipulateListeners = function(a, b, c) {
        var d, e, f = a ? this.removeListener : this.addListener,
            g = a ? this.removeListeners : this.addListeners;
        if ("object" != typeof b || b instanceof RegExp)
            for (d = c.length; d--;) f.call(this, b, c[d]);
        else
            for (d in b) b.hasOwnProperty(d) && (e = b[d]) && ("function" == typeof e ? f.call(this, d, e) : g.call(this, d, e));
        return this
    }, d.removeEvent = function(a) {
        var b, c = typeof a,
            d = this._getEvents();
        if ("string" === c) delete d[a];
        else if (a instanceof RegExp)
            for (b in d) d.hasOwnProperty(b) && a.test(b) && delete d[b];
        else delete this._events;
        return this
    }, d.removeAllListeners = c("removeEvent"), d.emitEvent = function(a, b) {
        var c, d, e, f, g = this.getListenersAsObject(a);
        for (e in g)
            if (g.hasOwnProperty(e))
                for (d = g[e].length; d--;) c = g[e][d], c.once === !0 && this.removeListener(a, c.listener), f = c.listener.apply(this, b || []), f === this._getOnceReturnValue() && this.removeListener(a, c.listener);
        return this
    }, d.trigger = c("emitEvent"), d.emit = function(a) {
        var b = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(a, b)
    }, d.setOnceReturnValue = function(a) {
        return this._onceReturnValue = a, this
    }, d._getOnceReturnValue = function() {
        return !this.hasOwnProperty("_onceReturnValue") || this._onceReturnValue
    }, d._getEvents = function() {
        return this._events || (this._events = {})
    }, a.noConflict = function() {
        return e.EventEmitter = f, a
    }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() {
        return a
    }) : "object" == typeof module && module.exports ? module.exports = a : e.EventEmitter = a
}.call(this),
    function(a) {
        function b(a) {
            if (a) {
                if ("string" == typeof d[a]) return a;
                a = a.charAt(0).toUpperCase() + a.slice(1);
                for (var b, e = 0, f = c.length; f > e; e++)
                    if (b = c[e] + a, "string" == typeof d[b]) return b
            }
        }
        var c = "Webkit Moz ms Ms O".split(" "),
            d = document.documentElement.style;
        "function" == typeof define && define.amd ? define("get-style-property/get-style-property", [], function() {
            return b
        }) : "object" == typeof exports ? module.exports = b : a.getStyleProperty = b
    }(window),
    function(a) {
        function b(a) {
            var b = parseFloat(a),
                c = -1 === a.indexOf("%") && !isNaN(b);
            return c && b
        }

        function c() {}

        function d() {
            for (var a = {
                    width: 0,
                    height: 0,
                    innerWidth: 0,
                    innerHeight: 0,
                    outerWidth: 0,
                    outerHeight: 0
                }, b = 0, c = g.length; c > b; b++) {
                var d = g[b];
                a[d] = 0
            }
            return a
        }

        function e(c) {
            function e() {
                if (!m) {
                    m = !0;
                    var d = a.getComputedStyle;
                    if (j = function() {
                            var a = d ? function(a) {
                                return d(a, null)
                            } : function(a) {
                                return a.currentStyle
                            };
                            return function(b) {
                                var c = a(b);
                                return c || f("Style returned " + c + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), c
                            }
                        }(), k = c("boxSizing")) {
                        var e = document.createElement("div");
                        e.style.width = "200px", e.style.padding = "1px 2px 3px 4px", e.style.borderStyle = "solid", e.style.borderWidth = "1px 2px 3px 4px", e.style[k] = "border-box";
                        var g = document.body || document.documentElement;
                        g.appendChild(e);
                        var h = j(e);
                        l = 200 === b(h.width), g.removeChild(e)
                    }
                }
            }

            function h(a) {
                if (e(), "string" == typeof a && (a = document.querySelector(a)), a && "object" == typeof a && a.nodeType) {
                    var c = j(a);
                    if ("none" === c.display) return d();
                    var f = {};
                    f.width = a.offsetWidth, f.height = a.offsetHeight;
                    for (var h = f.isBorderBox = !(!k || !c[k] || "border-box" !== c[k]), m = 0, n = g.length; n > m; m++) {
                        var o = g[m],
                            p = c[o];
                        p = i(a, p);
                        var q = parseFloat(p);
                        f[o] = isNaN(q) ? 0 : q
                    }
                    var r = f.paddingLeft + f.paddingRight,
                        s = f.paddingTop + f.paddingBottom,
                        t = f.marginLeft + f.marginRight,
                        u = f.marginTop + f.marginBottom,
                        v = f.borderLeftWidth + f.borderRightWidth,
                        w = f.borderTopWidth + f.borderBottomWidth,
                        x = h && l,
                        y = b(c.width);
                    y !== !1 && (f.width = y + (x ? 0 : r + v));
                    var z = b(c.height);
                    return z !== !1 && (f.height = z + (x ? 0 : s + w)), f.innerWidth = f.width - (r + v), f.innerHeight = f.height - (s + w), f.outerWidth = f.width + t, f.outerHeight = f.height + u, f
                }
            }

            function i(b, c) {
                if (a.getComputedStyle || -1 === c.indexOf("%")) return c;
                var d = b.style,
                    e = d.left,
                    f = b.runtimeStyle,
                    g = f && f.left;
                return g && (f.left = b.currentStyle.left), d.left = c, c = d.pixelLeft, d.left = e, g && (f.left = g), c
            }
            var j, k, l, m = !1;
            return h
        }
        var f = "undefined" == typeof console ? c : function(a) {
                console.error(a)
            },
            g = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
        "function" == typeof define && define.amd ? define("get-size/get-size", ["get-style-property/get-style-property"], e) : "object" == typeof exports ? module.exports = e(require("desandro-get-style-property")) : a.getSize = e(a.getStyleProperty)
    }(window),
    function(a) {
        function b(a) {
            "function" == typeof a && (b.isReady ? a() : g.push(a))
        }

        function c(a) {
            var c = "readystatechange" === a.type && "complete" !== f.readyState;
            b.isReady || c || d()
        }

        function d() {
            b.isReady = !0;
            for (var a = 0, c = g.length; c > a; a++) {
                var d = g[a];
                d()
            }
        }

        function e(e) {
            return "complete" === f.readyState ? d() : (e.bind(f, "DOMContentLoaded", c), e.bind(f, "readystatechange", c), e.bind(a, "load", c)), b
        }
        var f = a.document,
            g = [];
        b.isReady = !1, "function" == typeof define && define.amd ? define("doc-ready/doc-ready", ["eventie/eventie"], e) : "object" == typeof exports ? module.exports = e(require("eventie")) : a.docReady = e(a.eventie)
    }(window),
    function(a) {
        function b(a, b) {
            return a[g](b)
        }

        function c(a) {
            if (!a.parentNode) {
                var b = document.createDocumentFragment();
                b.appendChild(a)
            }
        }

        function d(a, b) {
            c(a);
            for (var d = a.parentNode.querySelectorAll(b), e = 0, f = d.length; f > e; e++)
                if (d[e] === a) return !0;
            return !1
        }

        function e(a, d) {
            return c(a), b(a, d)
        }
        var f, g = function() {
            if (a.matches) return "matches";
            if (a.matchesSelector) return "matchesSelector";
            for (var b = ["webkit", "moz", "ms", "o"], c = 0, d = b.length; d > c; c++) {
                var e = b[c],
                    f = e + "MatchesSelector";
                if (a[f]) return f
            }
        }();
        if (g) {
            var h = document.createElement("div"),
                i = b(h, "div");
            f = i ? b : e
        } else f = d;
        "function" == typeof define && define.amd ? define("matches-selector/matches-selector", [], function() {
            return f
        }) : "object" == typeof exports ? module.exports = f : window.matchesSelector = f
    }(Element.prototype),
    function(a, b) {
        "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["doc-ready/doc-ready", "matches-selector/matches-selector"], function(c, d) {
            return b(a, c, d)
        }) : "object" == typeof exports ? module.exports = b(a, require("doc-ready"), require("desandro-matches-selector")) : a.fizzyUIUtils = b(a, a.docReady, a.matchesSelector)
    }(window, function(a, b, c) {
        var d = {};
        d.extend = function(a, b) {
            for (var c in b) a[c] = b[c];
            return a
        }, d.modulo = function(a, b) {
            return (a % b + b) % b
        };
        var e = Object.prototype.toString;
        d.isArray = function(a) {
            return "[object Array]" == e.call(a)
        }, d.makeArray = function(a) {
            var b = [];
            if (d.isArray(a)) b = a;
            else if (a && "number" == typeof a.length)
                for (var c = 0, e = a.length; e > c; c++) b.push(a[c]);
            else b.push(a);
            return b
        }, d.indexOf = Array.prototype.indexOf ? function(a, b) {
            return a.indexOf(b)
        } : function(a, b) {
            for (var c = 0, d = a.length; d > c; c++)
                if (a[c] === b) return c;
            return -1
        }, d.removeFrom = function(a, b) {
            var c = d.indexOf(a, b); - 1 != c && a.splice(c, 1)
        }, d.isElement = "function" == typeof HTMLElement || "object" == typeof HTMLElement ? function(a) {
            return a instanceof HTMLElement
        } : function(a) {
            return a && "object" == typeof a && 1 == a.nodeType && "string" == typeof a.nodeName
        }, d.setText = function() {
            function a(a, c) {
                b = b || (void 0 !== document.documentElement.textContent ? "textContent" : "innerText"), a[b] = c
            }
            var b;
            return a
        }(), d.getParent = function(a, b) {
            for (; a != document.body;)
                if (a = a.parentNode, c(a, b)) return a
        }, d.getQueryElement = function(a) {
            return "string" == typeof a ? document.querySelector(a) : a
        }, d.handleEvent = function(a) {
            var b = "on" + a.type;
            this[b] && this[b](a)
        }, d.filterFindElements = function(a, b) {
            a = d.makeArray(a);
            for (var e = [], f = 0, g = a.length; g > f; f++) {
                var h = a[f];
                if (d.isElement(h))
                    if (b) {
                        c(h, b) && e.push(h);
                        for (var i = h.querySelectorAll(b), j = 0, k = i.length; k > j; j++) e.push(i[j])
                    } else e.push(h)
            }
            return e
        }, d.debounceMethod = function(a, b, c) {
            var d = a.prototype[b],
                e = b + "Timeout";
            a.prototype[b] = function() {
                var a = this[e];
                a && clearTimeout(a);
                var b = arguments,
                    f = this;
                this[e] = setTimeout(function() {
                    d.apply(f, b), delete f[e]
                }, c || 100)
            }
        }, d.toDashed = function(a) {
            return a.replace(/(.)([A-Z])/g, function(a, b, c) {
                return b + "-" + c
            }).toLowerCase()
        };
        var f = a.console;
        return d.htmlInit = function(c, e) {
            b(function() {
                for (var b = d.toDashed(e), g = document.querySelectorAll(".js-" + b), h = "data-" + b + "-options", i = 0, j = g.length; j > i; i++) {
                    var k, l = g[i],
                        m = l.getAttribute(h);
                    try {
                        k = m && JSON.parse(m)
                    } catch (a) {
                        f && f.error("Error parsing " + h + " on " + l.nodeName.toLowerCase() + (l.id ? "#" + l.id : "") + ": " + a);
                        continue
                    }
                    var n = new c(l, k),
                        o = a.jQuery;
                    o && o.data(l, e, n)
                }
            })
        }, d
    }),
    function(a, b) {
        "function" == typeof define && define.amd ? define("outlayer/item", ["eventEmitter/EventEmitter", "get-size/get-size", "get-style-property/get-style-property", "fizzy-ui-utils/utils"], function(c, d, e, f) {
            return b(a, c, d, e, f)
        }) : "object" == typeof exports ? module.exports = b(a, require("wolfy87-eventemitter"), require("get-size"), require("desandro-get-style-property"), require("fizzy-ui-utils")) : (a.Outlayer = {}, a.Outlayer.Item = b(a, a.EventEmitter, a.getSize, a.getStyleProperty, a.fizzyUIUtils))
    }(window, function(a, b, c, d, e) {
        function f(a) {
            for (var b in a) return !1;
            return b = null, !0
        }

        function g(a, b) {
            a && (this.element = a, this.layout = b, this.position = {
                x: 0,
                y: 0
            }, this._create())
        }
        var h = a.getComputedStyle,
            i = h ? function(a) {
                return h(a, null)
            } : function(a) {
                return a.currentStyle
            },
            j = d("transition"),
            k = d("transform"),
            l = j && k,
            m = !!d("perspective"),
            n = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "otransitionend",
                transition: "transitionend"
            }[j],
            o = ["transform", "transition", "transitionDuration", "transitionProperty"],
            p = function() {
                for (var a = {}, b = 0, c = o.length; c > b; b++) {
                    var e = o[b],
                        f = d(e);
                    f && f !== e && (a[e] = f)
                }
                return a
            }();
        e.extend(g.prototype, b.prototype), g.prototype._create = function() {
            this._transn = {
                ingProperties: {},
                clean: {},
                onEnd: {}
            }, this.css({
                position: "absolute"
            })
        }, g.prototype.handleEvent = function(a) {
            var b = "on" + a.type;
            this[b] && this[b](a)
        }, g.prototype.getSize = function() {
            this.size = c(this.element)
        }, g.prototype.css = function(a) {
            var b = this.element.style;
            for (var c in a) {
                var d = p[c] || c;
                b[d] = a[c]
            }
        }, g.prototype.getPosition = function() {
            var a = i(this.element),
                b = this.layout.options,
                c = b.isOriginLeft,
                d = b.isOriginTop,
                e = parseInt(a[c ? "left" : "right"], 10),
                f = parseInt(a[d ? "top" : "bottom"], 10);
            e = isNaN(e) ? 0 : e, f = isNaN(f) ? 0 : f;
            var g = this.layout.size;
            e -= c ? g.paddingLeft : g.paddingRight, f -= d ? g.paddingTop : g.paddingBottom, this.position.x = e, this.position.y = f
        }, g.prototype.layoutPosition = function() {
            var a = this.layout.size,
                b = this.layout.options,
                c = {},
                d = b.isOriginLeft ? "paddingLeft" : "paddingRight",
                e = b.isOriginLeft ? "left" : "right",
                f = b.isOriginLeft ? "right" : "left",
                g = this.position.x + a[d];
            g = b.percentPosition && !b.isHorizontal ? 100 * (g / a.width) + "%" : g + "px", c[e] = g, c[f] = "";
            var h = b.isOriginTop ? "paddingTop" : "paddingBottom",
                i = b.isOriginTop ? "top" : "bottom",
                j = b.isOriginTop ? "bottom" : "top",
                k = this.position.y + a[h];
            k = b.percentPosition && b.isHorizontal ? 100 * (k / a.height) + "%" : k + "px", c[i] = k, c[j] = "", this.css(c), this.emitEvent("layout", [this])
        };
        var q = m ? function(a, b) {
            return "translate3d(" + a + "px, " + b + "px, 0)"
        } : function(a, b) {
            return "translate(" + a + "px, " + b + "px)"
        };
        g.prototype._transitionTo = function(a, b) {
            this.getPosition();
            var c = this.position.x,
                d = this.position.y,
                e = parseInt(a, 10),
                f = parseInt(b, 10),
                g = e === this.position.x && f === this.position.y;
            if (this.setPosition(a, b), g && !this.isTransitioning) return void this.layoutPosition();
            var h = a - c,
                i = b - d,
                j = {},
                k = this.layout.options;
            h = k.isOriginLeft ? h : -h, i = k.isOriginTop ? i : -i, j.transform = q(h, i), this.transition({
                to: j,
                onTransitionEnd: {
                    transform: this.layoutPosition
                },
                isCleaning: !0
            })
        }, g.prototype.goTo = function(a, b) {
            this.setPosition(a, b), this.layoutPosition()
        }, g.prototype.moveTo = l ? g.prototype._transitionTo : g.prototype.goTo, g.prototype.setPosition = function(a, b) {
            this.position.x = parseInt(a, 10), this.position.y = parseInt(b, 10)
        }, g.prototype._nonTransition = function(a) {
            this.css(a.to), a.isCleaning && this._removeStyles(a.to);
            for (var b in a.onTransitionEnd) a.onTransitionEnd[b].call(this)
        }, g.prototype._transition = function(a) {
            if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(a);
            var b = this._transn;
            for (var c in a.onTransitionEnd) b.onEnd[c] = a.onTransitionEnd[c];
            for (c in a.to) b.ingProperties[c] = !0, a.isCleaning && (b.clean[c] = !0);
            if (a.from) {
                this.css(a.from);
                var d = this.element.offsetHeight;
                d = null
            }
            this.enableTransition(a.to), this.css(a.to), this.isTransitioning = !0
        };
        var r = k && e.toDashed(k) + ",opacity";
        g.prototype.enableTransition = function() {
            this.isTransitioning || (this.css({
                transitionProperty: r,
                transitionDuration: this.layout.options.transitionDuration
            }), this.element.addEventListener(n, this, !1))
        }, g.prototype.transition = g.prototype[j ? "_transition" : "_nonTransition"], g.prototype.onwebkitTransitionEnd = function(a) {
            this.ontransitionend(a)
        }, g.prototype.onotransitionend = function(a) {
            this.ontransitionend(a)
        };
        var s = {
            "-webkit-transform": "transform",
            "-moz-transform": "transform",
            "-o-transform": "transform"
        };
        g.prototype.ontransitionend = function(a) {
            if (a.target === this.element) {
                var b = this._transn,
                    c = s[a.propertyName] || a.propertyName;
                if (delete b.ingProperties[c], f(b.ingProperties) && this.disableTransition(), c in b.clean && (this.element.style[a.propertyName] = "", delete b.clean[c]), c in b.onEnd) {
                    var d = b.onEnd[c];
                    d.call(this), delete b.onEnd[c]
                }
                this.emitEvent("transitionEnd", [this])
            }
        }, g.prototype.disableTransition = function() {
            this.removeTransitionStyles(), this.element.removeEventListener(n, this, !1), this.isTransitioning = !1
        }, g.prototype._removeStyles = function(a) {
            var b = {};
            for (var c in a) b[c] = "";
            this.css(b)
        };
        var t = {
            transitionProperty: "",
            transitionDuration: ""
        };
        return g.prototype.removeTransitionStyles = function() {
            this.css(t)
        }, g.prototype.removeElem = function() {
            this.element.parentNode.removeChild(this.element), this.css({
                display: ""
            }), this.emitEvent("remove", [this])
        }, g.prototype.remove = function() {
            if (!j || !parseFloat(this.layout.options.transitionDuration)) return void this.removeElem();
            var a = this;
            this.once("transitionEnd", function() {
                a.removeElem()
            }), this.hide()
        }, g.prototype.reveal = function() {
            delete this.isHidden, this.css({
                display: ""
            });
            var a = this.layout.options,
                b = {},
                c = this.getHideRevealTransitionEndProperty("visibleStyle");
            b[c] = this.onRevealTransitionEnd, this.transition({
                from: a.hiddenStyle,
                to: a.visibleStyle,
                isCleaning: !0,
                onTransitionEnd: b
            })
        }, g.prototype.onRevealTransitionEnd = function() {
            this.isHidden || this.emitEvent("reveal")
        }, g.prototype.getHideRevealTransitionEndProperty = function(a) {
            var b = this.layout.options[a];
            if (b.opacity) return "opacity";
            for (var c in b) return c
        }, g.prototype.hide = function() {
            this.isHidden = !0, this.css({
                display: ""
            });
            var a = this.layout.options,
                b = {},
                c = this.getHideRevealTransitionEndProperty("hiddenStyle");
            b[c] = this.onHideTransitionEnd, this.transition({
                from: a.visibleStyle,
                to: a.hiddenStyle,
                isCleaning: !0,
                onTransitionEnd: b
            })
        }, g.prototype.onHideTransitionEnd = function() {
            this.isHidden && (this.css({
                display: "none"
            }), this.emitEvent("hide"))
        }, g.prototype.destroy = function() {
            this.css({
                position: "",
                left: "",
                right: "",
                top: "",
                bottom: "",
                transition: "",
                transform: ""
            })
        }, g
    }),
    function(a, b) {
        "function" == typeof define && define.amd ? define("outlayer/outlayer", ["eventie/eventie", "eventEmitter/EventEmitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function(c, d, e, f, g) {
            return b(a, c, d, e, f, g)
        }) : "object" == typeof exports ? module.exports = b(a, require("eventie"), require("wolfy87-eventemitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : a.Outlayer = b(a, a.eventie, a.EventEmitter, a.getSize, a.fizzyUIUtils, a.Outlayer.Item)
    }(window, function(a, b, c, d, e, f) {
        function g(a, b) {
            var c = e.getQueryElement(a);
            if (!c) return void(h && h.error("Bad element for " + this.constructor.namespace + ": " + (c || a)));
            this.element = c, i && (this.$element = i(this.element)), this.options = e.extend({}, this.constructor.defaults), this.option(b);
            var d = ++k;
            this.element.outlayerGUID = d, l[d] = this, this._create(), this.options.isInitLayout && this.layout()
        }
        var h = a.console,
            i = a.jQuery,
            j = function() {},
            k = 0,
            l = {};
        return g.namespace = "outlayer", g.Item = f, g.defaults = {
                containerStyle: {
                    position: "relative"
                },
                isInitLayout: !0,
                isOriginLeft: !0,
                isOriginTop: !0,
                isResizeBound: !0,
                isResizingContainer: !0,
                transitionDuration: "0.4s",
                hiddenStyle: {
                    opacity: 0,
                    transform: "scale(0.001)"
                },
                visibleStyle: {
                    opacity: 1,
                    transform: "scale(1)"
                }
            }, e.extend(g.prototype, c.prototype), g.prototype.option = function(a) {
                e.extend(this.options, a)
            }, g.prototype._create = function() {
                this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), e.extend(this.element.style, this.options.containerStyle), this.options.isResizeBound && this.bindResize()
            }, g.prototype.reloadItems = function() {
                this.items = this._itemize(this.element.children)
            }, g.prototype._itemize = function(a) {
                for (var b = this._filterFindItemElements(a), c = this.constructor.Item, d = [], e = 0, f = b.length; f > e; e++) {
                    var g = b[e],
                        h = new c(g, this);
                    d.push(h)
                }
                return d
            }, g.prototype._filterFindItemElements = function(a) {
                return e.filterFindElements(a, this.options.itemSelector)
            }, g.prototype.getItemElements = function() {
                for (var a = [], b = 0, c = this.items.length; c > b; b++) a.push(this.items[b].element);
                return a
            }, g.prototype.layout = function() {
                this._resetLayout(), this._manageStamps();
                var a = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
                this.layoutItems(this.items, a), this._isLayoutInited = !0
            }, g.prototype._init = g.prototype.layout, g.prototype._resetLayout = function() {
                this.getSize()
            }, g.prototype.getSize = function() {
                this.size = d(this.element)
            }, g.prototype._getMeasurement = function(a, b) {
                var c, f = this.options[a];
                f ? ("string" == typeof f ? c = this.element.querySelector(f) : e.isElement(f) && (c = f), this[a] = c ? d(c)[b] : f) : this[a] = 0
            }, g.prototype.layoutItems = function(a, b) {
                a = this._getItemsForLayout(a), this._layoutItems(a, b), this._postLayout()
            }, g.prototype._getItemsForLayout = function(a) {
                for (var b = [], c = 0, d = a.length; d > c; c++) {
                    var e = a[c];
                    e.isIgnored || b.push(e)
                }
                return b
            }, g.prototype._layoutItems = function(a, b) {
                if (this._emitCompleteOnItems("layout", a), a && a.length) {
                    for (var c = [], d = 0, e = a.length; e > d; d++) {
                        var f = a[d],
                            g = this._getItemLayoutPosition(f);
                        g.item = f, g.isInstant = b || f.isLayoutInstant, c.push(g)
                    }
                    this._processLayoutQueue(c)
                }
            }, g.prototype._getItemLayoutPosition = function() {
                return {
                    x: 0,
                    y: 0
                }
            }, g.prototype._processLayoutQueue = function(a) {
                for (var b = 0, c = a.length; c > b; b++) {
                    var d = a[b];
                    this._positionItem(d.item, d.x, d.y, d.isInstant)
                }
            }, g.prototype._positionItem = function(a, b, c, d) {
                d ? a.goTo(b, c) : a.moveTo(b, c)
            }, g.prototype._postLayout = function() {
                this.resizeContainer()
            }, g.prototype.resizeContainer = function() {
                if (this.options.isResizingContainer) {
                    var a = this._getContainerSize();
                    a && (this._setContainerMeasure(a.width, !0), this._setContainerMeasure(a.height, !1))
                }
            }, g.prototype._getContainerSize = j,
            g.prototype._setContainerMeasure = function(a, b) {
                if (void 0 !== a) {
                    var c = this.size;
                    c.isBorderBox && (a += b ? c.paddingLeft + c.paddingRight + c.borderLeftWidth + c.borderRightWidth : c.paddingBottom + c.paddingTop + c.borderTopWidth + c.borderBottomWidth), a = Math.max(a, 0), this.element.style[b ? "width" : "height"] = a + "px"
                }
            }, g.prototype._emitCompleteOnItems = function(a, b) {
                function c() {
                    e.emitEvent(a + "Complete", [b])
                }

                function d() {
                    g++, g === f && c()
                }
                var e = this,
                    f = b.length;
                if (!b || !f) return void c();
                for (var g = 0, h = 0, i = b.length; i > h; h++) {
                    var j = b[h];
                    j.once(a, d)
                }
            }, g.prototype.ignore = function(a) {
                var b = this.getItem(a);
                b && (b.isIgnored = !0)
            }, g.prototype.unignore = function(a) {
                var b = this.getItem(a);
                b && delete b.isIgnored
            }, g.prototype.stamp = function(a) {
                if (a = this._find(a)) {
                    this.stamps = this.stamps.concat(a);
                    for (var b = 0, c = a.length; c > b; b++) {
                        var d = a[b];
                        this.ignore(d)
                    }
                }
            }, g.prototype.unstamp = function(a) {
                if (a = this._find(a))
                    for (var b = 0, c = a.length; c > b; b++) {
                        var d = a[b];
                        e.removeFrom(this.stamps, d), this.unignore(d)
                    }
            }, g.prototype._find = function(a) {
                return a ? ("string" == typeof a && (a = this.element.querySelectorAll(a)), a = e.makeArray(a)) : void 0
            }, g.prototype._manageStamps = function() {
                if (this.stamps && this.stamps.length) {
                    this._getBoundingRect();
                    for (var a = 0, b = this.stamps.length; b > a; a++) {
                        var c = this.stamps[a];
                        this._manageStamp(c)
                    }
                }
            }, g.prototype._getBoundingRect = function() {
                var a = this.element.getBoundingClientRect(),
                    b = this.size;
                this._boundingRect = {
                    left: a.left + b.paddingLeft + b.borderLeftWidth,
                    top: a.top + b.paddingTop + b.borderTopWidth,
                    right: a.right - (b.paddingRight + b.borderRightWidth),
                    bottom: a.bottom - (b.paddingBottom + b.borderBottomWidth)
                }
            }, g.prototype._manageStamp = j, g.prototype._getElementOffset = function(a) {
                var b = a.getBoundingClientRect(),
                    c = this._boundingRect,
                    e = d(a),
                    f = {
                        left: b.left - c.left - e.marginLeft,
                        top: b.top - c.top - e.marginTop,
                        right: c.right - b.right - e.marginRight,
                        bottom: c.bottom - b.bottom - e.marginBottom
                    };
                return f
            }, g.prototype.handleEvent = function(a) {
                var b = "on" + a.type;
                this[b] && this[b](a)
            }, g.prototype.bindResize = function() {
                this.isResizeBound || (b.bind(a, "resize", this), this.isResizeBound = !0)
            }, g.prototype.unbindResize = function() {
                this.isResizeBound && b.unbind(a, "resize", this), this.isResizeBound = !1
            }, g.prototype.onresize = function() {
                function a() {
                    b.resize(), delete b.resizeTimeout
                }
                this.resizeTimeout && clearTimeout(this.resizeTimeout);
                var b = this;
                this.resizeTimeout = setTimeout(a, 100)
            }, g.prototype.resize = function() {
                this.isResizeBound && this.needsResizeLayout() && this.layout()
            }, g.prototype.needsResizeLayout = function() {
                var a = d(this.element),
                    b = this.size && a;
                return b && a.innerWidth !== this.size.innerWidth
            }, g.prototype.addItems = function(a) {
                var b = this._itemize(a);
                return b.length && (this.items = this.items.concat(b)), b
            }, g.prototype.appended = function(a) {
                var b = this.addItems(a);
                b.length && (this.layoutItems(b, !0), this.reveal(b))
            }, g.prototype.prepended = function(a) {
                var b = this._itemize(a);
                if (b.length) {
                    var c = this.items.slice(0);
                    this.items = b.concat(c), this._resetLayout(), this._manageStamps(), this.layoutItems(b, !0), this.reveal(b), this.layoutItems(c)
                }
            }, g.prototype.reveal = function(a) {
                this._emitCompleteOnItems("reveal", a);
                for (var b = a && a.length, c = 0; b && b > c; c++) {
                    var d = a[c];
                    d.reveal()
                }
            }, g.prototype.hide = function(a) {
                this._emitCompleteOnItems("hide", a);
                for (var b = a && a.length, c = 0; b && b > c; c++) {
                    var d = a[c];
                    d.hide()
                }
            }, g.prototype.revealItemElements = function(a) {
                var b = this.getItems(a);
                this.reveal(b)
            }, g.prototype.hideItemElements = function(a) {
                var b = this.getItems(a);
                this.hide(b)
            }, g.prototype.getItem = function(a) {
                for (var b = 0, c = this.items.length; c > b; b++) {
                    var d = this.items[b];
                    if (d.element === a) return d
                }
            }, g.prototype.getItems = function(a) {
                a = e.makeArray(a);
                for (var b = [], c = 0, d = a.length; d > c; c++) {
                    var f = a[c],
                        g = this.getItem(f);
                    g && b.push(g)
                }
                return b
            }, g.prototype.remove = function(a) {
                var b = this.getItems(a);
                if (this._emitCompleteOnItems("remove", b), b && b.length)
                    for (var c = 0, d = b.length; d > c; c++) {
                        var f = b[c];
                        f.remove(), e.removeFrom(this.items, f)
                    }
            }, g.prototype.destroy = function() {
                var a = this.element.style;
                a.height = "", a.position = "", a.width = "";
                for (var b = 0, c = this.items.length; c > b; b++) {
                    var d = this.items[b];
                    d.destroy()
                }
                this.unbindResize();
                var e = this.element.outlayerGUID;
                delete l[e], delete this.element.outlayerGUID, i && i.removeData(this.element, this.constructor.namespace)
            }, g.data = function(a) {
                a = e.getQueryElement(a);
                var b = a && a.outlayerGUID;
                return b && l[b]
            }, g.create = function(a, b) {
                function c() {
                    g.apply(this, arguments)
                }
                return Object.create ? c.prototype = Object.create(g.prototype) : e.extend(c.prototype, g.prototype), c.prototype.constructor = c, c.defaults = e.extend({}, g.defaults), e.extend(c.defaults, b), c.prototype.settings = {}, c.namespace = a, c.data = g.data, c.Item = function() {
                    f.apply(this, arguments)
                }, c.Item.prototype = new f, e.htmlInit(c, a), i && i.bridget && i.bridget(a, c), c
            }, g.Item = f, g
    }),
    function(a, b) {
        "function" == typeof define && define.amd ? define("isotope/js/item", ["outlayer/outlayer"], b) : "object" == typeof exports ? module.exports = b(require("outlayer")) : (a.Isotope = a.Isotope || {}, a.Isotope.Item = b(a.Outlayer))
    }(window, function(a) {
        function b() {
            a.Item.apply(this, arguments)
        }
        b.prototype = new a.Item, b.prototype._create = function() {
            this.id = this.layout.itemGUID++, a.Item.prototype._create.call(this), this.sortData = {}
        }, b.prototype.updateSortData = function() {
            if (!this.isIgnored) {
                this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
                var a = this.layout.options.getSortData,
                    b = this.layout._sorters;
                for (var c in a) {
                    var d = b[c];
                    this.sortData[c] = d(this.element, this)
                }
            }
        };
        var c = b.prototype.destroy;
        return b.prototype.destroy = function() {
            c.apply(this, arguments), this.css({
                display: ""
            })
        }, b
    }),
    function(a, b) {
        "function" == typeof define && define.amd ? define("isotope/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], b) : "object" == typeof exports ? module.exports = b(require("get-size"), require("outlayer")) : (a.Isotope = a.Isotope || {}, a.Isotope.LayoutMode = b(a.getSize, a.Outlayer))
    }(window, function(a, b) {
        function c(a) {
            this.isotope = a, a && (this.options = a.options[this.namespace], this.element = a.element, this.items = a.filteredItems, this.size = a.size)
        }
        return function() {
            function a(a) {
                return function() {
                    return b.prototype[a].apply(this.isotope, arguments)
                }
            }
            for (var d = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout"], e = 0, f = d.length; f > e; e++) {
                var g = d[e];
                c.prototype[g] = a(g)
            }
        }(), c.prototype.needsVerticalResizeLayout = function() {
            var b = a(this.isotope.element),
                c = this.isotope.size && b;
            return c && b.innerHeight != this.isotope.size.innerHeight
        }, c.prototype._getMeasurement = function() {
            this.isotope._getMeasurement.apply(this, arguments)
        }, c.prototype.getColumnWidth = function() {
            this.getSegmentSize("column", "Width")
        }, c.prototype.getRowHeight = function() {
            this.getSegmentSize("row", "Height")
        }, c.prototype.getSegmentSize = function(a, b) {
            var c = a + b,
                d = "outer" + b;
            if (this._getMeasurement(c, d), !this[c]) {
                var e = this.getFirstItemSize();
                this[c] = e && e[d] || this.isotope.size["inner" + b]
            }
        }, c.prototype.getFirstItemSize = function() {
            var b = this.isotope.filteredItems[0];
            return b && b.element && a(b.element)
        }, c.prototype.layout = function() {
            this.isotope.layout.apply(this.isotope, arguments)
        }, c.prototype.getSize = function() {
            this.isotope.getSize(), this.size = this.isotope.size
        }, c.modes = {}, c.create = function(a, b) {
            function d() {
                c.apply(this, arguments)
            }
            return d.prototype = new c, b && (d.options = b), d.prototype.namespace = a, c.modes[a] = d, d
        }, c
    }),
    function(a, b) {
        "function" == typeof define && define.amd ? define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size", "fizzy-ui-utils/utils"], b) : "object" == typeof exports ? module.exports = b(require("outlayer"), require("get-size"), require("fizzy-ui-utils")) : a.Masonry = b(a.Outlayer, a.getSize, a.fizzyUIUtils)
    }(window, function(a, b, c) {
        var d = a.create("masonry");
        return d.prototype._resetLayout = function() {
            this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns();
            var a = this.cols;
            for (this.colYs = []; a--;) this.colYs.push(0);
            this.maxY = 0
        }, d.prototype.measureColumns = function() {
            if (this.getContainerWidth(), !this.columnWidth) {
                var a = this.items[0],
                    c = a && a.element;
                this.columnWidth = c && b(c).outerWidth || this.containerWidth
            }
            var d = this.columnWidth += this.gutter,
                e = this.containerWidth + this.gutter,
                f = e / d,
                g = d - e % d,
                h = g && 1 > g ? "round" : "floor";
            f = Math[h](f), this.cols = Math.max(f, 1)
        }, d.prototype.getContainerWidth = function() {
            var a = this.options.isFitWidth ? this.element.parentNode : this.element,
                c = b(a);
            this.containerWidth = c && c.innerWidth
        }, d.prototype._getItemLayoutPosition = function(a) {
            a.getSize();
            var b = a.size.outerWidth % this.columnWidth,
                d = b && 1 > b ? "round" : "ceil",
                e = Math[d](a.size.outerWidth / this.columnWidth);
            e = Math.min(e, this.cols);
            for (var f = this._getColGroup(e), g = Math.min.apply(Math, f), h = c.indexOf(f, g), i = {
                    x: this.columnWidth * h,
                    y: g
                }, j = g + a.size.outerHeight, k = this.cols + 1 - f.length, l = 0; k > l; l++) this.colYs[h + l] = j;
            return i
        }, d.prototype._getColGroup = function(a) {
            if (2 > a) return this.colYs;
            for (var b = [], c = this.cols + 1 - a, d = 0; c > d; d++) {
                var e = this.colYs.slice(d, d + a);
                b[d] = Math.max.apply(Math, e)
            }
            return b
        }, d.prototype._manageStamp = function(a) {
            var c = b(a),
                d = this._getElementOffset(a),
                e = this.options.isOriginLeft ? d.left : d.right,
                f = e + c.outerWidth,
                g = Math.floor(e / this.columnWidth);
            g = Math.max(0, g);
            var h = Math.floor(f / this.columnWidth);
            h -= f % this.columnWidth ? 0 : 1, h = Math.min(this.cols - 1, h);
            for (var i = (this.options.isOriginTop ? d.top : d.bottom) + c.outerHeight, j = g; h >= j; j++) this.colYs[j] = Math.max(i, this.colYs[j])
        }, d.prototype._getContainerSize = function() {
            this.maxY = Math.max.apply(Math, this.colYs);
            var a = {
                height: this.maxY
            };
            return this.options.isFitWidth && (a.width = this._getContainerFitWidth()), a
        }, d.prototype._getContainerFitWidth = function() {
            for (var a = 0, b = this.cols; --b && 0 === this.colYs[b];) a++;
            return (this.cols - a) * this.columnWidth - this.gutter
        }, d.prototype.needsResizeLayout = function() {
            var a = this.containerWidth;
            return this.getContainerWidth(), a !== this.containerWidth
        }, d
    }),
    function(a, b) {
        "function" == typeof define && define.amd ? define("isotope/js/layout-modes/masonry", ["../layout-mode", "masonry/masonry"], b) : "object" == typeof exports ? module.exports = b(require("../layout-mode"), require("masonry-layout")) : b(a.Isotope.LayoutMode, a.Masonry)
    }(window, function(a, b) {
        function c(a, b) {
            for (var c in b) a[c] = b[c];
            return a
        }
        var d = a.create("masonry"),
            e = d.prototype._getElementOffset,
            f = d.prototype.layout,
            g = d.prototype._getMeasurement;
        c(d.prototype, b.prototype), d.prototype._getElementOffset = e, d.prototype.layout = f, d.prototype._getMeasurement = g;
        var h = d.prototype.measureColumns;
        d.prototype.measureColumns = function() {
            this.items = this.isotope.filteredItems, h.call(this)
        };
        var i = d.prototype._manageStamp;
        return d.prototype._manageStamp = function() {
            this.options.isOriginLeft = this.isotope.options.isOriginLeft, this.options.isOriginTop = this.isotope.options.isOriginTop, i.apply(this, arguments)
        }, d
    }),
    function(a, b) {
        "function" == typeof define && define.amd ? define("isotope/js/layout-modes/fit-rows", ["../layout-mode"], b) : "object" == typeof exports ? module.exports = b(require("../layout-mode")) : b(a.Isotope.LayoutMode)
    }(window, function(a) {
        var b = a.create("fitRows");
        return b.prototype._resetLayout = function() {
            this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth")
        }, b.prototype._getItemLayoutPosition = function(a) {
            a.getSize();
            var b = a.size.outerWidth + this.gutter,
                c = this.isotope.size.innerWidth + this.gutter;
            0 !== this.x && b + this.x > c && (this.x = 0, this.y = this.maxY);
            var d = {
                x: this.x,
                y: this.y
            };
            return this.maxY = Math.max(this.maxY, this.y + a.size.outerHeight), this.x += b, d
        }, b.prototype._getContainerSize = function() {
            return {
                height: this.maxY
            }
        }, b
    }),
    function(a, b) {
        "function" == typeof define && define.amd ? define("isotope/js/layout-modes/vertical", ["../layout-mode"], b) : "object" == typeof exports ? module.exports = b(require("../layout-mode")) : b(a.Isotope.LayoutMode)
    }(window, function(a) {
        var b = a.create("vertical", {
            horizontalAlignment: 0
        });
        return b.prototype._resetLayout = function() {
            this.y = 0
        }, b.prototype._getItemLayoutPosition = function(a) {
            a.getSize();
            var b = (this.isotope.size.innerWidth - a.size.outerWidth) * this.options.horizontalAlignment,
                c = this.y;
            return this.y += a.size.outerHeight, {
                x: b,
                y: c
            }
        }, b.prototype._getContainerSize = function() {
            return {
                height: this.y
            }
        }, b
    }),
    function(a, b) {
        "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope/js/item", "isotope/js/layout-mode", "isotope/js/layout-modes/masonry", "isotope/js/layout-modes/fit-rows", "isotope/js/layout-modes/vertical"], function(c, d, e, f, g, h) {
            return b(a, c, d, e, f, g, h)
        }) : "object" == typeof exports ? module.exports = b(a, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("./item"), require("./layout-mode"), require("./layout-modes/masonry"), require("./layout-modes/fit-rows"), require("./layout-modes/vertical")) : a.Isotope = b(a, a.Outlayer, a.getSize, a.matchesSelector, a.fizzyUIUtils, a.Isotope.Item, a.Isotope.LayoutMode)
    }(window, function(a, b, c, d, e, f, g) {
        function h(a, b) {
            return function(c, d) {
                for (var e = 0, f = a.length; f > e; e++) {
                    var g = a[e],
                        h = c.sortData[g],
                        i = d.sortData[g];
                    if (h > i || i > h) {
                        var j = void 0 !== b[g] ? b[g] : b,
                            k = j ? 1 : -1;
                        return (h > i ? 1 : -1) * k
                    }
                }
                return 0
            }
        }
        var i = a.jQuery,
            j = String.prototype.trim ? function(a) {
                return a.trim()
            } : function(a) {
                return a.replace(/^\s+|\s+$/g, "")
            },
            k = document.documentElement,
            l = k.textContent ? function(a) {
                return a.textContent
            } : function(a) {
                return a.innerText
            },
            m = b.create("isotope", {
                layoutMode: "masonry",
                isJQueryFiltering: !0,
                sortAscending: !0
            });
        m.Item = f, m.LayoutMode = g, m.prototype._create = function() {
            this.itemGUID = 0, this._sorters = {}, this._getSorters(), b.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"];
            for (var a in g.modes) this._initLayoutMode(a)
        }, m.prototype.reloadItems = function() {
            this.itemGUID = 0, b.prototype.reloadItems.call(this)
        }, m.prototype._itemize = function() {
            for (var a = b.prototype._itemize.apply(this, arguments), c = 0, d = a.length; d > c; c++) {
                var e = a[c];
                e.id = this.itemGUID++
            }
            return this._updateItemsSortData(a), a
        }, m.prototype._initLayoutMode = function(a) {
            var b = g.modes[a],
                c = this.options[a] || {};
            this.options[a] = b.options ? e.extend(b.options, c) : c, this.modes[a] = new b(this)
        }, m.prototype.layout = function() {
            return !this._isLayoutInited && this.options.isInitLayout ? void this.arrange() : void this._layout()
        }, m.prototype._layout = function() {
            var a = this._getIsInstant();
            this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, a), this._isLayoutInited = !0
        }, m.prototype.arrange = function(a) {
            function b() {
                d.reveal(c.needReveal), d.hide(c.needHide)
            }
            this.option(a), this._getIsInstant();
            var c = this._filter(this.items);
            this.filteredItems = c.matches;
            var d = this;
            this._bindArrangeComplete(), this._isInstant ? this._noTransition(b) : b(), this._sort(), this._layout()
        }, m.prototype._init = m.prototype.arrange, m.prototype._getIsInstant = function() {
            var a = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
            return this._isInstant = a, a
        }, m.prototype._bindArrangeComplete = function() {
            function a() {
                b && c && d && e.emitEvent("arrangeComplete", [e.filteredItems])
            }
            var b, c, d, e = this;
            this.once("layoutComplete", function() {
                b = !0, a()
            }), this.once("hideComplete", function() {
                c = !0, a()
            }), this.once("revealComplete", function() {
                d = !0, a()
            })
        }, m.prototype._filter = function(a) {
            var b = this.options.filter;
            b = b || "*";
            for (var c = [], d = [], e = [], f = this._getFilterTest(b), g = 0, h = a.length; h > g; g++) {
                var i = a[g];
                if (!i.isIgnored) {
                    var j = f(i);
                    j && c.push(i), j && i.isHidden ? d.push(i) : j || i.isHidden || e.push(i)
                }
            }
            return {
                matches: c,
                needReveal: d,
                needHide: e
            }
        }, m.prototype._getFilterTest = function(a) {
            return i && this.options.isJQueryFiltering ? function(b) {
                return i(b.element).is(a)
            } : "function" == typeof a ? function(b) {
                return a(b.element)
            } : function(b) {
                return d(b.element, a)
            }
        }, m.prototype.updateSortData = function(a) {
            var b;
            a ? (a = e.makeArray(a), b = this.getItems(a)) : b = this.items, this._getSorters(), this._updateItemsSortData(b)
        }, m.prototype._getSorters = function() {
            var a = this.options.getSortData;
            for (var b in a) {
                var c = a[b];
                this._sorters[b] = n(c)
            }
        }, m.prototype._updateItemsSortData = function(a) {
            for (var b = a && a.length, c = 0; b && b > c; c++) {
                var d = a[c];
                d.updateSortData()
            }
        };
        var n = function() {
            function a(a) {
                if ("string" != typeof a) return a;
                var c = j(a).split(" "),
                    d = c[0],
                    e = d.match(/^\[(.+)\]$/),
                    f = e && e[1],
                    g = b(f, d),
                    h = m.sortDataParsers[c[1]];
                return a = h ? function(a) {
                    return a && h(g(a))
                } : function(a) {
                    return a && g(a)
                }
            }

            function b(a, b) {
                var c;
                return c = a ? function(b) {
                    return b.getAttribute(a)
                } : function(a) {
                    var c = a.querySelector(b);
                    return c && l(c)
                }
            }
            return a
        }();
        m.sortDataParsers = {
            parseInt: function(a) {
                return parseInt(a, 10)
            },
            parseFloat: function(a) {
                return parseFloat(a)
            }
        }, m.prototype._sort = function() {
            var a = this.options.sortBy;
            if (a) {
                var b = [].concat.apply(a, this.sortHistory),
                    c = h(b, this.options.sortAscending);
                this.filteredItems.sort(c), a != this.sortHistory[0] && this.sortHistory.unshift(a)
            }
        }, m.prototype._mode = function() {
            var a = this.options.layoutMode,
                b = this.modes[a];
            if (!b) throw Error("No layout mode: " + a);
            return b.options = this.options[a], b
        }, m.prototype._resetLayout = function() {
            b.prototype._resetLayout.call(this), this._mode()._resetLayout()
        }, m.prototype._getItemLayoutPosition = function(a) {
            return this._mode()._getItemLayoutPosition(a)
        }, m.prototype._manageStamp = function(a) {
            this._mode()._manageStamp(a)
        }, m.prototype._getContainerSize = function() {
            return this._mode()._getContainerSize()
        }, m.prototype.needsResizeLayout = function() {
            return this._mode().needsResizeLayout()
        }, m.prototype.appended = function(a) {
            var b = this.addItems(a);
            if (b.length) {
                var c = this._filterRevealAdded(b);
                this.filteredItems = this.filteredItems.concat(c)
            }
        }, m.prototype.prepended = function(a) {
            var b = this._itemize(a);
            if (b.length) {
                this._resetLayout(), this._manageStamps();
                var c = this._filterRevealAdded(b);
                this.layoutItems(this.filteredItems), this.filteredItems = c.concat(this.filteredItems), this.items = b.concat(this.items)
            }
        }, m.prototype._filterRevealAdded = function(a) {
            var b = this._filter(a);
            return this.hide(b.needHide), this.reveal(b.matches), this.layoutItems(b.matches, !0), b.matches
        }, m.prototype.insert = function(a) {
            var b = this.addItems(a);
            if (b.length) {
                var c, d, e = b.length;
                for (c = 0; e > c; c++) d = b[c], this.element.appendChild(d.element);
                var f = this._filter(b).matches;
                for (c = 0; e > c; c++) b[c].isLayoutInstant = !0;
                for (this.arrange(), c = 0; e > c; c++) delete b[c].isLayoutInstant;
                this.reveal(f)
            }
        };
        var o = m.prototype.remove;
        return m.prototype.remove = function(a) {
            a = e.makeArray(a);
            var b = this.getItems(a);
            o.call(this, a);
            var c = b && b.length;
            if (c)
                for (var d = 0; c > d; d++) {
                    var f = b[d];
                    e.removeFrom(this.filteredItems, f)
                }
        }, m.prototype.shuffle = function() {
            for (var a = 0, b = this.items.length; b > a; a++) {
                var c = this.items[a];
                c.sortData.random = Math.random()
            }
            this.options.sortBy = "random", this._sort(), this._layout()
        }, m.prototype._noTransition = function(a) {
            var b = this.options.transitionDuration;
            this.options.transitionDuration = 0;
            var c = a.call(this);
            return this.options.transitionDuration = b, c
        }, m.prototype.getFilteredItemElements = function() {
            for (var a = [], b = 0, c = this.filteredItems.length; c > b; b++) a.push(this.filteredItems[b].element);
            return a
        }, m
    }),
    function(a) {
        "function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery)
    }(function(a, b) {
        "use strict";
        a.infinitescroll = function(b, c, d) {
            this.element = a(d), this._create(b, c) || (this.failed = !0)
        }, a.infinitescroll.defaults = {
            loading: {
                finished: b,
                finishedMsg: "<em>Congratulations, you've reached the end of the internet.</em>",
                img: "data:image/gif;base64,R0lGODlh3AATAPQeAPDy+MnQ6LW/4N3h8MzT6rjC4sTM5r/I5NHX7N7j8c7U6tvg8OLl8uXo9Ojr9b3G5MfP6Ovu9tPZ7PT1+vX2+tbb7vf4+8/W69jd7rC73vn5/O/x+K243ai02////wAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQECgD/ACwAAAAA3AATAAAF/6AnjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEj0BAScpHLJbDqf0Kh0Sq1ar9isdioItAKGw+MAKYMFhbF63CW438f0mg1R2O8EuXj/aOPtaHx7fn96goR4hmuId4qDdX95c4+RBIGCB4yAjpmQhZN0YGYGXitdZBIVGAsLoq4BBKQDswm1CQRkcG6ytrYKubq8vbfAcMK9v7q7EMO1ycrHvsW6zcTKsczNz8HZw9vG3cjTsMIYqQkCLBwHCgsMDQ4RDAYIqfYSFxDxEfz88/X38Onr16+Bp4ADCco7eC8hQYMAEe57yNCew4IVBU7EGNDiRn8Z831cGLHhSIgdFf9chIeBg7oA7gjaWUWTVQAGE3LqBDCTlc9WOHfm7PkTqNCh54rePDqB6M+lR536hCpUqs2gVZM+xbrTqtGoWqdy1emValeXKzggYBBB5y1acFNZmEvXAoN2cGfJrTv3bl69Ffj2xZt3L1+/fw3XRVw4sGDGcR0fJhxZsF3KtBTThZxZ8mLMgC3fRatCbYMNFCzwLEqLgE4NsDWs/tvqdezZf13Hvk2A9Szdu2X3pg18N+68xXn7rh1c+PLksI/Dhe6cuO3ow3NfV92bdArTqC2Ebd3A8vjf5QWfH6Bg7Nz17c2fj69+fnq+8N2Lty+fuP78/eV2X13neIcCeBRwxorbZrA1ANoCDGrgoG8RTshahQ9iSKEEzUmYIYfNWViUhheCGJyIP5E4oom7WWjgCeBFAJNv1DVV01MAdJhhjdkplWNzO/5oXI846njjVEIqR2OS2B1pE5PVscajkxhMycqLJghQSwT40PgfAl4GqNSXYdZXJn5gSkmmmmJu1aZYb14V51do+pTOCmA40AqVCIhG5IJ9PvYnhIFOxmdqhpaI6GeHCtpooisuutmg+Eg62KOMKuqoTaXgicQWoIYq6qiklmoqFV0UoeqqrLbq6quwxirrrLTWauutJ4QAACH5BAUKABwALAcABADOAAsAAAX/IPd0D2dyRCoUp/k8gpHOKtseR9yiSmGbuBykler9XLAhkbDavXTL5k2oqFqNOxzUZPU5YYZd1XsD72rZpBjbeh52mSNnMSC8lwblKZGwi+0QfIJ8CncnCoCDgoVnBHmKfByGJimPkIwtiAeBkH6ZHJaKmCeVnKKTHIihg5KNq4uoqmEtcRUtEREMBggtEr4QDrjCuRC8h7/BwxENeicSF8DKy82pyNLMOxzWygzFmdvD2L3P0dze4+Xh1Arkyepi7dfFvvTtLQkZBC0T/FX3CRgCMOBHsJ+EHYQY7OinAGECgQsB+Lu3AOK+CewcWjwxQeJBihtNGHSoQOE+iQ3//4XkwBBhRZMcUS6YSXOAwIL8PGqEaSJCiYt9SNoCmnJPAgUVLChdaoFBURN8MAzl2PQphwQLfDFd6lTowglHve6rKpbjhK7/pG5VinZP1qkiz1rl4+tr2LRwWU64cFEihwEtZgbgR1UiHaMVvxpOSwBA37kzGz9e8G+B5MIEKLutOGEsAH2ATQwYfTmuX8aETWdGPZmiZcccNSzeTCA1Sw0bdiitC7LBWgu8jQr8HRzqgpK6gX88QbrB14z/kF+ELpwB8eVQj/JkqdylAudji/+ts3039vEEfK8Vz2dlvxZKG0CmbkKDBvllRd6fCzDvBLKBDSCeffhRJEFebFk1k/Mv9jVIoIJZSeBggwUaNeB+Qk34IE0cXlihcfRxkOAJFFhwGmKlmWDiakZhUJtnLBpnWWcnKaAZcxI0piFGGLBm1mc90kajSCveeBVWKeYEoU2wqeaQi0PetoE+rr14EpVC7oAbAUHqhYExbn2XHHsVqbcVew9tx8+XJKk5AZsqqdlddGpqAKdbAYBn1pcczmSTdWvdmZ17c1b3FZ99vnTdCRFM8OEcAhLwm1NdXnWcBBSMRWmfkWZqVlsmLIiAp/o1gGV2vpS4lalGYsUOqXrddcKCmK61aZ8SjEpUpVFVoCpTj4r661Km7kBHjrDyc1RAIQAAIfkEBQoAGwAsBwAEAM4ACwAABf/gtmUCd4goQQgFKj6PYKi0yrrbc8i4ohQt12EHcal+MNSQiCP8gigdz7iCioaCIvUmZLp8QBzW0EN2vSlCuDtFKaq4RyHzQLEKZNdiQDhRDVooCwkbfm59EAmKi4SGIm+AjIsKjhsqB4mSjT2IOIOUnICeCaB/mZKFNTSRmqVpmJqklSqskq6PfYYCDwYHDC4REQwGCBLGxxIQDsHMwhAIX8bKzcENgSLGF9PU1j3Sy9zX2NrgzQziChLk1BHWxcjf7N046tvN82715czn9Pryz6Ilc4ACj4EBOCZM8KEnAYYADBRKnACAYUMFv1wotIhCEcaJCisqwJFgAUSQGyX/kCSVUUTIdKMwJlyo0oXHlhskwrTJciZHEXsgaqS4s6PJiCAr1uzYU8kBBSgnWFqpoMJMUjGtDmUwkmfVmVypakWhEKvXsS4nhLW5wNjVroJIoc05wSzTr0PtiigpYe4EC2vj4iWrFu5euWIMRBhacaVJhYQBEFjA9jHjyQ0xEABwGceGAZYjY0YBOrRLCxUp29QM+bRkx5s7ZyYgVbTqwwti2ybJ+vLtDYpycyZbYOlptxdx0kV+V7lC5iJAyyRrwYKxAdiz82ng0/jnAdMJFz0cPi104Ec1Vj9/M6F173vKL/feXv156dw11tlqeMMnv4V5Ap53GmjQQH97nFfg+IFiucfgRX5Z8KAgbUlQ4IULIlghhhdOSB6AgX0IVn8eReghen3NRIBsRgnH4l4LuEidZBjwRpt6NM5WGwoW0KSjCwX6yJSMab2GwwAPDXfaBCtWpluRTQqC5JM5oUZAjUNS+VeOLWpJEQ7VYQANW0INJSZVDFSnZphjSikfmzE5N4EEbQI1QJmnWXCmHulRp2edwDXF43txukenJwvI9xyg9Q26Z3MzGUcBYFEChZh6DVTq34AU8Iflh51Sd+CnKFYQ6mmZkhqfBKfSxZWqA9DZanWjxmhrWwi0qtCrt/43K6WqVjjpmhIqgEGvculaGKklKstAACEAACH5BAUKABwALAcABADOAAsAAAX/ICdyQmaMYyAUqPgIBiHPxNpy79kqRXH8wAPsRmDdXpAWgWdEIYm2llCHqjVHU+jjJkwqBTecwItShMXkEfNWSh8e1NGAcLgpDGlRgk7EJ/6Ae3VKfoF/fDuFhohVeDeCfXkcCQqDVQcQhn+VNDOYmpSWaoqBlUSfmowjEA+iEAEGDRGztAwGCDcXEA60tXEiCrq8vREMEBLIyRLCxMWSHMzExnbRvQ2Sy7vN0zvVtNfU2tLY3rPgLdnDvca4VQS/Cpk3ABwSLQkYAQwT/P309vcI7OvXr94jBQMJ/nskkGA/BQBRLNDncAIAiDcG6LsxAWOLiQzmeURBKWSLCQbv/1F0eDGinJUKR47YY1IEgQASKk7Yc7ACRwZm7mHweRJoz59BJUogisKCUaFMR0x4SlJBVBFTk8pZivTR0K73rN5wqlXEAq5Fy3IYgHbEzQ0nLy4QSoCjXLoom96VOJEeCosK5n4kkFfqXjl94wa+l1gvAcGICbewAOAxY8l/Ky/QhAGz4cUkGxu2HNozhwMGBnCUqUdBg9UuW9eUynqSwLHIBujePef1ZGQZXcM+OFuEBeBhi3OYgLyqcuaxbT9vLkf4SeqyWxSQpKGB2gQpm1KdWbu72rPRzR9Ne2Nu9Kzr/1Jqj0yD/fvqP4aXOt5sW/5qsXXVcv1Nsp8IBUAmgswGF3llGgeU1YVXXKTN1FlhWFXW3gIE+DVChApysACHHo7Q4A35lLichh+ROBmLKAzgYmYEYDAhCgxKGOOMn4WR4kkDaoBBOxJtdNKQxFmg5JIWIBnQc07GaORfUY4AEkdV6jHlCEISSZ5yTXpp1pbGZbkWmcuZmQCaE6iJ0FhjMaDjTMsgZaNEHFRAQVp3bqXnZED1qYcECOz5V6BhSWCoVJQIKuKQi2KFKEkEFAqoAo7uYSmO3jk61wUUMKmknJ4SGimBmAa0qVQBhAAAIfkEBQoAGwAsBwAEAM4ACwAABf/gJm5FmRlEqhJC+bywgK5pO4rHI0D3pii22+Mg6/0Ej96weCMAk7cDkXf7lZTTnrMl7eaYoy10JN0ZFdco0XAuvKI6qkgVFJXYNwjkIBcNBgR8TQoGfRsJCRuCYYQQiI+ICosiCoGOkIiKfSl8mJkHZ4U9kZMbKaI3pKGXmJKrngmug4WwkhA0lrCBWgYFCCMQFwoQDRHGxwwGCBLMzRLEx8iGzMMO0cYNeCMKzBDW19lnF9DXDIY/48Xg093f0Q3s1dcR8OLe8+Y91OTv5wrj7o7B+7VNQqABIoRVCMBggsOHE36kSoCBIcSH3EbFangxogJYFi8CkJhqQciLJEf/LDDJEeJIBT0GsOwYUYJGBS0fjpQAMidGmyVP6sx4Y6VQhzs9VUwkwqaCCh0tmKoFtSMDmBOf9phg4SrVrROuasRQAaxXpVUhdsU6IsECZlvX3kwLUWzRt0BHOLTbNlbZG3vZinArge5Dvn7wbqtQkSYAAgtKmnSsYKVKo2AfW048uaPmG386i4Q8EQMBAIAnfB7xBxBqvapJ9zX9WgRS2YMpnvYMGdPK3aMjt/3dUcNI4blpj7iwkMFWDXDvSmgAlijrt9RTR78+PS6z1uAJZIe93Q8g5zcsWCi/4Y+C8bah5zUv3vv89uft30QP23punGCx5954oBBwnwYaNCDY/wYrsYeggnM9B2Fpf8GG2CEUVWhbWAtGouEGDy7Y4IEJVrbSiXghqGKIo7z1IVcXIkKWWR361QOLWWnIhwERpLaaCCee5iMBGJQmJGyPFTnbkfHVZGRtIGrg5HALEJAZbu39BuUEUmq1JJQIPtZilY5hGeSWsSk52G9XqsmgljdIcABytq13HyIM6RcUA+r1qZ4EBF3WHWB29tBgAzRhEGhig8KmqKFv8SeCeo+mgsF7YFXa1qWSbkDpom/mqR1PmHCqJ3fwNRVXjC7S6CZhFVCQ2lWvZiirhQq42SACt25IK2hv8TprriUV1usGgeka7LFcNmCldMLi6qZMgFLgpw16Cipb7bC1knXsBiEAACH5BAUKABsALAcABADOAAsAAAX/4FZsJPkUmUGsLCEUTywXglFuSg7fW1xAvNWLF6sFFcPb42C8EZCj24EJdCp2yoegWsolS0Uu6fmamg8n8YYcLU2bXSiRaXMGvqV6/KAeJAh8VgZqCX+BexCFioWAYgqNi4qAR4ORhRuHY408jAeUhAmYYiuVlpiflqGZa5CWkzc5fKmbbhIpsAoQDRG8vQwQCBLCwxK6vb5qwhfGxxENahvCEA7NzskSy7vNzzzK09W/PNHF1NvX2dXcN8K55cfh69Luveol3vO8zwi4Yhj+AQwmCBw4IYclDAAJDlQggVOChAoLKkgFkSCAHDwWLKhIEOONARsDKryogFPIiAUb/95gJNIiw4wnI778GFPhzBKFOAq8qLJEhQpiNArjMcHCmlTCUDIouTKBhApELSxFWiGiVKY4E2CAekPgUphDu0742nRrVLJZnyrFSqKQ2ohoSYAMW6IoDpNJ4bLdILTnAj8KUF7UeENjAKuDyxIgOuGiOI0EBBMgLNew5AUrDTMGsFixwBIaNCQuAXJB57qNJ2OWm2Aj4skwCQCIyNkhhtMkdsIuodE0AN4LJDRgfLPtn5YDLdBlraAByuUbBgxQwICxMOnYpVOPej074OFdlfc0TqC62OIbcppHjV4o+LrieWhfT8JC/I/T6W8oCl29vQ0XjLdBaA3s1RcPBO7lFvpX8BVoG4O5jTXRQRDuJ6FDTzEWF1/BCZhgbyAKE9qICYLloQYOFtahVRsWYlZ4KQJHlwHS/IYaZ6sZd9tmu5HQm2xi1UaTbzxYwJk/wBF5g5EEYOBZeEfGZmNdFyFZmZIR4jikbLThlh5kUUVJGmRT7sekkziRWUIACABk3T4qCsedgO4xhgGcY7q5pHJ4klBBTQRJ0CeHcoYHHUh6wgfdn9uJdSdMiebGJ0zUPTcoS286FCkrZxnYoYYKWLkBowhQoBeaOlZAgVhLidrXqg2GiqpQpZ4apwSwRtjqrB3muoF9BboaXKmshlqWqsWiGt2wphJkQbAU5hoCACH5BAUKABsALAcABADOAAsAAAX/oGFw2WZuT5oZROsSQnGaKjRvilI893MItlNOJ5v5gDcFrHhKIWcEYu/xFEqNv6B1N62aclysF7fsZYe5aOx2yL5aAUGSaT1oTYMBwQ5VGCAJgYIJCnx1gIOBhXdwiIl7d0p2iYGQUAQBjoOFSQR/lIQHnZ+Ue6OagqYzSqSJi5eTpTxGcjcSChANEbu8DBAIEsHBChe5vL13G7fFuscRDcnKuM3H0La3EA7Oz8kKEsXazr7Cw9/Gztar5uHHvte47MjktznZ2w0G1+D3BgirAqJmJMAQgMGEgwgn5Ei0gKDBhBMALGRYEOJBb5QcWlQo4cbAihZz3GgIMqFEBSM1/4ZEOWPAgpIIJXYU+PIhRG8ja1qU6VHlzZknJNQ6UanCjQkWCIGSUGEjAwVLjc44+DTqUQtPPS5gejUrTa5TJ3g9sWCr1BNUWZI161StiQUDmLYdGfesibQ3XMq1OPYthrwuA2yU2LBs2cBHIypYQPPlYAKFD5cVvNPtW8eVGbdcQADATsiNO4cFAPkvHpedPzc8kUcPgNGgZ5RNDZG05reoE9s2vSEP79MEGiQGy1qP8LA4ZcdtsJE48ONoLTBtTV0B9LsTnPceoIDBDQvS7W7vfjVY3q3eZ4A339J4eaAmKqU/sV58HvJh2RcnIBsDUw0ABqhBA5aV5V9XUFGiHfVeAiWwoFgJJrIXRH1tEMiDFV4oHoAEGlaWhgIGSGBO2nFomYY3mKjVglidaNYJGJDkWW2xxTfbjCbVaOGNqoX2GloR8ZeTaECS9pthRGJH2g0b3Agbk6hNANtteHD2GJUucfajCQBy5OOTQ25ZgUPvaVVQmbKh9510/qQpwXx3SQdfk8tZJOd5b6JJFplT3ZnmmX3qd5l1eg5q00HrtUkUn0AKaiGjClSAgKLYZcgWXwocGRcCFGCKwSB6ceqphwmYRUFYT/1WKlOdUpipmxW0mlCqHjYkAaeoZlqrqZ4qd+upQKaapn/AmgAegZ8KUtYtFAQQAgAh+QQFCgAbACwHAAQAzgALAAAF/+C2PUcmiCiZGUTrEkKBis8jQEquKwU5HyXIbEPgyX7BYa5wTNmEMwWsSXsqFbEh8DYs9mrgGjdK6GkPY5GOeU6ryz7UFopSQEzygOGhJBjoIgMDBAcBM0V/CYqLCQqFOwobiYyKjn2TlI6GKC2YjJZknouaZAcQlJUHl6eooJwKooobqoewrJSEmyKdt59NhRKFMxLEEA4RyMkMEAjDEhfGycqAG8TQx9IRDRDE3d3R2ctD1RLg0ttKEnbY5wZD3+zJ6M7X2RHi9Oby7u/r9g38UFjTh2xZJBEBMDAboogAgwkQI07IMUORwocSJwCgWDFBAIwZOaJIsOBjRogKJP8wTODw5ESVHVtm3AhzpEeQElOuNDlTZ0ycEUWKWFASqEahGwYUPbnxoAgEdlYSqDBkgoUNClAlIHbSAoOsqCRQnQHxq1axVb06FWFxLIqyaze0Tft1JVqyE+pWXMD1pF6bYl3+HTqAWNW8cRUFzmih0ZAAB2oGKukSAAGGRHWJgLiR6AylBLpuHKKUMlMCngMpDSAa9QIUggZVVvDaJobLeC3XZpvgNgCmtPcuwP3WgmXSq4do0DC6o2/guzcseECtUoO0hmcsGKDgOt7ssBd07wqesAIGZC1YIBa7PQHvb1+SFo+++HrJSQfB33xfav3i5eX3Hnb4CTJgegEq8tH/YQEOcIJzbm2G2EoYRLgBXFpVmFYDcREV4HIcnmUhiGBRouEMJGJGzHIspqgdXxK0yCKHRNXoIX4uorCdTyjkyNtdPWrA4Up82EbAbzMRxxZRR54WXVLDIRmRcag5d2R6ugl3ZXzNhTecchpMhIGVAKAYpgJjjsSklBEd99maZoo535ZvdamjBEpusJyctg3h4X8XqodBMx0tiNeg/oGJaKGABpogS40KSqiaEgBqlQWLUtqoVQnytekEjzo0hHqhRorppOZt2p923M2AAV+oBtpAnnPNoB6HaU6mAAIU+IXmi3j2mtFXuUoHKwXpzVrsjcgGOauKEjQrwq157hitGq2NoWmjh7z6Wmxb0m5w66+2VRAuXN/yFUAIACH5BAUKABsALAcABADOAAsAAAX/4CZuRiaM45MZqBgIRbs9AqTcuFLE7VHLOh7KB5ERdjJaEaU4ClO/lgKWjKKcMiJQ8KgumcieVdQMD8cbBeuAkkC6LYLhOxoQ2PF5Ys9PKPBMen17f0CCg4VSh32JV4t8jSNqEIOEgJKPlkYBlJWRInKdiJdkmQlvKAsLBxdABA4RsbIMBggtEhcQsLKxDBC2TAS6vLENdJLDxMZAubu8vjIbzcQRtMzJz79S08oQEt/guNiyy7fcvMbh4OezdAvGrakLAQwyABsELQkY9BP+//ckyPDD4J9BfAMh1GsBoImMeQUN+lMgUJ9CiRMa5msxoB9Gh/o8GmxYMZXIgxtR/yQ46S/gQAURR0pDwYDfywoyLPip5AdnCwsMFPBU4BPFhKBDi444quCmDKZOfwZ9KEGpCKgcN1jdALSpPqIYsabS+nSqvqplvYqQYAeDPgwKwjaMtiDl0oaqUAyo+3TuWwUAMPpVCfee0cEjVBGQq2ABx7oTWmQk4FglZMGN9fGVDMCuiH2AOVOu/PmyxM630gwM0CCn6q8LjVJ8GXvpa5Uwn95OTC/nNxkda1/dLSK475IjCD6dHbK1ZOa4hXP9DXs5chJ00UpVm5xo2qRpoxptwF2E4/IbJpB/SDz9+q9b1aNfQH08+p4a8uvX8B53fLP+ycAfemjsRUBgp1H20K+BghHgVgt1GXZXZpZ5lt4ECjxYR4ScUWiShEtZqBiIInRGWnERNnjiBglw+JyGnxUmGowsyiiZg189lNtPGACjV2+S9UjbU0JWF6SPvEk3QZEqsZYTk3UAaRSUnznJI5LmESCdBVSyaOWUWLK4I5gDUYVeV1T9l+FZClCAUVA09uSmRHBCKAECFEhW51ht6rnmWBXkaR+NjuHpJ40D3DmnQXt2F+ihZxlqVKOfQRACACH5BAUKABwALAcABADOAAsAAAX/ICdyUCkUo/g8mUG8MCGkKgspeC6j6XEIEBpBUeCNfECaglBcOVfJFK7YQwZHQ6JRZBUqTrSuVEuD3nI45pYjFuWKvjjSkCoRaBUMWxkwBGgJCXspQ36Bh4EEB0oKhoiBgyNLjo8Ki4QElIiWfJqHnISNEI+Ql5J9o6SgkqKkgqYihamPkW6oNBgSfiMMDQkGCBLCwxIQDhHIyQwQCGMKxsnKVyPCF9DREQ3MxMPX0cu4wt7J2uHWx9jlKd3o39MiuefYEcvNkuLt5O8c1ePI2tyELXGQwoGDAQf+iEC2xByDCRAjTlAgIUWCBRgCPJQ4AQBFXAs0coT40WLIjRxL/47AcHLkxIomRXL0CHPERZkpa4q4iVKiyp0tR/7kwHMkTUBBJR5dOCEBAVcKKtCAyOHpowXCpk7goABqBZdcvWploACpBKkpIJI1q5OD2rIWE0R1uTZu1LFwbWL9OlKuWb4c6+o9i3dEgw0RCGDUG9KlRw56gDY2qmCByZBaASi+TACA0TucAaTteCcy0ZuOK3N2vJlx58+LRQyY3Xm0ZsgjZg+oPQLi7dUcNXi0LOJw1pgNtB7XG6CBy+U75SYfPTSQAgZTNUDnQHt67wnbZyvwLgKiMN3oCZB3C76tdewpLFgIP2C88rbi4Y+QT3+8S5USMICZXWj1pkEDeUU3lOYGB3alSoEiMIjgX4WlgNF2EibIwQIXauWXSRg2SAOHIU5IIIMoZkhhWiJaiFVbKo6AQEgQXrTAazO1JhkBrBG3Y2Y6EsUhaGn95hprSN0oWpFE7rhkeaQBchGOEWnwEmc0uKWZj0LeuNV3W4Y2lZHFlQCSRjTIl8uZ+kG5HU/3sRlnTG2ytyadytnD3HrmuRcSn+0h1dycexIK1KCjYaCnjCCVqOFFJTZ5GkUUjESWaUIKU2lgCmAKKQIUjHapXRKE+t2og1VgankNYnohqKJ2CmKplso6GKz7WYCgqxeuyoF8u9IQAgA7",
                msg: null,
                msgText: "<em>Loading the next set of posts...</em>",
                selector: null,
                speed: "fast",
                start: b
            },
            state: {
                isDuringAjax: !1,
                isInvalidPage: !1,
                isDestroyed: !1,
                isDone: !1,
                isPaused: !1,
                isBeyondMaxPage: !1,
                currPage: 1
            },
            debug: !1,
            behavior: b,
            binder: a(window),
            nextSelector: "div.navigation a:first",
            navSelector: "div.navigation",
            contentSelector: null,
            extraScrollPx: 150,
            itemSelector: "div.post",
            animate: !1,
            pathParse: b,
            dataType: "html",
            appendCallback: !0,
            bufferPx: 40,
            errorCallback: function() {},
            infid: 0,
            pixelsFromNavToBottom: b,
            path: b,
            prefill: !1,
            maxPage: b
        }, a.infinitescroll.prototype = {
            _binding: function(a) {
                var c = this,
                    d = c.options;
                return d.v = "2.0b2.120520", d.behavior && this["_binding_" + d.behavior] !== b ? void this["_binding_" + d.behavior].call(this) : "bind" !== a && "unbind" !== a ? (this._debug("Binding value  " + a + " not valid"), !1) : ("unbind" === a ? this.options.binder.unbind("smartscroll.infscr." + c.options.infid) : this.options.binder[a]("smartscroll.infscr." + c.options.infid, function() {
                    c.scroll()
                }), void this._debug("Binding", a))
            },
            _create: function(c, d) {
                var e = a.extend(!0, {}, a.infinitescroll.defaults, c);
                this.options = e;
                var f = a(window),
                    g = this;
                if (!g._validate(c)) return !1;
                var h = a(e.nextSelector).attr("href");
                if (!h) return this._debug("Navigation selector not found"), !1;
                e.path = e.path || this._determinepath(h), e.contentSelector = e.contentSelector || this.element, e.loading.selector = e.loading.selector || e.contentSelector, e.loading.msg = e.loading.msg || a('<div id="infscr-loading"><img alt="Loading..." src="' + e.loading.img + '" /><div>' + e.loading.msgText + "</div></div>"), (new Image).src = e.loading.img, e.pixelsFromNavToBottom === b && (e.pixelsFromNavToBottom = a(document).height() - a(e.navSelector).offset().top, this._debug("pixelsFromNavToBottom: " + e.pixelsFromNavToBottom));
                var i = this;
                return e.loading.start = e.loading.start || function() {
                        a(e.navSelector).hide(), e.loading.msg.appendTo(e.loading.selector).fadeIn(e.loading.speed, a.proxy(function() {
                            this.beginAjax(e)
                        }, i))
                    }, e.loading.finished = e.loading.finished || function() {
                        e.state.isBeyondMaxPage || e.loading.msg.fadeOut(e.loading.speed)
                    }, e.callback = function(c, g, h) {
                        e.behavior && c["_callback_" + e.behavior] !== b && c["_callback_" + e.behavior].call(a(e.contentSelector)[0], g, h), d && d.call(a(e.contentSelector)[0], g, e, h), e.prefill && f.bind("resize.infinite-scroll", c._prefill)
                    }, c.debug && (!Function.prototype.bind || "object" != typeof console && "function" != typeof console || "object" != typeof console.log || ["log", "info", "warn", "error", "assert", "dir", "clear", "profile", "profileEnd"].forEach(function(a) {
                        console[a] = this.call(console[a], console)
                    }, Function.prototype.bind)),
                    this._setup(), e.prefill && this._prefill(), !0
            },
            _prefill: function() {
                function b() {
                    return a(c.options.contentSelector).height() <= d.height()
                }
                var c = this,
                    d = a(window);
                this._prefill = function() {
                    b() && c.scroll(), d.bind("resize.infinite-scroll", function() {
                        b() && (d.unbind("resize.infinite-scroll"), c.scroll())
                    })
                }, this._prefill()
            },
            _debug: function() {
                !0 === this.options.debug && ("undefined" != typeof console && "function" == typeof console.log ? 1 === Array.prototype.slice.call(arguments).length && "string" == typeof Array.prototype.slice.call(arguments)[0] ? console.log(Array.prototype.slice.call(arguments).toString()) : console.log(Array.prototype.slice.call(arguments)) : Function.prototype.bind || "undefined" == typeof console || "object" != typeof console.log || Function.prototype.call.call(console.log, console, Array.prototype.slice.call(arguments)))
            },
            _determinepath: function(a) {
                var c = this.options;
                if (c.behavior && this["_determinepath_" + c.behavior] !== b) return this["_determinepath_" + c.behavior].call(this, a);
                if (c.pathParse) return this._debug("pathParse manual"), c.pathParse(a, this.options.state.currPage + 1);
                if (a.match(/^(.*?)\b2\b(.*?$)/)) a = a.match(/^(.*?)\b2\b(.*?$)/).slice(1);
                else if (a.match(/^(.*?)2(.*?$)/)) {
                    if (a.match(/^(.*?page=)2(\/.*|$)/)) return a = a.match(/^(.*?page=)2(\/.*|$)/).slice(1);
                    a = a.match(/^(.*?)2(.*?$)/).slice(1)
                } else {
                    if (a.match(/^(.*?page=)1(\/.*|$)/)) return a = a.match(/^(.*?page=)1(\/.*|$)/).slice(1);
                    this._debug("Sorry, we couldn't parse your Next (Previous Posts) URL. Verify your the css selector points to the correct A tag. If you still get this error: yell, scream, and kindly ask for help at infinite-scroll.com."), c.state.isInvalidPage = !0
                }
                return this._debug("determinePath", a), a
            },
            _error: function(a) {
                var c = this.options;
                return c.behavior && this["_error_" + c.behavior] !== b ? void this["_error_" + c.behavior].call(this, a) : ("destroy" !== a && "end" !== a && (a = "unknown"), this._debug("Error", a), ("end" === a || c.state.isBeyondMaxPage) && this._showdonemsg(), c.state.isDone = !0, c.state.currPage = 1, c.state.isPaused = !1, c.state.isBeyondMaxPage = !1, void this._binding("unbind"))
            },
            _loadcallback: function(c, d, e) {
                var i, f = this.options,
                    g = this.options.callback,
                    h = f.state.isDone ? "done" : f.appendCallback ? "append" : "no-append";
                if (f.behavior && this["_loadcallback_" + f.behavior] !== b) return void this["_loadcallback_" + f.behavior].call(this, c, d);
                switch (h) {
                    case "done":
                        return this._showdonemsg(), !1;
                    case "no-append":
                        if ("html" === f.dataType && (d = "<div>" + d + "</div>", d = a(d).find(f.itemSelector)), 0 === d.length) return this._error("end");
                        break;
                    case "append":
                        var j = c.children();
                        if (0 === j.length) return this._error("end");
                        for (i = document.createDocumentFragment(); c[0].firstChild;) i.appendChild(c[0].firstChild);
                        this._debug("contentSelector", a(f.contentSelector)[0]), a(f.contentSelector)[0].appendChild(i), d = j.get()
                }
                if (f.loading.finished.call(a(f.contentSelector)[0], f), f.animate) {
                    var k = a(window).scrollTop() + a(f.loading.msg).height() + f.extraScrollPx + "px";
                    a("html,body").animate({
                        scrollTop: k
                    }, 800, function() {
                        f.state.isDuringAjax = !1
                    })
                }
                f.animate || (f.state.isDuringAjax = !1), g(this, d, e), f.prefill && this._prefill()
            },
            _nearbottom: function() {
                var c = this.options,
                    d = 0 + a(document).height() - c.binder.scrollTop() - a(window).height();
                return c.behavior && this["_nearbottom_" + c.behavior] !== b ? this["_nearbottom_" + c.behavior].call(this) : (this._debug("math:", d, c.pixelsFromNavToBottom), d - c.bufferPx < c.pixelsFromNavToBottom)
            },
            _pausing: function(a) {
                var c = this.options;
                if (c.behavior && this["_pausing_" + c.behavior] !== b) return void this["_pausing_" + c.behavior].call(this, a);
                switch ("pause" !== a && "resume" !== a && null !== a && this._debug("Invalid argument. Toggling pause value instead"), a = !a || "pause" !== a && "resume" !== a ? "toggle" : a) {
                    case "pause":
                        c.state.isPaused = !0;
                        break;
                    case "resume":
                        c.state.isPaused = !1;
                        break;
                    case "toggle":
                        c.state.isPaused = !c.state.isPaused
                }
                return this._debug("Paused", c.state.isPaused), !1
            },
            _setup: function() {
                var a = this.options;
                return a.behavior && this["_setup_" + a.behavior] !== b ? void this["_setup_" + a.behavior].call(this) : (this._binding("bind"), !1)
            },
            _showdonemsg: function() {
                var c = this.options;
                return c.behavior && this["_showdonemsg_" + c.behavior] !== b ? void this["_showdonemsg_" + c.behavior].call(this) : (c.loading.msg.find("img").hide().parent().find("div").html(c.loading.finishedMsg).animate({
                    opacity: 1
                }, 2e3, function() {
                    a(this).parent().fadeOut(c.loading.speed)
                }), void c.errorCallback.call(a(c.contentSelector)[0], "done"))
            },
            _validate: function(b) {
                for (var c in b)
                    if (c.indexOf && c.indexOf("Selector") > -1 && 0 === a(b[c]).length) return this._debug("Your " + c + " found no elements."), !1;
                return !0
            },
            bind: function() {
                this._binding("bind")
            },
            destroy: function() {
                return this.options.state.isDestroyed = !0, this.options.loading.finished(), this._error("destroy")
            },
            pause: function() {
                this._pausing("pause")
            },
            resume: function() {
                this._pausing("resume")
            },
            beginAjax: function(c) {
                var f, g, h, i, d = this,
                    e = c.path;
                if (c.state.currPage++, c.maxPage !== b && c.state.currPage > c.maxPage) return c.state.isBeyondMaxPage = !0, void this.destroy();
                switch (f = a(a(c.contentSelector).is("table, tbody") ? "<tbody/>" : "<div/>"), g = "function" == typeof e ? e(c.state.currPage) : e.join(c.state.currPage), d._debug("heading into ajax", g), h = "html" === c.dataType || "json" === c.dataType ? c.dataType : "html+callback", c.appendCallback && "html" === c.dataType && (h += "+callback"), h) {
                    case "html+callback":
                        d._debug("Using HTML via .load() method"), f.load(g + " " + c.itemSelector, b, function(a) {
                            d._loadcallback(f, a, g)
                        });
                        break;
                    case "html":
                        d._debug("Using " + h.toUpperCase() + " via $.ajax() method"), a.ajax({
                            url: g,
                            dataType: c.dataType,
                            complete: function(a, b) {
                                i = "undefined" != typeof a.isResolved ? a.isResolved() : "success" === b || "notmodified" === b, i ? d._loadcallback(f, a.responseText, g) : d._error("end")
                            }
                        });
                        break;
                    case "json":
                        d._debug("Using " + h.toUpperCase() + " via $.ajax() method"), a.ajax({
                            dataType: "json",
                            type: "GET",
                            url: g,
                            success: function(a, e, h) {
                                if (i = "undefined" != typeof h.isResolved ? h.isResolved() : "success" === e || "notmodified" === e, c.appendCallback)
                                    if (c.template !== b) {
                                        var j = c.template(a);
                                        f.append(j), i ? d._loadcallback(f, j) : d._error("end")
                                    } else d._debug("template must be defined."), d._error("end");
                                else i ? d._loadcallback(f, a, g) : d._error("end")
                            },
                            error: function() {
                                d._debug("JSON ajax request failed."), d._error("end")
                            }
                        })
                }
            },
            retrieve: function(c) {
                c = c || null;
                var d = this,
                    e = d.options;
                return e.behavior && this["retrieve_" + e.behavior] !== b ? void this["retrieve_" + e.behavior].call(this, c) : e.state.isDestroyed ? (this._debug("Instance is destroyed"), !1) : (e.state.isDuringAjax = !0, void e.loading.start.call(a(e.contentSelector)[0], e))
            },
            scroll: function() {
                var a = this.options,
                    c = a.state;
                return a.behavior && this["scroll_" + a.behavior] !== b ? void this["scroll_" + a.behavior].call(this) : void(c.isDuringAjax || c.isInvalidPage || c.isDone || c.isDestroyed || c.isPaused || this._nearbottom() && this.retrieve())
            },
            toggle: function() {
                this._pausing()
            },
            unbind: function() {
                this._binding("unbind")
            },
            update: function(b) {
                a.isPlainObject(b) && (this.options = a.extend(!0, this.options, b))
            }
        }, a.fn.infinitescroll = function(b, c) {
            var d = typeof b;
            switch (d) {
                case "string":
                    var e = Array.prototype.slice.call(arguments, 1);
                    this.each(function() {
                        var c = a.data(this, "infinitescroll");
                        return !!c && (!(!a.isFunction(c[b]) || "_" === b.charAt(0)) && void c[b].apply(c, e))
                    });
                    break;
                case "object":
                    this.each(function() {
                        var d = a.data(this, "infinitescroll");
                        d ? d.update(b) : (d = new a.infinitescroll(b, c, this), d.failed || a.data(this, "infinitescroll", d))
                    })
            }
            return this
        };
        var d, c = a.event;
        c.special.smartscroll = {
            setup: function() {
                a(this).bind("scroll", c.special.smartscroll.handler)
            },
            teardown: function() {
                a(this).unbind("scroll", c.special.smartscroll.handler)
            },
            handler: function(b, c) {
                var e = this,
                    f = arguments;
                b.type = "smartscroll", d && clearTimeout(d), d = setTimeout(function() {
                    a(e).trigger("smartscroll", f)
                }, "execAsap" === c ? 0 : 100)
            }
        }, a.fn.smartscroll = function(a) {
            return a ? this.bind("smartscroll", a) : this.trigger("smartscroll", ["execAsap"])
        }
    }),
    function() {
        function a() {}

        function b(a, b) {
            for (var c = a.length; c--;)
                if (a[c].listener === b) return c;
            return -1
        }

        function c(a) {
            return function() {
                return this[a].apply(this, arguments)
            }
        }
        var d = a.prototype,
            e = this,
            f = e.EventEmitter;
        d.getListeners = function(a) {
            var b, c, d = this._getEvents();
            if ("object" == typeof a) {
                b = {};
                for (c in d) d.hasOwnProperty(c) && a.test(c) && (b[c] = d[c])
            } else b = d[a] || (d[a] = []);
            return b
        }, d.flattenListeners = function(a) {
            var b, c = [];
            for (b = 0; a.length > b; b += 1) c.push(a[b].listener);
            return c
        }, d.getListenersAsObject = function(a) {
            var b, c = this.getListeners(a);
            return c instanceof Array && (b = {}, b[a] = c), b || c
        }, d.addListener = function(a, c) {
            var d, e = this.getListenersAsObject(a),
                f = "object" == typeof c;
            for (d in e) e.hasOwnProperty(d) && -1 === b(e[d], c) && e[d].push(f ? c : {
                listener: c,
                once: !1
            });
            return this
        }, d.on = c("addListener"), d.addOnceListener = function(a, b) {
            return this.addListener(a, {
                listener: b,
                once: !0
            })
        }, d.once = c("addOnceListener"), d.defineEvent = function(a) {
            return this.getListeners(a), this
        }, d.defineEvents = function(a) {
            for (var b = 0; a.length > b; b += 1) this.defineEvent(a[b]);
            return this
        }, d.removeListener = function(a, c) {
            var d, e, f = this.getListenersAsObject(a);
            for (e in f) f.hasOwnProperty(e) && (d = b(f[e], c), -1 !== d && f[e].splice(d, 1));
            return this
        }, d.off = c("removeListener"), d.addListeners = function(a, b) {
            return this.manipulateListeners(!1, a, b)
        }, d.removeListeners = function(a, b) {
            return this.manipulateListeners(!0, a, b)
        }, d.manipulateListeners = function(a, b, c) {
            var d, e, f = a ? this.removeListener : this.addListener,
                g = a ? this.removeListeners : this.addListeners;
            if ("object" != typeof b || b instanceof RegExp)
                for (d = c.length; d--;) f.call(this, b, c[d]);
            else
                for (d in b) b.hasOwnProperty(d) && (e = b[d]) && ("function" == typeof e ? f.call(this, d, e) : g.call(this, d, e));
            return this
        }, d.removeEvent = function(a) {
            var b, c = typeof a,
                d = this._getEvents();
            if ("string" === c) delete d[a];
            else if ("object" === c)
                for (b in d) d.hasOwnProperty(b) && a.test(b) && delete d[b];
            else delete this._events;
            return this
        }, d.removeAllListeners = c("removeEvent"), d.emitEvent = function(a, b) {
            var c, d, e, f, g = this.getListenersAsObject(a);
            for (e in g)
                if (g.hasOwnProperty(e))
                    for (d = g[e].length; d--;) c = g[e][d], c.once === !0 && this.removeListener(a, c.listener), f = c.listener.apply(this, b || []), f === this._getOnceReturnValue() && this.removeListener(a, c.listener);
            return this
        }, d.trigger = c("emitEvent"), d.emit = function(a) {
            var b = Array.prototype.slice.call(arguments, 1);
            return this.emitEvent(a, b)
        }, d.setOnceReturnValue = function(a) {
            return this._onceReturnValue = a, this
        }, d._getOnceReturnValue = function() {
            return !this.hasOwnProperty("_onceReturnValue") || this._onceReturnValue
        }, d._getEvents = function() {
            return this._events || (this._events = {})
        }, a.noConflict = function() {
            return e.EventEmitter = f, a
        }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() {
            return a
        }) : "object" == typeof module && module.exports ? module.exports = a : this.EventEmitter = a
    }.call(this),
    function(a) {
        function b(b) {
            var c = a.event;
            return c.target = c.target || c.srcElement || b, c
        }
        var c = document.documentElement,
            d = function() {};
        c.addEventListener ? d = function(a, b, c) {
            a.addEventListener(b, c, !1)
        } : c.attachEvent && (d = function(a, c, d) {
            a[c + d] = d.handleEvent ? function() {
                var c = b(a);
                d.handleEvent.call(d, c)
            } : function() {
                var c = b(a);
                d.call(a, c)
            }, a.attachEvent("on" + c, a[c + d])
        });
        var e = function() {};
        c.removeEventListener ? e = function(a, b, c) {
            a.removeEventListener(b, c, !1)
        } : c.detachEvent && (e = function(a, b, c) {
            a.detachEvent("on" + b, a[b + c]);
            try {
                delete a[b + c]
            } catch (d) {
                a[b + c] = void 0
            }
        });
        var f = {
            bind: d,
            unbind: e
        };
        "function" == typeof define && define.amd ? define("eventie/eventie", f) : a.eventie = f
    }(this),
    function(a, b) {
        "function" == typeof define && define.amd ? define(["eventEmitter/EventEmitter", "eventie/eventie"], function(c, d) {
            return b(a, c, d)
        }) : "object" == typeof exports ? module.exports = b(a, require("wolfy87-eventemitter"), require("eventie")) : a.imagesLoaded = b(a, a.EventEmitter, a.eventie)
    }(window, function(a, b, c) {
        function d(a, b) {
            for (var c in b) a[c] = b[c];
            return a
        }

        function e(a) {
            return "[object Array]" === m.call(a)
        }

        function f(a) {
            var b = [];
            if (e(a)) b = a;
            else if ("number" == typeof a.length)
                for (var c = 0, d = a.length; d > c; c++) b.push(a[c]);
            else b.push(a);
            return b
        }

        function g(a, b, c) {
            if (!(this instanceof g)) return new g(a, b);
            "string" == typeof a && (a = document.querySelectorAll(a)), this.elements = f(a), this.options = d({}, this.options), "function" == typeof b ? c = b : d(this.options, b), c && this.on("always", c), this.getImages(), j && (this.jqDeferred = new j.Deferred);
            var e = this;
            setTimeout(function() {
                e.check()
            })
        }

        function h(a) {
            this.img = a
        }

        function i(a) {
            this.src = a, n[a] = this
        }
        var j = a.jQuery,
            k = a.console,
            l = void 0 !== k,
            m = Object.prototype.toString;
        g.prototype = new b, g.prototype.options = {}, g.prototype.getImages = function() {
            this.images = [];
            for (var a = 0, b = this.elements.length; b > a; a++) {
                var c = this.elements[a];
                "IMG" === c.nodeName && this.addImage(c);
                var d = c.nodeType;
                if (d && (1 === d || 9 === d || 11 === d))
                    for (var e = c.querySelectorAll("img"), f = 0, g = e.length; g > f; f++) {
                        var h = e[f];
                        this.addImage(h)
                    }
            }
        }, g.prototype.addImage = function(a) {
            var b = new h(a);
            this.images.push(b)
        }, g.prototype.check = function() {
            function a(a, e) {
                return b.options.debug && l && k.log("confirm", a, e), b.progress(a), c++, c === d && b.complete(), !0
            }
            var b = this,
                c = 0,
                d = this.images.length;
            if (this.hasAnyBroken = !1, !d) return void this.complete();
            for (var e = 0; d > e; e++) {
                var f = this.images[e];
                f.on("confirm", a), f.check()
            }
        }, g.prototype.progress = function(a) {
            this.hasAnyBroken = this.hasAnyBroken || !a.isLoaded;
            var b = this;
            setTimeout(function() {
                b.emit("progress", b, a), b.jqDeferred && b.jqDeferred.notify && b.jqDeferred.notify(b, a)
            })
        }, g.prototype.complete = function() {
            var a = this.hasAnyBroken ? "fail" : "done";
            this.isComplete = !0;
            var b = this;
            setTimeout(function() {
                if (b.emit(a, b), b.emit("always", b), b.jqDeferred) {
                    var c = b.hasAnyBroken ? "reject" : "resolve";
                    b.jqDeferred[c](b)
                }
            })
        }, j && (j.fn.imagesLoaded = function(a, b) {
            var c = new g(this, a, b);
            return c.jqDeferred.promise(j(this))
        }), h.prototype = new b, h.prototype.check = function() {
            var a = n[this.img.src] || new i(this.img.src);
            if (a.isConfirmed) return void this.confirm(a.isLoaded, "cached was confirmed");
            if (this.img.complete && void 0 !== this.img.naturalWidth) return void this.confirm(0 !== this.img.naturalWidth, "naturalWidth");
            var b = this;
            a.on("confirm", function(a, c) {
                return b.confirm(a.isLoaded, c), !0
            }), a.check()
        }, h.prototype.confirm = function(a, b) {
            this.isLoaded = a, this.emit("confirm", this, b)
        };
        var n = {};
        return i.prototype = new b, i.prototype.check = function() {
            if (!this.isChecked) {
                var a = new Image;
                c.bind(a, "load", this), c.bind(a, "error", this), a.src = this.src, this.isChecked = !0
            }
        }, i.prototype.handleEvent = function(a) {
            var b = "on" + a.type;
            this[b] && this[b](a)
        }, i.prototype.onload = function(a) {
            this.confirm(!0, "onload"), this.unbindProxyEvents(a)
        }, i.prototype.onerror = function(a) {
            this.confirm(!1, "onerror"), this.unbindProxyEvents(a)
        }, i.prototype.confirm = function(a, b) {
            this.isConfirmed = !0, this.isLoaded = a, this.emit("confirm", this, b)
        }, i.prototype.unbindProxyEvents = function(a) {
            c.unbind(a.target, "load", this), c.unbind(a.target, "error", this)
        }, g
    }), ! function(a) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], a) : "undefined" != typeof module && module.exports ? module.exports = a(require("jquery")) : a(jQuery)
    }(function(a) {
        var b = -1,
            c = -1,
            d = function(a) {
                return parseFloat(a) || 0
            },
            e = function(b) {
                var c = 1,
                    e = a(b),
                    f = null,
                    g = [];
                return e.each(function() {
                    var b = a(this),
                        e = b.offset().top - d(b.css("margin-top")),
                        h = g.length > 0 ? g[g.length - 1] : null;
                    null === h ? g.push(b) : Math.floor(Math.abs(f - e)) <= c ? g[g.length - 1] = h.add(b) : g.push(b), f = e
                }), g
            },
            f = function(b) {
                var c = {
                    byRow: !0,
                    property: "height",
                    target: null,
                    remove: !1
                };
                return "object" == typeof b ? a.extend(c, b) : ("boolean" == typeof b ? c.byRow = b : "remove" === b && (c.remove = !0), c)
            },
            g = a.fn.matchHeight = function(b) {
                var c = f(b);
                if (c.remove) {
                    var d = this;
                    return this.css(c.property, ""), a.each(g._groups, function(a, b) {
                        b.elements = b.elements.not(d)
                    }), this
                }
                return this.length <= 1 && !c.target ? this : (g._groups.push({
                    elements: this,
                    options: c
                }), g._apply(this, c), this)
            };
        g.version = "master", g._groups = [], g._throttle = 80, g._maintainScroll = !1, g._beforeUpdate = null, g._afterUpdate = null, g._rows = e, g._parse = d, g._parseOptions = f, g._apply = function(b, c) {
            var h = f(c),
                i = a(b),
                j = [i],
                k = a(window).scrollTop(),
                l = a("html").outerHeight(!0),
                m = i.parents().filter(":hidden");
            return m.each(function() {
                var b = a(this);
                b.data("style-cache", b.attr("style"))
            }), m.css("display", "block"), h.byRow && !h.target && (i.each(function() {
                var b = a(this),
                    c = b.css("display");
                "inline-block" !== c && "flex" !== c && "inline-flex" !== c && (c = "block"), b.data("style-cache", b.attr("style")), b.css({
                    display: c,
                    "padding-top": "0",
                    "padding-bottom": "0",
                    "margin-top": "0",
                    "margin-bottom": "0",
                    "border-top-width": "0",
                    "border-bottom-width": "0",
                    height: "100px",
                    overflow: "hidden"
                })
            }), j = e(i), i.each(function() {
                var b = a(this);
                b.attr("style", b.data("style-cache") || "")
            })), a.each(j, function(b, c) {
                var e = a(c),
                    f = 0;
                if (h.target) f = h.target.outerHeight(!1);
                else {
                    if (h.byRow && e.length <= 1) return void e.css(h.property, "");
                    e.each(function() {
                        var b = a(this),
                            c = b.attr("style"),
                            d = b.css("display");
                        "inline-block" !== d && "flex" !== d && "inline-flex" !== d && (d = "block");
                        var e = {
                            display: d
                        };
                        e[h.property] = "", b.css(e), b.outerHeight(!1) > f && (f = b.outerHeight(!1)), c ? b.attr("style", c) : b.css("display", "")
                    })
                }
                e.each(function() {
                    var b = a(this),
                        c = 0;
                    h.target && b.is(h.target) || ("border-box" !== b.css("box-sizing") && (c += d(b.css("border-top-width")) + d(b.css("border-bottom-width")), c += d(b.css("padding-top")) + d(b.css("padding-bottom"))), b.css(h.property, f - c + "px"))
                })
            }), m.each(function() {
                var b = a(this);
                b.attr("style", b.data("style-cache") || null)
            }), g._maintainScroll && a(window).scrollTop(k / l * a("html").outerHeight(!0)), this
        }, g._applyDataApi = function() {
            var b = {};
            a("[data-match-height], [data-mh]").each(function() {
                var c = a(this),
                    d = c.attr("data-mh") || c.attr("data-match-height");
                d in b ? b[d] = b[d].add(c) : b[d] = c
            }), a.each(b, function() {
                this.matchHeight(!0)
            })
        };
        var h = function(b) {
            g._beforeUpdate && g._beforeUpdate(b, g._groups), a.each(g._groups, function() {
                g._apply(this.elements, this.options)
            }), g._afterUpdate && g._afterUpdate(b, g._groups)
        };
        g._update = function(d, e) {
            if (e && "resize" === e.type) {
                var f = a(window).width();
                if (f === b) return;
                b = f
            }
            d ? -1 === c && (c = setTimeout(function() {
                h(e), c = -1
            }, g._throttle)) : h(e)
        }, a(g._applyDataApi), a(window).bind("load", function(a) {
            g._update(!1, a)
        }), a(window).bind("resize orientationchange", function(a) {
            g._update(!0, a)
        })
    }), ! function(a) {
        "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof module && module.exports ? require("jquery") : jQuery)
    }(function(a) {
        var b = "1.7.2",
            c = {},
            d = {
                exclude: [],
                excludeWithin: [],
                offset: 0,
                direction: "top",
                delegateSelector: null,
                scrollElement: null,
                scrollTarget: null,
                beforeScroll: function() {},
                afterScroll: function() {},
                easing: "swing",
                speed: 400,
                autoCoefficient: 2,
                preventDefault: !0
            },
            e = function(b) {
                var c = [],
                    d = !1,
                    e = b.dir && "left" === b.dir ? "scrollLeft" : "scrollTop";
                return this.each(function() {
                    var b = a(this);
                    if (this !== document && this !== window) return !document.scrollingElement || this !== document.documentElement && this !== document.body ? void(b[e]() > 0 ? c.push(this) : (b[e](1), d = b[e]() > 0, d && c.push(this), b[e](0))) : (c.push(document.scrollingElement), !1)
                }), c.length || this.each(function() {
                    this === document.documentElement && "smooth" === a(this).css("scrollBehavior") && (c = [this]), c.length || "BODY" !== this.nodeName || (c = [this])
                }), "first" === b.el && c.length > 1 && (c = [c[0]]), c
            };
        a.fn.extend({
            scrollable: function(a) {
                var b = e.call(this, {
                    dir: a
                });
                return this.pushStack(b)
            },
            firstScrollable: function(a) {
                var b = e.call(this, {
                    el: "first",
                    dir: a
                });
                return this.pushStack(b)
            },
            smoothScroll: function(b, c) {
                if (b = b || {}, "options" === b) return c ? this.each(function() {
                    var b = a(this),
                        d = a.extend(b.data("ssOpts") || {}, c);
                    a(this).data("ssOpts", d)
                }) : this.first().data("ssOpts");
                var d = a.extend({}, a.fn.smoothScroll.defaults, b),
                    e = function(b) {
                        var c = function(a) {
                                return a.replace(/(:|\.|\/)/g, "\\$1")
                            },
                            e = this,
                            f = a(this),
                            g = a.extend({}, d, f.data("ssOpts") || {}),
                            h = d.exclude,
                            i = g.excludeWithin,
                            j = 0,
                            k = 0,
                            l = !0,
                            m = {},
                            n = a.smoothScroll.filterPath(location.pathname),
                            o = a.smoothScroll.filterPath(e.pathname),
                            p = location.hostname === e.hostname || !e.hostname,
                            q = g.scrollTarget || o === n,
                            r = c(e.hash);
                        if (r && !a(r).length && (l = !1), g.scrollTarget || p && q && r) {
                            for (; l && j < h.length;) f.is(c(h[j++])) && (l = !1);
                            for (; l && k < i.length;) f.closest(i[k++]).length && (l = !1)
                        } else l = !1;
                        l && (g.preventDefault && b.preventDefault(), a.extend(m, g, {
                            scrollTarget: g.scrollTarget || r,
                            link: e
                        }), a.smoothScroll(m))
                    };
                return null !== b.delegateSelector ? this.undelegate(b.delegateSelector, "click.smoothscroll").delegate(b.delegateSelector, "click.smoothscroll", e) : this.unbind("click.smoothscroll").bind("click.smoothscroll", e), this
            }
        }), a.smoothScroll = function(b, d) {
            if ("options" === b && "object" == typeof d) return a.extend(c, d);
            var e, f, g, h, i, j = 0,
                k = "offset",
                l = "scrollTop",
                m = {},
                n = {};
            "number" == typeof b ? (e = a.extend({
                link: null
            }, a.fn.smoothScroll.defaults, c), g = b) : (e = a.extend({
                link: null
            }, a.fn.smoothScroll.defaults, b || {}, c), e.scrollElement && (k = "position", "static" === e.scrollElement.css("position") && e.scrollElement.css("position", "relative"))), l = "left" === e.direction ? "scrollLeft" : l, e.scrollElement ? (f = e.scrollElement, /^(?:HTML|BODY)$/.test(f[0].nodeName) || (j = f[l]())) : f = a("html, body").firstScrollable(e.direction), e.beforeScroll.call(f, e), g = "number" == typeof b ? b : d || a(e.scrollTarget)[k]() && a(e.scrollTarget)[k]()[e.direction] || 0, m[l] = g + j + e.offset, h = e.speed, "auto" === h && (i = Math.abs(m[l] - f[l]()), h = i / e.autoCoefficient), n = {
                duration: h,
                easing: e.easing,
                complete: function() {
                    e.afterScroll.call(e.link, e)
                }
            }, e.step && (n.step = e.step), f.length ? f.stop().animate(m, n) : e.afterScroll.call(e.link, e)
        }, a.smoothScroll.version = b, a.smoothScroll.filterPath = function(a) {
            return a = a || "", a.replace(/^\//, "").replace(/(?:index|default).[a-zA-Z]{3,4}$/, "").replace(/\/$/, "")
        }, a.fn.smoothScroll.defaults = d
    }), ! function(a) {
        "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto)
    }(function(a) {
        var b, c, d, e, f, g, h = "Close",
            i = "BeforeClose",
            j = "AfterClose",
            k = "BeforeAppend",
            l = "MarkupParse",
            m = "Open",
            n = "Change",
            o = "mfp",
            p = "." + o,
            q = "mfp-ready",
            r = "mfp-removing",
            s = "mfp-prevent-close",
            t = function() {},
            u = !!window.jQuery,
            v = a(window),
            w = function(a, c) {
                b.ev.on(o + a + p, c)
            },
            x = function(b, c, d, e) {
                var f = document.createElement("div");
                return f.className = "mfp-" + b, d && (f.innerHTML = d), e ? c && c.appendChild(f) : (f = a(f), c && f.appendTo(c)), f
            },
            y = function(c, d) {
                b.ev.triggerHandler(o + c, d), b.st.callbacks && (c = c.charAt(0).toLowerCase() + c.slice(1), b.st.callbacks[c] && b.st.callbacks[c].apply(b, a.isArray(d) ? d : [d]))
            },
            z = function(c) {
                return c === g && b.currTemplate.closeBtn || (b.currTemplate.closeBtn = a(b.st.closeMarkup.replace("%title%", b.st.tClose)), g = c), b.currTemplate.closeBtn
            },
            A = function() {
                a.magnificPopup.instance || (b = new t, b.init(), a.magnificPopup.instance = b)
            },
            B = function() {
                var a = document.createElement("p").style,
                    b = ["ms", "O", "Moz", "Webkit"];
                if (void 0 !== a.transition) return !0;
                for (; b.length;)
                    if (b.pop() + "Transition" in a) return !0;
                return !1
            };
        t.prototype = {
            constructor: t,
            init: function() {
                var c = navigator.appVersion;
                b.isLowIE = b.isIE8 = document.all && !document.addEventListener, b.isAndroid = /android/gi.test(c), b.isIOS = /iphone|ipad|ipod/gi.test(c), b.supportsTransition = B(), b.probablyMobile = b.isAndroid || b.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), d = a(document), b.popupsCache = {}
            },
            open: function(c) {
                var e;
                if (c.isObj === !1) {
                    b.items = c.items.toArray(), b.index = 0;
                    var g, h = c.items;
                    for (e = 0; e < h.length; e++)
                        if (g = h[e], g.parsed && (g = g.el[0]), g === c.el[0]) {
                            b.index = e;
                            break
                        }
                } else b.items = a.isArray(c.items) ? c.items : [c.items], b.index = c.index || 0;
                if (b.isOpen) return void b.updateItemHTML();
                b.types = [], f = "", c.mainEl && c.mainEl.length ? b.ev = c.mainEl.eq(0) : b.ev = d, c.key ? (b.popupsCache[c.key] || (b.popupsCache[c.key] = {}), b.currTemplate = b.popupsCache[c.key]) : b.currTemplate = {}, b.st = a.extend(!0, {}, a.magnificPopup.defaults, c), b.fixedContentPos = "auto" === b.st.fixedContentPos ? !b.probablyMobile : b.st.fixedContentPos, b.st.modal && (b.st.closeOnContentClick = !1, b.st.closeOnBgClick = !1, b.st.showCloseBtn = !1, b.st.enableEscapeKey = !1), b.bgOverlay || (b.bgOverlay = x("bg").on("click" + p, function() {
                    b.close()
                }), b.wrap = x("wrap").attr("tabindex", -1).on("click" + p, function(a) {
                    b._checkIfClose(a.target) && b.close()
                }), b.container = x("container", b.wrap)), b.contentContainer = x("content"), b.st.preloader && (b.preloader = x("preloader", b.container, b.st.tLoading));
                var i = a.magnificPopup.modules;
                for (e = 0; e < i.length; e++) {
                    var j = i[e];
                    j = j.charAt(0).toUpperCase() + j.slice(1), b["init" + j].call(b)
                }
                y("BeforeOpen"), b.st.showCloseBtn && (b.st.closeBtnInside ? (w(l, function(a, b, c, d) {
                    c.close_replaceWith = z(d.type)
                }), f += " mfp-close-btn-in") : b.wrap.append(z())), b.st.alignTop && (f += " mfp-align-top"), b.fixedContentPos ? b.wrap.css({
                    overflow: b.st.overflowY,
                    overflowX: "hidden",
                    overflowY: b.st.overflowY
                }) : b.wrap.css({
                    top: v.scrollTop(),
                    position: "absolute"
                }), (b.st.fixedBgPos === !1 || "auto" === b.st.fixedBgPos && !b.fixedContentPos) && b.bgOverlay.css({
                    height: d.height(),
                    position: "absolute"
                }), b.st.enableEscapeKey && d.on("keyup" + p, function(a) {
                    27 === a.keyCode && b.close()
                }), v.on("resize" + p, function() {
                    b.updateSize()
                }), b.st.closeOnContentClick || (f += " mfp-auto-cursor"), f && b.wrap.addClass(f);
                var k = b.wH = v.height(),
                    n = {};
                if (b.fixedContentPos && b._hasScrollBar(k)) {
                    var o = b._getScrollbarSize();
                    o && (n.marginRight = o)
                }
                b.fixedContentPos && (b.isIE7 ? a("body, html").css("overflow", "hidden") : n.overflow = "hidden");
                var r = b.st.mainClass;
                return b.isIE7 && (r += " mfp-ie7"), r && b._addClassToMFP(r), b.updateItemHTML(), y("BuildControls"), a("html").css(n), b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo || a(document.body)), b._lastFocusedEl = document.activeElement, setTimeout(function() {
                    b.content ? (b._addClassToMFP(q), b._setFocus()) : b.bgOverlay.addClass(q), d.on("focusin" + p, b._onFocusIn)
                }, 16), b.isOpen = !0, b.updateSize(k), y(m), c
            },
            close: function() {
                b.isOpen && (y(i), b.isOpen = !1, b.st.removalDelay && !b.isLowIE && b.supportsTransition ? (b._addClassToMFP(r), setTimeout(function() {
                    b._close()
                }, b.st.removalDelay)) : b._close())
            },
            _close: function() {
                y(h);
                var c = r + " " + q + " ";
                if (b.bgOverlay.detach(), b.wrap.detach(), b.container.empty(), b.st.mainClass && (c += b.st.mainClass + " "), b._removeClassFromMFP(c), b.fixedContentPos) {
                    var e = {
                        marginRight: ""
                    };
                    b.isIE7 ? a("body, html").css("overflow", "") : e.overflow = "", a("html").css(e)
                }
                d.off("keyup" + p + " focusin" + p), b.ev.off(p), b.wrap.attr("class", "mfp-wrap").removeAttr("style"), b.bgOverlay.attr("class", "mfp-bg"), b.container.attr("class", "mfp-container"), !b.st.showCloseBtn || b.st.closeBtnInside && b.currTemplate[b.currItem.type] !== !0 || b.currTemplate.closeBtn && b.currTemplate.closeBtn.detach(), b.st.autoFocusLast && b._lastFocusedEl && a(b._lastFocusedEl).focus(), b.currItem = null, b.content = null, b.currTemplate = null, b.prevHeight = 0, y(j)
            },
            updateSize: function(a) {
                if (b.isIOS) {
                    var c = document.documentElement.clientWidth / window.innerWidth,
                        d = window.innerHeight * c;
                    b.wrap.css("height", d), b.wH = d
                } else b.wH = a || v.height();
                b.fixedContentPos || b.wrap.css("height", b.wH), y("Resize")
            },
            updateItemHTML: function() {
                var c = b.items[b.index];
                b.contentContainer.detach(), b.content && b.content.detach(), c.parsed || (c = b.parseEl(b.index));
                var d = c.type;
                if (y("BeforeChange", [b.currItem ? b.currItem.type : "", d]), b.currItem = c, !b.currTemplate[d]) {
                    var f = !!b.st[d] && b.st[d].markup;
                    y("FirstMarkupParse", f), f ? b.currTemplate[d] = a(f) : b.currTemplate[d] = !0
                }
                e && e !== c.type && b.container.removeClass("mfp-" + e + "-holder");
                var g = b["get" + d.charAt(0).toUpperCase() + d.slice(1)](c, b.currTemplate[d]);
                b.appendContent(g, d), c.preloaded = !0, y(n, c), e = c.type, b.container.prepend(b.contentContainer), y("AfterChange")
            },
            appendContent: function(a, c) {
                b.content = a, a ? b.st.showCloseBtn && b.st.closeBtnInside && b.currTemplate[c] === !0 ? b.content.find(".mfp-close").length || b.content.append(z()) : b.content = a : b.content = "", y(k), b.container.addClass("mfp-" + c + "-holder"), b.contentContainer.append(b.content)
            },
            parseEl: function(c) {
                var d, e = b.items[c];
                if (e.tagName ? e = {
                        el: a(e)
                    } : (d = e.type, e = {
                        data: e,
                        src: e.src
                    }), e.el) {
                    for (var f = b.types, g = 0; g < f.length; g++)
                        if (e.el.hasClass("mfp-" + f[g])) {
                            d = f[g];
                            break
                        }
                    e.src = e.el.attr("data-mfp-src"), e.src || (e.src = e.el.attr("href"))
                }
                return e.type = d || b.st.type || "inline", e.index = c, e.parsed = !0, b.items[c] = e, y("ElementParse", e), b.items[c]
            },
            addGroup: function(a, c) {
                var d = function(d) {
                    d.mfpEl = this, b._openClick(d, a, c)
                };
                c || (c = {});
                var e = "click.magnificPopup";
                c.mainEl = a, c.items ? (c.isObj = !0, a.off(e).on(e, d)) : (c.isObj = !1, c.delegate ? a.off(e).on(e, c.delegate, d) : (c.items = a, a.off(e).on(e, d)))
            },
            _openClick: function(c, d, e) {
                var f = void 0 !== e.midClick ? e.midClick : a.magnificPopup.defaults.midClick;
                if (f || !(2 === c.which || c.ctrlKey || c.metaKey || c.altKey || c.shiftKey)) {
                    var g = void 0 !== e.disableOn ? e.disableOn : a.magnificPopup.defaults.disableOn;
                    if (g)
                        if (a.isFunction(g)) {
                            if (!g.call(b)) return !0
                        } else if (v.width() < g) return !0;
                    c.type && (c.preventDefault(), b.isOpen && c.stopPropagation()), e.el = a(c.mfpEl), e.delegate && (e.items = d.find(e.delegate)), b.open(e)
                }
            },
            updateStatus: function(a, d) {
                if (b.preloader) {
                    c !== a && b.container.removeClass("mfp-s-" + c), d || "loading" !== a || (d = b.st.tLoading);
                    var e = {
                        status: a,
                        text: d
                    };
                    y("UpdateStatus", e), a = e.status, d = e.text, b.preloader.html(d), b.preloader.find("a").on("click", function(a) {
                        a.stopImmediatePropagation()
                    }), b.container.addClass("mfp-s-" + a), c = a
                }
            },
            _checkIfClose: function(c) {
                if (!a(c).hasClass(s)) {
                    var d = b.st.closeOnContentClick,
                        e = b.st.closeOnBgClick;
                    if (d && e) return !0;
                    if (!b.content || a(c).hasClass("mfp-close") || b.preloader && c === b.preloader[0]) return !0;
                    if (c === b.content[0] || a.contains(b.content[0], c)) {
                        if (d) return !0
                    } else if (e && a.contains(document, c)) return !0;
                    return !1
                }
            },
            _addClassToMFP: function(a) {
                b.bgOverlay.addClass(a), b.wrap.addClass(a)
            },
            _removeClassFromMFP: function(a) {
                this.bgOverlay.removeClass(a), b.wrap.removeClass(a)
            },
            _hasScrollBar: function(a) {
                return (b.isIE7 ? d.height() : document.body.scrollHeight) > (a || v.height())
            },
            _setFocus: function() {
                (b.st.focus ? b.content.find(b.st.focus).eq(0) : b.wrap).focus()
            },
            _onFocusIn: function(c) {
                return c.target === b.wrap[0] || a.contains(b.wrap[0], c.target) ? void 0 : (b._setFocus(), !1)
            },
            _parseMarkup: function(b, c, d) {
                var e;
                d.data && (c = a.extend(d.data, c)), y(l, [b, c, d]), a.each(c, function(c, d) {
                    if (void 0 === d || d === !1) return !0;
                    if (e = c.split("_"), e.length > 1) {
                        var f = b.find(p + "-" + e[0]);
                        if (f.length > 0) {
                            var g = e[1];
                            "replaceWith" === g ? f[0] !== d[0] && f.replaceWith(d) : "img" === g ? f.is("img") ? f.attr("src", d) : f.replaceWith(a("<img>").attr("src", d).attr("class", f.attr("class"))) : f.attr(e[1], d)
                        }
                    } else b.find(p + "-" + c).html(d)
                })
            },
            _getScrollbarSize: function() {
                if (void 0 === b.scrollbarSize) {
                    var a = document.createElement("div");
                    a.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(a), b.scrollbarSize = a.offsetWidth - a.clientWidth, document.body.removeChild(a)
                }
                return b.scrollbarSize
            }
        }, a.magnificPopup = {
            instance: null,
            proto: t.prototype,
            modules: [],
            open: function(b, c) {
                return A(), b = b ? a.extend(!0, {}, b) : {}, b.isObj = !0, b.index = c || 0, this.instance.open(b)
            },
            close: function() {
                return a.magnificPopup.instance && a.magnificPopup.instance.close()
            },
            registerModule: function(b, c) {
                c.options && (a.magnificPopup.defaults[b] = c.options), a.extend(this.proto, c.proto), this.modules.push(b)
            },
            defaults: {
                disableOn: 0,
                key: null,
                midClick: !1,
                mainClass: "",
                preloader: !0,
                focus: "",
                closeOnContentClick: !1,
                closeOnBgClick: !0,
                closeBtnInside: !0,
                showCloseBtn: !0,
                enableEscapeKey: !0,
                modal: !1,
                alignTop: !1,
                removalDelay: 0,
                prependTo: null,
                fixedContentPos: "auto",
                fixedBgPos: "auto",
                overflowY: "auto",
                closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
                tClose: "Close (Esc)",
                tLoading: "Loading...",
                autoFocusLast: !0
            }
        }, a.fn.magnificPopup = function(c) {
            A();
            var d = a(this);
            if ("string" == typeof c)
                if ("open" === c) {
                    var e, f = u ? d.data("magnificPopup") : d[0].magnificPopup,
                        g = parseInt(arguments[1], 10) || 0;
                    f.items ? e = f.items[g] : (e = d, f.delegate && (e = e.find(f.delegate)), e = e.eq(g)), b._openClick({
                        mfpEl: e
                    }, d, f)
                } else b.isOpen && b[c].apply(b, Array.prototype.slice.call(arguments, 1));
            else c = a.extend(!0, {}, c), u ? d.data("magnificPopup", c) : d[0].magnificPopup = c, b.addGroup(d, c);
            return d
        };
        var C, D, E, F = "inline",
            G = function() {
                E && (D.after(E.addClass(C)).detach(), E = null)
            };
        a.magnificPopup.registerModule(F, {
            options: {
                hiddenClass: "hide",
                markup: "",
                tNotFound: "Content not found"
            },
            proto: {
                initInline: function() {
                    b.types.push(F), w(h + "." + F, function() {
                        G()
                    })
                },
                getInline: function(c, d) {
                    if (G(), c.src) {
                        var e = b.st.inline,
                            f = a(c.src);
                        if (f.length) {
                            var g = f[0].parentNode;
                            g && g.tagName && (D || (C = e.hiddenClass, D = x(C), C = "mfp-" + C), E = f.after(D).detach().removeClass(C)), b.updateStatus("ready")
                        } else b.updateStatus("error", e.tNotFound), f = a("<div>");
                        return c.inlineElement = f, f
                    }
                    return b.updateStatus("ready"), b._parseMarkup(d, {}, c), d
                }
            }
        });
        var H, I = "ajax",
            J = function() {
                H && a(document.body).removeClass(H)
            },
            K = function() {
                J(), b.req && b.req.abort()
            };
        a.magnificPopup.registerModule(I, {
            options: {
                settings: null,
                cursor: "mfp-ajax-cur",
                tError: '<a href="%url%">The content</a> could not be loaded.'
            },
            proto: {
                initAjax: function() {
                    b.types.push(I), H = b.st.ajax.cursor, w(h + "." + I, K), w("BeforeChange." + I, K)
                },
                getAjax: function(c) {
                    H && a(document.body).addClass(H), b.updateStatus("loading");
                    var d = a.extend({
                        url: c.src,
                        success: function(d, e, f) {
                            var g = {
                                data: d,
                                xhr: f
                            };
                            y("ParseAjax", g), b.appendContent(a(g.data), I), c.finished = !0, J(), b._setFocus(), setTimeout(function() {
                                b.wrap.addClass(q)
                            }, 16), b.updateStatus("ready"), y("AjaxContentAdded")
                        },
                        error: function() {
                            J(), c.finished = c.loadError = !0, b.updateStatus("error", b.st.ajax.tError.replace("%url%", c.src))
                        }
                    }, b.st.ajax.settings);
                    return b.req = a.ajax(d), ""
                }
            }
        });
        var L, M = function(c) {
            if (c.data && void 0 !== c.data.title) return c.data.title;
            var d = b.st.image.titleSrc;
            if (d) {
                if (a.isFunction(d)) return d.call(b, c);
                if (c.el) return c.el.attr(d) || ""
            }
            return ""
        };
        a.magnificPopup.registerModule("image", {
            options: {
                markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
                cursor: "mfp-zoom-out-cur",
                titleSrc: "title",
                verticalFit: !0,
                tError: '<a href="%url%">The image</a> could not be loaded.'
            },
            proto: {
                initImage: function() {
                    var c = b.st.image,
                        d = ".image";
                    b.types.push("image"), w(m + d, function() {
                        "image" === b.currItem.type && c.cursor && a(document.body).addClass(c.cursor)
                    }), w(h + d, function() {
                        c.cursor && a(document.body).removeClass(c.cursor), v.off("resize" + p)
                    }), w("Resize" + d, b.resizeImage), b.isLowIE && w("AfterChange", b.resizeImage)
                },
                resizeImage: function() {
                    var a = b.currItem;
                    if (a && a.img && b.st.image.verticalFit) {
                        var c = 0;
                        b.isLowIE && (c = parseInt(a.img.css("padding-top"), 10) + parseInt(a.img.css("padding-bottom"), 10)), a.img.css("max-height", b.wH - c)
                    }
                },
                _onImageHasSize: function(a) {
                    a.img && (a.hasSize = !0, L && clearInterval(L), a.isCheckingImgSize = !1, y("ImageHasSize", a), a.imgHidden && (b.content && b.content.removeClass("mfp-loading"), a.imgHidden = !1))
                },
                findImageSize: function(a) {
                    var c = 0,
                        d = a.img[0],
                        e = function(f) {
                            L && clearInterval(L), L = setInterval(function() {
                                return d.naturalWidth > 0 ? void b._onImageHasSize(a) : (c > 200 && clearInterval(L), c++, void(3 === c ? e(10) : 40 === c ? e(50) : 100 === c && e(500)))
                            }, f)
                        };
                    e(1)
                },
                getImage: function(c, d) {
                    var e = 0,
                        f = function() {
                            c && (c.img[0].complete ? (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("ready")), c.hasSize = !0, c.loaded = !0, y("ImageLoadComplete")) : (e++, 200 > e ? setTimeout(f, 100) : g()))
                        },
                        g = function() {
                            c && (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("error", h.tError.replace("%url%", c.src))), c.hasSize = !0, c.loaded = !0, c.loadError = !0)
                        },
                        h = b.st.image,
                        i = d.find(".mfp-img");
                    if (i.length) {
                        var j = document.createElement("img");
                        j.className = "mfp-img", c.el && c.el.find("img").length && (j.alt = c.el.find("img").attr("alt")), c.img = a(j).on("load.mfploader", f).on("error.mfploader", g), j.src = c.src, i.is("img") && (c.img = c.img.clone()), j = c.img[0], j.naturalWidth > 0 ? c.hasSize = !0 : j.width || (c.hasSize = !1)
                    }
                    return b._parseMarkup(d, {
                        title: M(c),
                        img_replaceWith: c.img
                    }, c), b.resizeImage(), c.hasSize ? (L && clearInterval(L), c.loadError ? (d.addClass("mfp-loading"), b.updateStatus("error", h.tError.replace("%url%", c.src))) : (d.removeClass("mfp-loading"), b.updateStatus("ready")), d) : (b.updateStatus("loading"), c.loading = !0, c.hasSize || (c.imgHidden = !0, d.addClass("mfp-loading"), b.findImageSize(c)), d)
                }
            }
        });
        var N, O = function() {
            return void 0 === N && (N = void 0 !== document.createElement("p").style.MozTransform), N
        };
        a.magnificPopup.registerModule("zoom", {
            options: {
                enabled: !1,
                easing: "ease-in-out",
                duration: 300,
                opener: function(a) {
                    return a.is("img") ? a : a.find("img")
                }
            },
            proto: {
                initZoom: function() {
                    var a, c = b.st.zoom,
                        d = ".zoom";
                    if (c.enabled && b.supportsTransition) {
                        var e, f, g = c.duration,
                            j = function(a) {
                                var b = a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                                    d = "all " + c.duration / 1e3 + "s " + c.easing,
                                    e = {
                                        position: "fixed",
                                        zIndex: 9999,
                                        left: 0,
                                        top: 0,
                                        "-webkit-backface-visibility": "hidden"
                                    },
                                    f = "transition";
                                return e["-webkit-" + f] = e["-moz-" + f] = e["-o-" + f] = e[f] = d, b.css(e), b
                            },
                            k = function() {
                                b.content.css("visibility", "visible")
                            };
                        w("BuildControls" + d, function() {
                            if (b._allowZoom()) {
                                if (clearTimeout(e), b.content.css("visibility", "hidden"), a = b._getItemToZoom(), !a) return void k();
                                f = j(a), f.css(b._getOffset()), b.wrap.append(f), e = setTimeout(function() {
                                    f.css(b._getOffset(!0)), e = setTimeout(function() {
                                        k(), setTimeout(function() {
                                            f.remove(), a = f = null, y("ZoomAnimationEnded")
                                        }, 16)
                                    }, g)
                                }, 16)
                            }
                        }), w(i + d, function() {
                            if (b._allowZoom()) {
                                if (clearTimeout(e), b.st.removalDelay = g, !a) {
                                    if (a = b._getItemToZoom(), !a) return;
                                    f = j(a)
                                }
                                f.css(b._getOffset(!0)), b.wrap.append(f), b.content.css("visibility", "hidden"), setTimeout(function() {
                                    f.css(b._getOffset())
                                }, 16)
                            }
                        }), w(h + d, function() {
                            b._allowZoom() && (k(), f && f.remove(), a = null)
                        })
                    }
                },
                _allowZoom: function() {
                    return "image" === b.currItem.type
                },
                _getItemToZoom: function() {
                    return !!b.currItem.hasSize && b.currItem.img
                },
                _getOffset: function(c) {
                    var d;
                    d = c ? b.currItem.img : b.st.zoom.opener(b.currItem.el || b.currItem);
                    var e = d.offset(),
                        f = parseInt(d.css("padding-top"), 10),
                        g = parseInt(d.css("padding-bottom"), 10);
                    e.top -= a(window).scrollTop() - f;
                    var h = {
                        width: d.width(),
                        height: (u ? d.innerHeight() : d[0].offsetHeight) - g - f
                    };
                    return O() ? h["-moz-transform"] = h.transform = "translate(" + e.left + "px," + e.top + "px)" : (h.left = e.left, h.top = e.top), h
                }
            }
        });
        var P = "iframe",
            Q = "//about:blank",
            R = function(a) {
                if (b.currTemplate[P]) {
                    var c = b.currTemplate[P].find("iframe");
                    c.length && (a || (c[0].src = Q), b.isIE8 && c.css("display", a ? "block" : "none"))
                }
            };
        a.magnificPopup.registerModule(P, {
            options: {
                markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
                srcAction: "iframe_src",
                patterns: {
                    youtube: {
                        index: "youtube.com",
                        id: "v=",
                        src: "//www.youtube.com/embed/%id%?autoplay=1"
                    },
                    vimeo: {
                        index: "vimeo.com/",
                        id: "/",
                        src: "//player.vimeo.com/video/%id%?autoplay=1"
                    },
                    gmaps: {
                        index: "//maps.google.",
                        src: "%id%&output=embed"
                    }
                }
            },
            proto: {
                initIframe: function() {
                    b.types.push(P), w("BeforeChange", function(a, b, c) {
                        b !== c && (b === P ? R() : c === P && R(!0))
                    }), w(h + "." + P, function() {
                        R()
                    })
                },
                getIframe: function(c, d) {
                    var e = c.src,
                        f = b.st.iframe;
                    a.each(f.patterns, function() {
                        return e.indexOf(this.index) > -1 ? (this.id && (e = "string" == typeof this.id ? e.substr(e.lastIndexOf(this.id) + this.id.length, e.length) : this.id.call(this, e)), e = this.src.replace("%id%", e), !1) : void 0
                    });
                    var g = {};
                    return f.srcAction && (g[f.srcAction] = e), b._parseMarkup(d, g, c), b.updateStatus("ready"), d
                }
            }
        });
        var S = function(a) {
                var c = b.items.length;
                return a > c - 1 ? a - c : 0 > a ? c + a : a
            },
            T = function(a, b, c) {
                return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c)
            };
        a.magnificPopup.registerModule("gallery", {
            options: {
                enabled: !1,
                arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
                preload: [0, 2],
                navigateByImgClick: !0,
                arrows: !0,
                tPrev: "Previous (Left arrow key)",
                tNext: "Next (Right arrow key)",
                tCounter: "%curr% of %total%"
            },
            proto: {
                initGallery: function() {
                    var c = b.st.gallery,
                        e = ".mfp-gallery";
                    return b.direction = !0, !(!c || !c.enabled) && (f += " mfp-gallery", w(m + e, function() {
                        c.navigateByImgClick && b.wrap.on("click" + e, ".mfp-img", function() {
                            return b.items.length > 1 ? (b.next(), !1) : void 0
                        }), d.on("keydown" + e, function(a) {
                            37 === a.keyCode ? b.prev() : 39 === a.keyCode && b.next()
                        })
                    }), w("UpdateStatus" + e, function(a, c) {
                        c.text && (c.text = T(c.text, b.currItem.index, b.items.length))
                    }), w(l + e, function(a, d, e, f) {
                        var g = b.items.length;
                        e.counter = g > 1 ? T(c.tCounter, f.index, g) : ""
                    }), w("BuildControls" + e, function() {
                        if (b.items.length > 1 && c.arrows && !b.arrowLeft) {
                            var d = c.arrowMarkup,
                                e = b.arrowLeft = a(d.replace(/%title%/gi, c.tPrev).replace(/%dir%/gi, "left")).addClass(s),
                                f = b.arrowRight = a(d.replace(/%title%/gi, c.tNext).replace(/%dir%/gi, "right")).addClass(s);
                            e.click(function() {
                                b.prev()
                            }), f.click(function() {
                                b.next()
                            }), b.container.append(e.add(f))
                        }
                    }), w(n + e, function() {
                        b._preloadTimeout && clearTimeout(b._preloadTimeout), b._preloadTimeout = setTimeout(function() {
                            b.preloadNearbyImages(), b._preloadTimeout = null
                        }, 16)
                    }), void w(h + e, function() {
                        d.off(e), b.wrap.off("click" + e), b.arrowRight = b.arrowLeft = null
                    }))
                },
                next: function() {
                    b.direction = !0, b.index = S(b.index + 1), b.updateItemHTML()
                },
                prev: function() {
                    b.direction = !1, b.index = S(b.index - 1), b.updateItemHTML()
                },
                goTo: function(a) {
                    b.direction = a >= b.index, b.index = a, b.updateItemHTML()
                },
                preloadNearbyImages: function() {
                    var a, c = b.st.gallery.preload,
                        d = Math.min(c[0], b.items.length),
                        e = Math.min(c[1], b.items.length);
                    for (a = 1; a <= (b.direction ? e : d); a++) b._preloadItem(b.index + a);
                    for (a = 1; a <= (b.direction ? d : e); a++) b._preloadItem(b.index - a)
                },
                _preloadItem: function(c) {
                    if (c = S(c), !b.items[c].preloaded) {
                        var d = b.items[c];
                        d.parsed || (d = b.parseEl(c)), y("LazyLoad", d), "image" === d.type && (d.img = a('<img class="mfp-img" />').on("load.mfploader", function() {
                            d.hasSize = !0
                        }).on("error.mfploader", function() {
                            d.hasSize = !0, d.loadError = !0, y("LazyLoadError", d)
                        }).attr("src", d.src)), d.preloaded = !0
                    }
                }
            }
        });
        var U = "retina";
        a.magnificPopup.registerModule(U, {
            options: {
                replaceSrc: function(a) {
                    return a.src.replace(/\.\w+$/, function(a) {
                        return "@2x" + a
                    })
                },
                ratio: 1
            },
            proto: {
                initRetina: function() {
                    if (window.devicePixelRatio > 1) {
                        var a = b.st.retina,
                            c = a.ratio;
                        c = isNaN(c) ? c() : c, c > 1 && (w("ImageHasSize." + U, function(a, b) {
                            b.img.css({
                                "max-width": b.img[0].naturalWidth / c,
                                width: "100%"
                            })
                        }), w("ElementParse." + U, function(b, d) {
                            d.src = a.replaceSrc(d, c)
                        }))
                    }
                }
            }
        }), A()
    }), ! function() {
        "use strict";

        function a(d) {
            if (!d) throw new Error("No options passed to Waypoint constructor");
            if (!d.element) throw new Error("No element option passed to Waypoint constructor");
            if (!d.handler) throw new Error("No handler option passed to Waypoint constructor");
            this.key = "waypoint-" + b, this.options = a.Adapter.extend({}, a.defaults, d), this.element = this.options.element, this.adapter = new a.Adapter(this.element), this.callback = d.handler, this.axis = this.options.horizontal ? "horizontal" : "vertical", this.enabled = this.options.enabled, this.triggerPoint = null, this.group = a.Group.findOrCreate({
                name: this.options.group,
                axis: this.axis
            }), this.context = a.Context.findOrCreateByElement(this.options.context), a.offsetAliases[this.options.offset] && (this.options.offset = a.offsetAliases[this.options.offset]), this.group.add(this), this.context.add(this), c[this.key] = this, b += 1
        }
        var b = 0,
            c = {};
        a.prototype.queueTrigger = function(a) {
            this.group.queueTrigger(this, a)
        }, a.prototype.trigger = function(a) {
            this.enabled && this.callback && this.callback.apply(this, a)
        }, a.prototype.destroy = function() {
            this.context.remove(this), this.group.remove(this), delete c[this.key]
        }, a.prototype.disable = function() {
            return this.enabled = !1, this
        }, a.prototype.enable = function() {
            return this.context.refresh(), this.enabled = !0, this
        }, a.prototype.next = function() {
            return this.group.next(this)
        }, a.prototype.previous = function() {
            return this.group.previous(this)
        }, a.invokeAll = function(a) {
            var b = [];
            for (var d in c) b.push(c[d]);
            for (var e = 0, f = b.length; f > e; e++) b[e][a]()
        }, a.destroyAll = function() {
            a.invokeAll("destroy")
        }, a.disableAll = function() {
            a.invokeAll("disable")
        }, a.enableAll = function() {
            a.invokeAll("enable")
        }, a.refreshAll = function() {
            a.Context.refreshAll()
        }, a.viewportHeight = function() {
            return window.innerHeight || document.documentElement.clientHeight
        }, a.viewportWidth = function() {
            return document.documentElement.clientWidth
        }, a.adapters = [], a.defaults = {
            context: window,
            continuous: !0,
            enabled: !0,
            group: "default",
            horizontal: !1,
            offset: 0
        }, a.offsetAliases = {
            "bottom-in-view": function() {
                return this.context.innerHeight() - this.adapter.outerHeight()
            },
            "right-in-view": function() {
                return this.context.innerWidth() - this.adapter.outerWidth()
            }
        }, window.Waypoint = a
    }(),
    function() {
        "use strict";

        function a(a) {
            window.setTimeout(a, 1e3 / 60)
        }

        function b(a) {
            this.element = a, this.Adapter = e.Adapter, this.adapter = new this.Adapter(a), this.key = "waypoint-context-" + c, this.didScroll = !1, this.didResize = !1, this.oldScroll = {
                x: this.adapter.scrollLeft(),
                y: this.adapter.scrollTop()
            }, this.waypoints = {
                vertical: {},
                horizontal: {}
            }, a.waypointContextKey = this.key, d[a.waypointContextKey] = this, c += 1, this.createThrottledScrollHandler(), this.createThrottledResizeHandler()
        }
        var c = 0,
            d = {},
            e = window.Waypoint,
            f = window.onload;
        b.prototype.add = function(a) {
            var b = a.options.horizontal ? "horizontal" : "vertical";
            this.waypoints[b][a.key] = a, this.refresh()
        }, b.prototype.checkEmpty = function() {
            var a = this.Adapter.isEmptyObject(this.waypoints.horizontal),
                b = this.Adapter.isEmptyObject(this.waypoints.vertical);
            a && b && (this.adapter.off(".waypoints"), delete d[this.key])
        }, b.prototype.createThrottledResizeHandler = function() {
            function a() {
                b.handleResize(), b.didResize = !1
            }
            var b = this;
            this.adapter.on("resize.waypoints", function() {
                b.didResize || (b.didResize = !0, e.requestAnimationFrame(a))
            })
        }, b.prototype.createThrottledScrollHandler = function() {
            function a() {
                b.handleScroll(), b.didScroll = !1
            }
            var b = this;
            this.adapter.on("scroll.waypoints", function() {
                (!b.didScroll || e.isTouch) && (b.didScroll = !0, e.requestAnimationFrame(a))
            })
        }, b.prototype.handleResize = function() {
            e.Context.refreshAll()
        }, b.prototype.handleScroll = function() {
            var a = {},
                b = {
                    horizontal: {
                        newScroll: this.adapter.scrollLeft(),
                        oldScroll: this.oldScroll.x,
                        forward: "right",
                        backward: "left"
                    },
                    vertical: {
                        newScroll: this.adapter.scrollTop(),
                        oldScroll: this.oldScroll.y,
                        forward: "down",
                        backward: "up"
                    }
                };
            for (var c in b) {
                var d = b[c],
                    e = d.newScroll > d.oldScroll,
                    f = e ? d.forward : d.backward;
                for (var g in this.waypoints[c]) {
                    var h = this.waypoints[c][g],
                        i = d.oldScroll < h.triggerPoint,
                        j = d.newScroll >= h.triggerPoint,
                        k = i && j,
                        l = !i && !j;
                    (k || l) && (h.queueTrigger(f), a[h.group.id] = h.group)
                }
            }
            for (var m in a) a[m].flushTriggers();
            this.oldScroll = {
                x: b.horizontal.newScroll,
                y: b.vertical.newScroll
            }
        }, b.prototype.innerHeight = function() {
            return this.element == this.element.window ? e.viewportHeight() : this.adapter.innerHeight()
        }, b.prototype.remove = function(a) {
            delete this.waypoints[a.axis][a.key], this.checkEmpty()
        }, b.prototype.innerWidth = function() {
            return this.element == this.element.window ? e.viewportWidth() : this.adapter.innerWidth()
        }, b.prototype.destroy = function() {
            var a = [];
            for (var b in this.waypoints)
                for (var c in this.waypoints[b]) a.push(this.waypoints[b][c]);
            for (var d = 0, e = a.length; e > d; d++) a[d].destroy()
        }, b.prototype.refresh = function() {
            var a, b = this.element == this.element.window,
                c = b ? void 0 : this.adapter.offset(),
                d = {};
            this.handleScroll(), a = {
                horizontal: {
                    contextOffset: b ? 0 : c.left,
                    contextScroll: b ? 0 : this.oldScroll.x,
                    contextDimension: this.innerWidth(),
                    oldScroll: this.oldScroll.x,
                    forward: "right",
                    backward: "left",
                    offsetProp: "left"
                },
                vertical: {
                    contextOffset: b ? 0 : c.top,
                    contextScroll: b ? 0 : this.oldScroll.y,
                    contextDimension: this.innerHeight(),
                    oldScroll: this.oldScroll.y,
                    forward: "down",
                    backward: "up",
                    offsetProp: "top"
                }
            };
            for (var f in a) {
                var g = a[f];
                for (var h in this.waypoints[f]) {
                    var i, j, k, l, m, n = this.waypoints[f][h],
                        o = n.options.offset,
                        p = n.triggerPoint,
                        q = 0,
                        r = null == p;
                    n.element !== n.element.window && (q = n.adapter.offset()[g.offsetProp]), "function" == typeof o ? o = o.apply(n) : "string" == typeof o && (o = parseFloat(o), n.options.offset.indexOf("%") > -1 && (o = Math.ceil(g.contextDimension * o / 100))), i = g.contextScroll - g.contextOffset, n.triggerPoint = q + i - o, j = p < g.oldScroll, k = n.triggerPoint >= g.oldScroll, l = j && k, m = !j && !k, !r && l ? (n.queueTrigger(g.backward), d[n.group.id] = n.group) : !r && m ? (n.queueTrigger(g.forward), d[n.group.id] = n.group) : r && g.oldScroll >= n.triggerPoint && (n.queueTrigger(g.forward), d[n.group.id] = n.group)
                }
            }
            return e.requestAnimationFrame(function() {
                for (var a in d) d[a].flushTriggers()
            }), this
        }, b.findOrCreateByElement = function(a) {
            return b.findByElement(a) || new b(a)
        }, b.refreshAll = function() {
            for (var a in d) d[a].refresh()
        }, b.findByElement = function(a) {
            return d[a.waypointContextKey]
        }, window.onload = function() {
            f && f(), b.refreshAll()
        }, e.requestAnimationFrame = function(b) {
            var c = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || a;
            c.call(window, b)
        }, e.Context = b
    }(),
    function() {
        "use strict";

        function a(a, b) {
            return a.triggerPoint - b.triggerPoint
        }

        function b(a, b) {
            return b.triggerPoint - a.triggerPoint
        }

        function c(a) {
            this.name = a.name, this.axis = a.axis, this.id = this.name + "-" + this.axis, this.waypoints = [], this.clearTriggerQueues(), d[this.axis][this.name] = this
        }
        var d = {
                vertical: {},
                horizontal: {}
            },
            e = window.Waypoint;
        c.prototype.add = function(a) {
            this.waypoints.push(a)
        }, c.prototype.clearTriggerQueues = function() {
            this.triggerQueues = {
                up: [],
                down: [],
                left: [],
                right: []
            }
        }, c.prototype.flushTriggers = function() {
            for (var c in this.triggerQueues) {
                var d = this.triggerQueues[c],
                    e = "up" === c || "left" === c;
                d.sort(e ? b : a);
                for (var f = 0, g = d.length; g > f; f += 1) {
                    var h = d[f];
                    (h.options.continuous || f === d.length - 1) && h.trigger([c])
                }
            }
            this.clearTriggerQueues()
        }, c.prototype.next = function(b) {
            this.waypoints.sort(a);
            var c = e.Adapter.inArray(b, this.waypoints),
                d = c === this.waypoints.length - 1;
            return d ? null : this.waypoints[c + 1]
        }, c.prototype.previous = function(b) {
            this.waypoints.sort(a);
            var c = e.Adapter.inArray(b, this.waypoints);
            return c ? this.waypoints[c - 1] : null
        }, c.prototype.queueTrigger = function(a, b) {
            this.triggerQueues[b].push(a)
        }, c.prototype.remove = function(a) {
            var b = e.Adapter.inArray(a, this.waypoints);
            b > -1 && this.waypoints.splice(b, 1)
        }, c.prototype.first = function() {
            return this.waypoints[0]
        }, c.prototype.last = function() {
            return this.waypoints[this.waypoints.length - 1]
        }, c.findOrCreate = function(a) {
            return d[a.axis][a.name] || new c(a)
        }, e.Group = c
    }(),
    function() {
        "use strict";

        function a(a) {
            this.$element = b(a)
        }
        var b = window.jQuery,
            c = window.Waypoint;
        b.each(["innerHeight", "innerWidth", "off", "offset", "on", "outerHeight", "outerWidth", "scrollLeft", "scrollTop"], function(b, c) {
            a.prototype[c] = function() {
                var a = Array.prototype.slice.call(arguments);
                return this.$element[c].apply(this.$element, a)
            }
        }), b.each(["extend", "inArray", "isEmptyObject"], function(c, d) {
            a[d] = b[d]
        }), c.adapters.push({
            name: "jquery",
            Adapter: a
        }), c.Adapter = a
    }(),
    function() {
        "use strict";

        function a(a) {
            return function() {
                var c = [],
                    d = arguments[0];
                return a.isFunction(arguments[0]) && (d = a.extend({}, arguments[1]), d.handler = arguments[0]), this.each(function() {
                    var e = a.extend({}, d, {
                        element: this
                    });
                    "string" == typeof e.context && (e.context = a(this).closest(e.context)[0]), c.push(new b(e))
                }), c
            }
        }
        var b = window.Waypoint;
        window.jQuery && (window.jQuery.fn.waypoint = a(window.jQuery)), window.Zepto && (window.Zepto.fn.waypoint = a(window.Zepto))
    }(), ! function(a) {
        "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : jQuery)
    }(function(a) {
        var b = function() {
                if (a && a.fn && a.fn.select2 && a.fn.select2.amd) var b = a.fn.select2.amd;
                var b;
                return function() {
                        if (!b || !b.requirejs) {
                            b ? c = b : b = {};
                            var a, c, d;
                            ! function(b) {
                                function e(a, b) {
                                    return u.call(a, b)
                                }

                                function f(a, b) {
                                    var c, d, e, f, g, h, i, j, k, l, m, n = b && b.split("/"),
                                        o = s.map,
                                        p = o && o["*"] || {};
                                    if (a && "." === a.charAt(0))
                                        if (b) {
                                            for (a = a.split("/"), g = a.length - 1, s.nodeIdCompat && w.test(a[g]) && (a[g] = a[g].replace(w, "")), a = n.slice(0, n.length - 1).concat(a), k = 0; k < a.length; k += 1)
                                                if (m = a[k], "." === m) a.splice(k, 1), k -= 1;
                                                else if (".." === m) {
                                                if (1 === k && (".." === a[2] || ".." === a[0])) break;
                                                k > 0 && (a.splice(k - 1, 2), k -= 2)
                                            }
                                            a = a.join("/")
                                        } else 0 === a.indexOf("./") && (a = a.substring(2));
                                    if ((n || p) && o) {
                                        for (c = a.split("/"), k = c.length; k > 0; k -= 1) {
                                            if (d = c.slice(0, k).join("/"), n)
                                                for (l = n.length; l > 0; l -= 1)
                                                    if (e = o[n.slice(0, l).join("/")], e && (e = e[d])) {
                                                        f = e, h = k;
                                                        break
                                                    }
                                            if (f) break;
                                            !i && p && p[d] && (i = p[d], j = k)
                                        }!f && i && (f = i, h = j), f && (c.splice(0, h, f), a = c.join("/"))
                                    }
                                    return a
                                }

                                function g(a, c) {
                                    return function() {
                                        var d = v.call(arguments, 0);
                                        return "string" != typeof d[0] && 1 === d.length && d.push(null), n.apply(b, d.concat([a, c]))
                                    }
                                }

                                function h(a) {
                                    return function(b) {
                                        return f(b, a)
                                    }
                                }

                                function i(a) {
                                    return function(b) {
                                        q[a] = b
                                    }
                                }

                                function j(a) {
                                    if (e(r, a)) {
                                        var c = r[a];
                                        delete r[a], t[a] = !0, m.apply(b, c)
                                    }
                                    if (!e(q, a) && !e(t, a)) throw new Error("No " + a);
                                    return q[a]
                                }

                                function k(a) {
                                    var b, c = a ? a.indexOf("!") : -1;
                                    return c > -1 && (b = a.substring(0, c), a = a.substring(c + 1, a.length)), [b, a]
                                }

                                function l(a) {
                                    return function() {
                                        return s && s.config && s.config[a] || {}
                                    }
                                }
                                var m, n, o, p, q = {},
                                    r = {},
                                    s = {},
                                    t = {},
                                    u = Object.prototype.hasOwnProperty,
                                    v = [].slice,
                                    w = /\.js$/;
                                o = function(a, b) {
                                    var c, d = k(a),
                                        e = d[0];
                                    return a = d[1], e && (e = f(e, b), c = j(e)), e ? a = c && c.normalize ? c.normalize(a, h(b)) : f(a, b) : (a = f(a, b), d = k(a), e = d[0], a = d[1], e && (c = j(e))), {
                                        f: e ? e + "!" + a : a,
                                        n: a,
                                        pr: e,
                                        p: c
                                    }
                                }, p = {
                                    require: function(a) {
                                        return g(a)
                                    },
                                    exports: function(a) {
                                        var b = q[a];
                                        return "undefined" != typeof b ? b : q[a] = {}
                                    },
                                    module: function(a) {
                                        return {
                                            id: a,
                                            uri: "",
                                            exports: q[a],
                                            config: l(a)
                                        }
                                    }
                                }, m = function(a, c, d, f) {
                                    var h, k, l, m, n, s, u = [],
                                        v = typeof d;
                                    if (f = f || a, "undefined" === v || "function" === v) {
                                        for (c = !c.length && d.length ? ["require", "exports", "module"] : c, n = 0; n < c.length; n += 1)
                                            if (m = o(c[n], f), k = m.f, "require" === k) u[n] = p.require(a);
                                            else if ("exports" === k) u[n] = p.exports(a), s = !0;
                                        else if ("module" === k) h = u[n] = p.module(a);
                                        else if (e(q, k) || e(r, k) || e(t, k)) u[n] = j(k);
                                        else {
                                            if (!m.p) throw new Error(a + " missing " + k);
                                            m.p.load(m.n, g(f, !0), i(k), {}), u[n] = q[k]
                                        }
                                        l = d ? d.apply(q[a], u) : void 0, a && (h && h.exports !== b && h.exports !== q[a] ? q[a] = h.exports : l === b && s || (q[a] = l))
                                    } else a && (q[a] = d)
                                }, a = c = n = function(a, c, d, e, f) {
                                    if ("string" == typeof a) return p[a] ? p[a](c) : j(o(a, c).f);
                                    if (!a.splice) {
                                        if (s = a, s.deps && n(s.deps, s.callback), !c) return;
                                        c.splice ? (a = c, c = d, d = null) : a = b
                                    }
                                    return c = c || function() {}, "function" == typeof d && (d = e, e = f), e ? m(b, a, c, d) : setTimeout(function() {
                                        m(b, a, c, d)
                                    }, 4), n
                                }, n.config = function(a) {
                                    return n(a)
                                }, a._defined = q, d = function(a, b, c) {
                                    if ("string" != typeof a) throw new Error("See almond README: incorrect module build, no module name");
                                    b.splice || (c = b, b = []), e(q, a) || e(r, a) || (r[a] = [a, b, c])
                                }, d.amd = {
                                    jQuery: !0
                                }
                            }(), b.requirejs = a, b.require = c, b.define = d
                        }
                    }(), b.define("almond", function() {}), b.define("jquery", [], function() {
                        var b = a || $;
                        return null == b && console && console.error && console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."), b
                    }), b.define("select2/utils", ["jquery"], function(a) {
                        function b(a) {
                            var b = a.prototype,
                                c = [];
                            for (var d in b) {
                                var e = b[d];
                                "function" == typeof e && "constructor" !== d && c.push(d)
                            }
                            return c
                        }
                        var c = {};
                        c.Extend = function(a, b) {
                            function c() {
                                this.constructor = a
                            }
                            var d = {}.hasOwnProperty;
                            for (var e in b) d.call(b, e) && (a[e] = b[e]);
                            return c.prototype = b.prototype, a.prototype = new c, a.__super__ = b.prototype, a
                        }, c.Decorate = function(a, c) {
                            function d() {
                                var b = Array.prototype.unshift,
                                    d = c.prototype.constructor.length,
                                    e = a.prototype.constructor;
                                d > 0 && (b.call(arguments, a.prototype.constructor), e = c.prototype.constructor), e.apply(this, arguments)
                            }

                            function e() {
                                this.constructor = d
                            }
                            var f = b(c),
                                g = b(a);
                            c.displayName = a.displayName, d.prototype = new e;
                            for (var h = 0; h < g.length; h++) {
                                var i = g[h];
                                d.prototype[i] = a.prototype[i]
                            }
                            for (var j = (function(a) {
                                    var b = function() {};
                                    a in d.prototype && (b = d.prototype[a]);
                                    var e = c.prototype[a];
                                    return function() {
                                        var a = Array.prototype.unshift;
                                        return a.call(arguments, b), e.apply(this, arguments)
                                    }
                                }), k = 0; k < f.length; k++) {
                                var l = f[k];
                                d.prototype[l] = j(l)
                            }
                            return d
                        };
                        var d = function() {
                            this.listeners = {}
                        };
                        return d.prototype.on = function(a, b) {
                            this.listeners = this.listeners || {}, a in this.listeners ? this.listeners[a].push(b) : this.listeners[a] = [b]
                        }, d.prototype.trigger = function(a) {
                            var b = Array.prototype.slice;
                            this.listeners = this.listeners || {}, a in this.listeners && this.invoke(this.listeners[a], b.call(arguments, 1)), "*" in this.listeners && this.invoke(this.listeners["*"], arguments)
                        }, d.prototype.invoke = function(a, b) {
                            for (var c = 0, d = a.length; d > c; c++) a[c].apply(this, b)
                        }, c.Observable = d, c.generateChars = function(a) {
                            for (var b = "", c = 0; a > c; c++) {
                                var d = Math.floor(36 * Math.random());
                                b += d.toString(36)
                            }
                            return b
                        }, c.bind = function(a, b) {
                            return function() {
                                a.apply(b, arguments)
                            }
                        }, c._convertData = function(a) {
                            for (var b in a) {
                                var c = b.split("-"),
                                    d = a;
                                if (1 !== c.length) {
                                    for (var e = 0; e < c.length; e++) {
                                        var f = c[e];
                                        f = f.substring(0, 1).toLowerCase() + f.substring(1), f in d || (d[f] = {}), e == c.length - 1 && (d[f] = a[b]), d = d[f]
                                    }
                                    delete a[b]
                                }
                            }
                            return a
                        }, c.hasScroll = function(b, c) {
                            var d = a(c),
                                e = c.style.overflowX,
                                f = c.style.overflowY;
                            return (e !== f || "hidden" !== f && "visible" !== f) && ("scroll" === e || "scroll" === f || (d.innerHeight() < c.scrollHeight || d.innerWidth() < c.scrollWidth))
                        }, c.escapeMarkup = function(a) {
                            var b = {
                                "\\": "&#92;",
                                "&": "&amp;",
                                "<": "&lt;",
                                ">": "&gt;",
                                '"': "&quot;",
                                "'": "&#39;",
                                "/": "&#47;"
                            };
                            return "string" != typeof a ? a : String(a).replace(/[&<>"'\/\\]/g, function(a) {
                                return b[a]
                            })
                        }, c.appendMany = function(b, c) {
                            if ("1.7" === a.fn.jquery.substr(0, 3)) {
                                var d = a();
                                a.map(c, function(a) {
                                    d = d.add(a)
                                }), c = d
                            }
                            b.append(c)
                        }, c
                    }), b.define("select2/results", ["jquery", "./utils"], function(a, b) {
                        function c(a, b, d) {
                            this.$element = a, this.data = d, this.options = b, c.__super__.constructor.call(this)
                        }
                        return b.Extend(c, b.Observable), c.prototype.render = function() {
                            var b = a('<ul class="select2-results__options" role="tree"></ul>');
                            return this.options.get("multiple") && b.attr("aria-multiselectable", "true"), this.$results = b, b
                        }, c.prototype.clear = function() {
                            this.$results.empty()
                        }, c.prototype.displayMessage = function(b) {
                            var c = this.options.get("escapeMarkup");
                            this.clear(), this.hideLoading();
                            var d = a('<li role="treeitem" aria-live="assertive" class="select2-results__option"></li>'),
                                e = this.options.get("translations").get(b.message);
                            d.append(c(e(b.args))), d[0].className += " select2-results__message", this.$results.append(d)
                        }, c.prototype.hideMessages = function() {
                            this.$results.find(".select2-results__message").remove()
                        }, c.prototype.append = function(a) {
                            this.hideLoading();
                            var b = [];
                            if (null == a.results || 0 === a.results.length) return void(0 === this.$results.children().length && this.trigger("results:message", {
                                message: "noResults"
                            }));
                            a.results = this.sort(a.results);
                            for (var c = 0; c < a.results.length; c++) {
                                var d = a.results[c],
                                    e = this.option(d);
                                b.push(e)
                            }
                            this.$results.append(b)
                        }, c.prototype.position = function(a, b) {
                            var c = b.find(".select2-results");
                            c.append(a)
                        }, c.prototype.sort = function(a) {
                            var b = this.options.get("sorter");
                            return b(a)
                        }, c.prototype.setClasses = function() {
                            var b = this;
                            this.data.current(function(c) {
                                var d = a.map(c, function(a) {
                                        return a.id.toString()
                                    }),
                                    e = b.$results.find(".select2-results__option[aria-selected]");
                                e.each(function() {
                                    var b = a(this),
                                        c = a.data(this, "data"),
                                        e = "" + c.id;
                                    null != c.element && c.element.selected || null == c.element && a.inArray(e, d) > -1 ? b.attr("aria-selected", "true") : b.attr("aria-selected", "false")
                                });
                                var f = e.filter("[aria-selected=true]");
                                f.length > 0 ? f.first().trigger("mouseenter") : e.first().trigger("mouseenter")
                            })
                        }, c.prototype.showLoading = function(a) {
                            this.hideLoading();
                            var b = this.options.get("translations").get("searching"),
                                c = {
                                    disabled: !0,
                                    loading: !0,
                                    text: b(a)
                                },
                                d = this.option(c);
                            d.className += " loading-results", this.$results.prepend(d)
                        }, c.prototype.hideLoading = function() {
                            this.$results.find(".loading-results").remove()
                        }, c.prototype.option = function(b) {
                            var c = document.createElement("li");
                            c.className = "select2-results__option";
                            var d = {
                                role: "treeitem",
                                "aria-selected": "false"
                            };
                            b.disabled && (delete d["aria-selected"], d["aria-disabled"] = "true"), null == b.id && delete d["aria-selected"], null != b._resultId && (c.id = b._resultId), b.title && (c.title = b.title), b.children && (d.role = "group", d["aria-label"] = b.text, delete d["aria-selected"]);
                            for (var e in d) {
                                var f = d[e];
                                c.setAttribute(e, f)
                            }
                            if (b.children) {
                                var g = a(c),
                                    h = document.createElement("strong");
                                h.className = "select2-results__group", a(h), this.template(b, h);
                                for (var i = [], j = 0; j < b.children.length; j++) {
                                    var k = b.children[j],
                                        l = this.option(k);
                                    i.push(l)
                                }
                                var m = a("<ul></ul>", {
                                    class: "select2-results__options select2-results__options--nested"
                                });
                                m.append(i), g.append(h), g.append(m)
                            } else this.template(b, c);
                            return a.data(c, "data", b), c
                        }, c.prototype.bind = function(b, c) {
                            var d = this,
                                e = b.id + "-results";
                            this.$results.attr("id", e), b.on("results:all", function(a) {
                                d.clear(), d.append(a.data), b.isOpen() && d.setClasses()
                            }), b.on("results:append", function(a) {
                                d.append(a.data), b.isOpen() && d.setClasses()
                            }), b.on("query", function(a) {
                                d.hideMessages(), d.showLoading(a)
                            }), b.on("select", function() {
                                b.isOpen() && d.setClasses()
                            }), b.on("unselect", function() {
                                b.isOpen() && d.setClasses()
                            }), b.on("open", function() {
                                d.$results.attr("aria-expanded", "true"), d.$results.attr("aria-hidden", "false"), d.setClasses(), d.ensureHighlightVisible()
                            }), b.on("close", function() {
                                d.$results.attr("aria-expanded", "false"), d.$results.attr("aria-hidden", "true"), d.$results.removeAttr("aria-activedescendant")
                            }), b.on("results:toggle", function() {
                                var a = d.getHighlightedResults();
                                0 !== a.length && a.trigger("mouseup")
                            }), b.on("results:select", function() {
                                var a = d.getHighlightedResults();
                                if (0 !== a.length) {
                                    var b = a.data("data");
                                    "true" == a.attr("aria-selected") ? d.trigger("close", {}) : d.trigger("select", {
                                        data: b
                                    })
                                }
                            }), b.on("results:previous", function() {
                                var a = d.getHighlightedResults(),
                                    b = d.$results.find("[aria-selected]"),
                                    c = b.index(a);
                                if (0 !== c) {
                                    var e = c - 1;
                                    0 === a.length && (e = 0);
                                    var f = b.eq(e);
                                    f.trigger("mouseenter");
                                    var g = d.$results.offset().top,
                                        h = f.offset().top,
                                        i = d.$results.scrollTop() + (h - g);
                                    0 === e ? d.$results.scrollTop(0) : 0 > h - g && d.$results.scrollTop(i)
                                }
                            }), b.on("results:next", function() {
                                var a = d.getHighlightedResults(),
                                    b = d.$results.find("[aria-selected]"),
                                    c = b.index(a),
                                    e = c + 1;
                                if (!(e >= b.length)) {
                                    var f = b.eq(e);
                                    f.trigger("mouseenter");
                                    var g = d.$results.offset().top + d.$results.outerHeight(!1),
                                        h = f.offset().top + f.outerHeight(!1),
                                        i = d.$results.scrollTop() + h - g;
                                    0 === e ? d.$results.scrollTop(0) : h > g && d.$results.scrollTop(i)
                                }
                            }), b.on("results:focus", function(a) {
                                a.element.addClass("select2-results__option--highlighted")
                            }), b.on("results:message", function(a) {
                                d.displayMessage(a)
                            }), a.fn.mousewheel && this.$results.on("mousewheel", function(a) {
                                var b = d.$results.scrollTop(),
                                    c = d.$results.get(0).scrollHeight - b + a.deltaY,
                                    e = a.deltaY > 0 && b - a.deltaY <= 0,
                                    f = a.deltaY < 0 && c <= d.$results.height();
                                e ? (d.$results.scrollTop(0), a.preventDefault(), a.stopPropagation()) : f && (d.$results.scrollTop(d.$results.get(0).scrollHeight - d.$results.height()), a.preventDefault(), a.stopPropagation())
                            }), this.$results.on("mouseup", ".select2-results__option[aria-selected]", function(b) {
                                var c = a(this),
                                    e = c.data("data");
                                return "true" === c.attr("aria-selected") ? void(d.options.get("multiple") ? d.trigger("unselect", {
                                    originalEvent: b,
                                    data: e
                                }) : d.trigger("close", {})) : void d.trigger("select", {
                                    originalEvent: b,
                                    data: e
                                })
                            }), this.$results.on("mouseenter", ".select2-results__option[aria-selected]", function(b) {
                                var c = a(this).data("data");
                                d.getHighlightedResults().removeClass("select2-results__option--highlighted"), d.trigger("results:focus", {
                                    data: c,
                                    element: a(this)
                                })
                            })
                        }, c.prototype.getHighlightedResults = function() {
                            var a = this.$results.find(".select2-results__option--highlighted");
                            return a
                        }, c.prototype.destroy = function() {
                            this.$results.remove()
                        }, c.prototype.ensureHighlightVisible = function() {
                            var a = this.getHighlightedResults();
                            if (0 !== a.length) {
                                var b = this.$results.find("[aria-selected]"),
                                    c = b.index(a),
                                    d = this.$results.offset().top,
                                    e = a.offset().top,
                                    f = this.$results.scrollTop() + (e - d),
                                    g = e - d;
                                f -= 2 * a.outerHeight(!1), 2 >= c ? this.$results.scrollTop(0) : (g > this.$results.outerHeight() || 0 > g) && this.$results.scrollTop(f)
                            }
                        }, c.prototype.template = function(b, c) {
                            var d = this.options.get("templateResult"),
                                e = this.options.get("escapeMarkup"),
                                f = d(b, c);
                            null == f ? c.style.display = "none" : "string" == typeof f ? c.innerHTML = e(f) : a(c).append(f)
                        }, c
                    }), b.define("select2/keys", [], function() {
                        var a = {
                            BACKSPACE: 8,
                            TAB: 9,
                            ENTER: 13,
                            SHIFT: 16,
                            CTRL: 17,
                            ALT: 18,
                            ESC: 27,
                            SPACE: 32,
                            PAGE_UP: 33,
                            PAGE_DOWN: 34,
                            END: 35,
                            HOME: 36,
                            LEFT: 37,
                            UP: 38,
                            RIGHT: 39,
                            DOWN: 40,
                            DELETE: 46
                        };
                        return a
                    }), b.define("select2/selection/base", ["jquery", "../utils", "../keys"], function(a, b, c) {
                        function d(a, b) {
                            this.$element = a, this.options = b, d.__super__.constructor.call(this)
                        }
                        return b.Extend(d, b.Observable), d.prototype.render = function() {
                            var b = a('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');
                            return this._tabindex = 0, null != this.$element.data("old-tabindex") ? this._tabindex = this.$element.data("old-tabindex") : null != this.$element.attr("tabindex") && (this._tabindex = this.$element.attr("tabindex")), b.attr("title", this.$element.attr("title")), b.attr("tabindex", this._tabindex), this.$selection = b, b
                        }, d.prototype.bind = function(a, b) {
                            var d = this,
                                e = (a.id + "-container", a.id + "-results");
                            this.container = a, this.$selection.on("focus", function(a) {
                                d.trigger("focus", a)
                            }), this.$selection.on("blur", function(a) {
                                d._handleBlur(a)
                            }), this.$selection.on("keydown", function(a) {
                                d.trigger("keypress", a), a.which === c.SPACE && a.preventDefault()
                            }), a.on("results:focus", function(a) {
                                d.$selection.attr("aria-activedescendant", a.data._resultId)
                            }), a.on("selection:update", function(a) {
                                d.update(a.data)
                            }), a.on("open", function() {
                                d.$selection.attr("aria-expanded", "true"), d.$selection.attr("aria-owns", e), d._attachCloseHandler(a)
                            }), a.on("close", function() {
                                d.$selection.attr("aria-expanded", "false"), d.$selection.removeAttr("aria-activedescendant"), d.$selection.removeAttr("aria-owns"), d.$selection.focus(), d._detachCloseHandler(a);
                            }), a.on("enable", function() {
                                d.$selection.attr("tabindex", d._tabindex)
                            }), a.on("disable", function() {
                                d.$selection.attr("tabindex", "-1")
                            })
                        }, d.prototype._handleBlur = function(b) {
                            var c = this;
                            window.setTimeout(function() {
                                document.activeElement == c.$selection[0] || a.contains(c.$selection[0], document.activeElement) || c.trigger("blur", b)
                            }, 1)
                        }, d.prototype._attachCloseHandler = function(b) {
                            a(document.body).on("mousedown.select2." + b.id, function(b) {
                                var c = a(b.target),
                                    d = c.closest(".select2"),
                                    e = a(".select2.select2-container--open");
                                e.each(function() {
                                    var b = a(this);
                                    if (this != d[0]) {
                                        var c = b.data("element");
                                        c.select2("close")
                                    }
                                })
                            })
                        }, d.prototype._detachCloseHandler = function(b) {
                            a(document.body).off("mousedown.select2." + b.id)
                        }, d.prototype.position = function(a, b) {
                            var c = b.find(".selection");
                            c.append(a)
                        }, d.prototype.destroy = function() {
                            this._detachCloseHandler(this.container)
                        }, d.prototype.update = function(a) {
                            throw new Error("The `update` method must be defined in child classes.")
                        }, d
                    }), b.define("select2/selection/single", ["jquery", "./base", "../utils", "../keys"], function(a, b, c, d) {
                        function e() {
                            e.__super__.constructor.apply(this, arguments)
                        }
                        return c.Extend(e, b), e.prototype.render = function() {
                            var a = e.__super__.render.call(this);
                            return a.addClass("select2-selection--single"), a.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'), a
                        }, e.prototype.bind = function(a, b) {
                            var c = this;
                            e.__super__.bind.apply(this, arguments);
                            var d = a.id + "-container";
                            this.$selection.find(".select2-selection__rendered").attr("id", d), this.$selection.attr("aria-labelledby", d), this.$selection.on("mousedown", function(a) {
                                1 === a.which && c.trigger("toggle", {
                                    originalEvent: a
                                })
                            }), this.$selection.on("focus", function(a) {}), this.$selection.on("blur", function(a) {}), a.on("selection:update", function(a) {
                                c.update(a.data)
                            })
                        }, e.prototype.clear = function() {
                            this.$selection.find(".select2-selection__rendered").empty()
                        }, e.prototype.display = function(a, b) {
                            var c = this.options.get("templateSelection"),
                                d = this.options.get("escapeMarkup");
                            return d(c(a, b))
                        }, e.prototype.selectionContainer = function() {
                            return a("<span></span>")
                        }, e.prototype.update = function(a) {
                            if (0 === a.length) return void this.clear();
                            var b = a[0],
                                c = this.$selection.find(".select2-selection__rendered"),
                                d = this.display(b, c);
                            c.empty().append(d), c.prop("title", b.title || b.text)
                        }, e
                    }), b.define("select2/selection/multiple", ["jquery", "./base", "../utils"], function(a, b, c) {
                        function d(a, b) {
                            d.__super__.constructor.apply(this, arguments)
                        }
                        return c.Extend(d, b), d.prototype.render = function() {
                            var a = d.__super__.render.call(this);
                            return a.addClass("select2-selection--multiple"), a.html('<ul class="select2-selection__rendered"></ul>'), a
                        }, d.prototype.bind = function(b, c) {
                            var e = this;
                            d.__super__.bind.apply(this, arguments), this.$selection.on("click", function(a) {
                                e.trigger("toggle", {
                                    originalEvent: a
                                })
                            }), this.$selection.on("click", ".select2-selection__choice__remove", function(b) {
                                if (!e.options.get("disabled")) {
                                    var c = a(this),
                                        d = c.parent(),
                                        f = d.data("data");
                                    e.trigger("unselect", {
                                        originalEvent: b,
                                        data: f
                                    })
                                }
                            })
                        }, d.prototype.clear = function() {
                            this.$selection.find(".select2-selection__rendered").empty()
                        }, d.prototype.display = function(a, b) {
                            var c = this.options.get("templateSelection"),
                                d = this.options.get("escapeMarkup");
                            return d(c(a, b))
                        }, d.prototype.selectionContainer = function() {
                            var b = a('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>');
                            return b
                        }, d.prototype.update = function(a) {
                            if (this.clear(), 0 !== a.length) {
                                for (var b = [], d = 0; d < a.length; d++) {
                                    var e = a[d],
                                        f = this.selectionContainer(),
                                        g = this.display(e, f);
                                    f.append(g), f.prop("title", e.title || e.text), f.data("data", e), b.push(f)
                                }
                                var h = this.$selection.find(".select2-selection__rendered");
                                c.appendMany(h, b)
                            }
                        }, d
                    }), b.define("select2/selection/placeholder", ["../utils"], function(a) {
                        function b(a, b, c) {
                            this.placeholder = this.normalizePlaceholder(c.get("placeholder")), a.call(this, b, c)
                        }
                        return b.prototype.normalizePlaceholder = function(a, b) {
                            return "string" == typeof b && (b = {
                                id: "",
                                text: b
                            }), b
                        }, b.prototype.createPlaceholder = function(a, b) {
                            var c = this.selectionContainer();
                            return c.html(this.display(b)), c.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"), c
                        }, b.prototype.update = function(a, b) {
                            var c = 1 == b.length && b[0].id != this.placeholder.id,
                                d = b.length > 1;
                            if (d || c) return a.call(this, b);
                            this.clear();
                            var e = this.createPlaceholder(this.placeholder);
                            this.$selection.find(".select2-selection__rendered").append(e)
                        }, b
                    }), b.define("select2/selection/allowClear", ["jquery", "../keys"], function(a, b) {
                        function c() {}
                        return c.prototype.bind = function(a, b, c) {
                            var d = this;
                            a.call(this, b, c), null == this.placeholder && this.options.get("debug") && window.console && console.error && console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."), this.$selection.on("mousedown", ".select2-selection__clear", function(a) {
                                d._handleClear(a)
                            }), b.on("keypress", function(a) {
                                d._handleKeyboardClear(a, b)
                            })
                        }, c.prototype._handleClear = function(a, b) {
                            if (!this.options.get("disabled")) {
                                var c = this.$selection.find(".select2-selection__clear");
                                if (0 !== c.length) {
                                    b.stopPropagation();
                                    for (var d = c.data("data"), e = 0; e < d.length; e++) {
                                        var f = {
                                            data: d[e]
                                        };
                                        if (this.trigger("unselect", f), f.prevented) return
                                    }
                                    this.$element.val(this.placeholder.id).trigger("change"), this.trigger("toggle", {})
                                }
                            }
                        }, c.prototype._handleKeyboardClear = function(a, c, d) {
                            d.isOpen() || (c.which == b.DELETE || c.which == b.BACKSPACE) && this._handleClear(c)
                        }, c.prototype.update = function(b, c) {
                            if (b.call(this, c), !(this.$selection.find(".select2-selection__placeholder").length > 0 || 0 === c.length)) {
                                var d = a('<span class="select2-selection__clear">&times;</span>');
                                d.data("data", c), this.$selection.find(".select2-selection__rendered").prepend(d)
                            }
                        }, c
                    }), b.define("select2/selection/search", ["jquery", "../utils", "../keys"], function(a, b, c) {
                        function d(a, b, c) {
                            a.call(this, b, c)
                        }
                        return d.prototype.render = function(b) {
                            var c = a('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" aria-autocomplete="list" /></li>');
                            this.$searchContainer = c, this.$search = c.find("input");
                            var d = b.call(this);
                            return this._transferTabIndex(), d
                        }, d.prototype.bind = function(a, b, d) {
                            var e = this;
                            a.call(this, b, d), b.on("open", function() {
                                e.$search.trigger("focus")
                            }), b.on("close", function() {
                                e.$search.val(""), e.$search.removeAttr("aria-activedescendant"), e.$search.trigger("focus")
                            }), b.on("enable", function() {
                                e.$search.prop("disabled", !1), e._transferTabIndex()
                            }), b.on("disable", function() {
                                e.$search.prop("disabled", !0)
                            }), b.on("focus", function(a) {
                                e.$search.trigger("focus")
                            }), b.on("results:focus", function(a) {
                                e.$search.attr("aria-activedescendant", a.id)
                            }), this.$selection.on("focusin", ".select2-search--inline", function(a) {
                                e.trigger("focus", a)
                            }), this.$selection.on("focusout", ".select2-search--inline", function(a) {
                                e._handleBlur(a)
                            }), this.$selection.on("keydown", ".select2-search--inline", function(a) {
                                a.stopPropagation(), e.trigger("keypress", a), e._keyUpPrevented = a.isDefaultPrevented();
                                var b = a.which;
                                if (b === c.BACKSPACE && "" === e.$search.val()) {
                                    var d = e.$searchContainer.prev(".select2-selection__choice");
                                    if (d.length > 0) {
                                        var f = d.data("data");
                                        e.searchRemoveChoice(f), a.preventDefault()
                                    }
                                }
                            });
                            var f = document.documentMode,
                                g = f && 11 >= f;
                            this.$selection.on("input.searchcheck", ".select2-search--inline", function(a) {
                                return g ? void e.$selection.off("input.search input.searchcheck") : void e.$selection.off("keyup.search")
                            }), this.$selection.on("keyup.search input.search", ".select2-search--inline", function(a) {
                                if (g && "input" === a.type) return void e.$selection.off("input.search input.searchcheck");
                                var b = a.which;
                                b != c.SHIFT && b != c.CTRL && b != c.ALT && b != c.TAB && e.handleSearch(a)
                            })
                        }, d.prototype._transferTabIndex = function(a) {
                            this.$search.attr("tabindex", this.$selection.attr("tabindex")), this.$selection.attr("tabindex", "-1")
                        }, d.prototype.createPlaceholder = function(a, b) {
                            this.$search.attr("placeholder", b.text)
                        }, d.prototype.update = function(a, b) {
                            var c = this.$search[0] == document.activeElement;
                            this.$search.attr("placeholder", ""), a.call(this, b), this.$selection.find(".select2-selection__rendered").append(this.$searchContainer), this.resizeSearch(), c && this.$search.focus()
                        }, d.prototype.handleSearch = function() {
                            if (this.resizeSearch(), !this._keyUpPrevented) {
                                var a = this.$search.val();
                                this.trigger("query", {
                                    term: a
                                })
                            }
                            this._keyUpPrevented = !1
                        }, d.prototype.searchRemoveChoice = function(a, b) {
                            this.trigger("unselect", {
                                data: b
                            }), this.$search.val(b.text), this.handleSearch()
                        }, d.prototype.resizeSearch = function() {
                            this.$search.css("width", "25px");
                            var a = "";
                            if ("" !== this.$search.attr("placeholder")) a = this.$selection.find(".select2-selection__rendered").innerWidth();
                            else {
                                var b = this.$search.val().length + 1;
                                a = .75 * b + "em"
                            }
                            this.$search.css("width", a)
                        }, d
                    }), b.define("select2/selection/eventRelay", ["jquery"], function(a) {
                        function b() {}
                        return b.prototype.bind = function(b, c, d) {
                            var e = this,
                                f = ["open", "opening", "close", "closing", "select", "selecting", "unselect", "unselecting"],
                                g = ["opening", "closing", "selecting", "unselecting"];
                            b.call(this, c, d), c.on("*", function(b, c) {
                                if (-1 !== a.inArray(b, f)) {
                                    c = c || {};
                                    var d = a.Event("select2:" + b, {
                                        params: c
                                    });
                                    e.$element.trigger(d), -1 !== a.inArray(b, g) && (c.prevented = d.isDefaultPrevented())
                                }
                            })
                        }, b
                    }), b.define("select2/translation", ["jquery", "require"], function(a, b) {
                        function c(a) {
                            this.dict = a || {}
                        }
                        return c.prototype.all = function() {
                            return this.dict
                        }, c.prototype.get = function(a) {
                            return this.dict[a]
                        }, c.prototype.extend = function(b) {
                            this.dict = a.extend({}, b.all(), this.dict)
                        }, c._cache = {}, c.loadPath = function(a) {
                            if (!(a in c._cache)) {
                                var d = b(a);
                                c._cache[a] = d
                            }
                            return new c(c._cache[a])
                        }, c
                    }), b.define("select2/diacritics", [], function() {
                        var a = {
                            "â’¶": "A",
                            "ï¼¡": "A",
                            "Ã€": "A",
                            "Ã": "A",
                            "Ã‚": "A",
                            "áº¦": "A",
                            "áº¤": "A",
                            "áºª": "A",
                            "áº¨": "A",
                            "Ãƒ": "A",
                            "Ä€": "A",
                            "Ä‚": "A",
                            "áº°": "A",
                            "áº®": "A",
                            "áº´": "A",
                            "áº²": "A",
                            "È¦": "A",
                            "Ç ": "A",
                            "Ã„": "A",
                            "Çž": "A",
                            "áº¢": "A",
                            "Ã…": "A",
                            "Çº": "A",
                            "Ç": "A",
                            "È€": "A",
                            "È‚": "A",
                            "áº ": "A",
                            "áº¬": "A",
                            "áº¶": "A",
                            "á¸€": "A",
                            "Ä„": "A",
                            "Èº": "A",
                            "â±¯": "A",
                            "êœ²": "AA",
                            "Ã†": "AE",
                            "Ç¼": "AE",
                            "Ç¢": "AE",
                            "êœ´": "AO",
                            "êœ¶": "AU",
                            "êœ¸": "AV",
                            "êœº": "AV",
                            "êœ¼": "AY",
                            "â’·": "B",
                            "ï¼¢": "B",
                            "á¸‚": "B",
                            "á¸„": "B",
                            "á¸†": "B",
                            "Éƒ": "B",
                            "Æ‚": "B",
                            "Æ": "B",
                            "â’¸": "C",
                            "ï¼£": "C",
                            "Ä†": "C",
                            "Äˆ": "C",
                            "ÄŠ": "C",
                            "ÄŒ": "C",
                            "Ã‡": "C",
                            "á¸ˆ": "C",
                            "Æ‡": "C",
                            "È»": "C",
                            "êœ¾": "C",
                            "â’¹": "D",
                            "ï¼¤": "D",
                            "á¸Š": "D",
                            "ÄŽ": "D",
                            "á¸Œ": "D",
                            "á¸": "D",
                            "á¸’": "D",
                            "á¸Ž": "D",
                            "Ä": "D",
                            "Æ‹": "D",
                            "ÆŠ": "D",
                            "Æ‰": "D",
                            "ê¹": "D",
                            "Ç±": "DZ",
                            "Ç„": "DZ",
                            "Ç²": "Dz",
                            "Ç…": "Dz",
                            "â’º": "E",
                            "ï¼¥": "E",
                            "Ãˆ": "E",
                            "Ã‰": "E",
                            "ÃŠ": "E",
                            "á»€": "E",
                            "áº¾": "E",
                            "á»„": "E",
                            "á»‚": "E",
                            "áº¼": "E",
                            "Ä’": "E",
                            "á¸”": "E",
                            "á¸–": "E",
                            "Ä”": "E",
                            "Ä–": "E",
                            "Ã‹": "E",
                            "áºº": "E",
                            "Äš": "E",
                            "È„": "E",
                            "È†": "E",
                            "áº¸": "E",
                            "á»†": "E",
                            "È¨": "E",
                            "á¸œ": "E",
                            "Ä˜": "E",
                            "á¸˜": "E",
                            "á¸š": "E",
                            "Æ": "E",
                            "ÆŽ": "E",
                            "â’»": "F",
                            "ï¼¦": "F",
                            "á¸ž": "F",
                            "Æ‘": "F",
                            "ê»": "F",
                            "â’¼": "G",
                            "ï¼§": "G",
                            "Ç´": "G",
                            "Äœ": "G",
                            "á¸ ": "G",
                            "Äž": "G",
                            "Ä ": "G",
                            "Ç¦": "G",
                            "Ä¢": "G",
                            "Ç¤": "G",
                            "Æ“": "G",
                            "êž ": "G",
                            "ê½": "G",
                            "ê¾": "G",
                            "â’½": "H",
                            "ï¼¨": "H",
                            "Ä¤": "H",
                            "á¸¢": "H",
                            "á¸¦": "H",
                            "Èž": "H",
                            "á¸¤": "H",
                            "á¸¨": "H",
                            "á¸ª": "H",
                            "Ä¦": "H",
                            "â±§": "H",
                            "â±µ": "H",
                            "êž": "H",
                            "â’¾": "I",
                            "ï¼©": "I",
                            "ÃŒ": "I",
                            "Ã": "I",
                            "ÃŽ": "I",
                            "Ä¨": "I",
                            "Äª": "I",
                            "Ä¬": "I",
                            "Ä°": "I",
                            "Ã": "I",
                            "á¸®": "I",
                            "á»ˆ": "I",
                            "Ç": "I",
                            "Èˆ": "I",
                            "ÈŠ": "I",
                            "á»Š": "I",
                            "Ä®": "I",
                            "á¸¬": "I",
                            "Æ—": "I",
                            "â’¿": "J",
                            "ï¼ª": "J",
                            "Ä´": "J",
                            "Éˆ": "J",
                            "â“€": "K",
                            "ï¼«": "K",
                            "á¸°": "K",
                            "Ç¨": "K",
                            "á¸²": "K",
                            "Ä¶": "K",
                            "á¸´": "K",
                            "Æ˜": "K",
                            "â±©": "K",
                            "ê€": "K",
                            "ê‚": "K",
                            "ê„": "K",
                            "êž¢": "K",
                            "â“": "L",
                            "ï¼¬": "L",
                            "Ä¿": "L",
                            "Ä¹": "L",
                            "Ä½": "L",
                            "á¸¶": "L",
                            "á¸¸": "L",
                            "Ä»": "L",
                            "á¸¼": "L",
                            "á¸º": "L",
                            "Å": "L",
                            "È½": "L",
                            "â±¢": "L",
                            "â± ": "L",
                            "êˆ": "L",
                            "ê†": "L",
                            "êž€": "L",
                            "Ç‡": "LJ",
                            "Çˆ": "Lj",
                            "â“‚": "M",
                            "ï¼­": "M",
                            "á¸¾": "M",
                            "á¹€": "M",
                            "á¹‚": "M",
                            "â±®": "M",
                            "Æœ": "M",
                            "â“ƒ": "N",
                            "ï¼®": "N",
                            "Ç¸": "N",
                            "Åƒ": "N",
                            "Ã‘": "N",
                            "á¹„": "N",
                            "Å‡": "N",
                            "á¹†": "N",
                            "Å…": "N",
                            "á¹Š": "N",
                            "á¹ˆ": "N",
                            "È ": "N",
                            "Æ": "N",
                            "êž": "N",
                            "êž¤": "N",
                            "ÇŠ": "NJ",
                            "Ç‹": "Nj",
                            "â“„": "O",
                            "ï¼¯": "O",
                            "Ã’": "O",
                            "Ã“": "O",
                            "Ã”": "O",
                            "á»’": "O",
                            "á»": "O",
                            "á»–": "O",
                            "á»”": "O",
                            "Ã•": "O",
                            "á¹Œ": "O",
                            "È¬": "O",
                            "á¹Ž": "O",
                            "ÅŒ": "O",
                            "á¹": "O",
                            "á¹’": "O",
                            "ÅŽ": "O",
                            "È®": "O",
                            "È°": "O",
                            "Ã–": "O",
                            "Èª": "O",
                            "á»Ž": "O",
                            "Å": "O",
                            "Ç‘": "O",
                            "ÈŒ": "O",
                            "ÈŽ": "O",
                            "Æ ": "O",
                            "á»œ": "O",
                            "á»š": "O",
                            "á» ": "O",
                            "á»ž": "O",
                            "á»¢": "O",
                            "á»Œ": "O",
                            "á»˜": "O",
                            "Çª": "O",
                            "Ç¬": "O",
                            "Ã˜": "O",
                            "Ç¾": "O",
                            "Æ†": "O",
                            "ÆŸ": "O",
                            "êŠ": "O",
                            "êŒ": "O",
                            "Æ¢": "OI",
                            "êŽ": "OO",
                            "È¢": "OU",
                            "â“…": "P",
                            "ï¼°": "P",
                            "á¹”": "P",
                            "á¹–": "P",
                            "Æ¤": "P",
                            "â±£": "P",
                            "ê": "P",
                            "ê’": "P",
                            "ê”": "P",
                            "â“†": "Q",
                            "ï¼±": "Q",
                            "ê–": "Q",
                            "ê˜": "Q",
                            "ÉŠ": "Q",
                            "â“‡": "R",
                            "ï¼²": "R",
                            "Å”": "R",
                            "á¹˜": "R",
                            "Å˜": "R",
                            "È": "R",
                            "È’": "R",
                            "á¹š": "R",
                            "á¹œ": "R",
                            "Å–": "R",
                            "á¹ž": "R",
                            "ÉŒ": "R",
                            "â±¤": "R",
                            "êš": "R",
                            "êž¦": "R",
                            "êž‚": "R",
                            "â“ˆ": "S",
                            "ï¼³": "S",
                            "áºž": "S",
                            "Åš": "S",
                            "á¹¤": "S",
                            "Åœ": "S",
                            "á¹ ": "S",
                            "Å ": "S",
                            "á¹¦": "S",
                            "á¹¢": "S",
                            "á¹¨": "S",
                            "È˜": "S",
                            "Åž": "S",
                            "â±¾": "S",
                            "êž¨": "S",
                            "êž„": "S",
                            "â“‰": "T",
                            "ï¼´": "T",
                            "á¹ª": "T",
                            "Å¤": "T",
                            "á¹¬": "T",
                            "Èš": "T",
                            "Å¢": "T",
                            "á¹°": "T",
                            "á¹®": "T",
                            "Å¦": "T",
                            "Æ¬": "T",
                            "Æ®": "T",
                            "È¾": "T",
                            "êž†": "T",
                            "êœ¨": "TZ",
                            "â“Š": "U",
                            "ï¼µ": "U",
                            "Ã™": "U",
                            "Ãš": "U",
                            "Ã›": "U",
                            "Å¨": "U",
                            "á¹¸": "U",
                            "Åª": "U",
                            "á¹º": "U",
                            "Å¬": "U",
                            "Ãœ": "U",
                            "Ç›": "U",
                            "Ç—": "U",
                            "Ç•": "U",
                            "Ç™": "U",
                            "á»¦": "U",
                            "Å®": "U",
                            "Å°": "U",
                            "Ç“": "U",
                            "È”": "U",
                            "È–": "U",
                            "Æ¯": "U",
                            "á»ª": "U",
                            "á»¨": "U",
                            "á»®": "U",
                            "á»¬": "U",
                            "á»°": "U",
                            "á»¤": "U",
                            "á¹²": "U",
                            "Å²": "U",
                            "á¹¶": "U",
                            "á¹´": "U",
                            "É„": "U",
                            "â“‹": "V",
                            "ï¼¶": "V",
                            "á¹¼": "V",
                            "á¹¾": "V",
                            "Æ²": "V",
                            "êž": "V",
                            "É…": "V",
                            "ê ": "VY",
                            "â“Œ": "W",
                            "ï¼·": "W",
                            "áº€": "W",
                            "áº‚": "W",
                            "Å´": "W",
                            "áº†": "W",
                            "áº„": "W",
                            "áºˆ": "W",
                            "â±²": "W",
                            "â“": "X",
                            "ï¼¸": "X",
                            "áºŠ": "X",
                            "áºŒ": "X",
                            "â“Ž": "Y",
                            "ï¼¹": "Y",
                            "á»²": "Y",
                            "Ã": "Y",
                            "Å¶": "Y",
                            "á»¸": "Y",
                            "È²": "Y",
                            "áºŽ": "Y",
                            "Å¸": "Y",
                            "á»¶": "Y",
                            "á»´": "Y",
                            "Æ³": "Y",
                            "ÉŽ": "Y",
                            "á»¾": "Y",
                            "â“": "Z",
                            "ï¼º": "Z",
                            "Å¹": "Z",
                            "áº": "Z",
                            "Å»": "Z",
                            "Å½": "Z",
                            "áº’": "Z",
                            "áº”": "Z",
                            "Æµ": "Z",
                            "È¤": "Z",
                            "â±¿": "Z",
                            "â±«": "Z",
                            "ê¢": "Z",
                            "â“": "a",
                            "ï½": "a",
                            "áºš": "a",
                            "Ã ": "a",
                            "Ã¡": "a",
                            "Ã¢": "a",
                            "áº§": "a",
                            "áº¥": "a",
                            "áº«": "a",
                            "áº©": "a",
                            "Ã£": "a",
                            "Ä": "a",
                            "Äƒ": "a",
                            "áº±": "a",
                            "áº¯": "a",
                            "áºµ": "a",
                            "áº³": "a",
                            "È§": "a",
                            "Ç¡": "a",
                            "Ã¤": "a",
                            "ÇŸ": "a",
                            "áº£": "a",
                            "Ã¥": "a",
                            "Ç»": "a",
                            "ÇŽ": "a",
                            "È": "a",
                            "Èƒ": "a",
                            "áº¡": "a",
                            "áº­": "a",
                            "áº·": "a",
                            "á¸": "a",
                            "Ä…": "a",
                            "â±¥": "a",
                            "É": "a",
                            "êœ³": "aa",
                            "Ã¦": "ae",
                            "Ç½": "ae",
                            "Ç£": "ae",
                            "êœµ": "ao",
                            "êœ·": "au",
                            "êœ¹": "av",
                            "êœ»": "av",
                            "êœ½": "ay",
                            "â“‘": "b",
                            "ï½‚": "b",
                            "á¸ƒ": "b",
                            "á¸…": "b",
                            "á¸‡": "b",
                            "Æ€": "b",
                            "Æƒ": "b",
                            "É“": "b",
                            "â“’": "c",
                            "ï½ƒ": "c",
                            "Ä‡": "c",
                            "Ä‰": "c",
                            "Ä‹": "c",
                            "Ä": "c",
                            "Ã§": "c",
                            "á¸‰": "c",
                            "Æˆ": "c",
                            "È¼": "c",
                            "êœ¿": "c",
                            "â†„": "c",
                            "â““": "d",
                            "ï½„": "d",
                            "á¸‹": "d",
                            "Ä": "d",
                            "á¸": "d",
                            "á¸‘": "d",
                            "á¸“": "d",
                            "á¸": "d",
                            "Ä‘": "d",
                            "ÆŒ": "d",
                            "É–": "d",
                            "É—": "d",
                            "êº": "d",
                            "Ç³": "dz",
                            "Ç†": "dz",
                            "â“”": "e",
                            "ï½…": "e",
                            "Ã¨": "e",
                            "Ã©": "e",
                            "Ãª": "e",
                            "á»": "e",
                            "áº¿": "e",
                            "á»…": "e",
                            "á»ƒ": "e",
                            "áº½": "e",
                            "Ä“": "e",
                            "á¸•": "e",
                            "á¸—": "e",
                            "Ä•": "e",
                            "Ä—": "e",
                            "Ã«": "e",
                            "áº»": "e",
                            "Ä›": "e",
                            "È…": "e",
                            "È‡": "e",
                            "áº¹": "e",
                            "á»‡": "e",
                            "È©": "e",
                            "á¸": "e",
                            "Ä™": "e",
                            "á¸™": "e",
                            "á¸›": "e",
                            "É‡": "e",
                            "É›": "e",
                            "Ç": "e",
                            "â“•": "f",
                            "ï½†": "f",
                            "á¸Ÿ": "f",
                            "Æ’": "f",
                            "ê¼": "f",
                            "â“–": "g",
                            "ï½‡": "g",
                            "Çµ": "g",
                            "Ä": "g",
                            "á¸¡": "g",
                            "ÄŸ": "g",
                            "Ä¡": "g",
                            "Ç§": "g",
                            "Ä£": "g",
                            "Ç¥": "g",
                            "É ": "g",
                            "êž¡": "g",
                            "áµ¹": "g",
                            "ê¿": "g",
                            "â“—": "h",
                            "ï½ˆ": "h",
                            "Ä¥": "h",
                            "á¸£": "h",
                            "á¸§": "h",
                            "ÈŸ": "h",
                            "á¸¥": "h",
                            "á¸©": "h",
                            "á¸«": "h",
                            "áº–": "h",
                            "Ä§": "h",
                            "â±¨": "h",
                            "â±¶": "h",
                            "É¥": "h",
                            "Æ•": "hv",
                            "â“˜": "i",
                            "ï½‰": "i",
                            "Ã¬": "i",
                            "Ã­": "i",
                            "Ã®": "i",
                            "Ä©": "i",
                            "Ä«": "i",
                            "Ä­": "i",
                            "Ã¯": "i",
                            "á¸¯": "i",
                            "á»‰": "i",
                            "Ç": "i",
                            "È‰": "i",
                            "È‹": "i",
                            "á»‹": "i",
                            "Ä¯": "i",
                            "á¸­": "i",
                            "É¨": "i",
                            "Ä±": "i",
                            "â“™": "j",
                            "ï½Š": "j",
                            "Äµ": "j",
                            "Ç°": "j",
                            "É‰": "j",
                            "â“š": "k",
                            "ï½‹": "k",
                            "á¸±": "k",
                            "Ç©": "k",
                            "á¸³": "k",
                            "Ä·": "k",
                            "á¸µ": "k",
                            "Æ™": "k",
                            "â±ª": "k",
                            "ê": "k",
                            "êƒ": "k",
                            "ê…": "k",
                            "êž£": "k",
                            "â“›": "l",
                            "ï½Œ": "l",
                            "Å€": "l",
                            "Äº": "l",
                            "Ä¾": "l",
                            "á¸·": "l",
                            "á¸¹": "l",
                            "Ä¼": "l",
                            "á¸½": "l",
                            "á¸»": "l",
                            "Å¿": "l",
                            "Å‚": "l",
                            "Æš": "l",
                            "É«": "l",
                            "â±¡": "l",
                            "ê‰": "l",
                            "êž": "l",
                            "ê‡": "l",
                            "Ç‰": "lj",
                            "â“œ": "m",
                            "ï½": "m",
                            "á¸¿": "m",
                            "á¹": "m",
                            "á¹ƒ": "m",
                            "É±": "m",
                            "É¯": "m",
                            "â“": "n",
                            "ï½Ž": "n",
                            "Ç¹": "n",
                            "Å„": "n",
                            "Ã±": "n",
                            "á¹…": "n",
                            "Åˆ": "n",
                            "á¹‡": "n",
                            "Å†": "n",
                            "á¹‹": "n",
                            "á¹‰": "n",
                            "Æž": "n",
                            "É²": "n",
                            "Å‰": "n",
                            "êž‘": "n",
                            "êž¥": "n",
                            "ÇŒ": "nj",
                            "â“ž": "o",
                            "ï½": "o",
                            "Ã²": "o",
                            "Ã³": "o",
                            "Ã´": "o",
                            "á»“": "o",
                            "á»‘": "o",
                            "á»—": "o",
                            "á»•": "o",
                            "Ãµ": "o",
                            "á¹": "o",
                            "È­": "o",
                            "á¹": "o",
                            "Å": "o",
                            "á¹‘": "o",
                            "á¹“": "o",
                            "Å": "o",
                            "È¯": "o",
                            "È±": "o",
                            "Ã¶": "o",
                            "È«": "o",
                            "á»": "o",
                            "Å‘": "o",
                            "Ç’": "o",
                            "È": "o",
                            "È": "o",
                            "Æ¡": "o",
                            "á»": "o",
                            "á»›": "o",
                            "á»¡": "o",
                            "á»Ÿ": "o",
                            "á»£": "o",
                            "á»": "o",
                            "á»™": "o",
                            "Ç«": "o",
                            "Ç­": "o",
                            "Ã¸": "o",
                            "Ç¿": "o",
                            "É”": "o",
                            "ê‹": "o",
                            "ê": "o",
                            "Éµ": "o",
                            "Æ£": "oi",
                            "È£": "ou",
                            "ê": "oo",
                            "â“Ÿ": "p",
                            "ï½": "p",
                            "á¹•": "p",
                            "á¹—": "p",
                            "Æ¥": "p",
                            "áµ½": "p",
                            "ê‘": "p",
                            "ê“": "p",
                            "ê•": "p",
                            "â“ ": "q",
                            "ï½‘": "q",
                            "É‹": "q",
                            "ê—": "q",
                            "ê™": "q",
                            "â“¡": "r",
                            "ï½’": "r",
                            "Å•": "r",
                            "á¹™": "r",
                            "Å™": "r",
                            "È‘": "r",
                            "È“": "r",
                            "á¹›": "r",
                            "á¹": "r",
                            "Å—": "r",
                            "á¹Ÿ": "r",
                            "É": "r",
                            "É½": "r",
                            "ê›": "r",
                            "êž§": "r",
                            "êžƒ": "r",
                            "â“¢": "s",
                            "ï½“": "s",
                            "ÃŸ": "s",
                            "Å›": "s",
                            "á¹¥": "s",
                            "Å": "s",
                            "á¹¡": "s",
                            "Å¡": "s",
                            "á¹§": "s",
                            "á¹£": "s",
                            "á¹©": "s",
                            "È™": "s",
                            "ÅŸ": "s",
                            "È¿": "s",
                            "êž©": "s",
                            "êž…": "s",
                            "áº›": "s",
                            "â“£": "t",
                            "ï½”": "t",
                            "á¹«": "t",
                            "áº—": "t",
                            "Å¥": "t",
                            "á¹­": "t",
                            "È›": "t",
                            "Å£": "t",
                            "á¹±": "t",
                            "á¹¯": "t",
                            "Å§": "t",
                            "Æ­": "t",
                            "Êˆ": "t",
                            "â±¦": "t",
                            "êž‡": "t",
                            "êœ©": "tz",
                            "â“¤": "u",
                            "ï½•": "u",
                            "Ã¹": "u",
                            "Ãº": "u",
                            "Ã»": "u",
                            "Å©": "u",
                            "á¹¹": "u",
                            "Å«": "u",
                            "á¹»": "u",
                            "Å­": "u",
                            "Ã¼": "u",
                            "Çœ": "u",
                            "Ç˜": "u",
                            "Ç–": "u",
                            "Çš": "u",
                            "á»§": "u",
                            "Å¯": "u",
                            "Å±": "u",
                            "Ç”": "u",
                            "È•": "u",
                            "È—": "u",
                            "Æ°": "u",
                            "á»«": "u",
                            "á»©": "u",
                            "á»¯": "u",
                            "á»­": "u",
                            "á»±": "u",
                            "á»¥": "u",
                            "á¹³": "u",
                            "Å³": "u",
                            "á¹·": "u",
                            "á¹µ": "u",
                            "Ê‰": "u",
                            "â“¥": "v",
                            "ï½–": "v",
                            "á¹½": "v",
                            "á¹¿": "v",
                            "Ê‹": "v",
                            "êŸ": "v",
                            "ÊŒ": "v",
                            "ê¡": "vy",
                            "â“¦": "w",
                            "ï½—": "w",
                            "áº": "w",
                            "áºƒ": "w",
                            "Åµ": "w",
                            "áº‡": "w",
                            "áº…": "w",
                            "áº˜": "w",
                            "áº‰": "w",
                            "â±³": "w",
                            "â“§": "x",
                            "ï½˜": "x",
                            "áº‹": "x",
                            "áº": "x",
                            "â“¨": "y",
                            "ï½™": "y",
                            "á»³": "y",
                            "Ã½": "y",
                            "Å·": "y",
                            "á»¹": "y",
                            "È³": "y",
                            "áº": "y",
                            "Ã¿": "y",
                            "á»·": "y",
                            "áº™": "y",
                            "á»µ": "y",
                            "Æ´": "y",
                            "É": "y",
                            "á»¿": "y",
                            "â“©": "z",
                            "ï½š": "z",
                            "Åº": "z",
                            "áº‘": "z",
                            "Å¼": "z",
                            "Å¾": "z",
                            "áº“": "z",
                            "áº•": "z",
                            "Æ¶": "z",
                            "È¥": "z",
                            "É€": "z",
                            "â±¬": "z",
                            "ê£": "z",
                            "Î†": "Î‘",
                            "Îˆ": "Î•",
                            "Î‰": "Î—",
                            "ÎŠ": "Î™",
                            "Îª": "Î™",
                            "ÎŒ": "ÎŸ",
                            "ÎŽ": "Î¥",
                            "Î«": "Î¥",
                            "Î": "Î©",
                            "Î¬": "Î±",
                            "Î­": "Îµ",
                            "Î®": "Î·",
                            "Î¯": "Î¹",
                            "ÏŠ": "Î¹",
                            "Î": "Î¹",
                            "ÏŒ": "Î¿",
                            "Ï": "Ï…",
                            "Ï‹": "Ï…",
                            "Î°": "Ï…",
                            "Ï‰": "Ï‰",
                            "Ï‚": "Ïƒ"
                        };
                        return a
                    }), b.define("select2/data/base", ["../utils"], function(a) {
                        function b(a, c) {
                            b.__super__.constructor.call(this)
                        }
                        return a.Extend(b, a.Observable), b.prototype.current = function(a) {
                            throw new Error("The `current` method must be defined in child classes.")
                        }, b.prototype.query = function(a, b) {
                            throw new Error("The `query` method must be defined in child classes.")
                        }, b.prototype.bind = function(a, b) {}, b.prototype.destroy = function() {}, b.prototype.generateResultId = function(b, c) {
                            var d = b.id + "-result-";
                            return d += a.generateChars(4), d += null != c.id ? "-" + c.id.toString() : "-" + a.generateChars(4)
                        }, b
                    }), b.define("select2/data/select", ["./base", "../utils", "jquery"], function(a, b, c) {
                        function d(a, b) {
                            this.$element = a, this.options = b, d.__super__.constructor.call(this)
                        }
                        return b.Extend(d, a), d.prototype.current = function(a) {
                            var b = [],
                                d = this;
                            this.$element.find(":selected").each(function() {
                                var a = c(this),
                                    e = d.item(a);
                                b.push(e)
                            }), a(b)
                        }, d.prototype.select = function(a) {
                            var b = this;
                            if (a.selected = !0, c(a.element).is("option")) return a.element.selected = !0, void this.$element.trigger("change");
                            if (this.$element.prop("multiple")) this.current(function(d) {
                                var e = [];
                                a = [a], a.push.apply(a, d);
                                for (var f = 0; f < a.length; f++) {
                                    var g = a[f].id; - 1 === c.inArray(g, e) && e.push(g)
                                }
                                b.$element.val(e), b.$element.trigger("change")
                            });
                            else {
                                var d = a.id;
                                this.$element.val(d), this.$element.trigger("change")
                            }
                        }, d.prototype.unselect = function(a) {
                            var b = this;
                            if (this.$element.prop("multiple")) return a.selected = !1, c(a.element).is("option") ? (a.element.selected = !1, void this.$element.trigger("change")) : void this.current(function(d) {
                                for (var e = [], f = 0; f < d.length; f++) {
                                    var g = d[f].id;
                                    g !== a.id && -1 === c.inArray(g, e) && e.push(g)
                                }
                                b.$element.val(e), b.$element.trigger("change")
                            })
                        }, d.prototype.bind = function(a, b) {
                            var c = this;
                            this.container = a, a.on("select", function(a) {
                                c.select(a.data)
                            }), a.on("unselect", function(a) {
                                c.unselect(a.data)
                            })
                        }, d.prototype.destroy = function() {
                            this.$element.find("*").each(function() {
                                c.removeData(this, "data")
                            })
                        }, d.prototype.query = function(a, b) {
                            var d = [],
                                e = this,
                                f = this.$element.children();
                            f.each(function() {
                                var b = c(this);
                                if (b.is("option") || b.is("optgroup")) {
                                    var f = e.item(b),
                                        g = e.matches(a, f);
                                    null !== g && d.push(g)
                                }
                            }), b({
                                results: d
                            })
                        }, d.prototype.addOptions = function(a) {
                            b.appendMany(this.$element, a)
                        }, d.prototype.option = function(a) {
                            var b;
                            a.children ? (b = document.createElement("optgroup"), b.label = a.text) : (b = document.createElement("option"), void 0 !== b.textContent ? b.textContent = a.text : b.innerText = a.text), a.id && (b.value = a.id), a.disabled && (b.disabled = !0), a.selected && (b.selected = !0), a.title && (b.title = a.title);
                            var d = c(b),
                                e = this._normalizeItem(a);
                            return e.element = b, c.data(b, "data", e), d
                        }, d.prototype.item = function(a) {
                            var b = {};
                            if (b = c.data(a[0], "data"), null != b) return b;
                            if (a.is("option")) b = {
                                id: a.val(),
                                text: a.text(),
                                disabled: a.prop("disabled"),
                                selected: a.prop("selected"),
                                title: a.prop("title")
                            };
                            else if (a.is("optgroup")) {
                                b = {
                                    text: a.prop("label"),
                                    children: [],
                                    title: a.prop("title")
                                };
                                for (var d = a.children("option"), e = [], f = 0; f < d.length; f++) {
                                    var g = c(d[f]),
                                        h = this.item(g);
                                    e.push(h)
                                }
                                b.children = e
                            }
                            return b = this._normalizeItem(b), b.element = a[0], c.data(a[0], "data", b), b
                        }, d.prototype._normalizeItem = function(a) {
                            c.isPlainObject(a) || (a = {
                                id: a,
                                text: a
                            }), a = c.extend({}, {
                                text: ""
                            }, a);
                            var b = {
                                selected: !1,
                                disabled: !1
                            };
                            return null != a.id && (a.id = a.id.toString()), null != a.text && (a.text = a.text.toString()), null == a._resultId && a.id && null != this.container && (a._resultId = this.generateResultId(this.container, a)), c.extend({}, b, a)
                        }, d.prototype.matches = function(a, b) {
                            var c = this.options.get("matcher");
                            return c(a, b)
                        }, d
                    }), b.define("select2/data/array", ["./select", "../utils", "jquery"], function(a, b, c) {
                        function d(a, b) {
                            var c = b.get("data") || [];
                            d.__super__.constructor.call(this, a, b), this.addOptions(this.convertToOptions(c))
                        }
                        return b.Extend(d, a), d.prototype.select = function(a) {
                            var b = this.$element.find("option").filter(function(b, c) {
                                return c.value == a.id.toString()
                            });
                            0 === b.length && (b = this.option(a), this.addOptions(b)), d.__super__.select.call(this, a)
                        }, d.prototype.convertToOptions = function(a) {
                            function d(a) {
                                return function() {
                                    return c(this).val() == a.id
                                }
                            }
                            for (var e = this, f = this.$element.find("option"), g = f.map(function() {
                                    return e.item(c(this)).id
                                }).get(), h = [], i = 0; i < a.length; i++) {
                                var j = this._normalizeItem(a[i]);
                                if (c.inArray(j.id, g) >= 0) {
                                    var k = f.filter(d(j)),
                                        l = this.item(k),
                                        m = c.extend(!0, {}, j, l),
                                        n = this.option(m);
                                    k.replaceWith(n)
                                } else {
                                    var o = this.option(j);
                                    if (j.children) {
                                        var p = this.convertToOptions(j.children);
                                        b.appendMany(o, p)
                                    }
                                    h.push(o)
                                }
                            }
                            return h
                        }, d
                    }), b.define("select2/data/ajax", ["./array", "../utils", "jquery"], function(a, b, c) {
                        function d(a, b) {
                            this.ajaxOptions = this._applyDefaults(b.get("ajax")), null != this.ajaxOptions.processResults && (this.processResults = this.ajaxOptions.processResults), d.__super__.constructor.call(this, a, b)
                        }
                        return b.Extend(d, a), d.prototype._applyDefaults = function(a) {
                            var b = {
                                data: function(a) {
                                    return c.extend({}, a, {
                                        q: a.term
                                    })
                                },
                                transport: function(a, b, d) {
                                    var e = c.ajax(a);
                                    return e.then(b), e.fail(d), e
                                }
                            };
                            return c.extend({}, b, a, !0)
                        }, d.prototype.processResults = function(a) {
                            return a
                        }, d.prototype.query = function(a, b) {
                            function d() {
                                var d = f.transport(f, function(d) {
                                    var f = e.processResults(d, a);
                                    e.options.get("debug") && window.console && console.error && (f && f.results && c.isArray(f.results) || console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")), b(f)
                                }, function() {
                                    e.trigger("results:message", {
                                        message: "errorLoading"
                                    })
                                });
                                e._request = d
                            }
                            var e = this;
                            null != this._request && (c.isFunction(this._request.abort) && this._request.abort(), this._request = null);
                            var f = c.extend({
                                type: "GET"
                            }, this.ajaxOptions);
                            "function" == typeof f.url && (f.url = f.url.call(this.$element, a)), "function" == typeof f.data && (f.data = f.data.call(this.$element, a)), this.ajaxOptions.delay && "" !== a.term ? (this._queryTimeout && window.clearTimeout(this._queryTimeout), this._queryTimeout = window.setTimeout(d, this.ajaxOptions.delay)) : d()
                        }, d
                    }), b.define("select2/data/tags", ["jquery"], function(a) {
                        function b(b, c, d) {
                            var e = d.get("tags"),
                                f = d.get("createTag");
                            void 0 !== f && (this.createTag = f);
                            var g = d.get("insertTag");
                            if (void 0 !== g && (this.insertTag = g), b.call(this, c, d), a.isArray(e))
                                for (var h = 0; h < e.length; h++) {
                                    var i = e[h],
                                        j = this._normalizeItem(i),
                                        k = this.option(j);
                                    this.$element.append(k)
                                }
                        }
                        return b.prototype.query = function(a, b, c) {
                            function d(a, f) {
                                for (var g = a.results, h = 0; h < g.length; h++) {
                                    var i = g[h],
                                        j = null != i.children && !d({
                                            results: i.children
                                        }, !0),
                                        k = i.text === b.term;
                                    if (k || j) return !f && (a.data = g, void c(a))
                                }
                                if (f) return !0;
                                var l = e.createTag(b);
                                if (null != l) {
                                    var m = e.option(l);
                                    m.attr("data-select2-tag", !0), e.addOptions([m]), e.insertTag(g, l)
                                }
                                a.results = g, c(a)
                            }
                            var e = this;
                            return this._removeOldTags(), null == b.term || null != b.page ? void a.call(this, b, c) : void a.call(this, b, d)
                        }, b.prototype.createTag = function(b, c) {
                            var d = a.trim(c.term);
                            return "" === d ? null : {
                                id: d,
                                text: d
                            }
                        }, b.prototype.insertTag = function(a, b, c) {
                            b.unshift(c)
                        }, b.prototype._removeOldTags = function(b) {
                            var c = (this._lastTag, this.$element.find("option[data-select2-tag]"));
                            c.each(function() {
                                this.selected || a(this).remove()
                            })
                        }, b
                    }), b.define("select2/data/tokenizer", ["jquery"], function(a) {
                        function b(a, b, c) {
                            var d = c.get("tokenizer");
                            void 0 !== d && (this.tokenizer = d), a.call(this, b, c)
                        }
                        return b.prototype.bind = function(a, b, c) {
                            a.call(this, b, c), this.$search = b.dropdown.$search || b.selection.$search || c.find(".select2-search__field")
                        }, b.prototype.query = function(a, b, c) {
                            function d(a) {
                                e.trigger("select", {
                                    data: a
                                })
                            }
                            var e = this;
                            b.term = b.term || "";
                            var f = this.tokenizer(b, this.options, d);
                            f.term !== b.term && (this.$search.length && (this.$search.val(f.term), this.$search.focus()), b.term = f.term), a.call(this, b, c)
                        }, b.prototype.tokenizer = function(b, c, d, e) {
                            for (var f = d.get("tokenSeparators") || [], g = c.term, h = 0, i = this.createTag || function(a) {
                                    return {
                                        id: a.term,
                                        text: a.term
                                    }
                                }; h < g.length;) {
                                var j = g[h];
                                if (-1 !== a.inArray(j, f)) {
                                    var k = g.substr(0, h),
                                        l = a.extend({}, c, {
                                            term: k
                                        }),
                                        m = i(l);
                                    null != m ? (e(m), g = g.substr(h + 1) || "", h = 0) : h++
                                } else h++
                            }
                            return {
                                term: g
                            }
                        }, b
                    }), b.define("select2/data/minimumInputLength", [], function() {
                        function a(a, b, c) {
                            this.minimumInputLength = c.get("minimumInputLength"), a.call(this, b, c)
                        }
                        return a.prototype.query = function(a, b, c) {
                            return b.term = b.term || "", b.term.length < this.minimumInputLength ? void this.trigger("results:message", {
                                message: "inputTooShort",
                                args: {
                                    minimum: this.minimumInputLength,
                                    input: b.term,
                                    params: b
                                }
                            }) : void a.call(this, b, c)
                        }, a
                    }), b.define("select2/data/maximumInputLength", [], function() {
                        function a(a, b, c) {
                            this.maximumInputLength = c.get("maximumInputLength"), a.call(this, b, c)
                        }
                        return a.prototype.query = function(a, b, c) {
                            return b.term = b.term || "", this.maximumInputLength > 0 && b.term.length > this.maximumInputLength ? void this.trigger("results:message", {
                                message: "inputTooLong",
                                args: {
                                    maximum: this.maximumInputLength,
                                    input: b.term,
                                    params: b
                                }
                            }) : void a.call(this, b, c)
                        }, a
                    }), b.define("select2/data/maximumSelectionLength", [], function() {
                        function a(a, b, c) {
                            this.maximumSelectionLength = c.get("maximumSelectionLength"), a.call(this, b, c)
                        }
                        return a.prototype.query = function(a, b, c) {
                            var d = this;
                            this.current(function(e) {
                                var f = null != e ? e.length : 0;
                                return d.maximumSelectionLength > 0 && f >= d.maximumSelectionLength ? void d.trigger("results:message", {
                                    message: "maximumSelected",
                                    args: {
                                        maximum: d.maximumSelectionLength
                                    }
                                }) : void a.call(d, b, c)
                            })
                        }, a
                    }), b.define("select2/dropdown", ["jquery", "./utils"], function(a, b) {
                        function c(a, b) {
                            this.$element = a, this.options = b, c.__super__.constructor.call(this)
                        }
                        return b.Extend(c, b.Observable), c.prototype.render = function() {
                            var b = a('<span class="select2-dropdown"><span class="select2-results"></span></span>');
                            return b.attr("dir", this.options.get("dir")), this.$dropdown = b, b
                        }, c.prototype.bind = function() {}, c.prototype.position = function(a, b) {}, c.prototype.destroy = function() {
                            this.$dropdown.remove()
                        }, c
                    }), b.define("select2/dropdown/search", ["jquery", "../utils"], function(a, b) {
                        function c() {}
                        return c.prototype.render = function(b) {
                            var c = b.call(this),
                                d = a('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" /></span>');
                            return this.$searchContainer = d, this.$search = d.find("input"), c.prepend(d), c
                        }, c.prototype.bind = function(b, c, d) {
                            var e = this;
                            b.call(this, c, d), this.$search.on("keydown", function(a) {
                                e.trigger("keypress", a), e._keyUpPrevented = a.isDefaultPrevented()
                            }), this.$search.on("input", function(b) {
                                a(this).off("keyup")
                            }), this.$search.on("keyup input", function(a) {
                                e.handleSearch(a)
                            }), c.on("open", function() {
                                e.$search.attr("tabindex", 0), e.$search.focus(), window.setTimeout(function() {
                                    e.$search.focus()
                                }, 0)
                            }), c.on("close", function() {
                                e.$search.attr("tabindex", -1), e.$search.val("")
                            }), c.on("results:all", function(a) {
                                if (null == a.query.term || "" === a.query.term) {
                                    var b = e.showSearch(a);
                                    b ? e.$searchContainer.removeClass("select2-search--hide") : e.$searchContainer.addClass("select2-search--hide")
                                }
                            })
                        }, c.prototype.handleSearch = function(a) {
                            if (!this._keyUpPrevented) {
                                var b = this.$search.val();
                                this.trigger("query", {
                                    term: b
                                })
                            }
                            this._keyUpPrevented = !1
                        }, c.prototype.showSearch = function(a, b) {
                            return !0
                        }, c
                    }), b.define("select2/dropdown/hidePlaceholder", [], function() {
                        function a(a, b, c, d) {
                            this.placeholder = this.normalizePlaceholder(c.get("placeholder")), a.call(this, b, c, d)
                        }
                        return a.prototype.append = function(a, b) {
                            b.results = this.removePlaceholder(b.results), a.call(this, b)
                        }, a.prototype.normalizePlaceholder = function(a, b) {
                            return "string" == typeof b && (b = {
                                id: "",
                                text: b
                            }), b
                        }, a.prototype.removePlaceholder = function(a, b) {
                            for (var c = b.slice(0), d = b.length - 1; d >= 0; d--) {
                                var e = b[d];
                                this.placeholder.id === e.id && c.splice(d, 1)
                            }
                            return c
                        }, a
                    }), b.define("select2/dropdown/infiniteScroll", ["jquery"], function(a) {
                        function b(a, b, c, d) {
                            this.lastParams = {}, a.call(this, b, c, d), this.$loadingMore = this.createLoadingMore(), this.loading = !1
                        }
                        return b.prototype.append = function(a, b) {
                            this.$loadingMore.remove(), this.loading = !1, a.call(this, b), this.showLoadingMore(b) && this.$results.append(this.$loadingMore)
                        }, b.prototype.bind = function(b, c, d) {
                            var e = this;
                            b.call(this, c, d), c.on("query", function(a) {
                                e.lastParams = a, e.loading = !0
                            }), c.on("query:append", function(a) {
                                e.lastParams = a, e.loading = !0
                            }), this.$results.on("scroll", function() {
                                var b = a.contains(document.documentElement, e.$loadingMore[0]);
                                if (!e.loading && b) {
                                    var c = e.$results.offset().top + e.$results.outerHeight(!1),
                                        d = e.$loadingMore.offset().top + e.$loadingMore.outerHeight(!1);
                                    c + 50 >= d && e.loadMore()
                                }
                            })
                        }, b.prototype.loadMore = function() {
                            this.loading = !0;
                            var b = a.extend({}, {
                                page: 1
                            }, this.lastParams);
                            b.page++, this.trigger("query:append", b)
                        }, b.prototype.showLoadingMore = function(a, b) {
                            return b.pagination && b.pagination.more
                        }, b.prototype.createLoadingMore = function() {
                            var b = a('<li class="select2-results__option select2-results__option--load-more"role="treeitem" aria-disabled="true"></li>'),
                                c = this.options.get("translations").get("loadingMore");
                            return b.html(c(this.lastParams)), b
                        }, b
                    }), b.define("select2/dropdown/attachBody", ["jquery", "../utils"], function(a, b) {
                        function c(b, c, d) {
                            this.$dropdownParent = d.get("dropdownParent") || a(document.body), b.call(this, c, d)
                        }
                        return c.prototype.bind = function(a, b, c) {
                            var d = this,
                                e = !1;
                            a.call(this, b, c), b.on("open", function() {
                                d._showDropdown(), d._attachPositioningHandler(b), e || (e = !0, b.on("results:all", function() {
                                    d._positionDropdown(), d._resizeDropdown()
                                }), b.on("results:append", function() {
                                    d._positionDropdown(), d._resizeDropdown()
                                }))
                            }), b.on("close", function() {
                                d._hideDropdown(), d._detachPositioningHandler(b)
                            }), this.$dropdownContainer.on("mousedown", function(a) {
                                a.stopPropagation()
                            })
                        }, c.prototype.destroy = function(a) {
                            a.call(this), this.$dropdownContainer.remove()
                        }, c.prototype.position = function(a, b, c) {
                            b.attr("class", c.attr("class")), b.removeClass("select2"), b.addClass("select2-container--open"), b.css({
                                position: "absolute",
                                top: -999999
                            }), this.$container = c
                        }, c.prototype.render = function(b) {
                            var c = a("<span></span>"),
                                d = b.call(this);
                            return c.append(d), this.$dropdownContainer = c, c
                        }, c.prototype._hideDropdown = function(a) {
                            this.$dropdownContainer.detach()
                        }, c.prototype._attachPositioningHandler = function(c, d) {
                            var e = this,
                                f = "scroll.select2." + d.id,
                                g = "resize.select2." + d.id,
                                h = "orientationchange.select2." + d.id,
                                i = this.$container.parents().filter(b.hasScroll);
                            i.each(function() {
                                a(this).data("select2-scroll-position", {
                                    x: a(this).scrollLeft(),
                                    y: a(this).scrollTop()
                                })
                            }), i.on(f, function(b) {
                                var c = a(this).data("select2-scroll-position");
                                a(this).scrollTop(c.y)
                            }), a(window).on(f + " " + g + " " + h, function(a) {
                                e._positionDropdown(), e._resizeDropdown()
                            })
                        }, c.prototype._detachPositioningHandler = function(c, d) {
                            var e = "scroll.select2." + d.id,
                                f = "resize.select2." + d.id,
                                g = "orientationchange.select2." + d.id,
                                h = this.$container.parents().filter(b.hasScroll);
                            h.off(e), a(window).off(e + " " + f + " " + g)
                        }, c.prototype._positionDropdown = function() {
                            var b = a(window),
                                c = this.$dropdown.hasClass("select2-dropdown--above"),
                                d = this.$dropdown.hasClass("select2-dropdown--below"),
                                e = null,
                                f = this.$container.offset();
                            f.bottom = f.top + this.$container.outerHeight(!1);
                            var g = {
                                height: this.$container.outerHeight(!1)
                            };
                            g.top = f.top, g.bottom = f.top + g.height;
                            var h = {
                                    height: this.$dropdown.outerHeight(!1)
                                },
                                i = {
                                    top: b.scrollTop(),
                                    bottom: b.scrollTop() + b.height()
                                },
                                j = i.top < f.top - h.height,
                                k = i.bottom > f.bottom + h.height,
                                l = {
                                    left: f.left,
                                    top: g.bottom
                                },
                                m = this.$dropdownParent;
                            "static" === m.css("position") && (m = m.offsetParent());
                            var n = m.offset();
                            l.top -= n.top, l.left -= n.left, c || d || (e = "below"), k || !j || c ? !j && k && c && (e = "below") : e = "above", ("above" == e || c && "below" !== e) && (l.top = g.top - h.height), null != e && (this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--" + e), this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--" + e)), this.$dropdownContainer.css(l)
                        }, c.prototype._resizeDropdown = function() {
                            var a = {
                                width: this.$container.outerWidth(!1) + "px"
                            };
                            this.options.get("dropdownAutoWidth") && (a.minWidth = a.width, a.width = "auto"), this.$dropdown.css(a)
                        }, c.prototype._showDropdown = function(a) {
                            this.$dropdownContainer.appendTo(this.$dropdownParent), this._positionDropdown(), this._resizeDropdown()
                        }, c
                    }), b.define("select2/dropdown/minimumResultsForSearch", [], function() {
                        function a(b) {
                            for (var c = 0, d = 0; d < b.length; d++) {
                                var e = b[d];
                                e.children ? c += a(e.children) : c++
                            }
                            return c
                        }

                        function b(a, b, c, d) {
                            this.minimumResultsForSearch = c.get("minimumResultsForSearch"), this.minimumResultsForSearch < 0 && (this.minimumResultsForSearch = 1 / 0), a.call(this, b, c, d)
                        }
                        return b.prototype.showSearch = function(b, c) {
                            return !(a(c.data.results) < this.minimumResultsForSearch) && b.call(this, c)
                        }, b
                    }), b.define("select2/dropdown/selectOnClose", [], function() {
                        function a() {}
                        return a.prototype.bind = function(a, b, c) {
                            var d = this;
                            a.call(this, b, c), b.on("close", function() {
                                d._handleSelectOnClose()
                            })
                        }, a.prototype._handleSelectOnClose = function() {
                            var a = this.getHighlightedResults();
                            if (!(a.length < 1)) {
                                var b = a.data("data");
                                null != b.element && b.element.selected || null == b.element && b.selected || this.trigger("select", {
                                    data: b
                                })
                            }
                        }, a
                    }), b.define("select2/dropdown/closeOnSelect", [], function() {
                        function a() {}
                        return a.prototype.bind = function(a, b, c) {
                            var d = this;
                            a.call(this, b, c), b.on("select", function(a) {
                                d._selectTriggered(a)
                            }), b.on("unselect", function(a) {
                                d._selectTriggered(a)
                            })
                        }, a.prototype._selectTriggered = function(a, b) {
                            var c = b.originalEvent;
                            c && c.ctrlKey || this.trigger("close", {})
                        }, a
                    }), b.define("select2/i18n/en", [], function() {
                        return {
                            errorLoading: function() {
                                return "The results could not be loaded."
                            },
                            inputTooLong: function(a) {
                                var b = a.input.length - a.maximum,
                                    c = "Please delete " + b + " character";
                                return 1 != b && (c += "s"), c
                            },
                            inputTooShort: function(a) {
                                var b = a.minimum - a.input.length,
                                    c = "Please enter " + b + " or more characters";
                                return c
                            },
                            loadingMore: function() {
                                return "Loading more resultsâ€¦"
                            },
                            maximumSelected: function(a) {
                                var b = "You can only select " + a.maximum + " item";
                                return 1 != a.maximum && (b += "s"), b
                            },
                            noResults: function() {
                                return "No results found"
                            },
                            searching: function() {
                                return "Searchingâ€¦"
                            }
                        }
                    }), b.define("select2/defaults", ["jquery", "require", "./results", "./selection/single", "./selection/multiple", "./selection/placeholder", "./selection/allowClear", "./selection/search", "./selection/eventRelay", "./utils", "./translation", "./diacritics", "./data/select", "./data/array", "./data/ajax", "./data/tags", "./data/tokenizer", "./data/minimumInputLength", "./data/maximumInputLength", "./data/maximumSelectionLength", "./dropdown", "./dropdown/search", "./dropdown/hidePlaceholder", "./dropdown/infiniteScroll", "./dropdown/attachBody", "./dropdown/minimumResultsForSearch", "./dropdown/selectOnClose", "./dropdown/closeOnSelect", "./i18n/en"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C) {
                        function D() {
                            this.reset()
                        }
                        D.prototype.apply = function(l) {
                            if (l = a.extend(!0, {}, this.defaults, l), null == l.dataAdapter) {
                                if (null != l.ajax ? l.dataAdapter = o : null != l.data ? l.dataAdapter = n : l.dataAdapter = m, l.minimumInputLength > 0 && (l.dataAdapter = j.Decorate(l.dataAdapter, r)), l.maximumInputLength > 0 && (l.dataAdapter = j.Decorate(l.dataAdapter, s)), l.maximumSelectionLength > 0 && (l.dataAdapter = j.Decorate(l.dataAdapter, t)), l.tags && (l.dataAdapter = j.Decorate(l.dataAdapter, p)), (null != l.tokenSeparators || null != l.tokenizer) && (l.dataAdapter = j.Decorate(l.dataAdapter, q)), null != l.query) {
                                    var C = b(l.amdBase + "compat/query");
                                    l.dataAdapter = j.Decorate(l.dataAdapter, C)
                                }
                                if (null != l.initSelection) {
                                    var D = b(l.amdBase + "compat/initSelection");
                                    l.dataAdapter = j.Decorate(l.dataAdapter, D)
                                }
                            }
                            if (null == l.resultsAdapter && (l.resultsAdapter = c, null != l.ajax && (l.resultsAdapter = j.Decorate(l.resultsAdapter, x)), null != l.placeholder && (l.resultsAdapter = j.Decorate(l.resultsAdapter, w)), l.selectOnClose && (l.resultsAdapter = j.Decorate(l.resultsAdapter, A))), null == l.dropdownAdapter) {
                                if (l.multiple) l.dropdownAdapter = u;
                                else {
                                    var E = j.Decorate(u, v);
                                    l.dropdownAdapter = E
                                }
                                if (0 !== l.minimumResultsForSearch && (l.dropdownAdapter = j.Decorate(l.dropdownAdapter, z)), l.closeOnSelect && (l.dropdownAdapter = j.Decorate(l.dropdownAdapter, B)), null != l.dropdownCssClass || null != l.dropdownCss || null != l.adaptDropdownCssClass) {
                                    var F = b(l.amdBase + "compat/dropdownCss");
                                    l.dropdownAdapter = j.Decorate(l.dropdownAdapter, F)
                                }
                                l.dropdownAdapter = j.Decorate(l.dropdownAdapter, y)
                            }
                            if (null == l.selectionAdapter) {
                                if (l.multiple ? l.selectionAdapter = e : l.selectionAdapter = d, null != l.placeholder && (l.selectionAdapter = j.Decorate(l.selectionAdapter, f)), l.allowClear && (l.selectionAdapter = j.Decorate(l.selectionAdapter, g)), l.multiple && (l.selectionAdapter = j.Decorate(l.selectionAdapter, h)), null != l.containerCssClass || null != l.containerCss || null != l.adaptContainerCssClass) {
                                    var G = b(l.amdBase + "compat/containerCss");
                                    l.selectionAdapter = j.Decorate(l.selectionAdapter, G)
                                }
                                l.selectionAdapter = j.Decorate(l.selectionAdapter, i)
                            }
                            if ("string" == typeof l.language)
                                if (l.language.indexOf("-") > 0) {
                                    var H = l.language.split("-"),
                                        I = H[0];
                                    l.language = [l.language, I]
                                } else l.language = [l.language];
                            if (a.isArray(l.language)) {
                                var J = new k;
                                l.language.push("en");
                                for (var K = l.language, L = 0; L < K.length; L++) {
                                    var M = K[L],
                                        N = {};
                                    try {
                                        N = k.loadPath(M)
                                    } catch (a) {
                                        try {
                                            M = this.defaults.amdLanguageBase + M, N = k.loadPath(M)
                                        } catch (a) {
                                            l.debug && window.console && console.warn && console.warn('Select2: The language file for "' + M + '" could not be automatically loaded. A fallback will be used instead.');
                                            continue
                                        }
                                    }
                                    J.extend(N)
                                }
                                l.translations = J
                            } else {
                                var O = k.loadPath(this.defaults.amdLanguageBase + "en"),
                                    P = new k(l.language);
                                P.extend(O), l.translations = P
                            }
                            return l
                        }, D.prototype.reset = function() {
                            function b(a) {
                                function b(a) {
                                    return l[a] || a
                                }
                                return a.replace(/[^\u0000-\u007E]/g, b)
                            }

                            function c(d, e) {
                                if ("" === a.trim(d.term)) return e;
                                if (e.children && e.children.length > 0) {
                                    for (var f = a.extend(!0, {}, e), g = e.children.length - 1; g >= 0; g--) {
                                        var h = e.children[g],
                                            i = c(d, h);
                                        null == i && f.children.splice(g, 1)
                                    }
                                    return f.children.length > 0 ? f : c(d, f)
                                }
                                var j = b(e.text).toUpperCase(),
                                    k = b(d.term).toUpperCase();
                                return j.indexOf(k) > -1 ? e : null
                            }
                            this.defaults = {
                                amdBase: "./",
                                amdLanguageBase: "./i18n/",
                                closeOnSelect: !0,
                                debug: !1,
                                dropdownAutoWidth: !1,
                                escapeMarkup: j.escapeMarkup,
                                language: C,
                                matcher: c,
                                minimumInputLength: 0,
                                maximumInputLength: 0,
                                maximumSelectionLength: 0,
                                minimumResultsForSearch: 0,
                                selectOnClose: !1,
                                sorter: function(a) {
                                    return a
                                },
                                templateResult: function(a) {
                                    return a.text
                                },
                                templateSelection: function(a) {
                                    return a.text
                                },
                                theme: "default",
                                width: "resolve"
                            }
                        }, D.prototype.set = function(b, c) {
                            var d = a.camelCase(b),
                                e = {};
                            e[d] = c;
                            var f = j._convertData(e);
                            a.extend(this.defaults, f)
                        };
                        var E = new D;
                        return E
                    }), b.define("select2/options", ["require", "jquery", "./defaults", "./utils"], function(a, b, c, d) {
                        function e(b, e) {
                            if (this.options = b, null != e && this.fromElement(e), this.options = c.apply(this.options), e && e.is("input")) {
                                var f = a(this.get("amdBase") + "compat/inputData");
                                this.options.dataAdapter = d.Decorate(this.options.dataAdapter, f)
                            }
                        }
                        return e.prototype.fromElement = function(a) {
                            var c = ["select2"];
                            null == this.options.multiple && (this.options.multiple = a.prop("multiple")), null == this.options.disabled && (this.options.disabled = a.prop("disabled")), null == this.options.language && (a.prop("lang") ? this.options.language = a.prop("lang").toLowerCase() : a.closest("[lang]").prop("lang") && (this.options.language = a.closest("[lang]").prop("lang"))), null == this.options.dir && (a.prop("dir") ? this.options.dir = a.prop("dir") : a.closest("[dir]").prop("dir") ? this.options.dir = a.closest("[dir]").prop("dir") : this.options.dir = "ltr"), a.prop("disabled", this.options.disabled), a.prop("multiple", this.options.multiple), a.data("select2Tags") && (this.options.debug && window.console && console.warn && console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'), a.data("data", a.data("select2Tags")), a.data("tags", !0)), a.data("ajaxUrl") && (this.options.debug && window.console && console.warn && console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."), a.attr("ajax--url", a.data("ajaxUrl")), a.data("ajax--url", a.data("ajaxUrl")));
                            var e = {};
                            e = b.fn.jquery && "1." == b.fn.jquery.substr(0, 2) && a[0].dataset ? b.extend(!0, {}, a[0].dataset, a.data()) : a.data();
                            var f = b.extend(!0, {}, e);
                            f = d._convertData(f);
                            for (var g in f) b.inArray(g, c) > -1 || (b.isPlainObject(this.options[g]) ? b.extend(this.options[g], f[g]) : this.options[g] = f[g]);
                            return this
                        }, e.prototype.get = function(a) {
                            return this.options[a]
                        }, e.prototype.set = function(a, b) {
                            this.options[a] = b
                        }, e
                    }), b.define("select2/core", ["jquery", "./options", "./utils", "./keys"], function(a, b, c, d) {
                        var e = function(a, c) {
                            null != a.data("select2") && a.data("select2").destroy(), this.$element = a, this.id = this._generateId(a), c = c || {}, this.options = new b(c, a), e.__super__.constructor.call(this);
                            var d = a.attr("tabindex") || 0;
                            a.data("old-tabindex", d), a.attr("tabindex", "-1");
                            var f = this.options.get("dataAdapter");
                            this.dataAdapter = new f(a, this.options);
                            var g = this.render();
                            this._placeContainer(g);
                            var h = this.options.get("selectionAdapter");
                            this.selection = new h(a, this.options), this.$selection = this.selection.render(), this.selection.position(this.$selection, g);
                            var i = this.options.get("dropdownAdapter");
                            this.dropdown = new i(a, this.options), this.$dropdown = this.dropdown.render(), this.dropdown.position(this.$dropdown, g);
                            var j = this.options.get("resultsAdapter");
                            this.results = new j(a, this.options, this.dataAdapter), this.$results = this.results.render(), this.results.position(this.$results, this.$dropdown);
                            var k = this;
                            this._bindAdapters(), this._registerDomEvents(), this._registerDataEvents(), this._registerSelectionEvents(), this._registerDropdownEvents(), this._registerResultsEvents(), this._registerEvents(), this.dataAdapter.current(function(a) {
                                k.trigger("selection:update", {
                                    data: a
                                })
                            }), a.addClass("select2-hidden-accessible"), a.attr("aria-hidden", "true"), this._syncAttributes(), a.data("select2", this)
                        };
                        return c.Extend(e, c.Observable), e.prototype._generateId = function(a) {
                            var b = "";
                            return b = null != a.attr("id") ? a.attr("id") : null != a.attr("name") ? a.attr("name") + "-" + c.generateChars(2) : c.generateChars(4), b = b.replace(/(:|\.|\[|\]|,)/g, ""), b = "select2-" + b
                        }, e.prototype._placeContainer = function(a) {
                            a.insertAfter(this.$element);
                            var b = this._resolveWidth(this.$element, this.options.get("width"));
                            null != b && a.css("width", b)
                        }, e.prototype._resolveWidth = function(a, b) {
                            var c = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;
                            if ("resolve" == b) {
                                var d = this._resolveWidth(a, "style");
                                return null != d ? d : this._resolveWidth(a, "element")
                            }
                            if ("element" == b) {
                                var e = a.outerWidth(!1);
                                return 0 >= e ? "auto" : e + "px"
                            }
                            if ("style" == b) {
                                var f = a.attr("style");
                                if ("string" != typeof f) return null;
                                for (var g = f.split(";"), h = 0, i = g.length; i > h; h += 1) {
                                    var j = g[h].replace(/\s/g, ""),
                                        k = j.match(c);
                                    if (null !== k && k.length >= 1) return k[1]
                                }
                                return null
                            }
                            return b
                        }, e.prototype._bindAdapters = function() {
                            this.dataAdapter.bind(this, this.$container), this.selection.bind(this, this.$container), this.dropdown.bind(this, this.$container), this.results.bind(this, this.$container)
                        }, e.prototype._registerDomEvents = function() {
                            var b = this;
                            this.$element.on("change.select2", function() {
                                b.dataAdapter.current(function(a) {
                                    b.trigger("selection:update", {
                                        data: a
                                    })
                                })
                            }), this._sync = c.bind(this._syncAttributes, this), this.$element[0].attachEvent && this.$element[0].attachEvent("onpropertychange", this._sync);
                            var d = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
                            null != d ? (this._observer = new d(function(c) {
                                a.each(c, b._sync)
                            }), this._observer.observe(this.$element[0], {
                                attributes: !0,
                                subtree: !1
                            })) : this.$element[0].addEventListener && this.$element[0].addEventListener("DOMAttrModified", b._sync, !1)
                        }, e.prototype._registerDataEvents = function() {
                            var a = this;
                            this.dataAdapter.on("*", function(b, c) {
                                a.trigger(b, c)
                            })
                        }, e.prototype._registerSelectionEvents = function() {
                            var b = this,
                                c = ["toggle", "focus"];
                            this.selection.on("toggle", function() {
                                b.toggleDropdown()
                            }), this.selection.on("focus", function(a) {
                                b.focus(a)
                            }), this.selection.on("*", function(d, e) {
                                -1 === a.inArray(d, c) && b.trigger(d, e)
                            })
                        }, e.prototype._registerDropdownEvents = function() {
                            var a = this;
                            this.dropdown.on("*", function(b, c) {
                                a.trigger(b, c)
                            })
                        }, e.prototype._registerResultsEvents = function() {
                            var a = this;
                            this.results.on("*", function(b, c) {
                                a.trigger(b, c)
                            })
                        }, e.prototype._registerEvents = function() {
                            var a = this;
                            this.on("open", function() {
                                a.$container.addClass("select2-container--open")
                            }), this.on("close", function() {
                                a.$container.removeClass("select2-container--open")
                            }), this.on("enable", function() {
                                a.$container.removeClass("select2-container--disabled")
                            }), this.on("disable", function() {
                                a.$container.addClass("select2-container--disabled")
                            }), this.on("blur", function() {
                                a.$container.removeClass("select2-container--focus")
                            }), this.on("query", function(b) {
                                a.isOpen() || a.trigger("open", {}), this.dataAdapter.query(b, function(c) {
                                    a.trigger("results:all", {
                                        data: c,
                                        query: b
                                    })
                                })
                            }), this.on("query:append", function(b) {
                                this.dataAdapter.query(b, function(c) {
                                    a.trigger("results:append", {
                                        data: c,
                                        query: b
                                    })
                                })
                            }), this.on("keypress", function(b) {
                                var c = b.which;
                                a.isOpen() ? c === d.ESC || c === d.TAB || c === d.UP && b.altKey ? (a.close(), b.preventDefault()) : c === d.ENTER ? (a.trigger("results:select", {}), b.preventDefault()) : c === d.SPACE && b.ctrlKey ? (a.trigger("results:toggle", {}), b.preventDefault()) : c === d.UP ? (a.trigger("results:previous", {}), b.preventDefault()) : c === d.DOWN && (a.trigger("results:next", {}), b.preventDefault()) : (c === d.ENTER || c === d.SPACE || c === d.DOWN && b.altKey) && (a.open(), b.preventDefault())
                            })
                        }, e.prototype._syncAttributes = function() {
                            this.options.set("disabled", this.$element.prop("disabled")), this.options.get("disabled") ? (this.isOpen() && this.close(), this.trigger("disable", {})) : this.trigger("enable", {})
                        }, e.prototype.trigger = function(a, b) {
                            var c = e.__super__.trigger,
                                d = {
                                    open: "opening",
                                    close: "closing",
                                    select: "selecting",
                                    unselect: "unselecting"
                                };
                            if (void 0 === b && (b = {}), a in d) {
                                var f = d[a],
                                    g = {
                                        prevented: !1,
                                        name: a,
                                        args: b
                                    };
                                if (c.call(this, f, g), g.prevented) return void(b.prevented = !0)
                            }
                            c.call(this, a, b)
                        }, e.prototype.toggleDropdown = function() {
                            this.options.get("disabled") || (this.isOpen() ? this.close() : this.open())
                        }, e.prototype.open = function() {
                            this.isOpen() || this.trigger("query", {})
                        }, e.prototype.close = function() {
                            this.isOpen() && this.trigger("close", {})
                        }, e.prototype.isOpen = function() {
                            return this.$container.hasClass("select2-container--open")
                        }, e.prototype.hasFocus = function() {
                            return this.$container.hasClass("select2-container--focus")
                        }, e.prototype.focus = function(a) {
                            this.hasFocus() || (this.$container.addClass("select2-container--focus"), this.trigger("focus", {}))
                        }, e.prototype.enable = function(a) {
                            this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'), (null == a || 0 === a.length) && (a = [!0]);
                            var b = !a[0];
                            this.$element.prop("disabled", b)
                        }, e.prototype.data = function() {
                            this.options.get("debug") && arguments.length > 0 && window.console && console.warn && console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');
                            var a = [];
                            return this.dataAdapter.current(function(b) {
                                a = b
                            }), a
                        }, e.prototype.val = function(b) {
                            if (this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'), null == b || 0 === b.length) return this.$element.val();
                            var c = b[0];
                            a.isArray(c) && (c = a.map(c, function(a) {
                                return a.toString()
                            })), this.$element.val(c).trigger("change")
                        }, e.prototype.destroy = function() {
                            this.$container.remove(), this.$element[0].detachEvent && this.$element[0].detachEvent("onpropertychange", this._sync), null != this._observer ? (this._observer.disconnect(), this._observer = null) : this.$element[0].removeEventListener && this.$element[0].removeEventListener("DOMAttrModified", this._sync, !1), this._sync = null, this.$element.off(".select2"), this.$element.attr("tabindex", this.$element.data("old-tabindex")), this.$element.removeClass("select2-hidden-accessible"), this.$element.attr("aria-hidden", "false"), this.$element.removeData("select2"), this.dataAdapter.destroy(), this.selection.destroy(), this.dropdown.destroy(), this.results.destroy(), this.dataAdapter = null, this.selection = null, this.dropdown = null, this.results = null
                        }, e.prototype.render = function() {
                            var b = a('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');
                            return b.attr("dir", this.options.get("dir")), this.$container = b, this.$container.addClass("select2-container--" + this.options.get("theme")), b.data("element", this.$element), b
                        }, e
                    }), b.define("select2/compat/utils", ["jquery"], function(a) {
                        function b(b, c, d) {
                            var e, f, g = [];
                            e = a.trim(b.attr("class")), e && (e = "" + e, a(e.split(/\s+/)).each(function() {
                                0 === this.indexOf("select2-") && g.push(this)
                            })), e = a.trim(c.attr("class")), e && (e = "" + e, a(e.split(/\s+/)).each(function() {
                                0 !== this.indexOf("select2-") && (f = d(this), null != f && g.push(f))
                            })), b.attr("class", g.join(" "))
                        }
                        return {
                            syncCssClasses: b
                        }
                    }), b.define("select2/compat/containerCss", ["jquery", "./utils"], function(a, b) {
                        function c(a) {
                            return null
                        }

                        function d() {}
                        return d.prototype.render = function(d) {
                            var e = d.call(this),
                                f = this.options.get("containerCssClass") || "";
                            a.isFunction(f) && (f = f(this.$element));
                            var g = this.options.get("adaptContainerCssClass");
                            if (g = g || c, -1 !== f.indexOf(":all:")) {
                                f = f.replace(":all:", "");
                                var h = g;
                                g = function(a) {
                                    var b = h(a);
                                    return null != b ? b + " " + a : a
                                }
                            }
                            var i = this.options.get("containerCss") || {};
                            return a.isFunction(i) && (i = i(this.$element)), b.syncCssClasses(e, this.$element, g), e.css(i), e.addClass(f), e
                        }, d
                    }), b.define("select2/compat/dropdownCss", ["jquery", "./utils"], function(a, b) {
                        function c(a) {
                            return null
                        }

                        function d() {}
                        return d.prototype.render = function(d) {
                            var e = d.call(this),
                                f = this.options.get("dropdownCssClass") || "";
                            a.isFunction(f) && (f = f(this.$element));
                            var g = this.options.get("adaptDropdownCssClass");
                            if (g = g || c, -1 !== f.indexOf(":all:")) {
                                f = f.replace(":all:", "");
                                var h = g;
                                g = function(a) {
                                    var b = h(a);
                                    return null != b ? b + " " + a : a
                                }
                            }
                            var i = this.options.get("dropdownCss") || {};
                            return a.isFunction(i) && (i = i(this.$element)), b.syncCssClasses(e, this.$element, g), e.css(i), e.addClass(f), e
                        }, d
                    }), b.define("select2/compat/initSelection", ["jquery"], function(a) {
                        function b(a, b, c) {
                            c.get("debug") && window.console && console.warn && console.warn("Select2: The `initSelection` option has been deprecated in favor of a custom data adapter that overrides the `current` method. This method is now called multiple times instead of a single time when the instance is initialized. Support will be removed for the `initSelection` option in future versions of Select2"), this.initSelection = c.get("initSelection"), this._isInitialized = !1, a.call(this, b, c)
                        }
                        return b.prototype.current = function(b, c) {
                            var d = this;
                            return this._isInitialized ? void b.call(this, c) : void this.initSelection.call(null, this.$element, function(b) {
                                d._isInitialized = !0, a.isArray(b) || (b = [b]), c(b)
                            })
                        }, b
                    }), b.define("select2/compat/inputData", ["jquery"], function(a) {
                        function b(a, b, c) {
                            this._currentData = [], this._valueSeparator = c.get("valueSeparator") || ",", "hidden" === b.prop("type") && c.get("debug") && console && console.warn && console.warn("Select2: Using a hidden input with Select2 is no longer supported and may stop working in the future. It is recommended to use a `<select>` element instead."), a.call(this, b, c)
                        }
                        return b.prototype.current = function(b, c) {
                            function d(b, c) {
                                var e = [];
                                return b.selected || -1 !== a.inArray(b.id, c) ? (b.selected = !0, e.push(b)) : b.selected = !1, b.children && e.push.apply(e, d(b.children, c)), e
                            }
                            for (var e = [], f = 0; f < this._currentData.length; f++) {
                                var g = this._currentData[f];
                                e.push.apply(e, d(g, this.$element.val().split(this._valueSeparator)))
                            }
                            c(e)
                        }, b.prototype.select = function(b, c) {
                            if (this.options.get("multiple")) {
                                var d = this.$element.val();
                                d += this._valueSeparator + c.id, this.$element.val(d), this.$element.trigger("change")
                            } else this.current(function(b) {
                                a.map(b, function(a) {
                                    a.selected = !1
                                })
                            }), this.$element.val(c.id), this.$element.trigger("change")
                        }, b.prototype.unselect = function(a, b) {
                            var c = this;
                            b.selected = !1, this.current(function(a) {
                                for (var d = [], e = 0; e < a.length; e++) {
                                    var f = a[e];
                                    b.id != f.id && d.push(f.id)
                                }
                                c.$element.val(d.join(c._valueSeparator)), c.$element.trigger("change")
                            })
                        }, b.prototype.query = function(a, b, c) {
                            for (var d = [], e = 0; e < this._currentData.length; e++) {
                                var f = this._currentData[e],
                                    g = this.matches(b, f);
                                null !== g && d.push(g)
                            }
                            c({
                                results: d
                            })
                        }, b.prototype.addOptions = function(b, c) {
                            var d = a.map(c, function(b) {
                                return a.data(b[0], "data")
                            });
                            this._currentData.push.apply(this._currentData, d)
                        }, b
                    }), b.define("select2/compat/matcher", ["jquery"], function(a) {
                        function b(b) {
                            function c(c, d) {
                                var e = a.extend(!0, {}, d);
                                if (null == c.term || "" === a.trim(c.term)) return e;
                                if (d.children) {
                                    for (var f = d.children.length - 1; f >= 0; f--) {
                                        var g = d.children[f],
                                            h = b(c.term, g.text, g);
                                        h || e.children.splice(f, 1)
                                    }
                                    if (e.children.length > 0) return e
                                }
                                return b(c.term, d.text, d) ? e : null
                            }
                            return c
                        }
                        return b
                    }), b.define("select2/compat/query", [], function() {
                        function a(a, b, c) {
                            c.get("debug") && window.console && console.warn && console.warn("Select2: The `query` option has been deprecated in favor of a custom data adapter that overrides the `query` method. Support will be removed for the `query` option in future versions of Select2."), a.call(this, b, c)
                        }
                        return a.prototype.query = function(a, b, c) {
                            b.callback = c;
                            var d = this.options.get("query");
                            d.call(null, b)
                        }, a
                    }), b.define("select2/dropdown/attachContainer", [], function() {
                        function a(a, b, c) {
                            a.call(this, b, c)
                        }
                        return a.prototype.position = function(a, b, c) {
                            var d = c.find(".dropdown-wrapper");
                            d.append(b), b.addClass("select2-dropdown--below"), c.addClass("select2-container--below")
                        }, a
                    }), b.define("select2/dropdown/stopPropagation", [], function() {
                        function a() {}
                        return a.prototype.bind = function(a, b, c) {
                            a.call(this, b, c);
                            var d = ["blur", "change", "click", "dblclick", "focus", "focusin", "focusout", "input", "keydown", "keyup", "keypress", "mousedown", "mouseenter", "mouseleave", "mousemove", "mouseover", "mouseup", "search", "touchend", "touchstart"];
                            this.$dropdown.on(d.join(" "), function(a) {
                                a.stopPropagation()
                            })
                        }, a
                    }), b.define("select2/selection/stopPropagation", [], function() {
                        function a() {}
                        return a.prototype.bind = function(a, b, c) {
                            a.call(this, b, c);
                            var d = ["blur", "change", "click", "dblclick", "focus", "focusin", "focusout", "input", "keydown", "keyup", "keypress", "mousedown", "mouseenter", "mouseleave", "mousemove", "mouseover", "mouseup", "search", "touchend", "touchstart"];
                            this.$selection.on(d.join(" "), function(a) {
                                a.stopPropagation()
                            })
                        }, a
                    }),
                    function(c) {
                        "function" == typeof b.define && b.define.amd ? b.define("jquery-mousewheel", ["jquery"], c) : "object" == typeof exports ? module.exports = c : c(a)
                    }(function(a) {
                        function b(b) {
                            var g = b || window.event,
                                h = i.call(arguments, 1),
                                j = 0,
                                l = 0,
                                m = 0,
                                n = 0,
                                o = 0,
                                p = 0;
                            if (b = a.event.fix(g), b.type = "mousewheel", "detail" in g && (m = -1 * g.detail), "wheelDelta" in g && (m = g.wheelDelta), "wheelDeltaY" in g && (m = g.wheelDeltaY), "wheelDeltaX" in g && (l = -1 * g.wheelDeltaX), "axis" in g && g.axis === g.HORIZONTAL_AXIS && (l = -1 * m, m = 0), j = 0 === m ? l : m, "deltaY" in g && (m = -1 * g.deltaY, j = m), "deltaX" in g && (l = g.deltaX, 0 === m && (j = -1 * l)), 0 !== m || 0 !== l) {
                                if (1 === g.deltaMode) {
                                    var q = a.data(this, "mousewheel-line-height");
                                    j *= q, m *= q, l *= q
                                } else if (2 === g.deltaMode) {
                                    var r = a.data(this, "mousewheel-page-height");
                                    j *= r, m *= r, l *= r
                                }
                                if (n = Math.max(Math.abs(m), Math.abs(l)), (!f || f > n) && (f = n, d(g, n) && (f /= 40)), d(g, n) && (j /= 40, l /= 40, m /= 40), j = Math[j >= 1 ? "floor" : "ceil"](j / f), l = Math[l >= 1 ? "floor" : "ceil"](l / f), m = Math[m >= 1 ? "floor" : "ceil"](m / f), k.settings.normalizeOffset && this.getBoundingClientRect) {
                                    var s = this.getBoundingClientRect();
                                    o = b.clientX - s.left, p = b.clientY - s.top
                                }
                                return b.deltaX = l, b.deltaY = m, b.deltaFactor = f, b.offsetX = o, b.offsetY = p, b.deltaMode = 0, h.unshift(b, j, l, m), e && clearTimeout(e), e = setTimeout(c, 200), (a.event.dispatch || a.event.handle).apply(this, h)
                            }
                        }

                        function c() {
                            f = null
                        }

                        function d(a, b) {
                            return k.settings.adjustOldDeltas && "mousewheel" === a.type && b % 120 === 0
                        }
                        var e, f, g = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
                            h = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
                            i = Array.prototype.slice;
                        if (a.event.fixHooks)
                            for (var j = g.length; j;) a.event.fixHooks[g[--j]] = a.event.mouseHooks;
                        var k = a.event.special.mousewheel = {
                            version: "3.1.12",
                            setup: function() {
                                if (this.addEventListener)
                                    for (var c = h.length; c;) this.addEventListener(h[--c], b, !1);
                                else this.onmousewheel = b;
                                a.data(this, "mousewheel-line-height", k.getLineHeight(this)), a.data(this, "mousewheel-page-height", k.getPageHeight(this))
                            },
                            teardown: function() {
                                if (this.removeEventListener)
                                    for (var c = h.length; c;) this.removeEventListener(h[--c], b, !1);
                                else this.onmousewheel = null;
                                a.removeData(this, "mousewheel-line-height"), a.removeData(this, "mousewheel-page-height")
                            },
                            getLineHeight: function(b) {
                                var c = a(b),
                                    d = c["offsetParent" in a.fn ? "offsetParent" : "parent"]();
                                return d.length || (d = a("body")), parseInt(d.css("fontSize"), 10) || parseInt(c.css("fontSize"), 10) || 16
                            },
                            getPageHeight: function(b) {
                                return a(b).height()
                            },
                            settings: {
                                adjustOldDeltas: !0,
                                normalizeOffset: !0
                            }
                        };
                        a.fn.extend({
                            mousewheel: function(a) {
                                return a ? this.bind("mousewheel", a) : this.trigger("mousewheel")
                            },
                            unmousewheel: function(a) {
                                return this.unbind("mousewheel", a)
                            }
                        })
                    }), b.define("jquery.select2", ["jquery", "jquery-mousewheel", "./select2/core", "./select2/defaults"], function(a, b, c, d) {
                        if (null == a.fn.select2) {
                            var e = ["open", "close", "destroy"];
                            a.fn.select2 = function(b) {
                                if (b = b || {}, "object" == typeof b) return this.each(function() {
                                    var d = a.extend(!0, {}, b);
                                    new c(a(this), d)
                                }), this;
                                if ("string" == typeof b) {
                                    var d;
                                    return this.each(function() {
                                        var c = a(this).data("select2");
                                        null == c && window.console && console.error && console.error("The select2('" + b + "') method was called on an element that is not using Select2.");
                                        var e = Array.prototype.slice.call(arguments, 1);
                                        d = c[b].apply(c, e)
                                    }), a.inArray(b, e) > -1 ? this : d
                                }
                                throw new Error("Invalid arguments for Select2: " + b)
                            }
                        }
                        return null == a.fn.select2.defaults && (a.fn.select2.defaults = d), c
                    }), {
                        define: b.define,
                        require: b.require
                    }
            }(),
            c = b.require("jquery.select2");
        return a.fn.select2.amd = b, c
    }),
    function(a) {
        "function" == typeof define && define.amd ? define(["jquery"], function(b) {
            a(b, document, window, navigator)
        }) : a(jQuery, document, window, navigator)
    }(function(a, b, c, d, e) {
        var f = 0,
            g = function() {
                var b = d.userAgent,
                    c = /msie\s\d+/i;
                return 0 < b.search(c) && (b = c.exec(b).toString(), b = b.split(" ")[1], 9 > b) && (a("html").addClass("lt-ie9"), !0)
            }();
        Function.prototype.bind || (Function.prototype.bind = function(a) {
            var b = this,
                c = [].slice;
            if ("function" != typeof b) throw new TypeError;
            var d = c.call(arguments, 1),
                e = function() {
                    if (this instanceof e) {
                        var f = function() {};
                        f.prototype = b.prototype;
                        var f = new f,
                            g = b.apply(f, d.concat(c.call(arguments)));
                        return Object(g) === g ? g : f
                    }
                    return b.apply(a, d.concat(c.call(arguments)))
                };
            return e
        }), Array.prototype.indexOf || (Array.prototype.indexOf = function(a, b) {
            var c;
            if (null == this) throw new TypeError('"this" is null or not defined');
            var d = Object(this),
                e = d.length >>> 0;
            if (0 === e) return -1;
            if (c = +b || 0, 1 / 0 === Math.abs(c) && (c = 0), c >= e) return -1;
            for (c = Math.max(0 <= c ? c : e - Math.abs(c), 0); c < e;) {
                if (c in d && d[c] === a) return c;
                c++
            }
            return -1
        });
        var h = function(d, e, f) {
            this.VERSION = "2.1.4", this.input = d, this.plugin_count = f, this.old_to = this.old_from = this.update_tm = this.calc_count = this.current_plugin = 0, this.raf_id = this.old_min_interval = null, this.is_update = this.is_key = this.no_diapason = this.force_redraw = this.dragging = !1, this.is_start = !0, this.is_click = this.is_resize = this.is_active = this.is_finish = !1, this.$cache = {
                win: a(c),
                body: a(b.body),
                input: a(d),
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
            var g = this.$cache.input;
            d = g.prop("value");
            var h;
            f = {
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
            }, g = {
                type: g.data("type"),
                min: g.data("min"),
                max: g.data("max"),
                from: g.data("from"),
                to: g.data("to"),
                step: g.data("step"),
                min_interval: g.data("minInterval"),
                max_interval: g.data("maxInterval"),
                drag_interval: g.data("dragInterval"),
                values: g.data("values"),
                from_fixed: g.data("fromFixed"),
                from_min: g.data("fromMin"),
                from_max: g.data("fromMax"),
                from_shadow: g.data("fromShadow"),
                to_fixed: g.data("toFixed"),
                to_min: g.data("toMin"),
                to_max: g.data("toMax"),
                to_shadow: g.data("toShadow"),
                prettify_enabled: g.data("prettifyEnabled"),
                prettify_separator: g.data("prettifySeparator"),
                force_edges: g.data("forceEdges"),
                keyboard: g.data("keyboard"),
                keyboard_step: g.data("keyboardStep"),
                grid: g.data("grid"),
                grid_margin: g.data("gridMargin"),
                grid_num: g.data("gridNum"),
                grid_snap: g.data("gridSnap"),
                hide_min_max: g.data("hideMinMax"),
                hide_from_to: g.data("hideFromTo"),
                prefix: g.data("prefix"),
                postfix: g.data("postfix"),
                max_postfix: g.data("maxPostfix"),
                decorate_both: g.data("decorateBoth"),
                values_separator: g.data("valuesSeparator"),
                input_values_separator: g.data("inputValuesSeparator"),
                disable: g.data("disable")
            }, g.values = g.values && g.values.split(",");
            for (h in g) g.hasOwnProperty(h) && (g[h] || 0 === g[h] || delete g[h]);
            d && (d = d.split(g.input_values_separator || e.input_values_separator || ";"), d[0] && d[0] == +d[0] && (d[0] = +d[0]), d[1] && d[1] == +d[1] && (d[1] = +d[1]), e && e.values && e.values.length ? (f.from = d[0] && e.values.indexOf(d[0]), f.to = d[1] && e.values.indexOf(d[1])) : (f.from = d[0] && +d[0], f.to = d[1] && +d[1])), a.extend(f, e), a.extend(f, g), this.options = f, this.validate(), this.result = {
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
        h.prototype = {
                init: function(a) {
                    this.no_diapason = !1, this.coords.p_step = this.convertToPercent(this.options.step, !0), this.target = "base", this.toggleInput(), this.append(), this.setMinMax(), a ? (this.force_redraw = !0, this.calc(!0), this.callOnUpdate()) : (this.force_redraw = !0, this.calc(!0), this.callOnStart()), this.updateScene()
                },
                append: function() {
                    this.$cache.input.before('<span class="irs js-irs-' + this.plugin_count + '"></span>'), this.$cache.input.prop("readonly", !0), this.$cache.cont = this.$cache.input.prev(), this.result.slider = this.$cache.cont, this.$cache.cont.html('<span class="irs"><span class="irs-line" tabindex="-1"><span class="irs-line-left"></span><span class="irs-line-mid"></span><span class="irs-line-right"></span></span><span class="irs-min">0</span><span class="irs-max">1</span><span class="irs-from">0</span><span class="irs-to">0</span><span class="irs-single">0</span></span><span class="irs-grid"></span><span class="irs-bar"></span>'), this.$cache.rs = this.$cache.cont.find(".irs"), this.$cache.min = this.$cache.cont.find(".irs-min"), this.$cache.max = this.$cache.cont.find(".irs-max"), this.$cache.from = this.$cache.cont.find(".irs-from"), this.$cache.to = this.$cache.cont.find(".irs-to"), this.$cache.single = this.$cache.cont.find(".irs-single"), this.$cache.bar = this.$cache.cont.find(".irs-bar"), this.$cache.line = this.$cache.cont.find(".irs-line"), this.$cache.grid = this.$cache.cont.find(".irs-grid"), "single" === this.options.type ? (this.$cache.cont.append('<span class="irs-bar-edge"></span><span class="irs-shadow shadow-single"></span><span class="irs-slider single"></span>'), this.$cache.edge = this.$cache.cont.find(".irs-bar-edge"), this.$cache.s_single = this.$cache.cont.find(".single"), this.$cache.from[0].style.visibility = "hidden", this.$cache.to[0].style.visibility = "hidden", this.$cache.shad_single = this.$cache.cont.find(".shadow-single")) : (this.$cache.cont.append('<span class="irs-shadow shadow-from"></span><span class="irs-shadow shadow-to"></span><span class="irs-slider from"></span><span class="irs-slider to"></span>'),
                        this.$cache.s_from = this.$cache.cont.find(".from"), this.$cache.s_to = this.$cache.cont.find(".to"), this.$cache.shad_from = this.$cache.cont.find(".shadow-from"), this.$cache.shad_to = this.$cache.cont.find(".shadow-to"), this.setTopHandler()), this.options.hide_from_to && (this.$cache.from[0].style.display = "none", this.$cache.to[0].style.display = "none", this.$cache.single[0].style.display = "none"), this.appendGrid(), this.options.disable ? (this.appendDisableMask(), this.$cache.input[0].disabled = !0) : (this.$cache.cont.removeClass("irs-disabled"), this.$cache.input[0].disabled = !1, this.bindEvents()), this.options.drag_interval && (this.$cache.bar[0].style.cursor = "ew-resize")
                },
                setTopHandler: function() {
                    var a = this.options.max,
                        b = this.options.to;
                    this.options.from > this.options.min && b === a ? this.$cache.s_from.addClass("type_last") : b < a && this.$cache.s_to.addClass("type_last")
                },
                changeLevel: function(a) {
                    switch (a) {
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
                appendDisableMask: function() {
                    this.$cache.cont.append('<span class="irs-disable-mask"></span>'), this.$cache.cont.addClass("irs-disabled")
                },
                remove: function() {
                    this.$cache.cont.remove(), this.$cache.cont = null, this.$cache.line.off("keydown.irs_" + this.plugin_count), this.$cache.body.off("touchmove.irs_" + this.plugin_count), this.$cache.body.off("mousemove.irs_" + this.plugin_count), this.$cache.win.off("touchend.irs_" + this.plugin_count), this.$cache.win.off("mouseup.irs_" + this.plugin_count), g && (this.$cache.body.off("mouseup.irs_" + this.plugin_count), this.$cache.body.off("mouseleave.irs_" + this.plugin_count)), this.$cache.grid_labels = [], this.coords.big = [], this.coords.big_w = [], this.coords.big_p = [], this.coords.big_x = [], cancelAnimationFrame(this.raf_id)
                },
                bindEvents: function() {
                    this.no_diapason || (this.$cache.body.on("touchmove.irs_" + this.plugin_count, this.pointerMove.bind(this)), this.$cache.body.on("mousemove.irs_" + this.plugin_count, this.pointerMove.bind(this)), this.$cache.win.on("touchend.irs_" + this.plugin_count, this.pointerUp.bind(this)), this.$cache.win.on("mouseup.irs_" + this.plugin_count, this.pointerUp.bind(this)), this.$cache.line.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.line.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.options.drag_interval && "double" === this.options.type ? (this.$cache.bar.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "both")), this.$cache.bar.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "both"))) : (this.$cache.bar.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.bar.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"))), "single" === this.options.type ? (this.$cache.single.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "single")), this.$cache.s_single.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "single")), this.$cache.shad_single.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.single.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "single")), this.$cache.s_single.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "single")), this.$cache.edge.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.shad_single.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"))) : (this.$cache.single.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, null)), this.$cache.single.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, null)), this.$cache.from.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "from")), this.$cache.s_from.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "from")), this.$cache.to.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "to")), this.$cache.s_to.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "to")), this.$cache.shad_from.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.shad_to.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.from.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "from")), this.$cache.s_from.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "from")), this.$cache.to.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "to")), this.$cache.s_to.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "to")), this.$cache.shad_from.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.shad_to.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"))), this.options.keyboard && this.$cache.line.on("keydown.irs_" + this.plugin_count, this.key.bind(this, "keyboard")), g && (this.$cache.body.on("mouseup.irs_" + this.plugin_count, this.pointerUp.bind(this)), this.$cache.body.on("mouseleave.irs_" + this.plugin_count, this.pointerUp.bind(this))))
                },
                pointerMove: function(a) {
                    this.dragging && (this.coords.x_pointer = (a.pageX || a.originalEvent.touches && a.originalEvent.touches[0].pageX) - this.coords.x_gap, this.calc())
                },
                pointerUp: function(b) {
                    this.current_plugin === this.plugin_count && this.is_active && (this.is_active = !1, this.$cache.cont.find(".state_hover").removeClass("state_hover"), this.force_redraw = !0, g && a("*").prop("unselectable", !1), this.updateScene(), this.restoreOriginalMinInterval(), (a.contains(this.$cache.cont[0], b.target) || this.dragging) && (this.is_finish = !0, this.callOnFinish()), this.dragging = !1)
                },
                pointerDown: function(b, c) {
                    c.preventDefault();
                    var d = c.pageX || c.originalEvent.touches && c.originalEvent.touches[0].pageX;
                    2 !== c.button && ("both" === b && this.setTempMinInterval(), b || (b = this.target), this.current_plugin = this.plugin_count, this.target = b, this.dragging = this.is_active = !0, this.coords.x_gap = this.$cache.rs.offset().left, this.coords.x_pointer = d - this.coords.x_gap, this.calcPointerPercent(), this.changeLevel(b), g && a("*").prop("unselectable", !0), this.$cache.line.trigger("focus"), this.updateScene())
                },
                pointerClick: function(a, b) {
                    b.preventDefault();
                    var c = b.pageX || b.originalEvent.touches && b.originalEvent.touches[0].pageX;
                    2 !== b.button && (this.current_plugin = this.plugin_count, this.target = a, this.is_click = !0, this.coords.x_gap = this.$cache.rs.offset().left, this.coords.x_pointer = +(c - this.coords.x_gap).toFixed(), this.force_redraw = !0, this.calc(), this.$cache.line.trigger("focus"))
                },
                key: function(a, b) {
                    if (!(this.current_plugin !== this.plugin_count || b.altKey || b.ctrlKey || b.shiftKey || b.metaKey)) {
                        switch (b.which) {
                            case 83:
                            case 65:
                            case 40:
                            case 37:
                                b.preventDefault(), this.moveByKey(!1);
                                break;
                            case 87:
                            case 68:
                            case 38:
                            case 39:
                                b.preventDefault(), this.moveByKey(!0)
                        }
                        return !0
                    }
                },
                moveByKey: function(a) {
                    var b = this.coords.p_pointer,
                        b = a ? b + this.options.keyboard_step : b - this.options.keyboard_step;
                    this.coords.x_pointer = this.toFixed(this.coords.w_rs / 100 * b), this.is_key = !0, this.calc()
                },
                setMinMax: function() {
                    this.options && (this.options.hide_min_max ? (this.$cache.min[0].style.display = "none", this.$cache.max[0].style.display = "none") : (this.options.values.length ? (this.$cache.min.html(this.decorate(this.options.p_values[this.options.min])), this.$cache.max.html(this.decorate(this.options.p_values[this.options.max]))) : (this.$cache.min.html(this.decorate(this._prettify(this.options.min), this.options.min)), this.$cache.max.html(this.decorate(this._prettify(this.options.max), this.options.max))), this.labels.w_min = this.$cache.min.outerWidth(!1), this.labels.w_max = this.$cache.max.outerWidth(!1)))
                },
                setTempMinInterval: function() {
                    var a = this.result.to - this.result.from;
                    null === this.old_min_interval && (this.old_min_interval = this.options.min_interval), this.options.min_interval = a
                },
                restoreOriginalMinInterval: function() {
                    null !== this.old_min_interval && (this.options.min_interval = this.old_min_interval, this.old_min_interval = null)
                },
                calc: function(a) {
                    if (this.options && (this.calc_count++, (10 === this.calc_count || a) && (this.calc_count = 0, this.coords.w_rs = this.$cache.rs.outerWidth(!1), this.calcHandlePercent()), this.coords.w_rs)) {
                        switch (this.calcPointerPercent(), a = this.getHandleX(), "click" === this.target && (this.coords.p_gap = this.coords.p_handle / 2, a = this.getHandleX(), this.target = this.options.drag_interval ? "both_one" : this.chooseHandle(a)), this.target) {
                            case "base":
                                var b = (this.options.max - this.options.min) / 100;
                                a = (this.result.from - this.options.min) / b, b = (this.result.to - this.options.min) / b, this.coords.p_single_real = this.toFixed(a), this.coords.p_from_real = this.toFixed(a), this.coords.p_to_real = this.toFixed(b), this.coords.p_single_real = this.checkDiapason(this.coords.p_single_real, this.options.from_min, this.options.from_max), this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max), this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max), this.coords.p_single_fake = this.convertToFakePercent(this.coords.p_single_real), this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real), this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real), this.target = null;
                                break;
                            case "single":
                                if (this.options.from_fixed) break;
                                this.coords.p_single_real = this.convertToRealPercent(a), this.coords.p_single_real = this.calcWithStep(this.coords.p_single_real), this.coords.p_single_real = this.checkDiapason(this.coords.p_single_real, this.options.from_min, this.options.from_max), this.coords.p_single_fake = this.convertToFakePercent(this.coords.p_single_real);
                                break;
                            case "from":
                                if (this.options.from_fixed) break;
                                this.coords.p_from_real = this.convertToRealPercent(a), this.coords.p_from_real = this.calcWithStep(this.coords.p_from_real), this.coords.p_from_real > this.coords.p_to_real && (this.coords.p_from_real = this.coords.p_to_real), this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max), this.coords.p_from_real = this.checkMinInterval(this.coords.p_from_real, this.coords.p_to_real, "from"), this.coords.p_from_real = this.checkMaxInterval(this.coords.p_from_real, this.coords.p_to_real, "from"), this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real);
                                break;
                            case "to":
                                if (this.options.to_fixed) break;
                                this.coords.p_to_real = this.convertToRealPercent(a), this.coords.p_to_real = this.calcWithStep(this.coords.p_to_real), this.coords.p_to_real < this.coords.p_from_real && (this.coords.p_to_real = this.coords.p_from_real), this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max), this.coords.p_to_real = this.checkMinInterval(this.coords.p_to_real, this.coords.p_from_real, "to"), this.coords.p_to_real = this.checkMaxInterval(this.coords.p_to_real, this.coords.p_from_real, "to"), this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real);
                                break;
                            case "both":
                                if (this.options.from_fixed || this.options.to_fixed) break;
                                a = this.toFixed(a + .1 * this.coords.p_handle), this.coords.p_from_real = this.convertToRealPercent(a) - this.coords.p_gap_left, this.coords.p_from_real = this.calcWithStep(this.coords.p_from_real), this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max), this.coords.p_from_real = this.checkMinInterval(this.coords.p_from_real, this.coords.p_to_real, "from"), this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real), this.coords.p_to_real = this.convertToRealPercent(a) + this.coords.p_gap_right, this.coords.p_to_real = this.calcWithStep(this.coords.p_to_real), this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max), this.coords.p_to_real = this.checkMinInterval(this.coords.p_to_real, this.coords.p_from_real, "to"), this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real);
                                break;
                            case "both_one":
                                if (!this.options.from_fixed && !this.options.to_fixed) {
                                    var c = this.convertToRealPercent(a);
                                    a = this.result.to_percent - this.result.from_percent;
                                    var d = a / 2,
                                        b = c - d,
                                        c = c + d;
                                    0 > b && (b = 0, c = b + a), 100 < c && (c = 100, b = c - a), this.coords.p_from_real = this.calcWithStep(b), this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max), this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real), this.coords.p_to_real = this.calcWithStep(c), this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max), this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real)
                                }
                        }
                        "single" === this.options.type ? (this.coords.p_bar_x = this.coords.p_handle / 2, this.coords.p_bar_w = this.coords.p_single_fake, this.result.from_percent = this.coords.p_single_real, this.result.from = this.convertToValue(this.coords.p_single_real), this.options.values.length && (this.result.from_value = this.options.values[this.result.from])) : (this.coords.p_bar_x = this.toFixed(this.coords.p_from_fake + this.coords.p_handle / 2), this.coords.p_bar_w = this.toFixed(this.coords.p_to_fake - this.coords.p_from_fake), this.result.from_percent = this.coords.p_from_real, this.result.from = this.convertToValue(this.coords.p_from_real), this.result.to_percent = this.coords.p_to_real, this.result.to = this.convertToValue(this.coords.p_to_real), this.options.values.length && (this.result.from_value = this.options.values[this.result.from], this.result.to_value = this.options.values[this.result.to])), this.calcMinMax(), this.calcLabels()
                    }
                },
                calcPointerPercent: function() {
                    this.coords.w_rs ? (0 > this.coords.x_pointer || isNaN(this.coords.x_pointer) ? this.coords.x_pointer = 0 : this.coords.x_pointer > this.coords.w_rs && (this.coords.x_pointer = this.coords.w_rs), this.coords.p_pointer = this.toFixed(this.coords.x_pointer / this.coords.w_rs * 100)) : this.coords.p_pointer = 0
                },
                convertToRealPercent: function(a) {
                    return a / (100 - this.coords.p_handle) * 100
                },
                convertToFakePercent: function(a) {
                    return a / 100 * (100 - this.coords.p_handle)
                },
                getHandleX: function() {
                    var a = 100 - this.coords.p_handle,
                        b = this.toFixed(this.coords.p_pointer - this.coords.p_gap);
                    return 0 > b ? b = 0 : b > a && (b = a), b
                },
                calcHandlePercent: function() {
                    this.coords.w_handle = "single" === this.options.type ? this.$cache.s_single.outerWidth(!1) : this.$cache.s_from.outerWidth(!1), this.coords.p_handle = this.toFixed(this.coords.w_handle / this.coords.w_rs * 100)
                },
                chooseHandle: function(a) {
                    return "single" === this.options.type ? "single" : a >= this.coords.p_from_real + (this.coords.p_to_real - this.coords.p_from_real) / 2 ? this.options.to_fixed ? "from" : "to" : this.options.from_fixed ? "to" : "from"
                },
                calcMinMax: function() {
                    this.coords.w_rs && (this.labels.p_min = this.labels.w_min / this.coords.w_rs * 100, this.labels.p_max = this.labels.w_max / this.coords.w_rs * 100)
                },
                calcLabels: function() {
                    this.coords.w_rs && !this.options.hide_from_to && ("single" === this.options.type ? (this.labels.w_single = this.$cache.single.outerWidth(!1), this.labels.p_single_fake = this.labels.w_single / this.coords.w_rs * 100, this.labels.p_single_left = this.coords.p_single_fake + this.coords.p_handle / 2 - this.labels.p_single_fake / 2) : (this.labels.w_from = this.$cache.from.outerWidth(!1), this.labels.p_from_fake = this.labels.w_from / this.coords.w_rs * 100, this.labels.p_from_left = this.coords.p_from_fake + this.coords.p_handle / 2 - this.labels.p_from_fake / 2, this.labels.p_from_left = this.toFixed(this.labels.p_from_left), this.labels.p_from_left = this.checkEdges(this.labels.p_from_left, this.labels.p_from_fake), this.labels.w_to = this.$cache.to.outerWidth(!1), this.labels.p_to_fake = this.labels.w_to / this.coords.w_rs * 100, this.labels.p_to_left = this.coords.p_to_fake + this.coords.p_handle / 2 - this.labels.p_to_fake / 2, this.labels.p_to_left = this.toFixed(this.labels.p_to_left), this.labels.p_to_left = this.checkEdges(this.labels.p_to_left, this.labels.p_to_fake), this.labels.w_single = this.$cache.single.outerWidth(!1), this.labels.p_single_fake = this.labels.w_single / this.coords.w_rs * 100, this.labels.p_single_left = (this.labels.p_from_left + this.labels.p_to_left + this.labels.p_to_fake) / 2 - this.labels.p_single_fake / 2, this.labels.p_single_left = this.toFixed(this.labels.p_single_left)), this.labels.p_single_left = this.checkEdges(this.labels.p_single_left, this.labels.p_single_fake))
                },
                updateScene: function() {
                    this.raf_id && (cancelAnimationFrame(this.raf_id), this.raf_id = null), clearTimeout(this.update_tm), this.update_tm = null, this.options && (this.drawHandles(), this.is_active ? this.raf_id = requestAnimationFrame(this.updateScene.bind(this)) : this.update_tm = setTimeout(this.updateScene.bind(this), 300))
                },
                drawHandles: function() {
                    this.coords.w_rs = this.$cache.rs.outerWidth(!1), this.coords.w_rs && (this.coords.w_rs !== this.coords.w_rs_old && (this.target = "base", this.is_resize = !0), (this.coords.w_rs !== this.coords.w_rs_old || this.force_redraw) && (this.setMinMax(), this.calc(!0), this.drawLabels(), this.options.grid && (this.calcGridMargin(), this.calcGridLabels()), this.force_redraw = !0, this.coords.w_rs_old = this.coords.w_rs, this.drawShadow()), this.coords.w_rs && (this.dragging || this.force_redraw || this.is_key) && ((this.old_from !== this.result.from || this.old_to !== this.result.to || this.force_redraw || this.is_key) && (this.drawLabels(), this.$cache.bar[0].style.left = this.coords.p_bar_x + "%", this.$cache.bar[0].style.width = this.coords.p_bar_w + "%", "single" === this.options.type ? (this.$cache.s_single[0].style.left = this.coords.p_single_fake + "%", this.$cache.single[0].style.left = this.labels.p_single_left + "%", this.options.values.length ? this.$cache.input.prop("value", this.result.from_value) : this.$cache.input.prop("value", this.result.from), this.$cache.input.data("from", this.result.from)) : (this.$cache.s_from[0].style.left = this.coords.p_from_fake + "%", this.$cache.s_to[0].style.left = this.coords.p_to_fake + "%", (this.old_from !== this.result.from || this.force_redraw) && (this.$cache.from[0].style.left = this.labels.p_from_left + "%"), (this.old_to !== this.result.to || this.force_redraw) && (this.$cache.to[0].style.left = this.labels.p_to_left + "%"), this.$cache.single[0].style.left = this.labels.p_single_left + "%", this.options.values.length ? this.$cache.input.prop("value", this.result.from_value + this.options.input_values_separator + this.result.to_value) : this.$cache.input.prop("value", this.result.from + this.options.input_values_separator + this.result.to), this.$cache.input.data("from", this.result.from), this.$cache.input.data("to", this.result.to)), this.old_from === this.result.from && this.old_to === this.result.to || this.is_start || this.$cache.input.trigger("change"), this.old_from = this.result.from, this.old_to = this.result.to, this.is_resize || this.is_update || this.is_start || this.is_finish || this.callOnChange(), (this.is_key || this.is_click) && (this.is_click = this.is_key = !1, this.callOnFinish()), this.is_finish = this.is_resize = this.is_update = !1), this.force_redraw = this.is_click = this.is_key = this.is_start = !1))
                },
                drawLabels: function() {
                    if (this.options) {
                        var c, a = this.options.values.length,
                            b = this.options.p_values;
                        if (!this.options.hide_from_to)
                            if ("single" === this.options.type) a = a ? this.decorate(b[this.result.from]) : this.decorate(this._prettify(this.result.from), this.result.from), this.$cache.single.html(a), this.calcLabels(), this.$cache.min[0].style.visibility = this.labels.p_single_left < this.labels.p_min + 1 ? "hidden" : "visible", this.$cache.max[0].style.visibility = this.labels.p_single_left + this.labels.p_single_fake > 100 - this.labels.p_max - 1 ? "hidden" : "visible";
                            else {
                                a ? (this.options.decorate_both ? (a = this.decorate(b[this.result.from]), a += this.options.values_separator, a += this.decorate(b[this.result.to])) : a = this.decorate(b[this.result.from] + this.options.values_separator + b[this.result.to]), c = this.decorate(b[this.result.from]), b = this.decorate(b[this.result.to])) : (this.options.decorate_both ? (a = this.decorate(this._prettify(this.result.from), this.result.from), a += this.options.values_separator, a += this.decorate(this._prettify(this.result.to), this.result.to)) : a = this.decorate(this._prettify(this.result.from) + this.options.values_separator + this._prettify(this.result.to), this.result.to), c = this.decorate(this._prettify(this.result.from), this.result.from), b = this.decorate(this._prettify(this.result.to), this.result.to)), this.$cache.single.html(a), this.$cache.from.html(c), this.$cache.to.html(b), this.calcLabels(), b = Math.min(this.labels.p_single_left, this.labels.p_from_left), a = this.labels.p_single_left + this.labels.p_single_fake, c = this.labels.p_to_left + this.labels.p_to_fake;
                                var d = Math.max(a, c);
                                this.labels.p_from_left + this.labels.p_from_fake >= this.labels.p_to_left ? (this.$cache.from[0].style.visibility = "hidden", this.$cache.to[0].style.visibility = "hidden", this.$cache.single[0].style.visibility = "visible", this.result.from === this.result.to ? ("from" === this.target ? this.$cache.from[0].style.visibility = "visible" : "to" === this.target ? this.$cache.to[0].style.visibility = "visible" : this.target || (this.$cache.from[0].style.visibility = "visible"), this.$cache.single[0].style.visibility = "hidden", d = c) : (this.$cache.from[0].style.visibility = "hidden", this.$cache.to[0].style.visibility = "hidden", this.$cache.single[0].style.visibility = "visible", d = Math.max(a, c))) : (this.$cache.from[0].style.visibility = "visible", this.$cache.to[0].style.visibility = "visible", this.$cache.single[0].style.visibility = "hidden"), this.$cache.min[0].style.visibility = b < this.labels.p_min + 1 ? "hidden" : "visible", this.$cache.max[0].style.visibility = d > 100 - this.labels.p_max - 1 ? "hidden" : "visible"
                            }
                    }
                },
                drawShadow: function() {
                    var a = this.options,
                        b = this.$cache,
                        c = "number" == typeof a.from_min && !isNaN(a.from_min),
                        d = "number" == typeof a.from_max && !isNaN(a.from_max),
                        e = "number" == typeof a.to_min && !isNaN(a.to_min),
                        f = "number" == typeof a.to_max && !isNaN(a.to_max);
                    "single" === a.type ? a.from_shadow && (c || d) ? (c = this.convertToPercent(c ? a.from_min : a.min), d = this.convertToPercent(d ? a.from_max : a.max) - c, c = this.toFixed(c - this.coords.p_handle / 100 * c), d = this.toFixed(d - this.coords.p_handle / 100 * d), c += this.coords.p_handle / 2, b.shad_single[0].style.display = "block", b.shad_single[0].style.left = c + "%", b.shad_single[0].style.width = d + "%") : b.shad_single[0].style.display = "none" : (a.from_shadow && (c || d) ? (c = this.convertToPercent(c ? a.from_min : a.min), d = this.convertToPercent(d ? a.from_max : a.max) - c, c = this.toFixed(c - this.coords.p_handle / 100 * c), d = this.toFixed(d - this.coords.p_handle / 100 * d), c += this.coords.p_handle / 2, b.shad_from[0].style.display = "block", b.shad_from[0].style.left = c + "%", b.shad_from[0].style.width = d + "%") : b.shad_from[0].style.display = "none", a.to_shadow && (e || f) ? (e = this.convertToPercent(e ? a.to_min : a.min), a = this.convertToPercent(f ? a.to_max : a.max) - e, e = this.toFixed(e - this.coords.p_handle / 100 * e), a = this.toFixed(a - this.coords.p_handle / 100 * a), e += this.coords.p_handle / 2, b.shad_to[0].style.display = "block", b.shad_to[0].style.left = e + "%", b.shad_to[0].style.width = a + "%") : b.shad_to[0].style.display = "none")
                },
                callOnStart: function() {
                    this.options.onStart && "function" == typeof this.options.onStart && this.options.onStart(this.result)
                },
                callOnChange: function() {
                    this.options.onChange && "function" == typeof this.options.onChange && this.options.onChange(this.result)
                },
                callOnFinish: function() {
                    this.options.onFinish && "function" == typeof this.options.onFinish && this.options.onFinish(this.result)
                },
                callOnUpdate: function() {
                    this.options.onUpdate && "function" == typeof this.options.onUpdate && this.options.onUpdate(this.result)
                },
                toggleInput: function() {
                    this.$cache.input.toggleClass("irs-hidden-input")
                },
                convertToPercent: function(a, b) {
                    var c = this.options.max - this.options.min;
                    return c ? this.toFixed((b ? a : a - this.options.min) / (c / 100)) : (this.no_diapason = !0, 0)
                },
                convertToValue: function(a) {
                    var f, g, b = this.options.min,
                        c = this.options.max,
                        d = b.toString().split(".")[1],
                        e = c.toString().split(".")[1],
                        h = 0,
                        i = 0;
                    return 0 === a ? this.options.min : 100 === a ? this.options.max : (d && (h = f = d.length), e && (h = g = e.length), f && g && (h = f >= g ? f : g), 0 > b && (i = Math.abs(b), b = +(b + i).toFixed(h), c = +(c + i).toFixed(h)), a = (c - b) / 100 * a + b, (b = this.options.step.toString().split(".")[1]) ? a = +a.toFixed(b.length) : (a /= this.options.step, a *= this.options.step, a = +a.toFixed(0)), i && (a -= i), i = b ? +a.toFixed(b.length) : this.toFixed(a), i < this.options.min ? i = this.options.min : i > this.options.max && (i = this.options.max), i)
                },
                calcWithStep: function(a) {
                    var b = Math.round(a / this.coords.p_step) * this.coords.p_step;
                    return 100 < b && (b = 100), 100 === a && (b = 100), this.toFixed(b)
                },
                checkMinInterval: function(a, b, c) {
                    var d = this.options;
                    return d.min_interval ? (a = this.convertToValue(a), b = this.convertToValue(b), "from" === c ? b - a < d.min_interval && (a = b - d.min_interval) : a - b < d.min_interval && (a = b + d.min_interval), this.convertToPercent(a)) : a
                },
                checkMaxInterval: function(a, b, c) {
                    var d = this.options;
                    return d.max_interval ? (a = this.convertToValue(a), b = this.convertToValue(b), "from" === c ? b - a > d.max_interval && (a = b - d.max_interval) : a - b > d.max_interval && (a = b + d.max_interval), this.convertToPercent(a)) : a
                },
                checkDiapason: function(a, b, c) {
                    a = this.convertToValue(a);
                    var d = this.options;
                    return "number" != typeof b && (b = d.min), "number" != typeof c && (c = d.max), a < b && (a = b), a > c && (a = c), this.convertToPercent(a)
                },
                toFixed: function(a) {
                    return a = a.toFixed(9), +a
                },
                _prettify: function(a) {
                    return this.options.prettify_enabled ? this.options.prettify && "function" == typeof this.options.prettify ? this.options.prettify(a) : this.prettify(a) : a
                },
                prettify: function(a) {
                    return a.toString().replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + this.options.prettify_separator)
                },
                checkEdges: function(a, b) {
                    return this.options.force_edges ? (0 > a ? a = 0 : a > 100 - b && (a = 100 - b), this.toFixed(a)) : this.toFixed(a)
                },
                validate: function() {
                    var e, f, a = this.options,
                        b = this.result,
                        c = a.values,
                        d = c.length;
                    if ("string" == typeof a.min && (a.min = +a.min), "string" == typeof a.max && (a.max = +a.max), "string" == typeof a.from && (a.from = +a.from), "string" == typeof a.to && (a.to = +a.to), "string" == typeof a.step && (a.step = +a.step), "string" == typeof a.from_min && (a.from_min = +a.from_min), "string" == typeof a.from_max && (a.from_max = +a.from_max), "string" == typeof a.to_min && (a.to_min = +a.to_min), "string" == typeof a.to_max && (a.to_max = +a.to_max), "string" == typeof a.keyboard_step && (a.keyboard_step = +a.keyboard_step), "string" == typeof a.grid_num && (a.grid_num = +a.grid_num), a.max < a.min && (a.max = a.min), d)
                        for (a.p_values = [], a.min = 0, a.max = d - 1, a.step = 1, a.grid_num = a.max, a.grid_snap = !0, f = 0; f < d; f++) e = +c[f], isNaN(e) ? e = c[f] : (c[f] = e, e = this._prettify(e)), a.p_values.push(e);
                    ("number" != typeof a.from || isNaN(a.from)) && (a.from = a.min), ("number" != typeof a.to || isNaN(a.from)) && (a.to = a.max), "single" === a.type ? (a.from < a.min && (a.from = a.min), a.from > a.max && (a.from = a.max)) : ((a.from < a.min || a.from > a.max) && (a.from = a.min), (a.to > a.max || a.to < a.min) && (a.to = a.max), a.from > a.to && (a.from = a.to)), ("number" != typeof a.step || isNaN(a.step) || !a.step || 0 > a.step) && (a.step = 1), ("number" != typeof a.keyboard_step || isNaN(a.keyboard_step) || !a.keyboard_step || 0 > a.keyboard_step) && (a.keyboard_step = 5), "number" == typeof a.from_min && a.from < a.from_min && (a.from = a.from_min), "number" == typeof a.from_max && a.from > a.from_max && (a.from = a.from_max), "number" == typeof a.to_min && a.to < a.to_min && (a.to = a.to_min), "number" == typeof a.to_max && a.from > a.to_max && (a.to = a.to_max), b && (b.min !== a.min && (b.min = a.min), b.max !== a.max && (b.max = a.max), (b.from < b.min || b.from > b.max) && (b.from = a.from), (b.to < b.min || b.to > b.max) && (b.to = a.to)), ("number" != typeof a.min_interval || isNaN(a.min_interval) || !a.min_interval || 0 > a.min_interval) && (a.min_interval = 0), ("number" != typeof a.max_interval || isNaN(a.max_interval) || !a.max_interval || 0 > a.max_interval) && (a.max_interval = 0), a.min_interval && a.min_interval > a.max - a.min && (a.min_interval = a.max - a.min), a.max_interval && a.max_interval > a.max - a.min && (a.max_interval = a.max - a.min)
                },
                decorate: function(a, b) {
                    var c = "",
                        d = this.options;
                    return d.prefix && (c += d.prefix), c += a, d.max_postfix && (d.values.length && a === d.p_values[d.max] ? (c += d.max_postfix, d.postfix && (c += " ")) : b === d.max && (c += d.max_postfix, d.postfix && (c += " "))), d.postfix && (c += d.postfix), c
                },
                updateFrom: function() {
                    this.result.from = this.options.from, this.result.from_percent = this.convertToPercent(this.result.from), this.options.values && (this.result.from_value = this.options.values[this.result.from])
                },
                updateTo: function() {
                    this.result.to = this.options.to, this.result.to_percent = this.convertToPercent(this.result.to), this.options.values && (this.result.to_value = this.options.values[this.result.to])
                },
                updateResult: function() {
                    this.result.min = this.options.min, this.result.max = this.options.max, this.updateFrom(), this.updateTo()
                },
                appendGrid: function() {
                    if (this.options.grid) {
                        var b, c, a = this.options;
                        b = a.max - a.min;
                        var h, i, d = a.grid_num,
                            e = 0,
                            f = 0,
                            g = 4,
                            j = 0,
                            k = "";
                        for (this.calcGridMargin(), a.grid_snap ? (d = b / a.step, e = this.toFixed(a.step / (b / 100))) : e = this.toFixed(100 / d), 4 < d && (g = 3), 7 < d && (g = 2), 14 < d && (g = 1), 28 < d && (g = 0), b = 0; b < d + 1; b++) {
                            for (h = g, f = this.toFixed(e * b), 100 < f && (f = 100, h -= 2, 0 > h && (h = 0)), this.coords.big[b] = f, i = (f - e * (b - 1)) / (h + 1), c = 1; c <= h && 0 !== f; c++) j = this.toFixed(f - i * c), k += '<span class="irs-grid-pol small" style="left: ' + j + '%"></span>';
                            k += '<span class="irs-grid-pol" style="left: ' + f + '%"></span>', j = this.convertToValue(f), j = a.values.length ? a.p_values[j] : this._prettify(j), k += '<span class="irs-grid-text js-grid-text-' + b + '" style="left: ' + f + '%">' + j + "</span>"
                        }
                        this.coords.big_num = Math.ceil(d + 1), this.$cache.cont.addClass("irs-with-grid"), this.$cache.grid.html(k), this.cacheGridLabels()
                    }
                },
                cacheGridLabels: function() {
                    var a, b, c = this.coords.big_num;
                    for (b = 0; b < c; b++) a = this.$cache.grid.find(".js-grid-text-" + b), this.$cache.grid_labels.push(a);
                    this.calcGridLabels()
                },
                calcGridLabels: function() {
                    var a, b;
                    b = [];
                    var c = [],
                        d = this.coords.big_num;
                    for (a = 0; a < d; a++) this.coords.big_w[a] = this.$cache.grid_labels[a].outerWidth(!1), this.coords.big_p[a] = this.toFixed(this.coords.big_w[a] / this.coords.w_rs * 100), this.coords.big_x[a] = this.toFixed(this.coords.big_p[a] / 2), b[a] = this.toFixed(this.coords.big[a] - this.coords.big_x[a]), c[a] = this.toFixed(b[a] + this.coords.big_p[a]);
                    for (this.options.force_edges && (b[0] < -this.coords.grid_gap && (b[0] = -this.coords.grid_gap, c[0] = this.toFixed(b[0] + this.coords.big_p[0]), this.coords.big_x[0] = this.coords.grid_gap), c[d - 1] > 100 + this.coords.grid_gap && (c[d - 1] = 100 + this.coords.grid_gap, b[d - 1] = this.toFixed(c[d - 1] - this.coords.big_p[d - 1]), this.coords.big_x[d - 1] = this.toFixed(this.coords.big_p[d - 1] - this.coords.grid_gap))), this.calcGridCollision(2, b, c), this.calcGridCollision(4, b, c), a = 0; a < d; a++) b = this.$cache.grid_labels[a][0], b.style.marginLeft = -this.coords.big_x[a] + "%"
                },
                calcGridCollision: function(a, b, c) {
                    var d, e, f, g = this.coords.big_num;
                    for (d = 0; d < g && (e = d + a / 2, !(e >= g)); d += a) f = this.$cache.grid_labels[e][0], f.style.visibility = c[d] <= b[e] ? "visible" : "hidden"
                },
                calcGridMargin: function() {
                    this.options.grid_margin && (this.coords.w_rs = this.$cache.rs.outerWidth(!1), this.coords.w_rs && (this.coords.w_handle = "single" === this.options.type ? this.$cache.s_single.outerWidth(!1) : this.$cache.s_from.outerWidth(!1), this.coords.p_handle = this.toFixed(this.coords.w_handle / this.coords.w_rs * 100), this.coords.grid_gap = this.toFixed(this.coords.p_handle / 2 - .1), this.$cache.grid[0].style.width = this.toFixed(100 - this.coords.p_handle) + "%", this.$cache.grid[0].style.left = this.coords.grid_gap + "%"))
                },
                update: function(b) {
                    this.input && (this.is_update = !0, this.options.from = this.result.from, this.options.to = this.result.to, this.options = a.extend(this.options, b), this.validate(), this.updateResult(b), this.toggleInput(), this.remove(), this.init(!0))
                },
                reset: function() {
                    this.input && (this.updateResult(), this.update())
                },
                destroy: function() {
                    this.input && (this.toggleInput(), this.$cache.input.prop("readonly", !1), a.data(this.input, "ionRangeSlider", null), this.remove(), this.options = this.input = null)
                }
            }, a.fn.ionRangeSlider = function(b) {
                return this.each(function() {
                    a.data(this, "ionRangeSlider") || a.data(this, "ionRangeSlider", new h(this, b, f++))
                })
            },
            function() {
                for (var a = 0, b = ["ms", "moz", "webkit", "o"], d = 0; d < b.length && !c.requestAnimationFrame; ++d) c.requestAnimationFrame = c[b[d] + "RequestAnimationFrame"], c.cancelAnimationFrame = c[b[d] + "CancelAnimationFrame"] || c[b[d] + "CancelRequestAnimationFrame"];
                c.requestAnimationFrame || (c.requestAnimationFrame = function(b, d) {
                    var e = (new Date).getTime(),
                        f = Math.max(0, 16 - (e - a)),
                        g = c.setTimeout(function() {
                            b(e + f)
                        }, f);
                    return a = e + f, g
                }), c.cancelAnimationFrame || (c.cancelAnimationFrame = function(a) {
                    clearTimeout(a)
                })
            }()
    }), ! function() {
        "use strict";

        function a(a) {
            a.fn.swiper = function(b) {
                var d;
                return a(this).each(function() {
                    var a = new c(this, b);
                    d || (d = a)
                }), d
            }
        }
        var b, c = function(a, e) {
            function f(a) {
                return Math.floor(a)
            }

            function g() {
                u.autoplayTimeoutId = setTimeout(function() {
                    u.params.loop ? (u.fixLoop(), u._slideNext(), u.emit("onAutoplay", u)) : u.isEnd ? e.autoplayStopOnLast ? u.stopAutoplay() : (u._slideTo(0), u.emit("onAutoplay", u)) : (u._slideNext(), u.emit("onAutoplay", u))
                }, u.params.autoplay)
            }

            function h(a, c) {
                var d = b(a.target);
                if (!d.is(c))
                    if ("string" == typeof c) d = d.parents(c);
                    else if (c.nodeType) {
                    var e;
                    return d.parents().each(function(a, b) {
                        b === c && (e = c)
                    }), e ? c : void 0
                }
                if (0 !== d.length) return d[0]
            }

            function i(a, b) {
                b = b || {};
                var c = window.MutationObserver || window.WebkitMutationObserver,
                    d = new c(function(a) {
                        a.forEach(function(a) {
                            u.onResize(!0), u.emit("onObserverUpdate", u, a)
                        })
                    });
                d.observe(a, {
                    attributes: "undefined" == typeof b.attributes || b.attributes,
                    childList: "undefined" == typeof b.childList || b.childList,
                    characterData: "undefined" == typeof b.characterData || b.characterData
                }), u.observers.push(d)
            }

            function j(a) {
                a.originalEvent && (a = a.originalEvent);
                var b = a.keyCode || a.charCode;
                if (!u.params.allowSwipeToNext && (u.isHorizontal() && 39 === b || !u.isHorizontal() && 40 === b)) return !1;
                if (!u.params.allowSwipeToPrev && (u.isHorizontal() && 37 === b || !u.isHorizontal() && 38 === b)) return !1;
                if (!(a.shiftKey || a.altKey || a.ctrlKey || a.metaKey || document.activeElement && document.activeElement.nodeName && ("input" === document.activeElement.nodeName.toLowerCase() || "textarea" === document.activeElement.nodeName.toLowerCase()))) {
                    if (37 === b || 39 === b || 38 === b || 40 === b) {
                        var c = !1;
                        if (u.container.parents(".swiper-slide").length > 0 && 0 === u.container.parents(".swiper-slide-active").length) return;
                        var d = {
                                left: window.pageXOffset,
                                top: window.pageYOffset
                            },
                            e = window.innerWidth,
                            f = window.innerHeight,
                            g = u.container.offset();
                        u.rtl && (g.left = g.left - u.container[0].scrollLeft);
                        for (var h = [
                                [g.left, g.top],
                                [g.left + u.width, g.top],
                                [g.left, g.top + u.height],
                                [g.left + u.width, g.top + u.height]
                            ], i = 0; i < h.length; i++) {
                            var j = h[i];
                            j[0] >= d.left && j[0] <= d.left + e && j[1] >= d.top && j[1] <= d.top + f && (c = !0)
                        }
                        if (!c) return
                    }
                    u.isHorizontal() ? ((37 === b || 39 === b) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1), (39 === b && !u.rtl || 37 === b && u.rtl) && u.slideNext(), (37 === b && !u.rtl || 39 === b && u.rtl) && u.slidePrev()) : ((38 === b || 40 === b) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1), 40 === b && u.slideNext(), 38 === b && u.slidePrev())
                }
            }

            function k(a) {
                a.originalEvent && (a = a.originalEvent);
                var b = u.mousewheel.event,
                    c = 0,
                    d = u.rtl ? -1 : 1;
                if ("mousewheel" === b)
                    if (u.params.mousewheelForceToAxis)
                        if (u.isHorizontal()) {
                            if (!(Math.abs(a.wheelDeltaX) > Math.abs(a.wheelDeltaY))) return;
                            c = a.wheelDeltaX * d
                        } else {
                            if (!(Math.abs(a.wheelDeltaY) > Math.abs(a.wheelDeltaX))) return;
                            c = a.wheelDeltaY
                        }
                else c = Math.abs(a.wheelDeltaX) > Math.abs(a.wheelDeltaY) ? -a.wheelDeltaX * d : -a.wheelDeltaY;
                else if ("DOMMouseScroll" === b) c = -a.detail;
                else if ("wheel" === b)
                    if (u.params.mousewheelForceToAxis)
                        if (u.isHorizontal()) {
                            if (!(Math.abs(a.deltaX) > Math.abs(a.deltaY))) return;
                            c = -a.deltaX * d
                        } else {
                            if (!(Math.abs(a.deltaY) > Math.abs(a.deltaX))) return;
                            c = -a.deltaY
                        }
                else c = Math.abs(a.deltaX) > Math.abs(a.deltaY) ? -a.deltaX * d : -a.deltaY;
                if (0 !== c) {
                    if (u.params.mousewheelInvert && (c = -c), u.params.freeMode) {
                        var e = u.getWrapperTranslate() + c * u.params.mousewheelSensitivity,
                            f = u.isBeginning,
                            g = u.isEnd;
                        if (e >= u.minTranslate() && (e = u.minTranslate()), e <= u.maxTranslate() && (e = u.maxTranslate()), u.setWrapperTransition(0), u.setWrapperTranslate(e), u.updateProgress(), u.updateActiveIndex(), (!f && u.isBeginning || !g && u.isEnd) && u.updateClasses(), u.params.freeModeSticky ? (clearTimeout(u.mousewheel.timeout), u.mousewheel.timeout = setTimeout(function() {
                                u.slideReset()
                            }, 300)) : u.params.lazyLoading && u.lazy && u.lazy.load(), 0 === e || e === u.maxTranslate()) return
                    } else {
                        if ((new window.Date).getTime() - u.mousewheel.lastScrollTime > 60)
                            if (0 > c)
                                if (u.isEnd && !u.params.loop || u.animating) {
                                    if (u.params.mousewheelReleaseOnEdges) return !0
                                } else u.slideNext();
                        else if (u.isBeginning && !u.params.loop || u.animating) {
                            if (u.params.mousewheelReleaseOnEdges) return !0
                        } else u.slidePrev();
                        u.mousewheel.lastScrollTime = (new window.Date).getTime()
                    }
                    return u.params.autoplay && u.stopAutoplay(), a.preventDefault ? a.preventDefault() : a.returnValue = !1, !1
                }
            }

            function l(a, c) {
                a = b(a);
                var d, e, f, g = u.rtl ? -1 : 1;
                d = a.attr("data-swiper-parallax") || "0", e = a.attr("data-swiper-parallax-x"), f = a.attr("data-swiper-parallax-y"), e || f ? (e = e || "0", f = f || "0") : u.isHorizontal() ? (e = d, f = "0") : (f = d, e = "0"), e = e.indexOf("%") >= 0 ? parseInt(e, 10) * c * g + "%" : e * c * g + "px", f = f.indexOf("%") >= 0 ? parseInt(f, 10) * c + "%" : f * c + "px", a.transform("translate3d(" + e + ", " + f + ",0px)")
            }

            function m(a) {
                return 0 !== a.indexOf("on") && (a = a[0] !== a[0].toUpperCase() ? "on" + a[0].toUpperCase() + a.substring(1) : "on" + a), a
            }
            if (!(this instanceof c)) return new c(a, e);
            var n = {
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
                o = e && e.virtualTranslate;
            e = e || {};
            var p = {};
            for (var q in e)
                if ("object" != typeof e[q] || null === e[q] || e[q].nodeType || e[q] === window || e[q] === document || "undefined" != typeof d && e[q] instanceof d || "undefined" != typeof jQuery && e[q] instanceof jQuery) p[q] = e[q];
                else {
                    p[q] = {};
                    for (var r in e[q]) p[q][r] = e[q][r]
                }
            for (var s in n)
                if ("undefined" == typeof e[s]) e[s] = n[s];
                else if ("object" == typeof e[s])
                for (var t in n[s]) "undefined" == typeof e[s][t] && (e[s][t] = n[s][t]);
            var u = this;
            if (u.params = e, u.originalParams = p, u.classNames = [], "undefined" != typeof b && "undefined" != typeof d && (b = d), ("undefined" != typeof b || (b = "undefined" == typeof d ? window.Dom7 || window.Zepto || window.jQuery : d)) && (u.$ = b, u.currentBreakpoint = void 0, u.getActiveBreakpoint = function() {
                    if (!u.params.breakpoints) return !1;
                    var a, b = !1,
                        c = [];
                    for (a in u.params.breakpoints) u.params.breakpoints.hasOwnProperty(a) && c.push(a);
                    c.sort(function(a, b) {
                        return parseInt(a, 10) > parseInt(b, 10)
                    });
                    for (var d = 0; d < c.length; d++) a = c[d], a >= window.innerWidth && !b && (b = a);
                    return b || "max"
                }, u.setBreakpoint = function() {
                    var a = u.getActiveBreakpoint();
                    if (a && u.currentBreakpoint !== a) {
                        var b = a in u.params.breakpoints ? u.params.breakpoints[a] : u.originalParams,
                            c = u.params.loop && b.slidesPerView !== u.params.slidesPerView;
                        for (var d in b) u.params[d] = b[d];
                        u.currentBreakpoint = a, c && u.destroyLoop && u.reLoop(!0)
                    }
                }, u.params.breakpoints && u.setBreakpoint(), u.container = b(a), 0 !== u.container.length)) {
                if (u.container.length > 1) {
                    var v = [];
                    return u.container.each(function() {
                        v.push(new c(this, e))
                    }), v
                }
                u.container[0].swiper = u, u.container.data("swiper", u), u.classNames.push("swiper-container-" + u.params.direction), u.params.freeMode && u.classNames.push("swiper-container-free-mode"), u.support.flexbox || (u.classNames.push("swiper-container-no-flexbox"), u.params.slidesPerColumn = 1), u.params.autoHeight && u.classNames.push("swiper-container-autoheight"), (u.params.parallax || u.params.watchSlidesVisibility) && (u.params.watchSlidesProgress = !0), ["cube", "coverflow", "flip"].indexOf(u.params.effect) >= 0 && (u.support.transforms3d ? (u.params.watchSlidesProgress = !0, u.classNames.push("swiper-container-3d")) : u.params.effect = "slide"), "slide" !== u.params.effect && u.classNames.push("swiper-container-" + u.params.effect), "cube" === u.params.effect && (u.params.resistanceRatio = 0, u.params.slidesPerView = 1, u.params.slidesPerColumn = 1, u.params.slidesPerGroup = 1, u.params.centeredSlides = !1, u.params.spaceBetween = 0, u.params.virtualTranslate = !0, u.params.setWrapperSize = !1), ("fade" === u.params.effect || "flip" === u.params.effect) && (u.params.slidesPerView = 1, u.params.slidesPerColumn = 1, u.params.slidesPerGroup = 1, u.params.watchSlidesProgress = !0, u.params.spaceBetween = 0, u.params.setWrapperSize = !1, "undefined" == typeof o && (u.params.virtualTranslate = !0)), u.params.grabCursor && u.support.touch && (u.params.grabCursor = !1), u.wrapper = u.container.children("." + u.params.wrapperClass), u.params.pagination && (u.paginationContainer = b(u.params.pagination), u.params.uniqueNavElements && "string" == typeof u.params.pagination && u.paginationContainer.length > 1 && 1 === u.container.find(u.params.pagination).length && (u.paginationContainer = u.container.find(u.params.pagination)), "bullets" === u.params.paginationType && u.params.paginationClickable ? u.paginationContainer.addClass("swiper-pagination-clickable") : u.params.paginationClickable = !1, u.paginationContainer.addClass("swiper-pagination-" + u.params.paginationType)), (u.params.nextButton || u.params.prevButton) && (u.params.nextButton && (u.nextButton = b(u.params.nextButton), u.params.uniqueNavElements && "string" == typeof u.params.nextButton && u.nextButton.length > 1 && 1 === u.container.find(u.params.nextButton).length && (u.nextButton = u.container.find(u.params.nextButton))), u.params.prevButton && (u.prevButton = b(u.params.prevButton), u.params.uniqueNavElements && "string" == typeof u.params.prevButton && u.prevButton.length > 1 && 1 === u.container.find(u.params.prevButton).length && (u.prevButton = u.container.find(u.params.prevButton)))), u.isHorizontal = function() {
                    return "horizontal" === u.params.direction
                }, u.rtl = u.isHorizontal() && ("rtl" === u.container[0].dir.toLowerCase() || "rtl" === u.container.css("direction")), u.rtl && u.classNames.push("swiper-container-rtl"), u.rtl && (u.wrongRTL = "-webkit-box" === u.wrapper.css("display")), u.params.slidesPerColumn > 1 && u.classNames.push("swiper-container-multirow"), u.device.android && u.classNames.push("swiper-container-android"), u.container.addClass(u.classNames.join(" ")), u.translate = 0, u.progress = 0, u.velocity = 0, u.lockSwipeToNext = function() {
                    u.params.allowSwipeToNext = !1
                }, u.lockSwipeToPrev = function() {
                    u.params.allowSwipeToPrev = !1
                }, u.lockSwipes = function() {
                    u.params.allowSwipeToNext = u.params.allowSwipeToPrev = !1
                }, u.unlockSwipeToNext = function() {
                    u.params.allowSwipeToNext = !0
                }, u.unlockSwipeToPrev = function() {
                    u.params.allowSwipeToPrev = !0
                }, u.unlockSwipes = function() {
                    u.params.allowSwipeToNext = u.params.allowSwipeToPrev = !0
                }, u.params.grabCursor && (u.container[0].style.cursor = "move", u.container[0].style.cursor = "-webkit-grab", u.container[0].style.cursor = "-moz-grab", u.container[0].style.cursor = "grab"), u.imagesToLoad = [], u.imagesLoaded = 0, u.loadImage = function(a, b, c, d, e) {
                    function f() {
                        e && e()
                    }
                    var g;
                    a.complete && d ? f() : b ? (g = new window.Image, g.onload = f, g.onerror = f, c && (g.srcset = c), b && (g.src = b)) : f()
                }, u.preloadImages = function() {
                    function a() {
                        "undefined" != typeof u && null !== u && (void 0 !== u.imagesLoaded && u.imagesLoaded++, u.imagesLoaded === u.imagesToLoad.length && (u.params.updateOnImagesReady && u.update(), u.emit("onImagesReady", u)))
                    }
                    u.imagesToLoad = u.container.find("img");
                    for (var b = 0; b < u.imagesToLoad.length; b++) u.loadImage(u.imagesToLoad[b], u.imagesToLoad[b].currentSrc || u.imagesToLoad[b].getAttribute("src"), u.imagesToLoad[b].srcset || u.imagesToLoad[b].getAttribute("srcset"), !0, a)
                }, u.autoplayTimeoutId = void 0, u.autoplaying = !1, u.autoplayPaused = !1, u.startAutoplay = function() {
                    return "undefined" == typeof u.autoplayTimeoutId && (!!u.params.autoplay && (!u.autoplaying && (u.autoplaying = !0, u.emit("onAutoplayStart", u), void g())))
                }, u.stopAutoplay = function(a) {
                    u.autoplayTimeoutId && (u.autoplayTimeoutId && clearTimeout(u.autoplayTimeoutId), u.autoplaying = !1, u.autoplayTimeoutId = void 0, u.emit("onAutoplayStop", u))
                }, u.pauseAutoplay = function(a) {
                    u.autoplayPaused || (u.autoplayTimeoutId && clearTimeout(u.autoplayTimeoutId), u.autoplayPaused = !0, 0 === a ? (u.autoplayPaused = !1, g()) : u.wrapper.transitionEnd(function() {
                        u && (u.autoplayPaused = !1, u.autoplaying ? g() : u.stopAutoplay())
                    }))
                }, u.minTranslate = function() {
                    return -u.snapGrid[0]
                }, u.maxTranslate = function() {
                    return -u.snapGrid[u.snapGrid.length - 1]
                }, u.updateAutoHeight = function() {
                    var a = u.slides.eq(u.activeIndex)[0];
                    if ("undefined" != typeof a) {
                        var b = a.offsetHeight;
                        b && u.wrapper.css("height", b + "px")
                    }
                }, u.updateContainerSize = function() {
                    var a, b;
                    a = "undefined" != typeof u.params.width ? u.params.width : u.container[0].clientWidth, b = "undefined" != typeof u.params.height ? u.params.height : u.container[0].clientHeight, 0 === a && u.isHorizontal() || 0 === b && !u.isHorizontal() || (a = a - parseInt(u.container.css("padding-left"), 10) - parseInt(u.container.css("padding-right"), 10), b = b - parseInt(u.container.css("padding-top"), 10) - parseInt(u.container.css("padding-bottom"), 10), u.width = a, u.height = b, u.size = u.isHorizontal() ? u.width : u.height)
                }, u.updateSlidesSize = function() {
                    u.slides = u.wrapper.children("." + u.params.slideClass), u.snapGrid = [], u.slidesGrid = [], u.slidesSizesGrid = [];
                    var a, b = u.params.spaceBetween,
                        c = -u.params.slidesOffsetBefore,
                        d = 0,
                        e = 0;
                    if ("undefined" != typeof u.size) {
                        "string" == typeof b && b.indexOf("%") >= 0 && (b = parseFloat(b.replace("%", "")) / 100 * u.size), u.virtualSize = -b, u.rtl ? u.slides.css({
                            marginLeft: "",
                            marginTop: ""
                        }) : u.slides.css({
                            marginRight: "",
                            marginBottom: ""
                        });
                        var g;
                        u.params.slidesPerColumn > 1 && (g = Math.floor(u.slides.length / u.params.slidesPerColumn) === u.slides.length / u.params.slidesPerColumn ? u.slides.length : Math.ceil(u.slides.length / u.params.slidesPerColumn) * u.params.slidesPerColumn, "auto" !== u.params.slidesPerView && "row" === u.params.slidesPerColumnFill && (g = Math.max(g, u.params.slidesPerView * u.params.slidesPerColumn)));
                        var h, i = u.params.slidesPerColumn,
                            j = g / i,
                            k = j - (u.params.slidesPerColumn * j - u.slides.length);
                        for (a = 0; a < u.slides.length; a++) {
                            h = 0;
                            var l = u.slides.eq(a);
                            if (u.params.slidesPerColumn > 1) {
                                var m, n, o;
                                "column" === u.params.slidesPerColumnFill ? (n = Math.floor(a / i), o = a - n * i, (n > k || n === k && o === i - 1) && ++o >= i && (o = 0, n++), m = n + o * g / i, l.css({
                                    "-webkit-box-ordinal-group": m,
                                    "-moz-box-ordinal-group": m,
                                    "-ms-flex-order": m,
                                    "-webkit-order": m,
                                    order: m
                                })) : (o = Math.floor(a / j), n = a - o * j), l.css({
                                    "margin-top": 0 !== o && u.params.spaceBetween && u.params.spaceBetween + "px"
                                }).attr("data-swiper-column", n).attr("data-swiper-row", o)
                            }
                            "none" !== l.css("display") && ("auto" === u.params.slidesPerView ? (h = u.isHorizontal() ? l.outerWidth(!0) : l.outerHeight(!0), u.params.roundLengths && (h = f(h))) : (h = (u.size - (u.params.slidesPerView - 1) * b) / u.params.slidesPerView, u.params.roundLengths && (h = f(h)), u.isHorizontal() ? u.slides[a].style.width = h + "px" : u.slides[a].style.height = h + "px"), u.slides[a].swiperSlideSize = h, u.slidesSizesGrid.push(h), u.params.centeredSlides ? (c = c + h / 2 + d / 2 + b, 0 === a && (c = c - u.size / 2 - b), Math.abs(c) < .001 && (c = 0), e % u.params.slidesPerGroup === 0 && u.snapGrid.push(c), u.slidesGrid.push(c)) : (e % u.params.slidesPerGroup === 0 && u.snapGrid.push(c), u.slidesGrid.push(c), c = c + h + b), u.virtualSize += h + b, d = h, e++)
                        }
                        u.virtualSize = Math.max(u.virtualSize, u.size) + u.params.slidesOffsetAfter;
                        var p;
                        if (u.rtl && u.wrongRTL && ("slide" === u.params.effect || "coverflow" === u.params.effect) && u.wrapper.css({
                                width: u.virtualSize + u.params.spaceBetween + "px"
                            }), (!u.support.flexbox || u.params.setWrapperSize) && (u.isHorizontal() ? u.wrapper.css({
                                width: u.virtualSize + u.params.spaceBetween + "px"
                            }) : u.wrapper.css({
                                height: u.virtualSize + u.params.spaceBetween + "px"
                            })), u.params.slidesPerColumn > 1 && (u.virtualSize = (h + u.params.spaceBetween) * g, u.virtualSize = Math.ceil(u.virtualSize / u.params.slidesPerColumn) - u.params.spaceBetween, u.wrapper.css({
                                width: u.virtualSize + u.params.spaceBetween + "px"
                            }), u.params.centeredSlides)) {
                            for (p = [], a = 0; a < u.snapGrid.length; a++) u.snapGrid[a] < u.virtualSize + u.snapGrid[0] && p.push(u.snapGrid[a]);
                            u.snapGrid = p
                        }
                        if (!u.params.centeredSlides) {
                            for (p = [], a = 0; a < u.snapGrid.length; a++) u.snapGrid[a] <= u.virtualSize - u.size && p.push(u.snapGrid[a]);
                            u.snapGrid = p, Math.floor(u.virtualSize - u.size) - Math.floor(u.snapGrid[u.snapGrid.length - 1]) > 1 && u.snapGrid.push(u.virtualSize - u.size)
                        }
                        0 === u.snapGrid.length && (u.snapGrid = [0]), 0 !== u.params.spaceBetween && (u.isHorizontal() ? u.rtl ? u.slides.css({
                            marginLeft: b + "px"
                        }) : u.slides.css({
                            marginRight: b + "px"
                        }) : u.slides.css({
                            marginBottom: b + "px"
                        })), u.params.watchSlidesProgress && u.updateSlidesOffset()
                    }
                }, u.updateSlidesOffset = function() {
                    for (var a = 0; a < u.slides.length; a++) u.slides[a].swiperSlideOffset = u.isHorizontal() ? u.slides[a].offsetLeft : u.slides[a].offsetTop
                }, u.updateSlidesProgress = function(a) {
                    if ("undefined" == typeof a && (a = u.translate || 0), 0 !== u.slides.length) {
                        "undefined" == typeof u.slides[0].swiperSlideOffset && u.updateSlidesOffset();
                        var b = -a;
                        u.rtl && (b = a), u.slides.removeClass(u.params.slideVisibleClass);
                        for (var c = 0; c < u.slides.length; c++) {
                            var d = u.slides[c],
                                e = (b - d.swiperSlideOffset) / (d.swiperSlideSize + u.params.spaceBetween);
                            if (u.params.watchSlidesVisibility) {
                                var f = -(b - d.swiperSlideOffset),
                                    g = f + u.slidesSizesGrid[c],
                                    h = f >= 0 && f < u.size || g > 0 && g <= u.size || 0 >= f && g >= u.size;
                                h && u.slides.eq(c).addClass(u.params.slideVisibleClass)
                            }
                            d.progress = u.rtl ? -e : e
                        }
                    }
                }, u.updateProgress = function(a) {
                    "undefined" == typeof a && (a = u.translate || 0);
                    var b = u.maxTranslate() - u.minTranslate(),
                        c = u.isBeginning,
                        d = u.isEnd;
                    0 === b ? (u.progress = 0, u.isBeginning = u.isEnd = !0) : (u.progress = (a - u.minTranslate()) / b, u.isBeginning = u.progress <= 0, u.isEnd = u.progress >= 1), u.isBeginning && !c && u.emit("onReachBeginning", u), u.isEnd && !d && u.emit("onReachEnd", u), u.params.watchSlidesProgress && u.updateSlidesProgress(a), u.emit("onProgress", u, u.progress)
                }, u.updateActiveIndex = function() {
                    var a, b, c, d = u.rtl ? u.translate : -u.translate;
                    for (b = 0; b < u.slidesGrid.length; b++) "undefined" != typeof u.slidesGrid[b + 1] ? d >= u.slidesGrid[b] && d < u.slidesGrid[b + 1] - (u.slidesGrid[b + 1] - u.slidesGrid[b]) / 2 ? a = b : d >= u.slidesGrid[b] && d < u.slidesGrid[b + 1] && (a = b + 1) : d >= u.slidesGrid[b] && (a = b);
                    (0 > a || "undefined" == typeof a) && (a = 0), c = Math.floor(a / u.params.slidesPerGroup), c >= u.snapGrid.length && (c = u.snapGrid.length - 1), a !== u.activeIndex && (u.snapIndex = c, u.previousIndex = u.activeIndex, u.activeIndex = a, u.updateClasses())
                }, u.updateClasses = function() {
                    u.slides.removeClass(u.params.slideActiveClass + " " + u.params.slideNextClass + " " + u.params.slidePrevClass);
                    var a = u.slides.eq(u.activeIndex);
                    a.addClass(u.params.slideActiveClass);
                    var c = a.next("." + u.params.slideClass).addClass(u.params.slideNextClass);
                    u.params.loop && 0 === c.length && u.slides.eq(0).addClass(u.params.slideNextClass);
                    var d = a.prev("." + u.params.slideClass).addClass(u.params.slidePrevClass);
                    if (u.params.loop && 0 === d.length && u.slides.eq(-1).addClass(u.params.slidePrevClass), u.paginationContainer && u.paginationContainer.length > 0) {
                        var e, f = u.params.loop ? Math.ceil((u.slides.length - 2 * u.loopedSlides) / u.params.slidesPerGroup) : u.snapGrid.length;
                        if (u.params.loop ? (e = Math.ceil((u.activeIndex - u.loopedSlides) / u.params.slidesPerGroup), e > u.slides.length - 1 - 2 * u.loopedSlides && (e -= u.slides.length - 2 * u.loopedSlides), e > f - 1 && (e -= f), 0 > e && "bullets" !== u.params.paginationType && (e = f + e)) : e = "undefined" != typeof u.snapIndex ? u.snapIndex : u.activeIndex || 0, "bullets" === u.params.paginationType && u.bullets && u.bullets.length > 0 && (u.bullets.removeClass(u.params.bulletActiveClass), u.paginationContainer.length > 1 ? u.bullets.each(function() {
                                b(this).index() === e && b(this).addClass(u.params.bulletActiveClass)
                            }) : u.bullets.eq(e).addClass(u.params.bulletActiveClass)), "fraction" === u.params.paginationType && (u.paginationContainer.find("." + u.params.paginationCurrentClass).text(e + 1), u.paginationContainer.find("." + u.params.paginationTotalClass).text(f)), "progress" === u.params.paginationType) {
                            var g = (e + 1) / f,
                                h = g,
                                i = 1;
                            u.isHorizontal() || (i = g, h = 1), u.paginationContainer.find("." + u.params.paginationProgressbarClass).transform("translate3d(0,0,0) scaleX(" + h + ") scaleY(" + i + ")").transition(u.params.speed)
                        }
                        "custom" === u.params.paginationType && u.params.paginationCustomRender && (u.paginationContainer.html(u.params.paginationCustomRender(u, e + 1, f)), u.emit("onPaginationRendered", u, u.paginationContainer[0]))
                    }
                    u.params.loop || (u.params.prevButton && u.prevButton && u.prevButton.length > 0 && (u.isBeginning ? (u.prevButton.addClass(u.params.buttonDisabledClass), u.params.a11y && u.a11y && u.a11y.disable(u.prevButton)) : (u.prevButton.removeClass(u.params.buttonDisabledClass), u.params.a11y && u.a11y && u.a11y.enable(u.prevButton))), u.params.nextButton && u.nextButton && u.nextButton.length > 0 && (u.isEnd ? (u.nextButton.addClass(u.params.buttonDisabledClass), u.params.a11y && u.a11y && u.a11y.disable(u.nextButton)) : (u.nextButton.removeClass(u.params.buttonDisabledClass), u.params.a11y && u.a11y && u.a11y.enable(u.nextButton))))
                }, u.updatePagination = function() {
                    if (u.params.pagination && u.paginationContainer && u.paginationContainer.length > 0) {
                        var a = "";
                        if ("bullets" === u.params.paginationType) {
                            for (var b = u.params.loop ? Math.ceil((u.slides.length - 2 * u.loopedSlides) / u.params.slidesPerGroup) : u.snapGrid.length, c = 0; b > c; c++) a += u.params.paginationBulletRender ? u.params.paginationBulletRender(c, u.params.bulletClass) : "<" + u.params.paginationElement + ' class="' + u.params.bulletClass + '"></' + u.params.paginationElement + ">";
                            u.paginationContainer.html(a), u.bullets = u.paginationContainer.find("." + u.params.bulletClass), u.params.paginationClickable && u.params.a11y && u.a11y && u.a11y.initPagination()
                        }
                        "fraction" === u.params.paginationType && (a = u.params.paginationFractionRender ? u.params.paginationFractionRender(u, u.params.paginationCurrentClass, u.params.paginationTotalClass) : '<span class="' + u.params.paginationCurrentClass + '"></span> / <span class="' + u.params.paginationTotalClass + '"></span>', u.paginationContainer.html(a)), "progress" === u.params.paginationType && (a = u.params.paginationProgressRender ? u.params.paginationProgressRender(u, u.params.paginationProgressbarClass) : '<span class="' + u.params.paginationProgressbarClass + '"></span>', u.paginationContainer.html(a)), "custom" !== u.params.paginationType && u.emit("onPaginationRendered", u, u.paginationContainer[0])
                    }
                }, u.update = function(a) {
                    function b() {
                        d = Math.min(Math.max(u.translate, u.maxTranslate()), u.minTranslate()), u.setWrapperTranslate(d), u.updateActiveIndex(), u.updateClasses()
                    }
                    if (u.updateContainerSize(), u.updateSlidesSize(), u.updateProgress(), u.updatePagination(), u.updateClasses(), u.params.scrollbar && u.scrollbar && u.scrollbar.set(), a) {
                        var c, d;
                        u.controller && u.controller.spline && (u.controller.spline = void 0), u.params.freeMode ? (b(), u.params.autoHeight && u.updateAutoHeight()) : (c = ("auto" === u.params.slidesPerView || u.params.slidesPerView > 1) && u.isEnd && !u.params.centeredSlides ? u.slideTo(u.slides.length - 1, 0, !1, !0) : u.slideTo(u.activeIndex, 0, !1, !0), c || b())
                    } else u.params.autoHeight && u.updateAutoHeight()
                }, u.onResize = function(a) {
                    u.params.breakpoints && u.setBreakpoint();
                    var b = u.params.allowSwipeToPrev,
                        c = u.params.allowSwipeToNext;
                    u.params.allowSwipeToPrev = u.params.allowSwipeToNext = !0, u.updateContainerSize(), u.updateSlidesSize(), ("auto" === u.params.slidesPerView || u.params.freeMode || a) && u.updatePagination(), u.params.scrollbar && u.scrollbar && u.scrollbar.set(), u.controller && u.controller.spline && (u.controller.spline = void 0);
                    var d = !1;
                    if (u.params.freeMode) {
                        var e = Math.min(Math.max(u.translate, u.maxTranslate()), u.minTranslate());
                        u.setWrapperTranslate(e), u.updateActiveIndex(), u.updateClasses(), u.params.autoHeight && u.updateAutoHeight()
                    } else u.updateClasses(), d = ("auto" === u.params.slidesPerView || u.params.slidesPerView > 1) && u.isEnd && !u.params.centeredSlides ? u.slideTo(u.slides.length - 1, 0, !1, !0) : u.slideTo(u.activeIndex, 0, !1, !0);
                    u.params.lazyLoading && !d && u.lazy && u.lazy.load(), u.params.allowSwipeToPrev = b, u.params.allowSwipeToNext = c
                };
                var w = ["mousedown", "mousemove", "mouseup"];
                window.navigator.pointerEnabled ? w = ["pointerdown", "pointermove", "pointerup"] : window.navigator.msPointerEnabled && (w = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]), u.touchEvents = {
                    start: u.support.touch || !u.params.simulateTouch ? "touchstart" : w[0],
                    move: u.support.touch || !u.params.simulateTouch ? "touchmove" : w[1],
                    end: u.support.touch || !u.params.simulateTouch ? "touchend" : w[2]
                }, (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) && ("container" === u.params.touchEventsTarget ? u.container : u.wrapper).addClass("swiper-wp8-" + u.params.direction), u.initEvents = function(a) {
                    var b = a ? "off" : "on",
                        c = a ? "removeEventListener" : "addEventListener",
                        d = "container" === u.params.touchEventsTarget ? u.container[0] : u.wrapper[0],
                        f = u.support.touch ? d : document,
                        g = !!u.params.nested;
                    u.browser.ie ? (d[c](u.touchEvents.start, u.onTouchStart, !1), f[c](u.touchEvents.move, u.onTouchMove, g), f[c](u.touchEvents.end, u.onTouchEnd, !1)) : (u.support.touch && (d[c](u.touchEvents.start, u.onTouchStart, !1), d[c](u.touchEvents.move, u.onTouchMove, g), d[c](u.touchEvents.end, u.onTouchEnd, !1)), !e.simulateTouch || u.device.ios || u.device.android || (d[c]("mousedown", u.onTouchStart, !1), document[c]("mousemove", u.onTouchMove, g), document[c]("mouseup", u.onTouchEnd, !1))), window[c]("resize", u.onResize), u.params.nextButton && u.nextButton && u.nextButton.length > 0 && (u.nextButton[b]("click", u.onClickNext), u.params.a11y && u.a11y && u.nextButton[b]("keydown", u.a11y.onEnterKey)), u.params.prevButton && u.prevButton && u.prevButton.length > 0 && (u.prevButton[b]("click", u.onClickPrev), u.params.a11y && u.a11y && u.prevButton[b]("keydown", u.a11y.onEnterKey)), u.params.pagination && u.params.paginationClickable && (u.paginationContainer[b]("click", "." + u.params.bulletClass, u.onClickIndex), u.params.a11y && u.a11y && u.paginationContainer[b]("keydown", "." + u.params.bulletClass, u.a11y.onEnterKey)), (u.params.preventClicks || u.params.preventClicksPropagation) && d[c]("click", u.preventClicks, !0)
                }, u.attachEvents = function() {
                    u.initEvents()
                }, u.detachEvents = function() {
                    u.initEvents(!0)
                }, u.allowClick = !0, u.preventClicks = function(a) {
                    u.allowClick || (u.params.preventClicks && a.preventDefault(), u.params.preventClicksPropagation && u.animating && (a.stopPropagation(), a.stopImmediatePropagation()))
                }, u.onClickNext = function(a) {
                    a.preventDefault(), (!u.isEnd || u.params.loop) && u.slideNext()
                }, u.onClickPrev = function(a) {
                    a.preventDefault(), (!u.isBeginning || u.params.loop) && u.slidePrev()
                }, u.onClickIndex = function(a) {
                    a.preventDefault();
                    var c = b(this).index() * u.params.slidesPerGroup;
                    u.params.loop && (c += u.loopedSlides), u.slideTo(c)
                }, u.updateClickedSlide = function(a) {
                    var c = h(a, "." + u.params.slideClass),
                        d = !1;
                    if (c)
                        for (var e = 0; e < u.slides.length; e++) u.slides[e] === c && (d = !0);
                    if (!c || !d) return u.clickedSlide = void 0, void(u.clickedIndex = void 0);
                    if (u.clickedSlide = c, u.clickedIndex = b(c).index(), u.params.slideToClickedSlide && void 0 !== u.clickedIndex && u.clickedIndex !== u.activeIndex) {
                        var f, g = u.clickedIndex;
                        if (u.params.loop) {
                            if (u.animating) return;
                            f = b(u.clickedSlide).attr("data-swiper-slide-index"), u.params.centeredSlides ? g < u.loopedSlides - u.params.slidesPerView / 2 || g > u.slides.length - u.loopedSlides + u.params.slidesPerView / 2 ? (u.fixLoop(), g = u.wrapper.children("." + u.params.slideClass + '[data-swiper-slide-index="' + f + '"]:not(.swiper-slide-duplicate)').eq(0).index(), setTimeout(function() {
                                u.slideTo(g)
                            }, 0)) : u.slideTo(g) : g > u.slides.length - u.params.slidesPerView ? (u.fixLoop(), g = u.wrapper.children("." + u.params.slideClass + '[data-swiper-slide-index="' + f + '"]:not(.swiper-slide-duplicate)').eq(0).index(), setTimeout(function() {
                                u.slideTo(g)
                            }, 0)) : u.slideTo(g)
                        } else u.slideTo(g)
                    }
                };
                var x, y, z, A, B, C, D, E, F, G, H = "input, select, textarea, button",
                    I = Date.now(),
                    J = [];
                u.animating = !1, u.touches = {
                    startX: 0,
                    startY: 0,
                    currentX: 0,
                    currentY: 0,
                    diff: 0
                };
                var K, L;
                if (u.onTouchStart = function(a) {
                        if (a.originalEvent && (a = a.originalEvent), K = "touchstart" === a.type, K || !("which" in a) || 3 !== a.which) {
                            if (u.params.noSwiping && h(a, "." + u.params.noSwipingClass)) return void(u.allowClick = !0);
                            if (!u.params.swipeHandler || h(a, u.params.swipeHandler)) {
                                var c = u.touches.currentX = "touchstart" === a.type ? a.targetTouches[0].pageX : a.pageX,
                                    d = u.touches.currentY = "touchstart" === a.type ? a.targetTouches[0].pageY : a.pageY;
                                if (!(u.device.ios && u.params.iOSEdgeSwipeDetection && c <= u.params.iOSEdgeSwipeThreshold)) {
                                    if (x = !0, y = !1, z = !0, B = void 0, L = void 0, u.touches.startX = c, u.touches.startY = d, A = Date.now(), u.allowClick = !0, u.updateContainerSize(), u.swipeDirection = void 0, u.params.threshold > 0 && (E = !1), "touchstart" !== a.type) {
                                        var e = !0;
                                        b(a.target).is(H) && (e = !1), document.activeElement && b(document.activeElement).is(H) && document.activeElement.blur(), e && a.preventDefault()
                                    }
                                    u.emit("onTouchStart", u, a)
                                }
                            }
                        }
                    }, u.onTouchMove = function(a) {
                        if (a.originalEvent && (a = a.originalEvent), !K || "mousemove" !== a.type) {
                            if (a.preventedByNestedSwiper) return u.touches.startX = "touchmove" === a.type ? a.targetTouches[0].pageX : a.pageX, void(u.touches.startY = "touchmove" === a.type ? a.targetTouches[0].pageY : a.pageY);
                            if (u.params.onlyExternal) return u.allowClick = !1, void(x && (u.touches.startX = u.touches.currentX = "touchmove" === a.type ? a.targetTouches[0].pageX : a.pageX, u.touches.startY = u.touches.currentY = "touchmove" === a.type ? a.targetTouches[0].pageY : a.pageY, A = Date.now()));
                            if (K && document.activeElement && a.target === document.activeElement && b(a.target).is(H)) return y = !0, void(u.allowClick = !1);
                            if (z && u.emit("onTouchMove", u, a), !(a.targetTouches && a.targetTouches.length > 1)) {
                                if (u.touches.currentX = "touchmove" === a.type ? a.targetTouches[0].pageX : a.pageX, u.touches.currentY = "touchmove" === a.type ? a.targetTouches[0].pageY : a.pageY, "undefined" == typeof B) {
                                    var c = 180 * Math.atan2(Math.abs(u.touches.currentY - u.touches.startY), Math.abs(u.touches.currentX - u.touches.startX)) / Math.PI;
                                    B = u.isHorizontal() ? c > u.params.touchAngle : 90 - c > u.params.touchAngle
                                }
                                if (B && u.emit("onTouchMoveOpposite", u, a), "undefined" == typeof L && u.browser.ieTouch && (u.touches.currentX !== u.touches.startX || u.touches.currentY !== u.touches.startY) && (L = !0), x) {
                                    if (B) return void(x = !1);
                                    if (L || !u.browser.ieTouch) {
                                        u.allowClick = !1, u.emit("onSliderMove", u, a), a.preventDefault(), u.params.touchMoveStopPropagation && !u.params.nested && a.stopPropagation(), y || (e.loop && u.fixLoop(), D = u.getWrapperTranslate(), u.setWrapperTransition(0), u.animating && u.wrapper.trigger("webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd"), u.params.autoplay && u.autoplaying && (u.params.autoplayDisableOnInteraction ? u.stopAutoplay() : u.pauseAutoplay()), G = !1, u.params.grabCursor && (u.container[0].style.cursor = "move", u.container[0].style.cursor = "-webkit-grabbing", u.container[0].style.cursor = "-moz-grabbin", u.container[0].style.cursor = "grabbing")), y = !0;
                                        var d = u.touches.diff = u.isHorizontal() ? u.touches.currentX - u.touches.startX : u.touches.currentY - u.touches.startY;
                                        d *= u.params.touchRatio, u.rtl && (d = -d), u.swipeDirection = d > 0 ? "prev" : "next", C = d + D;
                                        var f = !0;
                                        if (d > 0 && C > u.minTranslate() ? (f = !1, u.params.resistance && (C = u.minTranslate() - 1 + Math.pow(-u.minTranslate() + D + d, u.params.resistanceRatio))) : 0 > d && C < u.maxTranslate() && (f = !1,
                                                u.params.resistance && (C = u.maxTranslate() + 1 - Math.pow(u.maxTranslate() - D - d, u.params.resistanceRatio))), f && (a.preventedByNestedSwiper = !0), !u.params.allowSwipeToNext && "next" === u.swipeDirection && D > C && (C = D), !u.params.allowSwipeToPrev && "prev" === u.swipeDirection && C > D && (C = D), u.params.followFinger) {
                                            if (u.params.threshold > 0) {
                                                if (!(Math.abs(d) > u.params.threshold || E)) return void(C = D);
                                                if (!E) return E = !0, u.touches.startX = u.touches.currentX, u.touches.startY = u.touches.currentY, C = D, void(u.touches.diff = u.isHorizontal() ? u.touches.currentX - u.touches.startX : u.touches.currentY - u.touches.startY)
                                            }(u.params.freeMode || u.params.watchSlidesProgress) && u.updateActiveIndex(), u.params.freeMode && (0 === J.length && J.push({
                                                position: u.touches[u.isHorizontal() ? "startX" : "startY"],
                                                time: A
                                            }), J.push({
                                                position: u.touches[u.isHorizontal() ? "currentX" : "currentY"],
                                                time: (new window.Date).getTime()
                                            })), u.updateProgress(C), u.setWrapperTranslate(C)
                                        }
                                    }
                                }
                            }
                        }
                    }, u.onTouchEnd = function(a) {
                        if (a.originalEvent && (a = a.originalEvent), z && u.emit("onTouchEnd", u, a), z = !1, x) {
                            u.params.grabCursor && y && x && (u.container[0].style.cursor = "move", u.container[0].style.cursor = "-webkit-grab", u.container[0].style.cursor = "-moz-grab", u.container[0].style.cursor = "grab");
                            var c = Date.now(),
                                d = c - A;
                            if (u.allowClick && (u.updateClickedSlide(a), u.emit("onTap", u, a), 300 > d && c - I > 300 && (F && clearTimeout(F), F = setTimeout(function() {
                                    u && (u.params.paginationHide && u.paginationContainer.length > 0 && !b(a.target).hasClass(u.params.bulletClass) && u.paginationContainer.toggleClass(u.params.paginationHiddenClass), u.emit("onClick", u, a))
                                }, 300)), 300 > d && 300 > c - I && (F && clearTimeout(F), u.emit("onDoubleTap", u, a))), I = Date.now(), setTimeout(function() {
                                    u && (u.allowClick = !0)
                                }, 0), !x || !y || !u.swipeDirection || 0 === u.touches.diff || C === D) return void(x = y = !1);
                            x = y = !1;
                            var e;
                            if (e = u.params.followFinger ? u.rtl ? u.translate : -u.translate : -C, u.params.freeMode) {
                                if (e < -u.minTranslate()) return void u.slideTo(u.activeIndex);
                                if (e > -u.maxTranslate()) return void(u.slides.length < u.snapGrid.length ? u.slideTo(u.snapGrid.length - 1) : u.slideTo(u.slides.length - 1));
                                if (u.params.freeModeMomentum) {
                                    if (J.length > 1) {
                                        var f = J.pop(),
                                            g = J.pop(),
                                            h = f.position - g.position,
                                            i = f.time - g.time;
                                        u.velocity = h / i, u.velocity = u.velocity / 2, Math.abs(u.velocity) < u.params.freeModeMinimumVelocity && (u.velocity = 0), (i > 150 || (new window.Date).getTime() - f.time > 300) && (u.velocity = 0)
                                    } else u.velocity = 0;
                                    J.length = 0;
                                    var j = 1e3 * u.params.freeModeMomentumRatio,
                                        k = u.velocity * j,
                                        l = u.translate + k;
                                    u.rtl && (l = -l);
                                    var m, n = !1,
                                        o = 20 * Math.abs(u.velocity) * u.params.freeModeMomentumBounceRatio;
                                    if (l < u.maxTranslate()) u.params.freeModeMomentumBounce ? (l + u.maxTranslate() < -o && (l = u.maxTranslate() - o), m = u.maxTranslate(), n = !0, G = !0) : l = u.maxTranslate();
                                    else if (l > u.minTranslate()) u.params.freeModeMomentumBounce ? (l - u.minTranslate() > o && (l = u.minTranslate() + o), m = u.minTranslate(), n = !0, G = !0) : l = u.minTranslate();
                                    else if (u.params.freeModeSticky) {
                                        var p, q = 0;
                                        for (q = 0; q < u.snapGrid.length; q += 1)
                                            if (u.snapGrid[q] > -l) {
                                                p = q;
                                                break
                                            }
                                        l = Math.abs(u.snapGrid[p] - l) < Math.abs(u.snapGrid[p - 1] - l) || "next" === u.swipeDirection ? u.snapGrid[p] : u.snapGrid[p - 1], u.rtl || (l = -l)
                                    }
                                    if (0 !== u.velocity) j = u.rtl ? Math.abs((-l - u.translate) / u.velocity) : Math.abs((l - u.translate) / u.velocity);
                                    else if (u.params.freeModeSticky) return void u.slideReset();
                                    u.params.freeModeMomentumBounce && n ? (u.updateProgress(m), u.setWrapperTransition(j), u.setWrapperTranslate(l), u.onTransitionStart(), u.animating = !0, u.wrapper.transitionEnd(function() {
                                        u && G && (u.emit("onMomentumBounce", u), u.setWrapperTransition(u.params.speed), u.setWrapperTranslate(m), u.wrapper.transitionEnd(function() {
                                            u && u.onTransitionEnd()
                                        }))
                                    })) : u.velocity ? (u.updateProgress(l), u.setWrapperTransition(j), u.setWrapperTranslate(l), u.onTransitionStart(), u.animating || (u.animating = !0, u.wrapper.transitionEnd(function() {
                                        u && u.onTransitionEnd()
                                    }))) : u.updateProgress(l), u.updateActiveIndex()
                                }
                                return void((!u.params.freeModeMomentum || d >= u.params.longSwipesMs) && (u.updateProgress(), u.updateActiveIndex()))
                            }
                            var r, s = 0,
                                t = u.slidesSizesGrid[0];
                            for (r = 0; r < u.slidesGrid.length; r += u.params.slidesPerGroup) "undefined" != typeof u.slidesGrid[r + u.params.slidesPerGroup] ? e >= u.slidesGrid[r] && e < u.slidesGrid[r + u.params.slidesPerGroup] && (s = r, t = u.slidesGrid[r + u.params.slidesPerGroup] - u.slidesGrid[r]) : e >= u.slidesGrid[r] && (s = r, t = u.slidesGrid[u.slidesGrid.length - 1] - u.slidesGrid[u.slidesGrid.length - 2]);
                            var v = (e - u.slidesGrid[s]) / t;
                            if (d > u.params.longSwipesMs) {
                                if (!u.params.longSwipes) return void u.slideTo(u.activeIndex);
                                "next" === u.swipeDirection && (v >= u.params.longSwipesRatio ? u.slideTo(s + u.params.slidesPerGroup) : u.slideTo(s)), "prev" === u.swipeDirection && (v > 1 - u.params.longSwipesRatio ? u.slideTo(s + u.params.slidesPerGroup) : u.slideTo(s))
                            } else {
                                if (!u.params.shortSwipes) return void u.slideTo(u.activeIndex);
                                "next" === u.swipeDirection && u.slideTo(s + u.params.slidesPerGroup), "prev" === u.swipeDirection && u.slideTo(s)
                            }
                        }
                    }, u._slideTo = function(a, b) {
                        return u.slideTo(a, b, !0, !0)
                    }, u.slideTo = function(a, b, c, d) {
                        "undefined" == typeof c && (c = !0), "undefined" == typeof a && (a = 0), 0 > a && (a = 0), u.snapIndex = Math.floor(a / u.params.slidesPerGroup), u.snapIndex >= u.snapGrid.length && (u.snapIndex = u.snapGrid.length - 1);
                        var e = -u.snapGrid[u.snapIndex];
                        u.params.autoplay && u.autoplaying && (d || !u.params.autoplayDisableOnInteraction ? u.pauseAutoplay(b) : u.stopAutoplay()), u.updateProgress(e);
                        for (var f = 0; f < u.slidesGrid.length; f++) - Math.floor(100 * e) >= Math.floor(100 * u.slidesGrid[f]) && (a = f);
                        return !(!u.params.allowSwipeToNext && e < u.translate && e < u.minTranslate()) && (!(!u.params.allowSwipeToPrev && e > u.translate && e > u.maxTranslate() && (u.activeIndex || 0) !== a) && ("undefined" == typeof b && (b = u.params.speed), u.previousIndex = u.activeIndex || 0, u.activeIndex = a, u.rtl && -e === u.translate || !u.rtl && e === u.translate ? (u.params.autoHeight && u.updateAutoHeight(), u.updateClasses(), "slide" !== u.params.effect && u.setWrapperTranslate(e), !1) : (u.updateClasses(), u.onTransitionStart(c), 0 === b ? (u.setWrapperTranslate(e), u.setWrapperTransition(0), u.onTransitionEnd(c)) : (u.setWrapperTranslate(e), u.setWrapperTransition(b), u.animating || (u.animating = !0, u.wrapper.transitionEnd(function() {
                            u && u.onTransitionEnd(c)
                        }))), !0)))
                    }, u.onTransitionStart = function(a) {
                        "undefined" == typeof a && (a = !0), u.params.autoHeight && u.updateAutoHeight(), u.lazy && u.lazy.onTransitionStart(), a && (u.emit("onTransitionStart", u), u.activeIndex !== u.previousIndex && (u.emit("onSlideChangeStart", u), u.activeIndex > u.previousIndex ? u.emit("onSlideNextStart", u) : u.emit("onSlidePrevStart", u)))
                    }, u.onTransitionEnd = function(a) {
                        u.animating = !1, u.setWrapperTransition(0), "undefined" == typeof a && (a = !0), u.lazy && u.lazy.onTransitionEnd(), a && (u.emit("onTransitionEnd", u), u.activeIndex !== u.previousIndex && (u.emit("onSlideChangeEnd", u), u.activeIndex > u.previousIndex ? u.emit("onSlideNextEnd", u) : u.emit("onSlidePrevEnd", u))), u.params.hashnav && u.hashnav && u.hashnav.setHash()
                    }, u.slideNext = function(a, b, c) {
                        return u.params.loop ? !u.animating && (u.fixLoop(), u.container[0].clientLeft, u.slideTo(u.activeIndex + u.params.slidesPerGroup, b, a, c)) : u.slideTo(u.activeIndex + u.params.slidesPerGroup, b, a, c)
                    }, u._slideNext = function(a) {
                        return u.slideNext(!0, a, !0)
                    }, u.slidePrev = function(a, b, c) {
                        return u.params.loop ? !u.animating && (u.fixLoop(), u.container[0].clientLeft, u.slideTo(u.activeIndex - 1, b, a, c)) : u.slideTo(u.activeIndex - 1, b, a, c)
                    }, u._slidePrev = function(a) {
                        return u.slidePrev(!0, a, !0)
                    }, u.slideReset = function(a, b, c) {
                        return u.slideTo(u.activeIndex, b, a)
                    }, u.setWrapperTransition = function(a, b) {
                        u.wrapper.transition(a), "slide" !== u.params.effect && u.effects[u.params.effect] && u.effects[u.params.effect].setTransition(a), u.params.parallax && u.parallax && u.parallax.setTransition(a), u.params.scrollbar && u.scrollbar && u.scrollbar.setTransition(a), u.params.control && u.controller && u.controller.setTransition(a, b), u.emit("onSetTransition", u, a)
                    }, u.setWrapperTranslate = function(a, b, c) {
                        var d = 0,
                            e = 0,
                            g = 0;
                        u.isHorizontal() ? d = u.rtl ? -a : a : e = a, u.params.roundLengths && (d = f(d), e = f(e)), u.params.virtualTranslate || (u.support.transforms3d ? u.wrapper.transform("translate3d(" + d + "px, " + e + "px, " + g + "px)") : u.wrapper.transform("translate(" + d + "px, " + e + "px)")), u.translate = u.isHorizontal() ? d : e;
                        var h, i = u.maxTranslate() - u.minTranslate();
                        h = 0 === i ? 0 : (a - u.minTranslate()) / i, h !== u.progress && u.updateProgress(a), b && u.updateActiveIndex(), "slide" !== u.params.effect && u.effects[u.params.effect] && u.effects[u.params.effect].setTranslate(u.translate), u.params.parallax && u.parallax && u.parallax.setTranslate(u.translate), u.params.scrollbar && u.scrollbar && u.scrollbar.setTranslate(u.translate), u.params.control && u.controller && u.controller.setTranslate(u.translate, c), u.emit("onSetTranslate", u, u.translate)
                    }, u.getTranslate = function(a, b) {
                        var c, d, e, f;
                        return "undefined" == typeof b && (b = "x"), u.params.virtualTranslate ? u.rtl ? -u.translate : u.translate : (e = window.getComputedStyle(a, null), window.WebKitCSSMatrix ? (d = e.transform || e.webkitTransform, d.split(",").length > 6 && (d = d.split(", ").map(function(a) {
                            return a.replace(",", ".")
                        }).join(", ")), f = new window.WebKitCSSMatrix("none" === d ? "" : d)) : (f = e.MozTransform || e.OTransform || e.MsTransform || e.msTransform || e.transform || e.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), c = f.toString().split(",")), "x" === b && (d = window.WebKitCSSMatrix ? f.m41 : 16 === c.length ? parseFloat(c[12]) : parseFloat(c[4])), "y" === b && (d = window.WebKitCSSMatrix ? f.m42 : 16 === c.length ? parseFloat(c[13]) : parseFloat(c[5])), u.rtl && d && (d = -d), d || 0)
                    }, u.getWrapperTranslate = function(a) {
                        return "undefined" == typeof a && (a = u.isHorizontal() ? "x" : "y"), u.getTranslate(u.wrapper[0], a)
                    }, u.observers = [], u.initObservers = function() {
                        if (u.params.observeParents)
                            for (var a = u.container.parents(), b = 0; b < a.length; b++) i(a[b]);
                        i(u.container[0], {
                            childList: !1
                        }), i(u.wrapper[0], {
                            attributes: !1
                        })
                    }, u.disconnectObservers = function() {
                        for (var a = 0; a < u.observers.length; a++) u.observers[a].disconnect();
                        u.observers = []
                    }, u.createLoop = function() {
                        u.wrapper.children("." + u.params.slideClass + "." + u.params.slideDuplicateClass).remove();
                        var a = u.wrapper.children("." + u.params.slideClass);
                        "auto" !== u.params.slidesPerView || u.params.loopedSlides || (u.params.loopedSlides = a.length), u.loopedSlides = parseInt(u.params.loopedSlides || u.params.slidesPerView, 10), u.loopedSlides = u.loopedSlides + u.params.loopAdditionalSlides, u.loopedSlides > a.length && (u.loopedSlides = a.length);
                        var c, d = [],
                            e = [];
                        for (a.each(function(c, f) {
                                var g = b(this);
                                c < u.loopedSlides && e.push(f), c < a.length && c >= a.length - u.loopedSlides && d.push(f), g.attr("data-swiper-slide-index", c)
                            }), c = 0; c < e.length; c++) u.wrapper.append(b(e[c].cloneNode(!0)).addClass(u.params.slideDuplicateClass));
                        for (c = d.length - 1; c >= 0; c--) u.wrapper.prepend(b(d[c].cloneNode(!0)).addClass(u.params.slideDuplicateClass))
                    }, u.destroyLoop = function() {
                        u.wrapper.children("." + u.params.slideClass + "." + u.params.slideDuplicateClass).remove(), u.slides.removeAttr("data-swiper-slide-index")
                    }, u.reLoop = function(a) {
                        var b = u.activeIndex - u.loopedSlides;
                        u.destroyLoop(), u.createLoop(), u.updateSlidesSize(), a && u.slideTo(b + u.loopedSlides, 0, !1)
                    }, u.fixLoop = function() {
                        var a;
                        u.activeIndex < u.loopedSlides ? (a = u.slides.length - 3 * u.loopedSlides + u.activeIndex, a += u.loopedSlides, u.slideTo(a, 0, !1, !0)) : ("auto" === u.params.slidesPerView && u.activeIndex >= 2 * u.loopedSlides || u.activeIndex > u.slides.length - 2 * u.params.slidesPerView) && (a = -u.slides.length + u.activeIndex + u.loopedSlides, a += u.loopedSlides, u.slideTo(a, 0, !1, !0))
                    }, u.appendSlide = function(a) {
                        if (u.params.loop && u.destroyLoop(), "object" == typeof a && a.length)
                            for (var b = 0; b < a.length; b++) a[b] && u.wrapper.append(a[b]);
                        else u.wrapper.append(a);
                        u.params.loop && u.createLoop(), u.params.observer && u.support.observer || u.update(!0)
                    }, u.prependSlide = function(a) {
                        u.params.loop && u.destroyLoop();
                        var b = u.activeIndex + 1;
                        if ("object" == typeof a && a.length) {
                            for (var c = 0; c < a.length; c++) a[c] && u.wrapper.prepend(a[c]);
                            b = u.activeIndex + a.length
                        } else u.wrapper.prepend(a);
                        u.params.loop && u.createLoop(), u.params.observer && u.support.observer || u.update(!0), u.slideTo(b, 0, !1)
                    }, u.removeSlide = function(a) {
                        u.params.loop && (u.destroyLoop(), u.slides = u.wrapper.children("." + u.params.slideClass));
                        var b, c = u.activeIndex;
                        if ("object" == typeof a && a.length) {
                            for (var d = 0; d < a.length; d++) b = a[d], u.slides[b] && u.slides.eq(b).remove(), c > b && c--;
                            c = Math.max(c, 0)
                        } else b = a, u.slides[b] && u.slides.eq(b).remove(), c > b && c--, c = Math.max(c, 0);
                        u.params.loop && u.createLoop(), u.params.observer && u.support.observer || u.update(!0), u.params.loop ? u.slideTo(c + u.loopedSlides, 0, !1) : u.slideTo(c, 0, !1)
                    }, u.removeAllSlides = function() {
                        for (var a = [], b = 0; b < u.slides.length; b++) a.push(b);
                        u.removeSlide(a)
                    }, u.effects = {
                        fade: {
                            setTranslate: function() {
                                for (var a = 0; a < u.slides.length; a++) {
                                    var b = u.slides.eq(a),
                                        c = b[0].swiperSlideOffset,
                                        d = -c;
                                    u.params.virtualTranslate || (d -= u.translate);
                                    var e = 0;
                                    u.isHorizontal() || (e = d, d = 0);
                                    var f = u.params.fade.crossFade ? Math.max(1 - Math.abs(b[0].progress), 0) : 1 + Math.min(Math.max(b[0].progress, -1), 0);
                                    b.css({
                                        opacity: f
                                    }).transform("translate3d(" + d + "px, " + e + "px, 0px)")
                                }
                            },
                            setTransition: function(a) {
                                if (u.slides.transition(a), u.params.virtualTranslate && 0 !== a) {
                                    var b = !1;
                                    u.slides.transitionEnd(function() {
                                        if (!b && u) {
                                            b = !0, u.animating = !1;
                                            for (var a = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], c = 0; c < a.length; c++) u.wrapper.trigger(a[c])
                                        }
                                    })
                                }
                            }
                        },
                        flip: {
                            setTranslate: function() {
                                for (var a = 0; a < u.slides.length; a++) {
                                    var c = u.slides.eq(a),
                                        d = c[0].progress;
                                    u.params.flip.limitRotation && (d = Math.max(Math.min(c[0].progress, 1), -1));
                                    var e = c[0].swiperSlideOffset,
                                        f = -180 * d,
                                        g = f,
                                        h = 0,
                                        i = -e,
                                        j = 0;
                                    if (u.isHorizontal() ? u.rtl && (g = -g) : (j = i, i = 0, h = -g, g = 0), c[0].style.zIndex = -Math.abs(Math.round(d)) + u.slides.length, u.params.flip.slideShadows) {
                                        var k = u.isHorizontal() ? c.find(".swiper-slide-shadow-left") : c.find(".swiper-slide-shadow-top"),
                                            l = u.isHorizontal() ? c.find(".swiper-slide-shadow-right") : c.find(".swiper-slide-shadow-bottom");
                                        0 === k.length && (k = b('<div class="swiper-slide-shadow-' + (u.isHorizontal() ? "left" : "top") + '"></div>'), c.append(k)), 0 === l.length && (l = b('<div class="swiper-slide-shadow-' + (u.isHorizontal() ? "right" : "bottom") + '"></div>'), c.append(l)), k.length && (k[0].style.opacity = Math.max(-d, 0)), l.length && (l[0].style.opacity = Math.max(d, 0))
                                    }
                                    c.transform("translate3d(" + i + "px, " + j + "px, 0px) rotateX(" + h + "deg) rotateY(" + g + "deg)")
                                }
                            },
                            setTransition: function(a) {
                                if (u.slides.transition(a).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(a), u.params.virtualTranslate && 0 !== a) {
                                    var c = !1;
                                    u.slides.eq(u.activeIndex).transitionEnd(function() {
                                        if (!c && u && b(this).hasClass(u.params.slideActiveClass)) {
                                            c = !0, u.animating = !1;
                                            for (var a = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], d = 0; d < a.length; d++) u.wrapper.trigger(a[d])
                                        }
                                    })
                                }
                            }
                        },
                        cube: {
                            setTranslate: function() {
                                var a, c = 0;
                                u.params.cube.shadow && (u.isHorizontal() ? (a = u.wrapper.find(".swiper-cube-shadow"), 0 === a.length && (a = b('<div class="swiper-cube-shadow"></div>'), u.wrapper.append(a)), a.css({
                                    height: u.width + "px"
                                })) : (a = u.container.find(".swiper-cube-shadow"), 0 === a.length && (a = b('<div class="swiper-cube-shadow"></div>'), u.container.append(a))));
                                for (var d = 0; d < u.slides.length; d++) {
                                    var e = u.slides.eq(d),
                                        f = 90 * d,
                                        g = Math.floor(f / 360);
                                    u.rtl && (f = -f, g = Math.floor(-f / 360));
                                    var h = Math.max(Math.min(e[0].progress, 1), -1),
                                        i = 0,
                                        j = 0,
                                        k = 0;
                                    d % 4 === 0 ? (i = 4 * -g * u.size, k = 0) : (d - 1) % 4 === 0 ? (i = 0, k = 4 * -g * u.size) : (d - 2) % 4 === 0 ? (i = u.size + 4 * g * u.size, k = u.size) : (d - 3) % 4 === 0 && (i = -u.size, k = 3 * u.size + 4 * u.size * g), u.rtl && (i = -i), u.isHorizontal() || (j = i, i = 0);
                                    var l = "rotateX(" + (u.isHorizontal() ? 0 : -f) + "deg) rotateY(" + (u.isHorizontal() ? f : 0) + "deg) translate3d(" + i + "px, " + j + "px, " + k + "px)";
                                    if (1 >= h && h > -1 && (c = 90 * d + 90 * h, u.rtl && (c = 90 * -d - 90 * h)), e.transform(l), u.params.cube.slideShadows) {
                                        var m = u.isHorizontal() ? e.find(".swiper-slide-shadow-left") : e.find(".swiper-slide-shadow-top"),
                                            n = u.isHorizontal() ? e.find(".swiper-slide-shadow-right") : e.find(".swiper-slide-shadow-bottom");
                                        0 === m.length && (m = b('<div class="swiper-slide-shadow-' + (u.isHorizontal() ? "left" : "top") + '"></div>'), e.append(m)), 0 === n.length && (n = b('<div class="swiper-slide-shadow-' + (u.isHorizontal() ? "right" : "bottom") + '"></div>'), e.append(n)), m.length && (m[0].style.opacity = Math.max(-h, 0)), n.length && (n[0].style.opacity = Math.max(h, 0))
                                    }
                                }
                                if (u.wrapper.css({
                                        "-webkit-transform-origin": "50% 50% -" + u.size / 2 + "px",
                                        "-moz-transform-origin": "50% 50% -" + u.size / 2 + "px",
                                        "-ms-transform-origin": "50% 50% -" + u.size / 2 + "px",
                                        "transform-origin": "50% 50% -" + u.size / 2 + "px"
                                    }), u.params.cube.shadow)
                                    if (u.isHorizontal()) a.transform("translate3d(0px, " + (u.width / 2 + u.params.cube.shadowOffset) + "px, " + -u.width / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + u.params.cube.shadowScale + ")");
                                    else {
                                        var o = Math.abs(c) - 90 * Math.floor(Math.abs(c) / 90),
                                            p = 1.5 - (Math.sin(2 * o * Math.PI / 360) / 2 + Math.cos(2 * o * Math.PI / 360) / 2),
                                            q = u.params.cube.shadowScale,
                                            r = u.params.cube.shadowScale / p,
                                            s = u.params.cube.shadowOffset;
                                        a.transform("scale3d(" + q + ", 1, " + r + ") translate3d(0px, " + (u.height / 2 + s) + "px, " + -u.height / 2 / r + "px) rotateX(-90deg)")
                                    }
                                var t = u.isSafari || u.isUiWebView ? -u.size / 2 : 0;
                                u.wrapper.transform("translate3d(0px,0," + t + "px) rotateX(" + (u.isHorizontal() ? 0 : c) + "deg) rotateY(" + (u.isHorizontal() ? -c : 0) + "deg)")
                            },
                            setTransition: function(a) {
                                u.slides.transition(a).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(a), u.params.cube.shadow && !u.isHorizontal() && u.container.find(".swiper-cube-shadow").transition(a)
                            }
                        },
                        coverflow: {
                            setTranslate: function() {
                                for (var a = u.translate, c = u.isHorizontal() ? -a + u.width / 2 : -a + u.height / 2, d = u.isHorizontal() ? u.params.coverflow.rotate : -u.params.coverflow.rotate, e = u.params.coverflow.depth, f = 0, g = u.slides.length; g > f; f++) {
                                    var h = u.slides.eq(f),
                                        i = u.slidesSizesGrid[f],
                                        j = h[0].swiperSlideOffset,
                                        k = (c - j - i / 2) / i * u.params.coverflow.modifier,
                                        l = u.isHorizontal() ? d * k : 0,
                                        m = u.isHorizontal() ? 0 : d * k,
                                        n = -e * Math.abs(k),
                                        o = u.isHorizontal() ? 0 : u.params.coverflow.stretch * k,
                                        p = u.isHorizontal() ? u.params.coverflow.stretch * k : 0;
                                    Math.abs(p) < .001 && (p = 0), Math.abs(o) < .001 && (o = 0), Math.abs(n) < .001 && (n = 0), Math.abs(l) < .001 && (l = 0), Math.abs(m) < .001 && (m = 0);
                                    var q = "translate3d(" + p + "px," + o + "px," + n + "px)  rotateX(" + m + "deg) rotateY(" + l + "deg)";
                                    if (h.transform(q), h[0].style.zIndex = -Math.abs(Math.round(k)) + 1, u.params.coverflow.slideShadows) {
                                        var r = u.isHorizontal() ? h.find(".swiper-slide-shadow-left") : h.find(".swiper-slide-shadow-top"),
                                            s = u.isHorizontal() ? h.find(".swiper-slide-shadow-right") : h.find(".swiper-slide-shadow-bottom");
                                        0 === r.length && (r = b('<div class="swiper-slide-shadow-' + (u.isHorizontal() ? "left" : "top") + '"></div>'), h.append(r)), 0 === s.length && (s = b('<div class="swiper-slide-shadow-' + (u.isHorizontal() ? "right" : "bottom") + '"></div>'), h.append(s)), r.length && (r[0].style.opacity = k > 0 ? k : 0), s.length && (s[0].style.opacity = -k > 0 ? -k : 0)
                                    }
                                }
                                if (u.browser.ie) {
                                    var t = u.wrapper[0].style;
                                    t.perspectiveOrigin = c + "px 50%"
                                }
                            },
                            setTransition: function(a) {
                                u.slides.transition(a).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(a)
                            }
                        }
                    }, u.lazy = {
                        initialImageLoaded: !1,
                        loadImageInSlide: function(a, c) {
                            if ("undefined" != typeof a && ("undefined" == typeof c && (c = !0), 0 !== u.slides.length)) {
                                var d = u.slides.eq(a),
                                    e = d.find(".swiper-lazy:not(.swiper-lazy-loaded):not(.swiper-lazy-loading)");
                                !d.hasClass("swiper-lazy") || d.hasClass("swiper-lazy-loaded") || d.hasClass("swiper-lazy-loading") || (e = e.add(d[0])), 0 !== e.length && e.each(function() {
                                    var a = b(this);
                                    a.addClass("swiper-lazy-loading");
                                    var e = a.attr("data-background"),
                                        f = a.attr("data-src"),
                                        g = a.attr("data-srcset");
                                    u.loadImage(a[0], f || e, g, !1, function() {
                                        if (e ? (a.css("background-image", 'url("' + e + '")'), a.removeAttr("data-background")) : (g && (a.attr("srcset", g), a.removeAttr("data-srcset")), f && (a.attr("src", f), a.removeAttr("data-src"))), a.addClass("swiper-lazy-loaded").removeClass("swiper-lazy-loading"), d.find(".swiper-lazy-preloader, .preloader").remove(), u.params.loop && c) {
                                            var b = d.attr("data-swiper-slide-index");
                                            if (d.hasClass(u.params.slideDuplicateClass)) {
                                                var h = u.wrapper.children('[data-swiper-slide-index="' + b + '"]:not(.' + u.params.slideDuplicateClass + ")");
                                                u.lazy.loadImageInSlide(h.index(), !1)
                                            } else {
                                                var i = u.wrapper.children("." + u.params.slideDuplicateClass + '[data-swiper-slide-index="' + b + '"]');
                                                u.lazy.loadImageInSlide(i.index(), !1)
                                            }
                                        }
                                        u.emit("onLazyImageReady", u, d[0], a[0])
                                    }), u.emit("onLazyImageLoad", u, d[0], a[0])
                                })
                            }
                        },
                        load: function() {
                            var a;
                            if (u.params.watchSlidesVisibility) u.wrapper.children("." + u.params.slideVisibleClass).each(function() {
                                u.lazy.loadImageInSlide(b(this).index())
                            });
                            else if (u.params.slidesPerView > 1)
                                for (a = u.activeIndex; a < u.activeIndex + u.params.slidesPerView; a++) u.slides[a] && u.lazy.loadImageInSlide(a);
                            else u.lazy.loadImageInSlide(u.activeIndex);
                            if (u.params.lazyLoadingInPrevNext)
                                if (u.params.slidesPerView > 1 || u.params.lazyLoadingInPrevNextAmount && u.params.lazyLoadingInPrevNextAmount > 1) {
                                    var c = u.params.lazyLoadingInPrevNextAmount,
                                        d = u.params.slidesPerView,
                                        e = Math.min(u.activeIndex + d + Math.max(c, d), u.slides.length),
                                        f = Math.max(u.activeIndex - Math.max(d, c), 0);
                                    for (a = u.activeIndex + u.params.slidesPerView; e > a; a++) u.slides[a] && u.lazy.loadImageInSlide(a);
                                    for (a = f; a < u.activeIndex; a++) u.slides[a] && u.lazy.loadImageInSlide(a)
                                } else {
                                    var g = u.wrapper.children("." + u.params.slideNextClass);
                                    g.length > 0 && u.lazy.loadImageInSlide(g.index());
                                    var h = u.wrapper.children("." + u.params.slidePrevClass);
                                    h.length > 0 && u.lazy.loadImageInSlide(h.index())
                                }
                        },
                        onTransitionStart: function() {
                            u.params.lazyLoading && (u.params.lazyLoadingOnTransitionStart || !u.params.lazyLoadingOnTransitionStart && !u.lazy.initialImageLoaded) && u.lazy.load()
                        },
                        onTransitionEnd: function() {
                            u.params.lazyLoading && !u.params.lazyLoadingOnTransitionStart && u.lazy.load()
                        }
                    }, u.scrollbar = {
                        isTouched: !1,
                        setDragPosition: function(a) {
                            var b = u.scrollbar,
                                c = u.isHorizontal() ? "touchstart" === a.type || "touchmove" === a.type ? a.targetTouches[0].pageX : a.pageX || a.clientX : "touchstart" === a.type || "touchmove" === a.type ? a.targetTouches[0].pageY : a.pageY || a.clientY,
                                d = c - b.track.offset()[u.isHorizontal() ? "left" : "top"] - b.dragSize / 2,
                                e = -u.minTranslate() * b.moveDivider,
                                f = -u.maxTranslate() * b.moveDivider;
                            e > d ? d = e : d > f && (d = f), d = -d / b.moveDivider, u.updateProgress(d), u.setWrapperTranslate(d, !0)
                        },
                        dragStart: function(a) {
                            var b = u.scrollbar;
                            b.isTouched = !0, a.preventDefault(), a.stopPropagation(), b.setDragPosition(a), clearTimeout(b.dragTimeout), b.track.transition(0), u.params.scrollbarHide && b.track.css("opacity", 1), u.wrapper.transition(100), b.drag.transition(100), u.emit("onScrollbarDragStart", u)
                        },
                        dragMove: function(a) {
                            var b = u.scrollbar;
                            b.isTouched && (a.preventDefault ? a.preventDefault() : a.returnValue = !1, b.setDragPosition(a), u.wrapper.transition(0), b.track.transition(0), b.drag.transition(0), u.emit("onScrollbarDragMove", u))
                        },
                        dragEnd: function(a) {
                            var b = u.scrollbar;
                            b.isTouched && (b.isTouched = !1, u.params.scrollbarHide && (clearTimeout(b.dragTimeout), b.dragTimeout = setTimeout(function() {
                                b.track.css("opacity", 0), b.track.transition(400)
                            }, 1e3)), u.emit("onScrollbarDragEnd", u), u.params.scrollbarSnapOnRelease && u.slideReset())
                        },
                        enableDraggable: function() {
                            var a = u.scrollbar,
                                c = u.support.touch ? a.track : document;
                            b(a.track).on(u.touchEvents.start, a.dragStart), b(c).on(u.touchEvents.move, a.dragMove), b(c).on(u.touchEvents.end, a.dragEnd)
                        },
                        disableDraggable: function() {
                            var a = u.scrollbar,
                                c = u.support.touch ? a.track : document;
                            b(a.track).off(u.touchEvents.start, a.dragStart), b(c).off(u.touchEvents.move, a.dragMove), b(c).off(u.touchEvents.end, a.dragEnd)
                        },
                        set: function() {
                            if (u.params.scrollbar) {
                                var a = u.scrollbar;
                                a.track = b(u.params.scrollbar), u.params.uniqueNavElements && "string" == typeof u.params.scrollbar && a.track.length > 1 && 1 === u.container.find(u.params.scrollbar).length && (a.track = u.container.find(u.params.scrollbar)), a.drag = a.track.find(".swiper-scrollbar-drag"), 0 === a.drag.length && (a.drag = b('<div class="swiper-scrollbar-drag"></div>'), a.track.append(a.drag)), a.drag[0].style.width = "", a.drag[0].style.height = "", a.trackSize = u.isHorizontal() ? a.track[0].offsetWidth : a.track[0].offsetHeight, a.divider = u.size / u.virtualSize, a.moveDivider = a.divider * (a.trackSize / u.size), a.dragSize = a.trackSize * a.divider, u.isHorizontal() ? a.drag[0].style.width = a.dragSize + "px" : a.drag[0].style.height = a.dragSize + "px", a.divider >= 1 ? a.track[0].style.display = "none" : a.track[0].style.display = "", u.params.scrollbarHide && (a.track[0].style.opacity = 0)
                            }
                        },
                        setTranslate: function() {
                            if (u.params.scrollbar) {
                                var a, b = u.scrollbar,
                                    c = (u.translate || 0, b.dragSize);
                                a = (b.trackSize - b.dragSize) * u.progress, u.rtl && u.isHorizontal() ? (a = -a, a > 0 ? (c = b.dragSize - a, a = 0) : -a + b.dragSize > b.trackSize && (c = b.trackSize + a)) : 0 > a ? (c = b.dragSize + a, a = 0) : a + b.dragSize > b.trackSize && (c = b.trackSize - a), u.isHorizontal() ? (u.support.transforms3d ? b.drag.transform("translate3d(" + a + "px, 0, 0)") : b.drag.transform("translateX(" + a + "px)"), b.drag[0].style.width = c + "px") : (u.support.transforms3d ? b.drag.transform("translate3d(0px, " + a + "px, 0)") : b.drag.transform("translateY(" + a + "px)"), b.drag[0].style.height = c + "px"), u.params.scrollbarHide && (clearTimeout(b.timeout), b.track[0].style.opacity = 1, b.timeout = setTimeout(function() {
                                    b.track[0].style.opacity = 0, b.track.transition(400)
                                }, 1e3))
                            }
                        },
                        setTransition: function(a) {
                            u.params.scrollbar && u.scrollbar.drag.transition(a)
                        }
                    }, u.controller = {
                        LinearSpline: function(a, b) {
                            this.x = a, this.y = b, this.lastIndex = a.length - 1;
                            var c, d;
                            this.x.length, this.interpolate = function(a) {
                                return a ? (d = e(this.x, a), c = d - 1, (a - this.x[c]) * (this.y[d] - this.y[c]) / (this.x[d] - this.x[c]) + this.y[c]) : 0
                            };
                            var e = function() {
                                var a, b, c;
                                return function(d, e) {
                                    for (b = -1, a = d.length; a - b > 1;) d[c = a + b >> 1] <= e ? b = c : a = c;
                                    return a
                                }
                            }()
                        },
                        getInterpolateFunction: function(a) {
                            u.controller.spline || (u.controller.spline = u.params.loop ? new u.controller.LinearSpline(u.slidesGrid, a.slidesGrid) : new u.controller.LinearSpline(u.snapGrid, a.snapGrid))
                        },
                        setTranslate: function(a, b) {
                            function d(b) {
                                a = b.rtl && "horizontal" === b.params.direction ? -u.translate : u.translate, "slide" === u.params.controlBy && (u.controller.getInterpolateFunction(b), f = -u.controller.spline.interpolate(-a)), f && "container" !== u.params.controlBy || (e = (b.maxTranslate() - b.minTranslate()) / (u.maxTranslate() - u.minTranslate()), f = (a - u.minTranslate()) * e + b.minTranslate()), u.params.controlInverse && (f = b.maxTranslate() - f), b.updateProgress(f), b.setWrapperTranslate(f, !1, u), b.updateActiveIndex()
                            }
                            var e, f, g = u.params.control;
                            if (u.isArray(g))
                                for (var h = 0; h < g.length; h++) g[h] !== b && g[h] instanceof c && d(g[h]);
                            else g instanceof c && b !== g && d(g)
                        },
                        setTransition: function(a, b) {
                            function d(b) {
                                b.setWrapperTransition(a, u), 0 !== a && (b.onTransitionStart(), b.wrapper.transitionEnd(function() {
                                    f && (b.params.loop && "slide" === u.params.controlBy && b.fixLoop(), b.onTransitionEnd())
                                }))
                            }
                            var e, f = u.params.control;
                            if (u.isArray(f))
                                for (e = 0; e < f.length; e++) f[e] !== b && f[e] instanceof c && d(f[e]);
                            else f instanceof c && b !== f && d(f)
                        }
                    }, u.hashnav = {
                        init: function() {
                            if (u.params.hashnav) {
                                u.hashnav.initialized = !0;
                                var a = document.location.hash.replace("#", "");
                                if (a)
                                    for (var b = 0, c = 0, d = u.slides.length; d > c; c++) {
                                        var e = u.slides.eq(c),
                                            f = e.attr("data-hash");
                                        if (f === a && !e.hasClass(u.params.slideDuplicateClass)) {
                                            var g = e.index();
                                            u.slideTo(g, b, u.params.runCallbacksOnInit, !0)
                                        }
                                    }
                            }
                        },
                        setHash: function() {
                            u.hashnav.initialized && u.params.hashnav && (document.location.hash = u.slides.eq(u.activeIndex).attr("data-hash") || "")
                        }
                    }, u.disableKeyboardControl = function() {
                        u.params.keyboardControl = !1, b(document).off("keydown", j)
                    }, u.enableKeyboardControl = function() {
                        u.params.keyboardControl = !0, b(document).on("keydown", j)
                    }, u.mousewheel = {
                        event: !1,
                        lastScrollTime: (new window.Date).getTime()
                    }, u.params.mousewheelControl) {
                    try {
                        new window.WheelEvent("wheel"), u.mousewheel.event = "wheel"
                    } catch (a) {
                        (window.WheelEvent || u.container[0] && "wheel" in u.container[0]) && (u.mousewheel.event = "wheel")
                    }!u.mousewheel.event && window.WheelEvent, u.mousewheel.event || void 0 === document.onmousewheel || (u.mousewheel.event = "mousewheel"), u.mousewheel.event || (u.mousewheel.event = "DOMMouseScroll")
                }
                u.disableMousewheelControl = function() {
                    return !!u.mousewheel.event && (u.container.off(u.mousewheel.event, k), !0)
                }, u.enableMousewheelControl = function() {
                    return !!u.mousewheel.event && (u.container.on(u.mousewheel.event, k), !0)
                }, u.parallax = {
                    setTranslate: function() {
                        u.container.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                            l(this, u.progress)
                        }), u.slides.each(function() {
                            var a = b(this);
                            a.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                                var b = Math.min(Math.max(a[0].progress, -1), 1);
                                l(this, b)
                            })
                        })
                    },
                    setTransition: function(a) {
                        "undefined" == typeof a && (a = u.params.speed), u.container.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                            var c = b(this),
                                d = parseInt(c.attr("data-swiper-parallax-duration"), 10) || a;
                            0 === a && (d = 0), c.transition(d)
                        })
                    }
                }, u._plugins = [];
                for (var M in u.plugins) {
                    var N = u.plugins[M](u, u.params[M]);
                    N && u._plugins.push(N)
                }
                return u.callPlugins = function(a) {
                    for (var b = 0; b < u._plugins.length; b++) a in u._plugins[b] && u._plugins[b][a](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
                }, u.emitterEventListeners = {}, u.emit = function(a) {
                    u.params[a] && u.params[a](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                    var b;
                    if (u.emitterEventListeners[a])
                        for (b = 0; b < u.emitterEventListeners[a].length; b++) u.emitterEventListeners[a][b](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                    u.callPlugins && u.callPlugins(a, arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
                }, u.on = function(a, b) {
                    return a = m(a), u.emitterEventListeners[a] || (u.emitterEventListeners[a] = []), u.emitterEventListeners[a].push(b), u
                }, u.off = function(a, b) {
                    var c;
                    if (a = m(a), "undefined" == typeof b) return u.emitterEventListeners[a] = [], u;
                    if (u.emitterEventListeners[a] && 0 !== u.emitterEventListeners[a].length) {
                        for (c = 0; c < u.emitterEventListeners[a].length; c++) u.emitterEventListeners[a][c] === b && u.emitterEventListeners[a].splice(c, 1);
                        return u
                    }
                }, u.once = function(a, b) {
                    a = m(a);
                    var c = function() {
                        b(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]), u.off(a, c)
                    };
                    return u.on(a, c), u
                }, u.a11y = {
                    makeFocusable: function(a) {
                        return a.attr("tabIndex", "0"), a
                    },
                    addRole: function(a, b) {
                        return a.attr("role", b), a
                    },
                    addLabel: function(a, b) {
                        return a.attr("aria-label", b), a
                    },
                    disable: function(a) {
                        return a.attr("aria-disabled", !0), a
                    },
                    enable: function(a) {
                        return a.attr("aria-disabled", !1), a
                    },
                    onEnterKey: function(a) {
                        13 === a.keyCode && (b(a.target).is(u.params.nextButton) ? (u.onClickNext(a), u.isEnd ? u.a11y.notify(u.params.lastSlideMessage) : u.a11y.notify(u.params.nextSlideMessage)) : b(a.target).is(u.params.prevButton) && (u.onClickPrev(a), u.isBeginning ? u.a11y.notify(u.params.firstSlideMessage) : u.a11y.notify(u.params.prevSlideMessage)), b(a.target).is("." + u.params.bulletClass) && b(a.target)[0].click())
                    },
                    liveRegion: b('<span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>'),
                    notify: function(a) {
                        var b = u.a11y.liveRegion;
                        0 !== b.length && (b.html(""), b.html(a))
                    },
                    init: function() {
                        u.params.nextButton && u.nextButton && u.nextButton.length > 0 && (u.a11y.makeFocusable(u.nextButton), u.a11y.addRole(u.nextButton, "button"), u.a11y.addLabel(u.nextButton, u.params.nextSlideMessage)), u.params.prevButton && u.prevButton && u.prevButton.length > 0 && (u.a11y.makeFocusable(u.prevButton), u.a11y.addRole(u.prevButton, "button"), u.a11y.addLabel(u.prevButton, u.params.prevSlideMessage)), b(u.container).append(u.a11y.liveRegion)
                    },
                    initPagination: function() {
                        u.params.pagination && u.params.paginationClickable && u.bullets && u.bullets.length && u.bullets.each(function() {
                            var a = b(this);
                            u.a11y.makeFocusable(a), u.a11y.addRole(a, "button"), u.a11y.addLabel(a, u.params.paginationBulletMessage.replace(/{{index}}/, a.index() + 1))
                        })
                    },
                    destroy: function() {
                        u.a11y.liveRegion && u.a11y.liveRegion.length > 0 && u.a11y.liveRegion.remove()
                    }
                }, u.init = function() {
                    u.params.loop && u.createLoop(), u.updateContainerSize(), u.updateSlidesSize(), u.updatePagination(), u.params.scrollbar && u.scrollbar && (u.scrollbar.set(), u.params.scrollbarDraggable && u.scrollbar.enableDraggable()), "slide" !== u.params.effect && u.effects[u.params.effect] && (u.params.loop || u.updateProgress(), u.effects[u.params.effect].setTranslate()), u.params.loop ? u.slideTo(u.params.initialSlide + u.loopedSlides, 0, u.params.runCallbacksOnInit) : (u.slideTo(u.params.initialSlide, 0, u.params.runCallbacksOnInit), 0 === u.params.initialSlide && (u.parallax && u.params.parallax && u.parallax.setTranslate(), u.lazy && u.params.lazyLoading && (u.lazy.load(), u.lazy.initialImageLoaded = !0))), u.attachEvents(), u.params.observer && u.support.observer && u.initObservers(), u.params.preloadImages && !u.params.lazyLoading && u.preloadImages(), u.params.autoplay && u.startAutoplay(), u.params.keyboardControl && u.enableKeyboardControl && u.enableKeyboardControl(),
                        u.params.mousewheelControl && u.enableMousewheelControl && u.enableMousewheelControl(), u.params.hashnav && u.hashnav && u.hashnav.init(), u.params.a11y && u.a11y && u.a11y.init(), u.emit("onInit", u)
                }, u.cleanupStyles = function() {
                    u.container.removeClass(u.classNames.join(" ")).removeAttr("style"), u.wrapper.removeAttr("style"), u.slides && u.slides.length && u.slides.removeClass([u.params.slideVisibleClass, u.params.slideActiveClass, u.params.slideNextClass, u.params.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-column").removeAttr("data-swiper-row"), u.paginationContainer && u.paginationContainer.length && u.paginationContainer.removeClass(u.params.paginationHiddenClass), u.bullets && u.bullets.length && u.bullets.removeClass(u.params.bulletActiveClass), u.params.prevButton && b(u.params.prevButton).removeClass(u.params.buttonDisabledClass), u.params.nextButton && b(u.params.nextButton).removeClass(u.params.buttonDisabledClass), u.params.scrollbar && u.scrollbar && (u.scrollbar.track && u.scrollbar.track.length && u.scrollbar.track.removeAttr("style"), u.scrollbar.drag && u.scrollbar.drag.length && u.scrollbar.drag.removeAttr("style"))
                }, u.destroy = function(a, b) {
                    u.detachEvents(), u.stopAutoplay(), u.params.scrollbar && u.scrollbar && u.params.scrollbarDraggable && u.scrollbar.disableDraggable(), u.params.loop && u.destroyLoop(), b && u.cleanupStyles(), u.disconnectObservers(), u.params.keyboardControl && u.disableKeyboardControl && u.disableKeyboardControl(), u.params.mousewheelControl && u.disableMousewheelControl && u.disableMousewheelControl(), u.params.a11y && u.a11y && u.a11y.destroy(), u.emit("onDestroy"), a !== !1 && (u = null)
                }, u.init(), u
            }
        };
        c.prototype = {
            isSafari: function() {
                var a = navigator.userAgent.toLowerCase();
                return a.indexOf("safari") >= 0 && a.indexOf("chrome") < 0 && a.indexOf("android") < 0
            }(),
            isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent),
            isArray: function(a) {
                return "[object Array]" === Object.prototype.toString.apply(a)
            },
            browser: {
                ie: window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
                ieTouch: window.navigator.msPointerEnabled && window.navigator.msMaxTouchPoints > 1 || window.navigator.pointerEnabled && window.navigator.maxTouchPoints > 1
            },
            device: function() {
                var a = navigator.userAgent,
                    b = a.match(/(Android);?[\s\/]+([\d.]+)?/),
                    c = a.match(/(iPad).*OS\s([\d_]+)/),
                    d = a.match(/(iPod)(.*OS\s([\d_]+))?/),
                    e = !c && a.match(/(iPhone\sOS)\s([\d_]+)/);
                return {
                    ios: c || e || d,
                    android: b
                }
            }(),
            support: {
                touch: window.Modernizr && Modernizr.touch === !0 || function() {
                    return !!("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch)
                }(),
                transforms3d: window.Modernizr && Modernizr.csstransforms3d === !0 || function() {
                    var a = document.createElement("div").style;
                    return "webkitPerspective" in a || "MozPerspective" in a || "OPerspective" in a || "MsPerspective" in a || "perspective" in a
                }(),
                flexbox: function() {
                    for (var a = document.createElement("div").style, b = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), c = 0; c < b.length; c++)
                        if (b[c] in a) return !0
                }(),
                observer: function() {
                    return "MutationObserver" in window || "WebkitMutationObserver" in window
                }()
            },
            plugins: {}
        };
        for (var d = (function() {
                var a = function(a) {
                        var b = this,
                            c = 0;
                        for (c = 0; c < a.length; c++) b[c] = a[c];
                        return b.length = a.length, this
                    },
                    b = function(b, c) {
                        var d = [],
                            e = 0;
                        if (b && !c && b instanceof a) return b;
                        if (b)
                            if ("string" == typeof b) {
                                var f, g, h = b.trim();
                                if (h.indexOf("<") >= 0 && h.indexOf(">") >= 0) {
                                    var i = "div";
                                    for (0 === h.indexOf("<li") && (i = "ul"), 0 === h.indexOf("<tr") && (i = "tbody"), (0 === h.indexOf("<td") || 0 === h.indexOf("<th")) && (i = "tr"), 0 === h.indexOf("<tbody") && (i = "table"), 0 === h.indexOf("<option") && (i = "select"), g = document.createElement(i), g.innerHTML = b, e = 0; e < g.childNodes.length; e++) d.push(g.childNodes[e])
                                } else
                                    for (f = c || "#" !== b[0] || b.match(/[ .<>:~]/) ? (c || document).querySelectorAll(b) : [document.getElementById(b.split("#")[1])], e = 0; e < f.length; e++) f[e] && d.push(f[e])
                            } else if (b.nodeType || b === window || b === document) d.push(b);
                        else if (b.length > 0 && b[0].nodeType)
                            for (e = 0; e < b.length; e++) d.push(b[e]);
                        return new a(d)
                    };
                return a.prototype = {
                    addClass: function(a) {
                        if ("undefined" == typeof a) return this;
                        for (var b = a.split(" "), c = 0; c < b.length; c++)
                            for (var d = 0; d < this.length; d++) this[d].classList.add(b[c]);
                        return this
                    },
                    removeClass: function(a) {
                        for (var b = a.split(" "), c = 0; c < b.length; c++)
                            for (var d = 0; d < this.length; d++) this[d].classList.remove(b[c]);
                        return this
                    },
                    hasClass: function(a) {
                        return !!this[0] && this[0].classList.contains(a)
                    },
                    toggleClass: function(a) {
                        for (var b = a.split(" "), c = 0; c < b.length; c++)
                            for (var d = 0; d < this.length; d++) this[d].classList.toggle(b[c]);
                        return this
                    },
                    attr: function(a, b) {
                        if (1 === arguments.length && "string" == typeof a) return this[0] ? this[0].getAttribute(a) : void 0;
                        for (var c = 0; c < this.length; c++)
                            if (2 === arguments.length) this[c].setAttribute(a, b);
                            else
                                for (var d in a) this[c][d] = a[d], this[c].setAttribute(d, a[d]);
                        return this
                    },
                    removeAttr: function(a) {
                        for (var b = 0; b < this.length; b++) this[b].removeAttribute(a);
                        return this
                    },
                    data: function(a, b) {
                        if ("undefined" != typeof b) {
                            for (var c = 0; c < this.length; c++) {
                                var d = this[c];
                                d.dom7ElementDataStorage || (d.dom7ElementDataStorage = {}), d.dom7ElementDataStorage[a] = b
                            }
                            return this
                        }
                        if (this[0]) {
                            var e = this[0].getAttribute("data-" + a);
                            return e ? e : this[0].dom7ElementDataStorage && a in this[0].dom7ElementDataStorage ? this[0].dom7ElementDataStorage[a] : void 0
                        }
                    },
                    transform: function(a) {
                        for (var b = 0; b < this.length; b++) {
                            var c = this[b].style;
                            c.webkitTransform = c.MsTransform = c.msTransform = c.MozTransform = c.OTransform = c.transform = a
                        }
                        return this
                    },
                    transition: function(a) {
                        "string" != typeof a && (a += "ms");
                        for (var b = 0; b < this.length; b++) {
                            var c = this[b].style;
                            c.webkitTransitionDuration = c.MsTransitionDuration = c.msTransitionDuration = c.MozTransitionDuration = c.OTransitionDuration = c.transitionDuration = a
                        }
                        return this
                    },
                    on: function(a, c, d, e) {
                        function f(a) {
                            var e = a.target;
                            if (b(e).is(c)) d.call(e, a);
                            else
                                for (var f = b(e).parents(), g = 0; g < f.length; g++) b(f[g]).is(c) && d.call(f[g], a)
                        }
                        var g, h, i = a.split(" ");
                        for (g = 0; g < this.length; g++)
                            if ("function" == typeof c || c === !1)
                                for ("function" == typeof c && (d = arguments[1], e = arguments[2] || !1), h = 0; h < i.length; h++) this[g].addEventListener(i[h], d, e);
                            else
                                for (h = 0; h < i.length; h++) this[g].dom7LiveListeners || (this[g].dom7LiveListeners = []), this[g].dom7LiveListeners.push({
                                    listener: d,
                                    liveListener: f
                                }), this[g].addEventListener(i[h], f, e);
                        return this
                    },
                    off: function(a, b, c, d) {
                        for (var e = a.split(" "), f = 0; f < e.length; f++)
                            for (var g = 0; g < this.length; g++)
                                if ("function" == typeof b || b === !1) "function" == typeof b && (c = arguments[1], d = arguments[2] || !1), this[g].removeEventListener(e[f], c, d);
                                else if (this[g].dom7LiveListeners)
                            for (var h = 0; h < this[g].dom7LiveListeners.length; h++) this[g].dom7LiveListeners[h].listener === c && this[g].removeEventListener(e[f], this[g].dom7LiveListeners[h].liveListener, d);
                        return this
                    },
                    once: function(a, b, c, d) {
                        function e(g) {
                            c(g), f.off(a, b, e, d)
                        }
                        var f = this;
                        "function" == typeof b && (b = !1, c = arguments[1], d = arguments[2]), f.on(a, b, e, d)
                    },
                    trigger: function(a, b) {
                        for (var c = 0; c < this.length; c++) {
                            var d;
                            try {
                                d = new window.CustomEvent(a, {
                                    detail: b,
                                    bubbles: !0,
                                    cancelable: !0
                                })
                            } catch (c) {
                                d = document.createEvent("Event"), d.initEvent(a, !0, !0), d.detail = b
                            }
                            this[c].dispatchEvent(d)
                        }
                        return this
                    },
                    transitionEnd: function(a) {
                        function b(f) {
                            if (f.target === this)
                                for (a.call(this, f), c = 0; c < d.length; c++) e.off(d[c], b)
                        }
                        var c, d = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"],
                            e = this;
                        if (a)
                            for (c = 0; c < d.length; c++) e.on(d[c], b);
                        return this
                    },
                    width: function() {
                        return this[0] === window ? window.innerWidth : this.length > 0 ? parseFloat(this.css("width")) : null
                    },
                    outerWidth: function(a) {
                        return this.length > 0 ? a ? this[0].offsetWidth + parseFloat(this.css("margin-right")) + parseFloat(this.css("margin-left")) : this[0].offsetWidth : null
                    },
                    height: function() {
                        return this[0] === window ? window.innerHeight : this.length > 0 ? parseFloat(this.css("height")) : null
                    },
                    outerHeight: function(a) {
                        return this.length > 0 ? a ? this[0].offsetHeight + parseFloat(this.css("margin-top")) + parseFloat(this.css("margin-bottom")) : this[0].offsetHeight : null
                    },
                    offset: function() {
                        if (this.length > 0) {
                            var a = this[0],
                                b = a.getBoundingClientRect(),
                                c = document.body,
                                d = a.clientTop || c.clientTop || 0,
                                e = a.clientLeft || c.clientLeft || 0,
                                f = window.pageYOffset || a.scrollTop,
                                g = window.pageXOffset || a.scrollLeft;
                            return {
                                top: b.top + f - d,
                                left: b.left + g - e
                            }
                        }
                        return null
                    },
                    css: function(a, b) {
                        var c;
                        if (1 === arguments.length) {
                            if ("string" != typeof a) {
                                for (c = 0; c < this.length; c++)
                                    for (var d in a) this[c].style[d] = a[d];
                                return this
                            }
                            if (this[0]) return window.getComputedStyle(this[0], null).getPropertyValue(a)
                        }
                        if (2 === arguments.length && "string" == typeof a) {
                            for (c = 0; c < this.length; c++) this[c].style[a] = b;
                            return this
                        }
                        return this
                    },
                    each: function(a) {
                        for (var b = 0; b < this.length; b++) a.call(this[b], b, this[b]);
                        return this
                    },
                    html: function(a) {
                        if ("undefined" == typeof a) return this[0] ? this[0].innerHTML : void 0;
                        for (var b = 0; b < this.length; b++) this[b].innerHTML = a;
                        return this
                    },
                    text: function(a) {
                        if ("undefined" == typeof a) return this[0] ? this[0].textContent.trim() : null;
                        for (var b = 0; b < this.length; b++) this[b].textContent = a;
                        return this
                    },
                    is: function(c) {
                        if (!this[0]) return !1;
                        var d, e;
                        if ("string" == typeof c) {
                            var f = this[0];
                            if (f === document) return c === document;
                            if (f === window) return c === window;
                            if (f.matches) return f.matches(c);
                            if (f.webkitMatchesSelector) return f.webkitMatchesSelector(c);
                            if (f.mozMatchesSelector) return f.mozMatchesSelector(c);
                            if (f.msMatchesSelector) return f.msMatchesSelector(c);
                            for (d = b(c), e = 0; e < d.length; e++)
                                if (d[e] === this[0]) return !0;
                            return !1
                        }
                        if (c === document) return this[0] === document;
                        if (c === window) return this[0] === window;
                        if (c.nodeType || c instanceof a) {
                            for (d = c.nodeType ? [c] : c, e = 0; e < d.length; e++)
                                if (d[e] === this[0]) return !0;
                            return !1
                        }
                        return !1
                    },
                    index: function() {
                        if (this[0]) {
                            for (var a = this[0], b = 0; null !== (a = a.previousSibling);) 1 === a.nodeType && b++;
                            return b
                        }
                    },
                    eq: function(b) {
                        if ("undefined" == typeof b) return this;
                        var c, d = this.length;
                        return b > d - 1 ? new a([]) : 0 > b ? (c = d + b, new a(0 > c ? [] : [this[c]])) : new a([this[b]])
                    },
                    append: function(b) {
                        var c, d;
                        for (c = 0; c < this.length; c++)
                            if ("string" == typeof b) {
                                var e = document.createElement("div");
                                for (e.innerHTML = b; e.firstChild;) this[c].appendChild(e.firstChild)
                            } else if (b instanceof a)
                            for (d = 0; d < b.length; d++) this[c].appendChild(b[d]);
                        else this[c].appendChild(b);
                        return this
                    },
                    prepend: function(b) {
                        var c, d;
                        for (c = 0; c < this.length; c++)
                            if ("string" == typeof b) {
                                var e = document.createElement("div");
                                for (e.innerHTML = b, d = e.childNodes.length - 1; d >= 0; d--) this[c].insertBefore(e.childNodes[d], this[c].childNodes[0])
                            } else if (b instanceof a)
                            for (d = 0; d < b.length; d++) this[c].insertBefore(b[d], this[c].childNodes[0]);
                        else this[c].insertBefore(b, this[c].childNodes[0]);
                        return this
                    },
                    insertBefore: function(a) {
                        for (var c = b(a), d = 0; d < this.length; d++)
                            if (1 === c.length) c[0].parentNode.insertBefore(this[d], c[0]);
                            else if (c.length > 1)
                            for (var e = 0; e < c.length; e++) c[e].parentNode.insertBefore(this[d].cloneNode(!0), c[e])
                    },
                    insertAfter: function(a) {
                        for (var c = b(a), d = 0; d < this.length; d++)
                            if (1 === c.length) c[0].parentNode.insertBefore(this[d], c[0].nextSibling);
                            else if (c.length > 1)
                            for (var e = 0; e < c.length; e++) c[e].parentNode.insertBefore(this[d].cloneNode(!0), c[e].nextSibling)
                    },
                    next: function(c) {
                        return new a(this.length > 0 ? c ? this[0].nextElementSibling && b(this[0].nextElementSibling).is(c) ? [this[0].nextElementSibling] : [] : this[0].nextElementSibling ? [this[0].nextElementSibling] : [] : [])
                    },
                    nextAll: function(c) {
                        var d = [],
                            e = this[0];
                        if (!e) return new a([]);
                        for (; e.nextElementSibling;) {
                            var f = e.nextElementSibling;
                            c ? b(f).is(c) && d.push(f) : d.push(f), e = f
                        }
                        return new a(d)
                    },
                    prev: function(c) {
                        return new a(this.length > 0 ? c ? this[0].previousElementSibling && b(this[0].previousElementSibling).is(c) ? [this[0].previousElementSibling] : [] : this[0].previousElementSibling ? [this[0].previousElementSibling] : [] : [])
                    },
                    prevAll: function(c) {
                        var d = [],
                            e = this[0];
                        if (!e) return new a([]);
                        for (; e.previousElementSibling;) {
                            var f = e.previousElementSibling;
                            c ? b(f).is(c) && d.push(f) : d.push(f), e = f
                        }
                        return new a(d)
                    },
                    parent: function(a) {
                        for (var c = [], d = 0; d < this.length; d++) a ? b(this[d].parentNode).is(a) && c.push(this[d].parentNode) : c.push(this[d].parentNode);
                        return b(b.unique(c))
                    },
                    parents: function(a) {
                        for (var c = [], d = 0; d < this.length; d++)
                            for (var e = this[d].parentNode; e;) a ? b(e).is(a) && c.push(e) : c.push(e), e = e.parentNode;
                        return b(b.unique(c))
                    },
                    find: function(b) {
                        for (var c = [], d = 0; d < this.length; d++)
                            for (var e = this[d].querySelectorAll(b), f = 0; f < e.length; f++) c.push(e[f]);
                        return new a(c)
                    },
                    children: function(c) {
                        for (var d = [], e = 0; e < this.length; e++)
                            for (var f = this[e].childNodes, g = 0; g < f.length; g++) c ? 1 === f[g].nodeType && b(f[g]).is(c) && d.push(f[g]) : 1 === f[g].nodeType && d.push(f[g]);
                        return new a(b.unique(d))
                    },
                    remove: function() {
                        for (var a = 0; a < this.length; a++) this[a].parentNode && this[a].parentNode.removeChild(this[a]);
                        return this
                    },
                    add: function() {
                        var a, c, d = this;
                        for (a = 0; a < arguments.length; a++) {
                            var e = b(arguments[a]);
                            for (c = 0; c < e.length; c++) d[d.length] = e[c], d.length++
                        }
                        return d
                    }
                }, b.fn = a.prototype, b.unique = function(a) {
                    for (var b = [], c = 0; c < a.length; c++) - 1 === b.indexOf(a[c]) && b.push(a[c]);
                    return b
                }, b
            }()), e = ["jQuery", "Zepto", "Dom7"], f = 0; f < e.length; f++) window[e[f]] && a(window[e[f]]);
        var g;
        g = "undefined" == typeof d ? window.Dom7 || window.Zepto || window.jQuery : d, g && ("transitionEnd" in g.fn || (g.fn.transitionEnd = function(a) {
            function b(f) {
                if (f.target === this)
                    for (a.call(this, f), c = 0; c < d.length; c++) e.off(d[c], b)
            }
            var c, d = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"],
                e = this;
            if (a)
                for (c = 0; c < d.length; c++) e.on(d[c], b);
            return this
        }), "transform" in g.fn || (g.fn.transform = function(a) {
            for (var b = 0; b < this.length; b++) {
                var c = this[b].style;
                c.webkitTransform = c.MsTransform = c.msTransform = c.MozTransform = c.OTransform = c.transform = a
            }
            return this
        }), "transition" in g.fn || (g.fn.transition = function(a) {
            "string" != typeof a && (a += "ms");
            for (var b = 0; b < this.length; b++) {
                var c = this[b].style;
                c.webkitTransitionDuration = c.MsTransitionDuration = c.msTransitionDuration = c.MozTransitionDuration = c.OTransitionDuration = c.transitionDuration = a
            }
            return this
        })), window.Swiper = c
    }(), "undefined" != typeof module ? module.exports = window.Swiper : "function" == typeof define && define.amd && define([], function() {
        "use strict";
        return window.Swiper
    }),
    function() {
        var a, b, c, d, e, f = function(a, b) {
                return function() {
                    return a.apply(b, arguments)
                }
            },
            g = [].indexOf || function(a) {
                for (var b = 0, c = this.length; c > b; b++)
                    if (b in this && this[b] === a) return b;
                return -1
            };
        b = function() {
            function a() {}
            return a.prototype.extend = function(a, b) {
                var c, d;
                for (c in b) d = b[c], null == a[c] && (a[c] = d);
                return a
            }, a.prototype.isMobile = function(a) {
                return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)
            }, a.prototype.createEvent = function(a, b, c, d) {
                var e;
                return null == b && (b = !1), null == c && (c = !1), null == d && (d = null), null != document.createEvent ? (e = document.createEvent("CustomEvent"), e.initCustomEvent(a, b, c, d)) : null != document.createEventObject ? (e = document.createEventObject(), e.eventType = a) : e.eventName = a, e
            }, a.prototype.emitEvent = function(a, b) {
                return null != a.dispatchEvent ? a.dispatchEvent(b) : b in (null != a) ? a[b]() : "on" + b in (null != a) ? a["on" + b]() : void 0
            }, a.prototype.addEvent = function(a, b, c) {
                return null != a.addEventListener ? a.addEventListener(b, c, !1) : null != a.attachEvent ? a.attachEvent("on" + b, c) : a[b] = c
            }, a.prototype.removeEvent = function(a, b, c) {
                return null != a.removeEventListener ? a.removeEventListener(b, c, !1) : null != a.detachEvent ? a.detachEvent("on" + b, c) : delete a[b]
            }, a.prototype.innerHeight = function() {
                return "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight
            }, a
        }(), c = this.WeakMap || this.MozWeakMap || (c = function() {
            function a() {
                this.keys = [], this.values = []
            }
            return a.prototype.get = function(a) {
                var b, c, d, e, f;
                for (f = this.keys, b = d = 0, e = f.length; e > d; b = ++d)
                    if (c = f[b], c === a) return this.values[b]
            }, a.prototype.set = function(a, b) {
                var c, d, e, f, g;
                for (g = this.keys, c = e = 0, f = g.length; f > e; c = ++e)
                    if (d = g[c], d === a) return void(this.values[c] = b);
                return this.keys.push(a), this.values.push(b)
            }, a
        }()), a = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (a = function() {
            function a() {
                "undefined" != typeof console && null !== console && console.warn("MutationObserver is not supported by your browser."), "undefined" != typeof console && null !== console && console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")
            }
            return a.notSupported = !0, a.prototype.observe = function() {}, a
        }()), d = this.getComputedStyle || function(a, b) {
            return this.getPropertyValue = function(b) {
                var c;
                return "float" === b && (b = "styleFloat"), e.test(b) && b.replace(e, function(a, b) {
                    return b.toUpperCase()
                }), (null != (c = a.currentStyle) ? c[b] : void 0) || null
            }, this
        }, e = /(\-([a-z]){1})/g, this.WOW = function() {
            function e(a) {
                null == a && (a = {}), this.scrollCallback = f(this.scrollCallback, this), this.scrollHandler = f(this.scrollHandler, this), this.resetAnimation = f(this.resetAnimation, this), this.start = f(this.start, this), this.scrolled = !0, this.config = this.util().extend(a, this.defaults), null != a.scrollContainer && (this.config.scrollContainer = document.querySelector(a.scrollContainer)), this.animationNameCache = new c, this.wowEvent = this.util().createEvent(this.config.boxClass)
            }
            return e.prototype.defaults = {
                boxClass: "wow",
                animateClass: "animated",
                offset: 0,
                mobile: !0,
                live: !0,
                callback: null,
                scrollContainer: null
            }, e.prototype.init = function() {
                var a;
                return this.element = window.document.documentElement, "interactive" === (a = document.readyState) || "complete" === a ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start), this.finished = []
            }, e.prototype.start = function() {
                var b, c, d, e;
                if (this.stopped = !1, this.boxes = function() {
                        var a, c, d, e;
                        for (d = this.element.querySelectorAll("." + this.config.boxClass), e = [], a = 0, c = d.length; c > a; a++) b = d[a], e.push(b);
                        return e
                    }.call(this), this.all = function() {
                        var a, c, d, e;
                        for (d = this.boxes, e = [], a = 0, c = d.length; c > a; a++) b = d[a], e.push(b);
                        return e
                    }.call(this), this.boxes.length)
                    if (this.disabled()) this.resetStyle();
                    else
                        for (e = this.boxes, c = 0, d = e.length; d > c; c++) b = e[c], this.applyStyle(b, !0);
                return this.disabled() || (this.util().addEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), this.util().addEvent(window, "resize", this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50)), this.config.live ? new a(function(a) {
                    return function(b) {
                        var c, d, e, f, g;
                        for (g = [], c = 0, d = b.length; d > c; c++) f = b[c], g.push(function() {
                            var a, b, c, d;
                            for (c = f.addedNodes || [], d = [], a = 0, b = c.length; b > a; a++) e = c[a], d.push(this.doSync(e));
                            return d
                        }.call(a));
                        return g
                    }
                }(this)).observe(document.body, {
                    childList: !0,
                    subtree: !0
                }) : void 0
            }, e.prototype.stop = function() {
                return this.stopped = !0, this.util().removeEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), this.util().removeEvent(window, "resize", this.scrollHandler), null != this.interval ? clearInterval(this.interval) : void 0
            }, e.prototype.sync = function(b) {
                return a.notSupported ? this.doSync(this.element) : void 0
            }, e.prototype.doSync = function(a) {
                var b, c, d, e, f;
                if (null == a && (a = this.element), 1 === a.nodeType) {
                    for (a = a.parentNode || a, e = a.querySelectorAll("." + this.config.boxClass), f = [], c = 0, d = e.length; d > c; c++) b = e[c], g.call(this.all, b) < 0 ? (this.boxes.push(b), this.all.push(b), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(b, !0), f.push(this.scrolled = !0)) : f.push(void 0);
                    return f
                }
            }, e.prototype.show = function(a) {
                return this.applyStyle(a), a.className = a.className + " " + this.config.animateClass, null != this.config.callback && this.config.callback(a), this.util().emitEvent(a, this.wowEvent), this.util().addEvent(a, "animationend", this.resetAnimation), this.util().addEvent(a, "oanimationend", this.resetAnimation), this.util().addEvent(a, "webkitAnimationEnd", this.resetAnimation), this.util().addEvent(a, "MSAnimationEnd", this.resetAnimation), a
            }, e.prototype.applyStyle = function(a, b) {
                var c, d, e;
                return d = a.getAttribute("data-wow-duration"), c = a.getAttribute("data-wow-delay"), e = a.getAttribute("data-wow-iteration"), this.animate(function(f) {
                    return function() {
                        return f.customStyle(a, b, d, c, e)
                    }
                }(this))
            }, e.prototype.animate = function() {
                return "requestAnimationFrame" in window ? function(a) {
                    return window.requestAnimationFrame(a)
                } : function(a) {
                    return a()
                }
            }(), e.prototype.resetStyle = function() {
                var a, b, c, d, e;
                for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++) a = d[b], e.push(a.style.visibility = "visible");
                return e
            }, e.prototype.resetAnimation = function(a) {
                var b;
                return a.type.toLowerCase().indexOf("animationend") >= 0 ? (b = a.target || a.srcElement, b.className = b.className.replace(this.config.animateClass, "").trim()) : void 0
            }, e.prototype.customStyle = function(a, b, c, d, e) {
                return b && this.cacheAnimationName(a), a.style.visibility = b ? "hidden" : "visible", c && this.vendorSet(a.style, {
                    animationDuration: c
                }), d && this.vendorSet(a.style, {
                    animationDelay: d
                }), e && this.vendorSet(a.style, {
                    animationIterationCount: e
                }), this.vendorSet(a.style, {
                    animationName: b ? "none" : this.cachedAnimationName(a)
                }), a
            }, e.prototype.vendors = ["moz", "webkit"], e.prototype.vendorSet = function(a, b) {
                var c, d, e, f;
                d = [];
                for (c in b) e = b[c], a["" + c] = e, d.push(function() {
                    var b, d, g, h;
                    for (g = this.vendors, h = [], b = 0, d = g.length; d > b; b++) f = g[b], h.push(a["" + f + c.charAt(0).toUpperCase() + c.substr(1)] = e);
                    return h
                }.call(this));
                return d
            }, e.prototype.vendorCSS = function(a, b) {
                var c, e, f, g, h, i;
                for (h = d(a), g = h.getPropertyCSSValue(b), f = this.vendors, c = 0, e = f.length; e > c; c++) i = f[c], g = g || h.getPropertyCSSValue("-" + i + "-" + b);
                return g
            }, e.prototype.animationName = function(a) {
                var b;
                try {
                    b = this.vendorCSS(a, "animation-name").cssText
                } catch (c) {
                    b = d(a).getPropertyValue("animation-name")
                }
                return "none" === b ? "" : b
            }, e.prototype.cacheAnimationName = function(a) {
                return this.animationNameCache.set(a, this.animationName(a))
            }, e.prototype.cachedAnimationName = function(a) {
                return this.animationNameCache.get(a)
            }, e.prototype.scrollHandler = function() {
                return this.scrolled = !0
            }, e.prototype.scrollCallback = function() {
                var a;
                return !this.scrolled || (this.scrolled = !1, this.boxes = function() {
                    var b, c, d, e;
                    for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++) a = d[b], a && (this.isVisible(a) ? this.show(a) : e.push(a));
                    return e
                }.call(this), this.boxes.length || this.config.live) ? void 0 : this.stop()
            }, e.prototype.offsetTop = function(a) {
                for (var b; void 0 === a.offsetTop;) a = a.parentNode;
                for (b = a.offsetTop; a = a.offsetParent;) b += a.offsetTop;
                return b
            }, e.prototype.isVisible = function(a) {
                var b, c, d, e, f;
                return c = a.getAttribute("data-wow-offset") || this.config.offset, f = this.config.scrollContainer && this.config.scrollContainer.scrollTop || window.pageYOffset, e = f + Math.min(this.element.clientHeight, this.util().innerHeight()) - c, d = this.offsetTop(a), b = d + a.clientHeight, e >= d && b >= f
            }, e.prototype.util = function() {
                return null != this._util ? this._util : this._util = new b
            }, e.prototype.disabled = function() {
                return !this.config.mobile && this.util().isMobile(navigator.userAgent)
            }, e
        }()
    }.call(this),
    function(a) {
        "use strict";

        function b(a) {
            return new RegExp("(^|\\s+)" + a + "(\\s+|$)")
        }

        function f(a, b) {
            var f = c(a, b) ? e : d;
            f(a, b)
        }
        var c, d, e;
        "classList" in document.documentElement ? (c = function(a, b) {
            return a.classList.contains(b)
        }, d = function(a, b) {
            a.classList.add(b)
        }, e = function(a, b) {
            a.classList.remove(b)
        }) : (c = function(a, c) {
            return b(c).test(a.className)
        }, d = function(a, b) {
            c(a, b) || (a.className = a.className + " " + b)
        }, e = function(a, c) {
            a.className = a.className.replace(b(c), " ")
        });
        var g = {
            hasClass: c,
            addClass: d,
            removeClass: e,
            toggleClass: f,
            has: c,
            add: d,
            remove: e,
            toggle: f
        };
        "function" == typeof define && define.amd ? define(g) : a.classie = g
    }(window), ! function(a, b, c) {
        "use strict";

        function i(a) {
            g ? a() : h.push(a)
        }

        function o(a, b, d) {
            var f = !0,
                g = 1;
            if (b) {
                b = b.toLowerCase();
                do {
                    var h = 1 == g ? "@" + b : b;
                    e[a.id][h] && e[a.id][h].length && c.each(e[a.id][h], function(b, c) {
                        return f = c.apply(a, d || []) !== !1
                    })
                } while (f && g--)
            }
            return f
        }

        function p(a, b, d, e) {
            e = e || function(a, b) {
                return c(b.currentTarget)
            }, c.each(d, function(g, h) {
                g = c.isArray(d) ? h : g, (f[a.id][h] || (f[a.id][h] = [])).push([b, g, e])
            })
        }

        function q(a, b, c) {
            var e, d = g.imageType;
            return e = "svg" == d ? g.imagePathSVG : g.imagePathPNG, a.replace("{name}", c || "").replace("{img}", e + (m < 2 ? b.toUpperCase() : b) + "." + d).replace("{uni}", b).replace("{alt}", g.convert(b))
        }

        function r(a, b, c) {
            return a.replace(/:?\+?[\w_\-]+:?/g, function(a) {
                a = ":" + a.replace(/:$/, "").replace(/^:/, "") + ":";
                var d = g.emojioneList[a];
                return d ? (m > 3 && (d = d.unicode), q(b, d[d.length - 1], a)) : c ? "" : a
            })
        }

        function s(c) {
            var d, e;
            if (b.getSelection) {
                if (d = b.getSelection(), d.getRangeAt && d.rangeCount) {
                    e = d.getRangeAt(0), e.deleteContents();
                    var f = a.createElement("div");
                    f.innerHTML = c;
                    for (var h, i, g = a.createDocumentFragment(); h = f.firstChild;) i = g.appendChild(h);
                    e.insertNode(g), i && (e = e.cloneRange(), e.setStartAfter(i), e.collapse(!0), d.removeAllRanges(), d.addRange(e))
                }
            } else a.selection && "Control" != a.selection.type && a.selection.createRange().pasteHTML(c)
        }

        function u(a) {
            return "object" == typeof a
        }

        function v(a) {
            var b = t();
            if (a && a.filters) {
                var d = b.filters;
                c.each(a.filters, function(a, b) {
                    return !u(b) || c.isEmptyObject(b) ? void delete d[a] : void c.each(b, function(b, c) {
                        d[a][b] = c
                    })
                }), a.filters = d
            }
            return c.extend({}, b, a)
        }

        function z(a, b) {
            return a.replace(y, function(a) {
                var c = g[0 === m ? "jsecapeMap" : "jsEscapeMap"];
                return "undefined" != typeof a && a in c ? q(b, c[a]) : a
            })
        }

        function A(a, b) {
            return a = a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/`/g, "&#x60;").replace(/(?:\r\n|\r|\n)/g, "\n").replace(/(\n+)/g, "<div>$1</div>").replace(/\n/g, "<br/>").replace(/<br\/><\/div>/g, "</div>"), b.shortnames && (a = g.shortnameToUnicode(a)), z(a, b.emojiTemplate).replace(/\t/g, "&nbsp;&nbsp;&nbsp;&nbsp;").replace(/  /g, "&nbsp;&nbsp;")
        }

        function B(a, b) {
            switch (a = a.replace(/<img[^>]*alt="([^"]+)"[^>]*>/gi, "$1").replace(/\n|\r/g, "").replace(/<br[^>]*>/gi, "\n").replace(/(?:<(?:div|p|ol|ul|li|pre|code|object)[^>]*>)+/gi, "<div>").replace(/(?:<\/(?:div|p|ol|ul|li|pre|code|object)>)+/gi, "</div>").replace(/\n<div><\/div>/gi, "\n").replace(/<div><\/div>\n/gi, "\n").replace(/(?:<div>)+<\/div>/gi, "\n").replace(/([^\n])<\/div><div>/gi, "$1\n").replace(/(?:<\/div>)+/gi, "</div>").replace(/([^\n])<\/div>([^\n])/gi, "$1\n$2").replace(/<\/div>/gi, "").replace(/([^\n])<div>/gi, "$1\n").replace(/\n<div>/gi, "\n").replace(/<div>\n/gi, "\n\n").replace(/<(?:[^>]+)?>/g, "").replace(new RegExp(n, "g"), "").replace(/&nbsp;/g, " ").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#x27;/g, "'").replace(/&#x60;/g, "`").replace(/&amp;/g, "&"), b.saveEmojisAs) {
                case "image":
                    a = z(a, b.emojiTemplate);
                    break;
                case "shortname":
                    a = g.toShort(a)
            }
            return a
        }

        function C() {
            var a = this,
                b = a.editor[0].offsetWidth - a.editor[0].clientWidth,
                c = parseInt(a.button.css("marginRight"));
            c !== b && (a.button.css({
                marginRight: b
            }), a.floatingPicker && a.picker.css({
                right: parseInt(a.picker.css("right")) - c + b
            }))
        }

        function D() {
            var a = this;
            if (!a.sprite && a.lasyEmoji[0]) {
                var b = a.picker.offset().top,
                    d = b + a.picker.height() + 20;
                a.lasyEmoji.each(function() {
                    var a = c(this),
                        e = a.offset().top;
                    e > b && e < d && a.attr("src", a.data("src")).removeClass("lazy-emoji")
                }), a.lasyEmoji = a.lasyEmoji.filter(".lazy-emoji")
            }
        }

        function E(a, b) {
            return (b ? "" : ".") + l + (a ? "-" + a : "")
        }

        function F(a) {
            var b = c("<div/>", u(a) ? a : {
                class: E(a, !0)
            });
            return c.each(k.call(arguments).slice(1), function(a, d) {
                c.isFunction(d) && (d = d.call(b)), d && c(d).appendTo(b)
            }), b
        }

        function G() {
            return localStorage.getItem("recent_emojis") || ""
        }

        function H(a) {
            var b = G();
            if (!a.recent || a.recent !== b) {
                if (b.length) {
                    var e, f, d = a.scrollArea.is(".skinnable");
                    d || (e = a.scrollArea.scrollTop(), f = a.recentCategory.is(":visible") ? a.recentCategory.height() : 0);
                    var g = r(b, a.emojiBtnTemplate, !0).split("|").join("");
                    if (a.recentCategory.children(".emojibtn").remove(), c(g).insertAfter(a.recentCategory.children("h1")), a.recentCategory.children(".emojibtn").on("click", function() {
                            a.trigger("emojibtn.click", c(this))
                        }), a.recentFilter.show(), !d) {
                        a.recentCategory.show();
                        var h = a.recentCategory.height();
                        f !== h && a.scrollArea.scrollTop(e + h - f)
                    }
                } else a.recentFilter.hasClass("active") && a.recentFilter.removeClass("active").next().addClass("active"), a.recentCategory.hide(), a.recentFilter.hide();
                a.recent = b
            }
        }

        function I(a, b) {
            var c = G(),
                d = c.split("|"),
                e = d.indexOf(b);
            e !== -1 && d.splice(e, 1), d.unshift(b), d.length > 9 && d.pop(), localStorage.setItem("recent_emojis", d.join("|")), H(a)
        }

        function J() {
            var a = "test";
            try {
                return localStorage.setItem(a, a), localStorage.removeItem(a), !0
            } catch (a) {
                return !1
            }
        }

        function K(d, e, f) {
            f = v(f), d.sprite = f.sprite && m < 3, d.inline = null === f.inline ? e.is("INPUT") : f.inline, d.shortnames = f.shortnames, d.saveEmojisAs = f.saveEmojisAs, d.standalone = f.standalone, d.emojiTemplate = '<img alt="{alt}" class="emojione' + (d.sprite ? '-{uni}" src="' + j + '"/>' : 'emoji" src="{img}"/>'), d.emojiTemplateAlt = d.sprite ? '<i class="emojione-{uni}"/>' : '<img class="emojioneemoji" src="{img}"/>', d.emojiBtnTemplate = '<i class="emojibtn" role="button" data-name="{name}">' + d.emojiTemplateAlt + "</i>", d.recentEmojis = f.recentEmojis && J();
            var h = f.pickerPosition;
            d.floatingPicker = "top" === h || "bottom" === h;
            var k, q, t, y, z, K, L, M, N, i = e.is("TEXTAREA") || e.is("INPUT") ? "val" : "text",
                O = F({
                    class: l + (d.standalone ? " " + l + "-standalone " : " ") + (e.attr("class") || ""),
                    role: "application"
                }, k = d.editor = F("editor").attr({
                    contenteditable: !d.standalone,
                    placeholder: f.placeholder || e.data("placeholder") || e.attr("placeholder") || "",
                    tabindex: 0
                }), q = d.button = F("button", F("button-open"), F("button-close")).attr("title", f.buttonTitle), t = d.picker = F("picker", F("wrapper", z = F("filters"), N = F("scroll-area", L = F("emojis-list"), y = F("tones", function() {
                    if (f.tones) {
                        this.addClass(E("tones-" + f.tonesStyle, !0));
                        for (var a = 0; a <= 5; a++) this.append(c("<i/>", {
                            class: "btn-tone btn-tone-" + a + (a ? "" : " active"),
                            "data-skin": a,
                            role: "button"
                        }))
                    }
                })))).addClass(E("picker-position-" + f.pickerPosition, !0)).addClass(E("filters-position-" + f.filtersPosition, !0)).addClass("hidden"));
            if (k.data(e.data()), c.each(f.attributes, function(a, b) {
                    k.attr(a, b)
                }), c.each(f.filters, function(a, b) {
                    var e = 0;
                    if ("recent" !== a || d.recentEmojis) {
                        if ("tones" !== a) c("<i/>", {
                            class: E("filter", !0) + " " + E("filter-" + a, !0),
                            "data-filter": a,
                            title: b.title
                        }).wrapInner(r(b.icon, d.emojiTemplateAlt)).appendTo(z);
                        else {
                            if (!f.tones) return;
                            e = 5
                        }
                        do {
                            var g = F("category").attr({
                                    name: a,
                                    "data-tone": e
                                }).appendTo(L),
                                h = b.emoji.replace(/[\s,;]+/g, "|");
                            e > 0 && (g.hide(), h = h.split("|").join("_tone" + e + "|") + "_tone" + e), "recent" === a && (h = G()), h = r(h, d.sprite ? '<i class="emojibtn" role="button" data-name="{name}"><i class="emojione-{uni}"></i></i>' : '<i class="emojibtn" role="button" data-name="{name}"><img class="emojioneemoji lazy-emoji" data-src="{img}"/></i>', !0).split("|").join(""), g.html(h), c("<h1/>").text(b.title).prependTo(g)
                        } while (--e > 0)
                    }
                }), f.filters = null, d.sprite || (d.lasyEmoji = L.find(".lazy-emoji")), K = z.find(E("filter")), K.eq(0).addClass("active"), M = L.find(E("category")), d.recentFilter = K.filter('[data-filter="recent"]'), d.recentCategory = M.filter("[name=recent]"), d.scrollArea = N, f.container ? c(f.container).wrapInner(O) : O.insertAfter(e), f.hideSource && e.hide(), d.setText(e[i]()), e[i](d.getText()), C.apply(d), d.standalone && !d.getText().length) {
                var P = c(e).data("emoji-placeholder") || f.emojiPlaceholder;
                d.setText(P), k.addClass("has-placeholder")
            }
            p(d, L.find(".emojibtn"), {
                click: "emojibtn.click"
            }), p(d, b, {
                resize: "!resize"
            }), p(d, y.children(), {
                click: "tone.click"
            }), p(d, [t, q], {
                mousedown: "!mousedown"
            }, k), p(d, q, {
                click: "button.click"
            }), p(d, k, {
                paste: "!paste"
            }, k), p(d, k, ["focus", "blur"], function() {
                return !d.stayFocused && k
            }), p(d, t, {
                mousedown: "picker.mousedown",
                mouseup: "picker.mouseup",
                click: "picker.click",
                keyup: "picker.keyup",
                keydown: "picker.keydown",
                keypress: "picker.keypress"
            }), p(d, k, ["mousedown", "mouseup", "click", "keyup", "keydown", "keypress"]), p(d, t.find(".emojionearea-filter"), {
                click: "filter.click"
            });
            var Q = !1;
            if (N.on("scroll", function() {
                    if (!Q && (D.call(d), N.is(":not(.skinnable)"))) {
                        var a = M.eq(0),
                            b = N.offset().top;
                        M.each(function(d, e) {
                            return !(c(e).offset().top - b >= 10) && void(a = c(e))
                        });
                        var e = K.filter('[data-filter="' + a.attr("name") + '"]');
                        e[0] && !e.is(".active") && (K.removeClass("active"), e.addClass("active"))
                    }
                }), d.on("@filter.click", function(a) {
                    var b = a.is(".active");
                    if (N.is(".skinnable")) {
                        if (b) return;
                        y.children().eq(0).click()
                    }
                    Q = !0, b || (K.filter(".active").removeClass("active"), a.addClass("active"));
                    var c = M.filter('[name="' + a.data("filter") + '"]').offset().top,
                        e = N.scrollTop(),
                        f = N.offset().top;
                    N.stop().animate({
                        scrollTop: c + e - f - 2
                    }, 200, "swing", function() {
                        D.call(d), Q = !1
                    })
                }).on("@picker.show", function() {
                    d.recentEmojis && H(d), D.call(this)
                }).on("@tone.click", function(a) {
                    y.children().removeClass("active");
                    var b = a.addClass("active").data("skin");
                    b ? (N.addClass("skinnable"), M.hide().filter("[data-tone=" + b + "]").show(), K.eq(0).is('.active[data-filter="recent"]') && K.eq(0).removeClass("active").next().addClass("active")) : (N.removeClass("skinnable"), M.hide().filter("[data-tone=0]").show(), K.eq(0).click()),
                        D.call(d)
                }).on("@button.click", function(a) {
                    a.is(".active") ? d.hidePicker() : d.showPicker()
                }).on("@!paste", function(a, e) {
                    var f = function(b) {
                        var e = "caret-" + (new Date).getTime(),
                            f = A(b, d);
                        s(f), s('<i id="' + e + '"></i>'), a.scrollTop(i);
                        var g = c("#" + e),
                            h = g.offset().top - a.offset().top,
                            j = a.height();
                        (i + h >= j || i > h) && a.scrollTop(i + h - 2 * j / 3), g.remove(), d.stayFocused = !1, C.apply(d), o(d, "paste", [a, b, f])
                    };
                    if (e.originalEvent.clipboardData) {
                        var g = e.originalEvent.clipboardData.getData("text/plain");
                        return f(g), e.preventDefault ? e.preventDefault() : e.stop(), e.returnValue = !1, e.stopPropagation(), !1
                    }
                    d.stayFocused = !0, s("<span>" + n + "</span>");
                    var h = w(a[0]),
                        i = a.scrollTop(),
                        j = c("<div/>", {
                            contenteditable: !0
                        }).css({
                            position: "fixed",
                            left: "-999px",
                            width: "1px",
                            height: "1px",
                            top: "20px",
                            overflow: "hidden"
                        }).appendTo(c("BODY")).focus();
                    b.setTimeout(function() {
                        a.focus(), x(a[0], h);
                        var b = B(j.html().replace(/\r\n|\n|\r/g, "<br>"), d);
                        j.remove(), f(b)
                    }, 200)
                }).on("@emojibtn.click", function(a) {
                    k.removeClass("has-placeholder"), O.is(".focused") || k.focus(), d.standalone ? (k.html(r(a.data("name"), d.emojiTemplate)), d.trigger("blur")) : (w(k[0]), s(r(a.data("name"), d.emojiTemplate))), d.recentEmojis && I(d, a.data("name"))
                }).on("@!resize @keyup @emojibtn.click", C).on("@!mousedown", function(a, b) {
                    return O.is(".focused") || a.focus(), b.preventDefault(), !1
                }).on("@change", function() {
                    var a = d.editor.html().replace(/<\/?(?:div|span|p)[^>]*>/gi, "");
                    a.length && !/^<br[^>]*>$/i.test(a) || d.editor.html(d.content = ""), e[i](d.getText())
                }).on("@focus", function() {
                    O.addClass("focused")
                }).on("@blur", function() {
                    O.removeClass("focused"), f.hidePickerOnBlur && d.hidePicker();
                    var a = d.editor.html();
                    d.content !== a ? (d.content = a, o(d, "change", [d.editor]), e.blur().trigger("change")) : e.blur()
                }), f.shortcuts && d.on("@keydown", function(a, b) {
                    b.ctrlKey || (9 == b.which ? (b.preventDefault(), q.click()) : 27 == b.which && (b.preventDefault(), q.is(".active") && d.hidePicker()))
                }), u(f.events) && !c.isEmptyObject(f.events) && c.each(f.events, function(a, b) {
                    d.on(a.replace(/_/g, "."), b)
                }), f.autocomplete) {
                var R = function() {
                    var a = {
                        maxCount: f.textcomplete.maxCount,
                        placement: f.textcomplete.placement
                    };
                    f.shortcuts && (a.onKeydown = function(a, b) {
                        if (!a.ctrlKey && 13 == a.which) return b.KEY_ENTER
                    });
                    var b = c.map(g.emojioneList, function(a, b) {
                        return f.autocompleteTones ? b : /_tone[12345]/.test(b) ? null : b
                    });
                    b.sort(), k.textcomplete([{
                        id: l,
                        match: /\B(:[\-+\w]*)$/,
                        search: function(a, d) {
                            d(c.map(b, function(b) {
                                return 0 === b.indexOf(a) ? b : null
                            }))
                        },
                        template: function(a) {
                            return r(a, d.emojiTemplate) + " " + a.replace(/:/g, "")
                        },
                        replace: function(a) {
                            return r(a, d.emojiTemplate)
                        },
                        cache: !0,
                        index: 1
                    }], a), f.textcomplete.placement && "static" == c(k.data("textComplete").option.appendTo).css("position") && c(k.data("textComplete").option.appendTo).css("position", "relative")
                };
                c.fn.textcomplete ? R() : c.getScript("https://cdn.rawgit.com/yuku-t/jquery-textcomplete/v1.3.4/dist/jquery.textcomplete.js", R)
            }
            d.inline && (O.addClass(E("inline", !0)), d.on("@keydown", function(a, b) {
                13 == b.which && b.preventDefault()
            })), /firefox/i.test(navigator.userAgent) && a.execCommand("enableObjectResizing", !1, !1)
        }

        function N(d) {
            function e(a) {
                var b = a.cacheBustParam;
                return u(a.jsEscapeMap) ? "?v=1.2.4" === b ? "2.0.0" : "?v=2.0.1" === b ? "2.1.0" : "?v=2.1.1" === b ? "2.1.1" : "?v=2.1.2" === b ? "2.1.2" : "?v=2.1.3" === b ? "2.1.3" : "2.1.4" : "1.5.2"
            }

            function f(a) {
                switch (a) {
                    case "1.5.2":
                        return 0;
                    case "2.0.0":
                        return 1;
                    case "2.1.0":
                    case "2.1.1":
                        return 2;
                    case "2.1.2":
                        return 3;
                    case "2.1.3":
                    case "2.1.4":
                    default:
                        return 4
                }
            }
            d = v(d), M.isLoading || (!g || f(e(g)) < 2 ? (M.isLoading = !0, c.getScript(M.defaultBase + L + "/lib/js/emojione.min.js", function() {
                if (g = b.emojione, L = e(g), m = f(L), M.base = M.defaultBase + L + "/assets", d.sprite) {
                    var i = M.base + "/sprites/emojione.sprites.css";
                    a.createStyleSheet ? a.createStyleSheet(i) : c("<link/>", {
                        rel: "stylesheet",
                        href: i
                    }).appendTo("head")
                }
                for (; h.length;) h.shift().call();
                M.isLoading = !1
            })) : (L = e(g), m = f(L), M.base = M.defaultBase + L + "/assets")), i(function() {
                d.useInternalCDN && (g.imagePathPNG = M.base + "/png/", g.imagePathSVG = M.base + "/svg/", g.imagePathSVGSprites = M.base + "/sprites/emojione.sprites.svg", g.imageType = d.imageType), y = new RegExp("<object[^>]*>.*?</object>|<span[^>]*>.*?</span>|<(?:object|embed|svg|img|div|span|p|a)[^>]*>|(" + g.unicodeRegexp + ")", "gi")
            })
        }

        function P(a, b) {
            b = b.replace(/^@/, "");
            var d = a.id;
            f[d][b] && (c.each(f[d][b], function(d, e) {
                c.each(c.isArray(e[0]) ? e[0] : [e[0]], function(d, f) {
                    c(f).on(e[1], function() {
                        var d = k.call(arguments),
                            f = c.isFunction(e[2]) ? e[2].apply(a, [b].concat(d)) : e[2];
                        f && o(a, b, [f].concat(d))
                    })
                })
            }), f[d][b] = null)
        }
        var w, x, d = 0,
            e = {},
            f = {},
            g = b.emojione,
            h = [],
            j = "data:image/gif;base64,R0lGODlhAQABAJH/AP///wAAAMDAwAAAACH5BAEAAAIALAAAAAABAAEAAAICVAEAOw==",
            k = [].slice,
            l = "emojionearea",
            m = 0,
            n = "&#8203;",
            t = function() {
                return c.fn.emojioneArea && c.fn.emojioneArea.defaults ? c.fn.emojioneArea.defaults : {
                    attributes: {
                        dir: "ltr",
                        spellcheck: !1,
                        autocomplete: "off",
                        autocorrect: "off",
                        autocapitalize: "off"
                    },
                    placeholder: null,
                    emojiPlaceholder: ":smiley:",
                    container: null,
                    hideSource: !0,
                    shortnames: !0,
                    sprite: !0,
                    pickerPosition: "top",
                    filtersPosition: "top",
                    hidePickerOnBlur: !0,
                    buttonTitle: "Use the TAB key to insert emoji faster",
                    tones: !0,
                    tonesStyle: "bullet",
                    inline: null,
                    saveEmojisAs: "unicode",
                    shortcuts: !0,
                    autocomplete: !0,
                    autocompleteTones: !1,
                    standalone: !1,
                    useInternalCDN: !0,
                    imageType: "png",
                    recentEmojis: !0,
                    textcomplete: {
                        maxCount: 15,
                        placement: null
                    },
                    filters: {
                        tones: {
                            title: "Diversity",
                            emoji: "santa runner surfer swimmer lifter ear nose point_up_2 point_down point_left point_right punch wave ok_hand thumbsup thumbsdown clap open_hands boy girl man woman cop bride_with_veil person_with_blond_hair man_with_gua_pi_mao man_with_turban older_man grandma baby construction_worker princess angel information_desk_person guardsman dancer nail_care massage haircut muscle spy hand_splayed middle_finger vulcan no_good ok_woman bow raising_hand raised_hands person_frowning person_with_pouting_face pray rowboat bicyclist mountain_bicyclist walking bath metal point_up basketball_player fist raised_hand v writing_hand"
                        },
                        recent: {
                            icon: "clock3",
                            title: "Recent",
                            emoji: ""
                        },
                        smileys_people: {
                            icon: "yum",
                            title: "Smileys & People",
                            emoji: "grinning grimacing grin joy smiley smile sweat_smile laughing innocent wink blush slight_smile upside_down relaxed yum relieved heart_eyes kissing_heart kissing kissing_smiling_eyes kissing_closed_eyes stuck_out_tongue_winking_eye stuck_out_tongue_closed_eyes stuck_out_tongue money_mouth nerd sunglasses hugging smirk no_mouth neutral_face expressionless unamused rolling_eyes thinking flushed disappointed worried angry rage pensive confused slight_frown frowning2 persevere confounded tired_face weary triumph open_mouth scream fearful cold_sweat hushed frowning anguished cry disappointed_relieved sleepy sweat sob dizzy_face astonished zipper_mouth mask thermometer_face head_bandage sleeping zzz poop smiling_imp imp japanese_ogre japanese_goblin skull ghost alien robot smiley_cat smile_cat joy_cat heart_eyes_cat smirk_cat kissing_cat scream_cat crying_cat_face pouting_cat raised_hands clap wave thumbsup thumbsdown punch fist v ok_hand raised_hand open_hands muscle pray point_up point_up_2 point_down point_left point_right middle_finger hand_splayed metal vulcan writing_hand nail_care lips tongue ear nose eye eyes bust_in_silhouette busts_in_silhouette speaking_head baby boy girl man woman person_with_blond_hair older_man older_woman man_with_gua_pi_mao man_with_turban cop construction_worker guardsman spy santa angel princess bride_with_veil walking runner dancer dancers couple two_men_holding_hands two_women_holding_hands bow information_desk_person no_good ok_woman raising_hand person_with_pouting_face person_frowning haircut massage couple_with_heart couple_ww couple_mm couplekiss kiss_ww kiss_mm family family_mwg family_mwgb family_mwbb family_mwgg family_wwb family_wwg family_wwgb family_wwbb family_wwgg family_mmb family_mmg family_mmgb family_mmbb family_mmgg womans_clothes shirt jeans necktie dress bikini kimono lipstick kiss footprints high_heel sandal boot mans_shoe athletic_shoe womans_hat tophat helmet_with_cross mortar_board crown school_satchel pouch purse handbag briefcase eyeglasses dark_sunglasses ring closed_umbrella"
                        },
                        animals_nature: {
                            icon: "hamster",
                            title: "Animals & Nature",
                            emoji: "dog cat mouse hamster rabbit bear panda_face koala tiger lion_face cow pig pig_nose frog octopus monkey_face see_no_evil hear_no_evil speak_no_evil monkey chicken penguin bird baby_chick hatching_chick hatched_chick wolf boar horse unicorn bee bug snail beetle ant spider scorpion crab snake turtle tropical_fish fish blowfish dolphin whale whale2 crocodile leopard tiger2 water_buffalo ox cow2 dromedary_camel camel elephant goat ram sheep racehorse pig2 rat mouse2 rooster turkey dove dog2 poodle cat2 rabbit2 chipmunk feet dragon dragon_face cactus christmas_tree evergreen_tree deciduous_tree palm_tree seedling herb shamrock four_leaf_clover bamboo tanabata_tree leaves fallen_leaf maple_leaf ear_of_rice hibiscus sunflower rose tulip blossom cherry_blossom bouquet mushroom chestnut jack_o_lantern shell spider_web earth_americas earth_africa earth_asia full_moon waning_gibbous_moon last_quarter_moon waning_crescent_moon new_moon waxing_crescent_moon first_quarter_moon waxing_gibbous_moon new_moon_with_face full_moon_with_face first_quarter_moon_with_face last_quarter_moon_with_face sun_with_face crescent_moon star star2 dizzy sparkles comet sunny white_sun_small_cloud partly_sunny white_sun_cloud white_sun_rain_cloud cloud cloud_rain thunder_cloud_rain cloud_lightning zap fire boom snowflake cloud_snow snowman2 snowman wind_blowing_face dash cloud_tornado fog umbrella2 umbrella droplet sweat_drops ocean"
                        },
                        food_drink: {
                            icon: "pizza",
                            title: "Food & Drink",
                            emoji: "green_apple apple pear tangerine lemon banana watermelon grapes strawberry melon cherries peach pineapple tomato eggplant hot_pepper corn sweet_potato honey_pot bread cheese poultry_leg meat_on_bone fried_shrimp egg hamburger fries hotdog pizza spaghetti taco burrito ramen stew fish_cake sushi bento curry rice_ball rice rice_cracker oden dango shaved_ice ice_cream icecream cake birthday custard candy lollipop chocolate_bar popcorn doughnut cookie beer beers wine_glass cocktail tropical_drink champagne sake tea coffee baby_bottle fork_and_knife fork_knife_plate"
                        },
                        activity: {
                            icon: "basketball",
                            title: "Activity",
                            emoji: "soccer basketball football baseball tennis volleyball rugby_football 8ball golf golfer ping_pong badminton hockey field_hockey cricket ski skier snowboarder ice_skate bow_and_arrow fishing_pole_and_fish rowboat swimmer surfer bath basketball_player lifter bicyclist mountain_bicyclist horse_racing levitate trophy running_shirt_with_sash medal military_medal reminder_ribbon rosette ticket tickets performing_arts art circus_tent microphone headphones musical_score musical_keyboard saxophone trumpet guitar violin clapper video_game space_invader dart game_die slot_machine bowling"
                        },
                        travel_places: {
                            icon: "rocket",
                            title: "Travel & Places",
                            emoji: "red_car taxi blue_car bus trolleybus race_car police_car ambulance fire_engine minibus truck articulated_lorry tractor motorcycle bike rotating_light oncoming_police_car oncoming_bus oncoming_automobile oncoming_taxi aerial_tramway mountain_cableway suspension_railway railway_car train monorail bullettrain_side bullettrain_front light_rail mountain_railway steam_locomotive train2 metro tram station helicopter airplane_small airplane airplane_departure airplane_arriving sailboat motorboat speedboat ferry cruise_ship rocket satellite_orbital seat anchor construction fuelpump busstop vertical_traffic_light traffic_light checkered_flag ship ferris_wheel roller_coaster carousel_horse construction_site foggy tokyo_tower factory fountain rice_scene mountain mountain_snow mount_fuji volcano japan camping tent park motorway railway_track sunrise sunrise_over_mountains desert beach island city_sunset city_dusk cityscape night_with_stars bridge_at_night milky_way stars sparkler fireworks rainbow homes european_castle japanese_castle stadium statue_of_liberty house house_with_garden house_abandoned office department_store post_office european_post_office hospital bank hotel convenience_store school love_hotel wedding classical_building church mosque synagogue kaaba shinto_shrine"
                        },
                        objects: {
                            icon: "bulb",
                            title: "Objects",
                            emoji: "watch iphone calling computer keyboard desktop printer mouse_three_button trackball joystick compression minidisc floppy_disk cd dvd vhs camera camera_with_flash video_camera movie_camera projector film_frames telephone_receiver telephone pager fax tv radio microphone2 level_slider control_knobs stopwatch timer alarm_clock clock hourglass_flowing_sand hourglass satellite battery electric_plug bulb flashlight candle wastebasket oil money_with_wings dollar yen euro pound moneybag credit_card gem scales wrench hammer hammer_pick tools pick nut_and_bolt gear chains gun bomb knife dagger crossed_swords shield smoking skull_crossbones coffin urn amphora crystal_ball prayer_beads barber alembic telescope microscope hole pill syringe thermometer label bookmark toilet shower bathtub key key2 couch sleeping_accommodation bed door bellhop frame_photo map beach_umbrella moyai shopping_bags balloon flags ribbon gift confetti_ball tada dolls wind_chime crossed_flags izakaya_lantern envelope envelope_with_arrow incoming_envelope e-mail love_letter postbox mailbox_closed mailbox mailbox_with_mail mailbox_with_no_mail package postal_horn inbox_tray outbox_tray scroll page_with_curl bookmark_tabs bar_chart chart_with_upwards_trend chart_with_downwards_trend page_facing_up date calendar calendar_spiral card_index card_box ballot_box file_cabinet clipboard notepad_spiral file_folder open_file_folder dividers newspaper2 newspaper notebook closed_book green_book blue_book orange_book notebook_with_decorative_cover ledger books book link paperclip paperclips scissors triangular_ruler straight_ruler pushpin round_pushpin triangular_flag_on_post flag_white flag_black closed_lock_with_key lock unlock lock_with_ink_pen pen_ballpoint pen_fountain black_nib pencil pencil2 crayon paintbrush mag mag_right"
                        },
                        symbols: {
                            icon: "heartpulse",
                            title: "Symbols",
                            emoji: "heart yellow_heart green_heart blue_heart purple_heart broken_heart heart_exclamation two_hearts revolving_hearts heartbeat heartpulse sparkling_heart cupid gift_heart heart_decoration peace cross star_and_crescent om_symbol wheel_of_dharma star_of_david six_pointed_star menorah yin_yang orthodox_cross place_of_worship ophiuchus aries taurus gemini cancer leo virgo libra scorpius sagittarius capricorn aquarius pisces id atom u7a7a u5272 radioactive biohazard mobile_phone_off vibration_mode u6709 u7121 u7533 u55b6 u6708 eight_pointed_black_star vs accept white_flower ideograph_advantage secret congratulations u5408 u6e80 u7981 a b ab cl o2 sos no_entry name_badge no_entry_sign x o anger hotsprings no_pedestrians do_not_litter no_bicycles non-potable_water underage no_mobile_phones exclamation grey_exclamation question grey_question bangbang interrobang 100 low_brightness high_brightness trident fleur-de-lis part_alternation_mark warning children_crossing beginner recycle u6307 chart sparkle eight_spoked_asterisk negative_squared_cross_mark white_check_mark diamond_shape_with_a_dot_inside cyclone loop globe_with_meridians m atm sa passport_control customs baggage_claim left_luggage wheelchair no_smoking wc parking potable_water mens womens baby_symbol restroom put_litter_in_its_place cinema signal_strength koko ng ok up cool new free zero one two three four five six seven eight nine ten 1234 arrow_forward pause_button play_pause stop_button record_button track_next track_previous fast_forward rewind twisted_rightwards_arrows repeat repeat_one arrow_backward arrow_up_small arrow_down_small arrow_double_up arrow_double_down arrow_right arrow_left arrow_up arrow_down arrow_upper_right arrow_lower_right arrow_lower_left arrow_upper_left arrow_up_down left_right_arrow arrows_counterclockwise arrow_right_hook leftwards_arrow_with_hook arrow_heading_up arrow_heading_down hash asterisk information_source abc abcd capital_abcd symbols musical_note notes wavy_dash curly_loop heavy_check_mark arrows_clockwise heavy_plus_sign heavy_minus_sign heavy_division_sign heavy_multiplication_x heavy_dollar_sign currency_exchange copyright registered tm end back on top soon ballot_box_with_check radio_button white_circle black_circle red_circle large_blue_circle small_orange_diamond small_blue_diamond large_orange_diamond large_blue_diamond small_red_triangle black_small_square white_small_square black_large_square white_large_square small_red_triangle_down black_medium_square white_medium_square black_medium_small_square white_medium_small_square black_square_button white_square_button speaker sound loud_sound mute mega loudspeaker bell no_bell black_joker mahjong spades clubs hearts diamonds flower_playing_cards thought_balloon anger_right speech_balloon clock1 clock2 clock3 clock4 clock5 clock6 clock7 clock8 clock9 clock10 clock11 clock12 clock130 clock230 clock330 clock430 clock530 clock630 clock730 clock830 clock930 clock1030 clock1130 clock1230 eye_in_speech_bubble"
                        },
                        flags: {
                            icon: "flag_gb",
                            title: "Flags",
                            emoji: "ac af al dz ad ao ai ag ar am aw au at az bs bh bd bb by be bz bj bm bt bo ba bw br bn bg bf bi cv kh cm ca ky cf td flag_cl cn co km cg flag_cd cr hr cu cy cz dk dj dm do ec eg sv gq er ee et fk fo fj fi fr pf ga gm ge de gh gi gr gl gd gu gt gn gw gy ht hn hk hu is in flag_id ir iq ie il it ci jm jp je jo kz ke ki xk kw kg la lv lb ls lr ly li lt lu mo mk mg mw my mv ml mt mh mr mu mx fm md mc mn me ms ma mz mm na nr np nl nc nz ni ne flag_ng nu kp no om pk pw ps pa pg py pe ph pl pt pr qa ro ru rw sh kn lc vc ws sm st flag_sa sn rs sc sl sg sk si sb so za kr es lk sd sr sz se ch sy tw tj tz th tl tg to tt tn tr flag_tm flag_tm ug ua ae gb us vi uy uz vu va ve vn wf eh ye zm zw re ax ta io bq cx cc gg im yt nf pn bl pm gs tk bv hm sj um ic ea cp dg as aq vg ck cw eu gf tf gp mq mp sx ss tc "
                        }
                    }
                }
            };
        b.getSelection && a.createRange ? (w = function(a) {
            var c = b.getSelection && b.getSelection();
            if (c && c.rangeCount > 0) {
                var d = c.getRangeAt(0),
                    e = d.cloneRange();
                return e.selectNodeContents(a), e.setEnd(d.startContainer, d.startOffset), e.toString().length
            }
        }, x = function(c, d) {
            var e = 0,
                f = a.createRange();
            f.setStart(c, 0), f.collapse(!0);
            for (var h, g = [c], i = !1, j = !1; !j && (h = g.pop());)
                if (3 == h.nodeType) {
                    var k = e + h.length;
                    !i && d >= e && d <= k && (f.setStart(h, d - e), f.setEnd(h, d - e), j = !0), e = k
                } else
                    for (var l = h.childNodes.length; l--;) g.push(h.childNodes[l]);
            d = b.getSelection(), d.removeAllRanges(), d.addRange(f)
        }) : a.selection && a.body.createTextRange && (w = function(b) {
            var c = a.selection.createRange(),
                d = a.body.createTextRange();
            d.moveToElementText(b), d.setEndPoint("EndToStart", c);
            var e = d.text.length;
            return e + c.text.length
        }, x = function(b, c) {
            var d = a.body.createTextRange();
            d.moveToElementText(b), d.collapse(!0), d.moveEnd("character", c), d.moveStart("character", c), d.select()
        });
        var y, L = b.emojioneVersion || "2.1.4",
            M = {
                defaultBase: "https://cdnjs.cloudflare.com/ajax/libs/emojione/",
                base: null,
                isLoading: !1
            },
            O = function(a, b) {
                var c = this;
                N(b), e[c.id = ++d] = {}, f[c.id] = {}, i(function() {
                    K(c, a, b)
                })
            };
        O.prototype.on = function(a, b) {
            if (a && c.isFunction(b)) {
                var d = this;
                c.each(a.toLowerCase().split(" "), function(a, c) {
                    P(d, c), (e[d.id][c] || (e[d.id][c] = [])).push(b)
                })
            }
            return this
        }, O.prototype.off = function(a, b) {
            if (a) {
                var d = this.id;
                c.each(a.toLowerCase().replace(/_/g, ".").split(" "), function(a, f) {
                    e[d][f] && !/^@/.test(f) && (b ? c.each(e[d][f], function(a, c) {
                        c === b && (e[d][f] = e[d][f].splice(a, 1))
                    }) : e[d][f] = [])
                })
            }
            return this
        }, O.prototype.trigger = function() {
            var a = k.call(arguments),
                b = [this].concat(a.slice(0, 1));
            return b.push(a.slice(1)), o.apply(this, b)
        }, O.prototype.setFocus = function() {
            var a = this;
            return i(function() {
                a.editor.focus()
            }), a
        }, O.prototype.setText = function(a) {
            var b = this;
            return i(function() {
                b.editor.html(A(a, b)), b.content = b.editor.html(), o(b, "change", [b.editor]), C.apply(b)
            }), b
        }, O.prototype.getText = function() {
            return B(this.editor.html(), this)
        }, O.prototype.showPicker = function() {
            var a = this;
            return a._sh_timer && b.clearTimeout(a._sh_timer), a.picker.removeClass("hidden"), a._sh_timer = b.setTimeout(function() {
                a.button.addClass("active")
            }, 50), o(a, "picker.show", [a.picker]), a
        }, O.prototype.hidePicker = function() {
            var a = this;
            return a._sh_timer && b.clearTimeout(a._sh_timer), a.button.removeClass("active"), a._sh_timer = b.setTimeout(function() {
                a.picker.addClass("hidden")
            }, 500), o(a, "picker.hide", [a.picker]), a
        }, c.fn.emojioneArea = function(a) {
            return this.each(function() {
                return this.emojioneArea ? this.emojioneArea : (c.data(this, "emojioneArea", this.emojioneArea = new O(c(this), a)), this.emojioneArea)
            })
        }, c.fn.emojioneArea.defaults = t()
    }(document, window, jQuery),
    function(a) {
        a.easytabs = function(b, c) {
            var g, h, i, j, k, m, d = this,
                e = a(b),
                f = {
                    animate: !0,
                    panelActiveClass: "active",
                    tabActiveClass: "active",
                    defaultTab: "li:first-child",
                    animationSpeed: "normal",
                    tabs: "> ul > li",
                    updateHash: !0,
                    cycle: !1,
                    collapsible: !1,
                    collapsedClass: "collapsed",
                    collapsedByDefault: !0,
                    uiTabs: !1,
                    transitionIn: "fadeIn",
                    transitionOut: "fadeOut",
                    transitionInEasing: "swing",
                    transitionOutEasing: "swing",
                    transitionCollapse: "slideUp",
                    transitionUncollapse: "slideDown",
                    transitionCollapseEasing: "swing",
                    transitionUncollapseEasing: "swing",
                    containerClass: "",
                    tabsClass: "",
                    tabClass: "",
                    panelClass: "",
                    cache: !0,
                    event: "click",
                    panelContext: e
                },
                l = {
                    fast: 200,
                    normal: 400,
                    slow: 600
                };
            d.init = function() {
                d.settings = m = a.extend({}, f, c), m.bind_str = m.event + ".easytabs", m.uiTabs && (m.tabActiveClass = "ui-tabs-selected", m.containerClass = "ui-tabs ui-widget ui-widget-content ui-corner-all", m.tabsClass = "ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all", m.tabClass = "ui-state-default ui-corner-top", m.panelClass = "ui-tabs-panel ui-widget-content ui-corner-bottom"), m.collapsible && void 0 !== c.defaultTab && void 0 === c.collpasedByDefault && (m.collapsedByDefault = !1), "string" == typeof m.animationSpeed && (m.animationSpeed = l[m.animationSpeed]), a("a.anchor").remove().prependTo("body"), e.data("easytabs", {}), d.setTransitions(), d.getTabs(), o(), p(), r(), v(), w(), e.attr("data-easytabs", !0)
            }, d.setTransitions = function() {
                i = m.animate ? {
                    show: m.transitionIn,
                    hide: m.transitionOut,
                    speed: m.animationSpeed,
                    collapse: m.transitionCollapse,
                    uncollapse: m.transitionUncollapse,
                    halfSpeed: m.animationSpeed / 2
                } : {
                    show: "show",
                    hide: "hide",
                    speed: 0,
                    collapse: "hide",
                    uncollapse: "show",
                    halfSpeed: 0
                }
            }, d.getTabs = function() {
                var b;
                d.tabs = e.find(m.tabs), d.panels = a(), d.tabs.each(function() {
                    var c = a(this),
                        e = c.children("a"),
                        f = c.children("a").data("target");
                    c.data("easytabs", {}), void 0 !== f && null !== f ? c.data("easytabs").ajax = e.attr("href") : f = e.attr("href"), f = f.match(/#([^\?]+)/)[1], b = m.panelContext.find("#" + f), b.length ? (b.data("easytabs", {
                        position: b.css("position"),
                        visibility: b.css("visibility")
                    }), b.not(m.panelActiveClass).hide(), d.panels = d.panels.add(b), c.data("easytabs").panel = b) : (d.tabs = d.tabs.not(c), "console" in window && console.warn("Warning: tab without matching panel for selector '#" + f + "' removed from set"))
                })
            }, d.selectTab = function(a, b) {
                var c = window.location,
                    f = (c.hash.match(/^[^\?]*/)[0], a.parent().data("easytabs").panel),
                    g = a.parent().data("easytabs").ajax;
                m.collapsible && !k && (a.hasClass(m.tabActiveClass) || a.hasClass(m.collapsedClass)) ? d.toggleTabCollapse(a, f, g, b) : a.hasClass(m.tabActiveClass) && f.hasClass(m.panelActiveClass) ? m.cache || s(a, f, g, b) : s(a, f, g, b)
            }, d.toggleTabCollapse = function(a, b, c, f) {
                d.panels.stop(!0, !0), n(e, "easytabs:before", [a, b, m]) && (d.tabs.filter("." + m.tabActiveClass).removeClass(m.tabActiveClass).children().removeClass(m.tabActiveClass), a.hasClass(m.collapsedClass) ? (!c || m.cache && a.parent().data("easytabs").cached || (e.trigger("easytabs:ajax:beforeSend", [a, b]), b.load(c, function(c, d, f) {
                    a.parent().data("easytabs").cached = !0, e.trigger("easytabs:ajax:complete", [a, b, c, d, f])
                })), a.parent().removeClass(m.collapsedClass).addClass(m.tabActiveClass).children().removeClass(m.collapsedClass).addClass(m.tabActiveClass), b.addClass(m.panelActiveClass)[i.uncollapse](i.speed, m.transitionUncollapseEasing, function() {
                    e.trigger("easytabs:midTransition", [a, b, m]), "function" == typeof f && f()
                })) : (a.addClass(m.collapsedClass).parent().addClass(m.collapsedClass), b.removeClass(m.panelActiveClass)[i.collapse](i.speed, m.transitionCollapseEasing, function() {
                    e.trigger("easytabs:midTransition", [a, b, m]), "function" == typeof f && f()
                })))
            }, d.matchTab = function(a) {
                return d.tabs.find("[href='" + a + "'],[data-target='" + a + "']").first()
            }, d.matchInPanel = function(a) {
                return a && d.validId(a) ? d.panels.filter(":has(" + a + ")").first() : []
            }, d.validId = function(a) {
                return a.substr(1).match(/^[A-Za-z]+[A-Za-z0-9\-_:\.].$/)
            }, d.selectTabFromHashChange = function() {
                var c, a = window.location.hash.match(/^[^\?]*/)[0],
                    b = d.matchTab(a);
                m.updateHash && (b.length ? (k = !0, d.selectTab(b)) : (c = d.matchInPanel(a), c.length ? (a = "#" + c.attr("id"), b = d.matchTab(a), k = !0, d.selectTab(b)) : g.hasClass(m.tabActiveClass) || m.cycle || ("" === a || d.matchTab(j).length || e.closest(a).length) && (k = !0, d.selectTab(h))))
            }, d.cycleTabs = function(b) {
                m.cycle && (b %= d.tabs.length, $tab = a(d.tabs[b]).children("a").first(), k = !0, d.selectTab($tab, function() {
                    setTimeout(function() {
                        d.cycleTabs(b + 1)
                    }, m.cycle)
                }))
            }, d.publicMethods = {
                select: function(b) {
                    var c;
                    0 === (c = d.tabs.filter(b)).length ? 0 === (c = d.tabs.find("a[href='" + b + "']")).length && 0 === (c = d.tabs.find("a" + b)).length && 0 === (c = d.tabs.find("[data-target='" + b + "']")).length && 0 === (c = d.tabs.find("a[href$='" + b + "']")).length && a.error("Tab '" + b + "' does not exist in tab set") : c = c.children("a").first(), d.selectTab(c)
                }
            };
            var n = function(b, c, d) {
                    var e = a.Event(c);
                    return b.trigger(e, d), e.result !== !1
                },
                o = function() {
                    e.addClass(m.containerClass), d.tabs.parent().addClass(m.tabsClass), d.tabs.addClass(m.tabClass), d.panels.addClass(m.panelClass)
                },
                p = function() {
                    var e, b = window.location.hash.match(/^[^\?]*/)[0],
                        c = d.matchTab(b).parent();
                    1 === c.length ? (g = c, m.cycle = !1) : (e = d.matchInPanel(b), e.length ? (b = "#" + e.attr("id"), g = d.matchTab(b).parent()) : (g = d.tabs.parent().find(m.defaultTab), 0 === g.length && a.error("The specified default tab ('" + m.defaultTab + "') could not be found in the tab set ('" + m.tabs + "') out of " + d.tabs.length + " tabs."))), h = g.children("a").first(), q(c)
                },
                q = function(b) {
                    var c, d;
                    m.collapsible && 0 === b.length && m.collapsedByDefault ? g.addClass(m.collapsedClass).children().addClass(m.collapsedClass) : (c = a(g.data("easytabs").panel), d = g.data("easytabs").ajax, !d || m.cache && g.data("easytabs").cached || (e.trigger("easytabs:ajax:beforeSend", [h, c]), c.load(d, function(a, b, d) {
                        g.data("easytabs").cached = !0, e.trigger("easytabs:ajax:complete", [h, c, a, b, d])
                    })), g.data("easytabs").panel.show().addClass(m.panelActiveClass), g.addClass(m.tabActiveClass).children().addClass(m.tabActiveClass)), e.trigger("easytabs:initialised", [h, c])
                },
                r = function() {
                    d.tabs.children("a").bind(m.bind_str, function(b) {
                        m.cycle = !1, k = !1, d.selectTab(a(this)), b.preventDefault ? b.preventDefault() : b.returnValue = !1
                    })
                },
                s = function(a, b, c, f) {
                    if (d.panels.stop(!0, !0), n(e, "easytabs:before", [a, b, m])) {
                        var l, o, p, q, g = d.panels.filter(":visible"),
                            h = b.parent(),
                            r = window.location.hash.match(/^[^\?]*/)[0];
                        m.animate && (l = t(b), o = g.length ? u(g) : 0, p = l - o), j = r, q = function() {
                            e.trigger("easytabs:midTransition", [a, b, m]), m.animate && "fadeIn" == m.transitionIn && p < 0 && h.animate({
                                height: h.height() + p
                            }, i.halfSpeed).css({
                                "min-height": ""
                            }), m.updateHash && !k ? window.location.hash = "#" + b.attr("id") : k = !1, b[i.show](i.speed, m.transitionInEasing, function() {
                                h.css({
                                    height: "",
                                    "min-height": ""
                                }), e.trigger("easytabs:after", [a, b, m]), "function" == typeof f && f()
                            })
                        }, !c || m.cache && a.parent().data("easytabs").cached || (e.trigger("easytabs:ajax:beforeSend", [a, b]), b.load(c, function(c, d, f) {
                            a.parent().data("easytabs").cached = !0, e.trigger("easytabs:ajax:complete", [a, b, c, d, f])
                        })), m.animate && "fadeOut" == m.transitionOut && (p > 0 ? h.animate({
                            height: h.height() + p
                        }, i.halfSpeed) : h.css({
                            "min-height": h.height()
                        })), d.tabs.filter("." + m.tabActiveClass).removeClass(m.tabActiveClass).children().removeClass(m.tabActiveClass), d.tabs.filter("." + m.collapsedClass).removeClass(m.collapsedClass).children().removeClass(m.collapsedClass), a.parent().addClass(m.tabActiveClass).children().addClass(m.tabActiveClass), d.panels.filter("." + m.panelActiveClass).removeClass(m.panelActiveClass), b.addClass(m.panelActiveClass), g.length ? g[i.hide](i.speed, m.transitionOutEasing, q) : b[i.uncollapse](i.speed, m.transitionUncollapseEasing, q)
                    }
                },
                t = function(b) {
                    if (b.data("easytabs") && b.data("easytabs").lastHeight) return b.data("easytabs").lastHeight;
                    var d, e, c = b.css("display");
                    try {
                        d = a("<div></div>", {
                            position: "absolute",
                            visibility: "hidden",
                            overflow: "hidden"
                        })
                    } catch (b) {
                        d = a("<div></div>", {
                            visibility: "hidden",
                            overflow: "hidden"
                        })
                    }
                    return e = b.wrap(d).css({
                        position: "relative",
                        visibility: "hidden",
                        display: "block"
                    }).outerHeight(), b.unwrap(), b.css({
                        position: b.data("easytabs").position,
                        visibility: b.data("easytabs").visibility,
                        display: c
                    }), b.data("easytabs").lastHeight = e, e
                },
                u = function(a) {
                    var b = a.outerHeight();
                    return a.data("easytabs") ? a.data("easytabs").lastHeight = b : a.data("easytabs", {
                        lastHeight: b
                    }), b
                },
                v = function() {
                    "function" == typeof a(window).hashchange ? a(window).hashchange(function() {
                        d.selectTabFromHashChange()
                    }) : a.address && "function" == typeof a.address.change && a.address.change(function() {
                        d.selectTabFromHashChange()
                    })
                },
                w = function() {
                    var a;
                    m.cycle && (a = d.tabs.index(g), setTimeout(function() {
                        d.cycleTabs(a + 1)
                    }, m.cycle))
                };
            d.init()
        }, a.fn.easytabs = function(b) {
            var c = arguments;
            return this.each(function() {
                var d = a(this),
                    e = d.data("easytabs");
                if (void 0 === e && (e = new a.easytabs(this, b), d.data("easytabs", e)), e.publicMethods[b]) return e.publicMethods[b](Array.prototype.slice.call(c, 1))
            })
        }
    }(jQuery),
    function(a) {
        "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof exports ? module.exports = a(require("jquery")) : a(jQuery)
    }(function(a) {
        var b = !1,
            c = !1,
            d = 0,
            e = 2e3,
            f = 0,
            g = ["webkit", "ms", "moz", "o"],
            h = window.requestAnimationFrame || !1,
            i = window.cancelAnimationFrame || !1;
        if (!h)
            for (var j in g) {
                var k = g[j];
                if (h = window[k + "RequestAnimationFrame"]) {
                    i = window[k + "CancelAnimationFrame"] || window[k + "CancelRequestAnimationFrame"];
                    break
                }
            }
        var l = window.MutationObserver || window.WebKitMutationObserver || !1,
            m = {
                zindex: "auto",
                cursoropacitymin: 0,
                cursoropacitymax: 1,
                cursorcolor: "#424242",
                cursorwidth: "6px",
                cursorborder: "1px solid #fff",
                cursorborderradius: "5px",
                scrollspeed: 60,
                mousescrollstep: 24,
                touchbehavior: !1,
                hwacceleration: !0,
                usetransition: !0,
                boxzoom: !1,
                dblclickzoom: !0,
                gesturezoom: !0,
                grabcursorenabled: !0,
                autohidemode: !0,
                background: "",
                iframeautoresize: !0,
                cursorminheight: 32,
                preservenativescrolling: !0,
                railoffset: !1,
                railhoffset: !1,
                bouncescroll: !0,
                spacebarenabled: !0,
                railpadding: {
                    top: 0,
                    right: 0,
                    left: 0,
                    bottom: 0
                },
                disableoutline: !0,
                horizrailenabled: !0,
                railalign: "right",
                railvalign: "bottom",
                enabletranslate3d: !0,
                enablemousewheel: !0,
                enablekeyboard: !0,
                smoothscroll: !0,
                sensitiverail: !0,
                enablemouselockapi: !0,
                cursorfixedheight: !1,
                directionlockdeadzone: 6,
                hidecursordelay: 400,
                nativeparentscrolling: !0,
                enablescrollonselection: !0,
                overflowx: !0,
                overflowy: !0,
                cursordragspeed: .3,
                rtlmode: "auto",
                cursordragontouch: !1,
                oneaxismousemode: "auto",
                scriptpath: function() {
                    var a = document.getElementsByTagName("script"),
                        a = a.length ? a[a.length - 1].src.split("?")[0] : "";
                    return 0 < a.split("/").length ? a.split("/").slice(0, -1).join("/") + "/" : ""
                }(),
                preventmultitouchscrolling: !0,
                disablemutationobserver: !1
            },
            n = !1,
            o = function() {
                if (n) return n;
                var a = document.createElement("DIV"),
                    b = a.style,
                    c = navigator.userAgent,
                    d = navigator.platform,
                    e = {
                        haspointerlock: "pointerLockElement" in document || "webkitPointerLockElement" in document || "mozPointerLockElement" in document
                    };
                e.isopera = "opera" in window, e.isopera12 = e.isopera && "getUserMedia" in navigator, e.isoperamini = "[object OperaMini]" === Object.prototype.toString.call(window.operamini), e.isie = "all" in document && "attachEvent" in a && !e.isopera, e.isieold = e.isie && !("msInterpolationMode" in b), e.isie7 = e.isie && !e.isieold && (!("documentMode" in document) || 7 == document.documentMode), e.isie8 = e.isie && "documentMode" in document && 8 == document.documentMode, e.isie9 = e.isie && "performance" in window && 9 == document.documentMode, e.isie10 = e.isie && "performance" in window && 10 == document.documentMode, e.isie11 = "msRequestFullscreen" in a && 11 <= document.documentMode, e.isieedge12 = navigator.userAgent.match(/Edge\/12\./), e.isieedge = "msOverflowStyle" in a, e.ismodernie = e.isie11 || e.isieedge, e.isie9mobile = /iemobile.9/i.test(c),
                    e.isie9mobile && (e.isie9 = !1), e.isie7mobile = !e.isie9mobile && e.isie7 && /iemobile/i.test(c), e.ismozilla = "MozAppearance" in b, e.iswebkit = "WebkitAppearance" in b, e.ischrome = "chrome" in window, e.ischrome38 = e.ischrome && "touchAction" in b, e.ischrome22 = !e.ischrome38 && e.ischrome && e.haspointerlock, e.ischrome26 = !e.ischrome38 && e.ischrome && "transition" in b, e.cantouch = "ontouchstart" in document.documentElement || "ontouchstart" in window, e.hasw3ctouch = (window.PointerEvent || !1) && (0 < navigator.MaxTouchPoints || 0 < navigator.msMaxTouchPoints), e.hasmstouch = !e.hasw3ctouch && (window.MSPointerEvent || !1), e.ismac = /^mac$/i.test(d), e.isios = e.cantouch && /iphone|ipad|ipod/i.test(d), e.isios4 = e.isios && !("seal" in Object), e.isios7 = e.isios && "webkitHidden" in document, e.isios8 = e.isios && "hidden" in document, e.isandroid = /android/i.test(c), e.haseventlistener = "addEventListener" in a, e.trstyle = !1, e.hastransform = !1, e.hastranslate3d = !1, e.transitionstyle = !1, e.hastransition = !1, e.transitionend = !1, d = ["transform", "msTransform", "webkitTransform", "MozTransform", "OTransform"];
                for (c = 0; c < d.length; c++)
                    if (void 0 !== b[d[c]]) {
                        e.trstyle = d[c];
                        break
                    }
                e.hastransform = !!e.trstyle, e.hastransform && (b[e.trstyle] = "translate3d(1px,2px,3px)", e.hastranslate3d = /translate3d/.test(b[e.trstyle])), e.transitionstyle = !1, e.prefixstyle = "", e.transitionend = !1;
                for (var d = "transition webkitTransition msTransition MozTransition OTransition OTransition KhtmlTransition".split(" "), f = " -webkit- -ms- -moz- -o- -o -khtml-".split(" "), g = "transitionend webkitTransitionEnd msTransitionEnd transitionend otransitionend oTransitionEnd KhtmlTransitionEnd".split(" "), c = 0; c < d.length; c++)
                    if (d[c] in b) {
                        e.transitionstyle = d[c], e.prefixstyle = f[c], e.transitionend = g[c];
                        break
                    }
                e.ischrome26 && (e.prefixstyle = f[1]), e.hastransition = e.transitionstyle;
                a: {
                    for (c = ["grab", "-webkit-grab", "-moz-grab"], (e.ischrome && !e.ischrome38 || e.isie) && (c = []), d = 0; d < c.length; d++)
                        if (f = c[d], b.cursor = f, b.cursor == f) {
                            b = f;
                            break a
                        }
                    b = "url(//patriciaportfolio.googlecode.com/files/openhand.cur),n-resize"
                }
                return e.cursorgrabvalue = b, e.hasmousecapture = "setCapture" in a, e.hasMutationObserver = !1 !== l, n = e
            },
            p = function(g, j) {
                function k() {
                    var a = t.doc.css(w.trstyle);
                    return !(!a || "matrix" != a.substr(0, 6)) && a.replace(/^.*\((.*)\)$/g, "$1").replace(/px/g, "").split(/, +/)
                }

                function n() {
                    var a = t.win;
                    if ("zIndex" in a) return a.zIndex();
                    for (; 0 < a.length && 9 != a[0].nodeType;) {
                        var b = a.css("zIndex");
                        if (!isNaN(b) && 0 != b) return parseInt(b);
                        a = a.parent()
                    }
                    return !1
                }

                function p(a, b, c) {
                    return b = a.css(b), a = parseFloat(b), isNaN(a) ? (a = A[b] || 0, c = 3 == a ? c ? t.win.outerHeight() - t.win.innerHeight() : t.win.outerWidth() - t.win.innerWidth() : 1, t.isie8 && a && (a += 1), c ? a : 0) : a
                }

                function r(a, b, c, d) {
                    t._bind(a, b, function(d) {
                        d = d ? d : window.event;
                        var e = {
                            original: d,
                            target: d.target || d.srcElement,
                            type: "wheel",
                            deltaMode: "MozMousePixelScroll" == d.type ? 0 : 1,
                            deltaX: 0,
                            deltaZ: 0,
                            preventDefault: function() {
                                return d.preventDefault ? d.preventDefault() : d.returnValue = !1, !1
                            },
                            stopImmediatePropagation: function() {
                                d.stopImmediatePropagation ? d.stopImmediatePropagation() : d.cancelBubble = !0
                            }
                        };
                        return "mousewheel" == b ? (d.wheelDeltaX && (e.deltaX = -.025 * d.wheelDeltaX), d.wheelDeltaY && (e.deltaY = -.025 * d.wheelDeltaY), e.deltaY || e.deltaX || (e.deltaY = -.025 * d.wheelDelta)) : e.deltaY = d.detail, c.call(a, e)
                    }, d)
                }

                function s(a, b, c) {
                    var d, e;
                    if (0 == a.deltaMode ? (d = -Math.floor(t.opt.mousescrollstep / 54 * a.deltaX), e = -Math.floor(t.opt.mousescrollstep / 54 * a.deltaY)) : 1 == a.deltaMode && (d = -Math.floor(a.deltaX * t.opt.mousescrollstep), e = -Math.floor(a.deltaY * t.opt.mousescrollstep)), b && t.opt.oneaxismousemode && 0 == d && e && (d = e, e = 0, c && (0 > d ? t.getScrollLeft() >= t.page.maxw : 0 >= t.getScrollLeft()) && (e = d, d = 0)), t.isrtlmode && (d = -d), d && (t.scrollmom && t.scrollmom.stop(), t.lastdeltax += d, t.debounced("mousewheelx", function() {
                            var a = t.lastdeltax;
                            t.lastdeltax = 0, t.rail.drag || t.doScrollLeftBy(a)
                        }, 15)), e) {
                        if (t.opt.nativeparentscrolling && c && !t.ispage && !t.zoomactive)
                            if (0 > e) {
                                if (t.getScrollTop() >= t.page.maxh) return !0
                            } else if (0 >= t.getScrollTop()) return !0;
                        t.scrollmom && t.scrollmom.stop(), t.lastdeltay += e, t.synched("mousewheely", function() {
                            var a = t.lastdeltay;
                            t.lastdeltay = 0, t.rail.drag || t.doScrollBy(a)
                        }, 15)
                    }
                    return a.stopImmediatePropagation(), a.preventDefault()
                }
                var t = this;
                if (this.version = "3.6.8", this.name = "nicescroll", this.me = j, this.opt = {
                        doc: a("body"),
                        win: !1
                    }, a.extend(this.opt, m), this.opt.snapbackspeed = 80, g)
                    for (var u in t.opt) void 0 !== g[u] && (t.opt[u] = g[u]);
                if (t.opt.disablemutationobserver && (l = !1), this.iddoc = (this.doc = t.opt.doc) && this.doc[0] ? this.doc[0].id || "" : "", this.ispage = /^BODY|HTML/.test(t.opt.win ? t.opt.win[0].nodeName : this.doc[0].nodeName), this.haswrapper = !1 !== t.opt.win, this.win = t.opt.win || (this.ispage ? a(window) : this.doc), this.docscroll = this.ispage && !this.haswrapper ? a(window) : this.win, this.body = a("body"), this.iframe = this.isfixed = this.viewport = !1, this.isiframe = "IFRAME" == this.doc[0].nodeName && "IFRAME" == this.win[0].nodeName, this.istextarea = "TEXTAREA" == this.win[0].nodeName, this.forcescreen = !1, this.canshowonmouseevent = "scroll" != t.opt.autohidemode, this.page = this.view = this.onzoomout = this.onzoomin = this.onscrollcancel = this.onscrollend = this.onscrollstart = this.onclick = this.ongesturezoom = this.onkeypress = this.onmousewheel = this.onmousemove = this.onmouseup = this.onmousedown = !1, this.scroll = {
                        x: 0,
                        y: 0
                    }, this.scrollratio = {
                        x: 0,
                        y: 0
                    }, this.cursorheight = 20, this.scrollvaluemax = 0, "auto" == this.opt.rtlmode) {
                    u = this.win[0] == window ? this.body : this.win;
                    var v = u.css("writing-mode") || u.css("-webkit-writing-mode") || u.css("-ms-writing-mode") || u.css("-moz-writing-mode");
                    "horizontal-tb" == v || "lr-tb" == v || "" == v ? (this.isrtlmode = "rtl" == u.css("direction"), this.isvertical = !1) : (this.isrtlmode = "vertical-rl" == v || "tb" == v || "tb-rl" == v || "rl-tb" == v, this.isvertical = "vertical-rl" == v || "tb" == v || "tb-rl" == v)
                } else this.isrtlmode = !0 === this.opt.rtlmode, this.isvertical = !1;
                this.observerbody = this.observerremover = this.observer = this.scrollmom = this.scrollrunning = !1;
                do this.id = "ascrail" + e++; while (document.getElementById(this.id));
                this.hasmousefocus = this.hasfocus = this.zoomactive = this.zoom = this.selectiondrag = this.cursorfreezed = this.cursor = this.rail = !1, this.visibility = !0, this.hidden = this.locked = this.railslocked = !1, this.cursoractive = !0, this.wheelprevented = !1, this.overflowx = t.opt.overflowx, this.overflowy = t.opt.overflowy, this.nativescrollingarea = !1, this.checkarea = 0, this.events = [], this.saved = {}, this.delaylist = {}, this.synclist = {}, this.lastdeltay = this.lastdeltax = 0, this.detected = o();
                var w = a.extend({}, this.detected);
                this.ishwscroll = (this.canhwscroll = w.hastransform && t.opt.hwacceleration) && t.haswrapper, this.hasreversehr = !!this.isrtlmode && (this.isvertical ? !(w.iswebkit || w.isie || w.isie11) : !(w.iswebkit || w.isie && !w.isie10 && !w.isie11)), this.istouchcapable = !1, w.cantouch || !w.hasw3ctouch && !w.hasmstouch ? !w.cantouch || w.isios || w.isandroid || !w.iswebkit && !w.ismozilla || (this.istouchcapable = !0) : this.istouchcapable = !0, t.opt.enablemouselockapi || (w.hasmousecapture = !1, w.haspointerlock = !1), this.debounced = function(a, b, c) {
                    t && (t.delaylist[a] || (b.call(t), t.delaylist[a] = {
                        h: h(function() {
                            t.delaylist[a].fn.call(t), t.delaylist[a] = !1
                        }, c)
                    }), t.delaylist[a].fn = b)
                };
                var x = !1;
                this.synched = function(a, b) {
                    return t.synclist[a] = b,
                        function() {
                            x || (h(function() {
                                if (t) {
                                    x = !1;
                                    for (var a in t.synclist) {
                                        var b = t.synclist[a];
                                        b && b.call(t), t.synclist[a] = !1
                                    }
                                }
                            }), x = !0)
                        }(), a
                }, this.unsynched = function(a) {
                    t.synclist[a] && (t.synclist[a] = !1)
                }, this.css = function(a, b) {
                    for (var c in b) t.saved.css.push([a, c, a.css(c)]), a.css(c, b[c])
                }, this.scrollTop = function(a) {
                    return void 0 === a ? t.getScrollTop() : t.setScrollTop(a)
                }, this.scrollLeft = function(a) {
                    return void 0 === a ? t.getScrollLeft() : t.setScrollLeft(a)
                };
                var y = function(a, b, c, d, e, f, g) {
                    this.st = a, this.ed = b, this.spd = c, this.p1 = d || 0, this.p2 = e || 1, this.p3 = f || 0, this.p4 = g || 1, this.ts = (new Date).getTime(), this.df = this.ed - this.st
                };
                if (y.prototype = {
                        B2: function(a) {
                            return 3 * a * a * (1 - a)
                        },
                        B3: function(a) {
                            return 3 * a * (1 - a) * (1 - a)
                        },
                        B4: function(a) {
                            return (1 - a) * (1 - a) * (1 - a)
                        },
                        getNow: function() {
                            var a = 1 - ((new Date).getTime() - this.ts) / this.spd,
                                b = this.B2(a) + this.B3(a) + this.B4(a);
                            return 0 > a ? this.ed : this.st + Math.round(this.df * b)
                        },
                        update: function(a, b) {
                            return this.st = this.getNow(), this.ed = a, this.spd = b, this.ts = (new Date).getTime(), this.df = this.ed - this.st, this
                        }
                    }, this.ishwscroll) {
                    this.doc.translate = {
                        x: 0,
                        y: 0,
                        tx: "0px",
                        ty: "0px"
                    }, w.hastranslate3d && w.isios && this.doc.css("-webkit-backface-visibility", "hidden"), this.getScrollTop = function(a) {
                        if (!a) {
                            if (a = k()) return 16 == a.length ? -a[13] : -a[5];
                            if (t.timerscroll && t.timerscroll.bz) return t.timerscroll.bz.getNow()
                        }
                        return t.doc.translate.y
                    }, this.getScrollLeft = function(a) {
                        if (!a) {
                            if (a = k()) return 16 == a.length ? -a[12] : -a[4];
                            if (t.timerscroll && t.timerscroll.bh) return t.timerscroll.bh.getNow()
                        }
                        return t.doc.translate.x
                    }, this.notifyScrollEvent = function(a) {
                        var b = document.createEvent("UIEvents");
                        b.initUIEvent("scroll", !1, !0, window, 1), b.niceevent = !0, a.dispatchEvent(b)
                    };
                    var z = this.isrtlmode ? 1 : -1;
                    w.hastranslate3d && t.opt.enabletranslate3d ? (this.setScrollTop = function(a, b) {
                        t.doc.translate.y = a, t.doc.translate.ty = -1 * a + "px", t.doc.css(w.trstyle, "translate3d(" + t.doc.translate.tx + "," + t.doc.translate.ty + ",0px)"), b || t.notifyScrollEvent(t.win[0])
                    }, this.setScrollLeft = function(a, b) {
                        t.doc.translate.x = a, t.doc.translate.tx = a * z + "px", t.doc.css(w.trstyle, "translate3d(" + t.doc.translate.tx + "," + t.doc.translate.ty + ",0px)"), b || t.notifyScrollEvent(t.win[0])
                    }) : (this.setScrollTop = function(a, b) {
                        t.doc.translate.y = a, t.doc.translate.ty = -1 * a + "px", t.doc.css(w.trstyle, "translate(" + t.doc.translate.tx + "," + t.doc.translate.ty + ")"), b || t.notifyScrollEvent(t.win[0])
                    }, this.setScrollLeft = function(a, b) {
                        t.doc.translate.x = a, t.doc.translate.tx = a * z + "px", t.doc.css(w.trstyle, "translate(" + t.doc.translate.tx + "," + t.doc.translate.ty + ")"), b || t.notifyScrollEvent(t.win[0])
                    })
                } else this.getScrollTop = function() {
                    return t.docscroll.scrollTop()
                }, this.setScrollTop = function(a) {
                    return setTimeout(function() {
                        t && t.docscroll.scrollTop(a)
                    }, 1)
                }, this.getScrollLeft = function() {
                    return t.hasreversehr ? t.detected.ismozilla ? t.page.maxw - Math.abs(t.docscroll.scrollLeft()) : t.page.maxw - t.docscroll.scrollLeft() : t.docscroll.scrollLeft()
                }, this.setScrollLeft = function(a) {
                    return setTimeout(function() {
                        if (t) return t.hasreversehr && (a = t.detected.ismozilla ? -(t.page.maxw - a) : t.page.maxw - a), t.docscroll.scrollLeft(a)
                    }, 1)
                };
                this.getTarget = function(a) {
                    return !!a && (a.target ? a.target : !!a.srcElement && a.srcElement)
                }, this.hasParent = function(a, b) {
                    if (!a) return !1;
                    for (var c = a.target || a.srcElement || a || !1; c && c.id != b;) c = c.parentNode || !1;
                    return !1 !== c
                };
                var A = {
                    thin: 1,
                    medium: 3,
                    thick: 5
                };
                this.getDocumentScrollOffset = function() {
                    return {
                        top: window.pageYOffset || document.documentElement.scrollTop,
                        left: window.pageXOffset || document.documentElement.scrollLeft
                    }
                }, this.getOffset = function() {
                    if (t.isfixed) {
                        var a = t.win.offset(),
                            b = t.getDocumentScrollOffset();
                        return a.top -= b.top, a.left -= b.left, a
                    }
                    return a = t.win.offset(), t.viewport ? (b = t.viewport.offset(), {
                        top: a.top - b.top,
                        left: a.left - b.left
                    }) : a
                }, this.updateScrollBar = function(a) {
                    var b, c, d;
                    if (t.ishwscroll) t.rail.css({
                        height: t.win.innerHeight() - (t.opt.railpadding.top + t.opt.railpadding.bottom)
                    }), t.railh && t.railh.css({
                        width: t.win.innerWidth() - (t.opt.railpadding.left + t.opt.railpadding.right)
                    });
                    else {
                        var e = t.getOffset();
                        b = e.top, c = e.left - (t.opt.railpadding.left + t.opt.railpadding.right), b += p(t.win, "border-top-width", !0), c += t.rail.align ? t.win.outerWidth() - p(t.win, "border-right-width") - t.rail.width : p(t.win, "border-left-width"), (d = t.opt.railoffset) && (d.top && (b += d.top), d.left && (c += d.left)), t.railslocked || t.rail.css({
                            top: b,
                            left: c,
                            height: (a ? a.h : t.win.innerHeight()) - (t.opt.railpadding.top + t.opt.railpadding.bottom)
                        }), t.zoom && t.zoom.css({
                            top: b + 1,
                            left: 1 == t.rail.align ? c - 20 : c + t.rail.width + 4
                        }), t.railh && !t.railslocked && (b = e.top, c = e.left, (d = t.opt.railhoffset) && (d.top && (b += d.top), d.left && (c += d.left)), a = t.railh.align ? b + p(t.win, "border-top-width", !0) + t.win.innerHeight() - t.railh.height : b + p(t.win, "border-top-width", !0), c += p(t.win, "border-left-width"), t.railh.css({
                            top: a - (t.opt.railpadding.top + t.opt.railpadding.bottom),
                            left: c,
                            width: t.railh.width
                        }))
                    }
                }, this.doRailClick = function(a, b, c) {
                    var d;
                    t.railslocked || (t.cancelEvent(a), b ? (b = c ? t.doScrollLeft : t.doScrollTop, d = c ? (a.pageX - t.railh.offset().left - t.cursorwidth / 2) * t.scrollratio.x : (a.pageY - t.rail.offset().top - t.cursorheight / 2) * t.scrollratio.y, b(d)) : (b = c ? t.doScrollLeftBy : t.doScrollBy, d = c ? t.scroll.x : t.scroll.y, a = c ? a.pageX - t.railh.offset().left : a.pageY - t.rail.offset().top, c = c ? t.view.w : t.view.h, b(d >= a ? c : -c)))
                }, t.hasanimationframe = h, t.hascancelanimationframe = i, t.hasanimationframe ? t.hascancelanimationframe || (i = function() {
                    t.cancelAnimationFrame = !0
                }) : (h = function(a) {
                    return setTimeout(a, 15 - Math.floor(+new Date / 1e3) % 16)
                }, i = clearTimeout), this.init = function() {
                    if (t.saved.css = [], w.isie7mobile || w.isoperamini) return !0;
                    w.hasmstouch && t.css(t.ispage ? a("html") : t.win, {
                        _touchaction: "none"
                    });
                    var e = w.ismodernie || w.isie10 ? {
                        "-ms-overflow-style": "none"
                    } : {
                        "overflow-y": "hidden"
                    };
                    if (t.zindex = "auto", t.zindex = t.ispage || "auto" != t.opt.zindex ? t.opt.zindex : n() || "auto", !t.ispage && "auto" != t.zindex && t.zindex > f && (f = t.zindex), t.isie && 0 == t.zindex && "auto" == t.opt.zindex && (t.zindex = "auto"), !t.ispage || !w.cantouch && !w.isieold && !w.isie9mobile) {
                        var g = t.docscroll;
                        t.ispage && (g = t.haswrapper ? t.win : t.doc), w.isie9mobile || t.css(g, e), t.ispage && w.isie7 && ("BODY" == t.doc[0].nodeName ? t.css(a("html"), {
                            "overflow-y": "hidden"
                        }) : "HTML" == t.doc[0].nodeName && t.css(a("body"), e)), !w.isios || t.ispage || t.haswrapper || t.css(a("body"), {
                            "-webkit-overflow-scrolling": "touch"
                        });
                        var h = a(document.createElement("div"));
                        h.css({
                            position: "relative",
                            top: 0,
                            float: "right",
                            width: t.opt.cursorwidth,
                            height: 0,
                            "background-color": t.opt.cursorcolor,
                            border: t.opt.cursorborder,
                            "background-clip": "padding-box",
                            "-webkit-border-radius": t.opt.cursorborderradius,
                            "-moz-border-radius": t.opt.cursorborderradius,
                            "border-radius": t.opt.cursorborderradius
                        }), h.hborder = parseFloat(h.outerHeight() - h.innerHeight()), h.addClass("nicescroll-cursors"), t.cursor = h;
                        var i = a(document.createElement("div"));
                        i.attr("id", t.id), i.addClass("nicescroll-rails nicescroll-rails-vr");
                        var j, k, o, m = ["left", "right", "top", "bottom"];
                        for (o in m) k = m[o], (j = t.opt.railpadding[k]) ? i.css("padding-" + k, j + "px") : t.opt.railpadding[k] = 0;
                        i.append(h), i.width = Math.max(parseFloat(t.opt.cursorwidth), h.outerWidth()), i.css({
                            width: i.width + "px",
                            zIndex: t.zindex,
                            background: t.opt.background,
                            cursor: "default"
                        }), i.visibility = !0, i.scrollable = !0, i.align = "left" == t.opt.railalign ? 0 : 1, t.rail = i, h = t.rail.drag = !1, !t.opt.boxzoom || t.ispage || w.isieold || (h = document.createElement("div"), t.bind(h, "click", t.doZoom), t.bind(h, "mouseenter", function() {
                            t.zoom.css("opacity", t.opt.cursoropacitymax)
                        }), t.bind(h, "mouseleave", function() {
                            t.zoom.css("opacity", t.opt.cursoropacitymin)
                        }), t.zoom = a(h), t.zoom.css({
                            cursor: "pointer",
                            zIndex: t.zindex,
                            backgroundImage: "url(" + t.opt.scriptpath + "zoomico.png)",
                            height: 18,
                            width: 18,
                            backgroundPosition: "0px 0px"
                        }), t.opt.dblclickzoom && t.bind(t.win, "dblclick", t.doZoom), w.cantouch && t.opt.gesturezoom && (t.ongesturezoom = function(a) {
                            return 1.5 < a.scale && t.doZoomIn(a), .8 > a.scale && t.doZoomOut(a), t.cancelEvent(a)
                        }, t.bind(t.win, "gestureend", t.ongesturezoom))), t.railh = !1;
                        var p;
                        if (t.opt.horizrailenabled && (t.css(g, {
                                overflowX: "hidden"
                            }), h = a(document.createElement("div")), h.css({
                                position: "absolute",
                                top: 0,
                                height: t.opt.cursorwidth,
                                width: 0,
                                backgroundColor: t.opt.cursorcolor,
                                border: t.opt.cursorborder,
                                backgroundClip: "padding-box",
                                "-webkit-border-radius": t.opt.cursorborderradius,
                                "-moz-border-radius": t.opt.cursorborderradius,
                                "border-radius": t.opt.cursorborderradius
                            }), w.isieold && h.css("overflow", "hidden"), h.wborder = parseFloat(h.outerWidth() - h.innerWidth()), h.addClass("nicescroll-cursors"), t.cursorh = h, p = a(document.createElement("div")), p.attr("id", t.id + "-hr"), p.addClass("nicescroll-rails nicescroll-rails-hr"), p.height = Math.max(parseFloat(t.opt.cursorwidth), h.outerHeight()), p.css({
                                height: p.height + "px",
                                zIndex: t.zindex,
                                background: t.opt.background
                            }), p.append(h), p.visibility = !0, p.scrollable = !0, p.align = "top" == t.opt.railvalign ? 0 : 1, t.railh = p, t.railh.drag = !1), t.ispage ? (i.css({
                                position: "fixed",
                                top: 0,
                                height: "100%"
                            }), i.align ? i.css({
                                right: 0
                            }) : i.css({
                                left: 0
                            }), t.body.append(i), t.railh && (p.css({
                                position: "fixed",
                                left: 0,
                                width: "100%"
                            }), p.align ? p.css({
                                bottom: 0
                            }) : p.css({
                                top: 0
                            }), t.body.append(p))) : (t.ishwscroll ? ("static" == t.win.css("position") && t.css(t.win, {
                                position: "relative"
                            }), g = "HTML" == t.win[0].nodeName ? t.body : t.win, a(g).scrollTop(0).scrollLeft(0), t.zoom && (t.zoom.css({
                                position: "absolute",
                                top: 1,
                                right: 0,
                                "margin-right": i.width + 4
                            }), g.append(t.zoom)), i.css({
                                position: "absolute",
                                top: 0
                            }), i.align ? i.css({
                                right: 0
                            }) : i.css({
                                left: 0
                            }), g.append(i), p && (p.css({
                                position: "absolute",
                                left: 0,
                                bottom: 0
                            }), p.align ? p.css({
                                bottom: 0
                            }) : p.css({
                                top: 0
                            }), g.append(p))) : (t.isfixed = "fixed" == t.win.css("position"), g = t.isfixed ? "fixed" : "absolute", t.isfixed || (t.viewport = t.getViewport(t.win[0])), t.viewport && (t.body = t.viewport, 0 == /fixed|absolute/.test(t.viewport.css("position")) && t.css(t.viewport, {
                                position: "relative"
                            })), i.css({
                                position: g
                            }), t.zoom && t.zoom.css({
                                position: g
                            }), t.updateScrollBar(), t.body.append(i), t.zoom && t.body.append(t.zoom), t.railh && (p.css({
                                position: g
                            }), t.body.append(p))), w.isios && t.css(t.win, {
                                "-webkit-tap-highlight-color": "rgba(0,0,0,0)",
                                "-webkit-touch-callout": "none"
                            }), w.isie && t.opt.disableoutline && t.win.attr("hideFocus", "true"), w.iswebkit && t.opt.disableoutline && t.win.css("outline", "none")), !1 === t.opt.autohidemode ? (t.autohidedom = !1, t.rail.css({
                                opacity: t.opt.cursoropacitymax
                            }), t.railh && t.railh.css({
                                opacity: t.opt.cursoropacitymax
                            })) : !0 === t.opt.autohidemode || "leave" === t.opt.autohidemode ? (t.autohidedom = a().add(t.rail), w.isie8 && (t.autohidedom = t.autohidedom.add(t.cursor)), t.railh && (t.autohidedom = t.autohidedom.add(t.railh)), t.railh && w.isie8 && (t.autohidedom = t.autohidedom.add(t.cursorh))) : "scroll" == t.opt.autohidemode ? (t.autohidedom = a().add(t.rail), t.railh && (t.autohidedom = t.autohidedom.add(t.railh))) : "cursor" == t.opt.autohidemode ? (t.autohidedom = a().add(t.cursor), t.railh && (t.autohidedom = t.autohidedom.add(t.cursorh))) : "hidden" == t.opt.autohidemode && (t.autohidedom = !1, t.hide(), t.railslocked = !1), w.isie9mobile) t.scrollmom = new q(t), t.onmangotouch = function() {
                            var a = t.getScrollTop(),
                                b = t.getScrollLeft();
                            if (a == t.scrollmom.lastscrolly && b == t.scrollmom.lastscrollx) return !0;
                            var c = a - t.mangotouch.sy,
                                d = b - t.mangotouch.sx;
                            if (0 != Math.round(Math.sqrt(Math.pow(d, 2) + Math.pow(c, 2)))) {
                                var e = 0 > c ? -1 : 1,
                                    f = 0 > d ? -1 : 1,
                                    g = +new Date;
                                t.mangotouch.lazy && clearTimeout(t.mangotouch.lazy), 80 < g - t.mangotouch.tm || t.mangotouch.dry != e || t.mangotouch.drx != f ? (t.scrollmom.stop(), t.scrollmom.reset(b, a), t.mangotouch.sy = a, t.mangotouch.ly = a, t.mangotouch.sx = b, t.mangotouch.lx = b, t.mangotouch.dry = e, t.mangotouch.drx = f, t.mangotouch.tm = g) : (t.scrollmom.stop(), t.scrollmom.update(t.mangotouch.sx - d, t.mangotouch.sy - c), t.mangotouch.tm = g, c = Math.max(Math.abs(t.mangotouch.ly - a), Math.abs(t.mangotouch.lx - b)), t.mangotouch.ly = a, t.mangotouch.lx = b, 2 < c && (t.mangotouch.lazy = setTimeout(function() {
                                    t.mangotouch.lazy = !1, t.mangotouch.dry = 0, t.mangotouch.drx = 0, t.mangotouch.tm = 0, t.scrollmom.doMomentum(30)
                                }, 100)))
                            }
                        }, i = t.getScrollTop(), p = t.getScrollLeft(), t.mangotouch = {
                            sy: i,
                            ly: i,
                            dry: 0,
                            sx: p,
                            lx: p,
                            drx: 0,
                            lazy: !1,
                            tm: 0
                        }, t.bind(t.docscroll, "scroll", t.onmangotouch);
                        else {
                            if (w.cantouch || t.istouchcapable || t.opt.touchbehavior || w.hasmstouch) {
                                t.scrollmom = new q(t), t.ontouchstart = function(b) {
                                    if (b.pointerType && 2 != b.pointerType && "touch" != b.pointerType) return !1;
                                    if (t.hasmoving = !1, !t.railslocked) {
                                        var c;
                                        if (w.hasmstouch)
                                            for (c = !!b.target && b.target; c;) {
                                                var d = a(c).getNiceScroll();
                                                if (0 < d.length && d[0].me == t.me) break;
                                                if (0 < d.length) return !1;
                                                if ("DIV" == c.nodeName && c.id == t.id) break;
                                                c = !!c.parentNode && c.parentNode
                                            }
                                        if (t.cancelScroll(), (c = t.getTarget(b)) && /INPUT/i.test(c.nodeName) && /range/i.test(c.type)) return t.stopPropagation(b);
                                        if (!("clientX" in b) && "changedTouches" in b && (b.clientX = b.changedTouches[0].clientX, b.clientY = b.changedTouches[0].clientY), t.forcescreen && (d = b, b = {
                                                original: b.original ? b.original : b
                                            }, b.clientX = d.screenX, b.clientY = d.screenY), t.rail.drag = {
                                                x: b.clientX,
                                                y: b.clientY,
                                                sx: t.scroll.x,
                                                sy: t.scroll.y,
                                                st: t.getScrollTop(),
                                                sl: t.getScrollLeft(),
                                                pt: 2,
                                                dl: !1
                                            }, t.ispage || !t.opt.directionlockdeadzone) t.rail.drag.dl = "f";
                                        else {
                                            var d = a(window).width(),
                                                e = a(window).height(),
                                                e = Math.max(0, Math.max(document.body.scrollHeight, document.documentElement.scrollHeight) - e),
                                                d = Math.max(0, Math.max(document.body.scrollWidth, document.documentElement.scrollWidth) - d);
                                            t.rail.drag.ck = !t.rail.scrollable && t.railh.scrollable ? 0 < e && "v" : !(!t.rail.scrollable || t.railh.scrollable) && (0 < d && "h"), t.rail.drag.ck || (t.rail.drag.dl = "f")
                                        }
                                        if (t.opt.touchbehavior && t.isiframe && w.isie && (d = t.win.position(), t.rail.drag.x += d.left, t.rail.drag.y += d.top), t.hasmoving = !1, t.lastmouseup = !1, t.scrollmom.reset(b.clientX, b.clientY), !w.cantouch && !this.istouchcapable && !b.pointerType) {
                                            if (!c || !/INPUT|SELECT|TEXTAREA/i.test(c.nodeName)) return !t.ispage && w.hasmousecapture && c.setCapture(), t.opt.touchbehavior ? (c.onclick && !c._onclick && (c._onclick = c.onclick, c.onclick = function(a) {
                                                return !t.hasmoving && void c._onclick.call(this, a)
                                            }), t.cancelEvent(b)) : t.stopPropagation(b);
                                            /SUBMIT|CANCEL|BUTTON/i.test(a(c).attr("type")) && (pc = {
                                                tg: c,
                                                click: !1
                                            }, t.preventclick = pc)
                                        }
                                    }
                                }, t.ontouchend = function(a) {
                                    if (!t.rail.drag) return !0;
                                    if (2 == t.rail.drag.pt) {
                                        if (a.pointerType && 2 != a.pointerType && "touch" != a.pointerType) return !1;
                                        if (t.scrollmom.doMomentum(), t.rail.drag = !1, t.hasmoving && (t.lastmouseup = !0, t.hideCursor(), w.hasmousecapture && document.releaseCapture(), !w.cantouch)) return t.cancelEvent(a)
                                    } else if (1 == t.rail.drag.pt) return t.onmouseup(a)
                                };
                                var r = t.opt.touchbehavior && t.isiframe && !w.hasmousecapture;
                                t.ontouchmove = function(b, c) {
                                    if (!t.rail.drag || b.targetTouches && t.opt.preventmultitouchscrolling && 1 < b.targetTouches.length || b.pointerType && 2 != b.pointerType && "touch" != b.pointerType) return !1;
                                    if (2 == t.rail.drag.pt) {
                                        if (w.cantouch && w.isios && void 0 === b.original) return !0;
                                        if (t.hasmoving = !0, t.preventclick && !t.preventclick.click && (t.preventclick.click = t.preventclick.tg.onclick || !1, t.preventclick.tg.onclick = t.onpreventclick), b = a.extend({
                                                original: b
                                            }, b), "changedTouches" in b && (b.clientX = b.changedTouches[0].clientX, b.clientY = b.changedTouches[0].clientY), t.forcescreen) {
                                            var d = b;
                                            b = {
                                                original: b.original ? b.original : b
                                            }, b.clientX = d.screenX, b.clientY = d.screenY
                                        }
                                        var e, d = e = 0;
                                        r && !c && (e = t.win.position(), d = -e.left, e = -e.top);
                                        var f = b.clientY + e;
                                        e = f - t.rail.drag.y;
                                        var g = b.clientX + d,
                                            h = g - t.rail.drag.x,
                                            i = t.rail.drag.st - e;
                                        t.ishwscroll && t.opt.bouncescroll ? 0 > i ? i = Math.round(i / 2) : i > t.page.maxh && (i = t.page.maxh + Math.round((i - t.page.maxh) / 2)) : (0 > i && (f = i = 0), i > t.page.maxh && (i = t.page.maxh, f = 0));
                                        var j;
                                        if (t.railh && t.railh.scrollable && (j = t.isrtlmode ? h - t.rail.drag.sl : t.rail.drag.sl - h, t.ishwscroll && t.opt.bouncescroll ? 0 > j ? j = Math.round(j / 2) : j > t.page.maxw && (j = t.page.maxw + Math.round((j - t.page.maxw) / 2)) : (0 > j && (g = j = 0), j > t.page.maxw && (j = t.page.maxw, g = 0))), d = !1, t.rail.drag.dl) d = !0, "v" == t.rail.drag.dl ? j = t.rail.drag.sl : "h" == t.rail.drag.dl && (i = t.rail.drag.st);
                                        else {
                                            e = Math.abs(e);
                                            var h = Math.abs(h),
                                                k = t.opt.directionlockdeadzone;
                                            if ("v" == t.rail.drag.ck) {
                                                if (e > k && h <= .3 * e) return t.rail.drag = !1, !0;
                                                h > k && (t.rail.drag.dl = "f", a("body").scrollTop(a("body").scrollTop()))
                                            } else if ("h" == t.rail.drag.ck) {
                                                if (h > k && e <= .3 * h) return t.rail.drag = !1, !0;
                                                e > k && (t.rail.drag.dl = "f", a("body").scrollLeft(a("body").scrollLeft()))
                                            }
                                        }
                                        if (t.synched("touchmove", function() {
                                                t.rail.drag && 2 == t.rail.drag.pt && (t.prepareTransition && t.prepareTransition(0), t.rail.scrollable && t.setScrollTop(i), t.scrollmom.update(g, f), t.railh && t.railh.scrollable ? (t.setScrollLeft(j), t.showCursor(i, j)) : t.showCursor(i), w.isie10 && document.selection.clear())
                                            }), w.ischrome && t.istouchcapable && (d = !1), d) return t.cancelEvent(b)
                                    } else if (1 == t.rail.drag.pt) return t.onmousemove(b)
                                }
                            }
                            if (t.onmousedown = function(a, b) {
                                    if (!t.rail.drag || 1 == t.rail.drag.pt) {
                                        if (t.railslocked) return t.cancelEvent(a);
                                        t.cancelScroll(), t.rail.drag = {
                                            x: a.clientX,
                                            y: a.clientY,
                                            sx: t.scroll.x,
                                            sy: t.scroll.y,
                                            pt: 1,
                                            hr: !!b
                                        };
                                        var c = t.getTarget(a);
                                        return !t.ispage && w.hasmousecapture && c.setCapture(), t.isiframe && !w.hasmousecapture && (t.saved.csspointerevents = t.doc.css("pointer-events"), t.css(t.doc, {
                                            "pointer-events": "none"
                                        })), t.hasmoving = !1, t.cancelEvent(a)
                                    }
                                }, t.onmouseup = function(a) {
                                    if (t.rail.drag) return 1 != t.rail.drag.pt || (w.hasmousecapture && document.releaseCapture(), t.isiframe && !w.hasmousecapture && t.doc.css("pointer-events", t.saved.csspointerevents), t.rail.drag = !1, t.hasmoving && t.triggerScrollEnd(), t.cancelEvent(a))
                                }, t.onmousemove = function(a) {
                                    if (t.rail.drag) {
                                        if (1 == t.rail.drag.pt) {
                                            if (w.ischrome && 0 == a.which) return t.onmouseup(a);
                                            if (t.cursorfreezed = !0, t.hasmoving = !0, t.rail.drag.hr) {
                                                t.scroll.x = t.rail.drag.sx + (a.clientX - t.rail.drag.x), 0 > t.scroll.x && (t.scroll.x = 0);
                                                var b = t.scrollvaluemaxw;
                                                t.scroll.x > b && (t.scroll.x = b)
                                            } else t.scroll.y = t.rail.drag.sy + (a.clientY - t.rail.drag.y), 0 > t.scroll.y && (t.scroll.y = 0), b = t.scrollvaluemax, t.scroll.y > b && (t.scroll.y = b);
                                            return t.synched("mousemove", function() {
                                                t.rail.drag && 1 == t.rail.drag.pt && (t.showCursor(), t.rail.drag.hr ? t.hasreversehr ? t.doScrollLeft(t.scrollvaluemaxw - Math.round(t.scroll.x * t.scrollratio.x), t.opt.cursordragspeed) : t.doScrollLeft(Math.round(t.scroll.x * t.scrollratio.x), t.opt.cursordragspeed) : t.doScrollTop(Math.round(t.scroll.y * t.scrollratio.y), t.opt.cursordragspeed))
                                            }), t.cancelEvent(a)
                                        }
                                    } else t.checkarea = 0
                                }, w.cantouch || t.opt.touchbehavior) t.onpreventclick = function(a) {
                                if (t.preventclick) return t.preventclick.tg.onclick = t.preventclick.click, t.preventclick = !1, t.cancelEvent(a)
                            }, t.bind(t.win, "mousedown", t.ontouchstart), t.onclick = !w.isios && function(a) {
                                return !t.lastmouseup || (t.lastmouseup = !1, t.cancelEvent(a))
                            }, t.opt.grabcursorenabled && w.cursorgrabvalue && (t.css(t.ispage ? t.doc : t.win, {
                                cursor: w.cursorgrabvalue
                            }), t.css(t.rail, {
                                cursor: w.cursorgrabvalue
                            }));
                            else {
                                var s = function(a) {
                                    if (t.selectiondrag) {
                                        if (a) {
                                            var b = t.win.outerHeight();
                                            a = a.pageY - t.selectiondrag.top, 0 < a && a < b && (a = 0), a >= b && (a -= b), t.selectiondrag.df = a
                                        }
                                        0 != t.selectiondrag.df && (t.doScrollBy(2 * -Math.floor(t.selectiondrag.df / 6)), t.debounced("doselectionscroll", function() {
                                            s()
                                        }, 50))
                                    }
                                };
                                t.hasTextSelected = "getSelection" in document ? function() {
                                    return 0 < document.getSelection().rangeCount
                                } : "selection" in document ? function() {
                                    return "None" != document.selection.type
                                } : function() {
                                    return !1
                                }, t.onselectionstart = function(a) {
                                    t.ispage || (t.selectiondrag = t.win.offset())
                                }, t.onselectionend = function(a) {
                                    t.selectiondrag = !1
                                }, t.onselectiondrag = function(a) {
                                    t.selectiondrag && t.hasTextSelected() && t.debounced("selectionscroll", function() {
                                        s(a)
                                    }, 250)
                                }
                            }
                            w.hasw3ctouch ? (t.css(t.rail, {
                                "touch-action": "none"
                            }), t.css(t.cursor, {
                                "touch-action": "none"
                            }), t.bind(t.win, "pointerdown", t.ontouchstart), t.bind(document, "pointerup", t.ontouchend), t.bind(document, "pointermove", t.ontouchmove)) : w.hasmstouch ? (t.css(t.rail, {
                                "-ms-touch-action": "none"
                            }), t.css(t.cursor, {
                                "-ms-touch-action": "none"
                            }), t.bind(t.win, "MSPointerDown", t.ontouchstart), t.bind(document, "MSPointerUp", t.ontouchend), t.bind(document, "MSPointerMove", t.ontouchmove), t.bind(t.cursor, "MSGestureHold", function(a) {
                                a.preventDefault()
                            }), t.bind(t.cursor, "contextmenu", function(a) {
                                a.preventDefault()
                            })) : this.istouchcapable && (t.bind(t.win, "touchstart", t.ontouchstart), t.bind(document, "touchend", t.ontouchend), t.bind(document, "touchcancel", t.ontouchend), t.bind(document, "touchmove", t.ontouchmove)), (t.opt.cursordragontouch || !w.cantouch && !t.opt.touchbehavior) && (t.rail.css({
                                cursor: "default"
                            }), t.railh && t.railh.css({
                                cursor: "default"
                            }), t.jqbind(t.rail, "mouseenter", function() {
                                return !(!t.ispage && !t.win.is(":visible")) && (t.canshowonmouseevent && t.showCursor(), void(t.rail.active = !0))
                            }), t.jqbind(t.rail, "mouseleave", function() {
                                t.rail.active = !1, t.rail.drag || t.hideCursor()
                            }), t.opt.sensitiverail && (t.bind(t.rail, "click", function(a) {
                                t.doRailClick(a, !1, !1)
                            }), t.bind(t.rail, "dblclick", function(a) {
                                t.doRailClick(a, !0, !1)
                            }), t.bind(t.cursor, "click", function(a) {
                                t.cancelEvent(a)
                            }), t.bind(t.cursor, "dblclick", function(a) {
                                t.cancelEvent(a)
                            })), t.railh && (t.jqbind(t.railh, "mouseenter", function() {
                                return !(!t.ispage && !t.win.is(":visible")) && (t.canshowonmouseevent && t.showCursor(), void(t.rail.active = !0))
                            }), t.jqbind(t.railh, "mouseleave", function() {
                                t.rail.active = !1, t.rail.drag || t.hideCursor()
                            }), t.opt.sensitiverail && (t.bind(t.railh, "click", function(a) {
                                t.doRailClick(a, !1, !0)
                            }), t.bind(t.railh, "dblclick", function(a) {
                                t.doRailClick(a, !0, !0)
                            }), t.bind(t.cursorh, "click", function(a) {
                                t.cancelEvent(a)
                            }), t.bind(t.cursorh, "dblclick", function(a) {
                                t.cancelEvent(a)
                            })))), w.cantouch || t.opt.touchbehavior ? (t.bind(w.hasmousecapture ? t.win : document, "mouseup", t.ontouchend), t.bind(document, "mousemove", t.ontouchmove), t.onclick && t.bind(document, "click", t.onclick), t.opt.cursordragontouch ? (t.bind(t.cursor, "mousedown", t.onmousedown), t.bind(t.cursor, "mouseup", t.onmouseup), t.cursorh && t.bind(t.cursorh, "mousedown", function(a) {
                                t.onmousedown(a, !0)
                            }), t.cursorh && t.bind(t.cursorh, "mouseup", t.onmouseup)) : (t.bind(t.rail, "mousedown", function(a) {
                                a.preventDefault()
                            }), t.railh && t.bind(t.railh, "mousedown", function(a) {
                                a.preventDefault()
                            }))) : (t.bind(w.hasmousecapture ? t.win : document, "mouseup", t.onmouseup), t.bind(document, "mousemove", t.onmousemove), t.onclick && t.bind(document, "click", t.onclick), t.bind(t.cursor, "mousedown", t.onmousedown), t.bind(t.cursor, "mouseup", t.onmouseup), t.railh && (t.bind(t.cursorh, "mousedown", function(a) {
                                t.onmousedown(a, !0)
                            }), t.bind(t.cursorh, "mouseup", t.onmouseup)), !t.ispage && t.opt.enablescrollonselection && (t.bind(t.win[0], "mousedown", t.onselectionstart), t.bind(document, "mouseup", t.onselectionend), t.bind(t.cursor, "mouseup", t.onselectionend), t.cursorh && t.bind(t.cursorh, "mouseup", t.onselectionend), t.bind(document, "mousemove", t.onselectiondrag)), t.zoom && (t.jqbind(t.zoom, "mouseenter", function() {
                                t.canshowonmouseevent && t.showCursor(), t.rail.active = !0
                            }), t.jqbind(t.zoom, "mouseleave", function() {
                                t.rail.active = !1, t.rail.drag || t.hideCursor()
                            }))), t.opt.enablemousewheel && (t.isiframe || t.mousewheel(w.isie && t.ispage ? document : t.win, t.onmousewheel), t.mousewheel(t.rail, t.onmousewheel), t.railh && t.mousewheel(t.railh, t.onmousewheelhr)), t.ispage || w.cantouch || /HTML|^BODY/.test(t.win[0].nodeName) || (t.win.attr("tabindex") || t.win.attr({
                                tabindex: d++
                            }), t.jqbind(t.win, "focus", function(a) {
                                b = t.getTarget(a).id || !0, t.hasfocus = !0, t.canshowonmouseevent && t.noticeCursor()
                            }), t.jqbind(t.win, "blur", function(a) {
                                b = !1, t.hasfocus = !1
                            }), t.jqbind(t.win, "mouseenter", function(a) {
                                c = t.getTarget(a).id || !0, t.hasmousefocus = !0, t.canshowonmouseevent && t.noticeCursor()
                            }), t.jqbind(t.win, "mouseleave", function() {
                                c = !1, t.hasmousefocus = !1, t.rail.drag || t.hideCursor()
                            }))
                        }
                        if (t.onkeypress = function(d) {
                                if (t.railslocked && 0 == t.page.maxh) return !0;
                                d = d ? d : window.e;
                                var e = t.getTarget(d);
                                if (e && /INPUT|TEXTAREA|SELECT|OPTION/.test(e.nodeName) && (!e.getAttribute("type") && !e.type || !/submit|button|cancel/i.tp) || a(e).attr("contenteditable")) return !0;
                                if (t.hasfocus || t.hasmousefocus && !b || t.ispage && !b && !c) {
                                    if (e = d.keyCode, t.railslocked && 27 != e) return t.cancelEvent(d);
                                    var f = d.ctrlKey || !1,
                                        g = d.shiftKey || !1,
                                        h = !1;
                                    switch (e) {
                                        case 38:
                                        case 63233:
                                            t.doScrollBy(72), h = !0;
                                            break;
                                        case 40:
                                        case 63235:
                                            t.doScrollBy(-72), h = !0;
                                            break;
                                        case 37:
                                        case 63232:
                                            t.railh && (f ? t.doScrollLeft(0) : t.doScrollLeftBy(72), h = !0);
                                            break;
                                        case 39:
                                        case 63234:
                                            t.railh && (f ? t.doScrollLeft(t.page.maxw) : t.doScrollLeftBy(-72), h = !0);
                                            break;
                                        case 33:
                                        case 63276:
                                            t.doScrollBy(t.view.h), h = !0;
                                            break;
                                        case 34:
                                        case 63277:
                                            t.doScrollBy(-t.view.h), h = !0;
                                            break;
                                        case 36:
                                        case 63273:
                                            t.railh && f ? t.doScrollPos(0, 0) : t.doScrollTo(0), h = !0;
                                            break;
                                        case 35:
                                        case 63275:
                                            t.railh && f ? t.doScrollPos(t.page.maxw, t.page.maxh) : t.doScrollTo(t.page.maxh), h = !0;
                                            break;
                                        case 32:
                                            t.opt.spacebarenabled && (g ? t.doScrollBy(t.view.h) : t.doScrollBy(-t.view.h), h = !0);
                                            break;
                                        case 27:
                                            t.zoomactive && (t.doZoom(), h = !0)
                                    }
                                    if (h) return t.cancelEvent(d)
                                }
                            }, t.opt.enablekeyboard && t.bind(document, w.isopera && !w.isopera12 ? "keypress" : "keydown", t.onkeypress), t.bind(document, "keydown", function(a) {
                                a.ctrlKey && (t.wheelprevented = !0)
                            }), t.bind(document, "keyup", function(a) {
                                a.ctrlKey || (t.wheelprevented = !1)
                            }), t.bind(window, "blur", function(a) {
                                t.wheelprevented = !1
                            }), t.bind(window, "resize", t.lazyResize), t.bind(window, "orientationchange", t.lazyResize), t.bind(window, "load", t.lazyResize), w.ischrome && !t.ispage && !t.haswrapper) {
                            var u = t.win.attr("style"),
                                i = parseFloat(t.win.css("width")) + 1;
                            t.win.css("width", i), t.synched("chromefix", function() {
                                t.win.attr("style", u)
                            })
                        }
                        t.onAttributeChange = function(a) {
                            t.lazyResize(t.isieold ? 250 : 30)
                        }, t.isie11 || !1 === l || (t.observerbody = new l(function(b) {
                            if (b.forEach(function(b) {
                                    if ("attributes" == b.type) return a("body").hasClass("modal-open") && a("body").hasClass("modal-dialog") && !a.contains(a(".modal-dialog")[0], t.doc[0]) ? t.hide() : t.show()
                                }), document.body.scrollHeight != t.page.maxh) return t.lazyResize(30);
                        }), t.observerbody.observe(document.body, {
                            childList: !0,
                            subtree: !0,
                            characterData: !1,
                            attributes: !0,
                            attributeFilter: ["class"]
                        })), t.ispage || t.haswrapper || (!1 !== l ? (t.observer = new l(function(a) {
                            a.forEach(t.onAttributeChange)
                        }), t.observer.observe(t.win[0], {
                            childList: !0,
                            characterData: !1,
                            attributes: !0,
                            subtree: !1
                        }), t.observerremover = new l(function(a) {
                            a.forEach(function(a) {
                                if (0 < a.removedNodes.length)
                                    for (var b in a.removedNodes)
                                        if (t && a.removedNodes[b] == t.win[0]) return t.remove()
                            })
                        }), t.observerremover.observe(t.win[0].parentNode, {
                            childList: !0,
                            characterData: !1,
                            attributes: !1,
                            subtree: !1
                        })) : (t.bind(t.win, w.isie && !w.isie9 ? "propertychange" : "DOMAttrModified", t.onAttributeChange), w.isie9 && t.win[0].attachEvent("onpropertychange", t.onAttributeChange), t.bind(t.win, "DOMNodeRemoved", function(a) {
                            a.target == t.win[0] && t.remove()
                        }))), !t.ispage && t.opt.boxzoom && t.bind(window, "resize", t.resizeZoom), t.istextarea && (t.bind(t.win, "keydown", t.lazyResize), t.bind(t.win, "mouseup", t.lazyResize)), t.lazyResize(30)
                    }
                    if ("IFRAME" == this.doc[0].nodeName) {
                        var v = function() {
                            t.iframexd = !1;
                            var b;
                            try {
                                b = "contentDocument" in this ? this.contentDocument : this.contentWindow.document
                            } catch (a) {
                                t.iframexd = !0, b = !1
                            }
                            if (t.iframexd) return "console" in window && console.log("NiceScroll error: policy restriced iframe"), !0;
                            if (t.forcescreen = !0, t.isiframe && (t.iframe = {
                                    doc: a(b),
                                    html: t.doc.contents().find("html")[0],
                                    body: t.doc.contents().find("body")[0]
                                }, t.getContentSize = function() {
                                    return {
                                        w: Math.max(t.iframe.html.scrollWidth, t.iframe.body.scrollWidth),
                                        h: Math.max(t.iframe.html.scrollHeight, t.iframe.body.scrollHeight)
                                    }
                                }, t.docscroll = a(t.iframe.body)), !w.isios && t.opt.iframeautoresize && !t.isiframe) {
                                t.win.scrollTop(0), t.doc.height("");
                                var c = Math.max(b.getElementsByTagName("html")[0].scrollHeight, b.body.scrollHeight);
                                t.doc.height(c)
                            }
                            t.lazyResize(30), w.isie7 && t.css(a(t.iframe.html), e), t.css(a(t.iframe.body), e), w.isios && t.haswrapper && t.css(a(b.body), {
                                "-webkit-transform": "translate3d(0,0,0)"
                            }), "contentWindow" in this ? t.bind(this.contentWindow, "scroll", t.onscroll) : t.bind(b, "scroll", t.onscroll), t.opt.enablemousewheel && t.mousewheel(b, t.onmousewheel), t.opt.enablekeyboard && t.bind(b, w.isopera ? "keypress" : "keydown", t.onkeypress), (w.cantouch || t.opt.touchbehavior) && (t.bind(b, "mousedown", t.ontouchstart), t.bind(b, "mousemove", function(a) {
                                return t.ontouchmove(a, !0)
                            }), t.opt.grabcursorenabled && w.cursorgrabvalue && t.css(a(b.body), {
                                cursor: w.cursorgrabvalue
                            })), t.bind(b, "mouseup", t.ontouchend), t.zoom && (t.opt.dblclickzoom && t.bind(b, "dblclick", t.doZoom), t.ongesturezoom && t.bind(b, "gestureend", t.ongesturezoom))
                        };
                        this.doc[0].readyState && "complete" == this.doc[0].readyState && setTimeout(function() {
                            v.call(t.doc[0], !1)
                        }, 500), t.bind(this.doc, "load", v)
                    }
                }, this.showCursor = function(a, b) {
                    if (t.cursortimeout && (clearTimeout(t.cursortimeout), t.cursortimeout = 0), t.rail) {
                        if (t.autohidedom && (t.autohidedom.stop().css({
                                opacity: t.opt.cursoropacitymax
                            }), t.cursoractive = !0), t.rail.drag && 1 == t.rail.drag.pt || (void 0 !== a && !1 !== a && (t.scroll.y = Math.round(1 * a / t.scrollratio.y)), void 0 !== b && (t.scroll.x = Math.round(1 * b / t.scrollratio.x))), t.cursor.css({
                                height: t.cursorheight,
                                top: t.scroll.y
                            }), t.cursorh) {
                            var c = t.hasreversehr ? t.scrollvaluemaxw - t.scroll.x : t.scroll.x;
                            !t.rail.align && t.rail.visibility ? t.cursorh.css({
                                width: t.cursorwidth,
                                left: c + t.rail.width
                            }) : t.cursorh.css({
                                width: t.cursorwidth,
                                left: c
                            }), t.cursoractive = !0
                        }
                        t.zoom && t.zoom.stop().css({
                            opacity: t.opt.cursoropacitymax
                        })
                    }
                }, this.hideCursor = function(a) {
                    t.cursortimeout || !t.rail || !t.autohidedom || t.hasmousefocus && "leave" == t.opt.autohidemode || (t.cursortimeout = setTimeout(function() {
                        t.rail.active && t.showonmouseevent || (t.autohidedom.stop().animate({
                            opacity: t.opt.cursoropacitymin
                        }), t.zoom && t.zoom.stop().animate({
                            opacity: t.opt.cursoropacitymin
                        }), t.cursoractive = !1), t.cursortimeout = 0
                    }, a || t.opt.hidecursordelay))
                }, this.noticeCursor = function(a, b, c) {
                    t.showCursor(b, c), t.rail.active || t.hideCursor(a)
                }, this.getContentSize = t.ispage ? function() {
                    return {
                        w: Math.max(document.body.scrollWidth, document.documentElement.scrollWidth),
                        h: Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
                    }
                } : t.haswrapper ? function() {
                    return {
                        w: t.doc.outerWidth() + parseInt(t.win.css("paddingLeft")) + parseInt(t.win.css("paddingRight")),
                        h: t.doc.outerHeight() + parseInt(t.win.css("paddingTop")) + parseInt(t.win.css("paddingBottom"))
                    }
                } : function() {
                    return {
                        w: t.docscroll[0].scrollWidth,
                        h: t.docscroll[0].scrollHeight
                    }
                }, this.onResize = function(a, b) {
                    if (!t || !t.win) return !1;
                    if (!t.haswrapper && !t.ispage) {
                        if ("none" == t.win.css("display")) return t.visibility && t.hideRail().hideRailHr(), !1;
                        t.hidden || t.visibility || t.showRail().showRailHr()
                    }
                    var c = t.page.maxh,
                        d = t.page.maxw,
                        e = t.view.h,
                        f = t.view.w;
                    if (t.view = {
                            w: t.ispage ? t.win.width() : parseInt(t.win[0].clientWidth),
                            h: t.ispage ? t.win.height() : parseInt(t.win[0].clientHeight)
                        }, t.page = b ? b : t.getContentSize(), t.page.maxh = Math.max(0, t.page.h - t.view.h), t.page.maxw = Math.max(0, t.page.w - t.view.w), t.page.maxh == c && t.page.maxw == d && t.view.w == f && t.view.h == e) {
                        if (t.ispage) return t;
                        if (c = t.win.offset(), t.lastposition && (d = t.lastposition, d.top == c.top && d.left == c.left)) return t;
                        t.lastposition = c
                    }
                    return 0 == t.page.maxh ? (t.hideRail(), t.scrollvaluemax = 0, t.scroll.y = 0, t.scrollratio.y = 0, t.cursorheight = 0, t.setScrollTop(0), t.rail && (t.rail.scrollable = !1)) : (t.page.maxh -= t.opt.railpadding.top + t.opt.railpadding.bottom, t.rail.scrollable = !0), 0 == t.page.maxw ? (t.hideRailHr(), t.scrollvaluemaxw = 0, t.scroll.x = 0, t.scrollratio.x = 0, t.cursorwidth = 0, t.setScrollLeft(0), t.railh && (t.railh.scrollable = !1)) : (t.page.maxw -= t.opt.railpadding.left + t.opt.railpadding.right, t.railh && (t.railh.scrollable = t.opt.horizrailenabled)), t.railslocked = t.locked || 0 == t.page.maxh && 0 == t.page.maxw, t.railslocked ? (t.ispage || t.updateScrollBar(t.view), !1) : (t.hidden || t.visibility ? !t.railh || t.hidden || t.railh.visibility || t.showRailHr() : t.showRail().showRailHr(), t.istextarea && t.win.css("resize") && "none" != t.win.css("resize") && (t.view.h -= 20), t.cursorheight = Math.min(t.view.h, Math.round(t.view.h / t.page.h * t.view.h)), t.cursorheight = t.opt.cursorfixedheight ? t.opt.cursorfixedheight : Math.max(t.opt.cursorminheight, t.cursorheight), t.cursorwidth = Math.min(t.view.w, Math.round(t.view.w / t.page.w * t.view.w)), t.cursorwidth = t.opt.cursorfixedheight ? t.opt.cursorfixedheight : Math.max(t.opt.cursorminheight, t.cursorwidth), t.scrollvaluemax = t.view.h - t.cursorheight - t.cursor.hborder - (t.opt.railpadding.top + t.opt.railpadding.bottom), t.railh && (t.railh.width = 0 < t.page.maxh ? t.view.w - t.rail.width : t.view.w, t.scrollvaluemaxw = t.railh.width - t.cursorwidth - t.cursorh.wborder - (t.opt.railpadding.left + t.opt.railpadding.right)), t.ispage || t.updateScrollBar(t.view), t.scrollratio = {
                        x: t.page.maxw / t.scrollvaluemaxw,
                        y: t.page.maxh / t.scrollvaluemax
                    }, t.getScrollTop() > t.page.maxh ? t.doScrollTop(t.page.maxh) : (t.scroll.y = Math.round(t.getScrollTop() * (1 / t.scrollratio.y)), t.scroll.x = Math.round(t.getScrollLeft() * (1 / t.scrollratio.x)), t.cursoractive && t.noticeCursor()), t.scroll.y && 0 == t.getScrollTop() && t.doScrollTo(Math.floor(t.scroll.y * t.scrollratio.y)), t)
                }, this.resize = t.onResize, this.hlazyresize = 0, this.lazyResize = function(a) {
                    return t.haswrapper || t.hide(), t.hlazyresize && clearTimeout(t.hlazyresize), t.hlazyresize = setTimeout(function() {
                        t && t.show().resize()
                    }, 240), t
                }, this.jqbind = function(b, c, d) {
                    t.events.push({
                        e: b,
                        n: c,
                        f: d,
                        q: !0
                    }), a(b).bind(c, d)
                }, this.mousewheel = function(a, b, c) {
                    if (a = "jquery" in a ? a[0] : a, "onwheel" in document.createElement("div")) t._bind(a, "wheel", b, c || !1);
                    else {
                        var d = void 0 !== document.onmousewheel ? "mousewheel" : "DOMMouseScroll";
                        r(a, d, b, c || !1), "DOMMouseScroll" == d && r(a, "MozMousePixelScroll", b, c || !1)
                    }
                }, w.haseventlistener ? (this.bind = function(a, b, c, d) {
                    t._bind("jquery" in a ? a[0] : a, b, c, d || !1)
                }, this._bind = function(a, b, c, d) {
                    t.events.push({
                        e: a,
                        n: b,
                        f: c,
                        b: d,
                        q: !1
                    }), a.addEventListener(b, c, d || !1)
                }, this.cancelEvent = function(a) {
                    return !!a && (a = a.original ? a.original : a, a.cancelable && a.preventDefault(), a.stopPropagation(), a.preventManipulation && a.preventManipulation(), !1)
                }, this.stopPropagation = function(a) {
                    return !!a && (a = a.original ? a.original : a, a.stopPropagation(), !1)
                }, this._unbind = function(a, b, c, d) {
                    a.removeEventListener(b, c, d)
                }) : (this.bind = function(a, b, c, d) {
                    var e = "jquery" in a ? a[0] : a;
                    t._bind(e, b, function(a) {
                        return (a = a || window.event || !1) && a.srcElement && (a.target = a.srcElement), "pageY" in a || (a.pageX = a.clientX + document.documentElement.scrollLeft, a.pageY = a.clientY + document.documentElement.scrollTop), !1 !== c.call(e, a) && !1 !== d || t.cancelEvent(a)
                    })
                }, this._bind = function(a, b, c, d) {
                    t.events.push({
                        e: a,
                        n: b,
                        f: c,
                        b: d,
                        q: !1
                    }), a.attachEvent ? a.attachEvent("on" + b, c) : a["on" + b] = c
                }, this.cancelEvent = function(a) {
                    return !!(a = window.event || !1) && (a.cancelBubble = !0, a.cancel = !0, a.returnValue = !1)
                }, this.stopPropagation = function(a) {
                    return !!(a = window.event || !1) && (a.cancelBubble = !0, !1)
                }, this._unbind = function(a, b, c, d) {
                    a.detachEvent ? a.detachEvent("on" + b, c) : a["on" + b] = !1
                }), this.unbindAll = function() {
                    for (var a = 0; a < t.events.length; a++) {
                        var b = t.events[a];
                        b.q ? b.e.unbind(b.n, b.f) : t._unbind(b.e, b.n, b.f, b.b)
                    }
                }, this.showRail = function() {
                    return 0 == t.page.maxh || !t.ispage && "none" == t.win.css("display") || (t.visibility = !0, t.rail.visibility = !0, t.rail.css("display", "block")), t
                }, this.showRailHr = function() {
                    return t.railh ? (0 == t.page.maxw || !t.ispage && "none" == t.win.css("display") || (t.railh.visibility = !0, t.railh.css("display", "block")), t) : t
                }, this.hideRail = function() {
                    return t.visibility = !1, t.rail.visibility = !1, t.rail.css("display", "none"), t
                }, this.hideRailHr = function() {
                    return t.railh ? (t.railh.visibility = !1, t.railh.css("display", "none"), t) : t
                }, this.show = function() {
                    return t.hidden = !1, t.railslocked = !1, t.showRail().showRailHr()
                }, this.hide = function() {
                    return t.hidden = !0, t.railslocked = !0, t.hideRail().hideRailHr()
                }, this.toggle = function() {
                    return t.hidden ? t.show() : t.hide()
                }, this.remove = function() {
                    t.stop(), t.cursortimeout && clearTimeout(t.cursortimeout);
                    for (var b in t.delaylist) t.delaylist[b] && i(t.delaylist[b].h);
                    for (t.doZoomOut(), t.unbindAll(), w.isie9 && t.win[0].detachEvent("onpropertychange", t.onAttributeChange), !1 !== t.observer && t.observer.disconnect(), !1 !== t.observerremover && t.observerremover.disconnect(), !1 !== t.observerbody && t.observerbody.disconnect(), t.events = null, t.cursor && t.cursor.remove(), t.cursorh && t.cursorh.remove(), t.rail && t.rail.remove(), t.railh && t.railh.remove(), t.zoom && t.zoom.remove(), b = 0; b < t.saved.css.length; b++) {
                        var c = t.saved.css[b];
                        c[0].css(c[1], void 0 === c[2] ? "" : c[2])
                    }
                    t.saved = !1, t.me.data("__nicescroll", "");
                    var d = a.nicescroll;
                    d.each(function(a) {
                        if (this && this.id === t.id) {
                            delete d[a];
                            for (var b = ++a; b < d.length; b++, a++) d[a] = d[b];
                            d.length--, d.length && delete d[d.length]
                        }
                    });
                    for (var e in t) t[e] = null, delete t[e];
                    t = null
                }, this.scrollstart = function(a) {
                    return this.onscrollstart = a, t
                }, this.scrollend = function(a) {
                    return this.onscrollend = a, t
                }, this.scrollcancel = function(a) {
                    return this.onscrollcancel = a, t
                }, this.zoomin = function(a) {
                    return this.onzoomin = a, t
                }, this.zoomout = function(a) {
                    return this.onzoomout = a, t
                }, this.isScrollable = function(b) {
                    if (b = b.target ? b.target : b, "OPTION" == b.nodeName) return !0;
                    for (; b && 1 == b.nodeType && !/^BODY|HTML/.test(b.nodeName);) {
                        var c = a(b),
                            c = c.css("overflowY") || c.css("overflowX") || c.css("overflow") || "";
                        if (/scroll|auto/.test(c)) return b.clientHeight != b.scrollHeight;
                        b = !!b.parentNode && b.parentNode
                    }
                    return !1
                }, this.getViewport = function(b) {
                    for (b = !(!b || !b.parentNode) && b.parentNode; b && 1 == b.nodeType && !/^BODY|HTML/.test(b.nodeName);) {
                        var c = a(b);
                        if (/fixed|absolute/.test(c.css("position"))) return c;
                        var d = c.css("overflowY") || c.css("overflowX") || c.css("overflow") || "";
                        if (/scroll|auto/.test(d) && b.clientHeight != b.scrollHeight || 0 < c.getNiceScroll().length) return c;
                        b = !!b.parentNode && b.parentNode
                    }
                    return !1
                }, this.triggerScrollEnd = function() {
                    if (t.onscrollend) {
                        var a = t.getScrollLeft(),
                            b = t.getScrollTop();
                        t.onscrollend.call(t, {
                            type: "scrollend",
                            current: {
                                x: a,
                                y: b
                            },
                            end: {
                                x: a,
                                y: b
                            }
                        })
                    }
                }, this.onmousewheel = function(a) {
                    if (!t.wheelprevented) {
                        if (t.railslocked) return t.debounced("checkunlock", t.resize, 250), !0;
                        if (t.rail.drag) return t.cancelEvent(a);
                        if ("auto" == t.opt.oneaxismousemode && 0 != a.deltaX && (t.opt.oneaxismousemode = !1), t.opt.oneaxismousemode && 0 == a.deltaX && !t.rail.scrollable) return !t.railh || !t.railh.scrollable || t.onmousewheelhr(a);
                        var b = +new Date,
                            c = !1;
                        return t.opt.preservenativescrolling && t.checkarea + 600 < b && (t.nativescrollingarea = t.isScrollable(a), c = !0), t.checkarea = b, !!t.nativescrollingarea || ((a = s(a, !1, c)) && (t.checkarea = 0), a)
                    }
                }, this.onmousewheelhr = function(a) {
                    if (!t.wheelprevented) {
                        if (t.railslocked || !t.railh.scrollable) return !0;
                        if (t.rail.drag) return t.cancelEvent(a);
                        var b = +new Date,
                            c = !1;
                        return t.opt.preservenativescrolling && t.checkarea + 600 < b && (t.nativescrollingarea = t.isScrollable(a), c = !0), t.checkarea = b, !!t.nativescrollingarea || (t.railslocked ? t.cancelEvent(a) : s(a, !0, c))
                    }
                }, this.stop = function() {
                    return t.cancelScroll(), t.scrollmon && t.scrollmon.stop(), t.cursorfreezed = !1, t.scroll.y = Math.round(t.getScrollTop() * (1 / t.scrollratio.y)), t.noticeCursor(), t
                }, this.getTransitionSpeed = function(a) {
                    return a = Math.min(Math.round(10 * t.opt.scrollspeed), Math.round(a / 20 * t.opt.scrollspeed)), 20 < a ? a : 0
                }, t.opt.smoothscroll ? t.ishwscroll && w.hastransition && t.opt.usetransition && t.opt.smoothscroll ? (this.prepareTransition = function(a, b) {
                    var c = b ? 20 < a ? a : 0 : t.getTransitionSpeed(a),
                        d = c ? w.prefixstyle + "transform " + c + "ms ease-out" : "";
                    return t.lasttransitionstyle && t.lasttransitionstyle == d || (t.lasttransitionstyle = d, t.doc.css(w.transitionstyle, d)), c
                }, this.doScrollLeft = function(a, b) {
                    var c = t.scrollrunning ? t.newscrolly : t.getScrollTop();
                    t.doScrollPos(a, c, b)
                }, this.doScrollTop = function(a, b) {
                    var c = t.scrollrunning ? t.newscrollx : t.getScrollLeft();
                    t.doScrollPos(c, a, b)
                }, this.doScrollPos = function(a, b, c) {
                    var d = t.getScrollTop(),
                        e = t.getScrollLeft();
                    return (0 > (t.newscrolly - d) * (b - d) || 0 > (t.newscrollx - e) * (a - e)) && t.cancelScroll(), 0 == t.opt.bouncescroll && (0 > b ? b = 0 : b > t.page.maxh && (b = t.page.maxh), 0 > a ? a = 0 : a > t.page.maxw && (a = t.page.maxw)), (!t.scrollrunning || a != t.newscrollx || b != t.newscrolly) && (t.newscrolly = b, t.newscrollx = a, t.newscrollspeed = c || !1, !t.timer && void(t.timer = setTimeout(function() {
                        var c = t.getScrollTop(),
                            d = t.getScrollLeft(),
                            e = Math.round(Math.sqrt(Math.pow(a - d, 2) + Math.pow(b - c, 2))),
                            e = t.newscrollspeed && 1 < t.newscrollspeed ? t.newscrollspeed : t.getTransitionSpeed(e);
                        t.newscrollspeed && 1 >= t.newscrollspeed && (e *= t.newscrollspeed), t.prepareTransition(e, !0), t.timerscroll && t.timerscroll.tm && clearInterval(t.timerscroll.tm), 0 < e && (!t.scrollrunning && t.onscrollstart && t.onscrollstart.call(t, {
                            type: "scrollstart",
                            current: {
                                x: d,
                                y: c
                            },
                            request: {
                                x: a,
                                y: b
                            },
                            end: {
                                x: t.newscrollx,
                                y: t.newscrolly
                            },
                            speed: e
                        }), w.transitionend ? t.scrollendtrapped || (t.scrollendtrapped = !0, t.bind(t.doc, w.transitionend, t.onScrollTransitionEnd, !1)) : (t.scrollendtrapped && clearTimeout(t.scrollendtrapped), t.scrollendtrapped = setTimeout(t.onScrollTransitionEnd, e)), t.timerscroll = {
                            bz: new y(c, t.newscrolly, e, 0, 0, .58, 1),
                            bh: new y(d, t.newscrollx, e, 0, 0, .58, 1)
                        }, t.cursorfreezed || (t.timerscroll.tm = setInterval(function() {
                            t.showCursor(t.getScrollTop(), t.getScrollLeft())
                        }, 60))), t.synched("doScroll-set", function() {
                            t.timer = 0, t.scrollendtrapped && (t.scrollrunning = !0), t.setScrollTop(t.newscrolly), t.setScrollLeft(t.newscrollx), t.scrollendtrapped || t.onScrollTransitionEnd()
                        })
                    }, 50)))
                }, this.cancelScroll = function() {
                    if (!t.scrollendtrapped) return !0;
                    var a = t.getScrollTop(),
                        b = t.getScrollLeft();
                    return t.scrollrunning = !1, w.transitionend || clearTimeout(w.transitionend), t.scrollendtrapped = !1, t._unbind(t.doc[0], w.transitionend, t.onScrollTransitionEnd), t.prepareTransition(0), t.setScrollTop(a), t.railh && t.setScrollLeft(b), t.timerscroll && t.timerscroll.tm && clearInterval(t.timerscroll.tm), t.timerscroll = !1, t.cursorfreezed = !1, t.showCursor(a, b), t
                }, this.onScrollTransitionEnd = function() {
                    t.scrollendtrapped && t._unbind(t.doc[0], w.transitionend, t.onScrollTransitionEnd), t.scrollendtrapped = !1, t.prepareTransition(0), t.timerscroll && t.timerscroll.tm && clearInterval(t.timerscroll.tm), t.timerscroll = !1;
                    var a = t.getScrollTop(),
                        b = t.getScrollLeft();
                    return t.setScrollTop(a), t.railh && t.setScrollLeft(b), t.noticeCursor(!1, a, b), t.cursorfreezed = !1, 0 > a ? a = 0 : a > t.page.maxh && (a = t.page.maxh), 0 > b ? b = 0 : b > t.page.maxw && (b = t.page.maxw), a != t.newscrolly || b != t.newscrollx ? t.doScrollPos(b, a, t.opt.snapbackspeed) : (t.onscrollend && t.scrollrunning && t.triggerScrollEnd(), void(t.scrollrunning = !1))
                }) : (this.doScrollLeft = function(a, b) {
                    var c = t.scrollrunning ? t.newscrolly : t.getScrollTop();
                    t.doScrollPos(a, c, b)
                }, this.doScrollTop = function(a, b) {
                    var c = t.scrollrunning ? t.newscrollx : t.getScrollLeft();
                    t.doScrollPos(c, a, b)
                }, this.doScrollPos = function(a, b, c) {
                    function d() {
                        if (t.cancelAnimationFrame) return !0;
                        if (t.scrollrunning = !0, l = 1 - l) return t.timer = h(d) || 1;
                        var b, c, a = 0,
                            e = c = t.getScrollTop();
                        t.dst.ay ? (e = t.bzscroll ? t.dst.py + t.bzscroll.getNow() * t.dst.ay : t.newscrolly, b = e - c, (0 > b && e < t.newscrolly || 0 < b && e > t.newscrolly) && (e = t.newscrolly), t.setScrollTop(e), e == t.newscrolly && (a = 1)) : a = 1, c = b = t.getScrollLeft(), t.dst.ax ? (c = t.bzscroll ? t.dst.px + t.bzscroll.getNow() * t.dst.ax : t.newscrollx, b = c - b, (0 > b && c < t.newscrollx || 0 < b && c > t.newscrollx) && (c = t.newscrollx), t.setScrollLeft(c), c == t.newscrollx && (a += 1)) : a += 1, 2 == a ? (t.timer = 0, t.cursorfreezed = !1, t.bzscroll = !1, t.scrollrunning = !1, 0 > e ? e = 0 : e > t.page.maxh && (e = Math.max(0, t.page.maxh)), 0 > c ? c = 0 : c > t.page.maxw && (c = t.page.maxw), c != t.newscrollx || e != t.newscrolly ? t.doScrollPos(c, e) : t.onscrollend && t.triggerScrollEnd()) : t.timer = h(d) || 1
                    }
                    if (b = void 0 === b || !1 === b ? t.getScrollTop(!0) : b, t.timer && t.newscrolly == b && t.newscrollx == a) return !0;
                    t.timer && i(t.timer), t.timer = 0;
                    var e = t.getScrollTop(),
                        f = t.getScrollLeft();
                    (0 > (t.newscrolly - e) * (b - e) || 0 > (t.newscrollx - f) * (a - f)) && t.cancelScroll(), t.newscrolly = b, t.newscrollx = a, t.bouncescroll && t.rail.visibility || (0 > t.newscrolly ? t.newscrolly = 0 : t.newscrolly > t.page.maxh && (t.newscrolly = t.page.maxh)), t.bouncescroll && t.railh.visibility || (0 > t.newscrollx ? t.newscrollx = 0 : t.newscrollx > t.page.maxw && (t.newscrollx = t.page.maxw)), t.dst = {}, t.dst.x = a - f, t.dst.y = b - e, t.dst.px = f, t.dst.py = e;
                    var g = Math.round(Math.sqrt(Math.pow(t.dst.x, 2) + Math.pow(t.dst.y, 2)));
                    t.dst.ax = t.dst.x / g, t.dst.ay = t.dst.y / g;
                    var j = 0,
                        k = g;
                    if (0 == t.dst.x ? (j = e, k = b, t.dst.ay = 1, t.dst.py = 0) : 0 == t.dst.y && (j = f, k = a, t.dst.ax = 1, t.dst.px = 0), g = t.getTransitionSpeed(g), c && 1 >= c && (g *= c), t.bzscroll = 0 < g && (t.bzscroll ? t.bzscroll.update(k, g) : new y(j, k, g, 0, 1, 0, 1)), !t.timer) {
                        (e == t.page.maxh && b >= t.page.maxh || f == t.page.maxw && a >= t.page.maxw) && t.checkContentSize();
                        var l = 1;
                        t.cancelAnimationFrame = !1, t.timer = 1, t.onscrollstart && !t.scrollrunning && t.onscrollstart.call(t, {
                            type: "scrollstart",
                            current: {
                                x: f,
                                y: e
                            },
                            request: {
                                x: a,
                                y: b
                            },
                            end: {
                                x: t.newscrollx,
                                y: t.newscrolly
                            },
                            speed: g
                        }), d(), (e == t.page.maxh && b >= e || f == t.page.maxw && a >= f) && t.checkContentSize(), t.noticeCursor()
                    }
                }, this.cancelScroll = function() {
                    return t.timer && i(t.timer), t.timer = 0, t.bzscroll = !1, t.scrollrunning = !1, t
                }) : (this.doScrollLeft = function(a, b) {
                    var c = t.getScrollTop();
                    t.doScrollPos(a, c, b)
                }, this.doScrollTop = function(a, b) {
                    var c = t.getScrollLeft();
                    t.doScrollPos(c, a, b)
                }, this.doScrollPos = function(a, b, c) {
                    var d = a > t.page.maxw ? t.page.maxw : a;
                    0 > d && (d = 0);
                    var e = b > t.page.maxh ? t.page.maxh : b;
                    0 > e && (e = 0), t.synched("scroll", function() {
                        t.setScrollTop(e), t.setScrollLeft(d)
                    })
                }, this.cancelScroll = function() {}), this.doScrollBy = function(a, b) {
                    var c = 0,
                        c = b ? Math.floor((t.scroll.y - a) * t.scrollratio.y) : (t.timer ? t.newscrolly : t.getScrollTop(!0)) - a;
                    if (t.bouncescroll) {
                        var d = Math.round(t.view.h / 2);
                        c < -d ? c = -d : c > t.page.maxh + d && (c = t.page.maxh + d)
                    }
                    return t.cursorfreezed = !1, d = t.getScrollTop(!0), 0 > c && 0 >= d ? t.noticeCursor() : c > t.page.maxh && d >= t.page.maxh ? (t.checkContentSize(), t.noticeCursor()) : void t.doScrollTop(c)
                }, this.doScrollLeftBy = function(a, b) {
                    var c = 0,
                        c = b ? Math.floor((t.scroll.x - a) * t.scrollratio.x) : (t.timer ? t.newscrollx : t.getScrollLeft(!0)) - a;
                    if (t.bouncescroll) {
                        var d = Math.round(t.view.w / 2);
                        c < -d ? c = -d : c > t.page.maxw + d && (c = t.page.maxw + d)
                    }
                    return t.cursorfreezed = !1, d = t.getScrollLeft(!0), 0 > c && 0 >= d || c > t.page.maxw && d >= t.page.maxw ? t.noticeCursor() : void t.doScrollLeft(c)
                }, this.doScrollTo = function(a, b) {
                    t.cursorfreezed = !1, t.doScrollTop(a)
                }, this.checkContentSize = function() {
                    var a = t.getContentSize();
                    a.h == t.page.h && a.w == t.page.w || t.resize(!1, a)
                }, t.onscroll = function(a) {
                    t.rail.drag || t.cursorfreezed || t.synched("scroll", function() {
                        t.scroll.y = Math.round(t.getScrollTop() * (1 / t.scrollratio.y)), t.railh && (t.scroll.x = Math.round(t.getScrollLeft() * (1 / t.scrollratio.x))), t.noticeCursor()
                    })
                }, t.bind(t.docscroll, "scroll", t.onscroll), this.doZoomIn = function(b) {
                    if (!t.zoomactive) {
                        t.zoomactive = !0, t.zoomrestore = {
                            style: {}
                        };
                        var e, c = "position top left zIndex backgroundColor marginTop marginBottom marginLeft marginRight".split(" "),
                            d = t.win[0].style;
                        for (e in c) {
                            var g = c[e];
                            t.zoomrestore.style[g] = void 0 !== d[g] ? d[g] : ""
                        }
                        return t.zoomrestore.style.width = t.win.css("width"), t.zoomrestore.style.height = t.win.css("height"), t.zoomrestore.padding = {
                            w: t.win.outerWidth() - t.win.width(),
                            h: t.win.outerHeight() - t.win.height()
                        }, w.isios4 && (t.zoomrestore.scrollTop = a(window).scrollTop(), a(window).scrollTop(0)), t.win.css({
                            position: w.isios4 ? "absolute" : "fixed",
                            top: 0,
                            left: 0,
                            zIndex: f + 100,
                            margin: 0
                        }), c = t.win.css("backgroundColor"), ("" == c || /transparent|rgba\(0, 0, 0, 0\)|rgba\(0,0,0,0\)/.test(c)) && t.win.css("backgroundColor", "#fff"), t.rail.css({
                            zIndex: f + 101
                        }), t.zoom.css({
                            zIndex: f + 102
                        }), t.zoom.css("backgroundPosition", "0px -18px"), t.resizeZoom(), t.onzoomin && t.onzoomin.call(t), t.cancelEvent(b)
                    }
                }, this.doZoomOut = function(b) {
                    if (t.zoomactive) return t.zoomactive = !1, t.win.css("margin", ""), t.win.css(t.zoomrestore.style), w.isios4 && a(window).scrollTop(t.zoomrestore.scrollTop), t.rail.css({
                        "z-index": t.zindex
                    }), t.zoom.css({
                        "z-index": t.zindex
                    }), t.zoomrestore = !1, t.zoom.css("backgroundPosition", "0px 0px"), t.onResize(), t.onzoomout && t.onzoomout.call(t), t.cancelEvent(b)
                }, this.doZoom = function(a) {
                    return t.zoomactive ? t.doZoomOut(a) : t.doZoomIn(a)
                }, this.resizeZoom = function() {
                    if (t.zoomactive) {
                        var b = t.getScrollTop();
                        t.win.css({
                            width: a(window).width() - t.zoomrestore.padding.w + "px",
                            height: a(window).height() - t.zoomrestore.padding.h + "px"
                        }), t.onResize(), t.setScrollTop(Math.min(t.page.maxh, b))
                    }
                }, this.init(), a.nicescroll.push(this)
            },
            q = function(a) {
                var b = this;
                this.nc = a, this.steptime = this.lasttime = this.speedy = this.speedx = this.lasty = this.lastx = 0, this.snapy = this.snapx = !1, this.demuly = this.demulx = 0, this.lastscrolly = this.lastscrollx = -1, this.timer = this.chky = this.chkx = 0, this.time = function() {
                    return +new Date
                }, this.reset = function(a, c) {
                    b.stop();
                    var d = b.time();
                    b.steptime = 0, b.lasttime = d, b.speedx = 0, b.speedy = 0, b.lastx = a, b.lasty = c, b.lastscrollx = -1, b.lastscrolly = -1
                }, this.update = function(a, c) {
                    var d = b.time();
                    b.steptime = d - b.lasttime, b.lasttime = d;
                    var d = c - b.lasty,
                        e = a - b.lastx,
                        f = b.nc.getScrollTop(),
                        g = b.nc.getScrollLeft(),
                        f = f + d,
                        g = g + e;
                    b.snapx = 0 > g || g > b.nc.page.maxw, b.snapy = 0 > f || f > b.nc.page.maxh, b.speedx = e, b.speedy = d, b.lastx = a, b.lasty = c
                }, this.stop = function() {
                    b.nc.unsynched("domomentum2d"), b.timer && clearTimeout(b.timer), b.timer = 0, b.lastscrollx = -1, b.lastscrolly = -1
                }, this.doSnapy = function(a, c) {
                    var d = !1;
                    0 > c ? (c = 0, d = !0) : c > b.nc.page.maxh && (c = b.nc.page.maxh, d = !0), 0 > a ? (a = 0, d = !0) : a > b.nc.page.maxw && (a = b.nc.page.maxw, d = !0), d ? b.nc.doScrollPos(a, c, b.nc.opt.snapbackspeed) : b.nc.triggerScrollEnd()
                }, this.doMomentum = function(a) {
                    var c = b.time(),
                        d = a ? c + a : b.lasttime;
                    a = b.nc.getScrollLeft();
                    var e = b.nc.getScrollTop(),
                        f = b.nc.page.maxh,
                        g = b.nc.page.maxw;
                    if (b.speedx = 0 < g ? Math.min(60, b.speedx) : 0, b.speedy = 0 < f ? Math.min(60, b.speedy) : 0, d = d && 60 >= c - d, (0 > e || e > f || 0 > a || a > g) && (d = !1), a = !(!b.speedx || !d) && b.speedx, b.speedy && d && b.speedy || a) {
                        var h = Math.max(16, b.steptime);
                        50 < h && (a = h / 50, b.speedx *= a, b.speedy *= a, h = 50), b.demulxy = 0, b.lastscrollx = b.nc.getScrollLeft(), b.chkx = b.lastscrollx, b.lastscrolly = b.nc.getScrollTop(), b.chky = b.lastscrolly;
                        var i = b.lastscrollx,
                            j = b.lastscrolly,
                            k = function() {
                                var a = 600 < b.time() - c ? .04 : .02;
                                b.speedx && (i = Math.floor(b.lastscrollx - b.speedx * (1 - b.demulxy)), b.lastscrollx = i, 0 > i || i > g) && (a = .1), b.speedy && (j = Math.floor(b.lastscrolly - b.speedy * (1 - b.demulxy)), b.lastscrolly = j, 0 > j || j > f) && (a = .1), b.demulxy = Math.min(1, b.demulxy + a), b.nc.synched("domomentum2d", function() {
                                    b.speedx && (b.nc.getScrollLeft(), b.chkx = i, b.nc.setScrollLeft(i)), b.speedy && (b.nc.getScrollTop(), b.chky = j, b.nc.setScrollTop(j)), b.timer || (b.nc.hideCursor(), b.doSnapy(i, j))
                                }), 1 > b.demulxy ? b.timer = setTimeout(k, h) : (b.stop(), b.nc.hideCursor(), b.doSnapy(i, j))
                            };
                        k()
                    } else b.doSnapy(b.nc.getScrollLeft(), b.nc.getScrollTop())
                }
            },
            r = a.fn.scrollTop;
        a.cssHooks.pageYOffset = {
            get: function(b, c, d) {
                return (c = a.data(b, "__nicescroll") || !1) && c.ishwscroll ? c.getScrollTop() : r.call(b)
            },
            set: function(b, c) {
                var d = a.data(b, "__nicescroll") || !1;
                return d && d.ishwscroll ? d.setScrollTop(parseInt(c)) : r.call(b, c), this
            }
        }, a.fn.scrollTop = function(b) {
            if (void 0 === b) {
                var c = !!this[0] && (a.data(this[0], "__nicescroll") || !1);
                return c && c.ishwscroll ? c.getScrollTop() : r.call(this)
            }
            return this.each(function() {
                var c = a.data(this, "__nicescroll") || !1;
                c && c.ishwscroll ? c.setScrollTop(parseInt(b)) : r.call(a(this), b)
            })
        };
        var s = a.fn.scrollLeft;
        a.cssHooks.pageXOffset = {
            get: function(b, c, d) {
                return (c = a.data(b, "__nicescroll") || !1) && c.ishwscroll ? c.getScrollLeft() : s.call(b)
            },
            set: function(b, c) {
                var d = a.data(b, "__nicescroll") || !1;
                return d && d.ishwscroll ? d.setScrollLeft(parseInt(c)) : s.call(b, c), this
            }
        }, a.fn.scrollLeft = function(b) {
            if (void 0 === b) {
                var c = !!this[0] && (a.data(this[0], "__nicescroll") || !1);
                return c && c.ishwscroll ? c.getScrollLeft() : s.call(this)
            }
            return this.each(function() {
                var c = a.data(this, "__nicescroll") || !1;
                c && c.ishwscroll ? c.setScrollLeft(parseInt(b)) : s.call(a(this), b)
            })
        };
        var t = function(b) {
            var c = this;
            if (this.length = 0, this.name = "nicescrollarray", this.each = function(b) {
                    return a.each(c, b), c
                }, this.push = function(a) {
                    c[c.length] = a, c.length++
                }, this.eq = function(a) {
                    return c[a]
                }, b)
                for (var d = 0; d < b.length; d++) {
                    var e = a.data(b[d], "__nicescroll") || !1;
                    e && (this[this.length] = e, this.length++)
                }
            return this
        };
        ! function(a, b, c) {
            for (var d = 0; d < b.length; d++) c(a, b[d])
        }(t.prototype, "show hide toggle onResize resize remove stop doScrollPos".split(" "), function(a, b) {
            a[b] = function() {
                var a = arguments;
                return this.each(function() {
                    this[b].apply(this, a)
                })
            }
        }), a.fn.getNiceScroll = function(b) {
            return void 0 === b ? new t(this) : this[b] && a.data(this[b], "__nicescroll") || !1
        }, a.expr[":"].nicescroll = function(b) {
            return void 0 !== a.data(b, "__nicescroll")
        }, a.fn.niceScroll = function(b, c) {
            void 0 !== c || "object" != typeof b || "jquery" in b || (c = b, b = !1), c = a.extend({}, c);
            var d = new t;
            void 0 === c && (c = {}), b && (c.doc = a(b), c.win = a(this));
            var e = !("doc" in c);
            return e || "win" in c || (c.win = a(this)), this.each(function() {
                var b = a(this).data("__nicescroll") || !1;
                b || (c.doc = e ? a(this) : c.doc, b = new p(c, a(this)), a(this).data("__nicescroll", b)), d.push(b)
            }), 1 == d.length ? d[0] : d
        }, window.NiceScroll = {
            getjQuery: function() {
                return a
            }
        }, a.nicescroll || (a.nicescroll = new t, a.nicescroll.options = m)
    }), ! function(a, b, c) {
        "use strict";
        ! function a(b, c, d) {
            function e(g, h) {
                if (!c[g]) {
                    if (!b[g]) {
                        var i = "function" == typeof require && require;
                        if (!h && i) return i(g, !0);
                        if (f) return f(g, !0);
                        var j = new Error("Cannot find module '" + g + "'");
                        throw j.code = "MODULE_NOT_FOUND", j
                    }
                    var k = c[g] = {
                        exports: {}
                    };
                    b[g][0].call(k.exports, function(a) {
                        var c = b[g][1][a];
                        return e(c ? c : a)
                    }, k, k.exports, a, b, c, d)
                }
                return c[g].exports
            }
            for (var f = "function" == typeof require && require, g = 0; g < d.length; g++) e(d[g]);
            return e
        }({
            1: [function(d, e, f) {
                var g = function(a) {
                    return a && a.__esModule ? a : {
                        default: a
                    }
                };
                Object.defineProperty(f, "__esModule", {
                    value: !0
                });
                var h, i, j, k, l = d("./modules/handle-dom"),
                    m = d("./modules/utils"),
                    n = d("./modules/handle-swal-dom"),
                    o = d("./modules/handle-click"),
                    p = d("./modules/handle-key"),
                    q = g(p),
                    r = d("./modules/default-params"),
                    s = g(r),
                    t = d("./modules/set-params"),
                    u = g(t);
                f.default = j = k = function() {
                    function d(a) {
                        var b = e;
                        return b[a] === c ? s.default[a] : b[a]
                    }
                    var e = arguments[0];
                    if (l.addClass(b.body, "stop-scrolling"), n.resetInput(), e === c) return m.logStr("SweetAlert expects at least 1 attribute!"), !1;
                    var f = m.extend({}, s.default);
                    switch (typeof e) {
                        case "string":
                            f.title = e, f.text = arguments[1] || "", f.type = arguments[2] || "";
                            break;
                        case "object":
                            if (e.title === c) return m.logStr('Missing "title" argument!'), !1;
                            f.title = e.title;
                            for (var g in s.default) f[g] = d(g);
                            f.confirmButtonText = f.showCancelButton ? "Confirm" : s.default.confirmButtonText, f.confirmButtonText = d("confirmButtonText"), f.doneFunction = arguments[1] || null;
                            break;
                        default:
                            return m.logStr('Unexpected type of argument! Expected "string" or "object", got ' + typeof e), !1
                    }
                    u.default(f), n.fixVerticalPosition(), n.openModal(arguments[1]);
                    for (var j = n.getModal(), p = j.querySelectorAll("button"), r = ["onclick", "onmouseover", "onmouseout", "onmousedown", "onmouseup", "onfocus"], t = function(a) {
                            return o.handleButton(a, f, j)
                        }, v = 0; v < p.length; v++)
                        for (var w = 0; w < r.length; w++) {
                            var x = r[w];
                            p[v][x] = t
                        }
                    n.getOverlay().onclick = t, h = a.onkeydown;
                    var y = function(a) {
                        return q.default(a, f, j)
                    };
                    a.onkeydown = y, a.onfocus = function() {
                        setTimeout(function() {
                            i !== c && (i.focus(), i = c)
                        }, 0)
                    }, k.enableButtons()
                }, j.setDefaults = k.setDefaults = function(a) {
                    if (!a) throw new Error("userParams is required");
                    if ("object" != typeof a) throw new Error("userParams has to be a object");
                    m.extend(s.default, a)
                }, j.close = k.close = function() {
                    var d = n.getModal();
                    l.fadeOut(n.getOverlay(), 5), l.fadeOut(d, 5), l.removeClass(d, "showSweetAlert"), l.addClass(d, "hideSweetAlert"), l.removeClass(d, "visible");
                    var e = d.querySelector(".sa-icon.sa-success");
                    l.removeClass(e, "animate"), l.removeClass(e.querySelector(".sa-tip"), "animateSuccessTip"), l.removeClass(e.querySelector(".sa-long"), "animateSuccessLong");
                    var f = d.querySelector(".sa-icon.sa-error");
                    l.removeClass(f, "animateErrorIcon"), l.removeClass(f.querySelector(".sa-x-mark"), "animateXMark");
                    var g = d.querySelector(".sa-icon.sa-warning");
                    return l.removeClass(g, "pulseWarning"), l.removeClass(g.querySelector(".sa-body"), "pulseWarningIns"), l.removeClass(g.querySelector(".sa-dot"), "pulseWarningIns"), setTimeout(function() {
                        var a = d.getAttribute("data-custom-class");
                        l.removeClass(d, a)
                    }, 300), l.removeClass(b.body, "stop-scrolling"), a.onkeydown = h, a.previousActiveElement && a.previousActiveElement.focus(), i = c, clearTimeout(d.timeout), !0
                }, j.showInputError = k.showInputError = function(a) {
                    var b = n.getModal(),
                        c = b.querySelector(".sa-input-error");
                    l.addClass(c, "show");
                    var d = b.querySelector(".sa-error-container");
                    l.addClass(d, "show"), d.querySelector("p").innerHTML = a, setTimeout(function() {
                        j.enableButtons()
                    }, 1), b.querySelector("input").focus()
                }, j.resetInputError = k.resetInputError = function(a) {
                    if (a && 13 === a.keyCode) return !1;
                    var b = n.getModal(),
                        c = b.querySelector(".sa-input-error");
                    l.removeClass(c, "show");
                    var d = b.querySelector(".sa-error-container");
                    l.removeClass(d, "show")
                }, j.disableButtons = k.disableButtons = function() {
                    var a = n.getModal(),
                        b = a.querySelector("button.confirm"),
                        c = a.querySelector("button.cancel");
                    b.disabled = !0, c.disabled = !0
                }, j.enableButtons = k.enableButtons = function() {
                    var a = n.getModal(),
                        b = a.querySelector("button.confirm"),
                        c = a.querySelector("button.cancel");
                    b.disabled = !1, c.disabled = !1
                }, "undefined" != typeof a ? a.sweetAlert = a.swal = j : m.logStr("SweetAlert is a frontend module!"), e.exports = f.default
            }, {
                "./modules/default-params": 2,
                "./modules/handle-click": 3,
                "./modules/handle-dom": 4,
                "./modules/handle-key": 5,
                "./modules/handle-swal-dom": 6,
                "./modules/set-params": 8,
                "./modules/utils": 9
            }],
            2: [function(a, b, c) {
                Object.defineProperty(c, "__esModule", {
                    value: !0
                });
                var d = {
                    title: "",
                    text: "",
                    type: null,
                    allowOutsideClick: !1,
                    showConfirmButton: !0,
                    showCancelButton: !1,
                    closeOnConfirm: !0,
                    closeOnCancel: !0,
                    confirmButtonText: "OK",
                    confirmButtonColor: "#8CD4F5",
                    cancelButtonText: "Cancel",
                    imageUrl: null,
                    imageSize: null,
                    timer: null,
                    customClass: "",
                    html: !1,
                    animation: !0,
                    allowEscapeKey: !0,
                    inputType: "text",
                    inputPlaceholder: "",
                    inputValue: "",
                    showLoaderOnConfirm: !1
                };
                c.default = d, b.exports = c.default
            }, {}],
            3: [function(b, c, d) {
                Object.defineProperty(d, "__esModule", {
                    value: !0
                });
                var e = b("./utils"),
                    f = (b("./handle-swal-dom"), b("./handle-dom")),
                    g = function(b, c, d) {
                        function g(a) {
                            o && c.confirmButtonColor && (n.style.backgroundColor = a)
                        }
                        var j, k, l, m = b || a.event,
                            n = m.target || m.srcElement,
                            o = -1 !== n.className.indexOf("confirm"),
                            p = -1 !== n.className.indexOf("sweet-overlay"),
                            q = f.hasClass(d, "visible"),
                            r = c.doneFunction && "true" === d.getAttribute("data-has-done-function");
                        switch (o && c.confirmButtonColor && (j = c.confirmButtonColor, k = e.colorLuminance(j, -.04), l = e.colorLuminance(j, -.14)), m.type) {
                            case "mouseover":
                                g(k);
                                break;
                            case "mouseout":
                                g(j);
                                break;
                            case "mousedown":
                                g(l);
                                break;
                            case "mouseup":
                                g(k);
                                break;
                            case "focus":
                                var s = d.querySelector("button.confirm"),
                                    t = d.querySelector("button.cancel");
                                o ? t.style.boxShadow = "none" : s.style.boxShadow = "none";
                                break;
                            case "click":
                                var u = d === n,
                                    v = f.isDescendant(d, n);
                                if (!u && !v && q && !c.allowOutsideClick) break;
                                o && r && q ? h(d, c) : r && q || p ? i(d, c) : f.isDescendant(d, n) && "BUTTON" === n.tagName && sweetAlert.close()
                        }
                    },
                    h = function(a, b) {
                        var c = !0;
                        f.hasClass(a, "show-input") && (c = a.querySelector("input").value,
                            c || (c = "")), b.doneFunction(c), b.closeOnConfirm && sweetAlert.close(), b.showLoaderOnConfirm && sweetAlert.disableButtons()
                    },
                    i = function(a, b) {
                        var c = String(b.doneFunction).replace(/\s/g, ""),
                            d = "function(" === c.substring(0, 9) && ")" !== c.substring(9, 10);
                        d && b.doneFunction(!1), b.closeOnCancel && sweetAlert.close()
                    };
                d.default = {
                    handleButton: g,
                    handleConfirm: h,
                    handleCancel: i
                }, c.exports = d.default
            }, {
                "./handle-dom": 4,
                "./handle-swal-dom": 6,
                "./utils": 9
            }],
            4: [function(c, d, e) {
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                var f = function(a, b) {
                        return new RegExp(" " + b + " ").test(" " + a.className + " ")
                    },
                    g = function(a, b) {
                        f(a, b) || (a.className += " " + b)
                    },
                    h = function(a, b) {
                        var c = " " + a.className.replace(/[\t\r\n]/g, " ") + " ";
                        if (f(a, b)) {
                            for (; c.indexOf(" " + b + " ") >= 0;) c = c.replace(" " + b + " ", " ");
                            a.className = c.replace(/^\s+|\s+$/g, "")
                        }
                    },
                    i = function(a) {
                        var c = b.createElement("div");
                        return c.appendChild(b.createTextNode(a)), c.innerHTML
                    },
                    j = function(a) {
                        a.style.opacity = "", a.style.display = "block"
                    },
                    k = function(a) {
                        if (a && !a.length) return j(a);
                        for (var b = 0; b < a.length; ++b) j(a[b])
                    },
                    l = function(a) {
                        a.style.opacity = "", a.style.display = "none"
                    },
                    m = function(a) {
                        if (a && !a.length) return l(a);
                        for (var b = 0; b < a.length; ++b) l(a[b])
                    },
                    n = function(a, b) {
                        for (var c = b.parentNode; null !== c;) {
                            if (c === a) return !0;
                            c = c.parentNode
                        }
                        return !1
                    },
                    o = function(a) {
                        a.style.left = "-9999px", a.style.display = "block";
                        var b, c = a.clientHeight;
                        return b = "undefined" != typeof getComputedStyle ? parseInt(getComputedStyle(a).getPropertyValue("padding-top"), 10) : parseInt(a.currentStyle.padding), a.style.left = "", a.style.display = "none", "-" + parseInt((c + b) / 2) + "px"
                    },
                    p = function(a, b) {
                        if (+a.style.opacity < 1) {
                            b = b || 16, a.style.opacity = 0, a.style.display = "block";
                            var c = +new Date,
                                d = function(a) {
                                    function b() {
                                        return a.apply(this, arguments)
                                    }
                                    return b.toString = function() {
                                        return a.toString()
                                    }, b
                                }(function() {
                                    a.style.opacity = +a.style.opacity + (new Date - c) / 100, c = +new Date, +a.style.opacity < 1 && setTimeout(d, b)
                                });
                            d()
                        }
                        a.style.display = "block"
                    },
                    q = function(a, b) {
                        b = b || 16, a.style.opacity = 1;
                        var c = +new Date,
                            d = function(a) {
                                function b() {
                                    return a.apply(this, arguments)
                                }
                                return b.toString = function() {
                                    return a.toString()
                                }, b
                            }(function() {
                                a.style.opacity = +a.style.opacity - (new Date - c) / 100, c = +new Date, +a.style.opacity > 0 ? setTimeout(d, b) : a.style.display = "none"
                            });
                        d()
                    },
                    r = function(c) {
                        if ("function" == typeof MouseEvent) {
                            var d = new MouseEvent("click", {
                                view: a,
                                bubbles: !1,
                                cancelable: !0
                            });
                            c.dispatchEvent(d)
                        } else if (b.createEvent) {
                            var e = b.createEvent("MouseEvents");
                            e.initEvent("click", !1, !1), c.dispatchEvent(e)
                        } else b.createEventObject ? c.fireEvent("onclick") : "function" == typeof c.onclick && c.onclick()
                    },
                    s = function(b) {
                        "function" == typeof b.stopPropagation ? (b.stopPropagation(), b.preventDefault()) : a.event && a.event.hasOwnProperty("cancelBubble") && (a.event.cancelBubble = !0)
                    };
                e.hasClass = f, e.addClass = g, e.removeClass = h, e.escapeHtml = i, e._show = j, e.show = k, e._hide = l, e.hide = m, e.isDescendant = n, e.getTopMargin = o, e.fadeIn = p, e.fadeOut = q, e.fireClick = r, e.stopEventPropagation = s
            }, {}],
            5: [function(b, d, e) {
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                var f = b("./handle-dom"),
                    g = b("./handle-swal-dom"),
                    h = function(b, d, e) {
                        var h = b || a.event,
                            i = h.keyCode || h.which,
                            j = e.querySelector("button.confirm"),
                            k = e.querySelector("button.cancel"),
                            l = e.querySelectorAll("button[tabindex]");
                        if (-1 !== [9, 13, 32, 27].indexOf(i)) {
                            for (var m = h.target || h.srcElement, n = -1, o = 0; o < l.length; o++)
                                if (m === l[o]) {
                                    n = o;
                                    break
                                }
                            9 === i ? (m = -1 === n ? j : n === l.length - 1 ? l[0] : l[n + 1], f.stopEventPropagation(h), m.focus(), d.confirmButtonColor && g.setFocusStyle(m, d.confirmButtonColor)) : 13 === i ? ("INPUT" === m.tagName && (m = j, j.focus()), m = -1 === n ? j : c) : 27 === i && d.allowEscapeKey === !0 ? (m = k, f.fireClick(m, h)) : m = c
                        }
                    };
                e.default = h, d.exports = e.default
            }, {
                "./handle-dom": 4,
                "./handle-swal-dom": 6
            }],
            6: [function(c, d, e) {
                var f = function(a) {
                    return a && a.__esModule ? a : {
                        default: a
                    }
                };
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                var g = c("./utils"),
                    h = c("./handle-dom"),
                    i = c("./default-params"),
                    j = f(i),
                    k = c("./injected-html"),
                    l = f(k),
                    m = ".sweet-alert",
                    n = ".sweet-overlay",
                    o = function() {
                        var a = b.createElement("div");
                        for (a.innerHTML = l.default; a.firstChild;) b.body.appendChild(a.firstChild)
                    },
                    p = function(a) {
                        function b() {
                            return a.apply(this, arguments)
                        }
                        return b.toString = function() {
                            return a.toString()
                        }, b
                    }(function() {
                        var a = b.querySelector(m);
                        return a || (o(), a = p()), a
                    }),
                    q = function() {
                        var a = p();
                        return a ? a.querySelector("input") : void 0
                    },
                    r = function() {
                        return b.querySelector(n)
                    },
                    s = function(a, b) {
                        var c = g.hexToRgb(b);
                        a.style.boxShadow = "0 0 2px rgba(" + c + ", 0.8), inset 0 0 0 1px rgba(0, 0, 0, 0.05)"
                    },
                    t = function(c) {
                        var d = p();
                        h.fadeIn(r(), 10), h.show(d), h.addClass(d, "showSweetAlert"), h.removeClass(d, "hideSweetAlert"), a.previousActiveElement = b.activeElement;
                        var e = d.querySelector("button.confirm");
                        e.focus(), setTimeout(function() {
                            h.addClass(d, "visible")
                        }, 500);
                        var f = d.getAttribute("data-timer");
                        if ("null" !== f && "" !== f) {
                            var g = c;
                            d.timeout = setTimeout(function() {
                                var a = (g || null) && "true" === d.getAttribute("data-has-done-function");
                                a ? g(null) : sweetAlert.close()
                            }, f)
                        }
                    },
                    u = function() {
                        var a = p(),
                            b = q();
                        h.removeClass(a, "show-input"), b.value = j.default.inputValue, b.setAttribute("type", j.default.inputType), b.setAttribute("placeholder", j.default.inputPlaceholder), v()
                    },
                    v = function(a) {
                        if (a && 13 === a.keyCode) return !1;
                        var b = p(),
                            c = b.querySelector(".sa-input-error");
                        h.removeClass(c, "show");
                        var d = b.querySelector(".sa-error-container");
                        h.removeClass(d, "show")
                    },
                    w = function() {
                        var a = p();
                        a.style.marginTop = h.getTopMargin(p())
                    };
                e.sweetAlertInitialize = o, e.getModal = p, e.getOverlay = r, e.getInput = q, e.setFocusStyle = s, e.openModal = t, e.resetInput = u, e.resetInputError = v, e.fixVerticalPosition = w
            }, {
                "./default-params": 2,
                "./handle-dom": 4,
                "./injected-html": 7,
                "./utils": 9
            }],
            7: [function(a, b, c) {
                Object.defineProperty(c, "__esModule", {
                    value: !0
                });
                var d = '<div class="sweet-overlay" tabIndex="-1"></div><div class="sweet-alert"><div class="sa-icon sa-error">\n      <span class="sa-x-mark">\n        <span class="sa-line sa-left"></span>\n        <span class="sa-line sa-right"></span>\n      </span>\n    </div><div class="sa-icon sa-warning">\n      <span class="sa-body"></span>\n      <span class="sa-dot"></span>\n    </div><div class="sa-icon sa-info"></div><div class="sa-icon sa-success">\n      <span class="sa-line sa-tip"></span>\n      <span class="sa-line sa-long"></span>\n\n      <div class="sa-placeholder"></div>\n      <div class="sa-fix"></div>\n    </div><div class="sa-icon sa-custom"></div><h2>Title</h2>\n    <p>Text</p>\n    <fieldset>\n      <input type="text" tabIndex="3" />\n      <div class="sa-input-error"></div>\n    </fieldset><div class="sa-error-container">\n      <div class="icon">!</div>\n      <p>Not valid!</p>\n    </div><div class="sa-button-container">\n      <button class="cancel" tabIndex="2">Cancel</button>\n      <div class="sa-confirm-button-container">\n        <button class="confirm" tabIndex="1">OK</button><div class="la-ball-fall">\n          <div></div>\n          <div></div>\n          <div></div>\n        </div>\n      </div>\n    </div></div>';
                c.default = d, b.exports = c.default
            }, {}],
            8: [function(a, b, d) {
                Object.defineProperty(d, "__esModule", {
                    value: !0
                });
                var e = a("./utils"),
                    f = a("./handle-swal-dom"),
                    g = a("./handle-dom"),
                    h = ["error", "warning", "info", "success", "input", "prompt"],
                    i = function(a) {
                        var b = f.getModal(),
                            d = b.querySelector("h2"),
                            i = b.querySelector("p"),
                            j = b.querySelector("button.cancel"),
                            k = b.querySelector("button.confirm");
                        if (d.innerHTML = a.html ? a.title : g.escapeHtml(a.title).split("\n").join("<br>"), i.innerHTML = a.html ? a.text : g.escapeHtml(a.text || "").split("\n").join("<br>"), a.text && g.show(i), a.customClass) g.addClass(b, a.customClass), b.setAttribute("data-custom-class", a.customClass);
                        else {
                            var l = b.getAttribute("data-custom-class");
                            g.removeClass(b, l), b.setAttribute("data-custom-class", "")
                        }
                        if (g.hide(b.querySelectorAll(".sa-icon")), a.type && !e.isIE8()) {
                            var m = function() {
                                for (var d = !1, e = 0; e < h.length; e++)
                                    if (a.type === h[e]) {
                                        d = !0;
                                        break
                                    }
                                if (!d) return logStr("Unknown alert type: " + a.type), {
                                    v: !1
                                };
                                var i = ["success", "error", "warning", "info"],
                                    j = c; - 1 !== i.indexOf(a.type) && (j = b.querySelector(".sa-icon.sa-" + a.type), g.show(j));
                                var k = f.getInput();
                                switch (a.type) {
                                    case "success":
                                        g.addClass(j, "animate"), g.addClass(j.querySelector(".sa-tip"), "animateSuccessTip"), g.addClass(j.querySelector(".sa-long"), "animateSuccessLong");
                                        break;
                                    case "error":
                                        g.addClass(j, "animateErrorIcon"), g.addClass(j.querySelector(".sa-x-mark"), "animateXMark");
                                        break;
                                    case "warning":
                                        g.addClass(j, "pulseWarning"), g.addClass(j.querySelector(".sa-body"), "pulseWarningIns"), g.addClass(j.querySelector(".sa-dot"), "pulseWarningIns");
                                        break;
                                    case "input":
                                    case "prompt":
                                        k.setAttribute("type", a.inputType), k.value = a.inputValue, k.setAttribute("placeholder", a.inputPlaceholder), g.addClass(b, "show-input"), setTimeout(function() {
                                            k.focus(), k.addEventListener("keyup", swal.resetInputError)
                                        }, 400)
                                }
                            }();
                            if ("object" == typeof m) return m.v
                        }
                        if (a.imageUrl) {
                            var n = b.querySelector(".sa-icon.sa-custom");
                            n.style.backgroundImage = "url(" + a.imageUrl + ")", g.show(n);
                            var o = 80,
                                p = 80;
                            if (a.imageSize) {
                                var q = a.imageSize.toString().split("x"),
                                    r = q[0],
                                    s = q[1];
                                r && s ? (o = r, p = s) : logStr("Parameter imageSize expects value with format WIDTHxHEIGHT, got " + a.imageSize)
                            }
                            n.setAttribute("style", n.getAttribute("style") + "width:" + o + "px; height:" + p + "px")
                        }
                        b.setAttribute("data-has-cancel-button", a.showCancelButton), a.showCancelButton ? j.style.display = "inline-block" : g.hide(j), b.setAttribute("data-has-confirm-button", a.showConfirmButton), a.showConfirmButton ? k.style.display = "inline-block" : g.hide(k), a.cancelButtonText && (j.innerHTML = g.escapeHtml(a.cancelButtonText)), a.confirmButtonText && (k.innerHTML = g.escapeHtml(a.confirmButtonText)), a.confirmButtonColor && (k.style.backgroundColor = a.confirmButtonColor, k.style.borderLeftColor = a.confirmLoadingButtonColor, k.style.borderRightColor = a.confirmLoadingButtonColor, f.setFocusStyle(k, a.confirmButtonColor)), b.setAttribute("data-allow-outside-click", a.allowOutsideClick);
                        var t = !!a.doneFunction;
                        b.setAttribute("data-has-done-function", t), a.animation ? "string" == typeof a.animation ? b.setAttribute("data-animation", a.animation) : b.setAttribute("data-animation", "pop") : b.setAttribute("data-animation", "none"), b.setAttribute("data-timer", a.timer)
                    };
                d.default = i, b.exports = d.default
            }, {
                "./handle-dom": 4,
                "./handle-swal-dom": 6,
                "./utils": 9
            }],
            9: [function(b, c, d) {
                Object.defineProperty(d, "__esModule", {
                    value: !0
                });
                var e = function(a, b) {
                        for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
                        return a
                    },
                    f = function(a) {
                        var b = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a);
                        return b ? parseInt(b[1], 16) + ", " + parseInt(b[2], 16) + ", " + parseInt(b[3], 16) : null
                    },
                    g = function() {
                        return a.attachEvent && !a.addEventListener
                    },
                    h = function(b) {
                        a.console && a.console.log("SweetAlert: " + b)
                    },
                    i = function(a, b) {
                        a = String(a).replace(/[^0-9a-f]/gi, ""), a.length < 6 && (a = a[0] + a[0] + a[1] + a[1] + a[2] + a[2]), b = b || 0;
                        var c, d, e = "#";
                        for (d = 0; 3 > d; d++) c = parseInt(a.substr(2 * d, 2), 16), c = Math.round(Math.min(Math.max(0, c + c * b), 255)).toString(16), e += ("00" + c).substr(c.length);
                        return e
                    };
                d.extend = e, d.hexToRgb = f, d.isIE8 = g, d.logStr = h, d.colorLuminance = i
            }, {}]
        }, {}, [1]), "function" == typeof define && define.amd ? define(function() {
            return sweetAlert
        }) : "undefined" != typeof module && module.exports && (module.exports = sweetAlert)
    }(window, document);