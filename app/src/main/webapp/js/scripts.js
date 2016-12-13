!function(processors) {
  /**
   * @param {string} name
   * @return {?}
   */
  function r(name) {
    if (t[name]) {
      return t[name].exports;
    }
    var mod = t[name] = {
      exports : {},
      id : name,
      loaded : false
    };
    return processors[name].call(mod.exports, mod, mod.exports, r), mod.loaded = true, mod.exports;
  }
  var t = {};
  return r.m = processors, r.c = t, r.p = "", r(0);
}([function(dataAndEvents, next_scope, callback) {
  (function(jQuery) {
    /**
     * @param {Object} obj
     * @param {string} name
     * @param {boolean} value
     * @return {?}
     */
    function prop(obj, name, value) {
      return name in obj ? Object.defineProperty(obj, name, {
        value : value,
        enumerable : true,
        configurable : true,
        writable : true
      }) : obj[name] = value, obj;
    }
    callback(3);
    callback(16);
    callback(17);
    callback(18);
    callback(19);
    callback(20);
    !function($) {
      /**
       * @return {undefined}
       */
      function addEvents() {
        var revisionCheckbox = $(".gl-side-menu-wrap");
        if (revisionCheckbox.length) {
          addEvent();
        }
      }
      /**
       * @return {undefined}
       */
      function addEvent() {
        input.addEventListener("click", change);
        if (checkBox) {
          checkBox.addEventListener("click", change);
        }
      }
      /**
       * @return {undefined}
       */
      function change() {
        if (perm) {
          classie.remove(elem, "gl-show-menu");
        } else {
          classie.add(elem, "gl-show-menu");
        }
        /** @type {boolean} */
        perm = !perm;
      }
      /**
       * @return {undefined}
       */
      function render() {
        /** @type {number} */
        var x = cnl - 5;
        $("ul.gl-gallery li").eq(4).find("a").addClass("gl-more-img-text").prepend("<span>+" + x + "</span>");
      }
      var suiteView;
      $(window).load(function() {
        $("#gl-circle-loader-wrapper").fadeOut(500);
      });
      new Swiper(".gl-jobs-testimonial", {
        slidesPerView : 1,
        autoplay : 6E3,
        loop : true
      });
      new Swiper(".gl-agent-testimonial", (suiteView = {
        slidesPerView : 4,
        paginationClickable : true,
        spaceBetween : 15,
        pagination : ".gl-agent-pagination"
      }, prop(suiteView, "paginationClickable", true), prop(suiteView, "loop", true), prop(suiteView, "breakpoints", {
        1024 : {
          slidesPerView : 4
        },
        800 : {
          slidesPerView : 3
        },
        640 : {
          slidesPerView : 2
        },
        400 : {
          slidesPerView : 1
        }
      }), suiteView));
      $("#gl-slogan").typed({
        stringsElement : $("#typed-strings"),
        startDelay : 500,
        typeSpeed : 100,
        backDelay : 1500,
        loop : true,
        contentType : "html",
        loopCount : false
      });
      document.createElement("picture");
      $("#gl-quality-rating, #gl-service-rating,#gl-response-rating").raty({
        cancel : false,
        half : true,
        starType : "i"
      });
      /** @type {(HTMLElement|null)} */
      var elem = document.body;
      /** @type {(HTMLElement|null)} */
      var input = (document.querySelector("body"), document.getElementById("gl-side-menu-btn"));
      /** @type {(HTMLElement|null)} */
      var checkBox = document.getElementById("gl-side-menu-close-button");
      /** @type {boolean} */
      var perm = false;
      addEvents();
      var iBoxHack = $(".gl-header").height();
      
      $(".gl-side-menu-wrap").height('auto');
      
        /*$(".gl-side-menu-wrap").height($(window).height() - iBoxHack);
      $(window).resize(function() {
        $(".gl-side-menu-wrap").height($(window).height() - iBoxHack);
      });
        */
      $(window).trigger("resize");
      var tref;
      var current = $(".gl-header");
      current.after('<section class="gl-fake-div"></section>');
      var textareaEl = current.next();
      var dialogHeight = current.outerHeight();
      textareaEl.css({
        height : dialogHeight
      });
      $(window).on("resize", function(dataAndEvents) {
        clearTimeout(tref);
        /** @type {number} */
        tref = setTimeout(function() {
          var dialogHeight = current.outerHeight();
          textareaEl.css({
            height : dialogHeight
          });
        }, 250);
      });
      var cnl = $("ul.gl-gallery li").length;
      if (cnl > 5) {
        render();
      }
      var $btn = $("a.gl-sorting-btn");
      var $delegate = $(".gl-featured-items");
      $btn.on("click", function(types) {
        types.preventDefault();
        if ($btn.hasClass("gl-grid-view")) {
          $(this).removeClass("gl-grid-view").addClass("gl-list-view");
          $(this).find("i").removeClass("fa-list-ul").addClass("fa-th-large");
          $delegate.addClass("gl-listtype-display");
        } else {
          $(this).removeClass("gl-list-view").addClass("gl-grid-view");
          $(this).find("i").removeClass("fa-th-large").addClass("fa-list-ul");
          $delegate.removeClass("gl-listtype-display");
        }
      });
      $(".gl-floorplan-item .collapse, .gl-accordion-item .collapse").on("shown.bs.collapse", function() {
        $(this).parent().find(".ion-ios-plus-empty").removeClass("ion-ios-plus-empty").addClass("ion-ios-minus-empty");
      }).on("hidden.bs.collapse", function() {
        $(this).parent().find(".ion-ios-minus-empty").removeClass("ion-ios-minus-empty").addClass("ion-ios-plus-empty");
      });
      if ($(this).width() < 992) {
        $(".gl-search-expand-btn").on("click", function(types) {
          types.preventDefault();
          var script = $(this);
          var $target = $(".gl-search-filter-bar");
          $target.slideToggle(500, function() {
            script.text(function() {
              return $target.is(":visible") ? "Search Collapse" : "Search Expand";
            });
          });
        });
      }
      $(".gl-more-filter-btn").on("click", function(types) {
        types.preventDefault();
        var $accordion = ($(this), $(".gl-advanced-search-wrapper"));
        $accordion.slideToggle(500);
      });
      $(".gl-advanced-search-btn").on("click", function(types) {
        types.preventDefault();
        var ul = $(".gl-advanced-search-wrapper");
        var self = $(".gl-directory-searchbar");
        if (self.hasClass("collapsed")) {
          ul.slideDown();
          self.removeClass("collapsed").addClass("expanded");
        } else {
          ul.slideUp();
          self.removeClass("expanded").addClass("collapsed");
        }
      });
      if ($("header.gl-header").children().hasClass(".gl-header-topbar")) {
        $(".navbar-collapse").css({
          maxHeight : $(window).height() - ($(".navbar-header").height() + $(".gl-header-topbar").height()) + "px"
        });
      } else {
        $(".navbar-collapse").css({
          maxHeight : $(window).height() - $(".navbar-header").height() + "px"
        });
      }
      $(window).resize(function() {
        var header = $(".gl-search-template .gl-header");
        var start = header.outerHeight();
        var active = $(".gl-split-map").parent();
        var current = $(".gl-search-map-section");
        var $e = $(".gl-search-filter-wrapper");
        var toSend = $e.outerHeight();
        var end = start + toSend;
        if (active.prev().hasClass("gl-search-filter-wrapper") || current.prev().hasClass("gl-header")) {
          $(".gl-split-map").height($(window).height() - end).css({
            marginTop : "-1px"
          });
          header.css({
            position : "fixed",
            marginTop : "-1px"
          });
          active.prev(".gl-search-filter-wrapper").css({
            position : "fixed",
            marginTop : "-2px",
            "z-index" : 9
          });
          active.css({
            paddingTop : 0
          });
          current.css({
            paddingTop : 0
          });
        } else {
          $(".gl-split-map").height($(window).height() - start);
          header.css({
            position : "fixed"
          });
        }
        header.next().css({
          paddingTop : 0
        });
      });
      $(window).trigger("resize");
      $("a.gl-tag-btn").append('<span class="gl-close">x</span>');
      $("a.gl-tag-btn").on("click", ".gl-close", function(types) {
        types.preventDefault();
        $(this).parent().remove();
      });
    }(jQuery);
  }).call(next_scope, callback(1));
}, function($rootScope, obj, $compile) {
  var config;
  var promise;
  (function(value) {
    /** @type {function (string): ?} */
    var isArray = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(val) {
      return typeof val;
    } : function(val) {
      return val && ("function" == typeof Symbol && val.constructor === Symbol) ? "symbol" : typeof val;
    };
    !function(m, fail) {
      if ("object" === isArray(value) && "object" === isArray(value.exports)) {
        value.exports = m.document ? fail(m, true) : function(value) {
          if (!value.document) {
            throw new Error("jQuery requires a window with a document");
          }
          return fail(value);
        };
      } else {
        fail(m);
      }
    }("undefined" != typeof window ? window : void 0, function(self, dataAndEvents) {
      /**
       * @param {string} optgroup
       * @return {?}
       */
      function isArraylike(optgroup) {
        var value = !!optgroup && ("length" in optgroup && optgroup.length);
        var type = jQuery.type(optgroup);
        return "function" !== type && (!jQuery.isWindow(optgroup) && ("array" === type || (0 === value || "number" == typeof value && (value > 0 && value - 1 in optgroup))));
      }
      /**
       * @param {string} elements
       * @param {Object} qualifier
       * @param {boolean} not
       * @return {?}
       */
      function winnow(elements, qualifier, not) {
        if (jQuery.isFunction(qualifier)) {
          return jQuery.grep(elements, function(elem, i) {
            return!!qualifier.call(elem, i, elem) !== not;
          });
        }
        if (qualifier.nodeType) {
          return jQuery.grep(elements, function(elem) {
            return elem === qualifier !== not;
          });
        }
        if ("string" == typeof qualifier) {
          if (isSimple.test(qualifier)) {
            return jQuery.filter(qualifier, elements, not);
          }
          qualifier = jQuery.filter(qualifier, elements);
        }
        return jQuery.grep(elements, function(elem) {
          return core_indexOf.call(qualifier, elem) > -1 !== not;
        });
      }
      /**
       * @param {Object} cur
       * @param {string} dir
       * @return {?}
       */
      function sibling(cur, dir) {
        for (;(cur = cur[dir]) && 1 !== cur.nodeType;) {
        }
        return cur;
      }
      /**
       * @param {string} options
       * @return {?}
       */
      function createOptions(options) {
        var buf = {};
        return jQuery.each(options.match(core_rnotwhite) || [], function(dataAndEvents, off) {
          /** @type {boolean} */
          buf[off] = true;
        }), buf;
      }
      /**
       * @return {undefined}
       */
      function completed() {
        elem.removeEventListener("DOMContentLoaded", completed);
        self.removeEventListener("load", completed);
        jQuery.ready();
      }
      /**
       * @return {undefined}
       */
      function get() {
        this.expando = jQuery.expando + get.uid++;
      }
      /**
       * @param {string} optgroup
       * @param {(Error|string)} camelKey
       * @param {Object} data
       * @return {?}
       */
      function dataAttr(optgroup, camelKey, data) {
        var rvar;
        if (void 0 === data && 1 === optgroup.nodeType) {
          if (rvar = "data-" + camelKey.replace(r20, "-$&").toLowerCase(), data = optgroup.getAttribute(rvar), "string" == typeof data) {
            try {
              data = "true" === data || "false" !== data && ("null" === data ? null : +data + "" === data ? +data : rbrace.test(data) ? jQuery.parseJSON(data) : data);
            } catch (s) {
            }
            data_user.set(optgroup, camelKey, data);
          } else {
            data = void 0;
          }
        }
        return data;
      }
      /**
       * @param {string} name
       * @param {string} prop
       * @param {Object} parts
       * @param {Object} t
       * @return {?}
       */
      function add(name, prop, parts, t) {
        var end;
        /** @type {number} */
        var scale = 1;
        /** @type {number} */
        var o = 20;
        /** @type {function (): ?} */
        var getTarget = t ? function() {
          return t.cur();
        } : function() {
          return jQuery.css(name, prop, "");
        };
        var target = getTarget();
        var unit = parts && parts[3] || (jQuery.cssNumber[prop] ? "" : "px");
        var start = (jQuery.cssNumber[prop] || "px" !== unit && +target) && regexp.exec(jQuery.css(name, prop));
        if (start && start[3] !== unit) {
          unit = unit || start[3];
          parts = parts || [];
          /** @type {number} */
          start = +target || 1;
          do {
            /** @type {(number|string)} */
            scale = scale || ".5";
            start /= scale;
            jQuery.style(name, prop, start + unit);
          } while (scale !== (scale = getTarget() / target) && (1 !== scale && --o));
        }
        return parts && (start = +start || (+target || 0), end = parts[1] ? start + (parts[1] + 1) * parts[2] : +parts[2], t && (t.unit = unit, t.start = start, t.end = end)), end;
      }
      /**
       * @param {Node} context
       * @param {Object} tag
       * @return {?}
       */
      function getAll(context, tag) {
        var ret = "undefined" != typeof context.getElementsByTagName ? context.getElementsByTagName(tag || "*") : "undefined" != typeof context.querySelectorAll ? context.querySelectorAll(tag || "*") : [];
        return void 0 === tag || tag && jQuery.nodeName(context, tag) ? jQuery.merge([context], ret) : ret;
      }
      /**
       * @param {(Array|NodeList)} elems
       * @param {Array} refElements
       * @return {undefined}
       */
      function setGlobalEval(elems, refElements) {
        /** @type {number} */
        var i = 0;
        var length = elems.length;
        for (;i < length;i++) {
          data_priv.set(elems[i], "globalEval", !refElements || data_priv.get(refElements[i], "globalEval"));
        }
      }
      /**
       * @param {Array} second
       * @param {Document} context
       * @param {boolean} selector
       * @param {Object} values
       * @param {Array} result
       * @return {?}
       */
      function parse(second, context, selector, values, result) {
        var elem;
        var tmp;
        var tag;
        var wrap;
        var contains;
        var j;
        var fragment = context.createDocumentFragment();
        /** @type {Array} */
        var nodes = [];
        /** @type {number} */
        var i = 0;
        var l = second.length;
        for (;i < l;i++) {
          if (elem = second[i], elem || 0 === elem) {
            if ("object" === jQuery.type(elem)) {
              jQuery.merge(nodes, elem.nodeType ? [elem] : elem);
            } else {
              if (rhtml.test(elem)) {
                tmp = tmp || fragment.appendChild(context.createElement("div"));
                tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();
                wrap = wrapMap[tag] || wrapMap._default;
                tmp.innerHTML = wrap[1] + jQuery.htmlPrefilter(elem) + wrap[2];
                j = wrap[0];
                for (;j--;) {
                  tmp = tmp.lastChild;
                }
                jQuery.merge(nodes, tmp.childNodes);
                tmp = fragment.firstChild;
                /** @type {string} */
                tmp.textContent = "";
              } else {
                nodes.push(context.createTextNode(elem));
              }
            }
          }
        }
        /** @type {string} */
        fragment.textContent = "";
        /** @type {number} */
        i = 0;
        for (;elem = nodes[i++];) {
          if (values && jQuery.inArray(elem, values) > -1) {
            if (result) {
              result.push(elem);
            }
          } else {
            if (contains = jQuery.contains(elem.ownerDocument, elem), tmp = getAll(fragment.appendChild(elem), "script"), contains && setGlobalEval(tmp), selector) {
              /** @type {number} */
              j = 0;
              for (;elem = tmp[j++];) {
                if (stopParent.test(elem.type || "")) {
                  selector.push(elem);
                }
              }
            }
          }
        }
        return fragment;
      }
      /**
       * @return {?}
       */
      function returnTrue() {
        return true;
      }
      /**
       * @return {?}
       */
      function returnFalse() {
        return false;
      }
      /**
       * @return {?}
       */
      function safeActiveElement() {
        try {
          return elem.activeElement;
        } catch (t) {
        }
      }
      /**
       * @param {Object} object
       * @param {Object} types
       * @param {Object} selector
       * @param {Object} data
       * @param {Object} fn
       * @param {(number|string)} deepDataAndEvents
       * @return {?}
       */
      function on(object, types, selector, data, fn, deepDataAndEvents) {
        var origFn;
        var type;
        if ("object" === ("undefined" == typeof types ? "undefined" : isArray(types))) {
          if ("string" != typeof selector) {
            data = data || selector;
            selector = void 0;
          }
          for (type in types) {
            on(object, type, selector, data, types[type], deepDataAndEvents);
          }
          return object;
        }
        if (null == data && null == fn ? (fn = selector, data = selector = void 0) : null == fn && ("string" == typeof selector ? (fn = data, data = void 0) : (fn = data, data = selector, selector = void 0)), fn === false) {
          /** @type {function (): ?} */
          fn = returnFalse;
        } else {
          if (!fn) {
            return object;
          }
        }
        return 1 === deepDataAndEvents && (origFn = fn, fn = function(event) {
          return jQuery().off(event), origFn.apply(this, arguments);
        }, fn.guid = origFn.guid || (origFn.guid = jQuery.guid++)), object.each(function() {
          jQuery.event.add(this, types, fn, data, selector);
        });
      }
      /**
       * @param {Node} elem
       * @param {Array} content
       * @return {?}
       */
      function manipulationTarget(elem, content) {
        return jQuery.nodeName(elem, "table") && jQuery.nodeName(11 !== content.nodeType ? content : content.firstChild, "tr") ? elem.getElementsByTagName("tbody")[0] || elem.appendChild(elem.ownerDocument.createElement("tbody")) : elem;
      }
      /**
       * @param {Element} elem
       * @return {?}
       */
      function restoreScript(elem) {
        return elem.type = (null !== elem.getAttribute("type")) + "/" + elem.type, elem;
      }
      /**
       * @param {Element} elem
       * @return {?}
       */
      function next(elem) {
        /** @type {(Array.<string>|null)} */
        var match = rscriptTypeMasked.exec(elem.type);
        return match ? elem.type = match[1] : elem.removeAttribute("type"), elem;
      }
      /**
       * @param {string} src
       * @param {string} optgroup
       * @return {undefined}
       */
      function cloneCopyEvent(src, optgroup) {
        var i;
        var valsLength;
        var type;
        var pdataOld;
        var pdataCur;
        var udataOld;
        var udataCur;
        var events;
        if (1 === optgroup.nodeType) {
          if (data_priv.hasData(src) && (pdataOld = data_priv.access(src), pdataCur = data_priv.set(optgroup, pdataOld), events = pdataOld.events)) {
            delete pdataCur.handle;
            pdataCur.events = {};
            for (type in events) {
              /** @type {number} */
              i = 0;
              valsLength = events[type].length;
              for (;i < valsLength;i++) {
                jQuery.event.add(optgroup, type, events[type][i]);
              }
            }
          }
          if (data_user.hasData(src)) {
            udataOld = data_user.access(src);
            udataCur = jQuery.extend({}, udataOld);
            data_user.set(optgroup, udataCur);
          }
        }
      }
      /**
       * @param {Element} src
       * @param {Element} dest
       * @return {undefined}
       */
      function fixInput(src, dest) {
        var _undefined = dest.nodeName.toLowerCase();
        if ("input" === _undefined && manipulation_rcheckableType.test(src.type)) {
          dest.checked = src.checked;
        } else {
          if (!("input" !== _undefined && "textarea" !== _undefined)) {
            dest.defaultValue = src.defaultValue;
          }
        }
      }
      /**
       * @param {Array} elements
       * @param {Object} config
       * @param {Function} callback
       * @param {Object} args
       * @return {?}
       */
      function init(elements, config, callback, args) {
        /** @type {Array} */
        config = source.apply([], config);
        var fragment;
        var first;
        var scripts;
        var hasScripts;
        var node;
        var doc;
        /** @type {number} */
        var i = 0;
        var l = elements.length;
        /** @type {number} */
        var iNoClone = l - 1;
        var html = config[0];
        var isFunction = jQuery.isFunction(html);
        if (isFunction || l > 1 && ("string" == typeof html && (!support.checkClone && BEGIN_TAG_REGEXP.test(html)))) {
          return elements.each(function(i) {
            var el = elements.eq(i);
            if (isFunction) {
              config[0] = html.call(this, i, el.html());
            }
            init(el, config, callback, args);
          });
        }
        if (l && (fragment = parse(config, elements[0].ownerDocument, false, elements, args), first = fragment.firstChild, 1 === fragment.childNodes.length && (fragment = first), first || args)) {
          scripts = jQuery.map(getAll(fragment, "script"), restoreScript);
          hasScripts = scripts.length;
          for (;i < l;i++) {
            node = fragment;
            if (i !== iNoClone) {
              node = jQuery.clone(node, true, true);
              if (hasScripts) {
                jQuery.merge(scripts, getAll(node, "script"));
              }
            }
            callback.call(elements[i], node, i);
          }
          if (hasScripts) {
            doc = scripts[scripts.length - 1].ownerDocument;
            jQuery.map(scripts, next);
            /** @type {number} */
            i = 0;
            for (;i < hasScripts;i++) {
              node = scripts[i];
              if (stopParent.test(node.type || "")) {
                if (!data_priv.access(node, "globalEval")) {
                  if (jQuery.contains(doc, node)) {
                    if (node.src) {
                      if (jQuery._evalUrl) {
                        jQuery._evalUrl(node.src);
                      }
                    } else {
                      jQuery.globalEval(node.textContent.replace(rclass, ""));
                    }
                  }
                }
              }
            }
          }
        }
        return elements;
      }
      /**
       * @param {string} elements
       * @param {?} selector
       * @param {boolean} keepData
       * @return {?}
       */
      function remove(elements, selector, keepData) {
        var elem;
        var elems = selector ? jQuery.filter(selector, elements) : elements;
        /** @type {number} */
        var i = 0;
        for (;null != (elem = elems[i]);i++) {
          if (!keepData) {
            if (!(1 !== elem.nodeType)) {
              jQuery.cleanData(getAll(elem));
            }
          }
          if (elem.parentNode) {
            if (keepData) {
              if (jQuery.contains(elem.ownerDocument, elem)) {
                setGlobalEval(getAll(elem, "script"));
              }
            }
            elem.parentNode.removeChild(elem);
          }
        }
        return elements;
      }
      /**
       * @param {?} name
       * @param {Document} doc
       * @return {?}
       */
      function actualDisplay(name, doc) {
        var el = jQuery(doc.createElement(name)).appendTo(doc.body);
        var displayStyle = jQuery.css(el[0], "display");
        return el.detach(), displayStyle;
      }
      /**
       * @param {?} name
       * @return {?}
       */
      function defaultDisplay(name) {
        var doc = elem;
        var file = files[name];
        return file || (file = actualDisplay(name, doc), "none" !== file && file || (iframe = (iframe || jQuery("<iframe frameborder='0' width='0' height='0'/>")).appendTo(doc.documentElement), doc = iframe[0].contentDocument, doc.write(), doc.close(), file = actualDisplay(name, doc), iframe.detach()), files[name] = file), file;
      }
      /**
       * @param {Object} node
       * @param {string} prop
       * @param {Object} styles
       * @return {?}
       */
      function css(node, prop, styles) {
        var width;
        var minWidth;
        var maxWidth;
        var val;
        var style = node.style;
        return styles = styles || getStyles(node), val = styles ? styles.getPropertyValue(prop) || styles[prop] : void 0, "" !== val && void 0 !== val || (jQuery.contains(node.ownerDocument, node) || (val = jQuery.style(node, prop))), styles && (!support.pixelMarginRight() && (rnumnonpx.test(val) && (rbracket.test(prop) && (width = style.width, minWidth = style.minWidth, maxWidth = style.maxWidth, style.minWidth = style.maxWidth = style.width = val, val = styles.width, style.width = width, style.minWidth = 
        minWidth, style.maxWidth = maxWidth)))), void 0 !== val ? val + "" : val;
      }
      /**
       * @param {?} $timeout
       * @param {Function} hookFn
       * @return {?}
       */
      function addGetHookIf($timeout, hookFn) {
        return{
          /**
           * @return {?}
           */
          get : function() {
            return $timeout() ? void delete this.get : (this.get = hookFn).apply(this, arguments);
          }
        };
      }
      /**
       * @param {string} prop
       * @return {?}
       */
      function vendor(prop) {
        if (prop in style) {
          return prop;
        }
        var capName = prop[0].toUpperCase() + prop.slice(1);
        /** @type {number} */
        var i = cssPrefixes.length;
        for (;i--;) {
          if (prop = cssPrefixes[i] + capName, prop in style) {
            return prop;
          }
        }
      }
      /**
       * @param {string} name
       * @param {?} value
       * @param {Object} object
       * @return {?}
       */
      function set(name, value, object) {
        /** @type {(Array.<string>|null)} */
        var iterator = regexp.exec(value);
        return iterator ? Math.max(0, iterator[2] - (object || 0)) + (iterator[3] || "px") : value;
      }
      /**
       * @param {string} elem
       * @param {string} prop
       * @param {string} extra
       * @param {boolean} isBorderBox
       * @param {?} styles
       * @return {?}
       */
      function augmentWidthOrHeight(elem, prop, extra, isBorderBox, styles) {
        /** @type {number} */
        var i = extra === (isBorderBox ? "border" : "content") ? 4 : "width" === prop ? 1 : 0;
        /** @type {number} */
        var val = 0;
        for (;i < 4;i += 2) {
          if ("margin" === extra) {
            val += jQuery.css(elem, extra + cssExpand[i], true, styles);
          }
          if (isBorderBox) {
            if ("content" === extra) {
              val -= jQuery.css(elem, "padding" + cssExpand[i], true, styles);
            }
            if ("margin" !== extra) {
              val -= jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
            }
          } else {
            val += jQuery.css(elem, "padding" + cssExpand[i], true, styles);
            if ("padding" !== extra) {
              val += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
            }
          }
        }
        return val;
      }
      /**
       * @param {string} elem
       * @param {string} name
       * @param {string} extra
       * @return {?}
       */
      function getWidthOrHeight(elem, name, extra) {
        /** @type {boolean} */
        var valueIsBorderBox = true;
        var val = "width" === name ? elem.offsetWidth : elem.offsetHeight;
        var styles = getStyles(elem);
        /** @type {boolean} */
        var isBorderBox = "border-box" === jQuery.css(elem, "boxSizing", false, styles);
        if (val <= 0 || null == val) {
          if (val = css(elem, name, styles), (val < 0 || null == val) && (val = elem.style[name]), rnumnonpx.test(val)) {
            return val;
          }
          valueIsBorderBox = isBorderBox && (support.boxSizingReliable() || val === elem.style[name]);
          /** @type {number} */
          val = parseFloat(val) || 0;
        }
        return val + augmentWidthOrHeight(elem, name, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles) + "px";
      }
      /**
       * @param {Array} elements
       * @param {boolean} show
       * @return {?}
       */
      function showHide(elements, show) {
        var display;
        var optgroup;
        var hidden;
        /** @type {Array} */
        var values = [];
        /** @type {number} */
        var i = 0;
        var valuesLen = elements.length;
        for (;i < valuesLen;i++) {
          optgroup = elements[i];
          if (optgroup.style) {
            values[i] = data_priv.get(optgroup, "olddisplay");
            display = optgroup.style.display;
            if (show) {
              if (!values[i]) {
                if (!("none" !== display)) {
                  /** @type {string} */
                  optgroup.style.display = "";
                }
              }
              if ("" === optgroup.style.display) {
                if (isHidden(optgroup)) {
                  values[i] = data_priv.access(optgroup, "olddisplay", defaultDisplay(optgroup.nodeName));
                }
              }
            } else {
              hidden = isHidden(optgroup);
              if (!("none" === display && hidden)) {
                data_priv.set(optgroup, "olddisplay", hidden ? display : jQuery.css(optgroup, "display"));
              }
            }
          }
        }
        /** @type {number} */
        i = 0;
        for (;i < valuesLen;i++) {
          optgroup = elements[i];
          if (optgroup.style) {
            if (!(show && ("none" !== optgroup.style.display && "" !== optgroup.style.display))) {
              optgroup.style.display = show ? values[i] || "" : "none";
            }
          }
        }
        return elements;
      }
      /**
       * @param {string} elem
       * @param {?} opt_attributes
       * @param {string} prop
       * @param {(number|string)} end
       * @param {number} easing
       * @return {?}
       */
      function Tween(elem, opt_attributes, prop, end, easing) {
        return new Tween.prototype.init(elem, opt_attributes, prop, end, easing);
      }
      /**
       * @return {?}
       */
      function createFxNow() {
        return self.setTimeout(function() {
          fxNow = void 0;
        }), fxNow = jQuery.now();
      }
      /**
       * @param {string} type
       * @param {boolean} includeWidth
       * @return {?}
       */
      function genFx(type, includeWidth) {
        var which;
        /** @type {number} */
        var i = 0;
        var attrs = {
          height : type
        };
        /** @type {number} */
        includeWidth = includeWidth ? 1 : 0;
        for (;i < 4;i += 2 - includeWidth) {
          which = cssExpand[i];
          attrs["margin" + which] = attrs["padding" + which] = type;
        }
        return includeWidth && (attrs.opacity = attrs.width = type), attrs;
      }
      /**
       * @param {?} value
       * @param {?} prop
       * @param {?} animation
       * @return {?}
       */
      function createTween(value, prop, animation) {
        var tween;
        var codeSegments = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]);
        /** @type {number} */
        var i = 0;
        var valuesLen = codeSegments.length;
        for (;i < valuesLen;i++) {
          if (tween = codeSegments[i].call(animation, prop, value)) {
            return tween;
          }
        }
      }
      /**
       * @param {string} elem
       * @param {Object} props
       * @param {Object} opts
       * @return {undefined}
       */
      function defaultPrefilter(elem, props, opts) {
        var prop;
        var value;
        var thisp;
        var tween;
        var hooks;
        var oldfire;
        var oldDisplay;
        var type;
        var anim = this;
        var orig = {};
        var style = elem.style;
        var hidden = elem.nodeType && isHidden(elem);
        var dataShow = data_priv.get(elem, "fxshow");
        if (!opts.queue) {
          hooks = jQuery._queueHooks(elem, "fx");
          if (null == hooks.unqueued) {
            /** @type {number} */
            hooks.unqueued = 0;
            /** @type {function (): undefined} */
            oldfire = hooks.empty.fire;
            /**
             * @return {undefined}
             */
            hooks.empty.fire = function() {
              if (!hooks.unqueued) {
                oldfire();
              }
            };
          }
          hooks.unqueued++;
          anim.always(function() {
            anim.always(function() {
              hooks.unqueued--;
              if (!jQuery.queue(elem, "fx").length) {
                hooks.empty.fire();
              }
            });
          });
        }
        if (1 === elem.nodeType) {
          if ("height" in props || "width" in props) {
            /** @type {Array} */
            opts.overflow = [style.overflow, style.overflowX, style.overflowY];
            oldDisplay = jQuery.css(elem, "display");
            type = "none" === oldDisplay ? data_priv.get(elem, "olddisplay") || defaultDisplay(elem.nodeName) : oldDisplay;
            if ("inline" === type) {
              if ("none" === jQuery.css(elem, "float")) {
                /** @type {string} */
                style.display = "inline-block";
              }
            }
          }
        }
        if (opts.overflow) {
          /** @type {string} */
          style.overflow = "hidden";
          anim.always(function() {
            style.overflow = opts.overflow[0];
            style.overflowX = opts.overflow[1];
            style.overflowY = opts.overflow[2];
          });
        }
        for (prop in props) {
          if (value = props[prop], rplusequals.exec(value)) {
            if (delete props[prop], thisp = thisp || "toggle" === value, value === (hidden ? "hide" : "show")) {
              if ("show" !== value || (!dataShow || void 0 === dataShow[prop])) {
                continue;
              }
              /** @type {boolean} */
              hidden = true;
            }
            orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop);
          } else {
            oldDisplay = void 0;
          }
        }
        if (jQuery.isEmptyObject(orig)) {
          if ("inline" === ("none" === oldDisplay ? defaultDisplay(elem.nodeName) : oldDisplay)) {
            style.display = oldDisplay;
          }
        } else {
          if (dataShow) {
            if ("hidden" in dataShow) {
              hidden = dataShow.hidden;
            }
          } else {
            dataShow = data_priv.access(elem, "fxshow", {});
          }
          if (thisp) {
            /** @type {boolean} */
            dataShow.hidden = !hidden;
          }
          if (hidden) {
            jQuery(elem).show();
          } else {
            anim.done(function() {
              jQuery(elem).hide();
            });
          }
          anim.done(function() {
            var prop;
            data_priv.remove(elem, "fxshow");
            for (prop in orig) {
              jQuery.style(elem, prop, orig[prop]);
            }
          });
          for (prop in orig) {
            tween = createTween(hidden ? dataShow[prop] : 0, prop, anim);
            if (!(prop in dataShow)) {
              dataShow[prop] = tween.start;
              if (hidden) {
                tween.end = tween.start;
                /** @type {number} */
                tween.start = "width" === prop || "height" === prop ? 1 : 0;
              }
            }
          }
        }
      }
      /**
       * @param {Object} obj
       * @param {Object} views
       * @return {undefined}
       */
      function propFilter(obj, views) {
        var key;
        var name;
        var view;
        var value;
        var hooks;
        for (key in obj) {
          if (name = jQuery.camelCase(key), view = views[name], value = obj[key], jQuery.isArray(value) && (view = value[1], value = obj[key] = value[0]), key !== name && (obj[name] = value, delete obj[key]), hooks = jQuery.cssHooks[name], hooks && "expand" in hooks) {
            value = hooks.expand(value);
            delete obj[name];
            for (key in value) {
              if (!(key in obj)) {
                obj[key] = value[key];
                views[key] = view;
              }
            }
          } else {
            views[name] = view;
          }
        }
      }
      /**
       * @param {string} elem
       * @param {?} properties
       * @param {Object} options
       * @return {?}
       */
      function Animation(elem, properties, options) {
        var that;
        var s;
        /** @type {number} */
        var i = 0;
        var valuesLen = Animation.prefilters.length;
        var deferred = jQuery.Deferred().always(function() {
          delete tick.elem;
        });
        /**
         * @return {?}
         */
        var tick = function() {
          if (s) {
            return false;
          }
          var currentTime = fxNow || createFxNow();
          /** @type {number} */
          var remaining = Math.max(0, animation.startTime + animation.duration - currentTime);
          /** @type {number} */
          var temp = remaining / animation.duration || 0;
          /** @type {number} */
          var percent = 1 - temp;
          /** @type {number} */
          var index = 0;
          var length = animation.tweens.length;
          for (;index < length;index++) {
            animation.tweens[index].run(percent);
          }
          return deferred.notifyWith(elem, [animation, percent, remaining]), percent < 1 && length ? remaining : (deferred.resolveWith(elem, [animation]), false);
        };
        var animation = deferred.promise({
          elem : elem,
          props : jQuery.extend({}, properties),
          opts : jQuery.extend(true, {
            specialEasing : {},
            easing : jQuery.easing._default
          }, options),
          originalProperties : properties,
          originalOptions : options,
          startTime : fxNow || createFxNow(),
          duration : options.duration,
          tweens : [],
          /**
           * @param {string} prop
           * @param {string} end
           * @return {?}
           */
          createTween : function(prop, end) {
            var tween = jQuery.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);
            return animation.tweens.push(tween), tween;
          },
          /**
           * @param {boolean} gotoEnd
           * @return {?}
           */
          stop : function(gotoEnd) {
            /** @type {number} */
            var index = 0;
            var length = gotoEnd ? animation.tweens.length : 0;
            if (s) {
              return this;
            }
            /** @type {boolean} */
            s = true;
            for (;index < length;index++) {
              animation.tweens[index].run(1);
            }
            return gotoEnd ? (deferred.notifyWith(elem, [animation, 1, 0]), deferred.resolveWith(elem, [animation, gotoEnd])) : deferred.rejectWith(elem, [animation, gotoEnd]), this;
          }
        });
        var val = animation.props;
        propFilter(val, animation.opts.specialEasing);
        for (;i < valuesLen;i++) {
          if (that = Animation.prefilters[i].call(animation, elem, val, animation.opts)) {
            return jQuery.isFunction(that.stop) && (jQuery._queueHooks(animation.elem, animation.opts.queue).stop = jQuery.proxy(that.stop, that)), that;
          }
        }
        return jQuery.map(val, createTween, animation), jQuery.isFunction(animation.opts.start) && animation.opts.start.call(elem, animation), jQuery.fx.timer(jQuery.extend(tick, {
          elem : elem,
          anim : animation,
          queue : animation.opts.queue
        })), animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
      }
      /**
       * @param {Element} b
       * @return {?}
       */
      function fn(b) {
        return b.getAttribute && b.getAttribute("class") || "";
      }
      /**
       * @param {Array} structure
       * @return {?}
       */
      function addToPrefiltersOrTransports(structure) {
        return function(selector, fn) {
          if ("string" != typeof selector) {
            /** @type {(Function|string)} */
            fn = selector;
            /** @type {string} */
            selector = "*";
          }
          var node;
          /** @type {number} */
          var i = 0;
          var elem = selector.toLowerCase().match(core_rnotwhite) || [];
          if (jQuery.isFunction(fn)) {
            for (;node = elem[i++];) {
              if ("+" === node[0]) {
                node = node.slice(1) || "*";
                (structure[node] = structure[node] || []).unshift(fn);
              } else {
                (structure[node] = structure[node] || []).push(fn);
              }
            }
          }
        };
      }
      /**
       * @param {?} structure
       * @param {?} options
       * @param {Object} originalOptions
       * @param {?} jqXHR
       * @return {?}
       */
      function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
        /**
         * @param {string} key
         * @return {?}
         */
        function inspect(key) {
          var oldName;
          return old[key] = true, jQuery.each(structure[key] || [], function(dataAndEvents, prefilterOrFactory) {
            var name = prefilterOrFactory(options, originalOptions, jqXHR);
            return "string" != typeof name || (seekingTransport || old[name]) ? seekingTransport ? !(oldName = name) : void 0 : (options.dataTypes.unshift(name), inspect(name), false);
          }), oldName;
        }
        var old = {};
        /** @type {boolean} */
        var seekingTransport = structure === transports;
        return inspect(options.dataTypes[0]) || !old["*"] && inspect("*");
      }
      /**
       * @param {(Object|string)} target
       * @param {Object} src
       * @return {?}
       */
      function ajaxExtend(target, src) {
        var key;
        var deep;
        var flatOptions = jQuery.ajaxSettings.flatOptions || {};
        for (key in src) {
          if (void 0 !== src[key]) {
            (flatOptions[key] ? target : deep || (deep = {}))[key] = src[key];
          }
        }
        return deep && jQuery.extend(true, target, deep), target;
      }
      /**
       * @param {Object} s
       * @param {XMLHttpRequest} jqXHR
       * @param {Object} responses
       * @return {?}
       */
      function ajaxHandleResponses(s, jqXHR, responses) {
        var ct;
        var type;
        var finalDataType;
        var firstDataType;
        var contents = s.contents;
        var dataTypes = s.dataTypes;
        for (;"*" === dataTypes[0];) {
          dataTypes.shift();
          if (void 0 === ct) {
            ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
          }
        }
        if (ct) {
          for (type in contents) {
            if (contents[type] && contents[type].test(ct)) {
              dataTypes.unshift(type);
              break;
            }
          }
        }
        if (dataTypes[0] in responses) {
          finalDataType = dataTypes[0];
        } else {
          for (type in responses) {
            if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
              /** @type {string} */
              finalDataType = type;
              break;
            }
            if (!firstDataType) {
              /** @type {string} */
              firstDataType = type;
            }
          }
          /** @type {(string|undefined)} */
          finalDataType = finalDataType || firstDataType;
        }
        if (finalDataType) {
          return finalDataType !== dataTypes[0] && dataTypes.unshift(finalDataType), responses[finalDataType];
        }
      }
      /**
       * @param {Object} s
       * @param {(Object|string)} response
       * @param {?} jqXHR
       * @param {Object} isSuccess
       * @return {?}
       */
      function ajaxConvert(s, response, jqXHR, isSuccess) {
        var conv2;
        var current;
        var conv;
        var tmp;
        var prev;
        var converters = {};
        var dataTypes = s.dataTypes.slice();
        if (dataTypes[1]) {
          for (conv in s.converters) {
            converters[conv.toLowerCase()] = s.converters[conv];
          }
        }
        current = dataTypes.shift();
        for (;current;) {
          if (s.responseFields[current] && (jqXHR[s.responseFields[current]] = response), !prev && (isSuccess && (s.dataFilter && (response = s.dataFilter(response, s.dataType)))), prev = current, current = dataTypes.shift()) {
            if ("*" === current) {
              current = prev;
            } else {
              if ("*" !== prev && prev !== current) {
                if (conv = converters[prev + " " + current] || converters["* " + current], !conv) {
                  for (conv2 in converters) {
                    if (tmp = conv2.split(" "), tmp[1] === current && (conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]])) {
                      if (conv === true) {
                        conv = converters[conv2];
                      } else {
                        if (converters[conv2] !== true) {
                          /** @type {string} */
                          current = tmp[0];
                          dataTypes.unshift(tmp[1]);
                        }
                      }
                      break;
                    }
                  }
                }
                if (conv !== true) {
                  if (conv && s["throws"]) {
                    response = conv(response);
                  } else {
                    try {
                      response = conv(response);
                    } catch (e) {
                      return{
                        state : "parsererror",
                        error : conv ? e : "No conversion from " + prev + " to " + current
                      };
                    }
                  }
                }
              }
            }
          }
        }
        return{
          state : "success",
          data : response
        };
      }
      /**
       * @param {string} prefix
       * @param {string} optgroup
       * @param {boolean} traditional
       * @param {Function} add
       * @return {undefined}
       */
      function buildParams(prefix, optgroup, traditional, add) {
        var name;
        if (jQuery.isArray(optgroup)) {
          jQuery.each(optgroup, function(i, v) {
            if (traditional || rmargin.test(prefix)) {
              add(prefix, v);
            } else {
              buildParams(prefix + "[" + ("object" === ("undefined" == typeof v ? "undefined" : isArray(v)) && null != v ? i : "") + "]", v, traditional, add);
            }
          });
        } else {
          if (traditional || "object" !== jQuery.type(optgroup)) {
            add(prefix, optgroup);
          } else {
            for (name in optgroup) {
              buildParams(prefix + "[" + name + "]", optgroup[name], traditional, add);
            }
          }
        }
      }
      /**
       * @param {Object} element
       * @return {?}
       */
      function getWindow(element) {
        return jQuery.isWindow(element) ? element : 9 === element.nodeType && element.defaultView;
      }
      /** @type {Array} */
      var core_deletedIds = [];
      var elem = self.document;
      /** @type {function (this:(Array.<T>|string|{length: number}), *=, *=): Array.<T>} */
      var core_slice = core_deletedIds.slice;
      /** @type {function (this:*, ...[*]): Array} */
      var source = core_deletedIds.concat;
      /** @type {function (this:(Array.<T>|{length: number}), ...[T]): number} */
      var core_push = core_deletedIds.push;
      /** @type {function (this:(Array.<T>|string|{length: number}), T, number=): number} */
      var core_indexOf = core_deletedIds.indexOf;
      var class2type = {};
      /** @type {function (this:*): string} */
      var core_toString = class2type.toString;
      /** @type {function (this:Object, *): boolean} */
      var core_hasOwn = class2type.hasOwnProperty;
      var support = {};
      /** @type {string} */
      var core_version = "2.2.4";
      /**
       * @param {string} elem
       * @param {?} opt_attributes
       * @return {?}
       */
      var jQuery = function $(elem, opt_attributes) {
        return new $.fn.init(elem, opt_attributes);
      };
      /** @type {RegExp} */
      var badChars = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
      /** @type {RegExp} */
      var rmsPrefix = /^-ms-/;
      /** @type {RegExp} */
      var emptyParagraphRegexp = /-([\da-z])/gi;
      /**
       * @param {?} all
       * @param {string} letter
       * @return {?}
       */
      var fcamelCase = function(all, letter) {
        return letter.toUpperCase();
      };
      jQuery.fn = jQuery.prototype = {
        jquery : core_version,
        /** @type {function (string, ?): ?} */
        constructor : jQuery,
        selector : "",
        length : 0,
        /**
         * @return {?}
         */
        toArray : function() {
          return core_slice.call(this);
        },
        /**
         * @param {string} name
         * @return {?}
         */
        get : function(name) {
          return null != name ? name < 0 ? this[name + this.length] : this[name] : core_slice.call(this);
        },
        /**
         * @param {Array} elems
         * @return {?}
         */
        pushStack : function(elems) {
          var ret = jQuery.merge(this.constructor(), elems);
          return ret.prevObject = this, ret.context = this.context, ret;
        },
        /**
         * @param {Function} opt_attributes
         * @return {?}
         */
        each : function(opt_attributes) {
          return jQuery.each(this, opt_attributes);
        },
        /**
         * @param {Function} callback
         * @return {?}
         */
        map : function(callback) {
          return this.pushStack(jQuery.map(this, function(el, operation) {
            return callback.call(el, operation, el);
          }));
        },
        /**
         * @return {?}
         */
        slice : function() {
          return this.pushStack(core_slice.apply(this, arguments));
        },
        /**
         * @return {?}
         */
        first : function() {
          return this.eq(0);
        },
        /**
         * @return {?}
         */
        last : function() {
          return this.eq(-1);
        },
        /**
         * @param {number} i
         * @return {?}
         */
        eq : function(i) {
          var len = this.length;
          var j = +i + (i < 0 ? len : 0);
          return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
        },
        /**
         * @return {?}
         */
        end : function() {
          return this.prevObject || this.constructor();
        },
        /** @type {function (this:(Array.<T>|{length: number}), ...[T]): number} */
        push : core_push,
        /** @type {function (this:(Array.<T>|{length: number}), function (T, T): number=): ?} */
        sort : core_deletedIds.sort,
        /** @type {function (this:(Array.<T>|{length: number}), *=, *=, ...[T]): Array.<T>} */
        splice : core_deletedIds.splice
      };
      /** @type {function (): ?} */
      jQuery.extend = jQuery.fn.extend = function() {
        var options;
        var name;
        var src;
        var copy;
        var copyIsArray;
        var clone;
        var target = arguments[0] || {};
        /** @type {number} */
        var i = 1;
        /** @type {number} */
        var l = arguments.length;
        /** @type {boolean} */
        var deep = false;
        if ("boolean" == typeof target) {
          /** @type {boolean} */
          deep = target;
          target = arguments[i] || {};
          i++;
        }
        if (!("object" === ("undefined" == typeof target ? "undefined" : isArray(target)))) {
          if (!jQuery.isFunction(target)) {
            target = {};
          }
        }
        if (i === l) {
          target = this;
          i--;
        }
        for (;i < l;i++) {
          if (null != (options = arguments[i])) {
            for (name in options) {
              src = target[name];
              copy = options[name];
              if (target !== copy) {
                if (deep && (copy && (jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy))))) {
                  if (copyIsArray) {
                    /** @type {boolean} */
                    copyIsArray = false;
                    clone = src && jQuery.isArray(src) ? src : [];
                  } else {
                    clone = src && jQuery.isPlainObject(src) ? src : {};
                  }
                  target[name] = jQuery.extend(deep, clone, copy);
                } else {
                  if (void 0 !== copy) {
                    target[name] = copy;
                  }
                }
              }
            }
          }
        }
        return target;
      };
      jQuery.extend({
        expando : "jQuery" + (core_version + Math.random()).replace(/\D/g, ""),
        isReady : true,
        /**
         * @param {string} name
         * @return {?}
         */
        error : function(name) {
          throw new Error(name);
        },
        /**
         * @return {undefined}
         */
        noop : function() {
        },
        /**
         * @param {string} obj
         * @return {?}
         */
        isFunction : function(obj) {
          return "function" === jQuery.type(obj);
        },
        /** @type {function (*): boolean} */
        isArray : Array.isArray,
        /**
         * @param {Object} obj
         * @return {?}
         */
        isWindow : function(obj) {
          return null != obj && obj === obj.window;
        },
        /**
         * @param {Object} value
         * @return {?}
         */
        isNumeric : function(value) {
          var val = value && value.toString();
          return!jQuery.isArray(value) && val - parseFloat(val) + 1 >= 0;
        },
        /**
         * @param {string} obj
         * @return {?}
         */
        isPlainObject : function(obj) {
          var key;
          if ("object" !== jQuery.type(obj) || (obj.nodeType || jQuery.isWindow(obj))) {
            return false;
          }
          if (obj.constructor && (!core_hasOwn.call(obj, "constructor") && !core_hasOwn.call(obj.constructor.prototype || {}, "isPrototypeOf"))) {
            return false;
          }
          for (key in obj) {
          }
          return void 0 === key || core_hasOwn.call(obj, key);
        },
        /**
         * @param {?} obj
         * @return {?}
         */
        isEmptyObject : function(obj) {
          var prop;
          for (prop in obj) {
            return false;
          }
          return true;
        },
        /**
         * @param {string} name
         * @return {?}
         */
        type : function(name) {
          return null == name ? name + "" : "object" === ("undefined" == typeof name ? "undefined" : isArray(name)) || "function" == typeof name ? class2type[core_toString.call(name)] || "object" : "undefined" == typeof name ? "undefined" : isArray(name);
        },
        /**
         * @param {string} code
         * @return {undefined}
         */
        globalEval : function(code) {
          var script;
          /** @type {function (string): *} */
          var indirect = eval;
          code = jQuery.trim(code);
          if (code) {
            if (1 === code.indexOf("use strict")) {
              script = elem.createElement("script");
              /** @type {string} */
              script.text = code;
              elem.head.appendChild(script).parentNode.removeChild(script);
            } else {
              indirect(code);
            }
          }
        },
        /**
         * @param {string} string
         * @return {?}
         */
        camelCase : function(string) {
          return string.replace(rmsPrefix, "ms-").replace(emptyParagraphRegexp, fcamelCase);
        },
        /**
         * @param {Node} elem
         * @param {string} name
         * @return {?}
         */
        nodeName : function(elem, name) {
          return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
        },
        /**
         * @param {Function} opt_attributes
         * @param {Function} fn
         * @return {?}
         */
        each : function(opt_attributes, fn) {
          var valsLength;
          /** @type {number} */
          var i = 0;
          if (isArraylike(opt_attributes)) {
            valsLength = opt_attributes.length;
            for (;i < valsLength && fn.call(opt_attributes[i], i, opt_attributes[i]) !== false;i++) {
            }
          } else {
            for (i in opt_attributes) {
              if (fn.call(opt_attributes[i], i, opt_attributes[i]) === false) {
                break;
              }
            }
          }
          return opt_attributes;
        },
        /**
         * @param {Object} str
         * @return {?}
         */
        trim : function(str) {
          return null == str ? "" : (str + "").replace(badChars, "");
        },
        /**
         * @param {?} arr
         * @param {Array} results
         * @return {?}
         */
        makeArray : function(arr, results) {
          var ret = results || [];
          return null != arr && (isArraylike(Object(arr)) ? jQuery.merge(ret, "string" == typeof arr ? [arr] : arr) : core_push.call(ret, arr)), ret;
        },
        /**
         * @param {?} elem
         * @param {?} arr
         * @param {?} i
         * @return {?}
         */
        inArray : function(elem, arr, i) {
          return null == arr ? -1 : core_indexOf.call(arr, elem, i);
        },
        /**
         * @param {Array} first
         * @param {?} second
         * @return {?}
         */
        merge : function(first, second) {
          /** @type {number} */
          var subLn = +second.length;
          /** @type {number} */
          var j = 0;
          var i = first.length;
          for (;j < subLn;j++) {
            first[i++] = second[j];
          }
          return first.length = i, first;
        },
        /**
         * @param {Array} elems
         * @param {Function} callback
         * @param {?} inv
         * @return {?}
         */
        grep : function(elems, callback, inv) {
          var val;
          /** @type {Array} */
          var ret = [];
          /** @type {number} */
          var i = 0;
          var length = elems.length;
          /** @type {boolean} */
          var skip = !inv;
          for (;i < length;i++) {
            /** @type {boolean} */
            val = !callback(elems[i], i);
            if (val !== skip) {
              ret.push(elems[i]);
            }
          }
          return ret;
        },
        /**
         * @param {Object} elems
         * @param {Function} callback
         * @param {Object} arg
         * @return {?}
         */
        map : function(elems, callback, arg) {
          var valsLength;
          var value;
          /** @type {number} */
          var i = 0;
          /** @type {Array} */
          var n = [];
          if (isArraylike(elems)) {
            valsLength = elems.length;
            for (;i < valsLength;i++) {
              value = callback(elems[i], i, arg);
              if (null != value) {
                n.push(value);
              }
            }
          } else {
            for (i in elems) {
              value = callback(elems[i], i, arg);
              if (null != value) {
                n.push(value);
              }
            }
          }
          return source.apply([], n);
        },
        guid : 1,
        /**
         * @param {Function} fn
         * @param {(Function|string)} context
         * @return {?}
         */
        proxy : function proxy(fn, context) {
          var tmp;
          var args;
          var wrapper;
          if ("string" == typeof context && (tmp = fn[context], context = fn, fn = tmp), jQuery.isFunction(fn)) {
            return args = core_slice.call(arguments, 2), wrapper = function() {
              return fn.apply(context || this, args.concat(core_slice.call(arguments)));
            }, wrapper.guid = fn.guid = fn.guid || jQuery.guid++, wrapper;
          }
        },
        /** @type {function (): number} */
        now : Date.now,
        support : support
      });
      if ("function" == typeof Symbol) {
        jQuery.fn[Symbol.iterator] = core_deletedIds[Symbol.iterator];
      }
      jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(dataAndEvents, m3) {
        class2type["[object " + m3 + "]"] = m3.toLowerCase();
      });
      var Sizzle = function(global) {
        /**
         * @param {string} selector
         * @param {Object} context
         * @param {Array} results
         * @param {Array} seed
         * @return {?}
         */
        function Sizzle(selector, context, results, seed) {
          var m;
          var i;
          var elem;
          var ret;
          var l;
          var match;
          var groups;
          var elements;
          var c = context && context.ownerDocument;
          var midline = context ? context.nodeType : 9;
          if (results = results || [], "string" != typeof selector || (!selector || 1 !== midline && (9 !== midline && 11 !== midline))) {
            return results;
          }
          if (!seed && ((context ? context.ownerDocument || context : preferredDoc) !== doc && setDocument(context), context = context || doc, documentIsHTML)) {
            if (11 !== midline && (match = rquickExpr.exec(selector))) {
              if (m = match[1]) {
                if (9 === midline) {
                  if (!(elem = context.getElementById(m))) {
                    return results;
                  }
                  if (elem.id === m) {
                    return results.push(elem), results;
                  }
                } else {
                  if (c && ((elem = c.getElementById(m)) && (contains(context, elem) && elem.id === m))) {
                    return results.push(elem), results;
                  }
                }
              } else {
                if (match[2]) {
                  return push.apply(results, context.getElementsByTagName(selector)), results;
                }
                if ((m = match[3]) && (support.getElementsByClassName && context.getElementsByClassName)) {
                  return push.apply(results, context.getElementsByClassName(m)), results;
                }
              }
            }
            if (support.qsa && (!compilerCache[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector)))) {
              if (1 !== midline) {
                /** @type {Object} */
                c = context;
                /** @type {string} */
                elements = selector;
              } else {
                if ("object" !== context.nodeName.toLowerCase()) {
                  if (ret = context.getAttribute("id")) {
                    ret = ret.replace(rreturn, "\\$&");
                  } else {
                    context.setAttribute("id", ret = expando);
                  }
                  groups = tokenize(selector);
                  i = groups.length;
                  /** @type {string} */
                  l = ridentifier.test(ret) ? "#" + ret : "[id='" + ret + "']";
                  for (;i--;) {
                    /** @type {string} */
                    groups[i] = l + " " + toSelector(groups[i]);
                  }
                  elements = groups.join(",");
                  c = rsibling.test(selector) && testContext(context.parentNode) || context;
                }
              }
              if (elements) {
                try {
                  return push.apply(results, c.querySelectorAll(elements)), results;
                } catch (g) {
                } finally {
                  if (ret === expando) {
                    context.removeAttribute("id");
                  }
                }
              }
            }
          }
          return select(selector.replace(rtrim, "$1"), context, results, seed);
        }
        /**
         * @return {?}
         */
        function createCache() {
          /**
           * @param {string} key
           * @param {?} value
           * @return {?}
           */
          function cache(key, value) {
            return buf.push(key + " ") > Expr.cacheLength && delete cache[buf.shift()], cache[key + " "] = value;
          }
          /** @type {Array} */
          var buf = [];
          return cache;
        }
        /**
         * @param {Function} fn
         * @return {?}
         */
        function markFunction(fn) {
          return fn[expando] = true, fn;
        }
        /**
         * @param {Function} fn
         * @return {?}
         */
        function assert(fn) {
          var t = doc.createElement("div");
          try {
            return!!fn(t);
          } catch (i) {
            return false;
          } finally {
            if (t.parentNode) {
              t.parentNode.removeChild(t);
            }
            /** @type {null} */
            t = null;
          }
        }
        /**
         * @param {string} attrs
         * @param {Function} handler
         * @return {undefined}
         */
        function addHandle(attrs, handler) {
          var arr = attrs.split("|");
          var i = arr.length;
          for (;i--;) {
            /** @type {Function} */
            Expr.attrHandle[arr[i]] = handler;
          }
        }
        /**
         * @param {Object} a
         * @param {Object} b
         * @return {?}
         */
        function siblingCheck(a, b) {
          var cur = b && a;
          var diff = cur && (1 === a.nodeType && (1 === b.nodeType && (~b.sourceIndex || MAX_NEGATIVE) - (~a.sourceIndex || MAX_NEGATIVE)));
          if (diff) {
            return diff;
          }
          if (cur) {
            for (;cur = cur.nextSibling;) {
              if (cur === b) {
                return-1;
              }
            }
          }
          return a ? 1 : -1;
        }
        /**
         * @param {?} type
         * @return {?}
         */
        function createInputPseudo(type) {
          return function(elem) {
            var b = elem.nodeName.toLowerCase();
            return "input" === b && elem.type === type;
          };
        }
        /**
         * @param {?} type
         * @return {?}
         */
        function createButtonPseudo(type) {
          return function(elem) {
            var NULL = elem.nodeName.toLowerCase();
            return("input" === NULL || "button" === NULL) && elem.type === type;
          };
        }
        /**
         * @param {Function} fn
         * @return {?}
         */
        function createPositionalPseudo(fn) {
          return markFunction(function(argument) {
            return argument = +argument, markFunction(function(seed, matches) {
              var j;
              var matchIndexes = fn([], seed.length, argument);
              var i = matchIndexes.length;
              for (;i--;) {
                if (seed[j = matchIndexes[i]]) {
                  /** @type {boolean} */
                  seed[j] = !(matches[j] = seed[j]);
                }
              }
            });
          });
        }
        /**
         * @param {Object} context
         * @return {?}
         */
        function testContext(context) {
          return context && ("undefined" != typeof context.getElementsByTagName && context);
        }
        /**
         * @return {undefined}
         */
        function setFilters() {
        }
        /**
         * @param {Array} tokens
         * @return {?}
         */
        function toSelector(tokens) {
          /** @type {number} */
          var ti = 0;
          var nTokens = tokens.length;
          /** @type {string} */
          var selector = "";
          for (;ti < nTokens;ti++) {
            selector += tokens[ti].value;
          }
          return selector;
        }
        /**
         * @param {Function} matcher
         * @param {Object} combinator
         * @param {boolean} dataAndEvents
         * @return {?}
         */
        function addCombinator(matcher, combinator, dataAndEvents) {
          var dir = combinator.dir;
          var s = dataAndEvents && "parentNode" === dir;
          /** @type {number} */
          var doneName = done++;
          return combinator.first ? function(elem, context, xml) {
            for (;elem = elem[dir];) {
              if (1 === elem.nodeType || s) {
                return matcher(elem, context, xml);
              }
            }
          } : function(elem, context, xml) {
            var oldCache;
            var outerCache;
            var callbacks;
            /** @type {Array} */
            var newCache = [dirruns, doneName];
            if (xml) {
              for (;elem = elem[dir];) {
                if ((1 === elem.nodeType || s) && matcher(elem, context, xml)) {
                  return true;
                }
              }
            } else {
              for (;elem = elem[dir];) {
                if (1 === elem.nodeType || s) {
                  if (callbacks = elem[expando] || (elem[expando] = {}), outerCache = callbacks[elem.uniqueID] || (callbacks[elem.uniqueID] = {}), (oldCache = outerCache[dir]) && (oldCache[0] === dirruns && oldCache[1] === doneName)) {
                    return newCache[2] = oldCache[2];
                  }
                  if (outerCache[dir] = newCache, newCache[2] = matcher(elem, context, xml)) {
                    return true;
                  }
                }
              }
            }
          };
        }
        /**
         * @param {Array} matchers
         * @return {?}
         */
        function elementMatcher(matchers) {
          return matchers.length > 1 ? function(elem, context, xml) {
            var i = matchers.length;
            for (;i--;) {
              if (!matchers[i](elem, context, xml)) {
                return false;
              }
            }
            return true;
          } : matchers[0];
        }
        /**
         * @param {string} selector
         * @param {Array} contexts
         * @param {?} results
         * @return {?}
         */
        function multipleContexts(selector, contexts, results) {
          /** @type {number} */
          var i = 0;
          var len = contexts.length;
          for (;i < len;i++) {
            Sizzle(selector, contexts[i], results);
          }
          return results;
        }
        /**
         * @param {Array} unmatched
         * @param {Object} map
         * @param {Function} filter
         * @param {Object} context
         * @param {?} xml
         * @return {?}
         */
        function condense(unmatched, map, filter, context, xml) {
          var elem;
          /** @type {Array} */
          var newUnmatched = [];
          /** @type {number} */
          var i = 0;
          var len = unmatched.length;
          /** @type {boolean} */
          var c = null != map;
          for (;i < len;i++) {
            if (elem = unmatched[i]) {
              if (!(filter && !filter(elem, context, xml))) {
                newUnmatched.push(elem);
                if (c) {
                  map.push(i);
                }
              }
            }
          }
          return newUnmatched;
        }
        /**
         * @param {string} preFilter
         * @param {Object} selector
         * @param {boolean} matcher
         * @param {Object} postFilter
         * @param {Object} postFinder
         * @param {Object} postSelector
         * @return {?}
         */
        function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
          return postFilter && (!postFilter[expando] && (postFilter = setMatcher(postFilter))), postFinder && (!postFinder[expando] && (postFinder = setMatcher(postFinder, postSelector))), markFunction(function(seed, results, context, xml) {
            var optgroup;
            var i;
            var elem;
            /** @type {Array} */
            var preMap = [];
            /** @type {Array} */
            var postMap = [];
            var preexisting = results.length;
            var elems = seed || multipleContexts(selector || "*", context.nodeType ? [context] : context, []);
            var matcherIn = !preFilter || !seed && selector ? elems : condense(elems, preMap, preFilter, context, xml);
            var matcherOut = matcher ? postFinder || (seed ? preFilter : preexisting || postFilter) ? [] : results : matcherIn;
            if (matcher && matcher(matcherIn, matcherOut, context, xml), postFilter) {
              optgroup = condense(matcherOut, postMap);
              postFilter(optgroup, [], context, xml);
              i = optgroup.length;
              for (;i--;) {
                if (elem = optgroup[i]) {
                  /** @type {boolean} */
                  matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem);
                }
              }
            }
            if (seed) {
              if (postFinder || preFilter) {
                if (postFinder) {
                  /** @type {Array} */
                  optgroup = [];
                  i = matcherOut.length;
                  for (;i--;) {
                    if (elem = matcherOut[i]) {
                      optgroup.push(matcherIn[i] = elem);
                    }
                  }
                  postFinder(null, matcherOut = [], optgroup, xml);
                }
                i = matcherOut.length;
                for (;i--;) {
                  if (elem = matcherOut[i]) {
                    if ((optgroup = postFinder ? sortFunction(seed, elem) : preMap[i]) > -1) {
                      /** @type {boolean} */
                      seed[optgroup] = !(results[optgroup] = elem);
                    }
                  }
                }
              }
            } else {
              matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut);
              if (postFinder) {
                postFinder(null, results, matcherOut, xml);
              } else {
                push.apply(results, matcherOut);
              }
            }
          });
        }
        /**
         * @param {Object} tokens
         * @return {?}
         */
        function matcherFromTokens(tokens) {
          var a;
          var matcher;
          var j;
          var len = tokens.length;
          var leadingRelative = Expr.relative[tokens[0].type];
          var implicitRelative = leadingRelative || Expr.relative[" "];
          /** @type {number} */
          var i = leadingRelative ? 1 : 0;
          var matchContext = addCombinator(function(out) {
            return out === a;
          }, implicitRelative, true);
          var matchAnyContext = addCombinator(function(walkers) {
            return sortFunction(a, walkers) > -1;
          }, implicitRelative, true);
          /** @type {Array} */
          var matchers = [function(elem, context, xml) {
            var s = !leadingRelative && (xml || context !== queuedFn) || ((a = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
            return a = null, s;
          }];
          for (;i < len;i++) {
            if (matcher = Expr.relative[tokens[i].type]) {
              /** @type {Array} */
              matchers = [addCombinator(elementMatcher(matchers), matcher)];
            } else {
              if (matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches), matcher[expando]) {
                /** @type {number} */
                j = ++i;
                for (;j < len && !Expr.relative[tokens[j].type];j++) {
                }
                return setMatcher(i > 1 && elementMatcher(matchers), i > 1 && toSelector(tokens.slice(0, i - 1).concat({
                  value : " " === tokens[i - 2].type ? "*" : ""
                })).replace(rtrim, "$1"), matcher, i < j && matcherFromTokens(tokens.slice(i, j)), j < len && matcherFromTokens(tokens = tokens.slice(j)), j < len && toSelector(tokens));
              }
              matchers.push(matcher);
            }
          }
          return elementMatcher(matchers);
        }
        /**
         * @param {Array} elementMatchers
         * @param {Array} setMatchers
         * @return {?}
         */
        function matcherFromGroupMatchers(elementMatchers, setMatchers) {
          /** @type {boolean} */
          var bySet = setMatchers.length > 0;
          /** @type {boolean} */
          var triggerElem = elementMatchers.length > 0;
          /**
           * @param {HTMLElement} dataAndEvents
           * @param {undefined} xml
           * @param {boolean} context
           * @param {Object} results
           * @param {Object} seed
           * @return {?}
           */
          var superMatcher = function(dataAndEvents, xml, context, results, seed) {
            var elem;
            var j;
            var matcher;
            /** @type {number} */
            var matchedCount = 0;
            /** @type {string} */
            var i = "0";
            var scripts = dataAndEvents && [];
            /** @type {Array} */
            var setMatched = [];
            var fn = queuedFn;
            var unmatched = dataAndEvents || triggerElem && Expr.find.TAG("*", seed);
            var dirrunsUnique = dirruns += null == fn ? 1 : Math.random() || 0.1;
            var len = unmatched.length;
            if (seed) {
              queuedFn = xml === doc || (xml || seed);
            }
            for (;i !== len && null != (elem = unmatched[i]);i++) {
              if (triggerElem && elem) {
                /** @type {number} */
                j = 0;
                if (!xml) {
                  if (!(elem.ownerDocument === doc)) {
                    setDocument(elem);
                    /** @type {boolean} */
                    context = !documentIsHTML;
                  }
                }
                for (;matcher = elementMatchers[j++];) {
                  if (matcher(elem, xml || doc, context)) {
                    results.push(elem);
                    break;
                  }
                }
                if (seed) {
                  dirruns = dirrunsUnique;
                }
              }
              if (bySet) {
                if (elem = !matcher && elem) {
                  matchedCount--;
                }
                if (dataAndEvents) {
                  scripts.push(elem);
                }
              }
            }
            if (matchedCount += i, bySet && i !== matchedCount) {
              /** @type {number} */
              j = 0;
              for (;matcher = setMatchers[j++];) {
                matcher(scripts, setMatched, xml, context);
              }
              if (dataAndEvents) {
                if (matchedCount > 0) {
                  for (;i--;) {
                    if (!scripts[i]) {
                      if (!setMatched[i]) {
                        setMatched[i] = pop.call(results);
                      }
                    }
                  }
                }
                setMatched = condense(setMatched);
              }
              push.apply(results, setMatched);
              if (seed) {
                if (!dataAndEvents) {
                  if (setMatched.length > 0) {
                    if (matchedCount + setMatchers.length > 1) {
                      Sizzle.uniqueSort(results);
                    }
                  }
                }
              }
            }
            return seed && (dirruns = dirrunsUnique, queuedFn = fn), scripts;
          };
          return bySet ? markFunction(superMatcher) : superMatcher;
        }
        var i;
        var support;
        var Expr;
        var getText;
        var isXML;
        var tokenize;
        var compile;
        var select;
        var queuedFn;
        var sortInput;
        var D;
        var setDocument;
        var doc;
        var docElem;
        var documentIsHTML;
        var rbuggyQSA;
        var rbuggyMatches;
        var matches;
        var contains;
        /** @type {string} */
        var expando = "sizzle" + 1 * new Date;
        var preferredDoc = global.document;
        /** @type {number} */
        var dirruns = 0;
        /** @type {number} */
        var done = 0;
        var classCache = createCache();
        var tokenCache = createCache();
        var compilerCache = createCache();
        /**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        var sortOrder = function(a, b) {
          return a === b && (D = true), 0;
        };
        /** @type {number} */
        var MAX_NEGATIVE = 1 << 31;
        /** @type {function (this:Object, *): boolean} */
        var hasOwn = {}.hasOwnProperty;
        /** @type {Array} */
        var arr = [];
        /** @type {function (this:(Array.<T>|{length: number})): T} */
        var pop = arr.pop;
        /** @type {function (this:(Array.<T>|{length: number}), ...[T]): number} */
        var push_native = arr.push;
        /** @type {function (this:(Array.<T>|{length: number}), ...[T]): number} */
        var push = arr.push;
        /** @type {function (this:(Array.<T>|string|{length: number}), *=, *=): Array.<T>} */
        var slice = arr.slice;
        /**
         * @param {Object} a
         * @param {?} obj
         * @return {?}
         */
        var sortFunction = function(a, obj) {
          /** @type {number} */
          var i = 0;
          var aLength = a.length;
          for (;i < aLength;i++) {
            if (a[i] === obj) {
              return i;
            }
          }
          return-1;
        };
        /** @type {string} */
        var booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped";
        /** @type {string} */
        var whitespace = "[\\x20\\t\\r\\n\\f]";
        /** @type {string} */
        var ele = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+";
        /** @type {string} */
        var attributes = "\\[" + whitespace + "*(" + ele + ")(?:" + whitespace + "*([*^$|!~]?=)" + whitespace + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ele + "))|)" + whitespace + "*\\]";
        /** @type {string} */
        var pseudos = ":(" + ele + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|.*)\\)|)";
        /** @type {RegExp} */
        var rclass = new RegExp(whitespace + "+", "g");
        /** @type {RegExp} */
        var rtrim = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g");
        /** @type {RegExp} */
        var rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*");
        /** @type {RegExp} */
        var rcombinators = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*");
        /** @type {RegExp} */
        var rattributeQuotes = new RegExp("=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g");
        /** @type {RegExp} */
        var rpseudo = new RegExp(pseudos);
        /** @type {RegExp} */
        var ridentifier = new RegExp("^" + ele + "$");
        var matchExpr = {
          ID : new RegExp("^#(" + ele + ")"),
          CLASS : new RegExp("^\\.(" + ele + ")"),
          TAG : new RegExp("^(" + ele + "|[*])"),
          ATTR : new RegExp("^" + attributes),
          PSEUDO : new RegExp("^" + pseudos),
          CHILD : new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i"),
          bool : new RegExp("^(?:" + booleans + ")$", "i"),
          needsContext : new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
        };
        /** @type {RegExp} */
        var rinputs = /^(?:input|select|textarea|button)$/i;
        /** @type {RegExp} */
        var rheader = /^h\d$/i;
        /** @type {RegExp} */
        var rnative = /^[^{]+\{\s*\[native \w/;
        /** @type {RegExp} */
        var rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/;
        /** @type {RegExp} */
        var rsibling = /[+~]/;
        /** @type {RegExp} */
        var rreturn = /'|\\/g;
        /** @type {RegExp} */
        var runescape = new RegExp("\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig");
        /**
         * @param {?} _
         * @param {(number|string)} escaped
         * @param {boolean} escapedWhitespace
         * @return {?}
         */
        var funescape = function(_, escaped, escapedWhitespace) {
          /** @type {number} */
          var high = "0x" + escaped - 65536;
          return high !== high || escapedWhitespace ? escaped : high < 0 ? String.fromCharCode(high + 65536) : String.fromCharCode(high >> 10 | 55296, 1023 & high | 56320);
        };
        /**
         * @return {undefined}
         */
        var f = function() {
          setDocument();
        };
        try {
          push.apply(arr = slice.call(preferredDoc.childNodes), preferredDoc.childNodes);
          arr[preferredDoc.childNodes.length].nodeType;
        } catch (Tt) {
          push = {
            /** @type {function (?, ?): undefined} */
            apply : arr.length ? function(target, args) {
              push_native.apply(target, slice.call(args));
            } : function(target, a) {
              var j = target.length;
              /** @type {number} */
              var ia = 0;
              for (;target[j++] = a[ia++];) {
              }
              /** @type {number} */
              target.length = j - 1;
            }
          };
        }
        support = Sizzle.support = {};
        /** @type {function (Object): ?} */
        isXML = Sizzle.isXML = function(elem) {
          var node = elem && (elem.ownerDocument || elem).documentElement;
          return!!node && "HTML" !== node.nodeName;
        };
        /** @type {function (boolean): ?} */
        setDocument = Sizzle.setDocument = function(node) {
          var hasCompare;
          var win;
          var result = node ? node.ownerDocument || node : preferredDoc;
          return result !== doc && (9 === result.nodeType && result.documentElement) ? (doc = result, docElem = doc.documentElement, documentIsHTML = !isXML(doc), (win = doc.defaultView) && (win.top !== win && (win.addEventListener ? win.addEventListener("unload", f, false) : win.attachEvent && win.attachEvent("onunload", f))), support.attributes = assert(function(div) {
            return div.className = "i", !div.getAttribute("className");
          }), support.getElementsByTagName = assert(function(div) {
            return div.appendChild(doc.createComment("")), !div.getElementsByTagName("*").length;
          }), support.getElementsByClassName = rnative.test(doc.getElementsByClassName), support.getById = assert(function(div) {
            return docElem.appendChild(div).id = expando, !doc.getElementsByName || !doc.getElementsByName(expando).length;
          }), support.getById ? (Expr.find.ID = function(id, isXML) {
            if ("undefined" != typeof isXML.getElementById && documentIsHTML) {
              var m = isXML.getElementById(id);
              return m ? [m] : [];
            }
          }, Expr.filter.ID = function(id) {
            var attrId = id.replace(runescape, funescape);
            return function(elem) {
              return elem.getAttribute("id") === attrId;
            };
          }) : (delete Expr.find.ID, Expr.filter.ID = function(id) {
            var attrId = id.replace(runescape, funescape);
            return function(elem) {
              var node = "undefined" != typeof elem.getAttributeNode && elem.getAttributeNode("id");
              return node && node.value === attrId;
            };
          }), Expr.find.TAG = support.getElementsByTagName ? function(selector, el) {
            return "undefined" != typeof el.getElementsByTagName ? el.getElementsByTagName(selector) : support.qsa ? el.querySelectorAll(selector) : void 0;
          } : function(tag, from) {
            var elem;
            /** @type {Array} */
            var tmp = [];
            /** @type {number} */
            var index = 0;
            var results = from.getElementsByTagName(tag);
            if ("*" === tag) {
              for (;elem = results[index++];) {
                if (1 === elem.nodeType) {
                  tmp.push(elem);
                }
              }
              return tmp;
            }
            return results;
          }, Expr.find.CLASS = support.getElementsByClassName && function(className, context) {
            if ("undefined" != typeof context.getElementsByClassName && documentIsHTML) {
              return context.getElementsByClassName(className);
            }
          }, rbuggyMatches = [], rbuggyQSA = [], (support.qsa = rnative.test(doc.querySelectorAll)) && (assert(function(div) {
            /** @type {string} */
            docElem.appendChild(div).innerHTML = "<a id='" + expando + "'></a><select id='" + expando + "-\r\\' msallowcapture=''><option selected=''></option></select>";
            if (div.querySelectorAll("[msallowcapture^='']").length) {
              rbuggyQSA.push("[*^$]=" + whitespace + "*(?:''|\"\")");
            }
            if (!div.querySelectorAll("[selected]").length) {
              rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");
            }
            if (!div.querySelectorAll("[id~=" + expando + "-]").length) {
              rbuggyQSA.push("~=");
            }
            if (!div.querySelectorAll(":checked").length) {
              rbuggyQSA.push(":checked");
            }
            if (!div.querySelectorAll("a#" + expando + "+*").length) {
              rbuggyQSA.push(".#.+[+~]");
            }
          }), assert(function(div) {
            var input = doc.createElement("input");
            input.setAttribute("type", "hidden");
            div.appendChild(input).setAttribute("name", "D");
            if (div.querySelectorAll("[name=d]").length) {
              rbuggyQSA.push("name" + whitespace + "*[*^$|!~]?=");
            }
            if (!div.querySelectorAll(":enabled").length) {
              rbuggyQSA.push(":enabled", ":disabled");
            }
            div.querySelectorAll("*,:x");
            rbuggyQSA.push(",.*:");
          })), (support.matchesSelector = rnative.test(matches = docElem.matches || (docElem.webkitMatchesSelector || (docElem.mozMatchesSelector || (docElem.oMatchesSelector || docElem.msMatchesSelector))))) && assert(function(div) {
            support.disconnectedMatch = matches.call(div, "div");
            matches.call(div, "[s!='']:x");
            rbuggyMatches.push("!=", pseudos);
          }), rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|")), rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|")), hasCompare = rnative.test(docElem.compareDocumentPosition), contains = hasCompare || rnative.test(docElem.contains) ? function(a, b) {
            var adown = 9 === a.nodeType ? a.documentElement : a;
            var bup = b && b.parentNode;
            return a === bup || !(!bup || (1 !== bup.nodeType || !(adown.contains ? adown.contains(bup) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(bup))));
          } : function(a, b) {
            if (b) {
              for (;b = b.parentNode;) {
                if (b === a) {
                  return true;
                }
              }
            }
            return false;
          }, sortOrder = hasCompare ? function(a, b) {
            if (a === b) {
              return D = true, 0;
            }
            /** @type {number} */
            var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
            return compare ? compare : (compare = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & compare || !support.sortDetached && b.compareDocumentPosition(a) === compare ? a === doc || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ? -1 : b === doc || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ? 1 : sortInput ? sortFunction(sortInput, a) - sortFunction(sortInput, b) : 0 : 4 & compare ? -1 : 1);
          } : function(a, b) {
            if (a === b) {
              return D = true, 0;
            }
            var cur;
            /** @type {number} */
            var i = 0;
            var aup = a.parentNode;
            var bup = b.parentNode;
            /** @type {Array} */
            var ap = [a];
            /** @type {Array} */
            var bp = [b];
            if (!aup || !bup) {
              return a === doc ? -1 : b === doc ? 1 : aup ? -1 : bup ? 1 : sortInput ? sortFunction(sortInput, a) - sortFunction(sortInput, b) : 0;
            }
            if (aup === bup) {
              return siblingCheck(a, b);
            }
            cur = a;
            for (;cur = cur.parentNode;) {
              ap.unshift(cur);
            }
            cur = b;
            for (;cur = cur.parentNode;) {
              bp.unshift(cur);
            }
            for (;ap[i] === bp[i];) {
              i++;
            }
            return i ? siblingCheck(ap[i], bp[i]) : ap[i] === preferredDoc ? -1 : bp[i] === preferredDoc ? 1 : 0;
          }, doc) : doc;
        };
        /**
         * @param {Object} expr
         * @param {Array} elements
         * @return {?}
         */
        Sizzle.matches = function(expr, elements) {
          return Sizzle(expr, null, null, elements);
        };
        /**
         * @param {HTMLElement} elem
         * @param {string} expr
         * @return {?}
         */
        Sizzle.matchesSelector = function(elem, expr) {
          if ((elem.ownerDocument || elem) !== doc && setDocument(elem), expr = expr.replace(rattributeQuotes, "='$1']"), support.matchesSelector && (documentIsHTML && (!compilerCache[expr + " "] && ((!rbuggyMatches || !rbuggyMatches.test(expr)) && (!rbuggyQSA || !rbuggyQSA.test(expr)))))) {
            try {
              var ret = matches.call(elem, expr);
              if (ret || (support.disconnectedMatch || elem.document && 11 !== elem.document.nodeType)) {
                return ret;
              }
            } catch (s) {
            }
          }
          return Sizzle(expr, doc, null, [elem]).length > 0;
        };
        /**
         * @param {Object} context
         * @param {Object} b
         * @return {?}
         */
        Sizzle.contains = function(context, b) {
          return(context.ownerDocument || context) !== doc && setDocument(context), contains(context, b);
        };
        /**
         * @param {string} elem
         * @param {string} name
         * @return {?}
         */
        Sizzle.attr = function(elem, name) {
          if ((elem.ownerDocument || elem) !== doc) {
            setDocument(elem);
          }
          var fn = Expr.attrHandle[name.toLowerCase()];
          var val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : void 0;
          return void 0 !== val ? val : support.attributes || !documentIsHTML ? elem.getAttribute(name) : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
        };
        /**
         * @param {string} name
         * @return {?}
         */
        Sizzle.error = function(name) {
          throw new Error("Syntax error, unrecognized expression: " + name);
        };
        /**
         * @param {Array} results
         * @return {?}
         */
        Sizzle.uniqueSort = function(results) {
          var elem;
          /** @type {Array} */
          var duplicates = [];
          /** @type {number} */
          var j = 0;
          /** @type {number} */
          var i = 0;
          if (D = !support.detectDuplicates, sortInput = !support.sortStable && results.slice(0), results.sort(sortOrder), D) {
            for (;elem = results[i++];) {
              if (elem === results[i]) {
                /** @type {number} */
                j = duplicates.push(i);
              }
            }
            for (;j--;) {
              results.splice(duplicates[j], 1);
            }
          }
          return sortInput = null, results;
        };
        /** @type {function (Object): ?} */
        getText = Sizzle.getText = function(elem) {
          var node;
          /** @type {string} */
          var ret = "";
          /** @type {number} */
          var i = 0;
          var nodeType = elem.nodeType;
          if (nodeType) {
            if (1 === nodeType || (9 === nodeType || 11 === nodeType)) {
              if ("string" == typeof elem.textContent) {
                return elem.textContent;
              }
              elem = elem.firstChild;
              for (;elem;elem = elem.nextSibling) {
                ret += getText(elem);
              }
            } else {
              if (3 === nodeType || 4 === nodeType) {
                return elem.nodeValue;
              }
            }
          } else {
            for (;node = elem[i++];) {
              ret += getText(node);
            }
          }
          return ret;
        };
        Expr = Sizzle.selectors = {
          cacheLength : 50,
          /** @type {function (Function): ?} */
          createPseudo : markFunction,
          match : matchExpr,
          attrHandle : {},
          find : {},
          relative : {
            ">" : {
              dir : "parentNode",
              first : true
            },
            " " : {
              dir : "parentNode"
            },
            "+" : {
              dir : "previousSibling",
              first : true
            },
            "~" : {
              dir : "previousSibling"
            }
          },
          preFilter : {
            /**
             * @param {Array} match
             * @return {?}
             */
            ATTR : function(match) {
              return match[1] = match[1].replace(runescape, funescape), match[3] = (match[3] || (match[4] || (match[5] || ""))).replace(runescape, funescape), "~=" === match[2] && (match[3] = " " + match[3] + " "), match.slice(0, 4);
            },
            /**
             * @param {Array} match
             * @return {?}
             */
            CHILD : function(match) {
              return match[1] = match[1].toLowerCase(), "nth" === match[1].slice(0, 3) ? (match[3] || Sizzle.error(match[0]), match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * ("even" === match[3] || "odd" === match[3])), match[5] = +(match[7] + match[8] || "odd" === match[3])) : match[3] && Sizzle.error(match[0]), match;
            },
            /**
             * @param {Array} match
             * @return {?}
             */
            PSEUDO : function(match) {
              var excess;
              var unquoted = !match[6] && match[2];
              return matchExpr.CHILD.test(match[0]) ? null : (match[3] ? match[2] = match[4] || (match[5] || "") : unquoted && (rpseudo.test(unquoted) && ((excess = tokenize(unquoted, true)) && ((excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length) && (match[0] = match[0].slice(0, excess), match[2] = unquoted.slice(0, excess))))), match.slice(0, 3));
            }
          },
          filter : {
            /**
             * @param {string} nodeNameSelector
             * @return {?}
             */
            TAG : function(nodeNameSelector) {
              var nodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
              return "*" === nodeNameSelector ? function() {
                return true;
              } : function(elem) {
                return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
              };
            },
            /**
             * @param {string} className
             * @return {?}
             */
            CLASS : function(className) {
              var pattern = classCache[className + " "];
              return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function(elem) {
                return pattern.test("string" == typeof elem.className && elem.className || ("undefined" != typeof elem.getAttribute && elem.getAttribute("class") || ""));
              });
            },
            /**
             * @param {Object} name
             * @param {string} not
             * @param {string} b
             * @return {?}
             */
            ATTR : function(name, not, b) {
              return function(elem) {
                var a = Sizzle.attr(elem, name);
                return null == a ? "!=" === not : !not || (a += "", "=" === not ? a === b : "!=" === not ? a !== b : "^=" === not ? b && 0 === a.indexOf(b) : "*=" === not ? b && a.indexOf(b) > -1 : "$=" === not ? b && a.slice(-b.length) === b : "~=" === not ? (" " + a.replace(rclass, " ") + " ").indexOf(b) > -1 : "|=" === not && (a === b || a.slice(0, b.length + 1) === b + "-"));
              };
            },
            /**
             * @param {string} type
             * @param {string} argument
             * @param {?} dataAndEvents
             * @param {boolean} first
             * @param {number} last
             * @return {?}
             */
            CHILD : function(type, argument, dataAndEvents, first, last) {
              /** @type {boolean} */
              var simple = "nth" !== type.slice(0, 3);
              /** @type {boolean} */
              var forward = "last" !== type.slice(-4);
              /** @type {boolean} */
              var ofType = "of-type" === argument;
              return 1 === first && 0 === last ? function(contestant) {
                return!!contestant.parentNode;
              } : function(elem, deepDataAndEvents, dataAndEvents) {
                var cache;
                var outerCache;
                var options;
                var node;
                var nodeIndex;
                var eventPath;
                /** @type {string} */
                var which = simple !== forward ? "nextSibling" : "previousSibling";
                var parent = elem.parentNode;
                var name = ofType && elem.nodeName.toLowerCase();
                /** @type {boolean} */
                var useCache = !dataAndEvents && !ofType;
                /** @type {boolean} */
                var diff = false;
                if (parent) {
                  if (simple) {
                    for (;which;) {
                      /** @type {Node} */
                      node = elem;
                      for (;node = node[which];) {
                        if (ofType ? node.nodeName.toLowerCase() === name : 1 === node.nodeType) {
                          return false;
                        }
                      }
                      /** @type {(boolean|string)} */
                      eventPath = which = "only" === type && (!eventPath && "nextSibling");
                    }
                    return true;
                  }
                  if (eventPath = [forward ? parent.firstChild : parent.lastChild], forward && useCache) {
                    node = parent;
                    options = node[expando] || (node[expando] = {});
                    outerCache = options[node.uniqueID] || (options[node.uniqueID] = {});
                    cache = outerCache[type] || [];
                    nodeIndex = cache[0] === dirruns && cache[1];
                    diff = nodeIndex && cache[2];
                    node = nodeIndex && parent.childNodes[nodeIndex];
                    for (;node = ++nodeIndex && (node && node[which]) || ((diff = nodeIndex = 0) || eventPath.pop());) {
                      if (1 === node.nodeType && (++diff && node === elem)) {
                        /** @type {Array} */
                        outerCache[type] = [dirruns, nodeIndex, diff];
                        break;
                      }
                    }
                  } else {
                    if (useCache && (node = elem, options = node[expando] || (node[expando] = {}), outerCache = options[node.uniqueID] || (options[node.uniqueID] = {}), cache = outerCache[type] || [], nodeIndex = cache[0] === dirruns && cache[1], diff = nodeIndex), diff === false) {
                      for (;(node = ++nodeIndex && (node && node[which]) || ((diff = nodeIndex = 0) || eventPath.pop())) && ((ofType ? node.nodeName.toLowerCase() !== name : 1 !== node.nodeType) || (!++diff || (useCache && (options = node[expando] || (node[expando] = {}), outerCache = options[node.uniqueID] || (options[node.uniqueID] = {}), outerCache[type] = [dirruns, diff]), node !== elem)));) {
                      }
                    }
                  }
                  return diff -= last, diff === first || diff % first === 0 && diff / first >= 0;
                }
              };
            },
            /**
             * @param {string} pseudo
             * @param {?} context
             * @return {?}
             */
            PSEUDO : function(pseudo, context) {
              var args;
              var fn = Expr.pseudos[pseudo] || (Expr.setFilters[pseudo.toLowerCase()] || Sizzle.error("unsupported pseudo: " + pseudo));
              return fn[expando] ? fn(context) : fn.length > 1 ? (args = [pseudo, pseudo, "", context], Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function(a, cssRules) {
                var i;
                var ret = fn(a, context);
                var len = ret.length;
                for (;len--;) {
                  i = sortFunction(a, ret[len]);
                  /** @type {boolean} */
                  a[i] = !(cssRules[i] = ret[len]);
                }
              }) : function(err) {
                return fn(err, 0, args);
              }) : fn;
            }
          },
          pseudos : {
            not : markFunction(function(selector) {
              /** @type {Array} */
              var elem = [];
              /** @type {Array} */
              var memory = [];
              var matcher = compile(selector.replace(rtrim, "$1"));
              return matcher[expando] ? markFunction(function(seed, qs, dataAndEvents, xml) {
                var val;
                var unmatched = matcher(seed, null, xml, []);
                var i = seed.length;
                for (;i--;) {
                  if (val = unmatched[i]) {
                    /** @type {boolean} */
                    seed[i] = !(qs[i] = val);
                  }
                }
              }) : function(value, dataAndEvents, xml) {
                return elem[0] = value, matcher(elem, null, xml, memory), elem[0] = null, !memory.pop();
              };
            }),
            has : markFunction(function(selector) {
              return function(elem) {
                return Sizzle(selector, elem).length > 0;
              };
            }),
            contains : markFunction(function(id) {
              return id = id.replace(runescape, funescape), function(elem) {
                return(elem.textContent || (elem.innerText || getText(elem))).indexOf(id) > -1;
              };
            }),
            lang : markFunction(function(lang) {
              return ridentifier.test(lang || "") || Sizzle.error("unsupported lang: " + lang), lang = lang.replace(runescape, funescape).toLowerCase(), function(elem) {
                var elemLang;
                do {
                  if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) {
                    return elemLang = elemLang.toLowerCase(), elemLang === lang || 0 === elemLang.indexOf(lang + "-");
                  }
                } while ((elem = elem.parentNode) && 1 === elem.nodeType);
                return false;
              };
            }),
            /**
             * @param {string} name
             * @return {?}
             */
            target : function(name) {
              var models = global.location && global.location.hash;
              return models && models.slice(1) === name.id;
            },
            /**
             * @param {undefined} elem
             * @return {?}
             */
            root : function(elem) {
              return elem === docElem;
            },
            /**
             * @param {string} name
             * @return {?}
             */
            focus : function(name) {
              return name === doc.activeElement && ((!doc.hasFocus || doc.hasFocus()) && !!(name.type || (name.href || ~name.tabIndex)));
            },
            /**
             * @param {EventTarget} a
             * @return {?}
             */
            enabled : function(a) {
              return a.disabled === false;
            },
            /**
             * @param {EventTarget} elem
             * @return {?}
             */
            disabled : function(elem) {
              return elem.disabled === true;
            },
            /**
             * @param {string} type
             * @return {?}
             */
            checked : function(type) {
              var b = type.nodeName.toLowerCase();
              return "input" === b && !!type.checked || "option" === b && !!type.selected;
            },
            /**
             * @param {Node} elem
             * @return {?}
             */
            selected : function(elem) {
              return elem.parentNode && elem.parentNode.selectedIndex, elem.selected === true;
            },
            /**
             * @param {Object} elem
             * @return {?}
             */
            empty : function(elem) {
              elem = elem.firstChild;
              for (;elem;elem = elem.nextSibling) {
                if (elem.nodeType < 6) {
                  return false;
                }
              }
              return true;
            },
            /**
             * @param {string} elem
             * @return {?}
             */
            parent : function(elem) {
              return!Expr.pseudos.empty(elem);
            },
            /**
             * @param {Node} elem
             * @return {?}
             */
            header : function(elem) {
              return rheader.test(elem.nodeName);
            },
            /**
             * @param {Node} elem
             * @return {?}
             */
            input : function(elem) {
              return rinputs.test(elem.nodeName);
            },
            /**
             * @param {Node} elem
             * @return {?}
             */
            button : function(elem) {
              var b = elem.nodeName.toLowerCase();
              return "input" === b && "button" === elem.type || "button" === b;
            },
            /**
             * @param {Object} elem
             * @return {?}
             */
            text : function(elem) {
              var evt;
              return "input" === elem.nodeName.toLowerCase() && ("text" === elem.type && (null == (evt = elem.getAttribute("type")) || "text" === evt.toLowerCase()));
            },
            first : createPositionalPseudo(function() {
              return[0];
            }),
            last : createPositionalPseudo(function(dataAndEvents, deepDataAndEvents) {
              return[deepDataAndEvents - 1];
            }),
            eq : createPositionalPseudo(function(dataAndEvents, length, argument) {
              return[argument < 0 ? argument + length : argument];
            }),
            even : createPositionalPseudo(function(assigns, dataAndEvents) {
              /** @type {number} */
              var vvar = 0;
              for (;vvar < dataAndEvents;vvar += 2) {
                assigns.push(vvar);
              }
              return assigns;
            }),
            odd : createPositionalPseudo(function(assigns, dataAndEvents) {
              /** @type {number} */
              var vvar = 1;
              for (;vvar < dataAndEvents;vvar += 2) {
                assigns.push(vvar);
              }
              return assigns;
            }),
            lt : createPositionalPseudo(function(assigns, length, argument) {
              var vvar = argument < 0 ? argument + length : argument;
              for (;--vvar >= 0;) {
                assigns.push(vvar);
              }
              return assigns;
            }),
            gt : createPositionalPseudo(function(assigns, length, argument) {
              var vvar = argument < 0 ? argument + length : argument;
              for (;++vvar < length;) {
                assigns.push(vvar);
              }
              return assigns;
            })
          }
        };
        Expr.pseudos.nth = Expr.pseudos.eq;
        for (i in{
          radio : true,
          checkbox : true,
          file : true,
          password : true,
          image : true
        }) {
          Expr.pseudos[i] = createInputPseudo(i);
        }
        for (i in{
          submit : true,
          reset : true
        }) {
          Expr.pseudos[i] = createButtonPseudo(i);
        }
        return setFilters.prototype = Expr.filters = Expr.pseudos, Expr.setFilters = new setFilters, tokenize = Sizzle.tokenize = function(optgroup, parseOnly) {
          var matched;
          var match;
          var tokens;
          var type;
          var soFar;
          var groups;
          var preFilters;
          var cached = tokenCache[optgroup + " "];
          if (cached) {
            return parseOnly ? 0 : cached.slice(0);
          }
          /** @type {string} */
          soFar = optgroup;
          /** @type {Array} */
          groups = [];
          preFilters = Expr.preFilter;
          for (;soFar;) {
            if (!(matched && !(match = rcomma.exec(soFar)))) {
              if (match) {
                soFar = soFar.slice(match[0].length) || soFar;
              }
              groups.push(tokens = []);
            }
            /** @type {boolean} */
            matched = false;
            if (match = rcombinators.exec(soFar)) {
              /** @type {string} */
              matched = match.shift();
              tokens.push({
                value : matched,
                type : match[0].replace(rtrim, " ")
              });
              soFar = soFar.slice(matched.length);
            }
            for (type in Expr.filter) {
              if (!!(match = matchExpr[type].exec(soFar))) {
                if (!(preFilters[type] && !(match = preFilters[type](match)))) {
                  matched = match.shift();
                  tokens.push({
                    value : matched,
                    type : type,
                    matches : match
                  });
                  soFar = soFar.slice(matched.length);
                }
              }
            }
            if (!matched) {
              break;
            }
          }
          return parseOnly ? soFar.length : soFar ? Sizzle.error(optgroup) : tokenCache(optgroup, groups).slice(0);
        }, compile = Sizzle.compile = function(selector, group) {
          var i;
          /** @type {Array} */
          var setMatchers = [];
          /** @type {Array} */
          var elementMatchers = [];
          var cached = compilerCache[selector + " "];
          if (!cached) {
            if (!group) {
              group = tokenize(selector);
            }
            i = group.length;
            for (;i--;) {
              cached = matcherFromTokens(group[i]);
              if (cached[expando]) {
                setMatchers.push(cached);
              } else {
                elementMatchers.push(cached);
              }
            }
            cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers));
            /** @type {string} */
            cached.selector = selector;
          }
          return cached;
        }, select = Sizzle.select = function(selector, isXML, results, optgroup) {
          var i;
          var tokens;
          var token;
          var type;
          var find;
          /** @type {(Function|boolean)} */
          var compiled = "function" == typeof selector && selector;
          var match = !optgroup && tokenize(selector = compiled.selector || selector);
          if (results = results || [], 1 === match.length) {
            if (tokens = match[0] = match[0].slice(0), tokens.length > 2 && ("ID" === (token = tokens[0]).type && (support.getById && (9 === isXML.nodeType && (documentIsHTML && Expr.relative[tokens[1].type]))))) {
              if (isXML = (Expr.find.ID(token.matches[0].replace(runescape, funescape), isXML) || [])[0], !isXML) {
                return results;
              }
              if (compiled) {
                isXML = isXML.parentNode;
              }
              selector = selector.slice(tokens.shift().value.length);
            }
            i = matchExpr.needsContext.test(selector) ? 0 : tokens.length;
            for (;i-- && (token = tokens[i], !Expr.relative[type = token.type]);) {
              if ((find = Expr.find[type]) && (optgroup = find(token.matches[0].replace(runescape, funescape), rsibling.test(tokens[0].type) && testContext(isXML.parentNode) || isXML))) {
                if (tokens.splice(i, 1), selector = optgroup.length && toSelector(tokens), !selector) {
                  return push.apply(results, optgroup), results;
                }
                break;
              }
            }
          }
          return(compiled || compile(selector, match))(optgroup, isXML, !documentIsHTML, results, !isXML || (rsibling.test(selector) && testContext(isXML.parentNode) || isXML)), results;
        }, support.sortStable = expando.split("").sort(sortOrder).join("") === expando, support.detectDuplicates = !!D, setDocument(), support.sortDetached = assert(function(div1) {
          return 1 & div1.compareDocumentPosition(doc.createElement("div"));
        }), assert(function(div) {
          return div.innerHTML = "<a href='#'></a>", "#" === div.firstChild.getAttribute("href");
        }) || addHandle("type|href|height|width", function(elem, optgroup, dataAndEvents) {
          if (!dataAndEvents) {
            return elem.getAttribute(optgroup, "type" === optgroup.toLowerCase() ? 1 : 2);
          }
        }), support.attributes && assert(function(div) {
          return div.innerHTML = "<input/>", div.firstChild.setAttribute("value", ""), "" === div.firstChild.getAttribute("value");
        }) || addHandle("value", function(target, deepDataAndEvents, dataAndEvents) {
          if (!dataAndEvents && "input" === target.nodeName.toLowerCase()) {
            return target.defaultValue;
          }
        }), assert(function(div) {
          return null == div.getAttribute("disabled");
        }) || addHandle(booleans, function(elem, name, dataAndEvents) {
          var val;
          if (!dataAndEvents) {
            return elem[name] === true ? name.toLowerCase() : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
          }
        }), Sizzle;
      }(self);
      jQuery.find = Sizzle;
      jQuery.expr = Sizzle.selectors;
      jQuery.expr[":"] = jQuery.expr.pseudos;
      jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
      jQuery.text = Sizzle.getText;
      jQuery.isXMLDoc = Sizzle.isXML;
      jQuery.contains = Sizzle.contains;
      /**
       * @param {string} elem
       * @param {string} dir
       * @param {string} until
       * @return {?}
       */
      var dir = function(elem, dir, until) {
        /** @type {Array} */
        var matched = [];
        /** @type {boolean} */
        var truncate = void 0 !== until;
        for (;(elem = elem[dir]) && 9 !== elem.nodeType;) {
          if (1 === elem.nodeType) {
            if (truncate && jQuery(elem).is(until)) {
              break;
            }
            matched.push(elem);
          }
        }
        return matched;
      };
      /**
       * @param {Element} n
       * @param {Element} elem
       * @return {?}
       */
      var _sibling = function(n, elem) {
        /** @type {Array} */
        var matched = [];
        for (;n;n = n.nextSibling) {
          if (1 === n.nodeType) {
            if (n !== elem) {
              matched.push(n);
            }
          }
        }
        return matched;
      };
      var rneedsContext = jQuery.expr.match.needsContext;
      /** @type {RegExp} */
      var rsingleTag = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/;
      /** @type {RegExp} */
      var isSimple = /^.[^:#\[\.,]*$/;
      /**
       * @param {Object} expr
       * @param {string} elems
       * @param {boolean} not
       * @return {?}
       */
      jQuery.filter = function(expr, elems, not) {
        var elem = elems[0];
        return not && (expr = ":not(" + expr + ")"), 1 === elems.length && 1 === elem.nodeType ? jQuery.find.matchesSelector(elem, expr) ? [elem] : [] : jQuery.find.matches(expr, jQuery.grep(elems, function(dest) {
          return 1 === dest.nodeType;
        }));
      };
      jQuery.fn.extend({
        /**
         * @param {string} selector
         * @return {?}
         */
        find : function(selector) {
          var i;
          var len = this.length;
          /** @type {Array} */
          var ret = [];
          var self = this;
          if ("string" != typeof selector) {
            return this.pushStack(jQuery(selector).filter(function() {
              /** @type {number} */
              i = 0;
              for (;i < len;i++) {
                if (jQuery.contains(self[i], this)) {
                  return true;
                }
              }
            }));
          }
          /** @type {number} */
          i = 0;
          for (;i < len;i++) {
            jQuery.find(selector, self[i], ret);
          }
          return ret = this.pushStack(len > 1 ? jQuery.unique(ret) : ret), ret.selector = this.selector ? this.selector + " " + selector : selector, ret;
        },
        /**
         * @param {Function} selector
         * @return {?}
         */
        filter : function(selector) {
          return this.pushStack(winnow(this, selector || [], false));
        },
        /**
         * @param {Array} selector
         * @return {?}
         */
        not : function(selector) {
          return this.pushStack(winnow(this, selector || [], true));
        },
        /**
         * @param {string} selector
         * @return {?}
         */
        is : function(selector) {
          return!!winnow(this, "string" == typeof selector && rneedsContext.test(selector) ? jQuery(selector) : selector || [], false).length;
        }
      });
      var ret;
      /** @type {RegExp} */
      var rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
      /** @type {function (Object, Object, (Object|string)): ?} */
      var T = jQuery.fn.init = function(selector, context, rootjQuery) {
        var match;
        var a;
        if (!selector) {
          return this;
        }
        if (rootjQuery = rootjQuery || ret, "string" == typeof selector) {
          if (match = "<" === selector[0] && (">" === selector[selector.length - 1] && selector.length >= 3) ? [null, selector, null] : rquickExpr.exec(selector), !match || !match[1] && context) {
            return!context || context.jquery ? (context || rootjQuery).find(selector) : this.constructor(context).find(selector);
          }
          if (match[1]) {
            if (context = context instanceof jQuery ? context[0] : context, jQuery.merge(this, jQuery.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : elem, true)), rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
              for (match in context) {
                if (jQuery.isFunction(this[match])) {
                  this[match](context[match]);
                } else {
                  this.attr(match, context[match]);
                }
              }
            }
            return this;
          }
          return a = elem.getElementById(match[2]), a && (a.parentNode && (this.length = 1, this[0] = a)), this.context = elem, this.selector = selector, this;
        }
        return selector.nodeType ? (this.context = this[0] = selector, this.length = 1, this) : jQuery.isFunction(selector) ? void 0 !== rootjQuery.ready ? rootjQuery.ready(selector) : selector(jQuery) : (void 0 !== selector.selector && (this.selector = selector.selector, this.context = selector.context), jQuery.makeArray(selector, this));
      };
      T.prototype = jQuery.fn;
      ret = jQuery(elem);
      /** @type {RegExp} */
      var rparentsprev = /^(?:parents|prev(?:Until|All))/;
      var guaranteedUnique = {
        children : true,
        contents : true,
        next : true,
        prev : true
      };
      jQuery.fn.extend({
        /**
         * @param {string} ol
         * @return {?}
         */
        has : function(ol) {
          var targets = jQuery(ol, this);
          var l = targets.length;
          return this.filter(function() {
            /** @type {number} */
            var i = 0;
            for (;i < l;i++) {
              if (jQuery.contains(this, targets[i])) {
                return true;
              }
            }
          });
        },
        /**
         * @param {string} later
         * @param {number} context
         * @return {?}
         */
        closest : function(later, context) {
          var cur;
          /** @type {number} */
          var i = 0;
          var l = this.length;
          /** @type {Array} */
          var matched = [];
          var pos = rneedsContext.test(later) || "string" != typeof later ? jQuery(later, context || this.context) : 0;
          for (;i < l;i++) {
            cur = this[i];
            for (;cur && cur !== context;cur = cur.parentNode) {
              if (cur.nodeType < 11 && (pos ? pos.index(cur) > -1 : 1 === cur.nodeType && jQuery.find.matchesSelector(cur, later))) {
                matched.push(cur);
                break;
              }
            }
          }
          return this.pushStack(matched.length > 1 ? jQuery.uniqueSort(matched) : matched);
        },
        /**
         * @param {string} elem
         * @return {?}
         */
        index : function(elem) {
          return elem ? "string" == typeof elem ? core_indexOf.call(jQuery(elem), this[0]) : core_indexOf.call(this, elem.jquery ? elem[0] : elem) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        },
        /**
         * @param {string} selector
         * @param {Object} attributes
         * @return {?}
         */
        add : function(selector, attributes) {
          return this.pushStack(jQuery.uniqueSort(jQuery.merge(this.get(), jQuery(selector, attributes))));
        },
        /**
         * @param {Object} selector
         * @return {?}
         */
        addBack : function(selector) {
          return this.add(null == selector ? this.prevObject : this.prevObject.filter(selector));
        }
      });
      jQuery.each({
        /**
         * @param {Node} elem
         * @return {?}
         */
        parent : function parents(elem) {
          var parent = elem.parentNode;
          return parent && 11 !== parent.nodeType ? parent : null;
        },
        /**
         * @param {string} elem
         * @return {?}
         */
        parents : function(elem) {
          return dir(elem, "parentNode");
        },
        /**
         * @param {string} elem
         * @param {string} i
         * @param {string} until
         * @return {?}
         */
        parentsUntil : function(elem, i, until) {
          return dir(elem, "parentNode", until);
        },
        /**
         * @param {string} elem
         * @return {?}
         */
        next : function(elem) {
          return sibling(elem, "nextSibling");
        },
        /**
         * @param {string} elem
         * @return {?}
         */
        prev : function(elem) {
          return sibling(elem, "previousSibling");
        },
        /**
         * @param {string} elem
         * @return {?}
         */
        nextAll : function(elem) {
          return dir(elem, "nextSibling");
        },
        /**
         * @param {string} elem
         * @return {?}
         */
        prevAll : function(elem) {
          return dir(elem, "previousSibling");
        },
        /**
         * @param {string} elem
         * @param {?} i
         * @param {string} until
         * @return {?}
         */
        nextUntil : function(elem, i, until) {
          return dir(elem, "nextSibling", until);
        },
        /**
         * @param {string} elem
         * @param {?} i
         * @param {string} until
         * @return {?}
         */
        prevUntil : function(elem, i, until) {
          return dir(elem, "previousSibling", until);
        },
        /**
         * @param {Element} elem
         * @return {?}
         */
        siblings : function(elem) {
          return _sibling((elem.parentNode || {}).firstChild, elem);
        },
        /**
         * @param {string} elem
         * @return {?}
         */
        children : function(elem) {
          return _sibling(elem.firstChild);
        },
        /**
         * @param {Element} elem
         * @return {?}
         */
        contents : function(elem) {
          return elem.contentDocument || jQuery.merge([], elem.childNodes);
        }
      }, function(name, fn) {
        /**
         * @param {Object} until
         * @param {Object} selector
         * @return {?}
         */
        jQuery.fn[name] = function(until, selector) {
          var matched = jQuery.map(this, fn, until);
          return "Until" !== name.slice(-5) && (selector = until), selector && ("string" == typeof selector && (matched = jQuery.filter(selector, matched))), this.length > 1 && (guaranteedUnique[name] || jQuery.uniqueSort(matched), rparentsprev.test(name) && matched.reverse()), this.pushStack(matched);
        };
      });
      /** @type {RegExp} */
      var core_rnotwhite = /\S+/g;
      /**
       * @param {string} options
       * @return {?}
       */
      jQuery.Callbacks = function(options) {
        options = "string" == typeof options ? createOptions(options) : jQuery.extend({}, options);
        var memory;
        var data;
        var stack;
        var image;
        /** @type {Array} */
        var list = [];
        /** @type {Array} */
        var messages = [];
        /** @type {number} */
        var count = -1;
        /**
         * @return {undefined}
         */
        var fire = function() {
          image = options.once;
          /** @type {boolean} */
          stack = memory = true;
          for (;messages.length;count = -1) {
            data = messages.shift();
            for (;++count < list.length;) {
              if (list[count].apply(data[0], data[1]) === false) {
                if (options.stopOnFalse) {
                  count = list.length;
                  /** @type {boolean} */
                  data = false;
                }
              }
            }
          }
          if (!options.memory) {
            /** @type {boolean} */
            data = false;
          }
          /** @type {boolean} */
          memory = false;
          if (image) {
            /** @type {(Array|string)} */
            list = data ? [] : "";
          }
        };
        var self = {
          /**
           * @return {?}
           */
          add : function() {
            return list && (data && (!memory && (count = list.length - 1, messages.push(data))), function add(attributes) {
              jQuery.each(attributes, function(dataAndEvents, optgroup) {
                if (jQuery.isFunction(optgroup)) {
                  if (!(options.unique && self.has(optgroup))) {
                    list.push(optgroup);
                  }
                } else {
                  if (optgroup) {
                    if (optgroup.length) {
                      if ("string" !== jQuery.type(optgroup)) {
                        add(optgroup);
                      }
                    }
                  }
                }
              });
            }(arguments), data && (!memory && fire())), this;
          },
          /**
           * @return {?}
           */
          remove : function() {
            return jQuery.each(arguments, function(dataAndEvents, arg) {
              var index;
              for (;(index = jQuery.inArray(arg, list, index)) > -1;) {
                list.splice(index, 1);
                if (index <= count) {
                  count--;
                }
              }
            }), this;
          },
          /**
           * @param {string} fn
           * @return {?}
           */
          has : function(fn) {
            return fn ? jQuery.inArray(fn, list) > -1 : list.length > 0;
          },
          /**
           * @return {?}
           */
          empty : function() {
            return list && (list = []), this;
          },
          /**
           * @return {?}
           */
          disable : function() {
            return image = messages = [], list = data = "", this;
          },
          /**
           * @return {?}
           */
          disabled : function() {
            return!list;
          },
          /**
           * @return {?}
           */
          lock : function() {
            return image = messages = [], data || (list = data = ""), this;
          },
          /**
           * @return {?}
           */
          locked : function() {
            return!!image;
          },
          /**
           * @param {?} context
           * @param {Array} args
           * @return {?}
           */
          fireWith : function(context, args) {
            return image || (args = args || [], args = [context, args.slice ? args.slice() : args], messages.push(args), memory || fire()), this;
          },
          /**
           * @return {?}
           */
          fire : function() {
            return self.fireWith(this, arguments), this;
          },
          /**
           * @return {?}
           */
          fired : function() {
            return!!stack;
          }
        };
        return self;
      };
      jQuery.extend({
        /**
         * @param {Function} func
         * @return {?}
         */
        Deferred : function(func) {
          /** @type {Array} */
          var attributes = [["resolve", "done", jQuery.Callbacks("once memory"), "resolved"], ["reject", "fail", jQuery.Callbacks("once memory"), "rejected"], ["notify", "progress", jQuery.Callbacks("memory")]];
          /** @type {string} */
          var state = "pending";
          var promise = {
            /**
             * @return {?}
             */
            state : function() {
              return state;
            },
            /**
             * @return {?}
             */
            always : function() {
              return deferred.done(arguments).fail(arguments), this;
            },
            /**
             * @return {?}
             */
            then : function() {
              /** @type {Arguments} */
              var fns = arguments;
              return jQuery.Deferred(function(newDefer) {
                jQuery.each(attributes, function(i, tuple) {
                  var fn = jQuery.isFunction(fns[i]) && fns[i];
                  deferred[tuple[1]](function() {
                    var returned = fn && fn.apply(this, arguments);
                    if (returned && jQuery.isFunction(returned.promise)) {
                      returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);
                    } else {
                      newDefer[tuple[0] + "With"](this === promise ? newDefer.promise() : this, fn ? [returned] : arguments);
                    }
                  });
                });
                /** @type {null} */
                fns = null;
              }).promise();
            },
            /**
             * @param {string} obj
             * @return {?}
             */
            promise : function(obj) {
              return null != obj ? jQuery.extend(obj, promise) : promise;
            }
          };
          var deferred = {};
          return promise.pipe = promise.then, jQuery.each(attributes, function(dataAndEvents, tuple) {
            var list = tuple[2];
            var stateString = tuple[3];
            promise[tuple[1]] = list.add;
            if (stateString) {
              list.add(function() {
                state = stateString;
              }, attributes[1 ^ dataAndEvents][2].disable, attributes[2][2].lock);
            }
            /**
             * @return {?}
             */
            deferred[tuple[0]] = function() {
              return deferred[tuple[0] + "With"](this === deferred ? promise : this, arguments), this;
            };
            deferred[tuple[0] + "With"] = list.fireWith;
          }), promise.promise(deferred), func && func.call(deferred, deferred), deferred;
        },
        /**
         * @param {Object} subordinate
         * @return {?}
         */
        when : function(subordinate) {
          var progressValues;
          var progressContexts;
          var resolveContexts;
          /** @type {number} */
          var i = 0;
          /** @type {Array.<?>} */
          var resolveValues = core_slice.call(arguments);
          /** @type {number} */
          var length = resolveValues.length;
          /** @type {number} */
          var remaining = 1 !== length || subordinate && jQuery.isFunction(subordinate.promise) ? length : 0;
          var deferred = 1 === remaining ? subordinate : jQuery.Deferred();
          /**
           * @param {number} i
           * @param {(Array|NodeList)} contexts
           * @param {Array} values
           * @return {?}
           */
          var updateFunc = function(i, contexts, values) {
            return function(value) {
              contexts[i] = this;
              values[i] = arguments.length > 1 ? core_slice.call(arguments) : value;
              if (values === progressValues) {
                deferred.notifyWith(contexts, values);
              } else {
                if (!--remaining) {
                  deferred.resolveWith(contexts, values);
                }
              }
            };
          };
          if (length > 1) {
            /** @type {Array} */
            progressValues = new Array(length);
            /** @type {Array} */
            progressContexts = new Array(length);
            /** @type {Array} */
            resolveContexts = new Array(length);
            for (;i < length;i++) {
              if (resolveValues[i] && jQuery.isFunction(resolveValues[i].promise)) {
                resolveValues[i].promise().progress(updateFunc(i, progressContexts, progressValues)).done(updateFunc(i, resolveContexts, resolveValues)).fail(deferred.reject);
              } else {
                --remaining;
              }
            }
          }
          return remaining || deferred.resolveWith(resolveContexts, resolveValues), deferred.promise();
        }
      });
      var readyList;
      /**
       * @param {string} optgroup
       * @return {?}
       */
      jQuery.fn.ready = function(optgroup) {
        return jQuery.ready.promise().done(optgroup), this;
      };
      jQuery.extend({
        isReady : false,
        readyWait : 1,
        /**
         * @param {?} hold
         * @return {undefined}
         */
        holdReady : function(hold) {
          if (hold) {
            jQuery.readyWait++;
          } else {
            jQuery.ready(true);
          }
        },
        /**
         * @param {boolean} wait
         * @return {undefined}
         */
        ready : function(wait) {
          if (!(wait === true ? --jQuery.readyWait : jQuery.isReady)) {
            /** @type {boolean} */
            jQuery.isReady = true;
            if (!(wait !== true && --jQuery.readyWait > 0)) {
              readyList.resolveWith(elem, [jQuery]);
              if (jQuery.fn.triggerHandler) {
                jQuery(elem).triggerHandler("ready");
                jQuery(elem).off("ready");
              }
            }
          }
        }
      });
      /**
       * @param {string} obj
       * @return {?}
       */
      jQuery.ready.promise = function(obj) {
        return readyList || (readyList = jQuery.Deferred(), "complete" === elem.readyState || "loading" !== elem.readyState && !elem.documentElement.doScroll ? self.setTimeout(jQuery.ready) : (elem.addEventListener("DOMContentLoaded", completed), self.addEventListener("load", completed))), readyList.promise(obj);
      };
      jQuery.ready.promise();
      /**
       * @param {Object} elems
       * @param {Function} fn
       * @param {string} key
       * @param {string} value
       * @param {boolean} chainable
       * @param {string} emptyGet
       * @param {boolean} raw
       * @return {?}
       */
      var access = function access(elems, fn, key, value, chainable, emptyGet, raw) {
        /** @type {number} */
        var i = 0;
        var length = elems.length;
        /** @type {boolean} */
        var bulk = null == key;
        if ("object" === jQuery.type(key)) {
          /** @type {boolean} */
          chainable = true;
          for (i in key) {
            access(elems, fn, i, key[i], true, emptyGet, raw);
          }
        } else {
          if (void 0 !== value && (chainable = true, jQuery.isFunction(value) || (raw = true), bulk && (raw ? (fn.call(elems, value), fn = null) : (bulk = fn, fn = function(ol, event, value) {
            return bulk.call(jQuery(ol), value);
          })), fn)) {
            for (;i < length;i++) {
              fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key)));
            }
          }
        }
        return chainable ? elems : bulk ? fn.call(elems) : length ? fn(elems[0], key) : emptyGet;
      };
      /**
       * @param {?} text
       * @return {?}
       */
      var $ = function(text) {
        return 1 === text.nodeType || (9 === text.nodeType || !+text.nodeType);
      };
      /** @type {number} */
      get.uid = 1;
      get.prototype = {
        /**
         * @param {Object} owner
         * @param {Object} target
         * @return {?}
         */
        register : function(owner, target) {
          var result = target || {};
          return owner.nodeType ? owner[this.expando] = result : Object.defineProperty(owner, this.expando, {
            value : result,
            writable : true,
            configurable : true
          }), owner[this.expando];
        },
        /**
         * @param {?} o
         * @return {?}
         */
        cache : function(o) {
          if (!$(o)) {
            return{};
          }
          var v = o[this.expando];
          return v || (v = {}, $(o) && (o.nodeType ? o[this.expando] = v : Object.defineProperty(o, this.expando, {
            value : v,
            configurable : true
          }))), v;
        },
        /**
         * @param {string} name
         * @param {?} value
         * @param {Object} object
         * @return {?}
         */
        set : function(name, value, object) {
          var key;
          var result = this.cache(name);
          if ("string" == typeof value) {
            /** @type {Object} */
            result[value] = object;
          } else {
            for (key in value) {
              result[key] = value[key];
            }
          }
          return result;
        },
        /**
         * @param {string} name
         * @param {string} value
         * @return {?}
         */
        get : function(name, value) {
          return void 0 === value ? this.cache(name) : name[this.expando] && name[this.expando][value];
        },
        /**
         * @param {string} optgroup
         * @param {Object} key
         * @param {number} value
         * @return {?}
         */
        access : function(optgroup, key, value) {
          var stored;
          return void 0 === key || key && ("string" == typeof key && void 0 === value) ? (stored = this.get(optgroup, key), void 0 !== stored ? stored : this.get(optgroup, jQuery.camelCase(key))) : (this.set(optgroup, key, value), void 0 !== value ? value : key);
        },
        /**
         * @param {Object} owner
         * @param {?} key
         * @return {undefined}
         */
        remove : function(owner, key) {
          var i;
          var name;
          var camel;
          var cache = owner[this.expando];
          if (void 0 !== cache) {
            if (void 0 === key) {
              this.register(owner);
            } else {
              if (jQuery.isArray(key)) {
                name = key.concat(key.map(jQuery.camelCase));
              } else {
                camel = jQuery.camelCase(key);
                if (key in cache) {
                  /** @type {Array} */
                  name = [key, camel];
                } else {
                  name = camel;
                  name = name in cache ? [name] : name.match(core_rnotwhite) || [];
                }
              }
              i = name.length;
              for (;i--;) {
                delete cache[name[i]];
              }
            }
            if (void 0 === key || jQuery.isEmptyObject(cache)) {
              if (owner.nodeType) {
                owner[this.expando] = void 0;
              } else {
                delete owner[this.expando];
              }
            }
          }
        },
        /**
         * @param {string} owner
         * @return {?}
         */
        hasData : function(owner) {
          var cache = owner[this.expando];
          return void 0 !== cache && !jQuery.isEmptyObject(cache);
        }
      };
      var data_priv = new get;
      var data_user = new get;
      /** @type {RegExp} */
      var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/;
      /** @type {RegExp} */
      var r20 = /[A-Z]/g;
      jQuery.extend({
        /**
         * @param {string} elem
         * @return {?}
         */
        hasData : function(elem) {
          return data_user.hasData(elem) || data_priv.hasData(elem);
        },
        /**
         * @param {string} name
         * @param {?} value
         * @param {Object} object
         * @return {?}
         */
        data : function(name, value, object) {
          return data_user.access(name, value, object);
        },
        /**
         * @param {string} elem
         * @param {Object} name
         * @return {undefined}
         */
        removeData : function(elem, name) {
          data_user.remove(elem, name);
        },
        /**
         * @param {string} src
         * @param {Object} name
         * @param {number} data
         * @return {?}
         */
        _data : function(src, name, data) {
          return data_priv.access(src, name, data);
        },
        /**
         * @param {string} elem
         * @param {Object} name
         * @return {undefined}
         */
        _removeData : function(elem, name) {
          data_priv.remove(elem, name);
        }
      });
      jQuery.fn.extend({
        /**
         * @param {string} name
         * @param {?} value
         * @return {?}
         */
        data : function parse(name, value) {
          var i;
          var attributeName;
          var data;
          var optgroup = this[0];
          var types = optgroup && optgroup.attributes;
          if (void 0 === name) {
            if (this.length && (data = data_user.get(optgroup), 1 === optgroup.nodeType && !data_priv.get(optgroup, "hasDataAttrs"))) {
              i = types.length;
              for (;i--;) {
                if (types[i]) {
                  attributeName = types[i].name;
                  if (0 === attributeName.indexOf("data-")) {
                    attributeName = jQuery.camelCase(attributeName.slice(5));
                    dataAttr(optgroup, attributeName, data[attributeName]);
                  }
                }
              }
              data_priv.set(optgroup, "hasDataAttrs", true);
            }
            return data;
          }
          return "object" === ("undefined" == typeof name ? "undefined" : isArray(name)) ? this.each(function() {
            data_user.set(this, name);
          }) : access(this, function(which) {
            var data;
            var camelKey;
            if (optgroup && void 0 === which) {
              if (data = data_user.get(optgroup, name) || data_user.get(optgroup, name.replace(r20, "-$&").toLowerCase()), void 0 !== data) {
                return data;
              }
              if (camelKey = jQuery.camelCase(name), data = data_user.get(optgroup, camelKey), void 0 !== data) {
                return data;
              }
              if (data = dataAttr(optgroup, camelKey, void 0), void 0 !== data) {
                return data;
              }
            } else {
              camelKey = jQuery.camelCase(name);
              this.each(function() {
                var data = data_user.get(this, camelKey);
                data_user.set(this, camelKey, which);
                if (name.indexOf("-") > -1) {
                  if (void 0 !== data) {
                    data_user.set(this, name, which);
                  }
                }
              });
            }
          }, null, value, arguments.length > 1, null, true);
        },
        /**
         * @param {string} key
         * @return {?}
         */
        removeData : function(key) {
          return this.each(function() {
            data_user.remove(this, key);
          });
        }
      });
      jQuery.extend({
        /**
         * @param {string} elem
         * @param {string} type
         * @param {?} data
         * @return {?}
         */
        queue : function queue(elem, type, data) {
          var q;
          if (elem) {
            return type = (type || "fx") + "queue", q = data_priv.get(elem, type), data && (!q || jQuery.isArray(data) ? q = data_priv.access(elem, type, jQuery.makeArray(data)) : q.push(data)), q || [];
          }
        },
        /**
         * @param {string} elem
         * @param {string} type
         * @return {undefined}
         */
        dequeue : function(elem, type) {
          type = type || "fx";
          var queue = jQuery.queue(elem, type);
          var ln = queue.length;
          var fn = queue.shift();
          var hooks = jQuery._queueHooks(elem, type);
          /**
           * @return {undefined}
           */
          var next = function() {
            jQuery.dequeue(elem, type);
          };
          if ("inprogress" === fn) {
            fn = queue.shift();
            ln--;
          }
          if (fn) {
            if ("fx" === type) {
              queue.unshift("inprogress");
            }
            delete hooks.stop;
            fn.call(elem, next, hooks);
          }
          if (!ln) {
            if (hooks) {
              hooks.empty.fire();
            }
          }
        },
        /**
         * @param {string} elem
         * @param {string} type
         * @return {?}
         */
        _queueHooks : function(elem, type) {
          /** @type {string} */
          var key = type + "queueHooks";
          return data_priv.get(elem, key) || data_priv.access(elem, key, {
            empty : jQuery.Callbacks("once memory").add(function() {
              data_priv.remove(elem, [type + "queue", key]);
            })
          });
        }
      });
      jQuery.fn.extend({
        /**
         * @param {string} type
         * @param {Object} data
         * @return {?}
         */
        queue : function(type, data) {
          /** @type {number} */
          var setter = 2;
          return "string" != typeof type && (data = type, type = "fx", setter--), arguments.length < setter ? jQuery.queue(this[0], type) : void 0 === data ? this : this.each(function() {
            var queue = jQuery.queue(this, type, data);
            jQuery._queueHooks(this, type);
            if ("fx" === type) {
              if ("inprogress" !== queue[0]) {
                jQuery.dequeue(this, type);
              }
            }
          });
        },
        /**
         * @param {string} type
         * @return {?}
         */
        dequeue : function(type) {
          return this.each(function() {
            jQuery.dequeue(this, type);
          });
        },
        /**
         * @param {string} type
         * @return {?}
         */
        clearQueue : function(type) {
          return this.queue(type || "fx", []);
        },
        /**
         * @param {string} type
         * @param {string} obj
         * @return {?}
         */
        promise : function(type, obj) {
          var body;
          /** @type {number} */
          var n = 1;
          var defer = jQuery.Deferred();
          var elements = this;
          var i = this.length;
          /**
           * @return {undefined}
           */
          var resolve = function() {
            if (!--n) {
              defer.resolveWith(elements, [elements]);
            }
          };
          if ("string" != typeof type) {
            /** @type {string} */
            obj = type;
            type = void 0;
          }
          type = type || "fx";
          for (;i--;) {
            body = data_priv.get(elements[i], type + "queueHooks");
            if (body) {
              if (body.empty) {
                n++;
                body.empty.add(resolve);
              }
            }
          }
          return resolve(), defer.promise(obj);
        }
      });
      /** @type {string} */
      var core_pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
      /** @type {RegExp} */
      var regexp = new RegExp("^(?:([+-])=|)(" + core_pnum + ")([a-z%]*)$", "i");
      /** @type {Array} */
      var cssExpand = ["Top", "Right", "Bottom", "Left"];
      /**
       * @param {Object} node
       * @param {Function} context
       * @return {?}
       */
      var isHidden = function(node, context) {
        return node = context || node, "none" === jQuery.css(node, "display") || !jQuery.contains(node.ownerDocument, node);
      };
      /** @type {RegExp} */
      var manipulation_rcheckableType = /^(?:checkbox|radio)$/i;
      /** @type {RegExp} */
      var rtagName = /<([\w:-]+)/;
      /** @type {RegExp} */
      var stopParent = /^$|\/(?:java|ecma)script/i;
      var wrapMap = {
        option : [1, "<select multiple='multiple'>", "</select>"],
        thead : [1, "<table>", "</table>"],
        col : [2, "<table><colgroup>", "</colgroup></table>"],
        tr : [2, "<table><tbody>", "</tbody></table>"],
        td : [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default : [0, "", ""]
      };
      /** @type {Array} */
      wrapMap.optgroup = wrapMap.option;
      /** @type {Array} */
      wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
      /** @type {Array} */
      wrapMap.th = wrapMap.td;
      /** @type {RegExp} */
      var rhtml = /<|&#?\w+;/;
      !function() {
        var fragment = elem.createDocumentFragment();
        var form = fragment.appendChild(elem.createElement("div"));
        var input = elem.createElement("input");
        input.setAttribute("type", "radio");
        input.setAttribute("checked", "checked");
        input.setAttribute("name", "t");
        form.appendChild(input);
        support.checkClone = form.cloneNode(true).cloneNode(true).lastChild.checked;
        /** @type {string} */
        form.innerHTML = "<textarea>x</textarea>";
        /** @type {boolean} */
        support.noCloneChecked = !!form.cloneNode(true).lastChild.defaultValue;
      }();
      /** @type {RegExp} */
      var rkeyEvent = /^key/;
      /** @type {RegExp} */
      var rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/;
      /** @type {RegExp} */
      var rtypenamespace = /^([^.]*)(?:\.(.+)|)/;
      jQuery.event = {
        global : {},
        /**
         * @param {string} elem
         * @param {Object} types
         * @param {Function} handler
         * @param {Object} e
         * @param {(Function|string)} selector
         * @return {undefined}
         */
        add : function(elem, types, handler, e, selector) {
          var handleObjIn;
          var eventHandle;
          var segmentMatch;
          var events;
          var t;
          var handleObj;
          var special;
          var handlers;
          var type;
          var namespaces;
          var origType;
          var elemData = data_priv.get(elem);
          if (elemData) {
            if (handler.handler) {
              /** @type {Function} */
              handleObjIn = handler;
              handler = handleObjIn.handler;
              selector = handleObjIn.selector;
            }
            if (!handler.guid) {
              /** @type {number} */
              handler.guid = jQuery.guid++;
            }
            if (!(events = elemData.events)) {
              events = elemData.events = {};
            }
            if (!(eventHandle = elemData.handle)) {
              /** @type {function (Event): ?} */
              eventHandle = elemData.handle = function(e) {
                return "undefined" != typeof jQuery && jQuery.event.triggered !== e.type ? jQuery.event.dispatch.apply(elem, arguments) : void 0;
              };
            }
            types = (types || "").match(core_rnotwhite) || [""];
            t = types.length;
            for (;t--;) {
              /** @type {Array} */
              segmentMatch = rtypenamespace.exec(types[t]) || [];
              type = origType = segmentMatch[1];
              namespaces = (segmentMatch[2] || "").split(".").sort();
              if (type) {
                special = jQuery.event.special[type] || {};
                type = (selector ? special.delegateType : special.bindType) || type;
                special = jQuery.event.special[type] || {};
                handleObj = jQuery.extend({
                  type : type,
                  origType : origType,
                  data : e,
                  /** @type {Function} */
                  handler : handler,
                  guid : handler.guid,
                  selector : selector,
                  needsContext : selector && jQuery.expr.match.needsContext.test(selector),
                  namespace : namespaces.join(".")
                }, handleObjIn);
                if (!(handlers = events[type])) {
                  /** @type {Array} */
                  handlers = events[type] = [];
                  /** @type {number} */
                  handlers.delegateCount = 0;
                  if (!(special.setup && special.setup.call(elem, e, namespaces, eventHandle) !== false)) {
                    if (elem.addEventListener) {
                      elem.addEventListener(type, eventHandle);
                    }
                  }
                }
                if (special.add) {
                  special.add.call(elem, handleObj);
                  if (!handleObj.handler.guid) {
                    handleObj.handler.guid = handler.guid;
                  }
                }
                if (selector) {
                  handlers.splice(handlers.delegateCount++, 0, handleObj);
                } else {
                  handlers.push(handleObj);
                }
                /** @type {boolean} */
                jQuery.event.global[type] = true;
              }
            }
          }
        },
        /**
         * @param {string} elem
         * @param {Object} types
         * @param {Function} handler
         * @param {boolean} selector
         * @param {boolean} keepData
         * @return {undefined}
         */
        remove : function(elem, types, handler, selector, keepData) {
          var j;
          var origCount;
          var tmp;
          var events;
          var t;
          var handleObj;
          var special;
          var handlers;
          var type;
          var namespaces;
          var origType;
          var elemData = data_priv.hasData(elem) && data_priv.get(elem);
          if (elemData && (events = elemData.events)) {
            types = (types || "").match(core_rnotwhite) || [""];
            t = types.length;
            for (;t--;) {
              if (tmp = rtypenamespace.exec(types[t]) || [], type = origType = tmp[1], namespaces = (tmp[2] || "").split(".").sort(), type) {
                special = jQuery.event.special[type] || {};
                type = (selector ? special.delegateType : special.bindType) || type;
                handlers = events[type] || [];
                tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");
                origCount = j = handlers.length;
                for (;j--;) {
                  handleObj = handlers[j];
                  if (!(!keepData && origType !== handleObj.origType)) {
                    if (!(handler && handler.guid !== handleObj.guid)) {
                      if (!(tmp && !tmp.test(handleObj.namespace))) {
                        if (!(selector && (selector !== handleObj.selector && ("**" !== selector || !handleObj.selector)))) {
                          handlers.splice(j, 1);
                          if (handleObj.selector) {
                            handlers.delegateCount--;
                          }
                          if (special.remove) {
                            special.remove.call(elem, handleObj);
                          }
                        }
                      }
                    }
                  }
                }
                if (origCount) {
                  if (!handlers.length) {
                    if (!(special.teardown && special.teardown.call(elem, namespaces, elemData.handle) !== false)) {
                      jQuery.removeEvent(elem, type, elemData.handle);
                    }
                    delete events[type];
                  }
                }
              } else {
                for (type in events) {
                  jQuery.event.remove(elem, type + types[t], handler, selector, true);
                }
              }
            }
            if (jQuery.isEmptyObject(events)) {
              data_priv.remove(elem, "handle events");
            }
          }
        },
        /**
         * @param {Object} event
         * @return {?}
         */
        dispatch : function(event) {
          event = jQuery.event.fix(event);
          var i;
          var j;
          var ret;
          var matched;
          var handleObj;
          /** @type {Array} */
          var handlerQueue = [];
          /** @type {Array.<?>} */
          var args = core_slice.call(arguments);
          var handlers = (data_priv.get(this, "events") || {})[event.type] || [];
          var special = jQuery.event.special[event.type] || {};
          if (args[0] = event, event.delegateTarget = this, !special.preDispatch || special.preDispatch.call(this, event) !== false) {
            handlerQueue = jQuery.event.handlers.call(this, event, handlers);
            /** @type {number} */
            i = 0;
            for (;(matched = handlerQueue[i++]) && !event.isPropagationStopped();) {
              event.currentTarget = matched.elem;
              /** @type {number} */
              j = 0;
              for (;(handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped();) {
                if (!(event.rnamespace && !event.rnamespace.test(handleObj.namespace))) {
                  event.handleObj = handleObj;
                  event.data = handleObj.data;
                  ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);
                  if (void 0 !== ret) {
                    if ((event.result = ret) === false) {
                      event.preventDefault();
                      event.stopPropagation();
                    }
                  }
                }
              }
            }
            return special.postDispatch && special.postDispatch.call(this, event), event.result;
          }
        },
        /**
         * @param {Event} event
         * @param {Object} handlers
         * @return {?}
         */
        handlers : function(event, handlers) {
          var i;
          var matches;
          var ol;
          var handleObj;
          /** @type {Array} */
          var handlerQueue = [];
          var delegateCount = handlers.delegateCount;
          var cur = event.target;
          if (delegateCount && (cur.nodeType && ("click" !== event.type || (isNaN(event.button) || event.button < 1)))) {
            for (;cur !== this;cur = cur.parentNode || this) {
              if (1 === cur.nodeType && (cur.disabled !== true || "click" !== event.type)) {
                /** @type {Array} */
                matches = [];
                /** @type {number} */
                i = 0;
                for (;i < delegateCount;i++) {
                  handleObj = handlers[i];
                  /** @type {string} */
                  ol = handleObj.selector + " ";
                  if (void 0 === matches[ol]) {
                    matches[ol] = handleObj.needsContext ? jQuery(ol, this).index(cur) > -1 : jQuery.find(ol, this, null, [cur]).length;
                  }
                  if (matches[ol]) {
                    matches.push(handleObj);
                  }
                }
                if (matches.length) {
                  handlerQueue.push({
                    elem : cur,
                    handlers : matches
                  });
                }
              }
            }
          }
          return delegateCount < handlers.length && handlerQueue.push({
            elem : this,
            handlers : handlers.slice(delegateCount)
          }), handlerQueue;
        },
        props : "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks : {},
        keyHooks : {
          props : "char charCode key keyCode".split(" "),
          /**
           * @param {Function} event
           * @param {Event} original
           * @return {?}
           */
          filter : function(event, original) {
            return null == event.which && (event.which = null != original.charCode ? original.charCode : original.keyCode), event;
          }
        },
        mouseHooks : {
          props : "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
          /**
           * @param {Object} event
           * @param {Event} original
           * @return {?}
           */
          filter : function(event, original) {
            var eventDoc;
            var doc;
            var body;
            var button = original.button;
            return null == event.pageX && (null != original.clientX && (eventDoc = event.target.ownerDocument || elem, doc = eventDoc.documentElement, body = eventDoc.body, event.pageX = original.clientX + (doc && doc.scrollLeft || (body && body.scrollLeft || 0)) - (doc && doc.clientLeft || (body && body.clientLeft || 0)), event.pageY = original.clientY + (doc && doc.scrollTop || (body && body.scrollTop || 0)) - (doc && doc.clientTop || (body && body.clientTop || 0)))), event.which || (void 0 === 
            button || (event.which = 1 & button ? 1 : 2 & button ? 3 : 4 & button ? 2 : 0)), event;
          }
        },
        /**
         * @param {Object} event
         * @return {?}
         */
        fix : function(event) {
          if (event[jQuery.expando]) {
            return event;
          }
          var i;
          var prop;
          var copy;
          var type = event.type;
          /** @type {Object} */
          var originalEvent = event;
          var fixHook = this.fixHooks[type];
          if (!fixHook) {
            this.fixHooks[type] = fixHook = rmouseEvent.test(type) ? this.mouseHooks : rkeyEvent.test(type) ? this.keyHooks : {};
          }
          copy = fixHook.props ? this.props.concat(fixHook.props) : this.props;
          event = new jQuery.Event(originalEvent);
          i = copy.length;
          for (;i--;) {
            prop = copy[i];
            event[prop] = originalEvent[prop];
          }
          return event.target || (event.target = elem), 3 === event.target.nodeType && (event.target = event.target.parentNode), fixHook.filter ? fixHook.filter(event, originalEvent) : event;
        },
        special : {
          load : {
            noBubble : true
          },
          focus : {
            /**
             * @return {?}
             */
            trigger : function() {
              if (this !== safeActiveElement() && this.focus) {
                return this.focus(), false;
              }
            },
            delegateType : "focusin"
          },
          blur : {
            /**
             * @return {?}
             */
            trigger : function() {
              if (this === safeActiveElement() && this.blur) {
                return this.blur(), false;
              }
            },
            delegateType : "focusout"
          },
          click : {
            /**
             * @return {?}
             */
            trigger : function() {
              if ("checkbox" === this.type && (this.click && jQuery.nodeName(this, "input"))) {
                return this.click(), false;
              }
            },
            /**
             * @param {Object} option
             * @return {?}
             */
            _default : function(option) {
              return jQuery.nodeName(option.target, "a");
            }
          },
          beforeunload : {
            /**
             * @param {Object} event
             * @return {undefined}
             */
            postDispatch : function(event) {
              if (void 0 !== event.result) {
                if (event.originalEvent) {
                  event.originalEvent.returnValue = event.result;
                }
              }
            }
          }
        }
      };
      /**
       * @param {?} elem
       * @param {?} type
       * @param {?} handle
       * @return {undefined}
       */
      jQuery.removeEvent = function(elem, type, handle) {
        if (elem.removeEventListener) {
          elem.removeEventListener(type, handle);
        }
      };
      /**
       * @param {string} elem
       * @param {?} opt_attributes
       * @return {?}
       */
      jQuery.Event = function(elem, opt_attributes) {
        return this instanceof jQuery.Event ? (elem && elem.type ? (this.originalEvent = elem, this.type = elem.type, this.isDefaultPrevented = elem.defaultPrevented || void 0 === elem.defaultPrevented && elem.returnValue === false ? returnTrue : returnFalse) : this.type = elem, opt_attributes && jQuery.extend(this, opt_attributes), this.timeStamp = elem && elem.timeStamp || jQuery.now(), void(this[jQuery.expando] = true)) : new jQuery.Event(elem, opt_attributes);
      };
      jQuery.Event.prototype = {
        /** @type {function (string, ?): ?} */
        constructor : jQuery.Event,
        /** @type {function (): ?} */
        isDefaultPrevented : returnFalse,
        /** @type {function (): ?} */
        isPropagationStopped : returnFalse,
        /** @type {function (): ?} */
        isImmediatePropagationStopped : returnFalse,
        isSimulated : false,
        /**
         * @return {undefined}
         */
        preventDefault : function() {
          var e = this.originalEvent;
          /** @type {function (): ?} */
          this.isDefaultPrevented = returnTrue;
          if (e) {
            if (!this.isSimulated) {
              e.preventDefault();
            }
          }
        },
        /**
         * @return {undefined}
         */
        stopPropagation : function() {
          var e = this.originalEvent;
          /** @type {function (): ?} */
          this.isPropagationStopped = returnTrue;
          if (e) {
            if (!this.isSimulated) {
              e.stopPropagation();
            }
          }
        },
        /**
         * @return {undefined}
         */
        stopImmediatePropagation : function() {
          var e = this.originalEvent;
          /** @type {function (): ?} */
          this.isImmediatePropagationStopped = returnTrue;
          if (e) {
            if (!this.isSimulated) {
              e.stopImmediatePropagation();
            }
          }
          this.stopPropagation();
        }
      };
      jQuery.each({
        mouseenter : "mouseover",
        mouseleave : "mouseout",
        pointerenter : "pointerover",
        pointerleave : "pointerout"
      }, function(orig, fix) {
        jQuery.event.special[orig] = {
          delegateType : fix,
          bindType : fix,
          /**
           * @param {Object} event
           * @return {?}
           */
          handle : function(event) {
            var returnValue;
            var target = this;
            var related = event.relatedTarget;
            var handleObj = event.handleObj;
            return related && (related === target || jQuery.contains(target, related)) || (event.type = handleObj.origType, returnValue = handleObj.handler.apply(this, arguments), event.type = fix), returnValue;
          }
        };
      });
      jQuery.fn.extend({
        /**
         * @param {string} types
         * @param {Function} fn
         * @param {Function} callback
         * @param {boolean} eventName
         * @return {?}
         */
        on : function(types, fn, callback, eventName) {
          return on(this, types, fn, callback, eventName);
        },
        /**
         * @param {string} type
         * @param {Function} callback
         * @param {Object} types
         * @param {Object} selector
         * @return {?}
         */
        one : function(type, callback, types, selector) {
          return on(this, type, callback, types, selector, 1);
        },
        /**
         * @param {string} types
         * @param {Object} fn
         * @param {Function} handler
         * @return {?}
         */
        off : function(types, fn, handler) {
          var handleObj;
          var type;
          if (types && (types.preventDefault && types.handleObj)) {
            return handleObj = types.handleObj, jQuery(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler), this;
          }
          if ("object" === ("undefined" == typeof types ? "undefined" : isArray(types))) {
            for (type in types) {
              this.off(type, fn, types[type]);
            }
            return this;
          }
          return fn !== false && "function" != typeof fn || (handler = fn, fn = void 0), handler === false && (handler = returnFalse), this.each(function() {
            jQuery.event.remove(this, types, handler, fn);
          });
        }
      });
      /** @type {RegExp} */
      var br = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi;
      /** @type {RegExp} */
      var rRadial = /<script|<style|<link/i;
      /** @type {RegExp} */
      var BEGIN_TAG_REGEXP = /checked\s*(?:[^=]|=\s*.checked.)/i;
      /** @type {RegExp} */
      var rscriptTypeMasked = /^true\/(.*)/;
      /** @type {RegExp} */
      var rclass = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
      jQuery.extend({
        /**
         * @param {string} b
         * @return {?}
         */
        htmlPrefilter : function(b) {
          return b.replace(br, "<$1></$2>");
        },
        /**
         * @param {Object} elem
         * @param {(boolean|number|string)} dataAndEvents
         * @param {(boolean|number|string)} deepDataAndEvents
         * @return {?}
         */
        clone : function clone(elem, dataAndEvents, deepDataAndEvents) {
          var i;
          var l;
          var srcElements;
          var destElements;
          var fragment = elem.cloneNode(true);
          var inPage = jQuery.contains(elem.ownerDocument, elem);
          if (!(support.noCloneChecked || (1 !== elem.nodeType && 11 !== elem.nodeType || jQuery.isXMLDoc(elem)))) {
            destElements = getAll(fragment);
            srcElements = getAll(elem);
            /** @type {number} */
            i = 0;
            l = srcElements.length;
            for (;i < l;i++) {
              fixInput(srcElements[i], destElements[i]);
            }
          }
          if (dataAndEvents) {
            if (deepDataAndEvents) {
              srcElements = srcElements || getAll(elem);
              destElements = destElements || getAll(fragment);
              /** @type {number} */
              i = 0;
              l = srcElements.length;
              for (;i < l;i++) {
                cloneCopyEvent(srcElements[i], destElements[i]);
              }
            } else {
              cloneCopyEvent(elem, fragment);
            }
          }
          return destElements = getAll(fragment, "script"), destElements.length > 0 && setGlobalEval(destElements, !inPage && getAll(elem, "script")), fragment;
        },
        /**
         * @param {?} elems
         * @return {undefined}
         */
        cleanData : function(elems) {
          var data;
          var elem;
          var type;
          var special = jQuery.event.special;
          /** @type {number} */
          var i = 0;
          for (;void 0 !== (elem = elems[i]);i++) {
            if ($(elem)) {
              if (data = elem[data_priv.expando]) {
                if (data.events) {
                  for (type in data.events) {
                    if (special[type]) {
                      jQuery.event.remove(elem, type);
                    } else {
                      jQuery.removeEvent(elem, type, data.handle);
                    }
                  }
                }
                elem[data_priv.expando] = void 0;
              }
              if (elem[data_user.expando]) {
                elem[data_user.expando] = void 0;
              }
            }
          }
        }
      });
      jQuery.fn.extend({
        /** @type {function (Array, Object, Function, Object): ?} */
        domManip : init,
        /**
         * @param {?} type
         * @return {?}
         */
        detach : function(type) {
          return remove(this, type, true);
        },
        /**
         * @param {string} elems
         * @return {?}
         */
        remove : function(elems) {
          return remove(this, elems);
        },
        /**
         * @param {string} name
         * @return {?}
         */
        text : function(name) {
          return access(this, function(textString) {
            return void 0 === textString ? jQuery.text(this) : this.empty().each(function() {
              if (!(1 !== this.nodeType && (11 !== this.nodeType && 9 !== this.nodeType))) {
                /** @type {string} */
                this.textContent = textString;
              }
            });
          }, null, name, arguments.length);
        },
        /**
         * @return {?}
         */
        append : function() {
          return init(this, arguments, function(elem) {
            if (1 === this.nodeType || (11 === this.nodeType || 9 === this.nodeType)) {
              var target = manipulationTarget(this, elem);
              target.appendChild(elem);
            }
          });
        },
        /**
         * @return {?}
         */
        prepend : function() {
          return init(this, arguments, function(elem) {
            if (1 === this.nodeType || (11 === this.nodeType || 9 === this.nodeType)) {
              var target = manipulationTarget(this, elem);
              target.insertBefore(elem, target.firstChild);
            }
          });
        },
        /**
         * @return {?}
         */
        before : function() {
          return init(this, arguments, function(elem) {
            if (this.parentNode) {
              this.parentNode.insertBefore(elem, this);
            }
          });
        },
        /**
         * @return {?}
         */
        after : function() {
          return init(this, arguments, function(elem) {
            if (this.parentNode) {
              this.parentNode.insertBefore(elem, this.nextSibling);
            }
          });
        },
        /**
         * @return {?}
         */
        empty : function() {
          var elem;
          /** @type {number} */
          var unlock = 0;
          for (;null != (elem = this[unlock]);unlock++) {
            if (1 === elem.nodeType) {
              jQuery.cleanData(getAll(elem, false));
              /** @type {string} */
              elem.textContent = "";
            }
          }
          return this;
        },
        /**
         * @param {?} dataAndEvents
         * @param {?} deepDataAndEvents
         * @return {?}
         */
        clone : function(dataAndEvents, deepDataAndEvents) {
          return dataAndEvents = null != dataAndEvents && dataAndEvents, deepDataAndEvents = null == deepDataAndEvents ? dataAndEvents : deepDataAndEvents, this.map(function() {
            return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
          });
        },
        /**
         * @param {string} value
         * @return {?}
         */
        html : function(value) {
          return access(this, function(value) {
            var elem = this[0] || {};
            /** @type {number} */
            var i = 0;
            var l = this.length;
            if (void 0 === value && 1 === elem.nodeType) {
              return elem.innerHTML;
            }
            if ("string" == typeof value && (!rRadial.test(value) && !wrapMap[(rtagName.exec(value) || ["", ""])[1].toLowerCase()])) {
              value = jQuery.htmlPrefilter(value);
              try {
                for (;i < l;i++) {
                  elem = this[i] || {};
                  if (1 === elem.nodeType) {
                    jQuery.cleanData(getAll(elem, false));
                    /** @type {(Object|string)} */
                    elem.innerHTML = value;
                  }
                }
                /** @type {number} */
                elem = 0;
              } catch (s) {
              }
            }
            if (elem) {
              this.empty().append(value);
            }
          }, null, value, arguments.length);
        },
        /**
         * @return {?}
         */
        replaceWith : function() {
          /** @type {Array} */
          var values = [];
          return init(this, arguments, function(relatedNode) {
            var node = this.parentNode;
            if (jQuery.inArray(this, values) < 0) {
              jQuery.cleanData(getAll(this));
              if (node) {
                node.replaceChild(relatedNode, this);
              }
            }
          }, values);
        }
      });
      jQuery.each({
        appendTo : "append",
        prependTo : "prepend",
        insertBefore : "before",
        insertAfter : "after",
        replaceAll : "replaceWith"
      }, function(original, method) {
        /**
         * @param {string} ol
         * @return {?}
         */
        jQuery.fn[original] = function(ol) {
          var resp;
          /** @type {Array} */
          var ret = [];
          var insert = jQuery(ol);
          /** @type {number} */
          var last = insert.length - 1;
          /** @type {number} */
          var i = 0;
          for (;i <= last;i++) {
            resp = i === last ? this : this.clone(true);
            jQuery(insert[i])[method](resp);
            core_push.apply(ret, resp.get());
          }
          return this.pushStack(ret);
        };
      });
      var iframe;
      var files = {
        HTML : "block",
        BODY : "block"
      };
      /** @type {RegExp} */
      var rbracket = /^margin/;
      /** @type {RegExp} */
      var rnumnonpx = new RegExp("^(" + core_pnum + ")(?!px)[a-z%]+$", "i");
      /**
       * @param {Node} elem
       * @return {?}
       */
      var getStyles = function(elem) {
        var defaultView = elem.ownerDocument.defaultView;
        return defaultView && defaultView.opener || (defaultView = self), defaultView.getComputedStyle(elem);
      };
      /**
       * @param {Element} el
       * @param {?} style
       * @param {Function} callback
       * @param {Array} args
       * @return {?}
       */
      var normalize = function(el, style, callback, args) {
        var out;
        var name;
        var old = {};
        for (name in style) {
          old[name] = el.style[name];
          el.style[name] = style[name];
        }
        out = callback.apply(el, args || []);
        for (name in style) {
          el.style[name] = old[name];
        }
        return out;
      };
      var parent = elem.documentElement;
      !function() {
        /**
         * @return {undefined}
         */
        function computePixelPositionAndBoxSizingReliable() {
          /** @type {string} */
          div.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%";
          /** @type {string} */
          div.innerHTML = "";
          parent.appendChild(el);
          var css = self.getComputedStyle(div);
          /** @type {boolean} */
          e = "1%" !== css.top;
          /** @type {boolean} */
          s = "2px" === css.marginLeft;
          /** @type {boolean} */
          i = "4px" === css.width;
          /** @type {string} */
          div.style.marginRight = "50%";
          /** @type {boolean} */
          n = "4px" === css.marginRight;
          parent.removeChild(el);
        }
        var e;
        var i;
        var n;
        var s;
        var el = elem.createElement("div");
        var div = elem.createElement("div");
        if (div.style) {
          /** @type {string} */
          div.style.backgroundClip = "content-box";
          /** @type {string} */
          div.cloneNode(true).style.backgroundClip = "";
          /** @type {boolean} */
          support.clearCloneStyle = "content-box" === div.style.backgroundClip;
          /** @type {string} */
          el.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute";
          el.appendChild(div);
          jQuery.extend(support, {
            /**
             * @return {?}
             */
            pixelPosition : function() {
              return computePixelPositionAndBoxSizingReliable(), e;
            },
            /**
             * @return {?}
             */
            boxSizingReliable : function() {
              return null == i && computePixelPositionAndBoxSizingReliable(), i;
            },
            /**
             * @return {?}
             */
            pixelMarginRight : function() {
              return null == i && computePixelPositionAndBoxSizingReliable(), n;
            },
            /**
             * @return {?}
             */
            reliableMarginLeft : function() {
              return null == i && computePixelPositionAndBoxSizingReliable(), s;
            },
            /**
             * @return {?}
             */
            reliableMarginRight : function() {
              var t;
              var marginDiv = div.appendChild(elem.createElement("div"));
              return marginDiv.style.cssText = div.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", marginDiv.style.marginRight = marginDiv.style.width = "0", div.style.width = "1px", parent.appendChild(el), t = !parseFloat(self.getComputedStyle(marginDiv).marginRight), parent.removeChild(el), div.removeChild(marginDiv), t;
            }
          });
        }
      }();
      /** @type {RegExp} */
      var rdisplayswap = /^(none|table(?!-c[ea]).+)/;
      var props = {
        position : "absolute",
        visibility : "hidden",
        display : "block"
      };
      var object = {
        letterSpacing : "0",
        fontWeight : "400"
      };
      /** @type {Array} */
      var cssPrefixes = ["Webkit", "O", "Moz", "ms"];
      var style = elem.createElement("div").style;
      jQuery.extend({
        cssHooks : {
          opacity : {
            /**
             * @param {string} name
             * @param {string} value
             * @return {?}
             */
            get : function(name, value) {
              if (value) {
                var buffer = css(name, "opacity");
                return "" === buffer ? "1" : buffer;
              }
            }
          }
        },
        cssNumber : {
          animationIterationCount : true,
          columnCount : true,
          fillOpacity : true,
          flexGrow : true,
          flexShrink : true,
          fontWeight : true,
          lineHeight : true,
          opacity : true,
          order : true,
          orphans : true,
          widows : true,
          zIndex : true,
          zoom : true
        },
        cssProps : {
          "float" : "cssFloat"
        },
        /**
         * @param {string} optgroup
         * @param {string} prop
         * @param {string} val
         * @param {Object} fn
         * @return {?}
         */
        style : function init(optgroup, prop, val, fn) {
          if (optgroup && (3 !== optgroup.nodeType && (8 !== optgroup.nodeType && optgroup.style))) {
            var parts;
            var kind;
            var hooks;
            var name = jQuery.camelCase(prop);
            var style = optgroup.style;
            return prop = jQuery.cssProps[name] || (jQuery.cssProps[name] = vendor(name) || name), hooks = jQuery.cssHooks[prop] || jQuery.cssHooks[name], void 0 === val ? hooks && ("get" in hooks && void 0 !== (parts = hooks.get(optgroup, false, fn))) ? parts : style[prop] : (kind = "undefined" == typeof val ? "undefined" : isArray(val), "string" === kind && ((parts = regexp.exec(val)) && (parts[1] && (val = add(optgroup, prop, parts), kind = "number"))), null != val && (val === val && ("number" === 
            kind && (val += parts && parts[3] || (jQuery.cssNumber[name] ? "" : "px")), support.clearCloneStyle || ("" !== val || (0 !== prop.indexOf("background") || (style[prop] = "inherit"))), hooks && ("set" in hooks && void 0 === (val = hooks.set(optgroup, val, fn))) || (style[prop] = val))), void 0);
          }
        },
        /**
         * @param {string} name
         * @param {string} property
         * @param {boolean} recurring
         * @param {?} key
         * @return {?}
         */
        css : function(name, property, recurring, key) {
          var value;
          var duration;
          var result;
          var prop = jQuery.camelCase(property);
          return property = jQuery.cssProps[prop] || (jQuery.cssProps[prop] = vendor(prop) || prop), result = jQuery.cssHooks[property] || jQuery.cssHooks[prop], result && ("get" in result && (value = result.get(name, true, recurring))), void 0 === value && (value = css(name, property, key)), "normal" === value && (property in object && (value = object[property])), "" === recurring || recurring ? (duration = parseFloat(value), recurring === true || isFinite(duration) ? duration || 0 : value) : value;
        }
      });
      jQuery.each(["height", "width"], function(dataAndEvents, prop) {
        jQuery.cssHooks[prop] = {
          /**
           * @param {string} name
           * @param {string} value
           * @param {Object} extra
           * @return {?}
           */
          get : function(name, value, extra) {
            if (value) {
              return rdisplayswap.test(jQuery.css(name, "display")) && 0 === name.offsetWidth ? normalize(name, props, function() {
                return getWidthOrHeight(name, prop, extra);
              }) : getWidthOrHeight(name, prop, extra);
            }
          },
          /**
           * @param {string} name
           * @param {?} value
           * @param {Object} object
           * @return {?}
           */
          set : function(name, value, object) {
            var match;
            var styles = object && getStyles(name);
            var which = object && augmentWidthOrHeight(name, prop, object, "border-box" === jQuery.css(name, "boxSizing", false, styles), styles);
            return which && ((match = regexp.exec(value)) && ("px" !== (match[3] || "px") && (name.style[prop] = value, value = jQuery.css(name, prop)))), set(name, value, which);
          }
        };
      });
      jQuery.cssHooks.marginLeft = addGetHookIf(support.reliableMarginLeft, function(child, dataAndEvents) {
        if (dataAndEvents) {
          return(parseFloat(css(child, "marginLeft")) || child.getBoundingClientRect().left - normalize(child, {
            marginLeft : 0
          }, function() {
            return child.getBoundingClientRect().left;
          })) + "px";
        }
      });
      jQuery.cssHooks.marginRight = addGetHookIf(support.reliableMarginRight, function(style, dataAndEvents) {
        if (dataAndEvents) {
          return normalize(style, {
            display : "inline-block"
          }, css, [style, "marginRight"]);
        }
      });
      jQuery.each({
        margin : "",
        padding : "",
        border : "Width"
      }, function(prefix, suffix) {
        jQuery.cssHooks[prefix + suffix] = {
          /**
           * @param {string} str
           * @return {?}
           */
          expand : function(str) {
            /** @type {number} */
            var i = 0;
            var expanded = {};
            /** @type {Array} */
            var tokens = "string" == typeof str ? str.split(" ") : [str];
            for (;i < 4;i++) {
              expanded[prefix + cssExpand[i] + suffix] = tokens[i] || (tokens[i - 2] || tokens[0]);
            }
            return expanded;
          }
        };
        if (!rbracket.test(prefix)) {
          /** @type {function (string, ?, Object): ?} */
          jQuery.cssHooks[prefix + suffix].set = set;
        }
      });
      jQuery.fn.extend({
        /**
         * @param {string} name
         * @param {string} value
         * @return {?}
         */
        css : function(name, value) {
          return access(this, function(elem, prop, value) {
            var styles;
            var valsLength;
            var map = {};
            /** @type {number} */
            var i = 0;
            if (jQuery.isArray(prop)) {
              styles = getStyles(elem);
              valsLength = prop.length;
              for (;i < valsLength;i++) {
                map[prop[i]] = jQuery.css(elem, prop[i], false, styles);
              }
              return map;
            }
            return void 0 !== value ? jQuery.style(elem, prop, value) : jQuery.css(elem, prop);
          }, name, value, arguments.length > 1);
        },
        /**
         * @return {?}
         */
        show : function() {
          return showHide(this, true);
        },
        /**
         * @return {?}
         */
        hide : function() {
          return showHide(this);
        },
        /**
         * @param {?} state
         * @return {?}
         */
        toggle : function(state) {
          return "boolean" == typeof state ? state ? this.show() : this.hide() : this.each(function() {
            if (isHidden(this)) {
              jQuery(this).show();
            } else {
              jQuery(this).hide();
            }
          });
        }
      });
      /** @type {function (string, ?, string, (number|string), number): ?} */
      jQuery.Tween = Tween;
      Tween.prototype = {
        /** @type {function (string, ?, string, (number|string), number): ?} */
        constructor : Tween,
        /**
         * @param {string} type
         * @param {Object} second
         * @param {?} prop
         * @param {?} to
         * @param {string} easing
         * @param {string} unit
         * @return {undefined}
         */
        init : function(type, second, prop, to, easing, unit) {
          /** @type {string} */
          this.elem = type;
          this.prop = prop;
          this.easing = easing || jQuery.easing._default;
          /** @type {Object} */
          this.options = second;
          this.start = this.now = this.cur();
          this.end = to;
          this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
        },
        /**
         * @return {?}
         */
        cur : function() {
          var hooks = Tween.propHooks[this.prop];
          return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
        },
        /**
         * @param {number} percent
         * @return {?}
         */
        run : function(percent) {
          var eased;
          var hooks = Tween.propHooks[this.prop];
          return this.options.duration ? this.pos = eased = jQuery.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration) : this.pos = eased = percent, this.now = (this.end - this.start) * eased + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), hooks && hooks.set ? hooks.set(this) : Tween.propHooks._default.set(this), this;
        }
      };
      Tween.prototype.init.prototype = Tween.prototype;
      Tween.propHooks = {
        _default : {
          /**
           * @param {string} name
           * @return {?}
           */
          get : function(name) {
            var node;
            return 1 !== name.elem.nodeType || null != name.elem[name.prop] && null == name.elem.style[name.prop] ? name.elem[name.prop] : (node = jQuery.css(name.elem, name.prop, ""), node && "auto" !== node ? node : 0);
          },
          /**
           * @param {string} name
           * @return {undefined}
           */
          set : function(name) {
            if (jQuery.fx.step[name.prop]) {
              jQuery.fx.step[name.prop](name);
            } else {
              if (1 !== name.elem.nodeType || null == name.elem.style[jQuery.cssProps[name.prop]] && !jQuery.cssHooks[name.prop]) {
                name.elem[name.prop] = name.now;
              } else {
                jQuery.style(name.elem, name.prop, name.now + name.unit);
              }
            }
          }
        }
      };
      Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
        /**
         * @param {string} name
         * @return {undefined}
         */
        set : function(name) {
          if (name.elem.nodeType) {
            if (name.elem.parentNode) {
              name.elem[name.prop] = name.now;
            }
          }
        }
      };
      jQuery.easing = {
        /**
         * @param {?} t
         * @return {?}
         */
        linear : function(t) {
          return t;
        },
        /**
         * @param {number} p
         * @return {?}
         */
        swing : function(p) {
          return 0.5 - Math.cos(p * Math.PI) / 2;
        },
        _default : "swing"
      };
      /** @type {function (string, Object, ?, ?, string, string): undefined} */
      jQuery.fx = Tween.prototype.init;
      jQuery.fx.step = {};
      var fxNow;
      var interval;
      /** @type {RegExp} */
      var rplusequals = /^(?:toggle|show|hide)$/;
      /** @type {RegExp} */
      var rrun = /queueHooks$/;
      jQuery.Animation = jQuery.extend(Animation, {
        tweeners : {
          "*" : [function(v, value) {
            var tween = this.createTween(v, value);
            return add(tween.elem, v, regexp.exec(value), tween), tween;
          }]
        },
        /**
         * @param {Object} value
         * @param {Function} callback
         * @return {undefined}
         */
        tweener : function(value, callback) {
          if (jQuery.isFunction(value)) {
            /** @type {Object} */
            callback = value;
            /** @type {Array} */
            value = ["*"];
          } else {
            value = value.match(core_rnotwhite);
          }
          var type;
          /** @type {number} */
          var j = 0;
          var jlen = value.length;
          for (;j < jlen;j++) {
            type = value[j];
            Animation.tweeners[type] = Animation.tweeners[type] || [];
            Animation.tweeners[type].unshift(callback);
          }
        },
        prefilters : [defaultPrefilter],
        /**
         * @param {?} suite
         * @param {?} prepend
         * @return {undefined}
         */
        prefilter : function(suite, prepend) {
          if (prepend) {
            Animation.prefilters.unshift(suite);
          } else {
            Animation.prefilters.push(suite);
          }
        }
      });
      /**
       * @param {string} speed
       * @param {string} easing
       * @param {boolean} fn
       * @return {?}
       */
      jQuery.speed = function(speed, easing, fn) {
        var opt = speed && "object" === ("undefined" == typeof speed ? "undefined" : isArray(speed)) ? jQuery.extend({}, speed) : {
          complete : fn || (!fn && easing || jQuery.isFunction(speed) && speed),
          duration : speed,
          easing : fn && easing || easing && (!jQuery.isFunction(easing) && easing)
        };
        return opt.duration = jQuery.fx.off ? 0 : "number" == typeof opt.duration ? opt.duration : opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[opt.duration] : jQuery.fx.speeds._default, null != opt.queue && opt.queue !== true || (opt.queue = "fx"), opt.old = opt.complete, opt.complete = function() {
          if (jQuery.isFunction(opt.old)) {
            opt.old.call(this);
          }
          if (opt.queue) {
            jQuery.dequeue(this, opt.queue);
          }
        }, opt;
      };
      jQuery.fn.extend({
        /**
         * @param {string} speed
         * @param {number} to
         * @param {string} callback
         * @param {boolean} _callback
         * @return {?}
         */
        fadeTo : function(speed, to, callback, _callback) {
          return this.filter(isHidden).css("opacity", 0).show().end().animate({
            opacity : to
          }, speed, callback, _callback);
        },
        /**
         * @param {?} prop
         * @param {string} speed
         * @param {string} easing
         * @param {boolean} callback
         * @return {?}
         */
        animate : function(prop, speed, easing, callback) {
          var empty = jQuery.isEmptyObject(prop);
          var optall = jQuery.speed(speed, easing, callback);
          /**
           * @return {undefined}
           */
          var doAnimation = function() {
            var anim = Animation(this, jQuery.extend({}, prop), optall);
            if (empty || data_priv.get(this, "finish")) {
              anim.stop(true);
            }
          };
          return doAnimation.finish = doAnimation, empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
        },
        /**
         * @param {boolean} type
         * @param {boolean} clearQueue
         * @param {boolean} gotoEnd
         * @return {?}
         */
        stop : function(type, clearQueue, gotoEnd) {
          /**
           * @param {Object} e
           * @return {undefined}
           */
          var stop = function(e) {
            var stop = e.stop;
            delete e.stop;
            stop(gotoEnd);
          };
          return "string" != typeof type && (gotoEnd = clearQueue, clearQueue = type, type = void 0), clearQueue && (type !== false && this.queue(type || "fx", [])), this.each(function() {
            /** @type {boolean} */
            var e = true;
            var index = null != type && type + "queueHooks";
            /** @type {Array} */
            var timers = jQuery.timers;
            var iteratee = data_priv.get(this);
            if (index) {
              if (iteratee[index]) {
                if (iteratee[index].stop) {
                  stop(iteratee[index]);
                }
              }
            } else {
              for (index in iteratee) {
                if (iteratee[index]) {
                  if (iteratee[index].stop) {
                    if (rrun.test(index)) {
                      stop(iteratee[index]);
                    }
                  }
                }
              }
            }
            /** @type {number} */
            index = timers.length;
            for (;index--;) {
              if (!(timers[index].elem !== this)) {
                if (!(null != type && timers[index].queue !== type)) {
                  timers[index].anim.stop(gotoEnd);
                  /** @type {boolean} */
                  e = false;
                  timers.splice(index, 1);
                }
              }
            }
            if (!(!e && gotoEnd)) {
              jQuery.dequeue(this, type);
            }
          });
        },
        /**
         * @param {string} type
         * @return {?}
         */
        finish : function(type) {
          return type !== false && (type = type || "fx"), this.each(function() {
            var index;
            var data = data_priv.get(this);
            var array = data[type + "queue"];
            var event = data[type + "queueHooks"];
            /** @type {Array} */
            var timers = jQuery.timers;
            var length = array ? array.length : 0;
            /** @type {boolean} */
            data.finish = true;
            jQuery.queue(this, type, []);
            if (event) {
              if (event.stop) {
                event.stop.call(this, true);
              }
            }
            /** @type {number} */
            index = timers.length;
            for (;index--;) {
              if (timers[index].elem === this) {
                if (timers[index].queue === type) {
                  timers[index].anim.stop(true);
                  timers.splice(index, 1);
                }
              }
            }
            /** @type {number} */
            index = 0;
            for (;index < length;index++) {
              if (array[index]) {
                if (array[index].finish) {
                  array[index].finish.call(this);
                }
              }
            }
            delete data.finish;
          });
        }
      });
      jQuery.each(["toggle", "show", "hide"], function(dataAndEvents, name) {
        var matcherFunction = jQuery.fn[name];
        /**
         * @param {string} speed
         * @param {string} callback
         * @param {boolean} next_callback
         * @return {?}
         */
        jQuery.fn[name] = function(speed, callback, next_callback) {
          return null == speed || "boolean" == typeof speed ? matcherFunction.apply(this, arguments) : this.animate(genFx(name, true), speed, callback, next_callback);
        };
      });
      jQuery.each({
        slideDown : genFx("show"),
        slideUp : genFx("hide"),
        slideToggle : genFx("toggle"),
        fadeIn : {
          opacity : "show"
        },
        fadeOut : {
          opacity : "hide"
        },
        fadeToggle : {
          opacity : "toggle"
        }
      }, function(original, props) {
        /**
         * @param {string} speed
         * @param {string} callback
         * @param {boolean} next_callback
         * @return {?}
         */
        jQuery.fn[original] = function(speed, callback, next_callback) {
          return this.animate(props, speed, callback, next_callback);
        };
      });
      /** @type {Array} */
      jQuery.timers = [];
      /**
       * @return {undefined}
       */
      jQuery.fx.tick = function() {
        var last;
        /** @type {number} */
        var i = 0;
        /** @type {Array} */
        var timers = jQuery.timers;
        fxNow = jQuery.now();
        for (;i < timers.length;i++) {
          last = timers[i];
          if (!last()) {
            if (!(timers[i] !== last)) {
              timers.splice(i--, 1);
            }
          }
        }
        if (!timers.length) {
          jQuery.fx.stop();
        }
        fxNow = void 0;
      };
      /**
       * @param {?} timer
       * @return {undefined}
       */
      jQuery.fx.timer = function(timer) {
        jQuery.timers.push(timer);
        if (timer()) {
          jQuery.fx.start();
        } else {
          jQuery.timers.pop();
        }
      };
      /** @type {number} */
      jQuery.fx.interval = 13;
      /**
       * @return {undefined}
       */
      jQuery.fx.start = function() {
        if (!interval) {
          interval = self.setInterval(jQuery.fx.tick, jQuery.fx.interval);
        }
      };
      /**
       * @return {undefined}
       */
      jQuery.fx.stop = function() {
        self.clearInterval(interval);
        /** @type {null} */
        interval = null;
      };
      jQuery.fx.speeds = {
        slow : 600,
        fast : 200,
        _default : 400
      };
      /**
       * @param {Function} time
       * @param {string} type
       * @return {?}
       */
      jQuery.fn.delay = function(time, type) {
        return time = jQuery.fx ? jQuery.fx.speeds[time] || time : time, type = type || "fx", this.queue(type, function(next, event) {
          var timeout = self.setTimeout(next, time);
          /**
           * @return {undefined}
           */
          event.stop = function() {
            self.clearTimeout(timeout);
          };
        });
      };
      (function() {
        var input = elem.createElement("input");
        var select = elem.createElement("select");
        var opt = select.appendChild(elem.createElement("option"));
        /** @type {string} */
        input.type = "checkbox";
        /** @type {boolean} */
        support.checkOn = "" !== input.value;
        support.optSelected = opt.selected;
        /** @type {boolean} */
        select.disabled = true;
        /** @type {boolean} */
        support.optDisabled = !opt.disabled;
        input = elem.createElement("input");
        /** @type {string} */
        input.value = "t";
        /** @type {string} */
        input.type = "radio";
        /** @type {boolean} */
        support.radioValue = "t" === input.value;
      })();
      var boolHook;
      var data = jQuery.expr.attrHandle;
      jQuery.fn.extend({
        /**
         * @param {string} name
         * @param {boolean} val
         * @return {?}
         */
        attr : function(name, val) {
          return access(this, jQuery.attr, name, val, arguments.length > 1);
        },
        /**
         * @param {string} name
         * @return {?}
         */
        removeAttr : function(name) {
          return this.each(function() {
            jQuery.removeAttr(this, name);
          });
        }
      });
      jQuery.extend({
        /**
         * @param {string} elem
         * @param {Object} name
         * @param {string} value
         * @return {?}
         */
        attr : function(elem, name, value) {
          var ret;
          var hooks;
          var nodeType = elem.nodeType;
          if (3 !== nodeType && (8 !== nodeType && 2 !== nodeType)) {
            return "undefined" == typeof elem.getAttribute ? jQuery.prop(elem, name, value) : (1 === nodeType && jQuery.isXMLDoc(elem) || (name = name.toLowerCase(), hooks = jQuery.attrHooks[name] || (jQuery.expr.match.bool.test(name) ? boolHook : void 0)), void 0 !== value ? null === value ? void jQuery.removeAttr(elem, name) : hooks && ("set" in hooks && void 0 !== (ret = hooks.set(elem, value, name))) ? ret : (elem.setAttribute(name, value + ""), value) : hooks && ("get" in hooks && null !== (ret = 
            hooks.get(elem, name))) ? ret : (ret = jQuery.find.attr(elem, name), null == ret ? void 0 : ret));
          }
        },
        attrHooks : {
          type : {
            /**
             * @param {string} name
             * @param {?} value
             * @return {?}
             */
            set : function(name, value) {
              if (!support.radioValue && ("radio" === value && jQuery.nodeName(name, "input"))) {
                var ret = name.value;
                return name.setAttribute("type", value), ret && (name.value = ret), value;
              }
            }
          }
        },
        /**
         * @param {?} elem
         * @param {string} value
         * @return {undefined}
         */
        removeAttr : function(elem, value) {
          var name;
          var propName;
          /** @type {number} */
          var i = 0;
          var attrNames = value && value.match(core_rnotwhite);
          if (attrNames && 1 === elem.nodeType) {
            for (;name = attrNames[i++];) {
              propName = jQuery.propFix[name] || name;
              if (jQuery.expr.match.bool.test(name)) {
                /** @type {boolean} */
                elem[propName] = false;
              }
              elem.removeAttribute(name);
            }
          }
        }
      });
      boolHook = {
        /**
         * @param {string} name
         * @param {?} value
         * @param {Object} type
         * @return {?}
         */
        set : function(name, value, type) {
          return value === false ? jQuery.removeAttr(name, type) : name.setAttribute(type, type), type;
        }
      };
      jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function(dataAndEvents, name) {
        var callback = data[name] || jQuery.find.attr;
        /**
         * @param {string} match
         * @param {Object} header
         * @param {string} arg
         * @return {?}
         */
        data[name] = function(match, header, arg) {
          var source;
          var value;
          return arg || (value = data[header], data[header] = source, source = null != callback(match, header, arg) ? header.toLowerCase() : null, data[header] = value), source;
        };
      });
      /** @type {RegExp} */
      var rchecked = /^(?:input|select|textarea|button)$/i;
      /** @type {RegExp} */
      var exclude = /^(?:a|area)$/i;
      jQuery.fn.extend({
        /**
         * @param {string} type
         * @param {boolean} value
         * @return {?}
         */
        prop : function(type, value) {
          return access(this, jQuery.prop, type, value, arguments.length > 1);
        },
        /**
         * @param {?} name
         * @return {?}
         */
        removeProp : function(name) {
          return this.each(function() {
            delete this[jQuery.propFix[name] || name];
          });
        }
      });
      jQuery.extend({
        /**
         * @param {string} elem
         * @param {Object} name
         * @param {?} value
         * @return {?}
         */
        prop : function(elem, name, value) {
          var ret;
          var hooks;
          var nodeType = elem.nodeType;
          if (3 !== nodeType && (8 !== nodeType && 2 !== nodeType)) {
            return 1 === nodeType && jQuery.isXMLDoc(elem) || (name = jQuery.propFix[name] || name, hooks = jQuery.propHooks[name]), void 0 !== value ? hooks && ("set" in hooks && void 0 !== (ret = hooks.set(elem, value, name))) ? ret : elem[name] = value : hooks && ("get" in hooks && null !== (ret = hooks.get(elem, name))) ? ret : elem[name];
          }
        },
        propHooks : {
          tabIndex : {
            /**
             * @param {string} name
             * @return {?}
             */
            get : function(name) {
              var tabindex = jQuery.find.attr(name, "tabindex");
              return tabindex ? parseInt(tabindex, 10) : rchecked.test(name.nodeName) || exclude.test(name.nodeName) && name.href ? 0 : -1;
            }
          }
        },
        propFix : {
          "for" : "htmlFor",
          "class" : "className"
        }
      });
      if (!support.optSelected) {
        jQuery.propHooks.selected = {
          /**
           * @param {string} name
           * @return {?}
           */
          get : function(name) {
            var parent = name.parentNode;
            return parent && (parent.parentNode && parent.parentNode.selectedIndex), null;
          },
          /**
           * @param {string} name
           * @return {undefined}
           */
          set : function(name) {
            var elem = name.parentNode;
            if (elem) {
              elem.selectedIndex;
              if (elem.parentNode) {
                elem.parentNode.selectedIndex;
              }
            }
          }
        };
      }
      jQuery.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        jQuery.propFix[this.toLowerCase()] = this;
      });
      /** @type {RegExp} */
      var rQuot = /[\t\r\n\f]/g;
      jQuery.fn.extend({
        /**
         * @param {string} value
         * @return {?}
         */
        addClass : function(value) {
          var object;
          var elem;
          var arg;
          var ret;
          var x;
          var i;
          var index;
          /** @type {number} */
          var l = 0;
          if (jQuery.isFunction(value)) {
            return this.each(function(j) {
              jQuery(this).addClass(value.call(this, j, fn(this)));
            });
          }
          if ("string" == typeof value && value) {
            /** @type {Array} */
            object = value.match(core_rnotwhite) || [];
            for (;elem = this[l++];) {
              if (ret = fn(elem), arg = 1 === elem.nodeType && (" " + ret + " ").replace(rQuot, " ")) {
                /** @type {number} */
                i = 0;
                for (;x = object[i++];) {
                  if (arg.indexOf(" " + x + " ") < 0) {
                    arg += x + " ";
                  }
                }
                index = jQuery.trim(arg);
                if (ret !== index) {
                  elem.setAttribute("class", index);
                }
              }
            }
          }
          return this;
        },
        /**
         * @param {string} value
         * @return {?}
         */
        removeClass : function(value) {
          var parts;
          var elem;
          var html;
          var ret;
          var part;
          var pindex;
          var content;
          /** @type {number} */
          var l = 0;
          if (jQuery.isFunction(value)) {
            return this.each(function(j) {
              jQuery(this).removeClass(value.call(this, j, fn(this)));
            });
          }
          if (!arguments.length) {
            return this.attr("class", "");
          }
          if ("string" == typeof value && value) {
            /** @type {Array} */
            parts = value.match(core_rnotwhite) || [];
            for (;elem = this[l++];) {
              if (ret = fn(elem), html = 1 === elem.nodeType && (" " + ret + " ").replace(rQuot, " ")) {
                /** @type {number} */
                pindex = 0;
                for (;part = parts[pindex++];) {
                  for (;html.indexOf(" " + part + " ") > -1;) {
                    /** @type {string} */
                    html = html.replace(" " + part + " ", " ");
                  }
                }
                content = jQuery.trim(html);
                if (ret !== content) {
                  elem.setAttribute("class", content);
                }
              }
            }
          }
          return this;
        },
        /**
         * @param {string} value
         * @param {boolean} stateVal
         * @return {?}
         */
        toggleClass : function(value, stateVal) {
          var ret = "undefined" == typeof value ? "undefined" : isArray(value);
          return "boolean" == typeof stateVal && "string" === ret ? stateVal ? this.addClass(value) : this.removeClass(value) : jQuery.isFunction(value) ? this.each(function(i) {
            jQuery(this).toggleClass(value.call(this, i, fn(this), stateVal), stateVal);
          }) : this.each(function() {
            var b;
            var p;
            var li;
            var imageData;
            if ("string" === ret) {
              /** @type {number} */
              p = 0;
              li = jQuery(this);
              imageData = value.match(core_rnotwhite) || [];
              for (;b = imageData[p++];) {
                if (li.hasClass(b)) {
                  li.removeClass(b);
                } else {
                  li.addClass(b);
                }
              }
            } else {
              if (!(void 0 !== value && "boolean" !== ret)) {
                b = fn(this);
                if (b) {
                  data_priv.set(this, "__className__", b);
                }
                if (this.setAttribute) {
                  this.setAttribute("class", b || value === false ? "" : data_priv.get(this, "__className__") || "");
                }
              }
            }
          });
        },
        /**
         * @param {string} value
         * @return {?}
         */
        hasClass : function(value) {
          var match;
          var elem;
          /** @type {number} */
          var n = 0;
          /** @type {string} */
          match = " " + value + " ";
          for (;elem = this[n++];) {
            if (1 === elem.nodeType && (" " + fn(elem) + " ").replace(rQuot, " ").indexOf(match) > -1) {
              return true;
            }
          }
          return false;
        }
      });
      /** @type {RegExp} */
      var rreturn = /\r/g;
      /** @type {RegExp} */
      var normalizr = /[\x20\t\r\n\f]+/g;
      jQuery.fn.extend({
        /**
         * @param {Function} value
         * @return {?}
         */
        val : function(value) {
          var hooks;
          var ret;
          var isFunction;
          var elem = this[0];
          if (arguments.length) {
            return isFunction = jQuery.isFunction(value), this.each(function(i) {
              var val;
              if (1 === this.nodeType) {
                val = isFunction ? value.call(this, i, jQuery(this).val()) : value;
                if (null == val) {
                  /** @type {string} */
                  val = "";
                } else {
                  if ("number" == typeof val) {
                    val += "";
                  } else {
                    if (jQuery.isArray(val)) {
                      val = jQuery.map(val, function(month) {
                        return null == month ? "" : month + "";
                      });
                    }
                  }
                }
                hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()];
                if (!(hooks && ("set" in hooks && void 0 !== hooks.set(this, val, "value")))) {
                  this.value = val;
                }
              }
            });
          }
          if (elem) {
            return hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()], hooks && ("get" in hooks && void 0 !== (ret = hooks.get(elem, "value"))) ? ret : (ret = elem.value, "string" == typeof ret ? ret.replace(rreturn, "") : null == ret ? "" : ret);
          }
        }
      });
      jQuery.extend({
        valHooks : {
          option : {
            /**
             * @param {string} name
             * @return {?}
             */
            get : function(name) {
              var text = jQuery.find.attr(name, "value");
              return null != text ? text : jQuery.trim(jQuery.text(name)).replace(normalizr, " ");
            }
          },
          select : {
            /**
             * @param {string} name
             * @return {?}
             */
            get : function(name) {
              var value;
              var cur;
              var codeSegments = name.options;
              var index = name.selectedIndex;
              /** @type {boolean} */
              var one = "select-one" === name.type || index < 0;
              /** @type {(Array|null)} */
              var values = one ? null : [];
              var max = one ? index + 1 : codeSegments.length;
              var i = index < 0 ? max : one ? index : 0;
              for (;i < max;i++) {
                if (cur = codeSegments[i], (cur.selected || i === index) && ((support.optDisabled ? !cur.disabled : null === cur.getAttribute("disabled")) && (!cur.parentNode.disabled || !jQuery.nodeName(cur.parentNode, "optgroup")))) {
                  if (value = jQuery(cur).val(), one) {
                    return value;
                  }
                  values.push(value);
                }
              }
              return values;
            },
            /**
             * @param {string} name
             * @param {?} value
             * @return {?}
             */
            set : function(name, value) {
              var i;
              var optgroup;
              var tokenized = name.options;
              var values = jQuery.makeArray(value);
              var index = tokenized.length;
              for (;index--;) {
                optgroup = tokenized[index];
                if (optgroup.selected = jQuery.inArray(jQuery.valHooks.option.get(optgroup), values) > -1) {
                  /** @type {boolean} */
                  i = true;
                }
              }
              return i || (name.selectedIndex = -1), values;
            }
          }
        }
      });
      jQuery.each(["radio", "checkbox"], function() {
        jQuery.valHooks[this] = {
          /**
           * @param {string} name
           * @param {?} value
           * @return {?}
           */
          set : function(name, value) {
            if (jQuery.isArray(value)) {
              return name.checked = jQuery.inArray(jQuery(name).val(), value) > -1;
            }
          }
        };
        if (!support.checkOn) {
          /**
           * @param {string} name
           * @return {?}
           */
          jQuery.valHooks[this].get = function(name) {
            return null === name.getAttribute("value") ? "on" : name.value;
          };
        }
      });
      /** @type {RegExp} */
      var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;
      jQuery.extend(jQuery.event, {
        /**
         * @param {string} event
         * @param {Object} data
         * @param {Object} el
         * @param {boolean} onlyHandlers
         * @return {?}
         */
        trigger : function(event, data, el, onlyHandlers) {
          var i;
          var cur;
          var tmp;
          var bubbleType;
          var ontype;
          var handle;
          var special;
          /** @type {Array} */
          var eventPath = [el || elem];
          var type = core_hasOwn.call(event, "type") ? event.type : event;
          var namespaces = core_hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
          if (cur = tmp = el = el || elem, 3 !== el.nodeType && (8 !== el.nodeType && (!rfocusMorph.test(type + jQuery.event.triggered) && (type.indexOf(".") > -1 && (namespaces = type.split("."), type = namespaces.shift(), namespaces.sort()), ontype = type.indexOf(":") < 0 && "on" + type, event = event[jQuery.expando] ? event : new jQuery.Event(type, "object" === ("undefined" == typeof event ? "undefined" : isArray(event)) && event), event.isTrigger = onlyHandlers ? 2 : 3, event.namespace = namespaces.join("."), 
          event.rnamespace = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, event.result = void 0, event.target || (event.target = el), data = null == data ? [event] : jQuery.makeArray(data, [event]), special = jQuery.event.special[type] || {}, onlyHandlers || (!special.trigger || special.trigger.apply(el, data) !== false))))) {
            if (!onlyHandlers && (!special.noBubble && !jQuery.isWindow(el))) {
              bubbleType = special.delegateType || type;
              if (!rfocusMorph.test(bubbleType + type)) {
                cur = cur.parentNode;
              }
              for (;cur;cur = cur.parentNode) {
                eventPath.push(cur);
                tmp = cur;
              }
              if (tmp === (el.ownerDocument || elem)) {
                eventPath.push(tmp.defaultView || (tmp.parentWindow || self));
              }
            }
            /** @type {number} */
            i = 0;
            for (;(cur = eventPath[i++]) && !event.isPropagationStopped();) {
              event.type = i > 1 ? bubbleType : special.bindType || type;
              handle = (data_priv.get(cur, "events") || {})[event.type] && data_priv.get(cur, "handle");
              if (handle) {
                handle.apply(cur, data);
              }
              handle = ontype && cur[ontype];
              if (handle) {
                if (handle.apply) {
                  if ($(cur)) {
                    event.result = handle.apply(cur, data);
                    if (event.result === false) {
                      event.preventDefault();
                    }
                  }
                }
              }
            }
            return event.type = type, onlyHandlers || (event.isDefaultPrevented() || (special._default && special._default.apply(eventPath.pop(), data) !== false || (!$(el) || ontype && (jQuery.isFunction(el[type]) && (!jQuery.isWindow(el) && (tmp = el[ontype], tmp && (el[ontype] = null), jQuery.event.triggered = type, el[type](), jQuery.event.triggered = void 0, tmp && (el[ontype] = tmp))))))), event.result;
          }
        },
        /**
         * @param {string} type
         * @param {Object} elem
         * @param {?} event
         * @return {undefined}
         */
        simulate : function(type, elem, event) {
          var e = jQuery.extend(new jQuery.Event, event, {
            type : type,
            isSimulated : true
          });
          jQuery.event.trigger(e, null, elem);
        }
      });
      jQuery.fn.extend({
        /**
         * @param {string} type
         * @param {?} data
         * @return {?}
         */
        trigger : function(type, data) {
          return this.each(function() {
            jQuery.event.trigger(type, data, this);
          });
        },
        /**
         * @param {string} type
         * @param {Object} data
         * @return {?}
         */
        triggerHandler : function(type, data) {
          var failuresLink = this[0];
          if (failuresLink) {
            return jQuery.event.trigger(type, data, failuresLink, true);
          }
        }
      });
      jQuery.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(dataAndEvents, name) {
        /**
         * @param {Function} handler
         * @param {boolean} fn
         * @return {?}
         */
        jQuery.fn[name] = function(handler, fn) {
          return arguments.length > 0 ? this.on(name, null, handler, fn) : this.trigger(name);
        };
      });
      jQuery.fn.extend({
        /**
         * @param {undefined} fnOver
         * @param {Object} fnOut
         * @return {?}
         */
        hover : function(fnOver, fnOut) {
          return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
        }
      });
      /** @type {boolean} */
      support.focusin = "onfocusin" in self;
      if (!support.focusin) {
        jQuery.each({
          focus : "focusin",
          blur : "focusout"
        }, function(orig, name) {
          /**
           * @param {Object} event
           * @return {undefined}
           */
          var handler = function(event) {
            jQuery.event.simulate(name, event.target, jQuery.event.fix(event));
          };
          jQuery.event.special[name] = {
            /**
             * @return {undefined}
             */
            setup : function() {
              var doc = this.ownerDocument || this;
              var win = data_priv.access(doc, name);
              if (!win) {
                doc.addEventListener(orig, handler, true);
              }
              data_priv.access(doc, name, (win || 0) + 1);
            },
            /**
             * @return {undefined}
             */
            teardown : function() {
              var node = this.ownerDocument || this;
              /** @type {number} */
              var data = data_priv.access(node, name) - 1;
              if (data) {
                data_priv.access(node, name, data);
              } else {
                node.removeEventListener(orig, handler, true);
                data_priv.remove(node, name);
              }
            }
          };
        });
      }
      var node = self.location;
      var iIdCounter = jQuery.now();
      /** @type {RegExp} */
      var rquery = /\?/;
      /**
       * @param {Object} data
       * @return {?}
       */
      jQuery.parseJSON = function(data) {
        return JSON.parse(data + "");
      };
      /**
       * @param {string} data
       * @return {?}
       */
      jQuery.parseXML = function(data) {
        var xml;
        if (!data || "string" != typeof data) {
          return null;
        }
        try {
          xml = (new self.DOMParser).parseFromString(data, "text/xml");
        } catch (i) {
          xml = void 0;
        }
        return xml && !xml.getElementsByTagName("parsererror").length || jQuery.error("Invalid XML: " + data), xml;
      };
      /** @type {RegExp} */
      var trimLeft = /#.*$/;
      /** @type {RegExp} */
      var rts = /([?&])_=[^&]*/;
      /** @type {RegExp} */
      var re = /^(.*?):[ \t]*([^\r\n]*)$/gm;
      /** @type {RegExp} */
      var nocode = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/;
      /** @type {RegExp} */
      var rnoContent = /^(?:GET|HEAD)$/;
      /** @type {RegExp} */
      var rprotocol = /^\/\//;
      var prefilters = {};
      var transports = {};
      /** @type {string} */
      var Me = "*/".concat("*");
      var l = elem.createElement("a");
      l.href = node.href;
      jQuery.extend({
        active : 0,
        lastModified : {},
        etag : {},
        ajaxSettings : {
          url : node.href,
          type : "GET",
          isLocal : nocode.test(node.protocol),
          global : true,
          processData : true,
          async : true,
          contentType : "application/x-www-form-urlencoded; charset=UTF-8",
          accepts : {
            "*" : Me,
            text : "text/plain",
            html : "text/html",
            xml : "application/xml, text/xml",
            json : "application/json, text/javascript"
          },
          contents : {
            xml : /\bxml\b/,
            html : /\bhtml/,
            json : /\bjson\b/
          },
          responseFields : {
            xml : "responseXML",
            text : "responseText",
            json : "responseJSON"
          },
          converters : {
            /** @type {function (new:String, *=): string} */
            "* text" : String,
            "text html" : true,
            /** @type {function (Object): ?} */
            "text json" : jQuery.parseJSON,
            /** @type {function (string): ?} */
            "text xml" : jQuery.parseXML
          },
          flatOptions : {
            url : true,
            context : true
          }
        },
        /**
         * @param {(Object|string)} target
         * @param {Object} settings
         * @return {?}
         */
        ajaxSetup : function(target, settings) {
          return settings ? ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) : ajaxExtend(jQuery.ajaxSettings, target);
        },
        ajaxPrefilter : addToPrefiltersOrTransports(prefilters),
        ajaxTransport : addToPrefiltersOrTransports(transports),
        /**
         * @param {Object} val
         * @param {Object} options
         * @return {?}
         */
        ajax : function(val, options) {
          /**
           * @param {number} status
           * @param {(number|string)} nativeStatusText
           * @param {Object} responses
           * @param {string} total
           * @return {undefined}
           */
          function done(status, nativeStatusText, responses, total) {
            var isSuccess;
            var success;
            var error;
            var response;
            var modified;
            /** @type {(number|string)} */
            var statusText = nativeStatusText;
            if (2 !== number) {
              /** @type {number} */
              number = 2;
              if (timeoutKey) {
                self.clearTimeout(timeoutKey);
              }
              transport = void 0;
              value = total || "";
              /** @type {number} */
              jqXHR.readyState = status > 0 ? 4 : 0;
              /** @type {boolean} */
              isSuccess = status >= 200 && status < 300 || 304 === status;
              if (responses) {
                response = ajaxHandleResponses(s, jqXHR, responses);
              }
              response = ajaxConvert(s, response, jqXHR, isSuccess);
              if (isSuccess) {
                if (s.ifModified) {
                  modified = jqXHR.getResponseHeader("Last-Modified");
                  if (modified) {
                    jQuery.lastModified[cacheURL] = modified;
                  }
                  modified = jqXHR.getResponseHeader("etag");
                  if (modified) {
                    jQuery.etag[cacheURL] = modified;
                  }
                }
                if (204 === status || "HEAD" === s.type) {
                  /** @type {string} */
                  statusText = "nocontent";
                } else {
                  if (304 === status) {
                    /** @type {string} */
                    statusText = "notmodified";
                  } else {
                    statusText = response.state;
                    success = response.data;
                    error = response.error;
                    /** @type {boolean} */
                    isSuccess = !error;
                  }
                }
              } else {
                error = statusText;
                if (!(!status && statusText)) {
                  /** @type {string} */
                  statusText = "error";
                  if (status < 0) {
                    /** @type {number} */
                    status = 0;
                  }
                }
              }
              /** @type {number} */
              jqXHR.status = status;
              /** @type {string} */
              jqXHR.statusText = (nativeStatusText || statusText) + "";
              if (isSuccess) {
                deferred.resolveWith(arg, [success, statusText, jqXHR]);
              } else {
                deferred.rejectWith(arg, [jqXHR, statusText, error]);
              }
              jqXHR.statusCode(statusCode);
              statusCode = void 0;
              if (ajaxSend) {
                globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [jqXHR, s, isSuccess ? success : error]);
              }
              completeDeferred.fireWith(arg, [jqXHR, statusText]);
              if (ajaxSend) {
                globalEventContext.trigger("ajaxComplete", [jqXHR, s]);
                if (!--jQuery.active) {
                  jQuery.event.trigger("ajaxStop");
                }
              }
            }
          }
          if ("object" === ("undefined" == typeof val ? "undefined" : isArray(val))) {
            /** @type {Object} */
            options = val;
            val = void 0;
          }
          options = options || {};
          var transport;
          var cacheURL;
          var value;
          var target;
          var timeoutKey;
          var a;
          var ajaxSend;
          var i;
          var s = jQuery.ajaxSetup({}, options);
          var arg = s.context || s;
          var globalEventContext = s.context && (arg.nodeType || arg.jquery) ? jQuery(arg) : jQuery.event;
          var deferred = jQuery.Deferred();
          var completeDeferred = jQuery.Callbacks("once memory");
          var statusCode = s.statusCode || {};
          var requestHeaders = {};
          var requestHeadersNames = {};
          /** @type {number} */
          var number = 0;
          /** @type {string} */
          var strAbort = "canceled";
          var jqXHR = {
            readyState : 0,
            /**
             * @param {string} key
             * @return {?}
             */
            getResponseHeader : function(key) {
              var src;
              if (2 === number) {
                if (!target) {
                  target = {};
                  for (;src = re.exec(value);) {
                    /** @type {string} */
                    target[src[1].toLowerCase()] = src[2];
                  }
                }
                src = target[key.toLowerCase()];
              }
              return null == src ? null : src;
            },
            /**
             * @return {?}
             */
            getAllResponseHeaders : function() {
              return 2 === number ? value : null;
            },
            /**
             * @param {string} name
             * @param {?} value
             * @return {?}
             */
            setRequestHeader : function(name, value) {
              var lname = name.toLowerCase();
              return number || (name = requestHeadersNames[lname] = requestHeadersNames[lname] || name, requestHeaders[name] = value), this;
            },
            /**
             * @param {(Object|number)} type
             * @return {?}
             */
            overrideMimeType : function(type) {
              return number || (s.mimeType = type), this;
            },
            /**
             * @param {Object} map
             * @return {?}
             */
            statusCode : function(map) {
              var letter;
              if (map) {
                if (number < 2) {
                  for (letter in map) {
                    /** @type {Array} */
                    statusCode[letter] = [statusCode[letter], map[letter]];
                  }
                } else {
                  jqXHR.always(map[jqXHR.status]);
                }
              }
              return this;
            },
            /**
             * @param {string} statusText
             * @return {?}
             */
            abort : function(statusText) {
              var finalText = statusText || strAbort;
              return transport && transport.abort(finalText), done(0, finalText), this;
            }
          };
          if (deferred.promise(jqXHR).complete = completeDeferred.add, jqXHR.success = jqXHR.done, jqXHR.error = jqXHR.fail, s.url = ((val || (s.url || node.href)) + "").replace(trimLeft, "").replace(rprotocol, node.protocol + "//"), s.type = options.method || (options.type || (s.method || s.type)), s.dataTypes = jQuery.trim(s.dataType || "*").toLowerCase().match(core_rnotwhite) || [""], null == s.crossDomain) {
            a = elem.createElement("a");
            try {
              /** @type {string} */
              a.href = s.url;
              /** @type {string} */
              a.href = a.href;
              /** @type {boolean} */
              s.crossDomain = l.protocol + "//" + l.host != a.protocol + "//" + a.host;
            } catch (S) {
              /** @type {boolean} */
              s.crossDomain = true;
            }
          }
          if (s.data && (s.processData && ("string" != typeof s.data && (s.data = jQuery.param(s.data, s.traditional)))), inspectPrefiltersOrTransports(prefilters, s, options, jqXHR), 2 === number) {
            return jqXHR;
          }
          ajaxSend = jQuery.event && s.global;
          if (ajaxSend) {
            if (0 === jQuery.active++) {
              jQuery.event.trigger("ajaxStart");
            }
          }
          s.type = s.type.toUpperCase();
          /** @type {boolean} */
          s.hasContent = !rnoContent.test(s.type);
          /** @type {string} */
          cacheURL = s.url;
          if (!s.hasContent) {
            if (s.data) {
              /** @type {string} */
              cacheURL = s.url += (rquery.test(cacheURL) ? "&" : "?") + s.data;
              delete s.data;
            }
            if (s.cache === false) {
              /** @type {string} */
              s.url = rts.test(cacheURL) ? cacheURL.replace(rts, "$1_=" + iIdCounter++) : cacheURL + (rquery.test(cacheURL) ? "&" : "?") + "_=" + iIdCounter++;
            }
          }
          if (s.ifModified) {
            if (jQuery.lastModified[cacheURL]) {
              jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]);
            }
            if (jQuery.etag[cacheURL]) {
              jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL]);
            }
          }
          if (s.data && (s.hasContent && s.contentType !== false) || options.contentType) {
            jqXHR.setRequestHeader("Content-Type", s.contentType);
          }
          jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + ("*" !== s.dataTypes[0] ? ", " + Me + "; q=0.01" : "") : s.accepts["*"]);
          for (i in s.headers) {
            jqXHR.setRequestHeader(i, s.headers[i]);
          }
          if (s.beforeSend && (s.beforeSend.call(arg, jqXHR, s) === false || 2 === number)) {
            return jqXHR.abort();
          }
          /** @type {string} */
          strAbort = "abort";
          for (i in{
            success : 1,
            error : 1,
            complete : 1
          }) {
            jqXHR[i](s[i]);
          }
          if (transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR)) {
            if (jqXHR.readyState = 1, ajaxSend && globalEventContext.trigger("ajaxSend", [jqXHR, s]), 2 === number) {
              return jqXHR;
            }
            if (s.async) {
              if (s.timeout > 0) {
                timeoutKey = self.setTimeout(function() {
                  jqXHR.abort("timeout");
                }, s.timeout);
              }
            }
            try {
              /** @type {number} */
              number = 1;
              transport.send(requestHeaders, done);
            } catch (e) {
              if (!(number < 2)) {
                throw e;
              }
              done(-1, e);
            }
          } else {
            done(-1, "No Transport");
          }
          return jqXHR;
        },
        /**
         * @param {string} optgroup
         * @param {string} data
         * @param {Object} callback
         * @return {?}
         */
        getJSON : function(optgroup, data, callback) {
          return jQuery.get(optgroup, data, callback, "json");
        },
        /**
         * @param {string} optgroup
         * @param {Object} callback
         * @return {?}
         */
        getScript : function(optgroup, callback) {
          return jQuery.get(optgroup, void 0, callback, "script");
        }
      });
      jQuery.each(["get", "post"], function(dataAndEvents, method) {
        /**
         * @param {string} value
         * @param {Object} html
         * @param {Function} success
         * @param {(Object|string)} dataType
         * @return {?}
         */
        jQuery[method] = function(value, html, success, dataType) {
          return jQuery.isFunction(html) && (dataType = dataType || success, success = html, html = void 0), jQuery.ajax(jQuery.extend({
            url : value,
            type : method,
            dataType : dataType,
            data : html,
            /** @type {Function} */
            success : success
          }, jQuery.isPlainObject(value) && value));
        };
      });
      /**
       * @param {string} url
       * @return {?}
       */
      jQuery._evalUrl = function(url) {
        return jQuery.ajax({
          url : url,
          type : "GET",
          dataType : "script",
          async : false,
          global : false,
          "throws" : true
        });
      };
      jQuery.fn.extend({
        /**
         * @param {string} arg
         * @return {?}
         */
        wrapAll : function(arg) {
          var wrap;
          return jQuery.isFunction(arg) ? this.each(function(i) {
            jQuery(this).wrapAll(arg.call(this, i));
          }) : (this[0] && (wrap = jQuery(arg, this[0].ownerDocument).eq(0).clone(true), this[0].parentNode && wrap.insertBefore(this[0]), wrap.map(function() {
            var elem = this;
            for (;elem.firstElementChild;) {
              elem = elem.firstElementChild;
            }
            return elem;
          }).append(this)), this);
        },
        /**
         * @param {Function} html
         * @return {?}
         */
        wrapInner : function(html) {
          return jQuery.isFunction(html) ? this.each(function(i) {
            jQuery(this).wrapInner(html.call(this, i));
          }) : this.each(function() {
            var self = jQuery(this);
            var contents = self.contents();
            if (contents.length) {
              contents.wrapAll(html);
            } else {
              self.append(html);
            }
          });
        },
        /**
         * @param {Function} html
         * @return {?}
         */
        wrap : function(html) {
          var isFunction = jQuery.isFunction(html);
          return this.each(function(i) {
            jQuery(this).wrapAll(isFunction ? html.call(this, i) : html);
          });
        },
        /**
         * @return {?}
         */
        unwrap : function() {
          return this.parent().each(function() {
            if (!jQuery.nodeName(this, "body")) {
              jQuery(this).replaceWith(this.childNodes);
            }
          }).end();
        }
      });
      /**
       * @param {string} name
       * @return {?}
       */
      jQuery.expr.filters.hidden = function(name) {
        return!jQuery.expr.filters.visible(name);
      };
      /**
       * @param {Element} element
       * @return {?}
       */
      jQuery.expr.filters.visible = function(element) {
        return element.offsetWidth > 0 || (element.offsetHeight > 0 || element.getClientRects().length > 0);
      };
      /** @type {RegExp} */
      var rLt = /%20/g;
      /** @type {RegExp} */
      var rmargin = /\[\]$/;
      /** @type {RegExp} */
      var rCRLF = /\r?\n/g;
      /** @type {RegExp} */
      var mouseTypeRegex = /^(?:submit|button|image|reset|file)$/i;
      /** @type {RegExp} */
      var rsubmittable = /^(?:input|select|textarea|keygen)/i;
      /**
       * @param {Object} a
       * @param {Object} traditional
       * @return {?}
       */
      jQuery.param = function(a, traditional) {
        var prefix;
        /** @type {Array} */
        var klass = [];
        /**
         * @param {?} key
         * @param {string} value
         * @return {undefined}
         */
        var add = function(key, value) {
          value = jQuery.isFunction(value) ? value() : null == value ? "" : value;
          /** @type {string} */
          klass[klass.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value);
        };
        if (void 0 === traditional && (traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional), jQuery.isArray(a) || a.jquery && !jQuery.isPlainObject(a)) {
          jQuery.each(a, function() {
            add(this.name, this.value);
          });
        } else {
          for (prefix in a) {
            buildParams(prefix, a[prefix], traditional, add);
          }
        }
        return klass.join("&").replace(rLt, "+");
      };
      jQuery.fn.extend({
        /**
         * @return {?}
         */
        serialize : function() {
          return jQuery.param(this.serializeArray());
        },
        /**
         * @return {?}
         */
        serializeArray : function() {
          return this.map(function() {
            var elements = jQuery.prop(this, "elements");
            return elements ? jQuery.makeArray(elements) : this;
          }).filter(function() {
            var type = this.type;
            return this.name && (!jQuery(this).is(":disabled") && (rsubmittable.test(this.nodeName) && (!mouseTypeRegex.test(type) && (this.checked || !manipulation_rcheckableType.test(type)))));
          }).map(function(dataAndEvents, elem) {
            var val = jQuery(this).val();
            return null == val ? null : jQuery.isArray(val) ? jQuery.map(val, function(val) {
              return{
                name : elem.name,
                value : val.replace(rCRLF, "\r\n")
              };
            }) : {
              name : elem.name,
              value : val.replace(rCRLF, "\r\n")
            };
          }).get();
        }
      });
      /**
       * @return {?}
       */
      jQuery.ajaxSettings.xhr = function() {
        try {
          return new self.XMLHttpRequest;
        } catch (t) {
        }
      };
      var xhrSuccessStatus = {
        0 : 200,
        1223 : 204
      };
      var xhrSupported = jQuery.ajaxSettings.xhr();
      /** @type {boolean} */
      support.cors = !!xhrSupported && "withCredentials" in xhrSupported;
      /** @type {boolean} */
      support.ajax = xhrSupported = !!xhrSupported;
      jQuery.ajaxTransport(function(options) {
        var callback;
        var onerror;
        if (support.cors || xhrSupported && !options.crossDomain) {
          return{
            /**
             * @param {Object} headers
             * @param {Function} complete
             * @return {undefined}
             */
            send : function(headers, complete) {
              var i;
              var xhr = options.xhr();
              if (xhr.open(options.type, options.url, options.async, options.username, options.password), options.xhrFields) {
                for (i in options.xhrFields) {
                  xhr[i] = options.xhrFields[i];
                }
              }
              if (options.mimeType) {
                if (xhr.overrideMimeType) {
                  xhr.overrideMimeType(options.mimeType);
                }
              }
              if (!options.crossDomain) {
                if (!headers["X-Requested-With"]) {
                  /** @type {string} */
                  headers["X-Requested-With"] = "XMLHttpRequest";
                }
              }
              for (i in headers) {
                xhr.setRequestHeader(i, headers[i]);
              }
              /**
               * @param {string} status
               * @return {?}
               */
              callback = function(status) {
                return function() {
                  if (callback) {
                    /** @type {null} */
                    callback = onerror = xhr.onload = xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;
                    if ("abort" === status) {
                      xhr.abort();
                    } else {
                      if ("error" === status) {
                        if ("number" != typeof xhr.status) {
                          complete(0, "error");
                        } else {
                          complete(xhr.status, xhr.statusText);
                        }
                      } else {
                        complete(xhrSuccessStatus[xhr.status] || xhr.status, xhr.statusText, "text" !== (xhr.responseType || "text") || "string" != typeof xhr.responseText ? {
                          binary : xhr.response
                        } : {
                          text : xhr.responseText
                        }, xhr.getAllResponseHeaders());
                      }
                    }
                  }
                };
              };
              xhr.onload = callback();
              onerror = xhr.onerror = callback("error");
              if (void 0 !== xhr.onabort) {
                xhr.onabort = onerror;
              } else {
                /**
                 * @return {undefined}
                 */
                xhr.onreadystatechange = function() {
                  if (4 === xhr.readyState) {
                    self.setTimeout(function() {
                      if (callback) {
                        onerror();
                      }
                    });
                  }
                };
              }
              callback = callback("abort");
              try {
                xhr.send(options.hasContent && options.data || null);
              } catch (l) {
                if (callback) {
                  throw l;
                }
              }
            },
            /**
             * @return {undefined}
             */
            abort : function() {
              if (callback) {
                callback();
              }
            }
          };
        }
      });
      jQuery.ajaxSetup({
        accepts : {
          script : "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents : {
          script : /\b(?:java|ecma)script\b/
        },
        converters : {
          /**
           * @param {string} value
           * @return {?}
           */
          "text script" : function(value) {
            return jQuery.globalEval(value), value;
          }
        }
      });
      jQuery.ajaxPrefilter("script", function(s) {
        if (void 0 === s.cache) {
          /** @type {boolean} */
          s.cache = false;
        }
        if (s.crossDomain) {
          /** @type {string} */
          s.type = "GET";
        }
      });
      jQuery.ajaxTransport("script", function(s) {
        if (s.crossDomain) {
          var script;
          var callback;
          return{
            /**
             * @param {?} _
             * @param {Function} complete
             * @return {undefined}
             */
            send : function(_, complete) {
              script = jQuery("<script>").prop({
                charset : s.scriptCharset,
                src : s.url
              }).on("load error", callback = function(evt) {
                script.remove();
                /** @type {null} */
                callback = null;
                if (evt) {
                  complete("error" === evt.type ? 404 : 200, evt.type);
                }
              });
              elem.head.appendChild(script[0]);
            },
            /**
             * @return {undefined}
             */
            abort : function() {
              if (callback) {
                callback();
              }
            }
          };
        }
      });
      /** @type {Array} */
      var eventPath = [];
      /** @type {RegExp} */
      var rjsonp = /(=)\?(?=&|$)|\?\?/;
      jQuery.ajaxSetup({
        jsonp : "callback",
        /**
         * @return {?}
         */
        jsonpCallback : function() {
          var unlock = eventPath.pop() || jQuery.expando + "_" + iIdCounter++;
          return this[unlock] = true, unlock;
        }
      });
      jQuery.ajaxPrefilter("json jsonp", function(s, originalSettings, jqXHR) {
        var callbackName;
        var val;
        var args;
        /** @type {(boolean|string)} */
        var jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ? "url" : "string" == typeof s.data && (0 === (s.contentType || "").indexOf("application/x-www-form-urlencoded") && (rjsonp.test(s.data) && "data")));
        if (jsonProp || "jsonp" === s.dataTypes[0]) {
          return callbackName = s.jsonpCallback = jQuery.isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback, jsonProp ? s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName) : s.jsonp !== false && (s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName), s.converters["script json"] = function() {
            return args || jQuery.error(callbackName + " was not called"), args[0];
          }, s.dataTypes[0] = "json", val = self[callbackName], self[callbackName] = function() {
            /** @type {Arguments} */
            args = arguments;
          }, jqXHR.always(function() {
            if (void 0 === val) {
              jQuery(self).removeProp(callbackName);
            } else {
              self[callbackName] = val;
            }
            if (s[callbackName]) {
              s.jsonpCallback = originalSettings.jsonpCallback;
              eventPath.push(callbackName);
            }
            if (args) {
              if (jQuery.isFunction(val)) {
                val(args[0]);
              }
            }
            args = val = void 0;
          }), "script";
        }
      });
      /**
       * @param {?} data
       * @param {Object} context
       * @param {(Function|string)} keepScripts
       * @return {?}
       */
      jQuery.parseHTML = function(data, context, keepScripts) {
        if (!data || "string" != typeof data) {
          return null;
        }
        if ("boolean" == typeof context) {
          /** @type {Object} */
          keepScripts = context;
          /** @type {boolean} */
          context = false;
        }
        context = context || elem;
        /** @type {(Array.<string>|null)} */
        var parsed = rsingleTag.exec(data);
        /** @type {(Array|boolean)} */
        var ol = !keepScripts && [];
        return parsed ? [context.createElement(parsed[1])] : (parsed = parse([data], context, ol), ol && (ol.length && jQuery(ol).remove()), jQuery.merge([], parsed.childNodes));
      };
      /** @type {function ((Function|string), Object, Object): ?} */
      var matcherFunction = jQuery.fn.load;
      /**
       * @param {(Function|string)} url
       * @param {Object} value
       * @param {Object} callback
       * @return {?}
       */
      jQuery.fn.load = function(url, value, callback) {
        if ("string" != typeof url && matcherFunction) {
          return matcherFunction.apply(this, arguments);
        }
        var selector;
        var method;
        var args;
        var self = this;
        var off = url.indexOf(" ");
        return off > -1 && (selector = jQuery.trim(url.slice(off)), url = url.slice(0, off)), jQuery.isFunction(value) ? (callback = value, value = void 0) : value && ("object" === ("undefined" == typeof value ? "undefined" : isArray(value)) && (method = "POST")), self.length > 0 && jQuery.ajax({
          url : url,
          type : method || "GET",
          dataType : "html",
          data : value
        }).done(function(responseText) {
          /** @type {Arguments} */
          args = arguments;
          self.html(selector ? jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) : responseText);
        }).always(callback && function(name, value) {
          self.each(function() {
            callback.apply(this, args || [name.responseText, value, name]);
          });
        }), this;
      };
      jQuery.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(dataAndEvents, name) {
        /**
         * @param {Function} task
         * @return {?}
         */
        jQuery.fn[name] = function(task) {
          return this.on(name, task);
        };
      });
      /**
       * @param {undefined} elem
       * @return {?}
       */
      jQuery.expr.filters.animated = function(elem) {
        return jQuery.grep(jQuery.timers, function(fn) {
          return elem === fn.elem;
        }).length;
      };
      jQuery.offset = {
        /**
         * @param {string} elem
         * @param {Object} value
         * @param {number} i
         * @return {undefined}
         */
        setOffset : function(elem, value, i) {
          var curPosition;
          var curLeft;
          var curCSSTop;
          var curTop;
          var offset;
          var curCSSLeft;
          var c;
          var position = jQuery.css(elem, "position");
          var curElem = jQuery(elem);
          var props = {};
          if ("static" === position) {
            /** @type {string} */
            elem.style.position = "relative";
          }
          offset = curElem.offset();
          curCSSTop = jQuery.css(elem, "top");
          curCSSLeft = jQuery.css(elem, "left");
          /** @type {boolean} */
          c = ("absolute" === position || "fixed" === position) && (curCSSTop + curCSSLeft).indexOf("auto") > -1;
          if (c) {
            curPosition = curElem.position();
            curTop = curPosition.top;
            curLeft = curPosition.left;
          } else {
            /** @type {number} */
            curTop = parseFloat(curCSSTop) || 0;
            /** @type {number} */
            curLeft = parseFloat(curCSSLeft) || 0;
          }
          if (jQuery.isFunction(value)) {
            value = value.call(elem, i, jQuery.extend({}, offset));
          }
          if (null != value.top) {
            /** @type {number} */
            props.top = value.top - offset.top + curTop;
          }
          if (null != value.left) {
            /** @type {number} */
            props.left = value.left - offset.left + curLeft;
          }
          if ("using" in value) {
            value.using.call(elem, props);
          } else {
            curElem.css(props);
          }
        }
      };
      jQuery.fn.extend({
        /**
         * @param {string} name
         * @return {?}
         */
        offset : function(name) {
          if (arguments.length) {
            return void 0 === name ? this : this.each(function(dataName) {
              jQuery.offset.setOffset(this, name, dataName);
            });
          }
          var doc;
          var win;
          var b = this[0];
          var box = {
            top : 0,
            left : 0
          };
          var element = b && b.ownerDocument;
          if (element) {
            return doc = element.documentElement, jQuery.contains(doc, b) ? (box = b.getBoundingClientRect(), win = getWindow(element), {
              top : box.top + win.pageYOffset - doc.clientTop,
              left : box.left + win.pageXOffset - doc.clientLeft
            }) : box;
          }
        },
        /**
         * @return {?}
         */
        position : function() {
          if (this[0]) {
            var offsetParent;
            var offset;
            var node = this[0];
            var parentOffset = {
              top : 0,
              left : 0
            };
            return "fixed" === jQuery.css(node, "position") ? offset = node.getBoundingClientRect() : (offsetParent = this.offsetParent(), offset = this.offset(), jQuery.nodeName(offsetParent[0], "html") || (parentOffset = offsetParent.offset()), parentOffset.top += jQuery.css(offsetParent[0], "borderTopWidth", true), parentOffset.left += jQuery.css(offsetParent[0], "borderLeftWidth", true)), {
              top : offset.top - parentOffset.top - jQuery.css(node, "marginTop", true),
              left : offset.left - parentOffset.left - jQuery.css(node, "marginLeft", true)
            };
          }
        },
        /**
         * @return {?}
         */
        offsetParent : function() {
          return this.map(function() {
            var offsetParent = this.offsetParent;
            for (;offsetParent && "static" === jQuery.css(offsetParent, "position");) {
              offsetParent = offsetParent.offsetParent;
            }
            return offsetParent || parent;
          });
        }
      });
      jQuery.each({
        scrollLeft : "pageXOffset",
        scrollTop : "pageYOffset"
      }, function(name, prop) {
        /** @type {boolean} */
        var top = "pageYOffset" === prop;
        /**
         * @param {string} isXML
         * @return {?}
         */
        jQuery.fn[name] = function(isXML) {
          return access(this, function(elem, method, val) {
            var win = getWindow(elem);
            return void 0 === val ? win ? win[prop] : elem[method] : void(win ? win.scrollTo(top ? win.pageXOffset : val, top ? val : win.pageYOffset) : elem[method] = val);
          }, name, isXML, arguments.length);
        };
      });
      jQuery.each(["top", "left"], function(dataAndEvents, prop) {
        jQuery.cssHooks[prop] = addGetHookIf(support.pixelPosition, function(ol, val) {
          if (val) {
            return val = css(ol, prop), rnumnonpx.test(val) ? jQuery(ol).position()[prop] + "px" : val;
          }
        });
      });
      jQuery.each({
        Height : "height",
        Width : "width"
      }, function(name, type) {
        jQuery.each({
          padding : "inner" + name,
          content : type,
          "" : "outer" + name
        }, function(defaultExtra, original) {
          /**
           * @param {?} margin
           * @param {boolean} value
           * @return {?}
           */
          jQuery.fn[original] = function(margin, value) {
            var chainable = arguments.length && (defaultExtra || "boolean" != typeof margin);
            var extra = defaultExtra || (margin === true || value === true ? "margin" : "border");
            return access(this, function(elem, prop, value) {
              var doc;
              return jQuery.isWindow(elem) ? elem.document.documentElement["client" + name] : 9 === elem.nodeType ? (doc = elem.documentElement, Math.max(elem.body["scroll" + name], doc["scroll" + name], elem.body["offset" + name], doc["offset" + name], doc["client" + name])) : void 0 === value ? jQuery.css(elem, prop, extra) : jQuery.style(elem, prop, value, extra);
            }, type, chainable ? margin : void 0, chainable, null);
          };
        });
      });
      jQuery.fn.extend({
        /**
         * @param {string} type
         * @param {?} method
         * @param {boolean} fn
         * @return {?}
         */
        bind : function(type, method, fn) {
          return this.on(type, null, method, fn);
        },
        /**
         * @param {string} type
         * @param {Function} fn
         * @return {?}
         */
        unbind : function(type, fn) {
          return this.off(type, null, fn);
        },
        /**
         * @param {Function} task
         * @param {string} type
         * @param {Function} handler
         * @param {boolean} fn
         * @return {?}
         */
        delegate : function(task, type, handler, fn) {
          return this.on(type, task, handler, fn);
        },
        /**
         * @param {string} selector
         * @param {string} type
         * @param {Function} callback
         * @return {?}
         */
        undelegate : function(selector, type, callback) {
          return 1 === arguments.length ? this.off(selector, "**") : this.off(type, selector || "**", callback);
        },
        /**
         * @return {?}
         */
        size : function() {
          return this.length;
        }
      });
      jQuery.fn.andSelf = jQuery.fn.addBack;
      /** @type {Array} */
      config = [];
      promise = function() {
        return jQuery;
      }.apply(obj, config);
      !(void 0 !== promise && (value.exports = promise));
      var _jQuery = self.jQuery;
      var doc = self.$;
      return jQuery.noConflict = function(deep) {
        return self.$ === jQuery && (self.$ = doc), deep && (self.jQuery === jQuery && (self.jQuery = _jQuery)), jQuery;
      }, dataAndEvents || (self.jQuery = self.$ = jQuery), jQuery;
    });
  }).call(obj, $compile(2)($rootScope));
}, function(module, dataAndEvents) {
  /**
   * @param {Object} parent
   * @return {?}
   */
  module.exports = function(parent) {
    return parent.webpackPolyfill || (parent.deprecate = function() {
    }, parent.paths = [], parent.children = [], parent.webpackPolyfill = 1), parent;
  };
}, function(dataAndEvents, deepDataAndEvents, $sanitize) {
  $sanitize(4);
  $sanitize(5);
  $sanitize(6);
  $sanitize(7);
  $sanitize(8);
  $sanitize(9);
  $sanitize(10);
  $sanitize(11);
  $sanitize(12);
  $sanitize(13);
  $sanitize(14);
  $sanitize(15);
}, function(dataAndEvents, next_scope, callback) {
  (function(jQuery) {
    +function($) {
      /**
       * @return {?}
       */
      function transitionEnd() {
        /** @type {Element} */
        var el = document.createElement("bootstrap");
        var transEndEventNames = {
          WebkitTransition : "webkitTransitionEnd",
          MozTransition : "transitionend",
          OTransition : "oTransitionEnd otransitionend",
          transition : "transitionend"
        };
        var name;
        for (name in transEndEventNames) {
          if (void 0 !== el.style[name]) {
            return{
              end : transEndEventNames[name]
            };
          }
        }
        return false;
      }
      /**
       * @param {number} duration
       * @return {?}
       */
      $.fn.emulateTransitionEnd = function(duration) {
        /** @type {boolean} */
        var i = false;
        var $el = this;
        $(this).one("bsTransitionEnd", function() {
          /** @type {boolean} */
          i = true;
        });
        /**
         * @return {undefined}
         */
        var callback = function() {
          if (!i) {
            $($el).trigger($.support.transition.end);
          }
        };
        return setTimeout(callback, duration), this;
      };
      $(function() {
        $.support.transition = transitionEnd();
        if ($.support.transition) {
          $.event.special.bsTransitionEnd = {
            bindType : $.support.transition.end,
            delegateType : $.support.transition.end,
            /**
             * @param {Event} event
             * @return {?}
             */
            handle : function(event) {
              if ($(event.target).is(this)) {
                return event.handleObj.handler.apply(this, arguments);
              }
            }
          };
        }
      });
    }(jQuery);
  }).call(next_scope, callback(1));
}, function(dataAndEvents, next_scope, callback) {
  (function(jQuery) {
    +function($) {
      /**
       * @param {?} type
       * @return {?}
       */
      function setValue(type) {
        return this.each(function() {
          var $this = $(this);
          var data = $this.data("bs.alert");
          if (!data) {
            $this.data("bs.alert", data = new Alert(this));
          }
          if ("string" == typeof type) {
            data[type].call($this);
          }
        });
      }
      /** @type {string} */
      var uncaught = '[data-dismiss="alert"]';
      /**
       * @param {string} elem
       * @return {undefined}
       */
      var Alert = function(elem) {
        $(elem).on("click", uncaught, this.close);
      };
      /** @type {string} */
      Alert.VERSION = "3.3.6";
      /** @type {number} */
      Alert.TRANSITION_DURATION = 150;
      /**
       * @param {Object} e
       * @return {undefined}
       */
      Alert.prototype.close = function(e) {
        /**
         * @return {undefined}
         */
        function removeElement() {
          $parent.detach().trigger("closed.bs.alert").remove();
        }
        var $this = $(this);
        var selector = $this.attr("data-target");
        if (!selector) {
          selector = $this.attr("href");
          selector = selector && selector.replace(/.*(?=#[^\s]*$)/, "");
        }
        var $parent = $(selector);
        if (e) {
          e.preventDefault();
        }
        if (!$parent.length) {
          $parent = $this.closest(".alert");
        }
        $parent.trigger(e = $.Event("close.bs.alert"));
        if (!e.isDefaultPrevented()) {
          $parent.removeClass("in");
          if ($.support.transition && $parent.hasClass("fade")) {
            $parent.one("bsTransitionEnd", removeElement).emulateTransitionEnd(Alert.TRANSITION_DURATION);
          } else {
            removeElement();
          }
        }
      };
      var old = $.fn.alert;
      /** @type {function (?): ?} */
      $.fn.alert = setValue;
      /** @type {function (string): undefined} */
      $.fn.alert.Constructor = Alert;
      /**
       * @return {?}
       */
      $.fn.alert.noConflict = function() {
        return $.fn.alert = old, this;
      };
      $(document).on("click.bs.alert.data-api", uncaught, Alert.prototype.close);
    }(jQuery);
  }).call(next_scope, callback(1));
}, function(dataAndEvents, next_scope, callback) {
  (function(jQuery) {
    /** @type {function (string): ?} */
    var loadImage = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(keepData) {
      return typeof keepData;
    } : function(b) {
      return b && ("function" == typeof Symbol && b.constructor === Symbol) ? "symbol" : typeof b;
    };
    +function($) {
      /**
       * @param {string} key
       * @return {?}
       */
      function init(key) {
        return this.each(function() {
          var $this = $(this);
          var data = $this.data("bs.button");
          var options = "object" == ("undefined" == typeof key ? "undefined" : loadImage(key)) && key;
          if (!data) {
            $this.data("bs.button", data = new Button(this, options));
          }
          if ("toggle" == key) {
            data.toggle();
          } else {
            if (key) {
              data.setState(key);
            }
          }
        });
      }
      /**
       * @param {string} elem
       * @param {?} opt_attributes
       * @return {undefined}
       */
      var Button = function Button(elem, opt_attributes) {
        this.$element = $(elem);
        this.options = $.extend({}, Button.DEFAULTS, opt_attributes);
        /** @type {boolean} */
        this.isLoading = false;
      };
      /** @type {string} */
      Button.VERSION = "3.3.6";
      Button.DEFAULTS = {
        loadingText : "loading..."
      };
      /**
       * @param {string} key
       * @return {undefined}
       */
      Button.prototype.setState = function(key) {
        /** @type {string} */
        var elem = "disabled";
        var $el = this.$element;
        /** @type {string} */
        var val = $el.is("input") ? "val" : "html";
        var data = $el.data();
        key += "Text";
        if (null == data.resetText) {
          $el.data("resetText", $el[val]());
        }
        setTimeout($.proxy(function() {
          $el[val](null == data[key] ? this.options[key] : data[key]);
          if ("loadingText" == key) {
            /** @type {boolean} */
            this.isLoading = true;
            $el.addClass(elem).attr(elem, elem);
          } else {
            if (this.isLoading) {
              /** @type {boolean} */
              this.isLoading = false;
              $el.removeClass(elem).removeAttr(elem);
            }
          }
        }, this), 0);
      };
      /**
       * @return {undefined}
       */
      Button.prototype.toggle = function() {
        /** @type {boolean} */
        var t = true;
        var $shcell = this.$element.closest('[data-toggle="buttons"]');
        if ($shcell.length) {
          var $input = this.$element.find("input");
          if ("radio" == $input.prop("type")) {
            if ($input.prop("checked")) {
              /** @type {boolean} */
              t = false;
            }
            $shcell.find(".active").removeClass("active");
            this.$element.addClass("active");
          } else {
            if ("checkbox" == $input.prop("type")) {
              if ($input.prop("checked") !== this.$element.hasClass("active")) {
                /** @type {boolean} */
                t = false;
              }
              this.$element.toggleClass("active");
            }
          }
          $input.prop("checked", this.$element.hasClass("active"));
          if (t) {
            $input.trigger("change");
          }
        } else {
          this.$element.attr("aria-pressed", !this.$element.hasClass("active"));
          this.$element.toggleClass("active");
        }
      };
      var old = $.fn.button;
      /** @type {function (string): ?} */
      $.fn.button = init;
      /** @type {function (string, ?): undefined} */
      $.fn.button.Constructor = Button;
      /**
       * @return {?}
       */
      $.fn.button.noConflict = function() {
        return $.fn.button = old, this;
      };
      $(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(evt) {
        var self = $(evt.target);
        if (!self.hasClass("btn")) {
          self = self.closest(".btn");
        }
        init.call(self, "toggle");
        if (!$(evt.target).is('input[type="radio"]')) {
          if (!$(evt.target).is('input[type="checkbox"]')) {
            evt.preventDefault();
          }
        }
      }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(e) {
        $(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type));
      });
    }(jQuery);
  }).call(next_scope, callback(1));
}, function(dataAndEvents, next_scope, callback) {
  (function(jQuery) {
    /** @type {function (number): ?} */
    var getter = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(property) {
      return typeof property;
    } : function(b) {
      return b && ("function" == typeof Symbol && b.constructor === Symbol) ? "symbol" : typeof b;
    };
    +function($) {
      /**
       * @param {number} index
       * @return {?}
       */
      function init(index) {
        return this.each(function() {
          var $this = $(this);
          var data = $this.data("bs.carousel");
          var options = $.extend({}, Carousel.DEFAULTS, $this.data(), "object" == ("undefined" == typeof index ? "undefined" : getter(index)) && index);
          var _index = "string" == typeof index ? index : options.slide;
          if (!data) {
            $this.data("bs.carousel", data = new Carousel(this, options));
          }
          if ("number" == typeof index) {
            data.to(index);
          } else {
            if (_index) {
              data[_index]();
            } else {
              if (options.interval) {
                data.pause().cycle();
              }
            }
          }
        });
      }
      /**
       * @param {string} elem
       * @param {Object} opt_attributes
       * @return {undefined}
       */
      var Carousel = function(elem, opt_attributes) {
        this.$element = $(elem);
        this.$indicators = this.$element.find(".carousel-indicators");
        /** @type {Object} */
        this.options = opt_attributes;
        /** @type {null} */
        this.paused = null;
        /** @type {null} */
        this.sliding = null;
        /** @type {null} */
        this.interval = null;
        /** @type {null} */
        this.$active = null;
        /** @type {null} */
        this.$items = null;
        if (this.options.keyboard) {
          this.$element.on("keydown.bs.carousel", $.proxy(this.keydown, this));
        }
        if ("hover" == this.options.pause) {
          if (!("ontouchstart" in document.documentElement)) {
            this.$element.on("mouseenter.bs.carousel", $.proxy(this.pause, this)).on("mouseleave.bs.carousel", $.proxy(this.cycle, this));
          }
        }
      };
      /** @type {string} */
      Carousel.VERSION = "3.3.6";
      /** @type {number} */
      Carousel.TRANSITION_DURATION = 600;
      Carousel.DEFAULTS = {
        interval : 5E3,
        pause : "hover",
        wrap : true,
        keyboard : true
      };
      /**
       * @param {Event} e
       * @return {undefined}
       */
      Carousel.prototype.keydown = function(e) {
        if (!/input|textarea/i.test(e.target.tagName)) {
          switch(e.which) {
            case 37:
              this.prev();
              break;
            case 39:
              this.next();
              break;
            default:
              return;
          }
          e.preventDefault();
        }
      };
      /**
       * @param {boolean} dataAndEvents
       * @return {?}
       */
      Carousel.prototype.cycle = function(dataAndEvents) {
        return dataAndEvents || (this.paused = false), this.interval && clearInterval(this.interval), this.options.interval && (!this.paused && (this.interval = setInterval($.proxy(this.next, this), this.options.interval))), this;
      };
      /**
       * @param {?} item
       * @return {?}
       */
      Carousel.prototype.getItemIndex = function(item) {
        return this.$items = item.parent().children(".item"), this.$items.index(item || this.$active);
      };
      /**
       * @param {string} b
       * @param {?} relativeToItem
       * @return {?}
       */
      Carousel.prototype.getItemForDirection = function(b, relativeToItem) {
        var index = this.getItemIndex(relativeToItem);
        /** @type {boolean} */
        var n = "prev" == b && 0 === index || "next" == b && index == this.$items.length - 1;
        if (n && !this.options.wrap) {
          return relativeToItem;
        }
        /** @type {number} */
        var count = "prev" == b ? -1 : 1;
        /** @type {number} */
        var idx = (index + count) % this.$items.length;
        return this.$items.eq(idx);
      };
      /**
       * @param {number} pos
       * @return {?}
       */
      Carousel.prototype.to = function(pos) {
        var that = this;
        var activePos = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        if (!(pos > this.$items.length - 1 || pos < 0)) {
          return this.sliding ? this.$element.one("slid.bs.carousel", function() {
            that.to(pos);
          }) : activePos == pos ? this.pause().cycle() : this.slide(pos > activePos ? "next" : "prev", this.$items.eq(pos));
        }
      };
      /**
       * @param {boolean} $vid
       * @return {?}
       */
      Carousel.prototype.pause = function($vid) {
        return $vid || (this.paused = true), this.$element.find(".next, .prev").length && ($.support.transition && (this.$element.trigger($.support.transition.end), this.cycle(true))), this.interval = clearInterval(this.interval), this;
      };
      /**
       * @return {?}
       */
      Carousel.prototype.next = function() {
        if (!this.sliding) {
          return this.slide("next");
        }
      };
      /**
       * @return {?}
       */
      Carousel.prototype.prev = function() {
        if (!this.sliding) {
          return this.slide("prev");
        }
      };
      /**
       * @param {string} b
       * @param {string} ui
       * @return {?}
       */
      Carousel.prototype.slide = function(b, ui) {
        var $this = this.$element.find(".item.active");
        var li = ui || this.getItemForDirection(b, $this);
        var isCycling = this.interval;
        /** @type {string} */
        var name = "next" == b ? "left" : "right";
        var that = this;
        if (li.hasClass("active")) {
          return this.sliding = false;
        }
        var previous = li[0];
        var e = $.Event("slide.bs.carousel", {
          relatedTarget : previous,
          direction : name
        });
        if (this.$element.trigger(e), !e.isDefaultPrevented()) {
          if (this.sliding = true, isCycling && this.pause(), this.$indicators.length) {
            this.$indicators.find(".active").removeClass("active");
            var $listing = $(this.$indicators.children()[this.getItemIndex(li)]);
            if ($listing) {
              $listing.addClass("active");
            }
          }
          var type = $.Event("slid.bs.carousel", {
            relatedTarget : previous,
            direction : name
          });
          return $.support.transition && this.$element.hasClass("slide") ? (li.addClass(b), li[0].offsetWidth, $this.addClass(name), li.addClass(name), $this.one("bsTransitionEnd", function() {
            li.removeClass([b, name].join(" ")).addClass("active");
            $this.removeClass(["active", name].join(" "));
            /** @type {boolean} */
            that.sliding = false;
            setTimeout(function() {
              that.$element.trigger(type);
            }, 0);
          }).emulateTransitionEnd(Carousel.TRANSITION_DURATION)) : ($this.removeClass("active"), li.addClass("active"), this.sliding = false, this.$element.trigger(type)), isCycling && this.cycle(), this;
        }
      };
      var old = $.fn.carousel;
      /** @type {function (number): ?} */
      $.fn.carousel = init;
      /** @type {function (string, Object): undefined} */
      $.fn.carousel.Constructor = Carousel;
      /**
       * @return {?}
       */
      $.fn.carousel.noConflict = function() {
        return $.fn.carousel = old, this;
      };
      /**
       * @param {?} event
       * @return {undefined}
       */
      var start = function(event) {
        var href;
        var $this = $(this);
        var panel = $($this.attr("data-target") || (href = $this.attr("href")) && href.replace(/.*(?=#[^\s]+$)/, ""));
        if (panel.hasClass("carousel")) {
          var next = $.extend({}, panel.data(), $this.data());
          var slideIndex = $this.attr("data-slide-to");
          if (slideIndex) {
            /** @type {boolean} */
            next.interval = false;
          }
          init.call(panel, next);
          if (slideIndex) {
            panel.data("bs.carousel").to(slideIndex);
          }
          event.preventDefault();
        }
      };
      $(document).on("click.bs.carousel.data-api", "[data-slide]", start).on("click.bs.carousel.data-api", "[data-slide-to]", start);
      $(window).on("load", function() {
        $('[data-ride="carousel"]').each(function() {
          var self = $(this);
          init.call(self, self.data());
        });
      });
    }(jQuery);
  }).call(next_scope, callback(1));
}, function(dataAndEvents, next_scope, callback) {
  (function(jQuery) {
    /** @type {function (?): ?} */
    var tmpl = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(optionsString) {
      return typeof optionsString;
    } : function(b) {
      return b && ("function" == typeof Symbol && b.constructor === Symbol) ? "symbol" : typeof b;
    };
    +function($) {
      /**
       * @param {HTMLElement} $this
       * @return {?}
       */
      function getParent($this) {
        var href;
        var statsTemplate = $this.attr("data-target") || (href = $this.attr("href")) && href.replace(/.*(?=#[^\s]+$)/, "");
        return $(statsTemplate);
      }
      /**
       * @param {?} options
       * @return {?}
       */
      function init(options) {
        return this.each(function() {
          var $this = $(this);
          var data = $this.data("bs.collapse");
          var settings = $.extend({}, Collapse.DEFAULTS, $this.data(), "object" == ("undefined" == typeof options ? "undefined" : tmpl(options)) && options);
          if (!data) {
            if (settings.toggle) {
              if (/show|hide/.test(options)) {
                /** @type {boolean} */
                settings.toggle = false;
              }
            }
          }
          if (!data) {
            $this.data("bs.collapse", data = new Collapse(this, settings));
          }
          if ("string" == typeof options) {
            data[options]();
          }
        });
      }
      /**
       * @param {string} elem
       * @param {?} opt_attributes
       * @return {undefined}
       */
      var Collapse = function Collapse(elem, opt_attributes) {
        this.$element = $(elem);
        this.options = $.extend({}, Collapse.DEFAULTS, opt_attributes);
        this.$trigger = $('[data-toggle="collapse"][href="#' + elem.id + '"],[data-toggle="collapse"][data-target="#' + elem.id + '"]');
        /** @type {null} */
        this.transitioning = null;
        if (this.options.parent) {
          this.$parent = this.getParent();
        } else {
          this.addAriaAndCollapsedClass(this.$element, this.$trigger);
        }
        if (this.options.toggle) {
          this.toggle();
        }
      };
      /** @type {string} */
      Collapse.VERSION = "3.3.6";
      /** @type {number} */
      Collapse.TRANSITION_DURATION = 350;
      Collapse.DEFAULTS = {
        toggle : true
      };
      /**
       * @return {?}
       */
      Collapse.prototype.dimension = function() {
        var hasWidth = this.$element.hasClass("width");
        return hasWidth ? "width" : "height";
      };
      /**
       * @return {?}
       */
      Collapse.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
          var hasData;
          var self = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
          if (!(self && (self.length && (hasData = self.data("bs.collapse"), hasData && hasData.transitioning)))) {
            var e = $.Event("show.bs.collapse");
            if (this.$element.trigger(e), !e.isDefaultPrevented()) {
              if (self) {
                if (self.length) {
                  init.call(self, "hide");
                  if (!hasData) {
                    self.data("bs.collapse", null);
                  }
                }
              }
              var dimension = this.dimension();
              this.$element.removeClass("collapse").addClass("collapsing")[dimension](0).attr("aria-expanded", true);
              this.$trigger.removeClass("collapsed").attr("aria-expanded", true);
              /** @type {number} */
              this.transitioning = 1;
              /**
               * @return {undefined}
               */
              var complete = function() {
                this.$element.removeClass("collapsing").addClass("collapse in")[dimension]("");
                /** @type {number} */
                this.transitioning = 0;
                this.$element.trigger("shown.bs.collapse");
              };
              if (!$.support.transition) {
                return complete.call(this);
              }
              var scrollSize = $.camelCase(["scroll", dimension].join("-"));
              this.$element.one("bsTransitionEnd", $.proxy(complete, this)).emulateTransitionEnd(Collapse.TRANSITION_DURATION)[dimension](this.$element[0][scrollSize]);
            }
          }
        }
      };
      /**
       * @return {?}
       */
      Collapse.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
          var e = $.Event("hide.bs.collapse");
          if (this.$element.trigger(e), !e.isDefaultPrevented()) {
            var dimension = this.dimension();
            this.$element[dimension](this.$element[dimension]())[0].offsetHeight;
            this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", false);
            this.$trigger.addClass("collapsed").attr("aria-expanded", false);
            /** @type {number} */
            this.transitioning = 1;
            /**
             * @return {undefined}
             */
            var complete = function() {
              /** @type {number} */
              this.transitioning = 0;
              this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse");
            };
            return $.support.transition ? void this.$element[dimension](0).one("bsTransitionEnd", $.proxy(complete, this)).emulateTransitionEnd(Collapse.TRANSITION_DURATION) : complete.call(this);
          }
        }
      };
      /**
       * @return {undefined}
       */
      Collapse.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]();
      };
      /**
       * @return {?}
       */
      Collapse.prototype.getParent = function() {
        return $(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each($.proxy(function(dataAndEvents, selector) {
          var elem = $(selector);
          this.addAriaAndCollapsedClass(getParent(elem), elem);
        }, this)).end();
      };
      /**
       * @param {HTMLElement} element
       * @param {?} item
       * @return {undefined}
       */
      Collapse.prototype.addAriaAndCollapsedClass = function(element, item) {
        var source = element.hasClass("in");
        element.attr("aria-expanded", source);
        item.toggleClass("collapsed", !source).attr("aria-expanded", source);
      };
      var old = $.fn.collapse;
      /** @type {function (?): ?} */
      $.fn.collapse = init;
      /** @type {function (string, ?): undefined} */
      $.fn.collapse.Constructor = Collapse;
      /**
       * @return {?}
       */
      $.fn.collapse.noConflict = function() {
        return $.fn.collapse = old, this;
      };
      $(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(types) {
        var $this = $(this);
        if (!$this.attr("data-target")) {
          types.preventDefault();
        }
        var self = getParent($this);
        var key = self.data("bs.collapse");
        var id = key ? "toggle" : $this.data();
        init.call(self, id);
      });
    }(jQuery);
  }).call(next_scope, callback(1));
}, function(dataAndEvents, next_scope, callback) {
  (function(jQuery) {
    +function($) {
      /**
       * @param {Element} $this
       * @return {?}
       */
      function getParent($this) {
        var selector = $this.attr("data-target");
        if (!selector) {
          selector = $this.attr("href");
          selector = selector && (/#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, ""));
        }
        var $parent = selector && $(selector);
        return $parent && $parent.length ? $parent : $this.parent();
      }
      /**
       * @param {Object} e
       * @return {undefined}
       */
      function start(e) {
        if (!(e && 3 === e.which)) {
          $(backdrop).remove();
          $(selector).each(function() {
            var $this = $(this);
            var $parent = getParent($this);
            var attributes = {
              relatedTarget : this
            };
            if ($parent.hasClass("open")) {
              if (!(e && ("click" == e.type && (/input|textarea/i.test(e.target.tagName) && $.contains($parent[0], e.target))))) {
                $parent.trigger(e = $.Event("hide.bs.dropdown", attributes));
                if (!e.isDefaultPrevented()) {
                  $this.attr("aria-expanded", "false");
                  $parent.removeClass("open").trigger($.Event("hidden.bs.dropdown", attributes));
                }
              }
            }
          });
        }
      }
      /**
       * @param {?} type
       * @return {?}
       */
      function setValue(type) {
        return this.each(function() {
          var $this = $(this);
          var data = $this.data("bs.dropdown");
          if (!data) {
            $this.data("bs.dropdown", data = new Dropdown(this));
          }
          if ("string" == typeof type) {
            data[type].call($this);
          }
        });
      }
      /** @type {string} */
      var backdrop = ".dropdown-backdrop";
      /** @type {string} */
      var selector = '[data-toggle="dropdown"]';
      /**
       * @param {string} elem
       * @return {undefined}
       */
      var Dropdown = function(elem) {
        $(elem).on("click.bs.dropdown", this.toggle);
      };
      /** @type {string} */
      Dropdown.VERSION = "3.3.6";
      /**
       * @param {Object} e
       * @return {?}
       */
      Dropdown.prototype.toggle = function(e) {
        var $this = $(this);
        if (!$this.is(".disabled, :disabled")) {
          var $parent = getParent($this);
          var isActive = $parent.hasClass("open");
          if (start(), !isActive) {
            if ("ontouchstart" in document.documentElement) {
              if (!$parent.closest(".navbar-nav").length) {
                $(document.createElement("div")).addClass("dropdown-backdrop").insertAfter($(this)).on("click", start);
              }
            }
            var attributes = {
              relatedTarget : this
            };
            if ($parent.trigger(e = $.Event("show.bs.dropdown", attributes)), e.isDefaultPrevented()) {
              return;
            }
            $this.trigger("focus").attr("aria-expanded", "true");
            $parent.toggleClass("open").trigger($.Event("shown.bs.dropdown", attributes));
          }
          return false;
        }
      };
      /**
       * @param {Event} e
       * @return {?}
       */
      Dropdown.prototype.keydown = function(e) {
        if (/(38|40|27|32)/.test(e.which) && !/input|textarea/i.test(e.target.tagName)) {
          var $this = $(this);
          if (e.preventDefault(), e.stopPropagation(), !$this.is(".disabled, :disabled")) {
            var $parent = getParent($this);
            var isActive = $parent.hasClass("open");
            if (!isActive && 27 != e.which || isActive && 27 == e.which) {
              return 27 == e.which && $parent.find(selector).trigger("focus"), $this.trigger("click");
            }
            /** @type {string} */
            var desc = " li:not(.disabled):visible a";
            var elements = $parent.find(".dropdown-menu" + desc);
            if (elements.length) {
              var index = elements.index(e.target);
              if (38 == e.which) {
                if (index > 0) {
                  index--;
                }
              }
              if (40 == e.which) {
                if (index < elements.length - 1) {
                  index++;
                }
              }
              if (!~index) {
                /** @type {number} */
                index = 0;
              }
              elements.eq(index).trigger("focus");
            }
          }
        }
      };
      var old = $.fn.dropdown;
      /** @type {function (?): ?} */
      $.fn.dropdown = setValue;
      /** @type {function (string): undefined} */
      $.fn.dropdown.Constructor = Dropdown;
      /**
       * @return {?}
       */
      $.fn.dropdown.noConflict = function() {
        return $.fn.dropdown = old, this;
      };
      $(document).on("click.bs.dropdown.data-api", start).on("click.bs.dropdown.data-api", ".dropdown form", function(event) {
        event.stopPropagation();
      }).on("click.bs.dropdown.data-api", selector, Dropdown.prototype.toggle).on("keydown.bs.dropdown.data-api", selector, Dropdown.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", Dropdown.prototype.keydown);
    }(jQuery);
  }).call(next_scope, callback(1));
}, function(dataAndEvents, next_scope, callback) {
  (function(jQuery) {
    /** @type {function (?): ?} */
    var tmpl = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(optionsString) {
      return typeof optionsString;
    } : function(b) {
      return b && ("function" == typeof Symbol && b.constructor === Symbol) ? "symbol" : typeof b;
    };
    +function($) {
      /**
       * @param {?} options
       * @param {Function} value
       * @return {?}
       */
      function init(options, value) {
        return this.each(function() {
          var $this = $(this);
          var data = $this.data("bs.modal");
          var about = $.extend({}, Modal.DEFAULTS, $this.data(), "object" == ("undefined" == typeof options ? "undefined" : tmpl(options)) && options);
          if (!data) {
            $this.data("bs.modal", data = new Modal(this, about));
          }
          if ("string" == typeof options) {
            data[options](value);
          } else {
            if (about.show) {
              data.show(value);
            }
          }
        });
      }
      /**
       * @param {string} elem
       * @param {Object} opt_attributes
       * @return {undefined}
       */
      var Modal = function(elem, opt_attributes) {
        /** @type {Object} */
        this.options = opt_attributes;
        this.$body = $(document.body);
        this.$element = $(elem);
        this.$dialog = this.$element.find(".modal-dialog");
        /** @type {null} */
        this.$backdrop = null;
        /** @type {null} */
        this.isShown = null;
        /** @type {null} */
        this.originalBodyPad = null;
        /** @type {number} */
        this.scrollbarWidth = 0;
        /** @type {boolean} */
        this.ignoreBackdropClick = false;
        if (this.options.remote) {
          this.$element.find(".modal-content").load(this.options.remote, $.proxy(function() {
            this.$element.trigger("loaded.bs.modal");
          }, this));
        }
      };
      /** @type {string} */
      Modal.VERSION = "3.3.6";
      /** @type {number} */
      Modal.TRANSITION_DURATION = 300;
      /** @type {number} */
      Modal.BACKDROP_TRANSITION_DURATION = 150;
      Modal.DEFAULTS = {
        backdrop : true,
        keyboard : true,
        show : true
      };
      /**
       * @param {Function} active
       * @return {?}
       */
      Modal.prototype.toggle = function(active) {
        return this.isShown ? this.hide() : this.show(active);
      };
      /**
       * @param {Function} target
       * @return {undefined}
       */
      Modal.prototype.show = function(target) {
        var that = this;
        var e = $.Event("show.bs.modal", {
          /** @type {Function} */
          relatedTarget : target
        });
        this.$element.trigger(e);
        if (!this.isShown) {
          if (!e.isDefaultPrevented()) {
            /** @type {boolean} */
            this.isShown = true;
            this.checkScrollbar();
            this.setScrollbar();
            this.$body.addClass("modal-open");
            this.escape();
            this.resize();
            this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', $.proxy(this.hide, this));
            this.$dialog.on("mousedown.dismiss.bs.modal", function() {
              that.$element.one("mouseup.dismiss.bs.modal", function(ev) {
                if ($(ev.target).is(that.$element)) {
                  /** @type {boolean} */
                  that.ignoreBackdropClick = true;
                }
              });
            });
            this.backdrop(function() {
              var s = $.support.transition && that.$element.hasClass("fade");
              if (!that.$element.parent().length) {
                that.$element.appendTo(that.$body);
              }
              that.$element.show().scrollTop(0);
              that.adjustDialog();
              if (s) {
                that.$element[0].offsetWidth;
              }
              that.$element.addClass("in");
              that.enforceFocus();
              var type = $.Event("shown.bs.modal", {
                /** @type {Function} */
                relatedTarget : target
              });
              if (s) {
                that.$dialog.one("bsTransitionEnd", function() {
                  that.$element.trigger("focus").trigger(type);
                }).emulateTransitionEnd(Modal.TRANSITION_DURATION);
              } else {
                that.$element.trigger("focus").trigger(type);
              }
            });
          }
        }
      };
      /**
       * @param {Object} e
       * @return {undefined}
       */
      Modal.prototype.hide = function(e) {
        if (e) {
          e.preventDefault();
        }
        e = $.Event("hide.bs.modal");
        this.$element.trigger(e);
        if (this.isShown) {
          if (!e.isDefaultPrevented()) {
            /** @type {boolean} */
            this.isShown = false;
            this.escape();
            this.resize();
            $(document).off("focusin.bs.modal");
            this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal");
            this.$dialog.off("mousedown.dismiss.bs.modal");
            if ($.support.transition && this.$element.hasClass("fade")) {
              this.$element.one("bsTransitionEnd", $.proxy(this.hideModal, this)).emulateTransitionEnd(Modal.TRANSITION_DURATION);
            } else {
              this.hideModal();
            }
          }
        }
      };
      /**
       * @return {undefined}
       */
      Modal.prototype.enforceFocus = function() {
        $(document).off("focusin.bs.modal").on("focusin.bs.modal", $.proxy(function(e) {
          if (!(this.$element[0] === e.target)) {
            if (!this.$element.has(e.target).length) {
              this.$element.trigger("focus");
            }
          }
        }, this));
      };
      /**
       * @return {undefined}
       */
      Modal.prototype.escape = function() {
        if (this.isShown && this.options.keyboard) {
          this.$element.on("keydown.dismiss.bs.modal", $.proxy(function(event) {
            if (27 == event.which) {
              this.hide();
            }
          }, this));
        } else {
          if (!this.isShown) {
            this.$element.off("keydown.dismiss.bs.modal");
          }
        }
      };
      /**
       * @return {undefined}
       */
      Modal.prototype.resize = function() {
        if (this.isShown) {
          $(window).on("resize.bs.modal", $.proxy(this.handleUpdate, this));
        } else {
          $(window).off("resize.bs.modal");
        }
      };
      /**
       * @return {undefined}
       */
      Modal.prototype.hideModal = function() {
        var data = this;
        this.$element.hide();
        this.backdrop(function() {
          data.$body.removeClass("modal-open");
          data.resetAdjustments();
          data.resetScrollbar();
          data.$element.trigger("hidden.bs.modal");
        });
      };
      /**
       * @return {undefined}
       */
      Modal.prototype.removeBackdrop = function() {
        if (this.$backdrop) {
          this.$backdrop.remove();
        }
        /** @type {null} */
        this.$backdrop = null;
      };
      /**
       * @param {Function} callback
       * @return {undefined}
       */
      Modal.prototype.backdrop = function(callback) {
        var that = this;
        /** @type {string} */
        var animate = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
          var doAnimate = $.support.transition && animate;
          if (this.$backdrop = $(document.createElement("div")).addClass("modal-backdrop " + animate).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", $.proxy(function(e) {
            return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = false) : void(e.target === e.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()));
          }, this)), doAnimate && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !callback) {
            return;
          }
          if (doAnimate) {
            this.$backdrop.one("bsTransitionEnd", callback).emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION);
          } else {
            callback();
          }
        } else {
          if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            /**
             * @return {undefined}
             */
            var removeElement = function() {
              that.removeBackdrop();
              if (callback) {
                callback();
              }
            };
            if ($.support.transition && this.$element.hasClass("fade")) {
              this.$backdrop.one("bsTransitionEnd", removeElement).emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION);
            } else {
              removeElement();
            }
          } else {
            if (callback) {
              callback();
            }
          }
        }
      };
      /**
       * @return {undefined}
       */
      Modal.prototype.handleUpdate = function() {
        this.adjustDialog();
      };
      /**
       * @return {undefined}
       */
      Modal.prototype.adjustDialog = function() {
        /** @type {boolean} */
        var needsFlash = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
          paddingLeft : !this.bodyIsOverflowing && needsFlash ? this.scrollbarWidth : "",
          paddingRight : this.bodyIsOverflowing && !needsFlash ? this.scrollbarWidth : ""
        });
      };
      /**
       * @return {undefined}
       */
      Modal.prototype.resetAdjustments = function() {
        this.$element.css({
          paddingLeft : "",
          paddingRight : ""
        });
      };
      /**
       * @return {undefined}
       */
      Modal.prototype.checkScrollbar = function() {
        /** @type {number} */
        var windowInnerWidth = window.innerWidth;
        if (!windowInnerWidth) {
          /** @type {(ClientRect|null)} */
          var d = document.documentElement.getBoundingClientRect();
          /** @type {number} */
          windowInnerWidth = d.right - Math.abs(d.left);
        }
        /** @type {boolean} */
        this.bodyIsOverflowing = document.body.clientWidth < windowInnerWidth;
        this.scrollbarWidth = this.measureScrollbar();
      };
      /**
       * @return {undefined}
       */
      Modal.prototype.setScrollbar = function() {
        /** @type {number} */
        var top = parseInt(this.$body.css("padding-right") || 0, 10);
        /** @type {(number|string)} */
        this.originalBodyPad = document.body.style.paddingRight || "";
        if (this.bodyIsOverflowing) {
          this.$body.css("padding-right", top + this.scrollbarWidth);
        }
      };
      /**
       * @return {undefined}
       */
      Modal.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", this.originalBodyPad);
      };
      /**
       * @return {?}
       */
      Modal.prototype.measureScrollbar = function() {
        /** @type {Element} */
        var n = document.createElement("div");
        /** @type {string} */
        n.className = "modal-scrollbar-measure";
        this.$body.append(n);
        /** @type {number} */
        var e = n.offsetWidth - n.clientWidth;
        return this.$body[0].removeChild(n), e;
      };
      var old = $.fn.modal;
      /** @type {function (?, Function): ?} */
      $.fn.modal = init;
      /** @type {function (string, Object): undefined} */
      $.fn.modal.Constructor = Modal;
      /**
       * @return {?}
       */
      $.fn.modal.noConflict = function() {
        return $.fn.modal = old, this;
      };
      $(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(types) {
        var $this = $(this);
        var href = $this.attr("href");
        var self = $($this.attr("data-target") || href && href.replace(/.*(?=#[^\s]+$)/, ""));
        var entityType = self.data("bs.modal") ? "toggle" : $.extend({
          remote : !/#/.test(href) && href
        }, self.data(), $this.data());
        if ($this.is("a")) {
          types.preventDefault();
        }
        self.one("show.bs.modal", function(event) {
          if (!event.isDefaultPrevented()) {
            self.one("hidden.bs.modal", function() {
              if ($this.is(":visible")) {
                $this.trigger("focus");
              }
            });
          }
        });
        init.call(self, entityType, this);
      });
    }(jQuery);
  }).call(next_scope, callback(1));
}, function(dataAndEvents, next_scope, callback) {
  (function(jQuery) {
    /** @type {function ((Object|string)): ?} */
    var getter = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(property) {
      return typeof property;
    } : function(b) {
      return b && ("function" == typeof Symbol && b.constructor === Symbol) ? "symbol" : typeof b;
    };
    +function($) {
      /**
       * @param {(Object|string)} index
       * @return {?}
       */
      function init(index) {
        return this.each(function() {
          var $this = $(this);
          var data = $this.data("bs.tooltip");
          var options = "object" == ("undefined" == typeof index ? "undefined" : getter(index)) && index;
          if (!(!data && /destroy|hide/.test(index))) {
            if (!data) {
              $this.data("bs.tooltip", data = new Tooltip(this, options));
            }
            if ("string" == typeof index) {
              data[index]();
            }
          }
        });
      }
      /**
       * @param {string} elem
       * @param {?} opt_attributes
       * @return {undefined}
       */
      var Tooltip = function(elem, opt_attributes) {
        /** @type {null} */
        this.type = null;
        /** @type {null} */
        this.options = null;
        /** @type {null} */
        this.enabled = null;
        /** @type {null} */
        this.timeout = null;
        /** @type {null} */
        this.hoverState = null;
        /** @type {null} */
        this.$element = null;
        /** @type {null} */
        this.inState = null;
        this.init("tooltip", elem, opt_attributes);
      };
      /** @type {string} */
      Tooltip.VERSION = "3.3.6";
      /** @type {number} */
      Tooltip.TRANSITION_DURATION = 150;
      Tooltip.DEFAULTS = {
        animation : true,
        placement : "top",
        selector : false,
        template : '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger : "hover focus",
        title : "",
        delay : 0,
        html : false,
        container : false,
        viewport : {
          selector : "body",
          padding : 0
        }
      };
      /**
       * @param {string} type
       * @param {string} element
       * @param {boolean} options
       * @return {undefined}
       */
      Tooltip.prototype.init = function(type, element, options) {
        if (this.enabled = true, this.type = type, this.$element = $(element), this.options = this.getOptions(options), this.$viewport = this.options.viewport && $($.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
          click : false,
          hover : false,
          focus : false
        }, this.$element[0] instanceof document.constructor && !this.options.selector) {
          throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        }
        var resultItems = this.options.trigger.split(" ");
        var i = resultItems.length;
        for (;i--;) {
          var result = resultItems[i];
          if ("click" == result) {
            this.$element.on("click." + this.type, this.options.selector, $.proxy(this.toggle, this));
          } else {
            if ("manual" != result) {
              /** @type {string} */
              var eventIn = "hover" == result ? "mouseenter" : "focusin";
              /** @type {string} */
              var eventOut = "hover" == result ? "mouseleave" : "focusout";
              this.$element.on(eventIn + "." + this.type, this.options.selector, $.proxy(this.enter, this));
              this.$element.on(eventOut + "." + this.type, this.options.selector, $.proxy(this.leave, this));
            }
          }
        }
        if (this.options.selector) {
          this._options = $.extend({}, this.options, {
            trigger : "manual",
            selector : ""
          });
        } else {
          this.fixTitle();
        }
      };
      /**
       * @return {?}
       */
      Tooltip.prototype.getDefaults = function() {
        return Tooltip.DEFAULTS;
      };
      /**
       * @param {boolean} options
       * @return {?}
       */
      Tooltip.prototype.getOptions = function(options) {
        return options = $.extend({}, this.getDefaults(), this.$element.data(), options), options.delay && ("number" == typeof options.delay && (options.delay = {
          show : options.delay,
          hide : options.delay
        })), options;
      };
      /**
       * @return {?}
       */
      Tooltip.prototype.getDelegateOptions = function() {
        var flags = {};
        var defaults = this.getDefaults();
        return this._options && $.each(this._options, function(key, value) {
          if (defaults[key] != value) {
            flags[key] = value;
          }
        }), flags;
      };
      /**
       * @param {Object} obj
       * @return {?}
       */
      Tooltip.prototype.enter = function(obj) {
        var pdataOld = obj instanceof this.constructor ? obj : $(obj.currentTarget).data("bs." + this.type);
        return pdataOld || (pdataOld = new this.constructor(obj.currentTarget, this.getDelegateOptions()), $(obj.currentTarget).data("bs." + this.type, pdataOld)), obj instanceof $.Event && (pdataOld.inState["focusin" == obj.type ? "focus" : "hover"] = true), pdataOld.tip().hasClass("in") || "in" == pdataOld.hoverState ? void(pdataOld.hoverState = "in") : (clearTimeout(pdataOld.timeout), pdataOld.hoverState = "in", pdataOld.options.delay && pdataOld.options.delay.show ? void(pdataOld.timeout = setTimeout(function() {
          if ("in" == pdataOld.hoverState) {
            pdataOld.show();
          }
        }, pdataOld.options.delay.show)) : pdataOld.show());
      };
      /**
       * @return {?}
       */
      Tooltip.prototype.isInStateTrue = function() {
        var unlock;
        for (unlock in this.inState) {
          if (this.inState[unlock]) {
            return true;
          }
        }
        return false;
      };
      /**
       * @param {Object} obj
       * @return {?}
       */
      Tooltip.prototype.leave = function(obj) {
        var pdataOld = obj instanceof this.constructor ? obj : $(obj.currentTarget).data("bs." + this.type);
        if (pdataOld || (pdataOld = new this.constructor(obj.currentTarget, this.getDelegateOptions()), $(obj.currentTarget).data("bs." + this.type, pdataOld)), obj instanceof $.Event && (pdataOld.inState["focusout" == obj.type ? "focus" : "hover"] = false), !pdataOld.isInStateTrue()) {
          return clearTimeout(pdataOld.timeout), pdataOld.hoverState = "out", pdataOld.options.delay && pdataOld.options.delay.hide ? void(pdataOld.timeout = setTimeout(function() {
            if ("out" == pdataOld.hoverState) {
              pdataOld.hide();
            }
          }, pdataOld.options.delay.hide)) : pdataOld.hide();
        }
      };
      /**
       * @return {undefined}
       */
      Tooltip.prototype.show = function() {
        var e = $.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
          this.$element.trigger(e);
          var i = $.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
          if (e.isDefaultPrevented() || !i) {
            return;
          }
          var self = this;
          var $tip = this.tip();
          var tr = this.getUID(this.type);
          this.setContent();
          $tip.attr("id", tr);
          this.$element.attr("aria-describedby", tr);
          if (this.options.animation) {
            $tip.addClass("fade");
          }
          var placement = "function" == typeof this.options.placement ? this.options.placement.call(this, $tip[0], this.$element[0]) : this.options.placement;
          /** @type {RegExp} */
          var autoToken = /\s?auto?\s?/i;
          /** @type {boolean} */
          var autoPlace = autoToken.test(placement);
          if (autoPlace) {
            placement = placement.replace(autoToken, "") || "top";
          }
          $tip.detach().css({
            top : 0,
            left : 0,
            display : "block"
          }).addClass(placement).data("bs." + this.type, this);
          if (this.options.container) {
            $tip.appendTo(this.options.container);
          } else {
            $tip.insertAfter(this.$element);
          }
          this.$element.trigger("inserted.bs." + this.type);
          var pos = this.getPosition();
          var actualWidth = $tip[0].offsetWidth;
          var actualHeight = $tip[0].offsetHeight;
          if (autoPlace) {
            var pdataOld = placement;
            var p = this.getPosition(this.$viewport);
            placement = "bottom" == placement && pos.bottom + actualHeight > p.bottom ? "top" : "top" == placement && pos.top - actualHeight < p.top ? "bottom" : "right" == placement && pos.right + actualWidth > p.width ? "left" : "left" == placement && pos.left - actualWidth < p.left ? "right" : placement;
            $tip.removeClass(pdataOld).addClass(placement);
          }
          var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight);
          this.applyPlacement(calculatedOffset, placement);
          /**
           * @return {undefined}
           */
          var complete = function() {
            var text = self.hoverState;
            self.$element.trigger("shown.bs." + self.type);
            /** @type {null} */
            self.hoverState = null;
            if ("out" == text) {
              self.leave(self);
            }
          };
          if ($.support.transition && this.$tip.hasClass("fade")) {
            $tip.one("bsTransitionEnd", complete).emulateTransitionEnd(Tooltip.TRANSITION_DURATION);
          } else {
            complete();
          }
        }
      };
      /**
       * @param {string} optgroup
       * @param {string} placement
       * @return {undefined}
       */
      Tooltip.prototype.applyPlacement = function(optgroup, placement) {
        var $tip = this.tip();
        var x = $tip[0].offsetWidth;
        var height = $tip[0].offsetHeight;
        /** @type {number} */
        var num2 = parseInt($tip.css("margin-top"), 10);
        /** @type {number} */
        var paddingLeft = parseInt($tip.css("margin-left"), 10);
        if (isNaN(num2)) {
          /** @type {number} */
          num2 = 0;
        }
        if (isNaN(paddingLeft)) {
          /** @type {number} */
          paddingLeft = 0;
        }
        optgroup.top += num2;
        optgroup.left += paddingLeft;
        $.offset.setOffset($tip[0], $.extend({
          /**
           * @param {?} props
           * @return {undefined}
           */
          using : function(props) {
            $tip.css({
              top : Math.round(props.top),
              left : Math.round(props.left)
            });
          }
        }, optgroup), 0);
        $tip.addClass("in");
        var udataCur = $tip[0].offsetWidth;
        var actualHeight = $tip[0].offsetHeight;
        if ("top" == placement) {
          if (actualHeight != height) {
            /** @type {number} */
            optgroup.top = optgroup.top + height - actualHeight;
          }
        }
        var imageOffset = this.getViewportAdjustedDelta(placement, optgroup, udataCur, actualHeight);
        if (imageOffset.left) {
          optgroup.left += imageOffset.left;
        } else {
          optgroup.top += imageOffset.top;
        }
        /** @type {boolean} */
        var isHorizontal = /top|bottom/.test(placement);
        var _position = isHorizontal ? 2 * imageOffset.left - x + udataCur : 2 * imageOffset.top - height + actualHeight;
        /** @type {string} */
        var sizingDomProperty = isHorizontal ? "offsetWidth" : "offsetHeight";
        $tip.offset(optgroup);
        this.replaceArrow(_position, $tip[0][sizingDomProperty], isHorizontal);
      };
      /**
       * @param {number} position
       * @param {number} dimension
       * @param {boolean} horizontal
       * @return {undefined}
       */
      Tooltip.prototype.replaceArrow = function(position, dimension, horizontal) {
        this.arrow().css(horizontal ? "left" : "top", 50 * (1 - position / dimension) + "%").css(horizontal ? "top" : "left", "");
      };
      /**
       * @return {undefined}
       */
      Tooltip.prototype.setContent = function() {
        var $tip = this.tip();
        var title = this.getTitle();
        $tip.find(".tooltip-inner")[this.options.html ? "html" : "text"](title);
        $tip.removeClass("fade in top bottom left right");
      };
      /**
       * @param {Function} e
       * @return {?}
       */
      Tooltip.prototype.hide = function(e) {
        /**
         * @return {undefined}
         */
        function complete() {
          if ("in" != self.hoverState) {
            $tip.detach();
          }
          self.$element.removeAttr("aria-describedby").trigger("hidden.bs." + self.type);
          if (e) {
            e();
          }
        }
        var self = this;
        var $tip = $(this.$tip);
        var event = $.Event("hide.bs." + this.type);
        if (this.$element.trigger(event), !event.isDefaultPrevented()) {
          return $tip.removeClass("in"), $.support.transition && $tip.hasClass("fade") ? $tip.one("bsTransitionEnd", complete).emulateTransitionEnd(Tooltip.TRANSITION_DURATION) : complete(), this.hoverState = null, this;
        }
      };
      /**
       * @return {undefined}
       */
      Tooltip.prototype.fixTitle = function() {
        var $e = this.$element;
        if ($e.attr("title") || "string" != typeof $e.attr("data-original-title")) {
          $e.attr("data-original-title", $e.attr("title") || "").attr("title", "");
        }
      };
      /**
       * @return {?}
       */
      Tooltip.prototype.hasContent = function() {
        return this.getTitle();
      };
      /**
       * @param {Object} $element
       * @return {?}
       */
      Tooltip.prototype.getPosition = function($element) {
        $element = $element || this.$element;
        var el = $element[0];
        /** @type {boolean} */
        var bShow = "BODY" == el.tagName;
        var rect = el.getBoundingClientRect();
        if (null == rect.width) {
          rect = $.extend({}, rect, {
            width : rect.right - rect.left,
            height : rect.bottom - rect.top
          });
        }
        var platformVersions = bShow ? {
          top : 0,
          left : 0
        } : $element.offset();
        var copy = {
          scroll : bShow ? document.documentElement.scrollTop || document.body.scrollTop : $element.scrollTop()
        };
        /** @type {(null|{height: ?, width: ?})} */
        var newOpts = bShow ? {
          width : $(window).width(),
          height : $(window).height()
        } : null;
        return $.extend({}, rect, copy, newOpts, platformVersions);
      };
      /**
       * @param {string} str
       * @param {?} pos
       * @param {number} actualWidth
       * @param {number} actualHeight
       * @return {?}
       */
      Tooltip.prototype.getCalculatedOffset = function(str, pos, actualWidth, actualHeight) {
        return "bottom" == str ? {
          top : pos.top + pos.height,
          left : pos.left + pos.width / 2 - actualWidth / 2
        } : "top" == str ? {
          top : pos.top - actualHeight,
          left : pos.left + pos.width / 2 - actualWidth / 2
        } : "left" == str ? {
          top : pos.top + pos.height / 2 - actualHeight / 2,
          left : pos.left - actualWidth
        } : {
          top : pos.top + pos.height / 2 - actualHeight / 2,
          left : pos.left + pos.width
        };
      };
      /**
       * @param {string} placement
       * @param {Object} layout
       * @param {?} value
       * @param {number} actualHeight
       * @return {?}
       */
      Tooltip.prototype.getViewportAdjustedDelta = function(placement, layout, value, actualHeight) {
        var result = {
          top : 0,
          left : 0
        };
        if (!this.$viewport) {
          return result;
        }
        var bounce = this.options.viewport && this.options.viewport.padding || 0;
        var p = this.getPosition(this.$viewport);
        if (/right|left/.test(placement)) {
          /** @type {number} */
          var y = layout.top - bounce - p.scroll;
          var imageHeight = layout.top + bounce - p.scroll + actualHeight;
          if (y < p.top) {
            /** @type {number} */
            result.top = p.top - y;
          } else {
            if (imageHeight > p.top + p.height) {
              /** @type {number} */
              result.top = p.top + p.height - imageHeight;
            }
          }
        } else {
          /** @type {number} */
          var x = layout.left - bounce;
          var position = layout.left + bounce + value;
          if (x < p.left) {
            /** @type {number} */
            result.left = p.left - x;
          } else {
            if (position > p.right) {
              /** @type {number} */
              result.left = p.left + p.width - position;
            }
          }
        }
        return result;
      };
      /**
       * @return {?}
       */
      Tooltip.prototype.getTitle = function() {
        var t;
        var $e = this.$element;
        var o = this.options;
        return t = $e.attr("data-original-title") || ("function" == typeof o.title ? o.title.call($e[0]) : o.title);
      };
      /**
       * @param {number} id
       * @return {?}
       */
      Tooltip.prototype.getUID = function(id) {
        do {
          id += ~~(1E6 * Math.random());
        } while (document.getElementById(id));
        return id;
      };
      /**
       * @return {?}
       */
      Tooltip.prototype.tip = function() {
        if (!this.$tip && (this.$tip = $(this.options.template), 1 != this.$tip.length)) {
          throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        }
        return this.$tip;
      };
      /**
       * @return {?}
       */
      Tooltip.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow");
      };
      /**
       * @return {undefined}
       */
      Tooltip.prototype.enable = function() {
        /** @type {boolean} */
        this.enabled = true;
      };
      /**
       * @return {undefined}
       */
      Tooltip.prototype.disable = function() {
        /** @type {boolean} */
        this.enabled = false;
      };
      /**
       * @return {undefined}
       */
      Tooltip.prototype.toggleEnabled = function() {
        /** @type {boolean} */
        this.enabled = !this.enabled;
      };
      /**
       * @param {Event} e
       * @return {undefined}
       */
      Tooltip.prototype.toggle = function(e) {
        var pdataOld = this;
        if (e) {
          pdataOld = $(e.currentTarget).data("bs." + this.type);
          if (!pdataOld) {
            pdataOld = new this.constructor(e.currentTarget, this.getDelegateOptions());
            $(e.currentTarget).data("bs." + this.type, pdataOld);
          }
        }
        if (e) {
          /** @type {boolean} */
          pdataOld.inState.click = !pdataOld.inState.click;
          if (pdataOld.isInStateTrue()) {
            pdataOld.enter(pdataOld);
          } else {
            pdataOld.leave(pdataOld);
          }
        } else {
          if (pdataOld.tip().hasClass("in")) {
            pdataOld.leave(pdataOld);
          } else {
            pdataOld.enter(pdataOld);
          }
        }
      };
      /**
       * @return {undefined}
       */
      Tooltip.prototype.destroy = function() {
        var self = this;
        clearTimeout(this.timeout);
        this.hide(function() {
          self.$element.off("." + self.type).removeData("bs." + self.type);
          if (self.$tip) {
            self.$tip.detach();
          }
          /** @type {null} */
          self.$tip = null;
          /** @type {null} */
          self.$arrow = null;
          /** @type {null} */
          self.$viewport = null;
        });
      };
      var old = $.fn.tooltip;
      /** @type {function ((Object|string)): ?} */
      $.fn.tooltip = init;
      /** @type {function (string, ?): undefined} */
      $.fn.tooltip.Constructor = Tooltip;
      /**
       * @return {?}
       */
      $.fn.tooltip.noConflict = function() {
        return $.fn.tooltip = old, this;
      };
    }(jQuery);
  }).call(next_scope, callback(1));
}, function(dataAndEvents, next_scope, callback) {
  (function(jQuery) {
    /** @type {function ((Object|string)): ?} */
    var getter = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(property) {
      return typeof property;
    } : function(b) {
      return b && ("function" == typeof Symbol && b.constructor === Symbol) ? "symbol" : typeof b;
    };
    +function($) {
      /**
       * @param {(Object|string)} index
       * @return {?}
       */
      function init(index) {
        return this.each(function() {
          var $this = $(this);
          var data = $this.data("bs.popover");
          var options = "object" == ("undefined" == typeof index ? "undefined" : getter(index)) && index;
          if (!(!data && /destroy|hide/.test(index))) {
            if (!data) {
              $this.data("bs.popover", data = new Popover(this, options));
            }
            if ("string" == typeof index) {
              data[index]();
            }
          }
        });
      }
      /**
       * @param {string} elem
       * @param {?} opt_attributes
       * @return {undefined}
       */
      var Popover = function(elem, opt_attributes) {
        this.init("popover", elem, opt_attributes);
      };
      if (!$.fn.tooltip) {
        throw new Error("Popover requires tooltip.js");
      }
      /** @type {string} */
      Popover.VERSION = "3.3.6";
      Popover.DEFAULTS = $.extend({}, $.fn.tooltip.Constructor.DEFAULTS, {
        placement : "right",
        trigger : "click",
        content : "",
        template : '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
      });
      Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype);
      /** @type {function (string, ?): undefined} */
      Popover.prototype.constructor = Popover;
      /**
       * @return {?}
       */
      Popover.prototype.getDefaults = function() {
        return Popover.DEFAULTS;
      };
      /**
       * @return {undefined}
       */
      Popover.prototype.setContent = function() {
        var $tip = this.tip();
        var title = this.getTitle();
        var err = this.getContent();
        $tip.find(".popover-title")[this.options.html ? "html" : "text"](title);
        $tip.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof err ? "html" : "append" : "text"](err);
        $tip.removeClass("fade top bottom left right in");
        if (!$tip.find(".popover-title").html()) {
          $tip.find(".popover-title").hide();
        }
      };
      /**
       * @return {?}
       */
      Popover.prototype.hasContent = function() {
        return this.getTitle() || this.getContent();
      };
      /**
       * @return {?}
       */
      Popover.prototype.getContent = function() {
        var $e = this.$element;
        var o = this.options;
        return $e.attr("data-content") || ("function" == typeof o.content ? o.content.call($e[0]) : o.content);
      };
      /**
       * @return {?}
       */
      Popover.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow");
      };
      var old = $.fn.popover;
      /** @type {function ((Object|string)): ?} */
      $.fn.popover = init;
      /** @type {function (string, ?): undefined} */
      $.fn.popover.Constructor = Popover;
      /**
       * @return {?}
       */
      $.fn.popover.noConflict = function() {
        return $.fn.popover = old, this;
      };
    }(jQuery);
  }).call(next_scope, callback(1));
}, function(dataAndEvents, next_scope, callback) {
  (function(jQuery) {
    /** @type {function ((Object|string)): ?} */
    var getter = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(property) {
      return typeof property;
    } : function(b) {
      return b && ("function" == typeof Symbol && b.constructor === Symbol) ? "symbol" : typeof b;
    };
    +function($) {
      /**
       * @param {string} elem
       * @param {?} opt_attributes
       * @return {undefined}
       */
      function ScrollSpy(elem, opt_attributes) {
        this.$body = $(document.body);
        this.$scrollElement = $($(elem).is(document.body) ? window : elem);
        this.options = $.extend({}, ScrollSpy.DEFAULTS, opt_attributes);
        /** @type {string} */
        this.selector = (this.options.target || "") + " .nav li > a";
        /** @type {Array} */
        this.offsets = [];
        /** @type {Array} */
        this.targets = [];
        /** @type {null} */
        this.activeTarget = null;
        /** @type {number} */
        this.scrollHeight = 0;
        this.$scrollElement.on("scroll.bs.scrollspy", $.proxy(this.process, this));
        this.refresh();
        this.process();
      }
      /**
       * @param {(Object|string)} index
       * @return {?}
       */
      function init(index) {
        return this.each(function() {
          var $this = $(this);
          var data = $this.data("bs.scrollspy");
          var options = "object" == ("undefined" == typeof index ? "undefined" : getter(index)) && index;
          if (!data) {
            $this.data("bs.scrollspy", data = new ScrollSpy(this, options));
          }
          if ("string" == typeof index) {
            data[index]();
          }
        });
      }
      /** @type {string} */
      ScrollSpy.VERSION = "3.3.6";
      ScrollSpy.DEFAULTS = {
        offset : 10
      };
      /**
       * @return {?}
       */
      ScrollSpy.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight);
      };
      /**
       * @return {undefined}
       */
      ScrollSpy.prototype.refresh = function() {
        var self = this;
        /** @type {string} */
        var i = "offset";
        /** @type {number} */
        var nub_height = 0;
        /** @type {Array} */
        this.offsets = [];
        /** @type {Array} */
        this.targets = [];
        this.scrollHeight = this.getScrollHeight();
        if (!$.isWindow(this.$scrollElement[0])) {
          /** @type {string} */
          i = "position";
          nub_height = this.$scrollElement.scrollTop();
        }
        this.$body.find(this.selector).map(function() {
          var $el = $(this);
          var href = $el.data("target") || $el.attr("href");
          var codeSegments = /^#./.test(href) && $(href);
          return codeSegments && (codeSegments.length && (codeSegments.is(":visible") && [[codeSegments[i]().top + nub_height, href]])) || null;
        }).sort(function(mat0, mat1) {
          return mat0[0] - mat1[0];
        }).each(function() {
          self.offsets.push(this[0]);
          self.targets.push(this[1]);
        });
      };
      /**
       * @return {?}
       */
      ScrollSpy.prototype.process = function() {
        var i;
        var scrollTop = this.$scrollElement.scrollTop() + this.options.offset;
        var offset = this.getScrollHeight();
        /** @type {number} */
        var maxScroll = this.options.offset + offset - this.$scrollElement.height();
        var offsets = this.offsets;
        var targets = this.targets;
        var activeTarget = this.activeTarget;
        if (this.scrollHeight != offset && this.refresh(), scrollTop >= maxScroll) {
          return activeTarget != (i = targets[targets.length - 1]) && this.activate(i);
        }
        if (activeTarget && scrollTop < offsets[0]) {
          return this.activeTarget = null, this.clear();
        }
        i = offsets.length;
        for (;i--;) {
          if (activeTarget != targets[i]) {
            if (scrollTop >= offsets[i]) {
              if (void 0 === offsets[i + 1] || scrollTop < offsets[i + 1]) {
                this.activate(targets[i]);
              }
            }
          }
        }
      };
      /**
       * @param {Error} target
       * @return {undefined}
       */
      ScrollSpy.prototype.activate = function(target) {
        /** @type {Error} */
        this.activeTarget = target;
        this.clear();
        /** @type {string} */
        var selector = this.selector + '[data-target="' + target + '"],' + this.selector + '[href="' + target + '"]';
        var active = $(selector).parents("li").addClass("active");
        if (active.parent(".dropdown-menu").length) {
          active = active.closest("li.dropdown").addClass("active");
        }
        active.trigger("activate.bs.scrollspy");
      };
      /**
       * @return {undefined}
       */
      ScrollSpy.prototype.clear = function() {
        $(this.selector).parentsUntil(this.options.target, ".active").removeClass("active");
      };
      var old = $.fn.scrollspy;
      /** @type {function ((Object|string)): ?} */
      $.fn.scrollspy = init;
      /** @type {function (string, ?): undefined} */
      $.fn.scrollspy.Constructor = ScrollSpy;
      /**
       * @return {?}
       */
      $.fn.scrollspy.noConflict = function() {
        return $.fn.scrollspy = old, this;
      };
      $(window).on("load.bs.scrollspy.data-api", function() {
        $('[data-spy="scroll"]').each(function() {
          var self = $(this);
          init.call(self, self.data());
        });
      });
    }(jQuery);
  }).call(next_scope, callback(1));
}, function(dataAndEvents, next_scope, callback) {
  (function(jQuery) {
    +function($) {
      /**
       * @param {?} selector
       * @return {?}
       */
      function init(selector) {
        return this.each(function() {
          var $this = $(this);
          var data = $this.data("bs.tab");
          if (!data) {
            $this.data("bs.tab", data = new Tab(this));
          }
          if ("string" == typeof selector) {
            data[selector]();
          }
        });
      }
      /**
       * @param {string} elem
       * @return {undefined}
       */
      var Tab = function(elem) {
        this.element = $(elem);
      };
      /** @type {string} */
      Tab.VERSION = "3.3.6";
      /** @type {number} */
      Tab.TRANSITION_DURATION = 150;
      /**
       * @return {undefined}
       */
      Tab.prototype.show = function() {
        var $this = this.element;
        var $ul = $this.closest("ul:not(.dropdown-menu)");
        var selector = $this.data("target");
        if (selector || (selector = $this.attr("href"), selector = selector && selector.replace(/.*(?=#[^\s]*$)/, "")), !$this.parent("li").hasClass("active")) {
          var elements = $ul.find(".active:last a");
          var e = $.Event("hide.bs.tab", {
            relatedTarget : $this[0]
          });
          var type = $.Event("show.bs.tab", {
            relatedTarget : elements[0]
          });
          if (elements.trigger(e), $this.trigger(type), !type.isDefaultPrevented() && !e.isDefaultPrevented()) {
            var $target = $(selector);
            this.activate($this.closest("li"), $ul);
            this.activate($target, $target.parent(), function() {
              elements.trigger({
                type : "hidden.bs.tab",
                relatedTarget : $this[0]
              });
              $this.trigger({
                type : "shown.bs.tab",
                relatedTarget : elements[0]
              });
            });
          }
        }
      };
      /**
       * @param {Object} element
       * @param {Object} container
       * @param {Object} callback
       * @return {undefined}
       */
      Tab.prototype.activate = function(element, container, callback) {
        /**
         * @return {undefined}
         */
        function next() {
          $active.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", false);
          element.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", true);
          if (showAddButton) {
            element[0].offsetWidth;
            element.addClass("in");
          } else {
            element.removeClass("fade");
          }
          if (element.parent(".dropdown-menu").length) {
            element.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", true);
          }
          if (callback) {
            callback();
          }
        }
        var $active = container.find("> .active");
        var showAddButton = callback && ($.support.transition && ($active.length && $active.hasClass("fade") || !!container.find("> .fade").length));
        if ($active.length && showAddButton) {
          $active.one("bsTransitionEnd", next).emulateTransitionEnd(Tab.TRANSITION_DURATION);
        } else {
          next();
        }
        $active.removeClass("in");
      };
      var old = $.fn.tab;
      /** @type {function (?): ?} */
      $.fn.tab = init;
      /** @type {function (string): undefined} */
      $.fn.tab.Constructor = Tab;
      /**
       * @return {?}
       */
      $.fn.tab.noConflict = function() {
        return $.fn.tab = old, this;
      };
      /**
       * @param {?} evt
       * @return {undefined}
       */
      var close = function(evt) {
        evt.preventDefault();
        init.call($(this), "show");
      };
      $(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', close).on("click.bs.tab.data-api", '[data-toggle="pill"]', close);
    }(jQuery);
  }).call(next_scope, callback(1));
}, function(dataAndEvents, next_scope, callback) {
  (function(jQuery) {
    /** @type {function ((Object|string)): ?} */
    var isNumber = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(property) {
      return typeof property;
    } : function(b) {
      return b && ("function" == typeof Symbol && b.constructor === Symbol) ? "symbol" : typeof b;
    };
    +function($) {
      /**
       * @param {(Object|string)} index
       * @return {?}
       */
      function init(index) {
        return this.each(function() {
          var $this = $(this);
          var data = $this.data("bs.affix");
          var options = "object" == ("undefined" == typeof index ? "undefined" : isNumber(index)) && index;
          if (!data) {
            $this.data("bs.affix", data = new Affix(this, options));
          }
          if ("string" == typeof index) {
            data[index]();
          }
        });
      }
      /**
       * @param {string} elem
       * @param {?} opt_attributes
       * @return {undefined}
       */
      var Affix = function Affix(elem, opt_attributes) {
        this.options = $.extend({}, Affix.DEFAULTS, opt_attributes);
        this.$target = $(this.options.target).on("scroll.bs.affix.data-api", $.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", $.proxy(this.checkPositionWithEventLoop, this));
        this.$element = $(elem);
        /** @type {null} */
        this.affixed = null;
        /** @type {null} */
        this.unpin = null;
        /** @type {null} */
        this.pinnedOffset = null;
        this.checkPosition();
      };
      /** @type {string} */
      Affix.VERSION = "3.3.6";
      /** @type {string} */
      Affix.RESET = "affix affix-top affix-bottom";
      Affix.DEFAULTS = {
        offset : 0,
        target : window
      };
      /**
       * @param {number} el
       * @param {?} value
       * @param {string} top
       * @param {number} stateName
       * @return {?}
       */
      Affix.prototype.getState = function(el, value, top, stateName) {
        var scrollTop = this.$target.scrollTop();
        var position = this.$element.offset();
        var wiewHeight = this.$target.height();
        if (null != top && "top" == this.affixed) {
          return scrollTop < top && "top";
        }
        if ("bottom" == this.affixed) {
          return null != top ? !(scrollTop + this.unpin <= position.top) && "bottom" : !(scrollTop + wiewHeight <= el - stateName) && "bottom";
        }
        /** @type {boolean} */
        var iterator = null == this.affixed;
        var initial = iterator ? scrollTop : position.top;
        var computed = iterator ? wiewHeight : value;
        return null != top && scrollTop <= top ? "top" : null != stateName && (initial + computed >= el - stateName && "bottom");
      };
      /**
       * @return {?}
       */
      Affix.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) {
          return this.pinnedOffset;
        }
        this.$element.removeClass(Affix.RESET).addClass("affix");
        var scrollTop = this.$target.scrollTop();
        var position = this.$element.offset();
        return this.pinnedOffset = position.top - scrollTop;
      };
      /**
       * @return {undefined}
       */
      Affix.prototype.checkPositionWithEventLoop = function() {
        setTimeout($.proxy(this.checkPosition, this), 1);
      };
      /**
       * @return {undefined}
       */
      Affix.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
          var udataCur = this.$element.height();
          var offset = this.options.offset;
          var offsetTop = offset.top;
          var offsetBottom = offset.bottom;
          /** @type {number} */
          var failuresLink = Math.max($(document).height(), $(document.body).height());
          if ("object" != ("undefined" == typeof offset ? "undefined" : isNumber(offset))) {
            offsetBottom = offsetTop = offset;
          }
          if ("function" == typeof offsetTop) {
            offsetTop = offset.top(this.$element);
          }
          if ("function" == typeof offsetBottom) {
            offsetBottom = offset.bottom(this.$element);
          }
          var affix = this.getState(failuresLink, udataCur, offsetTop, offsetBottom);
          if (this.affixed != affix) {
            if (null != this.unpin) {
              this.$element.css("top", "");
            }
            /** @type {string} */
            var affixType = "affix" + (affix ? "-" + affix : "");
            var e = $.Event(affixType + ".bs.affix");
            if (this.$element.trigger(e), e.isDefaultPrevented()) {
              return;
            }
            this.affixed = affix;
            this.unpin = "bottom" == affix ? this.getPinnedOffset() : null;
            this.$element.removeClass(Affix.RESET).addClass(affixType).trigger(affixType.replace("affix", "affixed") + ".bs.affix");
          }
          if ("bottom" == affix) {
            this.$element.offset({
              top : failuresLink - udataCur - offsetBottom
            });
          }
        }
      };
      var old = $.fn.affix;
      /** @type {function ((Object|string)): ?} */
      $.fn.affix = init;
      /** @type {function (string, ?): undefined} */
      $.fn.affix.Constructor = Affix;
      /**
       * @return {?}
       */
      $.fn.affix.noConflict = function() {
        return $.fn.affix = old, this;
      };
      $(window).on("load", function() {
        $('[data-spy="affix"]').each(function() {
          var self = $(this);
          var options = self.data();
          options.offset = options.offset || {};
          if (null != options.offsetBottom) {
            options.offset.bottom = options.offsetBottom;
          }
          if (null != options.offsetTop) {
            options.offset.top = options.offsetTop;
          }
          init.call(self, options);
        });
      });
    }(jQuery);
  }).call(next_scope, callback(1));
}, function(module, next_scope, fn) {
  (function(exports, fallback) {
    /** @type {function (Array): ?} */
    var merge = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(var_args) {
      return typeof var_args;
    } : function(a) {
      return a && ("function" == typeof Symbol && a.constructor === Symbol) ? "symbol" : typeof a;
    };
    !function() {
      /**
       * @param {Object} $
       * @return {undefined}
       */
      function callback($) {
        /**
         * @param {string} name
         * @return {?}
         */
        $.fn.swiper = function(name) {
          var ftuApp;
          return $(this).each(function() {
            var app = new Application(this, name);
            if (!ftuApp) {
              ftuApp = app;
            }
          }), ftuApp;
        };
      }
      var jQuery;
      /**
       * @param {string} check
       * @param {Object} target
       * @return {?}
       */
      var Application = function init(check, target) {
        /**
         * @param {number} num
         * @return {?}
         */
        function read(num) {
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
         * @param {?} selector
         * @return {?}
         */
        function select(event, selector) {
          var $target = jQuery(event.target);
          if (!$target.is(selector)) {
            if ("string" == typeof selector) {
              $target = $target.parents(selector);
            } else {
              if (selector.nodeType) {
                var fn;
                return $target.parents().each(function(dataAndEvents, mod) {
                  if (mod === selector) {
                    fn = selector;
                  }
                }), fn ? selector : void 0;
              }
            }
          }
          if (0 !== $target.length) {
            return $target[0];
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
          var code = ev.keyCode || ev.charCode;
          if (!self.params.allowSwipeToNext && (self.isHorizontal() && 39 === code || !self.isHorizontal() && 40 === code)) {
            return false;
          }
          if (!self.params.allowSwipeToPrev && (self.isHorizontal() && 37 === code || !self.isHorizontal() && 38 === code)) {
            return false;
          }
          if (!(ev.shiftKey || (ev.altKey || (ev.ctrlKey || (ev.metaKey || document.activeElement && (document.activeElement.nodeName && ("input" === document.activeElement.nodeName.toLowerCase() || "textarea" === document.activeElement.nodeName.toLowerCase()))))))) {
            if (37 === code || (39 === code || (38 === code || 40 === code))) {
              /** @type {boolean} */
              var i = false;
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
              var ca = [[offset.left, offset.top], [offset.left + self.width, offset.top], [offset.left, offset.top + self.height], [offset.left + self.width, offset.top + self.height]];
              /** @type {number} */
              var n = 0;
              for (;n < ca.length;n++) {
                var c = ca[n];
                if (c[0] >= position.left) {
                  if (c[0] <= position.left + width) {
                    if (c[1] >= position.top) {
                      if (c[1] <= position.top + height) {
                        /** @type {boolean} */
                        i = true;
                      }
                    }
                  }
                }
              }
              if (!i) {
                return;
              }
            }
            if (self.isHorizontal()) {
              if (!(37 !== code && 39 !== code)) {
                if (ev.preventDefault) {
                  ev.preventDefault();
                } else {
                  /** @type {boolean} */
                  ev.returnValue = false;
                }
              }
              if (39 === code && !self.rtl || 37 === code && self.rtl) {
                self.slideNext();
              }
              if (37 === code && !self.rtl || 39 === code && self.rtl) {
                self.slidePrev();
              }
            } else {
              if (!(38 !== code && 40 !== code)) {
                if (ev.preventDefault) {
                  ev.preventDefault();
                } else {
                  /** @type {boolean} */
                  ev.returnValue = false;
                }
              }
              if (40 === code) {
                self.slideNext();
              }
              if (38 === code) {
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
                if (dy < 0) {
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
         * @param {string} check
         * @param {number} t
         * @return {undefined}
         */
        function fn(check, t) {
          check = jQuery(check);
          var cur;
          var tmp;
          var s;
          /** @type {number} */
          var p = self.rtl ? -1 : 1;
          cur = check.attr("data-swiper-parallax") || "0";
          tmp = check.attr("data-swiper-parallax-x");
          s = check.attr("data-swiper-parallax-y");
          if (tmp || s) {
            tmp = tmp || "0";
            s = s || "0";
          } else {
            if (self.isHorizontal()) {
              tmp = cur;
              /** @type {string} */
              s = "0";
            } else {
              s = cur;
              /** @type {string} */
              tmp = "0";
            }
          }
          /** @type {string} */
          tmp = tmp.indexOf("%") >= 0 ? parseInt(tmp, 10) * t * p + "%" : tmp * t * p + "px";
          /** @type {string} */
          s = s.indexOf("%") >= 0 ? parseInt(s, 10) * t + "%" : s * t + "px";
          check.transform("translate3d(" + tmp + ", " + s + ",0px)");
        }
        /**
         * @param {string} type
         * @return {?}
         */
        function trim(type) {
          return 0 !== type.indexOf("on") && (type = type[0] !== type[0].toUpperCase() ? "on" + type[0].toUpperCase() + type.substring(1) : "on" + type), type;
        }
        if (!(this instanceof init)) {
          return new init(check, target);
        }
        var opts = {
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
        var temp = {};
        var i;
        for (i in target) {
          if ("object" !== merge(target[i]) || (null === target[i] || (target[i].nodeType || (target[i] === window || (target[i] === document || ("undefined" != typeof io && target[i] instanceof io || "undefined" != typeof exports && target[i] instanceof exports)))))) {
            temp[i] = target[i];
          } else {
            temp[i] = {};
            var j;
            for (j in target[i]) {
              temp[i][j] = target[i][j];
            }
          }
        }
        var p;
        for (p in opts) {
          if ("undefined" == typeof target[p]) {
            target[p] = opts[p];
          } else {
            if ("object" === merge(target[p])) {
              var pi;
              for (pi in opts[p]) {
                if ("undefined" == typeof target[p][pi]) {
                  target[p][pi] = opts[p][pi];
                }
              }
            }
          }
        }
        var self = this;
        if (self.params = target, self.originalParams = temp, self.classNames = [], "undefined" != typeof jQuery && ("undefined" != typeof io && (jQuery = io)), ("undefined" != typeof jQuery || (jQuery = "undefined" == typeof io ? window.Dom7 || (window.Zepto || fallback) : io)) && (self.$ = jQuery, self.currentBreakpoint = void 0, self.getActiveBreakpoint = function() {
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
            var i = self.params.loop && iterable.slidesPerView !== self.params.slidesPerView;
            var key;
            for (key in iterable) {
              self.params[key] = iterable[key];
            }
            self.currentBreakpoint = name;
            if (i) {
              if (self.destroyLoop) {
                self.reLoop(true);
              }
            }
          }
        }, self.params.breakpoints && self.setBreakpoint(), self.container = jQuery(check), 0 !== self.container.length)) {
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
          if (!("fade" !== self.params.effect && "flip" !== self.params.effect)) {
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
            self.paginationContainer = jQuery(self.params.pagination);
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
              self.nextButton = jQuery(self.params.nextButton);
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
              self.prevButton = jQuery(self.params.prevButton);
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
           * @param {?} path
           * @param {?} node
           * @param {string} recurring
           * @param {Function} item
           * @return {undefined}
           */
          self.loadImage = function(callback, path, node, recurring, item) {
            /**
             * @return {undefined}
             */
            function fn() {
              if (item) {
                item();
              }
            }
            var el;
            if (callback.complete && recurring) {
              fn();
            } else {
              if (path) {
                el = new window.Image;
                /** @type {function (): undefined} */
                el.onload = fn;
                /** @type {function (): undefined} */
                el.onerror = fn;
                if (node) {
                  el.srcset = node;
                }
                if (path) {
                  el.src = path;
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
            function next() {
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
              self.loadImage(self.imagesToLoad[i], self.imagesToLoad[i].currentSrc || self.imagesToLoad[i].getAttribute("src"), self.imagesToLoad[i].srcset || self.imagesToLoad[i].getAttribute("srcset"), true, next);
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
           * @param {number} recurring
           * @return {undefined}
           */
          self.pauseAutoplay = function(recurring) {
            if (!self.autoplayPaused) {
              if (self.autoplayTimeoutId) {
                clearTimeout(self.autoplayTimeoutId);
              }
              /** @type {boolean} */
              self.autoplayPaused = true;
              if (0 === recurring) {
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
            var i;
            var x = self.params.spaceBetween;
            /** @type {number} */
            var y = -self.params.slidesOffsetBefore;
            /** @type {number} */
            var bestSize = 0;
            /** @type {number} */
            var slidesPerGroup = 0;
            if ("undefined" != typeof self.size) {
              if ("string" == typeof x) {
                if (x.indexOf("%") >= 0) {
                  /** @type {number} */
                  x = parseFloat(x.replace("%", "")) / 100 * self.size;
                }
              }
              /** @type {number} */
              self.virtualSize = -x;
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
              var time;
              if (self.params.slidesPerColumn > 1) {
                time = Math.floor(self.slides.length / self.params.slidesPerColumn) === self.slides.length / self.params.slidesPerColumn ? self.slides.length : Math.ceil(self.slides.length / self.params.slidesPerColumn) * self.params.slidesPerColumn;
                if ("auto" !== self.params.slidesPerView) {
                  if ("row" === self.params.slidesPerColumnFill) {
                    /** @type {number} */
                    time = Math.max(time, self.params.slidesPerView * self.params.slidesPerColumn);
                  }
                }
              }
              var size;
              var duration = self.params.slidesPerColumn;
              /** @type {number} */
              var step = time / duration;
              /** @type {number} */
              var b = step - (self.params.slidesPerColumn * step - self.slides.length);
              /** @type {number} */
              i = 0;
              for (;i < self.slides.length;i++) {
                /** @type {number} */
                size = 0;
                var el = self.slides.eq(i);
                if (self.params.slidesPerColumn > 1) {
                  var doneKey;
                  var a;
                  var source;
                  if ("column" === self.params.slidesPerColumnFill) {
                    /** @type {number} */
                    a = Math.floor(i / duration);
                    /** @type {number} */
                    source = i - a * duration;
                    if (a > b || a === b && source === duration - 1) {
                      if (++source >= duration) {
                        /** @type {number} */
                        source = 0;
                        a++;
                      }
                    }
                    /** @type {number} */
                    doneKey = a + source * time / duration;
                    el.css({
                      "-webkit-box-ordinal-group" : doneKey,
                      "-moz-box-ordinal-group" : doneKey,
                      "-ms-flex-order" : doneKey,
                      "-webkit-order" : doneKey,
                      order : doneKey
                    });
                  } else {
                    /** @type {number} */
                    source = Math.floor(i / step);
                    /** @type {number} */
                    a = i - source * step;
                  }
                  el.css({
                    "margin-top" : 0 !== source && (self.params.spaceBetween && self.params.spaceBetween + "px")
                  }).attr("data-swiper-column", a).attr("data-swiper-row", source);
                }
                if ("none" !== el.css("display")) {
                  if ("auto" === self.params.slidesPerView) {
                    size = self.isHorizontal() ? el.outerWidth(true) : el.outerHeight(true);
                    if (self.params.roundLengths) {
                      size = read(size);
                    }
                  } else {
                    /** @type {number} */
                    size = (self.size - (self.params.slidesPerView - 1) * x) / self.params.slidesPerView;
                    if (self.params.roundLengths) {
                      size = read(size);
                    }
                    if (self.isHorizontal()) {
                      /** @type {string} */
                      self.slides[i].style.width = size + "px";
                    } else {
                      /** @type {string} */
                      self.slides[i].style.height = size + "px";
                    }
                  }
                  /** @type {number} */
                  self.slides[i].swiperSlideSize = size;
                  self.slidesSizesGrid.push(size);
                  if (self.params.centeredSlides) {
                    y = y + size / 2 + bestSize / 2 + x;
                    if (0 === i) {
                      /** @type {number} */
                      y = y - self.size / 2 - x;
                    }
                    if (Math.abs(y) < 0.001) {
                      /** @type {number} */
                      y = 0;
                    }
                    if (slidesPerGroup % self.params.slidesPerGroup === 0) {
                      self.snapGrid.push(y);
                    }
                    self.slidesGrid.push(y);
                  } else {
                    if (slidesPerGroup % self.params.slidesPerGroup === 0) {
                      self.snapGrid.push(y);
                    }
                    self.slidesGrid.push(y);
                    y = y + size + x;
                  }
                  self.virtualSize += size + x;
                  /** @type {number} */
                  bestSize = size;
                  slidesPerGroup++;
                }
              }
              self.virtualSize = Math.max(self.virtualSize, self.size) + self.params.slidesOffsetAfter;
              var tmp;
              if (self.rtl && (self.wrongRTL && (("slide" === self.params.effect || "coverflow" === self.params.effect) && self.wrapper.css({
                width : self.virtualSize + self.params.spaceBetween + "px"
              }))), self.support.flexbox && !self.params.setWrapperSize || (self.isHorizontal() ? self.wrapper.css({
                width : self.virtualSize + self.params.spaceBetween + "px"
              }) : self.wrapper.css({
                height : self.virtualSize + self.params.spaceBetween + "px"
              })), self.params.slidesPerColumn > 1 && (self.virtualSize = (size + self.params.spaceBetween) * time, self.virtualSize = Math.ceil(self.virtualSize / self.params.slidesPerColumn) - self.params.spaceBetween, self.wrapper.css({
                width : self.virtualSize + self.params.spaceBetween + "px"
              }), self.params.centeredSlides)) {
                /** @type {Array} */
                tmp = [];
                /** @type {number} */
                i = 0;
                for (;i < self.snapGrid.length;i++) {
                  if (self.snapGrid[i] < self.virtualSize + self.snapGrid[0]) {
                    tmp.push(self.snapGrid[i]);
                  }
                }
                /** @type {Array} */
                self.snapGrid = tmp;
              }
              if (!self.params.centeredSlides) {
                /** @type {Array} */
                tmp = [];
                /** @type {number} */
                i = 0;
                for (;i < self.snapGrid.length;i++) {
                  if (self.snapGrid[i] <= self.virtualSize - self.size) {
                    tmp.push(self.snapGrid[i]);
                  }
                }
                /** @type {Array} */
                self.snapGrid = tmp;
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
                      marginLeft : x + "px"
                    });
                  } else {
                    self.slides.css({
                      marginRight : x + "px"
                    });
                  }
                } else {
                  self.slides.css({
                    marginBottom : x + "px"
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
              var t = -e;
              if (self.rtl) {
                /** @type {number} */
                t = e;
              }
              self.slides.removeClass(self.params.slideVisibleClass);
              /** @type {number} */
              var i = 0;
              for (;i < self.slides.length;i++) {
                var c = self.slides[i];
                /** @type {number} */
                var red = (t - c.swiperSlideOffset) / (c.swiperSlideSize + self.params.spaceBetween);
                if (self.params.watchSlidesVisibility) {
                  /** @type {number} */
                  var j = -(t - c.swiperSlideOffset);
                  var index = j + self.slidesSizesGrid[i];
                  /** @type {boolean} */
                  var a = j >= 0 && j < self.size || (index > 0 && index <= self.size || j <= 0 && index >= self.size);
                  if (a) {
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
            if (index < 0 || "undefined" == typeof index) {
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
              var body = self.params.loop ? Math.ceil((self.slides.length - 2 * self.loopedSlides) / self.params.slidesPerGroup) : self.snapGrid.length;
              if (self.params.loop ? (i = Math.ceil((self.activeIndex - self.loopedSlides) / self.params.slidesPerGroup), i > self.slides.length - 1 - 2 * self.loopedSlides && (i -= self.slides.length - 2 * self.loopedSlides), i > body - 1 && (i -= body), i < 0 && ("bullets" !== self.params.paginationType && (i = body + i))) : i = "undefined" != typeof self.snapIndex ? self.snapIndex : self.activeIndex || 0, "bullets" === self.params.paginationType && (self.bullets && (self.bullets.length > 0 && 
              (self.bullets.removeClass(self.params.bulletActiveClass), self.paginationContainer.length > 1 ? self.bullets.each(function() {
                if (jQuery(this).index() === i) {
                  jQuery(this).addClass(self.params.bulletActiveClass);
                }
              }) : self.bullets.eq(i).addClass(self.params.bulletActiveClass)))), "fraction" === self.params.paginationType && (self.paginationContainer.find("." + self.params.paginationCurrentClass).text(i + 1), self.paginationContainer.find("." + self.params.paginationTotalClass).text(body)), "progress" === self.params.paginationType) {
                /** @type {number} */
                var fn = (i + 1) / body;
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
                  self.paginationContainer.html(self.params.paginationCustomRender(self, i + 1, body));
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
              var val = "";
              if ("bullets" === self.params.paginationType) {
                var _len = self.params.loop ? Math.ceil((self.slides.length - 2 * self.loopedSlides) / self.params.slidesPerGroup) : self.snapGrid.length;
                /** @type {number} */
                var _i = 0;
                for (;_i < _len;_i++) {
                  val += self.params.paginationBulletRender ? self.params.paginationBulletRender(_i, self.params.bulletClass) : "<" + self.params.paginationElement + ' class="' + self.params.bulletClass + '"></' + self.params.paginationElement + ">";
                }
                self.paginationContainer.html(val);
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
                val = self.params.paginationFractionRender ? self.params.paginationFractionRender(self, self.params.paginationCurrentClass, self.params.paginationTotalClass) : '<span class="' + self.params.paginationCurrentClass + '"></span> / <span class="' + self.params.paginationTotalClass + '"></span>';
                self.paginationContainer.html(val);
              }
              if ("progress" === self.params.paginationType) {
                val = self.params.paginationProgressRender ? self.params.paginationProgressRender(self, self.params.paginationProgressbarClass) : '<span class="' + self.params.paginationProgressbarClass + '"></span>';
                self.paginationContainer.html(val);
              }
              if ("custom" !== self.params.paginationType) {
                self.emit("onPaginationRendered", self, self.paginationContainer[0]);
              }
            }
          };
          /**
           * @param {boolean} dataAndEvents
           * @return {undefined}
           */
          self.update = function(dataAndEvents) {
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
            if (self.updateContainerSize(), self.updateSlidesSize(), self.updateProgress(), self.updatePagination(), self.updateClasses(), self.params.scrollbar && (self.scrollbar && self.scrollbar.set()), dataAndEvents) {
              var i;
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
                i = ("auto" === self.params.slidesPerView || self.params.slidesPerView > 1) && (self.isEnd && !self.params.centeredSlides) ? self.slideTo(self.slides.length - 1, 0, false, true) : self.slideTo(self.activeIndex, 0, false, true);
                if (!i) {
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
           * @param {boolean} dataAndEvents
           * @return {undefined}
           */
          self.onResize = function(dataAndEvents) {
            if (self.params.breakpoints) {
              self.setBreakpoint();
            }
            var allowSwipeToPrev = self.params.allowSwipeToPrev;
            var allowSwipeToNext = self.params.allowSwipeToNext;
            /** @type {boolean} */
            self.params.allowSwipeToPrev = self.params.allowSwipeToNext = true;
            self.updateContainerSize();
            self.updateSlidesSize();
            if ("auto" === self.params.slidesPerView || (self.params.freeMode || dataAndEvents)) {
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
            var n = false;
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
              n = ("auto" === self.params.slidesPerView || self.params.slidesPerView > 1) && (self.isEnd && !self.params.centeredSlides) ? self.slideTo(self.slides.length - 1, 0, false, true) : self.slideTo(self.activeIndex, 0, false, true);
            }
            if (self.params.lazyLoading) {
              if (!n) {
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
            var express = "container" === self.params.touchEventsTarget ? self.container[0] : self.wrapper[0];
            var node = self.support.touch ? express : document;
            /** @type {boolean} */
            var c = !!self.params.nested;
            if (self.browser.ie) {
              express[method](self.touchEvents.start, self.onTouchStart, false);
              node[method](self.touchEvents.move, self.onTouchMove, c);
              node[method](self.touchEvents.end, self.onTouchEnd, false);
            } else {
              if (self.support.touch) {
                express[method](self.touchEvents.start, self.onTouchStart, false);
                express[method](self.touchEvents.move, self.onTouchMove, c);
                express[method](self.touchEvents.end, self.onTouchEnd, false);
              }
              if (!!target.simulateTouch) {
                if (!self.device.ios) {
                  if (!self.device.android) {
                    express[method]("mousedown", self.onTouchStart, false);
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
              express[method]("click", self.preventClicks, true);
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
            if (!(self.isEnd && !self.params.loop)) {
              self.slideNext();
            }
          };
          /**
           * @param {Object} types
           * @return {undefined}
           */
          self.onClickPrev = function(types) {
            types.preventDefault();
            if (!(self.isBeginning && !self.params.loop)) {
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
            var i = jQuery(this).index() * self.params.slidesPerGroup;
            if (self.params.loop) {
              i += self.loopedSlides;
            }
            self.slideTo(i);
          };
          /**
           * @param {?} selector
           * @return {?}
           */
          self.updateClickedSlide = function(selector) {
            var elem = select(selector, "." + self.params.slideClass);
            /** @type {boolean} */
            var className = false;
            if (elem) {
              /** @type {number} */
              var i = 0;
              for (;i < self.slides.length;i++) {
                if (self.slides[i] === elem) {
                  /** @type {boolean} */
                  className = true;
                }
              }
            }
            if (!elem || !className) {
              return self.clickedSlide = void 0, void(self.clickedIndex = void 0);
            }
            if (self.clickedSlide = elem, self.clickedIndex = jQuery(elem).index(), self.params.slideToClickedSlide && (void 0 !== self.clickedIndex && self.clickedIndex !== self.activeIndex)) {
              var data_swiper_slide_index;
              var b = self.clickedIndex;
              if (self.params.loop) {
                if (self.animating) {
                  return;
                }
                data_swiper_slide_index = jQuery(self.clickedSlide).attr("data-swiper-slide-index");
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
          var useCnvt;
          var hasCnvt;
          var callback;
          var time;
          var factory;
          var text;
          var _;
          var I;
          var timer;
          var L;
          /** @type {string} */
          var until = "input, select, textarea, button";
          /** @type {number} */
          var previous = Date.now();
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
          if (self.onTouchStart = function(e) {
            if (e.originalEvent && (e = e.originalEvent), mousemove = "touchstart" === e.type, mousemove || (!("which" in e) || 3 !== e.which)) {
              if (self.params.noSwiping && select(e, "." + self.params.noSwipingClass)) {
                return void(self.allowClick = true);
              }
              if (!self.params.swipeHandler || select(e, self.params.swipeHandler)) {
                var startX = self.touches.currentX = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX;
                var startY = self.touches.currentY = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY;
                if (!(self.device.ios && (self.params.iOSEdgeSwipeDetection && startX <= self.params.iOSEdgeSwipeThreshold))) {
                  if (useCnvt = true, hasCnvt = false, callback = true, factory = void 0, server = void 0, self.touches.startX = startX, self.touches.startY = startY, time = Date.now(), self.allowClick = true, self.updateContainerSize(), self.swipeDirection = void 0, self.params.threshold > 0 && (I = false), "touchstart" !== e.type) {
                    /** @type {boolean} */
                    var n = true;
                    if (jQuery(e.target).is(until)) {
                      /** @type {boolean} */
                      n = false;
                    }
                    if (document.activeElement) {
                      if (jQuery(document.activeElement).is(until)) {
                        document.activeElement.blur();
                      }
                    }
                    if (n) {
                      e.preventDefault();
                    }
                  }
                  self.emit("onTouchStart", self, e);
                }
              }
            }
          }, self.onTouchMove = function(e) {
            if (e.originalEvent && (e = e.originalEvent), !mousemove || "mousemove" !== e.type) {
              if (e.preventedByNestedSwiper) {
                return self.touches.startX = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, void(self.touches.startY = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY);
              }
              if (self.params.onlyExternal) {
                return self.allowClick = false, void(useCnvt && (self.touches.startX = self.touches.currentX = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, self.touches.startY = self.touches.currentY = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, time = Date.now()));
              }
              if (mousemove && (document.activeElement && (e.target === document.activeElement && jQuery(e.target).is(until)))) {
                return hasCnvt = true, void(self.allowClick = false);
              }
              if (callback && self.emit("onTouchMove", self, e), !(e.targetTouches && e.targetTouches.length > 1)) {
                if (self.touches.currentX = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, self.touches.currentY = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, "undefined" == typeof factory) {
                  /** @type {number} */
                  var touchAngle = 180 * Math.atan2(Math.abs(self.touches.currentY - self.touches.startY), Math.abs(self.touches.currentX - self.touches.startX)) / Math.PI;
                  /** @type {boolean} */
                  factory = self.isHorizontal() ? touchAngle > self.params.touchAngle : 90 - touchAngle > self.params.touchAngle;
                }
                if (factory && self.emit("onTouchMoveOpposite", self, e), "undefined" == typeof server && (self.browser.ieTouch && (self.touches.currentX === self.touches.startX && self.touches.currentY === self.touches.startY || (server = true))), useCnvt) {
                  if (factory) {
                    return void(useCnvt = false);
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
                    if (!hasCnvt) {
                      if (target.loop) {
                        self.fixLoop();
                      }
                      _ = self.getWrapperTranslate();
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
                      L = false;
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
                    hasCnvt = true;
                    /** @type {number} */
                    var l = self.touches.diff = self.isHorizontal() ? self.touches.currentX - self.touches.startX : self.touches.currentY - self.touches.startY;
                    l *= self.params.touchRatio;
                    if (self.rtl) {
                      /** @type {number} */
                      l = -l;
                    }
                    /** @type {string} */
                    self.swipeDirection = l > 0 ? "prev" : "next";
                    text = l + _;
                    /** @type {boolean} */
                    var n = true;
                    if (l > 0 && text > self.minTranslate() ? (n = false, self.params.resistance && (text = self.minTranslate() - 1 + Math.pow(-self.minTranslate() + _ + l, self.params.resistanceRatio))) : l < 0 && (text < self.maxTranslate() && (n = false, self.params.resistance && (text = self.maxTranslate() + 1 - Math.pow(self.maxTranslate() - _ - l, self.params.resistanceRatio)))), n && (e.preventedByNestedSwiper = true), !self.params.allowSwipeToNext && ("next" === self.swipeDirection && (text < 
                    _ && (text = _))), !self.params.allowSwipeToPrev && ("prev" === self.swipeDirection && (text > _ && (text = _))), self.params.followFinger) {
                      if (self.params.threshold > 0) {
                        if (!(Math.abs(l) > self.params.threshold || I)) {
                          return void(text = _);
                        }
                        if (!I) {
                          return I = true, self.touches.startX = self.touches.currentX, self.touches.startY = self.touches.currentY, text = _, void(self.touches.diff = self.isHorizontal() ? self.touches.currentX - self.touches.startX : self.touches.currentY - self.touches.startY);
                        }
                      }
                      if (self.params.freeMode || self.params.watchSlidesProgress) {
                        self.updateActiveIndex();
                      }
                      if (self.params.freeMode) {
                        if (0 === sheets.length) {
                          sheets.push({
                            position : self.touches[self.isHorizontal() ? "startX" : "startY"],
                            time : time
                          });
                        }
                        sheets.push({
                          position : self.touches[self.isHorizontal() ? "currentX" : "currentY"],
                          time : (new window.Date).getTime()
                        });
                      }
                      self.updateProgress(text);
                      self.setWrapperTranslate(text);
                    }
                  }
                }
              }
            }
          }, self.onTouchEnd = function(e) {
            if (e.originalEvent && (e = e.originalEvent), callback && self.emit("onTouchEnd", self, e), callback = false, useCnvt) {
              if (self.params.grabCursor) {
                if (hasCnvt) {
                  if (useCnvt) {
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
              var now = Date.now();
              /** @type {number} */
              var dt = now - time;
              if (self.allowClick && (self.updateClickedSlide(e), self.emit("onTap", self, e), dt < 300 && (now - previous > 300 && (timer && clearTimeout(timer), timer = setTimeout(function() {
                if (self) {
                  if (self.params.paginationHide) {
                    if (self.paginationContainer.length > 0) {
                      if (!jQuery(e.target).hasClass(self.params.bulletClass)) {
                        self.paginationContainer.toggleClass(self.params.paginationHiddenClass);
                      }
                    }
                  }
                  self.emit("onClick", self, e);
                }
              }, 300))), dt < 300 && (now - previous < 300 && (timer && clearTimeout(timer), self.emit("onDoubleTap", self, e)))), previous = Date.now(), setTimeout(function() {
                if (self) {
                  /** @type {boolean} */
                  self.allowClick = true;
                }
              }, 0), !useCnvt || (!hasCnvt || (!self.swipeDirection || (0 === self.touches.diff || text === _)))) {
                return void(useCnvt = hasCnvt = false);
              }
              /** @type {boolean} */
              useCnvt = hasCnvt = false;
              var red;
              if (red = self.params.followFinger ? self.rtl ? self.translate : -self.translate : -text, self.params.freeMode) {
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
                      L = true;
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
                        L = true;
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
                        if (L) {
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
                return void((!self.params.freeModeMomentum || dt >= self.params.longSwipesMs) && (self.updateProgress(), self.updateActiveIndex()));
              }
              var k;
              /** @type {number} */
              var index = 0;
              var delta = self.slidesSizesGrid[0];
              /** @type {number} */
              k = 0;
              for (;k < self.slidesGrid.length;k += self.params.slidesPerGroup) {
                if ("undefined" != typeof self.slidesGrid[k + self.params.slidesPerGroup]) {
                  if (red >= self.slidesGrid[k]) {
                    if (red < self.slidesGrid[k + self.params.slidesPerGroup]) {
                      index = k;
                      /** @type {number} */
                      delta = self.slidesGrid[k + self.params.slidesPerGroup] - self.slidesGrid[k];
                    }
                  }
                } else {
                  if (red >= self.slidesGrid[k]) {
                    index = k;
                    /** @type {number} */
                    delta = self.slidesGrid[self.slidesGrid.length - 1] - self.slidesGrid[self.slidesGrid.length - 2];
                  }
                }
              }
              /** @type {number} */
              var br = (red - self.slidesGrid[index]) / delta;
              if (dt > self.params.longSwipesMs) {
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
          }, self._slideTo = function(index, recurring) {
            return self.slideTo(index, recurring, true, true);
          }, self.slideTo = function(index, recurring, mayParseLabeledStatementInstead, dataAndEvents) {
            if ("undefined" == typeof mayParseLabeledStatementInstead) {
              /** @type {boolean} */
              mayParseLabeledStatementInstead = true;
            }
            if ("undefined" == typeof index) {
              /** @type {number} */
              index = 0;
            }
            if (index < 0) {
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
                  self.pauseAutoplay(recurring);
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
            return!(!self.params.allowSwipeToNext && (x < self.translate && x < self.minTranslate())) && (!(!self.params.allowSwipeToPrev && (x > self.translate && (x > self.maxTranslate() && (self.activeIndex || 0) !== index))) && ("undefined" == typeof recurring && (recurring = self.params.speed), self.previousIndex = self.activeIndex || 0, self.activeIndex = index, self.rtl && -x === self.translate || !self.rtl && x === self.translate ? (self.params.autoHeight && self.updateAutoHeight(), self.updateClasses(), 
            "slide" !== self.params.effect && self.setWrapperTranslate(x), false) : (self.updateClasses(), self.onTransitionStart(mayParseLabeledStatementInstead), 0 === recurring ? (self.setWrapperTranslate(x), self.setWrapperTransition(0), self.onTransitionEnd(mayParseLabeledStatementInstead)) : (self.setWrapperTranslate(x), self.setWrapperTransition(recurring), self.animating || (self.animating = true, self.wrapper.transitionEnd(function() {
              if (self) {
                self.onTransitionEnd(mayParseLabeledStatementInstead);
              }
            }))), true)));
          }, self.onTransitionStart = function(e) {
            if ("undefined" == typeof e) {
              /** @type {boolean} */
              e = true;
            }
            if (self.params.autoHeight) {
              self.updateAutoHeight();
            }
            if (self.lazy) {
              self.lazy.onTransitionStart();
            }
            if (e) {
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
          }, self.onTransitionEnd = function(e) {
            /** @type {boolean} */
            self.animating = false;
            self.setWrapperTransition(0);
            if ("undefined" == typeof e) {
              /** @type {boolean} */
              e = true;
            }
            if (self.lazy) {
              self.lazy.onTransitionEnd();
            }
            if (e) {
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
          }, self.slideNext = function(allowIntersection, recurring, dataAndEvents) {
            if (self.params.loop) {
              if (self.animating) {
                return false;
              }
              self.fixLoop();
              self.container[0].clientLeft;
              return self.slideTo(self.activeIndex + self.params.slidesPerGroup, recurring, allowIntersection, dataAndEvents);
            }
            return self.slideTo(self.activeIndex + self.params.slidesPerGroup, recurring, allowIntersection, dataAndEvents);
          }, self._slideNext = function(recurring) {
            return self.slideNext(true, recurring, true);
          }, self.slidePrev = function(allowIntersection, recurring, dataAndEvents) {
            if (self.params.loop) {
              if (self.animating) {
                return false;
              }
              self.fixLoop();
              self.container[0].clientLeft;
              return self.slideTo(self.activeIndex - 1, recurring, allowIntersection, dataAndEvents);
            }
            return self.slideTo(self.activeIndex - 1, recurring, allowIntersection, dataAndEvents);
          }, self._slidePrev = function(recurring) {
            return self.slidePrev(true, recurring, true);
          }, self.slideReset = function(millis, recurring, dataAndEvents) {
            return self.slideTo(self.activeIndex, recurring, millis);
          }, self.setWrapperTransition = function(optgroup, isXML) {
            self.wrapper.transition(optgroup);
            if ("slide" !== self.params.effect) {
              if (self.effects[self.params.effect]) {
                self.effects[self.params.effect].setTransition(optgroup);
              }
            }
            if (self.params.parallax) {
              if (self.parallax) {
                self.parallax.setTransition(optgroup);
              }
            }
            if (self.params.scrollbar) {
              if (self.scrollbar) {
                self.scrollbar.setTransition(optgroup);
              }
            }
            if (self.params.control) {
              if (self.controller) {
                self.controller.setTransition(optgroup, isXML);
              }
            }
            self.emit("onSetTransition", self, optgroup);
          }, self.setWrapperTranslate = function(data, recurring, x) {
            /** @type {number} */
            var cookie = 0;
            /** @type {number} */
            var css = 0;
            /** @type {number} */
            var r = 0;
            if (self.isHorizontal()) {
              cookie = self.rtl ? -data : data;
            } else {
              /** @type {number} */
              css = data;
            }
            if (self.params.roundLengths) {
              cookie = read(cookie);
              css = read(css);
            }
            if (!self.params.virtualTranslate) {
              if (self.support.transforms3d) {
                self.wrapper.transform("translate3d(" + cookie + "px, " + css + "px, " + r + "px)");
              } else {
                self.wrapper.transform("translate(" + cookie + "px, " + css + "px)");
              }
            }
            self.translate = self.isHorizontal() ? cookie : css;
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
            var args = self.wrapper.children("." + self.params.slideClass);
            if (!("auto" !== self.params.slidesPerView)) {
              if (!self.params.loopedSlides) {
                self.params.loopedSlides = args.length;
              }
            }
            /** @type {number} */
            self.loopedSlides = parseInt(self.params.loopedSlides || self.params.slidesPerView, 10);
            self.loopedSlides = self.loopedSlides + self.params.loopAdditionalSlides;
            if (self.loopedSlides > args.length) {
              self.loopedSlides = args.length;
            }
            var i;
            /** @type {Array} */
            var arr = [];
            /** @type {Array} */
            var codeSegments = [];
            args.each(function(x, chunk) {
              var $p = jQuery(this);
              if (x < self.loopedSlides) {
                codeSegments.push(chunk);
              }
              if (x < args.length) {
                if (x >= args.length - self.loopedSlides) {
                  arr.push(chunk);
                }
              }
              $p.attr("data-swiper-slide-index", x);
            });
            /** @type {number} */
            i = 0;
            for (;i < codeSegments.length;i++) {
              self.wrapper.append(jQuery(codeSegments[i].cloneNode(true)).addClass(self.params.slideDuplicateClass));
            }
            /** @type {number} */
            i = arr.length - 1;
            for (;i >= 0;i--) {
              self.wrapper.prepend(jQuery(arr[i].cloneNode(true)).addClass(self.params.slideDuplicateClass));
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
          }, self.appendSlide = function(row) {
            if (self.params.loop && self.destroyLoop(), "object" === ("undefined" == typeof row ? "undefined" : merge(row)) && row.length) {
              /** @type {number} */
              var j = 0;
              for (;j < row.length;j++) {
                if (row[j]) {
                  self.wrapper.append(row[j]);
                }
              }
            } else {
              self.wrapper.append(row);
            }
            if (self.params.loop) {
              self.createLoop();
            }
            if (!(self.params.observer && self.support.observer)) {
              self.update(true);
            }
          }, self.prependSlide = function(el) {
            if (self.params.loop) {
              self.destroyLoop();
            }
            var e = self.activeIndex + 1;
            if ("object" === ("undefined" == typeof el ? "undefined" : merge(el)) && el.length) {
              /** @type {number} */
              var i = 0;
              for (;i < el.length;i++) {
                if (el[i]) {
                  self.wrapper.prepend(el[i]);
                }
              }
              e = self.activeIndex + el.length;
            } else {
              self.wrapper.prepend(el);
            }
            if (self.params.loop) {
              self.createLoop();
            }
            if (!(self.params.observer && self.support.observer)) {
              self.update(true);
            }
            self.slideTo(e, 0, false);
          }, self.removeSlide = function(args) {
            if (self.params.loop) {
              self.destroyLoop();
              self.slides = self.wrapper.children("." + self.params.slideClass);
            }
            var i;
            var index = self.activeIndex;
            if ("object" === ("undefined" == typeof args ? "undefined" : merge(args)) && args.length) {
              /** @type {number} */
              var l = 0;
              for (;l < args.length;l++) {
                i = args[l];
                if (self.slides[i]) {
                  self.slides.eq(i).remove();
                }
                if (i < index) {
                  index--;
                }
              }
              /** @type {number} */
              index = Math.max(index, 0);
            } else {
              /** @type {(Array|string)} */
              i = args;
              if (self.slides[i]) {
                self.slides.eq(i).remove();
              }
              if (i < index) {
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
            var details = [];
            /** @type {number} */
            var modId = 0;
            for (;modId < self.slides.length;modId++) {
              details.push(modId);
            }
            self.removeSlide(details);
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
               * @param {string} optgroup
               * @return {undefined}
               */
              setTransition : function(optgroup) {
                if (self.slides.transition(optgroup), self.params.virtualTranslate && 0 !== optgroup) {
                  /** @type {boolean} */
                  var e = false;
                  self.slides.transitionEnd(function() {
                    if (!e && self) {
                      /** @type {boolean} */
                      e = true;
                      /** @type {boolean} */
                      self.animating = false;
                      /** @type {Array} */
                      var events = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"];
                      /** @type {number} */
                      var i = 0;
                      for (;i < events.length;i++) {
                        self.wrapper.trigger(events[i]);
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
                  var Infinity = container[0].swiperSlideOffset;
                  /** @type {number} */
                  var destination = -180 * value;
                  /** @type {number} */
                  var result = destination;
                  /** @type {number} */
                  var a = 0;
                  /** @type {number} */
                  var start = -Infinity;
                  /** @type {number} */
                  var firingStart = 0;
                  if (self.isHorizontal() ? self.rtl && (result = -result) : (firingStart = start, start = 0, a = -result, result = 0), container[0].style.zIndex = -Math.abs(Math.round(value)) + self.slides.length, self.params.flip.slideShadows) {
                    var content = self.isHorizontal() ? container.find(".swiper-slide-shadow-left") : container.find(".swiper-slide-shadow-top");
                    var input = self.isHorizontal() ? container.find(".swiper-slide-shadow-right") : container.find(".swiper-slide-shadow-bottom");
                    if (0 === content.length) {
                      content = jQuery('<div class="swiper-slide-shadow-' + (self.isHorizontal() ? "left" : "top") + '"></div>');
                      container.append(content);
                    }
                    if (0 === input.length) {
                      input = jQuery('<div class="swiper-slide-shadow-' + (self.isHorizontal() ? "right" : "bottom") + '"></div>');
                      container.append(input);
                    }
                    if (content.length) {
                      /** @type {number} */
                      content[0].style.opacity = Math.max(-value, 0);
                    }
                    if (input.length) {
                      /** @type {number} */
                      input[0].style.opacity = Math.max(value, 0);
                    }
                  }
                  container.transform("translate3d(" + start + "px, " + firingStart + "px, 0px) rotateX(" + a + "deg) rotateY(" + result + "deg)");
                }
              },
              /**
               * @param {string} optgroup
               * @return {undefined}
               */
              setTransition : function(optgroup) {
                if (self.slides.transition(optgroup).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(optgroup), self.params.virtualTranslate && 0 !== optgroup) {
                  /** @type {boolean} */
                  var e = false;
                  self.slides.eq(self.activeIndex).transitionEnd(function() {
                    if (!e && (self && jQuery(this).hasClass(self.params.slideActiveClass))) {
                      /** @type {boolean} */
                      e = true;
                      /** @type {boolean} */
                      self.animating = false;
                      /** @type {Array} */
                      var events = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"];
                      /** @type {number} */
                      var i = 0;
                      for (;i < events.length;i++) {
                        self.wrapper.trigger(events[i]);
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
                var content;
                /** @type {number} */
                var oDelta = 0;
                if (self.params.cube.shadow) {
                  if (self.isHorizontal()) {
                    content = self.wrapper.find(".swiper-cube-shadow");
                    if (0 === content.length) {
                      content = jQuery('<div class="swiper-cube-shadow"></div>');
                      self.wrapper.append(content);
                    }
                    content.css({
                      height : self.width + "px"
                    });
                  } else {
                    content = self.container.find(".swiper-cube-shadow");
                    if (0 === content.length) {
                      content = jQuery('<div class="swiper-cube-shadow"></div>');
                      self.container.append(content);
                    }
                  }
                }
                /** @type {number} */
                var index = 0;
                for (;index < self.slides.length;index++) {
                  var parent = self.slides.eq(index);
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
                  var value = Math.max(Math.min(parent[0].progress, 1), -1);
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
                  var optgroup = "rotateX(" + (self.isHorizontal() ? 0 : -angle) + "deg) rotateY(" + (self.isHorizontal() ? angle : 0) + "deg) translate3d(" + a + "px, " + waitMsg + "px, " + width + "px)";
                  if (value <= 1 && (value > -1 && (oDelta = 90 * index + 90 * value, self.rtl && (oDelta = 90 * -index - 90 * value))), parent.transform(optgroup), self.params.cube.slideShadows) {
                    var input = self.isHorizontal() ? parent.find(".swiper-slide-shadow-left") : parent.find(".swiper-slide-shadow-top");
                    var span = self.isHorizontal() ? parent.find(".swiper-slide-shadow-right") : parent.find(".swiper-slide-shadow-bottom");
                    if (0 === input.length) {
                      input = jQuery('<div class="swiper-slide-shadow-' + (self.isHorizontal() ? "left" : "top") + '"></div>');
                      parent.append(input);
                    }
                    if (0 === span.length) {
                      span = jQuery('<div class="swiper-slide-shadow-' + (self.isHorizontal() ? "right" : "bottom") + '"></div>');
                      parent.append(span);
                    }
                    if (input.length) {
                      /** @type {number} */
                      input[0].style.opacity = Math.max(-value, 0);
                    }
                    if (span.length) {
                      /** @type {number} */
                      span[0].style.opacity = Math.max(value, 0);
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
                    content.transform("translate3d(0px, " + (self.width / 2 + self.params.cube.shadowOffset) + "px, " + -self.width / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + self.params.cube.shadowScale + ")");
                  } else {
                    /** @type {number} */
                    var now = Math.abs(oDelta) - 90 * Math.floor(Math.abs(oDelta) / 90);
                    /** @type {number} */
                    var time = 1.5 - (Math.sin(2 * now * Math.PI / 360) / 2 + Math.cos(2 * now * Math.PI / 360) / 2);
                    var shadowScale = self.params.cube.shadowScale;
                    /** @type {number} */
                    var speed = self.params.cube.shadowScale / time;
                    var shadowOffset = self.params.cube.shadowOffset;
                    content.transform("scale3d(" + shadowScale + ", 1, " + speed + ") translate3d(0px, " + (self.height / 2 + shadowOffset) + "px, " + -self.height / 2 / speed + "px) rotateX(-90deg)");
                  }
                }
                /** @type {number} */
                var b = self.isSafari || self.isUiWebView ? -self.size / 2 : 0;
                self.wrapper.transform("translate3d(0px,0," + b + "px) rotateX(" + (self.isHorizontal() ? 0 : oDelta) + "deg) rotateY(" + (self.isHorizontal() ? -oDelta : 0) + "deg)");
              },
              /**
               * @param {string} optgroup
               * @return {undefined}
               */
              setTransition : function(optgroup) {
                self.slides.transition(optgroup).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(optgroup);
                if (self.params.cube.shadow) {
                  if (!self.isHorizontal()) {
                    self.container.find(".swiper-cube-shadow").transition(optgroup);
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
                var valuesLen = self.slides.length;
                for (;i < valuesLen;i++) {
                  var element = self.slides.eq(i);
                  var slideSize = self.slidesSizesGrid[i];
                  var slideOffset = element[0].swiperSlideOffset;
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
                  var optgroup = "translate3d(" + ot + "px," + distX + "px," + distY + "px)  rotateX(" + marginTop + "deg) rotateY(" + oDelta + "deg)";
                  if (element.transform(optgroup), element[0].style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1, self.params.coverflow.slideShadows) {
                    var input = self.isHorizontal() ? element.find(".swiper-slide-shadow-left") : element.find(".swiper-slide-shadow-top");
                    var content = self.isHorizontal() ? element.find(".swiper-slide-shadow-right") : element.find(".swiper-slide-shadow-bottom");
                    if (0 === input.length) {
                      input = jQuery('<div class="swiper-slide-shadow-' + (self.isHorizontal() ? "left" : "top") + '"></div>');
                      element.append(input);
                    }
                    if (0 === content.length) {
                      content = jQuery('<div class="swiper-slide-shadow-' + (self.isHorizontal() ? "right" : "bottom") + '"></div>');
                      element.append(content);
                    }
                    if (input.length) {
                      /** @type {number} */
                      input[0].style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
                    }
                    if (content.length) {
                      /** @type {number} */
                      content[0].style.opacity = -offsetMultiplier > 0 ? -offsetMultiplier : 0;
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
               * @param {string} optgroup
               * @return {undefined}
               */
              setTransition : function(optgroup) {
                self.slides.transition(optgroup).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(optgroup);
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
                    var element = jQuery(this);
                    element.addClass("swiper-lazy-loading");
                    var edit = element.attr("data-background");
                    var source = element.attr("data-src");
                    var from = element.attr("data-srcset");
                    self.loadImage(element[0], source || edit, from, false, function() {
                      if (edit ? (element.css("background-image", 'url("' + edit + '")'), element.removeAttr("data-background")) : (from && (element.attr("srcset", from), element.removeAttr("data-srcset")), source && (element.attr("src", source), element.removeAttr("data-src"))), element.addClass("swiper-lazy-loaded").removeClass("swiper-lazy-loading"), m.find(".swiper-lazy-preloader, .preloader").remove(), self.params.loop && recurring) {
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
                  self.lazy.loadImageInSlide(jQuery(this).index());
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
                  var bottom = self.params.lazyLoadingInPrevNextAmount;
                  var val = self.params.slidesPerView;
                  /** @type {number} */
                  var padLength = Math.min(self.activeIndex + val + Math.max(bottom, val), self.slides.length);
                  /** @type {number} */
                  var mediaBlockCount = Math.max(self.activeIndex - Math.max(val, bottom), 0);
                  i = self.activeIndex + self.params.slidesPerView;
                  for (;i < padLength;i++) {
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
              var i = self.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX || e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY || e.clientY;
              /** @type {number} */
              var x = i - req.track.offset()[self.isHorizontal() ? "left" : "top"] - req.dragSize / 2;
              /** @type {number} */
              var minX = -self.minTranslate() * req.moveDivider;
              /** @type {number} */
              var chartWidth = -self.maxTranslate() * req.moveDivider;
              if (x < minX) {
                /** @type {number} */
                x = minX;
              } else {
                if (x > chartWidth) {
                  /** @type {number} */
                  x = chartWidth;
                }
              }
              /** @type {number} */
              x = -x / req.moveDivider;
              self.updateProgress(x);
              self.setWrapperTranslate(x, true);
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
              var ol = self.support.touch ? item.track : document;
              jQuery(item.track).on(self.touchEvents.start, item.dragStart);
              jQuery(ol).on(self.touchEvents.move, item.dragMove);
              jQuery(ol).on(self.touchEvents.end, item.dragEnd);
            },
            /**
             * @return {undefined}
             */
            disableDraggable : function() {
              var item = self.scrollbar;
              var ol = self.support.touch ? item.track : document;
              jQuery(item.track).off(self.touchEvents.start, item.dragStart);
              jQuery(ol).off(self.touchEvents.move, item.dragMove);
              jQuery(ol).off(self.touchEvents.end, item.dragEnd);
            },
            /**
             * @return {undefined}
             */
            set : function() {
              if (self.params.scrollbar) {
                var data = self.scrollbar;
                data.track = jQuery(self.params.scrollbar);
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
                  data.drag = jQuery('<div class="swiper-scrollbar-drag"></div>');
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
                  if (i < 0) {
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
             * @param {string} optgroup
             * @return {undefined}
             */
            setTransition : function(optgroup) {
              if (self.params.scrollbar) {
                self.scrollbar.drag.transition(optgroup);
              }
            }
          }, self.controller = {
            /**
             * @param {?} x1
             * @param {number} yp
             * @return {undefined}
             */
            LinearSpline : function(x1, yp) {
              this.x = x1;
              /** @type {number} */
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
                var max;
                var min;
                var mid;
                return function(worlds, dataAndEvents) {
                  /** @type {number} */
                  min = -1;
                  max = worlds.length;
                  for (;max - min > 1;) {
                    if (worlds[mid = max + min >> 1] <= dataAndEvents) {
                      /** @type {number} */
                      min = mid;
                    } else {
                      /** @type {number} */
                      max = mid;
                    }
                  }
                  return max;
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
              var copy = self.params.control;
              if (self.isArray(copy)) {
                /** @type {number} */
                var i = 0;
                for (;i < copy.length;i++) {
                  if (copy[i] !== x) {
                    if (copy[i] instanceof init) {
                      create(copy[i]);
                    }
                  }
                }
              } else {
                if (copy instanceof init) {
                  if (x !== copy) {
                    create(copy);
                  }
                }
              }
            },
            /**
             * @param {boolean} name
             * @param {?} value
             * @return {undefined}
             */
            setTransition : function(name, value) {
              /**
               * @param {Object} obj
               * @return {undefined}
               */
              function func(obj) {
                obj.setWrapperTransition(name, self);
                if (0 !== name) {
                  obj.onTransitionStart();
                  obj.wrapper.transitionEnd(function() {
                    if (array) {
                      if (obj.params.loop) {
                        if ("slide" === self.params.controlBy) {
                          obj.fixLoop();
                        }
                      }
                      obj.onTransitionEnd();
                    }
                  });
                }
              }
              var i;
              var array = self.params.control;
              if (self.isArray(array)) {
                /** @type {number} */
                i = 0;
                for (;i < array.length;i++) {
                  if (array[i] !== value) {
                    if (array[i] instanceof init) {
                      func(array[i]);
                    }
                  }
                }
              } else {
                if (array instanceof init) {
                  if (value !== array) {
                    func(array);
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
                  var recurring = 0;
                  /** @type {number} */
                  var idx = 0;
                  var idxEnd = self.slides.length;
                  for (;idx < idxEnd;idx++) {
                    var selected = self.slides.eq(idx);
                    var value = selected.attr("data-hash");
                    if (value === target && !selected.hasClass(self.params.slideDuplicateClass)) {
                      var e = selected.index();
                      self.slideTo(e, recurring, self.params.runCallbacksOnInit, true);
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
            jQuery(document).off("keydown", listener);
          }, self.enableKeyboardControl = function() {
            /** @type {boolean} */
            self.params.keyboardControl = true;
            jQuery(document).on("keydown", listener);
          }, self.mousewheel = {
            event : false,
            lastScrollTime : (new window.Date).getTime()
          }, self.params.mousewheelControl) {
            try {
              new window.WheelEvent("wheel");
              /** @type {string} */
              self.mousewheel.event = "wheel";
            } catch (B) {
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
                fn(this, self.progress);
              });
              self.slides.each(function() {
                var targets = jQuery(this);
                targets.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                  /** @type {number} */
                  var i = Math.min(Math.max(targets[0].progress, -1), 1);
                  fn(this, i);
                });
              });
            },
            /**
             * @param {Function} duration
             * @return {undefined}
             */
            setTransition : function(duration) {
              if ("undefined" == typeof duration) {
                duration = self.params.speed;
              }
              self.container.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                var body = jQuery(this);
                var rvar = parseInt(body.attr("data-swiper-parallax-duration"), 10) || duration;
                if (0 === duration) {
                  /** @type {number} */
                  rvar = 0;
                }
                body.transition(rvar);
              });
            }
          };
          /** @type {Array} */
          self._plugins = [];
          var name;
          for (name in self.plugins) {
            var modId = self.plugins[name](self, self.params[name]);
            if (modId) {
              self._plugins.push(modId);
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
            return type = trim(type), self.emitterEventListeners[type] || (self.emitterEventListeners[type] = []), self.emitterEventListeners[type].push(fn), self;
          }, self.off = function(type, fn) {
            var i;
            if (type = trim(type), "undefined" == typeof fn) {
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
            type = trim(type);
            /**
             * @return {undefined}
             */
            var task = function on() {
              eventType(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
              self.off(type, on);
            };
            return self.on(type, task), self;
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
             * @param {Object} name
             * @return {?}
             */
            addRole : function(elem, name) {
              return elem.attr("role", name), elem;
            },
            /**
             * @param {?} context
             * @param {Object} source
             * @return {?}
             */
            addLabel : function(context, source) {
              return context.attr("aria-label", source), context;
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
                if (jQuery(event.target).is(self.params.nextButton)) {
                  self.onClickNext(event);
                  if (self.isEnd) {
                    self.a11y.notify(self.params.lastSlideMessage);
                  } else {
                    self.a11y.notify(self.params.nextSlideMessage);
                  }
                } else {
                  if (jQuery(event.target).is(self.params.prevButton)) {
                    self.onClickPrev(event);
                    if (self.isBeginning) {
                      self.a11y.notify(self.params.firstSlideMessage);
                    } else {
                      self.a11y.notify(self.params.prevSlideMessage);
                    }
                  }
                }
                if (jQuery(event.target).is("." + self.params.bulletClass)) {
                  jQuery(event.target)[0].click();
                }
              }
            },
            liveRegion : jQuery('<span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>'),
            /**
             * @param {string} val
             * @return {undefined}
             */
            notify : function(val) {
              var me = self.a11y.liveRegion;
              if (0 !== me.length) {
                me.html("");
                me.html(val);
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
              jQuery(self.container).append(self.a11y.liveRegion);
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
                        var container = jQuery(this);
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
              jQuery(self.params.prevButton).removeClass(self.params.buttonDisabledClass);
            }
            if (self.params.nextButton) {
              jQuery(self.params.nextButton).removeClass(self.params.buttonDisabledClass);
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
      Application.prototype = {
        isSafari : function() {
          /** @type {string} */
          var ua = navigator.userAgent.toLowerCase();
          return ua.indexOf("safari") >= 0 && (ua.indexOf("chrome") < 0 && ua.indexOf("android") < 0);
        }(),
        isUiWebView : /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent),
        /**
         * @param {?} obj
         * @return {?}
         */
        isArray : function(obj) {
          return "[object Array]" === Object.prototype.toString.apply(obj);
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
          var ios = ua.match(/(iPad).*OS\s([\d_]+)/);
          /** @type {(Array.<string>|null)} */
          var inverse = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
          /** @type {(Array.<string>|boolean|null)} */
          var program = !ios && ua.match(/(iPhone\sOS)\s([\d_]+)/);
          return{
            ios : ios || (program || inverse),
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
         * @param {Object} con
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
                if (!(0 !== excludes.indexOf("<td") && 0 !== excludes.indexOf("<th"))) {
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
           * @param {string} value
           * @return {?}
           */
          addClass : function(value) {
            if ("undefined" == typeof value) {
              return this;
            }
            var poly = value.split(" ");
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
           * @param {string} value
           * @return {?}
           */
          removeClass : function(value) {
            var classNames = value.split(" ");
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
           * @param {string} type
           * @return {?}
           */
          hasClass : function(type) {
            return!!this[0] && this[0].classList.contains(type);
          },
          /**
           * @param {string} name
           * @return {?}
           */
          toggleClass : function(name) {
            var codeSegments = name.split(" ");
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
           * @param {boolean} val
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
           * @param {?} value
           * @return {?}
           */
          data : function(name, value) {
            if ("undefined" != typeof value) {
              /** @type {number} */
              var i = 0;
              for (;i < this.length;i++) {
                var filter = this[i];
                if (!filter.dom7ElementDataStorage) {
                  filter.dom7ElementDataStorage = {};
                }
                filter.dom7ElementDataStorage[name] = value;
              }
              return this;
            }
            if (this[0]) {
              var firstByIndex = this[0].getAttribute("data-" + name);
              return firstByIndex ? firstByIndex : this[0].dom7ElementDataStorage && name in this[0].dom7ElementDataStorage ? this[0].dom7ElementDataStorage[name] : void 0;
            }
          },
          /**
           * @param {string} name
           * @return {?}
           */
          transform : function(name) {
            /** @type {number} */
            var i = 0;
            for (;i < this.length;i++) {
              var s = this[i].style;
              s.webkitTransform = s.MsTransform = s.msTransform = s.MozTransform = s.OTransform = s.transform = name;
            }
            return this;
          },
          /**
           * @param {string} name
           * @return {?}
           */
          transition : function(name) {
            if ("string" != typeof name) {
              name += "ms";
            }
            /** @type {number} */
            var i = 0;
            for (;i < this.length;i++) {
              var style = this[i].style;
              style.webkitTransitionDuration = style.MsTransitionDuration = style.msTransitionDuration = style.MozTransitionDuration = style.OTransitionDuration = style.transitionDuration = name;
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
          on : function(types, fn, callback, capture) {
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
            var t;
            var gestures = types.split(" ");
            /** @type {number} */
            i = 0;
            for (;i < this.length;i++) {
              if ("function" == typeof fn || fn === false) {
                if ("function" == typeof fn) {
                  callback = arguments[1];
                  capture = arguments[2] || false;
                }
                /** @type {number} */
                t = 0;
                for (;t < gestures.length;t++) {
                  this[i].addEventListener(gestures[t], callback, capture);
                }
              } else {
                /** @type {number} */
                t = 0;
                for (;t < gestures.length;t++) {
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
                  this[i].addEventListener(gestures[t], hide, capture);
                }
              }
            }
            return this;
          },
          /**
           * @param {string} types
           * @param {Function} fn
           * @param {Function} listener
           * @param {boolean} capture
           * @return {?}
           */
          off : function(types, fn, listener, capture) {
            var gestures = types.split(" ");
            /** @type {number} */
            var t = 0;
            for (;t < gestures.length;t++) {
              /** @type {number} */
              var n = 0;
              for (;n < this.length;n++) {
                if ("function" == typeof fn || fn === false) {
                  if ("function" == typeof fn) {
                    listener = arguments[1];
                    capture = arguments[2] || false;
                  }
                  this[n].removeEventListener(gestures[t], listener, capture);
                } else {
                  if (this[n].dom7LiveListeners) {
                    /** @type {number} */
                    var i = 0;
                    for (;i < this[n].dom7LiveListeners.length;i++) {
                      if (this[n].dom7LiveListeners[i].listener === listener) {
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
           * @param {?} fn
           * @param {Text} func
           * @param {boolean} callback
           * @return {undefined}
           */
          once : function(type, fn, func, callback) {
            /**
             * @param {?} n
             * @return {undefined}
             */
            function f(n) {
              func(n);
              el.off(type, fn, f, callback);
            }
            var el = this;
            if ("function" == typeof fn) {
              /** @type {boolean} */
              fn = false;
              func = arguments[1];
              callback = arguments[2];
            }
            el.on(type, fn, f, callback);
          },
          /**
           * @param {string} type
           * @param {Array} data
           * @return {?}
           */
          trigger : function(type, data) {
            /** @type {number} */
            var i = 0;
            for (;i < this.length;i++) {
              var event;
              try {
                event = new window.CustomEvent(type, {
                  detail : data,
                  bubbles : true,
                  cancelable : true
                });
              } catch (s) {
                /** @type {(Event|null)} */
                event = document.createEvent("Event");
                event.initEvent(type, true, true);
                /** @type {Array} */
                event.detail = data;
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
             * @param {Event} e
             * @return {undefined}
             */
            function listener(e) {
              if (e.target === this) {
                callback.call(this, e);
                /** @type {number} */
                i = 0;
                for (;i < events.length;i++) {
                  stream.off(events[i], listener);
                }
              }
            }
            var i;
            /** @type {Array} */
            var events = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"];
            var stream = this;
            if (callback) {
              /** @type {number} */
              i = 0;
              for (;i < events.length;i++) {
                stream.on(events[i], listener);
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
           * @param {boolean} recurring
           * @return {?}
           */
          outerWidth : function(recurring) {
            return this.length > 0 ? recurring ? this[0].offsetWidth + parseFloat(this.css("margin-right")) + parseFloat(this.css("margin-left")) : this[0].offsetWidth : null;
          },
          /**
           * @return {?}
           */
          height : function() {
            return this[0] === window ? window.innerHeight : this.length > 0 ? parseFloat(this.css("height")) : null;
          },
          /**
           * @param {boolean} dataAndEvents
           * @return {?}
           */
          outerHeight : function(dataAndEvents) {
            return this.length > 0 ? dataAndEvents ? this[0].offsetHeight + parseFloat(this.css("margin-top")) + parseFloat(this.css("margin-bottom")) : this[0].offsetHeight : null;
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
           * @param {string} name
           * @param {string} value
           * @return {?}
           */
          css : function(name, value) {
            var i;
            if (1 === arguments.length) {
              if ("string" != typeof name) {
                /** @type {number} */
                i = 0;
                for (;i < this.length;i++) {
                  var x;
                  for (x in name) {
                    this[i].style[x] = name[x];
                  }
                }
                return this;
              }
              if (this[0]) {
                return window.getComputedStyle(this[0], null).getPropertyValue(name);
              }
            }
            if (2 === arguments.length && "string" == typeof name) {
              /** @type {number} */
              i = 0;
              for (;i < this.length;i++) {
                /** @type {string} */
                this[i].style[name] = value;
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
           * @param {string} name
           * @return {?}
           */
          text : function(name) {
            if ("undefined" == typeof name) {
              return this[0] ? this[0].textContent.trim() : null;
            }
            /** @type {number} */
            var i = 0;
            for (;i < this.length;i++) {
              /** @type {string} */
              this[i].textContent = name;
            }
            return this;
          },
          /**
           * @param {?} selector
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
            return index > len - 1 ? new Z([]) : index < 0 ? (tab_id = len + index, new Z(tab_id < 0 ? [] : [this[tab_id]])) : new Z([this[index]]);
          },
          /**
           * @param {string} line
           * @return {?}
           */
          append : function(line) {
            var i;
            var j;
            /** @type {number} */
            i = 0;
            for (;i < this.length;i++) {
              if ("string" == typeof line) {
                /** @type {Element} */
                var div = document.createElement("div");
                /** @type {string} */
                div.innerHTML = line;
                for (;div.firstChild;) {
                  this[i].appendChild(div.firstChild);
                }
              } else {
                if (line instanceof Z) {
                  /** @type {number} */
                  j = 0;
                  for (;j < line.length;j++) {
                    this[i].appendChild(line[j]);
                  }
                } else {
                  this[i].appendChild(line);
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
            var i;
            var j;
            /** @type {number} */
            i = 0;
            for (;i < this.length;i++) {
              if ("string" == typeof html) {
                /** @type {Element} */
                var container = document.createElement("div");
                /** @type {string} */
                container.innerHTML = html;
                /** @type {number} */
                j = container.childNodes.length - 1;
                for (;j >= 0;j--) {
                  this[i].insertBefore(container.childNodes[j], this[i].childNodes[0]);
                }
              } else {
                if (html instanceof Z) {
                  /** @type {number} */
                  j = 0;
                  for (;j < html.length;j++) {
                    this[i].insertBefore(html[j], this[i].childNodes[0]);
                  }
                } else {
                  this[i].insertBefore(html, this[i].childNodes[0]);
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
           * @param {string} t
           * @return {undefined}
           */
          insertAfter : function(t) {
            var children = $(t);
            /** @type {number} */
            var i = 0;
            for (;i < this.length;i++) {
              if (1 === children.length) {
                children[0].parentNode.insertBefore(this[i], children[0].nextSibling);
              } else {
                if (children.length > 1) {
                  /** @type {number} */
                  var j = 0;
                  for (;j < children.length;j++) {
                    children[j].parentNode.insertBefore(this[i].cloneNode(true), children[j].nextSibling);
                  }
                }
              }
            }
          },
          /**
           * @param {string} until
           * @return {?}
           */
          next : function(until) {
            return new Z(this.length > 0 ? until ? this[0].nextElementSibling && $(this[0].nextElementSibling).is(until) ? [this[0].nextElementSibling] : [] : this[0].nextElementSibling ? [this[0].nextElementSibling] : [] : []);
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
            var matched = [];
            /** @type {number} */
            var i = 0;
            for (;i < this.length;i++) {
              if (until) {
                if ($(this[i].parentNode).is(until)) {
                  matched.push(this[i].parentNode);
                }
              } else {
                matched.push(this[i].parentNode);
              }
            }
            return $($.unique(matched));
          },
          /**
           * @param {string} selector
           * @return {?}
           */
          parents : function find(selector) {
            /** @type {Array} */
            var matched = [];
            /** @type {number} */
            var i = 0;
            for (;i < this.length;i++) {
              var n = this[i].parentNode;
              for (;n;) {
                if (selector) {
                  if ($(n).is(selector)) {
                    matched.push(n);
                  }
                } else {
                  matched.push(n);
                }
                n = n.parentNode;
              }
            }
            return $($.unique(matched));
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
           * @param {string} until
           * @return {?}
           */
          children : function normalize(until) {
            /** @type {Array} */
            var matched = [];
            /** @type {number} */
            var t = 0;
            for (;t < this.length;t++) {
              var children = this[t].childNodes;
              /** @type {number} */
              var i = 0;
              for (;i < children.length;i++) {
                if (until) {
                  if (1 === children[i].nodeType) {
                    if ($(children[i]).is(until)) {
                      matched.push(children[i]);
                    }
                  }
                } else {
                  if (1 === children[i].nodeType) {
                    matched.push(children[i]);
                  }
                }
              }
            }
            return new Z($.unique(matched));
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
            var index;
            var result = this;
            /** @type {number} */
            i = 0;
            for (;i < arguments.length;i++) {
              var items = $(arguments[i]);
              /** @type {number} */
              index = 0;
              for (;index < items.length;index++) {
                result[result.length] = items[index];
                result.length++;
              }
            }
            return result;
          }
        }, $.fn = Z.prototype, $.unique = function(results) {
          /** @type {Array} */
          var result = [];
          /** @type {number} */
          var i = 0;
          for (;i < results.length;i++) {
            if (result.indexOf(results[i]) === -1) {
              result.push(results[i]);
            }
          }
          return result;
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
      var $;
      $ = "undefined" == typeof io ? window.Dom7 || (window.Zepto || fallback) : io;
      if ($) {
        if (!("transitionEnd" in $.fn)) {
          /**
           * @param {Function} callback
           * @return {?}
           */
          $.fn.transitionEnd = function(callback) {
            /**
             * @param {Event} e
             * @return {undefined}
             */
            function listener(e) {
              if (e.target === this) {
                callback.call(this, e);
                /** @type {number} */
                i = 0;
                for (;i < events.length;i++) {
                  stream.off(events[i], listener);
                }
              }
            }
            var i;
            /** @type {Array} */
            var events = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"];
            var stream = this;
            if (callback) {
              /** @type {number} */
              i = 0;
              for (;i < events.length;i++) {
                stream.on(events[i], listener);
              }
            }
            return this;
          };
        }
        if (!("transform" in $.fn)) {
          /**
           * @param {string} name
           * @return {?}
           */
          $.fn.transform = function(name) {
            /** @type {number} */
            var i = 0;
            for (;i < this.length;i++) {
              var s = this[i].style;
              s.webkitTransform = s.MsTransform = s.msTransform = s.MozTransform = s.OTransform = s.transform = name;
            }
            return this;
          };
        }
        if (!("transition" in $.fn)) {
          /**
           * @param {string} name
           * @return {?}
           */
          $.fn.transition = function(name) {
            if ("string" != typeof name) {
              name += "ms";
            }
            /** @type {number} */
            var i = 0;
            for (;i < this.length;i++) {
              var style = this[i].style;
              style.webkitTransitionDuration = style.MsTransitionDuration = style.msTransitionDuration = style.MozTransitionDuration = style.OTransitionDuration = style.transitionDuration = name;
            }
            return this;
          };
        }
      }
      /** @type {function (string, Object): ?} */
      window.Swiper = Application;
    }();
    module.exports = window.Swiper;
  }).call(next_scope, fn(1), fn(1));
}, function(stdout, model, i) {
  var val;
  (function(module) {
    /** @type {function (Object): ?} */
    var expect = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(module) {
      return typeof module;
    } : function(arg) {
      return arg && ("function" == typeof Symbol && arg.constructor === Symbol) ? "symbol" : typeof arg;
    };
    !function(win) {
      /** @type {string} */
      var ua = navigator.userAgent;
      if (win.HTMLPictureElement) {
        if (/ecko/.test(ua)) {
          if (ua.match(/rv\:(\d+)/)) {
            if (RegExp.$1 < 45) {
              addEventListener("resize", function() {
                var tref;
                /** @type {Element} */
                var template = document.createElement("source");
                /**
                 * @param {Node} container
                 * @return {undefined}
                 */
                var init = function(container) {
                  var node;
                  var html;
                  var parent = container.parentNode;
                  if ("PICTURE" === parent.nodeName.toUpperCase()) {
                    /** @type {Element} */
                    node = template.cloneNode();
                    parent.insertBefore(node, parent.firstElementChild);
                    setTimeout(function() {
                      parent.removeChild(node);
                    });
                  } else {
                    if (!container._pfLastSize || container.offsetWidth > container._pfLastSize) {
                      container._pfLastSize = container.offsetWidth;
                      html = container.sizes;
                      container.sizes += ",100vw";
                      setTimeout(function() {
                        container.sizes = html;
                      });
                    }
                  }
                };
                /**
                 * @return {undefined}
                 */
                var refresh = function() {
                  var i;
                  /** @type {NodeList} */
                  var codeSegments = document.querySelectorAll("picture > img, img[srcset][sizes]");
                  /** @type {number} */
                  i = 0;
                  for (;i < codeSegments.length;i++) {
                    init(codeSegments[i]);
                  }
                };
                /**
                 * @return {undefined}
                 */
                var ready = function() {
                  clearTimeout(tref);
                  /** @type {number} */
                  tref = setTimeout(refresh, 99);
                };
                var conn = win.matchMedia && matchMedia("(orientation: landscape)");
                /**
                 * @return {undefined}
                 */
                var completed = function() {
                  ready();
                  if (conn) {
                    if (conn.addListener) {
                      conn.addListener(ready);
                    }
                  }
                };
                return template.srcset = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", /^[c|i]|d$/.test(document.readyState || "") ? completed() : document.addEventListener("DOMContentLoaded", completed), ready;
              }());
            }
          }
        }
      }
    }(window);
    (function(global, doc, url) {
      /**
       * @param {string} message
       * @return {?}
       */
      function log(message) {
        return " " === message || ("\t" === message || ("\n" === message || ("\f" === message || "\r" === message)));
      }
      /**
       * @param {string} type
       * @param {string} path
       * @return {?}
       */
      function getImage(type, path) {
        var el = new global.Image;
        return el.onerror = function() {
          /** @type {boolean} */
          types[type] = false;
          render();
        }, el.onload = function() {
          /** @type {boolean} */
          types[type] = 1 === el.width;
          render();
        }, el.src = path, "pending";
      }
      /**
       * @return {undefined}
       */
      function init() {
        /** @type {boolean} */
        inParam = false;
        /** @type {number} */
        c = global.devicePixelRatio;
        req = {};
        obj = {};
        /** @type {number} */
        self.DPR = c || 1;
        /** @type {number} */
        data.width = Math.max(global.innerWidth || 0, testEl.clientWidth);
        /** @type {number} */
        data.height = Math.max(global.innerHeight || 0, testEl.clientHeight);
        /** @type {number} */
        data.vw = data.width / 100;
        /** @type {number} */
        data.vh = data.height / 100;
        /** @type {string} */
        id = [data.height, data.width, c].join("-");
        data.em = self.getEmValue();
        data.rem = data.em;
      }
      /**
       * @param {number} offset
       * @param {number} width
       * @param {number} x
       * @param {boolean} allBindingsAccessor
       * @return {?}
       */
      function update(offset, width, x, allBindingsAccessor) {
        var j;
        var i;
        var k;
        var index;
        return "saveData" === cfg.algorithm ? offset > 2.7 ? index = x + 1 : (i = width - x, j = Math.pow(offset - 0.6, 1.5), k = i * j, allBindingsAccessor && (k += 0.1 * j), index = offset + k) : index = x > 1 ? Math.sqrt(offset * width) : offset, index > x;
      }
      /**
       * @param {Object} v
       * @return {undefined}
       */
      function isDate(v) {
        var p;
        var m = self.getSet(v);
        /** @type {boolean} */
        var factory = false;
        if ("pending" !== m) {
          factory = id;
          if (m) {
            p = self.setRes(m);
            self.applySetCandidate(p, v);
          }
        }
        v[self.ns].evaled = factory;
      }
      /**
       * @param {Object} res
       * @param {Object} msg
       * @return {?}
       */
      function cb(res, msg) {
        return res.res - msg.res;
      }
      /**
       * @param {Object} lock
       * @param {Object} callback
       * @param {Array} v
       * @return {?}
       */
      function set(lock, callback, v) {
        var res;
        return!v && (callback && (v = lock[self.ns].sets, v = v && v[v.length - 1])), res = $(callback, v), res && (callback = self.makeUrl(callback), lock[self.ns].curSrc = callback, lock[self.ns].curCan = res, res.res || fn(res, res.set.sizes)), res;
      }
      /**
       * @param {boolean} a
       * @param {Array} b
       * @return {?}
       */
      function $(a, b) {
        var i;
        var el;
        var codeSegments;
        if (a && b) {
          codeSegments = self.parseSet(b);
          a = self.makeUrl(a);
          /** @type {number} */
          i = 0;
          for (;i < codeSegments.length;i++) {
            if (a === self.makeUrl(codeSegments[i].url)) {
              el = codeSegments[i];
              break;
            }
          }
        }
        return el;
      }
      /**
       * @param {Node} context
       * @param {Array} a
       * @return {undefined}
       */
      function click(context, a) {
        var _i;
        var _len;
        var element;
        var srcset;
        var all = context.getElementsByTagName("source");
        /** @type {number} */
        _i = 0;
        _len = all.length;
        for (;_i < _len;_i++) {
          element = all[_i];
          /** @type {boolean} */
          element[self.ns] = true;
          srcset = element.getAttribute("srcset");
          if (srcset) {
            a.push({
              srcset : srcset,
              media : element.getAttribute("media"),
              type : element.getAttribute("type"),
              sizes : element.getAttribute("sizes")
            });
          }
        }
      }
      /**
       * @param {string} template
       * @param {Array} e
       * @return {?}
       */
      function build(template, e) {
        /**
         * @param {RegExp} key
         * @return {?}
         */
        function next(key) {
          var name;
          var attrNames = key.exec(template.substring(i));
          if (attrNames) {
            return name = attrNames[0], i += name.length, name;
          }
        }
        /**
         * @return {undefined}
         */
        function init() {
          var w;
          var value;
          var y;
          var i;
          var part;
          var undef;
          var x;
          var b;
          var left;
          /** @type {boolean} */
          var h = false;
          var a = {};
          /** @type {number} */
          i = 0;
          for (;i < parts.length;i++) {
            part = parts[i];
            undef = part[part.length - 1];
            x = part.substring(0, part.length - 1);
            /** @type {number} */
            b = parseInt(x, 10);
            /** @type {number} */
            left = parseFloat(x);
            if (numbers.test(x) && "w" === undef) {
              if (w || value) {
                /** @type {boolean} */
                h = true;
              }
              if (0 === b) {
                /** @type {boolean} */
                h = true;
              } else {
                /** @type {number} */
                w = b;
              }
            } else {
              if (arg.test(x) && "x" === undef) {
                if (w || (value || y)) {
                  /** @type {boolean} */
                  h = true;
                }
                if (left < 0) {
                  /** @type {boolean} */
                  h = true;
                } else {
                  /** @type {number} */
                  value = left;
                }
              } else {
                if (numbers.test(x) && "h" === undef) {
                  if (y || value) {
                    /** @type {boolean} */
                    h = true;
                  }
                  if (0 === b) {
                    /** @type {boolean} */
                    h = true;
                  } else {
                    /** @type {number} */
                    y = b;
                  }
                } else {
                  /** @type {boolean} */
                  h = true;
                }
              }
            }
          }
          if (!h) {
            a.url = text;
            if (w) {
              a.w = w;
            }
            if (value) {
              a.d = value;
            }
            if (y) {
              a.h = y;
            }
            if (!y) {
              if (!value) {
                if (!w) {
                  /** @type {number} */
                  a.d = 1;
                }
              }
            }
            if (1 === a.d) {
              /** @type {boolean} */
              e.has1x = true;
            }
            /** @type {Array} */
            a.set = e;
            parents.push(a);
          }
        }
        /**
         * @return {?}
         */
        function build() {
          next(camelKey);
          /** @type {string} */
          src = "";
          /** @type {string} */
          c = "in descriptor";
          for (;;) {
            if (data = template.charAt(i), "in descriptor" === c) {
              if (log(data)) {
                if (src) {
                  parts.push(src);
                  /** @type {string} */
                  src = "";
                  /** @type {string} */
                  c = "after descriptor";
                }
              } else {
                if ("," === data) {
                  return i += 1, src && parts.push(src), void init();
                }
                if ("(" === data) {
                  src += data;
                  /** @type {string} */
                  c = "in parens";
                } else {
                  if ("" === data) {
                    return src && parts.push(src), void init();
                  }
                  src += data;
                }
              }
            } else {
              if ("in parens" === c) {
                if (")" === data) {
                  src += data;
                  /** @type {string} */
                  c = "in descriptor";
                } else {
                  if ("" === data) {
                    return parts.push(src), void init();
                  }
                  src += data;
                }
              } else {
                if ("after descriptor" === c) {
                  if (log(data)) {
                  } else {
                    if ("" === data) {
                      return void init();
                    }
                    /** @type {string} */
                    c = "in descriptor";
                    i -= 1;
                  }
                }
              }
            }
            i += 1;
          }
        }
        var text;
        var parts;
        var src;
        var c;
        var data;
        var len = template.length;
        /** @type {number} */
        var i = 0;
        /** @type {Array} */
        var parents = [];
        for (;;) {
          if (next(serverId), i >= len) {
            return parents;
          }
          text = next(open);
          /** @type {Array} */
          parts = [];
          if ("," === text.slice(-1)) {
            text = text.replace(cx, "");
            init();
          } else {
            build();
          }
        }
      }
      /**
       * @param {string} name
       * @return {?}
       */
      function filter(name) {
        /**
         * @param {string} val
         * @return {?}
         */
        function func(val) {
          /**
           * @return {undefined}
           */
          function toString() {
            if (out) {
              vvar.push(out);
              /** @type {string} */
              out = "";
            }
          }
          /**
           * @return {undefined}
           */
          function getEnumerableProperties() {
            if (vvar[0]) {
              assigns.push(vvar);
              /** @type {Array} */
              vvar = [];
            }
          }
          var data;
          /** @type {string} */
          var out = "";
          /** @type {Array} */
          var vvar = [];
          /** @type {Array} */
          var assigns = [];
          /** @type {number} */
          var a = 0;
          /** @type {number} */
          var i = 0;
          /** @type {boolean} */
          var p = false;
          for (;;) {
            if (data = val.charAt(i), "" === data) {
              return toString(), getEnumerableProperties(), assigns;
            }
            if (p) {
              if ("*" === data && "/" === val[i + 1]) {
                /** @type {boolean} */
                p = false;
                i += 2;
                toString();
                continue;
              }
              i += 1;
            } else {
              if (log(data)) {
                if (val.charAt(i - 1) && log(val.charAt(i - 1)) || !out) {
                  i += 1;
                  continue;
                }
                if (0 === a) {
                  toString();
                  i += 1;
                  continue;
                }
                /** @type {string} */
                data = " ";
              } else {
                if ("(" === data) {
                  a += 1;
                } else {
                  if (")" === data) {
                    a -= 1;
                  } else {
                    if ("," === data) {
                      toString();
                      getEnumerableProperties();
                      i += 1;
                      continue;
                    }
                    if ("/" === data && "*" === val.charAt(i + 1)) {
                      /** @type {boolean} */
                      p = true;
                      i += 2;
                      continue;
                    }
                  }
                }
              }
              out += data;
              i += 1;
            }
          }
        }
        /**
         * @param {string} value
         * @return {?}
         */
        function fn(value) {
          return!!(exclude.test(value) && parseFloat(value) >= 0) || (!!rchecked.test(value) || ("0" === value || ("-0" === value || "+0" === value)));
        }
        var i;
        var res;
        var valsLength;
        var c;
        var next;
        var ret;
        /** @type {RegExp} */
        var exclude = /^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i;
        /** @type {RegExp} */
        var rchecked = /^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;
        res = func(name);
        valsLength = res.length;
        /** @type {number} */
        i = 0;
        for (;i < valsLength;i++) {
          if (c = res[i], next = c[c.length - 1], fn(next)) {
            if (ret = next, c.pop(), 0 === c.length) {
              return ret;
            }
            if (c = c.join(" "), self.matchesMedia(c)) {
              return ret;
            }
          }
        }
        return "100vw";
      }
      doc.createElement("picture");
      var wrapper;
      var ret;
      var er;
      var id;
      var self = {};
      /** @type {boolean} */
      var S = false;
      /**
       * @return {undefined}
       */
      var func = function() {
      };
      /** @type {Element} */
      var img = doc.createElement("img");
      /** @type {function (this:Element, string, (null|number)=): string} */
      var path = img.getAttribute;
      /** @type {function (this:Element, string, (boolean|number|string)): undefined} */
      var src = img.setAttribute;
      /** @type {function (this:Element, string): undefined} */
      var callback = img.removeAttribute;
      /** @type {Element} */
      var testEl = doc.documentElement;
      var types = {};
      var cfg = {
        algorithm : ""
      };
      /** @type {string} */
      var index = "data-pfsrc";
      /** @type {string} */
      var position = index + "set";
      /** @type {string} */
      var ua = navigator.userAgent;
      /** @type {(boolean|null)} */
      var ontype = /rident/.test(ua) || /ecko/.test(ua) && (ua.match(/rv\:(\d+)/) && RegExp.$1 > 35);
      /** @type {string} */
      var target = "currentSrc";
      /** @type {RegExp} */
      var stopParent = /\s+\+?\d+(e\d+)?w/;
      /** @type {RegExp} */
      var typePattern = /(\([^)]+\))?\s*(.+)/;
      var res = global.picturefillCFG;
      /** @type {string} */
      var stylesString = "position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)";
      /** @type {string} */
      var oldCSS = "font-size:100%!important;";
      /** @type {boolean} */
      var inParam = true;
      var req = {};
      var obj = {};
      /** @type {number} */
      var c = global.devicePixelRatio;
      var data = {
        px : 1,
        "in" : 96
      };
      /** @type {Element} */
      var location = doc.createElement("a");
      /** @type {boolean} */
      var Y = false;
      /** @type {RegExp} */
      var camelKey = /^[ \t\n\r\u000c]+/;
      /** @type {RegExp} */
      var serverId = /^[, \t\n\r\u000c]+/;
      /** @type {RegExp} */
      var open = /^[^ \t\n\r\u000c]+/;
      /** @type {RegExp} */
      var cx = /[,]+$/;
      /** @type {RegExp} */
      var numbers = /^\d+$/;
      /** @type {RegExp} */
      var arg = /^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/;
      /**
       * @param {HTMLElement} node
       * @param {string} eventName
       * @param {Function} callback
       * @param {boolean} useCapture
       * @return {undefined}
       */
      var addEvent = function(node, eventName, callback, useCapture) {
        if (node.addEventListener) {
          node.addEventListener(eventName, callback, useCapture || false);
        } else {
          if (node.attachEvent) {
            node.attachEvent("on" + eventName, callback);
          }
        }
      };
      /**
       * @param {Function} behavior
       * @return {?}
       */
      var group = function(behavior) {
        var map = {};
        return function(c) {
          return c in map || (map[c] = behavior(c)), map[c];
        };
      };
      var Event = function() {
        /** @type {RegExp} */
        var typePattern = /^([\d\.]+)(em|vw|px)$/;
        /**
         * @return {?}
         */
        var appendModelPrefix = function() {
          /** @type {Arguments} */
          var args = arguments;
          /** @type {number} */
          var i = 0;
          var value = args[0];
          for (;++i in args;) {
            value = value.replace(args[i], args[++i]);
          }
          return value;
        };
        var eachProp = group(function(line) {
          return "return " + appendModelPrefix((line || "").toLowerCase(), /\band\b/g, "&&", /,/g, "||", /min-([a-z-\s]+):/g, "e.$1>=", /max-([a-z-\s]+):/g, "e.$1<=", /calc([^)]+)/g, "($1)", /(\d+[\.]*[\d]*)([a-z]+)/g, "($1 * e.$2)", /^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi, "") + ";";
        });
        return function(source, dataAndEvents) {
          var no;
          if (!(source in req)) {
            if (req[source] = false, dataAndEvents && (no = source.match(typePattern))) {
              /** @type {number} */
              req[source] = no[1] * data[no[2]];
            } else {
              try {
                req[source] = (new Function("e", eachProp(source)))(data);
              } catch (r) {
              }
            }
          }
          return req[source];
        };
      }();
      /**
       * @param {Object} args
       * @param {string} event
       * @return {?}
       */
      var fn = function(args, event) {
        return args.w ? (args.cWidth = self.calcListLength(event || "100vw"), args.res = args.w / args.cWidth) : args.res = args.d, args;
      };
      /**
       * @param {Object} eventName
       * @return {undefined}
       */
      var render = function(eventName) {
        if (S) {
          var configList;
          var i;
          var ln;
          var event = eventName || {};
          if (event.elements && (1 === event.elements.nodeType && ("IMG" === event.elements.nodeName.toUpperCase() ? event.elements = [event.elements] : (event.context = event.elements, event.elements = null))), configList = event.elements || self.qsa(event.context || doc, event.reevaluate || event.reselect ? self.sel : self.selShort), ln = configList.length) {
            self.setupRun(event);
            /** @type {boolean} */
            Y = true;
            /** @type {number} */
            i = 0;
            for (;i < ln;i++) {
              self.fillImg(configList[i], event);
            }
            self.teardownRun(event);
          }
        }
      };
      /** @type {Function} */
      wrapper = global.console && console.warn ? function(x) {
        console.warn(x);
      } : func;
      if (!(target in img)) {
        /** @type {string} */
        target = "src";
      }
      /** @type {boolean} */
      types["image/jpeg"] = true;
      /** @type {boolean} */
      types["image/gif"] = true;
      /** @type {boolean} */
      types["image/png"] = true;
      /** @type {boolean} */
      types["image/svg+xml"] = doc.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1");
      /** @type {string} */
      self.ns = ("pf" + (new Date).getTime()).substr(0, 9);
      /** @type {boolean} */
      self.supSrcset = "srcset" in img;
      /** @type {boolean} */
      self.supSizes = "sizes" in img;
      /** @type {boolean} */
      self.supPicture = !!global.HTMLPictureElement;
      if (self.supSrcset) {
        if (self.supPicture) {
          if (!self.supSizes) {
            !function(t) {
              /** @type {string} */
              img.srcset = "data:,a";
              /** @type {string} */
              t.src = "data:,a";
              /** @type {boolean} */
              self.supSrcset = img.complete === t.complete;
              /** @type {boolean} */
              self.supPicture = self.supSrcset && self.supPicture;
            }(doc.createElement("img"));
          }
        }
      }
      if (self.supSrcset && !self.supSizes) {
        !function() {
          /** @type {string} */
          var b = "data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw==";
          /** @type {string} */
          var a = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
          /** @type {Element} */
          var img = doc.createElement("img");
          /**
           * @return {undefined}
           */
          var cb = function() {
            var iw = img.width;
            if (2 === iw) {
              /** @type {boolean} */
              self.supSizes = true;
            }
            /** @type {boolean} */
            er = self.supSrcset && !self.supSizes;
            /** @type {boolean} */
            S = true;
            setTimeout(render);
          };
          /** @type {function (): undefined} */
          img.onload = cb;
          /** @type {function (): undefined} */
          img.onerror = cb;
          img.setAttribute("sizes", "9px");
          /** @type {string} */
          img.srcset = a + " 1w," + b + " 9w";
          /** @type {string} */
          img.src = a;
        }();
      } else {
        /** @type {boolean} */
        S = true;
      }
      /** @type {string} */
      self.selShort = "picture>img,img[srcset]";
      /** @type {string} */
      self.sel = self.selShort;
      self.cfg = cfg;
      self.DPR = c || 1;
      self.u = data;
      self.types = types;
      /** @type {function (): undefined} */
      self.setSize = func;
      self.makeUrl = group(function(loc) {
        return location.href = loc, location.href;
      });
      /**
       * @param {Object} element
       * @param {string} selector
       * @return {?}
       */
      self.qsa = function(element, selector) {
        return "querySelector" in element ? element.querySelectorAll(selector) : [];
      };
      /**
       * @return {?}
       */
      self.matchesMedia = function() {
        return global.matchMedia && (matchMedia("(min-width: 0.1em)") || {}).matches ? self.matchesMedia = function(query) {
          return!query || matchMedia(query).matches;
        } : self.matchesMedia = self.mMQ, self.matchesMedia.apply(this, arguments);
      };
      /**
       * @param {?} type
       * @return {?}
       */
      self.mMQ = function(type) {
        return!type || Event(type);
      };
      /**
       * @param {?} type
       * @return {?}
       */
      self.calcLength = function(type) {
        var value = Event(type, true) || false;
        return value < 0 && (value = false), value;
      };
      /**
       * @param {?} type
       * @return {?}
       */
      self.supportsType = function(type) {
        return!type || types[type];
      };
      self.parseSize = group(function(value) {
        var units = (value || "").match(typePattern);
        return{
          media : units && units[1],
          length : units && units[2]
        };
      });
      /**
       * @param {Array} f
       * @return {?}
       */
      self.parseSet = function(f) {
        return f.cands || (f.cands = build(f.srcset, f)), f.cands;
      };
      /**
       * @return {?}
       */
      self.getEmValue = function() {
        var html;
        if (!ret && (html = doc.body)) {
          /** @type {Element} */
          var div = doc.createElement("div");
          /** @type {string} */
          var _beforeStyle = testEl.style.cssText;
          /** @type {string} */
          var oldCssText = html.style.cssText;
          /** @type {string} */
          div.style.cssText = stylesString;
          /** @type {string} */
          testEl.style.cssText = oldCSS;
          /** @type {string} */
          html.style.cssText = oldCSS;
          html.appendChild(div);
          ret = div.offsetWidth;
          html.removeChild(div);
          /** @type {number} */
          ret = parseFloat(ret, 10);
          /** @type {string} */
          testEl.style.cssText = _beforeStyle;
          /** @type {string} */
          html.style.cssText = oldCssText;
        }
        return ret || 16;
      };
      /**
       * @param {string} name
       * @return {?}
       */
      self.calcListLength = function(name) {
        if (!(name in obj) || cfg.uT) {
          var value = self.calcLength(filter(name));
          obj[name] = value ? value : data.width;
        }
        return obj[name];
      };
      /**
       * @param {Array} m
       * @return {?}
       */
      self.setRes = function(m) {
        var list;
        if (m) {
          list = self.parseSet(m);
          /** @type {number} */
          var i = 0;
          var listLength = list.length;
          for (;i < listLength;i++) {
            fn(list[i], m.sizes);
          }
        }
        return list;
      };
      /** @type {function (Object, string): ?} */
      self.setRes.res = fn;
      /**
       * @param {Array} list
       * @param {Object} obj
       * @return {undefined}
       */
      self.applySetCandidate = function(list, obj) {
        if (list.length) {
          var data;
          var _i;
          var i;
          var _len;
          var item;
          var restoreScript;
          var other;
          var fix;
          var handle;
          var e = obj[self.ns];
          var prev = self.DPR;
          if (restoreScript = e.curSrc || obj[target], other = e.curCan || set(obj, restoreScript, list[0].set), other && (other.set === list[0].set && (handle = ontype && (!obj.complete && other.res - 0.1 > prev), handle || (other.cached = true, other.res >= prev && (item = other)))), !item) {
            list.sort(cb);
            _len = list.length;
            item = list[_len - 1];
            /** @type {number} */
            _i = 0;
            for (;_i < _len;_i++) {
              if (data = list[_i], data.res >= prev) {
                /** @type {number} */
                i = _i - 1;
                item = list[i] && ((handle || restoreScript !== self.makeUrl(data.url)) && update(list[i].res, data.res, prev, list[i].cached)) ? list[i] : data;
                break;
              }
            }
          }
          if (item) {
            fix = self.makeUrl(item.url);
            e.curSrc = fix;
            e.curCan = item;
            if (fix !== restoreScript) {
              self.setSrc(obj, item);
            }
            self.setSize(obj);
          }
        }
      };
      /**
       * @param {Node} img
       * @param {Object} item
       * @return {undefined}
       */
      self.setSrc = function(img, item) {
        var originalWidth;
        img.src = item.url;
        if ("image/svg+xml" === item.set.type) {
          originalWidth = img.style.width;
          /** @type {string} */
          img.style.width = img.offsetWidth + 1 + "px";
          if (img.offsetWidth + 1) {
            img.style.width = originalWidth;
          }
        }
      };
      /**
       * @param {Object} v
       * @return {?}
       */
      self.getSet = function(v) {
        var i;
        var options;
        var o;
        /** @type {boolean} */
        var fn = false;
        var codeSegments = v[self.ns].sets;
        /** @type {number} */
        i = 0;
        for (;i < codeSegments.length && !fn;i++) {
          if (options = codeSegments[i], options.srcset && (self.matchesMedia(options.media) && (o = self.supportsType(options.type)))) {
            if ("pending" === o) {
              options = o;
            }
            fn = options;
            break;
          }
        }
        return fn;
      };
      /**
       * @param {Object} img
       * @param {Object} elem
       * @param {Element} options
       * @return {undefined}
       */
      self.parseSets = function(img, elem, options) {
        var i;
        var last;
        var cur;
        var o;
        var nType = elem && "PICTURE" === elem.nodeName.toUpperCase();
        var data = img[self.ns];
        if (data.src === url || options.src) {
          /** @type {string} */
          data.src = path.call(img, "src");
          if (data.src) {
            src.call(img, index, data.src);
          } else {
            callback.call(img, index);
          }
        }
        if (data.srcset === url || (options.srcset || (!self.supSrcset || img.srcset))) {
          /** @type {string} */
          i = path.call(img, "srcset");
          /** @type {string} */
          data.srcset = i;
          /** @type {boolean} */
          o = true;
        }
        /** @type {Array} */
        data.sets = [];
        if (nType) {
          /** @type {boolean} */
          data.pic = true;
          click(elem, data.sets);
        }
        if (data.srcset) {
          last = {
            srcset : data.srcset,
            sizes : path.call(img, "sizes")
          };
          data.sets.push(last);
          cur = (er || data.src) && stopParent.test(data.srcset || "");
          if (!cur) {
            if (!!data.src) {
              if (!$(data.src, last)) {
                if (!last.has1x) {
                  last.srcset += ", " + data.src;
                  last.cands.push({
                    url : data.src,
                    d : 1,
                    set : last
                  });
                }
              }
            }
          }
        } else {
          if (data.src) {
            data.sets.push({
              srcset : data.src,
              sizes : null
            });
          }
        }
        /** @type {null} */
        data.curCan = null;
        /** @type {number} */
        data.curSrc = url;
        /** @type {boolean} */
        data.supported = !(nType || (last && !self.supSrcset || cur && !self.supSizes));
        if (o) {
          if (self.supSrcset) {
            if (!data.supported) {
              if (i) {
                src.call(img, position, i);
                /** @type {string} */
                img.srcset = "";
              } else {
                callback.call(img, position);
              }
            }
          }
        }
        if (data.supported) {
          if (!data.srcset) {
            if (!data.src && img.src || img.src !== self.makeUrl(data.src)) {
              if (null === data.src) {
                img.removeAttribute("src");
              } else {
                img.src = data.src;
              }
            }
          }
        }
        /** @type {boolean} */
        data.parsed = true;
      };
      /**
       * @param {Object} v
       * @param {Element} action
       * @return {undefined}
       */
      self.fillImg = function(v, action) {
        var e;
        var n = action.reselect || action.reevaluate;
        if (!v[self.ns]) {
          v[self.ns] = {};
        }
        e = v[self.ns];
        if (n || e.evaled !== id) {
          if (!(e.parsed && !action.reevaluate)) {
            self.parseSets(v, v.parentNode, action);
          }
          if (e.supported) {
            e.evaled = id;
          } else {
            isDate(v);
          }
        }
      };
      /**
       * @return {undefined}
       */
      self.setupRun = function() {
        if (!(Y && (!inParam && c === global.devicePixelRatio))) {
          init();
        }
      };
      if (self.supPicture) {
        /** @type {function (): undefined} */
        render = func;
        /** @type {function (): undefined} */
        self.fillImg = func;
      } else {
        !function() {
          var thisp;
          /** @type {RegExp} */
          var reWhitespace = global.attachEvent ? /d$|^c/ : /d$|^c|^i/;
          /**
           * @return {undefined}
           */
          var restoreScript = function load() {
            /** @type {string} */
            var left = doc.readyState || "";
            /** @type {number} */
            to = setTimeout(load, "loading" === left ? 200 : 999);
            if (doc.body) {
              self.fillImgs();
              thisp = thisp || reWhitespace.test(left);
              if (thisp) {
                clearTimeout(to);
              }
            }
          };
          /** @type {number} */
          var to = setTimeout(restoreScript, doc.body ? 9 : 99);
          /**
           * @param {Function} fn
           * @param {number} delay
           * @return {?}
           */
          var throttle = function(fn, delay) {
            var timeout;
            var timestamp;
            /**
             * @return {undefined}
             */
            var later = function later() {
              /** @type {number} */
              var timeDiff = new Date - timestamp;
              if (timeDiff < delay) {
                /** @type {number} */
                timeout = setTimeout(later, delay - timeDiff);
              } else {
                /** @type {null} */
                timeout = null;
                fn();
              }
            };
            return function() {
              /** @type {Date} */
              timestamp = new Date;
              if (!timeout) {
                /** @type {number} */
                timeout = setTimeout(later, delay);
              }
            };
          };
          /** @type {number} */
          var browserHeight = testEl.clientHeight;
          /**
           * @return {undefined}
           */
          var onMouseMove = function() {
            /** @type {boolean} */
            inParam = Math.max(global.innerWidth || 0, testEl.clientWidth) !== data.width || testEl.clientHeight !== browserHeight;
            /** @type {number} */
            browserHeight = testEl.clientHeight;
            if (inParam) {
              self.fillImgs();
            }
          };
          addEvent(global, "resize", throttle(onMouseMove, 99));
          addEvent(doc, "readystatechange", restoreScript);
        }();
      }
      /** @type {function (Object): undefined} */
      self.picturefill = render;
      /** @type {function (Object): undefined} */
      self.fillImgs = render;
      /** @type {function (): undefined} */
      self.teardownRun = func;
      render._ = self;
      global.picturefillCFG = {
        pf : self,
        /**
         * @param {?} name
         * @return {undefined}
         */
        push : function(name) {
          var i = name.shift();
          if ("function" == typeof self[i]) {
            self[i].apply(self, name);
          } else {
            cfg[i] = name[0];
            if (Y) {
              self.fillImgs({
                reselect : true
              });
            }
          }
        }
      };
      for (;res && res.length;) {
        global.picturefillCFG.push(res.shift());
      }
      /** @type {function (Object): undefined} */
      global.picturefill = render;
      if ("object" === expect(module) && "object" === expect(module.exports)) {
        /** @type {function (Object): undefined} */
        module.exports = render;
      } else {
        val = function() {
          return render;
        }.call(model, i, model, module);
        !(val !== url && (module.exports = val));
      }
      if (!self.supPicture) {
        types["image/webp"] = getImage("image/webp", "data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==");
      }
    })(window, document);
  }).call(model, i(2)(stdout));
}, function(dataAndEvents, next_scope, callback) {
  (function(jQuery) {
    /** @type {function ((Object|string)): ?} */
    var progress = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(property) {
      return typeof property;
    } : function(b) {
      return b && ("function" == typeof Symbol && b.constructor === Symbol) ? "symbol" : typeof b;
    };
    !function($) {
      /**
       * @param {string} elem
       * @param {?} opt_attributes
       * @return {undefined}
       */
      var Typed = function(elem, opt_attributes) {
        this.el = $(elem);
        this.options = $.extend({}, $.fn.typed.defaults, opt_attributes);
        this.isInput = this.el.is("input");
        this.attr = this.options.attr;
        this.showCursor = !this.isInput && this.options.showCursor;
        this.elContent = this.attr ? this.el.attr(this.attr) : this.el.text();
        this.contentType = this.options.contentType;
        this.typeSpeed = this.options.typeSpeed;
        this.startDelay = this.options.startDelay;
        this.backSpeed = this.options.backSpeed;
        this.backDelay = this.options.backDelay;
        this.stringsElement = this.options.stringsElement;
        this.strings = this.options.strings;
        /** @type {number} */
        this.strPos = 0;
        /** @type {number} */
        this.arrayPos = 0;
        /** @type {number} */
        this.stopNum = 0;
        this.loop = this.options.loop;
        this.loopCount = this.options.loopCount;
        /** @type {number} */
        this.curLoop = 0;
        /** @type {boolean} */
        this.stop = false;
        this.cursorChar = this.options.cursorChar;
        this.shuffle = this.options.shuffle;
        /** @type {Array} */
        this.sequence = [];
        this.build();
      };
      Typed.prototype = {
        /** @type {function (string, ?): undefined} */
        constructor : Typed,
        /**
         * @return {undefined}
         */
        init : function() {
          var self = this;
          /** @type {number} */
          self.timeout = setTimeout(function() {
            /** @type {number} */
            var i = 0;
            for (;i < self.strings.length;++i) {
              /** @type {number} */
              self.sequence[i] = i;
            }
            if (self.shuffle) {
              self.sequence = self.shuffleArray(self.sequence);
            }
            self.typewrite(self.strings[self.sequence[self.arrayPos]], self.strPos);
          }, self.startDelay);
        },
        /**
         * @return {undefined}
         */
        build : function() {
          var self = this;
          if (this.showCursor === true && (this.cursor = $('<span class="typed-cursor">' + this.cursorChar + "</span>"), this.el.after(this.cursor)), this.stringsElement) {
            /** @type {Array} */
            self.strings = [];
            this.stringsElement.hide();
            var attributes = this.stringsElement.find("p");
            $.each(attributes, function(dataAndEvents, element) {
              self.strings.push($(element).html());
            });
          }
          this.init();
        },
        /**
         * @param {string} str
         * @param {?} pos
         * @return {undefined}
         */
        typewrite : function(str, pos) {
          if (this.stop !== true) {
            var timeout = Math.round(70 * Math.random()) + this.typeSpeed;
            var self = this;
            /** @type {number} */
            self.timeout = setTimeout(function() {
              /** @type {number} */
              var timeout = 0;
              var token = str.substr(pos);
              if ("^" === token.charAt(0)) {
                /** @type {number} */
                var i = 1;
                if (/^\^\d+/.test(token)) {
                  /** @type {string} */
                  token = /\d+/.exec(token)[0];
                  i += token.length;
                  /** @type {number} */
                  timeout = parseInt(token);
                }
                str = str.substring(0, pos) + str.substring(pos + i);
              }
              if ("html" === self.contentType) {
                var preceding = str.substr(pos).charAt(0);
                if ("<" === preceding || "&" === preceding) {
                  /** @type {string} */
                  var optsData = "";
                  /** @type {string} */
                  var buf = "";
                  /** @type {string} */
                  buf = "<" === preceding ? ">" : ";";
                  for (;str.substr(pos).charAt(0) !== buf;) {
                    optsData += str.substr(pos).charAt(0);
                    pos++;
                  }
                  pos++;
                  optsData += buf;
                }
              }
              /** @type {number} */
              self.timeout = setTimeout(function() {
                if (pos === str.length) {
                  if (self.options.onStringTyped(self.arrayPos), self.arrayPos === self.strings.length - 1 && (self.options.callback(), self.curLoop++, self.loop === false || self.curLoop === self.loopCount)) {
                    return;
                  }
                  /** @type {number} */
                  self.timeout = setTimeout(function() {
                    self.backspace(str, pos);
                  }, self.backDelay);
                } else {
                  if (0 === pos) {
                    self.options.preStringTyped(self.arrayPos);
                  }
                  var name = str.substr(0, pos + 1);
                  if (self.attr) {
                    self.el.attr(self.attr, name);
                  } else {
                    if (self.isInput) {
                      self.el.val(name);
                    } else {
                      if ("html" === self.contentType) {
                        self.el.html(name);
                      } else {
                        self.el.text(name);
                      }
                    }
                  }
                  pos++;
                  self.typewrite(str, pos);
                }
              }, timeout);
            }, timeout);
          }
        },
        /**
         * @param {string} curString
         * @param {?} curStrPos
         * @return {undefined}
         */
        backspace : function(curString, curStrPos) {
          if (this.stop !== true) {
            var timeout = Math.round(70 * Math.random()) + this.backSpeed;
            var self = this;
            /** @type {number} */
            self.timeout = setTimeout(function() {
              if ("html" === self.contentType && ">" === curString.substr(curStrPos).charAt(0)) {
                /** @type {string} */
                var optsData = "";
                for (;"<" !== curString.substr(curStrPos).charAt(0);) {
                  optsData -= curString.substr(curStrPos).charAt(0);
                  curStrPos--;
                }
                curStrPos--;
                optsData += "<";
              }
              var name = curString.substr(0, curStrPos);
              if (self.attr) {
                self.el.attr(self.attr, name);
              } else {
                if (self.isInput) {
                  self.el.val(name);
                } else {
                  if ("html" === self.contentType) {
                    self.el.html(name);
                  } else {
                    self.el.text(name);
                  }
                }
              }
              if (curStrPos > self.stopNum) {
                curStrPos--;
                self.backspace(curString, curStrPos);
              } else {
                if (curStrPos <= self.stopNum) {
                  self.arrayPos++;
                  if (self.arrayPos === self.strings.length) {
                    /** @type {number} */
                    self.arrayPos = 0;
                    if (self.shuffle) {
                      self.sequence = self.shuffleArray(self.sequence);
                    }
                    self.init();
                  } else {
                    self.typewrite(self.strings[self.sequence[self.arrayPos]], curStrPos);
                  }
                }
              }
            }, timeout);
          }
        },
        /**
         * @param {Array} array
         * @return {?}
         */
        shuffleArray : function(array) {
          var tmp;
          var current;
          var top = array.length;
          if (top) {
            for (;--top;) {
              /** @type {number} */
              current = Math.floor(Math.random() * (top + 1));
              tmp = array[current];
              array[current] = array[top];
              array[top] = tmp;
            }
          }
          return array;
        },
        /**
         * @return {undefined}
         */
        reset : function() {
          var $this = this;
          clearInterval($this.timeout);
          var targetNode = this.el.attr("id");
          this.el.after('<span id="' + targetNode + '"/>');
          this.el.remove();
          if ("undefined" != typeof this.cursor) {
            this.cursor.remove();
          }
          $this.options.resetCallback();
        }
      };
      /**
       * @param {(Object|string)} index
       * @return {?}
       */
      $.fn.typed = function(index) {
        return this.each(function() {
          var $this = $(this);
          var data = $this.data("typed");
          var options = "object" == ("undefined" == typeof index ? "undefined" : progress(index)) && index;
          if (!data) {
            $this.data("typed", data = new Typed(this, options));
          }
          if ("string" == typeof index) {
            data[index]();
          }
        });
      };
      $.fn.typed.defaults = {
        strings : ["These are the default values...", "You know what you should do?", "Use your own!", "Have a great day!"],
        stringsElement : null,
        typeSpeed : 0,
        startDelay : 0,
        backSpeed : 0,
        shuffle : false,
        backDelay : 500,
        loop : false,
        loopCount : false,
        showCursor : true,
        cursorChar : "|",
        attr : null,
        contentType : "html",
        /**
         * @return {undefined}
         */
        callback : function() {
        },
        /**
         * @return {undefined}
         */
        preStringTyped : function() {
        },
        /**
         * @return {undefined}
         */
        onStringTyped : function() {
        },
        /**
         * @return {undefined}
         */
        resetCallback : function() {
        }
      };
    }(jQuery);
  }).call(next_scope, callback(1));
}, function(dataAndEvents, next_scope, callback) {
  (function(jQuery) {
    /** @type {function (Object): ?} */
    var reset = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(tests) {
      return typeof tests;
    } : function(object) {
      return object && ("function" == typeof Symbol && object.constructor === Symbol) ? "symbol" : typeof object;
    };
    !function($) {
      var methods = {
        /**
         * @param {string} type
         * @return {?}
         */
        init : function(type) {
          return this.each(function() {
            this.self = $(this);
            methods.destroy.call(this.self);
            this.opt = $.extend(true, {}, $.fn.raty.defaults, type);
            methods._adjustCallback.call(this);
            methods._adjustNumber.call(this);
            methods._adjustHints.call(this);
            this.opt.score = methods._adjustedScore.call(this, this.opt.score);
            if ("img" !== this.opt.starType) {
              methods._adjustStarType.call(this);
            }
            methods._adjustPath.call(this);
            methods._createStars.call(this);
            if (this.opt.cancel) {
              methods._createCancel.call(this);
            }
            if (this.opt.precision) {
              methods._adjustPrecision.call(this);
            }
            methods._createScore.call(this);
            methods._apply.call(this, this.opt.score);
            methods._setTitle.call(this, this.opt.score);
            methods._target.call(this, this.opt.score);
            if (this.opt.readOnly) {
              methods._lock.call(this);
            } else {
              /** @type {string} */
              this.style.cursor = "pointer";
              methods._binds.call(this);
            }
          });
        },
        /**
         * @return {undefined}
         */
        _adjustCallback : function() {
          /** @type {Array} */
          var inits = ["number", "readOnly", "score", "scoreName", "target", "path"];
          /** @type {number} */
          var i = 0;
          for (;i < inits.length;i++) {
            if ("function" == typeof this.opt[inits[i]]) {
              this.opt[inits[i]] = this.opt[inits[i]].call(this);
            }
          }
        },
        /**
         * @param {Document} id
         * @return {?}
         */
        _adjustedScore : function(id) {
          return id ? methods._between(id, 0, this.opt.number) : id;
        },
        /**
         * @return {undefined}
         */
        _adjustHints : function() {
          if (this.opt.hints || (this.opt.hints = []), this.opt.halfShow || this.opt.half) {
            /** @type {number} */
            var kl = this.opt.precision ? 10 : 2;
            /** @type {number} */
            var i = 0;
            for (;i < this.opt.number;i++) {
              var vals = this.opt.hints[i];
              if ("[object Array]" !== Object.prototype.toString.call(vals)) {
                /** @type {Array} */
                vals = [vals];
              }
              /** @type {Array} */
              this.opt.hints[i] = [];
              /** @type {number} */
              var k = 0;
              for (;k < kl;k++) {
                var v = vals[k];
                var val = vals[vals.length - 1];
                if (void 0 === val) {
                  /** @type {null} */
                  val = null;
                }
                this.opt.hints[i][k] = void 0 === v ? val : v;
              }
            }
          }
        },
        /**
         * @return {undefined}
         */
        _adjustNumber : function() {
          this.opt.number = methods._between(this.opt.number, 1, this.opt.numberMax);
        },
        /**
         * @return {undefined}
         */
        _adjustPath : function() {
          this.opt.path = this.opt.path || "";
          if (this.opt.path) {
            if ("/" !== this.opt.path.charAt(this.opt.path.length - 1)) {
              this.opt.path += "/";
            }
          }
        },
        /**
         * @return {undefined}
         */
        _adjustPrecision : function() {
          /** @type {boolean} */
          this.opt.half = true;
        },
        /**
         * @return {undefined}
         */
        _adjustStarType : function() {
          /** @type {Array} */
          var codeSegments = ["cancelOff", "cancelOn", "starHalf", "starOff", "starOn"];
          /** @type {string} */
          this.opt.path = "";
          /** @type {number} */
          var i = 0;
          for (;i < codeSegments.length;i++) {
            this.opt[codeSegments[i]] = this.opt[codeSegments[i]].replace(".", "-");
          }
        },
        /**
         * @param {number} score
         * @return {undefined}
         */
        _apply : function(score) {
          methods._fill.call(this, score);
          if (score) {
            if (score > 0) {
              this.score.val(score);
            }
            methods._roundStars.call(this, score);
          }
        },
        /**
         * @param {(Document|Range|TextRange)} value
         * @param {number} min
         * @param {?} max
         * @return {?}
         */
        _between : function(value, min, max) {
          return Math.min(Math.max(parseFloat(value), min), max);
        },
        /**
         * @return {undefined}
         */
        _binds : function() {
          if (this.cancel) {
            methods._bindOverCancel.call(this);
            methods._bindClickCancel.call(this);
            methods._bindOutCancel.call(this);
          }
          methods._bindOver.call(this);
          methods._bindClick.call(this);
          methods._bindOut.call(this);
        },
        /**
         * @return {undefined}
         */
        _bindClick : function() {
          var self = this;
          self.stars.on("click.raty", function(arg) {
            /** @type {boolean} */
            var value = true;
            var acc = self.opt.half || self.opt.precision ? self.self.data("score") : this.alt || $(this).data("alt");
            if (self.opt.click) {
              value = self.opt.click.call(self, +acc, arg);
            }
            if (value || void 0 === value) {
              if (self.opt.half) {
                if (!self.opt.precision) {
                  acc = methods._roundHalfScore.call(self, acc);
                }
              }
              methods._apply.call(self, acc);
            }
          });
        },
        /**
         * @return {undefined}
         */
        _bindClickCancel : function() {
          var self = this;
          self.cancel.on("click.raty", function(graphics) {
            self.score.removeAttr("value");
            if (self.opt.click) {
              self.opt.click.call(self, null, graphics);
            }
          });
        },
        /**
         * @return {undefined}
         */
        _bindOut : function() {
          var self = this;
          self.self.on("mouseleave.raty", function(graphics) {
            /** @type {(number|undefined)} */
            var prevTag = +self.score.val() || void 0;
            methods._apply.call(self, prevTag);
            methods._target.call(self, prevTag, graphics);
            methods._resetTitle.call(self);
            if (self.opt.mouseout) {
              self.opt.mouseout.call(self, prevTag, graphics);
            }
          });
        },
        /**
         * @return {undefined}
         */
        _bindOutCancel : function() {
          var self = this;
          self.cancel.on("mouseleave.raty", function(graphics) {
            var img = self.opt.cancelOff;
            if ("img" !== self.opt.starType && (img = self.opt.cancelClass + " " + img), methods._setIcon.call(self, this, img), self.opt.mouseout) {
              /** @type {(number|undefined)} */
              var prevTag = +self.score.val() || void 0;
              self.opt.mouseout.call(self, prevTag, graphics);
            }
          });
        },
        /**
         * @return {undefined}
         */
        _bindOver : function() {
          var self = this;
          /** @type {string} */
          var ready = self.opt.half ? "mousemove.raty" : "mouseover.raty";
          self.stars.on(ready, function(_super) {
            var pdataOld = methods._getScoreByPosition.call(self, _super, this);
            methods._fill.call(self, pdataOld);
            if (self.opt.half) {
              methods._roundStars.call(self, pdataOld, _super);
              methods._setTitle.call(self, pdataOld, _super);
              self.self.data("score", pdataOld);
            }
            methods._target.call(self, pdataOld, _super);
            if (self.opt.mouseover) {
              self.opt.mouseover.call(self, pdataOld, _super);
            }
          });
        },
        /**
         * @return {undefined}
         */
        _bindOverCancel : function() {
          var self = this;
          self.cancel.on("mouseover.raty", function(graphics) {
            var tr = self.opt.path + self.opt.starOff;
            var fromIndex = self.opt.cancelOn;
            if ("img" === self.opt.starType) {
              self.stars.attr("src", tr);
            } else {
              /** @type {string} */
              fromIndex = self.opt.cancelClass + " " + fromIndex;
              self.stars.attr("class", tr);
            }
            methods._setIcon.call(self, this, fromIndex);
            methods._target.call(self, null, graphics);
            if (self.opt.mouseover) {
              self.opt.mouseover.call(self, null);
            }
          });
        },
        /**
         * @return {?}
         */
        _buildScoreField : function() {
          return $("<input />", {
            name : this.opt.scoreName,
            type : "hidden"
          }).appendTo(this);
        },
        /**
         * @return {undefined}
         */
        _createCancel : function() {
          var pdataOld = this.opt.path + this.opt.cancelOff;
          var content = $("<" + this.opt.starType + " />", {
            title : this.opt.cancelHint,
            "class" : this.opt.cancelClass
          });
          if ("img" === this.opt.starType) {
            content.attr({
              src : pdataOld,
              alt : "x"
            });
          } else {
            content.attr("data-alt", "x").addClass(pdataOld);
          }
          if ("left" === this.opt.cancelPlace) {
            this.self.prepend("&#160;").prepend(content);
          } else {
            this.self.append("&#160;").append(content);
          }
          this.cancel = content;
        },
        /**
         * @return {undefined}
         */
        _createScore : function() {
          var errors = $(this.opt.targetScore);
          this.score = errors.length ? errors : methods._buildScoreField.call(this);
        },
        /**
         * @return {undefined}
         */
        _createStars : function() {
          /** @type {number} */
          var i = 1;
          for (;i <= this.opt.number;i++) {
            var icon = methods._nameForIndex.call(this, i);
            var options = {
              alt : i,
              src : this.opt.path + this.opt[icon]
            };
            if ("img" !== this.opt.starType) {
              options = {
                "data-alt" : i,
                "class" : options.src
              };
            }
            options.title = methods._getHint.call(this, i);
            $("<" + this.opt.starType + " />", options).appendTo(this);
            if (this.opt.space) {
              this.self.append(i < this.opt.number ? "&#160;" : "");
            }
          }
          this.stars = this.self.children(this.opt.starType);
        },
        /**
         * @param {string} optgroup
         * @return {undefined}
         */
        _error : function(optgroup) {
          $(this).text(optgroup);
          $.error(optgroup);
        },
        /**
         * @param {?} element
         * @return {undefined}
         */
        _fill : function(element) {
          /** @type {number} */
          var hash = 0;
          /** @type {number} */
          var i = 1;
          for (;i <= this.stars.length;i++) {
            var result;
            var prevTag = this.stars[i - 1];
            var handler = methods._turnOn.call(this, i, element);
            if (this.opt.iconRange && this.opt.iconRange.length > hash) {
              var node = this.opt.iconRange[hash];
              result = methods._getRangeIcon.call(this, node, handler);
              if (i <= node.range) {
                methods._setIcon.call(this, prevTag, result);
              }
              if (i === node.range) {
                hash++;
              }
            } else {
              result = this.opt[handler ? "starOn" : "starOff"];
              methods._setIcon.call(this, prevTag, result);
            }
          }
        },
        /**
         * @param {?} dstUri
         * @return {?}
         */
        _getFirstDecimal : function(dstUri) {
          var filter = dstUri.toString().split(".")[1];
          /** @type {number} */
          var nDigit = 0;
          return filter && (nDigit = parseInt(filter.charAt(0), 10), "9999" === filter.slice(1, 5) && nDigit++), nDigit;
        },
        /**
         * @param {Object} irange
         * @param {?} dataAndEvents
         * @return {?}
         */
        _getRangeIcon : function(irange, dataAndEvents) {
          return dataAndEvents ? irange.on || this.opt.starOn : irange.off || this.opt.starOff;
        },
        /**
         * @param {Object} e
         * @param {Object} element
         * @return {?}
         */
        _getScoreByPosition : function(e, element) {
          /** @type {number} */
          var c = parseInt(element.alt || element.getAttribute("data-alt"), 10);
          if (this.opt.half) {
            var slideHeight = methods._getWidth.call(this);
            /** @type {number} */
            var b = parseFloat((e.pageX - $(element).offset().left) / slideHeight);
            /** @type {number} */
            c = c - 1 + b;
          }
          return c;
        },
        /**
         * @param {number} score
         * @param {?} dataAndEvents
         * @return {?}
         */
        _getHint : function(score, dataAndEvents) {
          if (0 !== score && !score) {
            return this.opt.noRatedMsg;
          }
          var target = methods._getFirstDecimal.call(this, score);
          /** @type {number} */
          var scoreDom = Math.ceil(score);
          var data = this.opt.hints[(scoreDom || 1) - 1];
          var value = data;
          var count = !dataAndEvents || this.move;
          return this.opt.precision ? (count && (target = 0 === target ? 9 : target - 1), value = data[target]) : (this.opt.halfShow || this.opt.half) && (target = count && 0 === target ? 1 : target > 5 ? 1 : 0, value = data[target]), "" === value ? "" : value || score;
        },
        /**
         * @return {?}
         */
        _getWidth : function() {
          var t = this.stars[0].width || parseFloat(this.stars.eq(0).css("font-size"));
          return t || methods._error.call(this, "Could not get the icon width!"), t;
        },
        /**
         * @return {undefined}
         */
        _lock : function() {
          var name = methods._getHint.call(this, this.score.val());
          /** @type {string} */
          this.style.cursor = "";
          this.title = name;
          this.score.prop("readonly", true);
          this.stars.prop("title", name);
          if (this.cancel) {
            this.cancel.hide();
          }
          this.self.data("readonly", true);
        },
        /**
         * @param {?} i
         * @return {?}
         */
        _nameForIndex : function(i) {
          return this.opt.score && this.opt.score >= i ? "starOn" : "starOff";
        },
        /**
         * @param {?} dataAndEvents
         * @return {undefined}
         */
        _resetTitle : function(dataAndEvents) {
          /** @type {number} */
          var i = 0;
          for (;i < this.opt.number;i++) {
            this.stars[i].title = methods._getHint.call(this, i + 1);
          }
        },
        /**
         * @param {?} val
         * @return {?}
         */
        _roundHalfScore : function(val) {
          /** @type {number} */
          var year = parseInt(val, 10);
          var month = methods._getFirstDecimal.call(this, val);
          return 0 !== month && (month = month > 5 ? 1 : 0.5), year + month;
        },
        /**
         * @param {number} min
         * @param {string} dataAndEvents
         * @return {undefined}
         */
        _roundStars : function(min, dataAndEvents) {
          var icon;
          /** @type {string} */
          var rest = (min % 1).toFixed(2);
          if (dataAndEvents || this.move ? icon = rest > 0.5 ? "starOn" : "starHalf" : rest > this.opt.round.down && (icon = "starOn", this.opt.halfShow && rest < this.opt.round.up ? icon = "starHalf" : rest < this.opt.round.full && (icon = "starOff")), icon) {
            var fromIndex = this.opt[icon];
            var prevTag = this.stars[Math.ceil(min) - 1];
            methods._setIcon.call(this, prevTag, fromIndex);
          }
        },
        /**
         * @param {Array} n
         * @param {?} icon
         * @return {undefined}
         */
        _setIcon : function(n, icon) {
          n["img" === this.opt.starType ? "src" : "className"] = this.opt.path + icon;
        },
        /**
         * @param {Object} target
         * @param {string} href
         * @return {undefined}
         */
        _setTarget : function(target, href) {
          if (href) {
            href = this.opt.targetFormat.toString().replace("{score}", href);
          }
          if (target.is(":input")) {
            target.val(href);
          } else {
            target.html(href);
          }
        },
        /**
         * @param {?} value
         * @param {?} title
         * @return {undefined}
         */
        _setTitle : function(value, title) {
          if (value) {
            /** @type {number} */
            var charCodeToReplace = parseInt(Math.ceil(value), 10);
            var column = this.stars[charCodeToReplace - 1];
            column.title = methods._getHint.call(this, value, title);
          }
        },
        /**
         * @param {(Object|string)} score
         * @param {Function} evt
         * @return {undefined}
         */
        _target : function(score, evt) {
          if (this.opt.target) {
            var tbody = $(this.opt.target);
            if (!tbody.length) {
              methods._error.call(this, "Target selector invalid or missing!");
            }
            var mouseover = evt && "mouseover" === evt.type;
            if (void 0 === score) {
              score = this.opt.targetText;
            } else {
              if (null === score) {
                score = mouseover ? this.opt.cancelHint : this.opt.targetText;
              } else {
                if ("hint" === this.opt.targetType) {
                  score = methods._getHint.call(this, score, evt);
                } else {
                  if (this.opt.precision) {
                    /** @type {string} */
                    score = parseFloat(score).toFixed(1);
                  }
                }
                var type = evt && "mousemove" === evt.type;
                if (!mouseover) {
                  if (!type) {
                    if (!this.opt.targetKeep) {
                      score = this.opt.targetText;
                    }
                  }
                }
              }
            }
            methods._setTarget.call(this, tbody, score);
          }
        },
        /**
         * @param {number} i
         * @param {number} lastIdx
         * @return {?}
         */
        _turnOn : function(i, lastIdx) {
          return this.opt.single ? i === lastIdx : i <= lastIdx;
        },
        /**
         * @return {undefined}
         */
        _unlock : function() {
          /** @type {string} */
          this.style.cursor = "pointer";
          this.removeAttribute("title");
          this.score.removeAttr("readonly");
          this.self.data("readonly", false);
          /** @type {number} */
          var i = 0;
          for (;i < this.opt.number;i++) {
            this.stars[i].title = methods._getHint.call(this, i + 1);
          }
          if (this.cancel) {
            this.cancel.css("display", "");
          }
        },
        /**
         * @param {boolean} click
         * @return {?}
         */
        cancel : function(click) {
          return this.each(function() {
            var self = $(this);
            if (self.data("readonly") !== true) {
              methods[click ? "click" : "score"].call(self, null);
              this.score.removeAttr("value");
            }
          });
        },
        /**
         * @param {?} e
         * @return {?}
         */
        click : function(e) {
          return this.each(function() {
            if ($(this).data("readonly") !== true) {
              e = methods._adjustedScore.call(this, e);
              methods._apply.call(this, e);
              if (this.opt.click) {
                this.opt.click.call(this, e, $.Event("click"));
              }
              methods._target.call(this, e);
            }
          });
        },
        /**
         * @return {?}
         */
        destroy : function() {
          return this.each(function() {
            var that = $(this);
            var raw = that.data("raw");
            if (raw) {
              that.off(".raty").empty().css({
                cursor : raw.style.cursor
              }).removeData("readonly");
            } else {
              that.data("raw", that.clone()[0]);
            }
          });
        },
        /**
         * @return {?}
         */
        getScore : function() {
          var val;
          /** @type {Array} */
          var configList = [];
          return this.each(function() {
            val = this.score.val();
            configList.push(val ? +val : void 0);
          }), configList.length > 1 ? configList : configList[0];
        },
        /**
         * @param {?} msg
         * @return {?}
         */
        move : function(msg) {
          return this.each(function() {
            /** @type {number} */
            var j = parseInt(msg, 10);
            var pos = methods._getFirstDecimal.call(this, msg);
            if (j >= this.opt.number) {
              /** @type {number} */
              j = this.opt.number - 1;
              /** @type {number} */
              pos = 10;
            }
            var w_ = methods._getWidth.call(this);
            /** @type {number} */
            var width = w_ / 10;
            var $this = $(this.stars[j]);
            var pageX = $this.offset().left + width * pos;
            var type = $.Event("mousemove", {
              pageX : pageX
            });
            /** @type {boolean} */
            this.move = true;
            $this.trigger(type);
            /** @type {boolean} */
            this.move = false;
          });
        },
        /**
         * @param {?} isXML
         * @return {?}
         */
        readOnly : function(isXML) {
          return this.each(function() {
            var el = $(this);
            if (el.data("readonly") !== isXML) {
              if (isXML) {
                el.off(".raty").children("img").off(".raty");
                methods._lock.call(this);
              } else {
                methods._binds.call(this);
                methods._unlock.call(this);
              }
              el.data("readonly", isXML);
            }
          });
        },
        /**
         * @return {?}
         */
        reload : function() {
          return methods.set.call(this, {});
        },
        /**
         * @return {?}
         */
        score : function() {
          var value = $(this);
          return arguments.length ? methods.setScore.apply(value, arguments) : methods.getScore.call(value);
        },
        /**
         * @param {string} name
         * @return {?}
         */
        set : function(name) {
          return this.each(function() {
            $(this).raty($.extend({}, this.opt, name));
          });
        },
        /**
         * @param {?} score
         * @return {?}
         */
        setScore : function(score) {
          return this.each(function() {
            if ($(this).data("readonly") !== true) {
              score = methods._adjustedScore.call(this, score);
              methods._apply.call(this, score);
              methods._target.call(this, score);
            }
          });
        }
      };
      /**
       * @param {Object} method
       * @return {?}
       */
      $.fn.raty = function(method) {
        return methods[method] ? methods[method].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" !== ("undefined" == typeof method ? "undefined" : reset(method)) && method ? void $.error("Method " + method + " does not exist!") : methods.init.apply(this, arguments);
      };
      $.fn.raty.defaults = {
        cancel : false,
        cancelClass : "raty-cancel",
        cancelHint : "Cancel this rating!",
        cancelOff : "cancel-off.png",
        cancelOn : "cancel-on.png",
        cancelPlace : "left",
        click : void 0,
        half : false,
        halfShow : true,
        hints : ["bad", "poor", "regular", "good", "gorgeous"],
        iconRange : void 0,
        mouseout : void 0,
        mouseover : void 0,
        noRatedMsg : "Not rated yet!",
        number : 5,
        numberMax : 20,
        path : void 0,
        precision : false,
        readOnly : false,
        round : {
          down : 0.25,
          full : 0.6,
          up : 0.76
        },
        score : void 0,
        scoreName : "score",
        single : false,
        space : true,
        starHalf : "star-half.png",
        starOff : "star-off.png",
        starOn : "star-on.png",
        starType : "img",
        target : void 0,
        targetFormat : "{score}",
        targetKeep : false,
        targetScore : void 0,
        targetText : "",
        targetType : "hint"
      };
    }(jQuery);
  }).call(next_scope, callback(1));
}, function(module, me, $sanitize) {
  var args;
  var ret;
  !function(callback) {
    /** @type {Array} */
    args = [$sanitize(1)];
    ret = function(jQuery) {
      callback(jQuery, document, window, navigator);
    }.apply(me, args);
    !(void 0 !== ret && (module.exports = ret));
  }(function($, doc, win, navigator, dataAndEvents) {
    /** @type {number} */
    var r = 0;
    var o = function() {
      var s;
      var ua = navigator.userAgent;
      /** @type {RegExp} */
      var regexp = /msie\s\d+/i;
      return ua.search(regexp) > 0 && ((s = regexp.exec(ua).toString(), s = s.split(" ")[1], s < 9) && ($("html").addClass("lt-ie9"), true));
    }();
    if (!Function.prototype.bind) {
      /**
       * @param {(Object|null|undefined)} me
       * @return {Function}
       */
      Function.prototype.bind = function(me) {
        /** @type {Function} */
        var fn = this;
        /** @type {function (this:(Array.<T>|string|{length: number}), *=, *=): Array.<T>} */
        var __slice = [].slice;
        if ("function" != typeof fn) {
          throw new TypeError;
        }
        /** @type {Array.<?>} */
        var args = __slice.call(arguments, 1);
        /**
         * @return {?}
         */
        var Bound = function bound() {
          if (this instanceof bound) {
            /**
             * @return {undefined}
             */
            var F = function() {
            };
            F.prototype = fn.prototype;
            var self = new F;
            var result = fn.apply(self, args.concat(__slice.call(arguments)));
            return Object(result) === result ? result : self;
          }
          return fn.apply(me, args.concat(__slice.call(arguments)));
        };
        return Bound;
      };
    }
    if (!Array.prototype.indexOf) {
      /**
       * @param {string} name
       * @param {number=} isSorted
       * @return {number}
       * @template T
       */
      Array.prototype.indexOf = function(name, isSorted) {
        var i;
        if (null == this) {
          throw new TypeError('"this" is null or not defined');
        }
        var array = Object(this);
        /** @type {number} */
        var len = array.length >>> 0;
        if (0 === len) {
          return-1;
        }
        /** @type {number} */
        var n = +isSorted || 0;
        if (Math.abs(n) === 1 / 0 && (n = 0), n >= len) {
          return-1;
        }
        /** @type {number} */
        i = Math.max(n >= 0 ? n : len - Math.abs(n), 0);
        for (;i < len;) {
          if (i in array && array[i] === name) {
            return i;
          }
          i++;
        }
        return-1;
      };
    }
    /** @type {string} */
    var val = '<span class="irs"><span class="irs-line" tabindex="-1"><span class="irs-line-left"></span><span class="irs-line-mid"></span><span class="irs-line-right"></span></span><span class="irs-min">0</span><span class="irs-max">1</span><span class="irs-from">0</span><span class="irs-to">0</span><span class="irs-single">0</span></span><span class="irs-grid"></span><span class="irs-bar"></span>';
    /** @type {string} */
    var input = '<span class="irs-bar-edge"></span><span class="irs-shadow shadow-single"></span><span class="irs-slider single"></span>';
    /** @type {string} */
    var line = '<span class="irs-shadow shadow-from"></span><span class="irs-shadow shadow-to"></span><span class="irs-slider from"></span><span class="irs-slider to"></span>';
    /** @type {string} */
    var template = '<span class="irs-disable-mask"></span>';
    /**
     * @param {Object} select
     * @param {Object} config
     * @param {string} allBindingsAccessor
     * @return {undefined}
     */
    var init = function(select, config, allBindingsAccessor) {
      /** @type {string} */
      this.VERSION = "2.1.4";
      /** @type {Object} */
      this.input = select;
      /** @type {string} */
      this.plugin_count = allBindingsAccessor;
      /** @type {number} */
      this.current_plugin = 0;
      /** @type {number} */
      this.calc_count = 0;
      /** @type {number} */
      this.update_tm = 0;
      /** @type {number} */
      this.old_from = 0;
      /** @type {number} */
      this.old_to = 0;
      /** @type {null} */
      this.old_min_interval = null;
      /** @type {null} */
      this.raf_id = null;
      /** @type {boolean} */
      this.dragging = false;
      /** @type {boolean} */
      this.force_redraw = false;
      /** @type {boolean} */
      this.no_diapason = false;
      /** @type {boolean} */
      this.is_key = false;
      /** @type {boolean} */
      this.is_update = false;
      /** @type {boolean} */
      this.is_start = true;
      /** @type {boolean} */
      this.is_finish = false;
      /** @type {boolean} */
      this.is_active = false;
      /** @type {boolean} */
      this.is_resize = false;
      /** @type {boolean} */
      this.is_click = false;
      this.$cache = {
        win : $(win),
        body : $(doc.body),
        input : $(select),
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
      var opts;
      var options;
      var ev;
      var input = this.$cache.input;
      var values = input.prop("value");
      opts = {
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
      options = {
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
      options.values = options.values && options.values.split(",");
      for (ev in options) {
        if (options.hasOwnProperty(ev)) {
          if (!options[ev]) {
            if (!(0 === options[ev])) {
              delete options[ev];
            }
          }
        }
      }
      if (values) {
        values = values.split(options.input_values_separator || (config.input_values_separator || ";"));
        if (values[0]) {
          if (values[0] == +values[0]) {
            /** @type {number} */
            values[0] = +values[0];
          }
        }
        if (values[1]) {
          if (values[1] == +values[1]) {
            /** @type {number} */
            values[1] = +values[1];
          }
        }
        if (config && (config.values && config.values.length)) {
          opts.from = values[0] && config.values.indexOf(values[0]);
          opts.to = values[1] && config.values.indexOf(values[1]);
        } else {
          opts.from = values[0] && +values[0];
          opts.to = values[1] && +values[1];
        }
      }
      $.extend(opts, config);
      $.extend(opts, options);
      this.options = opts;
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
       * @param {string} type
       * @return {undefined}
       */
      init : function(type) {
        /** @type {boolean} */
        this.no_diapason = false;
        this.coords.p_step = this.convertToPercent(this.options.step, true);
        /** @type {string} */
        this.target = "base";
        this.toggleInput();
        this.append();
        this.setMinMax();
        if (type) {
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
        /** @type {string} */
        var grape = '<span class="irs js-irs-' + this.plugin_count + '"></span>';
        this.$cache.input.before(grape);
        this.$cache.input.prop("readonly", true);
        this.$cache.cont = this.$cache.input.prev();
        this.result.slider = this.$cache.cont;
        this.$cache.cont.html(val);
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
          this.$cache.cont.append(input);
          this.$cache.edge = this.$cache.cont.find(".irs-bar-edge");
          this.$cache.s_single = this.$cache.cont.find(".single");
          /** @type {string} */
          this.$cache.from[0].style.visibility = "hidden";
          /** @type {string} */
          this.$cache.to[0].style.visibility = "hidden";
          this.$cache.shad_single = this.$cache.cont.find(".shadow-single");
        } else {
          this.$cache.cont.append(line);
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
        var len = this.options.min;
        var b = this.options.max;
        var offset = this.options.from;
        var a = this.options.to;
        if (offset > len && a === b) {
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
        this.$cache.cont.append(template);
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
        if (o) {
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
          if (o) {
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
          var coords = e.pageX || e.originalEvent.touches && e.originalEvent.touches[0].pageX;
          /** @type {number} */
          this.coords.x_pointer = coords - this.coords.x_gap;
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
            if (o) {
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
          this.is_active = true;
          /** @type {boolean} */
          this.dragging = true;
          this.coords.x_gap = this.$cache.rs.offset().left;
          /** @type {number} */
          this.coords.x_pointer = coords - this.coords.x_gap;
          this.calcPointerPercent();
          this.changeLevel(deepDataAndEvents);
          if (o) {
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
       * @param {boolean} recurring
       * @return {undefined}
       */
      moveByKey : function(recurring) {
        var pos = this.coords.p_pointer;
        if (recurring) {
          pos += this.options.keyboard_step;
        } else {
          pos -= this.options.keyboard_step;
        }
        this.coords.x_pointer = this.toFixed(this.coords.w_rs / 100 * pos);
        /** @type {boolean} */
        this.is_key = true;
        this.calc();
      },
      /**
       * @return {?}
       */
      setMinMax : function() {
        if (this.options) {
          if (this.options.hide_min_max) {
            return this.$cache.min[0].style.display = "none", void(this.$cache.max[0].style.display = "none");
          }
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
       * @param {boolean} dataAndEvents
       * @return {undefined}
       */
      calc : function(dataAndEvents) {
        if (this.options && (this.calc_count++, (10 === this.calc_count || dataAndEvents) && (this.calc_count = 0, this.coords.w_rs = this.$cache.rs.outerWidth(false), this.calcHandlePercent()), this.coords.w_rs)) {
          this.calcPointerPercent();
          var target = this.getHandleX();
          switch("click" === this.target && (this.coords.p_gap = this.coords.p_handle / 2, target = this.getHandleX(), this.options.drag_interval ? this.target = "both_one" : this.target = this.chooseHandle(target)), this.target) {
            case "base":
              /** @type {number} */
              var binWidth = (this.options.max - this.options.min) / 100;
              /** @type {number} */
              var e = (this.result.from - this.options.min) / binWidth;
              /** @type {number} */
              var n = (this.result.to - this.options.min) / binWidth;
              this.coords.p_single_real = this.toFixed(e);
              this.coords.p_from_real = this.toFixed(e);
              this.coords.p_to_real = this.toFixed(n);
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
              this.coords.p_single_real = this.convertToRealPercent(target);
              this.coords.p_single_real = this.calcWithStep(this.coords.p_single_real);
              this.coords.p_single_real = this.checkDiapason(this.coords.p_single_real, this.options.from_min, this.options.from_max);
              this.coords.p_single_fake = this.convertToFakePercent(this.coords.p_single_real);
              break;
            case "from":
              if (this.options.from_fixed) {
                break;
              }
              this.coords.p_from_real = this.convertToRealPercent(target);
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
              this.coords.p_to_real = this.convertToRealPercent(target);
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
              target = this.toFixed(target + 0.1 * this.coords.p_handle);
              /** @type {number} */
              this.coords.p_from_real = this.convertToRealPercent(target) - this.coords.p_gap_left;
              this.coords.p_from_real = this.calcWithStep(this.coords.p_from_real);
              this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max);
              this.coords.p_from_real = this.checkMinInterval(this.coords.p_from_real, this.coords.p_to_real, "from");
              this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real);
              this.coords.p_to_real = this.convertToRealPercent(target) + this.coords.p_gap_right;
              this.coords.p_to_real = this.calcWithStep(this.coords.p_to_real);
              this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max);
              this.coords.p_to_real = this.checkMinInterval(this.coords.p_to_real, this.coords.p_from_real, "to");
              this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real);
              break;
            case "both_one":
              if (this.options.from_fixed || this.options.to_fixed) {
                break;
              }
              var a = this.convertToRealPercent(target);
              var posTimeline = this.result.from_percent;
              var posElem = this.result.to_percent;
              /** @type {number} */
              var l = posElem - posTimeline;
              /** @type {number} */
              var b = l / 2;
              /** @type {number} */
              var r = a - b;
              var c = a + b;
              if (r < 0) {
                /** @type {number} */
                r = 0;
                /** @type {number} */
                c = r + l;
              }
              if (c > 100) {
                /** @type {number} */
                c = 100;
                /** @type {number} */
                r = c - l;
              }
              this.coords.p_from_real = this.calcWithStep(r);
              this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max);
              this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real);
              this.coords.p_to_real = this.calcWithStep(c);
              this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max);
              this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real);
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
       * @return {?}
       */
      calcPointerPercent : function() {
        return this.coords.w_rs ? (this.coords.x_pointer < 0 || isNaN(this.coords.x_pointer) ? this.coords.x_pointer = 0 : this.coords.x_pointer > this.coords.w_rs && (this.coords.x_pointer = this.coords.w_rs), void(this.coords.p_pointer = this.toFixed(this.coords.x_pointer / this.coords.w_rs * 100))) : void(this.coords.p_pointer = 0);
      },
      /**
       * @param {number} a
       * @return {?}
       */
      convertToRealPercent : function(a) {
        /** @type {number} */
        var b = 100 - this.coords.p_handle;
        return a / b * 100;
      },
      /**
       * @param {?} c
       * @return {?}
       */
      convertToFakePercent : function(c) {
        /** @type {number} */
        var t = 100 - this.coords.p_handle;
        return c / 100 * t;
      },
      /**
       * @return {?}
       */
      getHandleX : function() {
        /** @type {number} */
        var maxDelay = 100 - this.coords.p_handle;
        var delay = this.toFixed(this.coords.p_pointer - this.coords.p_gap);
        return delay < 0 ? delay = 0 : delay > maxDelay && (delay = maxDelay), delay;
      },
      /**
       * @return {undefined}
       */
      calcHandlePercent : function() {
        if ("single" === this.options.type) {
          this.coords.w_handle = this.$cache.s_single.outerWidth(false);
        } else {
          this.coords.w_handle = this.$cache.s_from.outerWidth(false);
        }
        this.coords.p_handle = this.toFixed(this.coords.w_handle / this.coords.w_rs * 100);
      },
      /**
       * @param {?} from
       * @return {?}
       */
      chooseHandle : function(from) {
        if ("single" === this.options.type) {
          return "single";
        }
        var to = this.coords.p_from_real + (this.coords.p_to_real - this.coords.p_from_real) / 2;
        return from >= to ? this.options.to_fixed ? "from" : "to" : this.options.from_fixed ? "to" : "from";
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
              this.labels.p_single_left = this.checkEdges(this.labels.p_single_left, this.labels.p_single_fake);
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
              this.labels.p_single_left = this.checkEdges(this.labels.p_single_left, this.labels.p_single_fake);
            }
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
                  this.is_key = false;
                  /** @type {boolean} */
                  this.is_click = false;
                  this.callOnFinish();
                }
                /** @type {boolean} */
                this.is_update = false;
                /** @type {boolean} */
                this.is_resize = false;
                /** @type {boolean} */
                this.is_finish = false;
              }
              /** @type {boolean} */
              this.is_start = false;
              /** @type {boolean} */
              this.is_key = false;
              /** @type {boolean} */
              this.is_click = false;
              /** @type {boolean} */
              this.force_redraw = false;
            }
          }
        }
      },
      /**
       * @return {undefined}
       */
      drawLabels : function() {
        if (this.options) {
          var val;
          var text;
          var str;
          var cnl = this.options.values.length;
          var height = this.options.p_values;
          if (!this.options.hide_from_to) {
            if ("single" === this.options.type) {
              if (cnl) {
                val = this.decorate(height[this.result.from]);
                this.$cache.single.html(val);
              } else {
                val = this.decorate(this._prettify(this.result.from), this.result.from);
                this.$cache.single.html(val);
              }
              this.calcLabels();
              if (this.labels.p_single_left < this.labels.p_min + 1) {
                /** @type {string} */
                this.$cache.min[0].style.visibility = "hidden";
              } else {
                /** @type {string} */
                this.$cache.min[0].style.visibility = "visible";
              }
              if (this.labels.p_single_left + this.labels.p_single_fake > 100 - this.labels.p_max - 1) {
                /** @type {string} */
                this.$cache.max[0].style.visibility = "hidden";
              } else {
                /** @type {string} */
                this.$cache.max[0].style.visibility = "visible";
              }
            } else {
              if (cnl) {
                if (this.options.decorate_both) {
                  val = this.decorate(height[this.result.from]);
                  val += this.options.values_separator;
                  val += this.decorate(height[this.result.to]);
                } else {
                  val = this.decorate(height[this.result.from] + this.options.values_separator + height[this.result.to]);
                }
                text = this.decorate(height[this.result.from]);
                str = this.decorate(height[this.result.to]);
                this.$cache.single.html(val);
                this.$cache.from.html(text);
                this.$cache.to.html(str);
              } else {
                if (this.options.decorate_both) {
                  val = this.decorate(this._prettify(this.result.from), this.result.from);
                  val += this.options.values_separator;
                  val += this.decorate(this._prettify(this.result.to), this.result.to);
                } else {
                  val = this.decorate(this._prettify(this.result.from) + this.options.values_separator + this._prettify(this.result.to), this.result.to);
                }
                text = this.decorate(this._prettify(this.result.from), this.result.from);
                str = this.decorate(this._prettify(this.result.to), this.result.to);
                this.$cache.single.html(val);
                this.$cache.from.html(text);
                this.$cache.to.html(str);
              }
              this.calcLabels();
              /** @type {number} */
              var r = Math.min(this.labels.p_single_left, this.labels.p_from_left);
              var value = this.labels.p_single_left + this.labels.p_single_fake;
              var index = this.labels.p_to_left + this.labels.p_to_fake;
              /** @type {number} */
              var current = Math.max(value, index);
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
                  current = Math.max(value, index);
                }
              } else {
                /** @type {string} */
                this.$cache.from[0].style.visibility = "visible";
                /** @type {string} */
                this.$cache.to[0].style.visibility = "visible";
                /** @type {string} */
                this.$cache.single[0].style.visibility = "hidden";
              }
              if (r < this.labels.p_min + 1) {
                /** @type {string} */
                this.$cache.min[0].style.visibility = "hidden";
              } else {
                /** @type {string} */
                this.$cache.min[0].style.visibility = "visible";
              }
              if (current > 100 - this.labels.p_max - 1) {
                /** @type {string} */
                this.$cache.max[0].style.visibility = "hidden";
              } else {
                /** @type {string} */
                this.$cache.max[0].style.visibility = "visible";
              }
            }
          }
        }
      },
      /**
       * @return {undefined}
       */
      drawShadow : function() {
        var left;
        var w;
        var x;
        var maxWidth;
        var options = this.options;
        var $cache = this.$cache;
        /** @type {boolean} */
        var success = "number" == typeof options.from_min && !isNaN(options.from_min);
        /** @type {boolean} */
        var fail = "number" == typeof options.from_max && !isNaN(options.from_max);
        /** @type {boolean} */
        var orig = "number" == typeof options.to_min && !isNaN(options.to_min);
        /** @type {boolean} */
        var path = "number" == typeof options.to_max && !isNaN(options.to_max);
        if ("single" === options.type) {
          if (options.from_shadow && (success || fail)) {
            left = this.convertToPercent(success ? options.from_min : options.min);
            /** @type {number} */
            w = this.convertToPercent(fail ? options.from_max : options.max) - left;
            left = this.toFixed(left - this.coords.p_handle / 100 * left);
            w = this.toFixed(w - this.coords.p_handle / 100 * w);
            left += this.coords.p_handle / 2;
            /** @type {string} */
            $cache.shad_single[0].style.display = "block";
            /** @type {string} */
            $cache.shad_single[0].style.left = left + "%";
            /** @type {string} */
            $cache.shad_single[0].style.width = w + "%";
          } else {
            /** @type {string} */
            $cache.shad_single[0].style.display = "none";
          }
        } else {
          if (options.from_shadow && (success || fail)) {
            left = this.convertToPercent(success ? options.from_min : options.min);
            /** @type {number} */
            w = this.convertToPercent(fail ? options.from_max : options.max) - left;
            left = this.toFixed(left - this.coords.p_handle / 100 * left);
            w = this.toFixed(w - this.coords.p_handle / 100 * w);
            left += this.coords.p_handle / 2;
            /** @type {string} */
            $cache.shad_from[0].style.display = "block";
            /** @type {string} */
            $cache.shad_from[0].style.left = left + "%";
            /** @type {string} */
            $cache.shad_from[0].style.width = w + "%";
          } else {
            /** @type {string} */
            $cache.shad_from[0].style.display = "none";
          }
          if (options.to_shadow && (orig || path)) {
            x = this.convertToPercent(orig ? options.to_min : options.min);
            /** @type {number} */
            maxWidth = this.convertToPercent(path ? options.to_max : options.max) - x;
            x = this.toFixed(x - this.coords.p_handle / 100 * x);
            maxWidth = this.toFixed(maxWidth - this.coords.p_handle / 100 * maxWidth);
            x += this.coords.p_handle / 2;
            /** @type {string} */
            $cache.shad_to[0].style.display = "block";
            /** @type {string} */
            $cache.shad_to[0].style.left = x + "%";
            /** @type {string} */
            $cache.shad_to[0].style.width = maxWidth + "%";
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
        var i;
        var j;
        /** @type {number} */
        var dx = this.options.max - this.options.min;
        /** @type {number} */
        var div = dx / 100;
        return dx ? (i = raw ? value : value - this.options.min, j = i / div, this.toFixed(j)) : (this.no_diapason = true, 0);
      },
      /**
       * @param {number} deepDataAndEvents
       * @return {?}
       */
      convertToValue : function(deepDataAndEvents) {
        var n;
        var len;
        var min = this.options.min;
        var max = this.options.max;
        var result = min.toString().split(".")[1];
        var rawParams = max.toString().split(".")[1];
        /** @type {number} */
        var end = 0;
        /** @type {number} */
        var step = 0;
        if (0 === deepDataAndEvents) {
          return this.options.min;
        }
        if (100 === deepDataAndEvents) {
          return this.options.max;
        }
        if (result) {
          n = result.length;
          end = n;
        }
        if (rawParams) {
          len = rawParams.length;
          end = len;
        }
        if (n) {
          if (len) {
            end = n >= len ? n : len;
          }
        }
        if (min < 0) {
          /** @type {number} */
          step = Math.abs(min);
          /** @type {number} */
          min = +(min + step).toFixed(end);
          /** @type {number} */
          max = +(max + step).toFixed(end);
        }
        var newValue;
        var number = (max - min) / 100 * deepDataAndEvents + min;
        var decimalFormat = this.options.step.toString().split(".")[1];
        return decimalFormat ? number = +number.toFixed(decimalFormat.length) : (number /= this.options.step, number *= this.options.step, number = +number.toFixed(0)), step && (number -= step), newValue = decimalFormat ? +number.toFixed(decimalFormat.length) : this.toFixed(number), newValue < this.options.min ? newValue = this.options.min : newValue > this.options.max && (newValue = this.options.max), newValue;
      },
      /**
       * @param {number} position
       * @return {?}
       */
      calcWithStep : function(position) {
        /** @type {number} */
        var n = Math.round(position / this.coords.p_step) * this.coords.p_step;
        return n > 100 && (n = 100), 100 === position && (n = 100), this.toFixed(n);
      },
      /**
       * @param {?} deepDataAndEvents
       * @param {?} dataAndEvents
       * @param {string} to
       * @return {?}
       */
      checkMinInterval : function(deepDataAndEvents, dataAndEvents, to) {
        var end;
        var start;
        var options = this.options;
        return options.min_interval ? (end = this.convertToValue(deepDataAndEvents), start = this.convertToValue(dataAndEvents), "from" === to ? start - end < options.min_interval && (end = start - options.min_interval) : end - start < options.min_interval && (end = start + options.min_interval), this.convertToPercent(end)) : deepDataAndEvents;
      },
      /**
       * @param {?} deepDataAndEvents
       * @param {number} dataAndEvents
       * @param {string} to
       * @return {?}
       */
      checkMaxInterval : function(deepDataAndEvents, dataAndEvents, to) {
        var end;
        var start;
        var options = this.options;
        return options.max_interval ? (end = this.convertToValue(deepDataAndEvents), start = this.convertToValue(dataAndEvents), "from" === to ? start - end > options.max_interval && (end = start - options.max_interval) : end - start > options.max_interval && (end = start + options.max_interval), this.convertToPercent(end)) : deepDataAndEvents;
      },
      /**
       * @param {?} deepDataAndEvents
       * @param {number} number
       * @param {number} height
       * @return {?}
       */
      checkDiapason : function(deepDataAndEvents, number, height) {
        var udataCur = this.convertToValue(deepDataAndEvents);
        var o = this.options;
        return "number" != typeof number && (number = o.min), "number" != typeof height && (height = o.max), udataCur < number && (udataCur = number), udataCur > height && (udataCur = height), this.convertToPercent(udataCur);
      },
      /**
       * @param {number} n
       * @return {?}
       */
      toFixed : function(n) {
        return n = n.toFixed(9), +n;
      },
      /**
       * @param {?} item
       * @return {?}
       */
      _prettify : function(item) {
        return this.options.prettify_enabled ? this.options.prettify && "function" == typeof this.options.prettify ? this.options.prettify(item) : this.prettify(item) : item;
      },
      /**
       * @param {?} data
       * @return {?}
       */
      prettify : function(data) {
        var fnums = data.toString();
        return fnums.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + this.options.prettify_separator);
      },
      /**
       * @param {number} s
       * @param {number} o
       * @return {?}
       */
      checkEdges : function(s, o) {
        return this.options.force_edges ? (s < 0 ? s = 0 : s > 100 - o && (s = 100 - o), this.toFixed(s)) : this.toFixed(s);
      },
      /**
       * @return {undefined}
       */
      validate : function() {
        var key;
        var i;
        var options = this.options;
        var settings = this.result;
        var keys = options.values;
        var il = keys.length;
        if ("string" == typeof options.min && (options.min = +options.min), "string" == typeof options.max && (options.max = +options.max), "string" == typeof options.from && (options.from = +options.from), "string" == typeof options.to && (options.to = +options.to), "string" == typeof options.step && (options.step = +options.step), "string" == typeof options.from_min && (options.from_min = +options.from_min), "string" == typeof options.from_max && (options.from_max = +options.from_max), "string" == 
        typeof options.to_min && (options.to_min = +options.to_min), "string" == typeof options.to_max && (options.to_max = +options.to_max), "string" == typeof options.keyboard_step && (options.keyboard_step = +options.keyboard_step), "string" == typeof options.grid_num && (options.grid_num = +options.grid_num), options.max < options.min && (options.max = options.min), il) {
          /** @type {Array} */
          options.p_values = [];
          /** @type {number} */
          options.min = 0;
          /** @type {number} */
          options.max = il - 1;
          /** @type {number} */
          options.step = 1;
          /** @type {number} */
          options.grid_num = options.max;
          /** @type {boolean} */
          options.grid_snap = true;
          /** @type {number} */
          i = 0;
          for (;i < il;i++) {
            /** @type {number} */
            key = +keys[i];
            if (isNaN(key)) {
              key = keys[i];
            } else {
              /** @type {number} */
              keys[i] = key;
              key = this._prettify(key);
            }
            options.p_values.push(key);
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
        if ("number" != typeof options.step || (isNaN(options.step) || (!options.step || options.step < 0))) {
          /** @type {number} */
          options.step = 1;
        }
        if ("number" != typeof options.keyboard_step || (isNaN(options.keyboard_step) || (!options.keyboard_step || options.keyboard_step < 0))) {
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
        if ("number" != typeof options.min_interval || (isNaN(options.min_interval) || (!options.min_interval || options.min_interval < 0))) {
          /** @type {number} */
          options.min_interval = 0;
        }
        if ("number" != typeof options.max_interval || (isNaN(options.max_interval) || (!options.max_interval || options.max_interval < 0))) {
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
          var row;
          var b4;
          var bulk;
          var a1;
          var value;
          var options = this.options;
          /** @type {number} */
          var aboveMin = options.max - options.min;
          var i = options.grid_num;
          /** @type {number} */
          var lcol = 0;
          /** @type {number} */
          var v0 = 0;
          /** @type {number} */
          var fn = 4;
          /** @type {number} */
          var toFixed = 0;
          /** @type {string} */
          var val = "";
          this.calcGridMargin();
          if (options.grid_snap) {
            /** @type {number} */
            i = aboveMin / options.step;
            lcol = this.toFixed(options.step / (aboveMin / 100));
          } else {
            lcol = this.toFixed(100 / i);
          }
          if (i > 4) {
            /** @type {number} */
            fn = 3;
          }
          if (i > 7) {
            /** @type {number} */
            fn = 2;
          }
          if (i > 14) {
            /** @type {number} */
            fn = 1;
          }
          if (i > 28) {
            /** @type {number} */
            fn = 0;
          }
          /** @type {number} */
          row = 0;
          for (;row < i + 1;row++) {
            /** @type {number} */
            bulk = fn;
            v0 = this.toFixed(lcol * row);
            if (v0 > 100) {
              /** @type {number} */
              v0 = 100;
              bulk -= 2;
              if (bulk < 0) {
                /** @type {number} */
                bulk = 0;
              }
            }
            this.coords.big[row] = v0;
            /** @type {number} */
            a1 = (v0 - lcol * (row - 1)) / (bulk + 1);
            /** @type {number} */
            b4 = 1;
            for (;b4 <= bulk && 0 !== v0;b4++) {
              toFixed = this.toFixed(v0 - a1 * b4);
              val += '<span class="irs-grid-pol small" style="left: ' + toFixed + '%"></span>';
            }
            val += '<span class="irs-grid-pol" style="left: ' + v0 + '%"></span>';
            value = this.convertToValue(v0);
            value = options.values.length ? options.p_values[value] : this._prettify(value);
            val += '<span class="irs-grid-text js-grid-text-' + row + '" style="left: ' + v0 + '%">' + value + "</span>";
          }
          /** @type {number} */
          this.coords.big_num = Math.ceil(i + 1);
          this.$cache.cont.addClass("irs-with-grid");
          this.$cache.grid.html(val);
          this.cacheGridLabels();
        }
      },
      /**
       * @return {undefined}
       */
      cacheGridLabels : function() {
        var modId;
        var i;
        var c = this.coords.big_num;
        /** @type {number} */
        i = 0;
        for (;i < c;i++) {
          modId = this.$cache.grid.find(".js-grid-text-" + i);
          this.$cache.grid_labels.push(modId);
        }
        this.calcGridLabels();
      },
      /**
       * @return {undefined}
       */
      calcGridLabels : function() {
        var i;
        var lineSpace;
        /** @type {Array} */
        var sizes = [];
        /** @type {Array} */
        var destElements = [];
        var c = this.coords.big_num;
        /** @type {number} */
        i = 0;
        for (;i < c;i++) {
          this.coords.big_w[i] = this.$cache.grid_labels[i].outerWidth(false);
          this.coords.big_p[i] = this.toFixed(this.coords.big_w[i] / this.coords.w_rs * 100);
          this.coords.big_x[i] = this.toFixed(this.coords.big_p[i] / 2);
          sizes[i] = this.toFixed(this.coords.big[i] - this.coords.big_x[i]);
          destElements[i] = this.toFixed(sizes[i] + this.coords.big_p[i]);
        }
        if (this.options.force_edges) {
          if (sizes[0] < -this.coords.grid_gap) {
            /** @type {number} */
            sizes[0] = -this.coords.grid_gap;
            destElements[0] = this.toFixed(sizes[0] + this.coords.big_p[0]);
            this.coords.big_x[0] = this.coords.grid_gap;
          }
          if (destElements[c - 1] > 100 + this.coords.grid_gap) {
            destElements[c - 1] = 100 + this.coords.grid_gap;
            sizes[c - 1] = this.toFixed(destElements[c - 1] - this.coords.big_p[c - 1]);
            this.coords.big_x[c - 1] = this.toFixed(this.coords.big_p[c - 1] - this.coords.grid_gap);
          }
        }
        this.calcGridCollision(2, sizes, destElements);
        this.calcGridCollision(4, sizes, destElements);
        /** @type {number} */
        i = 0;
        for (;i < c;i++) {
          lineSpace = this.$cache.grid_labels[i][0];
          /** @type {string} */
          lineSpace.style.marginLeft = -this.coords.big_x[i] + "%";
        }
      },
      /**
       * @param {number} opt_attributes
       * @param {Array} sizes
       * @param {Array} elems
       * @return {undefined}
       */
      calcGridCollision : function(opt_attributes, sizes, elems) {
        var i;
        var j;
        var el;
        var l = this.coords.big_num;
        /** @type {number} */
        i = 0;
        for (;i < l && (j = i + opt_attributes / 2, !(j >= l));i += opt_attributes) {
          el = this.$cache.grid_labels[j][0];
          if (elems[i] <= sizes[j]) {
            /** @type {string} */
            el.style.visibility = "visible";
          } else {
            /** @type {string} */
            el.style.visibility = "hidden";
          }
        }
      },
      /**
       * @return {undefined}
       */
      calcGridMargin : function() {
        if (this.options.grid_margin) {
          this.coords.w_rs = this.$cache.rs.outerWidth(false);
          if (this.coords.w_rs) {
            if ("single" === this.options.type) {
              this.coords.w_handle = this.$cache.s_single.outerWidth(false);
            } else {
              this.coords.w_handle = this.$cache.s_from.outerWidth(false);
            }
            this.coords.p_handle = this.toFixed(this.coords.w_handle / this.coords.w_rs * 100);
            this.coords.grid_gap = this.toFixed(this.coords.p_handle / 2 - 0.1);
            this.$cache.grid[0].style.width = this.toFixed(100 - this.coords.p_handle) + "%";
            /** @type {string} */
            this.$cache.grid[0].style.left = this.coords.grid_gap + "%";
          }
        }
      },
      /**
       * @param {boolean} changes
       * @return {undefined}
       */
      update : function(changes) {
        if (this.input) {
          /** @type {boolean} */
          this.is_update = true;
          this.options.from = this.result.from;
          this.options.to = this.result.to;
          this.options = $.extend(this.options, changes);
          this.validate();
          this.updateResult(changes);
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
          this.input = null;
          /** @type {null} */
          this.options = null;
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
          $.data(this, "ionRangeSlider", new init(this, options, r++));
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
         * @param {?} callback
         * @param {?} element
         * @return {?}
         */
        win.requestAnimationFrame = function(callback, element) {
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
         * @param {?} id
         * @return {undefined}
         */
        win.cancelAnimationFrame = function(id) {
          clearTimeout(id);
        };
      }
    })();
  });
}]);