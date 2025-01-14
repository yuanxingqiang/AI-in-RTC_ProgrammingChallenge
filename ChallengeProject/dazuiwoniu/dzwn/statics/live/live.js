/*! AgoraRTC|BUILD v2.8.0-0-g0d6a3be */
!function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("AgoraRTC", [], t) : "object" == typeof exports ? exports.AgoraRTC = t() : e.AgoraRTC = t()
} (window,
function() {
    return function(e) {
        var t = {};
        function n(i) {
            if (t[i]) return t[i].exports;
            var o = t[i] = {
                i: i,
                l: !1,
                exports: {}
            };
            return e[i].call(o.exports, o, o.exports, n),
            o.l = !0,
            o.exports
        }
        return n.m = e,
        n.c = t,
        n.d = function(e, t, i) {
            n.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: i
            })
        },
        n.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }),
            Object.defineProperty(e, "__esModule", {
                value: !0
            })
        },
        n.t = function(e, t) {
            if (1 & t && (e = n(e)), 8 & t) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var i = Object.create(null);
            if (n.r(i), Object.defineProperty(i, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e) for (var o in e) n.d(i, o,
            function(t) {
                return e[t]
            }.bind(null, o));
            return i
        },
        n.n = function(e) {
            var t = e && e.__esModule ?
            function() {
                return e.
            default
            }:
            function() {
                return e
            };
            return n.d(t, "a", t),
            t
        },
        n.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        },
        n.p = "",
        n(n.s = 22)
    } ([function(e, t, n) {
        "use strict";
        n.r(t);
        var i = n(5),
        o = n.n(i),
        r = n(6),
        a = n(2),
        s = n(1),
        c = 0,
        d = "free",
        u = [],
        l = [],
        p = 0;
        setInterval(function() {
            Object(a.getParameter)("UPLOAD_LOG") && f.info("console log upload")
        },
        9e5);
        var f = function() {
            var e, t, n, i, f, m, g = "https://".concat(Object(a.getParameter)("LOG_UPLOAD_SERVER"), "/upload/v1"),
            v = ["DEBUG", "INFO", "WARNING", "ERROR", "NONE"],
            S = 0,
            I = function e(t) {
                d = "uploading",
                setTimeout(function() { !
                    function(e, t, n) {
                        var i;
                        Array.isArray(e) || (e = [e]),
                        e = e.map(function(e) {
                            return {
                                log_item_id: c++,
                                log_level: e.log_level,
                                payload_str: e.payload
                            }
                        }),
                        i = {
                            sdk_version: a.VERSION,
                            process_id: Object(s.a)(),
                            payload: JSON.stringify(e)
                        };
                        try {
                            Object(r.c)(g, i,
                            function(e) {
                                "OK" === e ? t && t(e) : n && n(e)
                            },
                            function(e) {
                                n && n(e)
                            },
                            {
                                withCredentials: !0
                            })
                        } catch(e) {
                            n && n(e)
                        }
                    } (t,
                    function() {
                        p = 0,
                        0 !== u.length ? (l = u.length < 10 ? u.splice(0, u.length) : u.splice(0, 10), e(l)) : d = "free"
                    },
                    function() {
                        setTimeout(function() {
                            e(l)
                        },
                        p++<2 ? 200 : 1e4)
                    })
                },
                3e3)
            };
            t = function() {
                for (var t = [0], n = 0; n < arguments.length; n++) t.push(arguments[n]);
                e.apply(this, t)
            },
            n = function() {
                for (var t = [1], n = 0; n < arguments.length; n++) t.push(arguments[n]);
                e.apply(this, t)
            },
            i = function() {
                for (var t = [2], n = 0; n < arguments.length; n++) t.push(arguments[n]);
                e.apply(this, t)
            },
            f = function() {
                for (var t = [3], n = 0; n < arguments.length; n++) t.push(arguments[n]);
                e.apply(this, t)
            };
            var h = {};
            return m = function(e) {
                h[e] || (i.apply(void 0, arguments), h[e] = !0)
            },
            {
                DEBUG: 0,
                INFO: 1,
                WARNING: 2,
                ERROR: 3,
                NONE: 4,
                enableLogUpload: function() {
                    Object(a.setParameter)("UPLOAD_LOG", !0)
                },
                disableLogUpload: function() {
                    Object(a.setParameter)("UPLOAD_LOG", !1)
                },
                setProxyServer: function(e) {
                    g = e ? "https://".concat(e, "/ls/?h=").concat(Object(a.getParameter)("LOG_UPLOAD_SERVER"), "&p=443&d=upload/v1") : "https://".concat(Object(a.getParameter)("LOG_UPLOAD_SERVER"), "/upload/v1")
                },
                setLogLevel: function(e) {
                    e > 4 ? e = 4 : e < 0 && (e = 0),
                    S = e
                },
                log: e = function() {
                    var e, t = arguments[0],
                    n = arguments;
                    if (n[0] = (e = new Date).toTimeString().split(" ")[0] + ":" + e.getMilliseconds() + " Agora-SDK [" + (v[t] || "DEFAULT") + "]:",
                    function(e, t) {
                        if (Object(a.getParameter)("UPLOAD_LOG")) try {
                            t = Array.prototype.slice.call(t);
                            var n = "";
                            t.forEach(function(e) {
                                "object" === o()(e) && (e = JSON.stringify(e)),
                                n = n + e + " "
                            }),
                            u.push({
                                payload: n,
                                log_level: e
                            }),
                            "free" === d && (l = u.length < 10 ? u.splice(0, u.length) : u.splice(0, 10), I(l))
                        } catch(e) {}
                    } (t, n), !(t < S)) switch (t) {
                    case 0:
                    case 1:
                        console.log.apply(console, n);
                        break;
                    case 2:
                        console.warn.apply(console, n);
                        break;
                    case 3:
                        console.error.apply(console, n);
                        break;
                    default:
                        return void console.log.apply(console, n)
                    }
                },
                debug: t,
                info: n,
                warning: i,
                deprecate: m,
                error: f
            }
        } ();
        t.
    default = f
    },
    function(e, t, n) {
        "use strict";
        var i = n(9),
        o = n.n(i),
        r = n(4),
        a = n.n(r),
        s = n(2),
        c = n(0),
        d = n(6),
        u = n(11),
        l = n.n(u);
        n.d(t, "b",
        function() {
            return g
        }),
        n.d(t, "a",
        function() {
            return m
        });
        var p = {
            eventType: null,
            sid: null,
            lts: null,
            success: null,
            cname: null,
            uid: null,
            peer: null,
            cid: null,
            elapse: null,
            extend: null,
            vid: 0
        },
        f = null,
        m = function() {
            return f || (f = "process-" + l()(), c.
        default.info("processId: " + f)),
            f
        },
        g = function() {
            var e = {
                list: {}
            };
            e.url = Object(d.e)() ? "https://".concat(Object(s.getParameter)("EVENT_REPORT_DOMAIN"), ":6443/events/message") : "http://".concat(Object(s.getParameter)("EVENT_REPORT_DOMAIN"), ":6080/events/message"),
            e.urlBackup = Object(d.e)() ? "https://".concat(Object(s.getParameter)("EVENT_REPORT_BACKUP_DOMAIN"), ":6443/events/message") : "http://".concat(Object(s.getParameter)("EVENT_REPORT_BACKUP_DOMAIN"), ":6080/events/message"),
            e.setProxyServer = function(t) {
                t ? (e.url = Object(d.e)() ? "https://".concat(t, "/rs/?h=").concat(Object(s.getParameter)("EVENT_REPORT_DOMAIN"), "&p=6443&d=events/message") : "http://".concat(t, "/rs/?h=").concat(Object(s.getParameter)("EVENT_REPORT_DOMAIN"), "&p=6080&d=events/message"), e.urlBackup = Object(d.e)() ? "https://".concat(t, "/rs/?h=").concat(Object(s.getParameter)("EVENT_REPORT_BACKUP_DOMAIN"), "&p=6443&d=events/message") : "http://".concat(t, "/rs/?h=").concat(Object(s.getParameter)("EVENT_REPORT_BACKUP_DOMAIN"), "&p=6080&d=events/message"), c.
            default.debug("reportProxyServerURL: ".concat(e.url)), c.
            default.debug("reportProxyServerBackupURL: ".concat(e.urlBackup))):
                (e.url = Object(d.e)() ? "https://".concat(Object(s.getParameter)("EVENT_REPORT_DOMAIN"), ":6443/events/message") : "http://".concat(Object(s.getParameter)("EVENT_REPORT_DOMAIN"), ":6080/events/message"), e.urlBackup = Object(d.e)() ? "https://".concat(Object(s.getParameter)("EVENT_REPORT_BACKUP_DOMAIN"), ":6443/events/message") : "http://".concat(Object(s.getParameter)("EVENT_REPORT_BACKUP_DOMAIN"), ":6080/events/message"))
            },
            e.sessionInit = function(t, n) {
                var i = a()({},
                p);
                i.startTime = +new Date,
                i.sid = t,
                i.cname = n.cname,
                e.list[t] = i;
                var o = a()({},
                {
                    willUploadConsoleLog: Object(s.getParameter)("UPLOAD_LOG")
                },
                n.extend),
                r = a()({},
                i);
                r.eventType = "session_init",
                r.appid = n.appid,
                r.browser = navigator.userAgent,
                r.build = s.BUILD,
                r.lts = +new Date,
                r.elapse = r.lts - r.startTime,
                r.extend = JSON.stringify(o),
                r.mode = n.mode,
                r.process = m(),
                r.success = n.succ,
                r.version = s.VERSION,
                delete r.startTime,
                e.send({
                    type: "io.agora.pb.Wrtc.Session",
                    data: r
                }),
                e._flushInvokeReport(t)
            },
            e.joinChooseServer = function(t, n, i) {
                n.uid && (e.list[t].uid = parseInt(n.uid)),
                n.cid && (e.list[t].cid = parseInt(n.cid));
                var o = a()({},
                e.list[t]);
                o.eventType = "join_choose_server";
                var r = n.lts;
                o.lts = Date.now(),
                o.eventElapse = o.lts - r,
                o.chooseServerAddr = n.csAddr,
                o.errorCode = n.ec,
                o.elapse = o.lts - o.startTime,
                o.success = n.succ,
                o.chooseServerAddrList = JSON.stringify(n.serverList),
                delete o.startTime,
                e.send({
                    type: "io.agora.pb.Wrtc.JoinChooseServer",
                    data: o
                })
            },
            e.reqUserAccount = function(t, n) {
                n.vid && (e.list[t].vid = n.vid);
                var i = a()({},
                e.list[t]),
                o = n.lts;
                i.eventType = "req_user_account",
                i.lts = Date.now(),
                i.success = n.success,
                i.serverAddress = n.serverAddress,
                i.stringUid = n.stringUid,
                i.uid = n.uid,
                i.errorCode = n.errorCode,
                i.elapse = i.lts - i.startTime,
                i.eventElapse = i.lts - o,
                i.extend = "string" == typeof n.extend ? n.extend: JSON.stringify(n.extend),
                delete i.startTime,
                e.send({
                    type: "io.agora.pb.Wrtc.ReqUserAccount",
                    data: i
                })
            },
            e.joinGateway = function(t, n) {
                n.vid && (e.list[t].vid = n.vid);
                var i = a()({},
                e.list[t]),
                o = n.lts;
                i.eventType = "join_gateway",
                i.lts = Date.now(),
                i.gatewayAddr = n.addr,
                i.success = n.succ,
                i.errorCode = n.ec,
                i.elapse = i.lts - i.startTime,
                i.eventElapse = i.lts - o,
                delete i.startTime,
                e.send({
                    type: "io.agora.pb.Wrtc.JoinGateway",
                    data: i
                })
            },
            e.publish = function(t, n) {
                var i = a()({},
                e.list[t]);
                i.eventType = "publish";
                var o = n.lts;
                i.lts = Date.now(),
                i.eventElapse = i.lts - o,
                i.elapse = i.lts - i.startTime,
                i.success = n.succ,
                i.errorCode = n.ec,
                n.videoName && (i.videoName = n.videoName),
                n.audioName && (i.audioName = n.audioName),
                n.screenName && (i.screenName = n.screenName),
                delete i.startTime,
                e.send({
                    type: "io.agora.pb.Wrtc.Publish",
                    data: i
                }),
                e._flushInvokeReport(t)
            },
            e.subscribe = function(t, n) {
                var i = a()({},
                e.list[t]);
                i.eventType = "subscribe";
                var o = n.lts;
                i.lts = Date.now(),
                i.eventElapse = i.lts - o,
                i.elapse = i.lts - i.startTime,
                i.errorCode = n.ec,
                i.success = n.succ,
                isFinite(n.peerid) ? i.peer = n.peerid: i.peerSuid = "" + n.peerid,
                "boolean" == typeof n.video && (i.video = n.video),
                "boolean" == typeof n.audio && (i.audio = n.audio),
                delete i.startTime,
                e.send({
                    type: "io.agora.pb.Wrtc.Subscribe",
                    data: i
                }),
                e._flushInvokeReport(t)
            },
            e.firstRemoteFrame = function(t, n) {
                var i = a()({},
                e.list[t]);
                i.eventType = "first_remote_frame";
                var o = n.lts;
                i.lts = Date.now(),
                i.eventElapse = i.lts - o,
                i.elapse = i.lts - i.startTime,
                i.width = n.width,
                i.height = n.height,
                i.success = n.succ,
                i.errorCode = n.ec,
                isFinite(n.peerid) ? i.peer = n.peerid: i.peerSuid = "" + n.peerid,
                delete i.startTime,
                e.send({
                    type: "io.agora.pb.Wrtc.FirstFrame",
                    data: i
                })
            },
            e.streamSwitch = function(t, n) {
                var i = a()({},
                e.list[t]);
                i.eventType = "stream_switch",
                i.lts = Date.now(),
                i.isDual = n.isdual,
                i.elapse = i.lts - i.startTime,
                i.success = i.succ,
                delete i.startTime,
                e.send({
                    type: "io.agora.pb.Wrtc.StreamSwitch",
                    data: i
                })
            },
            e.audioSendingStopped = function(t, n) {
                var i = a()({},
                e.list[t]);
                i.eventType = "audio_sending_stopped",
                i.lts = Date.now(),
                i.elapse = i.lts - i.startTime,
                i.reason = n.reason,
                i.success = n.succ,
                delete i.startTime,
                e.send({
                    type: "io.agora.pb.Wrtc.AudioSendingStopped",
                    data: i
                })
            },
            e.videoSendingStopped = function(t, n) {
                var i = a()({},
                e.list[t]);
                i.eventType = "video_sending_stopped",
                i.lts = Date.now(),
                i.elapse = i.lts - i.startTime,
                i.reson = n.reason,
                i.success = n.succ,
                delete i.startTime,
                e.send({
                    type: "io.agora.pb.Wrtc.VideoSendingStopped",
                    data: i
                })
            },
            e.requestProxyAppCenter = function(t, n) {
                var i = a()({},
                e.list[t]),
                o = n.lts;
                i.eventType = "request_proxy_appcenter",
                i.lts = Date.now(),
                i.eventElapse = i.lts - o,
                i.elapse = i.lts - i.startTime,
                i.extend = n.extend + "",
                i.APAddr = n.APAddr,
                i.workerManagerList = n.workerManagerList,
                i.response = n.response,
                i.errorCode = n.ec,
                i.success = n.succ,
                delete i.startTime,
                e.send({
                    type: "io.agora.pb.Wrtc.RequestProxyAppCenter",
                    data: i
                })
            },
            e.requestProxyWorkerManager = function(t, n) {
                var i = a()({},
                e.list[t]),
                o = n.lts;
                i.eventType = "request_proxy_worker_manager",
                i.lts = Date.now(),
                i.eventElapse = i.lts - o,
                i.elapse = i.lts - i.startTime,
                i.extend = n.extend,
                i.workerManagerAddr = n.workerManagerAddr,
                i.response = n.response,
                i.errorCode = n.ec,
                i.success = n.succ,
                delete i.startTime,
                e.send({
                    type: "io.agora.pb.Wrtc.RequestProxyWorkerManager",
                    data: i
                })
            };
            var t = 0;
            return e.reportApiInvoke = function(e, n) {
                var i = n.tag,
                r = n.name,
                a = n.getStates,
                s = n.options,
                c = n.timeout,
                d = void 0 === c ? 6e4: c,
                u = n.callback,
                l = n.reportResult,
                p = void 0 === l || l,
                f = Date.now(),
                m = 0,
                v = t++,
                S = function() {
                    return o()({
                        tag: i,
                        invokeId: v,
                        sid: e,
                        name: r,
                        apiInvokeTime: f,
                        options: s
                    },
                    a && {
                        states: (t = a(), Object.keys(t).reduce(function(e, n) {
                            var i = e;
                            return null != t[n] && (i[n] = t[n]),
                            i
                        },
                        {}))
                    });
                    var t
                }, I = setTimeout(function() {
                    g._sendApiInvoke(o()({},
                    S(), {
                        error: "API_INVOKE_TIMEOUT",
                        success: !1
                    }))
                },
                d);
                return function(e, t) {
                    if (clearTimeout(I), ++m > 1 && (e = "EXECUTOR_INVOKE_".concat(m)), e) return g._sendApiInvoke(o()({},
                    S(), {
                        success: !1,
                        error: e
                    },
                    a && {
                        states: a()
                    })),
                    u && u(e);
                    g._sendApiInvoke(o()({},
                    S(), {
                        success: !0
                    },
                    p && {
                        result: t
                    },
                    a && {
                        states: a()
                    })),
                    u && u(null, t)
                }
            },
            e._cachedItems = [],
            e._cacheInvokeReport = function(t) {
                t.lts || (t.lts = Date.now()),
                e._cachedItems.push(t),
                e._cachedItems.length > 50 && e._cachedItems.shift()
            },
            e._flushInvokeReport = function(t) {
                if (e._cachedItems.length) {
                    var n = e._cachedItems;
                    e._cachedItems = [],
                    c.
                default.debug("Flush cached event reporting:", n.length),
                    n.forEach(function(n, i) {
                        n.sid = t,
                        setTimeout(function() {
                            e._sendApiInvoke(n)
                        },
                        5e3 + 500 * i)
                    })
                }
            },
            e._sendApiInvoke = function(t) {
                var n = t.tag,
                i = t.invokeId,
                r = t.sid,
                a = t.name,
                c = t.result,
                d = t.states,
                u = t.options,
                l = t.error,
                p = t.success,
                f = t.apiInvokeTime,
                m = t.lts,
                g = Object(s.getParameter)("NOT_REPORT_EVENT");
                if (! (n && g instanceof Array && -1 !== g.indexOf(n))) if (e.list[r]) {
                    var v = e.list[r],
                    S = v.startTime,
                    I = v.cname,
                    h = v.uid,
                    y = v.cid,
                    _ = (m = m || Date.now()) - S,
                    E = m - f,
                    b = o()({
                        invokeId: i,
                        sid: r,
                        cname: I,
                        cid: y,
                        lts: m,
                        uid: h,
                        success: p,
                        elapse: _,
                        apiName: a,
                        execElapse: E
                    },
                    void 0 !== u && {
                        options: JSON.stringify(u)
                    },
                    void 0 !== d && {
                        execStates: JSON.stringify(d)
                    },
                    void 0 !== l && {
                        errorCode: JSON.stringify(l)
                    },
                    void 0 !== c && {
                        execResult: JSON.stringify(c)
                    });
                    e.send({
                        type: "io.agora.pb.Wrtc.ApiInvoke",
                        data: b
                    })
                } else e._cacheInvokeReport(arguments[0])
            },
            e._send = function(t) {
                try {
                    var n = [];
                    t && t.data && t.data.apiName ? n.push(["apiName", "" + t.data.apiName]) : t && t.data && t.data.eventType && n.push(["eventType", t.data.eventType]);
                    var i = n.map(function(e) {
                        return "".concat(e[0], "=").concat(encodeURIComponent(e[1]))
                    }).join("&"),
                    o = -1 === e.url.indexOf("?") ? "".concat(e.url, "?").concat(i) : e.url;
                    Object(d.c)(o, t, null,
                    function(n) {
                        var o = -1 === e.urlBackup.indexOf("?") ? "".concat(e.urlBackup, "?").concat(i) : e.urlBackup;
                        Object(d.c)(o, t, null,
                        function(e) {},
                        {
                            timeout: 1e4
                        })
                    },
                    {
                        timeout: 1e4
                    })
                } catch(e) {}
            },
            e.sendCache = [],
            e.sendTimer = null,
            e.send = function(t) {
                if (e.sendCache.push(t), null === e.sendTimer) {
                    return function t() {
                        e.sendTimer = setTimeout(function() {
                            if (0 !== e.sendCache.length) return e._send(e.sendCache.shift()),
                            t();
                            e.sendTimer = null
                        },
                        Object(s.getParameter)("EVENT_REPORT_SEND_INTERVAL"))
                    } ()
                }
            },
            e
        } ()
    },
    function(e, t, n) {
        "use strict";
        t.__esModule = !0;
        t.BUILD = "v2.8.0-0-g0d6a3be";
        t.VERSION = "2.8.0";
        t.SUPPORT_RESOLUTION_LIST = {
            "90p_1": [160, 90, null, null, null, null],
            "120p_1": [160, 120, 15, 15, 30, 65],
            "120p_3": [120, 120, 15, 15, 30, 50],
            "120p_4": [212, 120, null, null, null, null],
            "180p_1": [320, 180, 15, 15, 30, 140],
            "180p_3": [180, 180, 15, 15, 30, 100],
            "180p_4": [240, 180, 15, 15, 30, 120],
            "240p_1": [320, 240, 15, 15, 40, 200],
            "240p_3": [240, 240, 15, 15, 40, 140],
            "240p_4": [424, 240, 15, 15, 40, 220],
            "360p_1": [640, 360, 15, 15, 80, 400],
            "360p_3": [360, 360, 15, 15, 80, 260],
            "360p_4": [640, 360, 30, 30, 80, 600],
            "360p_6": [360, 360, 30, 30, 80, 400],
            "360p_7": [480, 360, 15, 15, 80, 320],
            "360p_8": [480, 360, 30, 30, 80, 490],
            "360p_9": [640, 360, 15, 15, 80, 800],
            "360p_10": [640, 360, 24, 24, 80, 800],
            "360p_11": [640, 360, 24, 24, 80, 1e3],
            "480p_1": [640, 480, 15, 15, 20, 500, 1, 5],
            "480p_2": [640, 480, 30, 30, 100, 1e3, 25, 30],
            "480p_3": [480, 480, 15, 15, 100, 400],
            "480p_4": [640, 480, 30, 30, 100, 750],
            "480p_6": [480, 480, 30, 30, 100, 600],
            "480p_8": [848, 480, 15, 15, 100, 610],
            "480p_9": [848, 480, 30, 30, 100, 930],
            "480p_10": [640, 480, 10, 10, 100, 400],
            "720p_1": [1280, 720, 15, 15, 120, 1130, 1, 5],
            "720p_2": [1280, 720, 30, 30, 120, 2e3, 25, 30],
            "720p_3": [1280, 720, 30, 30, 120, 1710],
            "720p_5": [960, 720, 15, 15, 120, 910],
            "720p_6": [960, 720, 30, 30, 120, 1380],
            "1080p_1": [1920, 1080, 15, 15, 120, 2080, 1, 5],
            "1080p_2": [1920, 1080, 30, 30, 120, 3e3, 25, 30],
            "1080p_3": [1920, 1080, 30, 30, 120, 3150],
            "1080p_5": [1920, 1080, 60, 60, 120, 4780],
            "1440p_1": [2560, 1440, 30, 30, 120, 4850],
            "1440p_2": [2560, 1440, 60, 60, 120, 7350],
            "4k_1": [3840, 2160, 30, 30, 120, 8910],
            "4k_3": [3840, 2160, 60, 60, 120, 13500]
        };
        t.AUDIO_PROFILE_SETTINGS = {
            speech_low_quality: [!1, !1, !0, !0],
            speech_standard: [!1, !1, !0, !1],
            music_standard: [!1, !1, !1, !1],
            standard_stereo: [!1, !0, !1, !1],
            high_quality: [!0, !1, !1, !1],
            high_quality_stereo: [!0, !0, !1, !1],
        default:
            [!1, !1, !1, !1]
        };
        var i = {
            WEBCS_DOMAIN: ["ap-web-1.agora.io", "ap-web-2.agoraio.cn"],
            WEBCS_DOMAIN_BACKUP_LIST: ["ap-web-3.agora.io", "ap-web-4.agoraio.cn"],
            PROXY_CS: ["ap-proxy-1.agora.io", "ap-proxy-2.agora.io"],
            ACCOUNT_REGISTER: ["ap-web-1.agora.io", "ap-web-2.agoraio.cn", "ap-web-3.agora.io", "ap-web-4.agoraio.cn"],
            ACCOUNT_REGISTER_RETRY_TIMEOUT: 1,
            ACCOUNT_REGISTER_RETRY_RATIO: 2,
            ACCOUNT_REGISTER_RETRY_TIMEOUT_MAX: 6e4,
            ACCOUNT_REGISTER_RETRY_COUNT_MAX: 1e5,
            AUDIO_CONTEXT: null,
            LOG_UPLOAD_SERVER: "logservice.agora.io",
            EVENT_REPORT_DOMAIN: "webcollector-1.agora.io",
            EVENT_REPORT_BACKUP_DOMAIN: "webcollector-2.agoraio.cn",
            WEBCS_BACKUP_CONNECT_TIMEOUT: 6e3,
            HTTP_CONNECT_TIMEOUT: 5e3,
            PLAYER_STATE_DEFER: 2e3,
            UPLOAD_LOG: !1,
            NOT_REPORT_EVENT: [],
            FILEPATH_LENMAX: 255,
            SUBSCRIBE_TCC: !1,
            PING_PONG_TIME_OUT: 10,
            WEBSOCKET_TIMEOUT_MIN: 1e4,
            EVENT_REPORT_SEND_INTERVAL: 1e3,
            MEDIA_ELEMENT_EXISTS_DEPTH: 3,
            CANDIDATE_TIMEOUT: 2e3,
            SHIM_CANDIDATE: !1,
            LEAVE_MSG_TIMEOUT: 2e3
        };
        t.setParameter = function(e, t) {
            return void 0 !== i[e] && (i[e] = t, !0)
        };
        t.getParameter = function(e) {
            return void 0 !== i[e] ? i[e] : null
        }
    },
    function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, "getBrowserInfo",
        function() {
            return I
        }),
        n.d(t, "getBrowserVersion",
        function() {
            return p
        }),
        n.d(t, "getBrowserOS",
        function() {
            return f
        }),
        n.d(t, "isChrome",
        function() {
            return i
        }),
        n.d(t, "isSafari",
        function() {
            return o
        }),
        n.d(t, "isFireFox",
        function() {
            return a
        }),
        n.d(t, "isOpera",
        function() {
            return s
        }),
        n.d(t, "isEdge",
        function() {
            return r
        }),
        n.d(t, "isQQBrowser",
        function() {
            return c
        }),
        n.d(t, "isWeChatBrowser",
        function() {
            return d
        }),
        n.d(t, "isLegacyChrome",
        function() {
            return g
        }),
        n.d(t, "isSupportedPC",
        function() {
            return u
        }),
        n.d(t, "isSupportedMobile",
        function() {
            return l
        }),
        n.d(t, "getChromeKernelVersion",
        function() {
            return S
        }),
        n.d(t, "isChromeKernel",
        function() {
            return m
        });
        var i = function() {
            var e = I();
            return e.name && "Chrome" === e.name
        },
        o = function() {
            var e = I();
            return e.name && "Safari" === e.name
        },
        r = function() {
            var e = I();
            return e.name && "Edge" === e.name
        },
        a = function() {
            var e = I();
            return e.name && "Firefox" === e.name
        },
        s = function() {
            var e = I();
            return e.name && "OPR" === e.name
        },
        c = function() {
            var e = I();
            return e.name && "QQBrowser" === e.name
        },
        d = function() {
            var e = I();
            return e.name && "MicroMessenger" === e.name
        },
        u = function() {
            var e = f();
            return "Linux" === e || "Mac OS X" === e || "Mac OS" === e || -1 !== e.indexOf("Windows")
        },
        l = function() {
            var e = f();
            return "Android" === e || "iOS" === e
        },
        p = function() {
            return I().version
        },
        f = function() {
            return I().os
        },
        m = function() {
            return !! navigator.userAgent.match(/chrome\/[\d]./i)
        };
        function g() {
            return window.navigator.appVersion && null !== window.navigator.appVersion.match(/Chrome\/([\w\W]*?)\./) && window.navigator.appVersion.match(/Chrome\/([\w\W]*?)\./)[1] <= 35
        }
        var v, S = function() {
            var e = navigator.userAgent.match(/chrome\/[\d]./i);
            return e && e[0] && e[0].split("/")[1]
        },
        I = (v = function() {
            var e, t = navigator.userAgent,
            n = t.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
            "Chrome" === n[1] && null != (e = t.match(/(OPR(?=\/))\/?(\d+)/i)) && (n = e),
            "Safari" === n[1] && null != (e = t.match(/version\/(\d+)/i)) && (n[2] = e[1]),
            ~t.toLowerCase().indexOf("qqbrowser") && null != (e = t.match(/(qqbrowser(?=\/))\/?(\d+)/i)) && (n = e),
            ~t.toLowerCase().indexOf("micromessenger") && null != (e = t.match(/(micromessenger(?=\/))\/?(\d+)/i)) && (n = e),
            ~t.toLowerCase().indexOf("edge") && null != (e = t.match(/(edge(?=\/))\/?(\d+)/i)) && (n = e),
            ~t.toLowerCase().indexOf("trident") && null != (e = /\brv[ :]+(\d+)/g.exec(t) || []) && (n = [null, "IE", e[1]]);
            var i = void 0,
            o = [{
                s: "Windows 10",
                r: /(Windows 10.0|Windows NT 10.0)/
            },
            {
                s: "Windows 8.1",
                r: /(Windows 8.1|Windows NT 6.3)/
            },
            {
                s: "Windows 8",
                r: /(Windows 8|Windows NT 6.2)/
            },
            {
                s: "Windows 7",
                r: /(Windows 7|Windows NT 6.1)/
            },
            {
                s: "Windows Vista",
                r: /Windows NT 6.0/
            },
            {
                s: "Windows Server 2003",
                r: /Windows NT 5.2/
            },
            {
                s: "Windows XP",
                r: /(Windows NT 5.1|Windows XP)/
            },
            {
                s: "Windows 2000",
                r: /(Windows NT 5.0|Windows 2000)/
            },
            {
                s: "Windows ME",
                r: /(Win 9x 4.90|Windows ME)/
            },
            {
                s: "Windows 98",
                r: /(Windows 98|Win98)/
            },
            {
                s: "Windows 95",
                r: /(Windows 95|Win95|Windows_95)/
            },
            {
                s: "Windows NT 4.0",
                r: /(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/
            },
            {
                s: "Windows CE",
                r: /Windows CE/
            },
            {
                s: "Windows 3.11",
                r: /Win16/
            },
            {
                s: "Android",
                r: /Android/
            },
            {
                s: "Open BSD",
                r: /OpenBSD/
            },
            {
                s: "Sun OS",
                r: /SunOS/
            },
            {
                s: "Linux",
                r: /(Linux|X11)/
            },
            {
                s: "iOS",
                r: /(iPhone|iPad|iPod)/
            },
            {
                s: "Mac OS X",
                r: /Mac OS X/
            },
            {
                s: "Mac OS",
                r: /(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/
            },
            {
                s: "QNX",
                r: /QNX/
            },
            {
                s: "UNIX",
                r: /UNIX/
            },
            {
                s: "BeOS",
                r: /BeOS/
            },
            {
                s: "OS/2",
                r: /OS\/2/
            },
            {
                s: "Search Bot",
                r: /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/
            }];
            for (var r in o) {
                var a = o[r];
                if (a.r.test(navigator.userAgent)) {
                    i = a.s;
                    break
                }
            }
            return {
                name: n[1],
                version: n[2],
                os: i
            }
        } (),
        function() {
            return v
        })
    },
    function(e, t) {
        function n() {
            return e.exports = n = Object.assign ||
            function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                }
                return e
            },
            n.apply(this, arguments)
        }
        e.exports = n
    },
    function(e, t) {
        function n(e) {
            return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
            function(e) {
                return typeof e
            }: function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
            })(e)
        }
        function i(t) {
            return "function" == typeof Symbol && "symbol" === n(Symbol.iterator) ? e.exports = i = function(e) {
                return n(e)
            }: e.exports = i = function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": n(e)
            },
            i(t)
        }
        e.exports = i
    },
    function(e, t, n) {
        "use strict";
        n.d(t, "c",
        function() {
            return u
        }),
        n.d(t, "e",
        function() {
            return l
        }),
        n.d(t, "b",
        function() {
            return s
        }),
        n.d(t, "a",
        function() {
            return c
        }),
        n.d(t, "d",
        function() {
            return d
        });
        var i = n(2),
        o = n(7),
        r = 0,
        a = 0,
        s = function() {
            return r
        },
        c = function() {
            return a
        },
        d = function() {
            r = 0,
            a = 0
        },
        u = function(e, t, n, s, c) {
            var d = new XMLHttpRequest;
            if (d.timeout = t.timeout || Object(i.getParameter)("HTTP_CONNECT_TIMEOUT"), d.open("POST", e, !0), d.setRequestHeader("Content-type", "application/json; charset=utf-8"), c) for (var u in c)"withCredentials" == u ? d.withCredentials = !0 : d.setRequestHeader(u, c[u]);
            d.onload = function(e) {
                a += Object(o.e)(d.responseText),
                n && n(d.responseText)
            },
            d.onerror = function(t) {
                s && s(t, e)
            },
            d.ontimeout = function(t) {
                s && s(t, e)
            };
            var l = JSON.stringify(t);
            r += Object(o.e)(l),
            d.send(l)
        },
        l = function() {
            return "https:" == document.location.protocol
        }
    },
    function(e, t, n) {
        "use strict";
        n.d(t, "d",
        function() {
            return g
        }),
        n.d(t, "b",
        function() {
            return p
        }),
        n.d(t, "a",
        function() {
            return l
        }),
        n.d(t, "h",
        function() {
            return f
        }),
        n.d(t, "c",
        function() {
            return m
        }),
        n.d(t, "g",
        function() {
            return S
        }),
        n.d(t, "f",
        function() {
            return h
        }),
        n.d(t, "e",
        function() {
            return I
        });
        var i = n(5),
        o = n.n(i),
        r = n(3),
        a = n(0),
        s = n(11),
        c = n.n(s),
        d = n(12),
        u = n(8),
        l = function(e) {
            return this.audioContext = Object(d.a)(),
            this.sourceNode = e.otWebkitAudioSource || this.audioContext.createMediaStreamSource(e),
            this.analyser = this.audioContext.createAnalyser(),
            this.timeDomainData = new Uint8Array(this.analyser.frequencyBinCount),
            this.sourceNode.connect(this.analyser),
            this.getAudioLevel = function() {
                if (this.analyser) {
                    this.analyser.getByteTimeDomainData(this.timeDomainData);
                    for (var e = 0,
                    t = 0; t < this.timeDomainData.length; t++) e = Math.max(e, Math.abs(this.timeDomainData[t] - 128));
                    return e / 128
                }
                return a.
            default.warning("can't find analyser in audioLevelHelper"),
                0
            },
            this
        };
        function p() {
            return c()().replace(/-/g, "").toUpperCase()
        }
        var f = function(e, t, n) {
            try {
                var i = document.createElement("video");
                i.setAttribute("autoplay", ""),
                i.setAttribute("muted", ""),
                i.muted = !0,
                i.setAttribute("playsinline", ""),
                i.setAttribute("style", "position: absolute; top: 0; left: 0; width:1px; high:1px;"),
                document.body.appendChild(i),
                i.addEventListener("playing",
                function(e) {
                    r.isFireFox() ? i.videoWidth && (t(i.videoWidth, i.videoHeight), document.body.removeChild(i)) : (t(i.videoWidth, i.videoHeight), document.body.removeChild(i))
                }),
                Object(u.setSrcObject)(i, e)
            } catch(e) {
                n(e)
            }
        },
        m = function(e) {
            return "number" == typeof e && 0 <= e && e <= 4294967295
        },
        g = function(e) {
            var t = ["lowLatency", "userConfigExtraInfo", "transcodingUsers"];
            for (var n in e) if ("lowLatency" === n && "boolean" != typeof e[n] || "userConfigExtraInfo" === n && "object" !== o()(e[n]) || "transcodingUsers" === n && !v(e[n]) || !~t.indexOf(n) && "number" != typeof e[n]) throw new Error("Param [" + n + "] is inValid");
            return ! 0
        },
        v = function(e) {
            for (var t = 0; t < e.length; t++) for (var n in e[t]) if ("number" != typeof e[t][n]) throw new Error("Param user[" + t + "] - [" + n + "] is inValid");
            return ! 0
        },
        S = function(e) {
            isNaN(e) && (e = 1e3);
            var t = +new Date,
            n = (t = (9301 * t + 49297) % 233280) / 233280;
            return Math.ceil(n * e)
        },
        I = function(e) {
            var t = encodeURIComponent(e).match(/%[89ABab]/g);
            return e.length + (t ? t.length: 0)
        },
        h = function() {
            if (!document.getElementById("agora-ban-tip")) {
                var e = document.createElement("div");
                e.id = "agora-ban-tip",
                e.style = "position: absolute; width: 100%; height: 100%; display: flex; justify-content: center; align-items: center; color: #fff;",
                document.querySelector("body").prepend(e);
                var t = document.createElement("div");
                t.style = "background: #000; width: 346px; height: 116px; z-index: 100000; opacity: 0.6; border-radius: 10px; box-shadow: 0 2px 4px #000;",
                e.append(t);
                var n = document.createElement("div");
                n.style = "height: 76px; display: flex; justify-content: center; align-items: center;";
                var i = document.createElement("span");
                i.style = "height: 28px; width: 28px; color: #000; text-align: center; line-height: 30px; background: #fff; border-radius: 50%; font-weight: 600; font-size: 20px;margin-right: 5px;",
                i.innerText = "!";
                var o = document.createElement("span");
                o.innerText = "This browser does not support webRTC",
                n.append(i),
                n.append(o);
                var r = document.createElement("div");
                r.style = "height: 38px; display: flex; border-top: #fff 1px solid; justify-content: center; align-items: center;",
                r.innerText = "OK",
                t.append(n),
                t.append(r),
                r.onclick = function() {
                    var e = document.getElementById("agora-ban-tip");
                    e.parentNode.removeChild(e)
                }
            }
        }
    },
    function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, "RTCPeerConnection",
        function() {
            return E
        }),
        n.d(t, "getUserMedia",
        function() {
            return r
        }),
        n.d(t, "attachMediaStream",
        function() {
            return a
        }),
        n.d(t, "reattachMediaStream",
        function() {
            return s
        }),
        n.d(t, "setSrcObject",
        function() {
            return p
        }),
        n.d(t, "getSrcObject",
        function() {
            return f
        }),
        n.d(t, "webrtcDetectedBrowser",
        function() {
            return c
        }),
        n.d(t, "webrtcDetectedVersion",
        function() {
            return d
        }),
        n.d(t, "webrtcMinimumVersion",
        function() {
            return u
        }),
        n.d(t, "webrtcTesting",
        function() {
            return b
        }),
        n.d(t, "webrtcUtils",
        function() {
            return v
        });
        var i = n(5),
        o = n.n(i),
        r = null,
        a = null,
        s = null,
        c = null,
        d = null,
        u = null,
        l = null,
        p = null,
        f = null,
        m = null,
        g = {
            addStream: null
        },
        v = {
            log: function() {},
            extractVersion: function(e, t, n) {
                var i = e.match(t);
                return i && i.length >= n && parseInt(i[n])
            }
        };
        if ("object" == ("undefined" == typeof window ? "undefined": o()(window)) ? (!window.HTMLMediaElement || "srcObject" in window.HTMLMediaElement.prototype ? (p = function(e, t) {
            e.srcObject = t
        },
        f = function(e) {
            return e.srcObject
        }) : (p = function(e, t) {
            "mozSrcObject" in e ? e.mozSrcObject = t: (e._srcObject = t, e.src = t ? URL.createObjectURL(t) : null)
        },
        f = function(e) {
            return "mozSrcObject" in e ? e.mozSrcObject: e._srcObject
        }), r = window.navigator && window.navigator.getUserMedia) : (p = function(e, t) {
            e.srcObject = t
        },
        f = function(e) {
            return e.srcObject
        }), a = function(e, t) {
            p(e, t)
        },
        s = function(e, t) {
            p(e, f(t))
        },
        "undefined" != typeof window && window.navigator) if (navigator.mozGetUserMedia && window.mozRTCPeerConnection) {
            for (var S in v.log("This appears to be Firefox"), c = "firefox", d = v.extractVersion(navigator.userAgent, /Firefox\/([0-9]+)\./, 1), u = 31, m = mozRTCPeerConnection, g) g[S] = m.prototype[S];
            if (l = function(e, t) {
                if (d < 38 && e && e.iceServers) {
                    for (var n = [], i = 0; i < e.iceServers.length; i++) {
                        var o = e.iceServers[i];
                        if (o.hasOwnProperty("urls")) for (var r = 0; r < o.urls.length; r++) {
                            var a = {
                                url: o.urls[r]
                            };
                            0 === o.urls[r].indexOf("turn") && (a.username = o.username, a.credential = o.credential),
                            n.push(a)
                        } else n.push(e.iceServers[i])
                    }
                    e.iceServers = n
                }
                var s = new m(e, t);
                for (var c in g) s[c] = g[c];
                return s
            },
            window.RTCSessionDescription || (window.RTCSessionDescription = mozRTCSessionDescription), window.RTCIceCandidate || (window.RTCIceCandidate = mozRTCIceCandidate), r = function(e, t, n) {
                var i = function(e) {
                    if ("object" !== o()(e) || e.require) return e;
                    var t = [];
                    return Object.keys(e).forEach(function(n) {
                        if ("require" !== n && "advanced" !== n && "mediaSource" !== n) {
                            var i = e[n] = "object" === o()(e[n]) ? e[n] : {
                                ideal: e[n]
                            };
                            if (void 0 === i.min && void 0 === i.max && void 0 === i.exact || t.push(n), void 0 !== i.exact && ("number" == typeof i.exact ? i.min = i.max = i.exact: e[n] = i.exact, delete i.exact), void 0 !== i.ideal) {
                                e.advanced = e.advanced || [];
                                var r = {};
                                "number" == typeof i.ideal ? r[n] = {
                                    min: i.ideal,
                                    max: i.ideal
                                }: r[n] = i.ideal,
                                e.advanced.push(r),
                                delete i.ideal,
                                Object.keys(i).length || delete e[n]
                            }
                        }
                    }),
                    t.length && (e.require = t),
                    e
                };
                return d < 38 && (v.log("spec: " + JSON.stringify(e)), e.audio && (e.audio = i(e.audio)), e.video && (e.video = i(e.video)), v.log("ff37: " + JSON.stringify(e))),
                navigator.mozGetUserMedia(e, t, n)
            },
            navigator.getUserMedia = r, navigator.mediaDevices || (navigator.mediaDevices = {
                getUserMedia: _,
                addEventListener: function() {},
                removeEventListener: function() {}
            }), navigator.mediaDevices.enumerateDevices = navigator.mediaDevices.enumerateDevices ||
            function() {
                return new Promise(function(e) {
                    e([{
                        kind: "audioinput",
                        deviceId: "default",
                        label: "",
                        groupId: ""
                    },
                    {
                        kind: "videoinput",
                        deviceId: "default",
                        label: "",
                        groupId: ""
                    }])
                })
            },
            d < 41) {
                var I = navigator.mediaDevices.enumerateDevices.bind(navigator.mediaDevices);
                navigator.mediaDevices.enumerateDevices = function() {
                    return I().then(void 0,
                    function(e) {
                        if ("NotFoundError" === e.name) return [];
                        throw e
                    })
                }
            }
        } else if (navigator.webkitGetUserMedia && window.webkitRTCPeerConnection) {
            for (var S in v.log("This appears to be Chrome"), c = "chrome", d = v.extractVersion(navigator.userAgent, /Chrom(e|ium)\/([0-9]+)\./, 2), u = 38, m = webkitRTCPeerConnection, g) g[S] = m.prototype[S];
            l = function(e, t) {
                e && e.iceTransportPolicy && (e.iceTransports = e.iceTransportPolicy);
                var n = new m(e, t);
                for (var i in g) n[i] = g[i];
                var o = n.getStats.bind(n);
                return n.getStats = function(e, t, n) {
                    var i = this,
                    r = arguments;
                    r.length > 0 && "function" == typeof e && (t ? (n = t, t = e, r = [e = null, t, n]) : (t = e, r = [e = null, t]));
                    var a = function(e) {
                        var t = {};
                        return e.result().forEach(function(e) {
                            var n = {
                                id: e.id,
                                timestamp: e.timestamp,
                                type: e.type
                            };
                            e.names().forEach(function(t) {
                                n[t] = e.stat(t)
                            }),
                            t[n.id] = n
                        }),
                        t
                    };
                    if (r.length >= 2) {
                        return o.apply(this, [function(e) {
                            r[1](a(e))
                        },
                        r[0]])
                    }
                    return new Promise(function(t, n) {
                        1 === r.length && null === e ? o.apply(i, [function(e) {
                            t.apply(null, [a(e)])
                        },
                        n]) : o.apply(i, [t, n])
                    })
                },
                n
            },
            ["createOffer", "createAnswer"].forEach(function(e) {
                var t = webkitRTCPeerConnection.prototype[e];
                webkitRTCPeerConnection.prototype[e] = function() {
                    var e = this;
                    if (arguments.length < 1 || 1 === arguments.length && "object" === o()(arguments[0])) {
                        var n = 1 === arguments.length ? arguments[0] : void 0;
                        return new Promise(function(i, o) {
                            t.apply(e, [i, o, n])
                        })
                    }
                    return t.apply(this, arguments)
                }
            }),
            ["setLocalDescription", "setRemoteDescription", "addIceCandidate"].forEach(function(e) {
                var t = webkitRTCPeerConnection.prototype[e];
                webkitRTCPeerConnection.prototype[e] = function() {
                    var e = arguments,
                    n = this;
                    return new Promise(function(i, o) {
                        t.apply(n, [e[0],
                        function() {
                            i(),
                            e.length >= 2 && e[1].apply(null, [])
                        },
                        function(t) {
                            o(t),
                            e.length >= 3 && e[2].apply(null, [t])
                        }])
                    })
                }
            });
            var h = function(e) {
                if ("object" !== o()(e) || e.mandatory || e.optional) return e;
                var t = {};
                return Object.keys(e).forEach(function(n) {
                    if ("require" !== n && "advanced" !== n && "mediaSource" !== n) {
                        var i = "object" === o()(e[n]) ? e[n] : {
                            ideal: e[n]
                        };
                        void 0 !== i.exact && "number" == typeof i.exact && (i.min = i.max = i.exact);
                        var r = function(e, t) {
                            return e ? e + t.charAt(0).toUpperCase() + t.slice(1) : "deviceId" === t ? "sourceId": t
                        };
                        if (void 0 !== i.ideal) {
                            t.optional = t.optional || [];
                            var a = {};
                            "number" == typeof i.ideal ? (a[r("min", n)] = i.ideal, t.optional.push(a), (a = {})[r("max", n)] = i.ideal, t.optional.push(a)) : (a[r("", n)] = i.ideal, t.optional.push(a))
                        }
                        void 0 !== i.exact && "number" != typeof i.exact ? (t.mandatory = t.mandatory || {},
                        t.mandatory[r("", n)] = i.exact) : ["min", "max"].forEach(function(e) {
                            void 0 !== i[e] && (t.mandatory = t.mandatory || {},
                            t.mandatory[r(e, n)] = i[e])
                        })
                    }
                }),
                e.advanced && (t.optional = (t.optional || []).concat(e.advanced)),
                t
            };
            if (r = function(e, t, n) {
                return e.audio && (e.audio = h(e.audio)),
                e.video && (e.video = h(e.video)),
                v.log("chrome: " + JSON.stringify(e)),
                navigator.webkitGetUserMedia(e, t, n)
            },
            navigator.getUserMedia = r, navigator.mediaDevices || (navigator.mediaDevices = {
                getUserMedia: _,
                enumerateDevices: function() {
                    return new Promise(function(e) {
                        var t = {
                            audio: "audioinput",
                            video: "videoinput"
                        };
                        return MediaStreamTrack.getSources(function(n) {
                            e(n.map(function(e) {
                                return {
                                    label: e.label,
                                    kind: t[e.kind],
                                    deviceId: e.id,
                                    groupId: ""
                                }
                            }))
                        })
                    })
                }
            }), navigator.mediaDevices.getUserMedia) {
                var y = navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);
                navigator.mediaDevices.getUserMedia = function(e) {
                    return v.log("spec:   " + JSON.stringify(e)),
                    e.audio = h(e.audio),
                    e.video = h(e.video),
                    v.log("chrome: " + JSON.stringify(e)),
                    y(e)
                }
            } else navigator.mediaDevices.getUserMedia = function(e) {
                return _(e)
            };
            void 0 === navigator.mediaDevices.addEventListener && (navigator.mediaDevices.addEventListener = function() {
                v.log("Dummy mediaDevices.addEventListener called.")
            }),
            void 0 === navigator.mediaDevices.removeEventListener && (navigator.mediaDevices.removeEventListener = function() {
                v.log("Dummy mediaDevices.removeEventListener called.")
            }),
            a = function(e, t) {
                d >= 43 ? p(e, t) : void 0 !== e.src ? e.src = t ? URL.createObjectURL(t) : null: v.log("Error attaching stream to element.")
            },
            s = function(e, t) {
                d >= 43 ? p(e, f(t)) : e.src = t.src
            }
        } else navigator.mediaDevices && navigator.userAgent.match(/Edge\/(\d+).(\d+)$/) ? (v.log("This appears to be Edge"), c = "edge", d = v.extractVersion(navigator.userAgent, /Edge\/(\d+).(\d+)$/, 2), u = 12) : v.log("Browser does not appear to be WebRTC-capable");
        else v.log("This does not appear to be a browser"),
        c = "not a browser";
        function _(e) {
            return new Promise(function(t, n) {
                r(e, t, n)
            })
        }
        var E, b = {};
        try {
            Object.defineProperty(b, "version", {
                set: function(e) {
                    d = e
                }
            })
        } catch(e) {}
        l ? E = l: "undefined" != typeof window && (E = window.RTCPeerConnection)
    },
    function(e, t, n) {
        var i = n(18);
        e.exports = function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                o = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }))),
                o.forEach(function(t) {
                    i(e, t, n[t])
                })
            }
            return e
        }
    },
    function(e, t, n) {
        e.exports = n(20)
    },
    function(e, t, n) {
        var i = n(16),
        o = n(17);
        e.exports = function(e, t, n) {
            var r = t && n || 0;
            "string" == typeof e && (t = "binary" === e ? new Array(16) : null, e = null);
            var a = (e = e || {}).random || (e.rng || i)();
            if (a[6] = 15 & a[6] | 64, a[8] = 63 & a[8] | 128, t) for (var s = 0; s < 16; ++s) t[r + s] = a[s];
            return t || o(a)
        }
    },
    function(e, t, n) {
        "use strict";
        n.d(t, "a",
        function() {
            return s
        });
        var i = window.AudioContext || window.webkitAudioContext,
        o = n(2),
        r = o.getParameter,
        a = o.setParameter,
        s = function() {
            return r("AUDIO_CONTEXT") || (console.log("Creating Audio Context"), a("AUDIO_CONTEXT",
            function() {
                if (i) return new i;
                throw new Error("AUDIO_CONTEXT_NOT_SUPPORTED")
            } ())),
            r("AUDIO_CONTEXT")
        }
    },
    function(e, t, n) {
        "use strict";
        t.__esModule = !0;
        var i, o = n(0),
        r = n(8); !
        function(e) {
            e.NEW = "new",
            e.PREPARING_OFFER = "preparing-offer",
            e.OFFER_SENT = "offer-sent",
            e.ESTABLISHED = "established",
            e.CLOSED = "closed"
        } (i || (i = {}));
        var a = function() {
            function e(e) {
                this.candidate = null,
                this.state = i.NEW,
                this.config = e,
                this.isSubscriber = this.config.isSubscriber,
                this.peerConnection = this.initPeecConnection(e),
                this.peerConnection.onicecandidate = this._onicecandidate.bind(this),
                this.peerConnection.oniceconnectionstatechange = this._oniceconnectionstatechange.bind(this),
                this.peerConnection.onaddstream = this._onaddstream.bind(this),
                this.peerConnection.ontrack = this._ontrack.bind(this),
                this.processSignalingMessage = this.setAnswer.bind(this),
                this.peerConnection.createOffer({
                    offerToReceiveAudio: !0,
                    offerToReceiveVideo: !0
                }).then(this.setLocalSDP.bind(this)),
                this.sendVideoStats = {
                    id: "",
                    type: "",
                    mediaType: "",
                    googCodecName: "h264" === this.config.codec ? "H264": "VP8",
                    bytesSent: "0",
                    packetsLost: "0",
                    packetsSent: "0",
                    googAdaptationChanges: "0",
                    googAvgEncodeMs: "0",
                    googEncodeUsagePercent: "0",
                    googFirsReceived: "0",
                    googFrameHeightSent: "0",
                    googFrameHeightInput: "0",
                    googFrameRateInput: "0",
                    googFrameRateSent: "0",
                    googFrameWidthSent: "0",
                    googFrameWidthInput: "0",
                    googNacksReceived: "0",
                    googPlisReceived: "0",
                    googRtt: "0",
                    googFramesEncoded: "0"
                },
                this.sendAudioStats = {
                    id: "",
                    type: "",
                    mediaType: "",
                    googCodecName: "opus",
                    aecDivergentFilterFraction: "0",
                    audioInputLevel: "0",
                    bytesSent: "0",
                    packetsSent: "0",
                    googEchoCancellationReturnLoss: "0",
                    googEchoCancellationReturnLossEnhancement: "0"
                },
                this.receiveAudioStats = {
                    id: "",
                    type: "",
                    mediaType: "",
                    audioOutputLevel: "0",
                    bytesReceived: "0",
                    packetsLost: "0",
                    packetsReceived: "0",
                    googAccelerateRate: "0",
                    googCurrentDelayMs: "0",
                    googDecodingCNG: "0",
                    googDecodingCTN: "0",
                    googDecodingCTSG: "0",
                    googDecodingNormal: "0",
                    googDecodingPLC: "0",
                    googDecodingPLCCNG: "0",
                    googExpandRate: "0",
                    googJitterBufferMs: "0",
                    googJitterReceived: "0",
                    googPreemptiveExpandRate: "0",
                    googPreferredJitterBufferMs: "0",
                    googSecondaryDecodedRate: "0",
                    googSpeechExpandRate: "0"
                },
                this.receiveVideoStats = {
                    id: "",
                    type: "",
                    mediaType: "",
                    googTargetDelayMs: "0",
                    packetsLost: "0",
                    googDecodeMs: "0",
                    googMaxDecodeMs: "0",
                    googRenderDelayMs: "0",
                    googFrameWidthReceived: "0",
                    googFrameHeightReceived: "0",
                    googFrameRateReceived: "0",
                    googFrameRateDecoded: "0",
                    googFrameRateOutput: "0",
                    googFramesDecoded: "0",
                    googFrameReceived: "0",
                    googJitterBufferMs: "0",
                    googCurrentDelayMs: "0",
                    googMinPlayoutDelayMs: "0",
                    googNacksSent: "0",
                    googPlisSent: "0",
                    googFirsSent: "0",
                    bytesReceived: "0",
                    packetsReceived: "0"
                }
            }
            return e.prototype.addStream = function(e) {
                this.peerConnection.addStream(e)
            },
            e.prototype.setAnswer = function(e) {
                var t = JSON.parse(e);
                this.peerConnection.setRemoteDescription(new RTCSessionDescription({
                    sdp: t.sdp,
                    type: "answer"
                })),
                this.onsignalingmessage && this.onsignalingmessage("")
            },
            e.prototype.close = function() {
                this.peerConnection.close()
            },
            e.prototype.getStats = function(e, t) {
                if (void 0 === t && (t = 500), t = t > 500 ? 500 : t, Date.now() - this.lastTimeGetStats < t) {
                    var n = [];
                    this.config.isSubscriber ? (n.push(this.receiveVideoStats), n.push(this.receiveAudioStats)) : (n.push(this.sendAudioStats), n.push(this.sendVideoStats)),
                    n.push({
                        id: "time",
                        startTime: this.connectedTime,
                        timestamp: Date.now()
                    }),
                    e && e(n)
                } else this._getStats(e)
            },
            e.prototype._getStats = function(e) {
                var t = this,
                n = [];
                this.peerConnection.getStats(null).then(function(i) {
                    t.lastTimeGetStats = Date.now(),
                    Object.keys(i).map(function(e) {
                        var n = i[e];
                        t.config.isSubscriber ? n.type && "inboundrtp" === n.type && n.mediaType && "audio" === n.mediaType ? (t.receiveAudioStats.id = n.id + "recv", t.receiveAudioStats.type = n.type + "", t.receiveAudioStats.mediaType = n.mediaType + "", t.receiveAudioStats.packetsReceived = n.packetsReceived + "", t.receiveAudioStats.bytesReceived = n.bytesReceived + "", t.receiveAudioStats.packetsLost = n.packetsLost + "", t.receiveAudioStats.googJitterReceived = n.jitter + "") : n.type && "inboundrtp" === n.type && n.mediaType && "video" === n.mediaType ? (t.receiveVideoStats.id = n.id + "recv", t.receiveVideoStats.type = n.type + "", t.receiveVideoStats.mediaType = n.mediaType + "", t.receiveVideoStats.packetsReceived = n.packetsReceived + "", t.receiveVideoStats.bytesReceived = n.bytesReceived + "", t.receiveVideoStats.packetsLost = n.packetsLost + "", t.receiveVideoStats.googJitterBufferMs = n.jitter + "", t.receiveVideoStats.googPlisSent = n.pliCount + "", t.receiveVideoStats.googFirsSent = n.firCount + "", t.receiveVideoStats.googNacksSent = n.nackCount + "") : n.remoteSource && n.type && "track" === n.type && n.trackIdentifier && -1 !== n.trackIdentifier.indexOf("v") ? (t.receiveVideoStats.googFrameHeightReceived = n.frameHeight + "", t.receiveVideoStats.googFrameWidthReceived = n.frameWidth + "", t.receiveVideoStats.googFrameRateDecoded = n.framesPerSecond + "", t.receiveVideoStats.googFrameRateOutput = n.framesPerSecond + "", t.receiveVideoStats.googFrameRateReceived = n.framesPerSecond + "", t.receiveVideoStats.googFramesDecoded = n.framesDecoded + "", t.receiveVideoStats.googFrameReceived = n.framesReceived + "") : n.remoteSource && n.type && "track" === n.type && n.trackIdentifier && -1 !== n.trackIdentifier.indexOf("a") && (t.receiveAudioStats.audioOutputLevel = n.audioLevel + "") : !n.isRemote && n.type && "outboundrtp" === n.type && n.mediaType && "audio" === n.mediaType ? (t.sendAudioStats.id = n.id + "send", t.sendAudioStats.type = n.type + "", t.sendAudioStats.mediaType = n.mediaType + "", t.sendAudioStats.packetsSent = n.packetsSent + "", t.sendAudioStats.bytesSent = n.bytesSent + "") : !n.isRemote && n.type && "outboundrtp" === n.type && n.mediaType && "video" === n.mediaType ? (t.sendVideoStats.id = n.id + "send", t.sendVideoStats.type = n.type + "", t.sendVideoStats.mediaType = n.mediaType + "", t.sendVideoStats.packetsSent = n.packetsSent + "", t.sendVideoStats.bytesSent = n.bytesSent + "", t.sendVideoStats.googRtt = n.roundTripTime + "", t.sendVideoStats.googPlisReceived = n.pliCount + "", t.sendVideoStats.googFirsReceived = n.firCount + "", t.sendVideoStats.googNacksReceived = n.nackCount + "") : !n.remoteSource && n.type && "track" === n.type && n.framesSent && 0 !== n.framesSent && (t.sendVideoStats.googFrameHeightSent = n.frameHeight + "", t.sendVideoStats.googFrameHeightInput = n.frameHeight + "", t.sendVideoStats.googFrameWidthSent = n.frameWidth + "", t.sendVideoStats.googFrameWidthInput = n.frameWidth + "", t.sendVideoStats.googFramesEncoded = n.framesSent + "", t.sendVideoStats.googFrameRateSent = n.framesPerSecond + "")
                    }),
                    t.config.isSubscriber ? (n.push(t.receiveVideoStats), n.push(t.receiveAudioStats)) : (n.push(t.sendAudioStats), n.push(t.sendVideoStats)),
                    n.push({
                        id: "time",
                        startTime: t.connectedTime,
                        timestamp: Date.now()
                    }),
                    e && e(n)
                })
            },
            e.prototype.getStatsRate = function(e) {
                this.getStats(e)
            },
            e.prototype.initPeecConnection = function(e) {
                var t = e.stunServerUrl,
                n = e.turnServer,
                i = e.iceServers;
                return this.pcConfig = {
                    iceServers: [{
                        urls: "stun:webcs.agora.io:3478"
                    }]
                },
                i instanceof Array ? this.pcConfig.iceServers = e.iceServers: t && (t instanceof Array ? t.map(function(e) {
                    "string" == typeof e && "" !== e && this.pcConfig.iceServers.push({
                        urls: e
                    })
                }) : "string" == typeof t && "" !== t && this.pcConfig.iceServers.push({
                    urls: t
                })),
                n && (n instanceof Array ? n.map(function(e) {
                    "string" == typeof e.url && "" !== e.url && this.pcConfig.iceServers.push({
                        username: e.username,
                        credential: e.credential,
                        url: e.url
                    })
                }) : "string" == typeof n.url && "" !== n.url && (this.pcConfig.iceServers.push({
                    username: n.username,
                    credential: n.credential,
                    credentialType: "password",
                    urls: "turn:" + n.url + ":" + n.udpport + "?transport=udp"
                }), "string" == typeof n.tcpport && "" !== n.tcpport && this.pcConfig.iceServers.push({
                    username: n.username,
                    credential: n.credential,
                    credentialType: "password",
                    urls: "turn:" + n.url + ":" + n.tcpport + "?transport=tcp"
                }), !0 === n.forceturn && (this.pcConfig.iceTransportPolicy = "relay"))),
                new r.RTCPeerConnection(this.pcConfig)
            },
            e.prototype._ontrack = function(e) {
                this.onaddstream && this.onaddstream(e, "ontrack")
            },
            e.prototype._onaddstream = function(e) {
                this.onaddstream && this.onaddstream(e, "onaddstream")
            },
            e.prototype._oniceconnectionstatechange = function(e) {
                "connected" === e.currentTarget.iceConnectionState && (this.state = i.ESTABLISHED, this.connectedTime = Date.now()),
                this.oniceconnectionstatechange && this.oniceconnectionstatechange(e.currentTarget.iceConnectionState)
            },
            e.prototype._onicecandidate = function(e) { ! this.candidate && e && (this.candidate = e.candidate, this.peerConnection.createOffer({
                    offerToReceiveAudio: !0,
                    offerToReceiveVideo: !0
                }).then(this.editLocalSDP.bind(this)).then(this.setLocalSDP.bind(this)).then(this.sendOffer.bind(this)).
                catch())
            },
            e.prototype.setLocalSDP = function(e) {
                return this.peerConnection.setLocalDescription(new RTCSessionDescription({
                    sdp: e.sdp,
                    type: "offer"
                })),
                this.state = i.PREPARING_OFFER,
                e
            },
            e.prototype.editLocalSDP = function(e) {
                return e.sdp = this.setBandWidth(e.sdp),
                e.sdp = this.reviseOpus(e.sdp),
                e.sdp = this.addCandidate(e.sdp),
                e
            },
            e.prototype.setSendRecv = function(e) {
                return e = (e = (e = e.replace(/a=recvonly\r\n/g, "a=sendrecv\r\n")).replace(/a=sendonly\r\n/g, "a=sendrecv\r\n")).replace(/a=inactive\r\n/g, "a=sendrecv\r\n")
            },
            e.prototype.setBandWidth = function(e) {
                var t, n, i = this.config,
                r = i.codec,
                a = i.minVideoBW,
                s = i.maxVideoBW,
                c = i.maxAudioBW,
                d = i.clientId;
                if ((t = e.match(/m=video.*\r\n/)) && a && s) {
                    n = t[0] + "b=AS:" + s + "\r\n";
                    var u = 0,
                    l = 0;
                    "h264" === r ? (u = e.search(/a=rtpmap:(\d+) H264\/90000\r\n/), l = e.search(/H264\/90000\r\n/)) : "vp8" === r && (u = e.search(/a=rtpmap:(\d+) VP8\/90000\r\n/), l = e.search(/VP8\/90000\r\n/)),
                    -1 !== u && -1 !== l && l - u > 10 && (n = n + "a=fmtp:" + e.slice(u + 9, l - 1) + " x-google-min-bitrate=" + a + "\r\n"),
                    e = e.replace(t[0], n),
                    o.
                default.debug("[" + d + "]Set Video Bitrate - min:" + a + " max:" + s)
                }
                return (t = e.match(/m=audio.*\r\n/)) && c && (n = t[0] + "b=AS:" + c + "\r\n", e = e.replace(t[0], n)),
                e
            },
            e.prototype.reviseOpus = function(e) {
                return e = (e = e.replace(/a=rtpmap:102 opus\/48000\/2/g, "a=rtpmap:111 opus/48000/2")).replace(/m=audio 9 UDP\/TLS\/RTP\/SAVPF 102 0 8 97 13 118 101/g, "m=audio 9 UDP/TLS/RTP/SAVPF 111 0 8 97 13 118 101")
            },
            e.prototype.addCandidate = function(e) {
                return e += "a=candidate:2243255435 1 udp 2122194687 192.168.0.1 30000 typ host generation 0 network-id 1\r\n"
            },
            e.prototype.sendOffer = function(e) {
                this.config.callback(JSON.stringify({
                    sdp: e.sdp,
                    messageType: "OFFER",
                    tiebreaker: Math.floor(429496723 * Math.random() + 1)
                })),
                this.state = i.OFFER_SENT
            },
            e
        } ();
        t.
    default = a
    },
    function(e, t, n) {
        "use strict";
        var i = this && this.__awaiter ||
        function(e, t, n, i) {
            return new(n || (n = Promise))(function(o, r) {
                function a(e) {
                    try {
                        c(i.next(e))
                    } catch(e) {
                        r(e)
                    }
                }
                function s(e) {
                    try {
                        c(i.
                        throw (e))
                    } catch(e) {
                        r(e)
                    }
                }
                function c(e) {
                    e.done ? o(e.value) : new n(function(t) {
                        t(e.value)
                    }).then(a, s)
                }
                c((i = i.apply(e, t || [])).next())
            })
        },
        o = this && this.__generator ||
        function(e, t) {
            var n, i, o, r, a = {
                label: 0,
                sent: function() {
                    if (1 & o[0]) throw o[1];
                    return o[1]
                },
                trys: [],
                ops: []
            };
            return r = {
                next: s(0),
                throw: s(1),
                return: s(2)
            },
            "function" == typeof Symbol && (r[Symbol.iterator] = function() {
                return this
            }),
            r;
            function s(r) {
                return function(s) {
                    return function(r) {
                        if (n) throw new TypeError("Generator is already executing.");
                        for (; a;) try {
                            if (n = 1, i && (o = 2 & r[0] ? i.
                            return: r[0] ? i.
                            throw || ((o = i.
                            return) && o.call(i), 0) : i.next) && !(o = o.call(i, r[1])).done) return o;
                            switch (i = 0, o && (r = [2 & r[0], o.value]), r[0]) {
                            case 0:
                            case 1:
                                o = r;
                                break;
                            case 4:
                                return a.label++,
                                {
                                    value: r[1],
                                    done: !1
                                };
                            case 5:
                                a.label++,
                                i = r[1],
                                r = [0];
                                continue;
                            case 7:
                                r = a.ops.pop(),
                                a.trys.pop();
                                continue;
                            default:
                                if (! (o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === r[0] && (!o || r[1] > o[0] && r[1] < o[3])) {
                                    a.label = r[1];
                                    break
                                }
                                if (6 === r[0] && a.label < o[1]) {
                                    a.label = o[1],
                                    o = r;
                                    break
                                }
                                if (o && a.label < o[2]) {
                                    a.label = o[2],
                                    a.ops.push(r);
                                    break
                                }
                                o[2] && a.ops.pop(),
                                a.trys.pop();
                                continue
                            }
                            r = t.call(e, a)
                        } catch(e) {
                            r = [6, e],
                            i = 0
                        } finally {
                            n = o = 0
                        }
                        if (5 & r[0]) throw r[1];
                        return {
                            value: r[0] ? r[1] : void 0,
                            done: !0
                        }
                    } ([r, s])
                }
            }
        },
        r = this;
        t.__esModule = !0;
        var a = n(19),
        s = n(3),
        c = n(0);
        t.getSupportedCodec = function(e) {
            return i(r, void 0, void 0,
            function() {
                var t, n, i, r, u;
                return o(this,
                function(o) {
                    switch (o.label) {
                    case 0:
                        return t = {
                            video: [],
                            audio: []
                        },
                        "undefined" != typeof window ? [3, 1] : (c.
                    default.error("getSupportedCodec: NOT_BROWSER_ENV"), [2, Promise.reject("NOT_BROWSER_ENV")]);
                    case 1:
                        try {
                            n = a.createRTCPeerConnection({
                                iceServers: []
                            })
                        } catch(e) {
                            return c.
                        default.error("Failed to init RTCPeerConnection", e),
                            [2, Promise.reject(e)]
                        }
                        return n ? [3, 2] : (c.
                    default.warning("getSupportedCodec: no RTCPeerConnection constructor is detected"), [2, Promise.resolve(t)]);
                    case 2:
                        return e && e.stream ? [3, 7] : (i = {
                            mandatory: {
                                OfferToReceiveAudio: !0,
                                OfferToReceiveVideo: !0
                            }
                        },
                        r = void 0, (s.isSafari() || s.isFireFox() || s.isWeChatBrowser()) && n.addTransceiver ? (n.addTransceiver("audio"), n.addTransceiver("video"), [4, n.createOffer()]) : [3, 4]);
                    case 3:
                        return r = o.sent(),
                        [3, 6];
                    case 4:
                        return [4, new Promise(function(e, t) {
                            var o = setTimeout(function() {
                                t("CREATEOFFER_TIMEOUT")
                            },
                            3e3);
                            n.createOffer(function(t) {
                                clearTimeout(o),
                                e(t)
                            },
                            function(e) {
                                clearTimeout(o),
                                t(e)
                            },
                            i)
                        })];
                    case 5:
                        r = o.sent(),
                        o.label = 6;
                    case 6:
                        return n.close(),
                        u = r.sdp,
                        [2, d(u)];
                    case 7:
                        return e.stream.getTracks && n.addTrack ? e.stream.getTracks().forEach(function(t) {
                            n.addTrack(t, e.stream)
                        }) : n.addStream(e.stream),
                        r = void 0,
                        s.isSafari() || s.isFireFox() ? [4, n.createOffer()] : [3, 9];
                    case 8:
                        return r = o.sent(),
                        [3, 11];
                    case 9:
                        return [4, new Promise(function(e, t) {
                            n.createOffer(e, t)
                        })];
                    case 10:
                        r = o.sent(),
                        o.label = 11;
                    case 11:
                        return n.close(),
                        u = r.sdp,
                        [2, d(u)]
                    }
                })
            })
        };
        var d = function(e) {
            var t = {
                video: [],
                audio: []
            };
            return e.match(/ VP8/i) && t.video.push("VP8"),
            e.match(/ H264/i) && t.video.push("H264"),
            e.match(/ opus/i) && t.audio.push("OPUS"),
            Promise.resolve(t)
        }
    },
    function(e, t) {
        function n(e, t, n, i, o, r, a) {
            try {
                var s = e[r](a),
                c = s.value
            } catch(e) {
                return void n(e)
            }
            s.done ? t(c) : Promise.resolve(c).then(i, o)
        }
        e.exports = function(e) {
            return function() {
                var t = this,
                i = arguments;
                return new Promise(function(o, r) {
                    var a = e.apply(t, i);
                    function s(e) {
                        n(a, o, r, s, c, "next", e)
                    }
                    function c(e) {
                        n(a, o, r, s, c, "throw", e)
                    }
                    s(void 0)
                })
            }
        }
    },
    function(e, t) {
        var n = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof window.msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto);
        if (n) {
            var i = new Uint8Array(16);
            e.exports = function() {
                return n(i),
                i
            }
        } else {
            var o = new Array(16);
            e.exports = function() {
                for (var e, t = 0; t < 16; t++) 0 == (3 & t) && (e = 4294967296 * Math.random()),
                o[t] = e >>> ((3 & t) << 3) & 255;
                return o
            }
        }
    },
    function(e, t) {
        for (var n = [], i = 0; i < 256; ++i) n[i] = (i + 256).toString(16).substr(1);
        e.exports = function(e, t) {
            var i = t || 0,
            o = n;
            return [o[e[i++]], o[e[i++]], o[e[i++]], o[e[i++]], "-", o[e[i++]], o[e[i++]], "-", o[e[i++]], o[e[i++]], "-", o[e[i++]], o[e[i++]], "-", o[e[i++]], o[e[i++]], o[e[i++]], o[e[i++]], o[e[i++]], o[e[i++]]].join("")
        }
    },
    function(e, t) {
        e.exports = function(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
    },
    function(e, t, n) {
        "use strict";
        t.__esModule = !0;
        var i = "object" == typeof window && window.RTCPeerConnection,
        o = "object" == typeof window && window.webkitRTCPeerConnection,
        r = "object" == typeof window && window.mozRTCPeerConnection;
        t.createRTCPeerConnection = function(e) {
            var t = i || o || r;
            return t ? new t(e) : null
        }
    },
    function(e, t, n) {
        var i = function() {
            return this || "object" == typeof self && self
        } () || Function("return this")(),
        o = i.regeneratorRuntime && Object.getOwnPropertyNames(i).indexOf("regeneratorRuntime") >= 0,
        r = o && i.regeneratorRuntime;
        if (i.regeneratorRuntime = void 0, e.exports = n(21), o) i.regeneratorRuntime = r;
        else try {
            delete i.regeneratorRuntime
        } catch(e) {
            i.regeneratorRuntime = void 0
        }
    },
    function(e, t) { !
        function(t) {
            "use strict";
            var n, i = Object.prototype,
            o = i.hasOwnProperty,
            r = "function" == typeof Symbol ? Symbol: {},
            a = r.iterator || "@@iterator",
            s = r.asyncIterator || "@@asyncIterator",
            c = r.toStringTag || "@@toStringTag",
            d = "object" == typeof e,
            u = t.regeneratorRuntime;
            if (u) d && (e.exports = u);
            else { (u = t.regeneratorRuntime = d ? e.exports: {}).wrap = y;
                var l = "suspendedStart",
                p = "suspendedYield",
                f = "executing",
                m = "completed",
                g = {},
                v = {};
                v[a] = function() {
                    return this
                };
                var S = Object.getPrototypeOf,
                I = S && S(S(D([])));
                I && I !== i && o.call(I, a) && (v = I);
                var h = T.prototype = E.prototype = Object.create(v);
                b.prototype = h.constructor = T,
                T.constructor = b,
                T[c] = b.displayName = "GeneratorFunction",
                u.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !! t && (t === b || "GeneratorFunction" === (t.displayName || t.name))
                },
                u.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, T) : (e.__proto__ = T, c in e || (e[c] = "GeneratorFunction")),
                    e.prototype = Object.create(h),
                    e
                },
                u.awrap = function(e) {
                    return {
                        __await: e
                    }
                },
                A(R.prototype),
                R.prototype[s] = function() {
                    return this
                },
                u.AsyncIterator = R,
                u.async = function(e, t, n, i) {
                    var o = new R(y(e, t, n, i));
                    return u.isGeneratorFunction(t) ? o: o.next().then(function(e) {
                        return e.done ? e.value: o.next()
                    })
                },
                A(h),
                h[c] = "Generator",
                h[a] = function() {
                    return this
                },
                h.toString = function() {
                    return "[object Generator]"
                },
                u.keys = function(e) {
                    var t = [];
                    for (var n in e) t.push(n);
                    return t.reverse(),
                    function n() {
                        for (; t.length;) {
                            var i = t.pop();
                            if (i in e) return n.value = i,
                            n.done = !1,
                            n
                        }
                        return n.done = !0,
                        n
                    }
                },
                u.values = D,
                N.prototype = {
                    constructor: N,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = n, this.done = !1, this.delegate = null, this.method = "next", this.arg = n, this.tryEntries.forEach(w), !e) for (var t in this)"t" === t.charAt(0) && o.call(this, t) && !isNaN( + t.slice(1)) && (this[t] = n)
                    },
                    stop: function() {
                        this.done = !0;
                        var e = this.tryEntries[0].completion;
                        if ("throw" === e.type) throw e.arg;
                        return this.rval
                    },
                    dispatchException: function(e) {
                        if (this.done) throw e;
                        var t = this;
                        function i(i, o) {
                            return s.type = "throw",
                            s.arg = e,
                            t.next = i,
                            o && (t.method = "next", t.arg = n),
                            !!o
                        }
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var a = this.tryEntries[r],
                            s = a.completion;
                            if ("root" === a.tryLoc) return i("end");
                            if (a.tryLoc <= this.prev) {
                                var c = o.call(a, "catchLoc"),
                                d = o.call(a, "finallyLoc");
                                if (c && d) {
                                    if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
                                    if (this.prev < a.finallyLoc) return i(a.finallyLoc)
                                } else if (c) {
                                    if (this.prev < a.catchLoc) return i(a.catchLoc, !0)
                                } else {
                                    if (!d) throw new Error("try statement without catch or finally");
                                    if (this.prev < a.finallyLoc) return i(a.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var i = this.tryEntries[n];
                            if (i.tryLoc <= this.prev && o.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
                                var r = i;
                                break
                            }
                        }
                        r && ("break" === e || "continue" === e) && r.tryLoc <= t && t <= r.finallyLoc && (r = null);
                        var a = r ? r.completion: {};
                        return a.type = e,
                        a.arg = t,
                        r ? (this.method = "next", this.next = r.finallyLoc, g) : this.complete(a)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg: "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t),
                        g
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var n = this.tryEntries[t];
                            if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc),
                            w(n),
                            g
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var n = this.tryEntries[t];
                            if (n.tryLoc === e) {
                                var i = n.completion;
                                if ("throw" === i.type) {
                                    var o = i.arg;
                                    w(n)
                                }
                                return o
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, t, i) {
                        return this.delegate = {
                            iterator: D(e),
                            resultName: t,
                            nextLoc: i
                        },
                        "next" === this.method && (this.arg = n),
                        g
                    }
                }
            }
            function y(e, t, n, i) {
                var o = t && t.prototype instanceof E ? t: E,
                r = Object.create(o.prototype),
                a = new N(i || []);
                return r._invoke = function(e, t, n) {
                    var i = l;
                    return function(o, r) {
                        if (i === f) throw new Error("Generator is already running");
                        if (i === m) {
                            if ("throw" === o) throw r;
                            return k()
                        }
                        for (n.method = o, n.arg = r;;) {
                            var a = n.delegate;
                            if (a) {
                                var s = C(a, n);
                                if (s) {
                                    if (s === g) continue;
                                    return s
                                }
                            }
                            if ("next" === n.method) n.sent = n._sent = n.arg;
                            else if ("throw" === n.method) {
                                if (i === l) throw i = m,
                                n.arg;
                                n.dispatchException(n.arg)
                            } else "return" === n.method && n.abrupt("return", n.arg);
                            i = f;
                            var c = _(e, t, n);
                            if ("normal" === c.type) {
                                if (i = n.done ? m: p, c.arg === g) continue;
                                return {
                                    value: c.arg,
                                    done: n.done
                                }
                            }
                            "throw" === c.type && (i = m, n.method = "throw", n.arg = c.arg)
                        }
                    }
                } (e, n, a),
                r
            }
            function _(e, t, n) {
                try {
                    return {
                        type: "normal",
                        arg: e.call(t, n)
                    }
                } catch(e) {
                    return {
                        type: "throw",
                        arg: e
                    }
                }
            }
            function E() {}
            function b() {}
            function T() {}
            function A(e) { ["next", "throw", "return"].forEach(function(t) {
                    e[t] = function(e) {
                        return this._invoke(t, e)
                    }
                })
            }
            function R(e) {
                var t;
                this._invoke = function(n, i) {
                    function r() {
                        return new Promise(function(t, r) { !
                            function t(n, i, r, a) {
                                var s = _(e[n], e, i);
                                if ("throw" !== s.type) {
                                    var c = s.arg,
                                    d = c.value;
                                    return d && "object" == typeof d && o.call(d, "__await") ? Promise.resolve(d.__await).then(function(e) {
                                        t("next", e, r, a)
                                    },
                                    function(e) {
                                        t("throw", e, r, a)
                                    }) : Promise.resolve(d).then(function(e) {
                                        c.value = e,
                                        r(c)
                                    },
                                    function(e) {
                                        return t("throw", e, r, a)
                                    })
                                }
                                a(s.arg)
                            } (n, i, t, r)
                        })
                    }
                    return t = t ? t.then(r, r) : r()
                }
            }
            function C(e, t) {
                var i = e.iterator[t.method];
                if (i === n) {
                    if (t.delegate = null, "throw" === t.method) {
                        if (e.iterator.
                        return && (t.method = "return", t.arg = n, C(e, t), "throw" === t.method)) return g;
                        t.method = "throw",
                        t.arg = new TypeError("The iterator does not provide a 'throw' method")
                    }
                    return g
                }
                var o = _(i, e.iterator, t.arg);
                if ("throw" === o.type) return t.method = "throw",
                t.arg = o.arg,
                t.delegate = null,
                g;
                var r = o.arg;
                return r ? r.done ? (t[e.resultName] = r.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = n), t.delegate = null, g) : r: (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, g)
            }
            function O(e) {
                var t = {
                    tryLoc: e[0]
                };
                1 in e && (t.catchLoc = e[1]),
                2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]),
                this.tryEntries.push(t)
            }
            function w(e) {
                var t = e.completion || {};
                t.type = "normal",
                delete t.arg,
                e.completion = t
            }
            function N(e) {
                this.tryEntries = [{
                    tryLoc: "root"
                }],
                e.forEach(O, this),
                this.reset(!0)
            }
            function D(e) {
                if (e) {
                    var t = e[a];
                    if (t) return t.call(e);
                    if ("function" == typeof e.next) return e;
                    if (!isNaN(e.length)) {
                        var i = -1,
                        r = function t() {
                            for (; ++i < e.length;) if (o.call(e, i)) return t.value = e[i],
                            t.done = !1,
                            t;
                            return t.value = n,
                            t.done = !0,
                            t
                        };
                        return r.next = r
                    }
                }
                return {
                    next: k
                }
            }
            function k() {
                return {
                    value: n,
                    done: !0
                }
            }
        } (function() {
            return this || "object" == typeof self && self
        } () || Function("return this")())
    },
    function(e, t, n) {
        "use strict";
        n.r(t);
        var o = n(2),
        r = n(0),
        a = n(1),
        s = function() {
            var e = {
                dispatcher: {}
            };
            return e.dispatcher.eventListeners = {},
            e.addEventListener = function(t, n) {
                void 0 === e.dispatcher.eventListeners[t] && (e.dispatcher.eventListeners[t] = []),
                e.dispatcher.eventListeners[t].push(n)
            },
            e.hasListeners = function(t) {
                return ! (!e.dispatcher.eventListeners[t] || !e.dispatcher.eventListeners[t].length)
            },
            e.on = e.addEventListener,
            e.removeEventListener = function(t, n) {
                var i; - 1 !== (i = e.dispatcher.eventListeners[t].indexOf(n)) && e.dispatcher.eventListeners[t].splice(i, 1)
            },
            e.dispatchEvent = function(t) {
                var n;
                for (n in e.dispatcher.eventListeners[t.type]) e.dispatcher.eventListeners[t.type] && e.dispatcher.eventListeners[t.type].hasOwnProperty(n) && "function" == typeof e.dispatcher.eventListeners[t.type][n] && e.dispatcher.eventListeners[t.type][n](t)
            },
            e.dispatchSocketEvent = function(t) {
                var n;
                for (n in e.dispatcher.eventListeners[t.type]) e.dispatcher.eventListeners[t.type] && e.dispatcher.eventListeners[t.type].hasOwnProperty(n) && "function" == typeof e.dispatcher.eventListeners[t.type][n] && e.dispatcher.eventListeners[t.type][n](t.msg)
            },
            e
        },
        c = function(e) {
            var t = {};
            return t.type = e.type,
            t
        },
        d = function(e) {
            var t = c(e);
            return t.stream = e.stream,
            t.reason = e.reason,
            t.msg = e.msg,
            t
        },
        u = function(e) {
            var t = c(e);
            return t.uid = e.uid,
            t.attr = e.attr,
            t.stream = e.stream,
            t
        },
        l = function(e) {
            var t = c(e);
            return t.msg = e.msg,
            t
        },
        p = function(e) {
            var t = c(e);
            return t.url = e.url,
            t.uid = e.uid,
            t.status = e.status,
            t.reason = e.reason,
            t
        },
        f = n(3),
        m = function() {};
        m.prototype.set = function(e, t) { ["BatteryLevel"].indexOf(e) > -1 && (this[e] = t)
        };
        var g = new
        function() {
            var e = s();
            return e.states = {
                UNINIT: "UNINIT",
                INITING: "INITING",
                INITED: "INITED"
            },
            e.state = e.states.UNINIT,
            e.batteryManager = null,
            e._init = function(t, n) {
                e.state = e.states.INITING,
                navigator.getBattery ? navigator.getBattery().then(function(n) {
                    e.batteryManager = n,
                    t && setTimeout(function() {
                        t()
                    },
                    0)
                }).
                catch(function(e) {
                    r.
                default.debug("navigator.getBattery is disabled", e),
                    t && t()
                }) : (e.state = e.states.INITED, t && t())
            },
            e._getBatteryStats = function() {
                var t = {};
                return e.batteryManager && e.batteryManager.level ? t.BatteryLevel = Math.floor(100 * e.batteryManager.level) : t.BatteryLevel = "UNSUPPORTED",
                t
            },
            e.getStats = function(t, n) {
                var i = new m,
                o = e._getBatteryStats();
                o && o.BatteryLevel && i.set("BatteryLevel", o.BatteryLevel),
                t && t(i)
            },
            e._init(),
            e
        },
        v = n(4),
        S = n.n(v),
        I = function(e) {
            var t = s();
            return t.url = ".",
            t
        },
        h = n(8),
        y = {
            101100 : "NO_FLAG_SET",
            101101 : "FLAG_SET_BUT_EMPTY",
            101102 : "INVALID_FALG_SET",
            101203 : "NO_SERVICE_AVIABLE",
            0 : "OK_CODE",
            5 : "INVALID_VENDOR_KEY",
            7 : "INVALID_CHANNEL_NAME",
            8 : "INTERNAL_ERROR",
            9 : "NO_AUTHORIZED",
            10 : "DYNAMIC_KEY_TIMEOUT",
            11 : "NO_ACTIVE_STATUS",
            13 : "DYNAMIC_KEY_EXPIRED",
            14 : "STATIC_USE_DYANMIC_KEY",
            15 : "DYNAMIC_USE_STATIC_KEY"
        },
        _ = {
            2000 : "ERR_NO_VOCS_AVAILABLE",
            2001 : "ERR_NO_VOS_AVAILABLE",
            2002 : "ERR_JOIN_CHANNEL_TIMEOUT",
            2003 : "WARN_REPEAT_JOIN",
            2004 : "ERR_JOIN_BY_MULTI_IP",
            101 : "ERR_INVALID_VENDOR_KEY",
            102 : "ERR_INVALID_CHANNEL_NAME",
            103 : "WARN_NO_AVAILABLE_CHANNEL",
            104 : "WARN_LOOKUP_CHANNEL_TIMEOUT",
            105 : "WARN_LOOKUP_CHANNEL_REJECTED",
            106 : "WARN_OPEN_CHANNEL_TIMEOUT",
            107 : "WARN_OPEN_CHANNEL_REJECTED",
            108 : "WARN_REQUEST_DEFERRED",
            109 : "ERR_DYNAMIC_KEY_TIMEOUT",
            110 : "ERR_NO_AUTHORIZED",
            111 : "ERR_VOM_SERVICE_UNAVAILABLE",
            112 : "ERR_NO_CHANNEL_AVAILABLE_CODE",
            113 : "ERR_TOO_MANY_USERS",
            114 : "ERR_MASTER_VOCS_UNAVAILABLE",
            115 : "ERR_INTERNAL_ERROR",
            116 : "ERR_NO_ACTIVE_STATUS",
            117 : "ERR_INVALID_UID",
            118 : "ERR_DYNAMIC_KEY_EXPIRED",
            119 : "ERR_STATIC_USE_DYANMIC_KE",
            120 : "ERR_DYNAMIC_USE_STATIC_KE",
            2 : "K_TIMESTAMP_EXPIRED",
            3 : "K_CHANNEL_PERMISSION_INVALID",
            4 : "K_CERTIFICATE_INVALID",
            5 : "K_CHANNEL_NAME_EMPTY",
            6 : "K_CHANNEL_NOT_FOUND",
            7 : "K_TICKET_INVALID",
            8 : "K_CHANNEL_CONFLICTED",
            9 : "K_SERVICE_NOT_READY",
            10 : "K_SERVICE_TOO_HEAVY",
            14 : "K_UID_BANNED",
            15 : "K_IP_BANNED",
            16 : "K_CHANNEL_BANNED"
        },
        E = {
            1 : "ERROR_ILLEAGAL_APPID",
            2 : "ERROR_ILLEAGAL_UID",
            3 : "INTERNAL_SERVER_ERROR"
        },
        b = ["NO_SERVICE_AVIABLE"],
        T = {
            19 : "ERR_ALREADY_IN_USE",
            10 : "ERR_TIMEDOUT",
            3 : "ERR_NOT_READY",
            9 : "ERR_NO_PERMISSION",
            0 : "UNKNOW_ERROR"
        },
        A = {
            FAILED: "FAILED",
            INVALID_KEY: "INVALID_KEY",
            INVALID_CLIENT_MODE: "INVALID_CLIENT_MODE",
            INVALID_CLIENT_CODEC: "INVALID_CLIENT_CODEC",
            CLIENT_MODE_CODEC_MISMATCH: "CLIENT_MODE_CODEC_MISMATCH",
            WEB_API_NOT_SUPPORTED: "WEB_API_NOT_SUPPORTED",
            INVALID_PARAMETER: "INVALID_PARAMETER",
            INVALID_OPERATION: "INVALID_OPERATION",
            INVALID_LOCAL_STREAM: "INVALID_LOCAL_STREAM",
            INVALID_REMOTE_STREAM: "INVALID_REMOTE_STREAM",
            INVALID_DYNAMIC_KEY: "INVALID_DYNAMIC_KEY",
            DYNAMIC_KEY_TIMEOUT: "DYNAMIC_KEY_TIMEOUT",
            NO_VOCS_AVAILABLE: "NO_VOCS_AVAILABLE",
            NO_VOS_AVAILABLE: "ERR_NO_VOS_AVAILABLE",
            JOIN_CHANNEL_TIMEOUT: "ERR_JOIN_CHANNEL_TIMEOUT",
            NO_AVAILABLE_CHANNEL: "NO_AVAILABLE_CHANNEL",
            LOOKUP_CHANNEL_TIMEOUT: "LOOKUP_CHANNEL_TIMEOUT",
            LOOKUP_CHANNEL_REJECTED: "LOOKUP_CHANNEL_REJECTED",
            OPEN_CHANNEL_TIMEOUT: "OPEN_CHANNEL_TIMEOUT",
            OPEN_CHANNEL_REJECTED: "OPEN_CHANNEL_REJECTED",
            REQUEST_DEFERRED: "REQUEST_DEFERRED",
            STREAM_ALREADY_PUBLISHED: "STREAM_ALREADY_PUBLISHED",
            STREAM_NOT_YET_PUBLISHED: "STREAM_NOT_YET_PUBLISHED",
            JOIN_TOO_FREQUENT: "JOIN_TOO_FREQUENT",
            SOCKET_ERROR: "SOCKET_ERROR",
            SOCKET_DISCONNECTED: "SOCKET_DISCONNECTED",
            PEERCONNECTION_FAILED: "PEERCONNECTION_FAILED",
            CONNECT_GATEWAY_ERROR: "CONNECT_GATEWAY_ERROR",
            SERVICE_NOT_AVAILABLE: "SERVICE_NOT_AVAILABLE",
            JOIN_CHANNEL_FAILED: "JOIN_CHANNEL_FAILED",
            PUBLISH_STREAM_FAILED: "PUBLISH_STREAM_FAILED",
            UNPUBLISH_STREAM_FAILED: "UNPUBLISH_STREAM_FAILED",
            SUBSCRIBE_STREAM_FAILED: "SUBSCRIBE_STREAM_FAILED",
            UNSUBSCRIBE_STREAM_FAILED: "UNSUBSCRIBE_STREAM_FAILED",
            NO_SUCH_REMOTE_STREAM: "NO_SUCH_REMOTE_STREAM",
            ERR_FAILED: "1",
            ERR_INVALID_VENDOR_KEY: "101",
            ERR_INVALID_CHANNEL_NAME: "102",
            WARN_NO_AVAILABLE_CHANNEL: "103",
            WARN_LOOKUP_CHANNEL_TIMEOUT: "104",
            WARN_LOOKUP_CHANNEL_REJECTED: "105",
            WARN_OPEN_CHANNEL_TIMEOUT: "106",
            WARN_OPEN_CHANNEL_REJECTED: "107",
            WARN_REQUEST_DEFERRED: "108",
            ERR_DYNAMIC_KEY_TIMEOUT: "109",
            ERR_INVALID_DYNAMIC_KEY: "110",
            ERR_NO_VOCS_AVAILABLE: "2000",
            ERR_NO_VOS_AVAILABLE: "2001",
            ERR_JOIN_CHANNEL_TIMEOUT: "2002",
            IOS_NOT_SUPPORT: "IOS_NOT_SUPPORT",
            WECHAT_NOT_SUPPORT: "WECHAT_NOT_SUPPORT",
            SHARING_SCREEN_NOT_SUPPORT: "SHARING_SCREEN_NOT_SUPPORT",
            STILL_ON_PUBLISHING: "STILL_ON_PUBLISHING",
            LOW_STREAM_ALREADY_PUBLISHED: "LOW_STREAM_ALREADY_PUBLISHED",
            LOW_STREAM_NOT_YET_PUBLISHED: "LOW_STREAM_ALREADY_PUBLISHED",
            HIGH_STREAM_NOT_VIDEO_TRACE: "HIGH_STREAM_NOT_VIDEO_TRACE",
            NOT_FIND_DEVICE_BY_LABEL: "NOT_FIND_DEVICE_BY_LABEL",
            ENABLE_DUALSTREAM_FAILED: "ENABLE_DUALSTREAM_FAILED",
            DISABLE_DUALSTREAM_FAILED: "DISABLE_DUALSTREAM_FAILED",
            PLAYER_NOT_FOUND: "PLAYER_NOT_FOUND",
            ELECTRON_NOT_SUPPORT_SHARING_SCREEN: "ELECTRON_NOT_SUPPORT_SHARING_SCREEN",
            BAD_ENVIRONMENT: "BAD_ENVIRONMENT"
        },
        R = 0,
        C = function(e) {
            var t = I({});
            t.id = e.id,
            t.playerId = R++,
            t.fit = e.options && e.options.fit,
            "contain" !== t.fit && "cover" !== t.fit && (t.fit = null),
            t.url = e.url,
            t.stream = e.stream.stream,
            t.elementID = e.elementID,
            t.setAudioOutput = function(e, n, i) {
                var o = t.video || t.audio;
                return o ? o.setSinkId ? void o.setSinkId(e).then(function() {
                    return r.
                default.debug("[" + t.id + "] " + "video ".concat(t.id, " setAudioOutput ").concat(e, " SUCCESS")),
                    o == t.video && t.audio ? t.audio.setSinkId(e) : Promise.resolve()
                }).then(function() {
                    return r.
                default.debug("[" + t.id + "] " + "audio ".concat(t.id, " setAudioOutput ").concat(e, " SUCCESS")),
                    n && n()
                }).
                catch(function(e) {
                    return r.
                default.error("[" + t.id + "] VideoPlayer.setAudioOutput", e),
                    i && i(e)
                }) : (r.
            default.error("[" + t.id + "] ", A.WEB_API_NOT_SUPPORTED), i && i(A.WEB_API_NOT_SUPPORTED)) : (r.
            default.error("[" + t.id + "] ", A.PLAYER_NOT_FOUND), i && i(A.PLAYER_NOT_FOUND))
            },
            t.destroy = function() {
                r.
            default.debug("destroy ".concat(e.stream.local ? "local": "remote", " Player ").concat(t.id)),
                Object(h.setSrcObject)(t.video, null),
                Object(h.setSrcObject)(t.audio, null),
                t.video.pause(),
                delete t.resizer,
                clearInterval(t.mediaPlayerTimer),
                t.mediaPlayerTimer = null,
                document.getElementById(t.div.id) && t.parentNode.contains(t.div) && t.parentNode.removeChild(t.div),
                ["video", "audio"].forEach(function(n) {
                    t[n];
                    var i = s[n];
                    clearTimeout(i.playDeferTimeout),
                    i.formerMediaState = null;
                    var o = {
                        playerId: t.playerId,
                        stateId: i.stateId + 1,
                        playDeferTimeout: null,
                        error: !1,
                        status: "aborted",
                        reason: "stop",
                        updatedAt: Date.now()
                    };
                    s[n] = o;
                    var c = {
                        type: "player-status-change",
                        playerId: t.playerId,
                        mediaType: n,
                        status: o.status,
                        reason: o.reason,
                        isErrorState: !1
                    };
                    r.
                default.debug("Media Player Status Change Triggered by destroy()", c),
                    e.stream.dispatchEvent(c),
                    a.b.reportApiInvoke(e.stream.sid, {
                        name: "Stream.playerStatusChange",
                        options: c,
                        tag: "tracer"
                    })()
                })
            },
            t.div = document.createElement("div"),
            t.div.setAttribute("id", "player_" + t.id),
            e.stream.video ? t.div.setAttribute("style", "width: 100%; height: 100%; position: relative; background-color: black; overflow: hidden;") : t.div.setAttribute("style", "width: 100%; height: 100%; position: relative; overflow: hidden;"),
            t.video = document.createElement("video"),
            t.video.setAttribute("id", "video" + t.id),
            e.stream.local && !e.stream.screen ? e.stream.mirror ? t.video.setAttribute("style", "width: 100%; height: 100%; position: absolute; transform: rotateY(180deg); object-fit: ".concat(t.fit || "cover", ";")) : t.video.setAttribute("style", "width: 100%; height: 100%; position: absolute; object-fit: ".concat(t.fit || "cover", ";")) : e.stream.video ? t.video.setAttribute("style", "width: 100%; height: 100%; position: absolute; object-fit: ".concat(t.fit || "cover", ";")) : e.stream.screen ? t.video.setAttribute("style", "width: 100%; height: 100%; position: absolute; object-fit: ".concat(t.fit || "contain")) : t.video.setAttribute("style", "width: 100%; height: 100%; position: absolute; display: none; object-fit: ".concat(t.fit || "cover"));
            var n = {
                autoplay: !0,
                muted: !!e.stream.local || !(!f.isSafari() && "iOS" !== f.getBrowserOS()) && "video_element_muted",
                playsinline: !0,
                controls: !(!f.isSafari() && "iOS" !== f.getBrowserOS() || e.stream.local),
                volume: null
            },
            i = S()({},
            n, e.options); ! 0 !== i.muted || i.volume || (i.volume = 0),
            i.autoplay && t.video.setAttribute("autoplay", ""),
            !0 !== i.muted && "video_element_muted" !== i.muted || (t.video.setAttribute("muted", ""), t.video.muted = !0),
            i.playsinline && t.video.setAttribute("playsinline", ""),
            i.controls && t.video.setAttribute("controls", ""),
            Number.isFinite(i.volume) && (t.video.volume = i.volume),
            t.audio = document.createElement("audio"),
            t.audio.setAttribute("id", "audio" + t.id),
            i.autoplay && t.audio.setAttribute("autoplay", ""),
            !0 === i.muted && t.audio.setAttribute("muted", ""),
            !0 === i.muted && (t.audio.muted = !0),
            i.playsinline && t.audio.setAttribute("playsinline", ""),
            Number.isFinite(i.volume) && (t.audio.volume = i.volume),
            void 0 !== t.elementID ? (document.getElementById(t.elementID).appendChild(t.div), t.container = document.getElementById(t.elementID)) : (document.body.appendChild(t.div), t.container = document.body),
            t.parentNode = t.div.parentNode;
            var s = {
                video: {
                    playerId: t.playerId,
                    stateId: 0,
                    playDeferTimeout: null,
                    error: !1,
                    status: "init",
                    reason: null,
                    updatedAt: Date.now()
                },
                audio: {
                    playerId: t.playerId,
                    stateId: 0,
                    playDeferTimeout: null,
                    error: !1,
                    status: "init",
                    reason: null,
                    updatedAt: Date.now()
                }
            };
            t.mediaElemExists = function(e) {
                for (var t = e,
                n = 0; n < Object(o.getParameter)("MEDIA_ELEMENT_EXISTS_DEPTH") && t; n++) t = t.parentNode;
                return !! t
            };
            var c = function(e) {
                return t.mediaElemExists(e) ? e.paused ? "paused": "play": "aborted"
            },
            d = function(e, t, n) {
                var i = c(e),
                o = !0;
                return "paused" === i ? ("audio" === t && !0 === n.muted && (o = !1), n.autoplay || (o = !1)) : "play" === i ? "video" === t ? o = !1 : !0 === n.muted ? e.muted && (o = !1) : e.muted || (o = !1) : "aborted" === i && (o = !1),
                o
            },
            u = function(n) {
                var u, l = this;
                if (l === t.video ? u = "video": l === t.audio && (u = "audio"), u) {
                    n.type || r.
                default.error("Unexpected evt", n);
                    var p = c(l);
                    clearTimeout(s[u].playDeferTimeout),
                    s[u].playDeferTimeout = setTimeout(function() {
                        s[u].playDeferTimeout = null;
                        var o = s[u],
                        f = c(l);
                        if (p === f) {
                            var m = {
                                playerId: t.playerId,
                                stateId: o.stateId + 1,
                                playDeferTimeout: null,
                                error: d(l, u, i),
                                status: c(l),
                                reason: n.type,
                                updatedAt: Date.now()
                            };
                            if (o.status !== m.status) {
                                s[u] = m;
                                var g = {
                                    type: "player-status-change",
                                    playerId: t.playerId,
                                    mediaType: u,
                                    status: m.status,
                                    reason: m.reason,
                                    isErrorState: m.error
                                };
                                r.
                            default.debug("Media Player Status Change", g),
                                e.stream.dispatchEvent(g),
                                a.b.reportApiInvoke(e.stream.sid, {
                                    name: "Stream.playerStatusChange",
                                    options: g,
                                    tag: "tracer"
                                })()
                            }
                        } else r.
                    default.debug("Status Change after event Triggered." + "Stream ".concat(t.id, " PlayerId ").concat(t.playerId, " mediaType ").concat(u, " Status ").concat(p, "=>").concat(f))
                    },
                    Object(o.getParameter)("PLAYER_STATE_DEFER"))
                } else r.
            default.error("Unknown media element", l)
            };
            if (t.mediaPlayerTimer = setInterval(function() { ["video", "audio"].forEach(function(n) {
                    var o = t[n],
                    u = s[n];
                    if (!u.playDeferTimeout) {
                        var l = {
                            playerId: t.playerId,
                            stateId: u.stateId + 1,
                            playDeferTimeout: null,
                            error: d(o, n, i),
                            status: c(o),
                            reason: "timer",
                            updatedAt: Date.now()
                        };
                        if (u.status !== l.status) {
                            r.
                        default.debug("Player ".concat(t.playerId, " ").concat(n, " Status Changed Detected by Timer: ").concat(u.status, "=>").concat(l.status)),
                            s[n] = l;
                            var p = {
                                type: "player-status-change",
                                playerId: t.playerId,
                                mediaType: n,
                                status: l.status,
                                reason: l.reason,
                                isErrorState: l.error
                            };
                            r.
                        default.debug("Media Player Status Change", p),
                            e.stream.dispatchEvent(p),
                            a.b.reportApiInvoke(e.stream.sid, {
                                name: "Stream.playerStatusChange",
                                options: p,
                                tag: "tracer"
                            })()
                        }
                    }
                })
            },
            Object(o.getParameter)("PLAYER_STATE_DEFER")), t.video.addEventListener("playing",
            function(e) { !
                function e() {
                    t.video.videoWidth * t.video.videoHeight > 4 ? r.
                default.debug("[" + t.id + "] video dimensions:", t.video.videoWidth, t.video.videoHeight) : setTimeout(e, 50)
                } ()
            }), t.video.addEventListener("playing", u), t.video.addEventListener("canplay", u), t.video.addEventListener("abort", u), t.video.addEventListener("onerror", u), t.video.addEventListener("suspend", u), t.video.addEventListener("stalled", u), t.video.addEventListener("pause", u), t.audio.addEventListener("playing", u), t.audio.addEventListener("canplay", u), t.audio.addEventListener("abort", u), t.audio.addEventListener("onerror", u), t.audio.addEventListener("suspend", u), t.audio.addEventListener("stalled", u), t.audio.addEventListener("pause", u), e.stream.hasVideo() || e.stream.hasScreen()) t.div.appendChild(t.video),
            t.div.appendChild(t.audio),
            f.isEdge() ? t.video.srcObject = e.stream.stream: (Object(h.attachMediaStream)(t.video, e.stream.stream), Object(h.attachMediaStream)(t.audio, e.stream.stream));
            else if (!1 !== i.muted && "video_element_muted" !== i.muted || (t.video.removeAttribute("muted"), t.video.muted = !1), t.div.appendChild(t.video), window.MediaStream && f.isSafari()) {
                var l = new MediaStream(e.stream.stream.getAudioTracks());
                Object(h.setSrcObject)(t.video, l)
            } else Object(h.setSrcObject)(t.video, e.stream.stream);
            return t.setAudioVolume = function(e) {
                var n = parseInt(e) / 100;
                isFinite(n) && (n < 0 ? n = 0 : n > 1 && (n = 1), t.video && (t.video.volume = n), t.audio && (t.audio.volume = n))
            },
            t
        },
        O = function(e) {
            var t = {},
            n = h.RTCPeerConnection;
            t.uid = e.uid,
            t.isVideoMute = e.isVideoMute,
            t.isAudioMute = e.isAudioMute,
            t.isSubscriber = e.isSubscriber,
            t.clientId = e.clientId,
            t.filterStatsCache = [],
            t.originStatsCache = [],
            t.lastTimeGetStats = null,
            t.pc_config = {
                iceServers: [{
                    url: "stun:webcs.agora.io:3478"
                }]
            },
            t.con = {
                optional: [{
                    DtlsSrtpKeyAgreement: !0
                }]
            },
            e.iceServers instanceof Array ? t.pc_config.iceServers = e.iceServers: (e.stunServerUrl && (e.stunServerUrl instanceof Array ? e.stunServerUrl.map(function(e) {
                "string" == typeof e && "" !== e && t.pc_config.iceServers.push({
                    url: e
                })
            }) : "string" == typeof e.stunServerUrl && "" !== e.stunServerUrl && t.pc_config.iceServers.push({
                url: e.stunServerUrl
            })), e.turnServer && (e.turnServer instanceof Array ? e.turnServer.map(function(e) {
                "string" == typeof e.url && "" !== e.url && t.pc_config.iceServers.push({
                    username: e.username,
                    credential: e.credential,
                    url: e.url
                })
            }) : "string" == typeof e.turnServer.url && "" !== e.turnServer.url && (t.pc_config.iceServers.push({
                username: e.turnServer.username,
                credential: e.turnServer.credential,
                credentialType: "password",
                urls: "turn:" + e.turnServer.url + ":" + e.turnServer.udpport + "?transport=udp"
            }), "string" == typeof e.turnServer.tcpport && "" !== e.turnServer.tcpport && t.pc_config.iceServers.push({
                username: e.turnServer.username,
                credential: e.turnServer.credential,
                credentialType: "password",
                urls: "turn:" + e.turnServer.url + ":" + e.turnServer.tcpport + "?transport=tcp"
            }), !0 === e.turnServer.forceturn && (t.pc_config.iceTransportPolicy = "relay")))),
            void 0 === e.audio && (e.audio = !0),
            void 0 === e.video && (e.video = !0),
            t.mediaConstraints = {
                mandatory: {
                    OfferToReceiveVideo: e.video,
                    OfferToReceiveAudio: e.audio
                }
            },
            t.roapSessionId = 103;
            try {
                t.pc_config.sdpSemantics = "plan-b",
                t.peerConnection = new n(t.pc_config, t.con)
            } catch(e) {
                delete t.pc_config.sdpSemantics,
                t.peerConnection = new n(t.pc_config, t.con)
            }
            t.iceCandidateTimer = setTimeout(function() {
                t.iceCandidateTimer = null,
                r.
            default.debug("[".concat(t.clientId, "]Candidates collected: ").concat(t.iceCandidateCount)),
                t.moreIceComing && (t.moreIceComing = !1, t.markActionNeeded())
            },
            Object(o.getParameter)("CANDIDATE_TIMEOUT")),
            t.peerConnection.onicecandidate = function(e) {
                var n, i, o, a;
                i = (n = t.peerConnection.localDescription.sdp).match(/a=candidate:.+typ\ssrflx.+\r\n/),
                o = n.match(/a=candidate:.+typ\shost.+\r\n/),
                a = n.match(/a=candidate:.+typ\srelay.+\r\n/),
                null === i && null === o && null === a || void 0 !== t.ice || !t.iceCandidateTimer || (r.
            default.debug("[" + t.clientId + "]srflx candidate : " + i + " relay candidate: " + a + " host candidate : " + o), clearTimeout(t.iceCandidateTimer), t.iceCandidateTimer = null, t.ice = 0, t.moreIceComing = !1, t.markActionNeeded()),
                t.iceCandidateCount = t.iceCandidateCount + 1
            },
            r.
        default.debug("[" + t.clientId + ']Created webkitRTCPeerConnnection with config "' + JSON.stringify(t.pc_config) + '".');
            var i = function(t) {
                return e.screen && (t = t.replace("a=x-google-flag:conference\r\n", "")),
                t
            },
            a = function(n) {
                var i, o;
                if ((i = n.match(/m=video.*\r\n/)) && e.minVideoBW && e.maxVideoBW) {
                    o = i[0] + "b=AS:" + e.maxVideoBW + "\r\n";
                    var a = 0,
                    s = 0;
                    "h264" === e.codec ? (a = n.search(/a=rtpmap:(\d+) H264\/90000\r\n/), s = n.search(/H264\/90000\r\n/)) : "vp8" === e.codec && (a = n.search(/a=rtpmap:(\d+) VP8\/90000\r\n/), s = n.search(/VP8\/90000\r\n/)),
                    -1 !== a && -1 !== s && s - a > 10 && (o = o + "a=fmtp:" + n.slice(a + 9, s - 1) + " x-google-min-bitrate=" + e.minVideoBW + "\r\n"),
                    n = n.replace(i[0], o),
                    r.
                default.debug("[" + t.clientId + "]Set Video Bitrate - min:" + e.minVideoBW + " max:" + e.maxVideoBW)
                }
                return (i = n.match(/m=audio.*\r\n/)) && e.maxAudioBW && (o = i[0] + "b=AS:" + e.maxAudioBW + "\r\n", n = n.replace(i[0], o)),
                n
            };
            return t.processSignalingMessage = function(e) {
                var n, o = JSON.parse(e);
                t.incomingMessage = o,
                "new" === t.state ? "OFFER" === o.messageType ? (n = {
                    sdp: o.sdp,
                    type: "offer"
                },
                t.peerConnection.setRemoteDescription(new RTCSessionDescription(n)), t.state = "offer-received", t.markActionNeeded()) : t.error("Illegal message for this state: " + o.messageType + " in state " + t.state) : "offer-sent" === t.state ? "ANSWER" === o.messageType ? ((n = {
                    sdp: o.sdp,
                    type: "answer"
                }).sdp = i(n.sdp), n.sdp = a(n.sdp), t.peerConnection.setRemoteDescription(new RTCSessionDescription(n)), t.sendOK(), t.state = "established") : "pr-answer" === o.messageType ? (n = {
                    sdp: o.sdp,
                    type: "pr-answer"
                },
                t.peerConnection.setRemoteDescription(new RTCSessionDescription(n))) : "offer" === o.messageType ? t.error("Not written yet") : t.error("Illegal message for this state: " + o.messageType + " in state " + t.state) : "established" === t.state && ("OFFER" === o.messageType ? (n = {
                    sdp: o.sdp,
                    type: "offer"
                },
                t.peerConnection.setRemoteDescription(new RTCSessionDescription(n)), t.state = "offer-received", t.markActionNeeded()) : "ANSWER" === o.messageType ? ((n = {
                    sdp: o.sdp,
                    type: "answer"
                }).sdp = i(n.sdp), n.sdp = a(n.sdp), t.peerConnection.setRemoteDescription(new RTCSessionDescription(n))) : t.error("Illegal message for this state: " + o.messageType + " in state " + t.state))
            },
            t.getVideoRelatedStats = function(e) {
                t.peerConnection.getStats(function(n) {
                    Object.keys(n).forEach(function(i) {
                        var o = n[i];
                        t.isSubscriber ? "video" === o.mediaType && o.id && ~o.id.indexOf("recv") && e && e({
                            mediaType: "video",
                            peerId: t.uid,
                            isVideoMute: t.isVideoMute,
                            frameRateReceived: o.googFrameRateReceived,
                            frameRateDecoded: o.googFrameRateDecoded,
                            bytesReceived: o.bytesReceived,
                            packetsReceived: o.packetsReceived,
                            packetsLost: o.packetsLost
                        }) : "video" === o.mediaType && o.id && ~o.id.indexOf("send") && e && e({
                            mediaType: "video",
                            isVideoMute: t.isVideoMute,
                            frameRateInput: o.googFrameRateInput,
                            frameRateSent: o.googFrameRateSent,
                            googRtt: o.googRtt
                        })
                    })
                })
            },
            t.getAudioRelatedStats = function(e) {
                t.peerConnection.getStats(function(n) {
                    Object.keys(n).forEach(function(i) {
                        var o = n[i];
                        t.isSubscriber && "audio" === o.mediaType && o.id && ~o.id.indexOf("recv") && e && e({
                            mediaType: "audio",
                            peerId: t.uid,
                            isAudioMute: t.isAudioMute,
                            frameDropped: parseInt(o.googDecodingPLC) + parseInt(o.googDecodingPLCCNG) + "",
                            frameReceived: o.googDecodingCTN,
                            googJitterReceived: o.googJitterReceived,
                            bytesReceived: o.bytesReceived,
                            packetsReceived: o.packetsReceived,
                            packetsLost: o.packetsLost
                        })
                    })
                })
            },
            t.getStatsRate = function(e) {
                t.getStats(function(t) {
                    e(t)
                })
            },
            t.getStats = function(e, n) {
                n = (n = n || 500) > 500 ? 500 : n,
                t.lastTimeGetStats && Date.now() - t.lastTimeGetStats < n ? e && e(t.filterStatsCache, t.originStatsCache) : this._getStats(function(n, i) {
                    t.filterStatsCache = n,
                    t.originStatsCache = i,
                    t.lastTimeGetStats = Date.now(),
                    e && e(n, i)
                })
            },
            t._getStats = function(e) {
                t.peerConnection.getStats(function(n) {
                    var i = [],
                    o = [],
                    r = null;
                    Object.keys(n).forEach(function(e) {
                        var t = n[e];
                        o.push(t),
                        "ssrc" !== t.type && "VideoBwe" !== t.type || (r = t.timestamp, i.push(t))
                    }),
                    i.push({
                        id: "time",
                        startTime: t.connectedTime,
                        timestamp: r || new Date
                    }),
                    e(i, o)
                })
            },
            t.addTrack = function(e, n) {
                t.peerConnection.addTrack(e, n)
            },
            t.removeTrack = function(e, n) {
                t.peerConnection.removeTrack(t.peerConnection.getSenders().find(function(t) {
                    return t.track == e
                }))
            },
            t.addStream = function(e) {
                t.peerConnection.addStream(e),
                t.markActionNeeded()
            },
            t.removeStream = function() {
                t.markActionNeeded()
            },
            t.close = function() {
                t.state = "closed",
                t.peerConnection.close()
            },
            t.markActionNeeded = function() {
                t.actionNeeded = !0,
                t.doLater(function() {
                    t.onstablestate()
                })
            },
            t.doLater = function(e) {
                window.setTimeout(e, 1)
            },
            t.onstablestate = function() {
                var e;
                if (t.actionNeeded) {
                    if ("new" === t.state || "established" === t.state) t.peerConnection.createOffer(function(e) {
                        if (e.sdp !== t.prevOffer) return t.peerConnection.setLocalDescription(e),
                        t.state = "preparing-offer",
                        void t.markActionNeeded();
                        r.
                    default.debug("[" + t.clientId + "]Not sending a new offer")
                    },
                    function(e) {
                        r.
                    default.debug("[" + t.clientId + "]peer connection create offer failed ", e)
                    },
                    t.mediaConstraints);
                    else if ("preparing-offer" === t.state) {
                        if (t.moreIceComing) return;
                        t.prevOffer = t.peerConnection.localDescription.sdp,
                        t.offerCandidates = t.prevOffer.match(/a=candidate.+\r\n/g) || [],
                        t.offerCandidates.length || (r.
                    default.warning("[".concat(t.clientId, "]No Ice Candidate generated")), Object(o.getParameter)("SHIM_CANDIDATE") ? (r.
                    default.debug("Shimming fake candidate"), t.prevOffer += "a=candidate:2243255435 1 udp 2122194687 192.168.0.1 30000 typ host generation 0 network-id 1\r\n") : r.
                    default.error("[".concat(t.clientId, "]None Ice Candidate not allowed"))),
                        t.prevOffer = t.prevOffer.replace(/a=candidate:.+typ\shost.+\r\n/g, "a=candidate:2243255435 1 udp 2122194687 192.168.0.1 30000 typ host generation 0 network-id 1\r\n"),
                        t.sendMessage("OFFER", t.prevOffer),
                        t.state = "offer-sent"
                    } else if ("offer-received" === t.state) t.peerConnection.createAnswer(function(e) {
                        if (t.peerConnection.setLocalDescription(e), t.state = "offer-received-preparing-answer", t.iceStarted) t.markActionNeeded();
                        else {
                            var n = new Date;
                            r.
                        default.debug("[" + t.clientId + "]" + n.getTime() + ": Starting ICE in responder"),
                            t.iceStarted = !0
                        }
                    },
                    function(e) {
                        r.
                    default.debug("[" + t.clientId + "]peer connection create answer failed ", e)
                    },
                    t.mediaConstraints);
                    else if ("offer-received-preparing-answer" === t.state) {
                        if (t.moreIceComing) return;
                        e = t.peerConnection.localDescription.sdp,
                        t.sendMessage("ANSWER", e),
                        t.state = "established"
                    } else t.error("Dazed and confused in state " + t.state + ", stopping here");
                    t.actionNeeded = !1
                }
            },
            t.sendOK = function() {
                t.sendMessage("OK")
            },
            t.sendMessage = function(e, n) {
                var i = {};
                i.messageType = e,
                i.sdp = n,
                "OFFER" === e ? (i.offererSessionId = t.sessionId, i.answererSessionId = t.otherSessionId, i.seq = t.sequenceNumber += 1, i.tiebreaker = Math.floor(429496723 * Math.random() + 1)) : (i.offererSessionId = t.incomingMessage.offererSessionId, i.answererSessionId = t.sessionId, i.seq = t.incomingMessage.seq),
                t.onsignalingmessage(JSON.stringify(i))
            },
            t._getSender = function(e) {
                if (t.peerConnection && t.peerConnection.getSenders) {
                    var n = t.peerConnection.getSenders().find(function(t) {
                        return t.track.kind == e
                    });
                    if (n) return n
                }
                return null
            },
            t.hasSender = function(e) {
                return !! t._getSender(e)
            },
            t.replaceTrack = function(e, n, i) {
                var o = t._getSender(e.kind);
                if (!o) return i("NO_SENDER_FOUND");
                try {
                    o.replaceTrack(e)
                } catch(e) {
                    return i && i(e)
                }
                setTimeout(function() {
                    return n && n()
                },
                50)
            },
            t.error = function(e) {
                throw "Error in RoapOnJsep: " + e
            },
            t.sessionId = t.roapSessionId += 1,
            t.sequenceNumber = 0,
            t.actionNeeded = !1,
            t.iceStarted = !1,
            t.moreIceComing = !0,
            t.iceCandidateCount = 0,
            t.onsignalingmessage = e.callback,
            t.peerConnection.ontrack = function(e) {
                t.onaddstream && (t.onaddstream(e, "ontrack"), t.peerConnection.onaddstream = null)
            },
            t.peerConnection.onaddstream = function(e) {
                t.onaddstream && (t.onaddstream(e, "onaddstream"), t.peerConnection.ontrack = null)
            },
            t.peerConnection.onremovestream = function(e) {
                t.onremovestream && t.onremovestream(e)
            },
            t.peerConnection.oniceconnectionstatechange = function(e) {
                "connected" === e.currentTarget.iceConnectionState && (t.connectedTime = new Date),
                t.oniceconnectionstatechange && t.oniceconnectionstatechange(e.currentTarget.iceConnectionState)
            },
            t.renegotiate = function() {
                void 0 !== t.prevOffer && t.peerConnection.createOffer().then(function(e) {
                    return e.sdp = e.sdp.replace(/a=recvonly\r\n/g, "a=inactive\r\n"),
                    e.sdp = i(e.sdp),
                    e.sdp = a(e.sdp),
                    t.peerConnection.setLocalDescription(e)
                }).then(function() {
                    t.onnegotiationneeded && t.onnegotiationneeded(t.peerConnection.localDescription.sdp)
                }).
                catch(function(e) {
                    console.log("createOffer error: ", e)
                })
            },
            t.peerConnection.onnegotiationneeded = t.renegotiate,
            t.onaddstream = null,
            t.onremovestream = null,
            t.onnegotiationneeded = null,
            t.state = "new",
            t.markActionNeeded(),
            t
        },
        w = function(e) {
            var t = {},
            n = h.RTCPeerConnection;
            t.uid = e.uid,
            t.isVideoMute = e.isVideoMute,
            t.isAudioMute = e.isAudioMute,
            t.isSubscriber = e.isSubscriber,
            t.clientId = e.clientId,
            t.filterStatsCache = [],
            t.originStatsCache = [],
            t.lastTimeGetStats = null,
            t.pc_config = {
                iceServers: [{
                    urls: ["stun:webcs.agora.io:3478", "stun:stun.l.google.com:19302"]
                }],
                bundlePolicy: "max-bundle"
            },
            t.con = {
                optional: [{
                    DtlsSrtpKeyAgreement: !0
                }]
            },
            e.iceServers instanceof Array ? t.pc_config.iceServers = e.iceServers: (e.stunServerUrl && (e.stunServerUrl instanceof Array ? e.stunServerUrl.map(function(e) {
                "string" == typeof e && "" !== e && t.pc_config.iceServers.push({
                    url: e
                })
            }) : "string" == typeof e.stunServerUrl && "" !== e.stunServerUrl && t.pc_config.iceServers.push({
                url: e.stunServerUrl
            })), e.turnServer && (e.turnServer instanceof Array ? e.turnServer.map(function(e) {
                "string" == typeof e.url && "" !== e.url && t.pc_config.iceServers.push({
                    username: e.username,
                    credential: e.credential,
                    url: e.url
                })
            }) : "string" == typeof e.turnServer.url && "" !== e.turnServer.url && (t.pc_config.iceServers.push({
                username: e.turnServer.username,
                credential: e.turnServer.credential,
                credentialType: "password",
                urls: ["turn:" + e.turnServer.url + ":" + e.turnServer.udpport + "?transport=udp"]
            }), "string" == typeof e.turnServer.tcpport && "" !== e.turnServer.tcpport && t.pc_config.iceServers.push({
                username: e.turnServer.username,
                credential: e.turnServer.credential,
                credentialType: "password",
                urls: ["turn:" + e.turnServer.url + ":" + e.turnServer.tcpport + "?transport=tcp"]
            }), !0 === e.turnServer.forceturn && (t.pc_config.iceTransportPolicy = "relay")))),
            void 0 === e.audio && (e.audio = !0),
            void 0 === e.video && (e.video = !0),
            t.mediaConstraints = {
                mandatory: {
                    OfferToReceiveVideo: e.video,
                    OfferToReceiveAudio: e.audio
                }
            },
            t.roapSessionId = 103;
            try {
                t.pc_config.sdpSemantics = "plan-b",
                t.peerConnection = new n(t.pc_config, t.con)
            } catch(e) {
                delete t.pc_config.sdpSemantics,
                t.peerConnection = new n(t.pc_config, t.con)
            }
            r.
        default.debug("[" + t.clientId + ']safari Created RTCPeerConnnection with config "' + JSON.stringify(t.pc_config) + '".'),
            t.iceCandidateTimer = setTimeout(function() {
                t.iceCandidateTimer = null,
                r.
            default.debug("[".concat(t.clientId, "]Candidates collected: ").concat(t.iceCandidateCount)),
                t.moreIceComing && (t.moreIceComing = !1, t.markActionNeeded())
            },
            Object(o.getParameter)("CANDIDATE_TIMEOUT")),
            t.peerConnection.onicecandidate = function(e) {
                var n, i, o, a;
                i = (n = t.peerConnection.localDescription.sdp).match(/a=candidate:.+typ\ssrflx.+\r\n/),
                o = n.match(/a=candidate:.+typ\shost.+\r\n/),
                a = n.match(/a=candidate:.+typ\srelay.+\r\n/),
                0 === t.iceCandidateCount && (t.timeout = setTimeout(function() {
                    t.moreIceComing && (t.moreIceComing = !1, t.markActionNeeded())
                },
                1e3)),
                null === i && null === o && null === a || void 0 !== t.ice || !t.iceCandidateTimer || (r.
            default.debug("[" + t.clientId + "]srflx candidate : " + i + " relay candidate: " + a + " host candidate : " + o), clearTimeout(t.iceCandidateTimer), t.iceCandidateTimer = null, t.ice = 0, t.moreIceComing = !1, t.markActionNeeded()),
                t.iceCandidateCount = t.iceCandidateCount + 1
            };
            var i = function(t) {
                return e.screen && (t = t.replace("a=x-google-flag:conference\r\n", "")),
                t
            },
            a = function(n) {
                var i, o;
                return (i = n.match(/m=video.*\r\n/)) && e.minVideoBW && e.maxVideoBW && (o = i[0] + "b=AS:" + e.maxVideoBW + "\r\n", n = n.replace(i[0], o), r.
            default.debug("[" + t.clientId + "]Set Video Bitrate - min:" + e.minVideoBW + " max:" + e.maxVideoBW)),
                (i = n.match(/m=audio.*\r\n/)) && e.maxAudioBW && (o = i[0] + "b=AS:" + e.maxAudioBW + "\r\n", n = n.replace(i[0], o)),
                n
            };
            t.processSignalingMessage = function(e) {
                var n, o = JSON.parse(e);
                t.incomingMessage = o,
                "new" === t.state ? "OFFER" === o.messageType ? (n = {
                    sdp: o.sdp,
                    type: "offer"
                },
                t.peerConnection.setRemoteDescription(new RTCSessionDescription(n)), t.state = "offer-received", t.markActionNeeded()) : t.error("Illegal message for this state: " + o.messageType + " in state " + t.state) : "offer-sent" === t.state ? "ANSWER" === o.messageType ? ((n = {
                    sdp: o.sdp,
                    type: "answer"
                }).sdp = i(n.sdp), n.sdp = a(n.sdp), n.sdp = n.sdp.replace(/a=x-google-flag:conference\r\n/g, ""), t.peerConnection.setRemoteDescription(new RTCSessionDescription(n)), t.sendOK(), t.state = "established") : "pr-answer" === o.messageType ? (n = {
                    sdp: o.sdp,
                    type: "pr-answer"
                },
                t.peerConnection.setRemoteDescription(new RTCSessionDescription(n))) : "offer" === o.messageType ? t.error("Not written yet") : t.error("Illegal message for this state: " + o.messageType + " in state " + t.state) : "established" === t.state && ("OFFER" === o.messageType ? (n = {
                    sdp: o.sdp,
                    type: "offer"
                },
                t.peerConnection.setRemoteDescription(new RTCSessionDescription(n)), t.state = "offer-received", t.markActionNeeded()) : "ANSWER" === o.messageType ? ((n = {
                    sdp: o.sdp,
                    type: "answer"
                }).sdp = i(n.sdp), n.sdp = a(n.sdp), t.peerConnection.setRemoteDescription(new RTCSessionDescription(n))) : t.error("Illegal message for this state: " + o.messageType + " in state " + t.state))
            };
            var s = {
                id: "",
                type: "",
                mediaType: "",
                googCodecName: "opus",
                aecDivergentFilterFraction: "0",
                audioInputLevel: "0",
                bytesSent: "0",
                packetsSent: "0",
                googEchoCancellationReturnLoss: "0",
                googEchoCancellationReturnLossEnhancement: "0"
            },
            c = {
                id: "",
                type: "",
                mediaType: "",
                googCodecName: "h264" === e.codec ? "H264": "VP8",
                bytesSent: "0",
                packetsLost: "0",
                packetsSent: "0",
                googAdaptationChanges: "0",
                googAvgEncodeMs: "0",
                googEncodeUsagePercent: "0",
                googFirsReceived: "0",
                googFrameHeightSent: "0",
                googFrameHeightInput: "0",
                googFrameRateInput: "0",
                googFrameRateSent: "0",
                googFrameWidthSent: "0",
                googFrameWidthInput: "0",
                googNacksReceived: "0",
                googPlisReceived: "0",
                googRtt: "0",
                googFramesEncoded: "0"
            },
            d = {
                id: "",
                type: "",
                mediaType: "",
                audioOutputLevel: "0",
                bytesReceived: "0",
                packetsLost: "0",
                packetsReceived: "0",
                googAccelerateRate: "0",
                googCurrentDelayMs: "0",
                googDecodingCNG: "0",
                googDecodingCTN: "0",
                googDecodingCTSG: "0",
                googDecodingNormal: "0",
                googDecodingPLC: "0",
                googDecodingPLCCNG: "0",
                googExpandRate: "0",
                googJitterBufferMs: "0",
                googJitterReceived: "0",
                googPreemptiveExpandRate: "0",
                googPreferredJitterBufferMs: "0",
                googSecondaryDecodedRate: "0",
                googSpeechExpandRate: "0"
            },
            u = {
                id: "",
                type: "",
                mediaType: "",
                googTargetDelayMs: "0",
                packetsLost: "0",
                googDecodeMs: "0",
                googMaxDecodeMs: "0",
                googRenderDelayMs: "0",
                googFrameWidthReceived: "0",
                googFrameHeightReceived: "0",
                googFrameRateReceived: "0",
                googFrameRateDecoded: "0",
                googFrameRateOutput: "0",
                googFramesDecoded: "0",
                googFrameReceived: "0",
                googJitterBufferMs: "0",
                googCurrentDelayMs: "0",
                googMinPlayoutDelayMs: "0",
                googNacksSent: "0",
                googPlisSent: "0",
                googFirsSent: "0",
                bytesReceived: "0",
                packetsReceived: "0"
            },
            l = {
                id: "bweforvideo",
                type: "VideoBwe",
                googAvailableSendBandwidth: "0",
                googAvailableReceiveBandwidth: "0",
                googActualEncBitrate: "0",
                googRetransmitBitrate: "0",
                googTargetEncBitrate: "0",
                googBucketDelay: "0",
                googTransmitBitrate: "0"
            },
            p = 0,
            f = 0,
            m = 0;
            return t.getVideoRelatedStats = function(n) {
                t.peerConnection.getStats().then(function(i) {
                    var o = {
                        peerId: t.uid,
                        mediaType: "video",
                        isVideoMute: t.isVideoMute
                    };
                    i.forEach(function(i) {
                        if (t.isSubscriber) {
                            if ("track" === i.type && (~i.id.indexOf("video") || ~i.trackIdentifier.indexOf("v"))) {
                                if (!t.lastReport) return void(t.lastReport = i);
                                o.frameRateReceived = i.framesReceived - t.lastReport.framesReceived + "",
                                o.frameRateDecoded = i.framesDecoded - t.lastReport.framesDecoded + "",
                                t.lastReport = i
                            }
                            "inbound-rtp" === i.type && ~i.id.indexOf("Video") && (o.bytesReceived = i.bytesReceived + "", o.packetsReceived = i.packetsReceived + "", o.packetsLost = i.packetsLost + "")
                        } else if ("outbound-rtp" === i.type && ~i.id.indexOf("Video")) {
                            if (!t.lastReport) return void(t.lastReport = i);
                            n && n({
                                mediaType: "video",
                                isVideoMute: t.isVideoMute,
                                frameRateInput: e.maxFrameRate + "",
                                frameRateSent: i.framesEncoded - t.lastReport.framesEncoded + ""
                            }),
                            t.lastReport = i
                        }
                    }),
                    n && n(o)
                })
            },
            t.getAudioRelatedStats = function(e) {
                t.peerConnection.getStats().then(function(n) {
                    n.forEach(function(n) {
                        t.isSubscriber && "inbound-rtp" === n.type && ~n.id.indexOf("Audio") && e && e({
                            peerId: t.uid,
                            mediaType: "audio",
                            isAudioMute: t.isAudioMute,
                            frameDropped: n.packetsLost + "",
                            frameReceived: n.packetsReceived + "",
                            googJitterReceived: n.jitter + "",
                            bytesReceived: n.bytesReceived + "",
                            packetsReceived: n.packetsReceived + "",
                            packetsLost: n.packetsLost + ""
                        })
                    })
                })
            },
            t.getStatsRate = function(e) {
                t.getStats(function(t) {
                    t.forEach(function(e) {
                        "outbound-rtp" === e.type && "video" === e.mediaType && e.googFramesEncoded && (e.googFrameRateSent = ((e.googFramesEncoded - p) / 3).toString(), p = e.googFramesEncoded),
                        "inbound-rtp" === e.type && -1 != e.id.indexOf("55543") && (e.googFrameRateReceived && (e.googFrameRateReceived = ((e.googFrameReceived - m) / 3).toString(), m = e.googFrameReceived), e.googFrameRateDecoded && (e.googFrameRateDecoded = ((e.googFramesDecoded - f) / 3).toString(), f = e.googFramesDecoded))
                    }),
                    e(t)
                })
            },
            t.getStats = function(e, n) {
                n = (n = n || 500) > 500 ? 500 : n,
                t.lastTimeGetStats && Date.now() - t.lastTimeGetStats < n ? e && e(t.filterStatsCache, t.originStatsCache) : this._getStats(function(n, i) {
                    t.filterStatsCache = n,
                    t.originStatsCache = i,
                    t.lastTimeGetStats = Date.now(),
                    e && e(n, i)
                })
            },
            t._getStats = function(e) {
                var n = [];
                t.peerConnection.getStats().then(function(i) {
                    i.forEach(function(e) {
                        n.push(e),
                        "outbound-rtp" === e.type && "audio" === e.mediaType && (s.id = e.id, s.type = e.type, s.mediaType = e.mediaType, s.bytesSent = e.bytesSent ? e.bytesSent + "": "0", s.packetsSent = e.packetsSent ? e.packetsSent + "": "0"),
                        "outbound-rtp" === e.type && "video" === e.mediaType && (c.id = e.id, c.type = e.type, c.mediaType = e.mediaType, c.bytesSent = e.bytesSent ? e.bytesSent + "": "0", c.packetsSent = e.packetsSent ? e.packetsSent + "": "0", c.googPlisReceived = e.pliCount ? e.pliCount + "": "0", c.googNacksReceived = e.nackCount ? e.nackCount + "": "0", c.googFirsReceived = e.firCount ? e.firCount + "": "0", c.googFramesEncoded = e.framesEncoded ? e.framesEncoded + "": "0"),
                        "inbound-rtp" === e.type && -1 != e.id.indexOf("44444") && (d.id = e.id, d.type = e.type, d.mediaType = "audio", d.packetsReceived = e.packetsReceived ? e.packetsReceived + "": "0", d.bytesReceived = e.bytesReceived ? e.bytesReceived + "": "0", d.packetsLost = e.packetsLost ? e.packetsLost + "": "0", d.packetsReceived = e.packetsReceived ? e.packetsReceived + "": "0", d.googJitterReceived = e.jitter ? e.jitter + "": "0"),
                        "inbound-rtp" === e.type && -1 != e.id.indexOf("55543") && (u.id = e.id, u.type = e.type, u.mediaType = "video", u.packetsReceived = e.packetsReceived ? e.packetsReceived + "": "0", u.bytesReceived = e.bytesReceived ? e.bytesReceived + "": "0", u.packetsLost = e.packetsLost ? e.packetsLost + "": "0", u.googJitterBufferMs = e.jitter ? e.jitter + "": "0", u.googNacksSent = e.nackCount ? e.nackCount + "": "0", u.googPlisSent = e.pliCount ? e.pliCount + "": "0", u.googFirsSent = e.firCount ? e.firCount + "": "0"),
                        "track" !== e.type || -1 == e.id.indexOf("55543") && !~e.trackIdentifier.indexOf("v") && null != e.audioLevel || (u.googFrameWidthReceived = e.frameWidth ? e.frameWidth + "": "0", u.googFrameHeightReceived = e.frameHeight ? e.frameHeight + "": "0", u.googFrameReceived = e.framesReceived ? e.framesReceived + "": "0", u.googFramesDecoded = e.framesDecoded ? e.framesDecoded + "": "0"),
                        "track" !== e.type || -1 == e.id.indexOf("44444") && !~e.trackIdentifier.indexOf("a") && void 0 === e.audioLevel || (d.audioOutputLevel = e.audioLevel + "", s.audioInputLevel = e.audioLevel + ""),
                        "candidate-pair" === e.type && (0 == e.availableIncomingBitrate ? l.googAvailableSendBandwidth = e.availableOutgoingBitrate + "": l.googAvailableReceiveBandwidth = e.availableIncomingBitrate + "")
                    });
                    var o = [l, s, c, d, u];
                    o.push({
                        id: "time",
                        startTime: t.connectedTime,
                        timestamp: new Date
                    }),
                    e(o, n)
                }).
                catch(function(e) {
                    console.error(e)
                })
            },
            t.addTrack = function(e, n) {
                t.peerConnection.addTrack(e, n)
            },
            t.removeTrack = function(e, n) {
                var i = t.peerConnection.getSenders().find(function(t) {
                    return t.track == e
                });
                i.replaceTrack(null),
                t.peerConnection.removeTrack(i)
            },
            t.addStream = function(e) {
                window.navigator.userAgent.indexOf("Safari") > -1 && -1 === navigator.userAgent.indexOf("Chrome") ? e.getTracks().forEach(function(n) {
                    return t.peerConnection.addTrack(n, e)
                }) : t.peerConnection.addStream(e),
                t.markActionNeeded()
            },
            t.removeStream = function() {
                t.markActionNeeded()
            },
            t.close = function() {
                t.state = "closed",
                t.peerConnection.close()
            },
            t.markActionNeeded = function() {
                t.actionNeeded = !0,
                t.doLater(function() {
                    t.onstablestate()
                })
            },
            t.doLater = function(e) {
                window.setTimeout(e, 1)
            },
            t.onstablestate = function() {
                var n;
                if (t.actionNeeded) {
                    if ("new" === t.state || "established" === t.state) e.isSubscriber && (t.peerConnection.addTransceiver("audio", {
                        direction: "recvonly"
                    }), t.peerConnection.addTransceiver("video", {
                        direction: "recvonly"
                    })),
                    t.peerConnection.createOffer(t.mediaConstraints).then(function(n) {
                        if (n.sdp = a(n.sdp), e.isSubscriber || (n.sdp = n.sdp.replace(/a=extmap:4 urn:3gpp:video-orientation\r\n/g, "")), n.sdp !== t.prevOffer) return t.peerConnection.setLocalDescription(n),
                        t.state = "preparing-offer",
                        void t.markActionNeeded();
                        r.
                    default.debug("[" + t.clientId + "]Not sending a new offer")
                    }).
                    catch(function(e) {
                        r.
                    default.debug("[" + t.clientId + "]peer connection create offer failed ", e)
                    });
                    else if ("preparing-offer" === t.state) {
                        if (t.moreIceComing) return;
                        t.prevOffer = t.peerConnection.localDescription.sdp,
                        t.offerCandidates = t.prevOffer.match(/a=candidate.+\r\n/g) || [],
                        t.offerCandidates.length || (r.
                    default.warning("[".concat(t.clientId, "]No Ice Candidate generated")), Object(o.getParameter)("SHIM_CANDIDATE") ? (r.
                    default.debug("Shimming fake candidate"), t.prevOffer += "a=candidate:2243255435 1 udp 2122194687 192.168.0.1 30000 typ host generation 0 network-id 1\r\n") : r.
                    default.error("[".concat(t.clientId, "]None Ice Candidate not allowed"))),
                        t.prevOffer = t.prevOffer.replace(/a=candidate:.+typ\shost.+\r\n/g, "a=candidate:2243255435 1 udp 2122194687 192.168.0.1 30000 typ host generation 0 network-id 1\r\n"),
                        t.sendMessage("OFFER", t.prevOffer),
                        t.state = "offer-sent"
                    } else if ("offer-received" === t.state) t.peerConnection.createAnswer(function(e) {
                        if (t.peerConnection.setLocalDescription(e), t.state = "offer-received-preparing-answer", t.iceStarted) t.markActionNeeded();
                        else {
                            var n = new Date;
                            r.
                        default.debug("[" + t.clientId + "]" + n.getTime() + ": Starting ICE in responder"),
                            t.iceStarted = !0
                        }
                    },
                    function(e) {
                        r.
                    default.debug("[" + t.clientId + "]peer connection create answer failed ", e)
                    },
                    t.mediaConstraints);
                    else if ("offer-received-preparing-answer" === t.state) {
                        if (t.moreIceComing) return;
                        n = t.peerConnection.localDescription.sdp,
                        t.sendMessage("ANSWER", n),
                        t.state = "established"
                    } else t.error("Dazed and confused in state " + t.state + ", stopping here");
                    t.actionNeeded = !1
                }
            },
            t.sendOK = function() {
                t.sendMessage("OK")
            },
            t.sendMessage = function(e, n) {
                var i = {};
                i.messageType = e,
                i.sdp = n,
                "OFFER" === e ? (i.offererSessionId = t.sessionId, i.answererSessionId = t.otherSessionId, i.seq = t.sequenceNumber += 1, i.tiebreaker = Math.floor(429496723 * Math.random() + 1)) : (i.offererSessionId = t.incomingMessage.offererSessionId, i.answererSessionId = t.sessionId, i.seq = t.incomingMessage.seq),
                t.onsignalingmessage(JSON.stringify(i))
            },
            t._getSender = function(e) {
                if (t.peerConnection && t.peerConnection.getSenders) {
                    var n = t.peerConnection.getSenders().find(function(t) {
                        return t.track.kind == e
                    });
                    if (n) return n
                }
                return null
            },
            t.hasSender = function(e) {
                return !! t._getSender(e)
            },
            t.replaceTrack = function(e, n, i) {
                var o = t._getSender(e.kind);
                if (!o) return i("NO_SENDER_FOUND");
                try {
                    o.replaceTrack(e)
                } catch(e) {
                    return i && i(e)
                }
                setTimeout(function() {
                    return n && n()
                },
                50)
            },
            t.error = function(e) {
                throw "Error in RoapOnJsep: " + e
            },
            t.sessionId = t.roapSessionId += 1,
            t.sequenceNumber = 0,
            t.actionNeeded = !1,
            t.iceStarted = !1,
            t.moreIceComing = !0,
            t.iceCandidateCount = 0,
            t.onsignalingmessage = e.callback,
            t.peerConnection.ontrack = function(e) {
                t.onaddstream && t.onaddstream(e, "ontrack")
            },
            t.peerConnection.onremovestream = function(e) {
                t.onremovestream && t.onremovestream(e)
            },
            t.peerConnection.oniceconnectionstatechange = function(e) {
                "connected" === e.currentTarget.iceConnectionState && (t.connectedTime = new Date),
                t.oniceconnectionstatechange && t.oniceconnectionstatechange(e.currentTarget.iceConnectionState)
            },
            t.renegotiate = function() {
                void 0 !== t.prevOffer && t.peerConnection.createOffer().then(function(e) {
                    return e.sdp = e.sdp.replace(/a=recvonly\r\n/g, "a=inactive\r\n"),
                    e.sdp = i(e.sdp),
                    e.sdp = a(e.sdp),
                    t.peerConnection.setLocalDescription(e)
                }).then(function() {
                    t.onnegotiationneeded && t.onnegotiationneeded(t.peerConnection.localDescription.sdp)
                }).
                catch(function(e) {
                    console.log("createOffer error: ", e)
                })
            },
            t.peerConnection.onnegotiationneeded = t.renegotiate,
            t.onaddstream = null,
            t.onremovestream = null,
            t.state = "new",
            t.markActionNeeded(),
            t
        },
        N = function(e) {
            var t = {},
            n = (mozRTCPeerConnection, mozRTCSessionDescription),
            i = !1;
            t.uid = e.uid,
            t.isVideoMute = e.isVideoMute,
            t.isAudioMute = e.isAudioMute,
            t.isSubscriber = e.isSubscriber,
            t.clientId = e.clientId,
            t.filterStatsCache = [],
            t.originStatsCache = [],
            t.lastTimeGetStats = null,
            t.pc_config = {
                iceServers: []
            },
            e.iceServers instanceof Array ? e.iceServers.map(function(e) {
                0 === e.url.indexOf("stun:") && t.pc_config.iceServers.push({
                    url: e.url
                })
            }) : (e.stunServerUrl && (e.stunServerUrl instanceof Array ? e.stunServerUrl.map(function(e) {
                "string" == typeof e && "" !== e && t.pc_config.iceServers.push({
                    url: e
                })
            }) : "string" == typeof e.stunServerUrl && "" !== e.stunServerUrl && t.pc_config.iceServers.push({
                url: e.stunServerUrl
            })), e.turnServer && "string" == typeof e.turnServer.url && "" !== e.turnServer.url && (t.pc_config.iceServers.push({
                username: e.turnServer.username,
                credential: e.turnServer.credential,
                credentialType: "password",
                urls: "turn:" + e.turnServer.url + ":" + e.turnServer.udpport + "?transport=udp"
            }), "string" == typeof e.turnServer.tcpport && "" !== e.turnServer.tcpport && t.pc_config.iceServers.push({
                username: e.turnServer.username,
                credential: e.turnServer.credential,
                credentialType: "password",
                urls: "turn:" + e.turnServer.url + ":" + e.turnServer.tcpport + "?transport=tcp"
            }), !0 === e.turnServer.forceturn && (t.pc_config.iceTransportPolicy = "relay"))),
            void 0 === e.audio && (e.audio = !0),
            void 0 === e.video && (e.video = !0),
            t.mediaConstraints = {
                offerToReceiveAudio: e.audio,
                offerToReceiveVideo: e.video,
                mozDontOfferDataChannel: !0
            },
            t.roapSessionId = 103,
            t.peerConnection = new h.RTCPeerConnection(t.pc_config),
            r.
        default.debug("[" + t.clientId + ']safari Created RTCPeerConnnection with config "' + JSON.stringify(t.pc_config) + '".'),
            t.iceCandidateTimer = setTimeout(function() {
                t.iceCandidateTimer = null,
                r.
            default.debug("[".concat(t.clientId, "]Candidates collected: ").concat(t.iceCandidateCount)),
                t.moreIceComing && (t.moreIceComing = !1, t.markActionNeeded())
            },
            Object(o.getParameter)("CANDIDATE_TIMEOUT")),
            t.peerConnection.onicecandidate = function(e) {
                var n, i, o, a;
                i = (n = t.peerConnection.localDescription.sdp).match(/a=candidate:.+typ\ssrflx.+\r\n/),
                o = n.match(/a=candidate:.+typ\shost.+\r\n/),
                a = n.match(/a=candidate:.+typ\srelay.+\r\n/),
                null === i && null === o && null === a || void 0 !== t.ice || !t.iceCandidateTimer || (r.
            default.debug("[" + t.clientId + "]srflx candidate : " + i + " relay candidate: " + a + " host candidate : " + o), clearTimeout(t.iceCandidateTimer), t.iceCandidateTimer = null, t.ice = 0, t.moreIceComing = !1, t.markActionNeeded()),
                t.iceCandidateCount = t.iceCandidateCount + 1
            },
            t.checkMLineReverseInSDP = function(e) {
                return ! (!~e.indexOf("m=audio") || !~e.indexOf("m=video")) && e.indexOf("m=audio") > e.indexOf("m=video")
            },
            t.reverseMLineInSDP = function(e) {
                var t = e.split("m=audio"),
                n = t[1].split("m=video"),
                i = "m=video" + n[1],
                o = "m=audio" + n[0];
                return e = t[0] + i + o
            },
            t.processSignalingMessage = function(e) {
                var i, o = JSON.parse(e);
                t.incomingMessage = o,
                "new" === t.state ? "OFFER" === o.messageType ? (o.sdp = l(o.sdp), i = {
                    sdp: o.sdp,
                    type: "offer"
                },
                t.peerConnection.setRemoteDescription(new n(i),
                function() {
                    r.
                default.debug("[" + t.clientId + "]setRemoteDescription succeeded")
                },
                function(e) {
                    r.
                default.info("[" + t.clientId + "]setRemoteDescription failed: " + e.name)
                }), t.state = "offer-received", t.markActionNeeded()) : t.error("Illegal message for this state: " + o.messageType + " in state " + t.state) : "offer-sent" === t.state ? "ANSWER" === o.messageType ? (o.sdp = l(o.sdp), o.sdp = o.sdp.replace(/ generation 0/g, ""), o.sdp = o.sdp.replace(/ udp /g, " UDP "), -1 !== o.sdp.indexOf("a=group:BUNDLE") ? (o.sdp = o.sdp.replace(/a=group:BUNDLE audio video/, "a=group:BUNDLE sdparta_0 sdparta_1"), o.sdp = o.sdp.replace(/a=mid:audio/, "a=mid:sdparta_0"), o.sdp = o.sdp.replace(/a=mid:video/, "a=mid:sdparta_1")) : (o.sdp = o.sdp.replace(/a=mid:audio/, "a=mid:sdparta_0"), o.sdp = o.sdp.replace(/a=mid:video/, "a=mid:sdparta_0")), i = {
                    sdp: o.sdp,
                    type: "answer"
                },
                t.peerConnection.setRemoteDescription(new n(i),
                function() {
                    r.
                default.debug("[" + t.clientId + "]setRemoteDescription succeeded")
                },
                function(e) {
                    r.
                default.info("[" + t.clientId + "]setRemoteDescription failed: " + e)
                }), t.sendOK(), t.state = "established") : "pr-answer" === o.messageType ? (i = {
                    sdp: o.sdp,
                    type: "pr-answer"
                },
                t.peerConnection.setRemoteDescription(new n(i),
                function() {
                    r.
                default.debug("[" + t.clientId + "]setRemoteDescription succeeded")
                },
                function(e) {
                    r.
                default.info("[" + t.clientId + "]setRemoteDescription failed: " + e.name)
                })) : "offer" === o.messageType ? t.error("Not written yet") : t.error("Illegal message for this state: " + o.messageType + " in state " + t.state) : "established" === t.state && ("OFFER" === o.messageType ? (i = {
                    sdp: o.sdp,
                    type: "offer"
                },
                t.peerConnection.setRemoteDescription(new n(i),
                function() {
                    r.
                default.debug("[" + t.clientId + "]setRemoteDescription succeeded")
                },
                function(e) {
                    r.
                default.info("[" + t.clientId + "]setRemoteDescription failed: " + e.name)
                }), t.state = "offer-received", t.markActionNeeded()) : t.error("Illegal message for this state: " + o.messageType + " in state " + t.state))
            };
            var a = {
                id: "",
                type: "",
                mediaType: "opus",
                googCodecName: "opus",
                aecDivergentFilterFraction: "0",
                audioInputLevel: "0",
                bytesSent: "0",
                packetsSent: "0",
                googEchoCancellationReturnLoss: "0",
                googEchoCancellationReturnLossEnhancement: "0"
            },
            s = {
                id: "",
                type: "",
                mediaType: "",
                googCodecName: "h264" === e.codec ? "H264": "VP8",
                bytesSent: "0",
                packetsLost: "0",
                packetsSent: "0",
                googAdaptationChanges: "0",
                googAvgEncodeMs: "0",
                googEncodeUsagePercent: "0",
                googFirsReceived: "0",
                googFrameHeightSent: "0",
                googFrameHeightInput: "0",
                googFrameRateInput: "0",
                googFrameRateSent: "0",
                googFrameWidthSent: "0",
                googFrameWidthInput: "0",
                googNacksReceived: "0",
                googPlisReceived: "0",
                googRtt: "0"
            },
            c = {
                id: "",
                type: "",
                mediaType: "",
                audioOutputLevel: "0",
                bytesReceived: "0",
                packetsLost: "0",
                packetsReceived: "0",
                googAccelerateRate: "0",
                googCurrentDelayMs: "0",
                googDecodingCNG: "0",
                googDecodingCTN: "0",
                googDecodingCTSG: "0",
                googDecodingNormal: "0",
                googDecodingPLC: "0",
                googDecodingPLCCNG: "0",
                googExpandRate: "0",
                googJitterBufferMs: "0",
                googJitterReceived: "0",
                googPreemptiveExpandRate: "0",
                googPreferredJitterBufferMs: "0",
                googSecondaryDecodedRate: "0",
                googSpeechExpandRate: "0"
            },
            d = {
                id: "",
                type: "",
                mediaType: "",
                googTargetDelayMs: "0",
                packetsLost: "0",
                googDecodeMs: "0",
                googMaxDecodeMs: "0",
                googRenderDelayMs: "0",
                googFrameWidthReceived: "0",
                googFrameHeightReceived: "0",
                googFrameRateReceived: "0",
                googFrameRateDecoded: "0",
                googFrameRateOutput: "0",
                googJitterBufferMs: "0",
                googCurrentDelayMs: "0",
                googMinPlayoutDelayMs: "0",
                googNacksSent: "0",
                googPlisSent: "0",
                googFirsSent: "0",
                bytesReceived: "0",
                packetsReceived: "0",
                googFramesDecoded: "0"
            },
            u = 0;
            t.getVideoRelatedStats = function(e) {
                t.peerConnection.getStats().then(function(n) {
                    var i = !0,
                    o = !1,
                    r = void 0;
                    try {
                        for (var a, s = n.values()[Symbol.iterator](); ! (i = (a = s.next()).done); i = !0) {
                            var c = a.value;
                            if (t.isSubscriber) {
                                if (("inbound-rtp" === c.type || "inboundrtp" === c.type) && "video" === c.mediaType) {
                                    if (!t.lastReport) return void(t.lastReport = c);
                                    e && e({
                                        browser: "firefox",
                                        mediaType: "video",
                                        peerId: t.uid,
                                        isVideoMute: t.isVideoMute,
                                        frameRateReceived: c.framerateMean + "",
                                        frameRateDecoded: c.framesDecoded - t.lastReport.framesDecoded + "",
                                        bytesReceived: c.bytesReceived + "",
                                        packetsReceived: c.packetsReceived + "",
                                        packetsLost: c.packetsLost + ""
                                    }),
                                    t.lastReport = c
                                }
                            } else if (("outbound-rtp" === c.type || "outboundrtp" === c.type) && "video" === c.mediaType) {
                                if (!t.lastReport) return void(t.lastReport = c);
                                e && e({
                                    mediaType: "video",
                                    isVideoMute: t.isVideoMute,
                                    frameRateInput: c.framerateMean + "",
                                    frameRateSent: c.framesEncoded - t.lastReport.framesEncoded + ""
                                }),
                                t.lastReport = c
                            }
                        }
                    } catch(e) {
                        o = !0,
                        r = e
                    } finally {
                        try {
                            i || null == s.
                            return || s.
                            return ()
                        } finally {
                            if (o) throw r
                        }
                    }
                })
            },
            t.getAudioRelatedStats = function(e) {
                t.peerConnection.getStats().then(function(n) {
                    var i = !0,
                    o = !1,
                    r = void 0;
                    try {
                        for (var a, s = n.values()[Symbol.iterator](); ! (i = (a = s.next()).done); i = !0) {
                            var c = a.value;
                            t.isSubscriber && ("inbound-rtp" !== c.type && "inboundrtp" !== c.type || "audio" !== c.mediaType || e && e({
                                browser: "firefox",
                                mediaType: "audio",
                                peerId: t.uid,
                                isAudioMute: t.isAudioMute,
                                frameDropped: c.packetsLost + "",
                                frameReceived: c.packetsReceived + "",
                                googJitterReceived: c.jitter + "",
                                bytesReceived: c.bytesReceived + "",
                                packetsReceived: c.packetsReceived + "",
                                packetsLost: c.packetsLost + ""
                            }))
                        }
                    } catch(e) {
                        o = !0,
                        r = e
                    } finally {
                        try {
                            i || null == s.
                            return || s.
                            return ()
                        } finally {
                            if (o) throw r
                        }
                    }
                })
            },
            t.getStatsRate = function(e) {
                t.getStats(function(t) {
                    t.forEach(function(e) {
                        "inbound-rtp" !== e.type && "inboundrtp" !== e.type || "video" !== e.mediaType || e.googFrameRateDecoded && (e.googFrameRateDecoded = ((e.googFramesDecoded - u) / 3).toString(), u = e.googFramesDecoded)
                    }),
                    e(t)
                })
            },
            t.getStats = function(e, n) {
                n = (n = n || 500) > 500 ? 500 : n,
                t.lastTimeGetStats && Date.now() - t.lastTimeGetStats < n ? e && e(t.filterStatsCache, t.originStatsCache) : this._getStats(function(n, i) {
                    t.filterStatsCache = n,
                    t.originStatsCache = i,
                    t.lastTimeGetStats = Date.now(),
                    e && e(n, i)
                })
            },
            t._getStats = function(e) {
                t.peerConnection.getStats().then(function(n) {
                    var i = [],
                    o = !0,
                    r = !1,
                    u = void 0;
                    try {
                        for (var l, p = n.values()[Symbol.iterator](); ! (o = (l = p.next()).done); o = !0) {
                            var f = l.value;
                            i.push(f),
                            "outbound-rtp" !== f.type && "outboundrtp" !== f.type || "video" !== f.mediaType || -1 !== f.id.indexOf("rtcp") || (s.id = f.id, s.type = f.type, s.mediaType = f.mediaType, s.bytesSent = f.bytesSent ? f.bytesSent + "": "0", s.packetsSent = f.packetsSent ? f.packetsSent + "": "0", s.googPlisReceived = f.pliCount ? f.pliCount + "": "0", s.googNacksReceived = f.nackCount ? f.nackCount + "": "0", s.googFirsReceived = f.firCount ? f.firCount + "": "0", s.googFrameRateSent = f.framerateMean ? f.framerateMean + "": "0"),
                            "outbound-rtp" !== f.type && "outboundrtp" !== f.type || "audio" !== f.mediaType || -1 !== f.id.indexOf("rtcp") || (a.id = f.id, a.type = f.type, a.mediaType = f.mediaType, a.bytesSent = f.bytesSent ? f.bytesSent + "": "0", a.packetsSent = f.packetsSent ? f.packetsSent + "": "0"),
                            "inbound-rtp" !== f.type && "inboundrtp" !== f.type || "audio" !== f.mediaType || f.isRemote || -1 !== f.id.indexOf("rtcp") || (c.id = f.id, c.type = f.type, c.mediaType = f.mediaType, c.bytesReceived = f.bytesReceived ? f.bytesReceived + "": "0", c.packetsLost = f.packetsLost ? f.packetsLost + "": "0", c.packetsReceived = f.packetsReceived ? f.packetsReceived + "": "0", c.googJitterReceived = f.jitter ? f.jitter + "": "0"),
                            "inbound-rtp" !== f.type && "inboundrtp" !== f.type || "video" !== f.mediaType || f.isRemote || -1 !== f.id.indexOf("rtcp") || (d.id = f.id, d.type = f.type, d.mediaType = f.mediaType, d.bytesReceived = f.bytesReceived ? f.bytesReceived + "": "0", d.googFrameRateReceived = f.framerateMean ? f.framerateMean + "": "0", d.googFramesDecoded = f.framesDecoded ? f.framesDecoded + "": "0", d.packetsLost = f.packetsLost ? f.packetsLost + "": "0", d.packetsReceived = f.packetsReceived ? f.packetsReceived + "": "0", d.googJitterBufferMs = f.jitter ? f.jitter + "": "0", d.googNacksSent = f.nackCount ? f.nackCount + "": "0", d.googPlisSent = f.pliCount ? f.pliCount + "": "0", d.googFirsSent = f.firCount ? f.firCount + "": "0"),
                            -1 !== f.id.indexOf("outbound_rtcp_video") && (s.packetsLost = f.packetsLost ? f.packetsLost + "": "0")
                        }
                    } catch(e) {
                        r = !0,
                        u = e
                    } finally {
                        try {
                            o || null == p.
                            return || p.
                            return ()
                        } finally {
                            if (r) throw u
                        }
                    }
                    var m = [s, a, c, d];
                    m.push({
                        id: "time",
                        startTime: t.connectedTime,
                        timestamp: new Date
                    }),
                    e(m, i)
                },
                function(e) {
                    r.
                default.error("[" + t.clientId + "]" + e)
                })
            },
            t.addStream = function(e) {
                i = !0,
                t.peerConnection.addStream(e),
                t.markActionNeeded()
            },
            t.removeStream = function() {
                t.markActionNeeded()
            },
            t.close = function() {
                t.state = "closed",
                t.peerConnection.close()
            },
            t.markActionNeeded = function() {
                t.actionNeeded = !0,
                t.doLater(function() {
                    t.onstablestate()
                })
            },
            t.doLater = function(e) {
                window.setTimeout(e, 1)
            },
            t.onstablestate = function() {
                if (t.actionNeeded) {
                    if ("new" === t.state || "established" === t.state) i && (t.mediaConstraints = void 0),
                    t.peerConnection.createOffer(function(e) {
                        if (e.sdp = l(e.sdp), e.sdp = e.sdp.replace(/a=extmap:1 http:\/\/www.webrtc.org\/experiments\/rtp-hdrext\/abs-send-time/, "a=extmap:3 http://www.webrtc.org/experiments/rtp-hdrext/abs-send-time"), e.sdp !== t.prevOffer) return t.peerConnection.setLocalDescription(e),
                        t.state = "preparing-offer",
                        void t.markActionNeeded();
                        r.
                    default.debug("[" + t.clientId + "]Not sending a new offer")
                    },
                    function(e) {
                        r.
                    default.debug("[" + t.clientId + "]Ups! create offer failed ", e)
                    },
                    t.mediaConstraints);
                    else if ("preparing-offer" === t.state) {
                        if (t.moreIceComing) return;
                        t.prevOffer = t.peerConnection.localDescription.sdp,
                        t.offerCandidates = t.prevOffer.match(/a=candidate.+\r\n/g) || [],
                        t.offerCandidates.length || (r.
                    default.warning("[".concat(t.clientId, "]No Ice Candidate generated")), Object(o.getParameter)("SHIM_CANDIDATE") ? (r.
                    default.debug("Shimming fake candidate"), t.prevOffer += "a=candidate:2243255435 1 udp 2122194687 192.168.0.1 30000 typ host generation 0 network-id 1\r\n") : r.
                    default.error("[".concat(t.clientId, "]None Ice Candidate not allowed"))),
                        t.prevOffer = t.prevOffer.replace(/a=candidate:.+typ\shost.+\r\n/g, "a=candidate:2243255435 1 udp 2122194687 192.168.0.1 30000 typ host generation 0 network-id 1\r\n"),
                        t.sendMessage("OFFER", t.prevOffer),
                        t.state = "offer-sent"
                    } else if ("offer-received" === t.state) t.peerConnection.createAnswer(function(e) {
                        if (t.peerConnection.setLocalDescription(e), t.state = "offer-received-preparing-answer", t.iceStarted) t.markActionNeeded();
                        else {
                            var n = new Date;
                            r.
                        default.debug("[" + t.clientId + "]" + n.getTime() + ": Starting ICE in responder"),
                            t.iceStarted = !0
                        }
                    },
                    function() {
                        r.
                    default.debug("[" + t.clientId + "]Ups! Something went wrong")
                    });
                    else if ("offer-received-preparing-answer" === t.state) {
                        if (t.moreIceComing) return;
                        var e = t.peerConnection.localDescription.sdp;
                        t.sendMessage("ANSWER", e),
                        t.state = "established"
                    } else t.error("Dazed and confused in state " + t.state + ", stopping here");
                    t.actionNeeded = !1
                }
            },
            t.sendOK = function() {
                t.sendMessage("OK")
            },
            t.sendMessage = function(e, n) {
                var i = {};
                i.messageType = e,
                i.sdp = n,
                "OFFER" === e ? (i.offererSessionId = t.sessionId, i.answererSessionId = t.otherSessionId, i.seq = t.sequenceNumber += 1, i.tiebreaker = Math.floor(429496723 * Math.random() + 1)) : (i.offererSessionId = t.incomingMessage.offererSessionId, i.answererSessionId = t.sessionId, i.seq = t.incomingMessage.seq),
                t.onsignalingmessage(JSON.stringify(i))
            },
            t._getSender = function(e) {
                if (t.peerConnection && t.peerConnection.getSenders) {
                    var n = t.peerConnection.getSenders().find(function(t) {
                        return t.track.kind == e
                    });
                    if (n) return n
                }
                return null
            },
            t.hasSender = function(e) {
                return !! t._getSender(e)
            },
            t.replaceTrack = function(e, n, i) {
                var o = t._getSender(e.kind);
                if (!o) return i("NO_SENDER_FOUND");
                try {
                    o.replaceTrack(e)
                } catch(e) {
                    return i && i(e)
                }
                setTimeout(function() {
                    return n && n()
                },
                50)
            },
            t.error = function(e) {
                throw "Error in RoapOnJsep: " + e
            },
            t.sessionId = t.roapSessionId += 1,
            t.sequenceNumber = 0,
            t.actionNeeded = !1,
            t.iceStarted = !1,
            t.moreIceComing = !0,
            t.iceCandidateCount = 0,
            t.onsignalingmessage = e.callback,
            t.peerConnection.ontrack = function(e) {
                t.onaddstream && t.onaddstream(e, "ontrack")
            },
            t.peerConnection.onremovestream = function(e) {
                t.onremovestream && t.onremovestream(e)
            },
            t.peerConnection.oniceconnectionstatechange = function(e) {
                "connected" === e.currentTarget.iceConnectionState && (t.connectedTime = new Date),
                t.oniceconnectionstatechange && t.oniceconnectionstatechange(e.currentTarget.iceConnectionState)
            };
            var l = function(t) {
                var n;
                if (e.video && e.maxVideoBW && (null == (n = t.match(/m=video.*\r\n/)) && (n = t.match(/m=video.*\n/)), n && n.length > 0)) {
                    var i = n[0] + "b=TIAS:" + 1e3 * e.maxVideoBW + "\r\n";
                    t = t.replace(n[0], i)
                }
                return e.audio && e.maxAudioBW && (null == (n = t.match(/m=audio.*\r\n/)) && (n = t.match(/m=audio.*\n/)), n && n.length > 0) && (i = n[0] + "b=TIAS:" + 1e3 * e.maxAudioBW + "\r\n", t = t.replace(n[0], i)),
                t
            };
            return t.onaddstream = null,
            t.onremovestream = null,
            t.state = "new",
            t.markActionNeeded(),
            t
        },
        D = n(13),
        k = n.n(D),
        M = null,
        L = function() {
            try {
                M = window.require("electron")
            } catch(e) {}
            return M
        },
        P = function(e) {
            var t = a.b.reportApiInvoke(null, {
                callback: e,
                name: "getScreenSources",
                options: arguments,
                tag: "tracer"
            }),
            n = L();
            if (!n) return t && t("electron is null");
            n.desktopCapturer.getSources({
                types: ["window", "screen"]
            },
            function(e, n) {
                if (e) return t && t(e);
                t && t(null, n)
            })
        },
        x = function(e, t, n) {
            var i = t.width;
            t = {
                audio: !1,
                video: {
                    mandatory: {
                        chromeMediaSource: "desktop",
                        chromeMediaSourceId: e,
                        maxHeight: t.height,
                        maxWidth: i,
                        maxFrameRate: t.frameRate && t.frameRate.max,
                        minFrameRate: t.frameRate && t.frameRate.min
                    }
                }
            };
            navigator.webkitGetUserMedia(t,
            function(e) {
                n && n(null, e)
            },
            function(e) {
                n && n(e)
            })
        },
        V = function() {
            return !! L()
        },
        U = P,
        F = x,
        B = function(e, t) {
            P(function(n, i) {
                if (n) return t && t(n); !
                function(e, t) {
                    var n = document.createElement("div");
                    n.innerText = "share screen",
                    n.setAttribute("style", "text-align: center; height: 25px; line-height: 25px; border-radius: 4px 4px 0 0; background: #D4D2D4; border-bottom:  solid 1px #B9B8B9;");
                    var i = document.createElement("div");
                    i.setAttribute("style", "width: 100%; height: 500px; padding: 15px 25px ; box-sizing: border-box;");
                    var o = document.createElement("div");
                    o.innerText = "Agora Web Screensharing wants to share the contents of your screen with webdemo.agorabeckon.com. Choose what you'd like to share.",
                    o.setAttribute("style", "height: 12%;");
                    var r = document.createElement("div");
                    r.setAttribute("style", "width: 100%; height: 80%; background: #FFF; border:  solid 1px #CBCBCB; display: flex; flex-wrap: wrap; justify-content: space-around; overflow-y: scroll; padding: 0 15px; box-sizing: border-box;");
                    var a = document.createElement("div");
                    a.setAttribute("style", "text-align: right; padding: 16px 0;");
                    var s = document.createElement("button");
                    s.innerHTML = "cancel",
                    s.setAttribute("style", "width: 85px;"),
                    s.onclick = function() {
                        document.body.removeChild(c),
                        t && t("NotAllowedError")
                    },
                    a.appendChild(s),
                    i.appendChild(o),
                    i.appendChild(r),
                    i.appendChild(a);
                    var c = document.createElement("div");
                    c.setAttribute("style", "position: absolute; z-index: 99999999; top: 50%; left: 50%; width: 620px; height: 525px; background: #ECECEC; border-radius: 4px; -webkit-transform: translate(-50%,-50%); transform: translate(-50%,-50%);"),
                    c.appendChild(n),
                    c.appendChild(i),
                    document.body.appendChild(c),
                    e.map(function(e) {
                        if (e.id) {
                            var n = document.createElement("div");
                            n.setAttribute("style", "width: 30%; height: 160px; padding: 20px 0; text-align: center;box-sizing: content-box;"),
                            n.innerHTML = '<div style="height: 120px; display: table-cell; vertical-align: middle;"><img style="width: 100%; background: #333333; box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.2);" src=' + e.thumbnail.toDataURL() + ' /></div><span style="\theight: 40px; line-height: 40px; display: inline-block; width: 70%; word-break: keep-all; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">' + e.name + "</span>",
                            n.onclick = function() {
                                document.body.removeChild(c),
                                t && t(null, e.id)
                            },
                            r.appendChild(n)
                        }
                    })
                } (i,
                function(n, i) {
                    if (n) return t && t(n);
                    x(i, e, t)
                })
            })
        },
        j = 103,
        W = function(e) {
            var t = {};
            if (t.clientId = e.clientId, e.session_id = j += 1, "undefined" == typeof window || !window.navigator) throw r.
        default.error("[" + t.streamId + "][" + t.clientId + "]Publish/subscribe video/audio streams not supported yet"),
            new Error("NON_BROWSER_ENV_DETECTED");
            return null !== window.navigator.userAgent.match("Firefox") ? (t.browser = "mozilla", t = N(e)) : "iOS" === f.getBrowserOS() || f.isSafari() ? (r.
        default.debug("[" + t.streamId + "][" + t.clientId + "]Safari"), (t = w(e)).browser = "safari") : ~window.navigator.userAgent.indexOf("Edge") ? t = new k.a(e) : (t = O(e)).browser = "chrome-stable",
            t
        },
        H = function(e, t, n) {
            var i = {};
            i.config = e,
            i.streamId = e.streamId,
            delete e.streamId,
            navigator.getMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
            var o = 0,
            a = 1,
            s = !1,
            c = null,
            d = function(e) {
                if (o++, c) if (c === e) r.
            default.debug("Using Video Source/ Audio Source");
                else {
                    var n = c.getVideoTracks()[0],
                    i = c.getAudioTracks()[0],
                    d = e.getVideoTracks()[0],
                    u = e.getAudioTracks()[0];
                    d && (n && c.removeTrack(n), c.addTrack(d)),
                    u && (i && c.removeTrack(i), c.addTrack(u))
                } else c = e;
                o !== a || s || (s = !0, setTimeout(function() {
                    t(c)
                },
                0))
            },
            u = function(e) {
                r.
            default.error("Failed to GetUserMedia", e.name, e.code, e.message, e),
                o++,
                s || (s = !0, setTimeout(function() {
                    n && n(e)
                },
                0))
            },
            l = function() {
                var t = {
                    video: e.video,
                    audio: e.audio
                };
                if (r.
            default.debug("GetUserMedia", JSON.stringify(t)), navigator.mediaDevices && navigator.mediaDevices.getUserMedia) navigator.mediaDevices.getUserMedia(t).then(d).
                catch(u);
                else if ("undefined" != typeof navigator && navigator.getMedia) navigator.getMedia(e, d, u);
                else {
                    var o = {
                        name: "MEDIA_NOT_SUPPORT",
                        message: "Video/audio streams not supported yet"
                    };
                    r.
                default.error("[" + i.streamId + "]" + o.message),
                    n && n(o)
                }
            };
            if ((e.videoSource || e.audioSource) && (c = new MediaStream, e.videoSource && c.addTrack(e.videoSource), e.audioSource && c.addTrack(e.audioSource)), e.video || e.audio || e.screen) if (e.screen) {
                if (V()) return e.screen.sourceId ? F(e.screen.sourceId, e.screen,
                function(e, t) {
                    e ? u(e) : d(t)
                }) : B(e.screen,
                function(e, t) {
                    e ? u(e) : d(t)
                });
                if (f.isFireFox()) {
                    r.
                default.debug("[" + i.streamId + "]Screen access requested");
                    if (!~ ["screen", "window", "application"].indexOf(e.screen.mediaSource)) return n && n("Invalid mediaSource, mediaSource should be one of [screen, window, application]");
                    navigator.getMedia({
                        video: e.screen
                    },
                    function(t) {
                        e.audio && (a++, l()),
                        d(t)
                    },
                    u)
                } else if (f.isChrome() && e.screen.extensionId) {
                    if (window.navigator.appVersion.match(/Chrome\/([\w\W]*?)\./)[1] < 34) return void n({
                        code: "This browser does not support screen sharing"
                    });
                    r.
                default.debug("[" + i.streamId + "]Screen access on chrome stable, looking for extension");
                    try {
                        chrome.runtime.sendMessage(e.screen.extensionId, {
                            getStream: !0
                        },
                        function(t) {
                            if (void 0 === t) {
                                r.
                            default.error("[" + i.streamId + "]No response from Chrome Plugin. Plugin not installed properly");
                                u({
                                    name: "PluginNotInstalledProperly",
                                    message: "No response from Chrome Plugin. Plugin not installed properly."
                                })
                            } else e.screen.mandatory.chromeMediaSourceId = t.streamId,
                            navigator.getMedia({
                                video: e.screen
                            },
                            function(t) {
                                e.audio && (a++, l()),
                                d(t)
                            },
                            u)
                        })
                    } catch(e) {
                        r.
                    default.debug("[" + i.streamId + "]AgoraRTC screensharing plugin is not accessible");
                        return void n({
                            code: "no_plugin_present"
                        })
                    }
                } else {
                    if (window.navigator.mediaDevices.getDisplayMedia) {
                        var p = {};
                        return "number" == typeof e.screen.width && "number" == typeof e.screen.height ? p.video = {
                            width: {
                                ideal: e.screen.width
                            },
                            height: {
                                ideal: e.screen.height
                            }
                        }: p.video = {
                            width: e.screen.width,
                            height: e.screen.height
                        },
                        e.screen.frameRate && e.screen.frameRate.min ? p.video.frameRate = {
                            ideal: e.screen.frameRate.max,
                            max: e.screen.frameRate.max
                        }: p.video.frameRate = e.screen.frameRate,
                        r.
                    default.debug("use getDisplayMedia, constraints:", p),
                        window.navigator.mediaDevices.getDisplayMedia(p).then(function(t) {
                            e.audio && (a++, l()),
                            d(t)
                        }).
                        catch(u)
                    }
                    r.
                default.error("[" + i.streamId + "]This browser does not support screenSharing")
                }
            } else l();
            else d(c)
        },
        G = n(7),
        J = function(e, t, n) {
            if (["End2EndDelay", "TransportDelay", "PacketLossRate", "RecvLevel", "RecvBitrate", "CodecType", "MuteState", "TotalFreezeTime", "TotalPlayDuration", "RecordingLevel", "SendLevel", "SamplingRate", "SendBitrate", "CodecType", "MuteState", "End2EndDelay", "TransportDelay", "PacketLossRate", "RecvBitrate", "RecvResolutionWidth", "RecvResolutionHeight", "RenderResolutionHeight", "RenderResolutionWidth", "RenderFrameRate", "TotalFreezeTime", "TotalPlayDuration", "TargetSendBitrate", "SendFrameRate", "SendFrameRate", "SendBitrate", "SendResolutionWidth", "SendResolutionHeight", "CaptureResolutionHeight", "CaptureResolutionWidth", "EncodeDelay", "MuteState", "TotalFreezeTime", "TotalDuration", "CaptureFrameRate", "RTT", "OutgoingAvailableBandwidth", "Duration", "UserCount", "SendBytes", "RecvBytes", "SendBitrate", "RecvBitrate", "accessDelay", "audioSendBytes", "audioSendPackets", "videoSendBytes", "videoSendPackets", "videoSendPacketsLost", "videoSendFrameRate", "audioSendPacketsLost", "videoSendResolutionWidth", "videoSendResolutionHeight", "accessDelay", "audioReceiveBytes", "audioReceivePackets", "audioReceivePacketsLost", "videoReceiveBytes", "videoReceivePackets", "videoReceivePacketsLost", "videoReceiveFrameRate", "videoReceiveDecodeFrameRate", "videoReceiveResolutionWidth", "videoReceiveResolutionHeight", "endToEndDelay", "videoReceiveDelay", "audioReceiveDelay", "FirstFrameTime", "VideoFreezeRate", "AudioFreezeRate", "RenderResolutionWidth", "RenderResolutionHeight"].indexOf(t) > -1 && ("string" == typeof n || isFinite(n))) return e[t] = "" + n
        },
        Y = new
        function() {
            var e = s();
            return e.devicesHistory = {},
            e.states = {
                UNINIT: "UNINIT",
                INITING: "INITING",
                INITED: "INITED"
            },
            e.state = e.states.UNINIT,
            e.deviceStates = {
                ACTIVE: "ACTIVE",
                INACTIVE: "INACTIVE"
            },
            e.deviceReloadTimer = null,
            e._init = function(t, n) {
                e.state = e.states.INITING,
                e.devicesHistory = {},
                e._reloadDevicesInfo(function() {
                    e.state = e.states.INITED,
                    e.dispatchEvent({
                        type: "inited"
                    }),
                    t && t()
                },
                function(t) {
                    r.
                default.warning("Device Detection functionality cannot start properly."),
                    e.state = e.states.UNINIT,
                    n && n(t)
                })
            },
            e._enumerateDevices = function(e, t) {
                if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) return r.
            default.warning("enumerateDevices() not supported."),
                t && t("enumerateDevices() not supported");
                navigator.mediaDevices.enumerateDevices().then(function(t) {
                    e && setTimeout(function() {
                        e(t)
                    },
                    0)
                }).
                catch(function(e) {
                    t && t(e)
                })
            },
            e._reloadDevicesInfo = function(t, n) {
                var i = [];
                e._enumerateDevices(function(n) {
                    var o = Date.now();
                    for (var a in n.forEach(function(t) {
                        var n = e.devicesHistory[t.deviceId];
                        if ((n ? n.state: e.deviceStates.INACTIVE) != e.deviceStates.ACTIVE) {
                            var r = n || {
                                initAt: o
                            };
                            r.device = t,
                            r.state = e.deviceStates.ACTIVE,
                            i.push(r),
                            e.devicesHistory[t.deviceId] = r
                        }
                        e.devicesHistory[t.deviceId].lastReloadAt = o
                    }), e.devicesHistory) {
                        var s = e.devicesHistory[a];
                        s && s.state == e.deviceStates.ACTIVE && s.lastReloadAt !== o && (s.state = e.deviceStates.INACTIVE, i.push(s)),
                        s.lastReloadAt = o
                    }
                    e.state == e.states.INITED && i.forEach(function(t) {
                        var n = S()({},
                        t);
                        switch (t.device.kind) {
                        case "audioinput":
                            n.type = "recordingDeviceChanged";
                            break;
                        case "audiooutput":
                            n.type = "playoutDeviceChanged";
                            break;
                        case "videoinput":
                            n.type = "cameraChanged";
                            break;
                        default:
                            r.
                        default.warning("Unknown device change", n),
                            n.type = "unknownDeviceChanged"
                        }
                        e.dispatchEvent(n)
                    }),
                    t && t()
                },
                n)
            },
            e.getDeviceById = function(t, n, i) {
                e.getDevices(function(e) {
                    for (var o = 0; o < e.length; o++) {
                        var r = e[o];
                        if (r && r.deviceId === t) return n && n(r)
                    }
                    return i && i()
                })
            },
            e.searchDeviceNameById = function(t) {
                var n = e.devicesHistory[t];
                return n ? n.device.label || n.device.deviceId: null
            },
            e.getDevices = function(t, n) {
                e._enumerateDevices(t,
                function(e) {
                    n && n(e.name + ": " + e.message)
                })
            },
            e.getVideoCameraIdByLabel = function(t, n, i) {
                e.getCameras(function(e) {
                    var o = !0,
                    r = !1,
                    a = void 0;
                    try {
                        for (var s, c = e[Symbol.iterator](); ! (o = (s = c.next()).done); o = !0) {
                            var d = s.value;
                            if (d.label === t) return n && n(d.deviceId)
                        }
                    } catch(e) {
                        r = !0,
                        a = e
                    } finally {
                        try {
                            o || null == c.
                            return || c.
                            return ()
                        } finally {
                            if (r) throw a
                        }
                    }
                    return i && i(A.NOT_FIND_DEVICE_BY_LABEL)
                },
                i)
            },
            e.getRecordingDevices = function(t, n) {
                return e._enumerateDevices(function(e) {
                    var n = e.filter(function(e) {
                        return "audioinput" == e.kind
                    });
                    t && t(n)
                },
                function(e) {
                    n && n(e)
                })
            },
            e.getPlayoutDevices = function(t, n) {
                return e._enumerateDevices(function(e) {
                    var n = e.filter(function(e) {
                        return "audiooutput" == e.kind
                    });
                    t && t(n)
                },
                function(e) {
                    n && n(e)
                })
            },
            e.getCameras = function(t, n) {
                return e._enumerateDevices(function(e) {
                    var n = e.filter(function(e) {
                        return "videoinput" == e.kind
                    });
                    t && t(n)
                },
                function(e) {
                    n && n(e)
                })
            },
            e._init(function() {
                navigator.mediaDevices && navigator.mediaDevices.addEventListener && navigator.mediaDevices.addEventListener("devicechange",
                function() {
                    e._reloadDevicesInfo()
                }),
                e.deviceReloadTimer = setInterval(e._reloadDevicesInfo, 5e3)
            }),
            e
        },
        z = n(5),
        q = n.n(z),
        K = function(e, t, n) {
            for (var i = 0; i < n.length; i++) if (e === n[i]) return ! 0;
            throw new Error("".concat(t, " can only be set as ").concat(JSON.stringify(n)))
        },
        X = function(e, t) {
            if (!e) throw new Error("Invalid param: ".concat(t || "param", " cannot be empty"));
            if ("object" !== q()(e)) throw new Error("".concat(t || "This paramter", " is of the object type"));
            return ! 0
        },
        Q = function(e, t, n, i, o) {
            if (se(n) && (n = 1), i = i || 255, se(o) && (o = !0), se(e)) throw new Error("".concat(t || "param", " cannot be empty"));
            if (!ee(e, n, i, o)) throw new Error("Invalid ".concat(t || "string param", ": Length of the string: [").concat(n, ",").concat(i, "].").concat(o ? " ASCII characters only.": ""))
        },
        $ = function(e, t, n, i) {
            if (se(n) && (n = 1), i = i || 1e4, se(e)) throw new Error("".concat(t || "param", " cannot be empty"));
            if (!te(e, n, i)) throw new Error("Invalid ".concat(t || "number param", ": The value range is [").concat(n, ",").concat(i, "]. integer only"))
        },
        Z = function(e, t) {
            if (se(e)) throw new Error("".concat(t || "param", " cannot be empty"));
            if (!ne(e)) throw new Error("Invalid ".concat(t || "boolean param", ": The value is of the boolean type."))
        },
        ee = function(e, t, n, i) {
            return t || (t = 0),
            n || (n = Number.MAX_SAFE_INTEGER),
            se(i) && (i = !0),
            ae(e) && (!i || oe(e)) && e.length >= t && e.length <= n
        },
        te = function(e, t, n) {
            return re(e) && e >= t && e <= n
        },
        ne = function(e) {
            return "boolean" == typeof e
        },
        ie = function(e) {
            return ee(e, 1, 2047)
        },
        oe = function(e) {
            if ("string" == typeof e) {
                for (var t = 0; t < e.length; t++) {
                    var n = e.charCodeAt(t);
                    if (n < 0 || n > 255) return ! 1
                }
                return ! 0
            }
        },
        re = function(e) {
            return "number" == typeof e && e % 1 == 0
        },
        ae = function(e) {
            return "string" == typeof e
        },
        se = function(e) {
            return null == e
        },
        ce = n(12);
        var de = function(e) {
            Q(e, "profileName"),
            -1 === (e = e.toLowerCase()).indexOf("_") && (e += "_1"),
            K(e, "profileName", Object.keys(o.SUPPORT_RESOLUTION_LIST));
            var t = o.SUPPORT_RESOLUTION_LIST[e];
            t || (e = Object(o.getParameter)("DEFAULT_PROFILE"), t = o.SUPPORT_RESOLUTION_LIST[e]);
            var n = {
                profileName: e,
                video: {
                    width: t[0],
                    height: t[1]
                },
                attributes: {
                    resolution: "".concat(t[0], "x").concat(t[1]),
                    minFrameRate: t[2],
                    maxFrameRate: t[3],
                    minVideoBW: t[4],
                    maxVideoBW: t[5]
                }
            };
            return t[2] && t[3] && (n.video.frameRate = {
                ideal: t[2],
                max: t[3]
            }),
            t[6] && t[7] && (n.screen = {
                width: t[0],
                height: t[1],
                frameRate: {
                    min: t[6],
                    max: t[7]
                }
            }),
            n
        },
        ue = function(e) {
            return Object.keys(o.SUPPORT_RESOLUTION_LIST).filter(function(t) {
                var n = o.SUPPORT_RESOLUTION_LIST[t],
                i = ["width", "height", "frameRate"];
                for (var r in i) {
                    var a = i[r];
                    if (e[a] && n[r]) {
                        if ("number" == typeof e[a].max && e[a].max < n[r]) return ! 1;
                        if ("number" == typeof e[a].min && e[a].min > n[r]) return ! 1
                    }
                }
                return ! 0
            }).reverse()
        },
        le = function(e) {
            var t = o.AUDIO_PROFILE_SETTINGS[e] || o.AUDIO_PROFILE_SETTINGS.
        default;
            return {
                highQuality:
                t[0],
                stereo: t[1],
                speech: t[2],
                lowQuality: t[3]
            }
        };
        var pe = function(e) {
            var t = s();
            if (t.params = S()({},
            e), t.stream = e.stream, t.url = e.url, t.onClose = void 0, t.local = !1, t.videoSource = e.videoSource, t.audioSource = e.audioSource, e.video = !(!e.videoSource && !e.video), t.video = e.video, e.audio = !(!e.audioSource && !e.audio), t.audio = e.audio, t.screen = !!e.screen, t.screenAttributes = {
                width: 1920,
                height: 1080,
                maxFr: 5,
                minFr: 1
            },
            t.videoSize = e.videoSize, t.player = void 0, t.audioLevelHelper = null, e.attributes = e.attributes || {},
            t.attributes = e.attributes, t.microphoneId = e.microphoneId, t.cameraId = e.cameraId, t.inSwitchDevice = !1, t.userMuteVideo = !1, t.userMuteAudio = !1, t.peerMuteVideo = !1, t.peerMuteAudio = !1, t.lowStream = null, t.videoWidth = 0, t.videoHeight = 0, t.streamId = e.streamID, t.userId = null, t.mirror = !1 !== e.mirror, t.DTX = e.audioProcessing && e.audioProcessing.DTX, t.audioProcessing = e.audioProcessing, t.highQuality = !1, t.stereo = !1, t.speech = !1, t.screen || delete t.screen, !(void 0 === t.videoSize || t.videoSize instanceof Array && 4 === t.videoSize.length)) throw Error("Invalid Video Size");
            function n() {
                var e = {};
                t.getVideoTrack() === this ? (r.
            default.debug("Video Track Ended"), e.type = "videoTrackEnded", e.track = this) : t.getAudioTrack() === this ? (r.
            default.debug("Audio Track Ended"), e.type = "audioTrackEnded", e.track = this) : r.
            default.debug("Detached Track ended", this.kind, this.label, this),
                e.type && t.dispatchEvent(e)
            }
            return t.videoSize = [640, 480, 640, 480],
            void 0 !== e.local && !0 !== e.local || (t.local = !0),
            t.initialized = !t.local,
            function(e) {
                e.audioMixing = {
                    audioContextInited: !1,
                    defaultVolume: 100,
                    inEarMonitoring: "FILE",
                    sounds: {},
                    states: {
                        IDLE: "IDLE",
                        STARTING: "STARTING",
                        BUSY: "BUSY",
                        PAUSED: "PAUSED"
                    },
                    inEarMonitoringModes: {
                        NONE: "NONE",
                        FILE: "FILE",
                        MICROPHONE: "MOCROPHONE",
                        ALL: "ALL"
                    },
                    ctx: null,
                    mediaStreamSource: null,
                    mediaStreamDest: null,
                    buffer: {}
                },
                e._initSoundIfNotExists = function(t, n) {
                    e.audioMixing.sounds[t] || (e.audioMixing.sounds[t] = {
                        soundId: t,
                        state: "IDLE",
                        muted: e.userMuteAudio,
                        filePath: n,
                        volume: e.audioMixing.defaultVolume,
                        startAt: null,
                        startOffset: null,
                        pauseAt: null,
                        pauseOffset: null,
                        resumeAt: null,
                        resumeOffset: null,
                        stopAt: null,
                        options: null,
                        source: null
                    })
                },
                e._initSoundIfNotExists( - 1),
                e.loadAudioBuffer = function(t, n, i) {
                    var o = a.b.reportApiInvoke(e.sid, {
                        callback: i,
                        name: "Stream.loadAudioBuffer",
                        options: arguments,
                        tag: "tracer"
                    });
                    Q(n, "url", 1, 1024, !1),
                    Q(t, "id", 1, 1024, !1);
                    var s = new XMLHttpRequest;
                    s.open("GET", n, !0),
                    s.responseType = "arraybuffer",
                    s.onload = function() {
                        if (s.status > 400) {
                            var n = s.statusText;
                            return r.
                        default.error("[".concat(e.streamId, "] loadAudioBuffer Failed: ") + n),
                            o(n)
                        }
                        var i = s.response;
                        e.audioMixing.audioContextInited || e._initAudioContext(),
                        e.audioMixing.ctx.decodeAudioData(i,
                        function(n) {
                            e.audioMixing.buffer[t] = n,
                            o(null)
                        },
                        function(t) {
                            r.
                        default.error("[".concat(e.streamId, "] decodeAudioData Failed: "), t),
                            o(t)
                        })
                    },
                    s.send()
                },
                e.createAudioBufferSource = function(t) {
                    var n = a.b.reportApiInvoke(e.sid, {
                        name: "Stream.createAudioBufferSource",
                        options: arguments,
                        tag: "tracer"
                    });
                    if (e.audioMixing.buffer[t.id]) {
                        var i = e.audioMixing.buffer[t.id],
                        o = e.audioMixing.ctx.createBufferSource();
                        o.buffer = i;
                        var s = e.audioMixing.ctx.createGain();
                        if (o.connect(s), s.connect(e.audioMixing.mediaStreamDest), o.gainNode = s, t.loop) o.loop = !0,
                        o.start(0, t.playTime / 1e3);
                        else if (t.cycle > 1) if (Object(f.isChrome)()) {
                            o.loop = !0;
                            var c = t.cycle * i.duration * 1e3 - (t.playTime || 0);
                            o.start(0, t.playTime / 1e3, c / 1e3)
                        } else r.
                    default.warning("[".concat(e.streamId, "] Cycle Param is ignored by current browser")),
                        o.start(0, t.playTime / 1e3);
                        else o.start(0, t.playTime / 1e3);
                        var d = e.audioMixing.sounds[t.soundId];
                        return d.source = o,
                        e._flushAudioMixingMuteStatus(),
                        o.addEventListener("ended",
                        function() {
                            o === d.source && e.dispatchEvent({
                                type: "audioSourceEnded",
                                soundId: t.soundId,
                                source: o,
                                sound: d
                            })
                        }),
                        n(),
                        o
                    }
                    return r.
                default.error("[".concat(e.streamId, "] "), "AUDIOBUFFER_NOT_FOUND", t.id),
                    n(!1),
                    !1
                },
                e.on("audioSourceEnded",
                function(t) {
                    t.source;
                    var n = t.sound;
                    n && n.state === e.audioMixing.states.BUSY && !n.pauseAt && (n.state = e.audioMixing.states.IDLE, n.startAt = null, n.startOffset = null, n.resumeAt = null, n.resumeOffset = null, e.audioMixing.mediaStreamSource.connect(e.audioMixing.mediaStreamDest))
                }),
                e.clearAudioBufferSource = function() {
                    e.audioBufferSource.forEach(function(e) {
                        e.stop()
                    })
                },
                e._isSoundExists = function(t) {
                    return !! e.audioMixing.sounds[t.soundId] || (r.
                default.error("SoundId not exists. #".concat(t.soundId)), !1)
                },
                e._initAudioContext = function() {
                    if (e.audioMixing.audioContextInited) throw new Error("Failed to init audio context. Already inited");
                    if (!e.stream) throw new Error("Failed to init audio context. Local Stream not initialized");
                    e.audioMixing.ctx = Object(ce.a)(),
                    e.audioMixing.mediaStreamSource = e.audioMixing.ctx.createMediaStreamSource(e.stream),
                    e.audioMixing.mediaStreamDest = e.audioMixing.ctx.createMediaStreamDestination(),
                    e.audioMixing.mediaStreamSource.connect(e.audioMixing.mediaStreamDest);
                    var t = e.stream.getVideoTracks()[0];
                    if (t && e.audioMixing.mediaStreamDest.stream.addTrack(t), e._isAudioMuted() ? (e._unmuteAudio(), e.stream = e.audioMixing.mediaStreamDest.stream, e._muteAudio()) : e.stream = e.audioMixing.mediaStreamDest.stream, e.audioLevelHelper = null, e.pc && e.pc.peerConnection && e.pc.peerConnection) {
                        var n = (e.pc.peerConnection && e.pc.peerConnection.getSenders()).find(function(e) {
                            return e && e.track && "audio" == e.track.kind
                        }),
                        i = e.audioMixing.mediaStreamDest.stream.getAudioTracks()[0];
                        n && n.replaceTrack && i && n.replaceTrack(i)
                    }
                    e.audioMixing.audioContextInited = !0
                },
                e._cleanupAudioMixing = function() {
                    if (e.audioMixing.audioContextInited) {
                        for (var t in e.audioMixing.sounds) {
                            var n = e.audioMixing.sounds[t];
                            n.state !== e.audioMixing.states.BUSY && n.state !== e.audioMixing.states.PAUSED || e._stopOneEffect({
                                soundId: t
                            })
                        }
                        e.audioLevelHelper = null,
                        e.audioMixing.audioContextInited = !1
                    }
                },
                e._reloadInEarMonitoringMode = function(t) {
                    if (t) {
                        if (!e.audioMixing.inEarMonitoringModes[t]) return r.
                    default.error("[".concat(e.streamId, "] Invalid InEarMonitoringMode ").concat(t));
                        e.audioMixing.inEarMonitoring = t
                    }
                    switch (e.audioMixing.audioContextInited || e._initAudioContext(), e.audioMixing.inEarMonitoring) {
                    case e.audioMixing.inEarMonitoringModes.FILE:
                        e.audioMixing.mediaStreamSource.connectedToDestination && (e.audioMixing.mediaStreamSource.disconnect(e.audioMixing.ctx.destination), e.audioMixing.mediaStreamSource.connectedToDestination = !1);
                    case e.audioMixing.inEarMonitoringModes.ALL:
                        for (var n in e.audioMixing.sounds) {
                            var i = e.audioMixing.sounds[n];
                            i && i.source && !i.source.connectedToDestination && (i.source.gainNode.connect(e.audioMixing.ctx.destination), i.source.connectedToDestination = !0)
                        }
                    }
                    switch (e.audioMixing.inEarMonitoring) {
                    case e.audioMixing.inEarMonitoringModes.MICROPHONE:
                        e.audioMixing.source.forEach(function(t) {
                            t.connectedToDestination && (t.gainNode.disconnect(e.audioMixing.ctx.destination), t.connectedToDestination = !1)
                        });
                    case e.audioMixing.inEarMonitoringModes.ALL:
                        e.audioMixing.mediaStreamSource.connectedToDestination || (e.audioMixing.mediaStreamSource.connect(e.audioMixing.ctx.destination), e.audioMixing.mediaStreamSource.connectedToDestination = !0)
                    }
                },
                e._startAudioMixingBufferSource = function(t) {
                    e.audioMixing.audioContextInited || e._initAudioContext();
                    var n = {
                        soundId: t.soundId,
                        id: t.filePath,
                        loop: t.loop,
                        cycle: t.cycle,
                        playTime: t.playTime || 0
                    },
                    i = t.replace,
                    o = e.createAudioBufferSource(n);
                    return o.sound = e.audioMixing.sounds[t.soundId],
                    o ? (o.addEventListener("ended", e._audioMixingFinishedListener, {
                        once: !0
                    }), e._reloadInEarMonitoringMode(), i && e.audioMixing.mediaStreamSource.disconnect(e.audioMixing.mediaStreamDest), o) : null
                },
                e._stopAudioMixingBufferSource = function(t) {
                    var n = e.audioMixing.sounds[t.soundId].source;
                    return n ? (n.removeEventListener("ended", e._audioMixingFinishedListener), e.audioMixing.mediaStreamSource.connect(e.audioMixing.mediaStreamDest), n.stop(), n) : null
                },
                e._flushAudioMixingMuteStatus = function(t) {
                    for (var n in e.audioMixing.sounds) {
                        var i = e.audioMixing.sounds[n];
                        i && (void 0 !== t && (i.muted = !!t), i.source && (i.muted ? i.source.gainNode.gain.value = 0 : i.source.gainNode.gain.value = i.volume / 100))
                    }
                },
                e._handleAudioMixingInvalidStateError = function(t, n, i) {
                    var o = e.audioMixing.sounds[n.soundId],
                    a = -1 === n.soundId ? "INVALID_AUDIO_MIXING_STATE": "INVALID_PLAY_EFFECT_STATE";
                    r.
                default.error("[".concat(e.streamId, "] Cannot ").concat(t, ": ").concat(a, ", state is ").concat(o.state)),
                    i && i(a)
                },
                e._handleAudioMixingNoSourceError = function(t, n, i) {
                    e.audioMixing.sounds[n.soundId].state = e.audioMixing.states.IDLE;
                    var o = -1 === n.soundId ? "NO_AUDIO_MIXING_SOURCE": "NO_EFFECT_SOURCE";
                    r.
                default.error("[".concat(e.streamId, "] Cannot ").concat(t, ": ").concat(o)),
                    i && i(o)
                },
                e._getOneEffectStates = function(t) {
                    var n = e.audioMixing.sounds[t.soundId];
                    return function() {
                        return n ? {
                            state: n.state,
                            startAt: n.startAt,
                            resumeAt: n.resumeAt,
                            pauseOffset: n.pauseOffset,
                            pauseAt: n.pauseAt,
                            resumeOffset: n.resumeOffset,
                            stopAt: n.stopAt,
                            duration: e._getOneEffectDuration(t),
                            position: e._getOneEffectCurrentPosition(t)
                        }: {}
                    }
                },
                e._audioMixingFinishedListener = function() {
                    var t = this.sound;
                    t.state === e.audioMixing.states.IDLE && e.audioMixing.buffer[t.options.filePath] && !t.options.cacheResource && (r.
                default.debug("Recycled buffer ".concat(t.options.filePath)), delete e.audioMixing.buffer[t.options.filePath]),
                    -1 === t.soundId && e.dispatchEvent({
                        type: "audioMixingFinished"
                    })
                },
                e._playOneEffect = function(t, n) {
                    X(t, "options");
                    var i = t.soundId,
                    o = (t.filePath, t.cacheResource);
                    if (t.cycle, t.loop, t.playTime, t.replace, Object(f.isSafari)() && Object(f.getBrowserVersion)() < 12) {
                        var a = "BROWSER_NOT_SUPPORT";
                        return r.
                    default.error("[".concat(e.streamId, "] Cannot _playOneEffect: "), a),
                        n(a)
                    }
                    e.audioMixing.audioContextInited || e._initAudioContext(),
                    e._initSoundIfNotExists(i);
                    var s = e.audioMixing.sounds[i];
                    if (s.state === e.audioMixing.states.IDLE) {
                        if (void 0 !== t.cycle && !t.cycle > 0) return a = "Invalid Parmeter cycle: " + t.cycle,
                        r.
                    default.error("[".concat(e.streamId, "] ").concat(i), a),
                        n(a);
                        if (se(o) && (t.cacheResource = !0), s.state = e.audioMixing.states.STARTING, s.options = t, e.audioMixing.buffer[t.filePath]) {
                            var c = e._startAudioMixingBufferSource(t);
                            if (c) return s.source = c,
                            s.startAt = Date.now(),
                            s.resumeAt = null,
                            s.pauseOffset = null,
                            s.pauseAt = null,
                            s.resumeOffset = null,
                            s.stopAt = null,
                            s.startOffset = t.playTime || 0,
                            s.state = e.audioMixing.states.BUSY,
                            e._flushAudioMixingMuteStatus(),
                            n(null);
                            s.state = e.audioMixing.states.IDLE;
                            var d = "CREATE_BUFFERSOURCE_FAILED";
                            if (n) return n(d);
                            r.
                        default.error("[".concat(e.streamId, "] "), d)
                        } else e.loadAudioBuffer(t.filePath, t.filePath,
                        function(i) {
                            if (i) s.state = e.audioMixing.states.IDLE,
                            n ? n(i) : r.
                        default.error("[".concat(e.streamId, "] "), i);
                            else {
                                var o = e._startAudioMixingBufferSource(t);
                                if (o) return s.source = o,
                                s.startAt = Date.now(),
                                s.resumeAt = null,
                                s.pauseOffset = null,
                                s.pauseAt = null,
                                s.resumeOffset = null,
                                s.stopAt = null,
                                s.startOffset = t.playTime || 0,
                                s.state = e.audioMixing.states.BUSY,
                                e._flushAudioMixingMuteStatus(),
                                n(null);
                                if (s.state = e.audioMixing.states.IDLE, i = "CREATE_BUFFERSOURCE_FAILED", n) return n(i);
                                r.
                            default.error("[".concat(e.streamId, "] "), i)
                            }
                        })
                    } else e._handleAudioMixingInvalidStateError("_playEffect", t, n)
                },
                e._stopOneEffect = function(t, n) {
                    var i = e.audioMixing.sounds[t.soundId];
                    return e._isSoundExists(t) ? i.state === e.audioMixing.states.BUSY || i.state === e.audioMixing.states.PAUSED ? (e._stopAudioMixingBufferSource(t), i.stopAt = Date.now(), i.state = e.audioMixing.states.IDLE, e.audioMixing.buffer[i.options.filePath] && !i.options.cacheResource && (r.
                default.debug("Recycled buffer ".concat(i.options.filePath)), delete e.audioMixing.buffer[i.options.filePath]), void(n && n(null))) : void e._handleAudioMixingInvalidStateError("_stopOneEffect", t, n) : n("SOUND_NOT_EXISTS")
                },
                e._pauseOneEffect = function(t, n) {
                    var i = e.audioMixing.sounds[t.soundId];
                    if (i.state === e.audioMixing.states.BUSY) return e._stopAudioMixingBufferSource(t) ? (i.pauseAt = Date.now(), i.state = e.audioMixing.states.PAUSED, i.resumeAt ? i.pauseOffset = i.pauseAt - i.resumeAt + i.resumeOffset: i.pauseOffset = i.pauseAt - i.startAt + i.startOffset, n && n(null)) : void e._handleAudioMixingNoSourceError("_pauseOneEffect", t, n);
                    e._handleAudioMixingInvalidStateError("_pauseOneEffect", t, n)
                },
                e._resumeOneEffect = function(t, n) {
                    var i = e.audioMixing.sounds[t.soundId];
                    if (i.state === e.audioMixing.states.PAUSED) {
                        var o = {
                            soundId: t.soundId,
                            filePath: i.options.filePath,
                            cycle: i.options.cycle,
                            loop: i.options.loop,
                            playTime: i.pauseOffset,
                            replace: i.options.replace
                        },
                        a = e._startAudioMixingBufferSource(o);
                        if (!a) {
                            var s = "CREATE_BUFFERSOURCE_FAILED";
                            return n(s),
                            void r.
                        default.error("[".concat(e.streamId, "] "), s)
                        }
                        i.source = a,
                        i.resumeAt = Date.now(),
                        i.resumeOffset = i.pauseOffset,
                        i.state = e.audioMixing.states.BUSY,
                        i.pauseAt = null,
                        i.pauseOffset = null,
                        n(null)
                    } else e._handleAudioMixingInvalidStateError("_resumeOneEffect", t, n)
                },
                e._getOneEffectDuration = function(t) {
                    var n = e.audioMixing.sounds[t.soundId];
                    return n.options && n.options.filePath && e.audioMixing.buffer[n.options.filePath] ? 1e3 * e.audioMixing.buffer[n.options.filePath].duration: null
                },
                e._getOneEffectCurrentPosition = function(t, n) {
                    var i = e.audioMixing.sounds[t.soundId];
                    return i.state === e.audioMixing.states.PAUSED ? i.pauseOffset % e._getOneEffectDuration(t) : i.state === e.audioMixing.states.BUSY ? i.resumeAt ? (Date.now() - i.resumeAt + i.resumeOffset + i.startOffset) % e._getOneEffectDuration(t) : (Date.now() - i.startAt + i.startOffset) % e._getOneEffectDuration(t) : void(n && e._handleAudioMixingInvalidStateError("_getOneEffectCurrentPosition", t))
                },
                e._setOneEffectPosition = function(t, n, i) {
                    var o = e.audioMixing.sounds[t.soundId];
                    if (o.state === e.audioMixing.states.BUSY) {
                        if (!e._stopAudioMixingBufferSource(t)) return void e._handleAudioMixingNoSourceError("_setOneEffectPosition", t, i);
                        var a = {
                            soundId: t.soundId,
                            filePath: o.options.filePath,
                            loop: o.options.loop,
                            cycle: o.options.cycle,
                            playTime: n
                        },
                        s = e._startAudioMixingBufferSource(a);
                        if (!s) {
                            var c = "CREATE_BUFFERSOURCE_FAILED";
                            return i && i(c),
                            void r.
                        default.error("[".concat(e.streamId, "] "), c)
                        }
                        o.source = s,
                        o.startAt = Date.now(),
                        o.startOffset = n,
                        o.resumeAt = null,
                        o.resumeOffset = null,
                        o.pauseOffset = null,
                        o.pauseAt = null
                    } else {
                        if (o.state !== e.audioMixing.states.PAUSED) return void e._handleAudioMixingInvalidStateError("_setOneEffectPosition", t, i);
                        o.pauseOffset = n
                    }
                    i && i(null)
                },
                e.startAudioMixing = function(t, n) {
                    var i = a.b.reportApiInvoke(e.sid, {
                        callback: function(t) {
                            if (t) return n && n(t);
                            e.dispatchEvent({
                                type: "audioMixingPlayed"
                            }),
                            n && n(null)
                        },
                        getStates: e._getOneEffectStates({
                            soundId: -1
                        }),
                        name: "Stream.startAudioMixing",
                        options: t
                    });
                    X(t, "options");
                    var r = t.filePath,
                    s = t.cacheResource,
                    c = t.cycle,
                    d = t.loop,
                    u = t.playTime,
                    l = t.replace;
                    Q(r, "filePath", 1, Object(o.getParameter)("FILEPATH_LENMAX"), !1),
                    $(u, "playTime", 0, 1e8),
                    !se(c) && $(c, "cycle"),
                    !se(d) && Z(d, "loop"),
                    !se(l) && Z(l, "replace"),
                    !se(s) && Z(s, "cacheResource");
                    var p = S()({
                        soundId: -1
                    },
                    t);
                    e._playOneEffect(p, i)
                },
                e.stopAudioMixing = function(t) {
                    var n = a.b.reportApiInvoke(e.sid, {
                        callback: t,
                        getStates: e._getOneEffectStates({
                            soundId: -1
                        }),
                        name: "Stream.stopAudioMixing"
                    });
                    e._stopOneEffect({
                        soundId: -1
                    },
                    n)
                },
                e.pauseAudioMixing = function(t) {
                    var n = a.b.reportApiInvoke(e.sid, {
                        callback: t,
                        getStates: e._getOneEffectStates({
                            soundId: -1
                        }),
                        name: "Stream.pauseAudioMixing"
                    });
                    return e._pauseOneEffect({
                        soundId: -1
                    },
                    n)
                },
                e.resumeAudioMixing = function(t) {
                    var n = a.b.reportApiInvoke(e.sid, {
                        callback: function(n, i) {
                            if (n) return t && t(n);
                            e.dispatchEvent({
                                type: "audioMixingPlayed"
                            }),
                            t && t(null)
                        },
                        getStates: e._getOneEffectStates({
                            soundId: -1
                        }),
                        name: "Stream.resumeAudioMixing"
                    });
                    e._resumeOneEffect({
                        soundId: -1
                    },
                    n)
                },
                e.adjustAudioMixingVolume = function(t) {
                    var n = a.b.reportApiInvoke(e.sid, {
                        getStates: e._getOneEffectStates({
                            soundId: -1
                        }),
                        name: "Stream.adjustAudioMixingVolume",
                        options: arguments,
                        tag: "tracer"
                    });
                    $(t, "volume", 0, 100),
                    e.audioMixing.sounds[ - 1].volume = t,
                    e._flushAudioMixingMuteStatus(),
                    n()
                },
                e.getAudioMixingDuration = function() {
                    var t = a.b.reportApiInvoke(e.sid, {
                        getStates: e._getOneEffectStates({
                            soundId: -1
                        }),
                        name: "Stream.getAudioMixingDuration"
                    }),
                    n = e._getOneEffectDuration({
                        soundId: -1
                    });
                    return t(null, n),
                    n
                },
                e.getAudioMixingCurrentPosition = function() {
                    var t = a.b.reportApiInvoke(e.sid, {
                        getStates: e._getOneEffectStates({
                            soundId: -1
                        }),
                        name: "Stream.getAudioMixingCurrentPosition"
                    }),
                    n = e._getOneEffectCurrentPosition({
                        soundId: -1
                    },
                    !0);
                    return t(null, n),
                    n
                },
                e.setAudioMixingPosition = function(t, n) {
                    var i = a.b.reportApiInvoke(e.sid, {
                        callback: n,
                        options: arguments,
                        tag: "tracer",
                        getStates: e._getOneEffectStates({
                            soundId: -1
                        }),
                        name: "Stream.setAudioMixingPosition"
                    });
                    $(t, "position", 0, 1e8),
                    e._setOneEffectPosition({
                        soundId: -1
                    },
                    t, i)
                },
                e.playEffect = function(t, n) {
                    var i = a.b.reportApiInvoke(e.sid, {
                        callback: function(t) {
                            if (t) return n && n(t);
                            e.dispatchEvent({
                                type: "effectPlayed"
                            }),
                            n && n(null)
                        },
                        name: "Stream.playEffect",
                        options: t
                    });
                    X(t, "options");
                    var r = t.soundId,
                    s = t.filePath,
                    c = t.cycle;
                    $(r, "soundId", 1, 1e4),
                    Q(s, "filePath", 0, Object(o.getParameter)("FILEPATH_LENMAX"), !1),
                    !se(c) && $(c, "cycle"),
                    e._playOneEffect(t, i)
                },
                e.stopEffect = function(t, n) {
                    var i = a.b.reportApiInvoke(e.sid, {
                        callback: n,
                        getStates: e._getOneEffectStates({
                            soundId: t
                        }),
                        name: "Stream.stopEffect"
                    });
                    $(t, "soundId", 1, 1e4),
                    e._stopOneEffect({
                        soundId: t
                    },
                    i)
                },
                e.stopAllEffects = function(t) {
                    var n = a.b.reportApiInvoke(e.sid, {
                        callback: t,
                        name: "Stream.stopAllEffect"
                    }),
                    i = !1,
                    o = 0,
                    r = 0,
                    s = function(e) {
                        i || (e ? (n(e), i = !0) : o += 1, o === r && (n(null), i = !0))
                    };
                    for (var c in e.audioMixing.sounds) {
                        var d = e.audioMixing.sounds[c]; - 1 !== d.soundId && (d.state !== e.audioMixing.states.BUSY && d.state !== e.audioMixing.states.PAUSED || (r++, e._stopOneEffect({
                            soundId: c
                        },
                        s)))
                    }
                    r || n(null)
                },
                e.preloadEffect = function(t, n, i) {
                    var r = a.b.reportApiInvoke(e.sid, {
                        callback: i,
                        options: arguments,
                        tag: "tracer",
                        name: "Stream.preloadEffect"
                    });
                    $(t, "soundId", 1, 1e4),
                    Q(n, "filePath", 1, Object(o.getParameter)("FILEPATH_LENMAX"), !1),
                    e._initSoundIfNotExists(t, n),
                    e.audioMixing.buffer[n] ? r(null) : e.loadAudioBuffer(n, n, r)
                },
                e.unloadEffect = function(t, n) {
                    var i = a.b.reportApiInvoke(e.sid, {
                        callback: n,
                        options: arguments,
                        tag: "tracer",
                        name: "Stream.unloadEffect"
                    });
                    $(t, "soundId", 1, 1e4);
                    var o = e.audioMixing.sounds[t];
                    if (!o) {
                        var s = "SOUND_NOT_EXISTS";
                        return r.
                    default.error(s, t),
                        void i(s)
                    }
                    var c = o.options ? o.options.filePath: o.filePath;
                    if (c) delete e.audioMixing.buffer[c],
                    delete e.audioMixing.sounds[t],
                    i(null);
                    else {
                        var d = "SOUND_BUFFER_NOT_FOUND";
                        r.
                    default.error(d, t),
                        i(d)
                    }
                },
                e.pauseEffect = function(t, n) {
                    var i = a.b.reportApiInvoke(e.sid, {
                        callback: n,
                        options: arguments,
                        tag: "tracer",
                        name: "Stream.pauseEffect"
                    });
                    return e._pauseOneEffect({
                        soundId: t
                    },
                    i)
                },
                e.pauseAllEffects = function(t) {
                    var n = a.b.reportApiInvoke(e.sid, {
                        callback: t,
                        name: "Stream.pauseAllEffects"
                    }),
                    i = !1,
                    o = 0,
                    r = 0,
                    s = function(e) {
                        i || (e ? (n(e), i = !0) : o += 1, o === r && (n(null), i = !0))
                    };
                    for (var c in e.audioMixing.sounds)"-1" !== c && e.audioMixing.sounds[c].state === e.audioMixing.states.BUSY && (r++, e._pauseOneEffect({
                        soundId: c
                    },
                    s));
                    r || n(null)
                },
                e.resumeEffect = function(t, n) {
                    $(t, "soundId", 1, 1e4);
                    var i = a.b.reportApiInvoke(e.sid, {
                        callback: n,
                        options: arguments,
                        tag: "tracer",
                        name: "Stream.resumeEffect"
                    });
                    return e._resumeOneEffect({
                        soundId: t
                    },
                    i)
                },
                e.resumeAllEffects = function(t) {
                    var n = a.b.reportApiInvoke(e.sid, {
                        callback: t,
                        name: "Stream.resumeAllEffects"
                    }),
                    i = !1,
                    o = 0,
                    r = 0,
                    s = function(e) {
                        i || (e ? (n(e), i = !0) : o += 1, o === r && (n(null), i = !0))
                    };
                    for (var c in e.audioMixing.sounds)"-1" !== c && e.audioMixing.sounds[c].state === e.audioMixing.states.PAUSED && (r++, e._resumeOneEffect({
                        soundId: c
                    },
                    s));
                    r || n(null)
                },
                e.getEffectsVolume = function() {
                    var t = [];
                    for (var n in e.audioMixing.sounds) {
                        var i = e.audioMixing.sounds[n];
                        i && "-1" !== n && t.push({
                            soundId: parseInt(n),
                            volume: i.volume
                        })
                    }
                    return t
                },
                e.setEffectsVolume = function(t, n) {
                    var i = a.b.reportApiInvoke(e.sid, {
                        name: "Stream.setEffectsVolume",
                        options: arguments,
                        tag: "tracer",
                        callback: n
                    });
                    for (var o in $(t, "volume", 0, 100), e.audioMixing.defaultVolume = t, e.audioMixing.sounds) {
                        var r = e.audioMixing.sounds[o];
                        "-1" !== o && (r.volume = t)
                    }
                    e._flushAudioMixingMuteStatus(),
                    i(null)
                },
                e.setVolumeOfEffect = function(t, n, i) {
                    var o = a.b.reportApiInvoke(e.sid, {
                        name: "Stream.setVolumeOfEffect",
                        options: arguments,
                        tag: "tracer",
                        callback: i
                    });
                    $(t, "soundId", 0, 1e4),
                    $(n, "volume", 0, 100),
                    e._initSoundIfNotExists(t),
                    e.audioMixing.sounds[t].volume = n,
                    e._flushAudioMixingMuteStatus(),
                    o(null)
                }
            } (t),
            function(e, t) {
                e.videoConstraint = {},
                t.cameraId && (e.videoConstraint.deviceId = {
                    exact: t.cameraId
                }),
                e.videoSize && (e.videoConstraint.width = e.videoSize[0], e.videoConstraint.height = e.videoSize[1]),
                Object(f.isLegacyChrome)() || (e.videoConstraint.frameRate = {
                    ideal: 30,
                    max: 30
                }),
                e.audioConstraint = {},
                t.microphoneId && (e.audioConstraint.deviceId = {
                    exact: t.microphoneId
                }),
                Object(f.isLegacyChrome)() || e.audioProcessing && (void 0 !== e.audioProcessing.AGC && (Object(f.isFireFox)() ? e.audioConstraint.autoGainControl = e.audioProcessing.AGC: Object(f.isChrome)() && (e.audioConstraint.googAutoGainControl = e.audioProcessing.AGC, e.audioConstraint.googAutoGainControl2 = e.audioProcessing.AGC)), void 0 !== e.audioProcessing.AEC && (e.audioConstraint.echoCancellation = e.audioProcessing.AEC), void 0 !== e.audioProcessing.ANS && (Object(f.isFireFox)() ? e.audioConstraint.noiseSuppression = e.audioProcessing.ANS: Object(f.isChrome)() && (e.audioConstraint.googNoiseSuppression = e.audioProcessing.ANS))),
                e.screenConstraint = {},
                t.sourceId && (e.screenConstraint.sourceId = t.sourceId),
                t.extensionId && Object(f.isChrome)() ? (e.screenConstraint.extensionId = t.extensionId, e.screenConstraint.mandatory = {
                    chromeMediaSource: "desktop",
                    maxWidth: e.screenAttributes.width,
                    maxHeight: e.screenAttributes.height,
                    maxFrameRate: e.screenAttributes.maxFr,
                    minFrameRate: e.screenAttributes.minFr
                }) : (e.screenConstraint.mediaSource = "screen", e.screenConstraint.width = e.screenAttributes.width, e.screenConstraint.height = e.screenAttributes.height, e.screenConstraint.frameRate = {
                    ideal: e.screenAttributes.maxFr,
                    max: e.screenAttributes.maxFr
                }),
                t.mediaSource && (e.screenConstraint.mediaSource = t.mediaSource),
                e.setVideoResolution = function(n) {
                    var i = a.b.reportApiInvoke(e.sid, {
                        name: "Stream.setVideoResolution",
                        options: arguments,
                        tag: "tracer"
                    });
                    if (! (n instanceof Array)) {
                        var o = de(n += "");
                        return o && o.video ? (e.videoConstraint = S()(e.videoConstraint, {
                            width: {
                                ideal: o.video.width
                            },
                            height: {
                                ideal: o.video.height
                            }
                        }), t.attributes.resolution = o.attributes.resolution, (s = e.stream && e.stream.getVideoTracks && e.stream.getVideoTracks()[0]) && s.applyConstraints ? (r.
                    default.debug("setVideoResolution applyConstraints", e.videoConstraint), s.applyConstraints(e.videoConstraint).then(i).
                        catch(i)) : i(), !0) : (i("NO_PROFILE_".concat(n)), !1)
                    }
                    var s, c = n[0],
                    d = n[1];
                    e.videoConstraint = S()(e.videoConstraint, {
                        width: {
                            ideal: c
                        },
                        height: {
                            ideal: d
                        }
                    }),
                    t.attributes.resolution = "".concat(c, "x").concat(d),
                    (s = e.stream && e.stream.getVideoTracks && e.stream.getVideoTracks()[0]) && s.applyConstraints ? (r.
                default.debug("setVideoResolution applyConstraints", e.videoConstraint), s.applyConstraints(e.videoConstraint).then(i).
                    catch(i)) : i()
                },
                e.setVideoFrameRate = function(n) {
                    var i = a.b.reportApiInvoke(e.sid, {
                        name: "Stream.setVideoFrameRate",
                        options: arguments,
                        tag: "tracer"
                    });
                    if (Object(f.isFireFox)()) return i("FIREFOX_NOT_SUPPORTED"),
                    !1;
                    if ("object" === q()(n) && n instanceof Array && n.length > 1) {
                        e.videoConstraint = S()(e.videoConstraint, {
                            frameRate: {
                                ideal: n[0],
                                max: n[1]
                            }
                        }),
                        t.attributes.minFrameRate = n[0],
                        t.attributes.maxFrameRate = n[1];
                        var o = e.stream && e.stream.getVideoTracks && e.stream.getVideoTracks()[0];
                        return o && o.applyConstraints ? (r.
                    default.debug("setVideoFrameRate applyConstraints", e.videoConstraint), o.applyConstraints(e.videoConstraint).then(i).
                        catch(i)) : i(),
                        !0
                    }
                    return i("INVALID_PARAM_".concat(JSON.stringify(n))),
                    !1
                },
                e.setVideoBitRate = function(n) {
                    var i = a.b.reportApiInvoke(e.sid, {
                        name: "Stream.setVideoBitRate",
                        options: arguments,
                        tag: "tracer"
                    });
                    return "object" === q()(n) && n instanceof Array && n.length > 1 ? (t.attributes.minVideoBW = n[0], t.attributes.maxVideoBW = n[1], e.connectionSpec && (e.connectionSpec.minVideoBW = n[0], e.connectionSpec.maxVideoBW = n[1]), e.pc && e.pc.renegotiate && e.pc.renegotiate(), i(), !0) : (i("INVALID_PARAM_".concat(JSON.stringify(n))), !1)
                },
                e.setScreenBitRate = function(n) {
                    var i = a.b.reportApiInvoke(e.sid, {
                        name: "Stream.setScreenBitRate",
                        options: arguments,
                        tag: "tracer"
                    });
                    return "object" === q()(n) && n instanceof Array && n.length > 1 ? (t.screenAttributes.minVideoBW = n[0], t.screenAttributes.maxVideoBW = n[1], i(), !0) : (i("INVALID_PARAM_".concat(JSON.stringify(n))), !1)
                },
                e.setScreenProfile = function(t) {
                    var n = a.b.reportApiInvoke(e.sid, {
                        name: "Stream.setScreenProfile",
                        options: arguments,
                        tag: "tracer"
                    });
                    K(t, "profile", ["480p_1", "480p_2", "720p_1", "720p_2", "1080p_1", "1080p_2"]);
                    var i = de(t);
                    return i && i.screen ? (e.screenConstraint.mandatory ? (e.screenConstraint.mandatory.maxWidth = i.screen.width, e.screenConstraint.mandatory.maxHeight = i.screen.height, i.screen.frameRate && i.screen.frameRate.min && i.screen.frameRate.max && (e.screenConstraint.mandatory.minFrameRate = i.screen.frameRate.min, e.screenConstraint.mandatory.maxFrameRate = i.screen.frameRate.max)) : e.screenConstraint = S()(e.screenConstraint, i.screen), e.screenAttributes.width = i.screen.width, e.screenAttributes.height = i.screen.height, e.screenAttributes.minFr = i.screen.frameRate.min, e.screenAttributes.maxFr = i.screen.frameRate.max, n(), !0) : (n("NO_SCREEN_PROFILE_".concat(JSON.stringify(t))), !1)
                },
                e.setVideoProfileCustom = function(t) {
                    var n = a.b.reportApiInvoke(e.sid, {
                        name: "Stream.setVideoProfileCustom",
                        options: arguments,
                        tag: "tracer"
                    });
                    e.setVideoResolution(t[0]),
                    e.setVideoFrameRate([t[1], t[1]]),
                    e.setVideoBitRate([t[2], t[2]]),
                    n()
                },
                e.setVideoProfileCustomPlus = function(n) {
                    var i = a.b.reportApiInvoke(e.sid, {
                        name: "Stream.setVideoProfileCustom",
                        options: arguments,
                        tag: "tracer"
                    });
                    e.videoConstraint.width = n.width,
                    e.videoConstraint.height = n.height,
                    t.attributes.resolution = "".concat(n.width, "x").concat(n.height),
                    e.setVideoFrameRate([n.framerate, n.framerate]),
                    e.setVideoBitRate([n.bitrate, n.bitrate]),
                    i()
                },
                e.setVideoProfile = function(n) {
                    var i = a.b.reportApiInvoke(e.sid, {
                        name: "Stream.setVideoProfile",
                        options: arguments,
                        tag: "tracer"
                    }),
                    o = de(n);
                    if (!o) {
                        var s = "Invalid Profile ".concat(n);
                        throw new Error(s)
                    }
                    if (e.profile = n, o && o.video) {
                        e.profile = o.profileName,
                        e.videoConstraint = S()(e.videoConstraint, o.video),
                        e.connectionSpec && o.attributes.maxVideoBW && (e.connectionSpec.minVideoBW = o.attributes.minVideoBW, e.connectionSpec.maxVideoBW = o.attributes.maxVideoBW),
                        Object(f.isEdge)() && (e.videoConstraint.frameRate.max = 60),
                        Object(f.isFireFox)() && (e.videoConstraint.frameRate = {
                            ideal: 30,
                            max: 30
                        }),
                        t.attributes = S()(t.attributes, o.attributes),
                        e.pc && e.pc.renegotiate && e.pc.renegotiate();
                        var c = e.stream && e.stream.getVideoTracks && e.stream.getVideoTracks()[0];
                        return c && c.applyConstraints ? (r.
                    default.debug("setVideoProfile applyConstraints", e.videoConstraint), c.applyConstraints(e.videoConstraint).then(function(t) {
                            i(t),
                            Object(G.h)(e.stream,
                            function(t, n) {
                                e.videoWidth = t,
                                e.videoHeight = n
                            },
                            function(t) {
                                r.
                            default.warning("[".concat(e.streamId, "] vsResHack failed: "), t)
                            })
                        }).
                        catch(i)) : i(),
                        !0
                    }
                    return i("INVALID_VIDEO_PROFILE_".concat(n)),
                    !1
                },
                e.setAudioProfile = function(t) {
                    var n = a.b.reportApiInvoke(e.sid, {
                        name: "Stream.setAudioProfile",
                        options: arguments,
                        tag: "tracer"
                    });
                    K(t, "profile", ["speech_low_quality", "speech_standard", "music_standard", "standard_stereo", "high_quality", "high_quality_stereo"]),
                    e.audioProfile = t;
                    var i = le(t);
                    return e.highQuality = i.highQuality,
                    e.stereo = i.stereo,
                    e.speech = i.speech,
                    e.lowQuality = i.lowQuality,
                    e.stereo && Object(f.isChrome)() && (e.audioConstraint.googAutoGainControl = !1, e.audioConstraint.googAutoGainControl2 = !1, e.audioConstraint.echoCancellation = !1, e.audioConstraint.googNoiseSuppression = !1),
                    n(),
                    !0
                },
                e.setVideoEncoderConfiguration = function(t) {
                    X(t, "config");
                    var n = a.b.reportApiInvoke(e.sid, {
                        name: "Stream.setVideoEncoderConfiguration",
                        options: t,
                        tag: "tracer"
                    });
                    t.resolution && ($(t.resolution.width, "config.resolution.width"), $(t.resolution.height, "config.resolution.height"), e.setVideoResolution([t.resolution.width, t.resolution.height])),
                    t.frameRate && ($(t.frameRate.min, "config.frameRate.min"), $(t.frameRate.max, "config.frameRate.max"), e.setVideoFrameRate([t.frameRate.min, t.frameRate.max])),
                    t.bitrate && ($(t.bitrate.min, "config.bitrate.min", 1, 1e7), $(t.bitrate.max, "config.bitrate.max", 1, 1e7), e.setVideoBitRate([t.bitrate.min, t.bitrate.max])),
                    n()
                },
                e.getSupportedProfile = function(t) {
                    var n = a.b.reportApiInvoke(e.sid, {
                        name: "Stream.getSupportedProfile",
                        options: arguments,
                        tag: "tracer",
                        callback: t
                    });
                    if (!e.local) {
                        var i = "ONLY_LOCAL_STREAM_SUPPORTED";
                        return r.
                    default.error(i),
                        n(i)
                    }
                    if (!e.stream) return i = "STREAM_NOT_INIT",
                    r.
                default.error(i),
                    n(i);
                    if (!e.stream.getVideoTracks) return i = "TRACK_NOT_SUPPORT",
                    r.
                default.error(i),
                    n(i);
                    var o = e.stream.getVideoTracks()[0];
                    if (!o) return i = "NO_VIDEO_TRACK_FOUND",
                    r.
                default.error(i),
                    n(i);
                    if (!o.getCapabilities) return i = "GETCAPABILITY_NOT_SUPPORT",
                    r.
                default.error(i),
                    n(i);
                    var s = o.getCapabilities();
                    return n(null, ue(s))
                }
            } (t, e),
            t.on("collectStats",
            function(e) {
                e.promises.push(t._getPCStats(e.interval)),
                e.promises.push(new Promise(function(e) {
                    var n = {};
                    t.pc && t.pc.isSubscriber ? null !== window.navigator.userAgent.match("Firefox") && (J(n, "videoReceiveResolutionHeight", t.videoHeight), J(n, "videoReceiveResolutionWidth", t.videoWidth)) : t.pc && !t.pc.isSubscriber && ((Object(f.isSafari)() || Object(f.isFireFox)()) && (J(n, "videoSendResolutionHeight", t.videoHeight), J(n, "videoSendResolutionWidth", t.videoWidth)), (Object(f.isSafari)() || Object(f.isFireFox)()) && t.uplinkStats && J(n, "videoSendPacketsLost", t.uplinkStats.uplink_cumulative_lost)),
                    e(n)
                })),
                e.promises.push(new Promise(function(e) {
                    var n = {};
                    return t.traffic_stats && t.pc && t.pc.isSubscriber ? (J(n, "accessDelay", t.traffic_stats.access_delay), J(n, "endToEndDelay", t.traffic_stats.e2e_delay), J(n, "videoReceiveDelay", t.traffic_stats.video_delay), J(n, "audioReceiveDelay", t.traffic_stats.audio_delay)) : t.traffic_stats && t.pc && !t.pc.isSubscriber && J(n, "accessDelay", t.traffic_stats.access_delay),
                    e(n)
                }))
            }),
            t.getId = function() {
                return t.streamId
            },
            t.getUserId = function() {
                return t.userId
            },
            t.setUserId = function(e) {
                var n = a.b.reportApiInvoke(t.sid, {
                    name: "Stream.setUserId",
                    options: arguments,
                    tag: "tracer"
                });
                t.userId && r.
            default.warning("[".concat(t.streamId, "] Stream.userId ").concat(t.userId, " => ").concat(e)),
                t.userId = e,
                n()
            },
            t.getAttributes = function() {
                return e.screen ? t.screenAttributes: e.attributes
            },
            t.hasAudio = function() {
                return t.audio
            },
            t.hasVideo = function() {
                return t.video
            },
            t.hasScreen = function() {
                return t.screen
            },
            t.isVideoOn = function() {
                return (t.hasVideo() || t.hasScreen()) && !t.userMuteVideo
            },
            t.isAudioOn = function() {
                return t.hasAudio() && !t.userMuteAudio
            },
            t.init = function(i, o) {
                var s = a.b.reportApiInvoke(t.sid, {
                    callback: function(e, t) {
                        if (e) return o && o(e);
                        i && i(t)
                    },
                    name: "Stream.init",
                    options: arguments,
                    tag: "tracer"
                }),
                c = ((new Date).getTime(), arguments[2]);
                if (void 0 === c && (c = 2), !0 === t.initialized) return s({
                    type: "warning",
                    msg: "STREAM_ALREADY_INITIALIZED"
                });
                if (!0 !== t.local) return s({
                    type: "warning",
                    msg: "STREAM_NOT_LOCAL"
                });
                t.videoSource ? t.videoName = "videoSource": t.video && (t.videoName = Y.searchDeviceNameById(e.cameraId) || "default"),
                t.audioSource ? t.audioName = "audioSource": t.audio && (t.audioName = Y.searchDeviceNameById(e.microphoneId) || "default"),
                t.screen && (t.screenName = e.extensionId || "default");
                try {
                    if (e.audio || e.video || e.screen || e.videoSource || e.audioSource) {
                        r.
                    default.debug("[".concat(t.streamId, "] Requested access to local media"));
                        var d = {
                            streamId: t.streamId
                        };
                        e.videoSource ? d.videoSource = e.videoSource: e.screen ? d.screen = t.screenConstraint: e.video && (d.video = t.videoConstraint),
                        e.audioSource ? d.audioSource = e.audioSource: e.audio && (d.audio = t.audioConstraint),
                        H(d,
                        function(i) {
                            d.screen && r.
                        default.debug("[".concat(t.streamId, "] User has granted access to screen sharing")),
                            (d.video || d.audio) && r.
                        default.debug("[".concat(t.streamId, "] User has granted access to local media")),
                            t.dispatchEvent({
                                type: "accessAllowed"
                            }),
                            t.stream = i,
                            t.initialized = !0,
                            t.reloadDeviceName(),
                            t.hasVideo() && Object(G.h)(i,
                            function(e, n) {
                                t.videoWidth = e,
                                t.videoHeight = n
                            },
                            function(e) {
                                r.
                            default.warning("[".concat(t.streamId, "] vsResHack failed: "), e)
                            }),
                            e.screen && t.stream && t.stream.getVideoTracks()[0] && (t.stream.getVideoTracks()[0].onended = function() {
                                t.dispatchEvent({
                                    type: "stopScreenSharing"
                                })
                            }),
                            t.stream && t.stream.getTracks && t.stream.getTracks().forEach(function(e) {
                                e && !e.onended && (e.onended = n)
                            }),
                            s()
                        },
                        function(e) {
                            var n = {
                                type: "error",
                                info: null
                            };
                            switch (e && (n.msg = e.name || e.code || e, e.message && (n.info = e.message), e.code && (n.info ? n.info += ". " + e.code: n.info = " " + e.code), e.constraint && (n.info ? n.info += ". Constraint: " + e.constraint: n.info = "constraint: " + e.constraint)), n.msg) {
                            case "Starting video failed":
                            case "TrackStartError":
                                if (t.videoConstraint && (delete t.videoConstraint.width, delete t.videoConstraint.height), c > 0) return void setTimeout(function() {
                                    t.init(function(e) {
                                        return s(e)
                                    },
                                    s, c - 1)
                                },
                                1);
                                n.msg = "MEDIA_OPTION_INVALID";
                                break;
                            case "DevicesNotFoundError":
                                n.msg = "DEVICES_NOT_FOUND";
                                break;
                            case "NotSupportedError":
                                n.msg = "NOT_SUPPORTED";
                                break;
                            case "PermissionDeniedError":
                            case "InvalidStateError":
                                n.msg = "PERMISSION_DENIED",
                                t.dispatchEvent({
                                    type: "accessDenied"
                                });
                                break;
                            case "PERMISSION_DENIED":
                            case "NotAllowedError":
                                t.dispatchEvent({
                                    type:
                                    "accessDenied"
                                });
                                break;
                            case "ConstraintNotSatisfiedError":
                                n.msg = "CONSTRAINT_NOT_SATISFIED";
                                break;
                            default:
                                n.msg || (n.msg = "UNDEFINED")
                            }
                            var i = "Media access ".concat(n.msg).concat(n.info ? ": " + n.info: "");
                            r.
                        default.error("[".concat(t.streamId, "] "), i),
                            s(n)
                        })
                    } else s({
                        type: "warning",
                        msg: "STREAM_HAS_NO_MEDIA_ATTRIBUTES"
                    })
                } catch(e) {
                    r.
                default.error("[".concat(t.streamId, "] Stream init: "), e),
                    s({
                        type: "error",
                        msg: e.message || e
                    })
                }
            },
            t.reloadDeviceName = function() {
                if (t.stream) {
                    if (t.stream.getVideoTracks) {
                        var e = t.stream.getVideoTracks()[0];
                        e && e.label && (t.videoName = e.label)
                    }
                    if (t.stream.getAudioTracks) {
                        var n = t.stream.getAudioTracks()[0];
                        n && n.label && (t.audioName = n.label)
                    }
                }
            },
            t.close = function() {
                var e = a.b.reportApiInvoke(null, {
                    name: "Stream.close",
                    options: arguments,
                    tag: "tracer"
                });
                if (r.
            default.debug("[".concat(t.streamId, "] Close stream with id"), t.streamId), void 0 !== t.stream) {
                    var n = t.stream.getTracks();
                    for (var i in n) n.hasOwnProperty(i) && n[i].stop();
                    t.stream = void 0
                }
                Object(f.isSafari)() && t.pc && t.pc.peerConnection && t.pc.peerConnection.removeTrack && t.pc.peerConnection.getSenders && t.pc.peerConnection.getSenders().forEach(function(e) {
                    e && (r.
                default.debug("[".concat(t.streamId, "] Remove Track"), e), t.pc.peerConnection.removeTrack(e))
                });
                t.initialized = !1,
                t._onAudioMute = void 0,
                t._onAudioUnmute = void 0,
                t._onVideoMute = void 0,
                t._onVideoUnmute = void 0,
                t.lowStream && t.lowStream.close(),
                e()
            },
            t.enableAudio = function() {
                var e, n = a.b.reportApiInvoke(t.sid, {
                    name: "Stream.enableAudio",
                    options: arguments,
                    tag: "tracer"
                });
                return r.
            default.deprecate("[".concat(t.streamId, "] Stream.enableAudio is deprecated and will be removed in the future. Use Stream.unmuteAudio instead")),
                t.userMuteAudio || r.
            default.warning("[".concat(t.streamId, "] User already enableAudio")),
                t.userMuteAudio = !1,
                n(null, e = !t.peerMuteAudio && t._unmuteAudio()),
                e
            },
            t.disableAudio = function() {
                var e = a.b.reportApiInvoke(t.sid, {
                    name: "Stream.disableAudio",
                    options: arguments,
                    tag: "tracer"
                });
                r.
            default.deprecate("[".concat(t.streamId, "] Stream.disableAudio is deprecated and will be removed in the future. Use Stream.muteAudio instead")),
                t.userMuteAudio && r.
            default.warning("[".concat(t.streamId, "] User already disableAudio")),
                t.userMuteAudio = !0;
                var n = t._muteAudio();
                return e(null, n),
                n
            },
            t.enableVideo = function() {
                var e, n = a.b.reportApiInvoke(t.sid, {
                    name: "Stream.enableVideo",
                    options: arguments,
                    tag: "tracer"
                });
                return r.
            default.deprecate("[".concat(t.streamId, "] Stream.enableVideo is deprecated and will be removed in the future. Use Stream.unmuteVideo instead")),
                t.userMuteVideo || r.
            default.warning("[".concat(t.streamId, "] User already enableVideo")),
                t.userMuteVideo = !1,
                t.lowStream && (t.lowStream.userMuteVideo = !1),
                n(null, e = !t.peerMuteVideo && t._unmuteVideo()),
                e
            },
            t.disableVideo = function() {
                var e = a.b.reportApiInvoke(t.sid, {
                    name: "Stream.disableVideo",
                    options: arguments,
                    tag: "tracer"
                });
                r.
            default.deprecate("[".concat(t.streamId, "] Stream.disableVideo is deprecated and will be removed in the future. Use Stream.muteVideo instead")),
                t.userMuteVideo && r.
            default.warning("[".concat(t.streamId, "] User already disableVideo")),
                t.userMuteVideo = !0,
                t.lowStream && (t.lowStream.userMuteVideo = !0);
                var n = t._muteVideo();
                return e(null, n),
                n
            },
            t.unmuteAudio = function() {
                var e, n = a.b.reportApiInvoke(t.sid, {
                    name: "Stream.unmuteAudio",
                    options: arguments,
                    tag: "tracer"
                });
                return t.userMuteAudio || r.
            default.warning("[".concat(t.streamId, "] User already unmuteAudio")),
                t.userMuteAudio = !1,
                n(null, e = !t.peerMuteAudio && t._unmuteAudio()),
                e
            },
            t.muteAudio = function() {
                var e = a.b.reportApiInvoke(t.sid, {
                    name: "Stream.muteAudio",
                    options: arguments,
                    tag: "tracer"
                });
                t.userMuteAudio && r.
            default.warning("[".concat(t.streamId, "] User already muteAudio")),
                t.userMuteAudio = !0;
                var n = t._muteAudio();
                return e(null, n),
                n
            },
            t.unmuteVideo = function() {
                var e, n = a.b.reportApiInvoke(t.sid, {
                    name: "Stream.unmuteVideo",
                    options: arguments,
                    tag: "tracer"
                });
                return t.userMuteVideo || r.
            default.warning("[".concat(t.streamId, "] User already unmuteVideo")),
                t.userMuteVideo = !1,
                t.lowStream && (t.lowStream.userMuteVideo = !1),
                n(null, e = !t.peerMuteVideo && t._unmuteVideo()),
                e
            },
            t.muteVideo = function() {
                var e = a.b.reportApiInvoke(t.sid, {
                    name: "Stream.muteVideo",
                    options: arguments,
                    tag: "tracer"
                });
                t.userMuteVideo && r.
            default.warning("[".concat(t.streamId, "] User already muteVideo")),
                t.userMuteVideo = !0,
                t.lowStream && (t.lowStream.userMuteVideo = !0);
                var n = t._muteVideo();
                return e(null, n),
                n
            },
            t._unmuteAudio = function() {
                return r.
            default.debug("[".concat(t.streamId, "] Unmuted audio stream with id "), t.streamId),
                t._flushAudioMixingMuteStatus(!1),
                !(!t.hasAudio() || !t.initialized || void 0 === t.stream || !0 === t.stream.getAudioTracks()[0].enabled) && (t._onAudioUnmute && t._onAudioUnmute(), t.pc && (t.pc.isAudioMute = !1), t.stream.getAudioTracks()[0].enabled = !0, !0)
            },
            t._isAudioMuted = function() {
                if (t.stream && t.hasAudio()) {
                    var e = t.stream.getAudioTracks();
                    return e.length > 0 && !e[0].enabled
                }
                return ! 1
            },
            t._muteAudio = function() {
                return r.
            default.debug("[".concat(t.streamId, "] Muted audio stream with id "), t.streamId),
                t._flushAudioMixingMuteStatus(!0),
                !!(t.hasAudio() && t.initialized && void 0 !== t.stream && t.stream.getAudioTracks()[0].enabled) && (t._onAudioMute && t._onAudioMute(), t.pc && (t.pc.isAudioMute = !0), t.stream.getAudioTracks()[0].enabled = !1, t.sid && a.b.audioSendingStopped(t.sid, {
                    succ: !0,
                    reason: "muteAudio"
                }), !0)
            },
            t._unmuteVideo = function() {
                return r.
            default.debug("[".concat(t.streamId, "] Unmuted video stream with id"), t.streamId),
                !(!t.initialized || void 0 === t.stream || !t.stream.getVideoTracks().length || !0 === t.stream.getVideoTracks()[0].enabled) && (t._onVideoUnmute && t._onVideoUnmute(), t.pc && (t.pc.isVideoMute = !1), t.stream.getVideoTracks()[0].enabled = !0, t.lowStream && t.lowStream._unmuteVideo(), !0)
            },
            t._muteVideo = function() {
                return r.
            default.debug("[".concat(t.streamId, "] Muted video stream with id"), t.streamId),
                !!(t.initialized && void 0 !== t.stream && t.stream.getVideoTracks().length && t.stream.getVideoTracks()[0].enabled) && (t._onVideoMute && t._onVideoMute(), t.pc && (t.pc.isVideoMute = !0), t.stream.getVideoTracks()[0].enabled = !1, t.lowStream && t.lowStream._muteVideo(), t.sid && a.b.videoSendingStopped(t.sid, {
                    succ: !0,
                    reason: "muteVideo"
                }), !0)
            },
            t.addTrack = function(i) {
                var o = a.b.reportApiInvoke(t.sid, {
                    name: "Stream.addTrack",
                    options: arguments,
                    tag: "tracer"
                });
                if (t.pc && t.pc.addTrack(i, t.stream), "audio" == i.kind) {
                    t._cleanupAudioMixing();
                    var r = new MediaStream;
                    t.userMuteAudio && (i.enabled = !1),
                    r.addTrack(i);
                    var s = t.stream.getVideoTracks()[0];
                    s && (r.addTrack(s), t.audio = !0, e.audio = !0),
                    t.stream = r,
                    t.audioLevelHelper = null,
                    t.player && t.player.video && (t.player.video.srcObject = t.stream)
                } else t.userMuteVideo && (i.enabled = !1),
                t.stream.addTrack(i),
                t.video = !0,
                e.video = !0;
                i.onended || (i.onended = n),
                o()
            },
            t.removeTrack = function(n) {
                var i = a.b.reportApiInvoke(t.sid, {
                    name: "Stream.removeTrack",
                    options: arguments,
                    tag: "tracer"
                });
                t.pc && t.pc.removeTrack(n, t.stream),
                t.stream.removeTrack(n),
                t._cleanupAudioMixing(),
                "audio" === n.kind ? (t.audio = !1, e.audio = !1) : (t.video = !1, e.video = !1),
                t.audioLevelHelper = null,
                "live" == n.readyState && (n.stop(), r.
            default.debug("[".concat(t.streamId, "] Track ").concat(n.kind, " Stopped"))),
                i()
            },
            t.setAudioOutput = function(e, n, i) {
                var o = a.b.reportApiInvoke(t.sid, {
                    callback: function(e, t) {
                        if (e) return i && i(e);
                        n && n(t)
                    },
                    name: "Stream.setAudioOutput",
                    options: arguments,
                    tag: "tracer"
                });
                return ee(e, 1, 255) ? (t.audioOutput = e, t.player ? void t.player.setAudioOutput(e,
                function() {
                    return o()
                },
                o) : o()) : (r.
            default.error("[".concat(t.streamId, "] setAudioOutput Invalid Parameter"), e), o(A.INVALID_PARAMETER))
            },
            t.play = function(e, n, i) {
                "function" == typeof n && (i = n, n = null),
                r.
            default.debug("[".concat(t.streamId, "] play()."), e, n);
                var o = a.b.reportApiInvoke(t.sid, {
                    name: "Stream.play",
                    options: arguments,
                    tag: "tracer",
                    callback: i
                });
                if (Q(e, "elementID"), se(n) || (se(n.fit) || K(n.fit, "fit", ["cover", "contain"]), se(n.muted) || Z(n.muted, "muted")), t.player) r.
            default.warning("[".concat(t.streamId, "] Stream.play(): Stream is already playing. Fallback to resume stream")),
                t.resume().then(function() {
                    o(null)
                }).
                catch(o);
                else {
                    t.elementID = e,
                    t.playOptions = n,
                    !t.local || t.video || t.screen ? t.player = new C({
                        id: t.getId(),
                        stream: t,
                        elementID: e,
                        options: n
                    }) : t.hasAudio() && (t.player = new C({
                        id: t.getId(),
                        stream: t,
                        elementID: e,
                        options: n
                    }));
                    var s = {
                        audio: null,
                        video: null
                    };
                    t.on("player-status-change",
                    function e(n) {
                        if (s[n.mediaType] = n, s.audio && s.video) if (t.removeEventListener("player-status-change", e), s.video.isErrorState || s.audio.isErrorState) {
                            var i = s.video.isErrorState ? s.video: s.audio;
                            o({
                                isErrorState: !0,
                                status: i.status,
                                reason: i.reason,
                                video: s.video,
                                audio: s.audio
                            })
                        } else "aborted" === s.video.status && "aborted" === s.audio.status ? o({
                            status: "aborted",
                            reason: "stop",
                            video: s.video,
                            audio: s.audio
                        }) : o(null)
                    }),
                    t.audioOutput && t.player.setAudioOutput(t.audioOutput),
                    void 0 !== t.audioLevel && t.player.setAudioVolume(t.audioLevel),
                    t._flushAudioMixingMuteStatus(!1)
                }
            },
            t.stop = function() {
                var e = a.b.reportApiInvoke(t.sid, {
                    name: "Stream.stop",
                    options: arguments,
                    tag: "tracer"
                });
                r.
            default.debug("[".concat(t.streamId, "] Stop stream player with id "), t.streamId),
                t.player ? (t.player.destroy(), delete t.player) : r.
            default.error("[".concat(t.streamId, "] Stream.stop(): Stream is not playing")),
                t._flushAudioMixingMuteStatus(!0),
                e()
            },
            t.isPlaying = function() {
                return !! t.player
            },
            t.isPaused = function() {
                return !! t.player && ( !! (t.player.video && t.player.video.paused && t.player.mediaElemExists(t.player.video)) || !!(t.player.audio && t.player.audio.paused && t.player.mediaElemExists(t.player.audio)))
            },
            t.resume = function() {
                var e, n;
                return t.player ? (t.player.video && t.player.video.play && (e = t.player.video.play()), e = e || Promise.resolve(), t.player.audio && t.player.audio.play && (n = t.player.audio.play()), n = n || Promise.resolve(), Promise.all([e, n])) : Promise.reject("NO_PLAYER_FOUND")
            },
            t.getVideoTrack = function() {
                var e = a.b.reportApiInvoke(t.sid, {
                    name: "Stream.getVideoTrack",
                    options: arguments,
                    tag: "tracer"
                });
                if (t.stream && t.stream.getVideoTracks) {
                    var n = t.stream.getVideoTracks()[0];
                    if (n) return r.
                default.info("[".concat(t.streamId, "] getVideoTrack"), n),
                    e(),
                    n
                }
                r.
            default.info("[".concat(t.streamId, "] getVideoTrack None")),
                e(null, "getVideoTrack None")
            },
            t.getAudioTrack = function() {
                var e = a.b.reportApiInvoke(t.sid, {
                    name: "Stream.getAudioTrack",
                    options: arguments,
                    tag: "tracer"
                });
                if (t.stream && t.stream.getAudioTracks) {
                    var n = t.stream.getAudioTracks()[0];
                    if (n) return r.
                default.info("[".concat(t.streamId, "] getAudioTracks"), n),
                    e(),
                    n
                }
                r.
            default.info("[".concat(t.streamId, "] getAudioTracks None")),
                e(null, "getAudioTracks None")
            },
            t._replaceMediaStreamTrack = function(e, n, i) {
                if (t.stream) {
                    if ("video" == e.kind) {
                        if (a = t.stream.getVideoTracks()[0]) return t.userMuteVideo && (e.enabled = !1),
                        t.stream.removeTrack(a),
                        t.stream.addTrack(e),
                        r.
                    default.debug("[".concat(t.streamId, "] _replaceMediaStreamTrack ").concat(e.kind, " SUCCESS")),
                        "live" == a.readyState && (a.stop(), r.
                    default.debug("[".concat(t.streamId, "] Track ").concat(a.kind, " Stopped"))),
                        n && n();
                        var o = "MEDIASTREAM_TRACK_NOT_FOUND";
                        return r.
                    default.error("[".concat(t.streamId, "] MEDIASTREAM_TRACK_NOT_FOUND ").concat(e.kind)),
                        i(o)
                    }
                    if ("audio" == e.kind) {
                        var a;
                        if (a = t.stream.getAudioTracks()[0]) {
                            t.userMuteAudio && (e.enabled = !1);
                            var s = new MediaStream;
                            s.addTrack(e);
                            var c = t.stream && t.stream.getVideoTracks()[0];
                            return c && s.addTrack(c),
                            t.stream = s,
                            t.audioLevelHelper = null,
                            t.player && t.player.video && (t.player.video.srcObject = t.stream),
                            r.
                        default.debug("[".concat(t.streamId, "] _replaceMediaStreamTrack SUCCESS")),
                            "live" == a.readyState && (a.stop(), r.
                        default.debug("[".concat(t.streamId, "] Track ").concat(a.kind, " Stopped"))),
                            n && n()
                        }
                        o = "MEDIASTREAM_TRACK_NOT_FOUND";
                        return r.
                    default.error("[".concat(t.streamId, "] MEDIASTREAM_TRACK_NOT_FOUND ").concat(e.kind)),
                        i(o)
                    }
                    o = "INVALID_TRACK_TYPE";
                    return r.
                default.error("[".concat(t.streamId, "] _replaceMediaStreamTrack ").concat(o, " ").concat(e.kind)),
                    i && i(o)
                }
                o = "NO_STREAM_FOUND";
                return r.
            default.error("[".concat(t.streamId, "] _replaceMediaStreamTrack ").concat(o)),
                i && i(o)
            },
            t.replaceTrack = function(e, i, o) {
                var s = a.b.reportApiInvoke(t.sid, {
                    callback: function(e, t) {
                        if (e) return o && o(e);
                        i && i(t)
                    },
                    name: "Stream.replaceTrack",
                    options: arguments,
                    tag: "tracer"
                });
                return e && e.kind ? (t._cleanupAudioMixing(), e.onended || (e.onended = n), t.pc && t.pc.hasSender && t.pc.hasSender(e.kind) ? void t.pc.replaceTrack(e,
                function() {
                    return r.
                default.debug("[".concat(t.streamId, "] PeerConnection.replaceTrack ").concat(e.kind, " SUCCESS")),
                    t._replaceMediaStreamTrack(e,
                    function(e) {
                        return s(null, e)
                    },
                    s)
                },
                function(n) {
                    return r.
                default.error("[".concat(t.streamId, "] PeerConnection.replaceTrack ").concat(e.kind, " Failed ").concat(n)),
                    s(n)
                }) : t._replaceMediaStreamTrack(e,
                function(e) {
                    return s(null, e)
                },
                s)) : s("INVALID_TRACK")
            },
            t.setAudioVolume = function(e) {
                var n = a.b.reportApiInvoke(t.sid, {
                    name: "Stream.setAudioVolume",
                    options: arguments,
                    tag: "tracer"
                });
                $(e, "level", 0, 100),
                t.audioLevel = e,
                t.player && t.player.setAudioVolume(e),
                n()
            },
            t.getStats = function(e, n, i) {
                var o = {
                    type: "collectStats",
                    promises: [],
                    interval: i
                };
                t.dispatchEvent(o),
                Promise.all(o.promises).then(function(n) {
                    for (var i = {},
                    o = n.length - 1; o >= 0; o--) {
                        var r = n[o];
                        S()(i, r)
                    }
                    e && setTimeout(e.bind(t, i), 0)
                }).
                catch(function(e) {
                    n && setTimeout(n.bind(t, e), 0)
                })
            },
            t._getPCStats = function(e) {
                return new Promise(function(n, i) {
                    if (!t.pc || "established" !== t.pc.state || !t.pc.getStats) {
                        return i("PEER_CONNECTION_NOT_ESTABLISHED")
                    }
                    t.pc.getStats(function(e) {
                        if (!t.pc || "established" !== t.pc.state || !t.pc.getStats) {
                            return i("PEER_CONNECTION_STATE_CHANGE")
                        }
                        var o = t.pc.isSubscriber ?
                        function(e) {
                            var t = {};
                            return e.forEach(function(e) {
                                e.id && ( - 1 === e.id.indexOf("recv") && -1 === e.id.indexOf("inbound_rtp") && -1 === e.id.indexOf("inbound-rtp") && -1 === e.id.indexOf("InboundRTP") || ("audio" === e.mediaType ? (J(t, "audioReceiveBytes", e.bytesReceived), J(t, "audioReceivePackets", e.packetsReceived), J(t, "audioReceivePacketsLost", e.packetsLost)) : (J(t, "videoReceiveBytes", e.bytesReceived), J(t, "videoReceivePacketsLost", e.packetsLost), J(t, "videoReceivePackets", e.packetsReceived), J(t, "videoReceiveFrameRate", e.googFrameRateReceived), J(t, "videoReceiveDecodeFrameRate", e.googFrameRateDecoded), J(t, "videoReceiveResolutionWidth", e.googFrameWidthReceived), J(t, "videoReceiveResolutionHeight", e.googFrameHeightReceived))))
                            }),
                            t
                        } (e) : function(e) {
                            var t = {};
                            return e.forEach(function(e) {
                                e.id && ( - 1 === e.id.indexOf("send") && -1 === e.id.indexOf("outbound_rtp") && -1 === e.id.indexOf("OutboundRTP") || ("audio" === e.mediaType ? (J(t, "audioSendBytes", e.bytesSent), J(t, "audioSendPackets", e.packetsSent), J(t, "audioSendPacketsLost", e.packetsLost)) : (J(t, "videoSendBytes", e.bytesSent), J(t, "videoSendPackets", e.packetsSent), J(t, "videoSendPacketsLost", e.packetsLost), J(t, "videoSendFrameRate", e.googFrameRateSent), J(t, "videoSendResolutionWidth", e.googFrameWidthSent), J(t, "videoSendResolutionHeight", e.googFrameHeightSent))))
                            }),
                            t
                        } (e);
                        return n(o)
                    },
                    e)
                }).then(function(e) {
                    return t.pc.isSubscriber ? (Object(f.isFireFox)() || Object(f.isSafari)()) && (e.videoReceiveResolutionHeight && "0" !== e.videoReceiveResolutionHeight || e.videoReceiveResolutionWidth && "0" !== e.videoReceiveResolutionWidth || (J(e, "videoReceiveResolutionHeight", t.videoHeight), J(e, "videoReceiveResolutionWidth", t.videoWidth))) : ((Object(f.isSafari)() || Object(f.isFireFox)()) && (e.videoSendResolutionHeight && "0" !== e.videoSendResolutionHeight || e.videoSendResolutionWidth && "0" !== e.videoSendResolutionWidth || (J(e, "videoSendResolutionHeight", t.videoHeight), J(e, "videoSendResolutionWidth", t.videoWidth))), (Object(f.isSafari)() || Object(f.isFireFox)()) && t.uplinkStats && J(e, "videoSendPacketsLost", t.uplinkStats.uplink_cumulative_lost)),
                    Promise.resolve(e)
                })
            },
            t.getAudioLevel = function() {
                if (t.audioLevelHelper) return t.audioLevelHelper.getAudioLevel();
                if (t.stream) {
                    if (0 !== t.stream.getAudioTracks().length) return t.audioLevelHelper = new G.a(t.stream),
                    t.audioLevelHelper.getAudioLevel();
                    r.
                default.warning("[".concat(t.streamId, "] can't get audioLevel beacuse no audio trace in stream"))
                } else r.
            default.warning("[".concat(t.streamId, "] can't get audioLevel beacuse no stream exist"))
            },
            t.setVideoProfile("480P"),
            t._switchVideoDevice = function(e, n, i) {
                if (e === t.cameraId) return n && n();
                var o = {
                    video: S()({},
                    t.videoConstraint, {
                        deviceId: {
                            exact: e
                        }
                    }),
                    audio: !1
                };
                r.
            default.debug("[".concat(t.streamId, "] ").concat(o)),
                H(o,
                function(o) {
                    try {
                        var r = function() {
                            t.isPlaying() && (t.stop(), t.elementID && t.play(t.elementID, t.playOptions)),
                            t.cameraId = e,
                            t.videoConstraint.deviceId = {
                                exact: e
                            },
                            t.userMuteVideo && (t.stream.getVideoTracks()[0].enabled = !1),
                            n && n()
                        };
                        Object(f.isSafari)() ? t.replaceTrack(o.getVideoTracks()[0], r, i) : (t.removeTrack(t.stream.getVideoTracks()[0]), t.addTrack(o.getVideoTracks()[0]), r())
                    } catch(e) {
                        return i && i(e)
                    }
                },
                function(e) {
                    return i && i(e)
                })
            },
            t._switchAudioDevice = function(e, n, i) {
                if (e === t.microphoneId) return n && n();
                var o = {
                    video: !1,
                    audio: S()({},
                    t.audioConstraint, {
                        deviceId: {
                            exact: e
                        }
                    })
                };
                r.
            default.debug("[".concat(t.streamId, "] "), o),
                H(o,
                function(o) {
                    var r = function() {
                        t._cleanupAudioMixing(),
                        t.userMuteAudio && (t.stream.getAudioTracks()[0].enabled = !1),
                        t.isPlaying() && (t.stop(), t.elementID && t.play(t.elementID)),
                        t.microphoneId = e,
                        t.audioConstraint.deviceId = {
                            exact: e
                        },
                        n && n()
                    };
                    try {
                        Object(f.isSafari)() ? t.replaceTrack(o.getAudioTracks()[0], r, i) : (t.removeTrack(t.stream.getAudioTracks()[0]), t.addTrack(o.getAudioTracks()[0]), r())
                    } catch(e) {
                        return i && i(e)
                    }
                },
                function(e) {
                    return i && i(e)
                })
            },
            t.switchDevice = function(e, n, i, o) {
                var s = a.b.reportApiInvoke(t.sid, {
                    callback: function(e, t) {
                        if (e) return o && o(e);
                        i && i(t)
                    },
                    name: "Stream.switchDevice",
                    options: arguments,
                    tag: "tracer"
                });
                Q(n, "deviceId");
                var c = function() {
                    return t.inSwitchDevice = !1,
                    s()
                },
                d = function(e) {
                    t.inSwitchDevice = !1,
                    r.
                default.error("[".concat(t.streamId, "] "), e),
                    s(e)
                };
                if (t.inSwitchDevice) return s("Device switch is in process.");
                if (t.inSwitchDevice = !0, !t.local) return d("Only the local stream can switch the device.");
                if (t.screen && "video" === e) return d("The device cannot be switched during screen-sharing.");
                if (t.videoSource || t.audioSource) return d("The device cannot be switched when using videoSource or audioSource.");
                if (t.lowStream) return d("The device cannot be switched when using lowstream.");
                var u = !1;
                for (var l in t.audioMixing.sounds) {
                    if (t.audioMixing.sounds[l].state !== t.audioMixing.states.IDLE) {
                        u = !0;
                        break
                    }
                }
                if (t.audioMixing.audioContextInited && u) return d("The device cannot be switched when using audio Mixing.");
                Y.getDeviceById(n,
                function() {
                    if ("video" === e) t._switchVideoDevice(n, c, d);
                    else {
                        if ("audio" !== e) return d("Invalid type.");
                        t._switchAudioDevice(n, c, d)
                    }
                },
                function() {
                    return d("The device does not exist.")
                })
            },
            t
        },
        fe = n(14),
        me = ["live", "rtc", "web", "interop", "h264_interop", "web-only"],
        ge = ["vp8", "h264"],
        ve = ["aes-128-xts", "aes-256-xts", "aes-128-ecb"],
        Se = function(e) {
            e && e.apply(this, [].slice.call(arguments, 1))
        },
        Ie = n(6),
        he = function(e) {
            var t = s();
            return t.needReconnect = !0,
            t.isTimeout = !1,
            t.isInit = !0,
            t.sendbytes = 0,
            t.recvbytes = 0,
            t.startTime = Date.now(),
            t.lastMsgTime = null,
            t.clientId = e.clientId,
            t.hostIndex = 0,
            t.requestID = 0,
            e.host instanceof Array ? t.host = e.host: t.host = [e.host],
            t.getSendBytes = function() {
                return t.sendbytes
            },
            t.getRecvBytes = function() {
                return t.recvbytes
            },
            t.getDuration = function() {
                return Math.ceil((Date.now() - t.startTime) / 1e3)
            },
            t.getURL = function() {
                return t.connection.url
            },
            t.reconnect = function() {
                t.isInit = !0,
                t.creatConnection()
            },
            t.connectNext = function() {
                t.isInit = !0,
                ++t.hostIndex,
                r.
            default.debug("[" + t.clientId + "] Gateway length:" + t.host.length + " current index:" + t.hostIndex),
                t.hostIndex >= t.host.length ? t.dispatchEvent(l({
                    type: "recover"
                })) : t.creatConnection()
            },
            t.replaceHost = function(e) {
                t.host = e || t.host,
                t.hostIndex = 0,
                t.creatConnection()
            },
            t.creatConnection = function() {
                t.needReconnect = !0,
                r.
            default.debug("[" + t.clientId + "] start connect:" + t.host[t.hostIndex]),
                t.lts = (new Date).getTime(),
                t.connection = new WebSocket("wss://" + t.host[t.hostIndex]),
                t.connection.onopen = function(e) {
                    r.
                default.debug("[" + t.clientId + "] websockect opened: " + t.host[t.hostIndex]),
                    t.needReconnect = !0,
                    t.isTimeout = !1,
                    t.isInit = !1,
                    t.sendbytes = 0,
                    t.recvbytes = 0,
                    t.startTime = Date.now(),
                    Object(Ie.d)(),
                    clearTimeout(t.timeoutCheck),
                    t.dispatchEvent(l({
                        type: "onopen",
                        event: e,
                        socket: t
                    }))
                },
                t.connection.onmessage = function(e) {
                    t.recvbytes += Object(G.e)(e.data);
                    var n = JSON.parse(e.data);
                    t.lastMsgTime = Date.now(),
                    n.hasOwnProperty("_id") ? t.dispatchEvent(l({
                        type: n._id,
                        msg: n
                    })) : n.hasOwnProperty("_type") && t.dispatchSocketEvent(l({
                        type: n._type,
                        msg: n.message
                    }))
                },
                t.connection.onclose = function(n) {
                    t.needReconnect ? t.isTimeout || t.isInit ? (r.
                default.debug("[" + t.clientId + "] websockect connect timeout"), a.b.joinGateway(e.sid, {
                        lts: t.lts,
                        succ: !1,
                        ec: "timeout",
                        addr: t.connection.url
                    }), t.connectNext()) : t.dispatchEvent(l({
                        type: "disconnect",
                        event: n
                    })) : (r.
                default.debug("[" + t.clientId + "] websockect closeed"), Se(e.onFailure, n), clearTimeout(t.timeoutCheck), t.dispatchEvent(l({
                        type: "close",
                        event: n
                    })), t.connection.onopen = void 0, t.connection.onclose = void 0, t.connection.onerror = void 0, t.connection.onmessage = void 0, t.connection = void 0)
                },
                t.connection.onerror = function(e) {},
                setTimeout(function() {
                    t.connection && t.connection.readyState != WebSocket.OPEN && (t.isTimeout = !0, t.connection.close())
                },
                5e3)
            },
            t.creatConnection(),
            t.sendMessage = function(e, n) {
                if (t.connection && t.connection.readyState == WebSocket.OPEN) {
                    var i = JSON.stringify(e);
                    t.sendbytes += Object(G.e)(i),
                    t.connection.send(i)
                } else n({
                    error: "Gateway not connected"
                })
            },
            t.disconnect = function() {
                t.needReconnect = !0,
                t.connection.close()
            },
            t.close = function() {
                t.needReconnect = !1,
                t.connection.onclose = void 0,
                t.connection.close()
            },
            t.sendSignalCommand = function(e, n) {
                e._id = "_request_" + t.requestID,
                t.requestID += 1,
                "publish_stats" !== e._type && "subscribe_stats" !== e._type && "publish_stats_low" !== e._type && t.on(e._id,
                function(i) {
                    i.msg && n && n(i.msg._result, i.msg.message)
                    delete t.dispatcher.eventListeners[e._id]
                }),
                t.sendMessage(e,
                function(e) {
                    e.reason = "NOT_CONNECTED",
                    n && n(e.reason, e)
                })
            },
            t
        },
        ye = function(e, t) {
            var n = {
                connect: function() {
                    t.host = e,
                    n.signal = he(t),
                    n.on = n.signal.on,
                    n.dispatchEvent = n.signal.dispatchEvent,
                    n.signal.on("onopen",
                    function(e) {
                        n.signal.onEvent = function(e) {
                            n.dispatchEvent(l({
                                type: e.event,
                                msg: e
                            }))
                        },
                        n.dispatchEvent(l({
                            type: "connect",
                            msg: e
                        }))
                    }),
                    n.signal.on("onError",
                    function(e) {
                        var t = e.msg;
                        onError(t.code, "error")
                    })
                },
                getLastMsgTime: function() {
                    return n.signal && n.signal.lastMsgTime
                },
                getSendBytes: function() {
                    return n.signal.getSendBytes()
                },
                getRecvBytes: function() {
                    return n.signal.getRecvBytes()
                },
                getDuration: function() {
                    return n.signal.getDuration()
                },
                disconnect: function() {
                    n.signal.disconnect()
                },
                close: function() {
                    n.signal.close()
                },
                getURL: function() {
                    return n.signal.getURL()
                },
                reconnect: function() {
                    n.signal.reconnect()
                },
                connectNext: function() {
                    n.signal.connectNext()
                },
                replaceHost: function(e) {
                    n.signal.replaceHost(e)
                },
                emitSimpleMessage: function(e, t) {
                    n.signal.sendSignalCommand(e, t)
                }
            };
            return n.connect(),
            n
        },
        _e = n(10),
        Ee = n.n(_e),
        be = n(15),
        Te = n.n(be),
        Ae = function(e, t) {
            var n = !1,
            i = 0,
            s = {
                command: "convergeAllocateEdge",
                sid: e.sid,
                appId: e.appId,
                token: e.token,
                uid: e.uid,
                cname: e.cname,
                ts: Math.floor(Date.now() / 1e3),
                version: o.VERSION,
                seq: 0,
                requestId: 1
            };
            Object(o.getParameter)("PROXY_CS").map(function(c) {
                var d = (new Date).getTime();
                Re("https://" + c + "/api/v1", s,
                function(s, u) {
                    if (s) return r.
                default.debug("[" + e.clientId + "] Request proxy server failed: ", s),
                    i++,
                    a.b.requestProxyAppCenter(e.sid, {
                        lts: d,
                        succ: !1,
                        APAddr: c,
                        workerManagerList: null,
                        ec: JSON.stringify(s),
                        response: JSON.stringify({
                            err: s,
                            res: u
                        })
                    }),
                    void(i >= Object(o.getParameter)("PROXY_CS").length && t && t("Get proxy server failed: request all failed"));
                    if (!n) if ((u = JSON.parse(u)).json_body) {
                        var l = JSON.parse(u.json_body);
                        if (r.
                    default.debug("[" + e.clientId + "] App return:", l.servers), 200 !== l.code) {
                            s = "Get proxy server failed: response code [" + l.code + "], reason [ " + l.reason + "]";
                            r.
                        default.debug("[" + e.clientId + "] " + s),
                            a.b.requestProxyAppCenter(e.sid, {
                                lts: d,
                                succ: !1,
                                APAddr: c,
                                workerManagerList: null,
                                ec: s,
                                response: JSON.stringify({
                                    err: s,
                                    res: u
                                })
                            })
                        } else {
                            n = !0;
                            var p = Oe(l.servers);
                            a.b.requestProxyAppCenter(e.sid, {
                                lts: d,
                                succ: !0,
                                APAddr: c,
                                workerManagerList: JSON.stringify(p),
                                ec: null,
                                response: JSON.stringify({
                                    res: u
                                })
                            }),
                            t && t(null, p)
                        }
                    } else r.
                default.debug("[" + e.clientId + "] Get proxy server failed: no json_body"),
                    a.b.requestProxyAppCenter(e.sid, {
                        lts: d,
                        succ: !1,
                        APAddr: c,
                        workerManagerList: null,
                        ec: "Get proxy server failed: no json_body",
                        response: JSON.stringify({
                            res: u
                        })
                    })
                })
            })
        },
        Re = function(e, t, n) {
            var i = {
                service_name: "webrtc_proxy",
                json_body: JSON.stringify(t)
            };
            Object(Ie.c)(e, i,
            function(e) {
                n && n(null, e)
            },
            function(e) {
                n && n(e)
            },
            {
                "X-Packet-Service-Type": 0,
                "X-Packet-URI": 61
            })
        },
        Ce = function(e, t, n) {
            var i = !1,
            o = 0,
            s = {
                command: "request",
                gatewayType: "http",
                appId: e.appId,
                cname: e.cname,
                uid: e.uid + "",
                sdkVersion: "2.3.1",
                sid: e.sid,
                seq: 1,
                ts: +new Date,
                requestId: 3,
                clientRequest: {
                    appId: e.appId,
                    cname: e.cname,
                    uid: e.uid + "",
                    sid: e.sid
                }
            };
            t.map(function(c) {
                var d = (new Date).getTime(); !
                function(e, t, n) {
                    Object(Ie.c)(e, t,
                    function(e) {
                        n && n(null, e)
                    },
                    function(e) {
                        n && n(e)
                    })
                } ("https://" + c + ":4000/v2/machine", s,
                function(s, u) {
                    if (s) return r.
                default.debug("[" + e.clientId + "] Request worker manager failed: ", s),
                    o++,
                    a.b.requestProxyWorkerManager(e.sid, {
                        lts: d,
                        succ: !1,
                        workerManagerAddr: c,
                        ec: JSON.stringify(s),
                        response: JSON.stringify({
                            res: u
                        })
                    }),
                    void(o >= t.length && n && n("requeet worker manager server failed: request failed"));
                    if (!i) {
                        if (! (u = JSON.parse(u)).serverResponse) return n && n("requeet worker manager server failed: serverResponse is undefined");
                        i = !0,
                        a.b.requestProxyWorkerManager(e.sid, {
                            lts: d,
                            succ: !0,
                            workerManagerAddr: c,
                            ec: JSON.stringify(s),
                            response: JSON.stringify({
                                res: u
                            })
                        }),
                        n && n(null, {
                            address: c,
                            serverResponse: u.serverResponse
                        })
                    }
                })
            })
        },
        Oe = function(e) {
            if (!e || [] instanceof Array == !1) return [];
            var t = [];
            return e.forEach(function(e) {
                var n;
                e.address && e.tcp ? (e.address.match(/^[\.\:\d]+$/) ? n = "".concat(e.address.replace(/[^\d]/g, "-"), ".edge.agora.io") : (r.
            default.info("[" + joinInfo.clientId + "] " + "Cannot recognized as IP address ".concat(e.address, ". Used As Host instead")), n = "".concat(e.address, ":").concat(e.tcp)), t.push(n)) : r.
            default.error("[" + joinInfo.clientId + "] Invalid address format ", e)
            }),
            t
        },
        we = function(e, t) {
            var n = S()({},
            e),
            i = Object(o.getParameter)("WEBCS_DOMAIN").concat(Object(o.getParameter)("WEBCS_DOMAIN_BACKUP_LIST")),
            r = [],
            a = !1; (i = i.map(function(e) {
                return n.proxyServer ? "https://".concat(n.proxyServer, "/ap/?url=").concat(e + "/api/v1") : "https://".concat(e, "/api/v1")
            })).map(function(e) { !
                function(e, t, n) {
                    var i = {
                        flag: 64,
                        cipher_method: 0,
                        timeout: 1e3,
                        features: t
                    };
                    Object(Ie.c)(e, i,
                    function(e) {
                        try {
                            var t = JSON.parse(e);
                            n && n(null, t)
                        } catch(e) {
                            n && n(e)
                        }
                        n && n(null, e)
                    },
                    function(e) {
                        n && n(e)
                    },
                    {
                        "X-Packet-Service-Type": 0,
                        "X-Packet-URI": 54
                    })
                } (e, n,
                function(e, n) {
                    a || (e ? (r.push(e), r.length >= i.length && t && t("ALL_REQUEST_FAILED")) : (a = !0, t && t(null, n)))
                })
            })
        },
        Ne = {},
        De = function(e, t, n, i) {
            var o = (new Date).getTime(),
            s = "";
            t.multiIP && t.multiIP.gateway_ip && (s = {
                vocs_ip: [t.multiIP.uni_lbs_ip],
                vos_ip: [t.multiIP.gateway_ip]
            });
            var c = {
                flag: 4,
                ts: +new Date,
                key: t.appId,
                cname: t.cname,
                sid: t.sid,
                detail: {},
                uid: t.uid || 0
            };
            s && (c.detail[5] = JSON.stringify(s)),
            Object(Ie.c)(e + "".concat( - 1 === e.indexOf("?") ? "?": "&", "action=wrtc_gateway"), c,
            function(s) {
                try {
                    var c = JSON.parse(s).res,
                    d = c.code
                } catch(e) {
                    var u = "requestChooseServer failed with unexpected body " + s;
                    return r.
                default.error("[" + joinInfo.clientId + "]", u),
                    i(u)
                }
                if (d) {
                    var l = y[c.code] || d;
                    return a.b.joinChooseServer(t.sid, {
                        lts: o,
                        succ: !1,
                        csAddr: e,
                        serverList: null,
                        ec: l
                    }),
                    i("Get server node failed [" + l + "]", e, l)
                }
                var p = [],
                f = [".agora.io", ".agoraio.cn"],
                m = 0;
                if (e.indexOf(f[1]) > -1 && (m = 1), c.addresses.forEach(function(e) {
                    var t;
                    e.ip && e.port ? (e.ip.match(/^[\.\:\d]+$/) ? t = "webrtc-".concat(e.ip.replace(/[^\d]/g, "-")).concat(f[m++%f.length], ":").concat(e.port) : (r.
                default.info("[" + joinInfo.clientId + "] " + "Cannot recognized as IP address ".concat(e.ip, ". Used As Host instead")), t = "".concat(e.ip, ":").concat(e.port)), p.push(t)) : r.
                default.error("[" + joinInfo.clientId + "] Invalid address format ", e)
                }), !p.length) {
                    r.
                default.error("[" + joinInfo.clientId + "] Empty Address response", c);
                    l = "EMPTY_ADDRESS_RESPONSE";
                    return a.b.joinChooseServer(t.sid, {
                        lts: o,
                        succ: !1,
                        csAddr: e,
                        serverList: null,
                        ec: l
                    }),
                    i("Get server node failed [" + l + "]", e, l)
                }
                var g = {
                    gateway_addr: p,
                    uid: c.uid,
                    cid: c.cid,
                    uni_lbs_ip: c.detail
                };
                return n(g, e)
            },
            function(e, n) {
                "timeout" === e.type ? (a.b.joinChooseServer(t.sid, {
                    lts: o,
                    succ: !1,
                    csAddr: n,
                    serverList: null,
                    ec: "timeout"
                }), i("Connect choose server timeout", n)) : a.b.joinChooseServer(t.sid, {
                    lts: o,
                    succ: !1,
                    csAddr: n,
                    serverList: null,
                    ec: "server_wrong"
                })
            },
            {
                "X-Packet-Service-Type": 0,
                "X-Packet-URI": 44
            })
        },
        ke = function(e, t, n) {
            var i = !1,
            s = null,
            c = 1,
            d = 1,
            u = null,
            l = e.clientId;
            Ne[l] = !0;
            var p = function t(n, d) {
                if (!i) {
                    var p = !1,
                    m = !1,
                    g = [],
                    v = f.getBrowserInfo() || {};
                    we({
                        device: v.name,
                        system: v.os,
                        vendor: e.appId,
                        version: o.VERSION,
                        cname: e.cname,
                        sid: e.sid,
                        session_id: Object(a.a)(),
                        detail: "",
                        proxyServer: n
                    },
                    function(t, n) {
                        m = !0;
                        try {
                            var i = Object.keys(n.test_tags)[0],
                            o = JSON.parse(n.test_tags[i]);
                            u = o[1]
                        } catch(e) {
                            u = null
                        }
                        a.b.reportApiInvoke(e.sid, {
                            name: "_config-distribute-request",
                            options: {
                                err: t,
                                res: n
                            }
                        })(),
                        p && d && d(g, u)
                    }),
                    function(e, t, n) {
                        for (var i = (new Date).getTime(), s = !1, c = !0, d = function(n, o) {
                            if (s) a.b.joinChooseServer(e.sid, {
                                lts: i,
                                succ: !0,
                                csAddr: o,
                                serverList: n.gateway_addr,
                                cid: n.cid + "",
                                uid: n.uid + "",
                                ec: null
                            },
                            !1);
                            else {
                                if (clearTimeout(g), s = !0, r.
                            default.debug("[" + e.clientId + "] Get gateway address:", n.gateway_addr), e.proxyServer) {
                                    for (var c = n.gateway_addr,
                                    d = 0; d < c.length; d++) {
                                        var u = c[d].split(":");
                                        n.gateway_addr[d] = e.proxyServer + "/ws/?h=" + u[0] + "&p=" + u[1]
                                    }
                                    r.
                                default.debug("[" + e.clientId + "] Get gateway address:", n.gateway_addr)
                                }
                                t(n),
                                a.b.joinChooseServer(e.sid, {
                                    lts: i,
                                    succ: !0,
                                    csAddr: o,
                                    serverList: n.gateway_addr,
                                    cid: n.cid + "",
                                    uid: n.uid + "",
                                    ec: null
                                },
                                !0)
                            }
                        },
                        u = function(t, i, o) {
                            c && (r.
                        default.error("[" + e.clientId + "]", t, i, o), o && -1 === b.indexOf(o) && (c = !1, n(o)))
                        },
                        l = Object(o.getParameter)("WEBCS_DOMAIN"), p = 0; p < l.length; ++p) {
                            var f;
                            if ("string" == typeof l[p]) {
                                var m = l[p];
                                f = e.proxyServer ? "https://".concat(e.proxyServer, "/ap/?url=").concat(m + "/api/v1") : "https://".concat(m, "/api/v1"),
                                r.
                            default.debug("[" + e.clientId + "] " + "Connect to choose_server: ".concat(f)),
                                De(f, e, d, u)
                            } else r.
                        default.error("[" + e.clientId + "] Invalid Host", l[p])
                        }
                        var g = setTimeout(function() {
                            if (!s) for (var t = Object(o.getParameter)("WEBCS_DOMAIN_BACKUP_LIST"), n = 0; n < t.length; ++n) if ("string" == typeof t[n]) {
                                var i = t[n];
                                f = e.proxyServer ? "https://".concat(e.proxyServer, "/ap/?url=").concat(i + "/api/v1") : "https://".concat(i, "/api/v1"),
                                r.
                            default.debug("[" + e.clientId + "] " + "Connect to backup_choose_server: ".concat(f)),
                                De(f, e, d, u)
                            } else r.
                        default.error("[" + e.clientId + "] Invalid Host", t[n])
                        },
                        1e3);
                        setTimeout(function() { ! s && c && n()
                        },
                        Object(o.getParameter)("WEBCS_BACKUP_CONNECT_TIMEOUT"))
                    } (e,
                    function(e) {
                        i = !0,
                        p = !0,
                        g = e,
                        clearTimeout(s),
                        m && d && d(g, u)
                    },
                    function(i) {
                        i ? r.
                    default.info("[" + e.clientId + "] Join failed: " + i) : Ne[l] && (r.
                    default.debug("[" + e.clientId + "] Request gateway list will be restart in " + c + "s"), s = setTimeout(function() {
                            t(n, d)
                        },
                        1e3 * c), c = c >= 3600 ? 3600 : 2 * c)
                    })
                }
            };
            e.useProxyServer ?
            function n() { !
                function(e, t) {
                    Ae(e,
                    function(n, i) {
                        if (n) return t && t(n);
                        r.
                    default.debug("[" + e.clientId + "] getProxyServerList: ", i),
                        Ce(e, i, t)
                    })
                } (e,
                function(i, o) {
                    if (i) {
                        if (r.
                    default.debug("[" + e.clientId + "]", i), !Ne[l]) return;
                        return r.
                    default.debug("[" + e.clientId + "] Request proxy will be restart in " + d + "s"),
                        s = setTimeout(function() {
                            n()
                        },
                        1e3 * d),
                        void(d = d >= 3600 ? 3600 : 2 * d)
                    }
                    clearTimeout(s);
                    var c = o.address;
                    e.proxyServer = c,
                    e.turnServer = {
                        url: o.address,
                        tcpport: o.serverResponse.tcpport || "3433",
                        udpport: o.serverResponse.udpport || "3478",
                        username: o.serverResponse.username || "test",
                        credential: o.serverResponse.password || "111111",
                        forceturn: !0
                    },
                    e.turnServer.tcpport += "",
                    e.turnServer.udpport += "",
                    a.b.setProxyServer(c),
                    r.
                default.setProxyServer(c),
                    p(c, t)
                })
            } () : p(null, t)
        },
        Me = function(e, t) {
            var n = Date.now(),
            i = {
                sid: t.sid,
                opid: 10,
                appid: t.appId,
                string_uid: t.stringUid
            };
            return new Promise(function(o, s) {
                Object(Ie.c)(e + "".concat( - 1 === e.indexOf("?") ? "?": "&", "action=stringuid"), i,
                function(c) {
                    try {
                        var d = JSON.parse(c),
                        u = d.code
                    } catch(o) {
                        var l = "requestUserAccount failed with unexpected body " + c;
                        return r.
                    default.error("[" + t.clientId + "]", l),
                        s({
                            retryable: !0,
                            info: l,
                            url: e
                        }),
                        void a.b.reqUserAccount(i.sid, {
                            lts: n,
                            success: !1,
                            serverAddress: e,
                            stringUid: i.stringUid,
                            uid: null,
                            extend: c,
                            errorCode: "BODY_NOT_JSON"
                        })
                    }
                    if (u) {
                        var p = E[d.code % 1e4] || "REQ_ACCOUNT_ERR_".concat(u);
                        return a.b.reqUserAccount(i.sid, {
                            lts: n,
                            success: !1,
                            serverAddress: e,
                            stringUid: i.stringUid,
                            uid: null,
                            errorCode: p,
                            extend: i
                        }),
                        s({
                            retryable: !1,
                            info: l = "Get String Uid Failed [" + p + "]",
                            url: e,
                            error: p
                        })
                    }
                    var f = d.uid;
                    if (! (f > 0 && f < Math.pow(2, 32))) {
                        r.
                    default.error("[" + t.clientId + "] " + "Invalid Uint Uid ".concat(t.stringUid, " => ").concat(f), d);
                        p = "INVALID_UINT_UID_".concat(f);
                        return a.b.reqUserAccount(i.sid, {
                            lts: n,
                            success: !1,
                            serverAddress: e,
                            stringUid: i.stringUid,
                            uid: null,
                            errorCode: p,
                            extend: i
                        }),
                        s({
                            retryable: !0,
                            error: p,
                            info: "Get String Uid failed [" + p + "]",
                            url: e
                        })
                    }
                    o({
                        uid: f,
                        url: e
                    }),
                    a.b.reqUserAccount(i.sid, {
                        lts: n,
                        success: !0,
                        serverAddress: e,
                        stringUid: i.stringUid,
                        uid: f,
                        errorCode: null,
                        extend: i
                    })
                },
                function(e, t) {
                    if ("timeout" === e.type) {
                        var o = "USER_ACCOUNT_TIMEOUT";
                        a.b.reqUserAccount(i.sid, {
                            lts: n,
                            success: !1,
                            serverAddress: t,
                            stringUid: i.stringUid,
                            uid: null,
                            errorCode: o,
                            extend: i
                        }),
                        s({
                            retryable: !0,
                            info: o,
                            url: t
                        })
                    } else {
                        var r = "USER_ACCOUNT_SERVER_WRONG_".concat(e.type);
                        a.b.reqUserAccount(i.sid, {
                            lts: n,
                            success: !1,
                            serverAddress: t,
                            stringUid: i.stringUid,
                            uid: null,
                            errorCode: r,
                            extend: i
                        }),
                        s({
                            retryable: !0,
                            info: r,
                            url: t
                        })
                    }
                },
                {
                    "X-Packet-Service-Type": 0,
                    "X-Packet-URI": 72
                })
            })
        },
        Le = function(e) {
            Date.now();
            var t, n = Object(o.getParameter)("ACCOUNT_REGISTER"),
            a = !1,
            s = Object(o.getParameter)("ACCOUNT_REGISTER_RETRY_TIMEOUT"),
            c = null,
            d = null,
            u = new Promise(function() {
                var u = Te()(Ee.a.mark(function u(l, p) {
                    var f, m, g;
                    return Ee.a.wrap(function(u) {
                        for (;;) switch (u.prev = u.next) {
                        case 0:
                            c = l,
                            d = p,
                            t = 0;
                        case 3:
                            if (! (t < Object(o.getParameter)("ACCOUNT_REGISTER_RETRY_COUNT_MAX"))) {
                                u.next = 33;
                                break
                            }
                            if (!a) {
                                u.next = 6;
                                break
                            }
                            return u.abrupt("return");
                        case 6:
                            return f = n[t % n.length],
                            m = e.proxyServer ? "https://".concat(e.proxyServer, "/ap/?url=").concat(n[i] + "/api/v1") : "https://".concat(f, "/api/v1"),
                            u.prev = 8,
                            u.delegateYield(Ee.a.mark(function t() {
                                var n;
                                return Ee.a.wrap(function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2,
                                        Me(m, e);
                                    case 2:
                                        if (n = t.sent, !a) {
                                            t.next = 5;
                                            break
                                        }
                                        return t.abrupt("return", {
                                            v: void 0
                                        });
                                    case 5:
                                        a = !0,
                                        setTimeout(function() {
                                            r.
                                        default.debug("Get UserAccount Successfully", n),
                                            c(n)
                                        },
                                        0);
                                    case 7:
                                    case "end":
                                        return t.stop()
                                    }
                                },
                                t, this)
                            })(), "t0", 10);
                        case 10:
                            if (g = u.t0, "object" !== q()(g)) {
                                u.next = 13;
                                break
                            }
                            return u.abrupt("return", g.v);
                        case 13:
                            u.next = 30;
                            break;
                        case 15:
                            if (u.prev = 15, u.t1 = u.
                            catch(8), !a) {
                                u.next = 19;
                                break
                            }
                            return u.abrupt("return");
                        case 19:
                            if (!u.t1.retryable) {
                                u.next = 27;
                                break
                            }
                            return (s = Math.ceil(s * Object(o.getParameter)("ACCOUNT_REGISTER_RETRY_RATIO"))) > Object(o.getParameter)("ACCOUNT_REGISTER_RETRY_TIMEOUT_MAX") && (s = Object(o.getParameter)("ACCOUNT_REGISTER_RETRY_TIMEOUT_MAX")),
                            r.
                        default.error("".concat(u.t1.info, " ").concat(u.t1.url, " Will Fetch User Account in ").concat(s / 1e3, " seconds")),
                            u.next = 25,
                            new Promise(function(e) {
                                setTimeout(e, s)
                            });
                        case 25:
                            u.next = 30;
                            break;
                        case 27:
                            r.
                        default.error("Get UserAccount Error: ".concat(u.t1.info, " ").concat(u.t1.url), u.t1.error),
                            a = !0,
                            d(u.t1);
                        case 30:
                            t++,
                            u.next = 3;
                            break;
                        case 33:
                        case "end":
                            return u.stop()
                        }
                    },
                    u, this, [[8, 15]])
                }));
                return function(e, t) {
                    return u.apply(this, arguments)
                }
            } ());
            return u.cancel = function() {
                a || (a = !0, d({
                    info: "Request Cancelled",
                    retryable: !1
                }))
            },
            u.isFinished = function() {
                return a
            },
            u
        },
        Pe = {
            ERR_NO_VOCS_AVAILABLE: "tryNext",
            ERR_NO_VOS_AVAILABLE: "tryNext",
            ERR_JOIN_CHANNEL_TIMEOUT: "tryNext",
            WARN_REPEAT_JOIN: "quit",
            ERR_JOIN_BY_MULTI_IP: "recover",
            WARN_LOOKUP_CHANNEL_TIMEOUT: "tryNext",
            WARN_OPEN_CHANNEL_TIMEOUT: "tryNext",
            ERR_VOM_SERVICE_UNAVAILABLE: "tryNext",
            ERR_TOO_MANY_USERS: "tryNext",
            ERR_MASTER_VOCS_UNAVAILABLE: "tryNext",
            ERR_INTERNAL_ERROR: "tryNext",
            notification_test_recover: "recover",
            notification_test_tryNext: "tryNext",
            notification_test_retry: "retry"
        },
        xe = {
            googResidualEchoLikelihood: "A_rel",
            googResidualEchoLikelihoodRecentMax: "A_rem",
            googTypingNoiseState: "A_tns",
            totalSamplesDuration: "A_sd",
            googAdaptationChanges: "A_ac",
            googBandwidthLimitedResolution: "A_blr",
            googCpuLimitedResolution: "A_clr",
            googEncodeUsagePercent: "A_eup",
            googHasEnteredLowResolution: "A_helr",
            googActualEncBitrate: "A_aeb",
            googAvailableReceiveBandwidth: "A_arb",
            googAvailableSendBandwidth: "A_asb",
            googRetransmitBitrate: "A_rb",
            googTargetEncBitrate: "A_teb",
            googCaptureStartNtpTimeMs: "A_csnt",
            googPreemptiveExpandRate: "A_per",
            googPreferredJitterBufferMs: "A_pjbm",
            googSecondaryDecodedRate: "A_sder",
            googSecondaryDiscardedRate: "A_sdir",
            googSpeechExpandRate: "A_ser",
            googFrameHeightReceived: "A_fhr",
            googInterframeDelayMax: "A_ifdm",
            googMinPlayoutDelayMs: "A_mpdm",
            aecDivergentFilterFraction: "A_dff",
            codecImplementationName: "A_cin",
            googEchoCancellationReturnLoss: "A_ecl",
            googEchoCancellationReturnLossEnhancement: "A_ece"
        },
        Ve = {};
        for (var Ue in xe) {
            var Fe = xe[Ue];
            xe[Fe] && console.error("Key Conflict: ".concat(Ue)),
            Ve[Fe] = Ue
        }
        var Be = function(e) {
            return xe[e] || e
        },
        je = function e(t) {
            var n = !1,
            i = function(e) {
                return {
                    _type: "control",
                    message: e
                }
            },
            c = function(e) {
                var t = {};
                return Object.keys(e).forEach(function(n) {
                    t[Be(n)] = e[n]
                }),
                {
                    _type: "subscribe_related_stats",
                    options: t
                }
            },
            m = function(e, t, n) {
                return {
                    _type: "publish",
                    options: e,
                    sdp: t,
                    p2pid: n
                }
            },
            g = e.DISCONNECTED,
            v = e.CONNECTING,
            I = e.CONNECTED,
            h = e.DISCONNECTING,
            y = g,
            E = s();
            Object.defineProperty(E, "state", {
                set: function(t) {
                    var n = y;
                    y = t,
                    n !== t && E.dispatchEvent({
                        type: "connection-state-change",
                        prevState: e.connetionStateMap[n],
                        curState: e.connetionStateMap[t]
                    })
                },
                get: function() {
                    return y
                }
            }),
            E.socket = void 0,
            E.state = g,
            E.mode = t.mode,
            E.role = t.role,
            E.codec = t.codec,
            E.config = {},
            E.timers = {},
            E.timer_counter = {},
            E.localStreams = {},
            E.remoteStreams = {},
            E.attemps = 1,
            E.p2p_attemps = 1,
            E.audioLevel = {},
            E.activeSpeaker = void 0,
            E.reconnectMode = "retry",
            E.rejoinAttempt = 0,
            E.hasChangeBGPAddress = !1,
            E.traffic_stats = {},
            E.clientId = t.clientId,
            E.pingpongCounter = 0,
            E.p2ps = new Map,
            E.liveStreams = new Map,
            E.injectLiveStreams = new Map,
            E.remoteStreamsInChannel = new Set,
            E.inChannelInfo = {
                joinAt: null,
                duration: 0
            };
            var b = Se;
            E.p2pCounter = Object(G.g)(1e5),
            E.generateP2PId = function() {
                return++E.p2pCounter
            },
            E.audioVolumeIndication = {
                enabled: !1,
                sortedAudioVolumes: [],
                smooth: 3,
                interval: 2e3
            },
            E.remoteVideoStreamTypes = {
                REMOTE_VIDEO_STREAM_HIGH: 0,
                REMOTE_VIDEO_STREAM_LOW: 1,
                REMOTE_VIDEO_STREAM_MEDIUM: 2
            },
            E.streamFallbackTypes = {
                STREAM_FALLBACK_OPTION_DISABLED: 0,
                STREAM_FALLBACK_OPTION_VIDEO_STREAM_LOW: 1,
                STREAM_FALLBACK_OPTION_AUDIO_ONLY: 2
            },
            E.configPublisher = function(e) {
                E.config = e
            },
            E.getGatewayInfo = function(e, t) {
                w({
                    _type: "gateway_info"
                },
                e, t)
            },
            E.setClientRole = function(e, t) {
                r.
            default.debug("[".concat(E.clientId, "] setClientRole to ").concat(e));
                var n = a.b.reportApiInvoke(E.joinInfo.sid, {
                    name: "_setClientRole",
                    callback: t
                });
                w(function(e) {
                    return {
                        _type: "set_client_role",
                        message: e
                    }
                } (e),
                function() {
                    E.role = e,
                    E.dispatchEvent({
                        type: "client-role-changed",
                        role: e
                    }),
                    n && n(null, {
                        role: e
                    })
                },
                function(t) {
                    var i = t && t.code ? t.code: 0,
                    o = T[i];
                    if ("ERR_ALREADY_IN_USE" === o) return n && n(null);
                    o || (o = "UNKNOW_ERROR_".concat(i)),
                    r.
                default.error("set Client role error to " + e + ": " + o),
                    n && n(o)
                })
            },
            E.join = function(e, n, i, s) {
                e.useProxyServer && (E.hasChangeBGPAddress = !0);
                var c = (new Date).getTime(),
                d = e.uid;
                if (E.inChannelInfo.joinAt && (E.inChannelInfo.duration += c - E.inChannelInfo.joinAt), E.inChannelInfo.joinAt = c, E.state !== v) return r.
            default.error("[".concat(E.clientId, "] GatewayClient.join Failed: state "), E.state),
                s && s(A.INVALID_OPERATION),
                void a.b.joinGateway(e.sid, {
                    lts: c,
                    succ: !1,
                    ec: A.INVALID_OPERATION,
                    addr: null
                });
                if (null != d && parseInt(d) !== d) return r.
            default.error("[".concat(E.clientId, "] Input uid is invalid")),
                E.state = g,
                s && s(A.INVALID_PARAMETER),
                void a.b.joinGateway(e.sid, {
                    lts: c,
                    succ: !1,
                    ec: A.INVALID_PARAMETER,
                    addr: null
                });
                var u = We.register(E, {
                    uid: d,
                    cname: e && e.cname
                });
                if (u) return E.state = g,
                s && s(u),
                void a.b.joinGateway(e.sid, {
                    lts: c,
                    succ: !1,
                    ec: u,
                    addr: null
                });
                E.joinInfo = S()({},
                e),
                E.uid = d,
                E.key = n,
                E.pingpongCounter = 0,
                O(e,function(n) {
                    var d, u, p;
                    E.state = I,
                    r.default.debug("[".concat(E.clientId, "] Connected to gateway server")),
                    E.pingTimer = setInterval(function() {
                        var e = Object(o.getParameter)("PING_PONG_TIME_OUT");
                        if (++E.pingpongCounter >= e) {
                            var t = Date.now();
                            r.
                        default.warning("PINGPONG Timeout. Last Socket Message: ".concat(t - E.socket.getLastMsgTime(), "ms")),
                            E.socket && E.socket.getLastMsgTime() && t - E.socket.getLastMsgTime() > Object(o.getParameter)("WEBSOCKET_TIMEOUT_MIN") && (E.pingpongCounter = 0, E.socket.close(), E.socket.dispatchEvent(l({
                                type: "disconnect",
                                event: {
                                    msg: "PING_PONG_TIME_OUT"
                                }
                            })))
                        }
                        var n = Date.now();
                        w({
                            _type: "ping"
                        },
                        function() {
                            E.pingpongCounter = 0;
                            var e = Date.now() - n;
                            w({
                                _type: "signal_stats",
                                message: {
                                    pingpongElapse: e
                                }
                            },
                            function() {},
                            function(e) {})
                        },
                        function(e) {})
                    },
                    3e3),
                    w((d = {
                        role: E.role
                    },
                    u = d.role, p = {
                        appId: t.appId,
                        key: E.key,
                        channel: E.joinInfo.cname,
                        uid: E.uid,
                        version: o.VERSION,
                        browser: navigator.userAgent,
                        mode: E.mode,
                        codec: E.codec,
                        role: u,
                        config: E.config,
                        processId: Object(a.a)()
                    },
                    E.joinInfo.hasOwnProperty("stringUid") && (p.stringUid = E.joinInfo.stringUid), {
                        _type: "join1",
                        message: p
                    }),
                    function(t) {
                        if (a.b.joinGateway(e.sid, {
                            lts: c,
                            succ: !0,
                            ec: null,
                            vid: t.vid,
                            addr: E.socket.getURL()
                        }), E.rejoinAttempt = 0, i && i(t.uid), E.dispatchEvent({
                            type: "join"
                        }), E.leaveOnConnected) {
                            r.
                        default.info("[".concat(E.clientId, "] Calling Leave() once joined"));
                            var n = E.leaveOnConnected;
                            E.leaveOnConnected = null,
                            E.leave(n.onSuccess, n.onFailure)
                        }
                    },
                    function(t) {
                        if (r.default.error("[".concat(E.clientId, "] User join failed [").concat(t, "]")), Pe[t] && E.rejoinAttempt < 4) {
                            if (E._doWithAction(Pe[t], i, s), E.leaveOnConnected) {
                                r.
                            default.error("[".concat(E.clientId, "] Calling Leave() once joined: Join Failed"));
                                var n = E.leaveOnConnected;
                                E.leaveOnConnected = null,
                                n.onFailure(A.JOIN_CHANNEL_FAILED)
                            }
                        } else s && s(t);
                        a.b.joinGateway(e.sid, {
                            lts: c,
                            succ: !1,
                            ec: t,
                            addr: E.socket.getURL()
                        })
                    })
                },
                function(t) {
                    r.
                default.error("[".concat(E.clientId, "] User join failed [").concat(t, "]")),
                    s && s(t),
                    a.b.joinGateway(e.sid, {
                        lts: c,
                        succ: !1,
                        ec: t,
                        addr: E.socket.getURL()
                    })
                }),
                clearInterval(E.timers.trafficStats),
                E.timers.trafficStats = setInterval(function() {
                    w({
                        _type: "traffic_stats"
                    },
                    function(e) {
                        E.traffic_stats = e;
                        var t = E.joinInfo.stringUid,
                        n = E.localStreams[d] || E.localStreams[t];
                        n && (n.traffic_stats = {
                            access_delay: e.access_delay
                        }),
                        e.peer_delay && e.peer_delay.forEach(function(t) {
                            var n = E.remoteStreams[t.peer_uid];
                            n && (n.traffic_stats = {
                                access_delay: e.access_delay,
                                e2e_delay: t.e2e_delay,
                                audio_delay: t.audio_delay,
                                video_delay: t.video_delay
                            })
                        })
                    })
                },
                3e3),
                E.resetAudioVolumeIndication()
            },
            E.leave = function(e, t) {
                switch (E.state) {
                case g:
                    return r.
                default.debug("[".concat(E.clientId, "] Client Already in DISCONNECTED status")),
                    void b(e);
                case h:
                    return r.
                default.error("[".concat(E.clientId, "] Client Already in DISCONNECTING status")),
                    void b(t, A.INVALID_OPERATION);
                case v:
                    return E.leaveOnConnected ? (r.
                default.error("[".concat(E.clientId, "] Client.leave() already called")), void b(t, A.INVALID_OPERATION)) : (r.
                default.debug("[".concat(E.clientId, "] Client connecting. Waiting for Client Fully Connected(And leave)")), void(E.leaveOnConnected = {
                        onSuccess: e,
                        onFailure: t
                    }))
                }
                var n = We.unregister(E);
                if (n) r.
            default.error("[".concat(E.clientId, "] "), n);
                else {
                    for (var i in E.state = h,
                    clearInterval(E.pingTimer), E.timers) E.timers.hasOwnProperty(i) && clearInterval(E.timers[i]);
                    for (var i in E.inChannelInfo.joinAt && (E.inChannelInfo.duration += Date.now() - E.inChannelInfo.joinAt, E.inChannelInfo.joinAt = null), w({
                        _type: "leave"
                    },
                    function(t) {
                        E.socket.close(),
                        E.socket = void 0,
                        r.
                    default.info("[".concat(E.clientId, "] Leave channel success")),
                        E.state = g,
                        e && e(t)
                    },
                    function(e) {
                        r.
                    default.error("[".concat(E.clientId, "] Leave Channel Failed"), e),
                        E.state = I,
                        t && t(e)
                    }), E.localStreams) if (E.localStreams.hasOwnProperty(i)) {
                        var o = E.localStreams[i];
                        delete E.localStreams[i],
                        void 0 !== o.pc && (o.pc.close(), o.pc = void 0)
                    }
                    k()
                }
            },
            E.publish = function(e, t, n, o) {
                var s = (new Date).getTime(),
                c = !1;
                if (e.publishLTS = s, "object" !== q()(e) || null === e) return r.
            default.error("[".concat(E.clientId, "] Invalid local stream")),
                o && o(A.INVALID_LOCAL_STREAM),
                void a.b.publish(E.joinInfo.sid, {
                    lts: s,
                    succ: !1,
                    audioName: e.hasAudio() && e.audioName,
                    videoName: e.hasVideo() && e.videoName,
                    screenName: e.hasScreen() && e.screenName,
                    ec: A.INVALID_LOCAL_STREAM
                });
                if (null === e.stream && void 0 === e.url) return r.
            default.error("[".concat(E.clientId, "] Invalid local media stream")),
                o && o(A.INVALID_LOCAL_STREAM),
                void a.b.publish(E.joinInfo.sid, {
                    lts: s,
                    succ: !1,
                    audioName: e.hasAudio() && e.audioName,
                    videoName: e.hasVideo() && e.videoName,
                    screenName: e.hasScreen() && e.screenName,
                    ec: A.INVALID_LOCAL_STREAM
                });
                if (E.state !== I) return r.
            default.error("[".concat(E.clientId, "] User is not in the session")),
                o && o(A.INVALID_OPERATION),
                void a.b.publish(E.joinInfo.sid, {
                    lts: s,
                    succ: !1,
                    audioName: e.hasAudio() && e.audioName,
                    videoName: e.hasVideo() && e.videoName,
                    screenName: e.hasScreen() && e.screenName,
                    ec: A.INVALID_OPERATION
                });
                var d = e.getAttributes() || {};
                if (e.local && void 0 === E.localStreams[e.getId()] && (e.hasAudio() || e.hasVideo() || e.hasScreen())) {
                    var l = E.generateP2PId();
                    if (E.p2ps.set(l, e), e.p2pId = l, void 0 !== e.url) N(m({
                        state: "url",
                        audio: e.hasAudio(),
                        video: e.hasVideo(),
                        attributes: e.getAttributes(),
                        mode: E.mode
                    },
                    e.url),
                    function(t, n) {
                        "success" === t ? (e.getUserId() !== n && e.setUserId(n), E.localStreams[n] = e, e.onClose = function() {
                            E.unpublish(e)
                        }) : r.
                    default.error("[".concat(E.clientId, "] Publish local stream failed"), t)
                    });
                    else {
                        E.localStreams[e.getId()] = e,
                        e.connectionSpec = {
                            callback: function(d) {
                                r.
                            default.debug("[".concat(E.clientId, "] SDP exchange in publish : send offer --  "), JSON.parse(d)),
                                N(m({
                                    state: "offer",
                                    id: e.getId(),
                                    audio: e.hasAudio(),
                                    video: e.hasVideo() || e.hasScreen(),
                                    attributes: e.getAttributes(),
                                    streamType: t.streamType,
                                    dtx: e.DTX,
                                    hq: e.highQuality,
                                    lq: e.lowQuality,
                                    stereo: e.stereo,
                                    speech: e.speech,
                                    mode: E.mode,
                                    codec: E.codec,
                                    p2pid: l,
                                    turnip: E.joinInfo.turnServer.url,
                                    turnport: Number(E.joinInfo.turnServer.udpport),
                                    turnusername: E.joinInfo.turnServer.username,
                                    turnpassword: E.joinInfo.turnServer.credential
                                },
                                d),
                                function(p, f) {
                                    if ("error" === p) return r.
                                default.error("[".concat(E.clientId, "] Publish local stream failed")),
                                    o && o(A.PUBLISH_STREAM_FAILED),
                                    void a.b.publish(E.joinInfo.sid, {
                                        lts: s,
                                        succ: !1,
                                        audioName: e.hasAudio() && e.audioName,
                                        videoName: e.hasVideo() && e.videoName,
                                        screenName: e.hasScreen() && e.screenName,
                                        localSDP: d,
                                        ec: A.PUBLISH_STREAM_FAILED
                                    });
                                    e.pc.onsignalingmessage = function(n) {
                                        e.pc.onsignalingmessage = function() {},
                                        N(m({
                                            state: "ok",
                                            id: e.getId(),
                                            audio: e.hasAudio(),
                                            video: e.hasVideo(),
                                            screen: e.hasScreen(),
                                            streamType: t.streamType,
                                            attributes: e.getAttributes(),
                                            mode: E.mode
                                        },
                                        n)),
                                        e.getUserId() !== f.id && e.setUserId(f.id),
                                        r.
                                    default.info("[".concat(E.clientId, "] Local stream published with uid"), f.id),
                                        e.onClose = function() {
                                            E.unpublish(e)
                                        },
                                        e._onAudioUnmute = function() {
                                            w(i({
                                                action: "audio-out-on",
                                                streamId: e.getId()
                                            }),
                                            function() {},
                                            function() {})
                                        },
                                        e._onVideoUnmute = function() {
                                            w(i({
                                                action: "video-out-on",
                                                streamId: e.getId()
                                            }),
                                            function() {},
                                            function() {})
                                        },
                                        e._onAudioMute = function() {
                                            w(i({
                                                action: "audio-out-off",
                                                streamId: e.getId()
                                            }),
                                            function() {},
                                            function() {})
                                        },
                                        e._onVideoMute = function() {
                                            w(i({
                                                action: "video-out-off",
                                                streamId: e.getId()
                                            }),
                                            function() {},
                                            function() {})
                                        },
                                        e.getId() === e.getUserId() && (e.isAudioOn() || e.hasAudio() && (r.
                                    default.debug("[".concat(E.clientId, "] local stream audio mute")), e._onAudioMute()), e.isVideoOn() || (e.hasVideo() || e.hasScreen()) && (r.
                                    default.debug("[".concat(E.clientId, "] local stream video mute")), e._onVideoMute()))
                                    },
                                    e.pc.oniceconnectionstatechange = function(t) {
                                        if ("failed" === t) {
                                            if (null != E.timers[e.getId()] && (clearInterval(E.timers[e.getId()]), clearInterval(E.timers[e.getId()] + "_RelatedStats")), r.
                                        default.error("[".concat(E.clientId, "] Publisher connection is lost -- streamId: ").concat(e.getId(), ", p2pId: ").concat(l)), E.p2ps.delete(l), r.
                                        default.debug("[".concat(E.clientId, "] publish p2p failed: "), E.p2ps), !c) return c = !0,
                                            a.b.publish(E.joinInfo.sid, {
                                                lts: s,
                                                succ: !1,
                                                audioName: e.hasAudio() && e.audioName,
                                                videoName: e.hasVideo() && e.videoName,
                                                screenName: e.hasScreen() && e.screenName,
                                                ec: A.PEERCONNECTION_FAILED
                                            }),
                                            E.dispatchEvent(u({
                                                type: "pubP2PLost",
                                                stream: e
                                            })),
                                            o && o(A.PEERCONNECTION_FAILED);
                                            E.dispatchEvent(u({
                                                type: "pubP2PLost",
                                                stream: e
                                            }))
                                        } else if ("connected" === t && (r.
                                    default.debug("[".concat(E.clientId, "] publish p2p connected: "), E.p2ps), !c)) return c = !0,
                                        a.b.publish(E.joinInfo.sid, {
                                            lts: s,
                                            succ: !0,
                                            audioName: e.hasAudio() && e.audioName,
                                            videoName: e.hasVideo() && e.videoName,
                                            screenName: e.hasScreen() && e.screenName,
                                            ec: null
                                        }),
                                        n && n()
                                    },
                                    r.
                                default.debug("[".concat(E.clientId, "] SDP exchange in publish : receive answer --  "), JSON.parse(p)),
                                    e.pc.processSignalingMessage(p)
                                })
                            },
                            audio: e.hasAudio(),
                            video: e.hasVideo(),
                            screen: e.hasScreen(),
                            isSubscriber: !1,
                            stunServerUrl: E.stunServerUrl,
                            turnServer: E.joinInfo.turnServer,
                            maxAudioBW: d.maxAudioBW,
                            minVideoBW: d.minVideoBW,
                            maxVideoBW: d.maxVideoBW,
                            mode: E.mode,
                            codec: E.codec,
                            isVideoMute: e.userMuteVideo || e.peerMuteVideo,
                            isAudioMute: e.userMuteAudio || e.peerMuteAudio,
                            maxFrameRate: e.attributes.maxFrameRate,
                            clientId: E.clientId
                        },
                        e.pc = W(e.connectionSpec),
                        e.pc.addStream(e.stream),
                        r.
                    default.debug("[".concat(E.clientId, "] PeerConnection add stream :"), e.stream),
                        e.pc.onnegotiationneeded = function(t) {
                            N(m({
                                state: "negotiation",
                                p2pid: l
                            },
                            t),
                            function(t, n) {
                                e.pc.processSignalingMessage(t)
                            })
                        },
                        E.timers[e.getId()] = setInterval(function() {
                            var t = 0;
                            e && e.pc && e.pc.getStats && e.pc.getStatsRate(function(n) {
                                n.forEach(function(n) {
                                    if (n && n.id && !/_recv$/.test(n.id) && !/^time$/.test(n.id) && e.getUserId()) if ( - 1 === n.id.indexOf("outbound_rtp") && -1 === n.id.indexOf("OutboundRTP") || "video" !== n.mediaType || (n.googFrameWidthSent = e.videoWidth + "", n.googFrameHeightSent = e.videoHeight + ""), e.getId() == e.getUserId()) {
                                        var i = 200 * t;
                                        t++,
                                        setTimeout(function() {
                                            var e, t;
                                            w((e = n, t = {},
                                            Object.keys(e).forEach(function(n) {
                                                t[Be(n)] = e[n]
                                            }), {
                                                _type: "publish_stats",
                                                options: {
                                                    stats: t
                                                },
                                                sdp: null
                                            }), null, null)
                                        },
                                        i)
                                    } else {
                                        i = 200 * t;
                                        t++,
                                        setTimeout(function() {
                                            var e, t;
                                            w((e = n, t = {},
                                            Object.keys(e).forEach(function(n) {
                                                t[Be(n)] = e[n]
                                            }), {
                                                _type: "publish_stats_low",
                                                options: {
                                                    stats: t
                                                },
                                                sdp: null
                                            }), null, null)
                                        },
                                        i)
                                    }
                                })
                            })
                        },
                        3e3);
                        var p = function() {
                            e && e.pc && e.pc.getVideoRelatedStats && e.pc.getVideoRelatedStats(function(t) {
                                var n, i;
                                e.getId() === e.getUserId() ? w((n = t, i = {},
                                Object.keys(n).forEach(function(e) {
                                    i[Be(e)] = n[e]
                                }), {
                                    _type: "publish_related_stats",
                                    options: i
                                }), null, null) : w(function(e) {
                                    var t = {};
                                    return Object.keys(e).forEach(function(n) {
                                        t[Be(n)] = e[n]
                                    }),
                                    {
                                        _type: "publish_related_stats_low",
                                        options: t
                                    }
                                } (t), null, null)
                            })
                        };
                        p(),
                        E.timers[e.getId() + "_RelatedStats"] = setInterval(p, 1e3)
                    }
                }
            },
            E.unpublish = function(e, t, n, i) {
                return "object" !== q()(e) || null === e ? (r.
            default.error("[".concat(E.clientId, "] Invalid local stream")), void b(i, A.INVALID_LOCAL_STREAM)) : E.state !== I ? (r.
            default.error("[".concat(E.clientId, "] User not in the session")), void b(i, A.INVALID_OPERATION)) : (null != E.timers[e.getId()] && (clearInterval(E.timers[e.getId()]), clearInterval(E.timers[e.getId() + "_RelatedStats"])), void(void 0 !== E.socket ? e.local && void 0 !== E.localStreams[e.getId()] ? (delete E.localStreams[e.getId()], w((o = e.getUserId(), a = t.streamType, {
                    _type: "unpublish",
                    message: o,
                    streamType: a
                })), (e.hasAudio() || e.hasVideo() || e.hasScreen()) && void 0 === e.url && void 0 !== e.pc && (e.pc.close(), e.pc = void 0), e.onClose = void 0, e._onAudioMute = void 0, e._onAudioUnute = void 0, e._onVideoMute = void 0, e._onVideoUnmute = void 0, E.p2ps.delete(e.p2pId), n && n()) : (r.
            default.error("[".concat(E.clientId, "] Invalid local stream")), b(i, A.INVALID_LOCAL_STREAM)) : (r.
            default.error("[".concat(E.clientId, "] User not in the session")), b(i, A.INVALID_OPERATION))));
                var o, a
            }, E.subscribe = function(e, t, n) {
                var s = (new Date).getTime();
                e.subscribeLTS = s;
                var l = !1;
                if (r.
            default.info("[".concat(E.clientId, "] Gatewayclient ").concat(E.uid, " Subscribe ").concat(e.getId(), ": ").concat(JSON.stringify(e.subscribeOptions))), "object" !== q()(e) || null === e) return r.
            default.error("[".concat(E.clientId, "] Invalid remote stream")),
                n && n(A.INVALID_REMOTE_STREAM),
                void a.b.subscribe(E.joinInfo.sid, {
                    lts: s,
                    succ: !1,
                    video: e.subscribeOptions && e.subscribeOptions.video,
                    audio: e.subscribeOptions && e.subscribeOptions.audio,
                    peerid: e.getId(),
                    ec: A.INVALID_REMOTE_STREAM
                });
                if (E.state !== I && (r.
            default.error("[".concat(E.clientId, "] User is not in the session")), !l)) return l = !0,
                a.b.subscribe(E.joinInfo.sid, {
                    lts: s,
                    succ: !1,
                    video: e.subscribeOptions && e.subscribeOptions.video,
                    audio: e.subscribeOptions && e.subscribeOptions.audio,
                    peerid: e.getId(),
                    ec: A.INVALID_OPERATION
                }),
                n && n(A.INVALID_OPERATION);
                if (!e.local && E.remoteStreams.hasOwnProperty(e.getId())) if (e.hasAudio() || e.hasVideo() || e.hasScreen()) {
                    var p = E.generateP2PId();
                    E.p2ps.set(p, e),
                    e.p2pId = p,
                    e.pc = W({
                        callback: function(t) {
                            r.
                        default.debug("[".concat(E.clientId, "] SDP exchange in subscribe : send offer --  "), JSON.parse(t));
                            var i, c = S()({
                                streamId: e.getId(),
                                video: !0,
                                audio: !0,
                                mode: E.mode,
                                codec: E.codec,
                                p2pid: p,
                                turnip: E.joinInfo.turnServer.url,
                                turnport: Number(E.joinInfo.turnServer.udpport),
                                turnusername: E.joinInfo.turnServer.username,
                                turnpassword: E.joinInfo.turnServer.credential,
                                tcc: Object(o.getParameter)("SUBSCRIBE_TCC")
                            },
                            e.subscribeOptions);
                            N({
                                _type: "subscribe",
                                options: c,
                                sdp: t,
                                p2pid: i
                            },
                            function(t) {
                                if ("error" === t) return r.
                            default.error("[".concat(E.clientId, "] Subscribe remote stream failed, closing stream "), e.getId()),
                                e.close(),
                                n && n(A.SUBSCRIBE_STREAM_FAILED),
                                void a.b.subscribe(E.joinInfo.sid, {
                                    lts: s,
                                    succ: !1,
                                    video: e.subscribeOptions && e.subscribeOptions.video,
                                    audio: e.subscribeOptions && e.subscribeOptions.audio,
                                    peerid: e.getId(),
                                    ec: A.SUBSCRIBE_STREAM_FAILED
                                });
                                r.
                            default.debug("[".concat(E.clientId, "] SDP exchange in subscribe : receive answer --  "), JSON.parse(t)),
                                e.pc.processSignalingMessage(t)
                            })
                        },
                        nop2p: !0,
                        audio: !0,
                        video: !0,
                        screen: e.hasScreen(),
                        isSubscriber: !0,
                        stunServerUrl: E.stunServerUrl,
                        turnServer: E.joinInfo.turnServer,
                        isVideoMute: e.userMuteVideo,
                        isAudioMute: e.userMuteAudio,
                        uid: e.getId(),
                        clientId: E.clientId
                    }),
                    e.pc.onaddstream = function(t, n) {
                        if (e._onAudioUnmute = function() {
                            w(i({
                                action: "audio-in-on",
                                streamId: e.getId()
                            }),
                            function() {},
                            function() {})
                        },
                        e._onAudioMute = function() {
                            w(i({
                                action: "audio-in-off",
                                streamId: e.getId()
                            }),
                            function() {},
                            function() {})
                        },
                        e._onVideoUnmute = function() {
                            w(i({
                                action: "video-in-on",
                                streamId: e.getId()
                            }),
                            function() {},
                            function() {})
                        },
                        e._onVideoMute = function() {
                            w(i({
                                action: "video-in-off",
                                streamId: e.getId()
                            }),
                            function() {},
                            function() {})
                        },
                        "ontrack" === n && "video" === t.track.kind || "onaddstream" === n) {
                            r.
                        default.info("[".concat(E.clientId, "] Remote stream subscribed with uid "), e.getId());
                            var o = E.remoteStreams[e.getId()];
                            if (E.remoteStreams[e.getId()].stream = "onaddstream" === n ? t.stream: t.streams[0], E.remoteStreams[e.getId()].hasVideo()) {
                                if (Object(f.isFireFox)() || Object(f.isSafari)()) {
                                    var a = E.remoteStreams[e.getId()].stream;
                                    Object(G.h)(a,
                                    function(t, n) {
                                        e.videoWidth = t,
                                        e.videoHeight = n
                                    },
                                    function(e) {
                                        return r.
                                    default.warning("[".concat(E.clientId, "] vsResHack failed: ") + e)
                                    })
                                }
                            } else {
                                var s = E.remoteStreams[e.getId()];
                                s.peerMuteVideo = !0,
                                E._adjustPCMuteStatus(s)
                            }
                            o && o.isPlaying() && o.elementID && (r.
                        default.debug("[".concat(E.clientId, "] Reload Player ").concat(o.elementID, " StreamId ").concat(o.getId())), e.audioOutput = o.audioOutput, o.stop(), e.play(o.elementID, o.playOptions)),
                            delete e.audioLevelHelper;
                            var c = d({
                                type: "stream-subscribed",
                                stream: E.remoteStreams[e.getId()]
                            });
                            E.dispatchEvent(c)
                        }
                    },
                    E.timers[e.getId()] = setInterval(function() {
                        var t = 0;
                        e && e.pc && e.pc.getStats && e.pc.getStatsRate(function(n) {
                            n.forEach(function(n) {
                                if (n && n.id) {
                                    if (/_send$/.test(n.id) || /^time$/.test(n.id) || /^bweforvideo$/.test(n.id)) return; - 1 === n.id.indexOf("inbound_rtp") && -1 === n.id.indexOf("inbound-rtp") || "video" !== n.mediaType || (n.googFrameWidthReceived = e.videoWidth + "", n.googFrameHeightReceived = e.videoHeight + "");
                                    var i = 200 * t;
                                    t++;
                                    var o = e.getId();
                                    setTimeout(function() {
                                        var e, t, i;
                                        N((e = o, t = n, i = {},
                                        Object.keys(t).forEach(function(e) {
                                            i[Be(e)] = t[e]
                                        }), {
                                            _type: "subscribe_stats",
                                            options: {
                                                id: e,
                                                stats: i
                                            },
                                            sdp: null
                                        }), null, null)
                                    },
                                    i)
                                } else;
                            })
                        })
                    },
                    3e3),
                    E.timers[e.getId() + "_RelatedStats"] = setInterval(function() {
                        e && e.pc && (e.pc.getVideoRelatedStats && e.pc.getVideoRelatedStats(function(e) {
                            w(c(e), null, null)
                        }), e.pc.getAudioRelatedStats && e.pc.getAudioRelatedStats(function(e) {
                            w(c(e), null, null)
                        }))
                    },
                    1e3),
                    E.audioLevel[e.getId()] = 0,
                    E.timers[e.getId() + "audio"] = setInterval(function() {
                        E.hasListeners("active-speaker") && e && e.pc && "established" === e.pc.state && e.pc.getStats && e.pc.getStats(function(t) {
                            t.forEach(function(t) {
                                if ("audio" === t.mediaType) {
                                    if (t.audioOutputLevel > 5e3) for (var n in E.audioLevel[e.getId()] < 20 && (E.audioLevel[e.getId()] += 1), E.audioLevel) n !== "" + e.getId() && E.audioLevel[n] > 0 && (E.audioLevel[n] -= 1);
                                    var i = Object.keys(E.audioLevel).sort(function(e, t) {
                                        return E.audioLevel[t] - E.audioLevel[e]
                                    });
                                    if (E.activeSpeaker !== i[0]) {
                                        var o = u({
                                            type: "active-speaker",
                                            uid: i[0]
                                        });
                                        E.dispatchEvent(o),
                                        E.activeSpeaker = i[0],
                                        r.
                                    default.debug("[".concat(E.clientId, "] Update active speaker: ").concat(E.activeSpeaker))
                                    }
                                }
                            })
                        },
                        50)
                    },
                    50),
                    e.pc.oniceconnectionstatechange = function(i) {
                        if ("failed" === i) null != E.timers[e.getId()] && (clearInterval(E.timers[e.getId()]), clearInterval(E.timers[e.getId()] + "audio")),
                        r.
                    default.error("[".concat(E.clientId, "] Subscriber connection is lost -- streamId: ").concat(e.getId(), ", p2pId: ").concat(p)),
                        r.
                    default.debug("[".concat(E.clientId, "] subscribe p2p failed: "), E.p2ps),
                        l || (l = !0, n && n(A.PEERCONNECTION_FAILED), a.b.subscribe(E.joinInfo.sid, {
                            lts: s,
                            succ: !1,
                            video: e.subscribeOptions && e.subscribeOptions.video,
                            audio: e.subscribeOptions && e.subscribeOptions.audio,
                            peerid: e.getId(),
                            ec: A.PEERCONNECTION_FAILED
                        })),
                        E.remoteStreams[e.getId()] && E.p2ps.has(p) && (E.p2ps.delete(p), E.dispatchEvent(u({
                            type: "subP2PLost",
                            stream: e
                        })));
                        else if ("connected" === i && (r.
                    default.debug("[".concat(E.clientId, "] subscribe p2p connected: "), E.p2ps), !l)) {
                            l = !0,
                            a.b.subscribe(E.joinInfo.sid, {
                                lts: s,
                                succ: !0,
                                video: e.subscribeOptions && e.subscribeOptions.video,
                                audio: e.subscribeOptions && e.subscribeOptions.audio,
                                peerid: e.getId(),
                                ec: null
                            }),
                            E._adjustPCMuteStatus(e);
                            var o = !1,
                            c = setInterval(function() {
                                e.pc ? e.pc.getStats(function(t) {
                                    t.forEach(function(t) { - 1 !== t.id.indexOf("recv") && "audio" === t.mediaType && parseInt(t.googDecodingNormal) > 0 && (o || (o = !0, E.dispatchEvent({
                                            type: "first-audio-frame-decode",
                                            stream: e
                                        }), clearInterval(c), a.b.reportApiInvoke(E.joinInfo.sid, {
                                            name: "firstAudioDecode"
                                        })(null, {
                                            elapse: Date.now() - e.subscribeLTS
                                        })))
                                    })
                                },
                                100) : clearInterval(c)
                            },
                            100),
                            d = !1,
                            f = setInterval(function() {
                                e.pc ? e.pc.getStats(function(t) {
                                    t.forEach(function(t) { - 1 === t.id.indexOf("recv") && -1 === t.id.indexOf("inbound_rtp") && -1 === t.id.indexOf("inbound-rtp") && -1 === t.id.indexOf("InboundRTP") || "video" === t.mediaType && (t.framesDecoded > 0 || t.googFramesDecoded > 0) && (d || (d = !0, E.dispatchEvent({
                                            type: "first-video-frame-decode",
                                            stream: e
                                        }), clearInterval(f), e.firstFrameTime = (new Date).getTime() - e.subscribeLTS, a.b.firstRemoteFrame(E.joinInfo.sid, {
                                            lts: (new Date).getTime(),
                                            peerid: e.getId(),
                                            succ: !0,
                                            width: +t.googFrameWidthReceived,
                                            height: +t.googFrameHeightReceived
                                        })))
                                    })
                                },
                                100) : clearInterval(f)
                            },
                            100);
                            return e.sid = E.joinInfo.sid,
                            t && t()
                        }
                    }
                } else r.
            default.error("[".concat(E.clientId, "] Invalid remote stream")),
                l || (l = !0, n && n(A.INVALID_REMOTE_STREAM), a.b.subscribe(E.joinInfo.sid, {
                    lts: s,
                    succ: !1,
                    video: e.subscribeOptions && e.subscribeOptions.video,
                    audio: e.subscribeOptions && e.subscribeOptions.audio,
                    peerid: e.getId(),
                    ec: A.INVALID_REMOTE_STREAM
                }));
                else r.
            default.error("[".concat(E.clientId, "] No such remote stream")),
                l || (l = !0, n && n(A.NO_SUCH_REMOTE_STREAM), a.b.subscribe(E.joinInfo.sid, {
                    lts: s,
                    succ: !1,
                    video: e.subscribeOptions && e.subscribeOptions.video,
                    audio: e.subscribeOptions && e.subscribeOptions.audio,
                    peerid: e.getId(),
                    ec: A.NO_SUCH_REMOTE_STREAM
                }))
            },
            E.subscribeChange = function(e, t, n) {
                var i, o, s = Date.now();
                r.
            default.info("[".concat(E.clientId, "] Gatewayclient ").concat(E.uid, " SubscribeChange ").concat(e.getId(), ": ").concat(JSON.stringify(e.subscribeOptions))),
                E._adjustPCMuteStatus(e),
                w((i = e.getId(), o = e.subscribeOptions, {
                    _type: "subscribe_change",
                    options: S()({
                        streamId: i
                    },
                    o)
                }),
                function(i) {
                    if ("error" === i) return r.
                default.error("[".concat(E.clientId, "] Subscribe Change Failed ").concat(e.getId())),
                    void b(n, "SUBSCRIBE_CHANGE_FAILED");
                    var o = d({
                        type: "stream-subscribe-changed",
                        stream: E.remoteStreams[e.getId()]
                    });
                    a.b.subscribe(E.joinInfo.sid, {
                        lts: s,
                        succ: !0,
                        video: e.subscribeOptions && e.subscribeOptions.video,
                        audio: e.subscribeOptions && e.subscribeOptions.audio,
                        peerid: e.getId(),
                        ec: null
                    }),
                    E.dispatchEvent(o),
                    t && t()
                },
                n)
            },
            E._adjustPCMuteStatus = function(e) { ! e.local && e.pc && e.pc.peerConnection.getReceivers && e.pc.peerConnection.getReceivers().forEach(function(t) {
                    if (t && t.track && "audio" === t.track.kind) {
                        var n = !e.userMuteAudio && !e.peerMuteAudio;
                        e.subscribeOptions && !e.subscribeOptions.audio && (n = !1),
                        t.track.enabled = !!n
                    } else if (t && t.track && "video" === t.track.kind) {
                        var i = !e.userMuteVideo && !e.peerMuteVideo;
                        e.subscribeOptions && !e.subscribeOptions.video && (i = !1),
                        t.track.enabled = !!i
                    }
                })
            },
            E.unsubscribe = function(e, t, n) {
                if ("object" !== q()(e) || null === e) return r.
            default.error("[".concat(E.clientId, "] Invalid remote stream")),
                void b(n, A.INVALID_REMOTE_STREAM);
                if (E.state !== I) return r.
            default.error("[".concat(E.clientId, "] User is not in the session")),
                void b(n, A.INVALID_OPERATION);
                if (null != E.timers[e.getId()] && (clearInterval(E.timers[e.getId()]), clearInterval(E.timers[e.getId()] + "audio")), null != E.audioLevel[e.getId()] && delete E.audioLevel[e.getId()], null != E.timer_counter[e.getId()] && delete E.timer_counter[e.getId()], E.remoteStreams.hasOwnProperty(e.getId())) {
                    if (!E.socket) return r.
                default.error("[".concat(E.clientId, "] User is not in the session")),
                    void b(n, A.INVALID_OPERATION);
                    if (e.local) return r.
                default.error("[".concat(E.clientId, "] Invalid remote stream")),
                    void b(n, A.INVALID_REMOTE_STREAM);
                    e.close(),
                    w({
                        _type: "unsubscribe",
                        message: e.getId()
                    },
                    function(i) {
                        if ("error" === i) return r.
                    default.error("[".concat(E.clientId, "] Unsubscribe remote stream failed ").concat(e.getId())),
                        void b(n, A.UNSUBSCRIBE_STREAM_FAILED);
                        void 0 !== e.pc && (e.pc.close(), e.pc = void 0),
                        e.onClose = void 0,
                        e._onAudioMute = void 0,
                        e._onAudioUnute = void 0,
                        e._onVideoMute = void 0,
                        e._onVideoUnmute = void 0,
                        delete e.subscribeOptions,
                        E.p2ps.delete(e.p2pId),
                        r.
                    default.info("[".concat(E.clientId, "] Unsubscribe stream success")),
                        t && t()
                    },
                    n)
                } else b(n, A.NO_SUCH_REMOTE_STREAM)
            },
            E.setRemoteVideoStreamType = function(e, t) {
                if (r.
            default.debug("[".concat(E.clientId, "] Switching remote video stream ").concat(e.getId(), " to ").concat(t)), "object" === q()(e) && null !== e) if (E.state === I) {
                    if (!e.local) {
                        switch (t) {
                        case E.remoteVideoStreamTypes.REMOTE_VIDEO_STREAM_HIGH:
                        case E.remoteVideoStreamTypes.REMOTE_VIDEO_STREAM_LOW:
                        case E.remoteVideoStreamTypes.REMOTE_VIDEO_STREAM_MEDIUM:
                            break;
                        default:
                            return
                        }
                        w(function(e, t) {
                            return {
                                _type: "switchVideoStream",
                                message: {
                                    id: e,
                                    type: t
                                }
                            }
                        } (e.getId(), t), null, null)
                    }
                } else r.
            default.error("[".concat(E.clientId, "] User is not in the session"));
                else r.
            default.error("[".concat(E.clientId, "] Invalid remote stream"))
            },
            E.renewToken = function(e, t, n) {
                e ? E.key ? E.state !== I ? (r.
            default.debug("[".concat(E.clientId, "] Client is not connected. Trying to rejoin")), E.key = e, E.rejoin(), t && t()) : (r.
            default.debug("[".concat(E.clientId, "] renewToken from ").concat(E.key, " to ").concat(e)), w(function(e) {
                    return {
                        _type: "renew_token",
                        message: {
                            token: e
                        }
                    }
                } (e), t, n)) : (r.
            default.error("[".concat(E.clientId, "] Client is previously joined without token")), n && n(A.INVALID_PARAMETER)) : (r.
            default.error("[".concat(E.clientId, "] Invalid Token ").concat(e)), n && n(A.INVALID_PARAMETER))
            },
            E.setStreamFallbackOption = function(e, t) {
                if (r.
            default.debug("[".concat(E.clientId, "] Set stream fallback option ").concat(e.getId(), " to ").concat(t)), "object" === q()(e) && null !== e) if (E.state === I) {
                    if (!e.local) {
                        switch (t) {
                        case E.streamFallbackTypes.STREAM_FALLBACK_OPTION_DISABLED:
                        case E.streamFallbackTypes.STREAM_FALLBACK_OPTION_VIDEO_STREAM_LOW:
                        case E.streamFallbackTypes.STREAM_FALLBACK_OPTION_AUDIO_ONLY:
                            break;
                        default:
                            return
                        }
                        w(function(e, t) {
                            return {
                                _type: "setFallbackOption",
                                message: {
                                    id: e,
                                    type: t
                                }
                            }
                        } (e.getId(), t), null, null)
                    }
                } else r.
            default.error("[".concat(E.clientId, "] User is not in the session"));
                else r.
            default.error("[".concat(E.clientId, "] Invalid remote stream"))
            },
            E.startLiveStreaming = function(e, t) {
                E.liveStreams.set(e, t),
                r.
            default.debug("[".concat(E.clientId, "] Start live streaming ").concat(e, " ").concat(t, " ").concat(t)),
                E.state === I ? w(function(e, t) {
                    return {
                        _type: "start_live_streaming",
                        message: {
                            url: e,
                            transcodingEnabled: t
                        }
                    }
                } (e, t), null, null) : r.
            default.error("[".concat(E.clientId, "] User is not in the session"))
            },
            E.stopLiveStreaming = function(e) {
                r.
            default.debug("[".concat(E.clientId, "] Stop live streaming ").concat(e)),
                E.state === I ? (E.liveStreams.delete(e), w(function(e) {
                    return {
                        _type: "stop_live_streaming",
                        message: {
                            url: e
                        }
                    }
                } (e), null, null)) : r.
            default.error("[".concat(E.clientId, "] User is not in the session"))
            },
            E.setLiveTranscoding = function(e) {
                Object(G.d)(e) && (E.transcoding = e, r.
            default.debug("[".concat(E.clientId, "] Set live transcoding "), e), E.state === I ? w(function(e) {
                    return {
                        _type: "set_live_transcoding",
                        message: {
                            transcoding: e
                        }
                    }
                } (e), null, null) : r.
            default.error("[".concat(E.clientId, "] User is not in the session")))
            },
            E.addInjectStreamUrl = function(e, t) {
                E.injectLiveStreams.set(e, t),
                r.
            default.debug("[".concat(E.clientId, "] Add inject stream url ").concat(e, " config "), t),
                E.state === I ? w(function(e, t) {
                    return {
                        _type: "add_inject_stream_url",
                        message: {
                            url: e,
                            config: t
                        }
                    }
                } (e, t), null, null) : r.
            default.error("[".concat(E.clientId, "] User is not in the session"))
            },
            E.removeInjectStreamUrl = function(e) {
                r.
            default.debug("[".concat(E.clientId, "] Remove inject stream url ").concat(e)),
                E.state === I ? (E.injectLiveStreams.delete(e), w(function(e) {
                    return {
                        _type: "remove_inject_stream_url",
                        message: {
                            url: e
                        }
                    }
                } (e), null, null)) : r.
            default.error("[".concat(E.clientId, "] User is not in the session"))
            },
            E.enableAudioVolumeIndicator = function(e, t) {
                E.audioVolumeIndication.enabled = !0,
                E.audioVolumeIndication.interval = e,
                E.audioVolumeIndication.smooth = t,
                E.resetAudioVolumeIndication()
            },
            E.resetAudioVolumeIndication = function() {
                if (clearInterval(E.timers.audioVolumeIndication), clearInterval(E.timers.audioVolumeSampling), E.audioVolumeIndication.enabled && E.audioVolumeIndication.interval) {
                    var e = Math.floor(1e3 * E.audioVolumeIndication.smooth / 100);
                    E.timers.audioVolumeSampling = setInterval(function() {
                        E.audioVolumeSampling || (E.audioVolumeSampling = {});
                        var t = {};
                        for (var n in E.remoteStreams) {
                            var i = E.remoteStreams[n];
                            if (i.stream && i.hasAudio()) {
                                var o = i.getAudioLevel();
                                o > 0 && o < 1 && (o *= 100);
                                var r = E.audioVolumeSampling[n] || [];
                                for (r.push(o); r.length > e;) r.shift();
                                t[n] = r
                            }
                        }
                        E.audioVolumeSampling = t
                    },
                    100),
                    E.timers.audioVolumeIndication = setInterval(function() {
                        var e = [];
                        for (var t in E.remoteStreams) if (E.audioVolumeSampling && E.audioVolumeSampling[t]) {
                            var n = E.audioVolumeSampling[t],
                            i = 0;
                            n.forEach(function(e) {
                                i += e
                            });
                            var o = {
                                uid: t,
                                level: Math.floor(i / n.length)
                            };
                            o.level && e.push(o)
                        }
                        var a = e.sort(function(e, t) {
                            return e.level - t.level
                        });
                        r.
                    default.debug("[".concat(E.clientId, "] volume-indicator "), JSON.stringify(a)),
                        E.audioVolumeIndication.sortedAudioVolumes = a;
                        var s = u({
                            type: "volume-indicator",
                            attr: a
                        });
                        E.dispatchEvent(s)
                    },
                    E.audioVolumeIndication.interval)
                }
            },
            E.closeGateway = function() {
                r.
            default.debug("[".concat(E.clientId, "] close gateway")),
                E.state = g,
                E.socket.close(),
                R()
            };
            var R = function() {
                for (var e in E.timers) E.timers.hasOwnProperty(e) && clearInterval(E.timers[e]);
                for (var e in E.remoteStreams) if (E.remoteStreams.hasOwnProperty(e)) {
                    var t = E.remoteStreams[e],
                    n = u({
                        type: "stream-removed",
                        uid: t.getId(),
                        stream: t
                    });
                    E.dispatchEvent(n)
                }
                E.p2ps.clear(),
                k(),
                D(),
                clearInterval(E.pingTimer)
            };
            E.rejoin = function() {
                E.socket && (clearInterval(E.pingTimer), E.socket.close(), E.socket = void 0),
                E.state = v,
                C()
            };
            var C = function(e, t) {
                E.dispatchEvent(u({
                    type: "rejoin-start"
                })),
                e = e ||
                function(e) {
                    r.
                default.info("[".concat(E.clientId, "] User ").concat(e, " is re-joined to ").concat(E.joinInfo.cname)),
                    E.dispatchEvent(u({
                        type: "rejoin"
                    })),
                    E.liveStreams && E.liveStreams.size && E.liveStreams.forEach(function(e, t) {
                        e && E.setLiveTranscoding(E.transcoding),
                        E.startLiveStreaming(t, e)
                    }),
                    E.injectLiveStreams && E.injectLiveStreams.size && E.injectLiveStreams.forEach(function(e, t) {
                        E.addInjectStreamUrl(t, e)
                    })
                },
                t = t ||
                function(e) {
                    r.
                default.error("[".concat(E.clientId, "] Re-join to channel failed "), e),
                    E.dispatchEvent(d({
                        type: "error",
                        reason: e
                    }))
                },
                E.key ? (++E.rejoinAttempt, E.join(E.joinInfo, E.key, e, t)) : r.
            default.error("[".concat(E.clientId, "] Connection recover failed [Invalid channel key]"))
            },
            O = function(e, t, i) {
                var o;
                E.onConnect = t,
                E.socket ? (E.dispatchEvent({
                    type: "reconnect"
                }), "retry" === E.reconnectMode ? (r.
            default.debug("[".concat(E.clientId, "] Retry current gateway")), E.socket.reconnect()) : "tryNext" === E.reconnectMode ? (r.
            default.debug("[".concat(E.clientId, "] Try next gateway")), E.socket.connectNext()) : "recover" === E.reconnectMode && (r.
            default.debug("[".concat(E.clientId, "] Recover gateway")), r.
            default.debug("[".concat(E.clientId, "] Try to reconnect choose server and get gateway list again ")), ke(E.joinInfo,
                function(e) {
                    E.socket.replaceHost(e.gateway_addr)
                }))) : (o = e.gatewayAddr, E.socket = ye(o, {
                    sid: E.joinInfo.sid,
                    clientId: E.clientId
                }), E.socket.on("onUplinkStats",
                function(e) {
                    E.OutgoingAvailableBandwidth = e.uplink_available_bandwidth,
                    E.localStreams[E.uid] && (E.localStreams[E.uid].uplinkStats = e)
                }), E.socket.on("connect",
                function() {
                    E.dispatchEvent({
                        type: "connected"
                    }),
                    E.attemps = 1,
                    w(function(e) {
                        var t = e;
                        return e.uni_lbs_ip && (t = S()(e, {
                            wanip: e.uni_lbs_ip,
                            hasChange: E.hasChangeBGPAddress
                        })),
                        {
                            _type: "token",
                            message: t
                        }
                    } (e), E.onConnect, i)
                }), E.socket.on("recover",
                function() {
                    E.state = v,
                    r.
                default.debug("[".concat(E.clientId, "] Try to reconnect choose server and get gateway list again ")),
                    ke(E.joinInfo,
                    function(e) {
                        E.socket.replaceHost(e.gateway_addr)
                    })
                }), E.socket.on("disconnect",
                function(e) {
                    if (E.state !== g) {
                        E.state = g;
                        var t = d({
                            type: "error",
                            reason: A.SOCKET_DISCONNECTED
                        });
                        if (E.dispatchEvent(t), 0 === E.p2ps.size ? E.reconnectMode = "tryNext": E.reconnectMode = "retry", R(), 1 != n) {
                            var i, o = (i = E.attemps, 1e3 * Math.min(30, Math.pow(2, i) - 1));
                            r.
                        default.error("[".concat(E.clientId, "] Disconnect from server [").concat(JSON.stringify(e), "], attempt to recover [#").concat(E.attemps, "] after ").concat(o / 1e3, " seconds"));
                            setTimeout(function() {
                                E.attemps++,
                                E.state = v,
                                C()
                            },
                            o)
                        }
                    }
                }), E.socket.on("onAddAudioStream",
                function(e) {
                    if (r.
                default.info("[".concat(E.clientId, "] Newly added audio stream with uid ").concat(e.id)), E.joinInfo.stringUid && "string" != typeof e.id && r.
                default.error("StringUID is Mixed with UintUID"), E.remoteStreamsInChannel.has(e.id) || E.remoteStreamsInChannel.add(e.id), void 0 === E.remoteStreams[e.id]) {
                        var t = pe({
                            streamID: e.id,
                            local: !1,
                            audio: e.audio,
                            video: e.video,
                            screen: e.screen,
                            attributes: e.attributes
                        });
                        t.peerMuteVideo = !0,
                        E.remoteStreams[e.id] = t;
                        var n = d({
                            type: "stream-added",
                            stream: t
                        });
                        E.dispatchEvent(n)
                    }
                }), E.socket.on("onUpdateStream",
                function(e) {
                    var t = E.remoteStreams[e.id];
                    if (E.joinInfo.stringUid && "string" != typeof e.id && r.
                default.error("StringUID is Mixed with UintUID"), t) {
                        delete e.id,
                        t.audio = e.audio,
                        t.video = e.video,
                        t.screen = e.screen,
                        t.pc && E._adjustPCMuteStatus(t);
                        var n = d({
                            type: "stream-updated",
                            stream: t
                        });
                        E.dispatchEvent(n)
                    } else r.
                default.debug("[".concat(E.clientId, "] Ignoring onUpdateStream event before onAddStream for uid ").concat(e.id))
                }), E.socket.on("onAddVideoStream",
                function(e) {
                    if (r.
                default.info("[".concat(E.clientId, "] Newly added remote stream with uid ").concat(e.id, ".")), E.joinInfo.stringUid && "string" != typeof e.id && r.
                default.error("StringUID is Mixed with UintUID"), E.remoteStreamsInChannel.has(e.id) || E.remoteStreamsInChannel.add(e.id), void 0 === E.remoteStreams[e.id]) {
                        var t = pe({
                            streamID: e.id,
                            local: !1,
                            audio: e.audio,
                            video: e.video,
                            screen: e.screen,
                            attributes: e.attributes
                        });
                        E.remoteStreams[e.id] = t;
                        var n = d({
                            type: "stream-added",
                            stream: t
                        });
                        E.dispatchEvent(n)
                    } else {
                        var i = E.remoteStreams[e.id];
                        if (i.peerMuteVideo = !1, i.video = !0, void 0 !== i.stream) {
                            if ((t = E.remoteStreams[e.id]).pc && E._adjustPCMuteStatus(t), r.
                        default.info("[".concat(E.clientId, "] Stream changed: enable video ").concat(e.id)), t.isPlaying()) {
                                var o = t.player.elementID;
                                t.stop(),
                                t.play(o, t.playOptions)
                            }
                        } else if (i.p2pId) E.remoteStreams[e.id].video = !0;
                        else {
                            t = pe({
                                streamID: e.id,
                                local: !1,
                                audio: !0,
                                video: !0,
                                screen: !1,
                                attributes: e.attributes
                            });
                            E.remoteStreams[e.id] = t,
                            r.
                        default.info("[".concat(E.clientId, "] Stream changed: modify video ").concat(e.id))
                        }
                    }
                }), E.socket.on("onRemoveStream",
                function(e) {
                    E.remoteStreamsInChannel.has(e.id) && E.remoteStreamsInChannel.delete(e.id);
                    var t = E.remoteStreams[e.id];
                    if (t) {
                        delete E.remoteStreams[e.id];
                        var n = d({
                            type: "stream-removed",
                            stream: t
                        });
                        E.dispatchEvent(n),
                        t.close(),
                        void 0 !== t.pc && (t.pc.close(), t.pc = void 0, E.p2ps.delete(t.p2pId))
                    } else console.log("ERROR stream ", e.id, " not found onRemoveStream ", e)
                }), E.socket.on("onPublishStream",
                function(e) {
                    var t = E.localStreams[e.id],
                    n = d({
                        type: "streamPublished",
                        stream: t
                    });
                    E.dispatchEvent(n)
                }), E.socket.on("mute_audio",
                function(e) {
                    r.
                default.info("[".concat(E.clientId, "] rcv peer mute audio: ").concat(e.peerid));
                    var t = u({
                        type: "mute-audio",
                        uid: e.peerid
                    }),
                    n = E.remoteStreams[e.peerid];
                    n ? (n.peerMuteAudio = !0, n.pc && E._adjustPCMuteStatus(n)) : r.
                default.debug("Ignoring event ".concat(e.type), e),
                    E.dispatchEvent(t)
                }), E.socket.on("unmute_audio",
                function(e) {
                    r.
                default.info("[".concat(E.clientId, "] rcv peer unmute audio: ").concat(e.peerid));
                    var t = u({
                        type: "unmute-audio",
                        uid: e.peerid
                    }),
                    n = E.remoteStreams[e.peerid];
                    n ? (n.peerMuteAudio = !1, n.pc && E._adjustPCMuteStatus(n)) : r.
                default.debug("Ignoring event ".concat(e.type), e),
                    E.dispatchEvent(t)
                }), E.socket.on("mute_video",
                function(e) {
                    r.
                default.info("[".concat(E.clientId, "] rcv peer mute video: ").concat(e.peerid));
                    var t = u({
                        type: "mute-video",
                        uid: e.peerid
                    }),
                    n = E.remoteStreams[e.peerid];
                    n ? (n.peerMuteVideo = !0, n.pc && E._adjustPCMuteStatus(n)) : r.
                default.debug("Ignoring event ".concat(e.type), e),
                    E.dispatchEvent(t)
                }), E.socket.on("unmute_video",
                function(e) {
                    r.
                default.info("[".concat(E.clientId, "] rcv peer unmute video: ").concat(e.peerid));
                    var t = u({
                        type: "unmute-video",
                        uid: e.peerid
                    }),
                    n = E.remoteStreams[e.peerid];
                    n ? (n.peerMuteVideo = !1, n.pc && E._adjustPCMuteStatus(n)) : r.
                default.debug("Ignoring event ".concat(e.type), e),
                    E.dispatchEvent(t)
                }), E.socket.on("user_banned",
                function(e) {
                    r.
                default.info("[".concat(E.clientId, "] user banned uid: ").concat(e.id, " error: ").concat(e.errcode));
                    var t = u({
                        type: "client-banned",
                        uid: e.id,
                        attr: e.errcode
                    });
                    E.dispatchEvent(t),
                    n = !0
                }), E.socket.on("stream_fallback",
                function(e) {
                    r.
                default.info("[".concat(E.clientId, "] stream fallback uid: ").concat(e.id, " peerId: ").concat(e.peerid, " type: ").concat(e.type));
                    var t = u({
                        type: "stream-fallback",
                        uid: e.id,
                        stream: e.peerid,
                        attr: e.type
                    });
                    E.dispatchEvent(t)
                }), E.socket.on("stream_recover",
                function(e) {
                    r.
                default.info("[".concat(E.clientId, "] stream recover uid: ").concat(e.id, " peerId: ").concat(e.peerid, " type: ").concat(e.type));
                    var t = u({
                        type: "stream-recover",
                        uid: e.id,
                        stream: e.peerid,
                        attr: e.type
                    });
                    E.dispatchEvent(t)
                }), E.socket.on("onP2PLost",
                function(e) {
                    r.
                default.debug("[".concat(E.clientId, "] p2plost: "), e, "p2ps:", E.p2ps);
                    var t, n = "DTLS failed"; (t = E.localStreams[e.uid] || E.remoteStreams[e.uid]) ? (t.pc && t.pc.offerCandidates && 0 === t.pc.offerCandidates.length && (n = "NO_CANDIDATES_IN_OFFER"), "publish" === e.event && a.b.publish(E.joinInfo.sid, {
                        lts: t.publishLTS,
                        succ: !1,
                        audioName: t.hasAudio() && t.audioName,
                        videoName: t.hasVideo() && t.videoName,
                        screenName: t.hasScreen() && t.screenName,
                        ec: n
                    }), "subscribe" === e.event && a.b.subscribe(E.joinInfo.sid, {
                        lts: t.subscribeLTS,
                        succ: !1,
                        video: t.subscribeOptions && t.subscribeOptions.video,
                        audio: t.subscribeOptions && t.subscribeOptions.audio,
                        peerid: e.uid + "",
                        ec: n
                    })) : r.
                default.warning("P2PLost Stream Not found", e),
                    r.
                default.debug("[".concat(E.clientId, "] p2plost:"), e.p2pid),
                    (t = E.p2ps.get(e.p2pid)) && (E.p2ps.delete(e.p2pid), t.local ? E.dispatchEvent(u({
                        type: "pubP2PLost",
                        stream: t,
                        attr: n
                    })) : E.remoteStreams[t.getId()] && E.dispatchEvent(u({
                        type: "subP2PLost",
                        stream: t,
                        attr: n
                    })))
                }), E.socket.on("onTokenPrivilegeWillExpire",
                function(e) {
                    r.
                default.debug("[".concat(E.clientId, "] Received Message onTokenPrivilegeWillExpire")),
                    E.dispatchEvent(u({
                        type: "onTokenPrivilegeWillExpire"
                    }))
                }), E.socket.on("onTokenPrivilegeDidExpire",
                function() {
                    r.
                default.warning("[".concat(E.clientId, "] Received Message onTokenPrivilegeDidExpire, please get new token and join again")),
                    E.closeGateway(),
                    E.dispatchEvent(u({
                        type: "onTokenPrivilegeDidExpire"
                    }))
                }), E._doWithAction = function(e, t, n) {
                    "tryNext" === e ?
                    function(e, t) {
                        r.
                    default.debug("[".concat(E.clientId, "] Connect next gateway")),
                        E.state = g,
                        E.socket.close(),
                        R(),
                        E.reconnectMode = "tryNext",
                        C(e, t)
                    } (t, n) : "retry" === e ?
                    function(e, t) {
                        r.
                    default.debug("[".concat(E.clientId, "] Reconnect gateway")),
                        E.state = g,
                        E.socket.close(),
                        R(),
                        E.reconnectMode = "retry",
                        C(e, t)
                    } (t, n) : "quit" === e ? (r.
                default.debug("[".concat(E.clientId, "] quit gateway")), E.state = g, E.socket.close(), R()) : "recover" === e && (r.
                default.debug("[".concat(E.clientId, "] Reconnect gateway")), E.state = g, E.socket.close(), R(), E.reconnectMode = "recover", C())
                },
                E.socket.on("notification",
                function(e) {
                    if (r.
                default.debug("[".concat(E.clientId, "] Receive notification: "), e), "ERR_JOIN_BY_MULTI_IP" === _[e.code]) return E.dispatchEvent({
                        type: "onMultiIP",
                        arg: e
                    });
                    e.detail ? E._doWithAction(Pe[_[e.code]]) : e.action && E._doWithAction(e.action)
                }), E.socket.on("onPeerLeave",
                function(e) {
                    var t = u({
                        type: "peer-leave",
                        uid: e.id
                    });
                    if (E.remoteStreamsInChannel.has(e.id) && E.remoteStreamsInChannel.delete(e.id), E.remoteStreams.hasOwnProperty(e.id) && (t.stream = E.remoteStreams[e.id]), E.dispatchEvent(t), E.remoteStreams.hasOwnProperty(e.id)) {
                        r.
                    default.info("[".concat(E.clientId, "] closing stream on peer leave"), e.id);
                        var n = E.remoteStreams[e.id];
                        n.close(),
                        delete E.remoteStreams[e.id],
                        void 0 !== n.pc && (n.pc.close(), n.pc = void 0, E.p2ps.delete(n.p2pId))
                    }
                    E.timers.hasOwnProperty(e.id) && (clearInterval(E.timers[e.id]), clearInterval(E.timers[e.id] + "_RelatedStats"), delete E.timers[e.id]),
                    null != E.audioLevel[e.id] && delete E.audioLevel[e.id],
                    null != E.timer_counter[e.id] && delete E.timer_counter[e.id]
                }), E.socket.on("onUplinkStats",
                function(e) {}), E.socket.on("liveStreamingStarted",
                function(e) {
                    var t = p({
                        type: "liveStreamingStarted",
                        url: e.url
                    });
                    E.dispatchEvent(t)
                }), E.socket.on("liveStreamingFailed",
                function(e) {
                    var t = p({
                        type: "liveStreamingFailed",
                        url: e.url
                    });
                    E.dispatchEvent(t)
                }), E.socket.on("liveStreamingStopped",
                function(e) {
                    var t = p({
                        type: "liveStreamingStopped",
                        url: e.url
                    });
                    E.dispatchEvent(t)
                }), E.socket.on("liveTranscodingUpdated",
                function(e) {
                    var t = p({
                        type: "liveTranscodingUpdated",
                        reason: e.reason
                    });
                    E.dispatchEvent(t)
                }), E.socket.on("streamInjectedStatus",
                function(e) {
                    var t = p({
                        type: "streamInjectedStatus",
                        url: e.url,
                        uid: e.uid,
                        status: e.status
                    });
                    E.dispatchEvent(t)
                }), E.socket.on("onUserOnline",
                function(e) {
                    E.joinInfo.stringUid && "string" != typeof e.id && r.
                default.error("StringUID is Mixed with UintUID"),
                    E.dispatchEvent({
                        type: "peer-online",
                        uid: e.id
                    })
                }))
            },
            w = function(e, t, n) {
                if (void 0 === E.socket) return r.
            default.error("[".concat(E.clientId, "] No socket available")),
                void b(n, A.INVALID_OPERATION);
                try {
                    E.socket.emitSimpleMessage(e,
                    function(e, i) {
                        "success" === e ? "function" == typeof t && t(i) : "function" == typeof n && n(_[i] || i)
                    })
                } catch(t) {
                    r.
                default.error("[".concat(E.clientId, "] Socket emit message failed ").concat(JSON.stringify(e))),
                    r.
                default.error("[".concat(E.clientId, "] "), t),
                    b(n, A.SOCKET_ERROR)
                }
            },
            N = function(e, t) {
                if (void 0 !== E.socket) try {
                    E.socket.emitSimpleMessage(e,
                    function(e, n) {
                        t && t(e, n)
                    })
                } catch(e) {
                    r.
                default.error("[".concat(E.clientId, "] Error in sendSimpleSdp [").concat(e, "]"))
                } else r.
            default.error("[".concat(E.clientId, "] Error in sendSimpleSdp [socket not ready]"))
            },
            D = function() {
                for (var e in E.localStreams) if (void 0 !== E.localStreams[e]) {
                    var t = E.localStreams[e];
                    delete E.localStreams[e],
                    void 0 !== t.pc && (t.pc.close(), t.pc = void 0)
                }
            },
            k = function() {
                for (var e in E.remoteStreamsInChannel.clear(), E.remoteStreams) if (E.remoteStreams.hasOwnProperty(e)) {
                    var t = E.remoteStreams[e];
                    t.isPlaying() && t.stop(),
                    t.close(),
                    delete E.remoteStreams[e],
                    void 0 !== t.pc && (t.pc.close(), t.pc = void 0)
                }
            };
            return E
        },
        We = {
            _gatewayClients: {},
            register: function(e, t) {
                if (!t.uid) {
                    var n = "NO_UID_PROVIDED";
                    return r.
                default.error("[".concat(e.clientId, "] "), n, t),
                    n
                }
                if (t.cname) {
                    if (this._gatewayClients[t.cname] && this._gatewayClients[t.cname][t.uid] && this._gatewayClients[t.cname][t.uid] !== e) {
                        n = "UID_CONFLICT";
                        return r.
                    default.error("[".concat(e.clientId, "] "), n, t),
                        n
                    }
                    return r.
                default.debug("[".concat(e.clientId, "] register client Channel"), t.cname, "Uid", t.uid),
                    this._gatewayClients[t.cname] || (this._gatewayClients[t.cname] = {}),
                    this._gatewayClients[t.cname][t.uid] = e,
                    null
                }
                var n = "NO_CHANNEL_PROVIDED";
                return r.
            default.error("[".concat(e.clientId, "] "), n, t),
                n
            },
            unregister: function(e) {
                var t = e && e.uid,
                n = e.joinInfo && e.joinInfo.cname;
                if (!t || !n) {
                    var i = "INVALID_GATEWAYCLIENT";
                    return r.
                default.error("[".concat(e.clientId, "] "), i),
                    i
                }
                if (this._gatewayClients[n] && this._gatewayClients[n][t]) {
                    if (this._gatewayClients[n][t] !== e) {
                        i = "GATEWAYCLIENT_UID_CONFLICT";
                        return r.
                    default.error("[".concat(e.clientId, "] "), i),
                        i
                    }
                    return r.
                default.debug("[".concat(e.clientId, "] unregister client "), e.uid),
                    delete this._gatewayClients[n][t],
                    null
                }
                var i = "GATEWEAY_CLIENT_UNREGISTERED";
                r.
            default.error("[".concat(e.clientId, "] "), i)
            }
        };
        je.DISCONNECTED = 0,
        je.CONNECTING = 1,
        je.CONNECTED = 2,
        je.DISCONNECTING = 3,
        je.connetionStateMap = {
            0 : "DISCONNECTED",
            1 : "CONNECTING",
            2 : "CONNECTED",
            3 : "DISCONNECTING"
        };
        var He = je,
        Ge = function(e) {
            var t;
            switch (e) {
            case "120p":
            case "120p_1":
                t = ["120p_1", "120p_1", "120p_1"];
                break;
            case "120p_3":
                t = ["120p_3", "120p_3", "120p_3"];
                break;
            case "180p":
            case "180p_1":
                t = ["90p_1", "90p_1", "180p_1"];
                break;
            case "180p_3":
                t = ["120p_3", "120p_3", "180p_3"];
                break;
            case "180p_4":
                t = ["120p_1", "120p_1", "180p_4"];
                break;
            case "240p":
            case "240p_1":
                t = ["120p_1", "120p_1", "240p_1"];
                break;
            case "240p_3":
                t = ["120p_3", "120p_3", "240p_3"];
                break;
            case "240p_4":
                t = ["120p_4", "120p_4", "240p_4"];
                break;
            case "360p":
            case "360p_1":
            case "360p_4":
            case "360p_9":
            case "360p_10":
            case "360p_11":
                t = ["90p_1", "90p_1", "360p_1"];
                break;
            case "360p_3":
            case "360p_6":
                t = ["120p_3", "120p_3", "360p_3"];
                break;
            case "360p_7":
            case "360p_8":
                t = ["120p_1", "120p_1", "360p_7"];
                break;
            case "480p":
            case "480p_1":
            case "480p_2":
            case "480p_4":
            case "480p_10":
                t = ["120p_1", "120p_1", "480p_1"];
                break;
            case "480p_3":
            case "480p_6":
                t = ["120p_3", "120p_3", "480p_3"];
                break;
            case "480p_8":
            case "480p_9":
                t = ["120p_4", "120p_4", "480p_8"];
                break;
            case "720p":
            case "720p_1":
            case "720p_2":
            case "720p_3":
                t = ["90p_1", "90p_1", "720p_1"];
                break;
            case "720p_5":
            case "720p_6":
                t = ["120p_1", "120p_1", "720p_5"];
                break;
            case "1080p":
            case "1080p_1":
            case "1080p_2":
            case "1080p_3":
            case "1080p_5":
                t = ["90p_1", "90p_1", "1080p_1"];
                break;
            case "1440p":
            case "1440p_1":
            case "1440p_2":
                t = ["90p_1", "90p_1", "1440p_1"];
                break;
            case "4k":
            case "4k_1":
            case "4k_3":
                t = ["90p_1", "90p_1", "4k_1"];
                break;
            default:
                t = ["120p_1", "120p_1", "360p_7"]
            }
            return Object(f.isOpera)() ? [e, 15, 50] : Object(f.isFireFox)() ? [t[1], 15, 100] : Object(f.isSafari)() ? [t[2], 15, 50] : [t[0], 15, 50]
        },
        Je = {
            1001 : "FRAMERATE_INPUT_TOO_LOW",
            1002 : "FRAMERATE_SENT_TOO_LOW",
            1003 : "SEND_VIDEO_BITRATE_TOO_LOW",
            1005 : "RECV_VIDEO_DECODE_FAILED",
            2001 : "AUDIO_INPUT_LEVEL_TOO_LOW",
            2002 : "AUDIO_OUTPUT_LEVEL_TOO_LOW",
            2003 : "SEND_AUDIO_BITRATE_TOO_LOW",
            2005 : "RECV_AUDIO_DECODE_FAILED",
            3001 : "FRAMERATE_INPUT_TOO_LOW_RECOVER",
            3002 : "FRAMERATE_SENT_TOO_LOW_RECOVER",
            3003 : "SEND_VIDEO_BITRATE_TOO_LOW_RECOVER",
            3005 : "RECV_VIDEO_DECODE_FAILED_RECOVER",
            4001 : "AUDIO_INPUT_LEVEL_TOO_LOW_RECOVER",
            4002 : "AUDIO_OUTPUT_LEVEL_TOO_LOW_RECOVER",
            4003 : "SEND_AUDIO_BITRATE_TOO_LOW_RECOVER",
            4005 : "RECV_AUDIO_DECODE_FAILED_RECOVER"
        },
        Ye = {
            FramerateInput: 1001,
            FramerateSent: 1002,
            SendVideoBitrate: 1003,
            VideoDecode: 1005,
            AudioIntputLevel: 2001,
            AudioOutputLevel: 2002,
            SendAudioBitrate: 2003,
            AudioDecode: 2005
        },
        ze = function(e) {
            var t = {
                remoteStreamStorage: {},
                localStreamStorage: {}
            };
            return t.gatewayClient = e,
            t.checkAudioOutputLevel = function(e) {
                return ! (e && parseInt(e.audioRecvBytesDelta) > 0 && parseInt(e.audioDecodingNormalDelta) > 0 && 0 === parseInt(e.audioOutputLevel))
            },
            t.checkAudioIntputLevel = function(e) {
                return ! e || 0 !== parseInt(e.audioInputLevel)
            },
            t.checkFramerateInput = function(e, t) {
                if (!e || !t.attributes) return ! 0;
                var n = parseInt(t.attributes.maxFrameRate),
                i = parseInt(e.googFrameRateInput);
                return ! n || !i || !(n > 10 && i < 5 || n < 10 && n >= 5 && i <= 1)
            },
            t.checkFramerateSent = function(e) {
                return ! (e && parseInt(e.googFrameRateInput) > 5 && parseInt(e.googFrameRateSent) <= 1)
            },
            t.checkSendVideoBitrate = function(e) {
                return ! e || 0 !== parseInt(e.videoSendBytesDelta)
            },
            t.checkSendAudioBitrate = function(e) {
                return ! e || 0 !== parseInt(e.audioSendBytesDelta)
            },
            t.checkVideoDecode = function(e) {
                return ! e || 0 === parseInt(e.videoRecvBytesDelta) || 0 !== parseInt(e.googFrameRateDecoded)
            },
            t.checkAudioDecode = function(e) {
                return ! e || 0 === parseInt(e.audioRecvBytesDelta) || 0 !== parseInt(e.audioDecodingNormalDelta)
            },
            t.record = function(e, n, i, o, r) {
                i[e] || (i[e] = {
                    isPrevNormal: !0,
                    record: []
                });
                var a = i[e],
                s = t["check" + e](n, r);
                if (a.record.push(s), a.record.length >= 5) {
                    a.isCurNormal = -1 !== a.record.indexOf(!0);
                    var c = Ye[e];
                    a.isPrevNormal && !a.isCurNormal && t.gatewayClient.dispatchEvent({
                        type: "exception",
                        code: c,
                        msg: Je[c],
                        uid: o
                    }),
                    !a.isPrevNormal && a.isCurNormal && t.gatewayClient.dispatchEvent({
                        type: "exception",
                        code: c + 2e3,
                        msg: Je[c + 2e3],
                        uid: o
                    }),
                    a.isPrevNormal = a.isCurNormal,
                    a.record = []
                }
            },
            t.setLocalStats = function(e) {
                var n = {};
                Object.keys(e).map(function(i) {
                    var o = e[i],
                    r = t.gatewayClient.localStreams[parseInt(i)],
                    a = t.localStreamStorage[i] || {};
                    r && r.hasVideo() && (t.record("SendVideoBitrate", o.videoStats, a, i), t.record("FramerateInput", o.videoStats, a, i, r), t.record("FramerateSent", o.videoStats, a, i)),
                    r && r.hasAudio() && (t.record("AudioIntputLevel", o.audioStats, a, i), t.record("SendAudioBitrate", o.audioStats, a, i)),
                    n[i] = a
                }),
                t.localStreamStorage = n
            },
            t.setRemoteStats = function(n) {
                var i = {};
                Object.keys(n).map(function(o) {
                    var r = n[o],
                    a = e.remoteStreams[o],
                    s = t.remoteStreamStorage[o] || {};
                    a && a.hasVideo() && a.isPlaying() && t.record("VideoDecode", r.videoStats, s, o),
                    a && a.hasAudio() && a.isPlaying() && (t.record("AudioOutputLevel", r.audioStats, s, o), t.record("AudioDecode", r.audioStats, s, o)),
                    i[o] = s
                }),
                t.remoteStreamStorage = i
            },
            t
        },
        qe = new
        function() {
            var e = s();
            return e.states = {
                UNINIT: "UNINIT",
                INITING: "INITING",
                INITED: "INITED"
            },
            e.state = e.states.UNINIT,
            e.type = null,
            e.lastConnectedAt = null,
            e.lastDisconnectedAt = null,
            e.lastTypeChangedAt = null,
            e.networkChangeTimer = null,
            e._init = function(t, n) {
                if (e.state = e.states.INITING, navigator.connection && navigator.connection.addEventListener) {
                    var i = e._getNetworkInfo();
                    e.type = i && i.type,
                    e.state = e.states.INITED,
                    t && t()
                } else e.state = e.states.UNINIT,
                n && n("DO_NOT_SUPPORT")
            },
            e._getNetworkInfo = function() {
                return navigator.connection
            },
            e._reloadNetworkInfo = function() {
                var t = e._getNetworkInfo(),
                n = t && t.type || "UNSUPPORTED",
                i = Date.now();
                if (n !== e.type) {
                    e.lastTypeChangedAt = i,
                    "none" == n ? e.lastDisconnectedAt = i: "none" == e.type && (e.lastConnectedAt = i),
                    e.type = n;
                    var o = {
                        type: "networkTypeChanged",
                        networkType: n
                    };
                    e.dispatchEvent(o)
                }
            },
            e.getStats = function(t, n) {
                var i = {},
                o = e._getNetworkInfo();
                o && (i.NetworkType = o.type || "UNSUPPORTED"),
                setTimeout(function() {
                    t(i)
                },
                0)
            },
            e._init(function() {
                navigator.connection.addEventListener("change",
                function() {
                    e._reloadNetworkInfo()
                }),
                e.networkChangeTimer = setInterval(function() {
                    e._reloadNetworkInfo()
                },
                5e3)
            },
            function(e) {}),
            e
        },
        Ke = function(e) {
            var t = {
                key: void 0,
                highStream: null,
                lowStream: null,
                lowStreamParameter: null,
                isDualStream: !1,
                highStreamState: 2,
                lowStreamState: 2,
                proxyServer: null,
                turnServer: {},
                useProxyServer: !1
            };
            t.mode = e.mode,
            t.clientId = Object(G.b)().slice(0, 5),
            t.uintUid = null;
            e = S()({},
            e);
            return t.aespassword = null,
            t.aesmode = "none",
            t.hasPublished = !1,
            t.getConnectionState = function() {
                var n = a.b.reportApiInvoke(e.sessionId, {
                    name: "Client.getConnectionState",
                    options: arguments,
                    tag: "tracer"
                }),
                i = He.connetionStateMap[t.gatewayClient.state];
                return n(),
                i
            },
            t.setClientRole = function(n, i) {
                var o = a.b.reportApiInvoke(e.sessionId, {
                    callback: i,
                    name: "Client.setClientRole",
                    options: arguments,
                    tag: "tracer"
                });
                if (K(n, "setClientRole", ["host", "audience"]), "rtc" === t.mode) {
                    var s = "RTC mode can not use setClientRole";
                    return r.
                default.warning("[".concat(t.clientId, "] ").concat(s)),
                    o && o(s)
                }
                t.gatewayClient && t.gatewayClient.state === He.CONNECTED ? ("audience" === n && (0 === this.highStreamState ? this._unpublish(this.highStream,
                function() {
                    o && o(null, {
                        role: n
                    })
                },
                function(e) {
                    o && o(e)
                }) : t.gatewayClient.setClientRole("audience", o)), "host" === n && t.gatewayClient.setClientRole("host", o)) : (t.gatewayClient.role = n, o && o(null, {
                    role: n
                }))
            },
            t.getGatewayInfo = function(e) {
                if (t.gatewayClient.state !== He.CONNECTED) {
                    var n = "Client is not in connected state";
                    return r.
                default.error("[".concat(t.clientId, "] ").concat(n)),
                    void e(n)
                }
                t.gatewayClient.getGatewayInfo(function(t) {
                    e(null, t)
                },
                e)
            },
            t.renewToken = function(n, i, o) {
                var s = a.b.reportApiInvoke(e.sessionId, {
                    callback: function(e, t) {
                        if (e) return o && o(e);
                        i && i(t)
                    },
                    name: "Client.renewToken",
                    options: arguments,
                    tag: "tracer"
                });
                if (!ie(n)) throw new Error("Invalid token: Token is of the string type .Length of the string: [1,255]. ASCII characters only.");
                return t.gatewayClient ? t.key ? (t.key = n, void t.gatewayClient.renewToken(n,
                function(e) {
                    return s(null, e)
                },
                s)) : (r.
            default.error("[".concat(t.clientId, "] renewToken should not be called before user join")), s(A.INVALID_OPERATION)) : (r.
            default.error("[".concat(t.clientId, "] renewToken Failed. GatewayClient not Exist")), s(A.INVALID_OPERATION))
            },
            t.setLowStreamParameter = function(n) {
                var i = a.b.reportApiInvoke(e.sessionId, {
                    name: "Client.setLowStreamParameter",
                    options: arguments,
                    tag: "tracer"
                });
                X(n, "param");
                var o = n.width,
                s = n.height,
                c = n.framerate,
                d = n.bitrate;
                se(o) || $(o, "width"),
                se(s) || $(s, "height"),
                se(c) || $(c, "framerate"),
                se(d) || $(d, "bitrate", 1, 1e7),
                (!o && s || o && !s) && r.
            default.warning("[".concat(t.clientId, "] The width and height parameters take effect only when both are set")),
                t.lowStreamParameter = n,
                i()
            },
            t.init = function(n, i, o) {
                var s = a.b.reportApiInvoke(e.sessionId, {
                    callback: function(e, t) {
                        if (e) return o && o(e);
                        i && i(t)
                    },
                    name: "Client.init",
                    options: arguments,
                    tag: "tracer"
                });
                Q(n),
                Object(f.isChromeKernel)() && Object(f.getChromeKernelVersion)() <= 48 ? o ? s(A.BAD_ENVIRONMENT) : Object(G.f)() : (r.
            default.info("[".concat(t.clientId, "] Initializing AgoraRTC client, appId: ").concat(n, ".")), e.appId = n, e.sessionId = Object(G.b)(), s())
            },
            t.setTurnServer = function(n) {
                var i = a.b.reportApiInvoke(e.sessionId, {
                    name: "Client.setTurnServer",
                    options: arguments,
                    tag: "tracer"
                });
                if (t.gatewayClient && t.gatewayClient.state !== He.DISCONNECTED) throw new Error("Set turn server before join channel");
                if (t.useProxyServer) throw new Error("You have already set the proxy");
                X(n, "turnServer");
                var o = n.turnServerURL,
                s = n.username,
                c = n.password,
                d = n.udpport,
                u = n.forceturn,
                l = n.tcpport;
                Q(o, "turnServerURL"),
                Q(s, "username"),
                Q(c, "password"),
                Q(d, "udpport"),
                se(u) || Z(u, "forceturn"),
                t.turnServer.url = o,
                t.turnServer.udpport = d,
                t.turnServer.username = s,
                t.turnServer.credential = c,
                t.turnServer.forceturn = u || !1,
                se(l) || (Q(l, "tcpport"), t.turnServer.tcpport = l, r.
            default.info("[".concat(t.clientId, "] Set turnserver tcpurl. ").concat(t.turnServer.url, ":").concat(t.turnServer.tcpport))),
                r.
            default.info("[".concat(t.clientId, "] Set turnserver udpurl. ").concat(t.turnServer.url, ":").concat(t.turnServer.udpport, ",username: ").concat(t.turnServer.uername, ",password: ").concat(t.turnServer.credential)),
                i()
            },
            t.setProxyServer = function(n) {
                var i = a.b.reportApiInvoke(e.sessionId, {
                    name: "Client.setProxyServer",
                    options: arguments,
                    tag: "tracer"
                });
                if (t.gatewayClient && t.gatewayClient.state !== He.DISCONNECTED) throw new Error("Set proxy server before join channel");
                if (!n) throw new Error("Do not set the proxyServer parameter as empty");
                if (t.useProxyServer) throw new Error("You have already set the proxy");
                Q(n, "proxyServer"),
                t.proxyServer = n,
                a.b.setProxyServer(n),
                r.
            default.setProxyServer(n),
                i()
            },
            t.startProxyServer = function() {
                var n = a.b.reportApiInvoke(e.sessionId, {
                    name: "Client.startProxyServer",
                    options: arguments,
                    tag: "tracer"
                });
                if (t.gatewayClient && t.gatewayClient.state !== He.DISCONNECTED) throw new Error("Start proxy server before join channel");
                if (t.proxyServer || t.turnServer.url) throw new Error("You have already set the proxy");
                t.useProxyServer = !0,
                n()
            },
            t.stopProxyServer = function() {
                var n = a.b.reportApiInvoke(e.sessionId, {
                    name: "Client.stopProxyServer",
                    options: arguments,
                    tag: "tracer"
                });
                if (t.gatewayClient && t.gatewayClient.state !== He.DISCONNECTED) throw new Error("Stop proxy server after leave channel");
                a.b.setProxyServer(),
                r.
            default.setProxyServer(),
                t.turnServer = {},
                t.proxyServer = null,
                t.useProxyServer = !1,
                n()
            },
            t.setEncryptionSecret = function(n) {
                var i = a.b.reportApiInvoke(e.sessionId, {
                    name: "Client.setEncryptionSecret",
                    options: arguments,
                    tag: "tracer"
                });
                Q(n, "password"),
                t.aespassword = n,
                i()
            },
            t.setEncryptionMode = function(n) {
                var i = a.b.reportApiInvoke(e.sessionId, {
                    name: "Client.setEncryptionMode",
                    options: arguments,
                    tag: "tracer"
                });
                if (Q(n, "encryptionMode"), -1 === ve.indexOf(n)) throw new Error('Invalid encryptionMode: encryptionMode should be "aes-128-xts" | "aes-256-xts" | "aes-128-ecb"');
                t.aesmode = n,
                i()
            },
            t.configPublisher = function(n) {
                var i = a.b.reportApiInvoke(e.sessionId, {
                    name: "Client.configPublisher",
                    options: arguments,
                    tag: "tracer"
                });
                X(n, "config");
                var o = n.width,
                r = n.height,
                s = n.framerate,
                c = n.bitrate,
                d = n.publisherUrl;
                $(o, "width"),
                $(r, "height"),
                $(s, "framerate"),
                $(c, "bitrate", 1, 1e7),
                d && Q(d, "publisherUrl"),
                t.gatewayClient.configPublisher(n),
                i()
            },
            t.enableDualStream = function(n, i) {
                var o = a.b.reportApiInvoke(e.sessionId, {
                    callback: function(e, t) {
                        if (e) return i && i(e);
                        n && n(t)
                    },
                    name: "Client.enableDualStream",
                    options: arguments,
                    tag: "tracer"
                });
                return "iOS" === Object(f.getBrowserOS)() ? (a.b.streamSwitch(e.sessionId, {
                    lts: (new Date).getTime(),
                    isdual: !0,
                    succ: !1
                }), o(A.IOS_NOT_SUPPORT)) : Object(f.isWeChatBrowser)() ? (a.b.streamSwitch(e.sessionId, {
                    lts: (new Date).getTime(),
                    isdual: !0,
                    succ: !1
                }), o(A.WECHAT_NOT_SUPPORT)) : (a.b.streamSwitch(e.sessionId, {
                    lts: (new Date).getTime(),
                    isdual: !0,
                    succ: !0
                }), t.isDualStream = !0, void(0 === t.highStreamState ? t._publishLowStream(function(e) {
                    return o(null, e)
                },
                function(e) {
                    r.
                default.warning("[".concat(t.clientId, "]"), e),
                    o(A.ENABLE_DUALSTREAM_FAILED)
                }) : 1 === t.highStreamState ? o(A.STILL_ON_PUBLISHING) : o(null)))
            },
            t.disableDualStream = function(n, i) {
                var o = a.b.reportApiInvoke(e.sessionId, {
                    callback: function(e, t) {
                        if (e) return i && i(e);
                        n && n(t)
                    },
                    name: "Client.disableDualStream",
                    options: arguments,
                    tag: "tracer"
                });
                a.b.streamSwitch(e.sessionId, {
                    lts: (new Date).getTime(),
                    isdual: !1,
                    succ: !0
                }),
                t.isDualStream = !1,
                0 === t.highStreamState ? t._unpublishLowStream(function() {
                    t.highStream.lowStream = null,
                    o()
                },
                function(e) {
                    r.
                default.warning("[".concat(t.clientId, "]"), e),
                    o(A.DISABLE_DUALSTREAM_FAILED)
                }) : 1 === t.highStreamState ? o(A.STILL_ON_PUBLISHING) : o()
            },
            t._createLowStream = function(e, n) {
                if (t.highStream && t.highStream.stream) {
                    var i = S()({},
                    t.highStream.params);
                    if (i.streamID += 1, i.audio = !1, i.video) {
                        var a = t.highStream.stream.getVideoTracks()[0];
                        a ? Y.getVideoCameraIdByLabel(a.label,
                        function(a) {
                            i.cameraId = a;
                            var s = new pe(i);
                            if (s.streamId = t.highStream.getId() + 1, t.lowStreamParameter) {
                                var c = S()({},
                                t.lowStreamParameter);
                                if (!c.width || !c.height) {
                                    var d = Ge(t.highStream.profile),
                                    u = o.SUPPORT_RESOLUTION_LIST[d[0]];
                                    c.width = u[0],
                                    c.height = u[1]
                                }
                                if (c.framerate = c.framerate || 5, c.bitrate = c.bitrate || 50, Object(f.isSafari)() || Object(f.isOpera)()) {
                                    r.
                                default.debug("[".concat(t.clientId, "] Shimming lowStreamParameter"));
                                    u = o.SUPPORT_RESOLUTION_LIST[t.highStream.profile];
                                    c.width = u[0],
                                    c.height = u[1]
                                }
                                s.setVideoProfileCustomPlus(c)
                            } else s.setVideoProfileCustom(Ge(t.highStream.profile));
                            s.init(function() {
                                t.highStream.lowStream = s,
                                t.highStream.userMuteVideo && s.muteVideo(),
                                e && e(s)
                            },
                            n)
                        },
                        n) : n && n(A.HIGH_STREAM_NOT_VIDEO_TRACE)
                    } else n && n(A.HIGH_STREAM_NOT_VIDEO_TRACE)
                } else n && n(A.HIGH_STREAM_NOT_VIDEO_TRACE)
            },
            t._getLowStream = function(e, n) {
                t.lowStream ? e(t.lowStream) : t._createLowStream(function(n) {
                    t.lowStream = n,
                    e(t.lowStream)
                },
                n)
            },
            t._publishLowStream = function(e, n) {
                return 2 !== t.lowStreamState ? n && n(A.LOW_STREAM_ALREADY_PUBLISHED) : t.highStream && t.highStream.hasScreen() ? n && n(A.SHARING_SCREEN_NOT_SUPPORT) : void t._getLowStream(function(i) {
                    t.lowStreamState = 1,
                    t.gatewayClient.publish(i, {
                        streamType: 1
                    },
                    function() {
                        t.lowStreamState = 0,
                        e && e()
                    },
                    function(e) {
                        r.
                    default.debug("[".concat(t.clientId, "] publish low stream failed")),
                        n && n(e)
                    })
                },
                n)
            },
            t._unpublishLowStream = function(e, n) {
                if (0 !== t.lowStreamState) return n && n(A.LOW_STREAM_NOT_YET_PUBLISHED);
                t.lowStream && (t.gatewayClient.unpublish(t.lowStream, {
                    streamType: 1
                },
                function() {},
                function(e) {
                    r.
                default.debug("[".concat(t.clientId, "] unpublish low stream failed")),
                    n && n(e)
                }), t.lowStream.close(), t.lowStream = null, t.lowStreamState = 2, e && e())
            },
            t.join = function(n, i, o, s, c) {
                var d, u = a.b.reportApiInvoke(e.sessionId, {
                    callback: function(e, t) {
                        if (e) return c && c(e);
                        s && s(t)
                    },
                    name: "Client.join",
                    options: arguments,
                    tag: "tracer"
                });
                if (n && !ie(n)) return r.
            default.warning("[".concat(t.clientId, "] Param channelKey should be string")),
                u(A.INVALID_PARAMETER);
                if (!ae(d = i) || !/^[a-zA-Z0-9!#$%&()+-:;<=.>?@[\]^_{}|~,\s]{1,64}$/.test(d)) return r.
            default.error("Invalid Channel Name ".concat(i)),
                r.
            default.warning("[".concat(t.clientId, "] The length must be within 64 bytes. The supported characters: a-z,A-Z,0-9,space,!, #, $, %, &, (, ), +, -, :, ;, <, =, ., >, ?, @, [, ], ^, _,  {, }, |, ~, ,")),
                u(A.INVALID_PARAMETER);
                if ("string" == typeof i && "" === i) return r.
            default.warning("[".concat(t.clientId, "] Param channel should not be empty")),
                u(A.INVALID_PARAMETER);
                if (o && !Object(G.c)(o) && !ee(o, 1, 255)) return r.
            default.error("Invalid UID ".concat(o, " ").concat(q()(o))),
                r.
            default.warning("[".concat(t.clientId, "] [String uid] Length of the string: [1,255]. ASCII characters only. [Number uid] The value range is [0,10000]")),
                u(A.INVALID_PARAMETER);
                if ("string" == typeof o && 0 == o.length) return r.
            default.warning("[".concat(t.clientId, "] String uid should not be empty")),
                u(A.INVALID_PARAMETER);
                if ("string" == typeof o && o.length > 256) return r.
            default.warning("[".concat(t.clientId, "] Length of string uid should be less than 255")),
                u(A.INVALID_PARAMETER);
                t.highStream = null,
                t.lowStream = null,
                t.lowStreamParameter = null,
                t.isDualStream = !1,
                t.highStreamState = 2,
                t.lowStreamState = 2;
                var l = {
                    clientId: t.clientId,
                    appId: e.appId,
                    sid: e.sessionId,
                    cname: i,
                    uid: o,
                    turnServer: t.turnServer,
                    proxyServer: t.proxyServer,
                    token: n || e.appId,
                    useProxyServer: t.useProxyServer
                };
                if ("string" == typeof o && (l.stringUid = o, t.uintUid ? (l.uid = t.uintUid, delete t.uintUid) : l.uid = 0), t.aespassword && "none" !== t.aesmode && S()(l, {
                    aespassword: t.aespassword,
                    aesmode: t.aesmode
                }), a.b.sessionInit(e.sessionId, {
                    lts: (new Date).getTime(),
                    cname: i,
                    appid: e.appId,
                    mode: e.mode,
                    succ: !0
                }), t.onSuccess = function(e) {
                    t.rtcStatsCollector.startNetworkQualityTimer(),
                    t.onSuccess = null,
                    u(null, e)
                },
                t.onFailure = function(e) {
                    return u(e)
                },
                t.channel = i, t.gatewayClient.state !== He.DISCONNECTED) return r.
            default.error("[".concat(t.clientId, "] Client already in connecting/connected state")),
                u(A.INVALID_OPERATION),
                void a.b.joinGateway(e.sessionId, {
                    lts: Date.now(),
                    succ: !1,
                    ec: A.INVALID_OPERATION,
                    addr: null
                });
                t.gatewayClient.state = He.CONNECTING;
                var p = function(o, a) {
                    r.
                default.info("[".concat(t.clientId, "] Joining channel: ").concat(i)),
                    t.gatewayClient.dispatchEvent({
                        type: "config-distribute",
                        config: a,
                        joinInfo: l
                    }),
                    t.key = n || e.appId,
                    l.cid = o.cid,
                    l.uid || (l.uid = o.uid),
                    l.clientId = t.clientId,
                    o.uni_lbs_ip && o.uni_lbs_ip[1] && (l.uni_lbs_ip = o.uni_lbs_ip[1]),
                    l.gatewayAddr = o.gateway_addr,
                    t.joinInfo = l,
                    t.gatewayClient.join(l, t.key,
                    function(e) {
                        r.
                    default.info("[".concat(t.clientId, "] Join channel ").concat(i, " success, join with uid: ").concat(e, ".")),
                        t.onSuccess = null,
                        t.rtcStatsCollector.startNetworkQualityTimer(),
                        u(null, e)
                    },
                    function(e) {
                        return u(e)
                    })
                };
                l.stringUid && !l.uid ? (self.userAccountReq && !self.userAccountReq.isFinished() && self.userAccountReq.cancel(), self.userAccountReq = Le(l), self.userAccountReq.then(function(e) {
                    r.
                default.debug("getUserAccount Success ".concat(e.url, " ").concat(l.stringUid, " => ").concat(e.uid)),
                    l.uid = e.uid,
                    ke(l, p)
                }).
                catch(function(e) {
                    r.
                default.error("getUserAccount rejected", e),
                    u(e)
                })) : ke(l, p)
            },
            t.renewChannelKey = function(n, i, o) {
                var s = a.b.reportApiInvoke(e.sessionId, {
                    callback: function(e, t) {
                        if (e) return o && o(e);
                        i && i(t)
                    },
                    name: "Client.renewChannelKey",
                    options: arguments,
                    tag: "tracer"
                });
                Q(n, "key", 1, 2047),
                void 0 === t.key ? (r.
            default.error("[".concat(t.clientId, "] renewChannelKey should not be called before user join")), s(A.INVALID_OPERATION)) : (t.key = n, t.gatewayClient.key = n, t.gatewayClient.rejoin(), s())
            },
            t.leave = function(n, i) {
                var s = !1,
                c = a.b.reportApiInvoke(e.sessionId, {
                    callback: function(e, o) {
                        if (e) return i && i(e);
                        var r, a;
                        r = t.clientId,
                        a = !1,
                        Ne[r] = a,
                        t._renewSession(),
                        t.rtcStatsCollector.clearNetworkQualityTimer(),
                        n && n(o)
                    },
                    name: "Client.leave",
                    options: arguments,
                    tag: "tracer"
                });
                r.
            default.info("[".concat(t.clientId, "] Leaving channel")),
                self.userAccountReq && !self.userAccountReq.isFinished() && (self.userAccountReq.cancel(), t.gatewayClient.state === He.CONNECTING && (t.gatewayClient.state = He.DISCONNECTED)),
                t.gatewayClient.leave(function(e) {
                    s = !0,
                    c(null, e)
                },
                c),
                setTimeout(function() {
                    s || (t.gatewayClient.socket && (t.gatewayClient.socket.close(), t.gatewayClient.socket = null), t.gatewayClient.state = He.DISCONNECTED, c(null, "LEAVE_MSG_TIMEOUT"))
                },
                Object(o.getParameter)("LEAVE_MSG_TIMEOUT"))
            },
            t._renewSession = function() {
                var n = Object(G.b)();
                if (r.
            default.debug("renewSession ".concat(e.sessionId, " => ").concat(n)), e.sessionId = n, t.joinInfo && (t.joinInfo.sid = n), t.gatewayClient && (t.gatewayClient.joinInfo && (t.gatewayClient.joinInfo.sid = n), t.gatewayClient.localStreams)) for (var i in t.gatewayClient.localStreams) {
                    var o = t.gatewayClient.localStreams[i];
                    o && (o.sid = n)
                }
            },
            t._publish = function(n, i, o) {
                if (2 !== t.highStreamState) return r.
            default.warning("[".concat(t.clientId, "] Can't publish stream when stream already publish ").concat(n.getId())),
                o && o(A.STREAM_ALREADY_PUBLISHED);
                r.
            default.info("[".concat(t.clientId, "] Publishing stream, uid ").concat(n.getId())),
                t.highStream = n,
                t.highStreamState = 1,
                t.highStream.streamId = t.joinInfo.stringUid || t.joinInfo.uid,
                t.hasPublished = !1;
                var a = function(n, i, o) {
                    t.gatewayClient.publish(n, {
                        streamType: 0
                    },
                    function() {
                        n.sid = e.sessionId,
                        t.highStreamState = 0,
                        r.
                    default.info("[".concat(t.clientId, "] Publish success, uid: ").concat(n.getId())),
                        t.isDualStream ? t._publishLowStream(function() {
                            i && i()
                        },
                        function(e) {
                            r.
                        default.warning("[".concat(t.clientId, "] "), e),
                            i && i()
                        }) : i && i()
                    },
                    o)
                };
                "audience" === t.gatewayClient.role && "live" === t.mode ? t.gatewayClient.setClientRole("host",
                function(e) {
                    if (e) return o && o(e);
                    a(n, i, o)
                }) : a(n, i, o)
            },
            t._unpublish = function(e, n, i) {
                if (0 !== t.highStreamState) return r.
            default.warning("[".concat(t.clientId, "] Can't unpublish stream when stream not publish")),
                i && i(A.STREAM_NOT_YET_PUBLISHED);
                r.
            default.info("[".concat(t.clientId, "] Unpublish stream, uid ").concat(e.getId()));
                var o = function(e, n, i) {
                    t.isDualStream && t.lowStream && t._unpublishLowStream(null, i),
                    t.gatewayClient.unpublish(e, {
                        streamType: 0
                    },
                    function() {
                        t.highStreamState = 2,
                        r.
                    default.info("[".concat(t.clientId, "] Unpublish stream success, uid: ").concat(e.getId())),
                        n && n()
                    },
                    function(n) {
                        r.
                    default.info("[".concat(t.clientId, "] Unpublish stream fail, uid: ").concat(e.getId())),
                        i && i(n)
                    })
                };
                "host" === t.gatewayClient.role && "live" === t.mode ? t.gatewayClient.setClientRole("audience",
                function(t) {
                    if (t) return i && i(t);
                    o(e, n, i)
                }) : o(e, n, i)
            },
            t.publish = function(n, i) {
                var o = a.b.reportApiInvoke(e.sessionId, {
                    callback: function(e, t) {
                        if (e) return i && i(e)
                    },
                    name: "Client.publish",
                    tag: "tracer",
                    options: {
                        stream: "too long to show",
                        onFailure: !!i
                    }
                });
                2 === t.highStreamState ? t._publish(n,
                function(e) {
                    return o(null, e)
                },
                function(e) {
                    return o(e)
                }) : o(A.STREAM_ALREADY_PUBLISHED)
            },
            t.unpublish = function(n, i, o) {
                var r = a.b.reportApiInvoke(e.sessionId, {
                    callback: function(e, t) {
                        if (e) return i && i(e);
                        o && o(t)
                    },
                    name: "Client.unpublish",
                    tag: "tracer",
                    options: {
                        stream: "too long to show",
                        onFailure: !!i
                    }
                });
                0 === t.highStreamState ? t._unpublish(n,
                function(e) {
                    return r(null, e)
                },
                function(e) {
                    return r(e)
                }) : r(A.STREAM_NOT_YET_PUBLISHED)
            },
            t.subscribe = function(n, i, o) {
                var s = a.b.reportApiInvoke(e.sessionId, {
                    callback: function(e, t) {
                        if (e) return o && o(e)
                    },
                    name: "Client.subscribe",
                    tag: "tracer",
                    options: {
                        stream: "too long to show",
                        options: i,
                        onFailure: !!o
                    }
                });
                "function" == typeof i && (o = i, i = null),
                X(n, "stream"),
                se(i) || (X(i, "options"), se(i.video) || Z(i.video, "options.video"), se(i.audio) || Z(i.audio, "options.audio"));
                var c = {
                    video: !0,
                    audio: !0
                };
                if (!se(i)) {
                    if (Object(f.isSafari)() && (!i.video || !i.audio)) {
                        var d = "SAFARI_NOT_SUPPORTED_FOR_TRACK_SUBSCRIPTION";
                        return r.
                    default.error("[".concat(t.clientId, "] "), d),
                        void s(d)
                    }
                    if (!se(i.video) && !ne(i.video) || !se(i.audio) && !ne(i.audio) || !1 === i.audio && !1 === i.video) {
                        d = "INVALID_PARAMETER ".concat(JSON.stringify(i));
                        return r.
                    default.error("[".concat(t.clientId, "] "), d),
                        void s(d)
                    }
                }
                n.subscribeOptions ? (S()(n.subscribeOptions, c, i), t.gatewayClient.subscribeChange(n,
                function(e) {
                    return s(null, e)
                },
                s)) : (n.subscribeOptions = S()({},
                c, i), t.gatewayClient.subscribe(n,
                function(e) {
                    return s(null, e)
                },
                s))
            },
            t.unsubscribe = function(n, i) {
                var o = a.b.reportApiInvoke(e.sessionId, {
                    callback: function(e, t) {
                        if (e) return i && i(e)
                    },
                    name: "Client.unsubscribe",
                    tag: "tracer",
                    options: {
                        stream: "too long to show",
                        onFailure: !!i
                    }
                });
                r.
            default.info("[".concat(t.clientId, "] Unsubscribe stream, uid: ").concat(n.getId())),
                t.gatewayClient.unsubscribe(n,
                function(e) {
                    return o(null, e)
                },
                o)
            },
            t.setRemoteVideoStreamType = function(n, i) {
                var o = a.b.reportApiInvoke(e.sessionId, {
                    name: "Client.setRemoteVideoStreamType",
                    tag: "tracer",
                    options: {
                        stream: "too long to show",
                        streamType: i
                    }
                });
                K(i, "streamType", [0, 1]),
                t.gatewayClient.setRemoteVideoStreamType(n, i),
                o()
            },
            t.setStreamFallbackOption = function(n, i) {
                var o = a.b.reportApiInvoke(e.sessionId, {
                    name: "Client.setStreamFallbackOption",
                    tag: "tracer",
                    options: {
                        stream: "too long to show",
                        fallbackType: i
                    }
                });
                K(i, "fallbackType", [0, 1, 2]),
                t.gatewayClient.setStreamFallbackOption(n, i),
                o()
            },
            t.startLiveStreaming = function(n, i) {
                var o = a.b.reportApiInvoke(e.sessionId, {
                    name: "Client.startLiveStreaming",
                    options: arguments,
                    tag: "tracer"
                });
                Q(n, "url"),
                se(i) || Z(i, "transcodingEnabled"),
                t.gatewayClient.startLiveStreaming(n, i),
                o()
            },
            t.stopLiveStreaming = function(n) {
                var i = a.b.reportApiInvoke(e.sessionId, {
                    name: "Client.stopLiveStreaming",
                    options: arguments,
                    tag: "tracer"
                });
                Q(n, "url"),
                t.gatewayClient.stopLiveStreaming(n),
                i()
            },
            t.setLiveTranscoding = function(n) {
                var i = a.b.reportApiInvoke(e.sessionId, {
                    name: "Client.setLiveTranscoding",
                    options: arguments,
                    tag: "tracer"
                });
                X(n, "transcoding");
                var o = n.width,
                r = n.height,
                s = n.videoBitrate,
                c = n.videoFramerate,
                d = n.lowLatency,
                u = n.audioSampleRate,
                l = n.audioBitrate,
                p = n.audioChannels,
                f = n.videoGop,
                m = n.videoCodecProfile,
                g = n.userCount,
                v = n.backgroundColor,
                I = n.transcodingUsers;
                if (se(o) || $(o, "width"), se(r) || $(r, "height"), se(s) || $(s, "videoBitrate", 1, 1e6), se(c) || $(c, "videoFramerate"), se(d) || Z(d, "lowLatency"), se(u) || K(u, "audioSampleRate", [32e3, 44100, 48e3]), se(l) || $(l, "audioBitrate", 1, 128), se(p) || K(p, "audioChannels", [1, 2, 3, 4, 5]), se(f) || $(f, "videoGop"), se(m) || K(m, "videoCodecProfile", [66, 77, 100]), se(g) || $(g, "userCount", 0, 17), se(v) || $(v, "backgroundColor", 0, 16777215), !se(I)) {
                    if (! (I instanceof Array)) throw new Error("[transcodingUsers]: transcodingUsers should be Array");
                    if (I.length > 17) throw new Error("The length of transcodingUsers cannot greater than 17");
                    I.map(function(e, t) {
                        if (!se(e.uid) && !Object(G.c)(e.uid) && !ee(e.uid, 1, 255)) throw new Error("[String uid] Length of the string: [1,255]. ASCII characters only. [Number uid] The value range is [0,10000]");
                        if (se(e.x) || $(e.x, "transcodingUser[".concat(t, "].x"), 0, 1e4), se(e.y) || $(e.y, "transcodingUser[".concat(t, "].y"), 0, 1e4), se(e.width) || $(e.width, "transcodingUser[".concat(t, "].width"), 0, 1e4), se(e.height) || $(e.height, "transcodingUser[".concat(t, "].height"), 0, 1e4), se(e.zOrder) || $(e.zOrder, "transcodingUser[".concat(t, "].zOrder"), 0, 100), !(se(e.alpha) || "number" == typeof e.alpha && e.alpha <= 1 && e.alpha >= 0)) throw new Error("transcodingUser[${index}].alpha: The value range is [0, 1]")
                    })
                }
                S()(Xe, n),
                t.gatewayClient.setLiveTranscoding(Xe),
                i()
            },
            t.addInjectStreamUrl = function(n, i) {
                var o = a.b.reportApiInvoke(e.sessionId, {
                    name: "Client.addInjectStreamUrl",
                    options: arguments,
                    tag: "tracer"
                });
                Q(n, "url", 1, 255),
                X(i, "config"),
                !se(i && i.width) && $(i.width, "config.width", 0, 1e4),
                !se(i && i.height) && $(i.height, "config.height", 0, 1e4),
                !se(i && i.videoGop) && $(i.videoGop, "config.videoGop", 1, 1e4),
                !se(i && i.videoFramerate) && $(i.videoFramerate, "config.videoFramerate", 1, 1e4),
                !se(i && i.videoBitrate) && $(i.videoBitrate, "config.videoBitrate", 1, 1e4),
                !se(i && i.audioSampleRate) && K(i.audioSampleRate, "config.audioSampleRate", [32e3, 44100, 48e3]),
                !se(i && i.audioBitrate) && $(i.audioBitrate, "config.audioBitrate", 1, 1e4),
                !se(i && i.audioChannels) && $(i.audioChannels, "config.audioChannels", 1, 2),
                S()(Qe, i),
                t.gatewayClient.addInjectStreamUrl(n, Qe),
                o()
            },
            t.removeInjectStreamUrl = function(n) {
                var i = a.b.reportApiInvoke(e.sessionId, {
                    name: "Client.removeInjectStreamUrl",
                    options: arguments,
                    tag: "tracer"
                });
                Q(n, "url", 1, 255),
                t.gatewayClient.removeInjectStreamUrl(n),
                i()
            },
            t.enableAudioVolumeIndicator = function(n, i) {
                var o = a.b.reportApiInvoke(e.sessionId, {
                    name: "Client.enableAudioVolumeIndicator",
                    options: arguments,
                    tag: "tracer"
                });
                n = n || 2e3,
                $(i = i || 3, "smooth", 1, 100),
                $(n, "interval", 50, 1e5),
                t.audioVolumeIndication = t.audioVolumeIndication || {
                    enabled: !0
                },
                t.audioVolumeIndication.interval = n,
                t.audioVolumeIndication.smooth = i,
                t.audioVolumeIndication = {
                    interval: n,
                    smooth: i
                },
                r.
            default.info("[".concat(t.clientId, "] enableAudioVolumeIndicator interval ").concat(n, " smooth ").concat(i)),
                t.gatewayClient.enableAudioVolumeIndicator(n, i),
                o()
            },
            t.getNetworkStats = function(e, n) {
                return r.
            default.deprecate("[".concat(t.clientId, "] client.getNetworkStats is deprecated. Use client.getTransportStats instead.")),
                qe.getStats(e, n)
            },
            t.getSystemStats = function(e, t) {
                return g.getStats(e, t)
            },
            t.getRecordingDevices = function(e, t) {
                return Y.getRecordingDevices(e, t)
            },
            t.getPlayoutDevices = function(e, t) {
                return Y.getPlayoutDevices(e, t)
            },
            t.getCameras = function(e, t) {
                return Y.getCameras(e, t)
            },
            t.getRemoteAudioStats = function(e, n) {
                return t.rtcStatsCollector.getRemoteAudioStats(e, n)
            },
            t.getLocalAudioStats = function(e, n) {
                return t.rtcStatsCollector.getLocalAudioStats(e, n)
            },
            t.getRemoteVideoStats = function(e, n) {
                return t.rtcStatsCollector.getRemoteVideoStats(e, n)
            },
            t.getLocalVideoStats = function(e, n) {
                return t.rtcStatsCollector.getLocalVideoStats(e, n)
            },
            t._getRemoteVideoQualityStats = function(e, n) {
                return t.rtcStatsCollector.getRemoteVideoQualityStats(e, n)
            },
            t._getRemoteAudioQualityStats = function(e, n) {
                return t.rtcStatsCollector.getRemoteAudioQualityStats(e, n)
            },
            t.getTransportStats = function(e, n) {
                return t.rtcStatsCollector.getTransportStats(function(t) {
                    return qe.getStats(function(n) {
                        var i = S()({},
                        t, n);
                        e && e(i)
                    },
                    n)
                },
                n)
            },
            t.getSessionStats = function(e, n) {
                return t.rtcStatsCollector.getSessionStats(e, n)
            },
            t.onNetworkQuality = function() {
                return t.rtcStatsCollector.onNetworkQuality(onSuccess, onFailure)
            },
            e.clientId = t.clientId,
            t.gatewayClient = He(e),
            t.on = t.gatewayClient.on,
            t.off = t.gatewayClient.removeEventListener,
            t.rtcStatsCollector = function(e) {
                var t = s();
                return t.gatewayClient = e,
                t.exceptionMonitor = new ze(e),
                t.localStats = {},
                t.remoteStats = {},
                t.session = {
                    sendBytes: 0,
                    recvBytes: 0,
                    WSSendBytes: 0,
                    WSSendBytesDelta: 0,
                    WSRecvBytes: 0,
                    WSRecvBytesDelta: 0,
                    HTTPSendBytes: 0,
                    HTTPSendBytesDelta: 0,
                    HTTPRecvBytes: 0,
                    HTTPRecvBytesDelta: 0
                },
                t.getRemoteAudioStats = function(e) {
                    var n = {};
                    for (var i in t.remoteStats) {
                        var o = {},
                        r = t.remoteStats[i];
                        J(o, "End2EndDelay", r.peer_delay && r.peer_delay.audio_delay),
                        J(o, "TransportDelay", r.peer_delay && r.peer_delay.e2e_delay),
                        J(o, "PacketLossRate", r.peer_delay && r.peer_delay.e2e_audio_lost_ratio_400ms),
                        J(o, "RecvLevel", r.audioStats && r.audioStats.audioOutputLevel),
                        J(o, "RecvBitrate", r.audioRecvBitrate),
                        J(o, "CodecType", r.audioStats && r.audioStats.googCodecName),
                        J(o, "MuteState", r.audioDisabled),
                        J(o, "TotalFreezeTime", r.audioStats && r.audioStats.audioTotalFreezeTime),
                        J(o, "TotalPlayDuration", r.audioStats && r.audioStats.audioTotalPlayDuration),
                        n[i] = o
                    }
                    e && e(n)
                },
                t.getLocalAudioStats = function(e) {
                    var n = {};
                    for (var i in t.localStats) {
                        var o = {},
                        r = t.localStats[i];
                        J(o, "RecordingLevel", r.audioStats && r.audioStats.audioInputLevel),
                        J(o, "SendLevel", r.audioStats && r.audioStats.totalAudioEnergy),
                        J(o, "SamplingRate", r.audioStats && r.audioStats.totalSamplesDuration),
                        J(o, "SendBitrate", r.audioSendBitrate),
                        J(o, "CodecType", r.audioStats && r.audioStats.googCodecName),
                        J(o, "MuteState", r.audioDisabled);
                        var a = t.gatewayClient.localStreams[i];
                        a && a.isPlaying() && J(o, "MuteState", a.userMuteAudio ? "1": "0"),
                        n[i] = o
                    }
                    e && e(n)
                },
                t.getRemoteVideoStats = function(e) {
                    var n = {};
                    for (var i in t.remoteStats) {
                        var o = {},
                        r = t.remoteStats[i];
                        J(o, "End2EndDelay", r.peer_delay && r.peer_delay.video_delay),
                        J(o, "TransportDelay", r.peer_delay && r.peer_delay.e2e_delay),
                        J(o, "PacketLossRate", r.peer_delay && r.peer_delay.e2e_video_lost_ratio_400ms),
                        J(o, "RecvBitrate", r.videoRecvBitrate),
                        J(o, "RecvResolutionWidth", r.videoStats && r.videoStats.googFrameWidthReceived),
                        J(o, "RecvResolutionHeight", r.videoStats && r.videoStats.googFrameHeightReceived),
                        J(o, "RenderResolutionWidth", r.videoStats && r.videoStats.renderRemoteWidth),
                        J(o, "RenderResolutionHeight", r.videoStats && r.videoStats.renderRemoteHeight),
                        J(o, "RenderFrameRate", r.videoStats && r.videoStats.googFrameRateOutput),
                        J(o, "MuteState", r.videoDisabled),
                        J(o, "TotalFreezeTime", r.videoStats && r.videoStats.videoTotalFreezeTime),
                        J(o, "TotalPlayDuration", r.videoStats && r.videoStats.videoTotalPlayDuration),
                        n[i] = o
                    }
                    e && e(n)
                },
                t.getLocalVideoStats = function(e) {
                    var n = {};
                    for (var i in t.localStats) {
                        var o = {},
                        r = t.localStats[i];
                        J(o, "TargetSendBitrate", r.videoTargetSendBitrate),
                        J(o, "SendFrameRate", r.videoStats && r.videoStats.googFrameRateSent),
                        J(o, "SendBitrate", r.videoSendBitrate),
                        J(o, "SendResolutionWidth", r.videoStats && r.videoStats.googFrameWidthSent),
                        J(o, "SendResolutionHeight", r.videoStats && r.videoStats.googFrameHeightSent),
                        J(o, "CaptureResolutionWidth", r.videoStats && r.videoStats.googFrameWidthInput),
                        J(o, "CaptureResolutionHeight", r.videoStats && r.videoStats.googFrameHeightInput),
                        J(o, "EncodeDelay", r.videoStats && r.videoStats.googAvgEncodeMs),
                        J(o, "MuteState", r.videoDisabled),
                        J(o, "TotalFreezeTime", r.videoStats && r.videoStats.videoTotalFreezeTime),
                        J(o, "TotalDuration", r.videoStats && r.videoStats.videoTotalPlayDuration),
                        J(o, "CaptureFrameRate", r.videoStats && r.videoStats.googFrameRateSent),
                        r.videoStats.googFrameWidthInput || J(o, "CaptureResolutionWidth", r.videoStats && r.videoStats.renderLocalWidth),
                        r.videoStats.googFrameHeightInput || J(o, "CaptureResolutionHeight", r.videoStats && r.videoStats.renderLocalHeight),
                        n[i] = o,
                        e && e(n)
                    }
                },
                t.getRemoteVideoQualityStats = function(e) {
                    var n = {};
                    for (var i in t.remoteStats) {
                        var o = {},
                        r = t.remoteStats[i];
                        J(o, "videoReceiveDelay", r.videoStats && r.videoStats.googCurrentDelayMs),
                        J(o, "VideoFreezeRate", r.videoStats && r.videoStats.videoFreezeRate),
                        J(o, "FirstFrameTime", r.firstFrameTime),
                        n[i] = o
                    }
                    e && e(n)
                },
                t.getRemoteAudioQualityStats = function(e) {
                    var n = {};
                    for (var i in t.remoteStats) {
                        var o = {},
                        r = t.remoteStats[i];
                        J(o, "audioReceiveDelay", r.audioStats && r.audioStats.googCurrentDelayMs),
                        J(o, "AudioFreezeRate", r.videoStats && r.videoStats.videoFreezeRate),
                        n[i] = o
                    }
                    e && e(n)
                },
                t.getTransportStats = function(e) {
                    var n = {},
                    i = {},
                    o = t.gatewayClient.traffic_stats,
                    r = o.peer_delay;
                    if (J(n, "OutgoingAvailableBandwidth", t.gatewayClient.OutgoingAvailableBandwidth / 1e3), J(n, "RTT", o && o.access_delay), r) {
                        var a = !0,
                        s = !1,
                        c = void 0;
                        try {
                            for (var d, u = r[Symbol.iterator](); ! (a = (d = u.next()).done); a = !0) {
                                var l = d.value;
                                l.downlink_estimate_bandwidth && (i[l.peer_uid] = l.downlink_estimate_bandwidth / 1e3 + "")
                            }
                        } catch(e) {
                            s = !0,
                            c = e
                        } finally {
                            try {
                                a || null == u.
                                return || u.
                                return ()
                            } finally {
                                if (s) throw c
                            }
                        }
                    }
                    n.IncomingAvailableBandwidth = i,
                    e && e(n)
                },
                t.getSessionStats = function(e) {
                    var n = {},
                    i = t.gatewayClient.traffic_stats,
                    o = t.gatewayClient.socket,
                    r = 0,
                    a = 0;
                    for (var s in t.remoteStats)(c = t.remoteStats[s]) && c.videoStats && c.videoStats.videoRecvBytesDelta && (a += parseInt(c.videoStats.videoRecvBytesDelta)),
                    c && c.audioStats && c.audioStats.audioRecvBytesDelta && (a += parseInt(c.audioStats.audioRecvBytesDelta));
                    for (var s in t.localStats) {
                        var c; (c = t.localStats[s]) && c.videoStats && c.videoStats.videoSendBytesDelta && (r += parseInt(c.videoStats.videoSendBytesDelta)),
                        c && c.audioStats && c.audioStats.audioSendBytesDelta && (r += parseInt(c.audioStats.audioSendBytesDelta))
                    }
                    var d = r + t.session.WSSendBytesDelta + t.session.HTTPSendBytesDelta,
                    u = a + t.session.WSRecvBytesDelta + t.session.HTTPRecvBytesDelta,
                    l = t.session.sendBytes + Object(Ie.b)(),
                    p = t.session.recvBytes + Object(Ie.a)();
                    t.gatewayClient.socket && t.gatewayClient.socket.state === t.gatewayClient.CONNECTED && (l += o.getSendBytes(), p += o.getRecvBytes());
                    var f = 1;
                    i.peer_delay && (f = i.peer_delay.length, f += 1),
                    J(n, "Duration", o.getDuration()),
                    J(n, "UserCount", f),
                    J(n, "SendBytes", l),
                    J(n, "RecvBytes", p),
                    J(n, "SendBitrate", 8 * d / 1e3),
                    J(n, "RecvBitrate", 8 * u / 1e3),
                    e && e(n)
                },
                t.isLocalVideoFreeze = function(e, t) {
                    var n = 0,
                    i = 0;
                    if (!e || !t) return ! 1;
                    if (Object(f.isChrome)() || Object(f.isOpera)()) n = e.googFrameRateInput,
                    i = e.googFrameRateSent;
                    else if (Object(f.isSafari)()) n = parseInt(e.framerateMean),
                    i = parseInt(e.framesEncoded) - parseInt(t.framesEncoded);
                    else {
                        if (!Object(f.isFireFox)()) return ! 1;
                        n = parseInt(e.framerateMean),
                        i = parseInt(e.framesEncoded) - parseInt(t.framesEncoded)
                    }
                    return n > 5 && i < 3
                },
                t.isRemoteVideoFreeze = function(e, t) {
                    var n = 0,
                    i = 0;
                    if (!e || !t) return ! 1;
                    if (Object(f.isChrome)() || Object(f.isOpera)()) n = e.googFrameRateReceived,
                    i = e.googFrameRateDecoded;
                    else if (Object(f.isSafari)()) n = e.framerateMean,
                    i = parseInt(e.framesDecoded) - parseInt(t.framesDecoded);
                    else {
                        if (!Object(f.isFireFox)()) return ! 1;
                        n = parseInt(e.framesReceived) - parseInt(t.framesReceived),
                        i = parseInt(e.framesDecoded) - parseInt(t.framesDecoded)
                    }
                    return n > 5 && n < 10 && i < 3 || n > 10 && n < 20 && i < 4 || n > 20 && i < 5
                },
                t.isAudioFreeze = function(e) {
                    if (Object(f.isChrome)() && e) {
                        if (e.googDecodingPLC && e.googDecodingPLCCNG && e.googDecodingCTN) return (parseInt(e.googDecodingPLC) + parseInt(e.googDecodingPLCCNG)) / parseInt(e.googDecodingCTN) > .2
                    } else if ((Object(f.isSafari)() || Object(f.isFireFox)()) && e.packetsLost && e.packetsReceived) return parseInt(e.packetsLost) / (parseInt(e.packetsLost) + parseInt(e.packetsReceived)) > .2;
                    return ! 1
                },
                t.isAudioDecodeFailed = function(e) {
                    return !! ((Object(f.isChrome)() || Object(f.isOpera)()) && e && parseInt(e.bytesReceived) > 0 && 0 === parseInt(e.googDecodingNormal))
                },
                t.startNetworkQualityTimer = function() {
                    t.clearNetworkQualityTimer(),
                    t.networkQualityTimer = setInterval(function() {
                        if (t.gatewayClient.state !== He.CONNECTED) t.gatewayClient.dispatchEvent({
                            type: "network-quality",
                            uplinkNetworkQuality: 0,
                            downlinkNetworkQuality: 0
                        });
                        else {
                            var e = t.gatewayClient.traffic_stats;
                            t.gatewayClient.dispatchEvent({
                                type: "network-quality",
                                uplinkNetworkQuality: t.networkQualityTrans(e.uplink_network_quality),
                                downlinkNetworkQuality: t.networkQualityTrans(e.downlink_network_quality)
                            })
                        }
                    },
                    2e3)
                },
                t.clearNetworkQualityTimer = function() {
                    t.networkQualityTimer && clearInterval(t.networkQualityTimer)
                },
                t.networkQualityTrans = function(e) {
                    return e >= 0 && e < .17 ? 1 : e >= .17 && e < .36 ? 2 : e >= .36 && e < .59 ? 3 : e >= .59 && e <= 1 ? 4 : e > 1 ? 5 : 0
                },
                t.getStatsTimer = setInterval(function() {
                    var e = t.gatewayClient.traffic_stats,
                    n = Date.now();
                    t.gatewayClient.dispatchEvent({
                        type: "_testException"
                    }),
                    Object.keys(t.localStats).length && t.exceptionMonitor.setLocalStats(t.localStats),
                    Object.keys(t.remoteStats).length && t.exceptionMonitor.setRemoteStats(t.remoteStats);
                    var i = {};
                    Object.keys(t.gatewayClient.remoteStreams).forEach(function(o) {
                        var r = t.gatewayClient.remoteStreams[o],
                        a = t.remoteStats[o],
                        s = {
                            id: o,
                            updatedAt: n
                        };
                        i[o] = s,
                        s.firstFrameTime = r.firstFrameTime,
                        a ? (s.audioTotalPlayDuration = a.audioTotalPlayDuration + 1, s.audioTotalFreezeTime = a.audioTotalFreezeTime, s.isAudioFreeze = !1, s.isAudioDecodeFailed = !1, s.videoTotalPlayDuration = a.videoTotalPlayDuration + 1, s.videoTotalFreezeTime = a.videoTotalFreezeTime, s.isVideoFreeze = !1) : (s.audioTotalPlayDuration = 1, s.audioTotalFreezeTime = 0, s.videoTotalPlayDuration = 1, s.videoTotalFreezeTime = 0);
                        var c = e && e.peer_delay && e.peer_delay.find(function(e) {
                            return e.peer_uid == o
                        });
                        c && (s.peer_delay = c),
                        r && (r.isPlaying() && (s.audioDisabled = r.userMuteAudio || r.peerMuteAudio ? "1": "0", s.videoDisabled = r.userMuteVideo || r.peerMuteVideo ? "1": "0"), a && a.peer_delay && c && a.peer_delay.stream_type !== c.stream_type && t.gatewayClient.dispatchEvent({
                            type: "streamTypeChange",
                            uid: o,
                            streamType: c.stream_type
                        }), r.pc && "established" == r.pc.state && r.pc.getStats(function(e) {
                            if (s.pcStats = e, s.audioStats = e.find(function(e) {
                                return "audio" == e.mediaType && (e.id.indexOf("_recv") > -1 || e.id.toLowerCase().indexOf("inbound") > -1)
                            }), s.videoStats = e.find(function(e) {
                                return "video" == e.mediaType && (e.id.indexOf("_recv") > -1 || e.id.toLowerCase().indexOf("inbound") > -1)
                            }), a && a.audioStats && s.audioStats) {
                                var n = parseInt(s.audioStats.bytesReceived) - parseInt(a.audioStats.bytesReceived),
                                i = parseInt(s.audioStats.googDecodingNormal) - parseInt(a.audioStats.googDecodingNormal);
                                if (s.audioStats.audioRecvBytesDelta = n, s.audioStats.audioDecodingNormalDelta = i, t.session.recvBytes += n, isFinite(n) && s.audioStats.timestamp) {
                                    var o = s.audioStats.timestamp.getTime() - a.audioStats.timestamp.getTime();
                                    s.audioRecvBitrate = Math.floor(8 * n / o)
                                }
                                t.isAudioFreeze(s.audioStats) && s.audioTotalPlayDuration > 10 && (s.audioTotalFreezeTime++, s.isAudioFreeze = !0),
                                t.isAudioDecodeFailed(s.audioStats) && s.audioTotalPlayDuration > 10 && (s.isAudioDecodeFailed = !0),
                                s.audioStats.audioTotalFreezeTime = s.audioTotalFreezeTime,
                                s.audioStats.audioTotalPlayDuration = s.audioTotalPlayDuration,
                                s.audioStats.audioFreezeRate = Math.ceil(100 * s.audioTotalFreezeTime / s.audioTotalPlayDuration)
                            }
                            if (a && a.videoStats && s.videoStats) {
                                var c = parseInt(s.videoStats.bytesReceived) - parseInt(a.videoStats.bytesReceived);
                                s.videoStats.videoRecvBytesDelta = c,
                                t.session.recvBytes += c,
                                isFinite(c) && s.videoStats.timestamp && (o = s.videoStats.timestamp.getTime() - a.videoStats.timestamp.getTime(), s.videoRecvBitrate = Math.floor(8 * c / o)),
                                t.isRemoteVideoFreeze(s.videoStats, a.videoStats) && (s.videoTotalFreezeTime++, s.isVideoFreeze = !0),
                                s.videoStats.videoTotalFreezeTime = s.videoTotalFreezeTime,
                                s.videoStats.videoTotalPlayDuration = s.videoTotalPlayDuration,
                                s.videoStats.videoFreezeRate = Math.ceil(100 * s.videoTotalFreezeTime / s.videoTotalPlayDuration),
                                r.player && r.player.video && r.player.video.videoWidth && r.player.video.videoHeight ? (s.videoStats.renderRemoteWidth = r.player.video.videoWidth, s.videoStats.renderRemoteHeight = r.player.video.videoHeight) : (s.videoStats.renderRemoteWidth = r.videoWidth || s.videoStats.googFrameWidthReceived, s.videoStats.renderRemoteHeight = r.videoHeight || s.videoStats.googFrameHeightReceived)
                            }
                        }))
                    }),
                    t.remoteStats = i;
                    var o = {};
                    if (Object.keys(t.gatewayClient.localStreams).forEach(function(e) {
                        var i = t.gatewayClient.localStreams[e],
                        r = t.localStats[e],
                        a = {
                            id: e,
                            updatedAt: n
                        };
                        o[e] = a,
                        r ? (a.videoTotalPlayDuration = r.videoTotalPlayDuration + 1, a.videoTotalFreezeTime = r.videoTotalFreezeTime, a.isVideoFreeze = !1) : (a.videoTotalPlayDuration = 1, a.videoTotalFreezeTime = 0),
                        i && (i.isPlaying() && (a.audioDisabled = i.userMuteAudio ? "1": "0", a.videoDisabled = i.userMuteVideo ? "1": "0"), i.video && i.attributes.maxVideoBW ? a.videoTargetSendBitrate = i.attributes.maxVideoBW: i.video && i.screenAttributes && (a.videoTargetSendBitrate = i.screenAttributes.maxVideoBW), i.pc && "established" == i.pc.state && i.pc.getStats(function(e) {
                            if (a.pcStats = e.reverse(), a.audioStats = e.find(function(e) {
                                return "audio" == e.mediaType && (e.id.indexOf("_send") > -1 || e.id.toLowerCase().indexOf("outbound") > -1)
                            }), a.videoStats = e.find(function(e) {
                                return "video" == e.mediaType && (e.id.indexOf("_send") > -1 || e.id.toLowerCase().indexOf("outbound") > -1)
                            }), a.audioStats && r && r.audioStats) {
                                var n = parseInt(a.audioStats.bytesSent) - parseInt(r.audioStats.bytesSent);
                                if (a.audioStats.audioSendBytesDelta = n, t.session.sendBytes += n, isFinite(n) && a.audioStats.timestamp) {
                                    var o = a.audioStats.timestamp.getTime() - r.audioStats.timestamp.getTime();
                                    a.audioSendBitrate = Math.floor(8 * n / o)
                                }
                            }
                            if (a.videoStats && r && r.videoStats) {
                                var s = parseInt(a.videoStats.bytesSent) - parseInt(r.videoStats.bytesSent);
                                a.videoStats.videoSendBytesDelta = s,
                                t.session.sendBytes += s,
                                isFinite(s) && a.videoStats.timestamp && (o = a.videoStats.timestamp.getTime() - r.videoStats.timestamp.getTime(), a.videoSendBitrate = Math.floor(8 * s / o)),
                                t.isLocalVideoFreeze(a.videoStats, r.videoStats) && (a.videoTotalFreezeTime++, a.isVideoFreeze = !0),
                                a.videoStats.videoTotalFreezeTime = a.videoTotalFreezeTime,
                                a.videoStats.videoTotalPlayDuration = a.videoTotalPlayDuration,
                                a.videoStats.videoFreezeRate = Math.ceil(100 * a.videoTotalFreezeTime / a.videoTotalPlayDuration),
                                a.videoStats.renderLocalWidth = i.videoWidth || a.videoStats.googFrameWidthSent,
                                a.videoStats.renderLocalHeight = i.videoHeight || a.videoStats.googFrameHeightSent
                            }
                        }))
                    }), t.localStats = o, t.session.HTTPSendBytesDelta = Object(Ie.b)() - t.session.HTTPSendBytes, t.session.HTTPSendBytes = Object(Ie.b)(), t.session.HTTPRecvBytesDelta = Object(Ie.a)() - t.session.HTTPRecvBytes, t.session.HTTPRecvBytes = Object(Ie.a)(), t.gatewayClient.socket && t.gatewayClient.socket.state === t.gatewayClient.CONNECTED) {
                        var r = t.gatewayClient.socket;
                        t.session.WSSendBytesDelta = r.getSendBytes() - t.session.WSSendBytes,
                        t.session.WSSendBytes = r.getSendBytes(),
                        t.session.WSRecvBytesDelta = r.getRecvBytes() - t.session.WSRecvBytes,
                        t.session.WSRecvBytes = r.getRecvBytes()
                    }
                },
                1e3),
                t.gatewayClient.on("join",
                function() {
                    t.session = {
                        sendBytes: 0,
                        recvBytes: 0,
                        WSSendBytes: 0,
                        WSSendBytesDelta: 0,
                        WSRecvBytes: 0,
                        WSRecvBytesDelta: 0,
                        HTTPSendBytes: 0,
                        HTTPSendBytesDelta: 0,
                        HTTPRecvBytes: 0,
                        HTTPRecvBytesDelta: 0
                    }
                }),
                t
            } (t.gatewayClient),
            t.configDistributManager = function(e) {
                var t = {};
                return t.client = e,
                t.client.on("config-distribute",
                function(n) {
                    var i = n.joinInfo,
                    r = n.config;
                    if (r) {
                        se(r.uploadLog) || (Object(o.setParameter)("UPLOAD_LOG", r.uploadLog), a.b.reportApiInvoke(i.sid, {
                            name: "_configDistribute",
                            options: {
                                feature: "uploadLog",
                                value: r.uploadLog
                            }
                        })()),
                        se(r.dualStream) || (e.isDualStream = r.dualStream, a.b.reportApiInvoke(i.sid, {
                            name: "_configDistribute",
                            options: {
                                feature: "dualStream",
                                value: r.dualStream
                            }
                        })()),
                        se(r.streamFallbackOption) || t.client.on("stream-subscribed",
                        function(e) {
                            var n = e.stream;
                            n ? (t.client.gatewayClient.setStreamFallbackOption(n, r.streamFallbackOption), a.b.reportApiInvoke(i.sid, {
                                name: "_configDistribute",
                                options: {
                                    feature: "streamFallbackOption",
                                    value: r.streamFallbackOption,
                                    streamId: n.getId()
                                }
                            })()) : a.b.reportApiInvoke(i.sid, {
                                name: "_configDistribute",
                                options: {
                                    feature: "streamFallbackOption",
                                    value: r.streamFallbackOption,
                                    streamId: n.getId(),
                                    err: "invalid stream"
                                }
                            })()
                        });
                        try {
                            Object.keys(r).map(function(e) {
                                return Object(o.setParameter)(e, r[e])
                            })
                        } catch(e) {}
                    }
                }),
                t
            } (t),
            se(e.turnServer) || t.setTurnServer(e.turnServer),
            se(e.proxyServer) || t.setProxyServer(e.proxyServer),
            "live" === t.mode && (t.gatewayClient.role = "audience"),
            "rtc" === t.mode && (t.gatewayClient.role = "host"),
            t.on("onMultiIP",
            function(e) {
                t.gatewayClient.closeGateway(),
                t.gatewayClient.socket = void 0,
                t.gatewayClient.hasChangeBGPAddress = !0,
                t.joinInfo.multiIP = e.arg.option,
                t.gatewayClient.state = He.CONNECTING;
                var n = function(e) {
                    r.
                default.info("[".concat(t.clientId, "] Joining channel: ").concat(t.channel)),
                    t.joinInfo.cid = e.cid,
                    t.joinInfo.uid || (t.joinInfo.uid = e.uid),
                    t.joinInfo.uni_lbs_ip = e.uni_lbs_ip,
                    t.joinInfo.gatewayAddr = e.gateway_addr,
                    t.onSuccess ? t.gatewayClient.join(t.joinInfo, t.key,
                    function(e) {
                        r.
                    default.info("[".concat(t.clientId, "] Join channel ").concat(t.channel, " success"));
                        var n = t.onSuccess;
                        t.onSuccess = null,
                        t.onFailure = null,
                        n(e)
                    },
                    t.onFailure) : (t.gatewayClient.joinInfo = S()({},
                    t.joinInfo), t.gatewayClient.rejoin())
                };
                t.joinInfo.stringUid && !t.joinInfo.uid ? (self.userAccountReq && !self.userAccountReq.isFinished() && self.userAccountReq.cancel(), self.userAccountReq = Le(joinInfo), self.userAccountReq.then(function(e) {
                    r.
                default.error("getUserAccount Success ".concat(e.url, " ").concat(joinInfo.stringUid, " => ").concat(e.uid)),
                    t.joinInfo.uid = e.uid,
                    ke(t.joinInfo, n, t.onFailure)
                }).
                catch(function(e) {
                    r.
                default.error("getUserAccount rejected", e),
                    t.onFailure(e)
                })) : ke(t.joinInfo, n, t.onFailure)
            }),
            t.on("rejoin-start",
            function() {
                t._renewSession(),
                a.b.sessionInit(e.sessionId, {
                    lts: (new Date).getTime(),
                    extend: {
                        rejoin: !0
                    },
                    cname: t.channel,
                    appid: e.appId,
                    mode: e.mode,
                    succ: !0
                })
            }),
            t.on("recover",
            function() {
                t._renewSession(),
                a.b.sessionInit(e.sessionId, {
                    lts: (new Date).getTime(),
                    extend: {
                        recover: !0
                    },
                    cname: t.channel,
                    appid: e.appId,
                    mode: e.mode,
                    succ: !0
                })
            }),
            t.on("rejoin",
            function() {
                var e = 2 === t.highStreamState ? 2 : 0;
                if (t.onSuccess) {
                    var n = t.onSuccess;
                    t.onSuccess = null,
                    t.onFailure = null,
                    n()
                }
                t.highStream && 0 === e && (r.
            default.info("[".concat(t.clientId, "] publish after rejoin")), t.highStreamState = 2, t.lowStreamState = 2, t.publish(t.highStream,
                function(e) {
                    e && r.
                default.info("[".concat(t.clientId, "] "), e)
                }))
            }),
            t.on("streamPublished",
            function(e) {
                t.hasPublished || (t.hasPublished = !0, t.gatewayClient.dispatchEvent(d({
                    type: "stream-published",
                    stream: e.stream
                })))
            }),
            t.on("pubP2PLost",
            function(e) {
                r.
            default.debug("[".concat(t.clientId, "] Start reconnect local peerConnection: ").concat(t.highStream.getId())),
                t.gatewayClient.dispatchEvent({
                    type: "stream-reconnect-start",
                    uid: t.highStream.getId()
                }),
                1 === t.highStreamState && (t.highStreamState = 0, t.lowStreamState = 0),
                t._unpublish(t.highStream,
                function() {
                    t._publish(t.highStream,
                    function() {
                        r.
                    default.debug("[".concat(t.clientId, "] Reconnect local peerConnection success: ").concat(t.highStream.getId())),
                        t.gatewayClient.dispatchEvent({
                            type: "stream-reconnect-end",
                            uid: t.highStream.getId(),
                            success: !0,
                            reason: ""
                        })
                    },
                    function(e) {
                        r.
                    default.debug("[".concat(t.clientId, "] Reconnect local peerConnection failed: ").concat(e)),
                        t.gatewayClient.dispatchEvent({
                            type: "stream-reconnect-end",
                            uid: t.highStream.getId(),
                            success: !1,
                            reason: e
                        })
                    })
                },
                function(e) {
                    r.
                default.debug("[".concat(t.clientId, "] Reconnect local peerConnection failed: ").concat(e)),
                    t.gatewayClient.dispatchEvent({
                        type: "stream-reconnect-end",
                        uid: t.highStream.getId(),
                        success: !1,
                        reason: e
                    })
                })
            }),
            t.on("subP2PLost",
            function(e) {
                r.
            default.debug("[".concat(t.clientId, "] Start reconnect remote peerConnection: ").concat(e.stream.getId())),
                t.gatewayClient.dispatchEvent({
                    type: "stream-reconnect-start",
                    uid: e.stream.getId()
                }),
                t.gatewayClient.unsubscribe(e.stream,
                function() {
                    t.gatewayClient.subscribe(e.stream,
                    function() {
                        r.
                    default.debug("[".concat(t.clientId, "] Reconnect remote peerConnection success: ").concat(e.stream.getId())),
                        t.gatewayClient.dispatchEvent({
                            type: "stream-reconnect-end",
                            uid: e.stream.getId(),
                            success: !1,
                            reason: ""
                        })
                    },
                    function(n) {
                        r.
                    default.debug("[".concat(t.clientId, "] Reconnect remote peerConnection failed: "), n),
                        t.gatewayClient.dispatchEvent({
                            type: "stream-reconnect-end",
                            uid: e.stream.getId(),
                            success: !1,
                            reason: n
                        })
                    })
                },
                function(n) {
                    r.
                default.debug("[".concat(t.clientId, "] \" + 'Reconnect remote peerConnection failed: "), n),
                    t.gatewayClient.dispatchEvent({
                        type: "stream-reconnect-end",
                        uid: e.stream.getId(),
                        success: !1,
                        reason: n
                    })
                })
            }),
            qe.on("networkTypeChanged",
            function(e) {
                t.gatewayClient && t.gatewayClient.dispatchEvent(e);
                var n = S()({},
                e, {
                    type: "network-type-changed"
                });
                t.gatewayClient.dispatchEvent(n)
            }),
            Y.on("recordingDeviceChanged",
            function(e) {
                t.gatewayClient && t.gatewayClient.dispatchEvent(e);
                var n = S()({},
                e, {
                    type: "recording-device-changed"
                });
                t.gatewayClient.dispatchEvent(n)
            }),
            Y.on("playoutDeviceChanged",
            function(e) {
                t.gatewayClient && t.gatewayClient.dispatchEvent(e);
                var n = S()({},
                e, {
                    type: "playout-device-changed"
                });
                t.gatewayClient.dispatchEvent(n)
            }),
            Y.on("cameraChanged",
            function(e) {
                t.gatewayClient && t.gatewayClient.dispatchEvent(e);
                var n = S()({},
                e, {
                    type: "camera-changed"
                });
                t.gatewayClient.dispatchEvent(n)
            }),
            t.gatewayClient.on("streamTypeChange",
            function(n) {
                var i = S()({},
                n, {
                    type: "stream-type-changed"
                });
                t.gatewayClient.dispatchEvent(i),
                a.b.reportApiInvoke(e.sessionId, {
                    name: "streamTypeChange"
                })(null, JSON.stringify(n))
            }),
            t
        },
        Xe = {
            width: 640,
            height: 360,
            videoBitrate: 400,
            videoFramerate: 15,
            lowLatency: !1,
            audioSampleRate: 48e3,
            audioBitrate: 48,
            audioChannels: 1,
            videoGop: 30,
            videoCodecProfile: 100,
            userCount: 0,
            userConfigExtraInfo: {},
            backgroundColor: 0,
            transcodingUsers: []
        },
        Qe = {
            width: 0,
            height: 0,
            videoGop: 30,
            videoFramerate: 15,
            videoBitrate: 400,
            audioSampleRate: 44100,
            audioBitrate: 48,
            audioChannels: 1
        },
        $e = Y.getDevices,
        Ze = U,
        et = JSON.parse(JSON.stringify(o.SUPPORT_RESOLUTION_LIST));
        t.
    default = {
            TranscodingUser: {
                uid: 0,
                x: 0,
                y: 0,
                width: 0,
                height: 0,
                zOrder: 0,
                alpha: 1
            },
            LiveTranscoding: Xe,
            createClient: function(e) {
                var t = a.b.reportApiInvoke(null, {
                    name: "createClient",
                    options: arguments,
                    tag: "tracer"
                }); (e = S()({},
                e || {})).codec || (e.codec = function(e) {
                    switch (e) {
                    case "h264_interop":
                        return "h264";
                    default:
                        return "vp8"
                    }
                } (e.mode));
                var n = function(e) {
                    return - 1 === me.indexOf(e.mode) ? A.INVALID_CLIENT_MODE: -1 === ge.indexOf(e.codec) ? A.INVALID_CLIENT_CODEC: "h264_interop" == e.mode && "h264" !== e.codec && A.CLIENT_MODE_CODEC_MISMATCH
                } (e);
                if (n) throw r.
            default.error("Invalid parameter setting MODE: ".concat(e.mode, " CODEC: ").concat(e.codec, " ERROR ").concat(n)),
                t(n),
                new Error(n);
                return r.
            default.info("Creating client, MODE: ".concat(e.mode, " CODEC: ").concat(e.codec)),
                function(e) {
                    switch (e.mode) {
                    case "interop":
                    case "h264_interop":
                        e.mode = "live";
                        break;
                    case "web-only":
                        e.mode = "rtc"
                    }
                } (e),
                t(null, e),
                Ke(e)
            },
            createStream: function(e) {
                var t = a.b.reportApiInvoke(null, {
                    name: "createStream",
                    options: arguments,
                    tag: "tracer"
                });
                X(e, "StreamSpec");
                var n = e.streamID,
                i = e.audio,
                o = e.video,
                s = e.screen,
                c = (e.audioSource, e.videoSource, e.cameraId),
                d = e.microphoneId,
                u = e.mirror,
                l = e.extensionId,
                p = e.mediaSource,
                f = e.audioProcessing;
                if (!se(n) && !Object(G.c)(n) && !ee(n, 1, 255)) throw new Error("[String streamID] Length of the string: [1,255]. ASCII characters only. [Number streamID] The value range is Uint32");
                if (Z(i, "audio"), Z(o, "video"), se(s) || Z(s, "screen"), se(c) || Q(c, "cameraId", 0, 255, !1), se(d) || Q(d, "microphoneId", 0, 255, !1), se(l) || Q(l, "extensionId"), se(p) || K(p, "mediaSource", ["screen", "application", "window"]), se(u) || Z(u, "mirror"), !se(f)) {
                    var m = f.AGC,
                    g = f.AEC,
                    v = f.ANS;
                    se(m) || Z(m, "AGC"),
                    se(g) || Z(g, "AEC"),
                    se(v) || Z(v, "ANS")
                }
                r.
            default.debug("Create stream");
                var S = pe(e);
                return t(),
                S
            },
            Logger: r.
        default,
            getDevices: $e,
            getScreenSources: Ze,
            getParameter: o.getParameter,
            setParameter: o.setParameter,
            checkSystemRequirements: function() {
                var e = a.b.reportApiInvoke(null, {
                    name: "checkSystemRequirements",
                    options: arguments,
                    tag: "tracer"
                }),
                t = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection,
                n = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.msGetUserMedia || navigator.mozGetUserMedia || navigator.mediaDevices && navigator.mediaDevices.getUserMedia,
                i = window.WebSocket,
                o = !!t && !!n && !!i,
                s = !1;
                r.
            default.debug(f.getBrowserInfo(), "isAPISupport:" + o),
                f.isChrome() && f.getBrowserVersion() >= 58 && "iOS" !== f.getBrowserOS() && (s = !0),
                f.isFireFox() && f.getBrowserVersion() >= 56 && (s = !0),
                f.isOpera() && f.getBrowserVersion() >= 45 && (s = !0),
                f.isSafari() && f.getBrowserVersion() >= 11 && (s = !0),
                f.isEdge() && (s = !0),
                (f.isWeChatBrowser() || f.isQQBrowser()) && "iOS" !== f.getBrowserOS() && (s = !0),
                f.isSupportedPC() || f.isSupportedMobile() || (s = !1);
                var c = o && s;
                return e(null, c),
                c
            },
            getSupportedCodec: fe.getSupportedCodec,
            VERSION: o.VERSION,
            BUILD: o.BUILD,
            PROFILE_TABLE: et,
            AUDIO_SAMPLE_RATE_32000: 32e3,
            AUDIO_SAMPLE_RATE_44100: 44100,
            AUDIO_SAMPLE_RATE_48000: 48e3,
            VIDEO_CODEC_PROFILE_BASELINE: 66,
            VIDEO_CODEC_PROFILE_MAIN: 77,
            VIDEO_CODEC_PROFILE_HIGH: 100,
            REMOTE_VIDEO_STREAM_HIGH: 0,
            REMOTE_VIDEO_STREAM_LOW: 1,
            REMOTE_VIDEO_STREAM_MEDIUM: 2
        }
    }]).
default
});