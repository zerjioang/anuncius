!function() {
  var method;
  /**
   * @return {undefined}
   */
  var noop = function() {
  };
  /** @type {Array} */
  var methods = ["assert", "clear", "count", "debug", "dir", "dirxml", "error", "exception", "group", "groupCollapsed", "groupEnd", "info", "log", "markTimeline", "profile", "profileEnd", "table", "time", "timeEnd", "timeline", "timelineEnd", "timeStamp", "trace", "warn"];
  /** @type {number} */
  var length = methods.length;
  /** @type {(Console|{})} */
  var console = window.console = window.console || {};
  for (;length--;) {
    method = methods[length];
    if (!console[method]) {
      /** @type {function (): undefined} */
      console[method] = noop;
    }
  }
}(), function($) {
  $.easing.jswing = $.easing.swing;
  $.extend($.easing, {
    def : "easeOutQuad",
    /**
     * @param {?} diff
     * @param {?} n
     * @param {?} p
     * @param {?} firstNum
     * @param {?} swing
     * @return {?}
     */
    swing : function(diff, n, p, firstNum, swing) {
      return $.easing[$.easing.def](diff, n, p, firstNum, swing);
    },
    /**
     * @param {?} t
     * @param {number} time
     * @param {number} beg
     * @param {number} diff
     * @param {number} dur
     * @return {?}
     */
    easeInQuad : function(t, time, beg, diff, dur) {
      return diff * (time /= dur) * time + beg;
    },
    /**
     * @param {?} x
     * @param {number} b
     * @param {number} t
     * @param {?} c
     * @param {number} d
     * @return {?}
     */
    easeOutQuad : function(x, b, t, c, d) {
      return-c * (b /= d) * (b - 2) + t;
    },
    /**
     * @param {?} x
     * @param {number} t
     * @param {number} b
     * @param {number} c
     * @param {number} d
     * @return {?}
     */
    easeInOutQuad : function(x, t, b, c, d) {
      return 1 > (t /= d / 2) ? c / 2 * t * t + b : -c / 2 * (--t * (t - 2) - 1) + b;
    },
    /**
     * @param {?} b
     * @param {number} time
     * @param {number} beg
     * @param {number} diff
     * @param {number} dur
     * @return {?}
     */
    easeInCubic : function(b, time, beg, diff, dur) {
      return diff * (time /= dur) * time * time + beg;
    },
    /**
     * @param {?} x
     * @param {number} t
     * @param {number} b
     * @param {number} c
     * @param {number} d
     * @return {?}
     */
    easeOutCubic : function(x, t, b, c, d) {
      return c * ((t = t / d - 1) * t * t + 1) + b;
    },
    /**
     * @param {?} b
     * @param {number} time
     * @param {number} beg
     * @param {number} diff
     * @param {number} dur
     * @return {?}
     */
    easeInOutCubic : function(b, time, beg, diff, dur) {
      return 1 > (time /= dur / 2) ? diff / 2 * time * time * time + beg : diff / 2 * ((time -= 2) * time * time + 2) + beg;
    },
    /**
     * @param {?} b
     * @param {number} time
     * @param {number} beg
     * @param {number} diff
     * @param {number} dur
     * @return {?}
     */
    easeInQuart : function(b, time, beg, diff, dur) {
      return diff * (time /= dur) * time * time * time + beg;
    },
    /**
     * @param {?} x
     * @param {number} t
     * @param {number} b
     * @param {?} c
     * @param {number} d
     * @return {?}
     */
    easeOutQuart : function(x, t, b, c, d) {
      return-c * ((t = t / d - 1) * t * t * t - 1) + b;
    },
    /**
     * @param {?} b
     * @param {number} time
     * @param {number} beg
     * @param {number} diff
     * @param {number} dur
     * @return {?}
     */
    easeInOutQuart : function(b, time, beg, diff, dur) {
      return 1 > (time /= dur / 2) ? diff / 2 * time * time * time * time + beg : -diff / 2 * ((time -= 2) * time * time * time - 2) + beg;
    },
    /**
     * @param {?} t
     * @param {number} time
     * @param {number} beg
     * @param {number} diff
     * @param {number} dur
     * @return {?}
     */
    easeInQuint : function(t, time, beg, diff, dur) {
      return diff * (time /= dur) * time * time * time * time + beg;
    },
    /**
     * @param {?} x
     * @param {number} t
     * @param {number} b
     * @param {number} c
     * @param {number} d
     * @return {?}
     */
    easeOutQuint : function(x, t, b, c, d) {
      return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
    },
    /**
     * @param {?} x
     * @param {number} t
     * @param {number} b
     * @param {number} c
     * @param {number} d
     * @return {?}
     */
    easeInOutQuint : function(x, t, b, c, d) {
      return 1 > (t /= d / 2) ? c / 2 * t * t * t * t * t + b : c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
    },
    /**
     * @param {?} t
     * @param {number} a
     * @param {?} c
     * @param {number} d
     * @param {number} b
     * @return {?}
     */
    easeInSine : function(t, a, c, d, b) {
      return-d * Math.cos(a / b * (Math.PI / 2)) + d + c;
    },
    /**
     * @param {?} t
     * @param {number} a
     * @param {number} beg
     * @param {number} diff
     * @param {number} b
     * @return {?}
     */
    easeOutSine : function(t, a, beg, diff, b) {
      return diff * Math.sin(a / b * (Math.PI / 2)) + beg;
    },
    /**
     * @param {?} b
     * @param {number} time
     * @param {number} c
     * @param {?} t
     * @param {number} dur
     * @return {?}
     */
    easeInOutSine : function(b, time, c, t, dur) {
      return-t / 2 * (Math.cos(Math.PI * time / dur) - 1) + c;
    },
    /**
     * @param {?} t
     * @param {number} time
     * @param {number} b
     * @param {number} c
     * @param {number} dur
     * @return {?}
     */
    easeInExpo : function(t, time, b, c, dur) {
      return 0 == time ? b : c * Math.pow(2, 10 * (time / dur - 1)) + b;
    },
    /**
     * @param {?} t
     * @param {number} time
     * @param {number} beg
     * @param {number} diff
     * @param {number} dur
     * @return {?}
     */
    easeOutExpo : function(t, time, beg, diff, dur) {
      return time == dur ? beg + diff : diff * (-Math.pow(2, -10 * time / dur) + 1) + beg;
    },
    /**
     * @param {?} t
     * @param {number} time
     * @param {number} beg
     * @param {number} diff
     * @param {number} dur
     * @return {?}
     */
    easeInOutExpo : function(t, time, beg, diff, dur) {
      return 0 == time ? beg : time == dur ? beg + diff : 1 > (time /= dur / 2) ? diff / 2 * Math.pow(2, 10 * (time - 1)) + beg : diff / 2 * (-Math.pow(2, -10 * --time) + 2) + beg;
    },
    /**
     * @param {?} pos
     * @param {number} t
     * @param {number} b
     * @param {?} x
     * @param {number} d
     * @return {?}
     */
    easeInCirc : function(pos, t, b, x, d) {
      return-x * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
    },
    /**
     * @param {?} x
     * @param {number} t
     * @param {number} b
     * @param {number} c
     * @param {number} d
     * @return {?}
     */
    easeOutCirc : function(x, t, b, c, d) {
      return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
    },
    /**
     * @param {?} x
     * @param {number} time
     * @param {number} b
     * @param {number} d
     * @param {number} dur
     * @return {?}
     */
    easeInOutCirc : function(x, time, b, d, dur) {
      return 1 > (time /= dur / 2) ? -d / 2 * (Math.sqrt(1 - time * time) - 1) + b : d / 2 * (Math.sqrt(1 - (time -= 2) * time) + 1) + b;
    },
    /**
     * @param {number} s
     * @param {number} t
     * @param {number} b
     * @param {number} c
     * @param {number} d
     * @return {?}
     */
    easeInElastic : function(s, t, b, c, d) {
      /** @type {number} */
      s = 1.70158;
      /** @type {number} */
      var p = 0;
      /** @type {number} */
      var a = c;
      return 0 == t ? b : 1 == (t /= d) ? b + c : (p || (p = 0.3 * d), a < Math.abs(c) ? (a = c, s = p / 4) : s = p / (2 * Math.PI) * Math.asin(c / a), -(a * Math.pow(2, 10 * --t) * Math.sin(2 * (t * d - s) * Math.PI / p)) + b);
    },
    /**
     * @param {number} s
     * @param {number} t
     * @param {number} beg
     * @param {number} diff
     * @param {number} d
     * @return {?}
     */
    easeOutElastic : function(s, t, beg, diff, d) {
      /** @type {number} */
      s = 1.70158;
      /** @type {number} */
      var p = 0;
      /** @type {number} */
      var a = diff;
      return 0 == t ? beg : 1 == (t /= d) ? beg + diff : (p || (p = 0.3 * d), a < Math.abs(diff) ? (a = diff, s = p / 4) : s = p / (2 * Math.PI) * Math.asin(diff / a), a * Math.pow(2, -10 * t) * Math.sin(2 * (t * d - s) * Math.PI / p) + diff + beg);
    },
    /**
     * @param {number} s
     * @param {number} t
     * @param {number} b
     * @param {number} c
     * @param {number} d
     * @return {?}
     */
    easeInOutElastic : function(s, t, b, c, d) {
      /** @type {number} */
      s = 1.70158;
      /** @type {number} */
      var p = 0;
      /** @type {number} */
      var a = c;
      return 0 == t ? b : 2 == (t /= d / 2) ? b + c : (p || (p = 0.3 * d * 1.5), a < Math.abs(c) ? (a = c, s = p / 4) : s = p / (2 * Math.PI) * Math.asin(c / a), 1 > t ? -0.5 * a * Math.pow(2, 10 * --t) * Math.sin(2 * (t * d - s) * Math.PI / p) + b : a * Math.pow(2, -10 * --t) * Math.sin(2 * (t * d - s) * Math.PI / p) * 0.5 + c + b);
    },
    /**
     * @param {?} b
     * @param {number} t
     * @param {number} x
     * @param {number} c
     * @param {number} d
     * @param {number} s
     * @return {?}
     */
    easeInBack : function(b, t, x, c, d, s) {
      return void 0 == s && (s = 1.70158), c * (t /= d) * t * ((s + 1) * t - s) + x;
    },
    /**
     * @param {?} x
     * @param {number} t
     * @param {number} b
     * @param {number} c
     * @param {number} d
     * @param {number} s
     * @return {?}
     */
    easeOutBack : function(x, t, b, c, d, s) {
      return void 0 == s && (s = 1.70158), c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
    },
    /**
     * @param {?} x
     * @param {number} t
     * @param {number} b
     * @param {number} c
     * @param {number} d
     * @param {number} s
     * @return {?}
     */
    easeInOutBack : function(x, t, b, c, d, s) {
      return void 0 == s && (s = 1.70158), 1 > (t /= d / 2) ? c / 2 * t * t * (((s *= 1.525) + 1) * t - s) + b : c / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b;
    },
    /**
     * @param {?} x
     * @param {number} d
     * @param {number} b
     * @param {number} c
     * @param {number} t
     * @return {?}
     */
    easeInBounce : function(x, d, b, c, t) {
      return c - $.easing.easeOutBounce(x, t - d, 0, c, t) + b;
    },
    /**
     * @param {?} v00
     * @param {number} t
     * @param {number} b
     * @param {number} c
     * @param {number} d
     * @return {?}
     */
    easeOutBounce : function(v00, t, b, c, d) {
      return(t /= d) < 1 / 2.75 ? 7.5625 * c * t * t + b : t < 2 / 2.75 ? c * (7.5625 * (t -= 1.5 / 2.75) * t + 0.75) + b : t < 2.5 / 2.75 ? c * (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375) + b : c * (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375) + b;
    },
    /**
     * @param {?} x
     * @param {number} t
     * @param {number} b
     * @param {number} c
     * @param {number} d
     * @return {?}
     */
    easeInOutBounce : function(x, t, b, c, d) {
      return t < d / 2 ? 0.5 * $.easing.easeInBounce(x, 2 * t, 0, c, d) + b : 0.5 * $.easing.easeOutBounce(x, 2 * t - d, 0, c, d) + 0.5 * c + b;
    }
  });
}(jQuery), !function(root, factory) {
  if ("function" == typeof define && define.amd) {
    define(["jquery"], function(jQuery) {
      return factory(root, jQuery);
    });
  } else {
    if ("object" == typeof exports) {
      factory(root, require("jquery"));
    } else {
      factory(root, root.jQuery || root.Zepto);
    }
  }
}(this, function(logger, $) {
  /**
   * @param {?} el
   * @return {?}
   */
  function css(el) {
    if (w && ("none" === el.css("animation-name") && ("none" === el.css("-webkit-animation-name") && ("none" === el.css("-moz-animation-name") && ("none" === el.css("-o-animation-name") && "none" === el.css("-ms-animation-name")))))) {
      return 0;
    }
    var maxY;
    var l;
    var y;
    var i;
    var components = el.css("animation-duration") || (el.css("-webkit-animation-duration") || (el.css("-moz-animation-duration") || (el.css("-o-animation-duration") || (el.css("-ms-animation-duration") || "0s"))));
    var values = el.css("animation-delay") || (el.css("-webkit-animation-delay") || (el.css("-moz-animation-delay") || (el.css("-o-animation-delay") || (el.css("-ms-animation-delay") || "0s"))));
    var strings = el.css("animation-iteration-count") || (el.css("-webkit-animation-iteration-count") || (el.css("-moz-animation-iteration-count") || (el.css("-o-animation-iteration-count") || (el.css("-ms-animation-iteration-count") || "1"))));
    components = components.split(", ");
    values = values.split(", ");
    strings = strings.split(", ");
    /** @type {number} */
    i = 0;
    l = components.length;
    /** @type {number} */
    maxY = Number.NEGATIVE_INFINITY;
    for (;l > i;i++) {
      /** @type {number} */
      y = parseFloat(components[i]) * parseInt(strings[i], 10) + parseFloat(values[i]);
      if (y > maxY) {
        /** @type {number} */
        maxY = y;
      }
    }
    return maxY;
  }
  /**
   * @return {?}
   */
  function init() {
    if ($(document.body).height() <= $(window).height()) {
      return 0;
    }
    var ret;
    var width;
    /** @type {Element} */
    var div = document.createElement("div");
    /** @type {Element} */
    var canvas = document.createElement("div");
    return div.style.visibility = "hidden", div.style.width = "100px", document.body.appendChild(div), ret = div.offsetWidth, div.style.overflow = "scroll", canvas.style.width = "100%", div.appendChild(canvas), width = canvas.offsetWidth, div.parentNode.removeChild(div), ret - width;
  }
  /**
   * @return {undefined}
   */
  function open() {
    if (!x) {
      var value;
      var element;
      var $html = $("html");
      var vvar = success("is-locked");
      if (!$html.hasClass(vvar)) {
        element = $(document.body);
        value = parseInt(element.css("padding-right"), 10) + init();
        element.css("padding-right", value + "px");
        $html.addClass(vvar);
      }
    }
  }
  /**
   * @return {undefined}
   */
  function complete() {
    if (!x) {
      var value;
      var element;
      var $html = $("html");
      var vvar = success("is-locked");
      if ($html.hasClass(vvar)) {
        element = $(document.body);
        /** @type {number} */
        value = parseInt(element.css("padding-right"), 10) - init();
        element.css("padding-right", value + "px");
        $html.removeClass(vvar);
      }
    }
  }
  /**
   * @param {Object} self
   * @param {string} status
   * @param {boolean} keepData
   * @param {string} x
   * @return {undefined}
   */
  function remove(self, status, keepData, x) {
    var optgroup = success("is", status);
    /** @type {string} */
    var rvar = [success("is", session.CLOSING), success("is", session.OPENING), success("is", session.CLOSED), success("is", session.OPENED)].join(" ");
    self.$bg.removeClass(rvar).addClass(optgroup);
    self.$overlay.removeClass(rvar).addClass(optgroup);
    self.$wrapper.removeClass(rvar).addClass(optgroup);
    self.$modal.removeClass(rvar).addClass(optgroup);
    /** @type {string} */
    self.state = status;
    if (!keepData) {
      self.$modal.trigger({
        type : status,
        reason : x
      }, [{
        reason : x
      }]);
    }
  }
  /**
   * @param {Function} listener
   * @param {Function} fn
   * @param {Array} self
   * @return {undefined}
   */
  function on(listener, fn, self) {
    /** @type {number} */
    var f = 0;
    /**
     * @param {Event} ev
     * @return {undefined}
     */
    var callback = function(ev) {
      if (ev.target === this) {
        f++;
      }
    };
    /**
     * @param {Event} event
     * @return {undefined}
     */
    var on = function(event) {
      if (event.target === this) {
        if (0 === --f) {
          $.each(["$bg", "$overlay", "$wrapper", "$modal"], function(dataAndEvents, id) {
            self[id].off(EVENT_READY + " " + cycle);
          });
          fn();
        }
      }
    };
    $.each(["$bg", "$overlay", "$wrapper", "$modal"], function(dataAndEvents, key_map_name) {
      self[key_map_name].on(EVENT_READY, callback).on(cycle, on);
    });
    listener();
    if (0 === css(self.$bg)) {
      if (0 === css(self.$overlay)) {
        if (0 === css(self.$wrapper)) {
          if (0 === css(self.$modal)) {
            $.each(["$bg", "$overlay", "$wrapper", "$modal"], function(dataAndEvents, id) {
              self[id].off(EVENT_READY + " " + cycle);
            });
            fn();
          }
        }
      }
    }
  }
  /**
   * @param {Object} self
   * @return {undefined}
   */
  function callback(self) {
    if (self.state !== session.CLOSED) {
      $.each(["$bg", "$overlay", "$wrapper", "$modal"], function(dataAndEvents, id) {
        self[id].off(EVENT_READY + " " + cycle);
      });
      self.$bg.removeClass(self.settings.modifier);
      self.$overlay.removeClass(self.settings.modifier).hide();
      self.$wrapper.hide();
      complete();
      remove(self, session.CLOSED, true);
    }
  }
  /**
   * @param {string} val
   * @return {?}
   */
  function normalizeValue(val) {
    var rawParams;
    var len;
    var value;
    var i;
    var flags = {};
    val = val.replace(/\s*:\s*/g, ":").replace(/\s*,\s*/g, ",");
    rawParams = val.split(",");
    /** @type {number} */
    i = 0;
    len = rawParams.length;
    for (;len > i;i++) {
      rawParams[i] = rawParams[i].split(":");
      value = rawParams[i][1];
      if ("string" == typeof value || value instanceof String) {
        /** @type {(String|boolean|string)} */
        value = "true" === value || "false" !== value && value;
      }
      if ("string" == typeof value || value instanceof String) {
        /** @type {(String|number|string)} */
        value = isNaN(value) ? value : +value;
      }
      flags[rawParams[i][0]] = value;
    }
    return flags;
  }
  /**
   * @return {?}
   */
  function success() {
    var response = type;
    /** @type {number} */
    var i = 0;
    for (;i < arguments.length;++i) {
      response += "-" + arguments[i];
    }
    return response;
  }
  /**
   * @return {undefined}
   */
  function load() {
    var db;
    var frame;
    /** @type {string} */
    var req = location.hash.replace("#", "");
    if (req) {
      try {
        frame = $("[data-" + name + '-id="' + req + '"]');
      } catch (a) {
      }
      if (frame) {
        if (frame.length) {
          db = $[name].lookup[frame.data(name)];
          if (db) {
            if (db.settings.hashTracking) {
              db.open();
            }
          }
        }
      }
    } else {
      if (v) {
        if (v.state === session.OPENED) {
          if (v.settings.hashTracking) {
            v.close();
          }
        }
      }
    }
  }
  /**
   * @param {Node} title
   * @param {?} options
   * @return {undefined}
   */
  function create(title, options) {
    var $d = $(document.body);
    var self = this;
    self.settings = $.extend({}, attributes, options);
    /** @type {number} */
    self.index = $[name].lookup.push(self) - 1;
    /** @type {string} */
    self.state = session.CLOSED;
    self.$overlay = $("." + success("overlay"));
    if (!self.$overlay.length) {
      self.$overlay = $("<div>").addClass(success("overlay") + " " + success("is", session.CLOSED)).hide();
      $d.append(self.$overlay);
    }
    self.$bg = $("." + success("bg")).addClass(success("is", session.CLOSED));
    self.$modal = title.addClass(type + " " + success("is-initialized") + " " + self.settings.modifier + " " + success("is", session.CLOSED)).attr("tabindex", "-1");
    self.$wrapper = $("<div>").addClass(success("wrapper") + " " + self.settings.modifier + " " + success("is", session.CLOSED)).hide().append(self.$modal);
    $d.append(self.$wrapper);
    self.$wrapper.on("click." + type, "[data-" + name + '-action="close"]', function(types) {
      types.preventDefault();
      self.close();
    });
    self.$wrapper.on("click." + type, "[data-" + name + '-action="cancel"]', function(types) {
      types.preventDefault();
      self.$modal.trigger(args.CANCELLATION);
      if (self.settings.closeOnCancel) {
        self.close(args.CANCELLATION);
      }
    });
    self.$wrapper.on("click." + type, "[data-" + name + '-action="confirm"]', function(types) {
      types.preventDefault();
      self.$modal.trigger(args.CONFIRMATION);
      if (self.settings.closeOnConfirm) {
        self.close(args.CONFIRMATION);
      }
    });
    self.$wrapper.on("click." + type, function(ev) {
      var actual = $(ev.target);
      if (actual.hasClass(success("wrapper"))) {
        if (self.settings.closeOnOutsideClick) {
          self.close();
        }
      }
    });
  }
  var v;
  var lab;
  /** @type {string} */
  var name = "remodal";
  var type = logger.REMODAL_GLOBALS && logger.REMODAL_GLOBALS.NAMESPACE || name;
  var EVENT_READY = $.map(["animationstart", "webkitAnimationStart", "MSAnimationStart", "oAnimationStart"], function(dbID) {
    return dbID + "." + type;
  }).join(" ");
  var cycle = $.map(["animationend", "webkitAnimationEnd", "MSAnimationEnd", "oAnimationEnd"], function(dbID) {
    return dbID + "." + type;
  }).join(" ");
  var attributes = $.extend({
    hashTracking : true,
    closeOnConfirm : true,
    closeOnCancel : true,
    closeOnEscape : true,
    closeOnOutsideClick : true,
    modifier : ""
  }, logger.REMODAL_GLOBALS && logger.REMODAL_GLOBALS.DEFAULTS);
  var session = {
    CLOSING : "closing",
    CLOSED : "closed",
    OPENING : "opening",
    OPENED : "opened"
  };
  var args = {
    CONFIRMATION : "confirmation",
    CANCELLATION : "cancellation"
  };
  var w = function() {
    /** @type {(CSSStyleDeclaration|null)} */
    var style = document.createElement("div").style;
    return void 0 !== style.animationName || (void 0 !== style.WebkitAnimationName || (void 0 !== style.MozAnimationName || (void 0 !== style.msAnimationName || void 0 !== style.OAnimationName)));
  }();
  /** @type {boolean} */
  var x = /iPad|iPhone|iPod/.test(navigator.platform);
  /**
   * @return {undefined}
   */
  create.prototype.open = function() {
    var endpoint;
    var self = this;
    if (self.state !== session.OPENING) {
      if (self.state !== session.CLOSING) {
        endpoint = self.$modal.attr("data-" + name + "-id");
        if (endpoint) {
          if (self.settings.hashTracking) {
            lab = $(window).scrollTop();
            location.hash = endpoint;
          }
        }
        if (v) {
          if (v !== self) {
            callback(v);
          }
        }
        v = self;
        open();
        self.$bg.addClass(self.settings.modifier);
        self.$overlay.addClass(self.settings.modifier).show();
        self.$wrapper.show().scrollTop(0);
        self.$modal.focus();
        on(function() {
          remove(self, session.OPENING);
        }, function() {
          remove(self, session.OPENED);
        }, self);
      }
    }
  };
  /**
   * @param {string} selector
   * @return {undefined}
   */
  create.prototype.close = function(selector) {
    var self = this;
    if (self.state !== session.OPENING) {
      if (self.state !== session.CLOSING) {
        if (self.settings.hashTracking) {
          if (self.$modal.attr("data-" + name + "-id") === location.hash.substr(1)) {
            /** @type {string} */
            location.hash = "";
            $(window).scrollTop(lab);
          }
        }
        on(function() {
          remove(self, session.CLOSING, false, selector);
        }, function() {
          self.$bg.removeClass(self.settings.modifier);
          self.$overlay.removeClass(self.settings.modifier).hide();
          self.$wrapper.hide();
          complete();
          remove(self, session.CLOSED, false, selector);
        }, self);
      }
    }
  };
  /**
   * @return {?}
   */
  create.prototype.getState = function() {
    return this.state;
  };
  /**
   * @return {undefined}
   */
  create.prototype.destroy = function() {
    var valsLength;
    var elements = $[name].lookup;
    callback(this);
    this.$wrapper.remove();
    delete elements[this.index];
    valsLength = $.grep(elements, function(dataAndEvents) {
      return!!dataAndEvents;
    }).length;
    if (0 === valsLength) {
      this.$overlay.remove();
      this.$bg.removeClass(success("is", session.CLOSING) + " " + success("is", session.OPENING) + " " + success("is", session.CLOSED) + " " + success("is", session.OPENED));
    }
  };
  $[name] = {
    lookup : []
  };
  /**
   * @param {EventTarget} dataAndEvents
   * @return {?}
   */
  $.fn[name] = function(dataAndEvents) {
    var options;
    var data;
    return this.each(function(deepDataAndEvents, elem) {
      data = $(elem);
      if (null == data.data(name)) {
        options = new create(data, dataAndEvents);
        data.data(name, options.index);
        if (options.settings.hashTracking) {
          if (data.attr("data-" + name + "-id") === location.hash.substr(1)) {
            options.open();
          }
        }
      } else {
        options = $[name].lookup[data.data(name)];
      }
    }), options;
  };
  $(document).ready(function() {
    $(document).on("click", "[data-" + name + "-target]", function(event) {
      event.preventDefault();
      var parent = event.currentTarget;
      var d = parent.getAttribute("data-" + name + "-target");
      var elem = $("[data-" + name + '-id="' + d + '"]');
      $[name].lookup[elem.data(name)].open();
    });
    $(document).find("." + type).each(function(dataAndEvents, el) {
      var $el = $(el);
      var val = $el.data(name + "-options");
      if (val) {
        if ("string" == typeof val || val instanceof String) {
          val = normalizeValue(val);
        }
      } else {
        val = {};
      }
      $el[name](val);
    });
    $(document).on("keydown." + type, function(event) {
      if (v) {
        if (v.settings.closeOnEscape) {
          if (v.state === session.OPENED) {
            if (27 === event.keyCode) {
              v.close();
            }
          }
        }
      }
    });
    $(window).on("hashchange." + type, load);
  });
}), function(win) {
  /**
   * @return {undefined}
   */
  function to() {
  }
  /**
   * @param {Object} $
   * @return {?}
   */
  function defineBridget($) {
    /**
     * @param {Function} PluginClass
     * @return {undefined}
     */
    function addOptionMethod(PluginClass) {
      if (!PluginClass.prototype.option) {
        /**
         * @param {Object} name
         * @return {undefined}
         */
        PluginClass.prototype.option = function(name) {
          if ($.isPlainObject(name)) {
            this.options = $.extend(true, this.options, name);
          }
        };
      }
    }
    /**
     * @param {string} key
     * @param {Function} PluginClass
     * @return {undefined}
     */
    function bridge(key, PluginClass) {
      /**
       * @param {string} name
       * @return {?}
       */
      $.fn[key] = function(name) {
        if ("string" == typeof name) {
          /** @type {Array.<?>} */
          var args = __slice.call(arguments, 1);
          /** @type {number} */
          var last = 0;
          var index = this.length;
          for (;index > last;last++) {
            var elem = this[last];
            var parent = $.data(elem, key);
            if (parent) {
              if ($.isFunction(parent[name]) && "_" !== name.charAt(0)) {
                var result = parent[name].apply(parent, args);
                if (void 0 !== result) {
                  return result;
                }
              } else {
                throttledUpdate("no such method '" + name + "' for " + key + " instance");
              }
            } else {
              throttledUpdate("cannot call methods on " + key + " prior to initialization; attempted to call '" + name + "'");
            }
          }
          return this;
        }
        return this.each(function() {
          var item = $.data(this, key);
          if (item) {
            item.option(name);
            item._init();
          } else {
            item = new PluginClass(this, name);
            $.data(this, key, item);
          }
        });
      };
    }
    if ($) {
      /** @type {Function} */
      var throttledUpdate = "undefined" == typeof console ? to : function(fmt) {
        console.error(fmt);
      };
      return $.bridget = function(type, PluginClass) {
        addOptionMethod(PluginClass);
        bridge(type, PluginClass);
      }, $.bridget;
    }
  }
  /** @type {function (this:(Array.<T>|string|{length: number}), *=, *=): Array.<T>} */
  var __slice = Array.prototype.slice;
  if ("function" == typeof define && define.amd) {
    define("jquery-bridget/jquery.bridget", ["jquery"], defineBridget);
  } else {
    defineBridget("object" == typeof exports ? require("jquery") : win.jQuery);
  }
}(window), function($) {
  /**
   * @param {?} target
   * @return {?}
   */
  function func(target) {
    var event = $.event;
    return event.target = event.target || (event.srcElement || target), event;
  }
  /** @type {Element} */
  var docElem = document.documentElement;
  /**
   * @return {undefined}
   */
  var bind = function() {
  };
  if (docElem.addEventListener) {
    /**
     * @param {?} type
     * @param {string} name
     * @param {Function} init
     * @return {undefined}
     */
    bind = function(type, name, init) {
      type.addEventListener(name, init, false);
    };
  } else {
    if (docElem.attachEvent) {
      /**
       * @param {?} obj
       * @param {string} type
       * @param {Function} fn
       * @return {undefined}
       */
      bind = function(obj, type, fn) {
        /** @type {function (): undefined} */
        obj[type + fn] = fn.handleEvent ? function() {
          var actual = func(obj);
          fn.handleEvent.call(fn, actual);
        } : function() {
          var val = func(obj);
          fn.call(obj, val);
        };
        obj.attachEvent("on" + type, obj[type + fn]);
      };
    }
  }
  /**
   * @return {undefined}
   */
  var unbind = function() {
  };
  if (docElem.removeEventListener) {
    /**
     * @param {?} target
     * @param {string} eventType
     * @param {?} callback
     * @return {undefined}
     */
    unbind = function(target, eventType, callback) {
      target.removeEventListener(eventType, callback, false);
    };
  } else {
    if (docElem.detachEvent) {
      /**
       * @param {string} obj
       * @param {string} type
       * @param {string} fn
       * @return {undefined}
       */
      unbind = function(obj, type, fn) {
        obj.detachEvent("on" + type, obj[type + fn]);
        try {
          delete obj[type + fn];
        } catch (d) {
          obj[type + fn] = void 0;
        }
      };
    }
  }
  var eventie = {
    /** @type {function (): undefined} */
    bind : bind,
    /** @type {function (): undefined} */
    unbind : unbind
  };
  if ("function" == typeof define && define.amd) {
    define("eventie/eventie", eventie);
  } else {
    if ("object" == typeof exports) {
      module.exports = eventie;
    } else {
      $.eventie = eventie;
    }
  }
}(window), function() {
  /**
   * @return {undefined}
   */
  function EventEmitter() {
  }
  /**
   * @param {Array} listeners
   * @param {Object} listener
   * @return {?}
   */
  function indexOfListener(listeners, listener) {
    var i = listeners.length;
    for (;i--;) {
      if (listeners[i].listener === listener) {
        return i;
      }
    }
    return-1;
  }
  /**
   * @param {string} name
   * @return {?}
   */
  function alias(name) {
    return function() {
      return this[name].apply(this, arguments);
    };
  }
  var proto = EventEmitter.prototype;
  var exports = this;
  var originalGlobalValue = exports.EventEmitter;
  /**
   * @param {(RegExp|string)} evt
   * @return {?}
   */
  proto.getListeners = function(evt) {
    var response;
    var key;
    var events = this._getEvents();
    if (evt instanceof RegExp) {
      response = {};
      for (key in events) {
        if (events.hasOwnProperty(key)) {
          if (evt.test(key)) {
            response[key] = events[key];
          }
        }
      }
    } else {
      response = events[evt] || (events[evt] = []);
    }
    return response;
  };
  /**
   * @param {Array} listeners
   * @return {?}
   */
  proto.flattenListeners = function(listeners) {
    var i;
    /** @type {Array} */
    var flatListeners = [];
    /** @type {number} */
    i = 0;
    for (;listeners.length > i;i += 1) {
      flatListeners.push(listeners[i].listener);
    }
    return flatListeners;
  };
  /**
   * @param {string} evt
   * @return {?}
   */
  proto.getListenersAsObject = function(evt) {
    var response;
    var listeners = this.getListeners(evt);
    return listeners instanceof Array && (response = {}, response[evt] = listeners), response || listeners;
  };
  /**
   * @param {string} evt
   * @param {Object} listener
   * @return {?}
   */
  proto.addListener = function(evt, listener) {
    var key;
    var listeners = this.getListenersAsObject(evt);
    /** @type {boolean} */
    var listenerIsWrapped = "object" == typeof listener;
    for (key in listeners) {
      if (listeners.hasOwnProperty(key)) {
        if (-1 === indexOfListener(listeners[key], listener)) {
          listeners[key].push(listenerIsWrapped ? listener : {
            listener : listener,
            once : false
          });
        }
      }
    }
    return this;
  };
  proto.on = alias("addListener");
  /**
   * @param {string} evt
   * @param {string} listener
   * @return {?}
   */
  proto.addOnceListener = function(evt, listener) {
    return this.addListener(evt, {
      listener : listener,
      once : true
    });
  };
  proto.once = alias("addOnceListener");
  /**
   * @param {(Node|string)} evt
   * @return {?}
   */
  proto.defineEvent = function(evt) {
    return this.getListeners(evt), this;
  };
  /**
   * @param {Array} evts
   * @return {?}
   */
  proto.defineEvents = function(evts) {
    /** @type {number} */
    var i = 0;
    for (;evts.length > i;i += 1) {
      this.defineEvent(evts[i]);
    }
    return this;
  };
  /**
   * @param {string} evt
   * @param {?} listener
   * @return {?}
   */
  proto.removeListener = function(evt, listener) {
    var index;
    var key;
    var listeners = this.getListenersAsObject(evt);
    for (key in listeners) {
      if (listeners.hasOwnProperty(key)) {
        index = indexOfListener(listeners[key], listener);
        if (-1 !== index) {
          listeners[key].splice(index, 1);
        }
      }
    }
    return this;
  };
  proto.off = alias("removeListener");
  /**
   * @param {Object} walkers
   * @param {Object} listeners
   * @return {?}
   */
  proto.addListeners = function(walkers, listeners) {
    return this.manipulateListeners(false, walkers, listeners);
  };
  /**
   * @param {Object} walkers
   * @param {Object} listeners
   * @return {?}
   */
  proto.removeListeners = function(walkers, listeners) {
    return this.manipulateListeners(true, walkers, listeners);
  };
  /**
   * @param {boolean} remove
   * @param {Array} obj
   * @param {Array} listeners
   * @return {?}
   */
  proto.manipulateListeners = function(remove, obj, listeners) {
    var i;
    var value;
    var single = remove ? this.removeListener : this.addListener;
    var multiple = remove ? this.removeListeners : this.addListeners;
    if ("object" != typeof obj || obj instanceof RegExp) {
      i = listeners.length;
      for (;i--;) {
        single.call(this, obj, listeners[i]);
      }
    } else {
      for (i in obj) {
        if (obj.hasOwnProperty(i)) {
          if (value = obj[i]) {
            if ("function" == typeof value) {
              single.call(this, i, value);
            } else {
              multiple.call(this, i, value);
            }
          }
        }
      }
    }
    return this;
  };
  /**
   * @param {Object} evt
   * @return {?}
   */
  proto.removeEvent = function(evt) {
    var key;
    /** @type {string} */
    var type = typeof evt;
    var events = this._getEvents();
    if ("string" === type) {
      delete events[evt];
    } else {
      if (evt instanceof RegExp) {
        for (key in events) {
          if (events.hasOwnProperty(key)) {
            if (evt.test(key)) {
              delete events[key];
            }
          }
        }
      } else {
        delete this._events;
      }
    }
    return this;
  };
  proto.removeAllListeners = alias("removeEvent");
  /**
   * @param {string} evt
   * @param {Array} args
   * @return {?}
   */
  proto.emitEvent = function(evt, args) {
    var listener;
    var i;
    var fileName;
    var response;
    var files = this.getListenersAsObject(evt);
    for (fileName in files) {
      if (files.hasOwnProperty(fileName)) {
        i = files[fileName].length;
        for (;i--;) {
          listener = files[fileName][i];
          if (listener.once === true) {
            this.removeListener(evt, listener.listener);
          }
          response = listener.listener.apply(this, args || []);
          if (response === this._getOnceReturnValue()) {
            this.removeListener(evt, listener.listener);
          }
        }
      }
    }
    return this;
  };
  proto.trigger = alias("emitEvent");
  /**
   * @param {string} method
   * @return {?}
   */
  proto.emit = function(method) {
    /** @type {Array.<?>} */
    var args = Array.prototype.slice.call(arguments, 1);
    return this.emitEvent(method, args);
  };
  /**
   * @param {?} value
   * @return {?}
   */
  proto.setOnceReturnValue = function(value) {
    return this._onceReturnValue = value, this;
  };
  /**
   * @return {?}
   */
  proto._getOnceReturnValue = function() {
    return!this.hasOwnProperty("_onceReturnValue") || this._onceReturnValue;
  };
  /**
   * @return {?}
   */
  proto._getEvents = function() {
    return this._events || (this._events = {});
  };
  /**
   * @return {?}
   */
  EventEmitter.noConflict = function() {
    return exports.EventEmitter = originalGlobalValue, EventEmitter;
  };
  if ("function" == typeof define && define.amd) {
    define("eventEmitter/EventEmitter", [], function() {
      return EventEmitter;
    });
  } else {
    if ("object" == typeof module && module.exports) {
      /** @type {function (): undefined} */
      module.exports = EventEmitter;
    } else {
      /** @type {function (): undefined} */
      exports.EventEmitter = EventEmitter;
    }
  }
}.call(this), function($) {
  /**
   * @param {Object} lab
   * @return {?}
   */
  function render(lab) {
    if (lab) {
      if ("string" == typeof style[lab]) {
        return lab;
      }
      lab = lab.charAt(0).toUpperCase() + lab.slice(1);
      var layout;
      /** @type {number} */
      var i = 0;
      /** @type {number} */
      var l = employees.length;
      for (;l > i;i++) {
        if (layout = employees[i] + lab, "string" == typeof style[layout]) {
          return layout;
        }
      }
    }
  }
  /** @type {Array.<string>} */
  var employees = "Webkit Moz ms Ms O".split(" ");
  /** @type {(CSSStyleDeclaration|null)} */
  var style = document.documentElement.style;
  if ("function" == typeof define && define.amd) {
    define("get-style-property/get-style-property", [], function() {
      return render;
    });
  } else {
    if ("object" == typeof exports) {
      /** @type {function (Object): ?} */
      module.exports = render;
    } else {
      /** @type {function (Object): ?} */
      $.getStyleProperty = render;
    }
  }
}(window), function(win) {
  /**
   * @param {string} value
   * @return {?}
   */
  function getStyleSize(value) {
    /** @type {number} */
    var d = parseFloat(value);
    /** @type {boolean} */
    var k = -1 === value.indexOf("%") && !isNaN(d);
    return k && d;
  }
  /**
   * @return {undefined}
   */
  function to() {
  }
  /**
   * @return {?}
   */
  function getZeroSize() {
    var size = {
      width : 0,
      height : 0,
      innerWidth : 0,
      innerHeight : 0,
      outerWidth : 0,
      outerHeight : 0
    };
    /** @type {number} */
    var i = 0;
    /** @type {number} */
    var len = measurements.length;
    for (;len > i;i++) {
      var measurement = measurements[i];
      /** @type {number} */
      size[measurement] = 0;
    }
    return size;
  }
  /**
   * @param {?} getStyleProperty
   * @return {?}
   */
  function defineGetSize(getStyleProperty) {
    /**
     * @return {undefined}
     */
    function init() {
      if (!m) {
        /** @type {boolean} */
        m = true;
        /** @type {function (this:Window, (Element|null), (null|string)=): (CSSStyleDeclaration|null)} */
        var gCS = win.getComputedStyle;
        if (getStyle = function() {
          /** @type {function (?): ?} */
          var make = gCS ? function(node) {
            return gCS(node, null);
          } : function(node) {
            return node.currentStyle;
          };
          return function(func) {
            var f = make(func);
            return f || throttledUpdate("Style returned " + f + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), f;
          };
        }(), boxSizingProp = getStyleProperty("boxSizing")) {
          /** @type {Element} */
          var div = document.createElement("div");
          /** @type {string} */
          div.style.width = "200px";
          /** @type {string} */
          div.style.padding = "1px 2px 3px 4px";
          /** @type {string} */
          div.style.borderStyle = "solid";
          /** @type {string} */
          div.style.borderWidth = "1px 2px 3px 4px";
          /** @type {string} */
          div.style[boxSizingProp] = "border-box";
          /** @type {Element} */
          var fakeBody = document.body || document.documentElement;
          fakeBody.appendChild(div);
          var style = getStyle(div);
          /** @type {boolean} */
          isBoxSizeOuter = 200 === getStyleSize(style.width);
          fakeBody.removeChild(div);
        }
      }
    }
    /**
     * @param {?} elem
     * @return {?}
     */
    function getSize(elem) {
      if (init(), "string" == typeof elem && (elem = document.querySelector(elem)), elem && ("object" == typeof elem && elem.nodeType)) {
        var style = getStyle(elem);
        if ("none" === style.display) {
          return getZeroSize();
        }
        var size = {};
        size.width = elem.offsetWidth;
        size.height = elem.offsetHeight;
        /** @type {boolean} */
        var isBorderBox = size.isBorderBox = !(!boxSizingProp || (!style[boxSizingProp] || "border-box" !== style[boxSizingProp]));
        /** @type {number} */
        var i = 0;
        /** @type {number} */
        var len = measurements.length;
        for (;len > i;i++) {
          var measurement = measurements[i];
          var value = style[measurement];
          value = mungeNonPixel(elem, value);
          /** @type {number} */
          var key = parseFloat(value);
          /** @type {number} */
          size[measurement] = isNaN(key) ? 0 : key;
        }
        var paddingWidth = size.paddingLeft + size.paddingRight;
        var paddingHeight = size.paddingTop + size.paddingBottom;
        var marginWidth = size.marginLeft + size.marginRight;
        var marginHeight = size.marginTop + size.marginBottom;
        var borderWidth = size.borderLeftWidth + size.borderRightWidth;
        var borderHeight = size.borderTopWidth + size.borderBottomWidth;
        var isBorderBoxSizeOuter = isBorderBox && isBoxSizeOuter;
        var styleWidth = getStyleSize(style.width);
        if (styleWidth !== false) {
          size.width = styleWidth + (isBorderBoxSizeOuter ? 0 : paddingWidth + borderWidth);
        }
        var styleHeight = getStyleSize(style.height);
        return styleHeight !== false && (size.height = styleHeight + (isBorderBoxSizeOuter ? 0 : paddingHeight + borderHeight)), size.innerWidth = size.width - (paddingWidth + borderWidth), size.innerHeight = size.height - (paddingHeight + borderHeight), size.outerWidth = size.width + marginWidth, size.outerHeight = size.height + marginHeight, size;
      }
    }
    /**
     * @param {Element} elem
     * @param {Object} value
     * @return {?}
     */
    function mungeNonPixel(elem, value) {
      if (win.getComputedStyle || -1 === value.indexOf("%")) {
        return value;
      }
      var style = elem.style;
      var left = style.left;
      var rs = elem.runtimeStyle;
      var rsLeft = rs && rs.left;
      return rsLeft && (rs.left = elem.currentStyle.left), style.left = value, value = style.pixelLeft, style.left = left, rsLeft && (rs.left = rsLeft), value;
    }
    var getStyle;
    var boxSizingProp;
    var isBoxSizeOuter;
    /** @type {boolean} */
    var m = false;
    return getSize;
  }
  /** @type {Function} */
  var throttledUpdate = "undefined" == typeof console ? to : function(fmt) {
    console.error(fmt);
  };
  /** @type {Array} */
  var measurements = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
  if ("function" == typeof define && define.amd) {
    define("get-size/get-size", ["get-style-property/get-style-property"], defineGetSize);
  } else {
    if ("object" == typeof exports) {
      module.exports = defineGetSize(require("desandro-get-style-property"));
    } else {
      win.getSize = defineGetSize(win.getStyleProperty);
    }
  }
}(window), function(type) {
  /**
   * @param {?} callback
   * @return {undefined}
   */
  function $(callback) {
    if ("function" == typeof callback) {
      if ($.isReady) {
        callback();
      } else {
        a.push(callback);
      }
    }
  }
  /**
   * @param {Event} src
   * @return {undefined}
   */
  function init(src) {
    /** @type {boolean} */
    var c = "readystatechange" === src.type && "complete" !== selector.readyState;
    if (!$.isReady) {
      if (!c) {
        flush();
      }
    }
  }
  /**
   * @return {undefined}
   */
  function flush() {
    /** @type {boolean} */
    $.isReady = true;
    /** @type {number} */
    var idx = 0;
    /** @type {number} */
    var al = a.length;
    for (;al > idx;idx++) {
      var next = a[idx];
      next();
    }
  }
  /**
   * @param {Function} eventie
   * @return {?}
   */
  function fn(eventie) {
    return "complete" === selector.readyState ? flush() : (eventie.bind(selector, "DOMContentLoaded", init), eventie.bind(selector, "readystatechange", init), eventie.bind(type, "load", init)), $;
  }
  /** @type {Document} */
  var selector = type.document;
  /** @type {Array} */
  var a = [];
  /** @type {boolean} */
  $.isReady = false;
  if ("function" == typeof define && define.amd) {
    define("doc-ready/doc-ready", ["eventie/eventie"], fn);
  } else {
    if ("object" == typeof exports) {
      module.exports = fn(require("eventie"));
    } else {
      type.docReady = fn(type.eventie);
    }
  }
}(window), function(Selector) {
  /**
   * @param {Object} lab
   * @param {string} target
   * @return {?}
   */
  function matches(lab, target) {
    return lab[hook](target);
  }
  /**
   * @param {Object} label
   * @return {undefined}
   */
  function add(label) {
    if (!label.parentNode) {
      /** @type {DocumentFragment} */
      var button = document.createDocumentFragment();
      button.appendChild(label);
    }
  }
  /**
   * @param {Object} lab
   * @param {string} target
   * @return {?}
   */
  function initialize(lab, target) {
    add(lab);
    var targets = lab.parentNode.querySelectorAll(target);
    /** @type {number} */
    var dev = 0;
    var numTargets = targets.length;
    for (;numTargets > dev;dev++) {
      if (targets[dev] === lab) {
        return true;
      }
    }
    return false;
  }
  /**
   * @param {Object} lab
   * @param {string} $target
   * @return {?}
   */
  function hide(lab, $target) {
    return add(lab), matches(lab, $target);
  }
  var DOMBuilder;
  var hook = function() {
    if (Selector.matches) {
      return "matches";
    }
    if (Selector.matchesSelector) {
      return "matchesSelector";
    }
    /** @type {Array} */
    var vendors = ["webkit", "moz", "ms", "o"];
    /** @type {number} */
    var i = 0;
    /** @type {number} */
    var l = vendors.length;
    for (;l > i;i++) {
      var v = vendors[i];
      /** @type {string} */
      var vendorProp = v + "MatchesSelector";
      if (Selector[vendorProp]) {
        return vendorProp;
      }
    }
  }();
  if (hook) {
    /** @type {Element} */
    var lab = document.createElement("div");
    var result = matches(lab, "div");
    /** @type {function (Object, string): ?} */
    DOMBuilder = result ? matches : hide;
  } else {
    /** @type {function (Object, string): ?} */
    DOMBuilder = initialize;
  }
  if ("function" == typeof define && define.amd) {
    define("matches-selector/matches-selector", [], function() {
      return DOMBuilder;
    });
  } else {
    if ("object" == typeof exports) {
      /** @type {function (Object, string): ?} */
      module.exports = DOMBuilder;
    } else {
      /** @type {function (Object, string): ?} */
      window.matchesSelector = DOMBuilder;
    }
  }
}(Element.prototype), function(root, factory) {
  if ("function" == typeof define && define.amd) {
    define("fizzy-ui-utils/utils", ["doc-ready/doc-ready", "matches-selector/matches-selector"], function(until, end) {
      return factory(root, until, end);
    });
  } else {
    if ("object" == typeof exports) {
      module.exports = factory(root, require("doc-ready"), require("desandro-matches-selector"));
    } else {
      root.fizzyUIUtils = factory(root, root.docReady, root.matchesSelector);
    }
  }
}(window, function(global, until, test) {
  var node = {};
  /**
   * @param {?} expectedNumberOfNonCommentArgs
   * @param {?} opt_attributes
   * @return {?}
   */
  node.extend = function(expectedNumberOfNonCommentArgs, opt_attributes) {
    var currentParam;
    for (currentParam in opt_attributes) {
      expectedNumberOfNonCommentArgs[currentParam] = opt_attributes[currentParam];
    }
    return expectedNumberOfNonCommentArgs;
  };
  /**
   * @param {number} a
   * @param {number} b
   * @return {?}
   */
  node.modulo = function(a, b) {
    return(a % b + b) % b;
  };
  /** @type {function (this:*): string} */
  var ostring = Object.prototype.toString;
  /**
   * @param {?} o
   * @return {?}
   */
  node.isArray = function(o) {
    return "[object Array]" == ostring.call(o);
  };
  /**
   * @param {Object} obj
   * @return {?}
   */
  node.makeArray = function(obj) {
    /** @type {Array} */
    var ary = [];
    if (node.isArray(obj)) {
      /** @type {Object} */
      ary = obj;
    } else {
      if (obj && "number" == typeof obj.length) {
        /** @type {number} */
        var i = 0;
        /** @type {number} */
        var l = obj.length;
        for (;l > i;i++) {
          ary.push(obj[i]);
        }
      } else {
        ary.push(obj);
      }
    }
    return ary;
  };
  /** @type {function (string, (number|string)): ?} */
  node.indexOf = Array.prototype.indexOf ? function(name, klass) {
    return name.indexOf(klass);
  } : function(name, value) {
    /** @type {number} */
    var i = 0;
    var size = name.length;
    for (;size > i;i++) {
      if (name[i] === value) {
        return i;
      }
    }
    return-1;
  };
  /**
   * @param {string} name
   * @param {number} value
   * @return {undefined}
   */
  node.removeFrom = function(name, value) {
    var idx = node.indexOf(name, value);
    if (-1 != idx) {
      name.splice(idx, 1);
    }
  };
  /** @type {function (?): ?} */
  node.isElement = "function" == typeof HTMLElement || "object" == typeof HTMLElement ? function(object) {
    return object instanceof HTMLElement;
  } : function(item) {
    return item && ("object" == typeof item && (1 == item.nodeType && "string" == typeof item.nodeName));
  };
  node.setText = function() {
    /**
     * @param {?} cache
     * @param {?} value
     * @return {undefined}
     */
    function initSetGet(cache, value) {
      data = data || (void 0 !== document.documentElement.textContent ? "textContent" : "innerText");
      cache[data] = value;
    }
    var data;
    return initSetGet;
  }();
  /**
   * @param {null} el
   * @param {?} item
   * @return {?}
   */
  node.getParent = function(el, item) {
    for (;el != document.body;) {
      if (el = el.parentNode, test(el, item)) {
        return el;
      }
    }
  };
  /**
   * @param {(Element|string)} arg
   * @return {?}
   */
  node.getQueryElement = function(arg) {
    return "string" == typeof arg ? document.querySelector(arg) : arg;
  };
  /**
   * @param {Event} event
   * @return {undefined}
   */
  node.handleEvent = function(event) {
    /** @type {string} */
    var method = "on" + event.type;
    if (this[method]) {
      this[method](event);
    }
  };
  /**
   * @param {Array} data
   * @param {?} b
   * @return {?}
   */
  node.filterFindElements = function(data, b) {
    data = node.makeArray(data);
    /** @type {Array} */
    var results = [];
    /** @type {number} */
    var i = 0;
    var l = data.length;
    for (;l > i;i++) {
      var child = data[i];
      if (node.isElement(child)) {
        if (b) {
          if (test(child, b)) {
            results.push(child);
          }
          var keys = child.querySelectorAll(b);
          /** @type {number} */
          var index = 0;
          var length = keys.length;
          for (;length > index;index++) {
            results.push(keys[index]);
          }
        } else {
          results.push(child);
        }
      }
    }
    return results;
  };
  /**
   * @param {Function} store
   * @param {string} type
   * @param {number} timeout
   * @return {undefined}
   */
  node.debounceMethod = function(store, type, timeout) {
    var fn = store.prototype[type];
    /** @type {string} */
    var key = type + "Timeout";
    /**
     * @return {undefined}
     */
    store.prototype[type] = function() {
      var to = this[key];
      if (to) {
        clearTimeout(to);
      }
      /** @type {Arguments} */
      var newArgs = arguments;
      var that = this;
      /** @type {number} */
      this[key] = setTimeout(function() {
        fn.apply(that, newArgs);
        delete that[key];
      }, timeout || 100);
    };
  };
  /**
   * @param {string} str
   * @return {?}
   */
  node.toDashed = function(str) {
    return str.replace(/(.)([A-Z])/g, function(dataAndEvents, $1, $2) {
      return $1 + "-" + $2;
    }).toLowerCase();
  };
  var console = global.console;
  return node.htmlInit = function(buffer, namespace) {
    until(function() {
      var dashedNamespace = node.toDashed(namespace);
      /** @type {NodeList} */
      var checkSet = document.querySelectorAll(".js-" + dashedNamespace);
      /** @type {string} */
      var name = "data-" + dashedNamespace + "-options";
      /** @type {number} */
      var i = 0;
      /** @type {number} */
      var l = checkSet.length;
      for (;l > i;i++) {
        var base64;
        var elem = checkSet[i];
        var src = elem.getAttribute(name);
        try {
          /** @type {*} */
          base64 = src && JSON.parse(src);
        } catch (msgType) {
          if (console) {
            console.error("Error parsing " + name + " on " + elem.nodeName.toLowerCase() + (elem.id ? "#" + elem.id : "") + ": " + msgType);
          }
          continue;
        }
        var value = new buffer(elem, base64);
        var jQuery = global.jQuery;
        if (jQuery) {
          jQuery.data(elem, namespace, value);
        }
      }
    });
  }, node;
}), function(root, factory) {
  if ("function" == typeof define && define.amd) {
    define("outlayer/item", ["eventEmitter/EventEmitter", "get-size/get-size", "get-style-property/get-style-property", "fizzy-ui-utils/utils"], function(parent, Backbone, classNames, d) {
      return factory(root, parent, Backbone, classNames, d);
    });
  } else {
    if ("object" == typeof exports) {
      module.exports = factory(root, require("wolfy87-eventemitter"), require("get-size"), require("desandro-get-style-property"), require("fizzy-ui-utils"));
    } else {
      root.Outlayer = {};
      root.Outlayer.Item = factory(root, root.EventEmitter, root.getSize, root.getStyleProperty, root.fizzyUIUtils);
    }
  }
}(window, function(container, parentClass, getSize, getStyleProperty, _) {
  /**
   * @param {?} obj
   * @return {?}
   */
  function isEmptyObj(obj) {
    var prop;
    for (prop in obj) {
      return false;
    }
    return prop = null, true;
  }
  /**
   * @param {?} element
   * @param {Function} layout
   * @return {undefined}
   */
  function Item(element, layout) {
    if (element) {
      this.element = element;
      /** @type {Function} */
      this.layout = layout;
      this.position = {
        x : 0,
        y : 0
      };
      this._create();
    }
  }
  var text = container.getComputedStyle;
  /** @type {function (Object): ?} */
  var getStyle = text ? function(failures) {
    return text(failures, null);
  } : function(node) {
    return node.currentStyle;
  };
  var transitionProperty = getStyleProperty("transition");
  var transformProperty = getStyleProperty("transform");
  var supportsCSS3 = transitionProperty && transformProperty;
  /** @type {boolean} */
  var is3d = !!getStyleProperty("perspective");
  var transitionEndEvent = {
    WebkitTransition : "webkitTransitionEnd",
    MozTransition : "transitionend",
    OTransition : "otransitionend",
    transition : "transitionend"
  }[transitionProperty];
  /** @type {Array} */
  var prefixableProperties = ["transform", "transition", "transitionDuration", "transitionProperty"];
  var vendorProperties = function() {
    var cache = {};
    /** @type {number} */
    var i = 0;
    /** @type {number} */
    var len = prefixableProperties.length;
    for (;len > i;i++) {
      var prop = prefixableProperties[i];
      var supportedProp = getStyleProperty(prop);
      if (supportedProp) {
        if (supportedProp !== prop) {
          cache[prop] = supportedProp;
        }
      }
    }
    return cache;
  }();
  _.extend(Item.prototype, parentClass.prototype);
  /**
   * @return {undefined}
   */
  Item.prototype._create = function() {
    this._transn = {
      ingProperties : {},
      clean : {},
      onEnd : {}
    };
    this.css({
      position : "absolute"
    });
  };
  /**
   * @param {Event} event
   * @return {undefined}
   */
  Item.prototype.handleEvent = function(event) {
    /** @type {string} */
    var method = "on" + event.type;
    if (this[method]) {
      this[method](event);
    }
  };
  /**
   * @return {undefined}
   */
  Item.prototype.getSize = function() {
    this.size = getSize(this.element);
  };
  /**
   * @param {string} opt_attributes
   * @return {undefined}
   */
  Item.prototype.css = function(opt_attributes) {
    var elemStyle = this.element.style;
    var prop;
    for (prop in opt_attributes) {
      var supportedProp = vendorProperties[prop] || prop;
      elemStyle[supportedProp] = opt_attributes[prop];
    }
  };
  /**
   * @return {undefined}
   */
  Item.prototype.getPosition = function() {
    var style = getStyle(this.element);
    var layoutOptions = this.layout.options;
    var isOriginLeft = layoutOptions.isOriginLeft;
    var isOriginTop = layoutOptions.isOriginTop;
    /** @type {number} */
    var x = parseInt(style[isOriginLeft ? "left" : "right"], 10);
    /** @type {number} */
    var y = parseInt(style[isOriginTop ? "top" : "bottom"], 10);
    /** @type {number} */
    x = isNaN(x) ? 0 : x;
    /** @type {number} */
    y = isNaN(y) ? 0 : y;
    var layoutSize = this.layout.size;
    x -= isOriginLeft ? layoutSize.paddingLeft : layoutSize.paddingRight;
    y -= isOriginTop ? layoutSize.paddingTop : layoutSize.paddingBottom;
    /** @type {number} */
    this.position.x = x;
    /** @type {number} */
    this.position.y = y;
  };
  /**
   * @return {undefined}
   */
  Item.prototype.layoutPosition = function() {
    var options = this.layout.size;
    var o = this.layout.options;
    var attributes = {};
    /** @type {string} */
    var padding = o.isOriginLeft ? "paddingLeft" : "paddingRight";
    /** @type {string} */
    var name = o.isOriginLeft ? "left" : "right";
    /** @type {string} */
    var prop = o.isOriginLeft ? "right" : "left";
    var value = this.position.x + options[padding];
    /** @type {string} */
    value = o.percentPosition && !o.isHorizontal ? 100 * (value / options.width) + "%" : value + "px";
    /** @type {string} */
    attributes[name] = value;
    /** @type {string} */
    attributes[prop] = "";
    /** @type {string} */
    var n = o.isOriginTop ? "paddingTop" : "paddingBottom";
    /** @type {string} */
    var horzEdge = o.isOriginTop ? "top" : "bottom";
    /** @type {string} */
    var property = o.isOriginTop ? "bottom" : "top";
    var t = this.position.y + options[n];
    /** @type {string} */
    t = o.percentPosition && o.isHorizontal ? 100 * (t / options.height) + "%" : t + "px";
    /** @type {string} */
    attributes[horzEdge] = t;
    /** @type {string} */
    attributes[property] = "";
    this.css(attributes);
    this.emitEvent("layout", [this]);
  };
  /** @type {function (number, number): ?} */
  var translate = is3d ? function(x, y) {
    return "translate3d(" + x + "px, " + y + "px, 0)";
  } : function(x, y) {
    return "translate(" + x + "px, " + y + "px)";
  };
  /**
   * @param {string} x
   * @param {string} y
   * @return {?}
   */
  Item.prototype._transitionTo = function(x, y) {
    this.getPosition();
    var curX = this.position.x;
    var curY = this.position.y;
    /** @type {number} */
    var compareX = parseInt(x, 10);
    /** @type {number} */
    var compareY = parseInt(y, 10);
    /** @type {boolean} */
    var didNotMove = compareX === this.position.x && compareY === this.position.y;
    if (this.setPosition(x, y), didNotMove && !this.isTransitioning) {
      return void this.layoutPosition();
    }
    /** @type {number} */
    var transX = x - curX;
    /** @type {number} */
    var transY = y - curY;
    var transitionStyle = {};
    var layoutOptions = this.layout.options;
    /** @type {number} */
    transX = layoutOptions.isOriginLeft ? transX : -transX;
    /** @type {number} */
    transY = layoutOptions.isOriginTop ? transY : -transY;
    transitionStyle.transform = translate(transX, transY);
    this.transition({
      to : transitionStyle,
      onTransitionEnd : {
        transform : this.layoutPosition
      },
      isCleaning : true
    });
  };
  /**
   * @param {string} x
   * @param {string} y
   * @return {undefined}
   */
  Item.prototype.goTo = function(x, y) {
    this.setPosition(x, y);
    this.layoutPosition();
  };
  /** @type {Function} */
  Item.prototype.moveTo = supportsCSS3 ? Item.prototype._transitionTo : Item.prototype.goTo;
  /**
   * @param {string} x
   * @param {string} y
   * @return {undefined}
   */
  Item.prototype.setPosition = function(x, y) {
    /** @type {number} */
    this.position.x = parseInt(x, 10);
    /** @type {number} */
    this.position.y = parseInt(y, 10);
  };
  /**
   * @param {Object} args
   * @return {undefined}
   */
  Item.prototype._nonTransition = function(args) {
    this.css(args.to);
    if (args.isCleaning) {
      this._removeStyles(args.to);
    }
    var prop;
    for (prop in args.onTransitionEnd) {
      args.onTransitionEnd[prop].call(this);
    }
  };
  /**
   * @param {Object} args
   * @return {?}
   */
  Item.prototype._transition = function(args) {
    if (!parseFloat(this.layout.options.transitionDuration)) {
      return void this._nonTransition(args);
    }
    var _transition = this._transn;
    var prop;
    for (prop in args.onTransitionEnd) {
      _transition.onEnd[prop] = args.onTransitionEnd[prop];
    }
    for (prop in args.to) {
      /** @type {boolean} */
      _transition.ingProperties[prop] = true;
      if (args.isCleaning) {
        /** @type {boolean} */
        _transition.clean[prop] = true;
      }
    }
    if (args.from) {
      this.css(args.from);
      var h = this.element.offsetHeight;
      /** @type {null} */
      h = null;
    }
    this.enableTransition(args.to);
    this.css(args.to);
    /** @type {boolean} */
    this.isTransitioning = true;
  };
  var itemTransitionProperties = transformProperty && _.toDashed(transformProperty) + ",opacity";
  /**
   * @return {undefined}
   */
  Item.prototype.enableTransition = function() {
    if (!this.isTransitioning) {
      this.css({
        transitionProperty : itemTransitionProperties,
        transitionDuration : this.layout.options.transitionDuration
      });
      this.element.addEventListener(transitionEndEvent, this, false);
    }
  };
  Item.prototype.transition = Item.prototype[transitionProperty ? "_transition" : "_nonTransition"];
  /**
   * @param {Object} event
   * @return {undefined}
   */
  Item.prototype.onwebkitTransitionEnd = function(event) {
    this.ontransitionend(event);
  };
  /**
   * @param {Object} event
   * @return {undefined}
   */
  Item.prototype.onotransitionend = function(event) {
    this.ontransitionend(event);
  };
  var dashedVendorProperties = {
    "-webkit-transform" : "transform",
    "-moz-transform" : "transform",
    "-o-transform" : "transform"
  };
  /**
   * @param {Object} event
   * @return {undefined}
   */
  Item.prototype.ontransitionend = function(event) {
    if (event.target === this.element) {
      var _transition = this._transn;
      var propertyName = dashedVendorProperties[event.propertyName] || event.propertyName;
      if (delete _transition.ingProperties[propertyName], isEmptyObj(_transition.ingProperties) && this.disableTransition(), propertyName in _transition.clean && (this.element.style[event.propertyName] = "", delete _transition.clean[propertyName]), propertyName in _transition.onEnd) {
        var callback = _transition.onEnd[propertyName];
        callback.call(this);
        delete _transition.onEnd[propertyName];
      }
      this.emitEvent("transitionEnd", [this]);
    }
  };
  /**
   * @return {undefined}
   */
  Item.prototype.disableTransition = function() {
    this.removeTransitionStyles();
    this.element.removeEventListener(transitionEndEvent, this, false);
    /** @type {boolean} */
    this.isTransitioning = false;
  };
  /**
   * @param {?} style
   * @return {undefined}
   */
  Item.prototype._removeStyles = function(style) {
    var attributes = {};
    var prop;
    for (prop in style) {
      /** @type {string} */
      attributes[prop] = "";
    }
    this.css(attributes);
  };
  var attributes = {
    transitionProperty : "",
    transitionDuration : ""
  };
  return Item.prototype.removeTransitionStyles = function() {
    this.css(attributes);
  }, Item.prototype.removeElem = function() {
    this.element.parentNode.removeChild(this.element);
    this.css({
      display : ""
    });
    this.emitEvent("remove", [this]);
  }, Item.prototype.remove = function() {
    if (!transitionProperty || !parseFloat(this.layout.options.transitionDuration)) {
      return void this.removeElem();
    }
    var _this = this;
    this.once("transitionEnd", function() {
      _this.removeElem();
    });
    this.hide();
  }, Item.prototype.reveal = function() {
    delete this.isHidden;
    this.css({
      display : ""
    });
    var options = this.layout.options;
    var map = {};
    var objUid = this.getHideRevealTransitionEndProperty("visibleStyle");
    map[objUid] = this.onRevealTransitionEnd;
    this.transition({
      from : options.hiddenStyle,
      to : options.visibleStyle,
      isCleaning : true,
      onTransitionEnd : map
    });
  }, Item.prototype.onRevealTransitionEnd = function() {
    if (!this.isHidden) {
      this.emitEvent("reveal");
    }
  }, Item.prototype.getHideRevealTransitionEndProperty = function(i) {
    var b = this.layout.options[i];
    if (b.opacity) {
      return "opacity";
    }
    var prop;
    for (prop in b) {
      return prop;
    }
  }, Item.prototype.hide = function() {
    /** @type {boolean} */
    this.isHidden = true;
    this.css({
      display : ""
    });
    var options = this.layout.options;
    var map = {};
    var objUid = this.getHideRevealTransitionEndProperty("hiddenStyle");
    map[objUid] = this.onHideTransitionEnd;
    this.transition({
      from : options.visibleStyle,
      to : options.hiddenStyle,
      isCleaning : true,
      onTransitionEnd : map
    });
  }, Item.prototype.onHideTransitionEnd = function() {
    if (this.isHidden) {
      this.css({
        display : "none"
      });
      this.emitEvent("hide");
    }
  }, Item.prototype.destroy = function() {
    this.css({
      position : "",
      left : "",
      right : "",
      top : "",
      bottom : "",
      transition : "",
      transform : ""
    });
  }, Item;
}), function(root, factory) {
  if ("function" == typeof define && define.amd) {
    define("outlayer/outlayer", ["eventie/eventie", "eventEmitter/EventEmitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function(m, _super, classNames, $, domHelper) {
      return factory(root, m, _super, classNames, $, domHelper);
    });
  } else {
    if ("object" == typeof exports) {
      module.exports = factory(root, require("eventie"), require("wolfy87-eventemitter"), require("get-size"), require("fizzy-ui-utils"), require("./item"));
    } else {
      root.Outlayer = factory(root, root.eventie, root.EventEmitter, root.getSize, root.fizzyUIUtils, root.Outlayer.Item);
    }
  }
}(window, function(selector, m, b, getSize, $, Item) {
  /**
   * @param {(Element|string)} element
   * @param {Object} options
   * @return {?}
   */
  function Outlayer(element, options) {
    var el = $.getQueryElement(element);
    if (!el) {
      return void(j && j.error("Bad element for " + this.constructor.namespace + ": " + (el || element)));
    }
    this.element = el;
    if (jQuery) {
      this.$element = jQuery(this.element);
    }
    this.options = $.extend({}, this.constructor.defaults);
    this.option(options);
    /** @type {number} */
    var id = ++rightId;
    /** @type {number} */
    this.element.outlayerGUID = id;
    done[id] = this;
    this._create();
    if (this.options.isInitLayout) {
      this.layout();
    }
  }
  var j = selector.console;
  var jQuery = selector.jQuery;
  /**
   * @return {undefined}
   */
  var noop = function() {
  };
  /** @type {number} */
  var rightId = 0;
  var done = {};
  return Outlayer.namespace = "outlayer", Outlayer.Item = Item, Outlayer.defaults = {
    containerStyle : {
      position : "relative"
    },
    isInitLayout : true,
    isOriginLeft : true,
    isOriginTop : true,
    isResizeBound : true,
    isResizingContainer : true,
    transitionDuration : "0.4s",
    hiddenStyle : {
      opacity : 0,
      transform : "scale(0.001)"
    },
    visibleStyle : {
      opacity : 1,
      transform : "scale(1)"
    }
  }, $.extend(Outlayer.prototype, b.prototype), Outlayer.prototype.option = function(attributes) {
    $.extend(this.options, attributes);
  }, Outlayer.prototype._create = function() {
    this.reloadItems();
    /** @type {Array} */
    this.stamps = [];
    this.stamp(this.options.stamp);
    $.extend(this.element.style, this.options.containerStyle);
    if (this.options.isResizeBound) {
      this.bindResize();
    }
  }, Outlayer.prototype.reloadItems = function() {
    this.items = this._itemize(this.element.children);
  }, Outlayer.prototype._itemize = function(elems) {
    var itemElems = this._filterFindItemElements(elems);
    var Item = this.constructor.Item;
    /** @type {Array} */
    var items = [];
    /** @type {number} */
    var i = 0;
    var len = itemElems.length;
    for (;len > i;i++) {
      var elem = itemElems[i];
      var item = new Item(elem, this);
      items.push(item);
    }
    return items;
  }, Outlayer.prototype._filterFindItemElements = function(callback) {
    return $.filterFindElements(callback, this.options.itemSelector);
  }, Outlayer.prototype.getItemElements = function() {
    /** @type {Array} */
    var elems = [];
    /** @type {number} */
    var i = 0;
    var len = this.items.length;
    for (;len > i;i++) {
      elems.push(this.items[i].element);
    }
    return elems;
  }, Outlayer.prototype.layout = function() {
    this._resetLayout();
    this._manageStamps();
    var deepDataAndEvents = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
    this.layoutItems(this.items, deepDataAndEvents);
    /** @type {boolean} */
    this._isLayoutInited = true;
  }, Outlayer.prototype._init = Outlayer.prototype.layout, Outlayer.prototype._resetLayout = function() {
    this.getSize();
  }, Outlayer.prototype.getSize = function() {
    this.size = getSize(this.element);
  }, Outlayer.prototype._getMeasurement = function(measurement, size) {
    var elem;
    var option = this.options[measurement];
    if (option) {
      if ("string" == typeof option) {
        elem = this.element.querySelector(option);
      } else {
        if ($.isElement(option)) {
          elem = option;
        }
      }
      this[measurement] = elem ? getSize(elem)[size] : option;
    } else {
      /** @type {number} */
      this[measurement] = 0;
    }
  }, Outlayer.prototype.layoutItems = function(items, deepDataAndEvents) {
    items = this._getItemsForLayout(items);
    this._layoutItems(items, deepDataAndEvents);
    this._postLayout();
  }, Outlayer.prototype._getItemsForLayout = function(items) {
    /** @type {Array} */
    var layoutItems = [];
    /** @type {number} */
    var y = 0;
    var x = items.length;
    for (;x > y;y++) {
      var item = items[y];
      if (!item.isIgnored) {
        layoutItems.push(item);
      }
    }
    return layoutItems;
  }, Outlayer.prototype._layoutItems = function(items, deepDataAndEvents) {
    if (this._emitCompleteOnItems("layout", items), items && items.length) {
      /** @type {Array} */
      var queue = [];
      /** @type {number} */
      var y = 0;
      var x = items.length;
      for (;x > y;y++) {
        var item = items[y];
        var position = this._getItemLayoutPosition(item);
        position.item = item;
        position.isInstant = deepDataAndEvents || item.isLayoutInstant;
        queue.push(position);
      }
      this._processLayoutQueue(queue);
    }
  }, Outlayer.prototype._getItemLayoutPosition = function() {
    return{
      x : 0,
      y : 0
    };
  }, Outlayer.prototype._processLayoutQueue = function(queue) {
    /** @type {number} */
    var id = 0;
    var ln = queue.length;
    for (;ln > id;id++) {
      var obj = queue[id];
      this._positionItem(obj.item, obj.x, obj.y, obj.isInstant);
    }
  }, Outlayer.prototype._positionItem = function(item, x, y, isInstant) {
    if (isInstant) {
      item.goTo(x, y);
    } else {
      item.moveTo(x, y);
    }
  }, Outlayer.prototype._postLayout = function() {
    this.resizeContainer();
  }, Outlayer.prototype.resizeContainer = function() {
    if (this.options.isResizingContainer) {
      var size = this._getContainerSize();
      if (size) {
        this._setContainerMeasure(size.width, true);
        this._setContainerMeasure(size.height, false);
      }
    }
  }, Outlayer.prototype._getContainerSize = noop, Outlayer.prototype._setContainerMeasure = function(measure, isWidth) {
    if (void 0 !== measure) {
      var elemSize = this.size;
      if (elemSize.isBorderBox) {
        measure += isWidth ? elemSize.paddingLeft + elemSize.paddingRight + elemSize.borderLeftWidth + elemSize.borderRightWidth : elemSize.paddingBottom + elemSize.paddingTop + elemSize.borderTopWidth + elemSize.borderBottomWidth;
      }
      /** @type {number} */
      measure = Math.max(measure, 0);
      /** @type {string} */
      this.element.style[isWidth ? "width" : "height"] = measure + "px";
    }
  }, Outlayer.prototype._emitCompleteOnItems = function(type, data) {
    /**
     * @return {undefined}
     */
    function callback() {
      _this.emitEvent(type + "Complete", [data]);
    }
    /**
     * @return {undefined}
     */
    function one() {
      got++;
      if (got === expected) {
        callback();
      }
    }
    var _this = this;
    var expected = data.length;
    if (!data || !expected) {
      return void callback();
    }
    /** @type {number} */
    var got = 0;
    /** @type {number} */
    var index = 0;
    var length = data.length;
    for (;length > index;index++) {
      var event = data[index];
      event.once(type, one);
    }
  }, Outlayer.prototype.ignore = function(elem) {
    var item = this.getItem(elem);
    if (item) {
      /** @type {boolean} */
      item.isIgnored = true;
    }
  }, Outlayer.prototype.unignore = function(elem) {
    var item = this.getItem(elem);
    if (item) {
      delete item.isIgnored;
    }
  }, Outlayer.prototype.stamp = function(elems) {
    if (elems = this._find(elems)) {
      this.stamps = this.stamps.concat(elems);
      /** @type {number} */
      var i = 0;
      var l = elems.length;
      for (;l > i;i++) {
        var elem = elems[i];
        this.ignore(elem);
      }
    }
  }, Outlayer.prototype.unstamp = function(elems) {
    if (elems = this._find(elems)) {
      /** @type {number} */
      var i = 0;
      var l = elems.length;
      for (;l > i;i++) {
        var elem = elems[i];
        $.removeFrom(this.stamps, elem);
        this.unignore(elem);
      }
    }
  }, Outlayer.prototype._find = function(selector) {
    return selector ? ("string" == typeof selector && (selector = this.element.querySelectorAll(selector)), selector = $.makeArray(selector)) : void 0;
  }, Outlayer.prototype._manageStamps = function() {
    if (this.stamps && this.stamps.length) {
      this._getBoundingRect();
      /** @type {number} */
      var i = 0;
      var len = this.stamps.length;
      for (;len > i;i++) {
        var stamp = this.stamps[i];
        this._manageStamp(stamp);
      }
    }
  }, Outlayer.prototype._getBoundingRect = function() {
    var boundingRect = this.element.getBoundingClientRect();
    var size = this.size;
    this._boundingRect = {
      left : boundingRect.left + size.paddingLeft + size.borderLeftWidth,
      top : boundingRect.top + size.paddingTop + size.borderTopWidth,
      right : boundingRect.right - (size.paddingRight + size.borderRightWidth),
      bottom : boundingRect.bottom - (size.paddingBottom + size.borderBottomWidth)
    };
  }, Outlayer.prototype._manageStamp = noop, Outlayer.prototype._getElementOffset = function(elem) {
    var boundingRect = elem.getBoundingClientRect();
    var thisRect = this._boundingRect;
    var size = getSize(elem);
    var offset = {
      left : boundingRect.left - thisRect.left - size.marginLeft,
      top : boundingRect.top - thisRect.top - size.marginTop,
      right : thisRect.right - boundingRect.right - size.marginRight,
      bottom : thisRect.bottom - boundingRect.bottom - size.marginBottom
    };
    return offset;
  }, Outlayer.prototype.handleEvent = function(event) {
    /** @type {string} */
    var method = "on" + event.type;
    if (this[method]) {
      this[method](event);
    }
  }, Outlayer.prototype.bindResize = function() {
    if (!this.isResizeBound) {
      m.bind(selector, "resize", this);
      /** @type {boolean} */
      this.isResizeBound = true;
    }
  }, Outlayer.prototype.unbindResize = function() {
    if (this.isResizeBound) {
      m.unbind(selector, "resize", this);
    }
    /** @type {boolean} */
    this.isResizeBound = false;
  }, Outlayer.prototype.onresize = function() {
    /**
     * @return {undefined}
     */
    function delayed() {
      _this.resize();
      delete _this.resizeTimeout;
    }
    if (this.resizeTimeout) {
      clearTimeout(this.resizeTimeout);
    }
    var _this = this;
    /** @type {number} */
    this.resizeTimeout = setTimeout(delayed, 100);
  }, Outlayer.prototype.resize = function() {
    if (this.isResizeBound) {
      if (this.needsResizeLayout()) {
        this.layout();
      }
    }
  }, Outlayer.prototype.needsResizeLayout = function() {
    var size = getSize(this.element);
    var hasSizes = this.size && size;
    return hasSizes && size.innerWidth !== this.size.innerWidth;
  }, Outlayer.prototype.addItems = function(elems) {
    var items = this._itemize(elems);
    return items.length && (this.items = this.items.concat(items)), items;
  }, Outlayer.prototype.appended = function(elems) {
    var items = this.addItems(elems);
    if (items.length) {
      this.layoutItems(items, true);
      this.reveal(items);
    }
  }, Outlayer.prototype.prepended = function(elems) {
    var items = this._itemize(elems);
    if (items.length) {
      var previousItems = this.items.slice(0);
      this.items = items.concat(previousItems);
      this._resetLayout();
      this._manageStamps();
      this.layoutItems(items, true);
      this.reveal(items);
      this.layoutItems(previousItems);
    }
  }, Outlayer.prototype.reveal = function(items) {
    this._emitCompleteOnItems("reveal", items);
    var ms = items && items.length;
    /** @type {number} */
    var m = 0;
    for (;ms && ms > m;m++) {
      var item = items[m];
      item.reveal();
    }
  }, Outlayer.prototype.hide = function(value) {
    this._emitCompleteOnItems("hide", value);
    var vl = value && value.length;
    /** @type {number} */
    var i = 0;
    for (;vl && vl > i;i++) {
      var section = value[i];
      section.hide();
    }
  }, Outlayer.prototype.revealItemElements = function(isXML) {
    var items = this.getItems(isXML);
    this.reveal(items);
  }, Outlayer.prototype.hideItemElements = function(key) {
    var camelKey = this.getItems(key);
    this.hide(camelKey);
  }, Outlayer.prototype.getItem = function(elem) {
    /** @type {number} */
    var i = 0;
    var len = this.items.length;
    for (;len > i;i++) {
      var item = this.items[i];
      if (item.element === elem) {
        return item;
      }
    }
  }, Outlayer.prototype.getItems = function(value) {
    value = $.makeArray(value);
    /** @type {Array} */
    var items = [];
    /** @type {number} */
    var M = 0;
    var len = value.length;
    for (;len > M;M++) {
      var elem = value[M];
      var item = this.getItem(elem);
      if (item) {
        items.push(item);
      }
    }
    return items;
  }, Outlayer.prototype.remove = function(name) {
    var items = this.getItems(name);
    if (this._emitCompleteOnItems("remove", items), items && items.length) {
      /** @type {number} */
      var firstIndex = 0;
      var afterNewCount = items.length;
      for (;afterNewCount > firstIndex;firstIndex++) {
        var temp = items[firstIndex];
        temp.remove();
        $.removeFrom(this.items, temp);
      }
    }
  }, Outlayer.prototype.destroy = function() {
    var style = this.element.style;
    /** @type {string} */
    style.height = "";
    /** @type {string} */
    style.position = "";
    /** @type {string} */
    style.width = "";
    /** @type {number} */
    var i = 0;
    var len = this.items.length;
    for (;len > i;i++) {
      var item = this.items[i];
      item.destroy();
    }
    this.unbindResize();
    var id = this.element.outlayerGUID;
    delete done[id];
    delete this.element.outlayerGUID;
    if (jQuery) {
      jQuery.removeData(this.element, this.constructor.namespace);
    }
  }, Outlayer.data = function(name) {
    name = $.getQueryElement(name);
    var id = name && name.outlayerGUID;
    return id && done[id];
  }, Outlayer.create = function(namespace, attributes) {
    /**
     * @return {undefined}
     */
    function self() {
      Outlayer.apply(this, arguments);
    }
    return Object.create ? self.prototype = Object.create(Outlayer.prototype) : $.extend(self.prototype, Outlayer.prototype), self.prototype.constructor = self, self.defaults = $.extend({}, Outlayer.defaults), $.extend(self.defaults, attributes), self.prototype.settings = {}, self.namespace = namespace, self.data = Outlayer.data, self.Item = function() {
      Item.apply(this, arguments);
    }, self.Item.prototype = new Item, $.htmlInit(self, namespace), jQuery && (jQuery.bridget && jQuery.bridget(namespace, self)), self;
  }, Outlayer.Item = Item, Outlayer;
}), function($, factory) {
  if ("function" == typeof define && define.amd) {
    define("isotope/js/item", ["outlayer/outlayer"], factory);
  } else {
    if ("object" == typeof exports) {
      module.exports = factory(require("outlayer"));
    } else {
      $.Isotope = $.Isotope || {};
      $.Isotope.Item = factory($.Outlayer);
    }
  }
}(window, function(models) {
  /**
   * @return {undefined}
   */
  function Item() {
    models.Item.apply(this, arguments);
  }
  Item.prototype = new models.Item;
  /**
   * @return {undefined}
   */
  Item.prototype._create = function() {
    /** @type {number} */
    this.id = this.layout.itemGUID++;
    models.Item.prototype._create.call(this);
    this.sortData = {};
  };
  /**
   * @return {undefined}
   */
  Item.prototype.updateSortData = function() {
    if (!this.isIgnored) {
      this.sortData.id = this.id;
      this.sortData["original-order"] = this.id;
      /** @type {number} */
      this.sortData.random = Math.random();
      var getSortData = this.layout.options.getSortData;
      var $cookies = this.layout._sorters;
      var key;
      for (key in getSortData) {
        var value = $cookies[key];
        this.sortData[key] = value(this.element, this);
      }
    }
  };
  /** @type {function (): undefined} */
  var matcherFunction = Item.prototype.destroy;
  return Item.prototype.destroy = function() {
    matcherFunction.apply(this, arguments);
    this.css({
      display : ""
    });
  }, Item;
}), function($, factory) {
  if ("function" == typeof define && define.amd) {
    define("isotope/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], factory);
  } else {
    if ("object" == typeof exports) {
      module.exports = factory(require("get-size"), require("outlayer"));
    } else {
      $.Isotope = $.Isotope || {};
      $.Isotope.LayoutMode = factory($.getSize, $.Outlayer);
    }
  }
}(window, function($, matchersClass) {
  /**
   * @param {Object} params
   * @return {undefined}
   */
  function fn(params) {
    /** @type {Object} */
    this.isotope = params;
    if (params) {
      this.options = params.options[this.namespace];
      this.element = params.element;
      this.items = params.filteredItems;
      this.size = params.size;
    }
  }
  return function() {
    /**
     * @param {?} methodName
     * @return {?}
     */
    function wrap(methodName) {
      return function() {
        return matchersClass.prototype[methodName].apply(this.isotope, arguments);
      };
    }
    /** @type {Array} */
    var required = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout"];
    /** @type {number} */
    var i = 0;
    /** @type {number} */
    var l = required.length;
    for (;l > i;i++) {
      var key = required[i];
      fn.prototype[key] = wrap(key);
    }
  }(), fn.prototype.needsVerticalResizeLayout = function() {
    var first = $(this.isotope.element);
    var hideFirst = this.isotope.size && first;
    return hideFirst && first.innerHeight != this.isotope.size.innerHeight;
  }, fn.prototype._getMeasurement = function() {
    this.isotope._getMeasurement.apply(this, arguments);
  }, fn.prototype.getColumnWidth = function() {
    this.getSegmentSize("column", "Width");
  }, fn.prototype.getRowHeight = function() {
    this.getSegmentSize("row", "Height");
  }, fn.prototype.getSegmentSize = function(type, name) {
    var key = type + name;
    /** @type {string} */
    var action = "outer" + name;
    if (this._getMeasurement(key, action), !this[key]) {
      var api = this.getFirstItemSize();
      this[key] = api && api[action] || this.isotope.size["inner" + name];
    }
  }, fn.prototype.getFirstItemSize = function() {
    var ui = this.isotope.filteredItems[0];
    return ui && (ui.element && $(ui.element));
  }, fn.prototype.layout = function() {
    this.isotope.layout.apply(this.isotope, arguments);
  }, fn.prototype.getSize = function() {
    this.isotope.getSize();
    this.size = this.isotope.size;
  }, fn.modes = {}, fn.create = function(name, o) {
    /**
     * @return {undefined}
     */
    function f() {
      fn.apply(this, arguments);
    }
    return f.prototype = new fn, o && (f.options = o), f.prototype.namespace = name, fn.modes[name] = f, f;
  }, fn;
}), function(root, factory) {
  if ("function" == typeof define && define.amd) {
    define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size", "fizzy-ui-utils/utils"], factory);
  } else {
    if ("object" == typeof exports) {
      module.exports = factory(require("outlayer"), require("get-size"), require("fizzy-ui-utils"));
    } else {
      root.Masonry = factory(root.Outlayer, root.getSize, root.fizzyUIUtils);
    }
  }
}(window, function(activator, getSize, body) {
  var Masonry = activator.create("masonry");
  return Masonry.prototype._resetLayout = function() {
    this.getSize();
    this._getMeasurement("columnWidth", "outerWidth");
    this._getMeasurement("gutter", "outerWidth");
    this.measureColumns();
    var i = this.cols;
    /** @type {Array} */
    this.colYs = [];
    for (;i--;) {
      this.colYs.push(0);
    }
    /** @type {number} */
    this.maxY = 0;
  }, Masonry.prototype.measureColumns = function() {
    if (this.getContainerWidth(), !this.columnWidth) {
      var firstItem = this.items[0];
      var firstItemElem = firstItem && firstItem.element;
      this.columnWidth = firstItemElem && getSize(firstItemElem).outerWidth || this.containerWidth;
    }
    var tabSize = this.columnWidth += this.gutter;
    var col = this.containerWidth + this.gutter;
    /** @type {number} */
    var x = col / tabSize;
    /** @type {number} */
    var size = tabSize - col % tabSize;
    /** @type {string} */
    var name = size && 1 > size ? "round" : "floor";
    x = Math[name](x);
    /** @type {number} */
    this.cols = Math.max(x, 1);
  }, Masonry.prototype.getContainerWidth = function() {
    var container = this.options.isFitWidth ? this.element.parentNode : this.element;
    var size = getSize(container);
    this.containerWidth = size && size.innerWidth;
  }, Masonry.prototype._getItemLayoutPosition = function(item) {
    item.getSize();
    /** @type {number} */
    var arg = item.size.outerWidth % this.columnWidth;
    /** @type {string} */
    var vname = arg && 1 > arg ? "round" : "ceil";
    var colSpan = Math[vname](item.size.outerWidth / this.columnWidth);
    /** @type {number} */
    colSpan = Math.min(colSpan, this.cols);
    var rvar = this._getColGroup(colSpan);
    /** @type {number} */
    var minimumY = Math.min.apply(Math, rvar);
    var shortColIndex = body.indexOf(rvar, minimumY);
    var position = {
      x : this.columnWidth * shortColIndex,
      y : minimumY
    };
    var setHeight = minimumY + item.size.outerHeight;
    /** @type {number} */
    var l = this.cols + 1 - rvar.length;
    /** @type {number} */
    var i = 0;
    for (;l > i;i++) {
      this.colYs[shortColIndex + i] = setHeight;
    }
    return position;
  }, Masonry.prototype._getColGroup = function(colSpan) {
    if (2 > colSpan) {
      return this.colYs;
    }
    /** @type {Array} */
    var colGroup = [];
    /** @type {number} */
    var l = this.cols + 1 - colSpan;
    /** @type {number} */
    var i = 0;
    for (;l > i;i++) {
      var groupColYs = this.colYs.slice(i, i + colSpan);
      /** @type {number} */
      colGroup[i] = Math.max.apply(Math, groupColYs);
    }
    return colGroup;
  }, Masonry.prototype._manageStamp = function(stamp) {
    var stampSize = getSize(stamp);
    var offset = this._getElementOffset(stamp);
    var firstX = this.options.isOriginLeft ? offset.left : offset.right;
    var lastX = firstX + stampSize.outerWidth;
    /** @type {number} */
    var startIndex = Math.floor(firstX / this.columnWidth);
    /** @type {number} */
    startIndex = Math.max(0, startIndex);
    /** @type {number} */
    var toRead = Math.floor(lastX / this.columnWidth);
    toRead -= lastX % this.columnWidth ? 0 : 1;
    /** @type {number} */
    toRead = Math.min(this.cols - 1, toRead);
    var stampMaxY = (this.options.isOriginTop ? offset.top : offset.bottom) + stampSize.outerHeight;
    /** @type {number} */
    var i = startIndex;
    for (;toRead >= i;i++) {
      /** @type {number} */
      this.colYs[i] = Math.max(stampMaxY, this.colYs[i]);
    }
  }, Masonry.prototype._getContainerSize = function() {
    /** @type {number} */
    this.maxY = Math.max.apply(Math, this.colYs);
    var size = {
      height : this.maxY
    };
    return this.options.isFitWidth && (size.width = this._getContainerFitWidth()), size;
  }, Masonry.prototype._getContainerFitWidth = function() {
    /** @type {number} */
    var unusedCols = 0;
    var i = this.cols;
    for (;--i && 0 === this.colYs[i];) {
      unusedCols++;
    }
    return(this.cols - unusedCols) * this.columnWidth - this.gutter;
  }, Masonry.prototype.needsResizeLayout = function() {
    var containerWidth = this.containerWidth;
    return this.getContainerWidth(), containerWidth !== this.containerWidth;
  }, Masonry;
}), function($, factory) {
  if ("function" == typeof define && define.amd) {
    define("isotope/js/layout-modes/masonry", ["../layout-mode", "masonry/masonry"], factory);
  } else {
    if ("object" == typeof exports) {
      module.exports = factory(require("../layout-mode"), require("masonry-layout"));
    } else {
      factory($.Isotope.LayoutMode, $.Masonry);
    }
  }
}(window, function(activator, matchersClass) {
  /**
   * @param {Object} a
   * @param {Object} b
   * @return {?}
   */
  function extend(a, b) {
    var prop;
    for (prop in b) {
      a[prop] = b[prop];
    }
    return a;
  }
  var Outlayer = activator.create("masonry");
  var _getElementOffset = Outlayer.prototype._getElementOffset;
  var layout = Outlayer.prototype.layout;
  var _getMeasurement = Outlayer.prototype._getMeasurement;
  extend(Outlayer.prototype, matchersClass.prototype);
  Outlayer.prototype._getElementOffset = _getElementOffset;
  Outlayer.prototype.layout = layout;
  Outlayer.prototype._getMeasurement = _getMeasurement;
  /** @type {function (): undefined} */
  var conditional = Outlayer.prototype.measureColumns;
  /**
   * @return {undefined}
   */
  Outlayer.prototype.measureColumns = function() {
    this.items = this.isotope.filteredItems;
    conditional.call(this);
  };
  /** @type {function (): undefined} */
  var matcherFunction = Outlayer.prototype._manageStamp;
  return Outlayer.prototype._manageStamp = function() {
    this.options.isOriginLeft = this.isotope.options.isOriginLeft;
    this.options.isOriginTop = this.isotope.options.isOriginTop;
    matcherFunction.apply(this, arguments);
  }, Outlayer;
}), function($, factory) {
  if ("function" == typeof define && define.amd) {
    define("isotope/js/layout-modes/fit-rows", ["../layout-mode"], factory);
  } else {
    if ("object" == typeof exports) {
      module.exports = factory(require("../layout-mode"));
    } else {
      factory($.Isotope.LayoutMode);
    }
  }
}(window, function(activator) {
  var Masonry = activator.create("fitRows");
  return Masonry.prototype._resetLayout = function() {
    /** @type {number} */
    this.x = 0;
    /** @type {number} */
    this.y = 0;
    /** @type {number} */
    this.maxY = 0;
    this._getMeasurement("gutter", "outerWidth");
  }, Masonry.prototype._getItemLayoutPosition = function(item) {
    item.getSize();
    var x = item.size.outerWidth + this.gutter;
    var maxX = this.isotope.size.innerWidth + this.gutter;
    if (0 !== this.x) {
      if (x + this.x > maxX) {
        /** @type {number} */
        this.x = 0;
        this.y = this.maxY;
      }
    }
    var logo_center = {
      x : this.x,
      y : this.y
    };
    return this.maxY = Math.max(this.maxY, this.y + item.size.outerHeight), this.x += x, logo_center;
  }, Masonry.prototype._getContainerSize = function() {
    return{
      height : this.maxY
    };
  }, Masonry;
}), function($, factory) {
  if ("function" == typeof define && define.amd) {
    define("isotope/js/layout-modes/vertical", ["../layout-mode"], factory);
  } else {
    if ("object" == typeof exports) {
      module.exports = factory(require("../layout-mode"));
    } else {
      factory($.Isotope.LayoutMode);
    }
  }
}(window, function(pane) {
  var Masonry = pane.create("vertical", {
    horizontalAlignment : 0
  });
  return Masonry.prototype._resetLayout = function() {
    /** @type {number} */
    this.y = 0;
  }, Masonry.prototype._getItemLayoutPosition = function(item) {
    item.getSize();
    /** @type {number} */
    var moveX = (this.isotope.size.innerWidth - item.size.outerWidth) * this.options.horizontalAlignment;
    var oldY = this.y;
    return this.y += item.size.outerHeight, {
      x : moveX,
      y : oldY
    };
  }, Masonry.prototype._getContainerSize = function() {
    return{
      height : this.y
    };
  }, Masonry;
}), function(root, factory) {
  if ("function" == typeof define && define.amd) {
    define(["outlayer/outlayer", "get-size/get-size", "matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope/js/item", "isotope/js/layout-mode", "isotope/js/layout-modes/masonry", "isotope/js/layout-modes/fit-rows", "isotope/js/layout-modes/vertical"], function(widget, deepDataAndEvents, _, $, domHelper, mixinEnv) {
      return factory(root, widget, deepDataAndEvents, _, $, domHelper, mixinEnv);
    });
  } else {
    if ("object" == typeof exports) {
      module.exports = factory(root, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("./item"), require("./layout-mode"), require("./layout-modes/masonry"), require("./layout-modes/fit-rows"), require("./layout-modes/vertical"));
    } else {
      root.Isotope = factory(root, root.Outlayer, root.getSize, root.matchesSelector, root.fizzyUIUtils, root.Isotope.Item, root.Isotope.LayoutMode);
    }
  }
}(window, function(global, widget, deepDataAndEvents, next, $, Item, env) {
  /**
   * @param {Array} object
   * @param {string} collection
   * @return {?}
   */
  function some(object, collection) {
    return function(options, container) {
      /** @type {number} */
      var index = 0;
      var length = object.length;
      for (;length > index;index++) {
        var prop = object[index];
        var x = options.sortData[prop];
        var y = container.sortData[prop];
        if (x > y || y > x) {
          var showMessage = void 0 !== collection[prop] ? collection[prop] : collection;
          /** @type {number} */
          var body = showMessage ? 1 : -1;
          return(x > y ? 1 : -1) * body;
        }
      }
      return 0;
    };
  }
  var jQuery = global.jQuery;
  /** @type {function (Object): ?} */
  var trim = String.prototype.trim ? function(e) {
    return e.trim();
  } : function(attr) {
    return attr.replace(/^\s+|\s+$/g, "");
  };
  /** @type {Element} */
  var root = document.documentElement;
  /** @type {function (HTMLElement): ?} */
  var fun = root.textContent ? function(dataAndEvents) {
    return dataAndEvents.textContent;
  } : function(dataAndEvents) {
    return dataAndEvents.innerText;
  };
  var Outlayer = widget.create("isotope", {
    layoutMode : "masonry",
    isJQueryFiltering : true,
    sortAscending : true
  });
  /** @type {Function} */
  Outlayer.Item = Item;
  Outlayer.LayoutMode = env;
  /**
   * @return {undefined}
   */
  Outlayer.prototype._create = function() {
    /** @type {number} */
    this.itemGUID = 0;
    this._sorters = {};
    this._getSorters();
    widget.prototype._create.call(this);
    this.modes = {};
    this.filteredItems = this.items;
    /** @type {Array} */
    this.sortHistory = ["original-order"];
    var classNames;
    for (classNames in env.modes) {
      this._initLayoutMode(classNames);
    }
  };
  /**
   * @return {undefined}
   */
  Outlayer.prototype.reloadItems = function() {
    /** @type {number} */
    this.itemGUID = 0;
    widget.prototype.reloadItems.call(this);
  };
  /**
   * @return {?}
   */
  Outlayer.prototype._itemize = function() {
    var params = widget.prototype._itemize.apply(this, arguments);
    /** @type {number} */
    var i = 0;
    var l = params.length;
    for (;l > i;i++) {
      var param = params[i];
      /** @type {number} */
      param.id = this.itemGUID++;
    }
    return this._updateItemsSortData(params), params;
  };
  /**
   * @param {string} i
   * @return {undefined}
   */
  Outlayer.prototype._initLayoutMode = function(i) {
    var plugin = env.modes[i];
    var attributes = this.options[i] || {};
    this.options[i] = plugin.options ? $.extend(plugin.options, attributes) : attributes;
    this.modes[i] = new plugin(this);
  };
  /**
   * @return {?}
   */
  Outlayer.prototype.layout = function() {
    return!this._isLayoutInited && this.options.isInitLayout ? void this.arrange() : void this._layout();
  };
  /**
   * @return {undefined}
   */
  Outlayer.prototype._layout = function() {
    var deepDataAndEvents = this._getIsInstant();
    this._resetLayout();
    this._manageStamps();
    this.layoutItems(this.filteredItems, deepDataAndEvents);
    /** @type {boolean} */
    this._isLayoutInited = true;
  };
  /**
   * @param {Object} name
   * @return {undefined}
   */
  Outlayer.prototype.arrange = function(name) {
    /**
     * @return {undefined}
     */
    function run() {
      self.reveal(opt.needReveal);
      self.hide(opt.needHide);
    }
    this.option(name);
    this._getIsInstant();
    var opt = this._filter(this.items);
    this.filteredItems = opt.matches;
    var self = this;
    this._bindArrangeComplete();
    if (this._isInstant) {
      this._noTransition(run);
    } else {
      run();
    }
    this._sort();
    this._layout();
  };
  /** @type {function (Object): undefined} */
  Outlayer.prototype._init = Outlayer.prototype.arrange;
  /**
   * @return {?}
   */
  Outlayer.prototype._getIsInstant = function() {
    var LiveScriptMode = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
    return this._isInstant = LiveScriptMode, LiveScriptMode;
  };
  /**
   * @return {undefined}
   */
  Outlayer.prototype._bindArrangeComplete = function() {
    /**
     * @return {undefined}
     */
    function throttledUpdate() {
      if (b) {
        if (c) {
          if (d) {
            logEmitter.emitEvent("arrangeComplete", [logEmitter.filteredItems]);
          }
        }
      }
    }
    var b;
    var c;
    var d;
    var logEmitter = this;
    this.once("layoutComplete", function() {
      /** @type {boolean} */
      b = true;
      throttledUpdate();
    });
    this.once("hideComplete", function() {
      /** @type {boolean} */
      c = true;
      throttledUpdate();
    });
    this.once("revealComplete", function() {
      /** @type {boolean} */
      d = true;
      throttledUpdate();
    });
  };
  /**
   * @param {Array} value
   * @return {?}
   */
  Outlayer.prototype._filter = function(value) {
    var which = this.options.filter;
    which = which || "*";
    /** @type {Array} */
    var matched = [];
    /** @type {Array} */
    var caseSensitive = [];
    /** @type {Array} */
    var beginswith = [];
    var keys = this._getFilterTest(which);
    /** @type {number} */
    var y = 0;
    var x = value.length;
    for (;x > y;y++) {
      var item = value[y];
      if (!item.isIgnored) {
        var properties = keys(item);
        if (properties) {
          matched.push(item);
        }
        if (properties && item.isHidden) {
          caseSensitive.push(item);
        } else {
          if (!properties) {
            if (!item.isHidden) {
              beginswith.push(item);
            }
          }
        }
      }
    }
    return{
      matches : matched,
      needReveal : caseSensitive,
      needHide : beginswith
    };
  };
  /**
   * @param {string} callback
   * @return {?}
   */
  Outlayer.prototype._getFilterTest = function(callback) {
    return jQuery && this.options.isJQueryFiltering ? function(types) {
      return jQuery(types.element).is(callback);
    } : "function" == typeof callback ? function(v) {
      return callback(v.element);
    } : function(result) {
      return next(result.element, callback);
    };
  };
  /**
   * @param {?} value
   * @return {undefined}
   */
  Outlayer.prototype.updateSortData = function(value) {
    var count;
    if (value) {
      value = $.makeArray(value);
      count = this.getItems(value);
    } else {
      count = this.items;
    }
    this._getSorters();
    this._updateItemsSortData(count);
  };
  /**
   * @return {undefined}
   */
  Outlayer.prototype._getSorters = function() {
    var vals = this.options.getSortData;
    var key;
    for (key in vals) {
      var val = vals[key];
      this._sorters[key] = deepClone(val);
    }
  };
  /**
   * @param {Function} params
   * @return {undefined}
   */
  Outlayer.prototype._updateItemsSortData = function(params) {
    var vl = params && params.length;
    /** @type {number} */
    var i = 0;
    for (;vl && vl > i;i++) {
      var param = params[i];
      param.updateSortData();
    }
  };
  var deepClone = function() {
    /**
     * @param {Function} v
     * @return {?}
     */
    function set(v) {
      if ("string" != typeof v) {
        return v;
      }
      var args = trim(v).split(" ");
      var next = args[0];
      var units = next.match(/^\[(.+)\]$/);
      var memory = units && units[1];
      var isObject = fire(memory, next);
      var callback = Outlayer.sortDataParsers[args[1]];
      return v = callback ? function(el) {
        return el && callback(isObject(el));
      } : function(src) {
        return src && isObject(src);
      };
    }
    /**
     * @param {boolean} name
     * @param {?} e
     * @return {?}
     */
    function fire(name, e) {
      var names;
      return names = name ? function(elem) {
        return elem.getAttribute(name);
      } : function(ui) {
        var node = ui.querySelector(e);
        return node && fun(node);
      };
    }
    return set;
  }();
  Outlayer.sortDataParsers = {
    /**
     * @param {?} value
     * @return {?}
     */
    parseInt : function(value) {
      return parseInt(value, 10);
    },
    /**
     * @param {?} value
     * @return {?}
     */
    parseFloat : function(value) {
      return parseFloat(value);
    }
  };
  /**
   * @return {undefined}
   */
  Outlayer.prototype._sort = function() {
    var source = this.options.sortBy;
    if (source) {
      /** @type {Array} */
      var syntax = [].concat.apply(source, this.sortHistory);
      var recursive = some(syntax, this.options.sortAscending);
      this.filteredItems.sort(recursive);
      if (source != this.sortHistory[0]) {
        this.sortHistory.unshift(source);
      }
    }
  };
  /**
   * @return {?}
   */
  Outlayer.prototype._mode = function() {
    var i = this.options.layoutMode;
    var self = this.modes[i];
    if (!self) {
      throw Error("No layout mode: " + i);
    }
    return self.options = this.options[i], self;
  };
  /**
   * @return {undefined}
   */
  Outlayer.prototype._resetLayout = function() {
    widget.prototype._resetLayout.call(this);
    this._mode()._resetLayout();
  };
  /**
   * @param {?} compareFn
   * @return {?}
   */
  Outlayer.prototype._getItemLayoutPosition = function(compareFn) {
    return this._mode()._getItemLayoutPosition(compareFn);
  };
  /**
   * @param {Element} stamp
   * @return {undefined}
   */
  Outlayer.prototype._manageStamp = function(stamp) {
    this._mode()._manageStamp(stamp);
  };
  /**
   * @return {?}
   */
  Outlayer.prototype._getContainerSize = function() {
    return this._mode()._getContainerSize();
  };
  /**
   * @return {?}
   */
  Outlayer.prototype.needsResizeLayout = function() {
    return this._mode().needsResizeLayout();
  };
  /**
   * @param {?} elems
   * @return {undefined}
   */
  Outlayer.prototype.appended = function(elems) {
    var items = this.addItems(elems);
    if (items.length) {
      var r = this._filterRevealAdded(items);
      this.filteredItems = this.filteredItems.concat(r);
    }
  };
  /**
   * @param {?} elems
   * @return {undefined}
   */
  Outlayer.prototype.prepended = function(elems) {
    var items = this._itemize(elems);
    if (items.length) {
      this._resetLayout();
      this._manageStamps();
      var r = this._filterRevealAdded(items);
      this.layoutItems(this.filteredItems);
      this.filteredItems = r.concat(this.filteredItems);
      this.items = items.concat(this.items);
    }
  };
  /**
   * @param {?} value
   * @return {?}
   */
  Outlayer.prototype._filterRevealAdded = function(value) {
    var set = this._filter(value);
    return this.hide(set.needHide), this.reveal(set.matches), this.layoutItems(set.matches, true), set.matches;
  };
  /**
   * @param {?} elem
   * @return {undefined}
   */
  Outlayer.prototype.insert = function(elem) {
    var q = this.addItems(elem);
    if (q.length) {
      var i;
      var component;
      var l = q.length;
      /** @type {number} */
      i = 0;
      for (;l > i;i++) {
        component = q[i];
        this.element.appendChild(component.element);
      }
      var items = this._filter(q).matches;
      /** @type {number} */
      i = 0;
      for (;l > i;i++) {
        /** @type {boolean} */
        q[i].isLayoutInstant = true;
      }
      this.arrange();
      /** @type {number} */
      i = 0;
      for (;l > i;i++) {
        delete q[i].isLayoutInstant;
      }
      this.reveal(items);
    }
  };
  /** @type {function (string): undefined} */
  var _super = Outlayer.prototype.remove;
  return Outlayer.prototype.remove = function(name) {
    name = $.makeArray(name);
    var items = this.getItems(name);
    _super.call(this, name);
    var item = items && items.length;
    if (item) {
      /** @type {number} */
      var position = 0;
      for (;item > position;position++) {
        var row = items[position];
        $.removeFrom(this.filteredItems, row);
      }
    }
  }, Outlayer.prototype.shuffle = function() {
    /** @type {number} */
    var i = 0;
    var len = this.items.length;
    for (;len > i;i++) {
      var self = this.items[i];
      /** @type {number} */
      self.sortData.random = Math.random();
    }
    /** @type {string} */
    this.options.sortBy = "random";
    this._sort();
    this._layout();
  }, Outlayer.prototype._noTransition = function(callback) {
    var a = this.options.transitionDuration;
    /** @type {number} */
    this.options.transitionDuration = 0;
    var o = callback.call(this);
    return this.options.transitionDuration = a, o;
  }, Outlayer.prototype.getFilteredItemElements = function() {
    /** @type {Array} */
    var element_table_name_array = [];
    /** @type {number} */
    var count = 0;
    var thumbsCount = this.filteredItems.length;
    for (;thumbsCount > count;count++) {
      element_table_name_array.push(this.filteredItems[count].element);
    }
    return element_table_name_array;
  }, Outlayer;
}), function(factory) {
  if ("function" == typeof define && define.amd) {
    define(["jquery"], factory);
  } else {
    factory(jQuery);
  }
}(function($, string) {
  /**
   * @param {Node} options
   * @param {Function} callback
   * @param {?} element
   * @return {undefined}
   */
  $.infinitescroll = function(options, callback, element) {
    this.element = $(element);
    if (!this._create(options, callback)) {
      /** @type {boolean} */
      this.failed = true;
    }
  };
  $.infinitescroll.defaults = {
    loading : {
      /** @type {Function} */
      finished : string,
      finishedMsg : "<em>Congratulations, you've reached the end of the internet.</em>",
      img : "data:image/gif;base64,R0lGODlh3AATAPQeAPDy+MnQ6LW/4N3h8MzT6rjC4sTM5r/I5NHX7N7j8c7U6tvg8OLl8uXo9Ojr9b3G5MfP6Ovu9tPZ7PT1+vX2+tbb7vf4+8/W69jd7rC73vn5/O/x+K243ai02////wAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQECgD/ACwAAAAA3AATAAAF/6AnjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEj0BAScpHLJbDqf0Kh0Sq1ar9isdioItAKGw+MAKYMFhbF63CW438f0mg1R2O8EuXj/aOPtaHx7fn96goR4hmuId4qDdX95c4+RBIGCB4yAjpmQhZN0YGYGXitdZBIVGAsLoq4BBKQDswm1CQRkcG6ytrYKubq8vbfAcMK9v7q7EMO1ycrHvsW6zcTKsczNz8HZw9vG3cjTsMIYqQkCLBwHCgsMDQ4RDAYIqfYSFxDxEfz88/X38Onr16+Bp4ADCco7eC8hQYMAEe57yNCew4IVBU7EGNDiRn8Z831cGLHhSIgdFf9chIeBg7oA7gjaWUWTVQAGE3LqBDCTlc9WOHfm7PkTqNCh54rePDqB6M+lR536hCpUqs2gVZM+xbrTqtGoWqdy1emValeXKzggYBBB5y1acFNZmEvXAoN2cGfJrTv3bl69Ffj2xZt3L1+/fw3XRVw4sGDGcR0fJhxZsF3KtBTThZxZ8mLMgC3fRatCbYMNFCzwLEqLgE4NsDWs/tvqdezZf13Hvk2A9Szdu2X3pg18N+68xXn7rh1c+PLksI/Dhe6cuO3ow3NfV92bdArTqC2Ebd3A8vjf5QWfH6Bg7Nz17c2fj69+fnq+8N2Lty+fuP78/eV2X13neIcCeBRwxorbZrA1ANoCDGrgoG8RTshahQ9iSKEEzUmYIYfNWViUhheCGJyIP5E4oom7WWjgCeBFAJNv1DVV01MAdJhhjdkplWNzO/5oXI846njjVEIqR2OS2B1pE5PVscajkxhMycqLJghQSwT40PgfAl4GqNSXYdZXJn5gSkmmmmJu1aZYb14V51do+pTOCmA40AqVCIhG5IJ9PvYnhIFOxmdqhpaI6GeHCtpooisuutmg+Eg62KOMKuqoTaXgicQWoIYq6qiklmoqFV0UoeqqrLbq6quwxirrrLTWauutJ4QAACH5BAUKABwALAcABADOAAsAAAX/IPd0D2dyRCoUp/k8gpHOKtseR9yiSmGbuBykler9XLAhkbDavXTL5k2oqFqNOxzUZPU5YYZd1XsD72rZpBjbeh52mSNnMSC8lwblKZGwi+0QfIJ8CncnCoCDgoVnBHmKfByGJimPkIwtiAeBkH6ZHJaKmCeVnKKTHIihg5KNq4uoqmEtcRUtEREMBggtEr4QDrjCuRC8h7/BwxENeicSF8DKy82pyNLMOxzWygzFmdvD2L3P0dze4+Xh1Arkyepi7dfFvvTtLQkZBC0T/FX3CRgCMOBHsJ+EHYQY7OinAGECgQsB+Lu3AOK+CewcWjwxQeJBihtNGHSoQOE+iQ3//4XkwBBhRZMcUS6YSXOAwIL8PGqEaSJCiYt9SNoCmnJPAgUVLChdaoFBURN8MAzl2PQphwQLfDFd6lTowglHve6rKpbjhK7/pG5VinZP1qkiz1rl4+tr2LRwWU64cFEihwEtZgbgR1UiHaMVvxpOSwBA37kzGz9e8G+B5MIEKLutOGEsAH2ATQwYfTmuX8aETWdGPZmiZcccNSzeTCA1Sw0bdiitC7LBWgu8jQr8HRzqgpK6gX88QbrB14z/kF+ELpwB8eVQj/JkqdylAudji/+ts3039vEEfK8Vz2dlvxZKG0CmbkKDBvllRd6fCzDvBLKBDSCeffhRJEFebFk1k/Mv9jVIoIJZSeBggwUaNeB+Qk34IE0cXlihcfRxkOAJFFhwGmKlmWDiakZhUJtnLBpnWWcnKaAZcxI0piFGGLBm1mc90kajSCveeBVWKeYEoU2wqeaQi0PetoE+rr14EpVC7oAbAUHqhYExbn2XHHsVqbcVew9tx8+XJKk5AZsqqdlddGpqAKdbAYBn1pcczmSTdWvdmZ17c1b3FZ99vnTdCRFM8OEcAhLwm1NdXnWcBBSMRWmfkWZqVlsmLIiAp/o1gGV2vpS4lalGYsUOqXrddcKCmK61aZ8SjEpUpVFVoCpTj4r661Km7kBHjrDyc1RAIQAAIfkEBQoAGwAsBwAEAM4ACwAABf/gtmUCd4goQQgFKj6PYKi0yrrbc8i4ohQt12EHcal+MNSQiCP8gigdz7iCioaCIvUmZLp8QBzW0EN2vSlCuDtFKaq4RyHzQLEKZNdiQDhRDVooCwkbfm59EAmKi4SGIm+AjIsKjhsqB4mSjT2IOIOUnICeCaB/mZKFNTSRmqVpmJqklSqskq6PfYYCDwYHDC4REQwGCBLGxxIQDsHMwhAIX8bKzcENgSLGF9PU1j3Sy9zX2NrgzQziChLk1BHWxcjf7N046tvN82715czn9Pryz6Ilc4ACj4EBOCZM8KEnAYYADBRKnACAYUMFv1wotIhCEcaJCisqwJFgAUSQGyX/kCSVUUTIdKMwJlyo0oXHlhskwrTJciZHEXsgaqS4s6PJiCAr1uzYU8kBBSgnWFqpoMJMUjGtDmUwkmfVmVypakWhEKvXsS4nhLW5wNjVroJIoc05wSzTr0PtiigpYe4EC2vj4iWrFu5euWIMRBhacaVJhYQBEFjA9jHjyQ0xEABwGceGAZYjY0YBOrRLCxUp29QM+bRkx5s7ZyYgVbTqwwti2ybJ+vLtDYpycyZbYOlptxdx0kV+V7lC5iJAyyRrwYKxAdiz82ng0/jnAdMJFz0cPi104Ec1Vj9/M6F173vKL/feXv156dw11tlqeMMnv4V5Ap53GmjQQH97nFfg+IFiucfgRX5Z8KAgbUlQ4IULIlghhhdOSB6AgX0IVn8eReghen3NRIBsRgnH4l4LuEidZBjwRpt6NM5WGwoW0KSjCwX6yJSMab2GwwAPDXfaBCtWpluRTQqC5JM5oUZAjUNS+VeOLWpJEQ7VYQANW0INJSZVDFSnZphjSikfmzE5N4EEbQI1QJmnWXCmHulRp2edwDXF43txukenJwvI9xyg9Q26Z3MzGUcBYFEChZh6DVTq34AU8Iflh51Sd+CnKFYQ6mmZkhqfBKfSxZWqA9DZanWjxmhrWwi0qtCrt/43K6WqVjjpmhIqgEGvculaGKklKstAACEAACH5BAUKABwALAcABADOAAsAAAX/ICdyQmaMYyAUqPgIBiHPxNpy79kqRXH8wAPsRmDdXpAWgWdEIYm2llCHqjVHU+jjJkwqBTecwItShMXkEfNWSh8e1NGAcLgpDGlRgk7EJ/6Ae3VKfoF/fDuFhohVeDeCfXkcCQqDVQcQhn+VNDOYmpSWaoqBlUSfmowjEA+iEAEGDRGztAwGCDcXEA60tXEiCrq8vREMEBLIyRLCxMWSHMzExnbRvQ2Sy7vN0zvVtNfU2tLY3rPgLdnDvca4VQS/Cpk3ABwSLQkYAQwT/P309vcI7OvXr94jBQMJ/nskkGA/BQBRLNDncAIAiDcG6LsxAWOLiQzmeURBKWSLCQbv/1F0eDGinJUKR47YY1IEgQASKk7Yc7ACRwZm7mHweRJoz59BJUogisKCUaFMR0x4SlJBVBFTk8pZivTR0K73rN5wqlXEAq5Fy3IYgHbEzQ0nLy4QSoCjXLoom96VOJEeCosK5n4kkFfqXjl94wa+l1gvAcGICbewAOAxY8l/Ky/QhAGz4cUkGxu2HNozhwMGBnCUqUdBg9UuW9eUynqSwLHIBujePef1ZGQZXcM+OFuEBeBhi3OYgLyqcuaxbT9vLkf4SeqyWxSQpKGB2gQpm1KdWbu72rPRzR9Ne2Nu9Kzr/1Jqj0yD/fvqP4aXOt5sW/5qsXXVcv1Nsp8IBUAmgswGF3llGgeU1YVXXKTN1FlhWFXW3gIE+DVChApysACHHo7Q4A35lLichh+ROBmLKAzgYmYEYDAhCgxKGOOMn4WR4kkDaoBBOxJtdNKQxFmg5JIWIBnQc07GaORfUY4AEkdV6jHlCEISSZ5yTXpp1pbGZbkWmcuZmQCaE6iJ0FhjMaDjTMsgZaNEHFRAQVp3bqXnZED1qYcECOz5V6BhSWCoVJQIKuKQi2KFKEkEFAqoAo7uYSmO3jk61wUUMKmknJ4SGimBmAa0qVQBhAAAIfkEBQoAGwAsBwAEAM4ACwAABf/gJm5FmRlEqhJC+bywgK5pO4rHI0D3pii22+Mg6/0Ej96weCMAk7cDkXf7lZTTnrMl7eaYoy10JN0ZFdco0XAuvKI6qkgVFJXYNwjkIBcNBgR8TQoGfRsJCRuCYYQQiI+ICosiCoGOkIiKfSl8mJkHZ4U9kZMbKaI3pKGXmJKrngmug4WwkhA0lrCBWgYFCCMQFwoQDRHGxwwGCBLMzRLEx8iGzMMO0cYNeCMKzBDW19lnF9DXDIY/48Xg093f0Q3s1dcR8OLe8+Y91OTv5wrj7o7B+7VNQqABIoRVCMBggsOHE36kSoCBIcSH3EbFangxogJYFi8CkJhqQciLJEf/LDDJEeJIBT0GsOwYUYJGBS0fjpQAMidGmyVP6sx4Y6VQhzs9VUwkwqaCCh0tmKoFtSMDmBOf9phg4SrVrROuasRQAaxXpVUhdsU6IsECZlvX3kwLUWzRt0BHOLTbNlbZG3vZinArge5Dvn7wbqtQkSYAAgtKmnSsYKVKo2AfW048uaPmG386i4Q8EQMBAIAnfB7xBxBqvapJ9zX9WgRS2YMpnvYMGdPK3aMjt/3dUcNI4blpj7iwkMFWDXDvSmgAlijrt9RTR78+PS6z1uAJZIe93Q8g5zcsWCi/4Y+C8bah5zUv3vv89uft30QP23punGCx5954oBBwnwYaNCDY/wYrsYeggnM9B2Fpf8GG2CEUVWhbWAtGouEGDy7Y4IEJVrbSiXghqGKIo7z1IVcXIkKWWR361QOLWWnIhwERpLaaCCee5iMBGJQmJGyPFTnbkfHVZGRtIGrg5HALEJAZbu39BuUEUmq1JJQIPtZilY5hGeSWsSk52G9XqsmgljdIcABytq13HyIM6RcUA+r1qZ4EBF3WHWB29tBgAzRhEGhig8KmqKFv8SeCeo+mgsF7YFXa1qWSbkDpom/mqR1PmHCqJ3fwNRVXjC7S6CZhFVCQ2lWvZiirhQq42SACt25IK2hv8TprriUV1usGgeka7LFcNmCldMLi6qZMgFLgpw16Cipb7bC1knXsBiEAACH5BAUKABsALAcABADOAAsAAAX/4FZsJPkUmUGsLCEUTywXglFuSg7fW1xAvNWLF6sFFcPb42C8EZCj24EJdCp2yoegWsolS0Uu6fmamg8n8YYcLU2bXSiRaXMGvqV6/KAeJAh8VgZqCX+BexCFioWAYgqNi4qAR4ORhRuHY408jAeUhAmYYiuVlpiflqGZa5CWkzc5fKmbbhIpsAoQDRG8vQwQCBLCwxK6vb5qwhfGxxENahvCEA7NzskSy7vNzzzK09W/PNHF1NvX2dXcN8K55cfh69Luveol3vO8zwi4Yhj+AQwmCBw4IYclDAAJDlQggVOChAoLKkgFkSCAHDwWLKhIEOONARsDKryogFPIiAUb/95gJNIiw4wnI778GFPhzBKFOAq8qLJEhQpiNArjMcHCmlTCUDIouTKBhApELSxFWiGiVKY4E2CAekPgUphDu0742nRrVLJZnyrFSqKQ2ohoSYAMW6IoDpNJ4bLdILTnAj8KUF7UeENjAKuDyxIgOuGiOI0EBBMgLNew5AUrDTMGsFixwBIaNCQuAXJB57qNJ2OWm2Aj4skwCQCIyNkhhtMkdsIuodE0AN4LJDRgfLPtn5YDLdBlraAByuUbBgxQwICxMOnYpVOPej074OFdlfc0TqC62OIbcppHjV4o+LrieWhfT8JC/I/T6W8oCl29vQ0XjLdBaA3s1RcPBO7lFvpX8BVoG4O5jTXRQRDuJ6FDTzEWF1/BCZhgbyAKE9qICYLloQYOFtahVRsWYlZ4KQJHlwHS/IYaZ6sZd9tmu5HQm2xi1UaTbzxYwJk/wBF5g5EEYOBZeEfGZmNdFyFZmZIR4jikbLThlh5kUUVJGmRT7sekkziRWUIACABk3T4qCsedgO4xhgGcY7q5pHJ4klBBTQRJ0CeHcoYHHUh6wgfdn9uJdSdMiebGJ0zUPTcoS286FCkrZxnYoYYKWLkBowhQoBeaOlZAgVhLidrXqg2GiqpQpZ4apwSwRtjqrB3muoF9BboaXKmshlqWqsWiGt2wphJkQbAU5hoCACH5BAUKABsALAcABADOAAsAAAX/oGFw2WZuT5oZROsSQnGaKjRvilI893MItlNOJ5v5gDcFrHhKIWcEYu/xFEqNv6B1N62aclysF7fsZYe5aOx2yL5aAUGSaT1oTYMBwQ5VGCAJgYIJCnx1gIOBhXdwiIl7d0p2iYGQUAQBjoOFSQR/lIQHnZ+Ue6OagqYzSqSJi5eTpTxGcjcSChANEbu8DBAIEsHBChe5vL13G7fFuscRDcnKuM3H0La3EA7Oz8kKEsXazr7Cw9/Gztar5uHHvte47MjktznZ2w0G1+D3BgirAqJmJMAQgMGEgwgn5Ei0gKDBhBMALGRYEOJBb5QcWlQo4cbAihZz3GgIMqFEBSM1/4ZEOWPAgpIIJXYU+PIhRG8ja1qU6VHlzZknJNQ6UanCjQkWCIGSUGEjAwVLjc44+DTqUQtPPS5gejUrTa5TJ3g9sWCr1BNUWZI161StiQUDmLYdGfesibQ3XMq1OPYthrwuA2yU2LBs2cBHIypYQPPlYAKFD5cVvNPtW8eVGbdcQADATsiNO4cFAPkvHpedPzc8kUcPgNGgZ5RNDZG05reoE9s2vSEP79MEGiQGy1qP8LA4ZcdtsJE48ONoLTBtTV0B9LsTnPceoIDBDQvS7W7vfjVY3q3eZ4A339J4eaAmKqU/sV58HvJh2RcnIBsDUw0ABqhBA5aV5V9XUFGiHfVeAiWwoFgJJrIXRH1tEMiDFV4oHoAEGlaWhgIGSGBO2nFomYY3mKjVglidaNYJGJDkWW2xxTfbjCbVaOGNqoX2GloR8ZeTaECS9pthRGJH2g0b3Agbk6hNANtteHD2GJUucfajCQBy5OOTQ25ZgUPvaVVQmbKh9510/qQpwXx3SQdfk8tZJOd5b6JJFplT3ZnmmX3qd5l1eg5q00HrtUkUn0AKaiGjClSAgKLYZcgWXwocGRcCFGCKwSB6ceqphwmYRUFYT/1WKlOdUpipmxW0mlCqHjYkAaeoZlqrqZ4qd+upQKaapn/AmgAegZ8KUtYtFAQQAgAh+QQFCgAbACwHAAQAzgALAAAF/+C2PUcmiCiZGUTrEkKBis8jQEquKwU5HyXIbEPgyX7BYa5wTNmEMwWsSXsqFbEh8DYs9mrgGjdK6GkPY5GOeU6ryz7UFopSQEzygOGhJBjoIgMDBAcBM0V/CYqLCQqFOwobiYyKjn2TlI6GKC2YjJZknouaZAcQlJUHl6eooJwKooobqoewrJSEmyKdt59NhRKFMxLEEA4RyMkMEAjDEhfGycqAG8TQx9IRDRDE3d3R2ctD1RLg0ttKEnbY5wZD3+zJ6M7X2RHi9Oby7u/r9g38UFjTh2xZJBEBMDAboogAgwkQI07IMUORwocSJwCgWDFBAIwZOaJIsOBjRogKJP8wTODw5ESVHVtm3AhzpEeQElOuNDlTZ0ycEUWKWFASqEahGwYUPbnxoAgEdlYSqDBkgoUNClAlIHbSAoOsqCRQnQHxq1axVb06FWFxLIqyaze0Tft1JVqyE+pWXMD1pF6bYl3+HTqAWNW8cRUFzmih0ZAAB2oGKukSAAGGRHWJgLiR6AylBLpuHKKUMlMCngMpDSAa9QIUggZVVvDaJobLeC3XZpvgNgCmtPcuwP3WgmXSq4do0DC6o2/guzcseECtUoO0hmcsGKDgOt7ssBd07wqesAIGZC1YIBa7PQHvb1+SFo+++HrJSQfB33xfav3i5eX3Hnb4CTJgegEq8tH/YQEOcIJzbm2G2EoYRLgBXFpVmFYDcREV4HIcnmUhiGBRouEMJGJGzHIspqgdXxK0yCKHRNXoIX4uorCdTyjkyNtdPWrA4Up82EbAbzMRxxZRR54WXVLDIRmRcag5d2R6ugl3ZXzNhTecchpMhIGVAKAYpgJjjsSklBEd99maZoo535ZvdamjBEpusJyctg3h4X8XqodBMx0tiNeg/oGJaKGABpogS40KSqiaEgBqlQWLUtqoVQnytekEjzo0hHqhRorppOZt2p923M2AAV+oBtpAnnPNoB6HaU6mAAIU+IXmi3j2mtFXuUoHKwXpzVrsjcgGOauKEjQrwq157hitGq2NoWmjh7z6Wmxb0m5w66+2VRAuXN/yFUAIACH5BAUKABsALAcABADOAAsAAAX/4CZuRiaM45MZqBgIRbs9AqTcuFLE7VHLOh7KB5ERdjJaEaU4ClO/lgKWjKKcMiJQ8KgumcieVdQMD8cbBeuAkkC6LYLhOxoQ2PF5Ys9PKPBMen17f0CCg4VSh32JV4t8jSNqEIOEgJKPlkYBlJWRInKdiJdkmQlvKAsLBxdABA4RsbIMBggtEhcQsLKxDBC2TAS6vLENdJLDxMZAubu8vjIbzcQRtMzJz79S08oQEt/guNiyy7fcvMbh4OezdAvGrakLAQwyABsELQkY9BP+//ckyPDD4J9BfAMh1GsBoImMeQUN+lMgUJ9CiRMa5msxoB9Gh/o8GmxYMZXIgxtR/yQ46S/gQAURR0pDwYDfywoyLPip5AdnCwsMFPBU4BPFhKBDi444quCmDKZOfwZ9KEGpCKgcN1jdALSpPqIYsabS+nSqvqplvYqQYAeDPgwKwjaMtiDl0oaqUAyo+3TuWwUAMPpVCfee0cEjVBGQq2ABx7oTWmQk4FglZMGN9fGVDMCuiH2AOVOu/PmyxM630gwM0CCn6q8LjVJ8GXvpa5Uwn95OTC/nNxkda1/dLSK475IjCD6dHbK1ZOa4hXP9DXs5chJ00UpVm5xo2qRpoxptwF2E4/IbJpB/SDz9+q9b1aNfQH08+p4a8uvX8B53fLP+ycAfemjsRUBgp1H20K+BghHgVgt1GXZXZpZ5lt4ECjxYR4ScUWiShEtZqBiIInRGWnERNnjiBglw+JyGnxUmGowsyiiZg189lNtPGACjV2+S9UjbU0JWF6SPvEk3QZEqsZYTk3UAaRSUnznJI5LmESCdBVSyaOWUWLK4I5gDUYVeV1T9l+FZClCAUVA09uSmRHBCKAECFEhW51ht6rnmWBXkaR+NjuHpJ40D3DmnQXt2F+ihZxlqVKOfQRACACH5BAUKABwALAcABADOAAsAAAX/ICdyUCkUo/g8mUG8MCGkKgspeC6j6XEIEBpBUeCNfECaglBcOVfJFK7YQwZHQ6JRZBUqTrSuVEuD3nI45pYjFuWKvjjSkCoRaBUMWxkwBGgJCXspQ36Bh4EEB0oKhoiBgyNLjo8Ki4QElIiWfJqHnISNEI+Ql5J9o6SgkqKkgqYihamPkW6oNBgSfiMMDQkGCBLCwxIQDhHIyQwQCGMKxsnKVyPCF9DREQ3MxMPX0cu4wt7J2uHWx9jlKd3o39MiuefYEcvNkuLt5O8c1ePI2tyELXGQwoGDAQf+iEC2xByDCRAjTlAgIUWCBRgCPJQ4AQBFXAs0coT40WLIjRxL/47AcHLkxIomRXL0CHPERZkpa4q4iVKiyp0tR/7kwHMkTUBBJR5dOCEBAVcKKtCAyOHpowXCpk7goABqBZdcvWploACpBKkpIJI1q5OD2rIWE0R1uTZu1LFwbWL9OlKuWb4c6+o9i3dEgw0RCGDUG9KlRw56gDY2qmCByZBaASi+TACA0TucAaTteCcy0ZuOK3N2vJlx58+LRQyY3Xm0ZsgjZg+oPQLi7dUcNXi0LOJw1pgNtB7XG6CBy+U75SYfPTSQAgZTNUDnQHt67wnbZyvwLgKiMN3oCZB3C76tdewpLFgIP2C88rbi4Y+QT3+8S5USMICZXWj1pkEDeUU3lOYGB3alSoEiMIjgX4WlgNF2EibIwQIXauWXSRg2SAOHIU5IIIMoZkhhWiJaiFVbKo6AQEgQXrTAazO1JhkBrBG3Y2Y6EsUhaGn95hprSN0oWpFE7rhkeaQBchGOEWnwEmc0uKWZj0LeuNV3W4Y2lZHFlQCSRjTIl8uZ+kG5HU/3sRlnTG2ytyadytnD3HrmuRcSn+0h1dycexIK1KCjYaCnjCCVqOFFJTZ5GkUUjESWaUIKU2lgCmAKKQIUjHapXRKE+t2og1VgankNYnohqKJ2CmKplso6GKz7WYCgqxeuyoF8u9IQAgA7",
      msg : null,
      msgText : "<em>Loading the next set of posts...</em>",
      selector : null,
      speed : "fast",
      /** @type {Function} */
      start : string
    },
    state : {
      isDuringAjax : false,
      isInvalidPage : false,
      isDestroyed : false,
      isDone : false,
      isPaused : false,
      isBeyondMaxPage : false,
      currPage : 1
    },
    debug : false,
    /** @type {Function} */
    behavior : string,
    binder : $(window),
    nextSelector : "div.navigation a:first",
    navSelector : "div.navigation",
    contentSelector : null,
    extraScrollPx : 150,
    itemSelector : "div.post",
    animate : false,
    /** @type {Function} */
    pathParse : string,
    dataType : "html",
    appendCallback : true,
    bufferPx : 40,
    /**
     * @return {undefined}
     */
    errorCallback : function() {
    },
    infid : 0,
    /** @type {Function} */
    pixelsFromNavToBottom : string,
    /** @type {Function} */
    path : string,
    prefill : false,
    /** @type {Function} */
    maxPage : string
  };
  $.infinitescroll.prototype = {
    /**
     * @param {string} binding
     * @return {?}
     */
    _binding : function(binding) {
      var instance = this;
      var opts = instance.options;
      return opts.v = "2.0b2.120520", opts.behavior && this["_binding_" + opts.behavior] !== string ? void this["_binding_" + opts.behavior].call(this) : "bind" !== binding && "unbind" !== binding ? (this._debug("Binding value  " + binding + " not valid"), false) : ("unbind" === binding ? this.options.binder.unbind("smartscroll.infscr." + instance.options.infid) : this.options.binder[binding]("smartscroll.infscr." + instance.options.infid, function() {
        instance.scroll();
      }), void this._debug("Binding", binding));
    },
    /**
     * @param {Node} options
     * @param {Function} callback
     * @return {?}
     */
    _create : function(options, callback) {
      var opts = $.extend(true, {}, $.infinitescroll.defaults, options);
      this.options = opts;
      var $window = $(window);
      var model = this;
      if (!model._validate(options)) {
        return false;
      }
      var path = $(opts.nextSelector).attr("href");
      if (!path) {
        return this._debug("Navigation selector not found"), false;
      }
      opts.path = opts.path || this._determinepath(path);
      opts.contentSelector = opts.contentSelector || this.element;
      opts.loading.selector = opts.loading.selector || opts.contentSelector;
      opts.loading.msg = opts.loading.msg || $('<div id="infscr-loading"><img alt="Loading..." src="' + opts.loading.img + '" /><div>' + opts.loading.msgText + "</div></div>");
      (new Image).src = opts.loading.img;
      if (opts.pixelsFromNavToBottom === string) {
        /** @type {number} */
        opts.pixelsFromNavToBottom = $(document).height() - $(opts.navSelector).offset().top;
        this._debug("pixelsFromNavToBottom: " + opts.pixelsFromNavToBottom);
      }
      var _internal = this;
      return opts.loading.start = opts.loading.start || function() {
        $(opts.navSelector).hide();
        opts.loading.msg.appendTo(opts.loading.selector).fadeIn(opts.loading.speed, $.proxy(function() {
          this.beginAjax(opts);
        }, _internal));
      }, opts.loading.finished = opts.loading.finished || function() {
        if (!opts.state.isBeyondMaxPage) {
          opts.loading.msg.fadeOut(opts.loading.speed);
        }
      }, opts.callback = function(instance, err, idx) {
        if (opts.behavior) {
          if (instance["_callback_" + opts.behavior] !== string) {
            instance["_callback_" + opts.behavior].call($(opts.contentSelector)[0], err, idx);
          }
        }
        if (callback) {
          callback.call($(opts.contentSelector)[0], err, opts, idx);
        }
        if (opts.prefill) {
          $window.bind("resize.infinite-scroll", instance._prefill);
        }
      }, options.debug && (!Function.prototype.bind || ("object" != typeof console && "function" != typeof console || ("object" != typeof console.log || ["log", "info", "warn", "error", "assert", "dir", "clear", "profile", "profileEnd"].forEach(function(method) {
        /** @type {Function} */
        console[method] = this.call(console[method], console);
      }, Function.prototype.bind)))), this._setup(), opts.prefill && this._prefill(), true;
    },
    /**
     * @return {undefined}
     */
    _prefill : function() {
      /**
       * @return {?}
       */
      function needsPrefill() {
        return $(instance.options.contentSelector).height() <= $window.height();
      }
      var instance = this;
      var $window = $(window);
      /**
       * @return {undefined}
       */
      this._prefill = function() {
        if (needsPrefill()) {
          instance.scroll();
        }
        $window.bind("resize.infinite-scroll", function() {
          if (needsPrefill()) {
            $window.unbind("resize.infinite-scroll");
            instance.scroll();
          }
        });
      };
      this._prefill();
    },
    /**
     * @return {undefined}
     */
    _debug : function() {
      if (true === this.options.debug) {
        if ("undefined" != typeof console && "function" == typeof console.log) {
          if (1 === Array.prototype.slice.call(arguments).length && "string" == typeof Array.prototype.slice.call(arguments)[0]) {
            console.log(Array.prototype.slice.call(arguments).toString());
          } else {
            console.log(Array.prototype.slice.call(arguments));
          }
        } else {
          if (!Function.prototype.bind) {
            if (!("undefined" == typeof console)) {
              if (!("object" != typeof console.log)) {
                Function.prototype.call.call(console.log, console, Array.prototype.slice.call(arguments));
              }
            }
          }
        }
      }
    },
    /**
     * @param {string} path
     * @return {?}
     */
    _determinepath : function(path) {
      var opts = this.options;
      if (opts.behavior && this["_determinepath_" + opts.behavior] !== string) {
        return this["_determinepath_" + opts.behavior].call(this, path);
      }
      if (opts.pathParse) {
        return this._debug("pathParse manual"), opts.pathParse(path, this.options.state.currPage + 1);
      }
      if (path.match(/^(.*?)\b2\b(.*?$)/)) {
        path = path.match(/^(.*?)\b2\b(.*?$)/).slice(1);
      } else {
        if (path.match(/^(.*?)2(.*?$)/)) {
          if (path.match(/^(.*?page=)2(\/.*|$)/)) {
            return path = path.match(/^(.*?page=)2(\/.*|$)/).slice(1);
          }
          path = path.match(/^(.*?)2(.*?$)/).slice(1);
        } else {
          if (path.match(/^(.*?page=)1(\/.*|$)/)) {
            return path = path.match(/^(.*?page=)1(\/.*|$)/).slice(1);
          }
          this._debug("Sorry, we couldn't parse your Next (Previous Posts) URL. Verify your the css selector points to the correct A tag. If you still get this error: yell, scream, and kindly ask for help at infinite-scroll.com.");
          /** @type {boolean} */
          opts.state.isInvalidPage = true;
        }
      }
      return this._debug("determinePath", path), path;
    },
    /**
     * @param {string} type
     * @return {?}
     */
    _error : function(type) {
      var opts = this.options;
      return opts.behavior && this["_error_" + opts.behavior] !== string ? void this["_error_" + opts.behavior].call(this, type) : ("destroy" !== type && ("end" !== type && (type = "unknown")), this._debug("Error", type), ("end" === type || opts.state.isBeyondMaxPage) && this._showdonemsg(), opts.state.isDone = true, opts.state.currPage = 1, opts.state.isPaused = false, opts.state.isBeyondMaxPage = false, void this._binding("unbind"));
    },
    /**
     * @param {HTMLElement} box
     * @param {string} data
     * @param {?} url
     * @return {?}
     */
    _loadcallback : function(box, data, url) {
      var wrapperDom;
      var opts = this.options;
      var callback = this.options.callback;
      /** @type {string} */
      var result = opts.state.isDone ? "done" : opts.appendCallback ? "append" : "no-append";
      if (opts.behavior && this["_loadcallback_" + opts.behavior] !== string) {
        return void this["_loadcallback_" + opts.behavior].call(this, box, data);
      }
      switch(result) {
        case "done":
          return this._showdonemsg(), false;
        case "no-append":
          if ("html" === opts.dataType && (data = "<div>" + data + "</div>", data = $(data).find(opts.itemSelector)), 0 === data.length) {
            return this._error("end");
          }
          break;
        case "append":
          var cl = box.children();
          if (0 === cl.length) {
            return this._error("end");
          }
          /** @type {DocumentFragment} */
          wrapperDom = document.createDocumentFragment();
          for (;box[0].firstChild;) {
            wrapperDom.appendChild(box[0].firstChild);
          }
          this._debug("contentSelector", $(opts.contentSelector)[0]);
          $(opts.contentSelector)[0].appendChild(wrapperDom);
          data = cl.get();
      }
      if (opts.loading.finished.call($(opts.contentSelector)[0], opts), opts.animate) {
        /** @type {string} */
        var scrollTo = $(window).scrollTop() + $(opts.loading.msg).height() + opts.extraScrollPx + "px";
        $("html,body").animate({
          scrollTop : scrollTo
        }, 800, function() {
          /** @type {boolean} */
          opts.state.isDuringAjax = false;
        });
      }
      if (!opts.animate) {
        /** @type {boolean} */
        opts.state.isDuringAjax = false;
      }
      callback(this, data, url);
      if (opts.prefill) {
        this._prefill();
      }
    },
    /**
     * @return {?}
     */
    _nearbottom : function() {
      var opts = this.options;
      /** @type {number} */
      var pixelsFromWindowBottomToBottom = 0 + $(document).height() - opts.binder.scrollTop() - $(window).height();
      return opts.behavior && this["_nearbottom_" + opts.behavior] !== string ? this["_nearbottom_" + opts.behavior].call(this) : (this._debug("math:", pixelsFromWindowBottomToBottom, opts.pixelsFromNavToBottom), pixelsFromWindowBottomToBottom - opts.bufferPx < opts.pixelsFromNavToBottom);
    },
    /**
     * @param {?} handler
     * @return {?}
     */
    _pausing : function(handler) {
      var opts = this.options;
      if (opts.behavior && this["_pausing_" + opts.behavior] !== string) {
        return void this["_pausing_" + opts.behavior].call(this, handler);
      }
      switch("pause" !== handler && ("resume" !== handler && (null !== handler && this._debug("Invalid argument. Toggling pause value instead"))), handler = !handler || "pause" !== handler && "resume" !== handler ? "toggle" : handler) {
        case "pause":
          /** @type {boolean} */
          opts.state.isPaused = true;
          break;
        case "resume":
          /** @type {boolean} */
          opts.state.isPaused = false;
          break;
        case "toggle":
          /** @type {boolean} */
          opts.state.isPaused = !opts.state.isPaused;
      }
      return this._debug("Paused", opts.state.isPaused), false;
    },
    /**
     * @return {?}
     */
    _setup : function() {
      var opts = this.options;
      return opts.behavior && this["_setup_" + opts.behavior] !== string ? void this["_setup_" + opts.behavior].call(this) : (this._binding("bind"), false);
    },
    /**
     * @return {?}
     */
    _showdonemsg : function() {
      var opts = this.options;
      return opts.behavior && this["_showdonemsg_" + opts.behavior] !== string ? void this["_showdonemsg_" + opts.behavior].call(this) : (opts.loading.msg.find("img").hide().parent().find("div").html(opts.loading.finishedMsg).animate({
        opacity : 1
      }, 2E3, function() {
        $(this).parent().fadeOut(opts.loading.speed);
      }), void opts.errorCallback.call($(opts.contentSelector)[0], "done"));
    },
    /**
     * @param {Node} options
     * @return {?}
     */
    _validate : function(options) {
      var key;
      for (key in options) {
        if (key.indexOf && (key.indexOf("Selector") > -1 && 0 === $(options[key]).length)) {
          return this._debug("Your " + key + " found no elements."), false;
        }
      }
      return true;
    },
    /**
     * @return {undefined}
     */
    bind : function() {
      this._binding("bind");
    },
    /**
     * @return {?}
     */
    destroy : function() {
      return this.options.state.isDestroyed = true, this.options.loading.finished(), this._error("destroy");
    },
    /**
     * @return {undefined}
     */
    pause : function() {
      this._pausing("pause");
    },
    /**
     * @return {undefined}
     */
    resume : function() {
      this._pausing("resume");
    },
    /**
     * @param {Object} opts
     * @return {?}
     */
    beginAjax : function(opts) {
      var box;
      var desturl;
      var letter;
      var i;
      var instance = this;
      var path = opts.path;
      if (opts.state.currPage++, opts.maxPage !== string && opts.state.currPage > opts.maxPage) {
        return opts.state.isBeyondMaxPage = true, void this.destroy();
      }
      switch(box = $($(opts.contentSelector).is("table, tbody") ? "<tbody/>" : "<div/>"), desturl = "function" == typeof path ? path(opts.state.currPage) : path.join(opts.state.currPage), instance._debug("heading into ajax", desturl), letter = "html" === opts.dataType || "json" === opts.dataType ? opts.dataType : "html+callback", opts.appendCallback && ("html" === opts.dataType && (letter += "+callback")), letter) {
        case "html+callback":
          instance._debug("Using HTML via .load() method");
          box.load(desturl + " " + opts.itemSelector, string, function(responseText) {
            instance._loadcallback(box, responseText, desturl);
          });
          break;
        case "html":
          instance._debug("Using " + letter.toUpperCase() + " via $.ajax() method");
          $.ajax({
            url : desturl,
            dataType : opts.dataType,
            /**
             * @param {XMLHttpRequest} jqXHR
             * @param {string} status
             * @return {undefined}
             */
            complete : function(jqXHR, status) {
              i = "undefined" != typeof jqXHR.isResolved ? jqXHR.isResolved() : "success" === status || "notmodified" === status;
              if (i) {
                instance._loadcallback(box, jqXHR.responseText, desturl);
              } else {
                instance._error("end");
              }
            }
          });
          break;
        case "json":
          instance._debug("Using " + letter.toUpperCase() + " via $.ajax() method");
          $.ajax({
            dataType : "json",
            type : "GET",
            url : desturl,
            /**
             * @param {string} data
             * @param {string} status
             * @param {?} jqXHR
             * @return {undefined}
             */
            success : function(data, status, jqXHR) {
              if (i = "undefined" != typeof jqXHR.isResolved ? jqXHR.isResolved() : "success" === status || "notmodified" === status, opts.appendCallback) {
                if (opts.template !== string) {
                  var c = opts.template(data);
                  box.append(c);
                  if (i) {
                    instance._loadcallback(box, c);
                  } else {
                    instance._error("end");
                  }
                } else {
                  instance._debug("template must be defined.");
                  instance._error("end");
                }
              } else {
                if (i) {
                  instance._loadcallback(box, data, desturl);
                } else {
                  instance._error("end");
                }
              }
            },
            /**
             * @return {undefined}
             */
            error : function() {
              instance._debug("JSON ajax request failed.");
              instance._error("end");
            }
          });
      }
    },
    /**
     * @param {(Element|string)} mapper
     * @return {?}
     */
    retrieve : function(mapper) {
      mapper = mapper || null;
      var elem = this;
      var opts = elem.options;
      return opts.behavior && this["retrieve_" + opts.behavior] !== string ? void this["retrieve_" + opts.behavior].call(this, mapper) : opts.state.isDestroyed ? (this._debug("Instance is destroyed"), false) : (opts.state.isDuringAjax = true, void opts.loading.start.call($(opts.contentSelector)[0], opts));
    },
    /**
     * @return {?}
     */
    scroll : function() {
      var opts = this.options;
      var state = opts.state;
      return opts.behavior && this["scroll_" + opts.behavior] !== string ? void this["scroll_" + opts.behavior].call(this) : void(state.isDuringAjax || (state.isInvalidPage || (state.isDone || (state.isDestroyed || (state.isPaused || this._nearbottom() && this.retrieve())))));
    },
    /**
     * @return {undefined}
     */
    toggle : function() {
      this._pausing();
    },
    /**
     * @return {undefined}
     */
    unbind : function() {
      this._binding("unbind");
    },
    /**
     * @param {(boolean|number|string)} value
     * @return {undefined}
     */
    update : function(value) {
      if ($.isPlainObject(value)) {
        this.options = $.extend(true, this.options, value);
      }
    }
  };
  /**
   * @param {string} options
   * @param {(Function|string)} callback
   * @return {?}
   */
  $.fn.infinitescroll = function(options, callback) {
    /** @type {string} */
    var thisCall = typeof options;
    switch(thisCall) {
      case "string":
        /** @type {Array.<?>} */
        var args = Array.prototype.slice.call(arguments, 1);
        this.each(function() {
          var instance = $.data(this, "infinitescroll");
          return!!instance && (!(!$.isFunction(instance[options]) || "_" === options.charAt(0)) && void instance[options].apply(instance, args));
        });
        break;
      case "object":
        this.each(function() {
          var instance = $.data(this, "infinitescroll");
          if (instance) {
            instance.update(options);
          } else {
            instance = new $.infinitescroll(options, callback, this);
            if (!instance.failed) {
              $.data(this, "infinitescroll", instance);
            }
          }
        });
    }
    return this;
  };
  var to;
  var event = $.event;
  event.special.smartscroll = {
    /**
     * @return {undefined}
     */
    setup : function() {
      $(this).bind("scroll", event.special.smartscroll.handler);
    },
    /**
     * @return {undefined}
     */
    teardown : function() {
      $(this).unbind("scroll", event.special.smartscroll.handler);
    },
    /**
     * @param {Object} event
     * @param {string} execAsap
     * @return {undefined}
     */
    handler : function(event, execAsap) {
      var $el = this;
      /** @type {Arguments} */
      var attributes = arguments;
      /** @type {string} */
      event.type = "smartscroll";
      if (to) {
        clearTimeout(to);
      }
      /** @type {number} */
      to = setTimeout(function() {
        $($el).trigger("smartscroll", attributes);
      }, "execAsap" === execAsap ? 0 : 100);
    }
  };
  /**
   * @param {string} cycle
   * @return {?}
   */
  $.fn.smartscroll = function(cycle) {
    return cycle ? this.bind("smartscroll", cycle) : this.trigger("smartscroll", ["execAsap"]);
  };
}), function() {
  /**
   * @return {undefined}
   */
  function EventEmitter() {
  }
  /**
   * @param {Array} listeners
   * @param {Object} listener
   * @return {?}
   */
  function indexOfListener(listeners, listener) {
    var i = listeners.length;
    for (;i--;) {
      if (listeners[i].listener === listener) {
        return i;
      }
    }
    return-1;
  }
  /**
   * @param {string} name
   * @return {?}
   */
  function alias(name) {
    return function() {
      return this[name].apply(this, arguments);
    };
  }
  var proto = EventEmitter.prototype;
  var exports = this;
  var originalGlobalValue = exports.EventEmitter;
  /**
   * @param {(RegExp|string)} evt
   * @return {?}
   */
  proto.getListeners = function(evt) {
    var response;
    var key;
    var events = this._getEvents();
    if ("object" == typeof evt) {
      response = {};
      for (key in events) {
        if (events.hasOwnProperty(key)) {
          if (evt.test(key)) {
            response[key] = events[key];
          }
        }
      }
    } else {
      response = events[evt] || (events[evt] = []);
    }
    return response;
  };
  /**
   * @param {Array} listeners
   * @return {?}
   */
  proto.flattenListeners = function(listeners) {
    var i;
    /** @type {Array} */
    var flatListeners = [];
    /** @type {number} */
    i = 0;
    for (;listeners.length > i;i += 1) {
      flatListeners.push(listeners[i].listener);
    }
    return flatListeners;
  };
  /**
   * @param {string} evt
   * @return {?}
   */
  proto.getListenersAsObject = function(evt) {
    var response;
    var listeners = this.getListeners(evt);
    return listeners instanceof Array && (response = {}, response[evt] = listeners), response || listeners;
  };
  /**
   * @param {string} evt
   * @param {Object} listener
   * @return {?}
   */
  proto.addListener = function(evt, listener) {
    var key;
    var listeners = this.getListenersAsObject(evt);
    /** @type {boolean} */
    var listenerIsWrapped = "object" == typeof listener;
    for (key in listeners) {
      if (listeners.hasOwnProperty(key)) {
        if (-1 === indexOfListener(listeners[key], listener)) {
          listeners[key].push(listenerIsWrapped ? listener : {
            listener : listener,
            once : false
          });
        }
      }
    }
    return this;
  };
  proto.on = alias("addListener");
  /**
   * @param {string} evt
   * @param {string} listener
   * @return {?}
   */
  proto.addOnceListener = function(evt, listener) {
    return this.addListener(evt, {
      listener : listener,
      once : true
    });
  };
  proto.once = alias("addOnceListener");
  /**
   * @param {(Node|string)} evt
   * @return {?}
   */
  proto.defineEvent = function(evt) {
    return this.getListeners(evt), this;
  };
  /**
   * @param {Array} evts
   * @return {?}
   */
  proto.defineEvents = function(evts) {
    /** @type {number} */
    var i = 0;
    for (;evts.length > i;i += 1) {
      this.defineEvent(evts[i]);
    }
    return this;
  };
  /**
   * @param {string} evt
   * @param {?} listener
   * @return {?}
   */
  proto.removeListener = function(evt, listener) {
    var index;
    var key;
    var listeners = this.getListenersAsObject(evt);
    for (key in listeners) {
      if (listeners.hasOwnProperty(key)) {
        index = indexOfListener(listeners[key], listener);
        if (-1 !== index) {
          listeners[key].splice(index, 1);
        }
      }
    }
    return this;
  };
  proto.off = alias("removeListener");
  /**
   * @param {Object} walkers
   * @param {Object} listeners
   * @return {?}
   */
  proto.addListeners = function(walkers, listeners) {
    return this.manipulateListeners(false, walkers, listeners);
  };
  /**
   * @param {Object} walkers
   * @param {Object} listeners
   * @return {?}
   */
  proto.removeListeners = function(walkers, listeners) {
    return this.manipulateListeners(true, walkers, listeners);
  };
  /**
   * @param {boolean} remove
   * @param {Array} obj
   * @param {Array} listeners
   * @return {?}
   */
  proto.manipulateListeners = function(remove, obj, listeners) {
    var i;
    var value;
    var single = remove ? this.removeListener : this.addListener;
    var multiple = remove ? this.removeListeners : this.addListeners;
    if ("object" != typeof obj || obj instanceof RegExp) {
      i = listeners.length;
      for (;i--;) {
        single.call(this, obj, listeners[i]);
      }
    } else {
      for (i in obj) {
        if (obj.hasOwnProperty(i)) {
          if (value = obj[i]) {
            if ("function" == typeof value) {
              single.call(this, i, value);
            } else {
              multiple.call(this, i, value);
            }
          }
        }
      }
    }
    return this;
  };
  /**
   * @param {Object} el
   * @return {?}
   */
  proto.removeEvent = function(el) {
    var prefix;
    /** @type {string} */
    var type = typeof el;
    var a = this._getEvents();
    if ("string" === type) {
      delete a[el];
    } else {
      if ("object" === type) {
        for (prefix in a) {
          if (a.hasOwnProperty(prefix)) {
            if (el.test(prefix)) {
              delete a[prefix];
            }
          }
        }
      } else {
        delete this._events;
      }
    }
    return this;
  };
  proto.removeAllListeners = alias("removeEvent");
  /**
   * @param {string} evt
   * @param {Array} args
   * @return {?}
   */
  proto.emitEvent = function(evt, args) {
    var listener;
    var i;
    var fileName;
    var response;
    var files = this.getListenersAsObject(evt);
    for (fileName in files) {
      if (files.hasOwnProperty(fileName)) {
        i = files[fileName].length;
        for (;i--;) {
          listener = files[fileName][i];
          if (listener.once === true) {
            this.removeListener(evt, listener.listener);
          }
          response = listener.listener.apply(this, args || []);
          if (response === this._getOnceReturnValue()) {
            this.removeListener(evt, listener.listener);
          }
        }
      }
    }
    return this;
  };
  proto.trigger = alias("emitEvent");
  /**
   * @param {string} method
   * @return {?}
   */
  proto.emit = function(method) {
    /** @type {Array.<?>} */
    var args = Array.prototype.slice.call(arguments, 1);
    return this.emitEvent(method, args);
  };
  /**
   * @param {?} value
   * @return {?}
   */
  proto.setOnceReturnValue = function(value) {
    return this._onceReturnValue = value, this;
  };
  /**
   * @return {?}
   */
  proto._getOnceReturnValue = function() {
    return!this.hasOwnProperty("_onceReturnValue") || this._onceReturnValue;
  };
  /**
   * @return {?}
   */
  proto._getEvents = function() {
    return this._events || (this._events = {});
  };
  /**
   * @return {?}
   */
  EventEmitter.noConflict = function() {
    return exports.EventEmitter = originalGlobalValue, EventEmitter;
  };
  if ("function" == typeof define && define.amd) {
    define("eventEmitter/EventEmitter", [], function() {
      return EventEmitter;
    });
  } else {
    if ("object" == typeof module && module.exports) {
      /** @type {function (): undefined} */
      module.exports = EventEmitter;
    } else {
      /** @type {function (): undefined} */
      this.EventEmitter = EventEmitter;
    }
  }
}.call(this), function(b) {
  /**
   * @param {?} target
   * @return {?}
   */
  function func(target) {
    var e = b.event;
    return e.target = e.target || (e.srcElement || target), e;
  }
  /** @type {Element} */
  var docElem = document.documentElement;
  /**
   * @return {undefined}
   */
  var bind = function() {
  };
  if (docElem.addEventListener) {
    /**
     * @param {?} type
     * @param {string} name
     * @param {Function} init
     * @return {undefined}
     */
    bind = function(type, name, init) {
      type.addEventListener(name, init, false);
    };
  } else {
    if (docElem.attachEvent) {
      /**
       * @param {?} obj
       * @param {string} type
       * @param {Function} fn
       * @return {undefined}
       */
      bind = function(obj, type, fn) {
        /** @type {function (): undefined} */
        obj[type + fn] = fn.handleEvent ? function() {
          var actual = func(obj);
          fn.handleEvent.call(fn, actual);
        } : function() {
          var val = func(obj);
          fn.call(obj, val);
        };
        obj.attachEvent("on" + type, obj[type + fn]);
      };
    }
  }
  /**
   * @return {undefined}
   */
  var unbind = function() {
  };
  if (docElem.removeEventListener) {
    /**
     * @param {?} target
     * @param {string} eventType
     * @param {?} callback
     * @return {undefined}
     */
    unbind = function(target, eventType, callback) {
      target.removeEventListener(eventType, callback, false);
    };
  } else {
    if (docElem.detachEvent) {
      /**
       * @param {string} obj
       * @param {string} type
       * @param {string} fn
       * @return {undefined}
       */
      unbind = function(obj, type, fn) {
        obj.detachEvent("on" + type, obj[type + fn]);
        try {
          delete obj[type + fn];
        } catch (d) {
          obj[type + fn] = void 0;
        }
      };
    }
  }
  var eventie = {
    /** @type {function (): undefined} */
    bind : bind,
    /** @type {function (): undefined} */
    unbind : unbind
  };
  if ("function" == typeof define && define.amd) {
    define("eventie/eventie", eventie);
  } else {
    b.eventie = eventie;
  }
}(this), function(root, factory) {
  if ("function" == typeof define && define.amd) {
    define(["eventEmitter/EventEmitter", "eventie/eventie"], function(EventEmitter, reporter) {
      return factory(root, EventEmitter, reporter);
    });
  } else {
    if ("object" == typeof exports) {
      module.exports = factory(root, require("wolfy87-eventemitter"), require("eventie"));
    } else {
      root.imagesLoaded = factory(root, root.EventEmitter, root.eventie);
    }
  }
}(window, function(root, EventEmitter, exports) {
  /**
   * @param {Object} a
   * @param {Object} b
   * @return {?}
   */
  function extend(a, b) {
    var prop;
    for (prop in b) {
      a[prop] = b[prop];
    }
    return a;
  }
  /**
   * @param {Array} it
   * @return {?}
   */
  function isArray(it) {
    return "[object Array]" === ostring.call(it);
  }
  /**
   * @param {Array} obj
   * @return {?}
   */
  function makeArray(obj) {
    /** @type {Array} */
    var ary = [];
    if (isArray(obj)) {
      /** @type {Array} */
      ary = obj;
    } else {
      if ("number" == typeof obj.length) {
        /** @type {number} */
        var i = 0;
        /** @type {number} */
        var l = obj.length;
        for (;l > i;i++) {
          ary.push(obj[i]);
        }
      } else {
        ary.push(obj);
      }
    }
    return ary;
  }
  /**
   * @param {Object} elem
   * @param {Function} options
   * @param {Function} fn
   * @return {?}
   */
  function ImagesLoaded(elem, options, fn) {
    if (!(this instanceof ImagesLoaded)) {
      return new ImagesLoaded(elem, options);
    }
    if ("string" == typeof elem) {
      /** @type {NodeList} */
      elem = document.querySelectorAll(elem);
    }
    this.elements = makeArray(elem);
    this.options = extend({}, this.options);
    if ("function" == typeof options) {
      /** @type {Function} */
      fn = options;
    } else {
      extend(this.options, options);
    }
    if (fn) {
      this.on("always", fn);
    }
    this.getImages();
    if ($) {
      this.jqDeferred = new $.Deferred;
    }
    var engineTools = this;
    setTimeout(function() {
      engineTools.check();
    });
  }
  /**
   * @param {string} forceSync
   * @return {undefined}
   */
  function req(forceSync) {
    /** @type {string} */
    this.img = forceSync;
  }
  /**
   * @param {string} src
   * @return {undefined}
   */
  function LoadingImage(src) {
    /** @type {string} */
    this.src = src;
    document_scripts[src] = this;
  }
  var $ = root.jQuery;
  var console = root.console;
  /** @type {boolean} */
  var args = void 0 !== console;
  /** @type {function (this:*): string} */
  var ostring = Object.prototype.toString;
  ImagesLoaded.prototype = new EventEmitter;
  ImagesLoaded.prototype.options = {};
  /**
   * @return {undefined}
   */
  ImagesLoaded.prototype.getImages = function() {
    /** @type {Array} */
    this.images = [];
    /** @type {number} */
    var i = 0;
    var l = this.elements.length;
    for (;l > i;i++) {
      var node = this.elements[i];
      if ("IMG" === node.nodeName) {
        this.addImage(node);
      }
      var type = node.nodeType;
      if (type && (1 === type || (9 === type || 11 === type))) {
        var ca = node.querySelectorAll("img");
        /** @type {number} */
        var hi = 0;
        var j = ca.length;
        for (;j > hi;hi++) {
          var c = ca[hi];
          this.addImage(c);
        }
      }
    }
  };
  /**
   * @param {?} key
   * @return {undefined}
   */
  ImagesLoaded.prototype.addImage = function(key) {
    var node = new req(key);
    this.images.push(node);
  };
  /**
   * @return {?}
   */
  ImagesLoaded.prototype.check = function() {
    /**
     * @param {?} i
     * @param {?} event
     * @return {?}
     */
    function next(i, event) {
      return _this.options.debug && (args && console.log("confirm", i, event)), _this.progress(i), out++, out === a && _this.complete(), true;
    }
    var _this = this;
    /** @type {number} */
    var out = 0;
    var a = this.images.length;
    if (this.hasAnyBroken = false, !a) {
      return void this.complete();
    }
    /** @type {number} */
    var i = 0;
    for (;a > i;i++) {
      var loadingImage = this.images[i];
      loadingImage.on("confirm", next);
      loadingImage.check();
    }
  };
  /**
   * @param {?} image
   * @return {undefined}
   */
  ImagesLoaded.prototype.progress = function(image) {
    this.hasAnyBroken = this.hasAnyBroken || !image.isLoaded;
    var _this = this;
    setTimeout(function() {
      _this.emit("progress", _this, image);
      if (_this.jqDeferred) {
        if (_this.jqDeferred.notify) {
          _this.jqDeferred.notify(_this, image);
        }
      }
    });
  };
  /**
   * @return {undefined}
   */
  ImagesLoaded.prototype.complete = function() {
    /** @type {string} */
    var key = this.hasAnyBroken ? "fail" : "done";
    /** @type {boolean} */
    this.isComplete = true;
    var _this = this;
    setTimeout(function() {
      if (_this.emit(key, _this), _this.emit("always", _this), _this.jqDeferred) {
        /** @type {string} */
        var jqMethod = _this.hasAnyBroken ? "reject" : "resolve";
        _this.jqDeferred[jqMethod](_this);
      }
    });
  };
  if ($) {
    /**
     * @param {Array} options
     * @param {boolean} callback
     * @return {?}
     */
    $.fn.imagesLoaded = function(options, callback) {
      var instance = new ImagesLoaded(this, options, callback);
      return instance.jqDeferred.promise($(this));
    };
  }
  req.prototype = new EventEmitter;
  /**
   * @return {?}
   */
  req.prototype.check = function() {
    var cached = document_scripts[this.img.src] || new LoadingImage(this.img.src);
    if (cached.isConfirmed) {
      return void this.confirm(cached.isLoaded, "cached was confirmed");
    }
    if (this.img.complete && void 0 !== this.img.naturalWidth) {
      return void this.confirm(0 !== this.img.naturalWidth, "naturalWidth");
    }
    var _this = this;
    cached.on("confirm", function(image, title) {
      return _this.confirm(image.isLoaded, title), true;
    });
    cached.check();
  };
  /**
   * @param {boolean} isLoaded
   * @param {string} message
   * @return {undefined}
   */
  req.prototype.confirm = function(isLoaded, message) {
    /** @type {boolean} */
    this.isLoaded = isLoaded;
    this.emit("confirm", this, message);
  };
  var document_scripts = {};
  return LoadingImage.prototype = new EventEmitter, LoadingImage.prototype.check = function() {
    if (!this.isChecked) {
      /** @type {Image} */
      var selector = new Image;
      exports.bind(selector, "load", this);
      exports.bind(selector, "error", this);
      selector.src = this.src;
      /** @type {boolean} */
      this.isChecked = true;
    }
  }, LoadingImage.prototype.handleEvent = function(event) {
    /** @type {string} */
    var method = "on" + event.type;
    if (this[method]) {
      this[method](event);
    }
  }, LoadingImage.prototype.onload = function(event) {
    this.confirm(true, "onload");
    this.unbindProxyEvents(event);
  }, LoadingImage.prototype.onerror = function(ev) {
    this.confirm(false, "onerror");
    this.unbindProxyEvents(ev);
  }, LoadingImage.prototype.confirm = function(isLoaded, message) {
    /** @type {boolean} */
    this.isConfirmed = true;
    /** @type {boolean} */
    this.isLoaded = isLoaded;
    this.emit("confirm", this, message);
  }, LoadingImage.prototype.unbindProxyEvents = function(event) {
    exports.unbind(event.target, "load", this);
    exports.unbind(event.target, "error", this);
  }, ImagesLoaded;
}), !function(factory) {
  if ("function" == typeof define && define.amd) {
    define(["jquery"], factory);
  } else {
    if ("undefined" != typeof module && module.exports) {
      module.exports = factory(require("jquery"));
    } else {
      factory(jQuery);
    }
  }
}(function($) {
  /** @type {number} */
  var openElement = -1;
  /** @type {number} */
  var abortTimeout = -1;
  /**
   * @param {?} str
   * @return {?}
   */
  var strToNum = function(str) {
    return parseFloat(str) || 0;
  };
  /**
   * @param {?} element
   * @return {?}
   */
  var init = function(element) {
    /** @type {number} */
    var c = 1;
    var $element = $(element);
    /** @type {null} */
    var t1 = null;
    /** @type {Array} */
    var configList = [];
    return $element.each(function() {
      var optgroup = $(this);
      /** @type {number} */
      var t2 = optgroup.offset().top - strToNum(optgroup.css("margin-top"));
      var select = configList.length > 0 ? configList[configList.length - 1] : null;
      if (null === select) {
        configList.push(optgroup);
      } else {
        if (Math.floor(Math.abs(t1 - t2)) <= c) {
          configList[configList.length - 1] = select.add(optgroup);
        } else {
          configList.push(optgroup);
        }
      }
      /** @type {number} */
      t1 = t2;
    }), configList;
  };
  /**
   * @param {boolean} attributes
   * @return {?}
   */
  var render = function(attributes) {
    var expectedNumberOfNonCommentArgs = {
      byRow : true,
      property : "height",
      target : null,
      remove : false
    };
    return "object" == typeof attributes ? $.extend(expectedNumberOfNonCommentArgs, attributes) : ("boolean" == typeof attributes ? expectedNumberOfNonCommentArgs.byRow = attributes : "remove" === attributes && (expectedNumberOfNonCommentArgs.remove = true), expectedNumberOfNonCommentArgs);
  };
  /** @type {function (boolean): ?} */
  var self = $.fn.matchHeight = function(data) {
    var args = render(data);
    if (args.remove) {
      var $element = this;
      return this.css(args.property, ""), $.each(self._groups, function(dataAndEvents, self) {
        self.elements = self.elements.not($element);
      }), this;
    }
    return this.length <= 1 && !args.target ? this : (self._groups.push({
      elements : this,
      options : args
    }), self._apply(this, args), this);
  };
  /** @type {string} */
  self.version = "master";
  /** @type {Array} */
  self._groups = [];
  /** @type {number} */
  self._throttle = 80;
  /** @type {boolean} */
  self._maintainScroll = false;
  /** @type {null} */
  self._beforeUpdate = null;
  /** @type {null} */
  self._afterUpdate = null;
  /** @type {function (?): ?} */
  self._rows = init;
  /** @type {function (?): ?} */
  self._parse = strToNum;
  /** @type {function (boolean): ?} */
  self._parseOptions = render;
  /**
   * @param {?} element
   * @param {boolean} data
   * @return {?}
   */
  self._apply = function(element, data) {
    var settings = render(data);
    var $element = $(element);
    /** @type {Array} */
    var attributes = [$element];
    var a = $(window).scrollTop();
    var b = $("html").outerHeight(true);
    var _ = $element.parents().filter(":hidden");
    return _.each(function() {
      var $slide = $(this);
      $slide.data("style-cache", $slide.attr("style"));
    }), _.css("display", "block"), settings.byRow && (!settings.target && ($element.each(function() {
      var element = $(this);
      var display = element.css("display");
      if ("inline-block" !== display) {
        if ("flex" !== display) {
          if ("inline-flex" !== display) {
            /** @type {string} */
            display = "block";
          }
        }
      }
      element.data("style-cache", element.attr("style"));
      element.css({
        display : display,
        "padding-top" : "0",
        "padding-bottom" : "0",
        "margin-top" : "0",
        "margin-bottom" : "0",
        "border-top-width" : "0",
        "border-bottom-width" : "0",
        height : "100px",
        overflow : "hidden"
      });
    }), attributes = init($element), $element.each(function() {
      var section = $(this);
      section.attr("style", section.data("style-cache") || "");
    }))), $.each(attributes, function(dataAndEvents, param) {
      var target = $(param);
      /** @type {number} */
      var right = 0;
      if (settings.target) {
        right = settings.target.outerHeight(false);
      } else {
        if (settings.byRow && target.length <= 1) {
          return void target.css(settings.property, "");
        }
        target.each(function() {
          var item = $(this);
          var target = item.attr("style");
          var display = item.css("display");
          if ("inline-block" !== display) {
            if ("flex" !== display) {
              if ("inline-flex" !== display) {
                /** @type {string} */
                display = "block";
              }
            }
          }
          var attributes = {
            display : display
          };
          /** @type {string} */
          attributes[settings.property] = "";
          item.css(attributes);
          if (item.outerHeight(false) > right) {
            right = item.outerHeight(false);
          }
          if (target) {
            item.attr("style", target);
          } else {
            item.css("display", "");
          }
        });
      }
      target.each(function() {
        var el = $(this);
        /** @type {number} */
        var left = 0;
        if (!(settings.target && el.is(settings.target))) {
          if ("border-box" !== el.css("box-sizing")) {
            left += strToNum(el.css("border-top-width")) + strToNum(el.css("border-bottom-width"));
            left += strToNum(el.css("padding-top")) + strToNum(el.css("padding-bottom"));
          }
          el.css(settings.property, right - left + "px");
        }
      });
    }), _.each(function() {
      var head = $(this);
      head.attr("style", head.data("style-cache") || null);
    }), self._maintainScroll && $(window).scrollTop(a / b * $("html").outerHeight(true)), this;
  };
  /**
   * @return {undefined}
   */
  self._applyDataApi = function() {
    var attributes = {};
    $("[data-match-height], [data-mh]").each(function() {
      var optgroup = $(this);
      var id = optgroup.attr("data-mh") || optgroup.attr("data-match-height");
      if (id in attributes) {
        attributes[id] = attributes[id].add(optgroup);
      } else {
        attributes[id] = optgroup;
      }
    });
    $.each(attributes, function() {
      this.matchHeight(true);
    });
  };
  /**
   * @param {Event} condition
   * @return {undefined}
   */
  var group = function(condition) {
    if (self._beforeUpdate) {
      self._beforeUpdate(condition, self._groups);
    }
    $.each(self._groups, function() {
      self._apply(this.elements, this.options);
    });
    if (self._afterUpdate) {
      self._afterUpdate(condition, self._groups);
    }
  };
  /**
   * @param {boolean} recurring
   * @param {Event} obj
   * @return {undefined}
   */
  self._update = function(recurring, obj) {
    if (obj && "resize" === obj.type) {
      var element = $(window).width();
      if (element === openElement) {
        return;
      }
      openElement = element;
    }
    if (recurring) {
      if (-1 === abortTimeout) {
        /** @type {number} */
        abortTimeout = setTimeout(function() {
          group(obj);
          /** @type {number} */
          abortTimeout = -1;
        }, self._throttle);
      }
    } else {
      group(obj);
    }
  };
  $(self._applyDataApi);
  $(window).bind("load", function(element) {
    self._update(false, element);
  });
  $(window).bind("resize orientationchange", function(element) {
    self._update(true, element);
  });
}), !function(mod) {
  if ("function" == typeof define && define.amd) {
    define(["jquery"], mod);
  } else {
    mod("object" == typeof module && module.exports ? require("jquery") : jQuery);
  }
}(function($) {
  /** @type {string} */
  var version = "1.7.2";
  var optionOverrides = {};
  var defaults = {
    exclude : [],
    excludeWithin : [],
    offset : 0,
    direction : "top",
    delegateSelector : null,
    scrollElement : null,
    scrollTarget : null,
    /**
     * @return {undefined}
     */
    beforeScroll : function() {
    },
    /**
     * @return {undefined}
     */
    afterScroll : function() {
    },
    easing : "swing",
    speed : 400,
    autoCoefficient : 2,
    preventDefault : true
  };
  /**
   * @param {Object} editor
   * @return {?}
   */
  var getScrollable = function(editor) {
    /** @type {Array} */
    var configList = [];
    /** @type {boolean} */
    var d = false;
    /** @type {string} */
    var scroll = editor.dir && "left" === editor.dir ? "scrollLeft" : "scrollTop";
    return this.each(function() {
      var el = $(this);
      if (this !== document && this !== window) {
        return!document.scrollingElement || this !== document.documentElement && this !== document.body ? void(el[scroll]() > 0 ? configList.push(this) : (el[scroll](1), d = el[scroll]() > 0, d && configList.push(this), el[scroll](0))) : (configList.push(document.scrollingElement), false);
      }
    }), configList.length || this.each(function() {
      if (this === document.documentElement) {
        if ("smooth" === $(this).css("scrollBehavior")) {
          /** @type {Array} */
          configList = [this];
        }
      }
      if (!configList.length) {
        if (!("BODY" !== this.nodeName)) {
          /** @type {Array} */
          configList = [this];
        }
      }
    }), "first" === editor.el && (configList.length > 1 && (configList = [configList[0]])), configList;
  };
  $.fn.extend({
    /**
     * @param {Object} lab
     * @return {?}
     */
    scrollable : function(lab) {
      var matched = getScrollable.call(this, {
        dir : lab
      });
      return this.pushStack(matched);
    },
    /**
     * @param {string} dir
     * @return {?}
     */
    firstScrollable : function(dir) {
      var matched = getScrollable.call(this, {
        el : "first",
        dir : dir
      });
      return this.pushStack(matched);
    },
    /**
     * @param {Object} options
     * @param {?} attributes
     * @return {?}
     */
    smoothScroll : function(options, attributes) {
      if (options = options || {}, "options" === options) {
        return attributes ? this.each(function() {
          var $this = $(this);
          var tooltip = $.extend($this.data("ssOpts") || {}, attributes);
          $(this).data("ssOpts", tooltip);
        }) : this.first().data("ssOpts");
      }
      var opts = $.extend({}, $.fn.smoothScroll.defaults, options);
      /**
       * @param {?} e
       * @return {undefined}
       */
      var cycle = function(e) {
        /**
         * @param {string} sel
         * @return {?}
         */
        var escapeSelector = function(sel) {
          return sel.replace(/(:|\.|\/)/g, "\\$1");
        };
        var link = this;
        var $link = $(this);
        var thisOpts = $.extend({}, opts, $link.data("ssOpts") || {});
        var exclude = opts.exclude;
        var excludeWithin = thisOpts.excludeWithin;
        /** @type {number} */
        var elCounter = 0;
        /** @type {number} */
        var ewlCounter = 0;
        /** @type {boolean} */
        var include = true;
        var expectedNumberOfNonCommentArgs = {};
        var locationPath = $.smoothScroll.filterPath(location.pathname);
        var o = $.smoothScroll.filterPath(link.pathname);
        /** @type {boolean} */
        var isIE = location.hostname === link.hostname || !link.hostname;
        var rng = thisOpts.scrollTarget || o === locationPath;
        var sel = escapeSelector(link.hash);
        if (sel && (!$(sel).length && (include = false)), thisOpts.scrollTarget || isIE && (rng && sel)) {
          for (;include && elCounter < exclude.length;) {
            if ($link.is(escapeSelector(exclude[elCounter++]))) {
              /** @type {boolean} */
              include = false;
            }
          }
          for (;include && ewlCounter < excludeWithin.length;) {
            if ($link.closest(excludeWithin[ewlCounter++]).length) {
              /** @type {boolean} */
              include = false;
            }
          }
        } else {
          /** @type {boolean} */
          include = false;
        }
        if (include) {
          if (thisOpts.preventDefault) {
            e.preventDefault();
          }
          $.extend(expectedNumberOfNonCommentArgs, thisOpts, {
            scrollTarget : thisOpts.scrollTarget || sel,
            link : link
          });
          $.smoothScroll(expectedNumberOfNonCommentArgs);
        }
      };
      return null !== options.delegateSelector ? this.undelegate(options.delegateSelector, "click.smoothscroll").delegate(options.delegateSelector, "click.smoothscroll", cycle) : this.unbind("click.smoothscroll").bind("click.smoothscroll", cycle), this;
    }
  });
  /**
   * @param {number} options
   * @param {number} attributes
   * @return {?}
   */
  $.smoothScroll = function(options, attributes) {
    if ("options" === options && "object" == typeof attributes) {
      return $.extend(optionOverrides, attributes);
    }
    var opts;
    var $scroller;
    var scrollTargetOffset;
    var speed;
    var distance;
    /** @type {number} */
    var scrollerOffset = 0;
    /** @type {string} */
    var offPos = "offset";
    /** @type {string} */
    var scrollDir = "scrollTop";
    var aniProps = {};
    var aniOpts = {};
    if ("number" == typeof options) {
      opts = $.extend({
        link : null
      }, $.fn.smoothScroll.defaults, optionOverrides);
      /** @type {number} */
      scrollTargetOffset = options;
    } else {
      opts = $.extend({
        link : null
      }, $.fn.smoothScroll.defaults, options || {}, optionOverrides);
      if (opts.scrollElement) {
        /** @type {string} */
        offPos = "position";
        if ("static" === opts.scrollElement.css("position")) {
          opts.scrollElement.css("position", "relative");
        }
      }
    }
    /** @type {string} */
    scrollDir = "left" === opts.direction ? "scrollLeft" : scrollDir;
    if (opts.scrollElement) {
      $scroller = opts.scrollElement;
      if (!/^(?:HTML|BODY)$/.test($scroller[0].nodeName)) {
        scrollerOffset = $scroller[scrollDir]();
      }
    } else {
      $scroller = $("html, body").firstScrollable(opts.direction);
    }
    opts.beforeScroll.call($scroller, opts);
    scrollTargetOffset = "number" == typeof options ? options : attributes || ($(opts.scrollTarget)[offPos]() && $(opts.scrollTarget)[offPos]()[opts.direction] || 0);
    /** @type {string} */
    aniProps[scrollDir] = scrollTargetOffset + scrollerOffset + opts.offset;
    speed = opts.speed;
    if ("auto" === speed) {
      /** @type {number} */
      distance = Math.abs(aniProps[scrollDir] - $scroller[scrollDir]());
      /** @type {number} */
      speed = distance / opts.autoCoefficient;
    }
    aniOpts = {
      duration : speed,
      easing : opts.easing,
      /**
       * @return {undefined}
       */
      complete : function() {
        opts.afterScroll.call(opts.link, opts);
      }
    };
    if (opts.step) {
      aniOpts.step = opts.step;
    }
    if ($scroller.length) {
      $scroller.stop().animate(aniProps, aniOpts);
    } else {
      opts.afterScroll.call(opts.link, opts);
    }
  };
  /** @type {string} */
  $.smoothScroll.version = version;
  /**
   * @param {string} string
   * @return {?}
   */
  $.smoothScroll.filterPath = function(string) {
    return string = string || "", string.replace(/^\//, "").replace(/(?:index|default).[a-zA-Z]{3,4}$/, "").replace(/\/$/, "");
  };
  $.fn.smoothScroll.defaults = defaults;
}), !function(mod) {
  if ("function" == typeof define && define.amd) {
    define(["jquery"], mod);
  } else {
    mod("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto);
  }
}(function($) {
  var mfp;
  var _prevStatus;
  var _document;
  var _prevContentType;
  var optgroup;
  var openElement;
  /** @type {string} */
  var CLOSE_EVENT = "Close";
  /** @type {string} */
  var BEFORE_CLOSE_EVENT = "BeforeClose";
  /** @type {string} */
  var AFTER_CLOSE_EVENT = "AfterClose";
  /** @type {string} */
  var BEFORE_APPEND_EVENT = "BeforeAppend";
  /** @type {string} */
  var MARKUP_PARSE_EVENT = "MarkupParse";
  /** @type {string} */
  var OPEN_EVENT = "Open";
  /** @type {string} */
  var CHANGE_EVENT = "Change";
  /** @type {string} */
  var NS = "mfp";
  /** @type {string} */
  var EVENT_NS = "." + NS;
  /** @type {string} */
  var rvar = "mfp-ready";
  /** @type {string} */
  var REMOVING_CLASS = "mfp-removing";
  /** @type {string} */
  var vvar = "mfp-prevent-close";
  /**
   * @return {undefined}
   */
  var MagnificPopup = function() {
  };
  /** @type {boolean} */
  var _isJQ = !!window.jQuery;
  var _window = $(window);
  /**
   * @param {string} name
   * @param {Function} task
   * @return {undefined}
   */
  var _mfpOn = function(name, task) {
    mfp.ev.on(NS + name + EVENT_NS, task);
  };
  /**
   * @param {string} className
   * @param {HTMLElement} id
   * @param {Object} html
   * @param {HTMLElement} appendTo
   * @return {?}
   */
  var _getEl = function(className, id, html, appendTo) {
    /** @type {Element} */
    var el = document.createElement("div");
    return el.className = "mfp-" + className, html && (el.innerHTML = html), appendTo ? id && id.appendChild(el) : (el = $(el), id && el.appendTo(id)), el;
  };
  /**
   * @param {string} e
   * @param {?} data
   * @return {undefined}
   */
  var _mfpTrigger = function(e, data) {
    mfp.ev.triggerHandler(NS + e, data);
    if (mfp.st.callbacks) {
      e = e.charAt(0).toLowerCase() + e.slice(1);
      if (mfp.st.callbacks[e]) {
        mfp.st.callbacks[e].apply(mfp, $.isArray(data) ? data : [data]);
      }
    }
  };
  /**
   * @param {?} element
   * @return {?}
   */
  var _getCloseBtn = function(element) {
    return element === openElement && mfp.currTemplate.closeBtn || (mfp.currTemplate.closeBtn = $(mfp.st.closeMarkup.replace("%title%", mfp.st.tClose)), openElement = element), mfp.currTemplate.closeBtn;
  };
  /**
   * @return {undefined}
   */
  var _checkInstance = function() {
    if (!$.magnificPopup.instance) {
      mfp = new MagnificPopup;
      mfp.init();
      $.magnificPopup.instance = mfp;
    }
  };
  /**
   * @return {?}
   */
  var supportsTransitions = function() {
    /** @type {(CSSStyleDeclaration|null)} */
    var s = document.createElement("p").style;
    /** @type {Array} */
    var v = ["ms", "O", "Moz", "Webkit"];
    if (void 0 !== s.transition) {
      return true;
    }
    for (;v.length;) {
      if (v.pop() + "Transition" in s) {
        return true;
      }
    }
    return false;
  };
  MagnificPopup.prototype = {
    /** @type {function (): undefined} */
    constructor : MagnificPopup,
    /**
     * @return {undefined}
     */
    init : function() {
      /** @type {string} */
      var appVersion = navigator.appVersion;
      mfp.isLowIE = mfp.isIE8 = document.all && !document.addEventListener;
      /** @type {boolean} */
      mfp.isAndroid = /android/gi.test(appVersion);
      /** @type {boolean} */
      mfp.isIOS = /iphone|ipad|ipod/gi.test(appVersion);
      mfp.supportsTransition = supportsTransitions();
      /** @type {boolean} */
      mfp.probablyMobile = mfp.isAndroid || (mfp.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent));
      _document = $(document);
      mfp.popupsCache = {};
    },
    /**
     * @param {Object} data
     * @return {?}
     */
    open : function(data) {
      var i;
      if (data.isObj === false) {
        mfp.items = data.items.toArray();
        /** @type {number} */
        mfp.index = 0;
        var item;
        var items = data.items;
        /** @type {number} */
        i = 0;
        for (;i < items.length;i++) {
          if (item = items[i], item.parsed && (item = item.el[0]), item === data.el[0]) {
            /** @type {number} */
            mfp.index = i;
            break;
          }
        }
      } else {
        mfp.items = $.isArray(data.items) ? data.items : [data.items];
        mfp.index = data.index || 0;
      }
      if (mfp.isOpen) {
        return void mfp.updateItemHTML();
      }
      /** @type {Array} */
      mfp.types = [];
      /** @type {string} */
      optgroup = "";
      if (data.mainEl && data.mainEl.length) {
        mfp.ev = data.mainEl.eq(0);
      } else {
        mfp.ev = _document;
      }
      if (data.key) {
        if (!mfp.popupsCache[data.key]) {
          mfp.popupsCache[data.key] = {};
        }
        mfp.currTemplate = mfp.popupsCache[data.key];
      } else {
        mfp.currTemplate = {};
      }
      mfp.st = $.extend(true, {}, $.magnificPopup.defaults, data);
      mfp.fixedContentPos = "auto" === mfp.st.fixedContentPos ? !mfp.probablyMobile : mfp.st.fixedContentPos;
      if (mfp.st.modal) {
        /** @type {boolean} */
        mfp.st.closeOnContentClick = false;
        /** @type {boolean} */
        mfp.st.closeOnBgClick = false;
        /** @type {boolean} */
        mfp.st.showCloseBtn = false;
        /** @type {boolean} */
        mfp.st.enableEscapeKey = false;
      }
      if (!mfp.bgOverlay) {
        mfp.bgOverlay = _getEl("bg").on("click" + EVENT_NS, function() {
          mfp.close();
        });
        mfp.wrap = _getEl("wrap").attr("tabindex", -1).on("click" + EVENT_NS, function(e) {
          if (mfp._checkIfClose(e.target)) {
            mfp.close();
          }
        });
        mfp.container = _getEl("container", mfp.wrap);
      }
      mfp.contentContainer = _getEl("content");
      if (mfp.st.preloader) {
        mfp.preloader = _getEl("preloader", mfp.container, mfp.st.tLoading);
      }
      var codeSegments = $.magnificPopup.modules;
      /** @type {number} */
      i = 0;
      for (;i < codeSegments.length;i++) {
        var n = codeSegments[i];
        n = n.charAt(0).toUpperCase() + n.slice(1);
        mfp["init" + n].call(mfp);
      }
      _mfpTrigger("BeforeOpen");
      if (mfp.st.showCloseBtn) {
        if (mfp.st.closeBtnInside) {
          _mfpOn(MARKUP_PARSE_EVENT, function(dataAndEvents, deepDataAndEvents, values, item) {
            values.close_replaceWith = _getCloseBtn(item.type);
          });
          optgroup += " mfp-close-btn-in";
        } else {
          mfp.wrap.append(_getCloseBtn());
        }
      }
      if (mfp.st.alignTop) {
        optgroup += " mfp-align-top";
      }
      if (mfp.fixedContentPos) {
        mfp.wrap.css({
          overflow : mfp.st.overflowY,
          overflowX : "hidden",
          overflowY : mfp.st.overflowY
        });
      } else {
        mfp.wrap.css({
          top : _window.scrollTop(),
          position : "absolute"
        });
      }
      if (mfp.st.fixedBgPos === false || "auto" === mfp.st.fixedBgPos && !mfp.fixedContentPos) {
        mfp.bgOverlay.css({
          height : _document.height(),
          position : "absolute"
        });
      }
      if (mfp.st.enableEscapeKey) {
        _document.on("keyup" + EVENT_NS, function(event) {
          if (27 === event.keyCode) {
            mfp.close();
          }
        });
      }
      _window.on("resize" + EVENT_NS, function() {
        mfp.updateSize();
      });
      if (!mfp.st.closeOnContentClick) {
        optgroup += " mfp-auto-cursor";
      }
      if (optgroup) {
        mfp.wrap.addClass(optgroup);
      }
      var windowHeight = mfp.wH = _window.height();
      var attributes = {};
      if (mfp.fixedContentPos && mfp._hasScrollBar(windowHeight)) {
        var s = mfp._getScrollbarSize();
        if (s) {
          attributes.marginRight = s;
        }
      }
      if (mfp.fixedContentPos) {
        if (mfp.isIE7) {
          $("body, html").css("overflow", "hidden");
        } else {
          /** @type {string} */
          attributes.overflow = "hidden";
        }
      }
      var classesToadd = mfp.st.mainClass;
      return mfp.isIE7 && (classesToadd += " mfp-ie7"), classesToadd && mfp._addClassToMFP(classesToadd), mfp.updateItemHTML(), _mfpTrigger("BuildControls"), $("html").css(attributes), mfp.bgOverlay.add(mfp.wrap).prependTo(mfp.st.prependTo || $(document.body)), mfp._lastFocusedEl = document.activeElement, setTimeout(function() {
        if (mfp.content) {
          mfp._addClassToMFP(rvar);
          mfp._setFocus();
        } else {
          mfp.bgOverlay.addClass(rvar);
        }
        _document.on("focusin" + EVENT_NS, mfp._onFocusIn);
      }, 16), mfp.isOpen = true, mfp.updateSize(windowHeight), _mfpTrigger(OPEN_EVENT), data;
    },
    /**
     * @return {undefined}
     */
    close : function() {
      if (mfp.isOpen) {
        _mfpTrigger(BEFORE_CLOSE_EVENT);
        /** @type {boolean} */
        mfp.isOpen = false;
        if (mfp.st.removalDelay && (!mfp.isLowIE && mfp.supportsTransition)) {
          mfp._addClassToMFP(REMOVING_CLASS);
          setTimeout(function() {
            mfp._close();
          }, mfp.st.removalDelay);
        } else {
          mfp._close();
        }
      }
    },
    /**
     * @return {undefined}
     */
    _close : function() {
      _mfpTrigger(CLOSE_EVENT);
      /** @type {string} */
      var classesToRemove = REMOVING_CLASS + " " + rvar + " ";
      if (mfp.bgOverlay.detach(), mfp.wrap.detach(), mfp.container.empty(), mfp.st.mainClass && (classesToRemove += mfp.st.mainClass + " "), mfp._removeClassFromMFP(classesToRemove), mfp.fixedContentPos) {
        var attributes = {
          marginRight : ""
        };
        if (mfp.isIE7) {
          $("body, html").css("overflow", "");
        } else {
          /** @type {string} */
          attributes.overflow = "";
        }
        $("html").css(attributes);
      }
      _document.off("keyup" + EVENT_NS + " focusin" + EVENT_NS);
      mfp.ev.off(EVENT_NS);
      mfp.wrap.attr("class", "mfp-wrap").removeAttr("style");
      mfp.bgOverlay.attr("class", "mfp-bg");
      mfp.container.attr("class", "mfp-container");
      if (!!mfp.st.showCloseBtn) {
        if (!(mfp.st.closeBtnInside && mfp.currTemplate[mfp.currItem.type] !== true)) {
          if (mfp.currTemplate.closeBtn) {
            mfp.currTemplate.closeBtn.detach();
          }
        }
      }
      if (mfp.st.autoFocusLast) {
        if (mfp._lastFocusedEl) {
          $(mfp._lastFocusedEl).focus();
        }
      }
      /** @type {null} */
      mfp.currItem = null;
      /** @type {null} */
      mfp.content = null;
      /** @type {null} */
      mfp.currTemplate = null;
      /** @type {number} */
      mfp.prevHeight = 0;
      _mfpTrigger(AFTER_CLOSE_EVENT);
    },
    /**
     * @param {(Object|number)} winHeight
     * @return {undefined}
     */
    updateSize : function(winHeight) {
      if (mfp.isIOS) {
        /** @type {number} */
        var zoomLevel = document.documentElement.clientWidth / window.innerWidth;
        /** @type {number} */
        var height = window.innerHeight * zoomLevel;
        mfp.wrap.css("height", height);
        /** @type {number} */
        mfp.wH = height;
      } else {
        mfp.wH = winHeight || _window.height();
      }
      if (!mfp.fixedContentPos) {
        mfp.wrap.css("height", mfp.wH);
      }
      _mfpTrigger("Resize");
    },
    /**
     * @return {undefined}
     */
    updateItemHTML : function() {
      var item = mfp.items[mfp.index];
      mfp.contentContainer.detach();
      if (mfp.content) {
        mfp.content.detach();
      }
      if (!item.parsed) {
        item = mfp.parseEl(mfp.index);
      }
      var type = item.type;
      if (_mfpTrigger("BeforeChange", [mfp.currItem ? mfp.currItem.type : "", type]), mfp.currItem = item, !mfp.currTemplate[type]) {
        var markup = !!mfp.st[type] && mfp.st[type].markup;
        _mfpTrigger("FirstMarkupParse", markup);
        if (markup) {
          mfp.currTemplate[type] = $(markup);
        } else {
          /** @type {boolean} */
          mfp.currTemplate[type] = true;
        }
      }
      if (_prevContentType) {
        if (_prevContentType !== item.type) {
          mfp.container.removeClass("mfp-" + _prevContentType + "-holder");
        }
      }
      var newContent = mfp["get" + type.charAt(0).toUpperCase() + type.slice(1)](item, mfp.currTemplate[type]);
      mfp.appendContent(newContent, type);
      /** @type {boolean} */
      item.preloaded = true;
      _mfpTrigger(CHANGE_EVENT, item);
      _prevContentType = item.type;
      mfp.container.prepend(mfp.contentContainer);
      _mfpTrigger("AfterChange");
    },
    /**
     * @param {?} newContent
     * @param {string} type
     * @return {undefined}
     */
    appendContent : function(newContent, type) {
      mfp.content = newContent;
      if (newContent) {
        if (mfp.st.showCloseBtn && (mfp.st.closeBtnInside && mfp.currTemplate[type] === true)) {
          if (!mfp.content.find(".mfp-close").length) {
            mfp.content.append(_getCloseBtn());
          }
        } else {
          mfp.content = newContent;
        }
      } else {
        /** @type {string} */
        mfp.content = "";
      }
      _mfpTrigger(BEFORE_APPEND_EVENT);
      mfp.container.addClass("mfp-" + type + "-holder");
      mfp.contentContainer.append(mfp.content);
    },
    /**
     * @param {number} index
     * @return {?}
     */
    parseEl : function(index) {
      var type;
      var item = mfp.items[index];
      if (item.tagName ? item = {
        el : $(item)
      } : (type = item.type, item = {
        data : item,
        src : item.src
      }), item.el) {
        var types = mfp.types;
        /** @type {number} */
        var i = 0;
        for (;i < types.length;i++) {
          if (item.el.hasClass("mfp-" + types[i])) {
            type = types[i];
            break;
          }
        }
        item.src = item.el.attr("data-mfp-src");
        if (!item.src) {
          item.src = item.el.attr("href");
        }
      }
      return item.type = type || (mfp.st.type || "inline"), item.index = index, item.parsed = true, mfp.items[index] = item, _mfpTrigger("ElementParse", item), mfp.items[index];
    },
    /**
     * @param {Function} el
     * @param {Object} options
     * @return {undefined}
     */
    addGroup : function(el, options) {
      /**
       * @param {Event} e
       * @return {undefined}
       */
      var one = function(e) {
        e.mfpEl = this;
        mfp._openClick(e, el, options);
      };
      if (!options) {
        options = {};
      }
      /** @type {string} */
      var type = "click.magnificPopup";
      /** @type {Function} */
      options.mainEl = el;
      if (options.items) {
        /** @type {boolean} */
        options.isObj = true;
        el.off(type).on(type, one);
      } else {
        /** @type {boolean} */
        options.isObj = false;
        if (options.delegate) {
          el.off(type).on(type, options.delegate, one);
        } else {
          /** @type {Function} */
          options.items = el;
          el.off(type).on(type, one);
        }
      }
    },
    /**
     * @param {Event} e
     * @param {Object} el
     * @param {Object} options
     * @return {?}
     */
    _openClick : function(e, el, options) {
      var f = void 0 !== options.midClick ? options.midClick : $.magnificPopup.defaults.midClick;
      if (f || !(2 === e.which || (e.ctrlKey || (e.metaKey || (e.altKey || e.shiftKey))))) {
        var disableOn = void 0 !== options.disableOn ? options.disableOn : $.magnificPopup.defaults.disableOn;
        if (disableOn) {
          if ($.isFunction(disableOn)) {
            if (!disableOn.call(mfp)) {
              return true;
            }
          } else {
            if (_window.width() < disableOn) {
              return true;
            }
          }
        }
        if (e.type) {
          e.preventDefault();
          if (mfp.isOpen) {
            e.stopPropagation();
          }
        }
        options.el = $(e.mfpEl);
        if (options.delegate) {
          options.items = el.find(options.delegate);
        }
        mfp.open(options);
      }
    },
    /**
     * @param {string} status
     * @param {Object} text
     * @return {undefined}
     */
    updateStatus : function(status, text) {
      if (mfp.preloader) {
        if (_prevStatus !== status) {
          mfp.container.removeClass("mfp-s-" + _prevStatus);
        }
        if (!text) {
          if (!("loading" !== status)) {
            text = mfp.st.tLoading;
          }
        }
        var data = {
          status : status,
          text : text
        };
        _mfpTrigger("UpdateStatus", data);
        status = data.status;
        text = data.text;
        mfp.preloader.html(text);
        mfp.preloader.find("a").on("click", function(e) {
          e.stopImmediatePropagation();
        });
        mfp.container.addClass("mfp-s-" + status);
        /** @type {string} */
        _prevStatus = status;
      }
    },
    /**
     * @param {?} target
     * @return {?}
     */
    _checkIfClose : function(target) {
      if (!$(target).hasClass(vvar)) {
        var dw = mfp.st.closeOnContentClick;
        var dh = mfp.st.closeOnBgClick;
        if (dw && dh) {
          return true;
        }
        if (!mfp.content || ($(target).hasClass("mfp-close") || mfp.preloader && target === mfp.preloader[0])) {
          return true;
        }
        if (target === mfp.content[0] || $.contains(mfp.content[0], target)) {
          if (dw) {
            return true;
          }
        } else {
          if (dh && $.contains(document, target)) {
            return true;
          }
        }
        return false;
      }
    },
    /**
     * @param {string} optgroup
     * @return {undefined}
     */
    _addClassToMFP : function(optgroup) {
      mfp.bgOverlay.addClass(optgroup);
      mfp.wrap.addClass(optgroup);
    },
    /**
     * @param {string} optgroup
     * @return {undefined}
     */
    _removeClassFromMFP : function(optgroup) {
      this.bgOverlay.removeClass(optgroup);
      mfp.wrap.removeClass(optgroup);
    },
    /**
     * @param {(Object|boolean|number|string)} winHeight
     * @return {?}
     */
    _hasScrollBar : function(winHeight) {
      return(mfp.isIE7 ? _document.height() : document.body.scrollHeight) > (winHeight || _window.height());
    },
    /**
     * @return {undefined}
     */
    _setFocus : function() {
      (mfp.st.focus ? mfp.content.find(mfp.st.focus).eq(0) : mfp.wrap).focus();
    },
    /**
     * @param {Event} e
     * @return {?}
     */
    _onFocusIn : function(e) {
      return e.target === mfp.wrap[0] || $.contains(mfp.wrap[0], e.target) ? void 0 : (mfp._setFocus(), false);
    },
    /**
     * @param {Object} template
     * @param {Function} attributes
     * @param {Object} item
     * @return {undefined}
     */
    _parseMarkup : function(template, attributes, item) {
      var arr;
      if (item.data) {
        attributes = $.extend(item.data, attributes);
      }
      _mfpTrigger(MARKUP_PARSE_EVENT, [template, attributes, item]);
      $.each(attributes, function(key, value) {
        if (void 0 === value || value === false) {
          return true;
        }
        if (arr = key.split("_"), arr.length > 1) {
          var el = template.find(EVENT_NS + "-" + arr[0]);
          if (el.length > 0) {
            var val = arr[1];
            if ("replaceWith" === val) {
              if (el[0] !== value[0]) {
                el.replaceWith(value);
              }
            } else {
              if ("img" === val) {
                if (el.is("img")) {
                  el.attr("src", value);
                } else {
                  el.replaceWith($("<img>").attr("src", value).attr("class", el.attr("class")));
                }
              } else {
                el.attr(arr[1], value);
              }
            }
          }
        } else {
          template.find(EVENT_NS + "-" + key).html(value);
        }
      });
    },
    /**
     * @return {?}
     */
    _getScrollbarSize : function() {
      if (void 0 === mfp.scrollbarSize) {
        /** @type {Element} */
        var div = document.createElement("div");
        /** @type {string} */
        div.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;";
        document.body.appendChild(div);
        /** @type {number} */
        mfp.scrollbarSize = div.offsetWidth - div.clientWidth;
        document.body.removeChild(div);
      }
      return mfp.scrollbarSize;
    }
  };
  $.magnificPopup = {
    instance : null,
    proto : MagnificPopup.prototype,
    modules : [],
    /**
     * @param {Object} options
     * @param {number} index
     * @return {?}
     */
    open : function(options, index) {
      return _checkInstance(), options = options ? $.extend(true, {}, options) : {}, options.isObj = true, options.index = index || 0, this.instance.open(options);
    },
    /**
     * @return {?}
     */
    close : function() {
      return $.magnificPopup.instance && $.magnificPopup.instance.close();
    },
    /**
     * @param {string} name
     * @param {?} opt_attributes
     * @return {undefined}
     */
    registerModule : function(name, opt_attributes) {
      if (opt_attributes.options) {
        $.magnificPopup.defaults[name] = opt_attributes.options;
      }
      $.extend(this.proto, opt_attributes.proto);
      this.modules.push(name);
    },
    defaults : {
      disableOn : 0,
      key : null,
      midClick : false,
      mainClass : "",
      preloader : true,
      focus : "",
      closeOnContentClick : false,
      closeOnBgClick : true,
      closeBtnInside : true,
      showCloseBtn : true,
      enableEscapeKey : true,
      modal : false,
      alignTop : false,
      removalDelay : 0,
      prependTo : null,
      fixedContentPos : "auto",
      fixedBgPos : "auto",
      overflowY : "auto",
      closeMarkup : '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
      tClose : "Close (Esc)",
      tLoading : "Loading...",
      autoFocusLast : true
    }
  };
  /**
   * @param {Object} options
   * @return {?}
   */
  $.fn.magnificPopup = function(options) {
    _checkInstance();
    var jqEl = $(this);
    if ("string" == typeof options) {
      if ("open" === options) {
        var items;
        var itemOpts = _isJQ ? jqEl.data("magnificPopup") : jqEl[0].magnificPopup;
        /** @type {number} */
        var index = parseInt(arguments[1], 10) || 0;
        if (itemOpts.items) {
          items = itemOpts.items[index];
        } else {
          items = jqEl;
          if (itemOpts.delegate) {
            items = items.find(itemOpts.delegate);
          }
          items = items.eq(index);
        }
        mfp._openClick({
          mfpEl : items
        }, jqEl, itemOpts);
      } else {
        if (mfp.isOpen) {
          mfp[options].apply(mfp, Array.prototype.slice.call(arguments, 1));
        }
      }
    } else {
      options = $.extend(true, {}, options);
      if (_isJQ) {
        jqEl.data("magnificPopup", options);
      } else {
        /** @type {Object} */
        jqEl[0].magnificPopup = options;
      }
      mfp.addGroup(jqEl, options);
    }
    return jqEl;
  };
  var klass;
  var _inlinePlaceholder;
  var clone;
  /** @type {string} */
  var INLINE_NS = "inline";
  /**
   * @return {undefined}
   */
  var _putInlineElementsBack = function() {
    if (clone) {
      _inlinePlaceholder.after(clone.addClass(klass)).detach();
      /** @type {null} */
      clone = null;
    }
  };
  $.magnificPopup.registerModule(INLINE_NS, {
    options : {
      hiddenClass : "hide",
      markup : "",
      tNotFound : "Content not found"
    },
    proto : {
      /**
       * @return {undefined}
       */
      initInline : function() {
        mfp.types.push(INLINE_NS);
        _mfpOn(CLOSE_EVENT + "." + INLINE_NS, function() {
          _putInlineElementsBack();
        });
      },
      /**
       * @param {Object} item
       * @param {Object} template
       * @return {?}
       */
      getInline : function(item, template) {
        if (_putInlineElementsBack(), item.src) {
          var inlineSt = mfp.st.inline;
          var el = $(item.src);
          if (el.length) {
            var tbody = el[0].parentNode;
            if (tbody) {
              if (tbody.tagName) {
                if (!_inlinePlaceholder) {
                  klass = inlineSt.hiddenClass;
                  _inlinePlaceholder = _getEl(klass);
                  /** @type {string} */
                  klass = "mfp-" + klass;
                }
                clone = el.after(_inlinePlaceholder).detach().removeClass(klass);
              }
            }
            mfp.updateStatus("ready");
          } else {
            mfp.updateStatus("error", inlineSt.tNotFound);
            el = $("<div>");
          }
          return item.inlineElement = el, el;
        }
        return mfp.updateStatus("ready"), mfp._parseMarkup(template, {}, item), template;
      }
    }
  });
  var vvarText;
  /** @type {string} */
  var AJAX_NS = "ajax";
  /**
   * @return {undefined}
   */
  var _removeAjaxCursor = function() {
    if (vvarText) {
      $(document.body).removeClass(vvarText);
    }
  };
  /**
   * @return {undefined}
   */
  var _destroyAjaxRequest = function() {
    _removeAjaxCursor();
    if (mfp.req) {
      mfp.req.abort();
    }
  };
  $.magnificPopup.registerModule(AJAX_NS, {
    options : {
      settings : null,
      cursor : "mfp-ajax-cur",
      tError : '<a href="%url%">The content</a> could not be loaded.'
    },
    proto : {
      /**
       * @return {undefined}
       */
      initAjax : function() {
        mfp.types.push(AJAX_NS);
        vvarText = mfp.st.ajax.cursor;
        _mfpOn(CLOSE_EVENT + "." + AJAX_NS, _destroyAjaxRequest);
        _mfpOn("BeforeChange." + AJAX_NS, _destroyAjaxRequest);
      },
      /**
       * @param {Object} item
       * @return {?}
       */
      getAjax : function(item) {
        if (vvarText) {
          $(document.body).addClass(vvarText);
        }
        mfp.updateStatus("loading");
        var opts = $.extend({
          url : item.src,
          /**
           * @param {Object} products
           * @param {?} textStatus
           * @param {Object} jqXHR
           * @return {undefined}
           */
          success : function(products, textStatus, jqXHR) {
            var temp = {
              data : products,
              xhr : jqXHR
            };
            _mfpTrigger("ParseAjax", temp);
            mfp.appendContent($(temp.data), AJAX_NS);
            /** @type {boolean} */
            item.finished = true;
            _removeAjaxCursor();
            mfp._setFocus();
            setTimeout(function() {
              mfp.wrap.addClass(rvar);
            }, 16);
            mfp.updateStatus("ready");
            _mfpTrigger("AjaxContentAdded");
          },
          /**
           * @return {undefined}
           */
          error : function() {
            _removeAjaxCursor();
            /** @type {boolean} */
            item.finished = item.loadError = true;
            mfp.updateStatus("error", mfp.st.ajax.tError.replace("%url%", item.src));
          }
        }, mfp.st.ajax.settings);
        return mfp.req = $.ajax(opts), "";
      }
    }
  });
  var id;
  /**
   * @param {Object} item
   * @return {?}
   */
  var _getTitle = function(item) {
    if (item.data && void 0 !== item.data.title) {
      return item.data.title;
    }
    var src = mfp.st.image.titleSrc;
    if (src) {
      if ($.isFunction(src)) {
        return src.call(mfp, item);
      }
      if (item.el) {
        return item.el.attr(src) || "";
      }
    }
    return "";
  };
  $.magnificPopup.registerModule("image", {
    options : {
      markup : '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
      cursor : "mfp-zoom-out-cur",
      titleSrc : "title",
      verticalFit : true,
      tError : '<a href="%url%">The image</a> could not be loaded.'
    },
    proto : {
      /**
       * @return {undefined}
       */
      initImage : function() {
        var imgSt = mfp.st.image;
        /** @type {string} */
        var ns = ".image";
        mfp.types.push("image");
        _mfpOn(OPEN_EVENT + ns, function() {
          if ("image" === mfp.currItem.type) {
            if (imgSt.cursor) {
              $(document.body).addClass(imgSt.cursor);
            }
          }
        });
        _mfpOn(CLOSE_EVENT + ns, function() {
          if (imgSt.cursor) {
            $(document.body).removeClass(imgSt.cursor);
          }
          _window.off("resize" + EVENT_NS);
        });
        _mfpOn("Resize" + ns, mfp.resizeImage);
        if (mfp.isLowIE) {
          _mfpOn("AfterChange", mfp.resizeImage);
        }
      },
      /**
       * @return {undefined}
       */
      resizeImage : function() {
        var item = mfp.currItem;
        if (item && (item.img && mfp.st.image.verticalFit)) {
          /** @type {number} */
          var decr = 0;
          if (mfp.isLowIE) {
            /** @type {number} */
            decr = parseInt(item.img.css("padding-top"), 10) + parseInt(item.img.css("padding-bottom"), 10);
          }
          item.img.css("max-height", mfp.wH - decr);
        }
      },
      /**
       * @param {Object} item
       * @return {undefined}
       */
      _onImageHasSize : function(item) {
        if (item.img) {
          /** @type {boolean} */
          item.hasSize = true;
          if (id) {
            clearInterval(id);
          }
          /** @type {boolean} */
          item.isCheckingImgSize = false;
          _mfpTrigger("ImageHasSize", item);
          if (item.imgHidden) {
            if (mfp.content) {
              mfp.content.removeClass("mfp-loading");
            }
            /** @type {boolean} */
            item.imgHidden = false;
          }
        }
      },
      /**
       * @param {Object} item
       * @return {undefined}
       */
      findImageSize : function(item) {
        /** @type {number} */
        var c = 0;
        var img = item.img[0];
        /**
         * @param {number} delay
         * @return {undefined}
         */
        var mfpSetInterval = function(delay) {
          if (id) {
            clearInterval(id);
          }
          /** @type {number} */
          id = setInterval(function() {
            return img.naturalWidth > 0 ? void mfp._onImageHasSize(item) : (c > 200 && clearInterval(id), c++, void(3 === c ? mfpSetInterval(10) : 40 === c ? mfpSetInterval(50) : 100 === c && mfpSetInterval(500)));
          }, delay);
        };
        mfpSetInterval(1);
      },
      /**
       * @param {Object} item
       * @param {Object} template
       * @return {?}
       */
      getImage : function(item, template) {
        /** @type {number} */
        var e = 0;
        /**
         * @return {undefined}
         */
        var onLoadComplete = function() {
          if (item) {
            if (item.img[0].complete) {
              item.img.off(".mfploader");
              if (item === mfp.currItem) {
                mfp._onImageHasSize(item);
                mfp.updateStatus("ready");
              }
              /** @type {boolean} */
              item.hasSize = true;
              /** @type {boolean} */
              item.loaded = true;
              _mfpTrigger("ImageLoadComplete");
            } else {
              e++;
              if (200 > e) {
                setTimeout(onLoadComplete, 100);
              } else {
                onLoadError();
              }
            }
          }
        };
        /**
         * @return {undefined}
         */
        var onLoadError = function() {
          if (item) {
            item.img.off(".mfploader");
            if (item === mfp.currItem) {
              mfp._onImageHasSize(item);
              mfp.updateStatus("error", imgSt.tError.replace("%url%", item.src));
            }
            /** @type {boolean} */
            item.hasSize = true;
            /** @type {boolean} */
            item.loaded = true;
            /** @type {boolean} */
            item.loadError = true;
          }
        };
        var imgSt = mfp.st.image;
        var $el = template.find(".mfp-img");
        if ($el.length) {
          /** @type {Element} */
          var img = document.createElement("img");
          /** @type {string} */
          img.className = "mfp-img";
          if (item.el) {
            if (item.el.find("img").length) {
              img.alt = item.el.find("img").attr("alt");
            }
          }
          item.img = $(img).on("load.mfploader", onLoadComplete).on("error.mfploader", onLoadError);
          img.src = item.src;
          if ($el.is("img")) {
            item.img = item.img.clone();
          }
          img = item.img[0];
          if (img.naturalWidth > 0) {
            /** @type {boolean} */
            item.hasSize = true;
          } else {
            if (!img.width) {
              /** @type {boolean} */
              item.hasSize = false;
            }
          }
        }
        return mfp._parseMarkup(template, {
          title : _getTitle(item),
          img_replaceWith : item.img
        }, item), mfp.resizeImage(), item.hasSize ? (id && clearInterval(id), item.loadError ? (template.addClass("mfp-loading"), mfp.updateStatus("error", imgSt.tError.replace("%url%", item.src))) : (template.removeClass("mfp-loading"), mfp.updateStatus("ready")), template) : (mfp.updateStatus("loading"), item.loading = true, item.hasSize || (item.imgHidden = true, template.addClass("mfp-loading"), mfp.findImageSize(item)), template);
      }
    }
  });
  var N;
  /**
   * @return {?}
   */
  var getHasMozTransform = function() {
    return void 0 === N && (N = void 0 !== document.createElement("p").style.MozTransform), N;
  };
  $.magnificPopup.registerModule("zoom", {
    options : {
      enabled : false,
      easing : "ease-in-out",
      duration : 300,
      /**
       * @param {Object} element
       * @return {?}
       */
      opener : function(element) {
        return element.is("img") ? element : element.find("img");
      }
    },
    proto : {
      /**
       * @return {undefined}
       */
      initZoom : function() {
        var div;
        var zoomSt = mfp.st.zoom;
        /** @type {string} */
        var ns = ".zoom";
        if (zoomSt.enabled && mfp.supportsTransition) {
          var to;
          var span;
          var duration = zoomSt.duration;
          /**
           * @param {?} image
           * @return {?}
           */
          var getElToAnimate = function(image) {
            var newImg = image.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image");
            /** @type {string} */
            var transition = "all " + zoomSt.duration / 1E3 + "s " + zoomSt.easing;
            var cssObj = {
              position : "fixed",
              zIndex : 9999,
              left : 0,
              top : 0,
              "-webkit-backface-visibility" : "hidden"
            };
            /** @type {string} */
            var t = "transition";
            return cssObj["-webkit-" + t] = cssObj["-moz-" + t] = cssObj["-o-" + t] = cssObj[t] = transition, newImg.css(cssObj), newImg;
          };
          /**
           * @return {undefined}
           */
          var showMainContent = function() {
            mfp.content.css("visibility", "visible");
          };
          _mfpOn("BuildControls" + ns, function() {
            if (mfp._allowZoom()) {
              if (clearTimeout(to), mfp.content.css("visibility", "hidden"), div = mfp._getItemToZoom(), !div) {
                return void showMainContent();
              }
              span = getElToAnimate(div);
              span.css(mfp._getOffset());
              mfp.wrap.append(span);
              /** @type {number} */
              to = setTimeout(function() {
                span.css(mfp._getOffset(true));
                /** @type {number} */
                to = setTimeout(function() {
                  showMainContent();
                  setTimeout(function() {
                    span.remove();
                    /** @type {null} */
                    div = span = null;
                    _mfpTrigger("ZoomAnimationEnded");
                  }, 16);
                }, duration);
              }, 16);
            }
          });
          _mfpOn(BEFORE_CLOSE_EVENT + ns, function() {
            if (mfp._allowZoom()) {
              if (clearTimeout(to), mfp.st.removalDelay = duration, !div) {
                if (div = mfp._getItemToZoom(), !div) {
                  return;
                }
                span = getElToAnimate(div);
              }
              span.css(mfp._getOffset(true));
              mfp.wrap.append(span);
              mfp.content.css("visibility", "hidden");
              setTimeout(function() {
                span.css(mfp._getOffset());
              }, 16);
            }
          });
          _mfpOn(CLOSE_EVENT + ns, function() {
            if (mfp._allowZoom()) {
              showMainContent();
              if (span) {
                span.remove();
              }
              /** @type {null} */
              div = null;
            }
          });
        }
      },
      /**
       * @return {?}
       */
      _allowZoom : function() {
        return "image" === mfp.currItem.type;
      },
      /**
       * @return {?}
       */
      _getItemToZoom : function() {
        return!!mfp.currItem.hasSize && mfp.currItem.img;
      },
      /**
       * @param {boolean} dataAndEvents
       * @return {?}
       */
      _getOffset : function(dataAndEvents) {
        var parent;
        parent = dataAndEvents ? mfp.currItem.img : mfp.st.zoom.opener(mfp.currItem.el || mfp.currItem);
        var offset = parent.offset();
        /** @type {number} */
        var paddingTop = parseInt(parent.css("padding-top"), 10);
        /** @type {number} */
        var paddingBottom = parseInt(parent.css("padding-bottom"), 10);
        offset.top -= $(window).scrollTop() - paddingTop;
        var obj = {
          width : parent.width(),
          height : (_isJQ ? parent.innerHeight() : parent[0].offsetHeight) - paddingBottom - paddingTop
        };
        return getHasMozTransform() ? obj["-moz-transform"] = obj.transform = "translate(" + offset.left + "px," + offset.top + "px)" : (obj.left = offset.left, obj.top = offset.top), obj;
      }
    }
  });
  /** @type {string} */
  var IFRAME_NS = "iframe";
  /** @type {string} */
  var path = "//about:blank";
  /**
   * @param {boolean} isShowing
   * @return {undefined}
   */
  var _fixIframeBugs = function(isShowing) {
    if (mfp.currTemplate[IFRAME_NS]) {
      var el = mfp.currTemplate[IFRAME_NS].find("iframe");
      if (el.length) {
        if (!isShowing) {
          /** @type {string} */
          el[0].src = path;
        }
        if (mfp.isIE8) {
          el.css("display", isShowing ? "block" : "none");
        }
      }
    }
  };
  $.magnificPopup.registerModule(IFRAME_NS, {
    options : {
      markup : '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
      srcAction : "iframe_src",
      patterns : {
        youtube : {
          index : "youtube.com",
          id : "v=",
          src : "//www.youtube.com/embed/%id%?autoplay=1"
        },
        vimeo : {
          index : "vimeo.com/",
          id : "/",
          src : "//player.vimeo.com/video/%id%?autoplay=1"
        },
        gmaps : {
          index : "//maps.google.",
          src : "%id%&output=embed"
        }
      }
    },
    proto : {
      /**
       * @return {undefined}
       */
      initIframe : function() {
        mfp.types.push(IFRAME_NS);
        _mfpOn("BeforeChange", function(dataAndEvents, prevType, newType) {
          if (prevType !== newType) {
            if (prevType === IFRAME_NS) {
              _fixIframeBugs();
            } else {
              if (newType === IFRAME_NS) {
                _fixIframeBugs(true);
              }
            }
          }
        });
        _mfpOn(CLOSE_EVENT + "." + IFRAME_NS, function() {
          _fixIframeBugs();
        });
      },
      /**
       * @param {Object} item
       * @param {Object} template
       * @return {?}
       */
      getIframe : function(item, template) {
        var embedSrc = item.src;
        var iframeSt = mfp.st.iframe;
        $.each(iframeSt.patterns, function() {
          return embedSrc.indexOf(this.index) > -1 ? (this.id && (embedSrc = "string" == typeof this.id ? embedSrc.substr(embedSrc.lastIndexOf(this.id) + this.id.length, embedSrc.length) : this.id.call(this, embedSrc)), embedSrc = this.src.replace("%id%", embedSrc), false) : void 0;
        });
        var dataObj = {};
        return iframeSt.srcAction && (dataObj[iframeSt.srcAction] = embedSrc), mfp._parseMarkup(template, dataObj, item), mfp.updateStatus("ready"), template;
      }
    }
  });
  /**
   * @param {string} index
   * @return {?}
   */
  var _getLoopedId = function(index) {
    var numSlides = mfp.items.length;
    return index > numSlides - 1 ? index - numSlides : 0 > index ? numSlides + index : index;
  };
  /**
   * @param {string} text
   * @param {number} curr
   * @param {?} total
   * @return {?}
   */
  var _replaceCurrTotal = function(text, curr, total) {
    return text.replace(/%curr%/gi, curr + 1).replace(/%total%/gi, total);
  };
  $.magnificPopup.registerModule("gallery", {
    options : {
      enabled : false,
      arrowMarkup : '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
      preload : [0, 2],
      navigateByImgClick : true,
      arrows : true,
      tPrev : "Previous (Left arrow key)",
      tNext : "Next (Right arrow key)",
      tCounter : "%curr% of %total%"
    },
    proto : {
      /**
       * @return {?}
       */
      initGallery : function() {
        var gSt = mfp.st.gallery;
        /** @type {string} */
        var ns = ".mfp-gallery";
        return mfp.direction = true, !(!gSt || !gSt.enabled) && (optgroup += " mfp-gallery", _mfpOn(OPEN_EVENT + ns, function() {
          if (gSt.navigateByImgClick) {
            mfp.wrap.on("click" + ns, ".mfp-img", function() {
              return mfp.items.length > 1 ? (mfp.next(), false) : void 0;
            });
          }
          _document.on("keydown" + ns, function(event) {
            if (37 === event.keyCode) {
              mfp.prev();
            } else {
              if (39 === event.keyCode) {
                mfp.next();
              }
            }
          });
        }), _mfpOn("UpdateStatus" + ns, function(dataAndEvents, data) {
          if (data.text) {
            data.text = _replaceCurrTotal(data.text, mfp.currItem.index, mfp.items.length);
          }
        }), _mfpOn(MARKUP_PARSE_EVENT + ns, function(dataAndEvents, deepDataAndEvents, $scope, item) {
          var l = mfp.items.length;
          $scope.counter = l > 1 ? _replaceCurrTotal(gSt.tCounter, item.index, l) : "";
        }), _mfpOn("BuildControls" + ns, function() {
          if (mfp.items.length > 1 && (gSt.arrows && !mfp.arrowLeft)) {
            var markup = gSt.arrowMarkup;
            var $next = mfp.arrowLeft = $(markup.replace(/%title%/gi, gSt.tPrev).replace(/%dir%/gi, "left")).addClass(vvar);
            var optgroup = mfp.arrowRight = $(markup.replace(/%title%/gi, gSt.tNext).replace(/%dir%/gi, "right")).addClass(vvar);
            $next.click(function() {
              mfp.prev();
            });
            optgroup.click(function() {
              mfp.next();
            });
            mfp.container.append($next.add(optgroup));
          }
        }), _mfpOn(CHANGE_EVENT + ns, function() {
          if (mfp._preloadTimeout) {
            clearTimeout(mfp._preloadTimeout);
          }
          /** @type {number} */
          mfp._preloadTimeout = setTimeout(function() {
            mfp.preloadNearbyImages();
            /** @type {null} */
            mfp._preloadTimeout = null;
          }, 16);
        }), void _mfpOn(CLOSE_EVENT + ns, function() {
          _document.off(ns);
          mfp.wrap.off("click" + ns);
          /** @type {null} */
          mfp.arrowRight = mfp.arrowLeft = null;
        }));
      },
      /**
       * @return {undefined}
       */
      next : function() {
        /** @type {boolean} */
        mfp.direction = true;
        mfp.index = _getLoopedId(mfp.index + 1);
        mfp.updateItemHTML();
      },
      /**
       * @return {undefined}
       */
      prev : function() {
        /** @type {boolean} */
        mfp.direction = false;
        mfp.index = _getLoopedId(mfp.index - 1);
        mfp.updateItemHTML();
      },
      /**
       * @param {number} newIndex
       * @return {undefined}
       */
      goTo : function(newIndex) {
        /** @type {boolean} */
        mfp.direction = newIndex >= mfp.index;
        /** @type {number} */
        mfp.index = newIndex;
        mfp.updateItemHTML();
      },
      /**
       * @return {undefined}
       */
      preloadNearbyImages : function() {
        var i;
        var p = mfp.st.gallery.preload;
        /** @type {number} */
        var preloadBefore = Math.min(p[0], mfp.items.length);
        /** @type {number} */
        var preloadAfter = Math.min(p[1], mfp.items.length);
        /** @type {number} */
        i = 1;
        for (;i <= (mfp.direction ? preloadAfter : preloadBefore);i++) {
          mfp._preloadItem(mfp.index + i);
        }
        /** @type {number} */
        i = 1;
        for (;i <= (mfp.direction ? preloadBefore : preloadAfter);i++) {
          mfp._preloadItem(mfp.index - i);
        }
      },
      /**
       * @param {(number|string)} index
       * @return {undefined}
       */
      _preloadItem : function(index) {
        if (index = _getLoopedId(index), !mfp.items[index].preloaded) {
          var item = mfp.items[index];
          if (!item.parsed) {
            item = mfp.parseEl(index);
          }
          _mfpTrigger("LazyLoad", item);
          if ("image" === item.type) {
            item.img = $('<img class="mfp-img" />').on("load.mfploader", function() {
              /** @type {boolean} */
              item.hasSize = true;
            }).on("error.mfploader", function() {
              /** @type {boolean} */
              item.hasSize = true;
              /** @type {boolean} */
              item.loadError = true;
              _mfpTrigger("LazyLoadError", item);
            }).attr("src", item.src);
          }
          /** @type {boolean} */
          item.preloaded = true;
        }
      }
    }
  });
  /** @type {string} */
  var RETINA_NS = "retina";
  $.magnificPopup.registerModule(RETINA_NS, {
    options : {
      /**
       * @param {Element} item
       * @return {?}
       */
      replaceSrc : function(item) {
        return item.src.replace(/\.\w+$/, function(dataAndEvents) {
          return "@2x" + dataAndEvents;
        });
      },
      ratio : 1
    },
    proto : {
      /**
       * @return {undefined}
       */
      initRetina : function() {
        if (window.devicePixelRatio > 1) {
          var st = mfp.st.retina;
          var ratio = st.ratio;
          ratio = isNaN(ratio) ? ratio() : ratio;
          if (ratio > 1) {
            _mfpOn("ImageHasSize." + RETINA_NS, function(dataAndEvents, item) {
              item.img.css({
                "max-width" : item.img[0].naturalWidth / ratio,
                width : "100%"
              });
            });
            _mfpOn("ElementParse." + RETINA_NS, function(dataAndEvents, item) {
              item.src = st.replaceSrc(item, ratio);
            });
          }
        }
      }
    }
  });
  _checkInstance();
}), !function() {
  /**
   * @param {Object} params
   * @return {undefined}
   */
  function self(params) {
    if (!params) {
      throw new Error("No options passed to Waypoint constructor");
    }
    if (!params.element) {
      throw new Error("No element option passed to Waypoint constructor");
    }
    if (!params.handler) {
      throw new Error("No handler option passed to Waypoint constructor");
    }
    this.key = "waypoint-" + maxNodeId;
    this.options = self.Adapter.extend({}, self.defaults, params);
    this.element = this.options.element;
    this.adapter = new self.Adapter(this.element);
    this.callback = params.handler;
    /** @type {string} */
    this.axis = this.options.horizontal ? "horizontal" : "vertical";
    this.enabled = this.options.enabled;
    /** @type {null} */
    this.triggerPoint = null;
    this.group = self.Group.findOrCreate({
      name : this.options.group,
      axis : this.axis
    });
    this.context = self.Context.findOrCreateByElement(this.options.context);
    if (self.offsetAliases[this.options.offset]) {
      this.options.offset = self.offsetAliases[this.options.offset];
    }
    this.group.add(this);
    this.context.add(this);
    elems[this.key] = this;
    maxNodeId += 1;
  }
  /** @type {number} */
  var maxNodeId = 0;
  var elems = {};
  /**
   * @param {?} conditional
   * @return {undefined}
   */
  self.prototype.queueTrigger = function(conditional) {
    this.group.queueTrigger(this, conditional);
  };
  /**
   * @param {string} type
   * @return {undefined}
   */
  self.prototype.trigger = function(type) {
    if (this.enabled) {
      if (this.callback) {
        this.callback.apply(this, type);
      }
    }
  };
  /**
   * @return {undefined}
   */
  self.prototype.destroy = function() {
    this.context.remove(this);
    this.group.remove(this);
    delete elems[this.key];
  };
  /**
   * @return {?}
   */
  self.prototype.disable = function() {
    return this.enabled = false, this;
  };
  /**
   * @return {?}
   */
  self.prototype.enable = function() {
    return this.context.refresh(), this.enabled = true, this;
  };
  /**
   * @return {?}
   */
  self.prototype.next = function() {
    return this.group.next(this);
  };
  /**
   * @return {?}
   */
  self.prototype.previous = function() {
    return this.group.previous(this);
  };
  /**
   * @param {string} eventName
   * @return {undefined}
   */
  self.invokeAll = function(eventName) {
    /** @type {Array} */
    var cache = [];
    var i;
    for (i in elems) {
      cache.push(elems[i]);
    }
    /** @type {number} */
    var id = 0;
    /** @type {number} */
    var ln = cache.length;
    for (;ln > id;id++) {
      cache[id][eventName]();
    }
  };
  /**
   * @return {undefined}
   */
  self.destroyAll = function() {
    self.invokeAll("destroy");
  };
  /**
   * @return {undefined}
   */
  self.disableAll = function() {
    self.invokeAll("disable");
  };
  /**
   * @return {undefined}
   */
  self.enableAll = function() {
    self.invokeAll("enable");
  };
  /**
   * @return {undefined}
   */
  self.refreshAll = function() {
    self.Context.refreshAll();
  };
  /**
   * @return {?}
   */
  self.viewportHeight = function() {
    return window.innerHeight || document.documentElement.clientHeight;
  };
  /**
   * @return {?}
   */
  self.viewportWidth = function() {
    return document.documentElement.clientWidth;
  };
  /** @type {Array} */
  self.adapters = [];
  self.defaults = {
    context : window,
    continuous : true,
    enabled : true,
    group : "default",
    horizontal : false,
    offset : 0
  };
  self.offsetAliases = {
    /**
     * @return {?}
     */
    "bottom-in-view" : function() {
      return this.context.innerHeight() - this.adapter.outerHeight();
    },
    /**
     * @return {?}
     */
    "right-in-view" : function() {
      return this.context.innerWidth() - this.adapter.outerWidth();
    }
  };
  /** @type {function (Object): undefined} */
  window.Waypoint = self;
}(), function() {
  /**
   * @param {Function} loop
   * @return {undefined}
   */
  function requestAnimationFrame(loop) {
    window.setTimeout(loop, 1E3 / 60);
  }
  /**
   * @param {?} node
   * @return {undefined}
   */
  function Context(node) {
    this.element = node;
    this.Adapter = exports.Adapter;
    this.adapter = new this.Adapter(node);
    this.key = "waypoint-context-" + maxNodeId;
    /** @type {boolean} */
    this.didScroll = false;
    /** @type {boolean} */
    this.didResize = false;
    this.oldScroll = {
      x : this.adapter.scrollLeft(),
      y : this.adapter.scrollTop()
    };
    this.waypoints = {
      vertical : {},
      horizontal : {}
    };
    node.waypointContextKey = this.key;
    map[node.waypointContextKey] = this;
    maxNodeId += 1;
    this.createThrottledScrollHandler();
    this.createThrottledResizeHandler();
  }
  /** @type {number} */
  var maxNodeId = 0;
  var map = {};
  var exports = window.Waypoint;
  /** @type {function (): undefined} */
  var prevOnLoad = window.onload;
  /**
   * @param {string} name
   * @return {undefined}
   */
  Context.prototype.add = function(name) {
    /** @type {string} */
    var localeName = name.options.horizontal ? "horizontal" : "vertical";
    /** @type {string} */
    this.waypoints[localeName][name.key] = name;
    this.refresh();
  };
  /**
   * @return {undefined}
   */
  Context.prototype.checkEmpty = function() {
    var a = this.Adapter.isEmptyObject(this.waypoints.horizontal);
    var b = this.Adapter.isEmptyObject(this.waypoints.vertical);
    if (a) {
      if (b) {
        this.adapter.off(".waypoints");
        delete map[this.key];
      }
    }
  };
  /**
   * @return {undefined}
   */
  Context.prototype.createThrottledResizeHandler = function() {
    /**
     * @return {undefined}
     */
    function loop() {
      self.handleResize();
      /** @type {boolean} */
      self.didResize = false;
    }
    var self = this;
    this.adapter.on("resize.waypoints", function() {
      if (!self.didResize) {
        /** @type {boolean} */
        self.didResize = true;
        exports.requestAnimationFrame(loop);
      }
    });
  };
  /**
   * @return {undefined}
   */
  Context.prototype.createThrottledScrollHandler = function() {
    /**
     * @return {undefined}
     */
    function loop() {
      scope.handleScroll();
      /** @type {boolean} */
      scope.didScroll = false;
    }
    var scope = this;
    this.adapter.on("scroll.waypoints", function() {
      if (!scope.didScroll || exports.isTouch) {
        /** @type {boolean} */
        scope.didScroll = true;
        exports.requestAnimationFrame(loop);
      }
    });
  };
  /**
   * @return {undefined}
   */
  Context.prototype.handleResize = function() {
    exports.Context.refreshAll();
  };
  /**
   * @return {undefined}
   */
  Context.prototype.handleScroll = function() {
    var map = {};
    var axes = {
      horizontal : {
        newScroll : this.adapter.scrollLeft(),
        oldScroll : this.oldScroll.x,
        forward : "right",
        backward : "left"
      },
      vertical : {
        newScroll : this.adapter.scrollTop(),
        oldScroll : this.oldScroll.y,
        forward : "down",
        backward : "up"
      }
    };
    var i;
    for (i in axes) {
      var axis = axes[i];
      /** @type {boolean} */
      var isForward = axis.newScroll > axis.oldScroll;
      var o = isForward ? axis.forward : axis.backward;
      var label;
      for (label in this.waypoints[i]) {
        var s = this.waypoints[i][label];
        /** @type {boolean} */
        var a = axis.oldScroll < s.triggerPoint;
        /** @type {boolean} */
        var b = axis.newScroll >= s.triggerPoint;
        /** @type {boolean} */
        var program = a && b;
        /** @type {boolean} */
        var inverse = !a && !b;
        if (program || inverse) {
          s.queueTrigger(o);
          map[s.group.id] = s.group;
        }
      }
    }
    var letter;
    for (letter in map) {
      map[letter].flushTriggers();
    }
    this.oldScroll = {
      x : axes.horizontal.newScroll,
      y : axes.vertical.newScroll
    };
  };
  /**
   * @return {?}
   */
  Context.prototype.innerHeight = function() {
    return this.element == this.element.window ? exports.viewportHeight() : this.adapter.innerHeight();
  };
  /**
   * @param {string} name
   * @return {undefined}
   */
  Context.prototype.remove = function(name) {
    delete this.waypoints[name.axis][name.key];
    this.checkEmpty();
  };
  /**
   * @return {?}
   */
  Context.prototype.innerWidth = function() {
    return this.element == this.element.window ? exports.viewportWidth() : this.adapter.innerWidth();
  };
  /**
   * @return {undefined}
   */
  Context.prototype.destroy = function() {
    /** @type {Array} */
    var children = [];
    var inputIndex;
    for (inputIndex in this.waypoints) {
      var key;
      for (key in this.waypoints[inputIndex]) {
        children.push(this.waypoints[inputIndex][key]);
      }
    }
    /** @type {number} */
    var i = 0;
    /** @type {number} */
    var l = children.length;
    for (;l > i;i++) {
      children[i].destroy();
    }
  };
  /**
   * @return {?}
   */
  Context.prototype.refresh = function() {
    var axes;
    /** @type {boolean} */
    var isWin = this.element == this.element.window;
    var otherElementRect = isWin ? void 0 : this.adapter.offset();
    var map = {};
    this.handleScroll();
    axes = {
      horizontal : {
        contextOffset : isWin ? 0 : otherElementRect.left,
        contextScroll : isWin ? 0 : this.oldScroll.x,
        contextDimension : this.innerWidth(),
        oldScroll : this.oldScroll.x,
        forward : "right",
        backward : "left",
        offsetProp : "left"
      },
      vertical : {
        contextOffset : isWin ? 0 : otherElementRect.top,
        contextScroll : isWin ? 0 : this.oldScroll.y,
        contextDimension : this.innerHeight(),
        oldScroll : this.oldScroll.y,
        forward : "down",
        backward : "up",
        offsetProp : "top"
      }
    };
    var key;
    for (key in axes) {
      var axis = axes[key];
      var i;
      for (i in this.waypoints[key]) {
        var arr;
        var object;
        var property;
        var value;
        var a;
        var self = this.waypoints[key][i];
        var val = self.options.offset;
        var v = self.triggerPoint;
        /** @type {number} */
        var inner = 0;
        /** @type {boolean} */
        var u = null == v;
        if (self.element !== self.element.window) {
          inner = self.adapter.offset()[axis.offsetProp];
        }
        if ("function" == typeof val) {
          val = val.apply(self);
        } else {
          if ("string" == typeof val) {
            /** @type {number} */
            val = parseFloat(val);
            if (self.options.offset.indexOf("%") > -1) {
              /** @type {number} */
              val = Math.ceil(axis.contextDimension * val / 100);
            }
          }
        }
        /** @type {number} */
        arr = axis.contextScroll - axis.contextOffset;
        /** @type {number} */
        self.triggerPoint = inner + arr - val;
        /** @type {boolean} */
        object = v < axis.oldScroll;
        /** @type {boolean} */
        property = self.triggerPoint >= axis.oldScroll;
        /** @type {boolean} */
        value = object && property;
        /** @type {boolean} */
        a = !object && !property;
        if (!u && value) {
          self.queueTrigger(axis.backward);
          map[self.group.id] = self.group;
        } else {
          if (!u && a) {
            self.queueTrigger(axis.forward);
            map[self.group.id] = self.group;
          } else {
            if (u) {
              if (axis.oldScroll >= self.triggerPoint) {
                self.queueTrigger(axis.forward);
                map[self.group.id] = self.group;
              }
            }
          }
        }
      }
    }
    return exports.requestAnimationFrame(function() {
      var letter;
      for (letter in map) {
        map[letter].flushTriggers();
      }
    }), this;
  };
  /**
   * @param {?} node
   * @return {?}
   */
  Context.findOrCreateByElement = function(node) {
    return Context.findByElement(node) || new Context(node);
  };
  /**
   * @return {undefined}
   */
  Context.refreshAll = function() {
    var letter;
    for (letter in map) {
      map[letter].refresh();
    }
  };
  /**
   * @param {?} dataAndEvents
   * @return {?}
   */
  Context.findByElement = function(dataAndEvents) {
    return map[dataAndEvents.waypointContextKey];
  };
  /**
   * @return {undefined}
   */
  window.onload = function() {
    if (prevOnLoad) {
      prevOnLoad();
    }
    Context.refreshAll();
  };
  /**
   * @param {Function} cb
   * @return {undefined}
   */
  exports.requestAnimationFrame = function(cb) {
    /** @type {function (this:Window, function (number): ?, (Element|null)=): number} */
    var fn = window.requestAnimationFrame || (window.mozRequestAnimationFrame || (window.webkitRequestAnimationFrame || requestAnimationFrame));
    fn.call(window, cb);
  };
  /** @type {function (?): undefined} */
  exports.Context = Context;
}(), function() {
  /**
   * @param {?} a
   * @param {?} b
   * @return {?}
   */
  function sortFn(a, b) {
    return a.triggerPoint - b.triggerPoint;
  }
  /**
   * @param {?} b
   * @param {?} a
   * @return {?}
   */
  function selector_sortOrder(b, a) {
    return a.triggerPoint - b.triggerPoint;
  }
  /**
   * @param {Object} definition
   * @return {undefined}
   */
  function self(definition) {
    this.name = definition.name;
    this.axis = definition.axis;
    /** @type {string} */
    this.id = this.name + "-" + this.axis;
    /** @type {Array} */
    this.waypoints = [];
    this.clearTriggerQueues();
    scope[this.axis][this.name] = this;
  }
  var scope = {
    vertical : {},
    horizontal : {}
  };
  var exports = window.Waypoint;
  /**
   * @param {string} name
   * @return {undefined}
   */
  self.prototype.add = function(name) {
    this.waypoints.push(name);
  };
  /**
   * @return {undefined}
   */
  self.prototype.clearTriggerQueues = function() {
    this.triggerQueues = {
      up : [],
      down : [],
      left : [],
      right : []
    };
  };
  /**
   * @return {undefined}
   */
  self.prototype.flushTriggers = function() {
    var right;
    for (right in this.triggerQueues) {
      var ca = this.triggerQueues[right];
      /** @type {boolean} */
      var descending = "up" === right || "left" === right;
      ca.sort(descending ? selector_sortOrder : sortFn);
      /** @type {number} */
      var i = 0;
      var l = ca.length;
      for (;l > i;i += 1) {
        var c = ca[i];
        if (c.options.continuous || i === ca.length - 1) {
          c.trigger([right]);
        }
      }
    }
    this.clearTriggerQueues();
  };
  /**
   * @param {string} arg
   * @return {?}
   */
  self.prototype.next = function(arg) {
    this.waypoints.sort(sortFn);
    var type = exports.Adapter.inArray(arg, this.waypoints);
    /** @type {boolean} */
    var isCSS = type === this.waypoints.length - 1;
    return isCSS ? null : this.waypoints[type + 1];
  };
  /**
   * @param {?} fn
   * @return {?}
   */
  self.prototype.previous = function(fn) {
    this.waypoints.sort(sortFn);
    var name = exports.Adapter.inArray(fn, this.waypoints);
    return name ? this.waypoints[name - 1] : null;
  };
  /**
   * @param {?} ctor
   * @param {?} name
   * @return {undefined}
   */
  self.prototype.queueTrigger = function(ctor, name) {
    this.triggerQueues[name].push(ctor);
  };
  /**
   * @param {string} name
   * @return {undefined}
   */
  self.prototype.remove = function(name) {
    var indexOf = exports.Adapter.inArray(name, this.waypoints);
    if (indexOf > -1) {
      this.waypoints.splice(indexOf, 1);
    }
  };
  /**
   * @return {?}
   */
  self.prototype.first = function() {
    return this.waypoints[0];
  };
  /**
   * @return {?}
   */
  self.prototype.last = function() {
    return this.waypoints[this.waypoints.length - 1];
  };
  /**
   * @param {Object} obj
   * @return {?}
   */
  self.findOrCreate = function(obj) {
    return scope[obj.axis][obj.name] || new self(obj);
  };
  /** @type {function (Object): undefined} */
  exports.Group = self;
}(), function() {
  /**
   * @param {string} element
   * @return {undefined}
   */
  function cache(element) {
    this.$element = data(element);
  }
  var data = window.jQuery;
  var exports = window.Waypoint;
  data.each(["innerHeight", "innerWidth", "off", "offset", "on", "outerHeight", "outerWidth", "scrollLeft", "scrollTop"], function(dataAndEvents, method) {
    /**
     * @return {?}
     */
    cache.prototype[method] = function() {
      /** @type {Array.<?>} */
      var args = Array.prototype.slice.call(arguments);
      return this.$element[method].apply(this.$element, args);
    };
  });
  data.each(["extend", "inArray", "isEmptyObject"], function(dataAndEvents, prop) {
    cache[prop] = data[prop];
  });
  exports.adapters.push({
    name : "jquery",
    /** @type {function (string): undefined} */
    Adapter : cache
  });
  /** @type {function (string): undefined} */
  exports.Adapter = cache;
}(), function() {
  /**
   * @param {?} $
   * @return {?}
   */
  function init($) {
    return function() {
      /** @type {Array} */
      var results = [];
      var attributes = arguments[0];
      return $.isFunction(arguments[0]) && (attributes = $.extend({}, arguments[1]), attributes.handler = arguments[0]), this.each(function() {
        var selector = $.extend({}, attributes, {
          element : this
        });
        if ("string" == typeof selector.context) {
          selector.context = $(this).closest(selector.context)[0];
        }
        results.push(new Fn(selector));
      }), results;
    };
  }
  var Fn = window.Waypoint;
  if (window.jQuery) {
    window.jQuery.fn.waypoint = init(window.jQuery);
  }
  if (window.Zepto) {
    window.Zepto.fn.waypoint = init(window.Zepto);
  }
}(), !function(mod) {
  if ("function" == typeof define && define.amd) {
    define(["jquery"], mod);
  } else {
    mod("object" == typeof exports ? require("jquery") : jQuery);
  }
}(function(lab) {
  var c = function() {
    if (lab && (lab.fn && (lab.fn.select2 && lab.fn.select2.amd))) {
      var context = lab.fn.select2.amd
    }
    return function() {
      if (!context || !context.requirejs) {
        if (context) {
          require = context;
        } else {
          context = {};
        }
        var requirejs;
        var require;
        var define;
        !function(undef) {
          /**
           * @param {?} obj
           * @param {string} prop
           * @return {?}
           */
          function hasProp(obj, prop) {
            return hasOwn.call(obj, prop);
          }
          /**
           * @param {Array} name
           * @param {Object} baseName
           * @return {?}
           */
          function normalize(name, baseName) {
            var buffer;
            var tagName;
            var el;
            var value;
            var lastIndex;
            var pos;
            var display;
            var index;
            var i;
            var j;
            var part;
            var baseParts = baseName && baseName.split("/");
            var map = config.map;
            var elemdisplay = map && map["*"] || {};
            if (name && "." === name.charAt(0)) {
              if (baseName) {
                name = name.split("/");
                /** @type {number} */
                lastIndex = name.length - 1;
                if (config.nodeIdCompat) {
                  if (jsSuffixRegExp.test(name[lastIndex])) {
                    name[lastIndex] = name[lastIndex].replace(jsSuffixRegExp, "");
                  }
                }
                name = baseParts.slice(0, baseParts.length - 1).concat(name);
                /** @type {number} */
                i = 0;
                for (;i < name.length;i += 1) {
                  if (part = name[i], "." === part) {
                    name.splice(i, 1);
                    i -= 1;
                  } else {
                    if (".." === part) {
                      if (1 === i && (".." === name[2] || ".." === name[0])) {
                        break;
                      }
                      if (i > 0) {
                        name.splice(i - 1, 2);
                        i -= 2;
                      }
                    }
                  }
                }
                name = name.join("/");
              } else {
                if (0 === name.indexOf("./")) {
                  name = name.substring(2);
                }
              }
            }
            if ((baseParts || elemdisplay) && map) {
              buffer = name.split("/");
              i = buffer.length;
              for (;i > 0;i -= 1) {
                if (tagName = buffer.slice(0, i).join("/"), baseParts) {
                  j = baseParts.length;
                  for (;j > 0;j -= 1) {
                    if (el = map[baseParts.slice(0, j).join("/")], el && (el = el[tagName])) {
                      value = el;
                      pos = i;
                      break;
                    }
                  }
                }
                if (value) {
                  break;
                }
                if (!display) {
                  if (elemdisplay) {
                    if (elemdisplay[tagName]) {
                      display = elemdisplay[tagName];
                      index = i;
                    }
                  }
                }
              }
              if (!value) {
                if (display) {
                  value = display;
                  pos = index;
                }
              }
              if (value) {
                buffer.splice(0, pos, value);
                name = buffer.join("/");
              }
            }
            return name;
          }
          /**
           * @param {string} value
           * @param {boolean} v
           * @return {?}
           */
          function resolve(value, v) {
            return function() {
              /** @type {Array.<?>} */
              var values = __slice.call(arguments, 0);
              return "string" != typeof values[0] && (1 === values.length && values.push(null)), req.apply(undef, values.concat([value, v]));
            };
          }
          /**
           * @param {Object} relName
           * @return {?}
           */
          function makeNormalize(relName) {
            return function(name) {
              return normalize(name, relName);
            };
          }
          /**
           * @param {?} depName
           * @return {?}
           */
          function makeLoad(depName) {
            return function(value) {
              defined[depName] = value;
            };
          }
          /**
           * @param {string} name
           * @return {?}
           */
          function callDep(name) {
            if (hasProp(waiting, name)) {
              var args = waiting[name];
              delete waiting[name];
              /** @type {boolean} */
              defining[name] = true;
              main.apply(undef, args);
            }
            if (!hasProp(defined, name) && !hasProp(defining, name)) {
              throw new Error("No " + name);
            }
            return defined[name];
          }
          /**
           * @param {string} name
           * @return {?}
           */
          function splitPrefix(name) {
            var prefix;
            var index = name ? name.indexOf("!") : -1;
            return index > -1 && (prefix = name.substring(0, index), name = name.substring(index + 1, name.length)), [prefix, name];
          }
          /**
           * @param {string} name
           * @return {?}
           */
          function next(name) {
            return function() {
              return config && (config.config && config.config[name]) || {};
            };
          }
          var main;
          var req;
          var makeMap;
          var handlers;
          var defined = {};
          var waiting = {};
          var config = {};
          var defining = {};
          /** @type {function (this:Object, *): boolean} */
          var hasOwn = Object.prototype.hasOwnProperty;
          /** @type {function (this:(Array.<T>|string|{length: number}), *=, *=): Array.<T>} */
          var __slice = [].slice;
          /** @type {RegExp} */
          var jsSuffixRegExp = /\.js$/;
          /**
           * @param {string} name
           * @param {Object} relName
           * @return {?}
           */
          makeMap = function(name, relName) {
            var plugin;
            var parts = splitPrefix(name);
            var prefix = parts[0];
            return name = parts[1], prefix && (prefix = normalize(prefix, relName), plugin = callDep(prefix)), prefix ? name = plugin && plugin.normalize ? plugin.normalize(name, makeNormalize(relName)) : normalize(name, relName) : (name = normalize(name, relName), parts = splitPrefix(name), prefix = parts[0], name = parts[1], prefix && (plugin = callDep(prefix))), {
              f : prefix ? prefix + "!" + name : name,
              n : name,
              pr : prefix,
              p : plugin
            };
          };
          handlers = {
            /**
             * @param {string} arg
             * @return {?}
             */
            require : function(arg) {
              return resolve(arg);
            },
            /**
             * @param {Object} lab
             * @return {?}
             */
            exports : function(lab) {
              var io = defined[lab];
              return "undefined" != typeof io ? io : defined[lab] = {};
            },
            /**
             * @param {string} name
             * @return {?}
             */
            module : function(name) {
              return{
                id : name,
                uri : "",
                exports : defined[name],
                config : next(name)
              };
            }
          };
          /**
           * @param {Object} lab
           * @param {Array} deps
           * @param {?} callback
           * @param {Object} relName
           * @return {undefined}
           */
          main = function(lab, deps, callback, relName) {
            var cjsModule;
            var depName;
            var ret;
            var map;
            var i;
            var autoOrientation;
            /** @type {Array} */
            var args = [];
            /** @type {string} */
            var type = typeof callback;
            if (relName = relName || lab, "undefined" === type || "function" === type) {
              deps = !deps.length && callback.length ? ["require", "exports", "module"] : deps;
              /** @type {number} */
              i = 0;
              for (;i < deps.length;i += 1) {
                if (map = makeMap(deps[i], relName), depName = map.f, "require" === depName) {
                  args[i] = handlers.require(lab);
                } else {
                  if ("exports" === depName) {
                    args[i] = handlers.exports(lab);
                    /** @type {boolean} */
                    autoOrientation = true;
                  } else {
                    if ("module" === depName) {
                      cjsModule = args[i] = handlers.module(lab);
                    } else {
                      if (hasProp(defined, depName) || (hasProp(waiting, depName) || hasProp(defining, depName))) {
                        args[i] = callDep(depName);
                      } else {
                        if (!map.p) {
                          throw new Error(lab + " missing " + depName);
                        }
                        map.p.load(map.n, resolve(relName, true), makeLoad(depName), {});
                        args[i] = defined[depName];
                      }
                    }
                  }
                }
              }
              ret = callback ? callback.apply(defined[lab], args) : void 0;
              if (lab) {
                if (cjsModule && (cjsModule.exports !== undef && cjsModule.exports !== defined[lab])) {
                  defined[lab] = cjsModule.exports;
                } else {
                  if (!(ret === undef && autoOrientation)) {
                    defined[lab] = ret;
                  }
                }
              }
            } else {
              if (lab) {
                defined[lab] = callback;
              }
            }
          };
          /** @type {function (Object, Object, Object, (Function|string), Function): ?} */
          requirejs = require = req = function(deps, callback, relName, forceSync, alt) {
            if ("string" == typeof deps) {
              return handlers[deps] ? handlers[deps](callback) : callDep(makeMap(deps, callback).f);
            }
            if (!deps.splice) {
              if (config = deps, config.deps && req(config.deps, config.callback), !callback) {
                return;
              }
              if (callback.splice) {
                /** @type {Object} */
                deps = callback;
                /** @type {Object} */
                callback = relName;
                /** @type {null} */
                relName = null;
              } else {
                /** @type {Object} */
                deps = undef;
              }
            }
            return callback = callback || function() {
            }, "function" == typeof relName && (relName = forceSync, forceSync = alt), forceSync ? main(undef, deps, callback, relName) : setTimeout(function() {
              main(undef, deps, callback, relName);
            }, 4), req;
          };
          /**
           * @param {Object} config
           * @return {?}
           */
          req.config = function(config) {
            return req(config);
          };
          requirejs._defined = defined;
          /**
           * @param {string} name
           * @param {Array} expectedHashCode
           * @param {Function} callback
           * @return {undefined}
           */
          define = function(name, expectedHashCode, callback) {
            if ("string" != typeof name) {
              throw new Error("See almond README: incorrect module build, no module name");
            }
            if (!expectedHashCode.splice) {
              /** @type {Array} */
              callback = expectedHashCode;
              /** @type {Array} */
              expectedHashCode = [];
            }
            if (!hasProp(defined, name)) {
              if (!hasProp(waiting, name)) {
                /** @type {Array} */
                waiting[name] = [name, expectedHashCode, callback];
              }
            }
          };
          define.amd = {
            jQuery : true
          };
        }();
        context.requirejs = requirejs;
        context.require = require;
        context.define = define;
      }
    }(), context.define("almond", function() {
    }), context.define("jquery", [], function() {
      var b = lab || $;
      return null == b && (console && (console.error && console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."))), b;
    }), context.define("select2/utils", ["jquery"], function($) {
      /**
       * @param {Function} that
       * @return {?}
       */
      function eq(that) {
        var def = that.prototype;
        /** @type {Array} */
        var nl = [];
        var n;
        for (n in def) {
          var name = def[n];
          if ("function" == typeof name) {
            if ("constructor" !== n) {
              nl.push(n);
            }
          }
        }
        return nl;
      }
      var exports = {};
      /**
       * @param {Function} child
       * @param {?} parent
       * @return {?}
       */
      exports.Extend = function(child, parent) {
        /**
         * @return {undefined}
         */
        function Surrogate() {
          /** @type {Function} */
          this.constructor = child;
        }
        /** @type {function (this:Object, *): boolean} */
        var __hasProp = {}.hasOwnProperty;
        var key;
        for (key in parent) {
          if (__hasProp.call(parent, key)) {
            child[key] = parent[key];
          }
        }
        return Surrogate.prototype = parent.prototype, child.prototype = new Surrogate, child.__super__ = parent.prototype, child;
      };
      /**
       * @param {?} a
       * @param {?} result
       * @return {?}
       */
      exports.Decorate = function(a, result) {
        /**
         * @return {undefined}
         */
        function klass() {
          /** @type {function (this:{length: number}, ...[*]): number} */
          var unshift = Array.prototype.unshift;
          var cnl = result.prototype.constructor.length;
          var ctor = a.prototype.constructor;
          if (cnl > 0) {
            unshift.call(arguments, a.prototype.constructor);
            ctor = result.prototype.constructor;
          }
          ctor.apply(this, arguments);
        }
        /**
         * @return {undefined}
         */
        function subclass() {
          /** @type {function (): undefined} */
          this.constructor = klass;
        }
        var data = eq(result);
        var codeSegments = eq(a);
        result.displayName = a.displayName;
        klass.prototype = new subclass;
        /** @type {number} */
        var i = 0;
        for (;i < codeSegments.length;i++) {
          var key = codeSegments[i];
          klass.prototype[key] = a.prototype[key];
        }
        /**
         * @param {string} property
         * @return {?}
         */
        var update = function(property) {
          /**
           * @return {undefined}
           */
          var f = function() {
          };
          if (property in klass.prototype) {
            f = klass.prototype[property];
          }
          var matcherFunction = result.prototype[property];
          return function() {
            /** @type {function (this:{length: number}, ...[*]): number} */
            var unshift = Array.prototype.unshift;
            return unshift.call(arguments, f), matcherFunction.apply(this, arguments);
          };
        };
        /** @type {number} */
        var j = 0;
        for (;j < data.length;j++) {
          var method = data[j];
          klass.prototype[method] = update(method);
        }
        return klass;
      };
      /**
       * @return {undefined}
       */
      var EventEmitter = function() {
        this.listeners = {};
      };
      return EventEmitter.prototype.on = function(type, fn) {
        this.listeners = this.listeners || {};
        if (type in this.listeners) {
          this.listeners[type].push(fn);
        } else {
          /** @type {Array} */
          this.listeners[type] = [fn];
        }
      }, EventEmitter.prototype.trigger = function(type) {
        /** @type {function (this:(Array.<T>|string|{length: number}), *=, *=): Array.<T>} */
        var __slice = Array.prototype.slice;
        this.listeners = this.listeners || {};
        if (type in this.listeners) {
          this.invoke(this.listeners[type], __slice.call(arguments, 1));
        }
        if ("*" in this.listeners) {
          this.invoke(this.listeners["*"], arguments);
        }
      }, EventEmitter.prototype.invoke = function(collection, args) {
        /** @type {number} */
        var method = 0;
        var e = collection.length;
        for (;e > method;method++) {
          collection[method].apply(this, args);
        }
      }, exports.Observable = EventEmitter, exports.generateChars = function(opt_attributes) {
        /** @type {string} */
        var optsData = "";
        /** @type {number} */
        var c = 0;
        for (;opt_attributes > c;c++) {
          /** @type {number} */
          var dstUri = Math.floor(36 * Math.random());
          optsData += dstUri.toString(36);
        }
        return optsData;
      }, exports.bind = function(type, name) {
        return function() {
          type.apply(name, arguments);
        };
      }, exports._convertData = function(obj) {
        var prop;
        for (prop in obj) {
          /** @type {Array.<string>} */
          var codeSegments = prop.split("-");
          /** @type {Object} */
          var cur = obj;
          if (1 !== codeSegments.length) {
            /** @type {number} */
            var i = 0;
            for (;i < codeSegments.length;i++) {
              /** @type {string} */
              var part = codeSegments[i];
              /** @type {string} */
              part = part.substring(0, 1).toLowerCase() + part.substring(1);
              if (!(part in cur)) {
                cur[part] = {};
              }
              if (i == codeSegments.length - 1) {
                cur[part] = obj[prop];
              }
              cur = cur[part];
            }
            delete obj[prop];
          }
        }
        return obj;
      }, exports.hasScroll = function(el, target) {
        var $view = $(target);
        var overflowX = target.style.overflowX;
        var overflowY = target.style.overflowY;
        return(overflowX !== overflowY || "hidden" !== overflowY && "visible" !== overflowY) && ("scroll" === overflowX || ("scroll" === overflowY || ($view.innerHeight() < target.scrollHeight || $view.innerWidth() < target.scrollWidth)));
      }, exports.escapeMarkup = function(string) {
        var buf = {
          "\\" : "&#92;",
          "&" : "&amp;",
          "<" : "&lt;",
          ">" : "&gt;",
          '"' : "&quot;",
          "'" : "&#39;",
          "/" : "&#47;"
        };
        return "string" != typeof string ? string : String(string).replace(/[&<>"'\/\\]/g, function(off) {
          return buf[off];
        });
      }, exports.appendMany = function(obj, css) {
        if ("1.7" === $.fn.jquery.substr(0, 3)) {
          var body = $();
          $.map(css, function(rvar) {
            body = body.add(rvar);
          });
          css = body;
        }
        obj.append(css);
      }, exports;
    }), context.define("select2/results", ["jquery", "./utils"], function($, S) {
      /**
       * @param {Object} $element
       * @param {Object} key
       * @param {?} data
       * @return {undefined}
       */
      function self($element, key, data) {
        /** @type {Object} */
        this.$element = $element;
        this.data = data;
        /** @type {Object} */
        this.options = key;
        self.__super__.constructor.call(this);
      }
      return S.Extend(self, S.Observable), self.prototype.render = function() {
        var formReq = $('<ul class="select2-results__options" role="tree"></ul>');
        return this.options.get("multiple") && formReq.attr("aria-multiselectable", "true"), this.$results = formReq, formReq;
      }, self.prototype.clear = function() {
        this.$results.empty();
      }, self.prototype.displayMessage = function(msg) {
        var buildMenu = this.options.get("escapeMarkup");
        this.clear();
        this.hideLoading();
        var li = $('<li role="treeitem" aria-live="assertive" class="select2-results__option"></li>');
        var callback = this.options.get("translations").get(msg.message);
        li.append(buildMenu(callback(msg.args)));
        li[0].className += " select2-results__message";
        this.$results.append(li);
      }, self.prototype.hideMessages = function() {
        this.$results.find(".select2-results__message").remove();
      }, self.prototype.append = function(type) {
        this.hideLoading();
        /** @type {Array} */
        var cycle = [];
        if (null == type.results || 0 === type.results.length) {
          return void(0 === this.$results.children().length && this.trigger("results:message", {
            message : "noResults"
          }));
        }
        type.results = this.sort(type.results);
        /** @type {number} */
        var i = 0;
        for (;i < type.results.length;i++) {
          var name = type.results[i];
          var w = this.option(name);
          cycle.push(w);
        }
        this.$results.append(cycle);
      }, self.prototype.position = function(lab, element) {
        var outer_wrapper = element.find(".select2-results");
        outer_wrapper.append(lab);
      }, self.prototype.sort = function(recursive) {
        var throttledUpdate = this.options.get("sorter");
        return throttledUpdate(recursive);
      }, self.prototype.setClasses = function() {
        var db = this;
        this.data.current(function(urls) {
          var elems = $.map(urls, function(test) {
            return test.id.toString();
          });
          var els = db.$results.find(".select2-results__option[aria-selected]");
          els.each(function() {
            var item = $(this);
            var settings = $.data(this, "data");
            /** @type {string} */
            var arg = "" + settings.id;
            if (null != settings.element && settings.element.selected || null == settings.element && $.inArray(arg, elems) > -1) {
              item.attr("aria-selected", "true");
            } else {
              item.attr("aria-selected", "false");
            }
          });
          var dropdowns = els.filter("[aria-selected=true]");
          if (dropdowns.length > 0) {
            dropdowns.first().trigger("mouseenter");
          } else {
            els.first().trigger("mouseenter");
          }
        });
      }, self.prototype.showLoading = function(title) {
        this.hideLoading();
        var text = this.options.get("translations").get("searching");
        var obj = {
          disabled : true,
          loading : true,
          text : text(title)
        };
        var markup = this.option(obj);
        markup.className += " loading-results";
        this.$results.prepend(markup);
      }, self.prototype.hideLoading = function() {
        this.$results.find(".loading-results").remove();
      }, self.prototype.option = function(item) {
        /** @type {Element} */
        var elem = document.createElement("li");
        /** @type {string} */
        elem.className = "select2-results__option";
        var options = {
          role : "treeitem",
          "aria-selected" : "false"
        };
        if (item.disabled) {
          delete options["aria-selected"];
          /** @type {string} */
          options["aria-disabled"] = "true";
        }
        if (null == item.id) {
          delete options["aria-selected"];
        }
        if (null != item._resultId) {
          elem.id = item._resultId;
        }
        if (item.title) {
          elem.title = item.title;
        }
        if (item.children) {
          /** @type {string} */
          options.role = "group";
          options["aria-label"] = item.text;
          delete options["aria-selected"];
        }
        var name;
        for (name in options) {
          var value = options[name];
          elem.setAttribute(name, value);
        }
        if (item.children) {
          var $this = $(elem);
          /** @type {Element} */
          var span = document.createElement("strong");
          /** @type {string} */
          span.className = "select2-results__group";
          $(span);
          this.template(item, span);
          /** @type {Array} */
          var cycle = [];
          /** @type {number} */
          var x = 0;
          for (;x < item.children.length;x++) {
            var obj = item.children[x];
            var sprite = this.option(obj);
            cycle.push(sprite);
          }
          var tooltip = $("<ul></ul>", {
            class : "select2-results__options select2-results__options--nested"
          });
          tooltip.append(cycle);
          $this.append(span);
          $this.append(tooltip);
        } else {
          this.template(item, elem);
        }
        return $.data(elem, "data", item), elem;
      }, self.prototype.bind = function(obj, type) {
        var self = this;
        /** @type {string} */
        var newVal = obj.id + "-results";
        this.$results.attr("id", newVal);
        obj.on("results:all", function(response) {
          self.clear();
          self.append(response.data);
          if (obj.isOpen()) {
            self.setClasses();
          }
        });
        obj.on("results:append", function(response) {
          self.append(response.data);
          if (obj.isOpen()) {
            self.setClasses();
          }
        });
        obj.on("query", function(right) {
          self.hideMessages();
          self.showLoading(right);
        });
        obj.on("select", function() {
          if (obj.isOpen()) {
            self.setClasses();
          }
        });
        obj.on("unselect", function() {
          if (obj.isOpen()) {
            self.setClasses();
          }
        });
        obj.on("open", function() {
          self.$results.attr("aria-expanded", "true");
          self.$results.attr("aria-hidden", "false");
          self.setClasses();
          self.ensureHighlightVisible();
        });
        obj.on("close", function() {
          self.$results.attr("aria-expanded", "false");
          self.$results.attr("aria-hidden", "true");
          self.$results.removeAttr("aria-activedescendant");
        });
        obj.on("results:toggle", function() {
          var elements = self.getHighlightedResults();
          if (0 !== elements.length) {
            elements.trigger("mouseup");
          }
        });
        obj.on("results:select", function() {
          var template = self.getHighlightedResults();
          if (0 !== template.length) {
            var bytes = template.data("data");
            if ("true" == template.attr("aria-selected")) {
              self.trigger("close", {});
            } else {
              self.trigger("select", {
                data : bytes
              });
            }
          }
        });
        obj.on("results:previous", function() {
          var target = self.getHighlightedResults();
          var selector = self.$results.find("[aria-selected]");
          var targets = selector.index(target);
          if (0 !== targets) {
            /** @type {number} */
            var elem = targets - 1;
            if (0 === target.length) {
              /** @type {number} */
              elem = 0;
            }
            var $elem = selector.eq(elem);
            $elem.trigger("mouseenter");
            var start = self.$results.offset().top;
            var end = $elem.offset().top;
            var lab = self.$results.scrollTop() + (end - start);
            if (0 === elem) {
              self.$results.scrollTop(0);
            } else {
              if (0 > end - start) {
                self.$results.scrollTop(lab);
              }
            }
          }
        });
        obj.on("results:next", function() {
          var cur = self.getHighlightedResults();
          var set = self.$results.find("[aria-selected]");
          var x = set.index(cur);
          var index = x + 1;
          if (!(index >= set.length)) {
            var child = set.eq(index);
            child.trigger("mouseenter");
            var b = self.$results.offset().top + self.$results.outerHeight(false);
            var a = child.offset().top + child.outerHeight(false);
            /** @type {number} */
            var lab = self.$results.scrollTop() + a - b;
            if (0 === index) {
              self.$results.scrollTop(0);
            } else {
              if (a > b) {
                self.$results.scrollTop(lab);
              }
            }
          }
        });
        obj.on("results:focus", function(d) {
          d.element.addClass("select2-results__option--highlighted");
        });
        obj.on("results:message", function(msg) {
          self.displayMessage(msg);
        });
        if ($.fn.mousewheel) {
          this.$results.on("mousewheel", function(event) {
            var scrollHeight = self.$results.scrollTop();
            var c = self.$results.get(0).scrollHeight - scrollHeight + event.deltaY;
            /** @type {boolean} */
            var e = event.deltaY > 0 && scrollHeight - event.deltaY <= 0;
            /** @type {boolean} */
            var f = event.deltaY < 0 && c <= self.$results.height();
            if (e) {
              self.$results.scrollTop(0);
              event.preventDefault();
              event.stopPropagation();
            } else {
              if (f) {
                self.$results.scrollTop(self.$results.get(0).scrollHeight - self.$results.height());
                event.preventDefault();
                event.stopPropagation();
              }
            }
          });
        }
        this.$results.on("mouseup", ".select2-results__option[aria-selected]", function(event) {
          var template = $(this);
          var bytes = template.data("data");
          return "true" === template.attr("aria-selected") ? void(self.options.get("multiple") ? self.trigger("unselect", {
            originalEvent : event,
            data : bytes
          }) : self.trigger("close", {})) : void self.trigger("select", {
            originalEvent : event,
            data : bytes
          });
        });
        this.$results.on("mouseenter", ".select2-results__option[aria-selected]", function(dataAndEvents) {
          var bytes = $(this).data("data");
          self.getHighlightedResults().removeClass("select2-results__option--highlighted");
          self.trigger("results:focus", {
            data : bytes,
            element : $(this)
          });
        });
      }, self.prototype.getHighlightedResults = function() {
        var getHighlightedResults = this.$results.find(".select2-results__option--highlighted");
        return getHighlightedResults;
      }, self.prototype.destroy = function() {
        this.$results.remove();
      }, self.prototype.ensureHighlightVisible = function() {
        var cur = this.getHighlightedResults();
        if (0 !== cur.length) {
          var pos = this.$results.find("[aria-selected]");
          var ahead = pos.index(cur);
          var elemTop = this.$results.offset().top;
          var scrollTop = cur.offset().top;
          var lab = this.$results.scrollTop() + (scrollTop - elemTop);
          /** @type {number} */
          var relativeY = scrollTop - elemTop;
          lab -= 2 * cur.outerHeight(false);
          if (2 >= ahead) {
            this.$results.scrollTop(0);
          } else {
            if (relativeY > this.$results.outerHeight() || 0 > relativeY) {
              this.$results.scrollTop(lab);
            }
          }
        }
      }, self.prototype.template = function(data, element) {
        var read = this.options.get("templateResult");
        var template = this.options.get("escapeMarkup");
        var text = read(data, element);
        if (null == text) {
          /** @type {string} */
          element.style.display = "none";
        } else {
          if ("string" == typeof text) {
            element.innerHTML = template(text);
          } else {
            $(element).append(text);
          }
        }
      }, self;
    }), context.define("select2/keys", [], function() {
      var Keyboard = {
        BACKSPACE : 8,
        TAB : 9,
        ENTER : 13,
        SHIFT : 16,
        CTRL : 17,
        ALT : 18,
        ESC : 27,
        SPACE : 32,
        PAGE_UP : 33,
        PAGE_DOWN : 34,
        END : 35,
        HOME : 36,
        LEFT : 37,
        UP : 38,
        RIGHT : 39,
        DOWN : 40,
        DELETE : 46
      };
      return Keyboard;
    }), context.define("select2/selection/base", ["jquery", "../utils", "../keys"], function($, root, keys) {
      /**
       * @param {Object} el
       * @param {Object} options
       * @return {undefined}
       */
      function Plugin(el, options) {
        /** @type {Object} */
        this.$element = el;
        /** @type {Object} */
        this.options = options;
        Plugin.__super__.constructor.call(this);
      }
      return root.Extend(Plugin, root.Observable), Plugin.prototype.render = function() {
        var element = $('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');
        return this._tabindex = 0, null != this.$element.data("old-tabindex") ? this._tabindex = this.$element.data("old-tabindex") : null != this.$element.attr("tabindex") && (this._tabindex = this.$element.attr("tabindex")), element.attr("title", this.$element.attr("title")), element.attr("tabindex", this._tabindex), this.$selection = element, element;
      }, Plugin.prototype.bind = function(el, type) {
        var self = this;
        /** @type {string} */
        var newVal = (el.id + "-container", el.id + "-results");
        /** @type {Object} */
        this.container = el;
        this.$selection.on("focus", function(attributes) {
          self.trigger("focus", attributes);
        });
        this.$selection.on("blur", function(sub) {
          self._handleBlur(sub);
        });
        this.$selection.on("keydown", function(event) {
          self.trigger("keypress", event);
          if (event.which === keys.SPACE) {
            event.preventDefault();
          }
        });
        el.on("results:focus", function(messageEvent) {
          self.$selection.attr("aria-activedescendant", messageEvent.data._resultId);
        });
        el.on("selection:update", function(response) {
          self.update(response.data);
        });
        el.on("open", function() {
          self.$selection.attr("aria-expanded", "true");
          self.$selection.attr("aria-owns", newVal);
          self._attachCloseHandler(el);
        });
        el.on("close", function() {
          self.$selection.attr("aria-expanded", "false");
          self.$selection.removeAttr("aria-activedescendant");
          self.$selection.removeAttr("aria-owns");
          self.$selection.focus();
          self._detachCloseHandler(el);
        });
        el.on("enable", function() {
          self.$selection.attr("tabindex", self._tabindex);
        });
        el.on("disable", function() {
          self.$selection.attr("tabindex", "-1");
        });
      }, Plugin.prototype._handleBlur = function(attributes) {
        var self = this;
        window.setTimeout(function() {
          if (!(document.activeElement == self.$selection[0])) {
            if (!$.contains(self.$selection[0], document.activeElement)) {
              self.trigger("blur", attributes);
            }
          }
        }, 1);
      }, Plugin.prototype._attachCloseHandler = function(clicked) {
        $(document.body).on("mousedown.select2." + clicked.id, function(ev) {
          var relatedTarget = $(ev.target);
          var d = relatedTarget.closest(".select2");
          var collection = $(".select2.select2-container--open");
          collection.each(function() {
            var $window = $(this);
            if (this != d[0]) {
              var element = $window.data("element");
              element.select2("close");
            }
          });
        });
      }, Plugin.prototype._detachCloseHandler = function(clicked) {
        $(document.body).off("mousedown.select2." + clicked.id);
      }, Plugin.prototype.position = function(lab, element) {
        var outer_wrapper = element.find(".selection");
        outer_wrapper.append(lab);
      }, Plugin.prototype.destroy = function() {
        this._detachCloseHandler(this.container);
      }, Plugin.prototype.update = function(first) {
        throw new Error("The `update` method must be defined in child classes.");
      }, Plugin;
    }), context.define("select2/selection/single", ["jquery", "./base", "../utils", "../keys"], function($sanitize, ret, jQuery, dataAndEvents) {
      /**
       * @return {undefined}
       */
      function self() {
        self.__super__.constructor.apply(this, arguments);
      }
      return jQuery.Extend(self, ret), self.prototype.render = function() {
        var $html = self.__super__.render.call(this);
        return $html.addClass("select2-selection--single"), $html.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'), $html;
      }, self.prototype.bind = function(type, name) {
        var $ = this;
        self.__super__.bind.apply(this, arguments);
        /** @type {string} */
        var container = type.id + "-container";
        this.$selection.find(".select2-selection__rendered").attr("id", container);
        this.$selection.attr("aria-labelledby", container);
        this.$selection.on("mousedown", function(event) {
          if (1 === event.which) {
            $.trigger("toggle", {
              originalEvent : event
            });
          }
        });
        this.$selection.on("focus", function(dataAndEvents) {
        });
        this.$selection.on("blur", function(dataAndEvents) {
        });
        type.on("selection:update", function(response) {
          $.update(response.data);
        });
      }, self.prototype.clear = function() {
        this.$selection.find(".select2-selection__rendered").empty();
      }, self.prototype.display = function(lab, element) {
        var curry = this.options.get("templateSelection");
        var prog1 = this.options.get("escapeMarkup");
        return prog1(curry(lab, element));
      }, self.prototype.selectionContainer = function() {
        return $sanitize("<span></span>");
      }, self.prototype.update = function(first) {
        if (0 === first.length) {
          return void this.clear();
        }
        var lab = first[0];
        var $target = this.$selection.find(".select2-selection__rendered");
        var cycle = this.display(lab, $target);
        $target.empty().append(cycle);
        $target.prop("title", lab.title || lab.text);
      }, self;
    }), context.define("select2/selection/multiple", ["jquery", "./base", "../utils"], function(callback, options, collection) {
      /**
       * @param {?} err
       * @param {?} key
       * @return {undefined}
       */
      function self(err, key) {
        self.__super__.constructor.apply(this, arguments);
      }
      return collection.Extend(self, options), self.prototype.render = function() {
        var $html = self.__super__.render.call(this);
        return $html.addClass("select2-selection--multiple"), $html.html('<ul class="select2-selection__rendered"></ul>'), $html;
      }, self.prototype.bind = function(type, name) {
        var that = this;
        self.__super__.bind.apply(this, arguments);
        this.$selection.on("click", function(event) {
          that.trigger("toggle", {
            originalEvent : event
          });
        });
        this.$selection.on("click", ".select2-selection__choice__remove", function(event) {
          if (!that.options.get("disabled")) {
            var current = callback(this);
            var template = current.parent();
            var bytes = template.data("data");
            that.trigger("unselect", {
              originalEvent : event,
              data : bytes
            });
          }
        });
      }, self.prototype.clear = function() {
        this.$selection.find(".select2-selection__rendered").empty();
      }, self.prototype.display = function(lab, element) {
        var curry = this.options.get("templateSelection");
        var prog1 = this.options.get("escapeMarkup");
        return prog1(curry(lab, element));
      }, self.prototype.selectionContainer = function() {
        var current = callback('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>');
        return current;
      }, self.prototype.update = function(first) {
        if (this.clear(), 0 !== first.length) {
          /** @type {Array} */
          var y = [];
          /** @type {number} */
          var i = 0;
          for (;i < first.length;i++) {
            var lab = first[i];
            var $target = this.selectionContainer();
            var cycle = this.display(lab, $target);
            $target.append(cycle);
            $target.prop("title", lab.title || lab.text);
            $target.data("data", lab);
            y.push($target);
          }
          var suiteView = this.$selection.find(".select2-selection__rendered");
          collection.appendMany(suiteView, y);
        }
      }, self;
    }), context.define("select2/selection/placeholder", ["../utils"], function(dataAndEvents) {
      /**
       * @param {Function} callback
       * @param {?} err
       * @param {Node} el
       * @return {undefined}
       */
      function init(callback, err, el) {
        this.placeholder = this.normalizePlaceholder(el.get("placeholder"));
        callback.call(this, err, el);
      }
      return init.prototype.normalizePlaceholder = function(dataAndEvents, msg) {
        return "string" == typeof msg && (msg = {
          id : "",
          text : msg
        }), msg;
      }, init.prototype.createPlaceholder = function(oldElement, lab) {
        var $html = this.selectionContainer();
        return $html.html(this.display(lab)), $html.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"), $html;
      }, init.prototype.update = function(extra, data) {
        /** @type {boolean} */
        var inverse = 1 == data.length && data[0].id != this.placeholder.id;
        /** @type {boolean} */
        var program = data.length > 1;
        if (program || inverse) {
          return extra.call(this, data);
        }
        this.clear();
        var cycle = this.createPlaceholder(this.placeholder);
        this.$selection.find(".select2-selection__rendered").append(cycle);
      }, init;
    }), context.define("select2/selection/allowClear", ["jquery", "../keys"], function(get, keyCode) {
      /**
       * @return {undefined}
       */
      function db() {
      }
      return db.prototype.bind = function(expression, type, fn) {
        var data_priv = this;
        expression.call(this, type, fn);
        if (null == this.placeholder) {
          if (this.options.get("debug")) {
            if (window.console) {
              if (console.error) {
                console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option.");
              }
            }
          }
        }
        this.$selection.on("mousedown", ".select2-selection__clear", function(dest) {
          data_priv._handleClear(dest);
        });
        type.on("keypress", function(deepDataAndEvents) {
          data_priv._handleKeyboardClear(deepDataAndEvents, type);
        });
      }, db.prototype._handleClear = function(elem, event) {
        if (!this.options.get("disabled")) {
          var rs = this.$selection.find(".select2-selection__clear");
          if (0 !== rs.length) {
            event.stopPropagation();
            var codeSegments = rs.data("data");
            /** @type {number} */
            var i = 0;
            for (;i < codeSegments.length;i++) {
              var attributes = {
                data : codeSegments[i]
              };
              if (this.trigger("unselect", attributes), attributes.prevented) {
                return;
              }
            }
            this.$element.val(this.placeholder.id).trigger("change");
            this.trigger("toggle", {});
          }
        }
      }, db.prototype._handleKeyboardClear = function(deepDataAndEvents, e, group) {
        if (!group.isOpen()) {
          if (e.which == keyCode.DELETE || e.which == keyCode.BACKSPACE) {
            this._handleClear(e);
          }
        }
      }, db.prototype.update = function(first, val) {
        if (first.call(this, val), !(this.$selection.find(".select2-selection__placeholder").length > 0 || 0 === val.length)) {
          var div = get('<span class="select2-selection__clear">&times;</span>');
          div.data("data", val);
          this.$selection.find(".select2-selection__rendered").prepend(div);
        }
      }, db;
    }), context.define("select2/selection/search", ["jquery", "../utils", "../keys"], function(format, dataAndEvents, keys) {
      /**
       * @param {Function} fn
       * @param {?} val
       * @param {?} index
       * @return {undefined}
       */
      function self(fn, val, index) {
        fn.call(this, val, index);
      }
      return self.prototype.render = function(surface) {
        var f = format('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" aria-autocomplete="list" /></li>');
        this.$searchContainer = f;
        this.$search = f.find("input");
        var d = surface.call(this);
        return this._transferTabIndex(), d;
      }, self.prototype.bind = function(expression, type, fn) {
        var self = this;
        expression.call(this, type, fn);
        type.on("open", function() {
          self.$search.trigger("focus");
        });
        type.on("close", function() {
          self.$search.val("");
          self.$search.removeAttr("aria-activedescendant");
          self.$search.trigger("focus");
        });
        type.on("enable", function() {
          self.$search.prop("disabled", false);
          self._transferTabIndex();
        });
        type.on("disable", function() {
          self.$search.prop("disabled", true);
        });
        type.on("focus", function(dataAndEvents) {
          self.$search.trigger("focus");
        });
        type.on("results:focus", function(map) {
          self.$search.attr("aria-activedescendant", map.id);
        });
        this.$selection.on("focusin", ".select2-search--inline", function(attributes) {
          self.trigger("focus", attributes);
        });
        this.$selection.on("focusout", ".select2-search--inline", function(sub) {
          self._handleBlur(sub);
        });
        this.$selection.on("keydown", ".select2-search--inline", function(e) {
          e.stopPropagation();
          self.trigger("keypress", e);
          self._keyUpPrevented = e.isDefaultPrevented();
          var key = e.which;
          if (key === keys.BACKSPACE && "" === self.$search.val()) {
            var rs = self.$searchContainer.prev(".select2-selection__choice");
            if (rs.length > 0) {
              var conf = rs.data("data");
              self.searchRemoveChoice(conf);
              e.preventDefault();
            }
          }
        });
        var b = document.documentMode;
        var bup = b && 11 >= b;
        this.$selection.on("input.searchcheck", ".select2-search--inline", function(dataAndEvents) {
          return bup ? void self.$selection.off("input.search input.searchcheck") : void self.$selection.off("keyup.search");
        });
        this.$selection.on("keyup.search input.search", ".select2-search--inline", function(e) {
          if (bup && "input" === e.type) {
            return void self.$selection.off("input.search input.searchcheck");
          }
          var key = e.which;
          if (key != keys.SHIFT) {
            if (key != keys.CTRL) {
              if (key != keys.ALT) {
                if (key != keys.TAB) {
                  self.handleSearch(e);
                }
              }
            }
          }
        });
      }, self.prototype._transferTabIndex = function(dataAndEvents) {
        this.$search.attr("tabindex", this.$selection.attr("tabindex"));
        this.$selection.attr("tabindex", "-1");
      }, self.prototype.createPlaceholder = function(oldElement, text) {
        this.$search.attr("placeholder", text.text);
      }, self.prototype.update = function(first, callback) {
        /** @type {boolean} */
        var c = this.$search[0] == document.activeElement;
        this.$search.attr("placeholder", "");
        first.call(this, callback);
        this.$selection.find(".select2-selection__rendered").append(this.$searchContainer);
        this.resizeSearch();
        if (c) {
          this.$search.focus();
        }
      }, self.prototype.handleSearch = function() {
        if (this.resizeSearch(), !this._keyUpPrevented) {
          var term = this.$search.val();
          this.trigger("query", {
            term : term
          });
        }
        /** @type {boolean} */
        this._keyUpPrevented = false;
      }, self.prototype.searchRemoveChoice = function(options, task) {
        this.trigger("unselect", {
          data : task
        });
        this.$search.val(task.text);
        this.handleSearch();
      }, self.prototype.resizeSearch = function() {
        this.$search.css("width", "25px");
        /** @type {string} */
        var size = "";
        if ("" !== this.$search.attr("placeholder")) {
          size = this.$selection.find(".select2-selection__rendered").innerWidth();
        } else {
          var cols = this.$search.val().length + 1;
          /** @type {string} */
          size = 0.75 * cols + "em";
        }
        this.$search.css("width", size);
      }, self;
    }), context.define("select2/selection/eventRelay", ["jquery"], function($) {
      /**
       * @return {undefined}
       */
      function b() {
      }
      return b.prototype.bind = function(expression, type, fn) {
        var that = this;
        /** @type {Array} */
        var names = ["open", "opening", "close", "closing", "select", "selecting", "unselect", "unselecting"];
        /** @type {Array} */
        var elems = ["opening", "closing", "selecting", "unselecting"];
        expression.call(this, type, fn);
        type.on("*", function(name, params) {
          if (-1 !== $.inArray(name, names)) {
            params = params || {};
            var EVENT_READY = $.Event("select2:" + name, {
              params : params
            });
            that.$element.trigger(EVENT_READY);
            if (-1 !== $.inArray(name, elems)) {
              params.prevented = EVENT_READY.isDefaultPrevented();
            }
          }
        });
      }, b;
    }), context.define("select2/translation", ["jquery", "require"], function(Router, func) {
      /**
       * @param {?} err
       * @return {undefined}
       */
      function self(err) {
        this.dict = err || {};
      }
      return self.prototype.all = function() {
        return this.dict;
      }, self.prototype.get = function(name) {
        return this.dict[name];
      }, self.prototype.extend = function(expectedNumberOfNonCommentArgs) {
        this.dict = Router.extend({}, expectedNumberOfNonCommentArgs.all(), this.dict);
      }, self._cache = {}, self.loadPath = function(name) {
        if (!(name in self._cache)) {
          var s = func(name);
          self._cache[name] = s;
        }
        return new self(self._cache[name]);
      }, self;
    }), context.define("select2/diacritics", [], function() {
      var a = {
        "\u24b6" : "A",
        "\uff21" : "A",
        "\u00c0" : "A",
        "\u00c1" : "A",
        "\u00c2" : "A",
        "\u1ea6" : "A",
        "\u1ea4" : "A",
        "\u1eaa" : "A",
        "\u1ea8" : "A",
        "\u00c3" : "A",
        "\u0100" : "A",
        "\u0102" : "A",
        "\u1eb0" : "A",
        "\u1eae" : "A",
        "\u1eb4" : "A",
        "\u1eb2" : "A",
        "\u0226" : "A",
        "\u01e0" : "A",
        "\u00c4" : "A",
        "\u01de" : "A",
        "\u1ea2" : "A",
        "\u00c5" : "A",
        "\u01fa" : "A",
        "\u01cd" : "A",
        "\u0200" : "A",
        "\u0202" : "A",
        "\u1ea0" : "A",
        "\u1eac" : "A",
        "\u1eb6" : "A",
        "\u1e00" : "A",
        "\u0104" : "A",
        "\u023a" : "A",
        "\u2c6f" : "A",
        "\ua732" : "AA",
        "\u00c6" : "AE",
        "\u01fc" : "AE",
        "\u01e2" : "AE",
        "\ua734" : "AO",
        "\ua736" : "AU",
        "\ua738" : "AV",
        "\ua73a" : "AV",
        "\ua73c" : "AY",
        "\u24b7" : "B",
        "\uff22" : "B",
        "\u1e02" : "B",
        "\u1e04" : "B",
        "\u1e06" : "B",
        "\u0243" : "B",
        "\u0182" : "B",
        "\u0181" : "B",
        "\u24b8" : "C",
        "\uff23" : "C",
        "\u0106" : "C",
        "\u0108" : "C",
        "\u010a" : "C",
        "\u010c" : "C",
        "\u00c7" : "C",
        "\u1e08" : "C",
        "\u0187" : "C",
        "\u023b" : "C",
        "\ua73e" : "C",
        "\u24b9" : "D",
        "\uff24" : "D",
        "\u1e0a" : "D",
        "\u010e" : "D",
        "\u1e0c" : "D",
        "\u1e10" : "D",
        "\u1e12" : "D",
        "\u1e0e" : "D",
        "\u0110" : "D",
        "\u018b" : "D",
        "\u018a" : "D",
        "\u0189" : "D",
        "\ua779" : "D",
        "\u01f1" : "DZ",
        "\u01c4" : "DZ",
        "\u01f2" : "Dz",
        "\u01c5" : "Dz",
        "\u24ba" : "E",
        "\uff25" : "E",
        "\u00c8" : "E",
        "\u00c9" : "E",
        "\u00ca" : "E",
        "\u1ec0" : "E",
        "\u1ebe" : "E",
        "\u1ec4" : "E",
        "\u1ec2" : "E",
        "\u1ebc" : "E",
        "\u0112" : "E",
        "\u1e14" : "E",
        "\u1e16" : "E",
        "\u0114" : "E",
        "\u0116" : "E",
        "\u00cb" : "E",
        "\u1eba" : "E",
        "\u011a" : "E",
        "\u0204" : "E",
        "\u0206" : "E",
        "\u1eb8" : "E",
        "\u1ec6" : "E",
        "\u0228" : "E",
        "\u1e1c" : "E",
        "\u0118" : "E",
        "\u1e18" : "E",
        "\u1e1a" : "E",
        "\u0190" : "E",
        "\u018e" : "E",
        "\u24bb" : "F",
        "\uff26" : "F",
        "\u1e1e" : "F",
        "\u0191" : "F",
        "\ua77b" : "F",
        "\u24bc" : "G",
        "\uff27" : "G",
        "\u01f4" : "G",
        "\u011c" : "G",
        "\u1e20" : "G",
        "\u011e" : "G",
        "\u0120" : "G",
        "\u01e6" : "G",
        "\u0122" : "G",
        "\u01e4" : "G",
        "\u0193" : "G",
        "\ua7a0" : "G",
        "\ua77d" : "G",
        "\ua77e" : "G",
        "\u24bd" : "H",
        "\uff28" : "H",
        "\u0124" : "H",
        "\u1e22" : "H",
        "\u1e26" : "H",
        "\u021e" : "H",
        "\u1e24" : "H",
        "\u1e28" : "H",
        "\u1e2a" : "H",
        "\u0126" : "H",
        "\u2c67" : "H",
        "\u2c75" : "H",
        "\ua78d" : "H",
        "\u24be" : "I",
        "\uff29" : "I",
        "\u00cc" : "I",
        "\u00cd" : "I",
        "\u00ce" : "I",
        "\u0128" : "I",
        "\u012a" : "I",
        "\u012c" : "I",
        "\u0130" : "I",
        "\u00cf" : "I",
        "\u1e2e" : "I",
        "\u1ec8" : "I",
        "\u01cf" : "I",
        "\u0208" : "I",
        "\u020a" : "I",
        "\u1eca" : "I",
        "\u012e" : "I",
        "\u1e2c" : "I",
        "\u0197" : "I",
        "\u24bf" : "J",
        "\uff2a" : "J",
        "\u0134" : "J",
        "\u0248" : "J",
        "\u24c0" : "K",
        "\uff2b" : "K",
        "\u1e30" : "K",
        "\u01e8" : "K",
        "\u1e32" : "K",
        "\u0136" : "K",
        "\u1e34" : "K",
        "\u0198" : "K",
        "\u2c69" : "K",
        "\ua740" : "K",
        "\ua742" : "K",
        "\ua744" : "K",
        "\ua7a2" : "K",
        "\u24c1" : "L",
        "\uff2c" : "L",
        "\u013f" : "L",
        "\u0139" : "L",
        "\u013d" : "L",
        "\u1e36" : "L",
        "\u1e38" : "L",
        "\u013b" : "L",
        "\u1e3c" : "L",
        "\u1e3a" : "L",
        "\u0141" : "L",
        "\u023d" : "L",
        "\u2c62" : "L",
        "\u2c60" : "L",
        "\ua748" : "L",
        "\ua746" : "L",
        "\ua780" : "L",
        "\u01c7" : "LJ",
        "\u01c8" : "Lj",
        "\u24c2" : "M",
        "\uff2d" : "M",
        "\u1e3e" : "M",
        "\u1e40" : "M",
        "\u1e42" : "M",
        "\u2c6e" : "M",
        "\u019c" : "M",
        "\u24c3" : "N",
        "\uff2e" : "N",
        "\u01f8" : "N",
        "\u0143" : "N",
        "\u00d1" : "N",
        "\u1e44" : "N",
        "\u0147" : "N",
        "\u1e46" : "N",
        "\u0145" : "N",
        "\u1e4a" : "N",
        "\u1e48" : "N",
        "\u0220" : "N",
        "\u019d" : "N",
        "\ua790" : "N",
        "\ua7a4" : "N",
        "\u01ca" : "NJ",
        "\u01cb" : "Nj",
        "\u24c4" : "O",
        "\uff2f" : "O",
        "\u00d2" : "O",
        "\u00d3" : "O",
        "\u00d4" : "O",
        "\u1ed2" : "O",
        "\u1ed0" : "O",
        "\u1ed6" : "O",
        "\u1ed4" : "O",
        "\u00d5" : "O",
        "\u1e4c" : "O",
        "\u022c" : "O",
        "\u1e4e" : "O",
        "\u014c" : "O",
        "\u1e50" : "O",
        "\u1e52" : "O",
        "\u014e" : "O",
        "\u022e" : "O",
        "\u0230" : "O",
        "\u00d6" : "O",
        "\u022a" : "O",
        "\u1ece" : "O",
        "\u0150" : "O",
        "\u01d1" : "O",
        "\u020c" : "O",
        "\u020e" : "O",
        "\u01a0" : "O",
        "\u1edc" : "O",
        "\u1eda" : "O",
        "\u1ee0" : "O",
        "\u1ede" : "O",
        "\u1ee2" : "O",
        "\u1ecc" : "O",
        "\u1ed8" : "O",
        "\u01ea" : "O",
        "\u01ec" : "O",
        "\u00d8" : "O",
        "\u01fe" : "O",
        "\u0186" : "O",
        "\u019f" : "O",
        "\ua74a" : "O",
        "\ua74c" : "O",
        "\u01a2" : "OI",
        "\ua74e" : "OO",
        "\u0222" : "OU",
        "\u24c5" : "P",
        "\uff30" : "P",
        "\u1e54" : "P",
        "\u1e56" : "P",
        "\u01a4" : "P",
        "\u2c63" : "P",
        "\ua750" : "P",
        "\ua752" : "P",
        "\ua754" : "P",
        "\u24c6" : "Q",
        "\uff31" : "Q",
        "\ua756" : "Q",
        "\ua758" : "Q",
        "\u024a" : "Q",
        "\u24c7" : "R",
        "\uff32" : "R",
        "\u0154" : "R",
        "\u1e58" : "R",
        "\u0158" : "R",
        "\u0210" : "R",
        "\u0212" : "R",
        "\u1e5a" : "R",
        "\u1e5c" : "R",
        "\u0156" : "R",
        "\u1e5e" : "R",
        "\u024c" : "R",
        "\u2c64" : "R",
        "\ua75a" : "R",
        "\ua7a6" : "R",
        "\ua782" : "R",
        "\u24c8" : "S",
        "\uff33" : "S",
        "\u1e9e" : "S",
        "\u015a" : "S",
        "\u1e64" : "S",
        "\u015c" : "S",
        "\u1e60" : "S",
        "\u0160" : "S",
        "\u1e66" : "S",
        "\u1e62" : "S",
        "\u1e68" : "S",
        "\u0218" : "S",
        "\u015e" : "S",
        "\u2c7e" : "S",
        "\ua7a8" : "S",
        "\ua784" : "S",
        "\u24c9" : "T",
        "\uff34" : "T",
        "\u1e6a" : "T",
        "\u0164" : "T",
        "\u1e6c" : "T",
        "\u021a" : "T",
        "\u0162" : "T",
        "\u1e70" : "T",
        "\u1e6e" : "T",
        "\u0166" : "T",
        "\u01ac" : "T",
        "\u01ae" : "T",
        "\u023e" : "T",
        "\ua786" : "T",
        "\ua728" : "TZ",
        "\u24ca" : "U",
        "\uff35" : "U",
        "\u00d9" : "U",
        "\u00da" : "U",
        "\u00db" : "U",
        "\u0168" : "U",
        "\u1e78" : "U",
        "\u016a" : "U",
        "\u1e7a" : "U",
        "\u016c" : "U",
        "\u00dc" : "U",
        "\u01db" : "U",
        "\u01d7" : "U",
        "\u01d5" : "U",
        "\u01d9" : "U",
        "\u1ee6" : "U",
        "\u016e" : "U",
        "\u0170" : "U",
        "\u01d3" : "U",
        "\u0214" : "U",
        "\u0216" : "U",
        "\u01af" : "U",
        "\u1eea" : "U",
        "\u1ee8" : "U",
        "\u1eee" : "U",
        "\u1eec" : "U",
        "\u1ef0" : "U",
        "\u1ee4" : "U",
        "\u1e72" : "U",
        "\u0172" : "U",
        "\u1e76" : "U",
        "\u1e74" : "U",
        "\u0244" : "U",
        "\u24cb" : "V",
        "\uff36" : "V",
        "\u1e7c" : "V",
        "\u1e7e" : "V",
        "\u01b2" : "V",
        "\ua75e" : "V",
        "\u0245" : "V",
        "\ua760" : "VY",
        "\u24cc" : "W",
        "\uff37" : "W",
        "\u1e80" : "W",
        "\u1e82" : "W",
        "\u0174" : "W",
        "\u1e86" : "W",
        "\u1e84" : "W",
        "\u1e88" : "W",
        "\u2c72" : "W",
        "\u24cd" : "X",
        "\uff38" : "X",
        "\u1e8a" : "X",
        "\u1e8c" : "X",
        "\u24ce" : "Y",
        "\uff39" : "Y",
        "\u1ef2" : "Y",
        "\u00dd" : "Y",
        "\u0176" : "Y",
        "\u1ef8" : "Y",
        "\u0232" : "Y",
        "\u1e8e" : "Y",
        "\u0178" : "Y",
        "\u1ef6" : "Y",
        "\u1ef4" : "Y",
        "\u01b3" : "Y",
        "\u024e" : "Y",
        "\u1efe" : "Y",
        "\u24cf" : "Z",
        "\uff3a" : "Z",
        "\u0179" : "Z",
        "\u1e90" : "Z",
        "\u017b" : "Z",
        "\u017d" : "Z",
        "\u1e92" : "Z",
        "\u1e94" : "Z",
        "\u01b5" : "Z",
        "\u0224" : "Z",
        "\u2c7f" : "Z",
        "\u2c6b" : "Z",
        "\ua762" : "Z",
        "\u24d0" : "a",
        "\uff41" : "a",
        "\u1e9a" : "a",
        "\u00e0" : "a",
        "\u00e1" : "a",
        "\u00e2" : "a",
        "\u1ea7" : "a",
        "\u1ea5" : "a",
        "\u1eab" : "a",
        "\u1ea9" : "a",
        "\u00e3" : "a",
        "\u0101" : "a",
        "\u0103" : "a",
        "\u1eb1" : "a",
        "\u1eaf" : "a",
        "\u1eb5" : "a",
        "\u1eb3" : "a",
        "\u0227" : "a",
        "\u01e1" : "a",
        "\u00e4" : "a",
        "\u01df" : "a",
        "\u1ea3" : "a",
        "\u00e5" : "a",
        "\u01fb" : "a",
        "\u01ce" : "a",
        "\u0201" : "a",
        "\u0203" : "a",
        "\u1ea1" : "a",
        "\u1ead" : "a",
        "\u1eb7" : "a",
        "\u1e01" : "a",
        "\u0105" : "a",
        "\u2c65" : "a",
        "\u0250" : "a",
        "\ua733" : "aa",
        "\u00e6" : "ae",
        "\u01fd" : "ae",
        "\u01e3" : "ae",
        "\ua735" : "ao",
        "\ua737" : "au",
        "\ua739" : "av",
        "\ua73b" : "av",
        "\ua73d" : "ay",
        "\u24d1" : "b",
        "\uff42" : "b",
        "\u1e03" : "b",
        "\u1e05" : "b",
        "\u1e07" : "b",
        "\u0180" : "b",
        "\u0183" : "b",
        "\u0253" : "b",
        "\u24d2" : "c",
        "\uff43" : "c",
        "\u0107" : "c",
        "\u0109" : "c",
        "\u010b" : "c",
        "\u010d" : "c",
        "\u00e7" : "c",
        "\u1e09" : "c",
        "\u0188" : "c",
        "\u023c" : "c",
        "\ua73f" : "c",
        "\u2184" : "c",
        "\u24d3" : "d",
        "\uff44" : "d",
        "\u1e0b" : "d",
        "\u010f" : "d",
        "\u1e0d" : "d",
        "\u1e11" : "d",
        "\u1e13" : "d",
        "\u1e0f" : "d",
        "\u0111" : "d",
        "\u018c" : "d",
        "\u0256" : "d",
        "\u0257" : "d",
        "\ua77a" : "d",
        "\u01f3" : "dz",
        "\u01c6" : "dz",
        "\u24d4" : "e",
        "\uff45" : "e",
        "\u00e8" : "e",
        "\u00e9" : "e",
        "\u00ea" : "e",
        "\u1ec1" : "e",
        "\u1ebf" : "e",
        "\u1ec5" : "e",
        "\u1ec3" : "e",
        "\u1ebd" : "e",
        "\u0113" : "e",
        "\u1e15" : "e",
        "\u1e17" : "e",
        "\u0115" : "e",
        "\u0117" : "e",
        "\u00eb" : "e",
        "\u1ebb" : "e",
        "\u011b" : "e",
        "\u0205" : "e",
        "\u0207" : "e",
        "\u1eb9" : "e",
        "\u1ec7" : "e",
        "\u0229" : "e",
        "\u1e1d" : "e",
        "\u0119" : "e",
        "\u1e19" : "e",
        "\u1e1b" : "e",
        "\u0247" : "e",
        "\u025b" : "e",
        "\u01dd" : "e",
        "\u24d5" : "f",
        "\uff46" : "f",
        "\u1e1f" : "f",
        "\u0192" : "f",
        "\ua77c" : "f",
        "\u24d6" : "g",
        "\uff47" : "g",
        "\u01f5" : "g",
        "\u011d" : "g",
        "\u1e21" : "g",
        "\u011f" : "g",
        "\u0121" : "g",
        "\u01e7" : "g",
        "\u0123" : "g",
        "\u01e5" : "g",
        "\u0260" : "g",
        "\ua7a1" : "g",
        "\u1d79" : "g",
        "\ua77f" : "g",
        "\u24d7" : "h",
        "\uff48" : "h",
        "\u0125" : "h",
        "\u1e23" : "h",
        "\u1e27" : "h",
        "\u021f" : "h",
        "\u1e25" : "h",
        "\u1e29" : "h",
        "\u1e2b" : "h",
        "\u1e96" : "h",
        "\u0127" : "h",
        "\u2c68" : "h",
        "\u2c76" : "h",
        "\u0265" : "h",
        "\u0195" : "hv",
        "\u24d8" : "i",
        "\uff49" : "i",
        "\u00ec" : "i",
        "\u00ed" : "i",
        "\u00ee" : "i",
        "\u0129" : "i",
        "\u012b" : "i",
        "\u012d" : "i",
        "\u00ef" : "i",
        "\u1e2f" : "i",
        "\u1ec9" : "i",
        "\u01d0" : "i",
        "\u0209" : "i",
        "\u020b" : "i",
        "\u1ecb" : "i",
        "\u012f" : "i",
        "\u1e2d" : "i",
        "\u0268" : "i",
        "\u0131" : "i",
        "\u24d9" : "j",
        "\uff4a" : "j",
        "\u0135" : "j",
        "\u01f0" : "j",
        "\u0249" : "j",
        "\u24da" : "k",
        "\uff4b" : "k",
        "\u1e31" : "k",
        "\u01e9" : "k",
        "\u1e33" : "k",
        "\u0137" : "k",
        "\u1e35" : "k",
        "\u0199" : "k",
        "\u2c6a" : "k",
        "\ua741" : "k",
        "\ua743" : "k",
        "\ua745" : "k",
        "\ua7a3" : "k",
        "\u24db" : "l",
        "\uff4c" : "l",
        "\u0140" : "l",
        "\u013a" : "l",
        "\u013e" : "l",
        "\u1e37" : "l",
        "\u1e39" : "l",
        "\u013c" : "l",
        "\u1e3d" : "l",
        "\u1e3b" : "l",
        "\u017f" : "l",
        "\u0142" : "l",
        "\u019a" : "l",
        "\u026b" : "l",
        "\u2c61" : "l",
        "\ua749" : "l",
        "\ua781" : "l",
        "\ua747" : "l",
        "\u01c9" : "lj",
        "\u24dc" : "m",
        "\uff4d" : "m",
        "\u1e3f" : "m",
        "\u1e41" : "m",
        "\u1e43" : "m",
        "\u0271" : "m",
        "\u026f" : "m",
        "\u24dd" : "n",
        "\uff4e" : "n",
        "\u01f9" : "n",
        "\u0144" : "n",
        "\u00f1" : "n",
        "\u1e45" : "n",
        "\u0148" : "n",
        "\u1e47" : "n",
        "\u0146" : "n",
        "\u1e4b" : "n",
        "\u1e49" : "n",
        "\u019e" : "n",
        "\u0272" : "n",
        "\u0149" : "n",
        "\ua791" : "n",
        "\ua7a5" : "n",
        "\u01cc" : "nj",
        "\u24de" : "o",
        "\uff4f" : "o",
        "\u00f2" : "o",
        "\u00f3" : "o",
        "\u00f4" : "o",
        "\u1ed3" : "o",
        "\u1ed1" : "o",
        "\u1ed7" : "o",
        "\u1ed5" : "o",
        "\u00f5" : "o",
        "\u1e4d" : "o",
        "\u022d" : "o",
        "\u1e4f" : "o",
        "\u014d" : "o",
        "\u1e51" : "o",
        "\u1e53" : "o",
        "\u014f" : "o",
        "\u022f" : "o",
        "\u0231" : "o",
        "\u00f6" : "o",
        "\u022b" : "o",
        "\u1ecf" : "o",
        "\u0151" : "o",
        "\u01d2" : "o",
        "\u020d" : "o",
        "\u020f" : "o",
        "\u01a1" : "o",
        "\u1edd" : "o",
        "\u1edb" : "o",
        "\u1ee1" : "o",
        "\u1edf" : "o",
        "\u1ee3" : "o",
        "\u1ecd" : "o",
        "\u1ed9" : "o",
        "\u01eb" : "o",
        "\u01ed" : "o",
        "\u00f8" : "o",
        "\u01ff" : "o",
        "\u0254" : "o",
        "\ua74b" : "o",
        "\ua74d" : "o",
        "\u0275" : "o",
        "\u01a3" : "oi",
        "\u0223" : "ou",
        "\ua74f" : "oo",
        "\u24df" : "p",
        "\uff50" : "p",
        "\u1e55" : "p",
        "\u1e57" : "p",
        "\u01a5" : "p",
        "\u1d7d" : "p",
        "\ua751" : "p",
        "\ua753" : "p",
        "\ua755" : "p",
        "\u24e0" : "q",
        "\uff51" : "q",
        "\u024b" : "q",
        "\ua757" : "q",
        "\ua759" : "q",
        "\u24e1" : "r",
        "\uff52" : "r",
        "\u0155" : "r",
        "\u1e59" : "r",
        "\u0159" : "r",
        "\u0211" : "r",
        "\u0213" : "r",
        "\u1e5b" : "r",
        "\u1e5d" : "r",
        "\u0157" : "r",
        "\u1e5f" : "r",
        "\u024d" : "r",
        "\u027d" : "r",
        "\ua75b" : "r",
        "\ua7a7" : "r",
        "\ua783" : "r",
        "\u24e2" : "s",
        "\uff53" : "s",
        "\u00df" : "s",
        "\u015b" : "s",
        "\u1e65" : "s",
        "\u015d" : "s",
        "\u1e61" : "s",
        "\u0161" : "s",
        "\u1e67" : "s",
        "\u1e63" : "s",
        "\u1e69" : "s",
        "\u0219" : "s",
        "\u015f" : "s",
        "\u023f" : "s",
        "\ua7a9" : "s",
        "\ua785" : "s",
        "\u1e9b" : "s",
        "\u24e3" : "t",
        "\uff54" : "t",
        "\u1e6b" : "t",
        "\u1e97" : "t",
        "\u0165" : "t",
        "\u1e6d" : "t",
        "\u021b" : "t",
        "\u0163" : "t",
        "\u1e71" : "t",
        "\u1e6f" : "t",
        "\u0167" : "t",
        "\u01ad" : "t",
        "\u0288" : "t",
        "\u2c66" : "t",
        "\ua787" : "t",
        "\ua729" : "tz",
        "\u24e4" : "u",
        "\uff55" : "u",
        "\u00f9" : "u",
        "\u00fa" : "u",
        "\u00fb" : "u",
        "\u0169" : "u",
        "\u1e79" : "u",
        "\u016b" : "u",
        "\u1e7b" : "u",
        "\u016d" : "u",
        "\u00fc" : "u",
        "\u01dc" : "u",
        "\u01d8" : "u",
        "\u01d6" : "u",
        "\u01da" : "u",
        "\u1ee7" : "u",
        "\u016f" : "u",
        "\u0171" : "u",
        "\u01d4" : "u",
        "\u0215" : "u",
        "\u0217" : "u",
        "\u01b0" : "u",
        "\u1eeb" : "u",
        "\u1ee9" : "u",
        "\u1eef" : "u",
        "\u1eed" : "u",
        "\u1ef1" : "u",
        "\u1ee5" : "u",
        "\u1e73" : "u",
        "\u0173" : "u",
        "\u1e77" : "u",
        "\u1e75" : "u",
        "\u0289" : "u",
        "\u24e5" : "v",
        "\uff56" : "v",
        "\u1e7d" : "v",
        "\u1e7f" : "v",
        "\u028b" : "v",
        "\ua75f" : "v",
        "\u028c" : "v",
        "\ua761" : "vy",
        "\u24e6" : "w",
        "\uff57" : "w",
        "\u1e81" : "w",
        "\u1e83" : "w",
        "\u0175" : "w",
        "\u1e87" : "w",
        "\u1e85" : "w",
        "\u1e98" : "w",
        "\u1e89" : "w",
        "\u2c73" : "w",
        "\u24e7" : "x",
        "\uff58" : "x",
        "\u1e8b" : "x",
        "\u1e8d" : "x",
        "\u24e8" : "y",
        "\uff59" : "y",
        "\u1ef3" : "y",
        "\u00fd" : "y",
        "\u0177" : "y",
        "\u1ef9" : "y",
        "\u0233" : "y",
        "\u1e8f" : "y",
        "\u00ff" : "y",
        "\u1ef7" : "y",
        "\u1e99" : "y",
        "\u1ef5" : "y",
        "\u01b4" : "y",
        "\u024f" : "y",
        "\u1eff" : "y",
        "\u24e9" : "z",
        "\uff5a" : "z",
        "\u017a" : "z",
        "\u1e91" : "z",
        "\u017c" : "z",
        "\u017e" : "z",
        "\u1e93" : "z",
        "\u1e95" : "z",
        "\u01b6" : "z",
        "\u0225" : "z",
        "\u0240" : "z",
        "\u2c6c" : "z",
        "\ua763" : "z",
        "\u0386" : "\u0391",
        "\u0388" : "\u0395",
        "\u0389" : "\u0397",
        "\u038a" : "\u0399",
        "\u03aa" : "\u0399",
        "\u038c" : "\u039f",
        "\u038e" : "\u03a5",
        "\u03ab" : "\u03a5",
        "\u038f" : "\u03a9",
        "\u03ac" : "\u03b1",
        "\u03ad" : "\u03b5",
        "\u03ae" : "\u03b7",
        "\u03af" : "\u03b9",
        "\u03ca" : "\u03b9",
        "\u0390" : "\u03b9",
        "\u03cc" : "\u03bf",
        "\u03cd" : "\u03c5",
        "\u03cb" : "\u03c5",
        "\u03b0" : "\u03c5",
        "\u03c9" : "\u03c9",
        "\u03c2" : "\u03c3"
      };
      return a;
    }), context.define("select2/data/base", ["../utils"], function(c) {
      /**
       * @param {?} texturePath
       * @param {?} attributes
       * @return {undefined}
       */
      function Model(texturePath, attributes) {
        Model.__super__.constructor.call(this);
      }
      return c.Extend(Model, c.Observable), Model.prototype.current = function(obj) {
        throw new Error("The `current` method must be defined in child classes.");
      }, Model.prototype.query = function(query, firstOnly) {
        throw new Error("The `query` method must be defined in child classes.");
      }, Model.prototype.bind = function(type, name) {
      }, Model.prototype.destroy = function() {
      }, Model.prototype.generateResultId = function(ignores, test) {
        /** @type {string} */
        var _result_ = ignores.id + "-result-";
        return _result_ += c.generateChars(4), _result_ += null != test.id ? "-" + test.id.toString() : "-" + c.generateChars(4);
      }, Model;
    }), context.define("select2/data/select", ["./base", "../utils", "jquery"], function(options, collection, $) {
      /**
       * @param {Object} $element
       * @param {?} key
       * @return {undefined}
       */
      function self($element, key) {
        /** @type {Object} */
        this.$element = $element;
        this.options = key;
        self.__super__.constructor.call(this);
      }
      return collection.Extend(self, options), self.prototype.current = function(success) {
        /** @type {Array} */
        var col = [];
        var handler = this;
        this.$element.find(":selected").each(function() {
          var where = $(this);
          var m = handler.item(where);
          col.push(m);
        });
        success(col);
      }, self.prototype.select = function(item) {
        var that = this;
        if (item.selected = true, $(item.element).is("option")) {
          return item.element.selected = true, void this.$element.trigger("change");
        }
        if (this.$element.prop("multiple")) {
          this.current(function(checkSet) {
            /** @type {Array} */
            var values = [];
            /** @type {Array} */
            item = [item];
            item.push.apply(item, checkSet);
            /** @type {number} */
            var j = 0;
            for (;j < item.length;j++) {
              var id = item[j].id;
              if (-1 === $.inArray(id, values)) {
                values.push(id);
              }
            }
            that.$element.val(values);
            that.$element.trigger("change");
          });
        } else {
          var value = item.id;
          this.$element.val(value);
          this.$element.trigger("change");
        }
      }, self.prototype.unselect = function(self) {
        var that = this;
        if (this.$element.prop("multiple")) {
          return self.selected = false, $(self.element).is("option") ? (self.element.selected = false, void this.$element.trigger("change")) : void this.current(function(employees) {
            /** @type {Array} */
            var values = [];
            /** @type {number} */
            var i = 0;
            for (;i < employees.length;i++) {
              var id = employees[i].id;
              if (id !== self.id) {
                if (-1 === $.inArray(id, values)) {
                  values.push(id);
                }
              }
            }
            that.$element.val(values);
            that.$element.trigger("change");
          });
        }
      }, self.prototype.bind = function(obj, type) {
        var instance = this;
        /** @type {Object} */
        this.container = obj;
        obj.on("select", function(event) {
          instance.select(event.data);
        });
        obj.on("unselect", function(event) {
          instance.unselect(event.data);
        });
      }, self.prototype.destroy = function() {
        this.$element.find("*").each(function() {
          $.removeData(this, "data");
        });
      }, self.prototype.query = function(expr, callback) {
        /** @type {Array} */
        var changes = [];
        var dom = this;
        var cursor = this.$element.children();
        cursor.each(function() {
          var select = $(this);
          if (select.is("option") || select.is("optgroup")) {
            var selector = dom.item(select);
            var val = dom.matches(expr, selector);
            if (null !== val) {
              changes.push(val);
            }
          }
        });
        callback({
          results : changes
        });
      }, self.prototype.addOptions = function(opts) {
        collection.appendMany(this.$element, opts);
      }, self.prototype.option = function(item) {
        var node;
        if (item.children) {
          /** @type {Element} */
          node = document.createElement("optgroup");
          node.label = item.text;
        } else {
          /** @type {Element} */
          node = document.createElement("option");
          if (void 0 !== node.textContent) {
            node.textContent = item.text;
          } else {
            node.innerText = item.text;
          }
        }
        if (item.id) {
          node.value = item.id;
        }
        if (item.disabled) {
          /** @type {boolean} */
          node.disabled = true;
        }
        if (item.selected) {
          /** @type {boolean} */
          node.selected = true;
        }
        if (item.title) {
          node.title = item.title;
        }
        var $node = $(node);
        var data = this._normalizeItem(item);
        return data.element = node, $.data(node, "data", data), $node;
      }, self.prototype.item = function(element) {
        var item = {};
        if (item = $.data(element[0], "data"), null != item) {
          return item;
        }
        if (element.is("option")) {
          item = {
            id : element.val(),
            text : element.text(),
            disabled : element.prop("disabled"),
            selected : element.prop("selected"),
            title : element.prop("title")
          };
        } else {
          if (element.is("optgroup")) {
            item = {
              text : element.prop("label"),
              children : [],
              title : element.prop("title")
            };
            var codeSegments = element.children("option");
            /** @type {Array} */
            var tmp = [];
            /** @type {number} */
            var i = 0;
            for (;i < codeSegments.length;i++) {
              var key = $(codeSegments[i]);
              var camelKey = this.item(key);
              tmp.push(camelKey);
            }
            /** @type {Array} */
            item.children = tmp;
          }
        }
        return item = this._normalizeItem(item), item.element = element[0], $.data(element[0], "data", item), item;
      }, self.prototype._normalizeItem = function(item) {
        if (!$.isPlainObject(item)) {
          item = {
            id : item,
            text : item
          };
        }
        item = $.extend({}, {
          text : ""
        }, item);
        var attributes = {
          selected : false,
          disabled : false
        };
        return null != item.id && (item.id = item.id.toString()), null != item.text && (item.text = item.text.toString()), null == item._resultId && (item.id && (null != this.container && (item._resultId = this.generateResultId(this.container, item)))), $.extend({}, attributes, item);
      }, self.prototype.matches = function(expr, elem) {
        var Sizzle = this.options.get("matcher");
        return Sizzle(expr, elem);
      }, self;
    }), context.define("select2/data/array", ["./select", "../utils", "jquery"], function(options, Util, $) {
      /**
       * @param {?} config
       * @param {Node} wrapper
       * @return {undefined}
       */
      function Widget(config, wrapper) {
        var r20 = wrapper.get("data") || [];
        Widget.__super__.constructor.call(this, config, wrapper);
        this.addOptions(this.convertToOptions(r20));
      }
      return Util.Extend(Widget, options), Widget.prototype.select = function(item) {
        var res = this.$element.find("option").filter(function(dataAndEvents, $provide) {
          return $provide.value == item.id.toString();
        });
        if (0 === res.length) {
          res = this.option(item);
          this.addOptions(res);
        }
        Widget.__super__.select.call(this, item);
      }, Widget.prototype.convertToOptions = function(codeSegments) {
        /**
         * @param {Element} label
         * @return {?}
         */
        function callback(label) {
          return function() {
            return $(this).val() == label.id;
          };
        }
        var ui = this;
        var array = this.$element.find("option");
        var elems = array.map(function() {
          return ui.item($(this)).id;
        }).get();
        /** @type {Array} */
        var readyList = [];
        /** @type {number} */
        var i = 0;
        for (;i < codeSegments.length;i++) {
          var o = this._normalizeItem(codeSegments[i]);
          if ($.inArray(o.id, elems) >= 0) {
            var $target = array.filter(callback(o));
            var elemOptions = this.item($target);
            var options = $.extend(true, {}, o, elemOptions);
            var img = this.option(options);
            $target.replaceWith(img);
          } else {
            var obj = this.option(o);
            if (o.children) {
              var backgroundImage = this.convertToOptions(o.children);
              Util.appendMany(obj, backgroundImage);
            }
            readyList.push(obj);
          }
        }
        return readyList;
      }, Widget;
    }), context.define("select2/data/ajax", ["./array", "../utils", "jquery"], function(_super, testStore, $) {
      /**
       * @param {?} atts
       * @param {Node} attributes
       * @return {undefined}
       */
      function Model(atts, attributes) {
        this.ajaxOptions = this._applyDefaults(attributes.get("ajax"));
        if (null != this.ajaxOptions.processResults) {
          this.processResults = this.ajaxOptions.processResults;
        }
        Model.__super__.constructor.call(this, atts, attributes);
      }
      return testStore.Extend(Model, _super), Model.prototype._applyDefaults = function(defaults) {
        var attributes = {
          /**
           * @param {string} name
           * @return {?}
           */
          data : function(name) {
            return $.extend({}, name, {
              q : name.term
            });
          },
          /**
           * @param {?} options
           * @param {Function} callback
           * @param {Function} data
           * @return {?}
           */
          transport : function(options, callback, data) {
            var promise = $.ajax(options);
            return promise.then(callback), promise.fail(data), promise;
          }
        };
        return $.extend({}, attributes, defaults, true);
      }, Model.prototype.processResults = function(result) {
        return result;
      }, Model.prototype.query = function(data, success) {
        /**
         * @return {undefined}
         */
        function next() {
          var match = info.transport(info, function(result) {
            var response = self.processResults(result, data);
            if (self.options.get("debug")) {
              if (window.console) {
                if (console.error) {
                  if (!(response && (response.results && $.isArray(response.results)))) {
                    console.error("Select2: The AJAX results did not return an array in the `results` key of the response.");
                  }
                }
              }
            }
            success(response);
          }, function() {
            self.trigger("results:message", {
              message : "errorLoading"
            });
          });
          self._request = match;
        }
        var self = this;
        if (null != this._request) {
          if ($.isFunction(this._request.abort)) {
            this._request.abort();
          }
          /** @type {null} */
          this._request = null;
        }
        var info = $.extend({
          type : "GET"
        }, this.ajaxOptions);
        if ("function" == typeof info.url) {
          info.url = info.url.call(this.$element, data);
        }
        if ("function" == typeof info.data) {
          info.data = info.data.call(this.$element, data);
        }
        if (this.ajaxOptions.delay && "" !== data.term) {
          if (this._queryTimeout) {
            window.clearTimeout(this._queryTimeout);
          }
          /** @type {number} */
          this._queryTimeout = window.setTimeout(next, this.ajaxOptions.delay);
        } else {
          next();
        }
      }, Model;
    }), context.define("select2/data/tags", ["jquery"], function(self) {
      /**
       * @param {Function} callback
       * @param {?} err
       * @param {Node} app
       * @return {undefined}
       */
      function test(callback, err, app) {
        var filter = app.get("tags");
        var createTag = app.get("createTag");
        if (void 0 !== createTag) {
          this.createTag = createTag;
        }
        var a = app.get("insertTag");
        if (void 0 !== a && (this.insertTag = a), callback.call(this, err, app), self.isArray(filter)) {
          /** @type {number} */
          var i = 0;
          for (;i < filter.length;i++) {
            var item = filter[i];
            var name = this._normalizeItem(item);
            var text = this.option(name);
            this.$element.append(text);
          }
        }
      }
      return test.prototype.query = function(callback, params, success) {
        /**
         * @param {Object} response
         * @param {boolean} dataAndEvents
         * @return {?}
         */
        function fn(response, dataAndEvents) {
          var results = response.results;
          /** @type {number} */
          var i = 0;
          for (;i < results.length;i++) {
            var result = results[i];
            /** @type {boolean} */
            var inverse = null != result.children && !fn({
              results : result.children
            }, true);
            /** @type {boolean} */
            var program = result.text === params.term;
            if (program || inverse) {
              return!dataAndEvents && (response.data = results, void success(response));
            }
          }
          if (dataAndEvents) {
            return true;
          }
          var item = options.createTag(params);
          if (null != item) {
            var value = options.option(item);
            value.attr("data-select2-tag", true);
            options.addOptions([value]);
            options.insertTag(results, item);
          }
          response.results = results;
          success(response);
        }
        var options = this;
        return this._removeOldTags(), null == params.term || null != params.page ? void callback.call(this, params, success) : void callback.call(this, params, fn);
      }, test.prototype.createTag = function(name, data) {
        var value = self.trim(data.term);
        return "" === value ? null : {
          id : value,
          text : value
        };
      }, test.prototype.insertTag = function(first, objects, item) {
        objects.unshift(item);
      }, test.prototype._removeOldTags = function(dataAndEvents) {
        var cursor = (this._lastTag, this.$element.find("option[data-select2-tag]"));
        cursor.each(function() {
          if (!this.selected) {
            self(this).remove();
          }
        });
      }, test;
    }), context.define("select2/data/tokenizer", ["jquery"], function($) {
      /**
       * @param {Function} matches
       * @param {?} expr
       * @param {Node} local
       * @return {undefined}
       */
      function filter(matches, expr, local) {
        var tokenizer = local.get("tokenizer");
        if (void 0 !== tokenizer) {
          this.tokenizer = tokenizer;
        }
        matches.call(this, expr, local);
      }
      return filter.prototype.bind = function(expression, type, path) {
        expression.call(this, type, path);
        this.$search = type.dropdown.$search || (type.selection.$search || path.find(".select2-search__field"));
      }, filter.prototype.query = function(q, query, success) {
        /**
         * @param {Object} user
         * @return {undefined}
         */
        function callback(user) {
          _self.trigger("select", {
            data : user
          });
        }
        var _self = this;
        query.term = query.term || "";
        var options = this.tokenizer(query, this.options, callback);
        if (options.term !== query.term) {
          if (this.$search.length) {
            this.$search.val(options.term);
            this.$search.focus();
          }
          query.term = options.term;
        }
        q.call(this, query, success);
      }, filter.prototype.tokenizer = function(obj, attributes, state, next) {
        var elems = state.get("tokenSeparators") || [];
        var value = attributes.term;
        /** @type {number} */
        var index = 0;
        var getter = this.createTag || function(node) {
          return{
            id : node.term,
            text : node.term
          };
        };
        for (;index < value.length;) {
          var item = value[index];
          if (-1 !== $.inArray(item, elems)) {
            var current = value.substr(0, index);
            var node = $.extend({}, attributes, {
              term : current
            });
            var e = getter(node);
            if (null != e) {
              next(e);
              value = value.substr(index + 1) || "";
              /** @type {number} */
              index = 0;
            } else {
              index++;
            }
          } else {
            index++;
          }
        }
        return{
          term : value
        };
      }, filter;
    }), context.define("select2/data/minimumInputLength", [], function() {
      /**
       * @param {Function} expected
       * @param {?} actual
       * @param {Node} cmp
       * @return {undefined}
       */
      function test(expected, actual, cmp) {
        this.minimumInputLength = cmp.get("minimumInputLength");
        expected.call(this, actual, cmp);
      }
      return test.prototype.query = function(callback, params, success) {
        return params.term = params.term || "", params.term.length < this.minimumInputLength ? void this.trigger("results:message", {
          message : "inputTooShort",
          args : {
            minimum : this.minimumInputLength,
            input : params.term,
            params : params
          }
        }) : void callback.call(this, params, success);
      }, test;
    }), context.define("select2/data/maximumInputLength", [], function() {
      /**
       * @param {Function} expected
       * @param {?} actual
       * @param {Node} cmp
       * @return {undefined}
       */
      function test(expected, actual, cmp) {
        this.maximumInputLength = cmp.get("maximumInputLength");
        expected.call(this, actual, cmp);
      }
      return test.prototype.query = function(callback, params, success) {
        return params.term = params.term || "", this.maximumInputLength > 0 && params.term.length > this.maximumInputLength ? void this.trigger("results:message", {
          message : "inputTooLong",
          args : {
            maximum : this.maximumInputLength,
            input : params.term,
            params : params
          }
        }) : void callback.call(this, params, success);
      }, test;
    }), context.define("select2/data/maximumSelectionLength", [], function() {
      /**
       * @param {Function} expected
       * @param {?} actual
       * @param {Node} cmp
       * @return {undefined}
       */
      function test(expected, actual, cmp) {
        this.maximumSelectionLength = cmp.get("maximumSelectionLength");
        expected.call(this, actual, cmp);
      }
      return test.prototype.query = function(callback, next, success) {
        var self = this;
        this.current(function(newlines) {
          var index = null != newlines ? newlines.length : 0;
          return self.maximumSelectionLength > 0 && index >= self.maximumSelectionLength ? void self.trigger("results:message", {
            message : "maximumSelected",
            args : {
              maximum : self.maximumSelectionLength
            }
          }) : void callback.call(self, next, success);
        });
      }, test;
    }), context.define("select2/dropdown", ["jquery", "./utils"], function(require, root) {
      /**
       * @param {?} el
       * @param {?} options
       * @return {undefined}
       */
      function Plugin(el, options) {
        this.$element = el;
        this.options = options;
        Plugin.__super__.constructor.call(this);
      }
      return root.Extend(Plugin, root.Observable), Plugin.prototype.render = function() {
        var _ = require('<span class="select2-dropdown"><span class="select2-results"></span></span>');
        return _.attr("dir", this.options.get("dir")), this.$dropdown = _, _;
      }, Plugin.prototype.bind = function() {
      }, Plugin.prototype.position = function(lab, element) {
      }, Plugin.prototype.destroy = function() {
        this.$dropdown.remove();
      }, Plugin;
    }), context.define("select2/dropdown/search", ["jquery", "../utils"], function(jQuery, dataAndEvents) {
      /**
       * @return {undefined}
       */
      function f() {
      }
      return f.prototype.render = function(surface) {
        var container = surface.call(this);
        var markup = jQuery('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" /></span>');
        return this.$searchContainer = markup, this.$search = markup.find("input"), container.prepend(markup), container;
      }, f.prototype.bind = function(expression, type, fn) {
        var self = this;
        expression.call(this, type, fn);
        this.$search.on("keydown", function(attributes) {
          self.trigger("keypress", attributes);
          self._keyUpPrevented = attributes.isDefaultPrevented();
        });
        this.$search.on("input", function(dataAndEvents) {
          jQuery(this).off("keyup");
        });
        this.$search.on("keyup input", function(deepDataAndEvents) {
          self.handleSearch(deepDataAndEvents);
        });
        type.on("open", function() {
          self.$search.attr("tabindex", 0);
          self.$search.focus();
          window.setTimeout(function() {
            self.$search.focus();
          }, 0);
        });
        type.on("close", function() {
          self.$search.attr("tabindex", -1);
          self.$search.val("");
        });
        type.on("results:all", function(req) {
          if (null == req.query.term || "" === req.query.term) {
            var cookies = self.showSearch(req);
            if (cookies) {
              self.$searchContainer.removeClass("select2-search--hide");
            } else {
              self.$searchContainer.addClass("select2-search--hide");
            }
          }
        });
      }, f.prototype.handleSearch = function(deepDataAndEvents) {
        if (!this._keyUpPrevented) {
          var term = this.$search.val();
          this.trigger("query", {
            term : term
          });
        }
        /** @type {boolean} */
        this._keyUpPrevented = false;
      }, f.prototype.showSearch = function(req, phrase) {
        return true;
      }, f;
    }), context.define("select2/dropdown/hidePlaceholder", [], function() {
      /**
       * @param {Function} callback
       * @param {?} err
       * @param {Node} el
       * @param {?} capture
       * @return {undefined}
       */
      function init(callback, err, el, capture) {
        this.placeholder = this.normalizePlaceholder(el.get("placeholder"));
        callback.call(this, err, el, capture);
      }
      return init.prototype.append = function(type, data) {
        data.results = this.removePlaceholder(data.results);
        type.call(this, data);
      }, init.prototype.normalizePlaceholder = function(dataAndEvents, msg) {
        return "string" == typeof msg && (msg = {
          id : "",
          text : msg
        }), msg;
      }, init.prototype.removePlaceholder = function(e, ca) {
        var waitAry = ca.slice(0);
        /** @type {number} */
        var i = ca.length - 1;
        for (;i >= 0;i--) {
          var c = ca[i];
          if (this.placeholder.id === c.id) {
            waitAry.splice(i, 1);
          }
        }
        return waitAry;
      }, init;
    }), context.define("select2/dropdown/infiniteScroll", ["jquery"], function($) {
      /**
       * @param {Function} expression
       * @param {?} type
       * @param {?} value
       * @param {?} capture
       * @return {undefined}
       */
      function t(expression, type, value, capture) {
        this.lastParams = {};
        expression.call(this, type, value, capture);
        this.$loadingMore = this.createLoadingMore();
        /** @type {boolean} */
        this.loading = false;
      }
      return t.prototype.append = function(type, node) {
        this.$loadingMore.remove();
        /** @type {boolean} */
        this.loading = false;
        type.call(this, node);
        if (this.showLoadingMore(node)) {
          this.$results.append(this.$loadingMore);
        }
      }, t.prototype.bind = function(expression, type, fn) {
        var self = this;
        expression.call(this, type, fn);
        type.on("query", function(theTitle) {
          self.lastParams = theTitle;
          /** @type {boolean} */
          self.loading = true;
        });
        type.on("query:append", function(theTitle) {
          self.lastParams = theTitle;
          /** @type {boolean} */
          self.loading = true;
        });
        this.$results.on("scroll", function() {
          var b = $.contains(document.documentElement, self.$loadingMore[0]);
          if (!self.loading && b) {
            var val = self.$results.offset().top + self.$results.outerHeight(false);
            var min = self.$loadingMore.offset().top + self.$loadingMore.outerHeight(false);
            if (val + 50 >= min) {
              self.loadMore();
            }
          }
        });
      }, t.prototype.loadMore = function() {
        /** @type {boolean} */
        this.loading = true;
        var attributes = $.extend({}, {
          page : 1
        }, this.lastParams);
        attributes.page++;
        this.trigger("query:append", attributes);
      }, t.prototype.showLoadingMore = function(dataAndEvents, exports) {
        return exports.pagination && exports.pagination.more;
      }, t.prototype.createLoadingMore = function() {
        var el = $('<li class="select2-results__option select2-results__option--load-more"role="treeitem" aria-disabled="true"></li>');
        var template = this.options.get("translations").get("loadingMore");
        return el.html(template(this.lastParams)), el;
      }, t;
    }), context.define("select2/dropdown/attachBody", ["jquery", "../utils"], function($, element) {
      /**
       * @param {Function} b
       * @param {?} start
       * @param {Node} end
       * @return {undefined}
       */
      function t(b, start, end) {
        this.$dropdownParent = end.get("dropdownParent") || $(document.body);
        b.call(this, start, end);
      }
      return t.prototype.bind = function(expression, type, fn) {
        var manipulation_rcheckableType = this;
        /** @type {boolean} */
        var e = false;
        expression.call(this, type, fn);
        type.on("open", function() {
          manipulation_rcheckableType._showDropdown();
          manipulation_rcheckableType._attachPositioningHandler(type);
          if (!e) {
            /** @type {boolean} */
            e = true;
            type.on("results:all", function() {
              manipulation_rcheckableType._positionDropdown();
              manipulation_rcheckableType._resizeDropdown();
            });
            type.on("results:append", function() {
              manipulation_rcheckableType._positionDropdown();
              manipulation_rcheckableType._resizeDropdown();
            });
          }
        });
        type.on("close", function() {
          manipulation_rcheckableType._hideDropdown();
          manipulation_rcheckableType._detachPositioningHandler(type);
        });
        this.$dropdownContainer.on("mousedown", function(event) {
          event.stopPropagation();
        });
      }, t.prototype.destroy = function(fn) {
        fn.call(this);
        this.$dropdownContainer.remove();
      }, t.prototype.position = function(lab, element, node) {
        element.attr("class", node.attr("class"));
        element.removeClass("select2");
        element.addClass("select2-container--open");
        element.css({
          position : "absolute",
          top : -999999
        });
        /** @type {Object} */
        this.$container = node;
      }, t.prototype.render = function(surface) {
        var g = $("<span></span>");
        var ready = surface.call(this);
        return g.append(ready), this.$dropdownContainer = g, g;
      }, t.prototype._hideDropdown = function(dataAndEvents) {
        this.$dropdownContainer.detach();
      }, t.prototype._attachPositioningHandler = function(keepData, ignores) {
        var _positionDropdown = this;
        /** @type {string} */
        var type = "scroll.select2." + ignores.id;
        /** @type {string} */
        var pageX = "resize.select2." + ignores.id;
        /** @type {string} */
        var testNumber = "orientationchange.select2." + ignores.id;
        var $this = this.$container.parents().filter(element.hasScroll);
        $this.each(function() {
          $(this).data("select2-scroll-position", {
            x : $(this).scrollLeft(),
            y : $(this).scrollTop()
          });
        });
        $this.on(type, function(dataAndEvents) {
          var currentPosition = $(this).data("select2-scroll-position");
          $(this).scrollTop(currentPosition.y);
        });
        $(window).on(type + " " + pageX + " " + testNumber, function(dataAndEvents) {
          _positionDropdown._positionDropdown();
          _positionDropdown._resizeDropdown();
        });
      }, t.prototype._detachPositioningHandler = function(keepData, ignores) {
        /** @type {string} */
        var type = "scroll.select2." + ignores.id;
        /** @type {string} */
        var pageX = "resize.select2." + ignores.id;
        /** @type {string} */
        var viewID = "orientationchange.select2." + ignores.id;
        var Events = this.$container.parents().filter(element.hasScroll);
        Events.off(type);
        $(window).off(type + " " + pageX + " " + viewID);
      }, t.prototype._positionDropdown = function() {
        var $window = $(window);
        var destroying = this.$dropdown.hasClass("select2-dropdown--above");
        var select2_dropdown__below = this.$dropdown.hasClass("select2-dropdown--below");
        /** @type {null} */
        var status = null;
        var pos = this.$container.offset();
        pos.bottom = pos.top + this.$container.outerHeight(false);
        var obj = {
          height : this.$container.outerHeight(false)
        };
        obj.top = pos.top;
        obj.bottom = pos.top + obj.height;
        var opts = {
          height : this.$dropdown.outerHeight(false)
        };
        var pagePadding = {
          top : $window.scrollTop(),
          bottom : $window.scrollTop() + $window.height()
        };
        /** @type {boolean} */
        var isCursorAtEnd = pagePadding.top < pos.top - opts.height;
        /** @type {boolean} */
        var waiting = pagePadding.bottom > pos.bottom + opts.height;
        var attributes = {
          left : pos.left,
          top : obj.bottom
        };
        var object = this.$dropdownParent;
        if ("static" === object.css("position")) {
          object = object.offsetParent();
        }
        var bodyOffset = object.offset();
        attributes.top -= bodyOffset.top;
        attributes.left -= bodyOffset.left;
        if (!destroying) {
          if (!select2_dropdown__below) {
            /** @type {string} */
            status = "below";
          }
        }
        if (waiting || (!isCursorAtEnd || destroying)) {
          if (!isCursorAtEnd) {
            if (waiting) {
              if (destroying) {
                /** @type {string} */
                status = "below";
              }
            }
          }
        } else {
          /** @type {string} */
          status = "above";
        }
        if ("above" == status || destroying && "below" !== status) {
          /** @type {number} */
          attributes.top = obj.top - opts.height;
        }
        if (null != status) {
          this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--" + status);
          this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--" + status);
        }
        this.$dropdownContainer.css(attributes);
      }, t.prototype._resizeDropdown = function() {
        var attributes = {
          width : this.$container.outerWidth(false) + "px"
        };
        if (this.options.get("dropdownAutoWidth")) {
          attributes.minWidth = attributes.width;
          /** @type {string} */
          attributes.width = "auto";
        }
        this.$dropdown.css(attributes);
      }, t.prototype._showDropdown = function(dataAndEvents) {
        this.$dropdownContainer.appendTo(this.$dropdownParent);
        this._positionDropdown();
        this._resizeDropdown();
      }, t;
    }), context.define("select2/dropdown/minimumResultsForSearch", [], function() {
      /**
       * @param {Array} ca
       * @return {?}
       */
      function forEach(ca) {
        /** @type {number} */
        var context = 0;
        /** @type {number} */
        var i = 0;
        for (;i < ca.length;i++) {
          var c = ca[i];
          if (c.children) {
            context += forEach(c.children);
          } else {
            context++;
          }
        }
        return context;
      }
      /**
       * @param {Function} fun
       * @param {?} a
       * @param {Node} target
       * @param {?} i
       * @return {undefined}
       */
      function iter(fun, a, target, i) {
        this.minimumResultsForSearch = target.get("minimumResultsForSearch");
        if (this.minimumResultsForSearch < 0) {
          /** @type {number} */
          this.minimumResultsForSearch = 1 / 0;
        }
        fun.call(this, a, target, i);
      }
      return iter.prototype.showSearch = function(method, e) {
        return!(forEach(e.data.results) < this.minimumResultsForSearch) && method.call(this, e);
      }, iter;
    }), context.define("select2/dropdown/selectOnClose", [], function() {
      /**
       * @return {undefined}
       */
      function b() {
      }
      return b.prototype.bind = function(expression, type, fn) {
        var _handleSelectOnClose = this;
        expression.call(this, type, fn);
        type.on("close", function() {
          _handleSelectOnClose._handleSelectOnClose();
        });
      }, b.prototype._handleSelectOnClose = function() {
        var rs = this.getHighlightedResults();
        if (!(rs.length < 1)) {
          var c = rs.data("data");
          if (!(null != c.element && c.element.selected)) {
            if (!(null == c.element && c.selected)) {
              this.trigger("select", {
                data : c
              });
            }
          }
        }
      }, b;
    }), context.define("select2/dropdown/closeOnSelect", [], function() {
      /**
       * @return {undefined}
       */
      function b() {
      }
      return b.prototype.bind = function(expression, type, fn) {
        var _selectTriggered = this;
        expression.call(this, type, fn);
        type.on("select", function(deepDataAndEvents) {
          _selectTriggered._selectTriggered(deepDataAndEvents);
        });
        type.on("unselect", function(deepDataAndEvents) {
          _selectTriggered._selectTriggered(deepDataAndEvents);
        });
      }, b.prototype._selectTriggered = function(deepDataAndEvents, jqEvent) {
        var event = jqEvent.originalEvent;
        if (!(event && event.ctrlKey)) {
          this.trigger("close", {});
        }
      }, b;
    }), context.define("select2/i18n/en", [], function() {
      return{
        /**
         * @return {?}
         */
        errorLoading : function() {
          return "The results could not be loaded.";
        },
        /**
         * @param {Array} me
         * @return {?}
         */
        inputTooLong : function(me) {
          /** @type {number} */
          var b = me.input.length - me.maximum;
          /** @type {string} */
          var slarge = "Please delete " + b + " character";
          return 1 != b && (slarge += "s"), slarge;
        },
        /**
         * @param {Array} data
         * @return {?}
         */
        inputTooShort : function(data) {
          /** @type {number} */
          var b = data.minimum - data.input.length;
          /** @type {string} */
          var inputTooShort = "Please enter " + b + " or more characters";
          return inputTooShort;
        },
        /**
         * @return {?}
         */
        loadingMore : function() {
          return "Loading more results\u2026";
        },
        /**
         * @param {?} e
         * @return {?}
         */
        maximumSelected : function(e) {
          /** @type {string} */
          var slarge = "You can only select " + e.maximum + " item";
          return 1 != e.maximum && (slarge += "s"), slarge;
        },
        /**
         * @return {?}
         */
        noResults : function() {
          return "No results found";
        },
        /**
         * @return {?}
         */
        searching : function() {
          return "Searching\u2026";
        }
      };
    }), context.define("select2/defaults", ["jquery", "require", "./results", "./selection/single", "./selection/multiple", "./selection/placeholder", "./selection/allowClear", "./selection/search", "./selection/eventRelay", "./utils", "./translation", "./diacritics", "./data/select", "./data/array", "./data/ajax", "./data/tags", "./data/tokenizer", "./data/minimumInputLength", "./data/maximumInputLength", "./data/maximumSelectionLength", "./dropdown", "./dropdown/search", "./dropdown/hidePlaceholder", 
    "./dropdown/infiniteScroll", "./dropdown/attachBody", "./dropdown/minimumResultsForSearch", "./dropdown/selectOnClose", "./dropdown/closeOnSelect", "./i18n/en"], function(_, require, buf, cols, arg, res, next, callback, msg, req, Buffer, b, dataAdapter, version, _type, handler, id, map, query, doc, x, v, world, err, c, ok, slide, hostName, language) {
      /**
       * @return {undefined}
       */
      function Node() {
        this.reset();
      }
      /**
       * @param {Object} opts
       * @return {?}
       */
      Node.prototype.apply = function(opts) {
        if (opts = _.extend(true, {}, this.defaults, opts), null == opts.dataAdapter) {
          if (null != opts.ajax ? opts.dataAdapter = _type : null != opts.data ? opts.dataAdapter = version : opts.dataAdapter = dataAdapter, opts.minimumInputLength > 0 && (opts.dataAdapter = req.Decorate(opts.dataAdapter, map)), opts.maximumInputLength > 0 && (opts.dataAdapter = req.Decorate(opts.dataAdapter, query)), opts.maximumSelectionLength > 0 && (opts.dataAdapter = req.Decorate(opts.dataAdapter, doc)), opts.tags && (opts.dataAdapter = req.Decorate(opts.dataAdapter, handler)), (null != opts.tokenSeparators || 
          null != opts.tokenizer) && (opts.dataAdapter = req.Decorate(opts.dataAdapter, id)), null != opts.query) {
            var base64 = require(opts.amdBase + "compat/query");
            opts.dataAdapter = req.Decorate(opts.dataAdapter, base64);
          }
          if (null != opts.initSelection) {
            var expectationResult = require(opts.amdBase + "compat/initSelection");
            opts.dataAdapter = req.Decorate(opts.dataAdapter, expectationResult);
          }
        }
        if (null == opts.resultsAdapter && (opts.resultsAdapter = buf, null != opts.ajax && (opts.resultsAdapter = req.Decorate(opts.resultsAdapter, err)), null != opts.placeholder && (opts.resultsAdapter = req.Decorate(opts.resultsAdapter, world)), opts.selectOnClose && (opts.resultsAdapter = req.Decorate(opts.resultsAdapter, slide))), null == opts.dropdownAdapter) {
          if (opts.multiple) {
            opts.dropdownAdapter = x;
          } else {
            var result = req.Decorate(x, v);
            opts.dropdownAdapter = result;
          }
          if (0 !== opts.minimumResultsForSearch && (opts.dropdownAdapter = req.Decorate(opts.dropdownAdapter, ok)), opts.closeOnSelect && (opts.dropdownAdapter = req.Decorate(opts.dropdownAdapter, hostName)), null != opts.dropdownCssClass || (null != opts.dropdownCss || null != opts.adaptDropdownCssClass)) {
            var response = require(opts.amdBase + "compat/dropdownCss");
            opts.dropdownAdapter = req.Decorate(opts.dropdownAdapter, response);
          }
          opts.dropdownAdapter = req.Decorate(opts.dropdownAdapter, c);
        }
        if (null == opts.selectionAdapter) {
          if (opts.multiple ? opts.selectionAdapter = arg : opts.selectionAdapter = cols, null != opts.placeholder && (opts.selectionAdapter = req.Decorate(opts.selectionAdapter, res)), opts.allowClear && (opts.selectionAdapter = req.Decorate(opts.selectionAdapter, next)), opts.multiple && (opts.selectionAdapter = req.Decorate(opts.selectionAdapter, callback)), null != opts.containerCssClass || (null != opts.containerCss || null != opts.adaptContainerCssClass)) {
            var module = require(opts.amdBase + "compat/containerCss");
            opts.selectionAdapter = req.Decorate(opts.selectionAdapter, module);
          }
          opts.selectionAdapter = req.Decorate(opts.selectionAdapter, msg);
        }
        if ("string" == typeof opts.language) {
          if (opts.language.indexOf("-") > 0) {
            /** @type {Array.<string>} */
            var vals = opts.language.split("-");
            /** @type {string} */
            var val = vals[0];
            /** @type {Array} */
            opts.language = [opts.language, val];
          } else {
            /** @type {Array} */
            opts.language = [opts.language];
          }
        }
        if (_.isArray(opts.language)) {
          var ret = new Buffer;
          opts.language.push("en");
          var codeSegments = opts.language;
          /** @type {number} */
          var i = 0;
          for (;i < codeSegments.length;i++) {
            var b = codeSegments[i];
            var expectedNumberOfNonCommentArgs = {};
            try {
              expectedNumberOfNonCommentArgs = Buffer.loadPath(b);
            } catch (a) {
              try {
                b = this.defaults.amdLanguageBase + b;
                expectedNumberOfNonCommentArgs = Buffer.loadPath(b);
              } catch (a) {
                if (opts.debug) {
                  if (window.console) {
                    if (console.warn) {
                      console.warn('Select2: The language file for "' + b + '" could not be automatically loaded. A fallback will be used instead.');
                    }
                  }
                }
                continue;
              }
            }
            ret.extend(expectedNumberOfNonCommentArgs);
          }
          opts.translations = ret;
        } else {
          var that = Buffer.loadPath(this.defaults.amdLanguageBase + "en");
          var target = new Buffer(opts.language);
          target.extend(that);
          opts.translations = target;
        }
        return opts;
      };
      /**
       * @return {undefined}
       */
      Node.prototype.reset = function() {
        /**
         * @param {string} callback
         * @return {?}
         */
        function render(callback) {
          /**
           * @param {number} c
           * @return {?}
           */
          function error(c) {
            return b[c] || c;
          }
          return callback.replace(/[^\u0000-\u007E]/g, error);
        }
        /**
         * @param {?} params
         * @param {Object} item
         * @return {?}
         */
        function add(params, item) {
          if ("" === _.trim(params.term)) {
            return item;
          }
          if (item.children && item.children.length > 0) {
            var result = _.extend(true, {}, item);
            /** @type {number} */
            var index = item.children.length - 1;
            for (;index >= 0;index--) {
              var event = item.children[index];
              var res = add(params, event);
              if (null == res) {
                result.children.splice(index, 1);
              }
            }
            return result.children.length > 0 ? result : add(params, result);
          }
          var body = render(item.text).toUpperCase();
          var rvar = render(params.term).toUpperCase();
          return body.indexOf(rvar) > -1 ? item : null;
        }
        this.defaults = {
          amdBase : "./",
          amdLanguageBase : "./i18n/",
          closeOnSelect : true,
          debug : false,
          dropdownAutoWidth : false,
          escapeMarkup : req.escapeMarkup,
          language : language,
          /** @type {function (?, Object): ?} */
          matcher : add,
          minimumInputLength : 0,
          maximumInputLength : 0,
          maximumSelectionLength : 0,
          minimumResultsForSearch : 0,
          selectOnClose : false,
          /**
           * @param {?} items
           * @return {?}
           */
          sorter : function(items) {
            return items;
          },
          /**
           * @param {Object} script
           * @return {?}
           */
          templateResult : function(script) {
            return script.text;
          },
          /**
           * @param {Object} script
           * @return {?}
           */
          templateSelection : function(script) {
            return script.text;
          },
          theme : "default",
          width : "resolve"
        };
      };
      /**
       * @param {string} key
       * @param {?} val
       * @return {undefined}
       */
      Node.prototype.set = function(key, val) {
        var path = _.camelCase(key);
        var obj = {};
        obj[path] = val;
        var attributes = req._convertData(obj);
        _.extend(this.defaults, attributes);
      };
      var t = new Node;
      return t;
    }), context.define("select2/options", ["require", "jquery", "./defaults", "./utils"], function(fix, $, matcherFunction, $target) {
      /**
       * @param {Object} options
       * @param {Object} el
       * @return {undefined}
       */
      function handler(options, el) {
        if (this.options = options, null != el && this.fromElement(el), this.options = matcherFunction.apply(this.options), el && el.is("input")) {
          var expectationResult = fix(this.get("amdBase") + "compat/inputData");
          this.options.dataAdapter = $target.Decorate(this.options.dataAdapter, expectationResult);
        }
      }
      return handler.prototype.fromElement = function(element) {
        /** @type {Array} */
        var elems = ["select2"];
        if (null == this.options.multiple) {
          this.options.multiple = element.prop("multiple");
        }
        if (null == this.options.disabled) {
          this.options.disabled = element.prop("disabled");
        }
        if (null == this.options.language) {
          if (element.prop("lang")) {
            this.options.language = element.prop("lang").toLowerCase();
          } else {
            if (element.closest("[lang]").prop("lang")) {
              this.options.language = element.closest("[lang]").prop("lang");
            }
          }
        }
        if (null == this.options.dir) {
          if (element.prop("dir")) {
            this.options.dir = element.prop("dir");
          } else {
            if (element.closest("[dir]").prop("dir")) {
              this.options.dir = element.closest("[dir]").prop("dir");
            } else {
              /** @type {string} */
              this.options.dir = "ltr";
            }
          }
        }
        element.prop("disabled", this.options.disabled);
        element.prop("multiple", this.options.multiple);
        if (element.data("select2Tags")) {
          if (this.options.debug) {
            if (window.console) {
              if (console.warn) {
                console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.');
              }
            }
          }
          element.data("data", element.data("select2Tags"));
          element.data("tags", true);
        }
        if (element.data("ajaxUrl")) {
          if (this.options.debug) {
            if (window.console) {
              if (console.warn) {
                console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2.");
              }
            }
          }
          element.attr("ajax--url", element.data("ajaxUrl"));
          element.data("ajax--url", element.data("ajaxUrl"));
        }
        var newOptions = {};
        newOptions = $.fn.jquery && ("1." == $.fn.jquery.substr(0, 2) && element[0].dataset) ? $.extend(true, {}, element[0].dataset, element.data()) : element.data();
        var options = $.extend(true, {}, newOptions);
        options = $target._convertData(options);
        var i;
        for (i in options) {
          if (!($.inArray(i, elems) > -1)) {
            if ($.isPlainObject(this.options[i])) {
              $.extend(this.options[i], options[i]);
            } else {
              this.options[i] = options[i];
            }
          }
        }
        return this;
      }, handler.prototype.get = function(name) {
        return this.options[name];
      }, handler.prototype.set = function(key, value) {
        /** @type {string} */
        this.options[key] = value;
      }, handler;
    }), context.define("select2/core", ["jquery", "./options", "./utils", "./keys"], function($, constructor, S, keys) {
      /**
       * @param {string} element
       * @param {string} options
       * @return {undefined}
       */
      var self = function(element, options) {
        if (null != element.data("select2")) {
          element.data("select2").destroy();
        }
        /** @type {string} */
        this.$element = element;
        this.id = this._generateId(element);
        options = options || {};
        this.options = new constructor(options, element);
        self.__super__.constructor.call(this);
        var helper = element.attr("tabindex") || 0;
        element.data("old-tabindex", helper);
        element.attr("tabindex", "-1");
        var effect = this.options.get("dataAdapter");
        this.dataAdapter = new effect(element, this.options);
        var $target = this.render();
        this._placeContainer($target);
        var jCanvasObject = this.options.get("selectionAdapter");
        this.selection = new jCanvasObject(element, this.options);
        this.$selection = this.selection.render();
        this.selection.position(this.$selection, $target);
        var RegExp = this.options.get("dropdownAdapter");
        this.dropdown = new RegExp(element, this.options);
        this.$dropdown = this.dropdown.render();
        this.dropdown.position(this.$dropdown, $target);
        var results = this.options.get("resultsAdapter");
        this.results = new results(element, this.options, this.dataAdapter);
        this.$results = this.results.render();
        this.results.position(this.$results, this.$dropdown);
        var data = this;
        this._bindAdapters();
        this._registerDomEvents();
        this._registerDataEvents();
        this._registerSelectionEvents();
        this._registerDropdownEvents();
        this._registerResultsEvents();
        this._registerEvents();
        this.dataAdapter.current(function(task) {
          data.trigger("selection:update", {
            data : task
          });
        });
        element.addClass("select2-hidden-accessible");
        element.attr("aria-hidden", "true");
        this._syncAttributes();
        element.data("select2", this);
      };
      return S.Extend(self, S.Observable), self.prototype._generateId = function(frame) {
        /** @type {string} */
        var qs = "";
        return qs = null != frame.attr("id") ? frame.attr("id") : null != frame.attr("name") ? frame.attr("name") + "-" + S.generateChars(2) : S.generateChars(4), qs = qs.replace(/(:|\.|\[|\]|,)/g, ""), qs = "select2-" + qs;
      }, self.prototype._placeContainer = function(element) {
        element.insertAfter(this.$element);
        var expectedNumberOfNonCommentArgs = this._resolveWidth(this.$element, this.options.get("width"));
        if (null != expectedNumberOfNonCommentArgs) {
          element.css("width", expectedNumberOfNonCommentArgs);
        }
      }, self.prototype._resolveWidth = function(o, property) {
        /** @type {RegExp} */
        var delegateEventSplitter = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;
        if ("resolve" == property) {
          var prop = this._resolveWidth(o, "style");
          return null != prop ? prop : this._resolveWidth(o, "element");
        }
        if ("element" == property) {
          var sf_width = o.outerWidth(false);
          return 0 >= sf_width ? "auto" : sf_width + "px";
        }
        if ("style" == property) {
          var name = o.attr("style");
          if ("string" != typeof name) {
            return null;
          }
          /** @type {Array.<string>} */
          var number = name.split(";");
          /** @type {number} */
          var i = 0;
          /** @type {number} */
          var n = number.length;
          for (;n > i;i += 1) {
            /** @type {string} */
            var key = number[i].replace(/\s/g, "");
            /** @type {(Array.<string>|null)} */
            var match = key.match(delegateEventSplitter);
            if (null !== match && match.length >= 1) {
              return match[1];
            }
          }
          return null;
        }
        return property;
      }, self.prototype._bindAdapters = function() {
        this.dataAdapter.bind(this, this.$container);
        this.selection.bind(this, this.$container);
        this.dropdown.bind(this, this.$container);
        this.results.bind(this, this.$container);
      }, self.prototype._registerDomEvents = function() {
        var self = this;
        this.$element.on("change.select2", function() {
          self.dataAdapter.current(function(task) {
            self.trigger("selection:update", {
              data : task
            });
          });
        });
        this._sync = S.bind(this._syncAttributes, this);
        if (this.$element[0].attachEvent) {
          this.$element[0].attachEvent("onpropertychange", this._sync);
        }
        var MutationObserver = window.MutationObserver || (window.WebKitMutationObserver || window.MozMutationObserver);
        if (null != MutationObserver) {
          /** @type {MutationObserver} */
          this._observer = new MutationObserver(function(attributes) {
            $.each(attributes, self._sync);
          });
          this._observer.observe(this.$element[0], {
            attributes : true,
            subtree : false
          });
        } else {
          if (this.$element[0].addEventListener) {
            this.$element[0].addEventListener("DOMAttrModified", self._sync, false);
          }
        }
      }, self.prototype._registerDataEvents = function() {
        var output = this;
        this.dataAdapter.on("*", function(type, attributes) {
          output.trigger(type, attributes);
        });
      }, self.prototype._registerSelectionEvents = function() {
        var self = this;
        /** @type {Array} */
        var elems = ["toggle", "focus"];
        this.selection.on("toggle", function() {
          self.toggleDropdown();
        });
        this.selection.on("focus", function(lab) {
          self.focus(lab);
        });
        this.selection.on("*", function(type, attributes) {
          if (-1 === $.inArray(type, elems)) {
            self.trigger(type, attributes);
          }
        });
      }, self.prototype._registerDropdownEvents = function() {
        var output = this;
        this.dropdown.on("*", function(type, attributes) {
          output.trigger(type, attributes);
        });
      }, self.prototype._registerResultsEvents = function() {
        var output = this;
        this.results.on("*", function(type, attributes) {
          output.trigger(type, attributes);
        });
      }, self.prototype._registerEvents = function() {
        var self = this;
        this.on("open", function() {
          self.$container.addClass("select2-container--open");
        });
        this.on("close", function() {
          self.$container.removeClass("select2-container--open");
        });
        this.on("enable", function() {
          self.$container.removeClass("select2-container--disabled");
        });
        this.on("disable", function() {
          self.$container.addClass("select2-container--disabled");
        });
        this.on("blur", function() {
          self.$container.removeClass("select2-container--focus");
        });
        this.on("query", function(query) {
          if (!self.isOpen()) {
            self.trigger("open", {});
          }
          this.dataAdapter.query(query, function(task) {
            self.trigger("results:all", {
              data : task,
              /** @type {Function} */
              query : query
            });
          });
        });
        this.on("query:append", function(query) {
          this.dataAdapter.query(query, function(task) {
            self.trigger("results:append", {
              data : task,
              /** @type {Function} */
              query : query
            });
          });
        });
        this.on("keypress", function(event) {
          var keyCode = event.which;
          if (self.isOpen()) {
            if (keyCode === keys.ESC || (keyCode === keys.TAB || keyCode === keys.UP && event.altKey)) {
              self.close();
              event.preventDefault();
            } else {
              if (keyCode === keys.ENTER) {
                self.trigger("results:select", {});
                event.preventDefault();
              } else {
                if (keyCode === keys.SPACE && event.ctrlKey) {
                  self.trigger("results:toggle", {});
                  event.preventDefault();
                } else {
                  if (keyCode === keys.UP) {
                    self.trigger("results:previous", {});
                    event.preventDefault();
                  } else {
                    if (keyCode === keys.DOWN) {
                      self.trigger("results:next", {});
                      event.preventDefault();
                    }
                  }
                }
              }
            }
          } else {
            if (keyCode === keys.ENTER || (keyCode === keys.SPACE || keyCode === keys.DOWN && event.altKey)) {
              self.open();
              event.preventDefault();
            }
          }
        });
      }, self.prototype._syncAttributes = function() {
        this.options.set("disabled", this.$element.prop("disabled"));
        if (this.options.get("disabled")) {
          if (this.isOpen()) {
            this.close();
          }
          this.trigger("disable", {});
        } else {
          this.trigger("enable", {});
        }
      }, self.prototype.trigger = function(type, opt_attributes) {
        var callback = self.__super__.trigger;
        var uiEvents = {
          open : "opening",
          close : "closing",
          select : "selecting",
          unselect : "unselecting"
        };
        if (void 0 === opt_attributes && (opt_attributes = {}), type in uiEvents) {
          var operation = uiEvents[type];
          var e = {
            prevented : false,
            name : type,
            args : opt_attributes
          };
          if (callback.call(this, operation, e), e.prevented) {
            return void(opt_attributes.prevented = true);
          }
        }
        callback.call(this, type, opt_attributes);
      }, self.prototype.toggleDropdown = function() {
        if (!this.options.get("disabled")) {
          if (this.isOpen()) {
            this.close();
          } else {
            this.open();
          }
        }
      }, self.prototype.open = function() {
        if (!this.isOpen()) {
          this.trigger("query", {});
        }
      }, self.prototype.close = function() {
        if (this.isOpen()) {
          this.trigger("close", {});
        }
      }, self.prototype.isOpen = function() {
        return this.$container.hasClass("select2-container--open");
      }, self.prototype.hasFocus = function() {
        return this.$container.hasClass("select2-container--focus");
      }, self.prototype.focus = function(lab) {
        if (!this.hasFocus()) {
          this.$container.addClass("select2-container--focus");
          this.trigger("focus", {});
        }
      }, self.prototype.enable = function(enable) {
        if (this.options.get("debug")) {
          if (window.console) {
            if (console.warn) {
              console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.');
            }
          }
        }
        if (null == enable || 0 === enable.length) {
          /** @type {Array} */
          enable = [true];
        }
        /** @type {boolean} */
        var text = !enable[0];
        this.$element.prop("disabled", text);
      }, self.prototype.data = function() {
        if (this.options.get("debug")) {
          if (arguments.length > 0) {
            if (window.console) {
              if (console.warn) {
                console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');
              }
            }
          }
        }
        /** @type {Array} */
        var text = [];
        return this.dataAdapter.current(function(textAlt) {
          /** @type {Array} */
          text = textAlt;
        }), text;
      }, self.prototype.val = function(value) {
        if (this.options.get("debug") && (window.console && (console.warn && console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'))), null == value || 0 === value.length) {
          return this.$element.val();
        }
        var val = value[0];
        if ($.isArray(val)) {
          val = $.map(val, function(dstUri) {
            return dstUri.toString();
          });
        }
        this.$element.val(val).trigger("change");
      }, self.prototype.destroy = function() {
        this.$container.remove();
        if (this.$element[0].detachEvent) {
          this.$element[0].detachEvent("onpropertychange", this._sync);
        }
        if (null != this._observer) {
          this._observer.disconnect();
          /** @type {null} */
          this._observer = null;
        } else {
          if (this.$element[0].removeEventListener) {
            this.$element[0].removeEventListener("DOMAttrModified", this._sync, false);
          }
        }
        /** @type {null} */
        this._sync = null;
        this.$element.off(".select2");
        this.$element.attr("tabindex", this.$element.data("old-tabindex"));
        this.$element.removeClass("select2-hidden-accessible");
        this.$element.attr("aria-hidden", "false");
        this.$element.removeData("select2");
        this.dataAdapter.destroy();
        this.selection.destroy();
        this.dropdown.destroy();
        this.results.destroy();
        /** @type {null} */
        this.dataAdapter = null;
        /** @type {null} */
        this.selection = null;
        /** @type {null} */
        this.dropdown = null;
        /** @type {null} */
        this.results = null;
      }, self.prototype.render = function() {
        var container = $('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');
        return container.attr("dir", this.options.get("dir")), this.$container = container, this.$container.addClass("select2-container--" + this.options.get("theme")), container.data("element", this.$element), container;
      }, self;
    }), context.define("select2/compat/utils", ["jquery"], function(S) {
      /**
       * @param {HTMLElement} text
       * @param {HTMLElement} section
       * @param {?} end
       * @return {undefined}
       */
      function init(text, section, end) {
        var classes;
        var vvar;
        /** @type {Array} */
        var assigns = [];
        classes = S.trim(text.attr("class"));
        if (classes) {
          /** @type {string} */
          classes = "" + classes;
          S(classes.split(/\s+/)).each(function() {
            if (0 === this.indexOf("select2-")) {
              assigns.push(this);
            }
          });
        }
        classes = S.trim(section.attr("class"));
        if (classes) {
          /** @type {string} */
          classes = "" + classes;
          S(classes.split(/\s+/)).each(function() {
            if (0 !== this.indexOf("select2-")) {
              vvar = end(this);
              if (null != vvar) {
                assigns.push(vvar);
              }
            }
          });
        }
        text.attr("class", assigns.join(" "));
      }
      return{
        /** @type {function (HTMLElement, HTMLElement, ?): undefined} */
        syncCssClasses : init
      };
    }), context.define("select2/compat/containerCss", ["jquery", "./utils"], function(m, b) {
      /**
       * @param {(Object|string)} ui
       * @return {?}
       */
      function start(ui) {
        return null;
      }
      /**
       * @return {undefined}
       */
      function ExampleView() {
      }
      return ExampleView.prototype.render = function(surface) {
        var el = surface.call(this);
        var match = this.options.get("containerCssClass") || "";
        if (m.isFunction(match)) {
          match = match(this.$element);
        }
        var end = this.options.get("adaptContainerCssClass");
        if (end = end || start, -1 !== match.indexOf(":all:")) {
          match = match.replace(":all:", "");
          var iterator = end;
          /**
           * @param {(Object|string)} value
           * @return {?}
           */
          end = function(value) {
            var key = iterator(value);
            return null != key ? key + " " + value : value;
          };
        }
        var attributes = this.options.get("containerCss") || {};
        return m.isFunction(attributes) && (attributes = attributes(this.$element)), b.syncCssClasses(el, this.$element, end), el.css(attributes), el.addClass(match), el;
      }, ExampleView;
    }), context.define("select2/compat/dropdownCss", ["jquery", "./utils"], function(m, b) {
      /**
       * @param {(Object|string)} ui
       * @return {?}
       */
      function start(ui) {
        return null;
      }
      /**
       * @return {undefined}
       */
      function ExampleView() {
      }
      return ExampleView.prototype.render = function(surface) {
        var el = surface.call(this);
        var match = this.options.get("dropdownCssClass") || "";
        if (m.isFunction(match)) {
          match = match(this.$element);
        }
        var end = this.options.get("adaptDropdownCssClass");
        if (end = end || start, -1 !== match.indexOf(":all:")) {
          match = match.replace(":all:", "");
          var iterator = end;
          /**
           * @param {(Object|string)} value
           * @return {?}
           */
          end = function(value) {
            var key = iterator(value);
            return null != key ? key + " " + value : value;
          };
        }
        var attributes = this.options.get("dropdownCss") || {};
        return m.isFunction(attributes) && (attributes = attributes(this.$element)), b.syncCssClasses(el, this.$element, end), el.css(attributes), el.addClass(match), el;
      }, ExampleView;
    }), context.define("select2/compat/initSelection", ["jquery"], function(g) {
      /**
       * @param {Function} callback
       * @param {?} result
       * @param {Node} app
       * @return {undefined}
       */
      function log(callback, result, app) {
        if (app.get("debug")) {
          if (window.console) {
            if (console.warn) {
              console.warn("Select2: The `initSelection` option has been deprecated in favor of a custom data adapter that overrides the `current` method. This method is now called multiple times instead of a single time when the instance is initialized. Support will be removed for the `initSelection` option in future versions of Select2");
            }
          }
        }
        this.initSelection = app.get("initSelection");
        /** @type {boolean} */
        this._isInitialized = false;
        callback.call(this, result, app);
      }
      return log.prototype.current = function(index, callback) {
        var dit = this;
        return this._isInitialized ? void index.call(this, callback) : void this.initSelection.call(null, this.$element, function(ar) {
          /** @type {boolean} */
          dit._isInitialized = true;
          if (!g.isArray(ar)) {
            /** @type {Array} */
            ar = [ar];
          }
          callback(ar);
        });
      }, log;
    }), context.define("select2/compat/inputData", ["jquery"], function(_) {
      /**
       * @param {Function} state
       * @param {Object} attr
       * @param {Node} context
       * @return {undefined}
       */
      function $(state, attr, context) {
        /** @type {Array} */
        this._currentData = [];
        this._valueSeparator = context.get("valueSeparator") || ",";
        if ("hidden" === attr.prop("type")) {
          if (context.get("debug")) {
            if (console) {
              if (console.warn) {
                console.warn("Select2: Using a hidden input with Select2 is no longer supported and may stop working in the future. It is recommended to use a `<select>` element instead.");
              }
            }
          }
        }
        state.call(this, attr, context);
      }
      return $.prototype.current = function(obj, success) {
        /**
         * @param {Object} param
         * @param {?} num
         * @return {?}
         */
        function next(param, num) {
          /** @type {Array} */
          var params = [];
          return param.selected || -1 !== _.inArray(param.id, num) ? (param.selected = true, params.push(param)) : param.selected = false, param.children && params.push.apply(params, next(param.children, num)), params;
        }
        /** @type {Array} */
        var col = [];
        /** @type {number} */
        var i = 0;
        for (;i < this._currentData.length;i++) {
          var arg = this._currentData[i];
          col.push.apply(col, next(arg, this.$element.val().split(this._valueSeparator)));
        }
        success(col);
      }, $.prototype.select = function(opt_reverse, data) {
        if (this.options.get("multiple")) {
          var formatted = this.$element.val();
          formatted += this._valueSeparator + data.id;
          this.$element.val(formatted);
          this.$element.trigger("change");
        } else {
          this.current(function(tasks) {
            _.map(tasks, function(pane) {
              /** @type {boolean} */
              pane.selected = false;
            });
          });
          this.$element.val(data.id);
          this.$element.trigger("change");
        }
      }, $.prototype.unselect = function(obj, n) {
        var that = this;
        /** @type {boolean} */
        n.selected = false;
        this.current(function(codeSegments) {
          /** @type {Array} */
          var re = [];
          /** @type {number} */
          var i = 0;
          for (;i < codeSegments.length;i++) {
            var node = codeSegments[i];
            if (n.id != node.id) {
              re.push(node.id);
            }
          }
          that.$element.val(re.join(that._valueSeparator));
          that.$element.trigger("change");
        });
      }, $.prototype.query = function(query, selector, callback) {
        /** @type {Array} */
        var results = [];
        /** @type {number} */
        var i = 0;
        for (;i < this._currentData.length;i++) {
          var node = this._currentData[i];
          var matches = this.matches(selector, node);
          if (null !== matches) {
            results.push(matches);
          }
        }
        callback({
          results : results
        });
      }, $.prototype.addOptions = function(opts, obj) {
        var fixed = _.map(obj, function(parent) {
          return _.data(parent[0], "data");
        });
        this._currentData.push.apply(this._currentData, fixed);
      }, $;
    }), context.define("select2/compat/matcher", ["jquery"], function(self) {
      /**
       * @param {?} callback
       * @return {?}
       */
      function close(callback) {
        /**
         * @param {?} d
         * @param {Object} params
         * @return {?}
         */
        function remove(d, params) {
          var result = self.extend(true, {}, params);
          if (null == d.term || "" === self.trim(d.term)) {
            return result;
          }
          if (params.children) {
            /** @type {number} */
            var i = params.children.length - 1;
            for (;i >= 0;i--) {
              var stat = params.children[i];
              var current = callback(d.term, stat.text, stat);
              if (!current) {
                result.children.splice(i, 1);
              }
            }
            if (result.children.length > 0) {
              return result;
            }
          }
          return callback(d.term, params.text, params) ? result : null;
        }
        return remove;
      }
      return close;
    }), context.define("select2/compat/query", [], function() {
      /**
       * @param {Function} callback
       * @param {?} result
       * @param {Node} app
       * @return {undefined}
       */
      function log(callback, result, app) {
        if (app.get("debug")) {
          if (window.console) {
            if (console.warn) {
              console.warn("Select2: The `query` option has been deprecated in favor of a custom data adapter that overrides the `query` method. Support will be removed for the `query` option in future versions of Select2.");
            }
          }
        }
        callback.call(this, result, app);
      }
      return log.prototype.query = function(query, options, callback) {
        /** @type {Function} */
        options.callback = callback;
        var match = this.options.get("query");
        match.call(null, options);
      }, log;
    }), context.define("select2/dropdown/attachContainer", [], function() {
      /**
       * @param {Function} callback
       * @param {?} event
       * @param {?} el
       * @return {undefined}
       */
      function s(callback, event, el) {
        callback.call(this, event, el);
      }
      return s.prototype.position = function(lab, element, component) {
        var $rootElement = component.find(".dropdown-wrapper");
        $rootElement.append(element);
        element.addClass("select2-dropdown--below");
        component.addClass("select2-container--below");
      }, s;
    }), context.define("select2/dropdown/stopPropagation", [], function() {
      /**
       * @return {undefined}
       */
      function b() {
      }
      return b.prototype.bind = function(type, name, fn) {
        type.call(this, name, fn);
        /** @type {Array} */
        var shortcuts = ["blur", "change", "click", "dblclick", "focus", "focusin", "focusout", "input", "keydown", "keyup", "keypress", "mousedown", "mouseenter", "mouseleave", "mousemove", "mouseover", "mouseup", "search", "touchend", "touchstart"];
        this.$dropdown.on(shortcuts.join(" "), function(event) {
          event.stopPropagation();
        });
      }, b;
    }), context.define("select2/selection/stopPropagation", [], function() {
      /**
       * @return {undefined}
       */
      function b() {
      }
      return b.prototype.bind = function(type, name, fn) {
        type.call(this, name, fn);
        /** @type {Array} */
        var shortcuts = ["blur", "change", "click", "dblclick", "focus", "focusin", "focusout", "input", "keydown", "keyup", "keypress", "mousedown", "mouseenter", "mouseleave", "mousemove", "mouseover", "mouseup", "search", "touchend", "touchstart"];
        this.$selection.on(shortcuts.join(" "), function(event) {
          event.stopPropagation();
        });
      }, b;
    }), function(factory) {
      if ("function" == typeof context.define && context.define.amd) {
        context.define("jquery-mousewheel", ["jquery"], factory);
      } else {
        if ("object" == typeof exports) {
          /** @type {function (Object): undefined} */
          module.exports = factory;
        } else {
          factory(lab);
        }
      }
    }(function($) {
      /**
       * @param {Object} event
       * @return {?}
       */
      function handler(event) {
        var orgEvent = event || window.event;
        /** @type {Array.<?>} */
        var args = __slice.call(arguments, 1);
        /** @type {number} */
        var delta = 0;
        /** @type {number} */
        var deltaX = 0;
        /** @type {number} */
        var deltaY = 0;
        /** @type {number} */
        var absDelta = 0;
        /** @type {number} */
        var x = 0;
        /** @type {number} */
        var y = 0;
        if (event = $.event.fix(orgEvent), event.type = "mousewheel", "detail" in orgEvent && (deltaY = -1 * orgEvent.detail), "wheelDelta" in orgEvent && (deltaY = orgEvent.wheelDelta), "wheelDeltaY" in orgEvent && (deltaY = orgEvent.wheelDeltaY), "wheelDeltaX" in orgEvent && (deltaX = -1 * orgEvent.wheelDeltaX), "axis" in orgEvent && (orgEvent.axis === orgEvent.HORIZONTAL_AXIS && (deltaX = -1 * deltaY, deltaY = 0)), delta = 0 === deltaY ? deltaX : deltaY, "deltaY" in orgEvent && (deltaY = -1 * 
        orgEvent.deltaY, delta = deltaY), "deltaX" in orgEvent && (deltaX = orgEvent.deltaX, 0 === deltaY && (delta = -1 * deltaX)), 0 !== deltaY || 0 !== deltaX) {
          if (1 === orgEvent.deltaMode) {
            var lineHeight = $.data(this, "mousewheel-line-height");
            delta *= lineHeight;
            deltaY *= lineHeight;
            deltaX *= lineHeight;
          } else {
            if (2 === orgEvent.deltaMode) {
              var pageHeight = $.data(this, "mousewheel-page-height");
              delta *= pageHeight;
              deltaY *= pageHeight;
              deltaX *= pageHeight;
            }
          }
          if (absDelta = Math.max(Math.abs(deltaY), Math.abs(deltaX)), (!lowestDelta || lowestDelta > absDelta) && (lowestDelta = absDelta, shouldAdjustOldDeltas(orgEvent, absDelta) && (lowestDelta /= 40)), shouldAdjustOldDeltas(orgEvent, absDelta) && (delta /= 40, deltaX /= 40, deltaY /= 40), delta = Math[delta >= 1 ? "floor" : "ceil"](delta / lowestDelta), deltaX = Math[deltaX >= 1 ? "floor" : "ceil"](deltaX / lowestDelta), deltaY = Math[deltaY >= 1 ? "floor" : "ceil"](deltaY / lowestDelta), special.settings.normalizeOffset && 
          this.getBoundingClientRect) {
            var rect = this.getBoundingClientRect();
            /** @type {number} */
            x = event.clientX - rect.left;
            /** @type {number} */
            y = event.clientY - rect.top;
          }
          return event.deltaX = deltaX, event.deltaY = deltaY, event.deltaFactor = lowestDelta, event.offsetX = x, event.offsetY = y, event.deltaMode = 0, args.unshift(event, delta, deltaX, deltaY), to && clearTimeout(to), to = setTimeout(WAIT, 200), ($.event.dispatch || $.event.handle).apply(this, args);
        }
      }
      /**
       * @return {undefined}
       */
      function WAIT() {
        /** @type {null} */
        lowestDelta = null;
      }
      /**
       * @param {Event} orgEvent
       * @param {number} absDelta
       * @return {?}
       */
      function shouldAdjustOldDeltas(orgEvent, absDelta) {
        return special.settings.adjustOldDeltas && ("mousewheel" === orgEvent.type && absDelta % 120 === 0);
      }
      var to;
      var lowestDelta;
      /** @type {Array} */
      var toFix = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"];
      /** @type {Array} */
      var toBind = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"];
      /** @type {function (this:(Array.<T>|string|{length: number}), *=, *=): Array.<T>} */
      var __slice = Array.prototype.slice;
      if ($.event.fixHooks) {
        /** @type {number} */
        var i = toFix.length;
        for (;i;) {
          $.event.fixHooks[toFix[--i]] = $.event.mouseHooks;
        }
      }
      var special = $.event.special.mousewheel = {
        version : "3.1.12",
        /**
         * @return {undefined}
         */
        setup : function() {
          if (this.addEventListener) {
            /** @type {number} */
            var i = toBind.length;
            for (;i;) {
              this.addEventListener(toBind[--i], handler, false);
            }
          } else {
            /** @type {function (Object): ?} */
            this.onmousewheel = handler;
          }
          $.data(this, "mousewheel-line-height", special.getLineHeight(this));
          $.data(this, "mousewheel-page-height", special.getPageHeight(this));
        },
        /**
         * @return {undefined}
         */
        teardown : function() {
          if (this.removeEventListener) {
            /** @type {number} */
            var i = toBind.length;
            for (;i;) {
              this.removeEventListener(toBind[--i], handler, false);
            }
          } else {
            /** @type {null} */
            this.onmousewheel = null;
          }
          $.removeData(this, "mousewheel-line-height");
          $.removeData(this, "mousewheel-page-height");
        },
        /**
         * @param {?} elem
         * @return {?}
         */
        getLineHeight : function(elem) {
          var parent = $(elem);
          var elm = parent["offsetParent" in $.fn ? "offsetParent" : "parent"]();
          return elm.length || (elm = $("body")), parseInt(elm.css("fontSize"), 10) || (parseInt(parent.css("fontSize"), 10) || 16);
        },
        /**
         * @param {?} element
         * @return {?}
         */
        getPageHeight : function(element) {
          return $(element).height();
        },
        settings : {
          adjustOldDeltas : true,
          normalizeOffset : true
        }
      };
      $.fn.extend({
        /**
         * @param {string} cycle
         * @return {?}
         */
        mousewheel : function(cycle) {
          return cycle ? this.bind("mousewheel", cycle) : this.trigger("mousewheel");
        },
        /**
         * @param {string} fn
         * @return {?}
         */
        unmousewheel : function(fn) {
          return this.unbind("mousewheel", fn);
        }
      });
    }), context.define("jquery.select2", ["jquery", "jquery-mousewheel", "./select2/core", "./select2/defaults"], function($, dataAndEvents, Flow, defaults) {
      if (null == $.fn.select2) {
        /** @type {Array} */
        var events = ["open", "close", "destroy"];
        /**
         * @param {Object} arg
         * @return {?}
         */
        $.fn.select2 = function(arg) {
          if (arg = arg || {}, "object" == typeof arg) {
            return this.each(function() {
              var opts = $.extend(true, {}, arg);
              new Flow($(this), opts);
            }), this;
          }
          if ("string" == typeof arg) {
            var value;
            return this.each(function() {
              var el = $(this).data("select2");
              if (null == el) {
                if (window.console) {
                  if (console.error) {
                    console.error("The select2('" + arg + "') method was called on an element that is not using Select2.");
                  }
                }
              }
              /** @type {Array.<?>} */
              var args = Array.prototype.slice.call(arguments, 1);
              value = el[arg].apply(el, args);
            }), $.inArray(arg, events) > -1 ? this : value;
          }
          throw new Error("Invalid arguments for Select2: " + arg);
        };
      }
      return null == $.fn.select2.defaults && ($.fn.select2.defaults = defaults), Flow;
    }), {
      define : context.define,
      require : context.require
    };
  }();
  var e = c.require("jquery.select2");
  return lab.fn.select2.amd = c, e;
}), function(callback) {
  if ("function" == typeof define && define.amd) {
    define(["jquery"], function(jQuery) {
      callback(jQuery, document, window, navigator);
    });
  } else {
    callback(jQuery, document, window, navigator);
  }
}(function($, o, win, navigator, dataAndEvents) {
  /** @type {number} */
  var f = 0;
  var g = function() {
    var ua = navigator.userAgent;
    /** @type {RegExp} */
    var regexp = /msie\s\d+/i;
    return 0 < ua.search(regexp) && ((ua = regexp.exec(ua).toString(), ua = ua.split(" ")[1], 9 > ua) && ($("html").addClass("lt-ie9"), true));
  }();
  if (!Function.prototype.bind) {
    /**
     * @param {(Object|null|undefined)} type
     * @return {Function}
     */
    Function.prototype.bind = function(type) {
      /** @type {Function} */
      var b = this;
      /** @type {function (this:(Array.<T>|string|{length: number}), *=, *=): Array.<T>} */
      var __slice = [].slice;
      if ("function" != typeof b) {
        throw new TypeError;
      }
      /** @type {Array.<?>} */
      var args = __slice.call(arguments, 1);
      /**
       * @return {?}
       */
      var e = function() {
        if (this instanceof e) {
          /**
           * @return {undefined}
           */
          var a = function() {
          };
          a.prototype = b.prototype;
          a = new a;
          var result = b.apply(a, args.concat(__slice.call(arguments)));
          return Object(result) === result ? result : a;
        }
        return b.apply(type, args.concat(__slice.call(arguments)));
      };
      return e;
    };
  }
  if (!Array.prototype.indexOf) {
    /**
     * @param {string} name
     * @param {number=} value
     * @return {number}
     * @template T
     */
    Array.prototype.indexOf = function(name, value) {
      var i;
      if (null == this) {
        throw new TypeError('"this" is null or not defined');
      }
      var array = Object(this);
      /** @type {number} */
      var length = array.length >>> 0;
      if (0 === length) {
        return-1;
      }
      if (i = +value || 0, 1 / 0 === Math.abs(i) && (i = 0), i >= length) {
        return-1;
      }
      /** @type {number} */
      i = Math.max(0 <= i ? i : length - Math.abs(i), 0);
      for (;i < length;) {
        if (i in array && array[i] === name) {
          return i;
        }
        i++;
      }
      return-1;
    };
  }
  /**
   * @param {Object} classes
   * @param {Function} attributes
   * @param {Object} options
   * @return {undefined}
   */
  var init = function(classes, attributes, options) {
    /** @type {string} */
    this.VERSION = "2.1.4";
    /** @type {Object} */
    this.input = classes;
    /** @type {Object} */
    this.plugin_count = options;
    /** @type {number} */
    this.old_to = this.old_from = this.update_tm = this.calc_count = this.current_plugin = 0;
    /** @type {null} */
    this.raf_id = this.old_min_interval = null;
    /** @type {boolean} */
    this.is_update = this.is_key = this.no_diapason = this.force_redraw = this.dragging = false;
    /** @type {boolean} */
    this.is_start = true;
    /** @type {boolean} */
    this.is_click = this.is_resize = this.is_active = this.is_finish = false;
    this.$cache = {
      win : $(win),
      body : $(o.body),
      input : $(classes),
      cont : null,
      rs : null,
      min : null,
      max : null,
      from : null,
      to : null,
      single : null,
      bar : null,
      line : null,
      s_single : null,
      s_from : null,
      s_to : null,
      shad_single : null,
      shad_from : null,
      shad_to : null,
      edge : null,
      grid : null,
      grid_labels : []
    };
    this.coords = {
      x_gap : 0,
      x_pointer : 0,
      w_rs : 0,
      w_rs_old : 0,
      w_handle : 0,
      p_gap : 0,
      p_gap_left : 0,
      p_gap_right : 0,
      p_step : 0,
      p_pointer : 0,
      p_handle : 0,
      p_single_fake : 0,
      p_single_real : 0,
      p_from_fake : 0,
      p_from_real : 0,
      p_to_fake : 0,
      p_to_real : 0,
      p_bar_x : 0,
      p_bar_w : 0,
      grid_gap : 0,
      big_num : 0,
      big : [],
      big_w : [],
      big_p : [],
      big_x : []
    };
    this.labels = {
      w_min : 0,
      w_max : 0,
      w_from : 0,
      w_to : 0,
      w_single : 0,
      p_min : 0,
      p_max : 0,
      p_from_fake : 0,
      p_from_left : 0,
      p_to_fake : 0,
      p_to_left : 0,
      p_single_fake : 0,
      p_single_left : 0
    };
    var input = this.$cache.input;
    classes = input.prop("value");
    var p;
    options = {
      type : "single",
      min : 10,
      max : 100,
      from : null,
      to : null,
      step : 1,
      min_interval : 0,
      max_interval : 0,
      drag_interval : false,
      values : [],
      p_values : [],
      from_fixed : false,
      from_min : null,
      from_max : null,
      from_shadow : false,
      to_fixed : false,
      to_min : null,
      to_max : null,
      to_shadow : false,
      prettify_enabled : true,
      prettify_separator : " ",
      prettify : null,
      force_edges : false,
      keyboard : false,
      keyboard_step : 5,
      grid : false,
      grid_margin : true,
      grid_num : 4,
      grid_snap : false,
      hide_min_max : false,
      hide_from_to : false,
      prefix : "",
      postfix : "",
      max_postfix : "",
      decorate_both : true,
      values_separator : " \u2014 ",
      input_values_separator : ";",
      disable : false,
      onStart : null,
      onChange : null,
      onFinish : null,
      onUpdate : null
    };
    input = {
      type : input.data("type"),
      min : input.data("min"),
      max : input.data("max"),
      from : input.data("from"),
      to : input.data("to"),
      step : input.data("step"),
      min_interval : input.data("minInterval"),
      max_interval : input.data("maxInterval"),
      drag_interval : input.data("dragInterval"),
      values : input.data("values"),
      from_fixed : input.data("fromFixed"),
      from_min : input.data("fromMin"),
      from_max : input.data("fromMax"),
      from_shadow : input.data("fromShadow"),
      to_fixed : input.data("toFixed"),
      to_min : input.data("toMin"),
      to_max : input.data("toMax"),
      to_shadow : input.data("toShadow"),
      prettify_enabled : input.data("prettifyEnabled"),
      prettify_separator : input.data("prettifySeparator"),
      force_edges : input.data("forceEdges"),
      keyboard : input.data("keyboard"),
      keyboard_step : input.data("keyboardStep"),
      grid : input.data("grid"),
      grid_margin : input.data("gridMargin"),
      grid_num : input.data("gridNum"),
      grid_snap : input.data("gridSnap"),
      hide_min_max : input.data("hideMinMax"),
      hide_from_to : input.data("hideFromTo"),
      prefix : input.data("prefix"),
      postfix : input.data("postfix"),
      max_postfix : input.data("maxPostfix"),
      decorate_both : input.data("decorateBoth"),
      values_separator : input.data("valuesSeparator"),
      input_values_separator : input.data("inputValuesSeparator"),
      disable : input.data("disable")
    };
    input.values = input.values && input.values.split(",");
    for (p in input) {
      if (input.hasOwnProperty(p)) {
        if (!input[p]) {
          if (!(0 === input[p])) {
            delete input[p];
          }
        }
      }
    }
    if (classes) {
      classes = classes.split(input.input_values_separator || (attributes.input_values_separator || ";"));
      if (classes[0]) {
        if (classes[0] == +classes[0]) {
          /** @type {number} */
          classes[0] = +classes[0];
        }
      }
      if (classes[1]) {
        if (classes[1] == +classes[1]) {
          /** @type {number} */
          classes[1] = +classes[1];
        }
      }
      if (attributes && (attributes.values && attributes.values.length)) {
        options.from = classes[0] && attributes.values.indexOf(classes[0]);
        options.to = classes[1] && attributes.values.indexOf(classes[1]);
      } else {
        options.from = classes[0] && +classes[0];
        options.to = classes[1] && +classes[1];
      }
    }
    $.extend(options, attributes);
    $.extend(options, input);
    /** @type {Object} */
    this.options = options;
    this.validate();
    this.result = {
      input : this.$cache.input,
      slider : null,
      min : this.options.min,
      max : this.options.max,
      from : this.options.from,
      from_percent : 0,
      from_value : null,
      to : this.options.to,
      to_percent : 0,
      to_value : null
    };
    this.init();
  };
  init.prototype = {
    /**
     * @param {boolean} dataAndEvents
     * @return {undefined}
     */
    init : function(dataAndEvents) {
      /** @type {boolean} */
      this.no_diapason = false;
      this.coords.p_step = this.convertToPercent(this.options.step, true);
      /** @type {string} */
      this.target = "base";
      this.toggleInput();
      this.append();
      this.setMinMax();
      if (dataAndEvents) {
        /** @type {boolean} */
        this.force_redraw = true;
        this.calc(true);
        this.callOnUpdate();
      } else {
        /** @type {boolean} */
        this.force_redraw = true;
        this.calc(true);
        this.callOnStart();
      }
      this.updateScene();
    },
    /**
     * @return {undefined}
     */
    append : function() {
      this.$cache.input.before('<span class="irs js-irs-' + this.plugin_count + '"></span>');
      this.$cache.input.prop("readonly", true);
      this.$cache.cont = this.$cache.input.prev();
      this.result.slider = this.$cache.cont;
      this.$cache.cont.html('<span class="irs"><span class="irs-line" tabindex="-1"><span class="irs-line-left"></span><span class="irs-line-mid"></span><span class="irs-line-right"></span></span><span class="irs-min">0</span><span class="irs-max">1</span><span class="irs-from">0</span><span class="irs-to">0</span><span class="irs-single">0</span></span><span class="irs-grid"></span><span class="irs-bar"></span>');
      this.$cache.rs = this.$cache.cont.find(".irs");
      this.$cache.min = this.$cache.cont.find(".irs-min");
      this.$cache.max = this.$cache.cont.find(".irs-max");
      this.$cache.from = this.$cache.cont.find(".irs-from");
      this.$cache.to = this.$cache.cont.find(".irs-to");
      this.$cache.single = this.$cache.cont.find(".irs-single");
      this.$cache.bar = this.$cache.cont.find(".irs-bar");
      this.$cache.line = this.$cache.cont.find(".irs-line");
      this.$cache.grid = this.$cache.cont.find(".irs-grid");
      if ("single" === this.options.type) {
        this.$cache.cont.append('<span class="irs-bar-edge"></span><span class="irs-shadow shadow-single"></span><span class="irs-slider single"></span>');
        this.$cache.edge = this.$cache.cont.find(".irs-bar-edge");
        this.$cache.s_single = this.$cache.cont.find(".single");
        /** @type {string} */
        this.$cache.from[0].style.visibility = "hidden";
        /** @type {string} */
        this.$cache.to[0].style.visibility = "hidden";
        this.$cache.shad_single = this.$cache.cont.find(".shadow-single");
      } else {
        this.$cache.cont.append('<span class="irs-shadow shadow-from"></span><span class="irs-shadow shadow-to"></span><span class="irs-slider from"></span><span class="irs-slider to"></span>');
        this.$cache.s_from = this.$cache.cont.find(".from");
        this.$cache.s_to = this.$cache.cont.find(".to");
        this.$cache.shad_from = this.$cache.cont.find(".shadow-from");
        this.$cache.shad_to = this.$cache.cont.find(".shadow-to");
        this.setTopHandler();
      }
      if (this.options.hide_from_to) {
        /** @type {string} */
        this.$cache.from[0].style.display = "none";
        /** @type {string} */
        this.$cache.to[0].style.display = "none";
        /** @type {string} */
        this.$cache.single[0].style.display = "none";
      }
      this.appendGrid();
      if (this.options.disable) {
        this.appendDisableMask();
        /** @type {boolean} */
        this.$cache.input[0].disabled = true;
      } else {
        this.$cache.cont.removeClass("irs-disabled");
        /** @type {boolean} */
        this.$cache.input[0].disabled = false;
        this.bindEvents();
      }
      if (this.options.drag_interval) {
        /** @type {string} */
        this.$cache.bar[0].style.cursor = "ew-resize";
      }
    },
    /**
     * @return {undefined}
     */
    setTopHandler : function() {
      var b = this.options.max;
      var a = this.options.to;
      if (this.options.from > this.options.min && a === b) {
        this.$cache.s_from.addClass("type_last");
      } else {
        if (a < b) {
          this.$cache.s_to.addClass("type_last");
        }
      }
    },
    /**
     * @param {Object} deepDataAndEvents
     * @return {undefined}
     */
    changeLevel : function(deepDataAndEvents) {
      switch(deepDataAndEvents) {
        case "single":
          this.coords.p_gap = this.toFixed(this.coords.p_pointer - this.coords.p_single_fake);
          break;
        case "from":
          this.coords.p_gap = this.toFixed(this.coords.p_pointer - this.coords.p_from_fake);
          this.$cache.s_from.addClass("state_hover");
          this.$cache.s_from.addClass("type_last");
          this.$cache.s_to.removeClass("type_last");
          break;
        case "to":
          this.coords.p_gap = this.toFixed(this.coords.p_pointer - this.coords.p_to_fake);
          this.$cache.s_to.addClass("state_hover");
          this.$cache.s_to.addClass("type_last");
          this.$cache.s_from.removeClass("type_last");
          break;
        case "both":
          this.coords.p_gap_left = this.toFixed(this.coords.p_pointer - this.coords.p_from_fake);
          this.coords.p_gap_right = this.toFixed(this.coords.p_to_fake - this.coords.p_pointer);
          this.$cache.s_to.removeClass("type_last");
          this.$cache.s_from.removeClass("type_last");
      }
    },
    /**
     * @return {undefined}
     */
    appendDisableMask : function() {
      this.$cache.cont.append('<span class="irs-disable-mask"></span>');
      this.$cache.cont.addClass("irs-disabled");
    },
    /**
     * @return {undefined}
     */
    remove : function() {
      this.$cache.cont.remove();
      /** @type {null} */
      this.$cache.cont = null;
      this.$cache.line.off("keydown.irs_" + this.plugin_count);
      this.$cache.body.off("touchmove.irs_" + this.plugin_count);
      this.$cache.body.off("mousemove.irs_" + this.plugin_count);
      this.$cache.win.off("touchend.irs_" + this.plugin_count);
      this.$cache.win.off("mouseup.irs_" + this.plugin_count);
      if (g) {
        this.$cache.body.off("mouseup.irs_" + this.plugin_count);
        this.$cache.body.off("mouseleave.irs_" + this.plugin_count);
      }
      /** @type {Array} */
      this.$cache.grid_labels = [];
      /** @type {Array} */
      this.coords.big = [];
      /** @type {Array} */
      this.coords.big_w = [];
      /** @type {Array} */
      this.coords.big_p = [];
      /** @type {Array} */
      this.coords.big_x = [];
      cancelAnimationFrame(this.raf_id);
    },
    /**
     * @return {undefined}
     */
    bindEvents : function() {
      if (!this.no_diapason) {
        this.$cache.body.on("touchmove.irs_" + this.plugin_count, this.pointerMove.bind(this));
        this.$cache.body.on("mousemove.irs_" + this.plugin_count, this.pointerMove.bind(this));
        this.$cache.win.on("touchend.irs_" + this.plugin_count, this.pointerUp.bind(this));
        this.$cache.win.on("mouseup.irs_" + this.plugin_count, this.pointerUp.bind(this));
        this.$cache.line.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"));
        this.$cache.line.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"));
        if (this.options.drag_interval && "double" === this.options.type) {
          this.$cache.bar.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "both"));
          this.$cache.bar.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "both"));
        } else {
          this.$cache.bar.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"));
          this.$cache.bar.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"));
        }
        if ("single" === this.options.type) {
          this.$cache.single.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "single"));
          this.$cache.s_single.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "single"));
          this.$cache.shad_single.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"));
          this.$cache.single.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "single"));
          this.$cache.s_single.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "single"));
          this.$cache.edge.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"));
          this.$cache.shad_single.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"));
        } else {
          this.$cache.single.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, null));
          this.$cache.single.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, null));
          this.$cache.from.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "from"));
          this.$cache.s_from.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "from"));
          this.$cache.to.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "to"));
          this.$cache.s_to.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "to"));
          this.$cache.shad_from.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"));
          this.$cache.shad_to.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"));
          this.$cache.from.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "from"));
          this.$cache.s_from.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "from"));
          this.$cache.to.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "to"));
          this.$cache.s_to.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "to"));
          this.$cache.shad_from.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"));
          this.$cache.shad_to.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"));
        }
        if (this.options.keyboard) {
          this.$cache.line.on("keydown.irs_" + this.plugin_count, this.key.bind(this, "keyboard"));
        }
        if (g) {
          this.$cache.body.on("mouseup.irs_" + this.plugin_count, this.pointerUp.bind(this));
          this.$cache.body.on("mouseleave.irs_" + this.plugin_count, this.pointerUp.bind(this));
        }
      }
    },
    /**
     * @param {Object} e
     * @return {undefined}
     */
    pointerMove : function(e) {
      if (this.dragging) {
        /** @type {number} */
        this.coords.x_pointer = (e.pageX || e.originalEvent.touches && e.originalEvent.touches[0].pageX) - this.coords.x_gap;
        this.calc();
      }
    },
    /**
     * @param {Event} event
     * @return {undefined}
     */
    pointerUp : function(event) {
      if (this.current_plugin === this.plugin_count) {
        if (this.is_active) {
          /** @type {boolean} */
          this.is_active = false;
          this.$cache.cont.find(".state_hover").removeClass("state_hover");
          /** @type {boolean} */
          this.force_redraw = true;
          if (g) {
            $("*").prop("unselectable", false);
          }
          this.updateScene();
          this.restoreOriginalMinInterval();
          if ($.contains(this.$cache.cont[0], event.target) || this.dragging) {
            /** @type {boolean} */
            this.is_finish = true;
            this.callOnFinish();
          }
          /** @type {boolean} */
          this.dragging = false;
        }
      }
    },
    /**
     * @param {Object} deepDataAndEvents
     * @param {Object} e
     * @return {undefined}
     */
    pointerDown : function(deepDataAndEvents, e) {
      e.preventDefault();
      var coords = e.pageX || e.originalEvent.touches && e.originalEvent.touches[0].pageX;
      if (2 !== e.button) {
        if ("both" === deepDataAndEvents) {
          this.setTempMinInterval();
        }
        if (!deepDataAndEvents) {
          deepDataAndEvents = this.target;
        }
        this.current_plugin = this.plugin_count;
        /** @type {Object} */
        this.target = deepDataAndEvents;
        /** @type {boolean} */
        this.dragging = this.is_active = true;
        this.coords.x_gap = this.$cache.rs.offset().left;
        /** @type {number} */
        this.coords.x_pointer = coords - this.coords.x_gap;
        this.calcPointerPercent();
        this.changeLevel(deepDataAndEvents);
        if (g) {
          $("*").prop("unselectable", true);
        }
        this.$cache.line.trigger("focus");
        this.updateScene();
      }
    },
    /**
     * @param {Object} opt_target
     * @param {Object} e
     * @return {undefined}
     */
    pointerClick : function(opt_target, e) {
      e.preventDefault();
      var score = e.pageX || e.originalEvent.touches && e.originalEvent.touches[0].pageX;
      if (2 !== e.button) {
        this.current_plugin = this.plugin_count;
        /** @type {Object} */
        this.target = opt_target;
        /** @type {boolean} */
        this.is_click = true;
        this.coords.x_gap = this.$cache.rs.offset().left;
        /** @type {number} */
        this.coords.x_pointer = +(score - this.coords.x_gap).toFixed();
        /** @type {boolean} */
        this.force_redraw = true;
        this.calc();
        this.$cache.line.trigger("focus");
      }
    },
    /**
     * @param {?} index
     * @param {Event} e
     * @return {?}
     */
    key : function(index, e) {
      if (!(this.current_plugin !== this.plugin_count || (e.altKey || (e.ctrlKey || (e.shiftKey || e.metaKey))))) {
        switch(e.which) {
          case 83:
          ;
          case 65:
          ;
          case 40:
          ;
          case 37:
            e.preventDefault();
            this.moveByKey(false);
            break;
          case 87:
          ;
          case 68:
          ;
          case 38:
          ;
          case 39:
            e.preventDefault();
            this.moveByKey(true);
        }
        return true;
      }
    },
    /**
     * @param {boolean} e
     * @return {undefined}
     */
    moveByKey : function(e) {
      var c = this.coords.p_pointer;
      c = e ? c + this.options.keyboard_step : c - this.options.keyboard_step;
      this.coords.x_pointer = this.toFixed(this.coords.w_rs / 100 * c);
      /** @type {boolean} */
      this.is_key = true;
      this.calc();
    },
    /**
     * @return {undefined}
     */
    setMinMax : function() {
      if (this.options) {
        if (this.options.hide_min_max) {
          /** @type {string} */
          this.$cache.min[0].style.display = "none";
          /** @type {string} */
          this.$cache.max[0].style.display = "none";
        } else {
          if (this.options.values.length) {
            this.$cache.min.html(this.decorate(this.options.p_values[this.options.min]));
            this.$cache.max.html(this.decorate(this.options.p_values[this.options.max]));
          } else {
            this.$cache.min.html(this.decorate(this._prettify(this.options.min), this.options.min));
            this.$cache.max.html(this.decorate(this._prettify(this.options.max), this.options.max));
          }
          this.labels.w_min = this.$cache.min.outerWidth(false);
          this.labels.w_max = this.$cache.max.outerWidth(false);
        }
      }
    },
    /**
     * @return {undefined}
     */
    setTempMinInterval : function() {
      /** @type {number} */
      var val = this.result.to - this.result.from;
      if (null === this.old_min_interval) {
        this.old_min_interval = this.options.min_interval;
      }
      /** @type {number} */
      this.options.min_interval = val;
    },
    /**
     * @return {undefined}
     */
    restoreOriginalMinInterval : function() {
      if (null !== this.old_min_interval) {
        this.options.min_interval = this.old_min_interval;
        /** @type {null} */
        this.old_min_interval = null;
      }
    },
    /**
     * @param {number} deepDataAndEvents
     * @return {undefined}
     */
    calc : function(deepDataAndEvents) {
      if (this.options && (this.calc_count++, (10 === this.calc_count || deepDataAndEvents) && (this.calc_count = 0, this.coords.w_rs = this.$cache.rs.outerWidth(false), this.calcHandlePercent()), this.coords.w_rs)) {
        switch(this.calcPointerPercent(), deepDataAndEvents = this.getHandleX(), "click" === this.target && (this.coords.p_gap = this.coords.p_handle / 2, deepDataAndEvents = this.getHandleX(), this.target = this.options.drag_interval ? "both_one" : this.chooseHandle(deepDataAndEvents)), this.target) {
          case "base":
            /** @type {number} */
            var pdataOld = (this.options.max - this.options.min) / 100;
            /** @type {number} */
            deepDataAndEvents = (this.result.from - this.options.min) / pdataOld;
            /** @type {number} */
            pdataOld = (this.result.to - this.options.min) / pdataOld;
            this.coords.p_single_real = this.toFixed(deepDataAndEvents);
            this.coords.p_from_real = this.toFixed(deepDataAndEvents);
            this.coords.p_to_real = this.toFixed(pdataOld);
            this.coords.p_single_real = this.checkDiapason(this.coords.p_single_real, this.options.from_min, this.options.from_max);
            this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max);
            this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max);
            this.coords.p_single_fake = this.convertToFakePercent(this.coords.p_single_real);
            this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real);
            this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real);
            /** @type {null} */
            this.target = null;
            break;
          case "single":
            if (this.options.from_fixed) {
              break;
            }
            this.coords.p_single_real = this.convertToRealPercent(deepDataAndEvents);
            this.coords.p_single_real = this.calcWithStep(this.coords.p_single_real);
            this.coords.p_single_real = this.checkDiapason(this.coords.p_single_real, this.options.from_min, this.options.from_max);
            this.coords.p_single_fake = this.convertToFakePercent(this.coords.p_single_real);
            break;
          case "from":
            if (this.options.from_fixed) {
              break;
            }
            this.coords.p_from_real = this.convertToRealPercent(deepDataAndEvents);
            this.coords.p_from_real = this.calcWithStep(this.coords.p_from_real);
            if (this.coords.p_from_real > this.coords.p_to_real) {
              this.coords.p_from_real = this.coords.p_to_real;
            }
            this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max);
            this.coords.p_from_real = this.checkMinInterval(this.coords.p_from_real, this.coords.p_to_real, "from");
            this.coords.p_from_real = this.checkMaxInterval(this.coords.p_from_real, this.coords.p_to_real, "from");
            this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real);
            break;
          case "to":
            if (this.options.to_fixed) {
              break;
            }
            this.coords.p_to_real = this.convertToRealPercent(deepDataAndEvents);
            this.coords.p_to_real = this.calcWithStep(this.coords.p_to_real);
            if (this.coords.p_to_real < this.coords.p_from_real) {
              this.coords.p_to_real = this.coords.p_from_real;
            }
            this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max);
            this.coords.p_to_real = this.checkMinInterval(this.coords.p_to_real, this.coords.p_from_real, "to");
            this.coords.p_to_real = this.checkMaxInterval(this.coords.p_to_real, this.coords.p_from_real, "to");
            this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real);
            break;
          case "both":
            if (this.options.from_fixed || this.options.to_fixed) {
              break;
            }
            deepDataAndEvents = this.toFixed(deepDataAndEvents + 0.1 * this.coords.p_handle);
            /** @type {number} */
            this.coords.p_from_real = this.convertToRealPercent(deepDataAndEvents) - this.coords.p_gap_left;
            this.coords.p_from_real = this.calcWithStep(this.coords.p_from_real);
            this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max);
            this.coords.p_from_real = this.checkMinInterval(this.coords.p_from_real, this.coords.p_to_real, "from");
            this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real);
            this.coords.p_to_real = this.convertToRealPercent(deepDataAndEvents) + this.coords.p_gap_right;
            this.coords.p_to_real = this.calcWithStep(this.coords.p_to_real);
            this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max);
            this.coords.p_to_real = this.checkMinInterval(this.coords.p_to_real, this.coords.p_from_real, "to");
            this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real);
            break;
          case "both_one":
            if (!this.options.from_fixed && !this.options.to_fixed) {
              var right = this.convertToRealPercent(deepDataAndEvents);
              /** @type {number} */
              deepDataAndEvents = this.result.to_percent - this.result.from_percent;
              /** @type {number} */
              var left = deepDataAndEvents / 2;
              /** @type {number} */
              pdataOld = right - left;
              right = right + left;
              if (0 > pdataOld) {
                /** @type {number} */
                pdataOld = 0;
                /** @type {number} */
                right = pdataOld + deepDataAndEvents;
              }
              if (100 < right) {
                /** @type {number} */
                right = 100;
                /** @type {number} */
                pdataOld = right - deepDataAndEvents;
              }
              this.coords.p_from_real = this.calcWithStep(pdataOld);
              this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max);
              this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real);
              this.coords.p_to_real = this.calcWithStep(right);
              this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max);
              this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real);
            }
          ;
        }
        if ("single" === this.options.type) {
          /** @type {number} */
          this.coords.p_bar_x = this.coords.p_handle / 2;
          this.coords.p_bar_w = this.coords.p_single_fake;
          this.result.from_percent = this.coords.p_single_real;
          this.result.from = this.convertToValue(this.coords.p_single_real);
          if (this.options.values.length) {
            this.result.from_value = this.options.values[this.result.from];
          }
        } else {
          this.coords.p_bar_x = this.toFixed(this.coords.p_from_fake + this.coords.p_handle / 2);
          this.coords.p_bar_w = this.toFixed(this.coords.p_to_fake - this.coords.p_from_fake);
          this.result.from_percent = this.coords.p_from_real;
          this.result.from = this.convertToValue(this.coords.p_from_real);
          this.result.to_percent = this.coords.p_to_real;
          this.result.to = this.convertToValue(this.coords.p_to_real);
          if (this.options.values.length) {
            this.result.from_value = this.options.values[this.result.from];
            this.result.to_value = this.options.values[this.result.to];
          }
        }
        this.calcMinMax();
        this.calcLabels();
      }
    },
    /**
     * @return {undefined}
     */
    calcPointerPercent : function() {
      if (this.coords.w_rs) {
        if (0 > this.coords.x_pointer || isNaN(this.coords.x_pointer)) {
          /** @type {number} */
          this.coords.x_pointer = 0;
        } else {
          if (this.coords.x_pointer > this.coords.w_rs) {
            this.coords.x_pointer = this.coords.w_rs;
          }
        }
        this.coords.p_pointer = this.toFixed(this.coords.x_pointer / this.coords.w_rs * 100);
      } else {
        /** @type {number} */
        this.coords.p_pointer = 0;
      }
    },
    /**
     * @param {number} deepDataAndEvents
     * @return {?}
     */
    convertToRealPercent : function(deepDataAndEvents) {
      return deepDataAndEvents / (100 - this.coords.p_handle) * 100;
    },
    /**
     * @param {?} dataAndEvents
     * @return {?}
     */
    convertToFakePercent : function(dataAndEvents) {
      return dataAndEvents / 100 * (100 - this.coords.p_handle);
    },
    /**
     * @return {?}
     */
    getHandleX : function() {
      /** @type {number} */
      var fn = 100 - this.coords.p_handle;
      var bulk = this.toFixed(this.coords.p_pointer - this.coords.p_gap);
      return 0 > bulk ? bulk = 0 : bulk > fn && (bulk = fn), bulk;
    },
    /**
     * @return {undefined}
     */
    calcHandlePercent : function() {
      this.coords.w_handle = "single" === this.options.type ? this.$cache.s_single.outerWidth(false) : this.$cache.s_from.outerWidth(false);
      this.coords.p_handle = this.toFixed(this.coords.w_handle / this.coords.w_rs * 100);
    },
    /**
     * @param {number} deepDataAndEvents
     * @return {?}
     */
    chooseHandle : function(deepDataAndEvents) {
      return "single" === this.options.type ? "single" : deepDataAndEvents >= this.coords.p_from_real + (this.coords.p_to_real - this.coords.p_from_real) / 2 ? this.options.to_fixed ? "from" : "to" : this.options.from_fixed ? "to" : "from";
    },
    /**
     * @return {undefined}
     */
    calcMinMax : function() {
      if (this.coords.w_rs) {
        /** @type {number} */
        this.labels.p_min = this.labels.w_min / this.coords.w_rs * 100;
        /** @type {number} */
        this.labels.p_max = this.labels.w_max / this.coords.w_rs * 100;
      }
    },
    /**
     * @return {undefined}
     */
    calcLabels : function() {
      if (this.coords.w_rs) {
        if (!this.options.hide_from_to) {
          if ("single" === this.options.type) {
            this.labels.w_single = this.$cache.single.outerWidth(false);
            /** @type {number} */
            this.labels.p_single_fake = this.labels.w_single / this.coords.w_rs * 100;
            /** @type {number} */
            this.labels.p_single_left = this.coords.p_single_fake + this.coords.p_handle / 2 - this.labels.p_single_fake / 2;
          } else {
            this.labels.w_from = this.$cache.from.outerWidth(false);
            /** @type {number} */
            this.labels.p_from_fake = this.labels.w_from / this.coords.w_rs * 100;
            /** @type {number} */
            this.labels.p_from_left = this.coords.p_from_fake + this.coords.p_handle / 2 - this.labels.p_from_fake / 2;
            this.labels.p_from_left = this.toFixed(this.labels.p_from_left);
            this.labels.p_from_left = this.checkEdges(this.labels.p_from_left, this.labels.p_from_fake);
            this.labels.w_to = this.$cache.to.outerWidth(false);
            /** @type {number} */
            this.labels.p_to_fake = this.labels.w_to / this.coords.w_rs * 100;
            /** @type {number} */
            this.labels.p_to_left = this.coords.p_to_fake + this.coords.p_handle / 2 - this.labels.p_to_fake / 2;
            this.labels.p_to_left = this.toFixed(this.labels.p_to_left);
            this.labels.p_to_left = this.checkEdges(this.labels.p_to_left, this.labels.p_to_fake);
            this.labels.w_single = this.$cache.single.outerWidth(false);
            /** @type {number} */
            this.labels.p_single_fake = this.labels.w_single / this.coords.w_rs * 100;
            /** @type {number} */
            this.labels.p_single_left = (this.labels.p_from_left + this.labels.p_to_left + this.labels.p_to_fake) / 2 - this.labels.p_single_fake / 2;
            this.labels.p_single_left = this.toFixed(this.labels.p_single_left);
          }
          this.labels.p_single_left = this.checkEdges(this.labels.p_single_left, this.labels.p_single_fake);
        }
      }
    },
    /**
     * @return {undefined}
     */
    updateScene : function() {
      if (this.raf_id) {
        cancelAnimationFrame(this.raf_id);
        /** @type {null} */
        this.raf_id = null;
      }
      clearTimeout(this.update_tm);
      /** @type {null} */
      this.update_tm = null;
      if (this.options) {
        this.drawHandles();
        if (this.is_active) {
          /** @type {number} */
          this.raf_id = requestAnimationFrame(this.updateScene.bind(this));
        } else {
          /** @type {number} */
          this.update_tm = setTimeout(this.updateScene.bind(this), 300);
        }
      }
    },
    /**
     * @return {undefined}
     */
    drawHandles : function() {
      this.coords.w_rs = this.$cache.rs.outerWidth(false);
      if (this.coords.w_rs) {
        if (this.coords.w_rs !== this.coords.w_rs_old) {
          /** @type {string} */
          this.target = "base";
          /** @type {boolean} */
          this.is_resize = true;
        }
        if (this.coords.w_rs !== this.coords.w_rs_old || this.force_redraw) {
          this.setMinMax();
          this.calc(true);
          this.drawLabels();
          if (this.options.grid) {
            this.calcGridMargin();
            this.calcGridLabels();
          }
          /** @type {boolean} */
          this.force_redraw = true;
          this.coords.w_rs_old = this.coords.w_rs;
          this.drawShadow();
        }
        if (this.coords.w_rs) {
          if (this.dragging || (this.force_redraw || this.is_key)) {
            if (this.old_from !== this.result.from || (this.old_to !== this.result.to || (this.force_redraw || this.is_key))) {
              this.drawLabels();
              /** @type {string} */
              this.$cache.bar[0].style.left = this.coords.p_bar_x + "%";
              /** @type {string} */
              this.$cache.bar[0].style.width = this.coords.p_bar_w + "%";
              if ("single" === this.options.type) {
                /** @type {string} */
                this.$cache.s_single[0].style.left = this.coords.p_single_fake + "%";
                /** @type {string} */
                this.$cache.single[0].style.left = this.labels.p_single_left + "%";
                if (this.options.values.length) {
                  this.$cache.input.prop("value", this.result.from_value);
                } else {
                  this.$cache.input.prop("value", this.result.from);
                }
                this.$cache.input.data("from", this.result.from);
              } else {
                /** @type {string} */
                this.$cache.s_from[0].style.left = this.coords.p_from_fake + "%";
                /** @type {string} */
                this.$cache.s_to[0].style.left = this.coords.p_to_fake + "%";
                if (this.old_from !== this.result.from || this.force_redraw) {
                  /** @type {string} */
                  this.$cache.from[0].style.left = this.labels.p_from_left + "%";
                }
                if (this.old_to !== this.result.to || this.force_redraw) {
                  /** @type {string} */
                  this.$cache.to[0].style.left = this.labels.p_to_left + "%";
                }
                /** @type {string} */
                this.$cache.single[0].style.left = this.labels.p_single_left + "%";
                if (this.options.values.length) {
                  this.$cache.input.prop("value", this.result.from_value + this.options.input_values_separator + this.result.to_value);
                } else {
                  this.$cache.input.prop("value", this.result.from + this.options.input_values_separator + this.result.to);
                }
                this.$cache.input.data("from", this.result.from);
                this.$cache.input.data("to", this.result.to);
              }
              if (!(this.old_from === this.result.from && this.old_to === this.result.to)) {
                if (!this.is_start) {
                  this.$cache.input.trigger("change");
                }
              }
              this.old_from = this.result.from;
              this.old_to = this.result.to;
              if (!this.is_resize) {
                if (!this.is_update) {
                  if (!this.is_start) {
                    if (!this.is_finish) {
                      this.callOnChange();
                    }
                  }
                }
              }
              if (this.is_key || this.is_click) {
                /** @type {boolean} */
                this.is_click = this.is_key = false;
                this.callOnFinish();
              }
              /** @type {boolean} */
              this.is_finish = this.is_resize = this.is_update = false;
            }
            /** @type {boolean} */
            this.force_redraw = this.is_click = this.is_key = this.is_start = false;
          }
        }
      }
    },
    /**
     * @return {undefined}
     */
    drawLabels : function() {
      if (this.options) {
        var index;
        var i = this.options.values.length;
        var css = this.options.p_values;
        if (!this.options.hide_from_to) {
          if ("single" === this.options.type) {
            i = i ? this.decorate(css[this.result.from]) : this.decorate(this._prettify(this.result.from), this.result.from);
            this.$cache.single.html(i);
            this.calcLabels();
            /** @type {string} */
            this.$cache.min[0].style.visibility = this.labels.p_single_left < this.labels.p_min + 1 ? "hidden" : "visible";
            /** @type {string} */
            this.$cache.max[0].style.visibility = this.labels.p_single_left + this.labels.p_single_fake > 100 - this.labels.p_max - 1 ? "hidden" : "visible";
          } else {
            if (i) {
              if (this.options.decorate_both) {
                i = this.decorate(css[this.result.from]);
                i += this.options.values_separator;
                i += this.decorate(css[this.result.to]);
              } else {
                i = this.decorate(css[this.result.from] + this.options.values_separator + css[this.result.to]);
              }
              index = this.decorate(css[this.result.from]);
              css = this.decorate(css[this.result.to]);
            } else {
              if (this.options.decorate_both) {
                i = this.decorate(this._prettify(this.result.from), this.result.from);
                i += this.options.values_separator;
                i += this.decorate(this._prettify(this.result.to), this.result.to);
              } else {
                i = this.decorate(this._prettify(this.result.from) + this.options.values_separator + this._prettify(this.result.to), this.result.to);
              }
              index = this.decorate(this._prettify(this.result.from), this.result.from);
              css = this.decorate(this._prettify(this.result.to), this.result.to);
            }
            this.$cache.single.html(i);
            this.$cache.from.html(index);
            this.$cache.to.html(css);
            this.calcLabels();
            /** @type {number} */
            css = Math.min(this.labels.p_single_left, this.labels.p_from_left);
            i = this.labels.p_single_left + this.labels.p_single_fake;
            index = this.labels.p_to_left + this.labels.p_to_fake;
            /** @type {number} */
            var current = Math.max(i, index);
            if (this.labels.p_from_left + this.labels.p_from_fake >= this.labels.p_to_left) {
              /** @type {string} */
              this.$cache.from[0].style.visibility = "hidden";
              /** @type {string} */
              this.$cache.to[0].style.visibility = "hidden";
              /** @type {string} */
              this.$cache.single[0].style.visibility = "visible";
              if (this.result.from === this.result.to) {
                if ("from" === this.target) {
                  /** @type {string} */
                  this.$cache.from[0].style.visibility = "visible";
                } else {
                  if ("to" === this.target) {
                    /** @type {string} */
                    this.$cache.to[0].style.visibility = "visible";
                  } else {
                    if (!this.target) {
                      /** @type {string} */
                      this.$cache.from[0].style.visibility = "visible";
                    }
                  }
                }
                /** @type {string} */
                this.$cache.single[0].style.visibility = "hidden";
                current = index;
              } else {
                /** @type {string} */
                this.$cache.from[0].style.visibility = "hidden";
                /** @type {string} */
                this.$cache.to[0].style.visibility = "hidden";
                /** @type {string} */
                this.$cache.single[0].style.visibility = "visible";
                /** @type {number} */
                current = Math.max(i, index);
              }
            } else {
              /** @type {string} */
              this.$cache.from[0].style.visibility = "visible";
              /** @type {string} */
              this.$cache.to[0].style.visibility = "visible";
              /** @type {string} */
              this.$cache.single[0].style.visibility = "hidden";
            }
            /** @type {string} */
            this.$cache.min[0].style.visibility = css < this.labels.p_min + 1 ? "hidden" : "visible";
            /** @type {string} */
            this.$cache.max[0].style.visibility = current > 100 - this.labels.p_max - 1 ? "hidden" : "visible";
          }
        }
      }
    },
    /**
     * @return {undefined}
     */
    drawShadow : function() {
      var options = this.options;
      var $cache = this.$cache;
      /** @type {boolean} */
      var success = "number" == typeof options.from_min && !isNaN(options.from_min);
      /** @type {boolean} */
      var fail = "number" == typeof options.from_max && !isNaN(options.from_max);
      /** @type {boolean} */
      var convertToPercent = "number" == typeof options.to_min && !isNaN(options.to_min);
      /** @type {boolean} */
      var one = "number" == typeof options.to_max && !isNaN(options.to_max);
      if ("single" === options.type) {
        if (options.from_shadow && (success || fail)) {
          success = this.convertToPercent(success ? options.from_min : options.min);
          /** @type {number} */
          fail = this.convertToPercent(fail ? options.from_max : options.max) - success;
          success = this.toFixed(success - this.coords.p_handle / 100 * success);
          fail = this.toFixed(fail - this.coords.p_handle / 100 * fail);
          success += this.coords.p_handle / 2;
          /** @type {string} */
          $cache.shad_single[0].style.display = "block";
          /** @type {string} */
          $cache.shad_single[0].style.left = success + "%";
          /** @type {string} */
          $cache.shad_single[0].style.width = fail + "%";
        } else {
          /** @type {string} */
          $cache.shad_single[0].style.display = "none";
        }
      } else {
        if (options.from_shadow && (success || fail)) {
          success = this.convertToPercent(success ? options.from_min : options.min);
          /** @type {number} */
          fail = this.convertToPercent(fail ? options.from_max : options.max) - success;
          success = this.toFixed(success - this.coords.p_handle / 100 * success);
          fail = this.toFixed(fail - this.coords.p_handle / 100 * fail);
          success += this.coords.p_handle / 2;
          /** @type {string} */
          $cache.shad_from[0].style.display = "block";
          /** @type {string} */
          $cache.shad_from[0].style.left = success + "%";
          /** @type {string} */
          $cache.shad_from[0].style.width = fail + "%";
        } else {
          /** @type {string} */
          $cache.shad_from[0].style.display = "none";
        }
        if (options.to_shadow && (convertToPercent || one)) {
          convertToPercent = this.convertToPercent(convertToPercent ? options.to_min : options.min);
          /** @type {number} */
          options = this.convertToPercent(one ? options.to_max : options.max) - convertToPercent;
          convertToPercent = this.toFixed(convertToPercent - this.coords.p_handle / 100 * convertToPercent);
          options = this.toFixed(options - this.coords.p_handle / 100 * options);
          convertToPercent += this.coords.p_handle / 2;
          /** @type {string} */
          $cache.shad_to[0].style.display = "block";
          /** @type {string} */
          $cache.shad_to[0].style.left = convertToPercent + "%";
          /** @type {string} */
          $cache.shad_to[0].style.width = options + "%";
        } else {
          /** @type {string} */
          $cache.shad_to[0].style.display = "none";
        }
      }
    },
    /**
     * @return {undefined}
     */
    callOnStart : function() {
      if (this.options.onStart) {
        if ("function" == typeof this.options.onStart) {
          this.options.onStart(this.result);
        }
      }
    },
    /**
     * @return {undefined}
     */
    callOnChange : function() {
      if (this.options.onChange) {
        if ("function" == typeof this.options.onChange) {
          this.options.onChange(this.result);
        }
      }
    },
    /**
     * @return {undefined}
     */
    callOnFinish : function() {
      if (this.options.onFinish) {
        if ("function" == typeof this.options.onFinish) {
          this.options.onFinish(this.result);
        }
      }
    },
    /**
     * @return {undefined}
     */
    callOnUpdate : function() {
      if (this.options.onUpdate) {
        if ("function" == typeof this.options.onUpdate) {
          this.options.onUpdate(this.result);
        }
      }
    },
    /**
     * @return {undefined}
     */
    toggleInput : function() {
      this.$cache.input.toggleClass("irs-hidden-input");
    },
    /**
     * @param {number} value
     * @param {boolean} raw
     * @return {?}
     */
    convertToPercent : function(value, raw) {
      /** @type {number} */
      var toFixed = this.options.max - this.options.min;
      return toFixed ? this.toFixed((raw ? value : value - this.options.min) / (toFixed / 100)) : (this.no_diapason = true, 0);
    },
    /**
     * @param {number} n
     * @return {?}
     */
    convertToValue : function(n) {
      var height;
      var kMinHeight;
      var min = this.options.min;
      var max = this.options.max;
      var currentStyle = min.toString().split(".")[1];
      var codeSegments = max.toString().split(".")[1];
      /** @type {number} */
      var width = 0;
      /** @type {number} */
      var newValue = 0;
      return 0 === n ? this.options.min : 100 === n ? this.options.max : (currentStyle && (width = height = currentStyle.length), codeSegments && (width = kMinHeight = codeSegments.length), height && (kMinHeight && (width = height >= kMinHeight ? height : kMinHeight)), 0 > min && (newValue = Math.abs(min), min = +(min + newValue).toFixed(width), max = +(max + newValue).toFixed(width)), n = (max - min) / 100 * n + min, (min = this.options.step.toString().split(".")[1]) ? n = +n.toFixed(min.length) : 
      (n /= this.options.step, n *= this.options.step, n = +n.toFixed(0)), newValue && (n -= newValue), newValue = min ? +n.toFixed(min.length) : this.toFixed(n), newValue < this.options.min ? newValue = this.options.min : newValue > this.options.max && (newValue = this.options.max), newValue);
    },
    /**
     * @param {number} value
     * @return {?}
     */
    calcWithStep : function(value) {
      /** @type {number} */
      var udataCur = Math.round(value / this.coords.p_step) * this.coords.p_step;
      return 100 < udataCur && (udataCur = 100), 100 === value && (udataCur = 100), this.toFixed(udataCur);
    },
    /**
     * @param {number} i
     * @param {number} j
     * @param {string} to
     * @return {?}
     */
    checkMinInterval : function(i, j, to) {
      var options = this.options;
      return options.min_interval ? (i = this.convertToValue(i), j = this.convertToValue(j), "from" === to ? j - i < options.min_interval && (i = j - options.min_interval) : i - j < options.min_interval && (i = j + options.min_interval), this.convertToPercent(i)) : i;
    },
    /**
     * @param {number} i
     * @param {number} k
     * @param {string} to
     * @return {?}
     */
    checkMaxInterval : function(i, k, to) {
      var o = this.options;
      return o.max_interval ? (i = this.convertToValue(i), k = this.convertToValue(k), "from" === to ? k - i > o.max_interval && (i = k - o.max_interval) : i - k > o.max_interval && (i = k + o.max_interval), this.convertToPercent(i)) : i;
    },
    /**
     * @param {number} j
     * @param {number} number
     * @param {number} height
     * @return {?}
     */
    checkDiapason : function(j, number, height) {
      j = this.convertToValue(j);
      var o = this.options;
      return "number" != typeof number && (number = o.min), "number" != typeof height && (height = o.max), j < number && (j = number), j > height && (j = height), this.convertToPercent(j);
    },
    /**
     * @param {number} value
     * @return {?}
     */
    toFixed : function(value) {
      return value = value.toFixed(9), +value;
    },
    /**
     * @param {?} val
     * @return {?}
     */
    _prettify : function(val) {
      return this.options.prettify_enabled ? this.options.prettify && "function" == typeof this.options.prettify ? this.options.prettify(val) : this.prettify(val) : val;
    },
    /**
     * @param {?} data
     * @return {?}
     */
    prettify : function(data) {
      return data.toString().replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + this.options.prettify_separator);
    },
    /**
     * @param {number} s
     * @param {number} o
     * @return {?}
     */
    checkEdges : function(s, o) {
      return this.options.force_edges ? (0 > s ? s = 0 : s > 100 - o && (s = 100 - o), this.toFixed(s)) : this.toFixed(s);
    },
    /**
     * @return {undefined}
     */
    validate : function() {
      var value;
      var i;
      var options = this.options;
      var settings = this.result;
      var values = options.values;
      var valuesLen = values.length;
      if ("string" == typeof options.min && (options.min = +options.min), "string" == typeof options.max && (options.max = +options.max), "string" == typeof options.from && (options.from = +options.from), "string" == typeof options.to && (options.to = +options.to), "string" == typeof options.step && (options.step = +options.step), "string" == typeof options.from_min && (options.from_min = +options.from_min), "string" == typeof options.from_max && (options.from_max = +options.from_max), "string" == 
      typeof options.to_min && (options.to_min = +options.to_min), "string" == typeof options.to_max && (options.to_max = +options.to_max), "string" == typeof options.keyboard_step && (options.keyboard_step = +options.keyboard_step), "string" == typeof options.grid_num && (options.grid_num = +options.grid_num), options.max < options.min && (options.max = options.min), valuesLen) {
        /** @type {Array} */
        options.p_values = [];
        /** @type {number} */
        options.min = 0;
        /** @type {number} */
        options.max = valuesLen - 1;
        /** @type {number} */
        options.step = 1;
        /** @type {number} */
        options.grid_num = options.max;
        /** @type {boolean} */
        options.grid_snap = true;
        /** @type {number} */
        i = 0;
        for (;i < valuesLen;i++) {
          /** @type {number} */
          value = +values[i];
          if (isNaN(value)) {
            value = values[i];
          } else {
            /** @type {number} */
            values[i] = value;
            value = this._prettify(value);
          }
          options.p_values.push(value);
        }
      }
      if ("number" != typeof options.from || isNaN(options.from)) {
        options.from = options.min;
      }
      if ("number" != typeof options.to || isNaN(options.from)) {
        options.to = options.max;
      }
      if ("single" === options.type) {
        if (options.from < options.min) {
          options.from = options.min;
        }
        if (options.from > options.max) {
          options.from = options.max;
        }
      } else {
        if (options.from < options.min || options.from > options.max) {
          options.from = options.min;
        }
        if (options.to > options.max || options.to < options.min) {
          options.to = options.max;
        }
        if (options.from > options.to) {
          options.from = options.to;
        }
      }
      if ("number" != typeof options.step || (isNaN(options.step) || (!options.step || 0 > options.step))) {
        /** @type {number} */
        options.step = 1;
      }
      if ("number" != typeof options.keyboard_step || (isNaN(options.keyboard_step) || (!options.keyboard_step || 0 > options.keyboard_step))) {
        /** @type {number} */
        options.keyboard_step = 5;
      }
      if ("number" == typeof options.from_min) {
        if (options.from < options.from_min) {
          /** @type {number} */
          options.from = options.from_min;
        }
      }
      if ("number" == typeof options.from_max) {
        if (options.from > options.from_max) {
          /** @type {number} */
          options.from = options.from_max;
        }
      }
      if ("number" == typeof options.to_min) {
        if (options.to < options.to_min) {
          /** @type {number} */
          options.to = options.to_min;
        }
      }
      if ("number" == typeof options.to_max) {
        if (options.from > options.to_max) {
          /** @type {number} */
          options.to = options.to_max;
        }
      }
      if (settings) {
        if (settings.min !== options.min) {
          settings.min = options.min;
        }
        if (settings.max !== options.max) {
          settings.max = options.max;
        }
        if (settings.from < settings.min || settings.from > settings.max) {
          settings.from = options.from;
        }
        if (settings.to < settings.min || settings.to > settings.max) {
          settings.to = options.to;
        }
      }
      if ("number" != typeof options.min_interval || (isNaN(options.min_interval) || (!options.min_interval || 0 > options.min_interval))) {
        /** @type {number} */
        options.min_interval = 0;
      }
      if ("number" != typeof options.max_interval || (isNaN(options.max_interval) || (!options.max_interval || 0 > options.max_interval))) {
        /** @type {number} */
        options.max_interval = 0;
      }
      if (options.min_interval) {
        if (options.min_interval > options.max - options.min) {
          /** @type {number} */
          options.min_interval = options.max - options.min;
        }
      }
      if (options.max_interval) {
        if (options.max_interval > options.max - options.min) {
          /** @type {number} */
          options.max_interval = options.max - options.min;
        }
      }
    },
    /**
     * @param {string} separator
     * @param {?} currentValue
     * @return {?}
     */
    decorate : function(separator, currentValue) {
      /** @type {string} */
      var str = "";
      var options = this.options;
      return options.prefix && (str += options.prefix), str += separator, options.max_postfix && (options.values.length && separator === options.p_values[options.max] ? (str += options.max_postfix, options.postfix && (str += " ")) : currentValue === options.max && (str += options.max_postfix, options.postfix && (str += " "))), options.postfix && (str += options.postfix), str;
    },
    /**
     * @return {undefined}
     */
    updateFrom : function() {
      this.result.from = this.options.from;
      this.result.from_percent = this.convertToPercent(this.result.from);
      if (this.options.values) {
        this.result.from_value = this.options.values[this.result.from];
      }
    },
    /**
     * @return {undefined}
     */
    updateTo : function() {
      this.result.to = this.options.to;
      this.result.to_percent = this.convertToPercent(this.result.to);
      if (this.options.values) {
        this.result.to_value = this.options.values[this.result.to];
      }
    },
    /**
     * @return {undefined}
     */
    updateResult : function() {
      this.result.min = this.options.min;
      this.result.max = this.options.max;
      this.updateFrom();
      this.updateTo();
    },
    /**
     * @return {undefined}
     */
    appendGrid : function() {
      if (this.options.grid) {
        var value;
        var c;
        var options = this.options;
        /** @type {number} */
        value = options.max - options.min;
        var high;
        var R;
        var i = options.grid_num;
        /** @type {number} */
        var mult = 0;
        /** @type {number} */
        var item = 0;
        /** @type {number} */
        var mid = 4;
        /** @type {number} */
        var length = 0;
        /** @type {string} */
        var translated = "";
        this.calcGridMargin();
        if (options.grid_snap) {
          /** @type {number} */
          i = value / options.step;
          mult = this.toFixed(options.step / (value / 100));
        } else {
          mult = this.toFixed(100 / i);
        }
        if (4 < i) {
          /** @type {number} */
          mid = 3;
        }
        if (7 < i) {
          /** @type {number} */
          mid = 2;
        }
        if (14 < i) {
          /** @type {number} */
          mid = 1;
        }
        if (28 < i) {
          /** @type {number} */
          mid = 0;
        }
        /** @type {number} */
        value = 0;
        for (;value < i + 1;value++) {
          /** @type {number} */
          high = mid;
          item = this.toFixed(mult * value);
          if (100 < item) {
            /** @type {number} */
            item = 100;
            high -= 2;
            if (0 > high) {
              /** @type {number} */
              high = 0;
            }
          }
          this.coords.big[value] = item;
          /** @type {number} */
          R = (item - mult * (value - 1)) / (high + 1);
          /** @type {number} */
          c = 1;
          for (;c <= high && 0 !== item;c++) {
            length = this.toFixed(item - R * c);
            translated += '<span class="irs-grid-pol small" style="left: ' + length + '%"></span>';
          }
          translated += '<span class="irs-grid-pol" style="left: ' + item + '%"></span>';
          length = this.convertToValue(item);
          length = options.values.length ? options.p_values[length] : this._prettify(length);
          translated += '<span class="irs-grid-text js-grid-text-' + value + '" style="left: ' + item + '%">' + length + "</span>";
        }
        /** @type {number} */
        this.coords.big_num = Math.ceil(i + 1);
        this.$cache.cont.addClass("irs-with-grid");
        this.$cache.grid.html(translated);
        this.cacheGridLabels();
      }
    },
    /**
     * @return {undefined}
     */
    cacheGridLabels : function() {
      var udataCur;
      var i;
      var c = this.coords.big_num;
      /** @type {number} */
      i = 0;
      for (;i < c;i++) {
        udataCur = this.$cache.grid.find(".js-grid-text-" + i);
        this.$cache.grid_labels.push(udataCur);
      }
      this.calcGridLabels();
    },
    /**
     * @return {undefined}
     */
    calcGridLabels : function() {
      var i;
      var a;
      /** @type {Array} */
      a = [];
      /** @type {Array} */
      var safe = [];
      var n = this.coords.big_num;
      /** @type {number} */
      i = 0;
      for (;i < n;i++) {
        this.coords.big_w[i] = this.$cache.grid_labels[i].outerWidth(false);
        this.coords.big_p[i] = this.toFixed(this.coords.big_w[i] / this.coords.w_rs * 100);
        this.coords.big_x[i] = this.toFixed(this.coords.big_p[i] / 2);
        a[i] = this.toFixed(this.coords.big[i] - this.coords.big_x[i]);
        safe[i] = this.toFixed(a[i] + this.coords.big_p[i]);
      }
      if (this.options.force_edges) {
        if (a[0] < -this.coords.grid_gap) {
          /** @type {number} */
          a[0] = -this.coords.grid_gap;
          safe[0] = this.toFixed(a[0] + this.coords.big_p[0]);
          this.coords.big_x[0] = this.coords.grid_gap;
        }
        if (safe[n - 1] > 100 + this.coords.grid_gap) {
          safe[n - 1] = 100 + this.coords.grid_gap;
          a[n - 1] = this.toFixed(safe[n - 1] - this.coords.big_p[n - 1]);
          this.coords.big_x[n - 1] = this.toFixed(this.coords.big_p[n - 1] - this.coords.grid_gap);
        }
      }
      this.calcGridCollision(2, a, safe);
      this.calcGridCollision(4, a, safe);
      /** @type {number} */
      i = 0;
      for (;i < n;i++) {
        a = this.$cache.grid_labels[i][0];
        /** @type {string} */
        a.style.marginLeft = -this.coords.big_x[i] + "%";
      }
    },
    /**
     * @param {number} opt_attributes
     * @param {Object} d
     * @param {Array} safe
     * @return {undefined}
     */
    calcGridCollision : function(opt_attributes, d, safe) {
      var i;
      var e;
      var el;
      var c = this.coords.big_num;
      /** @type {number} */
      i = 0;
      for (;i < c && (e = i + opt_attributes / 2, !(e >= c));i += opt_attributes) {
        el = this.$cache.grid_labels[e][0];
        /** @type {string} */
        el.style.visibility = safe[i] <= d[e] ? "visible" : "hidden";
      }
    },
    /**
     * @return {undefined}
     */
    calcGridMargin : function() {
      if (this.options.grid_margin) {
        this.coords.w_rs = this.$cache.rs.outerWidth(false);
        if (this.coords.w_rs) {
          this.coords.w_handle = "single" === this.options.type ? this.$cache.s_single.outerWidth(false) : this.$cache.s_from.outerWidth(false);
          this.coords.p_handle = this.toFixed(this.coords.w_handle / this.coords.w_rs * 100);
          this.coords.grid_gap = this.toFixed(this.coords.p_handle / 2 - 0.1);
          this.$cache.grid[0].style.width = this.toFixed(100 - this.coords.p_handle) + "%";
          /** @type {string} */
          this.$cache.grid[0].style.left = this.coords.grid_gap + "%";
        }
      }
    },
    /**
     * @param {(boolean|number|string)} attributes
     * @return {undefined}
     */
    update : function(attributes) {
      if (this.input) {
        /** @type {boolean} */
        this.is_update = true;
        this.options.from = this.result.from;
        this.options.to = this.result.to;
        this.options = $.extend(this.options, attributes);
        this.validate();
        this.updateResult(attributes);
        this.toggleInput();
        this.remove();
        this.init(true);
      }
    },
    /**
     * @return {undefined}
     */
    reset : function() {
      if (this.input) {
        this.updateResult();
        this.update();
      }
    },
    /**
     * @return {undefined}
     */
    destroy : function() {
      if (this.input) {
        this.toggleInput();
        this.$cache.input.prop("readonly", false);
        $.data(this.input, "ionRangeSlider", null);
        this.remove();
        /** @type {null} */
        this.options = this.input = null;
      }
    }
  };
  /**
   * @param {number} options
   * @return {?}
   */
  $.fn.ionRangeSlider = function(options) {
    return this.each(function() {
      if (!$.data(this, "ionRangeSlider")) {
        $.data(this, "ionRangeSlider", new init(this, options, f++));
      }
    });
  };
  (function() {
    /** @type {number} */
    var lastTime = 0;
    /** @type {Array} */
    var vendors = ["ms", "moz", "webkit", "o"];
    /** @type {number} */
    var x = 0;
    for (;x < vendors.length && !win.requestAnimationFrame;++x) {
      win.requestAnimationFrame = win[vendors[x] + "RequestAnimationFrame"];
      win.cancelAnimationFrame = win[vendors[x] + "CancelAnimationFrame"] || win[vendors[x] + "CancelRequestAnimationFrame"];
    }
    if (!win.requestAnimationFrame) {
      /**
       * @param {Function} callback
       * @param {number} opt_attributes
       * @return {?}
       */
      win.requestAnimationFrame = function(callback, opt_attributes) {
        /** @type {number} */
        var currTime = (new Date).getTime();
        /** @type {number} */
        var timeToCall = Math.max(0, 16 - (currTime - lastTime));
        var id = win.setTimeout(function() {
          callback(currTime + timeToCall);
        }, timeToCall);
        return lastTime = currTime + timeToCall, id;
      };
    }
    if (!win.cancelAnimationFrame) {
      /**
       * @param {?} to
       * @return {undefined}
       */
      win.cancelAnimationFrame = function(to) {
        clearTimeout(to);
      };
    }
  })();
}), !function() {
  /**
   * @param {Object} $
   * @return {undefined}
   */
  function callback($) {
    /**
     * @param {Object} lab
     * @return {?}
     */
    $.fn.swiper = function(lab) {
      var bulk;
      return $(this).each(function() {
        var fn = new init(this, lab);
        if (!bulk) {
          bulk = fn;
        }
      }), bulk;
    };
  }
  var $;
  /**
   * @param {Object} lab
   * @param {Object} target
   * @return {?}
   */
  var init = function(lab, target) {
    /**
     * @param {number} num
     * @return {?}
     */
    function parseInt(num) {
      return Math.floor(num);
    }
    /**
     * @return {undefined}
     */
    function loop() {
      /** @type {number} */
      self.autoplayTimeoutId = setTimeout(function() {
        if (self.params.loop) {
          self.fixLoop();
          self._slideNext();
          self.emit("onAutoplay", self);
        } else {
          if (self.isEnd) {
            if (target.autoplayStopOnLast) {
              self.stopAutoplay();
            } else {
              self._slideTo(0);
              self.emit("onAutoplay", self);
            }
          } else {
            self._slideNext();
            self.emit("onAutoplay", self);
          }
        }
      }, self.params.autoplay);
    }
    /**
     * @param {Object} event
     * @param {?} el
     * @return {?}
     */
    function bind(event, el) {
      var ele = $(event.target);
      if (!ele.is(el)) {
        if ("string" == typeof el) {
          ele = ele.parents(el);
        } else {
          if (el.nodeType) {
            var activeElement;
            return ele.parents().each(function(dataAndEvents, parentEl) {
              if (parentEl === el) {
                activeElement = el;
              }
            }), activeElement ? el : void 0;
          }
        }
      }
      if (0 !== ele.length) {
        return ele[0];
      }
    }
    /**
     * @param {?} container
     * @param {Object} options
     * @return {undefined}
     */
    function initialize(container, options) {
      options = options || {};
      var MutationObserver = window.MutationObserver || window.WebkitMutationObserver;
      /** @type {MutationObserver} */
      var observer = new MutationObserver(function(failures) {
        failures.forEach(function(db) {
          self.onResize(true);
          self.emit("onObserverUpdate", self, db);
        });
      });
      observer.observe(container, {
        attributes : "undefined" == typeof options.attributes || options.attributes,
        childList : "undefined" == typeof options.childList || options.childList,
        characterData : "undefined" == typeof options.characterData || options.characterData
      });
      self.observers.push(observer);
    }
    /**
     * @param {Object} ev
     * @return {?}
     */
    function listener(ev) {
      if (ev.originalEvent) {
        ev = ev.originalEvent;
      }
      var string = ev.keyCode || ev.charCode;
      if (!self.params.allowSwipeToNext && (self.isHorizontal() && 39 === string || !self.isHorizontal() && 40 === string)) {
        return false;
      }
      if (!self.params.allowSwipeToPrev && (self.isHorizontal() && 37 === string || !self.isHorizontal() && 38 === string)) {
        return false;
      }
      if (!(ev.shiftKey || (ev.altKey || (ev.ctrlKey || (ev.metaKey || document.activeElement && (document.activeElement.nodeName && ("input" === document.activeElement.nodeName.toLowerCase() || "textarea" === document.activeElement.nodeName.toLowerCase()))))))) {
        if (37 === string || (39 === string || (38 === string || 40 === string))) {
          /** @type {boolean} */
          var c = false;
          if (self.container.parents(".swiper-slide").length > 0 && 0 === self.container.parents(".swiper-slide-active").length) {
            return;
          }
          var position = {
            left : window.pageXOffset,
            top : window.pageYOffset
          };
          /** @type {number} */
          var width = window.innerWidth;
          /** @type {number} */
          var height = window.innerHeight;
          var offset = self.container.offset();
          if (self.rtl) {
            /** @type {number} */
            offset.left = offset.left - self.container[0].scrollLeft;
          }
          /** @type {Array} */
          var resultItems = [[offset.left, offset.top], [offset.left + self.width, offset.top], [offset.left, offset.top + self.height], [offset.left + self.width, offset.top + self.height]];
          /** @type {number} */
          var i = 0;
          for (;i < resultItems.length;i++) {
            var result = resultItems[i];
            if (result[0] >= position.left) {
              if (result[0] <= position.left + width) {
                if (result[1] >= position.top) {
                  if (result[1] <= position.top + height) {
                    /** @type {boolean} */
                    c = true;
                  }
                }
              }
            }
          }
          if (!c) {
            return;
          }
        }
        if (self.isHorizontal()) {
          if (37 === string || 39 === string) {
            if (ev.preventDefault) {
              ev.preventDefault();
            } else {
              /** @type {boolean} */
              ev.returnValue = false;
            }
          }
          if (39 === string && !self.rtl || 37 === string && self.rtl) {
            self.slideNext();
          }
          if (37 === string && !self.rtl || 39 === string && self.rtl) {
            self.slidePrev();
          }
        } else {
          if (38 === string || 40 === string) {
            if (ev.preventDefault) {
              ev.preventDefault();
            } else {
              /** @type {boolean} */
              ev.returnValue = false;
            }
          }
          if (40 === string) {
            self.slideNext();
          }
          if (38 === string) {
            self.slidePrev();
          }
        }
      }
    }
    /**
     * @param {Function} e
     * @return {?}
     */
    function handler(e) {
      if (e.originalEvent) {
        e = e.originalEvent;
      }
      var invokeEvent = self.mousewheel.event;
      /** @type {number} */
      var dy = 0;
      /** @type {number} */
      var MOVE_DEPTH = self.rtl ? -1 : 1;
      if ("mousewheel" === invokeEvent) {
        if (self.params.mousewheelForceToAxis) {
          if (self.isHorizontal()) {
            if (!(Math.abs(e.wheelDeltaX) > Math.abs(e.wheelDeltaY))) {
              return;
            }
            /** @type {number} */
            dy = e.wheelDeltaX * MOVE_DEPTH;
          } else {
            if (!(Math.abs(e.wheelDeltaY) > Math.abs(e.wheelDeltaX))) {
              return;
            }
            dy = e.wheelDeltaY;
          }
        } else {
          /** @type {number} */
          dy = Math.abs(e.wheelDeltaX) > Math.abs(e.wheelDeltaY) ? -e.wheelDeltaX * MOVE_DEPTH : -e.wheelDeltaY;
        }
      } else {
        if ("DOMMouseScroll" === invokeEvent) {
          /** @type {number} */
          dy = -e.detail;
        } else {
          if ("wheel" === invokeEvent) {
            if (self.params.mousewheelForceToAxis) {
              if (self.isHorizontal()) {
                if (!(Math.abs(e.deltaX) > Math.abs(e.deltaY))) {
                  return;
                }
                /** @type {number} */
                dy = -e.deltaX * MOVE_DEPTH;
              } else {
                if (!(Math.abs(e.deltaY) > Math.abs(e.deltaX))) {
                  return;
                }
                /** @type {number} */
                dy = -e.deltaY;
              }
            } else {
              /** @type {number} */
              dy = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? -e.deltaX * MOVE_DEPTH : -e.deltaY;
            }
          }
        }
      }
      if (0 !== dy) {
        if (self.params.mousewheelInvert && (dy = -dy), self.params.freeMode) {
          var x = self.getWrapperTranslate() + dy * self.params.mousewheelSensitivity;
          var file = self.isBeginning;
          var len = self.isEnd;
          if (x >= self.minTranslate() && (x = self.minTranslate()), x <= self.maxTranslate() && (x = self.maxTranslate()), self.setWrapperTransition(0), self.setWrapperTranslate(x), self.updateProgress(), self.updateActiveIndex(), (!file && self.isBeginning || !len && self.isEnd) && self.updateClasses(), self.params.freeModeSticky ? (clearTimeout(self.mousewheel.timeout), self.mousewheel.timeout = setTimeout(function() {
            self.slideReset();
          }, 300)) : self.params.lazyLoading && (self.lazy && self.lazy.load()), 0 === x || x === self.maxTranslate()) {
            return;
          }
        } else {
          if ((new window.Date).getTime() - self.mousewheel.lastScrollTime > 60) {
            if (0 > dy) {
              if (self.isEnd && !self.params.loop || self.animating) {
                if (self.params.mousewheelReleaseOnEdges) {
                  return true;
                }
              } else {
                self.slideNext();
              }
            } else {
              if (self.isBeginning && !self.params.loop || self.animating) {
                if (self.params.mousewheelReleaseOnEdges) {
                  return true;
                }
              } else {
                self.slidePrev();
              }
            }
          }
          self.mousewheel.lastScrollTime = (new window.Date).getTime();
        }
        return self.params.autoplay && self.stopAutoplay(), e.preventDefault ? e.preventDefault() : e.returnValue = false, false;
      }
    }
    /**
     * @param {Object} tile
     * @param {number} width
     * @return {undefined}
     */
    function draw(tile, width) {
      tile = $(tile);
      var $p2;
      var y;
      var z;
      /** @type {number} */
      var t = self.rtl ? -1 : 1;
      $p2 = tile.attr("data-swiper-parallax") || "0";
      y = tile.attr("data-swiper-parallax-x");
      z = tile.attr("data-swiper-parallax-y");
      if (y || z) {
        y = y || "0";
        z = z || "0";
      } else {
        if (self.isHorizontal()) {
          y = $p2;
          /** @type {string} */
          z = "0";
        } else {
          z = $p2;
          /** @type {string} */
          y = "0";
        }
      }
      /** @type {string} */
      y = y.indexOf("%") >= 0 ? parseInt(y, 10) * width * t + "%" : y * width * t + "px";
      /** @type {string} */
      z = z.indexOf("%") >= 0 ? parseInt(z, 10) * width + "%" : z * width + "px";
      tile.transform("translate3d(" + y + ", " + z + ",0px)");
    }
    /**
     * @param {string} type
     * @return {?}
     */
    function parse(type) {
      return 0 !== type.indexOf("on") && (type = type[0] !== type[0].toUpperCase() ? "on" + type[0].toUpperCase() + type.substring(1) : "on" + type), type;
    }
    if (!(this instanceof init)) {
      return new init(lab, target);
    }
    var attrs = {
      direction : "horizontal",
      touchEventsTarget : "container",
      initialSlide : 0,
      speed : 300,
      autoplay : false,
      autoplayDisableOnInteraction : true,
      autoplayStopOnLast : false,
      iOSEdgeSwipeDetection : false,
      iOSEdgeSwipeThreshold : 20,
      freeMode : false,
      freeModeMomentum : true,
      freeModeMomentumRatio : 1,
      freeModeMomentumBounce : true,
      freeModeMomentumBounceRatio : 1,
      freeModeSticky : false,
      freeModeMinimumVelocity : 0.02,
      autoHeight : false,
      setWrapperSize : false,
      virtualTranslate : false,
      effect : "slide",
      coverflow : {
        rotate : 50,
        stretch : 0,
        depth : 100,
        modifier : 1,
        slideShadows : true
      },
      flip : {
        slideShadows : true,
        limitRotation : true
      },
      cube : {
        slideShadows : true,
        shadow : true,
        shadowOffset : 20,
        shadowScale : 0.94
      },
      fade : {
        crossFade : false
      },
      parallax : false,
      scrollbar : null,
      scrollbarHide : true,
      scrollbarDraggable : false,
      scrollbarSnapOnRelease : false,
      keyboardControl : false,
      mousewheelControl : false,
      mousewheelReleaseOnEdges : false,
      mousewheelInvert : false,
      mousewheelForceToAxis : false,
      mousewheelSensitivity : 1,
      hashnav : false,
      breakpoints : void 0,
      spaceBetween : 0,
      slidesPerView : 1,
      slidesPerColumn : 1,
      slidesPerColumnFill : "column",
      slidesPerGroup : 1,
      centeredSlides : false,
      slidesOffsetBefore : 0,
      slidesOffsetAfter : 0,
      roundLengths : false,
      touchRatio : 1,
      touchAngle : 45,
      simulateTouch : true,
      shortSwipes : true,
      longSwipes : true,
      longSwipesRatio : 0.5,
      longSwipesMs : 300,
      followFinger : true,
      onlyExternal : false,
      threshold : 0,
      touchMoveStopPropagation : true,
      uniqueNavElements : true,
      pagination : null,
      paginationElement : "span",
      paginationClickable : false,
      paginationHide : false,
      paginationBulletRender : null,
      paginationProgressRender : null,
      paginationFractionRender : null,
      paginationCustomRender : null,
      paginationType : "bullets",
      resistance : true,
      resistanceRatio : 0.85,
      nextButton : null,
      prevButton : null,
      watchSlidesProgress : false,
      watchSlidesVisibility : false,
      grabCursor : false,
      preventClicks : true,
      preventClicksPropagation : true,
      slideToClickedSlide : false,
      lazyLoading : false,
      lazyLoadingInPrevNext : false,
      lazyLoadingInPrevNextAmount : 1,
      lazyLoadingOnTransitionStart : false,
      preloadImages : true,
      updateOnImagesReady : true,
      loop : false,
      loopAdditionalSlides : 0,
      loopedSlides : null,
      control : void 0,
      controlInverse : false,
      controlBy : "slide",
      allowSwipeToPrev : true,
      allowSwipeToNext : true,
      swipeHandler : null,
      noSwiping : true,
      noSwipingClass : "swiper-no-swiping",
      slideClass : "swiper-slide",
      slideActiveClass : "swiper-slide-active",
      slideVisibleClass : "swiper-slide-visible",
      slideDuplicateClass : "swiper-slide-duplicate",
      slideNextClass : "swiper-slide-next",
      slidePrevClass : "swiper-slide-prev",
      wrapperClass : "swiper-wrapper",
      bulletClass : "swiper-pagination-bullet",
      bulletActiveClass : "swiper-pagination-bullet-active",
      buttonDisabledClass : "swiper-button-disabled",
      paginationCurrentClass : "swiper-pagination-current",
      paginationTotalClass : "swiper-pagination-total",
      paginationHiddenClass : "swiper-pagination-hidden",
      paginationProgressbarClass : "swiper-pagination-progressbar",
      observer : false,
      observeParents : false,
      a11y : false,
      prevSlideMessage : "Previous slide",
      nextSlideMessage : "Next slide",
      firstSlideMessage : "This is the first slide",
      lastSlideMessage : "This is the last slide",
      paginationBulletMessage : "Go to slide {{index}}",
      runCallbacksOnInit : true
    };
    var e = target && target.virtualTranslate;
    target = target || {};
    var obj = {};
    var i;
    for (i in target) {
      if ("object" != typeof target[i] || (null === target[i] || (target[i].nodeType || (target[i] === window || (target[i] === document || ("undefined" != typeof io && target[i] instanceof io || "undefined" != typeof jQuery && target[i] instanceof jQuery)))))) {
        obj[i] = target[i];
      } else {
        obj[i] = {};
        var ii;
        for (ii in target[i]) {
          obj[i][ii] = target[i][ii];
        }
      }
    }
    var attr;
    for (attr in attrs) {
      if ("undefined" == typeof target[attr]) {
        target[attr] = attrs[attr];
      } else {
        if ("object" == typeof target[attr]) {
          var op;
          for (op in attrs[attr]) {
            if ("undefined" == typeof target[attr][op]) {
              target[attr][op] = attrs[attr][op];
            }
          }
        }
      }
    }
    var self = this;
    if (self.params = target, self.originalParams = obj, self.classNames = [], "undefined" != typeof $ && ("undefined" != typeof io && ($ = io)), ("undefined" != typeof $ || ($ = "undefined" == typeof io ? window.Dom7 || (window.Zepto || window.jQuery) : io)) && (self.$ = $, self.currentBreakpoint = void 0, self.getActiveBreakpoint = function() {
      if (!self.params.breakpoints) {
        return false;
      }
      var name;
      /** @type {boolean} */
      var n = false;
      /** @type {Array} */
      var names = [];
      for (name in self.params.breakpoints) {
        if (self.params.breakpoints.hasOwnProperty(name)) {
          names.push(name);
        }
      }
      names.sort(function(a, b) {
        return parseInt(a, 10) > parseInt(b, 10);
      });
      /** @type {number} */
      var i = 0;
      for (;i < names.length;i++) {
        name = names[i];
        if (name >= window.innerWidth) {
          if (!n) {
            n = name;
          }
        }
      }
      return n || "max";
    }, self.setBreakpoint = function() {
      var name = self.getActiveBreakpoint();
      if (name && self.currentBreakpoint !== name) {
        var iterable = name in self.params.breakpoints ? self.params.breakpoints[name] : self.originalParams;
        var c = self.params.loop && iterable.slidesPerView !== self.params.slidesPerView;
        var key;
        for (key in iterable) {
          self.params[key] = iterable[key];
        }
        self.currentBreakpoint = name;
        if (c) {
          if (self.destroyLoop) {
            self.reLoop(true);
          }
        }
      }
    }, self.params.breakpoints && self.setBreakpoint(), self.container = $(lab), 0 !== self.container.length)) {
      if (self.container.length > 1) {
        /** @type {Array} */
        var eventPath = [];
        return self.container.each(function() {
          eventPath.push(new init(this, target));
        }), eventPath;
      }
      self.container[0].swiper = self;
      self.container.data("swiper", self);
      self.classNames.push("swiper-container-" + self.params.direction);
      if (self.params.freeMode) {
        self.classNames.push("swiper-container-free-mode");
      }
      if (!self.support.flexbox) {
        self.classNames.push("swiper-container-no-flexbox");
        /** @type {number} */
        self.params.slidesPerColumn = 1;
      }
      if (self.params.autoHeight) {
        self.classNames.push("swiper-container-autoheight");
      }
      if (self.params.parallax || self.params.watchSlidesVisibility) {
        /** @type {boolean} */
        self.params.watchSlidesProgress = true;
      }
      if (["cube", "coverflow", "flip"].indexOf(self.params.effect) >= 0) {
        if (self.support.transforms3d) {
          /** @type {boolean} */
          self.params.watchSlidesProgress = true;
          self.classNames.push("swiper-container-3d");
        } else {
          /** @type {string} */
          self.params.effect = "slide";
        }
      }
      if ("slide" !== self.params.effect) {
        self.classNames.push("swiper-container-" + self.params.effect);
      }
      if ("cube" === self.params.effect) {
        /** @type {number} */
        self.params.resistanceRatio = 0;
        /** @type {number} */
        self.params.slidesPerView = 1;
        /** @type {number} */
        self.params.slidesPerColumn = 1;
        /** @type {number} */
        self.params.slidesPerGroup = 1;
        /** @type {boolean} */
        self.params.centeredSlides = false;
        /** @type {number} */
        self.params.spaceBetween = 0;
        /** @type {boolean} */
        self.params.virtualTranslate = true;
        /** @type {boolean} */
        self.params.setWrapperSize = false;
      }
      if ("fade" === self.params.effect || "flip" === self.params.effect) {
        /** @type {number} */
        self.params.slidesPerView = 1;
        /** @type {number} */
        self.params.slidesPerColumn = 1;
        /** @type {number} */
        self.params.slidesPerGroup = 1;
        /** @type {boolean} */
        self.params.watchSlidesProgress = true;
        /** @type {number} */
        self.params.spaceBetween = 0;
        /** @type {boolean} */
        self.params.setWrapperSize = false;
        if ("undefined" == typeof e) {
          /** @type {boolean} */
          self.params.virtualTranslate = true;
        }
      }
      if (self.params.grabCursor) {
        if (self.support.touch) {
          /** @type {boolean} */
          self.params.grabCursor = false;
        }
      }
      self.wrapper = self.container.children("." + self.params.wrapperClass);
      if (self.params.pagination) {
        self.paginationContainer = $(self.params.pagination);
        if (self.params.uniqueNavElements) {
          if ("string" == typeof self.params.pagination) {
            if (self.paginationContainer.length > 1) {
              if (1 === self.container.find(self.params.pagination).length) {
                self.paginationContainer = self.container.find(self.params.pagination);
              }
            }
          }
        }
        if ("bullets" === self.params.paginationType && self.params.paginationClickable) {
          self.paginationContainer.addClass("swiper-pagination-clickable");
        } else {
          /** @type {boolean} */
          self.params.paginationClickable = false;
        }
        self.paginationContainer.addClass("swiper-pagination-" + self.params.paginationType);
      }
      if (self.params.nextButton || self.params.prevButton) {
        if (self.params.nextButton) {
          self.nextButton = $(self.params.nextButton);
          if (self.params.uniqueNavElements) {
            if ("string" == typeof self.params.nextButton) {
              if (self.nextButton.length > 1) {
                if (1 === self.container.find(self.params.nextButton).length) {
                  self.nextButton = self.container.find(self.params.nextButton);
                }
              }
            }
          }
        }
        if (self.params.prevButton) {
          self.prevButton = $(self.params.prevButton);
          if (self.params.uniqueNavElements) {
            if ("string" == typeof self.params.prevButton) {
              if (self.prevButton.length > 1) {
                if (1 === self.container.find(self.params.prevButton).length) {
                  self.prevButton = self.container.find(self.params.prevButton);
                }
              }
            }
          }
        }
      }
      /**
       * @return {?}
       */
      self.isHorizontal = function() {
        return "horizontal" === self.params.direction;
      };
      self.rtl = self.isHorizontal() && ("rtl" === self.container[0].dir.toLowerCase() || "rtl" === self.container.css("direction"));
      if (self.rtl) {
        self.classNames.push("swiper-container-rtl");
      }
      if (self.rtl) {
        /** @type {boolean} */
        self.wrongRTL = "-webkit-box" === self.wrapper.css("display");
      }
      if (self.params.slidesPerColumn > 1) {
        self.classNames.push("swiper-container-multirow");
      }
      if (self.device.android) {
        self.classNames.push("swiper-container-android");
      }
      self.container.addClass(self.classNames.join(" "));
      /** @type {number} */
      self.translate = 0;
      /** @type {number} */
      self.progress = 0;
      /** @type {number} */
      self.velocity = 0;
      /**
       * @return {undefined}
       */
      self.lockSwipeToNext = function() {
        /** @type {boolean} */
        self.params.allowSwipeToNext = false;
      };
      /**
       * @return {undefined}
       */
      self.lockSwipeToPrev = function() {
        /** @type {boolean} */
        self.params.allowSwipeToPrev = false;
      };
      /**
       * @return {undefined}
       */
      self.lockSwipes = function() {
        /** @type {boolean} */
        self.params.allowSwipeToNext = self.params.allowSwipeToPrev = false;
      };
      /**
       * @return {undefined}
       */
      self.unlockSwipeToNext = function() {
        /** @type {boolean} */
        self.params.allowSwipeToNext = true;
      };
      /**
       * @return {undefined}
       */
      self.unlockSwipeToPrev = function() {
        /** @type {boolean} */
        self.params.allowSwipeToPrev = true;
      };
      /**
       * @return {undefined}
       */
      self.unlockSwipes = function() {
        /** @type {boolean} */
        self.params.allowSwipeToNext = self.params.allowSwipeToPrev = true;
      };
      if (self.params.grabCursor) {
        /** @type {string} */
        self.container[0].style.cursor = "move";
        /** @type {string} */
        self.container[0].style.cursor = "-webkit-grab";
        /** @type {string} */
        self.container[0].style.cursor = "-moz-grab";
        /** @type {string} */
        self.container[0].style.cursor = "grab";
      }
      /** @type {Array} */
      self.imagesToLoad = [];
      /** @type {number} */
      self.imagesLoaded = 0;
      /**
       * @param {Object} callback
       * @param {string} path
       * @param {?} source
       * @param {string} recurring
       * @param {Function} success
       * @return {undefined}
       */
      self.loadImage = function(callback, path, source, recurring, success) {
        /**
         * @return {undefined}
         */
        function fn() {
          if (success) {
            success();
          }
        }
        var img;
        if (callback.complete && recurring) {
          fn();
        } else {
          if (path) {
            img = new window.Image;
            /** @type {function (): undefined} */
            img.onload = fn;
            /** @type {function (): undefined} */
            img.onerror = fn;
            if (source) {
              img.srcset = source;
            }
            if (path) {
              /** @type {string} */
              img.src = path;
            }
          } else {
            fn();
          }
        }
      };
      /**
       * @return {undefined}
       */
      self.preloadImages = function() {
        /**
         * @return {undefined}
         */
        function request() {
          if ("undefined" != typeof self) {
            if (null !== self) {
              if (void 0 !== self.imagesLoaded) {
                self.imagesLoaded++;
              }
              if (self.imagesLoaded === self.imagesToLoad.length) {
                if (self.params.updateOnImagesReady) {
                  self.update();
                }
                self.emit("onImagesReady", self);
              }
            }
          }
        }
        self.imagesToLoad = self.container.find("img");
        /** @type {number} */
        var i = 0;
        for (;i < self.imagesToLoad.length;i++) {
          self.loadImage(self.imagesToLoad[i], self.imagesToLoad[i].currentSrc || self.imagesToLoad[i].getAttribute("src"), self.imagesToLoad[i].srcset || self.imagesToLoad[i].getAttribute("srcset"), true, request);
        }
      };
      self.autoplayTimeoutId = void 0;
      /** @type {boolean} */
      self.autoplaying = false;
      /** @type {boolean} */
      self.autoplayPaused = false;
      /**
       * @return {?}
       */
      self.startAutoplay = function() {
        return "undefined" == typeof self.autoplayTimeoutId && (!!self.params.autoplay && (!self.autoplaying && (self.autoplaying = true, self.emit("onAutoplayStart", self), void loop())));
      };
      /**
       * @param {?} keepAutoplayBindings
       * @return {undefined}
       */
      self.stopAutoplay = function(keepAutoplayBindings) {
        if (self.autoplayTimeoutId) {
          if (self.autoplayTimeoutId) {
            clearTimeout(self.autoplayTimeoutId);
          }
          /** @type {boolean} */
          self.autoplaying = false;
          self.autoplayTimeoutId = void 0;
          self.emit("onAutoplayStop", self);
        }
      };
      /**
       * @param {number} lab
       * @return {undefined}
       */
      self.pauseAutoplay = function(lab) {
        if (!self.autoplayPaused) {
          if (self.autoplayTimeoutId) {
            clearTimeout(self.autoplayTimeoutId);
          }
          /** @type {boolean} */
          self.autoplayPaused = true;
          if (0 === lab) {
            /** @type {boolean} */
            self.autoplayPaused = false;
            loop();
          } else {
            self.wrapper.transitionEnd(function() {
              if (self) {
                /** @type {boolean} */
                self.autoplayPaused = false;
                if (self.autoplaying) {
                  loop();
                } else {
                  self.stopAutoplay();
                }
              }
            });
          }
        }
      };
      /**
       * @return {?}
       */
      self.minTranslate = function() {
        return-self.snapGrid[0];
      };
      /**
       * @return {?}
       */
      self.maxTranslate = function() {
        return-self.snapGrid[self.snapGrid.length - 1];
      };
      /**
       * @return {undefined}
       */
      self.updateAutoHeight = function() {
        var dims = self.slides.eq(self.activeIndex)[0];
        if ("undefined" != typeof dims) {
          var docHeight = dims.offsetHeight;
          if (docHeight) {
            self.wrapper.css("height", docHeight + "px");
          }
        }
      };
      /**
       * @return {undefined}
       */
      self.updateContainerSize = function() {
        var i;
        var h;
        i = "undefined" != typeof self.params.width ? self.params.width : self.container[0].clientWidth;
        h = "undefined" != typeof self.params.height ? self.params.height : self.container[0].clientHeight;
        if (!(0 === i && self.isHorizontal())) {
          if (!(0 === h && !self.isHorizontal())) {
            /** @type {number} */
            i = i - parseInt(self.container.css("padding-left"), 10) - parseInt(self.container.css("padding-right"), 10);
            /** @type {number} */
            h = h - parseInt(self.container.css("padding-top"), 10) - parseInt(self.container.css("padding-bottom"), 10);
            /** @type {number} */
            self.width = i;
            /** @type {number} */
            self.height = h;
            /** @type {number} */
            self.size = self.isHorizontal() ? self.width : self.height;
          }
        }
      };
      /**
       * @return {undefined}
       */
      self.updateSlidesSize = function() {
        self.slides = self.wrapper.children("." + self.params.slideClass);
        /** @type {Array} */
        self.snapGrid = [];
        /** @type {Array} */
        self.slidesGrid = [];
        /** @type {Array} */
        self.slidesSizesGrid = [];
        var index;
        var b = self.params.spaceBetween;
        /** @type {number} */
        var s = -self.params.slidesOffsetBefore;
        /** @type {number} */
        var waitMsg = 0;
        /** @type {number} */
        var slidesPerGroup = 0;
        if ("undefined" != typeof self.size) {
          if ("string" == typeof b) {
            if (b.indexOf("%") >= 0) {
              /** @type {number} */
              b = parseFloat(b.replace("%", "")) / 100 * self.size;
            }
          }
          /** @type {number} */
          self.virtualSize = -b;
          if (self.rtl) {
            self.slides.css({
              marginLeft : "",
              marginTop : ""
            });
          } else {
            self.slides.css({
              marginRight : "",
              marginBottom : ""
            });
          }
          var w;
          if (self.params.slidesPerColumn > 1) {
            w = Math.floor(self.slides.length / self.params.slidesPerColumn) === self.slides.length / self.params.slidesPerColumn ? self.slides.length : Math.ceil(self.slides.length / self.params.slidesPerColumn) * self.params.slidesPerColumn;
            if ("auto" !== self.params.slidesPerView) {
              if ("row" === self.params.slidesPerColumnFill) {
                /** @type {number} */
                w = Math.max(w, self.params.slidesPerView * self.params.slidesPerColumn);
              }
            }
          }
          var a;
          var len = self.params.slidesPerColumn;
          /** @type {number} */
          var columns = w / len;
          /** @type {number} */
          var y = columns - (self.params.slidesPerColumn * columns - self.slides.length);
          /** @type {number} */
          index = 0;
          for (;index < self.slides.length;index++) {
            /** @type {number} */
            a = 0;
            var el = self.slides.eq(index);
            if (self.params.slidesPerColumn > 1) {
              var ch;
              var x;
              var i;
              if ("column" === self.params.slidesPerColumnFill) {
                /** @type {number} */
                x = Math.floor(index / len);
                /** @type {number} */
                i = index - x * len;
                if (x > y || x === y && i === len - 1) {
                  if (++i >= len) {
                    /** @type {number} */
                    i = 0;
                    x++;
                  }
                }
                /** @type {number} */
                ch = x + i * w / len;
                el.css({
                  "-webkit-box-ordinal-group" : ch,
                  "-moz-box-ordinal-group" : ch,
                  "-ms-flex-order" : ch,
                  "-webkit-order" : ch,
                  order : ch
                });
              } else {
                /** @type {number} */
                i = Math.floor(index / columns);
                /** @type {number} */
                x = index - i * columns;
              }
              el.css({
                "margin-top" : 0 !== i && (self.params.spaceBetween && self.params.spaceBetween + "px")
              }).attr("data-swiper-column", x).attr("data-swiper-row", i);
            }
            if ("none" !== el.css("display")) {
              if ("auto" === self.params.slidesPerView) {
                a = self.isHorizontal() ? el.outerWidth(true) : el.outerHeight(true);
                if (self.params.roundLengths) {
                  a = parseInt(a);
                }
              } else {
                /** @type {number} */
                a = (self.size - (self.params.slidesPerView - 1) * b) / self.params.slidesPerView;
                if (self.params.roundLengths) {
                  a = parseInt(a);
                }
                if (self.isHorizontal()) {
                  /** @type {string} */
                  self.slides[index].style.width = a + "px";
                } else {
                  /** @type {string} */
                  self.slides[index].style.height = a + "px";
                }
              }
              /** @type {number} */
              self.slides[index].swiperSlideSize = a;
              self.slidesSizesGrid.push(a);
              if (self.params.centeredSlides) {
                s = s + a / 2 + waitMsg / 2 + b;
                if (0 === index) {
                  /** @type {number} */
                  s = s - self.size / 2 - b;
                }
                if (Math.abs(s) < 0.001) {
                  /** @type {number} */
                  s = 0;
                }
                if (slidesPerGroup % self.params.slidesPerGroup === 0) {
                  self.snapGrid.push(s);
                }
                self.slidesGrid.push(s);
              } else {
                if (slidesPerGroup % self.params.slidesPerGroup === 0) {
                  self.snapGrid.push(s);
                }
                self.slidesGrid.push(s);
                s = s + a + b;
              }
              self.virtualSize += a + b;
              /** @type {number} */
              waitMsg = a;
              slidesPerGroup++;
            }
          }
          self.virtualSize = Math.max(self.virtualSize, self.size) + self.params.slidesOffsetAfter;
          var newY;
          if (self.rtl && (self.wrongRTL && (("slide" === self.params.effect || "coverflow" === self.params.effect) && self.wrapper.css({
            width : self.virtualSize + self.params.spaceBetween + "px"
          }))), (!self.support.flexbox || self.params.setWrapperSize) && (self.isHorizontal() ? self.wrapper.css({
            width : self.virtualSize + self.params.spaceBetween + "px"
          }) : self.wrapper.css({
            height : self.virtualSize + self.params.spaceBetween + "px"
          })), self.params.slidesPerColumn > 1 && (self.virtualSize = (a + self.params.spaceBetween) * w, self.virtualSize = Math.ceil(self.virtualSize / self.params.slidesPerColumn) - self.params.spaceBetween, self.wrapper.css({
            width : self.virtualSize + self.params.spaceBetween + "px"
          }), self.params.centeredSlides)) {
            /** @type {Array} */
            newY = [];
            /** @type {number} */
            index = 0;
            for (;index < self.snapGrid.length;index++) {
              if (self.snapGrid[index] < self.virtualSize + self.snapGrid[0]) {
                newY.push(self.snapGrid[index]);
              }
            }
            /** @type {Array} */
            self.snapGrid = newY;
          }
          if (!self.params.centeredSlides) {
            /** @type {Array} */
            newY = [];
            /** @type {number} */
            index = 0;
            for (;index < self.snapGrid.length;index++) {
              if (self.snapGrid[index] <= self.virtualSize - self.size) {
                newY.push(self.snapGrid[index]);
              }
            }
            /** @type {Array} */
            self.snapGrid = newY;
            if (Math.floor(self.virtualSize - self.size) - Math.floor(self.snapGrid[self.snapGrid.length - 1]) > 1) {
              self.snapGrid.push(self.virtualSize - self.size);
            }
          }
          if (0 === self.snapGrid.length) {
            /** @type {Array} */
            self.snapGrid = [0];
          }
          if (0 !== self.params.spaceBetween) {
            if (self.isHorizontal()) {
              if (self.rtl) {
                self.slides.css({
                  marginLeft : b + "px"
                });
              } else {
                self.slides.css({
                  marginRight : b + "px"
                });
              }
            } else {
              self.slides.css({
                marginBottom : b + "px"
              });
            }
          }
          if (self.params.watchSlidesProgress) {
            self.updateSlidesOffset();
          }
        }
      };
      /**
       * @return {undefined}
       */
      self.updateSlidesOffset = function() {
        /** @type {number} */
        var i = 0;
        for (;i < self.slides.length;i++) {
          self.slides[i].swiperSlideOffset = self.isHorizontal() ? self.slides[i].offsetLeft : self.slides[i].offsetTop;
        }
      };
      /**
       * @param {number} e
       * @return {undefined}
       */
      self.updateSlidesProgress = function(e) {
        if ("undefined" == typeof e && (e = self.translate || 0), 0 !== self.slides.length) {
          if ("undefined" == typeof self.slides[0].swiperSlideOffset) {
            self.updateSlidesOffset();
          }
          /** @type {number} */
          var declarationError = -e;
          if (self.rtl) {
            /** @type {number} */
            declarationError = e;
          }
          self.slides.removeClass(self.params.slideVisibleClass);
          /** @type {number} */
          var i = 0;
          for (;i < self.slides.length;i++) {
            var c = self.slides[i];
            /** @type {number} */
            var red = (declarationError - c.swiperSlideOffset) / (c.swiperSlideSize + self.params.spaceBetween);
            if (self.params.watchSlidesVisibility) {
              /** @type {number} */
              var j = -(declarationError - c.swiperSlideOffset);
              var index = j + self.slidesSizesGrid[i];
              /** @type {boolean} */
              var h = j >= 0 && j < self.size || (index > 0 && index <= self.size || 0 >= j && index >= self.size);
              if (h) {
                self.slides.eq(i).addClass(self.params.slideVisibleClass);
              }
            }
            /** @type {number} */
            c.progress = self.rtl ? -red : red;
          }
        }
      };
      /**
       * @param {number} data
       * @return {undefined}
       */
      self.updateProgress = function(data) {
        if ("undefined" == typeof data) {
          data = self.translate || 0;
        }
        /** @type {number} */
        var size = self.maxTranslate() - self.minTranslate();
        var len = self.isBeginning;
        var a = self.isEnd;
        if (0 === size) {
          /** @type {number} */
          self.progress = 0;
          /** @type {boolean} */
          self.isBeginning = self.isEnd = true;
        } else {
          /** @type {number} */
          self.progress = (data - self.minTranslate()) / size;
          /** @type {boolean} */
          self.isBeginning = self.progress <= 0;
          /** @type {boolean} */
          self.isEnd = self.progress >= 1;
        }
        if (self.isBeginning) {
          if (!len) {
            self.emit("onReachBeginning", self);
          }
        }
        if (self.isEnd) {
          if (!a) {
            self.emit("onReachEnd", self);
          }
        }
        if (self.params.watchSlidesProgress) {
          self.updateSlidesProgress(data);
        }
        self.emit("onProgress", self, self.progress);
      };
      /**
       * @return {undefined}
       */
      self.updateActiveIndex = function() {
        var index;
        var i;
        var count;
        var score = self.rtl ? self.translate : -self.translate;
        /** @type {number} */
        i = 0;
        for (;i < self.slidesGrid.length;i++) {
          if ("undefined" != typeof self.slidesGrid[i + 1]) {
            if (score >= self.slidesGrid[i] && score < self.slidesGrid[i + 1] - (self.slidesGrid[i + 1] - self.slidesGrid[i]) / 2) {
              /** @type {number} */
              index = i;
            } else {
              if (score >= self.slidesGrid[i]) {
                if (score < self.slidesGrid[i + 1]) {
                  /** @type {number} */
                  index = i + 1;
                }
              }
            }
          } else {
            if (score >= self.slidesGrid[i]) {
              /** @type {number} */
              index = i;
            }
          }
        }
        if (0 > index || "undefined" == typeof index) {
          /** @type {number} */
          index = 0;
        }
        /** @type {number} */
        count = Math.floor(index / self.params.slidesPerGroup);
        if (count >= self.snapGrid.length) {
          /** @type {number} */
          count = self.snapGrid.length - 1;
        }
        if (index !== self.activeIndex) {
          /** @type {number} */
          self.snapIndex = count;
          self.previousIndex = self.activeIndex;
          /** @type {(number|undefined)} */
          self.activeIndex = index;
          self.updateClasses();
        }
      };
      /**
       * @return {undefined}
       */
      self.updateClasses = function() {
        self.slides.removeClass(self.params.slideActiveClass + " " + self.params.slideNextClass + " " + self.params.slidePrevClass);
        var current = self.slides.eq(self.activeIndex);
        current.addClass(self.params.slideActiveClass);
        var codeSegments = current.next("." + self.params.slideClass).addClass(self.params.slideNextClass);
        if (self.params.loop) {
          if (0 === codeSegments.length) {
            self.slides.eq(0).addClass(self.params.slideNextClass);
          }
        }
        var resolveValues = current.prev("." + self.params.slideClass).addClass(self.params.slidePrevClass);
        if (self.params.loop && (0 === resolveValues.length && self.slides.eq(-1).addClass(self.params.slidePrevClass)), self.paginationContainer && self.paginationContainer.length > 0) {
          var i;
          var lab = self.params.loop ? Math.ceil((self.slides.length - 2 * self.loopedSlides) / self.params.slidesPerGroup) : self.snapGrid.length;
          if (self.params.loop ? (i = Math.ceil((self.activeIndex - self.loopedSlides) / self.params.slidesPerGroup), i > self.slides.length - 1 - 2 * self.loopedSlides && (i -= self.slides.length - 2 * self.loopedSlides), i > lab - 1 && (i -= lab), 0 > i && ("bullets" !== self.params.paginationType && (i = lab + i))) : i = "undefined" != typeof self.snapIndex ? self.snapIndex : self.activeIndex || 0, "bullets" === self.params.paginationType && (self.bullets && (self.bullets.length > 0 && (self.bullets.removeClass(self.params.bulletActiveClass), 
          self.paginationContainer.length > 1 ? self.bullets.each(function() {
            if ($(this).index() === i) {
              $(this).addClass(self.params.bulletActiveClass);
            }
          }) : self.bullets.eq(i).addClass(self.params.bulletActiveClass)))), "fraction" === self.params.paginationType && (self.paginationContainer.find("." + self.params.paginationCurrentClass).text(i + 1), self.paginationContainer.find("." + self.params.paginationTotalClass).text(lab)), "progress" === self.params.paginationType) {
            /** @type {number} */
            var fn = (i + 1) / lab;
            /** @type {number} */
            var original = fn;
            /** @type {number} */
            var bulk = 1;
            if (!self.isHorizontal()) {
              /** @type {number} */
              bulk = fn;
              /** @type {number} */
              original = 1;
            }
            self.paginationContainer.find("." + self.params.paginationProgressbarClass).transform("translate3d(0,0,0) scaleX(" + original + ") scaleY(" + bulk + ")").transition(self.params.speed);
          }
          if ("custom" === self.params.paginationType) {
            if (self.params.paginationCustomRender) {
              self.paginationContainer.html(self.params.paginationCustomRender(self, i + 1, lab));
              self.emit("onPaginationRendered", self, self.paginationContainer[0]);
            }
          }
        }
        if (!self.params.loop) {
          if (self.params.prevButton) {
            if (self.prevButton) {
              if (self.prevButton.length > 0) {
                if (self.isBeginning) {
                  self.prevButton.addClass(self.params.buttonDisabledClass);
                  if (self.params.a11y) {
                    if (self.a11y) {
                      self.a11y.disable(self.prevButton);
                    }
                  }
                } else {
                  self.prevButton.removeClass(self.params.buttonDisabledClass);
                  if (self.params.a11y) {
                    if (self.a11y) {
                      self.a11y.enable(self.prevButton);
                    }
                  }
                }
              }
            }
          }
          if (self.params.nextButton) {
            if (self.nextButton) {
              if (self.nextButton.length > 0) {
                if (self.isEnd) {
                  self.nextButton.addClass(self.params.buttonDisabledClass);
                  if (self.params.a11y) {
                    if (self.a11y) {
                      self.a11y.disable(self.nextButton);
                    }
                  }
                } else {
                  self.nextButton.removeClass(self.params.buttonDisabledClass);
                  if (self.params.a11y) {
                    if (self.a11y) {
                      self.a11y.enable(self.nextButton);
                    }
                  }
                }
              }
            }
          }
        }
      };
      /**
       * @return {undefined}
       */
      self.updatePagination = function() {
        if (self.params.pagination && (self.paginationContainer && self.paginationContainer.length > 0)) {
          /** @type {string} */
          var translated = "";
          if ("bullets" === self.params.paginationType) {
            var a = self.params.loop ? Math.ceil((self.slides.length - 2 * self.loopedSlides) / self.params.slidesPerGroup) : self.snapGrid.length;
            /** @type {number} */
            var b = 0;
            for (;a > b;b++) {
              translated += self.params.paginationBulletRender ? self.params.paginationBulletRender(b, self.params.bulletClass) : "<" + self.params.paginationElement + ' class="' + self.params.bulletClass + '"></' + self.params.paginationElement + ">";
            }
            self.paginationContainer.html(translated);
            self.bullets = self.paginationContainer.find("." + self.params.bulletClass);
            if (self.params.paginationClickable) {
              if (self.params.a11y) {
                if (self.a11y) {
                  self.a11y.initPagination();
                }
              }
            }
          }
          if ("fraction" === self.params.paginationType) {
            translated = self.params.paginationFractionRender ? self.params.paginationFractionRender(self, self.params.paginationCurrentClass, self.params.paginationTotalClass) : '<span class="' + self.params.paginationCurrentClass + '"></span> / <span class="' + self.params.paginationTotalClass + '"></span>';
            self.paginationContainer.html(translated);
          }
          if ("progress" === self.params.paginationType) {
            translated = self.params.paginationProgressRender ? self.params.paginationProgressRender(self, self.params.paginationProgressbarClass) : '<span class="' + self.params.paginationProgressbarClass + '"></span>';
            self.paginationContainer.html(translated);
          }
          if ("custom" !== self.params.paginationType) {
            self.emit("onPaginationRendered", self, self.paginationContainer[0]);
          }
        }
      };
      /**
       * @param {(boolean|number|string)} first
       * @return {undefined}
       */
      self.update = function(first) {
        /**
         * @return {undefined}
         */
        function some() {
          /** @type {number} */
          x = Math.min(Math.max(self.translate, self.maxTranslate()), self.minTranslate());
          self.setWrapperTranslate(x);
          self.updateActiveIndex();
          self.updateClasses();
        }
        if (self.updateContainerSize(), self.updateSlidesSize(), self.updateProgress(), self.updatePagination(), self.updateClasses(), self.params.scrollbar && (self.scrollbar && self.scrollbar.set()), first) {
          var c;
          var x;
          if (self.controller) {
            if (self.controller.spline) {
              self.controller.spline = void 0;
            }
          }
          if (self.params.freeMode) {
            some();
            if (self.params.autoHeight) {
              self.updateAutoHeight();
            }
          } else {
            c = ("auto" === self.params.slidesPerView || self.params.slidesPerView > 1) && (self.isEnd && !self.params.centeredSlides) ? self.slideTo(self.slides.length - 1, 0, false, true) : self.slideTo(self.activeIndex, 0, false, true);
            if (!c) {
              some();
            }
          }
        } else {
          if (self.params.autoHeight) {
            self.updateAutoHeight();
          }
        }
      };
      /**
       * @param {boolean} recurring
       * @return {undefined}
       */
      self.onResize = function(recurring) {
        if (self.params.breakpoints) {
          self.setBreakpoint();
        }
        var allowSwipeToPrev = self.params.allowSwipeToPrev;
        var allowSwipeToNext = self.params.allowSwipeToNext;
        /** @type {boolean} */
        self.params.allowSwipeToPrev = self.params.allowSwipeToNext = true;
        self.updateContainerSize();
        self.updateSlidesSize();
        if ("auto" === self.params.slidesPerView || (self.params.freeMode || recurring)) {
          self.updatePagination();
        }
        if (self.params.scrollbar) {
          if (self.scrollbar) {
            self.scrollbar.set();
          }
        }
        if (self.controller) {
          if (self.controller.spline) {
            self.controller.spline = void 0;
          }
        }
        /** @type {boolean} */
        var d = false;
        if (self.params.freeMode) {
          /** @type {number} */
          var x = Math.min(Math.max(self.translate, self.maxTranslate()), self.minTranslate());
          self.setWrapperTranslate(x);
          self.updateActiveIndex();
          self.updateClasses();
          if (self.params.autoHeight) {
            self.updateAutoHeight();
          }
        } else {
          self.updateClasses();
          d = ("auto" === self.params.slidesPerView || self.params.slidesPerView > 1) && (self.isEnd && !self.params.centeredSlides) ? self.slideTo(self.slides.length - 1, 0, false, true) : self.slideTo(self.activeIndex, 0, false, true);
        }
        if (self.params.lazyLoading) {
          if (!d) {
            if (self.lazy) {
              self.lazy.load();
            }
          }
        }
        self.params.allowSwipeToPrev = allowSwipeToPrev;
        self.params.allowSwipeToNext = allowSwipeToNext;
      };
      /** @type {Array} */
      var types = ["mousedown", "mousemove", "mouseup"];
      if (window.navigator.pointerEnabled) {
        /** @type {Array} */
        types = ["pointerdown", "pointermove", "pointerup"];
      } else {
        if (window.navigator.msPointerEnabled) {
          /** @type {Array} */
          types = ["MSPointerDown", "MSPointerMove", "MSPointerUp"];
        }
      }
      self.touchEvents = {
        start : self.support.touch || !self.params.simulateTouch ? "touchstart" : types[0],
        move : self.support.touch || !self.params.simulateTouch ? "touchmove" : types[1],
        end : self.support.touch || !self.params.simulateTouch ? "touchend" : types[2]
      };
      if (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) {
        ("container" === self.params.touchEventsTarget ? self.container : self.wrapper).addClass("swiper-wp8-" + self.params.direction);
      }
      /**
       * @param {boolean} value
       * @return {undefined}
       */
      self.initEvents = function(value) {
        /** @type {string} */
        var action = value ? "off" : "on";
        /** @type {string} */
        var method = value ? "removeEventListener" : "addEventListener";
        var node = "container" === self.params.touchEventsTarget ? self.container[0] : self.wrapper[0];
        var element = self.support.touch ? node : document;
        /** @type {boolean} */
        var c = !!self.params.nested;
        if (self.browser.ie) {
          node[method](self.touchEvents.start, self.onTouchStart, false);
          element[method](self.touchEvents.move, self.onTouchMove, c);
          element[method](self.touchEvents.end, self.onTouchEnd, false);
        } else {
          if (self.support.touch) {
            node[method](self.touchEvents.start, self.onTouchStart, false);
            node[method](self.touchEvents.move, self.onTouchMove, c);
            node[method](self.touchEvents.end, self.onTouchEnd, false);
          }
          if (!!target.simulateTouch) {
            if (!self.device.ios) {
              if (!self.device.android) {
                node[method]("mousedown", self.onTouchStart, false);
                document[method]("mousemove", self.onTouchMove, c);
                document[method]("mouseup", self.onTouchEnd, false);
              }
            }
          }
        }
        window[method]("resize", self.onResize);
        if (self.params.nextButton) {
          if (self.nextButton) {
            if (self.nextButton.length > 0) {
              self.nextButton[action]("click", self.onClickNext);
              if (self.params.a11y) {
                if (self.a11y) {
                  self.nextButton[action]("keydown", self.a11y.onEnterKey);
                }
              }
            }
          }
        }
        if (self.params.prevButton) {
          if (self.prevButton) {
            if (self.prevButton.length > 0) {
              self.prevButton[action]("click", self.onClickPrev);
              if (self.params.a11y) {
                if (self.a11y) {
                  self.prevButton[action]("keydown", self.a11y.onEnterKey);
                }
              }
            }
          }
        }
        if (self.params.pagination) {
          if (self.params.paginationClickable) {
            self.paginationContainer[action]("click", "." + self.params.bulletClass, self.onClickIndex);
            if (self.params.a11y) {
              if (self.a11y) {
                self.paginationContainer[action]("keydown", "." + self.params.bulletClass, self.a11y.onEnterKey);
              }
            }
          }
        }
        if (self.params.preventClicks || self.params.preventClicksPropagation) {
          node[method]("click", self.preventClicks, true);
        }
      };
      /**
       * @return {undefined}
       */
      self.attachEvents = function() {
        self.initEvents();
      };
      /**
       * @return {undefined}
       */
      self.detachEvents = function() {
        self.initEvents(true);
      };
      /** @type {boolean} */
      self.allowClick = true;
      /**
       * @param {Object} event
       * @return {undefined}
       */
      self.preventClicks = function(event) {
        if (!self.allowClick) {
          if (self.params.preventClicks) {
            event.preventDefault();
          }
          if (self.params.preventClicksPropagation) {
            if (self.animating) {
              event.stopPropagation();
              event.stopImmediatePropagation();
            }
          }
        }
      };
      /**
       * @param {Object} types
       * @return {undefined}
       */
      self.onClickNext = function(types) {
        types.preventDefault();
        if (!self.isEnd || self.params.loop) {
          self.slideNext();
        }
      };
      /**
       * @param {Object} types
       * @return {undefined}
       */
      self.onClickPrev = function(types) {
        types.preventDefault();
        if (!self.isBeginning || self.params.loop) {
          self.slidePrev();
        }
      };
      /**
       * @param {?} types
       * @return {undefined}
       */
      self.onClickIndex = function(types) {
        types.preventDefault();
        /** @type {number} */
        var i = $(this).index() * self.params.slidesPerGroup;
        if (self.params.loop) {
          i += self.loopedSlides;
        }
        self.slideTo(i);
      };
      /**
       * @param {Object} event
       * @return {?}
       */
      self.updateClickedSlide = function(event) {
        var element = bind(event, "." + self.params.slideClass);
        /** @type {boolean} */
        var attr = false;
        if (element) {
          /** @type {number} */
          var i = 0;
          for (;i < self.slides.length;i++) {
            if (self.slides[i] === element) {
              /** @type {boolean} */
              attr = true;
            }
          }
        }
        if (!element || !attr) {
          return self.clickedSlide = void 0, void(self.clickedIndex = void 0);
        }
        if (self.clickedSlide = element, self.clickedIndex = $(element).index(), self.params.slideToClickedSlide && (void 0 !== self.clickedIndex && self.clickedIndex !== self.activeIndex)) {
          var data_swiper_slide_index;
          var b = self.clickedIndex;
          if (self.params.loop) {
            if (self.animating) {
              return;
            }
            data_swiper_slide_index = $(self.clickedSlide).attr("data-swiper-slide-index");
            if (self.params.centeredSlides) {
              if (b < self.loopedSlides - self.params.slidesPerView / 2 || b > self.slides.length - self.loopedSlides + self.params.slidesPerView / 2) {
                self.fixLoop();
                b = self.wrapper.children("." + self.params.slideClass + '[data-swiper-slide-index="' + data_swiper_slide_index + '"]:not(.swiper-slide-duplicate)').eq(0).index();
                setTimeout(function() {
                  self.slideTo(b);
                }, 0);
              } else {
                self.slideTo(b);
              }
            } else {
              if (b > self.slides.length - self.params.slidesPerView) {
                self.fixLoop();
                b = self.wrapper.children("." + self.params.slideClass + '[data-swiper-slide-index="' + data_swiper_slide_index + '"]:not(.swiper-slide-duplicate)').eq(0).index();
                setTimeout(function() {
                  self.slideTo(b);
                }, 0);
              } else {
                self.slideTo(b);
              }
            }
          } else {
            self.slideTo(b);
          }
        }
      };
      var stack;
      var memory;
      var callback;
      var t;
      var factory;
      var value;
      var max;
      var E;
      var to;
      var G;
      /** @type {string} */
      var until = "input, select, textarea, button";
      /** @type {number} */
      var j = Date.now();
      /** @type {Array} */
      var sheets = [];
      /** @type {boolean} */
      self.animating = false;
      self.touches = {
        startX : 0,
        startY : 0,
        currentX : 0,
        currentY : 0,
        diff : 0
      };
      var mousemove;
      var server;
      if (self.onTouchStart = function(event) {
        if (event.originalEvent && (event = event.originalEvent), mousemove = "touchstart" === event.type, mousemove || (!("which" in event) || 3 !== event.which)) {
          if (self.params.noSwiping && bind(event, "." + self.params.noSwipingClass)) {
            return void(self.allowClick = true);
          }
          if (!self.params.swipeHandler || bind(event, self.params.swipeHandler)) {
            var startX = self.touches.currentX = "touchstart" === event.type ? event.targetTouches[0].pageX : event.pageX;
            var startY = self.touches.currentY = "touchstart" === event.type ? event.targetTouches[0].pageY : event.pageY;
            if (!(self.device.ios && (self.params.iOSEdgeSwipeDetection && startX <= self.params.iOSEdgeSwipeThreshold))) {
              if (stack = true, memory = false, callback = true, factory = void 0, server = void 0, self.touches.startX = startX, self.touches.startY = startY, t = Date.now(), self.allowClick = true, self.updateContainerSize(), self.swipeDirection = void 0, self.params.threshold > 0 && (E = false), "touchstart" !== event.type) {
                /** @type {boolean} */
                var e = true;
                if ($(event.target).is(until)) {
                  /** @type {boolean} */
                  e = false;
                }
                if (document.activeElement) {
                  if ($(document.activeElement).is(until)) {
                    document.activeElement.blur();
                  }
                }
                if (e) {
                  event.preventDefault();
                }
              }
              self.emit("onTouchStart", self, event);
            }
          }
        }
      }, self.onTouchMove = function(e) {
        if (e.originalEvent && (e = e.originalEvent), !mousemove || "mousemove" !== e.type) {
          if (e.preventedByNestedSwiper) {
            return self.touches.startX = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, void(self.touches.startY = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY);
          }
          if (self.params.onlyExternal) {
            return self.allowClick = false, void(stack && (self.touches.startX = self.touches.currentX = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, self.touches.startY = self.touches.currentY = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, t = Date.now()));
          }
          if (mousemove && (document.activeElement && (e.target === document.activeElement && $(e.target).is(until)))) {
            return memory = true, void(self.allowClick = false);
          }
          if (callback && self.emit("onTouchMove", self, e), !(e.targetTouches && e.targetTouches.length > 1)) {
            if (self.touches.currentX = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, self.touches.currentY = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, "undefined" == typeof factory) {
              /** @type {number} */
              var touchAngle = 180 * Math.atan2(Math.abs(self.touches.currentY - self.touches.startY), Math.abs(self.touches.currentX - self.touches.startX)) / Math.PI;
              /** @type {boolean} */
              factory = self.isHorizontal() ? touchAngle > self.params.touchAngle : 90 - touchAngle > self.params.touchAngle;
            }
            if (factory && self.emit("onTouchMoveOpposite", self, e), "undefined" == typeof server && (self.browser.ieTouch && ((self.touches.currentX !== self.touches.startX || self.touches.currentY !== self.touches.startY) && (server = true))), stack) {
              if (factory) {
                return void(stack = false);
              }
              if (server || !self.browser.ieTouch) {
                /** @type {boolean} */
                self.allowClick = false;
                self.emit("onSliderMove", self, e);
                e.preventDefault();
                if (self.params.touchMoveStopPropagation) {
                  if (!self.params.nested) {
                    e.stopPropagation();
                  }
                }
                if (!memory) {
                  if (target.loop) {
                    self.fixLoop();
                  }
                  max = self.getWrapperTranslate();
                  self.setWrapperTransition(0);
                  if (self.animating) {
                    self.wrapper.trigger("webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd");
                  }
                  if (self.params.autoplay) {
                    if (self.autoplaying) {
                      if (self.params.autoplayDisableOnInteraction) {
                        self.stopAutoplay();
                      } else {
                        self.pauseAutoplay();
                      }
                    }
                  }
                  /** @type {boolean} */
                  G = false;
                  if (self.params.grabCursor) {
                    /** @type {string} */
                    self.container[0].style.cursor = "move";
                    /** @type {string} */
                    self.container[0].style.cursor = "-webkit-grabbing";
                    /** @type {string} */
                    self.container[0].style.cursor = "-moz-grabbin";
                    /** @type {string} */
                    self.container[0].style.cursor = "grabbing";
                  }
                }
                /** @type {boolean} */
                memory = true;
                /** @type {number} */
                var min = self.touches.diff = self.isHorizontal() ? self.touches.currentX - self.touches.startX : self.touches.currentY - self.touches.startY;
                min *= self.params.touchRatio;
                if (self.rtl) {
                  /** @type {number} */
                  min = -min;
                }
                /** @type {string} */
                self.swipeDirection = min > 0 ? "prev" : "next";
                value = min + max;
                /** @type {boolean} */
                var f = true;
                if (min > 0 && value > self.minTranslate() ? (f = false, self.params.resistance && (value = self.minTranslate() - 1 + Math.pow(-self.minTranslate() + max + min, self.params.resistanceRatio))) : 0 > min && (value < self.maxTranslate() && (f = false, self.params.resistance && (value = self.maxTranslate() + 1 - Math.pow(self.maxTranslate() - max - min, self.params.resistanceRatio)))), f && (e.preventedByNestedSwiper = true), !self.params.allowSwipeToNext && ("next" === self.swipeDirection && 
                (max > value && (value = max))), !self.params.allowSwipeToPrev && ("prev" === self.swipeDirection && (value > max && (value = max))), self.params.followFinger) {
                  if (self.params.threshold > 0) {
                    if (!(Math.abs(min) > self.params.threshold || E)) {
                      return void(value = max);
                    }
                    if (!E) {
                      return E = true, self.touches.startX = self.touches.currentX, self.touches.startY = self.touches.currentY, value = max, void(self.touches.diff = self.isHorizontal() ? self.touches.currentX - self.touches.startX : self.touches.currentY - self.touches.startY);
                    }
                  }
                  if (self.params.freeMode || self.params.watchSlidesProgress) {
                    self.updateActiveIndex();
                  }
                  if (self.params.freeMode) {
                    if (0 === sheets.length) {
                      sheets.push({
                        position : self.touches[self.isHorizontal() ? "startX" : "startY"],
                        time : t
                      });
                    }
                    sheets.push({
                      position : self.touches[self.isHorizontal() ? "currentX" : "currentY"],
                      time : (new window.Date).getTime()
                    });
                  }
                  self.updateProgress(value);
                  self.setWrapperTranslate(value);
                }
              }
            }
          }
        }
      }, self.onTouchEnd = function(e) {
        if (e.originalEvent && (e = e.originalEvent), callback && self.emit("onTouchEnd", self, e), callback = false, stack) {
          if (self.params.grabCursor) {
            if (memory) {
              if (stack) {
                /** @type {string} */
                self.container[0].style.cursor = "move";
                /** @type {string} */
                self.container[0].style.cursor = "-webkit-grab";
                /** @type {string} */
                self.container[0].style.cursor = "-moz-grab";
                /** @type {string} */
                self.container[0].style.cursor = "grab";
              }
            }
          }
          /** @type {number} */
          var n = Date.now();
          /** @type {number} */
          var k = n - t;
          if (self.allowClick && (self.updateClickedSlide(e), self.emit("onTap", self, e), 300 > k && (n - j > 300 && (to && clearTimeout(to), to = setTimeout(function() {
            if (self) {
              if (self.params.paginationHide) {
                if (self.paginationContainer.length > 0) {
                  if (!$(e.target).hasClass(self.params.bulletClass)) {
                    self.paginationContainer.toggleClass(self.params.paginationHiddenClass);
                  }
                }
              }
              self.emit("onClick", self, e);
            }
          }, 300))), 300 > k && (300 > n - j && (to && clearTimeout(to), self.emit("onDoubleTap", self, e)))), j = Date.now(), setTimeout(function() {
            if (self) {
              /** @type {boolean} */
              self.allowClick = true;
            }
          }, 0), !stack || (!memory || (!self.swipeDirection || (0 === self.touches.diff || value === max)))) {
            return void(stack = memory = false);
          }
          /** @type {boolean} */
          stack = memory = false;
          var red;
          if (red = self.params.followFinger ? self.rtl ? self.translate : -self.translate : -value, self.params.freeMode) {
            if (red < -self.minTranslate()) {
              return void self.slideTo(self.activeIndex);
            }
            if (red > -self.maxTranslate()) {
              return void(self.slides.length < self.snapGrid.length ? self.slideTo(self.snapGrid.length - 1) : self.slideTo(self.slides.length - 1));
            }
            if (self.params.freeModeMomentum) {
              if (sheets.length > 1) {
                var a = sheets.pop();
                var b = sheets.pop();
                /** @type {number} */
                var endy = a.position - b.position;
                /** @type {number} */
                var length = a.time - b.time;
                /** @type {number} */
                self.velocity = endy / length;
                /** @type {number} */
                self.velocity = self.velocity / 2;
                if (Math.abs(self.velocity) < self.params.freeModeMinimumVelocity) {
                  /** @type {number} */
                  self.velocity = 0;
                }
                if (length > 150 || (new window.Date).getTime() - a.time > 300) {
                  /** @type {number} */
                  self.velocity = 0;
                }
              } else {
                /** @type {number} */
                self.velocity = 0;
              }
              /** @type {number} */
              sheets.length = 0;
              /** @type {number} */
              var momentumDuration = 1E3 * self.params.freeModeMomentumRatio;
              /** @type {number} */
              var path = self.velocity * momentumDuration;
              var x = self.translate + path;
              if (self.rtl) {
                /** @type {number} */
                x = -x;
              }
              var pdataCur;
              /** @type {boolean} */
              var freeModeMomentumBounce = false;
              /** @type {number} */
              var x_margin = 20 * Math.abs(self.velocity) * self.params.freeModeMomentumBounceRatio;
              if (x < self.maxTranslate()) {
                if (self.params.freeModeMomentumBounce) {
                  if (x + self.maxTranslate() < -x_margin) {
                    /** @type {number} */
                    x = self.maxTranslate() - x_margin;
                  }
                  pdataCur = self.maxTranslate();
                  /** @type {boolean} */
                  freeModeMomentumBounce = true;
                  /** @type {boolean} */
                  G = true;
                } else {
                  x = self.maxTranslate();
                }
              } else {
                if (x > self.minTranslate()) {
                  if (self.params.freeModeMomentumBounce) {
                    if (x - self.minTranslate() > x_margin) {
                      x = self.minTranslate() + x_margin;
                    }
                    pdataCur = self.minTranslate();
                    /** @type {boolean} */
                    freeModeMomentumBounce = true;
                    /** @type {boolean} */
                    G = true;
                  } else {
                    x = self.minTranslate();
                  }
                } else {
                  if (self.params.freeModeSticky) {
                    var i;
                    /** @type {number} */
                    var ln = 0;
                    /** @type {number} */
                    ln = 0;
                    for (;ln < self.snapGrid.length;ln += 1) {
                      if (self.snapGrid[ln] > -x) {
                        /** @type {number} */
                        i = ln;
                        break;
                      }
                    }
                    x = Math.abs(self.snapGrid[i] - x) < Math.abs(self.snapGrid[i - 1] - x) || "next" === self.swipeDirection ? self.snapGrid[i] : self.snapGrid[i - 1];
                    if (!self.rtl) {
                      /** @type {number} */
                      x = -x;
                    }
                  }
                }
              }
              if (0 !== self.velocity) {
                /** @type {number} */
                momentumDuration = self.rtl ? Math.abs((-x - self.translate) / self.velocity) : Math.abs((x - self.translate) / self.velocity);
              } else {
                if (self.params.freeModeSticky) {
                  return void self.slideReset();
                }
              }
              if (self.params.freeModeMomentumBounce && freeModeMomentumBounce) {
                self.updateProgress(pdataCur);
                self.setWrapperTransition(momentumDuration);
                self.setWrapperTranslate(x);
                self.onTransitionStart();
                /** @type {boolean} */
                self.animating = true;
                self.wrapper.transitionEnd(function() {
                  if (self) {
                    if (G) {
                      self.emit("onMomentumBounce", self);
                      self.setWrapperTransition(self.params.speed);
                      self.setWrapperTranslate(pdataCur);
                      self.wrapper.transitionEnd(function() {
                        if (self) {
                          self.onTransitionEnd();
                        }
                      });
                    }
                  }
                });
              } else {
                if (self.velocity) {
                  self.updateProgress(x);
                  self.setWrapperTransition(momentumDuration);
                  self.setWrapperTranslate(x);
                  self.onTransitionStart();
                  if (!self.animating) {
                    /** @type {boolean} */
                    self.animating = true;
                    self.wrapper.transitionEnd(function() {
                      if (self) {
                        self.onTransitionEnd();
                      }
                    });
                  }
                } else {
                  self.updateProgress(x);
                }
              }
              self.updateActiveIndex();
            }
            return void((!self.params.freeModeMomentum || k >= self.params.longSwipesMs) && (self.updateProgress(), self.updateActiveIndex()));
          }
          var key;
          /** @type {number} */
          var index = 0;
          var delta = self.slidesSizesGrid[0];
          /** @type {number} */
          key = 0;
          for (;key < self.slidesGrid.length;key += self.params.slidesPerGroup) {
            if ("undefined" != typeof self.slidesGrid[key + self.params.slidesPerGroup]) {
              if (red >= self.slidesGrid[key]) {
                if (red < self.slidesGrid[key + self.params.slidesPerGroup]) {
                  index = key;
                  /** @type {number} */
                  delta = self.slidesGrid[key + self.params.slidesPerGroup] - self.slidesGrid[key];
                }
              }
            } else {
              if (red >= self.slidesGrid[key]) {
                index = key;
                /** @type {number} */
                delta = self.slidesGrid[self.slidesGrid.length - 1] - self.slidesGrid[self.slidesGrid.length - 2];
              }
            }
          }
          /** @type {number} */
          var br = (red - self.slidesGrid[index]) / delta;
          if (k > self.params.longSwipesMs) {
            if (!self.params.longSwipes) {
              return void self.slideTo(self.activeIndex);
            }
            if ("next" === self.swipeDirection) {
              if (br >= self.params.longSwipesRatio) {
                self.slideTo(index + self.params.slidesPerGroup);
              } else {
                self.slideTo(index);
              }
            }
            if ("prev" === self.swipeDirection) {
              if (br > 1 - self.params.longSwipesRatio) {
                self.slideTo(index + self.params.slidesPerGroup);
              } else {
                self.slideTo(index);
              }
            }
          } else {
            if (!self.params.shortSwipes) {
              return void self.slideTo(self.activeIndex);
            }
            if ("next" === self.swipeDirection) {
              self.slideTo(index + self.params.slidesPerGroup);
            }
            if ("prev" === self.swipeDirection) {
              self.slideTo(index);
            }
          }
        }
      }, self._slideTo = function(index, funcToCall) {
        return self.slideTo(index, funcToCall, true, true);
      }, self.slideTo = function(index, lab, recurring, dataAndEvents) {
        if ("undefined" == typeof recurring) {
          /** @type {boolean} */
          recurring = true;
        }
        if ("undefined" == typeof index) {
          /** @type {number} */
          index = 0;
        }
        if (0 > index) {
          /** @type {number} */
          index = 0;
        }
        /** @type {number} */
        self.snapIndex = Math.floor(index / self.params.slidesPerGroup);
        if (self.snapIndex >= self.snapGrid.length) {
          /** @type {number} */
          self.snapIndex = self.snapGrid.length - 1;
        }
        /** @type {number} */
        var x = -self.snapGrid[self.snapIndex];
        if (self.params.autoplay) {
          if (self.autoplaying) {
            if (dataAndEvents || !self.params.autoplayDisableOnInteraction) {
              self.pauseAutoplay(lab);
            } else {
              self.stopAutoplay();
            }
          }
        }
        self.updateProgress(x);
        /** @type {number} */
        var i = 0;
        for (;i < self.slidesGrid.length;i++) {
          if (-Math.floor(100 * x) >= Math.floor(100 * self.slidesGrid[i])) {
            /** @type {number} */
            index = i;
          }
        }
        return!(!self.params.allowSwipeToNext && (x < self.translate && x < self.minTranslate())) && (!(!self.params.allowSwipeToPrev && (x > self.translate && (x > self.maxTranslate() && (self.activeIndex || 0) !== index))) && ("undefined" == typeof lab && (lab = self.params.speed), self.previousIndex = self.activeIndex || 0, self.activeIndex = index, self.rtl && -x === self.translate || !self.rtl && x === self.translate ? (self.params.autoHeight && self.updateAutoHeight(), self.updateClasses(), 
        "slide" !== self.params.effect && self.setWrapperTranslate(x), false) : (self.updateClasses(), self.onTransitionStart(recurring), 0 === lab ? (self.setWrapperTranslate(x), self.setWrapperTransition(0), self.onTransitionEnd(recurring)) : (self.setWrapperTranslate(x), self.setWrapperTransition(lab), self.animating || (self.animating = true, self.wrapper.transitionEnd(function() {
          if (self) {
            self.onTransitionEnd(recurring);
          }
        }))), true)));
      }, self.onTransitionStart = function(recurring) {
        if ("undefined" == typeof recurring) {
          /** @type {boolean} */
          recurring = true;
        }
        if (self.params.autoHeight) {
          self.updateAutoHeight();
        }
        if (self.lazy) {
          self.lazy.onTransitionStart();
        }
        if (recurring) {
          self.emit("onTransitionStart", self);
          if (self.activeIndex !== self.previousIndex) {
            self.emit("onSlideChangeStart", self);
            if (self.activeIndex > self.previousIndex) {
              self.emit("onSlideNextStart", self);
            } else {
              self.emit("onSlidePrevStart", self);
            }
          }
        }
      }, self.onTransitionEnd = function(recurring) {
        /** @type {boolean} */
        self.animating = false;
        self.setWrapperTransition(0);
        if ("undefined" == typeof recurring) {
          /** @type {boolean} */
          recurring = true;
        }
        if (self.lazy) {
          self.lazy.onTransitionEnd();
        }
        if (recurring) {
          self.emit("onTransitionEnd", self);
          if (self.activeIndex !== self.previousIndex) {
            self.emit("onSlideChangeEnd", self);
            if (self.activeIndex > self.previousIndex) {
              self.emit("onSlideNextEnd", self);
            } else {
              self.emit("onSlidePrevEnd", self);
            }
          }
        }
        if (self.params.hashnav) {
          if (self.hashnav) {
            self.hashnav.setHash();
          }
        }
      }, self.slideNext = function(recurring, funcToCall, dataAndEvents) {
        return self.params.loop ? !self.animating && (self.fixLoop(), self.container[0].clientLeft, self.slideTo(self.activeIndex + self.params.slidesPerGroup, funcToCall, recurring, dataAndEvents)) : self.slideTo(self.activeIndex + self.params.slidesPerGroup, funcToCall, recurring, dataAndEvents);
      }, self._slideNext = function(funcToCall) {
        return self.slideNext(true, funcToCall, true);
      }, self.slidePrev = function(recurring, funcToCall, dataAndEvents) {
        return self.params.loop ? !self.animating && (self.fixLoop(), self.container[0].clientLeft, self.slideTo(self.activeIndex - 1, funcToCall, recurring, dataAndEvents)) : self.slideTo(self.activeIndex - 1, funcToCall, recurring, dataAndEvents);
      }, self._slidePrev = function(funcToCall) {
        return self.slidePrev(true, funcToCall, true);
      }, self.slideReset = function(recurring, funcToCall, dataAndEvents) {
        return self.slideTo(self.activeIndex, funcToCall, recurring);
      }, self.setWrapperTransition = function(lab, isXML) {
        self.wrapper.transition(lab);
        if ("slide" !== self.params.effect) {
          if (self.effects[self.params.effect]) {
            self.effects[self.params.effect].setTransition(lab);
          }
        }
        if (self.params.parallax) {
          if (self.parallax) {
            self.parallax.setTransition(lab);
          }
        }
        if (self.params.scrollbar) {
          if (self.scrollbar) {
            self.scrollbar.setTransition(lab);
          }
        }
        if (self.params.control) {
          if (self.controller) {
            self.controller.setTransition(lab, isXML);
          }
        }
        self.emit("onSetTransition", self, lab);
      }, self.setWrapperTranslate = function(data, recurring, x) {
        /** @type {number} */
        var mode = 0;
        /** @type {number} */
        var id = 0;
        /** @type {number} */
        var g = 0;
        if (self.isHorizontal()) {
          mode = self.rtl ? -data : data;
        } else {
          /** @type {number} */
          id = data;
        }
        if (self.params.roundLengths) {
          mode = parseInt(mode);
          id = parseInt(id);
        }
        if (!self.params.virtualTranslate) {
          if (self.support.transforms3d) {
            self.wrapper.transform("translate3d(" + mode + "px, " + id + "px, " + g + "px)");
          } else {
            self.wrapper.transform("translate(" + mode + "px, " + id + "px)");
          }
        }
        self.translate = self.isHorizontal() ? mode : id;
        var nextSlide;
        /** @type {number} */
        var sDivisor = self.maxTranslate() - self.minTranslate();
        /** @type {number} */
        nextSlide = 0 === sDivisor ? 0 : (data - self.minTranslate()) / sDivisor;
        if (nextSlide !== self.progress) {
          self.updateProgress(data);
        }
        if (recurring) {
          self.updateActiveIndex();
        }
        if ("slide" !== self.params.effect) {
          if (self.effects[self.params.effect]) {
            self.effects[self.params.effect].setTranslate(self.translate);
          }
        }
        if (self.params.parallax) {
          if (self.parallax) {
            self.parallax.setTranslate(self.translate);
          }
        }
        if (self.params.scrollbar) {
          if (self.scrollbar) {
            self.scrollbar.setTranslate(self.translate);
          }
        }
        if (self.params.control) {
          if (self.controller) {
            self.controller.setTranslate(self.translate, x);
          }
        }
        self.emit("onSetTranslate", self, self.translate);
      }, self.getTranslate = function(el, y) {
        var components;
        var value;
        var curStyle;
        var transformMatrix;
        return "undefined" == typeof y && (y = "x"), self.params.virtualTranslate ? self.rtl ? -self.translate : self.translate : (curStyle = window.getComputedStyle(el, null), window.WebKitCSSMatrix ? (value = curStyle.transform || curStyle.webkitTransform, value.split(",").length > 6 && (value = value.split(", ").map(function(messageFormat) {
          return messageFormat.replace(",", ".");
        }).join(", ")), transformMatrix = new window.WebKitCSSMatrix("none" === value ? "" : value)) : (transformMatrix = curStyle.MozTransform || (curStyle.OTransform || (curStyle.MsTransform || (curStyle.msTransform || (curStyle.transform || curStyle.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"))))), components = transformMatrix.toString().split(",")), "x" === y && (value = window.WebKitCSSMatrix ? transformMatrix.m41 : 16 === components.length ? parseFloat(components[12]) : 
        parseFloat(components[4])), "y" === y && (value = window.WebKitCSSMatrix ? transformMatrix.m42 : 16 === components.length ? parseFloat(components[13]) : parseFloat(components[5])), self.rtl && (value && (value = -value)), value || 0);
      }, self.getWrapperTranslate = function(y) {
        return "undefined" == typeof y && (y = self.isHorizontal() ? "x" : "y"), self.getTranslate(self.wrapper[0], y);
      }, self.observers = [], self.initObservers = function() {
        if (self.params.observeParents) {
          var codeSegments = self.container.parents();
          /** @type {number} */
          var i = 0;
          for (;i < codeSegments.length;i++) {
            initialize(codeSegments[i]);
          }
        }
        initialize(self.container[0], {
          childList : false
        });
        initialize(self.wrapper[0], {
          attributes : false
        });
      }, self.disconnectObservers = function() {
        /** @type {number} */
        var i = 0;
        for (;i < self.observers.length;i++) {
          self.observers[i].disconnect();
        }
        /** @type {Array} */
        self.observers = [];
      }, self.createLoop = function() {
        self.wrapper.children("." + self.params.slideClass + "." + self.params.slideDuplicateClass).remove();
        var params = self.wrapper.children("." + self.params.slideClass);
        if (!("auto" !== self.params.slidesPerView)) {
          if (!self.params.loopedSlides) {
            self.params.loopedSlides = params.length;
          }
        }
        /** @type {number} */
        self.loopedSlides = parseInt(self.params.loopedSlides || self.params.slidesPerView, 10);
        self.loopedSlides = self.loopedSlides + self.params.loopAdditionalSlides;
        if (self.loopedSlides > params.length) {
          self.loopedSlides = params.length;
        }
        var i;
        /** @type {Array} */
        var configList = [];
        /** @type {Array} */
        var items = [];
        params.each(function(i, name) {
          var html = $(this);
          if (i < self.loopedSlides) {
            items.push(name);
          }
          if (i < params.length) {
            if (i >= params.length - self.loopedSlides) {
              configList.push(name);
            }
          }
          html.attr("data-swiper-slide-index", i);
        });
        /** @type {number} */
        i = 0;
        for (;i < items.length;i++) {
          self.wrapper.append($(items[i].cloneNode(true)).addClass(self.params.slideDuplicateClass));
        }
        /** @type {number} */
        i = configList.length - 1;
        for (;i >= 0;i--) {
          self.wrapper.prepend($(configList[i].cloneNode(true)).addClass(self.params.slideDuplicateClass));
        }
      }, self.destroyLoop = function() {
        self.wrapper.children("." + self.params.slideClass + "." + self.params.slideDuplicateClass).remove();
        self.slides.removeAttr("data-swiper-slide-index");
      }, self.reLoop = function(dataAndEvents) {
        /** @type {number} */
        var index = self.activeIndex - self.loopedSlides;
        self.destroyLoop();
        self.createLoop();
        self.updateSlidesSize();
        if (dataAndEvents) {
          self.slideTo(index + self.loopedSlides, 0, false);
        }
      }, self.fixLoop = function() {
        var i;
        if (self.activeIndex < self.loopedSlides) {
          i = self.slides.length - 3 * self.loopedSlides + self.activeIndex;
          i += self.loopedSlides;
          self.slideTo(i, 0, false, true);
        } else {
          if ("auto" === self.params.slidesPerView && self.activeIndex >= 2 * self.loopedSlides || self.activeIndex > self.slides.length - 2 * self.params.slidesPerView) {
            i = -self.slides.length + self.activeIndex + self.loopedSlides;
            i += self.loopedSlides;
            self.slideTo(i, 0, false, true);
          }
        }
      }, self.appendSlide = function(a) {
        if (self.params.loop && self.destroyLoop(), "object" == typeof a && a.length) {
          /** @type {number} */
          var i = 0;
          for (;i < a.length;i++) {
            if (a[i]) {
              self.wrapper.append(a[i]);
            }
          }
        } else {
          self.wrapper.append(a);
        }
        if (self.params.loop) {
          self.createLoop();
        }
        if (!(self.params.observer && self.support.observer)) {
          self.update(true);
        }
      }, self.prependSlide = function(data) {
        if (self.params.loop) {
          self.destroyLoop();
        }
        var e = self.activeIndex + 1;
        if ("object" == typeof data && data.length) {
          /** @type {number} */
          var i = 0;
          for (;i < data.length;i++) {
            if (data[i]) {
              self.wrapper.prepend(data[i]);
            }
          }
          e = self.activeIndex + data.length;
        } else {
          self.wrapper.prepend(data);
        }
        if (self.params.loop) {
          self.createLoop();
        }
        if (!(self.params.observer && self.support.observer)) {
          self.update(true);
        }
        self.slideTo(e, 0, false);
      }, self.removeSlide = function(b) {
        if (self.params.loop) {
          self.destroyLoop();
          self.slides = self.wrapper.children("." + self.params.slideClass);
        }
        var i;
        var index = self.activeIndex;
        if ("object" == typeof b && b.length) {
          /** @type {number} */
          var bi = 0;
          for (;bi < b.length;bi++) {
            i = b[bi];
            if (self.slides[i]) {
              self.slides.eq(i).remove();
            }
            if (index > i) {
              index--;
            }
          }
          /** @type {number} */
          index = Math.max(index, 0);
        } else {
          /** @type {Array} */
          i = b;
          if (self.slides[i]) {
            self.slides.eq(i).remove();
          }
          if (index > i) {
            index--;
          }
          /** @type {number} */
          index = Math.max(index, 0);
        }
        if (self.params.loop) {
          self.createLoop();
        }
        if (!(self.params.observer && self.support.observer)) {
          self.update(true);
        }
        if (self.params.loop) {
          self.slideTo(index + self.loopedSlides, 0, false);
        } else {
          self.slideTo(index, 0, false);
        }
      }, self.removeAllSlides = function() {
        /** @type {Array} */
        var pos = [];
        /** @type {number} */
        var cur = 0;
        for (;cur < self.slides.length;cur++) {
          pos.push(cur);
        }
        self.removeSlide(pos);
      }, self.effects = {
        fade : {
          /**
           * @return {undefined}
           */
          setTranslate : function() {
            /** @type {number} */
            var index = 0;
            for (;index < self.slides.length;index++) {
              var $li = self.slides.eq(index);
              var slideOffset = $li[0].swiperSlideOffset;
              /** @type {number} */
              var move = -slideOffset;
              if (!self.params.virtualTranslate) {
                move -= self.translate;
              }
              /** @type {number} */
              var onMove = 0;
              if (!self.isHorizontal()) {
                /** @type {number} */
                onMove = move;
                /** @type {number} */
                move = 0;
              }
              /** @type {number} */
              var toOpacity = self.params.fade.crossFade ? Math.max(1 - Math.abs($li[0].progress), 0) : 1 + Math.min(Math.max($li[0].progress, -1), 0);
              $li.css({
                opacity : toOpacity
              }).transform("translate3d(" + move + "px, " + onMove + "px, 0px)");
            }
          },
          /**
           * @param {Object} lab
           * @return {undefined}
           */
          setTransition : function(lab) {
            if (self.slides.transition(lab), self.params.virtualTranslate && 0 !== lab) {
              /** @type {boolean} */
              var b = false;
              self.slides.transitionEnd(function() {
                if (!b && self) {
                  /** @type {boolean} */
                  b = true;
                  /** @type {boolean} */
                  self.animating = false;
                  /** @type {Array} */
                  var events = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"];
                  /** @type {number} */
                  var e = 0;
                  for (;e < events.length;e++) {
                    self.wrapper.trigger(events[e]);
                  }
                }
              });
            }
          }
        },
        flip : {
          /**
           * @return {undefined}
           */
          setTranslate : function() {
            /** @type {number} */
            var i = 0;
            for (;i < self.slides.length;i++) {
              var container = self.slides.eq(i);
              var value = container[0].progress;
              if (self.params.flip.limitRotation) {
                /** @type {number} */
                value = Math.max(Math.min(container[0].progress, 1), -1);
              }
              var slideOffset = container[0].swiperSlideOffset;
              /** @type {number} */
              var destination = -180 * value;
              /** @type {number} */
              var result = destination;
              /** @type {number} */
              var h = 0;
              /** @type {number} */
              var curr = -slideOffset;
              /** @type {number} */
              var prev = 0;
              if (self.isHorizontal() ? self.rtl && (result = -result) : (prev = curr, curr = 0, h = -result, result = 0), container[0].style.zIndex = -Math.abs(Math.round(value)) + self.slides.length, self.params.flip.slideShadows) {
                var tooltip = self.isHorizontal() ? container.find(".swiper-slide-shadow-left") : container.find(".swiper-slide-shadow-top");
                var ul = self.isHorizontal() ? container.find(".swiper-slide-shadow-right") : container.find(".swiper-slide-shadow-bottom");
                if (0 === tooltip.length) {
                  tooltip = $('<div class="swiper-slide-shadow-' + (self.isHorizontal() ? "left" : "top") + '"></div>');
                  container.append(tooltip);
                }
                if (0 === ul.length) {
                  ul = $('<div class="swiper-slide-shadow-' + (self.isHorizontal() ? "right" : "bottom") + '"></div>');
                  container.append(ul);
                }
                if (tooltip.length) {
                  /** @type {number} */
                  tooltip[0].style.opacity = Math.max(-value, 0);
                }
                if (ul.length) {
                  /** @type {number} */
                  ul[0].style.opacity = Math.max(value, 0);
                }
              }
              container.transform("translate3d(" + curr + "px, " + prev + "px, 0px) rotateX(" + h + "deg) rotateY(" + result + "deg)");
            }
          },
          /**
           * @param {Object} lab
           * @return {undefined}
           */
          setTransition : function(lab) {
            if (self.slides.transition(lab).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(lab), self.params.virtualTranslate && 0 !== lab) {
              /** @type {boolean} */
              var c = false;
              self.slides.eq(self.activeIndex).transitionEnd(function() {
                if (!c && (self && $(this).hasClass(self.params.slideActiveClass))) {
                  /** @type {boolean} */
                  c = true;
                  /** @type {boolean} */
                  self.animating = false;
                  /** @type {Array} */
                  var events = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"];
                  /** @type {number} */
                  var e = 0;
                  for (;e < events.length;e++) {
                    self.wrapper.trigger(events[e]);
                  }
                }
              });
            }
          }
        },
        cube : {
          /**
           * @return {undefined}
           */
          setTranslate : function() {
            var ul;
            /** @type {number} */
            var oDelta = 0;
            if (self.params.cube.shadow) {
              if (self.isHorizontal()) {
                ul = self.wrapper.find(".swiper-cube-shadow");
                if (0 === ul.length) {
                  ul = $('<div class="swiper-cube-shadow"></div>');
                  self.wrapper.append(ul);
                }
                ul.css({
                  height : self.width + "px"
                });
              } else {
                ul = self.container.find(".swiper-cube-shadow");
                if (0 === ul.length) {
                  ul = $('<div class="swiper-cube-shadow"></div>');
                  self.container.append(ul);
                }
              }
            }
            /** @type {number} */
            var index = 0;
            for (;index < self.slides.length;index++) {
              var el = self.slides.eq(index);
              /** @type {number} */
              var angle = 90 * index;
              /** @type {number} */
              var height = Math.floor(angle / 360);
              if (self.rtl) {
                /** @type {number} */
                angle = -angle;
                /** @type {number} */
                height = Math.floor(-angle / 360);
              }
              /** @type {number} */
              var limit = Math.max(Math.min(el[0].progress, 1), -1);
              /** @type {number} */
              var a = 0;
              /** @type {number} */
              var waitMsg = 0;
              /** @type {number} */
              var width = 0;
              if (index % 4 === 0) {
                /** @type {number} */
                a = 4 * -height * self.size;
                /** @type {number} */
                width = 0;
              } else {
                if ((index - 1) % 4 === 0) {
                  /** @type {number} */
                  a = 0;
                  /** @type {number} */
                  width = 4 * -height * self.size;
                } else {
                  if ((index - 2) % 4 === 0) {
                    a = self.size + 4 * height * self.size;
                    width = self.size;
                  } else {
                    if ((index - 3) % 4 === 0) {
                      /** @type {number} */
                      a = -self.size;
                      /** @type {number} */
                      width = 3 * self.size + 4 * self.size * height;
                    }
                  }
                }
              }
              if (self.rtl) {
                /** @type {number} */
                a = -a;
              }
              if (!self.isHorizontal()) {
                /** @type {number} */
                waitMsg = a;
                /** @type {number} */
                a = 0;
              }
              /** @type {string} */
              var lab = "rotateX(" + (self.isHorizontal() ? 0 : -angle) + "deg) rotateY(" + (self.isHorizontal() ? angle : 0) + "deg) translate3d(" + a + "px, " + waitMsg + "px, " + width + "px)";
              if (1 >= limit && (limit > -1 && (oDelta = 90 * index + 90 * limit, self.rtl && (oDelta = 90 * -index - 90 * limit))), el.transform(lab), self.params.cube.slideShadows) {
                var tooltip = self.isHorizontal() ? el.find(".swiper-slide-shadow-left") : el.find(".swiper-slide-shadow-top");
                var li = self.isHorizontal() ? el.find(".swiper-slide-shadow-right") : el.find(".swiper-slide-shadow-bottom");
                if (0 === tooltip.length) {
                  tooltip = $('<div class="swiper-slide-shadow-' + (self.isHorizontal() ? "left" : "top") + '"></div>');
                  el.append(tooltip);
                }
                if (0 === li.length) {
                  li = $('<div class="swiper-slide-shadow-' + (self.isHorizontal() ? "right" : "bottom") + '"></div>');
                  el.append(li);
                }
                if (tooltip.length) {
                  /** @type {number} */
                  tooltip[0].style.opacity = Math.max(-limit, 0);
                }
                if (li.length) {
                  /** @type {number} */
                  li[0].style.opacity = Math.max(limit, 0);
                }
              }
            }
            if (self.wrapper.css({
              "-webkit-transform-origin" : "50% 50% -" + self.size / 2 + "px",
              "-moz-transform-origin" : "50% 50% -" + self.size / 2 + "px",
              "-ms-transform-origin" : "50% 50% -" + self.size / 2 + "px",
              "transform-origin" : "50% 50% -" + self.size / 2 + "px"
            }), self.params.cube.shadow) {
              if (self.isHorizontal()) {
                ul.transform("translate3d(0px, " + (self.width / 2 + self.params.cube.shadowOffset) + "px, " + -self.width / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + self.params.cube.shadowScale + ")");
              } else {
                /** @type {number} */
                var now = Math.abs(oDelta) - 90 * Math.floor(Math.abs(oDelta) / 90);
                /** @type {number} */
                var time = 1.5 - (Math.sin(2 * now * Math.PI / 360) / 2 + Math.cos(2 * now * Math.PI / 360) / 2);
                var shadowScale = self.params.cube.shadowScale;
                /** @type {number} */
                var speed = self.params.cube.shadowScale / time;
                var shadowOffset = self.params.cube.shadowOffset;
                ul.transform("scale3d(" + shadowScale + ", 1, " + speed + ") translate3d(0px, " + (self.height / 2 + shadowOffset) + "px, " + -self.height / 2 / speed + "px) rotateX(-90deg)");
              }
            }
            /** @type {number} */
            var t = self.isSafari || self.isUiWebView ? -self.size / 2 : 0;
            self.wrapper.transform("translate3d(0px,0," + t + "px) rotateX(" + (self.isHorizontal() ? 0 : oDelta) + "deg) rotateY(" + (self.isHorizontal() ? -oDelta : 0) + "deg)");
          },
          /**
           * @param {Object} lab
           * @return {undefined}
           */
          setTransition : function(lab) {
            self.slides.transition(lab).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(lab);
            if (self.params.cube.shadow) {
              if (!self.isHorizontal()) {
                self.container.find(".swiper-cube-shadow").transition(lab);
              }
            }
          }
        },
        coverflow : {
          /**
           * @return {undefined}
           */
          setTranslate : function() {
            var t = self.translate;
            /** @type {number} */
            var center = self.isHorizontal() ? -t + self.width / 2 : -t + self.height / 2;
            var utcOffset = self.isHorizontal() ? self.params.coverflow.rotate : -self.params.coverflow.rotate;
            var translate = self.params.coverflow.depth;
            /** @type {number} */
            var i = 0;
            var l = self.slides.length;
            for (;l > i;i++) {
              var container = self.slides.eq(i);
              var slideSize = self.slidesSizesGrid[i];
              var slideOffset = container[0].swiperSlideOffset;
              /** @type {number} */
              var offsetMultiplier = (center - slideOffset - slideSize / 2) / slideSize * self.params.coverflow.modifier;
              /** @type {number} */
              var oDelta = self.isHorizontal() ? utcOffset * offsetMultiplier : 0;
              /** @type {number} */
              var marginTop = self.isHorizontal() ? 0 : utcOffset * offsetMultiplier;
              /** @type {number} */
              var distY = -translate * Math.abs(offsetMultiplier);
              /** @type {number} */
              var distX = self.isHorizontal() ? 0 : self.params.coverflow.stretch * offsetMultiplier;
              /** @type {number} */
              var ot = self.isHorizontal() ? self.params.coverflow.stretch * offsetMultiplier : 0;
              if (Math.abs(ot) < 0.001) {
                /** @type {number} */
                ot = 0;
              }
              if (Math.abs(distX) < 0.001) {
                /** @type {number} */
                distX = 0;
              }
              if (Math.abs(distY) < 0.001) {
                /** @type {number} */
                distY = 0;
              }
              if (Math.abs(oDelta) < 0.001) {
                /** @type {number} */
                oDelta = 0;
              }
              if (Math.abs(marginTop) < 0.001) {
                /** @type {number} */
                marginTop = 0;
              }
              /** @type {string} */
              var lab = "translate3d(" + ot + "px," + distX + "px," + distY + "px)  rotateX(" + marginTop + "deg) rotateY(" + oDelta + "deg)";
              if (container.transform(lab), container[0].style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1, self.params.coverflow.slideShadows) {
                var tooltip = self.isHorizontal() ? container.find(".swiper-slide-shadow-left") : container.find(".swiper-slide-shadow-top");
                var ul = self.isHorizontal() ? container.find(".swiper-slide-shadow-right") : container.find(".swiper-slide-shadow-bottom");
                if (0 === tooltip.length) {
                  tooltip = $('<div class="swiper-slide-shadow-' + (self.isHorizontal() ? "left" : "top") + '"></div>');
                  container.append(tooltip);
                }
                if (0 === ul.length) {
                  ul = $('<div class="swiper-slide-shadow-' + (self.isHorizontal() ? "right" : "bottom") + '"></div>');
                  container.append(ul);
                }
                if (tooltip.length) {
                  /** @type {number} */
                  tooltip[0].style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
                }
                if (ul.length) {
                  /** @type {number} */
                  ul[0].style.opacity = -offsetMultiplier > 0 ? -offsetMultiplier : 0;
                }
              }
            }
            if (self.browser.ie) {
              var ws = self.wrapper[0].style;
              /** @type {string} */
              ws.perspectiveOrigin = center + "px 50%";
            }
          },
          /**
           * @param {Object} lab
           * @return {undefined}
           */
          setTransition : function(lab) {
            self.slides.transition(lab).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(lab);
          }
        }
      }, self.lazy = {
        initialImageLoaded : false,
        /**
         * @param {number} index
         * @param {boolean} recurring
         * @return {undefined}
         */
        loadImageInSlide : function(index, recurring) {
          if ("undefined" != typeof index && ("undefined" == typeof recurring && (recurring = true), 0 !== self.slides.length)) {
            var m = self.slides.eq(index);
            var parts = m.find(".swiper-lazy:not(.swiper-lazy-loaded):not(.swiper-lazy-loading)");
            if (!!m.hasClass("swiper-lazy")) {
              if (!m.hasClass("swiper-lazy-loaded")) {
                if (!m.hasClass("swiper-lazy-loading")) {
                  parts = parts.add(m[0]);
                }
              }
            }
            if (0 !== parts.length) {
              parts.each(function() {
                var element = $(this);
                element.addClass("swiper-lazy-loading");
                var params = element.attr("data-background");
                var data = element.attr("data-src");
                var source = element.attr("data-srcset");
                self.loadImage(element[0], data || params, source, false, function() {
                  if (params ? (element.css("background-image", 'url("' + params + '")'), element.removeAttr("data-background")) : (source && (element.attr("srcset", source), element.removeAttr("data-srcset")), data && (element.attr("src", data), element.removeAttr("data-src"))), element.addClass("swiper-lazy-loaded").removeClass("swiper-lazy-loading"), m.find(".swiper-lazy-preloader, .preloader").remove(), self.params.loop && recurring) {
                    var data_swiper_slide_index = m.attr("data-swiper-slide-index");
                    if (m.hasClass(self.params.slideDuplicateClass)) {
                      var pos = self.wrapper.children('[data-swiper-slide-index="' + data_swiper_slide_index + '"]:not(.' + self.params.slideDuplicateClass + ")");
                      self.lazy.loadImageInSlide(pos.index(), false);
                    } else {
                      var e = self.wrapper.children("." + self.params.slideDuplicateClass + '[data-swiper-slide-index="' + data_swiper_slide_index + '"]');
                      self.lazy.loadImageInSlide(e.index(), false);
                    }
                  }
                  self.emit("onLazyImageReady", self, m[0], element[0]);
                });
                self.emit("onLazyImageLoad", self, m[0], element[0]);
              });
            }
          }
        },
        /**
         * @return {undefined}
         */
        load : function() {
          var i;
          if (self.params.watchSlidesVisibility) {
            self.wrapper.children("." + self.params.slideVisibleClass).each(function() {
              self.lazy.loadImageInSlide($(this).index());
            });
          } else {
            if (self.params.slidesPerView > 1) {
              i = self.activeIndex;
              for (;i < self.activeIndex + self.params.slidesPerView;i++) {
                if (self.slides[i]) {
                  self.lazy.loadImageInSlide(i);
                }
              }
            } else {
              self.lazy.loadImageInSlide(self.activeIndex);
            }
          }
          if (self.params.lazyLoadingInPrevNext) {
            if (self.params.slidesPerView > 1 || self.params.lazyLoadingInPrevNextAmount && self.params.lazyLoadingInPrevNextAmount > 1) {
              var newmax = self.params.lazyLoadingInPrevNextAmount;
              var val = self.params.slidesPerView;
              /** @type {number} */
              var l = Math.min(self.activeIndex + val + Math.max(newmax, val), self.slides.length);
              /** @type {number} */
              var mediaBlockCount = Math.max(self.activeIndex - Math.max(val, newmax), 0);
              i = self.activeIndex + self.params.slidesPerView;
              for (;l > i;i++) {
                if (self.slides[i]) {
                  self.lazy.loadImageInSlide(i);
                }
              }
              /** @type {number} */
              i = mediaBlockCount;
              for (;i < self.activeIndex;i++) {
                if (self.slides[i]) {
                  self.lazy.loadImageInSlide(i);
                }
              }
            } else {
              var pos = self.wrapper.children("." + self.params.slideNextClass);
              if (pos.length > 0) {
                self.lazy.loadImageInSlide(pos.index());
              }
              var $slide = self.wrapper.children("." + self.params.slidePrevClass);
              if ($slide.length > 0) {
                self.lazy.loadImageInSlide($slide.index());
              }
            }
          }
        },
        /**
         * @return {undefined}
         */
        onTransitionStart : function() {
          if (self.params.lazyLoading) {
            if (self.params.lazyLoadingOnTransitionStart || !self.params.lazyLoadingOnTransitionStart && !self.lazy.initialImageLoaded) {
              self.lazy.load();
            }
          }
        },
        /**
         * @return {undefined}
         */
        onTransitionEnd : function() {
          if (self.params.lazyLoading) {
            if (!self.params.lazyLoadingOnTransitionStart) {
              self.lazy.load();
            }
          }
        }
      }, self.scrollbar = {
        isTouched : false,
        /**
         * @param {Event} e
         * @return {undefined}
         */
        setDragPosition : function(e) {
          var req = self.scrollbar;
          var c = self.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX || e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY || e.clientY;
          /** @type {number} */
          var text = c - req.track.offset()[self.isHorizontal() ? "left" : "top"] - req.dragSize / 2;
          /** @type {number} */
          var textAlt = -self.minTranslate() * req.moveDivider;
          /** @type {number} */
          var source = -self.maxTranslate() * req.moveDivider;
          if (textAlt > text) {
            /** @type {number} */
            text = textAlt;
          } else {
            if (text > source) {
              /** @type {number} */
              text = source;
            }
          }
          /** @type {number} */
          text = -text / req.moveDivider;
          self.updateProgress(text);
          self.setWrapperTranslate(text, true);
        },
        /**
         * @param {Event} event
         * @return {undefined}
         */
        dragStart : function(event) {
          var data = self.scrollbar;
          /** @type {boolean} */
          data.isTouched = true;
          event.preventDefault();
          event.stopPropagation();
          data.setDragPosition(event);
          clearTimeout(data.dragTimeout);
          data.track.transition(0);
          if (self.params.scrollbarHide) {
            data.track.css("opacity", 1);
          }
          self.wrapper.transition(100);
          data.drag.transition(100);
          self.emit("onScrollbarDragStart", self);
        },
        /**
         * @param {Event} e
         * @return {undefined}
         */
        dragMove : function(e) {
          var event = self.scrollbar;
          if (event.isTouched) {
            if (e.preventDefault) {
              e.preventDefault();
            } else {
              /** @type {boolean} */
              e.returnValue = false;
            }
            event.setDragPosition(e);
            self.wrapper.transition(0);
            event.track.transition(0);
            event.drag.transition(0);
            self.emit("onScrollbarDragMove", self);
          }
        },
        /**
         * @param {?} e
         * @return {undefined}
         */
        dragEnd : function(e) {
          var item = self.scrollbar;
          if (item.isTouched) {
            /** @type {boolean} */
            item.isTouched = false;
            if (self.params.scrollbarHide) {
              clearTimeout(item.dragTimeout);
              /** @type {number} */
              item.dragTimeout = setTimeout(function() {
                item.track.css("opacity", 0);
                item.track.transition(400);
              }, 1E3);
            }
            self.emit("onScrollbarDragEnd", self);
            if (self.params.scrollbarSnapOnRelease) {
              self.slideReset();
            }
          }
        },
        /**
         * @return {undefined}
         */
        enableDraggable : function() {
          var item = self.scrollbar;
          var element = self.support.touch ? item.track : document;
          $(item.track).on(self.touchEvents.start, item.dragStart);
          $(element).on(self.touchEvents.move, item.dragMove);
          $(element).on(self.touchEvents.end, item.dragEnd);
        },
        /**
         * @return {undefined}
         */
        disableDraggable : function() {
          var item = self.scrollbar;
          var element = self.support.touch ? item.track : document;
          $(item.track).off(self.touchEvents.start, item.dragStart);
          $(element).off(self.touchEvents.move, item.dragMove);
          $(element).off(self.touchEvents.end, item.dragEnd);
        },
        /**
         * @return {undefined}
         */
        set : function() {
          if (self.params.scrollbar) {
            var data = self.scrollbar;
            data.track = $(self.params.scrollbar);
            if (self.params.uniqueNavElements) {
              if ("string" == typeof self.params.scrollbar) {
                if (data.track.length > 1) {
                  if (1 === self.container.find(self.params.scrollbar).length) {
                    data.track = self.container.find(self.params.scrollbar);
                  }
                }
              }
            }
            data.drag = data.track.find(".swiper-scrollbar-drag");
            if (0 === data.drag.length) {
              data.drag = $('<div class="swiper-scrollbar-drag"></div>');
              data.track.append(data.drag);
            }
            /** @type {string} */
            data.drag[0].style.width = "";
            /** @type {string} */
            data.drag[0].style.height = "";
            data.trackSize = self.isHorizontal() ? data.track[0].offsetWidth : data.track[0].offsetHeight;
            /** @type {number} */
            data.divider = self.size / self.virtualSize;
            /** @type {number} */
            data.moveDivider = data.divider * (data.trackSize / self.size);
            /** @type {number} */
            data.dragSize = data.trackSize * data.divider;
            if (self.isHorizontal()) {
              /** @type {string} */
              data.drag[0].style.width = data.dragSize + "px";
            } else {
              /** @type {string} */
              data.drag[0].style.height = data.dragSize + "px";
            }
            if (data.divider >= 1) {
              /** @type {string} */
              data.track[0].style.display = "none";
            } else {
              /** @type {string} */
              data.track[0].style.display = "";
            }
            if (self.params.scrollbarHide) {
              /** @type {number} */
              data.track[0].style.opacity = 0;
            }
          }
        },
        /**
         * @return {undefined}
         */
        setTranslate : function() {
          if (self.params.scrollbar) {
            var i;
            var data = self.scrollbar;
            var val = (self.translate || 0, data.dragSize);
            /** @type {number} */
            i = (data.trackSize - data.dragSize) * self.progress;
            if (self.rtl && self.isHorizontal()) {
              /** @type {number} */
              i = -i;
              if (i > 0) {
                /** @type {number} */
                val = data.dragSize - i;
                /** @type {number} */
                i = 0;
              } else {
                if (-i + data.dragSize > data.trackSize) {
                  val = data.trackSize + i;
                }
              }
            } else {
              if (0 > i) {
                val = data.dragSize + i;
                /** @type {number} */
                i = 0;
              } else {
                if (i + data.dragSize > data.trackSize) {
                  /** @type {number} */
                  val = data.trackSize - i;
                }
              }
            }
            if (self.isHorizontal()) {
              if (self.support.transforms3d) {
                data.drag.transform("translate3d(" + i + "px, 0, 0)");
              } else {
                data.drag.transform("translateX(" + i + "px)");
              }
              /** @type {string} */
              data.drag[0].style.width = val + "px";
            } else {
              if (self.support.transforms3d) {
                data.drag.transform("translate3d(0px, " + i + "px, 0)");
              } else {
                data.drag.transform("translateY(" + i + "px)");
              }
              /** @type {string} */
              data.drag[0].style.height = val + "px";
            }
            if (self.params.scrollbarHide) {
              clearTimeout(data.timeout);
              /** @type {number} */
              data.track[0].style.opacity = 1;
              /** @type {number} */
              data.timeout = setTimeout(function() {
                /** @type {number} */
                data.track[0].style.opacity = 0;
                data.track.transition(400);
              }, 1E3);
            }
          }
        },
        /**
         * @param {Object} lab
         * @return {undefined}
         */
        setTransition : function(lab) {
          if (self.params.scrollbar) {
            self.scrollbar.drag.transition(lab);
          }
        }
      }, self.controller = {
        /**
         * @param {string} x1
         * @param {?} yp
         * @return {undefined}
         */
        LinearSpline : function(x1, yp) {
          /** @type {string} */
          this.x = x1;
          this.y = yp;
          /** @type {number} */
          this.lastIndex = x1.length - 1;
          var j;
          var i;
          this.x.length;
          /**
           * @param {(Object|string)} x
           * @return {?}
           */
          this.interpolate = function(x) {
            return x ? (i = min(this.x, x), j = i - 1, (x - this.x[j]) * (this.y[i] - this.y[j]) / (this.x[i] - this.x[j]) + this.y[j]) : 0;
          };
          var min = function() {
            var a;
            var b;
            var t;
            return function(e, dataAndEvents) {
              /** @type {number} */
              b = -1;
              a = e.length;
              for (;a - b > 1;) {
                if (e[t = a + b >> 1] <= dataAndEvents) {
                  /** @type {number} */
                  b = t;
                } else {
                  /** @type {number} */
                  a = t;
                }
              }
              return a;
            };
          }();
        },
        /**
         * @param {Object} body
         * @return {undefined}
         */
        getInterpolateFunction : function(body) {
          if (!self.controller.spline) {
            self.controller.spline = self.params.loop ? new self.controller.LinearSpline(self.slidesGrid, body.slidesGrid) : new self.controller.LinearSpline(self.snapGrid, body.snapGrid);
          }
        },
        /**
         * @param {number} y
         * @param {?} x
         * @return {undefined}
         */
        setTranslate : function(y, x) {
          /**
           * @param {Object} action
           * @return {undefined}
           */
          function create(action) {
            y = action.rtl && "horizontal" === action.params.direction ? -self.translate : self.translate;
            if ("slide" === self.params.controlBy) {
              self.controller.getInterpolateFunction(action);
              /** @type {number} */
              pdataCur = -self.controller.spline.interpolate(-y);
            }
            if (!(pdataCur && "container" !== self.params.controlBy)) {
              /** @type {number} */
              w4 = (action.maxTranslate() - action.minTranslate()) / (self.maxTranslate() - self.minTranslate());
              pdataCur = (y - self.minTranslate()) * w4 + action.minTranslate();
            }
            if (self.params.controlInverse) {
              /** @type {number} */
              pdataCur = action.maxTranslate() - pdataCur;
            }
            action.updateProgress(pdataCur);
            action.setWrapperTranslate(pdataCur, false, self);
            action.updateActiveIndex();
          }
          var w4;
          var pdataCur;
          var a = self.params.control;
          if (self.isArray(a)) {
            /** @type {number} */
            var i = 0;
            for (;i < a.length;i++) {
              if (a[i] !== x) {
                if (a[i] instanceof init) {
                  create(a[i]);
                }
              }
            }
          } else {
            if (a instanceof init) {
              if (x !== a) {
                create(a);
              }
            }
          }
        },
        /**
         * @param {boolean} lab
         * @param {?} value
         * @return {undefined}
         */
        setTransition : function(lab, value) {
          /**
           * @param {Object} _this
           * @return {undefined}
           */
          function next(_this) {
            _this.setWrapperTransition(lab, self);
            if (0 !== lab) {
              _this.onTransitionStart();
              _this.wrapper.transitionEnd(function() {
                if (old) {
                  if (_this.params.loop) {
                    if ("slide" === self.params.controlBy) {
                      _this.fixLoop();
                    }
                  }
                  _this.onTransitionEnd();
                }
              });
            }
          }
          var i;
          var old = self.params.control;
          if (self.isArray(old)) {
            /** @type {number} */
            i = 0;
            for (;i < old.length;i++) {
              if (old[i] !== value) {
                if (old[i] instanceof init) {
                  next(old[i]);
                }
              }
            }
          } else {
            if (old instanceof init) {
              if (value !== old) {
                next(old);
              }
            }
          }
        }
      }, self.hashnav = {
        /**
         * @return {undefined}
         */
        init : function() {
          if (self.params.hashnav) {
            /** @type {boolean} */
            self.hashnav.initialized = true;
            /** @type {string} */
            var target = document.location.hash.replace("#", "");
            if (target) {
              /** @type {number} */
              var funcToCall = 0;
              /** @type {number} */
              var idx = 0;
              var cnl = self.slides.length;
              for (;cnl > idx;idx++) {
                var selected = self.slides.eq(idx);
                var value = selected.attr("data-hash");
                if (value === target && !selected.hasClass(self.params.slideDuplicateClass)) {
                  var e = selected.index();
                  self.slideTo(e, funcToCall, self.params.runCallbacksOnInit, true);
                }
              }
            }
          }
        },
        /**
         * @return {undefined}
         */
        setHash : function() {
          if (self.hashnav.initialized) {
            if (self.params.hashnav) {
              document.location.hash = self.slides.eq(self.activeIndex).attr("data-hash") || "";
            }
          }
        }
      }, self.disableKeyboardControl = function() {
        /** @type {boolean} */
        self.params.keyboardControl = false;
        $(document).off("keydown", listener);
      }, self.enableKeyboardControl = function() {
        /** @type {boolean} */
        self.params.keyboardControl = true;
        $(document).on("keydown", listener);
      }, self.mousewheel = {
        event : false,
        lastScrollTime : (new window.Date).getTime()
      }, self.params.mousewheelControl) {
        try {
          new window.WheelEvent("wheel");
          /** @type {string} */
          self.mousewheel.event = "wheel";
        } catch (a) {
          if (window.WheelEvent || self.container[0] && "wheel" in self.container[0]) {
            /** @type {string} */
            self.mousewheel.event = "wheel";
          }
        }
        if (!self.mousewheel.event) {
          window.WheelEvent;
        }
        if (!self.mousewheel.event) {
          if (!(void 0 === document.onmousewheel)) {
            /** @type {string} */
            self.mousewheel.event = "mousewheel";
          }
        }
        if (!self.mousewheel.event) {
          /** @type {string} */
          self.mousewheel.event = "DOMMouseScroll";
        }
      }
      /**
       * @return {?}
       */
      self.disableMousewheelControl = function() {
        return!!self.mousewheel.event && (self.container.off(self.mousewheel.event, handler), true);
      };
      /**
       * @return {?}
       */
      self.enableMousewheelControl = function() {
        return!!self.mousewheel.event && (self.container.on(self.mousewheel.event, handler), true);
      };
      self.parallax = {
        /**
         * @return {undefined}
         */
        setTranslate : function() {
          self.container.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
            draw(this, self.progress);
          });
          self.slides.each(function() {
            var items = $(this);
            items.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
              /** @type {number} */
              var normalWidth = Math.min(Math.max(items[0].progress, -1), 1);
              draw(this, normalWidth);
            });
          });
        },
        /**
         * @param {(Function|string)} duration
         * @return {undefined}
         */
        setTransition : function(duration) {
          if ("undefined" == typeof duration) {
            duration = self.params.speed;
          }
          self.container.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
            var pointer = $(this);
            var lab = parseInt(pointer.attr("data-swiper-parallax-duration"), 10) || duration;
            if (0 === duration) {
              /** @type {number} */
              lab = 0;
            }
            pointer.transition(lab);
          });
        }
      };
      /** @type {Array} */
      self._plugins = [];
      var name;
      for (name in self.plugins) {
        var v = self.plugins[name](self, self.params[name]);
        if (v) {
          self._plugins.push(v);
        }
      }
      return self.callPlugins = function(key) {
        /** @type {number} */
        var i = 0;
        for (;i < self._plugins.length;i++) {
          if (key in self._plugins[i]) {
            self._plugins[i][key](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
          }
        }
      }, self.emitterEventListeners = {}, self.emit = function(method) {
        if (self.params[method]) {
          self.params[method](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
        }
        var key;
        if (self.emitterEventListeners[method]) {
          /** @type {number} */
          key = 0;
          for (;key < self.emitterEventListeners[method].length;key++) {
            self.emitterEventListeners[method][key](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
          }
        }
        if (self.callPlugins) {
          self.callPlugins(method, arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
        }
      }, self.on = function(type, fn) {
        return type = parse(type), self.emitterEventListeners[type] || (self.emitterEventListeners[type] = []), self.emitterEventListeners[type].push(fn), self;
      }, self.off = function(type, fn) {
        var i;
        if (type = parse(type), "undefined" == typeof fn) {
          return self.emitterEventListeners[type] = [], self;
        }
        if (self.emitterEventListeners[type] && 0 !== self.emitterEventListeners[type].length) {
          /** @type {number} */
          i = 0;
          for (;i < self.emitterEventListeners[type].length;i++) {
            if (self.emitterEventListeners[type][i] === fn) {
              self.emitterEventListeners[type].splice(i, 1);
            }
          }
          return self;
        }
      }, self.once = function(type, eventType) {
        type = parse(type);
        /**
         * @return {undefined}
         */
        var one = function() {
          eventType(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
          self.off(type, one);
        };
        return self.on(type, one), self;
      }, self.a11y = {
        /**
         * @param {?} element
         * @return {?}
         */
        makeFocusable : function(element) {
          return element.attr("tabIndex", "0"), element;
        },
        /**
         * @param {?} elem
         * @param {string} name
         * @return {?}
         */
        addRole : function(elem, name) {
          return elem.attr("role", name), elem;
        },
        /**
         * @param {?} context
         * @param {string} item
         * @return {?}
         */
        addLabel : function(context, item) {
          return context.attr("aria-label", item), context;
        },
        /**
         * @param {HTMLElement} btn
         * @return {?}
         */
        disable : function(btn) {
          return btn.attr("aria-disabled", true), btn;
        },
        /**
         * @param {HTMLElement} element
         * @return {?}
         */
        enable : function(element) {
          return element.attr("aria-disabled", false), element;
        },
        /**
         * @param {Object} event
         * @return {undefined}
         */
        onEnterKey : function(event) {
          if (13 === event.keyCode) {
            if ($(event.target).is(self.params.nextButton)) {
              self.onClickNext(event);
              if (self.isEnd) {
                self.a11y.notify(self.params.lastSlideMessage);
              } else {
                self.a11y.notify(self.params.nextSlideMessage);
              }
            } else {
              if ($(event.target).is(self.params.prevButton)) {
                self.onClickPrev(event);
                if (self.isBeginning) {
                  self.a11y.notify(self.params.firstSlideMessage);
                } else {
                  self.a11y.notify(self.params.prevSlideMessage);
                }
              }
            }
            if ($(event.target).is("." + self.params.bulletClass)) {
              $(event.target)[0].click();
            }
          }
        },
        liveRegion : $('<span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>'),
        /**
         * @param {?} text
         * @return {undefined}
         */
        notify : function(text) {
          var buffer = self.a11y.liveRegion;
          if (0 !== buffer.length) {
            buffer.html("");
            buffer.html(text);
          }
        },
        /**
         * @return {undefined}
         */
        init : function() {
          if (self.params.nextButton) {
            if (self.nextButton) {
              if (self.nextButton.length > 0) {
                self.a11y.makeFocusable(self.nextButton);
                self.a11y.addRole(self.nextButton, "button");
                self.a11y.addLabel(self.nextButton, self.params.nextSlideMessage);
              }
            }
          }
          if (self.params.prevButton) {
            if (self.prevButton) {
              if (self.prevButton.length > 0) {
                self.a11y.makeFocusable(self.prevButton);
                self.a11y.addRole(self.prevButton, "button");
                self.a11y.addLabel(self.prevButton, self.params.prevSlideMessage);
              }
            }
          }
          $(self.container).append(self.a11y.liveRegion);
        },
        /**
         * @return {undefined}
         */
        initPagination : function() {
          if (self.params.pagination) {
            if (self.params.paginationClickable) {
              if (self.bullets) {
                if (self.bullets.length) {
                  self.bullets.each(function() {
                    var container = $(this);
                    self.a11y.makeFocusable(container);
                    self.a11y.addRole(container, "button");
                    self.a11y.addLabel(container, self.params.paginationBulletMessage.replace(/{{index}}/, container.index() + 1));
                  });
                }
              }
            }
          }
        },
        /**
         * @return {undefined}
         */
        destroy : function() {
          if (self.a11y.liveRegion) {
            if (self.a11y.liveRegion.length > 0) {
              self.a11y.liveRegion.remove();
            }
          }
        }
      }, self.init = function() {
        if (self.params.loop) {
          self.createLoop();
        }
        self.updateContainerSize();
        self.updateSlidesSize();
        self.updatePagination();
        if (self.params.scrollbar) {
          if (self.scrollbar) {
            self.scrollbar.set();
            if (self.params.scrollbarDraggable) {
              self.scrollbar.enableDraggable();
            }
          }
        }
        if ("slide" !== self.params.effect) {
          if (self.effects[self.params.effect]) {
            if (!self.params.loop) {
              self.updateProgress();
            }
            self.effects[self.params.effect].setTranslate();
          }
        }
        if (self.params.loop) {
          self.slideTo(self.params.initialSlide + self.loopedSlides, 0, self.params.runCallbacksOnInit);
        } else {
          self.slideTo(self.params.initialSlide, 0, self.params.runCallbacksOnInit);
          if (0 === self.params.initialSlide) {
            if (self.parallax) {
              if (self.params.parallax) {
                self.parallax.setTranslate();
              }
            }
            if (self.lazy) {
              if (self.params.lazyLoading) {
                self.lazy.load();
                /** @type {boolean} */
                self.lazy.initialImageLoaded = true;
              }
            }
          }
        }
        self.attachEvents();
        if (self.params.observer) {
          if (self.support.observer) {
            self.initObservers();
          }
        }
        if (self.params.preloadImages) {
          if (!self.params.lazyLoading) {
            self.preloadImages();
          }
        }
        if (self.params.autoplay) {
          self.startAutoplay();
        }
        if (self.params.keyboardControl) {
          if (self.enableKeyboardControl) {
            self.enableKeyboardControl();
          }
        }
        if (self.params.mousewheelControl) {
          if (self.enableMousewheelControl) {
            self.enableMousewheelControl();
          }
        }
        if (self.params.hashnav) {
          if (self.hashnav) {
            self.hashnav.init();
          }
        }
        if (self.params.a11y) {
          if (self.a11y) {
            self.a11y.init();
          }
        }
        self.emit("onInit", self);
      }, self.cleanupStyles = function() {
        self.container.removeClass(self.classNames.join(" ")).removeAttr("style");
        self.wrapper.removeAttr("style");
        if (self.slides) {
          if (self.slides.length) {
            self.slides.removeClass([self.params.slideVisibleClass, self.params.slideActiveClass, self.params.slideNextClass, self.params.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-column").removeAttr("data-swiper-row");
          }
        }
        if (self.paginationContainer) {
          if (self.paginationContainer.length) {
            self.paginationContainer.removeClass(self.params.paginationHiddenClass);
          }
        }
        if (self.bullets) {
          if (self.bullets.length) {
            self.bullets.removeClass(self.params.bulletActiveClass);
          }
        }
        if (self.params.prevButton) {
          $(self.params.prevButton).removeClass(self.params.buttonDisabledClass);
        }
        if (self.params.nextButton) {
          $(self.params.nextButton).removeClass(self.params.buttonDisabledClass);
        }
        if (self.params.scrollbar) {
          if (self.scrollbar) {
            if (self.scrollbar.track) {
              if (self.scrollbar.track.length) {
                self.scrollbar.track.removeAttr("style");
              }
            }
            if (self.scrollbar.drag) {
              if (self.scrollbar.drag.length) {
                self.scrollbar.drag.removeAttr("style");
              }
            }
          }
        }
      }, self.destroy = function(removeResizeFix, full) {
        self.detachEvents();
        self.stopAutoplay();
        if (self.params.scrollbar) {
          if (self.scrollbar) {
            if (self.params.scrollbarDraggable) {
              self.scrollbar.disableDraggable();
            }
          }
        }
        if (self.params.loop) {
          self.destroyLoop();
        }
        if (full) {
          self.cleanupStyles();
        }
        self.disconnectObservers();
        if (self.params.keyboardControl) {
          if (self.disableKeyboardControl) {
            self.disableKeyboardControl();
          }
        }
        if (self.params.mousewheelControl) {
          if (self.disableMousewheelControl) {
            self.disableMousewheelControl();
          }
        }
        if (self.params.a11y) {
          if (self.a11y) {
            self.a11y.destroy();
          }
        }
        self.emit("onDestroy");
        if (removeResizeFix !== false) {
          /** @type {null} */
          self = null;
        }
      }, self.init(), self;
    }
  };
  init.prototype = {
    isSafari : function() {
      /** @type {string} */
      var ua = navigator.userAgent.toLowerCase();
      return ua.indexOf("safari") >= 0 && (ua.indexOf("chrome") < 0 && ua.indexOf("android") < 0);
    }(),
    isUiWebView : /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent),
    /**
     * @param {?} o
     * @return {?}
     */
    isArray : function(o) {
      return "[object Array]" === Object.prototype.toString.apply(o);
    },
    browser : {
      ie : window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
      ieTouch : window.navigator.msPointerEnabled && window.navigator.msMaxTouchPoints > 1 || window.navigator.pointerEnabled && window.navigator.maxTouchPoints > 1
    },
    device : function() {
      /** @type {string} */
      var ua = navigator.userAgent;
      /** @type {(Array.<string>|null)} */
      var android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
      /** @type {(Array.<string>|null)} */
      var error = ua.match(/(iPad).*OS\s([\d_]+)/);
      /** @type {(Array.<string>|null)} */
      var msg = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
      /** @type {(Array.<string>|boolean|null)} */
      var e = !error && ua.match(/(iPhone\sOS)\s([\d_]+)/);
      return{
        ios : error || (e || msg),
        android : android
      };
    }(),
    support : {
      touch : window.Modernizr && Modernizr.touch === true || function() {
        return!!("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch);
      }(),
      transforms3d : window.Modernizr && Modernizr.csstransforms3d === true || function() {
        /** @type {(CSSStyleDeclaration|null)} */
        var div = document.createElement("div").style;
        return "webkitPerspective" in div || ("MozPerspective" in div || ("OPerspective" in div || ("MsPerspective" in div || "perspective" in div)));
      }(),
      flexbox : function() {
        /** @type {(CSSStyleDeclaration|null)} */
        var divStyle = document.createElement("div").style;
        /** @type {Array.<string>} */
        var codeSegments = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" ");
        /** @type {number} */
        var i = 0;
        for (;i < codeSegments.length;i++) {
          if (codeSegments[i] in divStyle) {
            return true;
          }
        }
      }(),
      observer : function() {
        return "MutationObserver" in window || "WebkitMutationObserver" in window;
      }()
    },
    plugins : {}
  };
  var io = function() {
    /**
     * @param {Array} b
     * @return {?}
     */
    var Z = function(b) {
      var t = this;
      /** @type {number} */
      var k = 0;
      /** @type {number} */
      k = 0;
      for (;k < b.length;k++) {
        t[k] = b[k];
      }
      return t.length = b.length, this;
    };
    /**
     * @param {string} selector
     * @param {Node} con
     * @return {?}
     */
    var $ = function(selector, con) {
      /** @type {Array} */
      var css = [];
      /** @type {number} */
      var i = 0;
      if (selector && (!con && selector instanceof Z)) {
        return selector;
      }
      if (selector) {
        if ("string" == typeof selector) {
          var codeSegments;
          var el;
          /** @type {string} */
          var excludes = selector.trim();
          if (excludes.indexOf("<") >= 0 && excludes.indexOf(">") >= 0) {
            /** @type {string} */
            var tagName = "div";
            if (0 === excludes.indexOf("<li")) {
              /** @type {string} */
              tagName = "ul";
            }
            if (0 === excludes.indexOf("<tr")) {
              /** @type {string} */
              tagName = "tbody";
            }
            if (0 === excludes.indexOf("<td") || 0 === excludes.indexOf("<th")) {
              /** @type {string} */
              tagName = "tr";
            }
            if (0 === excludes.indexOf("<tbody")) {
              /** @type {string} */
              tagName = "table";
            }
            if (0 === excludes.indexOf("<option")) {
              /** @type {string} */
              tagName = "select";
            }
            /** @type {Element} */
            el = document.createElement(tagName);
            /** @type {string} */
            el.innerHTML = selector;
            /** @type {number} */
            i = 0;
            for (;i < el.childNodes.length;i++) {
              css.push(el.childNodes[i]);
            }
          } else {
            codeSegments = con || ("#" !== selector[0] || selector.match(/[ .<>:~]/)) ? (con || document).querySelectorAll(selector) : [document.getElementById(selector.split("#")[1])];
            /** @type {number} */
            i = 0;
            for (;i < codeSegments.length;i++) {
              if (codeSegments[i]) {
                css.push(codeSegments[i]);
              }
            }
          }
        } else {
          if (selector.nodeType || (selector === window || selector === document)) {
            css.push(selector);
          } else {
            if (selector.length > 0 && selector[0].nodeType) {
              /** @type {number} */
              i = 0;
              for (;i < selector.length;i++) {
                css.push(selector[i]);
              }
            }
          }
        }
      }
      return new Z(css);
    };
    return Z.prototype = {
      /**
       * @param {string} name
       * @return {?}
       */
      addClass : function(name) {
        if ("undefined" == typeof name) {
          return this;
        }
        var poly = name.split(" ");
        /** @type {number} */
        var j = 0;
        for (;j < poly.length;j++) {
          /** @type {number} */
          var i = 0;
          for (;i < this.length;i++) {
            this[i].classList.add(poly[j]);
          }
        }
        return this;
      },
      /**
       * @param {string} name
       * @return {?}
       */
      removeClass : function(name) {
        var classNames = name.split(" ");
        /** @type {number} */
        var j = 0;
        for (;j < classNames.length;j++) {
          /** @type {number} */
          var i = 0;
          for (;i < this.length;i++) {
            this[i].classList.remove(classNames[j]);
          }
        }
        return this;
      },
      /**
       * @param {string} name
       * @return {?}
       */
      hasClass : function(name) {
        return!!this[0] && this[0].classList.contains(name);
      },
      /**
       * @param {string} classList
       * @return {?}
       */
      toggleClass : function(classList) {
        var codeSegments = classList.split(" ");
        /** @type {number} */
        var i = 0;
        for (;i < codeSegments.length;i++) {
          /** @type {number} */
          var j = 0;
          for (;j < this.length;j++) {
            this[j].classList.toggle(codeSegments[i]);
          }
        }
        return this;
      },
      /**
       * @param {string} name
       * @param {string} val
       * @return {?}
       */
      attr : function(name, val) {
        if (1 === arguments.length && "string" == typeof name) {
          return this[0] ? this[0].getAttribute(name) : void 0;
        }
        /** @type {number} */
        var i = 0;
        for (;i < this.length;i++) {
          if (2 === arguments.length) {
            this[i].setAttribute(name, val);
          } else {
            var key;
            for (key in name) {
              this[i][key] = name[key];
              this[i].setAttribute(key, name[key]);
            }
          }
        }
        return this;
      },
      /**
       * @param {string} name
       * @return {?}
       */
      removeAttr : function(name) {
        /** @type {number} */
        var i = 0;
        for (;i < this.length;i++) {
          this[i].removeAttribute(name);
        }
        return this;
      },
      /**
       * @param {string} name
       * @param {string} type
       * @return {?}
       */
      data : function(name, type) {
        if ("undefined" != typeof type) {
          /** @type {number} */
          var i = 0;
          for (;i < this.length;i++) {
            var filter = this[i];
            if (!filter.dom7ElementDataStorage) {
              filter.dom7ElementDataStorage = {};
            }
            /** @type {string} */
            filter.dom7ElementDataStorage[name] = type;
          }
          return this;
        }
        if (this[0]) {
          var firstByIndex = this[0].getAttribute("data-" + name);
          return firstByIndex ? firstByIndex : this[0].dom7ElementDataStorage && name in this[0].dom7ElementDataStorage ? this[0].dom7ElementDataStorage[name] : void 0;
        }
      },
      /**
       * @param {string} lab
       * @return {?}
       */
      transform : function(lab) {
        /** @type {number} */
        var i = 0;
        for (;i < this.length;i++) {
          var es = this[i].style;
          es.webkitTransform = es.MsTransform = es.msTransform = es.MozTransform = es.OTransform = es.transform = lab;
        }
        return this;
      },
      /**
       * @param {Object} lab
       * @return {?}
       */
      transition : function(lab) {
        if ("string" != typeof lab) {
          lab += "ms";
        }
        /** @type {number} */
        var i = 0;
        for (;i < this.length;i++) {
          var es = this[i].style;
          es.webkitTransitionDuration = es.MsTransitionDuration = es.msTransitionDuration = es.MozTransitionDuration = es.OTransitionDuration = es.transitionDuration = lab;
        }
        return this;
      },
      /**
       * @param {string} type
       * @param {Function} fn
       * @param {Function} callback
       * @param {boolean} capture
       * @return {?}
       */
      on : function(type, fn, callback, capture) {
        /**
         * @param {Event} e
         * @return {undefined}
         */
        function hide(e) {
          var target = e.target;
          if ($(target).is(fn)) {
            callback.call(target, e);
          } else {
            var elements = $(target).parents();
            /** @type {number} */
            var i = 0;
            for (;i < elements.length;i++) {
              if ($(elements[i]).is(fn)) {
                callback.call(elements[i], e);
              }
            }
          }
        }
        var i;
        var x;
        var activeEventList = type.split(" ");
        /** @type {number} */
        i = 0;
        for (;i < this.length;i++) {
          if ("function" == typeof fn || fn === false) {
            if ("function" == typeof fn) {
              callback = arguments[1];
              capture = arguments[2] || false;
            }
            /** @type {number} */
            x = 0;
            for (;x < activeEventList.length;x++) {
              this[i].addEventListener(activeEventList[x], callback, capture);
            }
          } else {
            /** @type {number} */
            x = 0;
            for (;x < activeEventList.length;x++) {
              if (!this[i].dom7LiveListeners) {
                /** @type {Array} */
                this[i].dom7LiveListeners = [];
              }
              this[i].dom7LiveListeners.push({
                /** @type {Function} */
                listener : callback,
                /** @type {function (Event): undefined} */
                liveListener : hide
              });
              this[i].addEventListener(activeEventList[x], hide, capture);
            }
          }
        }
        return this;
      },
      /**
       * @param {string} types
       * @param {Function} fn
       * @param {Function} callback
       * @param {boolean} capture
       * @return {?}
       */
      off : function(types, fn, callback, capture) {
        var gestures = types.split(" ");
        /** @type {number} */
        var t = 0;
        for (;t < gestures.length;t++) {
          /** @type {number} */
          var n = 0;
          for (;n < this.length;n++) {
            if ("function" == typeof fn || fn === false) {
              if ("function" == typeof fn) {
                callback = arguments[1];
                capture = arguments[2] || false;
              }
              this[n].removeEventListener(gestures[t], callback, capture);
            } else {
              if (this[n].dom7LiveListeners) {
                /** @type {number} */
                var i = 0;
                for (;i < this[n].dom7LiveListeners.length;i++) {
                  if (this[n].dom7LiveListeners[i].listener === callback) {
                    this[n].removeEventListener(gestures[t], this[n].dom7LiveListeners[i].liveListener, capture);
                  }
                }
              }
            }
          }
        }
        return this;
      },
      /**
       * @param {string} type
       * @param {Function} one
       * @param {Text} callback
       * @param {boolean} capture
       * @return {undefined}
       */
      once : function(type, one, callback, capture) {
        /**
         * @param {?} err
         * @return {undefined}
         */
        function wrapper(err) {
          callback(err);
          event.off(type, one, wrapper, capture);
        }
        var event = this;
        if ("function" == typeof one) {
          /** @type {boolean} */
          one = false;
          callback = arguments[1];
          capture = arguments[2];
        }
        event.on(type, one, wrapper, capture);
      },
      /**
       * @param {string} type
       * @param {number} opt_attributes
       * @return {?}
       */
      trigger : function(type, opt_attributes) {
        /** @type {number} */
        var i = 0;
        for (;i < this.length;i++) {
          var event;
          try {
            event = new window.CustomEvent(type, {
              detail : opt_attributes,
              bubbles : true,
              cancelable : true
            });
          } catch (c) {
            /** @type {(Event|null)} */
            event = document.createEvent("Event");
            event.initEvent(type, true, true);
            /** @type {number} */
            event.detail = opt_attributes;
          }
          this[i].dispatchEvent(event);
        }
        return this;
      },
      /**
       * @param {Function} callback
       * @return {?}
       */
      transitionEnd : function(callback) {
        /**
         * @param {Event} ev
         * @return {undefined}
         */
        function one(ev) {
          if (ev.target === this) {
            callback.call(this, ev);
            /** @type {number} */
            i = 0;
            for (;i < events.length;i++) {
              t.off(events[i], one);
            }
          }
        }
        var i;
        /** @type {Array} */
        var events = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"];
        var t = this;
        if (callback) {
          /** @type {number} */
          i = 0;
          for (;i < events.length;i++) {
            t.on(events[i], one);
          }
        }
        return this;
      },
      /**
       * @return {?}
       */
      width : function() {
        return this[0] === window ? window.innerWidth : this.length > 0 ? parseFloat(this.css("width")) : null;
      },
      /**
       * @param {Object} lab
       * @return {?}
       */
      outerWidth : function(lab) {
        return this.length > 0 ? lab ? this[0].offsetWidth + parseFloat(this.css("margin-right")) + parseFloat(this.css("margin-left")) : this[0].offsetWidth : null;
      },
      /**
       * @return {?}
       */
      height : function() {
        return this[0] === window ? window.innerHeight : this.length > 0 ? parseFloat(this.css("height")) : null;
      },
      /**
       * @param {boolean} recurring
       * @return {?}
       */
      outerHeight : function(recurring) {
        return this.length > 0 ? recurring ? this[0].offsetHeight + parseFloat(this.css("margin-top")) + parseFloat(this.css("margin-bottom")) : this[0].offsetHeight : null;
      },
      /**
       * @return {?}
       */
      offset : function() {
        if (this.length > 0) {
          var body = this[0];
          var offset = body.getBoundingClientRect();
          /** @type {(HTMLElement|null)} */
          var db = document.body;
          var actualHeight = body.clientTop || (db.clientTop || 0);
          var clientLeft = body.clientLeft || (db.clientLeft || 0);
          var height = window.pageYOffset || body.scrollTop;
          var scrollLeft = window.pageXOffset || body.scrollLeft;
          return{
            top : offset.top + height - actualHeight,
            left : offset.left + scrollLeft - clientLeft
          };
        }
        return null;
      },
      /**
       * @param {string} opt_attributes
       * @param {string} expectedNumberOfNonCommentArgs
       * @return {?}
       */
      css : function(opt_attributes, expectedNumberOfNonCommentArgs) {
        var i;
        if (1 === arguments.length) {
          if ("string" != typeof opt_attributes) {
            /** @type {number} */
            i = 0;
            for (;i < this.length;i++) {
              var sp;
              for (sp in opt_attributes) {
                this[i].style[sp] = opt_attributes[sp];
              }
            }
            return this;
          }
          if (this[0]) {
            return window.getComputedStyle(this[0], null).getPropertyValue(opt_attributes);
          }
        }
        if (2 === arguments.length && "string" == typeof opt_attributes) {
          /** @type {number} */
          i = 0;
          for (;i < this.length;i++) {
            /** @type {string} */
            this[i].style[opt_attributes] = expectedNumberOfNonCommentArgs;
          }
          return this;
        }
        return this;
      },
      /**
       * @param {Function} opt_attributes
       * @return {?}
       */
      each : function(opt_attributes) {
        /** @type {number} */
        var i = 0;
        for (;i < this.length;i++) {
          opt_attributes.call(this[i], i, this[i]);
        }
        return this;
      },
      /**
       * @param {string} html
       * @return {?}
       */
      html : function(html) {
        if ("undefined" == typeof html) {
          return this[0] ? this[0].innerHTML : void 0;
        }
        /** @type {number} */
        var i = 0;
        for (;i < this.length;i++) {
          /** @type {string} */
          this[i].innerHTML = html;
        }
        return this;
      },
      /**
       * @param {Object} lab
       * @return {?}
       */
      text : function(lab) {
        if ("undefined" == typeof lab) {
          return this[0] ? this[0].textContent.trim() : null;
        }
        /** @type {number} */
        var i = 0;
        for (;i < this.length;i++) {
          /** @type {Object} */
          this[i].textContent = lab;
        }
        return this;
      },
      /**
       * @param {string} selector
       * @return {?}
       */
      is : function(selector) {
        if (!this[0]) {
          return false;
        }
        var codeSegments;
        var i;
        if ("string" == typeof selector) {
          var element = this[0];
          if (element === document) {
            return selector === document;
          }
          if (element === window) {
            return selector === window;
          }
          if (element.matches) {
            return element.matches(selector);
          }
          if (element.webkitMatchesSelector) {
            return element.webkitMatchesSelector(selector);
          }
          if (element.mozMatchesSelector) {
            return element.mozMatchesSelector(selector);
          }
          if (element.msMatchesSelector) {
            return element.msMatchesSelector(selector);
          }
          codeSegments = $(selector);
          /** @type {number} */
          i = 0;
          for (;i < codeSegments.length;i++) {
            if (codeSegments[i] === this[0]) {
              return true;
            }
          }
          return false;
        }
        if (selector === document) {
          return this[0] === document;
        }
        if (selector === window) {
          return this[0] === window;
        }
        if (selector.nodeType || selector instanceof Z) {
          codeSegments = selector.nodeType ? [selector] : selector;
          /** @type {number} */
          i = 0;
          for (;i < codeSegments.length;i++) {
            if (codeSegments[i] === this[0]) {
              return true;
            }
          }
          return false;
        }
        return false;
      },
      /**
       * @return {?}
       */
      index : function() {
        if (this[0]) {
          var prev = this[0];
          /** @type {number} */
          var index = 0;
          for (;null !== (prev = prev.previousSibling);) {
            if (1 === prev.nodeType) {
              index++;
            }
          }
          return index;
        }
      },
      /**
       * @param {number} index
       * @return {?}
       */
      eq : function(index) {
        if ("undefined" == typeof index) {
          return this;
        }
        var tab_id;
        var len = this.length;
        return index > len - 1 ? new Z([]) : 0 > index ? (tab_id = len + index, new Z(0 > tab_id ? [] : [this[tab_id]])) : new Z([this[index]]);
      },
      /**
       * @param {?} type
       * @return {?}
       */
      append : function(type) {
        var i;
        var n;
        /** @type {number} */
        i = 0;
        for (;i < this.length;i++) {
          if ("string" == typeof type) {
            /** @type {Element} */
            var a = document.createElement("div");
            /** @type {string} */
            a.innerHTML = type;
            for (;a.firstChild;) {
              this[i].appendChild(a.firstChild);
            }
          } else {
            if (type instanceof Z) {
              /** @type {number} */
              n = 0;
              for (;n < type.length;n++) {
                this[i].appendChild(type[n]);
              }
            } else {
              this[i].appendChild(type);
            }
          }
        }
        return this;
      },
      /**
       * @param {string} html
       * @return {?}
       */
      prepend : function(html) {
        var t;
        var i;
        /** @type {number} */
        t = 0;
        for (;t < this.length;t++) {
          if ("string" == typeof html) {
            /** @type {Element} */
            var el = document.createElement("div");
            /** @type {string} */
            el.innerHTML = html;
            /** @type {number} */
            i = el.childNodes.length - 1;
            for (;i >= 0;i--) {
              this[t].insertBefore(el.childNodes[i], this[t].childNodes[0]);
            }
          } else {
            if (html instanceof Z) {
              /** @type {number} */
              i = 0;
              for (;i < html.length;i++) {
                this[t].insertBefore(html[i], this[t].childNodes[0]);
              }
            } else {
              this[t].insertBefore(html, this[t].childNodes[0]);
            }
          }
        }
        return this;
      },
      /**
       * @param {string} selector
       * @return {undefined}
       */
      insertBefore : function(selector) {
        var headers = $(selector);
        /** @type {number} */
        var c = 0;
        for (;c < this.length;c++) {
          if (1 === headers.length) {
            headers[0].parentNode.insertBefore(this[c], headers[0]);
          } else {
            if (headers.length > 1) {
              /** @type {number} */
              var i = 0;
              for (;i < headers.length;i++) {
                headers[i].parentNode.insertBefore(this[c].cloneNode(true), headers[i]);
              }
            }
          }
        }
      },
      /**
       * @param {string} selector
       * @return {undefined}
       */
      insertAfter : function(selector) {
        var headers = $(selector);
        /** @type {number} */
        var i = 0;
        for (;i < this.length;i++) {
          if (1 === headers.length) {
            headers[0].parentNode.insertBefore(this[i], headers[0].nextSibling);
          } else {
            if (headers.length > 1) {
              /** @type {number} */
              var j = 0;
              for (;j < headers.length;j++) {
                headers[j].parentNode.insertBefore(this[i].cloneNode(true), headers[j].nextSibling);
              }
            }
          }
        }
      },
      /**
       * @param {string} selector
       * @return {?}
       */
      next : function(selector) {
        return new Z(this.length > 0 ? selector ? this[0].nextElementSibling && $(this[0].nextElementSibling).is(selector) ? [this[0].nextElementSibling] : [] : this[0].nextElementSibling ? [this[0].nextElementSibling] : [] : []);
      },
      /**
       * @param {string} until
       * @return {?}
       */
      nextAll : function(until) {
        /** @type {Array} */
        var acc = [];
        var target = this[0];
        if (!target) {
          return new Z([]);
        }
        for (;target.nextElementSibling;) {
          var node = target.nextElementSibling;
          if (until) {
            if ($(node).is(until)) {
              acc.push(node);
            }
          } else {
            acc.push(node);
          }
          target = node;
        }
        return new Z(acc);
      },
      /**
       * @param {string} until
       * @return {?}
       */
      prev : function(until) {
        return new Z(this.length > 0 ? until ? this[0].previousElementSibling && $(this[0].previousElementSibling).is(until) ? [this[0].previousElementSibling] : [] : this[0].previousElementSibling ? [this[0].previousElementSibling] : [] : []);
      },
      /**
       * @param {string} until
       * @return {?}
       */
      prevAll : function(until) {
        /** @type {Array} */
        var matched = [];
        var node = this[0];
        if (!node) {
          return new Z([]);
        }
        for (;node.previousElementSibling;) {
          var elem = node.previousElementSibling;
          if (until) {
            if ($(elem).is(until)) {
              matched.push(elem);
            }
          } else {
            matched.push(elem);
          }
          node = elem;
        }
        return new Z(matched);
      },
      /**
       * @param {string} until
       * @return {?}
       */
      parent : function(until) {
        /** @type {Array} */
        var elements = [];
        /** @type {number} */
        var i = 0;
        for (;i < this.length;i++) {
          if (until) {
            if ($(this[i].parentNode).is(until)) {
              elements.push(this[i].parentNode);
            }
          } else {
            elements.push(this[i].parentNode);
          }
        }
        return $($.unique(elements));
      },
      /**
       * @param {string} el
       * @return {?}
       */
      parents : function(el) {
        /** @type {Array} */
        var roots = [];
        /** @type {number} */
        var i = 0;
        for (;i < this.length;i++) {
          var node = this[i].parentNode;
          for (;node;) {
            if (el) {
              if ($(node).is(el)) {
                roots.push(node);
              }
            } else {
              roots.push(node);
            }
            node = node.parentNode;
          }
        }
        return $($.unique(roots));
      },
      /**
       * @param {string} selector
       * @return {?}
       */
      find : function(selector) {
        /** @type {Array} */
        var results = [];
        /** @type {number} */
        var i = 0;
        for (;i < this.length;i++) {
          var nodes = this[i].querySelectorAll(selector);
          /** @type {number} */
          var index = 0;
          for (;index < nodes.length;index++) {
            results.push(nodes[index]);
          }
        }
        return new Z(results);
      },
      /**
       * @param {string} name
       * @return {?}
       */
      children : function(name) {
        /** @type {Array} */
        var ret = [];
        /** @type {number} */
        var t = 0;
        for (;t < this.length;t++) {
          var childs = this[t].childNodes;
          /** @type {number} */
          var i = 0;
          for (;i < childs.length;i++) {
            if (name) {
              if (1 === childs[i].nodeType) {
                if ($(childs[i]).is(name)) {
                  ret.push(childs[i]);
                }
              }
            } else {
              if (1 === childs[i].nodeType) {
                ret.push(childs[i]);
              }
            }
          }
        }
        return new Z($.unique(ret));
      },
      /**
       * @return {?}
       */
      remove : function() {
        /** @type {number} */
        var i = 0;
        for (;i < this.length;i++) {
          if (this[i].parentNode) {
            this[i].parentNode.removeChild(this[i]);
          }
        }
        return this;
      },
      /**
       * @return {?}
       */
      add : function() {
        var i;
        var bi;
        var r = this;
        /** @type {number} */
        i = 0;
        for (;i < arguments.length;i++) {
          var b = $(arguments[i]);
          /** @type {number} */
          bi = 0;
          for (;bi < b.length;bi++) {
            r[r.length] = b[bi];
            r.length++;
          }
        }
        return r;
      }
    }, $.fn = Z.prototype, $.unique = function(arr) {
      /** @type {Array} */
      var r = [];
      /** @type {number} */
      var i = 0;
      for (;i < arr.length;i++) {
        if (-1 === r.indexOf(arr[i])) {
          r.push(arr[i]);
        }
      }
      return r;
    }, $;
  }();
  /** @type {Array} */
  var codeSegments = ["jQuery", "Zepto", "Dom7"];
  /** @type {number} */
  var i = 0;
  for (;i < codeSegments.length;i++) {
    if (window[codeSegments[i]]) {
      callback(window[codeSegments[i]]);
    }
  }
  var el;
  el = "undefined" == typeof io ? window.Dom7 || (window.Zepto || window.jQuery) : io;
  if (el) {
    if (!("transitionEnd" in el.fn)) {
      /**
       * @param {Function} callback
       * @return {?}
       */
      el.fn.transitionEnd = function(callback) {
        /**
         * @param {Event} ev
         * @return {undefined}
         */
        function one(ev) {
          if (ev.target === this) {
            callback.call(this, ev);
            /** @type {number} */
            i = 0;
            for (;i < events.length;i++) {
              t.off(events[i], one);
            }
          }
        }
        var i;
        /** @type {Array} */
        var events = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"];
        var t = this;
        if (callback) {
          /** @type {number} */
          i = 0;
          for (;i < events.length;i++) {
            t.on(events[i], one);
          }
        }
        return this;
      };
    }
    if (!("transform" in el.fn)) {
      /**
       * @param {Object} lab
       * @return {?}
       */
      el.fn.transform = function(lab) {
        /** @type {number} */
        var i = 0;
        for (;i < this.length;i++) {
          var es = this[i].style;
          es.webkitTransform = es.MsTransform = es.msTransform = es.MozTransform = es.OTransform = es.transform = lab;
        }
        return this;
      };
    }
    if (!("transition" in el.fn)) {
      /**
       * @param {Object} lab
       * @return {?}
       */
      el.fn.transition = function(lab) {
        if ("string" != typeof lab) {
          lab += "ms";
        }
        /** @type {number} */
        var i = 0;
        for (;i < this.length;i++) {
          var es = this[i].style;
          es.webkitTransitionDuration = es.MsTransitionDuration = es.msTransitionDuration = es.MozTransitionDuration = es.OTransitionDuration = es.transitionDuration = lab;
        }
        return this;
      };
    }
  }
  /** @type {function (Object, Object): ?} */
  window.Swiper = init;
}(), "undefined" != typeof module ? module.exports = window.Swiper : "function" == typeof define && (define.amd && define([], function() {
  return window.Swiper;
})), function() {
  var MutationObserver;
  var _util;
  var $;
  var getComputedStyle;
  var regExp;
  /**
   * @param {?} fn
   * @param {Object} me
   * @return {?}
   */
  var __bind = function(fn, me) {
    return function() {
      return fn.apply(me, arguments);
    };
  };
  /** @type {function (this:(Array.<T>|string|{length: number}), T, number=): number} */
  var proceed = [].indexOf || function(name) {
    /** @type {number} */
    var i = 0;
    var l = this.length;
    for (;l > i;i++) {
      if (i in this && this[i] === name) {
        return i;
      }
    }
    return-1;
  };
  _util = function() {
    /**
     * @return {undefined}
     */
    function that() {
    }
    return that.prototype.extend = function(expectedNumberOfNonCommentArgs, opt_attributes) {
      var name;
      var copy;
      for (name in opt_attributes) {
        copy = opt_attributes[name];
        if (null == expectedNumberOfNonCommentArgs[name]) {
          expectedNumberOfNonCommentArgs[name] = copy;
        }
      }
      return expectedNumberOfNonCommentArgs;
    }, that.prototype.isMobile = function(qualifier) {
      return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(qualifier);
    }, that.prototype.createEvent = function(type, bubbles, cancelable, detail) {
      var event;
      return null == bubbles && (bubbles = false), null == cancelable && (cancelable = false), null == detail && (detail = null), null != document.createEvent ? (event = document.createEvent("CustomEvent"), event.initCustomEvent(type, bubbles, cancelable, detail)) : null != document.createEventObject ? (event = document.createEventObject(), event.eventType = type) : event.eventName = type, event;
    }, that.prototype.emitEvent = function(target, type) {
      return null != target.dispatchEvent ? target.dispatchEvent(type) : type in (null != target) ? target[type]() : "on" + type in (null != target) ? target["on" + type]() : void 0;
    }, that.prototype.addEvent = function(element, eventName, handler) {
      return null != element.addEventListener ? element.addEventListener(eventName, handler, false) : null != element.attachEvent ? element.attachEvent("on" + eventName, handler) : element[eventName] = handler;
    }, that.prototype.removeEvent = function(elem, type, handle) {
      return null != elem.removeEventListener ? elem.removeEventListener(type, handle, false) : null != elem.detachEvent ? elem.detachEvent("on" + type, handle) : delete elem[type];
    }, that.prototype.innerHeight = function() {
      return "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight;
    }, that;
  }();
  $ = this.WeakMap || (this.MozWeakMap || ($ = function() {
    /**
     * @return {undefined}
     */
    function Table() {
      /** @type {Array} */
      this.keys = [];
      /** @type {Array} */
      this.values = [];
    }
    return Table.prototype.get = function(name) {
      var i;
      var key;
      var _i;
      var _len;
      var keys;
      keys = this.keys;
      /** @type {number} */
      i = _i = 0;
      _len = keys.length;
      for (;_len > _i;i = ++_i) {
        if (key = keys[i], key === name) {
          return this.values[i];
        }
      }
    }, Table.prototype.set = function(key, value) {
      var i;
      var k;
      var _i;
      var _len;
      var keys;
      keys = this.keys;
      /** @type {number} */
      i = _i = 0;
      _len = keys.length;
      for (;_len > _i;i = ++_i) {
        if (k = keys[i], k === key) {
          return void(this.values[i] = value);
        }
      }
      return this.keys.push(key), this.values.push(value);
    }, Table;
  }()));
  MutationObserver = this.MutationObserver || (this.WebkitMutationObserver || (this.MozMutationObserver || (MutationObserver = function() {
    /**
     * @return {undefined}
     */
    function $() {
      if ("undefined" != typeof console) {
        if (null !== console) {
          console.warn("MutationObserver is not supported by your browser.");
        }
      }
      if ("undefined" != typeof console) {
        if (null !== console) {
          console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.");
        }
      }
    }
    return $.notSupported = true, $.prototype.observe = function() {
    }, $;
  }())));
  getComputedStyle = this.getComputedStyle || function(el, recurring) {
    return this.getPropertyValue = function(prop) {
      var elStyle;
      return "float" === prop && (prop = "styleFloat"), regExp.test(prop) && prop.replace(regExp, function(dataAndEvents, letter) {
        return letter.toUpperCase();
      }), (null != (elStyle = el.currentStyle) ? elStyle[prop] : void 0) || null;
    }, this;
  };
  /** @type {RegExp} */
  regExp = /(\-([a-z]){1})/g;
  this.WOW = function() {
    /**
     * @param {Object} expectedNumberOfNonCommentArgs
     * @return {undefined}
     */
    function $(expectedNumberOfNonCommentArgs) {
      if (null == expectedNumberOfNonCommentArgs) {
        expectedNumberOfNonCommentArgs = {};
      }
      this.scrollCallback = __bind(this.scrollCallback, this);
      this.scrollHandler = __bind(this.scrollHandler, this);
      this.resetAnimation = __bind(this.resetAnimation, this);
      this.start = __bind(this.start, this);
      /** @type {boolean} */
      this.scrolled = true;
      this.config = this.util().extend(expectedNumberOfNonCommentArgs, this.defaults);
      if (null != expectedNumberOfNonCommentArgs.scrollContainer) {
        /** @type {(Element|null)} */
        this.config.scrollContainer = document.querySelector(expectedNumberOfNonCommentArgs.scrollContainer);
      }
      this.animationNameCache = new $;
      this.wowEvent = this.util().createEvent(this.config.boxClass);
    }
    return $.prototype.defaults = {
      boxClass : "wow",
      animateClass : "animated",
      offset : 0,
      mobile : true,
      live : true,
      callback : null,
      scrollContainer : null
    }, $.prototype.init = function() {
      var readyState;
      return this.element = window.document.documentElement, "interactive" === (readyState = document.readyState) || "complete" === readyState ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start), this.finished = [];
    }, $.prototype.start = function() {
      var cur;
      var i;
      var len;
      var rawParams;
      if (this.stopped = false, this.boxes = function() {
        var i;
        var len;
        var rawParams;
        var eventPath;
        rawParams = this.element.querySelectorAll("." + this.config.boxClass);
        /** @type {Array} */
        eventPath = [];
        /** @type {number} */
        i = 0;
        len = rawParams.length;
        for (;len > i;i++) {
          cur = rawParams[i];
          eventPath.push(cur);
        }
        return eventPath;
      }.call(this), this.all = function() {
        var i;
        var len;
        var rawParams;
        var eventPath;
        rawParams = this.boxes;
        /** @type {Array} */
        eventPath = [];
        /** @type {number} */
        i = 0;
        len = rawParams.length;
        for (;len > i;i++) {
          cur = rawParams[i];
          eventPath.push(cur);
        }
        return eventPath;
      }.call(this), this.boxes.length) {
        if (this.disabled()) {
          this.resetStyle();
        } else {
          rawParams = this.boxes;
          /** @type {number} */
          i = 0;
          len = rawParams.length;
          for (;len > i;i++) {
            cur = rawParams[i];
            this.applyStyle(cur, true);
          }
        }
      }
      return this.disabled() || (this.util().addEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), this.util().addEvent(window, "resize", this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50)), this.config.live ? (new MutationObserver(function(paths) {
        return function(worlds) {
          var i;
          var max;
          var file;
          var world;
          var rulesets;
          /** @type {Array} */
          rulesets = [];
          /** @type {number} */
          i = 0;
          max = worlds.length;
          for (;max > i;i++) {
            world = worlds[i];
            rulesets.push(function() {
              var _k;
              var _len;
              var files;
              var _results;
              files = world.addedNodes || [];
              /** @type {Array} */
              _results = [];
              /** @type {number} */
              _k = 0;
              _len = files.length;
              for (;_len > _k;_k++) {
                file = files[_k];
                _results.push(this.doSync(file));
              }
              return _results;
            }.call(paths));
          }
          return rulesets;
        };
      }(this))).observe(document.body, {
        childList : true,
        subtree : true
      }) : void 0;
    }, $.prototype.stop = function() {
      return this.stopped = true, this.util().removeEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), this.util().removeEvent(window, "resize", this.scrollHandler), null != this.interval ? clearInterval(this.interval) : void 0;
    }, $.prototype.sync = function(model) {
      return MutationObserver.notSupported ? this.doSync(this.element) : void 0;
    }, $.prototype.doSync = function(element) {
      var item;
      var i;
      var ilen;
      var items;
      var result;
      if (null == element && (element = this.element), 1 === element.nodeType) {
        element = element.parentNode || element;
        items = element.querySelectorAll("." + this.config.boxClass);
        /** @type {Array} */
        result = [];
        /** @type {number} */
        i = 0;
        ilen = items.length;
        for (;ilen > i;i++) {
          item = items[i];
          if (proceed.call(this.all, item) < 0) {
            this.boxes.push(item);
            this.all.push(item);
            if (this.stopped || this.disabled()) {
              this.resetStyle();
            } else {
              this.applyStyle(item, true);
            }
            result.push(this.scrolled = true);
          } else {
            result.push(void 0);
          }
        }
        return result;
      }
    }, $.prototype.show = function(name) {
      return this.applyStyle(name), name.className = name.className + " " + this.config.animateClass, null != this.config.callback && this.config.callback(name), this.util().emitEvent(name, this.wowEvent), this.util().addEvent(name, "animationend", this.resetAnimation), this.util().addEvent(name, "oanimationend", this.resetAnimation), this.util().addEvent(name, "webkitAnimationEnd", this.resetAnimation), this.util().addEvent(name, "MSAnimationEnd", this.resetAnimation), name;
    }, $.prototype.applyStyle = function(node, deepDataAndEvents) {
      var udataCur;
      var suiteView;
      var failuresLink;
      return suiteView = node.getAttribute("data-wow-duration"), udataCur = node.getAttribute("data-wow-delay"), failuresLink = node.getAttribute("data-wow-iteration"), this.animate(function(dataAndEvents) {
        return function() {
          return dataAndEvents.customStyle(node, deepDataAndEvents, suiteView, udataCur, failuresLink);
        };
      }(this));
    }, $.prototype.animate = function() {
      return "requestAnimationFrame" in window ? function(loop) {
        return window.requestAnimationFrame(loop);
      } : function($sanitize) {
        return $sanitize();
      };
    }(), $.prototype.resetStyle = function() {
      var node;
      var path;
      var _len;
      var scripts;
      var eventPath;
      scripts = this.boxes;
      /** @type {Array} */
      eventPath = [];
      /** @type {number} */
      path = 0;
      _len = scripts.length;
      for (;_len > path;path++) {
        node = scripts[path];
        eventPath.push(node.style.visibility = "visible");
      }
      return eventPath;
    }, $.prototype.resetAnimation = function(e) {
      var regionRow;
      return e.type.toLowerCase().indexOf("animationend") >= 0 ? (regionRow = e.target || e.srcElement, regionRow.className = regionRow.className.replace(this.config.animateClass, "").trim()) : void 0;
    }, $.prototype.customStyle = function(node, deepDataAndEvents, obj, value, el) {
      return deepDataAndEvents && this.cacheAnimationName(node), node.style.visibility = deepDataAndEvents ? "hidden" : "visible", obj && this.vendorSet(node.style, {
        animationDuration : obj
      }), value && this.vendorSet(node.style, {
        animationDelay : value
      }), el && this.vendorSet(node.style, {
        animationIterationCount : el
      }), this.vendorSet(node.style, {
        animationName : deepDataAndEvents ? "none" : this.cachedAnimationName(node)
      }), node;
    }, $.prototype.vendors = ["moz", "webkit"], $.prototype.vendorSet = function(_callbacks, opt_attributes) {
      var selector;
      var eventPath;
      var validator;
      var group;
      /** @type {Array} */
      eventPath = [];
      for (selector in opt_attributes) {
        validator = opt_attributes[selector];
        _callbacks["" + selector] = validator;
        eventPath.push(function() {
          var i;
          var len;
          var groups;
          var validators;
          groups = this.vendors;
          /** @type {Array} */
          validators = [];
          /** @type {number} */
          i = 0;
          len = groups.length;
          for (;len > i;i++) {
            group = groups[i];
            validators.push(_callbacks["" + group + selector.charAt(0).toUpperCase() + selector.substr(1)] = validator);
          }
          return validators;
        }.call(this));
      }
      return eventPath;
    }, $.prototype.vendorCSS = function(elem, prop) {
      var i;
      var ln;
      var configList;
      var ret;
      var cs;
      var name;
      cs = getComputedStyle(elem);
      ret = cs.getPropertyCSSValue(prop);
      configList = this.vendors;
      /** @type {number} */
      i = 0;
      ln = configList.length;
      for (;ln > i;i++) {
        name = configList[i];
        ret = ret || cs.getPropertyCSSValue("-" + name + "-" + prop);
      }
      return ret;
    }, $.prototype.animationName = function(lab) {
      var value;
      try {
        value = this.vendorCSS(lab, "animation-name").cssText;
      } catch (c) {
        value = getComputedStyle(lab).getPropertyValue("animation-name");
      }
      return "none" === value ? "" : value;
    }, $.prototype.cacheAnimationName = function(lab) {
      return this.animationNameCache.set(lab, this.animationName(lab));
    }, $.prototype.cachedAnimationName = function(optgroup) {
      return this.animationNameCache.get(optgroup);
    }, $.prototype.scrollHandler = function() {
      return this.scrolled = true;
    }, $.prototype.scrollCallback = function() {
      var header;
      return!this.scrolled || (this.scrolled = false, this.boxes = function() {
        var i;
        var len;
        var rawParams;
        var headers;
        rawParams = this.boxes;
        /** @type {Array} */
        headers = [];
        /** @type {number} */
        i = 0;
        len = rawParams.length;
        for (;len > i;i++) {
          header = rawParams[i];
          if (header) {
            if (this.isVisible(header)) {
              this.show(header);
            } else {
              headers.push(header);
            }
          }
        }
        return headers;
      }.call(this), this.boxes.length || this.config.live) ? void 0 : this.stop();
    }, $.prototype.offsetTop = function(el) {
      var top;
      for (;void 0 === el.offsetTop;) {
        el = el.parentNode;
      }
      top = el.offsetTop;
      for (;el = el.offsetParent;) {
        top += el.offsetTop;
      }
      return top;
    }, $.prototype.isVisible = function(el) {
      var bottom;
      var e;
      var top;
      var mouseY;
      var f;
      return e = el.getAttribute("data-wow-offset") || this.config.offset, f = this.config.scrollContainer && this.config.scrollContainer.scrollTop || window.pageYOffset, mouseY = f + Math.min(this.element.clientHeight, this.util().innerHeight()) - e, top = this.offsetTop(el), bottom = top + el.clientHeight, mouseY >= top && bottom >= f;
    }, $.prototype.util = function() {
      return null != this._util ? this._util : this._util = new _util;
    }, $.prototype.disabled = function() {
      return!this.config.mobile && this.util().isMobile(navigator.userAgent);
    }, $;
  }();
}.call(this), function($) {
  /**
   * @param {string} spy
   * @return {?}
   */
  function classReg(spy) {
    return new RegExp("(^|\\s+)" + spy + "(\\s+|$)");
  }
  /**
   * @param {string} vvar
   * @param {string} i
   * @return {undefined}
   */
  function toggleClass(vvar, i) {
    var fn = hasClass(vvar, i) ? removeClass : addClass;
    fn(vvar, i);
  }
  var hasClass;
  var addClass;
  var removeClass;
  if ("classList" in document.documentElement) {
    /**
     * @param {string} name
     * @param {string} method
     * @return {?}
     */
    hasClass = function(name, method) {
      return name.classList.contains(method);
    };
    /**
     * @param {string} name
     * @param {string} optgroup
     * @return {undefined}
     */
    addClass = function(name, optgroup) {
      name.classList.add(optgroup);
    };
    /**
     * @param {string} name
     * @param {string} optgroup
     * @return {undefined}
     */
    removeClass = function(name, optgroup) {
      name.classList.remove(optgroup);
    };
  } else {
    /**
     * @param {string} node
     * @param {string} name
     * @return {?}
     */
    hasClass = function(node, name) {
      return classReg(name).test(node.className);
    };
    /**
     * @param {string} name
     * @param {string} method
     * @return {undefined}
     */
    addClass = function(name, method) {
      if (!hasClass(name, method)) {
        /** @type {string} */
        name.className = name.className + " " + method;
      }
    };
    /**
     * @param {string} name
     * @param {string} method
     * @return {undefined}
     */
    removeClass = function(name, method) {
      name.className = name.className.replace(classReg(method), " ");
    };
  }
  var classie = {
    hasClass : hasClass,
    addClass : addClass,
    removeClass : removeClass,
    /** @type {function (string, string): undefined} */
    toggleClass : toggleClass,
    has : hasClass,
    add : addClass,
    remove : removeClass,
    /** @type {function (string, string): undefined} */
    toggle : toggleClass
  };
  if ("function" == typeof define && define.amd) {
    define(classie);
  } else {
    $.classie = classie;
  }
}(window), !function(doc, win, $) {
  /**
   * @param {Function} callback
   * @return {undefined}
   */
  function remove(callback) {
    if (self) {
      callback();
    } else {
      immediateQueue.push(callback);
    }
  }
  /**
   * @param {Object} item
   * @param {string} value
   * @param {Array} results
   * @return {?}
   */
  function cb(item, value, results) {
    /** @type {boolean} */
    var x = true;
    /** @type {number} */
    var money = 1;
    if (value) {
      value = value.toLowerCase();
      do {
        var eventName = 1 == money ? "@" + value : value;
        if (cache[item.id][eventName]) {
          if (cache[item.id][eventName].length) {
            $.each(cache[item.id][eventName], function(dataAndEvents, base) {
              return x = base.apply(item, results || []) !== false;
            });
          }
        }
      } while (x && money--);
    }
    return x;
  }
  /**
   * @param {Object} buffer
   * @param {Object} data
   * @param {?} opt_attributes
   * @param {Function} callback
   * @return {undefined}
   */
  function success(buffer, data, opt_attributes, callback) {
    callback = callback || function(dataAndEvents, ev) {
      return $(ev.currentTarget);
    };
    $.each(opt_attributes, function(offset, index) {
      offset = $.isArray(opt_attributes) ? index : offset;
      (buffers[buffer.id][index] || (buffers[buffer.id][index] = [])).push([data, offset, callback]);
    });
  }
  /**
   * @param {string} url
   * @param {string} s
   * @param {string} value
   * @return {?}
   */
  function match(url, s, value) {
    var g;
    var space = self.imageType;
    return g = "svg" == space ? self.imagePathSVG : self.imagePathPNG, url.replace("{name}", value || "").replace("{img}", g + (index < 2 ? s.toUpperCase() : s) + "." + space).replace("{uni}", s).replace("{alt}", self.convert(s));
  }
  /**
   * @param {string} string
   * @param {?} pattern
   * @param {boolean} dataAndEvents
   * @return {?}
   */
  function filter(string, pattern, dataAndEvents) {
    return string.replace(/:?\+?[\w_\-]+:?/g, function(name) {
      /** @type {string} */
      name = ":" + name.replace(/:$/, "").replace(/^:/, "") + ":";
      var set = self.emojioneList[name];
      return set ? (index > 3 && (set = set.unicode), match(pattern, set[set.length - 1], name)) : dataAndEvents ? "" : name;
    });
  }
  /**
   * @param {string} text
   * @return {undefined}
   */
  function select(text) {
    var sel;
    var range;
    if (win.getSelection) {
      if (sel = win.getSelection(), sel.getRangeAt && sel.rangeCount) {
        /** @type {(Range|null)} */
        range = sel.getRangeAt(0);
        range.deleteContents();
        /** @type {Element} */
        var temp = doc.createElement("div");
        /** @type {string} */
        temp.innerHTML = text;
        var child;
        var startMarker;
        /** @type {DocumentFragment} */
        var newNode = doc.createDocumentFragment();
        for (;child = temp.firstChild;) {
          /** @type {(Node|null)} */
          startMarker = newNode.appendChild(child);
        }
        range.insertNode(newNode);
        if (startMarker) {
          /** @type {(Range|null)} */
          range = range.cloneRange();
          range.setStartAfter(startMarker);
          range.collapse(true);
          sel.removeAllRanges();
          sel.addRange(range);
        }
      }
    } else {
      if (doc.selection) {
        if ("Control" != doc.selection.type) {
          doc.selection.createRange().pasteHTML(text);
        }
      }
    }
  }
  /**
   * @param {string} arg
   * @return {?}
   */
  function fn(arg) {
    return "object" == typeof arg;
  }
  /**
   * @param {Object} settings
   * @return {?}
   */
  function extend(settings) {
    var attributes = render();
    if (settings && settings.filters) {
      var filters = attributes.filters;
      $.each(settings.filters, function(id, attributes) {
        return!fn(attributes) || $.isEmptyObject(attributes) ? void delete filters[id] : void $.each(attributes, function(name, region) {
          filters[id][name] = region;
        });
      });
      settings.filters = filters;
    }
    return $.extend({}, attributes, settings);
  }
  /**
   * @param {string} string
   * @param {string} target
   * @return {?}
   */
  function interpolate(string, target) {
    return string.replace(pattern, function(name) {
      var timeMap = self[0 === index ? "jsecapeMap" : "jsEscapeMap"];
      return "undefined" != typeof name && name in timeMap ? match(target, timeMap[name]) : name;
    });
  }
  /**
   * @param {string} code
   * @param {Object} str
   * @return {?}
   */
  function parse(code, str) {
    return code = code.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/`/g, "&#x60;").replace(/(?:\r\n|\r|\n)/g, "\n").replace(/(\n+)/g, "<div>$1</div>").replace(/\n/g, "<br/>").replace(/<br\/><\/div>/g, "</div>"), str.shortnames && (code = self.shortnameToUnicode(code)), interpolate(code, str.emojiTemplate).replace(/\t/g, "&nbsp;&nbsp;&nbsp;&nbsp;").replace(/  /g, "&nbsp;&nbsp;");
  }
  /**
   * @param {string} v
   * @param {Object} ar
   * @return {?}
   */
  function stripHtml(v, ar) {
    switch(v = v.replace(/<img[^>]*alt="([^"]+)"[^>]*>/gi, "$1").replace(/\n|\r/g, "").replace(/<br[^>]*>/gi, "\n").replace(/(?:<(?:div|p|ol|ul|li|pre|code|object)[^>]*>)+/gi, "<div>").replace(/(?:<\/(?:div|p|ol|ul|li|pre|code|object)>)+/gi, "</div>").replace(/\n<div><\/div>/gi, "\n").replace(/<div><\/div>\n/gi, "\n").replace(/(?:<div>)+<\/div>/gi, "\n").replace(/([^\n])<\/div><div>/gi, "$1\n").replace(/(?:<\/div>)+/gi, "</div>").replace(/([^\n])<\/div>([^\n])/gi, "$1\n$2").replace(/<\/div>/gi, "").replace(/([^\n])<div>/gi, 
    "$1\n").replace(/\n<div>/gi, "\n").replace(/<div>\n/gi, "\n\n").replace(/<(?:[^>]+)?>/g, "").replace(new RegExp(r, "g"), "").replace(/&nbsp;/g, " ").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#x27;/g, "'").replace(/&#x60;/g, "`").replace(/&amp;/g, "&"), ar.saveEmojisAs) {
      case "image":
        v = interpolate(v, ar.emojiTemplate);
        break;
      case "shortname":
        v = self.toShort(v);
    }
    return v;
  }
  /**
   * @return {undefined}
   */
  function callback() {
    var t = this;
    /** @type {number} */
    var start = t.editor[0].offsetWidth - t.editor[0].clientWidth;
    /** @type {number} */
    var end = parseInt(t.button.css("marginRight"));
    if (end !== start) {
      t.button.css({
        marginRight : start
      });
      if (t.floatingPicker) {
        t.picker.css({
          right : parseInt(t.picker.css("right")) - end + start
        });
      }
    }
  }
  /**
   * @return {undefined}
   */
  function update() {
    var that = this;
    if (!that.sprite && that.lasyEmoji[0]) {
      var elemTop = that.picker.offset().top;
      var kEdge = elemTop + that.picker.height() + 20;
      that.lasyEmoji.each(function() {
        var image = $(this);
        var scrollTop = image.offset().top;
        if (scrollTop > elemTop) {
          if (scrollTop < kEdge) {
            image.attr("src", image.data("src")).removeClass("lazy-emoji");
          }
        }
      });
      that.lasyEmoji = that.lasyEmoji.filter(".lazy-emoji");
    }
  }
  /**
   * @param {string} name
   * @param {boolean} signal_eof
   * @return {?}
   */
  function next(name, signal_eof) {
    return(signal_eof ? "" : ".") + key + (name ? "-" + name : "");
  }
  /**
   * @param {string} name
   * @return {?}
   */
  function create(name) {
    var li = $("<div/>", fn(name) ? name : {
      class : next(name, true)
    });
    return $.each(__slice.call(arguments).slice(1), function(dataAndEvents, html) {
      if ($.isFunction(html)) {
        html = html.call(li);
      }
      if (html) {
        $(html).appendTo(li);
      }
    }), li;
  }
  /**
   * @return {?}
   */
  function done() {
    return localStorage.getItem("recent_emojis") || "";
  }
  /**
   * @param {Object} self
   * @return {undefined}
   */
  function show(self) {
    var c = done();
    if (!self.recent || self.recent !== c) {
      if (c.length) {
        var base;
        var i;
        var d = self.scrollArea.is(".skinnable");
        if (!d) {
          base = self.scrollArea.scrollTop();
          i = self.recentCategory.is(":visible") ? self.recentCategory.height() : 0;
        }
        var html = filter(c, self.emojiBtnTemplate, true).split("|").join("");
        if (self.recentCategory.children(".emojibtn").remove(), $(html).insertAfter(self.recentCategory.children("h1")), self.recentCategory.children(".emojibtn").on("click", function() {
          self.trigger("emojibtn.click", $(this));
        }), self.recentFilter.show(), !d) {
          self.recentCategory.show();
          var len = self.recentCategory.height();
          if (i !== len) {
            self.scrollArea.scrollTop(base + len - i);
          }
        }
      } else {
        if (self.recentFilter.hasClass("active")) {
          self.recentFilter.removeClass("active").next().addClass("active");
        }
        self.recentCategory.hide();
        self.recentFilter.hide();
      }
      self.recent = c;
    }
  }
  /**
   * @param {Object} state
   * @param {string} res
   * @return {undefined}
   */
  function handler(state, res) {
    var uHostName = done();
    var c = uHostName.split("|");
    var end = c.indexOf(res);
    if (end !== -1) {
      c.splice(end, 1);
    }
    c.unshift(res);
    if (c.length > 9) {
      c.pop();
    }
    localStorage.setItem("recent_emojis", c.join("|"));
    show(state);
  }
  /**
   * @return {?}
   */
  function supports_html5_storage() {
    /** @type {string} */
    var key = "test";
    try {
      return localStorage.setItem(key, key), localStorage.removeItem(key), true;
    } catch (a) {
      return false;
    }
  }
  /**
   * @param {Object} self
   * @param {Object} element
   * @param {Object} options
   * @return {undefined}
   */
  function init(self, element, options) {
    options = extend(options);
    self.sprite = options.sprite && index < 3;
    self.inline = null === options.inline ? element.is("INPUT") : options.inline;
    self.shortnames = options.shortnames;
    self.saveEmojisAs = options.saveEmojisAs;
    self.standalone = options.standalone;
    /** @type {string} */
    self.emojiTemplate = '<img alt="{alt}" class="emojione' + (self.sprite ? '-{uni}" src="' + j + '"/>' : 'emoji" src="{img}"/>');
    /** @type {string} */
    self.emojiTemplateAlt = self.sprite ? '<i class="emojione-{uni}"/>' : '<img class="emojioneemoji" src="{img}"/>';
    /** @type {string} */
    self.emojiBtnTemplate = '<i class="emojibtn" role="button" data-name="{name}">' + self.emojiTemplateAlt + "</i>";
    self.recentEmojis = options.recentEmojis && supports_html5_storage();
    var layout = options.pickerPosition;
    /** @type {boolean} */
    self.floatingPicker = "top" === layout || "bottom" === layout;
    var body;
    var x;
    var resp;
    var tip;
    var header;
    var elem;
    var ul;
    var lis;
    var el;
    /** @type {string} */
    var iterator = element.is("TEXTAREA") || element.is("INPUT") ? "val" : "text";
    var label = create({
      class : key + (self.standalone ? " " + key + "-standalone " : " ") + (element.attr("class") || ""),
      role : "application"
    }, body = self.editor = create("editor").attr({
      contenteditable : !self.standalone,
      placeholder : options.placeholder || (element.data("placeholder") || (element.attr("placeholder") || "")),
      tabindex : 0
    }), x = self.button = create("button", create("button-open"), create("button-close")).attr("title", options.buttonTitle), resp = self.picker = create("picker", create("wrapper", header = create("filters"), el = create("scroll-area", ul = create("emojis-list"), tip = create("tones", function() {
      if (options.tones) {
        this.addClass(next("tones-" + options.tonesStyle, true));
        /** @type {number} */
        var i = 0;
        for (;i <= 5;i++) {
          this.append($("<i/>", {
            class : "btn-tone btn-tone-" + i + (i ? "" : " active"),
            "data-skin" : i,
            role : "button"
          }));
        }
      }
    })))).addClass(next("picker-position-" + options.pickerPosition, true)).addClass(next("filters-position-" + options.filtersPosition, true)).addClass("hidden"));
    if (body.data(element.data()), $.each(options.attributes, function(tr, val) {
      body.attr(tr, val);
    }), $.each(options.filters, function(file, data) {
      /** @type {number} */
      var last = 0;
      if ("recent" !== file || self.recentEmojis) {
        if ("tones" !== file) {
          $("<i/>", {
            class : next("filter", true) + " " + next("filter-" + file, true),
            "data-filter" : file,
            title : data.title
          }).wrapInner(filter(data.icon, self.emojiTemplateAlt)).appendTo(header);
        } else {
          if (!options.tones) {
            return;
          }
          /** @type {number} */
          last = 5;
        }
        do {
          var t = create("category").attr({
            name : file,
            "data-tone" : last
          }).appendTo(ul);
          var str = data.emoji.replace(/[\s,;]+/g, "|");
          if (last > 0) {
            t.hide();
            str = str.split("|").join("_tone" + last + "|") + "_tone" + last;
          }
          if ("recent" === file) {
            str = done();
          }
          str = filter(str, self.sprite ? '<i class="emojibtn" role="button" data-name="{name}"><i class="emojione-{uni}"></i></i>' : '<i class="emojibtn" role="button" data-name="{name}"><img class="emojioneemoji lazy-emoji" data-src="{img}"/></i>', true).split("|").join("");
          t.html(str);
          $("<h1/>").text(data.title).prependTo(t);
        } while (--last > 0);
      }
    }), options.filters = null, self.sprite || (self.lasyEmoji = ul.find(".lazy-emoji")), elem = header.find(next("filter")), elem.eq(0).addClass("active"), lis = ul.find(next("category")), self.recentFilter = elem.filter('[data-filter="recent"]'), self.recentCategory = lis.filter("[name=recent]"), self.scrollArea = el, options.container ? $(options.container).wrapInner(label) : label.insertAfter(element), options.hideSource && element.hide(), self.setText(element[iterator]()), element[iterator](self.getText()), 
    callback.apply(self), self.standalone && !self.getText().length) {
      var text = $(element).data("emoji-placeholder") || options.emojiPlaceholder;
      self.setText(text);
      body.addClass("has-placeholder");
    }
    success(self, ul.find(".emojibtn"), {
      click : "emojibtn.click"
    });
    success(self, win, {
      resize : "!resize"
    });
    success(self, tip.children(), {
      click : "tone.click"
    });
    success(self, [resp, x], {
      mousedown : "!mousedown"
    }, body);
    success(self, x, {
      click : "button.click"
    });
    success(self, body, {
      paste : "!paste"
    }, body);
    success(self, body, ["focus", "blur"], function() {
      return!self.stayFocused && body;
    });
    success(self, resp, {
      mousedown : "picker.mousedown",
      mouseup : "picker.mouseup",
      click : "picker.click",
      keyup : "picker.keyup",
      keydown : "picker.keydown",
      keypress : "picker.keypress"
    });
    success(self, body, ["mousedown", "mouseup", "click", "keyup", "keydown", "keypress"]);
    success(self, resp.find(".emojionearea-filter"), {
      click : "filter.click"
    });
    /** @type {boolean} */
    var Q = false;
    if (el.on("scroll", function() {
      if (!Q && (update.call(self), el.is(":not(.skinnable)"))) {
        var frame = lis.eq(0);
        var base = el.offset().top;
        lis.each(function(dataAndEvents, id) {
          return!($(id).offset().top - base >= 10) && void(frame = $(id));
        });
        var next = elem.filter('[data-filter="' + frame.attr("name") + '"]');
        if (next[0]) {
          if (!next.is(".active")) {
            elem.removeClass("active");
            next.addClass("active");
          }
        }
      }
    }), self.on("@filter.click", function(element) {
      var b = element.is(".active");
      if (el.is(".skinnable")) {
        if (b) {
          return;
        }
        tip.children().eq(0).click();
      }
      /** @type {boolean} */
      Q = true;
      if (!b) {
        elem.filter(".active").removeClass("active");
        element.addClass("active");
      }
      var i = lis.filter('[name="' + element.data("filter") + '"]').offset().top;
      var offset = el.scrollTop();
      var start = el.offset().top;
      el.stop().animate({
        scrollTop : i + offset - start - 2
      }, 200, "swing", function() {
        update.call(self);
        /** @type {boolean} */
        Q = false;
      });
    }).on("@picker.show", function() {
      if (self.recentEmojis) {
        show(self);
      }
      update.call(this);
    }).on("@tone.click", function(next) {
      tip.children().removeClass("active");
      var name = next.addClass("active").data("skin");
      if (name) {
        el.addClass("skinnable");
        lis.hide().filter("[data-tone=" + name + "]").show();
        if (elem.eq(0).is('.active[data-filter="recent"]')) {
          elem.eq(0).removeClass("active").next().addClass("active");
        }
      } else {
        el.removeClass("skinnable");
        lis.hide().filter("[data-tone=0]").show();
        elem.eq(0).click();
      }
      update.call(self);
    }).on("@button.click", function(d) {
      if (d.is(".active")) {
        self.hidePicker();
      } else {
        self.showPicker();
      }
    }).on("@!paste", function($element, event) {
      /**
       * @param {string} str
       * @return {undefined}
       */
      var handler = function(str) {
        /** @type {string} */
        var idfirst = "caret-" + (new Date).getTime();
        var root = parse(str, self);
        select(root);
        select('<i id="' + idfirst + '"></i>');
        $element.scrollTop(lab);
        var hidden = $("#" + idfirst);
        /** @type {number} */
        var ph = hidden.offset().top - $element.offset().top;
        var j = $element.height();
        if (lab + ph >= j || lab > ph) {
          $element.scrollTop(lab + ph - 2 * j / 3);
        }
        hidden.remove();
        /** @type {boolean} */
        self.stayFocused = false;
        callback.apply(self);
        cb(self, "paste", [$element, str, root]);
      };
      if (event.originalEvent.clipboardData) {
        var req = event.originalEvent.clipboardData.getData("text/plain");
        return handler(req), event.preventDefault ? event.preventDefault() : event.stop(), event.returnValue = false, event.stopPropagation(), false;
      }
      /** @type {boolean} */
      self.stayFocused = true;
      select("<span>" + r + "</span>");
      var length = execCommandOnElement($element[0]);
      var lab = $element.scrollTop();
      var $html = $("<div/>", {
        contenteditable : true
      }).css({
        position : "fixed",
        left : "-999px",
        width : "1px",
        height : "1px",
        top : "20px",
        overflow : "hidden"
      }).appendTo($("BODY")).focus();
      win.setTimeout(function() {
        $element.focus();
        selectText($element[0], length);
        var result = stripHtml($html.html().replace(/\r\n|\n|\r/g, "<br>"), self);
        $html.remove();
        handler(result);
      }, 200);
    }).on("@emojibtn.click", function(prop) {
      body.removeClass("has-placeholder");
      if (!label.is(".focused")) {
        body.focus();
      }
      if (self.standalone) {
        body.html(filter(prop.data("name"), self.emojiTemplate));
        self.trigger("blur");
      } else {
        execCommandOnElement(body[0]);
        select(filter(prop.data("name"), self.emojiTemplate));
      }
      if (self.recentEmojis) {
        handler(self, prop.data("name"));
      }
    }).on("@!resize @keyup @emojibtn.click", callback).on("@!mousedown", function(submenu, types) {
      return label.is(".focused") || submenu.focus(), types.preventDefault(), false;
    }).on("@change", function() {
      var requestUrl = self.editor.html().replace(/<\/?(?:div|span|p)[^>]*>/gi, "");
      if (!(requestUrl.length && !/^<br[^>]*>$/i.test(requestUrl))) {
        self.editor.html(self.content = "");
      }
      element[iterator](self.getText());
    }).on("@focus", function() {
      label.addClass("focused");
    }).on("@blur", function() {
      label.removeClass("focused");
      if (options.hidePickerOnBlur) {
        self.hidePicker();
      }
      var error = self.editor.html();
      if (self.content !== error) {
        self.content = error;
        cb(self, "change", [self.editor]);
        element.blur().trigger("change");
      } else {
        element.blur();
      }
    }), options.shortcuts && self.on("@keydown", function(dataAndEvents, event) {
      if (!event.ctrlKey) {
        if (9 == event.which) {
          event.preventDefault();
          x.click();
        } else {
          if (27 == event.which) {
            event.preventDefault();
            if (x.is(".active")) {
              self.hidePicker();
            }
          }
        }
      }
    }), fn(options.events) && (!$.isEmptyObject(options.events) && $.each(options.events, function(s, one) {
      self.on(s.replace(/_/g, "."), one);
    })), options.autocomplete) {
      /**
       * @return {undefined}
       */
      var init = function() {
        var blockMarkerBeg = {
          maxCount : options.textcomplete.maxCount,
          placement : options.textcomplete.placement
        };
        if (options.shortcuts) {
          /**
           * @param {Event} event
           * @param {?} evt
           * @return {?}
           */
          blockMarkerBeg.onKeydown = function(event, evt) {
            if (!event.ctrlKey && 13 == event.which) {
              return evt.KEY_ENTER;
            }
          };
        }
        var scripts = $.map(self.emojioneList, function(dataAndEvents, data) {
          return options.autocompleteTones ? data : /_tone[12345]/.test(data) ? null : data;
        });
        scripts.sort();
        body.textcomplete([{
          id : key,
          match : /\B(:[\-+\w]*)$/,
          /**
           * @param {string} name
           * @param {?} callback
           * @return {undefined}
           */
          search : function(name, callback) {
            callback($.map(scripts, function(selfClosing) {
              return 0 === selfClosing.indexOf(name) ? selfClosing : null;
            }));
          },
          /**
           * @param {string} data
           * @return {?}
           */
          template : function(data) {
            return filter(data, self.emojiTemplate) + " " + data.replace(/:/g, "");
          },
          /**
           * @param {RegExp} item
           * @return {?}
           */
          replace : function(item) {
            return filter(item, self.emojiTemplate);
          },
          cache : true,
          index : 1
        }], blockMarkerBeg);
        if (options.textcomplete.placement) {
          if ("static" == $(body.data("textComplete").option.appendTo).css("position")) {
            $(body.data("textComplete").option.appendTo).css("position", "relative");
          }
        }
      };
      if ($.fn.textcomplete) {
        init();
      } else {
        $.getScript("https://cdn.rawgit.com/yuku-t/jquery-textcomplete/v1.3.4/dist/jquery.textcomplete.js", init);
      }
    }
    if (self.inline) {
      label.addClass(next("inline", true));
      self.on("@keydown", function(dataAndEvents, event) {
        if (13 == event.which) {
          event.preventDefault();
        }
      });
    }
    if (/firefox/i.test(navigator.userAgent)) {
      doc.execCommand("enableObjectResizing", false, false);
    }
  }
  /**
   * @param {Object} settings
   * @return {undefined}
   */
  function socialSharePrivacy(settings) {
    /**
     * @param {?} event
     * @return {?}
     */
    function trigger(event) {
      var related = event.cacheBustParam;
      return fn(event.jsEscapeMap) ? "?v=1.2.4" === related ? "2.0.0" : "?v=2.0.1" === related ? "2.1.0" : "?v=2.1.1" === related ? "2.1.1" : "?v=2.1.2" === related ? "2.1.2" : "?v=2.1.3" === related ? "2.1.3" : "2.1.4" : "1.5.2";
    }
    /**
     * @param {?} results
     * @return {?}
     */
    function find(results) {
      switch(results) {
        case "1.5.2":
          return 0;
        case "2.0.0":
          return 1;
        case "2.1.0":
        ;
        case "2.1.1":
          return 2;
        case "2.1.2":
          return 3;
        case "2.1.3":
        ;
        case "2.1.4":
        ;
        default:
          return 4;
      }
    }
    settings = extend(settings);
    if (!token.isLoading) {
      if (!self || find(trigger(self)) < 2) {
        /** @type {boolean} */
        token.isLoading = true;
        $.getScript(token.defaultBase + value + "/lib/js/emojione.min.js", function() {
          if (self = win.emojione, value = trigger(self), index = find(value), token.base = token.defaultBase + value + "/assets", settings.sprite) {
            /** @type {string} */
            var path = token.base + "/sprites/emojione.sprites.css";
            if (doc.createStyleSheet) {
              doc.createStyleSheet(path);
            } else {
              $("<link/>", {
                rel : "stylesheet",
                href : path
              }).appendTo("head");
            }
          }
          for (;immediateQueue.length;) {
            immediateQueue.shift().call();
          }
          /** @type {boolean} */
          token.isLoading = false;
        });
      } else {
        value = trigger(self);
        index = find(value);
        /** @type {string} */
        token.base = token.defaultBase + value + "/assets";
      }
    }
    remove(function() {
      if (settings.useInternalCDN) {
        /** @type {string} */
        self.imagePathPNG = token.base + "/png/";
        /** @type {string} */
        self.imagePathSVG = token.base + "/svg/";
        /** @type {string} */
        self.imagePathSVGSprites = token.base + "/sprites/emojione.sprites.svg";
        self.imageType = settings.imageType;
      }
      /** @type {RegExp} */
      pattern = new RegExp("<object[^>]*>.*?</object>|<span[^>]*>.*?</span>|<(?:object|embed|svg|img|div|span|p|a)[^>]*>|(" + self.unicodeRegexp + ")", "gi");
    });
  }
  /**
   * @param {Object} args
   * @param {string} index
   * @return {undefined}
   */
  function add(args, index) {
    index = index.replace(/^@/, "");
    var id = args.id;
    if (buffers[id][index]) {
      $.each(buffers[id][index], function(dataAndEvents, obj) {
        $.each($.isArray(obj[0]) ? obj[0] : [obj[0]], function(dataAndEvents, mediaElem) {
          $(mediaElem).on(obj[1], function() {
            /** @type {Array.<?>} */
            var otherArgs = __slice.call(arguments);
            var context = $.isFunction(obj[2]) ? obj[2].apply(args, [index].concat(otherArgs)) : obj[2];
            if (context) {
              cb(args, index, [context].concat(otherArgs));
            }
          });
        });
      });
      /** @type {null} */
      buffers[id][index] = null;
    }
  }
  var execCommandOnElement;
  var selectText;
  /** @type {number} */
  var TWEEN_ID_COUNTER = 0;
  var cache = {};
  var buffers = {};
  var self = win.emojione;
  /** @type {Array} */
  var immediateQueue = [];
  /** @type {string} */
  var j = "data:image/gif;base64,R0lGODlhAQABAJH/AP///wAAAMDAwAAAACH5BAEAAAIALAAAAAABAAEAAAICVAEAOw==";
  /** @type {function (this:(Array.<T>|string|{length: number}), *=, *=): Array.<T>} */
  var __slice = [].slice;
  /** @type {string} */
  var key = "emojionearea";
  /** @type {number} */
  var index = 0;
  /** @type {string} */
  var r = "&#8203;";
  /**
   * @return {?}
   */
  var render = function() {
    return $.fn.emojioneArea && $.fn.emojioneArea.defaults ? $.fn.emojioneArea.defaults : {
      attributes : {
        dir : "ltr",
        spellcheck : false,
        autocomplete : "off",
        autocorrect : "off",
        autocapitalize : "off"
      },
      placeholder : null,
      emojiPlaceholder : ":smiley:",
      container : null,
      hideSource : true,
      shortnames : true,
      sprite : true,
      pickerPosition : "top",
      filtersPosition : "top",
      hidePickerOnBlur : true,
      buttonTitle : "Use the TAB key to insert emoji faster",
      tones : true,
      tonesStyle : "bullet",
      inline : null,
      saveEmojisAs : "unicode",
      shortcuts : true,
      autocomplete : true,
      autocompleteTones : false,
      standalone : false,
      useInternalCDN : true,
      imageType : "png",
      recentEmojis : true,
      textcomplete : {
        maxCount : 15,
        placement : null
      },
      filters : {
        tones : {
          title : "Diversity",
          emoji : "santa runner surfer swimmer lifter ear nose point_up_2 point_down point_left point_right punch wave ok_hand thumbsup thumbsdown clap open_hands boy girl man woman cop bride_with_veil person_with_blond_hair man_with_gua_pi_mao man_with_turban older_man grandma baby construction_worker princess angel information_desk_person guardsman dancer nail_care massage haircut muscle spy hand_splayed middle_finger vulcan no_good ok_woman bow raising_hand raised_hands person_frowning person_with_pouting_face pray rowboat bicyclist mountain_bicyclist walking bath metal point_up basketball_player fist raised_hand v writing_hand"
        },
        recent : {
          icon : "clock3",
          title : "Recent",
          emoji : ""
        },
        smileys_people : {
          icon : "yum",
          title : "Smileys & People",
          emoji : "grinning grimacing grin joy smiley smile sweat_smile laughing innocent wink blush slight_smile upside_down relaxed yum relieved heart_eyes kissing_heart kissing kissing_smiling_eyes kissing_closed_eyes stuck_out_tongue_winking_eye stuck_out_tongue_closed_eyes stuck_out_tongue money_mouth nerd sunglasses hugging smirk no_mouth neutral_face expressionless unamused rolling_eyes thinking flushed disappointed worried angry rage pensive confused slight_frown frowning2 persevere confounded tired_face weary triumph open_mouth scream fearful cold_sweat hushed frowning anguished cry disappointed_relieved sleepy sweat sob dizzy_face astonished zipper_mouth mask thermometer_face head_bandage sleeping zzz poop smiling_imp imp japanese_ogre japanese_goblin skull ghost alien robot smiley_cat smile_cat joy_cat heart_eyes_cat smirk_cat kissing_cat scream_cat crying_cat_face pouting_cat raised_hands clap wave thumbsup thumbsdown punch fist v ok_hand raised_hand open_hands muscle pray point_up point_up_2 point_down point_left point_right middle_finger hand_splayed metal vulcan writing_hand nail_care lips tongue ear nose eye eyes bust_in_silhouette busts_in_silhouette speaking_head baby boy girl man woman person_with_blond_hair older_man older_woman man_with_gua_pi_mao man_with_turban cop construction_worker guardsman spy santa angel princess bride_with_veil walking runner dancer dancers couple two_men_holding_hands two_women_holding_hands bow information_desk_person no_good ok_woman raising_hand person_with_pouting_face person_frowning haircut massage couple_with_heart couple_ww couple_mm couplekiss kiss_ww kiss_mm family family_mwg family_mwgb family_mwbb family_mwgg family_wwb family_wwg family_wwgb family_wwbb family_wwgg family_mmb family_mmg family_mmgb family_mmbb family_mmgg womans_clothes shirt jeans necktie dress bikini kimono lipstick kiss footprints high_heel sandal boot mans_shoe athletic_shoe womans_hat tophat helmet_with_cross mortar_board crown school_satchel pouch purse handbag briefcase eyeglasses dark_sunglasses ring closed_umbrella"
        },
        animals_nature : {
          icon : "hamster",
          title : "Animals & Nature",
          emoji : "dog cat mouse hamster rabbit bear panda_face koala tiger lion_face cow pig pig_nose frog octopus monkey_face see_no_evil hear_no_evil speak_no_evil monkey chicken penguin bird baby_chick hatching_chick hatched_chick wolf boar horse unicorn bee bug snail beetle ant spider scorpion crab snake turtle tropical_fish fish blowfish dolphin whale whale2 crocodile leopard tiger2 water_buffalo ox cow2 dromedary_camel camel elephant goat ram sheep racehorse pig2 rat mouse2 rooster turkey dove dog2 poodle cat2 rabbit2 chipmunk feet dragon dragon_face cactus christmas_tree evergreen_tree deciduous_tree palm_tree seedling herb shamrock four_leaf_clover bamboo tanabata_tree leaves fallen_leaf maple_leaf ear_of_rice hibiscus sunflower rose tulip blossom cherry_blossom bouquet mushroom chestnut jack_o_lantern shell spider_web earth_americas earth_africa earth_asia full_moon waning_gibbous_moon last_quarter_moon waning_crescent_moon new_moon waxing_crescent_moon first_quarter_moon waxing_gibbous_moon new_moon_with_face full_moon_with_face first_quarter_moon_with_face last_quarter_moon_with_face sun_with_face crescent_moon star star2 dizzy sparkles comet sunny white_sun_small_cloud partly_sunny white_sun_cloud white_sun_rain_cloud cloud cloud_rain thunder_cloud_rain cloud_lightning zap fire boom snowflake cloud_snow snowman2 snowman wind_blowing_face dash cloud_tornado fog umbrella2 umbrella droplet sweat_drops ocean"
        },
        food_drink : {
          icon : "pizza",
          title : "Food & Drink",
          emoji : "green_apple apple pear tangerine lemon banana watermelon grapes strawberry melon cherries peach pineapple tomato eggplant hot_pepper corn sweet_potato honey_pot bread cheese poultry_leg meat_on_bone fried_shrimp egg hamburger fries hotdog pizza spaghetti taco burrito ramen stew fish_cake sushi bento curry rice_ball rice rice_cracker oden dango shaved_ice ice_cream icecream cake birthday custard candy lollipop chocolate_bar popcorn doughnut cookie beer beers wine_glass cocktail tropical_drink champagne sake tea coffee baby_bottle fork_and_knife fork_knife_plate"
        },
        activity : {
          icon : "basketball",
          title : "Activity",
          emoji : "soccer basketball football baseball tennis volleyball rugby_football 8ball golf golfer ping_pong badminton hockey field_hockey cricket ski skier snowboarder ice_skate bow_and_arrow fishing_pole_and_fish rowboat swimmer surfer bath basketball_player lifter bicyclist mountain_bicyclist horse_racing levitate trophy running_shirt_with_sash medal military_medal reminder_ribbon rosette ticket tickets performing_arts art circus_tent microphone headphones musical_score musical_keyboard saxophone trumpet guitar violin clapper video_game space_invader dart game_die slot_machine bowling"
        },
        travel_places : {
          icon : "rocket",
          title : "Travel & Places",
          emoji : "red_car taxi blue_car bus trolleybus race_car police_car ambulance fire_engine minibus truck articulated_lorry tractor motorcycle bike rotating_light oncoming_police_car oncoming_bus oncoming_automobile oncoming_taxi aerial_tramway mountain_cableway suspension_railway railway_car train monorail bullettrain_side bullettrain_front light_rail mountain_railway steam_locomotive train2 metro tram station helicopter airplane_small airplane airplane_departure airplane_arriving sailboat motorboat speedboat ferry cruise_ship rocket satellite_orbital seat anchor construction fuelpump busstop vertical_traffic_light traffic_light checkered_flag ship ferris_wheel roller_coaster carousel_horse construction_site foggy tokyo_tower factory fountain rice_scene mountain mountain_snow mount_fuji volcano japan camping tent park motorway railway_track sunrise sunrise_over_mountains desert beach island city_sunset city_dusk cityscape night_with_stars bridge_at_night milky_way stars sparkler fireworks rainbow homes european_castle japanese_castle stadium statue_of_liberty house house_with_garden house_abandoned office department_store post_office european_post_office hospital bank hotel convenience_store school love_hotel wedding classical_building church mosque synagogue kaaba shinto_shrine"
        },
        objects : {
          icon : "bulb",
          title : "Objects",
          emoji : "watch iphone calling computer keyboard desktop printer mouse_three_button trackball joystick compression minidisc floppy_disk cd dvd vhs camera camera_with_flash video_camera movie_camera projector film_frames telephone_receiver telephone pager fax tv radio microphone2 level_slider control_knobs stopwatch timer alarm_clock clock hourglass_flowing_sand hourglass satellite battery electric_plug bulb flashlight candle wastebasket oil money_with_wings dollar yen euro pound moneybag credit_card gem scales wrench hammer hammer_pick tools pick nut_and_bolt gear chains gun bomb knife dagger crossed_swords shield smoking skull_crossbones coffin urn amphora crystal_ball prayer_beads barber alembic telescope microscope hole pill syringe thermometer label bookmark toilet shower bathtub key key2 couch sleeping_accommodation bed door bellhop frame_photo map beach_umbrella moyai shopping_bags balloon flags ribbon gift confetti_ball tada dolls wind_chime crossed_flags izakaya_lantern envelope envelope_with_arrow incoming_envelope e-mail love_letter postbox mailbox_closed mailbox mailbox_with_mail mailbox_with_no_mail package postal_horn inbox_tray outbox_tray scroll page_with_curl bookmark_tabs bar_chart chart_with_upwards_trend chart_with_downwards_trend page_facing_up date calendar calendar_spiral card_index card_box ballot_box file_cabinet clipboard notepad_spiral file_folder open_file_folder dividers newspaper2 newspaper notebook closed_book green_book blue_book orange_book notebook_with_decorative_cover ledger books book link paperclip paperclips scissors triangular_ruler straight_ruler pushpin round_pushpin triangular_flag_on_post flag_white flag_black closed_lock_with_key lock unlock lock_with_ink_pen pen_ballpoint pen_fountain black_nib pencil pencil2 crayon paintbrush mag mag_right"
        },
        symbols : {
          icon : "heartpulse",
          title : "Symbols",
          emoji : "heart yellow_heart green_heart blue_heart purple_heart broken_heart heart_exclamation two_hearts revolving_hearts heartbeat heartpulse sparkling_heart cupid gift_heart heart_decoration peace cross star_and_crescent om_symbol wheel_of_dharma star_of_david six_pointed_star menorah yin_yang orthodox_cross place_of_worship ophiuchus aries taurus gemini cancer leo virgo libra scorpius sagittarius capricorn aquarius pisces id atom u7a7a u5272 radioactive biohazard mobile_phone_off vibration_mode u6709 u7121 u7533 u55b6 u6708 eight_pointed_black_star vs accept white_flower ideograph_advantage secret congratulations u5408 u6e80 u7981 a b ab cl o2 sos no_entry name_badge no_entry_sign x o anger hotsprings no_pedestrians do_not_litter no_bicycles non-potable_water underage no_mobile_phones exclamation grey_exclamation question grey_question bangbang interrobang 100 low_brightness high_brightness trident fleur-de-lis part_alternation_mark warning children_crossing beginner recycle u6307 chart sparkle eight_spoked_asterisk negative_squared_cross_mark white_check_mark diamond_shape_with_a_dot_inside cyclone loop globe_with_meridians m atm sa passport_control customs baggage_claim left_luggage wheelchair no_smoking wc parking potable_water mens womens baby_symbol restroom put_litter_in_its_place cinema signal_strength koko ng ok up cool new free zero one two three four five six seven eight nine ten 1234 arrow_forward pause_button play_pause stop_button record_button track_next track_previous fast_forward rewind twisted_rightwards_arrows repeat repeat_one arrow_backward arrow_up_small arrow_down_small arrow_double_up arrow_double_down arrow_right arrow_left arrow_up arrow_down arrow_upper_right arrow_lower_right arrow_lower_left arrow_upper_left arrow_up_down left_right_arrow arrows_counterclockwise arrow_right_hook leftwards_arrow_with_hook arrow_heading_up arrow_heading_down hash asterisk information_source abc abcd capital_abcd symbols musical_note notes wavy_dash curly_loop heavy_check_mark arrows_clockwise heavy_plus_sign heavy_minus_sign heavy_division_sign heavy_multiplication_x heavy_dollar_sign currency_exchange copyright registered tm end back on top soon ballot_box_with_check radio_button white_circle black_circle red_circle large_blue_circle small_orange_diamond small_blue_diamond large_orange_diamond large_blue_diamond small_red_triangle black_small_square white_small_square black_large_square white_large_square small_red_triangle_down black_medium_square white_medium_square black_medium_small_square white_medium_small_square black_square_button white_square_button speaker sound loud_sound mute mega loudspeaker bell no_bell black_joker mahjong spades clubs hearts diamonds flower_playing_cards thought_balloon anger_right speech_balloon clock1 clock2 clock3 clock4 clock5 clock6 clock7 clock8 clock9 clock10 clock11 clock12 clock130 clock230 clock330 clock430 clock530 clock630 clock730 clock830 clock930 clock1030 clock1130 clock1230 eye_in_speech_bubble"
        },
        flags : {
          icon : "flag_gb",
          title : "Flags",
          emoji : "ac af al dz ad ao ai ag ar am aw au at az bs bh bd bb by be bz bj bm bt bo ba bw br bn bg bf bi cv kh cm ca ky cf td flag_cl cn co km cg flag_cd cr hr cu cy cz dk dj dm do ec eg sv gq er ee et fk fo fj fi fr pf ga gm ge de gh gi gr gl gd gu gt gn gw gy ht hn hk hu is in flag_id ir iq ie il it ci jm jp je jo kz ke ki xk kw kg la lv lb ls lr ly li lt lu mo mk mg mw my mv ml mt mh mr mu mx fm md mc mn me ms ma mz mm na nr np nl nc nz ni ne flag_ng nu kp no om pk pw ps pa pg py pe ph pl pt pr qa ro ru rw sh kn lc vc ws sm st flag_sa sn rs sc sl sg sk si sb so za kr es lk sd sr sz se ch sy tw tj tz th tl tg to tt tn tr flag_tm flag_tm ug ua ae gb us vi uy uz vu va ve vn wf eh ye zm zw re ax ta io bq cx cc gg im yt nf pn bl pm gs tk bv hm sj um ic ea cp dg as aq vg ck cw eu gf tf gp mq mp sx ss tc "
        }
      }
    };
  };
  if (win.getSelection && doc.createRange) {
    /**
     * @param {?} el
     * @return {?}
     */
    execCommandOnElement = function(el) {
      /** @type {(Selection|null)} */
      var sel = win.getSelection && win.getSelection();
      if (sel && sel.rangeCount > 0) {
        /** @type {(Range|null)} */
        var range = sel.getRangeAt(0);
        /** @type {(Range|null)} */
        var r = range.cloneRange();
        return r.selectNodeContents(el), r.setEnd(range.startContainer, range.startOffset), r.toString().length;
      }
    };
    /**
     * @param {?} el
     * @param {number} start
     * @return {undefined}
     */
    selectText = function(el, start) {
      /** @type {number} */
      var offset = 0;
      /** @type {(Range|null)} */
      var range = doc.createRange();
      range.setStart(el, 0);
      range.collapse(true);
      var match;
      /** @type {Array} */
      var eventPath = [el];
      /** @type {boolean} */
      var i = false;
      /** @type {boolean} */
      var inDoc = false;
      for (;!inDoc && (match = eventPath.pop());) {
        if (3 == match.nodeType) {
          var end = offset + match.length;
          if (!i) {
            if (start >= offset) {
              if (start <= end) {
                range.setStart(match, start - offset);
                range.setEnd(match, start - offset);
                /** @type {boolean} */
                inDoc = true;
              }
            }
          }
          offset = end;
        } else {
          var col = match.childNodes.length;
          for (;col--;) {
            eventPath.push(match.childNodes[col]);
          }
        }
      }
      /** @type {(Selection|null)} */
      start = win.getSelection();
      start.removeAllRanges();
      start.addRange(range);
    };
  } else {
    if (doc.selection) {
      if (doc.body.createTextRange) {
        /**
         * @param {?} el
         * @return {?}
         */
        execCommandOnElement = function(el) {
          /** @type {(ControlRange|TextRange|null)} */
          var real = doc.selection.createRange();
          /** @type {(TextRange|null)} */
          var r = doc.body.createTextRange();
          r.moveToElementText(el);
          r.setEndPoint("EndToStart", real);
          var prev = r.text.length;
          return prev + real.text.length;
        };
        /**
         * @param {?} el
         * @param {?} start
         * @return {undefined}
         */
        selectText = function(el, start) {
          /** @type {(TextRange|null)} */
          var range = doc.body.createTextRange();
          range.moveToElementText(el);
          range.collapse(true);
          range.moveEnd("character", start);
          range.moveStart("character", start);
          range.select();
        };
      }
    }
  }
  var pattern;
  var value = win.emojioneVersion || "2.1.4";
  var token = {
    defaultBase : "https://cdnjs.cloudflare.com/ajax/libs/emojione/",
    base : null,
    isLoading : false
  };
  /**
   * @param {Object} selector
   * @param {Object} options
   * @return {undefined}
   */
  var t = function(selector, options) {
    var self = this;
    socialSharePrivacy(options);
    cache[self.id = ++TWEEN_ID_COUNTER] = {};
    buffers[self.id] = {};
    remove(function() {
      init(self, selector, options);
    });
  };
  /**
   * @param {string} type
   * @param {Function} fn
   * @return {?}
   */
  t.prototype.on = function(type, fn) {
    if (type && $.isFunction(fn)) {
      var arg = this;
      $.each(type.toLowerCase().split(" "), function(dataAndEvents, name) {
        add(arg, name);
        (cache[arg.id][name] || (cache[arg.id][name] = [])).push(fn);
      });
    }
    return this;
  };
  /**
   * @param {string} type
   * @param {Function} fn
   * @return {?}
   */
  t.prototype.off = function(type, fn) {
    if (type) {
      var id = this.id;
      $.each(type.toLowerCase().replace(/_/g, ".").split(" "), function(dataAndEvents, name) {
        if (cache[id][name]) {
          if (!/^@/.test(name)) {
            if (fn) {
              $.each(cache[id][name], function(i, list) {
                if (list === fn) {
                  cache[id][name] = cache[id][name].splice(i, 1);
                }
              });
            } else {
              /** @type {Array} */
              cache[id][name] = [];
            }
          }
        }
      });
    }
    return this;
  };
  /**
   * @return {?}
   */
  t.prototype.trigger = function() {
    /** @type {Array.<?>} */
    var args = __slice.call(arguments);
    /** @type {Array} */
    var argv = [this].concat(args.slice(0, 1));
    return argv.push(args.slice(1)), cb.apply(this, argv);
  };
  /**
   * @return {?}
   */
  t.prototype.setFocus = function() {
    var self = this;
    return remove(function() {
      self.editor.focus();
    }), self;
  };
  /**
   * @param {string} text
   * @return {?}
   */
  t.prototype.setText = function(text) {
    var obj = this;
    return remove(function() {
      obj.editor.html(parse(text, obj));
      obj.content = obj.editor.html();
      cb(obj, "change", [obj.editor]);
      callback.apply(obj);
    }), obj;
  };
  /**
   * @return {?}
   */
  t.prototype.getText = function() {
    return stripHtml(this.editor.html(), this);
  };
  /**
   * @return {?}
   */
  t.prototype.showPicker = function() {
    var self = this;
    return self._sh_timer && win.clearTimeout(self._sh_timer), self.picker.removeClass("hidden"), self._sh_timer = win.setTimeout(function() {
      self.button.addClass("active");
    }, 50), cb(self, "picker.show", [self.picker]), self;
  };
  /**
   * @return {?}
   */
  t.prototype.hidePicker = function() {
    var self = this;
    return self._sh_timer && win.clearTimeout(self._sh_timer), self.button.removeClass("active"), self._sh_timer = win.setTimeout(function() {
      self.picker.addClass("hidden");
    }, 500), cb(self, "picker.hide", [self.picker]), self;
  };
  /**
   * @param {EventTarget} opt_args
   * @return {?}
   */
  $.fn.emojioneArea = function(opt_args) {
    return this.each(function() {
      return this.emojioneArea ? this.emojioneArea : ($.data(this, "emojioneArea", this.emojioneArea = new t($(this), opt_args)), this.emojioneArea);
    });
  };
  $.fn.emojioneArea.defaults = render();
}(document, window, jQuery), function($) {
  /**
   * @param {?} container
   * @param {?} options
   * @return {undefined}
   */
  $.easytabs = function(container, options) {
    var $defaultTab;
    var $defaultTabLink;
    var transitions;
    var lastHash;
    var skipUpdateToHash;
    var settings;
    var plugin = this;
    var $container = $(container);
    var defaults = {
      animate : true,
      panelActiveClass : "active",
      tabActiveClass : "active",
      defaultTab : "li:first-child",
      animationSpeed : "normal",
      tabs : "> ul > li",
      updateHash : true,
      cycle : false,
      collapsible : false,
      collapsedClass : "collapsed",
      collapsedByDefault : true,
      uiTabs : false,
      transitionIn : "fadeIn",
      transitionOut : "fadeOut",
      transitionInEasing : "swing",
      transitionOutEasing : "swing",
      transitionCollapse : "slideUp",
      transitionUncollapse : "slideDown",
      transitionCollapseEasing : "swing",
      transitionUncollapseEasing : "swing",
      containerClass : "",
      tabsClass : "",
      tabClass : "",
      panelClass : "",
      cache : true,
      event : "click",
      panelContext : $container
    };
    var animationSpeeds = {
      fast : 200,
      normal : 400,
      slow : 600
    };
    /**
     * @return {undefined}
     */
    plugin.init = function() {
      plugin.settings = settings = $.extend({}, defaults, options);
      /** @type {string} */
      settings.bind_str = settings.event + ".easytabs";
      if (settings.uiTabs) {
        /** @type {string} */
        settings.tabActiveClass = "ui-tabs-selected";
        /** @type {string} */
        settings.containerClass = "ui-tabs ui-widget ui-widget-content ui-corner-all";
        /** @type {string} */
        settings.tabsClass = "ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all";
        /** @type {string} */
        settings.tabClass = "ui-state-default ui-corner-top";
        /** @type {string} */
        settings.panelClass = "ui-tabs-panel ui-widget-content ui-corner-bottom";
      }
      if (settings.collapsible) {
        if (void 0 !== options.defaultTab) {
          if (void 0 === options.collpasedByDefault) {
            /** @type {boolean} */
            settings.collapsedByDefault = false;
          }
        }
      }
      if ("string" == typeof settings.animationSpeed) {
        settings.animationSpeed = animationSpeeds[settings.animationSpeed];
      }
      $("a.anchor").remove().prependTo("body");
      $container.data("easytabs", {});
      plugin.setTransitions();
      plugin.getTabs();
      addClasses();
      setDefaultTab();
      bindToTabClicks();
      initHashChange();
      initCycle();
      $container.attr("data-easytabs", true);
    };
    /**
     * @return {undefined}
     */
    plugin.setTransitions = function() {
      /** @type {({collapse: ?, halfSpeed: number, hide: ?, show: ?, speed: ?, uncollapse: ?}|{collapse: string, halfSpeed: number, hide: string, show: string, speed: number, uncollapse: string})} */
      transitions = settings.animate ? {
        show : settings.transitionIn,
        hide : settings.transitionOut,
        speed : settings.animationSpeed,
        collapse : settings.transitionCollapse,
        uncollapse : settings.transitionUncollapse,
        halfSpeed : settings.animationSpeed / 2
      } : {
        show : "show",
        hide : "hide",
        speed : 0,
        collapse : "hide",
        uncollapse : "show",
        halfSpeed : 0
      };
    };
    /**
     * @return {undefined}
     */
    plugin.getTabs = function() {
      var optgroup;
      plugin.tabs = $container.find(settings.tabs);
      plugin.panels = $();
      plugin.tabs.each(function() {
        var $tab = $(this);
        var anchor = $tab.children("a");
        var selector = $tab.children("a").data("target");
        $tab.data("easytabs", {});
        if (void 0 !== selector && null !== selector) {
          $tab.data("easytabs").ajax = anchor.attr("href");
        } else {
          selector = anchor.attr("href");
        }
        selector = selector.match(/#([^\?]+)/)[1];
        optgroup = settings.panelContext.find("#" + selector);
        if (optgroup.length) {
          optgroup.data("easytabs", {
            position : optgroup.css("position"),
            visibility : optgroup.css("visibility")
          });
          optgroup.not(settings.panelActiveClass).hide();
          plugin.panels = plugin.panels.add(optgroup);
          $tab.data("easytabs").panel = optgroup;
        } else {
          plugin.tabs = plugin.tabs.not($tab);
          if ("console" in window) {
            console.warn("Warning: tab without matching panel for selector '#" + selector + "' removed from set");
          }
        }
      });
    };
    /**
     * @param {Node} $clicked
     * @param {Function} callback
     * @return {undefined}
     */
    plugin.selectTab = function($clicked, callback) {
      /** @type {Location} */
      var location = window.location;
      var $targetPanel = (location.hash.match(/^[^\?]*/)[0], $clicked.parent().data("easytabs").panel);
      var ajaxUrl = $clicked.parent().data("easytabs").ajax;
      if (settings.collapsible && (!skipUpdateToHash && ($clicked.hasClass(settings.tabActiveClass) || $clicked.hasClass(settings.collapsedClass)))) {
        plugin.toggleTabCollapse($clicked, $targetPanel, ajaxUrl, callback);
      } else {
        if ($clicked.hasClass(settings.tabActiveClass) && $targetPanel.hasClass(settings.panelActiveClass)) {
          if (!settings.cache) {
            activateTab($clicked, $targetPanel, ajaxUrl, callback);
          }
        } else {
          activateTab($clicked, $targetPanel, ajaxUrl, callback);
        }
      }
    };
    /**
     * @param {Node} $clicked
     * @param {Object} $targetPanel
     * @param {?} ajaxUrl
     * @param {Function} callback
     * @return {undefined}
     */
    plugin.toggleTabCollapse = function($clicked, $targetPanel, ajaxUrl, callback) {
      plugin.panels.stop(true, true);
      if (fire($container, "easytabs:before", [$clicked, $targetPanel, settings])) {
        plugin.tabs.filter("." + settings.tabActiveClass).removeClass(settings.tabActiveClass).children().removeClass(settings.tabActiveClass);
        if ($clicked.hasClass(settings.collapsedClass)) {
          if (!!ajaxUrl) {
            if (!(settings.cache && $clicked.parent().data("easytabs").cached)) {
              $container.trigger("easytabs:ajax:beforeSend", [$clicked, $targetPanel]);
              $targetPanel.load(ajaxUrl, function(response, status, xhr) {
                /** @type {boolean} */
                $clicked.parent().data("easytabs").cached = true;
                $container.trigger("easytabs:ajax:complete", [$clicked, $targetPanel, response, status, xhr]);
              });
            }
          }
          $clicked.parent().removeClass(settings.collapsedClass).addClass(settings.tabActiveClass).children().removeClass(settings.collapsedClass).addClass(settings.tabActiveClass);
          $targetPanel.addClass(settings.panelActiveClass)[transitions.uncollapse](transitions.speed, settings.transitionUncollapseEasing, function() {
            $container.trigger("easytabs:midTransition", [$clicked, $targetPanel, settings]);
            if ("function" == typeof callback) {
              callback();
            }
          });
        } else {
          $clicked.addClass(settings.collapsedClass).parent().addClass(settings.collapsedClass);
          $targetPanel.removeClass(settings.panelActiveClass)[transitions.collapse](transitions.speed, settings.transitionCollapseEasing, function() {
            $container.trigger("easytabs:midTransition", [$clicked, $targetPanel, settings]);
            if ("function" == typeof callback) {
              callback();
            }
          });
        }
      }
    };
    /**
     * @param {string} hash
     * @return {?}
     */
    plugin.matchTab = function(hash) {
      return plugin.tabs.find("[href='" + hash + "'],[data-target='" + hash + "']").first();
    };
    /**
     * @param {string} hash
     * @return {?}
     */
    plugin.matchInPanel = function(hash) {
      return hash && plugin.validId(hash) ? plugin.panels.filter(":has(" + hash + ")").first() : [];
    };
    /**
     * @param {string} id
     * @return {?}
     */
    plugin.validId = function(id) {
      return id.substr(1).match(/^[A-Za-z]+[A-Za-z0-9\-_:\.].$/);
    };
    /**
     * @return {undefined}
     */
    plugin.selectTabFromHashChange = function() {
      var newObj;
      /** @type {string} */
      var hash = window.location.hash.match(/^[^\?]*/)[0];
      var $tab = plugin.matchTab(hash);
      if (settings.updateHash) {
        if ($tab.length) {
          /** @type {boolean} */
          skipUpdateToHash = true;
          plugin.selectTab($tab);
        } else {
          newObj = plugin.matchInPanel(hash);
          if (newObj.length) {
            hash = "#" + newObj.attr("id");
            $tab = plugin.matchTab(hash);
            /** @type {boolean} */
            skipUpdateToHash = true;
            plugin.selectTab($tab);
          } else {
            if (!$defaultTab.hasClass(settings.tabActiveClass)) {
              if (!settings.cycle) {
                if ("" === hash || (plugin.matchTab(lastHash).length || $container.closest(hash).length)) {
                  /** @type {boolean} */
                  skipUpdateToHash = true;
                  plugin.selectTab($defaultTabLink);
                }
              }
            }
          }
        }
      }
    };
    /**
     * @param {Function} tabNumber
     * @return {undefined}
     */
    plugin.cycleTabs = function(tabNumber) {
      if (settings.cycle) {
        tabNumber %= plugin.tabs.length;
        $tab = $(plugin.tabs[tabNumber]).children("a").first();
        /** @type {boolean} */
        skipUpdateToHash = true;
        plugin.selectTab($tab, function() {
          setTimeout(function() {
            plugin.cycleTabs(tabNumber + 1);
          }, settings.cycle);
        });
      }
    };
    plugin.publicMethods = {
      /**
       * @param {string} tabSelector
       * @return {undefined}
       */
      select : function(tabSelector) {
        var $tab;
        if (0 === ($tab = plugin.tabs.filter(tabSelector)).length) {
          if (0 === ($tab = plugin.tabs.find("a[href='" + tabSelector + "']")).length) {
            if (0 === ($tab = plugin.tabs.find("a" + tabSelector)).length) {
              if (0 === ($tab = plugin.tabs.find("[data-target='" + tabSelector + "']")).length) {
                if (0 === ($tab = plugin.tabs.find("a[href$='" + tabSelector + "']")).length) {
                  $.error("Tab '" + tabSelector + "' does not exist in tab set");
                }
              }
            }
          }
        } else {
          $tab = $tab.children("a").first();
        }
        plugin.selectTab($tab);
      }
    };
    /**
     * @param {Object} self
     * @param {string} eventName
     * @param {?} attributes
     * @return {?}
     */
    var fire = function(self, eventName, attributes) {
      var EVENT_READY = $.Event(eventName);
      return self.trigger(EVENT_READY, attributes), EVENT_READY.result !== false;
    };
    /**
     * @return {undefined}
     */
    var addClasses = function() {
      $container.addClass(settings.containerClass);
      plugin.tabs.parent().addClass(settings.tabsClass);
      plugin.tabs.addClass(settings.tabClass);
      plugin.panels.addClass(settings.panelClass);
    };
    /**
     * @return {undefined}
     */
    var setDefaultTab = function() {
      var newObj;
      /** @type {string} */
      var hash = window.location.hash.match(/^[^\?]*/)[0];
      var $selectedTab = plugin.matchTab(hash).parent();
      if (1 === $selectedTab.length) {
        $defaultTab = $selectedTab;
        /** @type {boolean} */
        settings.cycle = false;
      } else {
        newObj = plugin.matchInPanel(hash);
        if (newObj.length) {
          hash = "#" + newObj.attr("id");
          $defaultTab = plugin.matchTab(hash).parent();
        } else {
          $defaultTab = plugin.tabs.parent().find(settings.defaultTab);
          if (0 === $defaultTab.length) {
            $.error("The specified default tab ('" + settings.defaultTab + "') could not be found in the tab set ('" + settings.tabs + "') out of " + plugin.tabs.length + " tabs.");
          }
        }
      }
      $defaultTabLink = $defaultTab.children("a").first();
      activateDefaultTab($selectedTab);
    };
    /**
     * @param {Array} $selectedTab
     * @return {undefined}
     */
    var activateDefaultTab = function($selectedTab) {
      var defaultPanel;
      var defaultAjaxUrl;
      if (settings.collapsible && (0 === $selectedTab.length && settings.collapsedByDefault)) {
        $defaultTab.addClass(settings.collapsedClass).children().addClass(settings.collapsedClass);
      } else {
        defaultPanel = $($defaultTab.data("easytabs").panel);
        defaultAjaxUrl = $defaultTab.data("easytabs").ajax;
        if (!!defaultAjaxUrl) {
          if (!(settings.cache && $defaultTab.data("easytabs").cached)) {
            $container.trigger("easytabs:ajax:beforeSend", [$defaultTabLink, defaultPanel]);
            defaultPanel.load(defaultAjaxUrl, function(response, status, xhr) {
              /** @type {boolean} */
              $defaultTab.data("easytabs").cached = true;
              $container.trigger("easytabs:ajax:complete", [$defaultTabLink, defaultPanel, response, status, xhr]);
            });
          }
        }
        $defaultTab.data("easytabs").panel.show().addClass(settings.panelActiveClass);
        $defaultTab.addClass(settings.tabActiveClass).children().addClass(settings.tabActiveClass);
      }
      $container.trigger("easytabs:initialised", [$defaultTabLink, defaultPanel]);
    };
    /**
     * @return {undefined}
     */
    var bindToTabClicks = function() {
      plugin.tabs.children("a").bind(settings.bind_str, function(ev) {
        /** @type {boolean} */
        settings.cycle = false;
        /** @type {boolean} */
        skipUpdateToHash = false;
        plugin.selectTab($(this));
        if (ev.preventDefault) {
          ev.preventDefault();
        } else {
          /** @type {boolean} */
          ev.returnValue = false;
        }
      });
    };
    /**
     * @param {Node} $clicked
     * @param {Object} $targetPanel
     * @param {?} ajaxUrl
     * @param {Function} callback
     * @return {undefined}
     */
    var activateTab = function($clicked, $targetPanel, ajaxUrl, callback) {
      if (plugin.panels.stop(true, true), fire($container, "easytabs:before", [$clicked, $targetPanel, settings])) {
        var targetHeight;
        var visibleHeight;
        var heightDifference;
        var showPanel;
        var $visiblePanel = plugin.panels.filter(":visible");
        var $panelContainer = $targetPanel.parent();
        /** @type {string} */
        var c = window.location.hash.match(/^[^\?]*/)[0];
        if (settings.animate) {
          targetHeight = getHeightForHidden($targetPanel);
          visibleHeight = $visiblePanel.length ? setAndReturnHeight($visiblePanel) : 0;
          /** @type {number} */
          heightDifference = targetHeight - visibleHeight;
        }
        /** @type {string} */
        lastHash = c;
        /**
         * @return {undefined}
         */
        showPanel = function() {
          $container.trigger("easytabs:midTransition", [$clicked, $targetPanel, settings]);
          if (settings.animate) {
            if ("fadeIn" == settings.transitionIn) {
              if (heightDifference < 0) {
                $panelContainer.animate({
                  height : $panelContainer.height() + heightDifference
                }, transitions.halfSpeed).css({
                  "min-height" : ""
                });
              }
            }
          }
          if (settings.updateHash && !skipUpdateToHash) {
            window.location.hash = "#" + $targetPanel.attr("id");
          } else {
            /** @type {boolean} */
            skipUpdateToHash = false;
          }
          $targetPanel[transitions.show](transitions.speed, settings.transitionInEasing, function() {
            $panelContainer.css({
              height : "",
              "min-height" : ""
            });
            $container.trigger("easytabs:after", [$clicked, $targetPanel, settings]);
            if ("function" == typeof callback) {
              callback();
            }
          });
        };
        if (!!ajaxUrl) {
          if (!(settings.cache && $clicked.parent().data("easytabs").cached)) {
            $container.trigger("easytabs:ajax:beforeSend", [$clicked, $targetPanel]);
            $targetPanel.load(ajaxUrl, function(response, status, xhr) {
              /** @type {boolean} */
              $clicked.parent().data("easytabs").cached = true;
              $container.trigger("easytabs:ajax:complete", [$clicked, $targetPanel, response, status, xhr]);
            });
          }
        }
        if (settings.animate) {
          if ("fadeOut" == settings.transitionOut) {
            if (heightDifference > 0) {
              $panelContainer.animate({
                height : $panelContainer.height() + heightDifference
              }, transitions.halfSpeed);
            } else {
              $panelContainer.css({
                "min-height" : $panelContainer.height()
              });
            }
          }
        }
        plugin.tabs.filter("." + settings.tabActiveClass).removeClass(settings.tabActiveClass).children().removeClass(settings.tabActiveClass);
        plugin.tabs.filter("." + settings.collapsedClass).removeClass(settings.collapsedClass).children().removeClass(settings.collapsedClass);
        $clicked.parent().addClass(settings.tabActiveClass).children().addClass(settings.tabActiveClass);
        plugin.panels.filter("." + settings.panelActiveClass).removeClass(settings.panelActiveClass);
        $targetPanel.addClass(settings.panelActiveClass);
        if ($visiblePanel.length) {
          $visiblePanel[transitions.hide](transitions.speed, settings.transitionOutEasing, showPanel);
        } else {
          $targetPanel[transitions.uncollapse](transitions.speed, settings.transitionUncollapseEasing, showPanel);
        }
      }
    };
    /**
     * @param {Object} $targetPanel
     * @return {?}
     */
    var getHeightForHidden = function($targetPanel) {
      if ($targetPanel.data("easytabs") && $targetPanel.data("easytabs").lastHeight) {
        return $targetPanel.data("easytabs").lastHeight;
      }
      var outerCloak;
      var height;
      var oldDisplay = $targetPanel.css("display");
      try {
        outerCloak = $("<div></div>", {
          position : "absolute",
          visibility : "hidden",
          overflow : "hidden"
        });
      } catch (b) {
        outerCloak = $("<div></div>", {
          visibility : "hidden",
          overflow : "hidden"
        });
      }
      return height = $targetPanel.wrap(outerCloak).css({
        position : "relative",
        visibility : "hidden",
        display : "block"
      }).outerHeight(), $targetPanel.unwrap(), $targetPanel.css({
        position : $targetPanel.data("easytabs").position,
        visibility : $targetPanel.data("easytabs").visibility,
        display : oldDisplay
      }), $targetPanel.data("easytabs").lastHeight = height, height;
    };
    /**
     * @param {Object} $visiblePanel
     * @return {?}
     */
    var setAndReturnHeight = function($visiblePanel) {
      var height = $visiblePanel.outerHeight();
      return $visiblePanel.data("easytabs") ? $visiblePanel.data("easytabs").lastHeight = height : $visiblePanel.data("easytabs", {
        lastHeight : height
      }), height;
    };
    /**
     * @return {undefined}
     */
    var initHashChange = function() {
      if ("function" == typeof $(window).hashchange) {
        $(window).hashchange(function() {
          plugin.selectTabFromHashChange();
        });
      } else {
        if ($.address) {
          if ("function" == typeof $.address.change) {
            $.address.change(function() {
              plugin.selectTabFromHashChange();
            });
          }
        }
      }
    };
    /**
     * @return {undefined}
     */
    var initCycle = function() {
      var tabNumber;
      if (settings.cycle) {
        tabNumber = plugin.tabs.index($defaultTab);
        setTimeout(function() {
          plugin.cycleTabs(tabNumber + 1);
        }, settings.cycle);
      }
    };
    plugin.init();
  };
  /**
   * @param {EventTarget} options
   * @return {?}
   */
  $.fn.easytabs = function(options) {
    /** @type {Arguments} */
    var args = arguments;
    return this.each(function() {
      var $this = $(this);
      var plugin = $this.data("easytabs");
      if (void 0 === plugin && (plugin = new $.easytabs(this, options), $this.data("easytabs", plugin)), plugin.publicMethods[options]) {
        return plugin.publicMethods[options](Array.prototype.slice.call(args, 1));
      }
    });
  };
}(jQuery), function(factory) {
  if ("function" == typeof define && define.amd) {
    define(["jquery"], factory);
  } else {
    if ("object" == typeof exports) {
      module.exports = factory(require("jquery"));
    } else {
      factory(jQuery);
    }
  }
}(function($) {
  /** @type {boolean} */
  var object = false;
  /** @type {boolean} */
  var property = false;
  /** @type {number} */
  var tabindex = 0;
  /** @type {number} */
  var ascrail = 2E3;
  /** @type {number} */
  var to = 0;
  /** @type {Array} */
  var vendors = ["webkit", "ms", "moz", "o"];
  /** @type {function (this:Window, function (number): ?, (Element|null)=): number} */
  var fn = window.requestAnimationFrame || false;
  /** @type {function (this:Window, number): ?} */
  var debug = window.cancelAnimationFrame || false;
  if (!fn) {
    var v;
    for (v in vendors) {
      var vendor = vendors[v];
      if (fn = window[vendor + "RequestAnimationFrame"]) {
        debug = window[vendor + "CancelAnimationFrame"] || window[vendor + "CancelRequestAnimationFrame"];
        break;
      }
    }
  }
  var Font = window.MutationObserver || (window.WebKitMutationObserver || false);
  var attributes = {
    zindex : "auto",
    cursoropacitymin : 0,
    cursoropacitymax : 1,
    cursorcolor : "#424242",
    cursorwidth : "6px",
    cursorborder : "1px solid #fff",
    cursorborderradius : "5px",
    scrollspeed : 60,
    mousescrollstep : 24,
    touchbehavior : false,
    hwacceleration : true,
    usetransition : true,
    boxzoom : false,
    dblclickzoom : true,
    gesturezoom : true,
    grabcursorenabled : true,
    autohidemode : true,
    background : "",
    iframeautoresize : true,
    cursorminheight : 32,
    preservenativescrolling : true,
    railoffset : false,
    railhoffset : false,
    bouncescroll : true,
    spacebarenabled : true,
    railpadding : {
      top : 0,
      right : 0,
      left : 0,
      bottom : 0
    },
    disableoutline : true,
    horizrailenabled : true,
    railalign : "right",
    railvalign : "bottom",
    enabletranslate3d : true,
    enablemousewheel : true,
    enablekeyboard : true,
    smoothscroll : true,
    sensitiverail : true,
    enablemouselockapi : true,
    cursorfixedheight : false,
    directionlockdeadzone : 6,
    hidecursordelay : 400,
    nativeparentscrolling : true,
    enablescrollonselection : true,
    overflowx : true,
    overflowy : true,
    cursordragspeed : 0.3,
    rtlmode : "auto",
    cursordragontouch : false,
    oneaxismousemode : "auto",
    scriptpath : function() {
      /** @type {NodeList} */
      var hash = document.getElementsByTagName("script");
      hash = hash.length ? hash[hash.length - 1].src.split("?")[0] : "";
      return 0 < hash.split("/").length ? hash.split("/").slice(0, -1).join("/") + "/" : "";
    }(),
    preventmultitouchscrolling : true,
    disablemutationobserver : false
  };
  /** @type {boolean} */
  var module = false;
  /**
   * @return {?}
   */
  var start = function() {
    if (module) {
      return module;
    }
    /** @type {Element} */
    var el = document.createElement("DIV");
    /** @type {(CSSStyleDeclaration|null)} */
    var data = el.style;
    /** @type {string} */
    var i = navigator.userAgent;
    /** @type {string} */
    var p = navigator.platform;
    var options = {
      haspointerlock : "pointerLockElement" in document || ("webkitPointerLockElement" in document || "mozPointerLockElement" in document)
    };
    /** @type {boolean} */
    options.isopera = "opera" in window;
    /** @type {boolean} */
    options.isopera12 = options.isopera && "getUserMedia" in navigator;
    /** @type {boolean} */
    options.isoperamini = "[object OperaMini]" === Object.prototype.toString.call(window.operamini);
    /** @type {boolean} */
    options.isie = "all" in document && ("attachEvent" in el && !options.isopera);
    /** @type {boolean} */
    options.isieold = options.isie && !("msInterpolationMode" in data);
    /** @type {boolean} */
    options.isie7 = options.isie && (!options.isieold && (!("documentMode" in document) || 7 == document.documentMode));
    /** @type {boolean} */
    options.isie8 = options.isie && ("documentMode" in document && 8 == document.documentMode);
    /** @type {boolean} */
    options.isie9 = options.isie && ("performance" in window && 9 == document.documentMode);
    /** @type {boolean} */
    options.isie10 = options.isie && ("performance" in window && 10 == document.documentMode);
    /** @type {boolean} */
    options.isie11 = "msRequestFullscreen" in el && 11 <= document.documentMode;
    /** @type {(Array.<string>|null)} */
    options.isieedge12 = navigator.userAgent.match(/Edge\/12\./);
    /** @type {boolean} */
    options.isieedge = "msOverflowStyle" in el;
    /** @type {boolean} */
    options.ismodernie = options.isie11 || options.isieedge;
    /** @type {boolean} */
    options.isie9mobile = /iemobile.9/i.test(i);
    if (options.isie9mobile) {
      /** @type {boolean} */
      options.isie9 = false;
    }
    /** @type {boolean} */
    options.isie7mobile = !options.isie9mobile && (options.isie7 && /iemobile/i.test(i));
    /** @type {boolean} */
    options.ismozilla = "MozAppearance" in data;
    /** @type {boolean} */
    options.iswebkit = "WebkitAppearance" in data;
    /** @type {boolean} */
    options.ischrome = "chrome" in window;
    /** @type {boolean} */
    options.ischrome38 = options.ischrome && "touchAction" in data;
    /** @type {boolean} */
    options.ischrome22 = !options.ischrome38 && (options.ischrome && options.haspointerlock);
    /** @type {boolean} */
    options.ischrome26 = !options.ischrome38 && (options.ischrome && "transition" in data);
    /** @type {boolean} */
    options.cantouch = "ontouchstart" in document.documentElement || "ontouchstart" in window;
    options.hasw3ctouch = (window.PointerEvent || false) && (0 < navigator.MaxTouchPoints || 0 < navigator.msMaxTouchPoints);
    options.hasmstouch = !options.hasw3ctouch && (window.MSPointerEvent || false);
    /** @type {boolean} */
    options.ismac = /^mac$/i.test(p);
    /** @type {boolean} */
    options.isios = options.cantouch && /iphone|ipad|ipod/i.test(p);
    /** @type {boolean} */
    options.isios4 = options.isios && !("seal" in Object);
    /** @type {boolean} */
    options.isios7 = options.isios && "webkitHidden" in document;
    /** @type {boolean} */
    options.isios8 = options.isios && "hidden" in document;
    /** @type {boolean} */
    options.isandroid = /android/i.test(i);
    /** @type {boolean} */
    options.haseventlistener = "addEventListener" in el;
    /** @type {boolean} */
    options.trstyle = false;
    /** @type {boolean} */
    options.hastransform = false;
    /** @type {boolean} */
    options.hastranslate3d = false;
    /** @type {boolean} */
    options.transitionstyle = false;
    /** @type {boolean} */
    options.hastransition = false;
    /** @type {boolean} */
    options.transitionend = false;
    /** @type {Array} */
    p = ["transform", "msTransform", "webkitTransform", "MozTransform", "OTransform"];
    /** @type {number} */
    i = 0;
    for (;i < p.length;i++) {
      if (void 0 !== data[p[i]]) {
        options.trstyle = p[i];
        break;
      }
    }
    /** @type {boolean} */
    options.hastransform = !!options.trstyle;
    if (options.hastransform) {
      /** @type {string} */
      data[options.trstyle] = "translate3d(1px,2px,3px)";
      /** @type {boolean} */
      options.hastranslate3d = /translate3d/.test(data[options.trstyle]);
    }
    /** @type {boolean} */
    options.transitionstyle = false;
    /** @type {string} */
    options.prefixstyle = "";
    /** @type {boolean} */
    options.transitionend = false;
    /** @type {Array.<string>} */
    p = "transition webkitTransition msTransition MozTransition OTransition OTransition KhtmlTransition".split(" ");
    /** @type {Array.<string>} */
    var d = " -webkit- -ms- -moz- -o- -o -khtml-".split(" ");
    /** @type {Array.<string>} */
    var vals = "transitionend webkitTransitionEnd msTransitionEnd transitionend otransitionend oTransitionEnd KhtmlTransitionEnd".split(" ");
    /** @type {number} */
    i = 0;
    for (;i < p.length;i++) {
      if (p[i] in data) {
        /** @type {string} */
        options.transitionstyle = p[i];
        /** @type {string} */
        options.prefixstyle = d[i];
        /** @type {string} */
        options.transitionend = vals[i];
        break;
      }
    }
    if (options.ischrome26) {
      /** @type {string} */
      options.prefixstyle = d[1];
    }
    /** @type {(boolean|string)} */
    options.hastransition = options.transitionstyle;
    a: {
      /** @type {Array} */
      i = ["grab", "-webkit-grab", "-moz-grab"];
      if (options.ischrome && !options.ischrome38 || options.isie) {
        /** @type {Array} */
        i = [];
      }
      /** @type {number} */
      p = 0;
      for (;p < i.length;p++) {
        if (d = i[p], data.cursor = d, data.cursor == d) {
          data = d;
          break a;
        }
      }
      /** @type {string} */
      data = "url(//patriciaportfolio.googlecode.com/files/openhand.cur),n-resize";
    }
    return options.cursorgrabvalue = data, options.hasmousecapture = "setCapture" in el, options.hasMutationObserver = false !== Font, module = options;
  };
  /**
   * @param {Object} helper
   * @param {?} player
   * @return {undefined}
   */
  var init = function(helper, player) {
    /**
     * @return {?}
     */
    function check() {
      var selector = self.doc.css(that.trstyle);
      return!(!selector || "matrix" != selector.substr(0, 6)) && selector.replace(/^.*\((.*)\)$/g, "$1").replace(/px/g, "").split(/, +/);
    }
    /**
     * @return {?}
     */
    function show() {
      var el = self.win;
      if ("zIndex" in el) {
        return el.zIndex();
      }
      for (;0 < el.length && 9 != el[0].nodeType;) {
        var cDigit = el.css("zIndex");
        if (!isNaN(cDigit) && 0 != cDigit) {
          return parseInt(cDigit);
        }
        el = el.parent();
      }
      return false;
    }
    /**
     * @param {Object} value
     * @param {string} prop
     * @param {boolean} dataAndEvents
     * @return {?}
     */
    function css(value, prop, dataAndEvents) {
      return prop = value.css(prop), value = parseFloat(prop), isNaN(value) ? (value = size[prop] || 0, dataAndEvents = 3 == value ? dataAndEvents ? self.win.outerHeight() - self.win.innerHeight() : self.win.outerWidth() - self.win.innerWidth() : 1, self.isie8 && (value && (value += 1)), dataAndEvents ? value : 0) : value;
    }
    /**
     * @param {Object} el
     * @param {string} destination
     * @param {Function} fn
     * @param {boolean} method
     * @return {undefined}
     */
    function init(el, destination, fn, method) {
      self._bind(el, destination, function(e) {
        e = e ? e : window.event;
        var event = {
          original : e,
          target : e.target || e.srcElement,
          type : "wheel",
          deltaMode : "MozMousePixelScroll" == e.type ? 0 : 1,
          deltaX : 0,
          deltaZ : 0,
          /**
           * @return {?}
           */
          preventDefault : function() {
            return e.preventDefault ? e.preventDefault() : e.returnValue = false, false;
          },
          /**
           * @return {undefined}
           */
          stopImmediatePropagation : function() {
            if (e.stopImmediatePropagation) {
              e.stopImmediatePropagation();
            } else {
              /** @type {boolean} */
              e.cancelBubble = true;
            }
          }
        };
        return "mousewheel" == destination ? (e.wheelDeltaX && (event.deltaX = -0.025 * e.wheelDeltaX), e.wheelDeltaY && (event.deltaY = -0.025 * e.wheelDeltaY), event.deltaY || (event.deltaX || (event.deltaY = -0.025 * e.wheelDelta))) : event.deltaY = e.detail, fn.call(el, event);
      }, method);
    }
    /**
     * @param {Object} event
     * @param {Object} recurring
     * @param {boolean} regex
     * @return {?}
     */
    function drag(event, recurring, regex) {
      var c;
      var p;
      if (0 == event.deltaMode ? (c = -Math.floor(self.opt.mousescrollstep / 54 * event.deltaX), p = -Math.floor(self.opt.mousescrollstep / 54 * event.deltaY)) : 1 == event.deltaMode && (c = -Math.floor(event.deltaX * self.opt.mousescrollstep), p = -Math.floor(event.deltaY * self.opt.mousescrollstep)), recurring && (self.opt.oneaxismousemode && (0 == c && (p && (c = p, p = 0, regex && ((0 > c ? self.getScrollLeft() >= self.page.maxw : 0 >= self.getScrollLeft()) && (p = c, c = 0)))))), self.isrtlmode && 
      (c = -c), c && (self.scrollmom && self.scrollmom.stop(), self.lastdeltax += c, self.debounced("mousewheelx", function() {
        var attributes = self.lastdeltax;
        /** @type {number} */
        self.lastdeltax = 0;
        if (!self.rail.drag) {
          self.doScrollLeftBy(attributes);
        }
      }, 15)), p) {
        if (self.opt.nativeparentscrolling && (regex && (!self.ispage && !self.zoomactive))) {
          if (0 > p) {
            if (self.getScrollTop() >= self.page.maxh) {
              return true;
            }
          } else {
            if (0 >= self.getScrollTop()) {
              return true;
            }
          }
        }
        if (self.scrollmom) {
          self.scrollmom.stop();
        }
        self.lastdeltay += p;
        self.synched("mousewheely", function() {
          var attributes = self.lastdeltay;
          /** @type {number} */
          self.lastdeltay = 0;
          if (!self.rail.drag) {
            self.doScrollBy(attributes);
          }
        }, 15);
      }
      return event.stopImmediatePropagation(), event.preventDefault();
    }
    var self = this;
    if (this.version = "3.6.8", this.name = "nicescroll", this.me = player, this.opt = {
      doc : $("body"),
      win : false
    }, $.extend(this.opt, attributes), this.opt.snapbackspeed = 80, helper) {
      var key;
      for (key in self.opt) {
        if (void 0 !== helper[key]) {
          self.opt[key] = helper[key];
        }
      }
    }
    if (self.opt.disablemutationobserver && (Font = false), this.iddoc = (this.doc = self.opt.doc) && this.doc[0] ? this.doc[0].id || "" : "", this.ispage = /^BODY|HTML/.test(self.opt.win ? self.opt.win[0].nodeName : this.doc[0].nodeName), this.haswrapper = false !== self.opt.win, this.win = self.opt.win || (this.ispage ? $(window) : this.doc), this.docscroll = this.ispage && !this.haswrapper ? $(window) : this.win, this.body = $("body"), this.iframe = this.isfixed = this.viewport = false, this.isiframe = 
    "IFRAME" == this.doc[0].nodeName && "IFRAME" == this.win[0].nodeName, this.istextarea = "TEXTAREA" == this.win[0].nodeName, this.forcescreen = false, this.canshowonmouseevent = "scroll" != self.opt.autohidemode, this.page = this.view = this.onzoomout = this.onzoomin = this.onscrollcancel = this.onscrollend = this.onscrollstart = this.onclick = this.ongesturezoom = this.onkeypress = this.onmousewheel = this.onmousemove = this.onmouseup = this.onmousedown = false, this.scroll = {
      x : 0,
      y : 0
    }, this.scrollratio = {
      x : 0,
      y : 0
    }, this.cursorheight = 20, this.scrollvaluemax = 0, "auto" == this.opt.rtlmode) {
      key = this.win[0] == window ? this.body : this.win;
      var c = key.css("writing-mode") || (key.css("-webkit-writing-mode") || (key.css("-ms-writing-mode") || key.css("-moz-writing-mode")));
      if ("horizontal-tb" == c || ("lr-tb" == c || "" == c)) {
        /** @type {boolean} */
        this.isrtlmode = "rtl" == key.css("direction");
        /** @type {boolean} */
        this.isvertical = false;
      } else {
        /** @type {boolean} */
        this.isrtlmode = "vertical-rl" == c || ("tb" == c || ("tb-rl" == c || "rl-tb" == c));
        /** @type {boolean} */
        this.isvertical = "vertical-rl" == c || ("tb" == c || "tb-rl" == c);
      }
    } else {
      /** @type {boolean} */
      this.isrtlmode = true === this.opt.rtlmode;
      /** @type {boolean} */
      this.isvertical = false;
    }
    /** @type {boolean} */
    this.observerbody = this.observerremover = this.observer = this.scrollmom = this.scrollrunning = false;
    do {
      /** @type {string} */
      this.id = "ascrail" + ascrail++;
    } while (document.getElementById(this.id));
    /** @type {boolean} */
    this.hasmousefocus = this.hasfocus = this.zoomactive = this.zoom = this.selectiondrag = this.cursorfreezed = this.cursor = this.rail = false;
    /** @type {boolean} */
    this.visibility = true;
    /** @type {boolean} */
    this.hidden = this.locked = this.railslocked = false;
    /** @type {boolean} */
    this.cursoractive = true;
    /** @type {boolean} */
    this.wheelprevented = false;
    this.overflowx = self.opt.overflowx;
    this.overflowy = self.opt.overflowy;
    /** @type {boolean} */
    this.nativescrollingarea = false;
    /** @type {number} */
    this.checkarea = 0;
    /** @type {Array} */
    this.events = [];
    this.saved = {};
    this.delaylist = {};
    this.synclist = {};
    /** @type {number} */
    this.lastdeltay = this.lastdeltax = 0;
    this.detected = start();
    var that = $.extend({}, this.detected);
    this.ishwscroll = (this.canhwscroll = that.hastransform && self.opt.hwacceleration) && self.haswrapper;
    /** @type {boolean} */
    this.hasreversehr = !!this.isrtlmode && (this.isvertical ? !(that.iswebkit || (that.isie || that.isie11)) : !(that.iswebkit || that.isie && (!that.isie10 && !that.isie11)));
    /** @type {boolean} */
    this.istouchcapable = false;
    if (that.cantouch || !that.hasw3ctouch && !that.hasmstouch) {
      if (!!that.cantouch) {
        if (!that.isios) {
          if (!that.isandroid) {
            if (!(!that.iswebkit && !that.ismozilla)) {
              /** @type {boolean} */
              this.istouchcapable = true;
            }
          }
        }
      }
    } else {
      /** @type {boolean} */
      this.istouchcapable = true;
    }
    if (!self.opt.enablemouselockapi) {
      /** @type {boolean} */
      that.hasmousecapture = false;
      /** @type {boolean} */
      that.haspointerlock = false;
    }
    /**
     * @param {string} timeoutKey
     * @param {Object} callback
     * @param {number} opt_attributes
     * @return {undefined}
     */
    this.debounced = function(timeoutKey, callback, opt_attributes) {
      if (self) {
        if (!self.delaylist[timeoutKey]) {
          callback.call(self);
          self.delaylist[timeoutKey] = {
            h : fn(function() {
              self.delaylist[timeoutKey].fn.call(self);
              /** @type {boolean} */
              self.delaylist[timeoutKey] = false;
            }, opt_attributes)
          };
        }
        /** @type {Object} */
        self.delaylist[timeoutKey].fn = callback;
      }
    };
    /** @type {boolean} */
    var x = false;
    /**
     * @param {string} name
     * @param {Function} region
     * @return {?}
     */
    this.synched = function(name, region) {
      return self.synclist[name] = region, function() {
        if (!x) {
          fn(function() {
            if (self) {
              /** @type {boolean} */
              x = false;
              var name;
              for (name in self.synclist) {
                var old = self.synclist[name];
                if (old) {
                  old.call(self);
                }
                /** @type {boolean} */
                self.synclist[name] = false;
              }
            }
          });
          /** @type {boolean} */
          x = true;
        }
      }(), name;
    };
    /**
     * @param {string} timeoutKey
     * @return {undefined}
     */
    this.unsynched = function(timeoutKey) {
      if (self.synclist[timeoutKey]) {
        /** @type {boolean} */
        self.synclist[timeoutKey] = false;
      }
    };
    /**
     * @param {string} opt_attributes
     * @param {string} expectedNumberOfNonCommentArgs
     * @return {undefined}
     */
    this.css = function(opt_attributes, expectedNumberOfNonCommentArgs) {
      var attributes;
      for (attributes in expectedNumberOfNonCommentArgs) {
        self.saved.css.push([opt_attributes, attributes, opt_attributes.css(attributes)]);
        opt_attributes.css(attributes, expectedNumberOfNonCommentArgs[attributes]);
      }
    };
    /**
     * @param {Object} lab
     * @return {?}
     */
    this.scrollTop = function(lab) {
      return void 0 === lab ? self.getScrollTop() : self.setScrollTop(lab);
    };
    /**
     * @param {Object} lab
     * @return {?}
     */
    this.scrollLeft = function(lab) {
      return void 0 === lab ? self.getScrollLeft() : self.setScrollLeft(lab);
    };
    /**
     * @param {?} laser
     * @param {?} ed
     * @param {number} initial
     * @param {number} v1
     * @param {number} _screenSizes
     * @param {number} tower
     * @param {number} damage
     * @return {undefined}
     */
    var Bullet = function(laser, ed, initial, v1, _screenSizes, tower, damage) {
      this.st = laser;
      this.ed = ed;
      /** @type {number} */
      this.spd = initial;
      this.p1 = v1 || 0;
      this.p2 = _screenSizes || 1;
      this.p3 = tower || 0;
      this.p4 = damage || 1;
      /** @type {number} */
      this.ts = (new Date).getTime();
      /** @type {number} */
      this.df = this.ed - this.st;
    };
    if (Bullet.prototype = {
      /**
       * @param {number} t
       * @return {?}
       */
      B2 : function(t) {
        return 3 * t * t * (1 - t);
      },
      /**
       * @param {number} t
       * @return {?}
       */
      B3 : function(t) {
        return 3 * t * (1 - t) * (1 - t);
      },
      /**
       * @param {number} t
       * @return {?}
       */
      B4 : function(t) {
        return(1 - t) * (1 - t) * (1 - t);
      },
      /**
       * @return {?}
       */
      getNow : function() {
        /** @type {number} */
        var jump = 1 - ((new Date).getTime() - this.ts) / this.spd;
        var change = this.B2(jump) + this.B3(jump) + this.B4(jump);
        return 0 > jump ? this.ed : this.st + Math.round(this.df * change);
      },
      /**
       * @param {boolean} first
       * @param {number} val
       * @return {?}
       */
      update : function(first, val) {
        return this.st = this.getNow(), this.ed = first, this.spd = val, this.ts = (new Date).getTime(), this.df = this.ed - this.st, this;
      }
    }, this.ishwscroll) {
      this.doc.translate = {
        x : 0,
        y : 0,
        tx : "0px",
        ty : "0px"
      };
      if (that.hastranslate3d) {
        if (that.isios) {
          this.doc.css("-webkit-backface-visibility", "hidden");
        }
      }
      /**
       * @param {(Array|string)} dataAndEvents
       * @return {?}
       */
      this.getScrollTop = function(dataAndEvents) {
        if (!dataAndEvents) {
          if (dataAndEvents = check()) {
            return 16 == dataAndEvents.length ? -dataAndEvents[13] : -dataAndEvents[5];
          }
          if (self.timerscroll && self.timerscroll.bz) {
            return self.timerscroll.bz.getNow();
          }
        }
        return self.doc.translate.y;
      };
      /**
       * @param {(Array|string)} dataAndEvents
       * @return {?}
       */
      this.getScrollLeft = function(dataAndEvents) {
        if (!dataAndEvents) {
          if (dataAndEvents = check()) {
            return 16 == dataAndEvents.length ? -dataAndEvents[12] : -dataAndEvents[4];
          }
          if (self.timerscroll && self.timerscroll.bh) {
            return self.timerscroll.bh.getNow();
          }
        }
        return self.doc.translate.x;
      };
      /**
       * @param {EventTarget} element
       * @return {undefined}
       */
      this.notifyScrollEvent = function(element) {
        /** @type {(Event|null)} */
        var evt = document.createEvent("UIEvents");
        evt.initUIEvent("scroll", false, true, window, 1);
        /** @type {boolean} */
        evt.niceevent = true;
        element.dispatchEvent(evt);
      };
      /** @type {number} */
      var v22 = this.isrtlmode ? 1 : -1;
      if (that.hastranslate3d && self.opt.enabletranslate3d) {
        /**
         * @param {number} x
         * @param {?} inTop
         * @return {undefined}
         */
        this.setScrollTop = function(x, inTop) {
          /** @type {number} */
          self.doc.translate.y = x;
          /** @type {string} */
          self.doc.translate.ty = -1 * x + "px";
          self.doc.css(that.trstyle, "translate3d(" + self.doc.translate.tx + "," + self.doc.translate.ty + ",0px)");
          if (!inTop) {
            self.notifyScrollEvent(self.win[0]);
          }
        };
        /**
         * @param {number} v11
         * @param {?} inLeft
         * @return {undefined}
         */
        this.setScrollLeft = function(v11, inLeft) {
          /** @type {number} */
          self.doc.translate.x = v11;
          /** @type {string} */
          self.doc.translate.tx = v11 * v22 + "px";
          self.doc.css(that.trstyle, "translate3d(" + self.doc.translate.tx + "," + self.doc.translate.ty + ",0px)");
          if (!inLeft) {
            self.notifyScrollEvent(self.win[0]);
          }
        };
      } else {
        /**
         * @param {number} x
         * @param {?} inTop
         * @return {undefined}
         */
        this.setScrollTop = function(x, inTop) {
          /** @type {number} */
          self.doc.translate.y = x;
          /** @type {string} */
          self.doc.translate.ty = -1 * x + "px";
          self.doc.css(that.trstyle, "translate(" + self.doc.translate.tx + "," + self.doc.translate.ty + ")");
          if (!inTop) {
            self.notifyScrollEvent(self.win[0]);
          }
        };
        /**
         * @param {number} v11
         * @param {?} inLeft
         * @return {undefined}
         */
        this.setScrollLeft = function(v11, inLeft) {
          /** @type {number} */
          self.doc.translate.x = v11;
          /** @type {string} */
          self.doc.translate.tx = v11 * v22 + "px";
          self.doc.css(that.trstyle, "translate(" + self.doc.translate.tx + "," + self.doc.translate.ty + ")");
          if (!inLeft) {
            self.notifyScrollEvent(self.win[0]);
          }
        };
      }
    } else {
      /**
       * @return {?}
       */
      this.getScrollTop = function() {
        return self.docscroll.scrollTop();
      };
      /**
       * @param {Object} lab
       * @return {?}
       */
      this.setScrollTop = function(lab) {
        return setTimeout(function() {
          if (self) {
            self.docscroll.scrollTop(lab);
          }
        }, 1);
      };
      /**
       * @return {?}
       */
      this.getScrollLeft = function() {
        return self.hasreversehr ? self.detected.ismozilla ? self.page.maxw - Math.abs(self.docscroll.scrollLeft()) : self.page.maxw - self.docscroll.scrollLeft() : self.docscroll.scrollLeft();
      };
      /**
       * @param {Object} lab
       * @return {?}
       */
      this.setScrollLeft = function(lab) {
        return setTimeout(function() {
          if (self) {
            return self.hasreversehr && (lab = self.detected.ismozilla ? -(self.page.maxw - lab) : self.page.maxw - lab), self.docscroll.scrollLeft(lab);
          }
        }, 1);
      };
    }
    /**
     * @param {Object} event
     * @return {?}
     */
    this.getTarget = function(event) {
      return!!event && (event.target ? event.target : !!event.srcElement && event.srcElement);
    };
    /**
     * @param {boolean} evt
     * @param {?} el
     * @return {?}
     */
    this.hasParent = function(evt, el) {
      if (!evt) {
        return false;
      }
      var entry = evt.target || (evt.srcElement || (evt || false));
      for (;entry && entry.id != el;) {
        entry = entry.parentNode || false;
      }
      return false !== entry;
    };
    var size = {
      thin : 1,
      medium : 3,
      thick : 5
    };
    /**
     * @return {?}
     */
    this.getDocumentScrollOffset = function() {
      return{
        top : window.pageYOffset || document.documentElement.scrollTop,
        left : window.pageXOffset || document.documentElement.scrollLeft
      };
    };
    /**
     * @return {?}
     */
    this.getOffset = function() {
      if (self.isfixed) {
        var offset = self.win.offset();
        var parentOffset = self.getDocumentScrollOffset();
        return offset.top -= parentOffset.top, offset.left -= parentOffset.left, offset;
      }
      return offset = self.win.offset(), self.viewport ? (parentOffset = self.viewport.offset(), {
        top : offset.top - parentOffset.top,
        left : offset.left - parentOffset.left
      }) : offset;
    };
    /**
     * @param {Object} h
     * @return {undefined}
     */
    this.updateScrollBar = function(h) {
      var top;
      var x;
      var scroll;
      if (self.ishwscroll) {
        self.rail.css({
          height : self.win.innerHeight() - (self.opt.railpadding.top + self.opt.railpadding.bottom)
        });
        if (self.railh) {
          self.railh.css({
            width : self.win.innerWidth() - (self.opt.railpadding.left + self.opt.railpadding.right)
          });
        }
      } else {
        var rect = self.getOffset();
        top = rect.top;
        /** @type {number} */
        x = rect.left - (self.opt.railpadding.left + self.opt.railpadding.right);
        top += css(self.win, "border-top-width", true);
        x += self.rail.align ? self.win.outerWidth() - css(self.win, "border-right-width") - self.rail.width : css(self.win, "border-left-width");
        if (scroll = self.opt.railoffset) {
          if (scroll.top) {
            top += scroll.top;
          }
          if (scroll.left) {
            x += scroll.left;
          }
        }
        if (!self.railslocked) {
          self.rail.css({
            top : top,
            left : x,
            height : (h ? h.h : self.win.innerHeight()) - (self.opt.railpadding.top + self.opt.railpadding.bottom)
          });
        }
        if (self.zoom) {
          self.zoom.css({
            top : top + 1,
            left : 1 == self.rail.align ? x - 20 : x + self.rail.width + 4
          });
        }
        if (self.railh) {
          if (!self.railslocked) {
            top = rect.top;
            x = rect.left;
            if (scroll = self.opt.railhoffset) {
              if (scroll.top) {
                top += scroll.top;
              }
              if (scroll.left) {
                x += scroll.left;
              }
            }
            h = self.railh.align ? top + css(self.win, "border-top-width", true) + self.win.innerHeight() - self.railh.height : top + css(self.win, "border-top-width", true);
            x += css(self.win, "border-left-width");
            self.railh.css({
              top : h - (self.opt.railpadding.top + self.opt.railpadding.bottom),
              left : x,
              width : self.railh.width
            });
          }
        }
      }
    };
    /**
     * @param {Object} evt
     * @param {(RegExp|string)} opt_isDefault
     * @param {boolean} recurring
     * @return {undefined}
     */
    this.doRailClick = function(evt, opt_isDefault, recurring) {
      var attributes;
      if (!self.railslocked) {
        self.cancelEvent(evt);
        if (opt_isDefault) {
          opt_isDefault = recurring ? self.doScrollLeft : self.doScrollTop;
          /** @type {number} */
          attributes = recurring ? (evt.pageX - self.railh.offset().left - self.cursorwidth / 2) * self.scrollratio.x : (evt.pageY - self.rail.offset().top - self.cursorheight / 2) * self.scrollratio.y;
          opt_isDefault(attributes);
        } else {
          opt_isDefault = recurring ? self.doScrollLeftBy : self.doScrollBy;
          attributes = recurring ? self.scroll.x : self.scroll.y;
          /** @type {number} */
          evt = recurring ? evt.pageX - self.railh.offset().left : evt.pageY - self.rail.offset().top;
          recurring = recurring ? self.view.w : self.view.h;
          opt_isDefault(attributes >= evt ? recurring : -recurring);
        }
      }
    };
    self.hasanimationframe = fn;
    self.hascancelanimationframe = debug;
    if (self.hasanimationframe) {
      if (!self.hascancelanimationframe) {
        /**
         * @return {undefined}
         */
        debug = function() {
          /** @type {boolean} */
          self.cancelAnimationFrame = true;
        };
      }
    } else {
      /**
       * @param {Function} loop
       * @return {?}
       */
      fn = function(loop) {
        return setTimeout(loop, 15 - Math.floor(+new Date / 1E3) % 16);
      };
      /** @type {function ((null|number|undefined)): ?} */
      debug = clearTimeout;
    }
    /**
     * @return {?}
     */
    this.init = function() {
      if (self.saved.css = [], that.isie7mobile || that.isoperamini) {
        return true;
      }
      if (that.hasmstouch) {
        self.css(self.ispage ? $("html") : self.win, {
          _touchaction : "none"
        });
      }
      /** @type {({-ms-overflow-style: string}|{overflow-y: string})} */
      var expectedNumberOfNonCommentArgs = that.ismodernie || that.isie10 ? {
        "-ms-overflow-style" : "none"
      } : {
        "overflow-y" : "hidden"
      };
      if (self.zindex = "auto", self.zindex = self.ispage || "auto" != self.opt.zindex ? self.opt.zindex : show() || "auto", !self.ispage && ("auto" != self.zindex && (self.zindex > to && (to = self.zindex))), self.isie && (0 == self.zindex && ("auto" == self.opt.zindex && (self.zindex = "auto"))), !self.ispage || !that.cantouch && (!that.isieold && !that.isie9mobile)) {
        var attributes = self.docscroll;
        if (self.ispage) {
          attributes = self.haswrapper ? self.win : self.doc;
        }
        if (!that.isie9mobile) {
          self.css(attributes, expectedNumberOfNonCommentArgs);
        }
        if (self.ispage) {
          if (that.isie7) {
            if ("BODY" == self.doc[0].nodeName) {
              self.css($("html"), {
                "overflow-y" : "hidden"
              });
            } else {
              if ("HTML" == self.doc[0].nodeName) {
                self.css($("body"), expectedNumberOfNonCommentArgs);
              }
            }
          }
        }
        if (!!that.isios) {
          if (!self.ispage) {
            if (!self.haswrapper) {
              self.css($("body"), {
                "-webkit-overflow-scrolling" : "touch"
              });
            }
          }
        }
        var div = $(document.createElement("div"));
        div.css({
          position : "relative",
          top : 0,
          float : "right",
          width : self.opt.cursorwidth,
          height : 0,
          "background-color" : self.opt.cursorcolor,
          border : self.opt.cursorborder,
          "background-clip" : "padding-box",
          "-webkit-border-radius" : self.opt.cursorborderradius,
          "-moz-border-radius" : self.opt.cursorborderradius,
          "border-radius" : self.opt.cursorborderradius
        });
        /** @type {number} */
        div.hborder = parseFloat(div.outerHeight() - div.innerHeight());
        div.addClass("nicescroll-cursors");
        self.cursor = div;
        var element = $(document.createElement("div"));
        element.attr("id", self.id);
        element.addClass("nicescroll-rails nicescroll-rails-vr");
        var value;
        var type;
        var j;
        /** @type {Array} */
        var edges = ["left", "right", "top", "bottom"];
        for (j in edges) {
          type = edges[j];
          if (value = self.opt.railpadding[type]) {
            element.css("padding-" + type, value + "px");
          } else {
            /** @type {number} */
            self.opt.railpadding[type] = 0;
          }
        }
        element.append(div);
        /** @type {number} */
        element.width = Math.max(parseFloat(self.opt.cursorwidth), div.outerWidth());
        element.css({
          width : element.width + "px",
          zIndex : self.zindex,
          background : self.opt.background,
          cursor : "default"
        });
        /** @type {boolean} */
        element.visibility = true;
        /** @type {boolean} */
        element.scrollable = true;
        /** @type {number} */
        element.align = "left" == self.opt.railalign ? 0 : 1;
        self.rail = element;
        /** @type {boolean} */
        div = self.rail.drag = false;
        if (!!self.opt.boxzoom) {
          if (!self.ispage) {
            if (!that.isieold) {
              /** @type {Element} */
              div = document.createElement("div");
              self.bind(div, "click", self.doZoom);
              self.bind(div, "mouseenter", function() {
                self.zoom.css("opacity", self.opt.cursoropacitymax);
              });
              self.bind(div, "mouseleave", function() {
                self.zoom.css("opacity", self.opt.cursoropacitymin);
              });
              self.zoom = $(div);
              self.zoom.css({
                cursor : "pointer",
                zIndex : self.zindex,
                backgroundImage : "url(" + self.opt.scriptpath + "zoomico.png)",
                height : 18,
                width : 18,
                backgroundPosition : "0px 0px"
              });
              if (self.opt.dblclickzoom) {
                self.bind(self.win, "dblclick", self.doZoom);
              }
              if (that.cantouch) {
                if (self.opt.gesturezoom) {
                  /**
                   * @param {Object} arg
                   * @return {?}
                   */
                  self.ongesturezoom = function(arg) {
                    return 1.5 < arg.scale && self.doZoomIn(arg), 0.8 > arg.scale && self.doZoomOut(arg), self.cancelEvent(arg);
                  };
                  self.bind(self.win, "gestureend", self.ongesturezoom);
                }
              }
            }
          }
        }
        /** @type {boolean} */
        self.railh = false;
        var el;
        if (self.opt.horizrailenabled && (self.css(attributes, {
          overflowX : "hidden"
        }), div = $(document.createElement("div")), div.css({
          position : "absolute",
          top : 0,
          height : self.opt.cursorwidth,
          width : 0,
          backgroundColor : self.opt.cursorcolor,
          border : self.opt.cursorborder,
          backgroundClip : "padding-box",
          "-webkit-border-radius" : self.opt.cursorborderradius,
          "-moz-border-radius" : self.opt.cursorborderradius,
          "border-radius" : self.opt.cursorborderradius
        }), that.isieold && div.css("overflow", "hidden"), div.wborder = parseFloat(div.outerWidth() - div.innerWidth()), div.addClass("nicescroll-cursors"), self.cursorh = div, el = $(document.createElement("div")), el.attr("id", self.id + "-hr"), el.addClass("nicescroll-rails nicescroll-rails-hr"), el.height = Math.max(parseFloat(self.opt.cursorwidth), div.outerHeight()), el.css({
          height : el.height + "px",
          zIndex : self.zindex,
          background : self.opt.background
        }), el.append(div), el.visibility = true, el.scrollable = true, el.align = "top" == self.opt.railvalign ? 0 : 1, self.railh = el, self.railh.drag = false), self.ispage ? (element.css({
          position : "fixed",
          top : 0,
          height : "100%"
        }), element.align ? element.css({
          right : 0
        }) : element.css({
          left : 0
        }), self.body.append(element), self.railh && (el.css({
          position : "fixed",
          left : 0,
          width : "100%"
        }), el.align ? el.css({
          bottom : 0
        }) : el.css({
          top : 0
        }), self.body.append(el))) : (self.ishwscroll ? ("static" == self.win.css("position") && self.css(self.win, {
          position : "relative"
        }), attributes = "HTML" == self.win[0].nodeName ? self.body : self.win, $(attributes).scrollTop(0).scrollLeft(0), self.zoom && (self.zoom.css({
          position : "absolute",
          top : 1,
          right : 0,
          "margin-right" : element.width + 4
        }), attributes.append(self.zoom)), element.css({
          position : "absolute",
          top : 0
        }), element.align ? element.css({
          right : 0
        }) : element.css({
          left : 0
        }), attributes.append(element), el && (el.css({
          position : "absolute",
          left : 0,
          bottom : 0
        }), el.align ? el.css({
          bottom : 0
        }) : el.css({
          top : 0
        }), attributes.append(el))) : (self.isfixed = "fixed" == self.win.css("position"), attributes = self.isfixed ? "fixed" : "absolute", self.isfixed || (self.viewport = self.getViewport(self.win[0])), self.viewport && (self.body = self.viewport, 0 == /fixed|absolute/.test(self.viewport.css("position")) && self.css(self.viewport, {
          position : "relative"
        })), element.css({
          position : attributes
        }), self.zoom && self.zoom.css({
          position : attributes
        }), self.updateScrollBar(), self.body.append(element), self.zoom && self.body.append(self.zoom), self.railh && (el.css({
          position : attributes
        }), self.body.append(el))), that.isios && self.css(self.win, {
          "-webkit-tap-highlight-color" : "rgba(0,0,0,0)",
          "-webkit-touch-callout" : "none"
        }), that.isie && (self.opt.disableoutline && self.win.attr("hideFocus", "true")), that.iswebkit && (self.opt.disableoutline && self.win.css("outline", "none"))), false === self.opt.autohidemode ? (self.autohidedom = false, self.rail.css({
          opacity : self.opt.cursoropacitymax
        }), self.railh && self.railh.css({
          opacity : self.opt.cursoropacitymax
        })) : true === self.opt.autohidemode || "leave" === self.opt.autohidemode ? (self.autohidedom = $().add(self.rail), that.isie8 && (self.autohidedom = self.autohidedom.add(self.cursor)), self.railh && (self.autohidedom = self.autohidedom.add(self.railh)), self.railh && (that.isie8 && (self.autohidedom = self.autohidedom.add(self.cursorh)))) : "scroll" == self.opt.autohidemode ? (self.autohidedom = $().add(self.rail), self.railh && (self.autohidedom = self.autohidedom.add(self.railh))) : "cursor" == 
        self.opt.autohidemode ? (self.autohidedom = $().add(self.cursor), self.railh && (self.autohidedom = self.autohidedom.add(self.cursorh))) : "hidden" == self.opt.autohidemode && (self.autohidedom = false, self.hide(), self.railslocked = false), that.isie9mobile) {
          self.scrollmom = new set(self);
          /**
           * @return {?}
           */
          self.onmangotouch = function() {
            var sy = self.getScrollTop();
            var sx = self.getScrollLeft();
            if (sy == self.scrollmom.lastscrolly && sx == self.scrollmom.lastscrollx) {
              return true;
            }
            /** @type {number} */
            var distY = sy - self.mangotouch.sy;
            /** @type {number} */
            var distX = sx - self.mangotouch.sx;
            if (0 != Math.round(Math.sqrt(Math.pow(distX, 2) + Math.pow(distY, 2)))) {
              /** @type {number} */
              var prevx = 0 > distY ? -1 : 1;
              /** @type {number} */
              var prevy = 0 > distX ? -1 : 1;
              /** @type {number} */
              var tm = +new Date;
              if (self.mangotouch.lazy) {
                clearTimeout(self.mangotouch.lazy);
              }
              if (80 < tm - self.mangotouch.tm || (self.mangotouch.dry != prevx || self.mangotouch.drx != prevy)) {
                self.scrollmom.stop();
                self.scrollmom.reset(sx, sy);
                self.mangotouch.sy = sy;
                self.mangotouch.ly = sy;
                self.mangotouch.sx = sx;
                self.mangotouch.lx = sx;
                /** @type {number} */
                self.mangotouch.dry = prevx;
                /** @type {number} */
                self.mangotouch.drx = prevy;
                /** @type {number} */
                self.mangotouch.tm = tm;
              } else {
                self.scrollmom.stop();
                self.scrollmom.update(self.mangotouch.sx - distX, self.mangotouch.sy - distY);
                /** @type {number} */
                self.mangotouch.tm = tm;
                /** @type {number} */
                distY = Math.max(Math.abs(self.mangotouch.ly - sy), Math.abs(self.mangotouch.lx - sx));
                self.mangotouch.ly = sy;
                self.mangotouch.lx = sx;
                if (2 < distY) {
                  /** @type {number} */
                  self.mangotouch.lazy = setTimeout(function() {
                    /** @type {boolean} */
                    self.mangotouch.lazy = false;
                    /** @type {number} */
                    self.mangotouch.dry = 0;
                    /** @type {number} */
                    self.mangotouch.drx = 0;
                    /** @type {number} */
                    self.mangotouch.tm = 0;
                    self.scrollmom.doMomentum(30);
                  }, 100);
                }
              }
            }
          };
          element = self.getScrollTop();
          el = self.getScrollLeft();
          self.mangotouch = {
            sy : element,
            ly : element,
            dry : 0,
            sx : el,
            lx : el,
            drx : 0,
            lazy : false,
            tm : 0
          };
          self.bind(self.docscroll, "scroll", self.onmangotouch);
        } else {
          if (that.cantouch || (self.istouchcapable || (self.opt.touchbehavior || that.hasmstouch))) {
            self.scrollmom = new set(self);
            /**
             * @param {Object} e
             * @return {?}
             */
            self.ontouchstart = function(e) {
              if (e.pointerType && (2 != e.pointerType && "touch" != e.pointerType)) {
                return false;
              }
              if (self.hasmoving = false, !self.railslocked) {
                var elm;
                if (that.hasmstouch) {
                  elm = !!e.target && e.target;
                  for (;elm;) {
                    var t = $(elm).getNiceScroll();
                    if (0 < t.length && t[0].me == self.me) {
                      break;
                    }
                    if (0 < t.length) {
                      return false;
                    }
                    if ("DIV" == elm.nodeName && elm.id == self.id) {
                      break;
                    }
                    elm = !!elm.parentNode && elm.parentNode;
                  }
                }
                if (self.cancelScroll(), (elm = self.getTarget(e)) && (/INPUT/i.test(elm.nodeName) && /range/i.test(elm.type))) {
                  return self.stopPropagation(e);
                }
                if (!("clientX" in e) && ("changedTouches" in e && (e.clientX = e.changedTouches[0].clientX, e.clientY = e.changedTouches[0].clientY)), self.forcescreen && (t = e, e = {
                  original : e.original ? e.original : e
                }, e.clientX = t.screenX, e.clientY = t.screenY), self.rail.drag = {
                  x : e.clientX,
                  y : e.clientY,
                  sx : self.scroll.x,
                  sy : self.scroll.y,
                  st : self.getScrollTop(),
                  sl : self.getScrollLeft(),
                  pt : 2,
                  dl : false
                }, self.ispage || !self.opt.directionlockdeadzone) {
                  /** @type {string} */
                  self.rail.drag.dl = "f";
                } else {
                  t = $(window).width();
                  var len = $(window).height();
                  /** @type {number} */
                  len = Math.max(0, Math.max(document.body.scrollHeight, document.documentElement.scrollHeight) - len);
                  /** @type {number} */
                  t = Math.max(0, Math.max(document.body.scrollWidth, document.documentElement.scrollWidth) - t);
                  /** @type {(boolean|string)} */
                  self.rail.drag.ck = !self.rail.scrollable && self.railh.scrollable ? 0 < len && "v" : !(!self.rail.scrollable || self.railh.scrollable) && (0 < t && "h");
                  if (!self.rail.drag.ck) {
                    /** @type {string} */
                    self.rail.drag.dl = "f";
                  }
                }
                if (self.opt.touchbehavior && (self.isiframe && (that.isie && (t = self.win.position(), self.rail.drag.x += t.left, self.rail.drag.y += t.top))), self.hasmoving = false, self.lastmouseup = false, self.scrollmom.reset(e.clientX, e.clientY), !that.cantouch && (!this.istouchcapable && !e.pointerType)) {
                  if (!elm || !/INPUT|SELECT|TEXTAREA/i.test(elm.nodeName)) {
                    return!self.ispage && (that.hasmousecapture && elm.setCapture()), self.opt.touchbehavior ? (elm.onclick && (!elm._onclick && (elm._onclick = elm.onclick, elm.onclick = function(e) {
                      return!self.hasmoving && void elm._onclick.call(this, e);
                    })), self.cancelEvent(e)) : self.stopPropagation(e);
                  }
                  if (/SUBMIT|CANCEL|BUTTON/i.test($(elm).attr("type"))) {
                    pc = {
                      tg : elm,
                      click : false
                    };
                    self.preventclick = pc;
                  }
                }
              }
            };
            /**
             * @param {Object} e
             * @return {?}
             */
            self.ontouchend = function(e) {
              if (!self.rail.drag) {
                return true;
              }
              if (2 == self.rail.drag.pt) {
                if (e.pointerType && (2 != e.pointerType && "touch" != e.pointerType)) {
                  return false;
                }
                if (self.scrollmom.doMomentum(), self.rail.drag = false, self.hasmoving && (self.lastmouseup = true, self.hideCursor(), that.hasmousecapture && document.releaseCapture(), !that.cantouch)) {
                  return self.cancelEvent(e);
                }
              } else {
                if (1 == self.rail.drag.pt) {
                  return self.onmouseup(e);
                }
              }
            };
            var r = self.opt.touchbehavior && (self.isiframe && !that.hasmousecapture);
            /**
             * @param {Object} event
             * @param {boolean} dataAndEvents
             * @return {?}
             */
            self.ontouchmove = function(event, dataAndEvents) {
              if (!self.rail.drag || (event.targetTouches && (self.opt.preventmultitouchscrolling && 1 < event.targetTouches.length) || event.pointerType && (2 != event.pointerType && "touch" != event.pointerType))) {
                return false;
              }
              if (2 == self.rail.drag.pt) {
                if (that.cantouch && (that.isios && void 0 === event.original)) {
                  return true;
                }
                if (self.hasmoving = true, self.preventclick && (!self.preventclick.click && (self.preventclick.click = self.preventclick.tg.onclick || false, self.preventclick.tg.onclick = self.onpreventclick)), event = $.extend({
                  original : event
                }, event), "changedTouches" in event && (event.clientX = event.changedTouches[0].clientX, event.clientY = event.changedTouches[0].clientY), self.forcescreen) {
                  /** @type {Object} */
                  var touch = event;
                  event = {
                    original : event.original ? event.original : event
                  };
                  event.clientX = touch.screenX;
                  event.clientY = touch.screenY;
                }
                var diff;
                /** @type {number} */
                touch = diff = 0;
                if (r) {
                  if (!dataAndEvents) {
                    diff = self.win.position();
                    /** @type {number} */
                    touch = -diff.left;
                    /** @type {number} */
                    diff = -diff.top;
                  }
                }
                var now = event.clientY + diff;
                /** @type {number} */
                diff = now - self.rail.drag.y;
                var results = event.clientX + touch;
                /** @type {number} */
                var dist = results - self.rail.drag.x;
                /** @type {number} */
                var offset = self.rail.drag.st - diff;
                if (self.ishwscroll && self.opt.bouncescroll) {
                  if (0 > offset) {
                    /** @type {number} */
                    offset = Math.round(offset / 2);
                  } else {
                    if (offset > self.page.maxh) {
                      offset = self.page.maxh + Math.round((offset - self.page.maxh) / 2);
                    }
                  }
                } else {
                  if (0 > offset) {
                    /** @type {number} */
                    now = offset = 0;
                  }
                  if (offset > self.page.maxh) {
                    offset = self.page.maxh;
                    /** @type {number} */
                    now = 0;
                  }
                }
                var y;
                if (self.railh && (self.railh.scrollable && (y = self.isrtlmode ? dist - self.rail.drag.sl : self.rail.drag.sl - dist, self.ishwscroll && self.opt.bouncescroll ? 0 > y ? y = Math.round(y / 2) : y > self.page.maxw && (y = self.page.maxw + Math.round((y - self.page.maxw) / 2)) : (0 > y && (results = y = 0), y > self.page.maxw && (y = self.page.maxw, results = 0)))), touch = false, self.rail.drag.dl) {
                  /** @type {boolean} */
                  touch = true;
                  if ("v" == self.rail.drag.dl) {
                    y = self.rail.drag.sl;
                  } else {
                    if ("h" == self.rail.drag.dl) {
                      offset = self.rail.drag.st;
                    }
                  }
                } else {
                  /** @type {number} */
                  diff = Math.abs(diff);
                  /** @type {number} */
                  dist = Math.abs(dist);
                  var tolerance = self.opt.directionlockdeadzone;
                  if ("v" == self.rail.drag.ck) {
                    if (diff > tolerance && dist <= 0.3 * diff) {
                      return self.rail.drag = false, true;
                    }
                    if (dist > tolerance) {
                      /** @type {string} */
                      self.rail.drag.dl = "f";
                      $("body").scrollTop($("body").scrollTop());
                    }
                  } else {
                    if ("h" == self.rail.drag.ck) {
                      if (dist > tolerance && diff <= 0.3 * dist) {
                        return self.rail.drag = false, true;
                      }
                      if (diff > tolerance) {
                        /** @type {string} */
                        self.rail.drag.dl = "f";
                        $("body").scrollLeft($("body").scrollLeft());
                      }
                    }
                  }
                }
                if (self.synched("touchmove", function() {
                  if (self.rail.drag) {
                    if (2 == self.rail.drag.pt) {
                      if (self.prepareTransition) {
                        self.prepareTransition(0);
                      }
                      if (self.rail.scrollable) {
                        self.setScrollTop(offset);
                      }
                      self.scrollmom.update(results, now);
                      if (self.railh && self.railh.scrollable) {
                        self.setScrollLeft(y);
                        self.showCursor(offset, y);
                      } else {
                        self.showCursor(offset);
                      }
                      if (that.isie10) {
                        document.selection.clear();
                      }
                    }
                  }
                }), that.ischrome && (self.istouchcapable && (touch = false)), touch) {
                  return self.cancelEvent(event);
                }
              } else {
                if (1 == self.rail.drag.pt) {
                  return self.onmousemove(event);
                }
              }
            };
          }
          if (self.onmousedown = function(evt, dataAndEvents) {
            if (!self.rail.drag || 1 == self.rail.drag.pt) {
              if (self.railslocked) {
                return self.cancelEvent(evt);
              }
              self.cancelScroll();
              self.rail.drag = {
                x : evt.clientX,
                y : evt.clientY,
                sx : self.scroll.x,
                sy : self.scroll.y,
                pt : 1,
                hr : !!dataAndEvents
              };
              var target = self.getTarget(evt);
              return!self.ispage && (that.hasmousecapture && target.setCapture()), self.isiframe && (!that.hasmousecapture && (self.saved.csspointerevents = self.doc.css("pointer-events"), self.css(self.doc, {
                "pointer-events" : "none"
              }))), self.hasmoving = false, self.cancelEvent(evt);
            }
          }, self.onmouseup = function(event) {
            if (self.rail.drag) {
              return 1 != self.rail.drag.pt || (that.hasmousecapture && document.releaseCapture(), self.isiframe && (!that.hasmousecapture && self.doc.css("pointer-events", self.saved.csspointerevents)), self.rail.drag = false, self.hasmoving && self.triggerScrollEnd(), self.cancelEvent(event));
            }
          }, self.onmousemove = function(event) {
            if (self.rail.drag) {
              if (1 == self.rail.drag.pt) {
                if (that.ischrome && 0 == event.which) {
                  return self.onmouseup(event);
                }
                if (self.cursorfreezed = true, self.hasmoving = true, self.rail.drag.hr) {
                  self.scroll.x = self.rail.drag.sx + (event.clientX - self.rail.drag.x);
                  if (0 > self.scroll.x) {
                    /** @type {number} */
                    self.scroll.x = 0;
                  }
                  var max = self.scrollvaluemaxw;
                  if (self.scroll.x > max) {
                    self.scroll.x = max;
                  }
                } else {
                  self.scroll.y = self.rail.drag.sy + (event.clientY - self.rail.drag.y);
                  if (0 > self.scroll.y) {
                    /** @type {number} */
                    self.scroll.y = 0;
                  }
                  max = self.scrollvaluemax;
                  if (self.scroll.y > max) {
                    self.scroll.y = max;
                  }
                }
                return self.synched("mousemove", function() {
                  if (self.rail.drag) {
                    if (1 == self.rail.drag.pt) {
                      self.showCursor();
                      if (self.rail.drag.hr) {
                        if (self.hasreversehr) {
                          self.doScrollLeft(self.scrollvaluemaxw - Math.round(self.scroll.x * self.scrollratio.x), self.opt.cursordragspeed);
                        } else {
                          self.doScrollLeft(Math.round(self.scroll.x * self.scrollratio.x), self.opt.cursordragspeed);
                        }
                      } else {
                        self.doScrollTop(Math.round(self.scroll.y * self.scrollratio.y), self.opt.cursordragspeed);
                      }
                    }
                  }
                }), self.cancelEvent(event);
              }
            } else {
              /** @type {number} */
              self.checkarea = 0;
            }
          }, that.cantouch || self.opt.touchbehavior) {
            /**
             * @param {Function} event
             * @return {?}
             */
            self.onpreventclick = function(event) {
              if (self.preventclick) {
                return self.preventclick.tg.onclick = self.preventclick.click, self.preventclick = false, self.cancelEvent(event);
              }
            };
            self.bind(self.win, "mousedown", self.ontouchstart);
            /** @type {(boolean|function (Function): ?)} */
            self.onclick = !that.isios && function(event) {
              return!self.lastmouseup || (self.lastmouseup = false, self.cancelEvent(event));
            };
            if (self.opt.grabcursorenabled) {
              if (that.cursorgrabvalue) {
                self.css(self.ispage ? self.doc : self.win, {
                  cursor : that.cursorgrabvalue
                });
                self.css(self.rail, {
                  cursor : that.cursorgrabvalue
                });
              }
            }
          } else {
            /**
             * @param {number} x
             * @return {undefined}
             */
            var resize = function(x) {
              if (self.selectiondrag) {
                if (x) {
                  var y = self.win.outerHeight();
                  /** @type {number} */
                  x = x.pageY - self.selectiondrag.top;
                  if (0 < x) {
                    if (x < y) {
                      /** @type {number} */
                      x = 0;
                    }
                  }
                  if (x >= y) {
                    x -= y;
                  }
                  /** @type {number} */
                  self.selectiondrag.df = x;
                }
                if (0 != self.selectiondrag.df) {
                  self.doScrollBy(2 * -Math.floor(self.selectiondrag.df / 6));
                  self.debounced("doselectionscroll", function() {
                    resize();
                  }, 50);
                }
              }
            };
            /** @type {function (): ?} */
            self.hasTextSelected = "getSelection" in document ? function() {
              return 0 < document.getSelection().rangeCount;
            } : "selection" in document ? function() {
              return "None" != document.selection.type;
            } : function() {
              return false;
            };
            /**
             * @param {?} dataAndEvents
             * @return {undefined}
             */
            self.onselectionstart = function(dataAndEvents) {
              if (!self.ispage) {
                self.selectiondrag = self.win.offset();
              }
            };
            /**
             * @param {?} dataAndEvents
             * @return {undefined}
             */
            self.onselectionend = function(dataAndEvents) {
              /** @type {boolean} */
              self.selectiondrag = false;
            };
            /**
             * @param {number} size
             * @return {undefined}
             */
            self.onselectiondrag = function(size) {
              if (self.selectiondrag) {
                if (self.hasTextSelected()) {
                  self.debounced("selectionscroll", function() {
                    resize(size);
                  }, 250);
                }
              }
            };
          }
          if (that.hasw3ctouch) {
            self.css(self.rail, {
              "touch-action" : "none"
            });
            self.css(self.cursor, {
              "touch-action" : "none"
            });
            self.bind(self.win, "pointerdown", self.ontouchstart);
            self.bind(document, "pointerup", self.ontouchend);
            self.bind(document, "pointermove", self.ontouchmove);
          } else {
            if (that.hasmstouch) {
              self.css(self.rail, {
                "-ms-touch-action" : "none"
              });
              self.css(self.cursor, {
                "-ms-touch-action" : "none"
              });
              self.bind(self.win, "MSPointerDown", self.ontouchstart);
              self.bind(document, "MSPointerUp", self.ontouchend);
              self.bind(document, "MSPointerMove", self.ontouchmove);
              self.bind(self.cursor, "MSGestureHold", function(types) {
                types.preventDefault();
              });
              self.bind(self.cursor, "contextmenu", function(types) {
                types.preventDefault();
              });
            } else {
              if (this.istouchcapable) {
                self.bind(self.win, "touchstart", self.ontouchstart);
                self.bind(document, "touchend", self.ontouchend);
                self.bind(document, "touchcancel", self.ontouchend);
                self.bind(document, "touchmove", self.ontouchmove);
              }
            }
          }
          if (self.opt.cursordragontouch || !that.cantouch && !self.opt.touchbehavior) {
            self.rail.css({
              cursor : "default"
            });
            if (self.railh) {
              self.railh.css({
                cursor : "default"
              });
            }
            self.jqbind(self.rail, "mouseenter", function() {
              return!(!self.ispage && !self.win.is(":visible")) && (self.canshowonmouseevent && self.showCursor(), void(self.rail.active = true));
            });
            self.jqbind(self.rail, "mouseleave", function() {
              /** @type {boolean} */
              self.rail.active = false;
              if (!self.rail.drag) {
                self.hideCursor();
              }
            });
            if (self.opt.sensitiverail) {
              self.bind(self.rail, "click", function(slide) {
                self.doRailClick(slide, false, false);
              });
              self.bind(self.rail, "dblclick", function(slide) {
                self.doRailClick(slide, true, false);
              });
              self.bind(self.cursor, "click", function(event) {
                self.cancelEvent(event);
              });
              self.bind(self.cursor, "dblclick", function(event) {
                self.cancelEvent(event);
              });
            }
            if (self.railh) {
              self.jqbind(self.railh, "mouseenter", function() {
                return!(!self.ispage && !self.win.is(":visible")) && (self.canshowonmouseevent && self.showCursor(), void(self.rail.active = true));
              });
              self.jqbind(self.railh, "mouseleave", function() {
                /** @type {boolean} */
                self.rail.active = false;
                if (!self.rail.drag) {
                  self.hideCursor();
                }
              });
              if (self.opt.sensitiverail) {
                self.bind(self.railh, "click", function(slide) {
                  self.doRailClick(slide, false, true);
                });
                self.bind(self.railh, "dblclick", function(slide) {
                  self.doRailClick(slide, true, true);
                });
                self.bind(self.cursorh, "click", function(event) {
                  self.cancelEvent(event);
                });
                self.bind(self.cursorh, "dblclick", function(event) {
                  self.cancelEvent(event);
                });
              }
            }
          }
          if (that.cantouch || self.opt.touchbehavior) {
            self.bind(that.hasmousecapture ? self.win : document, "mouseup", self.ontouchend);
            self.bind(document, "mousemove", self.ontouchmove);
            if (self.onclick) {
              self.bind(document, "click", self.onclick);
            }
            if (self.opt.cursordragontouch) {
              self.bind(self.cursor, "mousedown", self.onmousedown);
              self.bind(self.cursor, "mouseup", self.onmouseup);
              if (self.cursorh) {
                self.bind(self.cursorh, "mousedown", function(slide) {
                  self.onmousedown(slide, true);
                });
              }
              if (self.cursorh) {
                self.bind(self.cursorh, "mouseup", self.onmouseup);
              }
            } else {
              self.bind(self.rail, "mousedown", function(types) {
                types.preventDefault();
              });
              if (self.railh) {
                self.bind(self.railh, "mousedown", function(types) {
                  types.preventDefault();
                });
              }
            }
          } else {
            self.bind(that.hasmousecapture ? self.win : document, "mouseup", self.onmouseup);
            self.bind(document, "mousemove", self.onmousemove);
            if (self.onclick) {
              self.bind(document, "click", self.onclick);
            }
            self.bind(self.cursor, "mousedown", self.onmousedown);
            self.bind(self.cursor, "mouseup", self.onmouseup);
            if (self.railh) {
              self.bind(self.cursorh, "mousedown", function(slide) {
                self.onmousedown(slide, true);
              });
              self.bind(self.cursorh, "mouseup", self.onmouseup);
            }
            if (!self.ispage) {
              if (self.opt.enablescrollonselection) {
                self.bind(self.win[0], "mousedown", self.onselectionstart);
                self.bind(document, "mouseup", self.onselectionend);
                self.bind(self.cursor, "mouseup", self.onselectionend);
                if (self.cursorh) {
                  self.bind(self.cursorh, "mouseup", self.onselectionend);
                }
                self.bind(document, "mousemove", self.onselectiondrag);
              }
            }
            if (self.zoom) {
              self.jqbind(self.zoom, "mouseenter", function() {
                if (self.canshowonmouseevent) {
                  self.showCursor();
                }
                /** @type {boolean} */
                self.rail.active = true;
              });
              self.jqbind(self.zoom, "mouseleave", function() {
                /** @type {boolean} */
                self.rail.active = false;
                if (!self.rail.drag) {
                  self.hideCursor();
                }
              });
            }
          }
          if (self.opt.enablemousewheel) {
            if (!self.isiframe) {
              self.mousewheel(that.isie && self.ispage ? document : self.win, self.onmousewheel);
            }
            self.mousewheel(self.rail, self.onmousewheel);
            if (self.railh) {
              self.mousewheel(self.railh, self.onmousewheelhr);
            }
          }
          if (!self.ispage) {
            if (!that.cantouch) {
              if (!/HTML|^BODY/.test(self.win[0].nodeName)) {
                if (!self.win.attr("tabindex")) {
                  self.win.attr({
                    tabindex : tabindex++
                  });
                }
                self.jqbind(self.win, "focus", function(event) {
                  object = self.getTarget(event).id || true;
                  /** @type {boolean} */
                  self.hasfocus = true;
                  if (self.canshowonmouseevent) {
                    self.noticeCursor();
                  }
                });
                self.jqbind(self.win, "blur", function(dataAndEvents) {
                  /** @type {boolean} */
                  object = false;
                  /** @type {boolean} */
                  self.hasfocus = false;
                });
                self.jqbind(self.win, "mouseenter", function(event) {
                  property = self.getTarget(event).id || true;
                  /** @type {boolean} */
                  self.hasmousefocus = true;
                  if (self.canshowonmouseevent) {
                    self.noticeCursor();
                  }
                });
                self.jqbind(self.win, "mouseleave", function() {
                  /** @type {boolean} */
                  property = false;
                  /** @type {boolean} */
                  self.hasmousefocus = false;
                  if (!self.rail.drag) {
                    self.hideCursor();
                  }
                });
              }
            }
          }
        }
        if (self.onkeypress = function(e) {
          if (self.railslocked && 0 == self.page.maxh) {
            return true;
          }
          e = e ? e : window.e;
          var n = self.getTarget(e);
          if (n && (/INPUT|TEXTAREA|SELECT|OPTION/.test(n.nodeName) && (!n.getAttribute("type") && !n.type || !/submit|button|cancel/i.tp)) || $(n).attr("contenteditable")) {
            return true;
          }
          if (self.hasfocus || (self.hasmousefocus && !object || self.ispage && (!object && !property))) {
            if (n = e.keyCode, self.railslocked && 27 != n) {
              return self.cancelEvent(e);
            }
            var railh = e.ctrlKey || false;
            var g = e.shiftKey || false;
            /** @type {boolean} */
            var h = false;
            switch(n) {
              case 38:
              ;
              case 63233:
                self.doScrollBy(72);
                /** @type {boolean} */
                h = true;
                break;
              case 40:
              ;
              case 63235:
                self.doScrollBy(-72);
                /** @type {boolean} */
                h = true;
                break;
              case 37:
              ;
              case 63232:
                if (self.railh) {
                  if (railh) {
                    self.doScrollLeft(0);
                  } else {
                    self.doScrollLeftBy(72);
                  }
                  /** @type {boolean} */
                  h = true;
                }
                break;
              case 39:
              ;
              case 63234:
                if (self.railh) {
                  if (railh) {
                    self.doScrollLeft(self.page.maxw);
                  } else {
                    self.doScrollLeftBy(-72);
                  }
                  /** @type {boolean} */
                  h = true;
                }
                break;
              case 33:
              ;
              case 63276:
                self.doScrollBy(self.view.h);
                /** @type {boolean} */
                h = true;
                break;
              case 34:
              ;
              case 63277:
                self.doScrollBy(-self.view.h);
                /** @type {boolean} */
                h = true;
                break;
              case 36:
              ;
              case 63273:
                if (self.railh && railh) {
                  self.doScrollPos(0, 0);
                } else {
                  self.doScrollTo(0);
                }
                /** @type {boolean} */
                h = true;
                break;
              case 35:
              ;
              case 63275:
                if (self.railh && railh) {
                  self.doScrollPos(self.page.maxw, self.page.maxh);
                } else {
                  self.doScrollTo(self.page.maxh);
                }
                /** @type {boolean} */
                h = true;
                break;
              case 32:
                if (self.opt.spacebarenabled) {
                  if (g) {
                    self.doScrollBy(self.view.h);
                  } else {
                    self.doScrollBy(-self.view.h);
                  }
                  /** @type {boolean} */
                  h = true;
                }
                break;
              case 27:
                if (self.zoomactive) {
                  self.doZoom();
                  /** @type {boolean} */
                  h = true;
                }
              ;
            }
            if (h) {
              return self.cancelEvent(e);
            }
          }
        }, self.opt.enablekeyboard && self.bind(document, that.isopera && !that.isopera12 ? "keypress" : "keydown", self.onkeypress), self.bind(document, "keydown", function(evt) {
          if (evt.ctrlKey) {
            /** @type {boolean} */
            self.wheelprevented = true;
          }
        }), self.bind(document, "keyup", function(evt) {
          if (!evt.ctrlKey) {
            /** @type {boolean} */
            self.wheelprevented = false;
          }
        }), self.bind(window, "blur", function(dataAndEvents) {
          /** @type {boolean} */
          self.wheelprevented = false;
        }), self.bind(window, "resize", self.lazyResize), self.bind(window, "orientationchange", self.lazyResize), self.bind(window, "load", self.lazyResize), that.ischrome && (!self.ispage && !self.haswrapper)) {
          var target = self.win.attr("style");
          /** @type {number} */
          element = parseFloat(self.win.css("width")) + 1;
          self.win.css("width", element);
          self.synched("chromefix", function() {
            self.win.attr("style", target);
          });
        }
        /**
         * @param {?} dataAndEvents
         * @return {undefined}
         */
        self.onAttributeChange = function(dataAndEvents) {
          self.lazyResize(self.isieold ? 250 : 30);
        };
        if (!self.isie11) {
          if (!(false === Font)) {
            self.observerbody = new Font(function(failures) {
              if (failures.forEach(function(that) {
                if ("attributes" == that.type) {
                  return $("body").hasClass("modal-open") && ($("body").hasClass("modal-dialog") && !$.contains($(".modal-dialog")[0], self.doc[0])) ? self.hide() : self.show();
                }
              }), document.body.scrollHeight != self.page.maxh) {
                return self.lazyResize(30);
              }
            });
            self.observerbody.observe(document.body, {
              childList : true,
              subtree : true,
              characterData : false,
              attributes : true,
              attributeFilter : ["class"]
            });
          }
        }
        if (!self.ispage) {
          if (!self.haswrapper) {
            if (false !== Font) {
              self.observer = new Font(function(rows) {
                rows.forEach(self.onAttributeChange);
              });
              self.observer.observe(self.win[0], {
                childList : true,
                characterData : false,
                attributes : true,
                subtree : false
              });
              self.observerremover = new Font(function(failures) {
                failures.forEach(function(record) {
                  if (0 < record.removedNodes.length) {
                    var j;
                    for (j in record.removedNodes) {
                      if (self && record.removedNodes[j] == self.win[0]) {
                        return self.remove();
                      }
                    }
                  }
                });
              });
              self.observerremover.observe(self.win[0].parentNode, {
                childList : true,
                characterData : false,
                attributes : false,
                subtree : false
              });
            } else {
              self.bind(self.win, that.isie && !that.isie9 ? "propertychange" : "DOMAttrModified", self.onAttributeChange);
              if (that.isie9) {
                self.win[0].attachEvent("onpropertychange", self.onAttributeChange);
              }
              self.bind(self.win, "DOMNodeRemoved", function(opt_e) {
                if (opt_e.target == self.win[0]) {
                  self.remove();
                }
              });
            }
          }
        }
        if (!self.ispage) {
          if (self.opt.boxzoom) {
            self.bind(window, "resize", self.resizeZoom);
          }
        }
        if (self.istextarea) {
          self.bind(self.win, "keydown", self.lazyResize);
          self.bind(self.win, "mouseup", self.lazyResize);
        }
        self.lazyResize(30);
      }
      if ("IFRAME" == this.doc[0].nodeName) {
        /**
         * @return {?}
         */
        var init = function() {
          /** @type {boolean} */
          self.iframexd = false;
          var e;
          try {
            e = "contentDocument" in this ? this.contentDocument : this.contentWindow.document;
          } catch (a) {
            /** @type {boolean} */
            self.iframexd = true;
            /** @type {boolean} */
            e = false;
          }
          if (self.iframexd) {
            return "console" in window && console.log("NiceScroll error: policy restriced iframe"), true;
          }
          if (self.forcescreen = true, self.isiframe && (self.iframe = {
            doc : $(e),
            html : self.doc.contents().find("html")[0],
            body : self.doc.contents().find("body")[0]
          }, self.getContentSize = function() {
            return{
              w : Math.max(self.iframe.html.scrollWidth, self.iframe.body.scrollWidth),
              h : Math.max(self.iframe.html.scrollHeight, self.iframe.body.scrollHeight)
            };
          }, self.docscroll = $(self.iframe.body)), !that.isios && (self.opt.iframeautoresize && !self.isiframe)) {
            self.win.scrollTop(0);
            self.doc.height("");
            /** @type {number} */
            var lab = Math.max(e.getElementsByTagName("html")[0].scrollHeight, e.body.scrollHeight);
            self.doc.height(lab);
          }
          self.lazyResize(30);
          if (that.isie7) {
            self.css($(self.iframe.html), expectedNumberOfNonCommentArgs);
          }
          self.css($(self.iframe.body), expectedNumberOfNonCommentArgs);
          if (that.isios) {
            if (self.haswrapper) {
              self.css($(e.body), {
                "-webkit-transform" : "translate3d(0,0,0)"
              });
            }
          }
          if ("contentWindow" in this) {
            self.bind(this.contentWindow, "scroll", self.onscroll);
          } else {
            self.bind(e, "scroll", self.onscroll);
          }
          if (self.opt.enablemousewheel) {
            self.mousewheel(e, self.onmousewheel);
          }
          if (self.opt.enablekeyboard) {
            self.bind(e, that.isopera ? "keypress" : "keydown", self.onkeypress);
          }
          if (that.cantouch || self.opt.touchbehavior) {
            self.bind(e, "mousedown", self.ontouchstart);
            self.bind(e, "mousemove", function(e) {
              return self.ontouchmove(e, true);
            });
            if (self.opt.grabcursorenabled) {
              if (that.cursorgrabvalue) {
                self.css($(e.body), {
                  cursor : that.cursorgrabvalue
                });
              }
            }
          }
          self.bind(e, "mouseup", self.ontouchend);
          if (self.zoom) {
            if (self.opt.dblclickzoom) {
              self.bind(e, "dblclick", self.doZoom);
            }
            if (self.ongesturezoom) {
              self.bind(e, "gestureend", self.ongesturezoom);
            }
          }
        };
        if (this.doc[0].readyState) {
          if ("complete" == this.doc[0].readyState) {
            setTimeout(function() {
              init.call(self.doc[0], false);
            }, 500);
          }
        }
        self.bind(this.doc, "load", init);
      }
    };
    /**
     * @param {number} arg2
     * @param {number} v11
     * @return {undefined}
     */
    this.showCursor = function(arg2, v11) {
      if (self.cursortimeout && (clearTimeout(self.cursortimeout), self.cursortimeout = 0), self.rail) {
        if (self.autohidedom && (self.autohidedom.stop().css({
          opacity : self.opt.cursoropacitymax
        }), self.cursoractive = true), self.rail.drag && 1 == self.rail.drag.pt || (void 0 !== arg2 && (false !== arg2 && (self.scroll.y = Math.round(1 * arg2 / self.scrollratio.y))), void 0 !== v11 && (self.scroll.x = Math.round(1 * v11 / self.scrollratio.x))), self.cursor.css({
          height : self.cursorheight,
          top : self.scroll.y
        }), self.cursorh) {
          var l = self.hasreversehr ? self.scrollvaluemaxw - self.scroll.x : self.scroll.x;
          if (!self.rail.align && self.rail.visibility) {
            self.cursorh.css({
              width : self.cursorwidth,
              left : l + self.rail.width
            });
          } else {
            self.cursorh.css({
              width : self.cursorwidth,
              left : l
            });
          }
          /** @type {boolean} */
          self.cursoractive = true;
        }
        if (self.zoom) {
          self.zoom.stop().css({
            opacity : self.opt.cursoropacitymax
          });
        }
      }
    };
    /**
     * @param {boolean} onComplete
     * @return {undefined}
     */
    this.hideCursor = function(onComplete) {
      if (!self.cursortimeout) {
        if (!!self.rail) {
          if (!!self.autohidedom) {
            if (!(self.hasmousefocus && "leave" == self.opt.autohidemode)) {
              /** @type {number} */
              self.cursortimeout = setTimeout(function() {
                if (!(self.rail.active && self.showonmouseevent)) {
                  self.autohidedom.stop().animate({
                    opacity : self.opt.cursoropacitymin
                  });
                  if (self.zoom) {
                    self.zoom.stop().animate({
                      opacity : self.opt.cursoropacitymin
                    });
                  }
                  /** @type {boolean} */
                  self.cursoractive = false;
                }
                /** @type {number} */
                self.cursortimeout = 0;
              }, onComplete || self.opt.hidecursordelay);
            }
          }
        }
      }
    };
    /**
     * @param {boolean} onComplete
     * @param {number} offset
     * @param {number} v11
     * @return {undefined}
     */
    this.noticeCursor = function(onComplete, offset, v11) {
      self.showCursor(offset, v11);
      if (!self.rail.active) {
        self.hideCursor(onComplete);
      }
    };
    /** @type {function (): ?} */
    this.getContentSize = self.ispage ? function() {
      return{
        w : Math.max(document.body.scrollWidth, document.documentElement.scrollWidth),
        h : Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
      };
    } : self.haswrapper ? function() {
      return{
        w : self.doc.outerWidth() + parseInt(self.win.css("paddingLeft")) + parseInt(self.win.css("paddingRight")),
        h : self.doc.outerHeight() + parseInt(self.win.css("paddingTop")) + parseInt(self.win.css("paddingBottom"))
      };
    } : function() {
      return{
        w : self.docscroll[0].scrollWidth,
        h : self.docscroll[0].scrollHeight
      };
    };
    /**
     * @param {boolean} recurring
     * @param {string} width
     * @return {?}
     */
    this.onResize = function(recurring, width) {
      if (!self || !self.win) {
        return false;
      }
      if (!self.haswrapper && !self.ispage) {
        if ("none" == self.win.css("display")) {
          return self.visibility && self.hideRail().hideRailHr(), false;
        }
        if (!self.hidden) {
          if (!self.visibility) {
            self.showRail().showRailHr();
          }
        }
      }
      var offset = self.page.maxh;
      var result = self.page.maxw;
      var h = self.view.h;
      var w = self.view.w;
      if (self.view = {
        w : self.ispage ? self.win.width() : parseInt(self.win[0].clientWidth),
        h : self.ispage ? self.win.height() : parseInt(self.win[0].clientHeight)
      }, self.page = width ? width : self.getContentSize(), self.page.maxh = Math.max(0, self.page.h - self.view.h), self.page.maxw = Math.max(0, self.page.w - self.view.w), self.page.maxh == offset && (self.page.maxw == result && (self.view.w == w && self.view.h == h))) {
        if (self.ispage) {
          return self;
        }
        if (offset = self.win.offset(), self.lastposition && (result = self.lastposition, result.top == offset.top && result.left == offset.left)) {
          return self;
        }
        self.lastposition = offset;
      }
      return 0 == self.page.maxh ? (self.hideRail(), self.scrollvaluemax = 0, self.scroll.y = 0, self.scrollratio.y = 0, self.cursorheight = 0, self.setScrollTop(0), self.rail && (self.rail.scrollable = false)) : (self.page.maxh -= self.opt.railpadding.top + self.opt.railpadding.bottom, self.rail.scrollable = true), 0 == self.page.maxw ? (self.hideRailHr(), self.scrollvaluemaxw = 0, self.scroll.x = 0, self.scrollratio.x = 0, self.cursorwidth = 0, self.setScrollLeft(0), self.railh && (self.railh.scrollable = 
      false)) : (self.page.maxw -= self.opt.railpadding.left + self.opt.railpadding.right, self.railh && (self.railh.scrollable = self.opt.horizrailenabled)), self.railslocked = self.locked || 0 == self.page.maxh && 0 == self.page.maxw, self.railslocked ? (self.ispage || self.updateScrollBar(self.view), false) : (self.hidden || self.visibility ? !self.railh || (self.hidden || (self.railh.visibility || self.showRailHr())) : self.showRail().showRailHr(), self.istextarea && (self.win.css("resize") && 
      ("none" != self.win.css("resize") && (self.view.h -= 20))), self.cursorheight = Math.min(self.view.h, Math.round(self.view.h / self.page.h * self.view.h)), self.cursorheight = self.opt.cursorfixedheight ? self.opt.cursorfixedheight : Math.max(self.opt.cursorminheight, self.cursorheight), self.cursorwidth = Math.min(self.view.w, Math.round(self.view.w / self.page.w * self.view.w)), self.cursorwidth = self.opt.cursorfixedheight ? self.opt.cursorfixedheight : Math.max(self.opt.cursorminheight, 
      self.cursorwidth), self.scrollvaluemax = self.view.h - self.cursorheight - self.cursor.hborder - (self.opt.railpadding.top + self.opt.railpadding.bottom), self.railh && (self.railh.width = 0 < self.page.maxh ? self.view.w - self.rail.width : self.view.w, self.scrollvaluemaxw = self.railh.width - self.cursorwidth - self.cursorh.wborder - (self.opt.railpadding.left + self.opt.railpadding.right)), self.ispage || self.updateScrollBar(self.view), self.scrollratio = {
        x : self.page.maxw / self.scrollvaluemaxw,
        y : self.page.maxh / self.scrollvaluemax
      }, self.getScrollTop() > self.page.maxh ? self.doScrollTop(self.page.maxh) : (self.scroll.y = Math.round(self.getScrollTop() * (1 / self.scrollratio.y)), self.scroll.x = Math.round(self.getScrollLeft() * (1 / self.scrollratio.x)), self.cursoractive && self.noticeCursor()), self.scroll.y && (0 == self.getScrollTop() && self.doScrollTo(Math.floor(self.scroll.y * self.scrollratio.y))), self);
    };
    this.resize = self.onResize;
    /** @type {number} */
    this.hlazyresize = 0;
    /**
     * @param {number} opt_attributes
     * @return {?}
     */
    this.lazyResize = function(opt_attributes) {
      return self.haswrapper || self.hide(), self.hlazyresize && clearTimeout(self.hlazyresize), self.hlazyresize = setTimeout(function() {
        if (self) {
          self.show().resize();
        }
      }, 240), self;
    };
    /**
     * @param {Object} e
     * @param {?} type
     * @param {string} cycle
     * @return {undefined}
     */
    this.jqbind = function(e, type, cycle) {
      self.events.push({
        e : e,
        n : type,
        f : cycle,
        q : true
      });
      $(e).bind(type, cycle);
    };
    /**
     * @param {?} event
     * @param {Function} next
     * @param {boolean} delta
     * @return {undefined}
     */
    this.mousewheel = function(event, next, delta) {
      if (event = "jquery" in event ? event[0] : event, "onwheel" in document.createElement("div")) {
        self._bind(event, "wheel", next, delta || false);
      } else {
        /** @type {string} */
        var type = void 0 !== document.onmousewheel ? "mousewheel" : "DOMMouseScroll";
        init(event, type, next, delta || false);
        if ("DOMMouseScroll" == type) {
          init(event, "MozMousePixelScroll", next, delta || false);
        }
      }
    };
    if (that.haseventlistener) {
      /**
       * @param {?} type
       * @param {string} name
       * @param {Function} callback
       * @param {boolean} lazy
       * @return {undefined}
       */
      this.bind = function(type, name, callback, lazy) {
        self._bind("jquery" in type ? type[0] : type, name, callback, lazy || false);
      };
      /**
       * @param {Object} event
       * @param {string} name
       * @param {Function} callback
       * @param {boolean} value
       * @return {undefined}
       */
      this._bind = function(event, name, callback, value) {
        self.events.push({
          e : event,
          n : name,
          /** @type {Function} */
          f : callback,
          b : value,
          q : false
        });
        event.addEventListener(name, callback, value || false);
      };
      /**
       * @param {Object} event
       * @return {?}
       */
      this.cancelEvent = function(event) {
        return!!event && (event = event.original ? event.original : event, event.cancelable && event.preventDefault(), event.stopPropagation(), event.preventManipulation && event.preventManipulation(), false);
      };
      /**
       * @param {Object} e
       * @return {?}
       */
      this.stopPropagation = function(e) {
        return!!e && (e = e.original ? e.original : e, e.stopPropagation(), false);
      };
      /**
       * @param {HTMLDocument} el
       * @param {?} eventName
       * @param {?} fn
       * @param {?} bubble
       * @return {undefined}
       */
      this._unbind = function(el, eventName, fn, bubble) {
        el.removeEventListener(eventName, fn, bubble);
      };
    } else {
      /**
       * @param {?} type
       * @param {string} name
       * @param {Function} fn
       * @param {boolean} lazy
       * @return {undefined}
       */
      this.bind = function(type, name, fn, lazy) {
        var bind = "jquery" in type ? type[0] : type;
        self._bind(bind, name, function(event) {
          return(event = event || (window.event || false)) && (event.srcElement && (event.target = event.srcElement)), "pageY" in event || (event.pageX = event.clientX + document.documentElement.scrollLeft, event.pageY = event.clientY + document.documentElement.scrollTop), false !== fn.call(bind, event) && false !== lazy || self.cancelEvent(event);
        });
      };
      /**
       * @param {Object} el
       * @param {string} name
       * @param {Function} fn
       * @param {boolean} value
       * @return {undefined}
       */
      this._bind = function(el, name, fn, value) {
        self.events.push({
          e : el,
          n : name,
          /** @type {Function} */
          f : fn,
          b : value,
          q : false
        });
        if (el.attachEvent) {
          el.attachEvent("on" + name, fn);
        } else {
          /** @type {Function} */
          el["on" + name] = fn;
        }
      };
      /**
       * @param {Object} event
       * @return {?}
       */
      this.cancelEvent = function(event) {
        return!!(event = window.event || false) && (event.cancelBubble = true, event.cancel = true, event.returnValue = false);
      };
      /**
       * @param {Object} e
       * @return {?}
       */
      this.stopPropagation = function(e) {
        return!!(e = window.event || false) && (e.cancelBubble = true, false);
      };
      /**
       * @param {Object} el
       * @param {string} type
       * @param {?} fn
       * @param {?} bubble
       * @return {undefined}
       */
      this._unbind = function(el, type, fn, bubble) {
        if (el.detachEvent) {
          el.detachEvent("on" + type, fn);
        } else {
          /** @type {boolean} */
          el["on" + type] = false;
        }
      };
    }
    /**
     * @return {undefined}
     */
    this.unbindAll = function() {
      /** @type {number} */
      var a = 0;
      for (;a < self.events.length;a++) {
        var e = self.events[a];
        if (e.q) {
          e.e.unbind(e.n, e.f);
        } else {
          self._unbind(e.e, e.n, e.f, e.b);
        }
      }
    };
    /**
     * @return {?}
     */
    this.showRail = function() {
      return 0 == self.page.maxh || (!self.ispage && "none" == self.win.css("display") || (self.visibility = true, self.rail.visibility = true, self.rail.css("display", "block"))), self;
    };
    /**
     * @return {?}
     */
    this.showRailHr = function() {
      return self.railh ? (0 == self.page.maxw || (!self.ispage && "none" == self.win.css("display") || (self.railh.visibility = true, self.railh.css("display", "block"))), self) : self;
    };
    /**
     * @return {?}
     */
    this.hideRail = function() {
      return self.visibility = false, self.rail.visibility = false, self.rail.css("display", "none"), self;
    };
    /**
     * @return {?}
     */
    this.hideRailHr = function() {
      return self.railh ? (self.railh.visibility = false, self.railh.css("display", "none"), self) : self;
    };
    /**
     * @return {?}
     */
    this.show = function() {
      return self.hidden = false, self.railslocked = false, self.showRail().showRailHr();
    };
    /**
     * @return {?}
     */
    this.hide = function() {
      return self.hidden = true, self.railslocked = true, self.hideRail().hideRailHr();
    };
    /**
     * @return {?}
     */
    this.toggle = function() {
      return self.hidden ? self.show() : self.hide();
    };
    /**
     * @return {undefined}
     */
    this.remove = function() {
      self.stop();
      if (self.cursortimeout) {
        clearTimeout(self.cursortimeout);
      }
      var i;
      for (i in self.delaylist) {
        if (self.delaylist[i]) {
          debug(self.delaylist[i].h);
        }
      }
      self.doZoomOut();
      self.unbindAll();
      if (that.isie9) {
        self.win[0].detachEvent("onpropertychange", self.onAttributeChange);
      }
      if (false !== self.observer) {
        self.observer.disconnect();
      }
      if (false !== self.observerremover) {
        self.observerremover.disconnect();
      }
      if (false !== self.observerbody) {
        self.observerbody.disconnect();
      }
      /** @type {null} */
      self.events = null;
      if (self.cursor) {
        self.cursor.remove();
      }
      if (self.cursorh) {
        self.cursorh.remove();
      }
      if (self.rail) {
        self.rail.remove();
      }
      if (self.railh) {
        self.railh.remove();
      }
      if (self.zoom) {
        self.zoom.remove();
      }
      /** @type {number} */
      i = 0;
      for (;i < self.saved.css.length;i++) {
        var set = self.saved.css[i];
        set[0].css(set[1], void 0 === set[2] ? "" : set[2]);
      }
      /** @type {boolean} */
      self.saved = false;
      self.me.data("__nicescroll", "");
      var all = $.nicescroll;
      all.each(function(index) {
        if (this && this.id === self.id) {
          delete all[index];
          /** @type {number} */
          var k = ++index;
          for (;k < all.length;k++, index++) {
            all[index] = all[k];
          }
          all.length--;
          if (all.length) {
            delete all[all.length];
          }
        }
      });
      var callbackSymbol;
      for (callbackSymbol in self) {
        /** @type {null} */
        self[callbackSymbol] = null;
        delete self[callbackSymbol];
      }
      /** @type {null} */
      self = null;
    };
    /**
     * @param {boolean} dataAndEvents
     * @return {?}
     */
    this.scrollstart = function(dataAndEvents) {
      return this.onscrollstart = dataAndEvents, self;
    };
    /**
     * @param {boolean} dataAndEvents
     * @return {?}
     */
    this.scrollend = function(dataAndEvents) {
      return this.onscrollend = dataAndEvents, self;
    };
    /**
     * @param {boolean} dataAndEvents
     * @return {?}
     */
    this.scrollcancel = function(dataAndEvents) {
      return this.onscrollcancel = dataAndEvents, self;
    };
    /**
     * @param {boolean} lens
     * @return {?}
     */
    this.zoomin = function(lens) {
      return this.onzoomin = lens, self;
    };
    /**
     * @param {boolean} lens
     * @return {?}
     */
    this.zoomout = function(lens) {
      return this.onzoomout = lens, self;
    };
    /**
     * @param {Object} el
     * @return {?}
     */
    this.isScrollable = function(el) {
      if (el = el.target ? el.target : el, "OPTION" == el.nodeName) {
        return true;
      }
      for (;el && (1 == el.nodeType && !/^BODY|HTML/.test(el.nodeName));) {
        var j = $(el);
        j = j.css("overflowY") || (j.css("overflowX") || (j.css("overflow") || ""));
        if (/scroll|auto/.test(j)) {
          return el.clientHeight != el.scrollHeight;
        }
        el = !!el.parentNode && el.parentNode;
      }
      return false;
    };
    /**
     * @param {Object} elem
     * @return {?}
     */
    this.getViewport = function(elem) {
      elem = !(!elem || !elem.parentNode) && elem.parentNode;
      for (;elem && (1 == elem.nodeType && !/^BODY|HTML/.test(elem.nodeName));) {
        var el = $(elem);
        if (/fixed|absolute/.test(el.css("position"))) {
          return el;
        }
        var nType = el.css("overflowY") || (el.css("overflowX") || (el.css("overflow") || ""));
        if (/scroll|auto/.test(nType) && elem.clientHeight != elem.scrollHeight || 0 < el.getNiceScroll().length) {
          return el;
        }
        elem = !!elem.parentNode && elem.parentNode;
      }
      return false;
    };
    /**
     * @return {undefined}
     */
    this.triggerScrollEnd = function() {
      if (self.onscrollend) {
        var moveX = self.getScrollLeft();
        var moveY = self.getScrollTop();
        self.onscrollend.call(self, {
          type : "scrollend",
          current : {
            x : moveX,
            y : moveY
          },
          end : {
            x : moveX,
            y : moveY
          }
        });
      }
    };
    /**
     * @param {Object} event
     * @return {?}
     */
    this.onmousewheel = function(event) {
      if (!self.wheelprevented) {
        if (self.railslocked) {
          return self.debounced("checkunlock", self.resize, 250), true;
        }
        if (self.rail.drag) {
          return self.cancelEvent(event);
        }
        if ("auto" == self.opt.oneaxismousemode && (0 != event.deltaX && (self.opt.oneaxismousemode = false)), self.opt.oneaxismousemode && (0 == event.deltaX && !self.rail.scrollable)) {
          return!self.railh || (!self.railh.scrollable || self.onmousewheelhr(event));
        }
        /** @type {number} */
        var compassResult = +new Date;
        /** @type {boolean} */
        var r20 = false;
        return self.opt.preservenativescrolling && (self.checkarea + 600 < compassResult && (self.nativescrollingarea = self.isScrollable(event), r20 = true)), self.checkarea = compassResult, !!self.nativescrollingarea || ((event = drag(event, false, r20)) && (self.checkarea = 0), event);
      }
    };
    /**
     * @param {Object} e
     * @return {?}
     */
    this.onmousewheelhr = function(e) {
      if (!self.wheelprevented) {
        if (self.railslocked || !self.railh.scrollable) {
          return true;
        }
        if (self.rail.drag) {
          return self.cancelEvent(e);
        }
        /** @type {number} */
        var compassResult = +new Date;
        /** @type {boolean} */
        var r20 = false;
        return self.opt.preservenativescrolling && (self.checkarea + 600 < compassResult && (self.nativescrollingarea = self.isScrollable(e), r20 = true)), self.checkarea = compassResult, !!self.nativescrollingarea || (self.railslocked ? self.cancelEvent(e) : drag(e, true, r20));
      }
    };
    /**
     * @return {?}
     */
    this.stop = function() {
      return self.cancelScroll(), self.scrollmon && self.scrollmon.stop(), self.cursorfreezed = false, self.scroll.y = Math.round(self.getScrollTop() * (1 / self.scrollratio.y)), self.noticeCursor(), self;
    };
    /**
     * @param {number} speed
     * @return {?}
     */
    this.getTransitionSpeed = function(speed) {
      return speed = Math.min(Math.round(10 * self.opt.scrollspeed), Math.round(speed / 20 * self.opt.scrollspeed)), 20 < speed ? speed : 0;
    };
    if (self.opt.smoothscroll) {
      if (self.ishwscroll && (that.hastransition && (self.opt.usetransition && self.opt.smoothscroll))) {
        /**
         * @param {number} speed
         * @param {boolean} dataAndEvents
         * @return {?}
         */
        this.prepareTransition = function(speed, dataAndEvents) {
          var parsed = dataAndEvents ? 20 < speed ? speed : 0 : self.getTransitionSpeed(speed);
          /** @type {string} */
          var val = parsed ? that.prefixstyle + "transform " + parsed + "ms ease-out" : "";
          return self.lasttransitionstyle && self.lasttransitionstyle == val || (self.lasttransitionstyle = val, self.doc.css(that.transitionstyle, val)), parsed;
        };
        /**
         * @param {number} opt_attributes
         * @param {number} millis
         * @return {undefined}
         */
        this.doScrollLeft = function(opt_attributes, millis) {
          var g = self.scrollrunning ? self.newscrolly : self.getScrollTop();
          self.doScrollPos(opt_attributes, g, millis);
        };
        /**
         * @param {number} opt_attributes
         * @param {number} millis
         * @return {undefined}
         */
        this.doScrollTop = function(opt_attributes, millis) {
          var y = self.scrollrunning ? self.newscrollx : self.getScrollLeft();
          self.doScrollPos(y, opt_attributes, millis);
        };
        /**
         * @param {string} val
         * @param {number} y
         * @param {number} millis
         * @return {?}
         */
        this.doScrollPos = function(val, y, millis) {
          var startY = self.getScrollTop();
          var x = self.getScrollLeft();
          return(0 > (self.newscrolly - startY) * (y - startY) || 0 > (self.newscrollx - x) * (val - x)) && self.cancelScroll(), 0 == self.opt.bouncescroll && (0 > y ? y = 0 : y > self.page.maxh && (y = self.page.maxh), 0 > val ? val = 0 : val > self.page.maxw && (val = self.page.maxw)), (!self.scrollrunning || (val != self.newscrollx || y != self.newscrolly)) && (self.newscrolly = y, self.newscrollx = val, self.newscrollspeed = millis || false, !self.timer && void(self.timer = setTimeout(function() {
            var pos_y = self.getScrollTop();
            var mean = self.getScrollLeft();
            /** @type {number} */
            var speed = Math.round(Math.sqrt(Math.pow(val - mean, 2) + Math.pow(y - pos_y, 2)));
            speed = self.newscrollspeed && 1 < self.newscrollspeed ? self.newscrollspeed : self.getTransitionSpeed(speed);
            if (self.newscrollspeed) {
              if (1 >= self.newscrollspeed) {
                speed *= self.newscrollspeed;
              }
            }
            self.prepareTransition(speed, true);
            if (self.timerscroll) {
              if (self.timerscroll.tm) {
                clearInterval(self.timerscroll.tm);
              }
            }
            if (0 < speed) {
              if (!self.scrollrunning) {
                if (self.onscrollstart) {
                  self.onscrollstart.call(self, {
                    type : "scrollstart",
                    current : {
                      x : mean,
                      y : pos_y
                    },
                    request : {
                      x : val,
                      y : y
                    },
                    end : {
                      x : self.newscrollx,
                      y : self.newscrolly
                    },
                    speed : speed
                  });
                }
              }
              if (that.transitionend) {
                if (!self.scrollendtrapped) {
                  /** @type {boolean} */
                  self.scrollendtrapped = true;
                  self.bind(self.doc, that.transitionend, self.onScrollTransitionEnd, false);
                }
              } else {
                if (self.scrollendtrapped) {
                  clearTimeout(self.scrollendtrapped);
                }
                /** @type {number} */
                self.scrollendtrapped = setTimeout(self.onScrollTransitionEnd, speed);
              }
              self.timerscroll = {
                bz : new Bullet(pos_y, self.newscrolly, speed, 0, 0, 0.58, 1),
                bh : new Bullet(mean, self.newscrollx, speed, 0, 0, 0.58, 1)
              };
              if (!self.cursorfreezed) {
                /** @type {number} */
                self.timerscroll.tm = setInterval(function() {
                  self.showCursor(self.getScrollTop(), self.getScrollLeft());
                }, 60);
              }
            }
            self.synched("doScroll-set", function() {
              /** @type {number} */
              self.timer = 0;
              if (self.scrollendtrapped) {
                /** @type {boolean} */
                self.scrollrunning = true;
              }
              self.setScrollTop(self.newscrolly);
              self.setScrollLeft(self.newscrollx);
              if (!self.scrollendtrapped) {
                self.onScrollTransitionEnd();
              }
            });
          }, 50)));
        };
        /**
         * @return {?}
         */
        this.cancelScroll = function() {
          if (!self.scrollendtrapped) {
            return true;
          }
          var offset = self.getScrollTop();
          var y = self.getScrollLeft();
          return self.scrollrunning = false, that.transitionend || clearTimeout(that.transitionend), self.scrollendtrapped = false, self._unbind(self.doc[0], that.transitionend, self.onScrollTransitionEnd), self.prepareTransition(0), self.setScrollTop(offset), self.railh && self.setScrollLeft(y), self.timerscroll && (self.timerscroll.tm && clearInterval(self.timerscroll.tm)), self.timerscroll = false, self.cursorfreezed = false, self.showCursor(offset, y), self;
        };
        /**
         * @return {?}
         */
        this.onScrollTransitionEnd = function() {
          if (self.scrollendtrapped) {
            self._unbind(self.doc[0], that.transitionend, self.onScrollTransitionEnd);
          }
          /** @type {boolean} */
          self.scrollendtrapped = false;
          self.prepareTransition(0);
          if (self.timerscroll) {
            if (self.timerscroll.tm) {
              clearInterval(self.timerscroll.tm);
            }
          }
          /** @type {boolean} */
          self.timerscroll = false;
          var offset = self.getScrollTop();
          var y = self.getScrollLeft();
          return self.setScrollTop(offset), self.railh && self.setScrollLeft(y), self.noticeCursor(false, offset, y), self.cursorfreezed = false, 0 > offset ? offset = 0 : offset > self.page.maxh && (offset = self.page.maxh), 0 > y ? y = 0 : y > self.page.maxw && (y = self.page.maxw), offset != self.newscrolly || y != self.newscrollx ? self.doScrollPos(y, offset, self.opt.snapbackspeed) : (self.onscrollend && (self.scrollrunning && self.triggerScrollEnd()), void(self.scrollrunning = false));
        };
      } else {
        /**
         * @param {number} opt_attributes
         * @param {number} millis
         * @return {undefined}
         */
        this.doScrollLeft = function(opt_attributes, millis) {
          var g = self.scrollrunning ? self.newscrolly : self.getScrollTop();
          self.doScrollPos(opt_attributes, g, millis);
        };
        /**
         * @param {number} opt_attributes
         * @param {number} millis
         * @return {undefined}
         */
        this.doScrollTop = function(opt_attributes, millis) {
          var y = self.scrollrunning ? self.newscrollx : self.getScrollLeft();
          self.doScrollPos(y, opt_attributes, millis);
        };
        /**
         * @param {number} val
         * @param {number} y
         * @param {number} millis
         * @return {?}
         */
        this.doScrollPos = function(val, y, millis) {
          /**
           * @return {?}
           */
          function loop() {
            if (self.cancelAnimationFrame) {
              return true;
            }
            if (self.scrollrunning = true, tick = 1 - tick) {
              return self.timer = fn(loop) || 1;
            }
            var min;
            var y;
            /** @type {number} */
            var a = 0;
            var x = y = self.getScrollTop();
            if (self.dst.ay) {
              x = self.bzscroll ? self.dst.py + self.bzscroll.getNow() * self.dst.ay : self.newscrolly;
              /** @type {number} */
              min = x - y;
              if (0 > min && x < self.newscrolly || 0 < min && x > self.newscrolly) {
                x = self.newscrolly;
              }
              self.setScrollTop(x);
              if (x == self.newscrolly) {
                /** @type {number} */
                a = 1;
              }
            } else {
              /** @type {number} */
              a = 1;
            }
            y = min = self.getScrollLeft();
            if (self.dst.ax) {
              y = self.bzscroll ? self.dst.px + self.bzscroll.getNow() * self.dst.ax : self.newscrollx;
              /** @type {number} */
              min = y - min;
              if (0 > min && y < self.newscrollx || 0 < min && y > self.newscrollx) {
                y = self.newscrollx;
              }
              self.setScrollLeft(y);
              if (y == self.newscrollx) {
                a += 1;
              }
            } else {
              a += 1;
            }
            if (2 == a) {
              /** @type {number} */
              self.timer = 0;
              /** @type {boolean} */
              self.cursorfreezed = false;
              /** @type {boolean} */
              self.bzscroll = false;
              /** @type {boolean} */
              self.scrollrunning = false;
              if (0 > x) {
                /** @type {number} */
                x = 0;
              } else {
                if (x > self.page.maxh) {
                  /** @type {number} */
                  x = Math.max(0, self.page.maxh);
                }
              }
              if (0 > y) {
                /** @type {number} */
                y = 0;
              } else {
                if (y > self.page.maxw) {
                  y = self.page.maxw;
                }
              }
              if (y != self.newscrollx || x != self.newscrolly) {
                self.doScrollPos(y, x);
              } else {
                if (self.onscrollend) {
                  self.triggerScrollEnd();
                }
              }
            } else {
              self.timer = fn(loop) || 1;
            }
          }
          if (y = void 0 === y || false === y ? self.getScrollTop(true) : y, self.timer && (self.newscrolly == y && self.newscrollx == val)) {
            return true;
          }
          if (self.timer) {
            debug(self.timer);
          }
          /** @type {number} */
          self.timer = 0;
          var startY = self.getScrollTop();
          var i = self.getScrollLeft();
          if (0 > (self.newscrolly - startY) * (y - startY) || 0 > (self.newscrollx - i) * (val - i)) {
            self.cancelScroll();
          }
          /** @type {number} */
          self.newscrolly = y;
          /** @type {number} */
          self.newscrollx = val;
          if (!(self.bouncescroll && self.rail.visibility)) {
            if (0 > self.newscrolly) {
              /** @type {number} */
              self.newscrolly = 0;
            } else {
              if (self.newscrolly > self.page.maxh) {
                self.newscrolly = self.page.maxh;
              }
            }
          }
          if (!(self.bouncescroll && self.railh.visibility)) {
            if (0 > self.newscrollx) {
              /** @type {number} */
              self.newscrollx = 0;
            } else {
              if (self.newscrollx > self.page.maxw) {
                self.newscrollx = self.page.maxw;
              }
            }
          }
          self.dst = {};
          /** @type {number} */
          self.dst.x = val - i;
          /** @type {number} */
          self.dst.y = y - startY;
          self.dst.px = i;
          self.dst.py = startY;
          /** @type {number} */
          var speed = Math.round(Math.sqrt(Math.pow(self.dst.x, 2) + Math.pow(self.dst.y, 2)));
          /** @type {number} */
          self.dst.ax = self.dst.x / speed;
          /** @type {number} */
          self.dst.ay = self.dst.y / speed;
          /** @type {number} */
          var foundI = 0;
          /** @type {number} */
          var ret = speed;
          if (0 == self.dst.x ? (foundI = startY, ret = y, self.dst.ay = 1, self.dst.py = 0) : 0 == self.dst.y && (foundI = i, ret = val, self.dst.ax = 1, self.dst.px = 0), speed = self.getTransitionSpeed(speed), millis && (1 >= millis && (speed *= millis)), self.bzscroll = 0 < speed && (self.bzscroll ? self.bzscroll.update(ret, speed) : new Bullet(foundI, ret, speed, 0, 1, 0, 1)), !self.timer) {
            if (startY == self.page.maxh && y >= self.page.maxh || i == self.page.maxw && val >= self.page.maxw) {
              self.checkContentSize();
            }
            /** @type {number} */
            var tick = 1;
            /** @type {boolean} */
            self.cancelAnimationFrame = false;
            /** @type {number} */
            self.timer = 1;
            if (self.onscrollstart) {
              if (!self.scrollrunning) {
                self.onscrollstart.call(self, {
                  type : "scrollstart",
                  current : {
                    x : i,
                    y : startY
                  },
                  request : {
                    x : val,
                    y : y
                  },
                  end : {
                    x : self.newscrollx,
                    y : self.newscrolly
                  },
                  speed : speed
                });
              }
            }
            loop();
            if (startY == self.page.maxh && y >= startY || i == self.page.maxw && val >= i) {
              self.checkContentSize();
            }
            self.noticeCursor();
          }
        };
        /**
         * @return {?}
         */
        this.cancelScroll = function() {
          return self.timer && debug(self.timer), self.timer = 0, self.bzscroll = false, self.scrollrunning = false, self;
        };
      }
    } else {
      /**
       * @param {number} opt_attributes
       * @param {number} millis
       * @return {undefined}
       */
      this.doScrollLeft = function(opt_attributes, millis) {
        var g = self.getScrollTop();
        self.doScrollPos(opt_attributes, g, millis);
      };
      /**
       * @param {number} opt_attributes
       * @param {number} millis
       * @return {undefined}
       */
      this.doScrollTop = function(opt_attributes, millis) {
        var y = self.getScrollLeft();
        self.doScrollPos(y, opt_attributes, millis);
      };
      /**
       * @param {number} v11
       * @param {number} x
       * @param {number} millis
       * @return {undefined}
       */
      this.doScrollPos = function(v11, x, millis) {
        var y = v11 > self.page.maxw ? self.page.maxw : v11;
        if (0 > y) {
          /** @type {number} */
          y = 0;
        }
        var b = x > self.page.maxh ? self.page.maxh : x;
        if (0 > b) {
          /** @type {number} */
          b = 0;
        }
        self.synched("scroll", function() {
          self.setScrollTop(b);
          self.setScrollLeft(y);
        });
      };
      /**
       * @return {undefined}
       */
      this.cancelScroll = function() {
      };
    }
    /**
     * @param {number} opt_attributes
     * @param {boolean} m
     * @return {?}
     */
    this.doScrollBy = function(opt_attributes, m) {
      /** @type {number} */
      var attributes = 0;
      /** @type {number} */
      attributes = m ? Math.floor((self.scroll.y - opt_attributes) * self.scrollratio.y) : (self.timer ? self.newscrolly : self.getScrollTop(true)) - opt_attributes;
      if (self.bouncescroll) {
        /** @type {number} */
        var maxh = Math.round(self.view.h / 2);
        if (attributes < -maxh) {
          /** @type {number} */
          attributes = -maxh;
        } else {
          if (attributes > self.page.maxh + maxh) {
            attributes = self.page.maxh + maxh;
          }
        }
      }
      return self.cursorfreezed = false, maxh = self.getScrollTop(true), 0 > attributes && 0 >= maxh ? self.noticeCursor() : attributes > self.page.maxh && maxh >= self.page.maxh ? (self.checkContentSize(), self.noticeCursor()) : void self.doScrollTop(attributes);
    };
    /**
     * @param {number} opt_attributes
     * @param {boolean} m
     * @return {?}
     */
    this.doScrollLeftBy = function(opt_attributes, m) {
      /** @type {number} */
      var attributes = 0;
      /** @type {number} */
      attributes = m ? Math.floor((self.scroll.x - opt_attributes) * self.scrollratio.x) : (self.timer ? self.newscrollx : self.getScrollLeft(true)) - opt_attributes;
      if (self.bouncescroll) {
        /** @type {number} */
        var maxw = Math.round(self.view.w / 2);
        if (attributes < -maxw) {
          /** @type {number} */
          attributes = -maxw;
        } else {
          if (attributes > self.page.maxw + maxw) {
            attributes = self.page.maxw + maxw;
          }
        }
      }
      return self.cursorfreezed = false, maxw = self.getScrollLeft(true), 0 > attributes && 0 >= maxw || attributes > self.page.maxw && maxw >= self.page.maxw ? self.noticeCursor() : void self.doScrollLeft(attributes);
    };
    /**
     * @param {number} attributes
     * @param {?} x
     * @return {undefined}
     */
    this.doScrollTo = function(attributes, x) {
      /** @type {boolean} */
      self.cursorfreezed = false;
      self.doScrollTop(attributes);
    };
    /**
     * @return {undefined}
     */
    this.checkContentSize = function() {
      var size = self.getContentSize();
      if (!(size.h == self.page.h && size.w == self.page.w)) {
        self.resize(false, size);
      }
    };
    /**
     * @param {?} e
     * @return {undefined}
     */
    self.onscroll = function(e) {
      if (!self.rail.drag) {
        if (!self.cursorfreezed) {
          self.synched("scroll", function() {
            /** @type {number} */
            self.scroll.y = Math.round(self.getScrollTop() * (1 / self.scrollratio.y));
            if (self.railh) {
              /** @type {number} */
              self.scroll.x = Math.round(self.getScrollLeft() * (1 / self.scrollratio.x));
            }
            self.noticeCursor();
          });
        }
      }
    };
    self.bind(self.docscroll, "scroll", self.onscroll);
    /**
     * @param {Object} arg
     * @return {?}
     */
    this.doZoomIn = function(arg) {
      if (!self.zoomactive) {
        /** @type {boolean} */
        self.zoomactive = true;
        self.zoomrestore = {
          style : {}
        };
        var i;
        /** @type {Array.<string>} */
        var path = "position top left zIndex backgroundColor marginTop marginBottom marginLeft marginRight".split(" ");
        var mStyle = self.win[0].style;
        for (i in path) {
          /** @type {string} */
          var prop = path[i];
          self.zoomrestore.style[prop] = void 0 !== mStyle[prop] ? mStyle[prop] : "";
        }
        return self.zoomrestore.style.width = self.win.css("width"), self.zoomrestore.style.height = self.win.css("height"), self.zoomrestore.padding = {
          w : self.win.outerWidth() - self.win.width(),
          h : self.win.outerHeight() - self.win.height()
        }, that.isios4 && (self.zoomrestore.scrollTop = $(window).scrollTop(), $(window).scrollTop(0)), self.win.css({
          position : that.isios4 ? "absolute" : "fixed",
          top : 0,
          left : 0,
          zIndex : to + 100,
          margin : 0
        }), path = self.win.css("backgroundColor"), ("" == path || /transparent|rgba\(0, 0, 0, 0\)|rgba\(0,0,0,0\)/.test(path)) && self.win.css("backgroundColor", "#fff"), self.rail.css({
          zIndex : to + 101
        }), self.zoom.css({
          zIndex : to + 102
        }), self.zoom.css("backgroundPosition", "0px -18px"), self.resizeZoom(), self.onzoomin && self.onzoomin.call(self), self.cancelEvent(arg);
      }
    };
    /**
     * @param {Object} arg
     * @return {?}
     */
    this.doZoomOut = function(arg) {
      if (self.zoomactive) {
        return self.zoomactive = false, self.win.css("margin", ""), self.win.css(self.zoomrestore.style), that.isios4 && $(window).scrollTop(self.zoomrestore.scrollTop), self.rail.css({
          "z-index" : self.zindex
        }), self.zoom.css({
          "z-index" : self.zindex
        }), self.zoomrestore = false, self.zoom.css("backgroundPosition", "0px 0px"), self.onResize(), self.onzoomout && self.onzoomout.call(self), self.cancelEvent(arg);
      }
    };
    /**
     * @param {Object} msg
     * @return {?}
     */
    this.doZoom = function(msg) {
      return self.zoomactive ? self.doZoomOut(msg) : self.doZoomIn(msg);
    };
    /**
     * @return {undefined}
     */
    this.resizeZoom = function() {
      if (self.zoomactive) {
        var olen = self.getScrollTop();
        self.win.css({
          width : $(window).width() - self.zoomrestore.padding.w + "px",
          height : $(window).height() - self.zoomrestore.padding.h + "px"
        });
        self.onResize();
        self.setScrollTop(Math.min(self.page.maxh, olen));
      }
    };
    this.init();
    $.nicescroll.push(this);
  };
  /**
   * @param {string} mL
   * @return {undefined}
   */
  var set = function(mL) {
    var self = this;
    /** @type {string} */
    this.nc = mL;
    /** @type {number} */
    this.steptime = this.lasttime = this.speedy = this.speedx = this.lasty = this.lastx = 0;
    /** @type {boolean} */
    this.snapy = this.snapx = false;
    /** @type {number} */
    this.demuly = this.demulx = 0;
    /** @type {number} */
    this.lastscrolly = this.lastscrollx = -1;
    /** @type {number} */
    this.timer = this.chky = this.chkx = 0;
    /**
     * @return {?}
     */
    this.time = function() {
      return+new Date;
    };
    /**
     * @param {number} position
     * @param {number} height
     * @return {undefined}
     */
    this.reset = function(position, height) {
      self.stop();
      var compassResult = self.time();
      /** @type {number} */
      self.steptime = 0;
      self.lasttime = compassResult;
      /** @type {number} */
      self.speedx = 0;
      /** @type {number} */
      self.speedy = 0;
      /** @type {number} */
      self.lastx = position;
      /** @type {number} */
      self.lasty = height;
      /** @type {number} */
      self.lastscrollx = -1;
      /** @type {number} */
      self.lastscrolly = -1;
    };
    /**
     * @param {number} value
     * @param {number} val
     * @return {undefined}
     */
    this.update = function(value, val) {
      var size = self.time();
      /** @type {number} */
      self.steptime = size - self.lasttime;
      self.lasttime = size;
      /** @type {number} */
      size = val - self.lasty;
      /** @type {number} */
      var left = value - self.lastx;
      var i = self.nc.getScrollTop();
      var right = self.nc.getScrollLeft();
      i = i + size;
      right = right + left;
      /** @type {boolean} */
      self.snapx = 0 > right || right > self.nc.page.maxw;
      /** @type {boolean} */
      self.snapy = 0 > i || i > self.nc.page.maxh;
      /** @type {number} */
      self.speedx = left;
      /** @type {number} */
      self.speedy = size;
      /** @type {number} */
      self.lastx = value;
      /** @type {number} */
      self.lasty = val;
    };
    /**
     * @return {undefined}
     */
    this.stop = function() {
      self.nc.unsynched("domomentum2d");
      if (self.timer) {
        clearTimeout(self.timer);
      }
      /** @type {number} */
      self.timer = 0;
      /** @type {number} */
      self.lastscrollx = -1;
      /** @type {number} */
      self.lastscrolly = -1;
    };
    /**
     * @param {number} y
     * @param {number} offset
     * @return {undefined}
     */
    this.doSnapy = function(y, offset) {
      /** @type {boolean} */
      var d = false;
      if (0 > offset) {
        /** @type {number} */
        offset = 0;
        /** @type {boolean} */
        d = true;
      } else {
        if (offset > self.nc.page.maxh) {
          offset = self.nc.page.maxh;
          /** @type {boolean} */
          d = true;
        }
      }
      if (0 > y) {
        /** @type {number} */
        y = 0;
        /** @type {boolean} */
        d = true;
      } else {
        if (y > self.nc.page.maxw) {
          y = self.nc.page.maxw;
          /** @type {boolean} */
          d = true;
        }
      }
      if (d) {
        self.nc.doScrollPos(y, offset, self.nc.opt.snapbackspeed);
      } else {
        self.nc.triggerScrollEnd();
      }
    };
    /**
     * @param {number} i
     * @return {undefined}
     */
    this.doMomentum = function(i) {
      var a = self.time();
      var b = i ? a + i : self.lasttime;
      i = self.nc.getScrollLeft();
      var value = self.nc.getScrollTop();
      var max = self.nc.page.maxh;
      var pw = self.nc.page.maxw;
      if (self.speedx = 0 < pw ? Math.min(60, self.speedx) : 0, self.speedy = 0 < max ? Math.min(60, self.speedy) : 0, b = b && 60 >= a - b, (0 > value || (value > max || (0 > i || i > pw))) && (b = false), i = !(!self.speedx || !b) && self.speedx, self.speedy && (b && self.speedy) || i) {
        /** @type {number} */
        var duration = Math.max(16, self.steptime);
        if (50 < duration) {
          /** @type {number} */
          i = duration / 50;
          self.speedx *= i;
          self.speedy *= i;
          /** @type {number} */
          duration = 50;
        }
        /** @type {number} */
        self.demulxy = 0;
        self.lastscrollx = self.nc.getScrollLeft();
        self.chkx = self.lastscrollx;
        self.lastscrolly = self.nc.getScrollTop();
        self.chky = self.lastscrolly;
        var y = self.lastscrollx;
        var offset = self.lastscrolly;
        /**
         * @return {undefined}
         */
        var step = function() {
          /** @type {number} */
          var context = 600 < self.time() - a ? 0.04 : 0.02;
          if (self.speedx) {
            if (y = Math.floor(self.lastscrollx - self.speedx * (1 - self.demulxy)), self.lastscrollx = y, 0 > y || y > pw) {
              /** @type {number} */
              context = 0.1;
            }
          }
          if (self.speedy) {
            if (offset = Math.floor(self.lastscrolly - self.speedy * (1 - self.demulxy)), self.lastscrolly = offset, 0 > offset || offset > max) {
              /** @type {number} */
              context = 0.1;
            }
          }
          /** @type {number} */
          self.demulxy = Math.min(1, self.demulxy + context);
          self.nc.synched("domomentum2d", function() {
            if (self.speedx) {
              self.nc.getScrollLeft();
              self.chkx = y;
              self.nc.setScrollLeft(y);
            }
            if (self.speedy) {
              self.nc.getScrollTop();
              self.chky = offset;
              self.nc.setScrollTop(offset);
            }
            if (!self.timer) {
              self.nc.hideCursor();
              self.doSnapy(y, offset);
            }
          });
          if (1 > self.demulxy) {
            /** @type {number} */
            self.timer = setTimeout(step, duration);
          } else {
            self.stop();
            self.nc.hideCursor();
            self.doSnapy(y, offset);
          }
        };
        step();
      } else {
        self.doSnapy(self.nc.getScrollLeft(), self.nc.getScrollTop());
      }
    };
  };
  /** @type {function (Object): ?} */
  var callback = $.fn.scrollTop;
  $.cssHooks.pageYOffset = {
    /**
     * @param {string} name
     * @param {boolean} s
     * @param {?} opt_default
     * @return {?}
     */
    get : function(name, s, opt_default) {
      return(s = $.data(name, "__nicescroll") || false) && s.ishwscroll ? s.getScrollTop() : callback.call(name);
    },
    /**
     * @param {string} elem
     * @param {?} value
     * @return {?}
     */
    set : function(elem, value) {
      var self = $.data(elem, "__nicescroll") || false;
      return self && self.ishwscroll ? self.setScrollTop(parseInt(value)) : callback.call(elem, value), this;
    }
  };
  /**
   * @param {Object} lab
   * @return {?}
   */
  $.fn.scrollTop = function(lab) {
    if (void 0 === lab) {
      var s = !!this[0] && ($.data(this[0], "__nicescroll") || false);
      return s && s.ishwscroll ? s.getScrollTop() : callback.call(this);
    }
    return this.each(function() {
      var s = $.data(this, "__nicescroll") || false;
      if (s && s.ishwscroll) {
        s.setScrollTop(parseInt(lab));
      } else {
        callback.call($(this), lab);
      }
    });
  };
  /** @type {function (Object): ?} */
  var handler = $.fn.scrollLeft;
  $.cssHooks.pageXOffset = {
    /**
     * @param {string} name
     * @param {boolean} elem
     * @param {?} opt_default
     * @return {?}
     */
    get : function(name, elem, opt_default) {
      return(elem = $.data(name, "__nicescroll") || false) && elem.ishwscroll ? elem.getScrollLeft() : handler.call(name);
    },
    /**
     * @param {string} elem
     * @param {?} val
     * @return {?}
     */
    set : function(elem, val) {
      var path = $.data(elem, "__nicescroll") || false;
      return path && path.ishwscroll ? path.setScrollLeft(parseInt(val)) : handler.call(elem, val), this;
    }
  };
  /**
   * @param {Object} lab
   * @return {?}
   */
  $.fn.scrollLeft = function(lab) {
    if (void 0 === lab) {
      var that = !!this[0] && ($.data(this[0], "__nicescroll") || false);
      return that && that.ishwscroll ? that.getScrollLeft() : handler.call(this);
    }
    return this.each(function() {
      var indexes = $.data(this, "__nicescroll") || false;
      if (indexes && indexes.ishwscroll) {
        indexes.setScrollLeft(parseInt(lab));
      } else {
        handler.call($(this), lab);
      }
    });
  };
  /**
   * @param {Array} parent
   * @return {?}
   */
  var create = function(parent) {
    var attributes = this;
    if (this.length = 0, this.name = "nicescrollarray", this.each = function(opt_attributes) {
      return $.each(attributes, opt_attributes), attributes;
    }, this.push = function(value) {
      attributes[attributes.length] = value;
      attributes.length++;
    }, this.eq = function(index) {
      return attributes[index];
    }, parent) {
      /** @type {number} */
      var j = 0;
      for (;j < parent.length;j++) {
        var obj = $.data(parent[j], "__nicescroll") || false;
        if (obj) {
          this[this.length] = obj;
          this.length++;
        }
      }
    }
    return this;
  };
  !function(deepDataAndEvents, codeSegments, reduceFunc) {
    /** @type {number} */
    var i = 0;
    for (;i < codeSegments.length;i++) {
      reduceFunc(deepDataAndEvents, codeSegments[i]);
    }
  }(create.prototype, "show hide toggle onResize resize remove stop doScrollPos".split(" "), function(deepDataAndEvents, syncFnName) {
    /**
     * @return {?}
     */
    deepDataAndEvents[syncFnName] = function() {
      /** @type {Arguments} */
      var args = arguments;
      return this.each(function() {
        this[syncFnName].apply(this, args);
      });
    };
  });
  /**
   * @param {number} r
   * @return {?}
   */
  $.fn.getNiceScroll = function(r) {
    return void 0 === r ? new create(this) : this[r] && $.data(this[r], "__nicescroll") || false;
  };
  /**
   * @param {string} optgroup
   * @return {?}
   */
  $.expr[":"].nicescroll = function(optgroup) {
    return void 0 !== $.data(optgroup, "__nicescroll");
  };
  /**
   * @param {Object} content
   * @param {Object} attributes
   * @return {?}
   */
  $.fn.niceScroll = function(content, attributes) {
    if (!(void 0 !== attributes)) {
      if (!("object" != typeof content)) {
        if (!("jquery" in content)) {
          /** @type {Object} */
          attributes = content;
          /** @type {boolean} */
          content = false;
        }
      }
    }
    attributes = $.extend({}, attributes);
    var objectProperties = new create;
    if (void 0 === attributes) {
      attributes = {};
    }
    if (content) {
      attributes.doc = $(content);
      attributes.win = $(this);
    }
    /** @type {boolean} */
    var _cc = !("doc" in attributes);
    return _cc || ("win" in attributes || (attributes.win = $(this))), this.each(function() {
      var key = $(this).data("__nicescroll") || false;
      if (!key) {
        attributes.doc = _cc ? $(this) : attributes.doc;
        key = new init(attributes, $(this));
        $(this).data("__nicescroll", key);
      }
      objectProperties.push(key);
    }), 1 == objectProperties.length ? objectProperties[0] : objectProperties;
  };
  window.NiceScroll = {
    /**
     * @return {?}
     */
    getjQuery : function() {
      return $;
    }
  };
  if (!$.nicescroll) {
    $.nicescroll = new create;
    $.nicescroll.options = attributes;
  }
}), !function(self, doc, arg) {
  !function e(t, n, r) {
    /**
     * @param {string} o
     * @param {?} dx
     * @return {?}
     */
    function s(o, dx) {
      if (!n[o]) {
        if (!t[o]) {
          var i = "function" == typeof require && require;
          if (!dx && i) {
            return i(o, true);
          }
          if (a) {
            return a(o, true);
          }
          /** @type {Error} */
          var err = new Error("Cannot find module '" + o + "'");
          throw err.code = "MODULE_NOT_FOUND", err;
        }
        var module_ = n[o] = {
          exports : {}
        };
        t[o][0].call(module_.exports, function(e) {
          var n = t[o][1][e];
          return s(n ? n : e);
        }, module_, module_.exports, e, t, n, r);
      }
      return n[o].exports;
    }
    var a = "function" == typeof require && require;
    /** @type {number} */
    var o = 0;
    for (;o < r.length;o++) {
      s(r[o]);
    }
    return s;
  }({
    1 : [function(require, module, global) {
      /**
       * @param {Object} type
       * @return {?}
       */
      var $ = function(type) {
        return type && type.__esModule ? type : {
          default : type
        };
      };
      Object.defineProperty(global, "__esModule", {
        value : true
      });
      var l;
      var dict;
      var db;
      var init;
      var element = require("./modules/handle-dom");
      var _ = require("./modules/utils");
      var args = require("./modules/handle-swal-dom");
      var dom = require("./modules/handle-click");
      var nodes = require("./modules/handle-key");
      var opt = $(nodes);
      var helper = require("./modules/default-params");
      var opts = $(helper);
      var json = require("./modules/set-params");
      var obj = $(json);
      /** @type {function (): ?} */
      global.default = db = init = function() {
        /**
         * @param {string} i
         * @return {?}
         */
        function program(i) {
          var rval = val;
          return rval[i] === arg ? opts.default[i] : rval[i];
        }
        var val = arguments[0];
        if (element.addClass(doc.body, "stop-scrolling"), args.resetInput(), val === arg) {
          return _.logStr("SweetAlert expects at least 1 attribute!"), false;
        }
        var lab = _.extend({}, opts.default);
        switch(typeof val) {
          case "string":
            /** @type {string} */
            lab.title = val;
            lab.text = arguments[1] || "";
            lab.type = arguments[2] || "";
            break;
          case "object":
            if (val.title === arg) {
              return _.logStr('Missing "title" argument!'), false;
            }
            lab.title = val.title;
            var i;
            for (i in opts.default) {
              lab[i] = program(i);
            }
            lab.confirmButtonText = lab.showCancelButton ? "Confirm" : opts.default.confirmButtonText;
            lab.confirmButtonText = program("confirmButtonText");
            lab.doneFunction = arguments[1] || null;
            break;
          default:
            return _.logStr('Unexpected type of argument! Expected "string" or "object", got ' + typeof val), false;
        }
        obj.default(lab);
        args.fixVerticalPosition();
        args.openModal(arguments[1]);
        var container = args.getModal();
        var classNames = container.querySelectorAll("button");
        /** @type {Array} */
        var evtArr = ["onclick", "onmouseover", "onmouseout", "onmousedown", "onmouseup", "onfocus"];
        /**
         * @param {Function} event
         * @return {?}
         */
        var change = function(event) {
          return dom.handleButton(event, lab, container);
        };
        /** @type {number} */
        var c = 0;
        for (;c < classNames.length;c++) {
          /** @type {number} */
          var j = 0;
          for (;j < evtArr.length;j++) {
            var k = evtArr[j];
            /** @type {function (Function): ?} */
            classNames[c][k] = change;
          }
        }
        /** @type {function (Function): ?} */
        args.getOverlay().onclick = change;
        /** @type {(function ((Event|null)): ?|null)} */
        l = self.onkeydown;
        /**
         * @param {Object} deepDataAndEvents
         * @return {?}
         */
        var clone = function(deepDataAndEvents) {
          return opt.default(deepDataAndEvents, lab, container);
        };
        /** @type {function (Object): ?} */
        self.onkeydown = clone;
        /**
         * @return {undefined}
         */
        self.onfocus = function() {
          setTimeout(function() {
            if (dict !== arg) {
              dict.focus();
              dict = arg;
            }
          }, 0);
        };
        init.enableButtons();
      };
      /** @type {function (?): undefined} */
      db.setDefaults = init.setDefaults = function(attributes) {
        if (!attributes) {
          throw new Error("userParams is required");
        }
        if ("object" != typeof attributes) {
          throw new Error("userParams has to be a object");
        }
        _.extend(opts.default, attributes);
      };
      /** @type {function (): ?} */
      db.close = init.close = function() {
        var klass = args.getModal();
        element.fadeOut(args.getOverlay(), 5);
        element.fadeOut(klass, 5);
        element.removeClass(klass, "showSweetAlert");
        element.addClass(klass, "hideSweetAlert");
        element.removeClass(klass, "visible");
        var vvarText = klass.querySelector(".sa-icon.sa-success");
        element.removeClass(vvarText, "animate");
        element.removeClass(vvarText.querySelector(".sa-tip"), "animateSuccessTip");
        element.removeClass(vvarText.querySelector(".sa-long"), "animateSuccessLong");
        var rvar = klass.querySelector(".sa-icon.sa-error");
        element.removeClass(rvar, "animateErrorIcon");
        element.removeClass(rvar.querySelector(".sa-x-mark"), "animateXMark");
        var optgroup = klass.querySelector(".sa-icon.sa-warning");
        return element.removeClass(optgroup, "pulseWarning"), element.removeClass(optgroup.querySelector(".sa-body"), "pulseWarningIns"), element.removeClass(optgroup.querySelector(".sa-dot"), "pulseWarningIns"), setTimeout(function() {
          var view = klass.getAttribute("data-custom-class");
          element.removeClass(klass, view);
        }, 300), element.removeClass(doc.body, "stop-scrolling"), self.onkeydown = l, self.previousActiveElement && self.previousActiveElement.focus(), dict = arg, clearTimeout(klass.timeout), true;
      };
      /** @type {function (?): undefined} */
      db.showInputError = init.showInputError = function(xhtml) {
        var fragment = args.getModal();
        var rvar = fragment.querySelector(".sa-input-error");
        element.addClass(rvar, "show");
        var optgroup = fragment.querySelector(".sa-error-container");
        element.addClass(optgroup, "show");
        optgroup.querySelector("p").innerHTML = xhtml;
        setTimeout(function() {
          db.enableButtons();
        }, 1);
        fragment.querySelector("input").focus();
      };
      /** @type {function (Object): ?} */
      db.resetInputError = init.resetInputError = function(event) {
        if (event && 13 === event.keyCode) {
          return false;
        }
        var parentElement = args.getModal();
        var optgroup = parentElement.querySelector(".sa-input-error");
        element.removeClass(optgroup, "show");
        var rvar = parentElement.querySelector(".sa-error-container");
        element.removeClass(rvar, "show");
      };
      /** @type {function (): undefined} */
      db.disableButtons = init.disableButtons = function() {
        var parentElement = args.getModal();
        var cur = parentElement.querySelector("button.confirm");
        var s = parentElement.querySelector("button.cancel");
        /** @type {boolean} */
        cur.disabled = true;
        /** @type {boolean} */
        s.disabled = true;
      };
      /** @type {function (): undefined} */
      db.enableButtons = init.enableButtons = function() {
        var parentElement = args.getModal();
        var cur = parentElement.querySelector("button.confirm");
        var s = parentElement.querySelector("button.cancel");
        /** @type {boolean} */
        cur.disabled = false;
        /** @type {boolean} */
        s.disabled = false;
      };
      if ("undefined" != typeof self) {
        /** @type {function (): ?} */
        self.sweetAlert = self.swal = db;
      } else {
        _.logStr("SweetAlert is a frontend module!");
      }
      /** @type {function (): ?} */
      module.exports = global.default;
    }, {
      "./modules/default-params" : 2,
      "./modules/handle-click" : 3,
      "./modules/handle-dom" : 4,
      "./modules/handle-key" : 5,
      "./modules/handle-swal-dom" : 6,
      "./modules/set-params" : 8,
      "./modules/utils" : 9
    }],
    2 : [function(dataAndEvents, module, self) {
      Object.defineProperty(self, "__esModule", {
        value : true
      });
      var data = {
        title : "",
        text : "",
        type : null,
        allowOutsideClick : false,
        showConfirmButton : true,
        showCancelButton : false,
        closeOnConfirm : true,
        closeOnCancel : true,
        confirmButtonText : "OK",
        confirmButtonColor : "#8CD4F5",
        cancelButtonText : "Cancel",
        imageUrl : null,
        imageSize : null,
        timer : null,
        customClass : "",
        html : false,
        animation : true,
        allowEscapeKey : true,
        inputType : "text",
        inputPlaceholder : "",
        inputValue : "",
        showLoaderOnConfirm : false
      };
      self.default = data;
      module.exports = self.default;
    }, {}],
    3 : [function($sanitize, module, global) {
      Object.defineProperty(global, "__esModule", {
        value : true
      });
      var U = $sanitize("./utils");
      var dojo = ($sanitize("./handle-swal-dom"), $sanitize("./handle-dom"));
      /**
       * @param {boolean} event
       * @param {?} type
       * @param {string} node
       * @return {undefined}
       */
      var handler = function(event, type, node) {
        /**
         * @param {string} color
         * @return {undefined}
         */
        function clear(color) {
          if (psview) {
            if (type.confirmButtonColor) {
              /** @type {string} */
              elem.style.backgroundColor = color;
            }
          }
        }
        var color;
        var c;
        var text;
        var e = event || self.event;
        var elem = e.target || e.srcElement;
        /** @type {boolean} */
        var psview = -1 !== elem.className.indexOf("confirm");
        /** @type {boolean} */
        var AST_Node = -1 !== elem.className.indexOf("sweet-overlay");
        var next = dojo.hasClass(node, "visible");
        var methods = type.doneFunction && "true" === node.getAttribute("data-has-done-function");
        switch(psview && (type.confirmButtonColor && (color = type.confirmButtonColor, c = U.colorLuminance(color, -0.04), text = U.colorLuminance(color, -0.14))), e.type) {
          case "mouseover":
            clear(c);
            break;
          case "mouseout":
            clear(color);
            break;
          case "mousedown":
            clear(text);
            break;
          case "mouseup":
            clear(c);
            break;
          case "focus":
            var ul = node.querySelector("button.confirm");
            var noticeDiv = node.querySelector("button.cancel");
            if (psview) {
              /** @type {string} */
              noticeDiv.style.boxShadow = "none";
            } else {
              /** @type {string} */
              ul.style.boxShadow = "none";
            }
            break;
          case "click":
            /** @type {boolean} */
            var isActive = node === elem;
            var target = dojo.isDescendant(node, elem);
            if (!isActive && (!target && (next && !type.allowOutsideClick))) {
              break;
            }
            if (psview && (methods && next)) {
              remove(node, type);
            } else {
              if (methods && next || AST_Node) {
                h(node, type);
              } else {
                if (dojo.isDescendant(node, elem)) {
                  if ("BUTTON" === elem.tagName) {
                    sweetAlert.close();
                  }
                }
              }
            }
          ;
        }
      };
      /**
       * @param {string} node
       * @param {?} keepData
       * @return {undefined}
       */
      var remove = function(node, keepData) {
        /** @type {boolean} */
        var lastValue = true;
        if (dojo.hasClass(node, "show-input")) {
          lastValue = node.querySelector("input").value;
          if (!lastValue) {
            /** @type {string} */
            lastValue = "";
          }
        }
        keepData.doneFunction(lastValue);
        if (keepData.closeOnConfirm) {
          sweetAlert.close();
        }
        if (keepData.showLoaderOnConfirm) {
          sweetAlert.disableButtons();
        }
      };
      /**
       * @param {string} dataAndEvents
       * @param {?} s
       * @return {undefined}
       */
      var h = function(dataAndEvents, s) {
        /** @type {string} */
        var part = String(s.doneFunction).replace(/\s/g, "");
        /** @type {boolean} */
        var d = "function(" === part.substring(0, 9) && ")" !== part.substring(9, 10);
        if (d) {
          s.doneFunction(false);
        }
        if (s.closeOnCancel) {
          sweetAlert.close();
        }
      };
      global.default = {
        /** @type {function (boolean, ?, string): undefined} */
        handleButton : handler,
        /** @type {function (string, ?): undefined} */
        handleConfirm : remove,
        /** @type {function (string, ?): undefined} */
        handleCancel : h
      };
      module.exports = global.default;
    }, {
      "./handle-dom" : 4,
      "./handle-swal-dom" : 6,
      "./utils" : 9
    }],
    4 : [function(dataAndEvents, deepDataAndEvents, self) {
      Object.defineProperty(self, "__esModule", {
        value : true
      });
      /**
       * @param {string} node
       * @param {string} method
       * @return {?}
       */
      var f = function(node, method) {
        return(new RegExp(" " + method + " ")).test(" " + node.className + " ");
      };
      /**
       * @param {string} name
       * @param {string} method
       * @return {undefined}
       */
      var test = function(name, method) {
        if (!f(name, method)) {
          name.className += " " + method;
        }
      };
      /**
       * @param {string} name
       * @param {string} method
       * @return {undefined}
       */
      var on = function(name, method) {
        /** @type {string} */
        var lastLine = " " + name.className.replace(/[\t\r\n]/g, " ") + " ";
        if (f(name, method)) {
          for (;lastLine.indexOf(" " + method + " ") >= 0;) {
            /** @type {string} */
            lastLine = lastLine.replace(" " + method + " ", " ");
          }
          /** @type {string} */
          name.className = lastLine.replace(/^\s+|\s+$/g, "");
        }
      };
      /**
       * @param {?} child
       * @return {?}
       */
      var div = function(child) {
        /** @type {Element} */
        var el = doc.createElement("div");
        return el.appendChild(doc.createTextNode(child)), el.innerHTML;
      };
      /**
       * @param {Node} o
       * @return {undefined}
       */
      var callback = function(o) {
        /** @type {string} */
        o.style.opacity = "";
        /** @type {string} */
        o.style.display = "block";
      };
      /**
       * @param {Object} name
       * @return {?}
       */
      var lookup = function(name) {
        if (name && !name.length) {
          return callback(name);
        }
        /** @type {number} */
        var i = 0;
        for (;i < name.length;++i) {
          callback(name[i]);
        }
      };
      /**
       * @param {Node} view
       * @return {undefined}
       */
      var show = function(view) {
        /** @type {string} */
        view.style.opacity = "";
        /** @type {string} */
        view.style.display = "none";
      };
      /**
       * @param {Object} data
       * @return {?}
       */
      var hide = function(data) {
        if (data && !data.length) {
          return show(data);
        }
        /** @type {number} */
        var byteIndex = 0;
        for (;byteIndex < data.length;++byteIndex) {
          show(data[byteIndex]);
        }
      };
      /**
       * @param {string} dataAndEvents
       * @param {Node} elem
       * @return {?}
       */
      var target = function(dataAndEvents, elem) {
        var parent = elem.parentNode;
        for (;null !== parent;) {
          if (parent === dataAndEvents) {
            return true;
          }
          parent = parent.parentNode;
        }
        return false;
      };
      /**
       * @param {HTMLElement} element
       * @return {?}
       */
      var update = function(element) {
        /** @type {string} */
        element.style.left = "-9999px";
        /** @type {string} */
        element.style.display = "block";
        var px;
        var originalHeight = element.clientHeight;
        return px = "undefined" != typeof getComputedStyle ? parseInt(getComputedStyle(element).getPropertyValue("padding-top"), 10) : parseInt(element.currentStyle.padding), element.style.left = "", element.style.display = "none", "-" + parseInt((originalHeight + px) / 2) + "px";
      };
      /**
       * @param {Element} elt
       * @param {number} ms
       * @return {undefined}
       */
      var init = function(elt, ms) {
        if (+elt.style.opacity < 1) {
          ms = ms || 16;
          /** @type {number} */
          elt.style.opacity = 0;
          /** @type {string} */
          elt.style.display = "block";
          /** @type {number} */
          var tick = +new Date;
          var after = function(matcherFunction) {
            /**
             * @return {?}
             */
            function e() {
              return matcherFunction.apply(this, arguments);
            }
            return e.toString = function() {
              return matcherFunction.toString();
            }, e;
          }(function() {
            /** @type {number} */
            elt.style.opacity = +elt.style.opacity + (new Date - tick) / 100;
            /** @type {number} */
            tick = +new Date;
            if (+elt.style.opacity < 1) {
              setTimeout(after, ms);
            }
          });
          after();
        }
        /** @type {string} */
        elt.style.display = "block";
      };
      /**
       * @param {?} item
       * @param {number} amount
       * @return {undefined}
       */
      var fn = function(item, amount) {
        amount = amount || 16;
        /** @type {number} */
        item.style.opacity = 1;
        /** @type {number} */
        var tick = +new Date;
        var flush = function(matcherFunction) {
          /**
           * @return {?}
           */
          function fn() {
            return matcherFunction.apply(this, arguments);
          }
          return fn.toString = function() {
            return matcherFunction.toString();
          }, fn;
        }(function() {
          /** @type {number} */
          item.style.opacity = +item.style.opacity - (new Date - tick) / 100;
          /** @type {number} */
          tick = +new Date;
          if (+item.style.opacity > 0) {
            setTimeout(flush, amount);
          } else {
            /** @type {string} */
            item.style.display = "none";
          }
        });
        flush();
      };
      /**
       * @param {Object} el
       * @return {undefined}
       */
      var trigger = function(el) {
        if ("function" == typeof MouseEvent) {
          /** @type {MouseEvent} */
          var mouseEvent = new MouseEvent("click", {
            view : self,
            bubbles : false,
            cancelable : true
          });
          el.dispatchEvent(mouseEvent);
        } else {
          if (doc.createEvent) {
            /** @type {(Event|null)} */
            var ev = doc.createEvent("MouseEvents");
            ev.initEvent("click", false, false);
            el.dispatchEvent(ev);
          } else {
            if (doc.createEventObject) {
              el.fireEvent("onclick");
            } else {
              if ("function" == typeof el.onclick) {
                el.onclick();
              }
            }
          }
        }
      };
      /**
       * @param {?} event
       * @return {undefined}
       */
      var stop = function(event) {
        if ("function" == typeof event.stopPropagation) {
          event.stopPropagation();
          event.preventDefault();
        } else {
          if (self.event) {
            if (self.event.hasOwnProperty("cancelBubble")) {
              /** @type {boolean} */
              self.event.cancelBubble = true;
            }
          }
        }
      };
      /** @type {function (string, string): ?} */
      self.hasClass = f;
      /** @type {function (string, string): undefined} */
      self.addClass = test;
      /** @type {function (string, string): undefined} */
      self.removeClass = on;
      /** @type {function (?): ?} */
      self.escapeHtml = div;
      /** @type {function (Node): undefined} */
      self._show = callback;
      /** @type {function (Object): ?} */
      self.show = lookup;
      /** @type {function (Node): undefined} */
      self._hide = show;
      /** @type {function (Object): ?} */
      self.hide = hide;
      /** @type {function (string, Node): ?} */
      self.isDescendant = target;
      /** @type {function (HTMLElement): ?} */
      self.getTopMargin = update;
      /** @type {function (Element, number): undefined} */
      self.fadeIn = init;
      /** @type {function (?, number): undefined} */
      self.fadeOut = fn;
      /** @type {function (Object): undefined} */
      self.fireClick = trigger;
      /** @type {function (?): undefined} */
      self.stopEventPropagation = stop;
    }, {}],
    5 : [function(require, module, self) {
      Object.defineProperty(self, "__esModule", {
        value : true
      });
      var assert = require("./handle-dom");
      var nodes = require("./handle-swal-dom");
      /**
       * @param {Object} lab
       * @param {string} element
       * @param {Object} context
       * @return {undefined}
       */
      var update = function(lab, element, context) {
        var event = lab || self.event;
        var rvar = event.keyCode || event.which;
        var obj = context.querySelector("button.confirm");
        var res = context.querySelector("button.cancel");
        var codeSegments = context.querySelectorAll("button[tabindex]");
        if (-1 !== [9, 13, 32, 27].indexOf(rvar)) {
          var el = event.target || event.srcElement;
          /** @type {number} */
          var object = -1;
          /** @type {number} */
          var i = 0;
          for (;i < codeSegments.length;i++) {
            if (el === codeSegments[i]) {
              /** @type {number} */
              object = i;
              break;
            }
          }
          if (9 === rvar) {
            el = -1 === object ? obj : object === codeSegments.length - 1 ? codeSegments[0] : codeSegments[object + 1];
            assert.stopEventPropagation(event);
            el.focus();
            if (element.confirmButtonColor) {
              nodes.setFocusStyle(el, element.confirmButtonColor);
            }
          } else {
            if (13 === rvar) {
              if ("INPUT" === el.tagName) {
                el = obj;
                obj.focus();
              }
              el = -1 === object ? obj : arg;
            } else {
              if (27 === rvar && element.allowEscapeKey === true) {
                el = res;
                assert.fireClick(el, event);
              } else {
                el = arg;
              }
            }
          }
        }
      };
      /** @type {function (Object, string, Object): undefined} */
      self.default = update;
      /** @type {function (Object, string, Object): undefined} */
      module.exports = self.default;
    }, {
      "./handle-dom" : 4,
      "./handle-swal-dom" : 6
    }],
    6 : [function(require, dataAndEvents, self) {
      /**
       * @param {Object} type
       * @return {?}
       */
      var Event = function(type) {
        return type && type.__esModule ? type : {
          default : type
        };
      };
      Object.defineProperty(self, "__esModule", {
        value : true
      });
      var nodes = require("./utils");
      var element = require("./handle-dom");
      var complete = require("./default-params");
      var c = Event(complete);
      var type = require("./injected-html");
      var item = Event(type);
      /** @type {string} */
      var selector = ".sweet-alert";
      /** @type {string} */
      var idSelector = ".sweet-overlay";
      /**
       * @return {undefined}
       */
      var w = function() {
        /** @type {Element} */
        var content = doc.createElement("div");
        content.innerHTML = item.default;
        for (;content.firstChild;) {
          doc.body.appendChild(content.firstChild);
        }
      };
      var $ = function(matcherFunction) {
        /**
         * @return {?}
         */
        function spy() {
          return matcherFunction.apply(this, arguments);
        }
        return spy.toString = function() {
          return matcherFunction.toString();
        }, spy;
      }(function() {
        /** @type {(Element|null)} */
        var elem = doc.querySelector(selector);
        return elem || (w(), elem = $()), elem;
      });
      /**
       * @return {?}
       */
      var check = function() {
        var node = $();
        return node ? node.querySelector("input") : void 0;
      };
      /**
       * @return {?}
       */
      var $$ = function() {
        return doc.querySelector(idSelector);
      };
      /**
       * @param {Element} element
       * @param {?} key
       * @return {undefined}
       */
      var style = function(element, key) {
        var camelKey = nodes.hexToRgb(key);
        /** @type {string} */
        element.style.boxShadow = "0 0 2px rgba(" + camelKey + ", 0.8), inset 0 0 0 1px rgba(0, 0, 0, 0.05)";
      };
      /**
       * @param {boolean} allBindingsAccessor
       * @return {undefined}
       */
      var init = function(allBindingsAccessor) {
        var optgroup = $();
        element.fadeIn($$(), 10);
        element.show(optgroup);
        element.addClass(optgroup, "showSweetAlert");
        element.removeClass(optgroup, "hideSweetAlert");
        self.previousActiveElement = doc.activeElement;
        var submenu = optgroup.querySelector("button.confirm");
        submenu.focus();
        setTimeout(function() {
          element.addClass(optgroup, "visible");
        }, 500);
        var timeout = optgroup.getAttribute("data-timer");
        if ("null" !== timeout && "" !== timeout) {
          /** @type {boolean} */
          var thumbSource = allBindingsAccessor;
          /** @type {number} */
          optgroup.timeout = setTimeout(function() {
            var a = (thumbSource || null) && "true" === optgroup.getAttribute("data-has-done-function");
            if (a) {
              thumbSource(null);
            } else {
              sweetAlert.close();
            }
          }, timeout);
        }
      };
      /**
       * @return {undefined}
       */
      var next = function() {
        var optgroup = $();
        var elem = check();
        element.removeClass(optgroup, "show-input");
        elem.value = c.default.inputValue;
        elem.setAttribute("type", c.default.inputType);
        elem.setAttribute("placeholder", c.default.inputPlaceholder);
        show();
      };
      /**
       * @param {Object} e
       * @return {?}
       */
      var show = function(e) {
        if (e && 13 === e.keyCode) {
          return false;
        }
        var dummy = $();
        var optgroup = dummy.querySelector(".sa-input-error");
        element.removeClass(optgroup, "show");
        var rvar = dummy.querySelector(".sa-error-container");
        element.removeClass(rvar, "show");
      };
      /**
       * @return {undefined}
       */
      var size = function() {
        var bar = $();
        bar.style.marginTop = element.getTopMargin($());
      };
      /** @type {function (): undefined} */
      self.sweetAlertInitialize = w;
      self.getModal = $;
      /** @type {function (): ?} */
      self.getOverlay = $$;
      /** @type {function (): ?} */
      self.getInput = check;
      /** @type {function (Element, ?): undefined} */
      self.setFocusStyle = style;
      /** @type {function (boolean): undefined} */
      self.openModal = init;
      /** @type {function (): undefined} */
      self.resetInput = next;
      /** @type {function (Object): ?} */
      self.resetInputError = show;
      /** @type {function (): undefined} */
      self.fixVerticalPosition = size;
    }, {
      "./default-params" : 2,
      "./handle-dom" : 4,
      "./injected-html" : 7,
      "./utils" : 9
    }],
    7 : [function(dataAndEvents, module, self) {
      Object.defineProperty(self, "__esModule", {
        value : true
      });
      /** @type {string} */
      var compassResult = '<div class="sweet-overlay" tabIndex="-1"></div><div class="sweet-alert"><div class="sa-icon sa-error">\n      <span class="sa-x-mark">\n        <span class="sa-line sa-left"></span>\n        <span class="sa-line sa-right"></span>\n      </span>\n    </div><div class="sa-icon sa-warning">\n      <span class="sa-body"></span>\n      <span class="sa-dot"></span>\n    </div><div class="sa-icon sa-info"></div><div class="sa-icon sa-success">\n      <span class="sa-line sa-tip"></span>\n      <span class="sa-line sa-long"></span>\n\n      <div class="sa-placeholder"></div>\n      <div class="sa-fix"></div>\n    </div><div class="sa-icon sa-custom"></div><h2>Title</h2>\n    <p>Text</p>\n    <fieldset>\n      <input type="text" tabIndex="3" />\n      <div class="sa-input-error"></div>\n    </fieldset><div class="sa-error-container">\n      <div class="icon">!</div>\n      <p>Not valid!</p>\n    </div><div class="sa-button-container">\n      <button class="cancel" tabIndex="2">Cancel</button>\n      <div class="sa-confirm-button-container">\n        <button class="confirm" tabIndex="1">OK</button><div class="la-ball-fall">\n          <div></div>\n          <div></div>\n          <div></div>\n        </div>\n      </div>\n    </div></div>';
      /** @type {string} */
      self.default = compassResult;
      /** @type {string} */
      module.exports = self.default;
    }, {}],
    8 : [function(createElement, module, self) {
      Object.defineProperty(self, "__esModule", {
        value : true
      });
      var o = createElement("./utils");
      var el = createElement("./handle-swal-dom");
      var element = createElement("./handle-dom");
      /** @type {Array} */
      var codeSegments = ["error", "warning", "info", "success", "input", "prompt"];
      /**
       * @param {Object} lab
       * @return {?}
       */
      var init = function(lab) {
        var node = el.getModal();
        var h2 = node.querySelector("h2");
        var name = node.querySelector("p");
        var button = node.querySelector("button.cancel");
        var d = node.querySelector("button.confirm");
        if (h2.innerHTML = lab.html ? lab.title : element.escapeHtml(lab.title).split("\n").join("<br>"), name.innerHTML = lab.html ? lab.text : element.escapeHtml(lab.text || "").split("\n").join("<br>"), lab.text && element.show(name), lab.customClass) {
          element.addClass(node, lab.customClass);
          node.setAttribute("data-custom-class", lab.customClass);
        } else {
          var view = node.getAttribute("data-custom-class");
          element.removeClass(node, view);
          node.setAttribute("data-custom-class", "");
        }
        if (element.hide(node.querySelectorAll(".sa-icon")), lab.type && !o.isIE8()) {
          var data = function() {
            /** @type {boolean} */
            var d = false;
            /** @type {number} */
            var i = 0;
            for (;i < codeSegments.length;i++) {
              if (lab.type === codeSegments[i]) {
                /** @type {boolean} */
                d = true;
                break;
              }
            }
            if (!d) {
              return logStr("Unknown alert type: " + lab.type), {
                v : false
              };
            }
            /** @type {Array} */
            var types = ["success", "error", "warning", "info"];
            var optgroup = arg;
            if (-1 !== types.indexOf(lab.type)) {
              optgroup = node.querySelector(".sa-icon.sa-" + lab.type);
              element.show(optgroup);
            }
            var input = el.getInput();
            switch(lab.type) {
              case "success":
                element.addClass(optgroup, "animate");
                element.addClass(optgroup.querySelector(".sa-tip"), "animateSuccessTip");
                element.addClass(optgroup.querySelector(".sa-long"), "animateSuccessLong");
                break;
              case "error":
                element.addClass(optgroup, "animateErrorIcon");
                element.addClass(optgroup.querySelector(".sa-x-mark"), "animateXMark");
                break;
              case "warning":
                element.addClass(optgroup, "pulseWarning");
                element.addClass(optgroup.querySelector(".sa-body"), "pulseWarningIns");
                element.addClass(optgroup.querySelector(".sa-dot"), "pulseWarningIns");
                break;
              case "input":
              ;
              case "prompt":
                input.setAttribute("type", lab.inputType);
                input.value = lab.inputValue;
                input.setAttribute("placeholder", lab.inputPlaceholder);
                element.addClass(node, "show-input");
                setTimeout(function() {
                  input.focus();
                  input.addEventListener("keyup", swal.resetInputError);
                }, 400);
            }
          }();
          if ("object" == typeof data) {
            return data.v;
          }
        }
        if (lab.imageUrl) {
          var elem = node.querySelector(".sa-icon.sa-custom");
          /** @type {string} */
          elem.style.backgroundImage = "url(" + lab.imageUrl + ")";
          element.show(elem);
          /** @type {number} */
          var ary = 80;
          /** @type {number} */
          var bulk = 80;
          if (lab.imageSize) {
            var next = lab.imageSize.toString().split("x");
            var obj = next[0];
            var fn = next[1];
            if (obj && fn) {
              ary = obj;
              bulk = fn;
            } else {
              logStr("Parameter imageSize expects value with format WIDTHxHEIGHT, got " + lab.imageSize);
            }
          }
          elem.setAttribute("style", elem.getAttribute("style") + "width:" + ary + "px; height:" + bulk + "px");
        }
        node.setAttribute("data-has-cancel-button", lab.showCancelButton);
        if (lab.showCancelButton) {
          /** @type {string} */
          button.style.display = "inline-block";
        } else {
          element.hide(button);
        }
        node.setAttribute("data-has-confirm-button", lab.showConfirmButton);
        if (lab.showConfirmButton) {
          /** @type {string} */
          d.style.display = "inline-block";
        } else {
          element.hide(d);
        }
        if (lab.cancelButtonText) {
          button.innerHTML = element.escapeHtml(lab.cancelButtonText);
        }
        if (lab.confirmButtonText) {
          d.innerHTML = element.escapeHtml(lab.confirmButtonText);
        }
        if (lab.confirmButtonColor) {
          d.style.backgroundColor = lab.confirmButtonColor;
          d.style.borderLeftColor = lab.confirmLoadingButtonColor;
          d.style.borderRightColor = lab.confirmLoadingButtonColor;
          el.setFocusStyle(d, lab.confirmButtonColor);
        }
        node.setAttribute("data-allow-outside-click", lab.allowOutsideClick);
        /** @type {boolean} */
        var classes = !!lab.doneFunction;
        node.setAttribute("data-has-done-function", classes);
        if (lab.animation) {
          if ("string" == typeof lab.animation) {
            node.setAttribute("data-animation", lab.animation);
          } else {
            node.setAttribute("data-animation", "pop");
          }
        } else {
          node.setAttribute("data-animation", "none");
        }
        node.setAttribute("data-timer", lab.timer);
      };
      /** @type {function (Object): ?} */
      self.default = init;
      /** @type {function (Object): ?} */
      module.exports = self.default;
    }, {
      "./handle-dom" : 4,
      "./handle-swal-dom" : 6,
      "./utils" : 9
    }],
    9 : [function(dataAndEvents, deepDataAndEvents, child) {
      Object.defineProperty(child, "__esModule", {
        value : true
      });
      /**
       * @param {?} expectedNumberOfNonCommentArgs
       * @param {?} opt_attributes
       * @return {?}
       */
      var extend = function(expectedNumberOfNonCommentArgs, opt_attributes) {
        var testName;
        for (testName in opt_attributes) {
          if (opt_attributes.hasOwnProperty(testName)) {
            expectedNumberOfNonCommentArgs[testName] = opt_attributes[testName];
          }
        }
        return expectedNumberOfNonCommentArgs;
      };
      /**
       * @param {?} prop
       * @return {?}
       */
      var index = function(prop) {
        /** @type {(Array.<string>|null)} */
        var p = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(prop);
        return p ? parseInt(p[1], 16) + ", " + parseInt(p[2], 16) + ", " + parseInt(p[3], 16) : null;
      };
      /**
       * @return {?}
       */
      var addEvent = function() {
        return self.attachEvent && !self.addEventListener;
      };
      /**
       * @param {string} res
       * @return {undefined}
       */
      var fail = function(res) {
        if (self.console) {
          self.console.log("SweetAlert: " + res);
        }
      };
      /**
       * @param {string} hex
       * @param {number} lum
       * @return {?}
       */
      var colorLuminance = function(hex, lum) {
        /** @type {string} */
        hex = String(hex).replace(/[^0-9a-f]/gi, "");
        if (hex.length < 6) {
          hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
        }
        lum = lum || 0;
        var c;
        var mid;
        /** @type {string} */
        var rgb = "#";
        /** @type {number} */
        mid = 0;
        for (;3 > mid;mid++) {
          /** @type {number} */
          c = parseInt(hex.substr(2 * mid, 2), 16);
          /** @type {string} */
          c = Math.round(Math.min(Math.max(0, c + c * lum), 255)).toString(16);
          rgb += ("00" + c).substr(c.length);
        }
        return rgb;
      };
      /** @type {function (?, ?): ?} */
      child.extend = extend;
      /** @type {function (?): ?} */
      child.hexToRgb = index;
      /** @type {function (): ?} */
      child.isIE8 = addEvent;
      /** @type {function (string): undefined} */
      child.logStr = fail;
      /** @type {function (string, number): ?} */
      child.colorLuminance = colorLuminance;
    }, {}]
  }, {}, [1]);
  if ("function" == typeof define && define.amd) {
    define(function() {
      return sweetAlert;
    });
  } else {
    if ("undefined" != typeof module) {
      if (module.exports) {
        module.exports = sweetAlert;
      }
    }
  }
}(window, document);