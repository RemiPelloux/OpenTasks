function Qh(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var zc = { exports: {} }, Ms = {}, Fc = { exports: {} }, K = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var di = Symbol.for("react.element"), Xh = Symbol.for("react.portal"), Yh = Symbol.for("react.fragment"), qh = Symbol.for("react.strict_mode"), Gh = Symbol.for("react.profiler"), Jh = Symbol.for("react.provider"), Zh = Symbol.for("react.context"), ep = Symbol.for("react.forward_ref"), tp = Symbol.for("react.suspense"), np = Symbol.for("react.memo"), rp = Symbol.for("react.lazy"), au = Symbol.iterator;
function ip(e) {
  return e === null || typeof e != "object" ? null : (e = au && e[au] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Bc = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, Uc = Object.assign, $c = {};
function or(e, t, n) {
  this.props = e, this.context = t, this.refs = $c, this.updater = n || Bc;
}
or.prototype.isReactComponent = {};
or.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
or.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Vc() {
}
Vc.prototype = or.prototype;
function Xl(e, t, n) {
  this.props = e, this.context = t, this.refs = $c, this.updater = n || Bc;
}
var Yl = Xl.prototype = new Vc();
Yl.constructor = Xl;
Uc(Yl, or.prototype);
Yl.isPureReactComponent = !0;
var uu = Array.isArray, Wc = Object.prototype.hasOwnProperty, ql = { current: null }, Hc = { key: !0, ref: !0, __self: !0, __source: !0 };
function Kc(e, t, n) {
  var r, i = {}, s = null, o = null;
  if (t != null) for (r in t.ref !== void 0 && (o = t.ref), t.key !== void 0 && (s = "" + t.key), t) Wc.call(t, r) && !Hc.hasOwnProperty(r) && (i[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) i.children = n;
  else if (1 < l) {
    for (var a = Array(l), c = 0; c < l; c++) a[c] = arguments[c + 2];
    i.children = a;
  }
  if (e && e.defaultProps) for (r in l = e.defaultProps, l) i[r] === void 0 && (i[r] = l[r]);
  return { $$typeof: di, type: e, key: s, ref: o, props: i, _owner: ql.current };
}
function sp(e, t) {
  return { $$typeof: di, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Gl(e) {
  return typeof e == "object" && e !== null && e.$$typeof === di;
}
function op(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var cu = /\/+/g;
function co(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? op("" + e.key) : t.toString(36);
}
function Wi(e, t, n, r, i) {
  var s = typeof e;
  (s === "undefined" || s === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else switch (s) {
    case "string":
    case "number":
      o = !0;
      break;
    case "object":
      switch (e.$$typeof) {
        case di:
        case Xh:
          o = !0;
      }
  }
  if (o) return o = e, i = i(o), e = r === "" ? "." + co(o, 0) : r, uu(i) ? (n = "", e != null && (n = e.replace(cu, "$&/") + "/"), Wi(i, t, n, "", function(c) {
    return c;
  })) : i != null && (Gl(i) && (i = sp(i, n + (!i.key || o && o.key === i.key ? "" : ("" + i.key).replace(cu, "$&/") + "/") + e)), t.push(i)), 1;
  if (o = 0, r = r === "" ? "." : r + ":", uu(e)) for (var l = 0; l < e.length; l++) {
    s = e[l];
    var a = r + co(s, l);
    o += Wi(s, t, n, a, i);
  }
  else if (a = ip(e), typeof a == "function") for (e = a.call(e), l = 0; !(s = e.next()).done; ) s = s.value, a = r + co(s, l++), o += Wi(s, t, n, a, i);
  else if (s === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return o;
}
function Si(e, t, n) {
  if (e == null) return e;
  var r = [], i = 0;
  return Wi(e, r, "", "", function(s) {
    return t.call(n, s, i++);
  }), r;
}
function lp(e) {
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
var De = { current: null }, Hi = { transition: null }, ap = { ReactCurrentDispatcher: De, ReactCurrentBatchConfig: Hi, ReactCurrentOwner: ql };
function Qc() {
  throw Error("act(...) is not supported in production builds of React.");
}
K.Children = { map: Si, forEach: function(e, t, n) {
  Si(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return Si(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return Si(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!Gl(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
K.Component = or;
K.Fragment = Yh;
K.Profiler = Gh;
K.PureComponent = Xl;
K.StrictMode = qh;
K.Suspense = tp;
K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ap;
K.act = Qc;
K.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = Uc({}, e.props), i = e.key, s = e.ref, o = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (s = t.ref, o = ql.current), t.key !== void 0 && (i = "" + t.key), e.type && e.type.defaultProps) var l = e.type.defaultProps;
    for (a in t) Wc.call(t, a) && !Hc.hasOwnProperty(a) && (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    l = Array(a);
    for (var c = 0; c < a; c++) l[c] = arguments[c + 2];
    r.children = l;
  }
  return { $$typeof: di, type: e.type, key: i, ref: s, props: r, _owner: o };
};
K.createContext = function(e) {
  return e = { $$typeof: Zh, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: Jh, _context: e }, e.Consumer = e;
};
K.createElement = Kc;
K.createFactory = function(e) {
  var t = Kc.bind(null, e);
  return t.type = e, t;
};
K.createRef = function() {
  return { current: null };
};
K.forwardRef = function(e) {
  return { $$typeof: ep, render: e };
};
K.isValidElement = Gl;
K.lazy = function(e) {
  return { $$typeof: rp, _payload: { _status: -1, _result: e }, _init: lp };
};
K.memo = function(e, t) {
  return { $$typeof: np, type: e, compare: t === void 0 ? null : t };
};
K.startTransition = function(e) {
  var t = Hi.transition;
  Hi.transition = {};
  try {
    e();
  } finally {
    Hi.transition = t;
  }
};
K.unstable_act = Qc;
K.useCallback = function(e, t) {
  return De.current.useCallback(e, t);
};
K.useContext = function(e) {
  return De.current.useContext(e);
};
K.useDebugValue = function() {
};
K.useDeferredValue = function(e) {
  return De.current.useDeferredValue(e);
};
K.useEffect = function(e, t) {
  return De.current.useEffect(e, t);
};
K.useId = function() {
  return De.current.useId();
};
K.useImperativeHandle = function(e, t, n) {
  return De.current.useImperativeHandle(e, t, n);
};
K.useInsertionEffect = function(e, t) {
  return De.current.useInsertionEffect(e, t);
};
K.useLayoutEffect = function(e, t) {
  return De.current.useLayoutEffect(e, t);
};
K.useMemo = function(e, t) {
  return De.current.useMemo(e, t);
};
K.useReducer = function(e, t, n) {
  return De.current.useReducer(e, t, n);
};
K.useRef = function(e) {
  return De.current.useRef(e);
};
K.useState = function(e) {
  return De.current.useState(e);
};
K.useSyncExternalStore = function(e, t, n) {
  return De.current.useSyncExternalStore(e, t, n);
};
K.useTransition = function() {
  return De.current.useTransition();
};
K.version = "18.3.1";
Fc.exports = K;
var g = Fc.exports;
const te = /* @__PURE__ */ Qh(g);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var up = g, cp = Symbol.for("react.element"), dp = Symbol.for("react.fragment"), fp = Object.prototype.hasOwnProperty, hp = up.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, pp = { key: !0, ref: !0, __self: !0, __source: !0 };
function Xc(e, t, n) {
  var r, i = {}, s = null, o = null;
  n !== void 0 && (s = "" + n), t.key !== void 0 && (s = "" + t.key), t.ref !== void 0 && (o = t.ref);
  for (r in t) fp.call(t, r) && !pp.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) i[r] === void 0 && (i[r] = t[r]);
  return { $$typeof: cp, type: e, key: s, ref: o, props: i, _owner: hp.current };
}
Ms.Fragment = dp;
Ms.jsx = Xc;
Ms.jsxs = Xc;
zc.exports = Ms;
var u = zc.exports, Ko = {}, Yc = { exports: {} }, Ke = {}, qc = { exports: {} }, Gc = {};
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
  function t(T, O) {
    var M = T.length;
    T.push(O);
    e: for (; 0 < M; ) {
      var W = M - 1 >>> 1, U = T[W];
      if (0 < i(U, O)) T[W] = O, T[M] = U, M = W;
      else break e;
    }
  }
  function n(T) {
    return T.length === 0 ? null : T[0];
  }
  function r(T) {
    if (T.length === 0) return null;
    var O = T[0], M = T.pop();
    if (M !== O) {
      T[0] = M;
      e: for (var W = 0, U = T.length, re = U >>> 1; W < re; ) {
        var ue = 2 * (W + 1) - 1, D = T[ue], R = ue + 1, V = T[R];
        if (0 > i(D, M)) R < U && 0 > i(V, D) ? (T[W] = V, T[R] = M, W = R) : (T[W] = D, T[ue] = M, W = ue);
        else if (R < U && 0 > i(V, M)) T[W] = V, T[R] = M, W = R;
        else break e;
      }
    }
    return O;
  }
  function i(T, O) {
    var M = T.sortIndex - O.sortIndex;
    return M !== 0 ? M : T.id - O.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var s = performance;
    e.unstable_now = function() {
      return s.now();
    };
  } else {
    var o = Date, l = o.now();
    e.unstable_now = function() {
      return o.now() - l;
    };
  }
  var a = [], c = [], d = 1, h = null, m = 3, y = !1, k = !1, x = !1, j = typeof setTimeout == "function" ? setTimeout : null, p = typeof clearTimeout == "function" ? clearTimeout : null, f = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function v(T) {
    for (var O = n(c); O !== null; ) {
      if (O.callback === null) r(c);
      else if (O.startTime <= T) r(c), O.sortIndex = O.expirationTime, t(a, O);
      else break;
      O = n(c);
    }
  }
  function w(T) {
    if (x = !1, v(T), !k) if (n(a) !== null) k = !0, L(S);
    else {
      var O = n(c);
      O !== null && P(w, O.startTime - T);
    }
  }
  function S(T, O) {
    k = !1, x && (x = !1, p(N), N = -1), y = !0;
    var M = m;
    try {
      for (v(O), h = n(a); h !== null && (!(h.expirationTime > O) || T && !z()); ) {
        var W = h.callback;
        if (typeof W == "function") {
          h.callback = null, m = h.priorityLevel;
          var U = W(h.expirationTime <= O);
          O = e.unstable_now(), typeof U == "function" ? h.callback = U : h === n(a) && r(a), v(O);
        } else r(a);
        h = n(a);
      }
      if (h !== null) var re = !0;
      else {
        var ue = n(c);
        ue !== null && P(w, ue.startTime - O), re = !1;
      }
      return re;
    } finally {
      h = null, m = M, y = !1;
    }
  }
  var C = !1, E = null, N = -1, B = 5, I = -1;
  function z() {
    return !(e.unstable_now() - I < B);
  }
  function F() {
    if (E !== null) {
      var T = e.unstable_now();
      I = T;
      var O = !0;
      try {
        O = E(!0, T);
      } finally {
        O ? $() : (C = !1, E = null);
      }
    } else C = !1;
  }
  var $;
  if (typeof f == "function") $ = function() {
    f(F);
  };
  else if (typeof MessageChannel < "u") {
    var le = new MessageChannel(), A = le.port2;
    le.port1.onmessage = F, $ = function() {
      A.postMessage(null);
    };
  } else $ = function() {
    j(F, 0);
  };
  function L(T) {
    E = T, C || (C = !0, $());
  }
  function P(T, O) {
    N = j(function() {
      T(e.unstable_now());
    }, O);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(T) {
    T.callback = null;
  }, e.unstable_continueExecution = function() {
    k || y || (k = !0, L(S));
  }, e.unstable_forceFrameRate = function(T) {
    0 > T || 125 < T ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : B = 0 < T ? Math.floor(1e3 / T) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return m;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(a);
  }, e.unstable_next = function(T) {
    switch (m) {
      case 1:
      case 2:
      case 3:
        var O = 3;
        break;
      default:
        O = m;
    }
    var M = m;
    m = O;
    try {
      return T();
    } finally {
      m = M;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(T, O) {
    switch (T) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        T = 3;
    }
    var M = m;
    m = T;
    try {
      return O();
    } finally {
      m = M;
    }
  }, e.unstable_scheduleCallback = function(T, O, M) {
    var W = e.unstable_now();
    switch (typeof M == "object" && M !== null ? (M = M.delay, M = typeof M == "number" && 0 < M ? W + M : W) : M = W, T) {
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
    return U = M + U, T = { id: d++, callback: O, priorityLevel: T, startTime: M, expirationTime: U, sortIndex: -1 }, M > W ? (T.sortIndex = M, t(c, T), n(a) === null && T === n(c) && (x ? (p(N), N = -1) : x = !0, P(w, M - W))) : (T.sortIndex = U, t(a, T), k || y || (k = !0, L(S))), T;
  }, e.unstable_shouldYield = z, e.unstable_wrapCallback = function(T) {
    var O = m;
    return function() {
      var M = m;
      m = O;
      try {
        return T.apply(this, arguments);
      } finally {
        m = M;
      }
    };
  };
})(Gc);
qc.exports = Gc;
var mp = qc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gp = g, He = mp;
function _(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Jc = /* @__PURE__ */ new Set(), Hr = {};
function Cn(e, t) {
  Zn(e, t), Zn(e + "Capture", t);
}
function Zn(e, t) {
  for (Hr[e] = t, e = 0; e < t.length; e++) Jc.add(t[e]);
}
var Ot = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Qo = Object.prototype.hasOwnProperty, vp = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, du = {}, fu = {};
function yp(e) {
  return Qo.call(fu, e) ? !0 : Qo.call(du, e) ? !1 : vp.test(e) ? fu[e] = !0 : (du[e] = !0, !1);
}
function wp(e, t, n, r) {
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
function xp(e, t, n, r) {
  if (t === null || typeof t > "u" || wp(e, t, n, r)) return !0;
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
function Oe(e, t, n, r, i, s, o) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = o;
}
var Se = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  Se[e] = new Oe(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  Se[t] = new Oe(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  Se[e] = new Oe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  Se[e] = new Oe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  Se[e] = new Oe(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  Se[e] = new Oe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  Se[e] = new Oe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  Se[e] = new Oe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  Se[e] = new Oe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Jl = /[\-:]([a-z])/g;
function Zl(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Jl,
    Zl
  );
  Se[t] = new Oe(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Jl, Zl);
  Se[t] = new Oe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Jl, Zl);
  Se[t] = new Oe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  Se[e] = new Oe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Se.xlinkHref = new Oe("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  Se[e] = new Oe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function ea(e, t, n, r) {
  var i = Se.hasOwnProperty(t) ? Se[t] : null;
  (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (xp(t, n, i, r) && (n = null), r || i === null ? yp(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName, r = i.attributeNamespace, n === null ? e.removeAttribute(t) : (i = i.type, n = i === 3 || i === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Pt = gp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Ei = Symbol.for("react.element"), Ln = Symbol.for("react.portal"), In = Symbol.for("react.fragment"), ta = Symbol.for("react.strict_mode"), Xo = Symbol.for("react.profiler"), Zc = Symbol.for("react.provider"), ed = Symbol.for("react.context"), na = Symbol.for("react.forward_ref"), Yo = Symbol.for("react.suspense"), qo = Symbol.for("react.suspense_list"), ra = Symbol.for("react.memo"), $t = Symbol.for("react.lazy"), td = Symbol.for("react.offscreen"), hu = Symbol.iterator;
function yr(e) {
  return e === null || typeof e != "object" ? null : (e = hu && e[hu] || e["@@iterator"], typeof e == "function" ? e : null);
}
var oe = Object.assign, fo;
function Rr(e) {
  if (fo === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    fo = t && t[1] || "";
  }
  return `
` + fo + e;
}
var ho = !1;
function po(e, t) {
  if (!e || ho) return "";
  ho = !0;
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
      } catch (c) {
        var r = c;
      }
      Reflect.construct(e, [], t);
    } else {
      try {
        t.call();
      } catch (c) {
        r = c;
      }
      e.call(t.prototype);
    }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (var i = c.stack.split(`
`), s = r.stack.split(`
`), o = i.length - 1, l = s.length - 1; 1 <= o && 0 <= l && i[o] !== s[l]; ) l--;
      for (; 1 <= o && 0 <= l; o--, l--) if (i[o] !== s[l]) {
        if (o !== 1 || l !== 1)
          do
            if (o--, l--, 0 > l || i[o] !== s[l]) {
              var a = `
` + i[o].replace(" at new ", " at ");
              return e.displayName && a.includes("<anonymous>") && (a = a.replace("<anonymous>", e.displayName)), a;
            }
          while (1 <= o && 0 <= l);
        break;
      }
    }
  } finally {
    ho = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? Rr(e) : "";
}
function kp(e) {
  switch (e.tag) {
    case 5:
      return Rr(e.type);
    case 16:
      return Rr("Lazy");
    case 13:
      return Rr("Suspense");
    case 19:
      return Rr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = po(e.type, !1), e;
    case 11:
      return e = po(e.type.render, !1), e;
    case 1:
      return e = po(e.type, !0), e;
    default:
      return "";
  }
}
function Go(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case In:
      return "Fragment";
    case Ln:
      return "Portal";
    case Xo:
      return "Profiler";
    case ta:
      return "StrictMode";
    case Yo:
      return "Suspense";
    case qo:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case ed:
      return (e.displayName || "Context") + ".Consumer";
    case Zc:
      return (e._context.displayName || "Context") + ".Provider";
    case na:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case ra:
      return t = e.displayName || null, t !== null ? t : Go(e.type) || "Memo";
    case $t:
      t = e._payload, e = e._init;
      try {
        return Go(e(t));
      } catch {
      }
  }
  return null;
}
function Sp(e) {
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
      return Go(t);
    case 8:
      return t === ta ? "StrictMode" : "Mode";
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
function sn(e) {
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
function nd(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Ep(e) {
  var t = nd(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var i = n.get, s = n.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function() {
      return i.call(this);
    }, set: function(o) {
      r = "" + o, s.call(this, o);
    } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(o) {
      r = "" + o;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[t];
    } };
  }
}
function Ci(e) {
  e._valueTracker || (e._valueTracker = Ep(e));
}
function rd(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = nd(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function ls(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Jo(e, t) {
  var n = t.checked;
  return oe({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function pu(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = sn(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function id(e, t) {
  t = t.checked, t != null && ea(e, "checked", t, !1);
}
function Zo(e, t) {
  id(e, t);
  var n = sn(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? el(e, t.type, n) : t.hasOwnProperty("defaultValue") && el(e, t.type, sn(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function mu(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function el(e, t, n) {
  (t !== "number" || ls(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var jr = Array.isArray;
function Kn(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++) i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + sn(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        e[i].selected = !0, r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function tl(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(_(91));
  return oe({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function gu(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(_(92));
      if (jr(n)) {
        if (1 < n.length) throw Error(_(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: sn(n) };
}
function sd(e, t) {
  var n = sn(t.value), r = sn(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function vu(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function od(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function nl(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? od(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var Ni, ld = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, i) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, i);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (Ni = Ni || document.createElement("div"), Ni.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Ni.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function Kr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Lr = {
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
}, Cp = ["Webkit", "ms", "Moz", "O"];
Object.keys(Lr).forEach(function(e) {
  Cp.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), Lr[t] = Lr[e];
  });
});
function ad(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Lr.hasOwnProperty(e) && Lr[e] ? ("" + t).trim() : t + "px";
}
function ud(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, i = ad(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : e[n] = i;
  }
}
var Np = oe({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function rl(e, t) {
  if (t) {
    if (Np[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(_(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(_(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(_(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(_(62));
  }
}
function il(e, t) {
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
var sl = null;
function ia(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var ol = null, Qn = null, Xn = null;
function yu(e) {
  if (e = pi(e)) {
    if (typeof ol != "function") throw Error(_(280));
    var t = e.stateNode;
    t && (t = $s(t), ol(e.stateNode, e.type, t));
  }
}
function cd(e) {
  Qn ? Xn ? Xn.push(e) : Xn = [e] : Qn = e;
}
function dd() {
  if (Qn) {
    var e = Qn, t = Xn;
    if (Xn = Qn = null, yu(e), t) for (e = 0; e < t.length; e++) yu(t[e]);
  }
}
function fd(e, t) {
  return e(t);
}
function hd() {
}
var mo = !1;
function pd(e, t, n) {
  if (mo) return e(t, n);
  mo = !0;
  try {
    return fd(e, t, n);
  } finally {
    mo = !1, (Qn !== null || Xn !== null) && (hd(), dd());
  }
}
function Qr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = $s(n);
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
  if (n && typeof n != "function") throw Error(_(231, t, typeof n));
  return n;
}
var ll = !1;
if (Ot) try {
  var wr = {};
  Object.defineProperty(wr, "passive", { get: function() {
    ll = !0;
  } }), window.addEventListener("test", wr, wr), window.removeEventListener("test", wr, wr);
} catch {
  ll = !1;
}
function _p(e, t, n, r, i, s, o, l, a) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (d) {
    this.onError(d);
  }
}
var Ir = !1, as = null, us = !1, al = null, Tp = { onError: function(e) {
  Ir = !0, as = e;
} };
function Rp(e, t, n, r, i, s, o, l, a) {
  Ir = !1, as = null, _p.apply(Tp, arguments);
}
function jp(e, t, n, r, i, s, o, l, a) {
  if (Rp.apply(this, arguments), Ir) {
    if (Ir) {
      var c = as;
      Ir = !1, as = null;
    } else throw Error(_(198));
    us || (us = !0, al = c);
  }
}
function Nn(e) {
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
function md(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function wu(e) {
  if (Nn(e) !== e) throw Error(_(188));
}
function Dp(e) {
  var t = e.alternate;
  if (!t) {
    if (t = Nn(e), t === null) throw Error(_(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var s = i.alternate;
    if (s === null) {
      if (r = i.return, r !== null) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === s.child) {
      for (s = i.child; s; ) {
        if (s === n) return wu(i), e;
        if (s === r) return wu(i), t;
        s = s.sibling;
      }
      throw Error(_(188));
    }
    if (n.return !== r.return) n = i, r = s;
    else {
      for (var o = !1, l = i.child; l; ) {
        if (l === n) {
          o = !0, n = i, r = s;
          break;
        }
        if (l === r) {
          o = !0, r = i, n = s;
          break;
        }
        l = l.sibling;
      }
      if (!o) {
        for (l = s.child; l; ) {
          if (l === n) {
            o = !0, n = s, r = i;
            break;
          }
          if (l === r) {
            o = !0, r = s, n = i;
            break;
          }
          l = l.sibling;
        }
        if (!o) throw Error(_(189));
      }
    }
    if (n.alternate !== r) throw Error(_(190));
  }
  if (n.tag !== 3) throw Error(_(188));
  return n.stateNode.current === n ? e : t;
}
function gd(e) {
  return e = Dp(e), e !== null ? vd(e) : null;
}
function vd(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = vd(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var yd = He.unstable_scheduleCallback, xu = He.unstable_cancelCallback, Op = He.unstable_shouldYield, Ap = He.unstable_requestPaint, ce = He.unstable_now, Lp = He.unstable_getCurrentPriorityLevel, sa = He.unstable_ImmediatePriority, wd = He.unstable_UserBlockingPriority, cs = He.unstable_NormalPriority, Ip = He.unstable_LowPriority, xd = He.unstable_IdlePriority, zs = null, xt = null;
function Pp(e) {
  if (xt && typeof xt.onCommitFiberRoot == "function") try {
    xt.onCommitFiberRoot(zs, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var at = Math.clz32 ? Math.clz32 : zp, bp = Math.log, Mp = Math.LN2;
function zp(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (bp(e) / Mp | 0) | 0;
}
var _i = 64, Ti = 4194304;
function Dr(e) {
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
function ds(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, i = e.suspendedLanes, s = e.pingedLanes, o = n & 268435455;
  if (o !== 0) {
    var l = o & ~i;
    l !== 0 ? r = Dr(l) : (s &= o, s !== 0 && (r = Dr(s)));
  } else o = n & ~i, o !== 0 ? r = Dr(o) : s !== 0 && (r = Dr(s));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & i) && (i = r & -r, s = t & -t, i >= s || i === 16 && (s & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - at(t), i = 1 << n, r |= e[n], t &= ~i;
  return r;
}
function Fp(e, t) {
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
function Bp(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, s = e.pendingLanes; 0 < s; ) {
    var o = 31 - at(s), l = 1 << o, a = i[o];
    a === -1 ? (!(l & n) || l & r) && (i[o] = Fp(l, t)) : a <= t && (e.expiredLanes |= l), s &= ~l;
  }
}
function ul(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function kd() {
  var e = _i;
  return _i <<= 1, !(_i & 4194240) && (_i = 64), e;
}
function go(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function fi(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - at(t), e[t] = n;
}
function Up(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - at(n), s = 1 << i;
    t[i] = 0, r[i] = -1, e[i] = -1, n &= ~s;
  }
}
function oa(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - at(n), i = 1 << r;
    i & t | e[r] & t && (e[r] |= t), n &= ~i;
  }
}
var G = 0;
function Sd(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Ed, la, Cd, Nd, _d, cl = !1, Ri = [], Yt = null, qt = null, Gt = null, Xr = /* @__PURE__ */ new Map(), Yr = /* @__PURE__ */ new Map(), Ht = [], $p = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function ku(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Yt = null;
      break;
    case "dragenter":
    case "dragleave":
      qt = null;
      break;
    case "mouseover":
    case "mouseout":
      Gt = null;
      break;
    case "pointerover":
    case "pointerout":
      Xr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Yr.delete(t.pointerId);
  }
}
function xr(e, t, n, r, i, s) {
  return e === null || e.nativeEvent !== s ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: s, targetContainers: [i] }, t !== null && (t = pi(t), t !== null && la(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e);
}
function Vp(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return Yt = xr(Yt, e, t, n, r, i), !0;
    case "dragenter":
      return qt = xr(qt, e, t, n, r, i), !0;
    case "mouseover":
      return Gt = xr(Gt, e, t, n, r, i), !0;
    case "pointerover":
      var s = i.pointerId;
      return Xr.set(s, xr(Xr.get(s) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return s = i.pointerId, Yr.set(s, xr(Yr.get(s) || null, e, t, n, r, i)), !0;
  }
  return !1;
}
function Td(e) {
  var t = pn(e.target);
  if (t !== null) {
    var n = Nn(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = md(n), t !== null) {
          e.blockedOn = t, _d(e.priority, function() {
            Cd(n);
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
function Ki(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = dl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      sl = r, n.target.dispatchEvent(r), sl = null;
    } else return t = pi(n), t !== null && la(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function Su(e, t, n) {
  Ki(e) && n.delete(t);
}
function Wp() {
  cl = !1, Yt !== null && Ki(Yt) && (Yt = null), qt !== null && Ki(qt) && (qt = null), Gt !== null && Ki(Gt) && (Gt = null), Xr.forEach(Su), Yr.forEach(Su);
}
function kr(e, t) {
  e.blockedOn === t && (e.blockedOn = null, cl || (cl = !0, He.unstable_scheduleCallback(He.unstable_NormalPriority, Wp)));
}
function qr(e) {
  function t(i) {
    return kr(i, e);
  }
  if (0 < Ri.length) {
    kr(Ri[0], e);
    for (var n = 1; n < Ri.length; n++) {
      var r = Ri[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (Yt !== null && kr(Yt, e), qt !== null && kr(qt, e), Gt !== null && kr(Gt, e), Xr.forEach(t), Yr.forEach(t), n = 0; n < Ht.length; n++) r = Ht[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Ht.length && (n = Ht[0], n.blockedOn === null); ) Td(n), n.blockedOn === null && Ht.shift();
}
var Yn = Pt.ReactCurrentBatchConfig, fs = !0;
function Hp(e, t, n, r) {
  var i = G, s = Yn.transition;
  Yn.transition = null;
  try {
    G = 1, aa(e, t, n, r);
  } finally {
    G = i, Yn.transition = s;
  }
}
function Kp(e, t, n, r) {
  var i = G, s = Yn.transition;
  Yn.transition = null;
  try {
    G = 4, aa(e, t, n, r);
  } finally {
    G = i, Yn.transition = s;
  }
}
function aa(e, t, n, r) {
  if (fs) {
    var i = dl(e, t, n, r);
    if (i === null) _o(e, t, r, hs, n), ku(e, r);
    else if (Vp(i, e, t, n, r)) r.stopPropagation();
    else if (ku(e, r), t & 4 && -1 < $p.indexOf(e)) {
      for (; i !== null; ) {
        var s = pi(i);
        if (s !== null && Ed(s), s = dl(e, t, n, r), s === null && _o(e, t, r, hs, n), s === i) break;
        i = s;
      }
      i !== null && r.stopPropagation();
    } else _o(e, t, r, null, n);
  }
}
var hs = null;
function dl(e, t, n, r) {
  if (hs = null, e = ia(r), e = pn(e), e !== null) if (t = Nn(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = md(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return hs = e, null;
}
function Rd(e) {
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
      switch (Lp()) {
        case sa:
          return 1;
        case wd:
          return 4;
        case cs:
        case Ip:
          return 16;
        case xd:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Qt = null, ua = null, Qi = null;
function jd() {
  if (Qi) return Qi;
  var e, t = ua, n = t.length, r, i = "value" in Qt ? Qt.value : Qt.textContent, s = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++) ;
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === i[s - r]; r++) ;
  return Qi = i.slice(e, 1 < r ? 1 - r : void 0);
}
function Xi(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function ji() {
  return !0;
}
function Eu() {
  return !1;
}
function Qe(e) {
  function t(n, r, i, s, o) {
    this._reactName = n, this._targetInst = i, this.type = r, this.nativeEvent = s, this.target = o, this.currentTarget = null;
    for (var l in e) e.hasOwnProperty(l) && (n = e[l], this[l] = n ? n(s) : s[l]);
    return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? ji : Eu, this.isPropagationStopped = Eu, this;
  }
  return oe(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = ji);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = ji);
  }, persist: function() {
  }, isPersistent: ji }), t;
}
var lr = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, ca = Qe(lr), hi = oe({}, lr, { view: 0, detail: 0 }), Qp = Qe(hi), vo, yo, Sr, Fs = oe({}, hi, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: da, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Sr && (Sr && e.type === "mousemove" ? (vo = e.screenX - Sr.screenX, yo = e.screenY - Sr.screenY) : yo = vo = 0, Sr = e), vo);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : yo;
} }), Cu = Qe(Fs), Xp = oe({}, Fs, { dataTransfer: 0 }), Yp = Qe(Xp), qp = oe({}, hi, { relatedTarget: 0 }), wo = Qe(qp), Gp = oe({}, lr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Jp = Qe(Gp), Zp = oe({}, lr, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), em = Qe(Zp), tm = oe({}, lr, { data: 0 }), Nu = Qe(tm), nm = {
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
}, rm = {
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
}, im = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function sm(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = im[e]) ? !!t[e] : !1;
}
function da() {
  return sm;
}
var om = oe({}, hi, { key: function(e) {
  if (e.key) {
    var t = nm[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = Xi(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? rm[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: da, charCode: function(e) {
  return e.type === "keypress" ? Xi(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Xi(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), lm = Qe(om), am = oe({}, Fs, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), _u = Qe(am), um = oe({}, hi, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: da }), cm = Qe(um), dm = oe({}, lr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), fm = Qe(dm), hm = oe({}, Fs, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), pm = Qe(hm), mm = [9, 13, 27, 32], fa = Ot && "CompositionEvent" in window, Pr = null;
Ot && "documentMode" in document && (Pr = document.documentMode);
var gm = Ot && "TextEvent" in window && !Pr, Dd = Ot && (!fa || Pr && 8 < Pr && 11 >= Pr), Tu = " ", Ru = !1;
function Od(e, t) {
  switch (e) {
    case "keyup":
      return mm.indexOf(t.keyCode) !== -1;
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
function Ad(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Pn = !1;
function vm(e, t) {
  switch (e) {
    case "compositionend":
      return Ad(t);
    case "keypress":
      return t.which !== 32 ? null : (Ru = !0, Tu);
    case "textInput":
      return e = t.data, e === Tu && Ru ? null : e;
    default:
      return null;
  }
}
function ym(e, t) {
  if (Pn) return e === "compositionend" || !fa && Od(e, t) ? (e = jd(), Qi = ua = Qt = null, Pn = !1, e) : null;
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
      return Dd && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var wm = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function ju(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!wm[e.type] : t === "textarea";
}
function Ld(e, t, n, r) {
  cd(r), t = ps(t, "onChange"), 0 < t.length && (n = new ca("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var br = null, Gr = null;
function xm(e) {
  Wd(e, 0);
}
function Bs(e) {
  var t = zn(e);
  if (rd(t)) return e;
}
function km(e, t) {
  if (e === "change") return t;
}
var Id = !1;
if (Ot) {
  var xo;
  if (Ot) {
    var ko = "oninput" in document;
    if (!ko) {
      var Du = document.createElement("div");
      Du.setAttribute("oninput", "return;"), ko = typeof Du.oninput == "function";
    }
    xo = ko;
  } else xo = !1;
  Id = xo && (!document.documentMode || 9 < document.documentMode);
}
function Ou() {
  br && (br.detachEvent("onpropertychange", Pd), Gr = br = null);
}
function Pd(e) {
  if (e.propertyName === "value" && Bs(Gr)) {
    var t = [];
    Ld(t, Gr, e, ia(e)), pd(xm, t);
  }
}
function Sm(e, t, n) {
  e === "focusin" ? (Ou(), br = t, Gr = n, br.attachEvent("onpropertychange", Pd)) : e === "focusout" && Ou();
}
function Em(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return Bs(Gr);
}
function Cm(e, t) {
  if (e === "click") return Bs(t);
}
function Nm(e, t) {
  if (e === "input" || e === "change") return Bs(t);
}
function _m(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var ct = typeof Object.is == "function" ? Object.is : _m;
function Jr(e, t) {
  if (ct(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!Qo.call(t, i) || !ct(e[i], t[i])) return !1;
  }
  return !0;
}
function Au(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Lu(e, t) {
  var n = Au(e);
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
    n = Au(n);
  }
}
function bd(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? bd(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function Md() {
  for (var e = window, t = ls(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = ls(e.document);
  }
  return t;
}
function ha(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function Tm(e) {
  var t = Md(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && bd(n.ownerDocument.documentElement, n)) {
    if (r !== null && ha(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var i = n.textContent.length, s = Math.min(r.start, i);
        r = r.end === void 0 ? s : Math.min(r.end, i), !e.extend && s > r && (i = r, r = s, s = i), i = Lu(n, s);
        var o = Lu(
          n,
          r
        );
        i && o && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== o.node || e.focusOffset !== o.offset) && (t = t.createRange(), t.setStart(i.node, i.offset), e.removeAllRanges(), s > r ? (e.addRange(t), e.extend(o.node, o.offset)) : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var Rm = Ot && "documentMode" in document && 11 >= document.documentMode, bn = null, fl = null, Mr = null, hl = !1;
function Iu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  hl || bn == null || bn !== ls(r) || (r = bn, "selectionStart" in r && ha(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Mr && Jr(Mr, r) || (Mr = r, r = ps(fl, "onSelect"), 0 < r.length && (t = new ca("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = bn)));
}
function Di(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Mn = { animationend: Di("Animation", "AnimationEnd"), animationiteration: Di("Animation", "AnimationIteration"), animationstart: Di("Animation", "AnimationStart"), transitionend: Di("Transition", "TransitionEnd") }, So = {}, zd = {};
Ot && (zd = document.createElement("div").style, "AnimationEvent" in window || (delete Mn.animationend.animation, delete Mn.animationiteration.animation, delete Mn.animationstart.animation), "TransitionEvent" in window || delete Mn.transitionend.transition);
function Us(e) {
  if (So[e]) return So[e];
  if (!Mn[e]) return e;
  var t = Mn[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in zd) return So[e] = t[n];
  return e;
}
var Fd = Us("animationend"), Bd = Us("animationiteration"), Ud = Us("animationstart"), $d = Us("transitionend"), Vd = /* @__PURE__ */ new Map(), Pu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function an(e, t) {
  Vd.set(e, t), Cn(t, [e]);
}
for (var Eo = 0; Eo < Pu.length; Eo++) {
  var Co = Pu[Eo], jm = Co.toLowerCase(), Dm = Co[0].toUpperCase() + Co.slice(1);
  an(jm, "on" + Dm);
}
an(Fd, "onAnimationEnd");
an(Bd, "onAnimationIteration");
an(Ud, "onAnimationStart");
an("dblclick", "onDoubleClick");
an("focusin", "onFocus");
an("focusout", "onBlur");
an($d, "onTransitionEnd");
Zn("onMouseEnter", ["mouseout", "mouseover"]);
Zn("onMouseLeave", ["mouseout", "mouseover"]);
Zn("onPointerEnter", ["pointerout", "pointerover"]);
Zn("onPointerLeave", ["pointerout", "pointerover"]);
Cn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Cn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Cn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Cn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Cn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Cn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Or = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Om = new Set("cancel close invalid load scroll toggle".split(" ").concat(Or));
function bu(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, jp(r, t, void 0, e), e.currentTarget = null;
}
function Wd(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], i = r.event;
    r = r.listeners;
    e: {
      var s = void 0;
      if (t) for (var o = r.length - 1; 0 <= o; o--) {
        var l = r[o], a = l.instance, c = l.currentTarget;
        if (l = l.listener, a !== s && i.isPropagationStopped()) break e;
        bu(i, l, c), s = a;
      }
      else for (o = 0; o < r.length; o++) {
        if (l = r[o], a = l.instance, c = l.currentTarget, l = l.listener, a !== s && i.isPropagationStopped()) break e;
        bu(i, l, c), s = a;
      }
    }
  }
  if (us) throw e = al, us = !1, al = null, e;
}
function Z(e, t) {
  var n = t[yl];
  n === void 0 && (n = t[yl] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (Hd(t, e, 2, !1), n.add(r));
}
function No(e, t, n) {
  var r = 0;
  t && (r |= 4), Hd(n, e, r, t);
}
var Oi = "_reactListening" + Math.random().toString(36).slice(2);
function Zr(e) {
  if (!e[Oi]) {
    e[Oi] = !0, Jc.forEach(function(n) {
      n !== "selectionchange" && (Om.has(n) || No(n, !1, e), No(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Oi] || (t[Oi] = !0, No("selectionchange", !1, t));
  }
}
function Hd(e, t, n, r) {
  switch (Rd(t)) {
    case 1:
      var i = Hp;
      break;
    case 4:
      i = Kp;
      break;
    default:
      i = aa;
  }
  n = i.bind(null, t, n, e), i = void 0, !ll || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), r ? i !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: i }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, { passive: i }) : e.addEventListener(t, n, !1);
}
function _o(e, t, n, r, i) {
  var s = r;
  if (!(t & 1) && !(t & 2) && r !== null) e: for (; ; ) {
    if (r === null) return;
    var o = r.tag;
    if (o === 3 || o === 4) {
      var l = r.stateNode.containerInfo;
      if (l === i || l.nodeType === 8 && l.parentNode === i) break;
      if (o === 4) for (o = r.return; o !== null; ) {
        var a = o.tag;
        if ((a === 3 || a === 4) && (a = o.stateNode.containerInfo, a === i || a.nodeType === 8 && a.parentNode === i)) return;
        o = o.return;
      }
      for (; l !== null; ) {
        if (o = pn(l), o === null) return;
        if (a = o.tag, a === 5 || a === 6) {
          r = s = o;
          continue e;
        }
        l = l.parentNode;
      }
    }
    r = r.return;
  }
  pd(function() {
    var c = s, d = ia(n), h = [];
    e: {
      var m = Vd.get(e);
      if (m !== void 0) {
        var y = ca, k = e;
        switch (e) {
          case "keypress":
            if (Xi(n) === 0) break e;
          case "keydown":
          case "keyup":
            y = lm;
            break;
          case "focusin":
            k = "focus", y = wo;
            break;
          case "focusout":
            k = "blur", y = wo;
            break;
          case "beforeblur":
          case "afterblur":
            y = wo;
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
            y = Cu;
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
            y = cm;
            break;
          case Fd:
          case Bd:
          case Ud:
            y = Jp;
            break;
          case $d:
            y = fm;
            break;
          case "scroll":
            y = Qp;
            break;
          case "wheel":
            y = pm;
            break;
          case "copy":
          case "cut":
          case "paste":
            y = em;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            y = _u;
        }
        var x = (t & 4) !== 0, j = !x && e === "scroll", p = x ? m !== null ? m + "Capture" : null : m;
        x = [];
        for (var f = c, v; f !== null; ) {
          v = f;
          var w = v.stateNode;
          if (v.tag === 5 && w !== null && (v = w, p !== null && (w = Qr(f, p), w != null && x.push(ei(f, w, v)))), j) break;
          f = f.return;
        }
        0 < x.length && (m = new y(m, k, null, n, d), h.push({ event: m, listeners: x }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (m = e === "mouseover" || e === "pointerover", y = e === "mouseout" || e === "pointerout", m && n !== sl && (k = n.relatedTarget || n.fromElement) && (pn(k) || k[At])) break e;
        if ((y || m) && (m = d.window === d ? d : (m = d.ownerDocument) ? m.defaultView || m.parentWindow : window, y ? (k = n.relatedTarget || n.toElement, y = c, k = k ? pn(k) : null, k !== null && (j = Nn(k), k !== j || k.tag !== 5 && k.tag !== 6) && (k = null)) : (y = null, k = c), y !== k)) {
          if (x = Cu, w = "onMouseLeave", p = "onMouseEnter", f = "mouse", (e === "pointerout" || e === "pointerover") && (x = _u, w = "onPointerLeave", p = "onPointerEnter", f = "pointer"), j = y == null ? m : zn(y), v = k == null ? m : zn(k), m = new x(w, f + "leave", y, n, d), m.target = j, m.relatedTarget = v, w = null, pn(d) === c && (x = new x(p, f + "enter", k, n, d), x.target = v, x.relatedTarget = j, w = x), j = w, y && k) t: {
            for (x = y, p = k, f = 0, v = x; v; v = An(v)) f++;
            for (v = 0, w = p; w; w = An(w)) v++;
            for (; 0 < f - v; ) x = An(x), f--;
            for (; 0 < v - f; ) p = An(p), v--;
            for (; f--; ) {
              if (x === p || p !== null && x === p.alternate) break t;
              x = An(x), p = An(p);
            }
            x = null;
          }
          else x = null;
          y !== null && Mu(h, m, y, x, !1), k !== null && j !== null && Mu(h, j, k, x, !0);
        }
      }
      e: {
        if (m = c ? zn(c) : window, y = m.nodeName && m.nodeName.toLowerCase(), y === "select" || y === "input" && m.type === "file") var S = km;
        else if (ju(m)) if (Id) S = Nm;
        else {
          S = Em;
          var C = Sm;
        }
        else (y = m.nodeName) && y.toLowerCase() === "input" && (m.type === "checkbox" || m.type === "radio") && (S = Cm);
        if (S && (S = S(e, c))) {
          Ld(h, S, n, d);
          break e;
        }
        C && C(e, m, c), e === "focusout" && (C = m._wrapperState) && C.controlled && m.type === "number" && el(m, "number", m.value);
      }
      switch (C = c ? zn(c) : window, e) {
        case "focusin":
          (ju(C) || C.contentEditable === "true") && (bn = C, fl = c, Mr = null);
          break;
        case "focusout":
          Mr = fl = bn = null;
          break;
        case "mousedown":
          hl = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          hl = !1, Iu(h, n, d);
          break;
        case "selectionchange":
          if (Rm) break;
        case "keydown":
        case "keyup":
          Iu(h, n, d);
      }
      var E;
      if (fa) e: {
        switch (e) {
          case "compositionstart":
            var N = "onCompositionStart";
            break e;
          case "compositionend":
            N = "onCompositionEnd";
            break e;
          case "compositionupdate":
            N = "onCompositionUpdate";
            break e;
        }
        N = void 0;
      }
      else Pn ? Od(e, n) && (N = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (N = "onCompositionStart");
      N && (Dd && n.locale !== "ko" && (Pn || N !== "onCompositionStart" ? N === "onCompositionEnd" && Pn && (E = jd()) : (Qt = d, ua = "value" in Qt ? Qt.value : Qt.textContent, Pn = !0)), C = ps(c, N), 0 < C.length && (N = new Nu(N, e, null, n, d), h.push({ event: N, listeners: C }), E ? N.data = E : (E = Ad(n), E !== null && (N.data = E)))), (E = gm ? vm(e, n) : ym(e, n)) && (c = ps(c, "onBeforeInput"), 0 < c.length && (d = new Nu("onBeforeInput", "beforeinput", null, n, d), h.push({ event: d, listeners: c }), d.data = E));
    }
    Wd(h, t);
  });
}
function ei(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function ps(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e, s = i.stateNode;
    i.tag === 5 && s !== null && (i = s, s = Qr(e, n), s != null && r.unshift(ei(e, s, i)), s = Qr(e, t), s != null && r.push(ei(e, s, i))), e = e.return;
  }
  return r;
}
function An(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Mu(e, t, n, r, i) {
  for (var s = t._reactName, o = []; n !== null && n !== r; ) {
    var l = n, a = l.alternate, c = l.stateNode;
    if (a !== null && a === r) break;
    l.tag === 5 && c !== null && (l = c, i ? (a = Qr(n, s), a != null && o.unshift(ei(n, a, l))) : i || (a = Qr(n, s), a != null && o.push(ei(n, a, l)))), n = n.return;
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var Am = /\r\n?/g, Lm = /\u0000|\uFFFD/g;
function zu(e) {
  return (typeof e == "string" ? e : "" + e).replace(Am, `
`).replace(Lm, "");
}
function Ai(e, t, n) {
  if (t = zu(t), zu(e) !== t && n) throw Error(_(425));
}
function ms() {
}
var pl = null, ml = null;
function gl(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var vl = typeof setTimeout == "function" ? setTimeout : void 0, Im = typeof clearTimeout == "function" ? clearTimeout : void 0, Fu = typeof Promise == "function" ? Promise : void 0, Pm = typeof queueMicrotask == "function" ? queueMicrotask : typeof Fu < "u" ? function(e) {
  return Fu.resolve(null).then(e).catch(bm);
} : vl;
function bm(e) {
  setTimeout(function() {
    throw e;
  });
}
function To(e, t) {
  var n = t, r = 0;
  do {
    var i = n.nextSibling;
    if (e.removeChild(n), i && i.nodeType === 8) if (n = i.data, n === "/$") {
      if (r === 0) {
        e.removeChild(i), qr(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = i;
  } while (n);
  qr(t);
}
function Jt(e) {
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
function Bu(e) {
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
var ar = Math.random().toString(36).slice(2), wt = "__reactFiber$" + ar, ti = "__reactProps$" + ar, At = "__reactContainer$" + ar, yl = "__reactEvents$" + ar, Mm = "__reactListeners$" + ar, zm = "__reactHandles$" + ar;
function pn(e) {
  var t = e[wt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[At] || n[wt]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Bu(e); e !== null; ) {
        if (n = e[wt]) return n;
        e = Bu(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function pi(e) {
  return e = e[wt] || e[At], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function zn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(_(33));
}
function $s(e) {
  return e[ti] || null;
}
var wl = [], Fn = -1;
function un(e) {
  return { current: e };
}
function ee(e) {
  0 > Fn || (e.current = wl[Fn], wl[Fn] = null, Fn--);
}
function J(e, t) {
  Fn++, wl[Fn] = e.current, e.current = t;
}
var on = {}, Te = un(on), Pe = un(!1), wn = on;
function er(e, t) {
  var n = e.type.contextTypes;
  if (!n) return on;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var i = {}, s;
  for (s in n) i[s] = t[s];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = i), i;
}
function be(e) {
  return e = e.childContextTypes, e != null;
}
function gs() {
  ee(Pe), ee(Te);
}
function Uu(e, t, n) {
  if (Te.current !== on) throw Error(_(168));
  J(Te, t), J(Pe, n);
}
function Kd(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(_(108, Sp(e) || "Unknown", i));
  return oe({}, n, r);
}
function vs(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || on, wn = Te.current, J(Te, e), J(Pe, Pe.current), !0;
}
function $u(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(_(169));
  n ? (e = Kd(e, t, wn), r.__reactInternalMemoizedMergedChildContext = e, ee(Pe), ee(Te), J(Te, e)) : ee(Pe), J(Pe, n);
}
var Tt = null, Vs = !1, Ro = !1;
function Qd(e) {
  Tt === null ? Tt = [e] : Tt.push(e);
}
function Fm(e) {
  Vs = !0, Qd(e);
}
function cn() {
  if (!Ro && Tt !== null) {
    Ro = !0;
    var e = 0, t = G;
    try {
      var n = Tt;
      for (G = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      Tt = null, Vs = !1;
    } catch (i) {
      throw Tt !== null && (Tt = Tt.slice(e + 1)), yd(sa, cn), i;
    } finally {
      G = t, Ro = !1;
    }
  }
  return null;
}
var Bn = [], Un = 0, ys = null, ws = 0, qe = [], Ge = 0, xn = null, Rt = 1, jt = "";
function fn(e, t) {
  Bn[Un++] = ws, Bn[Un++] = ys, ys = e, ws = t;
}
function Xd(e, t, n) {
  qe[Ge++] = Rt, qe[Ge++] = jt, qe[Ge++] = xn, xn = e;
  var r = Rt;
  e = jt;
  var i = 32 - at(r) - 1;
  r &= ~(1 << i), n += 1;
  var s = 32 - at(t) + i;
  if (30 < s) {
    var o = i - i % 5;
    s = (r & (1 << o) - 1).toString(32), r >>= o, i -= o, Rt = 1 << 32 - at(t) + i | n << i | r, jt = s + e;
  } else Rt = 1 << s | n << i | r, jt = e;
}
function pa(e) {
  e.return !== null && (fn(e, 1), Xd(e, 1, 0));
}
function ma(e) {
  for (; e === ys; ) ys = Bn[--Un], Bn[Un] = null, ws = Bn[--Un], Bn[Un] = null;
  for (; e === xn; ) xn = qe[--Ge], qe[Ge] = null, jt = qe[--Ge], qe[Ge] = null, Rt = qe[--Ge], qe[Ge] = null;
}
var We = null, Ve = null, ne = !1, lt = null;
function Yd(e, t) {
  var n = Ze(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Vu(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, We = e, Ve = Jt(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, We = e, Ve = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = xn !== null ? { id: Rt, overflow: jt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Ze(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, We = e, Ve = null, !0) : !1;
    default:
      return !1;
  }
}
function xl(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function kl(e) {
  if (ne) {
    var t = Ve;
    if (t) {
      var n = t;
      if (!Vu(e, t)) {
        if (xl(e)) throw Error(_(418));
        t = Jt(n.nextSibling);
        var r = We;
        t && Vu(e, t) ? Yd(r, n) : (e.flags = e.flags & -4097 | 2, ne = !1, We = e);
      }
    } else {
      if (xl(e)) throw Error(_(418));
      e.flags = e.flags & -4097 | 2, ne = !1, We = e;
    }
  }
}
function Wu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  We = e;
}
function Li(e) {
  if (e !== We) return !1;
  if (!ne) return Wu(e), ne = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !gl(e.type, e.memoizedProps)), t && (t = Ve)) {
    if (xl(e)) throw qd(), Error(_(418));
    for (; t; ) Yd(e, t), t = Jt(t.nextSibling);
  }
  if (Wu(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(_(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ve = Jt(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      Ve = null;
    }
  } else Ve = We ? Jt(e.stateNode.nextSibling) : null;
  return !0;
}
function qd() {
  for (var e = Ve; e; ) e = Jt(e.nextSibling);
}
function tr() {
  Ve = We = null, ne = !1;
}
function ga(e) {
  lt === null ? lt = [e] : lt.push(e);
}
var Bm = Pt.ReactCurrentBatchConfig;
function Er(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(_(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(_(147, e));
      var i = r, s = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === s ? t.ref : (t = function(o) {
        var l = i.refs;
        o === null ? delete l[s] : l[s] = o;
      }, t._stringRef = s, t);
    }
    if (typeof e != "string") throw Error(_(284));
    if (!n._owner) throw Error(_(290, e));
  }
  return e;
}
function Ii(e, t) {
  throw e = Object.prototype.toString.call(t), Error(_(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Hu(e) {
  var t = e._init;
  return t(e._payload);
}
function Gd(e) {
  function t(p, f) {
    if (e) {
      var v = p.deletions;
      v === null ? (p.deletions = [f], p.flags |= 16) : v.push(f);
    }
  }
  function n(p, f) {
    if (!e) return null;
    for (; f !== null; ) t(p, f), f = f.sibling;
    return null;
  }
  function r(p, f) {
    for (p = /* @__PURE__ */ new Map(); f !== null; ) f.key !== null ? p.set(f.key, f) : p.set(f.index, f), f = f.sibling;
    return p;
  }
  function i(p, f) {
    return p = nn(p, f), p.index = 0, p.sibling = null, p;
  }
  function s(p, f, v) {
    return p.index = v, e ? (v = p.alternate, v !== null ? (v = v.index, v < f ? (p.flags |= 2, f) : v) : (p.flags |= 2, f)) : (p.flags |= 1048576, f);
  }
  function o(p) {
    return e && p.alternate === null && (p.flags |= 2), p;
  }
  function l(p, f, v, w) {
    return f === null || f.tag !== 6 ? (f = Po(v, p.mode, w), f.return = p, f) : (f = i(f, v), f.return = p, f);
  }
  function a(p, f, v, w) {
    var S = v.type;
    return S === In ? d(p, f, v.props.children, w, v.key) : f !== null && (f.elementType === S || typeof S == "object" && S !== null && S.$$typeof === $t && Hu(S) === f.type) ? (w = i(f, v.props), w.ref = Er(p, f, v), w.return = p, w) : (w = ts(v.type, v.key, v.props, null, p.mode, w), w.ref = Er(p, f, v), w.return = p, w);
  }
  function c(p, f, v, w) {
    return f === null || f.tag !== 4 || f.stateNode.containerInfo !== v.containerInfo || f.stateNode.implementation !== v.implementation ? (f = bo(v, p.mode, w), f.return = p, f) : (f = i(f, v.children || []), f.return = p, f);
  }
  function d(p, f, v, w, S) {
    return f === null || f.tag !== 7 ? (f = yn(v, p.mode, w, S), f.return = p, f) : (f = i(f, v), f.return = p, f);
  }
  function h(p, f, v) {
    if (typeof f == "string" && f !== "" || typeof f == "number") return f = Po("" + f, p.mode, v), f.return = p, f;
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case Ei:
          return v = ts(f.type, f.key, f.props, null, p.mode, v), v.ref = Er(p, null, f), v.return = p, v;
        case Ln:
          return f = bo(f, p.mode, v), f.return = p, f;
        case $t:
          var w = f._init;
          return h(p, w(f._payload), v);
      }
      if (jr(f) || yr(f)) return f = yn(f, p.mode, v, null), f.return = p, f;
      Ii(p, f);
    }
    return null;
  }
  function m(p, f, v, w) {
    var S = f !== null ? f.key : null;
    if (typeof v == "string" && v !== "" || typeof v == "number") return S !== null ? null : l(p, f, "" + v, w);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case Ei:
          return v.key === S ? a(p, f, v, w) : null;
        case Ln:
          return v.key === S ? c(p, f, v, w) : null;
        case $t:
          return S = v._init, m(
            p,
            f,
            S(v._payload),
            w
          );
      }
      if (jr(v) || yr(v)) return S !== null ? null : d(p, f, v, w, null);
      Ii(p, v);
    }
    return null;
  }
  function y(p, f, v, w, S) {
    if (typeof w == "string" && w !== "" || typeof w == "number") return p = p.get(v) || null, l(f, p, "" + w, S);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case Ei:
          return p = p.get(w.key === null ? v : w.key) || null, a(f, p, w, S);
        case Ln:
          return p = p.get(w.key === null ? v : w.key) || null, c(f, p, w, S);
        case $t:
          var C = w._init;
          return y(p, f, v, C(w._payload), S);
      }
      if (jr(w) || yr(w)) return p = p.get(v) || null, d(f, p, w, S, null);
      Ii(f, w);
    }
    return null;
  }
  function k(p, f, v, w) {
    for (var S = null, C = null, E = f, N = f = 0, B = null; E !== null && N < v.length; N++) {
      E.index > N ? (B = E, E = null) : B = E.sibling;
      var I = m(p, E, v[N], w);
      if (I === null) {
        E === null && (E = B);
        break;
      }
      e && E && I.alternate === null && t(p, E), f = s(I, f, N), C === null ? S = I : C.sibling = I, C = I, E = B;
    }
    if (N === v.length) return n(p, E), ne && fn(p, N), S;
    if (E === null) {
      for (; N < v.length; N++) E = h(p, v[N], w), E !== null && (f = s(E, f, N), C === null ? S = E : C.sibling = E, C = E);
      return ne && fn(p, N), S;
    }
    for (E = r(p, E); N < v.length; N++) B = y(E, p, N, v[N], w), B !== null && (e && B.alternate !== null && E.delete(B.key === null ? N : B.key), f = s(B, f, N), C === null ? S = B : C.sibling = B, C = B);
    return e && E.forEach(function(z) {
      return t(p, z);
    }), ne && fn(p, N), S;
  }
  function x(p, f, v, w) {
    var S = yr(v);
    if (typeof S != "function") throw Error(_(150));
    if (v = S.call(v), v == null) throw Error(_(151));
    for (var C = S = null, E = f, N = f = 0, B = null, I = v.next(); E !== null && !I.done; N++, I = v.next()) {
      E.index > N ? (B = E, E = null) : B = E.sibling;
      var z = m(p, E, I.value, w);
      if (z === null) {
        E === null && (E = B);
        break;
      }
      e && E && z.alternate === null && t(p, E), f = s(z, f, N), C === null ? S = z : C.sibling = z, C = z, E = B;
    }
    if (I.done) return n(
      p,
      E
    ), ne && fn(p, N), S;
    if (E === null) {
      for (; !I.done; N++, I = v.next()) I = h(p, I.value, w), I !== null && (f = s(I, f, N), C === null ? S = I : C.sibling = I, C = I);
      return ne && fn(p, N), S;
    }
    for (E = r(p, E); !I.done; N++, I = v.next()) I = y(E, p, N, I.value, w), I !== null && (e && I.alternate !== null && E.delete(I.key === null ? N : I.key), f = s(I, f, N), C === null ? S = I : C.sibling = I, C = I);
    return e && E.forEach(function(F) {
      return t(p, F);
    }), ne && fn(p, N), S;
  }
  function j(p, f, v, w) {
    if (typeof v == "object" && v !== null && v.type === In && v.key === null && (v = v.props.children), typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case Ei:
          e: {
            for (var S = v.key, C = f; C !== null; ) {
              if (C.key === S) {
                if (S = v.type, S === In) {
                  if (C.tag === 7) {
                    n(p, C.sibling), f = i(C, v.props.children), f.return = p, p = f;
                    break e;
                  }
                } else if (C.elementType === S || typeof S == "object" && S !== null && S.$$typeof === $t && Hu(S) === C.type) {
                  n(p, C.sibling), f = i(C, v.props), f.ref = Er(p, C, v), f.return = p, p = f;
                  break e;
                }
                n(p, C);
                break;
              } else t(p, C);
              C = C.sibling;
            }
            v.type === In ? (f = yn(v.props.children, p.mode, w, v.key), f.return = p, p = f) : (w = ts(v.type, v.key, v.props, null, p.mode, w), w.ref = Er(p, f, v), w.return = p, p = w);
          }
          return o(p);
        case Ln:
          e: {
            for (C = v.key; f !== null; ) {
              if (f.key === C) if (f.tag === 4 && f.stateNode.containerInfo === v.containerInfo && f.stateNode.implementation === v.implementation) {
                n(p, f.sibling), f = i(f, v.children || []), f.return = p, p = f;
                break e;
              } else {
                n(p, f);
                break;
              }
              else t(p, f);
              f = f.sibling;
            }
            f = bo(v, p.mode, w), f.return = p, p = f;
          }
          return o(p);
        case $t:
          return C = v._init, j(p, f, C(v._payload), w);
      }
      if (jr(v)) return k(p, f, v, w);
      if (yr(v)) return x(p, f, v, w);
      Ii(p, v);
    }
    return typeof v == "string" && v !== "" || typeof v == "number" ? (v = "" + v, f !== null && f.tag === 6 ? (n(p, f.sibling), f = i(f, v), f.return = p, p = f) : (n(p, f), f = Po(v, p.mode, w), f.return = p, p = f), o(p)) : n(p, f);
  }
  return j;
}
var nr = Gd(!0), Jd = Gd(!1), xs = un(null), ks = null, $n = null, va = null;
function ya() {
  va = $n = ks = null;
}
function wa(e) {
  var t = xs.current;
  ee(xs), e._currentValue = t;
}
function Sl(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function qn(e, t) {
  ks = e, va = $n = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Ie = !0), e.firstContext = null);
}
function tt(e) {
  var t = e._currentValue;
  if (va !== e) if (e = { context: e, memoizedValue: t, next: null }, $n === null) {
    if (ks === null) throw Error(_(308));
    $n = e, ks.dependencies = { lanes: 0, firstContext: e };
  } else $n = $n.next = e;
  return t;
}
var mn = null;
function xa(e) {
  mn === null ? mn = [e] : mn.push(e);
}
function Zd(e, t, n, r) {
  var i = t.interleaved;
  return i === null ? (n.next = n, xa(t)) : (n.next = i.next, i.next = n), t.interleaved = n, Lt(e, r);
}
function Lt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var Vt = !1;
function ka(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function ef(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Dt(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Zt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, Y & 2) {
    var i = r.pending;
    return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, Lt(e, n);
  }
  return i = r.interleaved, i === null ? (t.next = t, xa(r)) : (t.next = i.next, i.next = t), r.interleaved = t, Lt(e, n);
}
function Yi(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, oa(e, n);
  }
}
function Ku(e, t) {
  var n = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var i = null, s = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var o = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        s === null ? i = s = o : s = s.next = o, n = n.next;
      } while (n !== null);
      s === null ? i = s = t : s = s.next = t;
    } else i = s = t;
    n = { baseState: r.baseState, firstBaseUpdate: i, lastBaseUpdate: s, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
}
function Ss(e, t, n, r) {
  var i = e.updateQueue;
  Vt = !1;
  var s = i.firstBaseUpdate, o = i.lastBaseUpdate, l = i.shared.pending;
  if (l !== null) {
    i.shared.pending = null;
    var a = l, c = a.next;
    a.next = null, o === null ? s = c : o.next = c, o = a;
    var d = e.alternate;
    d !== null && (d = d.updateQueue, l = d.lastBaseUpdate, l !== o && (l === null ? d.firstBaseUpdate = c : l.next = c, d.lastBaseUpdate = a));
  }
  if (s !== null) {
    var h = i.baseState;
    o = 0, d = c = a = null, l = s;
    do {
      var m = l.lane, y = l.eventTime;
      if ((r & m) === m) {
        d !== null && (d = d.next = {
          eventTime: y,
          lane: 0,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null
        });
        e: {
          var k = e, x = l;
          switch (m = t, y = n, x.tag) {
            case 1:
              if (k = x.payload, typeof k == "function") {
                h = k.call(y, h, m);
                break e;
              }
              h = k;
              break e;
            case 3:
              k.flags = k.flags & -65537 | 128;
            case 0:
              if (k = x.payload, m = typeof k == "function" ? k.call(y, h, m) : k, m == null) break e;
              h = oe({}, h, m);
              break e;
            case 2:
              Vt = !0;
          }
        }
        l.callback !== null && l.lane !== 0 && (e.flags |= 64, m = i.effects, m === null ? i.effects = [l] : m.push(l));
      } else y = { eventTime: y, lane: m, tag: l.tag, payload: l.payload, callback: l.callback, next: null }, d === null ? (c = d = y, a = h) : d = d.next = y, o |= m;
      if (l = l.next, l === null) {
        if (l = i.shared.pending, l === null) break;
        m = l, l = m.next, m.next = null, i.lastBaseUpdate = m, i.shared.pending = null;
      }
    } while (!0);
    if (d === null && (a = h), i.baseState = a, i.firstBaseUpdate = c, i.lastBaseUpdate = d, t = i.shared.interleaved, t !== null) {
      i = t;
      do
        o |= i.lane, i = i.next;
      while (i !== t);
    } else s === null && (i.shared.lanes = 0);
    Sn |= o, e.lanes = o, e.memoizedState = h;
  }
}
function Qu(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], i = r.callback;
    if (i !== null) {
      if (r.callback = null, r = n, typeof i != "function") throw Error(_(191, i));
      i.call(r);
    }
  }
}
var mi = {}, kt = un(mi), ni = un(mi), ri = un(mi);
function gn(e) {
  if (e === mi) throw Error(_(174));
  return e;
}
function Sa(e, t) {
  switch (J(ri, t), J(ni, e), J(kt, mi), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : nl(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = nl(t, e);
  }
  ee(kt), J(kt, t);
}
function rr() {
  ee(kt), ee(ni), ee(ri);
}
function tf(e) {
  gn(ri.current);
  var t = gn(kt.current), n = nl(t, e.type);
  t !== n && (J(ni, e), J(kt, n));
}
function Ea(e) {
  ni.current === e && (ee(kt), ee(ni));
}
var ie = un(0);
function Es(e) {
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
var jo = [];
function Ca() {
  for (var e = 0; e < jo.length; e++) jo[e]._workInProgressVersionPrimary = null;
  jo.length = 0;
}
var qi = Pt.ReactCurrentDispatcher, Do = Pt.ReactCurrentBatchConfig, kn = 0, se = null, he = null, ge = null, Cs = !1, zr = !1, ii = 0, Um = 0;
function Ce() {
  throw Error(_(321));
}
function Na(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!ct(e[n], t[n])) return !1;
  return !0;
}
function _a(e, t, n, r, i, s) {
  if (kn = s, se = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, qi.current = e === null || e.memoizedState === null ? Hm : Km, e = n(r, i), zr) {
    s = 0;
    do {
      if (zr = !1, ii = 0, 25 <= s) throw Error(_(301));
      s += 1, ge = he = null, t.updateQueue = null, qi.current = Qm, e = n(r, i);
    } while (zr);
  }
  if (qi.current = Ns, t = he !== null && he.next !== null, kn = 0, ge = he = se = null, Cs = !1, t) throw Error(_(300));
  return e;
}
function Ta() {
  var e = ii !== 0;
  return ii = 0, e;
}
function yt() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return ge === null ? se.memoizedState = ge = e : ge = ge.next = e, ge;
}
function nt() {
  if (he === null) {
    var e = se.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = he.next;
  var t = ge === null ? se.memoizedState : ge.next;
  if (t !== null) ge = t, he = e;
  else {
    if (e === null) throw Error(_(310));
    he = e, e = { memoizedState: he.memoizedState, baseState: he.baseState, baseQueue: he.baseQueue, queue: he.queue, next: null }, ge === null ? se.memoizedState = ge = e : ge = ge.next = e;
  }
  return ge;
}
function si(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Oo(e) {
  var t = nt(), n = t.queue;
  if (n === null) throw Error(_(311));
  n.lastRenderedReducer = e;
  var r = he, i = r.baseQueue, s = n.pending;
  if (s !== null) {
    if (i !== null) {
      var o = i.next;
      i.next = s.next, s.next = o;
    }
    r.baseQueue = i = s, n.pending = null;
  }
  if (i !== null) {
    s = i.next, r = r.baseState;
    var l = o = null, a = null, c = s;
    do {
      var d = c.lane;
      if ((kn & d) === d) a !== null && (a = a.next = { lane: 0, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null }), r = c.hasEagerState ? c.eagerState : e(r, c.action);
      else {
        var h = {
          lane: d,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null
        };
        a === null ? (l = a = h, o = r) : a = a.next = h, se.lanes |= d, Sn |= d;
      }
      c = c.next;
    } while (c !== null && c !== s);
    a === null ? o = r : a.next = l, ct(r, t.memoizedState) || (Ie = !0), t.memoizedState = r, t.baseState = o, t.baseQueue = a, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    i = e;
    do
      s = i.lane, se.lanes |= s, Sn |= s, i = i.next;
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Ao(e) {
  var t = nt(), n = t.queue;
  if (n === null) throw Error(_(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, i = n.pending, s = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var o = i = i.next;
    do
      s = e(s, o.action), o = o.next;
    while (o !== i);
    ct(s, t.memoizedState) || (Ie = !0), t.memoizedState = s, t.baseQueue === null && (t.baseState = s), n.lastRenderedState = s;
  }
  return [s, r];
}
function nf() {
}
function rf(e, t) {
  var n = se, r = nt(), i = t(), s = !ct(r.memoizedState, i);
  if (s && (r.memoizedState = i, Ie = !0), r = r.queue, Ra(lf.bind(null, n, r, e), [e]), r.getSnapshot !== t || s || ge !== null && ge.memoizedState.tag & 1) {
    if (n.flags |= 2048, oi(9, of.bind(null, n, r, i, t), void 0, null), ye === null) throw Error(_(349));
    kn & 30 || sf(n, t, i);
  }
  return i;
}
function sf(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = se.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, se.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function of(e, t, n, r) {
  t.value = n, t.getSnapshot = r, af(t) && uf(e);
}
function lf(e, t, n) {
  return n(function() {
    af(t) && uf(e);
  });
}
function af(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !ct(e, n);
  } catch {
    return !0;
  }
}
function uf(e) {
  var t = Lt(e, 1);
  t !== null && ut(t, e, 1, -1);
}
function Xu(e) {
  var t = yt();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: si, lastRenderedState: e }, t.queue = e, e = e.dispatch = Wm.bind(null, se, e), [t.memoizedState, e];
}
function oi(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = se.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, se.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function cf() {
  return nt().memoizedState;
}
function Gi(e, t, n, r) {
  var i = yt();
  se.flags |= e, i.memoizedState = oi(1 | t, n, void 0, r === void 0 ? null : r);
}
function Ws(e, t, n, r) {
  var i = nt();
  r = r === void 0 ? null : r;
  var s = void 0;
  if (he !== null) {
    var o = he.memoizedState;
    if (s = o.destroy, r !== null && Na(r, o.deps)) {
      i.memoizedState = oi(t, n, s, r);
      return;
    }
  }
  se.flags |= e, i.memoizedState = oi(1 | t, n, s, r);
}
function Yu(e, t) {
  return Gi(8390656, 8, e, t);
}
function Ra(e, t) {
  return Ws(2048, 8, e, t);
}
function df(e, t) {
  return Ws(4, 2, e, t);
}
function ff(e, t) {
  return Ws(4, 4, e, t);
}
function hf(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function pf(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Ws(4, 4, hf.bind(null, t, e), n);
}
function ja() {
}
function mf(e, t) {
  var n = nt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Na(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function gf(e, t) {
  var n = nt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Na(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function vf(e, t, n) {
  return kn & 21 ? (ct(n, t) || (n = kd(), se.lanes |= n, Sn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Ie = !0), e.memoizedState = n);
}
function $m(e, t) {
  var n = G;
  G = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = Do.transition;
  Do.transition = {};
  try {
    e(!1), t();
  } finally {
    G = n, Do.transition = r;
  }
}
function yf() {
  return nt().memoizedState;
}
function Vm(e, t, n) {
  var r = tn(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, wf(e)) xf(t, n);
  else if (n = Zd(e, t, n, r), n !== null) {
    var i = je();
    ut(n, e, r, i), kf(n, t, r);
  }
}
function Wm(e, t, n) {
  var r = tn(e), i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (wf(e)) xf(t, i);
  else {
    var s = e.alternate;
    if (e.lanes === 0 && (s === null || s.lanes === 0) && (s = t.lastRenderedReducer, s !== null)) try {
      var o = t.lastRenderedState, l = s(o, n);
      if (i.hasEagerState = !0, i.eagerState = l, ct(l, o)) {
        var a = t.interleaved;
        a === null ? (i.next = i, xa(t)) : (i.next = a.next, a.next = i), t.interleaved = i;
        return;
      }
    } catch {
    } finally {
    }
    n = Zd(e, t, i, r), n !== null && (i = je(), ut(n, e, r, i), kf(n, t, r));
  }
}
function wf(e) {
  var t = e.alternate;
  return e === se || t !== null && t === se;
}
function xf(e, t) {
  zr = Cs = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function kf(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, oa(e, n);
  }
}
var Ns = { readContext: tt, useCallback: Ce, useContext: Ce, useEffect: Ce, useImperativeHandle: Ce, useInsertionEffect: Ce, useLayoutEffect: Ce, useMemo: Ce, useReducer: Ce, useRef: Ce, useState: Ce, useDebugValue: Ce, useDeferredValue: Ce, useTransition: Ce, useMutableSource: Ce, useSyncExternalStore: Ce, useId: Ce, unstable_isNewReconciler: !1 }, Hm = { readContext: tt, useCallback: function(e, t) {
  return yt().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: tt, useEffect: Yu, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Gi(
    4194308,
    4,
    hf.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Gi(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Gi(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = yt();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = yt();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Vm.bind(null, se, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = yt();
  return e = { current: e }, t.memoizedState = e;
}, useState: Xu, useDebugValue: ja, useDeferredValue: function(e) {
  return yt().memoizedState = e;
}, useTransition: function() {
  var e = Xu(!1), t = e[0];
  return e = $m.bind(null, e[1]), yt().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = se, i = yt();
  if (ne) {
    if (n === void 0) throw Error(_(407));
    n = n();
  } else {
    if (n = t(), ye === null) throw Error(_(349));
    kn & 30 || sf(r, t, n);
  }
  i.memoizedState = n;
  var s = { value: n, getSnapshot: t };
  return i.queue = s, Yu(lf.bind(
    null,
    r,
    s,
    e
  ), [e]), r.flags |= 2048, oi(9, of.bind(null, r, s, n, t), void 0, null), n;
}, useId: function() {
  var e = yt(), t = ye.identifierPrefix;
  if (ne) {
    var n = jt, r = Rt;
    n = (r & ~(1 << 32 - at(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = ii++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = Um++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, Km = {
  readContext: tt,
  useCallback: mf,
  useContext: tt,
  useEffect: Ra,
  useImperativeHandle: pf,
  useInsertionEffect: df,
  useLayoutEffect: ff,
  useMemo: gf,
  useReducer: Oo,
  useRef: cf,
  useState: function() {
    return Oo(si);
  },
  useDebugValue: ja,
  useDeferredValue: function(e) {
    var t = nt();
    return vf(t, he.memoizedState, e);
  },
  useTransition: function() {
    var e = Oo(si)[0], t = nt().memoizedState;
    return [e, t];
  },
  useMutableSource: nf,
  useSyncExternalStore: rf,
  useId: yf,
  unstable_isNewReconciler: !1
}, Qm = { readContext: tt, useCallback: mf, useContext: tt, useEffect: Ra, useImperativeHandle: pf, useInsertionEffect: df, useLayoutEffect: ff, useMemo: gf, useReducer: Ao, useRef: cf, useState: function() {
  return Ao(si);
}, useDebugValue: ja, useDeferredValue: function(e) {
  var t = nt();
  return he === null ? t.memoizedState = e : vf(t, he.memoizedState, e);
}, useTransition: function() {
  var e = Ao(si)[0], t = nt().memoizedState;
  return [e, t];
}, useMutableSource: nf, useSyncExternalStore: rf, useId: yf, unstable_isNewReconciler: !1 };
function it(e, t) {
  if (e && e.defaultProps) {
    t = oe({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function El(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : oe({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Hs = { isMounted: function(e) {
  return (e = e._reactInternals) ? Nn(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = je(), i = tn(e), s = Dt(r, i);
  s.payload = t, n != null && (s.callback = n), t = Zt(e, s, i), t !== null && (ut(t, e, i, r), Yi(t, e, i));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = je(), i = tn(e), s = Dt(r, i);
  s.tag = 1, s.payload = t, n != null && (s.callback = n), t = Zt(e, s, i), t !== null && (ut(t, e, i, r), Yi(t, e, i));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = je(), r = tn(e), i = Dt(n, r);
  i.tag = 2, t != null && (i.callback = t), t = Zt(e, i, r), t !== null && (ut(t, e, r, n), Yi(t, e, r));
} };
function qu(e, t, n, r, i, s, o) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, s, o) : t.prototype && t.prototype.isPureReactComponent ? !Jr(n, r) || !Jr(i, s) : !0;
}
function Sf(e, t, n) {
  var r = !1, i = on, s = t.contextType;
  return typeof s == "object" && s !== null ? s = tt(s) : (i = be(t) ? wn : Te.current, r = t.contextTypes, s = (r = r != null) ? er(e, i) : on), t = new t(n, s), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Hs, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = s), t;
}
function Gu(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Hs.enqueueReplaceState(t, t.state, null);
}
function Cl(e, t, n, r) {
  var i = e.stateNode;
  i.props = n, i.state = e.memoizedState, i.refs = {}, ka(e);
  var s = t.contextType;
  typeof s == "object" && s !== null ? i.context = tt(s) : (s = be(t) ? wn : Te.current, i.context = er(e, s)), i.state = e.memoizedState, s = t.getDerivedStateFromProps, typeof s == "function" && (El(e, t, s, n), i.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), t !== i.state && Hs.enqueueReplaceState(i, i.state, null), Ss(e, n, i, r), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function ir(e, t) {
  try {
    var n = "", r = t;
    do
      n += kp(r), r = r.return;
    while (r);
    var i = n;
  } catch (s) {
    i = `
Error generating stack: ` + s.message + `
` + s.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function Lo(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Nl(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var Xm = typeof WeakMap == "function" ? WeakMap : Map;
function Ef(e, t, n) {
  n = Dt(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    Ts || (Ts = !0, Pl = r), Nl(e, t);
  }, n;
}
function Cf(e, t, n) {
  n = Dt(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    n.payload = function() {
      return r(i);
    }, n.callback = function() {
      Nl(e, t);
    };
  }
  var s = e.stateNode;
  return s !== null && typeof s.componentDidCatch == "function" && (n.callback = function() {
    Nl(e, t), typeof r != "function" && (en === null ? en = /* @__PURE__ */ new Set([this]) : en.add(this));
    var o = t.stack;
    this.componentDidCatch(t.value, { componentStack: o !== null ? o : "" });
  }), n;
}
function Ju(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Xm();
    var i = /* @__PURE__ */ new Set();
    r.set(t, i);
  } else i = r.get(t), i === void 0 && (i = /* @__PURE__ */ new Set(), r.set(t, i));
  i.has(n) || (i.add(n), e = ag.bind(null, e, t, n), t.then(e, e));
}
function Zu(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function ec(e, t, n, r, i) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = i, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Dt(-1, 1), t.tag = 2, Zt(n, t, 1))), n.lanes |= 1), e);
}
var Ym = Pt.ReactCurrentOwner, Ie = !1;
function Re(e, t, n, r) {
  t.child = e === null ? Jd(t, null, n, r) : nr(t, e.child, n, r);
}
function tc(e, t, n, r, i) {
  n = n.render;
  var s = t.ref;
  return qn(t, i), r = _a(e, t, n, r, s, i), n = Ta(), e !== null && !Ie ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, It(e, t, i)) : (ne && n && pa(t), t.flags |= 1, Re(e, t, r, i), t.child);
}
function nc(e, t, n, r, i) {
  if (e === null) {
    var s = n.type;
    return typeof s == "function" && !Ma(s) && s.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = s, Nf(e, t, s, r, i)) : (e = ts(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (s = e.child, !(e.lanes & i)) {
    var o = s.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Jr, n(o, r) && e.ref === t.ref) return It(e, t, i);
  }
  return t.flags |= 1, e = nn(s, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Nf(e, t, n, r, i) {
  if (e !== null) {
    var s = e.memoizedProps;
    if (Jr(s, r) && e.ref === t.ref) if (Ie = !1, t.pendingProps = r = s, (e.lanes & i) !== 0) e.flags & 131072 && (Ie = !0);
    else return t.lanes = e.lanes, It(e, t, i);
  }
  return _l(e, t, n, r, i);
}
function _f(e, t, n) {
  var r = t.pendingProps, i = r.children, s = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, J(Wn, $e), $e |= n;
  else {
    if (!(n & 1073741824)) return e = s !== null ? s.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, J(Wn, $e), $e |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = s !== null ? s.baseLanes : n, J(Wn, $e), $e |= r;
  }
  else s !== null ? (r = s.baseLanes | n, t.memoizedState = null) : r = n, J(Wn, $e), $e |= r;
  return Re(e, t, i, n), t.child;
}
function Tf(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function _l(e, t, n, r, i) {
  var s = be(n) ? wn : Te.current;
  return s = er(t, s), qn(t, i), n = _a(e, t, n, r, s, i), r = Ta(), e !== null && !Ie ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, It(e, t, i)) : (ne && r && pa(t), t.flags |= 1, Re(e, t, n, i), t.child);
}
function rc(e, t, n, r, i) {
  if (be(n)) {
    var s = !0;
    vs(t);
  } else s = !1;
  if (qn(t, i), t.stateNode === null) Ji(e, t), Sf(t, n, r), Cl(t, n, r, i), r = !0;
  else if (e === null) {
    var o = t.stateNode, l = t.memoizedProps;
    o.props = l;
    var a = o.context, c = n.contextType;
    typeof c == "object" && c !== null ? c = tt(c) : (c = be(n) ? wn : Te.current, c = er(t, c));
    var d = n.getDerivedStateFromProps, h = typeof d == "function" || typeof o.getSnapshotBeforeUpdate == "function";
    h || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (l !== r || a !== c) && Gu(t, o, r, c), Vt = !1;
    var m = t.memoizedState;
    o.state = m, Ss(t, r, o, i), a = t.memoizedState, l !== r || m !== a || Pe.current || Vt ? (typeof d == "function" && (El(t, n, d, r), a = t.memoizedState), (l = Vt || qu(t, n, l, r, m, a, c)) ? (h || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = a), o.props = r, o.state = a, o.context = c, r = l) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    o = t.stateNode, ef(e, t), l = t.memoizedProps, c = t.type === t.elementType ? l : it(t.type, l), o.props = c, h = t.pendingProps, m = o.context, a = n.contextType, typeof a == "object" && a !== null ? a = tt(a) : (a = be(n) ? wn : Te.current, a = er(t, a));
    var y = n.getDerivedStateFromProps;
    (d = typeof y == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (l !== h || m !== a) && Gu(t, o, r, a), Vt = !1, m = t.memoizedState, o.state = m, Ss(t, r, o, i);
    var k = t.memoizedState;
    l !== h || m !== k || Pe.current || Vt ? (typeof y == "function" && (El(t, n, y, r), k = t.memoizedState), (c = Vt || qu(t, n, c, r, m, k, a) || !1) ? (d || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, k, a), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, k, a)), typeof o.componentDidUpdate == "function" && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || l === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = k), o.props = r, o.state = k, o.context = a, r = c) : (typeof o.componentDidUpdate != "function" || l === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Tl(e, t, n, r, s, i);
}
function Tl(e, t, n, r, i, s) {
  Tf(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return i && $u(t, n, !1), It(e, t, s);
  r = t.stateNode, Ym.current = t;
  var l = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && o ? (t.child = nr(t, e.child, null, s), t.child = nr(t, null, l, s)) : Re(e, t, l, s), t.memoizedState = r.state, i && $u(t, n, !0), t.child;
}
function Rf(e) {
  var t = e.stateNode;
  t.pendingContext ? Uu(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Uu(e, t.context, !1), Sa(e, t.containerInfo);
}
function ic(e, t, n, r, i) {
  return tr(), ga(i), t.flags |= 256, Re(e, t, n, r), t.child;
}
var Rl = { dehydrated: null, treeContext: null, retryLane: 0 };
function jl(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function jf(e, t, n) {
  var r = t.pendingProps, i = ie.current, s = !1, o = (t.flags & 128) !== 0, l;
  if ((l = o) || (l = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0), l ? (s = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1), J(ie, i & 1), e === null)
    return kl(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (o = r.children, e = r.fallback, s ? (r = t.mode, s = t.child, o = { mode: "hidden", children: o }, !(r & 1) && s !== null ? (s.childLanes = 0, s.pendingProps = o) : s = Xs(o, r, 0, null), e = yn(e, r, n, null), s.return = t, e.return = t, s.sibling = e, t.child = s, t.child.memoizedState = jl(n), t.memoizedState = Rl, e) : Da(t, o));
  if (i = e.memoizedState, i !== null && (l = i.dehydrated, l !== null)) return qm(e, t, o, r, l, i, n);
  if (s) {
    s = r.fallback, o = t.mode, i = e.child, l = i.sibling;
    var a = { mode: "hidden", children: r.children };
    return !(o & 1) && t.child !== i ? (r = t.child, r.childLanes = 0, r.pendingProps = a, t.deletions = null) : (r = nn(i, a), r.subtreeFlags = i.subtreeFlags & 14680064), l !== null ? s = nn(l, s) : (s = yn(s, o, n, null), s.flags |= 2), s.return = t, r.return = t, r.sibling = s, t.child = r, r = s, s = t.child, o = e.child.memoizedState, o = o === null ? jl(n) : { baseLanes: o.baseLanes | n, cachePool: null, transitions: o.transitions }, s.memoizedState = o, s.childLanes = e.childLanes & ~n, t.memoizedState = Rl, r;
  }
  return s = e.child, e = s.sibling, r = nn(s, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Da(e, t) {
  return t = Xs({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Pi(e, t, n, r) {
  return r !== null && ga(r), nr(t, e.child, null, n), e = Da(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function qm(e, t, n, r, i, s, o) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = Lo(Error(_(422))), Pi(e, t, o, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (s = r.fallback, i = t.mode, r = Xs({ mode: "visible", children: r.children }, i, 0, null), s = yn(s, i, o, null), s.flags |= 2, r.return = t, s.return = t, r.sibling = s, t.child = r, t.mode & 1 && nr(t, e.child, null, o), t.child.memoizedState = jl(o), t.memoizedState = Rl, s);
  if (!(t.mode & 1)) return Pi(e, t, o, null);
  if (i.data === "$!") {
    if (r = i.nextSibling && i.nextSibling.dataset, r) var l = r.dgst;
    return r = l, s = Error(_(419)), r = Lo(s, r, void 0), Pi(e, t, o, r);
  }
  if (l = (o & e.childLanes) !== 0, Ie || l) {
    if (r = ye, r !== null) {
      switch (o & -o) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
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
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      i = i & (r.suspendedLanes | o) ? 0 : i, i !== 0 && i !== s.retryLane && (s.retryLane = i, Lt(e, i), ut(r, e, i, -1));
    }
    return ba(), r = Lo(Error(_(421))), Pi(e, t, o, r);
  }
  return i.data === "$?" ? (t.flags |= 128, t.child = e.child, t = ug.bind(null, e), i._reactRetry = t, null) : (e = s.treeContext, Ve = Jt(i.nextSibling), We = t, ne = !0, lt = null, e !== null && (qe[Ge++] = Rt, qe[Ge++] = jt, qe[Ge++] = xn, Rt = e.id, jt = e.overflow, xn = t), t = Da(t, r.children), t.flags |= 4096, t);
}
function sc(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Sl(e.return, t, n);
}
function Io(e, t, n, r, i) {
  var s = e.memoizedState;
  s === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: i } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = r, s.tail = n, s.tailMode = i);
}
function Df(e, t, n) {
  var r = t.pendingProps, i = r.revealOrder, s = r.tail;
  if (Re(e, t, r.children, n), r = ie.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && sc(e, n, t);
      else if (e.tag === 19) sc(e, n, t);
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
  if (J(ie, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (i) {
    case "forwards":
      for (n = t.child, i = null; n !== null; ) e = n.alternate, e !== null && Es(e) === null && (i = n), n = n.sibling;
      n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), Io(t, !1, i, n, s);
      break;
    case "backwards":
      for (n = null, i = t.child, t.child = null; i !== null; ) {
        if (e = i.alternate, e !== null && Es(e) === null) {
          t.child = i;
          break;
        }
        e = i.sibling, i.sibling = n, n = i, i = e;
      }
      Io(t, !0, n, null, s);
      break;
    case "together":
      Io(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function Ji(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function It(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), Sn |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(_(153));
  if (t.child !== null) {
    for (e = t.child, n = nn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = nn(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function Gm(e, t, n) {
  switch (t.tag) {
    case 3:
      Rf(t), tr();
      break;
    case 5:
      tf(t);
      break;
    case 1:
      be(t.type) && vs(t);
      break;
    case 4:
      Sa(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, i = t.memoizedProps.value;
      J(xs, r._currentValue), r._currentValue = i;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (J(ie, ie.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? jf(e, t, n) : (J(ie, ie.current & 1), e = It(e, t, n), e !== null ? e.sibling : null);
      J(ie, ie.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return Df(e, t, n);
        t.flags |= 128;
      }
      if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), J(ie, ie.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, _f(e, t, n);
  }
  return It(e, t, n);
}
var Of, Dl, Af, Lf;
Of = function(e, t) {
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
Dl = function() {
};
Af = function(e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    e = t.stateNode, gn(kt.current);
    var s = null;
    switch (n) {
      case "input":
        i = Jo(e, i), r = Jo(e, r), s = [];
        break;
      case "select":
        i = oe({}, i, { value: void 0 }), r = oe({}, r, { value: void 0 }), s = [];
        break;
      case "textarea":
        i = tl(e, i), r = tl(e, r), s = [];
        break;
      default:
        typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = ms);
    }
    rl(n, r);
    var o;
    n = null;
    for (c in i) if (!r.hasOwnProperty(c) && i.hasOwnProperty(c) && i[c] != null) if (c === "style") {
      var l = i[c];
      for (o in l) l.hasOwnProperty(o) && (n || (n = {}), n[o] = "");
    } else c !== "dangerouslySetInnerHTML" && c !== "children" && c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (Hr.hasOwnProperty(c) ? s || (s = []) : (s = s || []).push(c, null));
    for (c in r) {
      var a = r[c];
      if (l = i != null ? i[c] : void 0, r.hasOwnProperty(c) && a !== l && (a != null || l != null)) if (c === "style") if (l) {
        for (o in l) !l.hasOwnProperty(o) || a && a.hasOwnProperty(o) || (n || (n = {}), n[o] = "");
        for (o in a) a.hasOwnProperty(o) && l[o] !== a[o] && (n || (n = {}), n[o] = a[o]);
      } else n || (s || (s = []), s.push(
        c,
        n
      )), n = a;
      else c === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, l = l ? l.__html : void 0, a != null && l !== a && (s = s || []).push(c, a)) : c === "children" ? typeof a != "string" && typeof a != "number" || (s = s || []).push(c, "" + a) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && (Hr.hasOwnProperty(c) ? (a != null && c === "onScroll" && Z("scroll", e), s || l === a || (s = [])) : (s = s || []).push(c, a));
    }
    n && (s = s || []).push("style", n);
    var c = s;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
Lf = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Cr(e, t) {
  if (!ne) switch (e.tailMode) {
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
function Ne(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var i = e.child; i !== null; ) n |= i.lanes | i.childLanes, r |= i.subtreeFlags & 14680064, r |= i.flags & 14680064, i.return = e, i = i.sibling;
  else for (i = e.child; i !== null; ) n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function Jm(e, t, n) {
  var r = t.pendingProps;
  switch (ma(t), t.tag) {
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
      return Ne(t), null;
    case 1:
      return be(t.type) && gs(), Ne(t), null;
    case 3:
      return r = t.stateNode, rr(), ee(Pe), ee(Te), Ca(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Li(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, lt !== null && (zl(lt), lt = null))), Dl(e, t), Ne(t), null;
    case 5:
      Ea(t);
      var i = gn(ri.current);
      if (n = t.type, e !== null && t.stateNode != null) Af(e, t, n, r, i), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(_(166));
          return Ne(t), null;
        }
        if (e = gn(kt.current), Li(t)) {
          r = t.stateNode, n = t.type;
          var s = t.memoizedProps;
          switch (r[wt] = t, r[ti] = s, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              Z("cancel", r), Z("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              Z("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < Or.length; i++) Z(Or[i], r);
              break;
            case "source":
              Z("error", r);
              break;
            case "img":
            case "image":
            case "link":
              Z(
                "error",
                r
              ), Z("load", r);
              break;
            case "details":
              Z("toggle", r);
              break;
            case "input":
              pu(r, s), Z("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!s.multiple }, Z("invalid", r);
              break;
            case "textarea":
              gu(r, s), Z("invalid", r);
          }
          rl(n, s), i = null;
          for (var o in s) if (s.hasOwnProperty(o)) {
            var l = s[o];
            o === "children" ? typeof l == "string" ? r.textContent !== l && (s.suppressHydrationWarning !== !0 && Ai(r.textContent, l, e), i = ["children", l]) : typeof l == "number" && r.textContent !== "" + l && (s.suppressHydrationWarning !== !0 && Ai(
              r.textContent,
              l,
              e
            ), i = ["children", "" + l]) : Hr.hasOwnProperty(o) && l != null && o === "onScroll" && Z("scroll", r);
          }
          switch (n) {
            case "input":
              Ci(r), mu(r, s, !0);
              break;
            case "textarea":
              Ci(r), vu(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof s.onClick == "function" && (r.onclick = ms);
          }
          r = i, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          o = i.nodeType === 9 ? i : i.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = od(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = o.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, { is: r.is }) : (e = o.createElement(n), n === "select" && (o = e, r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, n), e[wt] = t, e[ti] = r, Of(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (o = il(n, r), n) {
              case "dialog":
                Z("cancel", e), Z("close", e), i = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                Z("load", e), i = r;
                break;
              case "video":
              case "audio":
                for (i = 0; i < Or.length; i++) Z(Or[i], e);
                i = r;
                break;
              case "source":
                Z("error", e), i = r;
                break;
              case "img":
              case "image":
              case "link":
                Z(
                  "error",
                  e
                ), Z("load", e), i = r;
                break;
              case "details":
                Z("toggle", e), i = r;
                break;
              case "input":
                pu(e, r), i = Jo(e, r), Z("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, i = oe({}, r, { value: void 0 }), Z("invalid", e);
                break;
              case "textarea":
                gu(e, r), i = tl(e, r), Z("invalid", e);
                break;
              default:
                i = r;
            }
            rl(n, i), l = i;
            for (s in l) if (l.hasOwnProperty(s)) {
              var a = l[s];
              s === "style" ? ud(e, a) : s === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, a != null && ld(e, a)) : s === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && Kr(e, a) : typeof a == "number" && Kr(e, "" + a) : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus" && (Hr.hasOwnProperty(s) ? a != null && s === "onScroll" && Z("scroll", e) : a != null && ea(e, s, a, o));
            }
            switch (n) {
              case "input":
                Ci(e), mu(e, r, !1);
                break;
              case "textarea":
                Ci(e), vu(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + sn(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, s = r.value, s != null ? Kn(e, !!r.multiple, s, !1) : r.defaultValue != null && Kn(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = ms);
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
      return Ne(t), null;
    case 6:
      if (e && t.stateNode != null) Lf(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(_(166));
        if (n = gn(ri.current), gn(kt.current), Li(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[wt] = t, (s = r.nodeValue !== n) && (e = We, e !== null)) switch (e.tag) {
            case 3:
              Ai(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && Ai(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          s && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[wt] = t, t.stateNode = r;
      }
      return Ne(t), null;
    case 13:
      if (ee(ie), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (ne && Ve !== null && t.mode & 1 && !(t.flags & 128)) qd(), tr(), t.flags |= 98560, s = !1;
        else if (s = Li(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!s) throw Error(_(318));
            if (s = t.memoizedState, s = s !== null ? s.dehydrated : null, !s) throw Error(_(317));
            s[wt] = t;
          } else tr(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          Ne(t), s = !1;
        } else lt !== null && (zl(lt), lt = null), s = !0;
        if (!s) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || ie.current & 1 ? me === 0 && (me = 3) : ba())), t.updateQueue !== null && (t.flags |= 4), Ne(t), null);
    case 4:
      return rr(), Dl(e, t), e === null && Zr(t.stateNode.containerInfo), Ne(t), null;
    case 10:
      return wa(t.type._context), Ne(t), null;
    case 17:
      return be(t.type) && gs(), Ne(t), null;
    case 19:
      if (ee(ie), s = t.memoizedState, s === null) return Ne(t), null;
      if (r = (t.flags & 128) !== 0, o = s.rendering, o === null) if (r) Cr(s, !1);
      else {
        if (me !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (o = Es(e), o !== null) {
            for (t.flags |= 128, Cr(s, !1), r = o.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) s = n, e = r, s.flags &= 14680066, o = s.alternate, o === null ? (s.childLanes = 0, s.lanes = e, s.child = null, s.subtreeFlags = 0, s.memoizedProps = null, s.memoizedState = null, s.updateQueue = null, s.dependencies = null, s.stateNode = null) : (s.childLanes = o.childLanes, s.lanes = o.lanes, s.child = o.child, s.subtreeFlags = 0, s.deletions = null, s.memoizedProps = o.memoizedProps, s.memoizedState = o.memoizedState, s.updateQueue = o.updateQueue, s.type = o.type, e = o.dependencies, s.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return J(ie, ie.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        s.tail !== null && ce() > sr && (t.flags |= 128, r = !0, Cr(s, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = Es(o), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Cr(s, !0), s.tail === null && s.tailMode === "hidden" && !o.alternate && !ne) return Ne(t), null;
        } else 2 * ce() - s.renderingStartTime > sr && n !== 1073741824 && (t.flags |= 128, r = !0, Cr(s, !1), t.lanes = 4194304);
        s.isBackwards ? (o.sibling = t.child, t.child = o) : (n = s.last, n !== null ? n.sibling = o : t.child = o, s.last = o);
      }
      return s.tail !== null ? (t = s.tail, s.rendering = t, s.tail = t.sibling, s.renderingStartTime = ce(), t.sibling = null, n = ie.current, J(ie, r ? n & 1 | 2 : n & 1), t) : (Ne(t), null);
    case 22:
    case 23:
      return Pa(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? $e & 1073741824 && (Ne(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ne(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(_(156, t.tag));
}
function Zm(e, t) {
  switch (ma(t), t.tag) {
    case 1:
      return be(t.type) && gs(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return rr(), ee(Pe), ee(Te), Ca(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Ea(t), null;
    case 13:
      if (ee(ie), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(_(340));
        tr();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return ee(ie), null;
    case 4:
      return rr(), null;
    case 10:
      return wa(t.type._context), null;
    case 22:
    case 23:
      return Pa(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var bi = !1, _e = !1, eg = typeof WeakSet == "function" ? WeakSet : Set, b = null;
function Vn(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    ae(e, t, r);
  }
  else n.current = null;
}
function Ol(e, t, n) {
  try {
    n();
  } catch (r) {
    ae(e, t, r);
  }
}
var oc = !1;
function tg(e, t) {
  if (pl = fs, e = Md(), ha(e)) {
    if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
    else e: {
      n = (n = e.ownerDocument) && n.defaultView || window;
      var r = n.getSelection && n.getSelection();
      if (r && r.rangeCount !== 0) {
        n = r.anchorNode;
        var i = r.anchorOffset, s = r.focusNode;
        r = r.focusOffset;
        try {
          n.nodeType, s.nodeType;
        } catch {
          n = null;
          break e;
        }
        var o = 0, l = -1, a = -1, c = 0, d = 0, h = e, m = null;
        t: for (; ; ) {
          for (var y; h !== n || i !== 0 && h.nodeType !== 3 || (l = o + i), h !== s || r !== 0 && h.nodeType !== 3 || (a = o + r), h.nodeType === 3 && (o += h.nodeValue.length), (y = h.firstChild) !== null; )
            m = h, h = y;
          for (; ; ) {
            if (h === e) break t;
            if (m === n && ++c === i && (l = o), m === s && ++d === r && (a = o), (y = h.nextSibling) !== null) break;
            h = m, m = h.parentNode;
          }
          h = y;
        }
        n = l === -1 || a === -1 ? null : { start: l, end: a };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (ml = { focusedElem: e, selectionRange: n }, fs = !1, b = t; b !== null; ) if (t = b, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, b = e;
  else for (; b !== null; ) {
    t = b;
    try {
      var k = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (k !== null) {
            var x = k.memoizedProps, j = k.memoizedState, p = t.stateNode, f = p.getSnapshotBeforeUpdate(t.elementType === t.type ? x : it(t.type, x), j);
            p.__reactInternalSnapshotBeforeUpdate = f;
          }
          break;
        case 3:
          var v = t.stateNode.containerInfo;
          v.nodeType === 1 ? v.textContent = "" : v.nodeType === 9 && v.documentElement && v.removeChild(v.documentElement);
          break;
        case 5:
        case 6:
        case 4:
        case 17:
          break;
        default:
          throw Error(_(163));
      }
    } catch (w) {
      ae(t, t.return, w);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, b = e;
      break;
    }
    b = t.return;
  }
  return k = oc, oc = !1, k;
}
function Fr(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var i = r = r.next;
    do {
      if ((i.tag & e) === e) {
        var s = i.destroy;
        i.destroy = void 0, s !== void 0 && Ol(t, n, s);
      }
      i = i.next;
    } while (i !== r);
  }
}
function Ks(e, t) {
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
function Al(e) {
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
function If(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, If(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[wt], delete t[ti], delete t[yl], delete t[Mm], delete t[zm])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Pf(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function lc(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || Pf(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Ll(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = ms));
  else if (r !== 4 && (e = e.child, e !== null)) for (Ll(e, t, n), e = e.sibling; e !== null; ) Ll(e, t, n), e = e.sibling;
}
function Il(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (Il(e, t, n), e = e.sibling; e !== null; ) Il(e, t, n), e = e.sibling;
}
var xe = null, st = !1;
function Ut(e, t, n) {
  for (n = n.child; n !== null; ) bf(e, t, n), n = n.sibling;
}
function bf(e, t, n) {
  if (xt && typeof xt.onCommitFiberUnmount == "function") try {
    xt.onCommitFiberUnmount(zs, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      _e || Vn(n, t);
    case 6:
      var r = xe, i = st;
      xe = null, Ut(e, t, n), xe = r, st = i, xe !== null && (st ? (e = xe, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : xe.removeChild(n.stateNode));
      break;
    case 18:
      xe !== null && (st ? (e = xe, n = n.stateNode, e.nodeType === 8 ? To(e.parentNode, n) : e.nodeType === 1 && To(e, n), qr(e)) : To(xe, n.stateNode));
      break;
    case 4:
      r = xe, i = st, xe = n.stateNode.containerInfo, st = !0, Ut(e, t, n), xe = r, st = i;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!_e && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        i = r = r.next;
        do {
          var s = i, o = s.destroy;
          s = s.tag, o !== void 0 && (s & 2 || s & 4) && Ol(n, t, o), i = i.next;
        } while (i !== r);
      }
      Ut(e, t, n);
      break;
    case 1:
      if (!_e && (Vn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (l) {
        ae(n, t, l);
      }
      Ut(e, t, n);
      break;
    case 21:
      Ut(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (_e = (r = _e) || n.memoizedState !== null, Ut(e, t, n), _e = r) : Ut(e, t, n);
      break;
    default:
      Ut(e, t, n);
  }
}
function ac(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new eg()), t.forEach(function(r) {
      var i = cg.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(i, i));
    });
  }
}
function rt(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var i = n[r];
    try {
      var s = e, o = t, l = o;
      e: for (; l !== null; ) {
        switch (l.tag) {
          case 5:
            xe = l.stateNode, st = !1;
            break e;
          case 3:
            xe = l.stateNode.containerInfo, st = !0;
            break e;
          case 4:
            xe = l.stateNode.containerInfo, st = !0;
            break e;
        }
        l = l.return;
      }
      if (xe === null) throw Error(_(160));
      bf(s, o, i), xe = null, st = !1;
      var a = i.alternate;
      a !== null && (a.return = null), i.return = null;
    } catch (c) {
      ae(i, t, c);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Mf(t, e), t = t.sibling;
}
function Mf(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (rt(t, e), gt(e), r & 4) {
        try {
          Fr(3, e, e.return), Ks(3, e);
        } catch (x) {
          ae(e, e.return, x);
        }
        try {
          Fr(5, e, e.return);
        } catch (x) {
          ae(e, e.return, x);
        }
      }
      break;
    case 1:
      rt(t, e), gt(e), r & 512 && n !== null && Vn(n, n.return);
      break;
    case 5:
      if (rt(t, e), gt(e), r & 512 && n !== null && Vn(n, n.return), e.flags & 32) {
        var i = e.stateNode;
        try {
          Kr(i, "");
        } catch (x) {
          ae(e, e.return, x);
        }
      }
      if (r & 4 && (i = e.stateNode, i != null)) {
        var s = e.memoizedProps, o = n !== null ? n.memoizedProps : s, l = e.type, a = e.updateQueue;
        if (e.updateQueue = null, a !== null) try {
          l === "input" && s.type === "radio" && s.name != null && id(i, s), il(l, o);
          var c = il(l, s);
          for (o = 0; o < a.length; o += 2) {
            var d = a[o], h = a[o + 1];
            d === "style" ? ud(i, h) : d === "dangerouslySetInnerHTML" ? ld(i, h) : d === "children" ? Kr(i, h) : ea(i, d, h, c);
          }
          switch (l) {
            case "input":
              Zo(i, s);
              break;
            case "textarea":
              sd(i, s);
              break;
            case "select":
              var m = i._wrapperState.wasMultiple;
              i._wrapperState.wasMultiple = !!s.multiple;
              var y = s.value;
              y != null ? Kn(i, !!s.multiple, y, !1) : m !== !!s.multiple && (s.defaultValue != null ? Kn(
                i,
                !!s.multiple,
                s.defaultValue,
                !0
              ) : Kn(i, !!s.multiple, s.multiple ? [] : "", !1));
          }
          i[ti] = s;
        } catch (x) {
          ae(e, e.return, x);
        }
      }
      break;
    case 6:
      if (rt(t, e), gt(e), r & 4) {
        if (e.stateNode === null) throw Error(_(162));
        i = e.stateNode, s = e.memoizedProps;
        try {
          i.nodeValue = s;
        } catch (x) {
          ae(e, e.return, x);
        }
      }
      break;
    case 3:
      if (rt(t, e), gt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        qr(t.containerInfo);
      } catch (x) {
        ae(e, e.return, x);
      }
      break;
    case 4:
      rt(t, e), gt(e);
      break;
    case 13:
      rt(t, e), gt(e), i = e.child, i.flags & 8192 && (s = i.memoizedState !== null, i.stateNode.isHidden = s, !s || i.alternate !== null && i.alternate.memoizedState !== null || (La = ce())), r & 4 && ac(e);
      break;
    case 22:
      if (d = n !== null && n.memoizedState !== null, e.mode & 1 ? (_e = (c = _e) || d, rt(t, e), _e = c) : rt(t, e), gt(e), r & 8192) {
        if (c = e.memoizedState !== null, (e.stateNode.isHidden = c) && !d && e.mode & 1) for (b = e, d = e.child; d !== null; ) {
          for (h = b = d; b !== null; ) {
            switch (m = b, y = m.child, m.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Fr(4, m, m.return);
                break;
              case 1:
                Vn(m, m.return);
                var k = m.stateNode;
                if (typeof k.componentWillUnmount == "function") {
                  r = m, n = m.return;
                  try {
                    t = r, k.props = t.memoizedProps, k.state = t.memoizedState, k.componentWillUnmount();
                  } catch (x) {
                    ae(r, n, x);
                  }
                }
                break;
              case 5:
                Vn(m, m.return);
                break;
              case 22:
                if (m.memoizedState !== null) {
                  cc(h);
                  continue;
                }
            }
            y !== null ? (y.return = m, b = y) : cc(h);
          }
          d = d.sibling;
        }
        e: for (d = null, h = e; ; ) {
          if (h.tag === 5) {
            if (d === null) {
              d = h;
              try {
                i = h.stateNode, c ? (s = i.style, typeof s.setProperty == "function" ? s.setProperty("display", "none", "important") : s.display = "none") : (l = h.stateNode, a = h.memoizedProps.style, o = a != null && a.hasOwnProperty("display") ? a.display : null, l.style.display = ad("display", o));
              } catch (x) {
                ae(e, e.return, x);
              }
            }
          } else if (h.tag === 6) {
            if (d === null) try {
              h.stateNode.nodeValue = c ? "" : h.memoizedProps;
            } catch (x) {
              ae(e, e.return, x);
            }
          } else if ((h.tag !== 22 && h.tag !== 23 || h.memoizedState === null || h === e) && h.child !== null) {
            h.child.return = h, h = h.child;
            continue;
          }
          if (h === e) break e;
          for (; h.sibling === null; ) {
            if (h.return === null || h.return === e) break e;
            d === h && (d = null), h = h.return;
          }
          d === h && (d = null), h.sibling.return = h.return, h = h.sibling;
        }
      }
      break;
    case 19:
      rt(t, e), gt(e), r & 4 && ac(e);
      break;
    case 21:
      break;
    default:
      rt(
        t,
        e
      ), gt(e);
  }
}
function gt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Pf(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(_(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (Kr(i, ""), r.flags &= -33);
          var s = lc(e);
          Il(e, s, i);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo, l = lc(e);
          Ll(e, l, o);
          break;
        default:
          throw Error(_(161));
      }
    } catch (a) {
      ae(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function ng(e, t, n) {
  b = e, zf(e);
}
function zf(e, t, n) {
  for (var r = (e.mode & 1) !== 0; b !== null; ) {
    var i = b, s = i.child;
    if (i.tag === 22 && r) {
      var o = i.memoizedState !== null || bi;
      if (!o) {
        var l = i.alternate, a = l !== null && l.memoizedState !== null || _e;
        l = bi;
        var c = _e;
        if (bi = o, (_e = a) && !c) for (b = i; b !== null; ) o = b, a = o.child, o.tag === 22 && o.memoizedState !== null ? dc(i) : a !== null ? (a.return = o, b = a) : dc(i);
        for (; s !== null; ) b = s, zf(s), s = s.sibling;
        b = i, bi = l, _e = c;
      }
      uc(e);
    } else i.subtreeFlags & 8772 && s !== null ? (s.return = i, b = s) : uc(e);
  }
}
function uc(e) {
  for (; b !== null; ) {
    var t = b;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            _e || Ks(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !_e) if (n === null) r.componentDidMount();
            else {
              var i = t.elementType === t.type ? n.memoizedProps : it(t.type, n.memoizedProps);
              r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var s = t.updateQueue;
            s !== null && Qu(t, s, r);
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
              Qu(t, o, n);
            }
            break;
          case 5:
            var l = t.stateNode;
            if (n === null && t.flags & 4) {
              n = l;
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
              var c = t.alternate;
              if (c !== null) {
                var d = c.memoizedState;
                if (d !== null) {
                  var h = d.dehydrated;
                  h !== null && qr(h);
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
            throw Error(_(163));
        }
        _e || t.flags & 512 && Al(t);
      } catch (m) {
        ae(t, t.return, m);
      }
    }
    if (t === e) {
      b = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, b = n;
      break;
    }
    b = t.return;
  }
}
function cc(e) {
  for (; b !== null; ) {
    var t = b;
    if (t === e) {
      b = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, b = n;
      break;
    }
    b = t.return;
  }
}
function dc(e) {
  for (; b !== null; ) {
    var t = b;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Ks(4, t);
          } catch (a) {
            ae(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              ae(t, i, a);
            }
          }
          var s = t.return;
          try {
            Al(t);
          } catch (a) {
            ae(t, s, a);
          }
          break;
        case 5:
          var o = t.return;
          try {
            Al(t);
          } catch (a) {
            ae(t, o, a);
          }
      }
    } catch (a) {
      ae(t, t.return, a);
    }
    if (t === e) {
      b = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      l.return = t.return, b = l;
      break;
    }
    b = t.return;
  }
}
var rg = Math.ceil, _s = Pt.ReactCurrentDispatcher, Oa = Pt.ReactCurrentOwner, et = Pt.ReactCurrentBatchConfig, Y = 0, ye = null, de = null, ke = 0, $e = 0, Wn = un(0), me = 0, li = null, Sn = 0, Qs = 0, Aa = 0, Br = null, Le = null, La = 0, sr = 1 / 0, _t = null, Ts = !1, Pl = null, en = null, Mi = !1, Xt = null, Rs = 0, Ur = 0, bl = null, Zi = -1, es = 0;
function je() {
  return Y & 6 ? ce() : Zi !== -1 ? Zi : Zi = ce();
}
function tn(e) {
  return e.mode & 1 ? Y & 2 && ke !== 0 ? ke & -ke : Bm.transition !== null ? (es === 0 && (es = kd()), es) : (e = G, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Rd(e.type)), e) : 1;
}
function ut(e, t, n, r) {
  if (50 < Ur) throw Ur = 0, bl = null, Error(_(185));
  fi(e, n, r), (!(Y & 2) || e !== ye) && (e === ye && (!(Y & 2) && (Qs |= n), me === 4 && Kt(e, ke)), Me(e, r), n === 1 && Y === 0 && !(t.mode & 1) && (sr = ce() + 500, Vs && cn()));
}
function Me(e, t) {
  var n = e.callbackNode;
  Bp(e, t);
  var r = ds(e, e === ye ? ke : 0);
  if (r === 0) n !== null && xu(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && xu(n), t === 1) e.tag === 0 ? Fm(fc.bind(null, e)) : Qd(fc.bind(null, e)), Pm(function() {
      !(Y & 6) && cn();
    }), n = null;
    else {
      switch (Sd(r)) {
        case 1:
          n = sa;
          break;
        case 4:
          n = wd;
          break;
        case 16:
          n = cs;
          break;
        case 536870912:
          n = xd;
          break;
        default:
          n = cs;
      }
      n = Kf(n, Ff.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function Ff(e, t) {
  if (Zi = -1, es = 0, Y & 6) throw Error(_(327));
  var n = e.callbackNode;
  if (Gn() && e.callbackNode !== n) return null;
  var r = ds(e, e === ye ? ke : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = js(e, r);
  else {
    t = r;
    var i = Y;
    Y |= 2;
    var s = Uf();
    (ye !== e || ke !== t) && (_t = null, sr = ce() + 500, vn(e, t));
    do
      try {
        og();
        break;
      } catch (l) {
        Bf(e, l);
      }
    while (!0);
    ya(), _s.current = s, Y = i, de !== null ? t = 0 : (ye = null, ke = 0, t = me);
  }
  if (t !== 0) {
    if (t === 2 && (i = ul(e), i !== 0 && (r = i, t = Ml(e, i))), t === 1) throw n = li, vn(e, 0), Kt(e, r), Me(e, ce()), n;
    if (t === 6) Kt(e, r);
    else {
      if (i = e.current.alternate, !(r & 30) && !ig(i) && (t = js(e, r), t === 2 && (s = ul(e), s !== 0 && (r = s, t = Ml(e, s))), t === 1)) throw n = li, vn(e, 0), Kt(e, r), Me(e, ce()), n;
      switch (e.finishedWork = i, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(_(345));
        case 2:
          hn(e, Le, _t);
          break;
        case 3:
          if (Kt(e, r), (r & 130023424) === r && (t = La + 500 - ce(), 10 < t)) {
            if (ds(e, 0) !== 0) break;
            if (i = e.suspendedLanes, (i & r) !== r) {
              je(), e.pingedLanes |= e.suspendedLanes & i;
              break;
            }
            e.timeoutHandle = vl(hn.bind(null, e, Le, _t), t);
            break;
          }
          hn(e, Le, _t);
          break;
        case 4:
          if (Kt(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var o = 31 - at(r);
            s = 1 << o, o = t[o], o > i && (i = o), r &= ~s;
          }
          if (r = i, r = ce() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * rg(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = vl(hn.bind(null, e, Le, _t), r);
            break;
          }
          hn(e, Le, _t);
          break;
        case 5:
          hn(e, Le, _t);
          break;
        default:
          throw Error(_(329));
      }
    }
  }
  return Me(e, ce()), e.callbackNode === n ? Ff.bind(null, e) : null;
}
function Ml(e, t) {
  var n = Br;
  return e.current.memoizedState.isDehydrated && (vn(e, t).flags |= 256), e = js(e, t), e !== 2 && (t = Le, Le = n, t !== null && zl(t)), e;
}
function zl(e) {
  Le === null ? Le = e : Le.push.apply(Le, e);
}
function ig(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var i = n[r], s = i.getSnapshot;
        i = i.value;
        try {
          if (!ct(s(), i)) return !1;
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
function Kt(e, t) {
  for (t &= ~Aa, t &= ~Qs, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - at(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function fc(e) {
  if (Y & 6) throw Error(_(327));
  Gn();
  var t = ds(e, 0);
  if (!(t & 1)) return Me(e, ce()), null;
  var n = js(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = ul(e);
    r !== 0 && (t = r, n = Ml(e, r));
  }
  if (n === 1) throw n = li, vn(e, 0), Kt(e, t), Me(e, ce()), n;
  if (n === 6) throw Error(_(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, hn(e, Le, _t), Me(e, ce()), null;
}
function Ia(e, t) {
  var n = Y;
  Y |= 1;
  try {
    return e(t);
  } finally {
    Y = n, Y === 0 && (sr = ce() + 500, Vs && cn());
  }
}
function En(e) {
  Xt !== null && Xt.tag === 0 && !(Y & 6) && Gn();
  var t = Y;
  Y |= 1;
  var n = et.transition, r = G;
  try {
    if (et.transition = null, G = 1, e) return e();
  } finally {
    G = r, et.transition = n, Y = t, !(Y & 6) && cn();
  }
}
function Pa() {
  $e = Wn.current, ee(Wn);
}
function vn(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, Im(n)), de !== null) for (n = de.return; n !== null; ) {
    var r = n;
    switch (ma(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && gs();
        break;
      case 3:
        rr(), ee(Pe), ee(Te), Ca();
        break;
      case 5:
        Ea(r);
        break;
      case 4:
        rr();
        break;
      case 13:
        ee(ie);
        break;
      case 19:
        ee(ie);
        break;
      case 10:
        wa(r.type._context);
        break;
      case 22:
      case 23:
        Pa();
    }
    n = n.return;
  }
  if (ye = e, de = e = nn(e.current, null), ke = $e = t, me = 0, li = null, Aa = Qs = Sn = 0, Le = Br = null, mn !== null) {
    for (t = 0; t < mn.length; t++) if (n = mn[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var i = r.next, s = n.pending;
      if (s !== null) {
        var o = s.next;
        s.next = i, r.next = o;
      }
      n.pending = r;
    }
    mn = null;
  }
  return e;
}
function Bf(e, t) {
  do {
    var n = de;
    try {
      if (ya(), qi.current = Ns, Cs) {
        for (var r = se.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), r = r.next;
        }
        Cs = !1;
      }
      if (kn = 0, ge = he = se = null, zr = !1, ii = 0, Oa.current = null, n === null || n.return === null) {
        me = 1, li = t, de = null;
        break;
      }
      e: {
        var s = e, o = n.return, l = n, a = t;
        if (t = ke, l.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
          var c = a, d = l, h = d.tag;
          if (!(d.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var m = d.alternate;
            m ? (d.updateQueue = m.updateQueue, d.memoizedState = m.memoizedState, d.lanes = m.lanes) : (d.updateQueue = null, d.memoizedState = null);
          }
          var y = Zu(o);
          if (y !== null) {
            y.flags &= -257, ec(y, o, l, s, t), y.mode & 1 && Ju(s, c, t), t = y, a = c;
            var k = t.updateQueue;
            if (k === null) {
              var x = /* @__PURE__ */ new Set();
              x.add(a), t.updateQueue = x;
            } else k.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              Ju(s, c, t), ba();
              break e;
            }
            a = Error(_(426));
          }
        } else if (ne && l.mode & 1) {
          var j = Zu(o);
          if (j !== null) {
            !(j.flags & 65536) && (j.flags |= 256), ec(j, o, l, s, t), ga(ir(a, l));
            break e;
          }
        }
        s = a = ir(a, l), me !== 4 && (me = 2), Br === null ? Br = [s] : Br.push(s), s = o;
        do {
          switch (s.tag) {
            case 3:
              s.flags |= 65536, t &= -t, s.lanes |= t;
              var p = Ef(s, a, t);
              Ku(s, p);
              break e;
            case 1:
              l = a;
              var f = s.type, v = s.stateNode;
              if (!(s.flags & 128) && (typeof f.getDerivedStateFromError == "function" || v !== null && typeof v.componentDidCatch == "function" && (en === null || !en.has(v)))) {
                s.flags |= 65536, t &= -t, s.lanes |= t;
                var w = Cf(s, l, t);
                Ku(s, w);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      Vf(n);
    } catch (S) {
      t = S, de === n && n !== null && (de = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Uf() {
  var e = _s.current;
  return _s.current = Ns, e === null ? Ns : e;
}
function ba() {
  (me === 0 || me === 3 || me === 2) && (me = 4), ye === null || !(Sn & 268435455) && !(Qs & 268435455) || Kt(ye, ke);
}
function js(e, t) {
  var n = Y;
  Y |= 2;
  var r = Uf();
  (ye !== e || ke !== t) && (_t = null, vn(e, t));
  do
    try {
      sg();
      break;
    } catch (i) {
      Bf(e, i);
    }
  while (!0);
  if (ya(), Y = n, _s.current = r, de !== null) throw Error(_(261));
  return ye = null, ke = 0, me;
}
function sg() {
  for (; de !== null; ) $f(de);
}
function og() {
  for (; de !== null && !Op(); ) $f(de);
}
function $f(e) {
  var t = Hf(e.alternate, e, $e);
  e.memoizedProps = e.pendingProps, t === null ? Vf(e) : de = t, Oa.current = null;
}
function Vf(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = Zm(n, t), n !== null) {
        n.flags &= 32767, de = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        me = 6, de = null;
        return;
      }
    } else if (n = Jm(n, t, $e), n !== null) {
      de = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      de = t;
      return;
    }
    de = t = e;
  } while (t !== null);
  me === 0 && (me = 5);
}
function hn(e, t, n) {
  var r = G, i = et.transition;
  try {
    et.transition = null, G = 1, lg(e, t, n, r);
  } finally {
    et.transition = i, G = r;
  }
  return null;
}
function lg(e, t, n, r) {
  do
    Gn();
  while (Xt !== null);
  if (Y & 6) throw Error(_(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(_(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var s = n.lanes | n.childLanes;
  if (Up(e, s), e === ye && (de = ye = null, ke = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Mi || (Mi = !0, Kf(cs, function() {
    return Gn(), null;
  })), s = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || s) {
    s = et.transition, et.transition = null;
    var o = G;
    G = 1;
    var l = Y;
    Y |= 4, Oa.current = null, tg(e, n), Mf(n, e), Tm(ml), fs = !!pl, ml = pl = null, e.current = n, ng(n), Ap(), Y = l, G = o, et.transition = s;
  } else e.current = n;
  if (Mi && (Mi = !1, Xt = e, Rs = i), s = e.pendingLanes, s === 0 && (en = null), Pp(n.stateNode), Me(e, ce()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) i = t[n], r(i.value, { componentStack: i.stack, digest: i.digest });
  if (Ts) throw Ts = !1, e = Pl, Pl = null, e;
  return Rs & 1 && e.tag !== 0 && Gn(), s = e.pendingLanes, s & 1 ? e === bl ? Ur++ : (Ur = 0, bl = e) : Ur = 0, cn(), null;
}
function Gn() {
  if (Xt !== null) {
    var e = Sd(Rs), t = et.transition, n = G;
    try {
      if (et.transition = null, G = 16 > e ? 16 : e, Xt === null) var r = !1;
      else {
        if (e = Xt, Xt = null, Rs = 0, Y & 6) throw Error(_(331));
        var i = Y;
        for (Y |= 4, b = e.current; b !== null; ) {
          var s = b, o = s.child;
          if (b.flags & 16) {
            var l = s.deletions;
            if (l !== null) {
              for (var a = 0; a < l.length; a++) {
                var c = l[a];
                for (b = c; b !== null; ) {
                  var d = b;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Fr(8, d, s);
                  }
                  var h = d.child;
                  if (h !== null) h.return = d, b = h;
                  else for (; b !== null; ) {
                    d = b;
                    var m = d.sibling, y = d.return;
                    if (If(d), d === c) {
                      b = null;
                      break;
                    }
                    if (m !== null) {
                      m.return = y, b = m;
                      break;
                    }
                    b = y;
                  }
                }
              }
              var k = s.alternate;
              if (k !== null) {
                var x = k.child;
                if (x !== null) {
                  k.child = null;
                  do {
                    var j = x.sibling;
                    x.sibling = null, x = j;
                  } while (x !== null);
                }
              }
              b = s;
            }
          }
          if (s.subtreeFlags & 2064 && o !== null) o.return = s, b = o;
          else e: for (; b !== null; ) {
            if (s = b, s.flags & 2048) switch (s.tag) {
              case 0:
              case 11:
              case 15:
                Fr(9, s, s.return);
            }
            var p = s.sibling;
            if (p !== null) {
              p.return = s.return, b = p;
              break e;
            }
            b = s.return;
          }
        }
        var f = e.current;
        for (b = f; b !== null; ) {
          o = b;
          var v = o.child;
          if (o.subtreeFlags & 2064 && v !== null) v.return = o, b = v;
          else e: for (o = f; b !== null; ) {
            if (l = b, l.flags & 2048) try {
              switch (l.tag) {
                case 0:
                case 11:
                case 15:
                  Ks(9, l);
              }
            } catch (S) {
              ae(l, l.return, S);
            }
            if (l === o) {
              b = null;
              break e;
            }
            var w = l.sibling;
            if (w !== null) {
              w.return = l.return, b = w;
              break e;
            }
            b = l.return;
          }
        }
        if (Y = i, cn(), xt && typeof xt.onPostCommitFiberRoot == "function") try {
          xt.onPostCommitFiberRoot(zs, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      G = n, et.transition = t;
    }
  }
  return !1;
}
function hc(e, t, n) {
  t = ir(n, t), t = Ef(e, t, 1), e = Zt(e, t, 1), t = je(), e !== null && (fi(e, 1, t), Me(e, t));
}
function ae(e, t, n) {
  if (e.tag === 3) hc(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      hc(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (en === null || !en.has(r))) {
        e = ir(n, e), e = Cf(t, e, 1), t = Zt(t, e, 1), e = je(), t !== null && (fi(t, 1, e), Me(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function ag(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = je(), e.pingedLanes |= e.suspendedLanes & n, ye === e && (ke & n) === n && (me === 4 || me === 3 && (ke & 130023424) === ke && 500 > ce() - La ? vn(e, 0) : Aa |= n), Me(e, t);
}
function Wf(e, t) {
  t === 0 && (e.mode & 1 ? (t = Ti, Ti <<= 1, !(Ti & 130023424) && (Ti = 4194304)) : t = 1);
  var n = je();
  e = Lt(e, t), e !== null && (fi(e, t, n), Me(e, n));
}
function ug(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), Wf(e, n);
}
function cg(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode, i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(_(314));
  }
  r !== null && r.delete(t), Wf(e, n);
}
var Hf;
Hf = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || Pe.current) Ie = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return Ie = !1, Gm(e, t, n);
    Ie = !!(e.flags & 131072);
  }
  else Ie = !1, ne && t.flags & 1048576 && Xd(t, ws, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Ji(e, t), e = t.pendingProps;
      var i = er(t, Te.current);
      qn(t, n), i = _a(null, t, r, e, i, n);
      var s = Ta();
      return t.flags |= 1, typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, be(r) ? (s = !0, vs(t)) : s = !1, t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, ka(t), i.updater = Hs, t.stateNode = i, i._reactInternals = t, Cl(t, r, e, n), t = Tl(null, t, r, !0, s, n)) : (t.tag = 0, ne && s && pa(t), Re(null, t, i, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Ji(e, t), e = t.pendingProps, i = r._init, r = i(r._payload), t.type = r, i = t.tag = fg(r), e = it(r, e), i) {
          case 0:
            t = _l(null, t, r, e, n);
            break e;
          case 1:
            t = rc(null, t, r, e, n);
            break e;
          case 11:
            t = tc(null, t, r, e, n);
            break e;
          case 14:
            t = nc(null, t, r, it(r.type, e), n);
            break e;
        }
        throw Error(_(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : it(r, i), _l(e, t, r, i, n);
    case 1:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : it(r, i), rc(e, t, r, i, n);
    case 3:
      e: {
        if (Rf(t), e === null) throw Error(_(387));
        r = t.pendingProps, s = t.memoizedState, i = s.element, ef(e, t), Ss(t, r, null, n);
        var o = t.memoizedState;
        if (r = o.element, s.isDehydrated) if (s = { element: r, isDehydrated: !1, cache: o.cache, pendingSuspenseBoundaries: o.pendingSuspenseBoundaries, transitions: o.transitions }, t.updateQueue.baseState = s, t.memoizedState = s, t.flags & 256) {
          i = ir(Error(_(423)), t), t = ic(e, t, r, n, i);
          break e;
        } else if (r !== i) {
          i = ir(Error(_(424)), t), t = ic(e, t, r, n, i);
          break e;
        } else for (Ve = Jt(t.stateNode.containerInfo.firstChild), We = t, ne = !0, lt = null, n = Jd(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (tr(), r === i) {
            t = It(e, t, n);
            break e;
          }
          Re(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return tf(t), e === null && kl(t), r = t.type, i = t.pendingProps, s = e !== null ? e.memoizedProps : null, o = i.children, gl(r, i) ? o = null : s !== null && gl(r, s) && (t.flags |= 32), Tf(e, t), Re(e, t, o, n), t.child;
    case 6:
      return e === null && kl(t), null;
    case 13:
      return jf(e, t, n);
    case 4:
      return Sa(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = nr(t, null, r, n) : Re(e, t, r, n), t.child;
    case 11:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : it(r, i), tc(e, t, r, i, n);
    case 7:
      return Re(e, t, t.pendingProps, n), t.child;
    case 8:
      return Re(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Re(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, i = t.pendingProps, s = t.memoizedProps, o = i.value, J(xs, r._currentValue), r._currentValue = o, s !== null) if (ct(s.value, o)) {
          if (s.children === i.children && !Pe.current) {
            t = It(e, t, n);
            break e;
          }
        } else for (s = t.child, s !== null && (s.return = t); s !== null; ) {
          var l = s.dependencies;
          if (l !== null) {
            o = s.child;
            for (var a = l.firstContext; a !== null; ) {
              if (a.context === r) {
                if (s.tag === 1) {
                  a = Dt(-1, n & -n), a.tag = 2;
                  var c = s.updateQueue;
                  if (c !== null) {
                    c = c.shared;
                    var d = c.pending;
                    d === null ? a.next = a : (a.next = d.next, d.next = a), c.pending = a;
                  }
                }
                s.lanes |= n, a = s.alternate, a !== null && (a.lanes |= n), Sl(
                  s.return,
                  n,
                  t
                ), l.lanes |= n;
                break;
              }
              a = a.next;
            }
          } else if (s.tag === 10) o = s.type === t.type ? null : s.child;
          else if (s.tag === 18) {
            if (o = s.return, o === null) throw Error(_(341));
            o.lanes |= n, l = o.alternate, l !== null && (l.lanes |= n), Sl(o, n, t), o = s.sibling;
          } else o = s.child;
          if (o !== null) o.return = s;
          else for (o = s; o !== null; ) {
            if (o === t) {
              o = null;
              break;
            }
            if (s = o.sibling, s !== null) {
              s.return = o.return, o = s;
              break;
            }
            o = o.return;
          }
          s = o;
        }
        Re(e, t, i.children, n), t = t.child;
      }
      return t;
    case 9:
      return i = t.type, r = t.pendingProps.children, qn(t, n), i = tt(i), r = r(i), t.flags |= 1, Re(e, t, r, n), t.child;
    case 14:
      return r = t.type, i = it(r, t.pendingProps), i = it(r.type, i), nc(e, t, r, i, n);
    case 15:
      return Nf(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : it(r, i), Ji(e, t), t.tag = 1, be(r) ? (e = !0, vs(t)) : e = !1, qn(t, n), Sf(t, r, i), Cl(t, r, i, n), Tl(null, t, r, !0, e, n);
    case 19:
      return Df(e, t, n);
    case 22:
      return _f(e, t, n);
  }
  throw Error(_(156, t.tag));
};
function Kf(e, t) {
  return yd(e, t);
}
function dg(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Ze(e, t, n, r) {
  return new dg(e, t, n, r);
}
function Ma(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function fg(e) {
  if (typeof e == "function") return Ma(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === na) return 11;
    if (e === ra) return 14;
  }
  return 2;
}
function nn(e, t) {
  var n = e.alternate;
  return n === null ? (n = Ze(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function ts(e, t, n, r, i, s) {
  var o = 2;
  if (r = e, typeof e == "function") Ma(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else e: switch (e) {
    case In:
      return yn(n.children, i, s, t);
    case ta:
      o = 8, i |= 8;
      break;
    case Xo:
      return e = Ze(12, n, t, i | 2), e.elementType = Xo, e.lanes = s, e;
    case Yo:
      return e = Ze(13, n, t, i), e.elementType = Yo, e.lanes = s, e;
    case qo:
      return e = Ze(19, n, t, i), e.elementType = qo, e.lanes = s, e;
    case td:
      return Xs(n, i, s, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case Zc:
          o = 10;
          break e;
        case ed:
          o = 9;
          break e;
        case na:
          o = 11;
          break e;
        case ra:
          o = 14;
          break e;
        case $t:
          o = 16, r = null;
          break e;
      }
      throw Error(_(130, e == null ? e : typeof e, ""));
  }
  return t = Ze(o, n, t, i), t.elementType = e, t.type = r, t.lanes = s, t;
}
function yn(e, t, n, r) {
  return e = Ze(7, e, r, t), e.lanes = n, e;
}
function Xs(e, t, n, r) {
  return e = Ze(22, e, r, t), e.elementType = td, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function Po(e, t, n) {
  return e = Ze(6, e, null, t), e.lanes = n, e;
}
function bo(e, t, n) {
  return t = Ze(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function hg(e, t, n, r, i) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = go(0), this.expirationTimes = go(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = go(0), this.identifierPrefix = r, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null;
}
function za(e, t, n, r, i, s, o, l, a) {
  return e = new hg(e, t, n, l, a), t === 1 ? (t = 1, s === !0 && (t |= 8)) : t = 0, s = Ze(3, null, null, t), e.current = s, s.stateNode = e, s.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, ka(s), e;
}
function pg(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Ln, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function Qf(e) {
  if (!e) return on;
  e = e._reactInternals;
  e: {
    if (Nn(e) !== e || e.tag !== 1) throw Error(_(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (be(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(_(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (be(n)) return Kd(e, n, t);
  }
  return t;
}
function Xf(e, t, n, r, i, s, o, l, a) {
  return e = za(n, r, !0, e, i, s, o, l, a), e.context = Qf(null), n = e.current, r = je(), i = tn(n), s = Dt(r, i), s.callback = t ?? null, Zt(n, s, i), e.current.lanes = i, fi(e, i, r), Me(e, r), e;
}
function Ys(e, t, n, r) {
  var i = t.current, s = je(), o = tn(i);
  return n = Qf(n), t.context === null ? t.context = n : t.pendingContext = n, t = Dt(s, o), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Zt(i, t, o), e !== null && (ut(e, i, o, s), Yi(e, i, o)), o;
}
function Ds(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function pc(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Fa(e, t) {
  pc(e, t), (e = e.alternate) && pc(e, t);
}
function mg() {
  return null;
}
var Yf = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Ba(e) {
  this._internalRoot = e;
}
qs.prototype.render = Ba.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(_(409));
  Ys(e, t, null, null);
};
qs.prototype.unmount = Ba.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    En(function() {
      Ys(null, e, null, null);
    }), t[At] = null;
  }
};
function qs(e) {
  this._internalRoot = e;
}
qs.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Nd();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Ht.length && t !== 0 && t < Ht[n].priority; n++) ;
    Ht.splice(n, 0, e), n === 0 && Td(e);
  }
};
function Ua(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Gs(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function mc() {
}
function gg(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var s = r;
      r = function() {
        var c = Ds(o);
        s.call(c);
      };
    }
    var o = Xf(t, r, e, 0, null, !1, !1, "", mc);
    return e._reactRootContainer = o, e[At] = o.current, Zr(e.nodeType === 8 ? e.parentNode : e), En(), o;
  }
  for (; i = e.lastChild; ) e.removeChild(i);
  if (typeof r == "function") {
    var l = r;
    r = function() {
      var c = Ds(a);
      l.call(c);
    };
  }
  var a = za(e, 0, !1, null, null, !1, !1, "", mc);
  return e._reactRootContainer = a, e[At] = a.current, Zr(e.nodeType === 8 ? e.parentNode : e), En(function() {
    Ys(t, a, n, r);
  }), a;
}
function Js(e, t, n, r, i) {
  var s = n._reactRootContainer;
  if (s) {
    var o = s;
    if (typeof i == "function") {
      var l = i;
      i = function() {
        var a = Ds(o);
        l.call(a);
      };
    }
    Ys(t, o, e, i);
  } else o = gg(n, t, e, i, r);
  return Ds(o);
}
Ed = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Dr(t.pendingLanes);
        n !== 0 && (oa(t, n | 1), Me(t, ce()), !(Y & 6) && (sr = ce() + 500, cn()));
      }
      break;
    case 13:
      En(function() {
        var r = Lt(e, 1);
        if (r !== null) {
          var i = je();
          ut(r, e, 1, i);
        }
      }), Fa(e, 1);
  }
};
la = function(e) {
  if (e.tag === 13) {
    var t = Lt(e, 134217728);
    if (t !== null) {
      var n = je();
      ut(t, e, 134217728, n);
    }
    Fa(e, 134217728);
  }
};
Cd = function(e) {
  if (e.tag === 13) {
    var t = tn(e), n = Lt(e, t);
    if (n !== null) {
      var r = je();
      ut(n, e, t, r);
    }
    Fa(e, t);
  }
};
Nd = function() {
  return G;
};
_d = function(e, t) {
  var n = G;
  try {
    return G = e, t();
  } finally {
    G = n;
  }
};
ol = function(e, t, n) {
  switch (t) {
    case "input":
      if (Zo(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = $s(r);
            if (!i) throw Error(_(90));
            rd(r), Zo(r, i);
          }
        }
      }
      break;
    case "textarea":
      sd(e, n);
      break;
    case "select":
      t = n.value, t != null && Kn(e, !!n.multiple, t, !1);
  }
};
fd = Ia;
hd = En;
var vg = { usingClientEntryPoint: !1, Events: [pi, zn, $s, cd, dd, Ia] }, Nr = { findFiberByHostInstance: pn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, yg = { bundleType: Nr.bundleType, version: Nr.version, rendererPackageName: Nr.rendererPackageName, rendererConfig: Nr.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Pt.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = gd(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Nr.findFiberByHostInstance || mg, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var zi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!zi.isDisabled && zi.supportsFiber) try {
    zs = zi.inject(yg), xt = zi;
  } catch {
  }
}
Ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = vg;
Ke.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Ua(t)) throw Error(_(200));
  return pg(e, t, null, n);
};
Ke.createRoot = function(e, t) {
  if (!Ua(e)) throw Error(_(299));
  var n = !1, r = "", i = Yf;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = za(e, 1, !1, null, null, n, !1, r, i), e[At] = t.current, Zr(e.nodeType === 8 ? e.parentNode : e), new Ba(t);
};
Ke.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(_(188)) : (e = Object.keys(e).join(","), Error(_(268, e)));
  return e = gd(t), e = e === null ? null : e.stateNode, e;
};
Ke.flushSync = function(e) {
  return En(e);
};
Ke.hydrate = function(e, t, n) {
  if (!Gs(t)) throw Error(_(200));
  return Js(null, e, t, !0, n);
};
Ke.hydrateRoot = function(e, t, n) {
  if (!Ua(e)) throw Error(_(405));
  var r = n != null && n.hydratedSources || null, i = !1, s = "", o = Yf;
  if (n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (s = n.identifierPrefix), n.onRecoverableError !== void 0 && (o = n.onRecoverableError)), t = Xf(t, null, e, 1, n ?? null, i, !1, s, o), e[At] = t.current, Zr(e), r) for (e = 0; e < r.length; e++) n = r[e], i = n._getVersion, i = i(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(
    n,
    i
  );
  return new qs(t);
};
Ke.render = function(e, t, n) {
  if (!Gs(t)) throw Error(_(200));
  return Js(null, e, t, !1, n);
};
Ke.unmountComponentAtNode = function(e) {
  if (!Gs(e)) throw Error(_(40));
  return e._reactRootContainer ? (En(function() {
    Js(null, null, e, !1, function() {
      e._reactRootContainer = null, e[At] = null;
    });
  }), !0) : !1;
};
Ke.unstable_batchedUpdates = Ia;
Ke.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Gs(n)) throw Error(_(200));
  if (e == null || e._reactInternals === void 0) throw Error(_(38));
  return Js(e, t, n, !1, r);
};
Ke.version = "18.3.1-next-f1338f8080-20240426";
function qf() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(qf);
    } catch (e) {
      console.error(e);
    }
}
qf(), Yc.exports = Ke;
var Hn = Yc.exports, gc = Hn;
Ko.createRoot = gc.createRoot, Ko.hydrateRoot = gc.hydrateRoot;
function wg() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return g.useMemo(
    () => (r) => {
      t.forEach((i) => i(r));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    t
  );
}
const Zs = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function ur(e) {
  const t = Object.prototype.toString.call(e);
  return t === "[object Window]" || // In Electron context the Window object serializes to [object global]
  t === "[object global]";
}
function $a(e) {
  return "nodeType" in e;
}
function Ae(e) {
  var t, n;
  return e ? ur(e) ? e : $a(e) && (t = (n = e.ownerDocument) == null ? void 0 : n.defaultView) != null ? t : window : window;
}
function Va(e) {
  const {
    Document: t
  } = Ae(e);
  return e instanceof t;
}
function gi(e) {
  return ur(e) ? !1 : e instanceof Ae(e).HTMLElement;
}
function Gf(e) {
  return e instanceof Ae(e).SVGElement;
}
function cr(e) {
  return e ? ur(e) ? e.document : $a(e) ? Va(e) ? e : gi(e) || Gf(e) ? e.ownerDocument : document : document : document;
}
const dt = Zs ? g.useLayoutEffect : g.useEffect;
function eo(e) {
  const t = g.useRef(e);
  return dt(() => {
    t.current = e;
  }), g.useCallback(function() {
    for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
      r[i] = arguments[i];
    return t.current == null ? void 0 : t.current(...r);
  }, []);
}
function xg() {
  const e = g.useRef(null), t = g.useCallback((r, i) => {
    e.current = setInterval(r, i);
  }, []), n = g.useCallback(() => {
    e.current !== null && (clearInterval(e.current), e.current = null);
  }, []);
  return [t, n];
}
function ai(e, t) {
  t === void 0 && (t = [e]);
  const n = g.useRef(e);
  return dt(() => {
    n.current !== e && (n.current = e);
  }, t), n;
}
function vi(e, t) {
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
function Os(e) {
  const t = eo(e), n = g.useRef(null), r = g.useCallback(
    (i) => {
      i !== n.current && (t == null || t(i, n.current)), n.current = i;
    },
    //eslint-disable-next-line
    []
  );
  return [n, r];
}
function As(e) {
  const t = g.useRef();
  return g.useEffect(() => {
    t.current = e;
  }, [e]), t.current;
}
let Mo = {};
function yi(e, t) {
  return g.useMemo(() => {
    if (t)
      return t;
    const n = Mo[e] == null ? 0 : Mo[e] + 1;
    return Mo[e] = n, e + "-" + n;
  }, [e, t]);
}
function Jf(e) {
  return function(t) {
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++)
      r[i - 1] = arguments[i];
    return r.reduce((s, o) => {
      const l = Object.entries(o);
      for (const [a, c] of l) {
        const d = s[a];
        d != null && (s[a] = d + e * c);
      }
      return s;
    }, {
      ...t
    });
  };
}
const Jn = /* @__PURE__ */ Jf(1), ui = /* @__PURE__ */ Jf(-1);
function kg(e) {
  return "clientX" in e && "clientY" in e;
}
function to(e) {
  if (!e)
    return !1;
  const {
    KeyboardEvent: t
  } = Ae(e.target);
  return t && e instanceof t;
}
function Sg(e) {
  if (!e)
    return !1;
  const {
    TouchEvent: t
  } = Ae(e.target);
  return t && e instanceof t;
}
function Ls(e) {
  if (Sg(e)) {
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
  return kg(e) ? {
    x: e.clientX,
    y: e.clientY
  } : null;
}
const ln = /* @__PURE__ */ Object.freeze({
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
        return [ln.Translate.toString(e), ln.Scale.toString(e)].join(" ");
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
}), vc = "a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";
function Eg(e) {
  return e.matches(vc) ? e : e.querySelector(vc);
}
const Cg = {
  display: "none"
};
function Ng(e) {
  let {
    id: t,
    value: n
  } = e;
  return te.createElement("div", {
    id: t,
    style: Cg
  }, n);
}
function _g(e) {
  let {
    id: t,
    announcement: n,
    ariaLiveType: r = "assertive"
  } = e;
  const i = {
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
  return te.createElement("div", {
    id: t,
    style: i,
    role: "status",
    "aria-live": r,
    "aria-atomic": !0
  }, n);
}
function Tg() {
  const [e, t] = g.useState("");
  return {
    announce: g.useCallback((r) => {
      r != null && t(r);
    }, []),
    announcement: e
  };
}
const Zf = /* @__PURE__ */ g.createContext(null);
function Rg(e) {
  const t = g.useContext(Zf);
  g.useEffect(() => {
    if (!t)
      throw new Error("useDndMonitor must be used within a children of <DndContext>");
    return t(e);
  }, [e, t]);
}
function jg() {
  const [e] = g.useState(() => /* @__PURE__ */ new Set()), t = g.useCallback((r) => (e.add(r), () => e.delete(r)), [e]);
  return [g.useCallback((r) => {
    let {
      type: i,
      event: s
    } = r;
    e.forEach((o) => {
      var l;
      return (l = o[i]) == null ? void 0 : l.call(o, s);
    });
  }, [e]), t];
}
const Dg = {
  draggable: `
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `
}, Og = {
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
function Ag(e) {
  let {
    announcements: t = Og,
    container: n,
    hiddenTextDescribedById: r,
    screenReaderInstructions: i = Dg
  } = e;
  const {
    announce: s,
    announcement: o
  } = Tg(), l = yi("DndLiveRegion"), [a, c] = g.useState(!1);
  if (g.useEffect(() => {
    c(!0);
  }, []), Rg(g.useMemo(() => ({
    onDragStart(h) {
      let {
        active: m
      } = h;
      s(t.onDragStart({
        active: m
      }));
    },
    onDragMove(h) {
      let {
        active: m,
        over: y
      } = h;
      t.onDragMove && s(t.onDragMove({
        active: m,
        over: y
      }));
    },
    onDragOver(h) {
      let {
        active: m,
        over: y
      } = h;
      s(t.onDragOver({
        active: m,
        over: y
      }));
    },
    onDragEnd(h) {
      let {
        active: m,
        over: y
      } = h;
      s(t.onDragEnd({
        active: m,
        over: y
      }));
    },
    onDragCancel(h) {
      let {
        active: m,
        over: y
      } = h;
      s(t.onDragCancel({
        active: m,
        over: y
      }));
    }
  }), [s, t])), !a)
    return null;
  const d = te.createElement(te.Fragment, null, te.createElement(Ng, {
    id: r,
    value: i.draggable
  }), te.createElement(_g, {
    id: l,
    announcement: o
  }));
  return n ? Hn.createPortal(d, n) : d;
}
var pe;
(function(e) {
  e.DragStart = "dragStart", e.DragMove = "dragMove", e.DragEnd = "dragEnd", e.DragCancel = "dragCancel", e.DragOver = "dragOver", e.RegisterDroppable = "registerDroppable", e.SetDroppableDisabled = "setDroppableDisabled", e.UnregisterDroppable = "unregisterDroppable";
})(pe || (pe = {}));
function Is() {
}
function yc(e, t) {
  return g.useMemo(
    () => ({
      sensor: e,
      options: t ?? {}
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [e, t]
  );
}
function Lg() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return g.useMemo(
    () => [...t].filter((r) => r != null),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [...t]
  );
}
const ft = /* @__PURE__ */ Object.freeze({
  x: 0,
  y: 0
});
function Ig(e, t) {
  return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
}
function Pg(e, t) {
  const n = Ls(e);
  if (!n)
    return "0 0";
  const r = {
    x: (n.x - t.left) / t.width * 100,
    y: (n.y - t.top) / t.height * 100
  };
  return r.x + "% " + r.y + "%";
}
function bg(e, t) {
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
function Mg(e, t) {
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
function wc(e) {
  let {
    left: t,
    top: n,
    height: r,
    width: i
  } = e;
  return [{
    x: t,
    y: n
  }, {
    x: t + i,
    y: n
  }, {
    x: t,
    y: n + r
  }, {
    x: t + i,
    y: n + r
  }];
}
function eh(e, t) {
  if (!e || e.length === 0)
    return null;
  const [n] = e;
  return n[t];
}
const th = (e) => {
  let {
    collisionRect: t,
    droppableRects: n,
    droppableContainers: r
  } = e;
  const i = wc(t), s = [];
  for (const o of r) {
    const {
      id: l
    } = o, a = n.get(l);
    if (a) {
      const c = wc(a), d = i.reduce((m, y, k) => m + Ig(c[k], y), 0), h = Number((d / 4).toFixed(4));
      s.push({
        id: l,
        data: {
          droppableContainer: o,
          value: h
        }
      });
    }
  }
  return s.sort(bg);
};
function zg(e, t) {
  const n = Math.max(t.top, e.top), r = Math.max(t.left, e.left), i = Math.min(t.left + t.width, e.left + e.width), s = Math.min(t.top + t.height, e.top + e.height), o = i - r, l = s - n;
  if (r < i && n < s) {
    const a = t.width * t.height, c = e.width * e.height, d = o * l, h = d / (a + c - d);
    return Number(h.toFixed(4));
  }
  return 0;
}
const Fg = (e) => {
  let {
    collisionRect: t,
    droppableRects: n,
    droppableContainers: r
  } = e;
  const i = [];
  for (const s of r) {
    const {
      id: o
    } = s, l = n.get(o);
    if (l) {
      const a = zg(l, t);
      a > 0 && i.push({
        id: o,
        data: {
          droppableContainer: s,
          value: a
        }
      });
    }
  }
  return i.sort(Mg);
};
function Bg(e, t, n) {
  return {
    ...e,
    scaleX: t && n ? t.width / n.width : 1,
    scaleY: t && n ? t.height / n.height : 1
  };
}
function nh(e, t) {
  return e && t ? {
    x: e.left - t.left,
    y: e.top - t.top
  } : ft;
}
function Ug(e) {
  return function(n) {
    for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), s = 1; s < r; s++)
      i[s - 1] = arguments[s];
    return i.reduce((o, l) => ({
      ...o,
      top: o.top + e * l.y,
      bottom: o.bottom + e * l.y,
      left: o.left + e * l.x,
      right: o.right + e * l.x
    }), {
      ...n
    });
  };
}
const $g = /* @__PURE__ */ Ug(1);
function rh(e) {
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
function Vg(e, t, n) {
  const r = rh(t);
  if (!r)
    return e;
  const {
    scaleX: i,
    scaleY: s,
    x: o,
    y: l
  } = r, a = e.left - o - (1 - i) * parseFloat(n), c = e.top - l - (1 - s) * parseFloat(n.slice(n.indexOf(" ") + 1)), d = i ? e.width / i : e.width, h = s ? e.height / s : e.height;
  return {
    width: d,
    height: h,
    top: c,
    right: a + d,
    bottom: c + h,
    left: a
  };
}
const Wg = {
  ignoreTransform: !1
};
function dr(e, t) {
  t === void 0 && (t = Wg);
  let n = e.getBoundingClientRect();
  if (t.ignoreTransform) {
    const {
      transform: c,
      transformOrigin: d
    } = Ae(e).getComputedStyle(e);
    c && (n = Vg(n, c, d));
  }
  const {
    top: r,
    left: i,
    width: s,
    height: o,
    bottom: l,
    right: a
  } = n;
  return {
    top: r,
    left: i,
    width: s,
    height: o,
    bottom: l,
    right: a
  };
}
function xc(e) {
  return dr(e, {
    ignoreTransform: !0
  });
}
function Hg(e) {
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
function Kg(e, t) {
  return t === void 0 && (t = Ae(e).getComputedStyle(e)), t.position === "fixed";
}
function Qg(e, t) {
  t === void 0 && (t = Ae(e).getComputedStyle(e));
  const n = /(auto|scroll|overlay)/;
  return ["overflow", "overflowX", "overflowY"].some((i) => {
    const s = t[i];
    return typeof s == "string" ? n.test(s) : !1;
  });
}
function no(e, t) {
  const n = [];
  function r(i) {
    if (t != null && n.length >= t || !i)
      return n;
    if (Va(i) && i.scrollingElement != null && !n.includes(i.scrollingElement))
      return n.push(i.scrollingElement), n;
    if (!gi(i) || Gf(i) || n.includes(i))
      return n;
    const s = Ae(e).getComputedStyle(i);
    return i !== e && Qg(i, s) && n.push(i), Kg(i, s) ? n : r(i.parentNode);
  }
  return e ? r(e) : n;
}
function ih(e) {
  const [t] = no(e, 1);
  return t ?? null;
}
function zo(e) {
  return !Zs || !e ? null : ur(e) ? e : $a(e) ? Va(e) || e === cr(e).scrollingElement ? window : gi(e) ? e : null : null;
}
function sh(e) {
  return ur(e) ? e.scrollX : e.scrollLeft;
}
function oh(e) {
  return ur(e) ? e.scrollY : e.scrollTop;
}
function Fl(e) {
  return {
    x: sh(e),
    y: oh(e)
  };
}
var ve;
(function(e) {
  e[e.Forward = 1] = "Forward", e[e.Backward = -1] = "Backward";
})(ve || (ve = {}));
function lh(e) {
  return !Zs || !e ? !1 : e === document.scrollingElement;
}
function ah(e) {
  const t = {
    x: 0,
    y: 0
  }, n = lh(e) ? {
    height: window.innerHeight,
    width: window.innerWidth
  } : {
    height: e.clientHeight,
    width: e.clientWidth
  }, r = {
    x: e.scrollWidth - n.width,
    y: e.scrollHeight - n.height
  }, i = e.scrollTop <= t.y, s = e.scrollLeft <= t.x, o = e.scrollTop >= r.y, l = e.scrollLeft >= r.x;
  return {
    isTop: i,
    isLeft: s,
    isBottom: o,
    isRight: l,
    maxScroll: r,
    minScroll: t
  };
}
const Xg = {
  x: 0.2,
  y: 0.2
};
function Yg(e, t, n, r, i) {
  let {
    top: s,
    left: o,
    right: l,
    bottom: a
  } = n;
  r === void 0 && (r = 10), i === void 0 && (i = Xg);
  const {
    isTop: c,
    isBottom: d,
    isLeft: h,
    isRight: m
  } = ah(e), y = {
    x: 0,
    y: 0
  }, k = {
    x: 0,
    y: 0
  }, x = {
    height: t.height * i.y,
    width: t.width * i.x
  };
  return !c && s <= t.top + x.height ? (y.y = ve.Backward, k.y = r * Math.abs((t.top + x.height - s) / x.height)) : !d && a >= t.bottom - x.height && (y.y = ve.Forward, k.y = r * Math.abs((t.bottom - x.height - a) / x.height)), !m && l >= t.right - x.width ? (y.x = ve.Forward, k.x = r * Math.abs((t.right - x.width - l) / x.width)) : !h && o <= t.left + x.width && (y.x = ve.Backward, k.x = r * Math.abs((t.left + x.width - o) / x.width)), {
    direction: y,
    speed: k
  };
}
function qg(e) {
  if (e === document.scrollingElement) {
    const {
      innerWidth: s,
      innerHeight: o
    } = window;
    return {
      top: 0,
      left: 0,
      right: s,
      bottom: o,
      width: s,
      height: o
    };
  }
  const {
    top: t,
    left: n,
    right: r,
    bottom: i
  } = e.getBoundingClientRect();
  return {
    top: t,
    left: n,
    right: r,
    bottom: i,
    width: e.clientWidth,
    height: e.clientHeight
  };
}
function uh(e) {
  return e.reduce((t, n) => Jn(t, Fl(n)), ft);
}
function Gg(e) {
  return e.reduce((t, n) => t + sh(n), 0);
}
function Jg(e) {
  return e.reduce((t, n) => t + oh(n), 0);
}
function ch(e, t) {
  if (t === void 0 && (t = dr), !e)
    return;
  const {
    top: n,
    left: r,
    bottom: i,
    right: s
  } = t(e);
  ih(e) && (i <= 0 || s <= 0 || n >= window.innerHeight || r >= window.innerWidth) && e.scrollIntoView({
    block: "center",
    inline: "center"
  });
}
const Zg = [["x", ["left", "right"], Gg], ["y", ["top", "bottom"], Jg]];
class Wa {
  constructor(t, n) {
    this.rect = void 0, this.width = void 0, this.height = void 0, this.top = void 0, this.bottom = void 0, this.right = void 0, this.left = void 0;
    const r = no(n), i = uh(r);
    this.rect = {
      ...t
    }, this.width = t.width, this.height = t.height;
    for (const [s, o, l] of Zg)
      for (const a of o)
        Object.defineProperty(this, a, {
          get: () => {
            const c = l(r), d = i[s] - c;
            return this.rect[a] + d;
          },
          enumerable: !0
        });
    Object.defineProperty(this, "rect", {
      enumerable: !1
    });
  }
}
class $r {
  constructor(t) {
    this.target = void 0, this.listeners = [], this.removeAll = () => {
      this.listeners.forEach((n) => {
        var r;
        return (r = this.target) == null ? void 0 : r.removeEventListener(...n);
      });
    }, this.target = t;
  }
  add(t, n, r) {
    var i;
    (i = this.target) == null || i.addEventListener(t, n, r), this.listeners.push([t, n, r]);
  }
}
function ev(e) {
  const {
    EventTarget: t
  } = Ae(e);
  return e instanceof t ? e : cr(e);
}
function Fo(e, t) {
  const n = Math.abs(e.x), r = Math.abs(e.y);
  return typeof t == "number" ? Math.sqrt(n ** 2 + r ** 2) > t : "x" in t && "y" in t ? n > t.x && r > t.y : "x" in t ? n > t.x : "y" in t ? r > t.y : !1;
}
var Ye;
(function(e) {
  e.Click = "click", e.DragStart = "dragstart", e.Keydown = "keydown", e.ContextMenu = "contextmenu", e.Resize = "resize", e.SelectionChange = "selectionchange", e.VisibilityChange = "visibilitychange";
})(Ye || (Ye = {}));
function kc(e) {
  e.preventDefault();
}
function tv(e) {
  e.stopPropagation();
}
var Q;
(function(e) {
  e.Space = "Space", e.Down = "ArrowDown", e.Right = "ArrowRight", e.Left = "ArrowLeft", e.Up = "ArrowUp", e.Esc = "Escape", e.Enter = "Enter", e.Tab = "Tab";
})(Q || (Q = {}));
const dh = {
  start: [Q.Space, Q.Enter],
  cancel: [Q.Esc],
  end: [Q.Space, Q.Enter, Q.Tab]
}, nv = (e, t) => {
  let {
    currentCoordinates: n
  } = t;
  switch (e.code) {
    case Q.Right:
      return {
        ...n,
        x: n.x + 25
      };
    case Q.Left:
      return {
        ...n,
        x: n.x - 25
      };
    case Q.Down:
      return {
        ...n,
        y: n.y + 25
      };
    case Q.Up:
      return {
        ...n,
        y: n.y - 25
      };
  }
};
class Ha {
  constructor(t) {
    this.props = void 0, this.autoScrollEnabled = !1, this.referenceCoordinates = void 0, this.listeners = void 0, this.windowListeners = void 0, this.props = t;
    const {
      event: {
        target: n
      }
    } = t;
    this.props = t, this.listeners = new $r(cr(n)), this.windowListeners = new $r(Ae(n)), this.handleKeyDown = this.handleKeyDown.bind(this), this.handleCancel = this.handleCancel.bind(this), this.attach();
  }
  attach() {
    this.handleStart(), this.windowListeners.add(Ye.Resize, this.handleCancel), this.windowListeners.add(Ye.VisibilityChange, this.handleCancel), setTimeout(() => this.listeners.add(Ye.Keydown, this.handleKeyDown));
  }
  handleStart() {
    const {
      activeNode: t,
      onStart: n
    } = this.props, r = t.node.current;
    r && ch(r), n(ft);
  }
  handleKeyDown(t) {
    if (to(t)) {
      const {
        active: n,
        context: r,
        options: i
      } = this.props, {
        keyboardCodes: s = dh,
        coordinateGetter: o = nv,
        scrollBehavior: l = "smooth"
      } = i, {
        code: a
      } = t;
      if (s.end.includes(a)) {
        this.handleEnd(t);
        return;
      }
      if (s.cancel.includes(a)) {
        this.handleCancel(t);
        return;
      }
      const {
        collisionRect: c
      } = r.current, d = c ? {
        x: c.left,
        y: c.top
      } : ft;
      this.referenceCoordinates || (this.referenceCoordinates = d);
      const h = o(t, {
        active: n,
        context: r.current,
        currentCoordinates: d
      });
      if (h) {
        const m = ui(h, d), y = {
          x: 0,
          y: 0
        }, {
          scrollableAncestors: k
        } = r.current;
        for (const x of k) {
          const j = t.code, {
            isTop: p,
            isRight: f,
            isLeft: v,
            isBottom: w,
            maxScroll: S,
            minScroll: C
          } = ah(x), E = qg(x), N = {
            x: Math.min(j === Q.Right ? E.right - E.width / 2 : E.right, Math.max(j === Q.Right ? E.left : E.left + E.width / 2, h.x)),
            y: Math.min(j === Q.Down ? E.bottom - E.height / 2 : E.bottom, Math.max(j === Q.Down ? E.top : E.top + E.height / 2, h.y))
          }, B = j === Q.Right && !f || j === Q.Left && !v, I = j === Q.Down && !w || j === Q.Up && !p;
          if (B && N.x !== h.x) {
            const z = x.scrollLeft + m.x, F = j === Q.Right && z <= S.x || j === Q.Left && z >= C.x;
            if (F && !m.y) {
              x.scrollTo({
                left: z,
                behavior: l
              });
              return;
            }
            F ? y.x = x.scrollLeft - z : y.x = j === Q.Right ? x.scrollLeft - S.x : x.scrollLeft - C.x, y.x && x.scrollBy({
              left: -y.x,
              behavior: l
            });
            break;
          } else if (I && N.y !== h.y) {
            const z = x.scrollTop + m.y, F = j === Q.Down && z <= S.y || j === Q.Up && z >= C.y;
            if (F && !m.x) {
              x.scrollTo({
                top: z,
                behavior: l
              });
              return;
            }
            F ? y.y = x.scrollTop - z : y.y = j === Q.Down ? x.scrollTop - S.y : x.scrollTop - C.y, y.y && x.scrollBy({
              top: -y.y,
              behavior: l
            });
            break;
          }
        }
        this.handleMove(t, Jn(ui(h, this.referenceCoordinates), y));
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
Ha.activators = [{
  eventName: "onKeyDown",
  handler: (e, t, n) => {
    let {
      keyboardCodes: r = dh,
      onActivation: i
    } = t, {
      active: s
    } = n;
    const {
      code: o
    } = e.nativeEvent;
    if (r.start.includes(o)) {
      const l = s.activatorNode.current;
      return l && e.target !== l ? !1 : (e.preventDefault(), i == null || i({
        event: e.nativeEvent
      }), !0);
    }
    return !1;
  }
}];
function Sc(e) {
  return !!(e && "distance" in e);
}
function Ec(e) {
  return !!(e && "delay" in e);
}
class Ka {
  constructor(t, n, r) {
    var i;
    r === void 0 && (r = ev(t.event.target)), this.props = void 0, this.events = void 0, this.autoScrollEnabled = !0, this.document = void 0, this.activated = !1, this.initialCoordinates = void 0, this.timeoutId = null, this.listeners = void 0, this.documentListeners = void 0, this.windowListeners = void 0, this.props = t, this.events = n;
    const {
      event: s
    } = t, {
      target: o
    } = s;
    this.props = t, this.events = n, this.document = cr(o), this.documentListeners = new $r(this.document), this.listeners = new $r(r), this.windowListeners = new $r(Ae(o)), this.initialCoordinates = (i = Ls(s)) != null ? i : ft, this.handleStart = this.handleStart.bind(this), this.handleMove = this.handleMove.bind(this), this.handleEnd = this.handleEnd.bind(this), this.handleCancel = this.handleCancel.bind(this), this.handleKeydown = this.handleKeydown.bind(this), this.removeTextSelection = this.removeTextSelection.bind(this), this.attach();
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
    }), this.listeners.add(t.end.name, this.handleEnd), t.cancel && this.listeners.add(t.cancel.name, this.handleCancel), this.windowListeners.add(Ye.Resize, this.handleCancel), this.windowListeners.add(Ye.DragStart, kc), this.windowListeners.add(Ye.VisibilityChange, this.handleCancel), this.windowListeners.add(Ye.ContextMenu, kc), this.documentListeners.add(Ye.Keydown, this.handleKeydown), n) {
      if (r != null && r({
        event: this.props.event,
        activeNode: this.props.activeNode,
        options: this.props.options
      }))
        return this.handleStart();
      if (Ec(n)) {
        this.timeoutId = setTimeout(this.handleStart, n.delay), this.handlePending(n);
        return;
      }
      if (Sc(n)) {
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
      onPending: i
    } = this.props;
    i(r, t, this.initialCoordinates, n);
  }
  handleStart() {
    const {
      initialCoordinates: t
    } = this, {
      onStart: n
    } = this.props;
    t && (this.activated = !0, this.documentListeners.add(Ye.Click, tv, {
      capture: !0
    }), this.removeTextSelection(), this.documentListeners.add(Ye.SelectionChange, this.removeTextSelection), n(t));
  }
  handleMove(t) {
    var n;
    const {
      activated: r,
      initialCoordinates: i,
      props: s
    } = this, {
      onMove: o,
      options: {
        activationConstraint: l
      }
    } = s;
    if (!i)
      return;
    const a = (n = Ls(t)) != null ? n : ft, c = ui(i, a);
    if (!r && l) {
      if (Sc(l)) {
        if (l.tolerance != null && Fo(c, l.tolerance))
          return this.handleCancel();
        if (Fo(c, l.distance))
          return this.handleStart();
      }
      if (Ec(l) && Fo(c, l.tolerance))
        return this.handleCancel();
      this.handlePending(l, c);
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
    t.code === Q.Esc && this.handleCancel();
  }
  removeTextSelection() {
    var t;
    (t = this.document.getSelection()) == null || t.removeAllRanges();
  }
}
const rv = {
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
class Qa extends Ka {
  constructor(t) {
    const {
      event: n
    } = t, r = cr(n.target);
    super(t, rv, r);
  }
}
Qa.activators = [{
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
var Bl;
(function(e) {
  e[e.RightClick = 2] = "RightClick";
})(Bl || (Bl = {}));
class sv extends Ka {
  constructor(t) {
    super(t, iv, cr(t.event.target));
  }
}
sv.activators = [{
  eventName: "onMouseDown",
  handler: (e, t) => {
    let {
      nativeEvent: n
    } = e, {
      onActivation: r
    } = t;
    return n.button === Bl.RightClick ? !1 : (r == null || r({
      event: n
    }), !0);
  }
}];
const Bo = {
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
class ov extends Ka {
  constructor(t) {
    super(t, Bo);
  }
  static setup() {
    return window.addEventListener(Bo.move.name, t, {
      capture: !1,
      passive: !1
    }), function() {
      window.removeEventListener(Bo.move.name, t);
    };
    function t() {
    }
  }
}
ov.activators = [{
  eventName: "onTouchStart",
  handler: (e, t) => {
    let {
      nativeEvent: n
    } = e, {
      onActivation: r
    } = t;
    const {
      touches: i
    } = n;
    return i.length > 1 ? !1 : (r == null || r({
      event: n
    }), !0);
  }
}];
var Vr;
(function(e) {
  e[e.Pointer = 0] = "Pointer", e[e.DraggableRect = 1] = "DraggableRect";
})(Vr || (Vr = {}));
var Ps;
(function(e) {
  e[e.TreeOrder = 0] = "TreeOrder", e[e.ReversedTreeOrder = 1] = "ReversedTreeOrder";
})(Ps || (Ps = {}));
function lv(e) {
  let {
    acceleration: t,
    activator: n = Vr.Pointer,
    canScroll: r,
    draggingRect: i,
    enabled: s,
    interval: o = 5,
    order: l = Ps.TreeOrder,
    pointerCoordinates: a,
    scrollableAncestors: c,
    scrollableAncestorRects: d,
    delta: h,
    threshold: m
  } = e;
  const y = uv({
    delta: h,
    disabled: !s
  }), [k, x] = xg(), j = g.useRef({
    x: 0,
    y: 0
  }), p = g.useRef({
    x: 0,
    y: 0
  }), f = g.useMemo(() => {
    switch (n) {
      case Vr.Pointer:
        return a ? {
          top: a.y,
          bottom: a.y,
          left: a.x,
          right: a.x
        } : null;
      case Vr.DraggableRect:
        return i;
    }
  }, [n, i, a]), v = g.useRef(null), w = g.useCallback(() => {
    const C = v.current;
    if (!C)
      return;
    const E = j.current.x * p.current.x, N = j.current.y * p.current.y;
    C.scrollBy(E, N);
  }, []), S = g.useMemo(() => l === Ps.TreeOrder ? [...c].reverse() : c, [l, c]);
  g.useEffect(
    () => {
      if (!s || !c.length || !f) {
        x();
        return;
      }
      for (const C of S) {
        if ((r == null ? void 0 : r(C)) === !1)
          continue;
        const E = c.indexOf(C), N = d[E];
        if (!N)
          continue;
        const {
          direction: B,
          speed: I
        } = Yg(C, N, f, t, m);
        for (const z of ["x", "y"])
          y[z][B[z]] || (I[z] = 0, B[z] = 0);
        if (I.x > 0 || I.y > 0) {
          x(), v.current = C, k(w, o), j.current = I, p.current = B;
          return;
        }
      }
      j.current = {
        x: 0,
        y: 0
      }, p.current = {
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
      s,
      o,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(f),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(y),
      k,
      c,
      S,
      d,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(m)
    ]
  );
}
const av = {
  x: {
    [ve.Backward]: !1,
    [ve.Forward]: !1
  },
  y: {
    [ve.Backward]: !1,
    [ve.Forward]: !1
  }
};
function uv(e) {
  let {
    delta: t,
    disabled: n
  } = e;
  const r = As(t);
  return vi((i) => {
    if (n || !r || !i)
      return av;
    const s = {
      x: Math.sign(t.x - r.x),
      y: Math.sign(t.y - r.y)
    };
    return {
      x: {
        [ve.Backward]: i.x[ve.Backward] || s.x === -1,
        [ve.Forward]: i.x[ve.Forward] || s.x === 1
      },
      y: {
        [ve.Backward]: i.y[ve.Backward] || s.y === -1,
        [ve.Forward]: i.y[ve.Forward] || s.y === 1
      }
    };
  }, [n, t, r]);
}
function cv(e, t) {
  const n = t != null ? e.get(t) : void 0, r = n ? n.node.current : null;
  return vi((i) => {
    var s;
    return t == null ? null : (s = r ?? i) != null ? s : null;
  }, [r, t]);
}
function dv(e, t) {
  return g.useMemo(() => e.reduce((n, r) => {
    const {
      sensor: i
    } = r, s = i.activators.map((o) => ({
      eventName: o.eventName,
      handler: t(o.handler, r)
    }));
    return [...n, ...s];
  }, []), [e, t]);
}
var ci;
(function(e) {
  e[e.Always = 0] = "Always", e[e.BeforeDragging = 1] = "BeforeDragging", e[e.WhileDragging = 2] = "WhileDragging";
})(ci || (ci = {}));
var Ul;
(function(e) {
  e.Optimized = "optimized";
})(Ul || (Ul = {}));
const Cc = /* @__PURE__ */ new Map();
function fv(e, t) {
  let {
    dragging: n,
    dependencies: r,
    config: i
  } = t;
  const [s, o] = g.useState(null), {
    frequency: l,
    measure: a,
    strategy: c
  } = i, d = g.useRef(e), h = j(), m = ai(h), y = g.useCallback(function(p) {
    p === void 0 && (p = []), !m.current && o((f) => f === null ? p : f.concat(p.filter((v) => !f.includes(v))));
  }, [m]), k = g.useRef(null), x = vi((p) => {
    if (h && !n)
      return Cc;
    if (!p || p === Cc || d.current !== e || s != null) {
      const f = /* @__PURE__ */ new Map();
      for (let v of e) {
        if (!v)
          continue;
        if (s && s.length > 0 && !s.includes(v.id) && v.rect.current) {
          f.set(v.id, v.rect.current);
          continue;
        }
        const w = v.node.current, S = w ? new Wa(a(w), w) : null;
        v.rect.current = S, S && f.set(v.id, S);
      }
      return f;
    }
    return p;
  }, [e, s, n, h, a]);
  return g.useEffect(() => {
    d.current = e;
  }, [e]), g.useEffect(
    () => {
      h || y();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [n, h]
  ), g.useEffect(
    () => {
      s && s.length > 0 && o(null);
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [JSON.stringify(s)]
  ), g.useEffect(
    () => {
      h || typeof l != "number" || k.current !== null || (k.current = setTimeout(() => {
        y(), k.current = null;
      }, l));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [l, h, y, ...r]
  ), {
    droppableRects: x,
    measureDroppableContainers: y,
    measuringScheduled: s != null
  };
  function j() {
    switch (c) {
      case ci.Always:
        return !1;
      case ci.BeforeDragging:
        return n;
      default:
        return !n;
    }
  }
}
function Xa(e, t) {
  return vi((n) => e ? n || (typeof t == "function" ? t(e) : e) : null, [t, e]);
}
function hv(e, t) {
  return Xa(e, t);
}
function pv(e) {
  let {
    callback: t,
    disabled: n
  } = e;
  const r = eo(t), i = g.useMemo(() => {
    if (n || typeof window > "u" || typeof window.MutationObserver > "u")
      return;
    const {
      MutationObserver: s
    } = window;
    return new s(r);
  }, [r, n]);
  return g.useEffect(() => () => i == null ? void 0 : i.disconnect(), [i]), i;
}
function ro(e) {
  let {
    callback: t,
    disabled: n
  } = e;
  const r = eo(t), i = g.useMemo(
    () => {
      if (n || typeof window > "u" || typeof window.ResizeObserver > "u")
        return;
      const {
        ResizeObserver: s
      } = window;
      return new s(r);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [n]
  );
  return g.useEffect(() => () => i == null ? void 0 : i.disconnect(), [i]), i;
}
function mv(e) {
  return new Wa(dr(e), e);
}
function Nc(e, t, n) {
  t === void 0 && (t = mv);
  const [r, i] = g.useState(null);
  function s() {
    i((a) => {
      if (!e)
        return null;
      if (e.isConnected === !1) {
        var c;
        return (c = a ?? n) != null ? c : null;
      }
      const d = t(e);
      return JSON.stringify(a) === JSON.stringify(d) ? a : d;
    });
  }
  const o = pv({
    callback(a) {
      if (e)
        for (const c of a) {
          const {
            type: d,
            target: h
          } = c;
          if (d === "childList" && h instanceof HTMLElement && h.contains(e)) {
            s();
            break;
          }
        }
    }
  }), l = ro({
    callback: s
  });
  return dt(() => {
    s(), e ? (l == null || l.observe(e), o == null || o.observe(document.body, {
      childList: !0,
      subtree: !0
    })) : (l == null || l.disconnect(), o == null || o.disconnect());
  }, [e]), r;
}
function gv(e) {
  const t = Xa(e);
  return nh(e, t);
}
const _c = [];
function vv(e) {
  const t = g.useRef(e), n = vi((r) => e ? r && r !== _c && e && t.current && e.parentNode === t.current.parentNode ? r : no(e) : _c, [e]);
  return g.useEffect(() => {
    t.current = e;
  }, [e]), n;
}
function yv(e) {
  const [t, n] = g.useState(null), r = g.useRef(e), i = g.useCallback((s) => {
    const o = zo(s.target);
    o && n((l) => l ? (l.set(o, Fl(o)), new Map(l)) : null);
  }, []);
  return g.useEffect(() => {
    const s = r.current;
    if (e !== s) {
      o(s);
      const l = e.map((a) => {
        const c = zo(a);
        return c ? (c.addEventListener("scroll", i, {
          passive: !0
        }), [c, Fl(c)]) : null;
      }).filter((a) => a != null);
      n(l.length ? new Map(l) : null), r.current = e;
    }
    return () => {
      o(e), o(s);
    };
    function o(l) {
      l.forEach((a) => {
        const c = zo(a);
        c == null || c.removeEventListener("scroll", i);
      });
    }
  }, [i, e]), g.useMemo(() => e.length ? t ? Array.from(t.values()).reduce((s, o) => Jn(s, o), ft) : uh(e) : ft, [e, t]);
}
function Tc(e, t) {
  t === void 0 && (t = []);
  const n = g.useRef(null);
  return g.useEffect(
    () => {
      n.current = null;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    t
  ), g.useEffect(() => {
    const r = e !== ft;
    r && !n.current && (n.current = e), !r && n.current && (n.current = null);
  }, [e]), n.current ? ui(e, n.current) : ft;
}
function wv(e) {
  g.useEffect(
    () => {
      if (!Zs)
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
function xv(e, t) {
  return g.useMemo(() => e.reduce((n, r) => {
    let {
      eventName: i,
      handler: s
    } = r;
    return n[i] = (o) => {
      s(o, t);
    }, n;
  }, {}), [e, t]);
}
function fh(e) {
  return g.useMemo(() => e ? Hg(e) : null, [e]);
}
const Rc = [];
function kv(e, t) {
  t === void 0 && (t = dr);
  const [n] = e, r = fh(n ? Ae(n) : null), [i, s] = g.useState(Rc);
  function o() {
    s(() => e.length ? e.map((a) => lh(a) ? r : new Wa(t(a), a)) : Rc);
  }
  const l = ro({
    callback: o
  });
  return dt(() => {
    l == null || l.disconnect(), o(), e.forEach((a) => l == null ? void 0 : l.observe(a));
  }, [e]), i;
}
function hh(e) {
  if (!e)
    return null;
  if (e.children.length > 1)
    return e;
  const t = e.children[0];
  return gi(t) ? t : e;
}
function Sv(e) {
  let {
    measure: t
  } = e;
  const [n, r] = g.useState(null), i = g.useCallback((c) => {
    for (const {
      target: d
    } of c)
      if (gi(d)) {
        r((h) => {
          const m = t(d);
          return h ? {
            ...h,
            width: m.width,
            height: m.height
          } : m;
        });
        break;
      }
  }, [t]), s = ro({
    callback: i
  }), o = g.useCallback((c) => {
    const d = hh(c);
    s == null || s.disconnect(), d && (s == null || s.observe(d)), r(d ? t(d) : null);
  }, [t, s]), [l, a] = Os(o);
  return g.useMemo(() => ({
    nodeRef: l,
    rect: n,
    setRef: a
  }), [n, l, a]);
}
const Ev = [{
  sensor: Qa,
  options: {}
}, {
  sensor: Ha,
  options: {}
}], Cv = {
  current: {}
}, ns = {
  draggable: {
    measure: xc
  },
  droppable: {
    measure: xc,
    strategy: ci.WhileDragging,
    frequency: Ul.Optimized
  },
  dragOverlay: {
    measure: dr
  }
};
class Wr extends Map {
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
const Nv = {
  activatorEvent: null,
  active: null,
  activeNode: null,
  activeNodeRect: null,
  collisions: null,
  containerNodeRect: null,
  draggableNodes: /* @__PURE__ */ new Map(),
  droppableRects: /* @__PURE__ */ new Map(),
  droppableContainers: /* @__PURE__ */ new Wr(),
  over: null,
  dragOverlay: {
    nodeRef: {
      current: null
    },
    rect: null,
    setRef: Is
  },
  scrollableAncestors: [],
  scrollableAncestorRects: [],
  measuringConfiguration: ns,
  measureDroppableContainers: Is,
  windowRect: null,
  measuringScheduled: !1
}, ph = {
  activatorEvent: null,
  activators: [],
  active: null,
  activeNodeRect: null,
  ariaDescribedById: {
    draggable: ""
  },
  dispatch: Is,
  draggableNodes: /* @__PURE__ */ new Map(),
  over: null,
  measureDroppableContainers: Is
}, wi = /* @__PURE__ */ g.createContext(ph), mh = /* @__PURE__ */ g.createContext(Nv);
function _v() {
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
      containers: new Wr()
    }
  };
}
function Tv(e, t) {
  switch (t.type) {
    case pe.DragStart:
      return {
        ...e,
        draggable: {
          ...e.draggable,
          initialCoordinates: t.initialCoordinates,
          active: t.active
        }
      };
    case pe.DragMove:
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
    case pe.DragEnd:
    case pe.DragCancel:
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
    case pe.RegisterDroppable: {
      const {
        element: n
      } = t, {
        id: r
      } = n, i = new Wr(e.droppable.containers);
      return i.set(r, n), {
        ...e,
        droppable: {
          ...e.droppable,
          containers: i
        }
      };
    }
    case pe.SetDroppableDisabled: {
      const {
        id: n,
        key: r,
        disabled: i
      } = t, s = e.droppable.containers.get(n);
      if (!s || r !== s.key)
        return e;
      const o = new Wr(e.droppable.containers);
      return o.set(n, {
        ...s,
        disabled: i
      }), {
        ...e,
        droppable: {
          ...e.droppable,
          containers: o
        }
      };
    }
    case pe.UnregisterDroppable: {
      const {
        id: n,
        key: r
      } = t, i = e.droppable.containers.get(n);
      if (!i || r !== i.key)
        return e;
      const s = new Wr(e.droppable.containers);
      return s.delete(n), {
        ...e,
        droppable: {
          ...e.droppable,
          containers: s
        }
      };
    }
    default:
      return e;
  }
}
function Rv(e) {
  let {
    disabled: t
  } = e;
  const {
    active: n,
    activatorEvent: r,
    draggableNodes: i
  } = g.useContext(wi), s = As(r), o = As(n == null ? void 0 : n.id);
  return g.useEffect(() => {
    if (!t && !r && s && o != null) {
      if (!to(s) || document.activeElement === s.target)
        return;
      const l = i.get(o);
      if (!l)
        return;
      const {
        activatorNode: a,
        node: c
      } = l;
      if (!a.current && !c.current)
        return;
      requestAnimationFrame(() => {
        for (const d of [a.current, c.current]) {
          if (!d)
            continue;
          const h = Eg(d);
          if (h) {
            h.focus();
            break;
          }
        }
      });
    }
  }, [r, t, i, o, s]), null;
}
function gh(e, t) {
  let {
    transform: n,
    ...r
  } = t;
  return e != null && e.length ? e.reduce((i, s) => s({
    transform: i,
    ...r
  }), n) : n;
}
function jv(e) {
  return g.useMemo(
    () => ({
      draggable: {
        ...ns.draggable,
        ...e == null ? void 0 : e.draggable
      },
      droppable: {
        ...ns.droppable,
        ...e == null ? void 0 : e.droppable
      },
      dragOverlay: {
        ...ns.dragOverlay,
        ...e == null ? void 0 : e.dragOverlay
      }
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [e == null ? void 0 : e.draggable, e == null ? void 0 : e.droppable, e == null ? void 0 : e.dragOverlay]
  );
}
function Dv(e) {
  let {
    activeNode: t,
    measure: n,
    initialRect: r,
    config: i = !0
  } = e;
  const s = g.useRef(!1), {
    x: o,
    y: l
  } = typeof i == "boolean" ? {
    x: i,
    y: i
  } : i;
  dt(() => {
    if (!o && !l || !t) {
      s.current = !1;
      return;
    }
    if (s.current || !r)
      return;
    const c = t == null ? void 0 : t.node.current;
    if (!c || c.isConnected === !1)
      return;
    const d = n(c), h = nh(d, r);
    if (o || (h.x = 0), l || (h.y = 0), s.current = !0, Math.abs(h.x) > 0 || Math.abs(h.y) > 0) {
      const m = ih(c);
      m && m.scrollBy({
        top: h.y,
        left: h.x
      });
    }
  }, [t, o, l, r, n]);
}
const io = /* @__PURE__ */ g.createContext({
  ...ft,
  scaleX: 1,
  scaleY: 1
});
var Wt;
(function(e) {
  e[e.Uninitialized = 0] = "Uninitialized", e[e.Initializing = 1] = "Initializing", e[e.Initialized = 2] = "Initialized";
})(Wt || (Wt = {}));
const Ov = /* @__PURE__ */ g.memo(function(t) {
  var n, r, i, s;
  let {
    id: o,
    accessibility: l,
    autoScroll: a = !0,
    children: c,
    sensors: d = Ev,
    collisionDetection: h = Fg,
    measuring: m,
    modifiers: y,
    ...k
  } = t;
  const x = g.useReducer(Tv, void 0, _v), [j, p] = x, [f, v] = jg(), [w, S] = g.useState(Wt.Uninitialized), C = w === Wt.Initialized, {
    draggable: {
      active: E,
      nodes: N,
      translate: B
    },
    droppable: {
      containers: I
    }
  } = j, z = E != null ? N.get(E) : null, F = g.useRef({
    initial: null,
    translated: null
  }), $ = g.useMemo(() => {
    var Ee;
    return E != null ? {
      id: E,
      // It's possible for the active node to unmount while dragging
      data: (Ee = z == null ? void 0 : z.data) != null ? Ee : Cv,
      rect: F
    } : null;
  }, [E, z]), le = g.useRef(null), [A, L] = g.useState(null), [P, T] = g.useState(null), O = ai(k, Object.values(k)), M = yi("DndDescribedBy", o), W = g.useMemo(() => I.getEnabled(), [I]), U = jv(m), {
    droppableRects: re,
    measureDroppableContainers: ue,
    measuringScheduled: D
  } = fv(W, {
    dragging: C,
    dependencies: [B.x, B.y],
    config: U.droppable
  }), R = cv(N, E), V = g.useMemo(() => P ? Ls(P) : null, [P]), H = Kh(), ze = hv(R, U.draggable.measure);
  Dv({
    activeNode: E != null ? N.get(E) : null,
    config: H.layoutShiftCompensation,
    initialRect: ze,
    measure: U.draggable.measure
  });
  const q = Nc(R, U.draggable.measure, ze), hr = Nc(R ? R.parentElement : null), ht = g.useRef({
    activatorEvent: null,
    active: null,
    activeNode: R,
    collisionRect: null,
    collisions: null,
    droppableRects: re,
    draggableNodes: N,
    draggingNode: null,
    draggingNodeRect: null,
    droppableContainers: I,
    over: null,
    scrollableAncestors: [],
    scrollAdjustedTranslate: null
  }), _n = I.getNodeFor((n = ht.current.over) == null ? void 0 : n.id), Ct = Sv({
    measure: U.dragOverlay.measure
  }), Tn = (r = Ct.nodeRef.current) != null ? r : R, Rn = C ? (i = Ct.rect) != null ? i : q : null, eu = !!(Ct.nodeRef.current && Ct.rect), tu = gv(eu ? null : q), lo = fh(Tn ? Ae(Tn) : null), bt = vv(C ? _n ?? R : null), xi = kv(bt), ki = gh(y, {
    transform: {
      x: B.x - tu.x,
      y: B.y - tu.y,
      scaleX: 1,
      scaleY: 1
    },
    activatorEvent: P,
    active: $,
    activeNodeRect: q,
    containerNodeRect: hr,
    draggingNodeRect: Rn,
    over: ht.current.over,
    overlayNodeRect: Ct.rect,
    scrollableAncestors: bt,
    scrollableAncestorRects: xi,
    windowRect: lo
  }), nu = V ? Jn(V, B) : null, ru = yv(bt), Fh = Tc(ru), Bh = Tc(ru, [q]), jn = Jn(ki, Fh), Dn = Rn ? $g(Rn, ki) : null, pr = $ && Dn ? h({
    active: $,
    collisionRect: Dn,
    droppableRects: re,
    droppableContainers: W,
    pointerCoordinates: nu
  }) : null, iu = eh(pr, "id"), [Mt, su] = g.useState(null), Uh = eu ? ki : Jn(ki, Bh), $h = Bg(Uh, (s = Mt == null ? void 0 : Mt.rect) != null ? s : null, q), ao = g.useRef(null), ou = g.useCallback(
    (Ee, Fe) => {
      let {
        sensor: Be,
        options: zt
      } = Fe;
      if (le.current == null)
        return;
      const Xe = N.get(le.current);
      if (!Xe)
        return;
      const Ue = Ee.nativeEvent, pt = new Be({
        active: le.current,
        activeNode: Xe,
        event: Ue,
        options: zt,
        // Sensors need to be instantiated with refs for arguments that change over time
        // otherwise they are frozen in time with the stale arguments
        context: ht,
        onAbort(we) {
          if (!N.get(we))
            return;
          const {
            onDragAbort: mt
          } = O.current, Nt = {
            id: we
          };
          mt == null || mt(Nt), f({
            type: "onDragAbort",
            event: Nt
          });
        },
        onPending(we, Ft, mt, Nt) {
          if (!N.get(we))
            return;
          const {
            onDragPending: gr
          } = O.current, Bt = {
            id: we,
            constraint: Ft,
            initialCoordinates: mt,
            offset: Nt
          };
          gr == null || gr(Bt), f({
            type: "onDragPending",
            event: Bt
          });
        },
        onStart(we) {
          const Ft = le.current;
          if (Ft == null)
            return;
          const mt = N.get(Ft);
          if (!mt)
            return;
          const {
            onDragStart: Nt
          } = O.current, mr = {
            activatorEvent: Ue,
            active: {
              id: Ft,
              data: mt.data,
              rect: F
            }
          };
          Hn.unstable_batchedUpdates(() => {
            Nt == null || Nt(mr), S(Wt.Initializing), p({
              type: pe.DragStart,
              initialCoordinates: we,
              active: Ft
            }), f({
              type: "onDragStart",
              event: mr
            }), L(ao.current), T(Ue);
          });
        },
        onMove(we) {
          p({
            type: pe.DragMove,
            coordinates: we
          });
        },
        onEnd: On(pe.DragEnd),
        onCancel: On(pe.DragCancel)
      });
      ao.current = pt;
      function On(we) {
        return async function() {
          const {
            active: mt,
            collisions: Nt,
            over: mr,
            scrollAdjustedTranslate: gr
          } = ht.current;
          let Bt = null;
          if (mt && gr) {
            const {
              cancelDrop: vr
            } = O.current;
            Bt = {
              activatorEvent: Ue,
              active: mt,
              collisions: Nt,
              delta: gr,
              over: mr
            }, we === pe.DragEnd && typeof vr == "function" && await Promise.resolve(vr(Bt)) && (we = pe.DragCancel);
          }
          le.current = null, Hn.unstable_batchedUpdates(() => {
            p({
              type: we
            }), S(Wt.Uninitialized), su(null), L(null), T(null), ao.current = null;
            const vr = we === pe.DragEnd ? "onDragEnd" : "onDragCancel";
            if (Bt) {
              const uo = O.current[vr];
              uo == null || uo(Bt), f({
                type: vr,
                event: Bt
              });
            }
          });
        };
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [N]
  ), Vh = g.useCallback((Ee, Fe) => (Be, zt) => {
    const Xe = Be.nativeEvent, Ue = N.get(zt);
    if (
      // Another sensor is already instantiating
      le.current !== null || // No active draggable
      !Ue || // Event has already been captured
      Xe.dndKit || Xe.defaultPrevented
    )
      return;
    const pt = {
      active: Ue
    };
    Ee(Be, Fe.options, pt) === !0 && (Xe.dndKit = {
      capturedBy: Fe.sensor
    }, le.current = zt, ou(Be, Fe));
  }, [N, ou]), lu = dv(d, Vh);
  wv(d), dt(() => {
    q && w === Wt.Initializing && S(Wt.Initialized);
  }, [q, w]), g.useEffect(
    () => {
      const {
        onDragMove: Ee
      } = O.current, {
        active: Fe,
        activatorEvent: Be,
        collisions: zt,
        over: Xe
      } = ht.current;
      if (!Fe || !Be)
        return;
      const Ue = {
        active: Fe,
        activatorEvent: Be,
        collisions: zt,
        delta: {
          x: jn.x,
          y: jn.y
        },
        over: Xe
      };
      Hn.unstable_batchedUpdates(() => {
        Ee == null || Ee(Ue), f({
          type: "onDragMove",
          event: Ue
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [jn.x, jn.y]
  ), g.useEffect(
    () => {
      const {
        active: Ee,
        activatorEvent: Fe,
        collisions: Be,
        droppableContainers: zt,
        scrollAdjustedTranslate: Xe
      } = ht.current;
      if (!Ee || le.current == null || !Fe || !Xe)
        return;
      const {
        onDragOver: Ue
      } = O.current, pt = zt.get(iu), On = pt && pt.rect.current ? {
        id: pt.id,
        rect: pt.rect.current,
        data: pt.data,
        disabled: pt.disabled
      } : null, we = {
        active: Ee,
        activatorEvent: Fe,
        collisions: Be,
        delta: {
          x: Xe.x,
          y: Xe.y
        },
        over: On
      };
      Hn.unstable_batchedUpdates(() => {
        su(On), Ue == null || Ue(we), f({
          type: "onDragOver",
          event: we
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [iu]
  ), dt(() => {
    ht.current = {
      activatorEvent: P,
      active: $,
      activeNode: R,
      collisionRect: Dn,
      collisions: pr,
      droppableRects: re,
      draggableNodes: N,
      draggingNode: Tn,
      draggingNodeRect: Rn,
      droppableContainers: I,
      over: Mt,
      scrollableAncestors: bt,
      scrollAdjustedTranslate: jn
    }, F.current = {
      initial: Rn,
      translated: Dn
    };
  }, [$, R, pr, Dn, N, Tn, Rn, re, I, Mt, bt, jn]), lv({
    ...H,
    delta: B,
    draggingRect: Dn,
    pointerCoordinates: nu,
    scrollableAncestors: bt,
    scrollableAncestorRects: xi
  });
  const Wh = g.useMemo(() => ({
    active: $,
    activeNode: R,
    activeNodeRect: q,
    activatorEvent: P,
    collisions: pr,
    containerNodeRect: hr,
    dragOverlay: Ct,
    draggableNodes: N,
    droppableContainers: I,
    droppableRects: re,
    over: Mt,
    measureDroppableContainers: ue,
    scrollableAncestors: bt,
    scrollableAncestorRects: xi,
    measuringConfiguration: U,
    measuringScheduled: D,
    windowRect: lo
  }), [$, R, q, P, pr, hr, Ct, N, I, re, Mt, ue, bt, xi, U, D, lo]), Hh = g.useMemo(() => ({
    activatorEvent: P,
    activators: lu,
    active: $,
    activeNodeRect: q,
    ariaDescribedById: {
      draggable: M
    },
    dispatch: p,
    draggableNodes: N,
    over: Mt,
    measureDroppableContainers: ue
  }), [P, lu, $, q, p, M, N, Mt, ue]);
  return te.createElement(Zf.Provider, {
    value: v
  }, te.createElement(wi.Provider, {
    value: Hh
  }, te.createElement(mh.Provider, {
    value: Wh
  }, te.createElement(io.Provider, {
    value: $h
  }, c)), te.createElement(Rv, {
    disabled: (l == null ? void 0 : l.restoreFocus) === !1
  })), te.createElement(Ag, {
    ...l,
    hiddenTextDescribedById: M
  }));
  function Kh() {
    const Ee = (A == null ? void 0 : A.autoScrollEnabled) === !1, Fe = typeof a == "object" ? a.enabled === !1 : a === !1, Be = C && !Ee && !Fe;
    return typeof a == "object" ? {
      ...a,
      enabled: Be
    } : {
      enabled: Be
    };
  }
}), Av = /* @__PURE__ */ g.createContext(null), jc = "button", Lv = "Draggable";
function Iv(e) {
  let {
    id: t,
    data: n,
    disabled: r = !1,
    attributes: i
  } = e;
  const s = yi(Lv), {
    activators: o,
    activatorEvent: l,
    active: a,
    activeNodeRect: c,
    ariaDescribedById: d,
    draggableNodes: h,
    over: m
  } = g.useContext(wi), {
    role: y = jc,
    roleDescription: k = "draggable",
    tabIndex: x = 0
  } = i ?? {}, j = (a == null ? void 0 : a.id) === t, p = g.useContext(j ? io : Av), [f, v] = Os(), [w, S] = Os(), C = xv(o, t), E = ai(n);
  dt(
    () => (h.set(t, {
      id: t,
      key: s,
      node: f,
      activatorNode: w,
      data: E
    }), () => {
      const B = h.get(t);
      B && B.key === s && h.delete(t);
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [h, t]
  );
  const N = g.useMemo(() => ({
    role: y,
    tabIndex: x,
    "aria-disabled": r,
    "aria-pressed": j && y === jc ? !0 : void 0,
    "aria-roledescription": k,
    "aria-describedby": d.draggable
  }), [r, y, x, j, k, d.draggable]);
  return {
    active: a,
    activatorEvent: l,
    activeNodeRect: c,
    attributes: N,
    isDragging: j,
    listeners: r ? void 0 : C,
    node: f,
    over: m,
    setNodeRef: v,
    setActivatorNodeRef: S,
    transform: p
  };
}
function vh() {
  return g.useContext(mh);
}
const Pv = "Droppable", bv = {
  timeout: 25
};
function yh(e) {
  let {
    data: t,
    disabled: n = !1,
    id: r,
    resizeObserverConfig: i
  } = e;
  const s = yi(Pv), {
    active: o,
    dispatch: l,
    over: a,
    measureDroppableContainers: c
  } = g.useContext(wi), d = g.useRef({
    disabled: n
  }), h = g.useRef(!1), m = g.useRef(null), y = g.useRef(null), {
    disabled: k,
    updateMeasurementsFor: x,
    timeout: j
  } = {
    ...bv,
    ...i
  }, p = ai(x ?? r), f = g.useCallback(
    () => {
      if (!h.current) {
        h.current = !0;
        return;
      }
      y.current != null && clearTimeout(y.current), y.current = setTimeout(() => {
        c(Array.isArray(p.current) ? p.current : [p.current]), y.current = null;
      }, j);
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [j]
  ), v = ro({
    callback: f,
    disabled: k || !o
  }), w = g.useCallback((N, B) => {
    v && (B && (v.unobserve(B), h.current = !1), N && v.observe(N));
  }, [v]), [S, C] = Os(w), E = ai(t);
  return g.useEffect(() => {
    !v || !S.current || (v.disconnect(), h.current = !1, v.observe(S.current));
  }, [S, v]), g.useEffect(
    () => (l({
      type: pe.RegisterDroppable,
      element: {
        id: r,
        key: s,
        disabled: n,
        node: S,
        rect: m,
        data: E
      }
    }), () => l({
      type: pe.UnregisterDroppable,
      key: s,
      id: r
    })),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [r]
  ), g.useEffect(() => {
    n !== d.current.disabled && (l({
      type: pe.SetDroppableDisabled,
      id: r,
      key: s,
      disabled: n
    }), d.current.disabled = n);
  }, [r, s, n, l]), {
    active: o,
    rect: m,
    isOver: (a == null ? void 0 : a.id) === r,
    node: S,
    over: a,
    setNodeRef: C
  };
}
function Mv(e) {
  let {
    animation: t,
    children: n
  } = e;
  const [r, i] = g.useState(null), [s, o] = g.useState(null), l = As(n);
  return !n && !r && l && i(l), dt(() => {
    if (!s)
      return;
    const a = r == null ? void 0 : r.key, c = r == null ? void 0 : r.props.id;
    if (a == null || c == null) {
      i(null);
      return;
    }
    Promise.resolve(t(c, s)).then(() => {
      i(null);
    });
  }, [t, r, s]), te.createElement(te.Fragment, null, n, r ? g.cloneElement(r, {
    ref: o
  }) : null);
}
const zv = {
  x: 0,
  y: 0,
  scaleX: 1,
  scaleY: 1
};
function Fv(e) {
  let {
    children: t
  } = e;
  return te.createElement(wi.Provider, {
    value: ph
  }, te.createElement(io.Provider, {
    value: zv
  }, t));
}
const Bv = {
  position: "fixed",
  touchAction: "none"
}, Uv = (e) => to(e) ? "transform 250ms ease" : void 0, $v = /* @__PURE__ */ g.forwardRef((e, t) => {
  let {
    as: n,
    activatorEvent: r,
    adjustScale: i,
    children: s,
    className: o,
    rect: l,
    style: a,
    transform: c,
    transition: d = Uv
  } = e;
  if (!l)
    return null;
  const h = i ? c : {
    ...c,
    scaleX: 1,
    scaleY: 1
  }, m = {
    ...Bv,
    width: l.width,
    height: l.height,
    top: l.top,
    left: l.left,
    transform: ln.Transform.toString(h),
    transformOrigin: i && r ? Pg(r, l) : void 0,
    transition: typeof d == "function" ? d(r) : d,
    ...a
  };
  return te.createElement(n, {
    className: o,
    style: m,
    ref: t
  }, s);
}), Vv = (e) => (t) => {
  let {
    active: n,
    dragOverlay: r
  } = t;
  const i = {}, {
    styles: s,
    className: o
  } = e;
  if (s != null && s.active)
    for (const [l, a] of Object.entries(s.active))
      a !== void 0 && (i[l] = n.node.style.getPropertyValue(l), n.node.style.setProperty(l, a));
  if (s != null && s.dragOverlay)
    for (const [l, a] of Object.entries(s.dragOverlay))
      a !== void 0 && r.node.style.setProperty(l, a);
  return o != null && o.active && n.node.classList.add(o.active), o != null && o.dragOverlay && r.node.classList.add(o.dragOverlay), function() {
    for (const [a, c] of Object.entries(i))
      n.node.style.setProperty(a, c);
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
    transform: ln.Transform.toString(t)
  }, {
    transform: ln.Transform.toString(n)
  }];
}, Hv = {
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
    measuringConfiguration: i
  } = e;
  return eo((s, o) => {
    if (t === null)
      return;
    const l = n.get(s);
    if (!l)
      return;
    const a = l.node.current;
    if (!a)
      return;
    const c = hh(o);
    if (!c)
      return;
    const {
      transform: d
    } = Ae(o).getComputedStyle(o), h = rh(d);
    if (!h)
      return;
    const m = typeof t == "function" ? t : Qv(t);
    return ch(a, i.draggable.measure), m({
      active: {
        id: s,
        data: l.data,
        node: a,
        rect: i.draggable.measure(a)
      },
      draggableNodes: n,
      dragOverlay: {
        node: o,
        rect: i.dragOverlay.measure(c)
      },
      droppableContainers: r,
      measuringConfiguration: i,
      transform: h
    });
  });
}
function Qv(e) {
  const {
    duration: t,
    easing: n,
    sideEffects: r,
    keyframes: i
  } = {
    ...Hv,
    ...e
  };
  return (s) => {
    let {
      active: o,
      dragOverlay: l,
      transform: a,
      ...c
    } = s;
    if (!t)
      return;
    const d = {
      x: l.rect.left - o.rect.left,
      y: l.rect.top - o.rect.top
    }, h = {
      scaleX: a.scaleX !== 1 ? o.rect.width * a.scaleX / l.rect.width : 1,
      scaleY: a.scaleY !== 1 ? o.rect.height * a.scaleY / l.rect.height : 1
    }, m = {
      x: a.x - d.x,
      y: a.y - d.y,
      ...h
    }, y = i({
      ...c,
      active: o,
      dragOverlay: l,
      transform: {
        initial: a,
        final: m
      }
    }), [k] = y, x = y[y.length - 1];
    if (JSON.stringify(k) === JSON.stringify(x))
      return;
    const j = r == null ? void 0 : r({
      active: o,
      dragOverlay: l,
      ...c
    }), p = l.node.animate(y, {
      duration: t,
      easing: n,
      fill: "forwards"
    });
    return new Promise((f) => {
      p.onfinish = () => {
        j == null || j(), f();
      };
    });
  };
}
let Dc = 0;
function Xv(e) {
  return g.useMemo(() => {
    if (e != null)
      return Dc++, Dc;
  }, [e]);
}
const Yv = /* @__PURE__ */ te.memo((e) => {
  let {
    adjustScale: t = !1,
    children: n,
    dropAnimation: r,
    style: i,
    transition: s,
    modifiers: o,
    wrapperElement: l = "div",
    className: a,
    zIndex: c = 999
  } = e;
  const {
    activatorEvent: d,
    active: h,
    activeNodeRect: m,
    containerNodeRect: y,
    draggableNodes: k,
    droppableContainers: x,
    dragOverlay: j,
    over: p,
    measuringConfiguration: f,
    scrollableAncestors: v,
    scrollableAncestorRects: w,
    windowRect: S
  } = vh(), C = g.useContext(io), E = Xv(h == null ? void 0 : h.id), N = gh(o, {
    activatorEvent: d,
    active: h,
    activeNodeRect: m,
    containerNodeRect: y,
    draggingNodeRect: j.rect,
    over: p,
    overlayNodeRect: j.rect,
    scrollableAncestors: v,
    scrollableAncestorRects: w,
    transform: C,
    windowRect: S
  }), B = Xa(m), I = Kv({
    config: r,
    draggableNodes: k,
    droppableContainers: x,
    measuringConfiguration: f
  }), z = B ? j.setRef : void 0;
  return te.createElement(Fv, null, te.createElement(Mv, {
    animation: I
  }, h && E ? te.createElement($v, {
    key: E,
    id: h.id,
    ref: z,
    as: l,
    activatorEvent: d,
    adjustScale: t,
    className: a,
    transition: s,
    rect: B,
    style: {
      zIndex: c,
      ...i
    },
    transform: N
  }, n) : null));
});
function wh(e, t, n) {
  const r = e.slice();
  return r.splice(n < 0 ? r.length + n : n, 0, r.splice(t, 1)[0]), r;
}
function qv(e, t) {
  return e.reduce((n, r, i) => {
    const s = t.get(r);
    return s && (n[i] = s), n;
  }, Array(e.length));
}
function Fi(e) {
  return e !== null && e >= 0;
}
function Gv(e, t) {
  if (e === t)
    return !0;
  if (e.length !== t.length)
    return !1;
  for (let n = 0; n < e.length; n++)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
function Jv(e) {
  return typeof e == "boolean" ? {
    draggable: e,
    droppable: e
  } : e;
}
const xh = (e) => {
  let {
    rects: t,
    activeIndex: n,
    overIndex: r,
    index: i
  } = e;
  const s = wh(t, r, n), o = t[i], l = s[i];
  return !l || !o ? null : {
    x: l.left - o.left,
    y: l.top - o.top,
    scaleX: l.width / o.width,
    scaleY: l.height / o.height
  };
}, Bi = {
  scaleX: 1,
  scaleY: 1
}, Zv = (e) => {
  var t;
  let {
    activeIndex: n,
    activeNodeRect: r,
    index: i,
    rects: s,
    overIndex: o
  } = e;
  const l = (t = s[n]) != null ? t : r;
  if (!l)
    return null;
  if (i === n) {
    const c = s[o];
    return c ? {
      x: 0,
      y: n < o ? c.top + c.height - (l.top + l.height) : c.top - l.top,
      ...Bi
    } : null;
  }
  const a = ey(s, i, n);
  return i > n && i <= o ? {
    x: 0,
    y: -l.height - a,
    ...Bi
  } : i < n && i >= o ? {
    x: 0,
    y: l.height + a,
    ...Bi
  } : {
    x: 0,
    y: 0,
    ...Bi
  };
};
function ey(e, t, n) {
  const r = e[t], i = e[t - 1], s = e[t + 1];
  return r ? n < t ? i ? r.top - (i.top + i.height) : s ? s.top - (r.top + r.height) : 0 : s ? s.top - (r.top + r.height) : i ? r.top - (i.top + i.height) : 0 : 0;
}
const kh = "Sortable", Sh = /* @__PURE__ */ te.createContext({
  activeIndex: -1,
  containerId: kh,
  disableTransforms: !1,
  items: [],
  overIndex: -1,
  useDragOverlay: !1,
  sortedRects: [],
  strategy: xh,
  disabled: {
    draggable: !1,
    droppable: !1
  }
});
function ty(e) {
  let {
    children: t,
    id: n,
    items: r,
    strategy: i = xh,
    disabled: s = !1
  } = e;
  const {
    active: o,
    dragOverlay: l,
    droppableRects: a,
    over: c,
    measureDroppableContainers: d
  } = vh(), h = yi(kh, n), m = l.rect !== null, y = g.useMemo(() => r.map((C) => typeof C == "object" && "id" in C ? C.id : C), [r]), k = o != null, x = o ? y.indexOf(o.id) : -1, j = c ? y.indexOf(c.id) : -1, p = g.useRef(y), f = !Gv(y, p.current), v = j !== -1 && x === -1 || f, w = Jv(s);
  dt(() => {
    f && k && d(y);
  }, [f, y, k, d]), g.useEffect(() => {
    p.current = y;
  }, [y]);
  const S = g.useMemo(
    () => ({
      activeIndex: x,
      containerId: h,
      disabled: w,
      disableTransforms: v,
      items: y,
      overIndex: j,
      useDragOverlay: m,
      sortedRects: qv(y, a),
      strategy: i
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [x, h, w.draggable, w.droppable, v, y, j, a, m, i]
  );
  return te.createElement(Sh.Provider, {
    value: S
  }, t);
}
const ny = (e) => {
  let {
    id: t,
    items: n,
    activeIndex: r,
    overIndex: i
  } = e;
  return wh(n, r, i).indexOf(t);
}, ry = (e) => {
  let {
    containerId: t,
    isSorting: n,
    wasDragging: r,
    index: i,
    items: s,
    newIndex: o,
    previousItems: l,
    previousContainerId: a,
    transition: c
  } = e;
  return !c || !r || l !== s && i === o ? !1 : n ? !0 : o !== i && t === a;
}, iy = {
  duration: 200,
  easing: "ease"
}, Eh = "transform", sy = /* @__PURE__ */ ln.Transition.toString({
  property: Eh,
  duration: 0,
  easing: "linear"
}), oy = {
  roleDescription: "sortable"
};
function ly(e) {
  let {
    disabled: t,
    index: n,
    node: r,
    rect: i
  } = e;
  const [s, o] = g.useState(null), l = g.useRef(n);
  return dt(() => {
    if (!t && n !== l.current && r.current) {
      const a = i.current;
      if (a) {
        const c = dr(r.current, {
          ignoreTransform: !0
        }), d = {
          x: a.left - c.left,
          y: a.top - c.top,
          scaleX: a.width / c.width,
          scaleY: a.height / c.height
        };
        (d.x || d.y) && o(d);
      }
    }
    n !== l.current && (l.current = n);
  }, [t, n, r, i]), g.useEffect(() => {
    s && o(null);
  }, [s]), s;
}
function ay(e) {
  let {
    animateLayoutChanges: t = ry,
    attributes: n,
    disabled: r,
    data: i,
    getNewIndex: s = ny,
    id: o,
    strategy: l,
    resizeObserverConfig: a,
    transition: c = iy
  } = e;
  const {
    items: d,
    containerId: h,
    activeIndex: m,
    disabled: y,
    disableTransforms: k,
    sortedRects: x,
    overIndex: j,
    useDragOverlay: p,
    strategy: f
  } = g.useContext(Sh), v = uy(r, y), w = d.indexOf(o), S = g.useMemo(() => ({
    sortable: {
      containerId: h,
      index: w,
      items: d
    },
    ...i
  }), [h, i, w, d]), C = g.useMemo(() => d.slice(d.indexOf(o)), [d, o]), {
    rect: E,
    node: N,
    isOver: B,
    setNodeRef: I
  } = yh({
    id: o,
    data: S,
    disabled: v.droppable,
    resizeObserverConfig: {
      updateMeasurementsFor: C,
      ...a
    }
  }), {
    active: z,
    activatorEvent: F,
    activeNodeRect: $,
    attributes: le,
    setNodeRef: A,
    listeners: L,
    isDragging: P,
    over: T,
    setActivatorNodeRef: O,
    transform: M
  } = Iv({
    id: o,
    data: S,
    attributes: {
      ...oy,
      ...n
    },
    disabled: v.draggable
  }), W = wg(I, A), U = !!z, re = U && !k && Fi(m) && Fi(j), ue = !p && P, D = ue && re ? M : null, V = re ? D ?? (l ?? f)({
    rects: x,
    activeNodeRect: $,
    activeIndex: m,
    overIndex: j,
    index: w
  }) : null, H = Fi(m) && Fi(j) ? s({
    id: o,
    items: d,
    activeIndex: m,
    overIndex: j
  }) : w, ze = z == null ? void 0 : z.id, q = g.useRef({
    activeId: ze,
    items: d,
    newIndex: H,
    containerId: h
  }), hr = d !== q.current.items, ht = t({
    active: z,
    containerId: h,
    isDragging: P,
    isSorting: U,
    id: o,
    index: w,
    items: d,
    newIndex: q.current.newIndex,
    previousItems: q.current.items,
    previousContainerId: q.current.containerId,
    transition: c,
    wasDragging: q.current.activeId != null
  }), _n = ly({
    disabled: !ht,
    index: w,
    node: N,
    rect: E
  });
  return g.useEffect(() => {
    U && q.current.newIndex !== H && (q.current.newIndex = H), h !== q.current.containerId && (q.current.containerId = h), d !== q.current.items && (q.current.items = d);
  }, [U, H, h, d]), g.useEffect(() => {
    if (ze === q.current.activeId)
      return;
    if (ze && !q.current.activeId) {
      q.current.activeId = ze;
      return;
    }
    const Tn = setTimeout(() => {
      q.current.activeId = ze;
    }, 50);
    return () => clearTimeout(Tn);
  }, [ze]), {
    active: z,
    activeIndex: m,
    attributes: le,
    data: S,
    rect: E,
    index: w,
    newIndex: H,
    items: d,
    isOver: B,
    isSorting: U,
    isDragging: P,
    listeners: L,
    node: N,
    overIndex: j,
    over: T,
    setNodeRef: W,
    setActivatorNodeRef: O,
    setDroppableNodeRef: I,
    setDraggableNodeRef: A,
    transform: _n ?? V,
    transition: Ct()
  };
  function Ct() {
    if (
      // Temporarily disable transitions for a single frame to set up derived transforms
      _n || // Or to prevent items jumping to back to their "new" position when items change
      hr && q.current.newIndex === w
    )
      return sy;
    if (!(ue && !to(F) || !c) && (U || ht))
      return ln.Transition.toString({
        ...c,
        property: Eh
      });
  }
}
function uy(e, t) {
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
function bs(e) {
  if (!e)
    return !1;
  const t = e.data.current;
  return !!(t && "sortable" in t && typeof t.sortable == "object" && "containerId" in t.sortable && "items" in t.sortable && "index" in t.sortable);
}
const cy = [Q.Down, Q.Right, Q.Up, Q.Left], dy = (e, t) => {
  let {
    context: {
      active: n,
      collisionRect: r,
      droppableRects: i,
      droppableContainers: s,
      over: o,
      scrollableAncestors: l
    }
  } = t;
  if (cy.includes(e.code)) {
    if (e.preventDefault(), !n || !r)
      return;
    const a = [];
    s.getEnabled().forEach((h) => {
      if (!h || h != null && h.disabled)
        return;
      const m = i.get(h.id);
      if (m)
        switch (e.code) {
          case Q.Down:
            r.top < m.top && a.push(h);
            break;
          case Q.Up:
            r.top > m.top && a.push(h);
            break;
          case Q.Left:
            r.left > m.left && a.push(h);
            break;
          case Q.Right:
            r.left < m.left && a.push(h);
            break;
        }
    });
    const c = th({
      collisionRect: r,
      droppableRects: i,
      droppableContainers: a
    });
    let d = eh(c, "id");
    if (d === (o == null ? void 0 : o.id) && c.length > 1 && (d = c[1].id), d != null) {
      const h = s.get(n.id), m = s.get(d), y = m ? i.get(m.id) : null, k = m == null ? void 0 : m.node.current;
      if (k && y && h && m) {
        const j = no(k).some((C, E) => l[E] !== C), p = Ch(h, m), f = fy(h, m), v = j || !p ? {
          x: 0,
          y: 0
        } : {
          x: f ? r.width - y.width : 0,
          y: f ? r.height - y.height : 0
        }, w = {
          x: y.left,
          y: y.top
        };
        return v.x && v.y ? w : ui(w, v);
      }
    }
  }
};
function Ch(e, t) {
  return !bs(e) || !bs(t) ? !1 : e.data.current.sortable.containerId === t.data.current.sortable.containerId;
}
function fy(e, t) {
  return !bs(e) || !bs(t) || !Ch(e, t) ? !1 : e.data.current.sortable.index < t.data.current.sortable.index;
}
const hy = {
  LOW: "priority-low",
  MEDIUM: "priority-medium",
  HIGH: "priority-high",
  URGENT: "priority-urgent"
};
function Nh({ ticket: e, isDragging: t = !1, onClick: n, onArchive: r, onDelete: i }) {
  const {
    attributes: s,
    listeners: o,
    setNodeRef: l,
    transform: a,
    transition: c,
    isDragging: d
  } = ay({ id: e.id }), h = {
    transform: ln.Transform.toString(a),
    transition: c
  }, m = e.status === "HANDLE" || e.status === "AI_PROCESSING", y = e.status === "TO_REVIEW" && e.prLink;
  return /* @__PURE__ */ u.jsxs(
    "div",
    {
      ref: l,
      style: h,
      className: `ticket-card ${t || d ? "dragging" : ""} ${y ? "success-glow" : ""}`,
      onClick: n,
      ...s,
      ...o,
      children: [
        /* @__PURE__ */ u.jsx("h4", { className: "ticket-title", children: e.title }),
        e.description && /* @__PURE__ */ u.jsx("p", { className: "ticket-description", children: e.description }),
        /* @__PURE__ */ u.jsxs("div", { className: "ticket-meta", children: [
          /* @__PURE__ */ u.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ u.jsx("span", { className: `ticket-priority ${hy[e.priority]}`, children: e.priority }),
            e.targetBranch && /* @__PURE__ */ u.jsxs("span", { className: "ticket-branch", title: `Target: ${e.targetBranch}`, children: [
              /* @__PURE__ */ u.jsx(vy, {}),
              e.targetBranch
            ] })
          ] }),
          /* @__PURE__ */ u.jsxs("div", { className: "flex items-center gap-2", children: [
            e.assignee && /* @__PURE__ */ u.jsx(
              "div",
              {
                className: "ticket-assignee",
                title: e.assignee.name,
                children: e.assignee.name.substring(0, 2).toUpperCase()
              }
            ),
            /* @__PURE__ */ u.jsxs("span", { className: "text-xs text-muted-foreground", children: [
              "#",
              e.id.slice(-4)
            ] })
          ] })
        ] }),
        m && /* @__PURE__ */ u.jsxs("div", { className: `ticket-ai-status ${e.status === "AI_PROCESSING" ? "processing" : ""}`, children: [
          /* @__PURE__ */ u.jsx("div", { className: "ai-spinner" }),
          /* @__PURE__ */ u.jsx("span", { children: e.status === "HANDLE" ? "Queued for AI" : "AI Processing..." })
        ] }),
        e.prLink && /* @__PURE__ */ u.jsxs(
          "a",
          {
            href: e.prLink,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "ticket-pr-link",
            onClick: (k) => k.stopPropagation(),
            children: [
              /* @__PURE__ */ u.jsx(gy, {}),
              "View Pull Request"
            ]
          }
        ),
        e.aiSummary && /* @__PURE__ */ u.jsxs("div", { className: "ticket-ai-summary", children: [
          /* @__PURE__ */ u.jsx("strong", { children: "AI Summary:" }),
          " ",
          e.aiSummary
        ] }),
        !m && (r || i) && /* @__PURE__ */ u.jsxs("div", { className: "ticket-actions", children: [
          i && /* @__PURE__ */ u.jsx(
            "button",
            {
              className: "ticket-action-btn delete",
              onClick: (k) => {
                k.stopPropagation(), i(e);
              },
              title: "Delete this ticket",
              children: /* @__PURE__ */ u.jsx(py, {})
            }
          ),
          e.status === "DONE" && r && /* @__PURE__ */ u.jsxs(
            "button",
            {
              className: "ticket-action-btn archive",
              onClick: (k) => {
                k.stopPropagation(), r(e);
              },
              title: "Archive this ticket",
              children: [
                /* @__PURE__ */ u.jsx(my, {}),
                "Archive"
              ]
            }
          )
        ] })
      ]
    }
  );
}
function py() {
  return /* @__PURE__ */ u.jsxs(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      style: { width: "0.875rem", height: "0.875rem" },
      children: [
        /* @__PURE__ */ u.jsx("path", { d: "M3 6h18" }),
        /* @__PURE__ */ u.jsx("path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" }),
        /* @__PURE__ */ u.jsx("path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" })
      ]
    }
  );
}
function my() {
  return /* @__PURE__ */ u.jsxs(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      style: { width: "0.875rem", height: "0.875rem" },
      children: [
        /* @__PURE__ */ u.jsx("rect", { x: "2", y: "4", width: "20", height: "5", rx: "2" }),
        /* @__PURE__ */ u.jsx("path", { d: "M4 9v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9" }),
        /* @__PURE__ */ u.jsx("path", { d: "M10 13h4" })
      ]
    }
  );
}
function gy() {
  return /* @__PURE__ */ u.jsx(
    "svg",
    {
      viewBox: "0 0 16 16",
      fill: "currentColor",
      style: { width: "1rem", height: "1rem" },
      children: /* @__PURE__ */ u.jsx(
        "path",
        {
          fillRule: "evenodd",
          d: "M7.177 3.073L9.573.677A.25.25 0 0110 .854v4.792a.25.25 0 01-.427.177L7.177 3.427a.25.25 0 010-.354zM3.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 113 2.122v5.256a2.251 2.251 0 11-1.5 0V5.372A2.25 2.25 0 011.5 3.25zM11 2.5h-1V4h1a1 1 0 011 1v5.628a2.251 2.251 0 101.5 0V5A2.5 2.5 0 0011 2.5zm1 10.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0zM3.75 12a.75.75 0 100 1.5.75.75 0 000-1.5z"
        }
      )
    }
  );
}
function vy() {
  return /* @__PURE__ */ u.jsxs(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      style: { width: "0.75rem", height: "0.75rem" },
      children: [
        /* @__PURE__ */ u.jsx("line", { x1: "6", x2: "6", y1: "3", y2: "15" }),
        /* @__PURE__ */ u.jsx("circle", { cx: "18", cy: "6", r: "3" }),
        /* @__PURE__ */ u.jsx("circle", { cx: "6", cy: "18", r: "3" }),
        /* @__PURE__ */ u.jsx("path", { d: "M18 9a9 9 0 0 1-9 9" })
      ]
    }
  );
}
const yy = {
  BACKLOG: "",
  TODO: "",
  HANDLE: "column-handle",
  AI_PROCESSING: "column-ai-processing",
  TO_REVIEW: "column-to-review",
  DONE: "column-done",
  CANCELLED: ""
};
function wy({
  id: e,
  title: t,
  icon: n,
  tickets: r,
  isActive: i = !1,
  onTicketClick: s,
  onArchive: o,
  onDelete: l
}) {
  const { setNodeRef: a, isOver: c } = yh({ id: e });
  return /* @__PURE__ */ u.jsxs(
    "div",
    {
      className: `kanban-column ${yy[e]} ${i ? "active" : ""}`,
      children: [
        /* @__PURE__ */ u.jsxs("div", { className: "column-header", children: [
          /* @__PURE__ */ u.jsxs("div", { className: "column-title", children: [
            /* @__PURE__ */ u.jsx("span", { className: "icon", role: "img", "aria-label": t, children: n }),
            /* @__PURE__ */ u.jsx("span", { children: t })
          ] }),
          /* @__PURE__ */ u.jsx("span", { className: "column-count", children: r.length })
        ] }),
        /* @__PURE__ */ u.jsx(ty, { items: r.map((d) => d.id), strategy: Zv, children: /* @__PURE__ */ u.jsx(
          "div",
          {
            ref: a,
            className: `column-body ${c ? "drop-target" : ""}`,
            children: r.length === 0 ? /* @__PURE__ */ u.jsxs("div", { className: "column-empty", children: [
              /* @__PURE__ */ u.jsx("span", { className: "mb-1 text-lg", children: n }),
              /* @__PURE__ */ u.jsx("span", { children: "Drop tickets here" }),
              e === "HANDLE" && /* @__PURE__ */ u.jsx("span", { className: "text-xs mt-1", children: "AI will process these" })
            ] }) : r.map((d) => /* @__PURE__ */ u.jsx(
              Nh,
              {
                ticket: d,
                onClick: () => s(d),
                onArchive: o,
                onDelete: l
              },
              d.id
            ))
          }
        ) })
      ]
    }
  );
}
const xy = [
  { value: "LOW", label: "Low", icon: "↓", color: "text-slate-400" },
  { value: "MEDIUM", label: "Medium", icon: "→", color: "text-blue-400" },
  { value: "HIGH", label: "High", icon: "↑", color: "text-amber-400" },
  { value: "URGENT", label: "Urgent", icon: "⚡", color: "text-red-400" }
], ky = {
  auto: { value: "auto", label: "Auto (Recommended)", description: "Let Cursor choose the best model" },
  "claude-4-sonnet-thinking": { value: "claude-4-sonnet-thinking", label: "Claude 4 Sonnet", description: "Fast & capable" },
  "claude-4-opus-thinking": { value: "claude-4-opus-thinking", label: "Claude 4 Opus", description: "Most powerful" },
  o3: { value: "o3", label: "O3", description: "OpenAI reasoning model" }
}, Sy = `## What needs to be done
Describe the task clearly. What is the expected outcome?

## Acceptance Criteria
- [ ] Criterion 1
- [ ] Criterion 2
- [ ] Criterion 3

## Technical Details
Any specific implementation details, files to modify, or constraints?

## Additional Context
Links, screenshots, or references that might help.`;
function Ey({
  projectId: e,
  projectName: t,
  branchPresets: n,
  defaultBranch: r,
  members: i = [],
  onClose: s,
  onSubmit: o
}) {
  const [l, a] = g.useState(""), [c, d] = g.useState(Sy), [h, m] = g.useState("MEDIUM"), [y, k] = g.useState(r), [x, j] = g.useState(""), [p, f] = g.useState([]), [v, w] = g.useState(""), [S, C] = g.useState(!1), [E, N] = g.useState(!1), [B, I] = g.useState(""), [z, F] = g.useState("auto"), [$, le] = g.useState(["auto"]), [A, L] = g.useState(!0), P = g.useRef(null), T = g.useRef(null);
  g.useEffect(() => {
    var D;
    (D = P.current) == null || D.focus();
  }, []), g.useEffect(() => {
    (async () => {
      try {
        const R = Oc(), V = await fetch("/api/cursor/models", {
          headers: { "X-CSRF-Token": R }
        });
        if (V.ok) {
          const H = await V.json();
          le(H.models || ["auto"]);
        }
      } catch (R) {
        console.error("Failed to fetch models:", R);
      } finally {
        L(!1);
      }
    })();
  }, []), g.useEffect(() => {
    const D = (R) => {
      R.key === "Escape" && s(), (R.metaKey || R.ctrlKey) && R.key === "Enter" && (R.preventDefault(), M(R));
    };
    return document.addEventListener("keydown", D), () => document.removeEventListener("keydown", D);
  }, [s, l, c, h, y]);
  const O = (D) => {
    if (!D || D.trim().length < 30) return !1;
    const R = [
      "Describe the task clearly",
      "What is the expected outcome?",
      "Criterion 1",
      "Criterion 2",
      "Criterion 3",
      "Any specific implementation details",
      "files to modify, or constraints?",
      "Links, screenshots, or references"
    ];
    let V = 0;
    for (const ze of R)
      D.includes(ze) && V++;
    return V >= 5 ? !1 : D.replace(/##\s*[A-Za-z ]+\s*/g, "").replace(/-\s*\[\s*\]\s*/g, "").replace(/\s+/g, " ").trim().length >= 15;
  }, M = g.useCallback(
    async (D) => {
      var R;
      if (D.preventDefault(), I(""), !l.trim()) {
        I("Title is required"), (R = P.current) == null || R.focus();
        return;
      }
      if (!c.trim()) {
        I("Description is required - the AI needs context to work!");
        return;
      }
      if (!O(c)) {
        I("Please fill in the description template with actual task details. The AI needs this information to implement the feature correctly.");
        return;
      }
      N(!0);
      try {
        const V = Oc(), H = await fetch(`/api/tickets/${e}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-CSRF-Token": V
          },
          body: JSON.stringify({
            title: l.trim(),
            description: c.trim(),
            priority: h,
            status: "BACKLOG",
            targetBranch: y,
            assigneeId: x || void 0,
            labels: p,
            aiModel: z !== "auto" ? z : void 0
          })
        });
        if (!H.ok) {
          const q = await H.json().catch(() => ({}));
          throw new Error(q.message || "Failed to create ticket");
        }
        const ze = await H.json();
        o(ze);
      } catch (V) {
        I(V instanceof Error ? V.message : "Failed to create ticket");
      } finally {
        N(!1);
      }
    },
    [e, l, c, h, y, x, p, z, o]
  ), W = g.useCallback(() => {
    const D = v.trim().toLowerCase();
    D && !p.includes(D) && (f([...p, D]), w(""));
  }, [v, p]), U = g.useCallback((D) => {
    f(p.filter((R) => R !== D));
  }, [p]), re = g.useCallback((D) => {
    D.key === "Enter" && (D.preventDefault(), W());
  }, [W]), ue = O(c);
  return /* @__PURE__ */ u.jsx(
    "div",
    {
      className: "modal-overlay",
      onClick: (D) => {
        D.target === D.currentTarget && s();
      },
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": "new-ticket-title",
      children: /* @__PURE__ */ u.jsxs("div", { ref: T, className: "ticket-modal", onClick: (D) => D.stopPropagation(), children: [
        /* @__PURE__ */ u.jsxs("div", { className: "ticket-modal-header", children: [
          /* @__PURE__ */ u.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ u.jsx("div", { className: "ticket-modal-icon", children: /* @__PURE__ */ u.jsx("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: /* @__PURE__ */ u.jsx("path", { d: "M12 5v14M5 12h14" }) }) }),
            /* @__PURE__ */ u.jsxs("div", { children: [
              /* @__PURE__ */ u.jsx("h2", { id: "new-ticket-title", children: "Create Ticket" }),
              t && /* @__PURE__ */ u.jsxs("p", { className: "text-xs text-muted-foreground mt-0.5", children: [
                "in ",
                t
              ] })
            ] })
          ] }),
          /* @__PURE__ */ u.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ u.jsx("span", { className: "text-xs text-muted-foreground hidden sm:block", children: "⌘ + Enter to submit" }),
            /* @__PURE__ */ u.jsx(
              "button",
              {
                className: "ticket-modal-close",
                onClick: s,
                "aria-label": "Close modal",
                children: /* @__PURE__ */ u.jsx("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: /* @__PURE__ */ u.jsx("path", { d: "M18 6L6 18M6 6l12 12" }) })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ u.jsxs("form", { onSubmit: M, className: "ticket-modal-form", children: [
          B && /* @__PURE__ */ u.jsxs("div", { className: "ticket-error", children: [
            /* @__PURE__ */ u.jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
              /* @__PURE__ */ u.jsx("circle", { cx: "12", cy: "12", r: "10" }),
              /* @__PURE__ */ u.jsx("path", { d: "M12 8v4M12 16h.01" })
            ] }),
            B
          ] }),
          /* @__PURE__ */ u.jsxs("div", { className: "ticket-field", children: [
            /* @__PURE__ */ u.jsxs("label", { className: "ticket-label", children: [
              "Title ",
              /* @__PURE__ */ u.jsx("span", { className: "text-red-400", children: "*" })
            ] }),
            /* @__PURE__ */ u.jsx(
              "input",
              {
                ref: P,
                id: "ticket-title",
                name: "title",
                type: "text",
                className: "ticket-title-input",
                placeholder: "Brief summary of the task",
                value: l,
                onChange: (D) => a(D.target.value),
                autoComplete: "off",
                required: !0
              }
            )
          ] }),
          /* @__PURE__ */ u.jsxs("div", { className: "ticket-field", children: [
            /* @__PURE__ */ u.jsxs("label", { className: "ticket-label", children: [
              "Description ",
              /* @__PURE__ */ u.jsx("span", { className: "text-red-400", children: "*" }),
              /* @__PURE__ */ u.jsx("span", { className: "text-muted-foreground font-normal ml-1 text-xs normal-case", children: "— The AI uses this to implement the feature" })
            ] }),
            /* @__PURE__ */ u.jsx(
              "textarea",
              {
                id: "ticket-description",
                name: "description",
                className: `ticket-description-input ${ue ? "" : "ticket-description-warning"}`,
                value: c,
                onChange: (D) => d(D.target.value),
                rows: 12,
                autoComplete: "off",
                required: !0
              }
            ),
            !ue && /* @__PURE__ */ u.jsx("p", { className: "ticket-warning-hint", children: "⚠️ Fill in the template with actual task details" })
          ] }),
          /* @__PURE__ */ u.jsxs("div", { className: "ticket-meta-grid", children: [
            /* @__PURE__ */ u.jsxs("div", { className: "ticket-field", children: [
              /* @__PURE__ */ u.jsx("label", { className: "ticket-label", children: "Priority" }),
              /* @__PURE__ */ u.jsx("div", { className: "ticket-priority-selector", children: xy.map((D) => /* @__PURE__ */ u.jsxs(
                "button",
                {
                  type: "button",
                  className: `ticket-priority-btn ${h === D.value ? "active" : ""} ${D.color}`,
                  onClick: () => m(D.value),
                  title: D.label,
                  children: [
                    /* @__PURE__ */ u.jsx("span", { className: "ticket-priority-icon", children: D.icon }),
                    /* @__PURE__ */ u.jsx("span", { className: "ticket-priority-label", children: D.label })
                  ]
                },
                D.value
              )) })
            ] }),
            /* @__PURE__ */ u.jsxs("div", { className: "ticket-field", children: [
              /* @__PURE__ */ u.jsxs("label", { className: "ticket-label", children: [
                /* @__PURE__ */ u.jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", className: "inline w-3.5 h-3.5 mr-1", children: [
                  /* @__PURE__ */ u.jsx("path", { d: "M12 2L2 7l10 5 10-5-10-5z" }),
                  /* @__PURE__ */ u.jsx("path", { d: "M2 17l10 5 10-5" }),
                  /* @__PURE__ */ u.jsx("path", { d: "M2 12l10 5 10-5" })
                ] }),
                "AI Model"
              ] }),
              A ? /* @__PURE__ */ u.jsxs("div", { className: "ticket-model-loading", children: [
                /* @__PURE__ */ u.jsx("span", { className: "ticket-spinner-small" }),
                "Loading models..."
              ] }) : /* @__PURE__ */ u.jsx(
                "select",
                {
                  className: "ticket-select",
                  value: z,
                  onChange: (D) => F(D.target.value),
                  children: $.map((D) => {
                    const R = ky[D] || {
                      label: D.replace(/-/g, " ").replace(/\b\w/g, (V) => V.toUpperCase()),
                      description: ""
                    };
                    return /* @__PURE__ */ u.jsxs("option", { value: D, children: [
                      R.label,
                      R.description ? ` - ${R.description}` : ""
                    ] }, D);
                  })
                }
              )
            ] }),
            /* @__PURE__ */ u.jsxs("div", { className: "ticket-field", children: [
              /* @__PURE__ */ u.jsxs("label", { className: "ticket-label", children: [
                /* @__PURE__ */ u.jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", className: "inline w-3.5 h-3.5 mr-1", children: [
                  /* @__PURE__ */ u.jsx("line", { x1: "6", x2: "6", y1: "3", y2: "15" }),
                  /* @__PURE__ */ u.jsx("circle", { cx: "18", cy: "6", r: "3" }),
                  /* @__PURE__ */ u.jsx("circle", { cx: "6", cy: "18", r: "3" }),
                  /* @__PURE__ */ u.jsx("path", { d: "M18 9a9 9 0 0 1-9 9" })
                ] }),
                "Target Branch"
              ] }),
              n.length > 0 ? /* @__PURE__ */ u.jsx("div", { className: "ticket-branch-presets", children: n.map((D) => /* @__PURE__ */ u.jsxs(
                "button",
                {
                  type: "button",
                  className: `ticket-branch-btn ${y === D.branch ? "active" : ""}`,
                  onClick: () => k(D.branch),
                  children: [
                    /* @__PURE__ */ u.jsx("span", { className: "font-medium", children: D.name }),
                    /* @__PURE__ */ u.jsx("code", { children: D.branch })
                  ]
                },
                D.branch
              )) }) : /* @__PURE__ */ u.jsx(
                "input",
                {
                  type: "text",
                  className: "ticket-input",
                  placeholder: "main",
                  value: y,
                  onChange: (D) => k(D.target.value)
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ u.jsxs(
            "button",
            {
              type: "button",
              className: "ticket-advanced-toggle",
              onClick: () => C(!S),
              children: [
                /* @__PURE__ */ u.jsx(
                  "svg",
                  {
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    className: `w-4 h-4 transition-transform ${S ? "rotate-90" : ""}`,
                    children: /* @__PURE__ */ u.jsx("path", { d: "M9 18l6-6-6-6" })
                  }
                ),
                /* @__PURE__ */ u.jsx("span", { children: "More options" })
              ]
            }
          ),
          S && /* @__PURE__ */ u.jsxs("div", { className: "ticket-advanced-section", children: [
            i.length > 0 && /* @__PURE__ */ u.jsxs("div", { className: "ticket-field", children: [
              /* @__PURE__ */ u.jsx("label", { className: "ticket-label", children: "Assignee" }),
              /* @__PURE__ */ u.jsxs("div", { className: "ticket-assignee-selector", children: [
                /* @__PURE__ */ u.jsxs(
                  "button",
                  {
                    type: "button",
                    className: `ticket-assignee-btn ${x ? "" : "active"}`,
                    onClick: () => j(""),
                    children: [
                      /* @__PURE__ */ u.jsx("div", { className: "ticket-assignee-avatar unassigned", children: "?" }),
                      /* @__PURE__ */ u.jsx("span", { children: "Unassigned" })
                    ]
                  }
                ),
                i.map((D) => /* @__PURE__ */ u.jsxs(
                  "button",
                  {
                    type: "button",
                    className: `ticket-assignee-btn ${x === D.id ? "active" : ""}`,
                    onClick: () => j(D.id),
                    children: [
                      /* @__PURE__ */ u.jsx("div", { className: "ticket-assignee-avatar", children: D.avatarUrl ? /* @__PURE__ */ u.jsx("img", { src: D.avatarUrl, alt: D.name }) : D.name.substring(0, 2).toUpperCase() }),
                      /* @__PURE__ */ u.jsx("span", { children: D.name })
                    ]
                  },
                  D.id
                ))
              ] })
            ] }),
            /* @__PURE__ */ u.jsxs("div", { className: "ticket-field", children: [
              /* @__PURE__ */ u.jsx("label", { className: "ticket-label", children: "Labels" }),
              /* @__PURE__ */ u.jsxs("div", { className: "ticket-labels-input", children: [
                /* @__PURE__ */ u.jsx("div", { className: "ticket-labels-list", children: p.map((D) => /* @__PURE__ */ u.jsxs("span", { className: "ticket-label-tag", children: [
                  D,
                  /* @__PURE__ */ u.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => U(D),
                      className: "ticket-label-remove",
                      children: "×"
                    }
                  )
                ] }, D)) }),
                /* @__PURE__ */ u.jsx(
                  "input",
                  {
                    type: "text",
                    className: "ticket-label-input",
                    placeholder: "Add label...",
                    value: v,
                    onChange: (D) => w(D.target.value),
                    onKeyDown: re,
                    onBlur: W
                  }
                )
              ] }),
              /* @__PURE__ */ u.jsx("p", { className: "ticket-hint", children: "Press Enter to add a label" })
            ] }),
            n.length > 0 && /* @__PURE__ */ u.jsxs("div", { className: "ticket-field", children: [
              /* @__PURE__ */ u.jsx("label", { className: "ticket-label", children: "Custom Branch" }),
              /* @__PURE__ */ u.jsx(
                "input",
                {
                  type: "text",
                  className: "ticket-input font-mono",
                  placeholder: "Or enter a custom branch...",
                  value: y,
                  onChange: (D) => k(D.target.value)
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ u.jsxs("div", { className: "ticket-modal-actions", children: [
            /* @__PURE__ */ u.jsx(
              "button",
              {
                type: "button",
                className: "ticket-btn-secondary",
                onClick: s,
                disabled: E,
                children: "Cancel"
              }
            ),
            /* @__PURE__ */ u.jsx(
              "button",
              {
                type: "submit",
                className: "ticket-btn-primary",
                disabled: E || !l.trim(),
                children: E ? /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
                  /* @__PURE__ */ u.jsx("div", { className: "ticket-spinner" }),
                  "Creating..."
                ] }) : /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
                  /* @__PURE__ */ u.jsx("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", className: "w-4 h-4", children: /* @__PURE__ */ u.jsx("path", { d: "M12 5v14M5 12h14" }) }),
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
function Oc() {
  const e = document.querySelector('meta[name="csrf-token"]');
  return (e == null ? void 0 : e.getAttribute("content")) || "";
}
const Cy = {
  QUEUED: "text-amber-400",
  RUNNING: "text-blue-400",
  FINISHED: "text-emerald-400",
  ERROR: "text-red-400",
  CANCELLED: "text-slate-400"
}, Ny = {
  QUEUED: "⏳",
  RUNNING: "🔄",
  FINISHED: "✅",
  ERROR: "❌",
  CANCELLED: "🚫"
}, _y = {
  QUEUED: "Queued",
  RUNNING: "Running",
  FINISHED: "Completed",
  ERROR: "Failed",
  CANCELLED: "Cancelled"
};
function Ty({
  agentId: e,
  ticketId: t,
  ticketTitle: n,
  ticketStatus: r,
  onStatusChange: i,
  onStop: s,
  onFollowupSent: o,
  onValidate: l
}) {
  var W, U, re, ue, D;
  const [a, c] = g.useState(null), [d, h] = g.useState([]), [m, y] = g.useState(!0), [k, x] = g.useState(null), [j, p] = g.useState(!0), [f, v] = g.useState(!1), [w, S] = g.useState(!1), [C, E] = g.useState(""), [N, B] = g.useState(!1), [I, z] = g.useState(null), F = g.useRef(null), $ = g.useRef(null), le = g.useCallback(async () => {
    if (!w) {
      S(!0);
      try {
        const R = _r(), V = await fetch(`/api/tickets/${t}/validate`, {
          method: "POST",
          headers: {
            "X-CSRF-Token": R,
            "Content-Type": "application/json"
          }
        });
        if (!V.ok) {
          const H = await V.json();
          throw new Error(H.error || "Failed to validate ticket");
        }
        showToast("Ticket validated and marked as Done!", "success"), $.current && (clearInterval($.current), $.current = null), l && l();
      } catch (R) {
        console.error("Validate error:", R);
        const V = R instanceof Error ? R.message : "Failed to validate ticket";
        x(V), showToast(V, "error");
      } finally {
        S(!1), z(null);
      }
    }
  }, [t, w, l]), A = g.useCallback(async () => {
    if (!f) {
      v(!0);
      try {
        const R = _r(), V = await fetch(`/api/cursor/agents/${e}/stop`, {
          method: "POST",
          headers: {
            "X-CSRF-Token": R,
            "Content-Type": "application/json"
          }
        });
        if (!V.ok) {
          const H = await V.json();
          throw new Error(H.error || "Failed to stop agent");
        }
        showToast("AI agent stopped", "warning"), c((H) => H ? { ...H, status: "CANCELLED" } : null), $.current && (clearInterval($.current), $.current = null), i && i("CANCELLED"), s && s();
      } catch (R) {
        console.error("Stop agent error:", R);
        const V = R instanceof Error ? R.message : "Failed to stop agent";
        x(V), showToast(V, "error");
      } finally {
        v(!1), z(null);
      }
    }
  }, [e, f, i, s]), L = g.useCallback(async () => {
    if (!(!C.trim() || N)) {
      B(!0);
      try {
        const R = _r(), V = await fetch(`/api/cursor/agents/${e}/followup`, {
          method: "POST",
          headers: {
            "X-CSRF-Token": R,
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            prompt: { text: C.trim() }
          })
        });
        if (!V.ok) {
          const H = await V.json();
          throw new Error(H.error || "Failed to send follow-up");
        }
        h((H) => [
          ...H,
          {
            id: `local-${Date.now()}`,
            type: "user_message",
            text: C.trim()
          }
        ]), E(""), c((H) => H ? { ...H, status: "RUNNING" } : null), $.current || ($.current = setInterval(() => {
          P(), T();
        }, 3e3)), o && o();
      } catch (R) {
        console.error("Follow-up error:", R), x(R instanceof Error ? R.message : "Failed to send follow-up");
      } finally {
        B(!1);
      }
    }
  }, [e, C, N, o]), P = g.useCallback(async () => {
    try {
      const R = _r(), V = await fetch(`/api/cursor/agents/${e}/status`, {
        headers: { "X-CSRF-Token": R }
      });
      if (!V.ok) {
        if (V.status === 404) {
          x("Agent not found. It may have been deleted.");
          return;
        }
        throw new Error("Failed to fetch status");
      }
      const H = await V.json();
      c(H), i && H.status && i(H.status), (H.status === "FINISHED" || H.status === "ERROR" || H.status === "CANCELLED") && $.current && (clearInterval($.current), $.current = null);
    } catch (R) {
      console.error("Status fetch error:", R), x("Failed to fetch agent status");
    }
  }, [e, i]), T = g.useCallback(async () => {
    try {
      const R = _r(), V = await fetch(`/api/cursor/agents/${e}/conversation`, {
        headers: { "X-CSRF-Token": R }
      });
      if (!V.ok) {
        if (V.status === 404) return;
        throw new Error("Failed to fetch conversation");
      }
      const H = await V.json();
      H.messages && H.messages.length > 0 && h(H.messages), F.current && setTimeout(() => {
        F.current && (F.current.scrollTop = F.current.scrollHeight);
      }, 100);
    } catch (R) {
      console.error("Conversation fetch error:", R);
    }
  }, [e]);
  if (g.useEffect(() => (y(!0), x(null), (async () => {
    await Promise.all([P(), T()]), y(!1);
  })(), $.current = setInterval(() => {
    P(), T();
  }, 3e3), () => {
    $.current && clearInterval($.current);
  }), [e, P, T]), g.useEffect(() => {
    F.current && d.length > 0 && (F.current.scrollTop = F.current.scrollHeight);
  }, [d]), m)
    return /* @__PURE__ */ u.jsx("div", { className: "agent-status-panel loading", children: /* @__PURE__ */ u.jsxs("div", { className: "agent-status-header", children: [
      /* @__PURE__ */ u.jsx("div", { className: "agent-spinner" }),
      /* @__PURE__ */ u.jsx("span", { children: "Connecting to Cursor Agent..." })
    ] }) });
  if (k) {
    const R = r === "TO_REVIEW";
    return /* @__PURE__ */ u.jsxs("div", { className: "agent-status-panel error", children: [
      /* @__PURE__ */ u.jsx("div", { className: "agent-status-header", children: /* @__PURE__ */ u.jsxs("span", { className: "text-red-400", children: [
        "❌ ",
        k
      ] }) }),
      R && /* @__PURE__ */ u.jsx("div", { className: "agent-review-actions", style: { padding: "1rem" }, children: I === "validate" ? /* @__PURE__ */ u.jsxs("div", { className: "validate-confirm", children: [
        /* @__PURE__ */ u.jsx("span", { className: "text-sm", children: "Mark as Done? This confirms the work is complete." }),
        /* @__PURE__ */ u.jsxs("div", { className: "validate-confirm-btns", children: [
          /* @__PURE__ */ u.jsx(
            "button",
            {
              className: "btn btn-secondary btn-sm",
              onClick: () => z(null),
              disabled: w,
              children: "Cancel"
            }
          ),
          /* @__PURE__ */ u.jsx(
            "button",
            {
              className: "btn btn-primary btn-sm",
              onClick: le,
              disabled: w,
              children: w ? "Validating..." : "Confirm"
            }
          )
        ] })
      ] }) : /* @__PURE__ */ u.jsx(
        "button",
        {
          className: "validate-btn",
          onClick: () => z("validate"),
          disabled: w,
          children: w ? /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
            /* @__PURE__ */ u.jsx("span", { className: "agent-spinner-small" }),
            "Validating..."
          ] }) : /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
            /* @__PURE__ */ u.jsx("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", className: "w-4 h-4", children: /* @__PURE__ */ u.jsx("path", { d: "M20 6L9 17l-5-5" }) }),
            "Validate & Complete"
          ] })
        }
      ) })
    ] });
  }
  const O = (a == null ? void 0 : a.status) || "QUEUED", M = O === "FINISHED" || r === "TO_REVIEW";
  return /* @__PURE__ */ u.jsxs("div", { className: `agent-status-panel ${O.toLowerCase()}`, children: [
    /* @__PURE__ */ u.jsxs(
      "button",
      {
        className: "agent-status-header",
        onClick: () => p(!j),
        "aria-expanded": j,
        children: [
          /* @__PURE__ */ u.jsxs("div", { className: "agent-status-info", children: [
            /* @__PURE__ */ u.jsx("span", { className: "agent-status-indicator", children: O === "RUNNING" ? /* @__PURE__ */ u.jsx("span", { className: "agent-spinner-small" }) : Ny[O] }),
            /* @__PURE__ */ u.jsx("span", { className: `agent-status-text ${Cy[O]}`, children: _y[O] }),
            ((W = a == null ? void 0 : a.target) == null ? void 0 : W.branchName) && /* @__PURE__ */ u.jsxs("span", { className: "agent-branch", children: [
              /* @__PURE__ */ u.jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", className: "w-3 h-3", children: [
                /* @__PURE__ */ u.jsx("line", { x1: "6", x2: "6", y1: "3", y2: "15" }),
                /* @__PURE__ */ u.jsx("circle", { cx: "18", cy: "6", r: "3" }),
                /* @__PURE__ */ u.jsx("circle", { cx: "6", cy: "18", r: "3" }),
                /* @__PURE__ */ u.jsx("path", { d: "M18 9a9 9 0 0 1-9 9" })
              ] }),
              a.target.branchName
            ] })
          ] }),
          /* @__PURE__ */ u.jsxs("div", { className: "agent-status-actions", children: [
            (O === "RUNNING" || O === "QUEUED") && (I === "stop" ? /* @__PURE__ */ u.jsxs("div", { className: "agent-confirm-inline", onClick: (R) => R.stopPropagation(), children: [
              /* @__PURE__ */ u.jsx("span", { className: "text-xs text-muted-foreground", children: "Stop agent?" }),
              /* @__PURE__ */ u.jsx(
                "button",
                {
                  className: "agent-confirm-btn yes",
                  onClick: A,
                  disabled: f,
                  children: f ? "..." : "Yes"
                }
              ),
              /* @__PURE__ */ u.jsx(
                "button",
                {
                  className: "agent-confirm-btn no",
                  onClick: () => z(null),
                  disabled: f,
                  children: "No"
                }
              )
            ] }) : /* @__PURE__ */ u.jsxs(
              "button",
              {
                className: "agent-stop-btn",
                onClick: (R) => {
                  R.stopPropagation(), z("stop");
                },
                disabled: f,
                title: "Emergency Stop - Stop the AI agent immediately",
                children: [
                  f ? /* @__PURE__ */ u.jsx("span", { className: "agent-spinner-small" }) : /* @__PURE__ */ u.jsx("svg", { viewBox: "0 0 24 24", fill: "currentColor", className: "w-3.5 h-3.5", children: /* @__PURE__ */ u.jsx("rect", { x: "6", y: "6", width: "12", height: "12", rx: "1" }) }),
                  /* @__PURE__ */ u.jsx("span", { children: f ? "Stopping..." : "Stop" })
                ]
              }
            )),
            ((U = a == null ? void 0 : a.target) == null ? void 0 : U.url) && /* @__PURE__ */ u.jsx(
              "a",
              {
                href: a.target.url,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "agent-link",
                onClick: (R) => R.stopPropagation(),
                children: "View in Cursor ↗"
              }
            ),
            ((re = a == null ? void 0 : a.target) == null ? void 0 : re.prUrl) && /* @__PURE__ */ u.jsx(
              "a",
              {
                href: a.target.prUrl,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "agent-link pr",
                onClick: (R) => R.stopPropagation(),
                children: "View PR ↗"
              }
            ),
            /* @__PURE__ */ u.jsx(
              "svg",
              {
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                className: `agent-expand-icon ${j ? "expanded" : ""}`,
                children: /* @__PURE__ */ u.jsx("path", { d: "M6 9l6 6 6-6" })
              }
            )
          ] })
        ]
      }
    ),
    j && /* @__PURE__ */ u.jsxs("div", { className: "agent-status-content", children: [
      (a == null ? void 0 : a.summary) && /* @__PURE__ */ u.jsxs("div", { className: "agent-summary", children: [
        /* @__PURE__ */ u.jsx("h4", { children: "Summary" }),
        /* @__PURE__ */ u.jsx("p", { children: a.summary })
      ] }),
      /* @__PURE__ */ u.jsxs("div", { className: "agent-terminal", ref: F, children: [
        /* @__PURE__ */ u.jsxs("div", { className: "agent-terminal-header", children: [
          /* @__PURE__ */ u.jsxs("div", { className: "terminal-dots", children: [
            /* @__PURE__ */ u.jsx("span", { className: "dot red" }),
            /* @__PURE__ */ u.jsx("span", { className: "dot yellow" }),
            /* @__PURE__ */ u.jsx("span", { className: "dot green" })
          ] }),
          /* @__PURE__ */ u.jsx("span", { className: "terminal-title", children: "Agent Conversation" })
        ] }),
        /* @__PURE__ */ u.jsxs("div", { className: "agent-terminal-body", children: [
          d.length === 0 ? /* @__PURE__ */ u.jsxs("div", { className: "terminal-empty", children: [
            O === "QUEUED" ? "Waiting for agent to start..." : O === "RUNNING" ? "Agent is processing..." : "No conversation data available.",
            /* @__PURE__ */ u.jsx("span", { className: "cursor-blink", children: "▋" })
          ] }) : d.map((R, V) => /* @__PURE__ */ u.jsxs(
            "div",
            {
              className: `terminal-message ${R.type}`,
              children: [
                /* @__PURE__ */ u.jsx("span", { className: "terminal-prompt", children: R.type === "user_message" ? /* @__PURE__ */ u.jsx("span", { className: "prompt-user", children: "You :>" }) : /* @__PURE__ */ u.jsx("span", { className: "prompt-agent", children: "Cloud Agent :>" }) }),
                /* @__PURE__ */ u.jsx("pre", { className: "terminal-text", children: R.text })
              ]
            },
            R.id || V
          )),
          O === "RUNNING" && d.length > 0 && /* @__PURE__ */ u.jsxs("div", { className: "terminal-cursor", children: [
            /* @__PURE__ */ u.jsx("span", { className: "prompt-agent", children: "Cloud Agent :>" }),
            /* @__PURE__ */ u.jsx("span", { className: "cursor-blink", children: "▋" })
          ] })
        ] })
      ] }),
      M && /* @__PURE__ */ u.jsxs("div", { className: "agent-review-actions", children: [
        I === "validate" ? /* @__PURE__ */ u.jsxs("div", { className: "validate-confirm", children: [
          /* @__PURE__ */ u.jsx("span", { className: "text-sm", children: "Mark as Done? This confirms the work is complete." }),
          /* @__PURE__ */ u.jsxs("div", { className: "validate-confirm-btns", children: [
            /* @__PURE__ */ u.jsx(
              "button",
              {
                className: "btn btn-secondary btn-sm",
                onClick: () => z(null),
                disabled: w,
                children: "Cancel"
              }
            ),
            /* @__PURE__ */ u.jsx(
              "button",
              {
                className: "btn btn-primary btn-sm",
                onClick: le,
                disabled: w,
                children: w ? "Validating..." : "Confirm"
              }
            )
          ] })
        ] }) : /* @__PURE__ */ u.jsx(
          "button",
          {
            className: "validate-btn",
            onClick: () => z("validate"),
            disabled: w,
            children: w ? /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
              /* @__PURE__ */ u.jsx("span", { className: "agent-spinner-small" }),
              "Validating..."
            ] }) : /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
              /* @__PURE__ */ u.jsx("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", className: "w-4 h-4", children: /* @__PURE__ */ u.jsx("path", { d: "M20 6L9 17l-5-5" }) }),
              "Validate & Complete"
            ] })
          }
        ),
        /* @__PURE__ */ u.jsxs("div", { className: "agent-followup", children: [
          /* @__PURE__ */ u.jsxs("div", { className: "followup-label", children: [
            /* @__PURE__ */ u.jsx("span", { children: "📝 Request Changes" }),
            /* @__PURE__ */ u.jsx("span", { className: "followup-hint", children: "Send feedback to continue AI work" })
          ] }),
          /* @__PURE__ */ u.jsxs("div", { className: "followup-input-container", children: [
            /* @__PURE__ */ u.jsx(
              "textarea",
              {
                className: "followup-input",
                value: C,
                onChange: (R) => E(R.target.value),
                placeholder: "Please also add unit tests for the translation changes...",
                rows: 3,
                disabled: N,
                onKeyDown: (R) => {
                  R.key === "Enter" && !R.shiftKey && C.trim() && (R.preventDefault(), L());
                }
              }
            ),
            /* @__PURE__ */ u.jsx(
              "button",
              {
                className: "followup-btn",
                onClick: L,
                disabled: !C.trim() || N,
                children: N ? /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
                  /* @__PURE__ */ u.jsx("span", { className: "agent-spinner-small" }),
                  "Sending..."
                ] }) : /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
                  /* @__PURE__ */ u.jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", className: "w-4 h-4", children: [
                    /* @__PURE__ */ u.jsx("path", { d: "M22 2L11 13" }),
                    /* @__PURE__ */ u.jsx("path", { d: "M22 2l-7 20-4-9-9-4 20-7z" })
                  ] }),
                  "Send & Queue"
                ] })
              }
            )
          ] }),
          /* @__PURE__ */ u.jsx("p", { className: "followup-hint-enter", children: "Press Enter to send, Shift+Enter for new line" })
        ] })
      ] }),
      /* @__PURE__ */ u.jsxs("div", { className: "agent-meta", children: [
        ((ue = a == null ? void 0 : a.source) == null ? void 0 : ue.repository) && /* @__PURE__ */ u.jsxs("div", { className: "agent-meta-item", children: [
          /* @__PURE__ */ u.jsx("span", { className: "meta-label", children: "Repository:" }),
          /* @__PURE__ */ u.jsx(
            "a",
            {
              href: `https://${a.source.repository}`,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "meta-link",
              children: a.source.repository.replace("github.com/", "")
            }
          )
        ] }),
        ((D = a == null ? void 0 : a.source) == null ? void 0 : D.ref) && /* @__PURE__ */ u.jsxs("div", { className: "agent-meta-item", children: [
          /* @__PURE__ */ u.jsx("span", { className: "meta-label", children: "Source Branch:" }),
          /* @__PURE__ */ u.jsx("code", { children: a.source.ref })
        ] }),
        (a == null ? void 0 : a.createdAt) && /* @__PURE__ */ u.jsxs("div", { className: "agent-meta-item", children: [
          /* @__PURE__ */ u.jsx("span", { className: "meta-label", children: "Started:" }),
          /* @__PURE__ */ u.jsx("span", { children: new Date(a.createdAt).toLocaleString() })
        ] })
      ] })
    ] })
  ] });
}
function _r() {
  const e = document.querySelector('meta[name="csrf-token"]');
  return (e == null ? void 0 : e.getAttribute("content")) || "";
}
function Ui(e, t = "success") {
  typeof window < "u" && window.showToast && window.showToast(e, t);
}
const Ry = {
  BACKLOG: "Backlog",
  TODO: "To Do",
  HANDLE: "Handle (AI Queue)",
  AI_PROCESSING: "AI Processing",
  TO_REVIEW: "To Review",
  DONE: "Done",
  CANCELLED: "Cancelled"
};
function jy({
  ticket: e,
  projectId: t,
  onClose: n,
  onUpdate: r
}) {
  const [i, s] = g.useState(!1), [o, l] = g.useState(e.title), [a, c] = g.useState(e.description || ""), [d, h] = g.useState(e.priority), [m, y] = g.useState(e.status), [k, x] = g.useState(!1), [j, p] = g.useState(""), [f, v] = g.useState(null), [w, S] = g.useState(null), C = g.useCallback((F) => {
    v(F), F === "FINISHED" && e.status === "AI_PROCESSING" ? r({ ...e, status: "TO_REVIEW" }) : F === "ERROR" && e.status === "AI_PROCESSING" && r({ ...e, status: "TODO" });
  }, [e, r]), E = g.useCallback(async () => {
    if (!o.trim()) {
      p("Title is required");
      return;
    }
    x(!0), p("");
    try {
      const F = Uo(), $ = await fetch(`/api/tickets/${t}/${e.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "X-CSRF-Token": F
        },
        body: JSON.stringify({
          title: o.trim(),
          description: a.trim(),
          priority: d,
          status: m
        })
      });
      if (!$.ok)
        throw new Error("Failed to update ticket");
      const le = await $.json();
      r(le);
    } catch (F) {
      p(F instanceof Error ? F.message : "Failed to update ticket");
    } finally {
      x(!1);
    }
  }, [t, e.id, o, a, d, m, r]), N = g.useCallback(async () => {
    x(!0);
    try {
      const F = Uo();
      if (!(await fetch(`/api/tickets/${t}/${e.id}`, {
        method: "DELETE",
        headers: {
          "X-CSRF-Token": F
        }
      })).ok)
        throw new Error("Failed to delete ticket");
      Ui(`Ticket "${e.title}" deleted successfully`, "success"), r({ ...e, status: "CANCELLED" }), n();
    } catch (F) {
      const $ = F instanceof Error ? F.message : "Failed to delete ticket";
      p($), Ui($, "error");
    } finally {
      x(!1), S(null);
    }
  }, [t, e, r, n]), B = g.useCallback(async () => {
    x(!0);
    try {
      const F = Uo();
      if (!(await fetch(`/api/tickets/${e.id}/archive`, {
        method: "POST",
        headers: {
          "X-CSRF-Token": F
        }
      })).ok)
        throw new Error("Failed to archive ticket");
      Ui(`Ticket "${e.title}" archived`, "success"), r({ ...e, isArchived: !0 }), n();
    } catch (F) {
      const $ = F instanceof Error ? F.message : "Failed to archive ticket";
      p($), Ui($, "error");
    } finally {
      x(!1), S(null);
    }
  }, [e, r, n]), I = g.useCallback(
    (F) => {
      F.key === "Escape" && n();
    },
    [n]
  ), z = e.status === "HANDLE" || e.status === "AI_PROCESSING";
  return /* @__PURE__ */ u.jsx(
    "div",
    {
      className: "modal-overlay",
      onClick: n,
      onKeyDown: I,
      role: "dialog",
      "aria-modal": "true",
      children: /* @__PURE__ */ u.jsxs(
        "div",
        {
          className: "modal-content modal-lg",
          onClick: (F) => F.stopPropagation(),
          children: [
            /* @__PURE__ */ u.jsxs("div", { className: "modal-header", children: [
              /* @__PURE__ */ u.jsxs("div", { className: "flex-1", children: [
                i ? /* @__PURE__ */ u.jsx(
                  "input",
                  {
                    type: "text",
                    className: "form-input text-lg font-semibold",
                    value: o,
                    onChange: (F) => l(F.target.value),
                    autoFocus: !0
                  }
                ) : /* @__PURE__ */ u.jsx("h2", { className: "text-lg font-semibold", children: e.title }),
                /* @__PURE__ */ u.jsxs("div", { className: "flex items-center gap-2 mt-2", children: [
                  /* @__PURE__ */ u.jsx("span", { className: `status-badge status-${e.status.toLowerCase()}`, children: Ry[e.status] }),
                  /* @__PURE__ */ u.jsxs("span", { className: "text-sm text-muted-foreground", children: [
                    "#",
                    e.id.slice(-4)
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ u.jsx(
                "button",
                {
                  className: "modal-close",
                  onClick: n,
                  "aria-label": "Close modal",
                  children: "×"
                }
              )
            ] }),
            /* @__PURE__ */ u.jsxs("div", { className: "modal-body", children: [
              j && /* @__PURE__ */ u.jsx("div", { className: "mb-4 p-3 text-sm rounded-md bg-destructive/10 text-destructive border border-destructive/20", children: j }),
              e.agentId && /* @__PURE__ */ u.jsx("div", { className: "mb-4", children: /* @__PURE__ */ u.jsx(
                Ty,
                {
                  agentId: e.agentId,
                  ticketId: e.id,
                  ticketTitle: e.title,
                  ticketStatus: e.status,
                  onStatusChange: C,
                  onFollowupSent: () => {
                    r({ ...e, status: "AI_PROCESSING" });
                  },
                  onValidate: () => {
                    r({ ...e, status: "DONE" }), n();
                  }
                }
              ) }),
              z && !e.agentId && /* @__PURE__ */ u.jsxs("div", { className: "mb-4 p-4 rounded-md bg-status-processing/10 border border-status-processing/20", children: [
                /* @__PURE__ */ u.jsxs("div", { className: "flex items-center gap-2 text-status-processing", children: [
                  /* @__PURE__ */ u.jsx("div", { className: "ai-spinner" }),
                  /* @__PURE__ */ u.jsx("span", { className: "font-medium", children: e.status === "HANDLE" ? "Queued for AI Processing" : "AI is working on this ticket..." })
                ] }),
                e.status === "AI_PROCESSING" && /* @__PURE__ */ u.jsx("p", { className: "text-sm text-muted-foreground mt-2", children: "The Cursor Agent is implementing this task. Do not modify while processing." })
              ] }),
              e.prLink && !e.agentId && /* @__PURE__ */ u.jsx("div", { className: "mb-4 p-4 rounded-md bg-status-success/10 border border-status-success/20", children: /* @__PURE__ */ u.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ u.jsx("span", { className: "font-medium text-status-success", children: "Pull Request Ready" }),
                /* @__PURE__ */ u.jsx(
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
              e.aiSummary && !e.agentId && /* @__PURE__ */ u.jsxs("div", { className: "mb-4 p-4 rounded-md bg-muted", children: [
                /* @__PURE__ */ u.jsx("h4", { className: "font-medium mb-2", children: "AI Summary" }),
                /* @__PURE__ */ u.jsx("p", { className: "text-sm text-muted-foreground", children: e.aiSummary })
              ] }),
              /* @__PURE__ */ u.jsxs("div", { className: "form-group", children: [
                /* @__PURE__ */ u.jsx("label", { className: "form-label", children: "Description" }),
                i ? /* @__PURE__ */ u.jsx(
                  "textarea",
                  {
                    className: "form-input",
                    value: a,
                    onChange: (F) => c(F.target.value),
                    rows: 6,
                    placeholder: "Add task details, requirements, acceptance criteria..."
                  }
                ) : /* @__PURE__ */ u.jsx("div", { className: "p-3 rounded-md bg-muted min-h-[100px] text-sm whitespace-pre-wrap", children: e.description || /* @__PURE__ */ u.jsx("span", { className: "text-muted-foreground", children: "No description" }) })
              ] }),
              i && /* @__PURE__ */ u.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
                /* @__PURE__ */ u.jsxs("div", { className: "form-group", children: [
                  /* @__PURE__ */ u.jsx("label", { className: "form-label", children: "Priority" }),
                  /* @__PURE__ */ u.jsxs(
                    "select",
                    {
                      className: "form-input",
                      value: d,
                      onChange: (F) => h(F.target.value),
                      children: [
                        /* @__PURE__ */ u.jsx("option", { value: "LOW", children: "Low" }),
                        /* @__PURE__ */ u.jsx("option", { value: "MEDIUM", children: "Medium" }),
                        /* @__PURE__ */ u.jsx("option", { value: "HIGH", children: "High" }),
                        /* @__PURE__ */ u.jsx("option", { value: "URGENT", children: "Urgent" })
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ u.jsxs("div", { className: "form-group", children: [
                  /* @__PURE__ */ u.jsx("label", { className: "form-label", children: "Status" }),
                  /* @__PURE__ */ u.jsxs(
                    "select",
                    {
                      className: "form-input",
                      value: m,
                      onChange: (F) => y(F.target.value),
                      disabled: z,
                      children: [
                        /* @__PURE__ */ u.jsx("option", { value: "BACKLOG", children: "Backlog" }),
                        /* @__PURE__ */ u.jsx("option", { value: "TODO", children: "To Do" }),
                        /* @__PURE__ */ u.jsx("option", { value: "HANDLE", children: "Handle (AI)" }),
                        /* @__PURE__ */ u.jsx("option", { value: "TO_REVIEW", children: "To Review" }),
                        /* @__PURE__ */ u.jsx("option", { value: "DONE", children: "Done" })
                      ]
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ u.jsx("div", { className: "mt-6 pt-4 border-t border-border", children: /* @__PURE__ */ u.jsxs("div", { className: "grid grid-cols-2 gap-4 text-sm", children: [
                /* @__PURE__ */ u.jsxs("div", { children: [
                  /* @__PURE__ */ u.jsx("span", { className: "text-muted-foreground", children: "Created:" }),
                  /* @__PURE__ */ u.jsx("span", { className: "ml-2", children: new Date(e.createdAt).toLocaleDateString() })
                ] }),
                /* @__PURE__ */ u.jsxs("div", { children: [
                  /* @__PURE__ */ u.jsx("span", { className: "text-muted-foreground", children: "Updated:" }),
                  /* @__PURE__ */ u.jsx("span", { className: "ml-2", children: new Date(e.updatedAt).toLocaleDateString() })
                ] }),
                e.assignee && /* @__PURE__ */ u.jsxs("div", { children: [
                  /* @__PURE__ */ u.jsx("span", { className: "text-muted-foreground", children: "Assignee:" }),
                  /* @__PURE__ */ u.jsx("span", { className: "ml-2", children: e.assignee.name })
                ] }),
                e.createdBy && /* @__PURE__ */ u.jsxs("div", { children: [
                  /* @__PURE__ */ u.jsx("span", { className: "text-muted-foreground", children: "Created by:" }),
                  /* @__PURE__ */ u.jsx("span", { className: "ml-2", children: e.createdBy.name })
                ] })
              ] }) })
            ] }),
            w && /* @__PURE__ */ u.jsx("div", { className: "confirm-dialog", children: /* @__PURE__ */ u.jsxs("div", { className: "confirm-dialog-content", children: [
              /* @__PURE__ */ u.jsx("p", { className: "confirm-dialog-message", children: w === "delete" ? `Are you sure you want to delete "${e.title}"? This action cannot be undone.` : `Archive "${e.title}"? It will be moved to the Archive page.` }),
              /* @__PURE__ */ u.jsxs("div", { className: "confirm-dialog-actions", children: [
                /* @__PURE__ */ u.jsx(
                  "button",
                  {
                    type: "button",
                    className: "btn btn-secondary",
                    onClick: () => S(null),
                    disabled: k,
                    children: "Cancel"
                  }
                ),
                /* @__PURE__ */ u.jsx(
                  "button",
                  {
                    type: "button",
                    className: `btn ${w === "delete" ? "btn-destructive" : "btn-primary"}`,
                    onClick: w === "delete" ? N : B,
                    disabled: k,
                    children: k ? "Processing..." : w === "delete" ? "Delete" : "Archive"
                  }
                )
              ] })
            ] }) }),
            /* @__PURE__ */ u.jsx("div", { className: "modal-actions", children: i ? /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
              /* @__PURE__ */ u.jsx(
                "button",
                {
                  type: "button",
                  className: "btn btn-destructive",
                  onClick: () => S("delete"),
                  disabled: k || !!w,
                  title: "Permanently delete this ticket",
                  children: "Delete"
                }
              ),
              /* @__PURE__ */ u.jsxs(
                "button",
                {
                  type: "button",
                  className: "btn btn-secondary",
                  onClick: () => S("archive"),
                  disabled: k || !!w,
                  title: "Archive this ticket",
                  children: [
                    /* @__PURE__ */ u.jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", className: "w-4 h-4 mr-1", children: [
                      /* @__PURE__ */ u.jsx("path", { d: "m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8" }),
                      /* @__PURE__ */ u.jsx("path", { d: "M3.26 8.26 8 3l4 4" }),
                      /* @__PURE__ */ u.jsx("rect", { x: "3", y: "10", width: "18", height: "12", rx: "2" }),
                      /* @__PURE__ */ u.jsx("path", { d: "M10 15h4" })
                    ] }),
                    "Archive"
                  ]
                }
              ),
              /* @__PURE__ */ u.jsx("div", { className: "flex-1" }),
              /* @__PURE__ */ u.jsx(
                "button",
                {
                  type: "button",
                  className: "btn btn-secondary",
                  onClick: () => {
                    s(!1), l(e.title), c(e.description || ""), h(e.priority), y(e.status);
                  },
                  disabled: k,
                  children: "Cancel"
                }
              ),
              /* @__PURE__ */ u.jsx(
                "button",
                {
                  type: "button",
                  className: "btn btn-primary",
                  onClick: E,
                  disabled: k,
                  children: k ? "Saving..." : "Save Changes"
                }
              )
            ] }) : /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
              /* @__PURE__ */ u.jsx(
                "button",
                {
                  type: "button",
                  className: "btn btn-secondary",
                  onClick: n,
                  children: "Close"
                }
              ),
              /* @__PURE__ */ u.jsx(
                "button",
                {
                  type: "button",
                  className: "btn btn-primary",
                  onClick: () => s(!0),
                  disabled: z,
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
function Uo() {
  const e = document.querySelector('meta[name="csrf-token"]');
  return (e == null ? void 0 : e.getAttribute("content")) || "";
}
const Et = /* @__PURE__ */ Object.create(null);
Et.open = "0";
Et.close = "1";
Et.ping = "2";
Et.pong = "3";
Et.message = "4";
Et.upgrade = "5";
Et.noop = "6";
const rs = /* @__PURE__ */ Object.create(null);
Object.keys(Et).forEach((e) => {
  rs[Et[e]] = e;
});
const $l = { type: "error", data: "parser error" }, _h = typeof Blob == "function" || typeof Blob < "u" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]", Th = typeof ArrayBuffer == "function", Rh = (e) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(e) : e && e.buffer instanceof ArrayBuffer, Ya = ({ type: e, data: t }, n, r) => _h && t instanceof Blob ? n ? r(t) : Ac(t, r) : Th && (t instanceof ArrayBuffer || Rh(t)) ? n ? r(t) : Ac(new Blob([t]), r) : r(Et[e] + (t || "")), Ac = (e, t) => {
  const n = new FileReader();
  return n.onload = function() {
    const r = n.result.split(",")[1];
    t("b" + (r || ""));
  }, n.readAsDataURL(e);
};
function Lc(e) {
  return e instanceof Uint8Array ? e : e instanceof ArrayBuffer ? new Uint8Array(e) : new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
}
let $o;
function Dy(e, t) {
  if (_h && e.data instanceof Blob)
    return e.data.arrayBuffer().then(Lc).then(t);
  if (Th && (e.data instanceof ArrayBuffer || Rh(e.data)))
    return t(Lc(e.data));
  Ya(e, !1, (n) => {
    $o || ($o = new TextEncoder()), t($o.encode(n));
  });
}
const Ic = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Ar = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let e = 0; e < Ic.length; e++)
  Ar[Ic.charCodeAt(e)] = e;
const Oy = (e) => {
  let t = e.length * 0.75, n = e.length, r, i = 0, s, o, l, a;
  e[e.length - 1] === "=" && (t--, e[e.length - 2] === "=" && t--);
  const c = new ArrayBuffer(t), d = new Uint8Array(c);
  for (r = 0; r < n; r += 4)
    s = Ar[e.charCodeAt(r)], o = Ar[e.charCodeAt(r + 1)], l = Ar[e.charCodeAt(r + 2)], a = Ar[e.charCodeAt(r + 3)], d[i++] = s << 2 | o >> 4, d[i++] = (o & 15) << 4 | l >> 2, d[i++] = (l & 3) << 6 | a & 63;
  return c;
}, Ay = typeof ArrayBuffer == "function", qa = (e, t) => {
  if (typeof e != "string")
    return {
      type: "message",
      data: jh(e, t)
    };
  const n = e.charAt(0);
  return n === "b" ? {
    type: "message",
    data: Ly(e.substring(1), t)
  } : rs[n] ? e.length > 1 ? {
    type: rs[n],
    data: e.substring(1)
  } : {
    type: rs[n]
  } : $l;
}, Ly = (e, t) => {
  if (Ay) {
    const n = Oy(e);
    return jh(n, t);
  } else
    return { base64: !0, data: e };
}, jh = (e, t) => {
  switch (t) {
    case "blob":
      return e instanceof Blob ? e : new Blob([e]);
    case "arraybuffer":
    default:
      return e instanceof ArrayBuffer ? e : e.buffer;
  }
}, Dh = "", Iy = (e, t) => {
  const n = e.length, r = new Array(n);
  let i = 0;
  e.forEach((s, o) => {
    Ya(s, !1, (l) => {
      r[o] = l, ++i === n && t(r.join(Dh));
    });
  });
}, Py = (e, t) => {
  const n = e.split(Dh), r = [];
  for (let i = 0; i < n.length; i++) {
    const s = qa(n[i], t);
    if (r.push(s), s.type === "error")
      break;
  }
  return r;
};
function by() {
  return new TransformStream({
    transform(e, t) {
      Dy(e, (n) => {
        const r = n.length;
        let i;
        if (r < 126)
          i = new Uint8Array(1), new DataView(i.buffer).setUint8(0, r);
        else if (r < 65536) {
          i = new Uint8Array(3);
          const s = new DataView(i.buffer);
          s.setUint8(0, 126), s.setUint16(1, r);
        } else {
          i = new Uint8Array(9);
          const s = new DataView(i.buffer);
          s.setUint8(0, 127), s.setBigUint64(1, BigInt(r));
        }
        e.data && typeof e.data != "string" && (i[0] |= 128), t.enqueue(i), t.enqueue(n);
      });
    }
  });
}
let Vo;
function $i(e) {
  return e.reduce((t, n) => t + n.length, 0);
}
function Vi(e, t) {
  if (e[0].length === t)
    return e.shift();
  const n = new Uint8Array(t);
  let r = 0;
  for (let i = 0; i < t; i++)
    n[i] = e[0][r++], r === e[0].length && (e.shift(), r = 0);
  return e.length && r < e[0].length && (e[0] = e[0].slice(r)), n;
}
function My(e, t) {
  Vo || (Vo = new TextDecoder());
  const n = [];
  let r = 0, i = -1, s = !1;
  return new TransformStream({
    transform(o, l) {
      for (n.push(o); ; ) {
        if (r === 0) {
          if ($i(n) < 1)
            break;
          const a = Vi(n, 1);
          s = (a[0] & 128) === 128, i = a[0] & 127, i < 126 ? r = 3 : i === 126 ? r = 1 : r = 2;
        } else if (r === 1) {
          if ($i(n) < 2)
            break;
          const a = Vi(n, 2);
          i = new DataView(a.buffer, a.byteOffset, a.length).getUint16(0), r = 3;
        } else if (r === 2) {
          if ($i(n) < 8)
            break;
          const a = Vi(n, 8), c = new DataView(a.buffer, a.byteOffset, a.length), d = c.getUint32(0);
          if (d > Math.pow(2, 21) - 1) {
            l.enqueue($l);
            break;
          }
          i = d * Math.pow(2, 32) + c.getUint32(4), r = 3;
        } else {
          if ($i(n) < i)
            break;
          const a = Vi(n, i);
          l.enqueue(qa(s ? a : Vo.decode(a), t)), r = 0;
        }
        if (i === 0 || i > e) {
          l.enqueue($l);
          break;
        }
      }
    }
  });
}
const Oh = 4;
function fe(e) {
  if (e) return zy(e);
}
function zy(e) {
  for (var t in fe.prototype)
    e[t] = fe.prototype[t];
  return e;
}
fe.prototype.on = fe.prototype.addEventListener = function(e, t) {
  return this._callbacks = this._callbacks || {}, (this._callbacks["$" + e] = this._callbacks["$" + e] || []).push(t), this;
};
fe.prototype.once = function(e, t) {
  function n() {
    this.off(e, n), t.apply(this, arguments);
  }
  return n.fn = t, this.on(e, n), this;
};
fe.prototype.off = fe.prototype.removeListener = fe.prototype.removeAllListeners = fe.prototype.removeEventListener = function(e, t) {
  if (this._callbacks = this._callbacks || {}, arguments.length == 0)
    return this._callbacks = {}, this;
  var n = this._callbacks["$" + e];
  if (!n) return this;
  if (arguments.length == 1)
    return delete this._callbacks["$" + e], this;
  for (var r, i = 0; i < n.length; i++)
    if (r = n[i], r === t || r.fn === t) {
      n.splice(i, 1);
      break;
    }
  return n.length === 0 && delete this._callbacks["$" + e], this;
};
fe.prototype.emit = function(e) {
  this._callbacks = this._callbacks || {};
  for (var t = new Array(arguments.length - 1), n = this._callbacks["$" + e], r = 1; r < arguments.length; r++)
    t[r - 1] = arguments[r];
  if (n) {
    n = n.slice(0);
    for (var r = 0, i = n.length; r < i; ++r)
      n[r].apply(this, t);
  }
  return this;
};
fe.prototype.emitReserved = fe.prototype.emit;
fe.prototype.listeners = function(e) {
  return this._callbacks = this._callbacks || {}, this._callbacks["$" + e] || [];
};
fe.prototype.hasListeners = function(e) {
  return !!this.listeners(e).length;
};
const so = typeof Promise == "function" && typeof Promise.resolve == "function" ? (t) => Promise.resolve().then(t) : (t, n) => n(t, 0), Je = typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")(), Fy = "arraybuffer";
function Ah(e, ...t) {
  return t.reduce((n, r) => (e.hasOwnProperty(r) && (n[r] = e[r]), n), {});
}
const By = Je.setTimeout, Uy = Je.clearTimeout;
function oo(e, t) {
  t.useNativeTimers ? (e.setTimeoutFn = By.bind(Je), e.clearTimeoutFn = Uy.bind(Je)) : (e.setTimeoutFn = Je.setTimeout.bind(Je), e.clearTimeoutFn = Je.clearTimeout.bind(Je));
}
const $y = 1.33;
function Vy(e) {
  return typeof e == "string" ? Wy(e) : Math.ceil((e.byteLength || e.size) * $y);
}
function Wy(e) {
  let t = 0, n = 0;
  for (let r = 0, i = e.length; r < i; r++)
    t = e.charCodeAt(r), t < 128 ? n += 1 : t < 2048 ? n += 2 : t < 55296 || t >= 57344 ? n += 3 : (r++, n += 4);
  return n;
}
function Lh() {
  return Date.now().toString(36).substring(3) + Math.random().toString(36).substring(2, 5);
}
function Hy(e) {
  let t = "";
  for (let n in e)
    e.hasOwnProperty(n) && (t.length && (t += "&"), t += encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
  return t;
}
function Ky(e) {
  let t = {}, n = e.split("&");
  for (let r = 0, i = n.length; r < i; r++) {
    let s = n[r].split("=");
    t[decodeURIComponent(s[0])] = decodeURIComponent(s[1]);
  }
  return t;
}
class Qy extends Error {
  constructor(t, n, r) {
    super(t), this.description = n, this.context = r, this.type = "TransportError";
  }
}
class Ga extends fe {
  /**
   * Transport abstract constructor.
   *
   * @param {Object} opts - options
   * @protected
   */
  constructor(t) {
    super(), this.writable = !1, oo(this, t), this.opts = t, this.query = t.query, this.socket = t.socket, this.supportsBinary = !t.forceBase64;
  }
  /**
   * Emits an error.
   *
   * @param {String} reason
   * @param description
   * @param context - the error context
   * @return {Transport} for chaining
   * @protected
   */
  onError(t, n, r) {
    return super.emitReserved("error", new Qy(t, n, r)), this;
  }
  /**
   * Opens the transport.
   */
  open() {
    return this.readyState = "opening", this.doOpen(), this;
  }
  /**
   * Closes the transport.
   */
  close() {
    return (this.readyState === "opening" || this.readyState === "open") && (this.doClose(), this.onClose()), this;
  }
  /**
   * Sends multiple packets.
   *
   * @param {Array} packets
   */
  send(t) {
    this.readyState === "open" && this.write(t);
  }
  /**
   * Called upon open
   *
   * @protected
   */
  onOpen() {
    this.readyState = "open", this.writable = !0, super.emitReserved("open");
  }
  /**
   * Called with data.
   *
   * @param {String} data
   * @protected
   */
  onData(t) {
    const n = qa(t, this.socket.binaryType);
    this.onPacket(n);
  }
  /**
   * Called with a decoded packet.
   *
   * @protected
   */
  onPacket(t) {
    super.emitReserved("packet", t);
  }
  /**
   * Called upon close.
   *
   * @protected
   */
  onClose(t) {
    this.readyState = "closed", super.emitReserved("close", t);
  }
  /**
   * Pauses the transport, in order not to lose packets during an upgrade.
   *
   * @param onPause
   */
  pause(t) {
  }
  createUri(t, n = {}) {
    return t + "://" + this._hostname() + this._port() + this.opts.path + this._query(n);
  }
  _hostname() {
    const t = this.opts.hostname;
    return t.indexOf(":") === -1 ? t : "[" + t + "]";
  }
  _port() {
    return this.opts.port && (this.opts.secure && +(this.opts.port !== 443) || !this.opts.secure && Number(this.opts.port) !== 80) ? ":" + this.opts.port : "";
  }
  _query(t) {
    const n = Hy(t);
    return n.length ? "?" + n : "";
  }
}
class Xy extends Ga {
  constructor() {
    super(...arguments), this._polling = !1;
  }
  get name() {
    return "polling";
  }
  /**
   * Opens the socket (triggers polling). We write a PING message to determine
   * when the transport is open.
   *
   * @protected
   */
  doOpen() {
    this._poll();
  }
  /**
   * Pauses polling.
   *
   * @param {Function} onPause - callback upon buffers are flushed and transport is paused
   * @package
   */
  pause(t) {
    this.readyState = "pausing";
    const n = () => {
      this.readyState = "paused", t();
    };
    if (this._polling || !this.writable) {
      let r = 0;
      this._polling && (r++, this.once("pollComplete", function() {
        --r || n();
      })), this.writable || (r++, this.once("drain", function() {
        --r || n();
      }));
    } else
      n();
  }
  /**
   * Starts polling cycle.
   *
   * @private
   */
  _poll() {
    this._polling = !0, this.doPoll(), this.emitReserved("poll");
  }
  /**
   * Overloads onData to detect payloads.
   *
   * @protected
   */
  onData(t) {
    const n = (r) => {
      if (this.readyState === "opening" && r.type === "open" && this.onOpen(), r.type === "close")
        return this.onClose({ description: "transport closed by the server" }), !1;
      this.onPacket(r);
    };
    Py(t, this.socket.binaryType).forEach(n), this.readyState !== "closed" && (this._polling = !1, this.emitReserved("pollComplete"), this.readyState === "open" && this._poll());
  }
  /**
   * For polling, send a close packet.
   *
   * @protected
   */
  doClose() {
    const t = () => {
      this.write([{ type: "close" }]);
    };
    this.readyState === "open" ? t() : this.once("open", t);
  }
  /**
   * Writes a packets payload.
   *
   * @param {Array} packets - data packets
   * @protected
   */
  write(t) {
    this.writable = !1, Iy(t, (n) => {
      this.doWrite(n, () => {
        this.writable = !0, this.emitReserved("drain");
      });
    });
  }
  /**
   * Generates uri for connection.
   *
   * @private
   */
  uri() {
    const t = this.opts.secure ? "https" : "http", n = this.query || {};
    return this.opts.timestampRequests !== !1 && (n[this.opts.timestampParam] = Lh()), !this.supportsBinary && !n.sid && (n.b64 = 1), this.createUri(t, n);
  }
}
let Ih = !1;
try {
  Ih = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest();
} catch {
}
const Yy = Ih;
function qy() {
}
class Gy extends Xy {
  /**
   * XHR Polling constructor.
   *
   * @param {Object} opts
   * @package
   */
  constructor(t) {
    if (super(t), typeof location < "u") {
      const n = location.protocol === "https:";
      let r = location.port;
      r || (r = n ? "443" : "80"), this.xd = typeof location < "u" && t.hostname !== location.hostname || r !== t.port;
    }
  }
  /**
   * Sends data.
   *
   * @param {String} data to send.
   * @param {Function} called upon flush.
   * @private
   */
  doWrite(t, n) {
    const r = this.request({
      method: "POST",
      data: t
    });
    r.on("success", n), r.on("error", (i, s) => {
      this.onError("xhr post error", i, s);
    });
  }
  /**
   * Starts a poll cycle.
   *
   * @private
   */
  doPoll() {
    const t = this.request();
    t.on("data", this.onData.bind(this)), t.on("error", (n, r) => {
      this.onError("xhr poll error", n, r);
    }), this.pollXhr = t;
  }
}
class St extends fe {
  /**
   * Request constructor
   *
   * @param {Object} options
   * @package
   */
  constructor(t, n, r) {
    super(), this.createRequest = t, oo(this, r), this._opts = r, this._method = r.method || "GET", this._uri = n, this._data = r.data !== void 0 ? r.data : null, this._create();
  }
  /**
   * Creates the XHR object and sends the request.
   *
   * @private
   */
  _create() {
    var t;
    const n = Ah(this._opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
    n.xdomain = !!this._opts.xd;
    const r = this._xhr = this.createRequest(n);
    try {
      r.open(this._method, this._uri, !0);
      try {
        if (this._opts.extraHeaders) {
          r.setDisableHeaderCheck && r.setDisableHeaderCheck(!0);
          for (let i in this._opts.extraHeaders)
            this._opts.extraHeaders.hasOwnProperty(i) && r.setRequestHeader(i, this._opts.extraHeaders[i]);
        }
      } catch {
      }
      if (this._method === "POST")
        try {
          r.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
        } catch {
        }
      try {
        r.setRequestHeader("Accept", "*/*");
      } catch {
      }
      (t = this._opts.cookieJar) === null || t === void 0 || t.addCookies(r), "withCredentials" in r && (r.withCredentials = this._opts.withCredentials), this._opts.requestTimeout && (r.timeout = this._opts.requestTimeout), r.onreadystatechange = () => {
        var i;
        r.readyState === 3 && ((i = this._opts.cookieJar) === null || i === void 0 || i.parseCookies(
          // @ts-ignore
          r.getResponseHeader("set-cookie")
        )), r.readyState === 4 && (r.status === 200 || r.status === 1223 ? this._onLoad() : this.setTimeoutFn(() => {
          this._onError(typeof r.status == "number" ? r.status : 0);
        }, 0));
      }, r.send(this._data);
    } catch (i) {
      this.setTimeoutFn(() => {
        this._onError(i);
      }, 0);
      return;
    }
    typeof document < "u" && (this._index = St.requestsCount++, St.requests[this._index] = this);
  }
  /**
   * Called upon error.
   *
   * @private
   */
  _onError(t) {
    this.emitReserved("error", t, this._xhr), this._cleanup(!0);
  }
  /**
   * Cleans up house.
   *
   * @private
   */
  _cleanup(t) {
    if (!(typeof this._xhr > "u" || this._xhr === null)) {
      if (this._xhr.onreadystatechange = qy, t)
        try {
          this._xhr.abort();
        } catch {
        }
      typeof document < "u" && delete St.requests[this._index], this._xhr = null;
    }
  }
  /**
   * Called upon load.
   *
   * @private
   */
  _onLoad() {
    const t = this._xhr.responseText;
    t !== null && (this.emitReserved("data", t), this.emitReserved("success"), this._cleanup());
  }
  /**
   * Aborts the request.
   *
   * @package
   */
  abort() {
    this._cleanup();
  }
}
St.requestsCount = 0;
St.requests = {};
if (typeof document < "u") {
  if (typeof attachEvent == "function")
    attachEvent("onunload", Pc);
  else if (typeof addEventListener == "function") {
    const e = "onpagehide" in Je ? "pagehide" : "unload";
    addEventListener(e, Pc, !1);
  }
}
function Pc() {
  for (let e in St.requests)
    St.requests.hasOwnProperty(e) && St.requests[e].abort();
}
const Jy = function() {
  const e = Ph({
    xdomain: !1
  });
  return e && e.responseType !== null;
}();
class Zy extends Gy {
  constructor(t) {
    super(t);
    const n = t && t.forceBase64;
    this.supportsBinary = Jy && !n;
  }
  request(t = {}) {
    return Object.assign(t, { xd: this.xd }, this.opts), new St(Ph, this.uri(), t);
  }
}
function Ph(e) {
  const t = e.xdomain;
  try {
    if (typeof XMLHttpRequest < "u" && (!t || Yy))
      return new XMLHttpRequest();
  } catch {
  }
  if (!t)
    try {
      return new Je[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch {
    }
}
const bh = typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative";
class e0 extends Ga {
  get name() {
    return "websocket";
  }
  doOpen() {
    const t = this.uri(), n = this.opts.protocols, r = bh ? {} : Ah(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
    this.opts.extraHeaders && (r.headers = this.opts.extraHeaders);
    try {
      this.ws = this.createSocket(t, n, r);
    } catch (i) {
      return this.emitReserved("error", i);
    }
    this.ws.binaryType = this.socket.binaryType, this.addEventListeners();
  }
  /**
   * Adds event listeners to the socket
   *
   * @private
   */
  addEventListeners() {
    this.ws.onopen = () => {
      this.opts.autoUnref && this.ws._socket.unref(), this.onOpen();
    }, this.ws.onclose = (t) => this.onClose({
      description: "websocket connection closed",
      context: t
    }), this.ws.onmessage = (t) => this.onData(t.data), this.ws.onerror = (t) => this.onError("websocket error", t);
  }
  write(t) {
    this.writable = !1;
    for (let n = 0; n < t.length; n++) {
      const r = t[n], i = n === t.length - 1;
      Ya(r, this.supportsBinary, (s) => {
        try {
          this.doWrite(r, s);
        } catch {
        }
        i && so(() => {
          this.writable = !0, this.emitReserved("drain");
        }, this.setTimeoutFn);
      });
    }
  }
  doClose() {
    typeof this.ws < "u" && (this.ws.onerror = () => {
    }, this.ws.close(), this.ws = null);
  }
  /**
   * Generates uri for connection.
   *
   * @private
   */
  uri() {
    const t = this.opts.secure ? "wss" : "ws", n = this.query || {};
    return this.opts.timestampRequests && (n[this.opts.timestampParam] = Lh()), this.supportsBinary || (n.b64 = 1), this.createUri(t, n);
  }
}
const Wo = Je.WebSocket || Je.MozWebSocket;
class t0 extends e0 {
  createSocket(t, n, r) {
    return bh ? new Wo(t, n, r) : n ? new Wo(t, n) : new Wo(t);
  }
  doWrite(t, n) {
    this.ws.send(n);
  }
}
class n0 extends Ga {
  get name() {
    return "webtransport";
  }
  doOpen() {
    try {
      this._transport = new WebTransport(this.createUri("https"), this.opts.transportOptions[this.name]);
    } catch (t) {
      return this.emitReserved("error", t);
    }
    this._transport.closed.then(() => {
      this.onClose();
    }).catch((t) => {
      this.onError("webtransport error", t);
    }), this._transport.ready.then(() => {
      this._transport.createBidirectionalStream().then((t) => {
        const n = My(Number.MAX_SAFE_INTEGER, this.socket.binaryType), r = t.readable.pipeThrough(n).getReader(), i = by();
        i.readable.pipeTo(t.writable), this._writer = i.writable.getWriter();
        const s = () => {
          r.read().then(({ done: l, value: a }) => {
            l || (this.onPacket(a), s());
          }).catch((l) => {
          });
        };
        s();
        const o = { type: "open" };
        this.query.sid && (o.data = `{"sid":"${this.query.sid}"}`), this._writer.write(o).then(() => this.onOpen());
      });
    });
  }
  write(t) {
    this.writable = !1;
    for (let n = 0; n < t.length; n++) {
      const r = t[n], i = n === t.length - 1;
      this._writer.write(r).then(() => {
        i && so(() => {
          this.writable = !0, this.emitReserved("drain");
        }, this.setTimeoutFn);
      });
    }
  }
  doClose() {
    var t;
    (t = this._transport) === null || t === void 0 || t.close();
  }
}
const r0 = {
  websocket: t0,
  webtransport: n0,
  polling: Zy
}, i0 = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/, s0 = [
  "source",
  "protocol",
  "authority",
  "userInfo",
  "user",
  "password",
  "host",
  "port",
  "relative",
  "path",
  "directory",
  "file",
  "query",
  "anchor"
];
function Vl(e) {
  if (e.length > 8e3)
    throw "URI too long";
  const t = e, n = e.indexOf("["), r = e.indexOf("]");
  n != -1 && r != -1 && (e = e.substring(0, n) + e.substring(n, r).replace(/:/g, ";") + e.substring(r, e.length));
  let i = i0.exec(e || ""), s = {}, o = 14;
  for (; o--; )
    s[s0[o]] = i[o] || "";
  return n != -1 && r != -1 && (s.source = t, s.host = s.host.substring(1, s.host.length - 1).replace(/;/g, ":"), s.authority = s.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), s.ipv6uri = !0), s.pathNames = o0(s, s.path), s.queryKey = l0(s, s.query), s;
}
function o0(e, t) {
  const n = /\/{2,9}/g, r = t.replace(n, "/").split("/");
  return (t.slice(0, 1) == "/" || t.length === 0) && r.splice(0, 1), t.slice(-1) == "/" && r.splice(r.length - 1, 1), r;
}
function l0(e, t) {
  const n = {};
  return t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(r, i, s) {
    i && (n[i] = s);
  }), n;
}
const Wl = typeof addEventListener == "function" && typeof removeEventListener == "function", is = [];
Wl && addEventListener("offline", () => {
  is.forEach((e) => e());
}, !1);
class rn extends fe {
  /**
   * Socket constructor.
   *
   * @param {String|Object} uri - uri or options
   * @param {Object} opts - options
   */
  constructor(t, n) {
    if (super(), this.binaryType = Fy, this.writeBuffer = [], this._prevBufferLen = 0, this._pingInterval = -1, this._pingTimeout = -1, this._maxPayload = -1, this._pingTimeoutTime = 1 / 0, t && typeof t == "object" && (n = t, t = null), t) {
      const r = Vl(t);
      n.hostname = r.host, n.secure = r.protocol === "https" || r.protocol === "wss", n.port = r.port, r.query && (n.query = r.query);
    } else n.host && (n.hostname = Vl(n.host).host);
    oo(this, n), this.secure = n.secure != null ? n.secure : typeof location < "u" && location.protocol === "https:", n.hostname && !n.port && (n.port = this.secure ? "443" : "80"), this.hostname = n.hostname || (typeof location < "u" ? location.hostname : "localhost"), this.port = n.port || (typeof location < "u" && location.port ? location.port : this.secure ? "443" : "80"), this.transports = [], this._transportsByName = {}, n.transports.forEach((r) => {
      const i = r.prototype.name;
      this.transports.push(i), this._transportsByName[i] = r;
    }), this.opts = Object.assign({
      path: "/engine.io",
      agent: !1,
      withCredentials: !1,
      upgrade: !0,
      timestampParam: "t",
      rememberUpgrade: !1,
      addTrailingSlash: !0,
      rejectUnauthorized: !0,
      perMessageDeflate: {
        threshold: 1024
      },
      transportOptions: {},
      closeOnBeforeunload: !1
    }, n), this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : ""), typeof this.opts.query == "string" && (this.opts.query = Ky(this.opts.query)), Wl && (this.opts.closeOnBeforeunload && (this._beforeunloadEventListener = () => {
      this.transport && (this.transport.removeAllListeners(), this.transport.close());
    }, addEventListener("beforeunload", this._beforeunloadEventListener, !1)), this.hostname !== "localhost" && (this._offlineEventListener = () => {
      this._onClose("transport close", {
        description: "network connection lost"
      });
    }, is.push(this._offlineEventListener))), this.opts.withCredentials && (this._cookieJar = void 0), this._open();
  }
  /**
   * Creates transport of the given type.
   *
   * @param {String} name - transport name
   * @return {Transport}
   * @private
   */
  createTransport(t) {
    const n = Object.assign({}, this.opts.query);
    n.EIO = Oh, n.transport = t, this.id && (n.sid = this.id);
    const r = Object.assign({}, this.opts, {
      query: n,
      socket: this,
      hostname: this.hostname,
      secure: this.secure,
      port: this.port
    }, this.opts.transportOptions[t]);
    return new this._transportsByName[t](r);
  }
  /**
   * Initializes transport to use and starts probe.
   *
   * @private
   */
  _open() {
    if (this.transports.length === 0) {
      this.setTimeoutFn(() => {
        this.emitReserved("error", "No transports available");
      }, 0);
      return;
    }
    const t = this.opts.rememberUpgrade && rn.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1 ? "websocket" : this.transports[0];
    this.readyState = "opening";
    const n = this.createTransport(t);
    n.open(), this.setTransport(n);
  }
  /**
   * Sets the current transport. Disables the existing one (if any).
   *
   * @private
   */
  setTransport(t) {
    this.transport && this.transport.removeAllListeners(), this.transport = t, t.on("drain", this._onDrain.bind(this)).on("packet", this._onPacket.bind(this)).on("error", this._onError.bind(this)).on("close", (n) => this._onClose("transport close", n));
  }
  /**
   * Called when connection is deemed open.
   *
   * @private
   */
  onOpen() {
    this.readyState = "open", rn.priorWebsocketSuccess = this.transport.name === "websocket", this.emitReserved("open"), this.flush();
  }
  /**
   * Handles a packet.
   *
   * @private
   */
  _onPacket(t) {
    if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing")
      switch (this.emitReserved("packet", t), this.emitReserved("heartbeat"), t.type) {
        case "open":
          this.onHandshake(JSON.parse(t.data));
          break;
        case "ping":
          this._sendPacket("pong"), this.emitReserved("ping"), this.emitReserved("pong"), this._resetPingTimeout();
          break;
        case "error":
          const n = new Error("server error");
          n.code = t.data, this._onError(n);
          break;
        case "message":
          this.emitReserved("data", t.data), this.emitReserved("message", t.data);
          break;
      }
  }
  /**
   * Called upon handshake completion.
   *
   * @param {Object} data - handshake obj
   * @private
   */
  onHandshake(t) {
    this.emitReserved("handshake", t), this.id = t.sid, this.transport.query.sid = t.sid, this._pingInterval = t.pingInterval, this._pingTimeout = t.pingTimeout, this._maxPayload = t.maxPayload, this.onOpen(), this.readyState !== "closed" && this._resetPingTimeout();
  }
  /**
   * Sets and resets ping timeout timer based on server pings.
   *
   * @private
   */
  _resetPingTimeout() {
    this.clearTimeoutFn(this._pingTimeoutTimer);
    const t = this._pingInterval + this._pingTimeout;
    this._pingTimeoutTime = Date.now() + t, this._pingTimeoutTimer = this.setTimeoutFn(() => {
      this._onClose("ping timeout");
    }, t), this.opts.autoUnref && this._pingTimeoutTimer.unref();
  }
  /**
   * Called on `drain` event
   *
   * @private
   */
  _onDrain() {
    this.writeBuffer.splice(0, this._prevBufferLen), this._prevBufferLen = 0, this.writeBuffer.length === 0 ? this.emitReserved("drain") : this.flush();
  }
  /**
   * Flush write buffers.
   *
   * @private
   */
  flush() {
    if (this.readyState !== "closed" && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
      const t = this._getWritablePackets();
      this.transport.send(t), this._prevBufferLen = t.length, this.emitReserved("flush");
    }
  }
  /**
   * Ensure the encoded size of the writeBuffer is below the maxPayload value sent by the server (only for HTTP
   * long-polling)
   *
   * @private
   */
  _getWritablePackets() {
    if (!(this._maxPayload && this.transport.name === "polling" && this.writeBuffer.length > 1))
      return this.writeBuffer;
    let n = 1;
    for (let r = 0; r < this.writeBuffer.length; r++) {
      const i = this.writeBuffer[r].data;
      if (i && (n += Vy(i)), r > 0 && n > this._maxPayload)
        return this.writeBuffer.slice(0, r);
      n += 2;
    }
    return this.writeBuffer;
  }
  /**
   * Checks whether the heartbeat timer has expired but the socket has not yet been notified.
   *
   * Note: this method is private for now because it does not really fit the WebSocket API, but if we put it in the
   * `write()` method then the message would not be buffered by the Socket.IO client.
   *
   * @return {boolean}
   * @private
   */
  /* private */
  _hasPingExpired() {
    if (!this._pingTimeoutTime)
      return !0;
    const t = Date.now() > this._pingTimeoutTime;
    return t && (this._pingTimeoutTime = 0, so(() => {
      this._onClose("ping timeout");
    }, this.setTimeoutFn)), t;
  }
  /**
   * Sends a message.
   *
   * @param {String} msg - message.
   * @param {Object} options.
   * @param {Function} fn - callback function.
   * @return {Socket} for chaining.
   */
  write(t, n, r) {
    return this._sendPacket("message", t, n, r), this;
  }
  /**
   * Sends a message. Alias of {@link Socket#write}.
   *
   * @param {String} msg - message.
   * @param {Object} options.
   * @param {Function} fn - callback function.
   * @return {Socket} for chaining.
   */
  send(t, n, r) {
    return this._sendPacket("message", t, n, r), this;
  }
  /**
   * Sends a packet.
   *
   * @param {String} type: packet type.
   * @param {String} data.
   * @param {Object} options.
   * @param {Function} fn - callback function.
   * @private
   */
  _sendPacket(t, n, r, i) {
    if (typeof n == "function" && (i = n, n = void 0), typeof r == "function" && (i = r, r = null), this.readyState === "closing" || this.readyState === "closed")
      return;
    r = r || {}, r.compress = r.compress !== !1;
    const s = {
      type: t,
      data: n,
      options: r
    };
    this.emitReserved("packetCreate", s), this.writeBuffer.push(s), i && this.once("flush", i), this.flush();
  }
  /**
   * Closes the connection.
   */
  close() {
    const t = () => {
      this._onClose("forced close"), this.transport.close();
    }, n = () => {
      this.off("upgrade", n), this.off("upgradeError", n), t();
    }, r = () => {
      this.once("upgrade", n), this.once("upgradeError", n);
    };
    return (this.readyState === "opening" || this.readyState === "open") && (this.readyState = "closing", this.writeBuffer.length ? this.once("drain", () => {
      this.upgrading ? r() : t();
    }) : this.upgrading ? r() : t()), this;
  }
  /**
   * Called upon transport error
   *
   * @private
   */
  _onError(t) {
    if (rn.priorWebsocketSuccess = !1, this.opts.tryAllTransports && this.transports.length > 1 && this.readyState === "opening")
      return this.transports.shift(), this._open();
    this.emitReserved("error", t), this._onClose("transport error", t);
  }
  /**
   * Called upon transport close.
   *
   * @private
   */
  _onClose(t, n) {
    if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing") {
      if (this.clearTimeoutFn(this._pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), Wl && (this._beforeunloadEventListener && removeEventListener("beforeunload", this._beforeunloadEventListener, !1), this._offlineEventListener)) {
        const r = is.indexOf(this._offlineEventListener);
        r !== -1 && is.splice(r, 1);
      }
      this.readyState = "closed", this.id = null, this.emitReserved("close", t, n), this.writeBuffer = [], this._prevBufferLen = 0;
    }
  }
}
rn.protocol = Oh;
class a0 extends rn {
  constructor() {
    super(...arguments), this._upgrades = [];
  }
  onOpen() {
    if (super.onOpen(), this.readyState === "open" && this.opts.upgrade)
      for (let t = 0; t < this._upgrades.length; t++)
        this._probe(this._upgrades[t]);
  }
  /**
   * Probes a transport.
   *
   * @param {String} name - transport name
   * @private
   */
  _probe(t) {
    let n = this.createTransport(t), r = !1;
    rn.priorWebsocketSuccess = !1;
    const i = () => {
      r || (n.send([{ type: "ping", data: "probe" }]), n.once("packet", (h) => {
        if (!r)
          if (h.type === "pong" && h.data === "probe") {
            if (this.upgrading = !0, this.emitReserved("upgrading", n), !n)
              return;
            rn.priorWebsocketSuccess = n.name === "websocket", this.transport.pause(() => {
              r || this.readyState !== "closed" && (d(), this.setTransport(n), n.send([{ type: "upgrade" }]), this.emitReserved("upgrade", n), n = null, this.upgrading = !1, this.flush());
            });
          } else {
            const m = new Error("probe error");
            m.transport = n.name, this.emitReserved("upgradeError", m);
          }
      }));
    };
    function s() {
      r || (r = !0, d(), n.close(), n = null);
    }
    const o = (h) => {
      const m = new Error("probe error: " + h);
      m.transport = n.name, s(), this.emitReserved("upgradeError", m);
    };
    function l() {
      o("transport closed");
    }
    function a() {
      o("socket closed");
    }
    function c(h) {
      n && h.name !== n.name && s();
    }
    const d = () => {
      n.removeListener("open", i), n.removeListener("error", o), n.removeListener("close", l), this.off("close", a), this.off("upgrading", c);
    };
    n.once("open", i), n.once("error", o), n.once("close", l), this.once("close", a), this.once("upgrading", c), this._upgrades.indexOf("webtransport") !== -1 && t !== "webtransport" ? this.setTimeoutFn(() => {
      r || n.open();
    }, 200) : n.open();
  }
  onHandshake(t) {
    this._upgrades = this._filterUpgrades(t.upgrades), super.onHandshake(t);
  }
  /**
   * Filters upgrades, returning only those matching client transports.
   *
   * @param {Array} upgrades - server upgrades
   * @private
   */
  _filterUpgrades(t) {
    const n = [];
    for (let r = 0; r < t.length; r++)
      ~this.transports.indexOf(t[r]) && n.push(t[r]);
    return n;
  }
}
let u0 = class extends a0 {
  constructor(t, n = {}) {
    const r = typeof t == "object" ? t : n;
    (!r.transports || r.transports && typeof r.transports[0] == "string") && (r.transports = (r.transports || ["polling", "websocket", "webtransport"]).map((i) => r0[i]).filter((i) => !!i)), super(t, r);
  }
};
function c0(e, t = "", n) {
  let r = e;
  n = n || typeof location < "u" && location, e == null && (e = n.protocol + "//" + n.host), typeof e == "string" && (e.charAt(0) === "/" && (e.charAt(1) === "/" ? e = n.protocol + e : e = n.host + e), /^(https?|wss?):\/\//.test(e) || (typeof n < "u" ? e = n.protocol + "//" + e : e = "https://" + e), r = Vl(e)), r.port || (/^(http|ws)$/.test(r.protocol) ? r.port = "80" : /^(http|ws)s$/.test(r.protocol) && (r.port = "443")), r.path = r.path || "/";
  const s = r.host.indexOf(":") !== -1 ? "[" + r.host + "]" : r.host;
  return r.id = r.protocol + "://" + s + ":" + r.port + t, r.href = r.protocol + "://" + s + (n && n.port === r.port ? "" : ":" + r.port), r;
}
const d0 = typeof ArrayBuffer == "function", f0 = (e) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(e) : e.buffer instanceof ArrayBuffer, Mh = Object.prototype.toString, h0 = typeof Blob == "function" || typeof Blob < "u" && Mh.call(Blob) === "[object BlobConstructor]", p0 = typeof File == "function" || typeof File < "u" && Mh.call(File) === "[object FileConstructor]";
function Ja(e) {
  return d0 && (e instanceof ArrayBuffer || f0(e)) || h0 && e instanceof Blob || p0 && e instanceof File;
}
function ss(e, t) {
  if (!e || typeof e != "object")
    return !1;
  if (Array.isArray(e)) {
    for (let n = 0, r = e.length; n < r; n++)
      if (ss(e[n]))
        return !0;
    return !1;
  }
  if (Ja(e))
    return !0;
  if (e.toJSON && typeof e.toJSON == "function" && arguments.length === 1)
    return ss(e.toJSON(), !0);
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && ss(e[n]))
      return !0;
  return !1;
}
function m0(e) {
  const t = [], n = e.data, r = e;
  return r.data = Hl(n, t), r.attachments = t.length, { packet: r, buffers: t };
}
function Hl(e, t) {
  if (!e)
    return e;
  if (Ja(e)) {
    const n = { _placeholder: !0, num: t.length };
    return t.push(e), n;
  } else if (Array.isArray(e)) {
    const n = new Array(e.length);
    for (let r = 0; r < e.length; r++)
      n[r] = Hl(e[r], t);
    return n;
  } else if (typeof e == "object" && !(e instanceof Date)) {
    const n = {};
    for (const r in e)
      Object.prototype.hasOwnProperty.call(e, r) && (n[r] = Hl(e[r], t));
    return n;
  }
  return e;
}
function g0(e, t) {
  return e.data = Kl(e.data, t), delete e.attachments, e;
}
function Kl(e, t) {
  if (!e)
    return e;
  if (e && e._placeholder === !0) {
    if (typeof e.num == "number" && e.num >= 0 && e.num < t.length)
      return t[e.num];
    throw new Error("illegal attachments");
  } else if (Array.isArray(e))
    for (let n = 0; n < e.length; n++)
      e[n] = Kl(e[n], t);
  else if (typeof e == "object")
    for (const n in e)
      Object.prototype.hasOwnProperty.call(e, n) && (e[n] = Kl(e[n], t));
  return e;
}
const v0 = [
  "connect",
  "connect_error",
  "disconnect",
  "disconnecting",
  "newListener",
  "removeListener"
  // used by the Node.js EventEmitter
], y0 = 5;
var X;
(function(e) {
  e[e.CONNECT = 0] = "CONNECT", e[e.DISCONNECT = 1] = "DISCONNECT", e[e.EVENT = 2] = "EVENT", e[e.ACK = 3] = "ACK", e[e.CONNECT_ERROR = 4] = "CONNECT_ERROR", e[e.BINARY_EVENT = 5] = "BINARY_EVENT", e[e.BINARY_ACK = 6] = "BINARY_ACK";
})(X || (X = {}));
class w0 {
  /**
   * Encoder constructor
   *
   * @param {function} replacer - custom replacer to pass down to JSON.parse
   */
  constructor(t) {
    this.replacer = t;
  }
  /**
   * Encode a packet as a single string if non-binary, or as a
   * buffer sequence, depending on packet type.
   *
   * @param {Object} obj - packet object
   */
  encode(t) {
    return (t.type === X.EVENT || t.type === X.ACK) && ss(t) ? this.encodeAsBinary({
      type: t.type === X.EVENT ? X.BINARY_EVENT : X.BINARY_ACK,
      nsp: t.nsp,
      data: t.data,
      id: t.id
    }) : [this.encodeAsString(t)];
  }
  /**
   * Encode packet as string.
   */
  encodeAsString(t) {
    let n = "" + t.type;
    return (t.type === X.BINARY_EVENT || t.type === X.BINARY_ACK) && (n += t.attachments + "-"), t.nsp && t.nsp !== "/" && (n += t.nsp + ","), t.id != null && (n += t.id), t.data != null && (n += JSON.stringify(t.data, this.replacer)), n;
  }
  /**
   * Encode packet as 'buffer sequence' by removing blobs, and
   * deconstructing packet into object with placeholders and
   * a list of buffers.
   */
  encodeAsBinary(t) {
    const n = m0(t), r = this.encodeAsString(n.packet), i = n.buffers;
    return i.unshift(r), i;
  }
}
function bc(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
class Za extends fe {
  /**
   * Decoder constructor
   *
   * @param {function} reviver - custom reviver to pass down to JSON.stringify
   */
  constructor(t) {
    super(), this.reviver = t;
  }
  /**
   * Decodes an encoded packet string into packet JSON.
   *
   * @param {String} obj - encoded packet
   */
  add(t) {
    let n;
    if (typeof t == "string") {
      if (this.reconstructor)
        throw new Error("got plaintext data when reconstructing a packet");
      n = this.decodeString(t);
      const r = n.type === X.BINARY_EVENT;
      r || n.type === X.BINARY_ACK ? (n.type = r ? X.EVENT : X.ACK, this.reconstructor = new x0(n), n.attachments === 0 && super.emitReserved("decoded", n)) : super.emitReserved("decoded", n);
    } else if (Ja(t) || t.base64)
      if (this.reconstructor)
        n = this.reconstructor.takeBinaryData(t), n && (this.reconstructor = null, super.emitReserved("decoded", n));
      else
        throw new Error("got binary data when not reconstructing a packet");
    else
      throw new Error("Unknown type: " + t);
  }
  /**
   * Decode a packet String (JSON data)
   *
   * @param {String} str
   * @return {Object} packet
   */
  decodeString(t) {
    let n = 0;
    const r = {
      type: Number(t.charAt(0))
    };
    if (X[r.type] === void 0)
      throw new Error("unknown packet type " + r.type);
    if (r.type === X.BINARY_EVENT || r.type === X.BINARY_ACK) {
      const s = n + 1;
      for (; t.charAt(++n) !== "-" && n != t.length; )
        ;
      const o = t.substring(s, n);
      if (o != Number(o) || t.charAt(n) !== "-")
        throw new Error("Illegal attachments");
      r.attachments = Number(o);
    }
    if (t.charAt(n + 1) === "/") {
      const s = n + 1;
      for (; ++n && !(t.charAt(n) === "," || n === t.length); )
        ;
      r.nsp = t.substring(s, n);
    } else
      r.nsp = "/";
    const i = t.charAt(n + 1);
    if (i !== "" && Number(i) == i) {
      const s = n + 1;
      for (; ++n; ) {
        const o = t.charAt(n);
        if (o == null || Number(o) != o) {
          --n;
          break;
        }
        if (n === t.length)
          break;
      }
      r.id = Number(t.substring(s, n + 1));
    }
    if (t.charAt(++n)) {
      const s = this.tryParse(t.substr(n));
      if (Za.isPayloadValid(r.type, s))
        r.data = s;
      else
        throw new Error("invalid payload");
    }
    return r;
  }
  tryParse(t) {
    try {
      return JSON.parse(t, this.reviver);
    } catch {
      return !1;
    }
  }
  static isPayloadValid(t, n) {
    switch (t) {
      case X.CONNECT:
        return bc(n);
      case X.DISCONNECT:
        return n === void 0;
      case X.CONNECT_ERROR:
        return typeof n == "string" || bc(n);
      case X.EVENT:
      case X.BINARY_EVENT:
        return Array.isArray(n) && (typeof n[0] == "number" || typeof n[0] == "string" && v0.indexOf(n[0]) === -1);
      case X.ACK:
      case X.BINARY_ACK:
        return Array.isArray(n);
    }
  }
  /**
   * Deallocates a parser's resources
   */
  destroy() {
    this.reconstructor && (this.reconstructor.finishedReconstruction(), this.reconstructor = null);
  }
}
class x0 {
  constructor(t) {
    this.packet = t, this.buffers = [], this.reconPack = t;
  }
  /**
   * Method to be called when binary data received from connection
   * after a BINARY_EVENT packet.
   *
   * @param {Buffer | ArrayBuffer} binData - the raw binary data received
   * @return {null | Object} returns null if more binary data is expected or
   *   a reconstructed packet object if all buffers have been received.
   */
  takeBinaryData(t) {
    if (this.buffers.push(t), this.buffers.length === this.reconPack.attachments) {
      const n = g0(this.reconPack, this.buffers);
      return this.finishedReconstruction(), n;
    }
    return null;
  }
  /**
   * Cleans up binary packet reconstruction variables.
   */
  finishedReconstruction() {
    this.reconPack = null, this.buffers = [];
  }
}
const k0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Decoder: Za,
  Encoder: w0,
  get PacketType() {
    return X;
  },
  protocol: y0
}, Symbol.toStringTag, { value: "Module" }));
function ot(e, t, n) {
  return e.on(t, n), function() {
    e.off(t, n);
  };
}
const S0 = Object.freeze({
  connect: 1,
  connect_error: 1,
  disconnect: 1,
  disconnecting: 1,
  // EventEmitter reserved events: https://nodejs.org/api/events.html#events_event_newlistener
  newListener: 1,
  removeListener: 1
});
class zh extends fe {
  /**
   * `Socket` constructor.
   */
  constructor(t, n, r) {
    super(), this.connected = !1, this.recovered = !1, this.receiveBuffer = [], this.sendBuffer = [], this._queue = [], this._queueSeq = 0, this.ids = 0, this.acks = {}, this.flags = {}, this.io = t, this.nsp = n, r && r.auth && (this.auth = r.auth), this._opts = Object.assign({}, r), this.io._autoConnect && this.open();
  }
  /**
   * Whether the socket is currently disconnected
   *
   * @example
   * const socket = io();
   *
   * socket.on("connect", () => {
   *   console.log(socket.disconnected); // false
   * });
   *
   * socket.on("disconnect", () => {
   *   console.log(socket.disconnected); // true
   * });
   */
  get disconnected() {
    return !this.connected;
  }
  /**
   * Subscribe to open, close and packet events
   *
   * @private
   */
  subEvents() {
    if (this.subs)
      return;
    const t = this.io;
    this.subs = [
      ot(t, "open", this.onopen.bind(this)),
      ot(t, "packet", this.onpacket.bind(this)),
      ot(t, "error", this.onerror.bind(this)),
      ot(t, "close", this.onclose.bind(this))
    ];
  }
  /**
   * Whether the Socket will try to reconnect when its Manager connects or reconnects.
   *
   * @example
   * const socket = io();
   *
   * console.log(socket.active); // true
   *
   * socket.on("disconnect", (reason) => {
   *   if (reason === "io server disconnect") {
   *     // the disconnection was initiated by the server, you need to manually reconnect
   *     console.log(socket.active); // false
   *   }
   *   // else the socket will automatically try to reconnect
   *   console.log(socket.active); // true
   * });
   */
  get active() {
    return !!this.subs;
  }
  /**
   * "Opens" the socket.
   *
   * @example
   * const socket = io({
   *   autoConnect: false
   * });
   *
   * socket.connect();
   */
  connect() {
    return this.connected ? this : (this.subEvents(), this.io._reconnecting || this.io.open(), this.io._readyState === "open" && this.onopen(), this);
  }
  /**
   * Alias for {@link connect()}.
   */
  open() {
    return this.connect();
  }
  /**
   * Sends a `message` event.
   *
   * This method mimics the WebSocket.send() method.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/send
   *
   * @example
   * socket.send("hello");
   *
   * // this is equivalent to
   * socket.emit("message", "hello");
   *
   * @return self
   */
  send(...t) {
    return t.unshift("message"), this.emit.apply(this, t), this;
  }
  /**
   * Override `emit`.
   * If the event is in `events`, it's emitted normally.
   *
   * @example
   * socket.emit("hello", "world");
   *
   * // all serializable datastructures are supported (no need to call JSON.stringify)
   * socket.emit("hello", 1, "2", { 3: ["4"], 5: Uint8Array.from([6]) });
   *
   * // with an acknowledgement from the server
   * socket.emit("hello", "world", (val) => {
   *   // ...
   * });
   *
   * @return self
   */
  emit(t, ...n) {
    var r, i, s;
    if (S0.hasOwnProperty(t))
      throw new Error('"' + t.toString() + '" is a reserved event name');
    if (n.unshift(t), this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
      return this._addToQueue(n), this;
    const o = {
      type: X.EVENT,
      data: n
    };
    if (o.options = {}, o.options.compress = this.flags.compress !== !1, typeof n[n.length - 1] == "function") {
      const d = this.ids++, h = n.pop();
      this._registerAckCallback(d, h), o.id = d;
    }
    const l = (i = (r = this.io.engine) === null || r === void 0 ? void 0 : r.transport) === null || i === void 0 ? void 0 : i.writable, a = this.connected && !(!((s = this.io.engine) === null || s === void 0) && s._hasPingExpired());
    return this.flags.volatile && !l || (a ? (this.notifyOutgoingListeners(o), this.packet(o)) : this.sendBuffer.push(o)), this.flags = {}, this;
  }
  /**
   * @private
   */
  _registerAckCallback(t, n) {
    var r;
    const i = (r = this.flags.timeout) !== null && r !== void 0 ? r : this._opts.ackTimeout;
    if (i === void 0) {
      this.acks[t] = n;
      return;
    }
    const s = this.io.setTimeoutFn(() => {
      delete this.acks[t];
      for (let l = 0; l < this.sendBuffer.length; l++)
        this.sendBuffer[l].id === t && this.sendBuffer.splice(l, 1);
      n.call(this, new Error("operation has timed out"));
    }, i), o = (...l) => {
      this.io.clearTimeoutFn(s), n.apply(this, l);
    };
    o.withError = !0, this.acks[t] = o;
  }
  /**
   * Emits an event and waits for an acknowledgement
   *
   * @example
   * // without timeout
   * const response = await socket.emitWithAck("hello", "world");
   *
   * // with a specific timeout
   * try {
   *   const response = await socket.timeout(1000).emitWithAck("hello", "world");
   * } catch (err) {
   *   // the server did not acknowledge the event in the given delay
   * }
   *
   * @return a Promise that will be fulfilled when the server acknowledges the event
   */
  emitWithAck(t, ...n) {
    return new Promise((r, i) => {
      const s = (o, l) => o ? i(o) : r(l);
      s.withError = !0, n.push(s), this.emit(t, ...n);
    });
  }
  /**
   * Add the packet to the queue.
   * @param args
   * @private
   */
  _addToQueue(t) {
    let n;
    typeof t[t.length - 1] == "function" && (n = t.pop());
    const r = {
      id: this._queueSeq++,
      tryCount: 0,
      pending: !1,
      args: t,
      flags: Object.assign({ fromQueue: !0 }, this.flags)
    };
    t.push((i, ...s) => r !== this._queue[0] ? void 0 : (i !== null ? r.tryCount > this._opts.retries && (this._queue.shift(), n && n(i)) : (this._queue.shift(), n && n(null, ...s)), r.pending = !1, this._drainQueue())), this._queue.push(r), this._drainQueue();
  }
  /**
   * Send the first packet of the queue, and wait for an acknowledgement from the server.
   * @param force - whether to resend a packet that has not been acknowledged yet
   *
   * @private
   */
  _drainQueue(t = !1) {
    if (!this.connected || this._queue.length === 0)
      return;
    const n = this._queue[0];
    n.pending && !t || (n.pending = !0, n.tryCount++, this.flags = n.flags, this.emit.apply(this, n.args));
  }
  /**
   * Sends a packet.
   *
   * @param packet
   * @private
   */
  packet(t) {
    t.nsp = this.nsp, this.io._packet(t);
  }
  /**
   * Called upon engine `open`.
   *
   * @private
   */
  onopen() {
    typeof this.auth == "function" ? this.auth((t) => {
      this._sendConnectPacket(t);
    }) : this._sendConnectPacket(this.auth);
  }
  /**
   * Sends a CONNECT packet to initiate the Socket.IO session.
   *
   * @param data
   * @private
   */
  _sendConnectPacket(t) {
    this.packet({
      type: X.CONNECT,
      data: this._pid ? Object.assign({ pid: this._pid, offset: this._lastOffset }, t) : t
    });
  }
  /**
   * Called upon engine or manager `error`.
   *
   * @param err
   * @private
   */
  onerror(t) {
    this.connected || this.emitReserved("connect_error", t);
  }
  /**
   * Called upon engine `close`.
   *
   * @param reason
   * @param description
   * @private
   */
  onclose(t, n) {
    this.connected = !1, delete this.id, this.emitReserved("disconnect", t, n), this._clearAcks();
  }
  /**
   * Clears the acknowledgement handlers upon disconnection, since the client will never receive an acknowledgement from
   * the server.
   *
   * @private
   */
  _clearAcks() {
    Object.keys(this.acks).forEach((t) => {
      if (!this.sendBuffer.some((r) => String(r.id) === t)) {
        const r = this.acks[t];
        delete this.acks[t], r.withError && r.call(this, new Error("socket has been disconnected"));
      }
    });
  }
  /**
   * Called with socket packet.
   *
   * @param packet
   * @private
   */
  onpacket(t) {
    if (t.nsp === this.nsp)
      switch (t.type) {
        case X.CONNECT:
          t.data && t.data.sid ? this.onconnect(t.data.sid, t.data.pid) : this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
          break;
        case X.EVENT:
        case X.BINARY_EVENT:
          this.onevent(t);
          break;
        case X.ACK:
        case X.BINARY_ACK:
          this.onack(t);
          break;
        case X.DISCONNECT:
          this.ondisconnect();
          break;
        case X.CONNECT_ERROR:
          this.destroy();
          const r = new Error(t.data.message);
          r.data = t.data.data, this.emitReserved("connect_error", r);
          break;
      }
  }
  /**
   * Called upon a server event.
   *
   * @param packet
   * @private
   */
  onevent(t) {
    const n = t.data || [];
    t.id != null && n.push(this.ack(t.id)), this.connected ? this.emitEvent(n) : this.receiveBuffer.push(Object.freeze(n));
  }
  emitEvent(t) {
    if (this._anyListeners && this._anyListeners.length) {
      const n = this._anyListeners.slice();
      for (const r of n)
        r.apply(this, t);
    }
    super.emit.apply(this, t), this._pid && t.length && typeof t[t.length - 1] == "string" && (this._lastOffset = t[t.length - 1]);
  }
  /**
   * Produces an ack callback to emit with an event.
   *
   * @private
   */
  ack(t) {
    const n = this;
    let r = !1;
    return function(...i) {
      r || (r = !0, n.packet({
        type: X.ACK,
        id: t,
        data: i
      }));
    };
  }
  /**
   * Called upon a server acknowledgement.
   *
   * @param packet
   * @private
   */
  onack(t) {
    const n = this.acks[t.id];
    typeof n == "function" && (delete this.acks[t.id], n.withError && t.data.unshift(null), n.apply(this, t.data));
  }
  /**
   * Called upon server connect.
   *
   * @private
   */
  onconnect(t, n) {
    this.id = t, this.recovered = n && this._pid === n, this._pid = n, this.connected = !0, this.emitBuffered(), this.emitReserved("connect"), this._drainQueue(!0);
  }
  /**
   * Emit buffered events (received and emitted).
   *
   * @private
   */
  emitBuffered() {
    this.receiveBuffer.forEach((t) => this.emitEvent(t)), this.receiveBuffer = [], this.sendBuffer.forEach((t) => {
      this.notifyOutgoingListeners(t), this.packet(t);
    }), this.sendBuffer = [];
  }
  /**
   * Called upon server disconnect.
   *
   * @private
   */
  ondisconnect() {
    this.destroy(), this.onclose("io server disconnect");
  }
  /**
   * Called upon forced client/server side disconnections,
   * this method ensures the manager stops tracking us and
   * that reconnections don't get triggered for this.
   *
   * @private
   */
  destroy() {
    this.subs && (this.subs.forEach((t) => t()), this.subs = void 0), this.io._destroy(this);
  }
  /**
   * Disconnects the socket manually. In that case, the socket will not try to reconnect.
   *
   * If this is the last active Socket instance of the {@link Manager}, the low-level connection will be closed.
   *
   * @example
   * const socket = io();
   *
   * socket.on("disconnect", (reason) => {
   *   // console.log(reason); prints "io client disconnect"
   * });
   *
   * socket.disconnect();
   *
   * @return self
   */
  disconnect() {
    return this.connected && this.packet({ type: X.DISCONNECT }), this.destroy(), this.connected && this.onclose("io client disconnect"), this;
  }
  /**
   * Alias for {@link disconnect()}.
   *
   * @return self
   */
  close() {
    return this.disconnect();
  }
  /**
   * Sets the compress flag.
   *
   * @example
   * socket.compress(false).emit("hello");
   *
   * @param compress - if `true`, compresses the sending data
   * @return self
   */
  compress(t) {
    return this.flags.compress = t, this;
  }
  /**
   * Sets a modifier for a subsequent event emission that the event message will be dropped when this socket is not
   * ready to send messages.
   *
   * @example
   * socket.volatile.emit("hello"); // the server may or may not receive it
   *
   * @returns self
   */
  get volatile() {
    return this.flags.volatile = !0, this;
  }
  /**
   * Sets a modifier for a subsequent event emission that the callback will be called with an error when the
   * given number of milliseconds have elapsed without an acknowledgement from the server:
   *
   * @example
   * socket.timeout(5000).emit("my-event", (err) => {
   *   if (err) {
   *     // the server did not acknowledge the event in the given delay
   *   }
   * });
   *
   * @returns self
   */
  timeout(t) {
    return this.flags.timeout = t, this;
  }
  /**
   * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
   * callback.
   *
   * @example
   * socket.onAny((event, ...args) => {
   *   console.log(`got ${event}`);
   * });
   *
   * @param listener
   */
  onAny(t) {
    return this._anyListeners = this._anyListeners || [], this._anyListeners.push(t), this;
  }
  /**
   * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
   * callback. The listener is added to the beginning of the listeners array.
   *
   * @example
   * socket.prependAny((event, ...args) => {
   *   console.log(`got event ${event}`);
   * });
   *
   * @param listener
   */
  prependAny(t) {
    return this._anyListeners = this._anyListeners || [], this._anyListeners.unshift(t), this;
  }
  /**
   * Removes the listener that will be fired when any event is emitted.
   *
   * @example
   * const catchAllListener = (event, ...args) => {
   *   console.log(`got event ${event}`);
   * }
   *
   * socket.onAny(catchAllListener);
   *
   * // remove a specific listener
   * socket.offAny(catchAllListener);
   *
   * // or remove all listeners
   * socket.offAny();
   *
   * @param listener
   */
  offAny(t) {
    if (!this._anyListeners)
      return this;
    if (t) {
      const n = this._anyListeners;
      for (let r = 0; r < n.length; r++)
        if (t === n[r])
          return n.splice(r, 1), this;
    } else
      this._anyListeners = [];
    return this;
  }
  /**
   * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
   * e.g. to remove listeners.
   */
  listenersAny() {
    return this._anyListeners || [];
  }
  /**
   * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
   * callback.
   *
   * Note: acknowledgements sent to the server are not included.
   *
   * @example
   * socket.onAnyOutgoing((event, ...args) => {
   *   console.log(`sent event ${event}`);
   * });
   *
   * @param listener
   */
  onAnyOutgoing(t) {
    return this._anyOutgoingListeners = this._anyOutgoingListeners || [], this._anyOutgoingListeners.push(t), this;
  }
  /**
   * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
   * callback. The listener is added to the beginning of the listeners array.
   *
   * Note: acknowledgements sent to the server are not included.
   *
   * @example
   * socket.prependAnyOutgoing((event, ...args) => {
   *   console.log(`sent event ${event}`);
   * });
   *
   * @param listener
   */
  prependAnyOutgoing(t) {
    return this._anyOutgoingListeners = this._anyOutgoingListeners || [], this._anyOutgoingListeners.unshift(t), this;
  }
  /**
   * Removes the listener that will be fired when any event is emitted.
   *
   * @example
   * const catchAllListener = (event, ...args) => {
   *   console.log(`sent event ${event}`);
   * }
   *
   * socket.onAnyOutgoing(catchAllListener);
   *
   * // remove a specific listener
   * socket.offAnyOutgoing(catchAllListener);
   *
   * // or remove all listeners
   * socket.offAnyOutgoing();
   *
   * @param [listener] - the catch-all listener (optional)
   */
  offAnyOutgoing(t) {
    if (!this._anyOutgoingListeners)
      return this;
    if (t) {
      const n = this._anyOutgoingListeners;
      for (let r = 0; r < n.length; r++)
        if (t === n[r])
          return n.splice(r, 1), this;
    } else
      this._anyOutgoingListeners = [];
    return this;
  }
  /**
   * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
   * e.g. to remove listeners.
   */
  listenersAnyOutgoing() {
    return this._anyOutgoingListeners || [];
  }
  /**
   * Notify the listeners for each packet sent
   *
   * @param packet
   *
   * @private
   */
  notifyOutgoingListeners(t) {
    if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
      const n = this._anyOutgoingListeners.slice();
      for (const r of n)
        r.apply(this, t.data);
    }
  }
}
function fr(e) {
  e = e || {}, this.ms = e.min || 100, this.max = e.max || 1e4, this.factor = e.factor || 2, this.jitter = e.jitter > 0 && e.jitter <= 1 ? e.jitter : 0, this.attempts = 0;
}
fr.prototype.duration = function() {
  var e = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var t = Math.random(), n = Math.floor(t * this.jitter * e);
    e = Math.floor(t * 10) & 1 ? e + n : e - n;
  }
  return Math.min(e, this.max) | 0;
};
fr.prototype.reset = function() {
  this.attempts = 0;
};
fr.prototype.setMin = function(e) {
  this.ms = e;
};
fr.prototype.setMax = function(e) {
  this.max = e;
};
fr.prototype.setJitter = function(e) {
  this.jitter = e;
};
class Ql extends fe {
  constructor(t, n) {
    var r;
    super(), this.nsps = {}, this.subs = [], t && typeof t == "object" && (n = t, t = void 0), n = n || {}, n.path = n.path || "/socket.io", this.opts = n, oo(this, n), this.reconnection(n.reconnection !== !1), this.reconnectionAttempts(n.reconnectionAttempts || 1 / 0), this.reconnectionDelay(n.reconnectionDelay || 1e3), this.reconnectionDelayMax(n.reconnectionDelayMax || 5e3), this.randomizationFactor((r = n.randomizationFactor) !== null && r !== void 0 ? r : 0.5), this.backoff = new fr({
      min: this.reconnectionDelay(),
      max: this.reconnectionDelayMax(),
      jitter: this.randomizationFactor()
    }), this.timeout(n.timeout == null ? 2e4 : n.timeout), this._readyState = "closed", this.uri = t;
    const i = n.parser || k0;
    this.encoder = new i.Encoder(), this.decoder = new i.Decoder(), this._autoConnect = n.autoConnect !== !1, this._autoConnect && this.open();
  }
  reconnection(t) {
    return arguments.length ? (this._reconnection = !!t, t || (this.skipReconnect = !0), this) : this._reconnection;
  }
  reconnectionAttempts(t) {
    return t === void 0 ? this._reconnectionAttempts : (this._reconnectionAttempts = t, this);
  }
  reconnectionDelay(t) {
    var n;
    return t === void 0 ? this._reconnectionDelay : (this._reconnectionDelay = t, (n = this.backoff) === null || n === void 0 || n.setMin(t), this);
  }
  randomizationFactor(t) {
    var n;
    return t === void 0 ? this._randomizationFactor : (this._randomizationFactor = t, (n = this.backoff) === null || n === void 0 || n.setJitter(t), this);
  }
  reconnectionDelayMax(t) {
    var n;
    return t === void 0 ? this._reconnectionDelayMax : (this._reconnectionDelayMax = t, (n = this.backoff) === null || n === void 0 || n.setMax(t), this);
  }
  timeout(t) {
    return arguments.length ? (this._timeout = t, this) : this._timeout;
  }
  /**
   * Starts trying to reconnect if reconnection is enabled and we have not
   * started reconnecting yet
   *
   * @private
   */
  maybeReconnectOnOpen() {
    !this._reconnecting && this._reconnection && this.backoff.attempts === 0 && this.reconnect();
  }
  /**
   * Sets the current transport `socket`.
   *
   * @param {Function} fn - optional, callback
   * @return self
   * @public
   */
  open(t) {
    if (~this._readyState.indexOf("open"))
      return this;
    this.engine = new u0(this.uri, this.opts);
    const n = this.engine, r = this;
    this._readyState = "opening", this.skipReconnect = !1;
    const i = ot(n, "open", function() {
      r.onopen(), t && t();
    }), s = (l) => {
      this.cleanup(), this._readyState = "closed", this.emitReserved("error", l), t ? t(l) : this.maybeReconnectOnOpen();
    }, o = ot(n, "error", s);
    if (this._timeout !== !1) {
      const l = this._timeout, a = this.setTimeoutFn(() => {
        i(), s(new Error("timeout")), n.close();
      }, l);
      this.opts.autoUnref && a.unref(), this.subs.push(() => {
        this.clearTimeoutFn(a);
      });
    }
    return this.subs.push(i), this.subs.push(o), this;
  }
  /**
   * Alias for open()
   *
   * @return self
   * @public
   */
  connect(t) {
    return this.open(t);
  }
  /**
   * Called upon transport open.
   *
   * @private
   */
  onopen() {
    this.cleanup(), this._readyState = "open", this.emitReserved("open");
    const t = this.engine;
    this.subs.push(
      ot(t, "ping", this.onping.bind(this)),
      ot(t, "data", this.ondata.bind(this)),
      ot(t, "error", this.onerror.bind(this)),
      ot(t, "close", this.onclose.bind(this)),
      // @ts-ignore
      ot(this.decoder, "decoded", this.ondecoded.bind(this))
    );
  }
  /**
   * Called upon a ping.
   *
   * @private
   */
  onping() {
    this.emitReserved("ping");
  }
  /**
   * Called with data.
   *
   * @private
   */
  ondata(t) {
    try {
      this.decoder.add(t);
    } catch (n) {
      this.onclose("parse error", n);
    }
  }
  /**
   * Called when parser fully decodes a packet.
   *
   * @private
   */
  ondecoded(t) {
    so(() => {
      this.emitReserved("packet", t);
    }, this.setTimeoutFn);
  }
  /**
   * Called upon socket error.
   *
   * @private
   */
  onerror(t) {
    this.emitReserved("error", t);
  }
  /**
   * Creates a new socket for the given `nsp`.
   *
   * @return {Socket}
   * @public
   */
  socket(t, n) {
    let r = this.nsps[t];
    return r ? this._autoConnect && !r.active && r.connect() : (r = new zh(this, t, n), this.nsps[t] = r), r;
  }
  /**
   * Called upon a socket close.
   *
   * @param socket
   * @private
   */
  _destroy(t) {
    const n = Object.keys(this.nsps);
    for (const r of n)
      if (this.nsps[r].active)
        return;
    this._close();
  }
  /**
   * Writes a packet.
   *
   * @param packet
   * @private
   */
  _packet(t) {
    const n = this.encoder.encode(t);
    for (let r = 0; r < n.length; r++)
      this.engine.write(n[r], t.options);
  }
  /**
   * Clean up transport subscriptions and packet buffer.
   *
   * @private
   */
  cleanup() {
    this.subs.forEach((t) => t()), this.subs.length = 0, this.decoder.destroy();
  }
  /**
   * Close the current socket.
   *
   * @private
   */
  _close() {
    this.skipReconnect = !0, this._reconnecting = !1, this.onclose("forced close");
  }
  /**
   * Alias for close()
   *
   * @private
   */
  disconnect() {
    return this._close();
  }
  /**
   * Called when:
   *
   * - the low-level engine is closed
   * - the parser encountered a badly formatted packet
   * - all sockets are disconnected
   *
   * @private
   */
  onclose(t, n) {
    var r;
    this.cleanup(), (r = this.engine) === null || r === void 0 || r.close(), this.backoff.reset(), this._readyState = "closed", this.emitReserved("close", t, n), this._reconnection && !this.skipReconnect && this.reconnect();
  }
  /**
   * Attempt a reconnection.
   *
   * @private
   */
  reconnect() {
    if (this._reconnecting || this.skipReconnect)
      return this;
    const t = this;
    if (this.backoff.attempts >= this._reconnectionAttempts)
      this.backoff.reset(), this.emitReserved("reconnect_failed"), this._reconnecting = !1;
    else {
      const n = this.backoff.duration();
      this._reconnecting = !0;
      const r = this.setTimeoutFn(() => {
        t.skipReconnect || (this.emitReserved("reconnect_attempt", t.backoff.attempts), !t.skipReconnect && t.open((i) => {
          i ? (t._reconnecting = !1, t.reconnect(), this.emitReserved("reconnect_error", i)) : t.onreconnect();
        }));
      }, n);
      this.opts.autoUnref && r.unref(), this.subs.push(() => {
        this.clearTimeoutFn(r);
      });
    }
  }
  /**
   * Called upon successful reconnect.
   *
   * @private
   */
  onreconnect() {
    const t = this.backoff.attempts;
    this._reconnecting = !1, this.backoff.reset(), this.emitReserved("reconnect", t);
  }
}
const Tr = {};
function os(e, t) {
  typeof e == "object" && (t = e, e = void 0), t = t || {};
  const n = c0(e, t.path || "/socket.io"), r = n.source, i = n.id, s = n.path, o = Tr[i] && s in Tr[i].nsps, l = t.forceNew || t["force new connection"] || t.multiplex === !1 || o;
  let a;
  return l ? a = new Ql(r, t) : (Tr[i] || (Tr[i] = new Ql(r, t)), a = Tr[i]), n.query && !t.query && (t.query = n.queryKey), a.socket(n.path, t);
}
Object.assign(os, {
  Manager: Ql,
  Socket: zh,
  io: os,
  connect: os
});
const dn = {
  JOIN_PROJECT: "project:join",
  LEAVE_PROJECT: "project:leave",
  TICKET_CREATED: "ticket:created",
  TICKET_UPDATED: "ticket:updated",
  TICKET_DELETED: "ticket:deleted",
  TICKET_MOVED: "ticket:moved",
  BOARD_REFRESH: "board:refresh"
};
function E0({
  projectId: e,
  onTicketCreated: t,
  onTicketUpdated: n,
  onTicketDeleted: r,
  onTicketMoved: i,
  onBoardRefresh: s
}) {
  const o = g.useRef(null), l = g.useRef(!1);
  return g.useEffect(() => {
    if (!e) return;
    const c = os({
      transports: ["websocket", "polling"],
      reconnectionAttempts: 5,
      reconnectionDelay: 1e3
    });
    return o.current = c, c.on("connect", () => {
      console.log("[WebSocket] Connected"), l.current = !0, c.emit(dn.JOIN_PROJECT, e);
    }), c.on("disconnect", (d) => {
      console.log("[WebSocket] Disconnected:", d), l.current = !1;
    }), c.on("connect_error", (d) => {
      console.error("[WebSocket] Connection error:", d);
    }), c.on(dn.TICKET_CREATED, (d) => {
      console.log("[WebSocket] Ticket created:", d.id), t == null || t(d);
    }), c.on(dn.TICKET_UPDATED, (d) => {
      console.log("[WebSocket] Ticket updated:", d.id), n == null || n(d);
    }), c.on(dn.TICKET_DELETED, (d) => {
      console.log("[WebSocket] Ticket deleted:", d.id), r == null || r(d);
    }), c.on(dn.TICKET_MOVED, (d) => {
      console.log("[WebSocket] Ticket moved:", d.id, d.fromStatus, "->", d.toStatus), i == null || i(d);
    }), c.on(dn.BOARD_REFRESH, () => {
      console.log("[WebSocket] Board refresh requested"), s == null || s();
    }), () => {
      c.connected && c.emit(dn.LEAVE_PROJECT, e), c.disconnect(), o.current = null, l.current = !1;
    };
  }, [e, t, n, r, i, s]), { isConnected: g.useCallback(() => l.current, []) };
}
const C0 = [
  { id: "BACKLOG", title: "Backlog", icon: "📋" },
  { id: "TODO", title: "To Do", icon: "📝" },
  { id: "HANDLE", title: "Handle", icon: "🤖" },
  { id: "AI_PROCESSING", title: "AI Processing", icon: "⚡" },
  { id: "TO_REVIEW", title: "To Review", icon: "👀" },
  { id: "DONE", title: "Done", icon: "✅" }
];
function N0() {
  const [e, t] = g.useState(null), [n, r] = g.useState(null), [i, s] = g.useState(null), [o, l] = g.useState(!1), [a, c] = g.useState(0), [d, h] = g.useState("BACKLOG"), m = g.useRef(!1);
  g.useEffect(() => {
    const A = document.getElementById("board-state");
    if (A != null && A.textContent)
      try {
        const P = JSON.parse(A.textContent);
        t(P), c(P.archivedCount || 0);
      } catch (P) {
        console.error("Failed to parse board state:", P);
      }
    const L = document.getElementById("new-ticket-btn");
    return L && L.addEventListener("click", () => l(!0)), document.querySelectorAll(".tab-btn").forEach((P) => {
      P.addEventListener("click", (T) => {
        const O = T.target.dataset.column;
        O && (h(O), document.querySelectorAll(".tab-btn").forEach((M) => {
          M.classList.remove("bg-muted"), M.classList.add("hover:bg-muted");
        }), T.target.classList.add("bg-muted"), T.target.classList.remove("hover:bg-muted"));
      });
    }), () => {
      L && L.removeEventListener("click", () => l(!0));
    };
  }, []);
  const y = g.useCallback((A) => {
    m.current || (t((L) => !L || L.tickets.some((P) => P.id === A.id) ? L : {
      ...L,
      tickets: [...L.tickets, A]
    }), vt(`New ticket: ${A.title}`, "success"));
  }, []), k = g.useCallback((A) => {
    m.current || t((L) => L && {
      ...L,
      tickets: L.tickets.map(
        (P) => P.id === A.id ? { ...P, ...A } : P
      )
    });
  }, []), x = g.useCallback((A) => {
    m.current || t((L) => L && {
      ...L,
      tickets: L.tickets.filter((P) => P.id !== A.id)
    });
  }, []), j = g.useCallback((A) => {
    m.current || (t((L) => L && {
      ...L,
      tickets: L.tickets.map(
        (P) => P.id === A.id ? { ...P, status: A.toStatus, position: A.position } : P
      )
    }), vt(`Ticket moved to ${A.toStatus.replace("_", " ")}`, "success"));
  }, []), p = g.useCallback(async () => {
    if (!(!(e != null && e.projectId) || m.current))
      try {
        const A = await fetch(`/project/${e.projectId}/board/state`);
        if (A.ok) {
          const L = await A.json();
          t(L);
        }
      } catch (A) {
        console.error("Failed to refresh board:", A);
      }
  }, [e == null ? void 0 : e.projectId]);
  E0({
    projectId: (e == null ? void 0 : e.projectId) || null,
    onTicketCreated: y,
    onTicketUpdated: k,
    onTicketDeleted: x,
    onTicketMoved: j,
    onBoardRefresh: p
  }), g.useEffect(() => {
    if (!(e != null && e.projectId)) return;
    const A = setInterval(async () => {
      if (!m.current)
        try {
          const L = await fetch(`/project/${e.projectId}/board/state`);
          if (!L.ok) return;
          const P = await L.json();
          (P.tickets.length !== e.tickets.length || P.tickets.some((O) => {
            const M = e.tickets.find((W) => W.id === O.id);
            return !M || M.status !== O.status || M.agentStatus !== O.agentStatus || M.prLink !== O.prLink;
          })) && t(P);
        } catch (L) {
          console.debug("Fallback sync failed:", L);
        }
    }, 1e4);
    return () => clearInterval(A);
  }, [e == null ? void 0 : e.projectId, e == null ? void 0 : e.tickets]);
  const f = Lg(
    yc(Qa, {
      activationConstraint: { distance: 8 }
    }),
    yc(Ha, {
      coordinateGetter: dy
    })
  ), v = g.useCallback(
    (A) => {
      m.current = !0;
      const L = A.active.id, P = e == null ? void 0 : e.tickets.find((T) => T.id === L);
      P && r(P);
    },
    [e]
  ), w = g.useCallback((A) => {
  }, []), S = g.useCallback(
    async (A) => {
      const { active: L, over: P } = A;
      if (r(null), m.current = !1, !P || !e) return;
      const T = L.id, O = P.id, M = e.tickets.find((W) => W.id === T);
      if (!(!M || M.status === O)) {
        t((W) => W && {
          ...W,
          tickets: W.tickets.map(
            (U) => U.id === T ? { ...U, status: O } : U
          )
        }), O === "HANDLE" && vt(`Ticket #${M.id.slice(-4)} dispatched to Cursor Agent`, "warning");
        try {
          const W = Ho();
          if (!(await fetch(
            `/api/tickets/${e.projectId}/${T}/status`,
            {
              method: "PATCH",
              headers: {
                "Content-Type": "application/json",
                "X-CSRF-Token": W
              },
              body: JSON.stringify({ status: O })
            }
          )).ok)
            throw new Error("Failed to update ticket status");
          O === "HANDLE" && vt("AI agent started processing", "success");
        } catch (W) {
          console.error("Failed to update ticket:", W), vt("Failed to update ticket", "error"), t((U) => U && {
            ...U,
            tickets: U.tickets.map(
              (re) => re.id === T ? { ...re, status: M.status } : re
            )
          });
        }
      }
    },
    [e]
  ), C = g.useCallback((A) => {
    s(A);
  }, []), E = g.useCallback((A) => {
    t((L) => L && {
      ...L,
      tickets: L.tickets.map(
        (P) => P.id === A.id ? A : P
      )
    }), s(null);
  }, []), N = g.useCallback((A) => {
    t((L) => L && {
      ...L,
      tickets: [...L.tickets, A]
    }), l(!1), vt("Ticket created successfully", "success");
  }, []), B = g.useCallback(async (A) => {
    if (e)
      try {
        if (!(await fetch(`/api/tickets/${A.id}/archive`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-CSRF-Token": Ho()
          }
        })).ok)
          throw new Error("Failed to archive ticket");
        t((P) => P && {
          ...P,
          tickets: P.tickets.filter((T) => T.id !== A.id)
        }), c((P) => P + 1), vt(`"${A.title}" archived`, "success");
      } catch (L) {
        console.error("Failed to archive ticket:", L), vt("Failed to archive ticket", "error");
      }
  }, [e]), [I, z] = g.useState(null), F = g.useCallback((A) => {
    z(A);
  }, []), $ = g.useCallback(async () => {
    if (!(!e || !I))
      try {
        if (!(await fetch(`/api/tickets/${e.projectId}/${I.id}`, {
          method: "DELETE",
          headers: {
            "X-CSRF-Token": Ho()
          }
        })).ok)
          throw new Error("Failed to delete ticket");
        t((L) => L && {
          ...L,
          tickets: L.tickets.filter((P) => P.id !== I.id)
        }), vt(`"${I.title}" deleted`, "success");
      } catch (A) {
        console.error("Failed to delete ticket:", A), vt("Failed to delete ticket", "error");
      } finally {
        z(null);
      }
  }, [e, I]), le = g.useCallback((A) => {
    A.isArchived ? (t((L) => L && {
      ...L,
      tickets: L.tickets.filter((P) => P.id !== A.id)
    }), c((L) => L + 1), s(null)) : E(A);
  }, [E]);
  return g.useEffect(() => {
    const A = document.getElementById("archive-count");
    A && (A.textContent = String(a), A.classList.toggle("hidden", a === 0));
  }, [a]), e ? /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
    /* @__PURE__ */ u.jsxs(
      Ov,
      {
        sensors: f,
        collisionDetection: th,
        onDragStart: v,
        onDragOver: w,
        onDragEnd: S,
        children: [
          /* @__PURE__ */ u.jsx("div", { className: "kanban-container", children: C0.map((A) => /* @__PURE__ */ u.jsx(
            wy,
            {
              id: A.id,
              title: A.title,
              icon: A.icon,
              tickets: e.tickets.filter((L) => L.status === A.id),
              isActive: d === A.id,
              onTicketClick: C,
              onArchive: A.id === "DONE" ? B : void 0,
              onDelete: A.id !== "HANDLE" && A.id !== "AI_PROCESSING" ? F : void 0
            },
            A.id
          )) }),
          I && /* @__PURE__ */ u.jsx("div", { className: "modal-overlay", onClick: () => z(null), children: /* @__PURE__ */ u.jsxs("div", { className: "delete-confirm-modal", onClick: (A) => A.stopPropagation(), children: [
            /* @__PURE__ */ u.jsx("h3", { children: "Delete Ticket?" }),
            /* @__PURE__ */ u.jsxs("p", { children: [
              'Are you sure you want to delete "',
              I.title,
              '"?'
            ] }),
            /* @__PURE__ */ u.jsx("p", { className: "text-sm text-muted-foreground", children: "This action cannot be undone." }),
            /* @__PURE__ */ u.jsxs("div", { className: "delete-confirm-actions", children: [
              /* @__PURE__ */ u.jsx("button", { className: "btn btn-secondary", onClick: () => z(null), children: "Cancel" }),
              /* @__PURE__ */ u.jsx("button", { className: "btn btn-destructive", onClick: $, children: "Delete" })
            ] })
          ] }) }),
          /* @__PURE__ */ u.jsx(Yv, { children: n ? /* @__PURE__ */ u.jsx(
            Nh,
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
    o && /* @__PURE__ */ u.jsx(
      Ey,
      {
        projectId: e.projectId,
        projectName: e.projectName,
        branchPresets: e.branchPresets || [],
        defaultBranch: e.defaultBranch || "main",
        members: e.members || [],
        onClose: () => l(!1),
        onSubmit: N
      }
    ),
    i && /* @__PURE__ */ u.jsx(
      jy,
      {
        ticket: i,
        projectId: e.projectId,
        onClose: () => s(null),
        onUpdate: le
      }
    )
  ] }) : /* @__PURE__ */ u.jsx("div", { className: "flex items-center justify-center h-full", children: /* @__PURE__ */ u.jsx("div", { className: "ai-spinner" }) });
}
function Ho() {
  const e = document.querySelector('meta[name="csrf-token"]');
  return (e == null ? void 0 : e.getAttribute("content")) || "";
}
function vt(e, t = "success") {
  typeof window < "u" && window.showToast && window.showToast(e, t);
}
function Mc() {
  const e = document.getElementById("kanban-board");
  if (!e) {
    console.warn("Kanban board container not found");
    return;
  }
  Ko.createRoot(e).render(
    /* @__PURE__ */ u.jsx(te.StrictMode, { children: /* @__PURE__ */ u.jsx(N0, {}) })
  );
}
document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", Mc) : Mc();
