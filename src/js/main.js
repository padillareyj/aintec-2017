

function Init(e) {
    1 != e && (_afterResize(), _slider_full(), _topNav(), _sideNav()),   _animate(),  _scrollTo(!1, 0), _parallax(), _toggle(), _placeholder(),   _widget_facebook(),   jQuery("a[data-toggle=tooltip], button[data-toggle=tooltip], span[data-toggle=tooltip]").tooltip()
}

function _afterResize() {
    jQuery(window).load(function() {
        "use strict";
        jQuery(window).resize(function() {
            window.afterResizeApp && clearTimeout(window.afterResizeApp), window.afterResizeApp = setTimeout(function() {
                _slider_full(), window.width = jQuery(window).width(), jQuery(".flexslider").length > 0 && jQuery(".flexslider").resize()
            }, 300)
        })
    })
}

 

function _slider_full() {
    _headerHeight = 0, jQuery("#header").hasClass("transparent") || jQuery("#header").hasClass("translucent") ? _headerHeight = 0 : (_headerHeight = jQuery("#header").outerHeight(), jQuery("#topBar").length > 0 && (_headerHeight += jQuery("#topBar").outerHeight())), _screenHeight = jQuery(window).height() - _headerHeight, jQuery("#slider.fullheight").height(_screenHeight)
}

function _topNav() {
    function e() {
        _scrollTop = jQuery(document).scrollTop(), _scrollTop > 100 ? jQuery("#toTop").is(":hidden") && jQuery("#toTop").show() : jQuery("#toTop").is(":visible") && jQuery("#toTop").hide()
    }

    function t() {
        jQuery("#sidepanel_overlay").unbind(), jQuery("#sidepanel_overlay").bind("click", function() {
            jQuery("a#sidepanel_btn").trigger("click")
        })
    }
    window.scrollTop = 0;
    var a = jQuery("#header");
    jQuery(window).scroll(function() {
        e()
    });
    var r = !1;
    if (jQuery("#topMain a.dropdown-toggle").bind("click", function(e) {
            "#" == jQuery(this).attr("href") && e.preventDefault(), r = jQuery(this).parent().hasClass("resp-active"), jQuery("#topMain").find(".resp-active").removeClass("resp-active"), r || jQuery(this).parents("li").addClass("resp-active")
        }), jQuery("li.search i.fa").click(function() {
            jQuery("#header .search-box").is(":visible") ? jQuery("#header .search-box").fadeOut(300) : (jQuery(".search-box").fadeIn(300), jQuery("#header .search-box form input").focus(), jQuery("#header li.quick-cart div.quick-cart-box").is(":visible") && jQuery("#header li.quick-cart div.quick-cart-box").fadeOut(300))
        }), 0 != jQuery("#header li.search i.fa").size() && (jQuery("#header .search-box, #header li.search i.fa").on("click", function(e) {
            e.stopPropagation()
        }), jQuery("body").on("click", function() {
            jQuery("#header li.search .search-box").is(":visible") && jQuery("#header .search-box").fadeOut(300)
        })), jQuery(document).bind("click", function() {
            jQuery("#header li.search .search-box").is(":visible") && jQuery("#header .search-box").fadeOut(300)
        }), jQuery("#closeSearch").bind("click", function(e) {
            e.preventDefault(), jQuery("#header .search-box").fadeOut(300)
        }), jQuery("button#page-menu-mobile").bind("click", function() {
            jQuery(this).next("ul").slideToggle(150)
        }), jQuery("li.quick-cart>a").click(function(e) {
            e.preventDefault();
            var t = jQuery("li.quick-cart div.quick-cart-box");
            t.is(":visible") ? t.fadeOut(300) : (t.fadeIn(300), jQuery("li.search .search-box").is(":visible") && jQuery(".search-box").fadeOut(300))
        }), 0 != jQuery("li.quick-cart>a").size() && (jQuery("li.quick-cart").on("click", function(e) {
            e.stopPropagation()
        }), jQuery("body").on("click", function() {
            jQuery("li.quick-cart div.quick-cart-box").is(":visible") && jQuery("li.quick-cart div.quick-cart-box").fadeOut(300)
        })), jQuery("#page-menu ul.menu-scrollTo>li").bind("click", function(e) {
            var t = jQuery("a", this).attr("href");
            jQuery("a", this).hasClass("external") || (e.preventDefault(), jQuery("#page-menu ul.menu-scrollTo>li").removeClass("active"), jQuery(this).addClass("active"), jQuery(t).length > 0 && (_padding_top = 0, jQuery("#header").hasClass("sticky") && (_padding_top = jQuery(t).css("padding-top"), _padding_top = _padding_top.replace("px", "")), jQuery("html,body").animate({
                scrollTop: jQuery(t).offset().top - _padding_top
            }, 800, "easeInOutExpo")))
        }), a.hasClass("bottom") ? (a.addClass("dropup"), window.homeHeight = jQuery(window).outerHeight() - 55, a.hasClass("sticky") && (window.isOnTop = !0, jQuery(window).scroll(function() {
            jQuery(document).scrollTop() > window.homeHeight / 2 ? a.removeClass("dropup") : a.addClass("dropup")
        }), jQuery(window).scroll(function() {
            jQuery(document).scrollTop() > window.homeHeight ? window.isOnTop === !0 && (jQuery("#header").addClass("fixed"), a.removeClass("dropup"), window.isOnTop = !1) : window.isOnTop === !1 && (jQuery("#header").removeClass("fixed"), a.addClass("dropup"), window.isOnTop = !0)
        }), jQuery(window).resize(function() {
            window.homeHeight = jQuery(window).outerHeight()
        }))) : a.hasClass("sticky") ? jQuery(window).scroll(function() {
            if (window.width > 768) {
                var e = jQuery(document).scrollTop();
                _topBar_H = jQuery("#topBar").outerHeight() || 0, e > _topBar_H ? (a.addClass("fixed"), _header_H = a.outerHeight() || 0, a.hasClass("transparent") || a.hasClass("translucent") || jQuery("body").css({
                    "padding-top": _header_H + "px"
                })) : (a.hasClass("transparent") || a.hasClass("translucent") || jQuery("body").css({
                    "padding-top": "0px"
                }), a.removeClass("fixed"))
            }
        }) : a.hasClass("static"), jQuery("#slidetop a.slidetop-toggle").bind("click", function() {
            jQuery("#slidetop .container").slideToggle(150, function() {
                jQuery("#slidetop .container").is(":hidden") ? jQuery("#slidetop").removeClass("active") : jQuery("#slidetop").addClass("active")
            })
        }), jQuery(document).keyup(function(e) {
            27 == e.keyCode && jQuery("#slidetop").hasClass("active") && jQuery("#slidetop .container").slideToggle(150, function() {
                jQuery("#slidetop").removeClass("active")
            })
        }), jQuery("a#sidepanel_btn").bind("click", function(e) {
            e.preventDefault(), n = "right", jQuery("#sidepanel").hasClass("sidepanel-inverse") && (n = "left"), jQuery("#sidepanel").is(":hidden") ? (jQuery("body").append('<span id="sidepanel_overlay"></span>'), "left" == n ? jQuery("#sidepanel").stop().show().animate({
                left: "0px"
            }, 150) : jQuery("#sidepanel").stop().show().animate({
                right: "0px"
            }, 150)) : (jQuery("#sidepanel_overlay").remove(), "left" == n ? jQuery("#sidepanel").stop().animate({
                left: "-300px"
            }, 300) : jQuery("#sidepanel").stop().animate({
                right: "-300px"
            }, 300), setTimeout(function() {
                jQuery("#sidepanel").hide()
            }, 500)), t()
        }), jQuery("#sidepanel_close").bind("click", function(e) {
            e.preventDefault(), jQuery("a#sidepanel_btn").trigger("click")
        }), jQuery(document).keyup(function(e) {
            27 == e.keyCode && jQuery("#sidepanel").is(":visible") && jQuery("a#sidepanel_btn").trigger("click")
        }), jQuery("#menu_overlay_open").length > 0) {
        var i = jQuery("html").hasClass("ie9") ? !0 : !1;
        1 == i && jQuery("#topMain").hide(), jQuery("#menu_overlay_open").bind("click", function(e) {
            e.preventDefault(), jQuery("body").addClass("show-menu"), 1 == i && jQuery("#topMain").show()
        }), jQuery("#menu_overlay_close").bind("click", function(e) {
            e.preventDefault(), jQuery("body").hasClass("show-menu") && jQuery("body").removeClass("show-menu"), 1 == i && jQuery("#topMain").hide()
        }), jQuery(document).keyup(function(e) {
            27 == e.keyCode && (jQuery("body").hasClass("show-menu") && jQuery("body").removeClass("show-menu"), 1 == i && jQuery("#topMain").hide())
        })
    }
    if (jQuery("#sidebar_vertical_btn").length > 0 && jQuery("body").hasClass("menu-vertical-hide")) {
        if (_paddingStatusL = jQuery("#mainMenu.sidebar-vertical").css("left"), _paddingStatusR = jQuery("#mainMenu.sidebar-vertical").css("right"), parseInt(_paddingStatusL) < 0) var n = "left";
        else if (parseInt(_paddingStatusR) < 0) var n = "right";
        else var n = "left";
        jQuery("#sidebar_vertical_btn").bind("click", function(e) {
            _paddingStatus = jQuery("#mainMenu.sidebar-vertical").css(n), parseInt(_paddingStatus) < 0 ? "right" == n ? jQuery("#mainMenu.sidebar-vertical").stop().animate({
                right: "0px"
            }, 200) : jQuery("#mainMenu.sidebar-vertical").stop().animate({
                left: "0px"
            }, 200) : "right" == n ? jQuery("#mainMenu.sidebar-vertical").stop().animate({
                right: "-263px"
            }, 200) : jQuery("#mainMenu.sidebar-vertical").stop().animate({
                left: "-263px"
            }, 200)
        }), jQuery(window).scroll(function() {
            _paddingStatus = parseInt(jQuery("#mainMenu.sidebar-vertical").css(n)), _paddingStatus >= 0 && ("right" == n ? jQuery("#mainMenu.sidebar-vertical").stop().animate({
                right: "-263px"
            }, 200) : jQuery("#mainMenu.sidebar-vertical").stop().animate({
                left: "-263px"
            }, 200))
        })
    }
    jQuery("#topBar").length > 0 && jQuery("#topNav ul").addClass("has-topBar"), jQuery(window).scroll(function() {
        window.width < 769 && (jQuery("#header li.quick-cart div.quick-cart-box").is(":visible") && jQuery("#header li.quick-cart div.quick-cart-box").fadeOut(0), jQuery("#header li.search .search-box").is(":visible") && jQuery("#header .search-box").fadeOut(0))
    })
}

