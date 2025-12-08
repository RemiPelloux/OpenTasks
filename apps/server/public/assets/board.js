function Xf(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Zu = { exports: {} }, yi = {}, qu = { exports: {} }, z = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qr = Symbol.for("react.element"), Gf = Symbol.for("react.portal"), Yf = Symbol.for("react.fragment"), Jf = Symbol.for("react.strict_mode"), Zf = Symbol.for("react.profiler"), qf = Symbol.for("react.provider"), ep = Symbol.for("react.context"), tp = Symbol.for("react.forward_ref"), np = Symbol.for("react.suspense"), rp = Symbol.for("react.memo"), lp = Symbol.for("react.lazy"), Na = Symbol.iterator;
function ip(e) {
  return e === null || typeof e != "object" ? null : (e = Na && e[Na] || e["@@iterator"], typeof e == "function" ? e : null);
}
var ec = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, tc = Object.assign, nc = {};
function Jn(e, t, n) {
  this.props = e, this.context = t, this.refs = nc, this.updater = n || ec;
}
Jn.prototype.isReactComponent = {};
Jn.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
Jn.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function rc() {
}
rc.prototype = Jn.prototype;
function vs(e, t, n) {
  this.props = e, this.context = t, this.refs = nc, this.updater = n || ec;
}
var gs = vs.prototype = new rc();
gs.constructor = vs;
tc(gs, Jn.prototype);
gs.isPureReactComponent = !0;
var ja = Array.isArray, lc = Object.prototype.hasOwnProperty, ys = { current: null }, ic = { key: !0, ref: !0, __self: !0, __source: !0 };
function oc(e, t, n) {
  var r, l = {}, i = null, o = null;
  if (t != null) for (r in t.ref !== void 0 && (o = t.ref), t.key !== void 0 && (i = "" + t.key), t) lc.call(t, r) && !ic.hasOwnProperty(r) && (l[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) l.children = n;
  else if (1 < s) {
    for (var a = Array(s), u = 0; u < s; u++) a[u] = arguments[u + 2];
    l.children = a;
  }
  if (e && e.defaultProps) for (r in s = e.defaultProps, s) l[r] === void 0 && (l[r] = s[r]);
  return { $$typeof: qr, type: e, key: i, ref: o, props: l, _owner: ys.current };
}
function op(e, t) {
  return { $$typeof: qr, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function ws(e) {
  return typeof e == "object" && e !== null && e.$$typeof === qr;
}
function sp(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var Ra = /\/+/g;
function bi(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? sp("" + e.key) : t.toString(36);
}
function Tl(e, t, n, r, l) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else switch (i) {
    case "string":
    case "number":
      o = !0;
      break;
    case "object":
      switch (e.$$typeof) {
        case qr:
        case Gf:
          o = !0;
      }
  }
  if (o) return o = e, l = l(o), e = r === "" ? "." + bi(o, 0) : r, ja(l) ? (n = "", e != null && (n = e.replace(Ra, "$&/") + "/"), Tl(l, t, n, "", function(u) {
    return u;
  })) : l != null && (ws(l) && (l = op(l, n + (!l.key || o && o.key === l.key ? "" : ("" + l.key).replace(Ra, "$&/") + "/") + e)), t.push(l)), 1;
  if (o = 0, r = r === "" ? "." : r + ":", ja(e)) for (var s = 0; s < e.length; s++) {
    i = e[s];
    var a = r + bi(i, s);
    o += Tl(i, t, n, a, l);
  }
  else if (a = ip(e), typeof a == "function") for (e = a.call(e), s = 0; !(i = e.next()).done; ) i = i.value, a = r + bi(i, s++), o += Tl(i, t, n, a, l);
  else if (i === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return o;
}
function cl(e, t, n) {
  if (e == null) return e;
  var r = [], l = 0;
  return Tl(e, r, "", "", function(i) {
    return t.call(n, i, l++);
  }), r;
}
function ap(e) {
  if (e._status === -1) {
    var t = e._result;
    t = t(), t.then(function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n);
    }, function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n);
    }), e._status === -1 && (e._status = 0, e._result = t);
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Ne = { current: null }, Il = { transition: null }, up = { ReactCurrentDispatcher: Ne, ReactCurrentBatchConfig: Il, ReactCurrentOwner: ys };
function sc() {
  throw Error("act(...) is not supported in production builds of React.");
}
z.Children = { map: cl, forEach: function(e, t, n) {
  cl(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return cl(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return cl(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!ws(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
z.Component = Jn;
z.Fragment = Yf;
z.Profiler = Zf;
z.PureComponent = vs;
z.StrictMode = Jf;
z.Suspense = np;
z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = up;
z.act = sc;
z.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = tc({}, e.props), l = e.key, i = e.ref, o = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, o = ys.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps) var s = e.type.defaultProps;
    for (a in t) lc.call(t, a) && !ic.hasOwnProperty(a) && (r[a] = t[a] === void 0 && s !== void 0 ? s[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    s = Array(a);
    for (var u = 0; u < a; u++) s[u] = arguments[u + 2];
    r.children = s;
  }
  return { $$typeof: qr, type: e.type, key: l, ref: i, props: r, _owner: o };
};
z.createContext = function(e) {
  return e = { $$typeof: ep, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: qf, _context: e }, e.Consumer = e;
};
z.createElement = oc;
z.createFactory = function(e) {
  var t = oc.bind(null, e);
  return t.type = e, t;
};
z.createRef = function() {
  return { current: null };
};
z.forwardRef = function(e) {
  return { $$typeof: tp, render: e };
};
z.isValidElement = ws;
z.lazy = function(e) {
  return { $$typeof: lp, _payload: { _status: -1, _result: e }, _init: ap };
};
z.memo = function(e, t) {
  return { $$typeof: rp, type: e, compare: t === void 0 ? null : t };
};
z.startTransition = function(e) {
  var t = Il.transition;
  Il.transition = {};
  try {
    e();
  } finally {
    Il.transition = t;
  }
};
z.unstable_act = sc;
z.useCallback = function(e, t) {
  return Ne.current.useCallback(e, t);
};
z.useContext = function(e) {
  return Ne.current.useContext(e);
};
z.useDebugValue = function() {
};
z.useDeferredValue = function(e) {
  return Ne.current.useDeferredValue(e);
};
z.useEffect = function(e, t) {
  return Ne.current.useEffect(e, t);
};
z.useId = function() {
  return Ne.current.useId();
};
z.useImperativeHandle = function(e, t, n) {
  return Ne.current.useImperativeHandle(e, t, n);
};
z.useInsertionEffect = function(e, t) {
  return Ne.current.useInsertionEffect(e, t);
};
z.useLayoutEffect = function(e, t) {
  return Ne.current.useLayoutEffect(e, t);
};
z.useMemo = function(e, t) {
  return Ne.current.useMemo(e, t);
};
z.useReducer = function(e, t, n) {
  return Ne.current.useReducer(e, t, n);
};
z.useRef = function(e) {
  return Ne.current.useRef(e);
};
z.useState = function(e) {
  return Ne.current.useState(e);
};
z.useSyncExternalStore = function(e, t, n) {
  return Ne.current.useSyncExternalStore(e, t, n);
};
z.useTransition = function() {
  return Ne.current.useTransition();
};
z.version = "18.3.1";
qu.exports = z;
var g = qu.exports;
const K = /* @__PURE__ */ Xf(g);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cp = g, dp = Symbol.for("react.element"), fp = Symbol.for("react.fragment"), pp = Object.prototype.hasOwnProperty, hp = cp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, mp = { key: !0, ref: !0, __self: !0, __source: !0 };
function ac(e, t, n) {
  var r, l = {}, i = null, o = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (o = t.ref);
  for (r in t) pp.call(t, r) && !mp.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) l[r] === void 0 && (l[r] = t[r]);
  return { $$typeof: dp, type: e, key: i, ref: o, props: l, _owner: hp.current };
}
yi.Fragment = fp;
yi.jsx = ac;
yi.jsxs = ac;
Zu.exports = yi;
var c = Zu.exports, xo = {}, uc = { exports: {} }, $e = {}, cc = { exports: {} }, dc = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
  function t(I, P) {
    var O = I.length;
    I.push(P);
    e: for (; 0 < O; ) {
      var $ = O - 1 >>> 1, F = I[$];
      if (0 < l(F, P)) I[$] = P, I[O] = F, O = $;
      else break e;
    }
  }
  function n(I) {
    return I.length === 0 ? null : I[0];
  }
  function r(I) {
    if (I.length === 0) return null;
    var P = I[0], O = I.pop();
    if (O !== P) {
      I[0] = O;
      e: for (var $ = 0, F = I.length, ve = F >>> 1; $ < ve; ) {
        var le = 2 * ($ + 1) - 1, T = I[le], A = le + 1, ie = I[A];
        if (0 > l(T, O)) A < F && 0 > l(ie, T) ? (I[$] = ie, I[A] = O, $ = A) : (I[$] = T, I[le] = O, $ = le);
        else if (A < F && 0 > l(ie, O)) I[$] = ie, I[A] = O, $ = A;
        else break e;
      }
    }
    return P;
  }
  function l(I, P) {
    var O = I.sortIndex - P.sortIndex;
    return O !== 0 ? O : I.id - P.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function() {
      return i.now();
    };
  } else {
    var o = Date, s = o.now();
    e.unstable_now = function() {
      return o.now() - s;
    };
  }
  var a = [], u = [], m = 1, p = null, v = 3, y = !1, k = !1, x = !1, D = typeof setTimeout == "function" ? setTimeout : null, f = typeof clearTimeout == "function" ? clearTimeout : null, d = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function h(I) {
    for (var P = n(u); P !== null; ) {
      if (P.callback === null) r(u);
      else if (P.startTime <= I) r(u), P.sortIndex = P.expirationTime, t(a, P);
      else break;
      P = n(u);
    }
  }
  function w(I) {
    if (x = !1, h(I), !k) if (n(a) !== null) k = !0, st(E);
    else {
      var P = n(u);
      P !== null && q(w, P.startTime - I);
    }
  }
  function E(I, P) {
    k = !1, x && (x = !1, f(C), C = -1), y = !0;
    var O = v;
    try {
      for (h(P), p = n(a); p !== null && (!(p.expirationTime > P) || I && !M()); ) {
        var $ = p.callback;
        if (typeof $ == "function") {
          p.callback = null, v = p.priorityLevel;
          var F = $(p.expirationTime <= P);
          P = e.unstable_now(), typeof F == "function" ? p.callback = F : p === n(a) && r(a), h(P);
        } else r(a);
        p = n(a);
      }
      if (p !== null) var ve = !0;
      else {
        var le = n(u);
        le !== null && q(w, le.startTime - P), ve = !1;
      }
      return ve;
    } finally {
      p = null, v = O, y = !1;
    }
  }
  var N = !1, S = null, C = -1, R = 5, L = -1;
  function M() {
    return !(e.unstable_now() - L < R);
  }
  function ne() {
    if (S !== null) {
      var I = e.unstable_now();
      L = I;
      var P = !0;
      try {
        P = S(!0, I);
      } finally {
        P ? re() : (N = !1, S = null);
      }
    } else N = !1;
  }
  var re;
  if (typeof d == "function") re = function() {
    d(ne);
  };
  else if (typeof MessageChannel < "u") {
    var ke = new MessageChannel(), vt = ke.port2;
    ke.port1.onmessage = ne, re = function() {
      vt.postMessage(null);
    };
  } else re = function() {
    D(ne, 0);
  };
  function st(I) {
    S = I, N || (N = !0, re());
  }
  function q(I, P) {
    C = D(function() {
      I(e.unstable_now());
    }, P);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(I) {
    I.callback = null;
  }, e.unstable_continueExecution = function() {
    k || y || (k = !0, st(E));
  }, e.unstable_forceFrameRate = function(I) {
    0 > I || 125 < I ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : R = 0 < I ? Math.floor(1e3 / I) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return v;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(a);
  }, e.unstable_next = function(I) {
    switch (v) {
      case 1:
      case 2:
      case 3:
        var P = 3;
        break;
      default:
        P = v;
    }
    var O = v;
    v = P;
    try {
      return I();
    } finally {
      v = O;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(I, P) {
    switch (I) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        I = 3;
    }
    var O = v;
    v = I;
    try {
      return P();
    } finally {
      v = O;
    }
  }, e.unstable_scheduleCallback = function(I, P, O) {
    var $ = e.unstable_now();
    switch (typeof O == "object" && O !== null ? (O = O.delay, O = typeof O == "number" && 0 < O ? $ + O : $) : O = $, I) {
      case 1:
        var F = -1;
        break;
      case 2:
        F = 250;
        break;
      case 5:
        F = 1073741823;
        break;
      case 4:
        F = 1e4;
        break;
      default:
        F = 5e3;
    }
    return F = O + F, I = { id: m++, callback: P, priorityLevel: I, startTime: O, expirationTime: F, sortIndex: -1 }, O > $ ? (I.sortIndex = O, t(u, I), n(a) === null && I === n(u) && (x ? (f(C), C = -1) : x = !0, q(w, O - $))) : (I.sortIndex = F, t(a, I), k || y || (k = !0, st(E))), I;
  }, e.unstable_shouldYield = M, e.unstable_wrapCallback = function(I) {
    var P = v;
    return function() {
      var O = v;
      v = P;
      try {
        return I.apply(this, arguments);
      } finally {
        v = O;
      }
    };
  };
})(dc);
cc.exports = dc;
var vp = cc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gp = g, Be = vp;
function j(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var fc = /* @__PURE__ */ new Set(), Pr = {};
function mn(e, t) {
  Vn(e, t), Vn(e + "Capture", t);
}
function Vn(e, t) {
  for (Pr[e] = t, e = 0; e < t.length; e++) fc.add(t[e]);
}
var Et = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), So = Object.prototype.hasOwnProperty, yp = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Da = {}, Ta = {};
function wp(e) {
  return So.call(Ta, e) ? !0 : So.call(Da, e) ? !1 : yp.test(e) ? Ta[e] = !0 : (Da[e] = !0, !1);
}
function xp(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Sp(e, t, n, r) {
  if (t === null || typeof t > "u" || xp(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null) switch (n.type) {
    case 3:
      return !t;
    case 4:
      return t === !1;
    case 5:
      return isNaN(t);
    case 6:
      return isNaN(t) || 1 > t;
  }
  return !1;
}
function je(e, t, n, r, l, i, o) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = o;
}
var me = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  me[e] = new je(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  me[t] = new je(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  me[e] = new je(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  me[e] = new je(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  me[e] = new je(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  me[e] = new je(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  me[e] = new je(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  me[e] = new je(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  me[e] = new je(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var xs = /[\-:]([a-z])/g;
function Ss(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    xs,
    Ss
  );
  me[t] = new je(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(xs, Ss);
  me[t] = new je(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(xs, Ss);
  me[t] = new je(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  me[e] = new je(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
me.xlinkHref = new je("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  me[e] = new je(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function ks(e, t, n, r) {
  var l = me.hasOwnProperty(t) ? me[t] : null;
  (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Sp(t, n, l, r) && (n = null), r || l === null ? wp(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Dt = gp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, dl = Symbol.for("react.element"), En = Symbol.for("react.portal"), Nn = Symbol.for("react.fragment"), Cs = Symbol.for("react.strict_mode"), ko = Symbol.for("react.profiler"), pc = Symbol.for("react.provider"), hc = Symbol.for("react.context"), Es = Symbol.for("react.forward_ref"), Co = Symbol.for("react.suspense"), Eo = Symbol.for("react.suspense_list"), Ns = Symbol.for("react.memo"), Mt = Symbol.for("react.lazy"), mc = Symbol.for("react.offscreen"), Ia = Symbol.iterator;
function ar(e) {
  return e === null || typeof e != "object" ? null : (e = Ia && e[Ia] || e["@@iterator"], typeof e == "function" ? e : null);
}
var J = Object.assign, Vi;
function gr(e) {
  if (Vi === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    Vi = t && t[1] || "";
  }
  return `
` + Vi + e;
}
var Wi = !1;
function Qi(e, t) {
  if (!e || Wi) return "";
  Wi = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t) if (t = function() {
      throw Error();
    }, Object.defineProperty(t.prototype, "props", { set: function() {
      throw Error();
    } }), typeof Reflect == "object" && Reflect.construct) {
      try {
        Reflect.construct(t, []);
      } catch (u) {
        var r = u;
      }
      Reflect.construct(e, [], t);
    } else {
      try {
        t.call();
      } catch (u) {
        r = u;
      }
      e.call(t.prototype);
    }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (var l = u.stack.split(`
`), i = r.stack.split(`
`), o = l.length - 1, s = i.length - 1; 1 <= o && 0 <= s && l[o] !== i[s]; ) s--;
      for (; 1 <= o && 0 <= s; o--, s--) if (l[o] !== i[s]) {
        if (o !== 1 || s !== 1)
          do
            if (o--, s--, 0 > s || l[o] !== i[s]) {
              var a = `
` + l[o].replace(" at new ", " at ");
              return e.displayName && a.includes("<anonymous>") && (a = a.replace("<anonymous>", e.displayName)), a;
            }
          while (1 <= o && 0 <= s);
        break;
      }
    }
  } finally {
    Wi = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? gr(e) : "";
}
function kp(e) {
  switch (e.tag) {
    case 5:
      return gr(e.type);
    case 16:
      return gr("Lazy");
    case 13:
      return gr("Suspense");
    case 19:
      return gr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = Qi(e.type, !1), e;
    case 11:
      return e = Qi(e.type.render, !1), e;
    case 1:
      return e = Qi(e.type, !0), e;
    default:
      return "";
  }
}
function No(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Nn:
      return "Fragment";
    case En:
      return "Portal";
    case ko:
      return "Profiler";
    case Cs:
      return "StrictMode";
    case Co:
      return "Suspense";
    case Eo:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case hc:
      return (e.displayName || "Context") + ".Consumer";
    case pc:
      return (e._context.displayName || "Context") + ".Provider";
    case Es:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case Ns:
      return t = e.displayName || null, t !== null ? t : No(e.type) || "Memo";
    case Mt:
      t = e._payload, e = e._init;
      try {
        return No(e(t));
      } catch {
      }
  }
  return null;
}
function Cp(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return No(t);
    case 8:
      return t === Cs ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Yt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function vc(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Ep(e) {
  var t = vc(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var l = n.get, i = n.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function() {
      return l.call(this);
    }, set: function(o) {
      r = "" + o, i.call(this, o);
    } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(o) {
      r = "" + o;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[t];
    } };
  }
}
function fl(e) {
  e._valueTracker || (e._valueTracker = Ep(e));
}
function gc(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = vc(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Hl(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function jo(e, t) {
  var n = t.checked;
  return J({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function La(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = Yt(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function yc(e, t) {
  t = t.checked, t != null && ks(e, "checked", t, !1);
}
function Ro(e, t) {
  yc(e, t);
  var n = Yt(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Do(e, t.type, n) : t.hasOwnProperty("defaultValue") && Do(e, t.type, Yt(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function _a(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function Do(e, t, n) {
  (t !== "number" || Hl(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var yr = Array.isArray;
function zn(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Yt(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        e[l].selected = !0, r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function To(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(j(91));
  return J({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Pa(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(j(92));
      if (yr(n)) {
        if (1 < n.length) throw Error(j(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: Yt(n) };
}
function wc(e, t) {
  var n = Yt(t.value), r = Yt(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function Oa(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function xc(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Io(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? xc(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var pl, Sc = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, l);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (pl = pl || document.createElement("div"), pl.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = pl.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function Or(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Sr = {
  animationIterationCount: !0,
  aspectRatio: !0,
  borderImageOutset: !0,
  borderImageSlice: !0,
  borderImageWidth: !0,
  boxFlex: !0,
  boxFlexGroup: !0,
  boxOrdinalGroup: !0,
  columnCount: !0,
  columns: !0,
  flex: !0,
  flexGrow: !0,
  flexPositive: !0,
  flexShrink: !0,
  flexNegative: !0,
  flexOrder: !0,
  gridArea: !0,
  gridRow: !0,
  gridRowEnd: !0,
  gridRowSpan: !0,
  gridRowStart: !0,
  gridColumn: !0,
  gridColumnEnd: !0,
  gridColumnSpan: !0,
  gridColumnStart: !0,
  fontWeight: !0,
  lineClamp: !0,
  lineHeight: !0,
  opacity: !0,
  order: !0,
  orphans: !0,
  tabSize: !0,
  widows: !0,
  zIndex: !0,
  zoom: !0,
  fillOpacity: !0,
  floodOpacity: !0,
  stopOpacity: !0,
  strokeDasharray: !0,
  strokeDashoffset: !0,
  strokeMiterlimit: !0,
  strokeOpacity: !0,
  strokeWidth: !0
}, Np = ["Webkit", "ms", "Moz", "O"];
Object.keys(Sr).forEach(function(e) {
  Np.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), Sr[t] = Sr[e];
  });
});
function kc(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Sr.hasOwnProperty(e) && Sr[e] ? ("" + t).trim() : t + "px";
}
function Cc(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, l = kc(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
  }
}
var jp = J({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Lo(e, t) {
  if (t) {
    if (jp[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(j(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(j(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(j(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(j(62));
  }
}
function _o(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Po = null;
function js(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Oo = null, Fn = null, Un = null;
function Ma(e) {
  if (e = nl(e)) {
    if (typeof Oo != "function") throw Error(j(280));
    var t = e.stateNode;
    t && (t = Ci(t), Oo(e.stateNode, e.type, t));
  }
}
function Ec(e) {
  Fn ? Un ? Un.push(e) : Un = [e] : Fn = e;
}
function Nc() {
  if (Fn) {
    var e = Fn, t = Un;
    if (Un = Fn = null, Ma(e), t) for (e = 0; e < t.length; e++) Ma(t[e]);
  }
}
function jc(e, t) {
  return e(t);
}
function Rc() {
}
var Ki = !1;
function Dc(e, t, n) {
  if (Ki) return e(t, n);
  Ki = !0;
  try {
    return jc(e, t, n);
  } finally {
    Ki = !1, (Fn !== null || Un !== null) && (Rc(), Nc());
  }
}
function Mr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Ci(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(j(231, t, typeof n));
  return n;
}
var Mo = !1;
if (Et) try {
  var ur = {};
  Object.defineProperty(ur, "passive", { get: function() {
    Mo = !0;
  } }), window.addEventListener("test", ur, ur), window.removeEventListener("test", ur, ur);
} catch {
  Mo = !1;
}
function Rp(e, t, n, r, l, i, o, s, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (m) {
    this.onError(m);
  }
}
var kr = !1, bl = null, Vl = !1, Ao = null, Dp = { onError: function(e) {
  kr = !0, bl = e;
} };
function Tp(e, t, n, r, l, i, o, s, a) {
  kr = !1, bl = null, Rp.apply(Dp, arguments);
}
function Ip(e, t, n, r, l, i, o, s, a) {
  if (Tp.apply(this, arguments), kr) {
    if (kr) {
      var u = bl;
      kr = !1, bl = null;
    } else throw Error(j(198));
    Vl || (Vl = !0, Ao = u);
  }
}
function vn(e) {
  var t = e, n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do
      t = e, t.flags & 4098 && (n = t.return), e = t.return;
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Tc(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function Aa(e) {
  if (vn(e) !== e) throw Error(j(188));
}
function Lp(e) {
  var t = e.alternate;
  if (!t) {
    if (t = vn(e), t === null) throw Error(j(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var i = l.alternate;
    if (i === null) {
      if (r = l.return, r !== null) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === i.child) {
      for (i = l.child; i; ) {
        if (i === n) return Aa(l), e;
        if (i === r) return Aa(l), t;
        i = i.sibling;
      }
      throw Error(j(188));
    }
    if (n.return !== r.return) n = l, r = i;
    else {
      for (var o = !1, s = l.child; s; ) {
        if (s === n) {
          o = !0, n = l, r = i;
          break;
        }
        if (s === r) {
          o = !0, r = l, n = i;
          break;
        }
        s = s.sibling;
      }
      if (!o) {
        for (s = i.child; s; ) {
          if (s === n) {
            o = !0, n = i, r = l;
            break;
          }
          if (s === r) {
            o = !0, r = i, n = l;
            break;
          }
          s = s.sibling;
        }
        if (!o) throw Error(j(189));
      }
    }
    if (n.alternate !== r) throw Error(j(190));
  }
  if (n.tag !== 3) throw Error(j(188));
  return n.stateNode.current === n ? e : t;
}
function Ic(e) {
  return e = Lp(e), e !== null ? Lc(e) : null;
}
function Lc(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Lc(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var _c = Be.unstable_scheduleCallback, za = Be.unstable_cancelCallback, _p = Be.unstable_shouldYield, Pp = Be.unstable_requestPaint, ee = Be.unstable_now, Op = Be.unstable_getCurrentPriorityLevel, Rs = Be.unstable_ImmediatePriority, Pc = Be.unstable_UserBlockingPriority, Wl = Be.unstable_NormalPriority, Mp = Be.unstable_LowPriority, Oc = Be.unstable_IdlePriority, wi = null, ht = null;
function Ap(e) {
  if (ht && typeof ht.onCommitFiberRoot == "function") try {
    ht.onCommitFiberRoot(wi, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var nt = Math.clz32 ? Math.clz32 : Up, zp = Math.log, Fp = Math.LN2;
function Up(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (zp(e) / Fp | 0) | 0;
}
var hl = 64, ml = 4194304;
function wr(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Ql(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, l = e.suspendedLanes, i = e.pingedLanes, o = n & 268435455;
  if (o !== 0) {
    var s = o & ~l;
    s !== 0 ? r = wr(s) : (i &= o, i !== 0 && (r = wr(i)));
  } else o = n & ~l, o !== 0 ? r = wr(o) : i !== 0 && (r = wr(i));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & l) && (l = r & -r, i = t & -t, l >= i || l === 16 && (i & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - nt(t), l = 1 << n, r |= e[n], t &= ~l;
  return r;
}
function Bp(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function $p(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var o = 31 - nt(i), s = 1 << o, a = l[o];
    a === -1 ? (!(s & n) || s & r) && (l[o] = Bp(s, t)) : a <= t && (e.expiredLanes |= s), i &= ~s;
  }
}
function zo(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Mc() {
  var e = hl;
  return hl <<= 1, !(hl & 4194240) && (hl = 64), e;
}
function Xi(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function el(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - nt(t), e[t] = n;
}
function Hp(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - nt(n), i = 1 << l;
    t[l] = 0, r[l] = -1, e[l] = -1, n &= ~i;
  }
}
function Ds(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - nt(n), l = 1 << r;
    l & t | e[r] & t && (e[r] |= t), n &= ~l;
  }
}
var b = 0;
function Ac(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var zc, Ts, Fc, Uc, Bc, Fo = !1, vl = [], Ht = null, bt = null, Vt = null, Ar = /* @__PURE__ */ new Map(), zr = /* @__PURE__ */ new Map(), Ft = [], bp = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Fa(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Ht = null;
      break;
    case "dragenter":
    case "dragleave":
      bt = null;
      break;
    case "mouseover":
    case "mouseout":
      Vt = null;
      break;
    case "pointerover":
    case "pointerout":
      Ar.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      zr.delete(t.pointerId);
  }
}
function cr(e, t, n, r, l, i) {
  return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [l] }, t !== null && (t = nl(t), t !== null && Ts(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
}
function Vp(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return Ht = cr(Ht, e, t, n, r, l), !0;
    case "dragenter":
      return bt = cr(bt, e, t, n, r, l), !0;
    case "mouseover":
      return Vt = cr(Vt, e, t, n, r, l), !0;
    case "pointerover":
      var i = l.pointerId;
      return Ar.set(i, cr(Ar.get(i) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return i = l.pointerId, zr.set(i, cr(zr.get(i) || null, e, t, n, r, l)), !0;
  }
  return !1;
}
function $c(e) {
  var t = ln(e.target);
  if (t !== null) {
    var n = vn(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Tc(n), t !== null) {
          e.blockedOn = t, Bc(e.priority, function() {
            Fc(n);
          });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Ll(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Uo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      Po = r, n.target.dispatchEvent(r), Po = null;
    } else return t = nl(n), t !== null && Ts(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function Ua(e, t, n) {
  Ll(e) && n.delete(t);
}
function Wp() {
  Fo = !1, Ht !== null && Ll(Ht) && (Ht = null), bt !== null && Ll(bt) && (bt = null), Vt !== null && Ll(Vt) && (Vt = null), Ar.forEach(Ua), zr.forEach(Ua);
}
function dr(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Fo || (Fo = !0, Be.unstable_scheduleCallback(Be.unstable_NormalPriority, Wp)));
}
function Fr(e) {
  function t(l) {
    return dr(l, e);
  }
  if (0 < vl.length) {
    dr(vl[0], e);
    for (var n = 1; n < vl.length; n++) {
      var r = vl[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (Ht !== null && dr(Ht, e), bt !== null && dr(bt, e), Vt !== null && dr(Vt, e), Ar.forEach(t), zr.forEach(t), n = 0; n < Ft.length; n++) r = Ft[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Ft.length && (n = Ft[0], n.blockedOn === null); ) $c(n), n.blockedOn === null && Ft.shift();
}
var Bn = Dt.ReactCurrentBatchConfig, Kl = !0;
function Qp(e, t, n, r) {
  var l = b, i = Bn.transition;
  Bn.transition = null;
  try {
    b = 1, Is(e, t, n, r);
  } finally {
    b = l, Bn.transition = i;
  }
}
function Kp(e, t, n, r) {
  var l = b, i = Bn.transition;
  Bn.transition = null;
  try {
    b = 4, Is(e, t, n, r);
  } finally {
    b = l, Bn.transition = i;
  }
}
function Is(e, t, n, r) {
  if (Kl) {
    var l = Uo(e, t, n, r);
    if (l === null) lo(e, t, r, Xl, n), Fa(e, r);
    else if (Vp(l, e, t, n, r)) r.stopPropagation();
    else if (Fa(e, r), t & 4 && -1 < bp.indexOf(e)) {
      for (; l !== null; ) {
        var i = nl(l);
        if (i !== null && zc(i), i = Uo(e, t, n, r), i === null && lo(e, t, r, Xl, n), i === l) break;
        l = i;
      }
      l !== null && r.stopPropagation();
    } else lo(e, t, r, null, n);
  }
}
var Xl = null;
function Uo(e, t, n, r) {
  if (Xl = null, e = js(r), e = ln(e), e !== null) if (t = vn(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = Tc(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return Xl = e, null;
}
function Hc(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Op()) {
        case Rs:
          return 1;
        case Pc:
          return 4;
        case Wl:
        case Mp:
          return 16;
        case Oc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Bt = null, Ls = null, _l = null;
function bc() {
  if (_l) return _l;
  var e, t = Ls, n = t.length, r, l = "value" in Bt ? Bt.value : Bt.textContent, i = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++) ;
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === l[i - r]; r++) ;
  return _l = l.slice(e, 1 < r ? 1 - r : void 0);
}
function Pl(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function gl() {
  return !0;
}
function Ba() {
  return !1;
}
function He(e) {
  function t(n, r, l, i, o) {
    this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = i, this.target = o, this.currentTarget = null;
    for (var s in e) e.hasOwnProperty(s) && (n = e[s], this[s] = n ? n(i) : i[s]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? gl : Ba, this.isPropagationStopped = Ba, this;
  }
  return J(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = gl);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = gl);
  }, persist: function() {
  }, isPersistent: gl }), t;
}
var Zn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, _s = He(Zn), tl = J({}, Zn, { view: 0, detail: 0 }), Xp = He(tl), Gi, Yi, fr, xi = J({}, tl, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Ps, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== fr && (fr && e.type === "mousemove" ? (Gi = e.screenX - fr.screenX, Yi = e.screenY - fr.screenY) : Yi = Gi = 0, fr = e), Gi);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Yi;
} }), $a = He(xi), Gp = J({}, xi, { dataTransfer: 0 }), Yp = He(Gp), Jp = J({}, tl, { relatedTarget: 0 }), Ji = He(Jp), Zp = J({}, Zn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), qp = He(Zp), eh = J({}, Zn, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), th = He(eh), nh = J({}, Zn, { data: 0 }), Ha = He(nh), rh = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
}, lh = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
}, ih = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function oh(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = ih[e]) ? !!t[e] : !1;
}
function Ps() {
  return oh;
}
var sh = J({}, tl, { key: function(e) {
  if (e.key) {
    var t = rh[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = Pl(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? lh[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Ps, charCode: function(e) {
  return e.type === "keypress" ? Pl(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Pl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), ah = He(sh), uh = J({}, xi, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), ba = He(uh), ch = J({}, tl, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Ps }), dh = He(ch), fh = J({}, Zn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), ph = He(fh), hh = J({}, xi, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), mh = He(hh), vh = [9, 13, 27, 32], Os = Et && "CompositionEvent" in window, Cr = null;
Et && "documentMode" in document && (Cr = document.documentMode);
var gh = Et && "TextEvent" in window && !Cr, Vc = Et && (!Os || Cr && 8 < Cr && 11 >= Cr), Va = " ", Wa = !1;
function Wc(e, t) {
  switch (e) {
    case "keyup":
      return vh.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Qc(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var jn = !1;
function yh(e, t) {
  switch (e) {
    case "compositionend":
      return Qc(t);
    case "keypress":
      return t.which !== 32 ? null : (Wa = !0, Va);
    case "textInput":
      return e = t.data, e === Va && Wa ? null : e;
    default:
      return null;
  }
}
function wh(e, t) {
  if (jn) return e === "compositionend" || !Os && Wc(e, t) ? (e = bc(), _l = Ls = Bt = null, jn = !1, e) : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Vc && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var xh = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Qa(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!xh[e.type] : t === "textarea";
}
function Kc(e, t, n, r) {
  Ec(r), t = Gl(t, "onChange"), 0 < t.length && (n = new _s("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Er = null, Ur = null;
function Sh(e) {
  ld(e, 0);
}
function Si(e) {
  var t = Tn(e);
  if (gc(t)) return e;
}
function kh(e, t) {
  if (e === "change") return t;
}
var Xc = !1;
if (Et) {
  var Zi;
  if (Et) {
    var qi = "oninput" in document;
    if (!qi) {
      var Ka = document.createElement("div");
      Ka.setAttribute("oninput", "return;"), qi = typeof Ka.oninput == "function";
    }
    Zi = qi;
  } else Zi = !1;
  Xc = Zi && (!document.documentMode || 9 < document.documentMode);
}
function Xa() {
  Er && (Er.detachEvent("onpropertychange", Gc), Ur = Er = null);
}
function Gc(e) {
  if (e.propertyName === "value" && Si(Ur)) {
    var t = [];
    Kc(t, Ur, e, js(e)), Dc(Sh, t);
  }
}
function Ch(e, t, n) {
  e === "focusin" ? (Xa(), Er = t, Ur = n, Er.attachEvent("onpropertychange", Gc)) : e === "focusout" && Xa();
}
function Eh(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return Si(Ur);
}
function Nh(e, t) {
  if (e === "click") return Si(t);
}
function jh(e, t) {
  if (e === "input" || e === "change") return Si(t);
}
function Rh(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var lt = typeof Object.is == "function" ? Object.is : Rh;
function Br(e, t) {
  if (lt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!So.call(t, l) || !lt(e[l], t[l])) return !1;
  }
  return !0;
}
function Ga(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Ya(e, t) {
  var n = Ga(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (r = e + n.textContent.length, e <= t && r >= t) return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Ga(n);
  }
}
function Yc(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Yc(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function Jc() {
  for (var e = window, t = Hl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Hl(e.document);
  }
  return t;
}
function Ms(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function Dh(e) {
  var t = Jc(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Yc(n.ownerDocument.documentElement, n)) {
    if (r !== null && Ms(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var l = n.textContent.length, i = Math.min(r.start, l);
        r = r.end === void 0 ? i : Math.min(r.end, l), !e.extend && i > r && (l = r, r = i, i = l), l = Ya(n, i);
        var o = Ya(
          n,
          r
        );
        l && o && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== o.node || e.focusOffset !== o.offset) && (t = t.createRange(), t.setStart(l.node, l.offset), e.removeAllRanges(), i > r ? (e.addRange(t), e.extend(o.node, o.offset)) : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var Th = Et && "documentMode" in document && 11 >= document.documentMode, Rn = null, Bo = null, Nr = null, $o = !1;
function Ja(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  $o || Rn == null || Rn !== Hl(r) || (r = Rn, "selectionStart" in r && Ms(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Nr && Br(Nr, r) || (Nr = r, r = Gl(Bo, "onSelect"), 0 < r.length && (t = new _s("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Rn)));
}
function yl(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Dn = { animationend: yl("Animation", "AnimationEnd"), animationiteration: yl("Animation", "AnimationIteration"), animationstart: yl("Animation", "AnimationStart"), transitionend: yl("Transition", "TransitionEnd") }, eo = {}, Zc = {};
Et && (Zc = document.createElement("div").style, "AnimationEvent" in window || (delete Dn.animationend.animation, delete Dn.animationiteration.animation, delete Dn.animationstart.animation), "TransitionEvent" in window || delete Dn.transitionend.transition);
function ki(e) {
  if (eo[e]) return eo[e];
  if (!Dn[e]) return e;
  var t = Dn[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in Zc) return eo[e] = t[n];
  return e;
}
var qc = ki("animationend"), ed = ki("animationiteration"), td = ki("animationstart"), nd = ki("transitionend"), rd = /* @__PURE__ */ new Map(), Za = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function qt(e, t) {
  rd.set(e, t), mn(t, [e]);
}
for (var to = 0; to < Za.length; to++) {
  var no = Za[to], Ih = no.toLowerCase(), Lh = no[0].toUpperCase() + no.slice(1);
  qt(Ih, "on" + Lh);
}
qt(qc, "onAnimationEnd");
qt(ed, "onAnimationIteration");
qt(td, "onAnimationStart");
qt("dblclick", "onDoubleClick");
qt("focusin", "onFocus");
qt("focusout", "onBlur");
qt(nd, "onTransitionEnd");
Vn("onMouseEnter", ["mouseout", "mouseover"]);
Vn("onMouseLeave", ["mouseout", "mouseover"]);
Vn("onPointerEnter", ["pointerout", "pointerover"]);
Vn("onPointerLeave", ["pointerout", "pointerover"]);
mn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
mn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
mn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
mn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
mn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
mn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var xr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), _h = new Set("cancel close invalid load scroll toggle".split(" ").concat(xr));
function qa(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, Ip(r, t, void 0, e), e.currentTarget = null;
}
function ld(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], l = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t) for (var o = r.length - 1; 0 <= o; o--) {
        var s = r[o], a = s.instance, u = s.currentTarget;
        if (s = s.listener, a !== i && l.isPropagationStopped()) break e;
        qa(l, s, u), i = a;
      }
      else for (o = 0; o < r.length; o++) {
        if (s = r[o], a = s.instance, u = s.currentTarget, s = s.listener, a !== i && l.isPropagationStopped()) break e;
        qa(l, s, u), i = a;
      }
    }
  }
  if (Vl) throw e = Ao, Vl = !1, Ao = null, e;
}
function W(e, t) {
  var n = t[Qo];
  n === void 0 && (n = t[Qo] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (id(t, e, 2, !1), n.add(r));
}
function ro(e, t, n) {
  var r = 0;
  t && (r |= 4), id(n, e, r, t);
}
var wl = "_reactListening" + Math.random().toString(36).slice(2);
function $r(e) {
  if (!e[wl]) {
    e[wl] = !0, fc.forEach(function(n) {
      n !== "selectionchange" && (_h.has(n) || ro(n, !1, e), ro(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[wl] || (t[wl] = !0, ro("selectionchange", !1, t));
  }
}
function id(e, t, n, r) {
  switch (Hc(t)) {
    case 1:
      var l = Qp;
      break;
    case 4:
      l = Kp;
      break;
    default:
      l = Is;
  }
  n = l.bind(null, t, n, e), l = void 0, !Mo || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
}
function lo(e, t, n, r, l) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null) e: for (; ; ) {
    if (r === null) return;
    var o = r.tag;
    if (o === 3 || o === 4) {
      var s = r.stateNode.containerInfo;
      if (s === l || s.nodeType === 8 && s.parentNode === l) break;
      if (o === 4) for (o = r.return; o !== null; ) {
        var a = o.tag;
        if ((a === 3 || a === 4) && (a = o.stateNode.containerInfo, a === l || a.nodeType === 8 && a.parentNode === l)) return;
        o = o.return;
      }
      for (; s !== null; ) {
        if (o = ln(s), o === null) return;
        if (a = o.tag, a === 5 || a === 6) {
          r = i = o;
          continue e;
        }
        s = s.parentNode;
      }
    }
    r = r.return;
  }
  Dc(function() {
    var u = i, m = js(n), p = [];
    e: {
      var v = rd.get(e);
      if (v !== void 0) {
        var y = _s, k = e;
        switch (e) {
          case "keypress":
            if (Pl(n) === 0) break e;
          case "keydown":
          case "keyup":
            y = ah;
            break;
          case "focusin":
            k = "focus", y = Ji;
            break;
          case "focusout":
            k = "blur", y = Ji;
            break;
          case "beforeblur":
          case "afterblur":
            y = Ji;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            y = $a;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            y = Yp;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            y = dh;
            break;
          case qc:
          case ed:
          case td:
            y = qp;
            break;
          case nd:
            y = ph;
            break;
          case "scroll":
            y = Xp;
            break;
          case "wheel":
            y = mh;
            break;
          case "copy":
          case "cut":
          case "paste":
            y = th;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            y = ba;
        }
        var x = (t & 4) !== 0, D = !x && e === "scroll", f = x ? v !== null ? v + "Capture" : null : v;
        x = [];
        for (var d = u, h; d !== null; ) {
          h = d;
          var w = h.stateNode;
          if (h.tag === 5 && w !== null && (h = w, f !== null && (w = Mr(d, f), w != null && x.push(Hr(d, w, h)))), D) break;
          d = d.return;
        }
        0 < x.length && (v = new y(v, k, null, n, m), p.push({ event: v, listeners: x }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (v = e === "mouseover" || e === "pointerover", y = e === "mouseout" || e === "pointerout", v && n !== Po && (k = n.relatedTarget || n.fromElement) && (ln(k) || k[Nt])) break e;
        if ((y || v) && (v = m.window === m ? m : (v = m.ownerDocument) ? v.defaultView || v.parentWindow : window, y ? (k = n.relatedTarget || n.toElement, y = u, k = k ? ln(k) : null, k !== null && (D = vn(k), k !== D || k.tag !== 5 && k.tag !== 6) && (k = null)) : (y = null, k = u), y !== k)) {
          if (x = $a, w = "onMouseLeave", f = "onMouseEnter", d = "mouse", (e === "pointerout" || e === "pointerover") && (x = ba, w = "onPointerLeave", f = "onPointerEnter", d = "pointer"), D = y == null ? v : Tn(y), h = k == null ? v : Tn(k), v = new x(w, d + "leave", y, n, m), v.target = D, v.relatedTarget = h, w = null, ln(m) === u && (x = new x(f, d + "enter", k, n, m), x.target = h, x.relatedTarget = D, w = x), D = w, y && k) t: {
            for (x = y, f = k, d = 0, h = x; h; h = Cn(h)) d++;
            for (h = 0, w = f; w; w = Cn(w)) h++;
            for (; 0 < d - h; ) x = Cn(x), d--;
            for (; 0 < h - d; ) f = Cn(f), h--;
            for (; d--; ) {
              if (x === f || f !== null && x === f.alternate) break t;
              x = Cn(x), f = Cn(f);
            }
            x = null;
          }
          else x = null;
          y !== null && eu(p, v, y, x, !1), k !== null && D !== null && eu(p, D, k, x, !0);
        }
      }
      e: {
        if (v = u ? Tn(u) : window, y = v.nodeName && v.nodeName.toLowerCase(), y === "select" || y === "input" && v.type === "file") var E = kh;
        else if (Qa(v)) if (Xc) E = jh;
        else {
          E = Eh;
          var N = Ch;
        }
        else (y = v.nodeName) && y.toLowerCase() === "input" && (v.type === "checkbox" || v.type === "radio") && (E = Nh);
        if (E && (E = E(e, u))) {
          Kc(p, E, n, m);
          break e;
        }
        N && N(e, v, u), e === "focusout" && (N = v._wrapperState) && N.controlled && v.type === "number" && Do(v, "number", v.value);
      }
      switch (N = u ? Tn(u) : window, e) {
        case "focusin":
          (Qa(N) || N.contentEditable === "true") && (Rn = N, Bo = u, Nr = null);
          break;
        case "focusout":
          Nr = Bo = Rn = null;
          break;
        case "mousedown":
          $o = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          $o = !1, Ja(p, n, m);
          break;
        case "selectionchange":
          if (Th) break;
        case "keydown":
        case "keyup":
          Ja(p, n, m);
      }
      var S;
      if (Os) e: {
        switch (e) {
          case "compositionstart":
            var C = "onCompositionStart";
            break e;
          case "compositionend":
            C = "onCompositionEnd";
            break e;
          case "compositionupdate":
            C = "onCompositionUpdate";
            break e;
        }
        C = void 0;
      }
      else jn ? Wc(e, n) && (C = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (C = "onCompositionStart");
      C && (Vc && n.locale !== "ko" && (jn || C !== "onCompositionStart" ? C === "onCompositionEnd" && jn && (S = bc()) : (Bt = m, Ls = "value" in Bt ? Bt.value : Bt.textContent, jn = !0)), N = Gl(u, C), 0 < N.length && (C = new Ha(C, e, null, n, m), p.push({ event: C, listeners: N }), S ? C.data = S : (S = Qc(n), S !== null && (C.data = S)))), (S = gh ? yh(e, n) : wh(e, n)) && (u = Gl(u, "onBeforeInput"), 0 < u.length && (m = new Ha("onBeforeInput", "beforeinput", null, n, m), p.push({ event: m, listeners: u }), m.data = S));
    }
    ld(p, t);
  });
}
function Hr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Gl(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e, i = l.stateNode;
    l.tag === 5 && i !== null && (l = i, i = Mr(e, n), i != null && r.unshift(Hr(e, i, l)), i = Mr(e, t), i != null && r.push(Hr(e, i, l))), e = e.return;
  }
  return r;
}
function Cn(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function eu(e, t, n, r, l) {
  for (var i = t._reactName, o = []; n !== null && n !== r; ) {
    var s = n, a = s.alternate, u = s.stateNode;
    if (a !== null && a === r) break;
    s.tag === 5 && u !== null && (s = u, l ? (a = Mr(n, i), a != null && o.unshift(Hr(n, a, s))) : l || (a = Mr(n, i), a != null && o.push(Hr(n, a, s)))), n = n.return;
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var Ph = /\r\n?/g, Oh = /\u0000|\uFFFD/g;
function tu(e) {
  return (typeof e == "string" ? e : "" + e).replace(Ph, `
`).replace(Oh, "");
}
function xl(e, t, n) {
  if (t = tu(t), tu(e) !== t && n) throw Error(j(425));
}
function Yl() {
}
var Ho = null, bo = null;
function Vo(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Wo = typeof setTimeout == "function" ? setTimeout : void 0, Mh = typeof clearTimeout == "function" ? clearTimeout : void 0, nu = typeof Promise == "function" ? Promise : void 0, Ah = typeof queueMicrotask == "function" ? queueMicrotask : typeof nu < "u" ? function(e) {
  return nu.resolve(null).then(e).catch(zh);
} : Wo;
function zh(e) {
  setTimeout(function() {
    throw e;
  });
}
function io(e, t) {
  var n = t, r = 0;
  do {
    var l = n.nextSibling;
    if (e.removeChild(n), l && l.nodeType === 8) if (n = l.data, n === "/$") {
      if (r === 0) {
        e.removeChild(l), Fr(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = l;
  } while (n);
  Fr(t);
}
function Wt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function ru(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var qn = Math.random().toString(36).slice(2), pt = "__reactFiber$" + qn, br = "__reactProps$" + qn, Nt = "__reactContainer$" + qn, Qo = "__reactEvents$" + qn, Fh = "__reactListeners$" + qn, Uh = "__reactHandles$" + qn;
function ln(e) {
  var t = e[pt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[Nt] || n[pt]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = ru(e); e !== null; ) {
        if (n = e[pt]) return n;
        e = ru(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function nl(e) {
  return e = e[pt] || e[Nt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Tn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(j(33));
}
function Ci(e) {
  return e[br] || null;
}
var Ko = [], In = -1;
function en(e) {
  return { current: e };
}
function Q(e) {
  0 > In || (e.current = Ko[In], Ko[In] = null, In--);
}
function V(e, t) {
  In++, Ko[In] = e.current, e.current = t;
}
var Jt = {}, Se = en(Jt), Le = en(!1), cn = Jt;
function Wn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Jt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var l = {}, i;
  for (i in n) l[i] = t[i];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
}
function _e(e) {
  return e = e.childContextTypes, e != null;
}
function Jl() {
  Q(Le), Q(Se);
}
function lu(e, t, n) {
  if (Se.current !== Jt) throw Error(j(168));
  V(Se, t), V(Le, n);
}
function od(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(j(108, Cp(e) || "Unknown", l));
  return J({}, n, r);
}
function Zl(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Jt, cn = Se.current, V(Se, e), V(Le, Le.current), !0;
}
function iu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(j(169));
  n ? (e = od(e, t, cn), r.__reactInternalMemoizedMergedChildContext = e, Q(Le), Q(Se), V(Se, e)) : Q(Le), V(Le, n);
}
var xt = null, Ei = !1, oo = !1;
function sd(e) {
  xt === null ? xt = [e] : xt.push(e);
}
function Bh(e) {
  Ei = !0, sd(e);
}
function tn() {
  if (!oo && xt !== null) {
    oo = !0;
    var e = 0, t = b;
    try {
      var n = xt;
      for (b = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      xt = null, Ei = !1;
    } catch (l) {
      throw xt !== null && (xt = xt.slice(e + 1)), _c(Rs, tn), l;
    } finally {
      b = t, oo = !1;
    }
  }
  return null;
}
var Ln = [], _n = 0, ql = null, ei = 0, We = [], Qe = 0, dn = null, St = 1, kt = "";
function nn(e, t) {
  Ln[_n++] = ei, Ln[_n++] = ql, ql = e, ei = t;
}
function ad(e, t, n) {
  We[Qe++] = St, We[Qe++] = kt, We[Qe++] = dn, dn = e;
  var r = St;
  e = kt;
  var l = 32 - nt(r) - 1;
  r &= ~(1 << l), n += 1;
  var i = 32 - nt(t) + l;
  if (30 < i) {
    var o = l - l % 5;
    i = (r & (1 << o) - 1).toString(32), r >>= o, l -= o, St = 1 << 32 - nt(t) + l | n << l | r, kt = i + e;
  } else St = 1 << i | n << l | r, kt = e;
}
function As(e) {
  e.return !== null && (nn(e, 1), ad(e, 1, 0));
}
function zs(e) {
  for (; e === ql; ) ql = Ln[--_n], Ln[_n] = null, ei = Ln[--_n], Ln[_n] = null;
  for (; e === dn; ) dn = We[--Qe], We[Qe] = null, kt = We[--Qe], We[Qe] = null, St = We[--Qe], We[Qe] = null;
}
var Ue = null, Fe = null, X = !1, tt = null;
function ud(e, t) {
  var n = Ke(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function ou(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Ue = e, Fe = Wt(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Ue = e, Fe = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = dn !== null ? { id: St, overflow: kt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Ke(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Ue = e, Fe = null, !0) : !1;
    default:
      return !1;
  }
}
function Xo(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Go(e) {
  if (X) {
    var t = Fe;
    if (t) {
      var n = t;
      if (!ou(e, t)) {
        if (Xo(e)) throw Error(j(418));
        t = Wt(n.nextSibling);
        var r = Ue;
        t && ou(e, t) ? ud(r, n) : (e.flags = e.flags & -4097 | 2, X = !1, Ue = e);
      }
    } else {
      if (Xo(e)) throw Error(j(418));
      e.flags = e.flags & -4097 | 2, X = !1, Ue = e;
    }
  }
}
function su(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  Ue = e;
}
function Sl(e) {
  if (e !== Ue) return !1;
  if (!X) return su(e), X = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Vo(e.type, e.memoizedProps)), t && (t = Fe)) {
    if (Xo(e)) throw cd(), Error(j(418));
    for (; t; ) ud(e, t), t = Wt(t.nextSibling);
  }
  if (su(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(j(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Fe = Wt(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      Fe = null;
    }
  } else Fe = Ue ? Wt(e.stateNode.nextSibling) : null;
  return !0;
}
function cd() {
  for (var e = Fe; e; ) e = Wt(e.nextSibling);
}
function Qn() {
  Fe = Ue = null, X = !1;
}
function Fs(e) {
  tt === null ? tt = [e] : tt.push(e);
}
var $h = Dt.ReactCurrentBatchConfig;
function pr(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(j(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(j(147, e));
      var l = r, i = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(o) {
        var s = l.refs;
        o === null ? delete s[i] : s[i] = o;
      }, t._stringRef = i, t);
    }
    if (typeof e != "string") throw Error(j(284));
    if (!n._owner) throw Error(j(290, e));
  }
  return e;
}
function kl(e, t) {
  throw e = Object.prototype.toString.call(t), Error(j(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function au(e) {
  var t = e._init;
  return t(e._payload);
}
function dd(e) {
  function t(f, d) {
    if (e) {
      var h = f.deletions;
      h === null ? (f.deletions = [d], f.flags |= 16) : h.push(d);
    }
  }
  function n(f, d) {
    if (!e) return null;
    for (; d !== null; ) t(f, d), d = d.sibling;
    return null;
  }
  function r(f, d) {
    for (f = /* @__PURE__ */ new Map(); d !== null; ) d.key !== null ? f.set(d.key, d) : f.set(d.index, d), d = d.sibling;
    return f;
  }
  function l(f, d) {
    return f = Gt(f, d), f.index = 0, f.sibling = null, f;
  }
  function i(f, d, h) {
    return f.index = h, e ? (h = f.alternate, h !== null ? (h = h.index, h < d ? (f.flags |= 2, d) : h) : (f.flags |= 2, d)) : (f.flags |= 1048576, d);
  }
  function o(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function s(f, d, h, w) {
    return d === null || d.tag !== 6 ? (d = ho(h, f.mode, w), d.return = f, d) : (d = l(d, h), d.return = f, d);
  }
  function a(f, d, h, w) {
    var E = h.type;
    return E === Nn ? m(f, d, h.props.children, w, h.key) : d !== null && (d.elementType === E || typeof E == "object" && E !== null && E.$$typeof === Mt && au(E) === d.type) ? (w = l(d, h.props), w.ref = pr(f, d, h), w.return = f, w) : (w = Bl(h.type, h.key, h.props, null, f.mode, w), w.ref = pr(f, d, h), w.return = f, w);
  }
  function u(f, d, h, w) {
    return d === null || d.tag !== 4 || d.stateNode.containerInfo !== h.containerInfo || d.stateNode.implementation !== h.implementation ? (d = mo(h, f.mode, w), d.return = f, d) : (d = l(d, h.children || []), d.return = f, d);
  }
  function m(f, d, h, w, E) {
    return d === null || d.tag !== 7 ? (d = un(h, f.mode, w, E), d.return = f, d) : (d = l(d, h), d.return = f, d);
  }
  function p(f, d, h) {
    if (typeof d == "string" && d !== "" || typeof d == "number") return d = ho("" + d, f.mode, h), d.return = f, d;
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case dl:
          return h = Bl(d.type, d.key, d.props, null, f.mode, h), h.ref = pr(f, null, d), h.return = f, h;
        case En:
          return d = mo(d, f.mode, h), d.return = f, d;
        case Mt:
          var w = d._init;
          return p(f, w(d._payload), h);
      }
      if (yr(d) || ar(d)) return d = un(d, f.mode, h, null), d.return = f, d;
      kl(f, d);
    }
    return null;
  }
  function v(f, d, h, w) {
    var E = d !== null ? d.key : null;
    if (typeof h == "string" && h !== "" || typeof h == "number") return E !== null ? null : s(f, d, "" + h, w);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case dl:
          return h.key === E ? a(f, d, h, w) : null;
        case En:
          return h.key === E ? u(f, d, h, w) : null;
        case Mt:
          return E = h._init, v(
            f,
            d,
            E(h._payload),
            w
          );
      }
      if (yr(h) || ar(h)) return E !== null ? null : m(f, d, h, w, null);
      kl(f, h);
    }
    return null;
  }
  function y(f, d, h, w, E) {
    if (typeof w == "string" && w !== "" || typeof w == "number") return f = f.get(h) || null, s(d, f, "" + w, E);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case dl:
          return f = f.get(w.key === null ? h : w.key) || null, a(d, f, w, E);
        case En:
          return f = f.get(w.key === null ? h : w.key) || null, u(d, f, w, E);
        case Mt:
          var N = w._init;
          return y(f, d, h, N(w._payload), E);
      }
      if (yr(w) || ar(w)) return f = f.get(h) || null, m(d, f, w, E, null);
      kl(d, w);
    }
    return null;
  }
  function k(f, d, h, w) {
    for (var E = null, N = null, S = d, C = d = 0, R = null; S !== null && C < h.length; C++) {
      S.index > C ? (R = S, S = null) : R = S.sibling;
      var L = v(f, S, h[C], w);
      if (L === null) {
        S === null && (S = R);
        break;
      }
      e && S && L.alternate === null && t(f, S), d = i(L, d, C), N === null ? E = L : N.sibling = L, N = L, S = R;
    }
    if (C === h.length) return n(f, S), X && nn(f, C), E;
    if (S === null) {
      for (; C < h.length; C++) S = p(f, h[C], w), S !== null && (d = i(S, d, C), N === null ? E = S : N.sibling = S, N = S);
      return X && nn(f, C), E;
    }
    for (S = r(f, S); C < h.length; C++) R = y(S, f, C, h[C], w), R !== null && (e && R.alternate !== null && S.delete(R.key === null ? C : R.key), d = i(R, d, C), N === null ? E = R : N.sibling = R, N = R);
    return e && S.forEach(function(M) {
      return t(f, M);
    }), X && nn(f, C), E;
  }
  function x(f, d, h, w) {
    var E = ar(h);
    if (typeof E != "function") throw Error(j(150));
    if (h = E.call(h), h == null) throw Error(j(151));
    for (var N = E = null, S = d, C = d = 0, R = null, L = h.next(); S !== null && !L.done; C++, L = h.next()) {
      S.index > C ? (R = S, S = null) : R = S.sibling;
      var M = v(f, S, L.value, w);
      if (M === null) {
        S === null && (S = R);
        break;
      }
      e && S && M.alternate === null && t(f, S), d = i(M, d, C), N === null ? E = M : N.sibling = M, N = M, S = R;
    }
    if (L.done) return n(
      f,
      S
    ), X && nn(f, C), E;
    if (S === null) {
      for (; !L.done; C++, L = h.next()) L = p(f, L.value, w), L !== null && (d = i(L, d, C), N === null ? E = L : N.sibling = L, N = L);
      return X && nn(f, C), E;
    }
    for (S = r(f, S); !L.done; C++, L = h.next()) L = y(S, f, C, L.value, w), L !== null && (e && L.alternate !== null && S.delete(L.key === null ? C : L.key), d = i(L, d, C), N === null ? E = L : N.sibling = L, N = L);
    return e && S.forEach(function(ne) {
      return t(f, ne);
    }), X && nn(f, C), E;
  }
  function D(f, d, h, w) {
    if (typeof h == "object" && h !== null && h.type === Nn && h.key === null && (h = h.props.children), typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case dl:
          e: {
            for (var E = h.key, N = d; N !== null; ) {
              if (N.key === E) {
                if (E = h.type, E === Nn) {
                  if (N.tag === 7) {
                    n(f, N.sibling), d = l(N, h.props.children), d.return = f, f = d;
                    break e;
                  }
                } else if (N.elementType === E || typeof E == "object" && E !== null && E.$$typeof === Mt && au(E) === N.type) {
                  n(f, N.sibling), d = l(N, h.props), d.ref = pr(f, N, h), d.return = f, f = d;
                  break e;
                }
                n(f, N);
                break;
              } else t(f, N);
              N = N.sibling;
            }
            h.type === Nn ? (d = un(h.props.children, f.mode, w, h.key), d.return = f, f = d) : (w = Bl(h.type, h.key, h.props, null, f.mode, w), w.ref = pr(f, d, h), w.return = f, f = w);
          }
          return o(f);
        case En:
          e: {
            for (N = h.key; d !== null; ) {
              if (d.key === N) if (d.tag === 4 && d.stateNode.containerInfo === h.containerInfo && d.stateNode.implementation === h.implementation) {
                n(f, d.sibling), d = l(d, h.children || []), d.return = f, f = d;
                break e;
              } else {
                n(f, d);
                break;
              }
              else t(f, d);
              d = d.sibling;
            }
            d = mo(h, f.mode, w), d.return = f, f = d;
          }
          return o(f);
        case Mt:
          return N = h._init, D(f, d, N(h._payload), w);
      }
      if (yr(h)) return k(f, d, h, w);
      if (ar(h)) return x(f, d, h, w);
      kl(f, h);
    }
    return typeof h == "string" && h !== "" || typeof h == "number" ? (h = "" + h, d !== null && d.tag === 6 ? (n(f, d.sibling), d = l(d, h), d.return = f, f = d) : (n(f, d), d = ho(h, f.mode, w), d.return = f, f = d), o(f)) : n(f, d);
  }
  return D;
}
var Kn = dd(!0), fd = dd(!1), ti = en(null), ni = null, Pn = null, Us = null;
function Bs() {
  Us = Pn = ni = null;
}
function $s(e) {
  var t = ti.current;
  Q(ti), e._currentValue = t;
}
function Yo(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function $n(e, t) {
  ni = e, Us = Pn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Ie = !0), e.firstContext = null);
}
function Ge(e) {
  var t = e._currentValue;
  if (Us !== e) if (e = { context: e, memoizedValue: t, next: null }, Pn === null) {
    if (ni === null) throw Error(j(308));
    Pn = e, ni.dependencies = { lanes: 0, firstContext: e };
  } else Pn = Pn.next = e;
  return t;
}
var on = null;
function Hs(e) {
  on === null ? on = [e] : on.push(e);
}
function pd(e, t, n, r) {
  var l = t.interleaved;
  return l === null ? (n.next = n, Hs(t)) : (n.next = l.next, l.next = n), t.interleaved = n, jt(e, r);
}
function jt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var At = !1;
function bs(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function hd(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Ct(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Qt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, B & 2) {
    var l = r.pending;
    return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, jt(e, n);
  }
  return l = r.interleaved, l === null ? (t.next = t, Hs(r)) : (t.next = l.next, l.next = t), r.interleaved = t, jt(e, n);
}
function Ol(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Ds(e, n);
  }
}
function uu(e, t) {
  var n = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var l = null, i = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var o = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        i === null ? l = i = o : i = i.next = o, n = n.next;
      } while (n !== null);
      i === null ? l = i = t : i = i.next = t;
    } else l = i = t;
    n = { baseState: r.baseState, firstBaseUpdate: l, lastBaseUpdate: i, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
}
function ri(e, t, n, r) {
  var l = e.updateQueue;
  At = !1;
  var i = l.firstBaseUpdate, o = l.lastBaseUpdate, s = l.shared.pending;
  if (s !== null) {
    l.shared.pending = null;
    var a = s, u = a.next;
    a.next = null, o === null ? i = u : o.next = u, o = a;
    var m = e.alternate;
    m !== null && (m = m.updateQueue, s = m.lastBaseUpdate, s !== o && (s === null ? m.firstBaseUpdate = u : s.next = u, m.lastBaseUpdate = a));
  }
  if (i !== null) {
    var p = l.baseState;
    o = 0, m = u = a = null, s = i;
    do {
      var v = s.lane, y = s.eventTime;
      if ((r & v) === v) {
        m !== null && (m = m.next = {
          eventTime: y,
          lane: 0,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null
        });
        e: {
          var k = e, x = s;
          switch (v = t, y = n, x.tag) {
            case 1:
              if (k = x.payload, typeof k == "function") {
                p = k.call(y, p, v);
                break e;
              }
              p = k;
              break e;
            case 3:
              k.flags = k.flags & -65537 | 128;
            case 0:
              if (k = x.payload, v = typeof k == "function" ? k.call(y, p, v) : k, v == null) break e;
              p = J({}, p, v);
              break e;
            case 2:
              At = !0;
          }
        }
        s.callback !== null && s.lane !== 0 && (e.flags |= 64, v = l.effects, v === null ? l.effects = [s] : v.push(s));
      } else y = { eventTime: y, lane: v, tag: s.tag, payload: s.payload, callback: s.callback, next: null }, m === null ? (u = m = y, a = p) : m = m.next = y, o |= v;
      if (s = s.next, s === null) {
        if (s = l.shared.pending, s === null) break;
        v = s, s = v.next, v.next = null, l.lastBaseUpdate = v, l.shared.pending = null;
      }
    } while (!0);
    if (m === null && (a = p), l.baseState = a, l.firstBaseUpdate = u, l.lastBaseUpdate = m, t = l.shared.interleaved, t !== null) {
      l = t;
      do
        o |= l.lane, l = l.next;
      while (l !== t);
    } else i === null && (l.shared.lanes = 0);
    pn |= o, e.lanes = o, e.memoizedState = p;
  }
}
function cu(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], l = r.callback;
    if (l !== null) {
      if (r.callback = null, r = n, typeof l != "function") throw Error(j(191, l));
      l.call(r);
    }
  }
}
var rl = {}, mt = en(rl), Vr = en(rl), Wr = en(rl);
function sn(e) {
  if (e === rl) throw Error(j(174));
  return e;
}
function Vs(e, t) {
  switch (V(Wr, t), V(Vr, e), V(mt, rl), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Io(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Io(t, e);
  }
  Q(mt), V(mt, t);
}
function Xn() {
  Q(mt), Q(Vr), Q(Wr);
}
function md(e) {
  sn(Wr.current);
  var t = sn(mt.current), n = Io(t, e.type);
  t !== n && (V(Vr, e), V(mt, n));
}
function Ws(e) {
  Vr.current === e && (Q(mt), Q(Vr));
}
var G = en(0);
function li(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      t.child.return = t, t = t.child;
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    t.sibling.return = t.return, t = t.sibling;
  }
  return null;
}
var so = [];
function Qs() {
  for (var e = 0; e < so.length; e++) so[e]._workInProgressVersionPrimary = null;
  so.length = 0;
}
var Ml = Dt.ReactCurrentDispatcher, ao = Dt.ReactCurrentBatchConfig, fn = 0, Y = null, oe = null, ue = null, ii = !1, jr = !1, Qr = 0, Hh = 0;
function ye() {
  throw Error(j(321));
}
function Ks(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!lt(e[n], t[n])) return !1;
  return !0;
}
function Xs(e, t, n, r, l, i) {
  if (fn = i, Y = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Ml.current = e === null || e.memoizedState === null ? Qh : Kh, e = n(r, l), jr) {
    i = 0;
    do {
      if (jr = !1, Qr = 0, 25 <= i) throw Error(j(301));
      i += 1, ue = oe = null, t.updateQueue = null, Ml.current = Xh, e = n(r, l);
    } while (jr);
  }
  if (Ml.current = oi, t = oe !== null && oe.next !== null, fn = 0, ue = oe = Y = null, ii = !1, t) throw Error(j(300));
  return e;
}
function Gs() {
  var e = Qr !== 0;
  return Qr = 0, e;
}
function ft() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return ue === null ? Y.memoizedState = ue = e : ue = ue.next = e, ue;
}
function Ye() {
  if (oe === null) {
    var e = Y.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = oe.next;
  var t = ue === null ? Y.memoizedState : ue.next;
  if (t !== null) ue = t, oe = e;
  else {
    if (e === null) throw Error(j(310));
    oe = e, e = { memoizedState: oe.memoizedState, baseState: oe.baseState, baseQueue: oe.baseQueue, queue: oe.queue, next: null }, ue === null ? Y.memoizedState = ue = e : ue = ue.next = e;
  }
  return ue;
}
function Kr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function uo(e) {
  var t = Ye(), n = t.queue;
  if (n === null) throw Error(j(311));
  n.lastRenderedReducer = e;
  var r = oe, l = r.baseQueue, i = n.pending;
  if (i !== null) {
    if (l !== null) {
      var o = l.next;
      l.next = i.next, i.next = o;
    }
    r.baseQueue = l = i, n.pending = null;
  }
  if (l !== null) {
    i = l.next, r = r.baseState;
    var s = o = null, a = null, u = i;
    do {
      var m = u.lane;
      if ((fn & m) === m) a !== null && (a = a.next = { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }), r = u.hasEagerState ? u.eagerState : e(r, u.action);
      else {
        var p = {
          lane: m,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null
        };
        a === null ? (s = a = p, o = r) : a = a.next = p, Y.lanes |= m, pn |= m;
      }
      u = u.next;
    } while (u !== null && u !== i);
    a === null ? o = r : a.next = s, lt(r, t.memoizedState) || (Ie = !0), t.memoizedState = r, t.baseState = o, t.baseQueue = a, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    l = e;
    do
      i = l.lane, Y.lanes |= i, pn |= i, l = l.next;
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function co(e) {
  var t = Ye(), n = t.queue;
  if (n === null) throw Error(j(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, l = n.pending, i = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var o = l = l.next;
    do
      i = e(i, o.action), o = o.next;
    while (o !== l);
    lt(i, t.memoizedState) || (Ie = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
  }
  return [i, r];
}
function vd() {
}
function gd(e, t) {
  var n = Y, r = Ye(), l = t(), i = !lt(r.memoizedState, l);
  if (i && (r.memoizedState = l, Ie = !0), r = r.queue, Ys(xd.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || ue !== null && ue.memoizedState.tag & 1) {
    if (n.flags |= 2048, Xr(9, wd.bind(null, n, r, l, t), void 0, null), de === null) throw Error(j(349));
    fn & 30 || yd(n, t, l);
  }
  return l;
}
function yd(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = Y.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Y.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function wd(e, t, n, r) {
  t.value = n, t.getSnapshot = r, Sd(t) && kd(e);
}
function xd(e, t, n) {
  return n(function() {
    Sd(t) && kd(e);
  });
}
function Sd(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !lt(e, n);
  } catch {
    return !0;
  }
}
function kd(e) {
  var t = jt(e, 1);
  t !== null && rt(t, e, 1, -1);
}
function du(e) {
  var t = ft();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Kr, lastRenderedState: e }, t.queue = e, e = e.dispatch = Wh.bind(null, Y, e), [t.memoizedState, e];
}
function Xr(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = Y.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Y.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Cd() {
  return Ye().memoizedState;
}
function Al(e, t, n, r) {
  var l = ft();
  Y.flags |= e, l.memoizedState = Xr(1 | t, n, void 0, r === void 0 ? null : r);
}
function Ni(e, t, n, r) {
  var l = Ye();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (oe !== null) {
    var o = oe.memoizedState;
    if (i = o.destroy, r !== null && Ks(r, o.deps)) {
      l.memoizedState = Xr(t, n, i, r);
      return;
    }
  }
  Y.flags |= e, l.memoizedState = Xr(1 | t, n, i, r);
}
function fu(e, t) {
  return Al(8390656, 8, e, t);
}
function Ys(e, t) {
  return Ni(2048, 8, e, t);
}
function Ed(e, t) {
  return Ni(4, 2, e, t);
}
function Nd(e, t) {
  return Ni(4, 4, e, t);
}
function jd(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function Rd(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Ni(4, 4, jd.bind(null, t, e), n);
}
function Js() {
}
function Dd(e, t) {
  var n = Ye();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ks(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Td(e, t) {
  var n = Ye();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ks(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Id(e, t, n) {
  return fn & 21 ? (lt(n, t) || (n = Mc(), Y.lanes |= n, pn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Ie = !0), e.memoizedState = n);
}
function bh(e, t) {
  var n = b;
  b = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = ao.transition;
  ao.transition = {};
  try {
    e(!1), t();
  } finally {
    b = n, ao.transition = r;
  }
}
function Ld() {
  return Ye().memoizedState;
}
function Vh(e, t, n) {
  var r = Xt(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, _d(e)) Pd(t, n);
  else if (n = pd(e, t, n, r), n !== null) {
    var l = Ee();
    rt(n, e, r, l), Od(n, t, r);
  }
}
function Wh(e, t, n) {
  var r = Xt(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (_d(e)) Pd(t, l);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
      var o = t.lastRenderedState, s = i(o, n);
      if (l.hasEagerState = !0, l.eagerState = s, lt(s, o)) {
        var a = t.interleaved;
        a === null ? (l.next = l, Hs(t)) : (l.next = a.next, a.next = l), t.interleaved = l;
        return;
      }
    } catch {
    } finally {
    }
    n = pd(e, t, l, r), n !== null && (l = Ee(), rt(n, e, r, l), Od(n, t, r));
  }
}
function _d(e) {
  var t = e.alternate;
  return e === Y || t !== null && t === Y;
}
function Pd(e, t) {
  jr = ii = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Od(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Ds(e, n);
  }
}
var oi = { readContext: Ge, useCallback: ye, useContext: ye, useEffect: ye, useImperativeHandle: ye, useInsertionEffect: ye, useLayoutEffect: ye, useMemo: ye, useReducer: ye, useRef: ye, useState: ye, useDebugValue: ye, useDeferredValue: ye, useTransition: ye, useMutableSource: ye, useSyncExternalStore: ye, useId: ye, unstable_isNewReconciler: !1 }, Qh = { readContext: Ge, useCallback: function(e, t) {
  return ft().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Ge, useEffect: fu, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Al(
    4194308,
    4,
    jd.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Al(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Al(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = ft();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = ft();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Vh.bind(null, Y, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = ft();
  return e = { current: e }, t.memoizedState = e;
}, useState: du, useDebugValue: Js, useDeferredValue: function(e) {
  return ft().memoizedState = e;
}, useTransition: function() {
  var e = du(!1), t = e[0];
  return e = bh.bind(null, e[1]), ft().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = Y, l = ft();
  if (X) {
    if (n === void 0) throw Error(j(407));
    n = n();
  } else {
    if (n = t(), de === null) throw Error(j(349));
    fn & 30 || yd(r, t, n);
  }
  l.memoizedState = n;
  var i = { value: n, getSnapshot: t };
  return l.queue = i, fu(xd.bind(
    null,
    r,
    i,
    e
  ), [e]), r.flags |= 2048, Xr(9, wd.bind(null, r, i, n, t), void 0, null), n;
}, useId: function() {
  var e = ft(), t = de.identifierPrefix;
  if (X) {
    var n = kt, r = St;
    n = (r & ~(1 << 32 - nt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Qr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = Hh++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, Kh = {
  readContext: Ge,
  useCallback: Dd,
  useContext: Ge,
  useEffect: Ys,
  useImperativeHandle: Rd,
  useInsertionEffect: Ed,
  useLayoutEffect: Nd,
  useMemo: Td,
  useReducer: uo,
  useRef: Cd,
  useState: function() {
    return uo(Kr);
  },
  useDebugValue: Js,
  useDeferredValue: function(e) {
    var t = Ye();
    return Id(t, oe.memoizedState, e);
  },
  useTransition: function() {
    var e = uo(Kr)[0], t = Ye().memoizedState;
    return [e, t];
  },
  useMutableSource: vd,
  useSyncExternalStore: gd,
  useId: Ld,
  unstable_isNewReconciler: !1
}, Xh = { readContext: Ge, useCallback: Dd, useContext: Ge, useEffect: Ys, useImperativeHandle: Rd, useInsertionEffect: Ed, useLayoutEffect: Nd, useMemo: Td, useReducer: co, useRef: Cd, useState: function() {
  return co(Kr);
}, useDebugValue: Js, useDeferredValue: function(e) {
  var t = Ye();
  return oe === null ? t.memoizedState = e : Id(t, oe.memoizedState, e);
}, useTransition: function() {
  var e = co(Kr)[0], t = Ye().memoizedState;
  return [e, t];
}, useMutableSource: vd, useSyncExternalStore: gd, useId: Ld, unstable_isNewReconciler: !1 };
function qe(e, t) {
  if (e && e.defaultProps) {
    t = J({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Jo(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : J({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var ji = { isMounted: function(e) {
  return (e = e._reactInternals) ? vn(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = Ee(), l = Xt(e), i = Ct(r, l);
  i.payload = t, n != null && (i.callback = n), t = Qt(e, i, l), t !== null && (rt(t, e, l, r), Ol(t, e, l));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = Ee(), l = Xt(e), i = Ct(r, l);
  i.tag = 1, i.payload = t, n != null && (i.callback = n), t = Qt(e, i, l), t !== null && (rt(t, e, l, r), Ol(t, e, l));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = Ee(), r = Xt(e), l = Ct(n, r);
  l.tag = 2, t != null && (l.callback = t), t = Qt(e, l, r), t !== null && (rt(t, e, r, n), Ol(t, e, r));
} };
function pu(e, t, n, r, l, i, o) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, o) : t.prototype && t.prototype.isPureReactComponent ? !Br(n, r) || !Br(l, i) : !0;
}
function Md(e, t, n) {
  var r = !1, l = Jt, i = t.contextType;
  return typeof i == "object" && i !== null ? i = Ge(i) : (l = _e(t) ? cn : Se.current, r = t.contextTypes, i = (r = r != null) ? Wn(e, l) : Jt), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = ji, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function hu(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && ji.enqueueReplaceState(t, t.state, null);
}
function Zo(e, t, n, r) {
  var l = e.stateNode;
  l.props = n, l.state = e.memoizedState, l.refs = {}, bs(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? l.context = Ge(i) : (i = _e(t) ? cn : Se.current, l.context = Wn(e, i)), l.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (Jo(e, t, i, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && ji.enqueueReplaceState(l, l.state, null), ri(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function Gn(e, t) {
  try {
    var n = "", r = t;
    do
      n += kp(r), r = r.return;
    while (r);
    var l = n;
  } catch (i) {
    l = `
Error generating stack: ` + i.message + `
` + i.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function fo(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function qo(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var Gh = typeof WeakMap == "function" ? WeakMap : Map;
function Ad(e, t, n) {
  n = Ct(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    ai || (ai = !0, us = r), qo(e, t);
  }, n;
}
function zd(e, t, n) {
  n = Ct(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    n.payload = function() {
      return r(l);
    }, n.callback = function() {
      qo(e, t);
    };
  }
  var i = e.stateNode;
  return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
    qo(e, t), typeof r != "function" && (Kt === null ? Kt = /* @__PURE__ */ new Set([this]) : Kt.add(this));
    var o = t.stack;
    this.componentDidCatch(t.value, { componentStack: o !== null ? o : "" });
  }), n;
}
function mu(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Gh();
    var l = /* @__PURE__ */ new Set();
    r.set(t, l);
  } else l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
  l.has(n) || (l.add(n), e = um.bind(null, e, t, n), t.then(e, e));
}
function vu(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function gu(e, t, n, r, l) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Ct(-1, 1), t.tag = 2, Qt(n, t, 1))), n.lanes |= 1), e);
}
var Yh = Dt.ReactCurrentOwner, Ie = !1;
function Ce(e, t, n, r) {
  t.child = e === null ? fd(t, null, n, r) : Kn(t, e.child, n, r);
}
function yu(e, t, n, r, l) {
  n = n.render;
  var i = t.ref;
  return $n(t, l), r = Xs(e, t, n, r, i, l), n = Gs(), e !== null && !Ie ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Rt(e, t, l)) : (X && n && As(t), t.flags |= 1, Ce(e, t, r, l), t.child);
}
function wu(e, t, n, r, l) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" && !ia(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, Fd(e, t, i, r, l)) : (e = Bl(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (i = e.child, !(e.lanes & l)) {
    var o = i.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Br, n(o, r) && e.ref === t.ref) return Rt(e, t, l);
  }
  return t.flags |= 1, e = Gt(i, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Fd(e, t, n, r, l) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Br(i, r) && e.ref === t.ref) if (Ie = !1, t.pendingProps = r = i, (e.lanes & l) !== 0) e.flags & 131072 && (Ie = !0);
    else return t.lanes = e.lanes, Rt(e, t, l);
  }
  return es(e, t, n, r, l);
}
function Ud(e, t, n) {
  var r = t.pendingProps, l = r.children, i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, V(Mn, ze), ze |= n;
  else {
    if (!(n & 1073741824)) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, V(Mn, ze), ze |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, V(Mn, ze), ze |= r;
  }
  else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, V(Mn, ze), ze |= r;
  return Ce(e, t, l, n), t.child;
}
function Bd(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function es(e, t, n, r, l) {
  var i = _e(n) ? cn : Se.current;
  return i = Wn(t, i), $n(t, l), n = Xs(e, t, n, r, i, l), r = Gs(), e !== null && !Ie ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Rt(e, t, l)) : (X && r && As(t), t.flags |= 1, Ce(e, t, n, l), t.child);
}
function xu(e, t, n, r, l) {
  if (_e(n)) {
    var i = !0;
    Zl(t);
  } else i = !1;
  if ($n(t, l), t.stateNode === null) zl(e, t), Md(t, n, r), Zo(t, n, r, l), r = !0;
  else if (e === null) {
    var o = t.stateNode, s = t.memoizedProps;
    o.props = s;
    var a = o.context, u = n.contextType;
    typeof u == "object" && u !== null ? u = Ge(u) : (u = _e(n) ? cn : Se.current, u = Wn(t, u));
    var m = n.getDerivedStateFromProps, p = typeof m == "function" || typeof o.getSnapshotBeforeUpdate == "function";
    p || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (s !== r || a !== u) && hu(t, o, r, u), At = !1;
    var v = t.memoizedState;
    o.state = v, ri(t, r, o, l), a = t.memoizedState, s !== r || v !== a || Le.current || At ? (typeof m == "function" && (Jo(t, n, m, r), a = t.memoizedState), (s = At || pu(t, n, s, r, v, a, u)) ? (p || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = a), o.props = r, o.state = a, o.context = u, r = s) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    o = t.stateNode, hd(e, t), s = t.memoizedProps, u = t.type === t.elementType ? s : qe(t.type, s), o.props = u, p = t.pendingProps, v = o.context, a = n.contextType, typeof a == "object" && a !== null ? a = Ge(a) : (a = _e(n) ? cn : Se.current, a = Wn(t, a));
    var y = n.getDerivedStateFromProps;
    (m = typeof y == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (s !== p || v !== a) && hu(t, o, r, a), At = !1, v = t.memoizedState, o.state = v, ri(t, r, o, l);
    var k = t.memoizedState;
    s !== p || v !== k || Le.current || At ? (typeof y == "function" && (Jo(t, n, y, r), k = t.memoizedState), (u = At || pu(t, n, u, r, v, k, a) || !1) ? (m || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, k, a), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, k, a)), typeof o.componentDidUpdate == "function" && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || s === e.memoizedProps && v === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && v === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = k), o.props = r, o.state = k, o.context = a, r = u) : (typeof o.componentDidUpdate != "function" || s === e.memoizedProps && v === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && v === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return ts(e, t, n, r, i, l);
}
function ts(e, t, n, r, l, i) {
  Bd(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return l && iu(t, n, !1), Rt(e, t, i);
  r = t.stateNode, Yh.current = t;
  var s = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && o ? (t.child = Kn(t, e.child, null, i), t.child = Kn(t, null, s, i)) : Ce(e, t, s, i), t.memoizedState = r.state, l && iu(t, n, !0), t.child;
}
function $d(e) {
  var t = e.stateNode;
  t.pendingContext ? lu(e, t.pendingContext, t.pendingContext !== t.context) : t.context && lu(e, t.context, !1), Vs(e, t.containerInfo);
}
function Su(e, t, n, r, l) {
  return Qn(), Fs(l), t.flags |= 256, Ce(e, t, n, r), t.child;
}
var ns = { dehydrated: null, treeContext: null, retryLane: 0 };
function rs(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Hd(e, t, n) {
  var r = t.pendingProps, l = G.current, i = !1, o = (t.flags & 128) !== 0, s;
  if ((s = o) || (s = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), s ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), V(G, l & 1), e === null)
    return Go(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (o = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, o = { mode: "hidden", children: o }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = o) : i = Ti(o, r, 0, null), e = un(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = rs(n), t.memoizedState = ns, e) : Zs(t, o));
  if (l = e.memoizedState, l !== null && (s = l.dehydrated, s !== null)) return Jh(e, t, o, r, s, l, n);
  if (i) {
    i = r.fallback, o = t.mode, l = e.child, s = l.sibling;
    var a = { mode: "hidden", children: r.children };
    return !(o & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = a, t.deletions = null) : (r = Gt(l, a), r.subtreeFlags = l.subtreeFlags & 14680064), s !== null ? i = Gt(s, i) : (i = un(i, o, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, o = e.child.memoizedState, o = o === null ? rs(n) : { baseLanes: o.baseLanes | n, cachePool: null, transitions: o.transitions }, i.memoizedState = o, i.childLanes = e.childLanes & ~n, t.memoizedState = ns, r;
  }
  return i = e.child, e = i.sibling, r = Gt(i, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Zs(e, t) {
  return t = Ti({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Cl(e, t, n, r) {
  return r !== null && Fs(r), Kn(t, e.child, null, n), e = Zs(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function Jh(e, t, n, r, l, i, o) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = fo(Error(j(422))), Cl(e, t, o, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, l = t.mode, r = Ti({ mode: "visible", children: r.children }, l, 0, null), i = un(i, l, o, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && Kn(t, e.child, null, o), t.child.memoizedState = rs(o), t.memoizedState = ns, i);
  if (!(t.mode & 1)) return Cl(e, t, o, null);
  if (l.data === "$!") {
    if (r = l.nextSibling && l.nextSibling.dataset, r) var s = r.dgst;
    return r = s, i = Error(j(419)), r = fo(i, r, void 0), Cl(e, t, o, r);
  }
  if (s = (o & e.childLanes) !== 0, Ie || s) {
    if (r = de, r !== null) {
      switch (o & -o) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      l = l & (r.suspendedLanes | o) ? 0 : l, l !== 0 && l !== i.retryLane && (i.retryLane = l, jt(e, l), rt(r, e, l, -1));
    }
    return la(), r = fo(Error(j(421))), Cl(e, t, o, r);
  }
  return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = cm.bind(null, e), l._reactRetry = t, null) : (e = i.treeContext, Fe = Wt(l.nextSibling), Ue = t, X = !0, tt = null, e !== null && (We[Qe++] = St, We[Qe++] = kt, We[Qe++] = dn, St = e.id, kt = e.overflow, dn = t), t = Zs(t, r.children), t.flags |= 4096, t);
}
function ku(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Yo(e.return, t, n);
}
function po(e, t, n, r, l) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = l);
}
function bd(e, t, n) {
  var r = t.pendingProps, l = r.revealOrder, i = r.tail;
  if (Ce(e, t, r.children, n), r = G.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && ku(e, n, t);
      else if (e.tag === 19) ku(e, n, t);
      else if (e.child !== null) {
        e.child.return = e, e = e.child;
        continue;
      }
      if (e === t) break e;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) break e;
        e = e.return;
      }
      e.sibling.return = e.return, e = e.sibling;
    }
    r &= 1;
  }
  if (V(G, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (l) {
    case "forwards":
      for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && li(e) === null && (l = n), n = n.sibling;
      n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), po(t, !1, l, n, i);
      break;
    case "backwards":
      for (n = null, l = t.child, t.child = null; l !== null; ) {
        if (e = l.alternate, e !== null && li(e) === null) {
          t.child = l;
          break;
        }
        e = l.sibling, l.sibling = n, n = l, l = e;
      }
      po(t, !0, n, null, i);
      break;
    case "together":
      po(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function zl(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function Rt(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), pn |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(j(153));
  if (t.child !== null) {
    for (e = t.child, n = Gt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = Gt(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function Zh(e, t, n) {
  switch (t.tag) {
    case 3:
      $d(t), Qn();
      break;
    case 5:
      md(t);
      break;
    case 1:
      _e(t.type) && Zl(t);
      break;
    case 4:
      Vs(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, l = t.memoizedProps.value;
      V(ti, r._currentValue), r._currentValue = l;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (V(G, G.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Hd(e, t, n) : (V(G, G.current & 1), e = Rt(e, t, n), e !== null ? e.sibling : null);
      V(G, G.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return bd(e, t, n);
        t.flags |= 128;
      }
      if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), V(G, G.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Ud(e, t, n);
  }
  return Rt(e, t, n);
}
var Vd, ls, Wd, Qd;
Vd = function(e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      n.child.return = n, n = n.child;
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    n.sibling.return = n.return, n = n.sibling;
  }
};
ls = function() {
};
Wd = function(e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    e = t.stateNode, sn(mt.current);
    var i = null;
    switch (n) {
      case "input":
        l = jo(e, l), r = jo(e, r), i = [];
        break;
      case "select":
        l = J({}, l, { value: void 0 }), r = J({}, r, { value: void 0 }), i = [];
        break;
      case "textarea":
        l = To(e, l), r = To(e, r), i = [];
        break;
      default:
        typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Yl);
    }
    Lo(n, r);
    var o;
    n = null;
    for (u in l) if (!r.hasOwnProperty(u) && l.hasOwnProperty(u) && l[u] != null) if (u === "style") {
      var s = l[u];
      for (o in s) s.hasOwnProperty(o) && (n || (n = {}), n[o] = "");
    } else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Pr.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
    for (u in r) {
      var a = r[u];
      if (s = l != null ? l[u] : void 0, r.hasOwnProperty(u) && a !== s && (a != null || s != null)) if (u === "style") if (s) {
        for (o in s) !s.hasOwnProperty(o) || a && a.hasOwnProperty(o) || (n || (n = {}), n[o] = "");
        for (o in a) a.hasOwnProperty(o) && s[o] !== a[o] && (n || (n = {}), n[o] = a[o]);
      } else n || (i || (i = []), i.push(
        u,
        n
      )), n = a;
      else u === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, s = s ? s.__html : void 0, a != null && s !== a && (i = i || []).push(u, a)) : u === "children" ? typeof a != "string" && typeof a != "number" || (i = i || []).push(u, "" + a) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Pr.hasOwnProperty(u) ? (a != null && u === "onScroll" && W("scroll", e), i || s === a || (i = [])) : (i = i || []).push(u, a));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Qd = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function hr(e, t) {
  if (!X) switch (e.tailMode) {
    case "hidden":
      t = e.tail;
      for (var n = null; t !== null; ) t.alternate !== null && (n = t), t = t.sibling;
      n === null ? e.tail = null : n.sibling = null;
      break;
    case "collapsed":
      n = e.tail;
      for (var r = null; n !== null; ) n.alternate !== null && (r = n), n = n.sibling;
      r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
  }
}
function we(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
  else for (l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function qh(e, t, n) {
  var r = t.pendingProps;
  switch (zs(t), t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return we(t), null;
    case 1:
      return _e(t.type) && Jl(), we(t), null;
    case 3:
      return r = t.stateNode, Xn(), Q(Le), Q(Se), Qs(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Sl(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, tt !== null && (fs(tt), tt = null))), ls(e, t), we(t), null;
    case 5:
      Ws(t);
      var l = sn(Wr.current);
      if (n = t.type, e !== null && t.stateNode != null) Wd(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(j(166));
          return we(t), null;
        }
        if (e = sn(mt.current), Sl(t)) {
          r = t.stateNode, n = t.type;
          var i = t.memoizedProps;
          switch (r[pt] = t, r[br] = i, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              W("cancel", r), W("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              W("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < xr.length; l++) W(xr[l], r);
              break;
            case "source":
              W("error", r);
              break;
            case "img":
            case "image":
            case "link":
              W(
                "error",
                r
              ), W("load", r);
              break;
            case "details":
              W("toggle", r);
              break;
            case "input":
              La(r, i), W("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!i.multiple }, W("invalid", r);
              break;
            case "textarea":
              Pa(r, i), W("invalid", r);
          }
          Lo(n, i), l = null;
          for (var o in i) if (i.hasOwnProperty(o)) {
            var s = i[o];
            o === "children" ? typeof s == "string" ? r.textContent !== s && (i.suppressHydrationWarning !== !0 && xl(r.textContent, s, e), l = ["children", s]) : typeof s == "number" && r.textContent !== "" + s && (i.suppressHydrationWarning !== !0 && xl(
              r.textContent,
              s,
              e
            ), l = ["children", "" + s]) : Pr.hasOwnProperty(o) && s != null && o === "onScroll" && W("scroll", r);
          }
          switch (n) {
            case "input":
              fl(r), _a(r, i, !0);
              break;
            case "textarea":
              fl(r), Oa(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Yl);
          }
          r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          o = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = xc(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = o.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, { is: r.is }) : (e = o.createElement(n), n === "select" && (o = e, r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, n), e[pt] = t, e[br] = r, Vd(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (o = _o(n, r), n) {
              case "dialog":
                W("cancel", e), W("close", e), l = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                W("load", e), l = r;
                break;
              case "video":
              case "audio":
                for (l = 0; l < xr.length; l++) W(xr[l], e);
                l = r;
                break;
              case "source":
                W("error", e), l = r;
                break;
              case "img":
              case "image":
              case "link":
                W(
                  "error",
                  e
                ), W("load", e), l = r;
                break;
              case "details":
                W("toggle", e), l = r;
                break;
              case "input":
                La(e, r), l = jo(e, r), W("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, l = J({}, r, { value: void 0 }), W("invalid", e);
                break;
              case "textarea":
                Pa(e, r), l = To(e, r), W("invalid", e);
                break;
              default:
                l = r;
            }
            Lo(n, l), s = l;
            for (i in s) if (s.hasOwnProperty(i)) {
              var a = s[i];
              i === "style" ? Cc(e, a) : i === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, a != null && Sc(e, a)) : i === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && Or(e, a) : typeof a == "number" && Or(e, "" + a) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Pr.hasOwnProperty(i) ? a != null && i === "onScroll" && W("scroll", e) : a != null && ks(e, i, a, o));
            }
            switch (n) {
              case "input":
                fl(e), _a(e, r, !1);
                break;
              case "textarea":
                fl(e), Oa(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Yt(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, i = r.value, i != null ? zn(e, !!r.multiple, i, !1) : r.defaultValue != null && zn(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Yl);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
      }
      return we(t), null;
    case 6:
      if (e && t.stateNode != null) Qd(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(j(166));
        if (n = sn(Wr.current), sn(mt.current), Sl(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[pt] = t, (i = r.nodeValue !== n) && (e = Ue, e !== null)) switch (e.tag) {
            case 3:
              xl(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && xl(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          i && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[pt] = t, t.stateNode = r;
      }
      return we(t), null;
    case 13:
      if (Q(G), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (X && Fe !== null && t.mode & 1 && !(t.flags & 128)) cd(), Qn(), t.flags |= 98560, i = !1;
        else if (i = Sl(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!i) throw Error(j(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(j(317));
            i[pt] = t;
          } else Qn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          we(t), i = !1;
        } else tt !== null && (fs(tt), tt = null), i = !0;
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || G.current & 1 ? ae === 0 && (ae = 3) : la())), t.updateQueue !== null && (t.flags |= 4), we(t), null);
    case 4:
      return Xn(), ls(e, t), e === null && $r(t.stateNode.containerInfo), we(t), null;
    case 10:
      return $s(t.type._context), we(t), null;
    case 17:
      return _e(t.type) && Jl(), we(t), null;
    case 19:
      if (Q(G), i = t.memoizedState, i === null) return we(t), null;
      if (r = (t.flags & 128) !== 0, o = i.rendering, o === null) if (r) hr(i, !1);
      else {
        if (ae !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (o = li(e), o !== null) {
            for (t.flags |= 128, hr(i, !1), r = o.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) i = n, e = r, i.flags &= 14680066, o = i.alternate, o === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = o.childLanes, i.lanes = o.lanes, i.child = o.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = o.memoizedProps, i.memoizedState = o.memoizedState, i.updateQueue = o.updateQueue, i.type = o.type, e = o.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return V(G, G.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        i.tail !== null && ee() > Yn && (t.flags |= 128, r = !0, hr(i, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = li(o), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), hr(i, !0), i.tail === null && i.tailMode === "hidden" && !o.alternate && !X) return we(t), null;
        } else 2 * ee() - i.renderingStartTime > Yn && n !== 1073741824 && (t.flags |= 128, r = !0, hr(i, !1), t.lanes = 4194304);
        i.isBackwards ? (o.sibling = t.child, t.child = o) : (n = i.last, n !== null ? n.sibling = o : t.child = o, i.last = o);
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = ee(), t.sibling = null, n = G.current, V(G, r ? n & 1 | 2 : n & 1), t) : (we(t), null);
    case 22:
    case 23:
      return ra(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? ze & 1073741824 && (we(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : we(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(j(156, t.tag));
}
function em(e, t) {
  switch (zs(t), t.tag) {
    case 1:
      return _e(t.type) && Jl(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return Xn(), Q(Le), Q(Se), Qs(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Ws(t), null;
    case 13:
      if (Q(G), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(j(340));
        Qn();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return Q(G), null;
    case 4:
      return Xn(), null;
    case 10:
      return $s(t.type._context), null;
    case 22:
    case 23:
      return ra(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var El = !1, xe = !1, tm = typeof WeakSet == "function" ? WeakSet : Set, _ = null;
function On(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    Z(e, t, r);
  }
  else n.current = null;
}
function is(e, t, n) {
  try {
    n();
  } catch (r) {
    Z(e, t, r);
  }
}
var Cu = !1;
function nm(e, t) {
  if (Ho = Kl, e = Jc(), Ms(e)) {
    if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
    else e: {
      n = (n = e.ownerDocument) && n.defaultView || window;
      var r = n.getSelection && n.getSelection();
      if (r && r.rangeCount !== 0) {
        n = r.anchorNode;
        var l = r.anchorOffset, i = r.focusNode;
        r = r.focusOffset;
        try {
          n.nodeType, i.nodeType;
        } catch {
          n = null;
          break e;
        }
        var o = 0, s = -1, a = -1, u = 0, m = 0, p = e, v = null;
        t: for (; ; ) {
          for (var y; p !== n || l !== 0 && p.nodeType !== 3 || (s = o + l), p !== i || r !== 0 && p.nodeType !== 3 || (a = o + r), p.nodeType === 3 && (o += p.nodeValue.length), (y = p.firstChild) !== null; )
            v = p, p = y;
          for (; ; ) {
            if (p === e) break t;
            if (v === n && ++u === l && (s = o), v === i && ++m === r && (a = o), (y = p.nextSibling) !== null) break;
            p = v, v = p.parentNode;
          }
          p = y;
        }
        n = s === -1 || a === -1 ? null : { start: s, end: a };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (bo = { focusedElem: e, selectionRange: n }, Kl = !1, _ = t; _ !== null; ) if (t = _, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, _ = e;
  else for (; _ !== null; ) {
    t = _;
    try {
      var k = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (k !== null) {
            var x = k.memoizedProps, D = k.memoizedState, f = t.stateNode, d = f.getSnapshotBeforeUpdate(t.elementType === t.type ? x : qe(t.type, x), D);
            f.__reactInternalSnapshotBeforeUpdate = d;
          }
          break;
        case 3:
          var h = t.stateNode.containerInfo;
          h.nodeType === 1 ? h.textContent = "" : h.nodeType === 9 && h.documentElement && h.removeChild(h.documentElement);
          break;
        case 5:
        case 6:
        case 4:
        case 17:
          break;
        default:
          throw Error(j(163));
      }
    } catch (w) {
      Z(t, t.return, w);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, _ = e;
      break;
    }
    _ = t.return;
  }
  return k = Cu, Cu = !1, k;
}
function Rr(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var l = r = r.next;
    do {
      if ((l.tag & e) === e) {
        var i = l.destroy;
        l.destroy = void 0, i !== void 0 && is(t, n, i);
      }
      l = l.next;
    } while (l !== r);
  }
}
function Ri(e, t) {
  if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
    var n = t = t.next;
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function os(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : t.current = e;
  }
}
function Kd(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Kd(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[pt], delete t[br], delete t[Qo], delete t[Fh], delete t[Uh])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Xd(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Eu(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || Xd(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function ss(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Yl));
  else if (r !== 4 && (e = e.child, e !== null)) for (ss(e, t, n), e = e.sibling; e !== null; ) ss(e, t, n), e = e.sibling;
}
function as(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (as(e, t, n), e = e.sibling; e !== null; ) as(e, t, n), e = e.sibling;
}
var pe = null, et = !1;
function Ot(e, t, n) {
  for (n = n.child; n !== null; ) Gd(e, t, n), n = n.sibling;
}
function Gd(e, t, n) {
  if (ht && typeof ht.onCommitFiberUnmount == "function") try {
    ht.onCommitFiberUnmount(wi, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      xe || On(n, t);
    case 6:
      var r = pe, l = et;
      pe = null, Ot(e, t, n), pe = r, et = l, pe !== null && (et ? (e = pe, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : pe.removeChild(n.stateNode));
      break;
    case 18:
      pe !== null && (et ? (e = pe, n = n.stateNode, e.nodeType === 8 ? io(e.parentNode, n) : e.nodeType === 1 && io(e, n), Fr(e)) : io(pe, n.stateNode));
      break;
    case 4:
      r = pe, l = et, pe = n.stateNode.containerInfo, et = !0, Ot(e, t, n), pe = r, et = l;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!xe && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        l = r = r.next;
        do {
          var i = l, o = i.destroy;
          i = i.tag, o !== void 0 && (i & 2 || i & 4) && is(n, t, o), l = l.next;
        } while (l !== r);
      }
      Ot(e, t, n);
      break;
    case 1:
      if (!xe && (On(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (s) {
        Z(n, t, s);
      }
      Ot(e, t, n);
      break;
    case 21:
      Ot(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (xe = (r = xe) || n.memoizedState !== null, Ot(e, t, n), xe = r) : Ot(e, t, n);
      break;
    default:
      Ot(e, t, n);
  }
}
function Nu(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new tm()), t.forEach(function(r) {
      var l = dm.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(l, l));
    });
  }
}
function Ze(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var l = n[r];
    try {
      var i = e, o = t, s = o;
      e: for (; s !== null; ) {
        switch (s.tag) {
          case 5:
            pe = s.stateNode, et = !1;
            break e;
          case 3:
            pe = s.stateNode.containerInfo, et = !0;
            break e;
          case 4:
            pe = s.stateNode.containerInfo, et = !0;
            break e;
        }
        s = s.return;
      }
      if (pe === null) throw Error(j(160));
      Gd(i, o, l), pe = null, et = !1;
      var a = l.alternate;
      a !== null && (a.return = null), l.return = null;
    } catch (u) {
      Z(l, t, u);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Yd(t, e), t = t.sibling;
}
function Yd(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Ze(t, e), dt(e), r & 4) {
        try {
          Rr(3, e, e.return), Ri(3, e);
        } catch (x) {
          Z(e, e.return, x);
        }
        try {
          Rr(5, e, e.return);
        } catch (x) {
          Z(e, e.return, x);
        }
      }
      break;
    case 1:
      Ze(t, e), dt(e), r & 512 && n !== null && On(n, n.return);
      break;
    case 5:
      if (Ze(t, e), dt(e), r & 512 && n !== null && On(n, n.return), e.flags & 32) {
        var l = e.stateNode;
        try {
          Or(l, "");
        } catch (x) {
          Z(e, e.return, x);
        }
      }
      if (r & 4 && (l = e.stateNode, l != null)) {
        var i = e.memoizedProps, o = n !== null ? n.memoizedProps : i, s = e.type, a = e.updateQueue;
        if (e.updateQueue = null, a !== null) try {
          s === "input" && i.type === "radio" && i.name != null && yc(l, i), _o(s, o);
          var u = _o(s, i);
          for (o = 0; o < a.length; o += 2) {
            var m = a[o], p = a[o + 1];
            m === "style" ? Cc(l, p) : m === "dangerouslySetInnerHTML" ? Sc(l, p) : m === "children" ? Or(l, p) : ks(l, m, p, u);
          }
          switch (s) {
            case "input":
              Ro(l, i);
              break;
            case "textarea":
              wc(l, i);
              break;
            case "select":
              var v = l._wrapperState.wasMultiple;
              l._wrapperState.wasMultiple = !!i.multiple;
              var y = i.value;
              y != null ? zn(l, !!i.multiple, y, !1) : v !== !!i.multiple && (i.defaultValue != null ? zn(
                l,
                !!i.multiple,
                i.defaultValue,
                !0
              ) : zn(l, !!i.multiple, i.multiple ? [] : "", !1));
          }
          l[br] = i;
        } catch (x) {
          Z(e, e.return, x);
        }
      }
      break;
    case 6:
      if (Ze(t, e), dt(e), r & 4) {
        if (e.stateNode === null) throw Error(j(162));
        l = e.stateNode, i = e.memoizedProps;
        try {
          l.nodeValue = i;
        } catch (x) {
          Z(e, e.return, x);
        }
      }
      break;
    case 3:
      if (Ze(t, e), dt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        Fr(t.containerInfo);
      } catch (x) {
        Z(e, e.return, x);
      }
      break;
    case 4:
      Ze(t, e), dt(e);
      break;
    case 13:
      Ze(t, e), dt(e), l = e.child, l.flags & 8192 && (i = l.memoizedState !== null, l.stateNode.isHidden = i, !i || l.alternate !== null && l.alternate.memoizedState !== null || (ta = ee())), r & 4 && Nu(e);
      break;
    case 22:
      if (m = n !== null && n.memoizedState !== null, e.mode & 1 ? (xe = (u = xe) || m, Ze(t, e), xe = u) : Ze(t, e), dt(e), r & 8192) {
        if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !m && e.mode & 1) for (_ = e, m = e.child; m !== null; ) {
          for (p = _ = m; _ !== null; ) {
            switch (v = _, y = v.child, v.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Rr(4, v, v.return);
                break;
              case 1:
                On(v, v.return);
                var k = v.stateNode;
                if (typeof k.componentWillUnmount == "function") {
                  r = v, n = v.return;
                  try {
                    t = r, k.props = t.memoizedProps, k.state = t.memoizedState, k.componentWillUnmount();
                  } catch (x) {
                    Z(r, n, x);
                  }
                }
                break;
              case 5:
                On(v, v.return);
                break;
              case 22:
                if (v.memoizedState !== null) {
                  Ru(p);
                  continue;
                }
            }
            y !== null ? (y.return = v, _ = y) : Ru(p);
          }
          m = m.sibling;
        }
        e: for (m = null, p = e; ; ) {
          if (p.tag === 5) {
            if (m === null) {
              m = p;
              try {
                l = p.stateNode, u ? (i = l.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (s = p.stateNode, a = p.memoizedProps.style, o = a != null && a.hasOwnProperty("display") ? a.display : null, s.style.display = kc("display", o));
              } catch (x) {
                Z(e, e.return, x);
              }
            }
          } else if (p.tag === 6) {
            if (m === null) try {
              p.stateNode.nodeValue = u ? "" : p.memoizedProps;
            } catch (x) {
              Z(e, e.return, x);
            }
          } else if ((p.tag !== 22 && p.tag !== 23 || p.memoizedState === null || p === e) && p.child !== null) {
            p.child.return = p, p = p.child;
            continue;
          }
          if (p === e) break e;
          for (; p.sibling === null; ) {
            if (p.return === null || p.return === e) break e;
            m === p && (m = null), p = p.return;
          }
          m === p && (m = null), p.sibling.return = p.return, p = p.sibling;
        }
      }
      break;
    case 19:
      Ze(t, e), dt(e), r & 4 && Nu(e);
      break;
    case 21:
      break;
    default:
      Ze(
        t,
        e
      ), dt(e);
  }
}
function dt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Xd(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(j(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Or(l, ""), r.flags &= -33);
          var i = Eu(e);
          as(e, i, l);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo, s = Eu(e);
          ss(e, s, o);
          break;
        default:
          throw Error(j(161));
      }
    } catch (a) {
      Z(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function rm(e, t, n) {
  _ = e, Jd(e);
}
function Jd(e, t, n) {
  for (var r = (e.mode & 1) !== 0; _ !== null; ) {
    var l = _, i = l.child;
    if (l.tag === 22 && r) {
      var o = l.memoizedState !== null || El;
      if (!o) {
        var s = l.alternate, a = s !== null && s.memoizedState !== null || xe;
        s = El;
        var u = xe;
        if (El = o, (xe = a) && !u) for (_ = l; _ !== null; ) o = _, a = o.child, o.tag === 22 && o.memoizedState !== null ? Du(l) : a !== null ? (a.return = o, _ = a) : Du(l);
        for (; i !== null; ) _ = i, Jd(i), i = i.sibling;
        _ = l, El = s, xe = u;
      }
      ju(e);
    } else l.subtreeFlags & 8772 && i !== null ? (i.return = l, _ = i) : ju(e);
  }
}
function ju(e) {
  for (; _ !== null; ) {
    var t = _;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            xe || Ri(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !xe) if (n === null) r.componentDidMount();
            else {
              var l = t.elementType === t.type ? n.memoizedProps : qe(t.type, n.memoizedProps);
              r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var i = t.updateQueue;
            i !== null && cu(t, i, r);
            break;
          case 3:
            var o = t.updateQueue;
            if (o !== null) {
              if (n = null, t.child !== null) switch (t.child.tag) {
                case 5:
                  n = t.child.stateNode;
                  break;
                case 1:
                  n = t.child.stateNode;
              }
              cu(t, o, n);
            }
            break;
          case 5:
            var s = t.stateNode;
            if (n === null && t.flags & 4) {
              n = s;
              var a = t.memoizedProps;
              switch (t.type) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  a.autoFocus && n.focus();
                  break;
                case "img":
                  a.src && (n.src = a.src);
              }
            }
            break;
          case 6:
            break;
          case 4:
            break;
          case 12:
            break;
          case 13:
            if (t.memoizedState === null) {
              var u = t.alternate;
              if (u !== null) {
                var m = u.memoizedState;
                if (m !== null) {
                  var p = m.dehydrated;
                  p !== null && Fr(p);
                }
              }
            }
            break;
          case 19:
          case 17:
          case 21:
          case 22:
          case 23:
          case 25:
            break;
          default:
            throw Error(j(163));
        }
        xe || t.flags & 512 && os(t);
      } catch (v) {
        Z(t, t.return, v);
      }
    }
    if (t === e) {
      _ = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, _ = n;
      break;
    }
    _ = t.return;
  }
}
function Ru(e) {
  for (; _ !== null; ) {
    var t = _;
    if (t === e) {
      _ = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, _ = n;
      break;
    }
    _ = t.return;
  }
}
function Du(e) {
  for (; _ !== null; ) {
    var t = _;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Ri(4, t);
          } catch (a) {
            Z(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              Z(t, l, a);
            }
          }
          var i = t.return;
          try {
            os(t);
          } catch (a) {
            Z(t, i, a);
          }
          break;
        case 5:
          var o = t.return;
          try {
            os(t);
          } catch (a) {
            Z(t, o, a);
          }
      }
    } catch (a) {
      Z(t, t.return, a);
    }
    if (t === e) {
      _ = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      s.return = t.return, _ = s;
      break;
    }
    _ = t.return;
  }
}
var lm = Math.ceil, si = Dt.ReactCurrentDispatcher, qs = Dt.ReactCurrentOwner, Xe = Dt.ReactCurrentBatchConfig, B = 0, de = null, te = null, he = 0, ze = 0, Mn = en(0), ae = 0, Gr = null, pn = 0, Di = 0, ea = 0, Dr = null, Te = null, ta = 0, Yn = 1 / 0, wt = null, ai = !1, us = null, Kt = null, Nl = !1, $t = null, ui = 0, Tr = 0, cs = null, Fl = -1, Ul = 0;
function Ee() {
  return B & 6 ? ee() : Fl !== -1 ? Fl : Fl = ee();
}
function Xt(e) {
  return e.mode & 1 ? B & 2 && he !== 0 ? he & -he : $h.transition !== null ? (Ul === 0 && (Ul = Mc()), Ul) : (e = b, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Hc(e.type)), e) : 1;
}
function rt(e, t, n, r) {
  if (50 < Tr) throw Tr = 0, cs = null, Error(j(185));
  el(e, n, r), (!(B & 2) || e !== de) && (e === de && (!(B & 2) && (Di |= n), ae === 4 && Ut(e, he)), Pe(e, r), n === 1 && B === 0 && !(t.mode & 1) && (Yn = ee() + 500, Ei && tn()));
}
function Pe(e, t) {
  var n = e.callbackNode;
  $p(e, t);
  var r = Ql(e, e === de ? he : 0);
  if (r === 0) n !== null && za(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && za(n), t === 1) e.tag === 0 ? Bh(Tu.bind(null, e)) : sd(Tu.bind(null, e)), Ah(function() {
      !(B & 6) && tn();
    }), n = null;
    else {
      switch (Ac(r)) {
        case 1:
          n = Rs;
          break;
        case 4:
          n = Pc;
          break;
        case 16:
          n = Wl;
          break;
        case 536870912:
          n = Oc;
          break;
        default:
          n = Wl;
      }
      n = of(n, Zd.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function Zd(e, t) {
  if (Fl = -1, Ul = 0, B & 6) throw Error(j(327));
  var n = e.callbackNode;
  if (Hn() && e.callbackNode !== n) return null;
  var r = Ql(e, e === de ? he : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = ci(e, r);
  else {
    t = r;
    var l = B;
    B |= 2;
    var i = ef();
    (de !== e || he !== t) && (wt = null, Yn = ee() + 500, an(e, t));
    do
      try {
        sm();
        break;
      } catch (s) {
        qd(e, s);
      }
    while (!0);
    Bs(), si.current = i, B = l, te !== null ? t = 0 : (de = null, he = 0, t = ae);
  }
  if (t !== 0) {
    if (t === 2 && (l = zo(e), l !== 0 && (r = l, t = ds(e, l))), t === 1) throw n = Gr, an(e, 0), Ut(e, r), Pe(e, ee()), n;
    if (t === 6) Ut(e, r);
    else {
      if (l = e.current.alternate, !(r & 30) && !im(l) && (t = ci(e, r), t === 2 && (i = zo(e), i !== 0 && (r = i, t = ds(e, i))), t === 1)) throw n = Gr, an(e, 0), Ut(e, r), Pe(e, ee()), n;
      switch (e.finishedWork = l, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(j(345));
        case 2:
          rn(e, Te, wt);
          break;
        case 3:
          if (Ut(e, r), (r & 130023424) === r && (t = ta + 500 - ee(), 10 < t)) {
            if (Ql(e, 0) !== 0) break;
            if (l = e.suspendedLanes, (l & r) !== r) {
              Ee(), e.pingedLanes |= e.suspendedLanes & l;
              break;
            }
            e.timeoutHandle = Wo(rn.bind(null, e, Te, wt), t);
            break;
          }
          rn(e, Te, wt);
          break;
        case 4:
          if (Ut(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var o = 31 - nt(r);
            i = 1 << o, o = t[o], o > l && (l = o), r &= ~i;
          }
          if (r = l, r = ee() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * lm(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Wo(rn.bind(null, e, Te, wt), r);
            break;
          }
          rn(e, Te, wt);
          break;
        case 5:
          rn(e, Te, wt);
          break;
        default:
          throw Error(j(329));
      }
    }
  }
  return Pe(e, ee()), e.callbackNode === n ? Zd.bind(null, e) : null;
}
function ds(e, t) {
  var n = Dr;
  return e.current.memoizedState.isDehydrated && (an(e, t).flags |= 256), e = ci(e, t), e !== 2 && (t = Te, Te = n, t !== null && fs(t)), e;
}
function fs(e) {
  Te === null ? Te = e : Te.push.apply(Te, e);
}
function im(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var l = n[r], i = l.getSnapshot;
        l = l.value;
        try {
          if (!lt(i(), l)) return !1;
        } catch {
          return !1;
        }
      }
    }
    if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
  }
  return !0;
}
function Ut(e, t) {
  for (t &= ~ea, t &= ~Di, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - nt(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function Tu(e) {
  if (B & 6) throw Error(j(327));
  Hn();
  var t = Ql(e, 0);
  if (!(t & 1)) return Pe(e, ee()), null;
  var n = ci(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = zo(e);
    r !== 0 && (t = r, n = ds(e, r));
  }
  if (n === 1) throw n = Gr, an(e, 0), Ut(e, t), Pe(e, ee()), n;
  if (n === 6) throw Error(j(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, rn(e, Te, wt), Pe(e, ee()), null;
}
function na(e, t) {
  var n = B;
  B |= 1;
  try {
    return e(t);
  } finally {
    B = n, B === 0 && (Yn = ee() + 500, Ei && tn());
  }
}
function hn(e) {
  $t !== null && $t.tag === 0 && !(B & 6) && Hn();
  var t = B;
  B |= 1;
  var n = Xe.transition, r = b;
  try {
    if (Xe.transition = null, b = 1, e) return e();
  } finally {
    b = r, Xe.transition = n, B = t, !(B & 6) && tn();
  }
}
function ra() {
  ze = Mn.current, Q(Mn);
}
function an(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, Mh(n)), te !== null) for (n = te.return; n !== null; ) {
    var r = n;
    switch (zs(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && Jl();
        break;
      case 3:
        Xn(), Q(Le), Q(Se), Qs();
        break;
      case 5:
        Ws(r);
        break;
      case 4:
        Xn();
        break;
      case 13:
        Q(G);
        break;
      case 19:
        Q(G);
        break;
      case 10:
        $s(r.type._context);
        break;
      case 22:
      case 23:
        ra();
    }
    n = n.return;
  }
  if (de = e, te = e = Gt(e.current, null), he = ze = t, ae = 0, Gr = null, ea = Di = pn = 0, Te = Dr = null, on !== null) {
    for (t = 0; t < on.length; t++) if (n = on[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var l = r.next, i = n.pending;
      if (i !== null) {
        var o = i.next;
        i.next = l, r.next = o;
      }
      n.pending = r;
    }
    on = null;
  }
  return e;
}
function qd(e, t) {
  do {
    var n = te;
    try {
      if (Bs(), Ml.current = oi, ii) {
        for (var r = Y.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), r = r.next;
        }
        ii = !1;
      }
      if (fn = 0, ue = oe = Y = null, jr = !1, Qr = 0, qs.current = null, n === null || n.return === null) {
        ae = 1, Gr = t, te = null;
        break;
      }
      e: {
        var i = e, o = n.return, s = n, a = t;
        if (t = he, s.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
          var u = a, m = s, p = m.tag;
          if (!(m.mode & 1) && (p === 0 || p === 11 || p === 15)) {
            var v = m.alternate;
            v ? (m.updateQueue = v.updateQueue, m.memoizedState = v.memoizedState, m.lanes = v.lanes) : (m.updateQueue = null, m.memoizedState = null);
          }
          var y = vu(o);
          if (y !== null) {
            y.flags &= -257, gu(y, o, s, i, t), y.mode & 1 && mu(i, u, t), t = y, a = u;
            var k = t.updateQueue;
            if (k === null) {
              var x = /* @__PURE__ */ new Set();
              x.add(a), t.updateQueue = x;
            } else k.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              mu(i, u, t), la();
              break e;
            }
            a = Error(j(426));
          }
        } else if (X && s.mode & 1) {
          var D = vu(o);
          if (D !== null) {
            !(D.flags & 65536) && (D.flags |= 256), gu(D, o, s, i, t), Fs(Gn(a, s));
            break e;
          }
        }
        i = a = Gn(a, s), ae !== 4 && (ae = 2), Dr === null ? Dr = [i] : Dr.push(i), i = o;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var f = Ad(i, a, t);
              uu(i, f);
              break e;
            case 1:
              s = a;
              var d = i.type, h = i.stateNode;
              if (!(i.flags & 128) && (typeof d.getDerivedStateFromError == "function" || h !== null && typeof h.componentDidCatch == "function" && (Kt === null || !Kt.has(h)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var w = zd(i, s, t);
                uu(i, w);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      nf(n);
    } catch (E) {
      t = E, te === n && n !== null && (te = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function ef() {
  var e = si.current;
  return si.current = oi, e === null ? oi : e;
}
function la() {
  (ae === 0 || ae === 3 || ae === 2) && (ae = 4), de === null || !(pn & 268435455) && !(Di & 268435455) || Ut(de, he);
}
function ci(e, t) {
  var n = B;
  B |= 2;
  var r = ef();
  (de !== e || he !== t) && (wt = null, an(e, t));
  do
    try {
      om();
      break;
    } catch (l) {
      qd(e, l);
    }
  while (!0);
  if (Bs(), B = n, si.current = r, te !== null) throw Error(j(261));
  return de = null, he = 0, ae;
}
function om() {
  for (; te !== null; ) tf(te);
}
function sm() {
  for (; te !== null && !_p(); ) tf(te);
}
function tf(e) {
  var t = lf(e.alternate, e, ze);
  e.memoizedProps = e.pendingProps, t === null ? nf(e) : te = t, qs.current = null;
}
function nf(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = em(n, t), n !== null) {
        n.flags &= 32767, te = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        ae = 6, te = null;
        return;
      }
    } else if (n = qh(n, t, ze), n !== null) {
      te = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      te = t;
      return;
    }
    te = t = e;
  } while (t !== null);
  ae === 0 && (ae = 5);
}
function rn(e, t, n) {
  var r = b, l = Xe.transition;
  try {
    Xe.transition = null, b = 1, am(e, t, n, r);
  } finally {
    Xe.transition = l, b = r;
  }
  return null;
}
function am(e, t, n, r) {
  do
    Hn();
  while ($t !== null);
  if (B & 6) throw Error(j(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(j(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var i = n.lanes | n.childLanes;
  if (Hp(e, i), e === de && (te = de = null, he = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Nl || (Nl = !0, of(Wl, function() {
    return Hn(), null;
  })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
    i = Xe.transition, Xe.transition = null;
    var o = b;
    b = 1;
    var s = B;
    B |= 4, qs.current = null, nm(e, n), Yd(n, e), Dh(bo), Kl = !!Ho, bo = Ho = null, e.current = n, rm(n), Pp(), B = s, b = o, Xe.transition = i;
  } else e.current = n;
  if (Nl && (Nl = !1, $t = e, ui = l), i = e.pendingLanes, i === 0 && (Kt = null), Ap(n.stateNode), Pe(e, ee()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
  if (ai) throw ai = !1, e = us, us = null, e;
  return ui & 1 && e.tag !== 0 && Hn(), i = e.pendingLanes, i & 1 ? e === cs ? Tr++ : (Tr = 0, cs = e) : Tr = 0, tn(), null;
}
function Hn() {
  if ($t !== null) {
    var e = Ac(ui), t = Xe.transition, n = b;
    try {
      if (Xe.transition = null, b = 16 > e ? 16 : e, $t === null) var r = !1;
      else {
        if (e = $t, $t = null, ui = 0, B & 6) throw Error(j(331));
        var l = B;
        for (B |= 4, _ = e.current; _ !== null; ) {
          var i = _, o = i.child;
          if (_.flags & 16) {
            var s = i.deletions;
            if (s !== null) {
              for (var a = 0; a < s.length; a++) {
                var u = s[a];
                for (_ = u; _ !== null; ) {
                  var m = _;
                  switch (m.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Rr(8, m, i);
                  }
                  var p = m.child;
                  if (p !== null) p.return = m, _ = p;
                  else for (; _ !== null; ) {
                    m = _;
                    var v = m.sibling, y = m.return;
                    if (Kd(m), m === u) {
                      _ = null;
                      break;
                    }
                    if (v !== null) {
                      v.return = y, _ = v;
                      break;
                    }
                    _ = y;
                  }
                }
              }
              var k = i.alternate;
              if (k !== null) {
                var x = k.child;
                if (x !== null) {
                  k.child = null;
                  do {
                    var D = x.sibling;
                    x.sibling = null, x = D;
                  } while (x !== null);
                }
              }
              _ = i;
            }
          }
          if (i.subtreeFlags & 2064 && o !== null) o.return = i, _ = o;
          else e: for (; _ !== null; ) {
            if (i = _, i.flags & 2048) switch (i.tag) {
              case 0:
              case 11:
              case 15:
                Rr(9, i, i.return);
            }
            var f = i.sibling;
            if (f !== null) {
              f.return = i.return, _ = f;
              break e;
            }
            _ = i.return;
          }
        }
        var d = e.current;
        for (_ = d; _ !== null; ) {
          o = _;
          var h = o.child;
          if (o.subtreeFlags & 2064 && h !== null) h.return = o, _ = h;
          else e: for (o = d; _ !== null; ) {
            if (s = _, s.flags & 2048) try {
              switch (s.tag) {
                case 0:
                case 11:
                case 15:
                  Ri(9, s);
              }
            } catch (E) {
              Z(s, s.return, E);
            }
            if (s === o) {
              _ = null;
              break e;
            }
            var w = s.sibling;
            if (w !== null) {
              w.return = s.return, _ = w;
              break e;
            }
            _ = s.return;
          }
        }
        if (B = l, tn(), ht && typeof ht.onPostCommitFiberRoot == "function") try {
          ht.onPostCommitFiberRoot(wi, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      b = n, Xe.transition = t;
    }
  }
  return !1;
}
function Iu(e, t, n) {
  t = Gn(n, t), t = Ad(e, t, 1), e = Qt(e, t, 1), t = Ee(), e !== null && (el(e, 1, t), Pe(e, t));
}
function Z(e, t, n) {
  if (e.tag === 3) Iu(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      Iu(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Kt === null || !Kt.has(r))) {
        e = Gn(n, e), e = zd(t, e, 1), t = Qt(t, e, 1), e = Ee(), t !== null && (el(t, 1, e), Pe(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function um(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = Ee(), e.pingedLanes |= e.suspendedLanes & n, de === e && (he & n) === n && (ae === 4 || ae === 3 && (he & 130023424) === he && 500 > ee() - ta ? an(e, 0) : ea |= n), Pe(e, t);
}
function rf(e, t) {
  t === 0 && (e.mode & 1 ? (t = ml, ml <<= 1, !(ml & 130023424) && (ml = 4194304)) : t = 1);
  var n = Ee();
  e = jt(e, t), e !== null && (el(e, t, n), Pe(e, n));
}
function cm(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), rf(e, n);
}
function dm(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode, l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(j(314));
  }
  r !== null && r.delete(t), rf(e, n);
}
var lf;
lf = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || Le.current) Ie = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return Ie = !1, Zh(e, t, n);
    Ie = !!(e.flags & 131072);
  }
  else Ie = !1, X && t.flags & 1048576 && ad(t, ei, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      zl(e, t), e = t.pendingProps;
      var l = Wn(t, Se.current);
      $n(t, n), l = Xs(null, t, r, e, l, n);
      var i = Gs();
      return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, _e(r) ? (i = !0, Zl(t)) : i = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, bs(t), l.updater = ji, t.stateNode = l, l._reactInternals = t, Zo(t, r, e, n), t = ts(null, t, r, !0, i, n)) : (t.tag = 0, X && i && As(t), Ce(null, t, l, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (zl(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = pm(r), e = qe(r, e), l) {
          case 0:
            t = es(null, t, r, e, n);
            break e;
          case 1:
            t = xu(null, t, r, e, n);
            break e;
          case 11:
            t = yu(null, t, r, e, n);
            break e;
          case 14:
            t = wu(null, t, r, qe(r.type, e), n);
            break e;
        }
        throw Error(j(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : qe(r, l), es(e, t, r, l, n);
    case 1:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : qe(r, l), xu(e, t, r, l, n);
    case 3:
      e: {
        if ($d(t), e === null) throw Error(j(387));
        r = t.pendingProps, i = t.memoizedState, l = i.element, hd(e, t), ri(t, r, null, n);
        var o = t.memoizedState;
        if (r = o.element, i.isDehydrated) if (i = { element: r, isDehydrated: !1, cache: o.cache, pendingSuspenseBoundaries: o.pendingSuspenseBoundaries, transitions: o.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
          l = Gn(Error(j(423)), t), t = Su(e, t, r, n, l);
          break e;
        } else if (r !== l) {
          l = Gn(Error(j(424)), t), t = Su(e, t, r, n, l);
          break e;
        } else for (Fe = Wt(t.stateNode.containerInfo.firstChild), Ue = t, X = !0, tt = null, n = fd(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (Qn(), r === l) {
            t = Rt(e, t, n);
            break e;
          }
          Ce(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return md(t), e === null && Go(t), r = t.type, l = t.pendingProps, i = e !== null ? e.memoizedProps : null, o = l.children, Vo(r, l) ? o = null : i !== null && Vo(r, i) && (t.flags |= 32), Bd(e, t), Ce(e, t, o, n), t.child;
    case 6:
      return e === null && Go(t), null;
    case 13:
      return Hd(e, t, n);
    case 4:
      return Vs(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Kn(t, null, r, n) : Ce(e, t, r, n), t.child;
    case 11:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : qe(r, l), yu(e, t, r, l, n);
    case 7:
      return Ce(e, t, t.pendingProps, n), t.child;
    case 8:
      return Ce(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Ce(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, l = t.pendingProps, i = t.memoizedProps, o = l.value, V(ti, r._currentValue), r._currentValue = o, i !== null) if (lt(i.value, o)) {
          if (i.children === l.children && !Le.current) {
            t = Rt(e, t, n);
            break e;
          }
        } else for (i = t.child, i !== null && (i.return = t); i !== null; ) {
          var s = i.dependencies;
          if (s !== null) {
            o = i.child;
            for (var a = s.firstContext; a !== null; ) {
              if (a.context === r) {
                if (i.tag === 1) {
                  a = Ct(-1, n & -n), a.tag = 2;
                  var u = i.updateQueue;
                  if (u !== null) {
                    u = u.shared;
                    var m = u.pending;
                    m === null ? a.next = a : (a.next = m.next, m.next = a), u.pending = a;
                  }
                }
                i.lanes |= n, a = i.alternate, a !== null && (a.lanes |= n), Yo(
                  i.return,
                  n,
                  t
                ), s.lanes |= n;
                break;
              }
              a = a.next;
            }
          } else if (i.tag === 10) o = i.type === t.type ? null : i.child;
          else if (i.tag === 18) {
            if (o = i.return, o === null) throw Error(j(341));
            o.lanes |= n, s = o.alternate, s !== null && (s.lanes |= n), Yo(o, n, t), o = i.sibling;
          } else o = i.child;
          if (o !== null) o.return = i;
          else for (o = i; o !== null; ) {
            if (o === t) {
              o = null;
              break;
            }
            if (i = o.sibling, i !== null) {
              i.return = o.return, o = i;
              break;
            }
            o = o.return;
          }
          i = o;
        }
        Ce(e, t, l.children, n), t = t.child;
      }
      return t;
    case 9:
      return l = t.type, r = t.pendingProps.children, $n(t, n), l = Ge(l), r = r(l), t.flags |= 1, Ce(e, t, r, n), t.child;
    case 14:
      return r = t.type, l = qe(r, t.pendingProps), l = qe(r.type, l), wu(e, t, r, l, n);
    case 15:
      return Fd(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : qe(r, l), zl(e, t), t.tag = 1, _e(r) ? (e = !0, Zl(t)) : e = !1, $n(t, n), Md(t, r, l), Zo(t, r, l, n), ts(null, t, r, !0, e, n);
    case 19:
      return bd(e, t, n);
    case 22:
      return Ud(e, t, n);
  }
  throw Error(j(156, t.tag));
};
function of(e, t) {
  return _c(e, t);
}
function fm(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Ke(e, t, n, r) {
  return new fm(e, t, n, r);
}
function ia(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function pm(e) {
  if (typeof e == "function") return ia(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Es) return 11;
    if (e === Ns) return 14;
  }
  return 2;
}
function Gt(e, t) {
  var n = e.alternate;
  return n === null ? (n = Ke(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Bl(e, t, n, r, l, i) {
  var o = 2;
  if (r = e, typeof e == "function") ia(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else e: switch (e) {
    case Nn:
      return un(n.children, l, i, t);
    case Cs:
      o = 8, l |= 8;
      break;
    case ko:
      return e = Ke(12, n, t, l | 2), e.elementType = ko, e.lanes = i, e;
    case Co:
      return e = Ke(13, n, t, l), e.elementType = Co, e.lanes = i, e;
    case Eo:
      return e = Ke(19, n, t, l), e.elementType = Eo, e.lanes = i, e;
    case mc:
      return Ti(n, l, i, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case pc:
          o = 10;
          break e;
        case hc:
          o = 9;
          break e;
        case Es:
          o = 11;
          break e;
        case Ns:
          o = 14;
          break e;
        case Mt:
          o = 16, r = null;
          break e;
      }
      throw Error(j(130, e == null ? e : typeof e, ""));
  }
  return t = Ke(o, n, t, l), t.elementType = e, t.type = r, t.lanes = i, t;
}
function un(e, t, n, r) {
  return e = Ke(7, e, r, t), e.lanes = n, e;
}
function Ti(e, t, n, r) {
  return e = Ke(22, e, r, t), e.elementType = mc, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function ho(e, t, n) {
  return e = Ke(6, e, null, t), e.lanes = n, e;
}
function mo(e, t, n) {
  return t = Ke(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function hm(e, t, n, r, l) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Xi(0), this.expirationTimes = Xi(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Xi(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
}
function oa(e, t, n, r, l, i, o, s, a) {
  return e = new hm(e, t, n, s, a), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = Ke(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, bs(i), e;
}
function mm(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: En, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function sf(e) {
  if (!e) return Jt;
  e = e._reactInternals;
  e: {
    if (vn(e) !== e || e.tag !== 1) throw Error(j(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (_e(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(j(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (_e(n)) return od(e, n, t);
  }
  return t;
}
function af(e, t, n, r, l, i, o, s, a) {
  return e = oa(n, r, !0, e, l, i, o, s, a), e.context = sf(null), n = e.current, r = Ee(), l = Xt(n), i = Ct(r, l), i.callback = t ?? null, Qt(n, i, l), e.current.lanes = l, el(e, l, r), Pe(e, r), e;
}
function Ii(e, t, n, r) {
  var l = t.current, i = Ee(), o = Xt(l);
  return n = sf(n), t.context === null ? t.context = n : t.pendingContext = n, t = Ct(i, o), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Qt(l, t, o), e !== null && (rt(e, l, o, i), Ol(e, l, o)), o;
}
function di(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Lu(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function sa(e, t) {
  Lu(e, t), (e = e.alternate) && Lu(e, t);
}
function vm() {
  return null;
}
var uf = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function aa(e) {
  this._internalRoot = e;
}
Li.prototype.render = aa.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(j(409));
  Ii(e, t, null, null);
};
Li.prototype.unmount = aa.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    hn(function() {
      Ii(null, e, null, null);
    }), t[Nt] = null;
  }
};
function Li(e) {
  this._internalRoot = e;
}
Li.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Uc();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Ft.length && t !== 0 && t < Ft[n].priority; n++) ;
    Ft.splice(n, 0, e), n === 0 && $c(e);
  }
};
function ua(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function _i(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function _u() {
}
function gm(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var u = di(o);
        i.call(u);
      };
    }
    var o = af(t, r, e, 0, null, !1, !1, "", _u);
    return e._reactRootContainer = o, e[Nt] = o.current, $r(e.nodeType === 8 ? e.parentNode : e), hn(), o;
  }
  for (; l = e.lastChild; ) e.removeChild(l);
  if (typeof r == "function") {
    var s = r;
    r = function() {
      var u = di(a);
      s.call(u);
    };
  }
  var a = oa(e, 0, !1, null, null, !1, !1, "", _u);
  return e._reactRootContainer = a, e[Nt] = a.current, $r(e.nodeType === 8 ? e.parentNode : e), hn(function() {
    Ii(t, a, n, r);
  }), a;
}
function Pi(e, t, n, r, l) {
  var i = n._reactRootContainer;
  if (i) {
    var o = i;
    if (typeof l == "function") {
      var s = l;
      l = function() {
        var a = di(o);
        s.call(a);
      };
    }
    Ii(t, o, e, l);
  } else o = gm(n, t, e, l, r);
  return di(o);
}
zc = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = wr(t.pendingLanes);
        n !== 0 && (Ds(t, n | 1), Pe(t, ee()), !(B & 6) && (Yn = ee() + 500, tn()));
      }
      break;
    case 13:
      hn(function() {
        var r = jt(e, 1);
        if (r !== null) {
          var l = Ee();
          rt(r, e, 1, l);
        }
      }), sa(e, 1);
  }
};
Ts = function(e) {
  if (e.tag === 13) {
    var t = jt(e, 134217728);
    if (t !== null) {
      var n = Ee();
      rt(t, e, 134217728, n);
    }
    sa(e, 134217728);
  }
};
Fc = function(e) {
  if (e.tag === 13) {
    var t = Xt(e), n = jt(e, t);
    if (n !== null) {
      var r = Ee();
      rt(n, e, t, r);
    }
    sa(e, t);
  }
};
Uc = function() {
  return b;
};
Bc = function(e, t) {
  var n = b;
  try {
    return b = e, t();
  } finally {
    b = n;
  }
};
Oo = function(e, t, n) {
  switch (t) {
    case "input":
      if (Ro(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = Ci(r);
            if (!l) throw Error(j(90));
            gc(r), Ro(r, l);
          }
        }
      }
      break;
    case "textarea":
      wc(e, n);
      break;
    case "select":
      t = n.value, t != null && zn(e, !!n.multiple, t, !1);
  }
};
jc = na;
Rc = hn;
var ym = { usingClientEntryPoint: !1, Events: [nl, Tn, Ci, Ec, Nc, na] }, mr = { findFiberByHostInstance: ln, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, wm = { bundleType: mr.bundleType, version: mr.version, rendererPackageName: mr.rendererPackageName, rendererConfig: mr.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Dt.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Ic(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: mr.findFiberByHostInstance || vm, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var jl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!jl.isDisabled && jl.supportsFiber) try {
    wi = jl.inject(wm), ht = jl;
  } catch {
  }
}
$e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ym;
$e.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!ua(t)) throw Error(j(200));
  return mm(e, t, null, n);
};
$e.createRoot = function(e, t) {
  if (!ua(e)) throw Error(j(299));
  var n = !1, r = "", l = uf;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = oa(e, 1, !1, null, null, n, !1, r, l), e[Nt] = t.current, $r(e.nodeType === 8 ? e.parentNode : e), new aa(t);
};
$e.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(j(188)) : (e = Object.keys(e).join(","), Error(j(268, e)));
  return e = Ic(t), e = e === null ? null : e.stateNode, e;
};
$e.flushSync = function(e) {
  return hn(e);
};
$e.hydrate = function(e, t, n) {
  if (!_i(t)) throw Error(j(200));
  return Pi(null, e, t, !0, n);
};
$e.hydrateRoot = function(e, t, n) {
  if (!ua(e)) throw Error(j(405));
  var r = n != null && n.hydratedSources || null, l = !1, i = "", o = uf;
  if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (o = n.onRecoverableError)), t = af(t, null, e, 1, n ?? null, l, !1, i, o), e[Nt] = t.current, $r(e), r) for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
    n,
    l
  );
  return new Li(t);
};
$e.render = function(e, t, n) {
  if (!_i(t)) throw Error(j(200));
  return Pi(null, e, t, !1, n);
};
$e.unmountComponentAtNode = function(e) {
  if (!_i(e)) throw Error(j(40));
  return e._reactRootContainer ? (hn(function() {
    Pi(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Nt] = null;
    });
  }), !0) : !1;
};
$e.unstable_batchedUpdates = na;
$e.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!_i(n)) throw Error(j(200));
  if (e == null || e._reactInternals === void 0) throw Error(j(38));
  return Pi(e, t, n, !1, r);
};
$e.version = "18.3.1-next-f1338f8080-20240426";
function cf() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(cf);
    } catch (e) {
      console.error(e);
    }
}
cf(), uc.exports = $e;
var An = uc.exports, Pu = An;
xo.createRoot = Pu.createRoot, xo.hydrateRoot = Pu.hydrateRoot;
function xm() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return g.useMemo(
    () => (r) => {
      t.forEach((l) => l(r));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    t
  );
}
const Oi = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function er(e) {
  const t = Object.prototype.toString.call(e);
  return t === "[object Window]" || // In Electron context the Window object serializes to [object global]
  t === "[object global]";
}
function ca(e) {
  return "nodeType" in e;
}
function Re(e) {
  var t, n;
  return e ? er(e) ? e : ca(e) && (t = (n = e.ownerDocument) == null ? void 0 : n.defaultView) != null ? t : window : window;
}
function da(e) {
  const {
    Document: t
  } = Re(e);
  return e instanceof t;
}
function ll(e) {
  return er(e) ? !1 : e instanceof Re(e).HTMLElement;
}
function df(e) {
  return e instanceof Re(e).SVGElement;
}
function tr(e) {
  return e ? er(e) ? e.document : ca(e) ? da(e) ? e : ll(e) || df(e) ? e.ownerDocument : document : document : document;
}
const it = Oi ? g.useLayoutEffect : g.useEffect;
function Mi(e) {
  const t = g.useRef(e);
  return it(() => {
    t.current = e;
  }), g.useCallback(function() {
    for (var n = arguments.length, r = new Array(n), l = 0; l < n; l++)
      r[l] = arguments[l];
    return t.current == null ? void 0 : t.current(...r);
  }, []);
}
function Sm() {
  const e = g.useRef(null), t = g.useCallback((r, l) => {
    e.current = setInterval(r, l);
  }, []), n = g.useCallback(() => {
    e.current !== null && (clearInterval(e.current), e.current = null);
  }, []);
  return [t, n];
}
function Yr(e, t) {
  t === void 0 && (t = [e]);
  const n = g.useRef(e);
  return it(() => {
    n.current !== e && (n.current = e);
  }, t), n;
}
function il(e, t) {
  const n = g.useRef();
  return g.useMemo(
    () => {
      const r = e(n.current);
      return n.current = r, r;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [...t]
  );
}
function fi(e) {
  const t = Mi(e), n = g.useRef(null), r = g.useCallback(
    (l) => {
      l !== n.current && (t == null || t(l, n.current)), n.current = l;
    },
    //eslint-disable-next-line
    []
  );
  return [n, r];
}
function pi(e) {
  const t = g.useRef();
  return g.useEffect(() => {
    t.current = e;
  }, [e]), t.current;
}
let vo = {};
function ol(e, t) {
  return g.useMemo(() => {
    if (t)
      return t;
    const n = vo[e] == null ? 0 : vo[e] + 1;
    return vo[e] = n, e + "-" + n;
  }, [e, t]);
}
function ff(e) {
  return function(t) {
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), l = 1; l < n; l++)
      r[l - 1] = arguments[l];
    return r.reduce((i, o) => {
      const s = Object.entries(o);
      for (const [a, u] of s) {
        const m = i[a];
        m != null && (i[a] = m + e * u);
      }
      return i;
    }, {
      ...t
    });
  };
}
const bn = /* @__PURE__ */ ff(1), Jr = /* @__PURE__ */ ff(-1);
function km(e) {
  return "clientX" in e && "clientY" in e;
}
function Ai(e) {
  if (!e)
    return !1;
  const {
    KeyboardEvent: t
  } = Re(e.target);
  return t && e instanceof t;
}
function Cm(e) {
  if (!e)
    return !1;
  const {
    TouchEvent: t
  } = Re(e.target);
  return t && e instanceof t;
}
function hi(e) {
  if (Cm(e)) {
    if (e.touches && e.touches.length) {
      const {
        clientX: t,
        clientY: n
      } = e.touches[0];
      return {
        x: t,
        y: n
      };
    } else if (e.changedTouches && e.changedTouches.length) {
      const {
        clientX: t,
        clientY: n
      } = e.changedTouches[0];
      return {
        x: t,
        y: n
      };
    }
  }
  return km(e) ? {
    x: e.clientX,
    y: e.clientY
  } : null;
}
const Zt = /* @__PURE__ */ Object.freeze({
  Translate: {
    toString(e) {
      if (!e)
        return;
      const {
        x: t,
        y: n
      } = e;
      return "translate3d(" + (t ? Math.round(t) : 0) + "px, " + (n ? Math.round(n) : 0) + "px, 0)";
    }
  },
  Scale: {
    toString(e) {
      if (!e)
        return;
      const {
        scaleX: t,
        scaleY: n
      } = e;
      return "scaleX(" + t + ") scaleY(" + n + ")";
    }
  },
  Transform: {
    toString(e) {
      if (e)
        return [Zt.Translate.toString(e), Zt.Scale.toString(e)].join(" ");
    }
  },
  Transition: {
    toString(e) {
      let {
        property: t,
        duration: n,
        easing: r
      } = e;
      return t + " " + n + "ms " + r;
    }
  }
}), Ou = "a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";
function Em(e) {
  return e.matches(Ou) ? e : e.querySelector(Ou);
}
const Nm = {
  display: "none"
};
function jm(e) {
  let {
    id: t,
    value: n
  } = e;
  return K.createElement("div", {
    id: t,
    style: Nm
  }, n);
}
function Rm(e) {
  let {
    id: t,
    announcement: n,
    ariaLiveType: r = "assertive"
  } = e;
  const l = {
    position: "fixed",
    top: 0,
    left: 0,
    width: 1,
    height: 1,
    margin: -1,
    border: 0,
    padding: 0,
    overflow: "hidden",
    clip: "rect(0 0 0 0)",
    clipPath: "inset(100%)",
    whiteSpace: "nowrap"
  };
  return K.createElement("div", {
    id: t,
    style: l,
    role: "status",
    "aria-live": r,
    "aria-atomic": !0
  }, n);
}
function Dm() {
  const [e, t] = g.useState("");
  return {
    announce: g.useCallback((r) => {
      r != null && t(r);
    }, []),
    announcement: e
  };
}
const pf = /* @__PURE__ */ g.createContext(null);
function Tm(e) {
  const t = g.useContext(pf);
  g.useEffect(() => {
    if (!t)
      throw new Error("useDndMonitor must be used within a children of <DndContext>");
    return t(e);
  }, [e, t]);
}
function Im() {
  const [e] = g.useState(() => /* @__PURE__ */ new Set()), t = g.useCallback((r) => (e.add(r), () => e.delete(r)), [e]);
  return [g.useCallback((r) => {
    let {
      type: l,
      event: i
    } = r;
    e.forEach((o) => {
      var s;
      return (s = o[l]) == null ? void 0 : s.call(o, i);
    });
  }, [e]), t];
}
const Lm = {
  draggable: `
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `
}, _m = {
  onDragStart(e) {
    let {
      active: t
    } = e;
    return "Picked up draggable item " + t.id + ".";
  },
  onDragOver(e) {
    let {
      active: t,
      over: n
    } = e;
    return n ? "Draggable item " + t.id + " was moved over droppable area " + n.id + "." : "Draggable item " + t.id + " is no longer over a droppable area.";
  },
  onDragEnd(e) {
    let {
      active: t,
      over: n
    } = e;
    return n ? "Draggable item " + t.id + " was dropped over droppable area " + n.id : "Draggable item " + t.id + " was dropped.";
  },
  onDragCancel(e) {
    let {
      active: t
    } = e;
    return "Dragging was cancelled. Draggable item " + t.id + " was dropped.";
  }
};
function Pm(e) {
  let {
    announcements: t = _m,
    container: n,
    hiddenTextDescribedById: r,
    screenReaderInstructions: l = Lm
  } = e;
  const {
    announce: i,
    announcement: o
  } = Dm(), s = ol("DndLiveRegion"), [a, u] = g.useState(!1);
  if (g.useEffect(() => {
    u(!0);
  }, []), Tm(g.useMemo(() => ({
    onDragStart(p) {
      let {
        active: v
      } = p;
      i(t.onDragStart({
        active: v
      }));
    },
    onDragMove(p) {
      let {
        active: v,
        over: y
      } = p;
      t.onDragMove && i(t.onDragMove({
        active: v,
        over: y
      }));
    },
    onDragOver(p) {
      let {
        active: v,
        over: y
      } = p;
      i(t.onDragOver({
        active: v,
        over: y
      }));
    },
    onDragEnd(p) {
      let {
        active: v,
        over: y
      } = p;
      i(t.onDragEnd({
        active: v,
        over: y
      }));
    },
    onDragCancel(p) {
      let {
        active: v,
        over: y
      } = p;
      i(t.onDragCancel({
        active: v,
        over: y
      }));
    }
  }), [i, t])), !a)
    return null;
  const m = K.createElement(K.Fragment, null, K.createElement(jm, {
    id: r,
    value: l.draggable
  }), K.createElement(Rm, {
    id: s,
    announcement: o
  }));
  return n ? An.createPortal(m, n) : m;
}
var se;
(function(e) {
  e.DragStart = "dragStart", e.DragMove = "dragMove", e.DragEnd = "dragEnd", e.DragCancel = "dragCancel", e.DragOver = "dragOver", e.RegisterDroppable = "registerDroppable", e.SetDroppableDisabled = "setDroppableDisabled", e.UnregisterDroppable = "unregisterDroppable";
})(se || (se = {}));
function mi() {
}
function Mu(e, t) {
  return g.useMemo(
    () => ({
      sensor: e,
      options: t ?? {}
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [e, t]
  );
}
function Om() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return g.useMemo(
    () => [...t].filter((r) => r != null),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [...t]
  );
}
const ot = /* @__PURE__ */ Object.freeze({
  x: 0,
  y: 0
});
function Mm(e, t) {
  return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
}
function Am(e, t) {
  const n = hi(e);
  if (!n)
    return "0 0";
  const r = {
    x: (n.x - t.left) / t.width * 100,
    y: (n.y - t.top) / t.height * 100
  };
  return r.x + "% " + r.y + "%";
}
function zm(e, t) {
  let {
    data: {
      value: n
    }
  } = e, {
    data: {
      value: r
    }
  } = t;
  return n - r;
}
function Fm(e, t) {
  let {
    data: {
      value: n
    }
  } = e, {
    data: {
      value: r
    }
  } = t;
  return r - n;
}
function Au(e) {
  let {
    left: t,
    top: n,
    height: r,
    width: l
  } = e;
  return [{
    x: t,
    y: n
  }, {
    x: t + l,
    y: n
  }, {
    x: t,
    y: n + r
  }, {
    x: t + l,
    y: n + r
  }];
}
function hf(e, t) {
  if (!e || e.length === 0)
    return null;
  const [n] = e;
  return n[t];
}
const mf = (e) => {
  let {
    collisionRect: t,
    droppableRects: n,
    droppableContainers: r
  } = e;
  const l = Au(t), i = [];
  for (const o of r) {
    const {
      id: s
    } = o, a = n.get(s);
    if (a) {
      const u = Au(a), m = l.reduce((v, y, k) => v + Mm(u[k], y), 0), p = Number((m / 4).toFixed(4));
      i.push({
        id: s,
        data: {
          droppableContainer: o,
          value: p
        }
      });
    }
  }
  return i.sort(zm);
};
function Um(e, t) {
  const n = Math.max(t.top, e.top), r = Math.max(t.left, e.left), l = Math.min(t.left + t.width, e.left + e.width), i = Math.min(t.top + t.height, e.top + e.height), o = l - r, s = i - n;
  if (r < l && n < i) {
    const a = t.width * t.height, u = e.width * e.height, m = o * s, p = m / (a + u - m);
    return Number(p.toFixed(4));
  }
  return 0;
}
const Bm = (e) => {
  let {
    collisionRect: t,
    droppableRects: n,
    droppableContainers: r
  } = e;
  const l = [];
  for (const i of r) {
    const {
      id: o
    } = i, s = n.get(o);
    if (s) {
      const a = Um(s, t);
      a > 0 && l.push({
        id: o,
        data: {
          droppableContainer: i,
          value: a
        }
      });
    }
  }
  return l.sort(Fm);
};
function $m(e, t, n) {
  return {
    ...e,
    scaleX: t && n ? t.width / n.width : 1,
    scaleY: t && n ? t.height / n.height : 1
  };
}
function vf(e, t) {
  return e && t ? {
    x: e.left - t.left,
    y: e.top - t.top
  } : ot;
}
function Hm(e) {
  return function(n) {
    for (var r = arguments.length, l = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
      l[i - 1] = arguments[i];
    return l.reduce((o, s) => ({
      ...o,
      top: o.top + e * s.y,
      bottom: o.bottom + e * s.y,
      left: o.left + e * s.x,
      right: o.right + e * s.x
    }), {
      ...n
    });
  };
}
const bm = /* @__PURE__ */ Hm(1);
function gf(e) {
  if (e.startsWith("matrix3d(")) {
    const t = e.slice(9, -1).split(/, /);
    return {
      x: +t[12],
      y: +t[13],
      scaleX: +t[0],
      scaleY: +t[5]
    };
  } else if (e.startsWith("matrix(")) {
    const t = e.slice(7, -1).split(/, /);
    return {
      x: +t[4],
      y: +t[5],
      scaleX: +t[0],
      scaleY: +t[3]
    };
  }
  return null;
}
function Vm(e, t, n) {
  const r = gf(t);
  if (!r)
    return e;
  const {
    scaleX: l,
    scaleY: i,
    x: o,
    y: s
  } = r, a = e.left - o - (1 - l) * parseFloat(n), u = e.top - s - (1 - i) * parseFloat(n.slice(n.indexOf(" ") + 1)), m = l ? e.width / l : e.width, p = i ? e.height / i : e.height;
  return {
    width: m,
    height: p,
    top: u,
    right: a + m,
    bottom: u + p,
    left: a
  };
}
const Wm = {
  ignoreTransform: !1
};
function nr(e, t) {
  t === void 0 && (t = Wm);
  let n = e.getBoundingClientRect();
  if (t.ignoreTransform) {
    const {
      transform: u,
      transformOrigin: m
    } = Re(e).getComputedStyle(e);
    u && (n = Vm(n, u, m));
  }
  const {
    top: r,
    left: l,
    width: i,
    height: o,
    bottom: s,
    right: a
  } = n;
  return {
    top: r,
    left: l,
    width: i,
    height: o,
    bottom: s,
    right: a
  };
}
function zu(e) {
  return nr(e, {
    ignoreTransform: !0
  });
}
function Qm(e) {
  const t = e.innerWidth, n = e.innerHeight;
  return {
    top: 0,
    left: 0,
    right: t,
    bottom: n,
    width: t,
    height: n
  };
}
function Km(e, t) {
  return t === void 0 && (t = Re(e).getComputedStyle(e)), t.position === "fixed";
}
function Xm(e, t) {
  t === void 0 && (t = Re(e).getComputedStyle(e));
  const n = /(auto|scroll|overlay)/;
  return ["overflow", "overflowX", "overflowY"].some((l) => {
    const i = t[l];
    return typeof i == "string" ? n.test(i) : !1;
  });
}
function zi(e, t) {
  const n = [];
  function r(l) {
    if (t != null && n.length >= t || !l)
      return n;
    if (da(l) && l.scrollingElement != null && !n.includes(l.scrollingElement))
      return n.push(l.scrollingElement), n;
    if (!ll(l) || df(l) || n.includes(l))
      return n;
    const i = Re(e).getComputedStyle(l);
    return l !== e && Xm(l, i) && n.push(l), Km(l, i) ? n : r(l.parentNode);
  }
  return e ? r(e) : n;
}
function yf(e) {
  const [t] = zi(e, 1);
  return t ?? null;
}
function go(e) {
  return !Oi || !e ? null : er(e) ? e : ca(e) ? da(e) || e === tr(e).scrollingElement ? window : ll(e) ? e : null : null;
}
function wf(e) {
  return er(e) ? e.scrollX : e.scrollLeft;
}
function xf(e) {
  return er(e) ? e.scrollY : e.scrollTop;
}
function ps(e) {
  return {
    x: wf(e),
    y: xf(e)
  };
}
var ce;
(function(e) {
  e[e.Forward = 1] = "Forward", e[e.Backward = -1] = "Backward";
})(ce || (ce = {}));
function Sf(e) {
  return !Oi || !e ? !1 : e === document.scrollingElement;
}
function kf(e) {
  const t = {
    x: 0,
    y: 0
  }, n = Sf(e) ? {
    height: window.innerHeight,
    width: window.innerWidth
  } : {
    height: e.clientHeight,
    width: e.clientWidth
  }, r = {
    x: e.scrollWidth - n.width,
    y: e.scrollHeight - n.height
  }, l = e.scrollTop <= t.y, i = e.scrollLeft <= t.x, o = e.scrollTop >= r.y, s = e.scrollLeft >= r.x;
  return {
    isTop: l,
    isLeft: i,
    isBottom: o,
    isRight: s,
    maxScroll: r,
    minScroll: t
  };
}
const Gm = {
  x: 0.2,
  y: 0.2
};
function Ym(e, t, n, r, l) {
  let {
    top: i,
    left: o,
    right: s,
    bottom: a
  } = n;
  r === void 0 && (r = 10), l === void 0 && (l = Gm);
  const {
    isTop: u,
    isBottom: m,
    isLeft: p,
    isRight: v
  } = kf(e), y = {
    x: 0,
    y: 0
  }, k = {
    x: 0,
    y: 0
  }, x = {
    height: t.height * l.y,
    width: t.width * l.x
  };
  return !u && i <= t.top + x.height ? (y.y = ce.Backward, k.y = r * Math.abs((t.top + x.height - i) / x.height)) : !m && a >= t.bottom - x.height && (y.y = ce.Forward, k.y = r * Math.abs((t.bottom - x.height - a) / x.height)), !v && s >= t.right - x.width ? (y.x = ce.Forward, k.x = r * Math.abs((t.right - x.width - s) / x.width)) : !p && o <= t.left + x.width && (y.x = ce.Backward, k.x = r * Math.abs((t.left + x.width - o) / x.width)), {
    direction: y,
    speed: k
  };
}
function Jm(e) {
  if (e === document.scrollingElement) {
    const {
      innerWidth: i,
      innerHeight: o
    } = window;
    return {
      top: 0,
      left: 0,
      right: i,
      bottom: o,
      width: i,
      height: o
    };
  }
  const {
    top: t,
    left: n,
    right: r,
    bottom: l
  } = e.getBoundingClientRect();
  return {
    top: t,
    left: n,
    right: r,
    bottom: l,
    width: e.clientWidth,
    height: e.clientHeight
  };
}
function Cf(e) {
  return e.reduce((t, n) => bn(t, ps(n)), ot);
}
function Zm(e) {
  return e.reduce((t, n) => t + wf(n), 0);
}
function qm(e) {
  return e.reduce((t, n) => t + xf(n), 0);
}
function Ef(e, t) {
  if (t === void 0 && (t = nr), !e)
    return;
  const {
    top: n,
    left: r,
    bottom: l,
    right: i
  } = t(e);
  yf(e) && (l <= 0 || i <= 0 || n >= window.innerHeight || r >= window.innerWidth) && e.scrollIntoView({
    block: "center",
    inline: "center"
  });
}
const ev = [["x", ["left", "right"], Zm], ["y", ["top", "bottom"], qm]];
class fa {
  constructor(t, n) {
    this.rect = void 0, this.width = void 0, this.height = void 0, this.top = void 0, this.bottom = void 0, this.right = void 0, this.left = void 0;
    const r = zi(n), l = Cf(r);
    this.rect = {
      ...t
    }, this.width = t.width, this.height = t.height;
    for (const [i, o, s] of ev)
      for (const a of o)
        Object.defineProperty(this, a, {
          get: () => {
            const u = s(r), m = l[i] - u;
            return this.rect[a] + m;
          },
          enumerable: !0
        });
    Object.defineProperty(this, "rect", {
      enumerable: !1
    });
  }
}
class Ir {
  constructor(t) {
    this.target = void 0, this.listeners = [], this.removeAll = () => {
      this.listeners.forEach((n) => {
        var r;
        return (r = this.target) == null ? void 0 : r.removeEventListener(...n);
      });
    }, this.target = t;
  }
  add(t, n, r) {
    var l;
    (l = this.target) == null || l.addEventListener(t, n, r), this.listeners.push([t, n, r]);
  }
}
function tv(e) {
  const {
    EventTarget: t
  } = Re(e);
  return e instanceof t ? e : tr(e);
}
function yo(e, t) {
  const n = Math.abs(e.x), r = Math.abs(e.y);
  return typeof t == "number" ? Math.sqrt(n ** 2 + r ** 2) > t : "x" in t && "y" in t ? n > t.x && r > t.y : "x" in t ? n > t.x : "y" in t ? r > t.y : !1;
}
var Ve;
(function(e) {
  e.Click = "click", e.DragStart = "dragstart", e.Keydown = "keydown", e.ContextMenu = "contextmenu", e.Resize = "resize", e.SelectionChange = "selectionchange", e.VisibilityChange = "visibilitychange";
})(Ve || (Ve = {}));
function Fu(e) {
  e.preventDefault();
}
function nv(e) {
  e.stopPropagation();
}
var U;
(function(e) {
  e.Space = "Space", e.Down = "ArrowDown", e.Right = "ArrowRight", e.Left = "ArrowLeft", e.Up = "ArrowUp", e.Esc = "Escape", e.Enter = "Enter", e.Tab = "Tab";
})(U || (U = {}));
const Nf = {
  start: [U.Space, U.Enter],
  cancel: [U.Esc],
  end: [U.Space, U.Enter, U.Tab]
}, rv = (e, t) => {
  let {
    currentCoordinates: n
  } = t;
  switch (e.code) {
    case U.Right:
      return {
        ...n,
        x: n.x + 25
      };
    case U.Left:
      return {
        ...n,
        x: n.x - 25
      };
    case U.Down:
      return {
        ...n,
        y: n.y + 25
      };
    case U.Up:
      return {
        ...n,
        y: n.y - 25
      };
  }
};
class pa {
  constructor(t) {
    this.props = void 0, this.autoScrollEnabled = !1, this.referenceCoordinates = void 0, this.listeners = void 0, this.windowListeners = void 0, this.props = t;
    const {
      event: {
        target: n
      }
    } = t;
    this.props = t, this.listeners = new Ir(tr(n)), this.windowListeners = new Ir(Re(n)), this.handleKeyDown = this.handleKeyDown.bind(this), this.handleCancel = this.handleCancel.bind(this), this.attach();
  }
  attach() {
    this.handleStart(), this.windowListeners.add(Ve.Resize, this.handleCancel), this.windowListeners.add(Ve.VisibilityChange, this.handleCancel), setTimeout(() => this.listeners.add(Ve.Keydown, this.handleKeyDown));
  }
  handleStart() {
    const {
      activeNode: t,
      onStart: n
    } = this.props, r = t.node.current;
    r && Ef(r), n(ot);
  }
  handleKeyDown(t) {
    if (Ai(t)) {
      const {
        active: n,
        context: r,
        options: l
      } = this.props, {
        keyboardCodes: i = Nf,
        coordinateGetter: o = rv,
        scrollBehavior: s = "smooth"
      } = l, {
        code: a
      } = t;
      if (i.end.includes(a)) {
        this.handleEnd(t);
        return;
      }
      if (i.cancel.includes(a)) {
        this.handleCancel(t);
        return;
      }
      const {
        collisionRect: u
      } = r.current, m = u ? {
        x: u.left,
        y: u.top
      } : ot;
      this.referenceCoordinates || (this.referenceCoordinates = m);
      const p = o(t, {
        active: n,
        context: r.current,
        currentCoordinates: m
      });
      if (p) {
        const v = Jr(p, m), y = {
          x: 0,
          y: 0
        }, {
          scrollableAncestors: k
        } = r.current;
        for (const x of k) {
          const D = t.code, {
            isTop: f,
            isRight: d,
            isLeft: h,
            isBottom: w,
            maxScroll: E,
            minScroll: N
          } = kf(x), S = Jm(x), C = {
            x: Math.min(D === U.Right ? S.right - S.width / 2 : S.right, Math.max(D === U.Right ? S.left : S.left + S.width / 2, p.x)),
            y: Math.min(D === U.Down ? S.bottom - S.height / 2 : S.bottom, Math.max(D === U.Down ? S.top : S.top + S.height / 2, p.y))
          }, R = D === U.Right && !d || D === U.Left && !h, L = D === U.Down && !w || D === U.Up && !f;
          if (R && C.x !== p.x) {
            const M = x.scrollLeft + v.x, ne = D === U.Right && M <= E.x || D === U.Left && M >= N.x;
            if (ne && !v.y) {
              x.scrollTo({
                left: M,
                behavior: s
              });
              return;
            }
            ne ? y.x = x.scrollLeft - M : y.x = D === U.Right ? x.scrollLeft - E.x : x.scrollLeft - N.x, y.x && x.scrollBy({
              left: -y.x,
              behavior: s
            });
            break;
          } else if (L && C.y !== p.y) {
            const M = x.scrollTop + v.y, ne = D === U.Down && M <= E.y || D === U.Up && M >= N.y;
            if (ne && !v.x) {
              x.scrollTo({
                top: M,
                behavior: s
              });
              return;
            }
            ne ? y.y = x.scrollTop - M : y.y = D === U.Down ? x.scrollTop - E.y : x.scrollTop - N.y, y.y && x.scrollBy({
              top: -y.y,
              behavior: s
            });
            break;
          }
        }
        this.handleMove(t, bn(Jr(p, this.referenceCoordinates), y));
      }
    }
  }
  handleMove(t, n) {
    const {
      onMove: r
    } = this.props;
    t.preventDefault(), r(n);
  }
  handleEnd(t) {
    const {
      onEnd: n
    } = this.props;
    t.preventDefault(), this.detach(), n();
  }
  handleCancel(t) {
    const {
      onCancel: n
    } = this.props;
    t.preventDefault(), this.detach(), n();
  }
  detach() {
    this.listeners.removeAll(), this.windowListeners.removeAll();
  }
}
pa.activators = [{
  eventName: "onKeyDown",
  handler: (e, t, n) => {
    let {
      keyboardCodes: r = Nf,
      onActivation: l
    } = t, {
      active: i
    } = n;
    const {
      code: o
    } = e.nativeEvent;
    if (r.start.includes(o)) {
      const s = i.activatorNode.current;
      return s && e.target !== s ? !1 : (e.preventDefault(), l == null || l({
        event: e.nativeEvent
      }), !0);
    }
    return !1;
  }
}];
function Uu(e) {
  return !!(e && "distance" in e);
}
function Bu(e) {
  return !!(e && "delay" in e);
}
class ha {
  constructor(t, n, r) {
    var l;
    r === void 0 && (r = tv(t.event.target)), this.props = void 0, this.events = void 0, this.autoScrollEnabled = !0, this.document = void 0, this.activated = !1, this.initialCoordinates = void 0, this.timeoutId = null, this.listeners = void 0, this.documentListeners = void 0, this.windowListeners = void 0, this.props = t, this.events = n;
    const {
      event: i
    } = t, {
      target: o
    } = i;
    this.props = t, this.events = n, this.document = tr(o), this.documentListeners = new Ir(this.document), this.listeners = new Ir(r), this.windowListeners = new Ir(Re(o)), this.initialCoordinates = (l = hi(i)) != null ? l : ot, this.handleStart = this.handleStart.bind(this), this.handleMove = this.handleMove.bind(this), this.handleEnd = this.handleEnd.bind(this), this.handleCancel = this.handleCancel.bind(this), this.handleKeydown = this.handleKeydown.bind(this), this.removeTextSelection = this.removeTextSelection.bind(this), this.attach();
  }
  attach() {
    const {
      events: t,
      props: {
        options: {
          activationConstraint: n,
          bypassActivationConstraint: r
        }
      }
    } = this;
    if (this.listeners.add(t.move.name, this.handleMove, {
      passive: !1
    }), this.listeners.add(t.end.name, this.handleEnd), t.cancel && this.listeners.add(t.cancel.name, this.handleCancel), this.windowListeners.add(Ve.Resize, this.handleCancel), this.windowListeners.add(Ve.DragStart, Fu), this.windowListeners.add(Ve.VisibilityChange, this.handleCancel), this.windowListeners.add(Ve.ContextMenu, Fu), this.documentListeners.add(Ve.Keydown, this.handleKeydown), n) {
      if (r != null && r({
        event: this.props.event,
        activeNode: this.props.activeNode,
        options: this.props.options
      }))
        return this.handleStart();
      if (Bu(n)) {
        this.timeoutId = setTimeout(this.handleStart, n.delay), this.handlePending(n);
        return;
      }
      if (Uu(n)) {
        this.handlePending(n);
        return;
      }
    }
    this.handleStart();
  }
  detach() {
    this.listeners.removeAll(), this.windowListeners.removeAll(), setTimeout(this.documentListeners.removeAll, 50), this.timeoutId !== null && (clearTimeout(this.timeoutId), this.timeoutId = null);
  }
  handlePending(t, n) {
    const {
      active: r,
      onPending: l
    } = this.props;
    l(r, t, this.initialCoordinates, n);
  }
  handleStart() {
    const {
      initialCoordinates: t
    } = this, {
      onStart: n
    } = this.props;
    t && (this.activated = !0, this.documentListeners.add(Ve.Click, nv, {
      capture: !0
    }), this.removeTextSelection(), this.documentListeners.add(Ve.SelectionChange, this.removeTextSelection), n(t));
  }
  handleMove(t) {
    var n;
    const {
      activated: r,
      initialCoordinates: l,
      props: i
    } = this, {
      onMove: o,
      options: {
        activationConstraint: s
      }
    } = i;
    if (!l)
      return;
    const a = (n = hi(t)) != null ? n : ot, u = Jr(l, a);
    if (!r && s) {
      if (Uu(s)) {
        if (s.tolerance != null && yo(u, s.tolerance))
          return this.handleCancel();
        if (yo(u, s.distance))
          return this.handleStart();
      }
      if (Bu(s) && yo(u, s.tolerance))
        return this.handleCancel();
      this.handlePending(s, u);
      return;
    }
    t.cancelable && t.preventDefault(), o(a);
  }
  handleEnd() {
    const {
      onAbort: t,
      onEnd: n
    } = this.props;
    this.detach(), this.activated || t(this.props.active), n();
  }
  handleCancel() {
    const {
      onAbort: t,
      onCancel: n
    } = this.props;
    this.detach(), this.activated || t(this.props.active), n();
  }
  handleKeydown(t) {
    t.code === U.Esc && this.handleCancel();
  }
  removeTextSelection() {
    var t;
    (t = this.document.getSelection()) == null || t.removeAllRanges();
  }
}
const lv = {
  cancel: {
    name: "pointercancel"
  },
  move: {
    name: "pointermove"
  },
  end: {
    name: "pointerup"
  }
};
class ma extends ha {
  constructor(t) {
    const {
      event: n
    } = t, r = tr(n.target);
    super(t, lv, r);
  }
}
ma.activators = [{
  eventName: "onPointerDown",
  handler: (e, t) => {
    let {
      nativeEvent: n
    } = e, {
      onActivation: r
    } = t;
    return !n.isPrimary || n.button !== 0 ? !1 : (r == null || r({
      event: n
    }), !0);
  }
}];
const iv = {
  move: {
    name: "mousemove"
  },
  end: {
    name: "mouseup"
  }
};
var hs;
(function(e) {
  e[e.RightClick = 2] = "RightClick";
})(hs || (hs = {}));
class ov extends ha {
  constructor(t) {
    super(t, iv, tr(t.event.target));
  }
}
ov.activators = [{
  eventName: "onMouseDown",
  handler: (e, t) => {
    let {
      nativeEvent: n
    } = e, {
      onActivation: r
    } = t;
    return n.button === hs.RightClick ? !1 : (r == null || r({
      event: n
    }), !0);
  }
}];
const wo = {
  cancel: {
    name: "touchcancel"
  },
  move: {
    name: "touchmove"
  },
  end: {
    name: "touchend"
  }
};
class sv extends ha {
  constructor(t) {
    super(t, wo);
  }
  static setup() {
    return window.addEventListener(wo.move.name, t, {
      capture: !1,
      passive: !1
    }), function() {
      window.removeEventListener(wo.move.name, t);
    };
    function t() {
    }
  }
}
sv.activators = [{
  eventName: "onTouchStart",
  handler: (e, t) => {
    let {
      nativeEvent: n
    } = e, {
      onActivation: r
    } = t;
    const {
      touches: l
    } = n;
    return l.length > 1 ? !1 : (r == null || r({
      event: n
    }), !0);
  }
}];
var Lr;
(function(e) {
  e[e.Pointer = 0] = "Pointer", e[e.DraggableRect = 1] = "DraggableRect";
})(Lr || (Lr = {}));
var vi;
(function(e) {
  e[e.TreeOrder = 0] = "TreeOrder", e[e.ReversedTreeOrder = 1] = "ReversedTreeOrder";
})(vi || (vi = {}));
function av(e) {
  let {
    acceleration: t,
    activator: n = Lr.Pointer,
    canScroll: r,
    draggingRect: l,
    enabled: i,
    interval: o = 5,
    order: s = vi.TreeOrder,
    pointerCoordinates: a,
    scrollableAncestors: u,
    scrollableAncestorRects: m,
    delta: p,
    threshold: v
  } = e;
  const y = cv({
    delta: p,
    disabled: !i
  }), [k, x] = Sm(), D = g.useRef({
    x: 0,
    y: 0
  }), f = g.useRef({
    x: 0,
    y: 0
  }), d = g.useMemo(() => {
    switch (n) {
      case Lr.Pointer:
        return a ? {
          top: a.y,
          bottom: a.y,
          left: a.x,
          right: a.x
        } : null;
      case Lr.DraggableRect:
        return l;
    }
  }, [n, l, a]), h = g.useRef(null), w = g.useCallback(() => {
    const N = h.current;
    if (!N)
      return;
    const S = D.current.x * f.current.x, C = D.current.y * f.current.y;
    N.scrollBy(S, C);
  }, []), E = g.useMemo(() => s === vi.TreeOrder ? [...u].reverse() : u, [s, u]);
  g.useEffect(
    () => {
      if (!i || !u.length || !d) {
        x();
        return;
      }
      for (const N of E) {
        if ((r == null ? void 0 : r(N)) === !1)
          continue;
        const S = u.indexOf(N), C = m[S];
        if (!C)
          continue;
        const {
          direction: R,
          speed: L
        } = Ym(N, C, d, t, v);
        for (const M of ["x", "y"])
          y[M][R[M]] || (L[M] = 0, R[M] = 0);
        if (L.x > 0 || L.y > 0) {
          x(), h.current = N, k(w, o), D.current = L, f.current = R;
          return;
        }
      }
      D.current = {
        x: 0,
        y: 0
      }, f.current = {
        x: 0,
        y: 0
      }, x();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      t,
      w,
      r,
      x,
      i,
      o,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(d),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(y),
      k,
      u,
      E,
      m,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(v)
    ]
  );
}
const uv = {
  x: {
    [ce.Backward]: !1,
    [ce.Forward]: !1
  },
  y: {
    [ce.Backward]: !1,
    [ce.Forward]: !1
  }
};
function cv(e) {
  let {
    delta: t,
    disabled: n
  } = e;
  const r = pi(t);
  return il((l) => {
    if (n || !r || !l)
      return uv;
    const i = {
      x: Math.sign(t.x - r.x),
      y: Math.sign(t.y - r.y)
    };
    return {
      x: {
        [ce.Backward]: l.x[ce.Backward] || i.x === -1,
        [ce.Forward]: l.x[ce.Forward] || i.x === 1
      },
      y: {
        [ce.Backward]: l.y[ce.Backward] || i.y === -1,
        [ce.Forward]: l.y[ce.Forward] || i.y === 1
      }
    };
  }, [n, t, r]);
}
function dv(e, t) {
  const n = t != null ? e.get(t) : void 0, r = n ? n.node.current : null;
  return il((l) => {
    var i;
    return t == null ? null : (i = r ?? l) != null ? i : null;
  }, [r, t]);
}
function fv(e, t) {
  return g.useMemo(() => e.reduce((n, r) => {
    const {
      sensor: l
    } = r, i = l.activators.map((o) => ({
      eventName: o.eventName,
      handler: t(o.handler, r)
    }));
    return [...n, ...i];
  }, []), [e, t]);
}
var Zr;
(function(e) {
  e[e.Always = 0] = "Always", e[e.BeforeDragging = 1] = "BeforeDragging", e[e.WhileDragging = 2] = "WhileDragging";
})(Zr || (Zr = {}));
var ms;
(function(e) {
  e.Optimized = "optimized";
})(ms || (ms = {}));
const $u = /* @__PURE__ */ new Map();
function pv(e, t) {
  let {
    dragging: n,
    dependencies: r,
    config: l
  } = t;
  const [i, o] = g.useState(null), {
    frequency: s,
    measure: a,
    strategy: u
  } = l, m = g.useRef(e), p = D(), v = Yr(p), y = g.useCallback(function(f) {
    f === void 0 && (f = []), !v.current && o((d) => d === null ? f : d.concat(f.filter((h) => !d.includes(h))));
  }, [v]), k = g.useRef(null), x = il((f) => {
    if (p && !n)
      return $u;
    if (!f || f === $u || m.current !== e || i != null) {
      const d = /* @__PURE__ */ new Map();
      for (let h of e) {
        if (!h)
          continue;
        if (i && i.length > 0 && !i.includes(h.id) && h.rect.current) {
          d.set(h.id, h.rect.current);
          continue;
        }
        const w = h.node.current, E = w ? new fa(a(w), w) : null;
        h.rect.current = E, E && d.set(h.id, E);
      }
      return d;
    }
    return f;
  }, [e, i, n, p, a]);
  return g.useEffect(() => {
    m.current = e;
  }, [e]), g.useEffect(
    () => {
      p || y();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [n, p]
  ), g.useEffect(
    () => {
      i && i.length > 0 && o(null);
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [JSON.stringify(i)]
  ), g.useEffect(
    () => {
      p || typeof s != "number" || k.current !== null || (k.current = setTimeout(() => {
        y(), k.current = null;
      }, s));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [s, p, y, ...r]
  ), {
    droppableRects: x,
    measureDroppableContainers: y,
    measuringScheduled: i != null
  };
  function D() {
    switch (u) {
      case Zr.Always:
        return !1;
      case Zr.BeforeDragging:
        return n;
      default:
        return !n;
    }
  }
}
function va(e, t) {
  return il((n) => e ? n || (typeof t == "function" ? t(e) : e) : null, [t, e]);
}
function hv(e, t) {
  return va(e, t);
}
function mv(e) {
  let {
    callback: t,
    disabled: n
  } = e;
  const r = Mi(t), l = g.useMemo(() => {
    if (n || typeof window > "u" || typeof window.MutationObserver > "u")
      return;
    const {
      MutationObserver: i
    } = window;
    return new i(r);
  }, [r, n]);
  return g.useEffect(() => () => l == null ? void 0 : l.disconnect(), [l]), l;
}
function Fi(e) {
  let {
    callback: t,
    disabled: n
  } = e;
  const r = Mi(t), l = g.useMemo(
    () => {
      if (n || typeof window > "u" || typeof window.ResizeObserver > "u")
        return;
      const {
        ResizeObserver: i
      } = window;
      return new i(r);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [n]
  );
  return g.useEffect(() => () => l == null ? void 0 : l.disconnect(), [l]), l;
}
function vv(e) {
  return new fa(nr(e), e);
}
function Hu(e, t, n) {
  t === void 0 && (t = vv);
  const [r, l] = g.useState(null);
  function i() {
    l((a) => {
      if (!e)
        return null;
      if (e.isConnected === !1) {
        var u;
        return (u = a ?? n) != null ? u : null;
      }
      const m = t(e);
      return JSON.stringify(a) === JSON.stringify(m) ? a : m;
    });
  }
  const o = mv({
    callback(a) {
      if (e)
        for (const u of a) {
          const {
            type: m,
            target: p
          } = u;
          if (m === "childList" && p instanceof HTMLElement && p.contains(e)) {
            i();
            break;
          }
        }
    }
  }), s = Fi({
    callback: i
  });
  return it(() => {
    i(), e ? (s == null || s.observe(e), o == null || o.observe(document.body, {
      childList: !0,
      subtree: !0
    })) : (s == null || s.disconnect(), o == null || o.disconnect());
  }, [e]), r;
}
function gv(e) {
  const t = va(e);
  return vf(e, t);
}
const bu = [];
function yv(e) {
  const t = g.useRef(e), n = il((r) => e ? r && r !== bu && e && t.current && e.parentNode === t.current.parentNode ? r : zi(e) : bu, [e]);
  return g.useEffect(() => {
    t.current = e;
  }, [e]), n;
}
function wv(e) {
  const [t, n] = g.useState(null), r = g.useRef(e), l = g.useCallback((i) => {
    const o = go(i.target);
    o && n((s) => s ? (s.set(o, ps(o)), new Map(s)) : null);
  }, []);
  return g.useEffect(() => {
    const i = r.current;
    if (e !== i) {
      o(i);
      const s = e.map((a) => {
        const u = go(a);
        return u ? (u.addEventListener("scroll", l, {
          passive: !0
        }), [u, ps(u)]) : null;
      }).filter((a) => a != null);
      n(s.length ? new Map(s) : null), r.current = e;
    }
    return () => {
      o(e), o(i);
    };
    function o(s) {
      s.forEach((a) => {
        const u = go(a);
        u == null || u.removeEventListener("scroll", l);
      });
    }
  }, [l, e]), g.useMemo(() => e.length ? t ? Array.from(t.values()).reduce((i, o) => bn(i, o), ot) : Cf(e) : ot, [e, t]);
}
function Vu(e, t) {
  t === void 0 && (t = []);
  const n = g.useRef(null);
  return g.useEffect(
    () => {
      n.current = null;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    t
  ), g.useEffect(() => {
    const r = e !== ot;
    r && !n.current && (n.current = e), !r && n.current && (n.current = null);
  }, [e]), n.current ? Jr(e, n.current) : ot;
}
function xv(e) {
  g.useEffect(
    () => {
      if (!Oi)
        return;
      const t = e.map((n) => {
        let {
          sensor: r
        } = n;
        return r.setup == null ? void 0 : r.setup();
      });
      return () => {
        for (const n of t)
          n == null || n();
      };
    },
    // TO-DO: Sensors length could theoretically change which would not be a valid dependency
    // eslint-disable-next-line react-hooks/exhaustive-deps
    e.map((t) => {
      let {
        sensor: n
      } = t;
      return n;
    })
  );
}
function Sv(e, t) {
  return g.useMemo(() => e.reduce((n, r) => {
    let {
      eventName: l,
      handler: i
    } = r;
    return n[l] = (o) => {
      i(o, t);
    }, n;
  }, {}), [e, t]);
}
function jf(e) {
  return g.useMemo(() => e ? Qm(e) : null, [e]);
}
const Wu = [];
function kv(e, t) {
  t === void 0 && (t = nr);
  const [n] = e, r = jf(n ? Re(n) : null), [l, i] = g.useState(Wu);
  function o() {
    i(() => e.length ? e.map((a) => Sf(a) ? r : new fa(t(a), a)) : Wu);
  }
  const s = Fi({
    callback: o
  });
  return it(() => {
    s == null || s.disconnect(), o(), e.forEach((a) => s == null ? void 0 : s.observe(a));
  }, [e]), l;
}
function Rf(e) {
  if (!e)
    return null;
  if (e.children.length > 1)
    return e;
  const t = e.children[0];
  return ll(t) ? t : e;
}
function Cv(e) {
  let {
    measure: t
  } = e;
  const [n, r] = g.useState(null), l = g.useCallback((u) => {
    for (const {
      target: m
    } of u)
      if (ll(m)) {
        r((p) => {
          const v = t(m);
          return p ? {
            ...p,
            width: v.width,
            height: v.height
          } : v;
        });
        break;
      }
  }, [t]), i = Fi({
    callback: l
  }), o = g.useCallback((u) => {
    const m = Rf(u);
    i == null || i.disconnect(), m && (i == null || i.observe(m)), r(m ? t(m) : null);
  }, [t, i]), [s, a] = fi(o);
  return g.useMemo(() => ({
    nodeRef: s,
    rect: n,
    setRef: a
  }), [n, s, a]);
}
const Ev = [{
  sensor: ma,
  options: {}
}, {
  sensor: pa,
  options: {}
}], Nv = {
  current: {}
}, $l = {
  draggable: {
    measure: zu
  },
  droppable: {
    measure: zu,
    strategy: Zr.WhileDragging,
    frequency: ms.Optimized
  },
  dragOverlay: {
    measure: nr
  }
};
class _r extends Map {
  get(t) {
    var n;
    return t != null && (n = super.get(t)) != null ? n : void 0;
  }
  toArray() {
    return Array.from(this.values());
  }
  getEnabled() {
    return this.toArray().filter((t) => {
      let {
        disabled: n
      } = t;
      return !n;
    });
  }
  getNodeFor(t) {
    var n, r;
    return (n = (r = this.get(t)) == null ? void 0 : r.node.current) != null ? n : void 0;
  }
}
const jv = {
  activatorEvent: null,
  active: null,
  activeNode: null,
  activeNodeRect: null,
  collisions: null,
  containerNodeRect: null,
  draggableNodes: /* @__PURE__ */ new Map(),
  droppableRects: /* @__PURE__ */ new Map(),
  droppableContainers: /* @__PURE__ */ new _r(),
  over: null,
  dragOverlay: {
    nodeRef: {
      current: null
    },
    rect: null,
    setRef: mi
  },
  scrollableAncestors: [],
  scrollableAncestorRects: [],
  measuringConfiguration: $l,
  measureDroppableContainers: mi,
  windowRect: null,
  measuringScheduled: !1
}, Df = {
  activatorEvent: null,
  activators: [],
  active: null,
  activeNodeRect: null,
  ariaDescribedById: {
    draggable: ""
  },
  dispatch: mi,
  draggableNodes: /* @__PURE__ */ new Map(),
  over: null,
  measureDroppableContainers: mi
}, sl = /* @__PURE__ */ g.createContext(Df), Tf = /* @__PURE__ */ g.createContext(jv);
function Rv() {
  return {
    draggable: {
      active: null,
      initialCoordinates: {
        x: 0,
        y: 0
      },
      nodes: /* @__PURE__ */ new Map(),
      translate: {
        x: 0,
        y: 0
      }
    },
    droppable: {
      containers: new _r()
    }
  };
}
function Dv(e, t) {
  switch (t.type) {
    case se.DragStart:
      return {
        ...e,
        draggable: {
          ...e.draggable,
          initialCoordinates: t.initialCoordinates,
          active: t.active
        }
      };
    case se.DragMove:
      return e.draggable.active == null ? e : {
        ...e,
        draggable: {
          ...e.draggable,
          translate: {
            x: t.coordinates.x - e.draggable.initialCoordinates.x,
            y: t.coordinates.y - e.draggable.initialCoordinates.y
          }
        }
      };
    case se.DragEnd:
    case se.DragCancel:
      return {
        ...e,
        draggable: {
          ...e.draggable,
          active: null,
          initialCoordinates: {
            x: 0,
            y: 0
          },
          translate: {
            x: 0,
            y: 0
          }
        }
      };
    case se.RegisterDroppable: {
      const {
        element: n
      } = t, {
        id: r
      } = n, l = new _r(e.droppable.containers);
      return l.set(r, n), {
        ...e,
        droppable: {
          ...e.droppable,
          containers: l
        }
      };
    }
    case se.SetDroppableDisabled: {
      const {
        id: n,
        key: r,
        disabled: l
      } = t, i = e.droppable.containers.get(n);
      if (!i || r !== i.key)
        return e;
      const o = new _r(e.droppable.containers);
      return o.set(n, {
        ...i,
        disabled: l
      }), {
        ...e,
        droppable: {
          ...e.droppable,
          containers: o
        }
      };
    }
    case se.UnregisterDroppable: {
      const {
        id: n,
        key: r
      } = t, l = e.droppable.containers.get(n);
      if (!l || r !== l.key)
        return e;
      const i = new _r(e.droppable.containers);
      return i.delete(n), {
        ...e,
        droppable: {
          ...e.droppable,
          containers: i
        }
      };
    }
    default:
      return e;
  }
}
function Tv(e) {
  let {
    disabled: t
  } = e;
  const {
    active: n,
    activatorEvent: r,
    draggableNodes: l
  } = g.useContext(sl), i = pi(r), o = pi(n == null ? void 0 : n.id);
  return g.useEffect(() => {
    if (!t && !r && i && o != null) {
      if (!Ai(i) || document.activeElement === i.target)
        return;
      const s = l.get(o);
      if (!s)
        return;
      const {
        activatorNode: a,
        node: u
      } = s;
      if (!a.current && !u.current)
        return;
      requestAnimationFrame(() => {
        for (const m of [a.current, u.current]) {
          if (!m)
            continue;
          const p = Em(m);
          if (p) {
            p.focus();
            break;
          }
        }
      });
    }
  }, [r, t, l, o, i]), null;
}
function If(e, t) {
  let {
    transform: n,
    ...r
  } = t;
  return e != null && e.length ? e.reduce((l, i) => i({
    transform: l,
    ...r
  }), n) : n;
}
function Iv(e) {
  return g.useMemo(
    () => ({
      draggable: {
        ...$l.draggable,
        ...e == null ? void 0 : e.draggable
      },
      droppable: {
        ...$l.droppable,
        ...e == null ? void 0 : e.droppable
      },
      dragOverlay: {
        ...$l.dragOverlay,
        ...e == null ? void 0 : e.dragOverlay
      }
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [e == null ? void 0 : e.draggable, e == null ? void 0 : e.droppable, e == null ? void 0 : e.dragOverlay]
  );
}
function Lv(e) {
  let {
    activeNode: t,
    measure: n,
    initialRect: r,
    config: l = !0
  } = e;
  const i = g.useRef(!1), {
    x: o,
    y: s
  } = typeof l == "boolean" ? {
    x: l,
    y: l
  } : l;
  it(() => {
    if (!o && !s || !t) {
      i.current = !1;
      return;
    }
    if (i.current || !r)
      return;
    const u = t == null ? void 0 : t.node.current;
    if (!u || u.isConnected === !1)
      return;
    const m = n(u), p = vf(m, r);
    if (o || (p.x = 0), s || (p.y = 0), i.current = !0, Math.abs(p.x) > 0 || Math.abs(p.y) > 0) {
      const v = yf(u);
      v && v.scrollBy({
        top: p.y,
        left: p.x
      });
    }
  }, [t, o, s, r, n]);
}
const Ui = /* @__PURE__ */ g.createContext({
  ...ot,
  scaleX: 1,
  scaleY: 1
});
var zt;
(function(e) {
  e[e.Uninitialized = 0] = "Uninitialized", e[e.Initializing = 1] = "Initializing", e[e.Initialized = 2] = "Initialized";
})(zt || (zt = {}));
const _v = /* @__PURE__ */ g.memo(function(t) {
  var n, r, l, i;
  let {
    id: o,
    accessibility: s,
    autoScroll: a = !0,
    children: u,
    sensors: m = Ev,
    collisionDetection: p = Bm,
    measuring: v,
    modifiers: y,
    ...k
  } = t;
  const x = g.useReducer(Dv, void 0, Rv), [D, f] = x, [d, h] = Im(), [w, E] = g.useState(zt.Uninitialized), N = w === zt.Initialized, {
    draggable: {
      active: S,
      nodes: C,
      translate: R
    },
    droppable: {
      containers: L
    }
  } = D, M = S != null ? C.get(S) : null, ne = g.useRef({
    initial: null,
    translated: null
  }), re = g.useMemo(() => {
    var ge;
    return S != null ? {
      id: S,
      // It's possible for the active node to unmount while dragging
      data: (ge = M == null ? void 0 : M.data) != null ? ge : Nv,
      rect: ne
    } : null;
  }, [S, M]), ke = g.useRef(null), [vt, st] = g.useState(null), [q, I] = g.useState(null), P = Yr(k, Object.values(k)), O = ol("DndDescribedBy", o), $ = g.useMemo(() => L.getEnabled(), [L]), F = Iv(v), {
    droppableRects: ve,
    measureDroppableContainers: le,
    measuringScheduled: T
  } = pv($, {
    dragging: N,
    dependencies: [R.x, R.y],
    config: F.droppable
  }), A = dv(C, S), ie = g.useMemo(() => q ? hi(q) : null, [q]), De = Kf(), Je = hv(A, F.draggable.measure);
  Lv({
    activeNode: S != null ? C.get(S) : null,
    config: De.layoutShiftCompensation,
    initialRect: Je,
    measure: F.draggable.measure
  });
  const H = Hu(A, F.draggable.measure, Je), rr = Hu(A ? A.parentElement : null), at = g.useRef({
    activatorEvent: null,
    active: null,
    activeNode: A,
    collisionRect: null,
    collisions: null,
    droppableRects: ve,
    draggableNodes: C,
    draggingNode: null,
    draggingNodeRect: null,
    droppableContainers: L,
    over: null,
    scrollableAncestors: [],
    scrollAdjustedTranslate: null
  }), gn = L.getNodeFor((n = at.current.over) == null ? void 0 : n.id), gt = Cv({
    measure: F.dragOverlay.measure
  }), yn = (r = gt.nodeRef.current) != null ? r : A, wn = N ? (l = gt.rect) != null ? l : H : null, ga = !!(gt.nodeRef.current && gt.rect), ya = gv(ga ? null : H), Bi = jf(yn ? Re(yn) : null), Tt = yv(N ? gn ?? A : null), al = kv(Tt), ul = If(y, {
    transform: {
      x: R.x - ya.x,
      y: R.y - ya.y,
      scaleX: 1,
      scaleY: 1
    },
    activatorEvent: q,
    active: re,
    activeNodeRect: H,
    containerNodeRect: rr,
    draggingNodeRect: wn,
    over: at.current.over,
    overlayNodeRect: gt.rect,
    scrollableAncestors: Tt,
    scrollableAncestorRects: al,
    windowRect: Bi
  }), wa = ie ? bn(ie, R) : null, xa = wv(Tt), Bf = Vu(xa), $f = Vu(xa, [H]), xn = bn(ul, Bf), Sn = wn ? bm(wn, ul) : null, lr = re && Sn ? p({
    active: re,
    collisionRect: Sn,
    droppableRects: ve,
    droppableContainers: $,
    pointerCoordinates: wa
  }) : null, Sa = hf(lr, "id"), [It, ka] = g.useState(null), Hf = ga ? ul : bn(ul, $f), bf = $m(Hf, (i = It == null ? void 0 : It.rect) != null ? i : null, H), $i = g.useRef(null), Ca = g.useCallback(
    (ge, Oe) => {
      let {
        sensor: Me,
        options: Lt
      } = Oe;
      if (ke.current == null)
        return;
      const be = C.get(ke.current);
      if (!be)
        return;
      const Ae = ge.nativeEvent, ut = new Me({
        active: ke.current,
        activeNode: be,
        event: Ae,
        options: Lt,
        // Sensors need to be instantiated with refs for arguments that change over time
        // otherwise they are frozen in time with the stale arguments
        context: at,
        onAbort(fe) {
          if (!C.get(fe))
            return;
          const {
            onDragAbort: ct
          } = P.current, yt = {
            id: fe
          };
          ct == null || ct(yt), d({
            type: "onDragAbort",
            event: yt
          });
        },
        onPending(fe, _t, ct, yt) {
          if (!C.get(fe))
            return;
          const {
            onDragPending: or
          } = P.current, Pt = {
            id: fe,
            constraint: _t,
            initialCoordinates: ct,
            offset: yt
          };
          or == null || or(Pt), d({
            type: "onDragPending",
            event: Pt
          });
        },
        onStart(fe) {
          const _t = ke.current;
          if (_t == null)
            return;
          const ct = C.get(_t);
          if (!ct)
            return;
          const {
            onDragStart: yt
          } = P.current, ir = {
            activatorEvent: Ae,
            active: {
              id: _t,
              data: ct.data,
              rect: ne
            }
          };
          An.unstable_batchedUpdates(() => {
            yt == null || yt(ir), E(zt.Initializing), f({
              type: se.DragStart,
              initialCoordinates: fe,
              active: _t
            }), d({
              type: "onDragStart",
              event: ir
            }), st($i.current), I(Ae);
          });
        },
        onMove(fe) {
          f({
            type: se.DragMove,
            coordinates: fe
          });
        },
        onEnd: kn(se.DragEnd),
        onCancel: kn(se.DragCancel)
      });
      $i.current = ut;
      function kn(fe) {
        return async function() {
          const {
            active: ct,
            collisions: yt,
            over: ir,
            scrollAdjustedTranslate: or
          } = at.current;
          let Pt = null;
          if (ct && or) {
            const {
              cancelDrop: sr
            } = P.current;
            Pt = {
              activatorEvent: Ae,
              active: ct,
              collisions: yt,
              delta: or,
              over: ir
            }, fe === se.DragEnd && typeof sr == "function" && await Promise.resolve(sr(Pt)) && (fe = se.DragCancel);
          }
          ke.current = null, An.unstable_batchedUpdates(() => {
            f({
              type: fe
            }), E(zt.Uninitialized), ka(null), st(null), I(null), $i.current = null;
            const sr = fe === se.DragEnd ? "onDragEnd" : "onDragCancel";
            if (Pt) {
              const Hi = P.current[sr];
              Hi == null || Hi(Pt), d({
                type: sr,
                event: Pt
              });
            }
          });
        };
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [C]
  ), Vf = g.useCallback((ge, Oe) => (Me, Lt) => {
    const be = Me.nativeEvent, Ae = C.get(Lt);
    if (
      // Another sensor is already instantiating
      ke.current !== null || // No active draggable
      !Ae || // Event has already been captured
      be.dndKit || be.defaultPrevented
    )
      return;
    const ut = {
      active: Ae
    };
    ge(Me, Oe.options, ut) === !0 && (be.dndKit = {
      capturedBy: Oe.sensor
    }, ke.current = Lt, Ca(Me, Oe));
  }, [C, Ca]), Ea = fv(m, Vf);
  xv(m), it(() => {
    H && w === zt.Initializing && E(zt.Initialized);
  }, [H, w]), g.useEffect(
    () => {
      const {
        onDragMove: ge
      } = P.current, {
        active: Oe,
        activatorEvent: Me,
        collisions: Lt,
        over: be
      } = at.current;
      if (!Oe || !Me)
        return;
      const Ae = {
        active: Oe,
        activatorEvent: Me,
        collisions: Lt,
        delta: {
          x: xn.x,
          y: xn.y
        },
        over: be
      };
      An.unstable_batchedUpdates(() => {
        ge == null || ge(Ae), d({
          type: "onDragMove",
          event: Ae
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [xn.x, xn.y]
  ), g.useEffect(
    () => {
      const {
        active: ge,
        activatorEvent: Oe,
        collisions: Me,
        droppableContainers: Lt,
        scrollAdjustedTranslate: be
      } = at.current;
      if (!ge || ke.current == null || !Oe || !be)
        return;
      const {
        onDragOver: Ae
      } = P.current, ut = Lt.get(Sa), kn = ut && ut.rect.current ? {
        id: ut.id,
        rect: ut.rect.current,
        data: ut.data,
        disabled: ut.disabled
      } : null, fe = {
        active: ge,
        activatorEvent: Oe,
        collisions: Me,
        delta: {
          x: be.x,
          y: be.y
        },
        over: kn
      };
      An.unstable_batchedUpdates(() => {
        ka(kn), Ae == null || Ae(fe), d({
          type: "onDragOver",
          event: fe
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [Sa]
  ), it(() => {
    at.current = {
      activatorEvent: q,
      active: re,
      activeNode: A,
      collisionRect: Sn,
      collisions: lr,
      droppableRects: ve,
      draggableNodes: C,
      draggingNode: yn,
      draggingNodeRect: wn,
      droppableContainers: L,
      over: It,
      scrollableAncestors: Tt,
      scrollAdjustedTranslate: xn
    }, ne.current = {
      initial: wn,
      translated: Sn
    };
  }, [re, A, lr, Sn, C, yn, wn, ve, L, It, Tt, xn]), av({
    ...De,
    delta: R,
    draggingRect: Sn,
    pointerCoordinates: wa,
    scrollableAncestors: Tt,
    scrollableAncestorRects: al
  });
  const Wf = g.useMemo(() => ({
    active: re,
    activeNode: A,
    activeNodeRect: H,
    activatorEvent: q,
    collisions: lr,
    containerNodeRect: rr,
    dragOverlay: gt,
    draggableNodes: C,
    droppableContainers: L,
    droppableRects: ve,
    over: It,
    measureDroppableContainers: le,
    scrollableAncestors: Tt,
    scrollableAncestorRects: al,
    measuringConfiguration: F,
    measuringScheduled: T,
    windowRect: Bi
  }), [re, A, H, q, lr, rr, gt, C, L, ve, It, le, Tt, al, F, T, Bi]), Qf = g.useMemo(() => ({
    activatorEvent: q,
    activators: Ea,
    active: re,
    activeNodeRect: H,
    ariaDescribedById: {
      draggable: O
    },
    dispatch: f,
    draggableNodes: C,
    over: It,
    measureDroppableContainers: le
  }), [q, Ea, re, H, f, O, C, It, le]);
  return K.createElement(pf.Provider, {
    value: h
  }, K.createElement(sl.Provider, {
    value: Qf
  }, K.createElement(Tf.Provider, {
    value: Wf
  }, K.createElement(Ui.Provider, {
    value: bf
  }, u)), K.createElement(Tv, {
    disabled: (s == null ? void 0 : s.restoreFocus) === !1
  })), K.createElement(Pm, {
    ...s,
    hiddenTextDescribedById: O
  }));
  function Kf() {
    const ge = (vt == null ? void 0 : vt.autoScrollEnabled) === !1, Oe = typeof a == "object" ? a.enabled === !1 : a === !1, Me = N && !ge && !Oe;
    return typeof a == "object" ? {
      ...a,
      enabled: Me
    } : {
      enabled: Me
    };
  }
}), Pv = /* @__PURE__ */ g.createContext(null), Qu = "button", Ov = "Draggable";
function Mv(e) {
  let {
    id: t,
    data: n,
    disabled: r = !1,
    attributes: l
  } = e;
  const i = ol(Ov), {
    activators: o,
    activatorEvent: s,
    active: a,
    activeNodeRect: u,
    ariaDescribedById: m,
    draggableNodes: p,
    over: v
  } = g.useContext(sl), {
    role: y = Qu,
    roleDescription: k = "draggable",
    tabIndex: x = 0
  } = l ?? {}, D = (a == null ? void 0 : a.id) === t, f = g.useContext(D ? Ui : Pv), [d, h] = fi(), [w, E] = fi(), N = Sv(o, t), S = Yr(n);
  it(
    () => (p.set(t, {
      id: t,
      key: i,
      node: d,
      activatorNode: w,
      data: S
    }), () => {
      const R = p.get(t);
      R && R.key === i && p.delete(t);
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [p, t]
  );
  const C = g.useMemo(() => ({
    role: y,
    tabIndex: x,
    "aria-disabled": r,
    "aria-pressed": D && y === Qu ? !0 : void 0,
    "aria-roledescription": k,
    "aria-describedby": m.draggable
  }), [r, y, x, D, k, m.draggable]);
  return {
    active: a,
    activatorEvent: s,
    activeNodeRect: u,
    attributes: C,
    isDragging: D,
    listeners: r ? void 0 : N,
    node: d,
    over: v,
    setNodeRef: h,
    setActivatorNodeRef: E,
    transform: f
  };
}
function Lf() {
  return g.useContext(Tf);
}
const Av = "Droppable", zv = {
  timeout: 25
};
function _f(e) {
  let {
    data: t,
    disabled: n = !1,
    id: r,
    resizeObserverConfig: l
  } = e;
  const i = ol(Av), {
    active: o,
    dispatch: s,
    over: a,
    measureDroppableContainers: u
  } = g.useContext(sl), m = g.useRef({
    disabled: n
  }), p = g.useRef(!1), v = g.useRef(null), y = g.useRef(null), {
    disabled: k,
    updateMeasurementsFor: x,
    timeout: D
  } = {
    ...zv,
    ...l
  }, f = Yr(x ?? r), d = g.useCallback(
    () => {
      if (!p.current) {
        p.current = !0;
        return;
      }
      y.current != null && clearTimeout(y.current), y.current = setTimeout(() => {
        u(Array.isArray(f.current) ? f.current : [f.current]), y.current = null;
      }, D);
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [D]
  ), h = Fi({
    callback: d,
    disabled: k || !o
  }), w = g.useCallback((C, R) => {
    h && (R && (h.unobserve(R), p.current = !1), C && h.observe(C));
  }, [h]), [E, N] = fi(w), S = Yr(t);
  return g.useEffect(() => {
    !h || !E.current || (h.disconnect(), p.current = !1, h.observe(E.current));
  }, [E, h]), g.useEffect(
    () => (s({
      type: se.RegisterDroppable,
      element: {
        id: r,
        key: i,
        disabled: n,
        node: E,
        rect: v,
        data: S
      }
    }), () => s({
      type: se.UnregisterDroppable,
      key: i,
      id: r
    })),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [r]
  ), g.useEffect(() => {
    n !== m.current.disabled && (s({
      type: se.SetDroppableDisabled,
      id: r,
      key: i,
      disabled: n
    }), m.current.disabled = n);
  }, [r, i, n, s]), {
    active: o,
    rect: v,
    isOver: (a == null ? void 0 : a.id) === r,
    node: E,
    over: a,
    setNodeRef: N
  };
}
function Fv(e) {
  let {
    animation: t,
    children: n
  } = e;
  const [r, l] = g.useState(null), [i, o] = g.useState(null), s = pi(n);
  return !n && !r && s && l(s), it(() => {
    if (!i)
      return;
    const a = r == null ? void 0 : r.key, u = r == null ? void 0 : r.props.id;
    if (a == null || u == null) {
      l(null);
      return;
    }
    Promise.resolve(t(u, i)).then(() => {
      l(null);
    });
  }, [t, r, i]), K.createElement(K.Fragment, null, n, r ? g.cloneElement(r, {
    ref: o
  }) : null);
}
const Uv = {
  x: 0,
  y: 0,
  scaleX: 1,
  scaleY: 1
};
function Bv(e) {
  let {
    children: t
  } = e;
  return K.createElement(sl.Provider, {
    value: Df
  }, K.createElement(Ui.Provider, {
    value: Uv
  }, t));
}
const $v = {
  position: "fixed",
  touchAction: "none"
}, Hv = (e) => Ai(e) ? "transform 250ms ease" : void 0, bv = /* @__PURE__ */ g.forwardRef((e, t) => {
  let {
    as: n,
    activatorEvent: r,
    adjustScale: l,
    children: i,
    className: o,
    rect: s,
    style: a,
    transform: u,
    transition: m = Hv
  } = e;
  if (!s)
    return null;
  const p = l ? u : {
    ...u,
    scaleX: 1,
    scaleY: 1
  }, v = {
    ...$v,
    width: s.width,
    height: s.height,
    top: s.top,
    left: s.left,
    transform: Zt.Transform.toString(p),
    transformOrigin: l && r ? Am(r, s) : void 0,
    transition: typeof m == "function" ? m(r) : m,
    ...a
  };
  return K.createElement(n, {
    className: o,
    style: v,
    ref: t
  }, i);
}), Vv = (e) => (t) => {
  let {
    active: n,
    dragOverlay: r
  } = t;
  const l = {}, {
    styles: i,
    className: o
  } = e;
  if (i != null && i.active)
    for (const [s, a] of Object.entries(i.active))
      a !== void 0 && (l[s] = n.node.style.getPropertyValue(s), n.node.style.setProperty(s, a));
  if (i != null && i.dragOverlay)
    for (const [s, a] of Object.entries(i.dragOverlay))
      a !== void 0 && r.node.style.setProperty(s, a);
  return o != null && o.active && n.node.classList.add(o.active), o != null && o.dragOverlay && r.node.classList.add(o.dragOverlay), function() {
    for (const [a, u] of Object.entries(l))
      n.node.style.setProperty(a, u);
    o != null && o.active && n.node.classList.remove(o.active);
  };
}, Wv = (e) => {
  let {
    transform: {
      initial: t,
      final: n
    }
  } = e;
  return [{
    transform: Zt.Transform.toString(t)
  }, {
    transform: Zt.Transform.toString(n)
  }];
}, Qv = {
  duration: 250,
  easing: "ease",
  keyframes: Wv,
  sideEffects: /* @__PURE__ */ Vv({
    styles: {
      active: {
        opacity: "0"
      }
    }
  })
};
function Kv(e) {
  let {
    config: t,
    draggableNodes: n,
    droppableContainers: r,
    measuringConfiguration: l
  } = e;
  return Mi((i, o) => {
    if (t === null)
      return;
    const s = n.get(i);
    if (!s)
      return;
    const a = s.node.current;
    if (!a)
      return;
    const u = Rf(o);
    if (!u)
      return;
    const {
      transform: m
    } = Re(o).getComputedStyle(o), p = gf(m);
    if (!p)
      return;
    const v = typeof t == "function" ? t : Xv(t);
    return Ef(a, l.draggable.measure), v({
      active: {
        id: i,
        data: s.data,
        node: a,
        rect: l.draggable.measure(a)
      },
      draggableNodes: n,
      dragOverlay: {
        node: o,
        rect: l.dragOverlay.measure(u)
      },
      droppableContainers: r,
      measuringConfiguration: l,
      transform: p
    });
  });
}
function Xv(e) {
  const {
    duration: t,
    easing: n,
    sideEffects: r,
    keyframes: l
  } = {
    ...Qv,
    ...e
  };
  return (i) => {
    let {
      active: o,
      dragOverlay: s,
      transform: a,
      ...u
    } = i;
    if (!t)
      return;
    const m = {
      x: s.rect.left - o.rect.left,
      y: s.rect.top - o.rect.top
    }, p = {
      scaleX: a.scaleX !== 1 ? o.rect.width * a.scaleX / s.rect.width : 1,
      scaleY: a.scaleY !== 1 ? o.rect.height * a.scaleY / s.rect.height : 1
    }, v = {
      x: a.x - m.x,
      y: a.y - m.y,
      ...p
    }, y = l({
      ...u,
      active: o,
      dragOverlay: s,
      transform: {
        initial: a,
        final: v
      }
    }), [k] = y, x = y[y.length - 1];
    if (JSON.stringify(k) === JSON.stringify(x))
      return;
    const D = r == null ? void 0 : r({
      active: o,
      dragOverlay: s,
      ...u
    }), f = s.node.animate(y, {
      duration: t,
      easing: n,
      fill: "forwards"
    });
    return new Promise((d) => {
      f.onfinish = () => {
        D == null || D(), d();
      };
    });
  };
}
let Ku = 0;
function Gv(e) {
  return g.useMemo(() => {
    if (e != null)
      return Ku++, Ku;
  }, [e]);
}
const Yv = /* @__PURE__ */ K.memo((e) => {
  let {
    adjustScale: t = !1,
    children: n,
    dropAnimation: r,
    style: l,
    transition: i,
    modifiers: o,
    wrapperElement: s = "div",
    className: a,
    zIndex: u = 999
  } = e;
  const {
    activatorEvent: m,
    active: p,
    activeNodeRect: v,
    containerNodeRect: y,
    draggableNodes: k,
    droppableContainers: x,
    dragOverlay: D,
    over: f,
    measuringConfiguration: d,
    scrollableAncestors: h,
    scrollableAncestorRects: w,
    windowRect: E
  } = Lf(), N = g.useContext(Ui), S = Gv(p == null ? void 0 : p.id), C = If(o, {
    activatorEvent: m,
    active: p,
    activeNodeRect: v,
    containerNodeRect: y,
    draggingNodeRect: D.rect,
    over: f,
    overlayNodeRect: D.rect,
    scrollableAncestors: h,
    scrollableAncestorRects: w,
    transform: N,
    windowRect: E
  }), R = va(v), L = Kv({
    config: r,
    draggableNodes: k,
    droppableContainers: x,
    measuringConfiguration: d
  }), M = R ? D.setRef : void 0;
  return K.createElement(Bv, null, K.createElement(Fv, {
    animation: L
  }, p && S ? K.createElement(bv, {
    key: S,
    id: p.id,
    ref: M,
    as: s,
    activatorEvent: m,
    adjustScale: t,
    className: a,
    transition: i,
    rect: R,
    style: {
      zIndex: u,
      ...l
    },
    transform: C
  }, n) : null));
});
function Pf(e, t, n) {
  const r = e.slice();
  return r.splice(n < 0 ? r.length + n : n, 0, r.splice(t, 1)[0]), r;
}
function Jv(e, t) {
  return e.reduce((n, r, l) => {
    const i = t.get(r);
    return i && (n[l] = i), n;
  }, Array(e.length));
}
function Rl(e) {
  return e !== null && e >= 0;
}
function Zv(e, t) {
  if (e === t)
    return !0;
  if (e.length !== t.length)
    return !1;
  for (let n = 0; n < e.length; n++)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
function qv(e) {
  return typeof e == "boolean" ? {
    draggable: e,
    droppable: e
  } : e;
}
const Of = (e) => {
  let {
    rects: t,
    activeIndex: n,
    overIndex: r,
    index: l
  } = e;
  const i = Pf(t, r, n), o = t[l], s = i[l];
  return !s || !o ? null : {
    x: s.left - o.left,
    y: s.top - o.top,
    scaleX: s.width / o.width,
    scaleY: s.height / o.height
  };
}, Dl = {
  scaleX: 1,
  scaleY: 1
}, eg = (e) => {
  var t;
  let {
    activeIndex: n,
    activeNodeRect: r,
    index: l,
    rects: i,
    overIndex: o
  } = e;
  const s = (t = i[n]) != null ? t : r;
  if (!s)
    return null;
  if (l === n) {
    const u = i[o];
    return u ? {
      x: 0,
      y: n < o ? u.top + u.height - (s.top + s.height) : u.top - s.top,
      ...Dl
    } : null;
  }
  const a = tg(i, l, n);
  return l > n && l <= o ? {
    x: 0,
    y: -s.height - a,
    ...Dl
  } : l < n && l >= o ? {
    x: 0,
    y: s.height + a,
    ...Dl
  } : {
    x: 0,
    y: 0,
    ...Dl
  };
};
function tg(e, t, n) {
  const r = e[t], l = e[t - 1], i = e[t + 1];
  return r ? n < t ? l ? r.top - (l.top + l.height) : i ? i.top - (r.top + r.height) : 0 : i ? i.top - (r.top + r.height) : l ? r.top - (l.top + l.height) : 0 : 0;
}
const Mf = "Sortable", Af = /* @__PURE__ */ K.createContext({
  activeIndex: -1,
  containerId: Mf,
  disableTransforms: !1,
  items: [],
  overIndex: -1,
  useDragOverlay: !1,
  sortedRects: [],
  strategy: Of,
  disabled: {
    draggable: !1,
    droppable: !1
  }
});
function ng(e) {
  let {
    children: t,
    id: n,
    items: r,
    strategy: l = Of,
    disabled: i = !1
  } = e;
  const {
    active: o,
    dragOverlay: s,
    droppableRects: a,
    over: u,
    measureDroppableContainers: m
  } = Lf(), p = ol(Mf, n), v = s.rect !== null, y = g.useMemo(() => r.map((N) => typeof N == "object" && "id" in N ? N.id : N), [r]), k = o != null, x = o ? y.indexOf(o.id) : -1, D = u ? y.indexOf(u.id) : -1, f = g.useRef(y), d = !Zv(y, f.current), h = D !== -1 && x === -1 || d, w = qv(i);
  it(() => {
    d && k && m(y);
  }, [d, y, k, m]), g.useEffect(() => {
    f.current = y;
  }, [y]);
  const E = g.useMemo(
    () => ({
      activeIndex: x,
      containerId: p,
      disabled: w,
      disableTransforms: h,
      items: y,
      overIndex: D,
      useDragOverlay: v,
      sortedRects: Jv(y, a),
      strategy: l
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [x, p, w.draggable, w.droppable, h, y, D, a, v, l]
  );
  return K.createElement(Af.Provider, {
    value: E
  }, t);
}
const rg = (e) => {
  let {
    id: t,
    items: n,
    activeIndex: r,
    overIndex: l
  } = e;
  return Pf(n, r, l).indexOf(t);
}, lg = (e) => {
  let {
    containerId: t,
    isSorting: n,
    wasDragging: r,
    index: l,
    items: i,
    newIndex: o,
    previousItems: s,
    previousContainerId: a,
    transition: u
  } = e;
  return !u || !r || s !== i && l === o ? !1 : n ? !0 : o !== l && t === a;
}, ig = {
  duration: 200,
  easing: "ease"
}, zf = "transform", og = /* @__PURE__ */ Zt.Transition.toString({
  property: zf,
  duration: 0,
  easing: "linear"
}), sg = {
  roleDescription: "sortable"
};
function ag(e) {
  let {
    disabled: t,
    index: n,
    node: r,
    rect: l
  } = e;
  const [i, o] = g.useState(null), s = g.useRef(n);
  return it(() => {
    if (!t && n !== s.current && r.current) {
      const a = l.current;
      if (a) {
        const u = nr(r.current, {
          ignoreTransform: !0
        }), m = {
          x: a.left - u.left,
          y: a.top - u.top,
          scaleX: a.width / u.width,
          scaleY: a.height / u.height
        };
        (m.x || m.y) && o(m);
      }
    }
    n !== s.current && (s.current = n);
  }, [t, n, r, l]), g.useEffect(() => {
    i && o(null);
  }, [i]), i;
}
function ug(e) {
  let {
    animateLayoutChanges: t = lg,
    attributes: n,
    disabled: r,
    data: l,
    getNewIndex: i = rg,
    id: o,
    strategy: s,
    resizeObserverConfig: a,
    transition: u = ig
  } = e;
  const {
    items: m,
    containerId: p,
    activeIndex: v,
    disabled: y,
    disableTransforms: k,
    sortedRects: x,
    overIndex: D,
    useDragOverlay: f,
    strategy: d
  } = g.useContext(Af), h = cg(r, y), w = m.indexOf(o), E = g.useMemo(() => ({
    sortable: {
      containerId: p,
      index: w,
      items: m
    },
    ...l
  }), [p, l, w, m]), N = g.useMemo(() => m.slice(m.indexOf(o)), [m, o]), {
    rect: S,
    node: C,
    isOver: R,
    setNodeRef: L
  } = _f({
    id: o,
    data: E,
    disabled: h.droppable,
    resizeObserverConfig: {
      updateMeasurementsFor: N,
      ...a
    }
  }), {
    active: M,
    activatorEvent: ne,
    activeNodeRect: re,
    attributes: ke,
    setNodeRef: vt,
    listeners: st,
    isDragging: q,
    over: I,
    setActivatorNodeRef: P,
    transform: O
  } = Mv({
    id: o,
    data: E,
    attributes: {
      ...sg,
      ...n
    },
    disabled: h.draggable
  }), $ = xm(L, vt), F = !!M, ve = F && !k && Rl(v) && Rl(D), le = !f && q, T = le && ve ? O : null, ie = ve ? T ?? (s ?? d)({
    rects: x,
    activeNodeRect: re,
    activeIndex: v,
    overIndex: D,
    index: w
  }) : null, De = Rl(v) && Rl(D) ? i({
    id: o,
    items: m,
    activeIndex: v,
    overIndex: D
  }) : w, Je = M == null ? void 0 : M.id, H = g.useRef({
    activeId: Je,
    items: m,
    newIndex: De,
    containerId: p
  }), rr = m !== H.current.items, at = t({
    active: M,
    containerId: p,
    isDragging: q,
    isSorting: F,
    id: o,
    index: w,
    items: m,
    newIndex: H.current.newIndex,
    previousItems: H.current.items,
    previousContainerId: H.current.containerId,
    transition: u,
    wasDragging: H.current.activeId != null
  }), gn = ag({
    disabled: !at,
    index: w,
    node: C,
    rect: S
  });
  return g.useEffect(() => {
    F && H.current.newIndex !== De && (H.current.newIndex = De), p !== H.current.containerId && (H.current.containerId = p), m !== H.current.items && (H.current.items = m);
  }, [F, De, p, m]), g.useEffect(() => {
    if (Je === H.current.activeId)
      return;
    if (Je && !H.current.activeId) {
      H.current.activeId = Je;
      return;
    }
    const yn = setTimeout(() => {
      H.current.activeId = Je;
    }, 50);
    return () => clearTimeout(yn);
  }, [Je]), {
    active: M,
    activeIndex: v,
    attributes: ke,
    data: E,
    rect: S,
    index: w,
    newIndex: De,
    items: m,
    isOver: R,
    isSorting: F,
    isDragging: q,
    listeners: st,
    node: C,
    overIndex: D,
    over: I,
    setNodeRef: $,
    setActivatorNodeRef: P,
    setDroppableNodeRef: L,
    setDraggableNodeRef: vt,
    transform: gn ?? ie,
    transition: gt()
  };
  function gt() {
    if (
      // Temporarily disable transitions for a single frame to set up derived transforms
      gn || // Or to prevent items jumping to back to their "new" position when items change
      rr && H.current.newIndex === w
    )
      return og;
    if (!(le && !Ai(ne) || !u) && (F || at))
      return Zt.Transition.toString({
        ...u,
        property: zf
      });
  }
}
function cg(e, t) {
  var n, r;
  return typeof e == "boolean" ? {
    draggable: e,
    // Backwards compatibility
    droppable: !1
  } : {
    draggable: (n = e == null ? void 0 : e.draggable) != null ? n : t.draggable,
    droppable: (r = e == null ? void 0 : e.droppable) != null ? r : t.droppable
  };
}
function gi(e) {
  if (!e)
    return !1;
  const t = e.data.current;
  return !!(t && "sortable" in t && typeof t.sortable == "object" && "containerId" in t.sortable && "items" in t.sortable && "index" in t.sortable);
}
const dg = [U.Down, U.Right, U.Up, U.Left], fg = (e, t) => {
  let {
    context: {
      active: n,
      collisionRect: r,
      droppableRects: l,
      droppableContainers: i,
      over: o,
      scrollableAncestors: s
    }
  } = t;
  if (dg.includes(e.code)) {
    if (e.preventDefault(), !n || !r)
      return;
    const a = [];
    i.getEnabled().forEach((p) => {
      if (!p || p != null && p.disabled)
        return;
      const v = l.get(p.id);
      if (v)
        switch (e.code) {
          case U.Down:
            r.top < v.top && a.push(p);
            break;
          case U.Up:
            r.top > v.top && a.push(p);
            break;
          case U.Left:
            r.left > v.left && a.push(p);
            break;
          case U.Right:
            r.left < v.left && a.push(p);
            break;
        }
    });
    const u = mf({
      collisionRect: r,
      droppableRects: l,
      droppableContainers: a
    });
    let m = hf(u, "id");
    if (m === (o == null ? void 0 : o.id) && u.length > 1 && (m = u[1].id), m != null) {
      const p = i.get(n.id), v = i.get(m), y = v ? l.get(v.id) : null, k = v == null ? void 0 : v.node.current;
      if (k && y && p && v) {
        const D = zi(k).some((N, S) => s[S] !== N), f = Ff(p, v), d = pg(p, v), h = D || !f ? {
          x: 0,
          y: 0
        } : {
          x: d ? r.width - y.width : 0,
          y: d ? r.height - y.height : 0
        }, w = {
          x: y.left,
          y: y.top
        };
        return h.x && h.y ? w : Jr(w, h);
      }
    }
  }
};
function Ff(e, t) {
  return !gi(e) || !gi(t) ? !1 : e.data.current.sortable.containerId === t.data.current.sortable.containerId;
}
function pg(e, t) {
  return !gi(e) || !gi(t) || !Ff(e, t) ? !1 : e.data.current.sortable.index < t.data.current.sortable.index;
}
const hg = {
  LOW: "priority-low",
  MEDIUM: "priority-medium",
  HIGH: "priority-high",
  URGENT: "priority-urgent"
};
function Uf({ ticket: e, isDragging: t = !1, onClick: n }) {
  const {
    attributes: r,
    listeners: l,
    setNodeRef: i,
    transform: o,
    transition: s,
    isDragging: a
  } = ug({ id: e.id }), u = {
    transform: Zt.Transform.toString(o),
    transition: s
  }, m = e.status === "HANDLE" || e.status === "AI_PROCESSING", p = e.status === "TO_REVIEW" && e.prLink;
  return /* @__PURE__ */ c.jsxs(
    "div",
    {
      ref: i,
      style: u,
      className: `ticket-card ${t || a ? "dragging" : ""} ${p ? "success-glow" : ""}`,
      onClick: n,
      ...r,
      ...l,
      children: [
        /* @__PURE__ */ c.jsx("h4", { className: "ticket-title", children: e.title }),
        e.description && /* @__PURE__ */ c.jsx("p", { className: "ticket-description", children: e.description }),
        /* @__PURE__ */ c.jsxs("div", { className: "ticket-meta", children: [
          /* @__PURE__ */ c.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ c.jsx("span", { className: `ticket-priority ${hg[e.priority]}`, children: e.priority }),
            e.targetBranch && /* @__PURE__ */ c.jsxs("span", { className: "ticket-branch", title: `Target: ${e.targetBranch}`, children: [
              /* @__PURE__ */ c.jsx(vg, {}),
              e.targetBranch
            ] })
          ] }),
          /* @__PURE__ */ c.jsxs("div", { className: "flex items-center gap-2", children: [
            e.assignee && /* @__PURE__ */ c.jsx(
              "div",
              {
                className: "ticket-assignee",
                title: e.assignee.name,
                children: e.assignee.name.substring(0, 2).toUpperCase()
              }
            ),
            /* @__PURE__ */ c.jsxs("span", { className: "text-xs text-muted-foreground", children: [
              "#",
              e.id.slice(-4)
            ] })
          ] })
        ] }),
        m && /* @__PURE__ */ c.jsxs("div", { className: `ticket-ai-status ${e.status === "AI_PROCESSING" ? "processing" : ""}`, children: [
          /* @__PURE__ */ c.jsx("div", { className: "ai-spinner" }),
          /* @__PURE__ */ c.jsx("span", { children: e.status === "HANDLE" ? "Queued for AI" : "AI Processing..." })
        ] }),
        e.prLink && /* @__PURE__ */ c.jsxs(
          "a",
          {
            href: e.prLink,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "ticket-pr-link",
            onClick: (v) => v.stopPropagation(),
            children: [
              /* @__PURE__ */ c.jsx(mg, {}),
              "View Pull Request"
            ]
          }
        ),
        e.aiSummary && /* @__PURE__ */ c.jsxs("div", { className: "ticket-ai-summary", children: [
          /* @__PURE__ */ c.jsx("strong", { children: "AI Summary:" }),
          " ",
          e.aiSummary
        ] })
      ]
    }
  );
}
function mg() {
  return /* @__PURE__ */ c.jsx(
    "svg",
    {
      viewBox: "0 0 16 16",
      fill: "currentColor",
      style: { width: "1rem", height: "1rem" },
      children: /* @__PURE__ */ c.jsx(
        "path",
        {
          fillRule: "evenodd",
          d: "M7.177 3.073L9.573.677A.25.25 0 0110 .854v4.792a.25.25 0 01-.427.177L7.177 3.427a.25.25 0 010-.354zM3.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 113 2.122v5.256a2.251 2.251 0 11-1.5 0V5.372A2.25 2.25 0 011.5 3.25zM11 2.5h-1V4h1a1 1 0 011 1v5.628a2.251 2.251 0 101.5 0V5A2.5 2.5 0 0011 2.5zm1 10.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0zM3.75 12a.75.75 0 100 1.5.75.75 0 000-1.5z"
        }
      )
    }
  );
}
function vg() {
  return /* @__PURE__ */ c.jsxs(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      style: { width: "0.75rem", height: "0.75rem" },
      children: [
        /* @__PURE__ */ c.jsx("line", { x1: "6", x2: "6", y1: "3", y2: "15" }),
        /* @__PURE__ */ c.jsx("circle", { cx: "18", cy: "6", r: "3" }),
        /* @__PURE__ */ c.jsx("circle", { cx: "6", cy: "18", r: "3" }),
        /* @__PURE__ */ c.jsx("path", { d: "M18 9a9 9 0 0 1-9 9" })
      ]
    }
  );
}
const gg = {
  BACKLOG: "",
  TODO: "",
  HANDLE: "column-handle",
  AI_PROCESSING: "column-ai-processing",
  TO_REVIEW: "column-to-review",
  IN_PROGRESS: "",
  DONE: "column-done",
  CANCELLED: ""
};
function yg({
  id: e,
  title: t,
  icon: n,
  tickets: r,
  isActive: l = !1,
  onTicketClick: i
}) {
  const { setNodeRef: o, isOver: s } = _f({ id: e });
  return /* @__PURE__ */ c.jsxs(
    "div",
    {
      className: `kanban-column ${gg[e]} ${l ? "active" : ""}`,
      children: [
        /* @__PURE__ */ c.jsxs("div", { className: "column-header", children: [
          /* @__PURE__ */ c.jsxs("div", { className: "column-title", children: [
            /* @__PURE__ */ c.jsx("span", { className: "icon", role: "img", "aria-label": t, children: n }),
            /* @__PURE__ */ c.jsx("span", { children: t })
          ] }),
          /* @__PURE__ */ c.jsx("span", { className: "column-count", children: r.length })
        ] }),
        /* @__PURE__ */ c.jsx(ng, { items: r.map((a) => a.id), strategy: eg, children: /* @__PURE__ */ c.jsx(
          "div",
          {
            ref: o,
            className: `column-body ${s ? "drop-target" : ""}`,
            children: r.length === 0 ? /* @__PURE__ */ c.jsxs("div", { className: "column-empty", children: [
              /* @__PURE__ */ c.jsx("span", { className: "mb-1 text-lg", children: n }),
              /* @__PURE__ */ c.jsx("span", { children: "Drop tickets here" }),
              e === "HANDLE" && /* @__PURE__ */ c.jsx("span", { className: "text-xs mt-1", children: "AI will process these" })
            ] }) : r.map((a) => /* @__PURE__ */ c.jsx(
              Uf,
              {
                ticket: a,
                onClick: () => i(a)
              },
              a.id
            ))
          }
        ) })
      ]
    }
  );
}
const wg = [
  { value: "LOW", label: "Low", icon: "↓", color: "text-slate-400" },
  { value: "MEDIUM", label: "Medium", icon: "→", color: "text-blue-400" },
  { value: "HIGH", label: "High", icon: "↑", color: "text-amber-400" },
  { value: "URGENT", label: "Urgent", icon: "⚡", color: "text-red-400" }
], xg = {
  auto: { value: "auto", label: "Auto (Recommended)", description: "Let Cursor choose the best model" },
  "claude-4-sonnet-thinking": { value: "claude-4-sonnet-thinking", label: "Claude 4 Sonnet", description: "Fast & capable" },
  "claude-4-opus-thinking": { value: "claude-4-opus-thinking", label: "Claude 4 Opus", description: "Most powerful" },
  o3: { value: "o3", label: "O3", description: "OpenAI reasoning model" }
}, Sg = `## What needs to be done
Describe the task clearly. What is the expected outcome?

## Acceptance Criteria
- [ ] Criterion 1
- [ ] Criterion 2
- [ ] Criterion 3

## Technical Details
Any specific implementation details, files to modify, or constraints?

## Additional Context
Links, screenshots, or references that might help.`;
function kg({
  projectId: e,
  projectName: t,
  branchPresets: n,
  defaultBranch: r,
  members: l = [],
  onClose: i,
  onSubmit: o
}) {
  const [s, a] = g.useState(""), [u, m] = g.useState(Sg), [p, v] = g.useState("MEDIUM"), [y, k] = g.useState(r), [x, D] = g.useState(""), [f, d] = g.useState([]), [h, w] = g.useState(""), [E, N] = g.useState(!1), [S, C] = g.useState(!1), [R, L] = g.useState(""), [M, ne] = g.useState("auto"), [re, ke] = g.useState(["auto"]), [vt, st] = g.useState(!0), q = g.useRef(null), I = g.useRef(null);
  g.useEffect(() => {
    var T;
    (T = q.current) == null || T.focus();
  }, []), g.useEffect(() => {
    (async () => {
      try {
        const A = Xu(), ie = await fetch("/api/cursor/models", {
          headers: { "X-CSRF-Token": A }
        });
        if (ie.ok) {
          const De = await ie.json();
          ke(De.models || ["auto"]);
        }
      } catch (A) {
        console.error("Failed to fetch models:", A);
      } finally {
        st(!1);
      }
    })();
  }, []), g.useEffect(() => {
    const T = (A) => {
      A.key === "Escape" && i(), (A.metaKey || A.ctrlKey) && A.key === "Enter" && (A.preventDefault(), O(A));
    };
    return document.addEventListener("keydown", T), () => document.removeEventListener("keydown", T);
  }, [i, s, u, p, y]);
  const P = (T) => T.replace(/##\s*What needs to be done\s*/gi, "").replace(/##\s*Acceptance Criteria\s*/gi, "").replace(/##\s*Technical Details\s*/gi, "").replace(/##\s*Additional Context\s*/gi, "").replace(/Describe the task clearly.*\?/gi, "").replace(/Any specific implementation.*\?/gi, "").replace(/Links, screenshots.*help\./gi, "").replace(/-\s*\[\s*\]\s*Criterion \d+/gi, "").replace(/\s+/g, " ").trim().length >= 20, O = g.useCallback(
    async (T) => {
      var A;
      if (T.preventDefault(), L(""), !s.trim()) {
        L("Title is required"), (A = q.current) == null || A.focus();
        return;
      }
      if (!u.trim()) {
        L("Description is required - the AI needs context to work!");
        return;
      }
      if (!P(u)) {
        L("Please fill in the description template with actual task details. The AI needs this information to implement the feature correctly.");
        return;
      }
      C(!0);
      try {
        const ie = Xu(), De = await fetch(`/api/tickets/${e}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-CSRF-Token": ie
          },
          body: JSON.stringify({
            title: s.trim(),
            description: u.trim(),
            priority: p,
            status: "BACKLOG",
            targetBranch: y,
            assigneeId: x || void 0,
            labels: f,
            aiModel: M !== "auto" ? M : void 0
          })
        });
        if (!De.ok) {
          const H = await De.json().catch(() => ({}));
          throw new Error(H.message || "Failed to create ticket");
        }
        const Je = await De.json();
        o(Je);
      } catch (ie) {
        L(ie instanceof Error ? ie.message : "Failed to create ticket");
      } finally {
        C(!1);
      }
    },
    [e, s, u, p, y, x, f, o]
  ), $ = g.useCallback(() => {
    const T = h.trim().toLowerCase();
    T && !f.includes(T) && (d([...f, T]), w(""));
  }, [h, f]), F = g.useCallback((T) => {
    d(f.filter((A) => A !== T));
  }, [f]), ve = g.useCallback((T) => {
    T.key === "Enter" && (T.preventDefault(), $());
  }, [$]), le = P(u);
  return /* @__PURE__ */ c.jsx(
    "div",
    {
      className: "modal-overlay",
      onClick: (T) => {
        T.target === T.currentTarget && i();
      },
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": "new-ticket-title",
      children: /* @__PURE__ */ c.jsxs("div", { ref: I, className: "ticket-modal", onClick: (T) => T.stopPropagation(), children: [
        /* @__PURE__ */ c.jsxs("div", { className: "ticket-modal-header", children: [
          /* @__PURE__ */ c.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ c.jsx("div", { className: "ticket-modal-icon", children: /* @__PURE__ */ c.jsx("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: /* @__PURE__ */ c.jsx("path", { d: "M12 5v14M5 12h14" }) }) }),
            /* @__PURE__ */ c.jsxs("div", { children: [
              /* @__PURE__ */ c.jsx("h2", { id: "new-ticket-title", children: "Create Ticket" }),
              t && /* @__PURE__ */ c.jsxs("p", { className: "text-xs text-muted-foreground mt-0.5", children: [
                "in ",
                t
              ] })
            ] })
          ] }),
          /* @__PURE__ */ c.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ c.jsx("span", { className: "text-xs text-muted-foreground hidden sm:block", children: "⌘ + Enter to submit" }),
            /* @__PURE__ */ c.jsx(
              "button",
              {
                className: "ticket-modal-close",
                onClick: i,
                "aria-label": "Close modal",
                children: /* @__PURE__ */ c.jsx("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: /* @__PURE__ */ c.jsx("path", { d: "M18 6L6 18M6 6l12 12" }) })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ c.jsxs("form", { onSubmit: O, className: "ticket-modal-form", children: [
          R && /* @__PURE__ */ c.jsxs("div", { className: "ticket-error", children: [
            /* @__PURE__ */ c.jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
              /* @__PURE__ */ c.jsx("circle", { cx: "12", cy: "12", r: "10" }),
              /* @__PURE__ */ c.jsx("path", { d: "M12 8v4M12 16h.01" })
            ] }),
            R
          ] }),
          /* @__PURE__ */ c.jsxs("div", { className: "ticket-field", children: [
            /* @__PURE__ */ c.jsxs("label", { className: "ticket-label", children: [
              "Title ",
              /* @__PURE__ */ c.jsx("span", { className: "text-red-400", children: "*" })
            ] }),
            /* @__PURE__ */ c.jsx(
              "input",
              {
                ref: q,
                type: "text",
                className: "ticket-title-input",
                placeholder: "Brief summary of the task",
                value: s,
                onChange: (T) => a(T.target.value),
                required: !0
              }
            )
          ] }),
          /* @__PURE__ */ c.jsxs("div", { className: "ticket-field", children: [
            /* @__PURE__ */ c.jsxs("label", { className: "ticket-label", children: [
              "Description ",
              /* @__PURE__ */ c.jsx("span", { className: "text-red-400", children: "*" }),
              /* @__PURE__ */ c.jsx("span", { className: "text-muted-foreground font-normal ml-1 text-xs normal-case", children: "— The AI uses this to implement the feature" })
            ] }),
            /* @__PURE__ */ c.jsx(
              "textarea",
              {
                className: `ticket-description-input ${le ? "" : "ticket-description-warning"}`,
                value: u,
                onChange: (T) => m(T.target.value),
                rows: 12,
                required: !0
              }
            ),
            !le && /* @__PURE__ */ c.jsx("p", { className: "ticket-warning-hint", children: "⚠️ Fill in the template with actual task details" })
          ] }),
          /* @__PURE__ */ c.jsxs("div", { className: "ticket-meta-grid", children: [
            /* @__PURE__ */ c.jsxs("div", { className: "ticket-field", children: [
              /* @__PURE__ */ c.jsx("label", { className: "ticket-label", children: "Priority" }),
              /* @__PURE__ */ c.jsx("div", { className: "ticket-priority-selector", children: wg.map((T) => /* @__PURE__ */ c.jsxs(
                "button",
                {
                  type: "button",
                  className: `ticket-priority-btn ${p === T.value ? "active" : ""} ${T.color}`,
                  onClick: () => v(T.value),
                  title: T.label,
                  children: [
                    /* @__PURE__ */ c.jsx("span", { className: "ticket-priority-icon", children: T.icon }),
                    /* @__PURE__ */ c.jsx("span", { className: "ticket-priority-label", children: T.label })
                  ]
                },
                T.value
              )) })
            ] }),
            /* @__PURE__ */ c.jsxs("div", { className: "ticket-field", children: [
              /* @__PURE__ */ c.jsxs("label", { className: "ticket-label", children: [
                /* @__PURE__ */ c.jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", className: "inline w-3.5 h-3.5 mr-1", children: [
                  /* @__PURE__ */ c.jsx("path", { d: "M12 2L2 7l10 5 10-5-10-5z" }),
                  /* @__PURE__ */ c.jsx("path", { d: "M2 17l10 5 10-5" }),
                  /* @__PURE__ */ c.jsx("path", { d: "M2 12l10 5 10-5" })
                ] }),
                "AI Model"
              ] }),
              /* @__PURE__ */ c.jsx("div", { className: "ticket-model-selector", children: vt ? /* @__PURE__ */ c.jsxs("div", { className: "ticket-model-loading", children: [
                /* @__PURE__ */ c.jsx("span", { className: "ticket-spinner-small" }),
                "Loading models..."
              ] }) : re.map((T) => {
                const A = xg[T] || {
                  label: T.replace(/-/g, " ").replace(/\b\w/g, (ie) => ie.toUpperCase()),
                  description: ""
                };
                return /* @__PURE__ */ c.jsxs(
                  "button",
                  {
                    type: "button",
                    className: `ticket-model-btn ${M === T ? "active" : ""}`,
                    onClick: () => ne(T),
                    title: A.description,
                    children: [
                      /* @__PURE__ */ c.jsx("span", { className: "model-name", children: A.label }),
                      A.description && /* @__PURE__ */ c.jsx("span", { className: "model-desc", children: A.description })
                    ]
                  },
                  T
                );
              }) })
            ] }),
            /* @__PURE__ */ c.jsxs("div", { className: "ticket-field", children: [
              /* @__PURE__ */ c.jsxs("label", { className: "ticket-label", children: [
                /* @__PURE__ */ c.jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", className: "inline w-3.5 h-3.5 mr-1", children: [
                  /* @__PURE__ */ c.jsx("line", { x1: "6", x2: "6", y1: "3", y2: "15" }),
                  /* @__PURE__ */ c.jsx("circle", { cx: "18", cy: "6", r: "3" }),
                  /* @__PURE__ */ c.jsx("circle", { cx: "6", cy: "18", r: "3" }),
                  /* @__PURE__ */ c.jsx("path", { d: "M18 9a9 9 0 0 1-9 9" })
                ] }),
                "Target Branch"
              ] }),
              n.length > 0 ? /* @__PURE__ */ c.jsx("div", { className: "ticket-branch-presets", children: n.map((T) => /* @__PURE__ */ c.jsxs(
                "button",
                {
                  type: "button",
                  className: `ticket-branch-btn ${y === T.branch ? "active" : ""}`,
                  onClick: () => k(T.branch),
                  children: [
                    /* @__PURE__ */ c.jsx("span", { className: "font-medium", children: T.name }),
                    /* @__PURE__ */ c.jsx("code", { children: T.branch })
                  ]
                },
                T.branch
              )) }) : /* @__PURE__ */ c.jsx(
                "input",
                {
                  type: "text",
                  className: "ticket-input",
                  placeholder: "main",
                  value: y,
                  onChange: (T) => k(T.target.value)
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ c.jsxs(
            "button",
            {
              type: "button",
              className: "ticket-advanced-toggle",
              onClick: () => N(!E),
              children: [
                /* @__PURE__ */ c.jsx(
                  "svg",
                  {
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    className: `w-4 h-4 transition-transform ${E ? "rotate-90" : ""}`,
                    children: /* @__PURE__ */ c.jsx("path", { d: "M9 18l6-6-6-6" })
                  }
                ),
                /* @__PURE__ */ c.jsx("span", { children: "More options" })
              ]
            }
          ),
          E && /* @__PURE__ */ c.jsxs("div", { className: "ticket-advanced-section", children: [
            l.length > 0 && /* @__PURE__ */ c.jsxs("div", { className: "ticket-field", children: [
              /* @__PURE__ */ c.jsx("label", { className: "ticket-label", children: "Assignee" }),
              /* @__PURE__ */ c.jsxs("div", { className: "ticket-assignee-selector", children: [
                /* @__PURE__ */ c.jsxs(
                  "button",
                  {
                    type: "button",
                    className: `ticket-assignee-btn ${x ? "" : "active"}`,
                    onClick: () => D(""),
                    children: [
                      /* @__PURE__ */ c.jsx("div", { className: "ticket-assignee-avatar unassigned", children: "?" }),
                      /* @__PURE__ */ c.jsx("span", { children: "Unassigned" })
                    ]
                  }
                ),
                l.map((T) => /* @__PURE__ */ c.jsxs(
                  "button",
                  {
                    type: "button",
                    className: `ticket-assignee-btn ${x === T.id ? "active" : ""}`,
                    onClick: () => D(T.id),
                    children: [
                      /* @__PURE__ */ c.jsx("div", { className: "ticket-assignee-avatar", children: T.avatarUrl ? /* @__PURE__ */ c.jsx("img", { src: T.avatarUrl, alt: T.name }) : T.name.substring(0, 2).toUpperCase() }),
                      /* @__PURE__ */ c.jsx("span", { children: T.name })
                    ]
                  },
                  T.id
                ))
              ] })
            ] }),
            /* @__PURE__ */ c.jsxs("div", { className: "ticket-field", children: [
              /* @__PURE__ */ c.jsx("label", { className: "ticket-label", children: "Labels" }),
              /* @__PURE__ */ c.jsxs("div", { className: "ticket-labels-input", children: [
                /* @__PURE__ */ c.jsx("div", { className: "ticket-labels-list", children: f.map((T) => /* @__PURE__ */ c.jsxs("span", { className: "ticket-label-tag", children: [
                  T,
                  /* @__PURE__ */ c.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => F(T),
                      className: "ticket-label-remove",
                      children: "×"
                    }
                  )
                ] }, T)) }),
                /* @__PURE__ */ c.jsx(
                  "input",
                  {
                    type: "text",
                    className: "ticket-label-input",
                    placeholder: "Add label...",
                    value: h,
                    onChange: (T) => w(T.target.value),
                    onKeyDown: ve,
                    onBlur: $
                  }
                )
              ] }),
              /* @__PURE__ */ c.jsx("p", { className: "ticket-hint", children: "Press Enter to add a label" })
            ] }),
            n.length > 0 && /* @__PURE__ */ c.jsxs("div", { className: "ticket-field", children: [
              /* @__PURE__ */ c.jsx("label", { className: "ticket-label", children: "Custom Branch" }),
              /* @__PURE__ */ c.jsx(
                "input",
                {
                  type: "text",
                  className: "ticket-input font-mono",
                  placeholder: "Or enter a custom branch...",
                  value: y,
                  onChange: (T) => k(T.target.value)
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ c.jsxs("div", { className: "ticket-modal-actions", children: [
            /* @__PURE__ */ c.jsx(
              "button",
              {
                type: "button",
                className: "ticket-btn-secondary",
                onClick: i,
                disabled: S,
                children: "Cancel"
              }
            ),
            /* @__PURE__ */ c.jsx(
              "button",
              {
                type: "submit",
                className: "ticket-btn-primary",
                disabled: S || !s.trim() || !le,
                children: S ? /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
                  /* @__PURE__ */ c.jsx("div", { className: "ticket-spinner" }),
                  "Creating..."
                ] }) : /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
                  /* @__PURE__ */ c.jsx("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", className: "w-4 h-4", children: /* @__PURE__ */ c.jsx("path", { d: "M12 5v14M5 12h14" }) }),
                  "Create Ticket"
                ] })
              }
            )
          ] })
        ] })
      ] })
    }
  );
}
function Xu() {
  const e = document.querySelector('meta[name="csrf-token"]');
  return (e == null ? void 0 : e.getAttribute("content")) || "";
}
const Cg = {
  QUEUED: "text-amber-400",
  RUNNING: "text-blue-400",
  FINISHED: "text-emerald-400",
  ERROR: "text-red-400",
  CANCELLED: "text-slate-400"
}, Eg = {
  QUEUED: "⏳",
  RUNNING: "🔄",
  FINISHED: "✅",
  ERROR: "❌",
  CANCELLED: "🚫"
}, Ng = {
  QUEUED: "Queued",
  RUNNING: "Running",
  FINISHED: "Completed",
  ERROR: "Failed",
  CANCELLED: "Cancelled"
};
function jg({ agentId: e, ticketTitle: t, onStatusChange: n }) {
  var d, h, w, E, N;
  const [r, l] = g.useState(null), [i, o] = g.useState([]), [s, a] = g.useState(!0), [u, m] = g.useState(null), [p, v] = g.useState(!0), y = g.useRef(null), k = g.useRef(null), x = g.useCallback(async () => {
    try {
      const S = Gu(), C = await fetch(`/api/cursor/agents/${e}/status`, {
        headers: { "X-CSRF-Token": S }
      });
      if (!C.ok) {
        if (C.status === 404) {
          m("Agent not found. It may have been deleted.");
          return;
        }
        throw new Error("Failed to fetch status");
      }
      const R = await C.json();
      l(R), n && R.status && n(R.status), (R.status === "FINISHED" || R.status === "ERROR" || R.status === "CANCELLED") && k.current && (clearInterval(k.current), k.current = null);
    } catch (S) {
      console.error("Status fetch error:", S), m("Failed to fetch agent status");
    }
  }, [e, n]), D = g.useCallback(async () => {
    try {
      const S = Gu(), C = await fetch(`/api/cursor/agents/${e}/conversation`, {
        headers: { "X-CSRF-Token": S }
      });
      if (!C.ok) {
        if (C.status === 404) return;
        throw new Error("Failed to fetch conversation");
      }
      const R = await C.json();
      o(R.messages || []), y.current && (y.current.scrollTop = y.current.scrollHeight);
    } catch (S) {
      console.error("Conversation fetch error:", S);
    }
  }, [e]);
  if (g.useEffect(() => (a(!0), m(null), (async () => {
    await Promise.all([x(), D()]), a(!1);
  })(), k.current = setInterval(() => {
    x(), D();
  }, 3e3), () => {
    k.current && clearInterval(k.current);
  }), [e, x, D]), g.useEffect(() => {
    y.current && i.length > 0 && (y.current.scrollTop = y.current.scrollHeight);
  }, [i]), s)
    return /* @__PURE__ */ c.jsx("div", { className: "agent-status-panel loading", children: /* @__PURE__ */ c.jsxs("div", { className: "agent-status-header", children: [
      /* @__PURE__ */ c.jsx("div", { className: "agent-spinner" }),
      /* @__PURE__ */ c.jsx("span", { children: "Connecting to Cursor Agent..." })
    ] }) });
  if (u)
    return /* @__PURE__ */ c.jsx("div", { className: "agent-status-panel error", children: /* @__PURE__ */ c.jsx("div", { className: "agent-status-header", children: /* @__PURE__ */ c.jsxs("span", { className: "text-red-400", children: [
      "❌ ",
      u
    ] }) }) });
  const f = (r == null ? void 0 : r.status) || "QUEUED";
  return /* @__PURE__ */ c.jsxs("div", { className: `agent-status-panel ${f.toLowerCase()}`, children: [
    /* @__PURE__ */ c.jsxs(
      "button",
      {
        className: "agent-status-header",
        onClick: () => v(!p),
        "aria-expanded": p,
        children: [
          /* @__PURE__ */ c.jsxs("div", { className: "agent-status-info", children: [
            /* @__PURE__ */ c.jsx("span", { className: "agent-status-indicator", children: f === "RUNNING" ? /* @__PURE__ */ c.jsx("span", { className: "agent-spinner-small" }) : Eg[f] }),
            /* @__PURE__ */ c.jsx("span", { className: `agent-status-text ${Cg[f]}`, children: Ng[f] }),
            ((d = r == null ? void 0 : r.target) == null ? void 0 : d.branchName) && /* @__PURE__ */ c.jsxs("span", { className: "agent-branch", children: [
              /* @__PURE__ */ c.jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", className: "w-3 h-3", children: [
                /* @__PURE__ */ c.jsx("line", { x1: "6", x2: "6", y1: "3", y2: "15" }),
                /* @__PURE__ */ c.jsx("circle", { cx: "18", cy: "6", r: "3" }),
                /* @__PURE__ */ c.jsx("circle", { cx: "6", cy: "18", r: "3" }),
                /* @__PURE__ */ c.jsx("path", { d: "M18 9a9 9 0 0 1-9 9" })
              ] }),
              r.target.branchName
            ] })
          ] }),
          /* @__PURE__ */ c.jsxs("div", { className: "agent-status-actions", children: [
            ((h = r == null ? void 0 : r.target) == null ? void 0 : h.url) && /* @__PURE__ */ c.jsx(
              "a",
              {
                href: r.target.url,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "agent-link",
                onClick: (S) => S.stopPropagation(),
                children: "View in Cursor ↗"
              }
            ),
            ((w = r == null ? void 0 : r.target) == null ? void 0 : w.prUrl) && /* @__PURE__ */ c.jsx(
              "a",
              {
                href: r.target.prUrl,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "agent-link pr",
                onClick: (S) => S.stopPropagation(),
                children: "View PR ↗"
              }
            ),
            /* @__PURE__ */ c.jsx(
              "svg",
              {
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                className: `agent-expand-icon ${p ? "expanded" : ""}`,
                children: /* @__PURE__ */ c.jsx("path", { d: "M6 9l6 6 6-6" })
              }
            )
          ] })
        ]
      }
    ),
    p && /* @__PURE__ */ c.jsxs("div", { className: "agent-status-content", children: [
      (r == null ? void 0 : r.summary) && /* @__PURE__ */ c.jsxs("div", { className: "agent-summary", children: [
        /* @__PURE__ */ c.jsx("h4", { children: "Summary" }),
        /* @__PURE__ */ c.jsx("p", { children: r.summary })
      ] }),
      /* @__PURE__ */ c.jsxs("div", { className: "agent-terminal", ref: y, children: [
        /* @__PURE__ */ c.jsxs("div", { className: "agent-terminal-header", children: [
          /* @__PURE__ */ c.jsxs("div", { className: "terminal-dots", children: [
            /* @__PURE__ */ c.jsx("span", { className: "dot red" }),
            /* @__PURE__ */ c.jsx("span", { className: "dot yellow" }),
            /* @__PURE__ */ c.jsx("span", { className: "dot green" })
          ] }),
          /* @__PURE__ */ c.jsx("span", { className: "terminal-title", children: "Agent Conversation" })
        ] }),
        /* @__PURE__ */ c.jsxs("div", { className: "agent-terminal-body", children: [
          i.length === 0 ? /* @__PURE__ */ c.jsx("div", { className: "terminal-empty", children: f === "QUEUED" ? "Waiting for agent to start..." : f === "RUNNING" ? "Agent is processing..." : "No conversation data available." }) : i.map((S, C) => /* @__PURE__ */ c.jsxs(
            "div",
            {
              className: `terminal-message ${S.type}`,
              children: [
                /* @__PURE__ */ c.jsx("span", { className: "terminal-prompt", children: S.type === "user_message" ? "$ " : "→ " }),
                /* @__PURE__ */ c.jsx("span", { className: "terminal-text", children: S.text })
              ]
            },
            S.id || C
          )),
          f === "RUNNING" && /* @__PURE__ */ c.jsx("div", { className: "terminal-cursor", children: /* @__PURE__ */ c.jsx("span", { className: "cursor-blink", children: "▋" }) })
        ] })
      ] }),
      /* @__PURE__ */ c.jsxs("div", { className: "agent-meta", children: [
        ((E = r == null ? void 0 : r.source) == null ? void 0 : E.repository) && /* @__PURE__ */ c.jsxs("div", { className: "agent-meta-item", children: [
          /* @__PURE__ */ c.jsx("span", { className: "meta-label", children: "Repository:" }),
          /* @__PURE__ */ c.jsx(
            "a",
            {
              href: r.source.repository,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "meta-link",
              children: r.source.repository.replace("https://github.com/", "")
            }
          )
        ] }),
        ((N = r == null ? void 0 : r.source) == null ? void 0 : N.ref) && /* @__PURE__ */ c.jsxs("div", { className: "agent-meta-item", children: [
          /* @__PURE__ */ c.jsx("span", { className: "meta-label", children: "Source Branch:" }),
          /* @__PURE__ */ c.jsx("code", { children: r.source.ref })
        ] }),
        (r == null ? void 0 : r.createdAt) && /* @__PURE__ */ c.jsxs("div", { className: "agent-meta-item", children: [
          /* @__PURE__ */ c.jsx("span", { className: "meta-label", children: "Started:" }),
          /* @__PURE__ */ c.jsx("span", { children: new Date(r.createdAt).toLocaleString() })
        ] })
      ] })
    ] })
  ] });
}
function Gu() {
  const e = document.querySelector('meta[name="csrf-token"]');
  return (e == null ? void 0 : e.getAttribute("content")) || "";
}
const Rg = {
  BACKLOG: "Backlog",
  TODO: "To Do",
  HANDLE: "Handle (AI Queue)",
  AI_PROCESSING: "AI Processing",
  TO_REVIEW: "To Review",
  IN_PROGRESS: "In Progress",
  DONE: "Done",
  CANCELLED: "Cancelled"
};
function Dg({
  ticket: e,
  projectId: t,
  onClose: n,
  onUpdate: r
}) {
  const [l, i] = g.useState(!1), [o, s] = g.useState(e.title), [a, u] = g.useState(e.description || ""), [m, p] = g.useState(e.priority), [v, y] = g.useState(e.status), [k, x] = g.useState(!1), [D, f] = g.useState(""), [d, h] = g.useState(null), w = g.useCallback((R) => {
    h(R), R === "FINISHED" && e.status === "AI_PROCESSING" ? r({ ...e, status: "TO_REVIEW" }) : R === "ERROR" && e.status === "AI_PROCESSING" && r({ ...e, status: "TODO" });
  }, [e, r]), E = g.useCallback(async () => {
    if (!o.trim()) {
      f("Title is required");
      return;
    }
    x(!0), f("");
    try {
      const R = Yu(), L = await fetch(`/api/tickets/${t}/${e.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "X-CSRF-Token": R
        },
        body: JSON.stringify({
          title: o.trim(),
          description: a.trim(),
          priority: m,
          status: v
        })
      });
      if (!L.ok)
        throw new Error("Failed to update ticket");
      const M = await L.json();
      r(M);
    } catch (R) {
      f(R instanceof Error ? R.message : "Failed to update ticket");
    } finally {
      x(!1);
    }
  }, [t, e.id, o, a, m, v, r]), N = g.useCallback(async () => {
    if (confirm("Are you sure you want to delete this ticket?")) {
      x(!0);
      try {
        const R = Yu();
        if (!(await fetch(`/api/tickets/${t}/${e.id}`, {
          method: "DELETE",
          headers: {
            "X-CSRF-Token": R
          }
        })).ok)
          throw new Error("Failed to delete ticket");
        r({ ...e, status: "CANCELLED" }), n();
      } catch (R) {
        f(R instanceof Error ? R.message : "Failed to delete ticket");
      } finally {
        x(!1);
      }
    }
  }, [t, e, r, n]), S = g.useCallback(
    (R) => {
      R.key === "Escape" && n();
    },
    [n]
  ), C = e.status === "HANDLE" || e.status === "AI_PROCESSING";
  return /* @__PURE__ */ c.jsx(
    "div",
    {
      className: "modal-overlay",
      onClick: n,
      onKeyDown: S,
      role: "dialog",
      "aria-modal": "true",
      children: /* @__PURE__ */ c.jsxs(
        "div",
        {
          className: "modal-content modal-lg",
          onClick: (R) => R.stopPropagation(),
          children: [
            /* @__PURE__ */ c.jsxs("div", { className: "modal-header", children: [
              /* @__PURE__ */ c.jsxs("div", { className: "flex-1", children: [
                l ? /* @__PURE__ */ c.jsx(
                  "input",
                  {
                    type: "text",
                    className: "form-input text-lg font-semibold",
                    value: o,
                    onChange: (R) => s(R.target.value),
                    autoFocus: !0
                  }
                ) : /* @__PURE__ */ c.jsx("h2", { className: "text-lg font-semibold", children: e.title }),
                /* @__PURE__ */ c.jsxs("div", { className: "flex items-center gap-2 mt-2", children: [
                  /* @__PURE__ */ c.jsx("span", { className: `status-badge status-${e.status.toLowerCase()}`, children: Rg[e.status] }),
                  /* @__PURE__ */ c.jsxs("span", { className: "text-sm text-muted-foreground", children: [
                    "#",
                    e.id.slice(-4)
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ c.jsx(
                "button",
                {
                  className: "modal-close",
                  onClick: n,
                  "aria-label": "Close modal",
                  children: "×"
                }
              )
            ] }),
            /* @__PURE__ */ c.jsxs("div", { className: "modal-body", children: [
              D && /* @__PURE__ */ c.jsx("div", { className: "mb-4 p-3 text-sm rounded-md bg-destructive/10 text-destructive border border-destructive/20", children: D }),
              e.agentId && /* @__PURE__ */ c.jsx("div", { className: "mb-4", children: /* @__PURE__ */ c.jsx(
                jg,
                {
                  agentId: e.agentId,
                  ticketTitle: e.title,
                  onStatusChange: w
                }
              ) }),
              C && !e.agentId && /* @__PURE__ */ c.jsxs("div", { className: "mb-4 p-4 rounded-md bg-status-processing/10 border border-status-processing/20", children: [
                /* @__PURE__ */ c.jsxs("div", { className: "flex items-center gap-2 text-status-processing", children: [
                  /* @__PURE__ */ c.jsx("div", { className: "ai-spinner" }),
                  /* @__PURE__ */ c.jsx("span", { className: "font-medium", children: e.status === "HANDLE" ? "Queued for AI Processing" : "AI is working on this ticket..." })
                ] }),
                e.status === "AI_PROCESSING" && /* @__PURE__ */ c.jsx("p", { className: "text-sm text-muted-foreground mt-2", children: "The Cursor Agent is implementing this task. Do not modify while processing." })
              ] }),
              e.prLink && !e.agentId && /* @__PURE__ */ c.jsx("div", { className: "mb-4 p-4 rounded-md bg-status-success/10 border border-status-success/20", children: /* @__PURE__ */ c.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ c.jsx("span", { className: "font-medium text-status-success", children: "Pull Request Ready" }),
                /* @__PURE__ */ c.jsx(
                  "a",
                  {
                    href: e.prLink,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "btn btn-primary h-8 px-3 text-sm",
                    children: "View PR →"
                  }
                )
              ] }) }),
              e.aiSummary && !e.agentId && /* @__PURE__ */ c.jsxs("div", { className: "mb-4 p-4 rounded-md bg-muted", children: [
                /* @__PURE__ */ c.jsx("h4", { className: "font-medium mb-2", children: "AI Summary" }),
                /* @__PURE__ */ c.jsx("p", { className: "text-sm text-muted-foreground", children: e.aiSummary })
              ] }),
              /* @__PURE__ */ c.jsxs("div", { className: "form-group", children: [
                /* @__PURE__ */ c.jsx("label", { className: "form-label", children: "Description" }),
                l ? /* @__PURE__ */ c.jsx(
                  "textarea",
                  {
                    className: "form-input",
                    value: a,
                    onChange: (R) => u(R.target.value),
                    rows: 6,
                    placeholder: "Add task details, requirements, acceptance criteria..."
                  }
                ) : /* @__PURE__ */ c.jsx("div", { className: "p-3 rounded-md bg-muted min-h-[100px] text-sm whitespace-pre-wrap", children: e.description || /* @__PURE__ */ c.jsx("span", { className: "text-muted-foreground", children: "No description" }) })
              ] }),
              l && /* @__PURE__ */ c.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
                /* @__PURE__ */ c.jsxs("div", { className: "form-group", children: [
                  /* @__PURE__ */ c.jsx("label", { className: "form-label", children: "Priority" }),
                  /* @__PURE__ */ c.jsxs(
                    "select",
                    {
                      className: "form-input",
                      value: m,
                      onChange: (R) => p(R.target.value),
                      children: [
                        /* @__PURE__ */ c.jsx("option", { value: "LOW", children: "Low" }),
                        /* @__PURE__ */ c.jsx("option", { value: "MEDIUM", children: "Medium" }),
                        /* @__PURE__ */ c.jsx("option", { value: "HIGH", children: "High" }),
                        /* @__PURE__ */ c.jsx("option", { value: "URGENT", children: "Urgent" })
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ c.jsxs("div", { className: "form-group", children: [
                  /* @__PURE__ */ c.jsx("label", { className: "form-label", children: "Status" }),
                  /* @__PURE__ */ c.jsxs(
                    "select",
                    {
                      className: "form-input",
                      value: v,
                      onChange: (R) => y(R.target.value),
                      disabled: C,
                      children: [
                        /* @__PURE__ */ c.jsx("option", { value: "BACKLOG", children: "Backlog" }),
                        /* @__PURE__ */ c.jsx("option", { value: "TODO", children: "To Do" }),
                        /* @__PURE__ */ c.jsx("option", { value: "HANDLE", children: "Handle (AI)" }),
                        /* @__PURE__ */ c.jsx("option", { value: "TO_REVIEW", children: "To Review" }),
                        /* @__PURE__ */ c.jsx("option", { value: "IN_PROGRESS", children: "In Progress" }),
                        /* @__PURE__ */ c.jsx("option", { value: "DONE", children: "Done" })
                      ]
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ c.jsx("div", { className: "mt-6 pt-4 border-t border-border", children: /* @__PURE__ */ c.jsxs("div", { className: "grid grid-cols-2 gap-4 text-sm", children: [
                /* @__PURE__ */ c.jsxs("div", { children: [
                  /* @__PURE__ */ c.jsx("span", { className: "text-muted-foreground", children: "Created:" }),
                  /* @__PURE__ */ c.jsx("span", { className: "ml-2", children: new Date(e.createdAt).toLocaleDateString() })
                ] }),
                /* @__PURE__ */ c.jsxs("div", { children: [
                  /* @__PURE__ */ c.jsx("span", { className: "text-muted-foreground", children: "Updated:" }),
                  /* @__PURE__ */ c.jsx("span", { className: "ml-2", children: new Date(e.updatedAt).toLocaleDateString() })
                ] }),
                e.assignee && /* @__PURE__ */ c.jsxs("div", { children: [
                  /* @__PURE__ */ c.jsx("span", { className: "text-muted-foreground", children: "Assignee:" }),
                  /* @__PURE__ */ c.jsx("span", { className: "ml-2", children: e.assignee.name })
                ] }),
                e.createdBy && /* @__PURE__ */ c.jsxs("div", { children: [
                  /* @__PURE__ */ c.jsx("span", { className: "text-muted-foreground", children: "Created by:" }),
                  /* @__PURE__ */ c.jsx("span", { className: "ml-2", children: e.createdBy.name })
                ] })
              ] }) })
            ] }),
            /* @__PURE__ */ c.jsx("div", { className: "modal-actions", children: l ? /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
              /* @__PURE__ */ c.jsx(
                "button",
                {
                  type: "button",
                  className: "btn btn-destructive",
                  onClick: N,
                  disabled: k,
                  children: "Delete"
                }
              ),
              /* @__PURE__ */ c.jsx("div", { className: "flex-1" }),
              /* @__PURE__ */ c.jsx(
                "button",
                {
                  type: "button",
                  className: "btn btn-secondary",
                  onClick: () => {
                    i(!1), s(e.title), u(e.description || ""), p(e.priority), y(e.status);
                  },
                  disabled: k,
                  children: "Cancel"
                }
              ),
              /* @__PURE__ */ c.jsx(
                "button",
                {
                  type: "button",
                  className: "btn btn-primary",
                  onClick: E,
                  disabled: k,
                  children: k ? "Saving..." : "Save Changes"
                }
              )
            ] }) : /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
              /* @__PURE__ */ c.jsx(
                "button",
                {
                  type: "button",
                  className: "btn btn-secondary",
                  onClick: n,
                  children: "Close"
                }
              ),
              /* @__PURE__ */ c.jsx(
                "button",
                {
                  type: "button",
                  className: "btn btn-primary",
                  onClick: () => i(!0),
                  disabled: C,
                  children: "Edit"
                }
              )
            ] }) })
          ]
        }
      )
    }
  );
}
function Yu() {
  const e = document.querySelector('meta[name="csrf-token"]');
  return (e == null ? void 0 : e.getAttribute("content")) || "";
}
const Tg = [
  { id: "BACKLOG", title: "Backlog", icon: "📋" },
  { id: "TODO", title: "To Do", icon: "📝" },
  { id: "HANDLE", title: "Handle", icon: "🤖" },
  { id: "AI_PROCESSING", title: "AI Processing", icon: "⚡" },
  { id: "TO_REVIEW", title: "To Review", icon: "👀" },
  { id: "IN_PROGRESS", title: "In Progress", icon: "🔧" },
  { id: "DONE", title: "Done", icon: "✅" }
];
function Ig() {
  const [e, t] = g.useState(null), [n, r] = g.useState(null), [l, i] = g.useState(null), [o, s] = g.useState(!1), [a, u] = g.useState("BACKLOG");
  g.useEffect(() => {
    const f = document.getElementById("board-state");
    if (f != null && f.textContent)
      try {
        const h = JSON.parse(f.textContent);
        t(h);
      } catch (h) {
        console.error("Failed to parse board state:", h);
      }
    const d = document.getElementById("new-ticket-btn");
    return d && d.addEventListener("click", () => s(!0)), document.querySelectorAll(".tab-btn").forEach((h) => {
      h.addEventListener("click", (w) => {
        const E = w.target.dataset.column;
        E && (u(E), document.querySelectorAll(".tab-btn").forEach((N) => {
          N.classList.remove("bg-muted"), N.classList.add("hover:bg-muted");
        }), w.target.classList.add("bg-muted"), w.target.classList.remove("hover:bg-muted"));
      });
    }), () => {
      d && d.removeEventListener("click", () => s(!0));
    };
  }, []), g.useEffect(() => {
    if (!(e != null && e.projectId)) return;
    const f = setInterval(async () => {
      var d, h;
      if (!(n || l || o))
        try {
          const w = await fetch(`/project/${e.projectId}/board/state`);
          if (!w.ok) return;
          const E = await w.json();
          (E.tickets.length !== e.tickets.length || E.tickets.some((S) => {
            const C = e.tickets.find((R) => R.id === S.id);
            return !C || C.status !== S.status || C.title !== S.title || C.assigneeId !== S.assigneeId;
          }) || ((d = E.members) == null ? void 0 : d.length) !== ((h = e.members) == null ? void 0 : h.length)) && (t(E), vr("Board updated", "success"));
        } catch (w) {
          console.debug("Sync poll failed:", w);
        }
    }, 5e3);
    return () => clearInterval(f);
  }, [e == null ? void 0 : e.projectId, e == null ? void 0 : e.tickets, n, l, o]);
  const m = Om(
    Mu(ma, {
      activationConstraint: { distance: 8 }
    }),
    Mu(pa, {
      coordinateGetter: fg
    })
  ), p = g.useCallback(
    (f) => {
      const d = f.active.id, h = e == null ? void 0 : e.tickets.find((w) => w.id === d);
      h && r(h);
    },
    [e]
  ), v = g.useCallback((f) => {
  }, []), y = g.useCallback(
    async (f) => {
      const { active: d, over: h } = f;
      if (r(null), !h || !e) return;
      const w = d.id, E = h.id, N = e.tickets.find((S) => S.id === w);
      if (!(!N || N.status === E)) {
        t((S) => S && {
          ...S,
          tickets: S.tickets.map(
            (C) => C.id === w ? { ...C, status: E } : C
          )
        }), E === "HANDLE" && vr(`Ticket #${N.id.slice(-4)} dispatched to Cursor Agent`, "warning");
        try {
          const S = Lg();
          if (!(await fetch(
            `/api/tickets/${e.projectId}/${w}/status`,
            {
              method: "PATCH",
              headers: {
                "Content-Type": "application/json",
                "X-CSRF-Token": S
              },
              body: JSON.stringify({ status: E })
            }
          )).ok)
            throw new Error("Failed to update ticket status");
          E === "HANDLE" && vr("AI agent started processing", "success");
        } catch (S) {
          console.error("Failed to update ticket:", S), vr("Failed to update ticket", "error"), t((C) => C && {
            ...C,
            tickets: C.tickets.map(
              (R) => R.id === w ? { ...R, status: N.status } : R
            )
          });
        }
      }
    },
    [e]
  ), k = g.useCallback((f) => {
    i(f);
  }, []), x = g.useCallback((f) => {
    t((d) => d && {
      ...d,
      tickets: d.tickets.map(
        (h) => h.id === f.id ? f : h
      )
    }), i(null);
  }, []), D = g.useCallback((f) => {
    t((d) => d && {
      ...d,
      tickets: [...d.tickets, f]
    }), s(!1), vr("Ticket created successfully", "success");
  }, []);
  return e ? /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
    /* @__PURE__ */ c.jsxs(
      _v,
      {
        sensors: m,
        collisionDetection: mf,
        onDragStart: p,
        onDragOver: v,
        onDragEnd: y,
        children: [
          /* @__PURE__ */ c.jsx("div", { className: "kanban-container", children: Tg.map((f) => /* @__PURE__ */ c.jsx(
            yg,
            {
              id: f.id,
              title: f.title,
              icon: f.icon,
              tickets: e.tickets.filter((d) => d.status === f.id),
              isActive: a === f.id,
              onTicketClick: k
            },
            f.id
          )) }),
          /* @__PURE__ */ c.jsx(Yv, { children: n ? /* @__PURE__ */ c.jsx(
            Uf,
            {
              ticket: n,
              isDragging: !0,
              onClick: () => {
              }
            }
          ) : null })
        ]
      }
    ),
    o && /* @__PURE__ */ c.jsx(
      kg,
      {
        projectId: e.projectId,
        projectName: e.projectName,
        branchPresets: e.branchPresets || [],
        defaultBranch: e.defaultBranch || "main",
        members: e.members || [],
        onClose: () => s(!1),
        onSubmit: D
      }
    ),
    l && /* @__PURE__ */ c.jsx(
      Dg,
      {
        ticket: l,
        projectId: e.projectId,
        onClose: () => i(null),
        onUpdate: x
      }
    )
  ] }) : /* @__PURE__ */ c.jsx("div", { className: "flex items-center justify-center h-full", children: /* @__PURE__ */ c.jsx("div", { className: "ai-spinner" }) });
}
function Lg() {
  const e = document.querySelector('meta[name="csrf-token"]');
  return (e == null ? void 0 : e.getAttribute("content")) || "";
}
function vr(e, t = "success") {
  typeof window < "u" && window.showToast && window.showToast(e, t);
}
function Ju() {
  const e = document.getElementById("kanban-board");
  if (!e) {
    console.warn("Kanban board container not found");
    return;
  }
  xo.createRoot(e).render(
    /* @__PURE__ */ c.jsx(K.StrictMode, { children: /* @__PURE__ */ c.jsx(Ig, {}) })
  );
}
document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", Ju) : Ju();
