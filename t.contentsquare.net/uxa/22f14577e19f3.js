var CS_CONF = {
    "projectId": 10848,
    "status": 1,
    "hostnames": ["spotify.com"],
    "crossDomainTracking": 0,
    "crossDomainSingleIframeTracking": 0,
    "consentRequired": 0,
    "allowSubdomains": 1,
    "visitorCookieTimeout": 34164000000,
    "sampleRate": 100,
    "replayRecordingRate": 50,
    "validationRate": 10,
    "lastTrackingDraw": null,
    "trackerDomain": "c.contentsquare.net",
    "recordingDomain": "r.contentsquare.net",
    "useMalkaPipeline": 1,
    "ed": "l.contentsquare.net/log/web",
    "eMerchandisingEnabled": 0,
    "mouseMoveHeatmapEnabled": 0,
    "autoInsightsEnabled": 0,
    "jsErrorsEnabled": 1,
    "apiErrorsEnabled": 1,
    "customHashIdEnabled": 0,
    "recordingEncryptionEnabled": 0,
    "recordingEncryptionPublicKey": null,
    "recordingEncryptionPublicKeyId": 0,
    "secureCookiesEnabled": 0,
    "triggerSessionReplayEnabled": 0,
    "triggerSessionReplayRegex": null,
    "dynamicIdRegex": null,
    "whitelistedAttributes": [],
    "replayRecordingUnmaskedUrlRegex": null,
    "replayRecordingMaskedUrlRegex": "https\\:\\/\\/.*\\.spotify\\.com\\/us\\/purchase\\/offer\\/.*",
    "tagDeploymentMode": "CONTENTSQUARE",
    "experimental": null,
    "iframesTracking": 0,
    "textVisibilityEnabled": 1,
    "cookielessTrackingEnabled": 0,
    "malkaUrlEnabled": 1,
    "malkaEtrEnabled": 1,
    "pathComputationRules": {
        "reliableSelectors": []
    },
    "asyncSerializerEnabled": 1,
    "apiErrors": {
        "validCustomHeaders": [],
        "validUrls": [],
        "collectStandardHeaders": 0,
        "collectQueryParam": 0,
        "collectRequestBody": 0,
        "collectResponseBody": 0
    },
    "malkaQuotaServiceDomain": "q-aeu1.contentsquare.net",
    "malkaRecordingDomain": "k-aeu1.contentsquare.net"
};
var CS_INTEGRATIONS_CONF = {
    "google-optimize": {},
    "usabilla": {}
};
/* integration-google-optimize 2.5.0 */
! function(e) {
    var n = {};

    function t(a) {
        if (n[a]) return n[a].exports;
        var r = n[a] = {
            i: a,
            l: !1,
            exports: {}
        };
        return e[a].call(r.exports, r, r.exports, t), r.l = !0, r.exports
    }
    t.m = e, t.c = n, t.d = function(e, n, a) {
        t.o(e, n) || Object.defineProperty(e, n, {
            enumerable: !0,
            get: a
        })
    }, t.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, t.t = function(e, n) {
        if (1 & n && (e = t(e)), 8 & n) return e;
        if (4 & n && "object" == typeof e && e && e.__esModule) return e;
        var a = Object.create(null);
        if (t.r(a), Object.defineProperty(a, "default", {
                enumerable: !0,
                value: e
            }), 2 & n && "string" != typeof e)
            for (var r in e) t.d(a, r, function(n) {
                return e[n]
            }.bind(null, r));
        return a
    }, t.n = function(e) {
        var n = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return t.d(n, "a", n), n
    }, t.o = function(e, n) {
        return Object.prototype.hasOwnProperty.call(e, n)
    }, t.p = "", t(t.s = 1)
}([function(e) {
    e.exports = JSON.parse('{"name":"@contentsquare/integration-google-optimize-contentsquare","version":"2.5.0","scripts":{"build:snippet":"webpack"}}')
}, function(e, n, t) {
    "use strict";

    function a(e, n) {
        try {
            e()
        } catch (e) {
            window._uxa = window._uxa || [], _uxa.push(["logSnippetError", n, e.message])
        }
    }
    t.r(n);
    var r = t(0),
        i = r.name,
        o = r.version,
        u = function(e) {
            var n, t, r, i;
            if (a((function() {
                    var a = e.name;
                    r = e.version;
                    var o = a.replace("@contentsquare/integration-", "");
                    n = o + "-" + r;
                    var u = "-contentsquare";
                    i = new RegExp(u + "$").test(o), t = o.replace(/-contentsquare([^-contentsquare]*)$/, "$1"), i || (u = "-cap", i = new RegExp(u + "$").test(o), t = o.replace(/-cap([^-cap]*)$/, "$1"))
                }), "Shared-Function-readPackageJSON"), i) return {
                snippetBuildName: n,
                parameterName: t,
                snippetVersion: r
            }
        }(r);
    u && (u.parameterName, i = u.snippetBuildName, o = u.snippetVersion), a((function() {
        window._uxa = window._uxa || [], CS_CONF.integrations = CS_CONF.integrations || [], CS_CONF.integrations.push("Google Optimize - v" + o);

        function e(e) {
            var n = [];

            function t(e, t) {
                var a, r;
                n.length && n.indexOf(e + "~~~~" + t) > -1 && (e = "", t = ""), e && t && (n.push(e + "~~~~" + t), r = t, a = "AB_GO_" + (a = e), _uxa.push(["trackDynamicVariable", {
                    key: a,
                    value: r
                }]))
            }
            var r = "",
                o = "";
            if (document.location.search.indexOf("utm_expid=.") > -1) {
                var u = function(e, n) {
                    n || (n = "="), e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
                    var t = new RegExp("[\\?&=]" + e + n + "([^&#]*)").exec(location.search);
                    return null === t ? "" : decodeURIComponent(t[1].replace(/\+/g, " "))
                }("utm_expid");
                u && (r = u.split(".")[1], o = u.split(".")[2], t(r, o))
            }! function(e, n, t) {
                if ((t = t || window) && n && e) {
                    var a = !1,
                        r = t[e];
                    r ? n() : Object.defineProperty(t, e, {
                        configurable: !0,
                        enumerable: !0,
                        get: function() {
                            return r
                        },
                        set: function(e) {
                            r = e, a || (a = !0, n())
                        }
                    })
                }
            }("gaData", (function() {
                setTimeout((function() {
                    a((function() {
                        var e = !1;
                        for (var n in gaData) e || gaData.hasOwnProperty(n) && gaData[n].experiments && (e = !0);
                        if (e) {
                            var u = Object.keys(gaData);
                            for (n = 0; n < u.length; n++)
                                if (gaData[u[n]].experiments)
                                    for (var c = gaData[u[n]].experiments, p = Object.keys(c), f = 0; f < p.length; f++) {
                                        var s = p[f];
                                        r = s, o = gaData[u[n]].experiments[s], t(r, o)
                                    }
                        }
                        if (window.dataLayer) {
                            (window.gtag ? gtag : function() {
                                dataLayer.push(arguments)
                            })("event", "optimize.callback", {
                                callback: function(e, n) {
                                    a((function() {
                                        n && e && t(r = n, o = e)
                                    }), i)
                                }
                            })
                        }
                    }), i)
                }), 500)
            }))
        }
        var n = !1;
        _uxa.push(["afterPageView", function(t) {
            a((function() {
                n || (n = !0, e())
            }), i)
        }])
    }), i)
}]); /* integration-usabilla 2.11.0 */
! function(e) {
    var a = {};

    function t(n) {
        if (a[n]) return a[n].exports;
        var i = a[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(i.exports, i, i.exports, t), i.l = !0, i.exports
    }
    t.m = e, t.c = a, t.d = function(e, a, n) {
        t.o(e, a) || Object.defineProperty(e, a, {
            enumerable: !0,
            get: n
        })
    }, t.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, t.t = function(e, a) {
        if (1 & a && (e = t(e)), 8 & a) return e;
        if (4 & a && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (t.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & a && "string" != typeof e)
            for (var i in e) t.d(n, i, function(a) {
                return e[a]
            }.bind(null, i));
        return n
    }, t.n = function(e) {
        var a = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return t.d(a, "a", a), a
    }, t.o = function(e, a) {
        return Object.prototype.hasOwnProperty.call(e, a)
    }, t.p = "", t(t.s = 1)
}([function(e) {
    e.exports = JSON.parse('{"name":"@contentsquare/integration-usabilla-contentsquare","version":"2.11.0","scripts":{"build:snippet":"webpack"}}')
}, function(e, a, t) {
    "use strict";

    function n(e, a) {
        try {
            e()
        } catch (e) {
            window._uxa = window._uxa || [], _uxa.push(["logSnippetError", a, e.message])
        }
    }

    function i(e) {
        return "object" == typeof e && null !== e
    }

    function r(e, a) {
        e || (e = "missingFromDynamicSnippet");
        var t = a;
        isNaN(t) && (a = 0);
        var n = "";
        ("CONTENTSQUARE" === CS_CONF.tagDeploymentMode || CS_CONF.useMalkaPipeline) && (n = "&recordingType=cs");
        var i = _uxa.push(["getSessionData"]);
        if (i) {
            var r = i.projectId,
                o = i.userId,
                u = i.sessionNumber,
                s = i.pageNumber,
                c = s - a;
            return a >= s && (c = s), 0 === t && (c = 1), "https://app.contentsquare.com/quick-playback/index.html?pid=" + r + "&uu=" + o + "&sn=" + u + "&pvid=" + c + n + "&vd=" + e
        }
    }

    function o(e, a, t) {
        if ((t = t || window) && a && e) {
            var n = !1,
                i = t[e];
            i ? a() : Object.defineProperty(t, e, {
                configurable: !0,
                enumerable: !0,
                get: function() {
                    return i
                },
                set: function(e) {
                    i = e, n || (n = !0, a())
                }
            })
        }
    }
    t.r(a);
    var u, s = t(0),
        c = s.name,
        l = s.version,
        d = function(e) {
            var a, t, i, r;
            if (n((function() {
                    var n = e.name;
                    i = e.version;
                    var o = n.replace("@contentsquare/integration-", "");
                    a = o + "-" + i;
                    var u = "-contentsquare";
                    r = new RegExp(u + "$").test(o), t = o.replace(/-contentsquare([^-contentsquare]*)$/, "$1"), r || (u = "-cap", r = new RegExp(u + "$").test(o), t = o.replace(/-cap([^-cap]*)$/, "$1"))
                }), "Shared-Function-readPackageJSON"), r) return {
                snippetBuildName: a,
                parameterName: t,
                snippetVersion: i
            }
        }(s);
    d && (u = d.parameterName, c = d.snippetBuildName, l = d.snippetVersion), n((function() {
        window._uxa = window._uxa || [], CS_CONF.integrations = CS_CONF.integrations || [], CS_CONF.integrations.push("GetFeedback Digital (Usabilla) - v" + l);
        var e = function(e, a) {
                if (i(window.CS_INTEGRATIONS_CONF) && i(window.CS_INTEGRATIONS_CONF[e])) return window.CS_INTEGRATIONS_CONF[e][a]
            }(u, "settings"),
            a = !1,
            t = !1,
            s = "",
            d = !1;
        e && (e.indexOf("sendArtificialPageviews") > -1 && (a = !0), e.indexOf("enableInPageWidgets") > -1 && (t = !0), e.indexOf("setReplayLinkToFirstPV") > -1 && (s = 0), e.indexOf("disableSendingDataToCS") > -1 && (d = !0));
        var p = !1;

        function f(e, t, n, i) {
            e = "FB_UB_" + e, _uxa.push(["trackDynamicVariable", {
                key: e,
                value: t
            }]), p && "etr" === n && _uxa.push(["trackEventTriggerRecording", "@ETS@" + e]), i && a && _uxa.push(["trackPageview", window.location.pathname + "?" + i])
        }

        function g(e) {
            if (o("usabilla_live", (function() {
                    setTimeout((function() {
                        n((function() {
                            var e, a = document.getElementById("lightningjs-frame-usabilla_live");
                            if (a && a.contentWindow && a.contentWindow.usabilla_live_settings) {
                                var t = (e = void n((function() {
                                    return a.contentWindow.usabilla_live_settings.eventCallback
                                }), c), function(t, i, o, u, l) {
                                    n((function() {
                                        e && e.apply(this, arguments);
                                        var t = l;
                                        if (("Feedback:Open" == i || "Campaign:Open" === i) && (p = _uxa.push(["isRecording"]))) {
                                            var n = r("ub", s);
                                            n && a.contentWindow.usabilla_live_settings.local_data && a.contentWindow.usabilla_live_settings.local_data.custom && (a.contentWindow.usabilla_live_settings.local_data.custom.ContentsquareReplay = n)
                                        }
                                        if ("Feedback:Open" == i && f("Feedback Displayed (All Surveys)", "true", 0, "cs_usabilla=feedback_displayed"), "Feedback:Success" === i && (f("Feedback Submitted (All Surveys)", "true", "etr", "cs_usabilla=feedback_submitted"), !1 === d && t))
                                            for (var u = Object.keys(t), c = 0; c < u.length; c++) {
                                                var g = u[c],
                                                    b = t[u[c]],
                                                    v = "";
                                                "email" != g && "comment" != g && "custom" != g && ("rating" === g ? v = "Feedback Mood Rating" : "nps" === g ? v = "Feedback NPS Rating" : "performance" === g && (v = "Feedback Performance Rating"), isNaN(b) || (b = parseInt(b)), v && b && f(v, b))
                                            }
                                        if ("Campaign:Open" === i && f("Campaign Displayed", o, 0, "cs_usabilla=campaign_displayed_" + o), "Campaign:Page Switch" === i && !1 === d && t && t.data)
                                            for (var m = Object.keys(t.data), _ = 0; _ < m.length; _++) {
                                                var N = m[_],
                                                    S = t.data[m[_]],
                                                    w = "";
                                                if ("email" != N)
                                                    if (w = "mood" === N ? "Campaign Mood Rating" : "nps" === N ? "Campaign NPS Rating" : N, "object" == typeof S)
                                                        for (var y = Object.keys(S), O = 0; O < y.length; O++) {
                                                            var C = y[O],
                                                                k = S[y[O]];
                                                            isNaN(k) || (k = parseInt(k)), isNaN(C) && w && C && k && f(w + " " + C, k)
                                                        } else isNaN(S) || (S = parseInt(S)), w && S && f(w, S)
                                            }
                                        "Campaign:Success" === i && f("Campaign Submitted", o, "etr", "cs_usabilla=campaign_submitted_" + o)
                                    }), c)
                                });
                                window.usabilla_live("setEventCallback", t)
                            }
                        }), c)
                    }), 500)
                })), t) {
                o("usabilla", (function() {
                    setTimeout((function() {
                        n((function() {
                            var e = [],
                                a = "",
                                t = "",
                                i = "";

                            function o(a, t, n) {
                                e.length && e.indexOf(a + "~~~~" + t) > -1 ? a = "" : (e.push(a + "~~~~" + t), a && f("Widget " + a + " : " + t, n))
                            }
                            if (window.usabilla("setEventCallback", (function(e, r, u, s, l) {
                                    n((function() {
                                        var e = l.data,
                                            n = e.widget_id;
                                        "In-Page:Page Switch" === r && !1 === d && e.data && (a = parseInt(e.data.nps), t = parseInt(e.data.rating), i = parseInt(e.data.mood), isNaN(a) || o("NPS", n, a), isNaN(t) || o("Rating", n, t), isNaN(i) || o("Mood", n, i)), "In-Page:Success" === r && (!1 === d && e.data && (a = parseInt(e.data.nps), t = parseInt(e.data.rating), i = parseInt(e.data.mood), isNaN(a) || o("NPS Rating", n, a), isNaN(t) || o("Rating", n, t), isNaN(i) || o("Mood", n, i)), f("Widget Submitted - ID: " + n, "true", "etr", "cs_usabilla=widget_submitted_" + n))
                                    }), c)
                                })), p = _uxa.push(["isRecording"])) {
                                var u = r("ub", s);
                                u && function(e, a) {
                                    for (var t = document.querySelectorAll("div[ub-in-page]"), n = 0; n < t.length; n++) {
                                        var i = t[n];
                                        if (!i.getAttribute("ub-in-page-contentsquare-replay")) {
                                            var r = document.createAttribute("ub-in-page-" + e);
                                            if (r) r.value = a, i.setAttributeNode(r), f("Widget Displayed - ID: " + i.getAttribute("ub-in-page"), "true")
                                        }
                                    }! function() {
                                        for (var e = document.querySelectorAll("div[ub-in-page]"), a = 0; a < e.length; a++) {
                                            e[a].innerHTML = ""
                                        }
                                        var t = document.querySelectorAll('*[id^="usabilla-"]');
                                        if (t) {
                                            var n = t[0];
                                            if (n) {
                                                var i = n.getAttribute("id");
                                                if (i) {
                                                    var r = i.slice(9);
                                                    r && usabilla.load && window.usabilla.load("w.usabilla.com", r)
                                                }
                                            }
                                        }
                                    }()
                                }("contentsquare-replay", u)
                            }
                        }), c)
                    }), 500)
                }))
            }
        }
        var b = !1;
        _uxa.push(["afterPageView", function(e) {
            n((function() {
                b || (b = !0, g())
            }), c)
        }])
    }), c)
}]);
! function(t) {
    var e = {};

    function i(r) {
        if (e[r]) return e[r].exports;
        var n = e[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return t[r].call(n.exports, n, n.exports, i), n.l = !0, n.exports
    }
    i.m = t, i.c = e, i.d = function(t, e, r) {
        i.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: r
        })
    }, i.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, i.t = function(t, e) {
        if (1 & e && (t = i(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var r = Object.create(null);
        if (i.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var n in t) i.d(r, n, function(e) {
                return t[e]
            }.bind(null, n));
        return r
    }, i.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return i.d(e, "a", e), e
    }, i.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, i.p = "", i(i.s = 2)
}([, function(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = /(@import\s+url\s*\(\s*(["'])?([^"')]+)(\2)\s*\))|(@import\s+(["'])([^"']+)\6)|(url\s*\(\s*(["'])?([^"')]+)(\9)\s*\))/g;

    function n(t, e) {
        return t.replace(r, (function() {
            for (var t = [], i = 0; i < arguments.length; i++) t[i] = arguments[i];
            var r = t[3] || t[7],
                n = t[10],
                o = (r || n).trim(),
                s = r ? "@import " : "";
            return s + "url(" + e(o) + ")"
        }))
    }
    e.replaceIn = n, e.extractFrom = function(t) {
        var e = [];
        return n(t, (function(t) {
            return e.push(t), t
        })), e
    }
}, function(t, e, i) {
    "use strict";
    i.r(e);
    var r = {};
    i.r(r), i.d(r, "get", (function() {
        return ot
    })), i.d(r, "getRequestParameters", (function() {
        return st
    }));
    var n = {};
    i.r(n), i.d(n, "getRequestParameters", (function() {
        return Qr
    }));
    var o = ["childNodes", "parentNode", "nextSibling", "firstChild"],
        s = ["shadowRoot"],
        a = ["target"],
        c = {
            Date: "csDate",
            JSON: "csJSON",
            Array: "csArray",
            String: "csString",
            URL: "csURL",
            MutationObserver: "csMutationObserver",
            screen: "csScreen"
        };

    function u(t, e) {
        var i = function(t, e) {
            for (var i, r = t; r && !(i = Object.getOwnPropertyDescriptor(r, e));) r = Object.getPrototypeOf(r);
            return i
        }(t, e);
        return (null == i ? void 0 : i.get) ? i.get : (null == i ? void 0 : i.value) ? i.value : function() {
            return this[e]
        }
    }

    function p(t) {
        Object.keys(c).forEach((function(e) {
            window[c[e]] = t[e]
        })), l("csNode", o, t.Node.prototype), l("csElement", s, t.Element.prototype), l("csEvent", a, t.Event.prototype)
    }

    function l(t, e, i) {
        e.forEach((function(e) {
            window["" + (t + e)] = u(i, e)
        }))
    }

    function h(t, e) {
        window.CSProtectnativeFunctionsLogs = window.CSProtectnativeFunctionsLogs || {}, window.CSProtectnativeFunctionsLogs[t] = e
    }
    if (! function() {
            try {
                var t = function() {
                    var t = document.createElement("iframe");
                    t.id = "cs-native-frame", t.setAttribute("hidden", ""), t.setAttribute("title", "Intentionally blank");
                    var e = document.createElement("cs-native-frame-holder");
                    if (e.setAttribute("hidden", ""), document.body.appendChild(e), Element.prototype.attachShadow) {
                        var i = e.attachShadow({
                            mode: "closed"
                        });
                        return i.innerHTML = t.outerHTML, i.firstElementChild.contentWindow
                    }
                    return e.innerHTML = t.outerHTML, e.firstElementChild.contentWindow
                }();
                return !!t && (window.CSPureWindow = t, p(window.CSPureWindow), !0)
            } catch (t) {
                return h("Warning", "failed to copy references from pure iframe: " + t.message), !1
            }
        }()) try {
        p(window)
    } catch (t) {
        h("Critical", "failed to copy references from window: " + t.message)
    }

    function d(t) {
        return csString.prototype.replace.call(t, /([#;&,.+*~':"!^$[\]()<=>|/%?@`{}\\ ])/g, "\\$1")
    }

    function f(t) {
        return t.nodeType === Node.ELEMENT_NODE
    }

    function y(t) {
        return t.nodeType === Node.TEXT_NODE
    }

    function v(t) {
        return function(t) {
            return f(t) && "link" === t.localName
        }(t) && "stylesheet" === t.rel
    }

    function m(t) {
        return f(t) && "img" === t.localName
    }

    function g(t) {
        return f(t) && "style" === t.localName
    }

    function S(t) {
        return f(t) && "input" === t.localName
    }

    function E(t) {
        return f(t) && "script" === t.localName
    }

    function C(t) {
        switch (t.nodeType) {
            case Node.DOCUMENT_NODE:
            case Node.DOCUMENT_FRAGMENT_NODE:
                return !0;
            default:
                return !1
        }
    }

    function T(t) {
        for (var e = t, i = [e]; null !== csNodeparentNode.apply(e);) e = csNodeparentNode.apply(e), csArray.prototype.push.call(i, e);
        return w(e) && csArray.prototype.push.call(i, "detached"), {
            ancestors: i,
            selectionRoot: e
        }
    }

    function w(t) {
        return O.isValidElement(t)
    }

    function b(t) {
        return csArray.prototype.slice.call(t)
    }
    var R = Element.prototype.matches || Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector;

    function k(t, e, i) {
        if ("detached" === t || 9 === t.nodeType) return 0;
        var r = csArray.prototype.filter.call(b(csNodechildNodes.apply(t)), (function(t) {
            return 1 === t.nodeType && ! function(t, e) {
                return !!e && csArray.prototype.some.call(e, (function(e) {
                    return R.call(t, e)
                }))
            }(t, i.reliableSelectors) && csString.prototype.toLowerCase.call(t.localName) === csString.prototype.toLowerCase.call(e.localName)
        }));
        return csArray.prototype.indexOf.call(r, e)
    }
    var A = [/\d{4}/, /^ember\d+$/];

    function I(t, e, i, r) {
        var n = r.dynamicIdRegex || null,
            o = function(t) {
                return d(csString.prototype.toLowerCase.call(t.localName))
            }(t);
        if (function(t, e) {
                var i = P(t);
                return i && csString.prototype.match.call(i, /^[\w-]+$/) && N("data-cs-override-id", i, e)
            }(t, i)) return {
            hasUniqueIdentifier: !0,
            elementSelector: o + '[data-cs-override-id="' + P(t) + '"]'
        };
        var s = function(t, e, i) {
            if (!i.uniqueAttributes) return {
                success: !1
            };
            for (var r = 0, n = i.uniqueAttributes; r < n.length; r++) {
                var o = n[r],
                    s = t.getAttribute(o);
                if (null !== s)
                    if (N(o, s, e)) return {
                        attributeName: o,
                        attributeValue: s,
                        success: !0
                    }
            }
            return {
                success: !1
            }
        }(t, i, r);
        if (s.success) return {
            hasUniqueIdentifier: !0,
            elementSelector: o + "#UA[" + s.attributeName + '="' + s.attributeValue + '"]'
        };
        var a = function(t, e, i) {
            if (!i.uniqueCssSelectors) return;
            for (var r = 0, n = i.uniqueCssSelectors; r < n.length; r++) {
                var o = n[r];
                if (R.call(t, o) && M(o, e)) return o
            }
            return
        }(t, i, r);
        if (a) return {
            hasUniqueIdentifier: !0,
            elementSelector: o + "#UCS[" + a + "]"
        };
        var c = function(t) {
            var e = t.getAttribute("id");
            return e ? d(e) : e
        }(t);
        if (function(t, e, i, r) {
                return e && ! function(t) {
                    return null !== P(t)
                }(t) && ! function(t, e, i) {
                    return t.hasAttribute("data-cs-dynamic-id") || function(t, e) {
                        var i = !1;
                        t && e && (i = e.test(t));
                        return t && (csArray.prototype.some.call(A, (function(e) {
                            return e.test(t)
                        })) || i)
                    }(e, i)
                }(t, e, r) && function(t, e) {
                    return t && N("id", t, e)
                }(e, i)
            }(t, c, i, n)) return {
            hasUniqueIdentifier: !0,
            elementSelector: o + "#" + c
        };
        var u = function(t, e) {
            if (!e.reliableSelectors) return;
            for (var i = 0, r = e.reliableSelectors; i < r.length; i++) {
                var n = r[i];
                if (R.call(t, n)) return n
            }
            return
        }(t, r);
        return u ? {
            hasUniqueIdentifier: !1,
            elementSelector: o + "[" + u + "](" + function(t, e, i) {
                if ("detached" === t || 9 === t.nodeType) return 0;
                var r = csArray.prototype.filter.call(b(csNodechildNodes.apply(t)), (function(t) {
                    return 1 === t.nodeType && R.call(t, i)
                }));
                return csArray.prototype.indexOf.call(r, e)
            }(e, t, u) + ")"
        } : {
            hasUniqueIdentifier: !1,
            elementSelector: o + ":eq(" + k(e, t, r) + ")"
        }
    }

    function P(t) {
        return t.getAttribute("data-cs-override-id")
    }

    function N(t, e, i) {
        try {
            return 1 === i.querySelectorAll("[" + t + '="' + e + '"]').length
        } catch (t) {
            if ("SyntaxError" !== t.name) throw t
        }
        return !1
    }

    function M(t, e) {
        try {
            return 1 === e.querySelectorAll(t).length
        } catch (t) {
            if ("SyntaxError" !== t.name) throw t
        }
        return !1
    }
    var O;

    function L(t, e, i) {
        var r = csArray.prototype.shift.call(t);
        if (0 === t.length) return x(r, i);
        var n = I(r, t[0], e, i),
            o = n.elementSelector,
            s = n.hasUniqueIdentifier;
        if (!i.fullPath && s) return "" + x(t[t.length - 1], i) + o;
        var a = L(t, e, i);
        return (a ? a + ">" : "") + o
    }

    function x(t, e) {
        if ("detached" === t) return "|detached|";
        if (t.host) {
            var i = T(t.host);
            return L(i.ancestors, i.selectionRoot, e) + "|shadow-root|"
        }
        return 11 === t.nodeType ? "|fragment|" : ""
    }! function(t) {
        function e(t) {
            return !!t && "localName" in t && "getAttribute" in t && "hasAttribute" in t && "parentNode" in t
        }

        function i(t) {
            return t && "jquery" in t && 1 === t.length ? t[0] : t
        }
        t.INVALID_ELEMENT = "INVALID_ELEMENT", t.isValidElement = e, t.getElementPath = function(r, n) {
            void 0 === n && (n = {
                fullPath: !1,
                dynamicIdRegex: null
            });
            var o = i(r);
            if (o === document) return "";
            if (!e(o)) return t.INVALID_ELEMENT;
            var s = T(o);
            return L(s.ancestors, s.selectionRoot, n)
        }, t.getElementPathAndFirstAnchorParent = function(r, n) {
            void 0 === n && (n = {
                fullPath: !1,
                dynamicIdRegex: null
            });
            var o = i(r);
            if (o === document) return {
                path: "",
                firstAnchorParent: null
            };
            if (!e(o)) return {
                path: t.INVALID_ELEMENT,
                firstAnchorParent: null
            };
            var s = function(t) {
                    for (var e, i = t, r = [i], n = null; null !== csNodeparentNode.apply(i);) null === n && (f(e = i) && "a" === e.localName) && (n = i), csArray.prototype.push.call(r, csNodeparentNode.apply(i)), i = csNodeparentNode.apply(i);
                    return w(i) && csArray.prototype.push.call(r, "detached"), {
                        firstAnchorParent: n,
                        ancestors: r,
                        selectionRoot: i
                    }
                }(o),
                a = s.firstAnchorParent;
            return {
                path: L(s.ancestors, s.selectionRoot, n),
                firstAnchorParent: a
            }
        }
    }(O || (O = {})), window.CSPathComputation = window.CSPathComputation || O;
    var _ = Number.MAX_SAFE_INTEGER || 9007199254740991;

    function D() {
        return Math.floor(F.now() / 1e3)
    }

    function V() {}

    function U(t, e) {
        return 0 === csString.prototype.lastIndexOf.call(t, e, 0)
    }

    function q(t, e) {
        return -1 !== csString.prototype.indexOf.call(t, e, t.length - e.length)
    }
    var z, B = {
            percentage: function() {
                return Math.floor(1e4 * Math.random()) / 100
            },
            boolean: function(t) {
                return this.percentage() < t
            },
            integer: function(t) {
                return void 0 === t && (t = _), Math.floor(Math.random() * t)
            }
        },
        F = {
            now: function() {
                return "undefined" != typeof performance && performance.now ? performance.timing.navigationStart + Math.round(performance.now()) : csDate.now()
            }
        },
        H = function() {
            function t(t) {
                this.trackerDomain = t.trackerDomain, this.loggerDomain = t.ed, this.minLogLevel = t.logLevel, this.projectId = t.projectId, this.status = t.status, this.hostnames = t.hostnames, this.iframesTracking = !!t.iframesTracking, this.crossDomainTracking = !!t.crossDomainTracking, this.crossDomainSingleIframeTracking = !!t.crossDomainSingleIframeTracking, this.consentRequired = !!t.consentRequired, this.allowSubdomains = !!t.allowSubdomains, this.visitorCookieTimeout = t.visitorCookieTimeout || 34164e6, this.sampleRate = t.sampleRate, this.replayRecordingRate = t.replayRecordingRate, this.validationRate = t.validationRate, this.lastTrackingDraw = t.lastTrackingDraw || 1, this.useHttps = !0, this.recordingDomain = t.recordingDomain, this.eMerchandisingEnabled = t.eMerchandisingEnabled, this.mouseMoveHeatmapEnabled = t.mouseMoveHeatmapEnabled, this.jsErrorsEnabled = t.jsErrorsEnabled, this.apiErrorsEnabled = t.apiErrorsEnabled, this.triggerSessionReplayEnabled = t.triggerSessionReplayEnabled, this.triggerSessionReplayRegex = this.buildRegexFromConfiguration(t.triggerSessionReplayRegex), this.metricRate = void 0 === t.metricRate ? 0 : t.metricRate, this.dynamicIdRegex = t.dynamicIdRegex ? new RegExp(t.dynamicIdRegex) : null, this.whitelistedAttributes = t.whitelistedAttributes || [], this.replayRecordingUnmaskedUrlRegex = this.buildRegexFromConfiguration(t.replayRecordingUnmaskedUrlRegex), this.replayRecordingMaskedUrlRegex = this.buildRegexFromConfiguration(t.replayRecordingMaskedUrlRegex), this.tagDeploymentMode = t.tagDeploymentMode, this.dualCollectionTagDomain = t.dualCollectionTagDomain || null, this.ptcDomain = t.ptcDomain || null, this.ptcGuid = t.ptcGuid || null, this.secureCookiesEnabled = !!t.secureCookiesEnabled, this.ptcSha512 = t.ptcSha512 || null, this.ptcSnapshotPath = t.ptcSnapshotPath || null, this.emitDebugEvents = !1, this.useMalkaPipeline = t.useMalkaPipeline, this.malkaQuotaServiceDomain = t.malkaQuotaServiceDomain || null, this.malkaRecordingDomain = t.malkaRecordingDomain || null, this.textVisibilityEnabled = t.textVisibilityEnabled, this.experimental = t.experimental || {}, this.malkaEtrEnabled = !!t.malkaEtrEnabled, this.malkaUrlEnabled = !!t.malkaUrlEnabled, this.cookielessTrackingEnabled = t.cookielessTrackingEnabled, this.customHashIdEnabled = !!t.customHashIdEnabled, this.recordingEncryptionEnabled = !!t.recordingEncryptionEnabled, this.recordingEncryptionPublicKey = t.recordingEncryptionPublicKey || null, this.pathComputationRules = t.pathComputationRules || {}, this.asyncSerializerEnabled = !!t.asyncSerializerEnabled, this.recordingEncryptionPublicKeyId = t.recordingEncryptionPublicKeyId
            }
            return t.prototype.getTrackerUri = function() {
                return this.protocol() + "://" + this.trackerDomain
            }, t.prototype.getRecordingUri = function() {
                return this.protocol() + "://" + (this.useMalkaPipeline && this.malkaRecordingDomain ? this.malkaRecordingDomain : this.recordingDomain)
            }, t.prototype.getQuotaServiceUri = function() {
                return this.protocol() + "://" + this.malkaQuotaServiceDomain
            }, t.prototype.getLoggerUri = function() {
                return this.protocol() + "://" + this.loggerDomain
            }, t.prototype.protocol = function() {
                return this.useHttps ? "https" : "http"
            }, t.prototype.isProjectActive = function() {
                return 1 === this.status
            }, t.prototype.processOptionOverrides = function(t) {
                var e = this;
                t && t.forEach && t.forEach((function(t) {
                    var i = t[0],
                        r = t.slice(1);
                    if ("setOption" === i) {
                        var n = r[0],
                            o = r[1];
                        e.setOverridableField(n, o)
                    }
                }))
            }, t.prototype.setOverridableField = function(t, e) {
                "trackerDomain" === t && (this.trackerDomain = e), "recordingDomain" === t && (this.recordingDomain = e), "loggerDomain" === t && (this.loggerDomain = e), "malkaRecordingDomain" === t && (this.malkaRecordingDomain = e), "malkaQuotaServiceDomain" === t && (this.malkaQuotaServiceDomain = e), "minLogLevel" === t && (this.minLogLevel = e), "useHttps" === t && (this.useHttps = !!e)
            }, t.prototype.buildRegexFromConfiguration = function(t) {
                return t ? new RegExp("^" + t + "$") : null
            }, t.prototype.getRequestParameters = function() {
                return {
                    pid: "" + this.projectId
                }
            }, t.prototype.updateDynamicFields = function(t, e) {
                "emitDebugEvents" === t && (this.emitDebugEvents = e), "minLogLevel" === t && (this.minLogLevel = e)
            }, t
        }(),
        j = function() {
            function t(t, e) {
                this.window = t, this.conf = e
            }
            return t.prototype.init = function() {
                this.inIframeContext = this.window.self !== this.window.top, this.conf.iframesTracking && this.inIframeContext ? this.topWindowTracker = !1 : this.topWindowTracker = !0
            }, t.prototype.isInIframeContext = function() {
                return this.inIframeContext
            }, t.prototype.isTopWindowTracker = function() {
                return this.topWindowTracker
            }, t
        }();
    ! function(t) {
        t.debug = "debug", t.warn = "warn", t.error = "error", t.critical = "critical"
    }(z || (z = {}));
    var G = function(t, e) {
        return (G = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(t, e) {
                t.__proto__ = e
            } || function(t, e) {
                for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
            })(t, e)
    };

    function W(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

        function i() {
            this.constructor = t
        }
        G(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
    }
    var K = function() {
        return (K = Object.assign || function(t) {
            for (var e, i = 1, r = arguments.length; i < r; i++)
                for (var n in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t
        }).apply(this, arguments)
    };

    function Y(t, e, i, r) {
        var n, o = arguments.length,
            s = o < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, i) : r;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, i, r);
        else
            for (var a = t.length - 1; a >= 0; a--)(n = t[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(e, i, s) : n(e, i)) || s);
        return o > 3 && s && Object.defineProperty(e, i, s), s
    }

    function X(t, e, i, r) {
        return new(i || (i = Promise))((function(n, o) {
            function s(t) {
                try {
                    c(r.next(t))
                } catch (t) {
                    o(t)
                }
            }

            function a(t) {
                try {
                    c(r.throw(t))
                } catch (t) {
                    o(t)
                }
            }

            function c(t) {
                var e;
                t.done ? n(t.value) : (e = t.value, e instanceof i ? e : new i((function(t) {
                    t(e)
                }))).then(s, a)
            }
            c((r = r.apply(t, e || [])).next())
        }))
    }

    function J(t, e) {
        var i, r, n, o, s = {
            label: 0,
            sent: function() {
                if (1 & n[0]) throw n[1];
                return n[1]
            },
            trys: [],
            ops: []
        };
        return o = {
            next: a(0),
            throw: a(1),
            return: a(2)
        }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
            return this
        }), o;

        function a(o) {
            return function(a) {
                return function(o) {
                    if (i) throw new TypeError("Generator is already executing.");
                    for (; s;) try {
                        if (i = 1, r && (n = 2 & o[0] ? r.return : o[0] ? r.throw || ((n = r.return) && n.call(r), 0) : r.next) && !(n = n.call(r, o[1])).done) return n;
                        switch (r = 0, n && (o = [2 & o[0], n.value]), o[0]) {
                            case 0:
                            case 1:
                                n = o;
                                break;
                            case 4:
                                return s.label++, {
                                    value: o[1],
                                    done: !1
                                };
                            case 5:
                                s.label++, r = o[1], o = [0];
                                continue;
                            case 7:
                                o = s.ops.pop(), s.trys.pop();
                                continue;
                            default:
                                if (!(n = s.trys, (n = n.length > 0 && n[n.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                    s = 0;
                                    continue
                                }
                                if (3 === o[0] && (!n || o[1] > n[0] && o[1] < n[3])) {
                                    s.label = o[1];
                                    break
                                }
                                if (6 === o[0] && s.label < n[1]) {
                                    s.label = n[1], n = o;
                                    break
                                }
                                if (n && s.label < n[2]) {
                                    s.label = n[2], s.ops.push(o);
                                    break
                                }
                                n[2] && s.ops.pop(), s.trys.pop();
                                continue
                        }
                        o = e.call(t, s)
                    } catch (t) {
                        o = [6, t], r = 0
                    } finally {
                        i = n = 0
                    }
                    if (5 & o[0]) throw o[1];
                    return {
                        value: o[0] ? o[1] : void 0,
                        done: !0
                    }
                }([o, a])
            }
        }
    }
    Object.create;

    function Q() {
        for (var t = 0, e = 0, i = arguments.length; e < i; e++) t += arguments[e].length;
        var r = Array(t),
            n = 0;
        for (e = 0; e < i; e++)
            for (var o = arguments[e], s = 0, a = o.length; s < a; s++, n++) r[n] = o[s];
        return r
    }
    var Z;
    Object.create;
    ! function(t) {
        t.toQuery = function(t) {
            return csArray.prototype.join.call(csArray.prototype.map.call(Object.keys(t), (function(e) {
                return encodeURIComponent(e) + "=" + encodeURIComponent(t[e])
            })), "&")
        }
    }(Z || (Z = {}));
    var $ = function() {
            function t(t, e) {
                this.domainUri = t, this.path = e, this.beforeRequestCallbacks = [], this.afterRequestCallbacks = []
            }
            return t.prototype.setRequestParametersProviders = function() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                this.requestParametersProviders = t
            }, t.prototype.before = function(t) {
                csArray.prototype.push.call(this.beforeRequestCallbacks, t)
            }, t.prototype.after = function(t) {
                csArray.prototype.push.call(this.afterRequestCallbacks, t)
            }, t.prototype.retrieveParameters = function() {
                return this.requestParametersProviders ? csArray.prototype.reduce.call(csArray.prototype.map.call(this.requestParametersProviders, (function(t) {
                    return t.getRequestParameters()
                })), (function(t, e) {
                    return K(K({}, t), e)
                })) : {}
            }, t
        }(),
        tt = function(t) {
            function e(e, i) {
                return t.call(this, e, i) || this
            }
            return W(e, t), e.prototype.send = function() {
                csArray.prototype.forEach.call(this.beforeRequestCallbacks, (function(t) {
                    return t()
                }));
                var t = this.retrieveParameters();
                this.addCacheBusting(t);
                var e = Z.toQuery(t);
                this.generatePixel(e), csArray.prototype.forEach.call(this.afterRequestCallbacks, (function(t) {
                    return t()
                }))
            }, e.prototype.generatePixel = function(t) {
                var e = new window.Image(1, 1);
                e.onload = V, e.onerror = V, e.src = this.domainUri + (this.path ? "/" + this.path : "") + "?" + t
            }, e.prototype.addCacheBusting = function(t) {
                t.r = csString.prototype.slice.call("" + Math.random(), 2, 8)
            }, e
        }($),
        et = function() {
            function t(t, e) {
                this.projectConfiguration = t, this.basicLogRequestParameter = e
            }
            return t.prototype.init = function() {
                this.request = new tt(this.projectConfiguration.getLoggerUri()), this.request.setRequestParametersProviders(this, this.basicLogRequestParameter)
            }, t.prototype.send = function(t) {
                this.log = t, this.request.send()
            }, t.prototype.getRequestParameters = function() {
                return {
                    a: this.log.app,
                    l: this.log.level,
                    m: this.log.message,
                    s: this.log.stacktrace
                }
            }, t
        }(),
        it = /[a-zA-Z0-9._%+-]+(?:@|%40)[a-zA-Z0-9.%-_]+((?:\.|%2[eE])[a-zA-Z0-9-]+)+/g,
        rt = /[a-zA-Z0-9+_-](?:@|%40)/,
        nt = function() {
            function t() {}
            return t.prototype.anonymize = function(t) {
                return "string" == typeof t && rt.test(t) ? csString.prototype.replace.call(t, it, "CS_ANONYMIZED_EMAIL") : t
            }, t.prototype.anonymizeFields = function(t, e) {
                var i = this;
                return csArray.prototype.forEach.call(e, (function(e) {
                    t[e] = i.anonymize(t[e])
                })), t
            }, t
        }();

    function ot() {
        return "11.21.0"
    }

    function st() {
        return {
            v: "11.21.0"
        }
    }
    var at, ct, ut = function() {
        function t(t, e) {
            this.configuration = t, this.pii = e
        }
        return t.prototype.getRequestParameters = function() {
            return K(K({
                d: "" + F.now(),
                p: this.pii.anonymize(window.location.href),
                u: navigator.userAgent
            }, this.configuration.getRequestParameters()), {
                v: "11.21.0"
            })
        }, t
    }();
    ! function(t) {
        t.IMPLEMENTATION = "implementation", t.DYNAMIC = "dynamic"
    }(at || (at = {})),
    function(t) {
        t[t.debug = 0] = "debug", t[t.warn = 1] = "warn", t[t.error = 2] = "error", t[t.critical = 3] = "critical"
    }(ct || (ct = {}));
    var pt = function() {
            function t(t, e, i) {
                var r;
                this.parentLogContext = e, this.pii = new nt, this.minLogLevel = ct[z.warn], this.isLoggingActive = !1, this.minLogLevel = ct[t.minLogLevel || z.warn];
                var n = t.validationRate >= 0 ? t.validationRate : 10;
                this.isLoggingActive = B.boolean(n), this.request = i || new et(t, new ut(t, this.pii)), this.logTrack = ((r = {})[z.debug] = [], r[z.warn] = [], r[z.error] = [], r[z.critical] = [], r), this.snippetLogCounter = {
                    implementation: {},
                    dynamic: {}
                }, this.request.init()
            }
            return t.prototype.send = function(t, e, i) {
                if (void 0 === e && (e = ""), void 0 === i && (i = z.warn), this.isLoggingAllowed(i, e)) {
                    csArray.prototype.push.call(this.logTrack[i], e || "");
                    var r = {
                        message: this.getMessage(t, e),
                        stacktrace: this.getStacktrace(t),
                        app: "uxa",
                        level: i
                    };
                    this.request.send(r)
                }
            }, t.prototype.getMessage = function(t, e) {
                var i = t instanceof Error ? this.pii.anonymize(t.message || t.toString()) : t;
                return e && (i += " ErrorCode: " + e), i
            }, t.prototype.getStacktrace = function(t) {
                return t instanceof Error ? (t.stack || "No stacktrace") + " " + this.getContext() : this.getContext()
            }, t.prototype.getContext = function() {
                var t = this.parentLogContext.getVisitorService(),
                    e = null == t ? void 0 : t.getVisitor();
                if (!e) return "No context";
                var i = this.parentLogContext.getSessionService(),
                    r = i && i.getSession(),
                    n = {
                        userId: e.id,
                        sessionNumber: e.visitsCount,
                        pageNumber: r && r.pageNumber
                    };
                return csJSON.stringify(n)
            }, t.prototype.isLoggingAllowed = function(t, e) {
                if (!this.isLoggingActive || ct[t] < this.minLogLevel) return !1;
                if (0 === (null == e ? void 0 : e.indexOf("implementation-snippet-", 0))) return this.isLoggingAllowedForSnippets(e, at.IMPLEMENTATION);
                if (0 === (null == e ? void 0 : e.indexOf("snippet-", 0))) return this.isLoggingAllowedForSnippets(e, at.DYNAMIC);
                var i = this.logTrack[t];
                return !(i.length >= 5) && (!e || !csArray.prototype.some.call(i, (function(t) {
                    return t === e
                })))
            }, t.prototype.isLoggingAllowedForSnippets = function(t, e) {
                return t in this.snippetLogCounter[e] ? !(this.snippetLogCounter[e][t] >= 5) && (this.snippetLogCounter[e][t] += 1, !0) : (this.snippetLogCounter[e][t] = 1, !0)
            }, t
        }(),
        lt = document.createElement("a");

    function ht(t) {
        return lt.href = t, lt.href
    }

    function dt(t) {
        if (!U(t, "http://") && !U(t, "https://")) return "";
        var e = document.createElement("a");
        return e.href = t, decodeURIComponent(e.hostname)
    }

    function ft(t, e) {
        return csArray.prototype.some.call(e, (function(e) {
            return q(t, "." + e) || t === e || "" === e
        }))
    }
    var yt, vt, mt, gt, St;
    ! function(t) {
        t.AfterPageView = "afterPageView", t.GetSessionKey = "getSessionKey"
    }(yt || (yt = {})),
    function(t) {
        t.Parent = "parent", t.Child = "child"
    }(vt || (vt = {})),
    function(t) {
        t.Discovery = "discovery", t.Stop = "stop", t.ChildLogMessage = "childLogMessage", t.AnalysisEvent = "analysisEvent", t.JavascriptError = "javascriptError", t.ApiError = "apiError", t.EmerchandisingMessage = "emerchandisingMessage", t.Commands = "commands", t.IntegrationCallback = "integrationCallback"
    }(mt || (mt = {})), (St = gt || (gt = {})).buildBaseMessage = function(t, e, i, r) {
        var n = {
            type: t,
            from: e,
            pid: i,
            signature: "CS_IFRAME_MESSAGE"
        };
        return void 0 !== r && r >= 0 && (n.id = r), n
    }, St.isMessageValid = function(t, e, i, r) {
        var n = dt(t.origin);
        return !!t.data && !!t.data.type && "CS_IFRAME_MESSAGE" === t.data.signature && t.data.from === e && t.data.pid === i && ft(n, r)
    }, St.sendMessage = function(t, e, i) {
        t.postMessage(i, e)
    };
    var Et = function() {
            function t(t) {
                this.configuration = t
            }
            return t.prototype.send = function(t, e, i) {
                void 0 === e && (e = ""), void 0 === i && (i = z.warn);
                var r = {
                        message: t,
                        errorCode: e,
                        level: i
                    },
                    n = gt.buildBaseMessage(mt.ChildLogMessage, vt.Child, this.configuration.projectId);
                n.content = r, gt.sendMessage(window.parent, "*", n)
            }, t
        }(),
        Ct = function() {
            function t() {}
            return t.prototype.setContext = function(t, e) {
                this.visitorService = t, this.sessionService = e
            }, t.prototype.getVisitorService = function() {
                return this.visitorService
            }, t.prototype.getSessionService = function() {
                return this.sessionService
            }, t
        }();

    function Tt(t) {
        return kt(t) && ("number" == typeof t || t instanceof Number) && !isNaN(t)
    }

    function wt(t) {
        return t === parseInt(t, 10)
    }

    function bt(t) {
        return kt(t) && ("string" == typeof t || t instanceof csString)
    }

    function Rt(t) {
        return "object" == typeof t
    }

    function kt(t) {
        return void 0 !== t
    }

    function At(t) {
        return kt(t) && null !== t
    }

    function It(t) {
        return "function" == typeof t
    }

    function Pt(t) {
        return t instanceof Element
    }
    var Nt, Mt, Ot, Lt, xt = function() {
            function t() {}
            return t.setStrategy = function(e) {
                t.strategy = e
            }, t.getStrategy = function() {
                return t.strategy
            }, t.debug = function(t, e) {
                void 0 === e && (e = ""), this.strategy.send(t, e, z.debug)
            }, t.warn = function(t, e) {
                void 0 === e && (e = ""), this.strategy.send(t, e, z.warn)
            }, t.error = function(t, e) {
                void 0 === e && (e = ""), this.strategy.send(t, e, z.error)
            }, t.critical = function(t, e) {
                void 0 === e && (e = ""), this.strategy.send(t, e, z.critical)
            }, t.tryToExecute = function(t, e) {
                var i = this;
                return function() {
                    for (var r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n];
                    try {
                        var o = e.apply(void 0, r);
                        return kt(window.Promise) && o instanceof window.Promise ? o.then((function(t) {
                            return t
                        }), (function(e) {
                            return i.error(e, t)
                        })) : o
                    } catch (e) {
                        try {
                            i.error(e, t)
                        } catch (t) {}
                    }
                }
            }, t
        }(),
        _t = function(t) {
            return function(e, i, r) {
                var n = i.toString(),
                    o = t || (e.constructor && e.constructor.name) + "." + n,
                    s = r.value;
                r.value = function() {
                    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                    return xt.tryToExecute(o, s.bind(this)).apply(void 0, t)
                }
            }
        };
    ! function(t) {
        function e(t) {
            var e = new RegExp("(^|;)[ ]*" + t + "=([^;]*)").exec(document.cookie);
            return e ? decodeURIComponent(e[2]) : null
        }

        function i(e, i, n, o, s, a) {
            var c = encodeURIComponent("" + i),
                u = n === t.CURRENT_DOMAIN ? void 0 : n,
                p = r(o),
                l = e + "=" + c + (p ? ";expires=" + p.toUTCString() : "") + ";path=/" + (At(u) ? ";domain=" + u : "");
            return kt(s) && s !== Ot.NotSet && (l = l + ";SameSite=" + s), kt(a) && a === Lt.Yes && (l += ";Secure"), document.cookie = l, !0
        }

        function r(t) {
            return Tt(t) ? new csDate(F.now() + t) : t
        }

        function n(t, r) {
            e(t) && i(t, "", r, new csDate(0)), e(t) && i(t, "", r, new csDate(0), Ot.None, Lt.Yes)
        }
        t.CURRENT_DOMAIN = "CURRENT_DOMAIN", t.get = e, t.set = i, t.toExpireDate = r, t.remove = n, t.isCookiePresent = function() {
            return document.cookie.length > 0
        }, t.getRootDomain = function(t, r) {
            var o = e("_cs_root-domain");
            if (null !== o && "1" !== o) return o;
            for (var s = csString.prototype.split.call(window.location.hostname, "."), a = csArray.prototype.pop.call(s); s.length && (null === o || "1" === o);) i("_cs_root-domain", a = csArray.prototype.join.call([csArray.prototype.pop.call(s), a], "."), a, void 0, t, r), o = e("_cs_root-domain");
            return n("_cs_root-domain", a), a
        }
    }(Nt || (Nt = {})),
    function(t) {
        t.browserIsSafariV12 = function() {
            return window.navigator.vendor && csString.prototype.indexOf.call(window.navigator.vendor, "Apple") > -1 && window.navigator.appVersion && csString.prototype.indexOf.call(window.navigator.appVersion, "Version/12.") > -1
        }
    }(Mt || (Mt = {})),
    function(t) {
        t.None = "None", t.Lax = "Lax", t.NotSet = "X"
    }(Ot || (Ot = {})),
    function(t) {
        t[t.Yes = 1] = "Yes", t[t.No = 0] = "No"
    }(Lt || (Lt = {}));
    var Dt = function() {
            function t(t, e, i) {
                this.configuration = t, this.urlService = e, this.cookieChecker = i, this.supportsSameSite = !1, this.sameSiteFlag = Ot.NotSet, this.secureFlag = Lt.No
            }
            return t.prototype.getSameSiteFlag = function() {
                return this.sameSiteFlag
            }, t.prototype.getSecureFlag = function() {
                return this.secureFlag
            }, t.prototype.getDomain = function() {
                return this.domain
            }, t.prototype.getRootDomain = function() {
                return this.rootDomain
            }, t.prototype.init = function() {
                if (!this.configuration.cookielessTrackingEnabled) {
                    var t = this.computeSameSiteFlag(),
                        e = this.computeSecureFlag();
                    this.supportsSameSite = this.checkSameSiteFromContext(t, e), this.supportsSameSite ? (this.sameSiteFlag = t, this.secureFlag = e) : this.configuration.secureCookiesEnabled && "https:" === this.urlService.getUrlProtocol() && (this.secureFlag = Lt.Yes), this.rootDomain = this.computeRootDomain(), this.domain = this.computeDomain(this.rootDomain)
                }
            }, t.prototype.checkSameSiteFromContext = function(e, i) {
                return !Mt.browserIsSafariV12() && (Nt.set(t.COOKIE_TEST_FOR_SAME_SITE, "Test same site", t.CURRENT_DOMAIN, void 0, e, i), !!Nt.get(t.COOKIE_TEST_FOR_SAME_SITE) && (Nt.remove(t.COOKIE_TEST_FOR_SAME_SITE, t.CURRENT_DOMAIN), !0))
            }, t.prototype.computeSameSiteFlag = function() {
                return "http:" === this.urlService.getUrlProtocol() ? Ot.Lax : this.cookieChecker.isSameSiteNoneSecureNeeded() || this.configuration.crossDomainTracking ? Ot.None : Ot.Lax
            }, t.prototype.computeSecureFlag = function() {
                return "http:" === this.urlService.getUrlProtocol() ? Lt.No : this.configuration.secureCookiesEnabled || this.configuration.crossDomainTracking || this.cookieChecker.isSameSiteNoneSecureNeeded() ? Lt.Yes : Lt.No
            }, t.prototype.isSameSiteSupported = function() {
                return this.supportsSameSite
            }, t.prototype.set = function(t, e, i) {
                var r = Nt.toExpireDate(i);
                Nt.set(t, e, this.domain, r, this.getSameSiteFlag(), this.getSecureFlag())
            }, t.prototype.get = function(t) {
                var e = new RegExp("(^|;)[ ]*" + t + "=([^;]*)").exec(document.cookie);
                return e ? decodeURIComponent(e[2]) : null
            }, t.prototype.delete = function(t, e) {
                var i = e || this.domain;
                Nt.remove(t, i)
            }, t.prototype.computeRootDomain = function() {
                var t = this.cookieChecker.isSameSiteNoneSecureNeeded() && this.isSameSiteSupported(),
                    e = t ? Ot.None : void 0,
                    i = t ? Lt.Yes : void 0;
                return Nt.getRootDomain(e, i)
            }, t.prototype.computeDomain = function(t) {
                return this.configuration.allowSubdomains ? t : Nt.CURRENT_DOMAIN
            }, t.CURRENT_DOMAIN = "CURRENT_DOMAIN", t.COOKIE_TEST_FOR_SAME_SITE = "_cs_same_site", t
        }(),
        Vt = function() {
            function t(t, e) {
                this.iframeContext = t, this.configuration = e, this.cookieEnabled = !1, this.useSameSiteNoneSecureCookie = !1
            }
            return t.prototype.init = function() {
                if (!this.configuration.cookielessTrackingEnabled && this.iframeContext.isTopWindowTracker() && "cookie" in document) {
                    if (!this.iframeContext.isInIframeContext() && Nt.isCookiePresent()) return this.cookieEnabled = !0, void(this.useSameSiteNoneSecureCookie = !1);
                    if (Nt.set("_cs_t", "1", Nt.CURRENT_DOMAIN), null !== Nt.get("_cs_t")) return this.cookieEnabled = !0, this.useSameSiteNoneSecureCookie = !1, void Nt.remove("_cs_t", Nt.CURRENT_DOMAIN);
                    Nt.set("_cs_t", "1", Nt.CURRENT_DOMAIN, void 0, Ot.None, Lt.Yes), null !== Nt.get("_cs_t") && (this.cookieEnabled = !0, this.useSameSiteNoneSecureCookie = !0, Nt.remove("_cs_t", Nt.CURRENT_DOMAIN))
                }
            }, t.prototype.areCookiesEnabled = function() {
                return this.cookieEnabled
            }, t.prototype.isSameSiteNoneSecureNeeded = function() {
                return this.useSameSiteNoneSecureCookie
            }, t
        }();

    function Ut() {
        var t = "CSLocalStorageTest";
        try {
            return localStorage.setItem(t, t), localStorage.getItem(t) !== t ? !1 : (localStorage.removeItem(t), !0)
        } catch (t) {
            return !1
        }
    }
    var qt = function() {
        function t() {}
        return t.check = function() {
            return void 0 === Object.assign || this.tryObjectAssign()
        }, t.tryObjectAssign = function() {
            try {
                var t = {},
                    e = Object.assign(t, {
                        a: 1
                    }, {
                        b: 2,
                        c: {
                            d: 4
                        }
                    }),
                    i = {
                        a: 1,
                        b: 2,
                        c: {
                            d: 4
                        }
                    };
                return csJSON.stringify(e) === csJSON.stringify(i) && csJSON.stringify(t) === csJSON.stringify(i)
            } catch (t) {
                return !1
            }
        }, t
    }();
    var zt, Bt, Ft, Ht, jt = function() {
            function t(t, e) {
                this.configuration = t, this.cookieChecker = e
            }
            return t.prototype.canTrack = function() {
                return this.isBrowsingContextSupported() && this.canTrackProject() && this.canUseStorage()
            }, t.prototype.canTrackInIframe = function() {
                return this.isBrowsingContextSupported() && this.canTrackProject()
            }, t.prototype.canUseStorage = function() {
                return this.configuration.cookielessTrackingEnabled ? function() {
                    var t = "CSSessionStorageTest";
                    try {
                        return sessionStorage.setItem(t, t), sessionStorage.getItem(t) !== t ? !1 : (sessionStorage.removeItem(t), !0)
                    } catch (t) {
                        return !1
                    }
                }() && Ut() : this.cookieChecker.areCookiesEnabled() && Ut()
            }, t.prototype.canTrackProject = function() {
                return this.configuration.isProjectActive() && ft(window.location.hostname, this.configuration.hostnames)
            }, t.prototype.isBrowsingContextSupported = function() {
                return !this.isDocPrerendered() && this.isBrowserSupported() && qt.check()
            }, t.prototype.isDocPrerendered = function() {
                return "visibilityState" in document && "prerender" === document.visibilityState
            }, t.prototype.isBrowserSupported = function() {
                return "pageXOffset" in window && "pageYOffset" in window && "onpagehide" in window && "JSON" in window && "parse" in window.JSON && "stringify" in window.JSON && "addEventListener" in window && "removeEventListener" in window && "Node" in window && "filter" in csArray.prototype && "forEach" in csArray.prototype && "querySelectorAll" in document && "now" in Date && "keys" in Object && "performance" in window
            }, t
        }(),
        Gt = function() {
            function t(t, e, i, r, n) {
                this.visitorService = t, this.sessionService = e, this.exclusionService = i, this.customVariablesService = r, this.configuration = n
            }
            return t.prototype.get = function() {
                return {
                    exclusion: this.exclusionService.getAppliedTrackingDraw(),
                    visitor: this.visitorService.getVisitor(),
                    session: this.sessionService.getSession(),
                    cvars: this.customVariablesService.getCustomVariablesSession()
                }
            }, t.prototype.apply = function(t) {
                t && (t.exclusion ? this.exclude() : this.include(t))
            }, t.prototype.exclude = function() {
                this.exclusionService.exclude(this.configuration), this.visitorService.removeVisitor(), this.sessionService.removeSession(), this.customVariablesService.removeCustomVariablesSession()
            }, t.prototype.include = function(t) {
                this.exclusionService.removeExclusion(), this.visitorService.setVisitor(t.visitor), t.session ? this.sessionService.setSession(t.session) : this.sessionService.removeSession(), t.cvars ? this.customVariablesService.setCustomVariableSession(t.cvars) : this.customVariablesService.removeCustomVariablesSession()
            }, t
        }(),
        Wt = /^(([a-z0-9\-])+(\.[0-9]+){6})(\.(None|Lax|X)\.(0|1))?$/,
        Kt = function() {
            function t(t, e, i, r) {
                this.configuration = t, this.cookieService = e, this.crossDomainSingleIframeService = i, this.browserSessionStorage = r
            }
            return t.prototype.get = function() {
                var e;
                return (e = this.configuration.cookielessTrackingEnabled ? this.browserSessionStorage.getItem("_cs_id") : this.cookieService.get("_cs_id")) ? t.fromString(e) : null
            }, t.prototype.set = function(e) {
                var i = t.toString(e);
                if (this.configuration.cookielessTrackingEnabled) this.browserSessionStorage.setItem("_cs_id", i);
                else {
                    var r = new csDate(e.expires);
                    this.cookieService.set("_cs_id", i, r), this.crossDomainSingleIframeService.setCookie("_cs_id", i, r)
                }
            }, t.prototype.remove = function() {
                this.configuration.cookielessTrackingEnabled ? this.browserSessionStorage.removeItem("_cs_id") : (this.cookieService.delete("_cs_id"), this.crossDomainSingleIframeService.removeCookie("_cs_id"))
            }, t.prototype.handleSubdomainChange = function() {
                if (!this.configuration.cookielessTrackingEnabled) {
                    var t = this.get();
                    t && (this.configuration.allowSubdomains ? this.cookieService.delete("_cs_id", Dt.CURRENT_DOMAIN) : this.cookieService.delete("_cs_id", this.cookieService.getRootDomain()), this.set(t))
                }
            }, t.fromString = function(t) {
                var e = csString.prototype.split.call(t, "."),
                    i = e[0],
                    r = e[1],
                    n = e[2],
                    o = e[3],
                    s = e[4],
                    a = e[5],
                    c = e[6];
                return {
                    id: i,
                    creationTimestamp: Number(r),
                    visitsCount: Number(n),
                    hitTimestamp: Number(o),
                    lastVisitTimestamp: Number(s),
                    appliedTrackingDraw: Number(a),
                    expires: Number(c)
                }
            }, t.toString = function(t) {
                return csArray.prototype.join.call([t.id, t.creationTimestamp, t.visitsCount, t.hitTimestamp, t.lastVisitTimestamp, t.appliedTrackingDraw, t.expires], ".")
            }, t.isValidVisitorString = function(t) {
                return Wt.test(t)
            }, t
        }();
    ! function(t) {
        t.REPLAY_RECORDING_DISABLED = "1", t.REPLAY_RECORDING_ENABLED = "3", t.TRIGGER_REPLAY_RECORDING_ENABLED = "5"
    }(zt || (zt = {})),
    function(t) {
        t.NOT_RECORDED = "0", t.TEMPORARILY_RECORDED = "T", t.GLOBAL_SAMPLING = "5", t.URL_SAMPLING = "6", t.ETR_SAMPLING = "7"
    }(Bt || (Bt = {})),
    function(t) {
        t.ETR_OFF = "0", t.ETR_ON = "1"
    }(Ft || (Ft = {})),
    function(t) {
        t.ETR_LEGACY = "0", t.ETR_SESSION = "1", t.ETR_PAGE = "2"
    }(Ht || (Ht = {}));
    var Yt, Xt = /^\d+\.[013567T](\.[01])?(\.\d+)?$/;
    ! function(t) {
        t[t.NOT_FOUND = 0] = "NOT_FOUND", t[t.EXPIRED = 1] = "EXPIRED", t[t.FOUND = 2] = "FOUND"
    }(Yt || (Yt = {}));
    var Jt, Qt = function() {
        function t(t, e, i, r) {
            this.configuration = t, this.cookieService = e, this.crossDomainSingleIframeService = i, this.browserSessionStorage = r, this.cache = null
        }
        return t.prototype.get = function(e) {
            var i = this.getRawSession(e);
            return this.isValid(i) ? t.fromString(i) : null
        }, t.prototype.getRawSession = function(e) {
            if (e) {
                var i = this.getRawValueFromStorage();
                return t.removeSessionTimestamp(i)
            }
            var r = this.getFromCache(),
                n = r.sessionString,
                o = r.status,
                s = t.removeSessionTimestamp(n);
            if (o !== Yt.EXPIRED) return s;
            if (this.configuration.cookielessTrackingEnabled) return null;
            var a = this.getRawValueFromStorage();
            if (!a) return null;
            var c = csString.prototype.split.call(a, ".");
            if (!t.isSessionWithTimestampValue(c)) return a;
            var u = c[c.length - 1],
                p = parseInt(u, 10);
            return isNaN(p) || this.refreshCache(p), s
        }, t.prototype.set = function(t, e) {
            void 0 === e && (e = 18e5);
            var i = F.now() + e,
                r = this.toString(t);
            r += "." + i, this.setInCache(r, i), this.configuration.cookielessTrackingEnabled ? this.browserSessionStorage.setItem("_cs_s", r) : (this.cookieService.set("_cs_s", r, e), this.crossDomainSingleIframeService.setCookie("_cs_s", r, e))
        }, t.prototype.remove = function() {
            this.configuration.cookielessTrackingEnabled ? this.browserSessionStorage.removeItem("_cs_s") : (this.cookieService.delete("_cs_s"), this.crossDomainSingleIframeService.removeCookie("_cs_s")), this.clearCache()
        }, t.prototype.handleSubdomainChange = function() {
            if (!this.configuration.cookielessTrackingEnabled) {
                var t = this.get(!0);
                t && (this.configuration.allowSubdomains ? this.cookieService.delete("_cs_s", Dt.CURRENT_DOMAIN) : this.cookieService.delete("_cs_s", this.cookieService.getRootDomain()), this.set(t))
            }
        }, t.prototype.isValid = function(e) {
            return null !== e && t.isValidSessionString(e)
        }, t.prototype.toString = function(t) {
            return csArray.prototype.join.call([t.pageNumber, t.recordingState, t.etrState], ".")
        }, t.prototype.setInCache = function(t, e) {
            this.cache = {
                sessionString: t,
                expires: e
            }
        }, t.prototype.getFromCache = function() {
            return this.cache ? this.cache && F.now() <= this.cache.expires ? {
                sessionString: this.cache.sessionString,
                status: Yt.FOUND
            } : {
                sessionString: this.cache.sessionString,
                status: Yt.EXPIRED
            } : {
                sessionString: this.getRawValueFromStorage(),
                status: Yt.NOT_FOUND
            }
        }, t.prototype.clearCache = function() {
            this.cache = null
        }, t.prototype.refreshCache = function(t) {
            this.cache && (this.cache.expires = t)
        }, t.prototype.getRawValueFromStorage = function() {
            if (this.configuration.cookielessTrackingEnabled) {
                var t = this.browserSessionStorage.getItem("_cs_s");
                return !t || this.hasExpired(t) ? null : t
            }
            return this.cookieService.get("_cs_s")
        }, t.prototype.hasExpired = function(t) {
            var e = csString.prototype.split.call(t, "."),
                i = parseInt(e[e.length - 1], 10);
            return !isNaN(i) && F.now() > i
        }, t.isSessionWithTimestampValue = function(t) {
            return 13 === t[t.length - 1].length
        }, t.removeSessionTimestamp = function(e) {
            if (!e) return null;
            var i = csString.prototype.split.call(e, ".");
            return t.isSessionWithTimestampValue(i) ? csArray.prototype.join.call(csArray.prototype.slice.call(i, 0, -1), ".") : e
        }, t.fromRawString = function(e) {
            var i = t.removeSessionTimestamp(e);
            return null !== i ? t.fromString(i) : null
        }, t.fromString = function(t) {
            var e = csString.prototype.split.call(t, "."),
                i = e[0],
                r = e[1],
                n = e[2];
            return {
                recordingState: r,
                etrState: null != n ? n : Ft.ETR_OFF,
                pageNumber: parseInt(i, 10)
            }
        }, t.isValidSessionString = function(t) {
            return Xt.test(t)
        }, t
    }();
    (Jt || (Jt = {})).fromRaw = function(t) {
        return {
            exclusion: Number(t._cs_ex) || 0,
            visitor: t._cs_id ? Kt.fromString(t._cs_id) : null,
            session: t._cs_s ? Qt.fromRawString(t._cs_s) : null,
            cvars: t._cs_cvars ? window.JSON.parse(t._cs_cvars) : null
        }
    };
    var Zt, $t = /^[0-9]+$/,
        te = function() {
            function t(t, e, i, r) {
                this.configuration = t, this.cookieService = e, this.crossDomainSingleIframeService = i, this.browserSessionStorage = r
            }
            return t.prototype.get = function() {
                return this.configuration.cookielessTrackingEnabled ? Number(this.browserSessionStorage.getItem("_cs_ex")) : Number(this.cookieService.get("_cs_ex"))
            }, t.prototype.set = function(t) {
                this.configuration.cookielessTrackingEnabled ? this.browserSessionStorage.setItem("_cs_ex", t) : (this.cookieService.set("_cs_ex", t, 2592e6), this.crossDomainSingleIframeService.setCookie("_cs_ex", t, 2592e6))
            }, t.prototype.remove = function() {
                this.configuration.cookielessTrackingEnabled ? this.browserSessionStorage.removeItem("_cs_ex") : (this.cookieService.delete("_cs_ex"), this.crossDomainSingleIframeService.removeCookie("_cs_ex"))
            }, t.isValidExclusionString = function(t) {
                return $t.test(t)
            }, t
        }(),
        ee = function() {
            function t(t, e, i, r) {
                this.configuration = t, this.cookieService = e, this.crossDomainSingleIframeService = i, this.browserSessionStorage = r
            }
            return t.prototype.get = function() {
                return this.configuration.cookielessTrackingEnabled ? this.browserSessionStorage.getItem("_cs_cvars") : this.cookieService.get("_cs_cvars")
            }, t.prototype.set = function(t) {
                this.configuration.cookielessTrackingEnabled ? this.browserSessionStorage.setItem("_cs_cvars", t) : (this.cookieService.set("_cs_cvars", t), this.crossDomainSingleIframeService.setCookie("_cs_cvars", t))
            }, t.prototype.remove = function() {
                this.configuration.cookielessTrackingEnabled ? this.browserSessionStorage.removeItem("_cs_cvars") : (this.cookieService.delete("_cs_cvars"), this.crossDomainSingleIframeService.removeCookie("_cs_cvars"))
            }, t.isValidCustomVarString = function(t) {
                return "string" == typeof t
            }, t
        }();
    ! function(t) {
        function e(t) {
            var e = ["_cs_ex", "_cs_id", "_cs_s", "_cs_cvars"];
            return csArray.prototype.every.call(Object.keys(t), (function(t) {
                return csArray.prototype.indexOf.call(e, t) >= 0
            }))
        }
        t.isRawDomainState = e, t.isValid = function(t) {
            return !!e(t) && ((!t._cs_id || Kt.isValidVisitorString(t._cs_id)) && (!t._cs_s || Qt.isValidSessionString(t._cs_s)) && (!t._cs_ex || te.isValidExclusionString(t._cs_ex)) && (!t._cs_cvars || ee.isValidCustomVarString(t._cs_cvars)))
        }
    }(Zt || (Zt = {}));
    var ie, re = function() {
            function t(t, e) {
                this.xdframeOpener = t, this.location = e
            }
            return t.prototype.retrieve = function(e, i) {
                var r = this;
                this.callback = i, this.retrievedStates = [], this.xdframeOrigins = csArray.prototype.map.call(csArray.prototype.filter.call(e, (function(t) {
                    return r.isNotCurrentHostname(t)
                })), t.getXdframeOrigin), this.xdframeOpener.onMessage((function(t) {
                    r.handleXdframeMessage(t)
                })), this.xdframeOpener.onTimeout((function() {
                    r.handleTimeout()
                })), this.xdframeOpener.start(), csArray.prototype.forEach.call(csArray.prototype.map.call(this.xdframeOrigins, t.getXdframeUrl), (function(t) {
                    return r.xdframeOpener.open(t)
                }))
            }, t.prototype.handleXdframeMessage = function(t) {
                if (this.isXdframeMessage(t)) {
                    var e = t.data;
                    if (!Zt.isValid(e)) throw this.xdframeOpener.stop(), "Invalid domain state: " + csJSON.stringify(t.data) + " from " + t.origin;
                    csArray.prototype.push.call(this.retrievedStates, e)
                }
                this.allMessagesAreIn() && (this.xdframeOpener.stop(), this.callback(csArray.prototype.map.call(this.retrievedStates, Jt.fromRaw)))
            }, t.prototype.handleTimeout = function() {
                xt.warn("xdframe: all messages not received")
            }, t.prototype.isXdframeMessage = function(t) {
                return csArray.prototype.indexOf.call(this.xdframeOrigins, t.origin) > -1
            }, t.prototype.allMessagesAreIn = function() {
                return this.retrievedStates.length === this.xdframeOrigins.length
            }, t.prototype.isNotCurrentHostname = function(t) {
                return !q(this.location.hostname, t)
            }, t.getXdframeOrigin = function(t) {
                return "https://csxd." + t
            }, t.getXdframeUrl = function(t) {
                return t + "/xdframe-1.0.0.html"
            }, t
        }(),
        ne = function() {
            function t() {
                var t = this;
                this.ALL_MESSAGES_RECEIVED_TIMEOUT = 3e3, this.scopedHandleMessage = function(e) {
                    t.handleMessage(e)
                }
            }
            return t.prototype.onMessage = function(t) {
                this.onMessageCallback = t
            }, t.prototype.onTimeout = function(t) {
                this.onTimeoutCallback = t
            }, t.prototype.start = function() {
                var t = this;
                window.addEventListener("message", this.scopedHandleMessage), this.timeoutId = window.setTimeout((function() {
                    t.onTimeoutCallback()
                }), this.ALL_MESSAGES_RECEIVED_TIMEOUT)
            }, t.prototype.open = function(t) {
                var e = document.createElement("iframe");
                return e.src = t, e.setAttribute("hidden", ""), e.setAttribute("title", "Intentionally blank"), document.body.appendChild(e), e
            }, t.prototype.stop = function() {
                window.removeEventListener("message", this.scopedHandleMessage), window.clearTimeout(this.timeoutId), this.onMessageCallback = V, this.onTimeoutCallback = V
            }, t.prototype.handleMessage = function(t) {
                this.onMessageCallback(t)
            }, Y([_t("XdframeMessage")], t.prototype, "handleMessage", null), t
        }(),
        oe = function() {
            function t() {
                this.xhr = new XMLHttpRequest
            }
            return t.prototype.send = function(t) {
                var e = this,
                    i = t.path,
                    r = t.domainUri,
                    n = t.query,
                    o = t.headers,
                    s = t.method,
                    a = t.body,
                    c = t.onLoadCallback,
                    u = t.onErrorCallback,
                    p = t.timeout,
                    l = t.onTimeoutCallback,
                    h = r;
                if (i && (h = csString.prototype.concat.call(h, "/", i)), n && (h = csString.prototype.concat.call(h, "?", n)), this.xhr.open(s, h, !0), o)
                    for (var d = 0, f = o; d < f.length; d++) {
                        var y = f[d];
                        this.xhr.setRequestHeader(y.name, y.value)
                    }
                c && (this.xhr.onload = function() {
                    var t = {
                        responseText: e.xhr.responseText,
                        status: e.xhr.status
                    };
                    c(t)
                }), u && (this.xhr.onerror = function() {
                    u()
                }), p && l && (this.xhr.timeout = p, this.xhr.ontimeout = function() {
                    l()
                }), this.xhr.send(a)
            }, t.prototype.abort = function() {
                this.xhr.abort()
            }, t
        }(),
        se = function() {
            function t() {}
            return t.prototype.send = function(t) {
                return X(this, void 0, void 0, (function() {
                    var e, i, r, n, o, s, a, c, u, p, l, h, d, f, y, v, m, g, S, E, C, T = this;
                    return J(this, (function(w) {
                        switch (w.label) {
                            case 0:
                                if (e = t.path, i = t.domainUri, r = t.query, n = t.headers, o = t.method, s = t.body, a = t.onLoadCallback, c = t.onErrorCallback, u = t.timeout, p = t.onTimeoutCallback, this.abortController = new AbortController, l = {
                                        method: o
                                    }, h = {
                                        hasTimedOut: !1
                                    }, u && (d = window.setTimeout((function() {
                                        T.abortRequestAfterTimeout(h)
                                    }), u), l.signal = this.abortController.signal), n) {
                                    for (f = {}, y = 0, v = n; y < v.length; y++) m = v[y], f[m.name] = m.value;
                                    l.headers = f
                                }
                                s && (l.body = s), g = i, e && (g = csString.prototype.concat.call(g, "/", e)), r && (g = csString.prototype.concat.call(g, "?", r)), w.label = 1;
                            case 1:
                                return w.trys.push([1, 5, , 6]), [4, fetch(g, l)];
                            case 2:
                                return S = w.sent(), d && window.clearTimeout(d), a ? [4, S.text()] : [3, 4];
                            case 3:
                                E = w.sent(), C = {
                                    responseText: E,
                                    status: S.status
                                }, a(C), w.label = 4;
                            case 4:
                                return [3, 6];
                            case 5:
                                return w.sent(), d && window.clearTimeout(d), h.hasTimedOut && p ? p() : !this.abortController.signal.aborted && c && c(), [3, 6];
                            case 6:
                                return [2]
                        }
                    }))
                }))
            }, t.prototype.abort = function() {
                this.abortController && this.abortController.abort()
            }, t.prototype.abortRequestAfterTimeout = function(t) {
                this.abortController.abort(), t.hasTimedOut = !0
            }, t
        }(),
        ae = function() {
            function t() {
                this.isFetchSupported() ? this.httpSendStrategy = new se : this.httpSendStrategy = new oe
            }
            return t.prototype.send = function(t) {
                this.httpSendStrategy.send(t)
            }, t.prototype.abort = function() {
                this.httpSendStrategy.abort()
            }, t.prototype.isFetchSupported = function() {
                return "function" == typeof window.fetch && !!window.AbortController
            }, t
        }(),
        ce = function(t) {
            function e(e, i) {
                var r = t.call(this, e, i) || this;
                return r.afterRequestDataRetrievedCallbacks = [], r.requestHeaders = [], r.timeout = 0, r.httpSenderContext = new ae, r
            }
            return W(e, t), e.prototype.setCompressionOptions = function(t, e) {
                this.compressor = t, this.compressionOutputType = e
            }, e.prototype.setRequestPayloadProvider = function(t) {
                this.requestPayloadProvider = t
            }, e.prototype.setRequestHeader = function(t) {
                csArray.prototype.push.call(this.requestHeaders, t)
            }, e.prototype.afterProvidersCalled = function(t) {
                csArray.prototype.push.call(this.afterRequestDataRetrievedCallbacks, t)
            }, e.prototype.onLoad = function(t) {
                this.onLoadCallback = t
            }, e.prototype.onError = function(t) {
                this.onErrorCallback = t
            }, e.prototype.onTimeout = function(t, e) {
                this.timeout = t, this.onTimeoutCallback = e
            }, e.prototype.send = function() {
                var t = this;
                csArray.prototype.forEach.call(this.beforeRequestCallbacks, (function(t) {
                    return t()
                }));
                var e = this.retrieveParameters(),
                    i = this.retrievePayload();
                csArray.prototype.forEach.call(this.afterRequestDataRetrievedCallbacks, (function(t) {
                    return t()
                })), this.compressor && this.compressionOutputType ? this.compressor.compress(this.compressionOutputType, i, (function(i) {
                    t.doSend(e, i)
                })) : this.doSend(e, i)
            }, e.prototype.abort = function() {
                this.httpSenderContext.abort()
            }, e.prototype.retrievePayload = function() {
                return this.requestPayloadProvider ? this.requestPayloadProvider.getRequestPayload() : ""
            }, e.prototype.doSend = function(t, e) {
                var i = Z.toQuery(t);
                this.httpSenderContext.send({
                    method: "POST",
                    domainUri: this.domainUri,
                    path: this.path,
                    headers: this.requestHeaders,
                    query: i,
                    body: e,
                    onLoadCallback: this.onLoadCallback,
                    onErrorCallback: this.onErrorCallback,
                    timeout: this.timeout,
                    onTimeoutCallback: this.onTimeoutCallback
                }), csArray.prototype.forEach.call(this.afterRequestCallbacks, (function(e) {
                    return e(t)
                }))
            }, Y([_t("POST request")], e.prototype, "doSend", null), e
        }($);
    ! function(t) {
        t[t.MUTATION_INSERT = 1] = "MUTATION_INSERT", t[t.MUTATION_REMOVE = 2] = "MUTATION_REMOVE", t[t.MUTATION_ATTRIBUTE = 3] = "MUTATION_ATTRIBUTE", t[t.MUTATION_CHARACTER_DATA = 4] = "MUTATION_CHARACTER_DATA", t[t.INITIAL_DOM = 5] = "INITIAL_DOM", t[t.SCROLL = 6] = "SCROLL", t[t.MOUSE_MOVE = 7] = "MOUSE_MOVE", t[t.CLICK = 8] = "CLICK", t[t.RESIZE = 9] = "RESIZE", t[t.INPUT_CHECKABLE = 10] = "INPUT_CHECKABLE", t[t.INPUT_SELECT = 11] = "INPUT_SELECT", t[t.INPUT_TEXT = 12] = "INPUT_TEXT", t[t.HASH_CHANGE = 13] = "HASH_CHANGE", t[t.CONSENT_GRANTED = 14] = "CONSENT_GRANTED", t[t.CONSENT_WITHDRAWN = 15] = "CONSENT_WITHDRAWN", t[t.MOUSE_OVER = 16] = "MOUSE_OVER", t[t.VISIBILITY_CHANGE = 17] = "VISIBILITY_CHANGE", t[t.STYLESHEET_RULE_INSERT = 18] = "STYLESHEET_RULE_INSERT", t[t.STATIC_RESOURCE_URL = 19] = "STATIC_RESOURCE_URL", t[t.PERFORMANCE_TIMINGS = 20] = "PERFORMANCE_TIMINGS", t[t.ATTACH_SHADOW = 22] = "ATTACH_SHADOW", t[t.STYLESHEET_CSS_TEXT_UPDATE = 23] = "STYLESHEET_CSS_TEXT_UPDATE", t[t.MOUSE_DOWN = 24] = "MOUSE_DOWN", t[t.MOUSE_UP = 25] = "MOUSE_UP", t[t.JAVASCRIPT_ERROR = 26] = "JAVASCRIPT_ERROR", t[t.PAGE_EVENT = 27] = "PAGE_EVENT", t[t.API_ERROR = 28] = "API_ERROR", t[t.TEXT_VISIBILITY = 29] = "TEXT_VISIBILITY", t[t.MUTATION_ENCRYPTED_CHARACTER_DATA = 30] = "MUTATION_ENCRYPTED_CHARACTER_DATA", t[t.INPUT_ENCRYPTED_TEXT = 31] = "INPUT_ENCRYPTED_TEXT", t[t.KEY_DOWN = 32] = "KEY_DOWN", t[t.KEY_UP = 33] = "KEY_UP", t[t.CLIPBOARD_COMMAND = 34] = "CLIPBOARD_COMMAND", t[t.STYLESHEET_RULE_DELETE = 37] = "STYLESHEET_RULE_DELETE", t[t.USER_IDENTIFIER = 38] = "USER_IDENTIFIER"
    }(ie || (ie = {}));

    function ue(t, e) {
        void 0 === e && (e = !0), t.boundElement.addEventListener(t.type, t.listener, e)
    }

    function pe(t, e) {
        void 0 === e && (e = !0), t.boundElement.removeEventListener(t.type, t.listener, e)
    }
    var le, he, de = function() {
        function t(t, e, i, r, n, o, s) {
            this.nodeIdentifier = t, this.projectConfiguration = e, this.asymmetricEncryption = i, this.textNodesBuffer = r, this.textNodesMutationsBuffer = n, this.inputNodesBuffer = o, this.userIdentifierBuffer = s, this.publicKey = null, this.importKeyDone = !1
        }
        return t.prototype.onTextNodeToEncrypt = function(t) {
            this.onTextNodeToEncryptCallback = t
        }, t.prototype.onInputNodeToEncrypt = function(t) {
            this.onInputNodeToEncryptCallback = t
        }, t.prototype.onUserIdentifierToEncrypt = function(t) {
            this.onUserIdentifierToEncryptCallback = t
        }, t.prototype.init = function() {
            var t = this;
            this.isFeatureSupported() && (this.textNodesBuffer.onSerializeData((function(e) {
                return t.serializeTextNodeToEncrypt(e)
            })), this.textNodesMutationsBuffer.onSerializeData((function(e) {
                return t.serializeTextNodeMutationToEncrypt(e)
            })), this.inputNodesBuffer.onSerializeData((function(e) {
                return t.serializeInputNodeToEncrypt(e)
            })), this.userIdentifierBuffer.onSerializeData((function(e) {
                return t.serializeUserIdentifierToEncrypt(e)
            })), this.importPublicKey(this.projectConfiguration.recordingEncryptionPublicKey))
        }, t.prototype.importPublicKey = function(t) {
            return X(this, void 0, void 0, (function() {
                var e;
                return J(this, (function(i) {
                    switch (i.label) {
                        case 0:
                            return [4, this.asymmetricEncryption.importKey(t)];
                        case 1:
                            return e = i.sent(), this.importKeyDone = !0, e ? (this.publicKey = e, this.textNodesBuffer.serializeDataFromBuffer(), this.userIdentifierBuffer.serializeDataFromBuffer()) : (this.textNodesBuffer.clear(), this.userIdentifierBuffer.clear(), xt.warn("Fail to import public key '" + t + "'")), this.textNodesMutationsBuffer.serializeDataFromBuffer(), this.inputNodesBuffer.serializeDataFromBuffer(), [2]
                    }
                }))
            }))
        }, t.prototype.registerTextNodeToEncrypt = function(t) {
            this.isFeatureSupported() && (this.importKeyDone ? this.serializeTextNodeToEncrypt(t) : this.textNodesBuffer.addData(t))
        }, t.prototype.registerTextNodeMutationToEncrypt = function(t) {
            this.isFeatureSupported() && (this.importKeyDone ? this.serializeTextNodeMutationToEncrypt(t) : this.textNodesMutationsBuffer.addData(t))
        }, t.prototype.registerInputNodeToEncrypt = function(t) {
            this.isFeatureSupported() && (this.importKeyDone ? this.serializeInputNodeToEncrypt(t) : this.inputNodesBuffer.addData(t))
        }, t.prototype.registerUserIdentifierToEncrypt = function(t) {
            this.isFeatureSupported() && (this.importKeyDone ? this.serializeUserIdentifierToEncrypt(t) : this.userIdentifierBuffer.addData(t))
        }, t.prototype.isFeatureSupported = function() {
            return this.projectConfiguration.recordingEncryptionEnabled && !!this.projectConfiguration.recordingEncryptionPublicKey && this.projectConfiguration.recordingEncryptionPublicKeyId > 0 && this.asymmetricEncryption.isSupported()
        }, t.prototype.serializeTextNodeToEncrypt = function(t) {
            var e = this,
                i = t.textNode;
            this.nodeIdentifier.ifIdentified(i, (function(i) {
                if (e.publicKey) {
                    var r = K(K({}, t), {
                        targetId: i,
                        date: F.now()
                    });
                    e.encryptAndProcessEvent(r, (function(t) {
                        return t.textNode.data
                    }), (function() {
                        return xt.warn("Fail to encrypt text node data")
                    }), (function(t, i) {
                        return e.processEncryptedTextMutation(t, i)
                    }))
                }
            }))
        }, t.prototype.serializeTextNodeMutationToEncrypt = function(t) {
            var e = this;
            if (!this.publicKey) return this.fallbackToCharacterData(t);
            this.encryptAndProcessEvent(t, (function(t) {
                return t.textNode.data
            }), (function() {
                xt.warn("Fail to encrypt text node data - Text node processed as MUTATION_CHARACTER_DATA"), e.fallbackToCharacterData(t)
            }), (function(t, i) {
                return e.processEncryptedTextMutation(t, i)
            }))
        }, t.prototype.serializeInputNodeToEncrypt = function(t) {
            var e = this;
            if (!this.publicKey) return this.fallbackToInputText(t);
            this.encryptAndProcessEvent(t, (function(t) {
                return t.targetValue
            }), (function() {
                xt.warn("Fail to encrypt input data - Input node processed as INPUT_TEXT"), e.fallbackToInputText(t)
            }), (function(t, i) {
                return e.processEncryptedInputText(t, i)
            }))
        }, t.prototype.serializeUserIdentifierToEncrypt = function(t) {
            var e = this;
            this.publicKey && this.encryptAndProcessEvent(t, (function(t) {
                return t.userIdentifier
            }), (function() {
                xt.warn("Fail to encrypt userIdentifier")
            }), (function(t, i) {
                return e.processEncryptedUserIdentifier(t, i)
            }))
        }, t.prototype.encryptAndProcessEvent = function(t, e, i, r) {
            return X(this, void 0, void 0, (function() {
                var n, o;
                return J(this, (function(s) {
                    switch (s.label) {
                        case 0:
                            return n = e(t), [4, this.asymmetricEncryption.encrypt({
                                publicKey: this.publicKey
                            }, n)];
                        case 1:
                            return (o = s.sent()) ? (r(t, o), [2]) : (i(t), [2])
                    }
                }))
            }))
        }, t.prototype.fallbackToCharacterData = function(t) {
            var e = t.targetId,
                i = t.serializedTextData,
                r = t.date;
            this.onTextNodeToEncryptCallback({
                date: r,
                args: [e, i],
                type: ie.MUTATION_CHARACTER_DATA
            })
        }, t.prototype.fallbackToInputText = function(t) {
            var e = t.targetId,
                i = t.targetValue,
                r = t.date;
            this.onInputNodeToEncryptCallback({
                date: r,
                args: [e, csString.prototype.replace.call(i, /\S/g, "•")],
                type: ie.INPUT_TEXT
            })
        }, t.prototype.processEncryptedTextMutation = function(t, e) {
            var i = t.targetId,
                r = t.serializedTextData,
                n = t.date;
            this.onTextNodeToEncryptCallback({
                date: n,
                args: [i, r, e, this.projectConfiguration.recordingEncryptionPublicKeyId],
                type: ie.MUTATION_ENCRYPTED_CHARACTER_DATA
            })
        }, t.prototype.processEncryptedInputText = function(t, e) {
            var i = t.targetId,
                r = t.targetValue,
                n = t.date;
            this.onInputNodeToEncryptCallback({
                date: n,
                args: [i, csString.prototype.replace.call(r, /\S/g, "•"), e, this.projectConfiguration.recordingEncryptionPublicKeyId],
                type: ie.INPUT_ENCRYPTED_TEXT
            })
        }, t.prototype.processEncryptedUserIdentifier = function(t, e) {
            var i = {
                type: ie.USER_IDENTIFIER,
                args: [e, t.keyId],
                date: t.date
            };
            this.onUserIdentifierToEncryptCallback(i)
        }, t
    }();

    function fe(t) {
        var e = csEventtarget.apply(t);
        return e && f(e) && csElementshadowRoot.apply(e) && t.composedPath ? t.__csOriginalTarget || t.composedPath()[0] : e
    }

    function ye() {
        return function(t, e, i) {
            var r = i.value;
            return r && (i.value = function(t) {
                if (fe(t) === csEventtarget.apply(t)) return r.call(this, t)
            }), i
        }
    }! function(t) {
        t[t.SPACE = 0] = "SPACE", t[t.ENTER = 1] = "ENTER", t[t.BACKSPACE = 2] = "BACKSPACE", t[t.DELETE = 3] = "DELETE", t[t.ARROWUP = 4] = "ARROWUP", t[t.ARROWDOWN = 5] = "ARROWDOWN", t[t.ARROWLEFT = 6] = "ARROWLEFT", t[t.ARROWRIGHT = 7] = "ARROWRIGHT", t[t.CAPSLOCK = 8] = "CAPSLOCK", t[t.SHIFT = 9] = "SHIFT", t[t.TAB = 10] = "TAB", t[t.ALPHANUMERICAL = 11] = "ALPHANUMERICAL", t[t.ESCAPE = 12] = "ESCAPE", t[t.END = 13] = "END", t[t.ALT = 14] = "ALT", t[t.CTRL = 15] = "CTRL", t[t.META = 16] = "META"
    }(le || (le = {})),
    function(t) {
        t[t.COPY = 0] = "COPY", t[t.CUT = 1] = "CUT", t[t.PASTE = 2] = "PASTE"
    }(he || (he = {}));
    var ve = function() {
            function t(e, i, r, n) {
                var o = this;
                this.selector = e, this.nodeIdentifier = i, this.sensitiveContent = r, this.encryptionService = n, this.documents = [], this.onEventCallbacks = [], this.eventHandlers = [{
                    type: "change",
                    listener: this.selector.on(t.whiteListedCheckableInputsSelector, (function(t) {
                        return o.inputCheckableListener(csEventtarget.apply(t))
                    }))
                }, {
                    type: "change",
                    listener: this.selector.on("select", (function(t) {
                        return o.inputSelectListener(csEventtarget.apply(t))
                    }))
                }, {
                    type: "keyup",
                    listener: this.selector.on(t.whiteListedTextInputSelector, (function(t) {
                        return o.inputTextListener(csEventtarget.apply(t))
                    }))
                }, {
                    type: "scroll",
                    listener: function(t) {
                        return o.scrollListener(csEventtarget.apply(t))
                    }
                }, {
                    type: "mouseover",
                    listener: function(t) {
                        return o.mouseOverListener(t)
                    }
                }, {
                    type: "click",
                    listener: function(t) {
                        return o.clickListener(t)
                    }
                }, {
                    type: "mousedown",
                    listener: function(t) {
                        return o.mouseDownListener(t)
                    }
                }, {
                    type: "mouseup",
                    listener: function(t) {
                        return o.mouseUpListener(t)
                    }
                }, {
                    type: "keyup",
                    listener: function(t) {
                        return o.keyUpListener(t)
                    }
                }, {
                    type: "keydown",
                    listener: function(t) {
                        return o.keyDownListener(t)
                    }
                }, {
                    type: "paste",
                    listener: function(t) {
                        return o.pasteListener(t)
                    }
                }, {
                    type: "cut",
                    listener: function(t) {
                        return o.cutListener(t)
                    }
                }, {
                    type: "copy",
                    listener: function(t) {
                        return o.copyListener(t)
                    }
                }]
            }
            return t.prototype.init = function() {
                var t = this;
                this.initKeyStrokesMap(), this.initSubscribers(), this.encryptionService.onInputNodeToEncrypt((function(e) {
                    return t.triggerCallbacks(e)
                }))
            }, t.prototype.initSubscribers = function() {
                var t = this;
                this.nodeIdentifier.onIdentifierAdded((function(e) {
                    C(e) && t.bindHandlers(e)
                })), this.nodeIdentifier.onIdentifierRemoved((function(e) {
                    C(e) && t.unbindHandlers(e)
                }))
            }, t.prototype.onEvent = function(t) {
                csArray.prototype.push.call(this.onEventCallbacks, (function(e) {
                    e.date = F.now(), t(e)
                }))
            }, t.prototype.triggerCallbacks = function(t) {
                csArray.prototype.forEach.call(this.onEventCallbacks, (function(e) {
                    return e(t)
                }))
            }, t.prototype.start = function() {
                this.triggerInitialEvents()
            }, t.prototype.stop = function() {
                this.unbindAllHandlers()
            }, t.prototype.bindHandlers = function(t) {
                -1 === csArray.prototype.indexOf.call(this.documents, t) && (csArray.prototype.push.call(this.documents, t), csArray.prototype.forEach.call(this.eventHandlers, (function(e) {
                    return ue(K({
                        boundElement: t
                    }, e))
                })))
            }, t.prototype.unbindHandlers = function(t) {
                this.documents = csArray.prototype.filter.call(this.documents, (function(e) {
                    return e !== t
                })), csArray.prototype.forEach.call(this.eventHandlers, (function(e) {
                    return pe(K({
                        boundElement: t
                    }, e))
                }))
            }, t.prototype.unbindAllHandlers = function() {
                var t = this;
                csArray.prototype.forEach.call(this.documents, (function(e) {
                    return t.unbindHandlers(e)
                }))
            }, t.prototype.triggerInitialEvents = function() {
                this.initialTextInputListener(), this.initialScrollListener(), this.initialSelectListener(), this.initialCheckableListener()
            }, t.prototype.initialTextInputListener = function() {
                for (var e = document.querySelectorAll(t.whiteListedTextInputSelector), i = 0; i < e.length; i += 1) {
                    var r = e.item(i);
                    r.value.length > 0 && this.inputTextListener(r)
                }
            }, t.prototype.initialScrollListener = function() {
                for (var t = document.getElementsByTagName("*"), e = 0; e < t.length; e += 1) {
                    var i = t[e],
                        r = this.getScrollPosition(i),
                        n = r.top,
                        o = r.left;
                    0 === n && 0 === o || this.scrollListener(i)
                }
            }, t.prototype.initialSelectListener = function() {
                for (var t = document.getElementsByTagName("select"), e = 0; e < t.length; e += 1) this.inputSelectListener(t[e])
            }, t.prototype.initialCheckableListener = function() {
                for (var e = document.querySelectorAll(t.whiteListedCheckableInputsSelector), i = 0; i < e.length; i += 1) this.inputCheckableListener(e[i])
            }, t.prototype.getScrollPosition = function(t) {
                return t === document ? {
                    top: window.pageYOffset,
                    left: window.pageXOffset
                } : {
                    top: t.scrollTop,
                    left: t.scrollLeft
                }
            }, t.prototype.scrollListener = function(t) {
                var e = this;
                this.nodeIdentifier.ifIdentified(t, (function(i) {
                    if (!e.sensitiveContent.isSensitiveElementNode(t)) {
                        var r = e.getScrollPosition(t);
                        e.triggerCallbacks({
                            type: ie.SCROLL,
                            args: [i, r.left, r.top]
                        })
                    }
                }))
            }, t.prototype.mouseOverListener = function(t) {
                var e = this;
                this.nodeIdentifier.ifIdentified(t.target, (function(t) {
                    e.triggerCallbacks({
                        type: ie.MOUSE_OVER,
                        args: [t]
                    })
                }))
            }, t.prototype.clickListener = function(t) {
                var e = this;
                this.nodeIdentifier.ifIdentified(t.target, (function(t) {
                    e.triggerCallbacks({
                        type: ie.CLICK,
                        args: [t]
                    })
                }))
            }, t.prototype.mouseDownListener = function(t) {
                var e = this;
                this.nodeIdentifier.ifIdentified(csEventtarget.apply(t), (function(i) {
                    e.triggerCallbacks({
                        type: ie.MOUSE_DOWN,
                        args: [i, t.button, {
                            pageX: t.pageX,
                            pageY: t.pageY
                        }]
                    })
                }))
            }, t.prototype.mouseUpListener = function(t) {
                var e = this;
                this.nodeIdentifier.ifIdentified(csEventtarget.apply(t), (function(i) {
                    e.triggerCallbacks({
                        type: ie.MOUSE_UP,
                        args: [i, t.button]
                    })
                }))
            }, t.prototype.inputCheckableListener = function(t) {
                var e = this;
                this.nodeIdentifier.ifIdentified(t, (function(i) {
                    e.sensitiveContent.isSensitiveElementNode(t) || e.triggerCallbacks({
                        type: ie.INPUT_CHECKABLE,
                        args: [i, t.checked]
                    })
                }))
            }, t.prototype.inputSelectListener = function(t) {
                var e = this;
                this.nodeIdentifier.ifIdentified(t, (function(i) {
                    e.sensitiveContent.isSensitiveElementNode(t) || e.triggerCallbacks({
                        type: ie.INPUT_SELECT,
                        args: [i, t.selectedIndex]
                    })
                }))
            }, t.prototype.inputTextListener = function(t) {
                var e = this;
                this.nodeIdentifier.ifIdentified(t, (function(i) {
                    e.sensitiveContent.isSensitiveElementNode(t) || (t.hasAttribute("data-cs-encrypt") ? e.encryptionService.registerInputNodeToEncrypt({
                        targetId: i,
                        targetValue: t.value,
                        date: F.now()
                    }) : e.triggerCallbacks({
                        type: ie.INPUT_TEXT,
                        args: [i, csString.prototype.replace.call(t.value, /\S/g, "•")]
                    }))
                }))
            }, t.prototype.keyUpListener = function(t) {
                var e = this,
                    i = this.keyStrokeMap[t.key];
                void 0 !== i && this.nodeIdentifier.ifIdentified(csEventtarget.apply(t), (function(t) {
                    e.triggerCallbacks({
                        type: ie.KEY_UP,
                        args: [t, i]
                    })
                }))
            }, t.prototype.keyDownListener = function(t) {
                var e = this,
                    i = this.keyStrokeMap[t.key];
                void 0 !== i && this.nodeIdentifier.ifIdentified(csEventtarget.apply(t), (function(t) {
                    e.triggerCallbacks({
                        type: ie.KEY_DOWN,
                        args: [t, i]
                    })
                }))
            }, t.prototype.copyListener = function(t) {
                var e = this;
                this.nodeIdentifier.ifIdentified(csEventtarget.apply(t), (function(t) {
                    e.triggerCallbacks({
                        type: ie.CLIPBOARD_COMMAND,
                        args: [t, he.COPY]
                    })
                }))
            }, t.prototype.cutListener = function(t) {
                var e = this;
                this.nodeIdentifier.ifIdentified(csEventtarget.apply(t), (function(t) {
                    e.triggerCallbacks({
                        type: ie.CLIPBOARD_COMMAND,
                        args: [t, he.CUT]
                    })
                }))
            }, t.prototype.pasteListener = function(t) {
                var e = this;
                this.nodeIdentifier.ifIdentified(csEventtarget.apply(t), (function(t) {
                    e.triggerCallbacks({
                        type: ie.CLIPBOARD_COMMAND,
                        args: [t, he.PASTE]
                    })
                }))
            }, t.prototype.initKeyStrokesMap = function() {
                this.keyStrokeMap = {}, this.keyStrokeMap[" "] = le.SPACE, this.keyStrokeMap.Spacebar = le.SPACE, this.keyStrokeMap.Backspace = le.BACKSPACE, this.keyStrokeMap.Enter = le.ENTER, this.keyStrokeMap.Delete = le.DELETE, this.keyStrokeMap.ArrowUp = le.ARROWUP, this.keyStrokeMap.ArrowDown = le.ARROWDOWN, this.keyStrokeMap.ArrowLeft = le.ARROWLEFT, this.keyStrokeMap.ArrowRight = le.ARROWRIGHT, this.keyStrokeMap.Up = le.ARROWUP, this.keyStrokeMap.Down = le.ARROWDOWN, this.keyStrokeMap.Left = le.ARROWLEFT, this.keyStrokeMap.Right = le.ARROWRIGHT, this.keyStrokeMap.CapsLock = le.CAPSLOCK, this.keyStrokeMap.Shift = le.SHIFT, this.keyStrokeMap.Tab = le.TAB, this.keyStrokeMap.Escape = le.ESCAPE, this.keyStrokeMap.Esc = le.ESCAPE, this.keyStrokeMap.End = le.END, this.keyStrokeMap.Alt = le.ALT, this.keyStrokeMap.Control = le.CTRL, this.keyStrokeMap.Meta = le.META
            }, t.whiteListedTextInputSelector = csArray.prototype.join.call(["textarea", "input:not([type])", 'input[type="text"]', 'input[type="email"]', 'input[type="search"]', 'input[type="tel"]', 'input[type="url"]'], ","), t.whiteListedCheckableInputsSelector = csArray.prototype.join.call(['input[type="checkbox"]', 'input[type="radio"]'], ","), Y([_t("scroll")], t.prototype, "scrollListener", null), Y([_t("mouseOver")], t.prototype, "mouseOverListener", null), Y([_t("click"), ye()], t.prototype, "clickListener", null), Y([_t("mousedown"), ye()], t.prototype, "mouseDownListener", null), Y([_t("mouseup"), ye()], t.prototype, "mouseUpListener", null), Y([_t("checkable")], t.prototype, "inputCheckableListener", null), Y([_t("select")], t.prototype, "inputSelectListener", null), Y([_t("text")], t.prototype, "inputTextListener", null), Y([_t("Event handler type: keyup"), ye()], t.prototype, "keyUpListener", null), Y([_t("Event handler type: keydown"), ye()], t.prototype, "keyDownListener", null), Y([_t("Event handler type: copy"), ye()], t.prototype, "copyListener", null), Y([_t("Event handler type: cut"), ye()], t.prototype, "cutListener", null), Y([_t("Event handler type: paste"), ye()], t.prototype, "pasteListener", null), t
        }(),
        me = function() {
            function t(t, e, i, r, n) {
                var o = this;
                this.mutationSerializer = t, this.mutationObserver = e, this.staticResourceUrlTracker = i, this.lifeCycleEventsEmitter = r, this.configuration = n, this.mutationObserver.onCharacterDataMutation((function(t) {
                    o.mutationSerializer.isSerializationInProgress() ? o.mutationSerializer.updateNodeMapCharacterData(t) : o.characterDataMutation(t)
                })), this.mutationObserver.onAttributesMutation((function(t) {
                    o.mutationSerializer.isSerializationInProgress() ? o.mutationSerializer.updateNodeMapAttributesMutation(t) : o.attributesMutation(t)
                })), this.mutationObserver.onChildListMutation((function(t) {
                    o.mutationSerializer.isSerializationInProgress() ? o.mutationSerializer.updateNodeMapChildList(t) : o.childListMutation(t)
                })), this.mutationObserver.onAttachShadowMutation((function(t) {
                    o.mutationSerializer.isSerializationInProgress(), o.attachShadowEvent(t)
                }))
            }
            return t.prototype.onEvent = function(t) {
                this.onEventCallback = t
            }, t.prototype.start = function() {
                this.mutationObserver.start(), this.recordInitialDom()
            }, t.prototype.stop = function() {
                this.mutationObserver.stop()
            }, t.prototype.getDocument = function() {
                return document
            }, t.prototype.shouldSerializeAsync = function() {
                return "Promise" in window && "findIndex" in csArray.prototype && this.configuration.asyncSerializerEnabled
            }, t.prototype.recordInitialDom = function() {
                var t = this,
                    e = this.getDocument();
                if (this.shouldSerializeAsync()) this.mutationSerializer.serializeDocumentAsync(e).then((function(e) {
                    t.onEventCallback({
                        args: e,
                        date: F.now(),
                        type: ie.INITIAL_DOM
                    }), t.lifeCycleEventsEmitter.emitInitialDomDone(e)
                })).catch((function(t) {
                    xt.error(t)
                }));
                else {
                    var i = this.mutationSerializer.serializeDocumentSync(e);
                    this.onEventCallback({
                        args: i,
                        date: F.now(),
                        type: ie.INITIAL_DOM
                    }), this.lifeCycleEventsEmitter.emitInitialDomDone(i)
                }
            }, t.prototype.attachShadowEvent = function(t) {
                var e = this.mutationSerializer.serializeAttachShadowEvent(t);
                e && this.onEventCallback({
                    args: e,
                    date: t.date,
                    type: ie.ATTACH_SHADOW
                })
            }, t.prototype.attributesMutation = function(t) {
                var e = this.mutationSerializer.serializeMutationAttribute(t);
                e && (this.onEventCallback({
                    args: e,
                    date: t.date,
                    type: ie.MUTATION_ATTRIBUTE
                }), this.staticResourceUrlTracker.scanAttribute(t.target, t.attributeName))
            }, t.prototype.characterDataMutation = function(t) {
                var e = this.mutationSerializer.serializeMutationCharacterData(t);
                e && (this.onEventCallback({
                    args: e,
                    date: t.date,
                    type: ie.MUTATION_CHARACTER_DATA
                }), this.staticResourceUrlTracker.scanText(t.target))
            }, t.prototype.childListMutation = function(t) {
                var e = this,
                    i = this.mutationSerializer.serializeMutationChildList(t);
                if (i) {
                    var r = i.removedNodes,
                        n = i.addedNodes;
                    csArray.prototype.forEach.call(r, (function(i) {
                        e.onEventCallback({
                            args: i,
                            date: t.date,
                            type: ie.MUTATION_REMOVE
                        })
                    })), csArray.prototype.forEach.call(n, (function(i) {
                        e.onEventCallback({
                            args: i,
                            date: t.date,
                            type: ie.MUTATION_INSERT
                        })
                    }))
                }
            }, t
        }(),
        ge = function() {
            function t(t) {
                this.storageCharsUsed = 0, this.maxStoredChars = 0, this.maxStoredChars = t / 2
            }
            return t.prototype.add = function(t) {
                this.storageCharsUsed += t.length
            }, t.prototype.isThresholdReached = function() {
                return this.storageCharsUsed > this.maxStoredChars
            }, t.prototype.reset = function() {
                this.storageCharsUsed = 0
            }, t
        }(),
        Se = function() {
            function t(t, e, i) {
                void 0 === t && (t = []), void 0 === e && (e = {}), void 0 === i && (i = 512e3), this.events = t, this.requestParameters = e, this.sizeCounter = new ge(i)
            }
            return t.prototype.addEvent = function(t) {
                this.sizeCounter.add(csJSON.stringify(t)), csArray.prototype.push.call(this.events, t)
            }, t.prototype.eventsCount = function() {
                return this.events.length
            }, t.prototype.clearEvents = function() {
                this.sizeCounter.reset(), this.events = []
            }, t.prototype.isFull = function() {
                return this.sizeCounter.isThresholdReached() || this.eventsCount() >= 100
            }, t.prototype.setRequestParametersFromProvider = function(t) {
                var e = t.getRequestParameters();
                for (var i in e) e.hasOwnProperty(i) && (this.requestParameters[i] = e[i])
            }, t.prototype.removeRequestParameter = function(t) {
                this.requestParameters.hasOwnProperty(t) && delete this.requestParameters[t]
            }, t.prototype.getEvents = function() {
                return this.events
            }, t.prototype.getRequestPayload = function() {
                return csJSON.stringify(this.events)
            }, t.prototype.getRequestParameters = function() {
                return K({}, this.requestParameters)
            }, t
        }(),
        Ee = function() {
            function t() {
                this.index = 1
            }
            return t.prototype.getCurrentIndex = function() {
                return this.index
            }, t.prototype.increment = function() {
                this.index += 1
            }, t.prototype.reset = function() {
                this.index = 1
            }, t.prototype.getRequestParameters = function() {
                return {
                    ri: "" + this.index
                }
            }, t
        }(),
        Ce = function() {
            function t() {}
            return t.prototype.emit = function(e, i) {
                var r = t.prefix + "." + e,
                    n = t.createEvent(r, {
                        detail: i
                    });
                null !== n && document.dispatchEvent(n)
            }, t.createEvent = function(t, e) {
                if (void 0 === e && (e = {}), "function" == typeof CustomEvent) return new CustomEvent(t, e);
                var i = this.tryToCreateCustomEvent();
                if (null === i) return null;
                var r = e.bubbles,
                    n = void 0 !== r && r,
                    o = e.cancelable,
                    s = void 0 !== o && o,
                    a = e.detail;
                return i.initCustomEvent(t, n, s, a), i
            }, t.tryToCreateCustomEvent = function() {
                try {
                    return document.createEvent("CustomEvent")
                } catch (t) {
                    return null
                }
            }, t.prefix = "cs.tracking", t
        }(),
        Te = function() {
            function t() {
                this.isStarted = !1
            }
            return t.prototype.start = function() {
                this.isStarted || (this.isStarted = !0, this.onStart())
            }, t.prototype.stop = function() {
                this.isStarted && (this.isStarted = !1, this.onStop())
            }, t.prototype.restart = function() {
                this.stop(), this.start()
            }, t
        }(),
        we = function(t) {
            function e(e, i, r, n, o, s, a, c, u, p, l, h, d, f, y, v, m, g, S) {
                var E = t.call(this) || this;
                return E.configuration = e, E.recordingRequest = i, E.recordingBatch = r, E.requestParameters = n, E.requestIndex = o, E.styleSheetRuleTracker = s, E.recordingMutationsTracker = a, E.recordingPageEventsTracker = c, E.recordingBrowserEventsTracker = u, E.sessionRenewer = p, E.staticResourceUrlTracker = l, E.recordingPerformanceTimingsTracker = h, E.javaScriptErrorsTracker = d, E.javaScriptErrorsAnonymizer = f, E.apiErrorsTracker = y, E.textVisibilityTracker = v, E.apiErrorsAnonymizer = m, E.encryptionService = g, E.recoveryService = S, E.javaScriptErrorsCount = 0, E.apiErrorsCount = 0, E.eventEmitter = new Ce, E.canSendEvents = !0, E.onEvent = function(t) {
                    return E.processEvent(t)
                }, E
            }
            return W(e, t), e.prototype.init = function() {
                this.bindRecordingRequest(), this.bindTrackers()
            }, e.prototype.bindRecordingRequest = function() {
                var t = this;
                this.recordingRequest.setRequestPayloadProvider(this.recordingBatch), this.recordingRequest.setRequestParametersProviders(this.recordingBatch), this.recordingRequest.afterProvidersCalled((function() {
                    t.recoveryService.addBatchInProgress("" + t.requestIndex.getCurrentIndex(), t.recordingBatch.getRequestParameters(), t.recordingBatch.getEvents()), t.recordingBatch.clearEvents(), t.requestIndex.increment(), t.recordingBatch.setRequestParametersFromProvider(t.requestParameters)
                })), this.recordingRequest.after((function(e) {
                    "ri" in e && t.recoveryService.removeBatchInProgress(e.ri)
                }))
            }, e.prototype.bindTrackers = function() {
                var t = this;
                this.styleSheetRuleTracker.onEvent(this.onEvent), this.recordingMutationsTracker.onEvent(this.onEvent), this.recordingBrowserEventsTracker.onEvent(this.onEvent), this.recordingPageEventsTracker.onEvent(this.onEvent), this.staticResourceUrlTracker.onEvent(this.onEvent), this.recordingPerformanceTimingsTracker.onEvent(this.onEvent), this.textVisibilityTracker.onEvent(this.onEvent), this.javaScriptErrorsTracker.onEvent((function(e) {
                    return t.processJavascriptError(e)
                })), this.apiErrorsTracker.onEvent((function(e) {
                    return t.processApiError(e)
                })), this.encryptionService.onTextNodeToEncrypt(this.onEvent), this.encryptionService.onUserIdentifierToEncrypt(this.onEvent)
            }, e.prototype.blockSendingEvents = function() {
                this.canSendEvents = !1
            }, e.prototype.allowSendingEvents = function() {
                this.canSendEvents = !0
            }, e.prototype.processEvent = function(t) {
                this.sessionRenewer.isSessionValid() && (this.recordingBatch.addEvent(t), this.recordingBatch.isFull() && this.pushEvents(), this.configuration.emitDebugEvents && this.eventEmitter.emit("recordingEvent", K(K({}, t), {
                    typeName: ie[t.type]
                })))
            }, e.prototype.onStart = function() {
                this.recordingBatch.setRequestParametersFromProvider(this.requestParameters), this.recordingPerformanceTimingsTracker.start(), this.styleSheetRuleTracker.start(), this.textVisibilityTracker.start(), this.recordingMutationsTracker.start(), this.recordingBrowserEventsTracker.start(), this.configuration.jsErrorsEnabled && this.javaScriptErrorsTracker.start(), this.configuration.apiErrorsEnabled && this.apiErrorsTracker.start(), this.configuration.emitDebugEvents && this.eventEmitter.emit("replayRecordingStarted")
            }, e.prototype.onStop = function() {
                this.styleSheetRuleTracker.stop(), this.recordingMutationsTracker.stop(), this.recordingBrowserEventsTracker.stop(), this.recordingPageEventsTracker.stop(), this.javaScriptErrorsTracker.stop(), this.apiErrorsTracker.stop(), this.textVisibilityTracker.stop()
            }, e.prototype.clearStates = function() {
                this.pushEvents(), this.requestIndex.reset(), this.removeEtrRequestParameters(), this.recordingBatch.setRequestParametersFromProvider(this.requestParameters), this.javaScriptErrorsCount = 0, this.apiErrorsCount = 0
            }, e.prototype.pushEvents = function() {
                this.textVisibilityTracker.flushEvents(), this.recordingBatch.eventsCount() > 0 && this.canSendEvents && (this.isStarted ? this.recordingRequest.send() : this.recordingBatch.clearEvents())
            }, e.prototype.processApiError = function(t) {
                if (this.apiErrorsCount < e.MAX_API_ERROR_COUNT) {
                    var i = {
                        type: ie.API_ERROR,
                        date: F.now(),
                        args: [this.apiErrorsAnonymizer.anonymize(t)]
                    };
                    this.onEvent(i), this.apiErrorsCount = this.apiErrorsCount + 1
                }
            }, e.prototype.processJavascriptError = function(t) {
                if (this.javaScriptErrorsCount < e.MAX_JAVASCRIPT_ERROR_COUNT) {
                    var i = {
                        type: ie.JAVASCRIPT_ERROR,
                        date: F.now(),
                        args: [this.javaScriptErrorsAnonymizer.anonymize(t)]
                    };
                    this.onEvent(i), this.javaScriptErrorsCount = this.javaScriptErrorsCount + 1
                }
            }, e.prototype.setEtrRequestParameters = function(t) {
                this.isStarted && (t === Ht.ETR_SESSION ? this.recordingBatch.setRequestParametersFromProvider({
                    getRequestParameters: function() {
                        var t;
                        return (t = {})[e.ETRS_PARAMETER] = e.ETR_ACTIVE, t
                    }
                }) : t === Ht.ETR_PAGE && this.recordingBatch.setRequestParametersFromProvider({
                    getRequestParameters: function() {
                        var t;
                        return (t = {})[e.ETRP_PARAMETER] = e.ETR_ACTIVE, t
                    }
                }))
            }, e.prototype.removeEtrRequestParameters = function() {
                this.recordingBatch.removeRequestParameter(e.ETRP_PARAMETER), this.recordingBatch.removeRequestParameter(e.ETRS_PARAMETER)
            }, e.prototype.clearEvents = function() {
                this.recordingBatch.clearEvents()
            }, e.prototype.onCustomErrorEvent = function(t) {
                this.processJavascriptError(t)
            }, e.prototype.onPageEvent = function(t) {
                this.processPageEvent(t)
            }, e.prototype.onUserIdentifierEvent = function(t) {
                var e = {
                    userIdentifier: t,
                    date: F.now(),
                    keyId: this.configuration.recordingEncryptionPublicKeyId
                };
                this.encryptionService.registerUserIdentifierToEncrypt(e)
            }, e.prototype.onEventTriggerRecording = function(t, e) {
                this.setEtrRequestParameters(e), this.processPageEvent(t), this.pushEvents()
            }, e.prototype.processPageEvent = function(t) {
                var i = {
                    type: ie.PAGE_EVENT,
                    date: F.now(),
                    args: [{
                        eventName: csString.prototype.slice.call(t, 0, e.MAX_PAGE_EVENT_LENGTH)
                    }]
                };
                this.onEvent(i)
            }, e.prototype.triggerConsentGranted = function() {
                var t = {
                    date: F.now(),
                    type: ie.CONSENT_GRANTED
                };
                this.recordingBatch.addEvent(t)
            }, e.prototype.triggerConsentWithdrawn = function() {
                var t = {
                    date: F.now(),
                    type: ie.CONSENT_WITHDRAWN
                };
                this.recordingBatch.addEvent(t)
            }, e.MAX_PAGE_EVENT_LENGTH = 255, e.MAX_JAVASCRIPT_ERROR_COUNT = 20, e.MAX_API_ERROR_COUNT = 20, e.ETRP_PARAMETER = "etrp", e.ETRS_PARAMETER = "etrs", e.ETR_ACTIVE = "1", e
        }(Te),
        be = function(t) {
            function e(e, i, r, n, o) {
                var s = t.call(this) || this;
                return s.recordingRecoveryRequest = e, s.recordingBatch = i, s.recoveryStorage = r, s.configuration = n, s.lastMessageBeaconRequest = o, s.batchesInProgress = {}, s.pageChangeHandler = function() {
                    try {
                        s.saveBatchesInProgress();
                        var t = s.recordingBatch.getRequestParameters();
                        if (!s.hasValidRecordingType(t.rt)) return;
                        if (s.sendLastMessageBeacon(), 0 === s.recordingBatch.eventsCount()) return;
                        s.configuration.useMalkaPipeline && (t.hlm = "true"), s.recoveryStorage.save("last", {
                            metadata: t,
                            events: s.recordingBatch.getEvents()
                        })
                    } catch (t) {}
                }, s
            }
            return W(e, t), e.prototype.onStart = function() {
                this.batchesInProgress = {}, this.addPageChangeListener()
            }, e.prototype.onStop = function() {
                this.removePageChangeListener()
            }, e.prototype.recover = function() {
                this.sendPersistedRecordings()
            }, e.prototype.addBatchInProgress = function(t, e, i) {
                this.batchesInProgress[t] = {
                    metadata: e,
                    events: i
                }
            }, e.prototype.removeBatchInProgress = function(t) {
                delete this.batchesInProgress[t]
            }, e.prototype.sendPersistedRecordings = function() {
                var t = this,
                    e = this.recoveryStorage.recover(),
                    i = e.rawBatches,
                    r = e.recoveredSize;
                if (0 !== i.length) {
                    var n = csArray.prototype.map.call(csArray.prototype.filter.call(i, (function(e) {
                        var i = e.metadata;
                        return t.hasValidRecordingType(i.rt)
                    })), (function(e) {
                        var i = e,
                            r = i.metadata,
                            n = i.events,
                            o = new Se(n, r);
                        return t.recordingRecoveryRequest.setRequestPayloadProvider(o), t.recordingRecoveryRequest.setRequestParametersProviders(o), t.recordingRecoveryRequest.send(), e
                    }));
                    r > 1048576 && xt.warn("\n        Size of data retrieved from local storage " + r + " exceeds 1048576.\n        Number of tabs saved in local storage: " + n.length + "\n      ")
                }
            }, e.prototype.sendLastMessageBeacon = function() {
                this.configuration.useMalkaPipeline && this.lastMessageBeaconRequest.send()
            }, e.prototype.addPageChangeListener = function() {
                window.addEventListener("pagehide", this.pageChangeHandler)
            }, e.prototype.removePageChangeListener = function() {
                window.removeEventListener("pagehide", this.pageChangeHandler)
            }, e.prototype.hasValidRecordingType = function(t) {
                return !this.configuration.useMalkaPipeline || !!t && -1 === csString.prototype.indexOf.call(t, Bt.TEMPORARILY_RECORDED)
            }, e.prototype.saveBatchesInProgress = function() {
                var t = Object.keys(this.batchesInProgress);
                if (t.length <= 3)
                    for (var e = 0, i = t; e < i.length; e++) {
                        var r = i[e],
                            n = this.batchesInProgress[r],
                            o = n.metadata,
                            s = n.events;
                        this.recoveryStorage.save(r, {
                            metadata: o,
                            events: s
                        })
                    }
            }, e
        }(Te),
        Re = /[^\s]/g;

    function ke(t) {
        return csString.prototype.replace.call(t, Re, "a")
    }
    var Ae, Ie, Pe = function() {
            function t(t, e, i, r, n, o, s, a) {
                this.consentService = t, this.domSerializer = e, this.nodeIdentifier = i, this.sensitiveContent = r, this.anonymization = n, this.encryptionService = o, this.configuration = s, this.urlService = a, this.serializationInProgress = !1
            }
            return t.prototype.init = function() {
                this.resetAnonymization()
            }, t.prototype.isSerializationInProgress = function() {
                return this.serializationInProgress
            }, t.prototype.updateNodeMapCharacterData = function(t) {
                var e = this.serializeMutationCharacterData(t);
                this.domSerializer.updateTextNode(e)
            }, t.prototype.updateNodeMapAttributesMutation = function(t) {
                var e = this.serializeMutationAttribute(t);
                this.domSerializer.updateAttribute(e, this.useAnonymization)
            }, t.prototype.updateNodeMapChildList = function(t) {
                var e = this;
                this.nodeIdentifier.ifIdentified(t.target, (function(i) {
                    var r = e.serializeMutationChildList(t);
                    r && e.domSerializer.updateChildren(i, r)
                }))
            }, t.prototype.serializeDocumentSync = function(t) {
                return this.nodeIdentifier.setAsyncSerializationMode(!1), [this.domSerializer.serialize(t, {
                    forceChildrenSerialization: !0,
                    withAnonymization: this.useAnonymization
                })]
            }, t.prototype.serializeDocumentAsync = function(t) {
                return X(this, void 0, void 0, (function() {
                    return J(this, (function(e) {
                        switch (e.label) {
                            case 0:
                                this.serializationInProgress = !0, e.label = 1;
                            case 1:
                                return e.trys.push([1, , 3, 4]), [4, this.domSerializer.startSerializeAsync(t, {
                                    withAnonymization: this.useAnonymization
                                })];
                            case 2:
                                return [2, [e.sent()]];
                            case 3:
                                return this.serializationInProgress = !1, [7];
                            case 4:
                                return [2]
                        }
                    }))
                }))
            }, t.prototype.serializeMutationCharacterData = function(t) {
                var e = this;
                return this.nodeIdentifier.ifIdentified(t.target, (function(i) {
                    var r = t.target;
                    if (r.data !== t.oldValue) {
                        var n = t.target.parentElement;
                        if (!y(r) || !(null == n ? void 0 : n.hasAttribute("data-cs-encrypt"))) return [i, e.anonymization.getAnonymizedText(e.useAnonymization, r)];
                        e.encryptionService.registerTextNodeMutationToEncrypt({
                            targetId: i,
                            textNode: r,
                            serializedTextData: ke(r.data),
                            date: t.date
                        })
                    }
                }))
            }, t.prototype.serializeAttachShadowEvent = function(t) {
                var e = t.target,
                    i = t.shadowRoot;
                if (this.nodeIdentifier.hasIdentifier(e) && !this.nodeIdentifier.hasIdentifier(i)) return [this.nodeIdentifier.getId(e), this.domSerializer.serialize(i)]
            }, t.prototype.serializeMutationAttribute = function(t) {
                var e = this,
                    i = t.target,
                    r = t.attributeName,
                    n = t.attributeNamespace;
                return this.nodeIdentifier.ifIdentified(t.target, (function(o) {
                    if (!e.sensitiveContent.isSensitiveAttributeName(i, r)) {
                        var s = t.target.getAttributeNS(n, r);
                        if (s !== t.oldValue) return s && (s = e.anonymization.getAnonymizedAttributeValue(i, e.useAnonymization, r, s)), [o, n, r, s]
                    }
                }))
            }, t.prototype.serializeMutationChildList = function(t) {
                var e = this;
                return this.nodeIdentifier.ifIdentified(t.target, (function(i) {
                    if (!e.sensitiveContent.isSensitiveElementNode(t.target)) return {
                        removedNodes: e.serializeRemovedNodes(t),
                        addedNodes: e.serializeAddedNodes(t, i)
                    }
                }))
            }, t.prototype.serializeRemovedNodes = function(t) {
                for (var e = [], i = 0; i < t.removedNodes.length; i += 1) {
                    var r = this.nodeIdentifier.popId(t.removedNodes[i]);
                    r && csArray.prototype.push.call(e, [r])
                }
                return e
            }, t.prototype.serializeUnidentifiedChildNodes = function(t) {
                for (var e = [], i = csNodechildNodes.apply(t), r = this.nodeIdentifier.getId(t), n = 0; n < i.length; n += 1) {
                    var o = i[n];
                    if (!this.nodeIdentifier.hasIdentifier(o)) {
                        var s = csNodenextSibling.apply(o) ? this.nodeIdentifier.ifIdentified(csNodenextSibling.apply(o), (function(t) {
                                return t
                            })) : null,
                            a = this.domSerializer.serialize(o, {
                                withAnonymization: this.useAnonymization
                            });
                        csArray.prototype.push.call(e, [r, s, a])
                    }
                }
                return e
            }, t.prototype.serializeAddedNodes = function(t, e) {
                for (var i = [], r = t.nextSibling ? this.nodeIdentifier.ifIdentified(t.nextSibling, (function(t) {
                        return t
                    })) : null, n = 0; n < t.addedNodes.length; n += 1) {
                    var o = t.addedNodes[n];
                    if (this.nodeIdentifier.hasIdentifier(o)) {
                        if (csNodechildNodes.apply(o).length > 0 && !this.sensitiveContent.isSensitiveElementNode(o)) return this.serializeUnidentifiedChildNodes(o)
                    } else {
                        var s = this.domSerializer.serialize(o, {
                            withAnonymization: this.useAnonymization
                        });
                        csArray.prototype.push.call(i, [e, r, s])
                    }
                }
                return i
            }, t.prototype.resetAnonymization = function() {
                this.useAnonymization = !this.consentService.isAllowedByConsent(), this.useAnonymization ? this.configuration.replayRecordingUnmaskedUrlRegex && this.configuration.replayRecordingUnmaskedUrlRegex.test(this.urlService.getUrl()) && (this.useAnonymization = !1) : this.configuration.replayRecordingMaskedUrlRegex && this.configuration.replayRecordingMaskedUrlRegex.test(this.urlService.getUrl()) && (this.useAnonymization = !0)
            }, t
        }(),
        Ne = function() {
            function t(t, e, i) {
                var r = this;
                this.monkeyPatcher = t, this.nodeIdentifier = e, this.staticResourceUrlTracker = i, this.canTrackRuleInsertions() && (this.insertRuleInterceptor = this.monkeyPatcher.createSyncFunctionInterceptor({
                    target: window.CSSStyleSheet.prototype,
                    methodName: "insertRule",
                    hook: function(t) {
                        var e = t.context,
                            i = t.args;
                        return r.sendInsertion(e, i)
                    }
                })), this.canTrackRuleDeletions() && (this.deleteRuleInterceptor = this.monkeyPatcher.createSyncFunctionInterceptor({
                    target: window.CSSStyleSheet.prototype,
                    methodName: "deleteRule",
                    hook: function(t) {
                        var e = t.context,
                            i = t.args;
                        return r.sendDeletion(e, i)
                    }
                })), this.canTrackStyleDeclarationChanges() && (this.cssTextInterceptor = this.monkeyPatcher.createDescriptorInterceptor(window.CSSStyleDeclaration.prototype, "cssText", (function(t, e) {
                    return r.setStyleDeclarationCssText(t, e)
                })))
            }
            return t.prototype.onEvent = function(t) {
                this.onEventCallback = t
            }, t.prototype.start = function() {
                this.insertRuleInterceptor && this.insertRuleInterceptor.activate(), this.deleteRuleInterceptor && this.deleteRuleInterceptor.activate(), this.cssTextInterceptor && this.cssTextInterceptor.activate()
            }, t.prototype.stop = function() {
                this.insertRuleInterceptor && this.insertRuleInterceptor.deactivate(), this.deleteRuleInterceptor && this.deleteRuleInterceptor.deactivate(), this.cssTextInterceptor && this.cssTextInterceptor.deactivate()
            }, t.prototype.setStyleDeclarationCssText = function(t, e) {
                var i = this,
                    r = this.getSyleSheet(t);
                r && r.ownerNode && this.nodeIdentifier.ifIdentified(r.ownerNode, (function(n) {
                    var o = i.indexOfRule(r.cssRules, t.parentRule);
                    i.onEventCallback({
                        date: F.now(),
                        type: ie.STYLESHEET_CSS_TEXT_UPDATE,
                        args: [n, o, e]
                    }), i.staticResourceUrlTracker.scanCssString(e)
                }))
            }, t.prototype.getSyleSheet = function(t) {
                var e = t.parentRule;
                return e && e.parentStyleSheet
            }, t.prototype.indexOfRule = function(t, e) {
                return csArray.prototype.indexOf.call(csArray.from(t), e)
            }, t.prototype.canTrackRuleInsertions = function() {
                var t, e;
                return "function" == typeof(null === (e = null === (t = window.CSSStyleSheet) || void 0 === t ? void 0 : t.prototype) || void 0 === e ? void 0 : e.insertRule)
            }, t.prototype.canTrackRuleDeletions = function() {
                var t, e;
                return "function" == typeof(null === (e = null === (t = window.CSSStyleSheet) || void 0 === t ? void 0 : t.prototype) || void 0 === e ? void 0 : e.deleteRule)
            }, t.prototype.canTrackStyleDeclarationChanges = function() {
                return window.CSSStyleDeclaration && window.CSSStyleDeclaration.prototype && Object.getOwnPropertyDescriptor(window.CSSStyleDeclaration.prototype, "cssText")
            }, t.prototype.sendInsertion = function(t, e) {
                var i = this,
                    r = e[0],
                    n = e[1];
                t.ownerNode && this.nodeIdentifier.ifIdentified(t.ownerNode, (function(t) {
                    i.onEventCallback({
                        date: F.now(),
                        type: ie.STYLESHEET_RULE_INSERT,
                        args: kt(n) ? [t, r, n] : [t, r]
                    }), i.staticResourceUrlTracker.scanCssString(r)
                }))
            }, t.prototype.sendDeletion = function(t, e) {
                var i = this,
                    r = e[0];
                t.ownerNode && this.nodeIdentifier.ifIdentified(t.ownerNode, (function(t) {
                    i.onEventCallback({
                        date: F.now(),
                        type: ie.STYLESHEET_RULE_DELETE,
                        args: [t, r]
                    })
                }))
            }, Y([_t("styleSheetRuleTracker.setStyleDeclarationCssText")], t.prototype, "setStyleDeclarationCssText", null), Y([_t("styleSheetRuleTracker.sendInsertion")], t.prototype, "sendInsertion", null), Y([_t("styleSheetRuleTracker.sendDeletion")], t.prototype, "sendDeletion", null), t
        }(),
        Me = function() {
            function t() {}
            return t.prototype.beforeSerialize = function(t, e) {
                return t
            }, t.prototype.beforeSerializeChildren = function(t, e, i) {
                return e
            }, t.prototype.beforeSerializeAttributes = function(t, e, i) {
                return e
            }, t.prototype.serializeNode = function(t, e, i) {
                return e
            }, t.prototype.afterSerialize = function(t, e, i) {
                return e
            }, t.prototype.afterSerializeShadowRoot = function(t, e, i) {
                return e
            }, t.prototype.serializeElementNode = function(t, e, i) {
                return e
            }, t.prototype.serializeAttribute = function(t, e, i, r) {
                return i
            }, t.prototype.serializeTextNode = function(t, e, i) {
                return e
            }, t.prototype.serializeCDATASectionNode = function(t, e, i) {
                return e
            }, t.prototype.serializeCommentNode = function(t, e, i) {
                return e
            }, t.prototype.serializeDoctypeNode = function(t, e, i) {
                return e
            }, t.prototype.serializeDocumentNode = function(t, e, i) {
                return e
            }, t.prototype.serializeShadowRootNode = function(t, e, i) {
                return e
            }, t
        }();
    (Ie = Ae || (Ae = {})).getShadowRoot = function(t) {
        return Pt(t) ? csElementshadowRoot.apply(t) : null
    }, Ie.getAllShadowHosts = function t(e) {
        for (var i, r, n = document.createNodeIterator(e, NodeFilter.SHOW_ELEMENT, null, !1), o = []; r = n.nextNode();) csElementshadowRoot.apply(r) && (i = csArray.prototype.push).call.apply(i, Q([o, r], t(r.shadowRoot)));
        return o
    };
    var Oe, Le = function() {
            function t() {
                this.internalMap = {}
            }
            return t.prototype.set = function(t, e) {
                this.internalMap[t] = e
            }, t.prototype.get = function(t) {
                return this.internalMap[t]
            }, t.prototype.delete = function(t) {
                delete this.internalMap[t]
            }, t.prototype.clear = function() {
                this.internalMap = {}
            }, t
        }(),
        xe = function(t) {
            function e() {
                var e = t.call(this) || this;
                return e.identifierAddedHandlers = [], e.identifierRemovedHandlers = [], e.currentCsId = 1, e.serializationMap = "Map" in window ? new Map : new Le, e.defaultOptions = {}, e.asyncSerialization = !0, e
            }
            return W(e, t), e.prototype.setAsyncSerializationMode = function(t) {
                this.asyncSerialization = t
            }, e.prototype.registerNodeInMap = function(t, e) {
                var i = t.csId;
                this.serializationMap.set(i, {
                    serializedNode: t,
                    options: e
                })
            }, e.prototype.clearMap = function() {
                this.serializationMap.clear()
            }, e.prototype.deleteNode = function(t) {
                this.serializationMap.delete(t)
            }, e.prototype.setDefaultSerializationOptions = function(t) {
                this.defaultOptions = t
            }, e.prototype.getNodeFromMap = function(t) {
                var e;
                return null === (e = this.serializationMap.get(t)) || void 0 === e ? void 0 : e.serializedNode
            }, e.prototype.getOptionsFromMap = function(t) {
                var e, i = this.getId(t);
                return i && (null === (e = this.serializationMap.get(i)) || void 0 === e ? void 0 : e.options) || this.defaultOptions
            }, e.prototype.getNodeFromMapByNode = function(t) {
                var e = this.getId(t);
                if (e) return this.getNodeFromMap(e)
            }, e.prototype.beforeSerialize = function(t, e) {
                return e.forceChildrenSerialization && this.popId(t), t
            }, e.prototype.beforeSerializeChildren = function(t, e) {
                var i = this;
                return csArray.prototype.filter.call(e, (function(t) {
                    return !i.hasIdentifier(t)
                }))
            }, e.prototype.serializeNode = function(t, e) {
                var i = this.currentCsId;
                return this.currentCsId += 1, t.__contentsquare_identifier = i, e.csId = i, this.notifySubscribers(this.identifierAddedHandlers, t), e
            }, e.prototype.afterSerialize = function(t, e, i) {
                return this.asyncSerialization && this.registerNodeInMap(e, i), e
            }, e.prototype.afterSerializeShadowRoot = function(t, e, i) {
                return this.asyncSerialization && this.registerNodeInMap(e, i), e
            }, e.prototype.ifIdentified = function(t, e) {
                if (this.hasIdentifier(t)) return e(this.getId(t))
            }, e.prototype.getId = function(t) {
                return t.__contentsquare_identifier
            }, e.prototype.onIdentifierAdded = function(t) {
                csArray.prototype.push.call(this.identifierAddedHandlers, t)
            }, e.prototype.onIdentifierRemoved = function(t) {
                csArray.prototype.push.call(this.identifierRemovedHandlers, t)
            }, e.prototype.popId = function(t) {
                var e = this.getId(t);
                delete t.__contentsquare_identifier, this.notifySubscribers(this.identifierRemovedHandlers, t);
                for (var i = csNodefirstChild.apply(t); null !== i; i = csNodenextSibling.apply(i)) this.popId(i);
                var r = Ae.getShadowRoot(t);
                return r && this.popId(r), e
            }, e.prototype.hasIdentifier = function(t) {
                return "__contentsquare_identifier" in t
            }, e.prototype.notifySubscribers = function(t, e) {
                for (var i = 0, r = t; i < r.length; i++) {
                    (0, r[i])(e)
                }
            }, e
        }(Me),
        _e = ["value", "checked", "src", "data", "alt"],
        De = function(t) {
            function e(e) {
                var i = t.call(this) || this;
                return i.piiMaskingService = e, i
            }
            return W(e, t), e.prototype.beforeSerializeChildren = function(t, e) {
                return this.isSensitiveElementNode(t) || this.hasSensitiveShadowHost(t) ? [] : e
            }, e.prototype.beforeSerializeAttributes = function(t, e) {
                var i = this;
                return this.isSensitiveElementNode(t) && (csArray.prototype.push.call(e, this.createSensitiveElementDimensionsAttribute(t)), this.isDataCSMaskNeeded(t) && csArray.prototype.push.call(e, document.createAttribute("data-cs-mask"))), csArray.prototype.filter.call(e, (function(e) {
                    return !i.isSensitiveAttributeName(t, e.name)
                }))
            }, e.prototype.isSensitiveElementNode = function(t) {
                return f(t) && (this.piiMaskingService.checkNodeMatch(t) || E(t) || this.isSensitiveImageElement(t))
            }, e.prototype.isSensitiveAttributeName = function(t, e) {
                return this.piiMaskingService.checkAttributeMatch(t, e) || this.isSensitiveElementNode(t) && -1 !== csArray.prototype.indexOf.call(_e, e) || this.isSensitiveInputValue(t, e)
            }, e.prototype.hasSensitiveShadowHost = function(t) {
                return function(t) {
                    return C(t) && "host" in t && "mode" in t
                }(t) && this.isSensitiveElementNode(t.host)
            }, e.prototype.isSensitiveImageElement = function(t) {
                return !!m(t) && (U(t.src, "data:") && !this.isAllowedBase64SVGsrc(t.src))
            }, e.prototype.isAllowedBase64SVGsrc = function(t) {
                return U(t, "data:image/svg+xml") && t.length <= 1024
            }, e.prototype.isSensitiveInputValue = function(t, e) {
                return S(t) && "value" === e && "button" !== t.getAttribute("type")
            }, e.prototype.isDataCSMaskNeeded = function(t) {
                return !E(t) && !t.hasAttribute("data-cs-mask")
            }, e.prototype.createSensitiveElementDimensionsAttribute = function(t) {
                var e = t.getBoundingClientRect(),
                    i = document.createAttribute("style");
                return i.value = "width: " + e.width + "px !important; height: " + e.height + "px !important;", i
            }, e
        }(Me),
        Ve = ["id", "class", "style", "src", "srcset", "sizes", "href", "rel", "type", "width", "height", "media", "align", "dir", "bgcolor", "color", "border", "colspan", "rowspan", "cols", "rows", "size", "start", "data-cs-override-id"],
        Ue = function(t) {
            function e(e, i) {
                var r = t.call(this) || this;
                return r.pii = e, r.configuration = i, r.allWhitelistedAttributes = [], r
            }
            return W(e, t), e.prototype.init = function() {
                this.allWhitelistedAttributes = Q(Ve, this.configuration.whitelistedAttributes)
            }, e.prototype.beforeSerializeChildren = function(t, e, i) {
                return (g(t) || this.isWhitelistedElement(t)) && (i.withAnonymization = !1), e
            }, e.prototype.serializeNode = function(t, e, i) {
                return e.anonymized = i.withAnonymization, e
            }, e.prototype.serializeAttribute = function(t, e, i, r) {
                i.anonymized = r.withAnonymization;
                var n = this.getAnonymizedAttributeValue(t, r.withAnonymization, e.name, e.value);
                return i.value = n, i
            }, e.prototype.serializeTextNode = function(t, e, i) {
                return e.data = this.getAnonymizedText(i.withAnonymization, t), e
            }, e.prototype.serializeCDATASectionNode = function(t, e, i) {
                var r = t.data;
                return e.data = i.withAnonymization ? ke(r) : this.pii.anonymize(r), e
            }, e.prototype.getAnonymizedText = function(t, e) {
                if (csNodeparentNode.apply(e)) {
                    if (g(csNodeparentNode.apply(e))) return e.data;
                    if (this.isWhitelistedElement(csNodeparentNode.apply(e))) return this.pii.anonymize(e.data)
                }
                return t ? ke(e.data) : this.pii.anonymize(e.data)
            }, e.prototype.getAnonymizedAttributeValue = function(t, e, i, r) {
                return this.isWhitelistedAttribute(i) || f(n = t) && "ownerSVGElement" in n ? r : e ? "" : this.pii.anonymize(r);
                var n
            }, e.prototype.setWhitelistedElementsSelector = function(t) {
                this.whitelistedElementsSelector = t
            }, e.prototype.isWhitelistedAttribute = function(t) {
                return -1 !== csArray.prototype.indexOf.call(this.allWhitelistedAttributes, t)
            }, e.prototype.isWhitelistedElement = function(t) {
                return f(t) && (t.hasAttribute("data-cs-capture") || this.elementMatchesWhitelistedSelectors(t))
            }, e.prototype.elementMatchesWhitelistedSelectors = function(t) {
                return !!this.whitelistedElementsSelector && R.call(t, this.whitelistedElementsSelector)
            }, e
        }(Me),
        qe = function() {
            function t(t) {
                this.prefixStorageName = t;
                var e = csString.prototype.slice.call("" + Math.random(), 2, 8);
                this.storageName = "" + this.prefixStorageName + e
            }
            return t.prototype.save = function(t, e) {
                localStorage.setItem(this.storageName + "." + t, csJSON.stringify(e))
            }, t.prototype.recover = function() {
                var t = this,
                    e = 0,
                    i = [];
                return csArray.prototype.forEach.call(this.getStorageKeys(), (function(r) {
                    var n = localStorage.getItem(r);
                    if (null !== n) {
                        e += n.length;
                        var o = t.parseStoredItem(n, r);
                        o && csArray.prototype.push.call(i, o), t.removeItem(r)
                    }
                })), {
                    rawBatches: i,
                    recoveredSize: e
                }
            }, t.prototype.getStorageKeys = function() {
                for (var t = [], e = 0; e < localStorage.length; e += 1) {
                    var i = localStorage.key(e);
                    i && U(i, this.prefixStorageName) && csArray.prototype.push.call(t, i)
                }
                return t
            }, t.prototype.removeItem = function(t) {
                localStorage.removeItem(t)
            }, t.prototype.parseStoredItem = function(t, e) {
                try {
                    return csJSON.parse(t)
                } catch (i) {
                    return xt.error("Invalid item in localStorage.(key:" + e + "; value:" + t + ")"), null
                }
            }, t
        }(),
        ze = function() {
            function t() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                this.requestParametersProviders = t
            }
            return t.prototype.addProvider = function(t) {
                csArray.prototype.push.call(this.requestParametersProviders, t)
            }, t.prototype.getRequestParameters = function() {
                return csArray.prototype.reduce.call(this.requestParametersProviders, (function(t, e) {
                    return K(K({}, e.getRequestParameters()), t)
                }), {})
            }, t
        }(),
        Be = function() {
            function t(t) {
                this.asyncTaskFactory = t, this.userActive = !1, this.pendingInactivity = null
            }
            return t.prototype.start = function() {
                this.userActive = !0, this.createPendingInactivity()
            }, t.prototype.stop = function() {
                this.userActive = !1, this.clearPendingInactivity()
            }, t.prototype.trackActivity = function() {
                this.userActive || (this.userActive = !0, this.onActivityResumedCallback()), this.clearPendingInactivity(), this.createPendingInactivity()
            }, t.prototype.createPendingInactivity = function() {
                var t = this;
                this.pendingInactivity = this.asyncTaskFactory.create("recorded user inactive", (function() {
                    t.userActive = !1, t.clearPendingInactivity(), t.onActivityStoppedCallback()
                }), 5e3)
            }, t.prototype.clearPendingInactivity = function() {
                null !== this.pendingInactivity && (this.pendingInactivity.cancel(), this.pendingInactivity = null)
            }, t.prototype.isUserActive = function() {
                return this.userActive
            }, t.prototype.onActivityStopped = function(t) {
                this.onActivityStoppedCallback = t
            }, t.prototype.onActivityResumed = function(t) {
                this.onActivityResumedCallback = t
            }, t
        }(),
        Fe = function() {
            function t(t, e, i) {
                var r = this;
                this.taskName = t, this.task = e, this.timeout = i, this.timeoutId = setTimeout((function() {
                    r.execute()
                }), this.timeout)
            }
            return t.prototype.execute = function() {
                var t = this;
                xt.tryToExecute(this.taskName, (function() {
                    t.task()
                }))()
            }, t.prototype.cancel = function() {
                clearTimeout(this.timeoutId)
            }, t
        }(),
        He = function() {
            function t() {}
            return t.prototype.create = function(t, e, i) {
                return new Fe(t, e, i)
            }, t
        }();
    ! function(t) {
        function e() {
            var t = [r()];
            return document.documentElement && csArray.prototype.push.call(t, document.documentElement.scrollHeight, document.documentElement.offsetHeight, document.documentElement.clientHeight), document.body && csArray.prototype.push.call(t, document.body.scrollHeight, document.body.offsetHeight), Math.max.apply(Math, t)
        }

        function i() {
            return document.documentElement.scrollWidth
        }

        function r() {
            return window.innerHeight
        }

        function n() {
            return window.innerWidth
        }

        function o() {
            var t = window.csScreen.width;
            return wt(t) && t > 0 ? t : window.screen.width
        }

        function s() {
            var t = window.csScreen.height;
            return wt(t) && t > 0 ? t : window.screen.height
        }
        t.documentHeight = e, t.documentWidth = i, t.windowHeight = r, t.windowWidth = n, t.screenWidth = o, t.screenHeight = s, t.windowOffsetX = function() {
            return window.pageXOffset
        }, t.windowOffsetY = function() {
            return window.pageYOffset
        }, t.getRequestParameters = function() {
            return {
                dw: "" + i(),
                dh: "" + e(),
                ww: "" + n(),
                wh: "" + r(),
                sw: "" + o(),
                sh: "" + s()
            }
        }
    }(Oe || (Oe = {}));
    var je = function() {
            function t(t, e) {
                var i = this;
                this.location = t, this.pii = e, this.eventHandlers = [{
                    boundElement: window,
                    type: "resize",
                    listener: function() {
                        return i.resizeListener()
                    }
                }, {
                    boundElement: window,
                    type: "hashchange",
                    listener: function() {
                        return i.hashChangeListener()
                    }
                }, {
                    boundElement: window,
                    type: "mousemove",
                    listener: function(t) {
                        return i.mouseMoveListener(t)
                    }
                }, {
                    boundElement: document,
                    type: "visibilitychange",
                    listener: function() {
                        return i.visibilityChangeListener()
                    }
                }]
            }
            return t.prototype.onEvent = function(t) {
                this.onEventCallback = function(e) {
                    e.date = F.now(), t(e)
                }
            }, t.prototype.start = function() {
                this.bindHandlers(), this.triggerInitialEvents()
            }, t.prototype.stop = function() {
                this.unbindHandlers()
            }, t.prototype.bindHandlers = function() {
                csArray.prototype.forEach.call(this.eventHandlers, (function(t) {
                    return ue(t)
                }))
            }, t.prototype.unbindHandlers = function() {
                csArray.prototype.forEach.call(this.eventHandlers, (function(t) {
                    return pe(t)
                }))
            }, t.prototype.triggerInitialEvents = function() {
                this.resizeListener(), this.hashChangeListener()
            }, t.prototype.resizeListener = function() {
                this.onEventCallback({
                    type: ie.RESIZE,
                    args: [Oe.windowWidth(), Oe.windowHeight()]
                })
            }, t.prototype.hashChangeListener = function() {
                this.onEventCallback({
                    type: ie.HASH_CHANGE,
                    args: [this.pii.anonymize(this.location.href)]
                })
            }, t.prototype.visibilityChangeListener = function() {
                this.onEventCallback({
                    type: ie.VISIBILITY_CHANGE,
                    args: [document.visibilityState]
                })
            }, t.prototype.mouseMoveListener = function(t) {
                this.onEventCallback({
                    type: ie.MOUSE_MOVE,
                    args: [t.clientX, t.clientY]
                })
            }, Y([_t("resize")], t.prototype, "resizeListener", null), Y([_t("hashChange")], t.prototype, "hashChangeListener", null), Y([_t("visibilityChange")], t.prototype, "visibilityChangeListener", null), Y([_t("mouseMove")], t.prototype, "mouseMoveListener", null), t
        }(),
        Ge = function(t) {
            function e(e, i, r, n, o) {
                var s = t.call(this) || this;
                return s.recordingPageEventsTracker = e, s.recordingMutationsTracker = i, s.recordingActivityTracker = r, s.recordingRequest = n, s.mutationSerializer = o, s.recordingRequestDuringInactivityCount = 0, s.isMutationTrackerStopped = !1, s
            }
            return W(e, t), e.prototype.init = function() {
                var t = this;
                this.recordingPageEventsTracker.onEvent((function() {
                    t.recordingActivityTracker.trackActivity(), t.recordingRequestDuringInactivityCount = 0
                })), this.recordingRequest.after((function() {
                    t.recordingRequestDuringInactivityCount += 1, t.stopMutationTrackerIfNeeded()
                })), this.recordingActivityTracker.onActivityStopped((function() {
                    t.stopMutationTrackerIfNeeded()
                })), this.recordingActivityTracker.onActivityResumed((function() {
                    t.isMutationTrackerStopped && (t.recordingMutationsTracker.start(), t.isMutationTrackerStopped = !1)
                }))
            }, e.prototype.onStart = function() {
                this.recordingActivityTracker.start()
            }, e.prototype.onStop = function() {
                this.recordingActivityTracker.stop()
            }, e.prototype.stopMutationTrackerIfNeeded = function() {
                !this.isMutationTrackerStopped && !this.mutationSerializer.isSerializationInProgress() && !this.recordingActivityTracker.isUserActive() && this.recordingRequestDuringInactivityCount >= 2 && (this.recordingMutationsTracker.stop(), this.isMutationTrackerStopped = !0)
            }, e
        }(Te),
        We = i(1);

    function Ke(t) {
        var e = csString.prototype.trim.call(t);
        if ("" === t) return [];
        var i, r = (i = e, csString.prototype.split.call(i, /\s(.+)/)),
            n = r[0],
            o = r[1];
        return o ? (q(n, ",") || (o = function(t) {
            return csString.prototype.split.call(t, /,(.+)/)[1] || ""
        }(o)), Q([Ye(n)], Ke(o))) : [Ye(n)]
    }

    function Ye(t) {
        return csString.prototype.split.call(t, /,$/)[0]
    }
    var Xe, Je = function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return W(e, t), e.prototype.onEvent = function(t) {
            this.onEventCallback = t
        }, e.prototype.serializeElementNode = function(t, e, i) {
            return this.scanElement(t), e
        }, e.prototype.beforeSerializeChildren = function(t, e, i) {
            return this.scanStyleElement(t, e), e
        }, e.prototype.scanElement = function(t) {
            this.scanElementAttributes(t)
        }, e.prototype.scanAttribute = function(t, e) {
            this.scanElementAttributes(t, e)
        }, e.prototype.scanText = function(t) {
            y(t) && csNodeparentNode.apply(t) && g(csNodeparentNode.apply(t)) && this.scanCssString(t.data)
        }, e.prototype.scanStyleElement = function(t, e) {
            if (g(t))
                for (var i = 0, r = e; i < r.length; i++) {
                    var n = r[i];
                    y(n) && this.scanCssString(n.data)
                }
        }, e.prototype.scanElementAttributes = function(t, e) {
            this.scanCssLink(t, e), this.scanImage(t, e), this.scanStyleAttribute(t, e)
        }, e.prototype.scanCssLink = function(t, e) {
            !v(t) || e && "href" !== e || !t.href || this.onStaticResourceUrl(t.href)
        }, e.prototype.scanImage = function(t, e) {
            m(t) && (e && "src" !== e || !t.src || this.isDataUrl(t.src) || null === t.getAttribute("src") || this.isHashStartUrl(t.getAttribute("src")) || this.onStaticResourceUrl(t.src), e && "srcset" !== e || !t.srcset || this.scanSrcset(t.srcset))
        }, e.prototype.scanStyleAttribute = function(t, e) {
            if ((!e || "style" === e) && t.hasAttribute("style")) {
                var i = t.getAttribute("style");
                if ("string" != typeof i) throw new Error("Unexpected style: " + t.outerHTML);
                this.scanCssString(i)
            }
        }, e.prototype.isHashStartUrl = function(t) {
            return U(t, "#")
        }, e.prototype.isDataUrl = function(t) {
            return U(t, "data:")
        }, e.prototype.scanCssString = function(t) {
            this.processRawUrls(Object(We.extractFrom)(t))
        }, e.prototype.scanSrcset = function(t) {
            this.processRawUrls(Ke(t))
        }, e.prototype.processRawUrls = function(t) {
            var e = this;
            return csArray.prototype.forEach.call(csArray.prototype.map.call(csArray.prototype.filter.call(csArray.prototype.filter.call(t, (function(t) {
                return !e.isDataUrl(t)
            })), (function(t) {
                return !e.isHashStartUrl(t)
            })), (function(t) {
                return ht(t)
            })), (function(t) {
                return e.onStaticResourceUrl(t)
            }))
        }, e.prototype.onStaticResourceUrl = function(t) {
            this.onEventCallback({
                date: F.now(),
                type: ie.STATIC_RESOURCE_URL,
                args: [t]
            })
        }, e
    }(Me);
    ! function(t) {
        t.REQUEST_START = "requestStart", t.DOM_INTERACTIVE = "domInteractive"
    }(Xe || (Xe = {}));
    var Qe, Ze = function() {
            function t(t) {
                this.windowPerformance = t.performance
            }
            return t.prototype.onEvent = function(t) {
                this.onEventCallback = t
            }, t.prototype.start = function() {
                this.areTimingsAvailable() && this.recordPerformanceTimings()
            }, t.prototype.recordPerformanceTimings = function() {
                var t = this.getPerformanceTimings();
                this.onEventCallback({
                    args: t,
                    date: F.now(),
                    type: ie.PERFORMANCE_TIMINGS
                })
            }, t.prototype.areTimingsAvailable = function() {
                return !(!this.windowPerformance || !this.windowPerformance.timing)
            }, t.prototype.getPerformanceTimings = function() {
                return [{
                    performanceTiming: Xe.REQUEST_START,
                    timestamp: this.windowPerformance.timing.requestStart
                }, {
                    performanceTiming: Xe.DOM_INTERACTIVE,
                    timestamp: this.windowPerformance.timing.domInteractive
                }]
            }, t
        }(),
        $e = function(t) {
            function e(e, i) {
                var r = t.call(this) || this;
                return r.monkeyPatcher = e, r.nodeIdentifier = i, r
            }
            return W(e, t), e.prototype.init = function() {
                this.initInterceptors(), this.initSubscribers(), this.initMutationObserver()
            }, e.prototype.initMutationObserver = function() {
                var t = this;
                this.observer = new csMutationObserver((function(e) {
                    t.handleMutations(e)
                }))
            }, e.prototype.initInterceptors = function() {
                var t = this;
                this.supportAttachShadow() && (this.attachShadowInterceptor = this.monkeyPatcher.createSyncFunctionInterceptor({
                    target: Element.prototype,
                    methodName: "attachShadow",
                    hook: function(e) {
                        var i = e.context,
                            r = e.result;
                        return t.handleAttachShadow(i, r)
                    }
                })), this.supportCreateShadowRoot() && (this.createShadowRootInterceptor = this.monkeyPatcher.createSyncFunctionInterceptor({
                    target: Element.prototype,
                    methodName: "createShadowRoot",
                    hook: function(e) {
                        var i = e.context,
                            r = e.result;
                        return t.handleAttachShadow(i, r)
                    }
                }))
            }, e.prototype.initSubscribers = function() {
                var t = this;
                this.nodeIdentifier.onIdentifierAdded((function(e) {
                    C(e) && t.observe(e)
                }))
            }, e.prototype.onChildListMutation = function(t) {
                this.childListMutationCallback = t
            }, e.prototype.onCharacterDataMutation = function(t) {
                this.characterDataMutationCallback = t
            }, e.prototype.onAttributesMutation = function(t) {
                this.attributesMutationCallback = t
            }, e.prototype.onAttachShadowMutation = function(t) {
                this.attachShadowMutationCallback = t
            }, e.prototype.observe = function(t) {
                this.isStarted && this.observer.observe(t, {
                    subtree: !0,
                    attributes: !0,
                    childList: !0,
                    characterData: !0,
                    attributeOldValue: !0,
                    characterDataOldValue: !0
                })
            }, e.prototype.onStart = function() {
                this.attachShadowInterceptor && this.attachShadowInterceptor.activate(), this.createShadowRootInterceptor && this.createShadowRootInterceptor.activate()
            }, e.prototype.onStop = function() {
                this.attachShadowInterceptor && this.attachShadowInterceptor.deactivate(), this.createShadowRootInterceptor && this.createShadowRootInterceptor.deactivate(), this.observer.disconnect()
            }, e.prototype.supportAttachShadow = function() {
                return window.Element && window.Element.prototype && "function" == typeof window.Element.prototype.attachShadow
            }, e.prototype.supportCreateShadowRoot = function() {
                return window.Element && window.Element.prototype && "function" == typeof window.Element.prototype.createShadowRoot
            }, e.prototype.handleMutations = function(t) {
                for (var e = F.now(), i = 0; i < t.length; i += 1) {
                    var r = t[i];
                    switch (r.date = e, r.type) {
                        case "attributes":
                            this.attributesMutationCallback(r);
                            break;
                        case "characterData":
                            this.characterDataMutationCallback(r);
                            break;
                        case "childList":
                            this.childListMutationCallback(r);
                            break;
                        default:
                            throw new Error("mutation type is not supported")
                    }
                }
            }, e.prototype.handleAttachShadow = function(t, e) {
                this.attachShadowMutationCallback({
                    shadowRoot: e,
                    date: F.now(),
                    target: t
                })
            }, Y([_t("mutations")], e.prototype, "handleMutations", null), e
        }(Te);
    ! function(t) {
        t[t.WebElement = 0] = "WebElement", t[t.MobileView = 1] = "MobileView", t[t.WebViewContainer = 2] = "WebViewContainer"
    }(Qe || (Qe = {}));
    var ti = function() {
            function t(t) {
                this.processors = t
            }
            return t.prototype.serialize = function(t, e) {
                void 0 === e && (e = {});
                var i, r = K({}, e),
                    n = t.nodeType,
                    o = csArray.prototype.reduce.call(this.processors, (function(t, e) {
                        return e.beforeSerialize(t, r)
                    }), t);
                switch (n) {
                    case Node.ELEMENT_NODE:
                        i = this.serializeElementNode(o, r);
                        break;
                    case Node.TEXT_NODE:
                        i = this.serializeTextNode(o, r);
                        break;
                    case Node.CDATA_SECTION_NODE:
                        i = this.serializeCDATASectionNode(o, r);
                        break;
                    case Node.COMMENT_NODE:
                        i = this.serializeCommentNode(o, r);
                        break;
                    case Node.DOCUMENT_TYPE_NODE:
                        i = this.serializeDoctypeNode(o, r);
                        break;
                    case Node.DOCUMENT_NODE:
                        i = this.serializeDocumentNode(o, r);
                        break;
                    case Node.DOCUMENT_FRAGMENT_NODE:
                        i = this.serializeDocumentFragmentNode(o, r);
                        break;
                    default:
                        throw new Error("serialization is not supported (nodeType: " + n + ")")
                }
                return i = csArray.prototype.reduce.call(this.processors, (function(t, e) {
                    return e.afterSerialize(o, t, r)
                }), i)
            }, t.prototype.serializeElementNode = function(t, e) {
                var i, r = csArray.prototype.reduce.call(this.processors, (function(i, r) {
                    var n = r.serializeNode(t, i, e);
                    return r.serializeElementNode(t, n, e)
                }), {
                    attributes: []
                });
                (i = csArray.prototype.push).call.apply(i, Q([r.attributes], this.serializeAttributes(t, e)));
                var n = csElementshadowRoot.apply(t);
                return n && (r.shadowRoot = this.serializeShadowRootNode(n, e)), r.children = this.serializeChildren(t, e), r
            }, t.prototype.serializeAttributes = function(t, e) {
                var i = this,
                    r = b(t.attributes);
                return csArray.prototype.map.call(csArray.prototype.reduce.call(this.processors, (function(i, r) {
                    return r.beforeSerializeAttributes(t, i, e)
                }), r), (function(r) {
                    return i.serializeAttribute(t, r, e)
                }))
            }, t.prototype.serializeAttribute = function(t, e, i) {
                return csArray.prototype.reduce.call(this.processors, (function(r, n) {
                    return n.serializeAttribute(t, e, r, i)
                }), {})
            }, t.prototype.runBeforeSerializeChildrenHook = function(t, e) {
                var i = b(csNodechildNodes.apply(t));
                return csArray.prototype.reduce.call(this.processors, (function(i, r) {
                    return r.beforeSerializeChildren(t, i, e)
                }), i)
            }, t.prototype.serializeChildren = function(t, e) {
                var i = this;
                if (e.skipChildrenSerialization) return [];
                var r = this.runBeforeSerializeChildrenHook(t, e);
                return csArray.prototype.map.call(r, (function(t) {
                    return i.serialize(t, e)
                }))
            }, t.prototype.serializeTextNode = function(t, e) {
                return csArray.prototype.reduce.call(this.processors, (function(i, r) {
                    var n = r.serializeNode(t, i, e);
                    return r.serializeTextNode(t, n, e)
                }), {})
            }, t.prototype.serializeCDATASectionNode = function(t, e) {
                return csArray.prototype.reduce.call(this.processors, (function(i, r) {
                    var n = r.serializeNode(t, i, e);
                    return r.serializeCDATASectionNode(t, n, e)
                }), {})
            }, t.prototype.serializeCommentNode = function(t, e) {
                return csArray.prototype.reduce.call(this.processors, (function(i, r) {
                    var n = r.serializeNode(t, i, e);
                    return r.serializeCommentNode(t, n, e)
                }), {})
            }, t.prototype.serializeDoctypeNode = function(t, e) {
                return csArray.prototype.reduce.call(this.processors, (function(i, r) {
                    var n = r.serializeNode(t, i, e);
                    return r.serializeDoctypeNode(t, n, e)
                }), {})
            }, t.prototype.serializeDocumentNode = function(t, e) {
                var i = csArray.prototype.reduce.call(this.processors, (function(i, r) {
                    var n = r.serializeNode(t, i, e);
                    return r.serializeDocumentNode(t, n, e)
                }), {});
                return i.children = this.serializeChildren(t, e), i
            }, t.prototype.serializeShadowRootNode = function(t, e) {
                var i = csArray.prototype.reduce.call(this.processors, (function(i, r) {
                    var n = r.serializeNode(t, i, e);
                    return r.serializeShadowRootNode(t, n, e)
                }), {});
                return i.children = this.serializeChildren(t, e), i = csArray.prototype.reduce.call(this.processors, (function(i, r) {
                    return r.afterSerializeShadowRoot(t, i, e)
                }), i)
            }, t.prototype.serializeDocumentFragmentNode = function(t, e) {
                if (t.mode) return this.serializeShadowRootNode(t, e);
                throw new Error("Not implemented yet.")
            }, t
        }(),
        ei = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return W(e, t), e.prototype.beforeSerializeChildren = function(t, e) {
                if (g(t)) {
                    var i = this.getAllCssRules(t);
                    if (null === i || 0 === i.length) return e;
                    if (this.isEmptyStyleElement(t)) csArray.prototype.push.call(e, this.createTextNodeFromRules(i));
                    else {
                        var r = this.getInlineCssRules(t);
                        if (r.length === i.length) return e;
                        for (var n = [], o = r.length; o < i.length; o += 1) csArray.prototype.push.call(n, i[o]);
                        csArray.prototype.push.call(e, this.createTextNodeFromRules(n))
                    }
                }
                return e
            }, e.prototype.getAllCssRules = function(t) {
                try {
                    var e = t.sheet;
                    return e ? e.cssRules || e.rules : null
                } catch (t) {
                    if ("SecurityError" !== t.name && "InvalidAccessError" !== t.name) throw t;
                    return null
                }
            }, e.prototype.getInlineCssRules = function(t) {
                var e = document.implementation.createHTMLDocument(""),
                    i = document.createElement("style");
                return i.textContent = t.textContent, e.head.appendChild(i), this.getAllCssRules(i)
            }, e.prototype.isEmptyStyleElement = function(t) {
                var e = t.textContent || "";
                return /^\s*$/.test(e)
            }, e.prototype.createTextNodeFromRules = function(t) {
                var e = csArray.prototype.join.call(csArray.prototype.map.call(t, (function(t) {
                    return t.cssText
                })), "");
                return document.createTextNode(e)
            }, e.prototype.serializeNode = function(t, e) {
                return e.nodeType = t.nodeType, e.format = Qe.WebElement, e
            }, e.prototype.serializeElementNode = function(t, e) {
                return e.localName = t.localName, e.namespaceURI = t.namespaceURI, e
            }, e.prototype.serializeAttribute = function(t, e, i) {
                return i.name = e.name, i.value = e.value, i.namespaceURI = null !== e.namespaceURI ? e.namespaceURI : "", i
            }, e.prototype.serializeTextNode = function(t, e) {
                return e.data = t.data, e
            }, e.prototype.serializeCDATASectionNode = function(t, e) {
                return e.data = t.data, e
            }, e.prototype.serializeCommentNode = function(t, e) {
                return e.data = t.data, e
            }, e.prototype.serializeDoctypeNode = function(t, e) {
                return e.name = t.name, e.publicId = t.publicId, e.systemId = t.systemId, e
            }, e.prototype.serializeDocumentNode = function(t, i) {
                return i.baseURI = e.getBaseURI(t), i
            }, e.prototype.serializeShadowRootNode = function(t, e) {
                return e.mode = t.mode, t.adoptedStyleSheets && t.adoptedStyleSheets.length > 0 && (e.adoptedStyleSheets = this.serializeStyleSheets(t.adoptedStyleSheets)), e
            }, e.prototype.serializeStyleSheets = function(t) {
                var e = this;
                return csArray.prototype.map.call(t, (function(t) {
                    return e.serializeStyleSheet(t)
                }))
            }, e.prototype.serializeStyleSheet = function(t) {
                return {
                    cssRules: csArray.prototype.map.call(t.cssRules, (function(t) {
                        return t.cssText
                    }))
                }
            }, e.getBaseURI = function(t) {
                var e = t.baseURI;
                if (null == e) {
                    var i = t.getElementsByTagName("base");
                    e = 0 !== i.length ? i[0].href : t.URL
                }
                return e
            }, e
        }(Me);

    function ii(t) {
        return "csId" in t
    }

    function ri(t) {
        return ii(t) && "children" in t
    }

    function ni(t) {
        return ri(t) && "attributes" in t && "localName" in t && "namespaceURI" in t
    }

    function oi() {
        return X(this, void 0, void 0, (function() {
            return J(this, (function(t) {
                switch (t.label) {
                    case 0:
                        return [4, new Promise((function(t) {
                            setTimeout((function() {
                                t()
                            }), 0)
                        }))];
                    case 1:
                        return t.sent(), [2]
                }
            }))
        }))
    }
    var si = function(t) {
        function e(e, i) {
            return t.call(this, e, Q([new ei, e], i), {
                taskTime: 25
            }) || this
        }
        return W(e, t), e
    }(function(t) {
        function e(e, i, r) {
            var n = t.call(this, i) || this;
            return n.nodeIdentifierService = e, n.asyncSerializerOptions = r, n.init(), n
        }
        return W(e, t), e.prototype.init = function() {
            this.taskTime = this.asyncSerializerOptions.taskTime
        }, e.prototype.getTaskTime = function() {
            return this.taskTime
        }, e.prototype.updateAttribute = function(t, e) {
            if (t) {
                var i = t[0],
                    r = t[1],
                    n = t[2],
                    o = t[3],
                    s = this.nodeIdentifierService.getNodeFromMap(i);
                if (s && ni(s)) {
                    s.attributes || (s.attributes = []);
                    var a = csArray.prototype.findIndex.call(s.attributes, (function(t) {
                        return t.name === n
                    }));
                    a > -1 ? s.attributes[a].value = o : csArray.prototype.push.call(s.attributes, {
                        anonymized: e,
                        namespaceURI: r,
                        name: n,
                        value: o
                    })
                }
            }
        }, e.prototype.updateTextNode = function(t) {
            if (t) {
                var e, i = t[0],
                    r = t[1],
                    n = this.nodeIdentifierService.getNodeFromMap(i);
                n && (ii(e = n) && "data" in e) && (n.data = r)
            }
        }, e.prototype.updateChildren = function(t, e) {
            var i = this,
                r = e.addedNodes,
                n = e.removedNodes,
                o = this.nodeIdentifierService.getNodeFromMap(t);
            o && ni(o) && (o.children || (o.children = []), csArray.prototype.forEach.call(r, (function(t) {
                var e = t[1],
                    i = t[2],
                    r = csArray.prototype.findIndex.call(o.children, (function(t) {
                        return t.csId === e
                    }));
                r > -1 ? csArray.prototype.splice.call(o.children, r, 0, i) : csArray.prototype.push.call(o.children, i)
            })), csArray.prototype.forEach.call(n, (function(t) {
                t.forEach((function(t) {
                    return i.removeNodeFromMap(o, t)
                }))
            })))
        }, e.prototype.removeNodeFromMap = function(t, e) {
            if (null == t ? void 0 : t.children) {
                var i = csArray.prototype.findIndex.call(t.children, (function(t) {
                    return t.csId === e
                })); - 1 !== i && csArray.prototype.splice.call(t.children, i, 1)
            }
            this.nodeIdentifierService.deleteNode(e)
        }, e.prototype.startSerializeAsync = function(t, e) {
            return void 0 === e && (e = {}), X(this, void 0, void 0, (function() {
                return J(this, (function(i) {
                    return this.nodeIdentifierService.clearMap(), this.nodeIdentifierService.setDefaultSerializationOptions(e), this.nodeIdentifierService.popId(t), [2, this.traverseAndSerialize(t, e)]
                }))
            }))
        }, e.prototype.indexInParent = function(t, e) {
            return e ? csArray.prototype.indexOf.call(csNodechildNodes.apply(e), t) : -1
        }, e.prototype.serializeAndAddToParent = function(t, e, i) {
            var r = this.nodeIdentifierService.getNodeFromMapByNode(e),
                n = this.serialize(t, i),
                o = this.indexInParent(t, e);
            r && ri(r) && ii(n) && (o >= 0 ? csArray.prototype.splice.call(r.children, o, 0, n) : csArray.prototype.push.call(r.children, n))
        }, e.prototype.traverseAndSerialize = function(t, e) {
            return void 0 === e && (e = {}), X(this, void 0, void 0, (function() {
                var i, r, n, o, s, a, c;
                return J(this, (function(u) {
                    switch (u.label) {
                        case 0:
                            return e.skipChildrenSerialization = !0, i = [t], r = this.getTaskTime(), [4, oi()];
                        case 1:
                            u.sent(), this.timer = csDate.now(), this.serialize(t, e), u.label = 2;
                        case 2:
                            if (!(i.length > 0)) return [3, 7];
                            n = csArray.prototype.pop.call(i), o = this.nodeIdentifierService.getOptionsFromMap(n), s = this.runBeforeSerializeChildrenHook(n, o), a = csArray.prototype.shift.call(s), u.label = 3;
                        case 3:
                            return a ? csDate.now() - this.timer > r ? [4, oi()] : [3, 5] : [3, 6];
                        case 4:
                            u.sent(), this.timer = csDate.now(), u.label = 5;
                        case 5:
                            return this.nodeIdentifierService.getId(a) ? (a = csArray.prototype.shift.call(s), [3, 3]) : (csArray.prototype.push.call(i, a), this.serializeAndAddToParent(a, n, o), f(a) && csElementshadowRoot.apply(a) && (c = csElementshadowRoot.apply(a), csArray.prototype.push.call(i, c)), a = csArray.prototype.shift.call(s), [3, 3]);
                        case 6:
                            return [3, 2];
                        case 7:
                            return [2, this.nodeIdentifierService.getNodeFromMapByNode(t)]
                    }
                }))
            }))
        }, e
    }(ti));

    function ai() {
        var t, e = (t = new Error).stack ? csArray.prototype.filter.call(csString.prototype.split.call(t.stack, "\n"), (function(t) {
            return "Error" !== t && -1 === csString.prototype.indexOf.call(csString.prototype.toLowerCase.call(t), "promise ") && -1 === csString.prototype.indexOf.call(t, "[native code]")
        })) : [];
        if (0 === e.length) return "";
        var i = function(t) {
            return t.length > 0 ? ci(t[0]) : ""
        }(e);
        return "" === i || 0 === (e = function(t, e) {
            return csArray.prototype.filter.call(t, (function(t) {
                return -1 === csString.prototype.indexOf.call(t, e)
            }))
        }(e, i)).length ? "" : ci(e[0])
    }

    function ci(t) {
        var e, i = "";
        e = t;
        var r = (-1 !== csString.prototype.indexOf.call(e, "@") ? new RegExp("@(.+):(\\d+):(\\d+)$") : new RegExp("\\((.+):(\\d+):(\\d+)\\)")).exec(t);
        return r && (i = r[1]), i
    }
    var ui, pi = function() {
        function t() {
            this.defaultHookPrepareArgs = function(t, e) {
                return {
                    context: t,
                    args: e
                }
            }
        }
        return t.prototype.copyFunctionSignature = function(t, e) {
            t.prototype = e.prototype, Object.defineProperty(t, "toString", {
                value: function() {
                    return e.toString()
                }
            })
        }, t.prototype.createSyncFunctionInterceptor = function(t) {
            var e, i = t.target,
                r = t.methodName,
                n = t.hook,
                o = t.hookPrepareArgs,
                s = void 0 === o ? this.defaultHookPrepareArgs : o,
                a = t.options;
            if (!(null === (e = Object.getOwnPropertyDescriptor(i, r)) || void 0 === e ? void 0 : e.writable)) return xt.warn("Cannot intercept read only function '" + r + "' of object '" + i + "'"), null;
            var c = !1,
                u = i[r];
            if ("function" == typeof u) {
                var p = function() {
                    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                    var i, r = s(this, t),
                        o = u.apply(this, t);
                    c && (a && a.withCallerName && (i = ai()), xt.tryToExecute("SyncFunctionInterceptor", (function() {
                        n(K(K({
                            result: o
                        }, r), {
                            callerName: i
                        }))
                    }))());
                    return o
                };
                this.copyFunctionSignature(p, u), i[r] = p
            }
            return {
                activate: function() {
                    return c = !0
                },
                deactivate: function() {
                    return c = !1
                }
            }
        }, t.prototype.createAsyncFunctionInterceptor = function(t) {
            var e, i = t.target,
                r = t.methodName,
                n = t.hook,
                o = t.hookPrepareArgs,
                s = void 0 === o ? this.defaultHookPrepareArgs : o,
                a = t.options;
            if (!(null === (e = Object.getOwnPropertyDescriptor(i, r)) || void 0 === e ? void 0 : e.writable)) return xt.warn("Cannot intercept read only function '" + r + "' of object '" + i + "'"), null;
            var c = !1,
                u = i[r];
            if ("function" == typeof u) {
                var p = function() {
                    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                    return X(this, void 0, void 0, (function() {
                        var e, i, r;
                        return J(this, (function(o) {
                            return e = s(this, t), i = u.apply(this, t), c && (a && a.withCallerName && (r = ai()), xt.tryToExecute("AsyncFunctionInterceptor", (function() {
                                n(K(K({
                                    result: i
                                }, e), {
                                    callerName: r
                                }))
                            }))()), [2, i]
                        }))
                    }))
                };
                this.copyFunctionSignature(p, u), i[r] = p
            }
            return {
                activate: function() {
                    return c = !0
                },
                deactivate: function() {
                    return c = !1
                }
            }
        }, t.prototype.createDescriptorInterceptor = function(t, e, i) {
            var r = !1,
                n = Object.getOwnPropertyDescriptor(t, e);
            if (n) {
                if (!n.configurable) return xt.warn("Cannot intercept read only property '" + e + "' of object '" + t + "'"), null;
                Object.defineProperty(t, e, K(K({}, n.get ? {
                    get: function() {
                        return n.get.apply(this, arguments)
                    }
                } : {}), n.set ? {
                    set: function() {
                        var t = this,
                            e = arguments,
                            o = n.set.apply(this, e);
                        return r && xt.tryToExecute("DescriptorInterceptor", (function() {
                            i(t, e[0])
                        }))(), o
                    }
                } : {}))
            }
            return {
                activate: function() {
                    return r = !0
                },
                deactivate: function() {
                    return r = !1
                }
            }
        }, t
    }();
    ! function(t) {
        function e(t) {
            var e = t.getBoundingClientRect(),
                i = e.left + .5 * e.width,
                r = e.top + .5 * e.height,
                n = document.elementFromPoint(i, r);
            return Ae.getShadowRoot(n) ? t.getRootNode().elementFromPoint(i, r) : n
        }
        t.findAllElements = function(t, e) {
            var i;
            void 0 === e && (e = document);
            for (var r = b(e.querySelectorAll(t)), n = 0, o = Ae.getAllShadowHosts(e); n < o.length; n++) {
                var s = b(o[n].shadowRoot.querySelectorAll(t));
                (i = csArray.prototype.push).call.apply(i, Q([r], s))
            }
            return r
        }, t.getTopElement = e, t.isVisibleInDocument = function(t) {
            return ! function(t) {
                var e = t.getBoundingClientRect();
                return e.right + Oe.windowOffsetX() < 0 || e.bottom + Oe.windowOffsetY() < 0
            }(t) && ! function(t) {
                var e, i = window.getComputedStyle(t);
                return 0 === t.getClientRects().length || "hidden" === i.visibility || "collapse" === i.visibility || "0" === i.opacity || "opacity(0)" === i.filter || (e = i.color, /^rgba\(\d+, \d+, \d+, 0\)$/.test(e))
            }(t) && ! function(t) {
                var i = e(t);
                return !t.contains(i) && null !== i
            }(t)
        }, t.isInViewPort = function(t) {
            return null !== e(t)
        }
    }(ui || (ui = {}));
    var li = function(t) {
            function e(e, i, r, n) {
                var o = t.call(this) || this;
                return o.configuration = e, o.nodeIdentifier = i, o.textVisibilityBatch = r, o.textVisibilityDelay = n, o.isStarted = !1, o.seenInViewPort = new Set, o.seenGlobally = new Set, o
            }
            return W(e, t), e.prototype.onEvent = function(t) {
                this.onEventCallback = t
            }, e.prototype.start = function() {
                var t = this;
                this.isStarted || this.configuration.textVisibilityEnabled && window.IntersectionObserver && (this.intersectionObserver = new IntersectionObserver((function(e, i) {
                    t.handleIntersection(e, i)
                }), e.INTERSECTION_OPTIONS), this.mutationObserver = new csMutationObserver((function(e) {
                    t.handleMutations(e)
                })), this.isStarted = !0)
            }, e.prototype.stop = function() {
                this.isStarted && (this.textVisibilityBatch.clear(), this.intersectionObserver.disconnect(), this.mutationObserver.disconnect(), this.seenInViewPort.clear(), this.seenGlobally.clear(), this.isStarted = !1)
            }, e.prototype.flushEvents = function() {
                this.isStarted && this.onTextVisibility()
            }, e.prototype.serializeTextNode = function(t, e, i) {
                if (!this.isStarted || i.withAnonymization) return e;
                var r = csString.prototype.trim.call(t.data),
                    n = t.parentElement;
                if ("" !== r && n && !g(n) && !E(n)) {
                    if (!ui.isVisibleInDocument(n)) return this.observeMutation(n), this.observeIntersection(n), e;
                    var o = ui.isInViewPort(n);
                    o || this.observeIntersection(n), this.processTextVisibilityFromSerialization(n, o)
                }
                return e
            }, e.prototype.observeIntersection = function(t) {
                this.intersectionObserver.observe(t)
            }, e.prototype.observeMutation = function(t) {
                this.mutationObserver.observe(t, {
                    attributeFilter: e.MUTATION_ATTRIBUTE_FILTER
                })
            }, e.prototype.processTextVisibilityAfterDelay = function(t, e, i) {
                ui.isVisibleInDocument(t) && (this.pushIdSeenGlobally(e), ui.isInViewPort(t) && i && (this.pushIdSeenInViewPort(e), this.intersectionObserver.unobserve(t)), this.textVisibilityBatch.isFull() && this.onTextVisibility())
            }, e.prototype.processTextVisibilityFromSerialization = function(t, e) {
                var i = this;
                this.nodeIdentifier.ifIdentified(t, (function(r) {
                    i.seenInViewPort.has(r) || setTimeout((function() {
                        i.processTextVisibilityAfterDelay(t, r, e), i.seenGlobally.has(r) || i.observeMutation(t), !i.seenInViewPort.has(r) && e && i.observeIntersection(t)
                    }), i.textVisibilityDelay)
                }))
            }, e.prototype.processTextVisibilityFromMutation = function(t) {
                var e = this;
                this.nodeIdentifier.ifIdentified(t, (function(i) {
                    e.seenInViewPort.has(i) || e.processTextVisibility(t, i)
                }))
            }, e.prototype.processTextVisibilityFromIntersection = function(t, e) {
                var i = this;
                this.nodeIdentifier.ifIdentified(t, (function(r) {
                    i.seenInViewPort.has(r) ? e.unobserve(t) : i.processTextVisibility(t, r)
                }))
            }, e.prototype.processTextVisibility = function(t, e) {
                var i = this,
                    r = this.isVisibleInViewPort(t);
                setTimeout((function() {
                    return i.processTextVisibilityAfterDelay(t, e, r)
                }), this.textVisibilityDelay)
            }, e.prototype.handleMutations = function(t) {
                var i = this;
                csArray.prototype.forEach.call(t, (function(t) {
                    var r = t.attributeName;
                    r && -1 !== csArray.prototype.indexOf.call(e.MUTATION_ATTRIBUTE_FILTER, r) && i.processTextVisibilityFromMutation(t.target)
                }))
            }, e.prototype.handleIntersection = function(t, e) {
                var i = this;
                csArray.prototype.forEach.call(t, (function(t) {
                    t.isIntersecting && i.processTextVisibilityFromIntersection(t.target, e)
                }))
            }, e.prototype.isVisibleInViewPort = function(t) {
                return ui.isVisibleInDocument(t) && ui.isInViewPort(t)
            }, e.prototype.pushIdSeenInViewPort = function(t) {
                this.seenInViewPort.has(t) || (this.seenInViewPort.add(t), this.textVisibilityBatch.addIdInViewPort(t))
            }, e.prototype.pushIdSeenGlobally = function(t) {
                this.seenGlobally.has(t) || (this.seenGlobally.add(t), this.textVisibilityBatch.addIdInGlobally(t))
            }, e.prototype.onTextVisibility = function() {
                if (!this.textVisibilityBatch.isEmpty()) {
                    var t = {
                        visibleGlobally: this.textVisibilityBatch.flushIdsSeenGlobally(),
                        visibleInViewPort: this.textVisibilityBatch.flushIdsSeenInViewport()
                    };
                    this.onEventCallback({
                        type: ie.TEXT_VISIBILITY,
                        date: F.now(),
                        args: [t]
                    })
                }
            }, e.INTERSECTION_OPTIONS = {
                root: null,
                rootMargin: "0px",
                threshold: .5
            }, e.MUTATION_ATTRIBUTE_FILTER = ["style", "class", "hidden"], Y([_t("TextVisibilityTracker.processTextVisibilityAfterDelay")], e.prototype, "processTextVisibilityAfterDelay", null), Y([_t("TextVisibilityTracker.processTextVisibilityFromSerialization")], e.prototype, "processTextVisibilityFromSerialization", null), Y([_t("TextVisibilityTracker.processTextVisibilityFromMutation")], e.prototype, "processTextVisibilityFromMutation", null), Y([_t("TextVisibilityTracker.processTextVisibilityFromIntersection")], e.prototype, "processTextVisibilityFromIntersection", null), Y([_t("TextVisibilityTracker.handleMutations")], e.prototype, "handleMutations", null), Y([_t("TextVisibilityTracker.handleIntersection")], e.prototype, "handleIntersection", null), e
        }(Me),
        hi = function(t) {
            function e(e, i) {
                var r = t.call(this, e, i) || this;
                return r.onBeaconSuccessCallbacks = [], r.onBeaconFailureCallbacks = [], r
            }
            return W(e, t), e.prototype.setRequestPayloadProvider = function(t) {
                this.requestPayloadProvider = t
            }, e.prototype.onBeaconSuccess = function(t) {
                csArray.prototype.push.call(this.onBeaconSuccessCallbacks, t)
            }, e.prototype.onBeaconFailure = function(t) {
                csArray.prototype.push.call(this.onBeaconFailureCallbacks, t)
            }, e.prototype.send = function() {
                csArray.prototype.forEach.call(this.beforeRequestCallbacks, (function(t) {
                    return t()
                }));
                var t = this.retrieveParameters(),
                    e = Z.toQuery(t),
                    i = this.retrievePayload();
                this.sendBeacon(e, i) ? csArray.prototype.forEach.call(this.onBeaconSuccessCallbacks, (function(t) {
                    return t()
                })) : csArray.prototype.forEach.call(this.onBeaconFailureCallbacks, (function(t) {
                    return t()
                })), csArray.prototype.forEach.call(this.afterRequestCallbacks, (function(t) {
                    return t()
                }))
            }, e.prototype.retrievePayload = function() {
                return this.requestPayloadProvider ? this.requestPayloadProvider.getRequestPayload() : ""
            }, e.prototype.sendBeacon = function(t, e) {
                return void 0 !== navigator.sendBeacon && navigator.sendBeacon(this.domainUri + "/" + this.path + "?" + t, e)
            }, e
        }($),
        di = function() {
            function t() {
                this.seenGloballyBuffer = [], this.seenInViewPortBuffer = []
            }
            return t.prototype.isFull = function() {
                return this.seenGloballyBuffer.length >= t.BATCH_SIZE || this.seenInViewPortBuffer.length >= t.BATCH_SIZE
            }, t.prototype.isEmpty = function() {
                return 0 === this.seenGloballyBuffer.length && 0 === this.seenInViewPortBuffer.length
            }, t.prototype.addIdInGlobally = function(t) {
                csArray.prototype.push.call(this.seenGloballyBuffer, t)
            }, t.prototype.addIdInViewPort = function(t) {
                csArray.prototype.push.call(this.seenInViewPortBuffer, t)
            }, t.prototype.clear = function() {
                this.seenGloballyBuffer = [], this.seenInViewPortBuffer = []
            }, t.prototype.flushIdsSeenGlobally = function() {
                var t = Q(this.seenGloballyBuffer);
                return this.seenGloballyBuffer = [], t
            }, t.prototype.flushIdsSeenInViewport = function() {
                var t = Q(this.seenInViewPortBuffer);
                return this.seenInViewPortBuffer = [], t
            }, t.BATCH_SIZE = 20, t
        }(),
        fi = function(t) {
            function e(e) {
                var i = t.call(this) || this;
                return i.encryptionService = e, i
            }
            return W(e, t), e.prototype.serializeTextNode = function(t, e) {
                var i;
                return (null === (i = t.parentElement) || void 0 === i ? void 0 : i.hasAttribute("data-cs-encrypt")) && (e.data = ke(t.data), this.encryptionService.registerTextNodeToEncrypt({
                    textNode: t,
                    serializedTextData: e.data
                })), e
            }, e
        }(Me),
        yi = function() {
            function t() {
                this.dataToEncryptBuffer = []
            }
            return t.prototype.onSerializeData = function(t) {
                this.onSerializeDataCallback = t
            }, t.prototype.addData = function(t) {
                csArray.prototype.push.call(this.dataToEncryptBuffer, t)
            }, t.prototype.serializeDataFromBuffer = function() {
                for (; this.dataToEncryptBuffer.length > 0;) {
                    var t = csArray.prototype.shift.call(this.dataToEncryptBuffer);
                    this.onSerializeDataCallback(t)
                }
            }, t.prototype.clear = function() {
                this.dataToEncryptBuffer = []
            }, t
        }();

    function vi(t) {
        for (var e = new ArrayBuffer(t.length), i = new Uint8Array(e), r = 0, n = t.length; r < n; r += 1) i[r] = csString.prototype.charCodeAt.call(t, r);
        return e
    }

    function mi(t) {
        for (var e = new Uint8Array(t), i = "", r = 0; r < e.byteLength; r += 1) i += csString.fromCodePoint(e[r]);
        return i
    }

    function gi(t) {
        return vi(self.atob(t))
    }
    var Si = function() {
            function t(t) {
                this.crypto = t, this.isEncryptionSupported = !1
            }
            return t.prototype.init = function() {
                this.isEncryptionSupported = this.canSupportEncryption(), this.isEncryptionSupported && (this.textEncoder = new TextEncoder)
            }, t.prototype.isSupported = function() {
                return this.isEncryptionSupported
            }, t.prototype.canSupportEncryption = function() {
                return !!(this.crypto && this.crypto.subtle && this.crypto.subtle.encrypt && self.CryptoKey && self.TextEncoder && csString.fromCodePoint)
            }, t
        }(),
        Ei = (function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            W(e, t), e.prototype.exportInitializationVector = function(t) {
                return mi(t)
            }, e.prototype.exportSecret = function(t) {
                var e;
                return X(this, void 0, void 0, (function() {
                    var i;
                    return J(this, (function(r) {
                        switch (r.label) {
                            case 0:
                                if (!this.isSupported()) return [2, null];
                                r.label = 1;
                            case 1:
                                return r.trys.push([1, 3, , 4]), [4, this.crypto.subtle.exportKey("jwk", t)];
                            case 2:
                                return i = r.sent(), [2, null !== (e = i.k) && void 0 !== e ? e : null];
                            case 3:
                                return r.sent(), [2, null];
                            case 4:
                                return [2]
                        }
                    }))
                }))
            }, e.prototype.generateEncryptionKey = function() {
                return X(this, void 0, void 0, (function() {
                    return J(this, (function(t) {
                        switch (t.label) {
                            case 0:
                                if (!this.isSupported()) return [2, null];
                                t.label = 1;
                            case 1:
                                return t.trys.push([1, 3, , 4]), [4, this.crypto.subtle.generateKey({
                                    name: "AES-CTR",
                                    length: 128
                                }, !0, ["encrypt", "decrypt"])];
                            case 2:
                                return [2, t.sent()];
                            case 3:
                                return t.sent(), [2, null];
                            case 4:
                                return [2]
                        }
                    }))
                }))
            }, e.prototype.generateInitializationVector = function() {
                return this.isSupported() ? this.crypto.getRandomValues(new Uint8Array(16)) : null
            }, e.prototype.encrypt = function(t, e) {
                return X(this, void 0, void 0, (function() {
                    var i, r;
                    return J(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                if (!this.isSupported()) return [2, null];
                                i = {
                                    counter: t.initializationVector,
                                    name: "AES-CTR",
                                    length: 64
                                }, r = this.textEncoder.encode(e), n.label = 1;
                            case 1:
                                return n.trys.push([1, 3, , 4]), [4, this.crypto.subtle.encrypt(i, t.encryptionKey, r)];
                            case 2:
                                return [2, mi(n.sent())];
                            case 3:
                                return n.sent(), [2, null];
                            case 4:
                                return [2]
                        }
                    }))
                }))
            }, e.prototype.canSupportEncryption = function() {
                return t.prototype.canSupportEncryption.call(this) && !!this.crypto.getRandomValues && !!this.crypto.subtle.generateKey && !!this.crypto.subtle.exportKey
            }
        }(Si), function() {
            function t(t) {
                this.crypto = t, this.isDecryptionSupported = !1
            }
            return t.prototype.init = function() {
                this.isDecryptionSupported = this.canSupportDecryption(), this.isDecryptionSupported && (this.textDecoder = new TextDecoder)
            }, t.prototype.isSupported = function() {
                return this.isDecryptionSupported
            }, t.prototype.canSupportDecryption = function() {
                return !!(this.crypto && this.crypto.subtle && this.crypto.subtle.importKey && this.crypto.subtle.decrypt && self.CryptoKey && self.TextDecoder)
            }, t
        }()),
        Ci = (function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            W(e, t), e.prototype.importInitializationVector = function(t) {
                return vi(t)
            }, e.prototype.importSecret = function(t) {
                return X(this, void 0, void 0, (function() {
                    var e, i;
                    return J(this, (function(r) {
                        switch (r.label) {
                            case 0:
                                if (!this.isSupported()) return [2, null];
                                e = {
                                    alg: "A128CTR",
                                    ext: !0,
                                    k: t,
                                    key_ops: ["encrypt", "decrypt"],
                                    kty: "oct"
                                }, i = {
                                    name: "AES-CTR"
                                }, r.label = 1;
                            case 1:
                                return r.trys.push([1, 3, , 4]), [4, this.crypto.subtle.importKey("jwk", e, i, !1, ["encrypt", "decrypt"])];
                            case 2:
                                return [2, r.sent()];
                            case 3:
                                return r.sent(), [2, null];
                            case 4:
                                return [2]
                        }
                    }))
                }))
            }, e.prototype.decrypt = function(t, e) {
                return X(this, void 0, void 0, (function() {
                    var i, r;
                    return J(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                if (!this.isSupported()) return [2, null];
                                i = {
                                    name: "AES-CTR",
                                    counter: t.initializationVector,
                                    length: 64
                                }, n.label = 1;
                            case 1:
                                return n.trys.push([1, 3, , 4]), [4, this.crypto.subtle.decrypt(i, t.encryptionKey, vi(e))];
                            case 2:
                                return r = n.sent(), [2, this.textDecoder.decode(r)];
                            case 3:
                                return n.sent(), [2, null];
                            case 4:
                                return [2]
                        }
                    }))
                }))
            }
        }(Ei), function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return W(e, t), e.prototype.importKey = function(t) {
                return X(this, void 0, void 0, (function() {
                    return J(this, (function(e) {
                        switch (e.label) {
                            case 0:
                                if (!this.isSupported()) return [2, null];
                                e.label = 1;
                            case 1:
                                return e.trys.push([1, 3, , 4]), [4, this.crypto.subtle.importKey("spki", gi(t), {
                                    name: "RSA-OAEP",
                                    hash: "SHA-256"
                                }, !1, ["encrypt"])];
                            case 2:
                                return [2, e.sent()];
                            case 3:
                                return e.sent(), [2, null];
                            case 4:
                                return [2]
                        }
                    }))
                }))
            }, e.prototype.encrypt = function(t, e) {
                return X(this, void 0, void 0, (function() {
                    var i;
                    return J(this, (function(r) {
                        switch (r.label) {
                            case 0:
                                if (!this.isSupported()) return [2, null];
                                if (!(i = this.truncateAndEncode(e, 190))) return [2, null];
                                r.label = 1;
                            case 1:
                                return r.trys.push([1, 3, , 4]), [4, this.crypto.subtle.encrypt({
                                    name: "RSA-OAEP"
                                }, t.publicKey, i)];
                            case 2:
                                return [2, mi(r.sent())];
                            case 3:
                                return r.sent(), [2, null];
                            case 4:
                                return [2]
                        }
                    }))
                }))
            }, e.prototype.truncateAndEncode = function(t, e) {
                for (var i = 0, r = 0, n = 0; n < t.length; n++) {
                    var o = csString.prototype.codePointAt.call(t, n);
                    if (!o) return null;
                    var s = this.getByteSize(o);
                    if (s + i > e) break;
                    r++, i += s
                }
                var a = csString.prototype.slice.call(t, 0, r);
                return this.textEncoder.encode(a)
            }, e.prototype.getByteSize = function(t) {
                return t <= 127 ? 1 : t <= 2047 ? 2 : t <= 65535 ? 3 : 4
            }, e.prototype.canSupportEncryption = function() {
                return t.prototype.canSupportEncryption.call(this) && !!this.crypto.subtle.importKey
            }, e
        }(Si)),
        Ti = (function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            W(e, t), e.prototype.importKey = function(t) {
                return X(this, void 0, void 0, (function() {
                    return J(this, (function(e) {
                        switch (e.label) {
                            case 0:
                                if (!this.isSupported()) return [2, null];
                                e.label = 1;
                            case 1:
                                return e.trys.push([1, 3, , 4]), [4, this.crypto.subtle.importKey("pkcs8", gi(t), {
                                    name: "RSA-OAEP",
                                    hash: "SHA-256"
                                }, !1, ["decrypt"])];
                            case 2:
                                return [2, e.sent()];
                            case 3:
                                return e.sent(), [2, null];
                            case 4:
                                return [2]
                        }
                    }))
                }))
            }, e.prototype.decrypt = function(t, e) {
                return X(this, void 0, void 0, (function() {
                    var i;
                    return J(this, (function(r) {
                        switch (r.label) {
                            case 0:
                                if (!this.isSupported()) return [2, null];
                                r.label = 1;
                            case 1:
                                return r.trys.push([1, 3, , 4]), [4, this.crypto.subtle.decrypt({
                                    name: "RSA-OAEP"
                                }, t.privateKey, vi(e))];
                            case 2:
                                return i = r.sent(), [2, this.textDecoder.decode(i)];
                            case 3:
                                return r.sent(), [2, null];
                            case 4:
                                return [2]
                        }
                    }))
                }))
            }
        }(Ei), function() {
            function t(t) {
                this.crypto = t, this.isHashingSupported = !1
            }
            return t.prototype.init = function() {
                this.isHashingSupported = this.canSupportHashing(), this.isHashingSupported && (this.textEncoder = new TextEncoder)
            }, t.prototype.canSupportHashing = function() {
                return !!(this.crypto && this.crypto.subtle && this.crypto.subtle.digest && self.TextEncoder && csArray.from)
            }, t.prototype.isSupported = function() {
                return this.isHashingSupported
            }, t.prototype.isValidInput = function(t) {
                return !!t && t.length <= 100
            }, t.prototype.formatInput = function(t, e) {
                return csString.prototype.toLowerCase.call(csString.prototype.trim.call(t)) + ":" + e
            }, t.prototype.digest = function(t, e) {
                return X(this, void 0, void 0, (function() {
                    var i, r, n;
                    return J(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                if (!this.isHashingSupported) return [2, null];
                                i = this.formatInput(t, e), r = this.textEncoder.encode(i), o.label = 1;
                            case 1:
                                return o.trys.push([1, 3, , 4]), [4, crypto.subtle.digest("SHA-1", r)];
                            case 2:
                                return n = o.sent(), [2, (s = n, a = csArray.from(new Uint8Array(s)), csArray.prototype.join.call(csArray.prototype.map.call(a, (function(t) {
                                    return csString.prototype.padStart.call(t.toString(16), 2, "0")
                                })), ""))];
                            case 3:
                                return o.sent(), [2, null];
                            case 4:
                                return [2]
                        }
                        var s, a
                    }))
                }))
            }, t
        }()),
        wi = function() {
            function t(t, e, i, r, n, o, s, a, c, u, p, l, h, d, f, y, v, m) {
                this.sessionService = t, this.configuration = e, this.compressor = i, this.selector = r, this.consentService = n, this.basicParameters = o, this.commandsService = s, this.pii = a, this.sessionRenewer = c, this.urlService = u, this.piiMaskingService = p, this.javaScriptErrorsTracker = l, this.javaScriptErrorsAnonymizer = h, this.apiErrorsTracker = d, this.apiErrorsAnonymizer = f, this.debugService = y, this.lifeCycleEventsEmitter = v, this.customEventEmitter = m
            }
            return t.prototype.init = function() {
                var t = this,
                    e = new pi,
                    i = new xe,
                    r = new De(this.piiMaskingService);
                this.anonymizationService = new Ue(this.pii, this.configuration), this.anonymizationService.init();
                var n = new Je,
                    o = new $e(e, i),
                    s = new Ci(window.crypto);
                s.init();
                var a = new yi,
                    c = new yi,
                    u = new yi,
                    p = new yi,
                    l = new de(i, this.configuration, s, a, c, u, p);
                l.init();
                var h = new fi(l),
                    d = [r, this.anonymizationService, h, n],
                    f = new li(this.configuration, i, new di, 1e3);
                this.configuration.textVisibilityEnabled && csArray.prototype.push.call(d, f);
                var y = new si(i, d);
                this.recordingBatch = new Se;
                var v = new Ee,
                    m = new ze(v, this.basicParameters),
                    g = new hi(this.configuration.getRecordingUri(), "v2/recording");
                this.configuration.useMalkaPipeline && (m.addProvider({
                    getRequestParameters: function() {
                        return {
                            rt: csArray.prototype.join.call(t.sessionService.getRecordingStates())
                        }
                    }
                }), g.setRequestParametersProviders(this.basicParameters, {
                    getRequestParameters: function() {
                        return {
                            rt: csArray.prototype.join.call(t.sessionService.getRecordingStates()),
                            hlm: "true"
                        }
                    }
                }));
                var S = this.createRecordingPostRequest(this.compressor);
                this.mutationSerializer = new Pe(this.consentService, y, i, r, this.anonymizationService, l, this.configuration, this.urlService), this.mutationSerializer.init(), this.recordingPageEventsTracker = new ve(this.selector, i, r, l), this.recordingPageEventsTracker.init();
                var E = new me(this.mutationSerializer, o, n, this.lifeCycleEventsEmitter, this.configuration),
                    C = new qe("csPersisted"),
                    T = this.createRecordingPostRequest(this.compressor);
                this.recordingRecoveryService = new be(T, this.recordingBatch, C, this.configuration, g), this.recordingService = new we(this.configuration, S, this.recordingBatch, m, v, new Ne(e, i, n), E, this.recordingPageEventsTracker, new je(window.location, this.pii), this.sessionRenewer, n, new Ze(window), this.javaScriptErrorsTracker, this.javaScriptErrorsAnonymizer, this.apiErrorsTracker, f, this.apiErrorsAnonymizer, l, this.recordingRecoveryService), this.customEventEmitter.addListeners(this.recordingService), this.recordingInactivityService = new Ge(this.recordingPageEventsTracker, E, new Be(new He), S, this.mutationSerializer), o.init(), this.recordingInactivityService.init(), this.recordingService.init(), this.commandsService.register(["isRecording"], (function() {
                    return t.sessionService.isReplayRecorded()
                })), this.commandsService.register(["setCapturedElementsSelector"], (function(e) {
                    t.anonymizationService.setWhitelistedElementsSelector(e)
                })), this.commandsService.register(["setPIISelectors"], (function(e) {
                    t.piiMaskingService.setPIISelectors(e)
                }))
            }, t.prototype.onStartTracking = function() {
                this.recordingRecoveryService.recover(), this.sessionService.isReplayRecorded() && (this.configuration.useMalkaPipeline && this.sessionService.isTemporarilyRecorded() && this.recordingService.blockSendingEvents(), this.recordingInactivityService.start(), this.recordingService.start(), this.recordingRecoveryService.start())
            }, t.prototype.onArtificialPageViewEnd = function() {
                this.sessionService.isReplayRecorded() && !this.sessionService.isTemporarilyRecorded() && this.recordingRecoveryService.sendLastMessageBeacon()
            }, t.prototype.onAfterArtificialPageView = function() {
                this.recordingService.clearStates(), this.mutationSerializer.resetAnonymization(), this.sessionService.isReplayRecorded() ? (this.configuration.useMalkaPipeline && this.sessionService.isTemporarilyRecorded() && this.recordingService.blockSendingEvents(), this.recordingInactivityService.restart(), this.recordingService.restart(), this.recordingRecoveryService.restart()) : (this.recordingInactivityService.stop(), this.recordingService.stop(), this.recordingRecoveryService.stop())
            }, t.prototype.onBeforeSessionRenewal = function() {
                this.recordingService.clearStates(), this.recordingInactivityService.stop(), this.recordingService.stop(), this.recordingRecoveryService.stop()
            }, t.prototype.onOptout = function() {
                this.recordingInactivityService.stop(), this.recordingService.stop(), this.recordingRecoveryService.stop()
            }, t.prototype.onConsentGranted = function() {
                this.mutationSerializer.resetAnonymization(), this.recordingService.triggerConsentGranted()
            }, t.prototype.onConsentWithdrawn = function() {
                this.mutationSerializer.resetAnonymization(), this.recordingService.triggerConsentWithdrawn()
            }, t.prototype.onRecordingStateChange = function(t, e) {
                var i = this;
                this.configuration.useMalkaPipeline && (t === Bt.NOT_RECORDED && e === Ft.ETR_OFF ? (this.recordingService.clearEvents(), this.recordingInactivityService.stop(), this.recordingService.stop(), this.recordingRecoveryService.stop()) : (this.recordingBatch.setRequestParametersFromProvider({
                    getRequestParameters: function() {
                        return {
                            rt: csArray.prototype.join.call(i.sessionService.getRecordingStates())
                        }
                    }
                }), this.recordingService.allowSendingEvents(), this.mutationSerializer.isSerializationInProgress() || this.recordingService.pushEvents()))
            }, t.prototype.onInitialDomDone = function() {
                this.recordingPageEventsTracker.start()
            }, t.prototype.createRecordingPostRequest = function(t) {
                var e = this.configuration.useMalkaPipeline ? "v2/recording" : "recording",
                    i = this.configuration.useMalkaPipeline ? "byteArray" : "base64",
                    r = new ce(this.configuration.getRecordingUri(), e);
                return this.debugService.isCompressionDisabled() || r.setCompressionOptions(t, i), r
            }, t.isSupported = function() {
                return "MutationObserver" in window && "visibilityState" in document
            }, t
        }(),
        bi = function() {
            function t(t, e, i) {
                this.visitorService = t, this.sessionService = e, this.configuration = i, this.naturalPageViewSent = !1
            }
            return t.prototype.isNaturalPageViewSent = function() {
                return this.naturalPageViewSent
            }, t.prototype.setNaturalPageViewSent = function(t) {
                this.naturalPageViewSent = t
            }, t.prototype.getTrackingContext = function() {
                var t = this.getSessionKey(),
                    e = this.getPageNumber(),
                    i = this.getProjectId();
                return t && e ? {
                    projectId: i,
                    sessionKey: t,
                    pageNumber: e
                } : null
            }, t.prototype.getSessionKey = function() {
                var t = this.visitorService.getVisitor();
                return t ? t.id + "." + t.visitsCount : null
            }, t.prototype.getPageNumber = function() {
                return this.sessionService.doesSessionExist() ? this.sessionService.getSession().pageNumber : null
            }, t.prototype.getProjectId = function() {
                return this.configuration.projectId
            }, t
        }(),
        Ri = function() {
            function t(t) {
                this.trackingContextService = t, this.registeredCallbacks = []
            }
            return t.prototype.handleCommand = function(t) {
                if (It(t) && (this.registerCallback(t), this.trackingContextService.isNaturalPageViewSent())) {
                    var e = this.trackingContextService.getTrackingContext();
                    null !== e && this.executeAsync(t, e)
                }
            }, t.prototype.registerCallback = function(t) {
                csArray.prototype.push.call(this.registeredCallbacks, t)
            }, t.prototype.executeRegisteredCallbacks = function() {
                var t = this,
                    e = this.trackingContextService.getTrackingContext();
                null !== e && csArray.prototype.map.call(this.registeredCallbacks, (function(i) {
                    return t.executeAsync(i, e)
                }))
            }, t.prototype.executeAsync = function(t, e) {
                setTimeout((function() {
                    t(e)
                }))
            }, t
        }(),
        ki = function() {
            function t(t) {
                this.trackingContextService = t, this.pendingCallbacks = []
            }
            return t.prototype.handleCommand = function(t) {
                return this.trackingContextService.isNaturalPageViewSent() ? this.applyGetSessionKey(t) : void this.addPendingCallback(t)
            }, t.prototype.applyGetSessionKey = function(t) {
                var e = this.trackingContextService.getSessionKey();
                return this.hasCallback(t) && null !== e && this.executeAsync(t.callback, e), e
            }, t.prototype.addPendingCallback = function(t) {
                this.hasCallback(t) && csArray.prototype.push.call(this.pendingCallbacks, t.callback)
            }, t.prototype.flushPendingCallbacks = function() {
                var t = this,
                    e = this.trackingContextService.getSessionKey();
                null !== e && csArray.prototype.forEach.call(this.pendingCallbacks, (function(i) {
                    t.executeAsync(i, e)
                })), this.pendingCallbacks = []
            }, t.prototype.hasCallback = function(t) {
                return t && "function" == typeof t.callback
            }, t.prototype.executeAsync = function(t, e) {
                setTimeout((function() {
                    t(e)
                }))
            }, t
        }(),
        Ai = function() {
            function t(t, e) {
                this.iframeParentToChildrenCommunicationService = t, this.trackingContextService = e
            }
            return t.prototype.onIframeIntegrationCallback = function(t) {
                if (this.trackingContextService.isNaturalPageViewSent()) {
                    var e = this.trackingContextService.getTrackingContext();
                    null !== e && (t.trackingContext = e, this.iframeParentToChildrenCommunicationService.sendToChildren(mt.IntegrationCallback, t))
                }
            }, t.prototype.sendAfterPageViewCallbackToChildren = function() {
                var t = this.trackingContextService.getTrackingContext();
                if (null !== t) {
                    var e = {
                        trackingContext: t,
                        initiator: yt.AfterPageView
                    };
                    this.iframeParentToChildrenCommunicationService.sendToChildren(mt.IntegrationCallback, e)
                }
            }, t
        }(),
        Ii = ["afterPageView"],
        Pi = ["getSessionKey"],
        Ni = function() {
            function t(t, e, i, r, n, o) {
                this.visitorService = t, this.sessionService = e, this.commandsService = i, this.iframeEventsEmitter = r, this.iframeParentToChildrenCommunicationService = n, this.configuration = o
            }
            return t.prototype.init = function() {
                var t = this;
                this.trackingContextService = new bi(this.visitorService, this.sessionService, this.configuration), this.afterPageViewService = new Ri(this.trackingContextService), this.getSessionKeyService = new ki(this.trackingContextService), this.parentToChildrenIntegrationService = new Ai(this.iframeParentToChildrenCommunicationService, this.trackingContextService), this.iframeEventsEmitter.addListeners(this.parentToChildrenIntegrationService), this.commandsService.register(Pi, (function(e) {
                    return t.getSessionKeyService.handleCommand(e)
                })), this.commandsService.register(Ii, (function(e) {
                    t.afterPageViewService.handleCommand(e)
                }))
            }, t.prototype.onAfterNaturalPageView = function() {
                this.trackingContextService.setNaturalPageViewSent(!0), this.getSessionKeyService.flushPendingCallbacks(), this.afterPageViewService.executeRegisteredCallbacks(), this.parentToChildrenIntegrationService.sendAfterPageViewCallbackToChildren()
            }, t.prototype.onAfterArtificialPageView = function() {
                this.afterPageViewService.executeRegisteredCallbacks(), this.parentToChildrenIntegrationService.sendAfterPageViewCallbackToChildren()
            }, t
        }(),
        Mi = function() {
            function t(t, e) {
                this.key = csString.prototype.slice.call(t, 0, 50), this.value = bt(e) ? csString.prototype.slice.call(e, 0, 255) : e
            }
            return t.isValid = function(t, e) {
                return bt(t) && (bt(e) || wt(e))
            }, t
        }(),
        Oi = function(t) {
            function e(e, i) {
                var r = t.call(this) || this;
                return r.batch = e, r.pii = i, r.dynamicVariablesQueue = [], r
            }
            return W(e, t), e.prototype.onStart = function() {
                var t = this;
                csArray.prototype.forEach.call(this.dynamicVariablesQueue, (function(e) {
                    return t.trackDynamicVariable(e.key, e.value)
                })), this.dynamicVariablesQueue = []
            }, e.prototype.onStop = function() {}, e.prototype.trackDynamicVariable = function(t, e) {
                this.isStarted ? Mi.isValid(t, e) && this.batch.add(new Mi(this.pii.anonymize(t), this.pii.anonymize(e))) : csArray.prototype.push.call(this.dynamicVariablesQueue, {
                    key: t,
                    value: e
                })
            }, e
        }(Te);
    var Li, xi, _i, Di, Vi = function(t) {
            return void 0 === t && (t = 0),
                function(e, i, r) {
                    var n = r.value,
                        o = !1;
                    r.value = function() {
                        for (var e = this, i = [], r = 0; r < arguments.length; r++) i[r] = arguments[r];
                        o || (o = !0, setTimeout((function() {
                            n.apply(e, i), o = !1
                        }), t))
                    }
                }
        },
        Ui = function() {
            function t(t) {
                this.compressor = t, this.batch = []
            }
            return t.prototype.add = function(t) {
                csArray.prototype.push.call(this.batch, t), this.setBatchReadyCall()
            }, t.prototype.clear = function() {
                this.batch = []
            }, t.prototype.onBatchReady = function(t) {
                this.batchReadyCallback = t
            }, t.prototype.getRequestParameters = function() {
                for (var t = {}, e = 0, i = this.batch; e < i.length; e++) {
                    var r = i[e];
                    t[r.key] = r.value
                }
                return {
                    dv: this.compressor.compressSync(csJSON.stringify(t))
                }
            }, t.prototype.setBatchReadyCall = function() {
                this.batchReadyCallback()
            }, Y([Vi(), _t("dynamicVariablesBatchReady")], t.prototype, "setBatchReadyCall", null), t
        }(),
        qi = ["trackDynamicVariable"],
        zi = function() {
            function t(t, e, i, r, n, o) {
                this.commandsService = t, this.sessionService = e, this.configuration = i, this.basicParameters = r, this.compressor = n, this.pii = o, this.request = new tt(this.configuration.getTrackerUri(), "dvar"), this.batch = new Ui(this.compressor), this.service = new Oi(this.batch, this.pii)
            }
            return t.prototype.init = function() {
                var t = this;
                this.request.setRequestParametersProviders(this.basicParameters, this.batch), this.sessionService.setDynamicVariablesService(this.service), this.batch.onBatchReady((function() {
                    return t.request.send()
                })), this.request.after((function() {
                    return t.batch.clear()
                })), this.commandsService.register(qi, (function(e) {
                    var i = void 0 === e ? {} : e,
                        r = i.key,
                        n = i.value;
                    t.service.trackDynamicVariable(r, n)
                }))
            }, t.prototype.onStartTracking = function() {
                this.service.start()
            }, t
        }(),
        Bi = function() {
            function t(t, e) {
                this.id = t, this.revenue = e
            }
            return t.from = function(e) {
                var i = new t(e.id, parseFloat(e.revenue));
                return isNaN(parseFloat(e.tax)) || (i.tax = parseFloat(e.tax)), isNaN(parseFloat(e.shipping)) || (i.shipping = parseFloat(e.shipping)), bt(e.currency) && e.currency.length <= 10 && (i.currency = e.currency), i
            }, t.prototype.hasValidRevenue = function() {
                return !isNaN(this.revenue) && this.revenue >= 0
            }, t
        }(),
        Fi = function() {
            function t(t, e, i, r) {
                this.id = t, this.name = e, this.price = i, this.quantity = r
            }
            return t.from = function(e) {
                if (!t.isValid(e)) return null;
                var i = new t(e.id, e.name, parseFloat(e.price), parseInt(e.quantity, 10));
                return kt(e.sku) && (i.sku = e.sku), kt(e.category) && (i.category = e.category), i
            }, t.isValid = function(t) {
                return bt(t.id) && bt(t.name) && Tt(parseFloat(t.price)) && wt(parseInt(t.quantity, 10)) && (!kt(t.sku) || bt(t.sku)) && (!kt(t.category) || bt(t.category))
            }, t
        }(),
        Hi = function() {
            function t(t, e, i) {
                this.pii = t, this.transactionRequest = e, this.sessionRenewer = i, this.clear()
            }
            return t.prototype.addTransaction = function(t) {
                var e = this.pii.anonymizeFields(t, ["id"]);
                this.transaction = Bi.from(e)
            }, t.prototype.getTransaction = function() {
                return this.transaction
            }, t.prototype.sendTransaction = function() {
                this.sessionRenewer.isSessionValid() && (this.transaction.hasValidRevenue() ? this.transactionRequest.send() : xt.warn("Transaction Service: unable to send transaction with invalid parameters"))
            }, t.prototype.addItem = function(t) {
                if (!It(t)) {
                    var e = this.pii.anonymizeFields(t, ["id", "name", "sku", "category"]),
                        i = Fi.from(e);
                    null !== i && csArray.prototype.push.call(this.transactionItems, i)
                }
            }, t.prototype.getItems = function() {
                return this.transactionItems
            }, t.prototype.clear = function() {
                this.transaction = Bi.from({
                    revenue: NaN
                }), this.transactionItems = []
            }, t.prototype.getRequestParameters = function() {
                var t = {
                    id: this.transaction.id ? "" + this.transaction.id : "",
                    revenue: "" + this.transaction.revenue
                };
                return kt(this.transaction.tax) && (t.tax = "" + this.transaction.tax), kt(this.transaction.shipping) && (t.shipping = "" + this.transaction.shipping), kt(this.transaction.currency) && (t.cu = "" + this.transaction.currency), t.items = window.JSON.stringify(this.transactionItems), t
            }, t
        }(),
        ji = function() {
            function t(t) {
                this.skuItem = csString.prototype.slice.call(t, 0, 100)
            }
            return Object.defineProperty(t.prototype, "sku", {
                get: function() {
                    return this.skuItem
                },
                enumerable: !1,
                configurable: !0
            }), t
        }(),
        Gi = function() {
            function t(t, e) {
                this.cartItemRequest = t, this.sessionRenewer = e, this.cartItem = null
            }
            return t.prototype.addToCart = function(t) {
                this.isValidSku(t.sku) && (this.cartItem = new ji(t.sku), this.sendCartItem())
            }, t.prototype.isValidSku = function(t) {
                return bt(t) && t.length > 0
            }, t.prototype.getCartItem = function() {
                return this.cartItem
            }, t.prototype.sendCartItem = function() {
                this.sessionRenewer.isSessionValid() && this.cartItemRequest.send()
            }, t.prototype.clear = function() {
                this.cartItem = null
            }, t.prototype.getRequestParameters = function() {
                return this.cartItem ? {
                    sku: "" + this.cartItem.sku
                } : {}
            }, t
        }(),
        Wi = ["ecommerce:addToCart", "ec:cart:add"],
        Ki = ["ecommerce:addTransaction", "ec:transaction:create"],
        Yi = ["ecommerce:addItem", "ec:transaction:items:add"],
        Xi = ["ecommerce:send", "ec:transaction:send"],
        Ji = function() {
            function t(t, e, i, r, n, o, s) {
                this.configuration = t, this.visitorService = e, this.sessionService = i, this.commandsService = r, this.pii = n, this.sessionRenewer = o, this.urlService = s
            }
            return t.prototype.init = function() {
                var t = new tt(this.configuration.getTrackerUri(), "transaction"),
                    e = new tt(this.configuration.getTrackerUri(), "addtocart"),
                    i = new Hi(this.pii, t, this.sessionRenewer),
                    n = new Gi(e, this.sessionRenewer);
                t.setRequestParametersProviders(this.configuration, this.visitorService, this.sessionService, this.urlService, i, r), t.after((function() {
                    i.clear()
                })), e.setRequestParametersProviders(this.configuration, this.visitorService, this.sessionService, this.urlService, n, r), e.after((function() {
                    n.clear()
                })), this.commandsService.register(Ki, (function(t) {
                    i.addTransaction(t)
                })), this.commandsService.register(Yi, (function(t) {
                    return i.addItem(t)
                })), this.commandsService.register(Xi, (function() {
                    return i.sendTransaction()
                })), this.commandsService.register(Wi, (function(t) {
                    n.addToCart(t)
                }))
            }, t
        }(),
        Qi = function() {
            function t(t) {
                this.windowPerformance = t.performance
            }
            return t.prototype.getRequestParameters = function() {
                if (this.areTimingsUnavailable()) return {};
                var t = this.compute();
                return {
                    str: t.startRender,
                    di: t.domInteractive,
                    dc: t.domComplete,
                    fl: t.fullyLoaded
                }
            }, t.prototype.compute = function() {
                var t = this.windowPerformance.timing;
                return {
                    startRender: "" + (t.domLoading - t.requestStart),
                    domInteractive: "" + (t.domInteractive - t.requestStart),
                    domComplete: "" + (t.domComplete - t.requestStart),
                    fullyLoaded: "" + (t.loadEventEnd - t.requestStart)
                }
            }, t.prototype.areTimingsUnavailable = function() {
                return !(this.windowPerformance && this.windowPerformance.timing && this.windowPerformance.timing.loadEventEnd > 0)
            }, t
        }();

    function Zi(t) {
        return void 0 !== t.tgt
    }! function(t) {
        t[t.TAP = 0] = "TAP", t[t.LONG_PRESS = 1] = "LONG_PRESS", t[t.DRAG = 2] = "DRAG", t[t.FLICK = 3] = "FLICK"
    }(Li || (Li = {})),
    function(t) {
        t[t.UP = 1] = "UP", t[t.DOWN = 2] = "DOWN", t[t.LEFT = 3] = "LEFT", t[t.RIGHT = 4] = "RIGHT"
    }(xi || (xi = {})),
    function(t) {
        t[t.RESIZE = 0] = "RESIZE", t[t.SCROLL = 1] = "SCROLL", t[t.MOUSEMOVE = 2] = "MOUSEMOVE", t[t.MOUSEDOWN = 3] = "MOUSEDOWN", t[t.MOUSEUP = 4] = "MOUSEUP", t[t.CLICK = 5] = "CLICK", t[t.MOUSEOVER = 6] = "MOUSEOVER", t[t.MOUSEOUT = 7] = "MOUSEOUT", t[t.CHANGE = 10] = "CHANGE", t[t.FOCUSIN = 11] = "FOCUSIN", t[t.FOCUSOUT = 12] = "FOCUSOUT", t[t.TAP = 14] = "TAP", t[t.KEYDOWN = 15] = "KEYDOWN", t[t.KEYUP = 16] = "KEYUP", t[t.COMMAND = 17] = "COMMAND", t[t.SUBMIT = 18] = "SUBMIT", t[t.PERFORMANCE = 19] = "PERFORMANCE"
    }(_i || (_i = {})),
    function(t) {
        t.SUCCESS = "success", t.FAILURE = "failure", t.ATTEMPT = "attempt"
    }(Di || (Di = {}));
    var $i = function() {
            function t() {}
            return t.prototype.isEventTypeSupported = function(t) {
                return -1 !== csArray.prototype.indexOf.call(this.supportedEventTypes, t)
            }, t.prototype.enhanceAnalysisEvent = function(t, e) {
                return this.isEventTypeSupported(e.type) ? this.baseEnhanceAnalysisEvent(t, e) : e
            }, t
        }(),
        tr = function(t) {
            function e(e, i) {
                var r = t.call(this) || this;
                return r.projectConfiguration = e, r.pathComputation = i, r.supportedEventTypes = [_i.MOUSEDOWN, _i.MOUSEUP, _i.CLICK, _i.MOUSEOVER, _i.TAP], r
            }
            return W(e, t), e.prototype.baseEnhanceAnalysisEvent = function(t, e) {
                if (this.projectConfiguration.eMerchandisingEnabled) {
                    var i = this.pathComputation.getEventTargetPathAndTargetLink(t),
                        r = i.path,
                        n = i.targetLink;
                    e.tgt = r, e.tgtLk = n
                } else e.tgt = this.pathComputation.getEventTargetPath(t);
                return e
            }, e
        }($i),
        er = function() {
            function t() {}
            return t.build = function(t, e, i) {
                return csArray.prototype.reduce.call(i, (function(e, i) {
                    return i.enhanceAnalysisEvent(t, e)
                }), e)
            }, t
        }(),
        ir = function() {
            function t(t, e, i) {
                var r = this;
                this.configuration = t, this.pathComputation = e, this.gestureTracker = i, this.analysisEventsEnhancers = [new tr(this.configuration, this.pathComputation)], this.gestureTracker.onEvent((function(t, e) {
                    return r.onTap(t, e)
                }))
            }
            return t.prototype.onTap = function(t, e) {
                if (t.type === Li.TAP) {
                    var i = {
                            type: _i.TAP,
                            ts: 0,
                            x: 0,
                            y: 0,
                            tgt: ""
                        },
                        r = er.build(e, i, this.analysisEventsEnhancers);
                    r.tgt !== O.INVALID_ELEMENT && this.onEventCallback(r)
                }
            }, t.prototype.onEvent = function(t) {
                this.onEventCallback = t
            }, t.prototype.start = function() {
                this.gestureTracker.start()
            }, t.prototype.stop = function() {
                this.gestureTracker.stop()
            }, t
        }(),
        rr = function() {
            function t() {}
            return t.prototype.compute = function(t, e) {
                var i = this.convertPixelsToDPs(e.x) - this.convertPixelsToDPs(t.x),
                    r = this.convertPixelsToDPs(e.y) - this.convertPixelsToDPs(t.y),
                    n = e.time - t.time;
                return {
                    duration: n,
                    distance: this.computeGestureDistance(i, r),
                    direction: this.computeGestureDirection(i, r),
                    velocity: this.computeGestureVelocity(i, r, n)
                }
            }, t.prototype.convertPixelsToDPs = function(t) {
                return t / window.devicePixelRatio
            }, t.prototype.computeGestureDistance = function(t, e) {
                return Math.round(Math.sqrt(t * t + e * e))
            }, t.prototype.computeGestureVelocity = function(t, e, i) {
                var r = i / 1e3,
                    n = t / r,
                    o = e / r;
                return Math.round(Math.abs(n) + Math.abs(o))
            }, t.prototype.computeGestureDirection = function(t, e) {
                return Math.abs(t) > Math.abs(e) ? t > 0 ? xi.RIGHT : xi.LEFT : e > 0 ? xi.DOWN : xi.UP
            }, t
        }(),
        nr = function() {
            function t() {
                this.metricsComputer = new rr, this.reset()
            }
            return t.prototype.onGesture = function(t) {
                this.onGestureCallback = t
            }, t.prototype.isValidTouchEvent = function(t) {
                return "touches" in t && "changedTouches" in t
            }, t.prototype.processActionDown = function(t) {
                this.isValidTouchStart(t) && (this.isGestureStart(t) && this.reset(), csArray.prototype.push.call(this.pendingInputs, {
                    x: t.touches[0].pageX,
                    y: t.touches[0].pageY,
                    time: csDate.now()
                }), this.target = fe(t))
            }, t.prototype.processActionMove = function() {
                this.hasMove = !0
            }, t.prototype.processActionUp = function(t) {
                this.isValidTouchEnd(t) && (csArray.prototype.push.call(this.pendingInputs, {
                    x: t.changedTouches[0].pageX,
                    y: t.changedTouches[0].pageY,
                    time: csDate.now()
                }), this.isValidSingleTouchGesture() && this.runDetection(t))
            }, t.prototype.reset = function() {
                this.pendingInputs = [], this.target = null, this.hasMove = !1
            }, t.prototype.runDetection = function(t) {
                var e = this.metricsComputer.compute(this.pendingInputs[0], this.pendingInputs[1]),
                    i = this.hasMove ? this.computeSwipeGesture(e) : this.computePressGesture(e);
                this.onGestureCallback(i, t)
            }, t.prototype.computeSwipeGesture = function(t) {
                return {
                    type: t.velocity < 100 ? Li.DRAG : Li.FLICK,
                    target: this.target,
                    velocity: t.velocity,
                    distance: t.distance,
                    direction: t.direction
                }
            }, t.prototype.computePressGesture = function(t) {
                return {
                    type: t.duration < 1e3 ? Li.TAP : Li.LONG_PRESS,
                    target: this.target
                }
            }, t.prototype.isGestureStart = function(t) {
                return 1 === t.touches.length
            }, t.prototype.isValidSingleTouchGesture = function() {
                return 2 === this.pendingInputs.length
            }, t.prototype.isValidTouchStart = function(t) {
                return t.touches.length > 0
            }, t.prototype.isValidTouchEnd = function(t) {
                return t.changedTouches.length > 0
            }, t
        }(),
        or = function() {
            function t(t) {
                var e = this;
                this.logger = t, this.eventHandlers = [{
                    boundElement: document,
                    type: "touchstart",
                    listener: function(t) {
                        return e.processEvent(t)
                    }
                }, {
                    boundElement: document,
                    type: "touchmove",
                    listener: function(t) {
                        return e.processEvent(t)
                    }
                }, {
                    boundElement: document,
                    type: "touchend",
                    listener: function(t) {
                        return e.processEvent(t)
                    }
                }], this.detector = new nr
            }
            return t.prototype.onEvent = function(t) {
                this.detector.onGesture(t)
            }, t.prototype.start = function() {
                this.canDetectGesture() && csArray.prototype.forEach.call(this.eventHandlers, (function(t) {
                    return ue(t)
                }))
            }, t.prototype.stop = function() {
                this.canDetectGesture() && csArray.prototype.forEach.call(this.eventHandlers, (function(t) {
                    return pe(t)
                }))
            }, t.prototype.canDetectGesture = function() {
                return void 0 !== window.devicePixelRatio
            }, t.prototype.processEvent = function(t) {
                var e = this;
                this.logger.tryToExecute("process gesture event", (function() {
                    if (e.detector.isValidTouchEvent(t)) switch (t.type) {
                        case "touchstart":
                            e.detector.processActionDown(t);
                            break;
                        case "touchmove":
                            e.detector.processActionMove();
                            break;
                        case "touchend":
                            e.detector.processActionUp(t)
                    }
                }))()
            }, t.isSwipe = function(t) {
                return t.type === Li.FLICK || t.type === Li.DRAG
            }, t
        }();

    function sr(t, e) {
        var i, r, n, o, s = function() {
                r = null;
                var e = F.now() - n;
                o = t.apply(void 0, Q([e], i)), n = null
            },
            a = function() {
                for (var t = [], a = 0; a < arguments.length; a++) t[a] = arguments[a];
                return n || (n = F.now()), r && window.clearTimeout(r), i = Q(t), r = window.setTimeout(s, e), o
            };
        return a.flushPending = function() {
            r && (window.clearTimeout(r), s())
        }, a
    }
    var ar, cr;
    (cr = ar || (ar = {})).isEventOnScrollContainer = function(t) {
        return !!(At(t) && function(t) {
            try {
                if (At(csEventtarget.apply(t))) return !0
            } catch (t) {}
            return !1
        }(t) && Pt(csEventtarget.apply(t)) && null !== csEventtarget.apply(t).getAttribute("data-cs-scroll-container"))
    }, cr.getScrollContainer = function() {
        return document.querySelector("[data-cs-scroll-container]")
    };
    var ur;
    (ur || (ur = {})).getRelativePosition = function(t) {
        var e = fe(t);
        if (!(e && Pt(e) && It(e.getBoundingClientRect) && At(t.pageX) && At(t.pageY))) return {
            xRel: -1,
            yRel: -1,
            valid: !1
        };
        var i = e.getBoundingClientRect(),
            r = t.pageX - i.left - Oe.windowOffsetX(),
            n = t.pageY - i.top - Oe.windowOffsetY();
        e !== document.documentElement && (r += e.scrollLeft, n += e.scrollTop);
        var o = Math.max(e.scrollWidth, i.width),
            s = Math.max(e.scrollHeight, i.height);
        return {
            xRel: Math.round(r / o * 65535),
            yRel: Math.round(n / s * 65535),
            valid: !0
        }
    };
    var pr, lr = function(t) {
            function e(e, i) {
                var r = t.call(this) || this;
                return r.projectConfiguration = e, r.pathComputation = i, r.supportedEventTypes = [_i.MOUSEMOVE], r.currentMouseMovePath = "", r
            }
            return W(e, t), e.prototype.baseEnhanceAnalysisEvent = function(t, e) {
                if (!this.projectConfiguration.mouseMoveHeatmapEnabled) return e;
                var i = ur.getRelativePosition(t),
                    r = i.valid,
                    n = i.xRel,
                    o = i.yRel;
                if (r) {
                    var s = this.pathComputation.getEventTargetPath(t);
                    s !== O.INVALID_ELEMENT && (e.xRel = n, e.yRel = o, s !== this.currentMouseMovePath || this.projectConfiguration.iframesTracking ? (this.currentMouseMovePath = s, e.tgtHM = s) : e.tgtHM = "")
                } else this.currentMouseMovePath = "";
                return e
            }, e
        }($i),
        hr = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.supportedEventTypes = [_i.CHANGE], e.validInputTypes = ["text", "email", "number", "search", "tel", "url", "password"], e
            }
            return W(e, t), e.prototype.baseEnhanceAnalysisEvent = function(t, e) {
                var i = fe(t);
                return S(i) && csArray.prototype.indexOf.call(this.validInputTypes, i.type) >= 0 && (e.isBlank = "" === i.value), e
            }, e
        }($i),
        dr = function() {
            function t(t, e, i) {
                var r, n, o, s, a, c, u, p = this;
                this.projectConfiguration = t, this.pathComputation = e, this.selector = i, this.FOCUSABLE_ELEMENTS_SELECTOR = "select, select *, input, textarea", this.CHANGEABLE_ELEMENTS_SELECTOR = "select, select *, input, textarea", this.HOVERABLE_ELEMENTS_SELECTOR = "a, a *, button, button *, select, select *, input, textarea", this.KEYSTROKE_ELEMENTS_SELECTOR = "input, select, textarea", this.DEBOUNCE_DURATION = 150, this.THROTTLE_DURATION = 400, this.scrollContainerDimensionSent = !1, this.debouncedScrollEventCallback = sr((function(t, e) {
                    return p.scrollListener(t, e)
                }), this.DEBOUNCE_DURATION), this.debouncedResizeEventCallback = sr((function(t) {
                    return p.resizeListener(t)
                }), this.DEBOUNCE_DURATION), this.throttledMouseMoveCallback = (r = function(t) {
                    return p.mouseMoveListener(t)
                }, n = this.THROTTLE_DURATION, s = [], a = null, c = 0, u = function() {
                    c = F.now(), a = null, o = r.apply(void 0, s)
                }, function() {
                    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                    var i = F.now();
                    c || (c = i);
                    var p = n - (i - c);
                    return s = Q(t), p <= 0 || p > n ? (c = i, o = r.apply(void 0, s), a ? (window.clearTimeout(a), a = null) : s = []) : a || (a = window.setTimeout(u, p)), o
                }), this.globalHandlers = [{
                    boundElement: window,
                    type: "resize",
                    listener: function() {
                        return p.debouncedResizeEventCallback()
                    }
                }, {
                    boundElement: document,
                    type: "scroll",
                    listener: function(t) {
                        return p.debouncedScrollEventCallback(t)
                    }
                }, {
                    boundElement: window,
                    type: "mousemove",
                    listener: function(t) {
                        p.throttledMouseMoveCallback(p.preserveEventForAsyncUse(t))
                    }
                }, {
                    boundElement: document,
                    type: "mousedown",
                    listener: function(t) {
                        return p.mouseDownListener(t)
                    }
                }, {
                    boundElement: document,
                    type: "mouseup",
                    listener: function(t) {
                        return p.mouseUpListener(t)
                    }
                }, {
                    boundElement: document,
                    type: "click",
                    listener: function(t) {
                        return p.clickListener(t)
                    }
                }], this.onSelectorHandlers = [{
                    boundElement: document,
                    type: "mouseover",
                    listener: this.selector.on(this.HOVERABLE_ELEMENTS_SELECTOR, (function(t) {
                        return p.mouseOverListener(t)
                    }))
                }, {
                    boundElement: document,
                    type: "mouseout",
                    listener: this.selector.on(this.HOVERABLE_ELEMENTS_SELECTOR, (function(t) {
                        return p.mouseOutListener(t)
                    }))
                }, {
                    boundElement: document,
                    type: "focusin",
                    listener: this.selector.on(this.FOCUSABLE_ELEMENTS_SELECTOR, (function(t) {
                        return p.focusInListener(t)
                    }))
                }, {
                    boundElement: document,
                    type: "focusout",
                    listener: this.selector.on(this.FOCUSABLE_ELEMENTS_SELECTOR, (function(t) {
                        return p.focusOutListener(t)
                    }))
                }, {
                    boundElement: document,
                    type: "change",
                    listener: this.selector.on(this.CHANGEABLE_ELEMENTS_SELECTOR, (function(t) {
                        return p.changeListener(t)
                    }))
                }, {
                    boundElement: document,
                    type: "keyup",
                    listener: this.selector.on(this.KEYSTROKE_ELEMENTS_SELECTOR, (function(t) {
                        return p.keyUpListener(t)
                    }))
                }, {
                    boundElement: document,
                    type: "keydown",
                    listener: this.selector.on(this.KEYSTROKE_ELEMENTS_SELECTOR, (function(t) {
                        return p.keyDownListener(t)
                    }))
                }, {
                    boundElement: document,
                    type: "copy",
                    listener: this.selector.on(this.KEYSTROKE_ELEMENTS_SELECTOR, (function(t) {
                        return p.copyListener(t)
                    }))
                }, {
                    boundElement: document,
                    type: "cut",
                    listener: this.selector.on(this.KEYSTROKE_ELEMENTS_SELECTOR, (function(t) {
                        return p.cutListener(t)
                    }))
                }, {
                    boundElement: document,
                    type: "paste",
                    listener: this.selector.on(this.KEYSTROKE_ELEMENTS_SELECTOR, (function(t) {
                        return p.pasteListener(t)
                    }))
                }], this.analysisEventsEnhancers = [new tr(this.projectConfiguration, this.pathComputation), new lr(this.projectConfiguration, this.pathComputation), new hr], this.keyStrokeMap = {}, this.initKeyStrokesMap()
            }
            return t.prototype.onEvent = function(t) {
                this.onEventCallback = t
            }, t.prototype.start = function() {
                var t = this.getSupportedHandlers();
                csArray.prototype.forEach.call(t, (function(t) {
                    return ue(t)
                })), this.resizeListener()
            }, t.prototype.stop = function() {
                var t = this.getSupportedHandlers();
                csArray.prototype.forEach.call(t, (function(t) {
                    return pe(t)
                }))
            }, t.prototype.flushPendingDebouncedListeners = function() {
                this.debouncedScrollEventCallback.flushPending(), this.debouncedResizeEventCallback.flushPending()
            }, t.prototype.getSupportedHandlers = function() {
                return this.selector.isMatchesSelectorSupported() ? Q(this.globalHandlers, this.onSelectorHandlers) : (xt.warn("Element.matches is not implemented yet"), this.globalHandlers)
            }, t.prototype.resizeListener = function(t) {
                var e = ar.getScrollContainer(),
                    i = Pt(e);
                i && (this.scrollContainerDimensionSent = !0);
                var r = {
                    type: _i.RESIZE,
                    ts: 0,
                    x: i ? e.clientWidth : Oe.windowWidth(),
                    y: i ? e.clientHeight : Oe.windowHeight()
                };
                void 0 !== t && (r.d = t), this.onEventCallback(r)
            }, t.prototype.scrollListener = function(t, e) {
                var i = ar.isEventOnScrollContainer(e);
                !this.scrollContainerDimensionSent && i && this.resizeListener();
                var r = {
                        type: _i.SCROLL,
                        ts: 0,
                        x: i ? csEventtarget.apply(e).scrollLeft : Oe.windowOffsetX(),
                        y: i ? csEventtarget.apply(e).scrollTop : Oe.windowOffsetY(),
                        d: t
                    },
                    n = er.build(e, r, this.analysisEventsEnhancers);
                this.onEventCallback(n)
            }, t.prototype.mouseMoveListener = function(t) {
                var e = {
                        type: _i.MOUSEMOVE,
                        ts: 0,
                        x: t.pageX,
                        y: t.pageY
                    },
                    i = er.build(t, e, this.analysisEventsEnhancers);
                this.onEventCallback(i)
            }, t.prototype.mouseDownListener = function(t) {
                var e = {
                        type: _i.MOUSEDOWN,
                        ts: 0,
                        x: t.pageX,
                        y: t.pageY,
                        tgt: ""
                    },
                    i = er.build(t, e, this.analysisEventsEnhancers);
                this.onEventCallbackIfValidTarget(i)
            }, t.prototype.mouseUpListener = function(t) {
                var e = {
                        type: _i.MOUSEUP,
                        ts: 0,
                        x: t.pageX,
                        y: t.pageY,
                        tgt: ""
                    },
                    i = er.build(t, e, this.analysisEventsEnhancers);
                this.onEventCallbackIfValidTarget(i)
            }, t.prototype.clickListener = function(t) {
                var e = {
                        type: _i.CLICK,
                        ts: 0,
                        x: t.pageX,
                        y: t.pageY,
                        tgt: ""
                    },
                    i = er.build(t, e, this.analysisEventsEnhancers);
                this.onEventCallbackIfValidTarget(i)
            }, t.prototype.mouseOverListener = function(t) {
                var e = {
                        type: _i.MOUSEOVER,
                        ts: 0,
                        x: t.pageX,
                        y: t.pageY,
                        tgt: ""
                    },
                    i = er.build(t, e, this.analysisEventsEnhancers);
                this.onEventCallbackIfValidTarget(i)
            }, t.prototype.mouseOutListener = function(t) {
                var e = {
                        type: _i.MOUSEOUT,
                        ts: 0,
                        x: t.pageX,
                        y: t.pageY,
                        tgt: this.pathComputation.getEventTargetPath(t)
                    },
                    i = er.build(t, e, this.analysisEventsEnhancers);
                this.onEventCallbackIfValidTarget(i)
            }, t.prototype.focusInListener = function(t) {
                var e = {
                        type: _i.FOCUSIN,
                        ts: 0,
                        tgt: this.pathComputation.getEventTargetPath(t)
                    },
                    i = er.build(t, e, this.analysisEventsEnhancers);
                this.onEventCallbackIfValidTarget(i)
            }, t.prototype.focusOutListener = function(t) {
                var e = {
                        type: _i.FOCUSOUT,
                        ts: 0,
                        tgt: this.pathComputation.getEventTargetPath(t)
                    },
                    i = er.build(t, e, this.analysisEventsEnhancers);
                this.onEventCallbackIfValidTarget(i)
            }, t.prototype.changeListener = function(t) {
                var e = {
                        type: _i.CHANGE,
                        ts: 0,
                        tgt: this.pathComputation.getEventTargetPath(t)
                    },
                    i = er.build(t, e, this.analysisEventsEnhancers);
                this.onEventCallbackIfValidTarget(i)
            }, t.prototype.copyListener = function(t) {
                var e = {
                    type: _i.COMMAND,
                    ts: 0,
                    tgt: this.pathComputation.getEventTargetPath(t),
                    key: he.COPY
                };
                this.onEventCallbackIfValidTarget(e)
            }, t.prototype.cutListener = function(t) {
                var e = {
                    type: _i.COMMAND,
                    ts: 0,
                    tgt: this.pathComputation.getEventTargetPath(t),
                    key: he.CUT
                };
                this.onEventCallbackIfValidTarget(e)
            }, t.prototype.pasteListener = function(t) {
                var e = {
                    type: _i.COMMAND,
                    ts: 0,
                    tgt: this.pathComputation.getEventTargetPath(t),
                    key: he.PASTE
                };
                this.onEventCallbackIfValidTarget(e)
            }, t.prototype.keyUpListener = function(t) {
                var e = {
                    type: _i.KEYUP,
                    ts: 0,
                    tgt: this.pathComputation.getEventTargetPath(t),
                    key: this.computeKeystrokeKey(t)
                };
                this.onEventCallbackIfValidTarget(e)
            }, t.prototype.keyDownListener = function(t) {
                var e = {
                    type: _i.KEYDOWN,
                    ts: 0,
                    tgt: this.pathComputation.getEventTargetPath(t),
                    key: this.computeKeystrokeKey(t)
                };
                this.onEventCallbackIfValidTarget(e)
            }, t.prototype.computeKeystrokeKey = function(t) {
                var e = this.keyStrokeMap[t.key];
                return void 0 === e ? le.ALPHANUMERICAL : e
            }, t.prototype.onEventCallbackIfValidTarget = function(t) {
                Zi(t) && t.tgt !== O.INVALID_ELEMENT && this.onEventCallback(t)
            }, t.prototype.preserveEventForAsyncUse = function(t) {
                return t.composedPath && Object.defineProperty(t, "__csOriginalTarget", {
                    value: t.composedPath()[0],
                    writable: !1,
                    enumerable: !1
                }), t
            }, t.prototype.initKeyStrokesMap = function() {
                this.keyStrokeMap[" "] = le.SPACE, this.keyStrokeMap.Spacebar = le.SPACE, this.keyStrokeMap.Enter = le.ENTER, this.keyStrokeMap.Backspace = le.BACKSPACE, this.keyStrokeMap.Delete = le.DELETE, this.keyStrokeMap.ArrowUp = le.ARROWUP, this.keyStrokeMap.ArrowDown = le.ARROWDOWN, this.keyStrokeMap.ArrowLeft = le.ARROWLEFT, this.keyStrokeMap.ArrowRight = le.ARROWRIGHT, this.keyStrokeMap.Up = le.ARROWUP, this.keyStrokeMap.Down = le.ARROWDOWN, this.keyStrokeMap.Left = le.ARROWLEFT, this.keyStrokeMap.Right = le.ARROWRIGHT, this.keyStrokeMap.CapsLock = le.CAPSLOCK, this.keyStrokeMap.Shift = le.SHIFT, this.keyStrokeMap.Tab = le.TAB
            }, Y([_t("Event handler type: resize")], t.prototype, "resizeListener", null), Y([_t("Event handler type: scroll")], t.prototype, "scrollListener", null), Y([_t("Event handler type: mouseMove")], t.prototype, "mouseMoveListener", null), Y([_t("Event handler type: mouseDown")], t.prototype, "mouseDownListener", null), Y([_t("Event handler type: mouseUp")], t.prototype, "mouseUpListener", null), Y([_t("Event handler type: click")], t.prototype, "clickListener", null), Y([_t("Event handler type: mouseOver")], t.prototype, "mouseOverListener", null), Y([_t("Event handler type: mouseOut")], t.prototype, "mouseOutListener", null), Y([_t("Event handler type: focusIn")], t.prototype, "focusInListener", null), Y([_t("Event handler type: focusOut")], t.prototype, "focusOutListener", null), Y([_t("Event handler type: change")], t.prototype, "changeListener", null), Y([_t("Event handler type: copy")], t.prototype, "copyListener", null), Y([_t("Event handler type: cut")], t.prototype, "cutListener", null), Y([_t("Event handler type: paste")], t.prototype, "pasteListener", null), Y([_t("Event handler type: keyup")], t.prototype, "keyUpListener", null), Y([_t("Event handler type: keydown")], t.prototype, "keyDownListener", null), t
        }(),
        fr = function() {
            function t() {
                var t = this;
                this.MAX_SCROLL_RATE_THRESHOLD = 100, this.maxScrollRate = 0, this.maxDocumentHeight = Oe.documentHeight(), this.maxScrollRateHandler = {
                    boundElement: document,
                    type: "scroll",
                    listener: function(e) {
                        return t.maxScrollRateListener(e)
                    }
                }
            }
            return t.prototype.onEvent = function(t) {
                this.onEventCallback = t
            }, t.prototype.start = function() {
                ue(this.maxScrollRateHandler), this.reset()
            }, t.prototype.stop = function() {
                pe(this.maxScrollRateHandler)
            }, t.prototype.reset = function() {
                this.maxDocumentHeight = Oe.documentHeight();
                var t = ar.getScrollContainer();
                if (null === t) this.maxScrollRate = this.currentScrollRate(Oe.documentHeight());
                else {
                    var e = this.computePaddingTop(t);
                    this.maxScrollRate = this.currentScrollRateWithScrollContainer(t, e)
                }
                this.onEventCallback()
            }, t.prototype.maxScrollRateListener = function(t) {
                var e, i;
                if (ar.isEventOnScrollContainer(t)) {
                    var r = csEventtarget.apply(t),
                        n = this.computePaddingTop(r);
                    e = this.documentHeightWithScrollContainer(r, n), i = this.currentScrollRateWithScrollContainer(r, n)
                } else e = Oe.documentHeight(), i = this.currentScrollRate(e);
                (i > this.maxScrollRate || e > this.maxDocumentHeight) && (this.maxScrollRate = i, e > this.maxDocumentHeight && (this.maxDocumentHeight = e), this.onEventCallback())
            }, t.prototype.currentScrollRate = function(t) {
                var e = Math.round(this.lastPixelLine() / t * 100);
                return Math.min(e, this.MAX_SCROLL_RATE_THRESHOLD)
            }, t.prototype.lastPixelLine = function() {
                var t = Oe.windowHeight();
                return Oe.windowOffsetY() + t
            }, t.prototype.currentScrollRateWithScrollContainer = function(t, e) {
                var i = t.scrollTop + t.clientHeight + t.getBoundingClientRect().top + e,
                    r = this.documentHeightWithScrollContainer(t, e),
                    n = Math.round(i / r * 100);
                return Math.min(n, this.MAX_SCROLL_RATE_THRESHOLD)
            }, t.prototype.computePaddingTop = function(t) {
                var e = window.getComputedStyle(t).paddingTop || "0px";
                return parseInt(e, 10)
            }, t.prototype.documentHeightWithScrollContainer = function(t, e) {
                return t.scrollHeight + t.getBoundingClientRect().top + e
            }, t.prototype.getRequestParameters = function() {
                return {
                    sr: "" + this.maxScrollRate,
                    mdh: "" + this.maxDocumentHeight
                }
            }, Y([_t("MaxScrollRate handler")], t.prototype, "maxScrollRateListener", null), t
        }(),
        yr = function() {
            function t(t, e, i, r, n, o, s, a, c, u, p, l, h) {
                var d = this;
                this.configuration = t, this.analysisEventsTracker = e, this.gestureTracker = i, this.maxScrollRateTracker = r, this.performanceTimingMetrics = n, this.analysisEventsBatch = o, this.analysisEventsRequest = s, this.analysisLastEventsRequest = a, this.analysisEventRequestParameters = c, this.sessionRenewer = u, this.recoveryStorage = p, this.projectPathComputation = l, this.performanceTracker = h, this.eventEmitter = new Ce, this.sendLastEvents = function(t) {
                    try {
                        if (d.analysisEventsBatch.isEmpty()) return;
                        if (("pagehide" === t.type || "visibilitychange" === t.type) && "hidden" !== document.visibilityState) return;
                        d.analysisLastEventsRequest.send()
                    } catch (t) {}
                }
            }
            return t.prototype.init = function() {
                var t = this;
                this.analysisEventsTracker.onEvent((function(e) {
                    return t.processEvent(e)
                })), this.gestureTracker.onEvent((function(e) {
                    return t.processEvent(e)
                })), this.maxScrollRateTracker.onEvent((function() {
                    t.analysisEventsBatch.setRequestParametersFromProvider(t.maxScrollRateTracker)
                })), this.performanceTracker.onEvent((function(e) {
                    return t.processEvent(e)
                })), this.bindRequests()
            }, t.prototype.bindRequests = function() {
                var t = this;
                this.analysisEventsRequest.setRequestParametersProviders(this.analysisEventsBatch), this.analysisEventsRequest.before((function() {
                    t.analysisEventsBatch.setRequestParametersFromProvider(t.performanceTimingMetrics), t.analysisEventsBatch.enableCompression()
                })), this.analysisEventsRequest.after((function() {
                    t.analysisEventsBatch.setRequestParametersFromProvider(t.analysisEventRequestParameters)
                })), this.analysisEventsRequest.setRequestPayloadProvider(this.analysisEventsBatch), this.analysisEventsRequest.afterProvidersCalled((function() {
                    return t.analysisEventsBatch.clearEvents()
                })), this.analysisLastEventsRequest.setRequestParametersProviders(this.analysisEventsBatch), this.analysisLastEventsRequest.setRequestPayloadProvider(this.analysisEventsBatch), this.analysisLastEventsRequest.before((function() {
                    t.analysisEventsBatch.setRequestParametersFromProvider(t.performanceTimingMetrics), t.analysisEventsBatch.disableCompression()
                })), this.analysisLastEventsRequest.onBeaconSuccess((function() {
                    t.analysisEventsBatch.clearEvents(), t.analysisEventsBatch.setRequestParametersFromProvider(t.analysisEventRequestParameters)
                })), this.analysisLastEventsRequest.onBeaconFailure((function() {
                    t.saveLastEvents()
                }))
            }, t.prototype.initStates = function() {
                this.analysisEventsBatch.setRequestParametersFromProvider(this.analysisEventRequestParameters), this.resetStartTime()
            }, t.prototype.start = function(t) {
                this.addLastEventsListeners(), this.analysisEventsTracker.start(), this.maxScrollRateTracker.start(), this.gestureTracker.start(), t || this.performanceTracker.start()
            }, t.prototype.onIframeAnalysisEvent = function(t) {
                this.processEvent(t)
            }, t.prototype.processEvent = function(t) {
                this.sessionRenewer.isSessionValid() && (this.analysisEventsBatch.addEvent(this.addTimestamp(t)), this.analysisEventsBatch.isFull() && this.sendEvents(), this.configuration.emitDebugEvents && this.eventEmitter.emit("analysisEvent", K(K({}, t), {
                    typeName: _i[t.type]
                })))
            }, t.prototype.addTimestamp = function(t) {
                return t.ts = this.getRelativeTime(), t
            }, t.prototype.sendEvents = function() {
                this.analysisEventsBatch.isEmpty() || this.analysisEventsRequest.send()
            }, t.prototype.stop = function() {
                this.removeLastEventsListeners(), this.analysisEventsTracker.stop(), this.maxScrollRateTracker.stop(), this.gestureTracker.stop(), this.performanceTracker.stop(), this.analysisEventsBatch.empty()
            }, t.prototype.clearStates = function() {
                this.analysisEventsTracker.flushPendingDebouncedListeners(), this.sendEvents(), this.maxScrollRateTracker.reset(), this.performanceTracker.stop()
            }, t.prototype.resetStartTime = function() {
                this.startTime = F.now()
            }, t.prototype.getRelativeTime = function() {
                return F.now() - this.startTime
            }, t.prototype.addLastEventsListeners = function() {
                this.addVisibilityChangeListener(), this.addPageHideListener(), this.addBlurListener()
            }, t.prototype.removeLastEventsListeners = function() {
                this.removeVisibilityChangeListener(), this.removePageHideListener(), this.removeBlurListener()
            }, t.prototype.addVisibilityChangeListener = function() {
                document.addEventListener("visibilitychange", this.sendLastEvents)
            }, t.prototype.removeVisibilityChangeListener = function() {
                document.removeEventListener("visibilitychange", this.sendLastEvents)
            }, t.prototype.addPageHideListener = function() {
                window.addEventListener("pagehide", this.sendLastEvents)
            }, t.prototype.removePageHideListener = function() {
                window.removeEventListener("pagehide", this.sendLastEvents)
            }, t.prototype.addBlurListener = function() {
                window.addEventListener("blur", this.sendLastEvents)
            }, t.prototype.removeBlurListener = function() {
                window.removeEventListener("blur", this.sendLastEvents)
            }, t.prototype.saveLastEvents = function() {
                try {
                    this.analysisEventsBatch.isEmpty() || this.recoveryStorage.save({
                        events: this.analysisEventsBatch.getEvents(),
                        metadata: this.analysisEventsBatch.getMetadata()
                    })
                } catch (t) {}
            }, t.prototype.pushSubmitEvent = function(t, e) {
                if (function(t) {
                        return t === Di.SUCCESS || t === Di.FAILURE || t === Di.ATTEMPT
                    }(t))
                    if (Pt(e)) {
                        var i = {
                            status: t,
                            type: _i.SUBMIT,
                            ts: 0,
                            tgt: this.projectPathComputation.getElementPath(e)
                        };
                        i.tgt !== O.INVALID_ELEMENT && this.processEvent(i)
                    } else xt.warn("AnalysisEvents Service: invalid element: " + e);
                else xt.warn("AnalysisEvents Service: invalid submit status: " + t)
            }, t
        }();
    ! function(t) {
        t.UNCOMPRESSED = "0", t.BASE64 = "1"
    }(pr || (pr = {}));
    var vr = gr.toString(),
        mr = gr();

    function gr() {
        var t = {
            _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
            _f: String.fromCharCode,
            compressToBase64: function(e) {
                if (null == e) return "";
                var i, r, n, o, s, a, c, u = "",
                    p = 0;
                for (e = t.compress(e); p < 2 * e.length;) p % 2 == 0 ? (i = e.charCodeAt(p / 2) >> 8, r = 255 & e.charCodeAt(p / 2), n = p / 2 + 1 < e.length ? e.charCodeAt(p / 2 + 1) >> 8 : NaN) : (i = 255 & e.charCodeAt((p - 1) / 2), (p + 1) / 2 < e.length ? (r = e.charCodeAt((p + 1) / 2) >> 8, n = 255 & e.charCodeAt((p + 1) / 2)) : r = n = NaN), p += 3, o = i >> 2, s = (3 & i) << 4 | r >> 4, a = (15 & r) << 2 | n >> 6, c = 63 & n, isNaN(r) ? a = c = 64 : isNaN(n) && (c = 64), u = u + t._keyStr.charAt(o) + t._keyStr.charAt(s) + t._keyStr.charAt(a) + t._keyStr.charAt(c);
                return u
            },
            decompressFromBase64: function(e) {
                if (null == e) return "";
                var i, r, n, o, s, a, c, u = "",
                    p = 0,
                    l = 0,
                    h = t._f;
                for (e = e.replace(/[^A-Za-z0-9\+\/\=]/g, ""); l < e.length;) r = t._keyStr.indexOf(e.charAt(l++)) << 2 | (s = t._keyStr.indexOf(e.charAt(l++))) >> 4, n = (15 & s) << 4 | (a = t._keyStr.indexOf(e.charAt(l++))) >> 2, o = (3 & a) << 6 | (c = t._keyStr.indexOf(e.charAt(l++))), p % 2 == 0 ? (i = r << 8, 64 != a && (u += h(i | n)), 64 != c && (i = o << 8)) : (u += h(i | r), 64 != a && (i = n << 8), 64 != c && (u += h(i | o))), p += 3;
                return t.decompress(u)
            },
            compressToUTF16: function(e) {
                if (null == e) return "";
                var i, r, n, o = "",
                    s = 0,
                    a = t._f;
                for (e = t.compress(e), i = 0; i < e.length; i++) switch (r = e.charCodeAt(i), s++) {
                    case 0:
                        o += a(32 + (r >> 1)), n = (1 & r) << 14;
                        break;
                    case 1:
                        o += a(n + (r >> 2) + 32), n = (3 & r) << 13;
                        break;
                    case 2:
                        o += a(n + (r >> 3) + 32), n = (7 & r) << 12;
                        break;
                    case 3:
                        o += a(n + (r >> 4) + 32), n = (15 & r) << 11;
                        break;
                    case 4:
                        o += a(n + (r >> 5) + 32), n = (31 & r) << 10;
                        break;
                    case 5:
                        o += a(n + (r >> 6) + 32), n = (63 & r) << 9;
                        break;
                    case 6:
                        o += a(n + (r >> 7) + 32), n = (127 & r) << 8;
                        break;
                    case 7:
                        o += a(n + (r >> 8) + 32), n = (255 & r) << 7;
                        break;
                    case 8:
                        o += a(n + (r >> 9) + 32), n = (511 & r) << 6;
                        break;
                    case 9:
                        o += a(n + (r >> 10) + 32), n = (1023 & r) << 5;
                        break;
                    case 10:
                        o += a(n + (r >> 11) + 32), n = (2047 & r) << 4;
                        break;
                    case 11:
                        o += a(n + (r >> 12) + 32), n = (4095 & r) << 3;
                        break;
                    case 12:
                        o += a(n + (r >> 13) + 32), n = (8191 & r) << 2;
                        break;
                    case 13:
                        o += a(n + (r >> 14) + 32), n = (16383 & r) << 1;
                        break;
                    case 14:
                        o += a(n + (r >> 15) + 32, 32 + (32767 & r)), s = 0
                }
                return o + a(n + 32)
            },
            decompressFromUTF16: function(e) {
                if (null == e) return "";
                for (var i, r, n = "", o = 0, s = 0, a = t._f; s < e.length;) {
                    switch (r = e.charCodeAt(s) - 32, o++) {
                        case 0:
                            i = r << 1;
                            break;
                        case 1:
                            n += a(i | r >> 14), i = (16383 & r) << 2;
                            break;
                        case 2:
                            n += a(i | r >> 13), i = (8191 & r) << 3;
                            break;
                        case 3:
                            n += a(i | r >> 12), i = (4095 & r) << 4;
                            break;
                        case 4:
                            n += a(i | r >> 11), i = (2047 & r) << 5;
                            break;
                        case 5:
                            n += a(i | r >> 10), i = (1023 & r) << 6;
                            break;
                        case 6:
                            n += a(i | r >> 9), i = (511 & r) << 7;
                            break;
                        case 7:
                            n += a(i | r >> 8), i = (255 & r) << 8;
                            break;
                        case 8:
                            n += a(i | r >> 7), i = (127 & r) << 9;
                            break;
                        case 9:
                            n += a(i | r >> 6), i = (63 & r) << 10;
                            break;
                        case 10:
                            n += a(i | r >> 5), i = (31 & r) << 11;
                            break;
                        case 11:
                            n += a(i | r >> 4), i = (15 & r) << 12;
                            break;
                        case 12:
                            n += a(i | r >> 3), i = (7 & r) << 13;
                            break;
                        case 13:
                            n += a(i | r >> 2), i = (3 & r) << 14;
                            break;
                        case 14:
                            n += a(i | r >> 1), i = (1 & r) << 15;
                            break;
                        case 15:
                            n += a(i | r), o = 0
                    }
                    s++
                }
                return t.decompress(n)
            },
            compressToUint8Array: function(e) {
                for (var i = t.compress(e), r = new Uint8Array(2 * i.length), n = 0, o = i.length; n < o; n++) {
                    var s = i.charCodeAt(n);
                    r[2 * n] = s >>> 8, r[2 * n + 1] = s % 256
                }
                return r
            },
            decompressFromUint8Array: function(e) {
                if (null == e) return t.decompress(e);
                for (var i = new Array(e.length / 2), r = 0, n = i.length; r < n; r++) i[r] = 256 * e[2 * r] + e[2 * r + 1];
                return t.decompress(String.fromCharCode.apply(null, i))
            },
            compressToEncodedURIComponent: function(e) {
                return t.compressToBase64(e).replace("=", "$").replace("/", "-")
            },
            decompressFromEncodedURIComponent: function(e) {
                return e && (e = e.replace("$", "=").replace("-", "/")), t.decompressFromBase64(e)
            },
            compress: function(e) {
                if (null == e) return "";
                var i, r, n, o = {},
                    s = {},
                    a = "",
                    c = "",
                    u = "",
                    p = 2,
                    l = 3,
                    h = 2,
                    d = "",
                    f = 0,
                    y = 0,
                    v = t._f;
                for (n = 0; n < e.length; n += 1)
                    if (a = e.charAt(n), Object.prototype.hasOwnProperty.call(o, a) || (o[a] = l++, s[a] = !0), c = u + a, Object.prototype.hasOwnProperty.call(o, c)) u = c;
                    else {
                        if (Object.prototype.hasOwnProperty.call(s, u)) {
                            if (u.charCodeAt(0) < 256) {
                                for (i = 0; i < h; i++) f <<= 1, 15 == y ? (y = 0, d += v(f), f = 0) : y++;
                                for (r = u.charCodeAt(0), i = 0; i < 8; i++) f = f << 1 | 1 & r, 15 == y ? (y = 0, d += v(f), f = 0) : y++, r >>= 1
                            } else {
                                for (r = 1, i = 0; i < h; i++) f = f << 1 | r, 15 == y ? (y = 0, d += v(f), f = 0) : y++, r = 0;
                                for (r = u.charCodeAt(0), i = 0; i < 16; i++) f = f << 1 | 1 & r, 15 == y ? (y = 0, d += v(f), f = 0) : y++, r >>= 1
                            }
                            0 == --p && (p = Math.pow(2, h), h++), delete s[u]
                        } else
                            for (r = o[u], i = 0; i < h; i++) f = f << 1 | 1 & r, 15 == y ? (y = 0, d += v(f), f = 0) : y++, r >>= 1;
                        0 == --p && (p = Math.pow(2, h), h++), o[c] = l++, u = String(a)
                    }
                if ("" !== u) {
                    if (Object.prototype.hasOwnProperty.call(s, u)) {
                        if (u.charCodeAt(0) < 256) {
                            for (i = 0; i < h; i++) f <<= 1, 15 == y ? (y = 0, d += v(f), f = 0) : y++;
                            for (r = u.charCodeAt(0), i = 0; i < 8; i++) f = f << 1 | 1 & r, 15 == y ? (y = 0, d += v(f), f = 0) : y++, r >>= 1
                        } else {
                            for (r = 1, i = 0; i < h; i++) f = f << 1 | r, 15 == y ? (y = 0, d += v(f), f = 0) : y++, r = 0;
                            for (r = u.charCodeAt(0), i = 0; i < 16; i++) f = f << 1 | 1 & r, 15 == y ? (y = 0, d += v(f), f = 0) : y++, r >>= 1
                        }
                        0 == --p && (p = Math.pow(2, h), h++), delete s[u]
                    } else
                        for (r = o[u], i = 0; i < h; i++) f = f << 1 | 1 & r, 15 == y ? (y = 0, d += v(f), f = 0) : y++, r >>= 1;
                    0 == --p && (p = Math.pow(2, h), h++)
                }
                for (r = 2, i = 0; i < h; i++) f = f << 1 | 1 & r, 15 == y ? (y = 0, d += v(f), f = 0) : y++, r >>= 1;
                for (;;) {
                    if (f <<= 1, 15 == y) {
                        d += v(f);
                        break
                    }
                    y++
                }
                return d
            },
            decompress: function(e) {
                if (null == e) return "";
                if ("" == e) return null;
                var i, r, n, o, s, a, c, u = [],
                    p = 4,
                    l = 4,
                    h = 3,
                    d = "",
                    f = "",
                    y = t._f,
                    v = {
                        string: e,
                        val: e.charCodeAt(0),
                        position: 32768,
                        index: 1
                    };
                for (i = 0; i < 3; i += 1) u[i] = i;
                for (n = 0, s = Math.pow(2, 2), a = 1; a != s;) o = v.val & v.position, v.position >>= 1, 0 == v.position && (v.position = 32768, v.val = v.string.charCodeAt(v.index++)), n |= (o > 0 ? 1 : 0) * a, a <<= 1;
                switch (n) {
                    case 0:
                        for (n = 0, s = Math.pow(2, 8), a = 1; a != s;) o = v.val & v.position, v.position >>= 1, 0 == v.position && (v.position = 32768, v.val = v.string.charCodeAt(v.index++)), n |= (o > 0 ? 1 : 0) * a, a <<= 1;
                        c = y(n);
                        break;
                    case 1:
                        for (n = 0, s = Math.pow(2, 16), a = 1; a != s;) o = v.val & v.position, v.position >>= 1, 0 == v.position && (v.position = 32768, v.val = v.string.charCodeAt(v.index++)), n |= (o > 0 ? 1 : 0) * a, a <<= 1;
                        c = y(n);
                        break;
                    case 2:
                        return ""
                }
                for (u[3] = c, r = f = c;;) {
                    if (v.index > v.string.length) return "";
                    for (n = 0, s = Math.pow(2, h), a = 1; a != s;) o = v.val & v.position, v.position >>= 1, 0 == v.position && (v.position = 32768, v.val = v.string.charCodeAt(v.index++)), n |= (o > 0 ? 1 : 0) * a, a <<= 1;
                    switch (c = n) {
                        case 0:
                            for (n = 0, s = Math.pow(2, 8), a = 1; a != s;) o = v.val & v.position, v.position >>= 1, 0 == v.position && (v.position = 32768, v.val = v.string.charCodeAt(v.index++)), n |= (o > 0 ? 1 : 0) * a, a <<= 1;
                            u[l++] = y(n), c = l - 1, p--;
                            break;
                        case 1:
                            for (n = 0, s = Math.pow(2, 16), a = 1; a != s;) o = v.val & v.position, v.position >>= 1, 0 == v.position && (v.position = 32768, v.val = v.string.charCodeAt(v.index++)), n |= (o > 0 ? 1 : 0) * a, a <<= 1;
                            u[l++] = y(n), c = l - 1, p--;
                            break;
                        case 2:
                            return f
                    }
                    if (0 == p && (p = Math.pow(2, h), h++), u[c]) d = u[c];
                    else {
                        if (c !== l) return null;
                        d = r + r.charAt(0)
                    }
                    f += d, u[l++] = r + d.charAt(0), r = d, 0 == --p && (p = Math.pow(2, h), h++)
                }
            }
        };
        return t
    }
    var Sr = function() {
            function t(t) {
                var e = t.events,
                    i = void 0 === e ? [] : e,
                    r = t.requestParameters,
                    n = void 0 === r ? {} : r,
                    o = t.debugService;
                this.compressed = !0, this.events = [], this.requestParameters = {}, this.events = i, this.requestParameters = n, this.debugService = o
            }
            return t.prototype.getRequestPayload = function() {
                return this.isCompressed() ? mr.compressToBase64(csJSON.stringify(this.events)) : csJSON.stringify(this.events)
            }, t.prototype.addEvent = function(t) {
                csArray.prototype.push.call(this.events, t)
            }, t.prototype.setRequestParametersFromProvider = function(t) {
                var e = t.getRequestParameters();
                for (var i in e) e.hasOwnProperty(i) && (this.requestParameters[i] = e[i])
            }, t.prototype.eventsCount = function() {
                return this.events.length
            }, t.prototype.clearEvents = function() {
                this.events = []
            }, t.prototype.empty = function() {
                this.clearEvents()
            }, t.prototype.isFull = function() {
                return this.eventsCount() >= 50
            }, t.prototype.isEmpty = function() {
                return 0 === this.events.length
            }, t.prototype.getEvents = function() {
                return this.events
            }, t.prototype.getMetadata = function() {
                return this.requestParameters
            }, t.prototype.getRequestParameters = function() {
                return K(K({}, this.requestParameters), {
                    ct: this.isCompressed() ? pr.BASE64 : pr.UNCOMPRESSED
                })
            }, t.prototype.enableCompression = function() {
                this.compressed = !0
            }, t.prototype.disableCompression = function() {
                this.compressed = !1
            }, t.prototype.isCompressed = function() {
                return this.compressed && !this.debugService.isCompressionDisabled()
            }, t
        }(),
        Er = function() {
            function t(t, e, i) {
                var r = this;
                this.analysisEventsRecoveryRequest = t, this.recoveryStorage = e, this.debugService = i, this.visibilityChangeHandler = function() {
                    "visible" === document.visibilityState && r.sendPersistedRecordings()
                }
            }
            return t.prototype.start = function() {
                this.sendPersistedRecordings(), this.addVisibilityChangeListener()
            }, t.prototype.stop = function() {
                this.removeVisibilityChangeListener()
            }, t.prototype.getRecoveryStorage = function() {
                return this.recoveryStorage
            }, t.prototype.sendPersistedRecordings = function() {
                var t = this.recoveryStorage.recover();
                if (null !== t) {
                    var e = t,
                        i = e.metadata,
                        r = e.events,
                        n = new Sr({
                            events: r,
                            requestParameters: i,
                            debugService: this.debugService
                        });
                    this.analysisEventsRecoveryRequest.setRequestParametersProviders(n), this.analysisEventsRecoveryRequest.before((function() {
                        n.enableCompression()
                    })), this.analysisEventsRecoveryRequest.setRequestPayloadProvider(n), this.analysisEventsRecoveryRequest.afterProvidersCalled((function() {
                        return n.clearEvents()
                    })), this.analysisEventsRecoveryRequest.send()
                }
            }, t.prototype.addVisibilityChangeListener = function() {
                document.addEventListener("visibilitychange", this.visibilityChangeHandler)
            }, t.prototype.removeVisibilityChangeListener = function() {
                document.removeEventListener("visibilitychange", this.visibilityChangeHandler)
            }, t
        }();
    var Cr, Tr, wr, br, Rr = function() {
            function t(t) {
                this.storageName = t
            }
            return t.prototype.save = function(t) {
                localStorage.setItem(this.storageName, csJSON.stringify(t))
            }, t.prototype.clear = function() {
                localStorage.removeItem(this.storageName)
            }, t.prototype.recover = function() {
                var t = localStorage.getItem(this.storageName);
                if (null === t) return null;
                var e = null;
                try {
                    e = csJSON.parse(t)
                } catch (e) {
                    xt.error("Invalid item in localStorage.\n         (key:" + this.storageName + "; value:" + t + ")")
                } finally {
                    this.clear()
                }
                return e
            }, t
        }(),
        kr = function() {
            function t(t) {
                var e = this;
                this.webVitalsProvider = t, this.metricHandler = function(t) {
                    return e.processMetric(t)
                }, this.isStarted = !1
            }
            return t.prototype.onEvent = function(t) {
                this.onEventCallback = t
            }, t.prototype.start = function() {
                this.isStarted || (this.isStarted = !0, this.webVitalsProvider.onFCP(this.metricHandler), this.webVitalsProvider.onCLS(this.metricHandler), this.webVitalsProvider.onFID(this.metricHandler), this.webVitalsProvider.onLCP(this.metricHandler), this.webVitalsProvider.onTTFB(this.metricHandler))
            }, t.prototype.stop = function() {
                this.isStarted = !1
            }, t.prototype.processMetric = function(t) {
                if (this.isStarted) {
                    var e = {
                        type: _i.PERFORMANCE,
                        name: t.name,
                        val: t.value,
                        ts: 0
                    };
                    this.onEventCallback(e)
                }
            }, Y([_t("Performance metric handler")], t.prototype, "processMetric", null), t
        }(),
        Ar = function(t, e) {
            return {
                name: t,
                value: void 0 === e ? -1 : e,
                delta: 0,
                entries: [],
                id: "v2-".concat(Date.now(), "-").concat(Math.floor(8999999999999 * Math.random()) + 1e12)
            }
        },
        Ir = function(t, e) {
            try {
                if (PerformanceObserver.supportedEntryTypes.includes(t)) {
                    if ("first-input" === t && !("PerformanceEventTiming" in self)) return;
                    var i = new PerformanceObserver((function(t) {
                        return t.getEntries().map(e)
                    }));
                    return i.observe({
                        type: t,
                        buffered: !0
                    }), i
                }
            } catch (t) {}
        },
        Pr = function(t, e) {
            var i = function i(r) {
                "pagehide" !== r.type && "hidden" !== document.visibilityState || (t(r), e && (removeEventListener("visibilitychange", i, !0), removeEventListener("pagehide", i, !0)))
            };
            addEventListener("visibilitychange", i, !0), addEventListener("pagehide", i, !0)
        },
        Nr = function(t) {
            addEventListener("pageshow", (function(e) {
                e.persisted && t(e)
            }), !0)
        },
        Mr = function(t, e, i) {
            var r;
            return function(n) {
                e.value >= 0 && (n || i) && (e.delta = e.value - (r || 0), (e.delta || void 0 === r) && (r = e.value, t(e)))
            }
        },
        Or = -1,
        Lr = function() {
            return "hidden" === document.visibilityState ? 0 : 1 / 0
        },
        xr = function() {
            Pr((function(t) {
                var e = t.timeStamp;
                Or = e
            }), !0)
        },
        _r = function() {
            return Or < 0 && (Or = Lr(), xr(), Nr((function() {
                setTimeout((function() {
                    Or = Lr(), xr()
                }), 0)
            }))), {
                get firstHiddenTime() {
                    return Or
                }
            }
        },
        Dr = function(t, e) {
            var i, r = _r(),
                n = Ar("FCP"),
                o = function(t) {
                    "first-contentful-paint" === t.name && (a && a.disconnect(), t.startTime < r.firstHiddenTime && (n.value = t.startTime, n.entries.push(t), i(!0)))
                },
                s = window.performance && performance.getEntriesByName && performance.getEntriesByName("first-contentful-paint")[0],
                a = s ? null : Ir("paint", o);
            (s || a) && (i = Mr(t, n, e), s && o(s), Nr((function(r) {
                n = Ar("FCP"), i = Mr(t, n, e), requestAnimationFrame((function() {
                    requestAnimationFrame((function() {
                        n.value = performance.now() - r.timeStamp, i(!0)
                    }))
                }))
            })))
        },
        Vr = !1,
        Ur = -1,
        qr = {
            passive: !0,
            capture: !0
        },
        zr = new Date,
        Br = function(t, e) {
            Cr || (Cr = e, Tr = t, wr = new Date, jr(removeEventListener), Fr())
        },
        Fr = function() {
            if (Tr >= 0 && Tr < wr - zr) {
                var t = {
                    entryType: "first-input",
                    name: Cr.type,
                    target: Cr.target,
                    cancelable: Cr.cancelable,
                    startTime: Cr.timeStamp,
                    processingStart: Cr.timeStamp + Tr
                };
                br.forEach((function(e) {
                    e(t)
                })), br = []
            }
        },
        Hr = function(t) {
            if (t.cancelable) {
                var e = (t.timeStamp > 1e12 ? new Date : performance.now()) - t.timeStamp;
                "pointerdown" == t.type ? function(t, e) {
                    var i = function() {
                            Br(t, e), n()
                        },
                        r = function() {
                            n()
                        },
                        n = function() {
                            removeEventListener("pointerup", i, qr), removeEventListener("pointercancel", r, qr)
                        };
                    addEventListener("pointerup", i, qr), addEventListener("pointercancel", r, qr)
                }(e, t) : Br(e, t)
            }
        },
        jr = function(t) {
            ["mousedown", "keydown", "touchstart", "pointerdown"].forEach((function(e) {
                return t(e, Hr, qr)
            }))
        },
        Gr = {},
        Wr = function() {
            function t() {}
            return t.prototype.onFCP = function(t) {
                Dr(t, !0)
            }, t.prototype.onCLS = function(t) {
                ! function(t, e) {
                    Vr || (Dr((function(t) {
                        Ur = t.value
                    })), Vr = !0);
                    var i, r = function(e) {
                            Ur > -1 && t(e)
                        },
                        n = Ar("CLS", 0),
                        o = 0,
                        s = [],
                        a = function(t) {
                            if (!t.hadRecentInput) {
                                var e = s[0],
                                    r = s[s.length - 1];
                                o && t.startTime - r.startTime < 1e3 && t.startTime - e.startTime < 5e3 ? (o += t.value, s.push(t)) : (o = t.value, s = [t]), o > n.value && (n.value = o, n.entries = s, i())
                            }
                        },
                        c = Ir("layout-shift", a);
                    c && (i = Mr(r, n, e), Pr((function() {
                        c.takeRecords().map(a), i(!0)
                    })), Nr((function() {
                        o = 0, Ur = -1, n = Ar("CLS", 0), i = Mr(r, n, e)
                    })))
                }(t, !0)
            }, t.prototype.onFID = function(t) {
                ! function(t, e) {
                    var i, r = _r(),
                        n = Ar("FID"),
                        o = function(t) {
                            t.startTime < r.firstHiddenTime && (n.value = t.processingStart - t.startTime, n.entries.push(t), i(!0))
                        },
                        s = Ir("first-input", o);
                    i = Mr(t, n, e), s && Pr((function() {
                        s.takeRecords().map(o), s.disconnect()
                    }), !0), s && Nr((function() {
                        var r;
                        n = Ar("FID"), i = Mr(t, n, e), br = [], Tr = -1, Cr = null, jr(addEventListener), r = o, br.push(r), Fr()
                    }))
                }(t, !0)
            }, t.prototype.onLCP = function(t) {
                ! function(t, e) {
                    var i, r = _r(),
                        n = Ar("LCP"),
                        o = function(t) {
                            var e = t.startTime;
                            e < r.firstHiddenTime && (n.value = e, n.entries.push(t), i())
                        },
                        s = Ir("largest-contentful-paint", o);
                    if (s) {
                        i = Mr(t, n, e);
                        var a = function() {
                            Gr[n.id] || (s.takeRecords().map(o), s.disconnect(), Gr[n.id] = !0, i(!0))
                        };
                        ["keydown", "click"].forEach((function(t) {
                            addEventListener(t, a, {
                                once: !0,
                                capture: !0
                            })
                        })), Pr(a, !0), Nr((function(r) {
                            n = Ar("LCP"), i = Mr(t, n, e), requestAnimationFrame((function() {
                                requestAnimationFrame((function() {
                                    n.value = performance.now() - r.timeStamp, Gr[n.id] = !0, i(!0)
                                }))
                            }))
                        }))
                    }
                }(t, !0)
            }, t.prototype.onTTFB = function(t) {
                ! function(t) {
                    var e, i = Ar("TTFB");
                    e = function() {
                        try {
                            var e = performance.getEntriesByType("navigation")[0] || function() {
                                var t = performance.timing,
                                    e = {
                                        entryType: "navigation",
                                        startTime: 0
                                    };
                                for (var i in t) "navigationStart" !== i && "toJSON" !== i && (e[i] = Math.max(t[i] - t.navigationStart, 0));
                                return e
                            }();
                            if (i.value = i.delta = e.responseStart, i.value < 0 || i.value > performance.now()) return;
                            i.entries = [e], t(i)
                        } catch (t) {}
                    }, "complete" === document.readyState ? setTimeout(e, 0) : addEventListener("load", (function() {
                        return setTimeout(e, 0)
                    }))
                }(t)
            }, t
        }(),
        Kr = ["submit"],
        Yr = function() {
            function t(t, e, i, r, n, o, s, a, c) {
                this.configuration = t, this.visitorService = e, this.sessionService = i, this.projectPathComputation = r, this.selector = n, this.commandsService = o, this.sessionRenewer = s, this.iframeEventsEmitter = a, this.debugService = c
            }
            return t.prototype.init = function() {
                var t = this;
                ! function() {
                    localStorage.removeItem("csLegacyRecovered");
                    for (var t = [], e = 0; e < localStorage.length; e += 1) {
                        var i = localStorage.key(e);
                        0 === csString.prototype.indexOf.call(i, "CSStorageData") && csArray.prototype.push.call(t, i)
                    }
                    csArray.prototype.forEach.call(t, (function(t) {
                        return localStorage.removeItem(t)
                    }))
                }();
                var e = new Sr({
                    debugService: this.debugService
                });
                this.analysisEventsRecovery = this.createRecovery(), this.analysisEventsService = this.createService(e, this.analysisEventsRecovery.getRecoveryStorage()), this.analysisEventsService.init(), this.iframeEventsEmitter.addListeners(this.analysisEventsService), this.commandsService.register(Kr, (function(e, i) {
                    t.analysisEventsService.pushSubmitEvent(e, i)
                }))
            }, t.prototype.onStartTracking = function(t) {
                this.analysisEventsRecovery.start(), this.analysisEventsService.start(t)
            }, t.prototype.onAfterNaturalPageView = function() {
                this.analysisEventsService.initStates()
            }, t.prototype.onAfterArtificialPageView = function() {
                this.analysisEventsService.initStates()
            }, t.prototype.onBeforeArtificialPageView = function() {
                this.analysisEventsService.clearStates()
            }, t.prototype.onBeforeSessionRenewal = function() {
                this.analysisEventsService.clearStates(), this.analysisEventsService.stop(), this.analysisEventsRecovery.stop()
            }, t.prototype.onOptout = function() {
                this.analysisEventsService.stop(), this.analysisEventsRecovery.stop()
            }, t.prototype.createService = function(t, e) {
                var i = new Qi(window),
                    n = new fr,
                    o = new dr(this.configuration, this.projectPathComputation, this.selector),
                    s = new ir(this.configuration, this.projectPathComputation, new or(xt)),
                    a = new kr(new Wr),
                    c = new ce(this.configuration.getTrackerUri(), "v2/events"),
                    u = new hi(this.configuration.getTrackerUri(), "v2/events"),
                    p = new ze(this.configuration, this.visitorService, this.sessionService, n, i, r);
                return new yr(this.configuration, o, s, n, i, t, c, u, p, this.sessionRenewer, e, this.projectPathComputation, a)
            }, t.prototype.createRecovery = function() {
                var t = new ce(this.configuration.getTrackerUri(), "v2/events");
                return new Er(t, new Rr("csAnalysisEventsPersisted"), this.debugService)
            }, t
        }(),
        Xr = function(t) {
            function e(e, i, r) {
                var n = t.call(this) || this;
                return n.lifeCycleEventsEmitter = e, n.pageViewRequest = i, n.urlService = r, n
            }
            return W(e, t), e.prototype.init = function() {
                this.addPageShowListener()
            }, e.prototype.onStart = function() {
                this.sendNaturalPageView()
            }, e.prototype.onStop = function() {}, e.prototype.triggerArtificialPageView = function(t) {
                this.urlService.overridePath(t), this.isStarted && this.sendArtificialPageView()
            }, e.prototype.sendNaturalPageView = function() {
                this.lifeCycleEventsEmitter.emitBeforeNaturalPageView(), this.pageViewRequest.send(), this.lifeCycleEventsEmitter.emitAfterNaturalPageView()
            }, e.prototype.sendArtificialPageView = function() {
                this.lifeCycleEventsEmitter.emitArtificialPageViewEnd(), this.lifeCycleEventsEmitter.emitBeforeArtificialPageView(), this.pageViewRequest.send(), this.lifeCycleEventsEmitter.emitAfterArtificialPageView()
            }, e.prototype.addPageShowListener = function() {
                var t = this;
                window.addEventListener("pageshow", (function(e) {
                    t.isStarted && e.persisted && t.sendArtificialPageView()
                }))
            }, e
        }(Te),
        Jr = window.navigator.language || window.navigator.userLanguage || window.navigator.browserLanguage || window.navigator.systemLanguage || "unknown";

    function Qr() {
        return {
            la: Jr
        }
    }
    var Zr, $r = function() {
            function t(t) {
                this.pii = t
            }
            return t.prototype.getRequestParameters = function() {
                return {
                    dr: this.get()
                }
            }, t.prototype.get = function() {
                return this.pii.anonymize(this.getReferrer())
            }, t.prototype.getReferrer = function() {
                var t = "";
                try {
                    t = window.top.document.referrer
                } catch (e) {
                    if (window.parent) try {
                        t = window.parent.document.referrer
                    } catch (e) {
                        t = ""
                    }
                }
                return "" === t && (t = document.referrer), t
            }, t
        }(),
        tn = ["trackPageview"],
        en = ["setPath"],
        rn = ["setQuery"],
        nn = function() {
            function t(t, e, i, r, n, o, s, a, c) {
                this.configuration = t, this.commandsService = e, this.lifeCycleEventsEmitter = i, this.visitorService = r, this.sessionService = n, this.consentService = o, this.customVariablesService = s, this.pii = a, this.urlService = c
            }
            return t.prototype.init = function() {
                var t = this,
                    e = new tt(this.configuration.getTrackerUri(), "pageview");
                this.pageViewService = new Xr(this.lifeCycleEventsEmitter, e, this.urlService), this.pageViewService.init(), e.setRequestParametersProviders(this.configuration, this.visitorService, this.sessionService, Oe, new $r(this.pii), this.urlService, this.consentService, n, this.customVariablesService, r), this.commandsService.register(tn, (function(e) {
                    return t.pageViewService.triggerArtificialPageView(e)
                })), this.commandsService.register(en, (function(e) {
                    return t.urlService.overridePath(e)
                })), this.commandsService.register(rn, (function(e) {
                    return t.urlService.overrideQuery(e)
                }))
            }, t.prototype.start = function() {
                this.pageViewService.start()
            }, t.prototype.onBeforeSessionRenewal = function() {
                this.pageViewService.stop()
            }, t
        }(),
        on = function() {
            function t(t, e) {
                this.pathComputation = t, this.configuration = e
            }
            return t.prototype.getEventTargetPath = function(t) {
                var e = fe(t);
                return this.pathComputation.getElementPath(e, K({
                    dynamicIdRegex: this.configuration.dynamicIdRegex
                }, this.configuration.pathComputationRules))
            }, t.prototype.getEventTargetPathAndTargetLink = function(t) {
                var e = fe(t),
                    i = this.pathComputation.getElementPathAndFirstAnchorParent(e, K({
                        dynamicIdRegex: this.configuration.dynamicIdRegex
                    }, this.configuration.pathComputationRules)),
                    r = i.path,
                    n = i.firstAnchorParent;
                return {
                    path: r,
                    targetLink: this.hasValidTargetLink(n) ? n.href : ""
                }
            }, t.prototype.hasValidEventTarget = function(t) {
                var e = fe(t);
                return this.pathComputation.isValidElement(e)
            }, t.prototype.getElementPath = function(t) {
                return this.pathComputation.getElementPath(t, K({
                    dynamicIdRegex: this.configuration.dynamicIdRegex
                }, this.configuration.pathComputationRules))
            }, t.prototype.hasValidTargetLink = function(t) {
                return null !== t && t.hasAttribute("href") && !U(t.getAttribute("href"), "#")
            }, t
        }(),
        sn = function() {
            function t(t) {
                this.pathComputation = t
            }
            return t.prototype.on = function(t, e) {
                var i = this;
                return function(r) {
                    i.pathComputation.hasValidEventTarget(r) && i.targetMatchesSelector(r, t) && e(r)
                }
            }, t.prototype.targetMatchesSelector = function(t, e) {
                var i = fe(t);
                return R.call(i, e)
            }, t.prototype.isMatchesSelectorSupported = function() {
                return !!R
            }, t
        }(),
        an = function() {
            function t() {}
            return t.prototype.onLoad = function(t) {
                this.onLoadCallback = t
            }, t.prototype.onLoadCallbackExecute = function() {
                this.onLoadCallback()
            }, t.prototype.start = function() {
                var t = this.onLoadCallbackExecute.bind(this);
                this.onDocumentLoaded(t)
            }, t.prototype.onDocumentLoaded = function(t) {
                function e() {
                    document.removeEventListener("DOMContentLoaded", e), window.removeEventListener("load", e), t()
                }
                "complete" === document.readyState || "loading" !== document.readyState && !document.documentElement.doScroll ? setTimeout(t) : (document.addEventListener("DOMContentLoaded", e), window.addEventListener("load", e))
            }, Y([_t("onLoad")], t.prototype, "onLoadCallbackExecute", null), t
        }(),
        cn = ["clearSession"],
        un = ["extendSession"],
        pn = function() {
            function t(t, e, i) {
                this.visitorService = t, this.sessionService = e, this.commandsService = i
            }
            return t.prototype.init = function() {
                var t = this;
                this.commandsService.register(cn, (function() {
                    return t.sessionService.removeSession()
                })), this.commandsService.register(un, (function() {
                    return t.sessionService.extendSessionPeriodically()
                }))
            }, t.prototype.onBeforeNaturalPageView = function() {
                this.visitorService.createOrUpdateVisitor(), this.sessionService.createOrUpdateSession()
            }, t.prototype.onBeforeArtificialPageView = function() {
                this.sessionService.abortQuotaServiceRequest(), this.visitorService.createOrUpdateVisitor(), this.sessionService.createOrUpdateSession()
            }, t.prototype.onOptout = function() {
                this.visitorService.removeVisitor(), this.sessionService.removeSession()
            }, t.prototype.onRecordingStateChange = function(t, e) {
                this.sessionService.updateRecordingState(t, e)
            }, t
        }(),
        ln = function() {
            function t(t) {
                this.sessionService = t
            }
            return t.prototype.onSessionExpired = function(t) {
                this.onSessionExpiredCallback = t
            }, t.prototype.isSessionValid = function() {
                var t = this.sessionService.hasValidSession();
                return !t && this.canRenewSession() ? (this.lastSessionRenewalTime = F.now(), this.onSessionExpiredCallback(), this.sessionService.hasValidSession()) : t
            }, t.prototype.canRenewSession = function() {
                return !kt(this.lastSessionRenewalTime) || F.now() - this.lastSessionRenewalTime > 6e4
            }, t
        }(),
        hn = function() {
            function t(t, e, i) {
                this.eMerchandisingRequest = t, this.urlService = e, this.eMerchandisingTracker = i, this.requestPayload = {
                    targetUrl: "",
                    windowWidth: 0,
                    windowHeight: 0,
                    products: []
                }
            }
            return t.prototype.init = function() {
                var t = this;
                this.eMerchandisingRequest.afterProvidersCalled((function() {
                    t.requestPayload.products = []
                })), this.eMerchandisingRequest.setRequestPayloadProvider({
                    getRequestPayload: function() {
                        return csJSON.stringify(t.requestPayload)
                    }
                })
            }, t.prototype.collect = function() {
                this.requestPayload = {
                    targetUrl: this.urlService.getUrl(),
                    windowWidth: Oe.windowWidth(),
                    windowHeight: Oe.windowHeight(),
                    products: this.eMerchandisingTracker.collectProducts()
                }, this.sendEMerchandisingData()
            }, t.prototype.onIframeEmerchandisingMessage = function(t) {
                this.requestPayload = t, this.sendEMerchandisingData()
            }, t.prototype.sendEMerchandisingData = function() {
                this.eMerchandisingRequest.send()
            }, t
        }(),
        dn = function() {
            function t(t) {
                this.configuration = t
            }
            return t.prototype.collectProducts = function() {
                for (var t = [], e = 0, i = this.getAllValidAnchors(this.configuration.hostnames); e < i.length; e++) {
                    var r = i[e],
                        n = O.getElementPath(r, {
                            dynamicIdRegex: this.configuration.dynamicIdRegex
                        });
                    csArray.prototype.push.call(t, {
                        targetPath: n,
                        href: r.href
                    })
                }
                return t
            }, t.prototype.getAllValidAnchors = function(t) {
                var e = this;
                return csArray.prototype.filter.call(ui.findAllElements("a"), (function(i) {
                    return e.isAnchorValid(i, t)
                }))
            }, t.prototype.isAnchorValid = function(t, e) {
                var i = dt(t.href);
                return t.offsetWidth > 0 && t.offsetHeight > 0 && "" !== i && ft(i, e)
            }, t
        }(),
        fn = ["emerch:collect"],
        yn = function() {
            function t(t, e, i, r, n, o, s) {
                this.configuration = t, this.compressor = e, this.basicRequestParameters = i, this.customVariablesService = r, this.urlService = n, this.iframeEventsEmitter = o, this.commandsService = s
            }
            return t.prototype.init = function() {
                var t = this.createEMerchandisingPostRequest(this.compressor),
                    e = new dn(this.configuration);
                this.eMerchandisingService = new hn(t, this.urlService, e), this.eMerchandisingService.init(), this.iframeEventsEmitter.addListeners(this.eMerchandisingService)
            }, t.prototype.registerCommands = function() {
                var t = this;
                this.commandsService.register(fn, (function() {
                    t.eMerchandisingService.collect()
                }))
            }, t.prototype.onStartTracking = function() {
                this.eMerchandisingService.collect(), this.registerCommands()
            }, t.prototype.onAfterArtificialPageView = function() {
                this.eMerchandisingService.collect()
            }, t.prototype.createEMerchandisingPostRequest = function(t) {
                var e = new ce(this.configuration.getTrackerUri(), "display");
                return e.setCompressionOptions(t, "base64"), e.setRequestParametersProviders(this.basicRequestParameters, this.customVariablesService), e.setRequestHeader({
                    name: "Access-Control-Expose-Headers",
                    value: "Content-compression"
                }), e.setRequestHeader({
                    name: "Content-type",
                    value: "text/plain; charset=UTF-8"
                }), e.setRequestHeader({
                    name: "Content-compression",
                    value: "LZString"
                }), e
            }, t
        }();

    function vn(t) {
        return t.tagDeploymentMode === Zr.DualCollectionReview || t.tagDeploymentMode === Zr.DualCollection
    }! function(t) {
        t.ContentSquare = "CONTENTSQUARE", t.LoadedByClicktale = "LOADED_BY_CLICKTALE", t.LoadClicktalePtc = "LOAD_CLICKTALE_PTC", t.DualCollectionReview = "DUAL_COLLECTION_REVIEW", t.DualCollection = "DUAL_COLLECTION"
    }(Zr || (Zr = {}));
    var mn, gn = function() {
        function t(t, e, i, r) {
            this.configuration = t, this.visitorService = e, this.sessionService = i, this.piiMaskingService = r
        }
        return t.prototype.init = function() {
            this.isClicktalePtcLoaded = !1, this.isContentSquareDataCollectionStarted = !1
        }, t.prototype.loadClicktalePtc = function() {
            !this.isClicktalePtcLoaded && this.configuration.ptcDomain && this.configuration.ptcGuid && this.doLoadClicktalePtc()
        }, t.prototype.getSessionData = function() {
            var t = this.configuration.projectId,
                e = this.visitorService.getVisitor();
            return {
                projectId: t,
                userId: e.id,
                sessionNumber: e.visitsCount,
                pageNumber: this.sessionService.getSession().pageNumber
            }
        }, t.prototype.startDataCollection = function(t) {
            this.isContentSquareDataCollectionStarted || (this.configuration.tagDeploymentMode === Zr.LoadClicktalePtc && this.isReplayRecordedInMalka() && this.piiMaskingService.initCTPII(), vn(this.configuration) && (this.piiMaskingService.initCTPII(), t(), this.isContentSquareDataCollectionStarted = !0))
        }, t.prototype.isReplayRecordedInMalka = function() {
            return this.configuration.useMalkaPipeline && this.sessionService.isReplayRecorded()
        }, t.prototype.doLoadClicktalePtc = function() {
            this.isClicktalePtcLoaded = !0;
            var t = this.buildScriptElement();
            document.getElementsByTagName("head")[0].appendChild(t)
        }, t.prototype.buildScriptElement = function() {
            var t = document.createElementNS("http://www.w3.org/1999/xhtml", "script");
            return t.async = !0, t.crossOrigin = "anonymous", t.type = "text/javascript", this.configuration.ptcSha512 && this.configuration.ptcSnapshotPath ? (t.integrity = "sha512-" + this.configuration.ptcSha512, t.src = "https://" + this.configuration.ptcDomain + "/" + this.configuration.ptcSnapshotPath + "/ptc.js") : t.src = "https://" + this.configuration.ptcDomain + "/ptc/" + this.configuration.ptcGuid + ".js", t
        }, t
    }();
    ! function(t) {
        t.isRecording = function() {
            return window.ClickTaleIsRecording && window.ClickTaleIsRecording()
        }, t.stopRecording = function() {
            window.ClickTaleStop && window.ClickTaleStop()
        }, t.triggerLogicalPageView = function(t) {
            window.ClickTaleLogicalWithUploadPage && window.ClickTaleLogicalWithUploadPage(t)
        }, t.sendPageEvent = function(t) {
            window.ClickTaleEvent && window.ClickTaleEvent(t)
        }, t.sendEventTriggerRecording = function(t) {
            window.ClickTaleEventTrigger && window.ClickTaleEventTrigger(t)
        }
    }(mn || (mn = {}));
    var Sn, En = function() {
            function t(t, e, i, r, n, o, s) {
                this.configuration = t, this.visitorService = e, this.sessionService = i, this.urlService = r, this.commandsService = n, this.startDataCollectionCallback = o, this.piiMaskingService = s
            }
            return t.prototype.init = function() {
                var t = this;
                this.clicktaleIntegrationService = new gn(this.configuration, this.visitorService, this.sessionService, this.piiMaskingService), this.clicktaleIntegrationService.init(), this.loadPtcForDualCollection(), this.commandsService.register(["getSessionData"], (function() {
                    return t.clicktaleIntegrationService.getSessionData()
                })), this.commandsService.register(["startDataCollection"], (function() {
                    t.clicktaleIntegrationService.startDataCollection(t.startDataCollectionCallback)
                }))
            }, t.prototype.loadPtcForDualCollection = function() {
                vn(this.configuration) && this.clicktaleIntegrationService.loadClicktalePtc()
            }, t.prototype.onAfterNaturalPageView = function() {
                this.configuration.tagDeploymentMode === Zr.LoadClicktalePtc && (!this.configuration.useMalkaPipeline && this.sessionService.isReplayRecorded() || this.clicktaleIntegrationService.loadClicktalePtc())
            }, t.prototype.onAfterArtificialPageView = function() {
                !this.sessionService.isReplayRecorded() && mn.isRecording() && this.configuration.tagDeploymentMode === Zr.LoadClicktalePtc && mn.triggerLogicalPageView(this.urlService.getUrl())
            }, t.prototype.onAfterSessionRenewal = function() {
                !this.sessionService.isReplayRecorded() && mn.isRecording() && mn.triggerLogicalPageView(this.urlService.getUrl())
            }, t.prototype.onOptout = function() {
                mn.isRecording() && mn.stopRecording()
            }, t
        }(),
        Cn = function(t) {
            function e(e, i, r, n, o) {
                var s = t.call(this) || this;
                return s.configuration = e, s.pageEventRequest = i, s.compressor = r, s.customEventsEmitter = n, s.hashHelper = o, s.pageEventsQueue = [], s.etrQueue = [], s
            }
            return W(e, t), e.prototype.onStart = function() {
                var t = this;
                csArray.prototype.forEach.call(this.pageEventsQueue, (function(e) {
                    return t.trackPageEvent(e)
                })), this.pageEventsQueue = [], csArray.prototype.forEach.call(this.etrQueue, (function(e) {
                    return t.trackEventTriggerRecording(e)
                })), this.etrQueue = []
            }, e.prototype.onStop = function() {}, e.prototype.trackPageEvent = function(t) {
                this.isStarted ? e.isValidEventName(t) && (this.isUserIdentifierEvent(t) ? this.hashHelper.isSupported() && this.trackEventWithUserIdentifier(t) : this.trackEvent(t)) : csArray.prototype.push.call(this.pageEventsQueue, t)
            }, e.prototype.isUserIdentifierEvent = function(t) {
                return U(t, "@user-identifier@")
            }, e.prototype.trackEventWithUserIdentifier = function(t) {
                return X(this, void 0, void 0, (function() {
                    var e, i;
                    return J(this, (function(r) {
                        switch (r.label) {
                            case 0:
                                return this.configuration.customHashIdEnabled ? (e = csString.prototype.slice.call(t, "@user-identifier@".length), this.hashHelper.isValidInput(e) ? [4, this.hashHelper.digest(e, this.configuration.projectId)] : (xt.warn("UserIdentifier event: invalid user identifier"), [2])) : [2];
                            case 1:
                                return (i = r.sent()) ? (this.pageEventRequestParameter = {
                                    eventName: i,
                                    isETR: !1,
                                    isCustomHashId: !0
                                }, this.sendPageEvent()) : xt.warn("Page event: unable to compute customHashId"), this.configuration.recordingEncryptionEnabled ? (this.customEventsEmitter.emitUserIdentifierEvent(e), [2]) : [2]
                        }
                    }))
                }))
            }, e.prototype.trackEvent = function(t) {
                this.customEventsEmitter.emitPageEvent(t), this.pageEventRequestParameter = {
                    eventName: t,
                    isETR: !1,
                    isCustomHashId: !1
                }, this.sendPageEvent(), this.configuration.tagDeploymentMode === Zr.LoadClicktalePtc && mn.sendPageEvent(t)
            }, e.prototype.trackEventTriggerRecording = function(t) {
                this.isStarted ? e.isValidEventName(t) && (this.configuration.useMalkaPipeline && this.configuration.malkaEtrEnabled ? this.trackMalkaEventTriggerRecording(t) : this.trackLegacyEventTriggerRecording(t)) : csArray.prototype.push.call(this.etrQueue, t)
            }, e.prototype.trackMalkaEventTriggerRecording = function(t) {
                U(t, "@ETP@") ? this.customEventsEmitter.emitEventTriggerRecording(t, Ht.ETR_PAGE) : this.customEventsEmitter.emitEventTriggerRecording(t, Ht.ETR_SESSION), this.pageEventRequestParameter = {
                    eventName: t,
                    isETR: !0,
                    isCustomHashId: !1
                }, this.sendPageEvent()
            }, e.prototype.trackLegacyEventTriggerRecording = function(t) {
                var e;
                (vn(e = this.configuration) || e.tagDeploymentMode === Zr.LoadClicktalePtc) && (this.customEventsEmitter.emitEventTriggerRecording(t, Ht.ETR_LEGACY), this.pageEventRequestParameter = {
                    eventName: t,
                    isETR: !0,
                    isCustomHashId: !1
                }, this.sendPageEvent(), this.configuration.tagDeploymentMode === Zr.LoadClicktalePtc && mn.sendEventTriggerRecording(t))
            }, e.prototype.getRequestParameters = function() {
                return {
                    value: this.compressor.compressSync(this.pageEventRequestParameter.eventName),
                    isETR: "" + this.pageEventRequestParameter.isETR,
                    isCustomHashId: "" + this.pageEventRequestParameter.isCustomHashId
                }
            }, e.prototype.sendPageEvent = function() {
                this.pageEventRequest.send()
            }, e.isValidEventName = function(t) {
                return bt(t) && !!csString.prototype.trim.call(t)
            }, e
        }(Te),
        Tn = ["trackPageEvent"],
        wn = ["trackEventTriggerRecording"],
        bn = function() {
            function t(t, e, i, r, n) {
                this.configuration = t, this.commandsService = e, this.compressor = i, this.basicParameters = r, this.customEventsEmitter = n
            }
            return t.prototype.init = function() {
                var t = this,
                    e = new tt(this.configuration.getTrackerUri(), "pageEvent"),
                    i = new Ti(window.crypto);
                i.init(), this.pageEventService = new Cn(this.configuration, e, this.compressor, this.customEventsEmitter, i), e.setRequestParametersProviders(this.pageEventService, this.basicParameters), this.commandsService.register(Tn, (function(e) {
                    t.pageEventService.trackPageEvent(e)
                })), this.commandsService.register(wn, (function(e) {
                    t.pageEventService.trackEventTriggerRecording(e)
                }))
            }, t.prototype.onStartTracking = function() {
                this.pageEventService.start()
            }, t
        }(),
        Rn = [".ctHidden, textarea"],
        kn = function() {
            function t(t) {
                this.configuration = t, this.piiMaskSelectors = {
                    PIISelectors: [],
                    Attributes: []
                }, vn(this.configuration) || csArray.prototype.push.call(this.piiMaskSelectors.PIISelectors, "[data-cs-mask]")
            }
            return t.prototype.setPIISelectors = function(t) {
                var e;
                !vn(this.configuration) && t && ((null === (e = t.PIISelectors) || void 0 === e ? void 0 : e.length) && (this.piiMaskSelectors.PIISelectors = Q(this.piiMaskSelectors.PIISelectors, t.PIISelectors)), this.piiMaskSelectors.Attributes = t.Attributes instanceof Array ? Q(t.Attributes) : [])
            }, t.prototype.initCTPII = function() {
                var t, e, i = this;
                (null === (e = null === (t = null === window || void 0 === window ? void 0 : window.ClickTaleSettings) || void 0 === t ? void 0 : t.DOM) || void 0 === e ? void 0 : e.PII) && (this.piiMaskSelectors.PIISelectors = Q(Rn, window.ClickTaleSettings.DOM.PII.Text), csArray.prototype.map.call(window.ClickTaleSettings.DOM.PII.Attributes, (function(t) {
                    csArray.prototype.push.call(i.piiMaskSelectors.Attributes, {
                        selector: t.rule,
                        attrName: t.attr
                    })
                })))
            }, t.prototype.isElementMatchingSelectors = function(t, e) {
                return csArray.prototype.some.call(e, (function(e) {
                    return R.call(t, e)
                }))
            }, t.prototype.isElementMatchingAttributes = function(t, e, i) {
                return csArray.prototype.some.call(i, (function(i) {
                    return t.hasAttribute(e) && csString.prototype.indexOf.call(i.attrName, e) > -1 && R.call(t, i.selector)
                }))
            }, t.prototype.checkAttributeMatch = function(t, e) {
                return 0 !== this.piiMaskSelectors.Attributes.length && this.isElementMatchingAttributes(t, e, this.piiMaskSelectors.Attributes)
            }, t.prototype.checkNodeMatch = function(t) {
                return this.isElementMatchingSelectors(t, this.piiMaskSelectors.PIISelectors)
            }, t
        }(),
        An = function() {
            function t(t) {
                this.commandsService = t
            }
            return t.prototype.init = function() {
                this.registerSnippetErrorCommand(t.IMPLEMENTATION_SNIPPETS_LOG_COMMAND, "implementation-snippet-"), this.registerSnippetErrorCommand(t.DYNAMIC_SNIPPETS_LOG_COMMAND, "snippet-")
            }, t.prototype.registerSnippetErrorCommand = function(t, e) {
                this.commandsService.register([t], (function(t, i) {
                    bt(t) && bt(i) && xt.error(i, "" + e + t)
                }))
            }, t.DYNAMIC_SNIPPETS_LOG_COMMAND = "logSnippetError", t.IMPLEMENTATION_SNIPPETS_LOG_COMMAND = "logImplementationSnippetError", t
        }(),
        In = function() {
            function t(t, e, i) {
                this.configuration = t, this.iframeParentToChildrenCommunicationService = e, this.iframeEventsEmitter = i
            }
            return t.prototype.init = function() {
                var t = this;
                this.iframeParentToChildrenCommunicationService.onChildMessage((function(e, i, r, n) {
                    return t.iframeEventsEmitter.emitIframeEvent(e, i, r, n)
                }))
            }, t.prototype.onStartTracking = function() {
                this.configuration.iframesTracking && this.iframeParentToChildrenCommunicationService.start()
            }, t.prototype.onOptout = function() {
                this.configuration.iframesTracking && this.iframeParentToChildrenCommunicationService.stop()
            }, t
        }(),
        Pn = function(t) {
            function e(e) {
                var i = t.call(this) || this;
                return i.configuration = e, i.iframes = [], i.messageHandler = {
                    boundElement: window,
                    type: "message",
                    listener: function(t) {
                        return i.messagesListener(t)
                    }
                }, i
            }
            return W(e, t), e.prototype.onChildMessage = function(t) {
                this.onChildMessageCallback = t
            }, e.prototype.sendToChildren = function(t, e) {
                var i = gt.buildBaseMessage(t, vt.Parent, this.configuration.projectId);
                i.content = e, this.sendMessageToChildren(i)
            }, e.prototype.onStart = function() {
                ue(this.messageHandler, !1), this.discoverValidIframes()
            }, e.prototype.onStop = function() {
                this.sendStopMessages(), pe(this.messageHandler, !1)
            }, e.prototype.discoverValidIframes = function() {
                this.iframes = this.getAllValidIframes(), this.sendDiscoveryMessages()
            }, e.prototype.getAllValidIframes = function() {
                var t = this;
                return csArray.prototype.filter.call(ui.findAllElements("iframe"), (function(e) {
                    return t.isIframeValid(e)
                }))
            }, e.prototype.isIframeValid = function(t) {
                return "cs-native-frame" !== t.id && (!t.src || ft(dt(t.src), this.configuration.hostnames))
            }, e.prototype.sendMessageToChildren = function(t) {
                csArray.prototype.forEach.call(this.iframes, (function(e) {
                    e.contentWindow && gt.sendMessage(e.contentWindow, "*", t)
                }))
            }, e.prototype.sendDiscoveryMessages = function() {
                var t = this;
                csArray.prototype.forEach.call(this.iframes, (function(e, i) {
                    e.contentWindow && gt.sendMessage(e.contentWindow, "*", t.buildDiscoveryMessage(i))
                }))
            }, e.prototype.sendStopMessages = function() {
                this.sendMessageToChildren(this.buildStopMessage())
            }, e.prototype.buildDiscoveryMessage = function(t) {
                return gt.buildBaseMessage(mt.Discovery, vt.Parent, this.configuration.projectId, t)
            }, e.prototype.buildStopMessage = function() {
                return gt.buildBaseMessage(mt.Stop, vt.Parent, this.configuration.projectId)
            }, e.prototype.messagesListener = function(t) {
                if (gt.isMessageValid(t, vt.Child, this.configuration.projectId, this.configuration.hostnames))
                    if (void 0 !== t.data.id || t.data.type !== mt.Discovery)
                        if (wt(t.data.id) && void 0 !== this.iframes[t.data.id] || t.data.type === mt.ChildLogMessage) {
                            var e = this.iframes[t.data.id],
                                i = O.getElementPath(e, {
                                    dynamicIdRegex: this.configuration.dynamicIdRegex
                                }),
                                r = t.data.type,
                                n = t.data.content;
                            this.onChildMessageCallback(e, i, r, n)
                        } else xt.error("Parent received data from unknown iframe : " + csJSON.stringify(t.data));
                else this.discoverValidIframes()
            }, e
        }(Te),
        Nn = function() {
            function t(t, e, i, r, n, o, s, a, c, u, p, l, h, d, f, y, v, m, g, S, E, C, T, w) {
                var b = this;
                this.basicRequestParameters = t, this.compressor = e, this.visitorService = i, this.sessionService = r, this.lifeCycleEventsEmitter = n, this.commandsService = o, this.commandsModule = s, this.configuration = a, this.optoutModule = c, this.optoutService = u, this.consentModule = p, this.consentService = l, this.pii = h, this.urlService = d, this.projectConfigurationModule = f, this.customEventsEmitter = y, this.javaScriptErrorsTracker = v, this.javaScriptErrorsAnonymizer = m, this.apiErrorsTracker = g, this.apiErrorsAnonymizer = S, this.iframeEventsEmitter = E, this.debugService = C, this.customVariablesService = T, this.customVariablesModule = w, this.startDataCollection = function() {
                    b.pageViewModule.start(), b.loadTracker.start()
                }
            }
            return t.prototype.start = function() {
                var t = this;
                if (this.optoutModule.init(), this.optoutService.init(), !this.optoutService.isActive()) {
                    var e = new ln(this.sessionService),
                        i = new on(O, this.configuration),
                        r = new sn(i),
                        n = new Yr(this.configuration, this.visitorService, this.sessionService, i, r, this.commandsService, e, this.iframeEventsEmitter, this.debugService),
                        o = new zi(this.commandsService, this.sessionService, this.configuration, this.basicRequestParameters, this.compressor, this.pii),
                        s = new Pn(this.configuration),
                        a = new In(this.configuration, s, this.iframeEventsEmitter);
                    a.init();
                    var c = new Ni(this.visitorService, this.sessionService, this.commandsService, this.iframeEventsEmitter, s, this.configuration),
                        u = new Ji(this.configuration, this.visitorService, this.sessionService, this.commandsService, this.pii, e, this.urlService);
                    this.pageViewModule = new nn(this.configuration, this.commandsService, this.lifeCycleEventsEmitter, this.visitorService, this.sessionService, this.consentService, this.customVariablesService, this.pii, this.urlService);
                    var p = new pn(this.visitorService, this.sessionService, this.commandsService),
                        l = new kn(this.configuration),
                        h = new En(this.configuration, this.visitorService, this.sessionService, this.urlService, this.commandsService, this.startDataCollection, l),
                        d = new bn(this.configuration, this.commandsService, this.compressor, this.basicRequestParameters, this.customEventsEmitter),
                        f = new An(this.commandsService);
                    if (this.loadTracker = new an, this.consentModule.init(), c.init(), o.init(), u.init(), this.customVariablesModule.init(), this.pageViewModule.init(), p.init(), h.init(), d.init(), this.projectConfigurationModule.init(), f.init(), this.lifeCycleEventsEmitter.addListeners(p, this.commandsModule, n, this.consentModule, c, this.customVariablesModule, this.pageViewModule, h, d, o, a), wi.isSupported() && this.compressor.isSupported()) {
                        var y = new wi(this.sessionService, this.configuration, this.compressor, r, this.consentService, this.basicRequestParameters, this.commandsService, this.pii, e, this.urlService, l, this.javaScriptErrorsTracker, this.javaScriptErrorsAnonymizer, this.apiErrorsTracker, this.apiErrorsAnonymizer, this.debugService, this.lifeCycleEventsEmitter, this.customEventsEmitter);
                        y.init(), this.lifeCycleEventsEmitter.addListeners(y)
                    }
                    if (this.configuration.eMerchandisingEnabled) {
                        var v = new yn(this.configuration, this.compressor, this.basicRequestParameters, this.customVariablesService, this.urlService, this.iframeEventsEmitter, this.commandsService);
                        v.init(), this.lifeCycleEventsEmitter.addListeners(v)
                    }
                    n.init(), e.onSessionExpired((function() {
                        t.lifeCycleEventsEmitter.emitBeforeSessionRenewal(), t.doStart(!0), t.lifeCycleEventsEmitter.emitAfterSessionRenewal()
                    })), this.doStart()
                }
            }, t.prototype.doStart = function(t) {
                var e = this;
                void 0 === t && (t = !1), this.commandsService.start(), this.loadTracker.onLoad((function() {
                    e.lifeCycleEventsEmitter.emitStartTracking(t)
                })), vn(this.configuration) && !t || this.startDataCollection()
            }, t
        }(),
        Mn = function() {
            function t(t, e, i, r, n, o, s, a) {
                this.configuration = t, this.visitorService = e, this.exclusionService = i, this.outdatedState = r, this.allowSubdomainsChange = n, this.crossDomainService = o, this.crossDomainSingleIframeService = s, this.forceInclusionService = a
            }
            return t.prototype.compute = function(t) {
                var e = this;
                this.configuration.crossDomainTracking && !this.configuration.cookielessTrackingEnabled ? this.configuration.crossDomainSingleIframeTracking ? this.crossDomainSingleIframeService.start((function() {
                    return e.computeState(t)
                })) : this.crossDomainService.applyUpToDate((function() {
                    return e.computeState(t)
                })) : this.computeState(t)
            }, t.prototype.computeState = function(t) {
                this.allowSubdomainsChange.handle(), this.outdatedState.clear(), this.isIncluded() ? (this.outdatedState.restoreClearedVisitor(), t(!0)) : (this.exclusionService.exclude(this.configuration), t(!1))
            }, t.prototype.isIncluded = function() {
                var t = B.boolean(this.configuration.sampleRate);
                return this.forceInclusionService.isForceIncluded() || !this.exclusionService.isExcluded() && this.visitorService.doesVisitorExist() || !this.exclusionService.isExcluded() && t
            }, t
        }();
    ! function(t) {
        t.generate = function() {
            var t = navigator.userAgent + navigator.language + navigator.platform,
                e = csString.prototype.slice.call(function(t) {
                    for (var e = 0, i = 0; i < t.length; i += 1) e = csString.prototype.charCodeAt.call(t, i) + (e << 6) + (e << 16) - e;
                    return Math.abs(e)
                }(t).toString(16), -4),
                i = (new csDate).getTime(),
                r = csString.prototype.replace.call("xxxxxxxx-hhhh-axxx-yxxx-xxxxxxxxxxxx", /[xy]/g, (function(t) {
                    var e = (i + 16 * Math.random()) % 16 | 0;
                    return i = Math.floor(i / 16), ("x" === t ? e : 7 & e | 8).toString(16)
                }));
            return csString.prototype.replace.call(r, "hhhh", e)
        }
    }(Sn || (Sn = {}));
    var On, Ln = function() {
            function t(t, e, i) {
                this.configuration = t, this.storage = e, this.sessionService = i
            }
            return t.prototype.createOrUpdateVisitor = function() {
                var t = this.getVisitor();
                null === t && (t = this.createVisitor(), this.sessionService.removeSession()), this.updateVisitor(t), this.setVisitor(t)
            }, t.prototype.createVisitor = function() {
                return {
                    id: Sn.generate(),
                    visitsCount: 0,
                    appliedTrackingDraw: this.configuration.lastTrackingDraw,
                    creationTimestamp: D(),
                    lastVisitTimestamp: 0,
                    hitTimestamp: 0,
                    expires: F.now() + this.configuration.visitorCookieTimeout
                }
            }, t.prototype.updateVisitor = function(t) {
                var e = D();
                this.sessionService.doesSessionExist() || (t.visitsCount += 1, t.lastVisitTimestamp = e), t.hitTimestamp = e, t.appliedTrackingDraw = this.configuration.lastTrackingDraw
            }, t.prototype.getRequestParameters = function() {
                var t = this.getVisitor();
                return t ? {
                    uu: t.id,
                    sn: "" + t.visitsCount,
                    lv: "" + t.lastVisitTimestamp,
                    lhd: "" + t.lastVisitTimestamp,
                    hd: "" + t.hitTimestamp
                } : {}
            }, t.prototype.getVisitor = function() {
                return this.storage.get()
            }, t.prototype.setVisitor = function(t) {
                this.storage.set(t)
            }, t.prototype.doesVisitorExist = function() {
                return null !== this.storage.get()
            }, t.prototype.removeVisitor = function() {
                this.storage.remove()
            }, t.prototype.handleSubdomainChange = function() {
                this.storage.handleSubdomainChange()
            }, t
        }(),
        xn = function() {
            function t(t, e) {
                this.configuration = t, this.compressor = e
            }
            return t.prototype.isCompressionSupported = function() {
                return this.compressor.isSupported()
            }, t
        }(),
        _n = function(t) {
            function e(e, i, r, n) {
                var o = t.call(this, e, i) || this;
                return o.configuration = e, o.compressor = i, o.forceInclusionService = r, o.urlService = n, o
            }
            return W(e, t), e.prototype.sanitizeSessionRecordingState = function(t) {
                return t
            }, e.prototype.computeInitialRecordingState = function(t) {
                return this.isCompressionSupported() && (this.forceInclusionService.isForceLegacyReplayRecorded() || B.percentage() < this.configuration.replayRecordingRate && wi.isSupported()) ? zt.REPLAY_RECORDING_ENABLED : zt.REPLAY_RECORDING_DISABLED
            }, e.prototype.updateRecordingState = function(t) {
                return t.recordingState
            }, e.prototype.isReplayRecorded = function(t) {
                return t.recordingState === zt.REPLAY_RECORDING_ENABLED || this.computeTriggerSessionReplayStatus(t)
            }, e.prototype.computeTriggerSessionReplayStatus = function(t) {
                if (this.configuration.triggerSessionReplayEnabled && this.configuration.triggerSessionReplayRegex && t.recordingState !== zt.REPLAY_RECORDING_ENABLED) {
                    var e = this.urlService.getUrl();
                    return this.configuration.triggerSessionReplayRegex.test(e)
                }
                return !1
            }, e.prototype.getDisabledRecordingState = function() {
                return zt.REPLAY_RECORDING_DISABLED
            }, e.prototype.setVisitorService = function(t) {}, e
        }(xn),
        Dn = function(t) {
            function e(e, i, r, n, o, s) {
                var a = t.call(this, e, i) || this;
                return a.configuration = e, a.compressor = i, a.quotaServiceRequest = r, a.lifeCycleEventsEmitter = n, a.forceInclusionService = o, a.urlService = s, a.requestedRecordingTypes = [], a
            }
            return W(e, t), e.prototype.init = function() {
                this.bindQuotaServiceRequest()
            }, e.prototype.sanitizeSessionRecordingState = function(t) {
                return t.recordingState === Bt.TEMPORARILY_RECORDED && (t.recordingState = Bt.NOT_RECORDED), t
            }, e.prototype.computeInitialRecordingState = function(t) {
                return this.isCompressionSupported() && wi.isSupported() ? (this.requestedRecordingTypes = [], B.percentage() < this.configuration.replayRecordingRate || this.forceInclusionService.isForceMalkaReplayRecorded() ? csArray.prototype.push.call(this.requestedRecordingTypes, Bt.GLOBAL_SAMPLING) : this.configuration.malkaUrlEnabled && csArray.prototype.push.call(this.requestedRecordingTypes, Bt.URL_SAMPLING), this.configuration.malkaEtrEnabled && csArray.prototype.push.call(this.requestedRecordingTypes, Bt.ETR_SAMPLING), this.requestedRecordingTypes.length > 0 ? (this.sendSamplingRequest(t), Bt.TEMPORARILY_RECORDED) : Bt.NOT_RECORDED) : Bt.NOT_RECORDED
            }, e.prototype.updateRecordingState = function(t) {
                return this.isCompressionSupported() && wi.isSupported() ? t.recordingState === Bt.GLOBAL_SAMPLING ? Bt.GLOBAL_SAMPLING : (this.requestedRecordingTypes = [], this.configuration.malkaUrlEnabled && (csArray.prototype.push.call(this.requestedRecordingTypes, Bt.URL_SAMPLING), this.configuration.malkaEtrEnabled && csArray.prototype.push.call(this.requestedRecordingTypes, Bt.ETR_SAMPLING)), this.requestedRecordingTypes.length > 0 ? (this.sendSamplingRequest(t), Bt.TEMPORARILY_RECORDED) : Bt.NOT_RECORDED) : Bt.NOT_RECORDED
            }, e.prototype.sendSamplingRequest = function(t) {
                var e, i = this,
                    r = null === (e = this.visitorService) || void 0 === e ? void 0 : e.getVisitor();
                this.quotaServiceRequest.setRequestPayloadProvider({
                    getRequestPayload: function() {
                        return csJSON.stringify({
                            recordingTypes: csArray.prototype.map.call(i.requestedRecordingTypes, Number),
                            url: i.urlService.getUrl(),
                            projectId: i.configuration.projectId,
                            uu: (null == r ? void 0 : r.id) || "",
                            sn: (null == r ? void 0 : r.visitsCount) || "",
                            pn: (null == t ? void 0 : t.pageNumber) || ""
                        })
                    }
                }), this.quotaServiceRequest.send()
            }, e.prototype.abortQuotaServiceRequest = function() {
                this.quotaServiceRequest.abort()
            }, e.prototype.isReplayRecorded = function(t) {
                return t.recordingState === Bt.TEMPORARILY_RECORDED || t.recordingState === Bt.GLOBAL_SAMPLING || t.recordingState === Bt.URL_SAMPLING || t.etrState === Ft.ETR_ON
            }, e.prototype.bindQuotaServiceRequest = function() {
                var t = this;
                this.quotaServiceRequest.setRequestHeader({
                    name: "Content-Type",
                    value: "application/json"
                }), this.quotaServiceRequest.onError((function() {
                    return t.quotaServiceErrorHandler("NetworkError")
                })), this.quotaServiceRequest.onTimeout(3e3, (function() {
                    return t.quotaServiceTimeoutHandler()
                })), this.quotaServiceRequest.onLoad((function(e) {
                    return t.quotaServiceLoadHandler(e)
                }))
            }, e.prototype.quotaServiceErrorHandler = function(t) {
                this.emitRecordingStateOnError(), xt.warn("Quota Service: request error - " + t)
            }, e.prototype.quotaServiceTimeoutHandler = function() {
                this.emitRecordingStateOnError(), xt.warn("Quota Service: request timeout")
            }, e.prototype.emitRecordingStateOnError = function() {
                var t = Bt.NOT_RECORDED;
                this.isGlobalSamplingAllowed(this.requestedRecordingTypes) && (t = Bt.GLOBAL_SAMPLING), this.lifeCycleEventsEmitter.emitRecordingStateChange(t, Ft.ETR_OFF)
            }, e.prototype.quotaServiceLoadHandler = function(t) {
                if (200 === t.status) {
                    var e;
                    try {
                        e = csJSON.parse(t.responseText)
                    } catch (e) {
                        return void this.quotaServiceErrorHandler("Unable to parse the quota service response: " + t.responseText)
                    }
                    var i = csArray.prototype.map.call(e.allowedRecordingTypes, csString);
                    if (i) {
                        var r = Ft.ETR_OFF,
                            n = Bt.NOT_RECORDED;
                        this.isGlobalSamplingAllowed(i) ? n = Bt.GLOBAL_SAMPLING : this.isUrlSamplingAllowed(i) && (n = Bt.URL_SAMPLING), this.isEtrSamplingAllowed(i) && (r = Ft.ETR_ON), this.lifeCycleEventsEmitter.emitRecordingStateChange(n, r)
                    } else this.quotaServiceErrorHandler("recording types missing from quota service response")
                } else this.quotaServiceErrorHandler("Status code: " + t.status)
            }, e.prototype.isGlobalSamplingAllowed = function(t) {
                return csArray.prototype.some.call(t, (function(t) {
                    return t === Bt.GLOBAL_SAMPLING
                }))
            }, e.prototype.isUrlSamplingAllowed = function(t) {
                return csArray.prototype.some.call(t, (function(t) {
                    return t === Bt.URL_SAMPLING
                }))
            }, e.prototype.isEtrSamplingAllowed = function(t) {
                return csArray.prototype.some.call(t, (function(t) {
                    return t === Bt.ETR_SAMPLING
                }))
            }, e.prototype.setVisitorService = function(t) {
                this.visitorService = t
            }, e.prototype.getDisabledRecordingState = function() {
                return Bt.NOT_RECORDED
            }, Y([_t("Quota Service: onerror")], e.prototype, "quotaServiceErrorHandler", null), Y([_t("Quota Service: ontimeout")], e.prototype, "quotaServiceTimeoutHandler", null), Y([_t("Quota Service: onload")], e.prototype, "quotaServiceLoadHandler", null), e
        }(xn),
        Vn = function() {
            function t(t, e) {
                this.sessionStorage = t, this.recordingStateStrategy = e, this.triggerSessionReplayOngoing = !1, this.extendedSessionTimeoutId = null, this.sessionExtensionCount = 0
            }
            return t.prototype.setDynamicVariablesService = function(t) {
                this.dynamicVariablesService = t
            }, t.prototype.createOrUpdateSession = function() {
                this.stopSessionExtension(), this.beginSession = F.now(), this.sessionExtensionCount = 0;
                var t = this.getSessionWithoutCache();
                null === t ? (t = this.buildSessionObject(), this.incrementSessionPageNumber(t), t.recordingState = this.recordingStateStrategy.computeInitialRecordingState(t)) : (t = this.recordingStateStrategy.sanitizeSessionRecordingState(t), this.incrementSessionPageNumber(t), t.recordingState = this.recordingStateStrategy.updateRecordingState(t)), this.setSession(t), this.setTriggerSessionReplayStatus(t)
            }, t.prototype.buildSessionObject = function() {
                return {
                    pageNumber: 0,
                    recordingState: this.recordingStateStrategy.getDisabledRecordingState(),
                    etrState: Ft.ETR_OFF
                }
            }, t.prototype.setTriggerSessionReplayStatus = function(t) {
                this.recordingStateStrategy instanceof _n ? this.triggerSessionReplayOngoing = this.recordingStateStrategy.computeTriggerSessionReplayStatus(t) : this.triggerSessionReplayOngoing = !1
            }, t.prototype.createExtendedSession = function() {
                var t = this.buildSessionObject();
                return this.incrementSessionPageNumber(t), t.recordingState = this.recordingStateStrategy.computeInitialRecordingState(t), this.setTriggerSessionReplayStatus(t), t
            }, t.prototype.incrementSessionPageNumber = function(t) {
                t.pageNumber += 1
            }, t.prototype.isReplayRecorded = function() {
                var t = this.getSession();
                return !!t && this.recordingStateStrategy.isReplayRecorded(t)
            }, t.prototype.isTemporarilyRecorded = function() {
                var t = this.getSession();
                return (null == t ? void 0 : t.recordingState) === Bt.TEMPORARILY_RECORDED
            }, t.prototype.abortQuotaServiceRequest = function() {
                this.recordingStateStrategy instanceof Dn && this.recordingStateStrategy.abortQuotaServiceRequest()
            }, t.prototype.getRequestParameters = function() {
                var t = {},
                    e = this.getSession();
                return null !== e && (t.pn = "" + e.pageNumber, this.recordingStateStrategy instanceof _n && (t.re = this.triggerSessionReplayOngoing ? zt.TRIGGER_REPLAY_RECORDING_ENABLED : e.recordingState)), t
            }, t.prototype.getSession = function() {
                return this.sessionStorage.get()
            }, t.prototype.getSessionWithoutCache = function() {
                return this.sessionStorage.get(!0)
            }, t.prototype.doesSessionExist = function() {
                return null !== this.sessionStorage.get()
            }, t.prototype.setSession = function(t) {
                this.sessionStorage.set(t)
            }, t.prototype.removeSession = function() {
                this.sessionStorage.remove()
            }, t.prototype.getRecordingStates = function() {
                var t = this.getSession(),
                    e = [];
                return t && (t.recordingState !== Bt.NOT_RECORDED && csArray.prototype.push.call(e, t.recordingState), t.etrState === Ft.ETR_ON && csArray.prototype.push.call(e, Bt.ETR_SAMPLING)), e
            }, t.prototype.updateRecordingState = function(t, e) {
                var i = this.getSession();
                null !== i && (i.recordingState = t, i.etrState = e, this.setSession(i))
            }, t.prototype.hasValidSession = function() {
                var t = this.sessionStorage.getRawSession();
                return this.sessionStorage.isValid(t)
            }, t.prototype.handleSubdomainChange = function() {
                this.sessionStorage.handleSubdomainChange()
            }, t.prototype.extendSessionPeriodically = function() {
                this.extendedSessionTimeoutId || this.extendSession()
            }, t.prototype.extendSession = function() {
                if (this.hasReachedMaxDuration()) this.stopSessionExtension();
                else {
                    var t = this.getSession();
                    null === t && (t = this.createExtendedSession()), this.sessionStorage.set(t, 174e4), this.sendDynamicVar(), this.scheduleNextSessionUpdate()
                }
            }, t.prototype.scheduleNextSessionUpdate = function() {
                var t = this;
                this.extendedSessionTimeoutId = window.setTimeout((function() {
                    t.extendSession()
                }), 174e4)
            }, t.prototype.hasReachedMaxDuration = function() {
                return 1434e4 - (F.now() + 18e5 - this.beginSession) < 0
            }, t.prototype.stopSessionExtension = function() {
                this.extendedSessionTimeoutId && (window.clearTimeout(this.extendedSessionTimeoutId), this.extendedSessionTimeoutId = null)
            }, t.prototype.sendDynamicVar = function() {
                this.sessionExtensionCount += 1, this.dynamicVariablesService.trackDynamicVariable("session_expiry_update", this.sessionExtensionCount)
            }, t
        }(),
        Un = function() {
            function t(t, e, i) {
                this.configuration = t, this.visitorService = e, this.exclusionService = i
            }
            return t.prototype.clear = function() {
                this.isVisitorOutdated() && (this.savedVisitor = this.visitorService.getVisitor(), this.visitorService.removeVisitor()), this.isExclusionOutdated() && this.exclusionService.removeExclusion()
            }, t.prototype.isVisitorOutdated = function() {
                return this.visitorService.doesVisitorExist() && this.visitorService.getVisitor().appliedTrackingDraw !== this.configuration.lastTrackingDraw
            }, t.prototype.isExclusionOutdated = function() {
                return this.exclusionService.getAppliedTrackingDraw() !== this.configuration.lastTrackingDraw
            }, t.prototype.restoreClearedVisitor = function() {
                this.savedVisitor && this.visitorService.setVisitor(this.savedVisitor)
            }, t
        }(),
        qn = function() {
            function t(t, e) {
                this.visitorService = t, this.sessionService = e
            }
            return t.prototype.handle = function() {
                this.handleVisitor(), this.handleSession()
            }, t.prototype.handleVisitor = function() {
                this.visitorService.handleSubdomainChange()
            }, t.prototype.handleSession = function() {
                this.sessionService.handleSubdomainChange()
            }, t
        }(),
        zn = function() {
            function t() {
                this.listeners = []
            }
            return t.prototype.addListeners = function() {
                for (var t, e = [], i = 0; i < arguments.length; i++) e[i] = arguments[i];
                (t = csArray.prototype.push).call.apply(t, Q([this.listeners], e))
            }, t
        }(),
        Bn = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return W(e, t), e.prototype.emitBeforeNaturalPageView = function() {
                for (var t = 0, e = this.listeners; t < e.length; t++) {
                    var i = e[t];
                    i.onBeforeNaturalPageView && i.onBeforeNaturalPageView()
                }
            }, e.prototype.emitAfterNaturalPageView = function() {
                for (var t = 0, e = this.listeners; t < e.length; t++) {
                    var i = e[t];
                    i.onAfterNaturalPageView && i.onAfterNaturalPageView()
                }
            }, e.prototype.emitInitTracking = function() {
                for (var t = 0, e = this.listeners; t < e.length; t++) {
                    var i = e[t];
                    i.onInitTracking && i.onInitTracking()
                }
            }, e.prototype.emitStartTracking = function(t) {
                for (var e = 0, i = this.listeners; e < i.length; e++) {
                    var r = i[e];
                    r.onStartTracking && r.onStartTracking(t)
                }
            }, e.prototype.emitArtificialPageViewEnd = function() {
                for (var t = 0, e = this.listeners; t < e.length; t++) {
                    var i = e[t];
                    i.onArtificialPageViewEnd && i.onArtificialPageViewEnd()
                }
            }, e.prototype.emitBeforeArtificialPageView = function() {
                for (var t = 0, e = this.listeners; t < e.length; t++) {
                    var i = e[t];
                    i.onBeforeArtificialPageView && i.onBeforeArtificialPageView()
                }
            }, e.prototype.emitAfterArtificialPageView = function() {
                for (var t = 0, e = this.listeners; t < e.length; t++) {
                    var i = e[t];
                    i.onAfterArtificialPageView && i.onAfterArtificialPageView()
                }
            }, e.prototype.emitBeforeSessionRenewal = function() {
                for (var t = 0, e = this.listeners; t < e.length; t++) {
                    var i = e[t];
                    i.onBeforeSessionRenewal && i.onBeforeSessionRenewal()
                }
            }, e.prototype.emitAfterSessionRenewal = function() {
                for (var t = 0, e = this.listeners; t < e.length; t++) {
                    var i = e[t];
                    i.onAfterSessionRenewal && i.onAfterSessionRenewal()
                }
            }, e.prototype.emitOptout = function() {
                for (var t = 0, e = this.listeners; t < e.length; t++) {
                    var i = e[t];
                    i.onOptout && i.onOptout()
                }
            }, e.prototype.emitConsentGranted = function() {
                for (var t = 0, e = this.listeners; t < e.length; t++) {
                    var i = e[t];
                    i.onConsentGranted && i.onConsentGranted()
                }
            }, e.prototype.emitConsentWithdrawn = function() {
                for (var t = 0, e = this.listeners; t < e.length; t++) {
                    var i = e[t];
                    i.onConsentWithdrawn && i.onConsentWithdrawn()
                }
            }, e.prototype.emitRecordingStateChange = function(t, e) {
                for (var i = 0, r = this.listeners; i < r.length; i++) {
                    var n = r[i];
                    n.onRecordingStateChange && n.onRecordingStateChange(t, e)
                }
            }, e.prototype.emitInitialDomDone = function(t) {
                for (var e = 0, i = this.listeners; e < i.length; e++) {
                    var r = i[e];
                    r.onInitialDomDone && r.onInitialDomDone(t)
                }
            }, e
        }(zn);
    ! function(t) {
        t[t.NOT_REQUIRED = 0] = "NOT_REQUIRED", t[t.NOT_EXPRESSED = 1] = "NOT_EXPRESSED", t[t.GRANTED = 2] = "GRANTED", t[t.WITHDRAWN = 3] = "WITHDRAWN"
    }(On || (On = {}));
    var Fn, Hn = function() {
            function t(t, e, i) {
                this.configuration = t, this.cookieService = e, this.browserLocalStorage = i
            }
            return t.prototype.get = function() {
                var t;
                return null === (t = this.configuration.cookielessTrackingEnabled ? this.browserLocalStorage.getItem("_cs_c") : this.cookieService.get("_cs_c")) ? t : Number(t)
            }, t.prototype.set = function(t) {
                this.configuration.cookielessTrackingEnabled ? this.browserLocalStorage.setItem("_cs_c", csString(t)) : this.cookieService.set("_cs_c", csString(t), 34164e6)
            }, t.prototype.remove = function() {
                this.configuration.cookielessTrackingEnabled ? this.browserLocalStorage.removeItem("_cs_c") : this.cookieService.delete("_cs_c")
            }, t.prototype.handleSubdomainChange = function() {
                this.configuration.cookielessTrackingEnabled || (this.configuration.allowSubdomains ? this.cookieService.delete("_cs_c", Dt.CURRENT_DOMAIN) : this.cookieService.delete("_cs_c", this.cookieService.getRootDomain()))
            }, t
        }(),
        jn = ["trackConsentGranted"],
        Gn = ["trackConsentWithdrawn"],
        Wn = function() {
            function t(t, e) {
                this.commandsService = t, this.service = e
            }
            return t.prototype.init = function() {
                this.service.handleSubdomainChange(), this.service.setInitialConsent(), this.registerCommands()
            }, t.prototype.registerCommands = function() {
                var t = this;
                this.commandsService.register(jn, (function() {
                    t.service.grantConsent()
                })), this.commandsService.register(Gn, (function() {
                    t.service.withdrawConsent()
                }))
            }, t.prototype.onOptout = function() {
                this.service.removeConsent()
            }, t
        }(),
        Kn = function() {
            function t(t, e, i) {
                this.configuration = t, this.storage = e, this.lifeCycleEventsEmitter = i
            }
            return t.prototype.setInitialConsent = function() {
                var t = this.storage.get();
                (null === t || this.hasConsentRequiredChanged(t)) && this.setDefault()
            }, t.prototype.hasConsentRequiredChanged = function(t) {
                var e = this.configuration.consentRequired;
                return e && t === On.NOT_REQUIRED || !e && t !== On.NOT_REQUIRED
            }, t.prototype.handleSubdomainChange = function() {
                this.storage.handleSubdomainChange()
            }, t.prototype.setDefault = function() {
                var t = this.configuration.consentRequired ? On.NOT_EXPRESSED : On.NOT_REQUIRED;
                this.storage.set(t)
            }, t.prototype.grantConsent = function() {
                this.configuration.consentRequired && (this.storage.set(On.GRANTED), this.lifeCycleEventsEmitter.emitConsentGranted())
            }, t.prototype.withdrawConsent = function() {
                this.configuration.consentRequired && (this.storage.set(On.WITHDRAWN), this.lifeCycleEventsEmitter.emitConsentWithdrawn())
            }, t.prototype.removeConsent = function() {
                this.storage.remove()
            }, t.prototype.isAllowedByConsent = function() {
                return !this.configuration.consentRequired || this.storage.get() === On.GRANTED
            }, t.prototype.getRequestParameters = function() {
                return {
                    uc: "" + this.storage.get()
                }
            }, t
        }(),
        Yn = function() {
            function t(t, e, i, r, n, o, s) {
                this.lifeCycleEventsEmitter = t, this.commandsService = e, this.commandsModule = i, this.optoutModule = r, this.optoutService = n, this.exclusionModule = o, this.consentModule = s
            }
            return t.prototype.start = function() {
                this.lifeCycleEventsEmitter.addListeners(this.exclusionModule, this.consentModule, this.commandsModule), this.consentModule.init(), this.optoutModule.init(), this.optoutService.init(), this.optoutService.isActive() || this.commandsService.start()
            }, t
        }(),
        Xn = function() {
            function t(t, e) {
                this.location = t, this.storage = e
            }
            return t.prototype.exclude = function(t) {
                this.storage.set(csString(t.lastTrackingDraw))
            }, t.prototype.removeExclusion = function() {
                this.storage.remove()
            }, t.prototype.isExcluded = function() {
                return this.hasExclusionInStorage() || this.hasExclusionInURL()
            }, t.prototype.hasExclusionInStorage = function() {
                return 0 !== this.getAppliedTrackingDraw()
            }, t.prototype.getAppliedTrackingDraw = function() {
                return this.storage.get()
            }, t.prototype.hasExclusionInURL = function() {
                return csString.prototype.indexOf.call(this.location.href, "_cs_ex") > 0
            }, t
        }(),
        Jn = function() {
            function t(t) {
                this.service = t
            }
            return t.prototype.onOptout = function() {
                this.service.removeExclusion()
            }, t
        }(),
        Qn = function() {
            function t(t, e) {
                this.location = t, this.cookieService = e
            }
            return t.prototype.isForceIncluded = function() {
                return this.hasForceInclusionCookie() || this.hasForceInclusionInURL()
            }, t.prototype.isForceLegacyReplayRecorded = function() {
                return this.hasForceInclusionCookieValue(zt.REPLAY_RECORDING_ENABLED) || this.hasForceInclusionValueInURL(zt.REPLAY_RECORDING_ENABLED)
            }, t.prototype.isForceMalkaReplayRecorded = function() {
                return this.hasForceInclusionCookieValue(Bt.GLOBAL_SAMPLING)
            }, t.prototype.hasForceInclusionCookie = function() {
                return null !== this.cookieService.get("_cs_inc")
            }, t.prototype.hasForceInclusionCookieValue = function(t) {
                return this.cookieService.get("_cs_inc") === t
            }, t.prototype.hasForceInclusionInURL = function() {
                return csString.prototype.indexOf.call(this.location.href, "_cs_inc") > 0
            }, t.prototype.hasForceInclusionValueInURL = function(t) {
                return csString.prototype.indexOf.call(this.location.href, "_cs_inc=" + t) > 0
            }, t
        }(),
        Zn = function() {
            function t() {
                this.metrics = {}
            }
            return t.prototype.start = function(t, e) {
                void 0 === e && (e = F.now());
                var i = this.metrics[t];
                this.metrics[t] = i && i.startedAt ? i : K(K({}, i), {
                    startedAt: e
                })
            }, t.prototype.stop = function(t, e) {
                void 0 === e && (e = F.now());
                var i = this.metrics[t];
                this.metrics[t] = i && i.stoppedAt ? i : K(K({}, i), {
                    stoppedAt: e
                }), this.onStopCallback(t, this.metrics[t])
            }, t.prototype.onStop = function(t) {
                this.onStopCallback = t
            }, t
        }(),
        $n = function() {
            function t() {}
            return t.prototype.getRequestParameters = function() {
                var t = window.location;
                return {
                    pr: t.protocol,
                    ho: t.hostname,
                    pa: t.pathname,
                    qu: t.search,
                    ha: t.hash
                }
            }, t
        }(),
        to = function() {
            function t(t, e) {
                this.configuration = t, this.request = e, this.isLoggingActive = !1
            }
            return t.prototype.init = function() {
                this.isLoggingActive = B.boolean(this.configuration.metricRate)
            }, t.prototype.getRequestParameters = function() {
                return {
                    a: "uxam",
                    mk: this.metricKey,
                    mv: "" + this.metricValue
                }
            }, t.prototype.logMetric = function(t, e) {
                this.metricKey = t, this.metricValue = e.stoppedAt - e.startedAt, this.sendLog()
            }, t.prototype.sendLog = function() {
                this.isLoggingActive && this.request.send()
            }, t
        }();
    ! function(t) {
        t.TIME_BEFORE_EXECUTION = "TimeBeforeExecution", t.PAGE_LOAD = "PageLoad"
    }(Fn || (Fn = {}));
    var eo, io = function() {
            function t(t, e, i) {
                this.service = e, this.pii = i, this.locationRequestParameters = new $n, this.basicLogRequestParameters = new ut(t, this.pii), this.request = new tt(t.getLoggerUri()), this.logger = new to(t, this.request)
            }
            return t.prototype.init = function() {
                var t = this;
                this.request.setRequestParametersProviders(this.basicLogRequestParameters, this.locationRequestParameters), this.logger.init(), this.service.onStop((function(e, i) {
                    t.logger.logMetric(e, i)
                })), this.recordInitialMetrics()
            }, t.prototype.recordInitialMetrics = function() {
                this.isSupported() && (this.service.start(Fn.PAGE_LOAD, window.performance.timing.navigationStart), this.service.stop(Fn.PAGE_LOAD, window.performance.timing.domContentLoadedEventEnd), this.service.start(Fn.TIME_BEFORE_EXECUTION, window.performance.timing.domContentLoadedEventEnd), this.service.stop(Fn.TIME_BEFORE_EXECUTION))
            }, t.prototype.isSupported = function() {
                return window.performance && window.performance.timing
            }, t
        }(),
        ro = function() {
            function t(t, e, i) {
                this.configuration = t, this.cookieService = e, this.browserLocalStorage = i
            }
            return t.prototype.get = function() {
                return this.configuration.cookielessTrackingEnabled ? this.browserLocalStorage.getItem("_cs_optout") : this.cookieService.get("_cs_optout")
            }, t.prototype.set = function(t) {
                this.configuration.cookielessTrackingEnabled ? this.browserLocalStorage.setItem("_cs_optout", t) : this.cookieService.set("_cs_optout", t, 34164e6)
            }, t
        }(),
        no = function() {
            function t(t, e, i) {
                this.lifeCycleEventsEmitter = t, this.location = e, this.storage = i
            }
            return t.prototype.init = function() {
                !this.isActive() && this.hasOptoutInURL() && this.activate()
            }, t.prototype.isActive = function() {
                return "1" === this.storage.get()
            }, t.prototype.activate = function() {
                this.lifeCycleEventsEmitter.emitOptout(), this.storage.set("1")
            }, t.prototype.hasOptoutInURL = function() {
                return csString.prototype.indexOf.call(this.location.href, "_cs_optout") > 0
            }, t
        }(),
        oo = ["optout"],
        so = function() {
            function t(t, e) {
                this.commandsService = t, this.optoutService = e
            }
            return t.prototype.init = function() {
                var t = this;
                this.commandsService.register(oo, (function() {
                    t.optoutService.activate()
                }))
            }, t
        }();

    function ao(t, e) {
        return e.visitor.visitsCount !== t.visitor.visitsCount ? e.visitor.visitsCount - t.visitor.visitsCount : t.session ? e.session ? e.session.pageNumber - t.session.pageNumber : -1 : 1
    }! function(t) {
        t.select = function(t, e) {
            var i = function(t, e) {
                    return csArray.prototype.filter.call(t, (function(t) {
                        return t.exclusion === e
                    }))[0]
                }(t, e),
                r = function(t, e) {
                    return csArray.prototype.sort.call(csArray.prototype.filter.call(t, (function(t) {
                        return function(t, e) {
                            return t.visitor && t.visitor.appliedTrackingDraw === e
                        }(t, e)
                    })), ao)[0]
                }(t, e);
            return i || r
        }
    }(eo || (eo = {}));
    var co = function() {
            function t(t, e, i) {
                this.configuration = t, this.currentDomainState = e, this.otherDomainStates = i
            }
            return t.prototype.applyUpToDate = function(t) {
                var e = this;
                this.otherDomainStates.retrieve(this.configuration.hostnames, (function(i) {
                    var r = Q([e.currentDomainState.get()], i),
                        n = eo.select(r, e.configuration.lastTrackingDraw);
                    e.currentDomainState.apply(n), t()
                }))
            }, t
        }(),
        uo = function() {
            function t(t, e) {
                this.commandsService = t, this.iframeEventsEmitter = e
            }
            return t.prototype.init = function() {
                this.iframeEventsEmitter.addListeners(this.commandsService)
            }, t.prototype.onOptout = function() {
                this.commandsService.stop()
            }, t.prototype.onBeforeSessionRenewal = function() {
                this.commandsService.stop()
            }, t
        }();
    var po, lo = function(t) {
            function e() {
                var e = t.call(this) || this;
                return e.registry = {}, e
            }
            return W(e, t), e.prototype.register = function(t, e) {
                for (var i = 0, r = t; i < r.length; i++) {
                    var n = r[i];
                    this.registry[n] = e, this.registry
                }
            }, e.prototype.onStart = function() {
                this.applyPending(), this.enableImmediateApplication()
            }, e.prototype.onStop = function() {
                window._uxa = []
            }, e.prototype.onIframeCommands = function(t) {
                for (var e = 0, i = t.commands; e < i.length; e++) {
                    var r = i[e];
                    this.applyFromIframe(r.name, r.params, t.iframePath)
                }
            }, e.prototype.applyFromIframe = function(t, e, i) {
                var r = this;
                xt.tryToExecute("Commands.apply.from.iframe: " + i, (function() {
                    var i;
                    if (r.registry[t]) return (i = r.registry)[t].apply(i, e)
                }))()
            }, e.prototype.applyPending = function() {
                var t = this;
                window._uxa.forEach((function(e) {
                    var i = e[0],
                        r = e.slice(1);
                    return t.apply(i, r)
                }))
            }, e.prototype.enableImmediateApplication = function() {
                var t = this;
                window._uxa = {
                    push: function(e) {
                        var i = e[0],
                            r = e.slice(1);
                        return t.apply(i, r)
                    }
                }
            }, e.prototype.apply = function(t, e) {
                var i;
                if (this.registry[t]) return (i = this.registry)[t].apply(i, e)
            }, Y([_t("Commands.apply")], e.prototype, "apply", null), e
        }(Te),
        ho = function() {
            function t() {
                var t = this;
                this.eventHandler = {
                    boundElement: document,
                    type: "securitypolicyviolation",
                    listener: function(e) {
                        return t.securityPolicyViolationListener(e)
                    }
                }
            }
            return t.prototype.onEvent = function(t) {
                this.onEventCallback = t
            }, t.prototype.start = function() {
                ue(this.eventHandler)
            }, t.prototype.stop = function() {
                pe(this.eventHandler)
            }, t.prototype.isSecurityErrorRelevant = function(e) {
                if (!e) return !1;
                var i = e.disposition;
                return bt(e.sourceFile) && csArray.prototype.some.call(t.whilelistDomains, (function(t) {
                    return csString.prototype.indexOf.call(e.sourceFile, t) > 0
                })) && "report" !== i
            }, t.prototype.securityPolicyViolationListener = function(t) {
                this.isSecurityErrorRelevant(t) && this.onEventCallback({
                    violatedDirective: t.violatedDirective,
                    sourceFile: t.sourceFile
                })
            }, t.whilelistDomains = ["contentsquare", "cdnssl.clicktale.net", "localhost", "website.com/build/e2e"], Y([_t("Event handler type: securitypolicyviolation")], t.prototype, "securityPolicyViolationListener", null), t
        }(),
        fo = function() {
            function t(t) {
                this.contentSecurityPolicyErrorsTracker = t
            }
            return t.prototype.init = function() {
                var t = this;
                this.contentSecurityPolicyErrorsTracker.onEvent((function(e) {
                    return t.processEvent(e)
                }))
            }, t.prototype.start = function() {
                this.contentSecurityPolicyErrorsTracker.start()
            }, t.prototype.stop = function() {
                this.contentSecurityPolicyErrorsTracker.stop()
            }, t.prototype.processEvent = function(t) {
                var e = "Content Security Policy error. Violated directive: " + t.violatedDirective + " - Source file: " + t.sourceFile;
                xt.warn(e)
            }, t
        }(),
        yo = function(t) {
            function e(e, i, r, n, o) {
                var s = t.call(this) || this;
                return s.javaScriptErrorsTracker = e, s.javaScriptErrorsRequest = i, s.basicRequestParameters = r, s.javaScriptErrorsAnonymizer = n, s.customEventEmitter = o, s.javaScriptErrorsBatch = [], s.javaScriptErrorsCount = 0, s.customErrorsBuffer = [], s
            }
            return W(e, t), e.prototype.init = function() {
                var t = this;
                this.javaScriptErrorsTracker.onEvent((function(e) {
                    return t.processEvent(e)
                })), this.bindRequest()
            }, e.prototype.initStates = function() {
                this.startTime = F.now(), this.javaScriptErrorsBatch = [], this.javaScriptErrorsCount = 0
            }, e.prototype.onStart = function() {
                this.javaScriptErrorsTracker.start(), this.processCustomErrorsInBuffer()
            }, e.prototype.onStop = function() {
                this.javaScriptErrorsTracker.stop()
            }, e.prototype.getRequestPayload = function() {
                return csJSON.stringify({
                    errors: this.javaScriptErrorsBatch
                })
            }, e.prototype.onIframeJavascriptError = function(t) {
                this.processEvent(t)
            }, e.prototype.trackCustomError = function(t) {
                var e = {
                    errorType: "jsError",
                    message: "Custom Error: " + t,
                    lineno: 1,
                    colno: 1,
                    filename: "https://cserror.com/texterror.js"
                };
                this.processCustomErrorEvent(e)
            }, e.prototype.processCustomErrorEvent = function(t) {
                this.isStarted ? (this.processEvent(t), this.customEventEmitter.emitCustomErrorEvent(t)) : csArray.prototype.push.call(this.customErrorsBuffer, t)
            }, e.prototype.processCustomErrorsInBuffer = function() {
                var t = this;
                this.isStarted && (csArray.prototype.forEach.call(this.customErrorsBuffer, (function(e) {
                    return t.processCustomErrorEvent(e)
                })), this.customErrorsBuffer = [])
            }, e.prototype.processEvent = function(t) {
                this.isStarted && this.javaScriptErrorsCount < 20 && (this.javaScriptErrorsAnonymizer.anonymize(t), t.rt = this.getRelativeTime(), csArray.prototype.push.call(this.javaScriptErrorsBatch, t), this.sendErrors())
            }, e.prototype.bindRequest = function() {
                var t = this;
                this.javaScriptErrorsRequest.setRequestParametersProviders(this.basicRequestParameters), this.javaScriptErrorsRequest.setRequestPayloadProvider(this), this.javaScriptErrorsRequest.after((function() {
                    t.javaScriptErrorsBatch = [], t.javaScriptErrorsCount += 1
                }))
            }, e.prototype.getRelativeTime = function() {
                return F.now() - this.startTime
            }, e.prototype.sendErrors = function() {
                this.javaScriptErrorsRequest.send()
            }, e
        }(Te),
        vo = function(t) {
            function e(e, i, r, n) {
                var o = t.call(this) || this;
                return o.apiErrorsTracker = e, o.apiErrorsRequest = i, o.basicRequestParameters = r, o.apiErrorsAnonymizer = n, o.apiErrorsBatch = [], o.apiErrorsCount = 0, o
            }
            return W(e, t), e.prototype.init = function() {
                var t = this;
                this.apiErrorsTracker.init(), this.apiErrorsTracker.onEvent((function(e) {
                    return t.processEvent(e)
                })), this.bindRequest()
            }, e.prototype.initStates = function() {
                this.apiErrorsBatch = [], this.apiErrorsCount = 0, this.resetStartTime()
            }, e.prototype.resetStartTime = function() {
                this.startTime = F.now()
            }, e.prototype.getRelativeTime = function() {
                return F.now() - this.startTime
            }, e.prototype.onStart = function() {
                this.apiErrorsTracker.start()
            }, e.prototype.onStop = function() {
                this.apiErrorsTracker.stop()
            }, e.prototype.getRequestPayload = function() {
                return csJSON.stringify({
                    errors: this.apiErrorsBatch
                })
            }, e.prototype.onIframeApiError = function(t) {
                this.processEvent(t)
            }, e.prototype.processEvent = function(t) {
                this.isStarted && this.apiErrorsCount < e.MAX_ERRORS && (t.relativeTime = this.getRelativeTime(), csArray.prototype.push.call(this.apiErrorsBatch, this.apiErrorsAnonymizer.anonymize(t)), this.sendErrors())
            }, e.prototype.bindRequest = function() {
                var t = this;
                this.apiErrorsRequest.setRequestParametersProviders(this.basicRequestParameters), this.apiErrorsRequest.setRequestPayloadProvider(this), this.apiErrorsRequest.after((function() {
                    t.apiErrorsBatch = [], t.apiErrorsCount += 1
                }))
            }, e.prototype.sendErrors = function() {
                this.apiErrorsRequest.send()
            }, e.MAX_ERRORS = 20, e
        }(Te);
    ! function(t) {
        t.CONTENTSQUARE = "contentsquare.net", t.CLICKTALE = "clicktale.net", t.FAKE_TRACKER = "fake-tracker.content-square.fr"
    }(po || (po = {}));
    var mo, go = ["trackError"],
        So = ["api-errors:maskUrl"],
        Eo = function() {
            function t(t, e, i, r, n, o, s, a, c) {
                this.javaScriptErrorsTracker = t, this.javaScriptErrorsAnonymizer = e, this.apiErrorsTracker = i, this.apiErrorsAnonymizer = r, this.configuration = n, this.basicRequestParameters = o, this.iframeEventsEmitter = s, this.commandsService = a, this.customEventEmitter = c
            }
            return t.prototype.init = function() {
                this.contentSecurityPolicyErrorsService = new fo(new ho), this.contentSecurityPolicyErrorsService.init();
                var t = new ce(this.configuration.getTrackerUri(), "errors");
                this.javaScriptErrorsService = new yo(this.javaScriptErrorsTracker, t, this.basicRequestParameters, this.javaScriptErrorsAnonymizer, this.customEventEmitter), this.javaScriptErrorsService.init(), this.iframeEventsEmitter.addListeners(this.javaScriptErrorsService);
                var e = new ce(this.configuration.getTrackerUri(), "api-errors");
                this.apiErrorsTracker.excludeDomains([po.CONTENTSQUARE, po.CLICKTALE, po.FAKE_TRACKER]), this.apiErrorsService = new vo(this.apiErrorsTracker, e, this.basicRequestParameters, this.apiErrorsAnonymizer), this.apiErrorsService.init(), this.iframeEventsEmitter.addListeners(this.apiErrorsService), this.registerCommands()
            }, t.prototype.registerCommands = function() {
                var t = this;
                this.commandsService.register(So, (function(e) {
                    return t.apiErrorsAnonymizer.addUrlMaskingPattern(e)
                })), this.commandsService.register(go, (function(e) {
                    return t.javaScriptErrorsService.trackCustomError(e)
                }))
            }, t.prototype.onInitTracking = function() {
                this.contentSecurityPolicyErrorsService.start()
            }, t.prototype.onStartTracking = function() {
                this.configuration.jsErrorsEnabled && this.javaScriptErrorsService.start(), this.configuration.apiErrorsEnabled && this.apiErrorsService.start()
            }, t.prototype.onAfterNaturalPageView = function() {
                this.javaScriptErrorsService.initStates(), this.apiErrorsService.initStates()
            }, t.prototype.onAfterArtificialPageView = function() {
                this.javaScriptErrorsService.initStates(), this.apiErrorsService.initStates()
            }, t.prototype.onBeforeSessionRenewal = function() {
                this.javaScriptErrorsService.stop(), this.apiErrorsService.stop()
            }, t.prototype.onOptout = function() {
                this.contentSecurityPolicyErrorsService.stop(), this.javaScriptErrorsService.stop(), this.apiErrorsService.stop()
            }, t
        }();
    ! function(t) {
        t.Set = "set", t.Remove = "remove"
    }(mo || (mo = {}));
    var Co = function() {
            function t(t, e) {
                this.configuration = t, this.cookieService = e, this.sameSite = Ot.None, this.isActivated = !1, this.setCookieBatch = [], this.removeCookieBatch = []
            }
            return t.prototype.init = function() {
                this.sameSite = this.cookieService.isSameSiteSupported() ? Ot.None : Ot.NotSet
            }, t.prototype.setStates = function(t, e) {
                this.currentDomainState = t, this.iframeDomainState = e
            }, t.prototype.start = function(t) {
                var e = this;
                this.iframeDomainState.init(this.getIframeDomain(), (function(i, r) {
                    var n = [e.currentDomainState.get()];
                    r && csArray.prototype.push.call(n, i);
                    var o = eo.select(n, e.configuration.lastTrackingDraw);
                    e.isActivated = !0, e.currentDomainState.apply(o), t()
                })), this.iframe = this.iframeDomainState.openIframe()
            }, t.prototype.setCookie = function(t, e, i) {
                if (this.isActivated) {
                    var r = {
                        name: t,
                        value: e,
                        samesite: this.sameSite,
                        secure: Lt.Yes
                    };
                    i && (r.expires = Nt.toExpireDate(i).getTime()), this.addToSetCookieBatch(r)
                }
            }, t.prototype.removeCookie = function(t) {
                this.isActivated && this.addToRemoveCookieBatch(t)
            }, t.prototype.addToRemoveCookieBatch = function(t) {
                this.removeCookieBatch = csArray.prototype.filter.call(this.removeCookieBatch, (function(e) {
                    return e !== t
                })), this.setCookieBatch = csArray.prototype.filter.call(this.setCookieBatch, (function(e) {
                    return e.name !== t
                })), csArray.prototype.push.call(this.removeCookieBatch, t), this.setBatchReadyCall()
            }, t.prototype.addToSetCookieBatch = function(t) {
                this.removeCookieBatch = csArray.prototype.filter.call(this.removeCookieBatch, (function(e) {
                    return e !== t.name
                })), this.setCookieBatch = csArray.prototype.filter.call(this.setCookieBatch, (function(e) {
                    return e.name !== t.name
                })), csArray.prototype.push.call(this.setCookieBatch, t), this.setBatchReadyCall()
            }, t.prototype.setBatchReadyCall = function() {
                this.sendMessagesBatchs()
            }, t.prototype.sendMessagesBatchs = function() {
                if (this.setCookieBatch.length > 0) {
                    var t = this.buildMessage(mo.Set, this.setCookieBatch);
                    this.sendMessage(t), this.setCookieBatch = []
                }
                if (this.removeCookieBatch.length > 0) {
                    var e = this.buildMessage(mo.Remove, this.removeCookieBatch);
                    this.sendMessage(e), this.removeCookieBatch = []
                }
            }, t.prototype.buildMessage = function(t, e) {
                return {
                    command: t,
                    cookies: e,
                    domain: null,
                    pid: this.configuration.projectId
                }
            }, t.prototype.sendMessage = function(t) {
                var e = "https://" + this.getIframeDomain();
                this.iframe.contentWindow && this.iframe.contentWindow.postMessage(t, e)
            }, t.prototype.getIframeDomain = function() {
                return this.configuration.dualCollectionTagDomain && "contentsquare.net" !== this.configuration.dualCollectionTagDomain ? "cdnssl." + this.configuration.dualCollectionTagDomain : "csxd.contentsquare.net"
            }, Y([Vi(), _t("send xdframe-single-iframe batch")], t.prototype, "setBatchReadyCall", null), t
        }(),
        To = function() {
            function t(t, e) {
                this.configuration = t, this.xdframeOpener = e
            }
            return t.prototype.init = function(t, e) {
                this.xdframeOrigin = "https://" + t, this.callback = e
            }, t.prototype.openIframe = function() {
                var t = this;
                this.xdframeOpener.onMessage((function(e) {
                    t.handleXdframeMessage(e)
                })), this.xdframeOpener.onTimeout((function() {
                    t.handleTimeout()
                })), this.xdframeOpener.start();
                var e = this.getXdframeUrl(this.xdframeOrigin);
                return this.xdframeOpener.open(e)
            }, t.prototype.handleXdframeMessage = function(t) {
                if (this.isXdframeMessage(t)) {
                    var e = t.data,
                        i = !0;
                    if (this.isXdframeErrorMessage(t)) return void xt.warn("Error xdframe single domain: " + csJSON.stringify(t.data) + " from " + t.origin);
                    if (!Zt.isRawDomainState(e)) return void xt.warn("Unknown message format from xdframe single domain: " + csJSON.stringify(t.data) + " from " + t.origin);
                    Zt.isValid(e) || (xt.warn("Invalid xdframe single domain state: " + csJSON.stringify(t.data) + " from " + t.origin), i = !1), this.xdframeOpener.stop(), this.callback(i ? Jt.fromRaw(e) : {}, i)
                }
            }, t.prototype.handleTimeout = function() {
                xt.warn("xdframe single domain: all messages not received")
            }, t.prototype.isXdframeMessage = function(t) {
                return t.origin === this.xdframeOrigin && Rt(t.data)
            }, t.prototype.isXdframeErrorMessage = function(t) {
                return !!t.data.error
            }, t.prototype.getXdframeUrl = function(t) {
                return t + "/uxa/xdframe-single-domain-1.1.1.html?pid=" + this.configuration.projectId
            }, t
        }(),
        wo = function() {
            function t(t, e, i) {
                this.configuration = t, this.visitorService = e, this.sessionService = i
            }
            return t.prototype.getRequestParameters = function() {
                if (!this.visitorService.doesVisitorExist() || !this.sessionService.doesSessionExist()) return {};
                var t = this.visitorService.getVisitor();
                return K(K(K({}, {
                    v: "11.21.0"
                }), this.configuration.getRequestParameters()), {
                    uu: t.id,
                    sn: "" + t.visitsCount,
                    pn: "" + this.sessionService.getSession().pageNumber
                })
            }, t
        }(),
        bo = function() {
            function t() {
                var t = this;
                this.isStarted = !1, this.onEventCallbacks = [], this.useCapture = !1, this.eventHandler = {
                    boundElement: window,
                    type: "error",
                    listener: function(e) {
                        return t.errorListener(e)
                    }
                }
            }
            return t.prototype.onEvent = function(t) {
                csArray.prototype.push.call(this.onEventCallbacks, t)
            }, t.prototype.start = function() {
                this.isStarted || (ue(this.eventHandler, this.useCapture), this.isStarted = !0)
            }, t.prototype.stop = function() {
                this.isStarted && (pe(this.eventHandler, this.useCapture), this.isStarted = !1)
            }, t.prototype.errorListener = function(t) {
                var e = this.buildJavaScriptError(t);
                csArray.prototype.forEach.call(this.onEventCallbacks, (function(t) {
                    return t(e)
                }))
            }, t.prototype.decorateErrorMessage = function(e) {
                return e.length <= t.MAX_ERROR_MESSAGE_LENGTH ? e : csString.prototype.slice.call(e, 0, t.MAX_ERROR_MESSAGE_LENGTH - t.truncatedErrorMessageMarker.length) + t.truncatedErrorMessageMarker
            }, t.prototype.buildJavaScriptError = function(t) {
                return {
                    errorType: "jsError",
                    message: this.decorateErrorMessage(t.message),
                    filename: t.filename,
                    lineno: t.lineno,
                    colno: t.colno
                }
            }, t.truncatedErrorMessageMarker = "…", t.MAX_ERROR_MESSAGE_LENGTH = 1024, Y([_t("Event handler type: error")], t.prototype, "errorListener", null), t
        }(),
        Ro = function() {
            function t(t, e) {
                this.commandsService = t, this.projectConfiguration = e
            }
            return t.prototype.init = function() {
                var t = this;
                this.commandsService.register(["debugEvents"], (function(e) {
                    "boolean" == typeof e && t.projectConfiguration.updateDynamicFields("emitDebugEvents", e)
                }))
            }, t
        }();

    function ko(t, e, i) {
        if (!kt(e) && !kt(i)) return t.href;
        var r = kt(e) ? function(t) {
                return U(t, "/") ? t : "/" + t
            }(e) : t.pathname,
            n = kt(i) ? function(t) {
                return U(t, "?") || "" === t ? t : "?" + t
            }(i) : t.search;
        return t.protocol + "//" + t.host + r + n
    }
    var Ao, Io, Po, No = function() {
            function t(t, e) {
                this.location = t, this.pii = e
            }
            return t.prototype.overridePath = function(t) {
                kt(t) && bt(t) && (this.path = "" === t ? void 0 : t)
            }, t.prototype.overrideQuery = function(t) {
                kt(t) && bt(t) && (this.query = t)
            }, t.prototype.computeOverriddenUrl = function(t) {
                return this.isCurrentPageUrl(t) ? this.getUrl() : t
            }, t.prototype.isCurrentPageUrl = function(t) {
                var e = this.normalizeUrl(this.location.href);
                return this.normalizeUrl(t) === e
            }, t.prototype.normalizeUrl = function(t) {
                return q(t, "/") ? csString.prototype.slice.call(t, 0, -1) : t
            }, t.prototype.getUrl = function() {
                return ko(this.location, this.path, this.query)
            }, t.prototype.getUrlProtocol = function() {
                return this.location.protocol
            }, t.prototype.getRequestParameters = function() {
                var t = this.getUrl();
                return {
                    url: this.pii.anonymize(t)
                }
            }, t
        }(),
        Mo = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return W(e, t), e.prototype.emitPageEvent = function(t) {
                for (var e = 0, i = this.listeners; e < i.length; e++) {
                    var r = i[e];
                    r.onPageEvent && r.onPageEvent(t)
                }
            }, e.prototype.emitEventTriggerRecording = function(t, e) {
                for (var i = 0, r = this.listeners; i < r.length; i++) {
                    var n = r[i];
                    n.onEventTriggerRecording && n.onEventTriggerRecording(t, e)
                }
            }, e.prototype.emitCustomErrorEvent = function(t) {
                for (var e = 0, i = this.listeners; e < i.length; e++) {
                    var r = i[e];
                    r.onCustomErrorEvent && r.onCustomErrorEvent(t)
                }
            }, e.prototype.emitUserIdentifierEvent = function(t) {
                for (var e = 0, i = this.listeners; e < i.length; e++) {
                    var r = i[e];
                    r.onUserIdentifierEvent && r.onUserIdentifierEvent(t)
                }
            }, e
        }(zn),
        Oo = function() {
            this.isStarted = !1
        },
        Lo = function(t) {
            function e(e, i) {
                var r = t.call(this) || this;
                return r.xhrRequestTracker = e, r.fetchRequestTracker = i, r.onEventCallbacks = [], r.excludedDomains = [], r
            }
            return W(e, t), e.prototype.init = function() {
                var t = this;
                this.xhrRequestTracker.onEvent((function(e) {
                    return t.apiErrorListener(e)
                })), this.fetchRequestTracker.onEvent((function(e) {
                    return t.apiErrorListener(e)
                }))
            }, e.prototype.onEvent = function(t) {
                csArray.prototype.push.call(this.onEventCallbacks, t)
            }, e.prototype.start = function() {
                this.isStarted || (this.xhrRequestTracker.start(), this.fetchRequestTracker.start(), this.isStarted = !0)
            }, e.prototype.stop = function() {
                this.isStarted && (this.xhrRequestTracker.stop(), this.fetchRequestTracker.stop(), this.isStarted = !1)
            }, e.prototype.apiErrorListener = function(t) {
                if (t.url && t.statusCode) {
                    if (t.url = ht(t.url), csArray.prototype.some.call(this.excludedDomains, (function(e) {
                            return -1 !== csString.prototype.indexOf.call(t.url, e)
                        }))) return;
                    if (t.statusCode >= 400) {
                        var e = this.buildApiError(t);
                        csArray.prototype.forEach.call(this.onEventCallbacks, (function(t) {
                            return t(e)
                        }))
                    }
                }
            }, e.prototype.buildApiError = function(t) {
                return {
                    errorType: "apiError",
                    url: t.url,
                    method: t.method,
                    requestTime: t.requestTime,
                    responseTime: t.responseTime,
                    statusCode: t.statusCode,
                    library: t.library
                }
            }, e.prototype.excludeDomains = function(t) {
                var e;
                (e = csArray.prototype.push).call.apply(e, Q([this.excludedDomains], t))
            }, e.truncatedErrorMessageMarker = "…", e
        }(Oo),
        xo = function(t) {
            function e(e) {
                var i = t.call(this) || this;
                return i.monkeyPatcher = e, i.callbacks = [], i.openHook = function(t) {
                    var e = t.context,
                        r = t.args,
                        n = t.callerName;
                    return i.interceptOpen(e, r, n)
                }, i
            }
            return W(e, t), e.prototype.onEvent = function(t) {
                csArray.prototype.push.call(this.callbacks, t)
            }, e.prototype.start = function() {
                this.isStarted || (this.createInterceptors(), this.openInterceptor && this.openInterceptor.activate(), this.isStarted = !0)
            }, e.prototype.createInterceptors = function() {
                this.openInterceptor || (this.openInterceptor = this.monkeyPatcher.createSyncFunctionInterceptor({
                    target: XMLHttpRequest.prototype,
                    methodName: "open",
                    hook: this.openHook,
                    options: {
                        withCallerName: !0
                    }
                }))
            }, e.prototype.stop = function() {
                this.isStarted && (this.openInterceptor && this.openInterceptor.deactivate(), this.isStarted = !1)
            }, e.prototype.interceptOpen = function(t, e, i) {
                var r = this;
                t.apiCall = {
                    url: e[1],
                    method: e[0],
                    requestTime: F.now(),
                    responseTime: 0,
                    statusCode: 0
                }, t.apiCall.library = i, t.addEventListener("readystatechange", (function() {
                    return r.readyStateChangeListener(t)
                }))
            }, e.prototype.readyStateChangeListener = function(t) {
                t.readyState === XMLHttpRequest.DONE && (t.apiCall.responseTime = F.now(), t.apiCall.statusCode = t.status, csArray.prototype.forEach.call(this.callbacks, (function(e) {
                    return e(t.apiCall)
                })))
            }, Y([_t("XhrRequestTracker.interceptOpen")], e.prototype, "interceptOpen", null), Y([_t("XhrRequestTracker.readyStateChangeListener")], e.prototype, "readyStateChangeListener", null), e
        }(Oo),
        _o = function(t) {
            function e(e) {
                var i = t.call(this) || this;
                return i.monkeyPatcher = e, i.callbacks = [], i.hook = function(t) {
                    var e = t.result,
                        r = t.args,
                        n = t.callerName;
                    i.interceptFetch(e, r, n)
                }, i
            }
            return W(e, t), e.prototype.onEvent = function(t) {
                csArray.prototype.push.call(this.callbacks, t)
            }, e.prototype.start = function() {
                this.canTrackFetch() && !this.isStarted && (this.createFetchInterceptor(), this.fetchInterceptor && this.fetchInterceptor.activate(), this.isStarted = !0)
            }, e.prototype.canTrackFetch = function() {
                return !!window.fetch && "function" == typeof window.fetch
            }, e.prototype.prepareArgs = function(t, e) {
                var i = Q(e);
                return i[0] && "function" == typeof i[0].clone && (i[0] = e[0].clone()), {
                    context: t,
                    args: i
                }
            }, e.prototype.createFetchInterceptor = function() {
                this.fetchInterceptor || (this.fetchInterceptor = this.monkeyPatcher.createAsyncFunctionInterceptor({
                    target: window,
                    methodName: "fetch",
                    hook: this.hook,
                    hookPrepareArgs: this.prepareArgs,
                    options: {
                        withCallerName: !0
                    }
                }))
            }, e.prototype.stop = function() {
                this.isStarted && (this.fetchInterceptor && this.fetchInterceptor.deactivate(), this.isStarted = !1)
            }, e.prototype.interceptFetch = function(t, e, i) {
                return X(this, void 0, void 0, (function() {
                    var r, n, o, s, a, c;
                    return J(this, (function(u) {
                        switch (u.label) {
                            case 0:
                                r = e[0], n = e[1], o = new Request(r, n), (s = {
                                    url: o.url,
                                    method: o.method,
                                    requestTime: F.now(),
                                    responseTime: 0,
                                    statusCode: 0
                                }).library = i, u.label = 1;
                            case 1:
                                return u.trys.push([1, 3, , 4]), [4, t];
                            case 2:
                                return a = u.sent(), [3, 4];
                            case 3:
                                if (c = u.sent(), this.isNetworkError(c) || this.isAbortedRequestError(c) || this.isTrustTokenOperationError(c)) return [2];
                                throw c;
                            case 4:
                                return s.responseTime = F.now(), a.type.indexOf("opaque") > -1 ? s.statusCode = -1 : s.statusCode = a.status, csArray.prototype.forEach.call(this.callbacks, (function(t) {
                                    return t(s)
                                })), [2]
                        }
                    }))
                }))
            }, e.prototype.isNetworkError = function(t) {
                return t instanceof TypeError
            }, e.prototype.isAbortedRequestError = function(t) {
                return t instanceof DOMException && "AbortError" === t.name
            }, e.prototype.isTrustTokenOperationError = function(t) {
                return t instanceof DOMException && csArray.prototype.some.call(e.TRUST_TOKEN_OPERATION_ERROR_NAMES, (function(e) {
                    return e === t.name
                }))
            }, e.TRUST_TOKEN_OPERATION_ERROR_NAMES = ["NoModificationAllowedError", "InvalidStateError", "OperationError"], Y([_t("FetchRequestTracker.interceptFetch")], e.prototype, "interceptFetch", null), e
        }(Oo);
    (Ao || (Ao = {})).transformEvent = function(t, e, i) {
        return function(t, e) {
            return Zi(e) && (e.tgt = "" + t + Vo + e.tgt), void 0 !== e.tgtHM && (e.tgtHM = "" + t + Vo + e.tgtHM),
                function(t) {
                    return void 0 !== t.tgtLk
                }(e) && (e.tgtLk = "" + t + Vo + e.tgtLk), e
        }(e, function(t, e) {
            if (void 0 !== (r = e).x && void 0 !== r.y) {
                var i = t.getBoundingClientRect();
                e.x = Math.round(i.left + e.x + Oe.windowOffsetX()), e.y = Math.round(i.top + e.y + Oe.windowOffsetY())
            }
            var r;
            return e
        }(t, i))
    }, (Io || (Io = {})).transformCommandsBatch = function(t, e) {
        return {
            iframePath: e.iframePath ? "" + t + Vo + e.iframePath : t,
            commands: e.commands
        }
    }, (Po || (Po = {})).transformEmerchandisingMessage = function(t, e) {
        if (0 === e.products.length) return e;
        var i = csArray.prototype.map.call(e.products, (function(e) {
            return K(K({}, e), {
                targetPath: "" + t + Vo + e.targetPath
            })
        }));
        return K(K({}, e), {
            products: i
        })
    };
    var Do, Vo = "|iframe|",
        Uo = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return W(e, t), e.prototype.emitIframeEvent = function(t, e, i, r) {
                switch (i) {
                    case mt.ChildLogMessage:
                        this.logMessage(r);
                        break;
                    case mt.AnalysisEvent:
                        var n = Ao.transformEvent(t, e, r);
                        this.emitIframeAnalysisEvent(n);
                        break;
                    case mt.JavascriptError:
                        this.emitIframeJavascriptError(r);
                        break;
                    case mt.ApiError:
                        this.emitIframeApiError(r);
                        break;
                    case mt.EmerchandisingMessage:
                        var o = Po.transformEmerchandisingMessage(e, r);
                        this.emitIframeEmerchandisingMessage(o);
                        break;
                    case mt.Commands:
                        var s = Io.transformCommandsBatch(e, r);
                        this.emitIframeCommands(s);
                        break;
                    case mt.IntegrationCallback:
                        this.emitIframeIntegrationCallback(r);
                        break;
                    default:
                        xt.error("Parent received unknown data type from iframe : " + csJSON.stringify(r))
                }
            }, e.prototype.logMessage = function(t) {
                var e = t.message,
                    i = t.errorCode;
                switch (t.level) {
                    case z.debug:
                        xt.debug(e, i);
                        break;
                    case z.warn:
                        xt.warn(e, i);
                        break;
                    case z.error:
                        xt.error(e, i);
                        break;
                    case z.critical:
                        xt.critical(e, i)
                }
            }, e.prototype.emitIframeAnalysisEvent = function(t) {
                for (var e = 0, i = this.listeners; e < i.length; e++) {
                    var r = i[e];
                    r.onIframeAnalysisEvent && r.onIframeAnalysisEvent(t)
                }
            }, e.prototype.emitIframeJavascriptError = function(t) {
                for (var e = 0, i = this.listeners; e < i.length; e++) {
                    var r = i[e];
                    r.onIframeJavascriptError && r.onIframeJavascriptError(t)
                }
            }, e.prototype.emitIframeApiError = function(t) {
                for (var e = 0, i = this.listeners; e < i.length; e++) {
                    var r = i[e];
                    r.onIframeApiError && r.onIframeApiError(t)
                }
            }, e.prototype.emitIframeEmerchandisingMessage = function(t) {
                for (var e = 0, i = this.listeners; e < i.length; e++) {
                    var r = i[e];
                    r.onIframeEmerchandisingMessage && r.onIframeEmerchandisingMessage(t)
                }
            }, e.prototype.emitIframeCommands = function(t) {
                for (var e = 0, i = this.listeners; e < i.length; e++) {
                    var r = i[e];
                    r.onIframeCommands && r.onIframeCommands(t)
                }
            }, e.prototype.emitIframeIntegrationCallback = function(t) {
                for (var e = 0, i = this.listeners; e < i.length; e++) {
                    var r = i[e];
                    r.onIframeIntegrationCallback && r.onIframeIntegrationCallback(t)
                }
            }, e
        }(zn);
    ! function(t) {
        t.COMPRESSION_DISABLED = "compressionDisabled"
    }(Do || (Do = {}));
    var qo, zo, Bo = function() {
            function t(t, e, i) {
                this.configuration = t, this.cookieService = e, this.browserSessionStorage = i, this.debugFlags = []
            }
            return t.prototype.init = function() {
                var t = this.configuration.cookielessTrackingEnabled ? this.browserSessionStorage.getItem("_cs_debug") : this.cookieService.get("_cs_debug");
                t && (this.debugFlags = csString.prototype.split.call(t, "."))
            }, t.prototype.isCompressionDisabled = function() {
                return -1 !== csArray.prototype.indexOf.call(this.debugFlags, Do.COMPRESSION_DISABLED)
            }, t
        }(),
        Fo = function() {
            function t(t) {
                this.onError = t, this.WORKER_SIGNATURE = "CS_WORKER_SIGNATURE", this.worker = this.tryCreateCompressionWorker(), this.callbacks = {}, this.callbackId = 0
            }
            return t.prototype.isSupported = function() {
                return null !== this.worker
            }, t.prototype.compress = function(t, e, i) {
                if (this.isSupported()) {
                    var r = this.getNewCallbackId();
                    this.callbacks[r] = i, this.worker.postMessage([this.WORKER_SIGNATURE, t, e, r])
                }
            }, t.prototype.compressSync = function(t) {
                return mr.compressToBase64(t)
            }, t.prototype.tryCreateCompressionWorker = function() {
                try {
                    var t = csString.prototype.replace.call(csString.prototype.replace.call(this.compressionScript.toString(), "GET_LZ_STRING_SOURCE", vr), "SIGNATURE_PLACEHOLDER", csJSON.stringify(this.WORKER_SIGNATURE));
                    return this.createWorker("(" + t + ")();")
                } catch (t) {
                    return null
                }
            }, t.prototype.createWorker = function(t) {
                var e = this,
                    i = window.csURL || window.webkitURL,
                    r = window.Blob,
                    n = window.Worker;
                if (!i || !r || !n) return null;
                var o = new r([t], {
                        type: "application/javascript"
                    }),
                    s = new n(i.createObjectURL(o));
                return s.onerror = function(t) {
                    return e.handleWorkerError(t)
                }, s.onmessage = function(t) {
                    return e.handleWorkerMessage(t)
                }, s
            }, t.prototype.handleWorkerError = function(t) {
                var e = "WorkerError: " + (t.message ? t.message : "No message");
                return this.onError(e)
            }, t.prototype.handleWorkerMessage = function(t) {
                var e = t.data,
                    i = e[0],
                    r = e[1],
                    n = e[2];
                i === this.WORKER_SIGNATURE && (this.callbacks[r](n), delete this.callbacks[r])
            }, t.prototype.compressionScript = function() {
                var t = GET_LZ_STRING_SOURCE(),
                    e = SIGNATURE_PLACEHOLDER;
                self.addEventListener("message", (function(i) {
                    var r = i.data,
                        n = r[0],
                        o = r[1],
                        s = r[2],
                        a = r[3];
                    if (n === e) {
                        var c;
                        switch (o) {
                            case "base64":
                                c = t.compressToBase64(s);
                                break;
                            case "byteArray":
                                c = t.compressToUint8Array(s).buffer
                        }
                        self.postMessage([e, a, c])
                    }
                }))
            }, t.prototype.getNewCallbackId = function() {
                return this.callbackId += 1
            }, Y([_t("Worker message handler")], t.prototype, "handleWorkerMessage", null), t
        }(),
        Ho = function() {
            function t(t) {
                this.pii = t, this.urlMaskingPatterns = []
            }
            return t.prototype.addUrlMaskingPattern = function(e) {
                for (var i = [], r = 0, n = csString.prototype.split.call(e, "/"); r < n.length; r++) {
                    var o = n[r];
                    U(o, t.ROUTE_PARAMETER_START) ? csArray.prototype.push.call(i, {
                        key: o,
                        value: "CS_ANONYMIZED_" + csString.prototype.toUpperCase.call(csString.prototype.slice.call(o, 1))
                    }) : csArray.prototype.push.call(i, {
                        key: o,
                        value: null
                    })
                }
                csArray.prototype.push.call(this.urlMaskingPatterns, i)
            }, t.prototype.anonymize = function(t) {
                return K(K({}, t), {
                    url: this.anonymizeUrl(t.url)
                })
            }, t.prototype.anonymizeUrl = function(t) {
                return this.maskUrl(this.pii.anonymize(this.removeQueryString(t)))
            }, t.prototype.maskUrl = function(t) {
                for (var e = csString.prototype.split.call(t, "/"), i = 0, r = this.urlMaskingPatterns; i < r.length; i++) {
                    var n = r[i],
                        o = this.getAnonymizedUrl(e, n);
                    if (null !== o) return o
                }
                return t
            }, t.prototype.getAnonymizedUrl = function(e, i) {
                if (e.length < i.length) return null;
                for (var r = "", n = 0; n < e.length; n += 1)
                    if (n >= i.length) r += e[n] + "/";
                    else if (U(i[n].key, t.ROUTE_PARAMETER_START)) r += i[n].value + "/";
                else {
                    if (e[n] !== i[n].key) return null;
                    r += e[n] + "/"
                }
                return csString.prototype.slice.call(r, 0, -1)
            }, t.prototype.removeQueryString = function(t) {
                var e = csString.prototype.indexOf.call(t, "?");
                return -1 !== e ? csString.prototype.slice.call(t, 0, e + 1) : t
            }, t.ROUTE_PARAMETER_START = ":", t
        }(),
        jo = function() {
            function t(t, e) {
                this.pii = t, this.urlService = e
            }
            return t.prototype.anonymize = function(t) {
                return kt(t.message) && (t.message = this.pii.anonymize(t.message)), kt(t.filename) && (t.filename = this.pii.anonymize(this.urlService.computeOverriddenUrl(t.filename))), t
            }, t
        }(),
        Go = function() {
            function t() {}
            return t.prototype.setItem = function(t, e) {
                window.sessionStorage.setItem(t, e)
            }, t.prototype.getItem = function(t) {
                return window.sessionStorage.getItem(t)
            }, t.prototype.removeItem = function(t) {
                window.sessionStorage.removeItem(t)
            }, t
        }(),
        Wo = function() {
            function t() {}
            return t.prototype.setItem = function(t, e) {
                window.localStorage.setItem(t, e)
            }, t.prototype.getItem = function(t) {
                return window.localStorage.getItem(t)
            }, t.prototype.removeItem = function(t) {
                window.localStorage.removeItem(t)
            }, t
        }(),
        Ko = ["visit", 2],
        Yo = ["page", 3],
        Xo = function() {
            function t(t, e) {
                this.pii = t, this.storage = e, this.customVariablesPage = {}
            }
            return t.prototype.set = function(t, e, i, r) {
                var n, o;
                if (t > 0 && At(e) && At(i)) {
                    var s = this.pii.anonymize("" + (bt(e) ? e : csString(e))),
                        a = this.pii.anonymize("" + (bt(i) ? i : csString(i)));
                    if (n = [s.slice(0, 20), a.slice(0, 255)], o = "" !== i, !kt(r) || csArray.prototype.indexOf.call(Ko, r) >= 0) {
                        var c = this.getCustomVariablesSession();
                        o ? c[t] = n : delete c[t], this.setCustomVariableSession(c)
                    }(!kt(r) || csArray.prototype.indexOf.call(Yo, r) >= 0) && (o ? this.customVariablesPage[t] = n : delete this.customVariablesPage[t])
                }
            }, t.prototype.getCustomVariablesSession = function() {
                var t = this.storage.get();
                if (!t) return {};
                var e = window.JSON.parse(t);
                return null !== e && Rt(e) ? e : {}
            }, t.prototype.setCustomVariableSession = function(t) {
                this.storage.set(window.JSON.stringify(t))
            }, t.prototype.removeCustomVariablesSession = function() {
                this.storage.remove()
            }, t.prototype.getRequestParameters = function() {
                var t = this.getCustomVariablesSession();
                for (var e in this.customVariablesPage) this.customVariablesPage.hasOwnProperty(e) && (t[e] = this.customVariablesPage[e]);
                if (window.JSON.stringify(t).length <= 2) return {};
                var i = {
                    cvars: this.getValidCustomVars(t)
                };
                return this.customVariablesPage && window.JSON.stringify(this.customVariablesPage).length > 2 && (i.cvarp = this.getValidCustomVars(this.customVariablesPage)), i
            }, t.prototype.getValidCustomVars = function(t) {
                for (var e in t)
                    if (t.hasOwnProperty(e)) {
                        var i = parseInt(e, 10),
                            r = t[e],
                            n = r[0],
                            o = r[1];
                        a = 1, c = 20, (!(wt(s = i) && s >= a && s <= c) || n.length > 20 || o.length > 255) && delete t[e]
                    }
                var s, a, c, u = function(t) {
                    var e;
                    for (e in t) return !1;
                    return !0
                }(t) ? [] : t;
                return window.JSON.stringify(u)
            }, t
        }(),
        Jo = ["setCustomVariable"],
        Qo = function() {
            function t(t, e) {
                this.commandsService = t, this.customVariablesService = e
            }
            return t.prototype.init = function() {
                var t = this;
                this.commandsService.register(Jo, (function(e, i, r, n) {
                    t.customVariablesService.set(e, i, r, n)
                }))
            }, t.prototype.onOptout = function() {
                this.customVariablesService.removeCustomVariablesSession()
            }, t
        }(),
        Zo = function() {
            function t(t, e, i) {
                this.configuration = t, this.cookieChecker = e, this.parentLogContext = i
            }
            return t.prototype.init = function() {
                var t = this;
                performance.mark("cs-start-boot");
                var e = new Bn,
                    i = new nt,
                    r = new Zn,
                    n = new io(this.configuration, r, i),
                    o = new No(window.location, i),
                    s = new Dt(this.configuration, o, this.cookieChecker);
                s.init();
                var a = new Go,
                    c = new Wo,
                    u = new Qn(window.location, s),
                    p = new Bo(this.configuration, s, a);
                p.init();
                var l = new Co(this.configuration, s);
                l.init();
                var h, d = new Fo((function(t) {
                    xt.warn(t)
                }));
                if (this.configuration.useMalkaPipeline) {
                    var f = new ce(this.configuration.getQuotaServiceUri(), "quota");
                    (h = new Dn(this.configuration, d, f, e, u, o)).init()
                } else h = new _n(this.configuration, d, u, o);
                var y = new Qt(this.configuration, s, l, a),
                    v = new Vn(y, h),
                    m = new Kt(this.configuration, s, l, a),
                    g = new Ln(this.configuration, m, v);
                this.parentLogContext.setContext(g, v), h.setVisitorService(g);
                var S = new qn(g, v),
                    E = new te(this.configuration, s, l, a),
                    C = new Xn(window.location, E),
                    T = new Jn(C),
                    w = new Un(this.configuration, g, C),
                    b = new Uo,
                    R = new lo,
                    k = new uo(R, b),
                    A = new ee(this.configuration, s, l, a),
                    I = new Xo(i, A),
                    P = new Qo(R, I),
                    N = new Gt(g, v, C, I, this.configuration),
                    M = new ne,
                    O = new re(M, window.location),
                    L = new co(this.configuration, N, O),
                    x = new To(this.configuration, M);
                l.setStates(N, x);
                var _ = new Mn(this.configuration, g, C, w, S, L, l, u);
                return n.init(), _.compute((function(r) {
                    k.init();
                    var n = new Mo,
                        a = new Hn(t.configuration, s, c),
                        u = new Kn(t.configuration, a, e),
                        l = new Wn(R, u),
                        h = new ro(t.configuration, s, c),
                        f = new no(e, window.location, h),
                        y = new so(R, f),
                        m = new Ro(R, t.configuration),
                        S = new wo(t.configuration, g, v),
                        E = new bo,
                        C = new pi,
                        w = new xo(C),
                        A = new _o(C),
                        N = new Lo(w, A),
                        M = new Ho(i),
                        O = new jo(i, o),
                        L = new Eo(E, O, N, M, t.configuration, S, b, R, n);
                    (L.init(), performance.mark("cs-step2-boot"), e.addListeners(L), r) ? (e.emitInitTracking(), new Nn(S, d, g, v, e, R, k, t.configuration, y, f, l, u, i, o, m, n, E, O, N, M, b, p, I, P).start()) : new Yn(e, R, k, y, f, T, l).start()
                })), performance.mark("cs-end-boot"), performance.measure("cs-measure-boot", "cs-start-boot", "cs-end-boot"), {
                    LZString: mr
                }
            }, t
        }();
    ! function(t) {
        var e, i = {
            loadBundle: function(t) {
                var s = t.source,
                    a = t.data;
                if (n(a)) {
                    var p = function() {
                        var e, i, n, o = r("{domain}/tag/tag.bundle.js?v={version}", a);
                        e = o, i = function() {
                            return s.postMessage("csBundleLoaded", t.origin)
                        }, (n = document.createElement("script")).type = "text/javascript", n.async = !0, n.src = e, n.onload = i, n.charset = "utf-8", document.head.appendChild(n)
                    };
                    e = a.token, u(i.loadBundle), o(t.origin) ? p() : function(t, e) {
                        var i = function(t) {
                                var e = document.createElement("iframe");
                                return e.src = t, e.id = "content-square-bridge", e.setAttribute("style", "display: none !important; visibility: hidden !important;"), e
                            }(r("{domain}/tag/bridge.html?v={version}#{token}", t)),
                            n = function(t) {
                                t.source === i.contentWindow && "TOKEN_VALID" === t.data && (u(n), i.remove(), e())
                            };
                        c(n), document.head.appendChild(i)
                    }(a, p)
                }
            }
        };

        function r(t, e) {
            return csString.prototype.replace.call(csString.prototype.replace.call(csString.prototype.replace.call(t, "{version}", e.version), "{token}", e.token), "{domain}", e.domain)
        }

        function n(t) {
            return t && "csBundleInjection" === t.type && o(t.domain) && a(t.version) && s(t.token)
        }

        function o(t) {
            return /^https?:\/\/[a-zA-Z0-9\.\-]+\.(content-square\.fr|contentsquare\.com)$/.test(t)
        }

        function s(t) {
            return /^[a-zA-Z0-9]+$/.test(t)
        }

        function a(t) {
            return /^[a-zA-Z0-9\.]+$/.test(t)
        }

        function c(t) {
            window.addEventListener("message", t, !1)
        }

        function u(t) {
            window.removeEventListener("message", t, !1)
        }
        t.getToken = function() {
            return e
        }, t.isAuthorizedIncomingMessage = n, t.isAuthorizedDomain = o, t.isAuthorizedToken = s, t.isAuthorizedTagVersion = a, t.isActivable = function() {
            var t = window.opener || window.parent;
            return window !== t && window.addEventListener
        }, t.waitForBundleInjection = function() {
            c(i.loadBundle)
        }, t.listen = c, t.removeListener = u
    }(qo || (qo = {})),
    function(t) {
        var e, i = window.opener || window.parent,
            r = [/^https:\/\/app\.contentsquare\.com$/, /^https:\/\/dev-app\.contentsquare\.com$/, /^https:\/\/staging-app\.contentsquare\.com$/, /^https:\/\/.*\.test\.contentsquare\.com$/],
            n = {
                ping: function(t) {
                    "ping" === t.data && o(t.origin) && (e = t.origin, c(n.ping), a(n.insertMessageScript), s("utils.js" + "?cb=" + (new csDate).getTime()))
                },
                insertMessageScript: u((function(t) {
                    var e = t.data;
                    "string" == typeof e && "ping" !== e && (c(n.insertMessageScript), s(e))
                }))
            };

        function o(t) {
            return csArray.prototype.some.call(r, (function(e) {
                return e.test(t)
            }))
        }

        function s(t, i) {
            var r = document.createElement("script");
            r.type = "text/javascript", r.async = !0;
            var n = csString.prototype.replace.call(e, /^https?:/, "");
            r.src = n + "/tag/" + t, r.onload = i, r.charset = "utf-8", document.getElementsByTagName("head")[0].appendChild(r)
        }

        function a(t) {
            window.addEventListener("message", t, !1)
        }

        function c(t) {
            window.removeEventListener("message", t, !1)
        }

        function u(t) {
            return function(i) {
                i.origin === e && t(i)
            }
        }
        t.getToken = function() {
            return qo.getToken()
        }, t.isActivable = function() {
            return window !== i && window.addEventListener
        }, t.isAuthorizedDomain = o, t.waitForConnection = function() {
            a(n.ping), qo.waitForBundleInjection()
        }, t.listen = a, t.removeListener = c, t.secureListener = u, t.post = function(t) {
            e && i.postMessage(t, e)
        }
    }(zo || (zo = {}));
    var $o = window.CSFrameCommunication || zo,
        ts = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return W(e, t), e.prototype.emitAfterPageViewCallback = function(t) {
                for (var e = 0, i = this.listeners; e < i.length; e++) {
                    var r = i[e];
                    r.onAfterPageViewCallback && r.onAfterPageViewCallback(t)
                }
            }, e.prototype.emitIntegrationSessionKeyCallback = function(t) {
                for (var e = 0, i = this.listeners; e < i.length; e++) {
                    var r = i[e];
                    r.onIntegrationSessionKeyCallback && r.onIntegrationSessionKeyCallback(t)
                }
            }, e
        }(zn),
        es = function() {
            function t(t) {
                this.iframeCommandsSenderService = t
            }
            return t.prototype.init = function() {
                this.iframeCommandsSenderService.register(qi), this.iframeCommandsSenderService.register(Jo), this.iframeCommandsSenderService.register(en), this.iframeCommandsSenderService.register(rn), this.iframeCommandsSenderService.register(tn), this.iframeCommandsSenderService.register(Wi), this.iframeCommandsSenderService.register(Ki), this.iframeCommandsSenderService.register(Yi), this.iframeCommandsSenderService.register(Xi), this.iframeCommandsSenderService.register(cn), this.iframeCommandsSenderService.register(un), this.iframeCommandsSenderService.register(oo), this.iframeCommandsSenderService.register(Tn), this.iframeCommandsSenderService.register(wn), this.iframeCommandsSenderService.register(jn), this.iframeCommandsSenderService.register(Gn), this.iframeCommandsSenderService.register(So), this.iframeCommandsSenderService.register(go)
            }, t.prototype.onStartTracking = function() {
                this.iframeCommandsSenderService.start()
            }, t.prototype.onOptout = function() {
                this.iframeCommandsSenderService.stop()
            }, t
        }(),
        is = function(t) {
            function e(e, i) {
                var r = t.call(this) || this;
                return r.commandsService = e, r.iframeChildToParentCommunicationService = i, r.batch = [], r
            }
            return W(e, t), e.prototype.onStart = function() {
                this.commandsBatchReady()
            }, e.prototype.onStop = function() {
                this.batch = []
            }, e.prototype.register = function(t) {
                for (var e = this, i = function(t) {
                        r.commandsService.register([t], (function() {
                            for (var i = [], r = 0; r < arguments.length; r++) i[r] = arguments[r];
                            return e.send(t, i)
                        }))
                    }, r = this, n = 0, o = t; n < o.length; n++) {
                    i(o[n])
                }
            }, e.prototype.send = function(t, e) {
                csArray.prototype.push.call(this.batch, {
                    name: t,
                    params: e
                }), this.isStarted && this.commandsBatchReady()
            }, e.prototype.commandsBatchReady = function() {
                if (0 !== this.batch.length) {
                    var t = {
                        commands: this.batch
                    };
                    this.iframeChildToParentCommunicationService.sendToParent(mt.Commands, t), this.batch = []
                }
            }, Y([_t("Commands.iframe.commandsBatch.send")], e.prototype, "send", null), Y([Vi(), _t("send iframe commands batch")], e.prototype, "commandsBatchReady", null), e
        }(Te),
        rs = function(t) {
            function e(e, i, r) {
                var n = t.call(this) || this;
                return n.configuration = e, n.lifeCycleEventsEmitter = i, n.childLifeCycleEventEmitter = r, n.id = -1, n.parentOrigin = "", n.maxMessagesBuffer = 25, n.messageBuffer = [], n.messageHandler = {
                    boundElement: window,
                    type: "message",
                    listener: function(t) {
                        return n.messagesListener(t)
                    }
                }, n
            }
            return W(e, t), e.prototype.onStart = function() {
                ue(this.messageHandler, !1), this.sendDiscovery()
            }, e.prototype.onStop = function() {
                pe(this.messageHandler, !1)
            }, e.prototype.sendToParent = function(t, e) {
                var i = this.buildChildBaseMessage(t, e);
                this.sendMessage(i)
            }, e.prototype.sendDiscovery = function() {
                var t = this.buildChildBaseMessage(mt.Discovery);
                gt.sendMessage(window.parent, "*", t)
            }, e.prototype.buildChildBaseMessage = function(t, e) {
                var i = gt.buildBaseMessage(t, vt.Child, this.configuration.projectId, this.id);
                return e && (i.content = e), i
            }, e.prototype.sendMessage = function(t) {
                void 0 !== t.id ? gt.sendMessage(window.parent, this.parentOrigin, t) : this.addMessageToBuffer(t)
            }, e.prototype.messagesListener = function(t) {
                if (gt.isMessageValid(t, vt.Parent, this.configuration.projectId, this.configuration.hostnames)) switch (t.data.type) {
                    case mt.IntegrationCallback:
                        var e = t.data.content;
                        e.initiator === yt.AfterPageView ? this.childLifeCycleEventEmitter.emitAfterPageViewCallback(e) : e.initiator === yt.GetSessionKey ? this.childLifeCycleEventEmitter.emitIntegrationSessionKeyCallback(e) : xt.warn("Iframe child (" + this.id + ") received unknown IntegrationCallback type from parent (" + t.origin + ") : " + csJSON.stringify(t.data));
                        break;
                    case mt.Stop:
                        this.lifeCycleEventsEmitter.emitOptout();
                        break;
                    case mt.Discovery:
                        if (!wt(t.data.id) || t.data.id < 0) return void xt.warn("Iframe child (" + this.id + ") received discovery without valid id from parent (" + t.origin + ") : " + csJSON.stringify(t.data));
                        this.id = t.data.id, this.parentOrigin = t.origin, this.sendAllBufferedMessages();
                        break;
                    default:
                        xt.warn("Iframe child (" + this.id + ") received unknown data type from parent (" + t.origin + ") : " + csJSON.stringify(t.data))
                }
            }, e.prototype.addMessageToBuffer = function(t) {
                this.messageBuffer.length < this.maxMessagesBuffer && csArray.prototype.push.call(this.messageBuffer, t)
            }, e.prototype.sendAllBufferedMessages = function() {
                for (var t = 0, e = this.messageBuffer; t < e.length; t++) {
                    var i = e[t];
                    i.id = this.id, gt.sendMessage(window.parent, this.parentOrigin, i)
                }
                this.messageBuffer = []
            }, e
        }(Te),
        ns = function(t) {
            function e(e, i) {
                var r = t.call(this) || this;
                return r.apiErrorsTracker = e, r.iframeChildToParentCommunicationService = i, r
            }
            return W(e, t), e.prototype.init = function() {
                var t = this;
                this.apiErrorsTracker.init(), this.apiErrorsTracker.onEvent((function(e) {
                    return t.processEvent(e)
                }))
            }, e.prototype.onStart = function() {
                this.apiErrorsTracker.start()
            }, e.prototype.onStop = function() {
                this.apiErrorsTracker.stop()
            }, e.prototype.processEvent = function(t) {
                this.isStarted && this.iframeChildToParentCommunicationService.sendToParent(mt.ApiError, t)
            }, e
        }(Te),
        os = function(t) {
            function e(e, i) {
                var r = t.call(this) || this;
                return r.javaScriptErrorsTracker = e, r.iframeChildToParentCommunicationService = i, r
            }
            return W(e, t), e.prototype.init = function() {
                var t = this;
                this.javaScriptErrorsTracker.onEvent((function(e) {
                    return t.processEvent(e)
                }))
            }, e.prototype.onStart = function() {
                this.javaScriptErrorsTracker.start()
            }, e.prototype.onStop = function() {
                this.javaScriptErrorsTracker.stop()
            }, e.prototype.processEvent = function(t) {
                this.isStarted && this.iframeChildToParentCommunicationService.sendToParent(mt.JavascriptError, t)
            }, e
        }(Te),
        ss = function() {
            function t(t, e, i, r) {
                this.javaScriptErrorsTracker = t, this.apiErrorsTracker = e, this.configuration = i, this.iframeChildToParentCommunicationService = r
            }
            return t.prototype.init = function() {
                this.iframeJavaScriptErrorsService = new os(this.javaScriptErrorsTracker, this.iframeChildToParentCommunicationService), this.iframeJavaScriptErrorsService.init(), this.apiErrorsTracker.excludeDomains([po.CONTENTSQUARE, po.CLICKTALE, po.FAKE_TRACKER]), this.iframeApiErrorsService = new ns(this.apiErrorsTracker, this.iframeChildToParentCommunicationService), this.iframeApiErrorsService.init()
            }, t.prototype.onStartTracking = function() {
                this.configuration.jsErrorsEnabled && this.iframeJavaScriptErrorsService.start(), this.configuration.apiErrorsEnabled && this.iframeApiErrorsService.start()
            }, t.prototype.onOptout = function() {
                this.iframeJavaScriptErrorsService.stop(), this.iframeApiErrorsService.stop()
            }, t
        }(),
        as = function() {
            function t(t) {
                this.iframeChildToParentCommunicationService = t
            }
            return t.prototype.onStartTracking = function() {
                this.iframeChildToParentCommunicationService.start()
            }, t.prototype.onOptout = function() {
                this.iframeChildToParentCommunicationService.stop()
            }, t
        }(),
        cs = function() {
            function t(t, e, i) {
                this.iframeParentToChildrenCommunicationService = t, this.iframeEventsEmitter = e, this.iframeChildToParentCommunicationService = i
            }
            return t.prototype.init = function() {
                var t = this;
                this.iframeParentToChildrenCommunicationService.onChildMessage((function(e, i, r, n) {
                    return t.iframeEventsEmitter.emitIframeEvent(e, i, r, n)
                }))
            }, t.prototype.onStartTracking = function() {
                this.iframeParentToChildrenCommunicationService.start()
            }, t.prototype.onOptout = function() {
                this.iframeParentToChildrenCommunicationService.stop()
            }, t.prototype.onIframeAnalysisEvent = function(t) {
                this.iframeChildToParentCommunicationService.sendToParent(mt.AnalysisEvent, t)
            }, t.prototype.onIframeJavascriptError = function(t) {
                this.iframeChildToParentCommunicationService.sendToParent(mt.JavascriptError, t)
            }, t.prototype.onIframeApiError = function(t) {
                this.iframeChildToParentCommunicationService.sendToParent(mt.ApiError, t)
            }, t.prototype.onIframeEmerchandisingMessage = function(t) {
                this.iframeChildToParentCommunicationService.sendToParent(mt.EmerchandisingMessage, t)
            }, t.prototype.onIframeCommands = function(t) {
                this.iframeChildToParentCommunicationService.sendToParent(mt.Commands, t)
            }, t.prototype.onIframeIntegrationCallback = function(t) {
                this.iframeChildToParentCommunicationService.sendToParent(mt.IntegrationCallback, t)
            }, t.prototype.onAfterPageViewCallback = function(t) {
                this.iframeParentToChildrenCommunicationService.sendToChildren(mt.IntegrationCallback, t)
            }, t.prototype.onIntegrationSessionKeyCallback = function(t) {
                this.iframeParentToChildrenCommunicationService.sendToChildren(mt.IntegrationCallback, t)
            }, t
        }(),
        us = function(t) {
            function e(e, i, r) {
                var n = t.call(this) || this;
                return n.analysisEventsTracker = e, n.gestureTracker = i, n.iframeChildToParentCommunicationService = r, n
            }
            return W(e, t), e.prototype.init = function() {
                var t = this;
                this.analysisEventsTracker.onEvent((function(e) {
                    return t.processEvent(e)
                })), this.gestureTracker.onEvent((function(e) {
                    return t.processEvent(e)
                }))
            }, e.prototype.onStart = function() {
                this.analysisEventsTracker.start(), this.gestureTracker.start()
            }, e.prototype.onStop = function() {
                this.analysisEventsTracker.stop(), this.gestureTracker.stop()
            }, e.prototype.processEvent = function(t) {
                this.isStarted && t.type !== _i.RESIZE && this.iframeChildToParentCommunicationService.sendToParent(mt.AnalysisEvent, t)
            }, e
        }(Te),
        ps = function() {
            function t(t, e, i, r) {
                this.configuration = t, this.projectPathComputation = e, this.selector = i, this.iframeChildToParentCommunicationService = r
            }
            return t.prototype.init = function() {
                var t = new dr(this.configuration, this.projectPathComputation, this.selector),
                    e = new ir(this.configuration, this.projectPathComputation, new or(xt));
                this.iframeAnalysisEventsService = new us(t, e, this.iframeChildToParentCommunicationService), this.iframeAnalysisEventsService.init()
            }, t.prototype.onStartTracking = function() {
                this.iframeAnalysisEventsService.start()
            }, t.prototype.onOptout = function() {
                this.iframeAnalysisEventsService.stop()
            }, t
        }(),
        ls = function() {
            function t(t, e, i) {
                this.urlService = t, this.eMerchandisingTracker = e, this.iframeChildToParentCommunicationService = i, this.products = []
            }
            return t.prototype.collect = function() {
                this.products = this.eMerchandisingTracker.collectProducts(), this.targetUrl = this.urlService.getUrl(), this.sendEMerchandisingData()
            }, t.prototype.clearProducts = function() {
                this.products = []
            }, t.prototype.sendEMerchandisingData = function() {
                var t = {
                    targetUrl: this.targetUrl,
                    windowWidth: Oe.windowWidth(),
                    windowHeight: Oe.windowHeight(),
                    products: this.products
                };
                this.iframeChildToParentCommunicationService.sendToParent(mt.EmerchandisingMessage, t)
            }, t
        }(),
        hs = function() {
            function t(t, e, i) {
                this.configuration = t, this.urlService = e, this.iframeChildToParentCommunicationService = i
            }
            return t.prototype.init = function() {
                var t = new dn(this.configuration);
                this.iframeEmerchandisingService = new ls(this.urlService, t, this.iframeChildToParentCommunicationService)
            }, t.prototype.onStartTracking = function() {
                this.iframeEmerchandisingService.clearProducts(), this.iframeEmerchandisingService.collect()
            }, t
        }(),
        ds = function() {
            function t(t) {
                this.iframeChildToParentCommunicationService = t, this.registeredCallbacks = {}
            }
            return t.prototype.handleCommand = function(t) {
                It(t) && this.registerCallback(t)
            }, t.prototype.executeRegisteredCallbacks = function(t) {
                var e = t.trackingContext;
                if (e)
                    if (t.callbackId) {
                        var i = this.registeredCallbacks[t.callbackId];
                        i && this.executeAsync(i, e)
                    } else
                        for (var r in this.registeredCallbacks) this.executeAsync(this.registeredCallbacks[r], e)
            }, t.prototype.registerCallback = function(t) {
                var e = B.integer(),
                    i = {
                        callbackId: e,
                        initiator: yt.AfterPageView
                    };
                this.registeredCallbacks[e] = t, this.iframeChildToParentCommunicationService.sendToParent(mt.IntegrationCallback, i)
            }, t.prototype.executeAsync = function(t, e) {
                setTimeout((function() {
                    t(e)
                }))
            }, t
        }(),
        fs = function() {
            function t(t) {
                this.iframeChildToParentCommunicationService = t, this.pendingCallbacks = {}
            }
            return t.prototype.handleCommand = function(t) {
                Rt(t) && It(t.callback) && this.addPendingCallback(t.callback)
            }, t.prototype.executePendingCallbacks = function(t) {
                var e = t.trackingContext,
                    i = t.callbackId;
                if (i && e) {
                    var r = this.pendingCallbacks[i];
                    r && (delete this.pendingCallbacks[i], this.executeAsync(r, e.sessionKey))
                }
            }, t.prototype.addPendingCallback = function(t) {
                var e = B.integer(),
                    i = {
                        callbackId: e,
                        initiator: yt.GetSessionKey
                    };
                this.pendingCallbacks[e] = t, this.iframeChildToParentCommunicationService.sendToParent(mt.IntegrationCallback, i)
            }, t.prototype.executeAsync = function(t, e) {
                setTimeout((function() {
                    t(e)
                }))
            }, t
        }(),
        ys = function() {
            function t(t, e) {
                this.commandsService = t, this.iframeChildToParentCommunicationService = e
            }
            return t.prototype.init = function() {
                var t = this;
                this.iframeAfterPageViewService = new ds(this.iframeChildToParentCommunicationService), this.iframeGetSessionKeyService = new fs(this.iframeChildToParentCommunicationService), this.commandsService.register(Ii, (function(e) {
                    t.iframeAfterPageViewService.handleCommand(e)
                })), this.commandsService.register(Pi, (function(e) {
                    return t.iframeGetSessionKeyService.handleCommand(e)
                }))
            }, t.prototype.onAfterPageViewCallback = function(t) {
                this.iframeAfterPageViewService.executeRegisteredCallbacks(t)
            }, t.prototype.onIntegrationSessionKeyCallback = function(t) {
                this.iframeGetSessionKeyService.executePendingCallbacks(t)
            }, t
        }(),
        vs = function() {
            function t(t, e, i, r, n) {
                var o = this;
                this.childLifeCycleEventsEmitter = t, this.lifeCycleEventsEmitter = e, this.configuration = i, this.iframeChildToParentCommunicationService = r, this.commandsService = n, this.startDataCollection = function() {
                    o.commandsService.start(), o.loadTracker.start()
                }
            }
            return t.prototype.start = function() {
                var t = this,
                    e = new on(O, this.configuration),
                    i = new sn(e),
                    r = new ps(this.configuration, e, i, this.iframeChildToParentCommunicationService),
                    n = new as(this.iframeChildToParentCommunicationService);
                if (this.configuration.eMerchandisingEnabled) {
                    var o = new nt,
                        s = new No(window.location, o),
                        a = new hs(this.configuration, s, this.iframeChildToParentCommunicationService);
                    this.lifeCycleEventsEmitter.addListeners(a), a.init()
                }
                var c = new ys(this.commandsService, this.iframeChildToParentCommunicationService);
                this.childLifeCycleEventsEmitter.addListeners(c), c.init();
                var u = new Pn(this.configuration),
                    p = new Uo,
                    l = new cs(u, p, this.iframeChildToParentCommunicationService);
                p.addListeners(l), this.childLifeCycleEventsEmitter.addListeners(l), this.lifeCycleEventsEmitter.addListeners(n, l, r), l.init(), r.init(), this.loadTracker = new an, this.loadTracker.onLoad((function() {
                    t.lifeCycleEventsEmitter.emitStartTracking()
                })), this.startDataCollection()
            }, t
        }(),
        ms = function() {
            function t(t) {
                this.configuration = t
            }
            return t.prototype.init = function() {
                var t = new Bn,
                    e = new ts,
                    i = new rs(this.configuration, t, e),
                    r = new lo,
                    n = new is(r, i),
                    o = new es(n);
                o.init();
                var s = new bo,
                    a = new pi,
                    c = new xo(a),
                    u = new _o(a),
                    p = new Lo(c, u),
                    l = new ss(s, p, this.configuration, i);
                return l.init(), t.addListeners(o, l), t.emitInitTracking(), new vs(e, t, this.configuration, i, r).start(), {
                    LZString: mr
                }
            }, t
        }(),
        gs = function() {
            function t(t, e, i) {
                this.configuration = t, this.iframeContext = e, this.parentLogContext = i
            }
            return t.prototype.start = function() {
                var t, e;
                if (!window.UXAnalytics) {
                    var i = new Vt(this.iframeContext, this.configuration);
                    i.init();
                    var r = new jt(this.configuration, i);
                    if (this.iframeContext.isTopWindowTracker() && r.canTrack()) {
                        if ((null === (t = window.CSProtectnativeFunctionsLogs) || void 0 === t ? void 0 : t.Warning) && xt.warn("protectNativeFunctions failed: " + window.CSProtectnativeFunctionsLogs.Warning), null === (e = window.CSProtectnativeFunctionsLogs) || void 0 === e ? void 0 : e.Critical) return void xt.error("protectNativeFunctions failed: " + window.CSProtectnativeFunctionsLogs.Critical);
                        var n = new Zo(this.configuration, i, this.parentLogContext);
                        window.UXAnalytics = n.init()
                    } else if (!this.iframeContext.isTopWindowTracker() && r.canTrackInIframe()) {
                        var o = new ms(this.configuration);
                        window.UXAnalytics = o.init()
                    }!window.CSFrameCommunication && $o.isActivable() && (window.CSFrameCommunication = $o, $o.waitForConnection())
                }
            }, Y([_t("main.start")], t.prototype, "start", null), t
        }();
    try {
        performance.mark("cs-start-tag");
        var Ss = new H(window.CS_CONF);
        window._uxa = window._uxa || [], Ss.processOptionOverrides(window._uxa);
        var Es = new j(window, Ss);
        Es.init();
        var Cs = new Ct;
        if (Es.isTopWindowTracker()) {
            var Ts = new pt(Ss, Cs);
            xt.setStrategy(Ts)
        } else {
            var ws = new Et(Ss);
            xt.setStrategy(ws)
        }
        new gs(Ss, Es, Cs).start()
    } catch (t) {}
}]);