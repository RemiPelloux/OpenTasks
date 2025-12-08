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
var qr = Symbol.for("react.element"), Gf = Symbol.for("react.portal"), Yf = Symbol.for("react.fragment"), Jf = Symbol.for("react.strict_mode"), Zf = Symbol.for("react.profiler"), qf = Symbol.for("react.provider"), ep = Symbol.for("react.context"), tp = Symbol.for("react.forward_ref"), np = Symbol.for("react.suspense"), rp = Symbol.for("react.memo"), lp = Symbol.for("react.lazy"), ja = Symbol.iterator;
function ip(e) {
  return e === null || typeof e != "object" ? null : (e = ja && e[ja] || e["@@iterator"], typeof e == "function" ? e : null);
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
function gs(e, t, n) {
  this.props = e, this.context = t, this.refs = nc, this.updater = n || ec;
}
var ys = gs.prototype = new rc();
ys.constructor = gs;
tc(ys, Jn.prototype);
ys.isPureReactComponent = !0;
var Ra = Array.isArray, lc = Object.prototype.hasOwnProperty, ws = { current: null }, ic = { key: !0, ref: !0, __self: !0, __source: !0 };
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
  return { $$typeof: qr, type: e, key: i, ref: o, props: l, _owner: ws.current };
}
function op(e, t) {
  return { $$typeof: qr, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function xs(e) {
  return typeof e == "object" && e !== null && e.$$typeof === qr;
}
function sp(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var Da = /\/+/g;
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
  if (o) return o = e, l = l(o), e = r === "" ? "." + bi(o, 0) : r, Ra(l) ? (n = "", e != null && (n = e.replace(Da, "$&/") + "/"), Tl(l, t, n, "", function(u) {
    return u;
  })) : l != null && (xs(l) && (l = op(l, n + (!l.key || o && o.key === l.key ? "" : ("" + l.key).replace(Da, "$&/") + "/") + e)), t.push(l)), 1;
  if (o = 0, r = r === "" ? "." : r + ":", Ra(e)) for (var s = 0; s < e.length; s++) {
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
var Ne = { current: null }, Il = { transition: null }, up = { ReactCurrentDispatcher: Ne, ReactCurrentBatchConfig: Il, ReactCurrentOwner: ws };
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
  if (!xs(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
z.Component = Jn;
z.Fragment = Yf;
z.Profiler = Zf;
z.PureComponent = gs;
z.StrictMode = Jf;
z.Suspense = np;
z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = up;
z.act = sc;
z.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = tc({}, e.props), l = e.key, i = e.ref, o = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, o = ws.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps) var s = e.type.defaultProps;
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
z.isValidElement = xs;
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
const G = /* @__PURE__ */ Xf(g);
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
var c = Zu.exports, So = {}, uc = { exports: {} }, $e = {}, cc = { exports: {} }, dc = {};
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
  function t(I, O) {
    var M = I.length;
    I.push(O);
    e: for (; 0 < M; ) {
      var b = M - 1 >>> 1, U = I[b];
      if (0 < l(U, O)) I[b] = O, I[M] = U, M = b;
      else break e;
    }
  }
  function n(I) {
    return I.length === 0 ? null : I[0];
  }
  function r(I) {
    if (I.length === 0) return null;
    var O = I[0], M = I.pop();
    if (M !== O) {
      I[0] = M;
      e: for (var b = 0, U = I.length, ge = U >>> 1; b < ge; ) {
        var ie = 2 * (b + 1) - 1, T = I[ie], A = ie + 1, oe = I[A];
        if (0 > l(T, M)) A < U && 0 > l(oe, T) ? (I[b] = oe, I[A] = M, b = A) : (I[b] = T, I[ie] = M, b = ie);
        else if (A < U && 0 > l(oe, M)) I[b] = oe, I[A] = M, b = A;
        else break e;
      }
    }
    return O;
  }
  function l(I, O) {
    var M = I.sortIndex - O.sortIndex;
    return M !== 0 ? M : I.id - O.id;
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
  var a = [], u = [], m = 1, h = null, v = 3, y = !1, k = !1, x = !1, R = typeof setTimeout == "function" ? setTimeout : null, f = typeof clearTimeout == "function" ? clearTimeout : null, d = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(I) {
    for (var O = n(u); O !== null; ) {
      if (O.callback === null) r(u);
      else if (O.startTime <= I) r(u), O.sortIndex = O.expirationTime, t(a, O);
      else break;
      O = n(u);
    }
  }
  function w(I) {
    if (x = !1, p(I), !k) if (n(a) !== null) k = !0, st(S);
    else {
      var O = n(u);
      O !== null && te(w, O.startTime - I);
    }
  }
  function S(I, O) {
    k = !1, x && (x = !1, f(E), E = -1), y = !0;
    var M = v;
    try {
      for (p(O), h = n(a); h !== null && (!(h.expirationTime > O) || I && !P()); ) {
        var b = h.callback;
        if (typeof b == "function") {
          h.callback = null, v = h.priorityLevel;
          var U = b(h.expirationTime <= O);
          O = e.unstable_now(), typeof U == "function" ? h.callback = U : h === n(a) && r(a), p(O);
        } else r(a);
        h = n(a);
      }
      if (h !== null) var ge = !0;
      else {
        var ie = n(u);
        ie !== null && te(w, ie.startTime - O), ge = !1;
      }
      return ge;
    } finally {
      h = null, v = M, y = !1;
    }
  }
  var N = !1, C = null, E = -1, D = 5, L = -1;
  function P() {
    return !(e.unstable_now() - L < D);
  }
  function F() {
    if (C !== null) {
      var I = e.unstable_now();
      L = I;
      var O = !0;
      try {
        O = C(!0, I);
      } finally {
        O ? H() : (N = !1, C = null);
      }
    } else N = !1;
  }
  var H;
  if (typeof d == "function") H = function() {
    d(F);
  };
  else if (typeof MessageChannel < "u") {
    var re = new MessageChannel(), vt = re.port2;
    re.port1.onmessage = F, H = function() {
      vt.postMessage(null);
    };
  } else H = function() {
    R(F, 0);
  };
  function st(I) {
    C = I, N || (N = !0, H());
  }
  function te(I, O) {
    E = R(function() {
      I(e.unstable_now());
    }, O);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(I) {
    I.callback = null;
  }, e.unstable_continueExecution = function() {
    k || y || (k = !0, st(S));
  }, e.unstable_forceFrameRate = function(I) {
    0 > I || 125 < I ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : D = 0 < I ? Math.floor(1e3 / I) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return v;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(a);
  }, e.unstable_next = function(I) {
    switch (v) {
      case 1:
      case 2:
      case 3:
        var O = 3;
        break;
      default:
        O = v;
    }
    var M = v;
    v = O;
    try {
      return I();
    } finally {
      v = M;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(I, O) {
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
    var M = v;
    v = I;
    try {
      return O();
    } finally {
      v = M;
    }
  }, e.unstable_scheduleCallback = function(I, O, M) {
    var b = e.unstable_now();
    switch (typeof M == "object" && M !== null ? (M = M.delay, M = typeof M == "number" && 0 < M ? b + M : b) : M = b, I) {
      case 1:
        var U = -1;
        break;
      case 2:
        U = 250;
        break;
      case 5:
        U = 1073741823;
        break;
      case 4:
        U = 1e4;
        break;
      default:
        U = 5e3;
    }
    return U = M + U, I = { id: m++, callback: O, priorityLevel: I, startTime: M, expirationTime: U, sortIndex: -1 }, M > b ? (I.sortIndex = M, t(u, I), n(a) === null && I === n(u) && (x ? (f(E), E = -1) : x = !0, te(w, M - b))) : (I.sortIndex = U, t(a, I), k || y || (k = !0, st(S))), I;
  }, e.unstable_shouldYield = P, e.unstable_wrapCallback = function(I) {
    var O = v;
    return function() {
      var M = v;
      v = O;
      try {
        return I.apply(this, arguments);
      } finally {
        v = M;
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
var Et = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ko = Object.prototype.hasOwnProperty, yp = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Ta = {}, Ia = {};
function wp(e) {
  return ko.call(Ia, e) ? !0 : ko.call(Ta, e) ? !1 : yp.test(e) ? Ia[e] = !0 : (Ta[e] = !0, !1);
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
var ve = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  ve[e] = new je(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  ve[t] = new je(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  ve[e] = new je(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  ve[e] = new je(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  ve[e] = new je(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  ve[e] = new je(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  ve[e] = new je(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  ve[e] = new je(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  ve[e] = new je(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Ss = /[\-:]([a-z])/g;
function ks(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Ss,
    ks
  );
  ve[t] = new je(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Ss, ks);
  ve[t] = new je(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Ss, ks);
  ve[t] = new je(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  ve[e] = new je(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ve.xlinkHref = new je("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  ve[e] = new je(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Cs(e, t, n, r) {
  var l = ve.hasOwnProperty(t) ? ve[t] : null;
  (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Sp(t, n, l, r) && (n = null), r || l === null ? wp(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Dt = gp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, dl = Symbol.for("react.element"), En = Symbol.for("react.portal"), Nn = Symbol.for("react.fragment"), Es = Symbol.for("react.strict_mode"), Co = Symbol.for("react.profiler"), pc = Symbol.for("react.provider"), hc = Symbol.for("react.context"), Ns = Symbol.for("react.forward_ref"), Eo = Symbol.for("react.suspense"), No = Symbol.for("react.suspense_list"), js = Symbol.for("react.memo"), Mt = Symbol.for("react.lazy"), mc = Symbol.for("react.offscreen"), La = Symbol.iterator;
function ar(e) {
  return e === null || typeof e != "object" ? null : (e = La && e[La] || e["@@iterator"], typeof e == "function" ? e : null);
}
var q = Object.assign, Vi;
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
function jo(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Nn:
      return "Fragment";
    case En:
      return "Portal";
    case Co:
      return "Profiler";
    case Es:
      return "StrictMode";
    case Eo:
      return "Suspense";
    case No:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case hc:
      return (e.displayName || "Context") + ".Consumer";
    case pc:
      return (e._context.displayName || "Context") + ".Provider";
    case Ns:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case js:
      return t = e.displayName || null, t !== null ? t : jo(e.type) || "Memo";
    case Mt:
      t = e._payload, e = e._init;
      try {
        return jo(e(t));
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
      return jo(t);
    case 8:
      return t === Es ? "StrictMode" : "Mode";
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
function Ro(e, t) {
  var n = t.checked;
  return q({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function _a(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = Yt(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function yc(e, t) {
  t = t.checked, t != null && Cs(e, "checked", t, !1);
}
function Do(e, t) {
  yc(e, t);
  var n = Yt(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? To(e, t.type, n) : t.hasOwnProperty("defaultValue") && To(e, t.type, Yt(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Pa(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function To(e, t, n) {
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
function Io(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(j(91));
  return q({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Oa(e, t) {
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
function Ma(e) {
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
function Lo(e, t) {
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
var jp = q({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function _o(e, t) {
  if (t) {
    if (jp[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(j(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(j(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(j(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(j(62));
  }
}
function Po(e, t) {
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
var Oo = null;
function Rs(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Mo = null, Fn = null, Un = null;
function Aa(e) {
  if (e = nl(e)) {
    if (typeof Mo != "function") throw Error(j(280));
    var t = e.stateNode;
    t && (t = Ci(t), Mo(e.stateNode, e.type, t));
  }
}
function Ec(e) {
  Fn ? Un ? Un.push(e) : Un = [e] : Fn = e;
}
function Nc() {
  if (Fn) {
    var e = Fn, t = Un;
    if (Un = Fn = null, Aa(e), t) for (e = 0; e < t.length; e++) Aa(t[e]);
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
var Ao = !1;
if (Et) try {
  var ur = {};
  Object.defineProperty(ur, "passive", { get: function() {
    Ao = !0;
  } }), window.addEventListener("test", ur, ur), window.removeEventListener("test", ur, ur);
} catch {
  Ao = !1;
}
function Rp(e, t, n, r, l, i, o, s, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (m) {
    this.onError(m);
  }
}
var kr = !1, bl = null, Vl = !1, zo = null, Dp = { onError: function(e) {
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
    Vl || (Vl = !0, zo = u);
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
function za(e) {
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
        if (i === n) return za(l), e;
        if (i === r) return za(l), t;
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
var _c = Be.unstable_scheduleCallback, Fa = Be.unstable_cancelCallback, _p = Be.unstable_shouldYield, Pp = Be.unstable_requestPaint, ne = Be.unstable_now, Op = Be.unstable_getCurrentPriorityLevel, Ds = Be.unstable_ImmediatePriority, Pc = Be.unstable_UserBlockingPriority, Wl = Be.unstable_NormalPriority, Mp = Be.unstable_LowPriority, Oc = Be.unstable_IdlePriority, wi = null, ht = null;
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
function Fo(e) {
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
function Ts(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - nt(n), l = 1 << r;
    l & t | e[r] & t && (e[r] |= t), n &= ~l;
  }
}
var W = 0;
function Ac(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var zc, Is, Fc, Uc, Bc, Uo = !1, vl = [], Ht = null, bt = null, Vt = null, Ar = /* @__PURE__ */ new Map(), zr = /* @__PURE__ */ new Map(), Ft = [], bp = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Ua(e, t) {
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
  return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [l] }, t !== null && (t = nl(t), t !== null && Is(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
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
    var n = Bo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      Oo = r, n.target.dispatchEvent(r), Oo = null;
    } else return t = nl(n), t !== null && Is(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function Ba(e, t, n) {
  Ll(e) && n.delete(t);
}
function Wp() {
  Uo = !1, Ht !== null && Ll(Ht) && (Ht = null), bt !== null && Ll(bt) && (bt = null), Vt !== null && Ll(Vt) && (Vt = null), Ar.forEach(Ba), zr.forEach(Ba);
}
function dr(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Uo || (Uo = !0, Be.unstable_scheduleCallback(Be.unstable_NormalPriority, Wp)));
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
  var l = W, i = Bn.transition;
  Bn.transition = null;
  try {
    W = 1, Ls(e, t, n, r);
  } finally {
    W = l, Bn.transition = i;
  }
}
function Kp(e, t, n, r) {
  var l = W, i = Bn.transition;
  Bn.transition = null;
  try {
    W = 4, Ls(e, t, n, r);
  } finally {
    W = l, Bn.transition = i;
  }
}
function Ls(e, t, n, r) {
  if (Kl) {
    var l = Bo(e, t, n, r);
    if (l === null) lo(e, t, r, Xl, n), Ua(e, r);
    else if (Vp(l, e, t, n, r)) r.stopPropagation();
    else if (Ua(e, r), t & 4 && -1 < bp.indexOf(e)) {
      for (; l !== null; ) {
        var i = nl(l);
        if (i !== null && zc(i), i = Bo(e, t, n, r), i === null && lo(e, t, r, Xl, n), i === l) break;
        l = i;
      }
      l !== null && r.stopPropagation();
    } else lo(e, t, r, null, n);
  }
}
var Xl = null;
function Bo(e, t, n, r) {
  if (Xl = null, e = Rs(r), e = ln(e), e !== null) if (t = vn(e), t === null) e = null;
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
        case Ds:
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
var Bt = null, _s = null, _l = null;
function bc() {
  if (_l) return _l;
  var e, t = _s, n = t.length, r, l = "value" in Bt ? Bt.value : Bt.textContent, i = l.length;
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
function $a() {
  return !1;
}
function He(e) {
  function t(n, r, l, i, o) {
    this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = i, this.target = o, this.currentTarget = null;
    for (var s in e) e.hasOwnProperty(s) && (n = e[s], this[s] = n ? n(i) : i[s]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? gl : $a, this.isPropagationStopped = $a, this;
  }
  return q(t.prototype, { preventDefault: function() {
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
}, defaultPrevented: 0, isTrusted: 0 }, Ps = He(Zn), tl = q({}, Zn, { view: 0, detail: 0 }), Xp = He(tl), Gi, Yi, fr, xi = q({}, tl, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Os, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== fr && (fr && e.type === "mousemove" ? (Gi = e.screenX - fr.screenX, Yi = e.screenY - fr.screenY) : Yi = Gi = 0, fr = e), Gi);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Yi;
} }), Ha = He(xi), Gp = q({}, xi, { dataTransfer: 0 }), Yp = He(Gp), Jp = q({}, tl, { relatedTarget: 0 }), Ji = He(Jp), Zp = q({}, Zn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), qp = He(Zp), eh = q({}, Zn, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), th = He(eh), nh = q({}, Zn, { data: 0 }), ba = He(nh), rh = {
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
function Os() {
  return oh;
}
var sh = q({}, tl, { key: function(e) {
  if (e.key) {
    var t = rh[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = Pl(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? lh[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Os, charCode: function(e) {
  return e.type === "keypress" ? Pl(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Pl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), ah = He(sh), uh = q({}, xi, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Va = He(uh), ch = q({}, tl, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Os }), dh = He(ch), fh = q({}, Zn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), ph = He(fh), hh = q({}, xi, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), mh = He(hh), vh = [9, 13, 27, 32], Ms = Et && "CompositionEvent" in window, Cr = null;
Et && "documentMode" in document && (Cr = document.documentMode);
var gh = Et && "TextEvent" in window && !Cr, Vc = Et && (!Ms || Cr && 8 < Cr && 11 >= Cr), Wa = " ", Qa = !1;
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
      return t.which !== 32 ? null : (Qa = !0, Wa);
    case "textInput":
      return e = t.data, e === Wa && Qa ? null : e;
    default:
      return null;
  }
}
function wh(e, t) {
  if (jn) return e === "compositionend" || !Ms && Wc(e, t) ? (e = bc(), _l = _s = Bt = null, jn = !1, e) : null;
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
function Ka(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!xh[e.type] : t === "textarea";
}
function Kc(e, t, n, r) {
  Ec(r), t = Gl(t, "onChange"), 0 < t.length && (n = new Ps("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
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
      var Xa = document.createElement("div");
      Xa.setAttribute("oninput", "return;"), qi = typeof Xa.oninput == "function";
    }
    Zi = qi;
  } else Zi = !1;
  Xc = Zi && (!document.documentMode || 9 < document.documentMode);
}
function Ga() {
  Er && (Er.detachEvent("onpropertychange", Gc), Ur = Er = null);
}
function Gc(e) {
  if (e.propertyName === "value" && Si(Ur)) {
    var t = [];
    Kc(t, Ur, e, Rs(e)), Dc(Sh, t);
  }
}
function Ch(e, t, n) {
  e === "focusin" ? (Ga(), Er = t, Ur = n, Er.attachEvent("onpropertychange", Gc)) : e === "focusout" && Ga();
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
    if (!ko.call(t, l) || !lt(e[l], t[l])) return !1;
  }
  return !0;
}
function Ya(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Ja(e, t) {
  var n = Ya(e);
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
    n = Ya(n);
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
function As(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function Dh(e) {
  var t = Jc(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Yc(n.ownerDocument.documentElement, n)) {
    if (r !== null && As(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var l = n.textContent.length, i = Math.min(r.start, l);
        r = r.end === void 0 ? i : Math.min(r.end, l), !e.extend && i > r && (l = r, r = i, i = l), l = Ja(n, i);
        var o = Ja(
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
var Th = Et && "documentMode" in document && 11 >= document.documentMode, Rn = null, $o = null, Nr = null, Ho = !1;
function Za(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Ho || Rn == null || Rn !== Hl(r) || (r = Rn, "selectionStart" in r && As(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Nr && Br(Nr, r) || (Nr = r, r = Gl($o, "onSelect"), 0 < r.length && (t = new Ps("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Rn)));
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
var qc = ki("animationend"), ed = ki("animationiteration"), td = ki("animationstart"), nd = ki("transitionend"), rd = /* @__PURE__ */ new Map(), qa = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function qt(e, t) {
  rd.set(e, t), mn(t, [e]);
}
for (var to = 0; to < qa.length; to++) {
  var no = qa[to], Ih = no.toLowerCase(), Lh = no[0].toUpperCase() + no.slice(1);
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
function eu(e, t, n) {
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
        eu(l, s, u), i = a;
      }
      else for (o = 0; o < r.length; o++) {
        if (s = r[o], a = s.instance, u = s.currentTarget, s = s.listener, a !== i && l.isPropagationStopped()) break e;
        eu(l, s, u), i = a;
      }
    }
  }
  if (Vl) throw e = zo, Vl = !1, zo = null, e;
}
function K(e, t) {
  var n = t[Ko];
  n === void 0 && (n = t[Ko] = /* @__PURE__ */ new Set());
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
      l = Ls;
  }
  n = l.bind(null, t, n, e), l = void 0, !Ao || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
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
    var u = i, m = Rs(n), h = [];
    e: {
      var v = rd.get(e);
      if (v !== void 0) {
        var y = Ps, k = e;
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
            y = Ha;
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
            y = Va;
        }
        var x = (t & 4) !== 0, R = !x && e === "scroll", f = x ? v !== null ? v + "Capture" : null : v;
        x = [];
        for (var d = u, p; d !== null; ) {
          p = d;
          var w = p.stateNode;
          if (p.tag === 5 && w !== null && (p = w, f !== null && (w = Mr(d, f), w != null && x.push(Hr(d, w, p)))), R) break;
          d = d.return;
        }
        0 < x.length && (v = new y(v, k, null, n, m), h.push({ event: v, listeners: x }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (v = e === "mouseover" || e === "pointerover", y = e === "mouseout" || e === "pointerout", v && n !== Oo && (k = n.relatedTarget || n.fromElement) && (ln(k) || k[Nt])) break e;
        if ((y || v) && (v = m.window === m ? m : (v = m.ownerDocument) ? v.defaultView || v.parentWindow : window, y ? (k = n.relatedTarget || n.toElement, y = u, k = k ? ln(k) : null, k !== null && (R = vn(k), k !== R || k.tag !== 5 && k.tag !== 6) && (k = null)) : (y = null, k = u), y !== k)) {
          if (x = Ha, w = "onMouseLeave", f = "onMouseEnter", d = "mouse", (e === "pointerout" || e === "pointerover") && (x = Va, w = "onPointerLeave", f = "onPointerEnter", d = "pointer"), R = y == null ? v : Tn(y), p = k == null ? v : Tn(k), v = new x(w, d + "leave", y, n, m), v.target = R, v.relatedTarget = p, w = null, ln(m) === u && (x = new x(f, d + "enter", k, n, m), x.target = p, x.relatedTarget = R, w = x), R = w, y && k) t: {
            for (x = y, f = k, d = 0, p = x; p; p = Cn(p)) d++;
            for (p = 0, w = f; w; w = Cn(w)) p++;
            for (; 0 < d - p; ) x = Cn(x), d--;
            for (; 0 < p - d; ) f = Cn(f), p--;
            for (; d--; ) {
              if (x === f || f !== null && x === f.alternate) break t;
              x = Cn(x), f = Cn(f);
            }
            x = null;
          }
          else x = null;
          y !== null && tu(h, v, y, x, !1), k !== null && R !== null && tu(h, R, k, x, !0);
        }
      }
      e: {
        if (v = u ? Tn(u) : window, y = v.nodeName && v.nodeName.toLowerCase(), y === "select" || y === "input" && v.type === "file") var S = kh;
        else if (Ka(v)) if (Xc) S = jh;
        else {
          S = Eh;
          var N = Ch;
        }
        else (y = v.nodeName) && y.toLowerCase() === "input" && (v.type === "checkbox" || v.type === "radio") && (S = Nh);
        if (S && (S = S(e, u))) {
          Kc(h, S, n, m);
          break e;
        }
        N && N(e, v, u), e === "focusout" && (N = v._wrapperState) && N.controlled && v.type === "number" && To(v, "number", v.value);
      }
      switch (N = u ? Tn(u) : window, e) {
        case "focusin":
          (Ka(N) || N.contentEditable === "true") && (Rn = N, $o = u, Nr = null);
          break;
        case "focusout":
          Nr = $o = Rn = null;
          break;
        case "mousedown":
          Ho = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Ho = !1, Za(h, n, m);
          break;
        case "selectionchange":
          if (Th) break;
        case "keydown":
        case "keyup":
          Za(h, n, m);
      }
      var C;
      if (Ms) e: {
        switch (e) {
          case "compositionstart":
            var E = "onCompositionStart";
            break e;
          case "compositionend":
            E = "onCompositionEnd";
            break e;
          case "compositionupdate":
            E = "onCompositionUpdate";
            break e;
        }
        E = void 0;
      }
      else jn ? Wc(e, n) && (E = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (E = "onCompositionStart");
      E && (Vc && n.locale !== "ko" && (jn || E !== "onCompositionStart" ? E === "onCompositionEnd" && jn && (C = bc()) : (Bt = m, _s = "value" in Bt ? Bt.value : Bt.textContent, jn = !0)), N = Gl(u, E), 0 < N.length && (E = new ba(E, e, null, n, m), h.push({ event: E, listeners: N }), C ? E.data = C : (C = Qc(n), C !== null && (E.data = C)))), (C = gh ? yh(e, n) : wh(e, n)) && (u = Gl(u, "onBeforeInput"), 0 < u.length && (m = new ba("onBeforeInput", "beforeinput", null, n, m), h.push({ event: m, listeners: u }), m.data = C));
    }
    ld(h, t);
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
function tu(e, t, n, r, l) {
  for (var i = t._reactName, o = []; n !== null && n !== r; ) {
    var s = n, a = s.alternate, u = s.stateNode;
    if (a !== null && a === r) break;
    s.tag === 5 && u !== null && (s = u, l ? (a = Mr(n, i), a != null && o.unshift(Hr(n, a, s))) : l || (a = Mr(n, i), a != null && o.push(Hr(n, a, s)))), n = n.return;
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var Ph = /\r\n?/g, Oh = /\u0000|\uFFFD/g;
function nu(e) {
  return (typeof e == "string" ? e : "" + e).replace(Ph, `
`).replace(Oh, "");
}
function xl(e, t, n) {
  if (t = nu(t), nu(e) !== t && n) throw Error(j(425));
}
function Yl() {
}
var bo = null, Vo = null;
function Wo(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Qo = typeof setTimeout == "function" ? setTimeout : void 0, Mh = typeof clearTimeout == "function" ? clearTimeout : void 0, ru = typeof Promise == "function" ? Promise : void 0, Ah = typeof queueMicrotask == "function" ? queueMicrotask : typeof ru < "u" ? function(e) {
  return ru.resolve(null).then(e).catch(zh);
} : Qo;
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
function lu(e) {
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
var qn = Math.random().toString(36).slice(2), pt = "__reactFiber$" + qn, br = "__reactProps$" + qn, Nt = "__reactContainer$" + qn, Ko = "__reactEvents$" + qn, Fh = "__reactListeners$" + qn, Uh = "__reactHandles$" + qn;
function ln(e) {
  var t = e[pt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[Nt] || n[pt]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = lu(e); e !== null; ) {
        if (n = e[pt]) return n;
        e = lu(e);
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
var Xo = [], In = -1;
function en(e) {
  return { current: e };
}
function X(e) {
  0 > In || (e.current = Xo[In], Xo[In] = null, In--);
}
function Q(e, t) {
  In++, Xo[In] = e.current, e.current = t;
}
var Jt = {}, ke = en(Jt), Le = en(!1), cn = Jt;
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
  X(Le), X(ke);
}
function iu(e, t, n) {
  if (ke.current !== Jt) throw Error(j(168));
  Q(ke, t), Q(Le, n);
}
function od(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(j(108, Cp(e) || "Unknown", l));
  return q({}, n, r);
}
function Zl(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Jt, cn = ke.current, Q(ke, e), Q(Le, Le.current), !0;
}
function ou(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(j(169));
  n ? (e = od(e, t, cn), r.__reactInternalMemoizedMergedChildContext = e, X(Le), X(ke), Q(ke, e)) : X(Le), Q(Le, n);
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
    var e = 0, t = W;
    try {
      var n = xt;
      for (W = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      xt = null, Ei = !1;
    } catch (l) {
      throw xt !== null && (xt = xt.slice(e + 1)), _c(Ds, tn), l;
    } finally {
      W = t, oo = !1;
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
function zs(e) {
  e.return !== null && (nn(e, 1), ad(e, 1, 0));
}
function Fs(e) {
  for (; e === ql; ) ql = Ln[--_n], Ln[_n] = null, ei = Ln[--_n], Ln[_n] = null;
  for (; e === dn; ) dn = We[--Qe], We[Qe] = null, kt = We[--Qe], We[Qe] = null, St = We[--Qe], We[Qe] = null;
}
var Ue = null, Fe = null, Y = !1, tt = null;
function ud(e, t) {
  var n = Ke(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function su(e, t) {
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
function Go(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Yo(e) {
  if (Y) {
    var t = Fe;
    if (t) {
      var n = t;
      if (!su(e, t)) {
        if (Go(e)) throw Error(j(418));
        t = Wt(n.nextSibling);
        var r = Ue;
        t && su(e, t) ? ud(r, n) : (e.flags = e.flags & -4097 | 2, Y = !1, Ue = e);
      }
    } else {
      if (Go(e)) throw Error(j(418));
      e.flags = e.flags & -4097 | 2, Y = !1, Ue = e;
    }
  }
}
function au(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  Ue = e;
}
function Sl(e) {
  if (e !== Ue) return !1;
  if (!Y) return au(e), Y = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Wo(e.type, e.memoizedProps)), t && (t = Fe)) {
    if (Go(e)) throw cd(), Error(j(418));
    for (; t; ) ud(e, t), t = Wt(t.nextSibling);
  }
  if (au(e), e.tag === 13) {
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
  Fe = Ue = null, Y = !1;
}
function Us(e) {
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
function uu(e) {
  var t = e._init;
  return t(e._payload);
}
function dd(e) {
  function t(f, d) {
    if (e) {
      var p = f.deletions;
      p === null ? (f.deletions = [d], f.flags |= 16) : p.push(d);
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
  function i(f, d, p) {
    return f.index = p, e ? (p = f.alternate, p !== null ? (p = p.index, p < d ? (f.flags |= 2, d) : p) : (f.flags |= 2, d)) : (f.flags |= 1048576, d);
  }
  function o(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function s(f, d, p, w) {
    return d === null || d.tag !== 6 ? (d = ho(p, f.mode, w), d.return = f, d) : (d = l(d, p), d.return = f, d);
  }
  function a(f, d, p, w) {
    var S = p.type;
    return S === Nn ? m(f, d, p.props.children, w, p.key) : d !== null && (d.elementType === S || typeof S == "object" && S !== null && S.$$typeof === Mt && uu(S) === d.type) ? (w = l(d, p.props), w.ref = pr(f, d, p), w.return = f, w) : (w = Bl(p.type, p.key, p.props, null, f.mode, w), w.ref = pr(f, d, p), w.return = f, w);
  }
  function u(f, d, p, w) {
    return d === null || d.tag !== 4 || d.stateNode.containerInfo !== p.containerInfo || d.stateNode.implementation !== p.implementation ? (d = mo(p, f.mode, w), d.return = f, d) : (d = l(d, p.children || []), d.return = f, d);
  }
  function m(f, d, p, w, S) {
    return d === null || d.tag !== 7 ? (d = un(p, f.mode, w, S), d.return = f, d) : (d = l(d, p), d.return = f, d);
  }
  function h(f, d, p) {
    if (typeof d == "string" && d !== "" || typeof d == "number") return d = ho("" + d, f.mode, p), d.return = f, d;
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case dl:
          return p = Bl(d.type, d.key, d.props, null, f.mode, p), p.ref = pr(f, null, d), p.return = f, p;
        case En:
          return d = mo(d, f.mode, p), d.return = f, d;
        case Mt:
          var w = d._init;
          return h(f, w(d._payload), p);
      }
      if (yr(d) || ar(d)) return d = un(d, f.mode, p, null), d.return = f, d;
      kl(f, d);
    }
    return null;
  }
  function v(f, d, p, w) {
    var S = d !== null ? d.key : null;
    if (typeof p == "string" && p !== "" || typeof p == "number") return S !== null ? null : s(f, d, "" + p, w);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case dl:
          return p.key === S ? a(f, d, p, w) : null;
        case En:
          return p.key === S ? u(f, d, p, w) : null;
        case Mt:
          return S = p._init, v(
            f,
            d,
            S(p._payload),
            w
          );
      }
      if (yr(p) || ar(p)) return S !== null ? null : m(f, d, p, w, null);
      kl(f, p);
    }
    return null;
  }
  function y(f, d, p, w, S) {
    if (typeof w == "string" && w !== "" || typeof w == "number") return f = f.get(p) || null, s(d, f, "" + w, S);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case dl:
          return f = f.get(w.key === null ? p : w.key) || null, a(d, f, w, S);
        case En:
          return f = f.get(w.key === null ? p : w.key) || null, u(d, f, w, S);
        case Mt:
          var N = w._init;
          return y(f, d, p, N(w._payload), S);
      }
      if (yr(w) || ar(w)) return f = f.get(p) || null, m(d, f, w, S, null);
      kl(d, w);
    }
    return null;
  }
  function k(f, d, p, w) {
    for (var S = null, N = null, C = d, E = d = 0, D = null; C !== null && E < p.length; E++) {
      C.index > E ? (D = C, C = null) : D = C.sibling;
      var L = v(f, C, p[E], w);
      if (L === null) {
        C === null && (C = D);
        break;
      }
      e && C && L.alternate === null && t(f, C), d = i(L, d, E), N === null ? S = L : N.sibling = L, N = L, C = D;
    }
    if (E === p.length) return n(f, C), Y && nn(f, E), S;
    if (C === null) {
      for (; E < p.length; E++) C = h(f, p[E], w), C !== null && (d = i(C, d, E), N === null ? S = C : N.sibling = C, N = C);
      return Y && nn(f, E), S;
    }
    for (C = r(f, C); E < p.length; E++) D = y(C, f, E, p[E], w), D !== null && (e && D.alternate !== null && C.delete(D.key === null ? E : D.key), d = i(D, d, E), N === null ? S = D : N.sibling = D, N = D);
    return e && C.forEach(function(P) {
      return t(f, P);
    }), Y && nn(f, E), S;
  }
  function x(f, d, p, w) {
    var S = ar(p);
    if (typeof S != "function") throw Error(j(150));
    if (p = S.call(p), p == null) throw Error(j(151));
    for (var N = S = null, C = d, E = d = 0, D = null, L = p.next(); C !== null && !L.done; E++, L = p.next()) {
      C.index > E ? (D = C, C = null) : D = C.sibling;
      var P = v(f, C, L.value, w);
      if (P === null) {
        C === null && (C = D);
        break;
      }
      e && C && P.alternate === null && t(f, C), d = i(P, d, E), N === null ? S = P : N.sibling = P, N = P, C = D;
    }
    if (L.done) return n(
      f,
      C
    ), Y && nn(f, E), S;
    if (C === null) {
      for (; !L.done; E++, L = p.next()) L = h(f, L.value, w), L !== null && (d = i(L, d, E), N === null ? S = L : N.sibling = L, N = L);
      return Y && nn(f, E), S;
    }
    for (C = r(f, C); !L.done; E++, L = p.next()) L = y(C, f, E, L.value, w), L !== null && (e && L.alternate !== null && C.delete(L.key === null ? E : L.key), d = i(L, d, E), N === null ? S = L : N.sibling = L, N = L);
    return e && C.forEach(function(F) {
      return t(f, F);
    }), Y && nn(f, E), S;
  }
  function R(f, d, p, w) {
    if (typeof p == "object" && p !== null && p.type === Nn && p.key === null && (p = p.props.children), typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case dl:
          e: {
            for (var S = p.key, N = d; N !== null; ) {
              if (N.key === S) {
                if (S = p.type, S === Nn) {
                  if (N.tag === 7) {
                    n(f, N.sibling), d = l(N, p.props.children), d.return = f, f = d;
                    break e;
                  }
                } else if (N.elementType === S || typeof S == "object" && S !== null && S.$$typeof === Mt && uu(S) === N.type) {
                  n(f, N.sibling), d = l(N, p.props), d.ref = pr(f, N, p), d.return = f, f = d;
                  break e;
                }
                n(f, N);
                break;
              } else t(f, N);
              N = N.sibling;
            }
            p.type === Nn ? (d = un(p.props.children, f.mode, w, p.key), d.return = f, f = d) : (w = Bl(p.type, p.key, p.props, null, f.mode, w), w.ref = pr(f, d, p), w.return = f, f = w);
          }
          return o(f);
        case En:
          e: {
            for (N = p.key; d !== null; ) {
              if (d.key === N) if (d.tag === 4 && d.stateNode.containerInfo === p.containerInfo && d.stateNode.implementation === p.implementation) {
                n(f, d.sibling), d = l(d, p.children || []), d.return = f, f = d;
                break e;
              } else {
                n(f, d);
                break;
              }
              else t(f, d);
              d = d.sibling;
            }
            d = mo(p, f.mode, w), d.return = f, f = d;
          }
          return o(f);
        case Mt:
          return N = p._init, R(f, d, N(p._payload), w);
      }
      if (yr(p)) return k(f, d, p, w);
      if (ar(p)) return x(f, d, p, w);
      kl(f, p);
    }
    return typeof p == "string" && p !== "" || typeof p == "number" ? (p = "" + p, d !== null && d.tag === 6 ? (n(f, d.sibling), d = l(d, p), d.return = f, f = d) : (n(f, d), d = ho(p, f.mode, w), d.return = f, f = d), o(f)) : n(f, d);
  }
  return R;
}
var Kn = dd(!0), fd = dd(!1), ti = en(null), ni = null, Pn = null, Bs = null;
function $s() {
  Bs = Pn = ni = null;
}
function Hs(e) {
  var t = ti.current;
  X(ti), e._currentValue = t;
}
function Jo(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function $n(e, t) {
  ni = e, Bs = Pn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Ie = !0), e.firstContext = null);
}
function Ge(e) {
  var t = e._currentValue;
  if (Bs !== e) if (e = { context: e, memoizedValue: t, next: null }, Pn === null) {
    if (ni === null) throw Error(j(308));
    Pn = e, ni.dependencies = { lanes: 0, firstContext: e };
  } else Pn = Pn.next = e;
  return t;
}
var on = null;
function bs(e) {
  on === null ? on = [e] : on.push(e);
}
function pd(e, t, n, r) {
  var l = t.interleaved;
  return l === null ? (n.next = n, bs(t)) : (n.next = l.next, l.next = n), t.interleaved = n, jt(e, r);
}
function jt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var At = !1;
function Vs(e) {
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
  if (r = r.shared, $ & 2) {
    var l = r.pending;
    return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, jt(e, n);
  }
  return l = r.interleaved, l === null ? (t.next = t, bs(r)) : (t.next = l.next, l.next = t), r.interleaved = t, jt(e, n);
}
function Ol(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Ts(e, n);
  }
}
function cu(e, t) {
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
    var h = l.baseState;
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
                h = k.call(y, h, v);
                break e;
              }
              h = k;
              break e;
            case 3:
              k.flags = k.flags & -65537 | 128;
            case 0:
              if (k = x.payload, v = typeof k == "function" ? k.call(y, h, v) : k, v == null) break e;
              h = q({}, h, v);
              break e;
            case 2:
              At = !0;
          }
        }
        s.callback !== null && s.lane !== 0 && (e.flags |= 64, v = l.effects, v === null ? l.effects = [s] : v.push(s));
      } else y = { eventTime: y, lane: v, tag: s.tag, payload: s.payload, callback: s.callback, next: null }, m === null ? (u = m = y, a = h) : m = m.next = y, o |= v;
      if (s = s.next, s === null) {
        if (s = l.shared.pending, s === null) break;
        v = s, s = v.next, v.next = null, l.lastBaseUpdate = v, l.shared.pending = null;
      }
    } while (!0);
    if (m === null && (a = h), l.baseState = a, l.firstBaseUpdate = u, l.lastBaseUpdate = m, t = l.shared.interleaved, t !== null) {
      l = t;
      do
        o |= l.lane, l = l.next;
      while (l !== t);
    } else i === null && (l.shared.lanes = 0);
    pn |= o, e.lanes = o, e.memoizedState = h;
  }
}
function du(e, t, n) {
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
function Ws(e, t) {
  switch (Q(Wr, t), Q(Vr, e), Q(mt, rl), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Lo(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Lo(t, e);
  }
  X(mt), Q(mt, t);
}
function Xn() {
  X(mt), X(Vr), X(Wr);
}
function md(e) {
  sn(Wr.current);
  var t = sn(mt.current), n = Lo(t, e.type);
  t !== n && (Q(Vr, e), Q(mt, n));
}
function Qs(e) {
  Vr.current === e && (X(mt), X(Vr));
}
var J = en(0);
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
function Ks() {
  for (var e = 0; e < so.length; e++) so[e]._workInProgressVersionPrimary = null;
  so.length = 0;
}
var Ml = Dt.ReactCurrentDispatcher, ao = Dt.ReactCurrentBatchConfig, fn = 0, Z = null, se = null, ce = null, ii = !1, jr = !1, Qr = 0, Hh = 0;
function we() {
  throw Error(j(321));
}
function Xs(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!lt(e[n], t[n])) return !1;
  return !0;
}
function Gs(e, t, n, r, l, i) {
  if (fn = i, Z = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Ml.current = e === null || e.memoizedState === null ? Qh : Kh, e = n(r, l), jr) {
    i = 0;
    do {
      if (jr = !1, Qr = 0, 25 <= i) throw Error(j(301));
      i += 1, ce = se = null, t.updateQueue = null, Ml.current = Xh, e = n(r, l);
    } while (jr);
  }
  if (Ml.current = oi, t = se !== null && se.next !== null, fn = 0, ce = se = Z = null, ii = !1, t) throw Error(j(300));
  return e;
}
function Ys() {
  var e = Qr !== 0;
  return Qr = 0, e;
}
function ft() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return ce === null ? Z.memoizedState = ce = e : ce = ce.next = e, ce;
}
function Ye() {
  if (se === null) {
    var e = Z.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = se.next;
  var t = ce === null ? Z.memoizedState : ce.next;
  if (t !== null) ce = t, se = e;
  else {
    if (e === null) throw Error(j(310));
    se = e, e = { memoizedState: se.memoizedState, baseState: se.baseState, baseQueue: se.baseQueue, queue: se.queue, next: null }, ce === null ? Z.memoizedState = ce = e : ce = ce.next = e;
  }
  return ce;
}
function Kr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function uo(e) {
  var t = Ye(), n = t.queue;
  if (n === null) throw Error(j(311));
  n.lastRenderedReducer = e;
  var r = se, l = r.baseQueue, i = n.pending;
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
        var h = {
          lane: m,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null
        };
        a === null ? (s = a = h, o = r) : a = a.next = h, Z.lanes |= m, pn |= m;
      }
      u = u.next;
    } while (u !== null && u !== i);
    a === null ? o = r : a.next = s, lt(r, t.memoizedState) || (Ie = !0), t.memoizedState = r, t.baseState = o, t.baseQueue = a, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    l = e;
    do
      i = l.lane, Z.lanes |= i, pn |= i, l = l.next;
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
  var n = Z, r = Ye(), l = t(), i = !lt(r.memoizedState, l);
  if (i && (r.memoizedState = l, Ie = !0), r = r.queue, Js(xd.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || ce !== null && ce.memoizedState.tag & 1) {
    if (n.flags |= 2048, Xr(9, wd.bind(null, n, r, l, t), void 0, null), fe === null) throw Error(j(349));
    fn & 30 || yd(n, t, l);
  }
  return l;
}
function yd(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = Z.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Z.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
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
function fu(e) {
  var t = ft();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Kr, lastRenderedState: e }, t.queue = e, e = e.dispatch = Wh.bind(null, Z, e), [t.memoizedState, e];
}
function Xr(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = Z.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Z.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Cd() {
  return Ye().memoizedState;
}
function Al(e, t, n, r) {
  var l = ft();
  Z.flags |= e, l.memoizedState = Xr(1 | t, n, void 0, r === void 0 ? null : r);
}
function Ni(e, t, n, r) {
  var l = Ye();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (se !== null) {
    var o = se.memoizedState;
    if (i = o.destroy, r !== null && Xs(r, o.deps)) {
      l.memoizedState = Xr(t, n, i, r);
      return;
    }
  }
  Z.flags |= e, l.memoizedState = Xr(1 | t, n, i, r);
}
function pu(e, t) {
  return Al(8390656, 8, e, t);
}
function Js(e, t) {
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
function Zs() {
}
function Dd(e, t) {
  var n = Ye();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Xs(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Td(e, t) {
  var n = Ye();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Xs(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Id(e, t, n) {
  return fn & 21 ? (lt(n, t) || (n = Mc(), Z.lanes |= n, pn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Ie = !0), e.memoizedState = n);
}
function bh(e, t) {
  var n = W;
  W = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = ao.transition;
  ao.transition = {};
  try {
    e(!1), t();
  } finally {
    W = n, ao.transition = r;
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
        a === null ? (l.next = l, bs(t)) : (l.next = a.next, a.next = l), t.interleaved = l;
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
  return e === Z || t !== null && t === Z;
}
function Pd(e, t) {
  jr = ii = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Od(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Ts(e, n);
  }
}
var oi = { readContext: Ge, useCallback: we, useContext: we, useEffect: we, useImperativeHandle: we, useInsertionEffect: we, useLayoutEffect: we, useMemo: we, useReducer: we, useRef: we, useState: we, useDebugValue: we, useDeferredValue: we, useTransition: we, useMutableSource: we, useSyncExternalStore: we, useId: we, unstable_isNewReconciler: !1 }, Qh = { readContext: Ge, useCallback: function(e, t) {
  return ft().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Ge, useEffect: pu, useImperativeHandle: function(e, t, n) {
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
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Vh.bind(null, Z, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = ft();
  return e = { current: e }, t.memoizedState = e;
}, useState: fu, useDebugValue: Zs, useDeferredValue: function(e) {
  return ft().memoizedState = e;
}, useTransition: function() {
  var e = fu(!1), t = e[0];
  return e = bh.bind(null, e[1]), ft().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = Z, l = ft();
  if (Y) {
    if (n === void 0) throw Error(j(407));
    n = n();
  } else {
    if (n = t(), fe === null) throw Error(j(349));
    fn & 30 || yd(r, t, n);
  }
  l.memoizedState = n;
  var i = { value: n, getSnapshot: t };
  return l.queue = i, pu(xd.bind(
    null,
    r,
    i,
    e
  ), [e]), r.flags |= 2048, Xr(9, wd.bind(null, r, i, n, t), void 0, null), n;
}, useId: function() {
  var e = ft(), t = fe.identifierPrefix;
  if (Y) {
    var n = kt, r = St;
    n = (r & ~(1 << 32 - nt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Qr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = Hh++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, Kh = {
  readContext: Ge,
  useCallback: Dd,
  useContext: Ge,
  useEffect: Js,
  useImperativeHandle: Rd,
  useInsertionEffect: Ed,
  useLayoutEffect: Nd,
  useMemo: Td,
  useReducer: uo,
  useRef: Cd,
  useState: function() {
    return uo(Kr);
  },
  useDebugValue: Zs,
  useDeferredValue: function(e) {
    var t = Ye();
    return Id(t, se.memoizedState, e);
  },
  useTransition: function() {
    var e = uo(Kr)[0], t = Ye().memoizedState;
    return [e, t];
  },
  useMutableSource: vd,
  useSyncExternalStore: gd,
  useId: Ld,
  unstable_isNewReconciler: !1
}, Xh = { readContext: Ge, useCallback: Dd, useContext: Ge, useEffect: Js, useImperativeHandle: Rd, useInsertionEffect: Ed, useLayoutEffect: Nd, useMemo: Td, useReducer: co, useRef: Cd, useState: function() {
  return co(Kr);
}, useDebugValue: Zs, useDeferredValue: function(e) {
  var t = Ye();
  return se === null ? t.memoizedState = e : Id(t, se.memoizedState, e);
}, useTransition: function() {
  var e = co(Kr)[0], t = Ye().memoizedState;
  return [e, t];
}, useMutableSource: vd, useSyncExternalStore: gd, useId: Ld, unstable_isNewReconciler: !1 };
function qe(e, t) {
  if (e && e.defaultProps) {
    t = q({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Zo(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : q({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
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
function hu(e, t, n, r, l, i, o) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, o) : t.prototype && t.prototype.isPureReactComponent ? !Br(n, r) || !Br(l, i) : !0;
}
function Md(e, t, n) {
  var r = !1, l = Jt, i = t.contextType;
  return typeof i == "object" && i !== null ? i = Ge(i) : (l = _e(t) ? cn : ke.current, r = t.contextTypes, i = (r = r != null) ? Wn(e, l) : Jt), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = ji, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function mu(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && ji.enqueueReplaceState(t, t.state, null);
}
function qo(e, t, n, r) {
  var l = e.stateNode;
  l.props = n, l.state = e.memoizedState, l.refs = {}, Vs(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? l.context = Ge(i) : (i = _e(t) ? cn : ke.current, l.context = Wn(e, i)), l.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (Zo(e, t, i, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && ji.enqueueReplaceState(l, l.state, null), ri(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
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
function es(e, t) {
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
    ai || (ai = !0, cs = r), es(e, t);
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
      es(e, t);
    };
  }
  var i = e.stateNode;
  return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
    es(e, t), typeof r != "function" && (Kt === null ? Kt = /* @__PURE__ */ new Set([this]) : Kt.add(this));
    var o = t.stack;
    this.componentDidCatch(t.value, { componentStack: o !== null ? o : "" });
  }), n;
}
function vu(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Gh();
    var l = /* @__PURE__ */ new Set();
    r.set(t, l);
  } else l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
  l.has(n) || (l.add(n), e = um.bind(null, e, t, n), t.then(e, e));
}
function gu(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function yu(e, t, n, r, l) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Ct(-1, 1), t.tag = 2, Qt(n, t, 1))), n.lanes |= 1), e);
}
var Yh = Dt.ReactCurrentOwner, Ie = !1;
function Ce(e, t, n, r) {
  t.child = e === null ? fd(t, null, n, r) : Kn(t, e.child, n, r);
}
function wu(e, t, n, r, l) {
  n = n.render;
  var i = t.ref;
  return $n(t, l), r = Gs(e, t, n, r, i, l), n = Ys(), e !== null && !Ie ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Rt(e, t, l)) : (Y && n && zs(t), t.flags |= 1, Ce(e, t, r, l), t.child);
}
function xu(e, t, n, r, l) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" && !oa(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, Fd(e, t, i, r, l)) : (e = Bl(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
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
  return ts(e, t, n, r, l);
}
function Ud(e, t, n) {
  var r = t.pendingProps, l = r.children, i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Q(Mn, ze), ze |= n;
  else {
    if (!(n & 1073741824)) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, Q(Mn, ze), ze |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, Q(Mn, ze), ze |= r;
  }
  else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, Q(Mn, ze), ze |= r;
  return Ce(e, t, l, n), t.child;
}
function Bd(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function ts(e, t, n, r, l) {
  var i = _e(n) ? cn : ke.current;
  return i = Wn(t, i), $n(t, l), n = Gs(e, t, n, r, i, l), r = Ys(), e !== null && !Ie ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Rt(e, t, l)) : (Y && r && zs(t), t.flags |= 1, Ce(e, t, n, l), t.child);
}
function Su(e, t, n, r, l) {
  if (_e(n)) {
    var i = !0;
    Zl(t);
  } else i = !1;
  if ($n(t, l), t.stateNode === null) zl(e, t), Md(t, n, r), qo(t, n, r, l), r = !0;
  else if (e === null) {
    var o = t.stateNode, s = t.memoizedProps;
    o.props = s;
    var a = o.context, u = n.contextType;
    typeof u == "object" && u !== null ? u = Ge(u) : (u = _e(n) ? cn : ke.current, u = Wn(t, u));
    var m = n.getDerivedStateFromProps, h = typeof m == "function" || typeof o.getSnapshotBeforeUpdate == "function";
    h || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (s !== r || a !== u) && mu(t, o, r, u), At = !1;
    var v = t.memoizedState;
    o.state = v, ri(t, r, o, l), a = t.memoizedState, s !== r || v !== a || Le.current || At ? (typeof m == "function" && (Zo(t, n, m, r), a = t.memoizedState), (s = At || hu(t, n, s, r, v, a, u)) ? (h || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = a), o.props = r, o.state = a, o.context = u, r = s) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    o = t.stateNode, hd(e, t), s = t.memoizedProps, u = t.type === t.elementType ? s : qe(t.type, s), o.props = u, h = t.pendingProps, v = o.context, a = n.contextType, typeof a == "object" && a !== null ? a = Ge(a) : (a = _e(n) ? cn : ke.current, a = Wn(t, a));
    var y = n.getDerivedStateFromProps;
    (m = typeof y == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (s !== h || v !== a) && mu(t, o, r, a), At = !1, v = t.memoizedState, o.state = v, ri(t, r, o, l);
    var k = t.memoizedState;
    s !== h || v !== k || Le.current || At ? (typeof y == "function" && (Zo(t, n, y, r), k = t.memoizedState), (u = At || hu(t, n, u, r, v, k, a) || !1) ? (m || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, k, a), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, k, a)), typeof o.componentDidUpdate == "function" && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || s === e.memoizedProps && v === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && v === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = k), o.props = r, o.state = k, o.context = a, r = u) : (typeof o.componentDidUpdate != "function" || s === e.memoizedProps && v === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && v === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return ns(e, t, n, r, i, l);
}
function ns(e, t, n, r, l, i) {
  Bd(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return l && ou(t, n, !1), Rt(e, t, i);
  r = t.stateNode, Yh.current = t;
  var s = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && o ? (t.child = Kn(t, e.child, null, i), t.child = Kn(t, null, s, i)) : Ce(e, t, s, i), t.memoizedState = r.state, l && ou(t, n, !0), t.child;
}
function $d(e) {
  var t = e.stateNode;
  t.pendingContext ? iu(e, t.pendingContext, t.pendingContext !== t.context) : t.context && iu(e, t.context, !1), Ws(e, t.containerInfo);
}
function ku(e, t, n, r, l) {
  return Qn(), Us(l), t.flags |= 256, Ce(e, t, n, r), t.child;
}
var rs = { dehydrated: null, treeContext: null, retryLane: 0 };
function ls(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Hd(e, t, n) {
  var r = t.pendingProps, l = J.current, i = !1, o = (t.flags & 128) !== 0, s;
  if ((s = o) || (s = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), s ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), Q(J, l & 1), e === null)
    return Yo(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (o = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, o = { mode: "hidden", children: o }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = o) : i = Ti(o, r, 0, null), e = un(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = ls(n), t.memoizedState = rs, e) : qs(t, o));
  if (l = e.memoizedState, l !== null && (s = l.dehydrated, s !== null)) return Jh(e, t, o, r, s, l, n);
  if (i) {
    i = r.fallback, o = t.mode, l = e.child, s = l.sibling;
    var a = { mode: "hidden", children: r.children };
    return !(o & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = a, t.deletions = null) : (r = Gt(l, a), r.subtreeFlags = l.subtreeFlags & 14680064), s !== null ? i = Gt(s, i) : (i = un(i, o, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, o = e.child.memoizedState, o = o === null ? ls(n) : { baseLanes: o.baseLanes | n, cachePool: null, transitions: o.transitions }, i.memoizedState = o, i.childLanes = e.childLanes & ~n, t.memoizedState = rs, r;
  }
  return i = e.child, e = i.sibling, r = Gt(i, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function qs(e, t) {
  return t = Ti({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Cl(e, t, n, r) {
  return r !== null && Us(r), Kn(t, e.child, null, n), e = qs(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function Jh(e, t, n, r, l, i, o) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = fo(Error(j(422))), Cl(e, t, o, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, l = t.mode, r = Ti({ mode: "visible", children: r.children }, l, 0, null), i = un(i, l, o, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && Kn(t, e.child, null, o), t.child.memoizedState = ls(o), t.memoizedState = rs, i);
  if (!(t.mode & 1)) return Cl(e, t, o, null);
  if (l.data === "$!") {
    if (r = l.nextSibling && l.nextSibling.dataset, r) var s = r.dgst;
    return r = s, i = Error(j(419)), r = fo(i, r, void 0), Cl(e, t, o, r);
  }
  if (s = (o & e.childLanes) !== 0, Ie || s) {
    if (r = fe, r !== null) {
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
    return ia(), r = fo(Error(j(421))), Cl(e, t, o, r);
  }
  return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = cm.bind(null, e), l._reactRetry = t, null) : (e = i.treeContext, Fe = Wt(l.nextSibling), Ue = t, Y = !0, tt = null, e !== null && (We[Qe++] = St, We[Qe++] = kt, We[Qe++] = dn, St = e.id, kt = e.overflow, dn = t), t = qs(t, r.children), t.flags |= 4096, t);
}
function Cu(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Jo(e.return, t, n);
}
function po(e, t, n, r, l) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = l);
}
function bd(e, t, n) {
  var r = t.pendingProps, l = r.revealOrder, i = r.tail;
  if (Ce(e, t, r.children, n), r = J.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && Cu(e, n, t);
      else if (e.tag === 19) Cu(e, n, t);
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
  if (Q(J, r), !(t.mode & 1)) t.memoizedState = null;
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
      Ws(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, l = t.memoizedProps.value;
      Q(ti, r._currentValue), r._currentValue = l;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (Q(J, J.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Hd(e, t, n) : (Q(J, J.current & 1), e = Rt(e, t, n), e !== null ? e.sibling : null);
      Q(J, J.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return bd(e, t, n);
        t.flags |= 128;
      }
      if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), Q(J, J.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Ud(e, t, n);
  }
  return Rt(e, t, n);
}
var Vd, is, Wd, Qd;
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
is = function() {
};
Wd = function(e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    e = t.stateNode, sn(mt.current);
    var i = null;
    switch (n) {
      case "input":
        l = Ro(e, l), r = Ro(e, r), i = [];
        break;
      case "select":
        l = q({}, l, { value: void 0 }), r = q({}, r, { value: void 0 }), i = [];
        break;
      case "textarea":
        l = Io(e, l), r = Io(e, r), i = [];
        break;
      default:
        typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Yl);
    }
    _o(n, r);
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
      else u === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, s = s ? s.__html : void 0, a != null && s !== a && (i = i || []).push(u, a)) : u === "children" ? typeof a != "string" && typeof a != "number" || (i = i || []).push(u, "" + a) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Pr.hasOwnProperty(u) ? (a != null && u === "onScroll" && K("scroll", e), i || s === a || (i = [])) : (i = i || []).push(u, a));
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
  if (!Y) switch (e.tailMode) {
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
function xe(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
  else for (l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function qh(e, t, n) {
  var r = t.pendingProps;
  switch (Fs(t), t.tag) {
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
      return xe(t), null;
    case 1:
      return _e(t.type) && Jl(), xe(t), null;
    case 3:
      return r = t.stateNode, Xn(), X(Le), X(ke), Ks(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Sl(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, tt !== null && (ps(tt), tt = null))), is(e, t), xe(t), null;
    case 5:
      Qs(t);
      var l = sn(Wr.current);
      if (n = t.type, e !== null && t.stateNode != null) Wd(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(j(166));
          return xe(t), null;
        }
        if (e = sn(mt.current), Sl(t)) {
          r = t.stateNode, n = t.type;
          var i = t.memoizedProps;
          switch (r[pt] = t, r[br] = i, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              K("cancel", r), K("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              K("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < xr.length; l++) K(xr[l], r);
              break;
            case "source":
              K("error", r);
              break;
            case "img":
            case "image":
            case "link":
              K(
                "error",
                r
              ), K("load", r);
              break;
            case "details":
              K("toggle", r);
              break;
            case "input":
              _a(r, i), K("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!i.multiple }, K("invalid", r);
              break;
            case "textarea":
              Oa(r, i), K("invalid", r);
          }
          _o(n, i), l = null;
          for (var o in i) if (i.hasOwnProperty(o)) {
            var s = i[o];
            o === "children" ? typeof s == "string" ? r.textContent !== s && (i.suppressHydrationWarning !== !0 && xl(r.textContent, s, e), l = ["children", s]) : typeof s == "number" && r.textContent !== "" + s && (i.suppressHydrationWarning !== !0 && xl(
              r.textContent,
              s,
              e
            ), l = ["children", "" + s]) : Pr.hasOwnProperty(o) && s != null && o === "onScroll" && K("scroll", r);
          }
          switch (n) {
            case "input":
              fl(r), Pa(r, i, !0);
              break;
            case "textarea":
              fl(r), Ma(r);
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
            switch (o = Po(n, r), n) {
              case "dialog":
                K("cancel", e), K("close", e), l = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                K("load", e), l = r;
                break;
              case "video":
              case "audio":
                for (l = 0; l < xr.length; l++) K(xr[l], e);
                l = r;
                break;
              case "source":
                K("error", e), l = r;
                break;
              case "img":
              case "image":
              case "link":
                K(
                  "error",
                  e
                ), K("load", e), l = r;
                break;
              case "details":
                K("toggle", e), l = r;
                break;
              case "input":
                _a(e, r), l = Ro(e, r), K("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, l = q({}, r, { value: void 0 }), K("invalid", e);
                break;
              case "textarea":
                Oa(e, r), l = Io(e, r), K("invalid", e);
                break;
              default:
                l = r;
            }
            _o(n, l), s = l;
            for (i in s) if (s.hasOwnProperty(i)) {
              var a = s[i];
              i === "style" ? Cc(e, a) : i === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, a != null && Sc(e, a)) : i === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && Or(e, a) : typeof a == "number" && Or(e, "" + a) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Pr.hasOwnProperty(i) ? a != null && i === "onScroll" && K("scroll", e) : a != null && Cs(e, i, a, o));
            }
            switch (n) {
              case "input":
                fl(e), Pa(e, r, !1);
                break;
              case "textarea":
                fl(e), Ma(e);
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
      return xe(t), null;
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
      return xe(t), null;
    case 13:
      if (X(J), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (Y && Fe !== null && t.mode & 1 && !(t.flags & 128)) cd(), Qn(), t.flags |= 98560, i = !1;
        else if (i = Sl(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!i) throw Error(j(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(j(317));
            i[pt] = t;
          } else Qn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          xe(t), i = !1;
        } else tt !== null && (ps(tt), tt = null), i = !0;
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || J.current & 1 ? ue === 0 && (ue = 3) : ia())), t.updateQueue !== null && (t.flags |= 4), xe(t), null);
    case 4:
      return Xn(), is(e, t), e === null && $r(t.stateNode.containerInfo), xe(t), null;
    case 10:
      return Hs(t.type._context), xe(t), null;
    case 17:
      return _e(t.type) && Jl(), xe(t), null;
    case 19:
      if (X(J), i = t.memoizedState, i === null) return xe(t), null;
      if (r = (t.flags & 128) !== 0, o = i.rendering, o === null) if (r) hr(i, !1);
      else {
        if (ue !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (o = li(e), o !== null) {
            for (t.flags |= 128, hr(i, !1), r = o.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) i = n, e = r, i.flags &= 14680066, o = i.alternate, o === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = o.childLanes, i.lanes = o.lanes, i.child = o.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = o.memoizedProps, i.memoizedState = o.memoizedState, i.updateQueue = o.updateQueue, i.type = o.type, e = o.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return Q(J, J.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        i.tail !== null && ne() > Yn && (t.flags |= 128, r = !0, hr(i, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = li(o), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), hr(i, !0), i.tail === null && i.tailMode === "hidden" && !o.alternate && !Y) return xe(t), null;
        } else 2 * ne() - i.renderingStartTime > Yn && n !== 1073741824 && (t.flags |= 128, r = !0, hr(i, !1), t.lanes = 4194304);
        i.isBackwards ? (o.sibling = t.child, t.child = o) : (n = i.last, n !== null ? n.sibling = o : t.child = o, i.last = o);
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = ne(), t.sibling = null, n = J.current, Q(J, r ? n & 1 | 2 : n & 1), t) : (xe(t), null);
    case 22:
    case 23:
      return la(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? ze & 1073741824 && (xe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : xe(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(j(156, t.tag));
}
function em(e, t) {
  switch (Fs(t), t.tag) {
    case 1:
      return _e(t.type) && Jl(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return Xn(), X(Le), X(ke), Ks(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Qs(t), null;
    case 13:
      if (X(J), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(j(340));
        Qn();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return X(J), null;
    case 4:
      return Xn(), null;
    case 10:
      return Hs(t.type._context), null;
    case 22:
    case 23:
      return la(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var El = !1, Se = !1, tm = typeof WeakSet == "function" ? WeakSet : Set, _ = null;
function On(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    ee(e, t, r);
  }
  else n.current = null;
}
function os(e, t, n) {
  try {
    n();
  } catch (r) {
    ee(e, t, r);
  }
}
var Eu = !1;
function nm(e, t) {
  if (bo = Kl, e = Jc(), As(e)) {
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
        var o = 0, s = -1, a = -1, u = 0, m = 0, h = e, v = null;
        t: for (; ; ) {
          for (var y; h !== n || l !== 0 && h.nodeType !== 3 || (s = o + l), h !== i || r !== 0 && h.nodeType !== 3 || (a = o + r), h.nodeType === 3 && (o += h.nodeValue.length), (y = h.firstChild) !== null; )
            v = h, h = y;
          for (; ; ) {
            if (h === e) break t;
            if (v === n && ++u === l && (s = o), v === i && ++m === r && (a = o), (y = h.nextSibling) !== null) break;
            h = v, v = h.parentNode;
          }
          h = y;
        }
        n = s === -1 || a === -1 ? null : { start: s, end: a };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Vo = { focusedElem: e, selectionRange: n }, Kl = !1, _ = t; _ !== null; ) if (t = _, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, _ = e;
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
            var x = k.memoizedProps, R = k.memoizedState, f = t.stateNode, d = f.getSnapshotBeforeUpdate(t.elementType === t.type ? x : qe(t.type, x), R);
            f.__reactInternalSnapshotBeforeUpdate = d;
          }
          break;
        case 3:
          var p = t.stateNode.containerInfo;
          p.nodeType === 1 ? p.textContent = "" : p.nodeType === 9 && p.documentElement && p.removeChild(p.documentElement);
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
      ee(t, t.return, w);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, _ = e;
      break;
    }
    _ = t.return;
  }
  return k = Eu, Eu = !1, k;
}
function Rr(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var l = r = r.next;
    do {
      if ((l.tag & e) === e) {
        var i = l.destroy;
        l.destroy = void 0, i !== void 0 && os(t, n, i);
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
function ss(e) {
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
  t !== null && (e.alternate = null, Kd(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[pt], delete t[br], delete t[Ko], delete t[Fh], delete t[Uh])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Xd(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Nu(e) {
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
function as(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Yl));
  else if (r !== 4 && (e = e.child, e !== null)) for (as(e, t, n), e = e.sibling; e !== null; ) as(e, t, n), e = e.sibling;
}
function us(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (us(e, t, n), e = e.sibling; e !== null; ) us(e, t, n), e = e.sibling;
}
var he = null, et = !1;
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
      Se || On(n, t);
    case 6:
      var r = he, l = et;
      he = null, Ot(e, t, n), he = r, et = l, he !== null && (et ? (e = he, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : he.removeChild(n.stateNode));
      break;
    case 18:
      he !== null && (et ? (e = he, n = n.stateNode, e.nodeType === 8 ? io(e.parentNode, n) : e.nodeType === 1 && io(e, n), Fr(e)) : io(he, n.stateNode));
      break;
    case 4:
      r = he, l = et, he = n.stateNode.containerInfo, et = !0, Ot(e, t, n), he = r, et = l;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Se && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        l = r = r.next;
        do {
          var i = l, o = i.destroy;
          i = i.tag, o !== void 0 && (i & 2 || i & 4) && os(n, t, o), l = l.next;
        } while (l !== r);
      }
      Ot(e, t, n);
      break;
    case 1:
      if (!Se && (On(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (s) {
        ee(n, t, s);
      }
      Ot(e, t, n);
      break;
    case 21:
      Ot(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (Se = (r = Se) || n.memoizedState !== null, Ot(e, t, n), Se = r) : Ot(e, t, n);
      break;
    default:
      Ot(e, t, n);
  }
}
function ju(e) {
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
            he = s.stateNode, et = !1;
            break e;
          case 3:
            he = s.stateNode.containerInfo, et = !0;
            break e;
          case 4:
            he = s.stateNode.containerInfo, et = !0;
            break e;
        }
        s = s.return;
      }
      if (he === null) throw Error(j(160));
      Gd(i, o, l), he = null, et = !1;
      var a = l.alternate;
      a !== null && (a.return = null), l.return = null;
    } catch (u) {
      ee(l, t, u);
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
          ee(e, e.return, x);
        }
        try {
          Rr(5, e, e.return);
        } catch (x) {
          ee(e, e.return, x);
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
          ee(e, e.return, x);
        }
      }
      if (r & 4 && (l = e.stateNode, l != null)) {
        var i = e.memoizedProps, o = n !== null ? n.memoizedProps : i, s = e.type, a = e.updateQueue;
        if (e.updateQueue = null, a !== null) try {
          s === "input" && i.type === "radio" && i.name != null && yc(l, i), Po(s, o);
          var u = Po(s, i);
          for (o = 0; o < a.length; o += 2) {
            var m = a[o], h = a[o + 1];
            m === "style" ? Cc(l, h) : m === "dangerouslySetInnerHTML" ? Sc(l, h) : m === "children" ? Or(l, h) : Cs(l, m, h, u);
          }
          switch (s) {
            case "input":
              Do(l, i);
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
          ee(e, e.return, x);
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
          ee(e, e.return, x);
        }
      }
      break;
    case 3:
      if (Ze(t, e), dt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        Fr(t.containerInfo);
      } catch (x) {
        ee(e, e.return, x);
      }
      break;
    case 4:
      Ze(t, e), dt(e);
      break;
    case 13:
      Ze(t, e), dt(e), l = e.child, l.flags & 8192 && (i = l.memoizedState !== null, l.stateNode.isHidden = i, !i || l.alternate !== null && l.alternate.memoizedState !== null || (na = ne())), r & 4 && ju(e);
      break;
    case 22:
      if (m = n !== null && n.memoizedState !== null, e.mode & 1 ? (Se = (u = Se) || m, Ze(t, e), Se = u) : Ze(t, e), dt(e), r & 8192) {
        if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !m && e.mode & 1) for (_ = e, m = e.child; m !== null; ) {
          for (h = _ = m; _ !== null; ) {
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
                    ee(r, n, x);
                  }
                }
                break;
              case 5:
                On(v, v.return);
                break;
              case 22:
                if (v.memoizedState !== null) {
                  Du(h);
                  continue;
                }
            }
            y !== null ? (y.return = v, _ = y) : Du(h);
          }
          m = m.sibling;
        }
        e: for (m = null, h = e; ; ) {
          if (h.tag === 5) {
            if (m === null) {
              m = h;
              try {
                l = h.stateNode, u ? (i = l.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (s = h.stateNode, a = h.memoizedProps.style, o = a != null && a.hasOwnProperty("display") ? a.display : null, s.style.display = kc("display", o));
              } catch (x) {
                ee(e, e.return, x);
              }
            }
          } else if (h.tag === 6) {
            if (m === null) try {
              h.stateNode.nodeValue = u ? "" : h.memoizedProps;
            } catch (x) {
              ee(e, e.return, x);
            }
          } else if ((h.tag !== 22 && h.tag !== 23 || h.memoizedState === null || h === e) && h.child !== null) {
            h.child.return = h, h = h.child;
            continue;
          }
          if (h === e) break e;
          for (; h.sibling === null; ) {
            if (h.return === null || h.return === e) break e;
            m === h && (m = null), h = h.return;
          }
          m === h && (m = null), h.sibling.return = h.return, h = h.sibling;
        }
      }
      break;
    case 19:
      Ze(t, e), dt(e), r & 4 && ju(e);
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
          var i = Nu(e);
          us(e, i, l);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo, s = Nu(e);
          as(e, s, o);
          break;
        default:
          throw Error(j(161));
      }
    } catch (a) {
      ee(e, e.return, a);
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
        var s = l.alternate, a = s !== null && s.memoizedState !== null || Se;
        s = El;
        var u = Se;
        if (El = o, (Se = a) && !u) for (_ = l; _ !== null; ) o = _, a = o.child, o.tag === 22 && o.memoizedState !== null ? Tu(l) : a !== null ? (a.return = o, _ = a) : Tu(l);
        for (; i !== null; ) _ = i, Jd(i), i = i.sibling;
        _ = l, El = s, Se = u;
      }
      Ru(e);
    } else l.subtreeFlags & 8772 && i !== null ? (i.return = l, _ = i) : Ru(e);
  }
}
function Ru(e) {
  for (; _ !== null; ) {
    var t = _;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            Se || Ri(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !Se) if (n === null) r.componentDidMount();
            else {
              var l = t.elementType === t.type ? n.memoizedProps : qe(t.type, n.memoizedProps);
              r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var i = t.updateQueue;
            i !== null && du(t, i, r);
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
              du(t, o, n);
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
                  var h = m.dehydrated;
                  h !== null && Fr(h);
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
        Se || t.flags & 512 && ss(t);
      } catch (v) {
        ee(t, t.return, v);
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
function Du(e) {
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
function Tu(e) {
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
            ee(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              ee(t, l, a);
            }
          }
          var i = t.return;
          try {
            ss(t);
          } catch (a) {
            ee(t, i, a);
          }
          break;
        case 5:
          var o = t.return;
          try {
            ss(t);
          } catch (a) {
            ee(t, o, a);
          }
      }
    } catch (a) {
      ee(t, t.return, a);
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
var lm = Math.ceil, si = Dt.ReactCurrentDispatcher, ea = Dt.ReactCurrentOwner, Xe = Dt.ReactCurrentBatchConfig, $ = 0, fe = null, le = null, me = 0, ze = 0, Mn = en(0), ue = 0, Gr = null, pn = 0, Di = 0, ta = 0, Dr = null, Te = null, na = 0, Yn = 1 / 0, wt = null, ai = !1, cs = null, Kt = null, Nl = !1, $t = null, ui = 0, Tr = 0, ds = null, Fl = -1, Ul = 0;
function Ee() {
  return $ & 6 ? ne() : Fl !== -1 ? Fl : Fl = ne();
}
function Xt(e) {
  return e.mode & 1 ? $ & 2 && me !== 0 ? me & -me : $h.transition !== null ? (Ul === 0 && (Ul = Mc()), Ul) : (e = W, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Hc(e.type)), e) : 1;
}
function rt(e, t, n, r) {
  if (50 < Tr) throw Tr = 0, ds = null, Error(j(185));
  el(e, n, r), (!($ & 2) || e !== fe) && (e === fe && (!($ & 2) && (Di |= n), ue === 4 && Ut(e, me)), Pe(e, r), n === 1 && $ === 0 && !(t.mode & 1) && (Yn = ne() + 500, Ei && tn()));
}
function Pe(e, t) {
  var n = e.callbackNode;
  $p(e, t);
  var r = Ql(e, e === fe ? me : 0);
  if (r === 0) n !== null && Fa(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && Fa(n), t === 1) e.tag === 0 ? Bh(Iu.bind(null, e)) : sd(Iu.bind(null, e)), Ah(function() {
      !($ & 6) && tn();
    }), n = null;
    else {
      switch (Ac(r)) {
        case 1:
          n = Ds;
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
  if (Fl = -1, Ul = 0, $ & 6) throw Error(j(327));
  var n = e.callbackNode;
  if (Hn() && e.callbackNode !== n) return null;
  var r = Ql(e, e === fe ? me : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = ci(e, r);
  else {
    t = r;
    var l = $;
    $ |= 2;
    var i = ef();
    (fe !== e || me !== t) && (wt = null, Yn = ne() + 500, an(e, t));
    do
      try {
        sm();
        break;
      } catch (s) {
        qd(e, s);
      }
    while (!0);
    $s(), si.current = i, $ = l, le !== null ? t = 0 : (fe = null, me = 0, t = ue);
  }
  if (t !== 0) {
    if (t === 2 && (l = Fo(e), l !== 0 && (r = l, t = fs(e, l))), t === 1) throw n = Gr, an(e, 0), Ut(e, r), Pe(e, ne()), n;
    if (t === 6) Ut(e, r);
    else {
      if (l = e.current.alternate, !(r & 30) && !im(l) && (t = ci(e, r), t === 2 && (i = Fo(e), i !== 0 && (r = i, t = fs(e, i))), t === 1)) throw n = Gr, an(e, 0), Ut(e, r), Pe(e, ne()), n;
      switch (e.finishedWork = l, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(j(345));
        case 2:
          rn(e, Te, wt);
          break;
        case 3:
          if (Ut(e, r), (r & 130023424) === r && (t = na + 500 - ne(), 10 < t)) {
            if (Ql(e, 0) !== 0) break;
            if (l = e.suspendedLanes, (l & r) !== r) {
              Ee(), e.pingedLanes |= e.suspendedLanes & l;
              break;
            }
            e.timeoutHandle = Qo(rn.bind(null, e, Te, wt), t);
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
          if (r = l, r = ne() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * lm(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Qo(rn.bind(null, e, Te, wt), r);
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
  return Pe(e, ne()), e.callbackNode === n ? Zd.bind(null, e) : null;
}
function fs(e, t) {
  var n = Dr;
  return e.current.memoizedState.isDehydrated && (an(e, t).flags |= 256), e = ci(e, t), e !== 2 && (t = Te, Te = n, t !== null && ps(t)), e;
}
function ps(e) {
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
  for (t &= ~ta, t &= ~Di, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - nt(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function Iu(e) {
  if ($ & 6) throw Error(j(327));
  Hn();
  var t = Ql(e, 0);
  if (!(t & 1)) return Pe(e, ne()), null;
  var n = ci(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Fo(e);
    r !== 0 && (t = r, n = fs(e, r));
  }
  if (n === 1) throw n = Gr, an(e, 0), Ut(e, t), Pe(e, ne()), n;
  if (n === 6) throw Error(j(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, rn(e, Te, wt), Pe(e, ne()), null;
}
function ra(e, t) {
  var n = $;
  $ |= 1;
  try {
    return e(t);
  } finally {
    $ = n, $ === 0 && (Yn = ne() + 500, Ei && tn());
  }
}
function hn(e) {
  $t !== null && $t.tag === 0 && !($ & 6) && Hn();
  var t = $;
  $ |= 1;
  var n = Xe.transition, r = W;
  try {
    if (Xe.transition = null, W = 1, e) return e();
  } finally {
    W = r, Xe.transition = n, $ = t, !($ & 6) && tn();
  }
}
function la() {
  ze = Mn.current, X(Mn);
}
function an(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, Mh(n)), le !== null) for (n = le.return; n !== null; ) {
    var r = n;
    switch (Fs(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && Jl();
        break;
      case 3:
        Xn(), X(Le), X(ke), Ks();
        break;
      case 5:
        Qs(r);
        break;
      case 4:
        Xn();
        break;
      case 13:
        X(J);
        break;
      case 19:
        X(J);
        break;
      case 10:
        Hs(r.type._context);
        break;
      case 22:
      case 23:
        la();
    }
    n = n.return;
  }
  if (fe = e, le = e = Gt(e.current, null), me = ze = t, ue = 0, Gr = null, ta = Di = pn = 0, Te = Dr = null, on !== null) {
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
    var n = le;
    try {
      if ($s(), Ml.current = oi, ii) {
        for (var r = Z.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), r = r.next;
        }
        ii = !1;
      }
      if (fn = 0, ce = se = Z = null, jr = !1, Qr = 0, ea.current = null, n === null || n.return === null) {
        ue = 1, Gr = t, le = null;
        break;
      }
      e: {
        var i = e, o = n.return, s = n, a = t;
        if (t = me, s.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
          var u = a, m = s, h = m.tag;
          if (!(m.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var v = m.alternate;
            v ? (m.updateQueue = v.updateQueue, m.memoizedState = v.memoizedState, m.lanes = v.lanes) : (m.updateQueue = null, m.memoizedState = null);
          }
          var y = gu(o);
          if (y !== null) {
            y.flags &= -257, yu(y, o, s, i, t), y.mode & 1 && vu(i, u, t), t = y, a = u;
            var k = t.updateQueue;
            if (k === null) {
              var x = /* @__PURE__ */ new Set();
              x.add(a), t.updateQueue = x;
            } else k.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              vu(i, u, t), ia();
              break e;
            }
            a = Error(j(426));
          }
        } else if (Y && s.mode & 1) {
          var R = gu(o);
          if (R !== null) {
            !(R.flags & 65536) && (R.flags |= 256), yu(R, o, s, i, t), Us(Gn(a, s));
            break e;
          }
        }
        i = a = Gn(a, s), ue !== 4 && (ue = 2), Dr === null ? Dr = [i] : Dr.push(i), i = o;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var f = Ad(i, a, t);
              cu(i, f);
              break e;
            case 1:
              s = a;
              var d = i.type, p = i.stateNode;
              if (!(i.flags & 128) && (typeof d.getDerivedStateFromError == "function" || p !== null && typeof p.componentDidCatch == "function" && (Kt === null || !Kt.has(p)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var w = zd(i, s, t);
                cu(i, w);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      nf(n);
    } catch (S) {
      t = S, le === n && n !== null && (le = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function ef() {
  var e = si.current;
  return si.current = oi, e === null ? oi : e;
}
function ia() {
  (ue === 0 || ue === 3 || ue === 2) && (ue = 4), fe === null || !(pn & 268435455) && !(Di & 268435455) || Ut(fe, me);
}
function ci(e, t) {
  var n = $;
  $ |= 2;
  var r = ef();
  (fe !== e || me !== t) && (wt = null, an(e, t));
  do
    try {
      om();
      break;
    } catch (l) {
      qd(e, l);
    }
  while (!0);
  if ($s(), $ = n, si.current = r, le !== null) throw Error(j(261));
  return fe = null, me = 0, ue;
}
function om() {
  for (; le !== null; ) tf(le);
}
function sm() {
  for (; le !== null && !_p(); ) tf(le);
}
function tf(e) {
  var t = lf(e.alternate, e, ze);
  e.memoizedProps = e.pendingProps, t === null ? nf(e) : le = t, ea.current = null;
}
function nf(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = em(n, t), n !== null) {
        n.flags &= 32767, le = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        ue = 6, le = null;
        return;
      }
    } else if (n = qh(n, t, ze), n !== null) {
      le = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      le = t;
      return;
    }
    le = t = e;
  } while (t !== null);
  ue === 0 && (ue = 5);
}
function rn(e, t, n) {
  var r = W, l = Xe.transition;
  try {
    Xe.transition = null, W = 1, am(e, t, n, r);
  } finally {
    Xe.transition = l, W = r;
  }
  return null;
}
function am(e, t, n, r) {
  do
    Hn();
  while ($t !== null);
  if ($ & 6) throw Error(j(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(j(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var i = n.lanes | n.childLanes;
  if (Hp(e, i), e === fe && (le = fe = null, me = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Nl || (Nl = !0, of(Wl, function() {
    return Hn(), null;
  })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
    i = Xe.transition, Xe.transition = null;
    var o = W;
    W = 1;
    var s = $;
    $ |= 4, ea.current = null, nm(e, n), Yd(n, e), Dh(Vo), Kl = !!bo, Vo = bo = null, e.current = n, rm(n), Pp(), $ = s, W = o, Xe.transition = i;
  } else e.current = n;
  if (Nl && (Nl = !1, $t = e, ui = l), i = e.pendingLanes, i === 0 && (Kt = null), Ap(n.stateNode), Pe(e, ne()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
  if (ai) throw ai = !1, e = cs, cs = null, e;
  return ui & 1 && e.tag !== 0 && Hn(), i = e.pendingLanes, i & 1 ? e === ds ? Tr++ : (Tr = 0, ds = e) : Tr = 0, tn(), null;
}
function Hn() {
  if ($t !== null) {
    var e = Ac(ui), t = Xe.transition, n = W;
    try {
      if (Xe.transition = null, W = 16 > e ? 16 : e, $t === null) var r = !1;
      else {
        if (e = $t, $t = null, ui = 0, $ & 6) throw Error(j(331));
        var l = $;
        for ($ |= 4, _ = e.current; _ !== null; ) {
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
                  var h = m.child;
                  if (h !== null) h.return = m, _ = h;
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
                    var R = x.sibling;
                    x.sibling = null, x = R;
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
          var p = o.child;
          if (o.subtreeFlags & 2064 && p !== null) p.return = o, _ = p;
          else e: for (o = d; _ !== null; ) {
            if (s = _, s.flags & 2048) try {
              switch (s.tag) {
                case 0:
                case 11:
                case 15:
                  Ri(9, s);
              }
            } catch (S) {
              ee(s, s.return, S);
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
        if ($ = l, tn(), ht && typeof ht.onPostCommitFiberRoot == "function") try {
          ht.onPostCommitFiberRoot(wi, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      W = n, Xe.transition = t;
    }
  }
  return !1;
}
function Lu(e, t, n) {
  t = Gn(n, t), t = Ad(e, t, 1), e = Qt(e, t, 1), t = Ee(), e !== null && (el(e, 1, t), Pe(e, t));
}
function ee(e, t, n) {
  if (e.tag === 3) Lu(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      Lu(t, e, n);
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
  r !== null && r.delete(t), t = Ee(), e.pingedLanes |= e.suspendedLanes & n, fe === e && (me & n) === n && (ue === 4 || ue === 3 && (me & 130023424) === me && 500 > ne() - na ? an(e, 0) : ta |= n), Pe(e, t);
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
  else Ie = !1, Y && t.flags & 1048576 && ad(t, ei, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      zl(e, t), e = t.pendingProps;
      var l = Wn(t, ke.current);
      $n(t, n), l = Gs(null, t, r, e, l, n);
      var i = Ys();
      return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, _e(r) ? (i = !0, Zl(t)) : i = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, Vs(t), l.updater = ji, t.stateNode = l, l._reactInternals = t, qo(t, r, e, n), t = ns(null, t, r, !0, i, n)) : (t.tag = 0, Y && i && zs(t), Ce(null, t, l, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (zl(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = pm(r), e = qe(r, e), l) {
          case 0:
            t = ts(null, t, r, e, n);
            break e;
          case 1:
            t = Su(null, t, r, e, n);
            break e;
          case 11:
            t = wu(null, t, r, e, n);
            break e;
          case 14:
            t = xu(null, t, r, qe(r.type, e), n);
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
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : qe(r, l), ts(e, t, r, l, n);
    case 1:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : qe(r, l), Su(e, t, r, l, n);
    case 3:
      e: {
        if ($d(t), e === null) throw Error(j(387));
        r = t.pendingProps, i = t.memoizedState, l = i.element, hd(e, t), ri(t, r, null, n);
        var o = t.memoizedState;
        if (r = o.element, i.isDehydrated) if (i = { element: r, isDehydrated: !1, cache: o.cache, pendingSuspenseBoundaries: o.pendingSuspenseBoundaries, transitions: o.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
          l = Gn(Error(j(423)), t), t = ku(e, t, r, n, l);
          break e;
        } else if (r !== l) {
          l = Gn(Error(j(424)), t), t = ku(e, t, r, n, l);
          break e;
        } else for (Fe = Wt(t.stateNode.containerInfo.firstChild), Ue = t, Y = !0, tt = null, n = fd(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
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
      return md(t), e === null && Yo(t), r = t.type, l = t.pendingProps, i = e !== null ? e.memoizedProps : null, o = l.children, Wo(r, l) ? o = null : i !== null && Wo(r, i) && (t.flags |= 32), Bd(e, t), Ce(e, t, o, n), t.child;
    case 6:
      return e === null && Yo(t), null;
    case 13:
      return Hd(e, t, n);
    case 4:
      return Ws(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Kn(t, null, r, n) : Ce(e, t, r, n), t.child;
    case 11:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : qe(r, l), wu(e, t, r, l, n);
    case 7:
      return Ce(e, t, t.pendingProps, n), t.child;
    case 8:
      return Ce(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Ce(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, l = t.pendingProps, i = t.memoizedProps, o = l.value, Q(ti, r._currentValue), r._currentValue = o, i !== null) if (lt(i.value, o)) {
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
                i.lanes |= n, a = i.alternate, a !== null && (a.lanes |= n), Jo(
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
            o.lanes |= n, s = o.alternate, s !== null && (s.lanes |= n), Jo(o, n, t), o = i.sibling;
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
      return r = t.type, l = qe(r, t.pendingProps), l = qe(r.type, l), xu(e, t, r, l, n);
    case 15:
      return Fd(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : qe(r, l), zl(e, t), t.tag = 1, _e(r) ? (e = !0, Zl(t)) : e = !1, $n(t, n), Md(t, r, l), qo(t, r, l, n), ns(null, t, r, !0, e, n);
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
function oa(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function pm(e) {
  if (typeof e == "function") return oa(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Ns) return 11;
    if (e === js) return 14;
  }
  return 2;
}
function Gt(e, t) {
  var n = e.alternate;
  return n === null ? (n = Ke(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Bl(e, t, n, r, l, i) {
  var o = 2;
  if (r = e, typeof e == "function") oa(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else e: switch (e) {
    case Nn:
      return un(n.children, l, i, t);
    case Es:
      o = 8, l |= 8;
      break;
    case Co:
      return e = Ke(12, n, t, l | 2), e.elementType = Co, e.lanes = i, e;
    case Eo:
      return e = Ke(13, n, t, l), e.elementType = Eo, e.lanes = i, e;
    case No:
      return e = Ke(19, n, t, l), e.elementType = No, e.lanes = i, e;
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
        case Ns:
          o = 11;
          break e;
        case js:
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
function sa(e, t, n, r, l, i, o, s, a) {
  return e = new hm(e, t, n, s, a), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = Ke(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Vs(i), e;
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
  return e = sa(n, r, !0, e, l, i, o, s, a), e.context = sf(null), n = e.current, r = Ee(), l = Xt(n), i = Ct(r, l), i.callback = t ?? null, Qt(n, i, l), e.current.lanes = l, el(e, l, r), Pe(e, r), e;
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
function _u(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function aa(e, t) {
  _u(e, t), (e = e.alternate) && _u(e, t);
}
function vm() {
  return null;
}
var uf = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function ua(e) {
  this._internalRoot = e;
}
Li.prototype.render = ua.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(j(409));
  Ii(e, t, null, null);
};
Li.prototype.unmount = ua.prototype.unmount = function() {
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
function ca(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function _i(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Pu() {
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
    var o = af(t, r, e, 0, null, !1, !1, "", Pu);
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
  var a = sa(e, 0, !1, null, null, !1, !1, "", Pu);
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
        n !== 0 && (Ts(t, n | 1), Pe(t, ne()), !($ & 6) && (Yn = ne() + 500, tn()));
      }
      break;
    case 13:
      hn(function() {
        var r = jt(e, 1);
        if (r !== null) {
          var l = Ee();
          rt(r, e, 1, l);
        }
      }), aa(e, 1);
  }
};
Is = function(e) {
  if (e.tag === 13) {
    var t = jt(e, 134217728);
    if (t !== null) {
      var n = Ee();
      rt(t, e, 134217728, n);
    }
    aa(e, 134217728);
  }
};
Fc = function(e) {
  if (e.tag === 13) {
    var t = Xt(e), n = jt(e, t);
    if (n !== null) {
      var r = Ee();
      rt(n, e, t, r);
    }
    aa(e, t);
  }
};
Uc = function() {
  return W;
};
Bc = function(e, t) {
  var n = W;
  try {
    return W = e, t();
  } finally {
    W = n;
  }
};
Mo = function(e, t, n) {
  switch (t) {
    case "input":
      if (Do(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = Ci(r);
            if (!l) throw Error(j(90));
            gc(r), Do(r, l);
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
jc = ra;
Rc = hn;
var ym = { usingClientEntryPoint: !1, Events: [nl, Tn, Ci, Ec, Nc, ra] }, mr = { findFiberByHostInstance: ln, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, wm = { bundleType: mr.bundleType, version: mr.version, rendererPackageName: mr.rendererPackageName, rendererConfig: mr.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Dt.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
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
  if (!ca(t)) throw Error(j(200));
  return mm(e, t, null, n);
};
$e.createRoot = function(e, t) {
  if (!ca(e)) throw Error(j(299));
  var n = !1, r = "", l = uf;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = sa(e, 1, !1, null, null, n, !1, r, l), e[Nt] = t.current, $r(e.nodeType === 8 ? e.parentNode : e), new ua(t);
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
  if (!ca(e)) throw Error(j(405));
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
$e.unstable_batchedUpdates = ra;
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
var An = uc.exports, Ou = An;
So.createRoot = Ou.createRoot, So.hydrateRoot = Ou.hydrateRoot;
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
function da(e) {
  return "nodeType" in e;
}
function Re(e) {
  var t, n;
  return e ? er(e) ? e : da(e) && (t = (n = e.ownerDocument) == null ? void 0 : n.defaultView) != null ? t : window : window;
}
function fa(e) {
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
  return e ? er(e) ? e.document : da(e) ? fa(e) ? e : ll(e) || df(e) ? e.ownerDocument : document : document : document;
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
}), Mu = "a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";
function Em(e) {
  return e.matches(Mu) ? e : e.querySelector(Mu);
}
const Nm = {
  display: "none"
};
function jm(e) {
  let {
    id: t,
    value: n
  } = e;
  return G.createElement("div", {
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
  return G.createElement("div", {
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
    onDragStart(h) {
      let {
        active: v
      } = h;
      i(t.onDragStart({
        active: v
      }));
    },
    onDragMove(h) {
      let {
        active: v,
        over: y
      } = h;
      t.onDragMove && i(t.onDragMove({
        active: v,
        over: y
      }));
    },
    onDragOver(h) {
      let {
        active: v,
        over: y
      } = h;
      i(t.onDragOver({
        active: v,
        over: y
      }));
    },
    onDragEnd(h) {
      let {
        active: v,
        over: y
      } = h;
      i(t.onDragEnd({
        active: v,
        over: y
      }));
    },
    onDragCancel(h) {
      let {
        active: v,
        over: y
      } = h;
      i(t.onDragCancel({
        active: v,
        over: y
      }));
    }
  }), [i, t])), !a)
    return null;
  const m = G.createElement(G.Fragment, null, G.createElement(jm, {
    id: r,
    value: l.draggable
  }), G.createElement(Rm, {
    id: s,
    announcement: o
  }));
  return n ? An.createPortal(m, n) : m;
}
var ae;
(function(e) {
  e.DragStart = "dragStart", e.DragMove = "dragMove", e.DragEnd = "dragEnd", e.DragCancel = "dragCancel", e.DragOver = "dragOver", e.RegisterDroppable = "registerDroppable", e.SetDroppableDisabled = "setDroppableDisabled", e.UnregisterDroppable = "unregisterDroppable";
})(ae || (ae = {}));
function mi() {
}
function Au(e, t) {
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
function zu(e) {
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
  const l = zu(t), i = [];
  for (const o of r) {
    const {
      id: s
    } = o, a = n.get(s);
    if (a) {
      const u = zu(a), m = l.reduce((v, y, k) => v + Mm(u[k], y), 0), h = Number((m / 4).toFixed(4));
      i.push({
        id: s,
        data: {
          droppableContainer: o,
          value: h
        }
      });
    }
  }
  return i.sort(zm);
};
function Um(e, t) {
  const n = Math.max(t.top, e.top), r = Math.max(t.left, e.left), l = Math.min(t.left + t.width, e.left + e.width), i = Math.min(t.top + t.height, e.top + e.height), o = l - r, s = i - n;
  if (r < l && n < i) {
    const a = t.width * t.height, u = e.width * e.height, m = o * s, h = m / (a + u - m);
    return Number(h.toFixed(4));
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
  } = r, a = e.left - o - (1 - l) * parseFloat(n), u = e.top - s - (1 - i) * parseFloat(n.slice(n.indexOf(" ") + 1)), m = l ? e.width / l : e.width, h = i ? e.height / i : e.height;
  return {
    width: m,
    height: h,
    top: u,
    right: a + m,
    bottom: u + h,
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
function Fu(e) {
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
    if (fa(l) && l.scrollingElement != null && !n.includes(l.scrollingElement))
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
  return !Oi || !e ? null : er(e) ? e : da(e) ? fa(e) || e === tr(e).scrollingElement ? window : ll(e) ? e : null : null;
}
function wf(e) {
  return er(e) ? e.scrollX : e.scrollLeft;
}
function xf(e) {
  return er(e) ? e.scrollY : e.scrollTop;
}
function hs(e) {
  return {
    x: wf(e),
    y: xf(e)
  };
}
var de;
(function(e) {
  e[e.Forward = 1] = "Forward", e[e.Backward = -1] = "Backward";
})(de || (de = {}));
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
    isLeft: h,
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
  return !u && i <= t.top + x.height ? (y.y = de.Backward, k.y = r * Math.abs((t.top + x.height - i) / x.height)) : !m && a >= t.bottom - x.height && (y.y = de.Forward, k.y = r * Math.abs((t.bottom - x.height - a) / x.height)), !v && s >= t.right - x.width ? (y.x = de.Forward, k.x = r * Math.abs((t.right - x.width - s) / x.width)) : !h && o <= t.left + x.width && (y.x = de.Backward, k.x = r * Math.abs((t.left + x.width - o) / x.width)), {
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
  return e.reduce((t, n) => bn(t, hs(n)), ot);
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
class pa {
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
function Uu(e) {
  e.preventDefault();
}
function nv(e) {
  e.stopPropagation();
}
var B;
(function(e) {
  e.Space = "Space", e.Down = "ArrowDown", e.Right = "ArrowRight", e.Left = "ArrowLeft", e.Up = "ArrowUp", e.Esc = "Escape", e.Enter = "Enter", e.Tab = "Tab";
})(B || (B = {}));
const Nf = {
  start: [B.Space, B.Enter],
  cancel: [B.Esc],
  end: [B.Space, B.Enter, B.Tab]
}, rv = (e, t) => {
  let {
    currentCoordinates: n
  } = t;
  switch (e.code) {
    case B.Right:
      return {
        ...n,
        x: n.x + 25
      };
    case B.Left:
      return {
        ...n,
        x: n.x - 25
      };
    case B.Down:
      return {
        ...n,
        y: n.y + 25
      };
    case B.Up:
      return {
        ...n,
        y: n.y - 25
      };
  }
};
class ha {
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
      const h = o(t, {
        active: n,
        context: r.current,
        currentCoordinates: m
      });
      if (h) {
        const v = Jr(h, m), y = {
          x: 0,
          y: 0
        }, {
          scrollableAncestors: k
        } = r.current;
        for (const x of k) {
          const R = t.code, {
            isTop: f,
            isRight: d,
            isLeft: p,
            isBottom: w,
            maxScroll: S,
            minScroll: N
          } = kf(x), C = Jm(x), E = {
            x: Math.min(R === B.Right ? C.right - C.width / 2 : C.right, Math.max(R === B.Right ? C.left : C.left + C.width / 2, h.x)),
            y: Math.min(R === B.Down ? C.bottom - C.height / 2 : C.bottom, Math.max(R === B.Down ? C.top : C.top + C.height / 2, h.y))
          }, D = R === B.Right && !d || R === B.Left && !p, L = R === B.Down && !w || R === B.Up && !f;
          if (D && E.x !== h.x) {
            const P = x.scrollLeft + v.x, F = R === B.Right && P <= S.x || R === B.Left && P >= N.x;
            if (F && !v.y) {
              x.scrollTo({
                left: P,
                behavior: s
              });
              return;
            }
            F ? y.x = x.scrollLeft - P : y.x = R === B.Right ? x.scrollLeft - S.x : x.scrollLeft - N.x, y.x && x.scrollBy({
              left: -y.x,
              behavior: s
            });
            break;
          } else if (L && E.y !== h.y) {
            const P = x.scrollTop + v.y, F = R === B.Down && P <= S.y || R === B.Up && P >= N.y;
            if (F && !v.x) {
              x.scrollTo({
                top: P,
                behavior: s
              });
              return;
            }
            F ? y.y = x.scrollTop - P : y.y = R === B.Down ? x.scrollTop - S.y : x.scrollTop - N.y, y.y && x.scrollBy({
              top: -y.y,
              behavior: s
            });
            break;
          }
        }
        this.handleMove(t, bn(Jr(h, this.referenceCoordinates), y));
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
ha.activators = [{
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
function Bu(e) {
  return !!(e && "distance" in e);
}
function $u(e) {
  return !!(e && "delay" in e);
}
class ma {
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
    }), this.listeners.add(t.end.name, this.handleEnd), t.cancel && this.listeners.add(t.cancel.name, this.handleCancel), this.windowListeners.add(Ve.Resize, this.handleCancel), this.windowListeners.add(Ve.DragStart, Uu), this.windowListeners.add(Ve.VisibilityChange, this.handleCancel), this.windowListeners.add(Ve.ContextMenu, Uu), this.documentListeners.add(Ve.Keydown, this.handleKeydown), n) {
      if (r != null && r({
        event: this.props.event,
        activeNode: this.props.activeNode,
        options: this.props.options
      }))
        return this.handleStart();
      if ($u(n)) {
        this.timeoutId = setTimeout(this.handleStart, n.delay), this.handlePending(n);
        return;
      }
      if (Bu(n)) {
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
      if (Bu(s)) {
        if (s.tolerance != null && yo(u, s.tolerance))
          return this.handleCancel();
        if (yo(u, s.distance))
          return this.handleStart();
      }
      if ($u(s) && yo(u, s.tolerance))
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
    t.code === B.Esc && this.handleCancel();
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
class va extends ma {
  constructor(t) {
    const {
      event: n
    } = t, r = tr(n.target);
    super(t, lv, r);
  }
}
va.activators = [{
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
var ms;
(function(e) {
  e[e.RightClick = 2] = "RightClick";
})(ms || (ms = {}));
class ov extends ma {
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
    return n.button === ms.RightClick ? !1 : (r == null || r({
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
class sv extends ma {
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
    delta: h,
    threshold: v
  } = e;
  const y = cv({
    delta: h,
    disabled: !i
  }), [k, x] = Sm(), R = g.useRef({
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
  }, [n, l, a]), p = g.useRef(null), w = g.useCallback(() => {
    const N = p.current;
    if (!N)
      return;
    const C = R.current.x * f.current.x, E = R.current.y * f.current.y;
    N.scrollBy(C, E);
  }, []), S = g.useMemo(() => s === vi.TreeOrder ? [...u].reverse() : u, [s, u]);
  g.useEffect(
    () => {
      if (!i || !u.length || !d) {
        x();
        return;
      }
      for (const N of S) {
        if ((r == null ? void 0 : r(N)) === !1)
          continue;
        const C = u.indexOf(N), E = m[C];
        if (!E)
          continue;
        const {
          direction: D,
          speed: L
        } = Ym(N, E, d, t, v);
        for (const P of ["x", "y"])
          y[P][D[P]] || (L[P] = 0, D[P] = 0);
        if (L.x > 0 || L.y > 0) {
          x(), p.current = N, k(w, o), R.current = L, f.current = D;
          return;
        }
      }
      R.current = {
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
      S,
      m,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(v)
    ]
  );
}
const uv = {
  x: {
    [de.Backward]: !1,
    [de.Forward]: !1
  },
  y: {
    [de.Backward]: !1,
    [de.Forward]: !1
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
        [de.Backward]: l.x[de.Backward] || i.x === -1,
        [de.Forward]: l.x[de.Forward] || i.x === 1
      },
      y: {
        [de.Backward]: l.y[de.Backward] || i.y === -1,
        [de.Forward]: l.y[de.Forward] || i.y === 1
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
var vs;
(function(e) {
  e.Optimized = "optimized";
})(vs || (vs = {}));
const Hu = /* @__PURE__ */ new Map();
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
  } = l, m = g.useRef(e), h = R(), v = Yr(h), y = g.useCallback(function(f) {
    f === void 0 && (f = []), !v.current && o((d) => d === null ? f : d.concat(f.filter((p) => !d.includes(p))));
  }, [v]), k = g.useRef(null), x = il((f) => {
    if (h && !n)
      return Hu;
    if (!f || f === Hu || m.current !== e || i != null) {
      const d = /* @__PURE__ */ new Map();
      for (let p of e) {
        if (!p)
          continue;
        if (i && i.length > 0 && !i.includes(p.id) && p.rect.current) {
          d.set(p.id, p.rect.current);
          continue;
        }
        const w = p.node.current, S = w ? new pa(a(w), w) : null;
        p.rect.current = S, S && d.set(p.id, S);
      }
      return d;
    }
    return f;
  }, [e, i, n, h, a]);
  return g.useEffect(() => {
    m.current = e;
  }, [e]), g.useEffect(
    () => {
      h || y();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [n, h]
  ), g.useEffect(
    () => {
      i && i.length > 0 && o(null);
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [JSON.stringify(i)]
  ), g.useEffect(
    () => {
      h || typeof s != "number" || k.current !== null || (k.current = setTimeout(() => {
        y(), k.current = null;
      }, s));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [s, h, y, ...r]
  ), {
    droppableRects: x,
    measureDroppableContainers: y,
    measuringScheduled: i != null
  };
  function R() {
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
function ga(e, t) {
  return il((n) => e ? n || (typeof t == "function" ? t(e) : e) : null, [t, e]);
}
function hv(e, t) {
  return ga(e, t);
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
  return new pa(nr(e), e);
}
function bu(e, t, n) {
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
            target: h
          } = u;
          if (m === "childList" && h instanceof HTMLElement && h.contains(e)) {
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
  const t = ga(e);
  return vf(e, t);
}
const Vu = [];
function yv(e) {
  const t = g.useRef(e), n = il((r) => e ? r && r !== Vu && e && t.current && e.parentNode === t.current.parentNode ? r : zi(e) : Vu, [e]);
  return g.useEffect(() => {
    t.current = e;
  }, [e]), n;
}
function wv(e) {
  const [t, n] = g.useState(null), r = g.useRef(e), l = g.useCallback((i) => {
    const o = go(i.target);
    o && n((s) => s ? (s.set(o, hs(o)), new Map(s)) : null);
  }, []);
  return g.useEffect(() => {
    const i = r.current;
    if (e !== i) {
      o(i);
      const s = e.map((a) => {
        const u = go(a);
        return u ? (u.addEventListener("scroll", l, {
          passive: !0
        }), [u, hs(u)]) : null;
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
function Wu(e, t) {
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
const Qu = [];
function kv(e, t) {
  t === void 0 && (t = nr);
  const [n] = e, r = jf(n ? Re(n) : null), [l, i] = g.useState(Qu);
  function o() {
    i(() => e.length ? e.map((a) => Sf(a) ? r : new pa(t(a), a)) : Qu);
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
        r((h) => {
          const v = t(m);
          return h ? {
            ...h,
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
  sensor: va,
  options: {}
}, {
  sensor: ha,
  options: {}
}], Nv = {
  current: {}
}, $l = {
  draggable: {
    measure: Fu
  },
  droppable: {
    measure: Fu,
    strategy: Zr.WhileDragging,
    frequency: vs.Optimized
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
    case ae.DragStart:
      return {
        ...e,
        draggable: {
          ...e.draggable,
          initialCoordinates: t.initialCoordinates,
          active: t.active
        }
      };
    case ae.DragMove:
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
    case ae.DragEnd:
    case ae.DragCancel:
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
    case ae.RegisterDroppable: {
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
    case ae.SetDroppableDisabled: {
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
    case ae.UnregisterDroppable: {
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
          const h = Em(m);
          if (h) {
            h.focus();
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
    const m = n(u), h = vf(m, r);
    if (o || (h.x = 0), s || (h.y = 0), i.current = !0, Math.abs(h.x) > 0 || Math.abs(h.y) > 0) {
      const v = yf(u);
      v && v.scrollBy({
        top: h.y,
        left: h.x
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
    collisionDetection: h = Bm,
    measuring: v,
    modifiers: y,
    ...k
  } = t;
  const x = g.useReducer(Dv, void 0, Rv), [R, f] = x, [d, p] = Im(), [w, S] = g.useState(zt.Uninitialized), N = w === zt.Initialized, {
    draggable: {
      active: C,
      nodes: E,
      translate: D
    },
    droppable: {
      containers: L
    }
  } = R, P = C != null ? E.get(C) : null, F = g.useRef({
    initial: null,
    translated: null
  }), H = g.useMemo(() => {
    var ye;
    return C != null ? {
      id: C,
      // It's possible for the active node to unmount while dragging
      data: (ye = P == null ? void 0 : P.data) != null ? ye : Nv,
      rect: F
    } : null;
  }, [C, P]), re = g.useRef(null), [vt, st] = g.useState(null), [te, I] = g.useState(null), O = Yr(k, Object.values(k)), M = ol("DndDescribedBy", o), b = g.useMemo(() => L.getEnabled(), [L]), U = Iv(v), {
    droppableRects: ge,
    measureDroppableContainers: ie,
    measuringScheduled: T
  } = pv(b, {
    dragging: N,
    dependencies: [D.x, D.y],
    config: U.droppable
  }), A = dv(E, C), oe = g.useMemo(() => te ? hi(te) : null, [te]), De = Kf(), Je = hv(A, U.draggable.measure);
  Lv({
    activeNode: C != null ? E.get(C) : null,
    config: De.layoutShiftCompensation,
    initialRect: Je,
    measure: U.draggable.measure
  });
  const V = bu(A, U.draggable.measure, Je), rr = bu(A ? A.parentElement : null), at = g.useRef({
    activatorEvent: null,
    active: null,
    activeNode: A,
    collisionRect: null,
    collisions: null,
    droppableRects: ge,
    draggableNodes: E,
    draggingNode: null,
    draggingNodeRect: null,
    droppableContainers: L,
    over: null,
    scrollableAncestors: [],
    scrollAdjustedTranslate: null
  }), gn = L.getNodeFor((n = at.current.over) == null ? void 0 : n.id), gt = Cv({
    measure: U.dragOverlay.measure
  }), yn = (r = gt.nodeRef.current) != null ? r : A, wn = N ? (l = gt.rect) != null ? l : V : null, ya = !!(gt.nodeRef.current && gt.rect), wa = gv(ya ? null : V), Bi = jf(yn ? Re(yn) : null), Tt = yv(N ? gn ?? A : null), al = kv(Tt), ul = If(y, {
    transform: {
      x: D.x - wa.x,
      y: D.y - wa.y,
      scaleX: 1,
      scaleY: 1
    },
    activatorEvent: te,
    active: H,
    activeNodeRect: V,
    containerNodeRect: rr,
    draggingNodeRect: wn,
    over: at.current.over,
    overlayNodeRect: gt.rect,
    scrollableAncestors: Tt,
    scrollableAncestorRects: al,
    windowRect: Bi
  }), xa = oe ? bn(oe, D) : null, Sa = wv(Tt), Bf = Wu(Sa), $f = Wu(Sa, [V]), xn = bn(ul, Bf), Sn = wn ? bm(wn, ul) : null, lr = H && Sn ? h({
    active: H,
    collisionRect: Sn,
    droppableRects: ge,
    droppableContainers: b,
    pointerCoordinates: xa
  }) : null, ka = hf(lr, "id"), [It, Ca] = g.useState(null), Hf = ya ? ul : bn(ul, $f), bf = $m(Hf, (i = It == null ? void 0 : It.rect) != null ? i : null, V), $i = g.useRef(null), Ea = g.useCallback(
    (ye, Oe) => {
      let {
        sensor: Me,
        options: Lt
      } = Oe;
      if (re.current == null)
        return;
      const be = E.get(re.current);
      if (!be)
        return;
      const Ae = ye.nativeEvent, ut = new Me({
        active: re.current,
        activeNode: be,
        event: Ae,
        options: Lt,
        // Sensors need to be instantiated with refs for arguments that change over time
        // otherwise they are frozen in time with the stale arguments
        context: at,
        onAbort(pe) {
          if (!E.get(pe))
            return;
          const {
            onDragAbort: ct
          } = O.current, yt = {
            id: pe
          };
          ct == null || ct(yt), d({
            type: "onDragAbort",
            event: yt
          });
        },
        onPending(pe, _t, ct, yt) {
          if (!E.get(pe))
            return;
          const {
            onDragPending: or
          } = O.current, Pt = {
            id: pe,
            constraint: _t,
            initialCoordinates: ct,
            offset: yt
          };
          or == null || or(Pt), d({
            type: "onDragPending",
            event: Pt
          });
        },
        onStart(pe) {
          const _t = re.current;
          if (_t == null)
            return;
          const ct = E.get(_t);
          if (!ct)
            return;
          const {
            onDragStart: yt
          } = O.current, ir = {
            activatorEvent: Ae,
            active: {
              id: _t,
              data: ct.data,
              rect: F
            }
          };
          An.unstable_batchedUpdates(() => {
            yt == null || yt(ir), S(zt.Initializing), f({
              type: ae.DragStart,
              initialCoordinates: pe,
              active: _t
            }), d({
              type: "onDragStart",
              event: ir
            }), st($i.current), I(Ae);
          });
        },
        onMove(pe) {
          f({
            type: ae.DragMove,
            coordinates: pe
          });
        },
        onEnd: kn(ae.DragEnd),
        onCancel: kn(ae.DragCancel)
      });
      $i.current = ut;
      function kn(pe) {
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
            } = O.current;
            Pt = {
              activatorEvent: Ae,
              active: ct,
              collisions: yt,
              delta: or,
              over: ir
            }, pe === ae.DragEnd && typeof sr == "function" && await Promise.resolve(sr(Pt)) && (pe = ae.DragCancel);
          }
          re.current = null, An.unstable_batchedUpdates(() => {
            f({
              type: pe
            }), S(zt.Uninitialized), Ca(null), st(null), I(null), $i.current = null;
            const sr = pe === ae.DragEnd ? "onDragEnd" : "onDragCancel";
            if (Pt) {
              const Hi = O.current[sr];
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
    [E]
  ), Vf = g.useCallback((ye, Oe) => (Me, Lt) => {
    const be = Me.nativeEvent, Ae = E.get(Lt);
    if (
      // Another sensor is already instantiating
      re.current !== null || // No active draggable
      !Ae || // Event has already been captured
      be.dndKit || be.defaultPrevented
    )
      return;
    const ut = {
      active: Ae
    };
    ye(Me, Oe.options, ut) === !0 && (be.dndKit = {
      capturedBy: Oe.sensor
    }, re.current = Lt, Ea(Me, Oe));
  }, [E, Ea]), Na = fv(m, Vf);
  xv(m), it(() => {
    V && w === zt.Initializing && S(zt.Initialized);
  }, [V, w]), g.useEffect(
    () => {
      const {
        onDragMove: ye
      } = O.current, {
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
        ye == null || ye(Ae), d({
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
        active: ye,
        activatorEvent: Oe,
        collisions: Me,
        droppableContainers: Lt,
        scrollAdjustedTranslate: be
      } = at.current;
      if (!ye || re.current == null || !Oe || !be)
        return;
      const {
        onDragOver: Ae
      } = O.current, ut = Lt.get(ka), kn = ut && ut.rect.current ? {
        id: ut.id,
        rect: ut.rect.current,
        data: ut.data,
        disabled: ut.disabled
      } : null, pe = {
        active: ye,
        activatorEvent: Oe,
        collisions: Me,
        delta: {
          x: be.x,
          y: be.y
        },
        over: kn
      };
      An.unstable_batchedUpdates(() => {
        Ca(kn), Ae == null || Ae(pe), d({
          type: "onDragOver",
          event: pe
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [ka]
  ), it(() => {
    at.current = {
      activatorEvent: te,
      active: H,
      activeNode: A,
      collisionRect: Sn,
      collisions: lr,
      droppableRects: ge,
      draggableNodes: E,
      draggingNode: yn,
      draggingNodeRect: wn,
      droppableContainers: L,
      over: It,
      scrollableAncestors: Tt,
      scrollAdjustedTranslate: xn
    }, F.current = {
      initial: wn,
      translated: Sn
    };
  }, [H, A, lr, Sn, E, yn, wn, ge, L, It, Tt, xn]), av({
    ...De,
    delta: D,
    draggingRect: Sn,
    pointerCoordinates: xa,
    scrollableAncestors: Tt,
    scrollableAncestorRects: al
  });
  const Wf = g.useMemo(() => ({
    active: H,
    activeNode: A,
    activeNodeRect: V,
    activatorEvent: te,
    collisions: lr,
    containerNodeRect: rr,
    dragOverlay: gt,
    draggableNodes: E,
    droppableContainers: L,
    droppableRects: ge,
    over: It,
    measureDroppableContainers: ie,
    scrollableAncestors: Tt,
    scrollableAncestorRects: al,
    measuringConfiguration: U,
    measuringScheduled: T,
    windowRect: Bi
  }), [H, A, V, te, lr, rr, gt, E, L, ge, It, ie, Tt, al, U, T, Bi]), Qf = g.useMemo(() => ({
    activatorEvent: te,
    activators: Na,
    active: H,
    activeNodeRect: V,
    ariaDescribedById: {
      draggable: M
    },
    dispatch: f,
    draggableNodes: E,
    over: It,
    measureDroppableContainers: ie
  }), [te, Na, H, V, f, M, E, It, ie]);
  return G.createElement(pf.Provider, {
    value: p
  }, G.createElement(sl.Provider, {
    value: Qf
  }, G.createElement(Tf.Provider, {
    value: Wf
  }, G.createElement(Ui.Provider, {
    value: bf
  }, u)), G.createElement(Tv, {
    disabled: (s == null ? void 0 : s.restoreFocus) === !1
  })), G.createElement(Pm, {
    ...s,
    hiddenTextDescribedById: M
  }));
  function Kf() {
    const ye = (vt == null ? void 0 : vt.autoScrollEnabled) === !1, Oe = typeof a == "object" ? a.enabled === !1 : a === !1, Me = N && !ye && !Oe;
    return typeof a == "object" ? {
      ...a,
      enabled: Me
    } : {
      enabled: Me
    };
  }
}), Pv = /* @__PURE__ */ g.createContext(null), Ku = "button", Ov = "Draggable";
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
    draggableNodes: h,
    over: v
  } = g.useContext(sl), {
    role: y = Ku,
    roleDescription: k = "draggable",
    tabIndex: x = 0
  } = l ?? {}, R = (a == null ? void 0 : a.id) === t, f = g.useContext(R ? Ui : Pv), [d, p] = fi(), [w, S] = fi(), N = Sv(o, t), C = Yr(n);
  it(
    () => (h.set(t, {
      id: t,
      key: i,
      node: d,
      activatorNode: w,
      data: C
    }), () => {
      const D = h.get(t);
      D && D.key === i && h.delete(t);
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [h, t]
  );
  const E = g.useMemo(() => ({
    role: y,
    tabIndex: x,
    "aria-disabled": r,
    "aria-pressed": R && y === Ku ? !0 : void 0,
    "aria-roledescription": k,
    "aria-describedby": m.draggable
  }), [r, y, x, R, k, m.draggable]);
  return {
    active: a,
    activatorEvent: s,
    activeNodeRect: u,
    attributes: E,
    isDragging: R,
    listeners: r ? void 0 : N,
    node: d,
    over: v,
    setNodeRef: p,
    setActivatorNodeRef: S,
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
  }), h = g.useRef(!1), v = g.useRef(null), y = g.useRef(null), {
    disabled: k,
    updateMeasurementsFor: x,
    timeout: R
  } = {
    ...zv,
    ...l
  }, f = Yr(x ?? r), d = g.useCallback(
    () => {
      if (!h.current) {
        h.current = !0;
        return;
      }
      y.current != null && clearTimeout(y.current), y.current = setTimeout(() => {
        u(Array.isArray(f.current) ? f.current : [f.current]), y.current = null;
      }, R);
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [R]
  ), p = Fi({
    callback: d,
    disabled: k || !o
  }), w = g.useCallback((E, D) => {
    p && (D && (p.unobserve(D), h.current = !1), E && p.observe(E));
  }, [p]), [S, N] = fi(w), C = Yr(t);
  return g.useEffect(() => {
    !p || !S.current || (p.disconnect(), h.current = !1, p.observe(S.current));
  }, [S, p]), g.useEffect(
    () => (s({
      type: ae.RegisterDroppable,
      element: {
        id: r,
        key: i,
        disabled: n,
        node: S,
        rect: v,
        data: C
      }
    }), () => s({
      type: ae.UnregisterDroppable,
      key: i,
      id: r
    })),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [r]
  ), g.useEffect(() => {
    n !== m.current.disabled && (s({
      type: ae.SetDroppableDisabled,
      id: r,
      key: i,
      disabled: n
    }), m.current.disabled = n);
  }, [r, i, n, s]), {
    active: o,
    rect: v,
    isOver: (a == null ? void 0 : a.id) === r,
    node: S,
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
  }, [t, r, i]), G.createElement(G.Fragment, null, n, r ? g.cloneElement(r, {
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
  return G.createElement(sl.Provider, {
    value: Df
  }, G.createElement(Ui.Provider, {
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
  const h = l ? u : {
    ...u,
    scaleX: 1,
    scaleY: 1
  }, v = {
    ...$v,
    width: s.width,
    height: s.height,
    top: s.top,
    left: s.left,
    transform: Zt.Transform.toString(h),
    transformOrigin: l && r ? Am(r, s) : void 0,
    transition: typeof m == "function" ? m(r) : m,
    ...a
  };
  return G.createElement(n, {
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
    } = Re(o).getComputedStyle(o), h = gf(m);
    if (!h)
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
      transform: h
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
    }, h = {
      scaleX: a.scaleX !== 1 ? o.rect.width * a.scaleX / s.rect.width : 1,
      scaleY: a.scaleY !== 1 ? o.rect.height * a.scaleY / s.rect.height : 1
    }, v = {
      x: a.x - m.x,
      y: a.y - m.y,
      ...h
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
    const R = r == null ? void 0 : r({
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
        R == null || R(), d();
      };
    });
  };
}
let Xu = 0;
function Gv(e) {
  return g.useMemo(() => {
    if (e != null)
      return Xu++, Xu;
  }, [e]);
}
const Yv = /* @__PURE__ */ G.memo((e) => {
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
    active: h,
    activeNodeRect: v,
    containerNodeRect: y,
    draggableNodes: k,
    droppableContainers: x,
    dragOverlay: R,
    over: f,
    measuringConfiguration: d,
    scrollableAncestors: p,
    scrollableAncestorRects: w,
    windowRect: S
  } = Lf(), N = g.useContext(Ui), C = Gv(h == null ? void 0 : h.id), E = If(o, {
    activatorEvent: m,
    active: h,
    activeNodeRect: v,
    containerNodeRect: y,
    draggingNodeRect: R.rect,
    over: f,
    overlayNodeRect: R.rect,
    scrollableAncestors: p,
    scrollableAncestorRects: w,
    transform: N,
    windowRect: S
  }), D = ga(v), L = Kv({
    config: r,
    draggableNodes: k,
    droppableContainers: x,
    measuringConfiguration: d
  }), P = D ? R.setRef : void 0;
  return G.createElement(Bv, null, G.createElement(Fv, {
    animation: L
  }, h && C ? G.createElement(bv, {
    key: C,
    id: h.id,
    ref: P,
    as: s,
    activatorEvent: m,
    adjustScale: t,
    className: a,
    transition: i,
    rect: D,
    style: {
      zIndex: u,
      ...l
    },
    transform: E
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
const Mf = "Sortable", Af = /* @__PURE__ */ G.createContext({
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
  } = Lf(), h = ol(Mf, n), v = s.rect !== null, y = g.useMemo(() => r.map((N) => typeof N == "object" && "id" in N ? N.id : N), [r]), k = o != null, x = o ? y.indexOf(o.id) : -1, R = u ? y.indexOf(u.id) : -1, f = g.useRef(y), d = !Zv(y, f.current), p = R !== -1 && x === -1 || d, w = qv(i);
  it(() => {
    d && k && m(y);
  }, [d, y, k, m]), g.useEffect(() => {
    f.current = y;
  }, [y]);
  const S = g.useMemo(
    () => ({
      activeIndex: x,
      containerId: h,
      disabled: w,
      disableTransforms: p,
      items: y,
      overIndex: R,
      useDragOverlay: v,
      sortedRects: Jv(y, a),
      strategy: l
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [x, h, w.draggable, w.droppable, p, y, R, a, v, l]
  );
  return G.createElement(Af.Provider, {
    value: S
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
    containerId: h,
    activeIndex: v,
    disabled: y,
    disableTransforms: k,
    sortedRects: x,
    overIndex: R,
    useDragOverlay: f,
    strategy: d
  } = g.useContext(Af), p = cg(r, y), w = m.indexOf(o), S = g.useMemo(() => ({
    sortable: {
      containerId: h,
      index: w,
      items: m
    },
    ...l
  }), [h, l, w, m]), N = g.useMemo(() => m.slice(m.indexOf(o)), [m, o]), {
    rect: C,
    node: E,
    isOver: D,
    setNodeRef: L
  } = _f({
    id: o,
    data: S,
    disabled: p.droppable,
    resizeObserverConfig: {
      updateMeasurementsFor: N,
      ...a
    }
  }), {
    active: P,
    activatorEvent: F,
    activeNodeRect: H,
    attributes: re,
    setNodeRef: vt,
    listeners: st,
    isDragging: te,
    over: I,
    setActivatorNodeRef: O,
    transform: M
  } = Mv({
    id: o,
    data: S,
    attributes: {
      ...sg,
      ...n
    },
    disabled: p.draggable
  }), b = xm(L, vt), U = !!P, ge = U && !k && Rl(v) && Rl(R), ie = !f && te, T = ie && ge ? M : null, oe = ge ? T ?? (s ?? d)({
    rects: x,
    activeNodeRect: H,
    activeIndex: v,
    overIndex: R,
    index: w
  }) : null, De = Rl(v) && Rl(R) ? i({
    id: o,
    items: m,
    activeIndex: v,
    overIndex: R
  }) : w, Je = P == null ? void 0 : P.id, V = g.useRef({
    activeId: Je,
    items: m,
    newIndex: De,
    containerId: h
  }), rr = m !== V.current.items, at = t({
    active: P,
    containerId: h,
    isDragging: te,
    isSorting: U,
    id: o,
    index: w,
    items: m,
    newIndex: V.current.newIndex,
    previousItems: V.current.items,
    previousContainerId: V.current.containerId,
    transition: u,
    wasDragging: V.current.activeId != null
  }), gn = ag({
    disabled: !at,
    index: w,
    node: E,
    rect: C
  });
  return g.useEffect(() => {
    U && V.current.newIndex !== De && (V.current.newIndex = De), h !== V.current.containerId && (V.current.containerId = h), m !== V.current.items && (V.current.items = m);
  }, [U, De, h, m]), g.useEffect(() => {
    if (Je === V.current.activeId)
      return;
    if (Je && !V.current.activeId) {
      V.current.activeId = Je;
      return;
    }
    const yn = setTimeout(() => {
      V.current.activeId = Je;
    }, 50);
    return () => clearTimeout(yn);
  }, [Je]), {
    active: P,
    activeIndex: v,
    attributes: re,
    data: S,
    rect: C,
    index: w,
    newIndex: De,
    items: m,
    isOver: D,
    isSorting: U,
    isDragging: te,
    listeners: st,
    node: E,
    overIndex: R,
    over: I,
    setNodeRef: b,
    setActivatorNodeRef: O,
    setDroppableNodeRef: L,
    setDraggableNodeRef: vt,
    transform: gn ?? oe,
    transition: gt()
  };
  function gt() {
    if (
      // Temporarily disable transitions for a single frame to set up derived transforms
      gn || // Or to prevent items jumping to back to their "new" position when items change
      rr && V.current.newIndex === w
    )
      return og;
    if (!(ie && !Ai(F) || !u) && (U || at))
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
const dg = [B.Down, B.Right, B.Up, B.Left], fg = (e, t) => {
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
    i.getEnabled().forEach((h) => {
      if (!h || h != null && h.disabled)
        return;
      const v = l.get(h.id);
      if (v)
        switch (e.code) {
          case B.Down:
            r.top < v.top && a.push(h);
            break;
          case B.Up:
            r.top > v.top && a.push(h);
            break;
          case B.Left:
            r.left > v.left && a.push(h);
            break;
          case B.Right:
            r.left < v.left && a.push(h);
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
      const h = i.get(n.id), v = i.get(m), y = v ? l.get(v.id) : null, k = v == null ? void 0 : v.node.current;
      if (k && y && h && v) {
        const R = zi(k).some((N, C) => s[C] !== N), f = Ff(h, v), d = pg(h, v), p = R || !f ? {
          x: 0,
          y: 0
        } : {
          x: d ? r.width - y.width : 0,
          y: d ? r.height - y.height : 0
        }, w = {
          x: y.left,
          y: y.top
        };
        return p.x && p.y ? w : Jr(w, p);
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
  }, m = e.status === "HANDLE" || e.status === "AI_PROCESSING", h = e.status === "TO_REVIEW" && e.prLink;
  return /* @__PURE__ */ c.jsxs(
    "div",
    {
      ref: i,
      style: u,
      className: `ticket-card ${t || a ? "dragging" : ""} ${h ? "success-glow" : ""}`,
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
  const [s, a] = g.useState(""), [u, m] = g.useState(Sg), [h, v] = g.useState("MEDIUM"), [y, k] = g.useState(r), [x, R] = g.useState(""), [f, d] = g.useState([]), [p, w] = g.useState(""), [S, N] = g.useState(!1), [C, E] = g.useState(!1), [D, L] = g.useState(""), [P, F] = g.useState("auto"), [H, re] = g.useState(["auto"]), [vt, st] = g.useState(!0), te = g.useRef(null), I = g.useRef(null);
  g.useEffect(() => {
    var T;
    (T = te.current) == null || T.focus();
  }, []), g.useEffect(() => {
    (async () => {
      try {
        const A = Gu(), oe = await fetch("/api/cursor/models", {
          headers: { "X-CSRF-Token": A }
        });
        if (oe.ok) {
          const De = await oe.json();
          re(De.models || ["auto"]);
        }
      } catch (A) {
        console.error("Failed to fetch models:", A);
      } finally {
        st(!1);
      }
    })();
  }, []), g.useEffect(() => {
    const T = (A) => {
      A.key === "Escape" && i(), (A.metaKey || A.ctrlKey) && A.key === "Enter" && (A.preventDefault(), M(A));
    };
    return document.addEventListener("keydown", T), () => document.removeEventListener("keydown", T);
  }, [i, s, u, h, y]);
  const O = (T) => T.replace(/##\s*What needs to be done\s*/gi, "").replace(/##\s*Acceptance Criteria\s*/gi, "").replace(/##\s*Technical Details\s*/gi, "").replace(/##\s*Additional Context\s*/gi, "").replace(/Describe the task clearly.*\?/gi, "").replace(/Any specific implementation.*\?/gi, "").replace(/Links, screenshots.*help\./gi, "").replace(/-\s*\[\s*\]\s*Criterion \d+/gi, "").replace(/\s+/g, " ").trim().length >= 20, M = g.useCallback(
    async (T) => {
      var A;
      if (T.preventDefault(), L(""), !s.trim()) {
        L("Title is required"), (A = te.current) == null || A.focus();
        return;
      }
      if (!u.trim()) {
        L("Description is required - the AI needs context to work!");
        return;
      }
      if (!O(u)) {
        L("Please fill in the description template with actual task details. The AI needs this information to implement the feature correctly.");
        return;
      }
      E(!0);
      try {
        const oe = Gu(), De = await fetch(`/api/tickets/${e}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-CSRF-Token": oe
          },
          body: JSON.stringify({
            title: s.trim(),
            description: u.trim(),
            priority: h,
            status: "BACKLOG",
            targetBranch: y,
            assigneeId: x || void 0,
            labels: f,
            aiModel: P !== "auto" ? P : void 0
          })
        });
        if (!De.ok) {
          const V = await De.json().catch(() => ({}));
          throw new Error(V.message || "Failed to create ticket");
        }
        const Je = await De.json();
        o(Je);
      } catch (oe) {
        L(oe instanceof Error ? oe.message : "Failed to create ticket");
      } finally {
        E(!1);
      }
    },
    [e, s, u, h, y, x, f, o]
  ), b = g.useCallback(() => {
    const T = p.trim().toLowerCase();
    T && !f.includes(T) && (d([...f, T]), w(""));
  }, [p, f]), U = g.useCallback((T) => {
    d(f.filter((A) => A !== T));
  }, [f]), ge = g.useCallback((T) => {
    T.key === "Enter" && (T.preventDefault(), b());
  }, [b]), ie = O(u);
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
        /* @__PURE__ */ c.jsxs("form", { onSubmit: M, className: "ticket-modal-form", children: [
          D && /* @__PURE__ */ c.jsxs("div", { className: "ticket-error", children: [
            /* @__PURE__ */ c.jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
              /* @__PURE__ */ c.jsx("circle", { cx: "12", cy: "12", r: "10" }),
              /* @__PURE__ */ c.jsx("path", { d: "M12 8v4M12 16h.01" })
            ] }),
            D
          ] }),
          /* @__PURE__ */ c.jsxs("div", { className: "ticket-field", children: [
            /* @__PURE__ */ c.jsxs("label", { className: "ticket-label", children: [
              "Title ",
              /* @__PURE__ */ c.jsx("span", { className: "text-red-400", children: "*" })
            ] }),
            /* @__PURE__ */ c.jsx(
              "input",
              {
                ref: te,
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
                className: `ticket-description-input ${ie ? "" : "ticket-description-warning"}`,
                value: u,
                onChange: (T) => m(T.target.value),
                rows: 12,
                required: !0
              }
            ),
            !ie && /* @__PURE__ */ c.jsx("p", { className: "ticket-warning-hint", children: "⚠️ Fill in the template with actual task details" })
          ] }),
          /* @__PURE__ */ c.jsxs("div", { className: "ticket-meta-grid", children: [
            /* @__PURE__ */ c.jsxs("div", { className: "ticket-field", children: [
              /* @__PURE__ */ c.jsx("label", { className: "ticket-label", children: "Priority" }),
              /* @__PURE__ */ c.jsx("div", { className: "ticket-priority-selector", children: wg.map((T) => /* @__PURE__ */ c.jsxs(
                "button",
                {
                  type: "button",
                  className: `ticket-priority-btn ${h === T.value ? "active" : ""} ${T.color}`,
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
              vt ? /* @__PURE__ */ c.jsxs("div", { className: "ticket-model-loading", children: [
                /* @__PURE__ */ c.jsx("span", { className: "ticket-spinner-small" }),
                "Loading models..."
              ] }) : /* @__PURE__ */ c.jsx(
                "select",
                {
                  className: "ticket-select",
                  value: P,
                  onChange: (T) => F(T.target.value),
                  children: H.map((T) => {
                    const A = xg[T] || {
                      label: T.replace(/-/g, " ").replace(/\b\w/g, (oe) => oe.toUpperCase()),
                      description: ""
                    };
                    return /* @__PURE__ */ c.jsxs("option", { value: T, children: [
                      A.label,
                      A.description ? ` - ${A.description}` : ""
                    ] }, T);
                  })
                }
              )
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
              onClick: () => N(!S),
              children: [
                /* @__PURE__ */ c.jsx(
                  "svg",
                  {
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    className: `w-4 h-4 transition-transform ${S ? "rotate-90" : ""}`,
                    children: /* @__PURE__ */ c.jsx("path", { d: "M9 18l6-6-6-6" })
                  }
                ),
                /* @__PURE__ */ c.jsx("span", { children: "More options" })
              ]
            }
          ),
          S && /* @__PURE__ */ c.jsxs("div", { className: "ticket-advanced-section", children: [
            l.length > 0 && /* @__PURE__ */ c.jsxs("div", { className: "ticket-field", children: [
              /* @__PURE__ */ c.jsx("label", { className: "ticket-label", children: "Assignee" }),
              /* @__PURE__ */ c.jsxs("div", { className: "ticket-assignee-selector", children: [
                /* @__PURE__ */ c.jsxs(
                  "button",
                  {
                    type: "button",
                    className: `ticket-assignee-btn ${x ? "" : "active"}`,
                    onClick: () => R(""),
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
                    onClick: () => R(T.id),
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
                      onClick: () => U(T),
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
                    value: p,
                    onChange: (T) => w(T.target.value),
                    onKeyDown: ge,
                    onBlur: b
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
                disabled: C,
                children: "Cancel"
              }
            ),
            /* @__PURE__ */ c.jsx(
              "button",
              {
                type: "submit",
                className: "ticket-btn-primary",
                disabled: C || !s.trim() || !ie,
                children: C ? /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
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
function Gu() {
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
function jg({ agentId: e, ticketTitle: t, onStatusChange: n, onStop: r }) {
  var N, C, E, D, L;
  const [l, i] = g.useState(null), [o, s] = g.useState([]), [a, u] = g.useState(!0), [m, h] = g.useState(null), [v, y] = g.useState(!0), [k, x] = g.useState(!1), R = g.useRef(null), f = g.useRef(null), d = g.useCallback(async () => {
    if (!(k || !window.confirm("Are you sure you want to stop the AI agent? This cannot be undone."))) {
      x(!0);
      try {
        const F = xo(), H = await fetch(`/api/cursor/agents/${e}/stop`, {
          method: "POST",
          headers: {
            "X-CSRF-Token": F,
            "Content-Type": "application/json"
          }
        });
        if (!H.ok) {
          const re = await H.json();
          throw new Error(re.error || "Failed to stop agent");
        }
        i((re) => re ? { ...re, status: "CANCELLED" } : null), f.current && (clearInterval(f.current), f.current = null), n && n("CANCELLED"), r && r();
      } catch (F) {
        console.error("Stop agent error:", F), h(F instanceof Error ? F.message : "Failed to stop agent");
      } finally {
        x(!1);
      }
    }
  }, [e, k, n, r]), p = g.useCallback(async () => {
    try {
      const P = xo(), F = await fetch(`/api/cursor/agents/${e}/status`, {
        headers: { "X-CSRF-Token": P }
      });
      if (!F.ok) {
        if (F.status === 404) {
          h("Agent not found. It may have been deleted.");
          return;
        }
        throw new Error("Failed to fetch status");
      }
      const H = await F.json();
      i(H), n && H.status && n(H.status), (H.status === "FINISHED" || H.status === "ERROR" || H.status === "CANCELLED") && f.current && (clearInterval(f.current), f.current = null);
    } catch (P) {
      console.error("Status fetch error:", P), h("Failed to fetch agent status");
    }
  }, [e, n]), w = g.useCallback(async () => {
    try {
      const P = xo(), F = await fetch(`/api/cursor/agents/${e}/conversation`, {
        headers: { "X-CSRF-Token": P }
      });
      if (!F.ok) {
        if (F.status === 404) return;
        throw new Error("Failed to fetch conversation");
      }
      const H = await F.json();
      s(H.messages || []), R.current && (R.current.scrollTop = R.current.scrollHeight);
    } catch (P) {
      console.error("Conversation fetch error:", P);
    }
  }, [e]);
  if (g.useEffect(() => (u(!0), h(null), (async () => {
    await Promise.all([p(), w()]), u(!1);
  })(), f.current = setInterval(() => {
    p(), w();
  }, 3e3), () => {
    f.current && clearInterval(f.current);
  }), [e, p, w]), g.useEffect(() => {
    R.current && o.length > 0 && (R.current.scrollTop = R.current.scrollHeight);
  }, [o]), a)
    return /* @__PURE__ */ c.jsx("div", { className: "agent-status-panel loading", children: /* @__PURE__ */ c.jsxs("div", { className: "agent-status-header", children: [
      /* @__PURE__ */ c.jsx("div", { className: "agent-spinner" }),
      /* @__PURE__ */ c.jsx("span", { children: "Connecting to Cursor Agent..." })
    ] }) });
  if (m)
    return /* @__PURE__ */ c.jsx("div", { className: "agent-status-panel error", children: /* @__PURE__ */ c.jsx("div", { className: "agent-status-header", children: /* @__PURE__ */ c.jsxs("span", { className: "text-red-400", children: [
      "❌ ",
      m
    ] }) }) });
  const S = (l == null ? void 0 : l.status) || "QUEUED";
  return /* @__PURE__ */ c.jsxs("div", { className: `agent-status-panel ${S.toLowerCase()}`, children: [
    /* @__PURE__ */ c.jsxs(
      "button",
      {
        className: "agent-status-header",
        onClick: () => y(!v),
        "aria-expanded": v,
        children: [
          /* @__PURE__ */ c.jsxs("div", { className: "agent-status-info", children: [
            /* @__PURE__ */ c.jsx("span", { className: "agent-status-indicator", children: S === "RUNNING" ? /* @__PURE__ */ c.jsx("span", { className: "agent-spinner-small" }) : Eg[S] }),
            /* @__PURE__ */ c.jsx("span", { className: `agent-status-text ${Cg[S]}`, children: Ng[S] }),
            ((N = l == null ? void 0 : l.target) == null ? void 0 : N.branchName) && /* @__PURE__ */ c.jsxs("span", { className: "agent-branch", children: [
              /* @__PURE__ */ c.jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", className: "w-3 h-3", children: [
                /* @__PURE__ */ c.jsx("line", { x1: "6", x2: "6", y1: "3", y2: "15" }),
                /* @__PURE__ */ c.jsx("circle", { cx: "18", cy: "6", r: "3" }),
                /* @__PURE__ */ c.jsx("circle", { cx: "6", cy: "18", r: "3" }),
                /* @__PURE__ */ c.jsx("path", { d: "M18 9a9 9 0 0 1-9 9" })
              ] }),
              l.target.branchName
            ] })
          ] }),
          /* @__PURE__ */ c.jsxs("div", { className: "agent-status-actions", children: [
            (S === "RUNNING" || S === "QUEUED") && /* @__PURE__ */ c.jsxs(
              "button",
              {
                className: "agent-stop-btn",
                onClick: (P) => {
                  P.stopPropagation(), d();
                },
                disabled: k,
                title: "Emergency Stop - Stop the AI agent immediately",
                children: [
                  k ? /* @__PURE__ */ c.jsx("span", { className: "agent-spinner-small" }) : /* @__PURE__ */ c.jsx("svg", { viewBox: "0 0 24 24", fill: "currentColor", className: "w-3.5 h-3.5", children: /* @__PURE__ */ c.jsx("rect", { x: "6", y: "6", width: "12", height: "12", rx: "1" }) }),
                  /* @__PURE__ */ c.jsx("span", { children: k ? "Stopping..." : "Stop" })
                ]
              }
            ),
            ((C = l == null ? void 0 : l.target) == null ? void 0 : C.url) && /* @__PURE__ */ c.jsx(
              "a",
              {
                href: l.target.url,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "agent-link",
                onClick: (P) => P.stopPropagation(),
                children: "View in Cursor ↗"
              }
            ),
            ((E = l == null ? void 0 : l.target) == null ? void 0 : E.prUrl) && /* @__PURE__ */ c.jsx(
              "a",
              {
                href: l.target.prUrl,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "agent-link pr",
                onClick: (P) => P.stopPropagation(),
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
                className: `agent-expand-icon ${v ? "expanded" : ""}`,
                children: /* @__PURE__ */ c.jsx("path", { d: "M6 9l6 6 6-6" })
              }
            )
          ] })
        ]
      }
    ),
    v && /* @__PURE__ */ c.jsxs("div", { className: "agent-status-content", children: [
      (l == null ? void 0 : l.summary) && /* @__PURE__ */ c.jsxs("div", { className: "agent-summary", children: [
        /* @__PURE__ */ c.jsx("h4", { children: "Summary" }),
        /* @__PURE__ */ c.jsx("p", { children: l.summary })
      ] }),
      /* @__PURE__ */ c.jsxs("div", { className: "agent-terminal", ref: R, children: [
        /* @__PURE__ */ c.jsxs("div", { className: "agent-terminal-header", children: [
          /* @__PURE__ */ c.jsxs("div", { className: "terminal-dots", children: [
            /* @__PURE__ */ c.jsx("span", { className: "dot red" }),
            /* @__PURE__ */ c.jsx("span", { className: "dot yellow" }),
            /* @__PURE__ */ c.jsx("span", { className: "dot green" })
          ] }),
          /* @__PURE__ */ c.jsx("span", { className: "terminal-title", children: "Agent Conversation" })
        ] }),
        /* @__PURE__ */ c.jsxs("div", { className: "agent-terminal-body", children: [
          o.length === 0 ? /* @__PURE__ */ c.jsx("div", { className: "terminal-empty", children: S === "QUEUED" ? "Waiting for agent to start..." : S === "RUNNING" ? "Agent is processing..." : "No conversation data available." }) : o.map((P, F) => /* @__PURE__ */ c.jsxs(
            "div",
            {
              className: `terminal-message ${P.type}`,
              children: [
                /* @__PURE__ */ c.jsx("span", { className: "terminal-prompt", children: P.type === "user_message" ? "$ " : "→ " }),
                /* @__PURE__ */ c.jsx("span", { className: "terminal-text", children: P.text })
              ]
            },
            P.id || F
          )),
          S === "RUNNING" && /* @__PURE__ */ c.jsx("div", { className: "terminal-cursor", children: /* @__PURE__ */ c.jsx("span", { className: "cursor-blink", children: "▋" }) })
        ] })
      ] }),
      /* @__PURE__ */ c.jsxs("div", { className: "agent-meta", children: [
        ((D = l == null ? void 0 : l.source) == null ? void 0 : D.repository) && /* @__PURE__ */ c.jsxs("div", { className: "agent-meta-item", children: [
          /* @__PURE__ */ c.jsx("span", { className: "meta-label", children: "Repository:" }),
          /* @__PURE__ */ c.jsx(
            "a",
            {
              href: l.source.repository,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "meta-link",
              children: l.source.repository.replace("https://github.com/", "")
            }
          )
        ] }),
        ((L = l == null ? void 0 : l.source) == null ? void 0 : L.ref) && /* @__PURE__ */ c.jsxs("div", { className: "agent-meta-item", children: [
          /* @__PURE__ */ c.jsx("span", { className: "meta-label", children: "Source Branch:" }),
          /* @__PURE__ */ c.jsx("code", { children: l.source.ref })
        ] }),
        (l == null ? void 0 : l.createdAt) && /* @__PURE__ */ c.jsxs("div", { className: "agent-meta-item", children: [
          /* @__PURE__ */ c.jsx("span", { className: "meta-label", children: "Started:" }),
          /* @__PURE__ */ c.jsx("span", { children: new Date(l.createdAt).toLocaleString() })
        ] })
      ] })
    ] })
  ] });
}
function xo() {
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
  const [l, i] = g.useState(!1), [o, s] = g.useState(e.title), [a, u] = g.useState(e.description || ""), [m, h] = g.useState(e.priority), [v, y] = g.useState(e.status), [k, x] = g.useState(!1), [R, f] = g.useState(""), [d, p] = g.useState(null), w = g.useCallback((D) => {
    p(D), D === "FINISHED" && e.status === "AI_PROCESSING" ? r({ ...e, status: "TO_REVIEW" }) : D === "ERROR" && e.status === "AI_PROCESSING" && r({ ...e, status: "TODO" });
  }, [e, r]), S = g.useCallback(async () => {
    if (!o.trim()) {
      f("Title is required");
      return;
    }
    x(!0), f("");
    try {
      const D = Yu(), L = await fetch(`/api/tickets/${t}/${e.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "X-CSRF-Token": D
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
      const P = await L.json();
      r(P);
    } catch (D) {
      f(D instanceof Error ? D.message : "Failed to update ticket");
    } finally {
      x(!1);
    }
  }, [t, e.id, o, a, m, v, r]), N = g.useCallback(async () => {
    if (confirm("Are you sure you want to delete this ticket?")) {
      x(!0);
      try {
        const D = Yu();
        if (!(await fetch(`/api/tickets/${t}/${e.id}`, {
          method: "DELETE",
          headers: {
            "X-CSRF-Token": D
          }
        })).ok)
          throw new Error("Failed to delete ticket");
        r({ ...e, status: "CANCELLED" }), n();
      } catch (D) {
        f(D instanceof Error ? D.message : "Failed to delete ticket");
      } finally {
        x(!1);
      }
    }
  }, [t, e, r, n]), C = g.useCallback(
    (D) => {
      D.key === "Escape" && n();
    },
    [n]
  ), E = e.status === "HANDLE" || e.status === "AI_PROCESSING";
  return /* @__PURE__ */ c.jsx(
    "div",
    {
      className: "modal-overlay",
      onClick: n,
      onKeyDown: C,
      role: "dialog",
      "aria-modal": "true",
      children: /* @__PURE__ */ c.jsxs(
        "div",
        {
          className: "modal-content modal-lg",
          onClick: (D) => D.stopPropagation(),
          children: [
            /* @__PURE__ */ c.jsxs("div", { className: "modal-header", children: [
              /* @__PURE__ */ c.jsxs("div", { className: "flex-1", children: [
                l ? /* @__PURE__ */ c.jsx(
                  "input",
                  {
                    type: "text",
                    className: "form-input text-lg font-semibold",
                    value: o,
                    onChange: (D) => s(D.target.value),
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
              R && /* @__PURE__ */ c.jsx("div", { className: "mb-4 p-3 text-sm rounded-md bg-destructive/10 text-destructive border border-destructive/20", children: R }),
              e.agentId && /* @__PURE__ */ c.jsx("div", { className: "mb-4", children: /* @__PURE__ */ c.jsx(
                jg,
                {
                  agentId: e.agentId,
                  ticketTitle: e.title,
                  onStatusChange: w
                }
              ) }),
              E && !e.agentId && /* @__PURE__ */ c.jsxs("div", { className: "mb-4 p-4 rounded-md bg-status-processing/10 border border-status-processing/20", children: [
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
                    onChange: (D) => u(D.target.value),
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
                      onChange: (D) => h(D.target.value),
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
                      onChange: (D) => y(D.target.value),
                      disabled: E,
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
                    i(!1), s(e.title), u(e.description || ""), h(e.priority), y(e.status);
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
                  onClick: S,
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
                  disabled: E,
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
        const p = JSON.parse(f.textContent);
        t(p);
      } catch (p) {
        console.error("Failed to parse board state:", p);
      }
    const d = document.getElementById("new-ticket-btn");
    return d && d.addEventListener("click", () => s(!0)), document.querySelectorAll(".tab-btn").forEach((p) => {
      p.addEventListener("click", (w) => {
        const S = w.target.dataset.column;
        S && (u(S), document.querySelectorAll(".tab-btn").forEach((N) => {
          N.classList.remove("bg-muted"), N.classList.add("hover:bg-muted");
        }), w.target.classList.add("bg-muted"), w.target.classList.remove("hover:bg-muted"));
      });
    }), () => {
      d && d.removeEventListener("click", () => s(!0));
    };
  }, []), g.useEffect(() => {
    if (!(e != null && e.projectId)) return;
    const f = setInterval(async () => {
      var d, p;
      if (!(n || l || o))
        try {
          const w = await fetch(`/project/${e.projectId}/board/state`);
          if (!w.ok) return;
          const S = await w.json();
          (S.tickets.length !== e.tickets.length || S.tickets.some((C) => {
            const E = e.tickets.find((D) => D.id === C.id);
            return !E || E.status !== C.status || E.title !== C.title || E.assigneeId !== C.assigneeId;
          }) || ((d = S.members) == null ? void 0 : d.length) !== ((p = e.members) == null ? void 0 : p.length)) && (t(S), vr("Board updated", "success"));
        } catch (w) {
          console.debug("Sync poll failed:", w);
        }
    }, 5e3);
    return () => clearInterval(f);
  }, [e == null ? void 0 : e.projectId, e == null ? void 0 : e.tickets, n, l, o]);
  const m = Om(
    Au(va, {
      activationConstraint: { distance: 8 }
    }),
    Au(ha, {
      coordinateGetter: fg
    })
  ), h = g.useCallback(
    (f) => {
      const d = f.active.id, p = e == null ? void 0 : e.tickets.find((w) => w.id === d);
      p && r(p);
    },
    [e]
  ), v = g.useCallback((f) => {
  }, []), y = g.useCallback(
    async (f) => {
      const { active: d, over: p } = f;
      if (r(null), !p || !e) return;
      const w = d.id, S = p.id, N = e.tickets.find((C) => C.id === w);
      if (!(!N || N.status === S)) {
        t((C) => C && {
          ...C,
          tickets: C.tickets.map(
            (E) => E.id === w ? { ...E, status: S } : E
          )
        }), S === "HANDLE" && vr(`Ticket #${N.id.slice(-4)} dispatched to Cursor Agent`, "warning");
        try {
          const C = Lg();
          if (!(await fetch(
            `/api/tickets/${e.projectId}/${w}/status`,
            {
              method: "PATCH",
              headers: {
                "Content-Type": "application/json",
                "X-CSRF-Token": C
              },
              body: JSON.stringify({ status: S })
            }
          )).ok)
            throw new Error("Failed to update ticket status");
          S === "HANDLE" && vr("AI agent started processing", "success");
        } catch (C) {
          console.error("Failed to update ticket:", C), vr("Failed to update ticket", "error"), t((E) => E && {
            ...E,
            tickets: E.tickets.map(
              (D) => D.id === w ? { ...D, status: N.status } : D
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
        (p) => p.id === f.id ? f : p
      )
    }), i(null);
  }, []), R = g.useCallback((f) => {
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
        onDragStart: h,
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
        onSubmit: R
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
  So.createRoot(e).render(
    /* @__PURE__ */ c.jsx(G.StrictMode, { children: /* @__PURE__ */ c.jsx(Ig, {}) })
  );
}
document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", Ju) : Ju();
