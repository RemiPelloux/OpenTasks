function Yf(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ec = { exports: {} }, wi = {}, tc = { exports: {} }, V = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var el = Symbol.for("react.element"), Jf = Symbol.for("react.portal"), Zf = Symbol.for("react.fragment"), qf = Symbol.for("react.strict_mode"), ep = Symbol.for("react.profiler"), tp = Symbol.for("react.provider"), np = Symbol.for("react.context"), rp = Symbol.for("react.forward_ref"), lp = Symbol.for("react.suspense"), ip = Symbol.for("react.memo"), op = Symbol.for("react.lazy"), Ta = Symbol.iterator;
function sp(e) {
  return e === null || typeof e != "object" ? null : (e = Ta && e[Ta] || e["@@iterator"], typeof e == "function" ? e : null);
}
var nc = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, rc = Object.assign, lc = {};
function Zn(e, t, n) {
  this.props = e, this.context = t, this.refs = lc, this.updater = n || nc;
}
Zn.prototype.isReactComponent = {};
Zn.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
Zn.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function ic() {
}
ic.prototype = Zn.prototype;
function ws(e, t, n) {
  this.props = e, this.context = t, this.refs = lc, this.updater = n || nc;
}
var ks = ws.prototype = new ic();
ks.constructor = ws;
rc(ks, Zn.prototype);
ks.isPureReactComponent = !0;
var Ia = Array.isArray, oc = Object.prototype.hasOwnProperty, Ss = { current: null }, sc = { key: !0, ref: !0, __self: !0, __source: !0 };
function ac(e, t, n) {
  var r, l = {}, i = null, o = null;
  if (t != null) for (r in t.ref !== void 0 && (o = t.ref), t.key !== void 0 && (i = "" + t.key), t) oc.call(t, r) && !sc.hasOwnProperty(r) && (l[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) l.children = n;
  else if (1 < s) {
    for (var a = Array(s), c = 0; c < s; c++) a[c] = arguments[c + 2];
    l.children = a;
  }
  if (e && e.defaultProps) for (r in s = e.defaultProps, s) l[r] === void 0 && (l[r] = s[r]);
  return { $$typeof: el, type: e, key: i, ref: o, props: l, _owner: Ss.current };
}
function ap(e, t) {
  return { $$typeof: el, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Cs(e) {
  return typeof e == "object" && e !== null && e.$$typeof === el;
}
function up(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var La = /\/+/g;
function Wi(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? up("" + e.key) : t.toString(36);
}
function Ll(e, t, n, r, l) {
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
        case el:
        case Jf:
          o = !0;
      }
  }
  if (o) return o = e, l = l(o), e = r === "" ? "." + Wi(o, 0) : r, Ia(l) ? (n = "", e != null && (n = e.replace(La, "$&/") + "/"), Ll(l, t, n, "", function(c) {
    return c;
  })) : l != null && (Cs(l) && (l = ap(l, n + (!l.key || o && o.key === l.key ? "" : ("" + l.key).replace(La, "$&/") + "/") + e)), t.push(l)), 1;
  if (o = 0, r = r === "" ? "." : r + ":", Ia(e)) for (var s = 0; s < e.length; s++) {
    i = e[s];
    var a = r + Wi(i, s);
    o += Ll(i, t, n, a, l);
  }
  else if (a = sp(e), typeof a == "function") for (e = a.call(e), s = 0; !(i = e.next()).done; ) i = i.value, a = r + Wi(i, s++), o += Ll(i, t, n, a, l);
  else if (i === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return o;
}
function dl(e, t, n) {
  if (e == null) return e;
  var r = [], l = 0;
  return Ll(e, r, "", "", function(i) {
    return t.call(n, i, l++);
  }), r;
}
function cp(e) {
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
var Re = { current: null }, Pl = { transition: null }, dp = { ReactCurrentDispatcher: Re, ReactCurrentBatchConfig: Pl, ReactCurrentOwner: Ss };
function uc() {
  throw Error("act(...) is not supported in production builds of React.");
}
V.Children = { map: dl, forEach: function(e, t, n) {
  dl(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return dl(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return dl(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!Cs(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
V.Component = Zn;
V.Fragment = Zf;
V.Profiler = ep;
V.PureComponent = ws;
V.StrictMode = qf;
V.Suspense = lp;
V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = dp;
V.act = uc;
V.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = rc({}, e.props), l = e.key, i = e.ref, o = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, o = Ss.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps) var s = e.type.defaultProps;
    for (a in t) oc.call(t, a) && !sc.hasOwnProperty(a) && (r[a] = t[a] === void 0 && s !== void 0 ? s[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    s = Array(a);
    for (var c = 0; c < a; c++) s[c] = arguments[c + 2];
    r.children = s;
  }
  return { $$typeof: el, type: e.type, key: l, ref: i, props: r, _owner: o };
};
V.createContext = function(e) {
  return e = { $$typeof: np, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: tp, _context: e }, e.Consumer = e;
};
V.createElement = ac;
V.createFactory = function(e) {
  var t = ac.bind(null, e);
  return t.type = e, t;
};
V.createRef = function() {
  return { current: null };
};
V.forwardRef = function(e) {
  return { $$typeof: rp, render: e };
};
V.isValidElement = Cs;
V.lazy = function(e) {
  return { $$typeof: op, _payload: { _status: -1, _result: e }, _init: cp };
};
V.memo = function(e, t) {
  return { $$typeof: ip, type: e, compare: t === void 0 ? null : t };
};
V.startTransition = function(e) {
  var t = Pl.transition;
  Pl.transition = {};
  try {
    e();
  } finally {
    Pl.transition = t;
  }
};
V.unstable_act = uc;
V.useCallback = function(e, t) {
  return Re.current.useCallback(e, t);
};
V.useContext = function(e) {
  return Re.current.useContext(e);
};
V.useDebugValue = function() {
};
V.useDeferredValue = function(e) {
  return Re.current.useDeferredValue(e);
};
V.useEffect = function(e, t) {
  return Re.current.useEffect(e, t);
};
V.useId = function() {
  return Re.current.useId();
};
V.useImperativeHandle = function(e, t, n) {
  return Re.current.useImperativeHandle(e, t, n);
};
V.useInsertionEffect = function(e, t) {
  return Re.current.useInsertionEffect(e, t);
};
V.useLayoutEffect = function(e, t) {
  return Re.current.useLayoutEffect(e, t);
};
V.useMemo = function(e, t) {
  return Re.current.useMemo(e, t);
};
V.useReducer = function(e, t, n) {
  return Re.current.useReducer(e, t, n);
};
V.useRef = function(e) {
  return Re.current.useRef(e);
};
V.useState = function(e) {
  return Re.current.useState(e);
};
V.useSyncExternalStore = function(e, t, n) {
  return Re.current.useSyncExternalStore(e, t, n);
};
V.useTransition = function() {
  return Re.current.useTransition();
};
V.version = "18.3.1";
tc.exports = V;
var v = tc.exports;
const te = /* @__PURE__ */ Yf(v);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fp = v, pp = Symbol.for("react.element"), hp = Symbol.for("react.fragment"), mp = Object.prototype.hasOwnProperty, vp = fp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, gp = { key: !0, ref: !0, __self: !0, __source: !0 };
function cc(e, t, n) {
  var r, l = {}, i = null, o = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (o = t.ref);
  for (r in t) mp.call(t, r) && !gp.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) l[r] === void 0 && (l[r] = t[r]);
  return { $$typeof: pp, type: e, key: i, ref: o, props: l, _owner: vp.current };
}
wi.Fragment = hp;
wi.jsx = cc;
wi.jsxs = cc;
ec.exports = wi;
var u = ec.exports, Eo = {}, dc = { exports: {} }, He = {}, fc = { exports: {} }, pc = {};
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
  function t(O, M) {
    var F = O.length;
    O.push(M);
    e: for (; 0 < F; ) {
      var W = F - 1 >>> 1, B = O[W];
      if (0 < l(B, M)) O[W] = M, O[F] = B, F = W;
      else break e;
    }
  }
  function n(O) {
    return O.length === 0 ? null : O[0];
  }
  function r(O) {
    if (O.length === 0) return null;
    var M = O[0], F = O.pop();
    if (F !== M) {
      O[0] = F;
      e: for (var W = 0, B = O.length, ce = B >>> 1; W < ce; ) {
        var se = 2 * (W + 1) - 1, P = O[se], T = se + 1, b = O[T];
        if (0 > l(P, F)) T < B && 0 > l(b, P) ? (O[W] = b, O[T] = F, W = T) : (O[W] = P, O[se] = F, W = se);
        else if (T < B && 0 > l(b, F)) O[W] = b, O[T] = F, W = T;
        else break e;
      }
    }
    return M;
  }
  function l(O, M) {
    var F = O.sortIndex - M.sortIndex;
    return F !== 0 ? F : O.id - M.id;
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
  var a = [], c = [], h = 1, f = null, g = 3, y = !1, k = !1, w = !1, I = typeof setTimeout == "function" ? setTimeout : null, p = typeof clearTimeout == "function" ? clearTimeout : null, d = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(O) {
    for (var M = n(c); M !== null; ) {
      if (M.callback === null) r(c);
      else if (M.startTime <= O) r(c), M.sortIndex = M.expirationTime, t(a, M);
      else break;
      M = n(c);
    }
  }
  function x(O) {
    if (w = !1, m(O), !k) if (n(a) !== null) k = !0, J(S);
    else {
      var M = n(c);
      M !== null && X(x, M.startTime - O);
    }
  }
  function S(O, M) {
    k = !1, w && (w = !1, p(j), j = -1), y = !0;
    var F = g;
    try {
      for (m(M), f = n(a); f !== null && (!(f.expirationTime > M) || O && !L()); ) {
        var W = f.callback;
        if (typeof W == "function") {
          f.callback = null, g = f.priorityLevel;
          var B = W(f.expirationTime <= M);
          M = e.unstable_now(), typeof B == "function" ? f.callback = B : f === n(a) && r(a), m(M);
        } else r(a);
        f = n(a);
      }
      if (f !== null) var ce = !0;
      else {
        var se = n(c);
        se !== null && X(x, se.startTime - M), ce = !1;
      }
      return ce;
    } finally {
      f = null, g = F, y = !1;
    }
  }
  var N = !1, E = null, j = -1, D = 5, C = -1;
  function L() {
    return !(e.unstable_now() - C < D);
  }
  function _() {
    if (E !== null) {
      var O = e.unstable_now();
      C = O;
      var M = !0;
      try {
        M = E(!0, O);
      } finally {
        M ? z() : (N = !1, E = null);
      }
    } else N = !1;
  }
  var z;
  if (typeof d == "function") z = function() {
    d(_);
  };
  else if (typeof MessageChannel < "u") {
    var $ = new MessageChannel(), K = $.port2;
    $.port1.onmessage = _, z = function() {
      K.postMessage(null);
    };
  } else z = function() {
    I(_, 0);
  };
  function J(O) {
    E = O, N || (N = !0, z());
  }
  function X(O, M) {
    j = I(function() {
      O(e.unstable_now());
    }, M);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(O) {
    O.callback = null;
  }, e.unstable_continueExecution = function() {
    k || y || (k = !0, J(S));
  }, e.unstable_forceFrameRate = function(O) {
    0 > O || 125 < O ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : D = 0 < O ? Math.floor(1e3 / O) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return g;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(a);
  }, e.unstable_next = function(O) {
    switch (g) {
      case 1:
      case 2:
      case 3:
        var M = 3;
        break;
      default:
        M = g;
    }
    var F = g;
    g = M;
    try {
      return O();
    } finally {
      g = F;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(O, M) {
    switch (O) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        O = 3;
    }
    var F = g;
    g = O;
    try {
      return M();
    } finally {
      g = F;
    }
  }, e.unstable_scheduleCallback = function(O, M, F) {
    var W = e.unstable_now();
    switch (typeof F == "object" && F !== null ? (F = F.delay, F = typeof F == "number" && 0 < F ? W + F : W) : F = W, O) {
      case 1:
        var B = -1;
        break;
      case 2:
        B = 250;
        break;
      case 5:
        B = 1073741823;
        break;
      case 4:
        B = 1e4;
        break;
      default:
        B = 5e3;
    }
    return B = F + B, O = { id: h++, callback: M, priorityLevel: O, startTime: F, expirationTime: B, sortIndex: -1 }, F > W ? (O.sortIndex = F, t(c, O), n(a) === null && O === n(c) && (w ? (p(j), j = -1) : w = !0, X(x, F - W))) : (O.sortIndex = B, t(a, O), k || y || (k = !0, J(S))), O;
  }, e.unstable_shouldYield = L, e.unstable_wrapCallback = function(O) {
    var M = g;
    return function() {
      var F = g;
      g = M;
      try {
        return O.apply(this, arguments);
      } finally {
        g = F;
      }
    };
  };
})(pc);
fc.exports = pc;
var yp = fc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xp = v, Ve = yp;
function R(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var hc = /* @__PURE__ */ new Set(), Or = {};
function vn(e, t) {
  Wn(e, t), Wn(e + "Capture", t);
}
function Wn(e, t) {
  for (Or[e] = t, e = 0; e < t.length; e++) hc.add(t[e]);
}
var Nt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), No = Object.prototype.hasOwnProperty, wp = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Pa = {}, _a = {};
function kp(e) {
  return No.call(_a, e) ? !0 : No.call(Pa, e) ? !1 : wp.test(e) ? _a[e] = !0 : (Pa[e] = !0, !1);
}
function Sp(e, t, n, r) {
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
function Cp(e, t, n, r) {
  if (t === null || typeof t > "u" || Sp(e, t, n, r)) return !0;
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
function Te(e, t, n, r, l, i, o) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = o;
}
var we = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  we[e] = new Te(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  we[t] = new Te(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  we[e] = new Te(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  we[e] = new Te(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  we[e] = new Te(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  we[e] = new Te(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  we[e] = new Te(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  we[e] = new Te(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  we[e] = new Te(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Es = /[\-:]([a-z])/g;
function Ns(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Es,
    Ns
  );
  we[t] = new Te(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Es, Ns);
  we[t] = new Te(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Es, Ns);
  we[t] = new Te(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  we[e] = new Te(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
we.xlinkHref = new Te("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  we[e] = new Te(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function js(e, t, n, r) {
  var l = we.hasOwnProperty(t) ? we[t] : null;
  (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Cp(t, n, l, r) && (n = null), r || l === null ? kp(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Tt = xp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, fl = Symbol.for("react.element"), Nn = Symbol.for("react.portal"), jn = Symbol.for("react.fragment"), Ds = Symbol.for("react.strict_mode"), jo = Symbol.for("react.profiler"), mc = Symbol.for("react.provider"), vc = Symbol.for("react.context"), Rs = Symbol.for("react.forward_ref"), Do = Symbol.for("react.suspense"), Ro = Symbol.for("react.suspense_list"), Ts = Symbol.for("react.memo"), At = Symbol.for("react.lazy"), gc = Symbol.for("react.offscreen"), Oa = Symbol.iterator;
function ur(e) {
  return e === null || typeof e != "object" ? null : (e = Oa && e[Oa] || e["@@iterator"], typeof e == "function" ? e : null);
}
var ie = Object.assign, Qi;
function yr(e) {
  if (Qi === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    Qi = t && t[1] || "";
  }
  return `
` + Qi + e;
}
var Ki = !1;
function Xi(e, t) {
  if (!e || Ki) return "";
  Ki = !0;
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
      for (var l = c.stack.split(`
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
    Ki = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? yr(e) : "";
}
function Ep(e) {
  switch (e.tag) {
    case 5:
      return yr(e.type);
    case 16:
      return yr("Lazy");
    case 13:
      return yr("Suspense");
    case 19:
      return yr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = Xi(e.type, !1), e;
    case 11:
      return e = Xi(e.type.render, !1), e;
    case 1:
      return e = Xi(e.type, !0), e;
    default:
      return "";
  }
}
function To(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case jn:
      return "Fragment";
    case Nn:
      return "Portal";
    case jo:
      return "Profiler";
    case Ds:
      return "StrictMode";
    case Do:
      return "Suspense";
    case Ro:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case vc:
      return (e.displayName || "Context") + ".Consumer";
    case mc:
      return (e._context.displayName || "Context") + ".Provider";
    case Rs:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case Ts:
      return t = e.displayName || null, t !== null ? t : To(e.type) || "Memo";
    case At:
      t = e._payload, e = e._init;
      try {
        return To(e(t));
      } catch {
      }
  }
  return null;
}
function Np(e) {
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
      return To(t);
    case 8:
      return t === Ds ? "StrictMode" : "Mode";
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
function Jt(e) {
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
function yc(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function jp(e) {
  var t = yc(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
function pl(e) {
  e._valueTracker || (e._valueTracker = jp(e));
}
function xc(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = yc(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Hl(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Io(e, t) {
  var n = t.checked;
  return ie({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function Ma(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = Jt(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function wc(e, t) {
  t = t.checked, t != null && js(e, "checked", t, !1);
}
function Lo(e, t) {
  wc(e, t);
  var n = Jt(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Po(e, t.type, n) : t.hasOwnProperty("defaultValue") && Po(e, t.type, Jt(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Aa(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function Po(e, t, n) {
  (t !== "number" || Hl(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var xr = Array.isArray;
function Fn(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Jt(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        e[l].selected = !0, r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function _o(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(R(91));
  return ie({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function za(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(R(92));
      if (xr(n)) {
        if (1 < n.length) throw Error(R(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: Jt(n) };
}
function kc(e, t) {
  var n = Jt(t.value), r = Jt(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function Fa(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Sc(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Oo(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Sc(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var hl, Cc = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, l);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (hl = hl || document.createElement("div"), hl.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = hl.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function Mr(e, t) {
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
}, Dp = ["Webkit", "ms", "Moz", "O"];
Object.keys(Sr).forEach(function(e) {
  Dp.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), Sr[t] = Sr[e];
  });
});
function Ec(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Sr.hasOwnProperty(e) && Sr[e] ? ("" + t).trim() : t + "px";
}
function Nc(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, l = Ec(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
  }
}
var Rp = ie({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Mo(e, t) {
  if (t) {
    if (Rp[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(R(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(R(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(R(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(R(62));
  }
}
function Ao(e, t) {
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
var zo = null;
function Is(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Fo = null, bn = null, Un = null;
function ba(e) {
  if (e = rl(e)) {
    if (typeof Fo != "function") throw Error(R(280));
    var t = e.stateNode;
    t && (t = Ni(t), Fo(e.stateNode, e.type, t));
  }
}
function jc(e) {
  bn ? Un ? Un.push(e) : Un = [e] : bn = e;
}
function Dc() {
  if (bn) {
    var e = bn, t = Un;
    if (Un = bn = null, ba(e), t) for (e = 0; e < t.length; e++) ba(t[e]);
  }
}
function Rc(e, t) {
  return e(t);
}
function Tc() {
}
var Gi = !1;
function Ic(e, t, n) {
  if (Gi) return e(t, n);
  Gi = !0;
  try {
    return Rc(e, t, n);
  } finally {
    Gi = !1, (bn !== null || Un !== null) && (Tc(), Dc());
  }
}
function Ar(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Ni(n);
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
  if (n && typeof n != "function") throw Error(R(231, t, typeof n));
  return n;
}
var bo = !1;
if (Nt) try {
  var cr = {};
  Object.defineProperty(cr, "passive", { get: function() {
    bo = !0;
  } }), window.addEventListener("test", cr, cr), window.removeEventListener("test", cr, cr);
} catch {
  bo = !1;
}
function Tp(e, t, n, r, l, i, o, s, a) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (h) {
    this.onError(h);
  }
}
var Cr = !1, Wl = null, Ql = !1, Uo = null, Ip = { onError: function(e) {
  Cr = !0, Wl = e;
} };
function Lp(e, t, n, r, l, i, o, s, a) {
  Cr = !1, Wl = null, Tp.apply(Ip, arguments);
}
function Pp(e, t, n, r, l, i, o, s, a) {
  if (Lp.apply(this, arguments), Cr) {
    if (Cr) {
      var c = Wl;
      Cr = !1, Wl = null;
    } else throw Error(R(198));
    Ql || (Ql = !0, Uo = c);
  }
}
function gn(e) {
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
function Lc(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function Ua(e) {
  if (gn(e) !== e) throw Error(R(188));
}
function _p(e) {
  var t = e.alternate;
  if (!t) {
    if (t = gn(e), t === null) throw Error(R(188));
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
        if (i === n) return Ua(l), e;
        if (i === r) return Ua(l), t;
        i = i.sibling;
      }
      throw Error(R(188));
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
        if (!o) throw Error(R(189));
      }
    }
    if (n.alternate !== r) throw Error(R(190));
  }
  if (n.tag !== 3) throw Error(R(188));
  return n.stateNode.current === n ? e : t;
}
function Pc(e) {
  return e = _p(e), e !== null ? _c(e) : null;
}
function _c(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = _c(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Oc = Ve.unstable_scheduleCallback, $a = Ve.unstable_cancelCallback, Op = Ve.unstable_shouldYield, Mp = Ve.unstable_requestPaint, ae = Ve.unstable_now, Ap = Ve.unstable_getCurrentPriorityLevel, Ls = Ve.unstable_ImmediatePriority, Mc = Ve.unstable_UserBlockingPriority, Kl = Ve.unstable_NormalPriority, zp = Ve.unstable_LowPriority, Ac = Ve.unstable_IdlePriority, ki = null, mt = null;
function Fp(e) {
  if (mt && typeof mt.onCommitFiberRoot == "function") try {
    mt.onCommitFiberRoot(ki, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var lt = Math.clz32 ? Math.clz32 : $p, bp = Math.log, Up = Math.LN2;
function $p(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (bp(e) / Up | 0) | 0;
}
var ml = 64, vl = 4194304;
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
function Xl(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, l = e.suspendedLanes, i = e.pingedLanes, o = n & 268435455;
  if (o !== 0) {
    var s = o & ~l;
    s !== 0 ? r = wr(s) : (i &= o, i !== 0 && (r = wr(i)));
  } else o = n & ~l, o !== 0 ? r = wr(o) : i !== 0 && (r = wr(i));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & l) && (l = r & -r, i = t & -t, l >= i || l === 16 && (i & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - lt(t), l = 1 << n, r |= e[n], t &= ~l;
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
function Vp(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var o = 31 - lt(i), s = 1 << o, a = l[o];
    a === -1 ? (!(s & n) || s & r) && (l[o] = Bp(s, t)) : a <= t && (e.expiredLanes |= s), i &= ~s;
  }
}
function $o(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function zc() {
  var e = ml;
  return ml <<= 1, !(ml & 4194240) && (ml = 64), e;
}
function Yi(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function tl(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - lt(t), e[t] = n;
}
function Hp(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - lt(n), i = 1 << l;
    t[l] = 0, r[l] = -1, e[l] = -1, n &= ~i;
  }
}
function Ps(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - lt(n), l = 1 << r;
    l & t | e[r] & t && (e[r] |= t), n &= ~l;
  }
}
var Y = 0;
function Fc(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var bc, _s, Uc, $c, Bc, Bo = !1, gl = [], Vt = null, Ht = null, Wt = null, zr = /* @__PURE__ */ new Map(), Fr = /* @__PURE__ */ new Map(), bt = [], Wp = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Ba(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Vt = null;
      break;
    case "dragenter":
    case "dragleave":
      Ht = null;
      break;
    case "mouseover":
    case "mouseout":
      Wt = null;
      break;
    case "pointerover":
    case "pointerout":
      zr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Fr.delete(t.pointerId);
  }
}
function dr(e, t, n, r, l, i) {
  return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [l] }, t !== null && (t = rl(t), t !== null && _s(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
}
function Qp(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return Vt = dr(Vt, e, t, n, r, l), !0;
    case "dragenter":
      return Ht = dr(Ht, e, t, n, r, l), !0;
    case "mouseover":
      return Wt = dr(Wt, e, t, n, r, l), !0;
    case "pointerover":
      var i = l.pointerId;
      return zr.set(i, dr(zr.get(i) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return i = l.pointerId, Fr.set(i, dr(Fr.get(i) || null, e, t, n, r, l)), !0;
  }
  return !1;
}
function Vc(e) {
  var t = on(e.target);
  if (t !== null) {
    var n = gn(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Lc(n), t !== null) {
          e.blockedOn = t, Bc(e.priority, function() {
            Uc(n);
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
function _l(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Vo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      zo = r, n.target.dispatchEvent(r), zo = null;
    } else return t = rl(n), t !== null && _s(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function Va(e, t, n) {
  _l(e) && n.delete(t);
}
function Kp() {
  Bo = !1, Vt !== null && _l(Vt) && (Vt = null), Ht !== null && _l(Ht) && (Ht = null), Wt !== null && _l(Wt) && (Wt = null), zr.forEach(Va), Fr.forEach(Va);
}
function fr(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Bo || (Bo = !0, Ve.unstable_scheduleCallback(Ve.unstable_NormalPriority, Kp)));
}
function br(e) {
  function t(l) {
    return fr(l, e);
  }
  if (0 < gl.length) {
    fr(gl[0], e);
    for (var n = 1; n < gl.length; n++) {
      var r = gl[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (Vt !== null && fr(Vt, e), Ht !== null && fr(Ht, e), Wt !== null && fr(Wt, e), zr.forEach(t), Fr.forEach(t), n = 0; n < bt.length; n++) r = bt[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < bt.length && (n = bt[0], n.blockedOn === null); ) Vc(n), n.blockedOn === null && bt.shift();
}
var $n = Tt.ReactCurrentBatchConfig, Gl = !0;
function Xp(e, t, n, r) {
  var l = Y, i = $n.transition;
  $n.transition = null;
  try {
    Y = 1, Os(e, t, n, r);
  } finally {
    Y = l, $n.transition = i;
  }
}
function Gp(e, t, n, r) {
  var l = Y, i = $n.transition;
  $n.transition = null;
  try {
    Y = 4, Os(e, t, n, r);
  } finally {
    Y = l, $n.transition = i;
  }
}
function Os(e, t, n, r) {
  if (Gl) {
    var l = Vo(e, t, n, r);
    if (l === null) oo(e, t, r, Yl, n), Ba(e, r);
    else if (Qp(l, e, t, n, r)) r.stopPropagation();
    else if (Ba(e, r), t & 4 && -1 < Wp.indexOf(e)) {
      for (; l !== null; ) {
        var i = rl(l);
        if (i !== null && bc(i), i = Vo(e, t, n, r), i === null && oo(e, t, r, Yl, n), i === l) break;
        l = i;
      }
      l !== null && r.stopPropagation();
    } else oo(e, t, r, null, n);
  }
}
var Yl = null;
function Vo(e, t, n, r) {
  if (Yl = null, e = Is(r), e = on(e), e !== null) if (t = gn(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = Lc(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return Yl = e, null;
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
      switch (Ap()) {
        case Ls:
          return 1;
        case Mc:
          return 4;
        case Kl:
        case zp:
          return 16;
        case Ac:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var $t = null, Ms = null, Ol = null;
function Wc() {
  if (Ol) return Ol;
  var e, t = Ms, n = t.length, r, l = "value" in $t ? $t.value : $t.textContent, i = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++) ;
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === l[i - r]; r++) ;
  return Ol = l.slice(e, 1 < r ? 1 - r : void 0);
}
function Ml(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function yl() {
  return !0;
}
function Ha() {
  return !1;
}
function We(e) {
  function t(n, r, l, i, o) {
    this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = i, this.target = o, this.currentTarget = null;
    for (var s in e) e.hasOwnProperty(s) && (n = e[s], this[s] = n ? n(i) : i[s]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? yl : Ha, this.isPropagationStopped = Ha, this;
  }
  return ie(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = yl);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = yl);
  }, persist: function() {
  }, isPersistent: yl }), t;
}
var qn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, As = We(qn), nl = ie({}, qn, { view: 0, detail: 0 }), Yp = We(nl), Ji, Zi, pr, Si = ie({}, nl, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: zs, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== pr && (pr && e.type === "mousemove" ? (Ji = e.screenX - pr.screenX, Zi = e.screenY - pr.screenY) : Zi = Ji = 0, pr = e), Ji);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Zi;
} }), Wa = We(Si), Jp = ie({}, Si, { dataTransfer: 0 }), Zp = We(Jp), qp = ie({}, nl, { relatedTarget: 0 }), qi = We(qp), eh = ie({}, qn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), th = We(eh), nh = ie({}, qn, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), rh = We(nh), lh = ie({}, qn, { data: 0 }), Qa = We(lh), ih = {
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
}, oh = {
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
}, sh = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function ah(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = sh[e]) ? !!t[e] : !1;
}
function zs() {
  return ah;
}
var uh = ie({}, nl, { key: function(e) {
  if (e.key) {
    var t = ih[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = Ml(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? oh[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: zs, charCode: function(e) {
  return e.type === "keypress" ? Ml(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Ml(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), ch = We(uh), dh = ie({}, Si, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Ka = We(dh), fh = ie({}, nl, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: zs }), ph = We(fh), hh = ie({}, qn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), mh = We(hh), vh = ie({}, Si, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), gh = We(vh), yh = [9, 13, 27, 32], Fs = Nt && "CompositionEvent" in window, Er = null;
Nt && "documentMode" in document && (Er = document.documentMode);
var xh = Nt && "TextEvent" in window && !Er, Qc = Nt && (!Fs || Er && 8 < Er && 11 >= Er), Xa = " ", Ga = !1;
function Kc(e, t) {
  switch (e) {
    case "keyup":
      return yh.indexOf(t.keyCode) !== -1;
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
function Xc(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Dn = !1;
function wh(e, t) {
  switch (e) {
    case "compositionend":
      return Xc(t);
    case "keypress":
      return t.which !== 32 ? null : (Ga = !0, Xa);
    case "textInput":
      return e = t.data, e === Xa && Ga ? null : e;
    default:
      return null;
  }
}
function kh(e, t) {
  if (Dn) return e === "compositionend" || !Fs && Kc(e, t) ? (e = Wc(), Ol = Ms = $t = null, Dn = !1, e) : null;
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
      return Qc && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Sh = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Ya(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Sh[e.type] : t === "textarea";
}
function Gc(e, t, n, r) {
  jc(r), t = Jl(t, "onChange"), 0 < t.length && (n = new As("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Nr = null, Ur = null;
function Ch(e) {
  od(e, 0);
}
function Ci(e) {
  var t = In(e);
  if (xc(t)) return e;
}
function Eh(e, t) {
  if (e === "change") return t;
}
var Yc = !1;
if (Nt) {
  var eo;
  if (Nt) {
    var to = "oninput" in document;
    if (!to) {
      var Ja = document.createElement("div");
      Ja.setAttribute("oninput", "return;"), to = typeof Ja.oninput == "function";
    }
    eo = to;
  } else eo = !1;
  Yc = eo && (!document.documentMode || 9 < document.documentMode);
}
function Za() {
  Nr && (Nr.detachEvent("onpropertychange", Jc), Ur = Nr = null);
}
function Jc(e) {
  if (e.propertyName === "value" && Ci(Ur)) {
    var t = [];
    Gc(t, Ur, e, Is(e)), Ic(Ch, t);
  }
}
function Nh(e, t, n) {
  e === "focusin" ? (Za(), Nr = t, Ur = n, Nr.attachEvent("onpropertychange", Jc)) : e === "focusout" && Za();
}
function jh(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return Ci(Ur);
}
function Dh(e, t) {
  if (e === "click") return Ci(t);
}
function Rh(e, t) {
  if (e === "input" || e === "change") return Ci(t);
}
function Th(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var ot = typeof Object.is == "function" ? Object.is : Th;
function $r(e, t) {
  if (ot(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!No.call(t, l) || !ot(e[l], t[l])) return !1;
  }
  return !0;
}
function qa(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function eu(e, t) {
  var n = qa(e);
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
    n = qa(n);
  }
}
function Zc(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Zc(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function qc() {
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
function bs(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function Ih(e) {
  var t = qc(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Zc(n.ownerDocument.documentElement, n)) {
    if (r !== null && bs(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var l = n.textContent.length, i = Math.min(r.start, l);
        r = r.end === void 0 ? i : Math.min(r.end, l), !e.extend && i > r && (l = r, r = i, i = l), l = eu(n, i);
        var o = eu(
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
var Lh = Nt && "documentMode" in document && 11 >= document.documentMode, Rn = null, Ho = null, jr = null, Wo = !1;
function tu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Wo || Rn == null || Rn !== Hl(r) || (r = Rn, "selectionStart" in r && bs(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), jr && $r(jr, r) || (jr = r, r = Jl(Ho, "onSelect"), 0 < r.length && (t = new As("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Rn)));
}
function xl(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Tn = { animationend: xl("Animation", "AnimationEnd"), animationiteration: xl("Animation", "AnimationIteration"), animationstart: xl("Animation", "AnimationStart"), transitionend: xl("Transition", "TransitionEnd") }, no = {}, ed = {};
Nt && (ed = document.createElement("div").style, "AnimationEvent" in window || (delete Tn.animationend.animation, delete Tn.animationiteration.animation, delete Tn.animationstart.animation), "TransitionEvent" in window || delete Tn.transitionend.transition);
function Ei(e) {
  if (no[e]) return no[e];
  if (!Tn[e]) return e;
  var t = Tn[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in ed) return no[e] = t[n];
  return e;
}
var td = Ei("animationend"), nd = Ei("animationiteration"), rd = Ei("animationstart"), ld = Ei("transitionend"), id = /* @__PURE__ */ new Map(), nu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function en(e, t) {
  id.set(e, t), vn(t, [e]);
}
for (var ro = 0; ro < nu.length; ro++) {
  var lo = nu[ro], Ph = lo.toLowerCase(), _h = lo[0].toUpperCase() + lo.slice(1);
  en(Ph, "on" + _h);
}
en(td, "onAnimationEnd");
en(nd, "onAnimationIteration");
en(rd, "onAnimationStart");
en("dblclick", "onDoubleClick");
en("focusin", "onFocus");
en("focusout", "onBlur");
en(ld, "onTransitionEnd");
Wn("onMouseEnter", ["mouseout", "mouseover"]);
Wn("onMouseLeave", ["mouseout", "mouseover"]);
Wn("onPointerEnter", ["pointerout", "pointerover"]);
Wn("onPointerLeave", ["pointerout", "pointerover"]);
vn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
vn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
vn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
vn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
vn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
vn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var kr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Oh = new Set("cancel close invalid load scroll toggle".split(" ").concat(kr));
function ru(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, Pp(r, t, void 0, e), e.currentTarget = null;
}
function od(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], l = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t) for (var o = r.length - 1; 0 <= o; o--) {
        var s = r[o], a = s.instance, c = s.currentTarget;
        if (s = s.listener, a !== i && l.isPropagationStopped()) break e;
        ru(l, s, c), i = a;
      }
      else for (o = 0; o < r.length; o++) {
        if (s = r[o], a = s.instance, c = s.currentTarget, s = s.listener, a !== i && l.isPropagationStopped()) break e;
        ru(l, s, c), i = a;
      }
    }
  }
  if (Ql) throw e = Uo, Ql = !1, Uo = null, e;
}
function q(e, t) {
  var n = t[Yo];
  n === void 0 && (n = t[Yo] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (sd(t, e, 2, !1), n.add(r));
}
function io(e, t, n) {
  var r = 0;
  t && (r |= 4), sd(n, e, r, t);
}
var wl = "_reactListening" + Math.random().toString(36).slice(2);
function Br(e) {
  if (!e[wl]) {
    e[wl] = !0, hc.forEach(function(n) {
      n !== "selectionchange" && (Oh.has(n) || io(n, !1, e), io(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[wl] || (t[wl] = !0, io("selectionchange", !1, t));
  }
}
function sd(e, t, n, r) {
  switch (Hc(t)) {
    case 1:
      var l = Xp;
      break;
    case 4:
      l = Gp;
      break;
    default:
      l = Os;
  }
  n = l.bind(null, t, n, e), l = void 0, !bo || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
}
function oo(e, t, n, r, l) {
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
        if (o = on(s), o === null) return;
        if (a = o.tag, a === 5 || a === 6) {
          r = i = o;
          continue e;
        }
        s = s.parentNode;
      }
    }
    r = r.return;
  }
  Ic(function() {
    var c = i, h = Is(n), f = [];
    e: {
      var g = id.get(e);
      if (g !== void 0) {
        var y = As, k = e;
        switch (e) {
          case "keypress":
            if (Ml(n) === 0) break e;
          case "keydown":
          case "keyup":
            y = ch;
            break;
          case "focusin":
            k = "focus", y = qi;
            break;
          case "focusout":
            k = "blur", y = qi;
            break;
          case "beforeblur":
          case "afterblur":
            y = qi;
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
            y = Wa;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            y = Zp;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            y = ph;
            break;
          case td:
          case nd:
          case rd:
            y = th;
            break;
          case ld:
            y = mh;
            break;
          case "scroll":
            y = Yp;
            break;
          case "wheel":
            y = gh;
            break;
          case "copy":
          case "cut":
          case "paste":
            y = rh;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            y = Ka;
        }
        var w = (t & 4) !== 0, I = !w && e === "scroll", p = w ? g !== null ? g + "Capture" : null : g;
        w = [];
        for (var d = c, m; d !== null; ) {
          m = d;
          var x = m.stateNode;
          if (m.tag === 5 && x !== null && (m = x, p !== null && (x = Ar(d, p), x != null && w.push(Vr(d, x, m)))), I) break;
          d = d.return;
        }
        0 < w.length && (g = new y(g, k, null, n, h), f.push({ event: g, listeners: w }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (g = e === "mouseover" || e === "pointerover", y = e === "mouseout" || e === "pointerout", g && n !== zo && (k = n.relatedTarget || n.fromElement) && (on(k) || k[jt])) break e;
        if ((y || g) && (g = h.window === h ? h : (g = h.ownerDocument) ? g.defaultView || g.parentWindow : window, y ? (k = n.relatedTarget || n.toElement, y = c, k = k ? on(k) : null, k !== null && (I = gn(k), k !== I || k.tag !== 5 && k.tag !== 6) && (k = null)) : (y = null, k = c), y !== k)) {
          if (w = Wa, x = "onMouseLeave", p = "onMouseEnter", d = "mouse", (e === "pointerout" || e === "pointerover") && (w = Ka, x = "onPointerLeave", p = "onPointerEnter", d = "pointer"), I = y == null ? g : In(y), m = k == null ? g : In(k), g = new w(x, d + "leave", y, n, h), g.target = I, g.relatedTarget = m, x = null, on(h) === c && (w = new w(p, d + "enter", k, n, h), w.target = m, w.relatedTarget = I, x = w), I = x, y && k) t: {
            for (w = y, p = k, d = 0, m = w; m; m = En(m)) d++;
            for (m = 0, x = p; x; x = En(x)) m++;
            for (; 0 < d - m; ) w = En(w), d--;
            for (; 0 < m - d; ) p = En(p), m--;
            for (; d--; ) {
              if (w === p || p !== null && w === p.alternate) break t;
              w = En(w), p = En(p);
            }
            w = null;
          }
          else w = null;
          y !== null && lu(f, g, y, w, !1), k !== null && I !== null && lu(f, I, k, w, !0);
        }
      }
      e: {
        if (g = c ? In(c) : window, y = g.nodeName && g.nodeName.toLowerCase(), y === "select" || y === "input" && g.type === "file") var S = Eh;
        else if (Ya(g)) if (Yc) S = Rh;
        else {
          S = jh;
          var N = Nh;
        }
        else (y = g.nodeName) && y.toLowerCase() === "input" && (g.type === "checkbox" || g.type === "radio") && (S = Dh);
        if (S && (S = S(e, c))) {
          Gc(f, S, n, h);
          break e;
        }
        N && N(e, g, c), e === "focusout" && (N = g._wrapperState) && N.controlled && g.type === "number" && Po(g, "number", g.value);
      }
      switch (N = c ? In(c) : window, e) {
        case "focusin":
          (Ya(N) || N.contentEditable === "true") && (Rn = N, Ho = c, jr = null);
          break;
        case "focusout":
          jr = Ho = Rn = null;
          break;
        case "mousedown":
          Wo = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Wo = !1, tu(f, n, h);
          break;
        case "selectionchange":
          if (Lh) break;
        case "keydown":
        case "keyup":
          tu(f, n, h);
      }
      var E;
      if (Fs) e: {
        switch (e) {
          case "compositionstart":
            var j = "onCompositionStart";
            break e;
          case "compositionend":
            j = "onCompositionEnd";
            break e;
          case "compositionupdate":
            j = "onCompositionUpdate";
            break e;
        }
        j = void 0;
      }
      else Dn ? Kc(e, n) && (j = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (j = "onCompositionStart");
      j && (Qc && n.locale !== "ko" && (Dn || j !== "onCompositionStart" ? j === "onCompositionEnd" && Dn && (E = Wc()) : ($t = h, Ms = "value" in $t ? $t.value : $t.textContent, Dn = !0)), N = Jl(c, j), 0 < N.length && (j = new Qa(j, e, null, n, h), f.push({ event: j, listeners: N }), E ? j.data = E : (E = Xc(n), E !== null && (j.data = E)))), (E = xh ? wh(e, n) : kh(e, n)) && (c = Jl(c, "onBeforeInput"), 0 < c.length && (h = new Qa("onBeforeInput", "beforeinput", null, n, h), f.push({ event: h, listeners: c }), h.data = E));
    }
    od(f, t);
  });
}
function Vr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Jl(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e, i = l.stateNode;
    l.tag === 5 && i !== null && (l = i, i = Ar(e, n), i != null && r.unshift(Vr(e, i, l)), i = Ar(e, t), i != null && r.push(Vr(e, i, l))), e = e.return;
  }
  return r;
}
function En(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function lu(e, t, n, r, l) {
  for (var i = t._reactName, o = []; n !== null && n !== r; ) {
    var s = n, a = s.alternate, c = s.stateNode;
    if (a !== null && a === r) break;
    s.tag === 5 && c !== null && (s = c, l ? (a = Ar(n, i), a != null && o.unshift(Vr(n, a, s))) : l || (a = Ar(n, i), a != null && o.push(Vr(n, a, s)))), n = n.return;
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var Mh = /\r\n?/g, Ah = /\u0000|\uFFFD/g;
function iu(e) {
  return (typeof e == "string" ? e : "" + e).replace(Mh, `
`).replace(Ah, "");
}
function kl(e, t, n) {
  if (t = iu(t), iu(e) !== t && n) throw Error(R(425));
}
function Zl() {
}
var Qo = null, Ko = null;
function Xo(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Go = typeof setTimeout == "function" ? setTimeout : void 0, zh = typeof clearTimeout == "function" ? clearTimeout : void 0, ou = typeof Promise == "function" ? Promise : void 0, Fh = typeof queueMicrotask == "function" ? queueMicrotask : typeof ou < "u" ? function(e) {
  return ou.resolve(null).then(e).catch(bh);
} : Go;
function bh(e) {
  setTimeout(function() {
    throw e;
  });
}
function so(e, t) {
  var n = t, r = 0;
  do {
    var l = n.nextSibling;
    if (e.removeChild(n), l && l.nodeType === 8) if (n = l.data, n === "/$") {
      if (r === 0) {
        e.removeChild(l), br(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = l;
  } while (n);
  br(t);
}
function Qt(e) {
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
function su(e) {
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
var er = Math.random().toString(36).slice(2), ht = "__reactFiber$" + er, Hr = "__reactProps$" + er, jt = "__reactContainer$" + er, Yo = "__reactEvents$" + er, Uh = "__reactListeners$" + er, $h = "__reactHandles$" + er;
function on(e) {
  var t = e[ht];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[jt] || n[ht]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = su(e); e !== null; ) {
        if (n = e[ht]) return n;
        e = su(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function rl(e) {
  return e = e[ht] || e[jt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function In(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(R(33));
}
function Ni(e) {
  return e[Hr] || null;
}
var Jo = [], Ln = -1;
function tn(e) {
  return { current: e };
}
function ee(e) {
  0 > Ln || (e.current = Jo[Ln], Jo[Ln] = null, Ln--);
}
function Z(e, t) {
  Ln++, Jo[Ln] = e.current, e.current = t;
}
var Zt = {}, Ne = tn(Zt), _e = tn(!1), dn = Zt;
function Qn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Zt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var l = {}, i;
  for (i in n) l[i] = t[i];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
}
function Oe(e) {
  return e = e.childContextTypes, e != null;
}
function ql() {
  ee(_e), ee(Ne);
}
function au(e, t, n) {
  if (Ne.current !== Zt) throw Error(R(168));
  Z(Ne, t), Z(_e, n);
}
function ad(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(R(108, Np(e) || "Unknown", l));
  return ie({}, n, r);
}
function ei(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Zt, dn = Ne.current, Z(Ne, e), Z(_e, _e.current), !0;
}
function uu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(R(169));
  n ? (e = ad(e, t, dn), r.__reactInternalMemoizedMergedChildContext = e, ee(_e), ee(Ne), Z(Ne, e)) : ee(_e), Z(_e, n);
}
var kt = null, ji = !1, ao = !1;
function ud(e) {
  kt === null ? kt = [e] : kt.push(e);
}
function Bh(e) {
  ji = !0, ud(e);
}
function nn() {
  if (!ao && kt !== null) {
    ao = !0;
    var e = 0, t = Y;
    try {
      var n = kt;
      for (Y = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      kt = null, ji = !1;
    } catch (l) {
      throw kt !== null && (kt = kt.slice(e + 1)), Oc(Ls, nn), l;
    } finally {
      Y = t, ao = !1;
    }
  }
  return null;
}
var Pn = [], _n = 0, ti = null, ni = 0, Xe = [], Ge = 0, fn = null, St = 1, Ct = "";
function rn(e, t) {
  Pn[_n++] = ni, Pn[_n++] = ti, ti = e, ni = t;
}
function cd(e, t, n) {
  Xe[Ge++] = St, Xe[Ge++] = Ct, Xe[Ge++] = fn, fn = e;
  var r = St;
  e = Ct;
  var l = 32 - lt(r) - 1;
  r &= ~(1 << l), n += 1;
  var i = 32 - lt(t) + l;
  if (30 < i) {
    var o = l - l % 5;
    i = (r & (1 << o) - 1).toString(32), r >>= o, l -= o, St = 1 << 32 - lt(t) + l | n << l | r, Ct = i + e;
  } else St = 1 << i | n << l | r, Ct = e;
}
function Us(e) {
  e.return !== null && (rn(e, 1), cd(e, 1, 0));
}
function $s(e) {
  for (; e === ti; ) ti = Pn[--_n], Pn[_n] = null, ni = Pn[--_n], Pn[_n] = null;
  for (; e === fn; ) fn = Xe[--Ge], Xe[Ge] = null, Ct = Xe[--Ge], Xe[Ge] = null, St = Xe[--Ge], Xe[Ge] = null;
}
var Be = null, $e = null, ne = !1, rt = null;
function dd(e, t) {
  var n = Ye(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function cu(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Be = e, $e = Qt(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Be = e, $e = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = fn !== null ? { id: St, overflow: Ct } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Ye(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Be = e, $e = null, !0) : !1;
    default:
      return !1;
  }
}
function Zo(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function qo(e) {
  if (ne) {
    var t = $e;
    if (t) {
      var n = t;
      if (!cu(e, t)) {
        if (Zo(e)) throw Error(R(418));
        t = Qt(n.nextSibling);
        var r = Be;
        t && cu(e, t) ? dd(r, n) : (e.flags = e.flags & -4097 | 2, ne = !1, Be = e);
      }
    } else {
      if (Zo(e)) throw Error(R(418));
      e.flags = e.flags & -4097 | 2, ne = !1, Be = e;
    }
  }
}
function du(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  Be = e;
}
function Sl(e) {
  if (e !== Be) return !1;
  if (!ne) return du(e), ne = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Xo(e.type, e.memoizedProps)), t && (t = $e)) {
    if (Zo(e)) throw fd(), Error(R(418));
    for (; t; ) dd(e, t), t = Qt(t.nextSibling);
  }
  if (du(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(R(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              $e = Qt(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      $e = null;
    }
  } else $e = Be ? Qt(e.stateNode.nextSibling) : null;
  return !0;
}
function fd() {
  for (var e = $e; e; ) e = Qt(e.nextSibling);
}
function Kn() {
  $e = Be = null, ne = !1;
}
function Bs(e) {
  rt === null ? rt = [e] : rt.push(e);
}
var Vh = Tt.ReactCurrentBatchConfig;
function hr(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(R(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(R(147, e));
      var l = r, i = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(o) {
        var s = l.refs;
        o === null ? delete s[i] : s[i] = o;
      }, t._stringRef = i, t);
    }
    if (typeof e != "string") throw Error(R(284));
    if (!n._owner) throw Error(R(290, e));
  }
  return e;
}
function Cl(e, t) {
  throw e = Object.prototype.toString.call(t), Error(R(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function fu(e) {
  var t = e._init;
  return t(e._payload);
}
function pd(e) {
  function t(p, d) {
    if (e) {
      var m = p.deletions;
      m === null ? (p.deletions = [d], p.flags |= 16) : m.push(d);
    }
  }
  function n(p, d) {
    if (!e) return null;
    for (; d !== null; ) t(p, d), d = d.sibling;
    return null;
  }
  function r(p, d) {
    for (p = /* @__PURE__ */ new Map(); d !== null; ) d.key !== null ? p.set(d.key, d) : p.set(d.index, d), d = d.sibling;
    return p;
  }
  function l(p, d) {
    return p = Yt(p, d), p.index = 0, p.sibling = null, p;
  }
  function i(p, d, m) {
    return p.index = m, e ? (m = p.alternate, m !== null ? (m = m.index, m < d ? (p.flags |= 2, d) : m) : (p.flags |= 2, d)) : (p.flags |= 1048576, d);
  }
  function o(p) {
    return e && p.alternate === null && (p.flags |= 2), p;
  }
  function s(p, d, m, x) {
    return d === null || d.tag !== 6 ? (d = vo(m, p.mode, x), d.return = p, d) : (d = l(d, m), d.return = p, d);
  }
  function a(p, d, m, x) {
    var S = m.type;
    return S === jn ? h(p, d, m.props.children, x, m.key) : d !== null && (d.elementType === S || typeof S == "object" && S !== null && S.$$typeof === At && fu(S) === d.type) ? (x = l(d, m.props), x.ref = hr(p, d, m), x.return = p, x) : (x = Bl(m.type, m.key, m.props, null, p.mode, x), x.ref = hr(p, d, m), x.return = p, x);
  }
  function c(p, d, m, x) {
    return d === null || d.tag !== 4 || d.stateNode.containerInfo !== m.containerInfo || d.stateNode.implementation !== m.implementation ? (d = go(m, p.mode, x), d.return = p, d) : (d = l(d, m.children || []), d.return = p, d);
  }
  function h(p, d, m, x, S) {
    return d === null || d.tag !== 7 ? (d = cn(m, p.mode, x, S), d.return = p, d) : (d = l(d, m), d.return = p, d);
  }
  function f(p, d, m) {
    if (typeof d == "string" && d !== "" || typeof d == "number") return d = vo("" + d, p.mode, m), d.return = p, d;
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case fl:
          return m = Bl(d.type, d.key, d.props, null, p.mode, m), m.ref = hr(p, null, d), m.return = p, m;
        case Nn:
          return d = go(d, p.mode, m), d.return = p, d;
        case At:
          var x = d._init;
          return f(p, x(d._payload), m);
      }
      if (xr(d) || ur(d)) return d = cn(d, p.mode, m, null), d.return = p, d;
      Cl(p, d);
    }
    return null;
  }
  function g(p, d, m, x) {
    var S = d !== null ? d.key : null;
    if (typeof m == "string" && m !== "" || typeof m == "number") return S !== null ? null : s(p, d, "" + m, x);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case fl:
          return m.key === S ? a(p, d, m, x) : null;
        case Nn:
          return m.key === S ? c(p, d, m, x) : null;
        case At:
          return S = m._init, g(
            p,
            d,
            S(m._payload),
            x
          );
      }
      if (xr(m) || ur(m)) return S !== null ? null : h(p, d, m, x, null);
      Cl(p, m);
    }
    return null;
  }
  function y(p, d, m, x, S) {
    if (typeof x == "string" && x !== "" || typeof x == "number") return p = p.get(m) || null, s(d, p, "" + x, S);
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case fl:
          return p = p.get(x.key === null ? m : x.key) || null, a(d, p, x, S);
        case Nn:
          return p = p.get(x.key === null ? m : x.key) || null, c(d, p, x, S);
        case At:
          var N = x._init;
          return y(p, d, m, N(x._payload), S);
      }
      if (xr(x) || ur(x)) return p = p.get(m) || null, h(d, p, x, S, null);
      Cl(d, x);
    }
    return null;
  }
  function k(p, d, m, x) {
    for (var S = null, N = null, E = d, j = d = 0, D = null; E !== null && j < m.length; j++) {
      E.index > j ? (D = E, E = null) : D = E.sibling;
      var C = g(p, E, m[j], x);
      if (C === null) {
        E === null && (E = D);
        break;
      }
      e && E && C.alternate === null && t(p, E), d = i(C, d, j), N === null ? S = C : N.sibling = C, N = C, E = D;
    }
    if (j === m.length) return n(p, E), ne && rn(p, j), S;
    if (E === null) {
      for (; j < m.length; j++) E = f(p, m[j], x), E !== null && (d = i(E, d, j), N === null ? S = E : N.sibling = E, N = E);
      return ne && rn(p, j), S;
    }
    for (E = r(p, E); j < m.length; j++) D = y(E, p, j, m[j], x), D !== null && (e && D.alternate !== null && E.delete(D.key === null ? j : D.key), d = i(D, d, j), N === null ? S = D : N.sibling = D, N = D);
    return e && E.forEach(function(L) {
      return t(p, L);
    }), ne && rn(p, j), S;
  }
  function w(p, d, m, x) {
    var S = ur(m);
    if (typeof S != "function") throw Error(R(150));
    if (m = S.call(m), m == null) throw Error(R(151));
    for (var N = S = null, E = d, j = d = 0, D = null, C = m.next(); E !== null && !C.done; j++, C = m.next()) {
      E.index > j ? (D = E, E = null) : D = E.sibling;
      var L = g(p, E, C.value, x);
      if (L === null) {
        E === null && (E = D);
        break;
      }
      e && E && L.alternate === null && t(p, E), d = i(L, d, j), N === null ? S = L : N.sibling = L, N = L, E = D;
    }
    if (C.done) return n(
      p,
      E
    ), ne && rn(p, j), S;
    if (E === null) {
      for (; !C.done; j++, C = m.next()) C = f(p, C.value, x), C !== null && (d = i(C, d, j), N === null ? S = C : N.sibling = C, N = C);
      return ne && rn(p, j), S;
    }
    for (E = r(p, E); !C.done; j++, C = m.next()) C = y(E, p, j, C.value, x), C !== null && (e && C.alternate !== null && E.delete(C.key === null ? j : C.key), d = i(C, d, j), N === null ? S = C : N.sibling = C, N = C);
    return e && E.forEach(function(_) {
      return t(p, _);
    }), ne && rn(p, j), S;
  }
  function I(p, d, m, x) {
    if (typeof m == "object" && m !== null && m.type === jn && m.key === null && (m = m.props.children), typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case fl:
          e: {
            for (var S = m.key, N = d; N !== null; ) {
              if (N.key === S) {
                if (S = m.type, S === jn) {
                  if (N.tag === 7) {
                    n(p, N.sibling), d = l(N, m.props.children), d.return = p, p = d;
                    break e;
                  }
                } else if (N.elementType === S || typeof S == "object" && S !== null && S.$$typeof === At && fu(S) === N.type) {
                  n(p, N.sibling), d = l(N, m.props), d.ref = hr(p, N, m), d.return = p, p = d;
                  break e;
                }
                n(p, N);
                break;
              } else t(p, N);
              N = N.sibling;
            }
            m.type === jn ? (d = cn(m.props.children, p.mode, x, m.key), d.return = p, p = d) : (x = Bl(m.type, m.key, m.props, null, p.mode, x), x.ref = hr(p, d, m), x.return = p, p = x);
          }
          return o(p);
        case Nn:
          e: {
            for (N = m.key; d !== null; ) {
              if (d.key === N) if (d.tag === 4 && d.stateNode.containerInfo === m.containerInfo && d.stateNode.implementation === m.implementation) {
                n(p, d.sibling), d = l(d, m.children || []), d.return = p, p = d;
                break e;
              } else {
                n(p, d);
                break;
              }
              else t(p, d);
              d = d.sibling;
            }
            d = go(m, p.mode, x), d.return = p, p = d;
          }
          return o(p);
        case At:
          return N = m._init, I(p, d, N(m._payload), x);
      }
      if (xr(m)) return k(p, d, m, x);
      if (ur(m)) return w(p, d, m, x);
      Cl(p, m);
    }
    return typeof m == "string" && m !== "" || typeof m == "number" ? (m = "" + m, d !== null && d.tag === 6 ? (n(p, d.sibling), d = l(d, m), d.return = p, p = d) : (n(p, d), d = vo(m, p.mode, x), d.return = p, p = d), o(p)) : n(p, d);
  }
  return I;
}
var Xn = pd(!0), hd = pd(!1), ri = tn(null), li = null, On = null, Vs = null;
function Hs() {
  Vs = On = li = null;
}
function Ws(e) {
  var t = ri.current;
  ee(ri), e._currentValue = t;
}
function es(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function Bn(e, t) {
  li = e, Vs = On = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Pe = !0), e.firstContext = null);
}
function Ze(e) {
  var t = e._currentValue;
  if (Vs !== e) if (e = { context: e, memoizedValue: t, next: null }, On === null) {
    if (li === null) throw Error(R(308));
    On = e, li.dependencies = { lanes: 0, firstContext: e };
  } else On = On.next = e;
  return t;
}
var sn = null;
function Qs(e) {
  sn === null ? sn = [e] : sn.push(e);
}
function md(e, t, n, r) {
  var l = t.interleaved;
  return l === null ? (n.next = n, Qs(t)) : (n.next = l.next, l.next = n), t.interleaved = n, Dt(e, r);
}
function Dt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var zt = !1;
function Ks(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function vd(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Et(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Kt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, Q & 2) {
    var l = r.pending;
    return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, Dt(e, n);
  }
  return l = r.interleaved, l === null ? (t.next = t, Qs(r)) : (t.next = l.next, l.next = t), r.interleaved = t, Dt(e, n);
}
function Al(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Ps(e, n);
  }
}
function pu(e, t) {
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
function ii(e, t, n, r) {
  var l = e.updateQueue;
  zt = !1;
  var i = l.firstBaseUpdate, o = l.lastBaseUpdate, s = l.shared.pending;
  if (s !== null) {
    l.shared.pending = null;
    var a = s, c = a.next;
    a.next = null, o === null ? i = c : o.next = c, o = a;
    var h = e.alternate;
    h !== null && (h = h.updateQueue, s = h.lastBaseUpdate, s !== o && (s === null ? h.firstBaseUpdate = c : s.next = c, h.lastBaseUpdate = a));
  }
  if (i !== null) {
    var f = l.baseState;
    o = 0, h = c = a = null, s = i;
    do {
      var g = s.lane, y = s.eventTime;
      if ((r & g) === g) {
        h !== null && (h = h.next = {
          eventTime: y,
          lane: 0,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null
        });
        e: {
          var k = e, w = s;
          switch (g = t, y = n, w.tag) {
            case 1:
              if (k = w.payload, typeof k == "function") {
                f = k.call(y, f, g);
                break e;
              }
              f = k;
              break e;
            case 3:
              k.flags = k.flags & -65537 | 128;
            case 0:
              if (k = w.payload, g = typeof k == "function" ? k.call(y, f, g) : k, g == null) break e;
              f = ie({}, f, g);
              break e;
            case 2:
              zt = !0;
          }
        }
        s.callback !== null && s.lane !== 0 && (e.flags |= 64, g = l.effects, g === null ? l.effects = [s] : g.push(s));
      } else y = { eventTime: y, lane: g, tag: s.tag, payload: s.payload, callback: s.callback, next: null }, h === null ? (c = h = y, a = f) : h = h.next = y, o |= g;
      if (s = s.next, s === null) {
        if (s = l.shared.pending, s === null) break;
        g = s, s = g.next, g.next = null, l.lastBaseUpdate = g, l.shared.pending = null;
      }
    } while (!0);
    if (h === null && (a = f), l.baseState = a, l.firstBaseUpdate = c, l.lastBaseUpdate = h, t = l.shared.interleaved, t !== null) {
      l = t;
      do
        o |= l.lane, l = l.next;
      while (l !== t);
    } else i === null && (l.shared.lanes = 0);
    hn |= o, e.lanes = o, e.memoizedState = f;
  }
}
function hu(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], l = r.callback;
    if (l !== null) {
      if (r.callback = null, r = n, typeof l != "function") throw Error(R(191, l));
      l.call(r);
    }
  }
}
var ll = {}, vt = tn(ll), Wr = tn(ll), Qr = tn(ll);
function an(e) {
  if (e === ll) throw Error(R(174));
  return e;
}
function Xs(e, t) {
  switch (Z(Qr, t), Z(Wr, e), Z(vt, ll), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Oo(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Oo(t, e);
  }
  ee(vt), Z(vt, t);
}
function Gn() {
  ee(vt), ee(Wr), ee(Qr);
}
function gd(e) {
  an(Qr.current);
  var t = an(vt.current), n = Oo(t, e.type);
  t !== n && (Z(Wr, e), Z(vt, n));
}
function Gs(e) {
  Wr.current === e && (ee(vt), ee(Wr));
}
var re = tn(0);
function oi(e) {
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
var uo = [];
function Ys() {
  for (var e = 0; e < uo.length; e++) uo[e]._workInProgressVersionPrimary = null;
  uo.length = 0;
}
var zl = Tt.ReactCurrentDispatcher, co = Tt.ReactCurrentBatchConfig, pn = 0, le = null, de = null, he = null, si = !1, Dr = !1, Kr = 0, Hh = 0;
function Se() {
  throw Error(R(321));
}
function Js(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!ot(e[n], t[n])) return !1;
  return !0;
}
function Zs(e, t, n, r, l, i) {
  if (pn = i, le = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, zl.current = e === null || e.memoizedState === null ? Xh : Gh, e = n(r, l), Dr) {
    i = 0;
    do {
      if (Dr = !1, Kr = 0, 25 <= i) throw Error(R(301));
      i += 1, he = de = null, t.updateQueue = null, zl.current = Yh, e = n(r, l);
    } while (Dr);
  }
  if (zl.current = ai, t = de !== null && de.next !== null, pn = 0, he = de = le = null, si = !1, t) throw Error(R(300));
  return e;
}
function qs() {
  var e = Kr !== 0;
  return Kr = 0, e;
}
function pt() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return he === null ? le.memoizedState = he = e : he = he.next = e, he;
}
function qe() {
  if (de === null) {
    var e = le.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = de.next;
  var t = he === null ? le.memoizedState : he.next;
  if (t !== null) he = t, de = e;
  else {
    if (e === null) throw Error(R(310));
    de = e, e = { memoizedState: de.memoizedState, baseState: de.baseState, baseQueue: de.baseQueue, queue: de.queue, next: null }, he === null ? le.memoizedState = he = e : he = he.next = e;
  }
  return he;
}
function Xr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function fo(e) {
  var t = qe(), n = t.queue;
  if (n === null) throw Error(R(311));
  n.lastRenderedReducer = e;
  var r = de, l = r.baseQueue, i = n.pending;
  if (i !== null) {
    if (l !== null) {
      var o = l.next;
      l.next = i.next, i.next = o;
    }
    r.baseQueue = l = i, n.pending = null;
  }
  if (l !== null) {
    i = l.next, r = r.baseState;
    var s = o = null, a = null, c = i;
    do {
      var h = c.lane;
      if ((pn & h) === h) a !== null && (a = a.next = { lane: 0, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null }), r = c.hasEagerState ? c.eagerState : e(r, c.action);
      else {
        var f = {
          lane: h,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null
        };
        a === null ? (s = a = f, o = r) : a = a.next = f, le.lanes |= h, hn |= h;
      }
      c = c.next;
    } while (c !== null && c !== i);
    a === null ? o = r : a.next = s, ot(r, t.memoizedState) || (Pe = !0), t.memoizedState = r, t.baseState = o, t.baseQueue = a, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    l = e;
    do
      i = l.lane, le.lanes |= i, hn |= i, l = l.next;
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function po(e) {
  var t = qe(), n = t.queue;
  if (n === null) throw Error(R(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, l = n.pending, i = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var o = l = l.next;
    do
      i = e(i, o.action), o = o.next;
    while (o !== l);
    ot(i, t.memoizedState) || (Pe = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
  }
  return [i, r];
}
function yd() {
}
function xd(e, t) {
  var n = le, r = qe(), l = t(), i = !ot(r.memoizedState, l);
  if (i && (r.memoizedState = l, Pe = !0), r = r.queue, ea(Sd.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || he !== null && he.memoizedState.tag & 1) {
    if (n.flags |= 2048, Gr(9, kd.bind(null, n, r, l, t), void 0, null), ve === null) throw Error(R(349));
    pn & 30 || wd(n, t, l);
  }
  return l;
}
function wd(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = le.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, le.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function kd(e, t, n, r) {
  t.value = n, t.getSnapshot = r, Cd(t) && Ed(e);
}
function Sd(e, t, n) {
  return n(function() {
    Cd(t) && Ed(e);
  });
}
function Cd(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !ot(e, n);
  } catch {
    return !0;
  }
}
function Ed(e) {
  var t = Dt(e, 1);
  t !== null && it(t, e, 1, -1);
}
function mu(e) {
  var t = pt();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Xr, lastRenderedState: e }, t.queue = e, e = e.dispatch = Kh.bind(null, le, e), [t.memoizedState, e];
}
function Gr(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = le.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, le.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Nd() {
  return qe().memoizedState;
}
function Fl(e, t, n, r) {
  var l = pt();
  le.flags |= e, l.memoizedState = Gr(1 | t, n, void 0, r === void 0 ? null : r);
}
function Di(e, t, n, r) {
  var l = qe();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (de !== null) {
    var o = de.memoizedState;
    if (i = o.destroy, r !== null && Js(r, o.deps)) {
      l.memoizedState = Gr(t, n, i, r);
      return;
    }
  }
  le.flags |= e, l.memoizedState = Gr(1 | t, n, i, r);
}
function vu(e, t) {
  return Fl(8390656, 8, e, t);
}
function ea(e, t) {
  return Di(2048, 8, e, t);
}
function jd(e, t) {
  return Di(4, 2, e, t);
}
function Dd(e, t) {
  return Di(4, 4, e, t);
}
function Rd(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function Td(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Di(4, 4, Rd.bind(null, t, e), n);
}
function ta() {
}
function Id(e, t) {
  var n = qe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Js(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Ld(e, t) {
  var n = qe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Js(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Pd(e, t, n) {
  return pn & 21 ? (ot(n, t) || (n = zc(), le.lanes |= n, hn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Pe = !0), e.memoizedState = n);
}
function Wh(e, t) {
  var n = Y;
  Y = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = co.transition;
  co.transition = {};
  try {
    e(!1), t();
  } finally {
    Y = n, co.transition = r;
  }
}
function _d() {
  return qe().memoizedState;
}
function Qh(e, t, n) {
  var r = Gt(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Od(e)) Md(t, n);
  else if (n = md(e, t, n, r), n !== null) {
    var l = De();
    it(n, e, r, l), Ad(n, t, r);
  }
}
function Kh(e, t, n) {
  var r = Gt(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Od(e)) Md(t, l);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
      var o = t.lastRenderedState, s = i(o, n);
      if (l.hasEagerState = !0, l.eagerState = s, ot(s, o)) {
        var a = t.interleaved;
        a === null ? (l.next = l, Qs(t)) : (l.next = a.next, a.next = l), t.interleaved = l;
        return;
      }
    } catch {
    } finally {
    }
    n = md(e, t, l, r), n !== null && (l = De(), it(n, e, r, l), Ad(n, t, r));
  }
}
function Od(e) {
  var t = e.alternate;
  return e === le || t !== null && t === le;
}
function Md(e, t) {
  Dr = si = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Ad(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Ps(e, n);
  }
}
var ai = { readContext: Ze, useCallback: Se, useContext: Se, useEffect: Se, useImperativeHandle: Se, useInsertionEffect: Se, useLayoutEffect: Se, useMemo: Se, useReducer: Se, useRef: Se, useState: Se, useDebugValue: Se, useDeferredValue: Se, useTransition: Se, useMutableSource: Se, useSyncExternalStore: Se, useId: Se, unstable_isNewReconciler: !1 }, Xh = { readContext: Ze, useCallback: function(e, t) {
  return pt().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Ze, useEffect: vu, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Fl(
    4194308,
    4,
    Rd.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Fl(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Fl(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = pt();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = pt();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Qh.bind(null, le, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = pt();
  return e = { current: e }, t.memoizedState = e;
}, useState: mu, useDebugValue: ta, useDeferredValue: function(e) {
  return pt().memoizedState = e;
}, useTransition: function() {
  var e = mu(!1), t = e[0];
  return e = Wh.bind(null, e[1]), pt().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = le, l = pt();
  if (ne) {
    if (n === void 0) throw Error(R(407));
    n = n();
  } else {
    if (n = t(), ve === null) throw Error(R(349));
    pn & 30 || wd(r, t, n);
  }
  l.memoizedState = n;
  var i = { value: n, getSnapshot: t };
  return l.queue = i, vu(Sd.bind(
    null,
    r,
    i,
    e
  ), [e]), r.flags |= 2048, Gr(9, kd.bind(null, r, i, n, t), void 0, null), n;
}, useId: function() {
  var e = pt(), t = ve.identifierPrefix;
  if (ne) {
    var n = Ct, r = St;
    n = (r & ~(1 << 32 - lt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Kr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = Hh++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, Gh = {
  readContext: Ze,
  useCallback: Id,
  useContext: Ze,
  useEffect: ea,
  useImperativeHandle: Td,
  useInsertionEffect: jd,
  useLayoutEffect: Dd,
  useMemo: Ld,
  useReducer: fo,
  useRef: Nd,
  useState: function() {
    return fo(Xr);
  },
  useDebugValue: ta,
  useDeferredValue: function(e) {
    var t = qe();
    return Pd(t, de.memoizedState, e);
  },
  useTransition: function() {
    var e = fo(Xr)[0], t = qe().memoizedState;
    return [e, t];
  },
  useMutableSource: yd,
  useSyncExternalStore: xd,
  useId: _d,
  unstable_isNewReconciler: !1
}, Yh = { readContext: Ze, useCallback: Id, useContext: Ze, useEffect: ea, useImperativeHandle: Td, useInsertionEffect: jd, useLayoutEffect: Dd, useMemo: Ld, useReducer: po, useRef: Nd, useState: function() {
  return po(Xr);
}, useDebugValue: ta, useDeferredValue: function(e) {
  var t = qe();
  return de === null ? t.memoizedState = e : Pd(t, de.memoizedState, e);
}, useTransition: function() {
  var e = po(Xr)[0], t = qe().memoizedState;
  return [e, t];
}, useMutableSource: yd, useSyncExternalStore: xd, useId: _d, unstable_isNewReconciler: !1 };
function tt(e, t) {
  if (e && e.defaultProps) {
    t = ie({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function ts(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : ie({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Ri = { isMounted: function(e) {
  return (e = e._reactInternals) ? gn(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = De(), l = Gt(e), i = Et(r, l);
  i.payload = t, n != null && (i.callback = n), t = Kt(e, i, l), t !== null && (it(t, e, l, r), Al(t, e, l));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = De(), l = Gt(e), i = Et(r, l);
  i.tag = 1, i.payload = t, n != null && (i.callback = n), t = Kt(e, i, l), t !== null && (it(t, e, l, r), Al(t, e, l));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = De(), r = Gt(e), l = Et(n, r);
  l.tag = 2, t != null && (l.callback = t), t = Kt(e, l, r), t !== null && (it(t, e, r, n), Al(t, e, r));
} };
function gu(e, t, n, r, l, i, o) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, o) : t.prototype && t.prototype.isPureReactComponent ? !$r(n, r) || !$r(l, i) : !0;
}
function zd(e, t, n) {
  var r = !1, l = Zt, i = t.contextType;
  return typeof i == "object" && i !== null ? i = Ze(i) : (l = Oe(t) ? dn : Ne.current, r = t.contextTypes, i = (r = r != null) ? Qn(e, l) : Zt), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Ri, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function yu(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Ri.enqueueReplaceState(t, t.state, null);
}
function ns(e, t, n, r) {
  var l = e.stateNode;
  l.props = n, l.state = e.memoizedState, l.refs = {}, Ks(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? l.context = Ze(i) : (i = Oe(t) ? dn : Ne.current, l.context = Qn(e, i)), l.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (ts(e, t, i, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && Ri.enqueueReplaceState(l, l.state, null), ii(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function Yn(e, t) {
  try {
    var n = "", r = t;
    do
      n += Ep(r), r = r.return;
    while (r);
    var l = n;
  } catch (i) {
    l = `
Error generating stack: ` + i.message + `
` + i.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function ho(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function rs(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var Jh = typeof WeakMap == "function" ? WeakMap : Map;
function Fd(e, t, n) {
  n = Et(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    ci || (ci = !0, ps = r), rs(e, t);
  }, n;
}
function bd(e, t, n) {
  n = Et(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    n.payload = function() {
      return r(l);
    }, n.callback = function() {
      rs(e, t);
    };
  }
  var i = e.stateNode;
  return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
    rs(e, t), typeof r != "function" && (Xt === null ? Xt = /* @__PURE__ */ new Set([this]) : Xt.add(this));
    var o = t.stack;
    this.componentDidCatch(t.value, { componentStack: o !== null ? o : "" });
  }), n;
}
function xu(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Jh();
    var l = /* @__PURE__ */ new Set();
    r.set(t, l);
  } else l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
  l.has(n) || (l.add(n), e = dm.bind(null, e, t, n), t.then(e, e));
}
function wu(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function ku(e, t, n, r, l) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Et(-1, 1), t.tag = 2, Kt(n, t, 1))), n.lanes |= 1), e);
}
var Zh = Tt.ReactCurrentOwner, Pe = !1;
function je(e, t, n, r) {
  t.child = e === null ? hd(t, null, n, r) : Xn(t, e.child, n, r);
}
function Su(e, t, n, r, l) {
  n = n.render;
  var i = t.ref;
  return Bn(t, l), r = Zs(e, t, n, r, i, l), n = qs(), e !== null && !Pe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Rt(e, t, l)) : (ne && n && Us(t), t.flags |= 1, je(e, t, r, l), t.child);
}
function Cu(e, t, n, r, l) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" && !ua(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, Ud(e, t, i, r, l)) : (e = Bl(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (i = e.child, !(e.lanes & l)) {
    var o = i.memoizedProps;
    if (n = n.compare, n = n !== null ? n : $r, n(o, r) && e.ref === t.ref) return Rt(e, t, l);
  }
  return t.flags |= 1, e = Yt(i, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Ud(e, t, n, r, l) {
  if (e !== null) {
    var i = e.memoizedProps;
    if ($r(i, r) && e.ref === t.ref) if (Pe = !1, t.pendingProps = r = i, (e.lanes & l) !== 0) e.flags & 131072 && (Pe = !0);
    else return t.lanes = e.lanes, Rt(e, t, l);
  }
  return ls(e, t, n, r, l);
}
function $d(e, t, n) {
  var r = t.pendingProps, l = r.children, i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Z(An, Ue), Ue |= n;
  else {
    if (!(n & 1073741824)) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, Z(An, Ue), Ue |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, Z(An, Ue), Ue |= r;
  }
  else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, Z(An, Ue), Ue |= r;
  return je(e, t, l, n), t.child;
}
function Bd(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function ls(e, t, n, r, l) {
  var i = Oe(n) ? dn : Ne.current;
  return i = Qn(t, i), Bn(t, l), n = Zs(e, t, n, r, i, l), r = qs(), e !== null && !Pe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Rt(e, t, l)) : (ne && r && Us(t), t.flags |= 1, je(e, t, n, l), t.child);
}
function Eu(e, t, n, r, l) {
  if (Oe(n)) {
    var i = !0;
    ei(t);
  } else i = !1;
  if (Bn(t, l), t.stateNode === null) bl(e, t), zd(t, n, r), ns(t, n, r, l), r = !0;
  else if (e === null) {
    var o = t.stateNode, s = t.memoizedProps;
    o.props = s;
    var a = o.context, c = n.contextType;
    typeof c == "object" && c !== null ? c = Ze(c) : (c = Oe(n) ? dn : Ne.current, c = Qn(t, c));
    var h = n.getDerivedStateFromProps, f = typeof h == "function" || typeof o.getSnapshotBeforeUpdate == "function";
    f || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (s !== r || a !== c) && yu(t, o, r, c), zt = !1;
    var g = t.memoizedState;
    o.state = g, ii(t, r, o, l), a = t.memoizedState, s !== r || g !== a || _e.current || zt ? (typeof h == "function" && (ts(t, n, h, r), a = t.memoizedState), (s = zt || gu(t, n, s, r, g, a, c)) ? (f || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = a), o.props = r, o.state = a, o.context = c, r = s) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    o = t.stateNode, vd(e, t), s = t.memoizedProps, c = t.type === t.elementType ? s : tt(t.type, s), o.props = c, f = t.pendingProps, g = o.context, a = n.contextType, typeof a == "object" && a !== null ? a = Ze(a) : (a = Oe(n) ? dn : Ne.current, a = Qn(t, a));
    var y = n.getDerivedStateFromProps;
    (h = typeof y == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (s !== f || g !== a) && yu(t, o, r, a), zt = !1, g = t.memoizedState, o.state = g, ii(t, r, o, l);
    var k = t.memoizedState;
    s !== f || g !== k || _e.current || zt ? (typeof y == "function" && (ts(t, n, y, r), k = t.memoizedState), (c = zt || gu(t, n, c, r, g, k, a) || !1) ? (h || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, k, a), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, k, a)), typeof o.componentDidUpdate == "function" && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || s === e.memoizedProps && g === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && g === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = k), o.props = r, o.state = k, o.context = a, r = c) : (typeof o.componentDidUpdate != "function" || s === e.memoizedProps && g === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && g === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return is(e, t, n, r, i, l);
}
function is(e, t, n, r, l, i) {
  Bd(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return l && uu(t, n, !1), Rt(e, t, i);
  r = t.stateNode, Zh.current = t;
  var s = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && o ? (t.child = Xn(t, e.child, null, i), t.child = Xn(t, null, s, i)) : je(e, t, s, i), t.memoizedState = r.state, l && uu(t, n, !0), t.child;
}
function Vd(e) {
  var t = e.stateNode;
  t.pendingContext ? au(e, t.pendingContext, t.pendingContext !== t.context) : t.context && au(e, t.context, !1), Xs(e, t.containerInfo);
}
function Nu(e, t, n, r, l) {
  return Kn(), Bs(l), t.flags |= 256, je(e, t, n, r), t.child;
}
var os = { dehydrated: null, treeContext: null, retryLane: 0 };
function ss(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Hd(e, t, n) {
  var r = t.pendingProps, l = re.current, i = !1, o = (t.flags & 128) !== 0, s;
  if ((s = o) || (s = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), s ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), Z(re, l & 1), e === null)
    return qo(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (o = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, o = { mode: "hidden", children: o }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = o) : i = Li(o, r, 0, null), e = cn(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = ss(n), t.memoizedState = os, e) : na(t, o));
  if (l = e.memoizedState, l !== null && (s = l.dehydrated, s !== null)) return qh(e, t, o, r, s, l, n);
  if (i) {
    i = r.fallback, o = t.mode, l = e.child, s = l.sibling;
    var a = { mode: "hidden", children: r.children };
    return !(o & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = a, t.deletions = null) : (r = Yt(l, a), r.subtreeFlags = l.subtreeFlags & 14680064), s !== null ? i = Yt(s, i) : (i = cn(i, o, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, o = e.child.memoizedState, o = o === null ? ss(n) : { baseLanes: o.baseLanes | n, cachePool: null, transitions: o.transitions }, i.memoizedState = o, i.childLanes = e.childLanes & ~n, t.memoizedState = os, r;
  }
  return i = e.child, e = i.sibling, r = Yt(i, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function na(e, t) {
  return t = Li({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function El(e, t, n, r) {
  return r !== null && Bs(r), Xn(t, e.child, null, n), e = na(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function qh(e, t, n, r, l, i, o) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = ho(Error(R(422))), El(e, t, o, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, l = t.mode, r = Li({ mode: "visible", children: r.children }, l, 0, null), i = cn(i, l, o, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && Xn(t, e.child, null, o), t.child.memoizedState = ss(o), t.memoizedState = os, i);
  if (!(t.mode & 1)) return El(e, t, o, null);
  if (l.data === "$!") {
    if (r = l.nextSibling && l.nextSibling.dataset, r) var s = r.dgst;
    return r = s, i = Error(R(419)), r = ho(i, r, void 0), El(e, t, o, r);
  }
  if (s = (o & e.childLanes) !== 0, Pe || s) {
    if (r = ve, r !== null) {
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
      l = l & (r.suspendedLanes | o) ? 0 : l, l !== 0 && l !== i.retryLane && (i.retryLane = l, Dt(e, l), it(r, e, l, -1));
    }
    return aa(), r = ho(Error(R(421))), El(e, t, o, r);
  }
  return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = fm.bind(null, e), l._reactRetry = t, null) : (e = i.treeContext, $e = Qt(l.nextSibling), Be = t, ne = !0, rt = null, e !== null && (Xe[Ge++] = St, Xe[Ge++] = Ct, Xe[Ge++] = fn, St = e.id, Ct = e.overflow, fn = t), t = na(t, r.children), t.flags |= 4096, t);
}
function ju(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), es(e.return, t, n);
}
function mo(e, t, n, r, l) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = l);
}
function Wd(e, t, n) {
  var r = t.pendingProps, l = r.revealOrder, i = r.tail;
  if (je(e, t, r.children, n), r = re.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && ju(e, n, t);
      else if (e.tag === 19) ju(e, n, t);
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
  if (Z(re, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (l) {
    case "forwards":
      for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && oi(e) === null && (l = n), n = n.sibling;
      n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), mo(t, !1, l, n, i);
      break;
    case "backwards":
      for (n = null, l = t.child, t.child = null; l !== null; ) {
        if (e = l.alternate, e !== null && oi(e) === null) {
          t.child = l;
          break;
        }
        e = l.sibling, l.sibling = n, n = l, l = e;
      }
      mo(t, !0, n, null, i);
      break;
    case "together":
      mo(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function bl(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function Rt(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), hn |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(R(153));
  if (t.child !== null) {
    for (e = t.child, n = Yt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = Yt(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function em(e, t, n) {
  switch (t.tag) {
    case 3:
      Vd(t), Kn();
      break;
    case 5:
      gd(t);
      break;
    case 1:
      Oe(t.type) && ei(t);
      break;
    case 4:
      Xs(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, l = t.memoizedProps.value;
      Z(ri, r._currentValue), r._currentValue = l;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (Z(re, re.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Hd(e, t, n) : (Z(re, re.current & 1), e = Rt(e, t, n), e !== null ? e.sibling : null);
      Z(re, re.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return Wd(e, t, n);
        t.flags |= 128;
      }
      if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), Z(re, re.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, $d(e, t, n);
  }
  return Rt(e, t, n);
}
var Qd, as, Kd, Xd;
Qd = function(e, t) {
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
as = function() {
};
Kd = function(e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    e = t.stateNode, an(vt.current);
    var i = null;
    switch (n) {
      case "input":
        l = Io(e, l), r = Io(e, r), i = [];
        break;
      case "select":
        l = ie({}, l, { value: void 0 }), r = ie({}, r, { value: void 0 }), i = [];
        break;
      case "textarea":
        l = _o(e, l), r = _o(e, r), i = [];
        break;
      default:
        typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Zl);
    }
    Mo(n, r);
    var o;
    n = null;
    for (c in l) if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null) if (c === "style") {
      var s = l[c];
      for (o in s) s.hasOwnProperty(o) && (n || (n = {}), n[o] = "");
    } else c !== "dangerouslySetInnerHTML" && c !== "children" && c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (Or.hasOwnProperty(c) ? i || (i = []) : (i = i || []).push(c, null));
    for (c in r) {
      var a = r[c];
      if (s = l != null ? l[c] : void 0, r.hasOwnProperty(c) && a !== s && (a != null || s != null)) if (c === "style") if (s) {
        for (o in s) !s.hasOwnProperty(o) || a && a.hasOwnProperty(o) || (n || (n = {}), n[o] = "");
        for (o in a) a.hasOwnProperty(o) && s[o] !== a[o] && (n || (n = {}), n[o] = a[o]);
      } else n || (i || (i = []), i.push(
        c,
        n
      )), n = a;
      else c === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, s = s ? s.__html : void 0, a != null && s !== a && (i = i || []).push(c, a)) : c === "children" ? typeof a != "string" && typeof a != "number" || (i = i || []).push(c, "" + a) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && (Or.hasOwnProperty(c) ? (a != null && c === "onScroll" && q("scroll", e), i || s === a || (i = [])) : (i = i || []).push(c, a));
    }
    n && (i = i || []).push("style", n);
    var c = i;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
Xd = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function mr(e, t) {
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
function Ce(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
  else for (l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function tm(e, t, n) {
  var r = t.pendingProps;
  switch ($s(t), t.tag) {
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
      return Ce(t), null;
    case 1:
      return Oe(t.type) && ql(), Ce(t), null;
    case 3:
      return r = t.stateNode, Gn(), ee(_e), ee(Ne), Ys(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Sl(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, rt !== null && (vs(rt), rt = null))), as(e, t), Ce(t), null;
    case 5:
      Gs(t);
      var l = an(Qr.current);
      if (n = t.type, e !== null && t.stateNode != null) Kd(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(R(166));
          return Ce(t), null;
        }
        if (e = an(vt.current), Sl(t)) {
          r = t.stateNode, n = t.type;
          var i = t.memoizedProps;
          switch (r[ht] = t, r[Hr] = i, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              q("cancel", r), q("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              q("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < kr.length; l++) q(kr[l], r);
              break;
            case "source":
              q("error", r);
              break;
            case "img":
            case "image":
            case "link":
              q(
                "error",
                r
              ), q("load", r);
              break;
            case "details":
              q("toggle", r);
              break;
            case "input":
              Ma(r, i), q("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!i.multiple }, q("invalid", r);
              break;
            case "textarea":
              za(r, i), q("invalid", r);
          }
          Mo(n, i), l = null;
          for (var o in i) if (i.hasOwnProperty(o)) {
            var s = i[o];
            o === "children" ? typeof s == "string" ? r.textContent !== s && (i.suppressHydrationWarning !== !0 && kl(r.textContent, s, e), l = ["children", s]) : typeof s == "number" && r.textContent !== "" + s && (i.suppressHydrationWarning !== !0 && kl(
              r.textContent,
              s,
              e
            ), l = ["children", "" + s]) : Or.hasOwnProperty(o) && s != null && o === "onScroll" && q("scroll", r);
          }
          switch (n) {
            case "input":
              pl(r), Aa(r, i, !0);
              break;
            case "textarea":
              pl(r), Fa(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Zl);
          }
          r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          o = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Sc(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = o.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, { is: r.is }) : (e = o.createElement(n), n === "select" && (o = e, r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, n), e[ht] = t, e[Hr] = r, Qd(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (o = Ao(n, r), n) {
              case "dialog":
                q("cancel", e), q("close", e), l = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                q("load", e), l = r;
                break;
              case "video":
              case "audio":
                for (l = 0; l < kr.length; l++) q(kr[l], e);
                l = r;
                break;
              case "source":
                q("error", e), l = r;
                break;
              case "img":
              case "image":
              case "link":
                q(
                  "error",
                  e
                ), q("load", e), l = r;
                break;
              case "details":
                q("toggle", e), l = r;
                break;
              case "input":
                Ma(e, r), l = Io(e, r), q("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, l = ie({}, r, { value: void 0 }), q("invalid", e);
                break;
              case "textarea":
                za(e, r), l = _o(e, r), q("invalid", e);
                break;
              default:
                l = r;
            }
            Mo(n, l), s = l;
            for (i in s) if (s.hasOwnProperty(i)) {
              var a = s[i];
              i === "style" ? Nc(e, a) : i === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, a != null && Cc(e, a)) : i === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && Mr(e, a) : typeof a == "number" && Mr(e, "" + a) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Or.hasOwnProperty(i) ? a != null && i === "onScroll" && q("scroll", e) : a != null && js(e, i, a, o));
            }
            switch (n) {
              case "input":
                pl(e), Aa(e, r, !1);
                break;
              case "textarea":
                pl(e), Fa(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Jt(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, i = r.value, i != null ? Fn(e, !!r.multiple, i, !1) : r.defaultValue != null && Fn(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Zl);
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
      return Ce(t), null;
    case 6:
      if (e && t.stateNode != null) Xd(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(R(166));
        if (n = an(Qr.current), an(vt.current), Sl(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[ht] = t, (i = r.nodeValue !== n) && (e = Be, e !== null)) switch (e.tag) {
            case 3:
              kl(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && kl(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          i && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[ht] = t, t.stateNode = r;
      }
      return Ce(t), null;
    case 13:
      if (ee(re), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (ne && $e !== null && t.mode & 1 && !(t.flags & 128)) fd(), Kn(), t.flags |= 98560, i = !1;
        else if (i = Sl(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!i) throw Error(R(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(R(317));
            i[ht] = t;
          } else Kn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          Ce(t), i = !1;
        } else rt !== null && (vs(rt), rt = null), i = !0;
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || re.current & 1 ? pe === 0 && (pe = 3) : aa())), t.updateQueue !== null && (t.flags |= 4), Ce(t), null);
    case 4:
      return Gn(), as(e, t), e === null && Br(t.stateNode.containerInfo), Ce(t), null;
    case 10:
      return Ws(t.type._context), Ce(t), null;
    case 17:
      return Oe(t.type) && ql(), Ce(t), null;
    case 19:
      if (ee(re), i = t.memoizedState, i === null) return Ce(t), null;
      if (r = (t.flags & 128) !== 0, o = i.rendering, o === null) if (r) mr(i, !1);
      else {
        if (pe !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (o = oi(e), o !== null) {
            for (t.flags |= 128, mr(i, !1), r = o.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) i = n, e = r, i.flags &= 14680066, o = i.alternate, o === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = o.childLanes, i.lanes = o.lanes, i.child = o.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = o.memoizedProps, i.memoizedState = o.memoizedState, i.updateQueue = o.updateQueue, i.type = o.type, e = o.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return Z(re, re.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        i.tail !== null && ae() > Jn && (t.flags |= 128, r = !0, mr(i, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = oi(o), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), mr(i, !0), i.tail === null && i.tailMode === "hidden" && !o.alternate && !ne) return Ce(t), null;
        } else 2 * ae() - i.renderingStartTime > Jn && n !== 1073741824 && (t.flags |= 128, r = !0, mr(i, !1), t.lanes = 4194304);
        i.isBackwards ? (o.sibling = t.child, t.child = o) : (n = i.last, n !== null ? n.sibling = o : t.child = o, i.last = o);
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = ae(), t.sibling = null, n = re.current, Z(re, r ? n & 1 | 2 : n & 1), t) : (Ce(t), null);
    case 22:
    case 23:
      return sa(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Ue & 1073741824 && (Ce(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ce(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(R(156, t.tag));
}
function nm(e, t) {
  switch ($s(t), t.tag) {
    case 1:
      return Oe(t.type) && ql(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return Gn(), ee(_e), ee(Ne), Ys(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Gs(t), null;
    case 13:
      if (ee(re), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(R(340));
        Kn();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return ee(re), null;
    case 4:
      return Gn(), null;
    case 10:
      return Ws(t.type._context), null;
    case 22:
    case 23:
      return sa(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Nl = !1, Ee = !1, rm = typeof WeakSet == "function" ? WeakSet : Set, A = null;
function Mn(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    oe(e, t, r);
  }
  else n.current = null;
}
function us(e, t, n) {
  try {
    n();
  } catch (r) {
    oe(e, t, r);
  }
}
var Du = !1;
function lm(e, t) {
  if (Qo = Gl, e = qc(), bs(e)) {
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
        var o = 0, s = -1, a = -1, c = 0, h = 0, f = e, g = null;
        t: for (; ; ) {
          for (var y; f !== n || l !== 0 && f.nodeType !== 3 || (s = o + l), f !== i || r !== 0 && f.nodeType !== 3 || (a = o + r), f.nodeType === 3 && (o += f.nodeValue.length), (y = f.firstChild) !== null; )
            g = f, f = y;
          for (; ; ) {
            if (f === e) break t;
            if (g === n && ++c === l && (s = o), g === i && ++h === r && (a = o), (y = f.nextSibling) !== null) break;
            f = g, g = f.parentNode;
          }
          f = y;
        }
        n = s === -1 || a === -1 ? null : { start: s, end: a };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Ko = { focusedElem: e, selectionRange: n }, Gl = !1, A = t; A !== null; ) if (t = A, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, A = e;
  else for (; A !== null; ) {
    t = A;
    try {
      var k = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (k !== null) {
            var w = k.memoizedProps, I = k.memoizedState, p = t.stateNode, d = p.getSnapshotBeforeUpdate(t.elementType === t.type ? w : tt(t.type, w), I);
            p.__reactInternalSnapshotBeforeUpdate = d;
          }
          break;
        case 3:
          var m = t.stateNode.containerInfo;
          m.nodeType === 1 ? m.textContent = "" : m.nodeType === 9 && m.documentElement && m.removeChild(m.documentElement);
          break;
        case 5:
        case 6:
        case 4:
        case 17:
          break;
        default:
          throw Error(R(163));
      }
    } catch (x) {
      oe(t, t.return, x);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, A = e;
      break;
    }
    A = t.return;
  }
  return k = Du, Du = !1, k;
}
function Rr(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var l = r = r.next;
    do {
      if ((l.tag & e) === e) {
        var i = l.destroy;
        l.destroy = void 0, i !== void 0 && us(t, n, i);
      }
      l = l.next;
    } while (l !== r);
  }
}
function Ti(e, t) {
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
function cs(e) {
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
function Gd(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Gd(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[ht], delete t[Hr], delete t[Yo], delete t[Uh], delete t[$h])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Yd(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Ru(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || Yd(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function ds(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Zl));
  else if (r !== 4 && (e = e.child, e !== null)) for (ds(e, t, n), e = e.sibling; e !== null; ) ds(e, t, n), e = e.sibling;
}
function fs(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (fs(e, t, n), e = e.sibling; e !== null; ) fs(e, t, n), e = e.sibling;
}
var ye = null, nt = !1;
function Mt(e, t, n) {
  for (n = n.child; n !== null; ) Jd(e, t, n), n = n.sibling;
}
function Jd(e, t, n) {
  if (mt && typeof mt.onCommitFiberUnmount == "function") try {
    mt.onCommitFiberUnmount(ki, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      Ee || Mn(n, t);
    case 6:
      var r = ye, l = nt;
      ye = null, Mt(e, t, n), ye = r, nt = l, ye !== null && (nt ? (e = ye, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : ye.removeChild(n.stateNode));
      break;
    case 18:
      ye !== null && (nt ? (e = ye, n = n.stateNode, e.nodeType === 8 ? so(e.parentNode, n) : e.nodeType === 1 && so(e, n), br(e)) : so(ye, n.stateNode));
      break;
    case 4:
      r = ye, l = nt, ye = n.stateNode.containerInfo, nt = !0, Mt(e, t, n), ye = r, nt = l;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Ee && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        l = r = r.next;
        do {
          var i = l, o = i.destroy;
          i = i.tag, o !== void 0 && (i & 2 || i & 4) && us(n, t, o), l = l.next;
        } while (l !== r);
      }
      Mt(e, t, n);
      break;
    case 1:
      if (!Ee && (Mn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (s) {
        oe(n, t, s);
      }
      Mt(e, t, n);
      break;
    case 21:
      Mt(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (Ee = (r = Ee) || n.memoizedState !== null, Mt(e, t, n), Ee = r) : Mt(e, t, n);
      break;
    default:
      Mt(e, t, n);
  }
}
function Tu(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new rm()), t.forEach(function(r) {
      var l = pm.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(l, l));
    });
  }
}
function et(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var l = n[r];
    try {
      var i = e, o = t, s = o;
      e: for (; s !== null; ) {
        switch (s.tag) {
          case 5:
            ye = s.stateNode, nt = !1;
            break e;
          case 3:
            ye = s.stateNode.containerInfo, nt = !0;
            break e;
          case 4:
            ye = s.stateNode.containerInfo, nt = !0;
            break e;
        }
        s = s.return;
      }
      if (ye === null) throw Error(R(160));
      Jd(i, o, l), ye = null, nt = !1;
      var a = l.alternate;
      a !== null && (a.return = null), l.return = null;
    } catch (c) {
      oe(l, t, c);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Zd(t, e), t = t.sibling;
}
function Zd(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (et(t, e), ft(e), r & 4) {
        try {
          Rr(3, e, e.return), Ti(3, e);
        } catch (w) {
          oe(e, e.return, w);
        }
        try {
          Rr(5, e, e.return);
        } catch (w) {
          oe(e, e.return, w);
        }
      }
      break;
    case 1:
      et(t, e), ft(e), r & 512 && n !== null && Mn(n, n.return);
      break;
    case 5:
      if (et(t, e), ft(e), r & 512 && n !== null && Mn(n, n.return), e.flags & 32) {
        var l = e.stateNode;
        try {
          Mr(l, "");
        } catch (w) {
          oe(e, e.return, w);
        }
      }
      if (r & 4 && (l = e.stateNode, l != null)) {
        var i = e.memoizedProps, o = n !== null ? n.memoizedProps : i, s = e.type, a = e.updateQueue;
        if (e.updateQueue = null, a !== null) try {
          s === "input" && i.type === "radio" && i.name != null && wc(l, i), Ao(s, o);
          var c = Ao(s, i);
          for (o = 0; o < a.length; o += 2) {
            var h = a[o], f = a[o + 1];
            h === "style" ? Nc(l, f) : h === "dangerouslySetInnerHTML" ? Cc(l, f) : h === "children" ? Mr(l, f) : js(l, h, f, c);
          }
          switch (s) {
            case "input":
              Lo(l, i);
              break;
            case "textarea":
              kc(l, i);
              break;
            case "select":
              var g = l._wrapperState.wasMultiple;
              l._wrapperState.wasMultiple = !!i.multiple;
              var y = i.value;
              y != null ? Fn(l, !!i.multiple, y, !1) : g !== !!i.multiple && (i.defaultValue != null ? Fn(
                l,
                !!i.multiple,
                i.defaultValue,
                !0
              ) : Fn(l, !!i.multiple, i.multiple ? [] : "", !1));
          }
          l[Hr] = i;
        } catch (w) {
          oe(e, e.return, w);
        }
      }
      break;
    case 6:
      if (et(t, e), ft(e), r & 4) {
        if (e.stateNode === null) throw Error(R(162));
        l = e.stateNode, i = e.memoizedProps;
        try {
          l.nodeValue = i;
        } catch (w) {
          oe(e, e.return, w);
        }
      }
      break;
    case 3:
      if (et(t, e), ft(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        br(t.containerInfo);
      } catch (w) {
        oe(e, e.return, w);
      }
      break;
    case 4:
      et(t, e), ft(e);
      break;
    case 13:
      et(t, e), ft(e), l = e.child, l.flags & 8192 && (i = l.memoizedState !== null, l.stateNode.isHidden = i, !i || l.alternate !== null && l.alternate.memoizedState !== null || (ia = ae())), r & 4 && Tu(e);
      break;
    case 22:
      if (h = n !== null && n.memoizedState !== null, e.mode & 1 ? (Ee = (c = Ee) || h, et(t, e), Ee = c) : et(t, e), ft(e), r & 8192) {
        if (c = e.memoizedState !== null, (e.stateNode.isHidden = c) && !h && e.mode & 1) for (A = e, h = e.child; h !== null; ) {
          for (f = A = h; A !== null; ) {
            switch (g = A, y = g.child, g.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Rr(4, g, g.return);
                break;
              case 1:
                Mn(g, g.return);
                var k = g.stateNode;
                if (typeof k.componentWillUnmount == "function") {
                  r = g, n = g.return;
                  try {
                    t = r, k.props = t.memoizedProps, k.state = t.memoizedState, k.componentWillUnmount();
                  } catch (w) {
                    oe(r, n, w);
                  }
                }
                break;
              case 5:
                Mn(g, g.return);
                break;
              case 22:
                if (g.memoizedState !== null) {
                  Lu(f);
                  continue;
                }
            }
            y !== null ? (y.return = g, A = y) : Lu(f);
          }
          h = h.sibling;
        }
        e: for (h = null, f = e; ; ) {
          if (f.tag === 5) {
            if (h === null) {
              h = f;
              try {
                l = f.stateNode, c ? (i = l.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (s = f.stateNode, a = f.memoizedProps.style, o = a != null && a.hasOwnProperty("display") ? a.display : null, s.style.display = Ec("display", o));
              } catch (w) {
                oe(e, e.return, w);
              }
            }
          } else if (f.tag === 6) {
            if (h === null) try {
              f.stateNode.nodeValue = c ? "" : f.memoizedProps;
            } catch (w) {
              oe(e, e.return, w);
            }
          } else if ((f.tag !== 22 && f.tag !== 23 || f.memoizedState === null || f === e) && f.child !== null) {
            f.child.return = f, f = f.child;
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            h === f && (h = null), f = f.return;
          }
          h === f && (h = null), f.sibling.return = f.return, f = f.sibling;
        }
      }
      break;
    case 19:
      et(t, e), ft(e), r & 4 && Tu(e);
      break;
    case 21:
      break;
    default:
      et(
        t,
        e
      ), ft(e);
  }
}
function ft(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Yd(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(R(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Mr(l, ""), r.flags &= -33);
          var i = Ru(e);
          fs(e, i, l);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo, s = Ru(e);
          ds(e, s, o);
          break;
        default:
          throw Error(R(161));
      }
    } catch (a) {
      oe(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function im(e, t, n) {
  A = e, qd(e);
}
function qd(e, t, n) {
  for (var r = (e.mode & 1) !== 0; A !== null; ) {
    var l = A, i = l.child;
    if (l.tag === 22 && r) {
      var o = l.memoizedState !== null || Nl;
      if (!o) {
        var s = l.alternate, a = s !== null && s.memoizedState !== null || Ee;
        s = Nl;
        var c = Ee;
        if (Nl = o, (Ee = a) && !c) for (A = l; A !== null; ) o = A, a = o.child, o.tag === 22 && o.memoizedState !== null ? Pu(l) : a !== null ? (a.return = o, A = a) : Pu(l);
        for (; i !== null; ) A = i, qd(i), i = i.sibling;
        A = l, Nl = s, Ee = c;
      }
      Iu(e);
    } else l.subtreeFlags & 8772 && i !== null ? (i.return = l, A = i) : Iu(e);
  }
}
function Iu(e) {
  for (; A !== null; ) {
    var t = A;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            Ee || Ti(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !Ee) if (n === null) r.componentDidMount();
            else {
              var l = t.elementType === t.type ? n.memoizedProps : tt(t.type, n.memoizedProps);
              r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var i = t.updateQueue;
            i !== null && hu(t, i, r);
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
              hu(t, o, n);
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
              var c = t.alternate;
              if (c !== null) {
                var h = c.memoizedState;
                if (h !== null) {
                  var f = h.dehydrated;
                  f !== null && br(f);
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
            throw Error(R(163));
        }
        Ee || t.flags & 512 && cs(t);
      } catch (g) {
        oe(t, t.return, g);
      }
    }
    if (t === e) {
      A = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, A = n;
      break;
    }
    A = t.return;
  }
}
function Lu(e) {
  for (; A !== null; ) {
    var t = A;
    if (t === e) {
      A = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, A = n;
      break;
    }
    A = t.return;
  }
}
function Pu(e) {
  for (; A !== null; ) {
    var t = A;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Ti(4, t);
          } catch (a) {
            oe(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              oe(t, l, a);
            }
          }
          var i = t.return;
          try {
            cs(t);
          } catch (a) {
            oe(t, i, a);
          }
          break;
        case 5:
          var o = t.return;
          try {
            cs(t);
          } catch (a) {
            oe(t, o, a);
          }
      }
    } catch (a) {
      oe(t, t.return, a);
    }
    if (t === e) {
      A = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      s.return = t.return, A = s;
      break;
    }
    A = t.return;
  }
}
var om = Math.ceil, ui = Tt.ReactCurrentDispatcher, ra = Tt.ReactCurrentOwner, Je = Tt.ReactCurrentBatchConfig, Q = 0, ve = null, ue = null, xe = 0, Ue = 0, An = tn(0), pe = 0, Yr = null, hn = 0, Ii = 0, la = 0, Tr = null, Le = null, ia = 0, Jn = 1 / 0, wt = null, ci = !1, ps = null, Xt = null, jl = !1, Bt = null, di = 0, Ir = 0, hs = null, Ul = -1, $l = 0;
function De() {
  return Q & 6 ? ae() : Ul !== -1 ? Ul : Ul = ae();
}
function Gt(e) {
  return e.mode & 1 ? Q & 2 && xe !== 0 ? xe & -xe : Vh.transition !== null ? ($l === 0 && ($l = zc()), $l) : (e = Y, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Hc(e.type)), e) : 1;
}
function it(e, t, n, r) {
  if (50 < Ir) throw Ir = 0, hs = null, Error(R(185));
  tl(e, n, r), (!(Q & 2) || e !== ve) && (e === ve && (!(Q & 2) && (Ii |= n), pe === 4 && Ut(e, xe)), Me(e, r), n === 1 && Q === 0 && !(t.mode & 1) && (Jn = ae() + 500, ji && nn()));
}
function Me(e, t) {
  var n = e.callbackNode;
  Vp(e, t);
  var r = Xl(e, e === ve ? xe : 0);
  if (r === 0) n !== null && $a(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && $a(n), t === 1) e.tag === 0 ? Bh(_u.bind(null, e)) : ud(_u.bind(null, e)), Fh(function() {
      !(Q & 6) && nn();
    }), n = null;
    else {
      switch (Fc(r)) {
        case 1:
          n = Ls;
          break;
        case 4:
          n = Mc;
          break;
        case 16:
          n = Kl;
          break;
        case 536870912:
          n = Ac;
          break;
        default:
          n = Kl;
      }
      n = af(n, ef.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function ef(e, t) {
  if (Ul = -1, $l = 0, Q & 6) throw Error(R(327));
  var n = e.callbackNode;
  if (Vn() && e.callbackNode !== n) return null;
  var r = Xl(e, e === ve ? xe : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = fi(e, r);
  else {
    t = r;
    var l = Q;
    Q |= 2;
    var i = nf();
    (ve !== e || xe !== t) && (wt = null, Jn = ae() + 500, un(e, t));
    do
      try {
        um();
        break;
      } catch (s) {
        tf(e, s);
      }
    while (!0);
    Hs(), ui.current = i, Q = l, ue !== null ? t = 0 : (ve = null, xe = 0, t = pe);
  }
  if (t !== 0) {
    if (t === 2 && (l = $o(e), l !== 0 && (r = l, t = ms(e, l))), t === 1) throw n = Yr, un(e, 0), Ut(e, r), Me(e, ae()), n;
    if (t === 6) Ut(e, r);
    else {
      if (l = e.current.alternate, !(r & 30) && !sm(l) && (t = fi(e, r), t === 2 && (i = $o(e), i !== 0 && (r = i, t = ms(e, i))), t === 1)) throw n = Yr, un(e, 0), Ut(e, r), Me(e, ae()), n;
      switch (e.finishedWork = l, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(R(345));
        case 2:
          ln(e, Le, wt);
          break;
        case 3:
          if (Ut(e, r), (r & 130023424) === r && (t = ia + 500 - ae(), 10 < t)) {
            if (Xl(e, 0) !== 0) break;
            if (l = e.suspendedLanes, (l & r) !== r) {
              De(), e.pingedLanes |= e.suspendedLanes & l;
              break;
            }
            e.timeoutHandle = Go(ln.bind(null, e, Le, wt), t);
            break;
          }
          ln(e, Le, wt);
          break;
        case 4:
          if (Ut(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var o = 31 - lt(r);
            i = 1 << o, o = t[o], o > l && (l = o), r &= ~i;
          }
          if (r = l, r = ae() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * om(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Go(ln.bind(null, e, Le, wt), r);
            break;
          }
          ln(e, Le, wt);
          break;
        case 5:
          ln(e, Le, wt);
          break;
        default:
          throw Error(R(329));
      }
    }
  }
  return Me(e, ae()), e.callbackNode === n ? ef.bind(null, e) : null;
}
function ms(e, t) {
  var n = Tr;
  return e.current.memoizedState.isDehydrated && (un(e, t).flags |= 256), e = fi(e, t), e !== 2 && (t = Le, Le = n, t !== null && vs(t)), e;
}
function vs(e) {
  Le === null ? Le = e : Le.push.apply(Le, e);
}
function sm(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var l = n[r], i = l.getSnapshot;
        l = l.value;
        try {
          if (!ot(i(), l)) return !1;
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
  for (t &= ~la, t &= ~Ii, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - lt(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function _u(e) {
  if (Q & 6) throw Error(R(327));
  Vn();
  var t = Xl(e, 0);
  if (!(t & 1)) return Me(e, ae()), null;
  var n = fi(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = $o(e);
    r !== 0 && (t = r, n = ms(e, r));
  }
  if (n === 1) throw n = Yr, un(e, 0), Ut(e, t), Me(e, ae()), n;
  if (n === 6) throw Error(R(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, ln(e, Le, wt), Me(e, ae()), null;
}
function oa(e, t) {
  var n = Q;
  Q |= 1;
  try {
    return e(t);
  } finally {
    Q = n, Q === 0 && (Jn = ae() + 500, ji && nn());
  }
}
function mn(e) {
  Bt !== null && Bt.tag === 0 && !(Q & 6) && Vn();
  var t = Q;
  Q |= 1;
  var n = Je.transition, r = Y;
  try {
    if (Je.transition = null, Y = 1, e) return e();
  } finally {
    Y = r, Je.transition = n, Q = t, !(Q & 6) && nn();
  }
}
function sa() {
  Ue = An.current, ee(An);
}
function un(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, zh(n)), ue !== null) for (n = ue.return; n !== null; ) {
    var r = n;
    switch ($s(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && ql();
        break;
      case 3:
        Gn(), ee(_e), ee(Ne), Ys();
        break;
      case 5:
        Gs(r);
        break;
      case 4:
        Gn();
        break;
      case 13:
        ee(re);
        break;
      case 19:
        ee(re);
        break;
      case 10:
        Ws(r.type._context);
        break;
      case 22:
      case 23:
        sa();
    }
    n = n.return;
  }
  if (ve = e, ue = e = Yt(e.current, null), xe = Ue = t, pe = 0, Yr = null, la = Ii = hn = 0, Le = Tr = null, sn !== null) {
    for (t = 0; t < sn.length; t++) if (n = sn[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var l = r.next, i = n.pending;
      if (i !== null) {
        var o = i.next;
        i.next = l, r.next = o;
      }
      n.pending = r;
    }
    sn = null;
  }
  return e;
}
function tf(e, t) {
  do {
    var n = ue;
    try {
      if (Hs(), zl.current = ai, si) {
        for (var r = le.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), r = r.next;
        }
        si = !1;
      }
      if (pn = 0, he = de = le = null, Dr = !1, Kr = 0, ra.current = null, n === null || n.return === null) {
        pe = 1, Yr = t, ue = null;
        break;
      }
      e: {
        var i = e, o = n.return, s = n, a = t;
        if (t = xe, s.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
          var c = a, h = s, f = h.tag;
          if (!(h.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var g = h.alternate;
            g ? (h.updateQueue = g.updateQueue, h.memoizedState = g.memoizedState, h.lanes = g.lanes) : (h.updateQueue = null, h.memoizedState = null);
          }
          var y = wu(o);
          if (y !== null) {
            y.flags &= -257, ku(y, o, s, i, t), y.mode & 1 && xu(i, c, t), t = y, a = c;
            var k = t.updateQueue;
            if (k === null) {
              var w = /* @__PURE__ */ new Set();
              w.add(a), t.updateQueue = w;
            } else k.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              xu(i, c, t), aa();
              break e;
            }
            a = Error(R(426));
          }
        } else if (ne && s.mode & 1) {
          var I = wu(o);
          if (I !== null) {
            !(I.flags & 65536) && (I.flags |= 256), ku(I, o, s, i, t), Bs(Yn(a, s));
            break e;
          }
        }
        i = a = Yn(a, s), pe !== 4 && (pe = 2), Tr === null ? Tr = [i] : Tr.push(i), i = o;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var p = Fd(i, a, t);
              pu(i, p);
              break e;
            case 1:
              s = a;
              var d = i.type, m = i.stateNode;
              if (!(i.flags & 128) && (typeof d.getDerivedStateFromError == "function" || m !== null && typeof m.componentDidCatch == "function" && (Xt === null || !Xt.has(m)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var x = bd(i, s, t);
                pu(i, x);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      lf(n);
    } catch (S) {
      t = S, ue === n && n !== null && (ue = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function nf() {
  var e = ui.current;
  return ui.current = ai, e === null ? ai : e;
}
function aa() {
  (pe === 0 || pe === 3 || pe === 2) && (pe = 4), ve === null || !(hn & 268435455) && !(Ii & 268435455) || Ut(ve, xe);
}
function fi(e, t) {
  var n = Q;
  Q |= 2;
  var r = nf();
  (ve !== e || xe !== t) && (wt = null, un(e, t));
  do
    try {
      am();
      break;
    } catch (l) {
      tf(e, l);
    }
  while (!0);
  if (Hs(), Q = n, ui.current = r, ue !== null) throw Error(R(261));
  return ve = null, xe = 0, pe;
}
function am() {
  for (; ue !== null; ) rf(ue);
}
function um() {
  for (; ue !== null && !Op(); ) rf(ue);
}
function rf(e) {
  var t = sf(e.alternate, e, Ue);
  e.memoizedProps = e.pendingProps, t === null ? lf(e) : ue = t, ra.current = null;
}
function lf(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = nm(n, t), n !== null) {
        n.flags &= 32767, ue = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        pe = 6, ue = null;
        return;
      }
    } else if (n = tm(n, t, Ue), n !== null) {
      ue = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      ue = t;
      return;
    }
    ue = t = e;
  } while (t !== null);
  pe === 0 && (pe = 5);
}
function ln(e, t, n) {
  var r = Y, l = Je.transition;
  try {
    Je.transition = null, Y = 1, cm(e, t, n, r);
  } finally {
    Je.transition = l, Y = r;
  }
  return null;
}
function cm(e, t, n, r) {
  do
    Vn();
  while (Bt !== null);
  if (Q & 6) throw Error(R(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(R(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var i = n.lanes | n.childLanes;
  if (Hp(e, i), e === ve && (ue = ve = null, xe = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || jl || (jl = !0, af(Kl, function() {
    return Vn(), null;
  })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
    i = Je.transition, Je.transition = null;
    var o = Y;
    Y = 1;
    var s = Q;
    Q |= 4, ra.current = null, lm(e, n), Zd(n, e), Ih(Ko), Gl = !!Qo, Ko = Qo = null, e.current = n, im(n), Mp(), Q = s, Y = o, Je.transition = i;
  } else e.current = n;
  if (jl && (jl = !1, Bt = e, di = l), i = e.pendingLanes, i === 0 && (Xt = null), Fp(n.stateNode), Me(e, ae()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
  if (ci) throw ci = !1, e = ps, ps = null, e;
  return di & 1 && e.tag !== 0 && Vn(), i = e.pendingLanes, i & 1 ? e === hs ? Ir++ : (Ir = 0, hs = e) : Ir = 0, nn(), null;
}
function Vn() {
  if (Bt !== null) {
    var e = Fc(di), t = Je.transition, n = Y;
    try {
      if (Je.transition = null, Y = 16 > e ? 16 : e, Bt === null) var r = !1;
      else {
        if (e = Bt, Bt = null, di = 0, Q & 6) throw Error(R(331));
        var l = Q;
        for (Q |= 4, A = e.current; A !== null; ) {
          var i = A, o = i.child;
          if (A.flags & 16) {
            var s = i.deletions;
            if (s !== null) {
              for (var a = 0; a < s.length; a++) {
                var c = s[a];
                for (A = c; A !== null; ) {
                  var h = A;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Rr(8, h, i);
                  }
                  var f = h.child;
                  if (f !== null) f.return = h, A = f;
                  else for (; A !== null; ) {
                    h = A;
                    var g = h.sibling, y = h.return;
                    if (Gd(h), h === c) {
                      A = null;
                      break;
                    }
                    if (g !== null) {
                      g.return = y, A = g;
                      break;
                    }
                    A = y;
                  }
                }
              }
              var k = i.alternate;
              if (k !== null) {
                var w = k.child;
                if (w !== null) {
                  k.child = null;
                  do {
                    var I = w.sibling;
                    w.sibling = null, w = I;
                  } while (w !== null);
                }
              }
              A = i;
            }
          }
          if (i.subtreeFlags & 2064 && o !== null) o.return = i, A = o;
          else e: for (; A !== null; ) {
            if (i = A, i.flags & 2048) switch (i.tag) {
              case 0:
              case 11:
              case 15:
                Rr(9, i, i.return);
            }
            var p = i.sibling;
            if (p !== null) {
              p.return = i.return, A = p;
              break e;
            }
            A = i.return;
          }
        }
        var d = e.current;
        for (A = d; A !== null; ) {
          o = A;
          var m = o.child;
          if (o.subtreeFlags & 2064 && m !== null) m.return = o, A = m;
          else e: for (o = d; A !== null; ) {
            if (s = A, s.flags & 2048) try {
              switch (s.tag) {
                case 0:
                case 11:
                case 15:
                  Ti(9, s);
              }
            } catch (S) {
              oe(s, s.return, S);
            }
            if (s === o) {
              A = null;
              break e;
            }
            var x = s.sibling;
            if (x !== null) {
              x.return = s.return, A = x;
              break e;
            }
            A = s.return;
          }
        }
        if (Q = l, nn(), mt && typeof mt.onPostCommitFiberRoot == "function") try {
          mt.onPostCommitFiberRoot(ki, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      Y = n, Je.transition = t;
    }
  }
  return !1;
}
function Ou(e, t, n) {
  t = Yn(n, t), t = Fd(e, t, 1), e = Kt(e, t, 1), t = De(), e !== null && (tl(e, 1, t), Me(e, t));
}
function oe(e, t, n) {
  if (e.tag === 3) Ou(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      Ou(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Xt === null || !Xt.has(r))) {
        e = Yn(n, e), e = bd(t, e, 1), t = Kt(t, e, 1), e = De(), t !== null && (tl(t, 1, e), Me(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function dm(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = De(), e.pingedLanes |= e.suspendedLanes & n, ve === e && (xe & n) === n && (pe === 4 || pe === 3 && (xe & 130023424) === xe && 500 > ae() - ia ? un(e, 0) : la |= n), Me(e, t);
}
function of(e, t) {
  t === 0 && (e.mode & 1 ? (t = vl, vl <<= 1, !(vl & 130023424) && (vl = 4194304)) : t = 1);
  var n = De();
  e = Dt(e, t), e !== null && (tl(e, t, n), Me(e, n));
}
function fm(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), of(e, n);
}
function pm(e, t) {
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
      throw Error(R(314));
  }
  r !== null && r.delete(t), of(e, n);
}
var sf;
sf = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || _e.current) Pe = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return Pe = !1, em(e, t, n);
    Pe = !!(e.flags & 131072);
  }
  else Pe = !1, ne && t.flags & 1048576 && cd(t, ni, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      bl(e, t), e = t.pendingProps;
      var l = Qn(t, Ne.current);
      Bn(t, n), l = Zs(null, t, r, e, l, n);
      var i = qs();
      return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Oe(r) ? (i = !0, ei(t)) : i = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, Ks(t), l.updater = Ri, t.stateNode = l, l._reactInternals = t, ns(t, r, e, n), t = is(null, t, r, !0, i, n)) : (t.tag = 0, ne && i && Us(t), je(null, t, l, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (bl(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = mm(r), e = tt(r, e), l) {
          case 0:
            t = ls(null, t, r, e, n);
            break e;
          case 1:
            t = Eu(null, t, r, e, n);
            break e;
          case 11:
            t = Su(null, t, r, e, n);
            break e;
          case 14:
            t = Cu(null, t, r, tt(r.type, e), n);
            break e;
        }
        throw Error(R(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : tt(r, l), ls(e, t, r, l, n);
    case 1:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : tt(r, l), Eu(e, t, r, l, n);
    case 3:
      e: {
        if (Vd(t), e === null) throw Error(R(387));
        r = t.pendingProps, i = t.memoizedState, l = i.element, vd(e, t), ii(t, r, null, n);
        var o = t.memoizedState;
        if (r = o.element, i.isDehydrated) if (i = { element: r, isDehydrated: !1, cache: o.cache, pendingSuspenseBoundaries: o.pendingSuspenseBoundaries, transitions: o.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
          l = Yn(Error(R(423)), t), t = Nu(e, t, r, n, l);
          break e;
        } else if (r !== l) {
          l = Yn(Error(R(424)), t), t = Nu(e, t, r, n, l);
          break e;
        } else for ($e = Qt(t.stateNode.containerInfo.firstChild), Be = t, ne = !0, rt = null, n = hd(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (Kn(), r === l) {
            t = Rt(e, t, n);
            break e;
          }
          je(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return gd(t), e === null && qo(t), r = t.type, l = t.pendingProps, i = e !== null ? e.memoizedProps : null, o = l.children, Xo(r, l) ? o = null : i !== null && Xo(r, i) && (t.flags |= 32), Bd(e, t), je(e, t, o, n), t.child;
    case 6:
      return e === null && qo(t), null;
    case 13:
      return Hd(e, t, n);
    case 4:
      return Xs(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Xn(t, null, r, n) : je(e, t, r, n), t.child;
    case 11:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : tt(r, l), Su(e, t, r, l, n);
    case 7:
      return je(e, t, t.pendingProps, n), t.child;
    case 8:
      return je(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return je(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, l = t.pendingProps, i = t.memoizedProps, o = l.value, Z(ri, r._currentValue), r._currentValue = o, i !== null) if (ot(i.value, o)) {
          if (i.children === l.children && !_e.current) {
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
                  a = Et(-1, n & -n), a.tag = 2;
                  var c = i.updateQueue;
                  if (c !== null) {
                    c = c.shared;
                    var h = c.pending;
                    h === null ? a.next = a : (a.next = h.next, h.next = a), c.pending = a;
                  }
                }
                i.lanes |= n, a = i.alternate, a !== null && (a.lanes |= n), es(
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
            if (o = i.return, o === null) throw Error(R(341));
            o.lanes |= n, s = o.alternate, s !== null && (s.lanes |= n), es(o, n, t), o = i.sibling;
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
        je(e, t, l.children, n), t = t.child;
      }
      return t;
    case 9:
      return l = t.type, r = t.pendingProps.children, Bn(t, n), l = Ze(l), r = r(l), t.flags |= 1, je(e, t, r, n), t.child;
    case 14:
      return r = t.type, l = tt(r, t.pendingProps), l = tt(r.type, l), Cu(e, t, r, l, n);
    case 15:
      return Ud(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : tt(r, l), bl(e, t), t.tag = 1, Oe(r) ? (e = !0, ei(t)) : e = !1, Bn(t, n), zd(t, r, l), ns(t, r, l, n), is(null, t, r, !0, e, n);
    case 19:
      return Wd(e, t, n);
    case 22:
      return $d(e, t, n);
  }
  throw Error(R(156, t.tag));
};
function af(e, t) {
  return Oc(e, t);
}
function hm(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Ye(e, t, n, r) {
  return new hm(e, t, n, r);
}
function ua(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function mm(e) {
  if (typeof e == "function") return ua(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Rs) return 11;
    if (e === Ts) return 14;
  }
  return 2;
}
function Yt(e, t) {
  var n = e.alternate;
  return n === null ? (n = Ye(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Bl(e, t, n, r, l, i) {
  var o = 2;
  if (r = e, typeof e == "function") ua(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else e: switch (e) {
    case jn:
      return cn(n.children, l, i, t);
    case Ds:
      o = 8, l |= 8;
      break;
    case jo:
      return e = Ye(12, n, t, l | 2), e.elementType = jo, e.lanes = i, e;
    case Do:
      return e = Ye(13, n, t, l), e.elementType = Do, e.lanes = i, e;
    case Ro:
      return e = Ye(19, n, t, l), e.elementType = Ro, e.lanes = i, e;
    case gc:
      return Li(n, l, i, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case mc:
          o = 10;
          break e;
        case vc:
          o = 9;
          break e;
        case Rs:
          o = 11;
          break e;
        case Ts:
          o = 14;
          break e;
        case At:
          o = 16, r = null;
          break e;
      }
      throw Error(R(130, e == null ? e : typeof e, ""));
  }
  return t = Ye(o, n, t, l), t.elementType = e, t.type = r, t.lanes = i, t;
}
function cn(e, t, n, r) {
  return e = Ye(7, e, r, t), e.lanes = n, e;
}
function Li(e, t, n, r) {
  return e = Ye(22, e, r, t), e.elementType = gc, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function vo(e, t, n) {
  return e = Ye(6, e, null, t), e.lanes = n, e;
}
function go(e, t, n) {
  return t = Ye(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function vm(e, t, n, r, l) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Yi(0), this.expirationTimes = Yi(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Yi(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
}
function ca(e, t, n, r, l, i, o, s, a) {
  return e = new vm(e, t, n, s, a), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = Ye(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Ks(i), e;
}
function gm(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Nn, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function uf(e) {
  if (!e) return Zt;
  e = e._reactInternals;
  e: {
    if (gn(e) !== e || e.tag !== 1) throw Error(R(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Oe(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(R(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Oe(n)) return ad(e, n, t);
  }
  return t;
}
function cf(e, t, n, r, l, i, o, s, a) {
  return e = ca(n, r, !0, e, l, i, o, s, a), e.context = uf(null), n = e.current, r = De(), l = Gt(n), i = Et(r, l), i.callback = t ?? null, Kt(n, i, l), e.current.lanes = l, tl(e, l, r), Me(e, r), e;
}
function Pi(e, t, n, r) {
  var l = t.current, i = De(), o = Gt(l);
  return n = uf(n), t.context === null ? t.context = n : t.pendingContext = n, t = Et(i, o), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Kt(l, t, o), e !== null && (it(e, l, o, i), Al(e, l, o)), o;
}
function pi(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Mu(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function da(e, t) {
  Mu(e, t), (e = e.alternate) && Mu(e, t);
}
function ym() {
  return null;
}
var df = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function fa(e) {
  this._internalRoot = e;
}
_i.prototype.render = fa.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(R(409));
  Pi(e, t, null, null);
};
_i.prototype.unmount = fa.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    mn(function() {
      Pi(null, e, null, null);
    }), t[jt] = null;
  }
};
function _i(e) {
  this._internalRoot = e;
}
_i.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = $c();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < bt.length && t !== 0 && t < bt[n].priority; n++) ;
    bt.splice(n, 0, e), n === 0 && Vc(e);
  }
};
function pa(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Oi(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Au() {
}
function xm(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var c = pi(o);
        i.call(c);
      };
    }
    var o = cf(t, r, e, 0, null, !1, !1, "", Au);
    return e._reactRootContainer = o, e[jt] = o.current, Br(e.nodeType === 8 ? e.parentNode : e), mn(), o;
  }
  for (; l = e.lastChild; ) e.removeChild(l);
  if (typeof r == "function") {
    var s = r;
    r = function() {
      var c = pi(a);
      s.call(c);
    };
  }
  var a = ca(e, 0, !1, null, null, !1, !1, "", Au);
  return e._reactRootContainer = a, e[jt] = a.current, Br(e.nodeType === 8 ? e.parentNode : e), mn(function() {
    Pi(t, a, n, r);
  }), a;
}
function Mi(e, t, n, r, l) {
  var i = n._reactRootContainer;
  if (i) {
    var o = i;
    if (typeof l == "function") {
      var s = l;
      l = function() {
        var a = pi(o);
        s.call(a);
      };
    }
    Pi(t, o, e, l);
  } else o = xm(n, t, e, l, r);
  return pi(o);
}
bc = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = wr(t.pendingLanes);
        n !== 0 && (Ps(t, n | 1), Me(t, ae()), !(Q & 6) && (Jn = ae() + 500, nn()));
      }
      break;
    case 13:
      mn(function() {
        var r = Dt(e, 1);
        if (r !== null) {
          var l = De();
          it(r, e, 1, l);
        }
      }), da(e, 1);
  }
};
_s = function(e) {
  if (e.tag === 13) {
    var t = Dt(e, 134217728);
    if (t !== null) {
      var n = De();
      it(t, e, 134217728, n);
    }
    da(e, 134217728);
  }
};
Uc = function(e) {
  if (e.tag === 13) {
    var t = Gt(e), n = Dt(e, t);
    if (n !== null) {
      var r = De();
      it(n, e, t, r);
    }
    da(e, t);
  }
};
$c = function() {
  return Y;
};
Bc = function(e, t) {
  var n = Y;
  try {
    return Y = e, t();
  } finally {
    Y = n;
  }
};
Fo = function(e, t, n) {
  switch (t) {
    case "input":
      if (Lo(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = Ni(r);
            if (!l) throw Error(R(90));
            xc(r), Lo(r, l);
          }
        }
      }
      break;
    case "textarea":
      kc(e, n);
      break;
    case "select":
      t = n.value, t != null && Fn(e, !!n.multiple, t, !1);
  }
};
Rc = oa;
Tc = mn;
var wm = { usingClientEntryPoint: !1, Events: [rl, In, Ni, jc, Dc, oa] }, vr = { findFiberByHostInstance: on, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, km = { bundleType: vr.bundleType, version: vr.version, rendererPackageName: vr.rendererPackageName, rendererConfig: vr.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Tt.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Pc(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: vr.findFiberByHostInstance || ym, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Dl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Dl.isDisabled && Dl.supportsFiber) try {
    ki = Dl.inject(km), mt = Dl;
  } catch {
  }
}
He.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = wm;
He.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!pa(t)) throw Error(R(200));
  return gm(e, t, null, n);
};
He.createRoot = function(e, t) {
  if (!pa(e)) throw Error(R(299));
  var n = !1, r = "", l = df;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = ca(e, 1, !1, null, null, n, !1, r, l), e[jt] = t.current, Br(e.nodeType === 8 ? e.parentNode : e), new fa(t);
};
He.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(R(188)) : (e = Object.keys(e).join(","), Error(R(268, e)));
  return e = Pc(t), e = e === null ? null : e.stateNode, e;
};
He.flushSync = function(e) {
  return mn(e);
};
He.hydrate = function(e, t, n) {
  if (!Oi(t)) throw Error(R(200));
  return Mi(null, e, t, !0, n);
};
He.hydrateRoot = function(e, t, n) {
  if (!pa(e)) throw Error(R(405));
  var r = n != null && n.hydratedSources || null, l = !1, i = "", o = df;
  if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (o = n.onRecoverableError)), t = cf(t, null, e, 1, n ?? null, l, !1, i, o), e[jt] = t.current, Br(e), r) for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
    n,
    l
  );
  return new _i(t);
};
He.render = function(e, t, n) {
  if (!Oi(t)) throw Error(R(200));
  return Mi(null, e, t, !1, n);
};
He.unmountComponentAtNode = function(e) {
  if (!Oi(e)) throw Error(R(40));
  return e._reactRootContainer ? (mn(function() {
    Mi(null, null, e, !1, function() {
      e._reactRootContainer = null, e[jt] = null;
    });
  }), !0) : !1;
};
He.unstable_batchedUpdates = oa;
He.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Oi(n)) throw Error(R(200));
  if (e == null || e._reactInternals === void 0) throw Error(R(38));
  return Mi(e, t, n, !1, r);
};
He.version = "18.3.1-next-f1338f8080-20240426";
function ff() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ff);
    } catch (e) {
      console.error(e);
    }
}
ff(), dc.exports = He;
var zn = dc.exports, zu = zn;
Eo.createRoot = zu.createRoot, Eo.hydrateRoot = zu.hydrateRoot;
function Sm() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return v.useMemo(
    () => (r) => {
      t.forEach((l) => l(r));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    t
  );
}
const Ai = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function tr(e) {
  const t = Object.prototype.toString.call(e);
  return t === "[object Window]" || // In Electron context the Window object serializes to [object global]
  t === "[object global]";
}
function ha(e) {
  return "nodeType" in e;
}
function Ie(e) {
  var t, n;
  return e ? tr(e) ? e : ha(e) && (t = (n = e.ownerDocument) == null ? void 0 : n.defaultView) != null ? t : window : window;
}
function ma(e) {
  const {
    Document: t
  } = Ie(e);
  return e instanceof t;
}
function il(e) {
  return tr(e) ? !1 : e instanceof Ie(e).HTMLElement;
}
function pf(e) {
  return e instanceof Ie(e).SVGElement;
}
function nr(e) {
  return e ? tr(e) ? e.document : ha(e) ? ma(e) ? e : il(e) || pf(e) ? e.ownerDocument : document : document : document;
}
const st = Ai ? v.useLayoutEffect : v.useEffect;
function zi(e) {
  const t = v.useRef(e);
  return st(() => {
    t.current = e;
  }), v.useCallback(function() {
    for (var n = arguments.length, r = new Array(n), l = 0; l < n; l++)
      r[l] = arguments[l];
    return t.current == null ? void 0 : t.current(...r);
  }, []);
}
function Cm() {
  const e = v.useRef(null), t = v.useCallback((r, l) => {
    e.current = setInterval(r, l);
  }, []), n = v.useCallback(() => {
    e.current !== null && (clearInterval(e.current), e.current = null);
  }, []);
  return [t, n];
}
function Jr(e, t) {
  t === void 0 && (t = [e]);
  const n = v.useRef(e);
  return st(() => {
    n.current !== e && (n.current = e);
  }, t), n;
}
function ol(e, t) {
  const n = v.useRef();
  return v.useMemo(
    () => {
      const r = e(n.current);
      return n.current = r, r;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [...t]
  );
}
function hi(e) {
  const t = zi(e), n = v.useRef(null), r = v.useCallback(
    (l) => {
      l !== n.current && (t == null || t(l, n.current)), n.current = l;
    },
    //eslint-disable-next-line
    []
  );
  return [n, r];
}
function mi(e) {
  const t = v.useRef();
  return v.useEffect(() => {
    t.current = e;
  }, [e]), t.current;
}
let yo = {};
function sl(e, t) {
  return v.useMemo(() => {
    if (t)
      return t;
    const n = yo[e] == null ? 0 : yo[e] + 1;
    return yo[e] = n, e + "-" + n;
  }, [e, t]);
}
function hf(e) {
  return function(t) {
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), l = 1; l < n; l++)
      r[l - 1] = arguments[l];
    return r.reduce((i, o) => {
      const s = Object.entries(o);
      for (const [a, c] of s) {
        const h = i[a];
        h != null && (i[a] = h + e * c);
      }
      return i;
    }, {
      ...t
    });
  };
}
const Hn = /* @__PURE__ */ hf(1), Zr = /* @__PURE__ */ hf(-1);
function Em(e) {
  return "clientX" in e && "clientY" in e;
}
function Fi(e) {
  if (!e)
    return !1;
  const {
    KeyboardEvent: t
  } = Ie(e.target);
  return t && e instanceof t;
}
function Nm(e) {
  if (!e)
    return !1;
  const {
    TouchEvent: t
  } = Ie(e.target);
  return t && e instanceof t;
}
function vi(e) {
  if (Nm(e)) {
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
  return Em(e) ? {
    x: e.clientX,
    y: e.clientY
  } : null;
}
const qt = /* @__PURE__ */ Object.freeze({
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
        return [qt.Translate.toString(e), qt.Scale.toString(e)].join(" ");
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
}), Fu = "a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";
function jm(e) {
  return e.matches(Fu) ? e : e.querySelector(Fu);
}
const Dm = {
  display: "none"
};
function Rm(e) {
  let {
    id: t,
    value: n
  } = e;
  return te.createElement("div", {
    id: t,
    style: Dm
  }, n);
}
function Tm(e) {
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
  return te.createElement("div", {
    id: t,
    style: l,
    role: "status",
    "aria-live": r,
    "aria-atomic": !0
  }, n);
}
function Im() {
  const [e, t] = v.useState("");
  return {
    announce: v.useCallback((r) => {
      r != null && t(r);
    }, []),
    announcement: e
  };
}
const mf = /* @__PURE__ */ v.createContext(null);
function Lm(e) {
  const t = v.useContext(mf);
  v.useEffect(() => {
    if (!t)
      throw new Error("useDndMonitor must be used within a children of <DndContext>");
    return t(e);
  }, [e, t]);
}
function Pm() {
  const [e] = v.useState(() => /* @__PURE__ */ new Set()), t = v.useCallback((r) => (e.add(r), () => e.delete(r)), [e]);
  return [v.useCallback((r) => {
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
const _m = {
  draggable: `
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `
}, Om = {
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
function Mm(e) {
  let {
    announcements: t = Om,
    container: n,
    hiddenTextDescribedById: r,
    screenReaderInstructions: l = _m
  } = e;
  const {
    announce: i,
    announcement: o
  } = Im(), s = sl("DndLiveRegion"), [a, c] = v.useState(!1);
  if (v.useEffect(() => {
    c(!0);
  }, []), Lm(v.useMemo(() => ({
    onDragStart(f) {
      let {
        active: g
      } = f;
      i(t.onDragStart({
        active: g
      }));
    },
    onDragMove(f) {
      let {
        active: g,
        over: y
      } = f;
      t.onDragMove && i(t.onDragMove({
        active: g,
        over: y
      }));
    },
    onDragOver(f) {
      let {
        active: g,
        over: y
      } = f;
      i(t.onDragOver({
        active: g,
        over: y
      }));
    },
    onDragEnd(f) {
      let {
        active: g,
        over: y
      } = f;
      i(t.onDragEnd({
        active: g,
        over: y
      }));
    },
    onDragCancel(f) {
      let {
        active: g,
        over: y
      } = f;
      i(t.onDragCancel({
        active: g,
        over: y
      }));
    }
  }), [i, t])), !a)
    return null;
  const h = te.createElement(te.Fragment, null, te.createElement(Rm, {
    id: r,
    value: l.draggable
  }), te.createElement(Tm, {
    id: s,
    announcement: o
  }));
  return n ? zn.createPortal(h, n) : h;
}
var fe;
(function(e) {
  e.DragStart = "dragStart", e.DragMove = "dragMove", e.DragEnd = "dragEnd", e.DragCancel = "dragCancel", e.DragOver = "dragOver", e.RegisterDroppable = "registerDroppable", e.SetDroppableDisabled = "setDroppableDisabled", e.UnregisterDroppable = "unregisterDroppable";
})(fe || (fe = {}));
function gi() {
}
function bu(e, t) {
  return v.useMemo(
    () => ({
      sensor: e,
      options: t ?? {}
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [e, t]
  );
}
function Am() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return v.useMemo(
    () => [...t].filter((r) => r != null),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [...t]
  );
}
const at = /* @__PURE__ */ Object.freeze({
  x: 0,
  y: 0
});
function zm(e, t) {
  return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
}
function Fm(e, t) {
  const n = vi(e);
  if (!n)
    return "0 0";
  const r = {
    x: (n.x - t.left) / t.width * 100,
    y: (n.y - t.top) / t.height * 100
  };
  return r.x + "% " + r.y + "%";
}
function bm(e, t) {
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
function Um(e, t) {
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
function Uu(e) {
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
function vf(e, t) {
  if (!e || e.length === 0)
    return null;
  const [n] = e;
  return n[t];
}
const gf = (e) => {
  let {
    collisionRect: t,
    droppableRects: n,
    droppableContainers: r
  } = e;
  const l = Uu(t), i = [];
  for (const o of r) {
    const {
      id: s
    } = o, a = n.get(s);
    if (a) {
      const c = Uu(a), h = l.reduce((g, y, k) => g + zm(c[k], y), 0), f = Number((h / 4).toFixed(4));
      i.push({
        id: s,
        data: {
          droppableContainer: o,
          value: f
        }
      });
    }
  }
  return i.sort(bm);
};
function $m(e, t) {
  const n = Math.max(t.top, e.top), r = Math.max(t.left, e.left), l = Math.min(t.left + t.width, e.left + e.width), i = Math.min(t.top + t.height, e.top + e.height), o = l - r, s = i - n;
  if (r < l && n < i) {
    const a = t.width * t.height, c = e.width * e.height, h = o * s, f = h / (a + c - h);
    return Number(f.toFixed(4));
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
      const a = $m(s, t);
      a > 0 && l.push({
        id: o,
        data: {
          droppableContainer: i,
          value: a
        }
      });
    }
  }
  return l.sort(Um);
};
function Vm(e, t, n) {
  return {
    ...e,
    scaleX: t && n ? t.width / n.width : 1,
    scaleY: t && n ? t.height / n.height : 1
  };
}
function yf(e, t) {
  return e && t ? {
    x: e.left - t.left,
    y: e.top - t.top
  } : at;
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
const Wm = /* @__PURE__ */ Hm(1);
function xf(e) {
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
function Qm(e, t, n) {
  const r = xf(t);
  if (!r)
    return e;
  const {
    scaleX: l,
    scaleY: i,
    x: o,
    y: s
  } = r, a = e.left - o - (1 - l) * parseFloat(n), c = e.top - s - (1 - i) * parseFloat(n.slice(n.indexOf(" ") + 1)), h = l ? e.width / l : e.width, f = i ? e.height / i : e.height;
  return {
    width: h,
    height: f,
    top: c,
    right: a + h,
    bottom: c + f,
    left: a
  };
}
const Km = {
  ignoreTransform: !1
};
function rr(e, t) {
  t === void 0 && (t = Km);
  let n = e.getBoundingClientRect();
  if (t.ignoreTransform) {
    const {
      transform: c,
      transformOrigin: h
    } = Ie(e).getComputedStyle(e);
    c && (n = Qm(n, c, h));
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
function $u(e) {
  return rr(e, {
    ignoreTransform: !0
  });
}
function Xm(e) {
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
function Gm(e, t) {
  return t === void 0 && (t = Ie(e).getComputedStyle(e)), t.position === "fixed";
}
function Ym(e, t) {
  t === void 0 && (t = Ie(e).getComputedStyle(e));
  const n = /(auto|scroll|overlay)/;
  return ["overflow", "overflowX", "overflowY"].some((l) => {
    const i = t[l];
    return typeof i == "string" ? n.test(i) : !1;
  });
}
function bi(e, t) {
  const n = [];
  function r(l) {
    if (t != null && n.length >= t || !l)
      return n;
    if (ma(l) && l.scrollingElement != null && !n.includes(l.scrollingElement))
      return n.push(l.scrollingElement), n;
    if (!il(l) || pf(l) || n.includes(l))
      return n;
    const i = Ie(e).getComputedStyle(l);
    return l !== e && Ym(l, i) && n.push(l), Gm(l, i) ? n : r(l.parentNode);
  }
  return e ? r(e) : n;
}
function wf(e) {
  const [t] = bi(e, 1);
  return t ?? null;
}
function xo(e) {
  return !Ai || !e ? null : tr(e) ? e : ha(e) ? ma(e) || e === nr(e).scrollingElement ? window : il(e) ? e : null : null;
}
function kf(e) {
  return tr(e) ? e.scrollX : e.scrollLeft;
}
function Sf(e) {
  return tr(e) ? e.scrollY : e.scrollTop;
}
function gs(e) {
  return {
    x: kf(e),
    y: Sf(e)
  };
}
var me;
(function(e) {
  e[e.Forward = 1] = "Forward", e[e.Backward = -1] = "Backward";
})(me || (me = {}));
function Cf(e) {
  return !Ai || !e ? !1 : e === document.scrollingElement;
}
function Ef(e) {
  const t = {
    x: 0,
    y: 0
  }, n = Cf(e) ? {
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
const Jm = {
  x: 0.2,
  y: 0.2
};
function Zm(e, t, n, r, l) {
  let {
    top: i,
    left: o,
    right: s,
    bottom: a
  } = n;
  r === void 0 && (r = 10), l === void 0 && (l = Jm);
  const {
    isTop: c,
    isBottom: h,
    isLeft: f,
    isRight: g
  } = Ef(e), y = {
    x: 0,
    y: 0
  }, k = {
    x: 0,
    y: 0
  }, w = {
    height: t.height * l.y,
    width: t.width * l.x
  };
  return !c && i <= t.top + w.height ? (y.y = me.Backward, k.y = r * Math.abs((t.top + w.height - i) / w.height)) : !h && a >= t.bottom - w.height && (y.y = me.Forward, k.y = r * Math.abs((t.bottom - w.height - a) / w.height)), !g && s >= t.right - w.width ? (y.x = me.Forward, k.x = r * Math.abs((t.right - w.width - s) / w.width)) : !f && o <= t.left + w.width && (y.x = me.Backward, k.x = r * Math.abs((t.left + w.width - o) / w.width)), {
    direction: y,
    speed: k
  };
}
function qm(e) {
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
function Nf(e) {
  return e.reduce((t, n) => Hn(t, gs(n)), at);
}
function ev(e) {
  return e.reduce((t, n) => t + kf(n), 0);
}
function tv(e) {
  return e.reduce((t, n) => t + Sf(n), 0);
}
function jf(e, t) {
  if (t === void 0 && (t = rr), !e)
    return;
  const {
    top: n,
    left: r,
    bottom: l,
    right: i
  } = t(e);
  wf(e) && (l <= 0 || i <= 0 || n >= window.innerHeight || r >= window.innerWidth) && e.scrollIntoView({
    block: "center",
    inline: "center"
  });
}
const nv = [["x", ["left", "right"], ev], ["y", ["top", "bottom"], tv]];
class va {
  constructor(t, n) {
    this.rect = void 0, this.width = void 0, this.height = void 0, this.top = void 0, this.bottom = void 0, this.right = void 0, this.left = void 0;
    const r = bi(n), l = Nf(r);
    this.rect = {
      ...t
    }, this.width = t.width, this.height = t.height;
    for (const [i, o, s] of nv)
      for (const a of o)
        Object.defineProperty(this, a, {
          get: () => {
            const c = s(r), h = l[i] - c;
            return this.rect[a] + h;
          },
          enumerable: !0
        });
    Object.defineProperty(this, "rect", {
      enumerable: !1
    });
  }
}
class Lr {
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
function rv(e) {
  const {
    EventTarget: t
  } = Ie(e);
  return e instanceof t ? e : nr(e);
}
function wo(e, t) {
  const n = Math.abs(e.x), r = Math.abs(e.y);
  return typeof t == "number" ? Math.sqrt(n ** 2 + r ** 2) > t : "x" in t && "y" in t ? n > t.x && r > t.y : "x" in t ? n > t.x : "y" in t ? r > t.y : !1;
}
var Ke;
(function(e) {
  e.Click = "click", e.DragStart = "dragstart", e.Keydown = "keydown", e.ContextMenu = "contextmenu", e.Resize = "resize", e.SelectionChange = "selectionchange", e.VisibilityChange = "visibilitychange";
})(Ke || (Ke = {}));
function Bu(e) {
  e.preventDefault();
}
function lv(e) {
  e.stopPropagation();
}
var H;
(function(e) {
  e.Space = "Space", e.Down = "ArrowDown", e.Right = "ArrowRight", e.Left = "ArrowLeft", e.Up = "ArrowUp", e.Esc = "Escape", e.Enter = "Enter", e.Tab = "Tab";
})(H || (H = {}));
const Df = {
  start: [H.Space, H.Enter],
  cancel: [H.Esc],
  end: [H.Space, H.Enter, H.Tab]
}, iv = (e, t) => {
  let {
    currentCoordinates: n
  } = t;
  switch (e.code) {
    case H.Right:
      return {
        ...n,
        x: n.x + 25
      };
    case H.Left:
      return {
        ...n,
        x: n.x - 25
      };
    case H.Down:
      return {
        ...n,
        y: n.y + 25
      };
    case H.Up:
      return {
        ...n,
        y: n.y - 25
      };
  }
};
class ga {
  constructor(t) {
    this.props = void 0, this.autoScrollEnabled = !1, this.referenceCoordinates = void 0, this.listeners = void 0, this.windowListeners = void 0, this.props = t;
    const {
      event: {
        target: n
      }
    } = t;
    this.props = t, this.listeners = new Lr(nr(n)), this.windowListeners = new Lr(Ie(n)), this.handleKeyDown = this.handleKeyDown.bind(this), this.handleCancel = this.handleCancel.bind(this), this.attach();
  }
  attach() {
    this.handleStart(), this.windowListeners.add(Ke.Resize, this.handleCancel), this.windowListeners.add(Ke.VisibilityChange, this.handleCancel), setTimeout(() => this.listeners.add(Ke.Keydown, this.handleKeyDown));
  }
  handleStart() {
    const {
      activeNode: t,
      onStart: n
    } = this.props, r = t.node.current;
    r && jf(r), n(at);
  }
  handleKeyDown(t) {
    if (Fi(t)) {
      const {
        active: n,
        context: r,
        options: l
      } = this.props, {
        keyboardCodes: i = Df,
        coordinateGetter: o = iv,
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
        collisionRect: c
      } = r.current, h = c ? {
        x: c.left,
        y: c.top
      } : at;
      this.referenceCoordinates || (this.referenceCoordinates = h);
      const f = o(t, {
        active: n,
        context: r.current,
        currentCoordinates: h
      });
      if (f) {
        const g = Zr(f, h), y = {
          x: 0,
          y: 0
        }, {
          scrollableAncestors: k
        } = r.current;
        for (const w of k) {
          const I = t.code, {
            isTop: p,
            isRight: d,
            isLeft: m,
            isBottom: x,
            maxScroll: S,
            minScroll: N
          } = Ef(w), E = qm(w), j = {
            x: Math.min(I === H.Right ? E.right - E.width / 2 : E.right, Math.max(I === H.Right ? E.left : E.left + E.width / 2, f.x)),
            y: Math.min(I === H.Down ? E.bottom - E.height / 2 : E.bottom, Math.max(I === H.Down ? E.top : E.top + E.height / 2, f.y))
          }, D = I === H.Right && !d || I === H.Left && !m, C = I === H.Down && !x || I === H.Up && !p;
          if (D && j.x !== f.x) {
            const L = w.scrollLeft + g.x, _ = I === H.Right && L <= S.x || I === H.Left && L >= N.x;
            if (_ && !g.y) {
              w.scrollTo({
                left: L,
                behavior: s
              });
              return;
            }
            _ ? y.x = w.scrollLeft - L : y.x = I === H.Right ? w.scrollLeft - S.x : w.scrollLeft - N.x, y.x && w.scrollBy({
              left: -y.x,
              behavior: s
            });
            break;
          } else if (C && j.y !== f.y) {
            const L = w.scrollTop + g.y, _ = I === H.Down && L <= S.y || I === H.Up && L >= N.y;
            if (_ && !g.x) {
              w.scrollTo({
                top: L,
                behavior: s
              });
              return;
            }
            _ ? y.y = w.scrollTop - L : y.y = I === H.Down ? w.scrollTop - S.y : w.scrollTop - N.y, y.y && w.scrollBy({
              top: -y.y,
              behavior: s
            });
            break;
          }
        }
        this.handleMove(t, Hn(Zr(f, this.referenceCoordinates), y));
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
ga.activators = [{
  eventName: "onKeyDown",
  handler: (e, t, n) => {
    let {
      keyboardCodes: r = Df,
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
function Vu(e) {
  return !!(e && "distance" in e);
}
function Hu(e) {
  return !!(e && "delay" in e);
}
class ya {
  constructor(t, n, r) {
    var l;
    r === void 0 && (r = rv(t.event.target)), this.props = void 0, this.events = void 0, this.autoScrollEnabled = !0, this.document = void 0, this.activated = !1, this.initialCoordinates = void 0, this.timeoutId = null, this.listeners = void 0, this.documentListeners = void 0, this.windowListeners = void 0, this.props = t, this.events = n;
    const {
      event: i
    } = t, {
      target: o
    } = i;
    this.props = t, this.events = n, this.document = nr(o), this.documentListeners = new Lr(this.document), this.listeners = new Lr(r), this.windowListeners = new Lr(Ie(o)), this.initialCoordinates = (l = vi(i)) != null ? l : at, this.handleStart = this.handleStart.bind(this), this.handleMove = this.handleMove.bind(this), this.handleEnd = this.handleEnd.bind(this), this.handleCancel = this.handleCancel.bind(this), this.handleKeydown = this.handleKeydown.bind(this), this.removeTextSelection = this.removeTextSelection.bind(this), this.attach();
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
    }), this.listeners.add(t.end.name, this.handleEnd), t.cancel && this.listeners.add(t.cancel.name, this.handleCancel), this.windowListeners.add(Ke.Resize, this.handleCancel), this.windowListeners.add(Ke.DragStart, Bu), this.windowListeners.add(Ke.VisibilityChange, this.handleCancel), this.windowListeners.add(Ke.ContextMenu, Bu), this.documentListeners.add(Ke.Keydown, this.handleKeydown), n) {
      if (r != null && r({
        event: this.props.event,
        activeNode: this.props.activeNode,
        options: this.props.options
      }))
        return this.handleStart();
      if (Hu(n)) {
        this.timeoutId = setTimeout(this.handleStart, n.delay), this.handlePending(n);
        return;
      }
      if (Vu(n)) {
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
    t && (this.activated = !0, this.documentListeners.add(Ke.Click, lv, {
      capture: !0
    }), this.removeTextSelection(), this.documentListeners.add(Ke.SelectionChange, this.removeTextSelection), n(t));
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
    const a = (n = vi(t)) != null ? n : at, c = Zr(l, a);
    if (!r && s) {
      if (Vu(s)) {
        if (s.tolerance != null && wo(c, s.tolerance))
          return this.handleCancel();
        if (wo(c, s.distance))
          return this.handleStart();
      }
      if (Hu(s) && wo(c, s.tolerance))
        return this.handleCancel();
      this.handlePending(s, c);
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
    t.code === H.Esc && this.handleCancel();
  }
  removeTextSelection() {
    var t;
    (t = this.document.getSelection()) == null || t.removeAllRanges();
  }
}
const ov = {
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
class xa extends ya {
  constructor(t) {
    const {
      event: n
    } = t, r = nr(n.target);
    super(t, ov, r);
  }
}
xa.activators = [{
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
const sv = {
  move: {
    name: "mousemove"
  },
  end: {
    name: "mouseup"
  }
};
var ys;
(function(e) {
  e[e.RightClick = 2] = "RightClick";
})(ys || (ys = {}));
class av extends ya {
  constructor(t) {
    super(t, sv, nr(t.event.target));
  }
}
av.activators = [{
  eventName: "onMouseDown",
  handler: (e, t) => {
    let {
      nativeEvent: n
    } = e, {
      onActivation: r
    } = t;
    return n.button === ys.RightClick ? !1 : (r == null || r({
      event: n
    }), !0);
  }
}];
const ko = {
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
class uv extends ya {
  constructor(t) {
    super(t, ko);
  }
  static setup() {
    return window.addEventListener(ko.move.name, t, {
      capture: !1,
      passive: !1
    }), function() {
      window.removeEventListener(ko.move.name, t);
    };
    function t() {
    }
  }
}
uv.activators = [{
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
var Pr;
(function(e) {
  e[e.Pointer = 0] = "Pointer", e[e.DraggableRect = 1] = "DraggableRect";
})(Pr || (Pr = {}));
var yi;
(function(e) {
  e[e.TreeOrder = 0] = "TreeOrder", e[e.ReversedTreeOrder = 1] = "ReversedTreeOrder";
})(yi || (yi = {}));
function cv(e) {
  let {
    acceleration: t,
    activator: n = Pr.Pointer,
    canScroll: r,
    draggingRect: l,
    enabled: i,
    interval: o = 5,
    order: s = yi.TreeOrder,
    pointerCoordinates: a,
    scrollableAncestors: c,
    scrollableAncestorRects: h,
    delta: f,
    threshold: g
  } = e;
  const y = fv({
    delta: f,
    disabled: !i
  }), [k, w] = Cm(), I = v.useRef({
    x: 0,
    y: 0
  }), p = v.useRef({
    x: 0,
    y: 0
  }), d = v.useMemo(() => {
    switch (n) {
      case Pr.Pointer:
        return a ? {
          top: a.y,
          bottom: a.y,
          left: a.x,
          right: a.x
        } : null;
      case Pr.DraggableRect:
        return l;
    }
  }, [n, l, a]), m = v.useRef(null), x = v.useCallback(() => {
    const N = m.current;
    if (!N)
      return;
    const E = I.current.x * p.current.x, j = I.current.y * p.current.y;
    N.scrollBy(E, j);
  }, []), S = v.useMemo(() => s === yi.TreeOrder ? [...c].reverse() : c, [s, c]);
  v.useEffect(
    () => {
      if (!i || !c.length || !d) {
        w();
        return;
      }
      for (const N of S) {
        if ((r == null ? void 0 : r(N)) === !1)
          continue;
        const E = c.indexOf(N), j = h[E];
        if (!j)
          continue;
        const {
          direction: D,
          speed: C
        } = Zm(N, j, d, t, g);
        for (const L of ["x", "y"])
          y[L][D[L]] || (C[L] = 0, D[L] = 0);
        if (C.x > 0 || C.y > 0) {
          w(), m.current = N, k(x, o), I.current = C, p.current = D;
          return;
        }
      }
      I.current = {
        x: 0,
        y: 0
      }, p.current = {
        x: 0,
        y: 0
      }, w();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      t,
      x,
      r,
      w,
      i,
      o,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(d),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(y),
      k,
      c,
      S,
      h,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(g)
    ]
  );
}
const dv = {
  x: {
    [me.Backward]: !1,
    [me.Forward]: !1
  },
  y: {
    [me.Backward]: !1,
    [me.Forward]: !1
  }
};
function fv(e) {
  let {
    delta: t,
    disabled: n
  } = e;
  const r = mi(t);
  return ol((l) => {
    if (n || !r || !l)
      return dv;
    const i = {
      x: Math.sign(t.x - r.x),
      y: Math.sign(t.y - r.y)
    };
    return {
      x: {
        [me.Backward]: l.x[me.Backward] || i.x === -1,
        [me.Forward]: l.x[me.Forward] || i.x === 1
      },
      y: {
        [me.Backward]: l.y[me.Backward] || i.y === -1,
        [me.Forward]: l.y[me.Forward] || i.y === 1
      }
    };
  }, [n, t, r]);
}
function pv(e, t) {
  const n = t != null ? e.get(t) : void 0, r = n ? n.node.current : null;
  return ol((l) => {
    var i;
    return t == null ? null : (i = r ?? l) != null ? i : null;
  }, [r, t]);
}
function hv(e, t) {
  return v.useMemo(() => e.reduce((n, r) => {
    const {
      sensor: l
    } = r, i = l.activators.map((o) => ({
      eventName: o.eventName,
      handler: t(o.handler, r)
    }));
    return [...n, ...i];
  }, []), [e, t]);
}
var qr;
(function(e) {
  e[e.Always = 0] = "Always", e[e.BeforeDragging = 1] = "BeforeDragging", e[e.WhileDragging = 2] = "WhileDragging";
})(qr || (qr = {}));
var xs;
(function(e) {
  e.Optimized = "optimized";
})(xs || (xs = {}));
const Wu = /* @__PURE__ */ new Map();
function mv(e, t) {
  let {
    dragging: n,
    dependencies: r,
    config: l
  } = t;
  const [i, o] = v.useState(null), {
    frequency: s,
    measure: a,
    strategy: c
  } = l, h = v.useRef(e), f = I(), g = Jr(f), y = v.useCallback(function(p) {
    p === void 0 && (p = []), !g.current && o((d) => d === null ? p : d.concat(p.filter((m) => !d.includes(m))));
  }, [g]), k = v.useRef(null), w = ol((p) => {
    if (f && !n)
      return Wu;
    if (!p || p === Wu || h.current !== e || i != null) {
      const d = /* @__PURE__ */ new Map();
      for (let m of e) {
        if (!m)
          continue;
        if (i && i.length > 0 && !i.includes(m.id) && m.rect.current) {
          d.set(m.id, m.rect.current);
          continue;
        }
        const x = m.node.current, S = x ? new va(a(x), x) : null;
        m.rect.current = S, S && d.set(m.id, S);
      }
      return d;
    }
    return p;
  }, [e, i, n, f, a]);
  return v.useEffect(() => {
    h.current = e;
  }, [e]), v.useEffect(
    () => {
      f || y();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [n, f]
  ), v.useEffect(
    () => {
      i && i.length > 0 && o(null);
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [JSON.stringify(i)]
  ), v.useEffect(
    () => {
      f || typeof s != "number" || k.current !== null || (k.current = setTimeout(() => {
        y(), k.current = null;
      }, s));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [s, f, y, ...r]
  ), {
    droppableRects: w,
    measureDroppableContainers: y,
    measuringScheduled: i != null
  };
  function I() {
    switch (c) {
      case qr.Always:
        return !1;
      case qr.BeforeDragging:
        return n;
      default:
        return !n;
    }
  }
}
function wa(e, t) {
  return ol((n) => e ? n || (typeof t == "function" ? t(e) : e) : null, [t, e]);
}
function vv(e, t) {
  return wa(e, t);
}
function gv(e) {
  let {
    callback: t,
    disabled: n
  } = e;
  const r = zi(t), l = v.useMemo(() => {
    if (n || typeof window > "u" || typeof window.MutationObserver > "u")
      return;
    const {
      MutationObserver: i
    } = window;
    return new i(r);
  }, [r, n]);
  return v.useEffect(() => () => l == null ? void 0 : l.disconnect(), [l]), l;
}
function Ui(e) {
  let {
    callback: t,
    disabled: n
  } = e;
  const r = zi(t), l = v.useMemo(
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
  return v.useEffect(() => () => l == null ? void 0 : l.disconnect(), [l]), l;
}
function yv(e) {
  return new va(rr(e), e);
}
function Qu(e, t, n) {
  t === void 0 && (t = yv);
  const [r, l] = v.useState(null);
  function i() {
    l((a) => {
      if (!e)
        return null;
      if (e.isConnected === !1) {
        var c;
        return (c = a ?? n) != null ? c : null;
      }
      const h = t(e);
      return JSON.stringify(a) === JSON.stringify(h) ? a : h;
    });
  }
  const o = gv({
    callback(a) {
      if (e)
        for (const c of a) {
          const {
            type: h,
            target: f
          } = c;
          if (h === "childList" && f instanceof HTMLElement && f.contains(e)) {
            i();
            break;
          }
        }
    }
  }), s = Ui({
    callback: i
  });
  return st(() => {
    i(), e ? (s == null || s.observe(e), o == null || o.observe(document.body, {
      childList: !0,
      subtree: !0
    })) : (s == null || s.disconnect(), o == null || o.disconnect());
  }, [e]), r;
}
function xv(e) {
  const t = wa(e);
  return yf(e, t);
}
const Ku = [];
function wv(e) {
  const t = v.useRef(e), n = ol((r) => e ? r && r !== Ku && e && t.current && e.parentNode === t.current.parentNode ? r : bi(e) : Ku, [e]);
  return v.useEffect(() => {
    t.current = e;
  }, [e]), n;
}
function kv(e) {
  const [t, n] = v.useState(null), r = v.useRef(e), l = v.useCallback((i) => {
    const o = xo(i.target);
    o && n((s) => s ? (s.set(o, gs(o)), new Map(s)) : null);
  }, []);
  return v.useEffect(() => {
    const i = r.current;
    if (e !== i) {
      o(i);
      const s = e.map((a) => {
        const c = xo(a);
        return c ? (c.addEventListener("scroll", l, {
          passive: !0
        }), [c, gs(c)]) : null;
      }).filter((a) => a != null);
      n(s.length ? new Map(s) : null), r.current = e;
    }
    return () => {
      o(e), o(i);
    };
    function o(s) {
      s.forEach((a) => {
        const c = xo(a);
        c == null || c.removeEventListener("scroll", l);
      });
    }
  }, [l, e]), v.useMemo(() => e.length ? t ? Array.from(t.values()).reduce((i, o) => Hn(i, o), at) : Nf(e) : at, [e, t]);
}
function Xu(e, t) {
  t === void 0 && (t = []);
  const n = v.useRef(null);
  return v.useEffect(
    () => {
      n.current = null;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    t
  ), v.useEffect(() => {
    const r = e !== at;
    r && !n.current && (n.current = e), !r && n.current && (n.current = null);
  }, [e]), n.current ? Zr(e, n.current) : at;
}
function Sv(e) {
  v.useEffect(
    () => {
      if (!Ai)
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
function Cv(e, t) {
  return v.useMemo(() => e.reduce((n, r) => {
    let {
      eventName: l,
      handler: i
    } = r;
    return n[l] = (o) => {
      i(o, t);
    }, n;
  }, {}), [e, t]);
}
function Rf(e) {
  return v.useMemo(() => e ? Xm(e) : null, [e]);
}
const Gu = [];
function Ev(e, t) {
  t === void 0 && (t = rr);
  const [n] = e, r = Rf(n ? Ie(n) : null), [l, i] = v.useState(Gu);
  function o() {
    i(() => e.length ? e.map((a) => Cf(a) ? r : new va(t(a), a)) : Gu);
  }
  const s = Ui({
    callback: o
  });
  return st(() => {
    s == null || s.disconnect(), o(), e.forEach((a) => s == null ? void 0 : s.observe(a));
  }, [e]), l;
}
function Tf(e) {
  if (!e)
    return null;
  if (e.children.length > 1)
    return e;
  const t = e.children[0];
  return il(t) ? t : e;
}
function Nv(e) {
  let {
    measure: t
  } = e;
  const [n, r] = v.useState(null), l = v.useCallback((c) => {
    for (const {
      target: h
    } of c)
      if (il(h)) {
        r((f) => {
          const g = t(h);
          return f ? {
            ...f,
            width: g.width,
            height: g.height
          } : g;
        });
        break;
      }
  }, [t]), i = Ui({
    callback: l
  }), o = v.useCallback((c) => {
    const h = Tf(c);
    i == null || i.disconnect(), h && (i == null || i.observe(h)), r(h ? t(h) : null);
  }, [t, i]), [s, a] = hi(o);
  return v.useMemo(() => ({
    nodeRef: s,
    rect: n,
    setRef: a
  }), [n, s, a]);
}
const jv = [{
  sensor: xa,
  options: {}
}, {
  sensor: ga,
  options: {}
}], Dv = {
  current: {}
}, Vl = {
  draggable: {
    measure: $u
  },
  droppable: {
    measure: $u,
    strategy: qr.WhileDragging,
    frequency: xs.Optimized
  },
  dragOverlay: {
    measure: rr
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
const Rv = {
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
    setRef: gi
  },
  scrollableAncestors: [],
  scrollableAncestorRects: [],
  measuringConfiguration: Vl,
  measureDroppableContainers: gi,
  windowRect: null,
  measuringScheduled: !1
}, If = {
  activatorEvent: null,
  activators: [],
  active: null,
  activeNodeRect: null,
  ariaDescribedById: {
    draggable: ""
  },
  dispatch: gi,
  draggableNodes: /* @__PURE__ */ new Map(),
  over: null,
  measureDroppableContainers: gi
}, al = /* @__PURE__ */ v.createContext(If), Lf = /* @__PURE__ */ v.createContext(Rv);
function Tv() {
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
function Iv(e, t) {
  switch (t.type) {
    case fe.DragStart:
      return {
        ...e,
        draggable: {
          ...e.draggable,
          initialCoordinates: t.initialCoordinates,
          active: t.active
        }
      };
    case fe.DragMove:
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
    case fe.DragEnd:
    case fe.DragCancel:
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
    case fe.RegisterDroppable: {
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
    case fe.SetDroppableDisabled: {
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
    case fe.UnregisterDroppable: {
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
function Lv(e) {
  let {
    disabled: t
  } = e;
  const {
    active: n,
    activatorEvent: r,
    draggableNodes: l
  } = v.useContext(al), i = mi(r), o = mi(n == null ? void 0 : n.id);
  return v.useEffect(() => {
    if (!t && !r && i && o != null) {
      if (!Fi(i) || document.activeElement === i.target)
        return;
      const s = l.get(o);
      if (!s)
        return;
      const {
        activatorNode: a,
        node: c
      } = s;
      if (!a.current && !c.current)
        return;
      requestAnimationFrame(() => {
        for (const h of [a.current, c.current]) {
          if (!h)
            continue;
          const f = jm(h);
          if (f) {
            f.focus();
            break;
          }
        }
      });
    }
  }, [r, t, l, o, i]), null;
}
function Pf(e, t) {
  let {
    transform: n,
    ...r
  } = t;
  return e != null && e.length ? e.reduce((l, i) => i({
    transform: l,
    ...r
  }), n) : n;
}
function Pv(e) {
  return v.useMemo(
    () => ({
      draggable: {
        ...Vl.draggable,
        ...e == null ? void 0 : e.draggable
      },
      droppable: {
        ...Vl.droppable,
        ...e == null ? void 0 : e.droppable
      },
      dragOverlay: {
        ...Vl.dragOverlay,
        ...e == null ? void 0 : e.dragOverlay
      }
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [e == null ? void 0 : e.draggable, e == null ? void 0 : e.droppable, e == null ? void 0 : e.dragOverlay]
  );
}
function _v(e) {
  let {
    activeNode: t,
    measure: n,
    initialRect: r,
    config: l = !0
  } = e;
  const i = v.useRef(!1), {
    x: o,
    y: s
  } = typeof l == "boolean" ? {
    x: l,
    y: l
  } : l;
  st(() => {
    if (!o && !s || !t) {
      i.current = !1;
      return;
    }
    if (i.current || !r)
      return;
    const c = t == null ? void 0 : t.node.current;
    if (!c || c.isConnected === !1)
      return;
    const h = n(c), f = yf(h, r);
    if (o || (f.x = 0), s || (f.y = 0), i.current = !0, Math.abs(f.x) > 0 || Math.abs(f.y) > 0) {
      const g = wf(c);
      g && g.scrollBy({
        top: f.y,
        left: f.x
      });
    }
  }, [t, o, s, r, n]);
}
const $i = /* @__PURE__ */ v.createContext({
  ...at,
  scaleX: 1,
  scaleY: 1
});
var Ft;
(function(e) {
  e[e.Uninitialized = 0] = "Uninitialized", e[e.Initializing = 1] = "Initializing", e[e.Initialized = 2] = "Initialized";
})(Ft || (Ft = {}));
const Ov = /* @__PURE__ */ v.memo(function(t) {
  var n, r, l, i;
  let {
    id: o,
    accessibility: s,
    autoScroll: a = !0,
    children: c,
    sensors: h = jv,
    collisionDetection: f = Bm,
    measuring: g,
    modifiers: y,
    ...k
  } = t;
  const w = v.useReducer(Iv, void 0, Tv), [I, p] = w, [d, m] = Pm(), [x, S] = v.useState(Ft.Uninitialized), N = x === Ft.Initialized, {
    draggable: {
      active: E,
      nodes: j,
      translate: D
    },
    droppable: {
      containers: C
    }
  } = I, L = E != null ? j.get(E) : null, _ = v.useRef({
    initial: null,
    translated: null
  }), z = v.useMemo(() => {
    var ke;
    return E != null ? {
      id: E,
      // It's possible for the active node to unmount while dragging
      data: (ke = L == null ? void 0 : L.data) != null ? ke : Dv,
      rect: _
    } : null;
  }, [E, L]), $ = v.useRef(null), [K, J] = v.useState(null), [X, O] = v.useState(null), M = Jr(k, Object.values(k)), F = sl("DndDescribedBy", o), W = v.useMemo(() => C.getEnabled(), [C]), B = Pv(g), {
    droppableRects: ce,
    measureDroppableContainers: se,
    measuringScheduled: P
  } = mv(W, {
    dragging: N,
    dependencies: [D.x, D.y],
    config: B.droppable
  }), T = pv(j, E), b = v.useMemo(() => X ? vi(X) : null, [X]), U = Gf(), Ae = vv(T, B.draggable.measure);
  _v({
    activeNode: E != null ? j.get(E) : null,
    config: U.layoutShiftCompensation,
    initialRect: Ae,
    measure: B.draggable.measure
  });
  const G = Qu(T, B.draggable.measure, Ae), lr = Qu(T ? T.parentElement : null), ut = v.useRef({
    activatorEvent: null,
    active: null,
    activeNode: T,
    collisionRect: null,
    collisions: null,
    droppableRects: ce,
    draggableNodes: j,
    draggingNode: null,
    draggingNodeRect: null,
    droppableContainers: C,
    over: null,
    scrollableAncestors: [],
    scrollAdjustedTranslate: null
  }), yn = C.getNodeFor((n = ut.current.over) == null ? void 0 : n.id), gt = Nv({
    measure: B.dragOverlay.measure
  }), xn = (r = gt.nodeRef.current) != null ? r : T, wn = N ? (l = gt.rect) != null ? l : G : null, ka = !!(gt.nodeRef.current && gt.rect), Sa = xv(ka ? null : G), Bi = Rf(xn ? Ie(xn) : null), It = wv(N ? yn ?? T : null), ul = Ev(It), cl = Pf(y, {
    transform: {
      x: D.x - Sa.x,
      y: D.y - Sa.y,
      scaleX: 1,
      scaleY: 1
    },
    activatorEvent: X,
    active: z,
    activeNodeRect: G,
    containerNodeRect: lr,
    draggingNodeRect: wn,
    over: ut.current.over,
    overlayNodeRect: gt.rect,
    scrollableAncestors: It,
    scrollableAncestorRects: ul,
    windowRect: Bi
  }), Ca = b ? Hn(b, D) : null, Ea = kv(It), Bf = Xu(Ea), Vf = Xu(Ea, [G]), kn = Hn(cl, Bf), Sn = wn ? Wm(wn, cl) : null, ir = z && Sn ? f({
    active: z,
    collisionRect: Sn,
    droppableRects: ce,
    droppableContainers: W,
    pointerCoordinates: Ca
  }) : null, Na = vf(ir, "id"), [Lt, ja] = v.useState(null), Hf = ka ? cl : Hn(cl, Vf), Wf = Vm(Hf, (i = Lt == null ? void 0 : Lt.rect) != null ? i : null, G), Vi = v.useRef(null), Da = v.useCallback(
    (ke, ze) => {
      let {
        sensor: Fe,
        options: Pt
      } = ze;
      if ($.current == null)
        return;
      const Qe = j.get($.current);
      if (!Qe)
        return;
      const be = ke.nativeEvent, ct = new Fe({
        active: $.current,
        activeNode: Qe,
        event: be,
        options: Pt,
        // Sensors need to be instantiated with refs for arguments that change over time
        // otherwise they are frozen in time with the stale arguments
        context: ut,
        onAbort(ge) {
          if (!j.get(ge))
            return;
          const {
            onDragAbort: dt
          } = M.current, yt = {
            id: ge
          };
          dt == null || dt(yt), d({
            type: "onDragAbort",
            event: yt
          });
        },
        onPending(ge, _t, dt, yt) {
          if (!j.get(ge))
            return;
          const {
            onDragPending: sr
          } = M.current, Ot = {
            id: ge,
            constraint: _t,
            initialCoordinates: dt,
            offset: yt
          };
          sr == null || sr(Ot), d({
            type: "onDragPending",
            event: Ot
          });
        },
        onStart(ge) {
          const _t = $.current;
          if (_t == null)
            return;
          const dt = j.get(_t);
          if (!dt)
            return;
          const {
            onDragStart: yt
          } = M.current, or = {
            activatorEvent: be,
            active: {
              id: _t,
              data: dt.data,
              rect: _
            }
          };
          zn.unstable_batchedUpdates(() => {
            yt == null || yt(or), S(Ft.Initializing), p({
              type: fe.DragStart,
              initialCoordinates: ge,
              active: _t
            }), d({
              type: "onDragStart",
              event: or
            }), J(Vi.current), O(be);
          });
        },
        onMove(ge) {
          p({
            type: fe.DragMove,
            coordinates: ge
          });
        },
        onEnd: Cn(fe.DragEnd),
        onCancel: Cn(fe.DragCancel)
      });
      Vi.current = ct;
      function Cn(ge) {
        return async function() {
          const {
            active: dt,
            collisions: yt,
            over: or,
            scrollAdjustedTranslate: sr
          } = ut.current;
          let Ot = null;
          if (dt && sr) {
            const {
              cancelDrop: ar
            } = M.current;
            Ot = {
              activatorEvent: be,
              active: dt,
              collisions: yt,
              delta: sr,
              over: or
            }, ge === fe.DragEnd && typeof ar == "function" && await Promise.resolve(ar(Ot)) && (ge = fe.DragCancel);
          }
          $.current = null, zn.unstable_batchedUpdates(() => {
            p({
              type: ge
            }), S(Ft.Uninitialized), ja(null), J(null), O(null), Vi.current = null;
            const ar = ge === fe.DragEnd ? "onDragEnd" : "onDragCancel";
            if (Ot) {
              const Hi = M.current[ar];
              Hi == null || Hi(Ot), d({
                type: ar,
                event: Ot
              });
            }
          });
        };
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [j]
  ), Qf = v.useCallback((ke, ze) => (Fe, Pt) => {
    const Qe = Fe.nativeEvent, be = j.get(Pt);
    if (
      // Another sensor is already instantiating
      $.current !== null || // No active draggable
      !be || // Event has already been captured
      Qe.dndKit || Qe.defaultPrevented
    )
      return;
    const ct = {
      active: be
    };
    ke(Fe, ze.options, ct) === !0 && (Qe.dndKit = {
      capturedBy: ze.sensor
    }, $.current = Pt, Da(Fe, ze));
  }, [j, Da]), Ra = hv(h, Qf);
  Sv(h), st(() => {
    G && x === Ft.Initializing && S(Ft.Initialized);
  }, [G, x]), v.useEffect(
    () => {
      const {
        onDragMove: ke
      } = M.current, {
        active: ze,
        activatorEvent: Fe,
        collisions: Pt,
        over: Qe
      } = ut.current;
      if (!ze || !Fe)
        return;
      const be = {
        active: ze,
        activatorEvent: Fe,
        collisions: Pt,
        delta: {
          x: kn.x,
          y: kn.y
        },
        over: Qe
      };
      zn.unstable_batchedUpdates(() => {
        ke == null || ke(be), d({
          type: "onDragMove",
          event: be
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [kn.x, kn.y]
  ), v.useEffect(
    () => {
      const {
        active: ke,
        activatorEvent: ze,
        collisions: Fe,
        droppableContainers: Pt,
        scrollAdjustedTranslate: Qe
      } = ut.current;
      if (!ke || $.current == null || !ze || !Qe)
        return;
      const {
        onDragOver: be
      } = M.current, ct = Pt.get(Na), Cn = ct && ct.rect.current ? {
        id: ct.id,
        rect: ct.rect.current,
        data: ct.data,
        disabled: ct.disabled
      } : null, ge = {
        active: ke,
        activatorEvent: ze,
        collisions: Fe,
        delta: {
          x: Qe.x,
          y: Qe.y
        },
        over: Cn
      };
      zn.unstable_batchedUpdates(() => {
        ja(Cn), be == null || be(ge), d({
          type: "onDragOver",
          event: ge
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [Na]
  ), st(() => {
    ut.current = {
      activatorEvent: X,
      active: z,
      activeNode: T,
      collisionRect: Sn,
      collisions: ir,
      droppableRects: ce,
      draggableNodes: j,
      draggingNode: xn,
      draggingNodeRect: wn,
      droppableContainers: C,
      over: Lt,
      scrollableAncestors: It,
      scrollAdjustedTranslate: kn
    }, _.current = {
      initial: wn,
      translated: Sn
    };
  }, [z, T, ir, Sn, j, xn, wn, ce, C, Lt, It, kn]), cv({
    ...U,
    delta: D,
    draggingRect: Sn,
    pointerCoordinates: Ca,
    scrollableAncestors: It,
    scrollableAncestorRects: ul
  });
  const Kf = v.useMemo(() => ({
    active: z,
    activeNode: T,
    activeNodeRect: G,
    activatorEvent: X,
    collisions: ir,
    containerNodeRect: lr,
    dragOverlay: gt,
    draggableNodes: j,
    droppableContainers: C,
    droppableRects: ce,
    over: Lt,
    measureDroppableContainers: se,
    scrollableAncestors: It,
    scrollableAncestorRects: ul,
    measuringConfiguration: B,
    measuringScheduled: P,
    windowRect: Bi
  }), [z, T, G, X, ir, lr, gt, j, C, ce, Lt, se, It, ul, B, P, Bi]), Xf = v.useMemo(() => ({
    activatorEvent: X,
    activators: Ra,
    active: z,
    activeNodeRect: G,
    ariaDescribedById: {
      draggable: F
    },
    dispatch: p,
    draggableNodes: j,
    over: Lt,
    measureDroppableContainers: se
  }), [X, Ra, z, G, p, F, j, Lt, se]);
  return te.createElement(mf.Provider, {
    value: m
  }, te.createElement(al.Provider, {
    value: Xf
  }, te.createElement(Lf.Provider, {
    value: Kf
  }, te.createElement($i.Provider, {
    value: Wf
  }, c)), te.createElement(Lv, {
    disabled: (s == null ? void 0 : s.restoreFocus) === !1
  })), te.createElement(Mm, {
    ...s,
    hiddenTextDescribedById: F
  }));
  function Gf() {
    const ke = (K == null ? void 0 : K.autoScrollEnabled) === !1, ze = typeof a == "object" ? a.enabled === !1 : a === !1, Fe = N && !ke && !ze;
    return typeof a == "object" ? {
      ...a,
      enabled: Fe
    } : {
      enabled: Fe
    };
  }
}), Mv = /* @__PURE__ */ v.createContext(null), Yu = "button", Av = "Draggable";
function zv(e) {
  let {
    id: t,
    data: n,
    disabled: r = !1,
    attributes: l
  } = e;
  const i = sl(Av), {
    activators: o,
    activatorEvent: s,
    active: a,
    activeNodeRect: c,
    ariaDescribedById: h,
    draggableNodes: f,
    over: g
  } = v.useContext(al), {
    role: y = Yu,
    roleDescription: k = "draggable",
    tabIndex: w = 0
  } = l ?? {}, I = (a == null ? void 0 : a.id) === t, p = v.useContext(I ? $i : Mv), [d, m] = hi(), [x, S] = hi(), N = Cv(o, t), E = Jr(n);
  st(
    () => (f.set(t, {
      id: t,
      key: i,
      node: d,
      activatorNode: x,
      data: E
    }), () => {
      const D = f.get(t);
      D && D.key === i && f.delete(t);
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [f, t]
  );
  const j = v.useMemo(() => ({
    role: y,
    tabIndex: w,
    "aria-disabled": r,
    "aria-pressed": I && y === Yu ? !0 : void 0,
    "aria-roledescription": k,
    "aria-describedby": h.draggable
  }), [r, y, w, I, k, h.draggable]);
  return {
    active: a,
    activatorEvent: s,
    activeNodeRect: c,
    attributes: j,
    isDragging: I,
    listeners: r ? void 0 : N,
    node: d,
    over: g,
    setNodeRef: m,
    setActivatorNodeRef: S,
    transform: p
  };
}
function _f() {
  return v.useContext(Lf);
}
const Fv = "Droppable", bv = {
  timeout: 25
};
function Of(e) {
  let {
    data: t,
    disabled: n = !1,
    id: r,
    resizeObserverConfig: l
  } = e;
  const i = sl(Fv), {
    active: o,
    dispatch: s,
    over: a,
    measureDroppableContainers: c
  } = v.useContext(al), h = v.useRef({
    disabled: n
  }), f = v.useRef(!1), g = v.useRef(null), y = v.useRef(null), {
    disabled: k,
    updateMeasurementsFor: w,
    timeout: I
  } = {
    ...bv,
    ...l
  }, p = Jr(w ?? r), d = v.useCallback(
    () => {
      if (!f.current) {
        f.current = !0;
        return;
      }
      y.current != null && clearTimeout(y.current), y.current = setTimeout(() => {
        c(Array.isArray(p.current) ? p.current : [p.current]), y.current = null;
      }, I);
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [I]
  ), m = Ui({
    callback: d,
    disabled: k || !o
  }), x = v.useCallback((j, D) => {
    m && (D && (m.unobserve(D), f.current = !1), j && m.observe(j));
  }, [m]), [S, N] = hi(x), E = Jr(t);
  return v.useEffect(() => {
    !m || !S.current || (m.disconnect(), f.current = !1, m.observe(S.current));
  }, [S, m]), v.useEffect(
    () => (s({
      type: fe.RegisterDroppable,
      element: {
        id: r,
        key: i,
        disabled: n,
        node: S,
        rect: g,
        data: E
      }
    }), () => s({
      type: fe.UnregisterDroppable,
      key: i,
      id: r
    })),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [r]
  ), v.useEffect(() => {
    n !== h.current.disabled && (s({
      type: fe.SetDroppableDisabled,
      id: r,
      key: i,
      disabled: n
    }), h.current.disabled = n);
  }, [r, i, n, s]), {
    active: o,
    rect: g,
    isOver: (a == null ? void 0 : a.id) === r,
    node: S,
    over: a,
    setNodeRef: N
  };
}
function Uv(e) {
  let {
    animation: t,
    children: n
  } = e;
  const [r, l] = v.useState(null), [i, o] = v.useState(null), s = mi(n);
  return !n && !r && s && l(s), st(() => {
    if (!i)
      return;
    const a = r == null ? void 0 : r.key, c = r == null ? void 0 : r.props.id;
    if (a == null || c == null) {
      l(null);
      return;
    }
    Promise.resolve(t(c, i)).then(() => {
      l(null);
    });
  }, [t, r, i]), te.createElement(te.Fragment, null, n, r ? v.cloneElement(r, {
    ref: o
  }) : null);
}
const $v = {
  x: 0,
  y: 0,
  scaleX: 1,
  scaleY: 1
};
function Bv(e) {
  let {
    children: t
  } = e;
  return te.createElement(al.Provider, {
    value: If
  }, te.createElement($i.Provider, {
    value: $v
  }, t));
}
const Vv = {
  position: "fixed",
  touchAction: "none"
}, Hv = (e) => Fi(e) ? "transform 250ms ease" : void 0, Wv = /* @__PURE__ */ v.forwardRef((e, t) => {
  let {
    as: n,
    activatorEvent: r,
    adjustScale: l,
    children: i,
    className: o,
    rect: s,
    style: a,
    transform: c,
    transition: h = Hv
  } = e;
  if (!s)
    return null;
  const f = l ? c : {
    ...c,
    scaleX: 1,
    scaleY: 1
  }, g = {
    ...Vv,
    width: s.width,
    height: s.height,
    top: s.top,
    left: s.left,
    transform: qt.Transform.toString(f),
    transformOrigin: l && r ? Fm(r, s) : void 0,
    transition: typeof h == "function" ? h(r) : h,
    ...a
  };
  return te.createElement(n, {
    className: o,
    style: g,
    ref: t
  }, i);
}), Qv = (e) => (t) => {
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
    for (const [a, c] of Object.entries(l))
      n.node.style.setProperty(a, c);
    o != null && o.active && n.node.classList.remove(o.active);
  };
}, Kv = (e) => {
  let {
    transform: {
      initial: t,
      final: n
    }
  } = e;
  return [{
    transform: qt.Transform.toString(t)
  }, {
    transform: qt.Transform.toString(n)
  }];
}, Xv = {
  duration: 250,
  easing: "ease",
  keyframes: Kv,
  sideEffects: /* @__PURE__ */ Qv({
    styles: {
      active: {
        opacity: "0"
      }
    }
  })
};
function Gv(e) {
  let {
    config: t,
    draggableNodes: n,
    droppableContainers: r,
    measuringConfiguration: l
  } = e;
  return zi((i, o) => {
    if (t === null)
      return;
    const s = n.get(i);
    if (!s)
      return;
    const a = s.node.current;
    if (!a)
      return;
    const c = Tf(o);
    if (!c)
      return;
    const {
      transform: h
    } = Ie(o).getComputedStyle(o), f = xf(h);
    if (!f)
      return;
    const g = typeof t == "function" ? t : Yv(t);
    return jf(a, l.draggable.measure), g({
      active: {
        id: i,
        data: s.data,
        node: a,
        rect: l.draggable.measure(a)
      },
      draggableNodes: n,
      dragOverlay: {
        node: o,
        rect: l.dragOverlay.measure(c)
      },
      droppableContainers: r,
      measuringConfiguration: l,
      transform: f
    });
  });
}
function Yv(e) {
  const {
    duration: t,
    easing: n,
    sideEffects: r,
    keyframes: l
  } = {
    ...Xv,
    ...e
  };
  return (i) => {
    let {
      active: o,
      dragOverlay: s,
      transform: a,
      ...c
    } = i;
    if (!t)
      return;
    const h = {
      x: s.rect.left - o.rect.left,
      y: s.rect.top - o.rect.top
    }, f = {
      scaleX: a.scaleX !== 1 ? o.rect.width * a.scaleX / s.rect.width : 1,
      scaleY: a.scaleY !== 1 ? o.rect.height * a.scaleY / s.rect.height : 1
    }, g = {
      x: a.x - h.x,
      y: a.y - h.y,
      ...f
    }, y = l({
      ...c,
      active: o,
      dragOverlay: s,
      transform: {
        initial: a,
        final: g
      }
    }), [k] = y, w = y[y.length - 1];
    if (JSON.stringify(k) === JSON.stringify(w))
      return;
    const I = r == null ? void 0 : r({
      active: o,
      dragOverlay: s,
      ...c
    }), p = s.node.animate(y, {
      duration: t,
      easing: n,
      fill: "forwards"
    });
    return new Promise((d) => {
      p.onfinish = () => {
        I == null || I(), d();
      };
    });
  };
}
let Ju = 0;
function Jv(e) {
  return v.useMemo(() => {
    if (e != null)
      return Ju++, Ju;
  }, [e]);
}
const Zv = /* @__PURE__ */ te.memo((e) => {
  let {
    adjustScale: t = !1,
    children: n,
    dropAnimation: r,
    style: l,
    transition: i,
    modifiers: o,
    wrapperElement: s = "div",
    className: a,
    zIndex: c = 999
  } = e;
  const {
    activatorEvent: h,
    active: f,
    activeNodeRect: g,
    containerNodeRect: y,
    draggableNodes: k,
    droppableContainers: w,
    dragOverlay: I,
    over: p,
    measuringConfiguration: d,
    scrollableAncestors: m,
    scrollableAncestorRects: x,
    windowRect: S
  } = _f(), N = v.useContext($i), E = Jv(f == null ? void 0 : f.id), j = Pf(o, {
    activatorEvent: h,
    active: f,
    activeNodeRect: g,
    containerNodeRect: y,
    draggingNodeRect: I.rect,
    over: p,
    overlayNodeRect: I.rect,
    scrollableAncestors: m,
    scrollableAncestorRects: x,
    transform: N,
    windowRect: S
  }), D = wa(g), C = Gv({
    config: r,
    draggableNodes: k,
    droppableContainers: w,
    measuringConfiguration: d
  }), L = D ? I.setRef : void 0;
  return te.createElement(Bv, null, te.createElement(Uv, {
    animation: C
  }, f && E ? te.createElement(Wv, {
    key: E,
    id: f.id,
    ref: L,
    as: s,
    activatorEvent: h,
    adjustScale: t,
    className: a,
    transition: i,
    rect: D,
    style: {
      zIndex: c,
      ...l
    },
    transform: j
  }, n) : null));
});
function Mf(e, t, n) {
  const r = e.slice();
  return r.splice(n < 0 ? r.length + n : n, 0, r.splice(t, 1)[0]), r;
}
function qv(e, t) {
  return e.reduce((n, r, l) => {
    const i = t.get(r);
    return i && (n[l] = i), n;
  }, Array(e.length));
}
function Rl(e) {
  return e !== null && e >= 0;
}
function eg(e, t) {
  if (e === t)
    return !0;
  if (e.length !== t.length)
    return !1;
  for (let n = 0; n < e.length; n++)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
function tg(e) {
  return typeof e == "boolean" ? {
    draggable: e,
    droppable: e
  } : e;
}
const Af = (e) => {
  let {
    rects: t,
    activeIndex: n,
    overIndex: r,
    index: l
  } = e;
  const i = Mf(t, r, n), o = t[l], s = i[l];
  return !s || !o ? null : {
    x: s.left - o.left,
    y: s.top - o.top,
    scaleX: s.width / o.width,
    scaleY: s.height / o.height
  };
}, Tl = {
  scaleX: 1,
  scaleY: 1
}, ng = (e) => {
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
    const c = i[o];
    return c ? {
      x: 0,
      y: n < o ? c.top + c.height - (s.top + s.height) : c.top - s.top,
      ...Tl
    } : null;
  }
  const a = rg(i, l, n);
  return l > n && l <= o ? {
    x: 0,
    y: -s.height - a,
    ...Tl
  } : l < n && l >= o ? {
    x: 0,
    y: s.height + a,
    ...Tl
  } : {
    x: 0,
    y: 0,
    ...Tl
  };
};
function rg(e, t, n) {
  const r = e[t], l = e[t - 1], i = e[t + 1];
  return r ? n < t ? l ? r.top - (l.top + l.height) : i ? i.top - (r.top + r.height) : 0 : i ? i.top - (r.top + r.height) : l ? r.top - (l.top + l.height) : 0 : 0;
}
const zf = "Sortable", Ff = /* @__PURE__ */ te.createContext({
  activeIndex: -1,
  containerId: zf,
  disableTransforms: !1,
  items: [],
  overIndex: -1,
  useDragOverlay: !1,
  sortedRects: [],
  strategy: Af,
  disabled: {
    draggable: !1,
    droppable: !1
  }
});
function lg(e) {
  let {
    children: t,
    id: n,
    items: r,
    strategy: l = Af,
    disabled: i = !1
  } = e;
  const {
    active: o,
    dragOverlay: s,
    droppableRects: a,
    over: c,
    measureDroppableContainers: h
  } = _f(), f = sl(zf, n), g = s.rect !== null, y = v.useMemo(() => r.map((N) => typeof N == "object" && "id" in N ? N.id : N), [r]), k = o != null, w = o ? y.indexOf(o.id) : -1, I = c ? y.indexOf(c.id) : -1, p = v.useRef(y), d = !eg(y, p.current), m = I !== -1 && w === -1 || d, x = tg(i);
  st(() => {
    d && k && h(y);
  }, [d, y, k, h]), v.useEffect(() => {
    p.current = y;
  }, [y]);
  const S = v.useMemo(
    () => ({
      activeIndex: w,
      containerId: f,
      disabled: x,
      disableTransforms: m,
      items: y,
      overIndex: I,
      useDragOverlay: g,
      sortedRects: qv(y, a),
      strategy: l
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [w, f, x.draggable, x.droppable, m, y, I, a, g, l]
  );
  return te.createElement(Ff.Provider, {
    value: S
  }, t);
}
const ig = (e) => {
  let {
    id: t,
    items: n,
    activeIndex: r,
    overIndex: l
  } = e;
  return Mf(n, r, l).indexOf(t);
}, og = (e) => {
  let {
    containerId: t,
    isSorting: n,
    wasDragging: r,
    index: l,
    items: i,
    newIndex: o,
    previousItems: s,
    previousContainerId: a,
    transition: c
  } = e;
  return !c || !r || s !== i && l === o ? !1 : n ? !0 : o !== l && t === a;
}, sg = {
  duration: 200,
  easing: "ease"
}, bf = "transform", ag = /* @__PURE__ */ qt.Transition.toString({
  property: bf,
  duration: 0,
  easing: "linear"
}), ug = {
  roleDescription: "sortable"
};
function cg(e) {
  let {
    disabled: t,
    index: n,
    node: r,
    rect: l
  } = e;
  const [i, o] = v.useState(null), s = v.useRef(n);
  return st(() => {
    if (!t && n !== s.current && r.current) {
      const a = l.current;
      if (a) {
        const c = rr(r.current, {
          ignoreTransform: !0
        }), h = {
          x: a.left - c.left,
          y: a.top - c.top,
          scaleX: a.width / c.width,
          scaleY: a.height / c.height
        };
        (h.x || h.y) && o(h);
      }
    }
    n !== s.current && (s.current = n);
  }, [t, n, r, l]), v.useEffect(() => {
    i && o(null);
  }, [i]), i;
}
function dg(e) {
  let {
    animateLayoutChanges: t = og,
    attributes: n,
    disabled: r,
    data: l,
    getNewIndex: i = ig,
    id: o,
    strategy: s,
    resizeObserverConfig: a,
    transition: c = sg
  } = e;
  const {
    items: h,
    containerId: f,
    activeIndex: g,
    disabled: y,
    disableTransforms: k,
    sortedRects: w,
    overIndex: I,
    useDragOverlay: p,
    strategy: d
  } = v.useContext(Ff), m = fg(r, y), x = h.indexOf(o), S = v.useMemo(() => ({
    sortable: {
      containerId: f,
      index: x,
      items: h
    },
    ...l
  }), [f, l, x, h]), N = v.useMemo(() => h.slice(h.indexOf(o)), [h, o]), {
    rect: E,
    node: j,
    isOver: D,
    setNodeRef: C
  } = Of({
    id: o,
    data: S,
    disabled: m.droppable,
    resizeObserverConfig: {
      updateMeasurementsFor: N,
      ...a
    }
  }), {
    active: L,
    activatorEvent: _,
    activeNodeRect: z,
    attributes: $,
    setNodeRef: K,
    listeners: J,
    isDragging: X,
    over: O,
    setActivatorNodeRef: M,
    transform: F
  } = zv({
    id: o,
    data: S,
    attributes: {
      ...ug,
      ...n
    },
    disabled: m.draggable
  }), W = Sm(C, K), B = !!L, ce = B && !k && Rl(g) && Rl(I), se = !p && X, P = se && ce ? F : null, b = ce ? P ?? (s ?? d)({
    rects: w,
    activeNodeRect: z,
    activeIndex: g,
    overIndex: I,
    index: x
  }) : null, U = Rl(g) && Rl(I) ? i({
    id: o,
    items: h,
    activeIndex: g,
    overIndex: I
  }) : x, Ae = L == null ? void 0 : L.id, G = v.useRef({
    activeId: Ae,
    items: h,
    newIndex: U,
    containerId: f
  }), lr = h !== G.current.items, ut = t({
    active: L,
    containerId: f,
    isDragging: X,
    isSorting: B,
    id: o,
    index: x,
    items: h,
    newIndex: G.current.newIndex,
    previousItems: G.current.items,
    previousContainerId: G.current.containerId,
    transition: c,
    wasDragging: G.current.activeId != null
  }), yn = cg({
    disabled: !ut,
    index: x,
    node: j,
    rect: E
  });
  return v.useEffect(() => {
    B && G.current.newIndex !== U && (G.current.newIndex = U), f !== G.current.containerId && (G.current.containerId = f), h !== G.current.items && (G.current.items = h);
  }, [B, U, f, h]), v.useEffect(() => {
    if (Ae === G.current.activeId)
      return;
    if (Ae && !G.current.activeId) {
      G.current.activeId = Ae;
      return;
    }
    const xn = setTimeout(() => {
      G.current.activeId = Ae;
    }, 50);
    return () => clearTimeout(xn);
  }, [Ae]), {
    active: L,
    activeIndex: g,
    attributes: $,
    data: S,
    rect: E,
    index: x,
    newIndex: U,
    items: h,
    isOver: D,
    isSorting: B,
    isDragging: X,
    listeners: J,
    node: j,
    overIndex: I,
    over: O,
    setNodeRef: W,
    setActivatorNodeRef: M,
    setDroppableNodeRef: C,
    setDraggableNodeRef: K,
    transform: yn ?? b,
    transition: gt()
  };
  function gt() {
    if (
      // Temporarily disable transitions for a single frame to set up derived transforms
      yn || // Or to prevent items jumping to back to their "new" position when items change
      lr && G.current.newIndex === x
    )
      return ag;
    if (!(se && !Fi(_) || !c) && (B || ut))
      return qt.Transition.toString({
        ...c,
        property: bf
      });
  }
}
function fg(e, t) {
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
function xi(e) {
  if (!e)
    return !1;
  const t = e.data.current;
  return !!(t && "sortable" in t && typeof t.sortable == "object" && "containerId" in t.sortable && "items" in t.sortable && "index" in t.sortable);
}
const pg = [H.Down, H.Right, H.Up, H.Left], hg = (e, t) => {
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
  if (pg.includes(e.code)) {
    if (e.preventDefault(), !n || !r)
      return;
    const a = [];
    i.getEnabled().forEach((f) => {
      if (!f || f != null && f.disabled)
        return;
      const g = l.get(f.id);
      if (g)
        switch (e.code) {
          case H.Down:
            r.top < g.top && a.push(f);
            break;
          case H.Up:
            r.top > g.top && a.push(f);
            break;
          case H.Left:
            r.left > g.left && a.push(f);
            break;
          case H.Right:
            r.left < g.left && a.push(f);
            break;
        }
    });
    const c = gf({
      collisionRect: r,
      droppableRects: l,
      droppableContainers: a
    });
    let h = vf(c, "id");
    if (h === (o == null ? void 0 : o.id) && c.length > 1 && (h = c[1].id), h != null) {
      const f = i.get(n.id), g = i.get(h), y = g ? l.get(g.id) : null, k = g == null ? void 0 : g.node.current;
      if (k && y && f && g) {
        const I = bi(k).some((N, E) => s[E] !== N), p = Uf(f, g), d = mg(f, g), m = I || !p ? {
          x: 0,
          y: 0
        } : {
          x: d ? r.width - y.width : 0,
          y: d ? r.height - y.height : 0
        }, x = {
          x: y.left,
          y: y.top
        };
        return m.x && m.y ? x : Zr(x, m);
      }
    }
  }
};
function Uf(e, t) {
  return !xi(e) || !xi(t) ? !1 : e.data.current.sortable.containerId === t.data.current.sortable.containerId;
}
function mg(e, t) {
  return !xi(e) || !xi(t) || !Uf(e, t) ? !1 : e.data.current.sortable.index < t.data.current.sortable.index;
}
const vg = {
  LOW: "priority-low",
  MEDIUM: "priority-medium",
  HIGH: "priority-high",
  URGENT: "priority-urgent"
};
function $f({ ticket: e, isDragging: t = !1, onClick: n, onArchive: r, onDelete: l }) {
  const {
    attributes: i,
    listeners: o,
    setNodeRef: s,
    transform: a,
    transition: c,
    isDragging: h
  } = dg({ id: e.id }), f = {
    transform: qt.Transform.toString(a),
    transition: c
  }, g = e.status === "HANDLE" || e.status === "AI_PROCESSING", y = e.status === "TO_REVIEW" && e.prLink;
  return /* @__PURE__ */ u.jsxs(
    "div",
    {
      ref: s,
      style: f,
      className: `ticket-card ${t || h ? "dragging" : ""} ${y ? "success-glow" : ""}`,
      onClick: n,
      ...i,
      ...o,
      children: [
        /* @__PURE__ */ u.jsx("h4", { className: "ticket-title", children: e.title }),
        e.description && /* @__PURE__ */ u.jsx("p", { className: "ticket-description", children: e.description }),
        /* @__PURE__ */ u.jsxs("div", { className: "ticket-meta", children: [
          /* @__PURE__ */ u.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ u.jsx("span", { className: `ticket-priority ${vg[e.priority]}`, children: e.priority }),
            e.targetBranch && /* @__PURE__ */ u.jsxs("span", { className: "ticket-branch", title: `Target: ${e.targetBranch}`, children: [
              /* @__PURE__ */ u.jsx(wg, {}),
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
        g && /* @__PURE__ */ u.jsxs("div", { className: `ticket-ai-status ${e.status === "AI_PROCESSING" ? "processing" : ""}`, children: [
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
              /* @__PURE__ */ u.jsx(xg, {}),
              "View Pull Request"
            ]
          }
        ),
        e.aiSummary && /* @__PURE__ */ u.jsxs("div", { className: "ticket-ai-summary", children: [
          /* @__PURE__ */ u.jsx("strong", { children: "AI Summary:" }),
          " ",
          e.aiSummary
        ] }),
        !g && (r || l) && /* @__PURE__ */ u.jsxs("div", { className: "ticket-actions", children: [
          l && /* @__PURE__ */ u.jsx(
            "button",
            {
              className: "ticket-action-btn delete",
              onClick: (k) => {
                k.stopPropagation(), l(e);
              },
              title: "Delete this ticket",
              children: /* @__PURE__ */ u.jsx(gg, {})
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
                /* @__PURE__ */ u.jsx(yg, {}),
                "Archive"
              ]
            }
          )
        ] })
      ]
    }
  );
}
function gg() {
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
function yg() {
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
function xg() {
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
function wg() {
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
const kg = {
  BACKLOG: "",
  TODO: "",
  HANDLE: "column-handle",
  AI_PROCESSING: "column-ai-processing",
  TO_REVIEW: "column-to-review",
  DONE: "column-done",
  CANCELLED: ""
};
function Sg({
  id: e,
  title: t,
  icon: n,
  tickets: r,
  isActive: l = !1,
  onTicketClick: i,
  onArchive: o,
  onDelete: s
}) {
  const { setNodeRef: a, isOver: c } = Of({ id: e });
  return /* @__PURE__ */ u.jsxs(
    "div",
    {
      className: `kanban-column ${kg[e]} ${l ? "active" : ""}`,
      children: [
        /* @__PURE__ */ u.jsxs("div", { className: "column-header", children: [
          /* @__PURE__ */ u.jsxs("div", { className: "column-title", children: [
            /* @__PURE__ */ u.jsx("span", { className: "icon", role: "img", "aria-label": t, children: n }),
            /* @__PURE__ */ u.jsx("span", { children: t })
          ] }),
          /* @__PURE__ */ u.jsx("span", { className: "column-count", children: r.length })
        ] }),
        /* @__PURE__ */ u.jsx(lg, { items: r.map((h) => h.id), strategy: ng, children: /* @__PURE__ */ u.jsx(
          "div",
          {
            ref: a,
            className: `column-body ${c ? "drop-target" : ""}`,
            children: r.length === 0 ? /* @__PURE__ */ u.jsxs("div", { className: "column-empty", children: [
              /* @__PURE__ */ u.jsx("span", { className: "mb-1 text-lg", children: n }),
              /* @__PURE__ */ u.jsx("span", { children: "Drop tickets here" }),
              e === "HANDLE" && /* @__PURE__ */ u.jsx("span", { className: "text-xs mt-1", children: "AI will process these" })
            ] }) : r.map((h) => /* @__PURE__ */ u.jsx(
              $f,
              {
                ticket: h,
                onClick: () => i(h),
                onArchive: o,
                onDelete: s
              },
              h.id
            ))
          }
        ) })
      ]
    }
  );
}
const Cg = [
  { value: "LOW", label: "Low", icon: "↓", color: "text-slate-400" },
  { value: "MEDIUM", label: "Medium", icon: "→", color: "text-blue-400" },
  { value: "HIGH", label: "High", icon: "↑", color: "text-amber-400" },
  { value: "URGENT", label: "Urgent", icon: "⚡", color: "text-red-400" }
], Eg = {
  auto: { value: "auto", label: "Auto (Recommended)", description: "Let Cursor choose the best model" },
  "claude-4-sonnet-thinking": { value: "claude-4-sonnet-thinking", label: "Claude 4 Sonnet", description: "Fast & capable" },
  "claude-4-opus-thinking": { value: "claude-4-opus-thinking", label: "Claude 4 Opus", description: "Most powerful" },
  o3: { value: "o3", label: "O3", description: "OpenAI reasoning model" }
}, Ng = `## What needs to be done
Describe the task clearly. What is the expected outcome?

## Acceptance Criteria
- [ ] Criterion 1
- [ ] Criterion 2
- [ ] Criterion 3

## Technical Details
Any specific implementation details, files to modify, or constraints?

## Additional Context
Links, screenshots, or references that might help.`;
function jg({
  projectId: e,
  projectName: t,
  branchPresets: n,
  defaultBranch: r,
  members: l = [],
  onClose: i,
  onSubmit: o
}) {
  const [s, a] = v.useState(""), [c, h] = v.useState(Ng), [f, g] = v.useState("MEDIUM"), [y, k] = v.useState(r), [w, I] = v.useState(""), [p, d] = v.useState([]), [m, x] = v.useState(""), [S, N] = v.useState(!1), [E, j] = v.useState(!1), [D, C] = v.useState(""), [L, _] = v.useState("auto"), [z, $] = v.useState(["auto"]), [K, J] = v.useState(!0), X = v.useRef(null), O = v.useRef(null);
  v.useEffect(() => {
    var P;
    (P = X.current) == null || P.focus();
  }, []), v.useEffect(() => {
    (async () => {
      try {
        const T = Zu(), b = await fetch("/api/cursor/models", {
          headers: { "X-CSRF-Token": T }
        });
        if (b.ok) {
          const U = await b.json();
          $(U.models || ["auto"]);
        }
      } catch (T) {
        console.error("Failed to fetch models:", T);
      } finally {
        J(!1);
      }
    })();
  }, []), v.useEffect(() => {
    const P = (T) => {
      T.key === "Escape" && i(), (T.metaKey || T.ctrlKey) && T.key === "Enter" && (T.preventDefault(), F(T));
    };
    return document.addEventListener("keydown", P), () => document.removeEventListener("keydown", P);
  }, [i, s, c, f, y]);
  const M = (P) => {
    if (!P || P.trim().length < 30) return !1;
    const T = [
      "Describe the task clearly",
      "What is the expected outcome?",
      "Criterion 1",
      "Criterion 2",
      "Criterion 3",
      "Any specific implementation details",
      "files to modify, or constraints?",
      "Links, screenshots, or references"
    ];
    let b = 0;
    for (const Ae of T)
      P.includes(Ae) && b++;
    return b >= 5 ? !1 : P.replace(/##\s*[A-Za-z ]+\s*/g, "").replace(/-\s*\[\s*\]\s*/g, "").replace(/\s+/g, " ").trim().length >= 15;
  }, F = v.useCallback(
    async (P) => {
      var T;
      if (P.preventDefault(), C(""), !s.trim()) {
        C("Title is required"), (T = X.current) == null || T.focus();
        return;
      }
      if (!c.trim()) {
        C("Description is required - the AI needs context to work!");
        return;
      }
      if (!M(c)) {
        C("Please fill in the description template with actual task details. The AI needs this information to implement the feature correctly.");
        return;
      }
      j(!0);
      try {
        const b = Zu(), U = await fetch(`/api/tickets/${e}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-CSRF-Token": b
          },
          body: JSON.stringify({
            title: s.trim(),
            description: c.trim(),
            priority: f,
            status: "BACKLOG",
            targetBranch: y,
            assigneeId: w || void 0,
            labels: p,
            aiModel: L !== "auto" ? L : void 0
          })
        });
        if (!U.ok) {
          const G = await U.json().catch(() => ({}));
          throw new Error(G.message || "Failed to create ticket");
        }
        const Ae = await U.json();
        o(Ae);
      } catch (b) {
        C(b instanceof Error ? b.message : "Failed to create ticket");
      } finally {
        j(!1);
      }
    },
    [e, s, c, f, y, w, p, L, o]
  ), W = v.useCallback(() => {
    const P = m.trim().toLowerCase();
    P && !p.includes(P) && (d([...p, P]), x(""));
  }, [m, p]), B = v.useCallback((P) => {
    d(p.filter((T) => T !== P));
  }, [p]), ce = v.useCallback((P) => {
    P.key === "Enter" && (P.preventDefault(), W());
  }, [W]), se = M(c);
  return /* @__PURE__ */ u.jsx(
    "div",
    {
      className: "modal-overlay",
      onClick: (P) => {
        P.target === P.currentTarget && i();
      },
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": "new-ticket-title",
      children: /* @__PURE__ */ u.jsxs("div", { ref: O, className: "ticket-modal", onClick: (P) => P.stopPropagation(), children: [
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
                onClick: i,
                "aria-label": "Close modal",
                children: /* @__PURE__ */ u.jsx("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: /* @__PURE__ */ u.jsx("path", { d: "M18 6L6 18M6 6l12 12" }) })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ u.jsxs("form", { onSubmit: F, className: "ticket-modal-form", children: [
          D && /* @__PURE__ */ u.jsxs("div", { className: "ticket-error", children: [
            /* @__PURE__ */ u.jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
              /* @__PURE__ */ u.jsx("circle", { cx: "12", cy: "12", r: "10" }),
              /* @__PURE__ */ u.jsx("path", { d: "M12 8v4M12 16h.01" })
            ] }),
            D
          ] }),
          /* @__PURE__ */ u.jsxs("div", { className: "ticket-field", children: [
            /* @__PURE__ */ u.jsxs("label", { className: "ticket-label", children: [
              "Title ",
              /* @__PURE__ */ u.jsx("span", { className: "text-red-400", children: "*" })
            ] }),
            /* @__PURE__ */ u.jsx(
              "input",
              {
                ref: X,
                id: "ticket-title",
                name: "title",
                type: "text",
                className: "ticket-title-input",
                placeholder: "Brief summary of the task",
                value: s,
                onChange: (P) => a(P.target.value),
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
                className: `ticket-description-input ${se ? "" : "ticket-description-warning"}`,
                value: c,
                onChange: (P) => h(P.target.value),
                rows: 12,
                autoComplete: "off",
                required: !0
              }
            ),
            !se && /* @__PURE__ */ u.jsx("p", { className: "ticket-warning-hint", children: "⚠️ Fill in the template with actual task details" })
          ] }),
          /* @__PURE__ */ u.jsxs("div", { className: "ticket-meta-grid", children: [
            /* @__PURE__ */ u.jsxs("div", { className: "ticket-field", children: [
              /* @__PURE__ */ u.jsx("label", { className: "ticket-label", children: "Priority" }),
              /* @__PURE__ */ u.jsx("div", { className: "ticket-priority-selector", children: Cg.map((P) => /* @__PURE__ */ u.jsxs(
                "button",
                {
                  type: "button",
                  className: `ticket-priority-btn ${f === P.value ? "active" : ""} ${P.color}`,
                  onClick: () => g(P.value),
                  title: P.label,
                  children: [
                    /* @__PURE__ */ u.jsx("span", { className: "ticket-priority-icon", children: P.icon }),
                    /* @__PURE__ */ u.jsx("span", { className: "ticket-priority-label", children: P.label })
                  ]
                },
                P.value
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
              K ? /* @__PURE__ */ u.jsxs("div", { className: "ticket-model-loading", children: [
                /* @__PURE__ */ u.jsx("span", { className: "ticket-spinner-small" }),
                "Loading models..."
              ] }) : /* @__PURE__ */ u.jsx(
                "select",
                {
                  className: "ticket-select",
                  value: L,
                  onChange: (P) => _(P.target.value),
                  children: z.map((P) => {
                    const T = Eg[P] || {
                      label: P.replace(/-/g, " ").replace(/\b\w/g, (b) => b.toUpperCase()),
                      description: ""
                    };
                    return /* @__PURE__ */ u.jsxs("option", { value: P, children: [
                      T.label,
                      T.description ? ` - ${T.description}` : ""
                    ] }, P);
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
              n.length > 0 ? /* @__PURE__ */ u.jsx("div", { className: "ticket-branch-presets", children: n.map((P) => /* @__PURE__ */ u.jsxs(
                "button",
                {
                  type: "button",
                  className: `ticket-branch-btn ${y === P.branch ? "active" : ""}`,
                  onClick: () => k(P.branch),
                  children: [
                    /* @__PURE__ */ u.jsx("span", { className: "font-medium", children: P.name }),
                    /* @__PURE__ */ u.jsx("code", { children: P.branch })
                  ]
                },
                P.branch
              )) }) : /* @__PURE__ */ u.jsx(
                "input",
                {
                  type: "text",
                  className: "ticket-input",
                  placeholder: "main",
                  value: y,
                  onChange: (P) => k(P.target.value)
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ u.jsxs(
            "button",
            {
              type: "button",
              className: "ticket-advanced-toggle",
              onClick: () => N(!S),
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
            l.length > 0 && /* @__PURE__ */ u.jsxs("div", { className: "ticket-field", children: [
              /* @__PURE__ */ u.jsx("label", { className: "ticket-label", children: "Assignee" }),
              /* @__PURE__ */ u.jsxs("div", { className: "ticket-assignee-selector", children: [
                /* @__PURE__ */ u.jsxs(
                  "button",
                  {
                    type: "button",
                    className: `ticket-assignee-btn ${w ? "" : "active"}`,
                    onClick: () => I(""),
                    children: [
                      /* @__PURE__ */ u.jsx("div", { className: "ticket-assignee-avatar unassigned", children: "?" }),
                      /* @__PURE__ */ u.jsx("span", { children: "Unassigned" })
                    ]
                  }
                ),
                l.map((P) => /* @__PURE__ */ u.jsxs(
                  "button",
                  {
                    type: "button",
                    className: `ticket-assignee-btn ${w === P.id ? "active" : ""}`,
                    onClick: () => I(P.id),
                    children: [
                      /* @__PURE__ */ u.jsx("div", { className: "ticket-assignee-avatar", children: P.avatarUrl ? /* @__PURE__ */ u.jsx("img", { src: P.avatarUrl, alt: P.name }) : P.name.substring(0, 2).toUpperCase() }),
                      /* @__PURE__ */ u.jsx("span", { children: P.name })
                    ]
                  },
                  P.id
                ))
              ] })
            ] }),
            /* @__PURE__ */ u.jsxs("div", { className: "ticket-field", children: [
              /* @__PURE__ */ u.jsx("label", { className: "ticket-label", children: "Labels" }),
              /* @__PURE__ */ u.jsxs("div", { className: "ticket-labels-input", children: [
                /* @__PURE__ */ u.jsx("div", { className: "ticket-labels-list", children: p.map((P) => /* @__PURE__ */ u.jsxs("span", { className: "ticket-label-tag", children: [
                  P,
                  /* @__PURE__ */ u.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => B(P),
                      className: "ticket-label-remove",
                      children: "×"
                    }
                  )
                ] }, P)) }),
                /* @__PURE__ */ u.jsx(
                  "input",
                  {
                    type: "text",
                    className: "ticket-label-input",
                    placeholder: "Add label...",
                    value: m,
                    onChange: (P) => x(P.target.value),
                    onKeyDown: ce,
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
                  onChange: (P) => k(P.target.value)
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
                onClick: i,
                disabled: E,
                children: "Cancel"
              }
            ),
            /* @__PURE__ */ u.jsx(
              "button",
              {
                type: "submit",
                className: "ticket-btn-primary",
                disabled: E || !s.trim(),
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
function Zu() {
  const e = document.querySelector('meta[name="csrf-token"]');
  return (e == null ? void 0 : e.getAttribute("content")) || "";
}
const Dg = {
  QUEUED: "text-amber-400",
  RUNNING: "text-blue-400",
  FINISHED: "text-emerald-400",
  ERROR: "text-red-400",
  CANCELLED: "text-slate-400"
}, Rg = {
  QUEUED: "⏳",
  RUNNING: "🔄",
  FINISHED: "✅",
  ERROR: "❌",
  CANCELLED: "🚫"
}, Tg = {
  QUEUED: "Queued",
  RUNNING: "Running",
  FINISHED: "Completed",
  ERROR: "Failed",
  CANCELLED: "Cancelled"
};
function Ig({
  agentId: e,
  ticketId: t,
  ticketTitle: n,
  ticketStatus: r,
  onStatusChange: l,
  onStop: i,
  onFollowupSent: o,
  onValidate: s
}) {
  var W, B, ce, se, P;
  const [a, c] = v.useState(null), [h, f] = v.useState([]), [g, y] = v.useState(!0), [k, w] = v.useState(null), [I, p] = v.useState(!0), [d, m] = v.useState(!1), [x, S] = v.useState(!1), [N, E] = v.useState(""), [j, D] = v.useState(!1), [C, L] = v.useState(null), _ = v.useRef(null), z = v.useRef(null), $ = v.useCallback(async () => {
    if (!x) {
      S(!0);
      try {
        const T = gr(), b = await fetch(`/api/tickets/${t}/validate`, {
          method: "POST",
          headers: {
            "X-CSRF-Token": T,
            "Content-Type": "application/json"
          }
        });
        if (!b.ok) {
          const U = await b.json();
          throw new Error(U.error || "Failed to validate ticket");
        }
        showToast("Ticket validated and marked as Done!", "success"), z.current && (clearInterval(z.current), z.current = null), s && s();
      } catch (T) {
        console.error("Validate error:", T);
        const b = T instanceof Error ? T.message : "Failed to validate ticket";
        w(b), showToast(b, "error");
      } finally {
        S(!1), L(null);
      }
    }
  }, [t, x, s]), K = v.useCallback(async () => {
    if (!d) {
      m(!0);
      try {
        const T = gr(), b = await fetch(`/api/cursor/agents/${e}/stop`, {
          method: "POST",
          headers: {
            "X-CSRF-Token": T,
            "Content-Type": "application/json"
          }
        });
        if (!b.ok) {
          const U = await b.json();
          throw new Error(U.error || "Failed to stop agent");
        }
        showToast("AI agent stopped", "warning"), c((U) => U ? { ...U, status: "CANCELLED" } : null), z.current && (clearInterval(z.current), z.current = null), l && l("CANCELLED"), i && i();
      } catch (T) {
        console.error("Stop agent error:", T);
        const b = T instanceof Error ? T.message : "Failed to stop agent";
        w(b), showToast(b, "error");
      } finally {
        m(!1), L(null);
      }
    }
  }, [e, d, l, i]), J = v.useCallback(async () => {
    if (!(!N.trim() || j)) {
      D(!0);
      try {
        const T = gr(), b = await fetch(`/api/cursor/agents/${e}/followup`, {
          method: "POST",
          headers: {
            "X-CSRF-Token": T,
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            prompt: { text: N.trim() }
          })
        });
        if (!b.ok) {
          const U = await b.json();
          throw new Error(U.error || "Failed to send follow-up");
        }
        f((U) => [
          ...U,
          {
            id: `local-${Date.now()}`,
            type: "user_message",
            text: N.trim()
          }
        ]), E(""), c((U) => U ? { ...U, status: "RUNNING" } : null), z.current || (z.current = setInterval(() => {
          X(), O();
        }, 3e3)), o && o();
      } catch (T) {
        console.error("Follow-up error:", T), w(T instanceof Error ? T.message : "Failed to send follow-up");
      } finally {
        D(!1);
      }
    }
  }, [e, N, j, o]), X = v.useCallback(async () => {
    try {
      const T = gr(), b = await fetch(`/api/cursor/agents/${e}/status`, {
        headers: { "X-CSRF-Token": T }
      });
      if (!b.ok) {
        if (b.status === 404) {
          w("Agent not found. It may have been deleted.");
          return;
        }
        throw new Error("Failed to fetch status");
      }
      const U = await b.json();
      c(U), l && U.status && l(U.status), (U.status === "FINISHED" || U.status === "ERROR" || U.status === "CANCELLED") && z.current && (clearInterval(z.current), z.current = null);
    } catch (T) {
      console.error("Status fetch error:", T), w("Failed to fetch agent status");
    }
  }, [e, l]), O = v.useCallback(async () => {
    try {
      const T = gr(), b = await fetch(`/api/cursor/agents/${e}/conversation`, {
        headers: { "X-CSRF-Token": T }
      });
      if (!b.ok) {
        if (b.status === 404) return;
        throw new Error("Failed to fetch conversation");
      }
      const U = await b.json();
      U.messages && U.messages.length > 0 && f(U.messages), _.current && setTimeout(() => {
        _.current && (_.current.scrollTop = _.current.scrollHeight);
      }, 100);
    } catch (T) {
      console.error("Conversation fetch error:", T);
    }
  }, [e]);
  if (v.useEffect(() => (y(!0), w(null), (async () => {
    await Promise.all([X(), O()]), y(!1);
  })(), z.current = setInterval(() => {
    X(), O();
  }, 3e3), () => {
    z.current && clearInterval(z.current);
  }), [e, X, O]), v.useEffect(() => {
    _.current && h.length > 0 && (_.current.scrollTop = _.current.scrollHeight);
  }, [h]), g)
    return /* @__PURE__ */ u.jsx("div", { className: "agent-status-panel loading", children: /* @__PURE__ */ u.jsxs("div", { className: "agent-status-header", children: [
      /* @__PURE__ */ u.jsx("div", { className: "agent-spinner" }),
      /* @__PURE__ */ u.jsx("span", { children: "Connecting to Cursor Agent..." })
    ] }) });
  if (k) {
    const T = r === "TO_REVIEW";
    return /* @__PURE__ */ u.jsxs("div", { className: "agent-status-panel error", children: [
      /* @__PURE__ */ u.jsx("div", { className: "agent-status-header", children: /* @__PURE__ */ u.jsxs("span", { className: "text-red-400", children: [
        "❌ ",
        k
      ] }) }),
      T && /* @__PURE__ */ u.jsx("div", { className: "agent-review-actions", style: { padding: "1rem" }, children: C === "validate" ? /* @__PURE__ */ u.jsxs("div", { className: "validate-confirm", children: [
        /* @__PURE__ */ u.jsx("span", { className: "text-sm", children: "Mark as Done? This confirms the work is complete." }),
        /* @__PURE__ */ u.jsxs("div", { className: "validate-confirm-btns", children: [
          /* @__PURE__ */ u.jsx(
            "button",
            {
              className: "btn btn-secondary btn-sm",
              onClick: () => L(null),
              disabled: x,
              children: "Cancel"
            }
          ),
          /* @__PURE__ */ u.jsx(
            "button",
            {
              className: "btn btn-primary btn-sm",
              onClick: $,
              disabled: x,
              children: x ? "Validating..." : "Confirm"
            }
          )
        ] })
      ] }) : /* @__PURE__ */ u.jsx(
        "button",
        {
          className: "validate-btn",
          onClick: () => L("validate"),
          disabled: x,
          children: x ? /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
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
  const M = (a == null ? void 0 : a.status) || "QUEUED", F = M === "FINISHED" || r === "TO_REVIEW";
  return /* @__PURE__ */ u.jsxs("div", { className: `agent-status-panel ${M.toLowerCase()}`, children: [
    /* @__PURE__ */ u.jsxs(
      "button",
      {
        className: "agent-status-header",
        onClick: () => p(!I),
        "aria-expanded": I,
        children: [
          /* @__PURE__ */ u.jsxs("div", { className: "agent-status-info", children: [
            /* @__PURE__ */ u.jsx("span", { className: "agent-status-indicator", children: M === "RUNNING" ? /* @__PURE__ */ u.jsx("span", { className: "agent-spinner-small" }) : Rg[M] }),
            /* @__PURE__ */ u.jsx("span", { className: `agent-status-text ${Dg[M]}`, children: Tg[M] }),
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
            (M === "RUNNING" || M === "QUEUED") && (C === "stop" ? /* @__PURE__ */ u.jsxs("div", { className: "agent-confirm-inline", onClick: (T) => T.stopPropagation(), children: [
              /* @__PURE__ */ u.jsx("span", { className: "text-xs text-muted-foreground", children: "Stop agent?" }),
              /* @__PURE__ */ u.jsx(
                "button",
                {
                  className: "agent-confirm-btn yes",
                  onClick: K,
                  disabled: d,
                  children: d ? "..." : "Yes"
                }
              ),
              /* @__PURE__ */ u.jsx(
                "button",
                {
                  className: "agent-confirm-btn no",
                  onClick: () => L(null),
                  disabled: d,
                  children: "No"
                }
              )
            ] }) : /* @__PURE__ */ u.jsxs(
              "button",
              {
                className: "agent-stop-btn",
                onClick: (T) => {
                  T.stopPropagation(), L("stop");
                },
                disabled: d,
                title: "Emergency Stop - Stop the AI agent immediately",
                children: [
                  d ? /* @__PURE__ */ u.jsx("span", { className: "agent-spinner-small" }) : /* @__PURE__ */ u.jsx("svg", { viewBox: "0 0 24 24", fill: "currentColor", className: "w-3.5 h-3.5", children: /* @__PURE__ */ u.jsx("rect", { x: "6", y: "6", width: "12", height: "12", rx: "1" }) }),
                  /* @__PURE__ */ u.jsx("span", { children: d ? "Stopping..." : "Stop" })
                ]
              }
            )),
            ((B = a == null ? void 0 : a.target) == null ? void 0 : B.url) && /* @__PURE__ */ u.jsx(
              "a",
              {
                href: a.target.url,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "agent-link",
                onClick: (T) => T.stopPropagation(),
                children: "View in Cursor ↗"
              }
            ),
            ((ce = a == null ? void 0 : a.target) == null ? void 0 : ce.prUrl) && /* @__PURE__ */ u.jsx(
              "a",
              {
                href: a.target.prUrl,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "agent-link pr",
                onClick: (T) => T.stopPropagation(),
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
                className: `agent-expand-icon ${I ? "expanded" : ""}`,
                children: /* @__PURE__ */ u.jsx("path", { d: "M6 9l6 6 6-6" })
              }
            )
          ] })
        ]
      }
    ),
    I && /* @__PURE__ */ u.jsxs("div", { className: "agent-status-content", children: [
      (a == null ? void 0 : a.summary) && /* @__PURE__ */ u.jsxs("div", { className: "agent-summary", children: [
        /* @__PURE__ */ u.jsx("h4", { children: "Summary" }),
        /* @__PURE__ */ u.jsx("p", { children: a.summary })
      ] }),
      /* @__PURE__ */ u.jsxs("div", { className: "agent-terminal", ref: _, children: [
        /* @__PURE__ */ u.jsxs("div", { className: "agent-terminal-header", children: [
          /* @__PURE__ */ u.jsxs("div", { className: "terminal-dots", children: [
            /* @__PURE__ */ u.jsx("span", { className: "dot red" }),
            /* @__PURE__ */ u.jsx("span", { className: "dot yellow" }),
            /* @__PURE__ */ u.jsx("span", { className: "dot green" })
          ] }),
          /* @__PURE__ */ u.jsx("span", { className: "terminal-title", children: "Agent Conversation" })
        ] }),
        /* @__PURE__ */ u.jsxs("div", { className: "agent-terminal-body", children: [
          h.length === 0 ? /* @__PURE__ */ u.jsxs("div", { className: "terminal-empty", children: [
            M === "QUEUED" ? "Waiting for agent to start..." : M === "RUNNING" ? "Agent is processing..." : "No conversation data available.",
            /* @__PURE__ */ u.jsx("span", { className: "cursor-blink", children: "▋" })
          ] }) : h.map((T, b) => /* @__PURE__ */ u.jsxs(
            "div",
            {
              className: `terminal-message ${T.type}`,
              children: [
                /* @__PURE__ */ u.jsx("span", { className: "terminal-prompt", children: T.type === "user_message" ? /* @__PURE__ */ u.jsx("span", { className: "prompt-user", children: "You :>" }) : /* @__PURE__ */ u.jsx("span", { className: "prompt-agent", children: "Cloud Agent :>" }) }),
                /* @__PURE__ */ u.jsx("pre", { className: "terminal-text", children: T.text })
              ]
            },
            T.id || b
          )),
          M === "RUNNING" && h.length > 0 && /* @__PURE__ */ u.jsxs("div", { className: "terminal-cursor", children: [
            /* @__PURE__ */ u.jsx("span", { className: "prompt-agent", children: "Cloud Agent :>" }),
            /* @__PURE__ */ u.jsx("span", { className: "cursor-blink", children: "▋" })
          ] })
        ] })
      ] }),
      F && /* @__PURE__ */ u.jsxs("div", { className: "agent-review-actions", children: [
        C === "validate" ? /* @__PURE__ */ u.jsxs("div", { className: "validate-confirm", children: [
          /* @__PURE__ */ u.jsx("span", { className: "text-sm", children: "Mark as Done? This confirms the work is complete." }),
          /* @__PURE__ */ u.jsxs("div", { className: "validate-confirm-btns", children: [
            /* @__PURE__ */ u.jsx(
              "button",
              {
                className: "btn btn-secondary btn-sm",
                onClick: () => L(null),
                disabled: x,
                children: "Cancel"
              }
            ),
            /* @__PURE__ */ u.jsx(
              "button",
              {
                className: "btn btn-primary btn-sm",
                onClick: $,
                disabled: x,
                children: x ? "Validating..." : "Confirm"
              }
            )
          ] })
        ] }) : /* @__PURE__ */ u.jsx(
          "button",
          {
            className: "validate-btn",
            onClick: () => L("validate"),
            disabled: x,
            children: x ? /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
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
                value: N,
                onChange: (T) => E(T.target.value),
                placeholder: "Please also add unit tests for the translation changes...",
                rows: 3,
                disabled: j,
                onKeyDown: (T) => {
                  T.key === "Enter" && !T.shiftKey && N.trim() && (T.preventDefault(), J());
                }
              }
            ),
            /* @__PURE__ */ u.jsx(
              "button",
              {
                className: "followup-btn",
                onClick: J,
                disabled: !N.trim() || j,
                children: j ? /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
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
        ((se = a == null ? void 0 : a.source) == null ? void 0 : se.repository) && /* @__PURE__ */ u.jsxs("div", { className: "agent-meta-item", children: [
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
        ((P = a == null ? void 0 : a.source) == null ? void 0 : P.ref) && /* @__PURE__ */ u.jsxs("div", { className: "agent-meta-item", children: [
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
function gr() {
  const e = document.querySelector('meta[name="csrf-token"]');
  return (e == null ? void 0 : e.getAttribute("content")) || "";
}
function Il(e, t = "success") {
  typeof window < "u" && window.showToast && window.showToast(e, t);
}
const Lg = {
  BACKLOG: "Backlog",
  TODO: "To Do",
  HANDLE: "Handle (AI Queue)",
  AI_PROCESSING: "AI Processing",
  TO_REVIEW: "To Review",
  DONE: "Done",
  CANCELLED: "Cancelled"
};
function Pg({
  ticket: e,
  projectId: t,
  onClose: n,
  onUpdate: r
}) {
  const [l, i] = v.useState(!1), [o, s] = v.useState(e.title), [a, c] = v.useState(e.description || ""), [h, f] = v.useState(e.priority), [g, y] = v.useState(e.status), [k, w] = v.useState(!1), [I, p] = v.useState(""), [d, m] = v.useState(null), [x, S] = v.useState(null), N = v.useCallback((_) => {
    m(_), _ === "FINISHED" && e.status === "AI_PROCESSING" ? r({ ...e, status: "TO_REVIEW" }) : _ === "ERROR" && e.status === "AI_PROCESSING" && r({ ...e, status: "TODO" });
  }, [e, r]), E = v.useCallback(async () => {
    if (!o.trim()) {
      p("Title is required");
      return;
    }
    w(!0), p("");
    try {
      const _ = So(), z = await fetch(`/api/tickets/${t}/${e.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "X-CSRF-Token": _
        },
        body: JSON.stringify({
          title: o.trim(),
          description: a.trim(),
          priority: h,
          status: g
        })
      });
      if (!z.ok)
        throw new Error("Failed to update ticket");
      const $ = await z.json();
      r($);
    } catch (_) {
      p(_ instanceof Error ? _.message : "Failed to update ticket");
    } finally {
      w(!1);
    }
  }, [t, e.id, o, a, h, g, r]), j = v.useCallback(async () => {
    w(!0);
    try {
      const _ = So();
      if (!(await fetch(`/api/tickets/${t}/${e.id}`, {
        method: "DELETE",
        headers: {
          "X-CSRF-Token": _
        }
      })).ok)
        throw new Error("Failed to delete ticket");
      Il(`Ticket "${e.title}" deleted successfully`, "success"), r({ ...e, status: "CANCELLED" }), n();
    } catch (_) {
      const z = _ instanceof Error ? _.message : "Failed to delete ticket";
      p(z), Il(z, "error");
    } finally {
      w(!1), S(null);
    }
  }, [t, e, r, n]), D = v.useCallback(async () => {
    w(!0);
    try {
      const _ = So();
      if (!(await fetch(`/api/tickets/${e.id}/archive`, {
        method: "POST",
        headers: {
          "X-CSRF-Token": _
        }
      })).ok)
        throw new Error("Failed to archive ticket");
      Il(`Ticket "${e.title}" archived`, "success"), r({ ...e, isArchived: !0 }), n();
    } catch (_) {
      const z = _ instanceof Error ? _.message : "Failed to archive ticket";
      p(z), Il(z, "error");
    } finally {
      w(!1), S(null);
    }
  }, [e, r, n]), C = v.useCallback(
    (_) => {
      _.key === "Escape" && n();
    },
    [n]
  ), L = e.status === "HANDLE" || e.status === "AI_PROCESSING";
  return /* @__PURE__ */ u.jsx(
    "div",
    {
      className: "modal-overlay",
      onClick: n,
      onKeyDown: C,
      role: "dialog",
      "aria-modal": "true",
      children: /* @__PURE__ */ u.jsxs(
        "div",
        {
          className: "modal-content modal-lg",
          onClick: (_) => _.stopPropagation(),
          children: [
            /* @__PURE__ */ u.jsxs("div", { className: "modal-header", children: [
              /* @__PURE__ */ u.jsxs("div", { className: "flex-1", children: [
                l ? /* @__PURE__ */ u.jsx(
                  "input",
                  {
                    type: "text",
                    className: "form-input text-lg font-semibold",
                    value: o,
                    onChange: (_) => s(_.target.value),
                    autoFocus: !0
                  }
                ) : /* @__PURE__ */ u.jsx("h2", { className: "text-lg font-semibold", children: e.title }),
                /* @__PURE__ */ u.jsxs("div", { className: "flex items-center gap-2 mt-2", children: [
                  /* @__PURE__ */ u.jsx("span", { className: `status-badge status-${e.status.toLowerCase()}`, children: Lg[e.status] }),
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
              I && /* @__PURE__ */ u.jsx("div", { className: "mb-4 p-3 text-sm rounded-md bg-destructive/10 text-destructive border border-destructive/20", children: I }),
              e.agentId && /* @__PURE__ */ u.jsx("div", { className: "mb-4", children: /* @__PURE__ */ u.jsx(
                Ig,
                {
                  agentId: e.agentId,
                  ticketId: e.id,
                  ticketTitle: e.title,
                  ticketStatus: e.status,
                  onStatusChange: N,
                  onFollowupSent: () => {
                    r({ ...e, status: "AI_PROCESSING" });
                  },
                  onValidate: () => {
                    r({ ...e, status: "DONE" }), n();
                  }
                }
              ) }),
              L && !e.agentId && /* @__PURE__ */ u.jsxs("div", { className: "mb-4 p-4 rounded-md bg-status-processing/10 border border-status-processing/20", children: [
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
                l ? /* @__PURE__ */ u.jsx(
                  "textarea",
                  {
                    className: "form-input",
                    value: a,
                    onChange: (_) => c(_.target.value),
                    rows: 6,
                    placeholder: "Add task details, requirements, acceptance criteria..."
                  }
                ) : /* @__PURE__ */ u.jsx("div", { className: "p-3 rounded-md bg-muted min-h-[100px] text-sm whitespace-pre-wrap", children: e.description || /* @__PURE__ */ u.jsx("span", { className: "text-muted-foreground", children: "No description" }) })
              ] }),
              l && /* @__PURE__ */ u.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
                /* @__PURE__ */ u.jsxs("div", { className: "form-group", children: [
                  /* @__PURE__ */ u.jsx("label", { className: "form-label", children: "Priority" }),
                  /* @__PURE__ */ u.jsxs(
                    "select",
                    {
                      className: "form-input",
                      value: h,
                      onChange: (_) => f(_.target.value),
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
                      value: g,
                      onChange: (_) => y(_.target.value),
                      disabled: L,
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
            x && /* @__PURE__ */ u.jsx("div", { className: "confirm-dialog", children: /* @__PURE__ */ u.jsxs("div", { className: "confirm-dialog-content", children: [
              /* @__PURE__ */ u.jsx("p", { className: "confirm-dialog-message", children: x === "delete" ? `Are you sure you want to delete "${e.title}"? This action cannot be undone.` : `Archive "${e.title}"? It will be moved to the Archive page.` }),
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
                    className: `btn ${x === "delete" ? "btn-destructive" : "btn-primary"}`,
                    onClick: x === "delete" ? j : D,
                    disabled: k,
                    children: k ? "Processing..." : x === "delete" ? "Delete" : "Archive"
                  }
                )
              ] })
            ] }) }),
            /* @__PURE__ */ u.jsx("div", { className: "modal-actions", children: l ? /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
              /* @__PURE__ */ u.jsx(
                "button",
                {
                  type: "button",
                  className: "btn btn-destructive",
                  onClick: () => S("delete"),
                  disabled: k || !!x,
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
                  disabled: k || !!x,
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
                    i(!1), s(e.title), c(e.description || ""), f(e.priority), y(e.status);
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
                  onClick: () => i(!0),
                  disabled: L,
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
function So() {
  const e = document.querySelector('meta[name="csrf-token"]');
  return (e == null ? void 0 : e.getAttribute("content")) || "";
}
const _g = [
  { id: "BACKLOG", title: "Backlog", icon: "📋" },
  { id: "TODO", title: "To Do", icon: "📝" },
  { id: "HANDLE", title: "Handle", icon: "🤖" },
  { id: "AI_PROCESSING", title: "AI Processing", icon: "⚡" },
  { id: "TO_REVIEW", title: "To Review", icon: "👀" },
  { id: "DONE", title: "Done", icon: "✅" }
];
function Og() {
  const [e, t] = v.useState(null), [n, r] = v.useState(null), [l, i] = v.useState(null), [o, s] = v.useState(!1), [a, c] = v.useState(0), [h, f] = v.useState("BACKLOG");
  v.useEffect(() => {
    const D = document.getElementById("board-state");
    if (D != null && D.textContent)
      try {
        const L = JSON.parse(D.textContent);
        t(L), c(L.archivedCount || 0);
      } catch (L) {
        console.error("Failed to parse board state:", L);
      }
    const C = document.getElementById("new-ticket-btn");
    return C && C.addEventListener("click", () => s(!0)), document.querySelectorAll(".tab-btn").forEach((L) => {
      L.addEventListener("click", (_) => {
        const z = _.target.dataset.column;
        z && (f(z), document.querySelectorAll(".tab-btn").forEach(($) => {
          $.classList.remove("bg-muted"), $.classList.add("hover:bg-muted");
        }), _.target.classList.add("bg-muted"), _.target.classList.remove("hover:bg-muted"));
      });
    }), () => {
      C && C.removeEventListener("click", () => s(!0));
    };
  }, []), v.useEffect(() => {
    if (!(e != null && e.projectId)) return;
    const D = setInterval(async () => {
      if (!n)
        try {
          const C = await fetch(`/project/${e.projectId}/board/state`);
          if (!C.ok) return;
          const L = await C.json(), _ = [];
          L.tickets.forEach(($) => {
            const K = e.tickets.find((J) => J.id === $.id);
            K && K.status !== $.status && _.push(`#${$.id.slice(-4)} → ${$.status.replace("_", " ")}`);
          }), (L.tickets.length !== e.tickets.length || _.length > 0 || L.tickets.some(($) => {
            const K = e.tickets.find((J) => J.id === $.id);
            return !K || K.title !== $.title || K.prLink !== $.prLink || K.assigneeId !== $.assigneeId;
          })) && (t(L), _.length > 0 && xt(`Ticket updated: ${_[0]}`, "success"));
        } catch (C) {
          console.debug("Sync poll failed:", C);
        }
    }, 2e3);
    return () => clearInterval(D);
  }, [e == null ? void 0 : e.projectId, e == null ? void 0 : e.tickets, n]);
  const g = Am(
    bu(xa, {
      activationConstraint: { distance: 8 }
    }),
    bu(ga, {
      coordinateGetter: hg
    })
  ), y = v.useCallback(
    (D) => {
      const C = D.active.id, L = e == null ? void 0 : e.tickets.find((_) => _.id === C);
      L && r(L);
    },
    [e]
  ), k = v.useCallback((D) => {
  }, []), w = v.useCallback(
    async (D) => {
      const { active: C, over: L } = D;
      if (r(null), !L || !e) return;
      const _ = C.id, z = L.id, $ = e.tickets.find((K) => K.id === _);
      if (!(!$ || $.status === z)) {
        t((K) => K && {
          ...K,
          tickets: K.tickets.map(
            (J) => J.id === _ ? { ...J, status: z } : J
          )
        }), z === "HANDLE" && xt(`Ticket #${$.id.slice(-4)} dispatched to Cursor Agent`, "warning");
        try {
          const K = Co();
          if (!(await fetch(
            `/api/tickets/${e.projectId}/${_}/status`,
            {
              method: "PATCH",
              headers: {
                "Content-Type": "application/json",
                "X-CSRF-Token": K
              },
              body: JSON.stringify({ status: z })
            }
          )).ok)
            throw new Error("Failed to update ticket status");
          z === "HANDLE" && xt("AI agent started processing", "success");
        } catch (K) {
          console.error("Failed to update ticket:", K), xt("Failed to update ticket", "error"), t((J) => J && {
            ...J,
            tickets: J.tickets.map(
              (X) => X.id === _ ? { ...X, status: $.status } : X
            )
          });
        }
      }
    },
    [e]
  ), I = v.useCallback((D) => {
    i(D);
  }, []), p = v.useCallback((D) => {
    t((C) => C && {
      ...C,
      tickets: C.tickets.map(
        (L) => L.id === D.id ? D : L
      )
    }), i(null);
  }, []), d = v.useCallback((D) => {
    t((C) => C && {
      ...C,
      tickets: [...C.tickets, D]
    }), s(!1), xt("Ticket created successfully", "success");
  }, []), m = v.useCallback(async (D) => {
    if (e)
      try {
        if (!(await fetch(`/api/tickets/${D.id}/archive`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-CSRF-Token": Co()
          }
        })).ok)
          throw new Error("Failed to archive ticket");
        t((L) => L && {
          ...L,
          tickets: L.tickets.filter((_) => _.id !== D.id)
        }), c((L) => L + 1), xt(`"${D.title}" archived`, "success");
      } catch (C) {
        console.error("Failed to archive ticket:", C), xt("Failed to archive ticket", "error");
      }
  }, [e]), [x, S] = v.useState(null), N = v.useCallback((D) => {
    S(D);
  }, []), E = v.useCallback(async () => {
    if (!(!e || !x))
      try {
        if (!(await fetch(`/api/tickets/${e.projectId}/${x.id}`, {
          method: "DELETE",
          headers: {
            "X-CSRF-Token": Co()
          }
        })).ok)
          throw new Error("Failed to delete ticket");
        t((C) => C && {
          ...C,
          tickets: C.tickets.filter((L) => L.id !== x.id)
        }), xt(`"${x.title}" deleted`, "success");
      } catch (D) {
        console.error("Failed to delete ticket:", D), xt("Failed to delete ticket", "error");
      } finally {
        S(null);
      }
  }, [e, x]), j = v.useCallback((D) => {
    D.isArchived ? (t((C) => C && {
      ...C,
      tickets: C.tickets.filter((L) => L.id !== D.id)
    }), c((C) => C + 1), i(null)) : p(D);
  }, [p]);
  return v.useEffect(() => {
    const D = document.getElementById("archive-count");
    D && (D.textContent = String(a), D.classList.toggle("hidden", a === 0));
  }, [a]), e ? /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
    /* @__PURE__ */ u.jsxs(
      Ov,
      {
        sensors: g,
        collisionDetection: gf,
        onDragStart: y,
        onDragOver: k,
        onDragEnd: w,
        children: [
          /* @__PURE__ */ u.jsx("div", { className: "kanban-container", children: _g.map((D) => /* @__PURE__ */ u.jsx(
            Sg,
            {
              id: D.id,
              title: D.title,
              icon: D.icon,
              tickets: e.tickets.filter((C) => C.status === D.id),
              isActive: h === D.id,
              onTicketClick: I,
              onArchive: D.id === "DONE" ? m : void 0,
              onDelete: D.id !== "HANDLE" && D.id !== "AI_PROCESSING" ? N : void 0
            },
            D.id
          )) }),
          x && /* @__PURE__ */ u.jsx("div", { className: "modal-overlay", onClick: () => S(null), children: /* @__PURE__ */ u.jsxs("div", { className: "delete-confirm-modal", onClick: (D) => D.stopPropagation(), children: [
            /* @__PURE__ */ u.jsx("h3", { children: "Delete Ticket?" }),
            /* @__PURE__ */ u.jsxs("p", { children: [
              'Are you sure you want to delete "',
              x.title,
              '"?'
            ] }),
            /* @__PURE__ */ u.jsx("p", { className: "text-sm text-muted-foreground", children: "This action cannot be undone." }),
            /* @__PURE__ */ u.jsxs("div", { className: "delete-confirm-actions", children: [
              /* @__PURE__ */ u.jsx("button", { className: "btn btn-secondary", onClick: () => S(null), children: "Cancel" }),
              /* @__PURE__ */ u.jsx("button", { className: "btn btn-destructive", onClick: E, children: "Delete" })
            ] })
          ] }) }),
          /* @__PURE__ */ u.jsx(Zv, { children: n ? /* @__PURE__ */ u.jsx(
            $f,
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
      jg,
      {
        projectId: e.projectId,
        projectName: e.projectName,
        branchPresets: e.branchPresets || [],
        defaultBranch: e.defaultBranch || "main",
        members: e.members || [],
        onClose: () => s(!1),
        onSubmit: d
      }
    ),
    l && /* @__PURE__ */ u.jsx(
      Pg,
      {
        ticket: l,
        projectId: e.projectId,
        onClose: () => i(null),
        onUpdate: j
      }
    )
  ] }) : /* @__PURE__ */ u.jsx("div", { className: "flex items-center justify-center h-full", children: /* @__PURE__ */ u.jsx("div", { className: "ai-spinner" }) });
}
function Co() {
  const e = document.querySelector('meta[name="csrf-token"]');
  return (e == null ? void 0 : e.getAttribute("content")) || "";
}
function xt(e, t = "success") {
  typeof window < "u" && window.showToast && window.showToast(e, t);
}
function qu() {
  const e = document.getElementById("kanban-board");
  if (!e) {
    console.warn("Kanban board container not found");
    return;
  }
  Eo.createRoot(e).render(
    /* @__PURE__ */ u.jsx(te.StrictMode, { children: /* @__PURE__ */ u.jsx(Og, {}) })
  );
}
document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", qu) : qu();