function _sideNav() {
    jQuery("div.side-nav").each(function() {
        var e = jQuery("ul", this);
        jQuery("button", this).bind("click", function() {
            e.slideToggle(300)
        })
    }), jQuery("div.side-nav>ul>li>a.dropdown-toggle").bind("click", function(e) {
        e.preventDefault(), jQuery(this).next("ul").slideToggle(200), jQuery(this).closest("li").toggleClass("active")
    })
}

function _animate() {
    if (jQuery("body").hasClass("enable-animation")) {
        var e = new WOW({
            boxClass: "wow",
            animateClass: "animated",
            offset: 90,
            mobile: !1,
            live: !0
        });
        e.init()
    }
    jQuery(".countTo").appear(function() {
        var e = jQuery(this),
            t = e.attr("data-from") || 0,
            a = e.attr("data-speed") || 1300,
            r = e.attr("data-refreshInterval") || 60;
        e.countTo({
            from: parseInt(t),
            to: e.html(),
            speed: parseInt(a),
            refreshInterval: parseInt(r)
        })
    })
}

 
    
function _scrollTo(e, t) {
    0 == e ? (jQuery("a.scrollTo").bind("click", function(e) {
        e.preventDefault();
        var t = jQuery(this).attr("href"),
            a = jQuery(this).attr("data-offset") || 0;
        "#" != t && "#top" != t && jQuery("html,body").animate({
            scrollTop: jQuery(t).offset().top - parseInt(a)
        }, 800, "easeInOutExpo"), "#top" == t && jQuery("html,body").animate({
            scrollTop: 0
        }, 800, "easeInOutExpo")
    }), jQuery("#toTop").bind("click", function(e) {
        e.preventDefault(), jQuery("html,body").animate({
            scrollTop: 0
        }, 800, "easeInOutExpo")
    })) : jQuery("html,body").animate({
        scrollTop: jQuery(e).offset().top - t
    }, 800, "easeInOutExpo")
}

function _parallax() {
    jQuery().parallax && (jQuery(".parallax-1").parallax("50%", "0.1"), jQuery(".parallax-2").parallax("50%", "0.2"), jQuery(".parallax-3").parallax("50%", "0.3"), jQuery(".parallax-4").parallax("50%", "0.4"));
    var e = jQuery("#slider");
    if (e.length > 0 && e.hasClass("parallax-slider")) {
        e.offset().top;
        jQuery(window).scroll(function() {
            var e = jQuery(document).scrollTop();
            if (768 > e) {
                var t = jQuery("#slider").height();
                jQuery("#slider>div").css("top", .5 * e), jQuery("#slider>div").css("opacity", 1 - e / t * 1)
            }
        })
    }
}

 

 
function _toggle() {
    var e = 25;
    jQuery("div.toggle.active > p").addClass("preview-active"), jQuery("div.toggle.active > div.toggle-content").slideDown(400), jQuery("div.toggle > label").click(function(t) {
        var a = jQuery(this).parent(),
            r = jQuery(this).parents("div.toggle"),
            i = !1,
            n = r.hasClass("toggle-accordion");
        if (n && "undefined" != typeof t.originalEvent && r.find("div.toggle.active > label").trigger("click"), a.toggleClass("active"), a.find("> p").get(0)) {
            i = a.find("> p");
            var o = i.css("height"),
                s = i.css("height");
            i.css("height", "auto"), i.css("height", o)
        }
        var l = a.find("> div.toggle-content");
        a.hasClass("active") ? (jQuery(i).animate({
            height: s
        }, 350, function() {
            jQuery(this).addClass("preview-active")
        }), l.slideDown(350)) : (jQuery(i).animate({
            height: e
        }, 350, function() {
            jQuery(this).removeClass("preview-active")
        }), l.slideUp(350))
    })
}

function _placeholder() {
    -1 != navigator.appVersion.indexOf("MSIE") && jQuery("[placeholder]").focus(function() {
        var e = jQuery(this);
        e.val() == e.attr("placeholder") && (e.val(""), e.removeClass("placeholder"))
    }).blur(function() {
        var e = jQuery(this);
        ("" == e.val() || e.val() == e.attr("placeholder")) && (e.addClass("placeholder"), e.val(e.attr("placeholder")))
    }).blur()
}

 
  
function _stickyFooter() {
    function e() {
        t = r.height(), a = jQuery(window).scrollTop() + jQuery(window).height() - t + "px", jQuery(document.body).height() + t > jQuery(window).height() ? r.css({
            position: "absolute"
        }).stop().animate({
            top: a
        }, 0) : r.css({
            position: "static"
        })
    }
    if (jQuery("#footer").hasClass("sticky")) {
        var t = 0,
            a = 0,
            r = jQuery("#footer.sticky");
        e(), jQuery(window).scroll(e).resize(e)
    }
}
 
    
 
 
  

function _modalAutoLoad() {
    jQuery("div.modal").length > 0 && jQuery("div.modal").each(function() {
        var e = jQuery(this),
            t = e.attr("id"),
            a = e.attr("data-autoload") || !1;
        "" != t && "hidden" == localStorage.getItem(t) && (a = "false"), "true" == a && jQuery(window).load(function() {
            var t = e.attr("data-autoload-delay") || 1e3;
            setTimeout(function() {
                e.modal("toggle")
            }, parseInt(t))
        }), jQuery("input.loadModalHide", this).bind("click", function() {
            var e = jQuery(this);
            e.is(":checked") ? (localStorage.setItem(t, "hidden"), console.log("[Modal Autoload #" + t + "] Added to localStorage")) : (localStorage.removeItem(t), console.log("[Modal Autoload #" + t + "] Removed from localStorage"))
        })
    })
}
 
   

function relative_time(e) {
    var t = e.split(" "),
        a = Date.parse(e),
        r = arguments.length > 1 ? arguments[1] : new Date,
        i = parseInt((r.getTime() - a) / 1e3);
    return e = t[1] + " " + t[2] + ", " + t[5] + " " + t[3], i += 60 * r.getTimezoneOffset(), 60 > i ? "less than a minute ago" : 120 > i ? "about a minute ago" : 3600 > i ? parseInt(i / 60).toString() + " minutes ago" : 7200 > i ? "about an hour ago" : 86400 > i ? "about " + parseInt(i / 3600).toString() + " hours ago" : 172800 > i ? "1 day ago" : parseInt(i / 86400).toString() + " days ago"
}

function _widget_facebook() {
    var e = jQuery("div.fb-like"),
        t = jQuery("div.fb-share-button");
    (e.length > 0 || t.length > 0) && (jQuery("body").append('<div id="fb-root"></div>'), function(e, t, a) {
        var r, i = e.getElementsByTagName(t)[0];
        e.getElementById(a) || (r = e.createElement(t), r.id = a, r.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.3", i.parentNode.insertBefore(r, i))
    }(document, "script", "facebook-jssdk"))
}
 
 
function wheel(e) {
    e.preventDefault()
}

function disable_scroll() {
    window.addEventListener && window.addEventListener("DOMMouseScroll", wheel, !1), window.onmousewheel = document.onmousewheel = wheel
}

function enable_scroll() {
    window.removeEventListener && window.removeEventListener("DOMMouseScroll", wheel, !1), window.onmousewheel = document.onmousewheel = document.onkeydown = null
}

function enable_overlay() {
    jQuery("span.global-overlay").remove(), jQuery("body").append('<span class="global-overlay"></span>')
}

function disable_overlay() {
    jQuery("span.global-overlay").remove()
}
window.width = jQuery(window).width(), jQuery(window).ready(function() {
 
    jQuery.browserDetect(), 
	Init(!1);
	 
}), jQuery("#preloader").length > 0 && jQuery(window).load(function() {
    jQuery("#preloader").fadeOut(1e3, function() {
        jQuery("#preloader").remove()
    })
});
var _arr = {};
! function(e) {
    function t(e, t) {
        return e.toFixed(t.decimals)
    }
    e.fn.countTo = function(t) {
        return t = t || {}, jQuery(this).each(function() {
            function a() {
                c += o, u++, r(c), "function" == typeof i.onUpdate && i.onUpdate.call(s, c), u >= n && (l.removeData("countTo"), clearInterval(d.interval), c = i.to, "function" == typeof i.onComplete && i.onComplete.call(s, c))
            }

            function r(e) {
                var t = i.formatter.call(s, e, i);
                l.html(t)
            }
            var i = jQuery.extend({}, e.fn.countTo.defaults, {
                    from: jQuery(this).data("from"),
                    to: jQuery(this).data("to"),
                    speed: jQuery(this).data("speed"),
                    refreshInterval: jQuery(this).data("refresh-interval"),
                    decimals: jQuery(this).data("decimals")
                }, t),
                n = Math.ceil(i.speed / i.refreshInterval),
                o = (i.to - i.from) / n,
                s = this,
                l = jQuery(this),
                u = 0,
                c = i.from,
                d = l.data("countTo") || {};
            l.data("countTo", d), d.interval && clearInterval(d.interval), d.interval = setInterval(a, i.refreshInterval), r(c)
        })
    }, e.fn.countTo.defaults = {
        from: 0,
        to: 0,
        speed: 1e3,
        refreshInterval: 100,
        decimals: 0,
        formatter: t,
        onUpdate: null,
        onComplete: null
    }
}(jQuery),
function(e) {
    e.extend({
        browserDetect: function() {
            var e = navigator.userAgent,
                t = e.toLowerCase(),
                a = function(e) {
                    return t.indexOf(e) > -1
                },
                r = "gecko",
                i = "webkit",
                n = "safari",
                o = "opera",
                s = document.documentElement,
                l = [!/opera|webtv/i.test(t) && /msie\s(\d)/.test(t) ? "ie ie" + parseFloat(navigator.appVersion.split("MSIE")[1]) : a("firefox/2") ? r + " ff2" : a("firefox/3.5") ? r + " ff3 ff3_5" : a("firefox/3") ? r + " ff3" : a("gecko/") ? r : a("opera") ? o + (/version\/(\d+)/.test(t) ? " " + o + RegExp.jQuery1 : /opera(\s|\/)(\d+)/.test(t) ? " " + o + RegExp.jQuery2 : "") : a("konqueror") ? "konqueror" : a("chrome") ? i + " chrome" : a("iron") ? i + " iron" : a("applewebkit/") ? i + " " + n + (/version\/(\d+)/.test(t) ? " " + n + RegExp.jQuery1 : "") : a("mozilla/") ? r : "", a("j2me") ? "mobile" : a("iphone") ? "iphone" : a("ipod") ? "ipod" : a("mac") ? "mac" : a("darwin") ? "mac" : a("webtv") ? "webtv" : a("win") ? "win" : a("freebsd") ? "freebsd" : a("x11") || a("linux") ? "linux" : "", "js"];
            c = l.join(" "), s.className += " " + c;
            var u = !window.ActiveXObject && "ActiveXObject" in window;
            return u ? void jQuery("html").removeClass("gecko").addClass("ie ie11") : void 0
        }
    })
}(jQuery),
function(e) {
    e.fn.appear = function(t, a) {
        var r = e.extend({
            data: void 0,
            one: !0,
            accX: 0,
            accY: 0
        }, a);
        return this.each(function() {
            var a = e(this);
            if (a.appeared = !1, !t) return void a.trigger("appear", r.data);
            var i = e(window),
                n = function() {
                    if (!a.is(":visible")) return void(a.appeared = !1);
                    var e = i.scrollLeft(),
                        t = i.scrollTop(),
                        n = a.offset(),
                        o = n.left,
                        s = n.top,
                        l = r.accX,
                        u = r.accY,
                        c = a.height(),
                        d = i.height(),
                        p = a.width(),
                        h = i.width();
                    s + c + u >= t && t + d + u >= s && o + p + l >= e && e + h + l >= o ? a.appeared || a.trigger("appear", r.data) : a.appeared = !1
                },
                o = function() {
                    if (a.appeared = !0, r.one) {
                        i.unbind("scroll", n);
                        var o = e.inArray(n, e.fn.appear.checks);
                        o >= 0 && e.fn.appear.checks.splice(o, 1)
                    }
                    t.apply(this, arguments)
                };
            r.one ? a.one("appear", r.data, o) : a.bind("appear", r.data, o), i.scroll(n), e.fn.appear.checks.push(n), n()
        })
    }, e.extend(e.fn.appear, {
        checks: [],
        timeout: null,
        checkAll: function() {
            var t = e.fn.appear.checks.length;
            if (t > 0)
                for (; t--;) e.fn.appear.checks[t]()
        },
        run: function() {
            e.fn.appear.timeout && clearTimeout(e.fn.appear.timeout), e.fn.appear.timeout = setTimeout(e.fn.appear.checkAll, 20)
        }
    }), e.each(["append", "prepend", "after", "before", "attr", "removeAttr", "addClass", "removeClass", "toggleClass", "remove", "css", "show", "hide"], function(t, a) {
        var r = e.fn[a];
        r && (e.fn[a] = function() {
            var t = r.apply(this, arguments);
            return e.fn.appear.run(), t
        })
    })
}(jQuery),
function(e) {
    var t = e(window),
        a = t.height();
    t.resize(function() {
        a = t.height()
    }), e.fn.parallax = function(r, i, n) {
        function o() {
            u.each(function() {
                l = u.offset().top
            }), s = n ? function(e) {
                return e.outerHeight(!0)
            } : function(e) {
                return e.height()
            }, (arguments.length < 1 || null === r) && (r = "50%"), (arguments.length < 2 || null === i) && (i = .5), (arguments.length < 3 || null === n) && (n = !0);
            var o = t.scrollTop();
            u.each(function() {
                var t = e(this),
                    n = t.offset().top,
                    c = s(t);
                o > n + c || n > o + a || u.css("backgroundPosition", r + " " + Math.round((l - o) * i) + "px")
            })
        }
        var s, l, u = e(this);
        t.bind("scroll", o).resize(o), o()
    }
}(jQuery), jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
        def: "easeOutQuad",
        swing: function(e, t, a, r, i) {
            return jQuery.easing[jQuery.easing.def](e, t, a, r, i)
        },
        easeInQuad: function(e, t, a, r, i) {
            return r * (t /= i) * t + a
        },
        easeOutQuad: function(e, t, a, r, i) {
            return -r * (t /= i) * (t - 2) + a
        },
        easeInOutQuad: function(e, t, a, r, i) {
            return (t /= i / 2) < 1 ? r / 2 * t * t + a : -r / 2 * (--t * (t - 2) - 1) + a
        },
        easeInCubic: function(e, t, a, r, i) {
            return r * (t /= i) * t * t + a
        },
        easeOutCubic: function(e, t, a, r, i) {
            return r * ((t = t / i - 1) * t * t + 1) + a
        },
        easeInOutCubic: function(e, t, a, r, i) {
            return (t /= i / 2) < 1 ? r / 2 * t * t * t + a : r / 2 * ((t -= 2) * t * t + 2) + a
        },
        easeInQuart: function(e, t, a, r, i) {
            return r * (t /= i) * t * t * t + a
        },
        easeOutQuart: function(e, t, a, r, i) {
            return -r * ((t = t / i - 1) * t * t * t - 1) + a
        },
        easeInOutQuart: function(e, t, a, r, i) {
            return (t /= i / 2) < 1 ? r / 2 * t * t * t * t + a : -r / 2 * ((t -= 2) * t * t * t - 2) + a
        },
        easeInQuint: function(e, t, a, r, i) {
            return r * (t /= i) * t * t * t * t + a
        },
        easeOutQuint: function(e, t, a, r, i) {
            return r * ((t = t / i - 1) * t * t * t * t + 1) + a
        },
        easeInOutQuint: function(e, t, a, r, i) {
            return (t /= i / 2) < 1 ? r / 2 * t * t * t * t * t + a : r / 2 * ((t -= 2) * t * t * t * t + 2) + a
        },
        easeInSine: function(e, t, a, r, i) {
            return -r * Math.cos(t / i * (Math.PI / 2)) + r + a
        },
        easeOutSine: function(e, t, a, r, i) {
            return r * Math.sin(t / i * (Math.PI / 2)) + a
        },
        easeInOutSine: function(e, t, a, r, i) {
            return -r / 2 * (Math.cos(Math.PI * t / i) - 1) + a
        },
        easeInExpo: function(e, t, a, r, i) {
            return 0 == t ? a : r * Math.pow(2, 10 * (t / i - 1)) + a
        },
        easeOutExpo: function(e, t, a, r, i) {
            return t == i ? a + r : r * (-Math.pow(2, -10 * t / i) + 1) + a
        },
        easeInOutExpo: function(e, t, a, r, i) {
            return 0 == t ? a : t == i ? a + r : (t /= i / 2) < 1 ? r / 2 * Math.pow(2, 10 * (t - 1)) + a : r / 2 * (-Math.pow(2, -10 * --t) + 2) + a
        },
        easeInCirc: function(e, t, a, r, i) {
            return -r * (Math.sqrt(1 - (t /= i) * t) - 1) + a
        },
        easeOutCirc: function(e, t, a, r, i) {
            return r * Math.sqrt(1 - (t = t / i - 1) * t) + a
        },
        easeInOutCirc: function(e, t, a, r, i) {
            return (t /= i / 2) < 1 ? -r / 2 * (Math.sqrt(1 - t * t) - 1) + a : r / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + a
        },
        easeInElastic: function(e, t, a, r, i) {
            var n = 1.70158,
                o = 0,
                s = r;
            if (0 == t) return a;
            if (1 == (t /= i)) return a + r;
            if (o || (o = .3 * i), s < Math.abs(r)) {
                s = r;
                var n = o / 4
            } else var n = o / (2 * Math.PI) * Math.asin(r / s);
            return -(s * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * i - n) * (2 * Math.PI) / o)) + a
        },
        easeOutElastic: function(e, t, a, r, i) {
            var n = 1.70158,
                o = 0,
                s = r;
            if (0 == t) return a;
            if (1 == (t /= i)) return a + r;
            if (o || (o = .3 * i), s < Math.abs(r)) {
                s = r;
                var n = o / 4
            } else var n = o / (2 * Math.PI) * Math.asin(r / s);
            return s * Math.pow(2, -10 * t) * Math.sin((t * i - n) * (2 * Math.PI) / o) + r + a
        },
        easeInOutElastic: function(e, t, a, r, i) {
            var n = 1.70158,
                o = 0,
                s = r;
            if (0 == t) return a;
            if (2 == (t /= i / 2)) return a + r;
            if (o || (o = i * (.3 * 1.5)), s < Math.abs(r)) {
                s = r;
                var n = o / 4
            } else var n = o / (2 * Math.PI) * Math.asin(r / s);
            return 1 > t ? -.5 * (s * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * i - n) * (2 * Math.PI) / o)) + a : s * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * i - n) * (2 * Math.PI) / o) * .5 + r + a
        },
        easeInBack: function(e, t, a, r, i, n) {
            return void 0 == n && (n = 1.70158), r * (t /= i) * t * ((n + 1) * t - n) + a
        },
        easeOutBack: function(e, t, a, r, i, n) {
            return void 0 == n && (n = 1.70158), r * ((t = t / i - 1) * t * ((n + 1) * t + n) + 1) + a
        },
        easeInOutBack: function(e, t, a, r, i, n) {
            return void 0 == n && (n = 1.70158), (t /= i / 2) < 1 ? r / 2 * (t * t * (((n *= 1.525) + 1) * t - n)) + a : r / 2 * ((t -= 2) * t * (((n *= 1.525) + 1) * t + n) + 2) + a
        },
        easeInBounce: function(e, t, a, r, i) {
            return r - jQuery.easing.easeOutBounce(e, i - t, 0, r, i) + a
        },
        easeOutBounce: function(e, t, a, r, i) {
            return (t /= i) < 1 / 2.75 ? r * (7.5625 * t * t) + a : 2 / 2.75 > t ? r * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + a : 2.5 / 2.75 > t ? r * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + a : r * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + a
        },
        easeInOutBounce: function(e, t, a, r, i) {
            return i / 2 > t ? .5 * jQuery.easing.easeInBounce(e, 2 * t, 0, r, i) + a : .5 * jQuery.easing.easeOutBounce(e, 2 * t - i, 0, r, i) + .5 * r + a
        }
    }),
    function() {
        var e, t, a, r, i, n = function(e, t) {
                return function() {
                    return e.apply(t, arguments)
                }
            },
            o = [].indexOf || function(e) {
                for (var t = 0, a = this.length; a > t; t++)
                    if (t in this && this[t] === e) return t;
                return -1
            };
        t = function() {
            function e() {}
            return e.prototype.extend = function(e, t) {
                var a, r;
                for (a in t) r = t[a], null == e[a] && (e[a] = r);
                return e
            }, e.prototype.isMobile = function(e) {
                return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(e)
            }, e.prototype.addEvent = function(e, t, a) {
                return null != e.addEventListener ? e.addEventListener(t, a, !1) : null != e.attachEvent ? e.attachEvent("on" + t, a) : e[t] = a
            }, e.prototype.removeEvent = function(e, t, a) {
                return null != e.removeEventListener ? e.removeEventListener(t, a, !1) : null != e.detachEvent ? e.detachEvent("on" + t, a) : delete e[t]
            }, e.prototype.innerHeight = function() {
                return "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight
            }, e
        }(), a = this.WeakMap || this.MozWeakMap || (a = function() {
            function e() {
                this.keys = [], this.values = []
            }
            return e.prototype.get = function(e) {
                var t, a, r, i, n;
                for (n = this.keys, t = r = 0, i = n.length; i > r; t = ++r)
                    if (a = n[t], a === e) return this.values[t]
            }, e.prototype.set = function(e, t) {
                var a, r, i, n, o;
                for (o = this.keys, a = i = 0, n = o.length; n > i; a = ++i)
                    if (r = o[a], r === e) return void(this.values[a] = t);
                return this.keys.push(e), this.values.push(t)
            }, e
        }()), e = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (e = function() {
            function e() {
                "undefined" != typeof console && null !== console && console.warn("MutationObserver is not supported by your browser."), "undefined" != typeof console && null !== console && console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")
            }
            return e.notSupported = !0, e.prototype.observe = function() {}, e
        }()), r = this.getComputedStyle || function(e) {
            return this.getPropertyValue = function(t) {
                var a;
                return "float" === t && (t = "styleFloat"), i.test(t) && t.replace(i, function(e, t) {
                    return t.toUpperCase()
                }), (null != (a = e.currentStyle) ? a[t] : void 0) || null
            }, this
        }, i = /(\-([a-z]){1})/g, this.WOW = function() {
            function i(e) {
                null == e && (e = {}), this.scrollCallback = n(this.scrollCallback, this), this.scrollHandler = n(this.scrollHandler, this), this.start = n(this.start, this), this.scrolled = !0, this.config = this.util().extend(e, this.defaults), this.animationNameCache = new a
            }
            return i.prototype.defaults = {
                boxClass: "wow",
                animateClass: "animated",
                offset: 0,
                mobile: !0,
                live: !0,
                callback: null
            }, i.prototype.init = function() {
                var e;
                return this.element = window.document.documentElement, "interactive" === (e = document.readyState) || "complete" === e ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start), this.finished = []
            }, i.prototype.start = function() {
                var t, a, r, i;
                if (this.stopped = !1, this.boxes = function() {
                        var e, a, r, i;
                        for (r = this.element.querySelectorAll("." + this.config.boxClass), i = [], e = 0, a = r.length; a > e; e++) t = r[e], i.push(t);
                        return i
                    }.call(this), this.all = function() {
                        var e, a, r, i;
                        for (r = this.boxes, i = [], e = 0, a = r.length; a > e; e++) t = r[e], i.push(t);
                        return i
                    }.call(this), this.boxes.length)
                    if (this.disabled()) this.resetStyle();
                    else
                        for (i = this.boxes, a = 0, r = i.length; r > a; a++) t = i[a], this.applyStyle(t, !0);
                return this.disabled() || (this.util().addEvent(window, "scroll", this.scrollHandler), this.util().addEvent(window, "resize", this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50)), this.config.live ? new e(function(e) {
                    return function(t) {
                        var a, r, i, n, o;
                        for (o = [], i = 0, n = t.length; n > i; i++) r = t[i], o.push(function() {
                            var e, t, i, n;
                            for (i = r.addedNodes || [], n = [], e = 0, t = i.length; t > e; e++) a = i[e], n.push(this.doSync(a));
                            return n
                        }.call(e));
                        return o
                    }
                }(this)).observe(document.body, {
                    childList: !0,
                    subtree: !0
                }) : void 0
            }, i.prototype.stop = function() {
                return this.stopped = !0, this.util().removeEvent(window, "scroll", this.scrollHandler), this.util().removeEvent(window, "resize", this.scrollHandler), null != this.interval ? clearInterval(this.interval) : void 0
            }, i.prototype.sync = function() {
                return e.notSupported ? this.doSync(this.element) : void 0
            }, i.prototype.doSync = function(e) {
                var t, a, r, i, n;
                if (null == e && (e = this.element), 1 === e.nodeType) {
                    for (e = e.parentNode || e, i = e.querySelectorAll("." + this.config.boxClass), n = [], a = 0, r = i.length; r > a; a++) t = i[a], o.call(this.all, t) < 0 ? (this.boxes.push(t), this.all.push(t), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(t, !0), n.push(this.scrolled = !0)) : n.push(void 0);
                    return n
                }
            }, i.prototype.show = function(e) {
                return this.applyStyle(e), e.className = "" + e.className + " " + this.config.animateClass, null != this.config.callback ? this.config.callback(e) : void 0
            }, i.prototype.applyStyle = function(e, t) {
                var a, r, i;
                return r = e.getAttribute("data-wow-duration"), a = e.getAttribute("data-wow-delay"), i = e.getAttribute("data-wow-iteration"), this.animate(function(n) {
                    return function() {
                        return n.customStyle(e, t, r, a, i)
                    }
                }(this))
            }, i.prototype.animate = function() {
                return "requestAnimationFrame" in window ? function(e) {
                    return window.requestAnimationFrame(e)
                } : function(e) {
                    return e()
                }
            }(), i.prototype.resetStyle = function() {
                var e, t, a, r, i;
                for (r = this.boxes, i = [], t = 0, a = r.length; a > t; t++) e = r[t], i.push(e.style.visibility = "visible");
                return i
            }, i.prototype.customStyle = function(e, t, a, r, i) {
                return t && this.cacheAnimationName(e), e.style.visibility = t ? "hidden" : "visible", a && this.vendorSet(e.style, {
                    animationDuration: a
                }), r && this.vendorSet(e.style, {
                    animationDelay: r
                }), i && this.vendorSet(e.style, {
                    animationIterationCount: i
                }), this.vendorSet(e.style, {
                    animationName: t ? "none" : this.cachedAnimationName(e)
                }), e
            }, i.prototype.vendors = ["moz", "webkit"], i.prototype.vendorSet = function(e, t) {
                var a, r, i, n;
                n = [];
                for (a in t) r = t[a], e["" + a] = r, n.push(function() {
                    var t, n, o, s;
                    for (o = this.vendors, s = [], t = 0, n = o.length; n > t; t++) i = o[t], s.push(e["" + i + a.charAt(0).toUpperCase() + a.substr(1)] = r);
                    return s
                }.call(this));
                return n
            }, i.prototype.vendorCSS = function(e, t) {
                var a, i, n, o, s, l;
                for (i = r(e), a = i.getPropertyCSSValue(t), l = this.vendors, o = 0, s = l.length; s > o; o++) n = l[o], a = a || i.getPropertyCSSValue("-" + n + "-" + t);
                return a
            }, i.prototype.animationName = function(e) {
                var t;
                try {
                    t = this.vendorCSS(e, "animation-name").cssText
                } catch (a) {
                    t = r(e).getPropertyValue("animation-name")
                }
                return "none" === t ? "" : t
            }, i.prototype.cacheAnimationName = function(e) {
                return this.animationNameCache.set(e, this.animationName(e))
            }, i.prototype.cachedAnimationName = function(e) {
                return this.animationNameCache.get(e)
            }, i.prototype.scrollHandler = function() {
                return this.scrolled = !0
            }, i.prototype.scrollCallback = function() {
                var e;
                return !this.scrolled || (this.scrolled = !1, this.boxes = function() {
                    var t, a, r, i;
                    for (r = this.boxes, i = [], t = 0, a = r.length; a > t; t++) e = r[t], e && (this.isVisible(e) ? this.show(e) : i.push(e));
                    return i
                }.call(this), this.boxes.length || this.config.live) ? void 0 : this.stop()
            }, i.prototype.offsetTop = function(e) {
                for (var t; void 0 === e.offsetTop;) e = e.parentNode;
                for (t = e.offsetTop; e = e.offsetParent;) t += e.offsetTop;
                return t
            }, i.prototype.isVisible = function(e) {
                var t, a, r, i, n;
                return a = e.getAttribute("data-wow-offset") || this.config.offset, n = window.pageYOffset, i = n + Math.min(this.element.clientHeight, this.util().innerHeight()) - a, r = this.offsetTop(e), t = r + e.clientHeight, i >= r && t >= n
            }, i.prototype.util = function() {
                return null != this._util ? this._util : this._util = new t
            }, i.prototype.disabled = function() {
                return !this.config.mobile && this.util().isMobile(navigator.userAgent)
            }, i
        }()
    }.call(this), window.Modernizr = function(e, t, a) {
        function r(e) {
            v.cssText = e
        }

        function i(e, t) {
            return typeof e === t
        }

        function n(e, t) {
            return !!~("" + e).indexOf(t)
        }

        function o(e, t) {
            for (var r in e) {
                var i = e[r];
                if (!n(i, "-") && v[i] !== a) return "pfx" == t ? i : !0
            }
            return !1
        }

        function s(e, t, r) {
            for (var n in e) {
                var o = t[e[n]];
                if (o !== a) return r === !1 ? e[n] : i(o, "function") ? o.bind(r || t) : o
            }
            return !1
        }

        function l(e, t, a) {
            var r = e.charAt(0).toUpperCase() + e.slice(1),
                n = (e + " " + w.join(r + " ") + r).split(" ");
            return i(t, "string") || i(t, "undefined") ? o(n, t) : (n = (e + " " + b.join(r + " ") + r).split(" "), s(n, t, a))
        }
        var u, c, d, p = "2.7.1",
            h = {},
            f = !0,
            y = t.documentElement,
            m = "modernizr",
            g = t.createElement(m),
            v = g.style,
            j = ({}.toString, " -webkit- -moz- -o- -ms- ".split(" ")),
            Q = "Webkit Moz O ms",
            w = Q.split(" "),
            b = Q.toLowerCase().split(" "),
            _ = {},
            A = [],
            C = A.slice,
            x = function(e, a, r, i) {
                var n, o, s, l, u = t.createElement("div"),
                    c = t.body,
                    d = c || t.createElement("body");
                if (parseInt(r, 10))
                    for (; r--;) s = t.createElement("div"), s.id = i ? i[r] : m + (r + 1), u.appendChild(s);
                return n = ["&#173;", '<style id="s', m, '">', e, "</style>"].join(""), u.id = m, (c ? u : d).innerHTML += n, d.appendChild(u), c || (d.style.background = "", d.style.overflow = "hidden", l = y.style.overflow, y.style.overflow = "hidden", y.appendChild(d)), o = a(u, e), c ? u.parentNode.removeChild(u) : (d.parentNode.removeChild(d), y.style.overflow = l), !!o
            },
            k = function() {
                function e(e, n) {
                    n = n || t.createElement(r[e] || "div"), e = "on" + e;
                    var o = e in n;
                    return o || (n.setAttribute || (n = t.createElement("div")), n.setAttribute && n.removeAttribute && (n.setAttribute(e, ""), o = i(n[e], "function"), i(n[e], "undefined") || (n[e] = a), n.removeAttribute(e))), n = null, o
                }
                var r = {
                    select: "input",
                    change: "input",
                    submit: "form",
                    reset: "form",
                    error: "img",
                    load: "img",
                    abort: "img"
                };
                return e
            }(),
            S = {}.hasOwnProperty;
        d = i(S, "undefined") || i(S.call, "undefined") ? function(e, t) {
            return t in e && i(e.constructor.prototype[t], "undefined")
        } : function(e, t) {
            return S.call(e, t)
        }, Function.prototype.bind || (Function.prototype.bind = function(e) {
            var t = this;
            if ("function" != typeof t) throw new TypeError;
            var a = C.call(arguments, 1),
                r = function() {
                    if (this instanceof r) {
                        var i = function() {};
                        i.prototype = t.prototype;
                        var n = new i,
                            o = t.apply(n, a.concat(C.call(arguments)));
                        return Object(o) === o ? o : n
                    }
                    return t.apply(e, a.concat(C.call(arguments)))
                };
            return r
        }), _.touch = function() {
            var a;
            return "ontouchstart" in e || e.DocumentTouch && t instanceof DocumentTouch ? a = !0 : x(["@media (", j.join("touch-enabled),("), m, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(e) {
                a = 9 === e.offsetTop
            }), a
        }, _.csstransforms3d = function() {
            var e = !!l("perspective");
            return e && "webkitPerspective" in y.style && x("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(t, a) {
                e = 9 === t.offsetLeft && 3 === t.offsetHeight
            }), e
        }, _.csstransitions = function() {
            return l("transition")
        }, _.video = function() {
            var e = t.createElement("video"),
                a = !1;
            try {
                (a = !!e.canPlayType) && (a = new Boolean(a), a.ogg = e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""),
                    a.h264 = e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), a.webm = e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""))
            } catch (r) {}
            return a
        };
        for (var I in _) d(_, I) && (c = I.toLowerCase(), h[c] = _[I](), A.push((h[c] ? "" : "no-") + c));
        return h.addTest = function(e, t) {
                if ("object" == typeof e)
                    for (var r in e) d(e, r) && h.addTest(r, e[r]);
                else {
                    if (e = e.toLowerCase(), h[e] !== a) return h;
                    t = "function" == typeof t ? t() : t, "undefined" != typeof f && f && (y.className += " " + (t ? "" : "no-") + e), h[e] = t
                }
                return h
            }, r(""), g = u = null,
            function(e, t) {
                function a(e, t) {
                    var a = e.createElement("p"),
                        r = e.getElementsByTagName("head")[0] || e.documentElement;
                    return a.innerHTML = "x<style>" + t + "</style>", r.insertBefore(a.lastChild, r.firstChild)
                }

                function r() {
                    var e = v.elements;
                    return "string" == typeof e ? e.split(" ") : e
                }

                function i(e) {
                    var t = g[e[y]];
                    return t || (t = {}, m++, e[y] = m, g[m] = t), t
                }

                function n(e, a, r) {
                    if (a || (a = t), c) return a.createElement(e);
                    r || (r = i(a));
                    var n;
                    return n = r.cache[e] ? r.cache[e].cloneNode() : f.test(e) ? (r.cache[e] = r.createElem(e)).cloneNode() : r.createElem(e), !n.canHaveChildren || h.test(e) || n.tagUrn ? n : r.frag.appendChild(n)
                }

                function o(e, a) {
                    if (e || (e = t), c) return e.createDocumentFragment();
                    a = a || i(e);
                    for (var n = a.frag.cloneNode(), o = 0, s = r(), l = s.length; l > o; o++) n.createElement(s[o]);
                    return n
                }

                function s(e, t) {
                    t.cache || (t.cache = {}, t.createElem = e.createElement, t.createFrag = e.createDocumentFragment, t.frag = t.createFrag()), e.createElement = function(a) {
                        return v.shivMethods ? n(a, e, t) : t.createElem(a)
                    }, e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + r().join().replace(/[\w\-]+/g, function(e) {
                        return t.createElem(e), t.frag.createElement(e), 'c("' + e + '")'
                    }) + ");return n}")(v, t.frag)
                }

                function l(e) {
                    e || (e = t);
                    var r = i(e);
                    return v.shivCSS && !u && !r.hasCSS && (r.hasCSS = !!a(e, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), c || s(e, r), e
                }
                var u, c, d = "3.7.0",
                    p = e.html5 || {},
                    h = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                    f = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                    y = "_html5shiv",
                    m = 0,
                    g = {};
                ! function() {
                    try {
                        var e = t.createElement("a");
                        e.innerHTML = "<xyz></xyz>", u = "hidden" in e, c = 1 == e.childNodes.length || function() {
                            t.createElement("a");
                            var e = t.createDocumentFragment();
                            return "undefined" == typeof e.cloneNode || "undefined" == typeof e.createDocumentFragment || "undefined" == typeof e.createElement
                        }()
                    } catch (a) {
                        u = !0, c = !0
                    }
                }();
                var v = {
                    elements: p.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
                    version: d,
                    shivCSS: p.shivCSS !== !1,
                    supportsUnknownElements: c,
                    shivMethods: p.shivMethods !== !1,
                    type: "default",
                    shivDocument: l,
                    createElement: n,
                    createDocumentFragment: o
                };
                e.html5 = v, l(t)
            }(this, t), h._version = p, h._prefixes = j, h._domPrefixes = b, h._cssomPrefixes = w, h.hasEvent = k, h.testProp = function(e) {
                return o([e])
            }, h.testAllProps = l, h.testStyles = x, h.prefixed = function(e, t, a) {
                return t ? l(e, t, a) : l(e, "pfx")
            }, y.className = y.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (f ? " js " + A.join(" ") : ""), h
    }(this, this.document),
    function(e, t, a) {
        function r(e) {
            return "[object Function]" == m.call(e)
        }

        function i(e) {
            return "string" == typeof e
        }

        function n() {}

        function o(e) {
            return !e || "loaded" == e || "complete" == e || "uninitialized" == e
        }

        function s() {
            var e = g.shift();
            v = 1, e ? e.t ? f(function() {
                ("c" == e.t ? p.injectCss : p.injectJs)(e.s, 0, e.a, e.x, e.e, 1)
            }, 0) : (e(), s()) : v = 0
        }

        function l(e, a, r, i, n, l, u) {
            function c(t) {
                if (!h && o(d.readyState) && (j.r = h = 1, !v && s(), d.onload = d.onreadystatechange = null, t)) {
                    "img" != e && f(function() {
                        w.removeChild(d)
                    }, 50);
                    for (var r in x[a]) x[a].hasOwnProperty(r) && x[a][r].onload()
                }
            }
            var u = u || p.errorTimeout,
                d = t.createElement(e),
                h = 0,
                m = 0,
                j = {
                    t: r,
                    s: a,
                    e: n,
                    a: l,
                    x: u
                };
            1 === x[a] && (m = 1, x[a] = []), "object" == e ? d.data = a : (d.src = a, d.type = e), d.width = d.height = "0", d.onerror = d.onload = d.onreadystatechange = function() {
                c.call(this, m)
            }, g.splice(i, 0, j), "img" != e && (m || 2 === x[a] ? (w.insertBefore(d, Q ? null : y), f(c, u)) : x[a].push(d))
        }

        function u(e, t, a, r, n) {
            return v = 0, t = t || "j", i(e) ? l("c" == t ? _ : b, e, t, this.i++, a, r, n) : (g.splice(this.i++, 0, e), 1 == g.length && s()), this
        }

        function c() {
            var e = p;
            return e.loader = {
                load: u,
                i: 0
            }, e
        }
        var d, p, h = t.documentElement,
            f = e.setTimeout,
            y = t.getElementsByTagName("script")[0],
            m = {}.toString,
            g = [],
            v = 0,
            j = "MozAppearance" in h.style,
            Q = j && !!t.createRange().compareNode,
            w = Q ? h : y.parentNode,
            h = e.opera && "[object Opera]" == m.call(e.opera),
            h = !!t.attachEvent && !h,
            b = j ? "object" : h ? "script" : "img",
            _ = h ? "script" : b,
            A = Array.isArray || function(e) {
                return "[object Array]" == m.call(e)
            },
            C = [],
            x = {},
            k = {
                timeout: function(e, t) {
                    return t.length && (e.timeout = t[0]), e
                }
            };
        p = function(e) {
            function t(e) {
                var t, a, r, e = e.split("!"),
                    i = C.length,
                    n = e.pop(),
                    o = e.length,
                    n = {
                        url: n,
                        origUrl: n,
                        prefixes: e
                    };
                for (a = 0; o > a; a++) r = e[a].split("="), (t = k[r.shift()]) && (n = t(n, r));
                for (a = 0; i > a; a++) n = C[a](n);
                return n
            }

            function o(e, i, n, o, s) {
                var l = t(e),
                    u = l.autoCallback;
                l.url.split(".").pop().split("?").shift(), l.bypass || (i && (i = r(i) ? i : i[e] || i[o] || i[e.split("/").pop().split("?")[0]]), l.instead ? l.instead(e, i, n, o, s) : (x[l.url] ? l.noexec = !0 : x[l.url] = 1, n.load(l.url, l.forceCSS || !l.forceJS && "css" == l.url.split(".").pop().split("?").shift() ? "c" : a, l.noexec, l.attrs, l.timeout), (r(i) || r(u)) && n.load(function() {
                    c(), i && i(l.origUrl, s, o), u && u(l.origUrl, s, o), x[l.url] = 2
                })))
            }

            function s(e, t) {
                function a(e, a) {
                    if (e) {
                        if (i(e)) a || (d = function() {
                            var e = [].slice.call(arguments);
                            p.apply(this, e), h()
                        }), o(e, d, t, 0, u);
                        else if (Object(e) === e)
                            for (l in s = function() {
                                    var t, a = 0;
                                    for (t in e) e.hasOwnProperty(t) && a++;
                                    return a
                                }(), e) e.hasOwnProperty(l) && (!a && !--s && (r(d) ? d = function() {
                                var e = [].slice.call(arguments);
                                p.apply(this, e), h()
                            } : d[l] = function(e) {
                                return function() {
                                    var t = [].slice.call(arguments);
                                    e && e.apply(this, t), h()
                                }
                            }(p[l])), o(e[l], d, t, l, u))
                    } else !a && h()
                }
                var s, l, u = !!e.test,
                    c = e.load || e.both,
                    d = e.callback || n,
                    p = d,
                    h = e.complete || n;
                a(u ? e.yep : e.nope, !!c), c && a(c)
            }
            var l, u, d = this.yepnope.loader;
            if (i(e)) o(e, 0, d, 0);
            else if (A(e))
                for (l = 0; l < e.length; l++) u = e[l], i(u) ? o(u, 0, d, 0) : A(u) ? p(u) : Object(u) === u && s(u, d);
            else Object(e) === e && s(e, d)
        }, p.addPrefix = function(e, t) {
            k[e] = t
        }, p.addFilter = function(e) {
            C.push(e)
        }, p.errorTimeout = 1e4, null == t.readyState && t.addEventListener && (t.readyState = "loading", t.addEventListener("DOMContentLoaded", d = function() {
            t.removeEventListener("DOMContentLoaded", d, 0), t.readyState = "complete"
        }, 0)), e.yepnope = c(), e.yepnope.executeStack = s, e.yepnope.injectJs = function(e, a, r, i, l, u) {
            var c, d, h = t.createElement("script"),
                i = i || p.errorTimeout;
            h.src = e;
            for (d in r) h.setAttribute(d, r[d]);
            a = u ? s : a || n, h.onreadystatechange = h.onload = function() {
                !c && o(h.readyState) && (c = 1, a(), h.onload = h.onreadystatechange = null)
            }, f(function() {
                c || (c = 1, a(1))
            }, i), l ? h.onload() : y.parentNode.insertBefore(h, y)
        }, e.yepnope.injectCss = function(e, a, r, i, o, l) {
            var u, i = t.createElement("link"),
                a = l ? s : a || n;
            i.href = e, i.rel = "stylesheet", i.type = "text/css";
            for (u in r) i.setAttribute(u, r[u]);
            o || (y.parentNode.insertBefore(i, y), f(a, 0))
        }
    }(this, document), Modernizr.load = function() {
        yepnope.apply(window, [].slice.call(arguments, 0))
    };